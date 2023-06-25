---
id: gpt3_4
title: 聊天模型（GPT-3.5、4.0）
hide_title: false
sidebar_position: 0
---

### 1、自定义聊天模型参数

```java
ChatCompletion chatCompletionV2 = ChatCompletion
		.builder()
		.messages(messageList)
		//自定义model
		.model(ChatCompletion.Model.GPT_3_5_TURBO_16K_0613.getName())
		//自定义max token
		.maxTokens(xxxx)
		//自定义温度（随机属性）
		.temperature(xxx)
		//更多自定义属性参考：ChatCompletion
		.build();
```
