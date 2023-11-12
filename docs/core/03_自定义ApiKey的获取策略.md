---
id: api_key_strategy
title: 03、自定义ApiKey的获取策略
hide_title: false
sidebar_position: 4
---

多Api Key下，SDK支持自定义key的获取策略，默认实现是**随机策略**。

内置了获取key的KeyStrategyFunction接口。
```java
/**
 * 描述：key 的获取策略
 * jdk默认实现
 * @see Function
 *
 * @author https:www.unfbx.com
 * @since 2023-04-03
 */
@FunctionalInterface
public interface KeyStrategyFunction<T, R> {

    /**
     * Applies this function to the given argument.
     *
     * @param t the function argument
     * @return the function result
     */
    R apply(T t);

}
```

## 自定义key的获取策略步骤

### 1、自定义实现类实现KeyStrategyFunction接口

```java
/**
 * 描述：随机策略
 *
 * @author https:www.unfbx.com
 * @since 2023-04-03
 */
public class KeyRandomStrategy implements KeyStrategyFunction<List<String>, String> {

    @Override
    public String apply(List<String> apiKeys) {
        return RandomUtil.randomEle(apiKeys);
    }
}
```

### 2、实现apply方法

方法接受Api key集合，返回当前本次请求使用的key。

:::success
欢迎pr key策略
:::

### 3、自定义OpenAiClient设置keyStrategy

```
public class Test {
    public static void main(String[] args) {
        //构建客户端
        OpenAiClient openAiClient = OpenAiClient.builder()
                .apiKey(Arrays.asList("sk-********","sk-********"))
                //自定义key的获取策略：默认KeyRandomStrategy
                .keyStrategy(new KeyRandomStrategy())
                .build();
                //聊天模型：gpt-3.5
    }
}
```
