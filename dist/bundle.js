!function(){"use strict";function t(){n(this);var t=this.shadowRoot.children[1].style.visibility;this.shadowRoot.children[1].style.visibility="hidden"==t?"visible":"hidden"}function e(){n(),this.shadowRoot.children[1].style.visibility="visible"}function i(){this.shadowRoot.children[1].style.visibility="hidden"}function n(t){document.querySelectorAll("t-ftn").forEach((e=>{e!==t&&(e.shadowRoot.children[1].style.visibility="hidden")}))}let o=document.querySelectorAll("t-ftn"),d=document.querySelector("t-options");d.dataset.hover;var s="true"===d.dataset.unhoverdelete;void 0!==d.dataset.hoverdelay&&d.dataset.hoverdelay,window.addEventListener("click",(t=>n(t.target)));for(let n of o){n.innerHTML,n.getAttribute("data-hover")?(n.addEventListener("mouseenter",e),n.addEventListener("click",i)):n.addEventListener("click",t),s&&n.addEventListener("mouseout",removeFootnoteWithTimer)}class l extends HTMLElement{constructor(){super(),this.content=""}connectedCallback(){const t=this.attachShadow({mode:"open"}),e=this.children.item(0);console.log(this.children),e&&e.matches("a[href]")&&(this.content=e.innerText,e.innerText="",this.removeChild(e),t.appendChild(e));const i=document.createElement("aside");i.part="aside",i.style.visibility="hidden",i.classList.add("aside");const n=document.createElement("div");n.part="content";const o=document.createElement("div");o.part="arrow",n.innerText=this.content,i.appendChild(o),i.appendChild(n),t.appendChild(i);const d=n.getBoundingClientRect(),s=document.body.clientWidth;if(console.log(d.x,s),d.x+d.width>s){let t=d.x+d.width-s,e=d.x-t;console.log("o",e),i.style.left=-1*t-10+"px"}d.x<0&&(i.style.left="10px");const l=function(t,e){const i=t.getBoundingClientRect(),n=e.getBoundingClientRect(),o=n.left,d=n.top,s=i.left+i.width/2,l=i.bottom;return Math.hypot(o-s,l-d)}(this,i),c=i.getBoundingClientRect().width,h=l/c*100;console.log(l,o.style,l/c*100),o.style.left=h+"%"}}customElements.define("t-ftn",l)}();
//# sourceMappingURL=bundle.js.map
