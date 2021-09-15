(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6496],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return m},kt:function(){return d}});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=l,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?t.createElement(k,i(i({ref:n},m),{},{components:a})):t.createElement(k,i({ref:n},m))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},24577:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var t=a(22122),l=a(19756),r=(a(67294),a(3905)),i={title:"CUE Basic"},o={unversionedId:"platform-engineers/cue/basic",id:"version-v1.1/platform-engineers/cue/basic",isDocsHomePage:!1,title:"CUE Basic",description:"This document will explain more about how to use CUE to encapsulate and abstract a given capability in Kubernetes in detail.",source:"@site/versioned_docs/version-v1.1/platform-engineers/cue/basic.md",sourceDirName:"platform-engineers/cue",slug:"/platform-engineers/cue/basic",permalink:"/docs/platform-engineers/cue/basic",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/platform-engineers/cue/basic.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"CUE Basic"},sidebar:"version-v1.1/docs",previous:{title:"X-Definition",permalink:"/docs/platform-engineers/oam/x-definition"},next:{title:"Manage X-Definition",permalink:"/docs/platform-engineers/cue/definition-edit"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"CUE CLI Basic",id:"cue-cli-basic",children:[]},{value:"CUE Language Basic",id:"cue-language-basic",children:[]},{value:"CUE Templating and References",id:"cue-templating-and-references",children:[]},{value:"Advanced CUE Schematic",id:"advanced-cue-schematic",children:[]},{value:"Import CUE Internal Packages",id:"import-cue-internal-packages",children:[]},{value:"Import Kube Package",id:"import-kube-package",children:[]}],s={toc:p};function m(e){var n=e.components,a=(0,l.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document will explain more about how to use CUE to encapsulate and abstract a given capability in Kubernetes in detail."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please make sure you have already learned about ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," custom resource before reading the following guide. ")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The reasons for KubeVela supports CUE as a first-class solution to design abstraction can be concluded as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CUE is designed for large scale configuration.")," CUE has the ability to understand a\nconfiguration worked on by engineers across a whole company and to safely change a value that modifies thousands of objects in a configuration. This aligns very well with KubeVela's original goal to define and ship production level applications at web scale."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CUE supports first-class code generation and automation.")," CUE can integrate with existing tools and workflows naturally while other tools would have to build complex custom solutions. For example, generate OpenAPI schemas with Go code. This is how KubeVela build developer tools and GUI interfaces based on the CUE templates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CUE integrates very well with Go."),"\nKubeVela is built with GO just like most projects in Kubernetes system. CUE is also implemented in and exposes a rich API in Go. KubeVela integrates with CUE as its core library and works as a Kubernetes controller. With the help of CUE, KubeVela can easily handle data constraint problems.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pleas also check ",(0,r.kt)("a",{parentName:"p",href:"https://blog.cedriccharly.com/post/20191109-the-configuration-complexity-curse/"},"The Configuration Complexity Curse")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cuelang.org/docs/concepts/logic/"},"The Logic of CUE")," for more details.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Please make sure below CLIs are present in your environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cuelang.org/docs/install/"},(0,r.kt)("inlineCode",{parentName:"a"},"cue")," >=v0.2.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../install#3-get-kubevela-cli"},(0,r.kt)("inlineCode",{parentName:"a"},"vela")," (>v1.0.0)"))),(0,r.kt)("h2",{id:"cue-cli-basic"},"CUE CLI Basic"),(0,r.kt)("p",null,"Below is the basic CUE data, you can define both schema and value in the same file with the almost same format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'a: 1.5\na: float\nb: 1\nb: int\nd: [1, 2, 3]\ng: {\n    h: "abc"\n}\ne: string\n')),(0,r.kt)("p",null,"CUE is a superset of JSON, we can use it like json with following convenience:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C style comments,"),(0,r.kt)("li",{parentName:"ul"},"quotes may be omitted from field names without special characters,"),(0,r.kt)("li",{parentName:"ul"},"commas at the end of fields are optional,"),(0,r.kt)("li",{parentName:"ul"},"comma after last element in list is allowed,"),(0,r.kt)("li",{parentName:"ul"},"outer curly braces are optional.")),(0,r.kt)("p",null,"CUE has powerful CLI commands. Let's keep the data in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"first.cue")," and try. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Format the CUE file. If you're using Goland or similar JetBrains IDE,\nyou can ",(0,r.kt)("a",{parentName:"p",href:"https://wonderflow.info/posts/2020-11-02-goland-cuelang-format/"},"configure save on format")," instead.\nThis command will not only format the CUE, but also point out the wrong schema. That's very useful."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue fmt first.cue\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Schema Check, besides ",(0,r.kt)("inlineCode",{parentName:"p"},"cue fmt"),", you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"cue vet")," to check schema."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue vet first.cue\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Calculate/Render the result. ",(0,r.kt)("inlineCode",{parentName:"p"},"cue eval")," will calculate the CUE file and render out the result.\nYou can see the results don't contain ",(0,r.kt)("inlineCode",{parentName:"p"},"a: float")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b: int"),", because these two variables are calculated.\nWhile the ",(0,r.kt)("inlineCode",{parentName:"p"},"e: string")," doesn't have definitive results, so it keeps as it is."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue eval first.cue\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'a: 1.5\nb: 1\nd: [1, 2, 3]\ng: {\nh: "abc"\n}\ne: string\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Render for specified result. For example, we want only know the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," in the file, then we can specify the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"-e"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue eval -e b first.cue\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"1\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Export the result. ",(0,r.kt)("inlineCode",{parentName:"p"},"cue export")," will export the result with final value. It will report an error if some variables are not definitive."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue export first.cue\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'e: cannot convert incomplete value "string" to JSON:\n    ./first.cue:9:4\n')),(0,r.kt)("p",{parentName:"li"},"We can complete the value by giving a value to ",(0,r.kt)("inlineCode",{parentName:"p"},"e"),", for example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'echo "e: \\"abc\\"" >> first.cue\n')),(0,r.kt)("p",{parentName:"li"},"Then, the command will work. By default, the result will be rendered in json format."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue export first.cue\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'{\n    "a": 1.5,\n    "b": 1,\n    "d": [\n        1,\n        2,\n        3\n    ],\n    "g": {\n        "h": "abc"\n    },\n    "e": "abc"\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Export the result in YAML format."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue export first.cue --out yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"a: 1.5\nb: 1\nd:\n- 1\n- 2\n- 3\ng:\n  h: abc\ne: abc\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Export the result for specified variable."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue export -e g first.cue\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},'{\n    "h": "abc"\n}\n')))),(0,r.kt)("p",null,"For now, you have learned all useful CUE cli operations."),(0,r.kt)("h2",{id:"cue-language-basic"},"CUE Language Basic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data structure: Below is the basic data structure of CUE.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'// float\na: 1.5\n\n// int\nb: 1\n\n// string\nc: "blahblahblah"\n\n// array\nd: [1, 2, 3, 1, 2, 3, 1, 2, 3]\n\n// bool\ne: true\n\n// struct\nf: {\n    a: 1.5\n    b: 1\n    d: [1, 2, 3, 1, 2, 3, 1, 2, 3]\n    g: {\n        h: "abc"\n    }\n}\n\n// null\nj: null\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define a custom CUE type. You can use a ",(0,r.kt)("inlineCode",{parentName:"li"},"#")," symbol to specify some variable represents a CUE type.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#abc: string\n")),(0,r.kt)("p",null,"Let's name it ",(0,r.kt)("inlineCode",{parentName:"p"},"second.cue"),". Then the ",(0,r.kt)("inlineCode",{parentName:"p"},"cue export")," won't complain as the ",(0,r.kt)("inlineCode",{parentName:"p"},"#abc")," is a type not incomplete value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue export second.cue\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"{}\n")),(0,r.kt)("p",null,"You can also define a more complex custom struct, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#abc: {\n  x: int\n  y: string\n  z: {\n    a: float\n    b: bool\n  }\n}\n")),(0,r.kt)("p",null,"It's widely used in KubeVela to define templates and do validation."),(0,r.kt)("h2",{id:"cue-templating-and-references"},"CUE Templating and References"),(0,r.kt)("p",null,"Let's try to define a CUE template with the knowledge just learned."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define a struct variable ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"parameter: {\n    name: string\n    image: string\n}\n")),(0,r.kt)("p",null,"Let's save it in a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.cue"),"."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Define a more complex struct variable ",(0,r.kt)("inlineCode",{parentName:"li"},"template")," and reference the variable ",(0,r.kt)("inlineCode",{parentName:"li"},"parameter"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'template: {\n    apiVersion: "apps/v1"\n    kind:       "Deployment"\n    spec: {\n        selector: matchLabels: {\n            "app.oam.dev/component": parameter.name\n        }\n        template: {\n            metadata: labels: {\n                "app.oam.dev/component": parameter.name\n            }\n            spec: {\n                containers: [{\n                    name:  parameter.name\n                    image: parameter.image\n                }]\n            }}}\n}\n')),(0,r.kt)("p",null,"People who are familiar with Kubernetes may have understood that is a template of K8s Deployment. The ",(0,r.kt)("inlineCode",{parentName:"p"},"parameter")," part\nis the parameters of the template."),(0,r.kt)("p",null,"Add it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment.cue"),"."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Then, let's add the value by adding following code block:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'parameter:{\n   name: "mytest"\n   image: "nginx:v1"\n}\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Finally, let's export it in yaml:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue export deployment.cue -e template --out yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"apiVersion: apps/v1\nkind: Deployment\nspec:\n  template:\n    spec:\n      containers:\n      - name: mytest\n        image: nginx:v1\n    metadata:\n      labels:\n        app.oam.dev/component: mytest\n  selector:\n    matchLabels:\n      app.oam.dev/component: mytest\n")),(0,r.kt)("h2",{id:"advanced-cue-schematic"},"Advanced CUE Schematic"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open struct and list. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"...")," in a list or struct means the object is open."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A list like ",(0,r.kt)("inlineCode",{parentName:"li"},"[...string]")," means it can hold multiple string elements.\nIf we don't add ",(0,r.kt)("inlineCode",{parentName:"li"},"..."),", then ",(0,r.kt)("inlineCode",{parentName:"li"},"[string]")," means the list can only have one ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," element in it."),(0,r.kt)("li",{parentName:"ul"},"A struct like below means the struct can contain unknown fields. ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"{\n  abc: string   \n  ...\n}\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Operator  ",(0,r.kt)("inlineCode",{parentName:"p"},"|"),", it represents a value could be both case. Below is an example that the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," could be in string or int type."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"a: string | int\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default Value, we can use ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," symbol to represent a default value for variable. That's usually used with ",(0,r.kt)("inlineCode",{parentName:"li"},"|"),",\nwhich represents a default value for some type. Below is an example that variable ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"int")," and it's default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"a: *1 | int\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Optional Variable. In some cases, a variable could not be used, they're optional variables, we can use ",(0,r.kt)("inlineCode",{parentName:"li"},"?:")," to define it.\nIn the below example, ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," is an optional variable, ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"z")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"#my")," is optional while ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," is a required variable.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a ?: int\n\n#my: {\nx ?: string\ny : int\nz ?:float\n}\n")),(0,r.kt)("p",null,"Optional variables can be skipped, that usually works together with conditional logic.\nSpecifically, if some field does not exit, the CUE grammar is ",(0,r.kt)("inlineCode",{parentName:"p"},"if _variable_ != _|_"),", the example is like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"parameter: {\n    name: string\n    image: string\n    config?: [...#Config]\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.config != _|_ {\n                config: parameter.config\n            }\n        }]\n    }\n    ...\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Operator  ",(0,r.kt)("inlineCode",{parentName:"li"},"&"),", it used to calculate two variables.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"a: *1 | int\nb: 3\nc: a & b\n")),(0,r.kt)("p",null,"Saving it in ",(0,r.kt)("inlineCode",{parentName:"p"},"third.cue")," file."),(0,r.kt)("p",null,"You can evaluate the result by using ",(0,r.kt)("inlineCode",{parentName:"p"},"cue eval"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue eval third.cue\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"a: 1\nb: 3\nc: 3\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Conditional statement, it's really useful when you have some cascade operations that different value affects different results.\nSo you can do ",(0,r.kt)("inlineCode",{parentName:"li"},"if..else")," logic in the template.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'price: number\nfeel: *"good" | string\n// Feel bad if price is too high\nif price > 100 {\n    feel: "bad"\n}\nprice: 200\n')),(0,r.kt)("p",null,"Saving it in ",(0,r.kt)("inlineCode",{parentName:"p"},"fourth.cue")," file."),(0,r.kt)("p",null,"You can evaluate the result by using ",(0,r.kt)("inlineCode",{parentName:"p"},"cue eval"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cue eval fourth.cue\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'price: 200\nfeel:  "bad"\n')),(0,r.kt)("p",null,"Another example is to use bool type as parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'parameter: {\n    name:   string\n    image:  string\n    useENV: bool\n}\noutput: {\n    ...\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            if parameter.useENV == true {\n                env: [{name: "my-env", value: "my-value"}]\n            }\n        }]\n    }\n    ...\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Loop: if you want to avoid duplicate, you may want to use for loop.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Loop for Map"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [string]: string\n}\noutput: {\n    spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for k, v in parameter.env {\n                    name:  k\n                    value: v\n                },\n            ]\n        }]\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Loop for type"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'#a: {\n    "hello": "Barcelona"\n    "nihao": "Shanghai"\n}\n\nfor k, v in #a {\n    "\\(k)": {\n        nameLen: len(v)\n        value:   v\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Loop for Slice"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cue"},"parameter: {\n    name:  string\n    image: string\n    env: [...{name:string,value:string}]\n}\noutput: {\n  ...\n     spec: {\n        containers: [{\n            name:  parameter.name\n            image: parameter.image\n            env: [\n                for _, v in parameter.env {\n                    name:  v.name\n                    value: v.value\n                },\n            ]\n        }]\n    }\n}\n")))))),(0,r.kt)("p",null,"Note that we use ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\( _my-statement_ )"')," for inner calculation in string."),(0,r.kt)("h2",{id:"import-cue-internal-packages"},"Import CUE Internal Packages"),(0,r.kt)("p",null,"CUE has many ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cuelang.org/go@v0.2.2/pkg"},"internal packages")," which also can be used in KubeVela."),(0,r.kt)("p",null,"Below is an example that use ",(0,r.kt)("inlineCode",{parentName:"p"},"strings.Join")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"concat")," string list to one string. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cue"},'import ("strings")\n\nparameter: {\n    outputs: [{ip: "1.1.1.1", hostname: "xxx.com"}, {ip: "2.2.2.2", hostname: "yyy.com"}]\n}\noutput: {\n    spec: {\n        if len(parameter.outputs) > 0 {\n            _x: [ for _, v in parameter.outputs {\n                "\\(v.ip) \\(v.hostname)"\n            }]\n            message: "Visiting URL: " + strings.Join(_x, "")\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"import-kube-package"},"Import Kube Package"),(0,r.kt)("p",null,"KubeVela automatically generates all K8s resources as internal packages by reading K8s openapi from the\ninstalled K8s cluster."),(0,r.kt)("p",null,"You can use these packages with the format ",(0,r.kt)("inlineCode",{parentName:"p"},"kube/<apiVersion>")," in CUE Template of KubeVela just like the same way\nwith the CUE internal packages."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," can be used as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cue"},'import (\n   apps "kube/apps/v1"\n)\n\nparameter: {\n    name:  string\n}\n\noutput: apps.#Deployment\noutput: {\n    metadata: name: parameter.name\n}\n')),(0,r.kt)("p",null,"Service can be used as (import package with an alias is not necessary):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cue"},'import ("kube/v1")\n\noutput: v1.#Service\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n    spec: type: "ClusterIP",\n}\n\nparameter: {\n    name:  "myapp"\n}\n')),(0,r.kt)("p",null,"Even the installed CRD works:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import (\n  oam  "kube/core.oam.dev/v1alpha2"\n)\n\noutput: oam.#Application\noutput: {\n    metadata: {\n        "name": parameter.name\n    }\n}\n\nparameter: {\n    name:  "myapp"\n}\n')))}m.isMDXComponent=!0}}]);