!function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){e.exports=a(2)},function(e,t){const a=Array.from(document.querySelectorAll(".settings_tab")),o=Array.from(document.querySelectorAll(".settings_content")),r=document.querySelector(".right_section-settings_tabs"),n=document.querySelector(".right_section-settings_content"),s=Array.from(document.querySelectorAll(".format_tab")),i=Array.from(document.querySelectorAll(".format_tab-content"));a.forEach((e,t)=>e.addEventListener("click",()=>{if(!1===e.classList.contains("active_tab")){for(let e=0;e<a.length;e+=1)a[e].classList.contains("active_tab")&&(a[e].classList.remove("active_tab"),o[e].classList.remove("visible_content"));e.classList.add("active_tab"),o[t].classList.add("visible_content")}else!0===e.classList.contains("active_tab")&&(e.classList.remove("active_tab"),o[t].classList.remove("visible_content"));a.some(e=>e.classList.contains("active_tab"))?(r.classList.add("expanded"),n.classList.add("visible")):(r.classList.remove("expanded"),n.classList.remove("visible"))})),s.forEach((e,t)=>e.addEventListener("click",()=>{if(!1===e.classList.contains("format_tab-active")){for(let e=0;e<s.length;e+=1)s[e].classList.contains("format_tab-active")&&(s[e].classList.remove("format_tab-active"),i[e].classList.remove("visible_options"));e.classList.add("format_tab-active"),i[t].classList.add("visible_options")}}))},function(e,t,a){"use strict";a.r(t);class o{constructor(){this.pixelSize=null}displayCanvasSize(){return document.querySelector(".canvas_width__value").textContent=this.pixelSize,this.pixelSize}chooseSize(){const e=document.querySelector(".canvas_width__value"),t=document.querySelector(".canvas_height__value"),a=document.querySelector(".range_line");return"1"===a.value?(this.pixelSize="32",a.data=this.pixelSize,e.value=`${a.data}`,t.value=`${a.data}`,this.pixelSize):"2"===a.value?(this.pixelSize="64",a.data=this.pixelSize,e.value=`${a.data}`,t.value=`${a.data}`,this.pixelSize):"3"===a.value?(this.pixelSize="128",a.data=this.pixelSize,e.value=`${a.data}`,t.value=`${a.data}`,this.pixelSize):void 0}}class r{addFrame(){const e=document.querySelector(".canvas"),t=e.getContext("2d"),a=document.querySelector(".frames_container"),o=Array.from(document.querySelectorAll(".frame"));for(let e=0;e<o.length;e+=1)o[e].classList.contains("frame-active")&&o[e].classList.remove("frame-active");const r=o[0].cloneNode(!0);a.append(r),r.classList.add("frame-active"),t.clearRect(0,0,e.width,e.height)}deleteFrame(e){document.querySelector(".canvas").getContext("2d");const t=Array.from(document.querySelectorAll(".frame")),a=e.target.closest("div"),o=a.previousElementSibling;a.classList.contains("frame-active")&&o?(o.classList.add("frame-active"),r.prototype.putFrameDataOnCanvas()):a.classList.contains("frame-active")&&a===t[0]&&(t[0].classList.remove("frame-active"),t[1].classList.add("frame-active"),r.prototype.putFrameDataOnCanvas()),a.remove(),e.stopPropagation()}duplicateFrame(e){document.querySelector(".canvas").getContext("2d");const t=document.querySelector(".frames_container"),a=Array.from(document.querySelectorAll(".frame"));for(let e=0;e<a.length;e+=1)a[e].classList.contains("frame-active")&&a[e].classList.remove("frame-active");const o=e.target.closest("div"),r=o.nextElementSibling,n=o.children[0],s=(n.getContext("2d"),o.cloneNode(!0));t.insertBefore(s,r),s.classList.add("frame-active");const i=s.children[0],c=i.getContext("2d");[s.querySelector(".button-frame_delete"),s.querySelector(".button-frame_move"),s.querySelector(".button-frame_duplicate")].forEach(e=>{e.style.visibility="hidden"}),c.drawImage(n,0,0,n.width,n.height,0,0,i.width,i.height),e.stopPropagation()}putCanvasDataOnFrame(){const e=document.querySelector(".canvas"),t=(e.getContext("2d"),document.querySelector(".frame-active").children[0]),a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.imageSmoothingEnabled=!1,a.drawImage(e,0,0,e.width,e.height,0,0,t.width,t.height)}putFrameDataOnCanvas(){const e=document.querySelector(".canvas"),t=e.getContext("2d"),a=document.querySelector(".frame-active").children[0];a.getContext("2d");t.clearRect(0,0,e.width,e.height),t.imageSmoothingEnabled=!1,t.drawImage(a,0,0,a.width,a.height,0,0,e.width,e.height)}handleEvent(e){document.querySelector(".canvas").getContext("2d");const t=Array.from(document.querySelectorAll(".frame"));for(let a=0;a<t.length;a+=1){const a=e.target.closest("div"),o=[a.querySelector(".button-frame_delete"),a.querySelector(".button-frame_move"),a.querySelector(".button-frame_duplicate")],r=[a.children[0],a.children[1]],n=document.querySelector(".frames_container");document.querySelector(".left_section-frames");switch(e.type){case"mouseover":o.forEach(e=>{if(a===n.children[0]&&1===n.children.length)o[2].style.visibility="visible";else{e.style.visibility="visible"}});break;case"mouseout":o.forEach(e=>{e.style.visibility="hidden"});break;case"dragstart":this.dragged=a;break;case"dragenter":if(e.preventDefault(),e.stopImmediatePropagation(),Number(this.dragged.children[1].textContent)>Number(a.children[1].textContent)){const e=n.replaceChild(this.dragged,a);return void n.insertBefore(e,this.dragged.nextElementSibling)}if(Number(this.dragged.children[1].textContent)<Number(a.children[1].textContent)){const e=n.replaceChild(this.dragged,a);return void n.insertBefore(e,this.dragged)}break;case"dragover":e.preventDefault(),r.forEach(e=>{e.style.visibility="hidden"}),o.forEach(e=>{e.style.visibility="hidden"}),a.classList.add("over");break;case"dragleave":e.preventDefault();break;case"dragend":for(let e=0;e<t.length;e+=1)t[e].classList.contains("frame-active")&&t[e].classList.remove("frame-active");this.dragged.classList.add("frame-active"),this.putFrameDataOnCanvas(),a.classList.remove("over"),r.forEach(e=>{e.style.visibility="visible"});break;case"drop":if(e.stopImmediatePropagation(),Number(this.dragged.children[1].textContent)>Number(a.children[1].textContent)){const e=n.replaceChild(this.dragged,a);n.insertBefore(e,this.dragged.nextElementSibling),a.classList.remove("over"),r.forEach(e=>{e.style.visibility="visible"});for(let e=0;e<t.length;e+=1)t[e].classList.contains("frame-active")&&t[e].classList.remove("frame-active");return this.dragged.classList.add("frame-active"),void this.putFrameDataOnCanvas()}if(Number(this.dragged.children[1].textContent)<Number(a.children[1].textContent)){const e=n.replaceChild(this.dragged,a);n.insertBefore(e,this.dragged),a.classList.remove("over"),r.forEach(e=>{e.style.visibility="visible"});for(let e=0;e<t.length;e+=1)t[e].classList.contains("frame-active")&&t[e].classList.remove("frame-active");return this.dragged.classList.add("frame-active"),void this.putFrameDataOnCanvas()}}}}}class n{constructor(){this.flag=null,this.lastX=null,this.lastY=null,this.canvasSize=new o,this.framesFunctionality=new r}drawBrasenham(e){const t=document.querySelector(".canvas").getContext("2d"),a=document.querySelector(".range_line");this.canvasSize.chooseSize();const o=document.querySelector(".active_size").getAttribute("value");if(t.fillStyle=e,!this.flag)return;let r=this.lastX,n=this.lastY;const s=512/a.data;r=Math.floor(this.lastX/s),n=Math.floor(this.lastY/s);let i=event.offsetX,c=event.offsetY;if(i=Math.floor(i/s),c=Math.floor(c/s),r===i&&n===c)return void t.fillRect(r*s,n*s,s*o,s*o);const l=i-r,d=c-n,u=l<0?-1:1,m=d<0?-1:1;if(Math.abs(d)<Math.abs(l)){const e=n-d/l*r;for(;r!==i;)t.fillRect(r*s,Math.round(d/l*r+e)*s,s*o,s*o),r+=u}else if(Math.abs(d)>Math.abs(l)){const e=r-l/d*n;for(;n!==c;)t.fillRect(Math.round(l/d*n+e)*s,n*s,s*o,s*o),n+=m}t.fillRect(i*s,c*s,s*o,s*o)}handleEvent(e){const t=document.querySelector(".color_select-primary"),a=document.querySelector(".color_select-secondary");let o=null;switch(e.which){case 1:o=t.value;break;case 3:default:o=a.value}switch(e.type){case"mousemove":this.drawBrasenham(o),[this.lastX,this.lastY]=[e.offsetX,e.offsetY];break;case"mousedown":this.flag=!0,[this.lastX,this.lastY]=[e.offsetX,e.offsetY],this.drawBrasenham(o);break;case"mouseup":this.flag=!1,this.drawBrasenham(o),this.framesFunctionality.putCanvasDataOnFrame();break;case"mouseleave":this.flag=!1,this.drawBrasenham(o)}}}const s=new n,i=new class extends n{drawBrasenham(e){const t=document.querySelector(".canvas").getContext("2d"),a=document.querySelector(".range_line");this.canvasSize.chooseSize();const o=document.querySelector(".active_size").getAttribute("value");if(t.fillStyle=e,!this.flag)return;let r=this.lastX,n=this.lastY;const s=512/a.data;r=Math.floor(this.lastX/s),n=Math.floor(this.lastY/s);let i=event.offsetX,c=event.offsetY;if(i=Math.floor(i/s),c=Math.floor(c/s),r===i&&n===c)return void t.clearRect(r*s,n*s,s*o,s*o);const l=i-r,d=c-n,u=l<0?-1:1,m=d<0?-1:1;if(Math.abs(d)<Math.abs(l)){const e=n-d/l*r;for(;r!==i;)t.clearRect(r*s,Math.round(d/l*r+e)*s,s*o,s*o),r+=u}else if(Math.abs(d)>Math.abs(l)){const e=r-l/d*n;for(;n!==c;)t.clearRect(Math.round(l/d*n+e)*s,n*s,s*o,s*o),n+=m}t.clearRect(i*s,c*s,s*o,s*o)}},c=new class{constructor(){this.lastX=null,this.lastY=null,this.canvasEvent=!1,this.storedLines=[],this.originalImage=null,this.color=null,this.framesFunctionality=new r}handleEvent(e){const t=document.querySelector(".canvas"),a=t.getContext("2d"),o=document.querySelector(".range_line"),r=document.querySelector(".color_select-primary"),n=document.querySelector(".color_select-secondary"),s=document.querySelector(".active_size").getAttribute("value");switch(e.type){case"mousedown":this.originalImage=a.getImageData(0,0,512,512),this.lastX=e.offsetX,this.lastY=e.offsetY,this.canvasEvent=!0;break;case"mousemove":if(!0===this.canvasEvent){a.clearRect(0,0,t.width,t.height),a.putImageData(this.originalImage,0,0),a.fillStyle=this.color,a.strokeStyle="transparent",a.lineJoin="square",a.lineCap="square";let r=this.lastX,n=this.lastY;const i=512/o.data;r=Math.floor(this.lastX/i),n=Math.floor(this.lastY/i);let c=e.offsetX,l=e.offsetY;if(c=Math.floor(c/i),l=Math.floor(l/i),r===c&&n===l)return void a.fillRect(r*i,n*i,i*s,i*s);const d=c-r,u=l-n,m=d<0?-1:1,v=u<0?-1:1;if(Math.abs(u)<Math.abs(d)){const e=n-u/d*r;for(;r!==c;)a.fillRect(r*i,Math.round(u/d*r+e)*i,i*s,i*s),r+=m}else if(Math.abs(u)>Math.abs(d)){const e=r-d/u*n;for(;n!==l;)a.fillRect(Math.round(d/u*n+e)*i,n*i,i*s,i*s),n+=v}a.fillRect(c*i,l*i,i*s,i*s),a.beginPath(),a.moveTo(this.lastX,this.lastY),a.lineTo(e.offsetX,e.offsetY),a.stroke()}break;case"mouseup":this.canvasEvent=!1,this.framesFunctionality.putCanvasDataOnFrame();break;case"mouseout":this.canvasEvent=!1}switch(e.which){case 1:this.color=r.value;break;case 3:default:this.color=n.value}}},l=new class{constructor(){this.color=null,this.clickedColor=null,this.imageData=null,this.framesFunctionality=new r}hexToRgb(e){const t=e.replace("#","");return[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)]}floodFill(e){const t=document.querySelector(".canvas"),a=t.getContext("2d");this.imageData=a.getImageData(0,0,512,512),this.clickedColor=`rgba(${this.imageData.data[4*event.offsetY*512+4*event.offsetX]},${this.imageData.data[4*event.offsetY*512+4*event.offsetX+1]},${this.imageData.data[4*event.offsetY*512+4*event.offsetX+2]},1)`,this.clickedColorRGB=`rgb(${this.imageData.data[4*event.offsetY*512+4*event.offsetX]},${this.imageData.data[4*event.offsetY*512+4*event.offsetX+1]},${this.imageData.data[4*event.offsetY*512+4*event.offsetX+2]})`;const o=(new FastAverageColor).getColor(t),r=[[event.offsetY,event.offsetX]],n={};let s,i,c=1;const l=this.hexToRgb(`${e}`);if("rgba(0,0,0,1)"===this.clickedColor&&this.clickedColorRGB===o.rgb)a.fillStyle=e,a.fillRect(0,0,512,512),this.imageData=a.getImageData(0,0,512,512);else if(this.clickedColor===o.rgba)a.fillStyle=e,a.fillRect(0,0,512,512),this.imageData=a.getImageData(0,0,512,512);else for(;c>0;)s=r.pop(),n.pixel=!0,c-=1,s[0]>=0&&s[0]<=512&&s[1]>=0&&s[1]<=512&&(i=`rgba(${this.imageData.data[4*s[0]*512+4*s[1]]},${this.imageData.data[4*s[0]*512+4*s[1]+1]},${this.imageData.data[4*s[0]*512+4*s[1]+2]},1)`,i===this.clickedColor&&([this.imageData.data[4*s[0]*512+4*s[1]],this.imageData.data[4*s[0]*512+4*s[1]+1],this.imageData.data[4*s[0]*512+4*s[1]+2]]=[l[0],l[1],l[2]],n[[s[0]-1,s[1]]]||(r.push([s[0]-1,s[1]]),c+=1),n[[s[0]-1,s[1]-1]]||(r.push([s[0]-1,s[1]-1]),c+=1),n[[s[0]-1,s[1]+1]]||(r.push([s[0]-1,s[1]+1]),c+=1),n[[s[0]+1,s[1]]]||(r.push([s[0]+1,s[1]]),c+=1)));a.putImageData(this.imageData,0,0)}handleEvent(e){document.querySelector(".canvas").getContext("2d");const t=document.querySelector(".color_select-primary"),a=document.querySelector(".color_select-secondary");"mousedown"===e.type&&1===e.which?(this.floodFill(t.value),this.framesFunctionality.putCanvasDataOnFrame()):"mousedown"===e.type&&3===e.which&&(this.floodFill(a.value),this.framesFunctionality.putCanvasDataOnFrame())}},d=new o,u=document.querySelector(".canvas"),m=(u.getContext("2d"),Array.from(document.querySelector(".pen_size").children)),v=Array.from(document.querySelector(".drawing_tool").children),f=document.querySelector(".range_line"),h=document.querySelector(".color_select-primary"),g=document.querySelector(".color_select-secondary"),y=document.querySelector(".revert_colors");function S(e){const t=["mousemove","mousedown","mouseup","mouseleave"];e.classList.contains("drawing_tool-pen")?(t.forEach(e=>u.addEventListener(e,s)),t.forEach(e=>u.removeEventListener(e,i)),t.forEach(e=>u.removeEventListener(e,c)),t.forEach(e=>u.removeEventListener(e,l))):e.classList.contains("drawing_tool-paint_bucket")?(t.forEach(e=>u.addEventListener(e,l)),t.forEach(e=>u.removeEventListener(e,s)),t.forEach(e=>u.removeEventListener(e,i)),t.forEach(e=>u.removeEventListener(e,c))):e.classList.contains("drawing_tool-eraser")?(t.forEach(e=>u.addEventListener(e,i)),t.forEach(e=>u.removeEventListener(e,s)),t.forEach(e=>u.removeEventListener(e,c)),t.forEach(e=>u.removeEventListener(e,l))):e.classList.contains("drawing_tool-stroke")?(t.forEach(e=>u.addEventListener(e,c)),t.forEach(e=>u.removeEventListener(e,s)),t.forEach(e=>u.removeEventListener(e,i)),t.forEach(e=>u.removeEventListener(e,l))):e.classList.contains("drawing_tool-color_picker")&&(t.forEach(e=>u.removeEventListener(e,s)),t.forEach(e=>u.removeEventListener(e,i)),t.forEach(e=>u.removeEventListener(e,c)),t.forEach(e=>u.removeEventListener(e,l)))}f.addEventListener("change",()=>{d.chooseSize()}),f.addEventListener("change",d.handleEvent),m.forEach(e=>e.addEventListener("click",()=>{for(let e=0;e<m.length;e+=1)m[e].classList.contains("active_size")&&(m[e].classList.remove("active_size"),m[e].children[0].classList.remove("active_inner"));e.classList.add("active_size"),e.children[0].classList.add("active_inner")})),v.forEach(e=>e.addEventListener("click",t=>{for(let e=0;e<v.length;e+=1)v[e].classList.contains("active_tool")&&v[e].classList.remove("active_tool");e.classList.add("active_tool"),function(e){const{target:t}=e;S(t)}(t)})),y.addEventListener("click",()=>{[h.value,g.value]=[g.value,h.value]});var _=S;const p=new r;let b=Array.from(document.querySelectorAll(".frame"));const L=document.querySelector(".add_new_frame");document.body.addEventListener("DOMSubtreeModified",()=>{b=Array.from(document.querySelectorAll(".frame")),b.forEach((e,t)=>{const a=e;a.children[1].textContent=t+1,a.children[2].addEventListener("click",p.deleteFrame),a.children[4].addEventListener("click",p.duplicateFrame);["mousemove","mousedown","mouseover","mouseout","dragstart","dragend","dragover","dragenter","dragleave","drop","mousewheel","scroll"].forEach(e=>a.addEventListener(e,p))}),b.forEach(e=>e.addEventListener("click",()=>{for(let e=0;e<b.length;e+=1)b[e].classList.contains("frame-active")&&b[e].classList.remove("frame-active");e.classList.add("frame-active"),p.putFrameDataOnCanvas()}))}),L.addEventListener("click",()=>{p.addFrame()});const x=document.querySelector(".sign_in-btn"),q=new class{googleSignIn(){const e=document.querySelector(".sign_in-btn");firebase.auth().onAuthStateChanged((function(t){if(t)!function(t){const a=t.displayName.split(" ");e.textContent=`Hello, ${a[0]}`,e.style.width="fit-content"}(t);else{const e=new firebase.auth.GoogleAuthProvider;firebase.auth().signInWithRedirect(e)}}))}};x.addEventListener("click",()=>{q.googleSignIn()});const w=document.querySelector(".filter"),E=document.querySelector(".modal_window"),C=document.querySelector(".modal_window__header-exit"),A=document.querySelector(".keyboard_controls");let k=Array.from(document.querySelectorAll(".item-key")),I=k.map(e=>e.textContent).join("");const F=Array.from(document.querySelector(".pen_size").children),D=Array.from(document.querySelector(".drawing_tool").children),z=document.querySelector(".drawing_tool-pen"),O=document.querySelector(".drawing_tool-paint_bucket"),M=document.querySelector(".drawing_tool-eraser"),R=document.querySelector(".drawing_tool-stroke"),K=document.querySelector(".revert_colors"),P="QWERTYUIOP[]ASDFGHJKLZXCVBNM←↑↓→",X=["KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","ArrowLeft","ArrowUp","ArrowDown","ArrowRight"];function Y(e){w.style.display=e,E.style.display=e}function N(e){const{target:t}=e;t.classList.add("key_change"),window.addEventListener("keydown",e=>{const a=e.code;if(-1===X.indexOf(a))return;const o=X.indexOf(a),r=P[o];if(k=Array.from(document.querySelectorAll(".item-key")),I=k.map(e=>e.textContent).join(""),I.indexOf(r)>=0){const e=I.indexOf(r);k[e].classList.add("key_warn"),k[e].textContent="???"}t.textContent=`${P[X.indexOf(a)]}`,I=k.map(e=>e.textContent).join(""),t.classList.remove("key_change"),t.classList.remove("key_warn")},{once:!0})}k.forEach(e=>e.addEventListener("click",N)),A.addEventListener("click",()=>Y("block")),C.addEventListener("click",()=>Y("none")),w.addEventListener("click",()=>Y("none")),document.addEventListener("keydown",e=>{const t=Array.from(document.querySelectorAll(".frame")),a=document.querySelector(".frame-active"),o=new Event("click");if("none"===E.style.display)switch(e.code){case`${X[P.indexOf(k[0].textContent)]}`:for(let e=0;e<D.length;e+=1)D[e].classList.contains("active_tool")&&D[e].classList.remove("active_tool");z.classList.add("active_tool"),_(z);break;case`${X[P.indexOf(k[1].textContent)]}`:for(let e=0;e<D.length;e+=1)D[e].classList.contains("active_tool")&&D[e].classList.remove("active_tool");O.classList.add("active_tool"),_(O);break;case`${X[P.indexOf(k[2].textContent)]}`:for(let e=0;e<D.length;e+=1)D[e].classList.contains("active_tool")&&D[e].classList.remove("active_tool");M.classList.add("active_tool"),_(M);break;case`${X[P.indexOf(k[3].textContent)]}`:for(let e=0;e<D.length;e+=1)D[e].classList.contains("active_tool")&&D[e].classList.remove("active_tool");R.classList.add("active_tool"),_(R);break;case`${X[P.indexOf(k[4].textContent)]}`:for(let e=0;e<F.length;e+=1){if(F[3].classList.contains("active_size"))return;if(F[e].classList.contains("active_size"))return F[e].classList.remove("active_size"),F[e].children[0].classList.remove("active_inner"),F[e+1].classList.add("active_size"),void F[e+1].children[0].classList.add("active_inner")}break;case`${X[P.indexOf(k[5].textContent)]}`:for(let e=0;e<F.length;e+=1){if(F[0].classList.contains("active_size"))return;if(F[e].classList.contains("active_size"))return F[e].classList.remove("active_size"),F[e].children[0].classList.remove("active_inner"),F[e-1].classList.add("active_size"),void F[e-1].children[0].classList.add("active_inner")}break;case`${X[P.indexOf(k[6].textContent)]}`:for(let e=0;e<t.length;e+=1){if(t[0].classList.contains("frame-active"))return;if(t[e].classList.contains("frame-active"))return t[e].classList.remove("frame-active"),t[e-1].classList.add("frame-active"),void r.prototype.putFrameDataOnCanvas()}break;case`${X[P.indexOf(k[7].textContent)]}`:for(let e=0;e<t.length;e+=1){if(t[t.length-1].classList.contains("frame-active"))return;if(t[e].classList.contains("frame-active"))return t[e].classList.remove("frame-active"),t[e+1].classList.add("frame-active"),void r.prototype.putFrameDataOnCanvas()}break;case`${X[P.indexOf(k[8].textContent)]}`:r.prototype.addFrame();break;case`${X[P.indexOf(k[9].textContent)]}`:if(1===t.length)return;a.dispatchEvent(o),r.prototype.deleteFrame(o);break;case`${X[P.indexOf(k[10].textContent)]}`:a.dispatchEvent(o),r.prototype.duplicateFrame(o);break;case`${X[P.indexOf(k[11].textContent)]}`:K.dispatchEvent(o)}});a(1);const B=new class{savePenUnit(){Array.from(document.querySelector(".pen_size").children).forEach((e,t)=>{e.classList.contains("active_size")&&localStorage.setItem("active_size-index",`${t}`)})}saveActiveTool(){Array.from(document.querySelector(".drawing_tool").children).forEach((e,t)=>{e.classList.contains("active_tool")&&localStorage.setItem("active_tool-index",`${t}`)})}savePrimaryColor(){const e=document.querySelector(".color_select-primary");localStorage.setItem("primary_color-value",`${e.value}`)}saveSecondaryColor(){const e=document.querySelector(".color_select-secondary");localStorage.setItem("secondary_color-value",`${e.value}`)}saveFramesLength(){const e=Array.from(document.querySelectorAll(".frame"));localStorage.setItem("frames_length",`${e.length}`)}saveActiveFrame(){Array.from(document.querySelectorAll(".frame")).forEach((e,t)=>{e.classList.contains("frame-active")&&localStorage.setItem("active_frame-index",`${t}`)})}saveCanvasData(){const e=document.querySelector(".canvas");e.getContext("2d");Array.from(document.querySelectorAll(".frame")).forEach((e,t)=>{localStorage.setItem(`canvas_frame${t+1}`,e.children[0].toDataURL())}),localStorage.setItem("canvas_image",e.toDataURL())}saveCanvasSize(){const e=document.querySelector(".range_line");localStorage.setItem("range_value",`${e.value}`),localStorage.setItem("canvas_size",`${e.data}`)}saveAnimationSpeed(){const e=document.querySelector(".animation_speed");localStorage.setItem("animation_speed",`${e.value}`)}saveKeyboardShorts(){const e=Array.from(document.querySelectorAll(".item-key")).map(e=>e.textContent);localStorage.setItem("keyboarb_shortcuts",JSON.stringify(e))}},T=new class{getActiveTool(){const e=Array.from(document.querySelector(".drawing_tool").children);if(null!==localStorage.getItem("active_tool-index")){e[localStorage.getItem("active_tool-index")].classList.add("active_tool")}else e[0].classList.add("active_tool")}getPenUnit(){const e=Array.from(document.querySelector(".pen_size").children);if(null!==localStorage.getItem("active_size-index")){const t=localStorage.getItem("active_size-index");e[t].classList.add("active_size"),e[t].children[0].classList.add("active_inner")}else e[0].classList.add("active_size"),e[0].children[0].classList.add("active_inner")}getPrimaryColor(){const e=document.querySelector(".color_select-primary");null!==localStorage.getItem("primary_color-value")?e.value=localStorage.getItem("primary_color-value"):e.value="#000000"}getSecondaryColor(){const e=document.querySelector(".color_select-secondary");null!==localStorage.getItem("secondary_color-value")?e.value=localStorage.getItem("secondary_color-value"):e.value="#ffffff"}getFramesLength(){const e=document.querySelector(".frames_container");if(null!==localStorage.getItem("frames_length")){const t=Number(localStorage.getItem("frames_length")),a='<div class="frame draggable" draggable="true">\n                              <canvas class="canvas_frame" width="96" height="96"></canvas>\n                              <button class="button-frame_number"></button>\n                              <button class="button-frame_delete" tooltip=\'delete\'></button>\n                              <button class="button-frame_move"></button>\n                              <button class="button-frame_duplicate"></button>\n                            </div>';for(let o=0;o<t-1;o+=1)e.insertAdjacentHTML("beforeend",a)}}getActiveFrame(){const e=Array.from(document.querySelectorAll(".frame"));if(null!==localStorage.getItem("active_frame-index")){e[localStorage.getItem("active_frame-index")].classList.add("frame-active")}else e[0].classList.add("frame-active")}getCanvasData(){const e=document.querySelector(".canvas").getContext("2d");if(Array.from(document.querySelectorAll(".frame")).forEach((e,t)=>{if(null!==localStorage.getItem(`canvas_frame${t+1}`)){const a=e.children[0].getContext("2d"),o=localStorage.getItem(`canvas_frame${t+1}`),r=new Image;r.src=o,r.onload=()=>a.drawImage(r,0,0)}}),null!==localStorage.getItem("canvas_image")){const t=localStorage.getItem("canvas_image"),a=new Image;a.src=t,a.onload=()=>e.drawImage(a,0,0)}}getCanvasSize(){const e=document.querySelector(".range_line"),t=document.querySelector(".canvas_width__value"),a=document.querySelector(".canvas_height__value");null!==localStorage.getItem("range_value")?e.value=localStorage.getItem("range_value"):e.value="2",null!==localStorage.getItem("canvas_size")?(e.data=localStorage.getItem("canvas_size"),t.value=`${e.data}`,a.value=`${e.data}`):(e.data="64",t.value=`${e.data}`,a.value=`${e.data}`)}getAnimationSpeed(){const e=document.querySelector(".animation_speed"),t=document.querySelector(".fps_output");null!==localStorage.getItem("animation_speed")?(e.value=localStorage.getItem("animation_speed"),t.textContent=`${e.value} FPS`):(e.value="1",t.textContent=`${e.value} FPS`)}getKeyboardShorts(){const e=Array.from(document.querySelectorAll(".item-key"));if(null!==localStorage.getItem("keyboarb_shortcuts")){const t=JSON.parse(localStorage.getItem("keyboarb_shortcuts"));e.forEach((e,a)=>{e.textContent=t[a]})}else{const t="PBES][↑↓FDNX";e.forEach((e,a)=>{e.textContent=t[a]})}}},j=new r;window.addEventListener("beforeunload",()=>{B.savePenUnit(),B.saveActiveTool(),B.savePrimaryColor(),B.saveSecondaryColor(),B.saveFramesLength(),B.saveActiveFrame(),B.saveCanvasData(),B.saveCanvasSize(),B.saveAnimationSpeed(),B.saveKeyboardShorts()}),window.addEventListener("load",()=>{T.getPenUnit(),T.getActiveTool(),T.getPrimaryColor(),T.getSecondaryColor(),T.getFramesLength(),T.getActiveFrame(),T.getCanvasData(),T.getCanvasSize(),T.getAnimationSpeed(),T.getKeyboardShorts();const e=document.querySelector(".active_tool");_(e),j.putFrameDataOnCanvas()});const G=new class{spritesheetFileInfo(){document.querySelector(".canvas").getContext("2d");const e=Array.from(document.querySelectorAll(".frame")),t=document.querySelector(".box_input-left"),a=document.querySelector(".spitesheet_cols"),o=document.querySelector(".spitesheet_rows"),r=document.querySelector(".spritesheet_output-frames"),n=document.querySelector(".spritesheet_output-colrow");1===e.length?r.textContent=`${t.value*a.value} x ${t.value*o.value} px, ${e.length} frame`:r.textContent=`${t.value*a.value} x ${t.value*o.value} px, ${e.length} frames`,"1"===a.value&&"1"===o.value?n.textContent=`${a.value} column, ${o.value} row.`:"1"===a.value&&"1"!==o.value?n.textContent=`${a.value} column, ${o.value} rows.`:"1"!==a.value&&"1"===o.value&&(n.textContent=`${a.value} columns, ${o.value} row.`)}singleFrameToPNG(){const e=document.querySelector(".canvas"),t=(e.getContext("2d"),document.createElement("a"));t.href=e.toDataURL(),t.download="canvas-image.png",t.click()}},U=new class{constructor(){this.gifRepeat=null}downloadGif(){const e=document.querySelector(".animation_speed"),t=document.querySelector(".loop_repeatedly"),a=1e3/Number(e.value);!0===t.checked?this.gifRepeat=0:this.gifRepeat=1;const o=new GIFEncoder,r=$.extend({frames:$(".canvas_frame").map((e,t)=>t.getContext("2d")).toArray(),filename:"piskelclone.gif",repeat:this.gifRepeat,delay:a,dispose:0,transparent:null});o.setRepeat(r.repeat),o.setDelay(r.delay),o.setDispose(r.dispose),o.setTransparent(r.transparent),o.start(),r.frames.forEach(e=>o.addFrame(e)),o.finish(),o.download(r.filename)}};let J=Array.from(document.querySelectorAll(".frame"));const H=Array.from(document.querySelectorAll(".resolution_value")),W=document.querySelector(".box_input-left"),Q=document.querySelector(".download_gif-btn"),V=document.querySelector(".PNG_frame-btn"),Z=document.querySelector(".scale_output"),ee=document.querySelector(".spitesheet_cols"),te=document.querySelector(".spitesheet_rows");window.addEventListener("DOMContentLoaded",()=>{Z.textContent=`${(W.value/32).toFixed(1)}x`,G.spritesheetFileInfo()}),H.forEach(e=>e.addEventListener("input",()=>{for(let t=0;t<H.length;t+=1)H[t].value=e.value;Z.textContent=`${(e.value/32).toFixed(1)}x`,G.spritesheetFileInfo()})),ee.addEventListener("input",()=>{J=Array.from(document.querySelectorAll(".frame")),ee.max=`${J.length}`,ee.value>ee.max&&(ee.value=ee.max),te.value=Math.ceil(J.length/ee.value),G.spritesheetFileInfo()}),V.addEventListener("click",G.singleFrameToPNG),Q.addEventListener("click",U.downloadGif);const ae=new class{constructor(){this.frameIndex=0}update(){const e=Array.from(document.querySelectorAll(".frame"));this.frameIndex<e.length-1?this.frameIndex+=1:this.frameIndex=0}render(){const e=Array.from(document.querySelectorAll(".frame")),t=document.querySelector(".canvas_animation_preview"),a=t.getContext("2d");a.clearRect(0,0,t.width,t.height);const o=e[this.frameIndex].children[0];a.drawImage(o,0,0,o.width,o.height,0,0,t.width,t.height)}start(){const e=document.querySelector(".canvas_animation_preview"),t=e.getContext("2d"),a=document.querySelector(".animation_speed"),o=()=>setTimeout(()=>{const a=Array.from(document.querySelectorAll(".frame"));this.frameIndex<a.length-1?this.frameIndex+=1:this.frameIndex=0,t.clearRect(0,0,e.width,e.height);const r=a[this.frameIndex].children[0];t.imageSmoothingEnabled=!1,t.drawImage(r,0,0,r.width,r.height,0,0,e.width,e.height),window.requestAnimationFrame(o)},1e3/a.value==1/0?(()=>{const a=document.querySelector(".frame-active").children[0];t.imageSmoothingEnabled=!1,t.clearRect(0,0,e.width,e.height),t.drawImage(a,0,0,a.width,a.height,0,0,e.width,e.height)})():1e3/a.value);window.requestAnimationFrame(o)}handleEvent(e){const t=e.target.closest("div");switch(e.type){case"mouseover":t.children[0].style.visibility="visible"}}fullScreenMode(){const e=document.querySelector(".canvas_animation_preview");e.getContext("2d");(document.fullscreenEnabled||document.webkitFullscreenEnabled)&&("requestFullscreen"in e?e.requestFullscreen():"webkitRequestFullscreen"in e&&e.webkitRequestFullscreen())}},oe=document.querySelector(".popup_preview-btn"),re=document.querySelector(".animation_speed"),ne=document.querySelector(".fps_output"),se=document.querySelector(".right_section-tools"),ie=(document.querySelector(".canvas_animation_preview").getContext("2d"),document.querySelector(".canvas_animation_buttons"));ae.start(),oe.addEventListener("click",ae.fullScreenMode),re.addEventListener("change",()=>{ne.textContent=`${re.value} FPS`}),se.addEventListener("mouseover",()=>{ie.style.visibility="visible"}),se.addEventListener("mouseout",()=>{ie.style.visibility="hidden"}),ne.textContent=`${re.value} FPS`}]);
//# sourceMappingURL=bundle.js.map