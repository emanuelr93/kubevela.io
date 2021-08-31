(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[2520],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),s=a,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2364:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={title:"Roadmap"},l={unversionedId:"roadmap/template",id:"roadmap/template",isDocsHomePage:!1,title:"Roadmap",description:"Date: 2021-01-01 to 2021-03-30",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/roadmap/template.md",sourceDirName:"roadmap",slug:"/roadmap/template",permalink:"/zh/docs/next/roadmap/template",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/roadmap/template.md",version:"current",lastUpdatedBy:"guoxudong",lastUpdatedAt:1617948166,formattedLastUpdatedAt:"2021/4/9",frontMatter:{title:"Roadmap"}},p=[{value:"Core Platform",id:"core-platform",children:[]},{value:"User Experience",id:"user-experience",children:[]},{value:"Deployment and Operations",id:"deployment-and-operations",children:[]},{value:"Third-party integrations",id:"third-party-integrations",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Project elevation",id:"project-elevation",children:[]}],u={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Date: 2021-01-01 to 2021-03-30"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: add roadmap entry to to ",(0,o.kt)("inlineCode",{parentName:"p"},"roadmap/README.md"))),(0,o.kt)("h2",{id:"core-platform"},"Core Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"K8s controllers"),(0,o.kt)("li",{parentName:"ul"},"Core workloads/traits"),(0,o.kt)("li",{parentName:"ul"},"Server components"),(0,o.kt)("li",{parentName:"ul"},"Architecture and model")),(0,o.kt)("h2",{id:"user-experience"},"User Experience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Devtools: CLI/UI/Appfile"),(0,o.kt)("li",{parentName:"ul"},"SDK/Framework")),(0,o.kt)("h2",{id:"deployment-and-operations"},"Deployment and Operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Diagnostics and debugging")),(0,o.kt)("h2",{id:"third-party-integrations"},"Third-party integrations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CI/CD, GitOps"),(0,o.kt)("li",{parentName:"ul"},"Application development framework"),(0,o.kt)("li",{parentName:"ul"},"Third party workloads/traits")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test infrastructure",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CI (Github Actions) and hosts"),(0,o.kt)("li",{parentName:"ul"},"codecov"))),(0,o.kt)("li",{parentName:"ul"},"Unit/e2e test cases")),(0,o.kt)("h2",{id:"project-elevation"},"Project elevation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Website/documentation improvement"),(0,o.kt)("li",{parentName:"ul"},"Contribution/development workflow improvement")))}c.isMDXComponent=!0}}]);