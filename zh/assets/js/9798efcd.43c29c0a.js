(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[59],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),g=m(r),s=a,d=g["".concat(p,".").concat(s)]||g[s]||c[s]||i;return r?n.createElement(d,o(o({ref:e},u),{},{components:r})):n.createElement(d,o({ref:e},u))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},77885:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={title:"\u6027\u80fd\u8c03\u4f18"},l={unversionedId:"platform-engineers/system-operation/performance-finetuning",id:"version-v1.1/platform-engineers/system-operation/performance-finetuning",isDocsHomePage:!1,title:"\u6027\u80fd\u8c03\u4f18",description:"\u63a8\u8350\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/system-operation/performance-finetuning.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/performance-finetuning",permalink:"/zh/docs/platform-engineers/system-operation/performance-finetuning",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/system-operation/performance-finetuning.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"\u6027\u80fd\u8c03\u4f18"},sidebar:"version-v1.1/docs",previous:{title:"\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/docs/platform-engineers/system-operation/observability"},next:{title:"\u672c\u5730\u8bd5\u8fd0\u884c",permalink:"/zh/docs/platform-engineers/debug/dry-run"}},p=[{value:"\u63a8\u8350\u914d\u7f6e",id:"\u63a8\u8350\u914d\u7f6e",children:[]},{value:"\u8c03\u4f18\u65b9\u6cd5",id:"\u8c03\u4f18\u65b9\u6cd5",children:[]}],m={toc:p};function u(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u63a8\u8350\u914d\u7f6e"},"\u63a8\u8350\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728\u96c6\u7fa4\u89c4\u6a21\u53d8\u5927\uff0c\u5e94\u7528\u6570\u91cf\u53d8\u591a\u65f6\uff0c\u53ef\u80fd\u4f1a\u56e0\u4e3a KubeVela \u7684\u63a7\u5236\u5668\u6027\u80fd\u8ddf\u4e0d\u4e0a\u9700\u6c42\u5bfc\u81f4 KubeVela \u7cfb\u7edf\u5185\u7684\u5e94\u7528\u8fd0\u7ef4\u51fa\u73b0\u95ee\u9898\uff0c\u8fd9\u53ef\u80fd\u662f\u7531\u4e8e\u4f60\u7684 KubeVela \u63a7\u5236\u5668\u53c2\u6570\u4e0d\u5f53\u6240\u81f4\u3002"),(0,i.kt)("p",null,"\u5728 KubeVela \u7684\u6027\u80fd\u6d4b\u8bd5\u4e2d\uff0cKubeVela \u56e2\u961f\u9a8c\u8bc1\u4e86\u5728\u5404\u79cd\u4e0d\u540c\u89c4\u6a21\u7684\u573a\u666f\u4e0b KubeVela \u63a7\u5236\u5668\u7684\u8fd0\u7ef4\u80fd\u529b\u3002\u5e76\u7ed9\u51fa\u4e86\u4ee5\u4e0b\u7684\u63a8\u8350\u914d\u7f6e\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"\u89c4\u6a21"),(0,i.kt)("th",{parentName:"tr",align:"right"},"\u96c6\u7fa4\u8282\u70b9\u6570"),(0,i.kt)("th",{parentName:"tr",align:"right"},"\u5e94\u7528\u6570\u91cf"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Pod \u6570\u91cf"),(0,i.kt)("th",{parentName:"tr",align:"right"},"concurrent-reconciles"),(0,i.kt)("th",{parentName:"tr",align:"center"},"kube-api-qps"),(0,i.kt)("th",{parentName:"tr",align:"right"},"kube-api-burst"),(0,i.kt)("th",{parentName:"tr",align:"right"},"CPU"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Memory"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5c0f"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 200"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 3,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 18,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"300"),(0,i.kt)("td",{parentName:"tr",align:"right"},"500"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0.5"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1Gi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u4e2d"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 500"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 5,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 30,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"500"),(0,i.kt)("td",{parentName:"tr",align:"right"},"800"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2Gi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"\u5927"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 1,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 12,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"< 72,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4"),(0,i.kt)("td",{parentName:"tr",align:"center"},"800"),(0,i.kt)("td",{parentName:"tr",align:"right"},"1,000"),(0,i.kt)("td",{parentName:"tr",align:"right"},"2"),(0,i.kt)("td",{parentName:"tr",align:"right"},"4Gi")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0a\u8ff0\u914d\u7f6e\u4e2d\uff0c\u5355\u4e00\u5e94\u7528\u7684\u89c4\u6a21\u5e94\u5728 2\uff5e3 \u4e2a\u7ec4\u4ef6\uff0c5\uff5e6 \u4e2a\u8d44\u6e90\u5de6\u53f3\u3002\u5982\u679c\u4f60\u7684\u573a\u666f\u4e0b\uff0c\u5e94\u7528\u666e\u904d\u8f83\u5927\uff0c\u5982\u5355\u4e2a\u5e94\u7528\u9700\u8981\u5bf9\u5e94 20 \u4e2a\u8d44\u6e90\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u6309\u7167\u6bd4\u4f8b\u76f8\u5e94\u63d0\u9ad8\u5404\u9879\u914d\u7f6e\u3002")),(0,i.kt)("h3",{id:"\u8c03\u4f18\u65b9\u6cd5"},"\u8c03\u4f18\u65b9\u6cd5"),(0,i.kt)("p",null,"\u6027\u80fd\u74f6\u9888\u51fa\u73b0\u65f6\u4e00\u822c\u53ef\u80fd\u4f1a\u6709\u4ee5\u4e0b\u4e00\u4e9b\u4e0d\u540c\u7684\u8868\u73b0\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u65b0\u521b\u5efa\u7684\u5e94\u7528\u80fd\u591f\u83b7\u53d6\u5230\uff0c\u5176\u76f4\u63a5\u5173\u8054\u8d44\u6e90\u83b7\u53d6\u5f97\u5230\uff0c\u4f46\u95f4\u63a5\u5173\u8054\u8d44\u6e90\u83b7\u53d6\u4e0d\u5230\u3002\u5982\u5e94\u7528\u5185\u5305\u542b\u7684 webservice \u5bf9\u5e94\u7684 Deployment \u6210\u529f\u521b\u5efa\uff0c\u4f46 Pod \u8fdf\u8fdf\u65e0\u6cd5\u521b\u5efa\u3002\u8fd9\u79cd\u60c5\u51b5\u4e00\u822c\u548c\u76f8\u5e94\u8d44\u6e90\u7684\u63a7\u5236\u5668\u6709\u5173\uff0c\u6bd4\u5982 kube-controller-manager\u3002\u53ef\u4ee5\u6392\u67e5\u76f8\u5e94\u63a7\u5236\u5668\u662f\u5426\u5b58\u5728\u6027\u80fd\u74f6\u9888\u6216\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u65b0\u521b\u5efa\u7684\u5e94\u7528\u80fd\u591f\u83b7\u53d6\u5230\uff0c\u5173\u8054\u8d44\u6e90\u65e0\u6cd5\u83b7\u53d6\uff0c\u4e14\u5e94\u7528\u6e32\u67d3\u672c\u8eab\u6ca1\u6709\u95ee\u9898 ( \u5728\u5e94\u7528\u7684\b\u4fe1\u606f\u5185\u6ca1\u6709\u51fa\u73b0\u6e32\u67d3\u9519\u8bef )\u3002\u68c0\u67e5 apiserver \u5185\u662f\u5426\u5b58\u5728\u5927\u91cf\u6392\u961f\u8bf7\u6c42\uff0c\u8fd9\u79cd\u573a\u666f\u6709\u53ef\u80fd\u662f\u7531\u4e8e\u5206\u53d1\u7684\u4e0b\u5c5e\u8d44\u6e90\uff0c\u5982 Deployment \u8bf7\u6c42\u5230\u4e86 apiserver\uff0c\u4f46\u7531\u4e8e\u5148\u524d\u7684\u8d44\u6e90\u5728 apiserver \u5904\u6392\u961f\u5bfc\u81f4\u65b0\u8bf7\u6c42\u65e0\u6cd5\u53ca\u65f6\u5904\u7406\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u65b0\u521b\u5efa\u7684\u5e94\u7528\u80fd\u591f\u83b7\u53d6\u5230\uff0c\u4f46\u662f\u6ca1\u6709\u72b6\u6001\u4fe1\u606f\u3002\u8fd9\u79cd\u60c5\u51b5\u5982\u679c\u5e94\u7528\u672c\u8eab\u7684\u5185\u5bb9\u683c\u5f0f\u6ca1\u6709\u95ee\u9898\uff0c\u6709\u53ef\u80fd\u662f\u7531\u4e8e KubeVela \u63a7\u5236\u5668\u51fa\u73b0\u74f6\u9888\uff0c\u5982\u8bbf\u95ee apiserver \u88ab\u9650\u6d41\uff0c\u5bfc\u81f4\u541e\u5410\u91cf\u8ddf\u4e0d\u4e0a\u8bf7\u6c42\u7684\u901f\u7387\u3002\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8 ",(0,i.kt)("strong",{parentName:"li"},"kube-api-qps / kube-api-burst")," \u6765\u89e3\u51b3\u3002\u5982\u679c\u9650\u6d41\u4e0d\u5b58\u5728\u95ee\u9898\uff0c\u53ef\u4ee5\u68c0\u67e5\u63a7\u5236\u5668\u6240\u7528\u7684 CPU \u8d44\u6e90\u662f\u5426\u5df2\u7ecf\u7528\u6ee1\uff1b\u5982\u679c CPU \u8fc7\u8f7d\u3002\u5219\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8\u63a7\u5236\u5668\u7684 CPU \u8d44\u6e90\u6765\u89e3\u51b3\u3002\u5982\u679c CPU \u8d44\u6e90\u672a\u4f7f\u7528\u6ee1\uff0c\u4f46\u59cb\u7ec8\u4fdd\u6301\u5728\u540c\u4e00\u8d1f\u8f7d\u4e0a\uff0c\u6709\u53ef\u80fd\u662f\u7ebf\u7a0b\u6570\u5c0f\u4e8e\u6240\u7ed9 CPU \u6570\u91cf\u3002"),(0,i.kt)("li",{parentName:"ol"},"KubeVela \u63a7\u5236\u5668\u672c\u8eab\u7531\u4e8e\u5185\u5b58\u4e0d\u8db3\u9891\u7e41\u5d29\u6e83\uff0c\u53ef\u4ee5\u901a\u8fc7\u7ed9\u63a7\u5236\u5668\u63d0\u9ad8\u5185\u5b58\u91cf\u89e3\u51b3\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/08/30/kubevela-performance-test"},"KubeVela \u6027\u80fd\u6d4b\u8bd5\u62a5\u544a"))))}u.isMDXComponent=!0}}]);