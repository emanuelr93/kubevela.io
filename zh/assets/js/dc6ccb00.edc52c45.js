(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6029],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return s}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),d=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(n),s=r,k=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49557:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i={title:"Azure Mariadb \u6570\u636e\u5e93"},o={unversionedId:"end-user/components/cloud-services/terraform/azure-database-mariadb",id:"end-user/components/cloud-services/terraform/azure-database-mariadb",isDocsHomePage:!1,title:"Azure Mariadb \u6570\u636e\u5e93",description:"\u63cf\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/end-user/components/cloud-services/terraform/azure-database-mariadb.md",sourceDirName:"end-user/components/cloud-services/terraform",slug:"/end-user/components/cloud-services/terraform/azure-database-mariadb",permalink:"/zh/docs/next/end-user/components/cloud-services/terraform/azure-database-mariadb",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cloud-services/terraform/azure-database-mariadb.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1635852020,formattedLastUpdatedAt:"2021/11/2",frontMatter:{title:"Azure Mariadb \u6570\u636e\u5e93"},sidebar:"docs",previous:{title:"\u963f\u91cc\u4e91 OSS",permalink:"/zh/docs/next/end-user/components/cloud-services/terraform/alibaba-oss"},next:{title:"Azure Storage Account",permalink:"/zh/docs/next/end-user/components/cloud-services/terraform/azure-storage-account"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",children:[{value:"Properties",id:"properties",children:[]}]},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",children:[]}],d={toc:u};function p(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,"\u7528\u4e8e\u90e8\u7f72 Azure mariadb \u6570\u636e\u5e93\u7684\u7ec4\u4ef6\u8bf4\u660e"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: mariadb-backend\nspec:\n  components:\n    - name: mariadb-backend\n      type: azure-database-mariadb\n      properties:\n        resource_group: "kubevela-group"\n        location: "West Europe"\n        server_name: "kubevela"\n        db_name: "backend"\n        username: "acctestun"\n        password: "H@Sh1CoR3!Faked"\n\n        writeConnectionSecretToRef:\n          name: azure-db-conn\n          namespace: vela-system\n\n')),(0,l.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("h3",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server_name"),(0,l.kt)("td",{parentName:"tr",align:null},"mariadb \u670d\u52a1\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"db_name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"location"),(0,l.kt)("td",{parentName:"tr",align:null},"Azure \u5730\u57df"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resource_group"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u7ec4"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"writeConnectionSecretToRef"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e91\u8d44\u6e90\u8fde\u63a5\u4fe1\u606f\u5373\u5c06\u5199\u5165\u7684 secret \u7684\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#writeConnectionSecretToRef"},"writeConnectionSecretToRef")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h4",{id:"writeconnectionsecrettoref"},"writeConnectionSecretToRef"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e91\u8d44\u6e90\u8fde\u63a5\u4fe1\u606f\u5373\u5c06\u5199\u5165\u7684 secret \u7684\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e91\u8d44\u6e90\u8fde\u63a5\u4fe1\u606f\u5373\u5c06\u5199\u5165\u7684 secret \u7684 namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u8f93\u51fa"},"\u8f93\u51fa"),(0,l.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"writeConnectionSecretToRef"),"\uff0c\u4e00\u4e2a Kubernetes Secret \u5c06\u4f1a\u88ab\u521b\u5efa\uff0c\u5e76\u4e14\uff0c\u5b83\u7684\u6570\u636e\u91cc\u6709\u8fd9\u4e9b\u952e\uff08key\uff09\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SERVER_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"Mariadb server name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"database instance name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_USER"),(0,l.kt)("td",{parentName:"tr",align:null},"database instance username")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PORT"),(0,l.kt)("td",{parentName:"tr",align:null},"database instance port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_HOST"),(0,l.kt)("td",{parentName:"tr",align:null},"database instance host")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_PASSWORD"),(0,l.kt)("td",{parentName:"tr",align:null},"database instance password")))))}p.isMDXComponent=!0}}]);