---
id: chat_gpt_stream
title: ChatGPT流式输出
hide_title: false
sidebar_position: 5
---

SDK有两个OpenAi客户端OpenAiClient和OpenAiStreamClient。
- OpenAiClient支持OpenAI的所有接口，支持阻塞式输出聊天模型（gpt3.5 、4.0）。
- OpenAiStreamClient支持OpenAI的流式输出聊天模型(gpt3.5 、4.0)。

推荐自定义OkHttpClient实现两个Client，公用一个OkHttpClient即可。

流式输出和阻塞输出类似，只需要创建OpenAiStreamClient传入自定义的EventSourceListener即可。

举例为**默认的SDK实现：ConsoleEventSourceListener**。

更多web实现参考：

流式输出实现方式 | 小程序 | 安卓 | ios | H5 
---|---|---|---|---
SSE示例参考：[OpenAISSEEventSourceListener](https://github.com/Grt1228/chatgpt-steam-output/blob/main/src/main/java/com/unfbx/chatgptsteamoutput/listener/OpenAISSEEventSourceListener.java) | 不支持| 支持| 支持 | 支持
WebSocket示例参考：[OpenAIWebSocketEventSourceListener](https://github.com/Grt1228/chatgpt-steam-output/blob/main/src/main/java/com/unfbx/chatgptsteamoutput/listener/OpenAIWebSocketEventSourceListener.java) | 支持| 支持| 支持| 支持

## 1、创建OpenAiStreamClient
```java
	public static void main(String[] args) {
        OpenAiStreamClient client = OpenAiStreamClient.builder()
                .apiKey(Arrays.asList("sk-********","sk-********"))
                .build();
        //聊天模型：gpt-3.5
        ConsoleEventSourceListener eventSourceListener = new ConsoleEventSourceListener();
        Message message = Message.builder().role(Message.Role.USER).content("你好！").build();
        ChatCompletion chatCompletion = ChatCompletion.builder().messages(Arrays.asList(message)).build();
        client.streamChatCompletion(chatCompletion, eventSourceListener);
        CountDownLatch countDownLatch = new CountDownLatch(1);
        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
```

## 2、创建EventSourceListener实现类
自定义实现EventSourceListener。
```java

/**
 * 描述： sse
 *
 * @author https:www.unfbx.com
 * 2023-02-28
 */
@Slf4j
public class ConsoleEventSourceListener extends EventSourceListener {

    @Override
    public void onOpen(EventSource eventSource, Response response) {
        log.info("OpenAI建立sse连接...");
    }

    @Override
    public void onEvent(EventSource eventSource, String id, String type, String data) {
        log.info("OpenAI返回数据：{}", data);
        if (data.equals("[DONE]")) {
            log.info("OpenAI返回数据结束了");
            return;
        }
    }

    @Override
    public void onClosed(EventSource eventSource) {
        log.info("OpenAI关闭sse连接...");
    }

    @SneakyThrows
    @Override
    public void onFailure(EventSource eventSource, Throwable t, Response response) {
        if(Objects.isNull(response)){
            log.error("OpenAI  sse连接异常:{}", t);
            eventSource.cancel();
            return;
        }
        ResponseBody body = response.body();
        if (Objects.nonNull(body)) {
            log.error("OpenAI  sse连接异常data：{}，异常：{}", body.string(), t);
        } else {
            log.error("OpenAI  sse连接异常data：{}，异常：{}", response, t);
        }
        eventSource.cancel();
    }
}

```