(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8842],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,v=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(v,l(l({ref:n},u),{},{components:t})):r.createElement(v,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28187:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return u}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),l={title:"Multi Environments"},p={unversionedId:"end-user/workflow/multi-env",id:"version-v1.1/end-user/workflow/multi-env",isDocsHomePage:!1,title:"Multi Environments",description:"If we have multiple clusters, we want to apply our application in the test cluster first, and then apply it to the production cluster after the application in test cluster is running. KubeVela provides the multi-env workflow step to manage multi environments.",source:"@site/versioned_docs/version-v1.1/end-user/workflow/multi-env.md",sourceDirName:"end-user/workflow",slug:"/end-user/workflow/multi-env",permalink:"/docs/end-user/workflow/multi-env",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/workflow/multi-env.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Multi Environments"},sidebar:"version-v1.1/docs",previous:{title:"Apply Remaining",permalink:"/docs/end-user/workflow/apply-remaining"},next:{title:"Live Diff",permalink:"/docs/end-user/debug/live-diff"}},i=[{value:"How to use",id:"how-to-use",children:[]},{value:"Expected outcome",id:"expected-outcome",children:[]}],s={toc:i};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If we have multiple clusters, we want to apply our application in the test cluster first, and then apply it to the production cluster after the application in test cluster is running. KubeVela provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env")," workflow step to manage multi environments."),(0,a.kt)("p",null,"In this guide, you will learn how to manage multi environments via ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"Workflow"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before reading this section, please make sure you have learned about the ",(0,a.kt)("a",{parentName:"p",href:"../policies/envbinding"},"Env Binding")," in KubeVela.")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("p",null,"Apply the following ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," with workflow step type of ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: multi-env-demo\n  namespace: default\nspec:\n  components:\n    - name: nginx-server\n      type: webservice\n      properties:\n        image: nginx:1.21\n        port: 80\n\n  policies:\n    - name: test-env\n      type: env-binding\n      properties:\n        created: false\n        envs:\n          - name: test\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              clusterSelector:\n                labels:\n                  purpose: test\n    - name: prod-env\n      type: env-binding\n      properties:\n        created: false\n        envs:\n          - name: prod\n            patch:\n              components:\n                - name: nginx-server\n                  type: webservice\n                  properties:\n                    image: nginx:1.20\n                    port: 80\n            placement:\n              clusterSelector:\n                labels:\n                  purpose: prod\n\n  workflow:\n    steps:\n      - name: deploy-server\n        # specify the workflow step type\n        type: multi-env\n        properties:\n          # specify the component name\n          component: nginx-server\n          # specify the policy name\n          policy: patch\n          # specify the env name in policy\n          env: prod\n      - name: manual-approval\n        # suspend is a built-in task of workflow used to suspend the workflow\n        type: suspend\n      - name: deploy-prod-server\n        type: multi-env\n        properties:\n          component: nginx-server\n          policy: prod-env\n          env: prod\n")),(0,a.kt)("h2",{id:"expected-outcome"},"Expected outcome"),(0,a.kt)("p",null,"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application multi-env-demo -o yaml\n")),(0,a.kt)("p",null,"We can see that the workflow is suspended at ",(0,a.kt)("inlineCode",{parentName:"p"},"manual-approval"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 2\n      steps:\n      - name: deploy-test-server\n        phase: succeeded\n        resourceRef: {}\n        type: multi-env\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      suspend: true\n      terminated: false\n")),(0,a.kt)("p",null,"Switch to ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," cluster and check the component status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-server     1/1     1            1           1m10s\n")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"resume")," command after everything is ok in test cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela workflow resume multi-env-demo\n\nSuccessfully resume workflow: multi-env-demo\n")),(0,a.kt)("p",null,"Recheck the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get application multi-env-demo -o yaml\n")),(0,a.kt)("p",null,"All the step status in workflow is succeeded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  status:\n    workflow:\n      ...\n      stepIndex: 3\n      steps:\n      - name: deploy-test-server\n        phase: succeeded\n        resourceRef: {}\n        type: multi-env\n      - name: manual-approval\n        phase: succeeded\n        resourceRef: {}\n        type: suspend\n      - name: deploy-prod-server\n        phase: succeeded\n        resourceRef: {}\n        type: multi-env\n      suspend: false\n      terminated: true\n")),(0,a.kt)("p",null,"Then, check the component status in ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get deployment\n\nNAME             READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-server     1/1     1            1           1m10s\n")),(0,a.kt)("p",null,"We can see that the component have been applied to both clusters."),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"multi-env"),", we can easily manage applications in multiple environments."))}u.isMDXComponent=!0}}]);