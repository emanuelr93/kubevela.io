(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6807],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22423:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={title:"GitOps with KubeVela"},l={unversionedId:"case-studies/gitops",id:"case-studies/gitops",isDocsHomePage:!1,title:"GitOps with KubeVela",description:"GitOps is a continuous delivery method that allows developers to automatically deploy applications by changing code in a Git repository. KubeVela can support GitOps as an application delivery system. In this section, you will learn how to use KubeVela to do GitOps.",source:"@site/docs/case-studies/gitops.md",sourceDirName:"case-studies",slug:"/case-studies/gitops",permalink:"/docs/next/case-studies/gitops",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/en/case-studies/gitops.md",version:"current",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1631512219,formattedLastUpdatedAt:"9/13/2021",frontMatter:{title:"GitOps with KubeVela"},sidebar:"docs",previous:{title:"Jenkins + KubeVela for CI/CD",permalink:"/docs/next/case-studies/jenkins-cicd"},next:{title:"Canary Release",permalink:"/docs/next/case-studies/canary-blue-green"}},s=[{value:"Setup",id:"setup",children:[]},{value:"Create the Git secret",id:"create-the-git-secret",children:[]},{value:"Create the Application that sync with Git",id:"create-the-application-that-sync-with-git",children:[]},{value:"Modify the code to trigger automatic deployment",id:"modify-the-code-to-trigger-automatic-deployment",children:[]}],p={toc:s};function c(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"GitOps is a continuous delivery method that allows developers to automatically deploy applications by changing code in a Git repository. KubeVela can support GitOps as an application delivery system. In this section, you will learn how to use KubeVela to do GitOps."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"First, setup a Git Repository with ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," files, some source code and a Dockerfile."),(0,r.kt)("p",null,"The code is very simple, starting a service and displaying the version in the code. In ",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),", we'll start a ",(0,r.kt)("inlineCode",{parentName:"p"},"webservice")," for the code and add an ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," trait to access."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-workflow\n  namespace: default\nspec:\n  components:\n    - name: test-server\n      type: webservice\n      properties:\n        # replace the imagepolicy `default:gitops` with your policy later\n        image: <your image> # {"$imagepolicy": "default:gitops"}\n        port: 8088\n      traits:\n        - type: ingress\n          properties:\n            domain: testsvc.example.com\n            http:\n              /: 8088\n')),(0,r.kt)("p",null,"We want users to build the image and push it to the image registry after changing the code, so we need to integrate with a CI tool like GitHub Actions or Jenkins to do it. In this example, we use GitHub Actions to build the image. For the code and configuration file, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/samples/tree/master/9.GitOps_Demo"},"Example Repo"),"."),(0,r.kt)("h2",{id:"create-the-git-secret"},"Create the Git secret"),(0,r.kt)("p",null,"After the new image is pushed to the image registry, KubeVela will recognize the new image and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," file in the Git repository and cluster. Therefore, we need a secret with Git information for KubeVela to commit to the Git repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: my-secret\ntype: kubernetes.io/basic-auth\nstringData:\n  username: <your username>\n  password: <your password>\n")),(0,r.kt)("h2",{id:"create-the-application-that-sync-with-git"},"Create the Application that sync with Git"),(0,r.kt)("p",null,"After completing the basic configuration above, we can create an Application file that syncs with the corresponding Git repository and image registry information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: git-app\nspec:\n  components:\n  - name: gitops\n    type: kustomize\n    properties:\n      repoType: git\n      url: <your github repo address>\n      # your git secret\n      secretRef: my-secret\n      # the interval time to pull from git repo and image registry\n      pullInterval: 1m\n      git:\n        # the specific branch\n        branch: master\n      # the path that you want to listen\n      path: .\n      imageRepository:\n        image: <your image>\n        # if it's a private image registry, use `kubectl create secret docker-registry` to create the secret\n        # secretRef: imagesecret\n        filterTags:\n          # filter the image tag\n          pattern: '^master-[a-f0-9]+-(?P<ts>[0-9]+)'\n          extract: '$ts'\n        # use the policy to sort the latest image tag and update\n        policy:\n          numerical:\n            order: asc\n")),(0,r.kt)("p",null,"Apply the file to the cluster and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," in clusters, we can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"git-app")," automatically pulls the config from Git Repository and apply the application to the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\n\nAPP                 COMPONENT       TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME\nfirst-vela-workflow test-server     webservice  ingress running healthy         2021-09-10 11:23:34 +0800 CST\ngit-app             gitops          kustomize           running healthy         2021-09-10 11:23:32 +0800 CST\n")),(0,r.kt)("p",null,"We can ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," to see the current version in code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -H "Host:testsvc.example.com" http://<your-ip>\nVersion: 0.1.5\n')),(0,r.kt)("h2",{id:"modify-the-code-to-trigger-automatic-deployment"},"Modify the code to trigger automatic deployment"),(0,r.kt)("p",null,"After the first applying, we can modify the code in Git Repository to apply automatically."),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.1.6")," in code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const VERSION = "0.1.6"\n\nfunc main() {\n    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n        _, _ = fmt.Fprintf(w, "Version: %s\\n", VERSION)\n    })\n    if err := http.ListenAndServe(":8088", nil); err != nil {\n        println(err.Error())\n    }\n}\n')),(0,r.kt)("p",null,"Commit the change to the Git Repository, we can see that our CI pipelines has built the image and push it to the image registry."),(0,r.kt)("p",null,"KubeVela will then listening to the image registry and update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," in Git Repository with the latest image tag. We can see that there is a commit form ",(0,r.kt)("inlineCode",{parentName:"p"},"kubevelabot"),", the commit message is ",(0,r.kt)("inlineCode",{parentName:"p"},"Update image automatically.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt",src:n(31857).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that the commit from ",(0,r.kt)("inlineCode",{parentName:"p"},"kubevelabot")," will not trigger the pipeline again and since we filter out the commit from KubeVela in CI configuration."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"jobs:\n publish:\n   if: \"!contains(github.event.head_commit.message, 'Update image automatically')\"\n"))),(0,r.kt)("p",null,"Re-check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," in cluster, we can see that the image of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," has been updated after a while. We can ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingress")," to see the current version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -H "Host:testsvc.example.com" http://<your-ip>\nVersion: 0.1.6\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Version")," has been updated successfully! Now we're done with everything from changing the code to automatically applying to the cluster."),(0,r.kt)("p",null,"KubeVela polls the latest information from the code and image repo periodically (at an interval that can be customized):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," file in the Git repository is updated, KubeVela will update the ",(0,r.kt)("inlineCode",{parentName:"li"},"Application")," in the cluster based on the latest configuration."),(0,r.kt)("li",{parentName:"ul"},"When a new tag is added to the image registry, KubeVela will filter out the latest tag based on your policy and update it to Git repository. When the files in the repository are updated, KubeVela repeats the first step and updates the files in the cluster, thus achieving automatic deployment.")),(0,r.kt)("p",null,"By integrating with GitOps, KubeVela helps users speed up deployment and simplify continuous deployment."))}c.isMDXComponent=!0},31857:function(e,t,n){"use strict";t.Z=n.p+"assets/images/gitops-commit-2939c194728cae236148df6f64c68f8e.png"}}]);