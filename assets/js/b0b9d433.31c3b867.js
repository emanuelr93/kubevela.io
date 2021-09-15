(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[706],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21807:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return i},default:function(){return u}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),s={title:"Managing Clusters"},o={unversionedId:"platform-engineers/system-operation/managing-clusters",id:"version-v1.1/platform-engineers/system-operation/managing-clusters",isDocsHomePage:!1,title:"Managing Clusters",description:"Users could manage clusters in KubeVela through a list of Vela CLI commands.",source:"@site/versioned_docs/version-v1.1/platform-engineers/system-operation/managing-clusters.md",sourceDirName:"platform-engineers/system-operation",slug:"/platform-engineers/system-operation/managing-clusters",permalink:"/docs/platform-engineers/system-operation/managing-clusters",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/system-operation/managing-clusters.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Managing Clusters"},sidebar:"version-v1.1/docs",previous:{title:"Bootstrap Parameters",permalink:"/docs/platform-engineers/system-operation/bootstrap-parameters"},next:{title:"Observability",permalink:"/docs/platform-engineers/system-operation/observability"}},i=[{value:"vela cluster list",id:"vela-cluster-list",children:[]},{value:"vela cluster join",id:"vela-cluster-join",children:[]},{value:"vela cluster detach",id:"vela-cluster-detach",children:[]},{value:"vela cluster rename",id:"vela-cluster-rename",children:[]}],c={toc:i};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Users could manage clusters in KubeVela through a list of Vela CLI commands."),(0,l.kt)("h3",{id:"vela-cluster-list"},"vela cluster list"),(0,l.kt)("p",null,"This command could list all clusters managed by KubeVela currently."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela cluster list\nCLUSTER         TYPE    ENDPOINT                \ncluster-prod    tls     https://47.88.4.97:6443 \ncluster-staging tls     https://47.88.7.230:6443\n")),(0,l.kt)("h3",{id:"vela-cluster-join"},"vela cluster join"),(0,l.kt)("p",null,"This command can join new cluster into KubeVela and name it as ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-prod"),". The joined cluster can be used in ",(0,l.kt)("a",{parentName:"p",href:"../../end-user/policies/envbinding"},"Multi-Environment Deployment"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ vela cluster join example-cluster.kubeconfig --name cluster-prod\n")),(0,l.kt)("h3",{id:"vela-cluster-detach"},"vela cluster detach"),(0,l.kt)("p",null,"This command can be used to detach cluster from KubeVela."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ vela cluster detach cluster-prod\n")),(0,l.kt)("h3",{id:"vela-cluster-rename"},"vela cluster rename"),(0,l.kt)("p",null,"This command can rename cluster managed by KubeVela."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ vela cluster rename cluster-prod cluster-production\n")))}u.isMDXComponent=!0}}]);