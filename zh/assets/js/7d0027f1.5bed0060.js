(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6485],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2973:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return o},default:function(){return u}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i={title:"\u7cfb\u7edf\u53ef\u89c2\u6d4b\u6027"},s={unversionedId:"platform-engineers/observability",id:"platform-engineers/observability",isDocsHomePage:!1,title:"\u7cfb\u7edf\u53ef\u89c2\u6d4b\u6027",description:"\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6\uff08Observability addon\uff09\u57fa\u4e8e metrics\u3001logging\u3001tracing \u6570\u636e\uff0c\u53ef\u4ee5\u4e3a KubeVela core \u63d0\u4f9b\u7cfb\u7edf\u7ea7\u522b\u7684\u76d1\u63a7\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u5e94\u7528\u63d0\u4f9b\u4e1a\u52a1\u7ea7\u522b\u7684\u76d1\u63a7\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/platform-engineers/observability.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/observability",permalink:"/zh/docs/next/platform-engineers/observability",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/observability.md",version:"current",lastUpdatedBy:"Zheng Xi Zhou",lastUpdatedAt:1629701265,formattedLastUpdatedAt:"2021/8/23",frontMatter:{title:"\u7cfb\u7edf\u53ef\u89c2\u6d4b\u6027"},sidebar:"docs",previous:{title:"\u542f\u52a8\u53c2\u6570\u8bf4\u660e",permalink:"/zh/docs/next/platform-engineers/system-operation/bootstrap-parameters"},next:{title:"\u6027\u80fd\u8c03\u4f18",permalink:"/zh/docs/next/platform-engineers/system-operation/performance-finetuning"}},o=[{value:"\u53ef\u89c2\u6d4b\u80fd\u529b\u4ecb\u7ecd",id:"\u53ef\u89c2\u6d4b\u80fd\u529b\u4ecb\u7ecd",children:[{value:"\u7b2c\u4e00\u79cd\u7528\u6cd5\uff1aKubeVela Core \u7cfb\u7edf\u7ea7\u522b\u53ef\u89c2\u6d4b\u6027",id:"\u7b2c\u4e00\u79cd\u7528\u6cd5\uff1akubevela-core-\u7cfb\u7edf\u7ea7\u522b\u53ef\u89c2\u6d4b\u6027",children:[]},{value:"\u7b2c\u4e8c\u79cd\u7528\u6cd5\uff1aKubeVela Core \u65e5\u5fd7\u76d1\u63a7",id:"\u7b2c\u4e8c\u79cd\u7528\u6cd5\uff1akubevela-core-\u65e5\u5fd7\u76d1\u63a7",children:[]}]},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",children:[{value:"\u81ea\u5efa/\u5e38\u89c4\u96c6\u7fa4",id:"\u81ea\u5efa\u5e38\u89c4\u96c6\u7fa4",children:[]},{value:"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684 Kubernetes \u96c6\u7fa4",id:"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684-kubernetes-\u96c6\u7fa4",children:[]}]},{value:"\u67e5\u770b\u76d1\u63a7\u6570\u636e",id:"\u67e5\u770b\u76d1\u63a7\u6570\u636e",children:[{value:"\u81ea\u5efa/\u5e38\u89c4\u96c6\u7fa4",id:"\u81ea\u5efa\u5e38\u89c4\u96c6\u7fa4-1",children:[]},{value:"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684 Kubernetes \u96c6\u7fa4",id:"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684-kubernetes-\u96c6\u7fa4-1",children:[]}]}],c={toc:o};function u(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6\uff08Observability addon\uff09\u57fa\u4e8e metrics\u3001logging\u3001tracing \u6570\u636e\uff0c\u53ef\u4ee5\u4e3a KubeVela core \u63d0\u4f9b\u7cfb\u7edf\u7ea7\u522b\u7684\u76d1\u63a7\uff0c\u4e5f\u53ef\u4ee5\u4e3a\u5e94\u7528\u63d0\u4f9b\u4e1a\u52a1\u7ea7\u522b\u7684\u76d1\u63a7\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u89c2\u6d4b\u80fd\u529b\uff0c\u4ee5\u53ca\u5982\u4f55\u542f\u7528\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6\uff0c\u5e76\u67e5\u770b\u5404\u79cd\u76d1\u63a7\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u53ef\u89c2\u6d4b\u80fd\u529b\u4ecb\u7ecd"},"\u53ef\u89c2\u6d4b\u80fd\u529b\u4ecb\u7ecd"),(0,l.kt)("p",null,"KubeVela \u53ef\u89c2\u6d4b\u80fd\u529b\u662f\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," \u5c55\u793a\u7684\uff0c\u63d0\u4f9b\u7cfb\u7edf\u7ea7\u522b\u548c\u5e94\u7528\u7ea7\u522b\u7684\u6570\u636e\u76d1\u63a7\u3002"),(0,l.kt)("h3",{id:"\u7b2c\u4e00\u79cd\u7528\u6cd5\uff1akubevela-core-\u7cfb\u7edf\u7ea7\u522b\u53ef\u89c2\u6d4b\u6027"},"\u7b2c\u4e00\u79cd\u7528\u6cd5\uff1aKubeVela Core \u7cfb\u7edf\u7ea7\u522b\u53ef\u89c2\u6d4b\u6027"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"KubeVela Core \u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u76d1\u63a7")),(0,l.kt)("p",null,"1\uff09CPU\u3001\u5185\u5b58\u7b49\u4f7f\u7528\u91cf\u548c\u4f7f\u7528\u7387\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7848).Z})),(0,l.kt)("p",null,"2\uff09CPU\u3001\u5185\u5b58\u968f\u7740\u65f6\u95f4\u53d8\u5316\uff08\u5982\u8fc7\u53bb\u4e09\u5c0f\u65f6\uff09\u7684\u4f7f\u7528\u91cf\u548c\u4f7f\u7528\u7387\u3001\u4ee5\u53ca\u6bcf\u79d2\u7f51\u7edc\u5e26\u5bbd\u7684\u56fe\u5f62\u5316\u5c55\u793a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1727).Z})),(0,l.kt)("h3",{id:"\u7b2c\u4e8c\u79cd\u7528\u6cd5\uff1akubevela-core-\u65e5\u5fd7\u76d1\u63a7"},"\u7b2c\u4e8c\u79cd\u7528\u6cd5\uff1aKubeVela Core \u65e5\u5fd7\u76d1\u63a7"),(0,l.kt)("p",null,"1\uff09\u65e5\u5fd7\u7edf\u8ba1"),(0,l.kt)("p",null,"\u53ef\u89c2\u6d4b\u9875\u9762\u4f1a\u663e\u793aKubeVela Core \u65e5\u5fd7\u603b\u91cf\uff0c\u4ee5\u53ca\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"error")," \u51fa\u73b0\u7684\u6570\u91cf\u3001\u9891\u7387\u3001\u51fa\u73b0\u7684\u6240\u6709\u65e5\u5fd7\u6982\u89c8\u548c\u8be6\u60c5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(185).Z})),(0,l.kt)("p",null,"\u8fd8\u4f1a\u5c55\u793a\u968f\u7740\u65f6\u95f4\u53d8\u5316\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"error")," \u65e5\u5fd7\u51fa\u73b0\u7684\u603b\u91cf\u3001\u9891\u7387\u7b49\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(1183).Z})),(0,l.kt)("p",null,"2\uff09\u65e5\u5fd7\u8fc7\u6ee4"),(0,l.kt)("p",null,"\u5728\u6700\u4e0a\u65b9\u586b\u5199\u5173\u952e\u8bcd\uff0c\u8fd8\u53ef\u4ee5\u8fc7\u6ee4\u65e5\u5fd7\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(9328).Z})),(0,l.kt)("h2",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela addon")," \u547d\u4ee4\u5b89\u88c5\u7684\u3002\u56e0\u4e3a\u672c\u63d2\u4ef6\u4f9d\u8d56\u4e86 Prometheus\uff0cPrometheus \u4f9d\u8d56 StorageClass\uff0c\n\u4e0d\u540c Kubernetes \u53d1\u884c\u7248\uff0cStorageClass \u4f1a\u6709\u4e00\u5b9a\u7684\u5dee\u5f02\uff0c\u6240\u4ee5\uff0c\u5728\u4e0d\u540c\u7684 Kubernetes \u53d1\u884c\u7248\uff0c \u5b89\u88c5\u547d\u4ee4\u4e5f\u6709\u4e00\u4e9b\u5dee\u5f02\u3002"),(0,l.kt)("h3",{id:"\u81ea\u5efa\u5e38\u89c4\u96c6\u7fa4"},"\u81ea\u5efa/\u5e38\u89c4\u96c6\u7fa4"),(0,l.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5\u53ef\u89c2\u6d4b\u6027\u63d2\u4ef6\uff0cKinD \u7b49\u6d4b\u8bd5\u96c6\u7fa4\u7684\u5b89\u88c5\u6b65\u9aa4\u540c\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela addon enable observability alertmanager-pvc-enabled=false server-pvc-enabled=false grafana-domain=example.com\n")),(0,l.kt)("h3",{id:"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684-kubernetes-\u96c6\u7fa4"},"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684 Kubernetes \u96c6\u7fa4"),(0,l.kt)("p",null,"\u4ee5\u963f\u91cc\u4e91 ACK \u4e3a\u4f8b\u4ecb\u7ecd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela addon enable observability alertmanager-pvc-class=alicloud-disk-available alertmanager-pvc-size=20Gi server-pvc-class=alicloud-disk-available server-pvc-size=20Gi grafana-domain=grafana.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.com\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c\u5404\u4e2a\u53c2\u6570\u542b\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"alertmanager-pvc-class")),(0,l.kt)("p",null,"Prometheus alert manager \u9700\u8981\u7684 pvc \u7684\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f StorageClass\uff0c\u5728\u963f\u91cc\u4e91\u4e0a\uff0c\u53ef\u9009\u7684 StorageClass \u6709\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get storageclass\nNAME                       PROVISIONER     RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE\nalicloud-disk-available    alicloud/disk   Delete          Immediate           true                   6d\nalicloud-disk-efficiency   alicloud/disk   Delete          Immediate           true                   6d\nalicloud-disk-essd         alicloud/disk   Delete          Immediate           true                   6d\nalicloud-disk-ssd          alicloud/disk   Delete          Immediate           true                   6d\n")),(0,l.kt)("p",null,"\u6b64\u5904\u53d6\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"alicloud-disk-available"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"alertmanager-pvc-size")),(0,l.kt)("p",null,"Prometheus alert manager \u9700\u8981\u7684 pvc \u7684\u5927\u5c0f\uff0c\u5728\u963f\u91cc\u4e91\u4e0a\uff0c\u6700\u5c0f\u7684 PV \u662f 20GB\uff0c\u6240\u4ee5\uff0c\u6b64\u5904\u53d6\u503c 20Gi\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"server-pvc-class")),(0,l.kt)("p",null,"Prometheus server \u9700\u8981\u7684 pvc \u7684\u7c7b\u578b\uff0c\u540c ",(0,l.kt)("inlineCode",{parentName:"p"},"alertmanager-pvc-class"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"server-pvc-size")),(0,l.kt)("p",null,"Prometheus server \u9700\u8981\u7684 pvc \u7684\u5927\u5c0f\uff0c\u540c ",(0,l.kt)("inlineCode",{parentName:"p"},"alertmanager-pvc-size"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grafana-domain")),(0,l.kt)("p",null,"Grafana \u7684\u57df\u540d\uff0c\u53ef\u4ee5\u4f7f\u7528\u60a8\u81ea\u5b9a\u4e49\u7684\u57df\u540d\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ACK \u63d0\u4f9b\u7684\u96c6\u7fa4\u7ea7\u522b\u7684\u6cdb\u57df\u540d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"*.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.com"),"\uff0c\n\u5982\u672c\u5904\u53d6\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"grafana.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.com"),"\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5176\u4ed6\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684\uff0c\u8bf7\u53c2\u8003\u4e0a\u9762\u793a\u4f8b\u914d\u7f6e\u3002"),(0,l.kt)("h2",{id:"\u67e5\u770b\u76d1\u63a7\u6570\u636e"},"\u67e5\u770b\u76d1\u63a7\u6570\u636e"),(0,l.kt)("h3",{id:"\u81ea\u5efa\u5e38\u89c4\u96c6\u7fa4-1"},"\u81ea\u5efa/\u5e38\u89c4\u96c6\u7fa4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get svc grafana -n observability\nNAME      TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)   AGE\ngrafana   ClusterIP   192.168.42.243   <none>        80/TCP    177m\n\n$ sudo k port-forward service/grafana -n observability 80:80\nPassword:\nForwarding from 127.0.0.1:80 -> 3000\nForwarding from [::1]:80 -> 3000\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1/dashboards"},"http://127.0.0.1/dashboards"),"\uff0c\u70b9\u51fb\u76f8\u5e94\u7684 Dashboard \uff0c\u67e5\u770b\u524d\u9762\u4ecb\u7ecd\u7684\u5404\u79cd\u76d1\u63a7\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(4697).Z})),(0,l.kt)("h3",{id:"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684-kubernetes-\u96c6\u7fa4-1"},"\u4e91\u670d\u52a1\u5546\u63d0\u4f9b\u7684 Kubernetes \u96c6\u7fa4"),(0,l.kt)("p",null,"\u76f4\u63a5\u8bbf\u95ee\u4e0a\u9762\u8bbe\u7f6e\u7684 grafana domain\uff0c\u5982 ",(0,l.kt)("a",{parentName:"p",href:"http://grafana.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.com/"},"http://grafana.c276f4dac730c47b8b8988905e3c68fcf.cn-hongkong.alicontainer.com/")," \uff0c\u67e5\u770b\u524d\u9762\u4ecb\u7ecd\u7684\u5404\u79cd\u76d1\u63a7\u6570\u636e\u3002"))}u.isMDXComponent=!0},4697:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-dashboards-945c46b6cb18dbd5c4b3d67c369d7a19.png"},9328:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-logging-search-675e0bb3eeaf63f0d14be9a64863a909.png"},185:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-logging-statistics-a36aa27532061592f0fdfaae39cd6d9f.png"},1183:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-logging-statistics2-a4d5ceb36a30c5409aa5d2050a76a620.png"},1727:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-summary-of-source-usages-chart-7033ee5c9c44ade108ae57c39a7d25a7.png"},7848:function(e,t,a){"use strict";t.Z=a.p+"assets/images/observability-system-level-summary-of-source-usages-640e27f1c37be7ef41761020889d65e2.png"}}]);