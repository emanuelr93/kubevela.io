(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8217],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),o=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=o(t),k=r,d=s["".concat(m,".").concat(k)]||s[k]||c[k]||l;return t?a.createElement(d,p(p({ref:n},u),{},{components:t})):a.createElement(d,p({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=s;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},55085:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return m},default:function(){return u}});var a=t(22122),r=t(19756),l=(t(67294),t(3905)),p={title:"\u57fa\u7840\u5165\u95e8"},i={unversionedId:"platform-engineers/cue/basic",id:"version-v1.1/platform-engineers/cue/basic",isDocsHomePage:!1,title:"\u57fa\u7840\u5165\u95e8",description:"CUE \u662f KubeVela \u7684\u6838\u5fc3\u4f9d\u8d56\uff0c\u4e5f\u662f\u7528\u6237\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6269\u5c55\u7684\u4e3b\u8981\u65b9\u5f0f\u3002\u672c\u7ae0\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecd CUE \u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4f7f\u7528 KubeVela\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/cue/basic.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/basic",permalink:"/zh/docs/platform-engineers/cue/basic",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cue/basic.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"\u57fa\u7840\u5165\u95e8"},sidebar:"version-v1.1/docs",previous:{title:"\u6a21\u5757\u5b9a\u4e49\uff08X-Definitions\uff09",permalink:"/zh/docs/platform-engineers/oam/x-definition"},next:{title:"\u81ea\u5b9a\u4e49\u73af\u5883\u521d\u59cb\u5316",permalink:"/zh/docs/platform-engineers/initializer/basic-initializer"}},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u524d\u63d0",id:"\u524d\u63d0",children:[]},{value:"\u5b66\u4e60 CUE \u547d\u4ee4\u884c",id:"\u5b66\u4e60-cue-\u547d\u4ee4\u884c",children:[]},{value:"\u5b66\u4e60 CUE \u8bed\u8a00",id:"\u5b66\u4e60-cue-\u8bed\u8a00",children:[]},{value:"\u5b9a\u4e49\u4e00\u4e2a CUE \u6a21\u677f",id:"\u5b9a\u4e49\u4e00\u4e2a-cue-\u6a21\u677f",children:[]},{value:"CUE \u7684\u66f4\u591a\u7528\u6cd5",id:"cue-\u7684\u66f4\u591a\u7528\u6cd5",children:[]},{value:"\u5bfc\u5165 CUE \u5185\u90e8\u5305",id:"\u5bfc\u5165-cue-\u5185\u90e8\u5305",children:[]},{value:"\u5bfc\u5165 Kubernetes \u5305",id:"\u5bfc\u5165-kubernetes-\u5305",children:[]}],o={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"CUE \u662f KubeVela \u7684\u6838\u5fc3\u4f9d\u8d56\uff0c\u4e5f\u662f\u7528\u6237\u5b9e\u73b0\u81ea\u5b9a\u4e49\u6269\u5c55\u7684\u4e3b\u8981\u65b9\u5f0f\u3002\u672c\u7ae0\u8282\u5c06\u8be6\u7ec6\u4ecb\u7ecd CUE \u7684\u57fa\u7840\u77e5\u8bc6\uff0c\u5e2e\u52a9\u4f60\u66f4\u597d\u5730\u4f7f\u7528 KubeVela\u3002"),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"KubeVela \u5c06 CUE \u4f5c\u4e3a\u5e94\u7528\u4ea4\u4ed8\u6838\u5fc3\u4f9d\u8d56\u548c\u6269\u5c55\u65b9\u5f0f\u7684\u539f\u56e0\u5982\u4e0b\uff1a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CUE \u672c\u8eab\u5c31\u662f\u4e3a\u5927\u89c4\u6a21\u914d\u7f6e\u800c\u8bbe\u8ba1\u3002")," CUE \u80fd\u591f\u611f\u77e5\u975e\u5e38\u590d\u6742\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5e76\u4e14\u80fd\u591f\u5b89\u5168\u5730\u66f4\u6539\u53ef\u4fee\u6539\u914d\u7f6e\u4e2d\u6210\u5343\u4e0a\u4e07\u4e2a\u5bf9\u8c61\u7684\u503c\u3002\u8fd9\u975e\u5e38\u7b26\u5408 KubeVela \u7684\u76ee\u6807\uff0c\u5373\u4ee5\u53ef\u7f16\u7a0b\u7684\u65b9\u5f0f\uff0c\u53bb\u5b9a\u4e49\u548c\u4ea4\u4ed8\u751f\u4ea7\u7ea7\u522b\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CUE \u652f\u6301\u4e00\u6d41\u7684\u4ee3\u7801\u751f\u6210\u548c\u81ea\u52a8\u5316\u3002")," CUE \u539f\u751f\u652f\u6301\u4e0e\u73b0\u6709\u5de5\u5177\u4ee5\u53ca\u5de5\u4f5c\u6d41\u8fdb\u884c\u96c6\u6210\uff0c\u53cd\u89c2\u5176\u4ed6\u5de5\u5177\u5219\u9700\u8981\u81ea\u5b9a\u4e49\u590d\u6742\u7684\u65b9\u6848\u624d\u80fd\u5b9e\u73b0\u3002\u4f8b\u5982\uff0c\u9700\u8981\u624b\u52a8\u4f7f\u7528 Go \u4ee3\u7801\u751f\u6210 OpenAPI \u6a21\u5f0f\u3002KubeVela \u4e5f\u662f\u4f9d\u8d56 CUE \u8be5\u7279\u6027\u8fdb\u884c\u6784\u5efa\u5f00\u53d1\u5de5\u5177\u548c GUI \u754c\u9762\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CUE \u4e0e Go \u5b8c\u7f8e\u96c6\u6210\u3002")," KubeVela \u50cf Kubernetes \u7cfb\u7edf\u4e2d\u7684\u5927\u591a\u6570\u9879\u76ee\u4e00\u6837\u4f7f\u7528 GO \u8fdb\u884c\u5f00\u53d1\u3002CUE \u5df2\u7ecf\u5728 Go \u4e2d\u5b9e\u73b0\u5e76\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684 API\u3002KubeVela \u4ee5 CUE \u4e3a\u6838\u5fc3\u5b9e\u73b0 Kubernetes \u63a7\u5236\u5668\u3002\u501f\u52a9 CUE\uff0cKubeVela \u53ef\u4ee5\u8f7b\u677e\u5904\u7406\u6570\u636e\u7ea6\u675f\u95ee\u9898\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"https://blog.cedriccharly.com/post/20191109-the-configuration-complexity-curse/"},"The Configuration Complexity Curse")," \u4ee5\u53ca ",(0,l.kt)("a",{parentName:"p",href:"https://cuelang.org/docs/concepts/logic/"},"The Logic of CUE"),"\u3002")),(0,l.kt)("h2",{id:"\u524d\u63d0"},"\u524d\u63d0"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684\u73af\u5883\u4e2d\u5df2\u7ecf\u5b89\u88c5\u5982\u4e0b\u547d\u4ee4\u884c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cuelang.org/docs/install/"},(0,l.kt)("inlineCode",{parentName:"a"},"cue")," >=v0.2.2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../getting-started/quick-install#3-get-kubevela-cli"},(0,l.kt)("inlineCode",{parentName:"a"},"vela")," >v1.0.0")," \u76ee\u524d KubeVela \u6682\u65f6\u53ea\u652f\u6301 CUE v0.2.2 \u7248\u672c\uff0c\u5c06\u5728\u540e\u7eed\u8fed\u4ee3\u4e2d\u5347\u7ea7\u652f\u6301\u65b0\u7684 CUE \u7248\u672c\u3002")),(0,l.kt)("h2",{id:"\u5b66\u4e60-cue-\u547d\u4ee4\u884c"},"\u5b66\u4e60 CUE \u547d\u4ee4\u884c"),(0,l.kt)("p",null,"CUE \u662f JSON \u7684\u8d85\u96c6\uff0c \u6211\u4eec\u53ef\u4ee5\u50cf\u4f7f\u7528 JSON \u4e00\u6837\u4f7f\u7528 CUE\uff0c\u5e76\u5177\u5907\u4ee5\u4e0b\u7279\u6027\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"C \u8bed\u8a00\u98ce\u683c\u7684\u6ce8\u91ca"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u540d\u79f0\u53ef\u4ee5\u7528\u53cc\u5f15\u53f7\u62ec\u8d77\u6765\uff0c\u6ce8\u610f\u5b57\u6bb5\u540d\u79f0\u4e2d\u4e0d\u53ef\u4ee5\u5e26\u7279\u6b8a\u5b57\u7b26"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u9009\u5b57\u6bb5\u672b\u5c3e\u662f\u5426\u6709\u9017\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u6570\u7ec4\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u672b\u5c3e\u5e26\u9017\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u5927\u62ec\u53f7\u53ef\u9009")),(0,l.kt)("p",null,"\u8bf7\u5148\u590d\u5236\u4ee5\u4e0b\u4fe1\u606f\uff0c\u4fdd\u5b58\u4e3a\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"first.cue")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'a: 1.5\na: float\nb: 1\nb: int\nd: [1, 2, 3]\ng: {\n    h: "abc"\n}\ne: string\n')),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4ee5\u4e0a\u9762\u8fd9\u4e2a\u6587\u4ef6\u4e3a\u4f8b\u5b50\uff0c\u6765\u5b66\u4e60 CUE \u547d\u4ee4\u884c\u7684\u76f8\u5173\u6307\u4ee4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u683c\u5f0f\u5316 CUE \u6587\u4ef6\u3002\uff08\u5982\u679c\u4f60\u4f7f\u7528 Goland \u6216\u8005\u7c7b\u4f3c JetBrains IDE\uff0c\n\u53ef\u4ee5\u53c2\u8003\u8be5\u6587\u7ae0\u914d\u7f6e\u81ea\u52a8\u683c\u5f0f\u5316\u63d2\u4ef6 ",(0,l.kt)("a",{parentName:"p",href:"https://wonderflow.info/posts/2020-11-02-goland-cuelang-format/"},"\u4f7f\u7528 Goland \u8bbe\u7f6e cuelang \u7684\u81ea\u52a8\u683c\u5f0f\u5316"),"\u3002\uff09"),(0,l.kt)("p",{parentName:"li"},"\u8be5\u547d\u4ee4\u4e0d\u4ec5\u53ef\u4ee5\u683c\u5f0f\u5316 CUE \u6587\u4ef6\uff0c\u8fd8\u80fd\u63d0\u793a\u9519\u8bef\u7684\u6a21\u578b\uff0c\u76f8\u5f53\u597d\u7528\u7684\u547d\u4ee4\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cue fmt first.cue\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u6821\u9a8c\u6a21\u578b\u3002\u9664\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"cue fmt"),"\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"cue vet")," \u6765\u6821\u9a8c\u6a21\u578b\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue vet first.cue\nsome instances are incomplete; use the -c flag to show errors or suppress this message\n\n$ cue vet first.cue -c\ne: incomplete value string\n\n")),(0,l.kt)("p",{parentName:"li"},"\u63d0\u793a\u6211\u4eec\uff1a\u8fd9\u4e2a\u6587\u4ef6\u91cc\u7684 e \u8fd9\u4e2a\u53d8\u91cf\uff0c\u6709\u6570\u636e\u7c7b\u578b ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," \u4f46\u5e76\u6ca1\u6709\u8d4b\u503c\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u8ba1\u7b97/\u6e32\u67d3\u7ed3\u679c\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"cue eval")," \u53ef\u4ee5\u8ba1\u7b97 CUE \u6587\u4ef6\u5e76\u4e14\u6e32\u67d3\u51fa\u6700\u7ec8\u7ed3\u679c\u3002\n\u6211\u4eec\u770b\u5230\u6700\u7ec8\u7ed3\u679c\u4e2d\u5e76\u4e0d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"a: float")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"b: int"),"\uff0c\u8fd9\u662f\u56e0\u4e3a\u8fd9\u4e24\u4e2a\u53d8\u91cf\u5df2\u7ecf\u88ab\u8ba1\u7b97\u586b\u5145\u3002\n\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"e: string")," \u6ca1\u6709\u88ab\u660e\u786e\u7684\u8d4b\u503c, \u6545\u4fdd\u6301\u4e0d\u53d8."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ cue eval first.cue\na: 1.5\nb: 1\nd: [1, 2, 3]\ng: {\nh: "abc"\n}\ne: string\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u6307\u5b9a\u6e32\u67d3\u7684\u7ed3\u679c\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u4ec5\u60f3\u77e5\u9053\u6587\u4ef6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"b")," \u7684\u6e32\u67d3\u7ed3\u679c\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u8be5\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"-e"),"\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue eval -e b first.cue\n1\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u5bfc\u51fa\u6e32\u67d3\u7ed3\u679c\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"cue export")," \u53ef\u4ee5\u5bfc\u51fa\u6700\u7ec8\u6e32\u67d3\u7ed3\u679c\u3002\u5982\u679c\u4e00\u4e9b\u53d8\u91cf\u6ca1\u6709\u88ab\u5b9a\u4e49\u6267\u884c\u8be5\u547d\u4ee4\u5c06\u4f1a\u62a5\u9519\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue export first.cue\ne: incomplete value string  \n")),(0,l.kt)("p",{parentName:"li"},"\u6211\u4eec\u66f4\u65b0\u4e00\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"first.cue")," \u6587\u4ef6\uff0c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"e")," \u8d4b\u503c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'a: 1.5\na: float\nb: 1\nb: int\nd: [1, 2, 3]\ng: {\n  h: "abc"\n}\ne: string\ne: "abc"\n')),(0,l.kt)("p",{parentName:"li"},"\u7136\u540e\uff0c\u8be5\u547d\u4ee4\u5c31\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b, \u6e32\u67d3\u7ed3\u679c\u4f1a\u88ab\u683c\u5f0f\u5316\u4e3a JSON \u683c\u5f0f\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ cue export first.cue\n{\n    "a": 1.5,\n    "b": 1,\n    "d": [\n        1,\n        2,\n        3\n    ],\n    "g": {\n        "h": "abc"\n    },\n    "e": "abc"\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u5bfc\u51fa YAML \u683c\u5f0f\u7684\u6e32\u67d3\u7ed3\u679c\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue export first.cue --out yaml\na: 1.5\nb: 1\nd:\n- 1\n- 2\n- 3\ng:\n  h: abc\ne: abc\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u4f55\u5bfc\u51fa\u6307\u5b9a\u53d8\u91cf\u7684\u7ed3\u679c\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ cue export -e g first.cue\n{\n    "h": "abc"\n}\n')))),(0,l.kt)("p",null,"\u4ee5\u4e0a, \u4f60\u5df2\u7ecf\u5b66\u4e60\u5b8c\u6240\u6709\u5e38\u7528\u7684 CUE \u547d\u4ee4\u884c\u6307\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u5b66\u4e60-cue-\u8bed\u8a00"},"\u5b66\u4e60 CUE \u8bed\u8a00"),(0,l.kt)("p",null,"\u5728\u719f\u6089\u5b8c\u5e38\u7528 CUE \u547d\u4ee4\u884c\u6307\u4ee4\u540e\uff0c\u6211\u4eec\u6765\u8fdb\u4e00\u6b65\u5b66\u4e60 CUE \u8bed\u8a00\u3002"),(0,l.kt)("p",null,"\u5148\u4e86\u89e3 CUE \u7684\u6570\u636e\u7c7b\u578b\u3002\u4ee5\u4e0b\u662f\u5b83\u7684\u57fa\u7840\u6570\u636e\u7c7b\u578b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'// float\na: 1.5\n\n// int\nb: 1\n\n// string\nc: "blahblahblah"\n\n// array\nd: [1, 2, 3, 1, 2, 3, 1, 2, 3]\n\n// bool\ne: true\n\n// struct\nf: {\n    a: 1.5\n    b: 1\n    d: [1, 2, 3, 1, 2, 3, 1, 2, 3]\n    g: {\n        h: "abc"\n    }\n}\n\n// null\nj: null\n')),(0,l.kt)("p",null,"\u5982\u4f55\u81ea\u5b9a\u4e49 CUE \u7c7b\u578b\uff1f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," \u7b26\u53f7\u6765\u6307\u5b9a\u4e00\u4e9b\u8868\u793a CUE \u7c7b\u578b\u7684\u53d8\u91cf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#abc: string\n")),(0,l.kt)("p",null,"\u6211\u4eec\u5c06\u4e0a\u8ff0\u5185\u5bb9\u4fdd\u5b58\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"second.cue")," \u6587\u4ef6\u3002 \u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"cue export")," \u4e0d\u4f1a\u62a5 ",(0,l.kt)("inlineCode",{parentName:"p"},"#abc")," \u662f\u4e00\u4e2a\u7c7b\u578b\u4e0d\u5b8c\u6574\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue export second.cue\n{}\n")),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u66f4\u590d\u6742\u7684\u81ea\u5b9a\u4e49\u7ed3\u6784\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"#abc: {\n  x: int\n  y: string\n  z: {\n    a: float\n    b: bool\n  }\n}\n")),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u7ed3\u6784\u5728 KubeVela \u4e2d\u88ab\u5e7f\u6cdb\u7528\u4e8e\u6a21\u5757\u5b9a\u4e49\uff08X-Definitions\uff09\u548c\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,l.kt)("h2",{id:"\u5b9a\u4e49\u4e00\u4e2a-cue-\u6a21\u677f"},"\u5b9a\u4e49\u4e00\u4e2a CUE \u6a21\u677f"),(0,l.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u5f00\u59cb\u5c1d\u8bd5\u5229\u7528\u521a\u521a\u5b66\u4e60\u5230\u7684\u77e5\u8bc6\uff0c\u6765\u5b9a\u4e49 CUE \u6a21\u7248\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u7ed3\u6784\u4f53\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"parameter"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"parameter: {\n    name: string\n    image: string\n}\n")),(0,l.kt)("p",null,"\u4fdd\u5b58\u4e0a\u8ff0\u53d8\u91cf\u5230\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment.cue"),"."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u66f4\u590d\u6742\u7684\u7ed3\u6784\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"template")," \u540c\u65f6\u5f15\u7528\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"parameter"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'template: {\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    spec: {\n        selector: matchLabels: {\n            "app.oam.dev/component": parameter.name\n        }\n        template: {\n            metadata: labels: {\n                "app.oam.dev/component": parameter.name\n            }\n            spec: {\n                containers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                }]\n            }}}\n}\n')),(0,l.kt)("p",null,"\u719f\u6089 Kubernetes \u7684\u4f60\u53ef\u80fd\u5df2\u7ecf\u77e5\u9053\uff0c\u8fd9\u662f Kubernetes Deployment \u7684\u6a21\u677f\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"parameter")," \u4e3a\u6a21\u7248\u7684\u53c2\u6570\u90e8\u5206\u3002"),(0,l.kt)("p",null,"\u6dfb\u52a0\u4e0a\u8ff0\u5185\u5bb9\u5230\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment.cue"),"."),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u968f\u540e, \u6211\u4eec\u901a\u8fc7\u66f4\u65b0\u4ee5\u4e0b\u5185\u5bb9\u6765\u5b8c\u6210\u53d8\u91cf\u8d4b\u503c:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'parameter:{\n   name: "mytest"\n   image: "nginx:v1"\n}\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u6700\u540e, \u5bfc\u51fa\u6e32\u67d3\u7ed3\u679c\u4e3a YAML \u683c\u5f0f:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue export deployment.cue -e template --out yaml\n\napiVersion: apps/v1\nkind: Deployment\nspec:\n  selector:\n    matchLabels:\n      app.oam.dev/component: mytest\n  template:\n    metadata:\n      labels:\n        app.oam.dev/component: mytest\n    spec:\n      containers:\n      - name: mytest\n        image: nginx:v1\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\uff0c\u4f60\u5c31\u5f97\u5230\u4e86\u4e00\u4e2a Kubernetes Deployment \u7c7b\u578b\u7684\u6a21\u677f\u3002"),(0,l.kt)("h2",{id:"cue-\u7684\u66f4\u591a\u7528\u6cd5"},"CUE \u7684\u66f4\u591a\u7528\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8bbe\u8ba1\u5f00\u653e\u7684\u7ed3\u6784\u4f53\u548c\u6570\u7ec4\u3002\u5982\u679c\u5728\u6570\u7ec4\u6216\u8005\u7ed3\u6784\u4f53\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"..."),"\uff0c\u5219\u8bf4\u660e\u8be5\u5bf9\u8c61\u4e3a\u5f00\u653e\u7684\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u5bf9\u8c61 ",(0,l.kt)("inlineCode",{parentName:"li"},"[...string]")," \uff0c\u8bf4\u660e\u8be5\u5bf9\u8c61\u53ef\u4ee5\u5bb9\u7eb3\u591a\u4e2a\u5b57\u7b26\u4e32\u5143\u7d20\u3002\n\u5982\u679c\u4e0d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"..."),", \u8be5\u5bf9\u8c61 ",(0,l.kt)("inlineCode",{parentName:"li"},"[string]")," \u8bf4\u660e\u6570\u7ec4\u53ea\u80fd\u5bb9\u7eb3\u4e00\u4e2a\u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"string")," \u7684\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4e0b\u6240\u793a\u7684\u7ed3\u6784\u4f53\u8bf4\u660e\u53ef\u4ee5\u5305\u542b\u672a\u77e5\u5b57\u6bb5\u3002",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"{\n  abc: string   \n  ...\n}\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8fd0\u7b97\u7b26  ",(0,l.kt)("inlineCode",{parentName:"p"},"|")," \u6765\u8868\u793a\u4e24\u79cd\u7c7b\u578b\u7684\u503c\u3002\u5982\u4e0b\u6240\u793a\uff0c\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u8868\u793a\u7c7b\u578b\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u8005\u6574\u6570\u7c7b\u578b\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"a: string | int\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7b26\u53f7 ",(0,l.kt)("inlineCode",{parentName:"li"},"*")," \u5b9a\u4e49\u53d8\u91cf\u7684\u9ed8\u8ba4\u503c\u3002\u901a\u5e38\u5b83\u4e0e\u7b26\u53f7 ",(0,l.kt)("inlineCode",{parentName:"li"},"|")," \u914d\u5408\u4f7f\u7528\uff0c\n\u4ee3\u8868\u67d0\u79cd\u7c7b\u578b\u7684\u9ed8\u8ba4\u503c\u3002\u5982\u4e0b\u6240\u793a\uff0c\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u7c7b\u578b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"int"),"\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"1"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"a: *1 | int\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba9\u4e00\u4e9b\u53d8\u91cf\u53ef\u88ab\u9009\u586b\u3002 \u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e9b\u53d8\u91cf\u4e0d\u4e00\u5b9a\u88ab\u4f7f\u7528\uff0c\u8fd9\u4e9b\u53d8\u91cf\u5c31\u662f\u53ef\u9009\u53d8\u91cf\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"?:")," \u5b9a\u4e49\u6b64\u7c7b\u53d8\u91cf\u3002\n\u5982\u4e0b\u6240\u793a, ",(0,l.kt)("inlineCode",{parentName:"li"},"a")," \u662f\u53ef\u9009\u53d8\u91cf, \u81ea\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"li"},"#my")," \u5bf9\u8c61\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"z")," \u4e3a\u53ef\u9009\u53d8\u91cf\uff0c \u800c ",(0,l.kt)("inlineCode",{parentName:"li"},"y")," \u4e3a\u5fc5\u586b\u5b57\u6bb5\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a ?: int\n\n#my: {\nx ?: string\ny : int\nz ?:float\n}\n")),(0,l.kt)("p",null,"\u9009\u586b\u53d8\u91cf\u53ef\u4ee5\u88ab\u8df3\u8fc7\uff0c\u8fd9\u7ecf\u5e38\u548c\u6761\u4ef6\u5224\u65ad\u903b\u8f91\u4e00\u8d77\u4f7f\u7528\u3002\n\u5177\u4f53\u6765\u8bf4\uff0c\u5982\u679c\u67d0\u4e9b\u5b57\u6bb5\u4e0d\u5b58\u5728\uff0c\u5219 CUE \u8bed\u6cd5\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"if _variable_\uff01= _ | _")," \uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"parameter: {\n    name: string\n    image: string\n    config?: [...#Config]\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.config != _|_ {\n                config: parameter.config\n            }\n        }]\n    }\n    ...\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fd0\u7b97\u7b26 ",(0,l.kt)("inlineCode",{parentName:"li"},"&")," \u6765\u8fd0\u7b97\u4e24\u4e2a\u53d8\u91cf\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"a: *1 | int\nb: 3\nc: a & b\n")),(0,l.kt)("p",null,"\u4fdd\u5b58\u4e0a\u8ff0\u5185\u5bb9\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"third.cue")," \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"cue eval")," \u6765\u9a8c\u8bc1\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ cue eval third.cue\na: 1\nb: 3\nc: 3\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u6267\u884c\u6761\u4ef6\u5224\u65ad\u3002\u5f53\u4f60\u6267\u884c\u4e00\u4e9b\u7ea7\u8054\u64cd\u4f5c\u65f6\uff0c\u4e0d\u540c\u7684\u503c\u4f1a\u5f71\u54cd\u4e0d\u540c\u7684\u7ed3\u679c\uff0c\u6761\u4ef6\u5224\u65ad\u5c31\u975e\u5e38\u6709\u7528\u3002\n\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728\u6a21\u7248\u4e2d\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"if..else")," \u7684\u903b\u8f91\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'price: number\nfeel: *"good" | string\n// Feel bad if price is too high\nif price > 100 {\n    feel: "bad"\n}\nprice: 200\n')),(0,l.kt)("p",null,"\u4fdd\u5b58\u4e0a\u8ff0\u5185\u5bb9\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"fourth.cue")," \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"cue eval")," \u6765\u9a8c\u8bc1\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'$ cue eval fourth.cue\nprice: 200\nfeel:  "bad"\n')),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u793a\u4f8b\u662f\u5c06\u5e03\u5c14\u7c7b\u578b\u4f5c\u4e3a\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'parameter: {\n    name:   string\n    image:  string\n    useENV: bool\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.useENV == true {\n                env: [{name: "my-env", value: "my-value"}]\n            }\n        }]\n    }\n    ...\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 For \u5faa\u73af\u3002 \u6211\u4eec\u4e3a\u4e86\u907f\u514d\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u5e38\u5e38\u4f7f\u7528 For \u5faa\u73af\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6620\u5c04\u904d\u5386\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [string]: string\n}\noutput: {\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for k, v in parameter.env {\n                    name:  k\n                    value: v\n                },\n            ]\n        }]\n    }\n}\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7c7b\u578b\u904d\u5386\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'#a: {\n    "hello": "Barcelona"\n    "nihao": "Shanghai"\n}\n\nfor k, v in #a {\n    "\\(k)": {\n        nameLen: len(v)\n        value:   v\n    }\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5207\u7247\u904d\u5386\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [...{name:string,value:string}]\n}\noutput: {\n  ...\n     spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for _, v in parameter.env {\n                    name:  v.name\n                    value: v.value\n                },\n            ]\n        }]\n    }\n}\n")))))),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},'"\\( _my-statement_ )"')," \u8fdb\u884c\u5b57\u7b26\u4e32\u5185\u90e8\u8ba1\u7b97\uff0c\u6bd4\u5982\u4e0a\u9762\u7c7b\u578b\u5faa\u73af\u793a\u4f8b\u4e2d\uff0c\u83b7\u53d6\u503c\u7684\u957f\u5ea6\u7b49\u7b49\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u5bfc\u5165-cue-\u5185\u90e8\u5305"},"\u5bfc\u5165 CUE \u5185\u90e8\u5305"),(0,l.kt)("p",null,"CUE \u6709\u5f88\u591a ",(0,l.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cuelang.org/go@v0.2.2/pkg"},"internal packages")," \u53ef\u4ee5\u88ab KubeVela \u4f7f\u7528\uff0c\u8fd9\u6837\u53ef\u4ee5\u6ee1\u8db3\u66f4\u591a\u7684\u5f00\u53d1\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"strings.Join")," \u65b9\u6cd5\u5c06\u5b57\u7b26\u4e32\u6570\u7ec4\u62fc\u63a5\u6210\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cue"},'import ("strings")\n\nparameter: {\n    outputs: [{ip: "1.1.1.1", hostname: "xxx.com"}, {ip: "2.2.2.2", hostname: "yyy.com"}]\n}\noutput: {\n    spec: {\n        if len(parameter.outputs) > 0 {\n            _x: [ for _, v in parameter.outputs {\n                "\\(v.ip) \\(v.hostname)"\n            }]\n            message: "Visiting URL: " + strings.Join(_x, "")\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5bfc\u5165-kubernetes-\u5305"},"\u5bfc\u5165 Kubernetes \u5305"),(0,l.kt)("p",null,"KubeVela \u4f1a\u4ece Kubernetes \u96c6\u7fa4\u4e2d\u8bfb\u53d6 OpenAPI\uff0c\u5e76\u5c06 Kubernetes \u6240\u6709\u8d44\u6e90\u81ea\u52a8\u6784\u5efa\u4e3a\u5185\u90e8\u5305\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 KubeVela \u7684 CUE \u6a21\u7248\u4e2d\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kube/<apiVersion>")," \u5bfc\u5165\u8fd9\u4e9b\u5305\uff0c\u5c31\u50cf\u4f7f\u7528 CUE \u5185\u90e8\u5305\u4e00\u6837\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Deployment")," \u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "kube/apps/v1"\n)\n\nparameter: {\n    name:  string\n}\n\noutput: apps.#Deployment\noutput: {\n    metadata: name: parameter.name\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Service")," \u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff08\u65e0\u9700\u4f7f\u7528\u522b\u540d\u5bfc\u5165\u8f6f\u4ef6\u5305\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cue"},'import ("kube/v1")\n\noutput: v1.#Service\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n    spec: type: "ClusterIP",\n}\n\nparameter: {\n    name:  "myapp"\n}\n')),(0,l.kt)("p",null,"\u751a\u81f3\u5df2\u7ecf\u5b89\u88c5\u7684 CRD \u4e5f\u53ef\u4ee5\u5bfc\u5165\u4f7f\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import (\n  oam  "kube/core.oam.dev/v1alpha2"\n)\n\noutput: oam.#Application\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n}\n\nparameter: {\n    name:  "myapp"\n}\n')))}u.isMDXComponent=!0}}]);