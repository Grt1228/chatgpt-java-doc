---
id: chat_gpt_return_json
title: 10、ChatGPT指定返回Json格式
hide_title: false
sidebar_position: 5
---

## 1、介绍

最新版的OpenAi接口支持执行数据返回格式。以下仅举例阻塞输出的方案，流式输出一样的使用方法不再举例。

指定数据格式目前支持：
- json_object
- text

参考源码：com/unfbx/chatgpt/entity/chat/ResponseFormat.java

## 2、创建Client
```java
@Slf4j
public class OpenAiClientTest {

    private OpenAiClient client;
    
    @Before
    public void before() {
        HttpLoggingInterceptor httpLoggingInterceptor = new HttpLoggingInterceptor(new OpenAILogger());
        //！！！！千万别再生产或者测试环境打开BODY级别日志！！！！
        //！！！生产或者测试环境建议设置为这三种级别：NONE,BASIC,HEADERS,！！！
        httpLoggingInterceptor.setLevel(HttpLoggingInterceptor.Level.HEADERS);
        OkHttpClient okHttpClient = new OkHttpClient
                .Builder()
                .addInterceptor(httpLoggingInterceptor)
                .addInterceptor(new OpenAiResponseInterceptor())
                .connectTimeout(10, TimeUnit.SECONDS)
                .writeTimeout(30, TimeUnit.SECONDS)
                .readTimeout(30, TimeUnit.SECONDS)
                .build();
        client = OpenAiClient.builder()
                .apiKey(Arrays.asList("*********************"))
                .okHttpClient(okHttpClient)
                //自己做了代理就传代理地址，没有可不不传,(关注公众号回复：openai ，获取免费的测试代理地址)
                .apiHost("https://*******/")
                .build();
    }
}
```

## 3、请求
```java
/**
 * 自定义返回数据格式
 */
@Test
public void diyReturnDataModelChat() {
    Message message = Message.builder().role(Message.Role.USER).content("随机输出10个单词，使用json输出").build();
    ChatCompletion chatCompletion = ChatCompletion
        .builder()
        .messages(Collections.singletonList(message))
        .responseFormat(ResponseFormat.builder().type(ResponseFormat.Type.JSON_OBJECT.getName()).build())
        .model(ChatCompletion.Model.GPT_4_1106_PREVIEW.getName())
        .build();
    ChatCompletionResponse chatCompletionResponse = client.chatCompletion(chatCompletion);
    chatCompletionResponse.getChoices().forEach(e -> System.out.println(e.getMessage()));
}

```

```json
{
  "words": [
    "aberration",
    "nostalgia",
    "quintessential",
    "harmony",
    "serendipity",
    "benevolent",
    "ephemeral",
    "labyrinth",
    "zenith",
    "vivacious"
  ]
}
```
