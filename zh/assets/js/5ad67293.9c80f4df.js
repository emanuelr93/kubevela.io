(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4698],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=o,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},26761:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i={title:"\u7cfb\u7edf\u63d2\u4ef6\uff1aobservability"},l={unversionedId:"reference/addon/observability",id:"version-v1.1/reference/addon/observability",isDocsHomePage:!1,title:"\u7cfb\u7edf\u63d2\u4ef6\uff1aobservability",description:"\u5f00\u59cb\u4e4b\u524d",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/reference/addon/observability.md",sourceDirName:"reference/addon",slug:"/reference/addon/observability",permalink:"/zh/docs/reference/addon/observability",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/reference/addon/observability.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"\u7cfb\u7edf\u63d2\u4ef6\uff1aobservability"}},c=[{value:"\u5f00\u59cb\u4e4b\u524d",id:"\u5f00\u59cb\u4e4b\u524d",children:[]},{value:"\u63d2\u4ef6\u6982\u89c8",id:"\u63d2\u4ef6\u6982\u89c8",children:[]},{value:"\u63d2\u4ef6\u5185\u5bb9\u53ca\u4f7f\u7528\u65b9\u6cd5",id:"\u63d2\u4ef6\u5185\u5bb9\u53ca\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",children:[]},{value:"\u7981\u7528\u65b9\u6cd5",id:"\u7981\u7528\u65b9\u6cd5",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5f00\u59cb\u4e4b\u524d"},"\u5f00\u59cb\u4e4b\u524d"),(0,a.kt)("p",null,"\u786e\u4fdd\u4f60\u5df2\u7ecf\u4e86\u89e3\u8fc7\u4ec0\u4e48\u662f",(0,a.kt)("a",{parentName:"p",href:"../../end-user/addons/introduction"},"\u7cfb\u7edf\u63d2\u4ef6"),"\uff08Addon\uff09"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u6982\u89c8"},"\u63d2\u4ef6\u6982\u89c8"),(0,a.kt)("p",null,"observability \u662f\u4e00\u5957\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\u3002\u4e3a KubeVela core \u63d0\u4f9b\u7cfb\u7edf\u7ea7\u522b\u7684\u76d1\u63a7\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u5e94\u7528\u63d0\u4f9b\u4e1a\u52a1\u7ea7\u522b\u7684\u76d1\u63a7\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u5185\u5bb9\u53ca\u4f7f\u7528\u65b9\u6cd5"},"\u63d2\u4ef6\u5185\u5bb9\u53ca\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u8be6\u89c1\u53ef\u89c2\u6d4b\u6027"),(0,a.kt)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u4f9d\u8d56 observability-asset \u63d2\u4ef6\uff0c\u540e\u8005\u4f5c\u7528\u4e3a\u63d0\u4f9b observability \u63d0\u4f9b\u6240\u9700\u7684\u6a21\u5757\u5b9a\u4e49\u548c\u540d\u5b57\u7a7a\u95f4\u3002\u8be5\u4f9d\u8d56\u5173\u7cfb\u4f1a\u5728\u540e\u7eed\u4f18\u5316\uff0c\u4f7f\u4e4b\u5bf9\u7528\u6237\u4e0d\u53ef\u89c1\u3002"),(0,a.kt)("h2",{id:"\u7981\u7528\u65b9\u6cd5"},"\u7981\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5148\u540e\u7981\u7528 observability\u3001observability-asset \u63d2\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon disable observability\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon disable observability-asset\n")))}s.isMDXComponent=!0}}]);