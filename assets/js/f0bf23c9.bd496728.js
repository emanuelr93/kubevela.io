(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4527],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(67294),l=n(80944),r=n(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var o=37,u=39;var p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,c=e.values,d=e.groupId,m=e.className,k=(0,l.Z)(),b=k.tabGroupChoices,h=k.setTabGroupChoices,g=(0,a.useState)(p),v=g[0],f=g[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var w=b[d];null!=w&&w!==v&&c.some((function(e){return e.value===w}))&&f(w)}var T=function(e){var t=e.currentTarget,n=N.indexOf(t),a=c[n].value;f(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,l,r,i,o,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,r=e.right,i=window,o=i.innerHeight,u=i.innerWidth,n>=0&&r<=u&&l<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case o:var l=N.indexOf(e.target)-1;n=N[l]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},c.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),l=n(79443);t.Z=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},34085:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(22122),l=n(19756),r=(n(67294),n(3905)),i=n(41395),s=n(58215),o={title:"Installation"},u={unversionedId:"install",id:"version-v1.0/install",isDocsHomePage:!1,title:"Installation",description:"For upgrading existing KubeVela, please read the upgrade guide.",source:"@site/versioned_docs/version-v1.0/install.mdx",sourceDirName:".",slug:"/install",permalink:"/docs/v1.0/install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/install.mdx",version:"v1.0",lastUpdatedBy:"FogDong",lastUpdatedAt:1627992881,formattedLastUpdatedAt:"8/3/2021",frontMatter:{title:"Installation"},sidebar:"version-v1.0/docs",previous:{title:"Introduction",permalink:"/docs/v1.0/"},next:{title:"Quick Start",permalink:"/docs/v1.0/quick-start"}},p=[{value:"1. Choose Control Plane Cluster",id:"1-choose-control-plane-cluster",children:[]},{value:"2. Install KubeVela",id:"2-install-kubevela",children:[]},{value:"3. Get KubeVela CLI",id:"3-get-kubevela-cli",children:[]},{value:"4. Enable Helm Support",id:"4-enable-helm-support",children:[]},{value:"5. Verify",id:"5-verify",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For upgrading existing KubeVela, please read the ",(0,r.kt)("a",{parentName:"p",href:"./advanced-install#upgrade"},"upgrade guide"),".")),(0,r.kt)("h2",{id:"1-choose-control-plane-cluster"},"1. Choose Control Plane Cluster"),(0,r.kt)("p",null,"Requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes cluster >= v1.15.0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," installed and configured")),(0,r.kt)("p",null,"KubeVela relies on Kubernetes as control plane. The control plane could be any managed Kubernetes offering or your own cluster. The only requirement is please ensure ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"ingress-nginx")," is installed and enabled."),(0,r.kt)("p",null,"For for local deployment and test, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),"."),(0,r.kt)(i.Z,{className:"unique-tabs",defaultValue:"minikube",values:[{label:"Minikube",value:"minikube"},{label:"Kind",value:"kind"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"minikube",mdxType:"TabItem"},(0,r.kt)("p",null,"Follow the minikube ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"installation guide"),"."),(0,r.kt)("p",null,"Then spins up a minikube cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube start\n")),(0,r.kt)("p",null,"Install ingress:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"minikube addons enable ingress\n"))),(0,r.kt)(s.Z,{value:"kind",mdxType:"TabItem"},(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"this guide")," to install kind."),(0,r.kt)("p",null,"Then spins up a kind cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kind create cluster --image=kindest/node:v1.18.15 --config=-\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  kubeadmConfigPatches:\n  - |\n    kind: InitConfiguration\n    nodeRegistration:\n      kubeletExtraArgs:\n        node-labels: "ingress-ready=true"\n  extraPortMappings:\n  - containerPort: 80\n    hostPort: 80\n    protocol: TCP\n  - containerPort: 443\n    hostPort: 443\n    protocol: TCP\nEOF\n')),(0,r.kt)("p",null,"Then install ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/ingress/#ingress-nginx"},"ingress for kind"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml\n")))),(0,r.kt)("h2",{id:"2-install-kubevela"},"2. Install KubeVela"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add helm chart repo for KubeVela"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add kubevela https://kubevelacharts.oss-accelerate.aliyuncs.com/core\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the chart repo"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo update\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install KubeVela"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core\n")),(0,r.kt)("p",{parentName:"li"},"By default, it will enable the webhook with a self-signed certificate provided by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen"),".\nYou can also ",(0,r.kt)("a",{parentName:"p",href:"./advanced-install#install-kubevela-with-cert-manager"},"install it with ",(0,r.kt)("inlineCode",{parentName:"a"},"cert-manager")),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify chart installed successfully"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm test kubevela -n vela-system\n")),(0,r.kt)("details",null," ",(0,r.kt)("summary",null," Click to see the expected output of helm test "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Pod kubevela-application-test pending\nPod kubevela-application-test pending\nPod kubevela-application-test running\nPod kubevela-application-test succeeded\nNAME: kubevela\nLAST DEPLOYED: Tue Apr 13 18:42:20 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE:     kubevela-application-test\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:50:04 2021\nPhase:          Succeeded\nTEST SUITE:     first-vela-app\nLast Started:   Fri Apr 16 20:49:10 2021\nLast Completed: Fri Apr 16 20:49:10 2021\nPhase:          Succeeded\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n"))))),(0,r.kt)("h2",{id:"3-get-kubevela-cli"},"3. Get KubeVela CLI"),(0,r.kt)("p",null,"KubeVela CLI gives you a simplified workflow to manage applications with optimized output. It is not mandatory though."),(0,r.kt)("p",null,"KubeVela CLI could be ",(0,r.kt)("a",{parentName:"p",href:"/docs/v1.0/kubectl-plugin"},"installed as kubectl plugin"),", or install as standalone binary."),(0,r.kt)(i.Z,{className:"unique-tabs",defaultValue:"script",values:[{label:"Script",value:"script"},{label:"Homebrew",value:"homebrew"},{label:"Download directly from releases",value:"download"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," macOS/Linux ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install.sh | bash\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'powershell -Command "iwr -useb https://kubevela.io/script/install.ps1 | iex"\n'))),(0,r.kt)(s.Z,{value:"homebrew",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,r.kt)("p",null,"Update your brew firstly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew update\n")),(0,r.kt)("p",null,"Then install kubevela client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"brew install kubevela\n"))),(0,r.kt)(s.Z,{value:"download",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," binary from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oam-dev/kubevela/releases"},"releases page"),"."),(0,r.kt)("li",{parentName:"ul"},"Unpack the ",(0,r.kt)("inlineCode",{parentName:"li"},"vela")," binary and add it to ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH")," to get started.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"sudo mv ./vela /usr/local/bin/vela\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Known Issue(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/issues/625"},"https://github.com/oam-dev/kubevela/issues/625"),"):\nIf you're using mac, it will report that \u201cvela\u201d cannot be opened because the developer cannot be verified."),(0,r.kt)("p",{parentName:"blockquote"},"The new version of MacOS is stricter about running software you've downloaded that isn't signed with an Apple developer key. And we haven't supported that for KubeVela yet.",(0,r.kt)("br",{parentName:"p"}),"\n","You can open your 'System Preference' -> 'Security & Privacy' -> General, click the 'Allow Anyway' to temporarily fix it.")))),(0,r.kt)("h2",{id:"4-enable-helm-support"},"4. Enable Helm Support"),(0,r.kt)("p",null,"KubeVela leverages Helm controller from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"Flux v2")," to deploy ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," based components."),(0,r.kt)("p",null,"You can enable this feature by installing a minimal Flux v2 chart as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace -n flux-system helm-flux http://oam.dev/catalog/helm-flux2-0.1.0.tgz\n")),(0,r.kt)("p",null,"Or you could install full Flux v2 following its own guide of course."),(0,r.kt)("h2",{id:"5-verify"},"5. Verify"),(0,r.kt)("p",null,"Checking available application components and traits by ",(0,r.kt)("inlineCode",{parentName:"p"},"vela")," CLI tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"vela components\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"NAME        NAMESPACE   WORKLOAD            DESCRIPTION\ntask        vela-system jobs.batch          Describes jobs that run code or a script to completion.\nwebservice  vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that have a stable network endpoint to receive external\n                                            network traffic from customers.\nworker      vela-system deployments.apps    Describes long-running, scalable, containerized services\n                                            that running at backend. They do NOT have network endpoint\n                                            to receive external network traffic.\n")),(0,r.kt)("p",null,"These capabilities are built-in so they are ready to use if showed up. KubeVela is designed to be programmable and fully self-service, so the assumption is more capabilities will be added later per your own needs. "),(0,r.kt)("p",null,"Also, whenever new capabilities are added in the platform, you will immediately see them in above output."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See the ",(0,r.kt)("a",{parentName:"p",href:"./advanced-install"},"advanced installation guide")," to learn more about installation details.")))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);