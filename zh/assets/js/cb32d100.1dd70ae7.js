(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6075],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=l,v=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(v,o(o({ref:n},i),{},{components:t})):r.createElement(v,o({ref:n},i))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7712:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return i}});var r=t(2122),l=t(9756),a=(t(7294),t(3905)),o={title:"\u591a\u73af\u5883\u4ea4\u4ed8"},p={unversionedId:"end-user/workflow/multi-env",id:"end-user/workflow/multi-env",isDocsHomePage:!1,title:"\u591a\u73af\u5883\u4ea4\u4ed8",description:"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u5de5\u4f5c\u6d41\u4e2d\u4f7f\u7528\u591a\u73af\u5883\u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/workflow/multi-env.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/multi-env",permalink:"/zh/docs/next/end-user/workflow/multi-env",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/end-user/workflow/multi-env.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629716909,formattedLastUpdatedAt:"2021/8/23",frontMatter:{title:"\u591a\u73af\u5883\u4ea4\u4ed8"},sidebar:"docs",previous:{title:"\u90e8\u7f72\u5269\u4f59\u8d44\u6e90",permalink:"/zh/docs/next/end-user/workflow/apply-remaining"},next:{title:"\u7248\u672c\u5bf9\u6bd4",permalink:"/zh/docs/next/end-user/debug/live-diff"}},u=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u671f\u671b\u7ed3\u679c",id:"\u671f\u671b\u7ed3\u679c",children:[]}],s={toc:u};function i(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u5de5\u4f5c\u6d41\u4e2d\u4f7f\u7528\u591a\u73af\u5883\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5728\u591a\u96c6\u7fa4\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u5728\u6d4b\u8bd5\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528\uff0c\u7b49\u5230\u6d4b\u8bd5\u96c6\u7fa4\u7684\u5e94\u7528\u4e00\u5207\u6b63\u5e38\u540e\uff0c\u518d\u90e8\u7f72\u5230\u751f\u4ea7\u96c6\u7fa4\u3002KubeVela \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env")," \u7c7b\u578b\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\uff0c\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u65b9\u4fbf\u7684\u7ba1\u7406\u591a\u73af\u5883\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u5de5\u4f5c\u6d41\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env")," \u6765\u7ba1\u7406\u591a\u73af\u5883\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u90e8\u5206\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u5b66\u4e60\u4e86 KubeVela \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"../policies/envbinding"},"Env Binding"),"\u3002")),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("p",null,"\u90e8\u7f72\u5982\u4e0b\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff0c\u5176\u5de5\u4f5c\u6d41\u4e2d\u7684\u6b65\u9aa4\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: multi-env-demo\n  namespace: default\nspec:\n  components:\n    - name: nginx-server\n      type: webservice\n      properties:\n        image: nginx:1.21\n        port: 80\n\n  policies:\n    - name: env\n      type: env-binding\n      properties:\n        created: false\n        envs:\n          - name: test\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              clusterSelector:\n                labels:\n                  purpose: test\n          - name: prod\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              clusterSelector:\n                labels:\n                  purpose: prod\n\n  workflow:\n    steps:\n      - name: deploy-test-server\n        # \u6307\u5b9a\u6b65\u9aa4\u7c7b\u578b\n        type: multi-env\n        properties:\n          # \u6307\u5b9a\u7ec4\u4ef6\u540d\u79f0\n          component: nginx-server\n          # \u6307\u5b9a policy \u540d\u79f0\n          policy: env\n          # \u6307\u5b9a policy \u4e2d\u7684 env \u540d\u79f0\n          env: test\n      - name: manual-approval\n        # \u5de5\u4f5c\u6d41\u5185\u7f6e suspend \u7c7b\u578b\u7684\u4efb\u52a1\uff0c\u7528\u4e8e\u6682\u505c\u5de5\u4f5c\u6d41\n        type: suspend\n      - name: deploy-prod-server\n        type: multi-env\n        properties:\n          component: nginx-server\n          policy: env\n          env: prod\n")),(0,a.kt)("h2",{id:"\u671f\u671b\u7ed3\u679c"},"\u671f\u671b\u7ed3\u679c"),(0,a.kt)("p",null,"\u67e5\u770b\u6b64\u65f6\u5e94\u7528\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application multi-env-demo -o yaml\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6267\u884c\u5230\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"manual-approval")," \u6b65\u9aa4\u65f6\uff0c\u5de5\u4f5c\u6d41\u88ab\u6682\u505c\u6267\u884c\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 2\n      steps:\n      - name: deploy-test-server\n        phase: succeeded\n        resourceRef: {}\n        type: multi-env\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      suspend: true\n      terminated: false\n")),(0,a.kt)("p",null,"\u5207\u6362\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," \u96c6\u7fa4\uff0c\u5e76\u67e5\u770b\u5e94\u7528\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-server     1/1     1            1           1m10s\n")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u96c6\u7fa4\u7684\u5e94\u7528\u4e00\u5207\u6b63\u5e38\u540e\uff0c\u4f7f\u7528\u547d\u4ee4\u7ee7\u7eed\u5de5\u4f5c\u6d41\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela workflow resume multi-env-demo\n\nSuccessfully resume workflow: multi-env-demo\n")),(0,a.kt)("p",null,"\u91cd\u65b0\u67e5\u770b\u5e94\u7528\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application multi-env-demo -o yaml\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6240\u6709\u6b65\u9aa4\u7684\u72b6\u6001\u5747\u5df2\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 3\n      steps:\n      - name: deploy-test-server\n        phase: succeeded\n        resourceRef: {}\n        type: multi-env\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      - name: deploy-prod-server\n        phase: succeeded\n        resourceRef: {}\n        type: multi-env\n      suspend: false\n      terminated: true\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," \u96c6\u7fa4\u4e2d\uff0c\u67e5\u770b\u5e94\u7528\u7684\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-server     1/1     1            1           1m10s\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4f7f\u7528\u6700\u65b0\u914d\u7f6e\u7684\u7ec4\u4ef6\u5df2\u7ecf\u88ab\u6210\u529f\u5730\u90e8\u7f72\u5230\u4e86\u4e24\u4e2a\u96c6\u7fa4\u4e2d\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u5728\u591a\u4e2a\u73af\u5883\u4e2d\u7ba1\u7406\u5e94\u7528\u3002"))}i.isMDXComponent=!0}}]);