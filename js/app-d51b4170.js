!function(e){var t={};function r(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="//caohenghu.github.io/vue-colorpicker/",r(r.s=18)}([function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAlBJREFUOBGNkk2IUlEUx+99vufXQvCjEA11YWgk7TTLZhwVLTfSRmY1QbOoTdMqad0iiGB20cpVUAt3SVHCJDJG40IXBVGLIIOB8hM/QPy+/a/xYqK38MJ99757zu9/zj3nUrLmiEajdkEQni6Xy6hKpfqB/eNCofCMrsOHQiEPgPfwtdhsNkYpJe12m0LolkpJIJFI7DkcDm+9Xv/o9/vPw+dwsVhYnE4nc7lc1G63016vx8bj8TlRSWA6nd6cz+cXAoHAGYD3sDdarVam1+vpaDRaITgjjLHTigKArkK9ifXhbDYjBoOBSZL0F261Wqzb7VKtVvtBUQCwi4N88kjD4ZAg+ioyT53DGo3mJwLs/VcD3PkyrnAwmUwks9n8YDAYuPBvxGQASL/fp8imiwJeKZVK3/4R4DAicliLIt4pFosvsH9Vq9Wu4b5GCHC4j+hb5XL5C09JWOWFTzAY3MJyAAHJ7XbfRo9fclsmk2maTKY8IhJRFAna+QTwJ27jYyUQDofj6O1bPBLJ6/Xu5vP5N3/MhMC2gxrcReTvEGio1er7eFRR2S7EYrE40nsNWPB4PLu5XO6dbIxEIjuo+COkfAyfTZ1OF4dIHyJnZR8RkZ/zH5/PdyObzR7KhmQyud3pdFYw2rVRqVSOYePTIvvwVYDyKThUT8KpVGq70WjsI/Iv+HC4zp2VhoiiEP625ZFOp683m819iLZxtlGtVuuyTWmlePcM9x9A6DNWikd0EYJtdGPz6OjoqxJ08ox3oQzYgKtcwgwi7Q5athbMhX4DL0sglf8ys78AAAAASUVORK5CYII="},function(e,t,r){e.exports=r.p+"images/cover-154362cd.jpg"},function(e,t,r){"use strict";var s=r(0);r.n(s).a},function(e,t,r){"use strict";var s=r(1);r.n(s).a},function(e,t,r){"use strict";var s=r(2);r.n(s).a},function(e,t,r){"use strict";var s=r(3);r.n(s).a},function(e,t,r){"use strict";var s=r(4);r.n(s).a},function(e,t,r){"use strict";var s=r(5);r.n(s).a},function(e,t,r){"use strict";var s=r(6);r.n(s).a},function(e,t,r){"use strict";var s=r(7);r.n(s).a},function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hu-page"},[r("div",{staticClass:"bg",style:{background:e.color}},[r("div",{staticClass:"title"},[e._v("\n            vue-colorpicker\n        ")]),e._v(" "),r("div",{staticClass:"cover"},[r("color-picker",{attrs:{theme:e.theme,color:e.color,"sucker-hide":!1,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea},on:{changeColor:e.changeColor,openSucker:e.openSucker}}),e._v(" "),e.isOpenSucker?r("img",{ref:"cover"}):e._e()],1)]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"switch",class:{"anim-pull":e.inAnimation},on:{animationend:e.animationEnd,click:e.changeTheme}})])};s._withStripped=!0;var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hu-color-picker",class:{light:e.isLightTheme},style:{width:e.totalWidth+"px"}},[r("div",{staticClass:"color-set"},[r("Saturation",{ref:"saturation",attrs:{color:e.rgbString,hsv:e.hsv,size:e.hueHeight},on:{selectSaturation:e.selectSaturation}}),e._v(" "),r("Hue",{ref:"hue",attrs:{hsv:e.hsv,width:e.hueWidth,height:e.hueHeight},on:{selectHue:e.selectHue}}),e._v(" "),r("Alpha",{ref:"alpha",attrs:{color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight},on:{selectAlpha:e.selectAlpha}})],1),e._v(" "),r("div",{staticClass:"color-show",style:{height:e.previewHeight+"px"}},[r("Preview",{attrs:{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight}}),e._v(" "),e.suckerHide?e._e():r("Sucker",{attrs:{"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea},on:{openSucker:e.openSucker,selectSucker:e.selectSucker}})],1),e._v(" "),r("Box",{attrs:{name:"HEX",color:e.modelHex},on:{inputColor:e.inputHex}}),e._v(" "),r("Box",{attrs:{name:"RGBA",color:e.modelRgba},on:{inputColor:e.inputRgba}}),e._v(" "),r("Colors",{attrs:{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey},on:{selectColor:e.selectColor}})],1)};i._withStripped=!0;var o={methods:{setColorValue(e){let t={r:0,g:0,b:0,a:1};/#/.test(e)?t=this.hex2rgb(e):/rgb/.test(e)?t=this.rgb2rgba(e):"string"==typeof e?t=this.rgb2rgba(`rgba(${e})`):"[object Object]"===Object.prototype.toString.call(e)&&(t=e);const{r:r,g:s,b:i,a:o}=t,{h:n,s:a,v:l}=this.rgb2hsv(t);return{r:r,g:s,b:i,a:void 0===o?1:o,h:n,s:a,v:l}},createAlphaSquare(e){const t=document.createElement("canvas"),r=t.getContext("2d"),s=2*e;return t.width=s,t.height=s,r.fillStyle="#ffffff",r.fillRect(0,0,s,s),r.fillStyle="#ccd5db",r.fillRect(0,0,e,e),r.fillRect(e,e,e,e),t},createLinearGradient(e,t,r,s,i,o){const n="l"===e,a=t.createLinearGradient(0,0,n?r:0,n?0:s);a.addColorStop(.01,i),a.addColorStop(.99,o),t.fillStyle=a,t.fillRect(0,0,r,s)},rgb2hex({r:e,g:t,b:r},s){const i=e=>("0"+Number(e).toString(16)).slice(-2),o=`#${i(e)}${i(t)}${i(r)}`;return s?o.toUpperCase():o},hex2rgb(e){const t=e=>parseInt(e,16)||0;return{r:t((e=e.slice(1)).slice(0,2)),g:t(e.slice(2,4)),b:t(e.slice(4,6))}},rgb2rgba:e=>"string"==typeof e?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e,rgb2hsv({r:e,g:t,b:r}){e/=255,t/=255,r/=255;const s=Math.max(e,t,r),i=Math.min(e,t,r),o=s-i;let n=0;return s===i?n=0:s===e?n=t>=r?60*(t-r)/o:60*(t-r)/o+360:s===t?n=60*(r-e)/o+120:s===r&&(n=60*(e-t)/o+240),n=Math.floor(n),{h:n,s:parseFloat((0===s?0:1-i/s).toFixed(2)),v:parseFloat(s.toFixed(2))}}}},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"saturation",on:{mousedown:function(t){return t.preventDefault(),t.stopPropagation(),e.selectSaturation(t)}}},[r("canvas",{ref:"canvasSaturation"}),e._v(" "),r("div",{staticClass:"slide",style:e.slideSaturationStyle})])};n._withStripped=!0;var a={mixins:[o],props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},data:()=>({slideSaturationStyle:{}}),mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,t=this.size,r=e.getContext("2d");e.width=t,e.height=t,r.fillStyle=this.color,r.fillRect(0,0,t,t),this.createLinearGradient("l",r,t,t,"#FFFFFF","rgba(255,255,255,0)"),this.createLinearGradient("p",r,t,t,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:t,left:r}=this.$el.getBoundingClientRect(),s=e.target.getContext("2d"),i=e=>{let i=e.clientX-r,o=e.clientY-t;i<0&&(i=0),o<0&&(o=0),i>this.size&&(i=this.size),o>this.size&&(o=this.size),this.slideSaturationStyle={left:i-5+"px",top:o-5+"px"};const n=s.getImageData(Math.min(i,this.size-1),Math.min(o,this.size-1),1,1),[a,l,c]=n.data;this.$emit("selectSaturation",{r:a,g:l,b:c})};i(e);const o=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",o)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",o)}}};r(10);function l(e,t,r,s,i,o,n,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),s&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),n?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(n)},c._ssrRegister=l):i&&(l=a?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(e,t){return l.call(t),h(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var c=l(a,n,[],!1,null,null,null);c.options.__file="src/color/Saturation.vue";var h=c.exports,u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hue",on:{mousedown:function(t){return t.preventDefault(),t.stopPropagation(),e.selectHue(t)}}},[r("canvas",{ref:"canvasHue"}),e._v(" "),r("div",{staticClass:"slide",style:e.slideHueStyle})])};u._withStripped=!0;var d={props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},data:()=>({slideHueStyle:{}}),mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,t=this.width,r=this.height,s=e.getContext("2d");e.width=t,e.height=r;const i=s.createLinearGradient(0,0,0,r);i.addColorStop(0,"#FF0000"),i.addColorStop(.17,"#FF00FF"),i.addColorStop(.34,"#0000FF"),i.addColorStop(.51,"#00FFFF"),i.addColorStop(.68,"#00FF00"),i.addColorStop(.17*5,"#FFFF00"),i.addColorStop(1,"#FF0000"),s.fillStyle=i,s.fillRect(0,0,t,r)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:t}=this.$el.getBoundingClientRect(),r=e.target.getContext("2d"),s=e=>{let s=e.clientY-t;s<0&&(s=0),s>this.height&&(s=this.height),this.slideHueStyle={top:s-2+"px"};const i=r.getImageData(0,Math.min(s,this.height-1),1,1),[o,n,a]=i.data;this.$emit("selectHue",{r:o,g:n,b:a})};s(e);const i=()=>{document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",i)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",i)}}},p=(r(11),l(d,u,[],!1,null,null,null));p.options.__file="src/color/Hue.vue";var g=p.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"color-alpha",on:{mousedown:function(t){return t.preventDefault(),t.stopPropagation(),e.selectAlpha(t)}}},[r("canvas",{ref:"canvasAlpha"}),e._v(" "),r("div",{staticClass:"slide",style:e.slideAlphaStyle})])};v._withStripped=!0;var m={mixins:[o],props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},data:()=>({slideAlphaStyle:{},alphaSize:5}),watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,t=this.width,r=this.height,s=this.alphaSize,i=this.createAlphaSquare(s),o=e.getContext("2d");e.width=t,e.height=r,o.fillStyle=o.createPattern(i,"repeat"),o.fillRect(0,0,t,r),this.createLinearGradient("p",o,t,r,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:t}=this.$el.getBoundingClientRect(),r=e=>{let r=e.clientY-t;r<0&&(r=0),r>this.height&&(r=this.height);let s=parseFloat((r/this.height).toFixed(2));this.$emit("selectAlpha",s)};r(e);const s=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",s)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",s)}}},f=(r(12),l(m,v,[],!1,null,null,null));f.options.__file="src/color/Alpha.vue";var S=f.exports,b=function(){var e=this.$createElement;return(this._self._c||e)("canvas")};b._withStripped=!0;var C=l({mixins:[o],props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data:()=>({alphaSize:5}),watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,t=this.width,r=this.height,s=this.alphaSize,i=this.createAlphaSquare(s),o=e.getContext("2d");e.width=t,e.height=r,o.fillStyle=o.createPattern(i,"repeat"),o.fillRect(0,0,t,r),o.fillStyle=this.color,o.fillRect(0,0,t,r)}}},b,[],!1,null,null,null);C.options.__file="src/color/Preview.vue";var y=C.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isSucking?e._e():r("svg",{staticClass:"sucker",class:{active:e.isOpenSucker},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48"},on:{click:e.openSucker}},[r("path",{attrs:{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"}})]),e._v(" "),e.isSucking?r("svg",{staticClass:"sucker",attrs:{viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[r("g",{attrs:{transform:"translate(1 1)","stroke-width":"4"}},[r("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),e._v(" "),r("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])]):e._e()])};k._withStripped=!0;var x=r(8),_=r.n(x),A={props:{suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]}},data:()=>({isOpenSucker:!1,suckerPreview:null,isSucking:!1}),watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e),e.style.cursor=`url(${_.a}) 0 32, default`}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){27===e.keyCode&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:t,clientY:r}=e,{top:s,left:i,width:o,height:n}=this.suckerCanvas.getBoundingClientRect(),a=t-i,l=r-s,c=this.suckerCanvas.getContext("2d").getImageData(Math.min(a,o-1),Math.min(l,n-1),1,1);let[h,u,d,p]=c.data;p=parseFloat((p/255).toFixed(2));const g=this.suckerPreview.style;Object.assign(g,{position:"absolute",left:t+20+"px",top:r-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${h}, ${u}, ${d}, ${p})`,zIndex:95}),t>=this.suckerArea[0]&&r>=this.suckerArea[1]&&t<=this.suckerArea[2]&&r<=this.suckerArea[3]?g.display="":g.display="none"},suckColor(e){e&&"CANVAS"!==e.tagName||(this.suckerPreview=document.createElement("div"),document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",t=>{const{clientX:r,clientY:s}=t,{top:i,left:o,width:n,height:a}=e.getBoundingClientRect(),l=r-o,c=s-i,h=e.getContext("2d").getImageData(Math.min(l,n-1),Math.min(c,a-1),1,1);let[u,d,p,g]=h.data;g=parseFloat((g/255).toFixed(2)),this.$emit("selectSucker",{r:u,g:d,b:p,a:g})}))}}},w=(r(13),l(A,k,[],!1,null,null,null));w.options.__file="src/color/Sucker.vue";var $=w.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"color-type"},[r("span",{staticClass:"name"},[e._v("\n        "+e._s(e.name)+"\n    ")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.modelColor,expression:"modelColor"}],staticClass:"value",domProps:{value:e.modelColor},on:{input:function(t){t.target.composing||(e.modelColor=t.target.value)}}})])};F._withStripped=!0;var H={props:{name:{type:String,default:""},color:{type:String,default:""}},computed:{modelColor:{get(){return this.color},set(e){this.$emit("inputColor",e)}}}},E=(r(14),l(H,F,[],!1,null,null,null));E.options.__file="src/color/Box.vue";var O=E.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"colors"},e._l(e.colorsDefault,(function(t){return r("li",{key:t,staticClass:"item",on:{click:function(r){return e.selectColor(t)}}},[r("div",{staticClass:"alpha",style:{background:"url("+e.imgAlphaBase64+")"}}),e._v(" "),r("div",{staticClass:"color",style:{background:t}})])})),0),e._v(" "),e.colorsHistory.length?r("ul",{staticClass:"colors history"},e._l(e.colorsHistory,(function(t){return r("li",{key:t,staticClass:"item",on:{click:function(r){return e.selectColor(t)}}},[r("div",{staticClass:"alpha",style:{background:"url("+e.imgAlphaBase64+")"}}),e._v(" "),r("div",{staticClass:"color",style:{background:t}})])})),0):e._e()])};R._withStripped=!0;var L={mixins:[o],props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},data(){return{imgAlphaBase64:"",colorsHistory:JSON.parse(localStorage.getItem(this.colorsHistoryKey))||[]}},created(){this.imgAlphaBase64=this.createAlphaSquare(4).toDataURL()},destroyed(){this.setColorsHistory(this.color)},methods:{selectColor(e){this.$emit("selectColor",e)},setColorsHistory(e){if(!e)return;const t=this.colorsHistory,r=t.indexOf(e);r>=0&&t.splice(r,1),t.length>=8&&(t.length=7),t.unshift(e),this.colorsHistory=t,localStorage.setItem(this.colorsHistoryKey,JSON.stringify(t))}}},T=(r(15),l(L,R,[],!1,null,null,null));T.options.__file="src/color/Colors.vue";var j={components:{Saturation:h,Hue:g,Alpha:S,Preview:y,Sucker:$,Box:O,Colors:T.exports},mixins:[o],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data:()=>({hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}),computed:{isLightTheme(){return"light"===this.theme},totalWidth(){return this.hueHeight+2*(this.hueWidth+8)},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return this.rgb2hex(this.rgba,!0)}},created(){Object.assign(this,this.setColorValue(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:t,g:r,b:s,h:i,s:o,v:n}=this.setColorValue(e);Object.assign(this,{r:t,g:r,b:s,h:i,s:o,v:n}),this.setText()},selectHue(e){const{r:t,g:r,b:s,h:i,s:o,v:n}=this.setColorValue(e);Object.assign(this,{r:t,g:r,b:s,h:i,s:o,v:n}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:t,g:r,b:s,a:i,h:o,s:n,v:a}=this.setColorValue(e);Object.assign(this,{r:t,g:r,b:s,a:i,h:o,s:n,v:a}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:t,g:r,b:s,a:i,h:o,s:n,v:a}=this.setColorValue(e);Object.assign(this,{r:t,g:r,b:s,a:i,h:o,s:n,v:a}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:t,g:r,b:s,a:i,h:o,s:n,v:a}=this.setColorValue(e);Object.assign(this,{r:t,g:r,b:s,a:i,h:o,s:n,v:a}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:t,g:r,b:s,a:i,h:o,s:n,v:a}=this.setColorValue(e);Object.assign(this,{r:t,g:r,b:s,a:i,h:o,s:n,v:a}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}},B=(r(16),l(j,i,[],!1,null,null,null));B.options.__file="src/color/Index.vue";var P=B.exports,D=r(9),V=r.n(D),I={components:{colorPicker:P},data:()=>({color:"#59c7f9",suckerCanvas:null,suckerArea:[],isOpenSucker:!1,theme:"",inAnimation:!1}),methods:{changeColor(e){const{r:t,g:r,b:s,a:i}=e.rgba;this.color=`rgba(${t}, ${r}, ${s}, ${i})`},openSucker(e){this.isOpenSucker=e,e?setTimeout(()=>{const e=this.$refs.cover;e.onload=()=>{if(!this.isOpenSucker)return;const t=e.getBoundingClientRect(),r=this.createCanvas(e,t);document.body.appendChild(r),this.suckerCanvas=r,this.suckerArea=[t.left,t.top,t.left+t.width,t.top+t.height]},e.setAttribute("crossorigin","Anonymous"),e.src=V.a},10):this.suckerCanvas&&this.suckerCanvas.remove()},createCanvas(e,t){const r=document.createElement("canvas"),s=r.getContext("2d");return r.width=t.width,r.height=t.height,s.drawImage(e,0,0,t.width,t.height),Object.assign(r.style,{position:"absolute",left:t.left+"px",top:t.top+"px",opacity:0}),r},changeTheme(){this.theme=this.theme?"":"light",this.inAnimation=!0},animationEnd(){this.inAnimation=!1}}},N=(r(17),l(I,s,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"github"},[t("a",{attrs:{href:"https://github.com/caohenghu/vue-colorpicker",target:"_blank"}},[this._v("\n            Fork me on GitHub\n        ")])])}],!1,null,null,null));N.options.__file="demo/App.vue";var z=N.exports;new Vue({el:"#app",render:e=>e(z)})}]);