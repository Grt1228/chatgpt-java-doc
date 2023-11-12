---
id: chat_gpt_Dall_e_3
title: Dall-e-3生成图片
hide_title: false
sidebar_position: 5
---

## 1、介绍

最新版的OpenAi接口支持Dall-e-3模型生成图片，功能更加强大。

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
 * 新版图片生成模型使用示例
 */
@Test
public void generateImageByDall_e_3() {
    Image image = Image.builder()
        .responseFormat(com.unfbx.chatgpt.entity.images.ResponseFormat.URL.getName())
        .model(Image.Model.DALL_E_3.getName())
        .prompt("一个咖啡杯，上面印刷Unfbx四个字母。")
        .n(1)
        .quality(Image.Quality.HD.getName())
        .size(SizeEnum.size_1024_1792.getName())
        .style(Image.Style.NATURAL.getName())
        .build();
    ImageResponse imageResponse = client.genImages(image);
//        ImageResponse imageResponse = client.genImages("一个咖啡杯，上面印刷Unfbx四个字母。");
    System.out.println(imageResponse.getData().get(0).getUrl());
    }

```

