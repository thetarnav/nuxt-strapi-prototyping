(window.webpackJsonp=window.webpackJsonp||[]).push([[16,10,13],{420:function(t,e,r){var content=r(423);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7e4c26da",content,!0,{sourceMap:!1})},422:function(t,e,r){"use strict";r(420)},423:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,'@keyframes shimmer-data-v-d32bdd0e{to{transform:translateX(100%)}}.product-thumbnail[data-v-d32bdd0e]{aspect-ratio:1/1;padding-bottom:100%;background-size:cover;background-position:50%;position:relative;overflow:hidden;border:none;filter:blur(.3px);animation:unset}.product-thumbnail[data-v-d32bdd0e]:before{background-color:#e2dfdd}.product-thumbnail[data-v-d32bdd0e]:after,.product-thumbnail[data-v-d32bdd0e]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.product-thumbnail[data-v-d32bdd0e]:after{background:linear-gradient(90deg,rgba(255,253,250,0),rgba(255,253,250,.2) 20%,rgba(255,253,250,.5) 50%,rgba(255,253,250,.2) 80%,rgba(255,253,250,0));transform:translateX(-100%);animation:shimmer-data-v-d32bdd0e 3s infinite}.product-thumbnail[data-v-d32bdd0e]:after,.product-thumbnail[data-v-d32bdd0e]:before{transition:opacity .6s}.product-thumbnail.isLoaded[data-v-d32bdd0e]:after,.product-thumbnail.isLoaded[data-v-d32bdd0e]:before{opacity:0}.product-title[data-v-d32bdd0e]{overflow:hidden;white-space:normal;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.skeleton-product .product-title[data-v-d32bdd0e]{width:80%;height:10px;border-radius:20px;position:relative;overflow:hidden;border:none;filter:blur(.3px);background-color:#e2dfdd}.skeleton-product .product-title[data-v-d32bdd0e]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,rgba(255,253,250,0),rgba(255,253,250,.2) 20%,rgba(255,253,250,.5) 50%,rgba(255,253,250,.2) 80%,rgba(255,253,250,0));transform:translateX(-100%);animation:shimmer-data-v-d32bdd0e 3s infinite}.skeleton-product .product-title[data-v-d32bdd0e]:last-of-type{width:40%}.badge[data-v-d32bdd0e]{border-radius:.25rem;height:1.5rem;text-align:center;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));min-width:1.5rem}.dark[data-v-d32bdd0e]{--tw-bg-opacity:1;background-color:rgba(64,64,64,var(--tw-bg-opacity))}.dark .product-title[data-v-d32bdd0e]{--tw-text-opacity:1;color:rgba(245,245,245,var(--tw-text-opacity))}',""]),t.exports=n},424:function(t,e,r){"use strict";r.r(e);r(48),r(143);var n=r(1),o=r(415),l=r.n(o),c=n.default.extend({name:"ProductThumbnail",props:{data:{type:Object,default:null},listIndex:{type:Number,required:!0},showSkeleton:{type:Boolean,required:!0}},computed:{product:function(){var t,e,r,n,data=this.data,o={title:"",id:"",thumbnail:"",isAvailable:!1,isNew:!1,isPopular:!1};if(data){var title=data.title,l=data.id,c=data.thumbnail,d=data.isAvailable,v=data.timestamp,f=data.views;o.title=title,o.id=l,o.thumbnail=null!==(n=null!==(r=null===(e=null===(t=c.formats)||void 0===t?void 0:t.medium)||void 0===e?void 0:e.url)&&void 0!==r?r:null==c?void 0:c.url)&&void 0!==n?n:"",o.isAvailable=null!=d&&d,o.isNew=Math.min(this.$lastVisit,Date.now()-6048e5)<v,o.isPopular=f>100}return o}},methods:{openProduct:function(){var t=this.product.id,e=l.a.stringify(this.$route.query);this.$router.push(this.localePath("/gallery/".concat(t,"?").concat(e)))}}}),d=(r(422),r(14)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"product-wrapper bg-gray-100 rounded-xl"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showSkeleton?r("div",{key:"skeleton"+t.listIndex,staticClass:"product skeleton-product"},[r("div",{staticClass:"product-thumbnail rounded-xl"}),t._v(" "),r("p",{staticClass:"product-title mx-4 my-2 mt-4"}),t._v(" "),r("p",{staticClass:"product-title mx-4 my-2 mb-4"})]):r("a",{key:"product"+t.listIndex,staticClass:"product text-gray-900",on:{click:function(e){return t.openProduct()}}},[r("div",{staticClass:"thumbnail-wrapper relative"},[r("div",{directives:[{name:"lazy-background",rawName:"v-lazy-background"}],staticClass:"product-thumbnail rounded-xl",attrs:{"lazy-background":t.product.thumbnail}}),t._v(" "),r("div",{staticClass:"absolute top-2 right-0 -mr-2 flex flex-col space-y-2"},[t.product.isAvailable?r("div",{staticClass:"badge bg-primary"},[t._v("\n\t\t\t\t\t\ta\n\t\t\t\t\t")]):t._e(),t._v(" "),t.product.isNew?r("div",{staticClass:"badge bg-secondary"},[t._v("n")]):t._e(),t._v(" "),t.product.isPopular?r("div",{staticClass:"badge bg-gray-800"},[t._v("\n\t\t\t\t\t\tp\n\t\t\t\t\t")]):t._e()])]),t._v(" "),r("caption",{staticClass:"product-title text-left px-4 py-2"},[t._v("\n\t\t\t\t"+t._s(t.product.title)+"\n\t\t\t")])])])],1)}),[],!1,null,"d32bdd0e",null);e.default=component.exports},425:function(t,e,r){var content=r(430);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("5f59e45a",content,!0,{sourceMap:!1})},426:function(t,e,r){var content=r(432);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("facefd24",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r(425)},430:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,"@keyframes shimmer-data-v-30bdf2f7{to{transform:translateX(100%)}}.slider-container[data-v-30bdf2f7]{position:relative;width:100vw;height:100vw}.swiper-slide[data-v-30bdf2f7]{display:flex;align-items:center;justify-content:center;height:100%;position:relative;width:100%}.img[data-v-30bdf2f7]{max-height:100%;max-width:100%}.swiper-button-next[data-v-30bdf2f7],.swiper-button-prev[data-v-30bdf2f7]{transition:opacity .2s}.swiper-button-next[data-v-30bdf2f7]:after,.swiper-button-prev[data-v-30bdf2f7]:after{display:none}",""]),t.exports=n},431:function(t,e,r){"use strict";r(426)},432:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,"@keyframes shimmer-data-v-7090e976{to{transform:translateX(100%)}}.inner[data-v-7090e976]{width:max-content;height:max-content}.keep-height[data-v-7090e976]{height:var(--height)}.keep-width[data-v-7090e976]{width:var(--width)}.keep-in-view[data-v-7090e976]{position:fixed;z-index:10}@keyframes from-top-data-v-7090e976{0%{transform:translateY(calc(-100% - .5rem))}}@keyframes from-bottom-data-v-7090e976{0%{transform:translateY(calc(100% + 1rem))}}.keep-in-view.stick-top[data-v-7090e976]{top:.5rem;animation:from-top-data-v-7090e976 .3s forwards}.keep-in-view.stick-right[data-v-7090e976]{right:1rem}.keep-in-view.stick-left[data-v-7090e976]{left:1rem}.keep-in-view.stick-bottom[data-v-7090e976]{bottom:1rem;animation:from-bottom-data-v-7090e976 .3s forwards}",""]),t.exports=n},435:function(t,e,r){var n=r(10);e.f=n},436:function(t,e,r){var content=r(455);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7651d21c",content,!0,{sourceMap:!1})},442:function(t,e,r){"use strict";r.r(e);r(43);var n=r(1),o=r(437),l=(r(438),n.default.extend({name:"Slider",directives:{swiper:o.directive},props:{images:{type:Array,required:!0}},data:function(){return{swiperOptions:{grabCursor:!0,watchOverflow:!0,speed:400,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{slides:function(){var t=this.images,e=[];return t&&(null==t?void 0:t.length)>1&&(e=t.map((function(t){var e,r,n=t.formats,o=t.url;return(null===(e=n.large)||void 0===e?void 0:e.url)||(null===(r=n.medium)||void 0===r?void 0:r.url)||o||""}))),e}}})),c=(r(429),r(14)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{directives:[{name:"swiper",rawName:"v-swiper",value:t.swiperOptions,expression:"swiperOptions"}],ref:"swiperEl",staticClass:"slider-container"},[r("div",{staticClass:"swiper-wrapper"},t._l(t.slides,(function(t,e){return r("div",{key:t,staticClass:"swiper-slide"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img",attrs:{"data-src":t,alt:e}})])})),0),t._v(" "),r("Button",{staticClass:"swiper-button-prev circle",attrs:{"leading-icon":"prev"}}),t._v(" "),r("Button",{staticClass:"swiper-button-next circle",attrs:{"leading-icon":"next"}})],1)}),[],!1,null,"30bdf2f7",null);e.default=component.exports;installComponents(component,{Button:r(141).default})},443:function(t,e,r){"use strict";r.r(e);var n=r(1).default.extend({name:"KeepInView",inheritAttrs:!1,props:{classes:{type:String,default:""}},data:function(){return{isVisible:!1,height:null,width:null}},methods:{onWaypoint:function(t){var e=this;this.isVisible="in"===(null==t?void 0:t.going)||!1,this.$nextTick((function(){e.height=e.$refs.content.clientHeight||e.height,e.width=e.$refs.content.clientWidth||e.width}))}}}),o=(r(431),r(14)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:t.onWaypoint},expression:"{ active: true, callback: onWaypoint }"}],style:{"--height":t.height+"px","--width":t.width+"px"}},[r("div",{ref:"content",staticClass:"inner",class:t.classes+" "+(t.isVisible?"":"keep-in-view")},[t._t("default")],2)])}),[],!1,null,"7090e976",null);e.default=component.exports},450:function(t,e,r){"use strict";var n=r(3),o=r(9),l=r(17),c=r(5),d=r(26),v=r(148),f=r(235),h=r(11),m=r(25),w=r(100),y=r(21),x=r(4),k=r(50),_=r(54),C=r(79),O=r(67),S=r(68),$=r(81),P=r(95),j=r(451),T=r(147),z=r(61),E=r(30),N=r(97),B=r(44),I=r(28),A=r(146),L=r(98),M=r(80),V=r(99),X=r(10),W=r(435),J=r(452),K=r(62),R=r(49),D=r(78).forEach,F=L("hidden"),H="Symbol",Y=X("toPrimitive"),Q=R.set,G=R.getterFor(H),U=Object.prototype,Z=o.Symbol,tt=l("JSON","stringify"),et=z.f,at=E.f,it=j.f,nt=N.f,ot=A("symbols"),st=A("op-symbols"),lt=A("string-to-symbol-registry"),ct=A("symbol-to-string-registry"),ut=A("wks"),pt=o.QObject,vt=!pt||!pt.prototype||!pt.prototype.findChild,ft=d&&h((function(){return 7!=S(at({},"a",{get:function(){return at(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=et(U,e);n&&delete U[e],at(t,e,r),n&&t!==U&&at(U,e,n)}:at,ht=function(t,e){var symbol=ot[t]=S(Z.prototype);return Q(symbol,{type:H,tag:t,description:e}),d||(symbol.description=e),symbol},mt=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Z},bt=function(t,e,r){t===U&&bt(st,e,r),x(t);var n=C(e,!0);return x(r),m(ot,n)?(r.enumerable?(m(t,F)&&t[F][n]&&(t[F][n]=!1),r=S(r,{enumerable:O(0,!1)})):(m(t,F)||at(t,F,O(1,{})),t[F][n]=!0),ft(t,n,r)):at(t,n,r)},gt=function(t,e){x(t);var r=_(e),n=$(r).concat(kt(r));return D(n,(function(e){d&&!wt.call(r,e)||bt(t,e,r[e])})),t},wt=function(t){var e=C(t,!0),r=nt.call(this,e);return!(this===U&&m(ot,e)&&!m(st,e))&&(!(r||!m(this,e)||!m(ot,e)||m(this,F)&&this[F][e])||r)},yt=function(t,e){var r=_(t),n=C(e,!0);if(r!==U||!m(ot,n)||m(st,n)){var o=et(r,n);return!o||!m(ot,n)||m(r,F)&&r[F][n]||(o.enumerable=!0),o}},xt=function(t){var e=it(_(t)),r=[];return D(e,(function(t){m(ot,t)||m(M,t)||r.push(t)})),r},kt=function(t){var e=t===U,r=it(e?st:_(t)),n=[];return D(r,(function(t){!m(ot,t)||e&&!m(U,t)||n.push(ot[t])})),n};(v||(I((Z=function(){if(this instanceof Z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=V(t),r=function(t){this===U&&r.call(st,t),m(this,F)&&m(this[F],e)&&(this[F][e]=!1),ft(this,e,O(1,t))};return d&&vt&&ft(U,e,{configurable:!0,set:r}),ht(e,t)}).prototype,"toString",(function(){return G(this).tag})),I(Z,"withoutSetter",(function(t){return ht(V(t),t)})),N.f=wt,E.f=bt,z.f=yt,P.f=j.f=xt,T.f=kt,W.f=function(t){return ht(X(t),t)},d&&(at(Z.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),c||I(U,"propertyIsEnumerable",wt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!v,sham:!v},{Symbol:Z}),D($(ut),(function(t){J(t)})),n({target:H,stat:!0,forced:!v},{for:function(t){var e=String(t);if(m(lt,e))return lt[e];var symbol=Z(e);return lt[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!mt(t))throw TypeError(t+" is not a symbol");if(m(ct,t))return ct[t]},useSetter:function(){vt=!0},useSimple:function(){vt=!1}}),n({target:"Object",stat:!0,forced:!v,sham:!d},{create:function(t,e){return void 0===e?S(t):gt(S(t),e)},defineProperty:bt,defineProperties:gt,getOwnPropertyDescriptor:yt}),n({target:"Object",stat:!0,forced:!v},{getOwnPropertyNames:xt,getOwnPropertySymbols:kt}),n({target:"Object",stat:!0,forced:h((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(k(t))}}),tt)&&n({target:"JSON",stat:!0,forced:!v||h((function(){var symbol=Z();return"[null]"!=tt([symbol])||"{}"!=tt({a:symbol})||"{}"!=tt(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],l=1;arguments.length>l;)o.push(arguments[l++]);if(n=e,(y(e)||void 0!==t)&&!mt(t))return w(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!mt(e))return e}),o[1]=e,tt.apply(null,o)}});Z.prototype[Y]||B(Z.prototype,Y,Z.prototype.valueOf),K(Z,H),M[F]=!0},451:function(t,e,r){var n=r(54),o=r(95).f,l={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==l.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(n(t))}},452:function(t,e,r){var path=r(234),n=r(25),o=r(435),l=r(30).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||l(e,t,{value:o.f(t)})}},453:function(t,e,r){"use strict";var n=r(3),o=r(26),l=r(9),c=r(25),d=r(21),v=r(30).f,f=r(233),h=l.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var m={},w=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof w?new h(t):void 0===t?h():h(t);return""===t&&(m[e]=!0),e};f(w,h);var y=w.prototype=h.prototype;y.constructor=w;var x=y.toString,k="Symbol(test)"==String(h("test")),_=/^Symbol\((.*)\)[^)]+$/;v(y,"description",{configurable:!0,get:function(){var symbol=d(this)?this.valueOf():this,t=x.call(symbol);if(c(m,symbol))return"";var desc=k?t.slice(7,-1):t.replace(_,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:w})}},454:function(t,e,r){"use strict";r(436)},455:function(t,e,r){var n=r(23)((function(i){return i[1]}));n.push([t.i,"@keyframes shimmer-data-v-7c7362e2{to{transform:translateX(100%)}}.product-overlay[data-v-7c7362e2]{position:fixed;top:-5rem;right:-5rem;bottom:-5rem;left:-5rem;z-index:3000}.cover[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(23,23,23,var(--tw-bg-opacity));--tw-bg-opacity:0.9;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;backdrop-filter:blur(25px)}.outer-wrapper[data-v-7c7362e2]{display:flex;justify-content:center;overflow-y:auto;position:absolute;top:5rem;right:5rem;bottom:5rem;left:5rem}.inner-wrapper[data-v-7c7362e2]{display:flex;flex-direction:column;align-items:stretch;max-width:28rem;overflow:hidden;width:100vw;height:max-content}.thumbnail[data-v-7c7362e2]{display:flex;align-items:center;justify-content:center;position:relative;width:100vw;height:100vw;max-height:100vw}.thumbnail img[data-v-7c7362e2]{max-height:100%;max-width:100%}.card[data-v-7c7362e2]{margin-top:-1rem;position:relative;z-index:30}.content[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:1rem;display:flex;flex-direction:column;overflow:hidden;--tw-shadow:0 0 40px 0 rgba(0,0,0,0.3);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.content>*[data-v-7c7362e2]{margin-bottom:1.5rem}.content[data-v-7c7362e2]>:last-child{margin-bottom:0}.header[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(245,245,245,var(--tw-bg-opacity));padding:1.5rem}.header .title[data-v-7c7362e2]{overflow-wrap:break-word}.header .title.smaller[data-v-7c7362e2]{font-size:2.25rem;line-height:2.5rem}.header .number[data-v-7c7362e2]{--tw-text-opacity:1;color:rgba(115,115,115,var(--tw-text-opacity))}.table-wrapper[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(245,245,245,var(--tw-bg-opacity));padding:1.5rem;position:relative}.table-wrapper caption[data-v-7c7362e2]{font-size:.75rem;line-height:1rem;margin-bottom:.25rem;position:absolute;bottom:100%;--tw-text-opacity:1;color:rgba(115,115,115,var(--tw-text-opacity))}.table[data-v-7c7362e2]{width:100%}.table .row[data-v-7c7362e2]{border-bottom-width:2px}.table .row[data-v-7c7362e2]:last-child{border-width:0}.table .row[data-v-7c7362e2]{margin-top:.5rem;margin-bottom:.5rem}.table .key[data-v-7c7362e2],.table .value[data-v-7c7362e2]{line-height:1.25;padding-top:.375rem;padding-bottom:.375rem;text-align:left;vertical-align:text-top}.table .key[data-v-7c7362e2]{font-weight:600;padding-right:1rem;max-width:8rem}.similar-products[data-v-7c7362e2]{margin-top:1.5rem;margin-bottom:2.5rem}.similar-products .title[data-v-7c7362e2]{margin-bottom:1rem;margin-left:1.5rem;--tw-text-opacity:1;color:rgba(245,245,245,var(--tw-text-opacity))}.similar-products .list-wrapper[data-v-7c7362e2]{overflow-x:auto}.similar-products .list[data-v-7c7362e2]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem*var(--tw-space-x-reverse));margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)))}.similar-products .list[data-v-7c7362e2]{display:flex;padding-left:2.5rem;padding-right:2.5rem;width:max-content}.similar-products .list-item[data-v-7c7362e2]{width:40vmin}.close-button[data-v-7c7362e2]{border-radius:50%;width:50px;height:50px;display:flex;padding:0;margin:0;position:absolute;top:-25px;right:20px}.close-button>*[data-v-7c7362e2]{margin:auto}.close-button .icon[data-v-7c7362e2]{height:24px;width:24px}.close-button.share[data-v-7c7362e2]{right:90px}.desc[data-v-7c7362e2]{white-space:pre-wrap}",""]),t.exports=n},468:function(t,e,r){"use strict";r.r(e);r(450),r(453),r(48),r(58),r(37),r(43),r(15),r(20),r(42),r(55),r(53),r(51);var n=r(52),o=(r(39),r(6)),l=r(1),c=r(428),d=r.n(c),v=r(415),f=r.n(v),h=r(145),m=l.default.extend({name:"ProductOverlay",asyncData:function(t){var e=t.params,r=t.payload;return{id:e.productId||"",data:null!=r?r:{}}},data:function(){return{id:"",data:{},ties:[],fetchedTies:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.id,n=t.$graphql,data=t.data,o=h.e,r){e.next=4;break}return t.closeOverlay(),e.abrupt("return");case 4:if(data.title){e.next=17;break}return e.prev=5,e.next=8,n.request(o,{id:r});case 8:l=e.sent,c=l.product,t.data=c,e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0),t.closeOverlay();case 17:return e.next=19,t.fetchTies();case 19:case"end":return e.stop()}}),e,null,[[5,13]])})))()},head:function(){return{title:this.$data.data.title,meta:[{hid:"description",name:"description",content:this.$data.data.description}]}},computed:{singleImage:function(){var t,e,r;return(null===(e=null===(t=this.data.slides)||void 0===t?void 0:t[0])||void 0===e?void 0:e.formats.large.url)||(null===(r=this.data.thumbnail)||void 0===r?void 0:r.url)||""},BluuTitle:function(){var title=this.data.title;return title?"".concat(title).replace(/ą/g,"a").replace(/Ą/g,"A").replace(/ę/g,"e").replace(/Ę/g,"E"):""},table:function(){var input=this.data.table;if(!input)return[];var table=input.split("\n").filter((function(text){return text.includes(":")})).map((function(text){return text.split(":")})).filter((function(t){return 2===t.length}));return table},similarProducts:function(){var t=this.ties;if(0===t.length){var e={isLoaded:!1};return Object(n.a)(Array(4).keys()).map((function(){return e}))}return t.map((function(t){return{data:t.products[0],isLoaded:!0}}))}},watch:{id:function(){this.fetchedTies=!1,this.$fetch(),this.$refs.scrollingEl.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){var t=this.id,data=this.data,e=this.$fetchState;t?(this.$store.dispatch("seeProduct",t),void 0!==data.title&&0!==this.ties.length||!1!==e.pending||this.$fetch()):this.closeOverlay()},methods:{fetchTies:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.id,n=h.h,r){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,t.$graphql.request(n,{id:r});case 6:o=e.sent,l=o.product.ties,d()(l,(function(t){return 0===t.products.length})),t.ties=l,t.fetchedTies=!0,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))()},goToProduct:function(t){var e=f.a.stringify(this.$route.query);this.$router.push(this.localePath("/gallery/".concat(t,"?").concat(e)))},closeOverlay:function(){var t=this.$route,e=this.$router,r=f.a.stringify(t.query);e.push(this.localePath("/gallery?".concat(r)))},copyLink:function(){var t=this.id,link="".concat("http://192.168.43.199:1234","/gallery/").concat(t);console.log(link)}}}),w=(r(454),r(14)),component=Object(w.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"quick-fade",appear:""}},[r("div",{staticClass:"product-overlay"},[r("div",{ref:"scrollingEl",staticClass:"outer-wrapper"},[r("article",{staticClass:"inner-wrapper"},[r("transition",{attrs:{name:"quick-fade",mode:"out-in"}},[t.$fetchState.pending?r("div",{key:t.id+"-Media-Skeleton",staticClass:"thumbnail p-12"},[r("div",{staticClass:"skeleton w-full h-full rounded-2xl opacity-20"})]):r("div",{key:t.id+"-Media"},[t.data.slides&&t.data.slides.length>1?r("Slider",{attrs:{images:t.data.slides}}):t.data.thumbnail?r("figure",{staticClass:"thumbnail"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.singleImage,alt:"product thumbnail"}})]):t._e()],1)]),t._v(" "),r("div",{staticClass:"card"},[r("KeepInView",{attrs:{classes:"top-buttons-frame stick-top"}},[r("Button",{staticClass:"circle top-0 left-0",attrs:{"leading-icon":"chain","on-click":t.copyLink}}),t._v(" "),r("Button",{staticClass:"circle top-0 left-0",attrs:{"leading-icon":"x","on-click":t.closeOverlay}})],1),t._v(" "),t.$fetchState.pending?r("div",{key:"skeleton-content",staticClass:"content"},[r("div",{staticClass:"header"},[r("h6",{staticClass:"title skeleton mb-4"}),t._v(" "),r("h6",{staticClass:"title skeleton w-4/12"})]),t._v(" "),r("div",{staticClass:"prose pb-6"},[r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton w-9/12"}),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton w-4/12"}),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton w-4/12"})])]):r("main",{key:t.id+"-content",staticClass:"content"},[r("header",{staticClass:"header"},[r("h2",{staticClass:"title",class:{smaller:t.BluuTitle.length>25}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.BluuTitle)+"\n\t\t\t\t\t\t\t")]),t._v(" "),t.data.number?r("h6",{staticClass:"number"},[t._v("\n\t\t\t\t\t\t\t\t#"+t._s(t.data.number)+"\n\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),t.data.description?r("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.$md.render(t.data.description))}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.data.description)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.data.table&&t.table.length>0?r("figure",{staticClass:"table-wrapper"},[r("table",{staticClass:"table"},[r("tbody",{staticClass:"table-body"},t._l(t.table,(function(e,n){return r("tr",{key:e[0]+n,staticClass:"row"},[r("th",{staticClass:"key"},[t._v(t._s(e[0]))]),t._v(" "),r("td",{staticClass:"value"},[t._v(t._s(e[1]))])])})),0)])]):t._e(),t._v(" "),t.data.isAvailable?r("div",{staticClass:"pb-6 mx-6 mt-2 self-end"},[r("p",{staticClass:"text-sm mb-1"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("product.available.info"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),r("KeepInView",{staticClass:"keep-height keep-width",attrs:{classes:"stick-bottom stick-right"}},[r("Button",{staticClass:"bg-primary primary",attrs:{"leading-icon":"shopping-bag-full",href:t.data.shopLink}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("product.available.button"))+"\n\t\t\t\t\t\t\t\t")])],1)],1):t._e()])],1),t._v(" "),r("client-only",[t.ties.length>1?r("footer",{staticClass:"similar-products"},[r("h4",{staticClass:"title"},[t._v(t._s(t.$t("product.similar")))]),t._v(" "),r("div",{staticClass:"list-wrapper"},[r("ul",{staticClass:"list"},t._l(t.similarProducts,(function(t,e){return r("li",{key:""+e,staticClass:"list-item"},[r("ProductThumbnail",{staticClass:"dark",attrs:{data:t.data,"list-index":e,"show-skeleton":!t.isLoaded}})],1)})),0)])]):t._e()])],1)]),t._v(" "),r("div",{staticClass:"cover"})])])}),[],!1,null,"7c7362e2",null);e.default=component.exports;installComponents(component,{Slider:r(442).default,Button:r(141).default,KeepInView:r(443).default,ProductThumbnail:r(424).default})}}]);