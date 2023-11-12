---
id: chat_gpt_tts
title: 13、文本转语音TTS
hide_title: false
sidebar_position: 5
---

## 1、介绍

OpenAi最新接口支持TTS

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

## 3、文本转语音
```

/**
 * tts使用示例
 */
@Test
public void textToSpeed() {
    TextToSpeech textToSpeech = TextToSpeech.builder()
            .model(TextToSpeech.Model.TTS_1_HD.getName())
            .input("OpenAI官方Api的Java SDK，可以快速接入项目使用。目前支持OpenAI官方全部接口，同时支持Tokens计算。官方github地址：https://github.com/Grt1228/chatgpt-java。欢迎star。")
            .voice(TtsVoice.NOVA.getName())
            .responseFormat(TtsFormat.MP3.getName())
            .build();
    File file = new File("C:\\Users\\***\\Desktop\\test.mp3");
    client.textToSpeech(textToSpeech, new Callback<ResponseBody>() {
        @SneakyThrows
        @Override
        public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
            InputStream inputStream = response.body().byteStream();
            //创建文件
            if (!file.exists()) {
                if (!file.getParentFile().exists())
                    file.getParentFile().mkdir();
                try {
                    file.createNewFile();
                } catch (IOException e) {
                    e.printStackTrace();
                    log.error("createNewFile IOException");
                }
            }

            OutputStream os = null;
            try {
                os = new BufferedOutputStream(new FileOutputStream(file));
                byte data[] = new byte[8192];
                int len;
                while ((len = inputStream.read(data, 0, 8192)) != -1) {
                    os.write(data, 0, len);
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
                try {
                    if (os != null) {
                        os.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        @Override
        public void onFailure(Call<ResponseBody> call, Throwable t) {

        }
    });
    CountDownLatch countDownLatch = new CountDownLatch(1);
    try {
        countDownLatch.await();
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}
```
