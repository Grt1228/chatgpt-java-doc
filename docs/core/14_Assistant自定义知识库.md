---
id: chat_assistant
title: 14、Assistant自定义知识库示例
hide_title: false
sidebar_position: 5
---

## 1、介绍

OpenAi最新接口支持Assistant.

示例参考：https://blog.csdn.net/feiying101/article/details/134419154
感谢。

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
        openAiClient = OpenAiClient.builder()
                .apiKey(Arrays.asList("*********************"))
                .okHttpClient(okHttpClient)
                //自己做了代理就传代理地址，没有可不不传,(关注公众号回复：openai ，获取免费的测试代理地址)
                .apiHost("https://*******/")
                .build();
    }
}
```

## 3、文本转语音
```
public static void main(String[] args) {
    //1、上传文件
    UploadFileResponse uploadFileResponse = openAiClient.uploadFile("assistants", new java.io.File("C:\\Users\\****\\Desktop\\文件.pdf"));
    log.info("文件id：{}", uploadFileResponse.getId());
    //2、创建助手
    Tool tool = Tool.builder().type(Tool.Type.RETRIEVAL.getName()).build();
    Assistant assistant = Assistant.builder()
            //可以使用3.5模型
            .model(BaseChatCompletion.Model.GPT_4_1106_PREVIEW.getName())
            .name("Unfbx文件分析大师")
            .description("Unfbx文件分析大师是一个自定义文件分析助手。")
            .instructions("您将担任高级内容分析师。你的任务是基于上传的文件，回答用户问题，并提供深入见解。任务说明：1.当用户提问时，仔细分析问题并基于上传的文件给出回答;2.如果回答来自于上传的文件，请提供文件名称;3.如果上传的文件中没有能回答用户问题的参考内容，请直接回答\"我不知道\"。")
            .tools(Collections.singletonList(tool))
            .fileIds(Collections.singletonList(uploadFileResponse.getId()))
            .metadata(new HashMap())
            .build();
    AssistantResponse assistantResponse = openAiClient.assistant(assistant);
    log.info("助手id:{}", assistantResponse.getId());

    //3、创建线程
    Thread thread = Thread.builder().build();
    ThreadResponse threadResponse = openAiClient.thread(thread);
    log.info("线程id:{}", threadResponse.getId());


    //4、向助手发送信息
    ThreadMessage threadMessage = ThreadMessage.builder()
            .content("你知道开发者联盟是什么吗？")
            .role(ThreadMessage.Role.USER.getName())
            .fileIds(Collections.singletonList(uploadFileResponse.getId()))
            .build();

    MessageResponse messageResponse = openAiClient.message(threadResponse.getId(), threadMessage);
    System.out.println(messageResponse.getId());

    //5、执行人机交互(Run)
    HashMap<String, String> map = new HashMap<>();
    Run run = Run
            .builder()
            .assistantId(assistantResponse.getId())
            .build();
    RunResponse runResponse = openAiClient.run(threadResponse.getId(), run);

    //6、查询指定线程(Thread)下特定人机交互(Run)的执行状态(status)
    //Run处于completed状态，标识当前人机交互(Run)已经执行完成
    RunResponse runDetailResponse = openAiClient.retrieveRun(threadResponse.getId(), runResponse.getId());
    log.info("Run状态:{}", RunResponse.Status.COMPLETED.getName().equals(runDetailResponse.getStatus()));
    boolean flag = true;
    while (flag) {
        if (!RunResponse.Status.COMPLETED.getName().equals(runDetailResponse.getStatus())) {
            runDetailResponse = openAiClient.retrieveRun(threadResponse.getId(), runResponse.getId());
            log.info("Run状态:{}", RunResponse.Status.COMPLETED.getName().equals(runDetailResponse.getStatus()));
        }
        flag = false;
    }

    //7、查询指定线程(Thread)的消息列表
    PageRequest pageRequest = PageRequest.builder().build();
    AssistantListResponse<MessageResponse> messageList = openAiClient.messages(threadResponse.getId(), pageRequest);
    messageList.getData().forEach(e -> log.info("消息: {}", e.getContent().get(0).getText().getValue()));
    //8、重复步骤4、5、6、7。即可实现用户与助手的多轮对话。
}
```

输出信息：
```
19:14:57.929 [main] INFO com.unfbx.easyexceldemo.test.Test7 - 消息: 开发者联盟，正式名称为“华为开发者联盟”，是华为为内容开发者、分发者和推广者提供的B2B服务平台。它能让开发者参与到诸如Programs项目之类的活动，参与成为HUAWEI Developer Experts、HUAWEI Developer Groups成员/组织者、HUAWEI Student Developers成员/校园大使等。平台收集用户数据来提供客服服务、社交分享功能、用户行为分析等，并遵守隐私和个人信息保护相关法律。

上述信息来自于您上传的文件【文件.pdf】。
19:14:57.929 [main] INFO com.unfbx.easyexceldemo.test.Test7 - 消息: 你知道开发者联盟是什么吗？
```