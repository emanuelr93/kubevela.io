(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[116],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<l;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(67294),r=a(80944),l=a(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var i=37,c=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,p=e.values,m=e.groupId,d=e.className,k=(0,r.Z)(),v=k.tabGroupChoices,b=k.setTabGroupChoices,h=(0,n.useState)(u),g=h[0],f=h[1],N=n.Children.toArray(e.children),y=[];if(null!=m){var x=v[m];null!=x&&x!==g&&p.some((function(e){return e.value===x}))&&f(x)}var w=function(e){var t=e.currentTarget,a=y.indexOf(t),n=p[a].value;f(n),null!=m&&(b(m,n),setTimeout((function(){var e,a,n,r,l,s,i,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,s=window,i=s.innerHeight,c=s.innerWidth,a>=0&&l<=c&&r<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case c:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case i:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){"use strict";var n=(0,a(67294).createContext)(void 0);t.Z=n},80944:function(e,t,a){"use strict";var n=a(67294),r=a(79443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},38566:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),s=a(41395),o=a(58215),i={title:"\u5b89\u88c5"},c={unversionedId:"install",id:"version-v1.0/install",isDocsHomePage:!1,title:"\u5b89\u88c5",description:"\u5982\u679c\u4f60\u4e4b\u524d\u5df2\u7ecf\u5b89\u88c5\u4e86 KubeVela chart\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb\u5347\u7ea7\u6b65\u9aa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/install.mdx",sourceDirName:".",slug:"/install",permalink:"/zh/docs/v1.0/install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/install.mdx",version:"v1.0",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629786653,formattedLastUpdatedAt:"2021/8/24",frontMatter:{title:"\u5b89\u88c5"},sidebar:"version-v1.0/docs",previous:{title:"\u7b80\u4ecb",permalink:"/zh/docs/v1.0/"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/v1.0/quick-start"}},u=[{value:"1. \u8bbe\u7f6e Kubernetes \u96c6\u7fa4",id:"1-\u8bbe\u7f6e-kubernetes-\u96c6\u7fa4",children:[]},{value:"2. \u5b89\u88c5 KubeVela \u63a7\u5236\u5668",id:"2-\u5b89\u88c5-kubevela-\u63a7\u5236\u5668",children:[]},{value:"3. (\u53ef\u9009)\u5b89\u88c5 flux2",id:"3-\u53ef\u9009\u5b89\u88c5-flux2",children:[]},{value:"4. (\u53ef\u9009)\u5b89\u88c5 KubeVela CLI \u547d\u4ee4\u884c\u5de5\u5177",id:"4-\u53ef\u9009\u5b89\u88c5-kubevela-cli-\u547d\u4ee4\u884c\u5de5\u5177",children:[]},{value:"5. (\u53ef\u9009)\u4ece\u7fa4\u96c6\u540c\u6b65\u529f\u80fd",id:"5-\u53ef\u9009\u4ece\u7fa4\u96c6\u540c\u6b65\u529f\u80fd",children:[]},{value:"6. (\u53ef\u9009)\u6e05\u7406",id:"6-\u53ef\u9009\u6e05\u7406",children:[]},{value:"\u6b65\u9aa4 1. \u66f4\u65b0 helm \u4ed3\u5e93",id:"\u6b65\u9aa4-1-\u66f4\u65b0-helm-\u4ed3\u5e93",children:[]},{value:"Step 2. \u5347\u7ea7 KubeVela CRDs",id:"step-2-\u5347\u7ea7-kubevela-crds",children:[]},{value:"Step 3. \u5347\u7ea7 KubeVela helm chart",id:"step-3-\u5347\u7ea7-kubevela-helm-chart",children:[]}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e4b\u524d\u5df2\u7ecf\u5b89\u88c5\u4e86 KubeVela chart\uff0c\u8bf7\u76f4\u63a5\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"#upgrade"},"\u5347\u7ea7"),"\u6b65\u9aa4\u3002"),(0,l.kt)("h2",{id:"1-\u8bbe\u7f6e-kubernetes-\u96c6\u7fa4"},"1. \u8bbe\u7f6e Kubernetes \u96c6\u7fa4"),(0,l.kt)("p",null,"\u8981\u6c42:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u7248\u672c >= v1.15.0"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u5e76\u914d\u7f6e kubectl")),(0,l.kt)("p",null,"KubeVela\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u63a7\u5236\u5668\uff0c\u53ef\u4ee5\u5b89\u88c5\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5305\u62ec\u6258\u7ba1\u4ea7\u54c1\u6216\u4f60\u81ea\u5df1\u7684\u96c6\u7fa4\u3002\u552f\u4e00\u7684\u8981\u6c42\u662f\u8bf7\u786e\u4fdd\u5df2\u5b89\u88c5\u5e76\u542f\u7528\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"ingress-nginx"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f:\u5982\u679c\u4f60\u6ca1\u6709\u4f7f\u7528 minikube \u6216 kind\uff0c\u8bf7\u786e\u4fdd",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"\u5b89\u88c5\u6216\u542f\u7528 ingress-nginx"),"\u3002")),(0,l.kt)(s.Z,{className:"unique-tabs",defaultValue:"minikube",values:[{label:"Minikube",value:"minikube"},{label:"KinD",value:"kind"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"minikube",mdxType:"TabItem"},(0,l.kt)("p",null,"\u9075\u5faa minikube ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"\u5b89\u88c5\u6307\u5357"),"\u3002"),(0,l.kt)("p",null,"\u5b89\u88c5 minikube \u540e\uff0c\u521b\u5efa\u4e00\u4e2a\u96c6\u7fa4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,l.kt)("p",null,"\u5b89\u88c5 ingress:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),(0,l.kt)(o.Z,{value:"kind",mdxType:"TabItem"},(0,l.kt)("p",null,"\u8bf7\u6309\u7167\u672c",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"\u6307\u5357"),"\u8fdb\u884c\u5b89\u88c5\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u62c9\u8d77\u4e00\u4e2a kind \u96c6\u7fa4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,l.kt)("p",null,"\u7136\u540e\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx"},"ingress for kind"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),(0,l.kt)("h2",{id:"2-\u5b89\u88c5-kubevela-\u63a7\u5236\u5668"},"2. \u5b89\u88c5 KubeVela \u63a7\u5236\u5668"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u6b65\u9aa4\u5c06\u5b89\u88c5 KubeVela \u63a7\u5236\u5668\u53ca\u5176\u4f9d\u8d56\u9879\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 KubeVela helm chart \u4ed3\u5e93")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://charts.kubevela.net/core\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u66f4\u65b0 chart \u4ed3\u5e93")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5 KubeVela")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core\n")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u6765\u542f\u7528 webhook ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5c1d\u8bd5\u6700\u65b0\u7684 master \u5206\u652f, \u5728\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"}," helm search")," \u4e2d\u6dfb\u52a0\u6807\u5fd7 ",(0,l.kt)("inlineCode",{parentName:"p"}," --devel")," \u4ee5\u9009\u62e9\u9884\u53d1\u5e03\u7248\u672c\n\u683c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"<\u4e0b\u4e2a\u7248\u672c\u53f7>-rc-master")," \u7684\u7248\u672c, \u8868\u793a\u8fd9\u662f\u5efa\u7acb\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," \u5206\u652f\u4e0a\u7684\u4e0b\u4e00\u4e2a\u5019\u9009\u53d1\u884c\u7248\u5e94,\n\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"    NAME                        CHART VERSION           APP VERSION             DESCRIPTION\n    kubevela/vela-core          0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core          0.3.1                   0.3.1                   A Helm chart for KubeVela core\n")),(0,l.kt)("p",null,"\u5c1d\u8bd5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME: kubevela\nLAST DEPLOYED: Thu Apr  1 19:41:30 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"(\u53ef\u9009)\u4f7f\u7528 cert-manager \u5b89\u88c5 Kubevela")),(0,l.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u4e86 cert-manager\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u751f\u6210\u8bc1\u4e66\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f60\u9700\u8981\u5728 KubeVela chart \u5b89\u88c5\u4e4b\u524d\u5b89\u88c5 cert-manager\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),(0,l.kt)("p",null,"\u5b89\u88c5 KubeVela\uff0c\u542f\u7528 certmanager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core\n")),(0,l.kt)("h2",{id:"3-\u53ef\u9009\u5b89\u88c5-flux2"},"3. (\u53ef\u9009)\u5b89\u88c5 flux2"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5b89\u88c5\u6b65\u9aa4\u662f\u53ef\u9009\u7684\uff0c\u5982\u679c\u4f60\u60f3\u5c06 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm Chart"),"  \u4f5c\u4e3a KubeVela \u7684\u80fd\u529b\uff0c\u90a3\u4e48\u8fd9\u4e00\u6b65\u662f\u5fc5\u9700\u7684\u3002"),(0,l.kt)("p",null,"KubeVela \u4f9d\u8d56\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"fluxcd/flux2")," \u7684\u51e0\u4e2a CRD \u548c\u63a7\u5236\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CRD"),(0,l.kt)("th",{parentName:"tr",align:null},"Controller Image"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"helmrepositories.source.toolkit.fluxcd.io"),(0,l.kt)("td",{parentName:"tr",align:null},"fluxcd/source-controller:v0.9.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"helmcharts.source.toolkit.fluxcd.io"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buckets.source.toolkit.fluxcd.io"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gitrepositories.source.toolkit.fluxcd.io"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"helmreleases.helm.toolkit.fluxcd.io"),(0,l.kt)("td",{parentName:"tr",align:null},"fluxcd/helm-controller:v0.8.0")))),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u5176",(0,l.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"\u5b98\u65b9\u7f51\u7ad9"),"\u4e0a\u5b89\u88c5\u6574\u4e2a flux2\uff0c\u4e5f\u53ef\u4ee5\u5b89\u88c5\u7531 KubeVela \u63d0\u4f9b\u7684\u8fd1\u5305\u542b\u6700\u5c0f\u96c6\u7684 helm chart\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install --create-namespace -n flux-system helm-flux http://oam.dev/catalog/helm-flux2-0.1.0.tgz\n")),(0,l.kt)("h2",{id:"4-\u53ef\u9009\u5b89\u88c5-kubevela-cli-\u547d\u4ee4\u884c\u5de5\u5177"},"4. (\u53ef\u9009)\u5b89\u88c5 KubeVela CLI \u547d\u4ee4\u884c\u5de5\u5177"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e09\u79cd\u83b7\u53d6 KubeVela Cli \u7684\u65b9\u6cd5:"),(0,l.kt)(s.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," macOS/Linux ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Windows")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,l.kt)(o.Z,{value:"homebrew",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("p",null,"\u9996\u5148\u66f4\u65b0\u4f60\u7684 brew \u7f13\u5b58\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,l.kt)("p",null,"\u5b89\u88c5 KubeVela \u5ba2\u6237\u7aef."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,l.kt)(o.Z,{value:"download",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ece",(0,l.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"\u7248\u672c\u53d1\u5e03\u9875\u9762"),"\u4e0b\u8f7d\u6700\u65b0\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"vela")," \u4e8c\u8fdb\u5236\u7248\u672c."),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u538b\u7f29 vela \u4e8c\u8fdb\u5236\u6587\u4ef6\u5e76\u5c06\u5176\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")," \u5f00\u59cb\u4f7f\u7528.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5df2\u77e5\u95ee\u9898(",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\n\u5982\u679c\u4f60\u4f7f\u7528 mac\uff0c\u5b83\u4f1a\u62a5\u544a \u201cvela\u201d \u65e0\u6cd5\u6253\u5f00\uff0c\u56e0\u4e3a\u5f00\u53d1\u8005\u65e0\u6cd5\u9a8c\u8bc1\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u65b0\u7248 MacOS \u5728\u8fd0\u884c\u4f60\u4e0b\u8f7d\u7684\u6ca1\u6709\u4f7f\u7528\u82f9\u679c\u5f00\u53d1\u8005\u5bc6\u94a5\u7684\u8f6f\u4ef6\u65b9\u9762\u66f4\u52a0\u4e25\u683c\uff0c\u6211\u4eec\u8fd8\u6ca1\u6709\u4e3a KubeVela \u505a\u8fd9\u65b9\u9762\u652f\u6301\u3002\n\u4f60\u53ef\u4ee5\u6253\u5f00\u4f60\u7684'\u7cfb\u7edf\u9996\u9009\u9879' -> '\u5b89\u5168\u4e0e\u9690\u79c1' ->\u4e00\u822c\uff0c\u70b9\u51fb'\u5141\u8bb8\u65e0\u8bba\u5982\u4f55'\u6682\u65f6\u4fee\u590d\u5b83\u3002")))),(0,l.kt)("h2",{id:"5-\u53ef\u9009\u4ece\u7fa4\u96c6\u540c\u6b65\u529f\u80fd"},"5. (\u53ef\u9009)\u4ece\u7fa4\u96c6\u540c\u6b65\u529f\u80fd"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"vela")," cli \u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\uff0c\u5219\u5e94\u9996\u5148\u540c\u6b65\u529f\u80fd\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME        NAMESPACE   WORKLOAD            DESCRIPTION\ntask        vela-system jobs.batch          Describes jobs that run code or a script to completion.\nwebservice  vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that have a stable network endpoint to receive external\n                                            network traffic from customers.\nworker      vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that running at backend. They do NOT have network endpoint\n                                            to receive external network traffic.\n")),(0,l.kt)("h2",{id:"6-\u53ef\u9009\u6e05\u7406"},"6. (\u53ef\u9009)\u6e05\u7406"),(0,l.kt)("details",null,"\u8fd0\u884c:",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),(0,l.kt)("p",null,"\u8fd9\u5c06\u5378\u8f7d KubeVela \u670d\u52a1\u5668\u7ec4\u4ef6\u53ca\u5176\u4f9d\u8d56\u7ec4\u4ef6\u3002\n\u8fd9\u4e5f\u4f1a\u6e05\u7406\u672c\u5730 CLI \u7f13\u5b58\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u6e05\u9664 CRDs (CRDs \u9ed8\u8ba4\u4e0d\u4f1a\u901a\u8fc7 helm \u79fb\u9664):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  appdeployments.core.oam.dev \\\n  applicationconfigurations.core.oam.dev \\\n  applicationcontexts.core.oam.dev \\\n  applicationdeployments.core.oam.dev \\\n  applicationrevisions.core.oam.dev \\\n  applications.core.oam.dev \\\n  approllouts.core.oam.dev \\\n  componentdefinitions.core.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  manualscalertraits.core.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n"))),(0,l.kt)("h1",{id:"\u5347\u7ea7"},"\u5347\u7ea7"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 KubeVela\uff0c\u5e76\u5e0c\u671b\u5347\u7ea7\u5230\u65b0\u7248\u672c\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u6b65\u9aa4-1-\u66f4\u65b0-helm-\u4ed3\u5e93"},"\u6b65\u9aa4 1. \u66f4\u65b0 helm \u4ed3\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u65b0\u7248\u672c\u7684 KubeVela \u56fe\u8868\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm search repo kubevela/vela-core -l\n")),(0,l.kt)("h2",{id:"step-2-\u5347\u7ea7-kubevela-crds"},"Step 2. \u5347\u7ea7 KubeVela CRDs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_componentdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_workloaddefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_traitdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applications.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_approllouts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationrevisions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_scopedefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_appdeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_applicationcontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/master/charts/vela-core/crds/core.oam.dev_definitionrevisions.yaml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: \u5982\u679c\u4f60\u78b0\u5230\u7c7b\u4f3c ",(0,l.kt)("inlineCode",{parentName:"p"},'* is invalid: spec.scope: Invalid value: "Namespaced": filed is immutable'),"\u95ee\u9898. \u8bf7\u5220\u9664\u5e26\u6709\u9519\u8bef\u7684 crd\n\u5e76\u91cd\u65b0\u5e94\u7528 KubeVela crds\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," kubectl delete crd \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")),(0,l.kt)("h2",{id:"step-3-\u5347\u7ea7-kubevela-helm-chart"},"Step 3. \u5347\u7ea7 KubeVela helm chart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install --create-namespace --namespace vela-system  kubevela kubevela/vela-core --version <the_new_version>\n")))}m.isMDXComponent=!0},86010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);