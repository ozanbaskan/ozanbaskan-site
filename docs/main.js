(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,\n    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n  line-height: 1.3em;\n}\nhtml,\nbody,\nmain {\n  height: 100%;\n  margin: 0;\n  padding: 1px 0;\n  overflow: hidden;\n}\n\n.nav-stick {\n  margin-top: 22px;\n  height: 10px;\n  width: 100%;\n  background-color: black;\n}\n\n#nav-stick-left {\n  border-radius: 0 50px 50px 0;\n}\n\n#nav-stick-right {\n  border-radius: 50px 0 0 50px;\n}\n\nnav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  width: 100%;\n  margin: 0 auto;\n  font-size: 2em;\n  margin-top: 20px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\nli {\n  display: inline;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n#bg-animation {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  display: block;\n}\n\n#animation-control {\n  z-index: 4;\n  position: absolute;\n  right: 5px;\n  bottom: 5px;\n  height: 180px;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n#animation-control p {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.btn {\n  width: 40px;\n  text-align: center;\n  font-size: 1.1em;\n  font-weight: 600;\n}\n\na:focus-visible {\n  outline: none;\n  opacity: 0.1;\n}\n\n#myImg {\n  border-radius: 50%;\n  margin-top: 60px;\n}\n\n#main-page {\n  display: none;\n  flex-direction: row;\n  align-items: center;\n  font-size: 18px;\n  background: rgba(255, 255, 255, 0.8);\n  margin: 0 auto;\n}\n.developer-title {\n  margin-top: 50px;\n  margin-left: 50px;\n  font-size: 2em;\n  font-style: italic;\n}\n\n.container {\n  display: flex;\n  height: 80%;\n  width: 100%;\n  align-items: center;\n}\n.main-page-content {\n  margin-bottom: 20px;\n}\n\n.fa-linkedin {\n  color: rgba(0, 119, 181, 1);\n}\n.fa-free-code-camp {\n  color: rgb(6, 3, 34);\n}\n.fa-github-square {\n  color: rgb(35, 35, 37);\n}\nfooter {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  opacity: 0;\n  margin: 0 auto;\n}\nfooter i {\n  margin-left: 20px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n@media screen and (max-width: 800px) {\n  #myImg {\n    width: 100px;\n  }\n\n  nav {\n    font-size: 1.5em;\n  }\n\n  li {\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n  .nav-stick {\n    margin-top: 14px;\n    height: 8px;\n  }\n\n  #main-page {\n    font-size: 12px;\n  }\n}\n',""]);const s=r},24:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([n.id,"a, a:hover {\n    color: black;\n    text-decoration: none;\n}\n",""]);const s=r},404:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([n.id,".project-container {\n    display:flex;\n    flex-direction: row;\n}\n\n.project-item {\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n}",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(r[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);i&&r[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},r=[],s=0;s<n.length;s++){var l=n[s],c=i.base?l[0]+i.base:l[0],d=o[c]||0,h="".concat(c," ").concat(d);o[c]=d+1;var p=t(h),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var m=a(g,i);i.byIndex=s,e.splice(s,0,{identifier:h,updater:m,references:1})}r.push(h)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var s=t(o[r]);e[s].references--}for(var l=i(n,a),c=0;c<o.length;c++){var d=t(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{let[n,e]=[0,0];document.addEventListener("mousemove",(function(t){n=t.pageX,e=t.pageY}));const i=class{constructor(n,e,t){this.x=n||Math.round(Math.random()*window.innerWidth+10),this.y=e||Math.round(Math.random()*window.innerHeight+10),this.shape=Math.floor(3*Math.random()),this.h=3+this.shape,this.x_speed=(.1*Math.random()+.1)*(Math.round(Math.random())||-1),this.y_speed=(.1*Math.random()+.1)*(Math.round(Math.random())||-1),this.noDelete=!0,this.fill=!1,this.deg=0,this.deg_speed=.06*Math.random()+.02,setTimeout((()=>{this.move=this.lateMove}),t?2e3:0)}move(){this.x+=this.x_speed,this.y+=this.y_speed,this.deg=(this.deg+this.deg_speed)%360}lateMove(){this.x+=this.x_speed,this.y+=this.y_speed,this.deg=(this.deg+this.deg_speed)%360,Math.sqrt((this.x-n)**2+(this.y-e)**2)<30&&(this.x+=(this.x-n)/15,this.y+=(this.y-e)/15,this.x_speed+=(this.x-n)/150,this.y_speed+=(this.y-e)/150)}destroy(n,e){(this.x>n+4||this.x<-4||this.y>e+4||this.y<-this.h-4)&&(this.noDelete=!1)}},a=(n,e)=>("+"===n&&e<200?e+=25:"+"===n&&e<500&&(e+=100),"-"===n&&e>200?e-=100:"-"===n&&e>0&&(e-=25),e>500?500:e<0?0:e),o=document.getElementById("count"),r=document.getElementById("disable");let s=!1,l=document.getElementById("increase"),c=document.getElementById("decrease");const d=document.getElementById("bg-animation"),h=d.getContext("2d");let p=(()=>{let n=window.innerWidth>1e3?50:25;return o.innerText=n,n})(),g=0,m=[],u=window.innerWidth,y=window.innerHeight;document.addEventListener("click",(n=>{[l,c,r].includes(n.target)||p>=500||"I"===n.target.tagName||(m.push(new i(n.clientX,n.clientY,!0)),o.innerText=++p,v(),x())})),r.addEventListener("click",(()=>{s=!s,s?(r.innerHTML='<i class="fa fa-play fa-xs"></i>',r.classList.remove("btn-danger"),r.classList.add("btn-success")):(r.innerHTML='<i class="fa fa-pause fa-xs"></i>',r.classList.remove("btn-success"),r.classList.add("btn-danger"))})),window.addEventListener("resize",(n=>{let e=n.currentTarget.innerWidth,t=n.currentTarget.innerHeight;for(let n=0;n<m.length;n++)e>u&&(m[n].x_speed+=(e-u)/5e3),t>y&&(m[n].y_speed+=(t-y)/5e3);u=e,y=t})),l.addEventListener("click",(()=>{p=a("+",p),o.innerText=p})),c.addEventListener("click",(()=>{p=a("-",p),m.length>200?m.splice(0,100):m.length>0&&m.splice(0,25),s&&(v(),x()),o.innerText=p}));const f=n=>{let e=(n-g)/100;window.requestAnimationFrame(f),s||.03333333333333333>e||(.2>e&&m.length<p&&m.push(new i(0,0)),d.width=window.innerWidth,d.height=window.innerHeight,g=n,b(),v(),x())},x=()=>{for(let n=0;n<m.length;n++){let e=!1;for(let t=0;t<m.length;t++)t!==n&&Math.sqrt((m[n].x-m[t].x)**2+(m[n].y-m[t].y)**2)<50&&(e=!0,m[n].fill=!0,m[t].fill=!0,h.beginPath(),h.moveTo(m[n].x,m[n].y),h.lineTo(m[t].x,m[t].y),h.closePath(),h.stroke());e||(m[n].fill=!1)}},v=()=>{h.clearRect(0,0,window.innerWidth,window.innerHeight);for(let n=0;n<m.length;n++)if(1===m[n].shape){h.beginPath();let e=[m[n].x+m[n].h/2,m[n].y+m[n].h/2],t=(m[n].x-e[0])*Math.cos(m[n].deg)-(m[n].y-e[1])*Math.sin(m[n].deg)+m[n].x,i=(m[n].x-e[0])*Math.sin(m[n].deg)+(m[n].y-e[1])*Math.cos(m[n].deg)+m[n].y;h.moveTo(t,i),t=(m[n].x+m[n].h-e[0])*Math.cos(m[n].deg)-(m[n].y-e[1])*Math.sin(m[n].deg)+m[n].x,i=(m[n].x+m[n].h-e[0])*Math.sin(m[n].deg)+(m[n].y-e[1])*Math.cos(m[n].deg)+m[n].y,h.lineTo(t,i),t=(m[n].x+m[n].h-e[0])*Math.cos(m[n].deg)-(m[n].y+m[n].h-e[1])*Math.sin(m[n].deg)+m[n].x,i=(m[n].x+m[n].h-e[0])*Math.sin(m[n].deg)+(m[n].y+m[n].h-e[1])*Math.cos(m[n].deg)+m[n].y,h.lineTo(t,i),t=(m[n].x-e[0])*Math.cos(m[n].deg)-(m[n].y+m[n].h-e[1])*Math.sin(m[n].deg)+m[n].x,i=(m[n].x-e[0])*Math.sin(m[n].deg)+(m[n].y+m[n].h-e[1])*Math.cos(m[n].deg)+m[n].y,h.lineTo(t,i),h.closePath(),h.stroke(),m[n].fill&&(h.fillStyle="black",h.fill())}else if(0===m[n].shape)h.beginPath(),h.arc(m[n].x,m[n].y,m[n].h-1,0,2*Math.PI),h.stroke(),m[n].fill&&(h.fillStyle="black",h.fill());else if(2===m[n].shape){h.beginPath();let e=[m[n].x,m[n].y+7*m[n].h/12],t=(m[n].x-e[0])*Math.cos(m[n].deg)-(m[n].y-e[1])*Math.sin(m[n].deg)+m[n].x,i=(m[n].x-e[0])*Math.sin(m[n].deg)+(m[n].y-e[1])*Math.cos(m[n].deg)+m[n].y;h.moveTo(t,i),t=(m[n].x+m[n].h/2-e[0])*Math.cos(m[n].deg)-(m[n].y+m[n].h-e[1])*Math.sin(m[n].deg)+m[n].x,i=(m[n].x+m[n].h/2-e[0])*Math.sin(m[n].deg)+(m[n].y+m[n].h-e[1])*Math.cos(m[n].deg)+m[n].y,h.lineTo(t,i),t=(m[n].x-m[n].h/2-e[0])*Math.cos(m[n].deg)-(m[n].y+m[n].h-e[1])*Math.sin(m[n].deg)+m[n].x,i=(m[n].x-m[n].h/2-e[0])*Math.sin(m[n].deg)+(m[n].y+m[n].h-e[1])*Math.cos(m[n].deg)+m[n].y,h.lineTo(t,i),h.closePath(),h.stroke(),m[n].fill&&(h.fillStyle="black",h.fill())}},b=()=>{for(let n=0;n<m.length;n++)m[n].move(),m[n].destroy(window.innerWidth,window.innerHeight);m=m.filter((n=>n.noDelete))};window.requestAnimationFrame(f);const M=n=>{if("1"!==n.style.opacity&&""!==n.style.opacity)return;let e=0;n.style.opacity="0";let t=setInterval((()=>{e+=.005,n.style.opacity=e.toString(),e>.999&&clearInterval(t)}),10)},w=(n,e=100)=>{if("1"!==n.style.opacity&&""!==n.style.opacity)return;let t=0;n.style.opacity="0",n.style.marginBottom=e.toString()+"px";let i=setInterval((()=>{t+=.01,e-=e/30,n.style.opacity=t.toString(),n.style.marginBottom=e.toString()+"px",t>.999&&clearInterval(i)}),10)},k=document.getElementById("footer"),T=document.getElementById("main-page"),I=document.querySelector("nav");M(k),w(T),T.style.display="flex",M(I);const E={"":()=>{w(T),T.style.display="flex",T.innerHTML='<img\n  id="myImg"\n  class="main-page-content"\n  src="img/ozan.jpg"\n  width="150px"\n/>\n<p class="main-page-content developer-title">Full Stack Developer</p>\n\n'},about:()=>{w(T),T.style.display="block",T.innerHTML='\n      <div style="text-align:center;font-style:italic;">\n      <p>Hello, my name is Ozan Başkan. I am from Turkey. I was born in 1997. I am passionate about science and mathematics.</p>\n      </br>\n      <p>I am self-taught computer scientist and a senior year medicine dropout.</p>\n      </br>\n      <p>I am interested in science, I like to discuss ideas. I approach problems with multidisciplinary discipline.</p>\n      <p>You can contact me by mail and ask questions.</p>\n      </div>\n      '},contact:()=>{w(T),T.style.display="block",T.innerHTML='\n    <div style="text-align:center;font-style:italic;">\n    <address>\n    My Email: ozanbaskan7@gmail.com </br></br>\n    My Adress: Yenişehir District, Ataşehir, İstanbul/Turkey\n    </address>\n    </div>\n    '},projects:()=>{w(T),T.style.display="block",T.innerHTML='\n    <div style="display:flex;">\n      <div class="project-container">\n          <a href="https://play.google.com/store/apps/details?id=com.simplekitchen">\n            <div class="project-item" data-project-name="simple-kitchen">\n              <img src="img/project_simple_kitchen.png"></img>\n              <span>Simple Kitchen</span>\n            </div>\n          </a>\n      </div>\n    </div>\n    '}},S=[];function L(n,e){const t=history.state;if(t!==n||e){if(E[n](),S.includes(t))return history.replaceState(n,"","/"+n);S.push(t),history.pushState(n,"","/"+n)}}window.addEventListener("popstate",(function(){const n=this.history.state;if(S[S.length-1]!==n)return L(n,!0);const e=S.pop();E[e]?E[e]():E[""]()}));const _=document.querySelectorAll("li");_[0].addEventListener("click",(()=>{L("")})),_[1].addEventListener("click",(()=>{L("about")})),_[2].addEventListener("click",(()=>{L("contact")})),_[3].addEventListener("click",(()=>{L("projects")}));var j=t(379),H=t.n(j),Z=t(795),A=t.n(Z),P=t(569),z=t.n(P),B=t(565),C=t.n(B),q=t(216),O=t.n(q),W=t(589),D=t.n(W),F=t(24),N={};N.styleTagTransform=D(),N.setAttributes=C(),N.insert=z().bind(null,"head"),N.domAPI=A(),N.insertStyleElement=O(),H()(F.Z,N),F.Z&&F.Z.locals&&F.Z.locals;var R=t(424),U={};U.styleTagTransform=D(),U.setAttributes=C(),U.insert=z().bind(null,"head"),U.domAPI=A(),U.insertStyleElement=O(),H()(R.Z,U),R.Z&&R.Z.locals&&R.Z.locals;var Y=t(404),X={};X.styleTagTransform=D(),X.setAttributes=C(),X.insert=z().bind(null,"head"),X.domAPI=A(),X.insertStyleElement=O(),H()(Y.Z,X),Y.Z&&Y.Z.locals&&Y.Z.locals})()})();