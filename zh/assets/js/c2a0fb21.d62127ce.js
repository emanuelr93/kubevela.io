(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3680],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(r),v=a,d=b["".concat(o,".").concat(v)]||b[v]||c[v]||l;return r?n.createElement(d,u(u({ref:t},p),{},{components:r})):n.createElement(d,u({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<l;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},68546:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return o},default:function(){return p}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),u={title:"KubeVela \u7b80\u4ecb",slug:"/"},i={unversionedId:"getting-started/introduction",id:"version-v1.1/getting-started/introduction",isDocsHomePage:!1,title:"KubeVela \u7b80\u4ecb",description:"\u80cc\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/",permalink:"/zh/docs/",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/getting-started/introduction.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"KubeVela \u7b80\u4ecb",slug:"/"},sidebar:"version-v1.1/docs",next:{title:"\u5feb\u901f\u5b89\u88c5",permalink:"/zh/docs/install"}},o=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"\u4ec0\u4e48\u662f KubeVela\uff1f",id:"\u4ec0\u4e48\u662f-kubevela\uff1f",children:[]},{value:"\u8c01\u5e94\u8be5\u4f7f\u7528 KubeVela\uff1f",id:"\u8c01\u5e94\u8be5\u4f7f\u7528-kubevela\uff1f",children:[]},{value:"\u4ea7\u54c1\u5f62\u6001\u5bf9\u6bd4",id:"\u4ea7\u54c1\u5f62\u6001\u5bf9\u6bd4",children:[{value:"KubeVela vs. \u5e73\u53f0\u5373\u670d\u52a1 (PaaS)",id:"kubevela-vs-\u5e73\u53f0\u5373\u670d\u52a1-paas",children:[]},{value:"KubeVela vs. Serverless",id:"kubevela-vs-serverless",children:[]},{value:"KubeVela vs. \u8de8\u5e73\u53f0\u5f00\u53d1\u8005\u5de5\u5177",id:"kubevela-vs-\u8de8\u5e73\u53f0\u5f00\u53d1\u8005\u5de5\u5177",children:[]},{value:"KubeVela vs. Helm",id:"kubevela-vs-helm",children:[]},{value:"KubeVela vs. Kubernetes",id:"kubevela-vs-kubernetes",children:[]}]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],s={toc:o};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u4e91\u539f\u751f\u6280\u672f\u7684\u53d1\u5c55\u8d8b\u52bf\u6b63\u5728\u671d\u7740\u5229\u7528 Kubernetes \u4f5c\u4e3a\u516c\u5171\u62bd\u8c61\u5c42\u6765\u5b9e\u73b0\u9ad8\u5ea6\u4e00\u81f4\u7684\u3001\u8de8\u4e91\u3001\u8de8\u73af\u5883\u7684\u7684\u5e94\u7528\u4ea4\u4ed8\u800c\u4e0d\u65ad\u8fc8\u8fdb\u3002\u7136\u800c\uff0c\u5c3d\u7ba1 Kubernetes \u5728\u5c4f\u853d\u5e95\u5c42\u57fa\u7840\u67b6\u6784\u7ec6\u8282\u65b9\u9762\u8868\u73b0\u51fa\u8272\uff0c\u5b83\u5e76\u6ca1\u6709\u5728\u6df7\u5408\u4e0e\u5206\u5e03\u5f0f\u7684\u90e8\u7f72\u73af\u5883\u4e4b\u4e0a\u5f15\u5165\u4e0a\u5c42\u62bd\u8c61\u6765\u4e3a\u8f6f\u4ef6\u4ea4\u4ed8\u8fdb\u884c\u5efa\u6a21\u3002\u6211\u4eec\u5df2\u7ecf\u770b\u5230\uff0c\u8fd9\u79cd\u7f3a\u4e4f\u7edf\u4e00\u4e0a\u5c42\u62bd\u8c61\u7684\u8f6f\u4ef6\u4ea4\u4ed8\u8fc7\u7a0b\uff0c\u4e0d\u4ec5\u7ed9\u964d\u4f4e\u4e86\u751f\u4ea7\u529b\u3001\u5f71\u54cd\u4e86\u7528\u6237\u4f53\u9a8c\uff0c\u751a\u81f3\u8fd8\u4f1a\u5bfc\u81f4\u751f\u4ea7\u4e2d\u51fa\u73b0\u9519\u8bef\u548c\u6545\u969c\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u4e3a\u73b0\u4ee3\u5fae\u670d\u52a1\u5e94\u7528\u7684\u4ea4\u4ed8\u8fc7\u7a0b\u8fdb\u884c\u5efa\u6a21\u662f\u4e00\u4e2a\u9ad8\u5ea6\u788e\u7247\u5316\u4e14\u5145\u6ee1\u6311\u6218\u7684\u4e8b\u60c5\u3002\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u7edd\u5927\u591a\u6570\u8bd5\u56fe\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u7684\u6280\u672f\u65b9\u6848\uff0c\u8981\u4e48\u8fc7\u4e8e\u7b80\u5316\u800c\u4e0d\u8db3\u4ee5\u89e3\u51b3\u5b9e\u9645\u95ee\u9898\uff0c\u8981\u4e48\u8fc7\u4e8e\u590d\u6742\u4ee5\u81f3\u4e8e\u51e0\u4e4e\u65e0\u6cd5\u843d\u5730\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u4eca\u5929\u7684\u5f88\u591a\u5e94\u7528\u7ba1\u7406\u5e73\u53f0\u4e3b\u8981\u4e13\u6ce8\u5728 UI \u548c\u96c6\u6210\u4e0a\u5de5\u4f5c\uff0c\u5e73\u53f0\u672c\u8eab\u7684\u80fd\u529b\u5176\u5b9e\u5f88\u6709\u9650\u4e14\u96be\u4ee5\u6269\u5c55\uff0c\u8fd9\u610f\u5473\u7740\u968f\u7740\u5e94\u7528\u4ea4\u4ed8\u9700\u6c42\u7684\u589e\u957f\uff0c\u7528\u6237\u8bc9\u6c42\u8d85\u51fa\u6b64\u7c7b\u7cfb\u7edf\u7684\u80fd\u529b\u8fb9\u754c\u53ea\u662f\u4e00\u4e2a\u65f6\u95f4\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u4eca\u5929\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u5e94\u7528\u7814\u53d1\u56e2\u961f\u671f\u76fc\u7740\u8fd9\u6837\u4e00\u4e2a\u5e73\u53f0\uff1a\u5b83\u65e2\u80fd\u591f\u7b80\u5316\u9762\u5411\u6df7\u5408\u73af\u5883\uff08\u591a\u96c6\u7fa4/\u591a\u4e91/\u6df7\u5408\u4e91/\u5206\u5e03\u5f0f\u4e91\uff09\u7684\u5e94\u7528\u4ea4\u4ed8\u8fc7\u7a0b\uff1b\u540c\u65f6\u53c8\u8db3\u591f\u7075\u6d3b\u53ef\u4ee5\u968f\u65f6\u6ee1\u8db3\u4e1a\u52a1\u4e0d\u65ad\u9ad8\u901f\u53d8\u5316\u6240\u5e26\u6765\u7684\u8fed\u4ee3\u538b\u529b\u3002\u7136\u800c\uff0c\u5c3d\u7ba1\u5e73\u53f0\u56e2\u961f\u5f88\u5e0c\u671b\u80fd\u5e2e\u4e0a\u5fd9\uff0c\u4f46\u6784\u5efa\u8fd9\u6837\u4e00\u4e2a\u9762\u5411\u6df7\u5408\u4ea4\u4ed8\u73af\u5883\u540c\u65f6\u53c8\u9ad8\u53ef\u6269\u5c55\u7684\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\uff0c\u7740\u5b9e\u662f\u4e00\u9879\u4ee4\u4eba\u751f\u754f\u7684\u4efb\u52a1\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-kubevela\uff1f"},"\u4ec0\u4e48\u662f KubeVela\uff1f"),(0,l.kt)("p",null,"KubeVela \u662f\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u3001\u73b0\u4ee3\u5316\u7684\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u5e73\u53f0\u3002KubeVela \u901a\u8fc7\u4ee5\u4e0b\u8bbe\u8ba1\uff0c\u4f7f\u5f97\u9762\u5411\u6df7\u5408/\u591a\u4e91\u73af\u5883\u7684\u5e94\u7528\u4ea4\u4ed8\u53d8\u5f97\u975e\u5e38\u7b80\u5355\u9ad8\u6548\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5b8c\u5168\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3")," - KubeVela \u521b\u65b0\u6027\u7684\u63d0\u51fa\u4e86",(0,l.kt)("a",{parentName:"li",href:"https://oam.dev/"},"\u5f00\u653e\u5e94\u7528\u6a21\u578b\uff08OAM\uff09"),"\u6765\u4f5c\u4e3a\u5e94\u7528\u4ea4\u4ed8\u7684\u9876\u5c42\u62bd\u8c61\uff0c\u5e76\u901a\u8fc7\u58f0\u660e\u5f0f\u7684\u4ea4\u4ed8\u5de5\u4f5c\u6d41\u6765\u6355\u83b7\u9762\u5411\u6df7\u5408\u73af\u5883\u7684\u5fae\u670d\u52a1\u5e94\u7528\u4ea4\u4ed8\u7684\u6574\u4e2a\u8fc7\u7a0b\uff0c\u751a\u81f3\u8fde\u591a\u96c6\u7fa4\u5206\u53d1\u7b56\u7565\u3001\u6d41\u91cf\u8c03\u914d\u548c\u6eda\u52a8\u66f4\u65b0\u7b49\u8fd0\u7ef4\u7279\u5f81\uff0c\u4e5f\u90fd\u58f0\u660e\u5728\u5e94\u7528\u7ea7\u522b\u3002\u7528\u6237\u65e0\u9700\u5173\u5fc3\u4efb\u4f55\u57fa\u7840\u8bbe\u65bd\u7ec6\u8282\uff0c\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u5b9a\u4e49\u548c\u90e8\u7f72\u5e94\u7528\u5373\u53ef\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u7f16\u7a0b\u5f0f\u4ea4\u4ed8\u5de5\u4f5c\u6d41")," - KubeVela \u7684\u4ea4\u4ed8\u6a21\u578b\u662f\u5229\u7528 ",(0,l.kt)("a",{parentName:"li",href:"https://cuelang.org/"},"CUE")," \u6765\u5b9e\u73b0\u7684\u3002CUE \u662f\u4e00\u79cd\u8bde\u751f\u81ea Google Borg \u7cfb\u7edf\u7684\u6570\u636e\u914d\u7f6e\u8bed\u8a00\uff0c\u5b83\u53ef\u4ee5\u5c06\u5e94\u7528\u4ea4\u4ed8\u7684\u6240\u6709\u6b65\u9aa4\u3001\u6240\u9700\u8d44\u6e90\u3001\u5173\u8054\u7684\u8fd0\u7ef4\u52a8\u4f5c\u4ee5\u53ef\u7f16\u7a0b\u7684\u65b9\u5f0f\u7c98\u5408\u6210\u4e00\u4e2a DAG\uff08\u6709\u5411\u65e0\u73af\u56fe\uff09\u6765\u4f5c\u4e3a\u6700\u7ec8\u7684\u58f0\u660e\u5f0f\u4ea4\u4ed8\u8ba1\u5212\u3002\u76f8\u6bd4\u4e8e\u5176\u4ed6\u7cfb\u7edf\u7684\u590d\u6742\u6027\u548c\u4e0d\u53ef\u6269\u5c55\u6027\uff0cKubeVela \u57fa\u4e8e CUE \u7684\u5b9e\u73b0\u4e0d\u4ec5\u4f7f\u7528\u7b80\u5355\u3001\u6269\u5c55\u6027\u6781\u5f3a\uff0c\u4e5f\u66f4\u7b26\u5408\u73b0\u4ee3 GitOps \u5e94\u7528\u4ea4\u4ed8\u7684\u8d8b\u52bf\u4e0e\u8981\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u8fd0\u884c\u65f6\u65e0\u5173")," - KubeVela \u662f\u4e00\u4e2a\u5b8c\u5168\u4e0e\u8fd0\u884c\u65f6\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u63a7\u5236\u5e73\u9762\u3002\u6240\u4ee5\u5b83\u53ef\u4ee5\u6309\u7167\u4f60\u5b9a\u4e49\u7684\u5de5\u4f5c\u6d41\u4e0e\u7b56\u7565\uff0c\u9762\u5411\u4efb\u4f55\u73af\u5883\u4ea4\u4ed8\u548c\u7ba1\u7406\u4efb\u4f55\u5e94\u7528\u7ec4\u4ef6\uff0c\u6bd4\u5982\uff1a\u5bb9\u5668\u3001\u4e91\u51fd\u6570\u3001\u6570\u636e\u5e93\uff0c\u751a\u81f3 AWS EC2 \u5b9e\u4f8b\u7b49\u7b49\u3002")),(0,l.kt)("h2",{id:"\u8c01\u5e94\u8be5\u4f7f\u7528-kubevela\uff1f"},"\u8c01\u5e94\u8be5\u4f7f\u7528 KubeVela\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u5e94\u7528\u7814\u53d1\u3001\u8fd0\u7ef4\u4eba\u5458\u3001DevOps \u5de5\u7a0b\u5e08\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KubeVela \u662f\u4e00\u4e2a\u73b0\u4ee3\u5316\u7684\u6301\u7eed\u4ea4\u4ed8\uff08CD\uff09\u5e73\u53f0\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u4e91\u539f\u751f\u5e94\u7528\u5e73\u53f0\u7684\u6784\u5efa\u8005\u3001PaaS\u3001Serverless \u5e73\u53f0\u5de5\u7a0b\u5e08\u3001\u57fa\u7840\u8bbe\u65bd\u5e73\u53f0\u7ba1\u7406\u5458\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KubeVela \u662f\u4e00\u4e2a\u666e\u9002\u7684\u3001\u9ad8\u53ef\u6269\u5c55\u7684\u5e94\u7528\u4ea4\u4ed8\u5f15\u64ce\u4e0e\u5185\u6838\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u4f9b\u5e94\u5546\uff08ISV\uff09\u3001\u5782\u76f4\u9886\u57df\u8f6f\u4ef6\u5f00\u53d1\u8005\u3001\u67b6\u6784\u5e08\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KubeVela \u662f\u4e00\u4e2a Kubernetes \u548c\u4e91\u5e73\u53f0\u4e4b\u4e0a\u7684\u5e94\u7528\u5546\u5e97\uff08App Store\uff09\u3002")))),(0,l.kt)("h2",{id:"\u4ea7\u54c1\u5f62\u6001\u5bf9\u6bd4"},"\u4ea7\u54c1\u5f62\u6001\u5bf9\u6bd4"),(0,l.kt)("h3",{id:"kubevela-vs-\u5e73\u53f0\u5373\u670d\u52a1-paas"},"KubeVela vs. \u5e73\u53f0\u5373\u670d\u52a1 (PaaS)"),(0,l.kt)("p",null,"\u5178\u578b\u7684\u4f8b\u5b50\u662f Heroku \u548c Cloud Foundry\u3002 \u5b83\u4eec\u63d0\u4f9b\u5b8c\u6574\u7684\u5e94\u7528\u7a0b\u5e8f\u90e8\u7f72\u548c\u7ba1\u7406\u529f\u80fd\uff0c\u65e8\u5728\u63d0\u9ad8\u5f00\u53d1\u4eba\u5458\u7684\u4f53\u9a8c\u548c\u6548\u7387\u3002\u5728\u8fd9\u4e2a\u60c5\u51b5\u4e0b\uff0cKubeVela \u4e5f\u6709\u7740\u76f8\u540c\u7684\u76ee\u6807\u3002"),(0,l.kt)("p",null,"\u4e0d\u8fc7\uff0cKubeVela \u548c\u5b83\u4eec\u6700\u5927\u7684\u533a\u522b\u5728\u4e8e\u5176",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u6269\u5c55\u6027"),"\u3002"),(0,l.kt)("p",null,"KubeVela \u5bf9\u5f85\u4ea4\u4ed8\u5e94\u7528\u6ca1\u6709\u4efb\u4f55\u9650\u5236\uff0c\u5b83\u7684\u6574\u4e2a\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u80fd\u529b\u96c6\u4e5f\u662f\u7531\u72ec\u7acb\u7684\u53ef\u63d2\u62d4\u6a21\u5757\uff08CUE \u6a21\u5757\uff09\u6784\u6210\u7684\uff0c\u8fd9\u4e9b\u6a21\u5757\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7\u7f16\u5199 CUE \u6a21\u677f\u7684\u65b9\u5f0f\u8fdb\u884c\u589e\u52a0\u6216\u8005\u5b9a\u5236\u3002\u4e0e\u8fd9\u79cd\u673a\u5236\u76f8\u6bd4\uff0c\u4f20\u7edf\u7684 PaaS \u7cfb\u7edf\u7684\u9650\u5236\u975e\u5e38\u591a\uff1a\u5b83\u4eec\u9700\u8981\u5bf9\u5e94\u7528\u7c7b\u578b\u548c\u63d0\u4f9b\u7684\u80fd\u529b\u8fdb\u884c\u5404\u79cd\u7ea6\u675f\u6765\u5b9e\u73b0\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u4f46\u968f\u7740\u5e94\u7528\u4ea4\u4ed8\u9700\u6c42\u7684\u589e\u957f\uff0c\u7528\u6237\u7684\u8bc9\u6c42\u5c31\u4e00\u5b9a\u4f1a\u8d85\u51fa PaaS \u7cfb\u7edf\u7684\u80fd\u529b\u8fb9\u754c\u3002\u8fd9\u79cd\u60c5\u51b5\u5728 KubeVela \u5e73\u53f0\u4e2d\u5219\u6c38\u8fdc\u4e0d\u4f1a\u53d1\u751f\u3002"),(0,l.kt)("h3",{id:"kubevela-vs-serverless"},"KubeVela vs. Serverless"),(0,l.kt)("p",null,"AWS Lambda \u7b49 Serverless \u5e73\u53f0\u53ef\u4ee5\u4e3a Serverless \u5e94\u7528\u7ba1\u7406\u63d0\u4f9b\u6781\u4f73\u7684\u7528\u6237\u4f53\u9a8c\u548c\u654f\u6377\u6027\u3002\u7136\u800c\uff0c\u8fd9\u4e9b\u5e73\u53f0\u672c\u8d28\u4e0a\u4e5f\u5e26\u6765\u4e86\u66f4\u591a\u9650\u5236\uff0c\u5b83\u4eec\u53ef\u4ee5\u8bf4\u662f PaaS \u7684\u4e00\u7c7b\u6781\u7aef\u60c5\u51b5\uff0c\u540c KubeVela \u7684\u533a\u522b\u4e5f\u662f\u7c7b\u4f3c\u3002"),(0,l.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0cKubeVela \u53ef\u4ee5\u8f7b\u677e\u90e8\u7f72\u4efb\u4f55\u51fd\u6570\u7c7b\u578b\u7684\u7ec4\u4ef6\uff0c\u5305\u62ec\u57fa\u4e8e Kubernetes \u7684 Serverless \u5de5\u4f5c\u8d1f\u8f7d\uff08\u4f8b\u5982 KNative/OpenFaaS \u51fd\u6570\uff09\u6216\u4e91\u51fd\u6570\uff08\u4f8b\u5982 AWS Lambda\uff09\u3002"),(0,l.kt)("h3",{id:"kubevela-vs-\u8de8\u5e73\u53f0\u5f00\u53d1\u8005\u5de5\u5177"},"KubeVela vs. \u8de8\u5e73\u53f0\u5f00\u53d1\u8005\u5de5\u5177"),(0,l.kt)("p",null,"\u5178\u578b\u7684\u4f8b\u5b50\u662f Hashicorp \u7684 Waypoint\u3002 Waypoint \u662f\u4e00\u4e2a\u9762\u5411\u5f00\u53d1\u8005\u7684\u5e94\u7528\u90e8\u7f72\u5de5\u5177\uff0c\u5b83\u5f15\u5165\u4e86\u4e00\u4e2a\u4e00\u81f4\u7684\u5de5\u4f5c\u6d41\uff08\u5373\u6784\u5efa\u3001\u90e8\u7f72\u3001\u53d1\u5e03\uff09\u6765\u6a21\u62df\u5728\u4e0d\u540c\u5e73\u53f0\u4e0a\u4ea4\u4ed8\u5e94\u7528\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"KubeVela \u53ef\u4ee5\u4e0e\u6b64\u7c7b\u5de5\u5177\u65e0\u7f1d\u96c6\u6210\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u5c06\u4f7f\u7528 Waypoint \u5de5\u4f5c\u6d41\u4f5c\u4e3a\u5e73\u53f0\u7684 UI\uff0c\u7136\u540e\u901a\u8fc7 KubeVela \u6765\u5b8c\u6210\u8de8\u6df7\u5408\u73af\u5883\u7684\u5e94\u7528\u90e8\u7f72\u3001\u7ba1\u7406\u548c\u53d1\u5e03\u3002"),(0,l.kt)("h3",{id:"kubevela-vs-helm"},"KubeVela vs. Helm"),(0,l.kt)("p",null,"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5668\uff0c\u5b83\u80fd\u591f\u4ee5 Chart \u4e3a\u4e00\u4e2a\u5355\u5143\uff0c\u63d0\u4f9b\u6253\u5305\u3001\u5b89\u88c5\u548c\u5347\u7ea7\u7684\u4e00\u7ec4 YAML \u6587\u4ef6\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,"KubeVela \u4f5c\u4e3a\u4e00\u4e2a\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\u5929\u7136\u53ef\u4ee5\u90e8\u7f72\u5404\u79cd\u5236\u54c1\u7c7b\u578b\uff0c\u5f53\u7136\u4e5f\u5305\u62ec Helm Chart\u3002 \u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 KubeVela \u5b9a\u4e49\u4e00\u4e2a\u7531 WordPress Chart \u548c AWS RDS \u5b9e\u4f8b\u7ec4\u6210\u7684\u5e94\u7528\uff0c\u7f16\u6392\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u987a\u5e8f\u5173\u7cfb\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u6309\u7167\u4e00\u5b9a\u7684\u7b56\u7565\u5206\u53d1\u5230\u591a\u4e2a Kubernetes \u96c6\u7fa4\u5f53\u4e2d\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0cKubeVela \u8fd8\u652f\u6301\u5176\u4ed6\u5236\u54c1\u683c\u5f0f\u6bd4\u5982 Kustomize\u3002"),(0,l.kt)("h3",{id:"kubevela-vs-kubernetes"},"KubeVela vs. Kubernetes"),(0,l.kt)("p",null,"KubeVela \u662f\u4e00\u4e2a\u57fa\u4e8e\u4e91\u539f\u751f\u6280\u672f\u6808\u6784\u5efa\u7684\u73b0\u4ee3\u5e94\u7528\u4ea4\u4ed8\u7cfb\u7edf\u3002\u5b83\u5229\u7528\u4e86\u5f00\u653e\u5e94\u7528\u7a0b\u5e8f\u6a21\u578b\uff08Open Application Model\uff09\u548c Kubernetes \u6765\u89e3\u51b3\u4e00\u4e2a\u65f7\u65e5\u5df2\u4e45\u7684\u96be\u9898\u2014\u2014\u5982\u4f55\u8ba9\u5e94\u7528\u4ea4\u4ed8\u53d8\u5f97\u66f4\u52a0\u8f7b\u677e\u6109\u5feb\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u63a8\u8350\u4f60\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb",(0,l.kt)("a",{parentName:"li",href:"./install"},"\u5b89\u88c5\u4f7f\u7528 KubeVela")),(0,l.kt)("li",{parentName:"ul"},"\u4e86\u89e3",(0,l.kt)("a",{parentName:"li",href:"core-concepts/architecture"},"\u7cfb\u7edf\u67b6\u6784"),"\u548c",(0,l.kt)("a",{parentName:"li",href:"core-concepts/application"},"\u6838\u5fc3\u6982\u5ff5"))))}p.isMDXComponent=!0}}]);