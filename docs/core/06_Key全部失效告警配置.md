---
id: all_api_key_invalid
title: Key全部失效告警配置
hide_title: false
sidebar_position: 5
---
本章节是对**自定义Key失效后处理策略**的补充，告警配置步骤：

- 参考上一章节实现自定义的OpenAiAuthInterceptor子类拦截器。
- 自定义OkHttpClient并添加自定义的拦截器，**配置告警参数**
```
//通过构造方法，配置参数
/**
 * 构造方法
 *
 * @param warringConfig 所有的key都失效后的告警参数配置
 */
public DynamicKeyOpenAiAuthInterceptor(Map warringConfig) {
	this.setWarringConfig(warringConfig);
}
```

```java
Map<String,String> config = new HashMap<>();
config.put("飞书机器人配置key","飞书机器人配置value");
DynamicKeyOpenAiAuthInterceptor dkopi = new DynamicKeyOpenAiAuthInterceptor(config)
```

```
@Getter
@Slf4j
public class DynamicKeyOpenAiAuthInterceptor extends OpenAiAuthInterceptor {
    ........省略其他信息............
	........省略其他信息............
	........省略其他信息............

    /**
     * 所有的key都失效后，自定义预警配置
     * 不配置直接return
     */
    @Override
    protected void noHaveActiveKeyWarring() {
		//获取config map进行自定义处理
        log.error("--------> [告警] 没有可用的key！！！");
        return;
    }
}

```