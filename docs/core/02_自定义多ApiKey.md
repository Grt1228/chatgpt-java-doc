---
id: more_api_key
title: 02、自定义多ApiKey
hide_title: false
sidebar_position: 2
---

SDK支持自定义多Api Key。
```
public class Test {
    public static void main(String[] args) {
        OpenAiStreamClient client = OpenAiStreamClient.builder()
				//多Api Key
                .apiKey(Arrays.asList("sk-********","sk-********"))
                .build();
    }
}
```