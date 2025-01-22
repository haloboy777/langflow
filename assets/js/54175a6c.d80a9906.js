"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9455],{64989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=t(74848),l=t(28453);const i={title:"GCP",slug:"/deployment-gcp"},s="Deploy on Google Cloud Platform",r={id:"Deployment/deployment-gcp",title:"GCP",description:"To deploy Langflow on Google Cloud Platform using Cloud Shell, use the below script.",source:"@site/docs/Deployment/deployment-gcp.md",sourceDirName:"Deployment",slug:"/deployment-gcp",permalink:"/deployment-gcp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"GCP",slug:"/deployment-gcp"},sidebar:"docs",previous:{title:"Docker",permalink:"/Deployment/deployment-docker"},next:{title:"HuggingFace\xa0Spaces",permalink:"/deployment-hugging-face-spaces"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy Langflow in GCP",id:"deploy-langflow-in-gcp",level:2},{value:"Spot/Preemptible Instance",id:"spotpreemptible-instance",level:2},{value:"Pricing (approximate)",id:"pricing-approximate",level:2}];function a(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"deploy-on-google-cloud-platform",children:"Deploy on Google Cloud Platform"})}),"\n",(0,o.jsx)(n.p,{children:"To deploy Langflow on Google Cloud Platform using Cloud Shell, use the below script.\nThe script will guide you through setting up a Debian-based VM with the Langflow package, Nginx, and the necessary configurations to run the Langflow dev environment in GCP."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A GCP account with the necessary permissions to create resources"}),"\n",(0,o.jsx)(n.li,{children:"A project on GCP where you want to deploy Langflow"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploy-langflow-in-gcp",children:"Deploy Langflow in GCP"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Click below to launch Cloud Shell."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.a,{href:"https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/langflow-ai/langflow&working_dir=scripts/gcp&shellonly=true&tutorial=walkthroughtutorial.md",children:[(0,o.jsx)(n.img,{alt:"GCP Deploy",src:t(66538).A+"",width:"24",height:"24"})," Deploy to Google Cloud"]})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Trust repo"}),". Some gcloud commands may not run in an ephemeral Cloud Shell environment."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Start"})," and follow the tutorial to deploy Langflow."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"spotpreemptible-instance",children:"Spot/Preemptible Instance"}),"\n",(0,o.jsxs)(n.p,{children:["When running a ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/instances/preemptible",children:"spot (preemptible) instance"}),", the code and VM will behave the same way as in a regular instance, executing the startup script to configure the environment, install necessary dependencies, and run the Langflow application. However, ",(0,o.jsx)(n.strong,{children:"due to the nature of spot instances, the VM may be terminated at any time if Google Cloud needs to reclaim the resources"}),". This makes spot instances suitable for fault-tolerant, stateless, or interruptible workloads that can handle unexpected terminations and restarts."]}),"\n",(0,o.jsx)(n.h2,{id:"pricing-approximate",children:"Pricing (approximate)"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For more information, see the ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/products/calculator?hl=en",children:"GCP Pricing Calculator"}),"."]})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Component"}),(0,o.jsx)(n.th,{children:"Regular Cost (Hourly)"}),(0,o.jsx)(n.th,{children:"Regular Cost (Monthly)"}),(0,o.jsx)(n.th,{children:"Spot/Preemptible Cost (Hourly)"}),(0,o.jsx)(n.th,{children:"Spot/Preemptible Cost (Monthly)"}),(0,o.jsx)(n.th,{children:"Notes"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"100 GB Disk"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"$10/month"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"$10/month"}),(0,o.jsx)(n.td,{children:"Disk cost remains the same for both regular and Spot/Preemptible VMs"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"VM (n1-standard-4)"}),(0,o.jsx)(n.td,{children:"$0.15/hr"}),(0,o.jsx)(n.td,{children:"~$108/month"}),(0,o.jsx)(n.td,{children:"~$0.04/hr"}),(0,o.jsx)(n.td,{children:"~$29/month"}),(0,o.jsx)(n.td,{children:"The VM cost can be significantly reduced using a Spot/Preemptible instance"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"Total"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"$0.15/hr"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"~$118/month"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"~$0.04/hr"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"~$39/month"})}),(0,o.jsx)(n.td,{children:"Total costs for running the VM and disk 24/7 for an entire month"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},66538:(e,n,t)=>{t.d(n,{A:()=>o});const o="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cG9seWdvbiBwb2ludHM9IjIwLjM5IDE4LjI0IDIwLjM5IDggMTEuNTIgMi44OSAxMS41MiA3LjU1IDE2LjM3IDEwLjMyIDE2LjM1IDE1LjkxIDIwLjM5IDE4LjI0IiBzdHlsZT0iZmlsbDojNDI4NWY0Ii8+CiAgICA8cG9seWdvbiBwb2ludHM9IjE0Ljc5IDE5Ljg2IDE0Ljc5IDExLjIzIDcuMzMgNi45MiA3LjMzIDEwLjk0IDExLjM0IDEzLjIzIDExLjMyIDE3Ljg1IDE0Ljc5IDE5Ljg2IiBzdHlsZT0iZmlsbDojNjY5ZGY2Ii8+CiAgICA8cG9seWdvbiBwb2ludHM9IjkuNzYgMjEuMTUgOS43NiAxNC4xNCAzLjY5IDEwLjY0IDMuNjkgMTQgNi44NiAxNS44MSA2Ljg0IDE5LjQ3IDkuNzYgMjEuMTUiIHN0eWxlPSJmaWxsOiNhZWNiZmEiLz4KPC9zdmc+"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const l={},i=o.createContext(l);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);