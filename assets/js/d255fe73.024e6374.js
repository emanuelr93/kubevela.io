(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5725],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},i=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,l(l({ref:n},i),{},{components:t})):r.createElement(f,l({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27011:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return i}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),l={title:"Manual Scaling"},c={unversionedId:"end-user/traits/scaler",id:"version-v1.1/end-user/traits/scaler",isDocsHomePage:!1,title:"Manual Scaling",description:"The scaler trait allows you to scale your component instance manually.",source:"@site/versioned_docs/version-v1.1/end-user/traits/scaler.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/scaler",permalink:"/docs/end-user/traits/scaler",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/traits/scaler.md",version:"v1.1",lastUpdatedBy:"kubevela-bot",lastUpdatedAt:1624242441,formattedLastUpdatedAt:"6/21/2021",frontMatter:{title:"Manual Scaling"}},p=[],s={toc:p};function i(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait allows you to scale your component instance manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl vela show scaler \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"# Properties\n+----------+--------------------------------+------+----------+---------+\n|   NAME   |          DESCRIPTION           | TYPE | REQUIRED | DEFAULT |\n+----------+--------------------------------+------+----------+---------+\n| replicas | Specify replicas of workload   | int  | true     |       1 |\n+----------+--------------------------------+------+----------+---------+\n")),(0,o.kt)("p",null,"Declare an application with scaler trait."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# sample-manual.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: nginx\n      traits:\n        - type: scaler\n          properties:\n            replicas: 2\n        - type: sidecar\n          properties:\n            name: "sidecar-test"\n            image: "fluentd"\n    - name: backend\n      type: worker\n      properties:\n        image: busybox\n        cmd:\n          - sleep\n          - \'1000\'\n')),(0,o.kt)("p",null,"Apply the sample application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/enduser/sample-manual.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"application.core.oam.dev/website configured\n")),(0,o.kt)("p",null,"In runtime cluster, you can see the underlying deployment of ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," component has 2 replicas now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy -l app.oam.dev/name=website\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"NAME       READY   UP-TO-DATE   AVAILABLE   AGE\nbackend    1/1     1            1           19h\nfrontend   2/2     2            2           19h\n")),(0,o.kt)("p",null,"To scale up or scale down, you just need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"scaler")," trait and re-apply the YAML."))}i.isMDXComponent=!0}}]);