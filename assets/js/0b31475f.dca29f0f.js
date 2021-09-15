(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[5261],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(b,l(l({ref:n},u),{},{components:t})):r.createElement(b,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39961:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),l={title:"Provision and Consume Cloud Services"},s={unversionedId:"end-user/components/cloud-services/provider-and-consume-cloud-services",id:"end-user/components/cloud-services/provider-and-consume-cloud-services",isDocsHomePage:!1,title:"Provision and Consume Cloud Services",description:"Cloud-oriented development is now becoming the norm, there is an urgent need to integrate cloud resources from different",source:"@site/docs/end-user/components/cloud-services/provider-and-consume-cloud-services.md",sourceDirName:"end-user/components/cloud-services",slug:"/end-user/components/cloud-services/provider-and-consume-cloud-services",permalink:"/docs/next/end-user/components/cloud-services/provider-and-consume-cloud-services",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/end-user/components/cloud-services/provider-and-consume-cloud-services.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1631672342,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Provision and Consume Cloud Services"},sidebar:"docs",previous:{title:"Alibaba Cloud OSS",permalink:"/docs/next/end-user/components/cloud-services/terraform/alibaba-oss"},next:{title:"Web Service",permalink:"/docs/next/end-user/components/cue/webservice"}},i=[{value:"Supported Cloud Resource list",id:"supported-cloud-resource-list",children:[]},{value:"Terraform",id:"terraform",children:[{value:"Provision cloud resources",id:"provision-cloud-resources",children:[]},{value:"Consume cloud resources",id:"consume-cloud-resources",children:[]}]},{value:"Next",id:"next",children:[]}],c={toc:i};function u(e){var n=e.components,l=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cloud-oriented development is now becoming the norm, there is an urgent need to integrate cloud resources from different\nsources and types. Whether it is the most basic object storage, cloud database, or load balancing, it is all faced with\nthe challenges of hybrid cloud, multi-cloud and other complex environments. KubeVela is perfect to satisfy the needs."),(0,o.kt)("p",null,"KubeVela efficiently and securely integrates different types of cloud resources through resource binding capabilities in\ncloud resource Components and Traits. At present, you can directly use the default components of AliCloud Kubernetes(ACK),\nAliCloud Object Storage Service (OSS) and AliCloud Relational Database Service (RDS). At the same time, more new cloud\nresources will gradually become the default option under the support of the community in the future. You can use cloud\nresources of various manufacturers in a standardized and unified way."),(0,o.kt)("p",null,"This tutorial will talk about how to provision and consume Cloud Resources by Terraform."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your platform engineers have already enabled ",(0,o.kt)("a",{parentName:"p",href:"../../../install#4-optional-enable-addons"},"add-on 'terraform/provider-alicloud'"),".")),(0,o.kt)("h2",{id:"supported-cloud-resource-list"},"Supported Cloud Resource list"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Orchestration Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Cloud Provider"),(0,o.kt)("th",{parentName:"tr",align:null},"Cloud Resource"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Terraform"),(0,o.kt)("td",{parentName:"tr",align:null},"Alibaba Cloud"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-ack"},"ACK")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud ACK cluster")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-eip"},"EIP")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud EIP object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-oss"},"OSS")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud OSS object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"./terraform/alibaba-rds"},"RDS")),(0,o.kt)("td",{parentName:"tr",align:null},"Terraform configuration for Alibaba Cloud RDS object")))),(0,o.kt)("h2",{id:"terraform"},"Terraform"),(0,o.kt)("p",null,"All supported Terraform cloud resources can be seen in the list above. You can also filter them by command by ",(0,o.kt)("inlineCode",{parentName:"p"},"vela components --label type=terraform"),"."),(0,o.kt)("h3",{id:"provision-cloud-resources"},"Provision cloud resources"),(0,o.kt)("p",null,"Use the following Application to provision an OSS bucket:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: provision-cloud-resource-sample\nspec:\n  components:\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website-0911\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n")),(0,o.kt)("p",null,"The above ",(0,o.kt)("inlineCode",{parentName:"p"},"alibaba-oss")," component will create an OSS bucket named ",(0,o.kt)("inlineCode",{parentName:"p"},"vela-website-0911"),", with private acl, with connection information stored in a secreted named ",(0,o.kt)("inlineCode",{parentName:"p"},"oss-conn"),".\ndescription, whether it's compulsory, and default value."),(0,o.kt)("p",null,"Apply the above application, then check the status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP                             COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS                                          CREATED-TIME\nprovision-cloud-resource-sample sample-oss  alibaba-oss         running healthy Cloud resources are deployed and ready to use   2021-09-11 12:55:57 +0800 CST\n")),(0,o.kt)("p",null,"After the phase becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"healthy"),", you can then check the OSS bucket in Alibaba Cloud console or by ",(0,o.kt)("a",{parentName:"p",href:"https://partners-intl.aliyun.com/help/doc-detail/50452.htm"},"ossutil"),"\ncommand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ossutil ls oss://\nCreationTime                                 Region    StorageClass    BucketName\n2021-09-11 12:56:17 +0800 CST        oss-cn-beijing        Standard    oss://vela-website-0911\n")),(0,o.kt)("h3",{id:"consume-cloud-resources"},"Consume cloud resources"),(0,o.kt)("p",null,"Let's deploy\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/application.yaml"},"application"),"\nbelow to provision Alibaba Cloud OSS and RDS cloud resources, and consume them by the web component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: webapp\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: zzxwill/flask-web-application:v0.3.1-crossplane\n        ports: 80\n      traits:\n        - type: service-binding\n          properties:\n            envMappings:\n              # environments refer to db-conn secret\n              DB_PASSWORD:\n                secret: db-conn                                   # 1) If the env name is the same as the secret key, secret key can be omitted.\n              endpoint:\n                secret: db-conn\n                key: DB_HOST                                      # 2) If the env name is different from secret key, secret key has to be set.\n              username:\n                secret: db-conn\n                key: DB_USER\n              # environments refer to oss-conn secret\n              BUCKET_NAME:\n                secret: oss-conn\n\n    - name: sample-db\n      type: alibaba-rds\n      properties:\n        instance_name: sample-db\n        account_name: oamtest\n        password: U34rfwefwefffaked\n        writeConnectionSecretToRef:\n          name: db-conn\n\n    - name: sample-oss\n      type: alibaba-oss\n      properties:\n        bucket: vela-website-0911\n        acl: private\n        writeConnectionSecretToRef:\n          name: oss-conn\n")),(0,o.kt)("p",null,"The component ",(0,o.kt)("inlineCode",{parentName:"p"},"sample-db")," will generate secret ",(0,o.kt)("inlineCode",{parentName:"p"},"db-conn")," with ",(0,o.kt)("a",{parentName:"p",href:"./terraform/alibaba-rds#outputs"},"these keys"),", and the component\n",(0,o.kt)("inlineCode",{parentName:"p"},"sample-oss")," will generate secret ",(0,o.kt)("inlineCode",{parentName:"p"},"oss-conn"),". These secrets are binded to the Envs of component ",(0,o.kt)("inlineCode",{parentName:"p"},"express-server")," by trait\n",(0,o.kt)("a",{parentName:"p",href:"../../traits/service-binding"},"Service Binding"),". Then the component can consume instances of OSS and RDS."),(0,o.kt)("p",null,"Deploy and verify the application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP     COMPONENT       TYPE        TRAITS          PHASE           HEALTHY     STATUS  CREATED-TIME\nwebapp  express-server  webservice  service-binding running         healthy             2021-09-08 16:50:41 +0800 CST\n\u251c\u2500      sample-db       alibaba-rds                 running         healthy             2021-09-08 16:50:41 +0800 CST\n\u2514\u2500      sample-oss      alibaba-oss                 running         healthy             2021-09-08 16:50:41 +0800 CST\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo kubectl port-forward deployment/express-server 80:80\n\nForwarding from 127.0.0.1:80 -> 80\nForwarding from [::1]:80 -> 80\nHandling connection for 80\nHandling connection for 80\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(77150).Z})),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../component-observability"},"Component Observability")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../workflow/component-dependency-parameter"},"Data Pass Between Components ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../../case-studies/multi-cluster"},"Multi-Cluster and Environment"))))}u.isMDXComponent=!0},77150:function(e,n,t){"use strict";n.Z=t.p+"assets/images/crossplane-visit-application-v3-b3536448afa1f842f48ee2acb03920de.jpg"}}]);