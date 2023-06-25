---
id: tiktoken
title: Tokens计算
hide_title: false
sidebar_position: 4
---

Chatgpt-Java 更新到1.0.12+默认支持Tokens计算，增加[TikTokensUtil](https://github.com/Grt1228/chatgpt-java/blob/main/src/main/java/com/unfbx/chatgpt/utils/TikTokensUtil.java) 工具类.

## tokens计算说明
OpenAi 的tokens计算规则和模型相关的，不同的模型计算方法是不一样的。


## 使用示例
完整使用示例请参考：[TikTokensTest](https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/TikTokensTest.java)

### 结合chat模型使用示例：
完整示例参考：[OpenAiClientTest](https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/OpenAiClientTest.java)
```
    public void chatTokensTest() {
        //聊天模型：gpt-3.5
        List<Message> messages = new ArrayList<>(2);
        messages.add(Message.builder().role(Message.Role.USER).content("关注微信公众号：程序员的黑洞。").build());
        messages.add(Message.builder().role(Message.Role.USER).content("进入chatgpt-java交流群获取最新版本更新通知。").build());
        ChatCompletion chatCompletion = ChatCompletion.builder().messages(messages).build();
        ChatCompletionResponse chatCompletionResponse = v2.chatCompletion(chatCompletion);
        //获取请求的tokens数量
        long tokens = chatCompletion.tokens();
        //这种方式也可以
//        long tokens = TikTokensUtil.tokens(chatCompletion.getModel(),messages);
        log.info("Message集合文本：【{}】", messages, tokens);
        log.info("本地计算的请求的tokens数{}", tokens);
        log.info("本地计算的返回的tokens数{}", TikTokensUtil.tokens(chatCompletion.getModel(),chatCompletionResponse.getChoices().get(0).getMessage().getContent()));
        log.info("---------------------------------------------------");
        log.info("Open AI 官方计算的总的tokens数{}", chatCompletionResponse.getUsage().getTotalTokens());
        log.info("Open AI 官方计算的请求的tokens数{}", chatCompletionResponse.getUsage().getPromptTokens());
        log.info("Open AI 官方计算的返回的tokens数{}", chatCompletionResponse.getUsage().getCompletionTokens());
    }
```
### 单独使用示例：
```java
public class TikTokensTest {
    String text;
    List<Message> messages;

    @Before
    public void prepareData() {
        text = "关注微信公众号：程序员的黑洞。进入chatgpt-java交流群获取最新版本更新通知。";
        messages = new ArrayList<>(2);
        messages.add(Message.builder().role(Message.Role.USER).content("关注微信公众号：程序员的黑洞。").build());
        messages.add(Message.builder().role(Message.Role.USER).content("进入chatgpt-java交流群获取最新版本更新通知。").build());
    }
    /**
     * gpt-3.5和gpt4.0聊天模型接口计算推荐这种方法
     */
    @Test
    public void chatCompletionTokensTest() {
        
        ChatCompletion completion = ChatCompletion.builder().messages(messages).build();
        long tokens = completion.tokens();
        log.info("Message集合文本：【{}】", messages, tokens);
        log.info("总tokens数{}", tokens);
    }

    /**
     * Completion 接口计算推荐使用这种方法
     */
    @Test
    public void completionTokensTest() {
        Completion completion = Completion.builder().prompt(text).build();
        long tokens = completion.tokens();
        log.info("单句文本：【{}】", text);
        log.info("总tokens数{}", tokens);
    }

    /**
     * 通过模型模型名称计算
     */
    @Test
    public void byModelNameTest() {
        String modelName = ChatCompletion.Model.GPT_4.getName();
//        String modelName = ChatCompletion.Model.GPT_3_5_TURBO.getName();
        List<Integer> encode = TikTokensUtil.encode(modelName, text);
        log.info(encode.toString());
        long tokens = TikTokensUtil.tokens(modelName, text);
        log.info("单句文本：【{}】", text);
        log.info("总tokens数{}", tokens);
        log.info("--------------------------------------------------------------");
        tokens = TikTokensUtil.tokens(modelName, messages);
        log.info("Message集合文本：【{}】", messages, tokens);
        log.info("总tokens数{}", tokens);
    }

    /**
     * 通过Encoding计算
     */
    @Test
    public void byEncodingTest() {
        EncodingRegistry registry = Encodings.newDefaultEncodingRegistry();
        Encoding enc = registry.getEncoding(EncodingType.P50K_BASE);
        List<Integer> encode = TikTokensUtil.encode(enc, text);
        log.info(encode.toString());
        long tokens = TikTokensUtil.tokens(enc, text);
        log.info("单句文本：【{}】", text);
        log.info("总tokens数{}", tokens);
    }

    /**
     * 通过EncodingType计算
     */
    @Test
    public void byEncodingTypeTest() {
        List<Integer> encode = TikTokensUtil.encode(EncodingType.CL100K_BASE, text);
        log.info(encode.toString());
        long tokens = TikTokensUtil.tokens(EncodingType.CL100K_BASE, text);
        log.info("单句文本：【{}】", text);
        log.info("总tokens数{}", tokens);
    }

}
```
## 站在巨人的肩膀

感谢大佬：[knuddelsgmbh](https://github.com/knuddelsgmbh) 的[jtokkit](https://github.com/knuddelsgmbh/jtokkit) 的开源计算算法。
