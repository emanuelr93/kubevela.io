(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[1617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61995:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return o},default:function(){return p}});var r=n(22122),l=n(19756),i=(n(67294),n(3905)),a={title:"\u7cfb\u7edf\u67b6\u6784"},u={unversionedId:"core-concepts/architecture",id:"core-concepts/architecture",isDocsHomePage:!1,title:"\u7cfb\u7edf\u67b6\u6784",description:"KubeVela \u7684\u7cfb\u7edf\u5728\u9ed8\u8ba4\u5b89\u88c5\u7684\u6a21\u5f0f\u4e0b\uff0c\u662f\u4e00\u4e2a\u53ea\u5305\u542b\u201c\u63a7\u5236\u5e73\u9762\u201d\u7684\u67b6\u6784\uff0c\u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u4e0e\u5404\u79cd\u8fd0\u884c\u65f6\u7cfb\u7edf\u8fdb\u884c\u7d27\u5bc6\u914d\u5408\u3002\u5176\u4e2d KubeVela \u6838\u5fc3\u63a7\u5236\u5668\u5de5\u4f5c\u5728\u7ba1\u63a7 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/zh/docs/next/core-concepts/architecture",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/core-concepts/architecture.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1629369327,formattedLastUpdatedAt:"2021/8/19",frontMatter:{title:"\u7cfb\u7edf\u67b6\u6784"},sidebar:"docs",previous:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/zh/docs/next/getting-started/first-application"},next:{title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212",permalink:"/zh/docs/next/core-concepts/application"}},o=[{value:"\u9ed8\u8ba4\u5b89\u88c5\u7684\u63a7\u5236\u5668",id:"\u9ed8\u8ba4\u5b89\u88c5\u7684\u63a7\u5236\u5668",children:[{value:"\u5e94\u7528\uff08Application\uff09\u63a7\u5236\u5668",id:"\u5e94\u7528\uff08application\uff09\u63a7\u5236\u5668",children:[]},{value:"\u6a21\u5757\u5b9a\u4e49\uff08Definition\uff09\u63a7\u5236\u5668",id:"\u6a21\u5757\u5b9a\u4e49\uff08definition\uff09\u63a7\u5236\u5668",children:[]},{value:"\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09\u63a7\u5236\u5668",id:"\u73af\u5883\u521d\u59cb\u5316\uff08initializer\uff09\u63a7\u5236\u5668",children:[]},{value:"\u5065\u5eb7\u68c0\u67e5\uff08Health Scope\uff09\u63a7\u5236\u5668",id:"\u5065\u5eb7\u68c0\u67e5\uff08health-scope\uff09\u63a7\u5236\u5668",children:[]},{value:"\u73af\u5883\u5dee\u5f02\u5316\u914d\u7f6e\uff08EnvBinding\uff09\u63a7\u5236\u5668",id:"\u73af\u5883\u5dee\u5f02\u5316\u914d\u7f6e\uff08envbinding\uff09\u63a7\u5236\u5668",children:[]}]},{value:"\u4e00\u952e\u5b89\u88c5\u7684\u63d2\u4ef6\u5316\u63a7\u5236\u5668",id:"\u4e00\u952e\u5b89\u88c5\u7684\u63d2\u4ef6\u5316\u63a7\u5236\u5668",children:[{value:"\u4e91\u8d44\u6e90 Terraform \u63a7\u5236\u5668",id:"\u4e91\u8d44\u6e90-terraform-\u63a7\u5236\u5668",children:[]},{value:"\u591a\u96c6\u7fa4\uff08OCM\uff09\u63a7\u5236\u5668",id:"\u591a\u96c6\u7fa4\uff08ocm\uff09\u63a7\u5236\u5668",children:[]},{value:"OpenKruise \u63a7\u5236\u5668",id:"openkruise-\u63a7\u5236\u5668",children:[]},{value:"\u7070\u5ea6\u53d1\u5e03\uff08Rollout\uff09\u63a7\u5236\u5668",id:"\u7070\u5ea6\u53d1\u5e03\uff08rollout\uff09\u63a7\u5236\u5668",children:[]},{value:"FluxCD \u63a7\u5236\u5668",id:"fluxcd-\u63a7\u5236\u5668",children:[]}]},{value:"\u7cfb\u7edf\u6570\u636e\u6d41",id:"\u7cfb\u7edf\u6570\u636e\u6d41",children:[{value:"\u63a7\u5236\u9762",id:"\u63a7\u5236\u9762",children:[]},{value:"\u6570\u636e\u9762",id:"\u6570\u636e\u9762",children:[]}]}],c={toc:o};function p(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KubeVela \u7684\u7cfb\u7edf\u5728\u9ed8\u8ba4\u5b89\u88c5\u7684\u6a21\u5f0f\u4e0b\uff0c\u662f\u4e00\u4e2a\u53ea\u5305\u542b\u201c\u63a7\u5236\u5e73\u9762\u201d\u7684\u67b6\u6784\uff0c\u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u4e0e\u5404\u79cd\u8fd0\u884c\u65f6\u7cfb\u7edf\u8fdb\u884c\u7d27\u5bc6\u914d\u5408\u3002\u5176\u4e2d KubeVela \u6838\u5fc3\u63a7\u5236\u5668\u5de5\u4f5c\u5728\u7ba1\u63a7 Kubernetes \u96c6\u7fa4\u3002\n\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u81ea\u4e0a\u800c\u4e0b\u770b\uff0c\u7528\u6237\u53ea\u4e0e KubeVela \u6240\u5728\u7684\u63a7\u5236\u9762 Kubernetes \u96c6\u7fa4\u53d1\u751f\u4ea4\u4e92\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kubevela-arch",src:n(30966).Z})),(0,i.kt)("h2",{id:"\u9ed8\u8ba4\u5b89\u88c5\u7684\u63a7\u5236\u5668"},"\u9ed8\u8ba4\u5b89\u88c5\u7684\u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u5728\u63a7\u5236\u9762\u96c6\u7fa4\u4e2d\uff0c\u9ed8\u8ba4\u5c31\u5b89\u88c5\u7684\u7ec4\u4ef6\u4e3a\u6df1\u7eff\u8272\u6846\uff0c\u5176\u4e2d\u6700\u6838\u5fc3\u7684\u662f Application Controller\uff0c\u4e5f\u5c31\u662f KubeVela \u7684\u5e94\u7528\u63a7\u5236\u5668\u3002"),(0,i.kt)("h3",{id:"\u5e94\u7528\uff08application\uff09\u63a7\u5236\u5668"},"\u5e94\u7528\uff08Application\uff09\u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u5e94\u7528\u63a7\u5236\u5668\u662f KubeVela \u7684\u6838\u5fc3\u63a7\u5236\u5668\uff0c\u4e5f\u662f KubeVela \u552f\u4e00\u4e00\u4e2a\u5fc5\u987b\u8981\u5b89\u88c5\u4e14\u4e0d\u53ef\u66ff\u6362\u7684\u63a7\u5236\u5668\uff0c\u8d1f\u8d23\u5e94\u7528\u7684\u5168\u751f\u547d\u5468\u671f\u7ba1\u63a7\uff0c\u4e3b\u8981\u5305\u542b\u5e94\u7528\u7248\u672c\u5316\u3001\u6a21\u5757\u6e32\u67d3\u5f15\u64ce\u3001\u5de5\u4f5c\u6d41\u5f15\u64ce\u3001\u8d44\u6e90\u56de\u6536\u7b49\u6a21\u5757\uff0c\u5373\u56fe\u4e2d\u6de1\u7ea2\u8272\u90e8\u5206\u6846\u56fe\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7248\u672c\u5316\u63a7\u5236\uff08Revision Manager\uff09\uff1a\u5bf9\u4e8e KubeVela \u800c\u8a00\uff0c\u5e94\u7528\u7684\u6bcf\u4e00\u6b21\u53d8\u52a8\u90fd\u4f1a\u751f\u6210\u4e24\u79cd\u7c7b\u578b\u7684\u7248\u672c\uff0c\u4e00\u4e2a\u662f\u5e94\u7528\u7684\u7248\u672c\uff08AppRevision\uff09\uff0c\u4e00\u4e2a\u662f\u7ec4\u4ef6\u7248\u672c\uff08Component Revision\uff09\u3002\u5e94\u7528\u7248\u672c\u4e3b\u8981\u4f5c\u4e3a\u5e94\u7528\u7684\u5feb\u7167\u8bb0\u5f55\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8fdb\u884c\u5e94\u7528\u4fee\u6539\u7684\u5ba1\u8ba1\u3002\u7ec4\u4ef6\u7684\u7248\u672c\u4e3b\u8981\u7528\u4e8e\u7ec4\u4ef6\u7684\u6eda\u52a8\u5347\u7ea7\u4e0e\u56de\u6eda\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e0d\u540c\u7684\u7ec4\u4ef6\u7248\u672c\u540c\u65f6\u8fd0\u884c\uff0c\u5e76\u505a\u53d1\u5e03\u65f6\u7684\u6d41\u91cf\u63a7\u5236\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ea4\u4ed8\u6a21\u578b\u5f15\u64ce\uff08CUE Engine\uff09\uff1aKubeVela \u91c7\u7528 Open Application Model\uff08OAM\uff09\u4f5c\u4e3a\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\uff0c\u5e76\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"li",href:"https://cuelang.org/"},"CUE")," \u914d\u7f6e\u8bed\u8a00\u6765\u5b9e\u73b0\u8be5\u6a21\u578b\uff0c\u4ece\u800c\u4ee5\u53ef\u7f16\u7a0b\u7684\u65b9\u5f0f\uff08IaC\uff09\u5bf9\u5f85\u4ea4\u4ed8\u7ec4\u4ef6\u3001\u8fd0\u7ef4\u80fd\u529b\u3001\u7528\u6237\u8f93\u5165\u548c\u4ea4\u4ed8\u5de5\u4f5c\u6d41\u8fdb\u884c\u7edf\u4e00\u7684\u7f16\u6392\u548c\u7ba1\u7406\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u6d41\u5f15\u64ce\uff08Workflow Engine\uff09\uff1a\u5de5\u4f5c\u6d41\u662f\u4e00\u6b21\u5e94\u7528\u90e8\u7f72\u6267\u884c\u8fc7\u7a0b\u7684\u63cf\u8ff0\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5de5\u4f5c\u6d41\u81ea\u5df1\u5b9a\u4e49\u90e8\u7f72\u7684\u5b8c\u6574\u6d41\u7a0b\uff0c\u6216\u8005\u7075\u6d3b\u7684\u63d2\u5165\u5404\u79cd\u6b65\u9aa4\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u5de5\u4f5c\u6d41\u7684\u6700\u5f00\u59cb\u52a0\u5165\u4e00\u4e2a\u73af\u5883\u521d\u59cb\u5316\u7684\u8282\u70b9\uff0c\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u8282\u70b9\u53ef\u4ee5\u662f\u521b\u5efa\u4e00\u4e2a\u8fd0\u884c\u65f6 Kubernetes \u96c6\u7fa4\uff0c\u6216\u8005\u662f\u5728\u4e00\u4e2a\u73af\u5883\u4e0a\u5b89\u88c5\u67d0\u79cd\u7cfb\u7edf\u7ec4\u4ef6\u3002\u7136\u540e\u518d\u5c06\u5e94\u7528\u90e8\u7f72\u5230\u521a\u521a\u521d\u59cb\u5316\u5b8c\u6210\u7684\u90e8\u7f72\u73af\u5883\u4e2d\u3002\u7b80\u800c\u8a00\u4e4b\uff0c",(0,i.kt)("strong",{parentName:"li"},"KubeVela \u7684\u5de5\u4f5c\u6d41\u4f7f\u5f97\u5e94\u7528\u90e8\u7f72\u7684\u5b8c\u6574\u6d41\u7a0b\u53ef\u4ee5\u901a\u8fc7\u4e00\u4efd\u58f0\u660e\u5f0f\u914d\u7f6e\u6587\u4ef6\u5b8c\u6210\u63cf\u8ff0"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u56de\u6536\u5f15\u64ce\uff08Garbage Collection\uff09\uff1a\u8d1f\u8d23\u8d44\u6e90\u7684\u8bb0\u5f55\u548c\u5220\u9664\uff0c\u58f0\u660e\u5f0f\u5e94\u7528\u63cf\u8ff0\u53ea\u8bb0\u5f55\u7ec8\u6001\u65f6\u7684\u8d44\u6e90\u60c5\u51b5\uff0c\u800c\u5b9e\u9645\u6709\u4e9b\u5df2\u7ecf\u5b58\u5728\u7684\u8d44\u6e90\u82e5\u4e0d\u5b58\u5728\u4e8e\u7ec8\u6001\uff0c\u5c31\u9700\u8981\u901a\u8fc7\u8fd9\u4e2a\u6a21\u5757\u6765\u505a\u81ea\u52a8\u5316\u7684\u5783\u573e\u56de\u6536\u3002")),(0,i.kt)("h3",{id:"\u6a21\u5757\u5b9a\u4e49\uff08definition\uff09\u63a7\u5236\u5668"},"\u6a21\u5757\u5b9a\u4e49\uff08Definition\uff09\u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u6a21\u5757\u5b9a\u4e49\uff08Definition\uff09\u63a7\u5236\u5668\u7ba1\u7406\u5404 OAM \u6a21\u5757\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\uff0c\u6bd4\u5982\u7ec4\u4ef6\u5b9a\u4e49\u6a21\u5757\uff08ComponentDefinition\uff09\u3001\u8fd0\u7ef4\u7279\u5f81\u6a21\u5757\uff08TraitDefinition\uff09\u7b49\u7b49\u3002\u6a21\u5757\u5b9a\u4e49\u63a7\u5236\u5668\u4f1a\u4e3a\u8fd9\u4e9b\u6a21\u5757\u7684\u4fee\u6539\u751f\u6210\u4e0d\u540c\u7684\u7248\u672c\uff0c\u81ea\u52a8\u751f\u6210\u64cd\u4f5c\u6587\u6863\uff0c\u5bf9\u63a5\u7684 OpenAPI Schema \u7b49\u8f85\u52a9\u4fe1\u606f\uff0c\u65b9\u4fbf\u5176\u4ed6\u7cfb\u7edf\u5bf9\u63a5\u3002"),(0,i.kt)("h3",{id:"\u73af\u5883\u521d\u59cb\u5316\uff08initializer\uff09\u63a7\u5236\u5668"},"\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09\u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09\u63a7\u5236\u5668\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u81ea\u5b9a\u4e49\u201c\u4ec0\u4e48\u6784\u6210\u4e00\u4e2a\u73af\u5883\u201d\uff0c\u5c06\u6784\u6210\u73af\u5883\u6240\u9700\u7684\u8d44\u6e90\u5b8c\u6574\u7684\u521b\u5efa\u8d77\u6765\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4e00\u4e2a\u73af\u5883\u53ef\u80fd\u662f\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u540c\u65f6\u52a0\u4e0a\u4e00\u4e9b Ingress \u4e4b\u7c7b\u7684\u7cfb\u7edf\u63d2\u4ef6\uff0c\u90a3\u4e48\u73af\u5883\u521d\u59cb\u5316\u63a7\u5236\u5668\u5c31\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u521b\u5efa\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6\u5728\u96c6\u7fa4\u4e2d\u5b89\u88c5\u8fd9\u4e9b\u7cfb\u7edf\u63d2\u4ef6\u3002"),(0,i.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316\u63a7\u5236\u5668\u540c\u6837\u4f7f\u7528 KubeVela \u81ea\u8eab\u6765\u4ea4\u4ed8\u6240\u6709\u7684\u7cfb\u7edf\u63d2\u4ef6\uff0c\u7531\u4e8e KubeVela \u7684\u5929\u7136\u5177\u5907\u9ad8\u53ef\u6269\u5c55\u4ee5\u53ca\u201c\u4ea4\u4ed8\u4e00\u5207\u201c\u7684\u80fd\u529b\uff0c\u6240\u4ee5\u73af\u5883\u521d\u59cb\u5316\u63a7\u5236\u5668\u7684\u529f\u80fd\u975e\u5e38\u7075\u6d3b\uff0c\u53ef\u4ee5\u6ee1\u8db3\u4efb\u4f55\u73af\u5883\u7684\u521d\u59cb\u5316\u9700\u6c42\u3002"),(0,i.kt)("h3",{id:"\u5065\u5eb7\u68c0\u67e5\uff08health-scope\uff09\u63a7\u5236\u5668"},"\u5065\u5eb7\u68c0\u67e5\uff08Health Scope\uff09\u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u5065\u5eb7\u68c0\u67e5\uff08Health Scope\uff09\u63a7\u5236\u5668\u662f\u9ed8\u8ba4\u7684\u5065\u5eb7\u68c0\u67e5\u7ec4\u4ef6\uff0c\u63d0\u4f9b\u5e94\u7528\u8d44\u6e90\u7684\u90e8\u7f72\u62d3\u6251\u56fe\uff0c\u5e76\u5468\u671f\u6027\u7684\u8fdb\u884c\u90e8\u7f72\u72b6\u6001\u5065\u5eb7\u68c0\u67e5\uff0c\u5065\u5eb7\u68c0\u67e5\u89c4\u5219\u540c\u6837\u53ef\u4ee5\u57fa\u4e8e CUE \u914d\u7f6e\u8bed\u8a00\u8fdb\u884c\u81ea\u5b9a\u4e49\u3002\u5065\u5eb7\u68c0\u67e5\uff08Health Scope\uff09\u662f OAM \u91cc\u7684\u6807\u51c6\u6982\u5ff5\uff0c\u5176\u5b9e\u73b0\u4e5f\u662f\u53ef\u63d2\u62d4\u7684\uff0c\u5e73\u53f0\u6784\u5efa\u8005\u4e5f\u53ef\u4ee5\u5b9a\u5236\u5b9e\u73b0\u81ea\u5df1\u7684\u5065\u5eb7\u68c0\u67e5\u63a7\u5236\u5668\uff0c\u5e76\u81ea\u5b9a\u4e49\u5065\u5eb7\u68c0\u67e5\u903b\u8f91\u3002"),(0,i.kt)("h3",{id:"\u73af\u5883\u5dee\u5f02\u5316\u914d\u7f6e\uff08envbinding\uff09\u63a7\u5236\u5668"},"\u73af\u5883\u5dee\u5f02\u5316\u914d\u7f6e\uff08EnvBinding\uff09\u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u73af\u5883\u5dee\u5f02\u5316\u914d\u7f6e\uff08EnvBinding\uff09\u63a7\u5236\u5668\u63d0\u4f9b\u4e86\u9488\u5bf9\u4e0d\u540c\u7684\u73af\u5883\u505a\u5dee\u5f02\u5316\u914d\u7f6e\uff08patch\uff09\u7684\u80fd\u529b\uff0c\u540c\u65f6\u53ef\u4ee5\u7ed3\u5408\u591a\u96c6\u7fa4\u7ec4\u4ef6\uff0c\u6839\u636e\u7528\u6237\u58f0\u660e\u7684\u7b56\u7565\u5c06\u5e94\u7528\u7ec4\u4ef6\u5206\u53d1\u8c03\u5ea6\u5230\u4e0d\u540c\u7684\u76ee\u6807\u96c6\u7fa4\uff08\u73af\u5883\uff09\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u9ed8\u8ba4\u5b89\u88c5\u7684\u63a7\u5236\u5668\u5916\uff0cKubeVela \u63d0\u4f9b\u4e86\u5305\u62ec\u591a\u96c6\u7fa4\u5728\u5185\u7684\u4e00\u7cfb\u5217\u5f00\u7bb1\u5373\u7528\u7684\u63d2\u4ef6\u529f\u80fd\uff0c\u53ea\u9700\u8981\u6fc0\u6d3b\u8fd9\u4e9b\u63d2\u4ef6\u529f\u80fd\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u4e00\u952e\u5b89\u88c5\u7684\u63d2\u4ef6\u5316\u63a7\u5236\u5668"},"\u4e00\u952e\u5b89\u88c5\u7684\u63d2\u4ef6\u5316\u63a7\u5236\u5668"),(0,i.kt)("h3",{id:"\u4e91\u8d44\u6e90-terraform-\u63a7\u5236\u5668"},"\u4e91\u8d44\u6e90 Terraform \u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u5982\u4eca Terraform \u5df2\u7ecf\u9010\u6e10\u6210\u4e3a\u4e86\u4e91\u8d44\u6e90\u521b\u5efa\u7684\u4e3b\u6d41\u65b9\u5f0f\uff0c\u6db5\u76d6\u4e86\u51e0\u4e4e\u6240\u6709\u4e91\u5382\u5546\u7684\u8d44\u6e90\u6a21\u5757\u3002\u800c\u8fd9\u91cc\u7684 Terraform \u63a7\u5236\u5668\u5219\u662f\u5c06 Terraform \u5ba2\u6237\u7aef\u7684\u529f\u80fd\u4e0e Kubernetes \u63a7\u5236\u5668\u76f8\u7ed3\u5408\uff0c\u5728\u670d\u52a1\u7aef\u9762\u5411\u7ec8\u6001\u7684\u6301\u7eed\u7ba1\u7406\u4e91\u8d44\u6e90\uff0c\u4e3a KubeVela \u521b\u5efa\u53ef\u4ee5\u6301\u7eed\u7ef4\u62a4\u548c\u7ba1\u7406\u7684\u4e91\u8d44\u6e90\u3002\u8fd9\u4e2a\u6a21\u5757\u4e5f\u662f\u53ef\u63d2\u62d4\u7684\uff0c\u53ef\u4ee5\u66ff\u6362\u6210 Crossplane \u7b49\u5176\u4ed6\u4e91\u8d44\u6e90\u521b\u5efa\u65b9\u6848\u3002"),(0,i.kt)("h3",{id:"\u591a\u96c6\u7fa4\uff08ocm\uff09\u63a7\u5236\u5668"},"\u591a\u96c6\u7fa4\uff08OCM\uff09\u63a7\u5236\u5668"),(0,i.kt)("p",null,"OCM\uff08Open Cluster Management\uff09\u662f KubeVela \u9ed8\u8ba4\u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u5f15\u64ce\uff0c\u5305\u542b\u96c6\u7fa4\u6ce8\u518c\u3001\u96c6\u7fa4\u7ba1\u7406\u3001\u8bc1\u4e66\u81ea\u52a8\u66f4\u65b0\u3001\u591a\u96c6\u7fa4\u8d44\u6e90\u5206\u53d1\u7b49\u6838\u5fc3\u529f\u80fd\u3002\u8fd9\u4e2a\u6a21\u5757\u4e5f\u662f\u53ef\u63d2\u62d4\u7684\uff0c\u53ef\u4ee5\u6362\u6210 Karmada \u7b49\u591a\u96c6\u7fa4\u63a7\u5236\u5668\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u63a7\u5236\u9762\u7684\u7ec4\u4ef6\u4ee5\u5916\uff0cKubeVela \u8fd8\u9700\u8981\u4e0e\u5b9e\u9645\u8fd0\u884c\u65f6 Kubernetes \u96c6\u7fa4\u7684\u5404\u79cd\u5de5\u4f5c\u8d1f\u8f7d\u548c\u8fd0\u7ef4\u80fd\u529b\u8054\u52a8\u3002\u4e3b\u8981\u65b9\u5f0f\u662f\u901a\u8fc7 OAM \u6a21\u578b\u662f\u5c06\u4ed6\u4eec\u4f5c\u4e3a Component \u548c Trait \u80cc\u540e\u7684\u5b9e\u9645\u6267\u884c\u5668\u3002\u9664\u4e86 Kubernetes \u7684\u9ed8\u8ba4\u8d44\u6e90\u5916\uff0c\u4e5f\u6709\u4e00\u4e9b\u662f KubeVela \u901a\u8fc7\u63d2\u4ef6\u673a\u5236\u4e00\u952e\u5c31\u80fd\u5b89\u88c5\u7684\u3002"),(0,i.kt)("h3",{id:"openkruise-\u63a7\u5236\u5668"},"OpenKruise \u63a7\u5236\u5668"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io/"},"OpenKruise")," \u63a7\u5236\u5668\u5de5\u4f5c\u5728\u8fd0\u884c\u65f6\u96c6\u7fa4\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u9762\u5411\u65e0\u72b6\u6001\u3001\u6709\u72b6\u6001\u5e94\u7528\u7ba1\u7406\u7684\u9ad8\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\u529f\u80fd\uff0c\u901a\u8fc7 OpenKruise \u4e2d\u7684\u5404\u79cd\u9ad8\u7ea7\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u53ef\u4ee5\u5b9e\u73b0\u539f\u5730\u5347\u7ea7\u3001\u955c\u50cf\u9884\u70ed\u7b49\u9ad8\u7ea7\u529f\u80fd\u3002"),(0,i.kt)("h3",{id:"\u7070\u5ea6\u53d1\u5e03\uff08rollout\uff09\u63a7\u5236\u5668"},"\u7070\u5ea6\u53d1\u5e03\uff08Rollout\uff09\u63a7\u5236\u5668"),(0,i.kt)("p",null,"\u7070\u5ea6\u53d1\u5e03\uff08Rollout\uff09\u63a7\u5236\u5668\u5de5\u4f5c\u5728\u8fd0\u884c\u65f6\u96c6\u7fa4\uff0c\u53ef\u4ee5\u7ed3\u5408 KubeVela \u4e0d\u540c\u7684\u7ec4\u4ef6\u7248\u672c\u8fdb\u884c\u7070\u5ea6\u53d1\u5e03\uff0c\u5305\u542b\u7684\u529f\u80fd\u6709\u5206\u6279\u53d1\u5e03\u3001\u53d1\u5e03\u6682\u505c\u3001\u53d1\u5e03\u56de\u6eda\u3001\u6309\u767e\u5206\u6bd4\u53d1\u5e03\u7b49\u3002\u53ef\u4ee5\u5bf9\u63a5\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5305\u62ec Kubernetes \u7684 Deployment\u3001StatefulSet \u7b49\u539f\u751f\u80fd\u529b\uff0c\u4ee5\u53ca OpenKruise \u4e2d\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://openkruise.io/zh-cn/docs/cloneset.html"},"Cloneset"),"\u3002\u7ed3\u5408 Istio \u7b49 Service Mesh \u7ec4\u4ef6\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u84dd\u7eff\u53d1\u5e03\u7b49\u9ad8\u7ea7\u53d1\u5e03\u529f\u80fd\u3002"),(0,i.kt)("h3",{id:"fluxcd-\u63a7\u5236\u5668"},"FluxCD \u63a7\u5236\u5668"),(0,i.kt)("p",null,"KubeVela \u901a\u8fc7 FluxCD \u63a7\u5236\u5668\u6765\u5b9e\u73b0 Pull \u6a21\u5f0f\u7684\u5e94\u7528\u7ec4\u4ef6\u4ea4\u4ed8\u3002"),(0,i.kt)("h2",{id:"\u7cfb\u7edf\u6570\u636e\u6d41"},"\u7cfb\u7edf\u6570\u636e\u6d41"),(0,i.kt)("p",null,"KubeVela \u7684\u7cfb\u7edf\u6570\u636e\u6d41\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u5176\u4e2d\u9ec4\u8272\u7684\u5b9e\u7ebf\u548c\u865a\u7ebf\u4e3a\u7528\u6237\u6570\u636e\u6d41\u5411\uff1b\u7d2b\u8272\u5b9e\u7ebf\u4e3a\u63a7\u5236\u9762\u7684\u6570\u636e\u6d41\u5411\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data-flow",src:n(40003).Z})),(0,i.kt)("h3",{id:"\u63a7\u5236\u9762"},"\u63a7\u5236\u9762"),(0,i.kt)("p",null,"KubeVela \u591a\u96c6\u7fa4\u6a21\u5f0f\u4e0b\uff0c\u63a7\u5236\u9762\u7684\u6570\u636e\u6d41\u52a8\u662f\u7531\u8fd0\u884c\u65f6\u96c6\u7fa4\u4e3b\u52a8\u62c9\u53d6\u7ba1\u63a7\u96c6\u7fa4\u6570\u636e\u7684\u3002\u6240\u4ee5 Kubernetes \u591a\u96c6\u7fa4\u7f51\u7edc\u8fde\u901a\u6027\u65b9\u9762\uff0c\u53ea\u9700\u8981\u4fdd\u8bc1\u63a7\u5236\u9762\u96c6\u7fa4\u7684 Kubernetes \u53ef\u88ab\u8fd0\u884c\u65f6\u96c6\u7fa4\u5355\u5411\u8bbf\u95ee\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u4e91\u8d44\u6e90\u662f\u7531\u7ba1\u63a7\u96c6\u7fa4\u7684\u63a7\u5236\u5668\u4e3b\u52a8\u8c03\u7528\u4e91\u7684 API \u5b8c\u6210\u3002"),(0,i.kt)("h3",{id:"\u6570\u636e\u9762"},"\u6570\u636e\u9762"),(0,i.kt)("p",null,"KubeVela \u7684\u7528\u6237\u6570\u636e\u9762\u6570\u636e\u6d41\u52a8\u91c7\u7528 Pull \u6a21\u5f0f\uff08\u8ba2\u9605\u6a21\u5f0f\uff09\uff0cKubeVela \u4f1a\u4e3b\u52a8\u76d1\u542c\u5e94\u7528\u5143\u6570\u636e\u53d8\u5316\u6765\u9a71\u52a8\u540e\u7eed\u7684\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u6d41\u7a0b\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4f20\u7edf\u7684 CI \u9a71\u52a8\u5e94\u7528\u4ea4\u4ed8\u6a21\u5f0f\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u9009\u62e9 Push \u6a21\u5f0f\u5c06\u5e94\u7528\u5236\u54c1\u4ece CI \u6d41\u7a0b\u6253\u5305\u751f\u6210\u540e\u76f4\u63a5\u901a\u8fc7 CI \u811a\u672c\u63a8\u7ed9 KubeVela\uff0cKubeVela \u8d1f\u8d23\u540e\u7eed\u7684\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u6d41\u7a0b\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48 KubeVela \u6570\u636e\u9762\u91c7\u7528 Pull \u6a21\u5f0f\uff1f")),(0,i.kt)("p",null,"\u5e94\u7528\u8d44\u6e90\u901a\u8fc7 Pull \u6a21\u5f0f\u4e0b\u53d1\u9010\u6e10\u6210\u4e3a\u4e86\u4e91\u539f\u751f\u793e\u533a\u7684\u4e3b\u6d41\u65b9\u5f0f\uff0c\u4e3b\u8981\u6709\u5982\u4e0b\u4f18\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f31\u7f51\u73af\u5883\u4e0b\u7684\u81ea\u6cbb\u80fd\u529b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pull \u6a21\u578b\u5728\u7ba1\u63a7\u6570\u636e\u4e0b\u53d1\u4ee5\u540e\uff0c\u80fd\u591f\u5f62\u6210\u5355\u4e2a\u96c6\u7fa4\uff08\u73af\u5883\uff09\u7684\u81ea\u6cbb\uff0c\u5728\u4e0e\u7ba1\u63a7\u96c6\u7fa4\u53d1\u751f\u7f51\u7edc\u8054\u901a\u6545\u969c\u65f6\u4f9d\u7136\u80fd\u591f\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u8fb9\u7f18\u573a\u666f\u4e0b\u662f\u521a\u9700\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c31\u8fd1\u62c9\u53d6\u6570\u636e\uff0c\u5177\u5907\u66f4\u597d\u7684\u6027\u80fd\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u505a\u5230\u73af\u5883\u72ec\u7acb\u7684\u9694\u79bb\u6027\u548c\u5b89\u5168\u6027",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ba1\u63a7\u96c6\u7fa4\u548c\u8fd0\u884c\u65f6\u96c6\u7fa4\u53ef\u4ee5\u505a\u5230\u6570\u636e\u9694\u79bb\u3002\u6bd4\u5982\u8fd0\u884c\u65f6\u96c6\u7fa4\u4f7f\u7528\u72ec\u7acb\u7684\u955c\u50cf\u4ed3\u5e93\u3001Helm \u4ed3\u5e93\u3001\u79d8\u94a5\u4ed3\u5e93\u7b49\uff0c\u5b9e\u9645\u7684\u79d8\u94a5\u6e32\u67d3\u5728\u5355\u96c6\u7fa4\u4e2d\u6267\u884c\u3002\u5728\u6df7\u5408\u4e91\u573a\u666f\u4e0b\u662f\u521a\u9700\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684scale\u80fd\u529b\uff0c\u652f\u6491\u66f4\u5927\u7684\u89c4\u6a21",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pull\u6a21\u5f0f\u4e0b\u53ea\u6709\u7ba1\u63a7\u6570\u636e\u9700\u8981\u7edf\u4e00\u4e0b\u53d1\uff0c\u6570\u636e\u9762\u4fe1\u606f\u53ef\u4ee5\u5206\u6563\u5728\u4e0d\u540c\u7684repo\u4e2d\uff0c\u51cf\u5c11\u4e86\u5927\u91cf\u5355\u70b9"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u9996\u6b21\u7ba1\u63a7\u6570\u636e\u4e0b\u53d1\u540e\uff0c\u540e\u7eed\u6301\u7eed\u7684\u53d1\u5e03\u53ef\u4ee5\u7531\u8fd0\u884c\u65f6\u96c6\u7fa4\u81ea\u52a8\u5316\u7684\u8fdb\u884c\u6301\u7eed\u4ea4\u4ed8\uff0c\u6ca1\u6709\u7ba1\u63a7\u96c6\u7fa4\u7684\u9650\u5236\uff0c\u53ef\u4ee5\u652f\u6491\u66f4\u5927\u7684\u89c4\u6a21"))),(0,i.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u5bb9\u707e\u80fd\u529b",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7ba1\u63a7\u9762\u7684\u6545\u969c\u4e0d\u5f71\u54cd\u8fd0\u884c\u65f6\u96c6\u7fa4\u7684\u6301\u7eed\u8fd0\u884c")))))}p.isMDXComponent=!0},40003:function(e,t,n){"use strict";t.Z=n.p+"assets/images/data-flow-8e36e7bb0dd4c1a6e7b2aa02c8143da4.png"},30966:function(e,t,n){"use strict";t.Z=n.p+"assets/images/system-arch-cefa8b54131b0e7bf9928382d9b097cd.png"}}]);