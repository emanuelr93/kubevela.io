(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5456],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(80944),l=a(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var i=37,p=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,c=e.values,m=e.groupId,d=e.className,k=(0,r.Z)(),f=k.tabGroupChoices,b=k.setTabGroupChoices,h=(0,n.useState)(u),v=h[0],g=h[1],y=n.Children.toArray(e.children),N=[];if(null!=m){var w=f[m];null!=w&&w!==v&&c.some((function(e){return e.value===w}))&&g(w)}var E=function(e){var t=e.currentTarget,a=N.indexOf(t),n=c[a].value;g(n),null!=m&&(b(m,n),setTimeout((function(){var e,a,n,r,l,s,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,s=window,i=s.innerHeight,p=s.innerWidth,a>=0&&l<=p&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case i:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:E,onClick:E},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},10583:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),s=a(41395),o=a(58215),i={title:"\u5feb\u901f\u5b89\u88c5"},p={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"\u5feb\u901f\u5b89\u88c5",description:"\u5982\u679c\u662f\u8981\u5347\u7ea7\u73b0\u6709\u7684 KubeVela\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb\u5347\u7ea7\u6307\u5357.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install.mdx",sourceDirName:".",slug:"/install",permalink:"/zh/docs/next/install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/install.mdx",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1631672342,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"\u5feb\u901f\u5b89\u88c5"},sidebar:"docs",previous:{title:"KubeVela \u7b80\u4ecb",permalink:"/zh/docs/next/"},next:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/zh/docs/next/quick-start"}},u=[{value:"1. \u9009\u62e9\u653e\u7f6e\u63a7\u5236\u5e73\u9762\u7684\u96c6\u7fa4",id:"1-\u9009\u62e9\u653e\u7f6e\u63a7\u5236\u5e73\u9762\u7684\u96c6\u7fa4",children:[]},{value:"2. \u5b89\u88c5 KubeVela",id:"2-\u5b89\u88c5-kubevela",children:[]},{value:"3. \u3010\u53ef\u9009\u3011\u5b89\u88c5 KubeVela CLI",id:"3-\u3010\u53ef\u9009\u3011\u5b89\u88c5-kubevela-cli",children:[]},{value:"4. \u3010\u53ef\u9009\u3011\u5b89\u88c5\u63d2\u4ef6",id:"4-\u3010\u53ef\u9009\u3011\u5b89\u88c5\u63d2\u4ef6",children:[]},{value:"5. \u67e5\u770b\u5df2\u5b89\u88c5\u80fd\u529b",id:"5-\u67e5\u770b\u5df2\u5b89\u88c5\u80fd\u529b",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u662f\u8981\u5347\u7ea7\u73b0\u6709\u7684 KubeVela\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#%E5%8D%87%E7%BA%A7"},"\u5347\u7ea7\u6307\u5357"),".")),(0,l.kt)("h2",{id:"1-\u9009\u62e9\u653e\u7f6e\u63a7\u5236\u5e73\u9762\u7684\u96c6\u7fa4"},"1. \u9009\u62e9\u653e\u7f6e\u63a7\u5236\u5e73\u9762\u7684\u96c6\u7fa4"),(0,l.kt)("p",null,"\u786e\u4fdd:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u7248\u672c >= v1.18.0"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5e76\u914d\u7f6e kubectl \u547d\u4ee4\u884c\u5de5\u5177")),(0,l.kt)("p",null,"KubeVela \u5f97\u4ee5\u6210\u4e3a\u63a7\u5236\u5e73\u9762\uff0c\u4e3b\u8981\u662f\u4f9d\u8d56 Kubernetes \u3002\u5b83\u53ef\u4ee5\u653e\u7f6e\u5728\u4efb\u4f55\u6258\u7ba1 Kubernetes \u4f5c\u4e3a\u5e95\u5ea7\u7684\u4ea7\u54c1\u6216\u4f60\u81ea\u5df1\u7684\u96c6\u7fa4\u4e2d\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 kind \u6216 minikube \u5728\u672c\u5730\u90e8\u7f72\u3001\u6d4b\u8bd5 KubeVela\uff0c\u6216\u8005\u4f7f\u7528\u4e91\u5382\u5546\u63d0\u4f9b\u7684 Kubernetes \u670d\u52a1\u505a\u751f\u4ea7\u90e8\u7f72\u3002"),(0,l.kt)(s.Z,{className:"unique-tabs",defaultValue:"kind",values:[{label:"Kind",value:"kind"},{label:"Minikube",value:"minikube"},{label:"Cloud Provider",value:"cloudprovider"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minikube",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"\u5b89\u88c5 minikube")," \u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," \u5b89\u88c5 ingress \u542f\u7528\u8def\u7531\u8bbf\u95ee\u529f\u80fd "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n")))),(0,l.kt)(o.Z,{value:"kind",mdxType:"TabItem"},(0,l.kt)("p",null,"\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"Kind \u547d\u4ee4\u884c\u5de5\u5177"),"\u540e\uff0c\u521b\u5efa\u96c6\u7fa4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," \u5b89\u88c5 ingress \u542f\u7528\u8def\u7531\u8bbf\u95ee\u529f\u80fd "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),(0,l.kt)(o.Z,{value:"cloudprovider",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 ",(0,l.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/kubernetes"},"ACK \u670d\u52a1")),(0,l.kt)("li",{parentName:"ul"},"AWS ",(0,l.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/eks"},"EKS \u670d\u52a1")),(0,l.kt)("li",{parentName:"ul"},"Azure ",(0,l.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service"},"AKS \u670d\u52a1")),(0,l.kt)("li",{parentName:"ul"},"Google ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"GKE \u670d\u52a1"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u8bf7\u786e\u4fdd\u4e91\u5382\u5546\u7684\u96c6\u7fa4",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"\u5df2\u5b89\u88c5\u6216\u542f\u7528 ingress-nginx")," \u4ee5\u4fdd\u8bc1\u8def\u7531\u8bbf\u95ee\u529f\u80fd\u53ef\u6b63\u5e38\u4f7f\u7528\u3002")))),(0,l.kt)("h2",{id:"2-\u5b89\u88c5-kubevela"},"2. \u5b89\u88c5 KubeVela"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u5e76\u66f4\u65b0 KubeVela helm chart \u4ed3\u5e93"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://charts.kubevela.net/core\nhelm repo update\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5 KubeVela"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --set multicluster.enabled=true --wait\n")),(0,l.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install"},(0,l.kt)("inlineCode",{parentName:"a"},"\u81ea\u5b9a\u4e49\u5b89\u88c5"))," \u83b7\u53d6\u66f4\u591a\u5b89\u88c5\u6a21\u5f0f\u548c\u529f\u80fd\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9a8c\u8bc1 chart \u5b89\u88c5\u662f\u5426\u6210\u529f"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm test kubevela -n vela-system\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," \u70b9\u51fb\u67e5\u770b\u671f\u671b\u8f93\u51fa "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Pod kubevela-application-test pending\nPod kubevela-application-test pending\nPod kubevela-application-test running\nPod kubevela-application-test succeeded\nNAME: kubevela\nLAST DEPLOYED: Tue Apr 13 18:42:20 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE:     kubevela-application-test\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:50:04 2021\nPhase:          Succeeded\nTEST SUITE:     first-vela-app\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:49:10 2021\nPhase:          Succeeded\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n"))))),(0,l.kt)("h2",{id:"3-\u3010\u53ef\u9009\u3011\u5b89\u88c5-kubevela-cli"},"3. \u3010\u53ef\u9009\u3011\u5b89\u88c5 KubeVela CLI"),(0,l.kt)("p",null,"KubeVela CLI \u53ef\u4ee5\u8ba9\u4f60\u66f4\u4fbf\u6377\u5730\u6765\u7ba1\u7406\u5e94\u7528\u4ea4\u4ed8\u3002\u4e0d\u8fc7\uff0c\u5b83\u4e0d\u662f\u5fc5\u987b\u4f7f\u7528\u7684\u3002"),(0,l.kt)("p",null,"KubeVela CLI \u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#%E5%AE%89%E8%A3%85-kubectl-kubevela-cli-%E6%8F%92%E4%BB%B6"},"kubectl plugin")," \u7684\u65b9\u5f0f\u6765\u5b89\u88c5\uff0c\u6216\u8005\u901a\u8fc7\u4e8c\u8fdb\u5236\u6587\u4ef6."),(0,l.kt)(s.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," macOS/Linux ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Windows")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,l.kt)(o.Z,{value:"homebrew",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("p",null,"\u5148\u66f4\u65b0\u4e0b\u4f60\u7684 brew"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,l.kt)("p",null,"\u7d27\u63a5\u7740\u5b89\u88c5 KubeVela"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,l.kt)(o.Z,{value:"download",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7",(0,l.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"\u53d1\u5e03\u65e5\u5fd7"),"\u4e0b\u8f7d\u6700\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"vela")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u538b\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5e76\u4e14\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")," \u4e2d\u914d\u597d\u73af\u5883\u53d8\u91cf\uff0c\u5c31\u641e\u5b9a\u5566\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"\u5b89\u88c5\u63d0\u793a"),":\n\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f Mac \u7cfb\u7edf\uff0c\u5b83\u4f1a\u5f39\u51fa \u201cvela\u201d \u65e0\u6cd5\u6253\u5f00\u7684\u8b66\u544a\uff0c\u56e0\u4e3a\u6765\u81ea\u5f00\u53d1\u8005\u7684\u5305\u65e0\u6cd5\u9a8c\u8bc1\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"MacOS \u5bf9\u80fd\u591f\u5728\u7cfb\u7edf\u4e2d\u8fd0\u884c\u7684\u8f6f\u4ef6\uff0c\u91c7\u53d6\u4e86\u66f4\u52a0\u4e25\u683c\u7684\u9650\u5236\u3002\u4f60\u6682\u65f6\u53ef\u4ee5\u901a\u8fc7\u6253\u5f00 'System Preference' -> 'Security & Privacy' -> General \u5e76\u70b9\u51fb 'Allow Anyway' \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002")))),(0,l.kt)("h2",{id:"4-\u3010\u53ef\u9009\u3011\u5b89\u88c5\u63d2\u4ef6"},"4. \u3010\u53ef\u9009\u3011\u5b89\u88c5\u63d2\u4ef6"),(0,l.kt)("p",null,"KubeVela \u652f\u6301\u4e00\u7cfb\u5217",(0,l.kt)("a",{parentName:"p",href:"./platform-engineers/advanced-install#%E6%8F%92%E4%BB%B6%E5%88%97%E8%A1%A8"},"\u5f00\u7bb1\u5373\u7528\u7684\u63d2\u4ef6"),"\uff0c\u5efa\u8bae\u60a8\u81f3\u5c11\u5f00\u542f\u4ee5\u4e0b\u63d2\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Helm \u4ee5\u53ca Kustomize \u7ec4\u4ef6\u529f\u80fd\u63d2\u4ef6"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable fluxcd\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Terraform Provider \u63d2\u4ef6"),(0,l.kt)("p",{parentName:"li"},"\u5f00\u542f Terraform \u5bf9\u963f\u91cc\u4e91\u7684\u652f\u6301\uff0c\u8bf7\u6267\u884c\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable terraform/provider-alibaba ALICLOUD_ACCESS_KEY=xxx ALICLOUD_SECRET_KEY=yyy ALICLOUD_SECURITY_TOKEN=zzz\n")))),(0,l.kt)("h2",{id:"5-\u67e5\u770b\u5df2\u5b89\u88c5\u80fd\u529b"},"5. \u67e5\u770b\u5df2\u5b89\u88c5\u80fd\u529b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6ca1\u5b89\u88c5 vela \u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get comp -A")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get trait -A")," \u4ee3\u66ff.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela")," CLI \u6765\u770b\u770b\u6709\u54ea\u4e9b\u7ec4\u4ef6\u7c7b\u578b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," \u67e5\u770b\u8f93\u51fa "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME            NAMESPACE   WORKLOAD                                DESCRIPTION\nalibaba-ack     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud ACK cluster\nalibaba-oss     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud OSS object\nalibaba-rds     vela-system configurations.terraform.core.oam.dev   Terraform configuration for Alibaba Cloud RDS object\nhelm            vela-system autodetects.core.oam.dev                helm release is a group of K8s resources from either git\n                                                                repository or helm repo\nkustomize       vela-system autodetects.core.oam.dev                kustomize can fetching, building, updating and applying\n                                                                Kustomize manifests from git repo.\nraw             vela-system autodetects.core.oam.dev                raw allow users to specify raw K8s object in properties\ntask            vela-system jobs.batch                              Describes jobs that run code or a script to completion.\nwebservice      vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                that have a stable network endpoint to receive external\n                                                                network traffic from customers.\nworker          vela-system deployments.apps                        Describes long-running, scalable, containerized services\n                                                                that running at backend. They do NOT have network endpoint\n                                                                to receive external network traffic.\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"vela")," CLI \u6765\u770b\u770b\u6709\u54ea\u4e9b\u8fd0\u7ef4\u529f\u80fd\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela traits\n")),(0,l.kt)("details",null," ",(0,l.kt)("summary",null," \u67e5\u770b\u8f93\u51fa "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME                        NAMESPACE   APPLIES-TO          CONFLICTS-WITH  POD-DISRUPTIVE  DESCRIPTION\nannotations                 vela-system *                                   true            Add annotations on K8s pod for your workload which follows\n                                                                                        the pod spec in path 'spec.template'.\nconfigmap                   vela-system *                                   true            Create/Attach configmaps on K8s pod for your workload which\n                                                                                        follows the pod spec in path 'spec.template'.\ncpuscaler                   vela-system deployments.apps                    false           Automatically scale the component based on CPU usage.\nenv                         vela-system *                                   false           add env on K8s pod for your workload which follows the pod\n                                                                                        spec in path 'spec.template.'\nexpose                      vela-system                                     false           Expose port to enable web traffic for your component.\nhostalias                   vela-system *                                   false           Add host aliases on K8s pod for your workload which follows\n                                                                                        the pod spec in path 'spec.template'.\ningress                     vela-system                                     false           Enable public web traffic for the component.\ningress-1-20                vela-system                                     false           Enable public web traffic for the component, the ingress API\n                                                                                        matches K8s v1.20+.\ninit-container              vela-system deployments.apps                    true            add an init container and use shared volume with pod\nkustomize-json-patch        vela-system                                     false           A list of JSON6902 patch to selected target\nkustomize-patch             vela-system                                     false           A list of StrategicMerge or JSON6902 patch to selected\n                                                                                        target\nkustomize-strategy-merge    vela-system                                     false           A list of strategic merge to kustomize config\nlabels                      vela-system *                                   true            Add labels on K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\nlifecycle                   vela-system *                                   true            Add lifecycle hooks for the first container of K8s pod for\n                                                                                        your workload which follows the pod spec in path\n                                                                                        'spec.template'.\nnode-affinity               vela-system *                                   true            affinity specify node affinity and toleration on K8s pod for\n                                                                                        your workload which follows the pod spec in path\n                                                                                        'spec.template'.\npvc                         vela-system deployments.apps                    true            Create a Persistent Volume Claim and mount the PVC as volume\n                                                                                        to the  first container in the pod\nresource                    vela-system *                                   true            Add resource requests and limits on K8s pod for your\n                                                                                        workload which follows the pod spec in path 'spec.template.'\nrollout                     vela-system                                     false           rollout the component\nscaler                      vela-system *                                   false           Manually scale K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\nservice-binding             vela-system webservice,worker                   false           Binding secrets of cloud resources to component env\nsidecar                     vela-system *                                   true            Inject a sidecar container to K8s pod for your workload\n                                                                                        which follows the pod spec in path 'spec.template'.\nvolumes                     vela-system deployments.apps                    true            Add volumes on K8s pod for your workload which follows the\n                                                                                        pod spec in path 'spec.template'.\n"))))),(0,l.kt)("p",null,"\u4ee5\u4e0a\u7684\u8fd9\u4e9b\u80fd\u529b\u90fd\u662f\u5df2\u7ecf\u5185\u7f6e\u7684\uff0c\u968f\u53d6\u968f\u7528\u3002\u800c\u7531\u4e8e KubeVela \u4ece\u4e00\u5f00\u59cb\u5c31\u88ab\u8bbe\u8ba1\u6210\u53ef\u7f16\u7a0b\u7684\uff0c\u4f60\u53ef\u4ee5\u6309\u73a9\u4e50\u9ad8\u79ef\u6728\u4e00\u6837\uff0c\u6dfb\u52a0\u4efb\u4f55\u4f60\u9700\u8981\u7684\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6bd5 KubeVela\uff0c\u5f00\u59cb\u52a8\u624b\u7f16\u5199",(0,l.kt)("a",{parentName:"li",href:"./quick-start"},"\u7b2c\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a\u63d2\u4ef6\u529f\u80fd\u7684\u5b89\u88c5\uff0c\u4e86\u89e3",(0,l.kt)("a",{parentName:"li",href:"./platform-engineers/advanced-install"},"\u81ea\u5b9a\u4e49\u5b89\u88c5\u65b9\u5f0f"),"\u5b89\u88c5\u3002")))}m.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);