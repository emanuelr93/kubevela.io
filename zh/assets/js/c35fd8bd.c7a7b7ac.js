(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5342],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},65237:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"\u7cfb\u7edf\u67b6\u6784"},l={unversionedId:"core-concepts/architecture",id:"version-v1.1/core-concepts/architecture",isDocsHomePage:!1,title:"\u7cfb\u7edf\u67b6\u6784",description:"KubeVela \u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u6240\u793a\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/zh/docs/core-concepts/architecture",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/core-concepts/architecture.md",version:"v1.1",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1633157757,formattedLastUpdatedAt:"2021/10/2",frontMatter:{title:"\u7cfb\u7edf\u67b6\u6784"},sidebar:"version-v1.1/docs",previous:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/zh/docs/quick-start"},next:{title:"\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b",permalink:"/zh/docs/core-concepts/application"}},c=[{value:"KubeVela \u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf",id:"kubevela-\u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf",children:[{value:"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd",id:"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd",children:[]}]},{value:"KubeVela \u662f\u53ef\u7f16\u7a0b\u7684",id:"kubevela-\u662f\u53ef\u7f16\u7a0b\u7684",children:[]}],u={toc:c};function p(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KubeVela \u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kubevela-arch",src:n(52009).Z})),(0,i.kt)("h2",{id:"kubevela-\u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf"},"KubeVela \u662f\u4e00\u4e2a\u63a7\u5236\u5e73\u9762\u7cfb\u7edf"),(0,i.kt)("p",null,"KubeVela \u672c\u8eab\u662f\u4e00\u4e2a\u7684\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u63a7\u5236\u5e73\u9762\uff0c\u5b83\u67b6\u5728 Kubernetes \u96c6\u7fa4\u3001\u4e91\u5e73\u53f0\u7b49\u57fa\u7840\u8bbe\u65bd\u4e4b\u4e0a\uff0c\u901a\u8fc7\u5f00\u653e\u5e94\u7528\u6a21\u578b\u6765\u5bf9\u7ec4\u4ef6\u3001\u4e91\u670d\u52a1\u3001\u8fd0\u7ef4\u80fd\u529b\u3001\u4ea4\u4ed8\u5de5\u4f5c\u6d41\u8fdb\u884c\u7edf\u4e00\u7684\u7f16\u6392\u548c\u4ea4\u4ed8\uff0c\u56e0\u800c\u4e0e\u57fa\u7840\u8bbe\u65bd\u672c\u8eab\u5b8c\u5168\u89e3\u8026\u5e76\u4e14\u5f88\u5bb9\u6613\u9762\u5411\u4efb\u4f55\u6df7\u5408/\u591a\u4e91/\u591a\u96c6\u7fa4\u57fa\u7840\u8bbe\u65bd\u8fdb\u884c\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u3002"),(0,i.kt)("p",null,"\u800c\u4e3a\u4e86\u80fd\u591f\u540c\u4efb\u4f55 CI \u6d41\u6c34\u7ebf\u6216\u8005 GitOps \u5de5\u5177\u65e0\u7f1d\u5bf9\u63a5\uff0cKubeVela \u7684 API\uff08\u5373\u5f00\u653e\u5e94\u7528\u6a21\u578b\uff09\u88ab\u8bbe\u8ba1\u4e3a\u662f\u58f0\u660e\u5f0f\u3001\u5b8c\u5168\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u7684\uff0c\u5b83\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e2e\u52a9\u7528\u6237\u5b9a\u4e49\u5e94\u7528\u4ea4\u4ed8\u8ba1\u5212\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"Application")," \u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ul"},"\u5e2e\u52a9\u5e73\u53f0\u7ba1\u7406\u5458\u901a\u8fc7 CUE \u8bed\u8a00\u5b9a\u4e49\u5e73\u53f0\u80fd\u529b\u548c\u62bd\u8c61\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"X-Definition "),"\u5bf9\u8c61",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"ComponentDefinition"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," \u7b49")))),(0,i.kt)("p",null,"\u5728\u5b9e\u73b0\u4e0a\uff0cKubeVela \u9700\u8981\u4f9d\u8d56\u4e00\u4e2a\u72ec\u7acb\u7684 Kubernetes \u96c6\u7fa4\u6765\u8fd0\u884c\u3002\u8fd9\u662f\u4e00\u4e2a\u6709\u610f\u4e3a\u4e4b\u7684\u8bbe\u8ba1\uff1a\u56e0\u4e3a\u5e2e\u52a9\u4f60\u5feb\u901f\u5b9e\u73b0\u4e00\u4e2a\u79d1\u5b66\u7684\u3001\u5065\u58ee\u7684\u63a7\u5236\u5e73\u9762\u7cfb\u7edf\uff0c\u6b63\u662f Kubernetes \u9879\u76ee\u6700\u64c5\u957f\u7684\u4e00\u4ef6\u4e8b\u60c5\u3002\u8fd9\u4e2a\u5b9e\u8df5\u5df2\u7ecf\u4e45\u7ecf\u793e\u533a\u8003\u9a8c\uff0c\u80fd\u591f\u8ba9\u6211\u4eec\u4ee5\u6700\u4f4e\u7684\u4ee3\u4ef7\u4e3a\u5927\u89c4\u6a21\u5e94\u7528\u4ea4\u4ed8\u5de5\u4f5c\u6d41\u5e26\u6765\u5b9d\u8d35\u7684\u786e\u5b9a\u6027\u3001\u6536\u655b\u6027\u548c\u81ea\u52a8\u5316\u80fd\u529b\u3002\u5177\u4f53\u6765\u8bf4\uff0cKubeVela \u672c\u8eab\u4e3b\u8981\u7531\u5982\u4e0b\u51e0\u4e2a\u90e8\u5206\u6ce8\u518c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6838\u5fc3\u63a7\u5236\u5668")," \u4e3a\u6574\u4e2a\u7cfb\u7edf\u63d0\u4f9b\u6838\u5fc3\u63a7\u5236\u903b\u8f91\uff0c\u5b8c\u6210\u8bf8\u5982\u7f16\u6392\u5e94\u7528\u548c\u5de5\u4f5c\u6d41\u3001\u4fee\u8ba2\u7248\u672c\u5feb\u7167\u3001\u5783\u573e\u56de\u6536\u7b49\u7b49\u57fa\u7840\u903b\u8f91"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u6a21\u5757\u80fd\u529b\u63a7\u5236\u5668")," \u8d1f\u8d23\u5bf9 X-Definitions \u5bf9\u8c61\u8fdb\u884c\u6ce8\u518c\u548c\u7ba1\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u63d2\u4ef6\u63a7\u5236\u5668")," \u8d1f\u8d23\u6ce8\u518c\u548c\u7ba1\u7406 KubeVela \u8fd0\u884c\u6240\u9700\u8981\u7684\u7b2c\u4e09\u65b9\u63d2\u4ef6\uff0c\u6bd4\u5982 Flux\uff0cTerraform \u7ec4\u4ef6\u7b49\u7b49\u3002")),(0,i.kt)("h3",{id:"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd"},"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd"),(0,i.kt)("p",null,"\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd\u662f\u5e94\u7528\u5b9e\u9645\u8fd0\u884c\u7684\u5730\u65b9\u3002KubeVela \u672c\u8eab\u662f\u5b8c\u5168\u4e0e\u8fd9\u4e9b\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\uff0c\u56e0\u6b64\u5b83\u5141\u8bb8\u4f60\u9762\u5411\u4efb\u4f55\u73af\u5883\uff0c\u5305\u62ec Kubernetes \u73af\u5883\uff0c\u4e5f\u5305\u62ec\u975e Kubernetes \u73af\u5883\u6bd4\u5982\u4e91\u5e73\u53f0\u548c\u8fb9\u7f18\u8bbe\u5907\u7b49\uff0c\u4ea4\u4ed8\u4efb\u4f55\u7c7b\u578b\u7684\u5e94\u7528\u3002"),(0,i.kt)("h2",{id:"kubevela-\u662f\u53ef\u7f16\u7a0b\u7684"},"KubeVela \u662f\u53ef\u7f16\u7a0b\u7684"),(0,i.kt)("p",null,"\u5728\u73b0\u5b9e\u4e16\u754c\u4e2d\uff0c\u5e94\u7528\u4ea4\u4ed8\u5f80\u5f80\u6bd4\u8f83\u590d\u6742\uff0c\u54ea\u6015\u662f\u4e00\u4e2a\u975e\u5e38\u901a\u7528\u7684\u4ea4\u4ed8\u8fc7\u7a0b\uff0c\u4e5f\u4f1a\u56e0\u4e3a\u7528\u6237\u3001\u56e2\u961f\u3001\u73af\u5883\u3001\u573a\u666f\u7684\u53d8\u5316\u800c\u5343\u5dee\u4e07\u522b\u3002\u6240\u4ee5 KubeVela \u4ece\u7b2c\u4e00\u5929\u8d77\u5c31\u91c7\u7528\u4e86\u4e00\u79cd\u201c\u53ef\u7f16\u7a0b\u201d\u5f0f\u7684\u65b9\u6cd5\u6765\u5b9e\u73b0\u5b83\u7684\u4ea4\u4ed8\u6a21\u578b\uff0c\u8fd9\u4f7f\u5f97 KubeVela \u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u548c\u7075\u6d3b\u7684\u9002\u914d\u5230\u4f60\u7684\u5e94\u7528\u4ea4\u4ed8\u573a\u666f\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kernel",src:n(52582).Z})),(0,i.kt)("p",null,"\u5982\u679c\u8981\u8be6\u7ec6\u5b66\u4e60 KubeVela \u7684\u53ef\u7f16\u7a0b\u6587\u6863\uff0c\u6b22\u8fce\u67e5\u770b\u6587\u6863\u7f51\u7ad9\u4e2d\u300a\u7ba1\u7406\u5458\u624b\u518c\u300b\u90e8\u5206\u3002"))}p.isMDXComponent=!0},52582:function(e,t,n){"use strict";t.Z=n.p+"assets/images/kernel-a3960044e36db96e8153efe4f1051ce8.png"},52009:function(e,t,n){"use strict";t.Z=n.p+"assets/images/system-arch-7ed4fcfe66c5d6520ad6c16fa2e5f648.png"}}]);