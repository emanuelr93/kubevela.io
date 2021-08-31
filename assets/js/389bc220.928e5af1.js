(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[65598],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22867:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=a(22122),i=a(19756),o=(a(67294),a(3905)),r={title:"KubeVela - The Extensible App Platform Based on Open Application Model and Kubernetes",author:"Lei Zhang and Fei Guo",author_title:"CNCF TOC Member/Kubernetes",author_url:"https://github.com/JoelMarcey",author_image_url:"https://avatars.githubusercontent.com/u/1701782?s=200&v=4",tags:["kubevela"],description:"The Extensible App Platform Based on Open Application Model and Kubernetes",image:"https://tva1.sinaimg.cn/large/ad5fbf65gy1glgj5q8inej208g049aa6.jpg",hide_table_of_contents:!1},l={permalink:"/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes.md",source:"@site/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes.md",title:"KubeVela - The Extensible App Platform Based on Open Application Model and Kubernetes",description:"The Extensible App Platform Based on Open Application Model and Kubernetes",date:"2021-08-31T02:05:12.120Z",formattedDate:"August 31, 2021",tags:[{label:"kubevela",permalink:"/blog/tags/kubevela"}],readingTime:7.185,truncated:!1,prevItem:{title:"KubeVela Performance Test - Managing Massive Applications",permalink:"/blog/kubevela-performance-test"}},s=[{value:"Introducing KubeVela",id:"introducing-kubevela",children:[{value:"A Sample Appfile",id:"a-sample-appfile",children:[]},{value:"Behind the Appfile",id:"behind-the-appfile",children:[]}]},{value:"Vela Up",id:"vela-up",children:[]},{value:"KubeVela for Platform Builders",id:"kubevela-for-platform-builders",children:[]},{value:"Not Another PaaS System",id:"not-another-paas-system",children:[]},{value:"Learn More",id:"learn-more",children:[]}],p={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"7 Dec 2020 12:33pm, by Lei Zhang and Fei Guo")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva1.sinaimg.cn/large/ad5fbf65gy1glgj5q8inej208g049aa6.jpg",alt:"image"})),(0,o.kt)("p",null,"Last month at KubeCon+CloudNativeCon 2020, the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/spec"},"Open Application Model (OAM)")," community launched ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/"},"KubeVela"),", an easy-to-use yet highly extensible application platform based on OAM and Kubernetes."),(0,o.kt)("p",null,"For developers, KubeVela is an easy-to-use tool that enables you to describe and ship applications to Kubernetes with minimal effort, yet for platform builders, KubeVela serves as a framework that empowers them to create developer-facing yet fully extensible platforms at ease."),(0,o.kt)("p",null,"The trend of cloud native technology is moving towards pursuing consistent application delivery across clouds and on-premises infrastructures using Kubernetes as the common abstraction layer. Kubernetes, although excellent in abstracting low-level infrastructure details, does introduce extra complexity to application developers, namely understanding the concepts of pods, port exposing, privilege escalation, resource claims, CRD, and so on. We\u2019ve seen the nontrivial learning curve and the lack of developer-facing abstraction have impacted user experiences, slowed down productivity, led to unexpected errors or misconfigurations in production."),(0,o.kt)("p",null,"Abstracting Kubernetes to serve developers\u2019 requirements is a highly opinionated process, and the resultant abstractions would only make sense had the decision-makers been the platform builders. Unfortunately, the platform builders today face the following dilemma: There is no tool or framework for them to easily extend the abstractions if any."),(0,o.kt)("p",null,"Thus, many platforms today introduce restricted abstractions and add-on mechanisms despite the extensibility of Kubernetes. This makes easily extending such platforms for developers\u2019 requirements or to wider scenarios almost impossible."),(0,o.kt)("p",null,"In the end, developers complain those platforms are too rigid and slow in response to feature requests or improvements. The platform builders do want to help but the engineering effort is daunting: any simple API change in the platform could easily become a marathon negotiation around the opinionated abstraction design."),(0,o.kt)("h2",{id:"introducing-kubevela"},"Introducing KubeVela"),(0,o.kt)("p",null,"With KubeVela, we aim to solve these two challenges in an approach that separates concerns of developers and platform builders."),(0,o.kt)("p",null,"For developers, KubeVela is an easy-to-use yet extensible tool that enables you to describe and deploy microservices applications with minimal effort. And instead of managing a handful of Kubernetes YAML files, a simple docker-compose style ",(0,o.kt)("inlineCode",{parentName:"p"},"appfile")," is all you need."),(0,o.kt)("h3",{id:"a-sample-appfile"},"A Sample Appfile"),(0,o.kt)("p",null,"In this example, we will create a vela.yaml along with your app. This file describes how to build the image, how to deploy the image to Kubernetes, how to access the application and how the system would scale it automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n    express-server:\n      image: oamdev/testapp:v1\n      build:\n        docker:\n          file: Dockerfile\n          contrxt: .\n      cmd: ["node", "server.js"]\n      port: 8080\n      cpu: "0.01"\n\n      route:\n        domain: example.com\n        rules:\n          - path: /testapp\n            rewriteTarget: /\n\n      autoscale:\n        min: 1\n        max: 4\n        cpuPercent: 5\n')),(0,o.kt)("p",null,"Just do: ",(0,o.kt)("inlineCode",{parentName:"p"},"$ vela up"),", your app will then be alive on  ",(0,o.kt)("a",{parentName:"p",href:"https://example.com/testapp"},"https://example.com/testapp"),"."),(0,o.kt)("h3",{id:"behind-the-appfile"},"Behind the Appfile"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"appfile")," in KubeVela does not have a fixed schema specification, instead, what you can define in this file is determined by what kind of workload types and traits are available in your platform. These two concepts are core concepts from OAM, in detail:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubevela.io/%23/en/concepts?id=workload-type-amp-trait"},"Workload type"),", which declares the characteristics that runtime infrastructure should take into account in application deployment. In the sample above, it defines a \u201cWeb Service\u201d workload named ",(0,o.kt)("inlineCode",{parentName:"li"},"express-server")," as part of your application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubevela.io/%23/en/concepts?id=workload-type-amp-trait"},"Trait"),", which represents the operation configurations that are attached to an instance of workload type. Traits augment a workload type instance with operational features. In the sample above, it defines a route trait to access the application and an autoscale trait for the CPU based horizontal automatic scaling policy.")),(0,o.kt)("p",null,"Whenever a new workload type or trait is added, it would become immediately available to be declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"appfile"),". Let\u2019s say, a new trait named metrics is added, developers could check the schema of this trait by simply ",(0,o.kt)("inlineCode",{parentName:"p"},"$ vela show metrics")," and define it in the previous sample ",(0,o.kt)("inlineCode",{parentName:"p"},"appfile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'name: testapp\n\nservices:\n    express-server:\n      type: webservice\n      image: oamdev/testapp:v1\n      build:\n        docker:\n          file: Dockerfile\n          contrxt: .\n      cmd: ["node", "server.js"]\n      port: 8080\n      cpu: "0.01"\n\n      route:\n        domain: example.com\n        rules:\n          - path: /testapp\n            rewriteTarget: /\n\n      autoscale:\n        min: 1\n        max: 4\n        cpuPercent: 5\n\n      metrices:\n        port: 8080\n        path: "/metrics"\n        scheme: "http"\n        enabled: true\n')),(0,o.kt)("h2",{id:"vela-up"},"Vela Up"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vela up")," command deploys the application defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"appfile")," to Kubernetes. After deployment, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"vela status")," to check how to access your application following the ",(0,o.kt)("inlineCode",{parentName:"p"},"route")," trait declared in ",(0,o.kt)("inlineCode",{parentName:"p"},"appfile"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tvax2.sinaimg.cn/large/ad5fbf65gy1glf9pyhr42j20la0kiafn.jpg",alt:null})),(0,o.kt)("p",null,"Apps deployed with KubeVela will receive a URL (and versioned pre-release URLs) with valid TLS certificate automatically generated via ",(0,o.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/"},"cert-manager"),". KubeVela also provides a set of commands (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"vela logs, vela exec"),") to best support your application management without becoming a Kubernetes expert. ",(0,o.kt)("a",{parentName:"p",href:"https://kubevela.io/%23/en/developers/learn-appfile"},"Learn more about vela up and appfile"),"."),(0,o.kt)("h2",{id:"kubevela-for-platform-builders"},"KubeVela for Platform Builders"),(0,o.kt)("p",null,"The above experience cannot be achieved without KubeVela\u2019s innovative offerings to the platform builders as an extensible platform engine. These features are the hidden gems that make KubeVela unique. In details, KubeVela relieves the pains of building developer facing platforms on Kubernetes by doing the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application Centric"),". Behind the appfile, KubeVela enforces \u201capplication\u201d as its main API and all KubeVela\u2019s capabilities serve the applications\u2019 requirements only. This is how KubeVela brings application-centric context to the platform by default and changes building such platforms into working around application architecture."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extending Natively"),". As mentioned in the developer section, an application described by appfile is composed of various pluggable workload types and operation features (i.e. traits). Capabilities from Kubernetes ecosystem can be added to KubeVela as new workload types or traits through Kubernetes CRD registry mechanism at any time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple yet Extensible User Interface"),". Behind the ",(0,o.kt)("inlineCode",{parentName:"li"},"appfile"),", KubeVela uses ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cuelang/cue"},"CUELang")," as the \u201clast mile\u201d abstraction engine between user-facing schema and the control plane objects. KubeVela provides a set of built-in abstractions to start with and the platform builders are free to modify them at any time. Capability adding/updating or abstraction changes will all take effect at runtime, neither recompilation nor redeployment of KubeVela is required.")),(0,o.kt)("p",null,"Under the hood, KubeVela core is built on top of Crossplane OAM Kubernetes Runtime with KEDA, Flagger, Prometheus, etc as dependencies, yet its feature pool is \u201cunlimited\u201d and can be extended at any time."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://tva2.sinaimg.cn/large/ad5fbf65gy1glf9sktkdxj20q00dsacl.jpg",alt:null})),(0,o.kt)("p",null,"With KubeVela, platform builders now have the tooling support to design and ship any new capabilities with abstractions to end-users with high confidence and low turnaround time. And for a developer, you only need to learn these abstractions, describe the app with them in a single file, and then ship it."),(0,o.kt)("h2",{id:"not-another-paas-system"},"Not Another PaaS System"),(0,o.kt)("p",null,"Most typical Platform-as-a-Service (PaaS) systems also provide full application management capabilities and aim to improve developer experience and efficiency. In this context, KubeVela shares the same goal."),(0,o.kt)("p",null,"Though unlike most typical PaaS systems which are either inextensible or create their own addon systems maintained by their own communities. KubeVela is designed to fully leverage the Kubernetes ecosystems as its capability pool. Hence, there\u2019s no additional addon system introduced in this project. For platform builders, a new capability can be installed in KubeVela at any time by simply registering its API resource to OAM and providing a CUE template. We hope and expect that with the help of the open source community, the number of the KubeVela\u2019s capabilities will grow dramatically over time. ",(0,o.kt)("a",{parentName:"p",href:"https://kubevela.io/%23/en/developers/cap-center"},"Learn more about using community capabilities by $vela cap"),"."),(0,o.kt)("p",null,"So in a nutshell, KubeVela is a Kubernetes plugin for building application-centric abstractions. It leverages the native Kubernetes extensibility and capabilities to resolve a hard problem \u2013 making application management enjoyable on Kubernetes."),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("p",null,"KubeVela is incubated by the OAM community as the successor of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/rudr"},"Rudr")," project, while rather than being a reference implementation, KubeVela intends to be an end-to-end implementation that could be used in wider scenarios. The design of KubeVela\u2019s appfile is also part of the experimental attempt in OAM specification to bring a simplified user experience to developers."),(0,o.kt)("p",null,"To learn more about KubeVela, please visit KubeVela\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://kubevela.io/"},"documentation site"),". The following content are also good next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try out KubeVela following the ",(0,o.kt)("a",{parentName:"li",href:"https://kubevela.io/%23/en/quick-start"},"step-by-step tutorial")," in its Quick Start page."),(0,o.kt)("li",{parentName:"ul"},"Give us feedback! KubeVela is still in its early stage and we are happy to ask the community for feedback via OAM ",(0,o.kt)("a",{parentName:"li",href:"https://gitter.im/oam-dev/community"},"Gitter")," or ",(0,o.kt)("a",{parentName:"li",href:"https://cloud-native.slack.com/archives/C01BLQ3HTJA"},"Slack channel"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubevela.io/%23/en/platform-engineers/trait"},"Extend KubeVela")," to build your own platforms. If you have an idea for a new workload type, trait or try to build something more complex like a database or AI PaaS with KubeVela, post your idea as a GitHub Issue or propose it to the OAM community, we are eager to know."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/master/CONTRIBUTING.md"},"Contribute to KubeVela"),". KubeVela is initialized by the open source community with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/blob/bbb2c527d96d3e1a0694e2f49b3d1d1168e72c53/OWNERS_ALIASES%23L35"},"bootstrap contributors")," from 8+ different organizations. We intend to donate this project to a neutral foundation as soon as it gets stable.")))}u.isMDXComponent=!0}}]);