(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3432],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78388:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212"},p={unversionedId:"core-concepts/application",id:"core-concepts/application",isDocsHomePage:!1,title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212",description:"KubeVela \u5c06 Application \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u5efa\u6a21\u7684\u57fa\u7840\uff0c\u4f7f\u7528 Components \u7ec4\u4ef6\u548c Traits \u8fd0\u7ef4\u7279\u5f81\uff0c\u5b8c\u6210\u4e00\u6574\u5957\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002\u5728\u719f\u6089\u8fd9\u4e9b\u6838\u5fc3\u6982\u5ff5\u540e\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\uff0c\u5bf9\u5e94\u6309\u7167 \u7528\u6237\u624b\u518c \u548c \u7ba1\u7406\u5458\u624b\u518c \u8fdb\u884c\u5f00\u53d1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core-concepts/application.md",sourceDirName:"core-concepts",slug:"/core-concepts/application",permalink:"/zh/docs/next/core-concepts/application",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/core-concepts/application.md",version:"current",lastUpdatedBy:"Wei (\u6bb5\u5c11)",lastUpdatedAt:1629369327,formattedLastUpdatedAt:"2021/8/19",frontMatter:{title:"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212"},sidebar:"docs",previous:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/next/core-concepts/architecture"},next:{title:"\u5de5\u4f5c\u6d41",permalink:"/zh/docs/next/core-concepts/workflow"}},l=[{value:"Application \u5e94\u7528\u7a0b\u5e8f",id:"application-\u5e94\u7528\u7a0b\u5e8f",children:[]},{value:"Components \u7ec4\u4ef6",id:"components-\u7ec4\u4ef6",children:[]},{value:"Traits \u8fd0\u7ef4\u7279\u5f81",id:"traits-\u8fd0\u7ef4\u7279\u5f81",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:l};function s(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeVela \u5c06 Application \u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u5efa\u6a21\u7684\u57fa\u7840\uff0c\u4f7f\u7528 Components \u7ec4\u4ef6\u548c Traits \u8fd0\u7ef4\u7279\u5f81\uff0c\u5b8c\u6210\u4e00\u6574\u5957\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002\u5728\u719f\u6089\u8fd9\u4e9b\u6838\u5fc3\u6982\u5ff5\u540e\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\uff0c\u5bf9\u5e94\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"../end-user/initializer-end-user"},"\u7528\u6237\u624b\u518c")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/platform-engineers/advanced-install"},"\u7ba1\u7406\u5458\u624b\u518c")," \u8fdb\u884c\u5f00\u53d1\u3002"),(0,o.kt)("h3",{id:"application-\u5e94\u7528\u7a0b\u5e8f"},"Application \u5e94\u7528\u7a0b\u5e8f"),(0,o.kt)("p",null,"\u5728\u6280\u672f\u5efa\u6a21\u4e2d\uff0cYAML \u6587\u4ef6\u662f\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u627f\u8f7d\u3002\u4e00\u4e2a\u5178\u578b\u7684 YAML \u6837\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # This is the component I want to deploy\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # Automatically scale the component by CPU usage after deployed\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar           # Inject a fluentd sidecar before applying the component to runtime cluster\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684\u5b57\u6bb5\u5bf9\u5e94\u7740\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apiVersion"),"\uff1a\u6240\u4f7f\u7528\u7684 OAM API \u7248\u672c\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kind"),"\uff1a\u79cd\u7c7b\u3002\u6211\u4eec\u6700\u7ecf\u5e38\u7528\u5230\u7684\u5c31\u662f Pod \u4e86\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"metadata"),"\uff1a\u4e1a\u52a1\u76f8\u5173\u4fe1\u606f\u3002\u6bd4\u5982\u8fd9\u6b21\u8981\u521b\u5efa\u7684\u662f\u4e00\u4e2a\u7f51\u7ad9\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Spec"),"\uff1a\u63cf\u8ff0\u6211\u4eec\u9700\u8981\u5e94\u7528\u53bb\u4ea4\u4ed8\u4ec0\u4e48\uff0c\u544a\u8bc9 Kubernetes \u505a\u6210\u4ec0\u4e48\u6837\u3002\u8fd9\u91cc\u6211\u4eec\u653e\u5165 KubeVela \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"components"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components"),"\uff1aKubeVela \u7684\u7ec4\u4ef6\u7cfb\u7edf\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"traits"),"\uff1aKubeVela \u7684\u8fd0\u7ef4\u7279\u5f81\u7cfb\u7edf\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u8fd9\u5f20\u793a\u610f\u56fe\u8be0\u91ca\u4e86\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\uff1a\n",(0,o.kt)("img",{alt:"image.png",src:n(1594).Z})),(0,o.kt)("p",null,"\u5148\u6709\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f Application\u3002\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\u6211\u4eec\u7533\u660e\u5e94\u7528\u4e3b\u4f53\u4e3a\u53ef\u914d\u7f6e\u3001\u53ef\u90e8\u7f72\u7684\u7ec4\u4ef6 Components\uff0c\u5e76\u540c\u65f6\u5bf9\u5e94\u5730\u53bb\u7533\u660e\uff0c\u671f\u671b\u6bcf\u4e2a\u7ec4\u4ef6\u8981\u62e5\u6709\u7684\u76f8\u5173\u8fd0\u7ef4\u7279\u5f81 Traits\u3002"),(0,o.kt)("p",null,"\u4f60\u4f7f\u7528 KubeVela \u7684\u65f6\u5019\uff0c\u5c31\u50cf\u5728\u73a9\u201c\u4e50\u9ad8\u201c\u79ef\u6728\uff1a\u5148\u62ff\u8d77\u4e00\u5757\u5927\u7684\u201c\u5e94\u7528\u7a0b\u5e8f\u201d\uff0c\u7136\u540e\u5f80\u4e0a\u56fa\u5b9a\u4e00\u5757\u6216\u51e0\u5757\u201c\u7ec4\u4ef6\u201d\uff0c\u7ec4\u4ef6\u4e0a\u53c8\u53ef\u4ee5\u8d34\u4e0a\u4efb\u4f55\u989c\u8272\u5927\u5c0f\u7684\u201c\u8fd0\u7ef4\u7279\u5f81\u201d\u3002\u540c\u65f6\u6839\u636e\u9700\u6c42\u7684\u53d8\u5316\uff0c\u4f60\u968f\u65f6\u53ef\u4ee5\u91cd\u65b0\u7ec4\u88c5\uff0c\u5f62\u6210\u65b0\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u3002"),(0,o.kt)("h3",{id:"components-\u7ec4\u4ef6"},"Components \u7ec4\u4ef6"),(0,o.kt)("p",null,"KubeVela \u5185\u7f6e\u4e86\u5e38\u7528\u7684\u7ec4\u4ef6\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/getting-started/quick-install##3"},"KubeVela CLI")," \u547d\u4ee4\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela components \n")),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME        NAMESPACE   WORKLOAD                                DESCRIPTION                                                 \nalibaba-rds default     configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object        \ntask        vela-system jobs.batch                              Describes jobs that run code or a script to completion.     \nwebservice  vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that have a stable network endpoint to receive external     \n                                                                network traffic from customers.                             \nworker      vela-system deployments.apps                        Describes long-running, scalable, containerized services    \n                                                                that running at backend. They do NOT have network endpoint  \n                                                                to receive external network traffic.                        \n\n")),(0,o.kt)("p",null,"\u4f5c\u4e3a\u7528\u6237\u7684\u4f60\uff0c\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../end-user/components/cue"},"CUE \u7ec4\u4ef6"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"../end-user/components/helm"},"Helm \u7ec4\u4ef6"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"../end-user/components/kustomize"},"Kustomize \u7ec4\u4ef6"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"../end-user/components/cloud-services/terraform/rds"},"\u4e91\u670d\u52a1\u7ec4\u4ef6"),"\u6765\u5b9e\u73b0\u4f60\u9700\u8981\u7684\u4efb\u4f55\u7ec4\u4ef6\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u4f5c\u4e3a\u7ba1\u7406\u5458\u7684\u4f60\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/components/component-cue"},"\u81ea\u5b9a\u4e49\u7ec4\u4ef6"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/components/component-terraform"},"Terraform \u7ec4\u4ef6")," \u6765\u81ea\u5b9a\u4e49\u4f60\u7684\u7528\u6237\u6240\u9700\u8981\u7684\u4efb\u4f55\u7ec4\u4ef6\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"traits-\u8fd0\u7ef4\u7279\u5f81"},"Traits \u8fd0\u7ef4\u7279\u5f81"),(0,o.kt)("p",null,"KubeVela \u4e5f\u5185\u7f6e\u4e86\u5e38\u7528\u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b\uff0c\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/getting-started/quick-install##3"},"KubeVela CLI")," \u547d\u4ee4\u67e5\u770b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela traits \n")),(0,o.kt)("p",null,"\u8fd4\u56de\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION                                          \nannotations vela-system deployments.apps                    true            Add annotations for your Workload.                   \ncpuscaler   vela-system webservice,worker                   false           Automatically scale the component based on CPU usage.\ningress     vela-system webservice,worker                   false           Enable public web traffic for the component.         \nlabels      vela-system deployments.apps                    true            Add labels for your Workload.                        \nscaler      vela-system webservice,worker                   false           Manually scale the component.                        \nsidecar     vela-system deployments.apps                    true            Inject a sidecar container to the component.   \n")),(0,o.kt)("p",null,"\u4f5c\u4e3a\u7528\u6237\u7684\u4f60\uff0c\u53ef\u4ee5\u7ee7\u7eed\u9605\u8bfb\u7528\u6237\u624b\u518c\u91cc\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../end-user/traits/ingress"},"\u7ed1\u5b9a\u8fd0\u7ef4\u7279\u5f81")," \uff0c\u5177\u4f53\u67e5\u770b\u5982\u4f55\u5b8c\u6210\u5404\u79cd\u8fd0\u7ef4\u7279\u5f81\u7684\u5f00\u53d1\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u4f5c\u4e3a\u7ba1\u7406\u5458\u7684\u4f60\uff0c\u4e5f\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/traits/customize-trait"},"\u81ea\u5b9a\u4e49\u8fd0\u7ef4\u7279\u5f81")," \u4e3a\u4f60\u7684\u7528\u6237\uff0c\u81ea\u5b9a\u4e49\u4efb\u4f55\u9700\u8981\u7684\u8fd0\u7ef4\u7279\u5f81\u7c7b\u578b\u3002"),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("p",null,"\u5728\u7406\u89e3\u4e86\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u8fd9\u5957\u6838\u5fc3\u6982\u5ff5\u540e\uff0c\u4f60\u53ef\u4ee5\u8fdb\u4e00\u6b65\u9605\u8bfb\u5173\u4e8e Workflow \u4ea4\u4ed8\u5de5\u4f5c\u6d41\u7684\u6982\u5ff5\u3002"))}s.isMDXComponent=!0},1594:function(e,t,n){"use strict";t.Z=n.p+"assets/images/concepts-84a610940144e6aa2a28e883696d1e93.png"}}]);