"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6281],{8572:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=i(74848),s=i(28453);const r={},n="Upload File",a={type:"api",id:"upload-file-1",title:"Upload File",description:"",slug:"/upload-file-1",frontMatter:{},api:{tags:["Files"],operationId:"upload_file_api_v1_files_upload__flow_id__post",security:[{OAuth2PasswordBearer:[]},{"API key query":[]},{"API key header":[]}],parameters:[{name:"flow_id",in:"path",required:!0,schema:{type:"string",format:"uuid",title:"Flow Id"}}],requestBody:{required:!0,content:{"multipart/form-data":{schema:{properties:{file:{type:"string",format:"binary",title:"File"}},type:"object",required:["file"],title:"Body_upload_file_api_v1_files_upload__flow_id__post"}}}},responses:{201:{description:"Successful Response",content:{"application/json":{schema:{properties:{flowId:{type:"string",title:"Flowid"},file_path:{type:"string",format:"path",title:"File Path"}},type:"object",required:["flowId","file_path"],title:"UploadFileResponse",description:"Upload file response schema."}}}},422:{description:"Validation Error",content:{"application/json":{schema:{properties:{detail:{items:{properties:{loc:{items:{anyOf:[{type:"string"},{type:"integer"}]},type:"array",title:"Location"},msg:{type:"string",title:"Message"},type:{type:"string",title:"Error Type"}},type:"object",required:["loc","msg","type"],title:"ValidationError"},type:"array",title:"Detail"}},type:"object",title:"HTTPValidationError"}}}}},description:"Upload File",method:"post",path:"/api/v1/files/upload/{flow_id}",securitySchemes:{OAuth2PasswordBearer:{type:"oauth2",flows:{password:{scopes:{},tokenUrl:"api/v1/login"}}},"API key query":{type:"apiKey",in:"query",name:"x-api-key"},"API key header":{type:"apiKey",in:"header",name:"x-api-key"}},info:{title:"Langflow",version:"1.1.1"},postman:{name:"Upload File",description:{type:"text/plain"},url:{path:["api","v1","files","upload",":flow_id"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<uuid>",key:"flow_id"}]},header:[{key:"Content-Type",value:"multipart/form-data"}],method:"POST",body:{mode:"formdata",formdata:[{description:{content:"",type:"text/plain"},key:"file",value:"<binary>",type:"text"}]},auth:{type:"apikey",apikey:[{type:"any",value:"x-api-key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/upload-file-1",previous:{title:"Delete Variable",permalink:"/api/delete-variable"},next:{title:"Download File",permalink:"/api/download-file"}},d=[];function o(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"upload-file",children:"Upload File"})}),"\n",(0,l.jsx)(t.p,{children:"Upload File"}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Path Parameters"})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"flow_id"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" uuid"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Request Body "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"file"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" binary"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"},children:" REQUIRED"})]})})})]}),"\n",(0,l.jsxs)("table",{style:{display:"table",width:"100%"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("th",{style:{textAlign:"left"},children:"Responses"})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"201"})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.p,{children:"Successful Response"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"flowId"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Flowid"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"file_path"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" path"})]})})]})]})})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"},children:(0,l.jsx)("code",{children:"422"})}),(0,l.jsx)("div",{children:(0,l.jsx)(t.p,{children:"Validation Error"})})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("th",{style:{textAlign:"left"},children:[(0,l.jsx)("span",{children:"Schema "}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("div",{})]})})}),(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"detail"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" object[]"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" \u2014 "}),(0,l.jsx)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"},children:" OPTIONAL"}),(0,l.jsx)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"},children:(0,l.jsxs)("tbody",{children:[(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"loc"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" undefined[]"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"msg"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Message"})]})}),(0,l.jsx)("tr",{children:(0,l.jsxs)("td",{children:[(0,l.jsx)("code",{children:"type"}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:" Error Type"})]})})]})})]})})})]})})]})})]})]})]})}function c(e){void 0===e&&(e={});const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>a});var l=i(96540);const s={},r=l.createContext(s);function n(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);