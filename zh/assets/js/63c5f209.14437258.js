(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[249],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2607:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),i={title:"\u9ad8\u7ea7\u529f\u80fd"},p={unversionedId:"platform-engineers/cue/advanced",id:"version-v1.0/platform-engineers/cue/advanced",isDocsHomePage:!1,title:"\u9ad8\u7ea7\u529f\u80fd",description:"\u4f5c\u4e3a\u6570\u636e\u914d\u7f6e\u8bed\u8a00\uff0cCUE \u5bf9\u4e8e\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53\u652f\u6301\u4e00\u4e9b\u9ed1\u9b54\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/cue/advanced.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/advanced",permalink:"/zh/docs/platform-engineers/cue/advanced",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cue/advanced.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"\u9ad8\u7ea7\u529f\u80fd"},sidebar:"version-v1.0/docs",previous:{title:"\u72b6\u6001\u56de\u5199",permalink:"/zh/docs/platform-engineers/cue/status"},next:{title:"\u8c03\u8bd5\uff0c \u6d4b\u8bd5 \u4ee5\u53ca Dry-run",permalink:"/zh/docs/platform-engineers/debug-test-cue"}},l=[{value:"\u5faa\u73af\u6e32\u67d3\u591a\u4e2a\u8d44\u6e90",id:"\u5faa\u73af\u6e32\u67d3\u591a\u4e2a\u8d44\u6e90",children:[]},{value:"Trait Definition \u4e2d\u8bf7\u6c42 HTTP \u63a5\u53e3",id:"trait-definition-\u4e2d\u8bf7\u6c42-http-\u63a5\u53e3",children:[]},{value:"\u6570\u636e\u4f20\u9012",id:"\u6570\u636e\u4f20\u9012",children:[]}],c={toc:l};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f5c\u4e3a\u6570\u636e\u914d\u7f6e\u8bed\u8a00\uff0cCUE \u5bf9\u4e8e\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53\u652f\u6301\u4e00\u4e9b\u9ed1\u9b54\u6cd5\u3002"),(0,o.kt)("h2",{id:"\u5faa\u73af\u6e32\u67d3\u591a\u4e2a\u8d44\u6e90"},"\u5faa\u73af\u6e32\u67d3\u591a\u4e2a\u8d44\u6e90"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," \u5b9a\u4e49 for \u5faa\u73af\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f\u6ce8\u610f\uff0c\u672c\u793a\u4f8b\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter")," \u5fc5\u987b\u662f\u5b57\u5178\u7c7b\u578b\u3002")),(0,o.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff0c\u8be5\u793a\u4f8b\u5c06\u5c55\u793a\u5982\u4f55\u5728 trait \u4e2d\u6e32\u67d3\u591a\u4e2a Kubernetes Services\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: expose\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          http: [string]: int\n        }\n\n        outputs: {\n          for k, v in parameter.http {\n            "\\(k)": {\n              apiVersion: "v1"\n              kind:       "Service"\n              spec: {\n                selector:\n                  app: context.name\n                ports: [{\n                  port:       v\n                  targetPort: v\n                }]\n              }\n            }\n          }\n        }\n')),(0,o.kt)("p",null,"\u4e0a\u9762 trait \u5bf9\u8c61\u53ef\u4ee5\u5728\u4ee5\u4e0b Application \u88ab\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: testapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        ...\n      traits:\n        - type: expose\n          properties:\n            http:\n              myservice1: 8080\n              myservice2: 8081\n")),(0,o.kt)("h2",{id:"trait-definition-\u4e2d\u8bf7\u6c42-http-\u63a5\u53e3"},"Trait Definition \u4e2d\u8bf7\u6c42 HTTP \u63a5\u53e3"),(0,o.kt)("p",null,"Trait Definition \u4e2d\u53ef\u4ee5\u53d1\u9001 HTTP \u8bf7\u6c42\u5e76\u501f\u52a9\u5b57\u6bb5 ",(0,o.kt)("inlineCode",{parentName:"p"},"processing")," \u5c06\u54cd\u5e94\u7ed3\u679c\u7528\u4e8e\u6e32\u67d3\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"processing.http")," \u5b57\u6bb5\u4e0b\u5b9a\u4e49 HTTP \u8bf7\u6c42\u6240\u9700\u7684\u5b57\u6bb5\uff0c\u5305\u62ec\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"method"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"body"),"\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"header")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"trailer")," \uff0c\u54cd\u5e94\u5c06\u4f1a\u88ab\u5b58\u50a8\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"processing.output")," \u5b57\u6bb5\u4e2d\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6b64\u5904\u9700\u8981\u786e\u8ba4\u76ee\u6807 HTTP \u670d\u52a1\u8fd4\u56de\u6570\u636e\u683c\u5f0f\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"JSON"),"\u3002")),(0,o.kt)("p",null,"\u968f\u540e\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"patch")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"output/outputs")," \u5b57\u6bb5\u4e2d\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"processing.output")," \u81ea\u52a8\u4e2d\u7684\u8fd4\u56de\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: auth-service\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          serviceURL: string\n        }\n\n        processing: {\n          output: {\n            token?: string\n          }\n          // The target server will return a JSON data with `token` as key.\n          http: {\n            method: *"GET" | string\n            url:    parameter.serviceURL\n            request: {\n              body?: bytes\n              header: {}\n              trailer: {}\n            }\n          }\n        }\n\n        patch: {\n          data: token: processing.output.token\n        }\n')),(0,o.kt)("p",null,"\u4ee5\u4e0a\u793a\u4f8b\uff0c\u8be5 Trait Definition \u5c06\u53d1\u9001\u8bf7\u6c42\u83b7\u53d6 ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," \u4fe1\u606f\uff0c\u5e76\u5c06\u6570\u636e\u63d2\u5165\u5230\u7ed9\u5b9a\u5230 component \u5b9e\u4f8b\u4e2d\u3002"),(0,o.kt)("h2",{id:"\u6570\u636e\u4f20\u9012"},"\u6570\u636e\u4f20\u9012"),(0,o.kt)("p",null,"TraitDefinition \u53ef\u4ee5\u4ece\u7ed9\u5b9a\u7684 ComponentDefinition \u4e2d\u8bfb\u53d6\u5df2\u7ecf\u88ab\u751f\u6210\u7684 API \u8d44\u6e90\uff08\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," \u4e2d\u88ab\u6e32\u67d3\uff09\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," KubeVela \u4f1a\u786e\u4fdd ComponentDefinition \u4f1a\u5148\u4e8e TraitDefinition \u88ab\u6e32\u67d3\u51fa\u6765\u3002")),(0,o.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"context.output")," \u5b57\u6bb5\u4e2d\u4f1a\u5305\u542b\u5df2\u7ecf\u88ab\u6e32\u67d3\u7684 workload API \u8d44\u6e90\uff08\u7279\u6307 GVK \u5df2\u7ecf\u5728 ComponentDefinition \u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.workload")," \u5b57\u6bb5\u5b9a\u4e49\u7684\u8d44\u6e90\uff09\uff0c\u540c\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"context.outputs.<xx>"),"\n\u5b57\u6bb5\u4e2d\u4f1a\u5305\u542b\u5176\u4ed6\u5df2\u7ecf\u88ab\u6e32\u67d3\u7684\u975e workload API \u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u6570\u636e\u4f20\u9012\u7684\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n          apiVersion: "apps/v1"\n          kind:       "Deployment"\n          spec: {\n            selector: matchLabels: {\n              "app.oam.dev/component": context.name\n            }\n\n            template: {\n              metadata: labels: {\n                "app.oam.dev/component": context.name\n              }\n              spec: {\n                containers: [{\n                  name:  context.name\n                  image: parameter.image\n                  ports: [{containerPort: parameter.port}]\n                  envFrom: [{\n                    configMapRef: name: context.name + "game-config"\n                  }]\n                  if parameter["cmd"] != _|_ {\n                    command: parameter.cmd\n                  }\n                }]\n              }\n            }\n          }\n        }\n\n        outputs: gameconfig: {\n          apiVersion: "v1"\n          kind:       "ConfigMap"\n          metadata: {\n            name: context.name + "game-config"\n          }\n          data: {\n            enemies: parameter.enemies\n            lives:   parameter.lives\n          }\n        }\n\n        parameter: {\n          // +usage=Which image would you like to use for your service\n          // +short=i\n          image: string\n          // +usage=Commands to run in the container\n          cmd?: [...string]\n          lives:   string\n          enemies: string\n          port:    int\n        }\n\n\n---\napiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  name: ingress\nspec:\n  schematic:\n    cue:\n      template: |\n        parameter: {\n          domain:     string\n          path:       string\n          exposePort: int\n        }\n        // trait template can have multiple outputs in one trait\n        outputs: service: {\n          apiVersion: "v1"\n          kind:       "Service"\n          spec: {\n            selector:\n              app: context.name\n            ports: [{\n              port:       parameter.exposePort\n              targetPort: context.output.spec.template.spec.containers[0].ports[0].containerPort\n            }]\n          }\n        }\n        outputs: ingress: {\n          apiVersion: "networking.k8s.io/v1beta1"\n          kind:       "Ingress"\n          metadata:\n              name: context.name\n          labels: config: context.outputs.gameconfig.data.enemies\n          spec: {\n            rules: [{\n              host: parameter.domain\n              http: {\n                paths: [{\n                  path: parameter.path\n                  backend: {\n                    serviceName: context.name\n                    servicePort: parameter.exposePort\n                  }\n                }]\n              }\n            }]\n          }\n        }\n')),(0,o.kt)("p",null,"\u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," \u6e32\u67d3\u671f\u95f4\u7684\u4e00\u4e9b\u7ec6\u8282\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"workload\uff0c\u6e32\u67d3\u5b8c\u6210\u7684 Kubernetes Deployment \u8d44\u6e90\u5c06\u5b58\u50a8\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"context.output")," \u5b57\u6bb5\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u975e workload\uff0c\u5176\u4ed6\u6e32\u67d3\u5b8c\u6210\u7684\u8d44\u6e90\u5c06\u5b58\u50a8\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"context.outputs.<xx>")," \u5b57\u6bb5\u4e2d\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"<xx>")," \u5728\u6bcf\u4e2a ",(0,o.kt)("inlineCode",{parentName:"li"},"template.outputs")," \u5b57\u6bb5\u4e2d\u540d\u5b57\u90fd\u662f\u552f\u4e00\u7684\u3002")),(0,o.kt)("p",null,"\u7efc\u4e0a\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," \u53ef\u4ee5\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," \u5b57\u6bb5\u8bfb\u53d6\u5b8c\u6210\u6e32\u67d3\u7684 API \u8d44\u6e90\uff08\u6bd4\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"context.outputs.gameconfig.data.enemies"),"\uff09\u3002"))}s.isMDXComponent=!0}}]);