(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2738],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(f,o(o({ref:n},l),{},{components:t})):a.createElement(f,o({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1675:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o={title:"Crossplane"},s={unversionedId:"platform-engineers/cloud-services",id:"version-v1.0/platform-engineers/cloud-services",isDocsHomePage:!1,title:"Crossplane",description:"\u4e91\u670d\u52a1\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/platform-engineers/cloud-services.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/cloud-services",permalink:"/zh/docs/platform-engineers/cloud-services",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/cloud-services.md",version:"v1.0",lastUpdatedBy:"guoxudong",lastUpdatedAt:1622708793,formattedLastUpdatedAt:"2021/6/3",frontMatter:{title:"Crossplane"},sidebar:"version-v1.0/docs",previous:{title:"\u6dfb\u52a0 Traits",permalink:"/zh/docs/platform-engineers/kube/trait"},next:{title:"Terraform",permalink:"/zh/docs/platform-engineers/terraform"}},c=[{value:"\u4e91\u670d\u52a1\u662f Component \u8fd8\u662f Trait?",id:"\u4e91\u670d\u52a1\u662f-component-\u8fd8\u662f-trait",children:[]},{value:"\u5b89\u88c5\u548c\u914d\u7f6e Crossplane",id:"\u5b89\u88c5\u548c\u914d\u7f6e-crossplane",children:[]},{value:"\u6ce8\u518c ComponentDefinition \u548c TraitDefinition",id:"\u6ce8\u518c-componentdefinition-\u548c-traitdefinition",children:[{value:"\u6ce8\u518c ComponentDefinition <code>alibaba-rds</code> \u4e3a RDS \u4e91\u8d44\u6e90\u751f\u4ea7\u8005",id:"\u6ce8\u518c-componentdefinition-alibaba-rds-\u4e3a-rds-\u4e91\u8d44\u6e90\u751f\u4ea7\u8005",children:[]},{value:"\u6ce8\u518c ComponentDefinition <code>alibaba-oss</code> \u4e3a OSS \u4e91\u8d44\u6e90\u751f\u4ea7\u8005",id:"\u6ce8\u518c-componentdefinition-alibaba-oss-\u4e3a-oss-\u4e91\u8d44\u6e90\u751f\u4ea7\u8005",children:[]},{value:"\u5f15\u7528 Secret \u6ce8\u518c ComponentDefinition <code>webconsumer</code>",id:"\u5f15\u7528-secret-\u6ce8\u518c-componentdefinition-webconsumer",children:[]},{value:"\u51c6\u5907 TraitDefinition <code>service-binding</code> \u8fdb\u884c env-secret mapping",id:"\u51c6\u5907-traitdefinition-service-binding-\u8fdb\u884c-env-secret-mapping",children:[]}]}],p={toc:c};function l(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4e91\u670d\u52a1\u662f\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\u3002"),(0,i.kt)("h2",{id:"\u4e91\u670d\u52a1\u662f-component-\u8fd8\u662f-trait"},"\u4e91\u670d\u52a1\u662f Component \u8fd8\u662f Trait?"),(0,i.kt)("p",null,"\u53ef\u4ee5\u8003\u8651\u4ee5\u4e0b\u505a\u6cd5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ComponentDefinition")," \u7684\u573a\u666f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f60\u60f3\u8981\u5141\u8bb8\u6700\u7ec8\u7528\u6237\u660e\u786e\u58f0\u660e\u4e91\u670d\u52a1\u7684\u5b9e\u4f8b\u5e76\u4f7f\u7528\u5b83\uff0c\u5e76\u5728\u5220\u9664\u5e94\u7528\u7a0b\u5e8f\u65f6\u91ca\u653e\u8be5\u5b9e\u4f8b\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"TraitDefinition")," \u7684\u573a\u666f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f60\u4e0d\u60f3\u8ba9\u6700\u7ec8\u7528\u6237\u62e5\u6709\u58f0\u660e\u6216\u53d1\u5e03\u4e91\u670d\u52a1\u7684\u4efb\u4f55\u63a7\u5236\u6743\uff0c\u800c\u53ea\u60f3\u7ed9\u4ed6\u4eec\u6d88\u8d39\u4e91\u670d\u52a1\uff0c\u751a\u81f3\u53ef\u4ee5\u7531\u5176\u4ed6\u7cfb\u7edf\u7ba1\u7406\u7684\u4e91\u670d\u52a1\u7684\u65b9\u5f0f\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f1a\u5e7f\u6cdb\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"Service Binding")," \u7279\u6027\u3002")))),(0,i.kt)("p",null,"\u5728\u672c\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u5c06\u4ee5\u963f\u91cc\u4e91\u7684 RDS\uff08\u5173\u7cfb\u6570\u636e\u5e93\u670d\u52a1\uff09\u548c\u963f\u91cc\u4e91\u7684 OSS\uff08\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff09\u4e3a\u4f8b\u3002\u5728\u5355\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u5b83\u4eec\u662f Traits\uff0c\u5728\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u5b83\u4eec\u662f Components\u3002\u6b64\u673a\u5236\u4e0e\u5176\u4ed6\u4e91\u63d0\u4f9b\u5546\u76f8\u540c\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5\u548c\u914d\u7f6e-crossplane"},"\u5b89\u88c5\u548c\u914d\u7f6e Crossplane"),(0,i.kt)("p",null,"KubeVela \u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://crossplane.io/"},"Crossplane")," \u4f5c\u4e3a\u4e91\u670d\u52a1\u63d0\u4f9b\u5546\u3002\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/crossplane/provider-alibaba/releases/tag/v0.5.0"},"Installation")," \u5b89\u88c5 Crossplane Alibaba provider v0.5.0\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u914d\u7f6e\u4efb\u4f55\u5176\u4ed6 Crossplane providers\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://crossplane.io/docs/v1.1/getting-started/install-configure.html#select-a-getting-started-configuration"},"Crossplane Select a Getting Started Configuration"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl crossplane install provider crossplane/provider-alibaba:v0.5.0\n\n# \u6ce8\u610f\u8fd9\u91cc\u7684 xxx \u548c yyy \u662f\u4f60\u81ea\u5df1\u4e91\u8d44\u6e90\u7684 AccessKey \u548c SecretKey\u3002\n$ kubectl create secret generic alibaba-account-creds -n crossplane-system --from-literal=accessKeyId=xxx --from-literal=accessKeySecret=yyy\n\n$ kubectl apply -f provider.yaml\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"provider.yaml")," \u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: crossplane-system\n\n---\napiVersion: alibaba.crossplane.io/v1alpha1\nkind: ProviderConfig\nmetadata:\n  name: default\nspec:\n  credentials:\n    source: Secret\n    secretRef:\n      namespace: crossplane-system\n      name: alibaba-account-creds\n      key: credentials\n  region: cn-beijing\n")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u6211\u4eec\u76ee\u524d\u4ec5\u4f7f\u7528\u963f\u91cc\u63d0\u4f9b\u7684 Crossplane\u3002\u4f46\u662f\u5728\u4e0d\u4e45\u7684\u5c06\u6765\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://crossplane.io/"},"Crossplane")," \u4f5c\u4e3a Kubernetes \u7684\u4e91\u8d44\u6e90\u4f9b\u5e94\u5546\u3002"),(0,i.kt)("h2",{id:"\u6ce8\u518c-componentdefinition-\u548c-traitdefinition"},"\u6ce8\u518c ComponentDefinition \u548c TraitDefinition"),(0,i.kt)("h3",{id:"\u6ce8\u518c-componentdefinition-alibaba-rds-\u4e3a-rds-\u4e91\u8d44\u6e90\u751f\u4ea7\u8005"},"\u6ce8\u518c ComponentDefinition ",(0,i.kt)("inlineCode",{parentName:"h3"},"alibaba-rds")," \u4e3a RDS \u4e91\u8d44\u6e90\u751f\u4ea7\u8005"),(0,i.kt)("p",null,"\u5c06\u5de5\u4f5c\u8d1f\u8f7d\u7c7b\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"alibaba-rds")," \u6ce8\u518c\u5230 KubeVela\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-rds\n  namespace: vela-system\n  annotations:\n    definition.oam.dev/description: "Alibaba Cloud RDS Resource"\nspec:\n  workload:\n    definition:\n      apiVersion: database.alibaba.crossplane.io/v1alpha1\n      kind: RDSInstance\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "database.alibaba.crossplane.io/v1alpha1"\n            kind:       "RDSInstance"\n            spec: {\n                forProvider: {\n                    engine:                parameter.engine\n                    engineVersion:         parameter.engineVersion\n                    dbInstanceClass:       parameter.instanceClass\n                    dbInstanceStorageInGB: 20\n                    securityIPList:        "0.0.0.0/0"\n                    masterUsername:        parameter.username\n                }\n                writeConnectionSecretToRef: {\n                    namespace: context.namespace\n                    name:      parameter.secretName\n                }\n                providerConfigRef: {\n                    name: "default"\n                }\n                deletionPolicy: "Delete"\n            }\n        }\n        parameter: {\n            // +usage=RDS engine\n            engine: *"mysql" | string\n            // +usage=The version of RDS engine\n            engineVersion: *"8.0" | string\n            // +usage=The instance class for the RDS\n            instanceClass: *"rds.mysql.c1.large" | string\n            // +usage=RDS username\n            username: string\n            // +usage=Secret name which RDS connection will write to\n            secretName: string\n        }\n\n\n')),(0,i.kt)("h3",{id:"\u6ce8\u518c-componentdefinition-alibaba-oss-\u4e3a-oss-\u4e91\u8d44\u6e90\u751f\u4ea7\u8005"},"\u6ce8\u518c ComponentDefinition ",(0,i.kt)("inlineCode",{parentName:"h3"},"alibaba-oss")," \u4e3a OSS \u4e91\u8d44\u6e90\u751f\u4ea7\u8005"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-oss\n  namespace: vela-system\n  annotations:\n    definition.oam.dev/description: "Alibaba Cloud RDS Resource"\nspec:\n  workload:\n    definition:\n      apiVersion: oss.alibaba.crossplane.io/v1alpha1\n      kind: Bucket\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "oss.alibaba.crossplane.io/v1alpha1"\n            kind:       "Bucket"\n            spec: {\n                name:               parameter.name\n                acl:                parameter.acl\n                storageClass:       parameter.storageClass\n                dataRedundancyType: parameter.dataRedundancyType\n                writeConnectionSecretToRef: {\n                    namespace: context.namespace\n                    name:      parameter.secretName\n                }\n                providerConfigRef: {\n                    name: "default"\n                }\n                deletionPolicy: "Delete"\n            }\n        }\n        parameter: {\n            // +usage=OSS bucket name\n            name: string\n            // +usage=The access control list of the OSS bucket\n            acl: *"private" | string\n            // +usage=The storage type of OSS bucket\n            storageClass: *"Standard" | string\n            // +usage=The data Redundancy type of OSS bucket\n            dataRedundancyType: *"LRS" | string\n            // +usage=Secret name which RDS connection will write to\n            secretName: string\n        }\n\n')),(0,i.kt)("h3",{id:"\u5f15\u7528-secret-\u6ce8\u518c-componentdefinition-webconsumer"},"\u5f15\u7528 Secret \u6ce8\u518c ComponentDefinition ",(0,i.kt)("inlineCode",{parentName:"h3"},"webconsumer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: webconsumer\n  annotations:\n    definition.oam.dev/description: A Deployment provides declarative updates for Pods and ReplicaSets\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "Deployment"\n            spec: {\n                selector: matchLabels: {\n                    "app.oam.dev/component": context.name\n                }\n\n                template: {\n                    metadata: labels: {\n                        "app.oam.dev/component": context.name\n                    }\n\n                    spec: {\n                        containers: [{\n                            name:  context.name\n                            image: parameter.image\n\n                            if parameter["cmd"] != _|_ {\n                                command: parameter.cmd\n                            }\n\n                            if parameter["dbSecret"] != _|_ {\n                                env: [\n                                    {\n                                        name:  "username"\n                                        value: dbConn.username\n                                    },\n                                    {\n                                        name:  "endpoint"\n                                        value: dbConn.endpoint\n                                    },\n                                    {\n                                        name:  "DB_PASSWORD"\n                                        value: dbConn.password\n                                    },\n                                ]\n                            }\n\n                            ports: [{\n                                containerPort: parameter.port\n                            }]\n\n                            if parameter["cpu"] != _|_ {\n                                resources: {\n                                    limits:\n                                        cpu: parameter.cpu\n                                    requests:\n                                        cpu: parameter.cpu\n                                }\n                            }\n                        }]\n                }\n                }\n            }\n        }\n\n        parameter: {\n            // +usage=Which image would you like to use for your service\n            // +short=i\n            image: string\n\n            // +usage=Commands to run in the container\n            cmd?: [...string]\n\n            // +usage=Which port do you want customer traffic sent to\n            // +short=p\n            port: *80 | int\n\n            // +usage=Referred db secret\n            // +insertSecretTo=dbConn\n            dbSecret?: string\n\n            // +usage=Number of CPU units for the service, like `0.5` (0.5 CPU core), `1` (1 CPU core)\n            cpu?: string\n        }\n\n        dbConn: {\n            username: string\n            endpoint: string\n            password: string\n        }\n\n')),(0,i.kt)("p",null,"\u5173\u952e\u8bcd\u662f annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"// + insertSecretTo = dbConn"),"\uff0cKubeVela \u5c06\u77e5\u9053\u8be5\u53c2\u6570\u662f K8s \u7684 secret\uff0c\u5b83\u5c06\u89e3\u6790\u8be5 secret \u5e76\u5c06\u6570\u636e\u7ed1\u5b9a\u5230 CUE \u63a5\u53e3 ",(0,i.kt)("inlineCode",{parentName:"p"},"dbConn")," \u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"output")," \u53ef\u4ee5\u5f15\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"dbConn")," \u83b7\u53d6\u6570\u636e\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"dbConn")," \u7684\u540d\u79f0\u6ca1\u6709\u9650\u5236\u3002\n\u5173\u952e\u8bcd\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"+insertSecretTo"),"\uff0c\u5b83\u5b9a\u4e49\u4e86\u6570\u636e\u7ed1\u5b9a\u673a\u5236\u3002\u4ee5\u4e0a\u53ea\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,i.kt)("h3",{id:"\u51c6\u5907-traitdefinition-service-binding-\u8fdb\u884c-env-secret-mapping"},"\u51c6\u5907 TraitDefinition ",(0,i.kt)("inlineCode",{parentName:"h3"},"service-binding")," \u8fdb\u884c env-secret mapping"),(0,i.kt)("p",null,"\u81f3\u4e8e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u6570\u636e\u7ed1\u5b9a\uff0cKubeVela \u5efa\u8bae\u5b9a\u4e49\u4e00\u4e2a trait \u4ee5\u5b8c\u6210\u5de5\u4f5c\u3002\u6211\u4eec\u5df2\u7ecf\u51c6\u5907\u4e86\u4e00\u4e2a\u65b9\u4fbf\u7684 trait\u3002\u6b64 trait \u975e\u5e38\u9002\u5408\u5c06\u8d44\u6e90\u7684\u4fe1\u606f\u7ed1\u5b9a\u5230 pod spec \u7684\u73af\u5883\u53d8\u91cf\u4e2d."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "binding cloud resource secrets to pod env"\n  name: service-binding\nspec:\n  appliesToWorkloads:\n    - webservice\n    - worker\n  schematic:\n    cue:\n      template: |\n        patch: {\n            spec: template: spec: {\n                // +patchKey=name\n                containers: [{\n                    name: context.name\n                    // +patchKey=name\n                    env: [\n                        for envName, v in parameter.envMappings {\n                            name: envName\n                            valueFrom: {\n                                secretKeyRef: {\n                                    name: v.secret\n                                    if v["key"] != _|_ {\n                                        key: v.key\n                                    }\n                                    if v["key"] == _|_ {\n                                        key: envName\n                                    }\n                                }\n                            }\n                        },\n                    ]\n                }]\n            }\n        }\n\n        parameter: {\n            // +usage=The mapping of environment variables to secret\n            envMappings: [string]: [string]: string\n        }\n\n')),(0,i.kt)("p",null,"\u501f\u52a9\u8fd9\u79cd ",(0,i.kt)("inlineCode",{parentName:"p"},"service-binding")," trait\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u663e\u5f0f\u8bbe\u7f6e\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"envMappings"),"\uff0c\u4ee5\u6620\u5c04\u6240\u6709\u73af\u5883\u53d8\u91cf\u3002\u4f8b\u5b50\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn\n                key: password                                     # 1) If the env name is different from secret key, secret key has to be set.\n              endpoint:\n                secret: db-conn                                   # 2) If the env name is the same as the secret key, secret key can be omitted.\n              username:\n                secret: db-conn\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n                key: Bucket\n...\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"../end-user/components/cloud-services"},"the end user usage workflow")," \u4e86\u89e3\u5176\u4f7f\u7528\u65b9\u5f0f\u3002"))}l.isMDXComponent=!0}}]);