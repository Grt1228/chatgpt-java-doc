---
id: chat_gpt_fine_tune_job
title: FineTuneJob完整使用示例
hide_title: false
sidebar_position: 5
---

## 1、介绍

OpenAi支持自定义训练专属模型，通过FineTuneJob进行模型微调训练。
FineTuneJob支持的模型有：
- gpt-3.5-turbo-1106
- gpt-3.5-turbo-0613
- babbage-002
- gpt-4-0613
- davinci-002

更多详细参考源码：com/unfbx/chatgpt/entity/fineTune/job/FineTuneJob.java


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

## 3、创建训练数据文件
创建文件格式为`json1`下面是一个示例文件：`fine_tune_test_file.json1`
文件在github源码根目录，文件内容；

```
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "chagpt-java好用么？"}, {"role": "assistant", "content": "还行吧。"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "chagpt-java最新版本是什么？"}, {"role": "assistant", "content": "1.1.2版本"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "chagpt-java支持流式输出么？"}, {"role": "assistant", "content": "最新版支持流式输出"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "chagpt-java的作者是谁？"}, {"role": "assistant", "content": "作者是Unfbx，个人网站：https://www.unfbx.com"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "Unfbx是chagpt-java的作者，微信公众号是什么？"}, {"role": "assistant", "content": "程序员的黑洞。"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "Unfbx是chagpt-java的作者，个人博客地址是什么？"}, {"role": "assistant", "content": "https://www.unfbx.com"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "Unfbx是chagpt-java的作者，chagpt-java官方地址是什么？"}, {"role": "assistant", "content": "https://chatgpt-java.unfbx.com"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "Unfbx是chagpt-java的作者，chagpt-java的github地址是什么？"}, {"role": "assistant", "content": "https://github.com/Grt1228/chatgpt-java"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "Unfbx是chagpt-java的作者，chagpt-java的简单介绍。"}, {"role": "assistant", "content": "OpenAI官方Api的Java SDK，可以快速接入项目使用。目前支持OpenAI官方全部接口，**同时支持Tokens计算。参考文档：[Tokens_README.md](https://github.com/Grt1228/chatgpt-java/blob/main/Tokens_README.md)**"}]}
{"messages": [{"role": "system", "content": "OnBot是一个聊天机器人。"}, {"role": "user", "content": "OpenAi的官方Java Sdk 是什么？"}, {"role": "assistant", "content": "chagpt-java，github地址：https://github.com/Grt1228/chatgpt-java"}]}

```

## 3、上传文件
```
/**
 * fineTuneJob使用示例
 */
@Test
public void uploadFile() {
    UploadFileResponse uploadFileResponse = client.uploadFile(new java.io.File("fine_tune_test_file.json1"));
    //返回文件的id：file-6KaBdtVlaassk9Y2P5ZjTqIC
    System.out.println(uploadFileResponse.getId());
}
```
## 3、创建微调job
```
@Test
public void fineTuneJob() {
    //file-KaNQn5V9YHlLqVQzo8CUMdIr是文件上传返回的文件id
    FineTuneJobResponse fineTuneJobResponse = client.fineTuneJob("file-KaNQn5V9YHlLqVQzo8CUMdIr");
    //返回job id = ftjob-5WQr0bZ7grvjnY3Or2sqiixl
    System.out.println(fineTuneJobResponse.toString());
}
```

## 3、查看微调job
### 3.1、详细信息
- FineTuneJobResponse的fineTunedModel属性就是微调的模型id，也是后续使用的模型id

> 需要主义只有FineTuneJob执行完成fineTunedModel属性才会有值，job失败或者未执行完成此属性为null。

结合第4.0章节可以看到job的执行信息。

```
@Test
public void retrieveFineTuneJob() {
    //传入job id
    FineTuneJobResponse fineTuneJobResponse = client.retrieveFineTuneJob("ftjob-5WQr0bZ7grvjnY3Or2sqiixl");
    System.out.println(fineTuneJobResponse);
}
```
### 3.2、job列表
支持分页查询

```
@Test
public void retrieveFineTuneJob() {

//        FineTuneJobListResponse<FineTuneJobResponse> jobListResponse = client.fineTuneJobs("ftjob-cG7zIraBhAkq5Ybs7311lH7t", 5);
    FineTuneJobListResponse<FineTuneJobResponse> jobListResponse = client.fineTuneJobs(null, 20);
    System.out.println(jobListResponse);
}
```

## 4、微调job执行进度查询
支持分页查询，支持分页

```
@Test
public void fineTuneJobEvents() {
    FineTuneJobListResponse<FineTuneJobEvent> listResponse = client.fineTuneJobEvents("ftjob-5WQr0bZ7grvjnY3Or2sqiixl", null, 20);
//        FineTuneJobListResponse<FineTuneJobEvent> listResponse = client.fineTuneJobEvents("ftjob-5WQr0bZ7grvjnY3Or2sqiixl", "ftevent-WwB8lpWxhjgUJX9DYdb47zJe", 20);
    listResponse.getData().forEach(e -> System.out.println(e.getMessage()));
}
```

输出信息，输出信息会返回创建的模型id，这个就是后续使用的模型id。
```
    The job has successfully completed
    New fine-tuned model created: ft:gpt-3.5-turbo-1106:personal::8K5KwJTU
    Step 91/100: training loss=0.45
    Step 81/100: training loss=0.00
    Step 71/100: training loss=0.00
    Step 61/100: training loss=0.94
    Step 51/100: training loss=0.19
    Step 41/100: training loss=0.06
    Step 31/100: training loss=0.95
    Step 21/100: training loss=1.99
    Step 11/100: training loss=2.50
    Step 1/100: training loss=5.42
    Fine-tuning job started
    Files validated, moving job to queued state
    Validating training file: file-KaNQn5V9YHlLqVQzo8CUMdIr
    Created fine-tuning job: ftjob-5WQr0bZ7grvjnY3Or2sqiixl
```



## 4、微调模型使用


>注意model参数为自定义的模型id。此id会在fineTuneJobEvents完成后返回。

此id的获取有几种方式：
- 1、fineTuneJobEvents接口完成后返回。
- 2、通过3.1章节查询job详细信息可以获取模型id：fineTunedModel属性。
- 3、models接口返回，参考第5章


```
@Test
public void fineTuneJobModelChat() {
    Message message1 = Message.builder().role(Message.Role.SYSTEM).content("OnBot是一个聊天机器人。").build();
    Message message2 = Message.builder().role(Message.Role.USER).content("OnBot请问：Chatgpt-java的作者是谁？").build();
    List<Message> messages = new ArrayList<>(2);
    messages.add(message1);
    messages.add(message2);
    ChatCompletion chatCompletion = ChatCompletion
            .builder()
            .messages(messages)
            .model("ft:gpt-3.5-turbo-1106:personal::8K5KwJTU")
            .build();
    ChatCompletionResponse chatCompletionResponse = client.chatCompletion(chatCompletion);
    chatCompletionResponse.getChoices().forEach(e -> {
        System.out.println(e.getMessage());
    });
}
```

输出信息
```
作者是Unfbx，个人网站：https://www.unfbx.com
```

## 5、model列表

```
@Test
public void models() {
    List<Model> models = client.models();
    System.out.println(models);
}
```
