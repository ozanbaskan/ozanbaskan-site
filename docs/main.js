(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,'* {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n\nhtml,\nbody,\nmain {\n  height: 100%;\n  margin: 0;\n  padding: 1px 0;\n}\n\n.wrapper {\n  display: block !important;\n  height: 100%;\n  padding-top: 10px;\n}\n\n#animation-control {\n  z-index: 4;\n  position: fixed;\n  right: 5px;\n  bottom: 5px;\n  height: 180px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.target-count {\n  font-size: 1.2em;\n}\n\n.target-count .current-count {\n  text-align: center;\n}\n\n.target-count .current-count {\n  text-align: center;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  min-width: 400px;\n  max-width: 50%;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.nav-item {\n  cursor: pointer;\n}\n\n.content {\n  flex: 1;\n}\n\n.flex-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}',""]);const s=a},24:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type="checkbox"],\n[type="radio"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type="search"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}\n\na,\na:hover {\n    color: black;\n    text-decoration: none;\n}',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],l=i.base?c[0]+i.base:c[0],d=r[l]||0,h="".concat(l," ").concat(d);r[l]=d+1;var u=t(h),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var p=o(m,i);i.byIndex=s,e.splice(s,0,{identifier:h,updater:p,references:1})}a.push(h)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=i(n,o),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{const n=(n,e=100)=>{if("1"!==n.style.opacity&&""!==n.style.opacity)return;let t=0;n.style.opacity="0",n.style.marginBottom=e.toString()+"px";let i=setInterval((()=>{t+=.01,e-=e/30,n.style.opacity=t.toString(),n.style.marginBottom=e.toString()+"px",t>.999&&clearInterval(i)}),10)};let[e,i]=[0,0];document.addEventListener("mousemove",(function(n){e=n.pageX,i=n.pageY}));const o=class{constructor(n,e,t){this.x=n||Math.round(Math.random()*window.innerWidth+10),this.y=e||Math.round(Math.random()*window.innerHeight+10),this.shape=Math.floor(3*Math.random()),this.h=3+this.shape,this.x_speed=(.1*Math.random()+.1)*(Math.round(Math.random())||-1),this.y_speed=(.1*Math.random()+.1)*(Math.round(Math.random())||-1),this.noDelete=!0,this.fill=!1,this.deg=0,this.deg_speed=.06*Math.random()+.02,setTimeout((()=>{this.move=this.lateMove}),t?2e3:0)}move(){this.x+=this.x_speed,this.y+=this.y_speed,this.deg=(this.deg+this.deg_speed)%360}lateMove(){this.x+=this.x_speed,this.y+=this.y_speed,this.deg=(this.deg+this.deg_speed)%360,Math.sqrt((this.x-e)**2+(this.y-i)**2)<30&&(this.x+=(this.x-e)/15,this.y+=(this.y-i)/15,this.x_speed+=(this.x-e)/150,this.y_speed+=(this.y-i)/150)}destroy(n,e){(this.x>n+4||this.x<-4||this.y>e+4||this.y<-this.h-4)&&(this.noDelete=!1)}},r=(n,e)=>("+"===n&&e<200?e+=25:"+"===n&&e<500&&(e+=100),"-"===n&&e>200?e-=100:"-"===n&&e>0&&(e-=25),e>500?500:e<0?0:e),a=document.querySelector(".target-count"),s=document.querySelector(".current-count"),c=document.getElementById("disable");let l=!1,d=document.getElementById("increase"),h=document.getElementById("decrease");const u=document.querySelector("canvas"),m=u.getContext("2d");u.style.position="fixed",u.style.zIndex="-1000";let p=(()=>{let n=window.innerWidth>1e3?50:25;return a.innerText=n,n})(),f=0,g=[],y=g.length,x=window.innerWidth,b=window.innerHeight;function v(){p=r("+",p),a.innerText=p}function w(){p=r("-",p),g.length>200?g.splice(0,100):g.length>0&&g.splice(0,25),l&&(k(),M()),a.innerText=p}document.addEventListener("click",(n=>{[d,h,c].includes(n.target)||p>=500||"I"===n.target.tagName||(g.push(new o(n.clientX,n.clientY,!0)),a.innerText=++p,k(),M())})),c.addEventListener("click",(()=>{l=!l,l?(c.innerHTML='<i class="fa fa-play fa-xs"></i>',c.classList.remove("btn-danger"),c.classList.add("btn-success")):(c.innerHTML='<i class="fa fa-pause fa-xs"></i>',c.classList.remove("btn-success"),c.classList.add("btn-danger"))})),window.addEventListener("resize",(n=>{let e=n.currentTarget.innerWidth,t=n.currentTarget.innerHeight;for(let n=0;n<g.length;n++)e>x&&(g[n].x_speed+=(e-x)/5e3),t>b&&(g[n].y_speed+=(t-b)/5e3);x=e,b=t})),d.addEventListener("click",v),h.addEventListener("click",w),document.addEventListener("keypress",(function(n){const e=n.key.toLocaleLowerCase();"i"===e||"ı"===e?v():"d"===e&&w()}));const E=n=>{y=g.length,s.innerText=y;let e=(n-f)/100;window.requestAnimationFrame(E),l||.03333333333333333>e||(.2>e&&g.length<p&&g.push(new o(0,0)),u.width=window.innerWidth,u.height=window.innerHeight,f=n,S(),k(),M())},M=()=>{for(let n=0;n<g.length;n++){let e=!1;for(let t=0;t<g.length;t++)t!==n&&Math.sqrt((g[n].x-g[t].x)**2+(g[n].y-g[t].y)**2)<50&&(e=!0,g[n].fill=!0,g[t].fill=!0,m.beginPath(),m.moveTo(g[n].x,g[n].y),m.lineTo(g[t].x,g[t].y),m.closePath(),m.stroke());e||(g[n].fill=!1)}},k=()=>{m.clearRect(0,0,window.innerWidth,window.innerHeight);for(let n=0;n<g.length;n++)if(1===g[n].shape){m.beginPath();let e=[g[n].x+g[n].h/2,g[n].y+g[n].h/2],t=(g[n].x-e[0])*Math.cos(g[n].deg)-(g[n].y-e[1])*Math.sin(g[n].deg)+g[n].x,i=(g[n].x-e[0])*Math.sin(g[n].deg)+(g[n].y-e[1])*Math.cos(g[n].deg)+g[n].y;m.moveTo(t,i),t=(g[n].x+g[n].h-e[0])*Math.cos(g[n].deg)-(g[n].y-e[1])*Math.sin(g[n].deg)+g[n].x,i=(g[n].x+g[n].h-e[0])*Math.sin(g[n].deg)+(g[n].y-e[1])*Math.cos(g[n].deg)+g[n].y,m.lineTo(t,i),t=(g[n].x+g[n].h-e[0])*Math.cos(g[n].deg)-(g[n].y+g[n].h-e[1])*Math.sin(g[n].deg)+g[n].x,i=(g[n].x+g[n].h-e[0])*Math.sin(g[n].deg)+(g[n].y+g[n].h-e[1])*Math.cos(g[n].deg)+g[n].y,m.lineTo(t,i),t=(g[n].x-e[0])*Math.cos(g[n].deg)-(g[n].y+g[n].h-e[1])*Math.sin(g[n].deg)+g[n].x,i=(g[n].x-e[0])*Math.sin(g[n].deg)+(g[n].y+g[n].h-e[1])*Math.cos(g[n].deg)+g[n].y,m.lineTo(t,i),m.closePath(),m.stroke(),g[n].fill&&(m.fillStyle="black",m.fill())}else if(0===g[n].shape)m.beginPath(),m.arc(g[n].x,g[n].y,g[n].h-1,0,2*Math.PI),m.stroke(),g[n].fill&&(m.fillStyle="black",m.fill());else if(2===g[n].shape){m.beginPath();let e=[g[n].x,g[n].y+7*g[n].h/12],t=(g[n].x-e[0])*Math.cos(g[n].deg)-(g[n].y-e[1])*Math.sin(g[n].deg)+g[n].x,i=(g[n].x-e[0])*Math.sin(g[n].deg)+(g[n].y-e[1])*Math.cos(g[n].deg)+g[n].y;m.moveTo(t,i),t=(g[n].x+g[n].h/2-e[0])*Math.cos(g[n].deg)-(g[n].y+g[n].h-e[1])*Math.sin(g[n].deg)+g[n].x,i=(g[n].x+g[n].h/2-e[0])*Math.sin(g[n].deg)+(g[n].y+g[n].h-e[1])*Math.cos(g[n].deg)+g[n].y,m.lineTo(t,i),t=(g[n].x-g[n].h/2-e[0])*Math.cos(g[n].deg)-(g[n].y+g[n].h-e[1])*Math.sin(g[n].deg)+g[n].x,i=(g[n].x-g[n].h/2-e[0])*Math.sin(g[n].deg)+(g[n].y+g[n].h-e[1])*Math.cos(g[n].deg)+g[n].y,m.lineTo(t,i),m.closePath(),m.stroke(),g[n].fill&&(m.fillStyle="black",m.fill())}},S=()=>{for(let n=0;n<g.length;n++)g[n].move(),g[n].destroy(window.innerWidth,window.innerHeight);g=g.filter((n=>n.noDelete))};window.requestAnimationFrame(E);const T=document.querySelector(".content");function C(n,e=!1){if(e)return n.classList.remove("flex-center");n.classList.add("flex-center")}function z(n){Array.isArray(n)||(n=[n]);const e=document.createElement("div");for(const t of n)e.appendChild(t);return e}function I(n,e){const t=n.children;for(const n of t)n.remove();Array.isArray(e)||(e=[e]);for(const t of e)n.appendChild(t);return n}const A=["Hello, my name is Ozan Başkan. I am from Turkey. I was born in 1997. I am passionate about science and mathematics.","I am self-taught computer scientist and a senior year medicine dropout.","I am interested in science, I like to discuss ideas. I approach problems with multidisciplinary discipline.","You can contact me by mail and ask questions."];let L=document.createElement("div");!function(){const n=[];for(const e of A){const t=document.createElement("span");t.style.textAlign="center",t.innerText=e,n.push(t,document.createElement("br"),document.createElement("br"))}L=z(n),L.style.textAlign="center"}();const R=["ozanbaskan7@gmail.com"];let j=document.createElement("div");!function(){const n=[];for(const e of R){const t=document.createElement("span");t.style.textAlign="center",t.innerText=e,n.push(t,document.createElement("br"),document.createElement("br"))}j=z(n),j.style.textAlign="center"}();const _=t.p+"img/ozan.jpg";let F=document.createElement("div");function P(){return I(T,F),C(T),n(F),!0}!function(){const n=document.createElement("img");n.src=_,n.style.borderRadius="50%",n.style.minWidth="40%",n.style.maxWidth="150px",n.style.marginRight="30px";const e=document.createElement("spam");e.innerText="Full Stack Developer",F=z([n,e])}(),P();let H=document.createElement("div");!function(){const n=document.createElement("span");n.innerText="That page you are looking for does not exists.",H=z(n)}();const O=t.p+"img/project_simple_kitchen.png";let q=document.createElement("div");const B=[{name:"Simple Kitchen",imgSrc:O,url:"https://play.google.com/store/apps/details?id=com.simplekitchen",description:"A full stack mvp project for a start-up creating a homemade food service with weekly subscriptionA full stack mvp project for a start-up creating a homemade food service with weekly subscriptionA full stack mvp project for a start-up creating a homemade food service with weekly subscription",technologies:["React","React-Native","MongoDB","Nodejs","Express"]}];!function(){const n=[];for(const e of B){const t=document.createElement("div"),i=document.createElement("a");i.href=e.url,i.target="_blank";const o=document.createElement("div");o.classList.add("card"),o.style.display="flex",o.style.flexDirection="row";const r=document.createElement("img"),a=document.createElement("div");a.classList.add("flex-center"),r.src=e.imgSrc,r.style.maxWidth="150px",r.style.maxHeight="150px",r.style.marginRight="10px";const s=document.createElement("div"),c=document.createElement("span");c.innerText=e.name,c.style.fontWeight="bold",c.style.fontSize="1.2em";const l=document.createElement("span");l.innerText=e.description,l.style.fontSize="0.8em";const d=document.createElement("span");d.innerText=e.technologies.join(", "),d.style.fontSize="1.05em",[c,l,d].forEach((n=>{n.style.display="block"})),t.style.marginBottom="10px",s.append(c,l,d),a.appendChild(r),o.appendChild(a),o.appendChild(s),i.appendChild(o),t.appendChild(i),n.push(t)}q.style.display="flex",q=z(n)}();const W={"/":P,"/about":function(){return I(T,L),C(T),n(L),!0},"/contact":function(){return I(T,j),C(T),n(j),!0},"/projects":function(){return I(T,q),C(T),n(q),!0},404:function(){return I(T,H),C(T),n(H),!0}};class D{constructor(n){this.path=n,this.id=(Math.random()+1).toString(36).substring(7)}}function Z(n){W[n]?.()||W[404]()}!function(){const n=document.querySelector(".nav").children;for(const e of n)e.addEventListener("click",(function(n){n.preventDefault();const e=new URL(n.currentTarget.href),t=e.pathname;if(t===history.state?.path)return;const i=new D(t);history.pushState(i,"",e),Z(t)}))}(),window.addEventListener("popstate",(function(n){if(n.preventDefault(),!this.history.state)return W["/"]();Z(this.history?.state.path)}));var N=t(379),U=t.n(N),Y=t(795),$=t.n(Y),X=t(569),G=t.n(X),J=t(565),K=t.n(J),Q=t(216),V=t.n(Q),nn=t(589),en=t.n(nn),tn=t(24),on={};on.styleTagTransform=en(),on.setAttributes=K(),on.insert=G().bind(null,"head"),on.domAPI=$(),on.insertStyleElement=V(),U()(tn.Z,on),tn.Z&&tn.Z.locals&&tn.Z.locals;var rn=t(424),an={};an.styleTagTransform=en(),an.setAttributes=K(),an.insert=G().bind(null,"head"),an.domAPI=$(),an.insertStyleElement=V(),U()(rn.Z,an),rn.Z&&rn.Z.locals&&rn.Z.locals})()})();