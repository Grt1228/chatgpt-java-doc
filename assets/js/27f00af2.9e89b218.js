"use strict";(self.webpackChunkchatgpt_java_doc=self.webpackChunkchatgpt_java_doc||[]).push([[6542],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var a=r.createContext({}),l=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(a.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,a=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),u=l(n),y=o,m=u["".concat(a,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(m,p(p({ref:e},s),{},{components:n})):r.createElement(m,p({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,p=new Array(i);p[0]=y;var c={};for(var a in e)hasOwnProperty.call(e,a)&&(c[a]=e[a]);c.originalType=t,c[u]="string"==typeof t?t:o,p[1]=c;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},493:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={id:"diy_okhttpclient",title:"\u81ea\u5b9a\u4e49OKHttpClient",hide_title:!1,sidebar_position:1},p=void 0,c={unversionedId:"core/diy_okhttpclient",id:"core/diy_okhttpclient",title:"\u81ea\u5b9a\u4e49OKHttpClient",description:"SDK\u652f\u6301\u81ea\u5b9a\u4e49OkHttpClient\u3002",source:"@site/docs/core/01_\u81ea\u5b9a\u4e49OKHttpClient.md",sourceDirName:"core",slug:"/core/diy_okhttpclient",permalink:"/docs/core/diy_okhttpclient",draft:!1,editUrl:"https://github.com/Grt1228/chatgpt-java-doc/tree/main/docs/core/01_\u81ea\u5b9a\u4e49OKHttpClient.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"diy_okhttpclient",title:"\u81ea\u5b9a\u4e49OKHttpClient",hide_title:!1,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u4ee3\u7406\u3001ApiHost",permalink:"/docs/core/diy_host_proxy"},next:{title:"\u81ea\u5b9a\u4e49\u591aApiKey",permalink:"/docs/core/more_api_key"}},a={},l=[],s={toc:l},u="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SDK\u652f\u6301\u81ea\u5b9a\u4e49OkHttpClient\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6eOkHttpClient\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u62e6\u622a\u5668\uff0c\u8d85\u65f6\u65f6\u95f4\uff0c\u65e5\u5fd7\u5b9e\u73b0\uff0c\u6570\u636e\u538b\u7f29......"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class Test {\n    public static void main(String[] args) {\n        //\u56fd\u5185\u8bbf\u95ee\u9700\u8981\u505a\u4ee3\u7406\uff0c\u56fd\u5916\u670d\u52a1\u5668\u4e0d\u9700\u8981\n        Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("127.0.0.1", 7890));//\u4ee3\u7406ip\uff0c\u7aef\u53e3\n        //\u65e5\u5fd7\u62e6\u622a\u5668\n        HttpLoggingInterceptor httpLoggingInterceptor = new HttpLoggingInterceptor(new OpenAILogger());\n        //\uff01\uff01\uff01\uff01\u5343\u4e07\u522b\u518d\u751f\u4ea7\u6216\u8005\u6d4b\u8bd5\u73af\u5883\u6253\u5f00BODY\u7ea7\u522b\u65e5\u5fd7\uff01\uff01\uff01\uff01\n        //\uff01\uff01\uff01\u751f\u4ea7\u6216\u8005\u6d4b\u8bd5\u73af\u5883\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u8fd9\u4e09\u79cd\u7ea7\u522b\uff1aNONE,BASIC,HEADERS,\uff01\uff01\uff01\n        httpLoggingInterceptor.setLevel(HttpLoggingInterceptor.Level.HEADERS);\n        OkHttpClient okHttpClient = new OkHttpClient\n                .Builder()\n                .proxy(proxy)//\u81ea\u5b9a\u4e49\u4ee3\u7406\n                .addInterceptor(httpLoggingInterceptor)//\u81ea\u5b9a\u4e49\u65e5\u5fd7\n                .connectTimeout(30, TimeUnit.SECONDS)//\u81ea\u5b9a\u4e49\u8d85\u65f6\u65f6\u95f4\n                .writeTimeout(30, TimeUnit.SECONDS)//\u81ea\u5b9a\u4e49\u8d85\u65f6\u65f6\u95f4\n                .readTimeout(30, TimeUnit.SECONDS)//\u81ea\u5b9a\u4e49\u8d85\u65f6\u65f6\u95f4\n                .build();\n        OpenAiStreamClient client = OpenAiStreamClient.builder()\n                .apiKey(Arrays.asList("sk-********","sk-********"))\n                .okHttpClient(okHttpClient)//\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684okHttpClient\u5ba2\u6237\u7aef\n                .build();\n    }\n}\n')))}d.isMDXComponent=!0}}]);