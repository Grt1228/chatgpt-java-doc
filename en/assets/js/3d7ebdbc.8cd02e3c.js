"use strict";(self.webpackChunkchatgpt_java_doc=self.webpackChunkchatgpt_java_doc||[]).push([[9020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>y,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),s=l(n),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},y),{},{components:n})):r.createElement(m,o({ref:t},y))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"api_key_strategy",title:"\u81ea\u5b9a\u4e49ApiKey\u7684\u83b7\u53d6\u7b56\u7565",hide_title:!1,sidebar_position:4},o=void 0,p={unversionedId:"core/api_key_strategy",id:"core/api_key_strategy",title:"\u81ea\u5b9a\u4e49ApiKey\u7684\u83b7\u53d6\u7b56\u7565",description:"\u591aApi Key\u4e0b\uff0cSDK\u652f\u6301\u81ea\u5b9a\u4e49key\u7684\u83b7\u53d6\u7b56\u7565\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u662f\u968f\u673a\u7b56\u7565\u3002",source:"@site/docs/core/03_\u81ea\u5b9a\u4e49ApiKey\u7684\u83b7\u53d6\u7b56\u7565.md",sourceDirName:"core",slug:"/core/api_key_strategy",permalink:"/en/docs/core/api_key_strategy",draft:!1,editUrl:"https://github.com/Grt1228/chatgpt-java-doc/tree/main/docs/core/03_\u81ea\u5b9a\u4e49ApiKey\u7684\u83b7\u53d6\u7b56\u7565.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"api_key_strategy",title:"\u81ea\u5b9a\u4e49ApiKey\u7684\u83b7\u53d6\u7b56\u7565",hide_title:!1,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u591aApiKey",permalink:"/en/docs/core/more_api_key"},next:{title:"Tokens\u8ba1\u7b97",permalink:"/en/docs/core/tiktoken"}},c={},l=[{value:"\u81ea\u5b9a\u4e49key\u7684\u83b7\u53d6\u7b56\u7565\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49key\u7684\u83b7\u53d6\u7b56\u7565\u6b65\u9aa4",level:2},{value:"1\u3001\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7c7b\u5b9e\u73b0KeyStrategyFunction\u63a5\u53e3",id:"1\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7c7b\u5b9e\u73b0keystrategyfunction\u63a5\u53e3",level:3},{value:"2\u3001\u5b9e\u73b0apply\u65b9\u6cd5",id:"2\u5b9e\u73b0apply\u65b9\u6cd5",level:3},{value:"3\u3001\u81ea\u5b9a\u4e49OpenAiClient\u8bbe\u7f6ekeyStrategy",id:"3\u81ea\u5b9a\u4e49openaiclient\u8bbe\u7f6ekeystrategy",level:3}],y={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u591aApi Key\u4e0b\uff0cSDK\u652f\u6301\u81ea\u5b9a\u4e49key\u7684\u83b7\u53d6\u7b56\u7565\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u662f",(0,a.kt)("strong",{parentName:"p"},"\u968f\u673a\u7b56\u7565"),"\u3002"),(0,a.kt)("p",null,"\u5185\u7f6e\u4e86\u83b7\u53d6key\u7684KeyStrategyFunction\u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u63cf\u8ff0\uff1akey \u7684\u83b7\u53d6\u7b56\u7565\n * jdk\u9ed8\u8ba4\u5b9e\u73b0\n * @see Function\n *\n * @author https:www.unfbx.com\n * @since 2023-04-03\n */\n@FunctionalInterface\npublic interface KeyStrategyFunction<T, R> {\n\n    /**\n     * Applies this function to the given argument.\n     *\n     * @param t the function argument\n     * @return the function result\n     */\n    R apply(T t);\n\n}\n")),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49key\u7684\u83b7\u53d6\u7b56\u7565\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49key\u7684\u83b7\u53d6\u7b56\u7565\u6b65\u9aa4"),(0,a.kt)("h3",{id:"1\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7c7b\u5b9e\u73b0keystrategyfunction\u63a5\u53e3"},"1\u3001\u81ea\u5b9a\u4e49\u5b9e\u73b0\u7c7b\u5b9e\u73b0KeyStrategyFunction\u63a5\u53e3"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u63cf\u8ff0\uff1a\u968f\u673a\u7b56\u7565\n *\n * @author https:www.unfbx.com\n * @since 2023-04-03\n */\npublic class KeyRandomStrategy implements KeyStrategyFunction<List<String>, String> {\n\n    @Override\n    public String apply(List<String> apiKeys) {\n        return RandomUtil.randomEle(apiKeys);\n    }\n}\n")),(0,a.kt)("h3",{id:"2\u5b9e\u73b0apply\u65b9\u6cd5"},"2\u3001\u5b9e\u73b0apply\u65b9\u6cd5"),(0,a.kt)("p",null,"\u65b9\u6cd5\u63a5\u53d7Api key\u96c6\u5408\uff0c\u8fd4\u56de\u5f53\u524d\u672c\u6b21\u8bf7\u6c42\u4f7f\u7528\u7684key\u3002"),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("p",{parentName:"admonition"},"\u6b22\u8fcepr key\u7b56\u7565")),(0,a.kt)("h3",{id:"3\u81ea\u5b9a\u4e49openaiclient\u8bbe\u7f6ekeystrategy"},"3\u3001\u81ea\u5b9a\u4e49OpenAiClient\u8bbe\u7f6ekeyStrategy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'public class Test {\n    public static void main(String[] args) {\n        //\u6784\u5efa\u5ba2\u6237\u7aef\n        OpenAiClient openAiClient = OpenAiClient.builder()\n                .apiKey(Arrays.asList("sk-********","sk-********"))\n                //\u81ea\u5b9a\u4e49key\u7684\u83b7\u53d6\u7b56\u7565\uff1a\u9ed8\u8ba4KeyRandomStrategy\n                .keyStrategy(new KeyRandomStrategy())\n                .build();\n                //\u804a\u5929\u6a21\u578b\uff1agpt-3.5\n    }\n}\n')))}u.isMDXComponent=!0}}]);