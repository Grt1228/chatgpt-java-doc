---
id: chat_gpt_with_pic
title: 附加图片的chatCompletion
hide_title: false
sidebar_position: 5
---

## 1、变化
附加图片的chatCompletion同时支持流式输出和阻塞输出，使用方法和chatCompletion大致相同，只有一些小的改动。
- 1、请求参数使用新的包装类型：*ChatCompletionWithPicture类*。
- 2、Message使用新的包装类：*MessagePicture*。
- 3、Content增加新的参数：imageUrl和type

## 2、创建Client
```java
@Slf4j
public class OpenAiClientTest {

    private OpenAiClient client;
    private OpenAiStreamClient streamClient;
    
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

        streamClient = OpenAiStreamClient.builder()
                //支持多key传入，请求时候随机选择
                .apiKey(Arrays.asList("*********************"))
                .okHttpClient(okHttpClient)
                //自己做了代理就传代理地址，没有可不不传,(关注公众号回复：openai ，获取免费的测试代理地址)
                .apiHost("https://*******/")
                .build();
    }
}
```

## 3、阻塞请求
```java
/**
 * 聊天模型支持图片流式示例
 */
@Test
public void pictureChat() {
    Content textContent = Content.builder().text("What’s in this image?").type(Content.Type.TEXT.getName()).build();
    ImageUrl imageUrl = ImageUrl.builder().url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg").build();
    Content imageContent = Content.builder().imageUrl(imageUrl).type(Content.Type.IMAGE_URL.getName()).build();
    List<Content> contentList = new ArrayList<>();
    contentList.add(textContent);
    contentList.add(imageContent);
    MessagePicture message = MessagePicture.builder().role(Message.Role.USER).content(contentList).build();
    //#####请求参数使用ChatCompletionWithPicture类
    ChatCompletionWithPicture chatCompletion = ChatCompletionWithPicture
            .builder()
            .messages(Collections.singletonList(message))
            .model(ChatCompletion.Model.GPT_4_VISION_PREVIEW.getName())
            .build();
    ChatCompletionResponse chatCompletionResponse = client.chatCompletion(chatCompletion);
    chatCompletionResponse.getChoices().forEach(e -> System.out.println(e.getMessage()));
}
```


## 3、流式请求
```java
/**
 * 聊天模型支持图片流式示例
 */
@Test
public void pictureChatV2() {
    Content textContent = Content.builder().text("What’s in this image?").type(Content.Type.TEXT.getName()).build();
    ImageUrl imageUrl = ImageUrl.builder().url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg").build();
    Content imageContent = Content.builder().imageUrl(imageUrl).type(Content.Type.IMAGE_URL.getName()).build();
    List<Content> contentList = new ArrayList<>();
    contentList.add(textContent);
    contentList.add(imageContent);
    MessagePicture message = MessagePicture.builder().role(Message.Role.USER).content(contentList).build();
    ChatCompletionWithPicture chatCompletion = ChatCompletionWithPicture
            .builder()
            .messages(Collections.singletonList(message))
            .model(ChatCompletion.Model.GPT_4_VISION_PREVIEW.getName())
            .build();
    ChatCompletionResponse chatCompletionResponse = client.chatCompletion(chatCompletion);
    chatCompletionResponse.getChoices().forEach(e -> System.out.println(e.getMessage()));
}
```

## 4、注意事项
附加图片的chatCompletion暂时不支持以下简易接口请求

- public void streamChatCompletion(List<Message> messages, EventSourceListener el) {.....}
- public ChatCompletionResponse chatCompletion(List<Message> messages){......}