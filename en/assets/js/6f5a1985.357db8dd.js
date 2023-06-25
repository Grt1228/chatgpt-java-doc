"use strict";(self.webpackChunkchatgpt_java_doc=self.webpackChunkchatgpt_java_doc||[]).push([[4382],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var i=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,i,n=function(t,e){if(null==t)return{};var a,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)a=r[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=i.createContext({}),s=function(t){var e=i.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},o=function(t){var e=s(t.components);return i.createElement(l.Provider,{value:e},t.children)},m="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=s(a),u=n,k=m["".concat(l,".").concat(u)]||m[u]||h[u]||r;return a?i.createElement(k,c(c({ref:e},o),{},{components:a})):i.createElement(k,c({ref:e},o))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,c=new Array(r);c[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p[m]="string"==typeof t?t:n,c[1]=p;for(var s=2;s<r;s++)c[s]=a[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9687:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const r={id:"logs",title:"\ud83d\udcd1 \u66f4\u65b0\u65e5\u5fd7",sidebar_position:999},c=void 0,p={unversionedId:"logs",id:"logs",title:"\ud83d\udcd1 \u66f4\u65b0\u65e5\u5fd7",description:"- x] 1.0.14  \u5347\u7ea7\u652f\u6301\u6700\u65b0\u7248Gpt-3.5\u20140614\u3001Gpt-4.0\u20140614\u7b49\u6a21\u578b, \u652f\u6301function-calling\u5b8c\u6574\u4f7f\u7528\u6848\u4f8b\u53c2\u8003\uff1a[OpenAiClientFunctionTest",source:"@site/docs/99_\u66f4\u65b0\u65e5\u5fd7.md",sourceDirName:".",slug:"/logs",permalink:"/en/docs/logs",draft:!1,editUrl:"https://github.com/Grt1228/chatgpt-java-doc/tree/main/docs/99_\u66f4\u65b0\u65e5\u5fd7.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{id:"logs",title:"\ud83d\udcd1 \u66f4\u65b0\u65e5\u5fd7",sidebar_position:999},sidebar:"tutorialSidebar",previous:{title:"\u2615 \u8d5e\u8d4f",permalink:"/en/docs/appreciate"}},l={},s=[],o={toc:s},m="wrapper";function h(t){let{components:e,...a}=t;return(0,n.kt)(m,(0,i.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.14  \u5347\u7ea7\u652f\u6301\u6700\u65b0\u7248Gpt-3.5\u20140614\u3001Gpt-4.0\u20140614\u7b49\u6a21\u578b, \u652f\u6301function-calling\u5b8c\u6574\u4f7f\u7528\u6848\u4f8b\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/1.0.14/src/test/java/com/unfbx/chatgpt/OpenAiClientFunctionTest.java"},"OpenAiClientFunctionTest")," "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.13  \u652f\u6301\u5f53key\u5f02\u5e38\uff08\u5931\u6548\u3001\u8fc7\u671f\u3001\u5c01\u7981\uff09\u65f6\uff0c\u81ea\u5b9a\u4e49\u52a8\u6001\u5904\u7406key\uff0c\u53c2\u8003\u5b9e\u73b0",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/main/java/com/unfbx/chatgpt/interceptor/DynamicKeyOpenAiAuthInterceptor.java"},"DynamicKeyOpenAiAuthInterceptor")," \uff0c\u652f\u6301key\u5f02\u5e38\u65f6\u7684\u544a\u8b66\u5904\u7406\uff08\u9489\u9489\u3001\u98de\u4e66\u3001email\u3001\u4f01\u4e1a\u5fae\u4fe1\u7b49\u7b49\u9700\u8981\u81ea\u5b9a\u4e49\u5f00\u53d1\uff09"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.12  tokens\u8ba1\u7b97\u4f18\u5316\u3001\u5220\u9664\u6a21\u578b\u63a5\u53e3\u4fee\u6539\u3001\u8bed\u97f3\u63a5\u53e3\u66f4\u65b0\u652f\u6301\u5b98\u65b9\u6700\u65b0\u53c2\u6570"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.11  \u589e\u52a0\u65b0\u7684\u4f59\u989d\u67e5\u8be2\u63a5\u53e3\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/OpenAiClientTest.java"},"OpenAiClientTest")," \u548c",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/OpenAiStreamClientTest.java"},"OpenAiStreamClientTest")," ,\u4fee\u590dtokens\u8ba1\u7b97\u6162\u7684\u95ee\u9898\uff0c"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.10  \u652f\u6301tokens\u8ba1\u7b97\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/TikTokensTest.java"},"TikTokensTest")," \uff0c\u66f4\u591a\u8be6\u7ec6\u7684\u8d44\u6599\u53c2\u8003\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/Tokens_README.md"},"Tokens_README.md")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.9   \u652f\u6301\u81ea\u5b9a\u4e49key\u4f7f\u7528\u7b56\u7565\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/OpenAiClientTest.java"},"OpenAiClientTest")," \u548c",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/OpenAiStreamClientTest.java"},"OpenAiStreamClientTest")," \uff0c\u5f03\u7528ChatGPTClient\uff0c\u4f18\u5316Moderation\u63a5\u53e3"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.8   \u4fee\u6539OpenAiClient\u548cOpenAiStreamClient\u7684\u81ea\u5b9a\u4e49\u76f8\u5173\u5b9e\u73b0\uff0c\u8d85\u65f6\u8bbe\u7f6e\uff0c\u4ee3\u7406\u8bbe\u7f6e\uff0c\u81ea\u5b9a\u4e49\u62e6\u622a\u5668\u8bbe\u7f6e\u6539\u4e3a\u901a\u8fc7\u81ea\u5b9a\u4e49OkHttpClient\u5b9e\u73b0\uff0c\u5c06OkHttpClient\u4ea4\u7531\u7528\u6237\u81ea\u5b9a\u4e49\u63a7\u5236\u66f4\u52a0\u5408\u7406\uff0c\u53ef\u4ee5\u5b9e\u73b0\u66f4\u591a\u7684\u53c2\u6570\u81ea\u5b9a\u4e49\u3002\u652f\u6301\u591aApi Keys\u914d\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.7   \u4fee\u590d\u53cd\u5e8f\u5217\u5316\u62a5\u9519Bug\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/issues/79"},"https://github.com/Grt1228/chatgpt-java/issues/79")," \uff0cImage SDK\u679a\u4e3e\u503cbug\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/issues/76"},"https://github.com/Grt1228/chatgpt-java/issues/76")," \uff0c\u611f\u8c22\u4e24\u4f4d\u670b\u53cb\u6307\u51fa\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/CCc3120"},"@CCc3120")," \u3001",(0,n.kt)("a",{parentName:"li",href:"https://github.com/seven-cm"},"@seven-cm")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.6   \u652f\u6301\u4f59\u989d\u67e5\u8be2\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/OpenAiClientTest.java"},"OpenAiClientTest")," \u548c",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/test/java/com/unfbx/chatgpt/OpenAiStreamClientTest.java"},"OpenAiStreamClientTest")," creditGrants\u65b9\u6cd5,\u652f\u6301\u6700\u65b0GPT-4\u6a21\u578b\uff0c\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Grt1228/chatgpt-java/blob/main/src/main/java/com/unfbx/chatgpt/entity/chat/ChatCompletion.java/"},"ChatCompletion.Model"),"\u6784\u5efa\u6d88\u606f\u4f53\u4f20\u5165\u6a21\u578b\u5373\u53ef\u3002\u611f\u8c22\u7fa4\u53cb\u63d0\u4f9b\u7684\u4f59\u989d\u63a5\u53e3\u5730\u5740\u4ee5\u53ca",(0,n.kt)("a",{parentName:"li",href:"https://github.com/PlexPt"},"@PlexPt")," \u63d0\u4f9b\u7684\u6a21\u578b\u53c2\u6570"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.5   \u652f\u6301\u81ea\u5b9a\u4e49Api Host\uff0c\u4f7f\u7528Builder\u6784\u5efa\u3002\u53c2\u8003\u4e0b\u9762\u7684\u5feb\u901f\u5f00\u59cb\u90e8\u5206\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.4   \u5b98\u65b9\u6700\u65b0\u7684ChatGPT Stream\u6a21\u5f0f\u4e0b\u7684Api\u8fd4\u56de\u503c\u6539\u52a8\u3002"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.3   \u652f\u6301\u6700\u65b0\u7684GPT-3.5-Turbo\u6a21\u578b\u548cWhisper-1\u6a21\u578b\uff0c\u652f\u6301\u8bed\u97f3\u529f\u80fd\u8f6c\u6587\u5b57\uff0c\u8bed\u97f3\u7ffb\u8bd1\u3002OpenAiClient\u548cOpenAiStreamClient\u652f\u6301Builder\u6784\u9020\uff0c\u652f\u6301\u4ee3\u7406\u3002"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.2   \u652f\u6301Stream\u6d41\u5f0f\u8f93\u51fa\uff0c\u53c2\u8003\uff1aOpenAiStreamClient"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.1   \u652f\u6301\u81ea\u5b9a\u4e49\u8d85\u65f6\u65f6\u95f4\uff0c\u81ea\u5b9a\u4e49OkHttpClient\u62e6\u622a\u5668\uff0c\u53c2\u8003\uff1aOpenAiClient\u6784\u9020\u51fd\u6570"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","1.0.0   \u652f\u6301\u6240\u6709\u7684OpenAI\u5b98\u65b9\u63a5\u53e3")))}h.isMDXComponent=!0}}]);