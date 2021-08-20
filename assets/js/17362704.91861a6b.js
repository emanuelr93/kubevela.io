(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[7610],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14205:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i={title:"Terraform Component"},l={unversionedId:"platform-engineers/components/component-terraform",id:"version-v1.1/platform-engineers/components/component-terraform",isDocsHomePage:!1,title:"Terraform Component",description:"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service), and Alibaba Cloud's OSS (Object Storage System) as examples to show how to enable cloud services as part of the application deployment.",source:"@site/versioned_docs/version-v1.1/platform-engineers/components/component-terraform.md",sourceDirName:"platform-engineers/components",slug:"/platform-engineers/components/component-terraform",permalink:"/docs/platform-engineers/components/component-terraform",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/components/component-terraform.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"8/20/2021",frontMatter:{title:"Terraform Component"},sidebar:"version-v1.1/docs",previous:{title:"CUE Component",permalink:"/docs/platform-engineers/components/custom-component"},next:{title:"How-to",permalink:"/docs/platform-engineers/traits/customize-trait"}},s=[{value:"Prepare Terraform Controller",id:"prepare-terraform-controller",children:[{value:"Apply Provider Credentials",id:"apply-provider-credentials",children:[]},{value:"Register <code>alibaba-rds</code> Component",id:"register-alibaba-rds-component",children:[]},{value:"Register <code>alibaba-oss</code> Component",id:"register-alibaba-oss-component",children:[]}]}],c={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this documentation, we will use Alibaba Cloud's RDS (Relational Database Service), and Alibaba Cloud's OSS (Object Storage System) as examples to show how to enable cloud services as part of the application deployment."),(0,a.kt)("p",null,"These cloud services are provided by Terraform."),(0,a.kt)("h2",{id:"prepare-terraform-controller"},"Prepare Terraform Controller"),(0,a.kt)("details",null,(0,a.kt)("p",null,"Download the latest chart, like ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform-controller-chart-0.1.8.tgz"),", from the latest ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller/releases"},"releases list")," and install it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm install terraform-controller terraform-controller-0.1.8.tgz\nNAME: terraform-controller\nLAST DEPLOYED: Mon Apr 26 15:55:35 2021\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n")),(0,a.kt)("h3",{id:"apply-provider-credentials"},"Apply Provider Credentials"),(0,a.kt)("p",null,"By applying Terraform Provider credentials, Terraform controller can be authenticated to deploy and manage cloud resources."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/terraform-controller/blob/master/getting-started.md"},"Terraform controller getting started")," on how to apply Provider for Alibaba Cloud or AWS.")),(0,a.kt)("h3",{id:"register-alibaba-rds-component"},"Register ",(0,a.kt)("inlineCode",{parentName:"h3"},"alibaba-rds")," Component"),(0,a.kt)("p",null,"Register ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/ComponentDefinition-alibaba-rds.yaml"},"alibaba-rds")," to KubeVela."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-rds\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud RDS object\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        module "rds" {\n          source = "terraform-alicloud-modules/rds/alicloud"\n          engine = "MySQL"\n          engine_version = "8.0"\n          instance_type = "rds.mysql.c1.large"\n          instance_storage = "20"\n          instance_name = var.instance_name\n          account_name = var.account_name\n          password = var.password\n        }\n\n        output "DB_NAME" {\n          value = module.rds.this_db_instance_name\n        }\n        output "DB_USER" {\n          value = module.rds.this_db_database_account\n        }\n        output "DB_PORT" {\n          value = module.rds.this_db_instance_port\n        }\n        output "DB_HOST" {\n          value = module.rds.this_db_instance_connection_string\n        }\n        output "DB_PASSWORD" {\n          value = module.rds.this_db_instance_port\n        }\n\n        variable "instance_name" {\n          description = "RDS instance name"\n          type = string\n          default = "poc"\n        }\n\n        variable "account_name" {\n          description = "RDS instance user account name"\n          type = "string"\n          default = "oam"\n        }\n\n        variable "password" {\n          description = "RDS instance account password"\n          type = "string"\n          default = "Xyfff83jfewGGfaked"\n        }\n\n')),(0,a.kt)("h3",{id:"register-alibaba-oss-component"},"Register ",(0,a.kt)("inlineCode",{parentName:"h3"},"alibaba-oss")," Component"),(0,a.kt)("p",null,"Register ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/kubevela/tree/master/docs/examples/terraform/cloud-resource-provision-and-consume/ComponentDefinition-alibaba-oss.yaml"},"alibaba-oss")," to KubeVela."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ComponentDefinition\nmetadata:\n  name: alibaba-oss\n  annotations:\n    definition.oam.dev/description: Terraform configuration for Alibaba Cloud OSS object\n    type: terraform\nspec:\n  workload:\n    definition:\n      apiVersion: terraform.core.oam.dev/v1beta1\n      kind: Configuration\n  schematic:\n    terraform:\n      configuration: |\n        resource "alicloud_oss_bucket" "bucket-acl" {\n          bucket = var.bucket\n          acl = var.acl\n        }\n\n        output "BUCKET_NAME" {\n          value = "${alicloud_oss_bucket.bucket-acl.bucket}.${alicloud_oss_bucket.bucket-acl.extranet_endpoint}"\n        }\n\n        variable "bucket" {\n          description = "OSS bucket name"\n          default = "vela-website"\n          type = string\n        }\n\n        variable "acl" {\n          description = "OSS bucket ACL, supported \'private\', \'public-read\', \'public-read-write\'"\n          default = "private"\n          type = string\n        }\n\n\n')))}p.isMDXComponent=!0}}]);