---
id: diy_host_proxy
title: 自定义代理、ApiHost
hide_title: false
sidebar_position: 0
---

SDK支持自定义ApiHost，Proxy（通过自定义OkHttpClient实现）。
```java
public class Test {
    public static void main(String[] args) {
        //国内访问需要做代理，国外服务器不需要
        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("127.0.0.1", 7890));//代理ip，端口
        OkHttpClient okHttpClient = new OkHttpClient
                .Builder()
				//自定义代理
                .proxy(proxy)
                .connectTimeout(30, TimeUnit.SECONDS)//自定义超时时间
                .writeTimeout(30, TimeUnit.SECONDS)//自定义超时时间
                .readTimeout(30, TimeUnit.SECONDS)//自定义超时时间
                .build();
        OpenAiStreamClient client = OpenAiStreamClient.builder()
                .apiKey(Arrays.asList("sk-********","sk-********"))
                .okHttpClient(okHttpClient)//设置自定义的okHttpClient客户端
				//自定义ApiHost
                .apiHost("https://自己代理的服务器地址/")
                .build();
    }
}
```