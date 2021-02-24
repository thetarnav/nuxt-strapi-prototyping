(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{388:function(t,e,r){var content=r(390);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("1744a17f",content,!0,{sourceMap:!1})},389:function(t,e,r){"use strict";r(388)},390:function(t,e,r){(e=r(19)(!1)).push([t.i,'@-webkit-keyframes shimmer-data-v-d32bdd0e{to{transform:translateX(100%)}}@keyframes shimmer-data-v-d32bdd0e{to{transform:translateX(100%)}}.product-thumbnail[data-v-d32bdd0e]{aspect-ratio:1/1;padding-bottom:100%;background-size:cover;background-position:50%;position:relative;overflow:hidden;border:none;filter:blur(.3px);-webkit-animation:unset;animation:unset}.product-thumbnail[data-v-d32bdd0e]:before{background-color:#e2dfdd}.product-thumbnail[data-v-d32bdd0e]:after,.product-thumbnail[data-v-d32bdd0e]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%}.product-thumbnail[data-v-d32bdd0e]:after{background:linear-gradient(90deg,rgba(255,253,250,0),rgba(255,253,250,.2) 20%,rgba(255,253,250,.5) 50%,rgba(255,253,250,.2) 80%,rgba(255,253,250,0));transform:translateX(-100%);-webkit-animation:shimmer-data-v-d32bdd0e 3s infinite;animation:shimmer-data-v-d32bdd0e 3s infinite}.product-thumbnail[data-v-d32bdd0e]:after,.product-thumbnail[data-v-d32bdd0e]:before{transition:opacity .6s}.product-thumbnail.isLoaded[data-v-d32bdd0e]:after,.product-thumbnail.isLoaded[data-v-d32bdd0e]:before{opacity:0}.product-title[data-v-d32bdd0e]{overflow:hidden;white-space:normal;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.skeleton-product .product-title[data-v-d32bdd0e]{width:80%;height:10px;border-radius:20px;position:relative;overflow:hidden;border:none;filter:blur(.3px);background-color:#e2dfdd}.skeleton-product .product-title[data-v-d32bdd0e]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,rgba(255,253,250,0),rgba(255,253,250,.2) 20%,rgba(255,253,250,.5) 50%,rgba(255,253,250,.2) 80%,rgba(255,253,250,0));transform:translateX(-100%);-webkit-animation:shimmer-data-v-d32bdd0e 3s infinite;animation:shimmer-data-v-d32bdd0e 3s infinite}.skeleton-product .product-title[data-v-d32bdd0e]:last-of-type{width:40%}.badge[data-v-d32bdd0e]{border-radius:.25rem;height:1.5rem;text-align:center;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));min-width:1.5rem}.dark[data-v-d32bdd0e]{--tw-bg-opacity:1;background-color:rgba(64,64,64,var(--tw-bg-opacity))}.dark .product-title[data-v-d32bdd0e]{--tw-text-opacity:1;color:rgba(245,245,245,var(--tw-text-opacity))}',""]),t.exports=e},391:function(t,e,r){"use strict";r.r(e);r(43),r(147);var n=r(1),o=r(384),d=r.n(o),l=n.default.extend({name:"ProductThumbnail",props:{data:{type:Object,default:null},listIndex:{type:Number,required:!0},showSkeleton:{type:Boolean,required:!0}},computed:{product:function(){var t,e,r,n,data=this.data,o={title:"",id:"",thumbnail:"",isAvailable:!1,isNew:!1,isPopular:!1};if(data){var title=data.title,d=data.id,l=data.thumbnail,c=data.isAvailable,v=data.timestamp,m=data.views;o.title=title,o.id=d,o.thumbnail=null!==(n=null!==(r=null===(e=null===(t=l.formats)||void 0===t?void 0:t.medium)||void 0===e?void 0:e.url)&&void 0!==r?r:null==l?void 0:l.url)&&void 0!==n?n:"",o.isAvailable=null!=c&&c,o.isNew=Math.min(this.$lastVisit,Date.now()-6048e5)<v,o.isPopular=m>100}return o}},methods:{openProduct:function(){var t=this.product.id,e=d.a.stringify(this.$route.query);this.$router.push(this.localePath("/gallery/".concat(t,"?").concat(e)))}}}),c=(r(389),r(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"product-wrapper bg-gray-100 rounded-xl"},[r("transition",{attrs:{name:"fade",mode:"out-in"}},[t.showSkeleton?r("div",{key:"skeleton"+t.listIndex,staticClass:"product skeleton-product"},[r("div",{staticClass:"product-thumbnail rounded-xl"}),t._v(" "),r("p",{staticClass:"product-title mx-4 my-2 mt-4"}),t._v(" "),r("p",{staticClass:"product-title mx-4 my-2 mb-4"})]):r("a",{key:"product"+t.listIndex,staticClass:"product text-gray-900",on:{click:function(e){return t.openProduct()}}},[r("div",{staticClass:"thumbnail-wrapper relative"},[r("div",{directives:[{name:"lazy-background",rawName:"v-lazy-background"}],staticClass:"product-thumbnail rounded-xl",attrs:{"lazy-background":t.product.thumbnail}}),t._v(" "),r("div",{staticClass:"absolute top-2 right-0 -mr-2 flex flex-col space-y-2"},[t.product.isAvailable?r("div",{staticClass:"badge bg-primary"},[t._v("\n\t\t\t\t\t\ta\n\t\t\t\t\t")]):t._e(),t._v(" "),t.product.isNew?r("div",{staticClass:"badge bg-secondary"},[t._v("n")]):t._e(),t._v(" "),t.product.isPopular?r("div",{staticClass:"badge bg-gray-800"},[t._v("\n\t\t\t\t\t\tp\n\t\t\t\t\t")]):t._e()])]),t._v(" "),r("caption",{staticClass:"product-title text-left px-4 py-2"},[t._v("\n\t\t\t\t"+t._s(t.product.title)+"\n\t\t\t")])])])],1)}),[],!1,null,"d32bdd0e",null);e.default=component.exports},396:function(t,e,r){var content=r(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("6ac1bc86",content,!0,{sourceMap:!1})},397:function(t,e,r){var content=r(414);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("344070bf",content,!0,{sourceMap:!1})},398:function(t,e,r){var content=r(416);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("e9cb8f4c",content,!0,{sourceMap:!1})},408:function(t,e,r){"use strict";r(396)},409:function(t,e,r){(e=r(19)(!1)).push([t.i,"@-webkit-keyframes shimmer-data-v-7c7362e2{to{transform:translateX(100%)}}@keyframes shimmer-data-v-7c7362e2{to{transform:translateX(100%)}}.product-overlay[data-v-7c7362e2]{position:fixed;top:-5rem;right:-5rem;bottom:-5rem;left:-5rem;z-index:3000}.cover[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(23,23,23,var(--tw-bg-opacity));--tw-bg-opacity:0.9;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px)}.outer-wrapper[data-v-7c7362e2]{display:flex;justify-content:center;overflow-y:auto;position:absolute;top:5rem;right:5rem;bottom:5rem;left:5rem}.inner-wrapper[data-v-7c7362e2]{display:flex;flex-direction:column;align-items:stretch;max-width:28rem;overflow:hidden;width:100vw;height:-webkit-max-content;height:-moz-max-content;height:max-content}.thumbnail[data-v-7c7362e2]{display:flex;align-items:center;justify-content:center;position:relative;width:100vw;height:100vw;max-height:100vw}.thumbnail img[data-v-7c7362e2]{max-height:100%;max-width:100%}.card[data-v-7c7362e2]{margin-top:-1rem;position:relative;z-index:30}.content[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));border-radius:1rem;display:flex;flex-direction:column;overflow:hidden;--tw-shadow:0 0 40px 0 rgba(0,0,0,0.3);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.content>*[data-v-7c7362e2]{margin-bottom:1.5rem}.content[data-v-7c7362e2]>:last-child{margin-bottom:0}.header[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(245,245,245,var(--tw-bg-opacity));padding:1.5rem}.header .title[data-v-7c7362e2]{word-wrap:break-word}.header .title.smaller[data-v-7c7362e2]{font-size:2.25rem;line-height:2.5rem}.header .number[data-v-7c7362e2]{--tw-text-opacity:1;color:rgba(115,115,115,var(--tw-text-opacity))}.table-wrapper[data-v-7c7362e2]{--tw-bg-opacity:1;background-color:rgba(245,245,245,var(--tw-bg-opacity));padding:1.5rem;position:relative}.table-wrapper caption[data-v-7c7362e2]{font-size:.75rem;line-height:1rem;margin-bottom:.25rem;position:absolute;bottom:100%;--tw-text-opacity:1;color:rgba(115,115,115,var(--tw-text-opacity))}.table[data-v-7c7362e2]{width:100%}.table .row[data-v-7c7362e2]{border-bottom-width:2px}.table .row[data-v-7c7362e2]:last-child{border-width:0}.table .row[data-v-7c7362e2]{margin-top:.5rem;margin-bottom:.5rem}.table .key[data-v-7c7362e2],.table .value[data-v-7c7362e2]{line-height:1.25;padding-top:.375rem;padding-bottom:.375rem;text-align:left;vertical-align:text-top}.table .key[data-v-7c7362e2]{font-weight:600;padding-right:1rem;max-width:8rem}.similar-products[data-v-7c7362e2]{margin-top:1.5rem;margin-bottom:2.5rem}.similar-products .title[data-v-7c7362e2]{margin-bottom:1rem;margin-left:1.5rem;--tw-text-opacity:1;color:rgba(245,245,245,var(--tw-text-opacity))}.similar-products .list-wrapper[data-v-7c7362e2]{overflow-x:auto}.similar-products .list[data-v-7c7362e2]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1.5rem*var(--tw-space-x-reverse));margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)))}.similar-products .list[data-v-7c7362e2]{display:flex;padding-left:2.5rem;padding-right:2.5rem;width:-webkit-max-content;width:-moz-max-content;width:max-content}.similar-products .list-item[data-v-7c7362e2]{width:40vmin}.close-button[data-v-7c7362e2]{border-radius:50%;width:50px;height:50px;display:flex;padding:0;margin:0;position:absolute;top:-25px;right:20px}.close-button>*[data-v-7c7362e2]{margin:auto}.close-button .icon[data-v-7c7362e2]{height:24px;width:24px}.close-button.share[data-v-7c7362e2]{right:90px}.desc[data-v-7c7362e2]{white-space:pre-wrap}",""]),t.exports=e},413:function(t,e,r){"use strict";r(397)},414:function(t,e,r){(e=r(19)(!1)).push([t.i,"@-webkit-keyframes shimmer-data-v-30bdf2f7{to{transform:translateX(100%)}}@keyframes shimmer-data-v-30bdf2f7{to{transform:translateX(100%)}}.slider-container[data-v-30bdf2f7]{position:relative;width:100vw;height:100vw}.swiper-slide[data-v-30bdf2f7]{display:flex;align-items:center;justify-content:center;height:100%;position:relative;width:100%}.img[data-v-30bdf2f7]{max-height:100%;max-width:100%}.swiper-button-next[data-v-30bdf2f7],.swiper-button-prev[data-v-30bdf2f7]{transition:opacity .2s}.swiper-button-next[data-v-30bdf2f7]:after,.swiper-button-prev[data-v-30bdf2f7]:after{display:none}",""]),t.exports=e},415:function(t,e,r){"use strict";r(398)},416:function(t,e,r){(e=r(19)(!1)).push([t.i,"@-webkit-keyframes shimmer-data-v-7090e976{to{transform:translateX(100%)}}@keyframes shimmer-data-v-7090e976{to{transform:translateX(100%)}}.inner[data-v-7090e976]{width:-webkit-max-content;width:-moz-max-content;width:max-content;height:-webkit-max-content;height:-moz-max-content;height:max-content}.keep-height[data-v-7090e976]{height:var(--height)}.keep-width[data-v-7090e976]{width:var(--width)}.keep-in-view[data-v-7090e976]{position:fixed;z-index:10}@-webkit-keyframes from-top-data-v-7090e976{0%{transform:translateY(calc(-100% - .5rem))}}@keyframes from-top-data-v-7090e976{0%{transform:translateY(calc(-100% - .5rem))}}@-webkit-keyframes from-bottom-data-v-7090e976{0%{transform:translateY(calc(100% + 1rem))}}@keyframes from-bottom-data-v-7090e976{0%{transform:translateY(calc(100% + 1rem))}}.keep-in-view.stick-top[data-v-7090e976]{top:.5rem;-webkit-animation:from-top-data-v-7090e976 .3s forwards;animation:from-top-data-v-7090e976 .3s forwards}.keep-in-view.stick-right[data-v-7090e976]{right:1rem}.keep-in-view.stick-left[data-v-7090e976]{left:1rem}.keep-in-view.stick-bottom[data-v-7090e976]{bottom:1rem;-webkit-animation:from-bottom-data-v-7090e976 .3s forwards;animation:from-bottom-data-v-7090e976 .3s forwards}",""]),t.exports=e},420:function(t,e,r){"use strict";r.r(e);r(37);var n=r(1),o=r(410),d=(r(411),n.default.extend({name:"Slider",directives:{swiper:o.directive},props:{images:{type:Array,required:!0}},data:function(){return{swiperOptions:{grabCursor:!0,watchOverflow:!0,speed:400,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{slides:function(){var t=this.images,e=[];return t&&(null==t?void 0:t.length)>1&&(e=t.map((function(t){var e,r,n=t.formats,o=t.url;return(null===(e=n.large)||void 0===e?void 0:e.url)||(null===(r=n.medium)||void 0===r?void 0:r.url)||o||""}))),e}}})),l=(r(413),r(10)),component=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{directives:[{name:"swiper",rawName:"v-swiper",value:this.swiperOptions,expression:"swiperOptions"}],ref:"swiperEl",staticClass:"slider-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.slides,(function(t,r){return e("div",{key:t,staticClass:"swiper-slide"},[e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"img",attrs:{"data-src":t,alt:r}})])})),0),this._v(" "),e("Button",{staticClass:"swiper-button-prev circle",attrs:{"leading-icon":"prev"}}),this._v(" "),e("Button",{staticClass:"swiper-button-next circle",attrs:{"leading-icon":"next"}})],1)}),[],!1,null,"30bdf2f7",null);e.default=component.exports;installComponents(component,{Button:r(145).default})},421:function(t,e,r){"use strict";r.r(e);var n=r(1).default.extend({name:"KeepInView",inheritAttrs:!1,props:{classes:{type:String,default:""}},data:function(){return{isVisible:!1,height:null,width:null}},methods:{onWaypoint:function(t){var e=this;this.isVisible="in"===(null==t?void 0:t.going)||!1,this.$nextTick((function(){e.height=e.$refs.content.clientHeight||e.height,e.width=e.$refs.content.clientWidth||e.width}))}}}),o=(r(415),r(10)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"waypoint",rawName:"v-waypoint",value:{active:!0,callback:this.onWaypoint},expression:"{ active: true, callback: onWaypoint }"}],style:{"--height":this.height+"px","--width":this.width+"px"}},[e("div",{ref:"content",staticClass:"inner",class:this.classes+" "+(this.isVisible?"":"keep-in-view")},[this._t("default")],2)])}),[],!1,null,"7090e976",null);e.default=component.exports},433:function(t,e,r){"use strict";r.r(e);r(404),r(407),r(43),r(63),r(31),r(37),r(11),r(13),r(35),r(47),r(36),r(46);var n=r(48),o=(r(32),r(3)),d=r(1),l=r(394),c=r.n(l),v=r(384),m=r.n(v),h=r(148),f=d.default.extend({name:"ProductOverlay",asyncData:function(t){var e=t.params,r=t.payload;return{id:e.productId||"",data:null!=r?r:{}}},data:function(){return{id:"",data:{},ties:[],fetchedTies:!1}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.id,n=t.$graphql,data=t.data,o=h.e,r){e.next=4;break}return t.closeOverlay(),e.abrupt("return");case 4:if(data.title){e.next=17;break}return e.prev=5,e.next=8,n.request(o,{id:r});case 8:d=e.sent,l=d.product,t.data=l,e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0),t.closeOverlay();case 17:return e.next=19,t.fetchTies();case 19:case"end":return e.stop()}}),e,null,[[5,13]])})))()},head:function(){return{title:this.$data.data.title,meta:[{hid:"description",name:"description",content:this.$data.data.description}]}},computed:{singleImage:function(){var t,e,r;return(null===(e=null===(t=this.data.slides)||void 0===t?void 0:t[0])||void 0===e?void 0:e.formats.large.url)||(null===(r=this.data.thumbnail)||void 0===r?void 0:r.url)||""},BluuTitle:function(){var title=this.data.title;return title?"".concat(title).replace(/ą/g,"a").replace(/Ą/g,"A").replace(/ę/g,"e").replace(/Ę/g,"E"):""},table:function(){var input=this.data.table;if(!input)return[];var table=input.split("\n").filter((function(text){return text.includes(":")})).map((function(text){return text.split(":")})).filter((function(t){return 2===t.length}));return table},similarProducts:function(){var t=this.ties;if(0===t.length){var e={isLoaded:!1};return Object(n.a)(Array(4).keys()).map((function(){return e}))}return t.map((function(t){return{data:t.products[0],isLoaded:!0}}))}},watch:{id:function(){this.fetchedTies=!1,this.$fetch(),this.$refs.scrollingEl.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){var t=this.id,data=this.data,e=this.$fetchState;t?(this.$store.dispatch("seeProduct",t),void 0!==data.title&&0!==this.ties.length||!1!==e.pending||this.$fetch()):this.closeOverlay()},methods:{fetchTies:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.id,n=h.h,r){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,t.$graphql.request(n,{id:r});case 6:o=e.sent,d=o.product.ties,c()(d,(function(t){return 0===t.products.length})),t.ties=d,t.fetchedTies=!0,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))()},goToProduct:function(t){var e=m.a.stringify(this.$route.query);this.$router.push(this.localePath("/gallery/".concat(t,"?").concat(e)))},closeOverlay:function(){var t=this.$route,e=this.$router,r=m.a.stringify(t.query);e.push(this.localePath("/gallery?".concat(r)))},copyLink:function(){var t=this.id,link="".concat("http://192.168.43.199:1234","/gallery/").concat(t);console.log(link)}}}),w=(r(408),r(10)),component=Object(w.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"quick-fade",appear:""}},[r("div",{staticClass:"product-overlay"},[r("div",{ref:"scrollingEl",staticClass:"outer-wrapper"},[r("article",{staticClass:"inner-wrapper"},[r("transition",{attrs:{name:"quick-fade",mode:"out-in"}},[t.$fetchState.pending?r("div",{key:t.id+"-Media-Skeleton",staticClass:"thumbnail p-12"},[r("div",{staticClass:"skeleton w-full h-full rounded-2xl opacity-20"})]):r("div",{key:t.id+"-Media"},[t.data.slides&&t.data.slides.length>1?r("Slider",{attrs:{images:t.data.slides}}):t.data.thumbnail?r("figure",{staticClass:"thumbnail"},[r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.singleImage,alt:"product thumbnail"}})]):t._e()],1)]),t._v(" "),r("div",{staticClass:"card"},[r("KeepInView",{attrs:{classes:"top-buttons-frame stick-top"}},[r("Button",{staticClass:"circle top-0 left-0",attrs:{"leading-icon":"chain","on-click":t.copyLink}}),t._v(" "),r("Button",{staticClass:"circle top-0 left-0",attrs:{"leading-icon":"x","on-click":t.closeOverlay}})],1),t._v(" "),t.$fetchState.pending?r("div",{key:"skeleton-content",staticClass:"content"},[r("div",{staticClass:"header"},[r("h6",{staticClass:"title skeleton mb-4"}),t._v(" "),r("h6",{staticClass:"title skeleton w-4/12"})]),t._v(" "),r("div",{staticClass:"prose pb-6"},[r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton w-9/12"}),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton w-4/12"}),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton"}),t._v(" "),r("p",{staticClass:"skeleton w-4/12"})])]):r("main",{key:t.id+"-content",staticClass:"content"},[r("header",{staticClass:"header"},[r("h2",{staticClass:"title",class:{smaller:t.BluuTitle.length>25}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.BluuTitle)+"\n\t\t\t\t\t\t\t")]),t._v(" "),t.data.number?r("h6",{staticClass:"number"},[t._v("\n\t\t\t\t\t\t\t\t#"+t._s(t.data.number)+"\n\t\t\t\t\t\t\t")]):t._e()]),t._v(" "),t.data.description?r("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.$md.render(t.data.description))}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.data.description)+"\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.data.table&&t.table.length>0?r("figure",{staticClass:"table-wrapper"},[r("table",{staticClass:"table"},[r("tbody",{staticClass:"table-body"},t._l(t.table,(function(e,n){return r("tr",{key:e[0]+n,staticClass:"row"},[r("th",{staticClass:"key"},[t._v(t._s(e[0]))]),t._v(" "),r("td",{staticClass:"value"},[t._v(t._s(e[1]))])])})),0)])]):t._e(),t._v(" "),t.data.isAvailable?r("div",{staticClass:"pb-6 mx-6 mt-2 self-end"},[r("p",{staticClass:"text-sm mb-1"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("product.available.info"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),r("KeepInView",{staticClass:"keep-height keep-width",attrs:{classes:"stick-bottom stick-right"}},[r("Button",{staticClass:"bg-primary primary",attrs:{"leading-icon":"shopping-bag-full",href:t.data.shopLink}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.$t("product.available.button"))+"\n\t\t\t\t\t\t\t\t")])],1)],1):t._e()])],1),t._v(" "),r("client-only",[t.ties.length>1?r("footer",{staticClass:"similar-products"},[r("h4",{staticClass:"title"},[t._v(t._s(t.$t("product.similar")))]),t._v(" "),r("div",{staticClass:"list-wrapper"},[r("ul",{staticClass:"list"},t._l(t.similarProducts,(function(t,e){return r("li",{key:""+e,staticClass:"list-item"},[r("ProductThumbnail",{staticClass:"dark",attrs:{data:t.data,"list-index":e,"show-skeleton":!t.isLoaded}})],1)})),0)])]):t._e()])],1)]),t._v(" "),r("div",{staticClass:"cover"})])])}),[],!1,null,"7c7362e2",null);e.default=component.exports;installComponents(component,{Slider:r(420).default,Button:r(145).default,KeepInView:r(421).default,ProductThumbnail:r(391).default})}}]);