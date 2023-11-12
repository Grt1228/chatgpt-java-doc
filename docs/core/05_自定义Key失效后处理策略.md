---
id: api_key_invalid
title: 自定义Key失效后处理策略
hide_title: false
sidebar_position: 5
---

SDK支持key失效后的自定义处理方案，可以进行失效后的移除。主要实现逻辑就是自定义OkHttpClient的拦截器。
主要步骤如下：
- 继承OpenAiAuthInterceptor
- 实现onErrorDealApiKeys，noHaveActiveKeyWarring方法
- 自定义OkHttpClient并配置OpenAiAuthInterceptor拦截器

:::caution

下面以**sdk默认的处理方案DynamicKeyOpenAiAuthInterceptor**举例。
DynamicKeyOpenAiAuthInterceptor只处理了，**key错误，账号被封**这两种异常情况，其他异常情况需要自定义实现。

:::


## 1、父类OpenAiAuthInterceptor
注释很清楚，具体方法的作用可以直接看注释即可。

```java
public abstract class OpenAiAuthInterceptor implements Interceptor {


    /**
     * key 集合
     */
    @Getter
    @Setter
    private List<String> apiKey;
    /**
     * 自定义的key的使用策略
     */
    @Getter
    @Setter
    private KeyStrategyFunction<List<String>, String> keyStrategy;

    /**
     * 预警触发参数配置，配置参数实现飞书、钉钉、企业微信、邮箱预警等功能
     */
    @Getter
    @Setter
    private Map warringConfig;

    /**
     * 自定义apiKeys的处理逻辑
     *
     * @param errorKey 错误的key
     * @return 返回值是新的apiKeys
     */
    protected abstract List<String> onErrorDealApiKeys(String errorKey);

    /**
     * 所有的key都失效后，自定义预警配置
     * 可以通过warringConfig配置参数实现飞书、钉钉、企业微信、邮箱预警等
     */
    protected abstract void noHaveActiveKeyWarring();


    /**
     * 获取请求key
     *
     * @return key
     */
    public final String getKey() {
        if (CollectionUtil.isEmpty(apiKey)) {
            this.noHaveActiveKeyWarring();
            throw new BaseException(CommonError.NO_ACTIVE_API_KEYS);
        }
        return keyStrategy.apply(apiKey);
    }

    /**
     * 默认的鉴权处理方法
     *
     * @param key      api key
     * @param original 源请求体
     * @return 请求体
     */
    public Request auth(String key, Request original) {
        Request request = original.newBuilder()
                .header(Header.AUTHORIZATION.getValue(), "Bearer " + key)
                .header(Header.CONTENT_TYPE.getValue(), ContentType.JSON.getValue())
                .method(original.method(), original.body())
                .build();
        return request;
    }
}

```

## 2、创建拦截器继承抽象父类OpenAiAuthInterceptor
并实现父类抽象方法。

```java

/**
 * 描述：动态处理key的鉴权拦截器
 *
 * @author https:www.unfbx.com
 * @since 2023-04-25
 */
@Getter
@Slf4j
public class DynamicKeyOpenAiAuthInterceptor extends OpenAiAuthInterceptor {
    /**
     * 账号被封了
     */
    private static final String ACCOUNT_DEACTIVATED = "account_deactivated";
    /**
     * key不正确
     */
    private static final String INVALID_API_KEY = "invalid_api_key";

    /**
     * 请求头处理
     *
     */
    public DynamicKeyOpenAiAuthInterceptor() {
        this.setWarringConfig(null);
    }

    /**
     * 构造方法
     *
     * @param warringConfig 所有的key都失效后的告警参数配置
     */
    public DynamicKeyOpenAiAuthInterceptor(Map warringConfig) {
        this.setWarringConfig(warringConfig);
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        String key = getKey();
        Request original = chain.request();
        Request request = this.auth(key, original);
        Response response = chain.proceed(request);
        if (!response.isSuccessful()) {
            String errorMsg = response.body().string();
            if (response.code() == CommonError.OPENAI_AUTHENTICATION_ERROR.code()
                    || response.code() == CommonError.OPENAI_LIMIT_ERROR.code()
                    || response.code() == CommonError.OPENAI_SERVER_ERROR.code()) {
                OpenAiResponse openAiResponse = JSONUtil.toBean(errorMsg, OpenAiResponse.class);
                String errorCode = openAiResponse.getError().getCode();
                log.error("--------> 请求openai异常，错误code：{}", errorCode);
                log.error("--------> 请求异常：{}", errorMsg);
                //账号被封或者key不正确就移除掉
                if (ACCOUNT_DEACTIVATED.equals(errorCode) || INVALID_API_KEY.equals(errorCode)) {
                    super.setApiKey(this.onErrorDealApiKeys(key));
                }
                throw new BaseException(openAiResponse.getError().getMessage());
            }
            //非官方定义的错误code
            log.error("--------> 请求异常：{}", errorMsg);
            OpenAiResponse openAiResponse = JSONUtil.toBean(errorMsg, OpenAiResponse.class);
            if (Objects.nonNull(openAiResponse.getError())) {
                log.error(openAiResponse.getError().getMessage());
                throw new BaseException(openAiResponse.getError().getMessage());
            }
            throw new BaseException(CommonError.RETRY_ERROR);
        }
        return response;
    }


    @Override
    protected List<String> onErrorDealApiKeys(String errorKey) {
        List<String> apiKey = super.getApiKey().stream().filter(e -> !errorKey.equals(e)).collect(Collectors.toList());
        log.error("--------> 当前ApiKey：[{}] 失效了，移除！", errorKey);
        return apiKey;
    }

    /**
     * 所有的key都失效后，自定义预警配置
     * 不配置直接return
     */
    @Override
    protected void noHaveActiveKeyWarring() {
        log.error("--------> [告警] 没有可用的key！！！");
        return;
    }

    @Override
    public Request auth(String key, Request original) {
        return super.auth(key, original);
    }
}

```
## 3、自定义OkHttpClient并添加自定义的拦截器
参考核心功能第一章

```java
public class Test {
    public static void main(String[] args) {
        OkHttpClient okHttpClient = new OkHttpClient
                .Builder()
                .build();
        OpenAiStreamClient client = OpenAiStreamClient.builder()
                .apiKey(Arrays.asList("sk-********","sk-********"))
                .okHttpClient(okHttpClient)//设置自定义的okHttpClient客户端
		//自定义key异常处理策略
		.authInterceptor(new DynamicKeyOpenAiAuthInterceptor())
                .build();
    }
}
```
