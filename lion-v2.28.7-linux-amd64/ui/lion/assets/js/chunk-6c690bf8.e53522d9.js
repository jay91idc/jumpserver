(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c690bf8"],{"083a":function(e,t,i){"use strict";i("fa63")},"0d44":function(e,t,i){},1678:function(e,t,i){"use strict";i("0d44")},"1f04":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("el-container",[t("el-main",[t("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"element-loading-text":e.loadingText,"element-loading-background":"#1f1b1b"}},[t("div",{style:e.containerStyle},[t("div",{attrs:{id:"displayOuter"}},[t("div",{attrs:{id:"displayMiddle"}},[t("div",{attrs:{id:"display"}})])])])])],1),t("RightPanel",[t("Settings",{attrs:{settings:e.settings,title:e.$t("Settings")}})],1),e.clipboardInited?t("GuacClipboard",{ref:"clipboard",attrs:{visible:e.clipboardDrawer,client:e.client,tunnel:e.tunnel},on:{"update:visible":function(t){e.clipboardDrawer=t},closeDrawer:e.onCloseDrawer}}):e._e(),e.fileSystemInited?t("GuacFileSystem",{ref:"fileSystem",attrs:{client:e.client,tunnel:e.tunnel,show:e.fileDrawer},on:{"update:show":function(t){e.fileDrawer=t},closeDrawer:e.onCloseDrawer}}):e._e()],1)},s=[],o=(i("14d9"),i("a9c6")),l=i.n(o),a=i("2d5d"),c=i("b26a"),r=i("3d75"),d=i("cf45"),u=i("ff66");function h(e,t){return Object(u["c"])(e+"/session",t,{})}function p(e,t){return Object(u["b"])(e+`/sessions/${t}/`,{})}var g=function(){var e=this,t=e._self._c;return t("el-drawer",{attrs:{direction:"ltr",title:e.$t("Clipboard"),visible:e.visible},on:{"update:visible":e.updateVisible,close:e.onCloseDrawer}},[t("div",{staticClass:"grid-content bg-purple",staticStyle:{width:"100%"}},[t("el-input",{staticClass:"clipboard",attrs:{type:"textarea",rows:10},model:{value:e.clipboardText,callback:function(t){e.clipboardText=t},expression:"clipboardText"}})],1)])},m=[],b={name:"GuacClipboard",props:{client:{type:Object,required:!0},tunnel:{type:Object,required:!0},visible:{type:Boolean,default:!1}},data(){return{clipboardText:""}},watch:{clipboardText(e){this.sendDataToRemoteClipboard(e),this.setLocalClipboard(e)}},methods:{sendClipboardToRemote(){navigator.clipboard&&navigator.clipboard.readText&&navigator.clipboard.readText().then(e=>{e!==this.clipboardText&&(this.sendDataToRemoteClipboard(e),this.clipboardText=e)})},updateVisible(e){this.$emit("update:visible",e)},sendDataToRemoteClipboard(e){const t={type:"text/plain",data:e};if(!this.client)return;let i;this.clipboardText=e;const n=this.client.createClipboardStream(t.type);"string"===typeof t.data?(i=new l.a.StringWriter(n),i.sendText(t.data),i.sendEnd(),this.$log.debug("send text: ",t)):(i=new l.a.BlobWriter(n),i.oncomplete=function(){i.sendEnd()},this.$log.debug("Send blob: ",t),i.sendBlob(t.data))},receiveClientClipboard(e,t){let i;if(this.$log.debug("Recv clipboard: ",e,t),/^text\//.exec(t)){i=new l.a.StringReader(e);let t="";i.ontext=e=>{t+=e},i.onend=async()=>{this.clipboardText=t,navigator.clipboard&&await navigator.clipboard.writeText(t)}}else i=new l.a.BlobReader(e,t),i.onprogress=e=>{this.$log.debug("blobReceived: ",e)},i.onend=()=>{this.clipboardText=i.getBlob()}},setLocalClipboard(e){navigator.clipboard&&navigator.clipboard.writeText(e)},onCloseDrawer(){this.$emit("closeDrawer")}}},f=b,y=(i("e1f8"),i("2877")),w=Object(y["a"])(f,g,m,!1,null,"56956980",null),C=w.exports,S=function(){var e=this,t=e._self._c;return t("div",[t("el-drawer",{staticClass:"fileUploaderDraw",attrs:{direction:"ltr",title:e.$t("Files"),visible:e.show},on:{"update:visible":e.updateShow,close:e.onCloseDrawer}},[t("el-upload",{ref:"upload",staticClass:"upload-file",attrs:{action:"",multiple:!0,"file-list":e.fileList,"auto-upload":!0,"http-request":e.uploadFile,"on-success":e.refresh}},[t("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v(e._s(e.$t("UploadFile")))]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"default"},on:{click:e.clearFileList}},[e._v(e._s(e.$t("ClearDone")))])],1),t("div",{staticClass:"fileZone",staticStyle:{padding:"20px"}},[t("el-row",{staticClass:"currentFolder",attrs:{gutter:20}},[t("el-col",{attrs:{span:6}},[t("span",{on:{click:e.changeParentFolder}},[e._v(e._s(e.currentFolder.streamName)+" ")])]),t("el-col",{attrs:{span:6,offset:10}},[t("i",{staticClass:"el-icon-refresh",staticStyle:{"padding-left":"20px"},on:{click:e.refresh}})])],1),t("div",{staticClass:"fileList"},e._l(e.sortedFiles,(function(i,n){return t("GuacFile",{key:n,attrs:{"file-item":i},on:{downloadFile:e.downloadFile,changeFolder:e.changeFolder}})})),1)],1)],1)],1)},v=[],E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"fileItem"},["NORMAL"===e.fileItem.type?t("i",{staticClass:"el-icon-document"}):t("i",{staticClass:"el-icon-folder"}),t("el-link",{staticClass:"filename",on:{click:e.clickFile}},[e._v(" "+e._s(e.filename)+" ")])],1)},k=[],$={name:"GuacFile",props:{fileItem:{type:Object,default:null}},computed:{filename(){const e=this.fileItem.name,t=e.length;return t<45?e:e.slice(0,30)+"..."+e.slice(t-15,t)}},methods:{clickFile(){this.fileItem.type===d["c"].NORMAL?this.$emit("downloadFile",this.fileItem):this.$emit("changeFolder",this.fileItem)}}},D=$,T=(i("4d9c"),Object(y["a"])(D,E,k,!1,null,"0085007d",null)),F=T.exports,O=i("5408"),x=i("12cb"),R={name:"GuacFileSystem",components:{GuacFile:F},props:{client:{type:Object,required:!0},tunnel:{type:Object,required:!0},show:{type:Boolean,default:!1}},data(){return{files:{},currentFolder:{mimetype:l.a.Object.STREAM_INDEX_MIMETYPE,streamName:l.a.Object.ROOT_STREAM,type:"DIRECTORY",files:{},parent:null},fileList:[],currentFilesystem:{object:null,name:""}}},computed:{sortedFiles:function(){const e=[];for(const i in this.files)e.push(this.files[i]);const t=e.sort((function(e,t){return Object(d["h"])(e)&&!Object(d["h"])(t)?-1:!Object(d["h"])(e)&&Object(d["h"])(t)?1:e.name.localeCompare(t.name)}));return t},guacObject(){return this.currentFilesystem.object}},mounted:function(){},destroyed:function(){this.$log.debug("destroyed GuacFileSystem")},methods:{clearFileList(){this.fileList.splice(0,this.fileList.length)},fileSystemReceived(e,t){this.$log.debug("fileSystemReceived ",e,t),this.currentFilesystem.object=e,this.currentFilesystem.name=t,this.updateDirectory(this.currentFolder).then(e=>{this.$log.debug(e),this.files=e})},updateShow(e){this.$log.debug("Update show to: ",e),this.$emit("update:show",e)},onCloseDrawer(){this.$emit("closeDrawer")},onDownloadFile(e,t,i){this.$log.debug("On download file"),this.clientFileReceived(e,t,i)},clientFileReceived(e,t,i){this.$log.debug("clientFileReceived, ",this.tunnel.uuid,e,t,i);const n=d["a"]+"/tunnels/"+encodeURIComponent(this.tunnel.uuid)+"/streams/"+encodeURIComponent(e.index)+"/"+encodeURIComponent(Object(d["k"])(i)),s=document.createElement("iframe");s.style.position="fixed",s.style.border="none",s.style.width="1px",s.style.height="1px",s.style.left="-1px",s.style.top="-1px",document.body.appendChild(s),s.onload=function(){document.body.removeChild(s)},e.onblob=function(){e.sendAck("OK",l.a.Status.Code.SUCCESS)},e.onend=function(){window.setTimeout((function(){s.parentElement&&document.body.removeChild(s)}),500),this.loadingText=""}.bind(this),this.loadingText="downloading file",s.src=n,this.$log.debug(n)},fileDrop:function(e){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer,i=t.files;this.handleFiles(i[0]).then(()=>{this.$message(i[0].name+" "+this.$t("UploadSuccess"))}).catch(e=>{let t=e.message;"cn"===Object(x["b"])()&&(t=this.$t(O["b"][e.code])||e.message),this.$warning(t)})},handleFiles:function(e,t,i,n){const s=this.client,o=this.tunnel,l=this;let a;return a=t?t.createOutputStream(e.type,i):s.createFileStream(e.type,e.name),new Promise((function(t,i){a.onack=function(s){if(s.isError())return l.$log.debug("Upload error",s.code,s),void i(s);const c=function(e,n,s,o){const a=d["a"]+"/tunnels/"+encodeURIComponent(e)+"/streams/"+encodeURIComponent(n.index)+"/"+encodeURIComponent(Object(d["k"])(s.name)),c=new XMLHttpRequest;c.withCredentials=!0,o&&c.upload&&c.upload.addEventListener("progress",(function(e){o(e)})),c.onreadystatechange=()=>{4===c.readyState&&(c.status>=200&&c.status<300?(l.$log.debug("Upload load success"),t()):"application/json"===c.getResponseHeader("Content-Type")?l.$log.debug("failed upload ",c.responseText):(c.status>=400&&c.status,l.$log.debug("Upload failed: ",c.status),i(c.status)))},c.open("POST",a,!0);const r=new FormData;r.append("file",s),c.send(r)};c(o.uuid,a,e,n),a.onack=null}}))},onChangeFolder(e){this.currentFolder=e},uploadFile(e){this.$log.debug("uploadFile: ",e);const t=e.file;let i;this.currentFolder&&(i=this.currentFolder.streamName+"/"+t.name),this.$log.debug("File is: ",t);let n=!1;const s=e.file.size>1073741824?.2:.4,o=function t(i){if(n)return;const o={percent:50+s*i};o.percent>=100||(e.onProgress(o),setTimeout((function(){t(i+1)}),5e3))},l=function(t){t.total>0&&(t.percent=t.loaded/t.total*50),e.onProgress(t),t.loaded===t.total&&setTimeout((function(){o(1)}),5e3)};this.handleFiles(t,this.currentFilesystem.object,i,l).then(i=>{e.onSuccess("Ok"),this.refresh(),n=!0;const s=t.name.length>20?t.name.substring(0,20)+"...":t.name;this.$message(s+" "+this.$t("UploadSuccess"))}).catch(t=>{e.onError(t),this.$log.debug("Upload error: ",t);let i=t.message;"cn"===Object(x["b"])()&&(i=this.$t(O["b"][t.code])||t.message),this.$warning(i)})},downloadFile(e){this.$log.debug("Download file: ",e);const t=e.streamName,i=function(e,i){const n=t.match(/(.*[\\/])?(.*)/)[2];this.onDownloadFile(e,i,n)}.bind(this);this.guacObject.requestInputStream(t,i)},changeFolder(e){this.$log.debug("ChangeFolder ",e),this.updateDirectory(e).then(t=>{this.files=t,this.onChangeFolder(e)})},changeParentFolder(){null!==this.currentFolder.parent?(this.$log.debug("切换到parent目录了",this.currentFolder),this.updateDirectory(this.currentFolder.parent).then(e=>{this.files=e,this.changeFolder(this.currentFolder.parent)})):this.$log.debug("没有parent目录了")},updateDirectory(e){if(!this.guacObject)return new Promise((e,t)=>{t("No guacObject")});const t=this.guacObject;return new Promise((function(i,n){e.mimetype===l.a.Object.STREAM_INDEX_MIMETYPE&&t.requestInputStream(e.streamName,(function(t,n){if(n===l.a.Object.STREAM_INDEX_MIMETYPE){t.sendAck("Ready",l.a.Status.Code.SUCCESS);var s=new l.a.JSONReader(t);s.onprogress=function(){t.sendAck("Received",l.a.Status.Code.SUCCESS)},s.onend=function(){e.files={};var t=e.streamName;"/"!==t.charAt(t.length-1)&&(t+="/");var n=s.getJSON();for(var o in n)if(o.substring(0,t.length)===t){var a=o.substring(t.length),c=d["c"].NORMAL;n[o]===l.a.Object.STREAM_INDEX_MIMETYPE&&(c=d["c"].DIRECTORY),e.files[a]={mimetype:n[o],streamName:o,type:c,parent:e,name:a}}i(e.files)}}else t.sendAck("Unexpected mimetype",l.a.Status.Code.UNSUPPORTED)}))}))},refresh(){this.files=[],this.updateDirectory(this.currentFolder).then(e=>{this.files=e})}}},I=R,_=(i("083a"),Object(y["a"])(I,S,v,!1,null,"655758ae",null)),M=_.exports,j=function(){var e=this,t=e._self._c;return t("div",{ref:"container",staticClass:"container",class:{show:e.show}},[t("div",{staticClass:"background"}),t("div",{staticClass:"right-panel"},[t("div",{ref:"dragDiv",staticClass:"handle-button"},[t("i",{class:e.show?"el-icon-close":"el-icon-setting"})]),t("div",{staticClass:"right-panel-items"},[e._t("default")],2)])])},L=[],N={name:"RightPanel",props:{clickNotClose:{type:Boolean,default:!1}},data(){return{show:!1}},watch:{show(e){e&&!this.clickNotClose&&this.addEventClick(),e?Object(d["d"])(document.body,"showRightPanel"):Object(d["j"])(document.body,"showRightPanel")}},mounted(){this.init(),this.insertToBody()},beforeDestroy(){const e=this.$refs.container;e.remove()},methods:{init(){this.$nextTick(()=>{const e=this.$refs.dragDiv,t={};e.addEventListener("mousedown",i=>{const n=e.getBoundingClientRect().left,s=e.getBoundingClientRect().top,o=i.clientX-n,l=i.clientY-s;t.clientX=i.clientX,t.clientY=i.clientY,document.onmousemove=function(t){e.style.left=t.clientX-o+"px",e.style.top=t.clientY-l+"px";const i=window.innerHeight-e.getBoundingClientRect().height,n=window.innerWidth-e.getBoundingClientRect().width;e.style.left=n+"px",e.style.left="-48px",e.getBoundingClientRect().top<=0&&(e.style.top="0px"),e.getBoundingClientRect().top>=i&&(e.style.top=i+"px")},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}},!1),e.addEventListener("mouseup",e=>{const i=e.clientX,n=e.clientY;i===t.clientX&&n===t.clientY&&(this.show=!this.show)})})},addEventClick(){window.addEventListener("click",this.closeSidebar)},closeSidebar(e){const t=e.target.closest(".right-panel");t||(this.show=!1,window.removeEventListener("click",this.closeSidebar))},insertToBody(){const e=this.$refs.container,t=document.querySelector("body");t.insertBefore(e,t.firstChild)}}},P=N,A=(i("3c7e"),Object(y["a"])(P,j,L,!1,null,"7cfcfbb8",null)),U=A.exports,G=function(){var e=this,t=e._self._c;return t("div",{staticClass:"setting"},[t("h3",{staticClass:"title"},[e._v(e._s(e.title))]),t("ul",{staticStyle:{padding:"0"}},e._l(e.settings,(function(i,n){return t("li",{key:n,staticClass:"item"},[t("el-button",{staticClass:"item-button",class:"icon "+i.icon,attrs:{type:"text",disabled:i.disabled()},on:{click:function(t){t.stopPropagation(),i.click&&e.itemClick(i)}}},[e._v(" "+e._s(i.title)+" "+e._s(i.content&&Object.keys(i.content).length>0?Object.keys(i.content).length:null)+" ")]),i.content?t("div",{staticClass:"content"},e._l(i.content,(function(n,s){return t("el-button",{key:s,staticClass:"content-item",attrs:{type:"text",disabled:i.disabled()},on:{click:function(e){i.itemClick&&i.itemClick(n.keys)}}},[e._v(" "+e._s(n.name)+" ")])})),1):e._e()],1)})),0)])},B=[],W={name:"Settings",props:{title:{type:String,required:!0},settings:{type:Array,default:()=>[]}},methods:{itemClick(e){this.$parent.show=!1,e.click()}}},z=W,H=(i("1678"),Object(y["a"])(z,G,B,!1,null,"5ead96a1",null)),X=H.exports,Y=i("ed08");const q=1,K=0;var J={name:"GuacamoleConnect",components:{GuacClipboard:C,GuacFileSystem:M,RightPanel:U,Settings:X},data(){return{apiPrefix:"/api",wsPrefix:"/lion/ws/connect/",dialogFormVisible:!1,requireParams:[],isMenuCollapse:!0,hasFileSystem:!1,clipboardDrawer:!1,fileDrawer:!1,loading:!0,session:null,tunnelState:"",fileSystemInited:!1,clipboardInited:!1,loadingText:x["a"].t("Connecting")+" ...",clientState:"Connecting",localCursor:!1,client:null,clientProperties:{autoFit:!0},tunnel:null,displayWidth:window.innerWidth-K,displayHeight:window.innerHeight,connected:!1,clipboardData:{type:"text/plain",data:""},sink:null,keyboard:null,combinationKeys:[{keys:["65307"],name:"Esc"},{keys:["65480"],name:"F11"},{keys:["65507","65513","65535"],name:"Ctrl+Alt+Delete"},{keys:["65507","65513","65288"],name:"Ctrl+Alt+Backspace"},{keys:["65515","100"],name:"Windows+D"},{keys:["65515","101"],name:"Windows+E"},{keys:["65515","114"],name:"Windows+R"},{keys:["65515","120"],name:"Windows+X"},{keys:["65515"],name:"Windows"}],scale:1,timeout:null,origin:null,lunaId:null}},computed:{containerStyle(){return{height:this.displayHeight+"px",width:this.displayWidth+"px"}},menuDisable:function(){return!("Connected"===this.clientState)||!("OPEN"===this.tunnelState)},isRemoteApp:function(){return!!this.session&&this.session.remote_app},title:function(){return this.isRemoteApp?this.session.remote_app.name:this.session.asset.hostname},settings(){const e=[{title:this.$t("Clipboard"),icon:"el-icon-document-copy",disabled:()=>this.menuDisable||!this.clipboardInited,click:()=>this.toggleClipboard()},{title:this.$t("Files"),icon:"el-icon-folder",disabled:()=>!this.hasFileSystem||this.menuDisable,click:()=>this.toggleFileSystem()}];return this.isRemoteApp||e.push({title:this.$t("Shortcuts"),icon:"el-icon-position",disabled:()=>this.menuDisable||this.isRemoteApp,content:this.combinationKeys,itemClick:e=>this.handleKeys(e)}),e}},mounted:function(){const e=Object(d["f"])();this.apiPrefix=e["api"],this.wsPrefix=e["ws"];const t=this;h(e["api"],e["data"]).then(e=>{window.addEventListener("beforeunload",e=>this.beforeunloadFn(e)),window.addEventListener("unload",e=>this.beforeunloadFn(e)),this.session=e.data,this.startConnect()}).catch(e=>{const i=e.message||e;t.$log.debug("err ",i),t.$error(t.$t(Object(Y["a"])(i))),t.loading=!1}),window.addEventListener("message",this.handleEventFromLuna,!1)},methods:{toggleFileSystem(e){this.menuDisable||(this.fileDrawer=!this.fileDrawer)},initFileSystem(){this.fileSystemInited=!0,setTimeout(()=>{const e=document.getElementById("display");e.addEventListener("dragenter",(function(e){e.stopPropagation(),e.preventDefault()}),!1),e.addEventListener("dragover",(function(e){e.stopPropagation(),e.preventDefault()}),!1),e.addEventListener("drop",this.$refs.fileSystem.fileDrop,!1)},300)},initClipboard(){if(this.session&&this.session.permission){const e=this.session.permission.actions;let t=!1;const i=["all","clipboard_copy","clipboard_paste","clipboard_copy_paste"];for(let n=0;n<e.length;n++)if(i.includes(e[n])){t=!0;break}this.$log.debug(this.session.permission),this.clipboardInited=t}},beforeunloadFn(e){this.removeSession()},startConnect(){this.getConnectString(this.session.id).then(e=>{this.connectGuacamole(e,this.wsPrefix)})},onClientConnected(){this.onWindowResize(),window.addEventListener("resize",this.debounceWindowResize),window.onfocus=this.onWindowFocus,window.onblur=()=>{null!==this.keyboard&&this.keyboard.reset()}},handleEventFromLuna(e){const t=e.data;switch(t.name){case"PING":if(null!=this.lunaId)return;this.lunaId=t.id,this.origin=e.origin,this.sendEventToLuna("PONG",null);break}console.log("Lion got post msg: ",t)},sendEventToLuna(e,t){null!=this.lunaId&&window.parent.postMessage({name:e,id:this.lunaId,data:t},this.origin)},removeSession(){p(this.apiPrefix,this.session.id).catch(e=>{this.$log.debug(e)})},menuIndex(e,t){return e+t},toggleClipboard(){this.menuDisable||(this.clipboardDrawer=!this.clipboardDrawer)},getAutoSize(){const e=this.displayWidth,t=this.displayHeight;return this.$log.debug("auto size:",e,t),[e,t]},getGuaSize(){const e=Object(d["i"])("LunaSetting")||{},t=e["rdpResolution"];if(!t||"auto"===t.toLowerCase()||-1===t.indexOf("x"))return this.$log.debug("Solution invalid: ",t),this.getAutoSize();let[i,n]=t.split("x");return i=parseInt(i),n=parseInt(n),isNaN(i)||i<100||isNaN(n)||n<100?(this.$log.debug("Solution invalid2: ",t),this.getAutoSize()):[i,n]},getConnectString(e){const[t,i]=this.getGuaSize(),n=96*q;return new Promise((s,o)=>{Promise.all([Object(a["a"])(),Object(c["a"])(),Object(r["a"])()]).then(o=>{const l=o[0],a=o[1],c=o[2];let r="SESSION_ID="+encodeURIComponent(e)+"&GUAC_WIDTH="+Math.floor(t)+"&GUAC_HEIGHT="+Math.floor(i)+"&GUAC_DPI="+Math.floor(n);this.$log.debug("Connect string: ",r),l.forEach((function(e){r+="&GUAC_IMAGE="+encodeURIComponent(e)})),a.forEach((function(e){r+="&GUAC_AUDIO="+encodeURIComponent(e)})),c.forEach((function(e){r+="&GUAC_VIDEO="+encodeURIComponent(e)})),s(r)})})},onTunnelStateChanged(e){switch(e){case l.a.Tunnel.State.CONNECTING:this.tunnelState="CONNECTING",this.$log.debug("Tunnel state change to Tunnel.State.CONNECTING ");break;case l.a.Tunnel.State.OPEN:this.tunnelState="OPEN",this.$log.debug("Tunnel state change to Tunnel.State.OPEN "),this.initFileSystem(),this.initClipboard();break;case l.a.Tunnel.State.UNSTABLE:this.tunnelState="UNSTABLE",this.$log.debug("Tunnel state change to Tunnel.State.UNSTABLE ");break;case l.a.Tunnel.State.CLOSED:this.tunnelState="CLOSED",this.$log.debug("Tunnel state change to Tunnel.State.CLOSED ");break;default:this.tunnelState="unknown",this.$log.debug("Tunnel state change tounknown ",e);break}},clientStateChanged(e){switch(e){case 0:this.clientState="IDLE",this.$log.debug("clientState, IDLE");break;case 1:this.clientState="Connecting",this.$log.debug("clientState, Connecting");break;case 2:this.clientState="Connected + waiting",this.$log.debug("clientState, Connected + waiting");break;case 3:this.clientState="Connected",this.$log.debug("clientState, Connected "),this.loading=!1;var t="audio/L16;rate=44100,channels=2",i=function e(i){const n=i.createAudioStream(t);let s;try{s=l.a.AudioRecorder.getInstance(n,t)}catch(o){console.log("Get audio recorder error, ignore"),s=null}s?s.onclose=e.bind(this,i):n.sendEnd()};i(this.client),this.onClientConnected();break;case 4:case 5:this.clientState="Disconnecting",this.$log.debug("clientState, Disconnected ");var n=document.getElementById("display");n.innerHTML="",this.sendEventToLuna("CLOSE",null);break}},clientOnErr(e){this.loading=!1,this.$log.debug("clientOnErr",e),this.closeDisplay(e)},closeDisplay(e){this.$log.debug(e,x["a"].locale);const t=e.code;let i=e.message;const n=Object(x["b"])();i=Y["b"][t]?this.$t(Y["b"][t]):e.message,1005===t&&(i="cn"===n?e.message+" "+i:i+" "+e.message),this.$alert(i,this.$t("ErrTitle"),{confirmButtonText:this.$t("OK"),callback:e=>{const t=document.getElementById("display");this.client&&(t.innerHTML="")}})},onCursor(e,t,i){this.localCursor=!0},handleMouseState(e){this.client&&this.display&&(this.display.showCursor(!this.localCursor),this.sendScaledMouseState(e))},sendScaledMouseState(e){const t=new l.a.Mouse.State(e.x/this.display.getScale(),e.y/this.display.getScale(),e.left,e.middle,e.right,e.up,e.down);this.client.sendMouseState(t)},handleEmulatedMouseState(e){this.client&&this.display&&(this.display.showCursor(!0),this.$log.debug("handleEmulatedMouseState",e),this.sendScaledMouseState(e))},handleEmulatedMouseDown(e){this.handleEmulatedMouseState(e),this.isMenuCollapse=!0,this.sink.focus(),this.$log.debug("handleEmulatedMouseDown",e)},onMouseDown(e){document.body.focus(),this.handleMouseState(e),this.isMenuCollapse=!0,this.sink.focus()},onMouseOut(e){this.display&&this.display.showCursor(!1)},onCloseDrawer(){this.$log.debug("onCloseDrawer",this.sink),this.sink.focus()},getPropScale(){const e=this.client.getDisplay();if(!e)return;const[t,i]=this.getAutoSize();return Math.min(t/Math.max(e.getWidth(),1),i/Math.max(e.getHeight(),1))},updateDisplayScale(){const e=this.client.getDisplay();if(!e)return;const t=this.getPropScale();t!==this.scale&&(this.scale=t,this.$log.debug("this scale",t),this.display.scale(t))},debounceWindowResize(){this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.onWindowResize(),300)},onWindowResize(){this.displayWidth=window.innerWidth-K,this.displayHeight=window.innerHeight;const[e,t]=this.getGuaSize();if(null!==this.client){const i=this.client.getDisplay(),n=i.getHeight()*q,s=i.getWidth()*q;if(this.updateDisplayScale(),n===e&&s===t)return;this.client.sendSize(e,t)}},displayResize(e,t){this.$log.debug("Display resize: ",e,t);const i=this.getPropScale();this.display.scale(i)},onWindowFocus(){this.$log.debug("On window focus "),this.$refs.clipboard&&this.$refs.clipboard.sendClipboardToRemote()},onsync:function(e){},handleKeys(e){if(this.client){for(let t=0;t<e.length;t++)this.client.sendKeyEvent(1,e[t]);for(let t=0;t<e.length;t++)this.client.sendKeyEvent(0,e[t])}},setTunnelCallback(e){const t=this;e.onerror=e=>{t.$message.error(t.$t("WebSocketError")),t.$log.error("Tunnel error: ",e)},e.onuuid=e=>{t.$log.debug("Tunnel assigned UUID: ",e),t.tunnel.uuid=e},e.onstatechange=t.onTunnelStateChanged},onFileSystem(e,t){this.hasFileSystem=!0,this.$refs.fileSystem&&this.$refs.fileSystem.fileSystemReceived(e,t)},setClientCallback(e){const t=this;e.onstatechange=this.clientStateChanged,e.onerror=this.clientOnErr,e.onfilesystem=this.onFileSystem,e.onfile=(e,i,n)=>t.$refs.fileSystem.clientFileReceived(e,i,n),e.onclipboard=(e,i)=>t.$refs.clipboard.receiveClientClipboard(e,i),e.onsync=this.onsync},setDisplayCallback(e){e.onresize=this.displayResize,e.oncursor=this.onCursor;const t=e.getElement();this.$log.debug("Display el: ",t),t.onclick=e=>(e.preventDefault(),!1);const i=new l.a.Mouse(t);i.onmousedown=this.onMouseDown,i.onmouseup=i.onmousemove=this.handleMouseState,i.onmouseout=this.onMouseOut,this.mouse=i;const n=document.getElementById("display"),s=new l.a.Mouse.Touchscreen(n);s.onmousedown=this.handleEmulatedMouseDown,s.onmousemove=s.onmouseup=this.handleEmulatedMouseState;const o=new l.a.InputSink;o.focus(),this.sink=o;const a=new l.a.Keyboard(o.getElement());a.onkeydown=e=>{this.client.sendKeyEvent(1,e)},a.onkeyup=e=>{this.client.sendKeyEvent(0,e)},this.keyboard=a},connectGuacamole(e,t){const i=document.getElementById("display"),n=new l.a.WebSocketTunnel(t);n.receiveTimeout=6e4;const s=new l.a.Client(n);this.client=s,this.tunnel=n,this.display=s.getDisplay(),this.setTunnelCallback(this.tunnel),this.setClientCallback(this.client),this.setDisplayCallback(this.display),i.appendChild(this.display.getElement()),i.appendChild(this.sink.getElement()),this.$log.debug("Display : ",i),s.connect(e),window.onunload=function(){s.disconnect()}}}},V=J,Z=(i("3371"),Object(y["a"])(V,n,s,!1,null,"763b491e",null));t["default"]=Z.exports},3371:function(e,t,i){"use strict";i("7162")},"3c7e":function(e,t,i){"use strict";i("b136")},"4d9c":function(e,t,i){"use strict";i("b27c")},7162:function(e,t,i){},b136:function(e,t,i){},b27c:function(e,t,i){},b496:function(e,t,i){},e1f8:function(e,t,i){"use strict";i("b496")},fa63:function(e,t,i){}}]);
//# sourceMappingURL=chunk-6c690bf8.e53522d9.js.map