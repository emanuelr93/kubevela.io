(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7516],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96188:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={title:"Health Status Check"},l={unversionedId:"end-user/policies/health",id:"version-v1.1/end-user/policies/health",isDocsHomePage:!1,title:"Health Status Check",description:"This documentation will introduce how to use health policy to apply periodical",source:"@site/versioned_docs/version-v1.1/end-user/policies/health.md",sourceDirName:"end-user/policies",slug:"/end-user/policies/health",permalink:"/docs/end-user/policies/health",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/policies/health.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Health Status Check"},sidebar:"version-v1.1/docs",previous:{title:"Multi-Environment Delivery",permalink:"/docs/end-user/policies/envbinding"},next:{title:"Webhook Notification",permalink:"/docs/end-user/workflow/webhook-notification"}},p=[{value:"Background",id:"background",children:[]},{value:"Health Policy",id:"health-policy",children:[]},{value:"Appendix: Parameter List",id:"appendix-parameter-list",children:[]}],s={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This documentation will introduce how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"health")," policy to apply periodical\nhealth checking to an application."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"After an application is deployed, users usually want to monitor or observe the\nhealth condition of the running application as well as each components.\nHealth policy decouples health checking procedure from application workflow\nexecution.\nIt allows to set independent health inspection cycle, such as check every 30s.\nThat helps users to notice as soon as applications turn out unhealthy and\nfollow the diagnosis message to troubleshot."),(0,i.kt)("h2",{id:"health-policy"},"Health Policy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-healthscope-unhealthy\nspec:\n  components:\n    - name: my-server\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:v1\n        port: 8080\n      traits:\n        - type: ingress\n          properties:\n            domain: test.my.domain\n            http:\n              "/": 8080\n    - name: my-server-unhealthy\n      type: webservice\n      properties:\n        cmd:\n          - node\n          - server.js\n        image: oamdev/testapp:boom # make it unhealthy\n        port: 8080\n  policies:\n    - name: health-policy-demo\n      type: health\n      properties:\n        probeInterval: 5\n        probeTimeout: 10\n')),(0,i.kt)("p",null,"We apply the sample application including two components, ",(0,i.kt)("inlineCode",{parentName:"p"},"my-server")," is\nsupposed to be healthy while ",(0,i.kt)("inlineCode",{parentName:"p"},"my-server-unhealthy")," is supposed to be unhealthy\n(because of invalid image)."),(0,i.kt)("p",null,"As shown in the sample, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Health")," policy is specified.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Health")," policy accepts two optional properties, ",(0,i.kt)("inlineCode",{parentName:"p"},"probeInterval")," indicating time\nduration between checking (default is 30s) and ",(0,i.kt)("inlineCode",{parentName:"p"},"probeTimeout")," indicating time\nduration before checking timeout (default is 10s)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  policies:\n    - name: health-policy-demo\n      type: health\n      properties:\n        probeInterval: 5\n        probeTimeout: 10\n...\n")),(0,i.kt)("p",null,"To learn about defining health checking rules, please refer to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"../../platform-engineers/traits/status"},"Status Write Back")),"."),(0,i.kt)("p",null,"Finally we can observe application health status from its ",(0,i.kt)("inlineCode",{parentName:"p"},"status.services"),".\nHere is a snippet of health status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\n  services:\n    - healthy: true\n      message: 'Ready:1/1 '\n      name: my-server\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 1d54b5a0-d951-4f20-9541-c2d76c412a94\n      traits:\n      - healthy: true\n        message: |\n          No loadBalancer found, visiting by using 'vela port-forward app-healthscope-unhealthy'\n        type: ingress\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n    - healthy: false\n      message: 'Ready:0/1 '\n      name: my-server-unhealthy\n      scopes:\n      - apiVersion: core.oam.dev/v1alpha2\n        kind: HealthScope\n        name: health-policy-demo\n        namespace: default\n        uid: 1d54b5a0-d951-4f20-9541-c2d76c412a94\n      workloadDefinition:\n        apiVersion: apps/v1\n        kind: Deployment\n    status: running\n...\n")),(0,i.kt)("h2",{id:"appendix-parameter-list"},"Appendix: Parameter List"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"probeInterval"),(0,i.kt)("td",{parentName:"tr",align:"left"},"time duration between checking (in units of seconds)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"probeTimeout"),(0,i.kt)("td",{parentName:"tr",align:"left"},"time duration before checking timeout (in units of seconds)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"int"),(0,i.kt)("td",{parentName:"tr",align:"left"},"false"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10")))))}c.isMDXComponent=!0}}]);