(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[646],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?o.createElement(y,i(i({ref:n},p),{},{components:t})):o.createElement(y,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17523:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=t(22122),a=t(19756),r=(t(67294),t(3905)),i={title:"The Application Model"},l={unversionedId:"core-concepts/application",id:"version-v1.1/core-concepts/application",isDocsHomePage:!1,title:"The Application Model",description:"KubeVela introduces Open Application Model (OAM) to capture a full deployment of micro-services application across hybrid environments.",source:"@site/versioned_docs/version-v1.1/core-concepts/application.md",sourceDirName:"core-concepts",slug:"/core-concepts/application",permalink:"/docs/core-concepts/application",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/core-concepts/application.md",version:"v1.1",lastUpdatedBy:"Lei Zhang (Harry)",lastUpdatedAt:1633157757,formattedLastUpdatedAt:"10/2/2021",frontMatter:{title:"The Application Model"},sidebar:"version-v1.1/docs",previous:{title:"Architecture",permalink:"/docs/core-concepts/architecture"},next:{title:"Jenkins CI/CD",permalink:"/docs/case-studies/jenkins-cicd"}},s=[{value:"Application",id:"application",children:[]},{value:"Components",id:"components",children:[]},{value:"Traits",id:"traits",children:[]},{value:"Policy",id:"policy",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],c={toc:s};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"KubeVela introduces Open Application Model (OAM) to capture a full deployment of micro-services application across hybrid environments."),(0,r.kt)("h2",{id:"application"},"Application"),(0,r.kt)("p",null,"With this model, a typical deployment plan in KubeVela looks as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# sample.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend              # e.g. we want to deploy a frontend component and serves as web service\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: cpuscaler         # e.g. we add a CPU based auto scaler to this component\n          properties:\n            min: 1\n            max: 10\n            cpuPercent: 60\n        - type: sidecar           # add a sidecar container into this component\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n  policies:\n    - name: demo-policy\n      type: env-binding\n      properties:\n        envs:\n          - name: test\n            placement:\n              clusterSelector:\n                name: cluster-test\n          - name: prod\n            placement:\n              clusterSelector:\n                name: cluster-prod\n  workflow:\n    steps:\n      #workflow step name\n      - name: deploy-test-env\n        type: deploy2env\n        properties:\n          # Specify the policy name\n          policy: demo-policy\n          # Specify the env name in the policy\n          env: test    \n      - name: manual-approval\n        # use suspend can stop workflow and wait here until condition changed\n        type: suspend\n      - name: deploy-prod-env\n        type: deploy2env\n        properties:\n          # Specify the policy name\n          policy: demo-policy\n          # Specify the env name in the policy\n          env: prod    \n')),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"An application could be composed by multiple components. KubeVela already built-in with several widely used components definitions to help you model an application deployment, you can list them by using ",(0,r.kt)("a",{parentName:"p",href:"../install#3-get-kubevela-cli"},"KubeVela CLI"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela components \n")),(0,r.kt)("p",null,"The output shows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME            NAMESPACE   WORKLOAD                                DESCRIPTION\nhelm            vela-system autodetects.core.oam.dev                helm release is a group of K8s resources from either git\n                                                                    repository or helm repo\nkustomize       vela-system autodetects.core.oam.dev                kustomize can fetching, building, updating and applying\n                                                                    Kustomize manifests from git repo.\ntask            vela-system jobs.batch                              Describes jobs that run code or a script to completion.\nwebservice      vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                    that have a stable network endpoint to receive external\n                                                                    network traffic from customers.\nworker          vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                    that running at backend. They do NOT have network endpoint\n                                                                    to receive external network traffic.                    \nalibaba-ack     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud ACK cluster\nalibaba-oss     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud OSS object\nalibaba-rds     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object\n")),(0,r.kt)("h2",{id:"traits"},"Traits"),(0,r.kt)("p",null,"Traits are operational behaviors that you can attach to component. KubeVela also has built-in traits installed, search them by using ",(0,r.kt)("a",{parentName:"p",href:"../install#3-get-kubevela-cli"},"KubeVela CLI"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"vela traits \n")),(0,r.kt)("p",null,"The result can be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION                                          \nannotations vela-system deployments.apps                    true            Add annotations for your Workload.                   \ncpuscaler   vela-system webservice,worker                   false           Automatically scale the component based on CPU usage.\ningress     vela-system webservice,worker                   false           Enable public web traffic for the component.         \nlabels      vela-system deployments.apps                    true            Add labels for your Workload.                        \nscaler      vela-system webservice,worker                   false           Manually scale the component.                        \nsidecar     vela-system deployments.apps                    true            Inject a sidecar container to the component.   \n")),(0,r.kt)("h2",{id:"policy"},"Policy"),(0,r.kt)("p",null,"Policy enforces deployment process of the application, such as quality gates, security groups, placement strategy, fire walls, SLO targets and so on."),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"Workflow allows you to assemble components, operation and task steps into a DAG, and it is process-oriented. Typical workflow steps includes pause, manual verification, waiting state, data flow transmission, multi-environment grayscale, and A/B testing, etc."),(0,r.kt)("p",null,"Each workflow step is a independent capability entity that is fully plugable, KubeVela allows you to create your own step through CUE."),(0,r.kt)("h2",{id:"whats-next"},"What's Next"),(0,r.kt)("p",null,"Here are some recommended next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start using KubeVela from deploying ",(0,r.kt)("a",{parentName:"li",href:"../end-user/components/helm"},"Helm component"),"."),(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",{parentName:"li",href:"../platform-engineers/oam/oam-model"},"Open Application Model"),".")))}p.isMDXComponent=!0}}]);