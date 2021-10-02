(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8725],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62256:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r={title:"Introduction"},p={unversionedId:"platform-engineers/oam/oam-model",id:"version-v1.1/platform-engineers/oam/oam-model",isDocsHomePage:!1,title:"Introduction",description:"This documentation will explain the core resource model of KubeVela which is fully powered by Open Application Model (OAM).",source:"@site/versioned_docs/version-v1.1/platform-engineers/oam/oam-model.md",sourceDirName:"platform-engineers/oam",slug:"/platform-engineers/oam/oam-model",permalink:"/docs/platform-engineers/oam/oam-model",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/oam/oam-model.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Introduction"},sidebar:"version-v1.1/docs",previous:{title:"Revisioning",permalink:"/docs/end-user/version-control"},next:{title:"X-Definition",permalink:"/docs/platform-engineers/oam/x-definition"}},l=[{value:"Application",id:"application",children:[]},{value:"Component",id:"component",children:[{value:"How it Works?",id:"how-it-works",children:[]}]},{value:"Traits",id:"traits",children:[]},{value:"Standard Contract Behind The Abstractions",id:"standard-contract-behind-the-abstractions",children:[]},{value:"No Configuration Drift",id:"no-configuration-drift",children:[]}],s={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This documentation will explain the core resource model of KubeVela which is fully powered by Open Application Model (OAM)."),(0,o.kt)("h2",{id:"application"},"Application"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Application")," is the core API of KubeVela. It allows End User to work with a single artifact to capture the complete application deployment with simplified primitives. "),(0,o.kt)("p",null,'This provides a simpler path for on-boarding End User to the platform without leaking low level details in runtime infrastructure. For example, they will be able to declare a "web service" without defining a detailed Kubernetes Deployment + Service combo each time, or claim the auto-scaling requirements without referring to the underlying KEDA ScaleObject. They can also declare a cloud database with same API if they want.'),(0,o.kt)("p",null,"Every application is composed by multiple components with attachable operational behaviors (traits). For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: application-sample\nspec:\n  components:\n    - name: foo\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n        - type: sidecar\n          properties:\n            name: "logging"\n            image: "fluentd"\n    - name: bar\n      type: aliyun-oss # cloud service\n      bucket: "my-bucket"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," resource in KubeVela is a LEGO-style entity and does not even have fixed schema. Instead, it is assembled by below building block entities that are maintained by the platform-engineers.\nThough the application object doesn't have fixed schema, it is a composition object assembled by several ",(0,o.kt)("em",{parentName:"p"},"programmable building blocks")," as shown below."),(0,o.kt)("h2",{id:"component"},"Component"),(0,o.kt)("p",null,"The component model (",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," API) is designed to allow ",(0,o.kt)("em",{parentName:"p"},"component providers")," to encapsulate deployable/provisionable entities with a wide range of tools, and hence give a easier path to End User to deploy complicated microservices across hybrid environments at ease. A component normally carries its workload type description (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"WorkloadDefinition"),"), a encapsulation module with a parameter list."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hence, a components provider could be anyone who packages software components in form of Helm chart of CUE modules. Think about 3rd-party software distributor, DevOps team, or even your CI pipeline.")),(0,o.kt)("p",null,"Components are shareable and reusable. For example, by referencing the same ",(0,o.kt)("em",{parentName:"p"},"Alibaba Cloud RDS")," component and setting different parameter values, End User could easily provision Alibaba Cloud RDS instances of different sizes in different availability zones."),(0,o.kt)("p",null,"End User will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," entity to declare how they want to instantiate and deploy a group of certain components. In above example, it describes an application composed with Kubernetes stateless workload (component ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),") and a Alibaba Cloud OSS bucket (component ",(0,o.kt)("inlineCode",{parentName:"p"},"bar"),") alongside."),(0,o.kt)("h3",{id:"how-it-works"},"How it Works?"),(0,o.kt)("p",null,"In above example, ",(0,o.kt)("inlineCode",{parentName:"p"},"type: worker")," means the specification of this component (claimed in following ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," section) will be enforced by a ",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentDefinition")," object named ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: ComponentDefinition\nmetadata:\n  name: worker\n  annotations:\n    definition.oam.dev/description: "Describes long-running, scalable, containerized services that running at backend. They do NOT have network endpoint to receive external network traffic."\nspec:\n  workload:\n    definition:\n      apiVersion: apps/v1\n      kind: Deployment\n  schematic:\n    cue:\n      template: |\n        output: {\n          apiVersion: "apps/v1"\n          kind:       "Deployment"\n          spec: {\n            selector: matchLabels: {\n              "app.oam.dev/component": context.name\n            }\n            template: {\n              metadata: labels: {\n                "app.oam.dev/component": context.name\n              }\n              spec: {\n                containers: [{\n                  name:  context.name\n                  image: parameter.image\n\n                  if parameter["cmd"] != _|_ {\n                    command: parameter.cmd\n                  }\n                }]\n              }\n            }\n          }\n        }\n        parameter: {\n          image: string\n          cmd?: [...string]\n        }\n')),(0,o.kt)("p",null,"Hence, the ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," section of ",(0,o.kt)("inlineCode",{parentName:"p"},"backend")," only exposes two parameters to fill: ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cmd"),", this is enforced by the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter")," list of the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.template")," field of the definition."),(0,o.kt)("h2",{id:"traits"},"Traits"),(0,o.kt)("p",null,"Traits (",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," API) are operational features provided by the platform. A trait augments the component instance with operational behaviors such as load balancing policy, network ingress routing, auto-scaling policies, or upgrade strategies, etc."),(0,o.kt)("p",null,"To attach a trait to component instance, the user will declare ",(0,o.kt)("inlineCode",{parentName:"p"},".type")," field to reference the specific ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},".properties")," field to set property values of the given trait. Similarly, ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," also allows you to define ",(0,o.kt)("em",{parentName:"p"},"template")," for operational features."),(0,o.kt)("p",null,"In the above example, ",(0,o.kt)("inlineCode",{parentName:"p"},"type: autoscaler")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," means the specification (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," section) of this trait will be enforced by a ",(0,o.kt)("inlineCode",{parentName:"p"},"TraitDefinition")," object named ",(0,o.kt)("inlineCode",{parentName:"p"},"autoscaler")," as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "configure k8s HPA for Deployment"\n  name: hpa\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  schematic:\n    cue:\n      template: |\n        outputs: hpa: {\n          apiVersion: "autoscaling/v2beta2"\n          kind:       "HorizontalPodAutoscaler"\n          metadata: name: context.name\n          spec: {\n            scaleTargetRef: {\n              apiVersion: "apps/v1"\n              kind:       "Deployment"\n              name:       context.name\n            }\n            minReplicas: parameter.min\n            maxReplicas: parameter.max\n            metrics: [{\n              type: "Resource"\n              resource: {\n                name: "cpu"\n                target: {\n                  type:               "Utilization"\n                  averageUtilization: parameter.cpuUtil\n                }\n              }\n            }]\n          }\n        }\n        parameter: {\n          min:     *1 | int\n          max:     *10 | int\n          cpuUtil: *50 | int\n        }\n')),(0,o.kt)("p",null,"The application also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar")," trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: TraitDefinition\nmetadata:\n  annotations:\n    definition.oam.dev/description: "add sidecar to the app"\n  name: sidecar\nspec:\n  appliesToWorkloads:\n    - deployments.apps\n  schematic:\n    cue:\n      template: |-\n        patch: {\n           // +patchKey=name\n           spec: template: spec: containers: [parameter]\n        }\n        parameter: {\n           name: string\n           image: string\n           command?: [...string]\n        }\n')),(0,o.kt)("p",null,"Please note that the End User do NOT need to know about definition objects, they learn how to use a given capability with visualized forms (or the JSON schema of parameters if they prefer). Please check the ",(0,o.kt)("a",{parentName:"p",href:"../openapi-v3-json-schema"},"Generate Forms from Definitions")," section about how this is achieved."),(0,o.kt)("h2",{id:"standard-contract-behind-the-abstractions"},"Standard Contract Behind The Abstractions"),(0,o.kt)("p",null,"Once the application is deployed, KubeVela will index and manage the underlying instances with name, revisions, labels and selector etc in automatic approach. These metadata are shown as below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Label"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"workload.oam.dev/type=<component definition name>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",(0,o.kt)("inlineCode",{parentName:"td"},"ComponentDefinition"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"trait.oam.dev/type=<trait definition name>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of its corresponding ",(0,o.kt)("inlineCode",{parentName:"td"},"TraitDefinition"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"app.oam.dev/name=<app name>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of the application it belongs to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"app.oam.dev/component=<component name>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of the component it belongs to")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"trait.oam.dev/resource=<name of trait resource instance>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of trait resource instance")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"app.oam.dev/appRevision=<name of app revision>")),(0,o.kt)("td",{parentName:"tr",align:"center"},"The name of the application revision it belongs to")))),(0,o.kt)("p",null,'Consider these metadata as a standard contract for any "day 2" operation controller such as rollout controller to work on KubeVela deployed applications. This is the key to ensure the interoperability for KubeVela based platform as well.'),(0,o.kt)("h2",{id:"no-configuration-drift"},"No Configuration Drift"),(0,o.kt)("p",null,"Despite the efficiency and extensibility in abstracting application deployment, IaC (Infrastructure-as-Code) tools may lead to an issue called ",(0,o.kt)("em",{parentName:"p"},"Infrastructure/Configuration Drift"),", i.e. the generated component instances are not in line with the expected configuration. This could be caused by incomplete coverage, less-than-perfect processes or emergency changes. This makes them can be barely used as a platform level building block."),(0,o.kt)("p",null,"Hence, KubeVela is designed to maintain all these programmable capabilities with ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/controller/"},"Kubernetes Control Loop")," and leverage Kubernetes control plane to eliminate the issue of configuration drifting, while still keeps the flexibly and velocity enabled by IaC."))}c.isMDXComponent=!0}}]);