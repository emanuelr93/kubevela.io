(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[8210],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1393:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o={title:"Service Binding"},c={unversionedId:"platform-engineers/traits/built-in/service-binding",id:"platform-engineers/traits/built-in/service-binding",isDocsHomePage:!1,title:"Description",description:"Service binding trait will bind data from Kubernetes Secret to the application container's ENV.",source:"@site/docs/platform-engineers/traits/built-in/service-binding.md",sourceDirName:"platform-engineers/traits/built-in",slug:"/platform-engineers/traits/built-in/service-binding",permalink:"/docs/next/platform-engineers/traits/built-in/service-binding",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/traits/built-in/service-binding.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1630393813,formattedLastUpdatedAt:"8/31/2021",frontMatter:{title:"Service Binding"},sidebar:"docs",previous:{title:"Attaching Sidecar",permalink:"/docs/next/platform-engineers/traits/built-in/sidecar"},next:{title:"Patch for Kustomize Component",permalink:"/docs/next/platform-engineers/traits/built-in/kustomize-patch"}},l=[{value:"Specification",id:"specification",children:[]},{value:"How to use",id:"how-to-use",children:[]}],s={toc:l};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Service binding trait will bind data from Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," to the application container's ENV. "),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ vela show service-binding\n# Properties\n+-------------+------------------------------------------------+------------------+----------+---------+\n|    NAME     |                  DESCRIPTION                   |       TYPE       | REQUIRED | DEFAULT |\n+-------------+------------------------------------------------+------------------+----------+---------+\n| envMappings | The mapping of environment variables to secret | map[string]#KeySecret | true     |         |\n+-------------+------------------------------------------------+------------------+----------+---------+\n\n## KeySecret\n+--------+---------------------------------------------------+-------------------+----------+---------+\n|  NAME  |                    DESCRIPTION                    |       TYPE        | REQUIRED | DEFAULT |\n+--------+---------------------------------------------------+-------------------+----------+---------+\n| key  | if key is empty, we will use envMappings key instead              | string            | false     |         |\n| secret | Kubernetes secret name | string | true     |         |\n+--------+---------------------------------------------------+-------------------+----------+---------+\n\n\n")),(0,a.kt)("h2",{id:"how-to-use"},"How to use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creat a Kubernetes Secret")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create secret generic db-conn-example --from-literal=password=123  --from-literal=endpoint=https://xxx.com --from-literal=username=myname\nsecret/db-conn-example created\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Bind the Secret into your component by ",(0,a.kt)("inlineCode",{parentName:"li"},"service-binding")," trait")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: binding-test-comp\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn-example\n                key: password            \n              endpoint:\n                secret: db-conn-example          \xdf\n              username:\n                secret: db-conn-example\n")),(0,a.kt)("p",null,"Deploy this YAML and the Secret ",(0,a.kt)("inlineCode",{parentName:"p"},"db-conn-example")," will be binding into environment of workload."))}p.isMDXComponent=!0}}]);