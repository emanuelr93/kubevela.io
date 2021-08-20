(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[605],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43721:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s={title:"Labels and Annotations"},l={unversionedId:"end-user/traits/annotations-and-labels",id:"version-v1.1/end-user/traits/annotations-and-labels",isDocsHomePage:!1,title:"Labels and Annotations",description:"List Traits",source:"@site/versioned_docs/version-v1.1/end-user/traits/annotations-and-labels.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/annotations-and-labels",permalink:"/docs/end-user/traits/annotations-and-labels",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/annotations-and-labels.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"6/21/2021",frontMatter:{title:"Labels and Annotations"},sidebar:"version-v1.1/docs",previous:{title:"AutoScaler",permalink:"/docs/end-user/traits/autoscaler"},next:{title:"Attaching Sidecar",permalink:"/docs/end-user/traits/sidecar"}},i=[{value:"List Traits",id:"list-traits",children:[]}],p={toc:i};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"list-traits"},"List Traits"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations")," traits allows you to append labels and annotations to the component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# myapp.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: labels\n          properties:\n            "release": "stable"\n        - type: annotations\n          properties:\n            "description": "web application"\n')),(0,o.kt)("p",null,"Deploy this application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f myapp.yaml\n")),(0,o.kt)("p",null,"On runtime cluster, check the workload has been created successfully."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME             READY   UP-TO-DATE   AVAILABLE   AGE\nexpress-server   1/1     1            1           15s\n")),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"labels"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments express-server -o jsonpath='{.spec.template.metadata.labels}'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'{"app.oam.dev/component":"express-server","release": "stable"}\n')),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments express-server -o jsonpath='{.spec.template.metadata.annotations}'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'{"description":"web application"}\n')))}c.isMDXComponent=!0}}]);