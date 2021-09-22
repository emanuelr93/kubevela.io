(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4579],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(f,r(r({ref:n},c),{},{components:t})):a.createElement(f,r({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35314:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=t(22122),o=t(19756),i=(t(67294),t(3905)),r={title:"CUE Advanced"},s={unversionedId:"platform-engineers/cue/advanced",id:"version-v1.1/platform-engineers/cue/advanced",isDocsHomePage:!1,title:"CUE Advanced",description:"This section will introduce how to use CUE to deliver KubeVela modules. You can can dynamically expand the platform as user needs change, adapt to growing number of users and scenarios, and meet the iterative demands of the company's long-term business development.",source:"@site/versioned_docs/version-v1.1/platform-engineers/cue/advanced.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/advanced",permalink:"/docs/platform-engineers/cue/advanced",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cue/advanced.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"CUE Advanced"},sidebar:"version-v1.1/docs",previous:{title:"Manage X-Definition",permalink:"/docs/platform-engineers/cue/definition-edit"},next:{title:"CUE Components",permalink:"/docs/platform-engineers/components/custom-component"}},l=[{value:"Convert Kubernetes API Objects Into Custom Components",id:"convert-kubernetes-api-objects-into-custom-components",children:[]},{value:"Define Customized Parameters For Component",id:"define-customized-parameters-for-component",children:[]},{value:"Dry-run",id:"dry-run",children:[]},{value:"Use <code>context</code> to get runtime information",id:"use-context-to-get-runtime-information",children:[]},{value:"Add Traits On Demand",id:"add-traits-on-demand",children:[]},{value:"Summarize",id:"summarize",children:[]},{value:"Next",id:"next",children:[]}],p={toc:l};function c(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section will introduce how to use CUE to deliver KubeVela modules. You can can dynamically expand the platform as user needs change, adapt to growing number of users and scenarios, and meet the iterative demands of the company's long-term business development."),(0,i.kt)("h2",{id:"convert-kubernetes-api-objects-into-custom-components"},"Convert Kubernetes API Objects Into Custom Components"),(0,i.kt)("p",null,"Let's take the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"Kubernetes StatefulSet")," as an example to show how to use KubeVela to build custom modules and provide capabilities."),(0,i.kt)("p",null,"Save the YAML example of StatefulSet in the official document locally and name it as ",(0,i.kt)("inlineCode",{parentName:"p"},"my-stateful.yaml"),", then execute commande as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' vela def init my-stateful -t component --desc "My StatefulSet component." --template-yaml ./my-stateful.yaml -o my-stateful.cue\n')),(0,i.kt)("p",null,'View the generated "my-stateful.cue" file:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ cat my-stateful.cue\n"my-stateful": {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "<change me> apps/v1"\n        kind:       "<change me> Deployment"\n    }\n    description: "My StatefulSet component."\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        apiVersion: "v1"\n        kind:       "Service"\n            ... // omit non-critical info\n    }\n    outputs: web: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n            ... // omit non-critical info\n    }\n    parameter: {}\n}\n')),(0,i.kt)("p",null,"Modify the generated file as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The example of the official StatefulSet website is a composite component composed of two objects ",(0,i.kt)("inlineCode",{parentName:"li"},"StatefulSet")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Service"),". According to KubeVela ",(0,i.kt)("a",{parentName:"li",href:"../components/custom-component#composition"},"Rules for customize components"),", in composite components, core workloads such as StatefulSet need to be represented by the ",(0,i.kt)("inlineCode",{parentName:"li"},"template.output")," field, and other auxiliary objects are represented by ",(0,i.kt)("inlineCode",{parentName:"li"},"template.outputs"),", so we make some adjustments and all the automatically generated output and outputs are switched."),(0,i.kt)("li",{parentName:"ol"},"Then we fill in the apiVersion and kind data of the core workload into the part marked as ",(0,i.kt)("inlineCode",{parentName:"li"},"<change me>"))),(0,i.kt)("p",null,"After modification, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def vet")," to do format check and verification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ vela def vet my-stateful.cue\nValidation succeed.\n")),(0,i.kt)("p",null,"The file after two steps of changes is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ cat my-stateful.cue\n"my-stateful": {\n    annotations: {}\n    attributes: workload: definition: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n    }\n    description: "My StatefulSet component."\n    labels: {}\n    type: "component"\n}\n\ntemplate: {\n    output: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n        metadata: name: "web"\n        spec: {\n            selector: matchLabels: app: "nginx"\n            replicas:    3\n            serviceName: "nginx"\n            template: {\n                metadata: labels: app: "nginx"\n                spec: {\n                    containers: [{\n                        name: "nginx"\n                        ports: [{\n                            name:          "web"\n                            containerPort: 80\n                        }]\n                        image: "k8s.gcr.io/nginx-slim:0.8"\n                        volumeMounts: [{\n                            name:      "www"\n                            mountPath: "/usr/share/nginx/html"\n                        }]\n                    }]\n                    terminationGracePeriodSeconds: 10\n                }\n            }\n            volumeClaimTemplates: [{\n                metadata: name: "www"\n                spec: {\n                    accessModes: ["ReadWriteOnce"]\n                    resources: requests: storage: "1Gi"\n                    storageClassName: "my-storage-class"\n                }\n            }]\n        }\n    }\n    outputs: web: {\n        apiVersion: "v1"\n        kind:       "Service"\n        metadata: {\n            name: "nginx"\n            labels: app: "nginx"\n        }\n        spec: {\n            clusterIP: "None"\n            ports: [{\n                name: "web"\n                port: 80\n            }]\n            selector: app: "nginx"\n        }\n    }\n    parameter: {}\n}\n')),(0,i.kt)("p",null,"Install ComponentDefinition into the Kubernetes cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ vela def apply my-stateful.cue\nComponentDefinition my-stateful created in namespace vela-system.\n")),(0,i.kt)("p",null,"You can see that a ",(0,i.kt)("inlineCode",{parentName:"p"},"my-stateful")," component  via ",(0,i.kt)("inlineCode",{parentName:"p"},"vela components")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ vela components\nNAME        NAMESPACE   WORKLOAD                                DESCRIPTION\n...\nmy-stateful vela-system statefulsets.apps                       My StatefulSet component.\n... \n")),(0,i.kt)("p",null,"When you put this customized component into ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),", it looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: my-component\n      type: my-stateful\nEOF\n")),(0,i.kt)("h2",{id:"define-customized-parameters-for-component"},"Define Customized Parameters For Component"),(0,i.kt)("p",null,"In previous section we have defined a ComponentDefinition that has no parameter. In this section we will show how to expose parameters."),(0,i.kt)("p",null,"In this example, we expose the following parameters to the user:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Image name, allowing users to customize the image"),(0,i.kt)("li",{parentName:"ul"},"Instance name, allowing users to customize the instance name of the generated StatefulSet object and Service object"),(0,i.kt)("li",{parentName:"ul"},"The number of replica, the number of copies of the generated object")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    ... # Omit other unmodified fields\n    template: {\n        output: {\n            apiVersion: "apps/v1"\n            kind:       "StatefulSet"\n            metadata: name: parameter.name\n            spec: {\n                selector: matchLabels: app: "nginx"\n                replicas:    parameter.replicas\n                serviceName: "nginx"\n                template: {\n                    metadata: labels: app: "nginx"\n                    spec: {\n                        containers: [{\n                            image: parameter.image\n        \n                            ... // Omit other unmodified fields\n                        }]\n                    }\n                }\n                    ... // Omit other unmodified fields\n            }\n        }\n        outputs: web: {\n            apiVersion: "v1"\n            kind:       "Service"\n            metadata: {\n                name: "nginx"\n                labels: app: "nginx"\n            }\n            spec: {\n                ... // Omit other unmodified fields \n            }\n        }\n        parameter: {\n            image: string\n            name: string\n            replicas: int\n        }\n    }\n')),(0,i.kt)("p",null,"After modification, use ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def apply")," to install to the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ vela def apply my-stateful.cue\nComponentDefinition my-stateful in namespace vela-system updated.\n")),(0,i.kt)("p",null,"You can see the parameters of my-stateful ComponentDefinition as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ vela show my-stateful\n# Properties\n+----------+-------------+--------+----------+---------+\n|   NAME   | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+----------+-------------+--------+----------+---------+\n| name     |             | string | true     |         |\n| replicas |             | int    | true     |         |\n| image    |             | string | true     |         |\n+----------+-------------+--------+----------+---------+\n")),(0,i.kt)("p",null,"Updating the ComponentDefinition will not affect existing Applications. It will take effect only after updating the Applications next time."),(0,i.kt)("p",null,"You can specify the three new parameters in the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    apiVersion: core.oam.dev/v1beta1\n    kind: Application\n    metadata:\n      name: website\n    spec:\n      components:\n        - name: my-component\n          type: my-stateful\n          properties:\n            image: nginx:latest\n            replicas: 1\n            name: my-component\n")),(0,i.kt)("p",null,"Save the file locally and name it ",(0,i.kt)("inlineCode",{parentName:"p"},"app-stateful.yaml"),", execute ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f app-stateful.yaml")," to update the application, you can see that the name, image, and number of instances of the StatefulSet object have been updated."),(0,i.kt)("h2",{id:"dry-run"},"Dry-run"),(0,i.kt)("p",null,"In order to ensure that the user's application can run correctly with the parameters, you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"vela dry-run")," command to verify the trial run of your template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"vela dry-run -f app-stateful.yaml\n")),(0,i.kt)("p",null,"By viewing the output, you can compare whether the generated object is consistent with the object you actually expect. You can even execute this YAML directly into the Kubernetes cluster and use the results of the operation for verification."),(0,i.kt)("details",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# Application(website) -- Component(my-component)\n---\n\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: nginx\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: my-component\n    app.oam.dev/name: website\n    workload.oam.dev/type: my-stateful\n  name: nginx\n  namespace: default\nspec:\n  clusterIP: None\n  ports:\n  - name: web\n    port: 80\n  selector:\n    app: nginx\n  template:\n    spec:\n      containers:\n      - image: saravak/fluentd:elastic\n        name: my-sidecar\n\n---\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  labels:\n    app.oam.dev/appRevision: ""\n    app.oam.dev/component: my-component\n    app.oam.dev/name: website\n    trait.oam.dev/resource: web\n    trait.oam.dev/type: AuxiliaryWorkload\n  name: web\n  namespace: default\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  serviceName: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - image: k8s.gcr.io/nginx-slim:0.8\n        name: nginx\n        ports:\n        - containerPort: 80\n          name: web\n        volumeMounts:\n        - mountPath: /usr/share/nginx/html\n          name: www\n      terminationGracePeriodSeconds: 10\n  volumeClaimTemplates:\n  - metadata:\n      name: www\n    spec:\n      accessModes:\n      - ReadWriteOnce\n      resources:\n        requests:\n          storage: 1Gi\n      storageClassName: my-storage-class\n'))),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"vela dry-run -h")," to view more available function parameters."),(0,i.kt)("h2",{id:"use-context-to-get-runtime-information"},"Use ",(0,i.kt)("inlineCode",{parentName:"h2"},"context")," to get runtime information"),(0,i.kt)("p",null,"In our Application example above, the name field in the properties and the name field of the Component are the same. So we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," keyword that carries context information in the template, where ",(0,i.kt)("inlineCode",{parentName:"p"},"context.name")," is the runtime component Name, thus the name parameter in ",(0,i.kt)("inlineCode",{parentName:"p"},"parameter")," is no longer needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'... # Omit other unmodified fields\ntemplate: {\n    output: {\n        apiVersion: "apps/v1"\n        kind:       "StatefulSet"\n        metadata: name: context.name\n            ... // \u7701\u7565\u5176\u4ed6\u6ca1\u6709\u4fee\u6539\u7684\u5b57\u6bb5\n    }\n    parameter: {\n        image: string\n        replicas: int\n    }\n}\n')),(0,i.kt)("p",null,"KubeVela has built-in application ",(0,i.kt)("a",{parentName:"p",href:"../oam/x-definition#x-definition-runtime-context"},"required context"),", you can configure it according to your needs."),(0,i.kt)("h2",{id:"add-traits-on-demand"},"Add Traits On Demand"),(0,i.kt)("p",null,"In addition to modifying ComponentDefinitions and adding parameters, you can also use the TraitDefinition to patch configurations to Components.  KubeVela has built-in operations to meet the following needs: adding labels, annotations, injecting environment variables, sidecars, adding volumes, and so on.  You can also ",(0,i.kt)("a",{parentName:"p",href:"../traits/patch-trait"},"customize Trait")," to do more flexible patching."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"vela traits")," to view, the traits marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," are general traits, which can operate on common Kubernetes resource objects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ vela traits\nNAME                        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION\nannotations                 vela-system *                                   true            Add annotations on K8s pod for your workload which follows\n                                                                                            the pod spec in path 'spec.template'.\nconfigmap                   vela-system *                                   true            Create/Attach configmaps on K8s pod for your workload which\n                                                                                            follows the pod spec in path 'spec.template'.\nenv                         vela-system *                                   false           add env on K8s pod for your workload which follows the pod\n                                                                                            spec in path 'spec.template.'\nhostalias                   vela-system *                                   false           Add host aliases on K8s pod for your workload which follows\n                                                                                            the pod spec in path 'spec.template'.\nlabels                      vela-system *                                   true            Add labels on K8s pod for your workload which follows the\n                                                                                            pod spec in path 'spec.template'.\nlifecycle                   vela-system *                                   true            Add lifecycle hooks for the first container of K8s pod for\n                                                                                            your workload which follows the pod spec in path\n                                                                                            'spec.template'.\nnode-affinity               vela-system *                                   true            affinity specify node affinity and toleration on K8s pod for\n                                                                                            your workload which follows the pod spec in path\n                                                                                            'spec.template'.\nscaler                      vela-system *                                   false           Manually scale K8s pod for your workload which follows the\n                                                                                            pod spec in path 'spec.template'.\nsidecar                     vela-system *                                   true            Inject a sidecar container to K8s pod for your workload\n                                                                                            which follows the pod spec in path 'spec.template'.\n")),(0,i.kt)("p",null,"Taking sidecar as an example, you can check the usage of sidecar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ vela show sidecar\n# Properties\n+---------+-----------------------------------------+-----------------------+----------+---------+\n|  NAME   |               DESCRIPTION               |         TYPE          | REQUIRED | DEFAULT |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n| name    | Specify the name of sidecar container   | string                | true     |         |\n| cmd     | Specify the commands run in the sidecar | []string              | false    |         |\n| image   | Specify the image of sidecar container  | string                | true     |         |\n| volumes | Specify the shared volume path          | [[]volumes](#volumes) | false    |         |\n+---------+-----------------------------------------+-----------------------+----------+---------+\n\n\n## volumes\n+------+-------------+--------+----------+---------+\n| NAME | DESCRIPTION |  TYPE  | REQUIRED | DEFAULT |\n+------+-------------+--------+----------+---------+\n| path |             | string | true     |         |\n| name |             | string | true     |         |\n+------+-------------+--------+----------+---------+\n")),(0,i.kt)("p",null,"Use the sidecar directly to inject a container, the application description is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: my-component\n      type: my-stateful\n      properties:\n        image: nginx:latest\n        replicas: 1\n        name: my-component\n      traits:\n      - type: sidecar\n        properties:\n          name: my-sidecar\n          image: saravak/fluentd:elastic\n")),(0,i.kt)("p",null,"Deploy and run the application, and you can see that a fluentd sidecar has been deployed and running in the StatefulSet."),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"vela def")," to get the CUE source file of the sidecar to modify, add parameters, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vela def get sidecar\n")),(0,i.kt)("p",null,"The customization of operation and maintenance capabilities is similar to component customization, so we won\u2019t go into details here. You can read ",(0,i.kt)("a",{parentName:"p",href:"../traits/customize-trait"},"Customize Trait")," for more detailed functions."),(0,i.kt)("h2",{id:"summarize"},"Summarize"),(0,i.kt)("p",null,"This section introduces how to deliver complete modular capabilities through CUE. The core is that it can dynamically increase configuration capabilities according to user needs, and gradually expose more functions and usages, so as to reduce the overall learning threshold for users and ultimately improve R&D efficient.\nThe out-of-the-box capabilities provided by KubeVela, including components, traits, policy, and workflow, are also designed as pluggable and modifiable capabilities."),(0,i.kt)("h2",{id:"next"},"Next"),(0,i.kt)("p",null,"Get to know about how to customize:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../components/custom-component"},"Component")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../traits/customize-trait"},"Trait")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../workflow/workflow"},"Workflow"))))}c.isMDXComponent=!0}}]);