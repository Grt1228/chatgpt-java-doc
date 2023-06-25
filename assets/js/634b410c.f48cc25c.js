"use strict";(self.webpackChunkchatgpt_java_doc=self.webpackChunkchatgpt_java_doc||[]).push([[5233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"gpt3_4",title:"\u804a\u5929\u6a21\u578b\uff08GPT-3.5\u30014.0\uff09",hide_title:!1,sidebar_position:0},i=void 0,p={unversionedId:"api/gpt3_4",id:"api/gpt3_4",title:"\u804a\u5929\u6a21\u578b\uff08GPT-3.5\u30014.0\uff09",description:"1\u3001\u81ea\u5b9a\u4e49\u804a\u5929\u6a21\u578b\u53c2\u6570",source:"@site/docs/api/00_ChatCompletion.md",sourceDirName:"api",slug:"/api/gpt3_4",permalink:"/docs/api/gpt3_4",draft:!1,editUrl:"https://github.com/Grt1228/chatgpt-java-doc/tree/main/docs/api/00_ChatCompletion.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"gpt3_4",title:"\u804a\u5929\u6a21\u578b\uff08GPT-3.5\u30014.0\uff09",hide_title:!1,sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd2 Api\u4f7f\u7528",permalink:"/docs/category/-api\u4f7f\u7528"},next:{title:"\ud83d\udccb \u5f00\u53d1\u6848\u4f8b\u6536\u96c6",permalink:"/docs/project_list"}},c={},l=[{value:"1\u3001\u81ea\u5b9a\u4e49\u804a\u5929\u6a21\u578b\u53c2\u6570",id:"1\u81ea\u5b9a\u4e49\u804a\u5929\u6a21\u578b\u53c2\u6570",level:3}],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1\u81ea\u5b9a\u4e49\u804a\u5929\u6a21\u578b\u53c2\u6570"},"1\u3001\u81ea\u5b9a\u4e49\u804a\u5929\u6a21\u578b\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"ChatCompletion chatCompletionV2 = ChatCompletion\n        .builder()\n        .messages(messageList)\n        //\u81ea\u5b9a\u4e49model\n        .model(ChatCompletion.Model.GPT_3_5_TURBO_16K_0613.getName())\n        //\u81ea\u5b9a\u4e49max token\n        .maxTokens(xxxx)\n        //\u81ea\u5b9a\u4e49\u6e29\u5ea6\uff08\u968f\u673a\u5c5e\u6027\uff09\n        .temperature(xxx)\n        //\u66f4\u591a\u81ea\u5b9a\u4e49\u5c5e\u6027\u53c2\u8003\uff1aChatCompletion\n        .build();\n")))}m.isMDXComponent=!0}}]);