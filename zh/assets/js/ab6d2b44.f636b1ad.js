(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5764],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16892:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l={title:"\u57fa\u4e8e\u5de5\u4f5c\u6d41\u7684 GitOps"},p={unversionedId:"case-studies/gitops",id:"version-v1.1/case-studies/gitops",isDocsHomePage:!1,title:"\u57fa\u4e8e\u5de5\u4f5c\u6d41\u7684 GitOps",description:"\u672c\u6848\u4f8b\u8bb2\u4ecb\u7ecd\u5982\u4f55\u5728 GitOps \u573a\u666f\u4e0b\u4f7f\u7528 KubeVela\uff0c \u5e76\u4ecb\u7ecd\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u4ec0\u4e48\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/case-studies/gitops.md",sourceDirName:"case-studies",slug:"/case-studies/gitops",permalink:"/zh/docs/case-studies/gitops",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/case-studies/gitops.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"\u57fa\u4e8e\u5de5\u4f5c\u6d41\u7684 GitOps"},sidebar:"version-v1.1/docs",previous:{title:"Jenkins CI/CD",permalink:"/zh/docs/case-studies/jenkins-cicd"},next:{title:"\u57fa\u4e8e Istio \u7684\u6e10\u8fdb\u5f0f\u53d1\u5e03",permalink:"/zh/docs/case-studies/canary-blue-green"}},o=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93",id:"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93",children:[]},{value:"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f",id:"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f",children:[]},{value:"\u7f16\u5199\u81ea\u52a8\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u5199\u81ea\u52a8\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u4fee\u6539\u4ee3\u7801",id:"\u4fee\u6539\u4ee3\u7801",children:[]}],s={toc:o};function u(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6848\u4f8b\u8bb2\u4ecb\u7ecd\u5982\u4f55\u5728 GitOps \u573a\u666f\u4e0b\u4f7f\u7528 KubeVela\uff0c \u5e76\u4ecb\u7ecd\u8fd9\u6837\u505a\u7684\u597d\u5904\u662f\u4ec0\u4e48\u3002"),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"GitOps \u662f\u4e00\u79cd\u73b0\u4ee3\u5316\u7684\u6301\u7eed\u4ea4\u4ed8\u624b\u6bb5\uff0c\u5b83\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u901a\u8fc7\u76f4\u63a5\u66f4\u6539 Git \u4ed3\u5e93\u4e2d\u7684\u4ee3\u7801\u548c\u914d\u7f6e\u6765\u81ea\u52a8\u90e8\u7f72\u5e94\u7528\uff0c\u5728\u63d0\u9ad8\u90e8\u7f72\u751f\u4ea7\u529b\u7684\u540c\u65f6\u4e5f\u901a\u8fc7\u5206\u652f\u56de\u6eda\u7b49\u80fd\u529b\u63d0\u9ad8\u4e86\u53ef\u9760\u6027\u3002\u5176\u5177\u4f53\u7684\u597d\u5904\u53ef\u4ee5\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"https://www.weave.works/blog/what-is-gitops-really"},"\u8fd9\u7bc7\u6587\u7ae0"),"\uff0c\u672c\u6587\u5c06\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,i.kt)("p",null,"KubeVela \u4f5c\u4e3a\u4e00\u4e2a\u58f0\u660e\u5f0f\u7684\u5e94\u7528\u4ea4\u4ed8\u63a7\u5236\u5e73\u9762\uff0c\u5929\u7136\u5c31\u53ef\u4ee5\u4ee5 GitOps \u7684\u65b9\u5f0f\u8fdb\u884c\u4f7f\u7528\uff0c\u5e76\u4e14\u8fd9\u6837\u505a\u4f1a\u5728 GitOps \u7684\u57fa\u7840\u4e0a\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u591a\u7684\u76ca\u5904\u548c\u7aef\u5230\u7aef\u7684\u4f53\u9a8c\uff0c\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4ea4\u4ed8\u5de5\u4f5c\u6d41\uff08CD \u6d41\u6c34\u7ebf\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5373\uff1aKubeVela \u652f\u6301\u5728 GitOps \u6a21\u5f0f\u4e2d\u63cf\u8ff0\u8fc7\u7a0b\u5f0f\u7684\u5e94\u7528\u4ea4\u4ed8\uff0c\u800c\u4e0d\u53ea\u662f\u7b80\u5355\u7684\u58f0\u660e\u7ec8\u6001\uff1b"))),(0,i.kt)("li",{parentName:"ul"},"\u5904\u7406\u90e8\u7f72\u8fc7\u7a0b\u4e2d\u7684\u5404\u79cd\u4f9d\u8d56\u5173\u7cfb\u548c\u62d3\u6251\u7ed3\u6784\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u73b0\u6709\u5404\u79cd GitOps \u5de5\u5177\u7684\u8bed\u4e49\u4e4b\u4e0a\u63d0\u4f9b\u7edf\u4e00\u7684\u4e0a\u5c42\u62bd\u8c61\uff0c\u7b80\u5316\u5e94\u7528\u4ea4\u4ed8\u4e0e\u7ba1\u7406\u8fc7\u7a0b\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8fdb\u884c\u4e91\u670d\u52a1\u7684\u58f0\u660e\u3001\u90e8\u7f72\u548c\u670d\u52a1\u7ed1\u5b9a\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u4ea4\u4ed8\u7b56\u7565\uff08\u91d1\u4e1d\u96c0\u3001\u84dd\u7eff\u53d1\u5e03\u7b49\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u6df7\u5408\u4e91/\u591a\u4e91\u90e8\u7f72\u7b56\u7565\uff08\u653e\u7f6e\u89c4\u5219\u3001\u96c6\u7fa4\u8fc7\u6ee4\u89c4\u5219\u7b49\uff09\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u591a\u73af\u5883\u4ea4\u4ed8\u4e2d\u63d0\u4f9b Kustomize \u98ce\u683c\u7684 Patch \u6765\u63cf\u8ff0\u90e8\u7f72\u5dee\u5f02\uff0c\u800c\u65e0\u9700\u5b66\u4e60\u4efb\u4f55 Kustomize \u672c\u8eab\u7684\u7ec6\u8282\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u2026\u2026 \u4ee5\u53ca\u66f4\u591a\u3002")),(0,i.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u8bb2\u89e3\u76f4\u63a5\u4f7f\u7528 KubeVela \u5728 GitOps \u6a21\u5f0f\u4e0b\u8fdb\u884c\u4ea4\u4ed8\u7684\u6b65\u9aa4\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7c7b\u4f3c\u7684\u6b65\u9aa4\u4f7f\u7528 ArgoCD \u7b49 GitOps \u5de5\u5177\u6765\u95f4\u63a5\u4f7f\u7528 KubeVela\uff0c\u7ec6\u8282\u7684\u64cd\u4f5c\u6587\u6863\u6211\u4eec\u4f1a\u5728\u540e\u7eed\u53d1\u5e03\u4e2d\u63d0\u4f9b\u3002")),(0,i.kt)("h2",{id:"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93"},"\u51c6\u5907\u4ee3\u7801\u4ed3\u5e93"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u51c6\u5907\u4e00\u4e2a Git \u4ed3\u5e93\uff0c\u91cc\u9762\u542b\u6709\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u914d\u7f6e\u6587\u4ef6\uff0c\u4e00\u4e9b\u6e90\u4ee3\u7801\u4ee5\u53ca\u5bf9\u5e94\u7684 Dockerfile\u3002"),(0,i.kt)("p",null,"\u4ee3\u7801\u7684\u5b9e\u73b0\u903b\u8f91\u975e\u5e38\u7b80\u5355\uff0c\u4f1a\u542f\u52a8\u4e00\u4e2a\u670d\u52a1\uff0c\u5e76\u663e\u793a\u5bf9\u5e94\u7684 Version \u7248\u672c\u3002\u800c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u5f53\u4e2d\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"webservice")," \u7c7b\u578b\u7684\u7ec4\u4ef6\u542f\u52a8\u8be5\u670d\u52a1\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress")," \u7684\u8fd0\u7ef4\u7279\u5f81\u4ee5\u65b9\u4fbf\u8bbf\u95ee\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n    - name: test-server\n      type: webservice\n      properties:\n        # \u5728\u521b\u5efa\u5b8c\u81ea\u52a8\u90e8\u7f72\u6587\u4ef6\u540e\uff0c\u5c06 `default:gitops` \u66ff\u6362\u4e3a\u5176 namespace \u548c name\n        image: <your image> # {"$imagepolicy": "default:gitops"}\n        port: 8088\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              /: 8088\n')),(0,i.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u7528\u6237\u6539\u52a8\u4ee3\u7801\u8fdb\u884c\u63d0\u4ea4\u540e\uff0c\u81ea\u52a8\u6784\u5efa\u51fa\u955c\u50cf\u5e76\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u3002\u8fd9\u4e00\u6b65 CI \u53ef\u4ee5\u901a\u8fc7\u96c6\u6210 GitHub Actions\u3001Jenkins \u6216\u8005\u5176\u4ed6 CI \u5de5\u5177\u6765\u5b9e\u73b0\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u501f\u52a9 GitHub Actions \u6765\u5b8c\u6210\u6301\u7eed\u96c6\u6210\u3002\u5177\u4f53\u7684\u4ee3\u7801\u6587\u4ef6\u53ca\u914d\u7f6e\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo"},"\u793a\u4f8b\u4ed3\u5e93"),"\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f"},"\u914d\u7f6e\u79d8\u94a5\u4fe1\u606f"),(0,i.kt)("p",null,"\u5728\u65b0\u7684\u955c\u50cf\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u540e\uff0cKubeVela \u4f1a\u8bc6\u522b\u5230\u65b0\u7684\u955c\u50cf\uff0c\u5e76\u66f4\u65b0\u4ed3\u5e93\u53ca\u96c6\u7fa4\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u914d\u7f6e\u6587\u4ef6\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u542b\u6709 Git \u4fe1\u606f\u7684 Secret\uff0c\u4f7f KubeVela \u5411 Git \u4ed3\u5e93\u8fdb\u884c\u63d0\u4ea4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: my-secret\ntype: kubernetes.io/basic-auth\nstringData:\n  username: <your username>\n  password: <your password>\n")),(0,i.kt)("h2",{id:"\u7f16\u5199\u81ea\u52a8\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u5199\u81ea\u52a8\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u5b8c\u6210\u4e86\u4e0a\u8ff0\u57fa\u7840\u914d\u7f6e\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u672c\u5730\u65b0\u5efa\u4e00\u4e2a\u81ea\u52a8\u90e8\u7f72\u914d\u7f6e\u6587\u4ef6\uff0c\u5173\u8054\u5bf9\u5e94\u7684 Git \u4ed3\u5e93\u4ee5\u53ca\u955c\u50cf\u4ed3\u5e93\u4fe1\u606f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: git-app\nspec:\n  components:\n  - name: gitops\n    type: kustomize\n    properties:\n      repoType: git\n      # \u5c06\u6b64\u5904\u66ff\u6362\u6210\u4f60\u7684 git \u4ed3\u5e93\u5730\u5740\n      url: <your github repo address>\n      # \u5173\u8054 git secret\n      secretRef: my-secret\n      # \u81ea\u52a8\u62c9\u53d6\u914d\u7f6e\u7684\u65f6\u95f4\u95f4\u9694\n      pullInterval: 1m\n      git:\n        # \u6307\u5b9a\u76d1\u542c\u7684 branch\n        branch: master\n      # \u6307\u5b9a\u76d1\u542c\u7684\u8def\u5f84\n      path: .\n      imageRepository:\n        # \u955c\u50cf\u5730\u5740\n        image: <your image>\n        # \u5982\u679c\u8fd9\u662f\u4e00\u4e2a\u79c1\u6709\u7684\u955c\u50cf\u4ed3\u5e93\uff0c\u53ef\u4ee5\u901a\u8fc7 `kubectl create secret docker-registry` \u521b\u5efa\u5bf9\u5e94\u7684\u955c\u50cf\u79d8\u94a5\u5e76\u76f8\u5173\u8054\n        # secretRef: imagesecret\n        filterTags:\n          # \u53ef\u5bf9\u955c\u50cf tag \u8fdb\u884c\u8fc7\u6ee4\n          pattern: '^master-[a-f0-9]+-(?P<ts>[0-9]+)'\n          extract: '$ts'\n        # \u901a\u8fc7 policy \u7b5b\u9009\u51fa\u6700\u65b0\u7684\u955c\u50cf Tag \u5e76\u7528\u4e8e\u66f4\u65b0\n        policy:\n          numerical:\n            order: asc\n        # \u8ffd\u52a0\u63d0\u4ea4\u4fe1\u606f\n        commitMessage: \"Image: {{range .Updated.Images}}{{println .}}{{end}}\"\n")),(0,i.kt)("p",null,"\u5c06\u4e0a\u8ff0\u6587\u4ef6\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\u540e\uff0c\u67e5\u770b\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5e94\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"git-app")," \u81ea\u52a8\u62c9\u53d6\u4e86 Git \u4ed3\u5e93\u4e2d\u7684\u5e94\u7528\u914d\u7f6e\u5e76\u90e8\u7f72\u5230\u4e86\u96c6\u7fa4\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\n\nAPP                 COMPONENT       TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\nfirst-vela-workflow test-server     webservice  ingress running healthy         2021-09-10 11:23:34 +0800 CST\ngit-app             gitops          kustomize           running healthy         2021-09-10 11:23:32 +0800 CST\n")),(0,i.kt)("p",null,"\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," \u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress"),"\uff0c\u53ef\u4ee5\u770b\u5230\u76ee\u524d\u7684\u7248\u672c\u662f 0.1.5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -H "Host:testsvc.example.com" http://<your-ip>\nVersion: 0.1.5\n')),(0,i.kt)("h2",{id:"\u4fee\u6539\u4ee3\u7801"},"\u4fee\u6539\u4ee3\u7801"),(0,i.kt)("p",null,"\u5b8c\u6210\u9996\u6b21\u90e8\u7f72\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539 Git \u4ed3\u5e93\u4e2d\u7684\u4ee3\u7801\uff0c\u6765\u5b8c\u6210\u81ea\u52a8\u90e8\u7f72\u3002"),(0,i.kt)("p",null,"\u5c06\u4ee3\u7801\u6587\u4ef6\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Version")," \u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1.6"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'const VERSION = "0.1.6"\n\nfunc main() {\n    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n        _, _ = fmt.Fprintf(w, "Version: %s\\n", VERSION)\n    })\n    if err := http.ListenAndServe(":8088", nil); err != nil {\n        println(err.Error())\n    }\n}\n')),(0,i.kt)("p",null,"\u63d0\u4ea4\u8be5\u6539\u52a8\u81f3\u4ee3\u7801\u4ed3\u5e93\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u914d\u7f6e\u7684 CI \u6d41\u6c34\u7ebf\u5f00\u59cb\u6784\u5efa\u955c\u50cf\u5e76\u63a8\u9001\u81f3\u955c\u50cf\u4ed3\u5e93\u3002"),(0,i.kt)("p",null,"\u800c KubeVela \u4f1a\u901a\u8fc7\u76d1\u542c\u955c\u50cf\u4ed3\u5e93\uff0c\u6839\u636e\u6700\u65b0\u7684\u955c\u50cf Tag \u6765\u66f4\u65b0\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"\u3002\u6b64\u65f6\uff0c\u53ef\u4ee5\u770b\u5230\u4ee3\u7801\u4ed3\u5e93\u4e2d\u6709\u4e00\u6761\u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"kubevelabot")," \u7684\u63d0\u4ea4\uff0c\u63d0\u4ea4\u4fe1\u606f\u5747\u5e26\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"Update image automatically.")," \u524d\u7f00\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"{{range .Updated.Images}}{{println .}}{{end}}")," \u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"commitMessage")," \u5b57\u6bb5\u4e2d\u8ffd\u52a0\u4f60\u6240\u9700\u8981\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:n(59837).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"kubevelabot")," \u7684\u63d0\u4ea4\u4e0d\u4f1a\u518d\u6b21\u89e6\u53d1\u6d41\u6c34\u7ebf\u5bfc\u81f4\u91cd\u590d\u6784\u5efa\uff0c\u56e0\u4e3a\u6211\u4eec\u5728 CI \u914d\u7f6e\u7684\u65f6\u5019\uff0c\u5c06\u6765\u81ea KubeVela \u7684\u63d0\u4ea4\u8fc7\u6ee4\u6389\u4e86\u3002"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"jobs:\n publish:\n   if: \"!contains(github.event.head_commit.message, 'Update image automatically')\"\n"))),(0,i.kt)("p",null,"\u91cd\u65b0\u67e5\u770b\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\uff0c\u53ef\u4ee5\u770b\u5230\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u540e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u7684\u955c\u50cf\u5df2\u7ecf\u88ab\u66f4\u65b0\u3002\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," \u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress")," \u67e5\u770b\u5f53\u524d\u7248\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -H "Host:testsvc.example.com" http://<your-ip>\nVersion: 0.1.6\n')),(0,i.kt)("p",null,"\u7248\u672c\u5df2\u88ab\u6210\u529f\u66f4\u65b0\uff01\u81f3\u6b64\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u4ece\u53d8\u66f4\u4ee3\u7801\uff0c\u5230\u81ea\u52a8\u90e8\u7f72\u81f3\u96c6\u7fa4\u7684\u5168\u90e8\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,"KubeVela \u4f1a\u901a\u8fc7\u4f60\u914d\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"interval")," \u65f6\u95f4\u95f4\u9694\uff0c\u6765\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u5206\u522b\u4ece\u4ee3\u7801\u4ed3\u5e93\u53ca\u955c\u50cf\u4ed3\u5e93\u4e2d\u83b7\u53d6\u6700\u65b0\u4fe1\u606f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53 Git \u4ed3\u5e93\u4e2d\u7684\u914d\u7f6e\u6587\u4ef6\u88ab\u66f4\u65b0\u65f6\uff0cKubeVela \u5c06\u6839\u636e\u6700\u65b0\u7684\u914d\u7f6e\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u5e94\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u955c\u50cf\u4ed3\u5e93\u4e2d\u591a\u4e86\u65b0\u7684 Tag \u65f6\uff0cKubeVela \u5c06\u6839\u636e\u4f60\u914d\u7f6e\u7684 policy \u89c4\u5219\uff0c\u7b5b\u9009\u51fa\u6700\u65b0\u7684\u955c\u50cf Tag\uff0c\u5e76\u66f4\u65b0\u5230 Git \u4ed3\u5e93\u4e2d\u3002\u800c\u5f53\u4ee3\u7801\u4ed3\u5e93\u4e2d\u7684\u6587\u4ef6\u88ab\u66f4\u65b0\u540e\uff0cKubeVela \u5c06\u91cd\u590d\u7b2c\u4e00\u6b65\uff0c\u66f4\u65b0\u96c6\u7fa4\u4e2d\u7684\u6587\u4ef6\uff0c\u4ece\u800c\u8fbe\u5230\u4e86\u81ea\u52a8\u90e8\u7f72\u7684\u6548\u679c\u3002")),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0e GitOps \u7684\u96c6\u6210\uff0cKubeVela \u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u52a0\u901f\u90e8\u7f72\u5e94\u7528\uff0c\u66f4\u4e3a\u7b80\u6d01\u5730\u5b8c\u6210\u6301\u7eed\u90e8\u7f72\u3002"))}u.isMDXComponent=!0},59837:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gitops-commit-720981ffb086c0b5ec226f68ef78cd7f.png"}}]);