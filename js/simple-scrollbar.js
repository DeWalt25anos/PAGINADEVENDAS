!function(t,e){"object"==typeof exports?module.exports=e(window,document):t.SimpleScrollbar=e(window,document)}(this,(function(t,e){var s=t.requestAnimationFrame||t.setImmediate||function(t){return setTimeout(t,0)};function i(t){Object.defineProperty(t,"data-simple-scrollbar",{value:new l(t),configurable:!0})}function r(t){Object.prototype.hasOwnProperty.call(t,"data-simple-scrollbar")&&(t["data-simple-scrollbar"].unBind(),delete t["data-simple-scrollbar"])}function n(i){for(this.target=i,this.content=i.firstElementChild,this.direction=t.getComputedStyle(this.target).direction,this.bar='<div class="ss-scroll">',this.mB=this.moveBar.bind(this),this.wrapper=e.createElement("div"),this.wrapper.setAttribute("class","ss-wrapper"),this.el=e.createElement("div"),this.el.setAttribute("class","ss-content"),"rtl"===this.direction&&this.el.classList.add("rtl"),this.wrapper.appendChild(this.el);this.target.firstChild;)this.el.appendChild(this.target.firstChild);this.target.appendChild(this.wrapper),this.target.insertAdjacentHTML("beforeend",this.bar),this.bar=this.target.lastChild,function(t,i){var r;function n(t){var e=t.pageY-r;r=t.pageY,s((function(){i.el.scrollTop+=e/i.scrollRatio}))}function a(){t.classList.remove("ss-grabbed"),e.body.classList.remove("ss-grabbed"),e.removeEventListener("mousemove",n),e.removeEventListener("mouseup",a)}t.addEventListener("mousedown",(function(s){return r=s.pageY,t.classList.add("ss-grabbed"),e.body.classList.add("ss-grabbed"),e.addEventListener("mousemove",n),e.addEventListener("mouseup",a),!1}))}(this.bar,this),this.moveBar(),t.addEventListener("resize",this.mB),this.el.addEventListener("scroll",this.mB),this.el.addEventListener("mouseenter",this.mB),this.target.classList.add("ss-container");var r=t.getComputedStyle(i);"0px"===r.height&&"0px"!==r["max-height"]&&(i.style.height=r["max-height"]),this.unBind=function(){t.removeEventListener("resize",this.mB),this.el.removeEventListener("scroll",this.mB),this.el.removeEventListener("mouseenter",this.mB),this.target.classList.remove("ss-container"),this.target.insertBefore(this.content,this.wrapper),this.target.removeChild(this.wrapper),this.target.removeChild(this.bar),this.bar=null}}function a(){for(var t=e.querySelectorAll("*[ss-container]"),s=0;s<t.length;s++)i(t[s])}n.prototype={moveBar:function(t){var e=this.el.scrollHeight,i=this.el.clientHeight,r=this;this.scrollRatio=i/e;var n="rtl"===r.direction?r.target.clientWidth-r.bar.clientWidth+18:-1*(r.target.clientWidth-r.bar.clientWidth);s((function(){r.scrollRatio>=1?r.bar.classList.add("ss-hidden"):(r.bar.classList.remove("ss-hidden"),r.bar.style.cssText="height:"+Math.max(100*r.scrollRatio,10)+"%; top:"+r.el.scrollTop/e*100+"%;right:"+n+"px;")}))}},e.addEventListener("DOMContentLoaded",a),n.initEl=i,n.initAll=a,n.unbindEl=r,n.unbindAll=function(){for(var t=e.querySelectorAll(".ss-container"),s=0;s<t.length;s++)r(t[s])};var l=n;return l}))