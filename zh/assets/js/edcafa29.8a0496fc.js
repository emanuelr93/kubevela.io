(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[4184],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30889:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i={title:"KubeVela Performance Test - Managing Massive Applications",author:"Da Yin, Yang Song, Zhengxi Zhou and Jianbo Sun",author_title:"KubeVela Team",author_url:"https://github.com/oam-dev/kubevela",author_image_url:"https://kubevela.io/img/logo.svg",tags:["kubevela"],description:"KubeVela is demonstrated to be able to host thousands of applications effectively with limited resources.",image:"https://raw.githubusercontent.com/oam-dev/kubevela.io/main/docs/resources/KubeVela-03.png",hide_table_of_contents:!1},l={permalink:"/zh/blog/kubevela-performance-test",editUrl:"https://github.com/oam-dev/kubevela.io/tree/main/blog/kubevela-performance-test.md",source:"@site/blog/kubevela-performance-test.md",title:"KubeVela Performance Test - Managing Massive Applications",description:"KubeVela is demonstrated to be able to host thousands of applications effectively with limited resources.",date:"2021-09-03T09:46:09.664Z",formattedDate:"2021\u5e749\u67083\u65e5",tags:[{label:"kubevela",permalink:"/zh/blog/tags/kubevela"}],readingTime:8.055,truncated:!1,prevItem:{title:"KubeVela \u6b63\u5f0f\u5f00\u6e90\uff1a\u4e00\u4e2a\u9ad8\u53ef\u6269\u5c55\u7684\u4e91\u539f\u751f\u5e94\u7528\u5e73\u53f0\u4e0e\u6838\u5fc3\u5f15\u64ce",permalink:"/zh/blog/kubevela-the-extensible-app-platform-based-on-open-application-model-and-kubernetes"}},s=[{value:"Setup",id:"setup",children:[{value:"Cluster Environment",id:"cluster-environment",children:[]},{value:"Application",id:"application",children:[]},{value:"KubeVela Controller",id:"kubevela-controller",children:[]}]},{value:"Experiments",id:"experiments",children:[{value:"Creation",id:"creation",children:[]},{value:"Regular Reconciles",id:"regular-reconciles",children:[]},{value:"Deletion",id:"deletion",children:[]}]},{value:"Analysis",id:"analysis",children:[{value:"Number of Applications",id:"number-of-applications",children:[]},{value:"Configurations",id:"configurations",children:[]},{value:"Scaling Up",id:"scaling-up",children:[]},{value:"Future",id:"future",children:[]}]}],c={toc:s};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As an application management and integration platform, KubeVela needs to handle thousands of applications in production scenario. To evaluate the performance of KubeVela, develop team has conducted performance tests based on simultated environments and demonstrated the capability of managing a large number of applications concurrently."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"cluster-environment"},"Cluster Environment"),(0,r.kt)("p",null,"Working with large clusters requires lots of resources, such as Machines, Network Bandwidth, Storages and many other devices. Therefore, KubeVela team adopts kubemark, an official tool provided by kubernetes, to simulate large clusters by mocking hundreds of kubelets. Each kubelet works like a real node except that they do not run real containers inside pods. The aim of KubeVela performance test mainly focus on whether KubeVela controller can manage thousands of applications effectively, instead of pulling images or executing commands inside pods. As a result, we only need to get resources hosting these fake nodes, also named as hollow-nodes."),(0,r.kt)("p",null,"We set up the Kubernetes clusters on Alibaba Cloud which includes 5 master nodes and 15 worker nodes. The master nodes wil host Kubernetes core components such as kube-apiserver and kube-controller-manager. The worker nodes need to run other pressure-test related componets, including monitoring tools, KubeVela controller and kubemark pods. Since the major target is to test the performance of KubeVela controller, we do not expect other components to be the bottleneck of the pressure test. To this end, both master nodes and worker nodes are equiped with 32 cores and 128 Gi memory. We use the combination of Prometheus, Loki and Grafana as the monitoring suites and grant them enough resources in avoid of crash caused by Out-of-Memory."),(0,r.kt)("p",null,"Notice that KubeVela controller and monitoring tools need to be placed on real nodes to function while all pods created during performance tests should be assigned to hollow-nodes correctly. To achieve that, we give different taints to hollow-nodes and real nodes, and add corresponding tolerations to different pods."),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)("p",null,"To simulate real applications in production, we design an application template with 2 components and 5 functional traits, including"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 webservice component",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a scaler trait setting its replica to 3"),(0,r.kt)("li",{parentName:"ul"},"a sidecar trait attaching another container to each pod"),(0,r.kt)("li",{parentName:"ul"},"an ingress trait generating one ingress instance and one service instance"))),(0,r.kt)("li",{parentName:"ul"},"1 worker component",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a scaler trait also setting its replica to 3"),(0,r.kt)("li",{parentName:"ul"},"a configmap trait generating a new configmap and attaching it to worker pods")))),(0,r.kt)("p",null,"In the following experiment, we test the performance of KubeVela controller managing 3,000 Applications (12,000 Pods in total) on 200 nodes. Applications are created in parallel at first, then kept running for a while, and finally deleted from the cluster. Each application will be reconciled multiple times with latencies and consumed resources recorded by monitoring tools."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In practice, we also have another trait used for adding tolerations as described above.")),(0,r.kt)("h3",{id:"kubevela-controller"},"KubeVela Controller"),(0,r.kt)("p",null,"The KubeVela controller is set up with a group of recommendation configurations as follows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes Resource",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0.5 core CPU"),(0,r.kt)("li",{parentName:"ul"},"1 Gi Memory"),(0,r.kt)("li",{parentName:"ul"},"1 replica"))),(0,r.kt)("li",{parentName:"ul"},"Program ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"concurrent-reconciles=2 (The number of reconcile threads)"),(0,r.kt)("li",{parentName:"ul"},"kube-api-qps=300 (The qps of kubernetes client used in controller)"),(0,r.kt)("li",{parentName:"ul"},"kube-api-burst=500 (The burst of kubernetes client used in controller)"),(0,r.kt)("li",{parentName:"ul"},"informer-re-sync-interval=20m (The interval of routine reconciles.)\nWe will analyze these settings in the below sections.")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To evaluate the performance of KubeVela Controller itself, we disabled the Ingress MutatingWebhook and Application ValidatingWebhook which is beyond the focus of this test but will affect the performance of KubeVela Controller by increasing the latency of creating/patching resources.")),(0,r.kt)("h2",{id:"experiments"},"Experiments"),(0,r.kt)("h3",{id:"creation"},"Creation"),(0,r.kt)("p",null,"The creation of all 3,000 applications lasted 25min. Getting all pods running takes a bit longer time, which is out of the scope of KubeVela controller. "),(0,r.kt)("p",null,"For each application creation, it will trigger three turns of reconciling. The usage of CPU will reach 100% in the late period of creation. The memory usage will increase as the number of applications rises. It reaches around 67% at the end of creation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-cpu",src:a(49231).Z}),"\n",(0,r.kt)("img",{alt:"create-memory",src:a(65029).Z})),(0,r.kt)("p",null,"The average time of the first turn reconciling is relatively short since it only needs patch finalizer. The second and third turn reconciling contain full reconcile cycles and need more time to process. The following charts record the time consumptions of different period during reconciling applications. The average time is generally below 200ms while 99% of reconciles uses less than 800ms."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-avg-time",src:a(46476).Z}),"\n",(0,r.kt)("img",{alt:"create-p99-time",src:a(37447).Z})),(0,r.kt)("h3",{id:"regular-reconciles"},"Regular Reconciles"),(0,r.kt)("p",null,"After creation, applications are reconciled by controller every 20min. the monitoring of 8-hour reconcile process are displayed as below. The CPU usage will come up to 90% once reconcile happens routinely. The memory usage generally keeps a stable pattern, up to 75% memory usage."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"med-cpu",src:a(11706).Z}),"\n",(0,r.kt)("img",{alt:"med-memory",src:a(55662).Z})),(0,r.kt)("p",null,"The average reconcile time is under 200ms while 99% are about 800ms~900ms. Each regular reconcile for all applications generally takes around 10min."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"med-avg",src:a(24251).Z}),"\n",(0,r.kt)("img",{alt:"med-p99",src:a(93582).Z})),(0,r.kt)("h3",{id:"deletion"},"Deletion"),(0,r.kt)("p",null,"The application deletion process is fast and low-resource consumptive. It takes less than 3min to delete all applications. However, notice that the deletion of resources managed by application usually takes longer time. This is because the cleanup of these resources (such as deployments or pods) are not directly controlled by the KubeVela controller. KubeVela controller takes charge of deleting their owner and cleanup them by triggering cascading deletion. In addition, each deletion is associated with two turns of reconcile where the second turn returns immediately when it fails to retrieve target applciation (since it is deleted)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"del-cpu",src:a(59975).Z}),"\n",(0,r.kt)("img",{alt:"del-memory",src:a(94427).Z}),"\n",(0,r.kt)("img",{alt:"del-avg",src:a(14075).Z}),"\n",(0,r.kt)("img",{alt:"del-p99",src:a(90251).Z})),(0,r.kt)("h2",{id:"analysis"},"Analysis"),(0,r.kt)("h3",{id:"number-of-applications"},"Number of Applications"),(0,r.kt)("p",null,"The experiment displayed above demonstrates a classical scenario for KubeVela. Although 3,000 applications are successfully managed by the KubeVela controller in this case, it is strongly recommended to adopt a smaller number (such as 2,000) of applications with the above configuration for the following reasons:\nThe time and resource consumption is closely associated with the spec of applications. If a lot of users apply larger applications with more pods and more other resources, 3,000 applications might break the resource limit more easily.\nThe memory and CPU usage shown above is approching resource limits. If memory drains, the KubeVela controller will crash and restart. If high CPU usage maintains for a long time, it might cause a long waiting queue in KubeVela controller which further lead to longer response time for application changes."),(0,r.kt)("h3",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"There are several parameters users could config to adapt into their own scenario.\nUsing more replica for KubeVela controller do not scale up the ability of KubeVela controller. The leader election mechanism ensures that only one replica will work while others will wait. The aim of multi-replica is to support fast recovery when the working one crash. However, if the crash is caused by OOM, the recovery usually will not be able to fix that.\nThe number of qps and burst in the program configuration should be increased accordingly while scaling up KubeVela controller. These two parameters limit the capability for controller to send requests to apiserver.\nGenerally, in order to scale up KubeVela controller, scale up the resource limits and all the program parameters mentioned above (except the reconcile interval). If you have more applications to manage, add more memory. If you have higher operation frequency, add more CPU and threads, then increase qps and burst accordingly.\nLonger reconcile interval allows more applications to handle, at the cost of longer time to fix potential underlying resource problems. For example, if one deployment managed by one application disappears, the routine reconciling can discover this problem and fix it."),(0,r.kt)("h3",{id:"scaling-up"},"Scaling Up"),(0,r.kt)("p",null,"In addition to the experiment described above, we conducted another two experiment to test how well KubeVela controller can scale to larger clusters and more applications."),(0,r.kt)("p",null,"In a 500-node cluster, we tried to create 5,000 applications with the same spec described above, at the speed of 4 per second and lasted for around 21min. 1 core and 2 Gi memory are granted to KubeVela controller with the use of 4 concurrent reconcile threads. The kube-api-qps and kube-api-burst are raised to 500/800 correspondingly. All 30,000 pods successfully turn into Running phase. The time costs for each reconcile is similar to the previous experiment and CPU/Memory cost is not very high compared to the given resources. The regular reconciles for 5,000 applications takes 7~8 minutes, and no significant resource cost is observed. During this scaling, we found that the throughput of kube-apiserver starts to block the creation of application, as too many resources need to be created while applying applications."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"std-cpu",src:a(51060).Z}),"\n",(0,r.kt)("img",{alt:"std-memory",src:a(20864).Z})),(0,r.kt)("p",null,"Scaling up to 12,000 applications on 1,000 nodes is much harder than previous attempts. With the same creation speed, the apiserver will be flooded by lots of pod scheduling requests and finally start to drop application creation request. To overcome this difficulty, we divide the creation process of applications into several stage. Each stage only create 1,000~3,000 applications and the next stage will not begin until all pods are ready. With this strategy, we successfully create 12,000 applications, 24,000 deployments, 12,000 services, 12,000 ingress, 12,000 configmaps and 72,000 pods. The whole process takes about 30 hours. To hold this number of applications, KubeVela controller consumes 1.7 cores and 2.45 Gi memory. It takes about 12min to finish a full turn of regular reconciles for all 12,000 applications."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"large-cpu",src:a(68274).Z}),"\n",(0,r.kt)("img",{alt:"large-memory",src:a(8643).Z}),"\n",(0,r.kt)("img",{alt:"large-all",src:a(53517).Z})),(0,r.kt)("h3",{id:"future"},"Future"),(0,r.kt)("p",null,"The performance test of KubeVela demonstrates its ability of managing thousands of applications with limited resource consumption. It can also scale up to over 10,000 applications on large clusters with 1,000 nodes. In addition, KubeVela team also conducted similar pressure test for non-deployment based applications such as CloneSet in OpenKruise (which is not enclosed in this report) and reach same conclusions. In the future, we will add more performance tests for more complex scenario like Workflow or MultiCluster."))}u.isMDXComponent=!0},46476:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create-avg-time-c9096f848bacebb15879e354db90ad79.png"},49231:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create-cpu-50a2f951ca18219c47f86fc87861387a.png"},65029:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create-memory-1d5a108aa88dca5b5233df07b975869f.png"},37447:function(e,t,a){"use strict";t.Z=a.p+"assets/images/create-p99-time-6834848739195ef1a6836e8830a60940.png"},14075:function(e,t,a){"use strict";t.Z=a.p+"assets/images/del-avg-b8c9b19de6d6472f5ad751ee5b13cd22.png"},59975:function(e,t,a){"use strict";t.Z=a.p+"assets/images/del-cpu-e20c033c8d55123b17d4daf25af8b0e1.png"},94427:function(e,t,a){"use strict";t.Z=a.p+"assets/images/del-memory-7185fe1f634f7bfede12924608db96f2.png"},90251:function(e,t,a){"use strict";t.Z=a.p+"assets/images/del-p99-c2efbbd508a210d006bbb511944ec547.png"},53517:function(e,t,a){"use strict";t.Z=a.p+"assets/images/large-all-8b83d8c79d4faf56ba67aa9594ce5eee.png"},68274:function(e,t,a){"use strict";t.Z=a.p+"assets/images/large-cpu-d83276edbb15f8a396f27ea144625469.png"},8643:function(e,t,a){"use strict";t.Z=a.p+"assets/images/large-memory-360f435a8446f13a86246c19fad2f729.png"},24251:function(e,t,a){"use strict";t.Z=a.p+"assets/images/med-avg-71e81f42a57ba18fe977c1cb8f041e6f.png"},11706:function(e,t,a){"use strict";t.Z=a.p+"assets/images/med-cpu-1ee6beebe2ddac70499b2fe0f1200346.png"},55662:function(e,t,a){"use strict";t.Z=a.p+"assets/images/med-memory-84ee70599fdfe10c539d31a8ffd011f3.png"},93582:function(e,t,a){"use strict";t.Z=a.p+"assets/images/med-p99-660473173a37679faf8f5c54a4668b7c.png"},51060:function(e,t,a){"use strict";t.Z=a.p+"assets/images/std-cpu-ffd81b9aa9f3f19744fe28d7f9817e73.png"},20864:function(e,t,a){"use strict";t.Z=a.p+"assets/images/std-memory-d0fb9771e7ab4d9588ef193424a76073.png"}}]);