(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7042],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6843:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),p={title:"\u6570\u636e\u6d41"},l={unversionedId:"platform-engineers/workflow/data-flow",id:"platform-engineers/workflow/data-flow",isDocsHomePage:!1,title:"\u6570\u636e\u6d41",description:"\u6570\u636e\u6d41\u662f\u4ec0\u4e48",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/workflow/data-flow.md",sourceDirName:"platform-engineers/workflow",slug:"/platform-engineers/workflow/data-flow",permalink:"/zh/docs/next/platform-engineers/workflow/data-flow",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/workflow/data-flow.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1629290108,formattedLastUpdatedAt:"2021/8/18",frontMatter:{title:"\u6570\u636e\u6d41"},sidebar:"docs",previous:{title:"\u5de5\u4f5c\u6d41\u4e0a\u4e0b\u6587",permalink:"/zh/docs/next/platform-engineers/workflow/context"},next:{title:"CUE \u64cd\u4f5c",permalink:"/zh/docs/next/platform-engineers/workflow/cue-actions"}},i=[{value:"\u6570\u636e\u6d41\u662f\u4ec0\u4e48",id:"\u6570\u636e\u6d41\u662f\u4ec0\u4e48",children:[]},{value:"\u8f93\u51fa\u5b57\u6bb5 (Outputs)",id:"\u8f93\u51fa\u5b57\u6bb5-outputs",children:[]},{value:"\u8f93\u5165\u5b57\u6bb5 (Inputs)",id:"\u8f93\u5165\u5b57\u6bb5-inputs",children:[]}],c={toc:i};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6570\u636e\u6d41\u662f\u4ec0\u4e48"},"\u6570\u636e\u6d41\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,"KubeVela \u91cc\u7684\u6570\u636e\u6d41\u662f\u7528\u6765\u8d4b\u80fd\u7528\u6237\u5728\u4e0d\u540c\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\u91cc\u4f20\u9012\u6570\u636e\u7684\u624b\u6bb5\u3002\n\u7528\u6237\u4f7f\u7528\u6570\u636e\u6d41\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u7f16\u5199\u58f0\u660e\u5f0f\u7684\u5b57\u6bb5\uff1a\u5373\u6bcf\u4e00\u4e2a\u6b65\u9aa4\u7684\u8f93\u5165\u8f93\u51fa (inputs/outputs)\u3002\n\u8fd9\u7bc7\u6587\u6863\u5c06\u9610\u8ff0\u5982\u4f55\u901a\u8fc7\u7f16\u5199\u8fd9\u4e9b\u5b57\u6bb5\u6765\u4f7f\u7528\u6570\u636e\u6d41\u529f\u80fd\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5b8c\u6574\u7248\u4f8b\u5b50\u8bf7\u53c2\u8003\u8fd9\u4e2a\u94fe\u63a5: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/blob/master/docs/examples/workflow"},"https://github.com/oam-dev/kubevela/blob/master/docs/examples/workflow"))),(0,a.kt)("h2",{id:"\u8f93\u51fa\u5b57\u6bb5-outputs"},"\u8f93\u51fa\u5b57\u6bb5 (Outputs)"),(0,a.kt)("p",null,"\u4e00\u4e2a\u8f93\u51fa\u5b57\u6bb5\u53ef\u4ee5\u5c06\u4e00\u4e2a\u6b65\u9aa4\u5bf9\u5e94\u7684 CUE \u6a21\u677f\u4e2d\u7684\u67d0\u4e2a Key \u7684\u6570\u636e\u7ed9\u8f93\u51fa\u51fa\u6765\u3002\n\u8f93\u51fa\u7684\u6570\u636e\u53ef\u4ee5\u5728\u5de5\u4f5c\u6d41\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u4e2d\u88ab\u5f53\u505a\u8f93\u5165\u6765\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5982\u4f55\u5728 Application \u4e2d\u7f16\u5199\u8f93\u51fa\u5b57\u6bb5 (Outputs) \u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nspec:\n  ...\n  workflow:\n    steps:\n      - name: deploy-server1\n        type: apply-component\n        properties:\n          component: "server1"\n        outputs:\n          - name: server1IP\n            # \u4efb\u4f55\u952e\u503c\u90fd\u53ef\u4ee5\u4ece\u5b9a\u4e49\u7684 CUE \u6a21\u677f\u5bfc\u51fa\n            exportKey: "myIP"\n')),(0,a.kt)("p",null,"\u4e0e\u4e0a\u9762\u5bf9\u5e94\uff0c\u4f7f\u7528\u4e00\u4e2a CUE \u6a21\u7248\u63d0\u4f9b\u8f93\u51fa\u5b57\u6bb5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: WorkflowStepDefinition\nmetadata:\n  name: apply-component\nspec:\n  schematic:\n    cue:\n      template: |\n        import ("vela/op")\n        parameter: {\n          component: string\n        }\n        // \u4ece Application \u4e2d\u52a0\u8f7d\u7ec4\u4ef6\n        component: op.#Load & {\n          component: parameter.component\n        }\n        // \u5c06\u7ec4\u4ef6\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\n        apply: op.#ApplyComponent & {\n          component: parameter.component\n        }\n        // \u8f93\u51fa podIP\n        myIP: apply.workload.status.podIP\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u6211\u4eec\u5728 WorkflowStepDefinition \u7684 CUE \u6a21\u677f\u91cc\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"myIP")," \u5b57\u6bb5\uff0c\u5e76\u4e14\u5f53 Application \u91cc outputs \u7684 exportKey \u4e5f\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"myIP")," \u5b57\u6bb5\u65f6\uff0c\u5b83\u7684\u503c\u5c06\u88ab\u8f93\u51fa\u51fa\u53bb\u3002\u6211\u4eec\u5c06\u5728\u4e0b\u9762\u770b\u5230\u8f93\u51fa\u503c\u8be5\u5982\u4f55\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u8f93\u5165\u5b57\u6bb5-inputs"},"\u8f93\u5165\u5b57\u6bb5 (Inputs)"),(0,a.kt)("p",null,"\u8f93\u5165\u5b57\u6bb5\u53ef\u4ee5\u5bf9\u5e94\u524d\u9762\u8f93\u51fa\u7684\u503c\uff0c\u7136\u540e\u5c06\u8f93\u51fa\u7684\u503c\u7528\u4e8e\u586b\u503c\u8be5\u6b65\u9aa4\u7684 CUE \u6a21\u677f\u7684\u6307\u5b9a\u53c2\u6570\u3002\n\u53c2\u6570\u4f1a\u5728\u5de5\u4f5c\u6d41\u6b65\u9aa4\u8fd0\u884c\u524d\u5148\u88ab\u586b\u503c\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u5982\u4f55\u5728 Application \u4e2d\u7f16\u5199\u8f93\u5165\u5b57\u6bb5 (Outputs) \u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Application\nspec:\n  ...\n  workflow:\n    steps:\n      ...\n      - name: deploy-server2\n        type: apply-with-ip\n        inputs:\n          - from: server1IP\n            parameterKey: serverIP\n        properties:\n          component: "server2"\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-server2")," \u5de5\u4f5c\u6d41\u6b65\u9aa4\u4e2d inputs \u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"from: server1IP")," \u5bf9\u5e94\u4e86\u4e4b\u524d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-server1")," \u6b65\u9aa4\u7684\u4e00\u4e2a\u8f93\u51fa\u5b57\u6bb5\u3002\n\u5230\u8fd9\u91cc\u524d\u9762\u7684\u8f93\u51fa\u503c\u8fd9\u65f6\u5019\u5c06\u88ab\u7528\u6765\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-server2")," \u7684\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"serverIP")," \u586b\u503c\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy-server2")," \u5bf9\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"apply-with-ip")," WorkflowStepDefinition \u7684\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: WorkflowStepDefinition\nmetadata:\n  name: apply-with-ip\nspec:\n  schematic:\n    cue:\n      template: |\n        import ("vela/op")\n        parameter: {\n          component: string\n          // \u8f93\u5165\u503c\u5c06\u7528\u4e8e\u586b\u5145\u8be5\u53c2\u6570\n          serverIP?: string\n        }\n        // \u52a0\u8f7d\u7ec4\u4ef6\n        component: op.#Load & {\n          component: parameter.component\n          value: {}\n        }\n        // \u5c06\u7ec4\u4ef6\u90e8\u7f72\u5230\u96c6\u7fa4\u4e2d\n        apply: op.#Apply & {\n          value: {\n            component.value.workload\n            metadata: name: parameter.component\n            if parameter.serverIP!=_|_{\n              // \u8be5\u5b57\u6bb5\u5c06\u8986\u76d6\u5de5\u4f5c\u8d1f\u8f7d\u5bb9\u5668\u7684 env \u5b57\u6bb5\n              spec: containers: [{env: [{name: "PrefixIP",value: parameter.serverIP}]}]\n            }\n          }\n        }\n        // \u7b49\u5f85\u76f4\u81f3 workload.status \u53d8\u6210 "Running"\n        wait: op.#ConditionalWait & {\n          continue: apply.value.status.phase =="Running"\n        }\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8fd9\u4e2a\u6b65\u9aa4\u6e32\u67d3\u7684\u5bf9\u8c61\u662f\u9700\u8981\u62ff\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"serverIP"),"\uff0c\u4e5f\u5c31\u662f\u4e4b\u524d\u90e8\u7f72\u7684\u670d\u52a1\u7684 IP \u6765\u4f5c\u4e3a\u73af\u5883\u53d8\u91cf\u4f20\u5165\u3002\n\u81f3\u6b64\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684\u6570\u636e\u6d41\u4f20\u9012\u7684\u4f8b\u5b50\u3002"))}u.isMDXComponent=!0}}]);