---
id: diy_okhttpclient
title: 01、自定义OKHttpClient
hide_title: false
sidebar_position: 1
---

SDK支持自定义OkHttpClient。

可以通过配置OkHttpClient，实现自定义的拦截器，超时时间，日志实现，数据压缩......
```java
public class Test {
    public static void main(String[] args) {
        //国内访问需要做代理，国外服务器不需要
        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("127.0.0.1", 7890));//代理ip，端口
		//日志拦截器
        HttpLoggingInterceptor httpLoggingInterceptor = new HttpLoggingInterceptor(new OpenAILogger());
        //！！！！千万别再生产或者测试环境打开BODY级别日志！！！！
        //！！！生产或者测试环境建议设置为这三种级别：NONE,BASIC,HEADERS,！！！
        httpLoggingInterceptor.setLevel(HttpLoggingInterceptor.Level.HEADERS);
        OkHttpClient okHttpClient = new OkHttpClient
                .Builder()
                .proxy(proxy)//自定义代理
                .addInterceptor(httpLoggingInterceptor)//自定义日志
                .connectTimeout(30, TimeUnit.SECONDS)//自定义超时时间
                .writeTimeout(30, TimeUnit.SECONDS)//自定义超时时间
                .readTimeout(30, TimeUnit.SECONDS)//自定义超时时间
                .build();
        OpenAiStreamClient client = OpenAiStreamClient.builder()
                .apiKey(Arrays.asList("sk-********","sk-********"))
                .okHttpClient(okHttpClient)//设置自定义的okHttpClient客户端
                .build();
    }
}
```