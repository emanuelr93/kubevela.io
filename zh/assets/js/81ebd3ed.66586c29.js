(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6005],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},442:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o={title:"\u5982\u4f55\u5b9a\u4e49"},p={unversionedId:"platform-engineers/cue/trait",id:"version-v1.0/platform-engineers/cue/trait",isDocsHomePage:!1,title:"\u5982\u4f55\u5b9a\u4e49",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b9a\u4e49 Trait\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/cue/trait.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/trait",permalink:"/zh/docs/platform-engineers/cue/trait",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cue/trait.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"\u5982\u4f55\u5b9a\u4e49"},sidebar:"version-v1.0/docs",previous:{title:"Crossplane",permalink:"/zh/docs/platform-engineers/crossplane"},next:{title:"Patch Traits",permalink:"/zh/docs/platform-engineers/cue/patch-trait"}},s=[{value:"\u7b80\u5355 Trait",id:"\u7b80\u5355-trait",children:[]},{value:"\u4f7f\u7528 CUE \u6765\u6784\u5efa Trait",id:"\u4f7f\u7528-cue-\u6765\u6784\u5efa-trait",children:[]}],c={toc:s};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5b9a\u4e49 Trait\u3002"),(0,i.kt)("h2",{id:"\u7b80\u5355-trait"},"\u7b80\u5355 Trait"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u5730\u53c2\u8003\u73b0\u6709\u7684 Kubernetes API \u8d44\u6e90\u6765\u5b9a\u4e49 KubeVela \u4e2d\u7684 Trait\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  definitionRef:\n    name: ingresses.networking.k8s.io\n")),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u5c06\u6b64 Trait \u9644\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Application")," \u4e2d\u7684 Component \u5b9e\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            rules:\n            - http:\n                paths:\n                - path: /testpath\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: test\n                      port:\n                        number: 80\n")),(0,i.kt)("p",null,"\u6ce8\u610f\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6240\u5f15\u7528\u8d44\u6e90\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"spec")," \u4e2d\u7684\u6240\u6709\u5b57\u6bb5\u90fd\u5c06\u5411\u6700\u7ec8\u7528\u6237\u516c\u5f00\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u5c06\u4efb\u4f55\u5143\u6570\u636e\uff08\u4f8b\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," \u7b49\uff09\u8bbe\u7f6e\u4e3a Trait \u7684\u5c5e\u6027\u3002 \u56e0\u6b64\uff0c\u5f53\u4f60\u5e0c\u671b\u5c06\u81ea\u5df1\u7684 CRD \u548c\u63a7\u5236\u5668\u4f5c\u4e3a Trait \u65f6\uff0c\u901a\u5e38\u4f7f\u7528\u6b64\u65b9\u6cd5\uff0c\u5e76\u4e14\u5b83\u4e0d\u4f9d\u8d56 ",(0,i.kt)("inlineCode",{parentName:"p"},"annotations")," \u7b49\u4f5c\u4e3a\u8c03\u6574\u624b\u6bb5\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528-cue-\u6765\u6784\u5efa-trait"},"\u4f7f\u7528 CUE \u6765\u6784\u5efa Trait"),(0,i.kt)("p",null,"\u4e5f\u63a8\u8350\u4f7f\u7528 CUE \u7684\u65b9\u5f0f\u6765\u5b9a\u4e49 Trait\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b83\u5e26\u6709\u62bd\u8c61\uff0c\u4f60\u53ef\u4ee5\u5b8c\u5168\u7075\u6d3b\u5730\u6839\u636e\u9700\u8981\u6765\u6a21\u677f\u5316\u4efb\u4f55\u8d44\u6e90\u548c\u5b57\u6bb5\u3002\u8bf7\u6ce8\u610f\uff0cKubeVela \u8981\u6c42\u6240\u6709 Trait \u5fc5\u987b\u5728 CUE \u6a21\u677f\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," \u90e8\u5206\uff08\u800c\u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," \uff09\u4e2d\u5b9a\u4e49\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cue"},"outputs: <unique-name>: \n  <full template data>\n")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress")," \u7684 Trait \u793a\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  podDisruptive: false\n  schematic:\n    cue:\n      template: |\n        parameter: {\n            domain: string\n            http: [string]: int\n        }\n\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n            apiVersion: "v1"\n            kind:       "Service"\n            spec: {\n                selector:\n                    app: context.name\n                ports: [\n                    for k, v in parameter.http {\n                        port:       v\n                        targetPort: v\n                    },\n                ]\n            }\n        }\n\n        outputs: ingress: {\n            apiVersion: "networking.k8s.io/v1beta1"\n            kind:       "Ingress"\n            metadata:\n                name: context.name\n            spec: {\n                rules: [{\n                    host: parameter.domain\n                    http: {\n                        paths: [\n                            for k, v in parameter.http {\n                                path: k\n                                backend: {\n                                    serviceName: context.name\n                                    servicePort: v\n                                }\n                            },\n                        ]\n                    }\n                }]\n            }\n        }\n')),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u5c06\u6b64 Trait \u9644\u52a0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),"\u4e2d\u7684 Component \u5b9e\u4f8b\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/api": 8080\n')),(0,i.kt)("p",null,"\u57fa\u4e8e CUE \u7684 Trait \u5b9a\u4e49\u8fd8\u53ef\u4ee5\u652f\u6301\u8bb8\u591a\u5176\u4ed6\u9ad8\u7ea7\u65b9\u6848\uff0c\u4f8b\u5982\u4fee\u8865\u548c\u6570\u636e\u4f20\u9012\u3002 \u5728\u63a5\u4e0b\u6765\u7684\u6587\u6863\u4e2d\u5c06\u5bf9\u5b83\u4eec\u8fdb\u884c\u8be6\u7ec6\u8bf4\u660e\u3002"))}l.isMDXComponent=!0}}]);