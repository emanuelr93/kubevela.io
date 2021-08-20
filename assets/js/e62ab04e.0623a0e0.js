(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[3940],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82662:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={title:"Canary"},o={unversionedId:"end-user/traits/canary",id:"version-v1.1/end-user/traits/canary",isDocsHomePage:!1,title:"Canary",description:"Description",source:"@site/versioned_docs/version-v1.1/end-user/traits/canary.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/canary",permalink:"/docs/end-user/traits/canary",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/canary.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Canary"}},p=[{value:"Description",id:"description",children:[]},{value:"Specification",id:"specification",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Conflicts With",id:"conflicts-with",children:[{value:"<code>Autoscale</code>",id:"autoscale",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Configures Canary deployment strategy for your application."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"List of all configuration options for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Rollout")," trait."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'...\n    rollout:\n      replicas: 2\n      stepWeight: 50\n      interval: "10s"\n')),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"interval"),(0,i.kt)("td",{parentName:"tr",align:null},"Schedule interval time"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"30s")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"stepWeight"),(0,i.kt)("td",{parentName:"tr",align:null},"Weight percent of every step in rolling update"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"50")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"replicas"),(0,i.kt)("td",{parentName:"tr",align:null},"Total replicas of the workload"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"2")))),(0,i.kt)("h2",{id:"conflicts-with"},"Conflicts With"),(0,i.kt)("h3",{id:"autoscale"},(0,i.kt)("inlineCode",{parentName:"h3"},"Autoscale")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"Rollout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Autoscle")," traits are attached to the same service, they two will fight over the number of instances during rollout. Thus, it's by design that ",(0,i.kt)("inlineCode",{parentName:"p"},"Rollout")," will take over replicas control (specified by ",(0,i.kt)("inlineCode",{parentName:"p"},".replicas")," field) during rollout."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: in up coming releases, KubeVela will introduce a separate section in Appfile to define release phase configurations such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Rollout"),".")))}u.isMDXComponent=!0}}]);