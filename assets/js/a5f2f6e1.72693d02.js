(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5162],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),i=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(a),m=n,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(v,o(o({ref:t},u),{},{components:a})):r.createElement(v,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){"use strict";var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},41395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var r=a(67294),n=a(80944),l=a(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,i=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,v=(0,n.Z)(),k=v.tabGroupChoices,h=v.setTabGroupChoices,b=(0,r.useState)(u),g=b[0],f=b[1],y=r.Children.toArray(e.children),N=[];if(null!=d){var w=k[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&f(w)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),r=p[a].value;f(r),null!=d&&(h(d,r),setTimeout((function(){var e,a,r,n,l,o,c,i;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,l=e.right,o=window,c=o.innerHeight,i=o.innerWidth,a>=0&&l<=i&&n<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case i:var r=N.indexOf(e.target)+1;a=N[r]||N[0];break;case c:var n=N.indexOf(e.target)-1;a=N[n]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},a)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){"use strict";var r=(0,a(67294).createContext)(void 0);t.Z=r},80944:function(e,t,a){"use strict";var r=a(67294),n=a(79443);t.Z=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},51428:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return d}});var r=a(22122),n=a(19756),l=(a(67294),a(3905)),o=a(41395),s=a(58215),c={title:"Custom Installation"},i={unversionedId:"platform-engineers/advanced-install",id:"version-v1.1/platform-engineers/advanced-install",isDocsHomePage:!1,title:"Custom Installation",description:"Install KubeVela with cert-manager",source:"@site/versioned_docs/version-v1.1/platform-engineers/advanced-install.mdx",sourceDirName:"platform-engineers",slug:"/platform-engineers/advanced-install",permalink:"/docs/platform-engineers/advanced-install",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/advanced-install.mdx",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Custom Installation"},sidebar:"version-v1.1/docs",previous:{title:"Dry Run",permalink:"/docs/platform-engineers/debug/dry-run"},next:{title:"vela components",permalink:"/docs/cli/vela_components"}},u=[{value:"Install KubeVela with cert-manager",id:"install-kubevela-with-cert-manager",children:[]},{value:"Install Pre-release",id:"install-pre-release",children:[]},{value:"Install Kubectl Vela Plugin",id:"install-kubectl-vela-plugin",children:[]},{value:"Upgrade",id:"upgrade",children:[{value:"Step 1. Update Helm repo",id:"step-1-update-helm-repo",children:[]},{value:"Step 2. Upgrade KubeVela CRDs",id:"step-2-upgrade-kubevela-crds",children:[]},{value:"Step 3. Upgrade KubeVela Helm chart",id:"step-3-upgrade-kubevela-helm-chart",children:[]}]},{value:"Addons",id:"addons",children:[]},{value:"Clean Up",id:"clean-up",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-kubevela-with-cert-manager"},"Install KubeVela with cert-manager"),(0,l.kt)("p",null,"By default, KubeVela will use a self-signed certificate provided by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jet/kube-webhook-certgen"},"kube-webhook-certgen")," for admissionWebhooks.\nYou can also use cert-manager if it's available. Note that you need to install cert-manager ",(0,l.kt)("strong",{parentName:"p"},"before")," the KubeVela chart."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm install cert-manager jetstack/cert-manager --namespace cert-manager --version v1.2.0 --create-namespace --set installCRDs=true\n")),(0,l.kt)("p",null,"Install kubevela with enabled certmanager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system --set admissionWebhooks.certManager.enabled=true kubevela kubevela/vela-core --wait\n")),(0,l.kt)("h2",{id:"install-pre-release"},"Install Pre-release"),(0,l.kt)("p",null,"Add flag ",(0,l.kt)("inlineCode",{parentName:"p"},"--devel")," in command ",(0,l.kt)("inlineCode",{parentName:"p"},"helm search")," to choose a pre-release\nversion in format ",(0,l.kt)("inlineCode",{parentName:"p"},"<next_version>-rc-master"),". It means a release candidate version build on ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," branch,\nsuch as ",(0,l.kt)("inlineCode",{parentName:"p"},"0.4.0-rc-master"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm search repo kubevela/vela-core -l --devel\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"    NAME                      CHART VERSION         APP VERSION           DESCRIPTION\n    kubevela/vela-core        0.4.0-rc-master         0.4.0-rc-master         A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.2                   0.3.2                   A Helm chart for KubeVela core\n    kubevela/vela-core        0.3.1                 0.3.1                 A Helm chart for KubeVela core\n")),(0,l.kt)("p",null,"And try the following command to install it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm install --create-namespace -n vela-system kubevela kubevela/vela-core --version <next_version>-rc-master --wait\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME: kubevela\nLAST DEPLOYED: Thu Apr  1 19:41:30 2021\nNAMESPACE: vela-system\nSTATUS: deployed\nREVISION: 1\nNOTES:\nWelcome to use the KubeVela! Enjoy your shipping application journey!\n")),(0,l.kt)("h2",{id:"install-kubectl-vela-plugin"},"Install Kubectl Vela Plugin"),(0,l.kt)("p",null,"Install vela kubectl plugin can help you to ship applications more easily!"),(0,l.kt)(o.Z,{className:"unique-tabs",defaultValue:"krew",values:[{label:"Krew",value:"krew"},{label:"Script",value:"script"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"krew",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://krew.sigs.k8s.io/docs/user-guide/setup/install/"},"Install and set up")," Krew on your machine."),(0,l.kt)("li",{parentName:"ol"},"Discover plugins available on Krew:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl krew update\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"install kubectl vela:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl krew install vela\n"))),(0,l.kt)(s.Z,{value:"script",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"macOS/Linux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"curl -fsSl https://kubevela.io/script/install-kubectl-vela.sh | bash\n")),(0,l.kt)("p",null,"You can also download the binary from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/releases"},"release pages ( >= v1.0.3)")," manually.\nKubectl will discover it from your system path automatically."))),(0,l.kt)("p",null,"For more usage please reference ",(0,l.kt)("a",{parentName:"p",href:"../developers/references/kubectl-plugin"},"kubectl plugin"),"."),(0,l.kt)("h2",{id:"upgrade"},"Upgrade"),(0,l.kt)("h3",{id:"step-1-update-helm-repo"},"Step 1. Update Helm repo"),(0,l.kt)("p",null,"You can explore the newly released chart versions of KubeVela by run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm search repo kubevela/vela-core -l\n")),(0,l.kt)("h3",{id:"step-2-upgrade-kubevela-crds"},"Step 2. Upgrade KubeVela CRDs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_appdeployments.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_applicationcontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_applicationrevisions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_applications.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_approllouts.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_clusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_componentdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_containerizedworkloads.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_definitionrevisions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_envbindings.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_healthscopes.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_initializers.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_manualscalertraits.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_policydefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_resourcetrackers.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_scopedefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_traitdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_workflowstepdefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/core.oam.dev_workloaddefinitions.yaml\nkubectl apply -f https://raw.githubusercontent.com/oam-dev/kubevela/release-1.1/charts/vela-core/crds/standard.oam.dev_rollouts.yaml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tips: If you see errors like ",(0,l.kt)("inlineCode",{parentName:"p"},'* is invalid: spec.scope: Invalid value: "Namespaced": filed is immutable'),". Please delete the CRD which reports error and re-apply the kubevela crds.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," kubectl delete crd \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev\n")),(0,l.kt)("h3",{id:"step-3-upgrade-kubevela-helm-chart"},"Step 3. Upgrade KubeVela Helm chart"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade --install --create-namespace --namespace vela-system  kubevela kubevela/vela-core --version <the_new_version> --wait\n")),(0,l.kt)("h2",{id:"addons"},"Addons"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Open Source Project Reference"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"terraform"),(0,l.kt)("td",{parentName:"tr",align:null},"Basic addon to Provide Cloud Resources(installed by default)"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/oam-dev/terraform-controller"},"https://github.com/oam-dev/terraform-controller"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fluxcd"),(0,l.kt)("td",{parentName:"tr",align:null},"Support Deployment of Helm and Kustomize components"),(0,l.kt)("td",{parentName:"tr",align:null},"kustomize\u3001helm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://fluxcd.io/"},"https://fluxcd.io/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"kruise"),(0,l.kt)("td",{parentName:"tr",align:null},"Support more powerful workload feature"),(0,l.kt)("td",{parentName:"tr",align:null},"cloneset"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://openkruise.io/"},"https://openkruise.io/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,l.kt)("td",{parentName:"tr",align:null},"Support basic observability from Promethus"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://prometheus.io/"},"https://prometheus.io/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keda"),(0,l.kt)("td",{parentName:"tr",align:null},"Support event driven auto scaling"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://keda.sh/"},"https://keda.sh/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ocm"),(0,l.kt)("td",{parentName:"tr",align:null},"Support Multi-cluster Application Deployment"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://open-cluster-management.io/"},"http://open-cluster-management.io/"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"observability"),(0,l.kt)("td",{parentName:"tr",align:null},"Support KubeVela core observability"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Search all addons ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon list\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Install addons (use fluxcd as example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable fluxcd\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Disable addons")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vela addon disable fluxcd\n")),(0,l.kt)("p",null,"Please remove all application using this addon before disable it."),(0,l.kt)("h2",{id:"clean-up"},"Clean Up"),(0,l.kt)("p",null,"Run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall -n vela-system kubevela\nrm -r ~/.vela\n")),(0,l.kt)("p",null,"This will uninstall KubeVela server component and its dependency components.\nThis also cleans up local CLI cache."),(0,l.kt)("p",null,"Then clean up CRDs (CRDs are not removed via helm by default):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," kubectl delete crd \\\n  appdeployments.core.oam.dev \\\n  applicationconfigurations.core.oam.dev \\\n  applicationcontexts.core.oam.dev \\\n  applicationrevisions.core.oam.dev \\\n  applications.core.oam.dev \\\n  approllouts.core.oam.dev \\\n  clusters.core.oam.dev \\\n  componentdefinitions.core.oam.dev \\\n  components.core.oam.dev \\\n  containerizedworkloads.core.oam.dev \\\n  definitionrevisions.core.oam.dev \\\n  envbindings.core.oam.dev \\\n  healthscopes.core.oam.dev \\\n  initializers.core.oam.dev \\\n  manualscalertraits.core.oam.dev \\\n  podspecworkloads.standard.oam.dev \\\n  policydefinitions.core.oam.dev \\\n  resourcetrackers.core.oam.dev \\\n  rollouts.standard.oam.dev \\\n  rollouttraits.standard.oam.dev \\\n  scopedefinitions.core.oam.dev \\\n  traitdefinitions.core.oam.dev \\\n  workflows.core.oam.dev \\\n  workflowstepdefinitions.core.oam.dev \\\n  workloaddefinitions.core.oam.dev \n")))}d.isMDXComponent=!0},86010:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);