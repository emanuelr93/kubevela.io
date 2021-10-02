(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5636],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93866:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={title:"Architecture"},l={unversionedId:"core-concepts/architecture",id:"version-v1.1/core-concepts/architecture",isDocsHomePage:!1,title:"Architecture",description:"The overall architecture of KubeVela is shown as below:",source:"@site/versioned_docs/version-v1.1/core-concepts/architecture.md",sourceDirName:"core-concepts",slug:"/core-concepts/architecture",permalink:"/docs/core-concepts/architecture",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/core-concepts/architecture.md",version:"v1.1",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1633157757,formattedLastUpdatedAt:"10/2/2021",frontMatter:{title:"Architecture"},sidebar:"version-v1.1/docs",previous:{title:"Deploy First Application",permalink:"/docs/quick-start"},next:{title:"The Application Model",permalink:"/docs/core-concepts/application"}},c=[{value:"KubeVela is a Control Plane System",id:"kubevela-is-a-control-plane-system",children:[{value:"Runtime Infrastructure",id:"runtime-infrastructure",children:[]}]},{value:"KubeVela is Programmable",id:"kubevela-is-programmable",children:[]}],s={toc:c};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The overall architecture of KubeVela is shown as below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:n(51810).Z})),(0,i.kt)("h2",{id:"kubevela-is-a-control-plane-system"},"KubeVela is a Control Plane System"),(0,i.kt)("p",null,"KubeVela orchestrates application components, cloud resources and pipeline over multiple clusters and hybrid environments. It is designed to be an application delivery and management control plane instead of a runtime plugin."),(0,i.kt)("p",null,"For easy integration with upstream CI pipelines and GitOps tools, KubeVela API (i.e. Open Application Model) are designed as declarative and application-centric, including:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Application")," for designing application deployment plan."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"X-Definitions")," for managing the abstraction and capabilities of KubeVela with CUE."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"ComponentDefinition"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"TraitDefinition"),", etc.")),(0,i.kt)("p",null,"In implementation, KubeVela relies on a dedicated Kubernetes cluster to achieve above goals. We chose to rely on Kubernetes as the control plane implementation because this approach is battle tested and brings determinism, convergence and automation to application management at scale. In detail, KubeVela is composed by several parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Plugin Registry")," that registers and manages ",(0,i.kt)("inlineCode",{parentName:"li"},"X-Definitions"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Core Controller")," that provides the core control logic of the entire system. For example, handling KubeVela API resources, orchestrating workflow, storing revisions, parsing and executing CUE code, garbage collecting, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Addon Controllers")," that register and manage built-in addons that KubeVela needed to work. For example, Flux and Terraform controller.")),(0,i.kt)("p",null,'This control plane Kubernetes cluster will be referenced as the "control plane cluster" in the following documentation. '),(0,i.kt)("h3",{id:"runtime-infrastructure"},"Runtime Infrastructure"),(0,i.kt)("p",null,"The runtime infrastructure is where the applications are actually running on.\nKubeVela itself is fully runtime infrastructure agnostic and hence allows you to deploy application to both Kubernetes based infrastructure and non-Kubernetes environments such as cloud platforms and edge devices."),(0,i.kt)("h2",{id:"kubevela-is-programmable"},"KubeVela is Programmable"),(0,i.kt)("p",null,"In real world, application deployment tends to be complex and varies from teams, environments and scenarios. Hence, KubeVela introduced a fully programmable approach to implement its deployment model so it can adapt to every need of your application delivery use case in-place."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:n(28615).Z})),(0,i.kt)("p",null,"For learning how to program KubeVela in detail, please check the ",(0,i.kt)("inlineCode",{parentName:"p"},"Administrator Manuals")," in the documentation site."))}u.isMDXComponent=!0},28615:function(e,t,n){"use strict";t.Z=n.p+"assets/images/kernel-feb9c61fe2bdc7480bd89e57f7bf59fe.png"},51810:function(e,t,n){"use strict";t.Z=n.p+"assets/images/system-arch-4c7720bc20a26631979cc443116714c7.png"}}]);