(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22754f20"],{"0e3d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("el-main",[e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":t.loadingText,"element-loading-background":"rgba(0, 0, 0, 0.8"}},[e("div",{style:t.divStyle},[e("div",{attrs:{id:"display"}})])])],1)},s=[],o=n("a9c6"),a=n.n(o),c=n("12cb"),l=n("cf45"),d=n("2d5d"),h=n("b26a"),r=n("3d75"),g=n("5408");const u=window.devicePixelRatio||1;var p={name:"GuacamoleMonitor",data(){return{displayWidth:0,displayHeight:0,loading:!0,loadingText:c["a"].t("Connecting")+" ...",resizing:!1}},computed:{divStyle:function(){return{width:this.displayWidth+"px",height:this.displayHeight+"px",margin:"0 auto"}}},mounted:function(){const t=Object(l["g"])();this.$log.debug(t);const e=t["data"]["session"];this.getConnectString(e).then(e=>{this.connectGuacamole(e,t["ws"])}).catch(t=>{this.$log.debug(t)})},methods:{getAutoSize(){const t=window.innerWidth*u,e=window.innerHeight*u;return[t,e]},getConnectString(t){const[e,n]=this.getAutoSize(),i=96*u;return new Promise((s,o)=>{Promise.all([Object(d["a"])(),Object(h["a"])(),Object(r["a"])()]).then(o=>{const a=o[0],c=o[1],l=o[2];this.displayWidth=e,this.displayHeight=n;let d="SESSION_ID="+encodeURIComponent(t)+"&GUAC_WIDTH="+Math.floor(e)+"&GUAC_HEIGHT="+Math.floor(n)+"&GUAC_DPI="+Math.floor(i);this.$log.debug("Connect string: ",d),a.forEach((function(t){d+="&GUAC_IMAGE="+encodeURIComponent(t)})),c.forEach((function(t){d+="&GUAC_AUDIO="+encodeURIComponent(t)})),l.forEach((function(t){d+="&GUAC_VIDEO="+encodeURIComponent(t)})),s(d)})})},getPropScale(){const t=this.client.getDisplay();if(!t)return;const e=Math.min(window.innerWidth/Math.max(t.getWidth(),1),window.innerHeight/Math.max(t.getHeight(),1));return e},updateDisplayScale(){const t=this.client.getDisplay();if(!t)return;const e=this.getPropScale();e!==this.scale&&(this.scale=e,this.display.scale(e),this.displayWidth=t.getWidth()*e,this.displayHeight=t.getHeight()*e)},debounce(t,e){let n=null;return function(){null!==n&&clearTimeout(n),n=setTimeout(t,e)}},onWindowResize(){null!==this.client&&this.updateDisplayScale()},onClientConnected(){this.onWindowResize(),setTimeout(()=>{window.addEventListener("resize",this.debounce(this.onWindowResize.bind(this),300))},500)},displayResize(t,e){this.$log.debug("Display resize: ",t,e);const n=this.getPropScale();this.display.scale(n),this.displayWidth=t*n,this.displayHeight=e*n},clientStateChanged(t){switch(t){case 0:this.clientState="IDLE",this.$log.debug("clientState, IDLE");break;case 1:this.clientState="Connecting",this.$log.debug("clientState, Connecting");break;case 2:this.clientState="Connected + waiting",this.$log.debug("clientState, Connected + waiting");break;case 3:this.clientState="Connected",this.$log.debug("clientState, Connected "),this.loading=!1;var e="audio/L16;rate=44100,channels=2",n=function t(n){const i=n.createAudioStream(e),s=a.a.AudioRecorder.getInstance(i,e);s?s.onclose=t.bind(this,n):i.sendEnd()};n(this.client),this.onClientConnected();break;case 4:case 5:this.clientState="Disconnecting",this.$log.debug("clientState, Disconnected ");var i=document.getElementById("display");i.innerHTML="";break}},clientOnErr(t){this.loading=!1,this.closeDisplay(t)},closeDisplay(t){this.$log.debug(t,c["a"].locale);const e=t.code;let n=t.message;"cn"===Object(c["b"])()&&(n=g["b"][e]?this.$t(g["b"][e]):t.message),this.$alert(n,this.$t("ErrTitle"),{confirmButtonText:this.$t("OK"),callback:t=>{const e=document.getElementById("display");this.client&&(e.innerHTML="")}})},connectGuacamole(t,e){const n=document.getElementById("display"),i=new a.a.WebSocketTunnel(e),s=new a.a.Client(i),o=this;i.onerror=function(t){o.$log.debug("tunnelError ",t),n.innerHTML=""},i.onuuid=function(t){o.$log.debug("tunnelAssignedUUID ",t),i.uuid=t},i.onstatechange=this.onTunnelStateChanged,this.client=s,this.tunnel=i,this.display=this.client.getDisplay(),this.display.onresize=this.displayResize,n.appendChild(s.getDisplay().getElement()),s.onstatechange=this.clientStateChanged,s.onerror=this.clientOnErr,s.connect(t),window.onunload=function(){s.disconnect()}}}},b=p,m=(n("d536"),n("2877")),y=Object(m["a"])(b,i,s,!1,null,"20034f10",null);e["default"]=y.exports},"585e":function(t,e,n){},d536:function(t,e,n){"use strict";n("585e")}}]);
//# sourceMappingURL=chunk-22754f20.edd5c85b.js.map