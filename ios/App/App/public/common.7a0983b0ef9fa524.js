"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7693:(M,w,a)=>{a.d(w,{c:()=>i});var r=a(4083),g=a(7864),c=a(1898);const i=(s,n)=>{let e,t;const l=(h,f,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(h,f);E&&n(E)?E!==e&&(v(),d(E,p)):v()},d=(h,f)=>{e=h,t||(t=e);const p=e;(0,r.w)(()=>p.classList.add("ion-activated")),f()},v=(h=!1)=>{if(!e)return;const f=e;(0,r.w)(()=>f.classList.remove("ion-activated")),h&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:h=>l(h.currentX,h.currentY,g.a),onMove:h=>l(h.currentX,h.currentY,g.b),onEnd:()=>{v(!0),(0,g.h)(),t=void 0}})}},2225:(M,w,a)=>{a.d(w,{g:()=>r});const r=(n,e,t,l,d)=>c(n[1],e[1],t[1],l[1],d).map(v=>g(n[0],e[0],t[0],l[0],v)),g=(n,e,t,l,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+l*d))-n*Math.pow(d-1,3),c=(n,e,t,l,d)=>s((l-=d)-3*(t-=d)+3*(e-=d)-(n-=d),3*t-6*e+3*n,3*e-3*n,n).filter(h=>h>=0&&h<=1),s=(n,e,t,l)=>{if(0===n)return((n,e,t)=>{const l=e*e-4*n*t;return l<0?[]:[(-e+Math.sqrt(l))/(2*n),(-e-Math.sqrt(l))/(2*n)]})(e,t,l);const d=(3*(t/=n)-(e/=n)*e)/3,v=(2*e*e*e-9*e*t+27*(l/=n))/27;if(0===d)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-d),-Math.sqrt(-d)];const h=Math.pow(v/2,2)+Math.pow(d/3,3);if(0===h)return[Math.pow(v/2,.5)-e/3];if(h>0)return[Math.pow(-v/2+Math.sqrt(h),1/3)-Math.pow(v/2+Math.sqrt(h),1/3)-e/3];const f=Math.sqrt(Math.pow(-d/3,3)),p=Math.acos(-v/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(f,1/3);return[E*Math.cos(p/3)-e/3,E*Math.cos((p+2*Math.PI)/3)-e/3,E*Math.cos((p+4*Math.PI)/3)-e/3]}},5062:(M,w,a)=>{a.d(w,{i:()=>r});const r=g=>g&&""!==g.dir?"rtl"===g.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},6602:(M,w,a)=>{a.r(w),a.d(w,{startFocusVisible:()=>i});const r="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,l=s||document.body,d=y=>{n.forEach(u=>u.classList.remove(r)),y.forEach(u=>u.classList.add(r)),n=y},v=()=>{e=!1,d([])},h=y=>{e=c.includes(y.key),e||d([])},f=y=>{if(e&&void 0!==y.composedPath){const u=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));d(u)}},p=()=>{t.activeElement===l&&d([])};return t.addEventListener("keydown",h),t.addEventListener("focusin",f),t.addEventListener("focusout",p),t.addEventListener("touchstart",v),t.addEventListener("mousedown",v),{destroy:()=>{t.removeEventListener("keydown",h),t.removeEventListener("focusin",f),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",v),t.removeEventListener("mousedown",v)},setFocus:d}}},8689:(M,w,a)=>{a.d(w,{c:()=>g});var r=a(3577);const g=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||c(e),v=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,h=(0,r.h)(e);t=!0===e.legacy||!d&&!v&&null!==h}return t}}},c=n=>null!==n.shadowRoot&&!!(i.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||s.includes(n.tagName)&&""!==n.textContent),i=["ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7864:(M,w,a)=>{a.d(w,{a:()=>i,b:()=>s,c:()=>c,d:()=>e,h:()=>n});const r={getEngine(){var t;const l=window;return l.TapticEngine||(null===(t=l.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&l.Capacitor.Plugins.Haptics},available(){var t;const l=window;return!!this.getEngine()&&("web"!==(null===(t=l.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const l=this.getEngine();if(!l)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;l.impact({style:d})},notification(t){const l=this.getEngine();if(!l)return;const d=this.isCapacitor()?t.style.toUpperCase():t.style;l.notification({style:d})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},g=()=>r.available(),c=()=>{g()&&r.selection()},i=()=>{g()&&r.selectionStart()},s=()=>{g()&&r.selectionChanged()},n=()=>{g()&&r.selectionEnd()},e=t=>{g()&&r.impact(t)}},7366:(M,w,a)=>{a.d(w,{a:()=>r,b:()=>f,c:()=>e,d:()=>p,e:()=>L,f:()=>n,g:()=>E,h:()=>c,i:()=>g,j:()=>_,k:()=>C,l:()=>t,m:()=>v,n:()=>y,o:()=>d,p:()=>s,q:()=>i,r:()=>o,s:()=>O,t:()=>h,u:()=>u,v:()=>m,w:()=>l});const r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2055:(M,w,a)=>{a.d(w,{I:()=>n,a:()=>d,b:()=>s,c:()=>f,d:()=>E,f:()=>v,g:()=>l,i:()=>t,p:()=>p,r:()=>y,s:()=>h});var r=a(5861),g=a(3577),c=a(1178);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=u=>"ION-CONTENT"===u.tagName,l=function(){var u=(0,r.Z)(function*(m){return t(m)?(yield new Promise(o=>(0,g.c)(m,o)),m.getScrollElement()):m});return function(o){return u.apply(this,arguments)}}(),d=u=>u.querySelector(n)||u.querySelector(e),v=u=>u.closest(e),h=(u,m)=>t(u)?u.scrollToTop(m):Promise.resolve(u.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),f=(u,m,o,_)=>t(u)?u.scrollByPoint(m,o,_):Promise.resolve(u.scrollBy({top:o,left:m,behavior:_>0?"smooth":"auto"})),p=u=>(0,c.b)(u,s),E=u=>{if(t(u)){const o=u.scrollY;return u.scrollY=!1,o}return u.style.setProperty("overflow","hidden"),!0},y=(u,m)=>{t(u)?u.scrollY=m:u.style.removeProperty("overflow")}},9240:(M,w,a)=>{a.d(w,{g:()=>g});var r=a(1178);const g=(i,s,n)=>{const e=null==i?0:i.toString().length,t=c(e,s);if(void 0===n)return t;try{return n(e,s)}catch(l){return(0,r.a)("Exception in provided `counterFormatter`.",l),t}},c=(i,s)=>`${i} / ${s}`},5234:(M,w,a)=>{a.r(w),a.d(w,{KEYBOARD_DID_CLOSE:()=>g,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>m,keyboardDidClose:()=>p,keyboardDidOpen:()=>h,keyboardDidResize:()=>f,resetKeyboardAssist:()=>e,setKeyboardClose:()=>v,setKeyboardOpen:()=>d,startKeyboardAssist:()=>t,trackViewportChanges:()=>u});const r="ionKeyboardDidShow",g="ionKeyboardDidHide";let i={},s={},n=!1;const e=()=>{i={},s={},n=!1},t=o=>{l(o),o.visualViewport&&(s=m(o.visualViewport),o.visualViewport.onresize=()=>{u(o),h()||f(o)?d(o):p(o)&&v(o)})},l=o=>{o.addEventListener("keyboardDidShow",_=>d(o,_)),o.addEventListener("keyboardDidHide",()=>v(o))},d=(o,_)=>{E(o,_),n=!0},v=o=>{y(o),n=!1},h=()=>!n&&i.width===s.width&&(i.height-s.height)*s.scale>150,f=o=>n&&!p(o),p=o=>n&&s.height===o.innerHeight,E=(o,_)=>{const O=new CustomEvent(r,{detail:{keyboardHeight:_?_.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(O)},y=o=>{const _=new CustomEvent(g);o.dispatchEvent(_)},u=o=>{i=Object.assign({},s),s=m(o.visualViewport)},m=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,w,a)=>{a.d(w,{c:()=>g});var r=a(3457);const g=c=>{let i,s,n;const e=()=>{i=()=>{n=!0,c&&c(!0)},s=()=>{n=!1,c&&c(!1)},null==r.w||r.w.addEventListener("keyboardWillShow",i),null==r.w||r.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",i),null==r.w||r.w.removeEventListener("keyboardWillHide",s),i=s=void 0},isKeyboardVisible:()=>n}}},7741:(M,w,a)=>{a.d(w,{S:()=>g});const g={bubbles:{dur:1e3,circles:9,fn:(c,i,s)=>{const n=c*i/s-c+"ms",e=2*Math.PI*i/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,i,s)=>{const n=i/s,e=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:9-9*i+"px","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/s-c+"ms"}})}}},7539:(M,w,a)=>{a.r(w),a.d(w,{createSwipeBackGesture:()=>s});var r=a(3577),g=a(5062),c=a(1898);a(4349);const s=(n,e,t,l,d)=>{const v=n.ownerDocument.defaultView;let h=(0,g.i)(n);const p=o=>h?-o.deltaX:o.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(h=(0,g.i)(n),(o=>{const{startX:C}=o;return h?C>=v.innerWidth-50:C<=50})(o)&&e()),onStart:t,onMove:o=>{const C=p(o)/v.innerWidth;l(C)},onEnd:o=>{const _=p(o),C=v.innerWidth,O=_/C,L=(o=>h?-o.velocityX:o.velocityX)(o),x=L>=0&&(L>.2||_>C/2),D=(x?1-O:O)*C;let k=0;if(D>5){const b=D/Math.abs(L);k=Math.min(b,540)}d(x,O<=0?.01:(0,r.l)(0,O,.9999),k)}})}},7662:(M,w,a)=>{a.d(w,{b:()=>g});class r{}class g{constructor(){this.usuario=new r}}},582:(M,w,a)=>{a.d(w,{S:()=>r});class r{}}}]);