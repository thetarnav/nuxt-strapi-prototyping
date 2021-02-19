(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(t,e,n){"use strict";var r=n(1),o=n(25),l=n(206),c=n(207);o.a.autoAddCss=!1,o.c.add(c.a),r.default.component("Icon",l.a)},141:function(t,e,n){"use strict";var r=n(1),o=n(208);r.default.component("GlobalEvents",o.a)},142:function(t,e,n){"use strict";n(27);var r=n(3),o=n(1),l=n(145);e.a=function(t){var e=t.store,n=t.$graphql,c=parseInt(localStorage.getItem("lastVisit")||"")||Date.now();function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(){var r,o,d,f,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.request(l.d,{lastVisit:c,weekAgo:Date.now()-6048e5});case 3:r=t.sent,o=r.sinceLastWeek.aggregate.count,d=r.sinceLastVisit.aggregate.count,f=r.available.aggregate.count,v=r.other.aggregate.count,e.commit("setFilterCount",{sinceLastVisit:d,sinceLastWeek:o,countAvailable:f,countOther:v}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}o.default.prototype.$lastVisit=c,function(){d.apply(this,arguments)}()}},143:function(t,e,n){"use strict";e.a=function(t){var e;null===(e=t.app.router)||void 0===e||e.afterEach((function(t){var e,n=t.query,r=t.params,o=void 0!==n.productId||void 0!==r.productId,l=null===(e=document.scrollingElement)||void 0===e?void 0:e.classList;o?null==l||l.add("disable-scroll"):null==l||l.remove("disable-scroll")}))}},144:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(29),n(72),n(95),n(14),n(31),n(61);function r(t,e){for(var n=null,r=t.parentElement;null===n&&null!==r;){for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var l=e[o],c=getComputedStyle(r)[o];if("string"==typeof l){if(c===l){n=r;continue}break}if(l.includes(c)){n=r;continue}n=null;break}r=r.parentElement}return n}},145:function(t,e,n){"use strict";n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return $})),n.d(e,"b",(function(){return S})),n.d(e,"f",(function(){return A})),n.d(e,"i",(function(){return j})),n.d(e,"a",(function(){return C})),n.d(e,"g",(function(){return E})),n.d(e,"e",(function(){return T})),n.d(e,"h",(function(){return N}));var r=n(26),o=n(17);function l(){var data=Object(r.a)(['\n\tquery ProductTies($id: ID!) {\n\t\tproduct(id: $id) {\n\t\t\tties(sort: "value:desc", limit: 4) {\n\t\t\t\tproducts(where: { id_ne: $id }) {\n\t\t\t\t\t...ProductThumbnail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t',"\n"]);return l=function(){return data},data}function c(){var data=Object(r.a)(["\n\tquery FullProduct($id: ID!) {\n\t\tproduct(id: $id) {\n\t\t\t...FullProductFragment\n\t\t}\n\t}\n\t","\n"]);return c=function(){return data},data}function d(){var data=Object(r.a)(['\n\tquery WithoutCategoryProducts($start: Int, $limit: Int) {\n\t\tproducts(\n\t\t\tsort: "popularity:desc"\n\t\t\twhere: { category_null: true }\n\t\t\tlimit: $limit\n\t\t\tstart: $start\n\t\t) {\n\t\t\t...ProductThumbnail\n\t\t}\n\t}\n\t',"\n"]);return d=function(){return data},data}function f(){var data=Object(r.a)(['\n\tquery AllProducts($start: Int, $limit: Int) {\n\t\tproducts(sort: "popularity:desc", limit: $limit, start: $start) {\n\t\t\t...ProductThumbnail\n\t\t}\n\t}\n\t',"\n"]);return f=function(){return data},data}function v(){var data=Object(r.a)(['\n\tquery ProductsOfCategory($id: ID!, $start: Int, $limit: Int) {\n\t\tcategory(id: $id) {\n\t\t\tproducts(sort: "popularity:desc", limit: $limit, start: $start) {\n\t\t\t\t...ProductThumbnail\n\t\t\t}\n\t\t}\n\t}\n\t',"\n"]);return v=function(){return data},data}function m(){var data=Object(r.a)(['\n\tquery NewProducts($start: Int, $timestamp: Float, $limit: Int) {\n\t\tproducts(\n\t\t\tsort: "timestamp:desc"\n\t\t\twhere: { timestamp_gte: $timestamp }\n\t\t\tlimit: $limit\n\t\t\tstart: $start\n\t\t) {\n\t\t\t...ProductThumbnail\n\t\t}\n\t}\n\t',"\n"]);return m=function(){return data},data}function h(){var data=Object(r.a)(['\n\tquery AvailableProducts($start: Int, $limit: Int) {\n\t\tproducts(\n\t\t\tsort: "popularity:desc"\n\t\t\twhere: { isAvailable: true }\n\t\t\tlimit: $limit\n\t\t\tstart: $start\n\t\t) {\n\t\t\t...ProductThumbnail\n\t\t}\n\t}\n\t',"\n"]);return h=function(){return data},data}function w(){var data=Object(r.a)(["\n\tfragment FullProductFragment on Products {\n\t\tthumbnail {\n\t\t\turl\n\t\t}\n\t\tslides {\n\t\t\turl\n\t\t\tformats\n\t\t}\n\t\ttitle\n\t\tnumber\n\t\tdescription\n\t\ttable\n\t\tshopLink\n\t\tisAvailable\n\t}\n"]);return w=function(){return data},data}function y(){var data=Object(r.a)(["\n\tfragment ProductThumbnail on Products {\n\t\tid\n\t\ttitle\n\t\tisAvailable\n\t\tviews\n\t\ttimestamp\n\t\tthumbnail {\n\t\t\turl\n\t\t\tformats\n\t\t}\n\t}\n"]);return y=function(){return data},data}function k(){var data=Object(r.a)(["\n\tquery Count($weekAgo: Float, $lastVisit: Float) {\n\t\tsinceLastWeek: productsConnection(where: { timestamp_gte: $weekAgo }) {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t\tsinceLastVisit: productsConnection(where: { timestamp_gte: $lastVisit }) {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t\tavailable: productsConnection(where: { isAvailable: true }) {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t\tother: productsConnection(where: { category_null: true }) {\n\t\t\taggregate {\n\t\t\t\tcount\n\t\t\t}\n\t\t}\n\t}\n"]);return k=function(){return data},data}function x(){var data=Object(r.a)(["\n\t{\n\t\tcategories {\n\t\t\tid\n\t\t\tname\n\t\t\tuid\n\t\t}\n\t}\n"]);return x=function(){return data},data}var _=Object(o.gql)(x()),$=Object(o.gql)(k()),P=Object(o.gql)(y()),O=Object(o.gql)(w()),S=Object(o.gql)(h(),P),A=Object(o.gql)(m(),P),j=Object(o.gql)(v(),P),C=Object(o.gql)(f(),P),E=Object(o.gql)(d(),P),T=Object(o.gql)(c(),O),N=Object(o.gql)(l(),P)},180:function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("127d211d",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("3a9b1762",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("37b95c6f",content,!0,{sourceMap:!1})},184:function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("7220c2cc",content,!0,{sourceMap:!1})},201:function(t,e,n){"use strict";n.r(e);n(29),n(31),n(53);var r=n(1),o=n(43),l=n.n(o),c=n(144),d=n(42),f={x:0,y:0,timestamp:0},v=r.default.extend({name:"SwipeAndScroll",props:{directions:{type:Array,default:function(){return["up","down","left","right"]}}},data:function(){return{isAllowedDown:!1,isAllowedUp:!1,debouncedHandleScroll:function(){},debouncedHandleTouchMove:function(t){},debouncedTriggerSwipe:function(t){},debAllowUp:function(){},debAllowDown:function(){}}},computed:{parent:function(){return Object(c.a)(this.$el,{overflowY:["scroll","auto"]})},prevRouteTitle:function(){var t=this.$route.query.prevRoute,title="Home";return"string"==typeof t&&d.c[t]&&(title=d.c[t]),title},verticalPadding:function(){return this.$store.state.swipeVerticalPadding}},mounted:function(){var t;this.debouncedHandleScroll=l()(this.handleScrollingEnd,100),this.debouncedHandleTouchMove=l()(this.touchmove,50,{maxWait:50}),this.debouncedTriggerSwipe=l()(this.triggerSwipe,500,{leading:!0,trailing:!1}),this.debAllowUp=l()(this.allowUp,80,{maxWait:80}),this.debAllowDown=l()(this.allowDown,200,{maxWait:200}),(null!==(t=this.parent)&&void 0!==t?t:window).addEventListener("scroll",this.debouncedHandleScroll)},beforeDestroy:function(){var t;(null!==(t=this.parent)&&void 0!==t?t:window).removeEventListener("scroll",this.debouncedHandleScroll)},methods:{getFromTop:function(){var t,e=this.parent;return null!==(t=null==e?void 0:e.scrollTop)&&void 0!==t?t:window.scrollY},getFromBottom:function(){return this.getScrollHeight()-this.getFromTop()-this.getFrameHeight()},getScrollHeight:function(){var t,e=this.parent,n=this.$el;return null!==(t=null==e?void 0:e.scrollHeight)&&void 0!==t?t:n.clientHeight},getFrameHeight:function(){var t,e=this.parent;return null!==(t=null==e?void 0:e.clientHeight)&&void 0!==t?t:window.innerHeight},triggerSwipe:function(t){this.$emit("swipe",t)},handleScrollingEnd:function(){this.checkVerticalSwipe(),this.isAllowedDown=!1,this.isAllowedUp=!1},touchStart:function(t){this.isAllowedDown=!0;var e=t.timeStamp,n=t.touches[0]||[0,0],r=n.clientX,o=n.clientY;f={x:r,y:o,timestamp:e},this.allowUp()},allowUp:function(){this.getFromBottom()<5&&(this.isAllowedUp=!0)},allowDown:function(){this.isAllowedDown=!0},touchmove:function(t){var e=this.debouncedTriggerSwipe,n=t.timeStamp,r=t.touches[0]||[0,0],o=r.clientX,l=r.clientY,c=(o-f.x)/(n-f.timestamp),d=(l-f.y)/(n-f.timestamp);f={x:o,y:l,timestamp:n},(Math.abs(c)>1||Math.abs(d)>1)&&(Math.abs(c)/Math.abs(d)>=2?e(c<0?"left":"right"):this.isAllowedUp&&d<-2&&Math.abs(d)/Math.abs(c)>=2&&e("up"))},touchend:function(){var t=this;setTimeout((function(){t.isAllowedDown=!1,t.isAllowedUp=!1}),100)},wheel:function(t){var e=t.deltaY,n=this.getFromBottom(),r=this.getFromTop(),o=this.isAllowedUp,l=this.isAllowedDown,c=this.verticalPadding;n<=20&&e>0?o?this.triggerSwipe("up"):this.debAllowUp():this.isAllowedUp=!1,r<=c+10&&e<0?l||this.debAllowDown():this.isAllowedDown=!1},checkVerticalSwipe:function(){var t=this.directions,e=this.isAllowedDown,n=this.parent,r=this.verticalPadding,o=this.getFromTop();if(e&&t.includes("down")&&o<5)this.debouncedTriggerSwipe("down");else{var l=-1;t.includes("down")&&o<r&&(l=r),-1!==l&&(null!=n?n:window).scrollTo({top:l,behavior:"smooth"})}}}}),m=(n(259),n(13)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swipe-and-scroll outer-wrapper",class:t.directions,on:{touchstart:t.touchStart,touchmove:t.debouncedHandleTouchMove,touchend:t.touchend,wheel:t.wheel}},[n("div",{staticClass:"inner-wrapper"},[t._t("default")],2),t._v(" "),t.directions.includes("down")?n("div",{staticClass:"swipe-space swipe-space--top"},[n("p",[t._v("\n\t\t\t"+t._s(t.prevRouteTitle)+"\n\t\t")])]):t._e(),t._v(" "),n("GlobalEvents",{on:{scroll:t.debouncedHandleScroll}})],1)}),[],!1,null,"2d211512",null);e.default=component.exports},202:function(t,e,n){"use strict";n.r(e);n(30),n(181),n(14),n(38);var r=n(1).default.extend({name:"MainNav",props:{newProducts:{type:Number,default:0},areNew:{type:Boolean,default:!1}},computed:{routeName:function(){var t;return(null===(t=this.$route.name)||void 0===t?void 0:t.split("___")[0])||"index"}}}),o=(n(263),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"main-nav",class:t.routeName},[n("div",{staticClass:"middle-button"},[n("button",[t._v(t._s(t.$t("contact")))])]),t._v(" "),n("NavLink",{key:"home",attrs:{name:"home",to:"/",icon:"home"}},[t._v(t._s(t.$t("pages.home")))]),t._v(" "),n("NavLink",{key:"lamps",attrs:{name:"lamps",to:"/lamps",icon:"lightbulb"}},[t._v(t._s(t.$t("pages.lamps")))]),t._v(" "),n("NavLink",{key:"belt-bags",attrs:{name:"belt-bags",to:"/belt-bags",icon:"shopping-bag"}},[t._v(t._s(t.$t("pages.belt-bags")))]),t._v(" "),n("NavLink",{key:"paintings",attrs:{name:"paintings",to:"paintings",icon:"image"}},[t._v(t._s(t.$t("pages.paintings")))]),t._v(" "),t.areNew?n("NavLink",{key:"gallery",attrs:{name:"gallery",to:{name:"gallery",query:{filter:"new"}},icon:"grip-vertical"}},[t._v(t._s(t.$t("pages.gallery"))+"\n\t\t"),n("span",{staticClass:"new-icon"})]):n("NavLink",{key:"gallery",attrs:{name:"gallery",to:"/gallery",icon:"grip-vertical"}},[t._v(t._s(t.$t("pages.gallery")))])],1)}),[],!1,null,"475ebaf0",null);e.default=component.exports;installComponents(component,{NavLink:n(320).default})},210:function(t,e,n){"use strict";var r=n(1).default.extend({name:"DefaultLayout",head:function(){return this.$nuxtI18nHead({addSeoAttributes:!0,addDirAttribute:!0})}}),o=n(13),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},211:function(t,e,n){"use strict";n(14),n(38);var r=n(1).default.extend({name:"GalleryLayout",head:function(){return this.$nuxtI18nHead({addSeoAttributes:!0,addDirAttribute:!0})},methods:{swipe:function(t){if("down"===t){var e=this.$route.query.prevRoute,n="string"==typeof e?this.localePath(null==e?void 0:e.split("___")[0]):this.localePath("/");this.$router.push(n)}}}}),o=n(13),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("SwipeAndScroll",{attrs:{directions:["down"]},on:{swipe:this.swipe}},[e("Nuxt",{staticClass:"page"})],1),this._v(" "),e("MainNav")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{SwipeAndScroll:n(201).default,MainNav:n(202).default})},212:function(t,e,n){"use strict";n(30),n(14),n(38);var r=n(1),o=n(42),l=r.default.extend({name:"TopPageLayout",head:function(){return this.$nuxtI18nHead({addSeoAttributes:!0,addDirAttribute:!0})},computed:{newProductsCount:function(){return this.$store.state.newProductsCount},areNewProducts:function(){return this.$store.state.areNewProducts},pageIndex:function(){var t,e=(null===(t=this.$route.name)||void 0===t?void 0:t.split("___")[0])||"index";return e?o.b[e]:null}},methods:{swipe:function(t){var e=this.pageIndex;if(null!==e){var path={};"up"===t?path={name:"gallery"}:"left"===t&&o.b[e+1]?path={name:o.b[e+1]}:"right"===t&&o.b[e-1]&&(path={name:o.b[e-1]}),path&&this.$router.push(this.localePath(path))}}}}),c=(n(267),n(13)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("SwipeAndScroll",{attrs:{directions:["up","left","right"]},on:{swipe:t.swipe}},[n("Nuxt",{staticClass:"page"})],1),t._v(" "),n("MainNav",{attrs:{"new-products":t.newProductsCount,"are-new":t.areNewProducts}}),t._v(" "),t.newProductsCount>0?n("div",{staticClass:"new-products-notification"},[n("p",[t._v("Nowe produkty: +"+t._s(t.newProductsCount))])]):t._e()],1)}),[],!1,null,"3f43003a",null);e.a=component.exports;installComponents(component,{SwipeAndScroll:n(201).default,MainNav:n(202).default})},220:function(t,e,n){n(221),t.exports=n(222)},255:function(t,e,n){var content=n(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("a68e98b6",content,!0,{sourceMap:!1})},256:function(t,e,n){(e=n(32)(!1)).push([t.i,'@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}html{font-family:"Poppins",sans-serif;font-style:normal;color:#121214;font-size:13px;width:100%;overflow:auto}body,html{height:100%}body{margin:0;background-color:#fffdfa;color:#121214}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}::-moz-selection{background-color:rgba(95,75,255,.8);color:#fffdfa}::selection{background-color:rgba(95,75,255,.8);color:#fffdfa}*,:after,:before{margin:0;padding:0;box-sizing:border-box}',""]),t.exports=e},257:function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("38c04cc5",content,!0,{sourceMap:!1})},258:function(t,e,n){(e=n(32)(!1)).push([t.i,'@-webkit-keyframes shimmer{to{transform:translateX(100%)}}@keyframes shimmer{to{transform:translateX(100%)}}.pill{--color:#292829;border-radius:200px;height:34px;width:auto;padding:0 10px;background-color:#fffdfa;border:2px solid var(--color);color:var(--color);display:flex;align-items:center}.pill.secondary{--color:#ff5f4b}.pill.primary{--color:#5f4bff}.pill.selected{background-color:var(--color);color:#fffdfa}.pill .icon:not(.alone),.pill svg:not(.alone){margin-right:8px}.pill .text,.pill p{margin:0}.pill--loading{width:89.009416px;position:relative;overflow:hidden;border:none;filter:blur(.3px);background-color:#e2dfdd}.pill--loading>*{opacity:0}.pill--loading:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,rgba(255,253,250,0),rgba(255,253,250,.2) 20%,rgba(255,253,250,.5) 50%,rgba(255,253,250,.2) 80%,rgba(255,253,250,0));transform:translateX(-100%);-webkit-animation:shimmer 3s infinite;animation:shimmer 3s infinite}.disable-scroll{overflow:hidden!important}:root{--nav-height:70px}.page{min-height:100vh;overflow:hidden;--page-margin:calc(var(--space-size)*6);padding-bottom:calc(var(--page-margin) + 70px)}.layout{height:100vh;overflow-y:auto}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-to{opacity:0}.swipe-left-enter-active,.swipe-left-leave-active,.swipe-right-enter-active,.swipe-right-leave-active{transition:opacity .3s,transform .3s}.swipe-left-enter,.swipe-left-leave-to,.swipe-right-enter,.swipe-right-leave-to{opacity:0}.swipe-right-enter{transform:translateX(-4rem)}.swipe-left-enter,.swipe-right-leave-to{transform:translateX(4rem)}.swipe-left-leave-to{transform:translateX(-4rem)}.layout-enter-active,.layout-leave-active{transition:opacity .2s}.layout-enter-active .page,.layout-leave-active .page{transition:transform .2s}.layout-enter,.layout-leave-to{opacity:0}.layout-enter .page:not(.gallery),.layout-leave-to .page:not(.gallery){transform:translateY(-4rem)}.layout-enter .page.gallery,.layout-leave-to .page.gallery{transform:translateY(4rem)}.fade-enter,.fade-leave-to{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter-enter{opacity:0}.fade-enter-enter-active{transition:opacity .3s}.blur-top-leave-active{transition:opacity .2s .1s,transform .3s,filter .3s}.blur-top-enter-active{transition:opacity .2s,transform .3s,filter .3s}.blur-top-enter,.blur-top-leave-to{opacity:0;transform:translateY(-30px);filter:blur(30px)}',""]),t.exports=e},259:function(t,e,n){"use strict";n(180)},260:function(t,e,n){(e=n(32)(!1)).push([t.i,"@-webkit-keyframes shimmer-data-v-2d211512{to{transform:translateX(100%)}}@keyframes shimmer-data-v-2d211512{to{transform:translateX(100%)}}.outer-wrapper[data-v-2d211512]{position:relative}.outer-wrapper.down[data-v-2d211512]{padding-top:100px}.swipe-space[data-v-2d211512]{position:absolute;left:0;right:0;height:100px;display:flex}.swipe-space--top[data-v-2d211512]{top:0;background:linear-gradient(#c5c2c0,transparent)}.swipe-space--bottom[data-v-2d211512]{bottom:0;background:linear-gradient(transparent,#c5c2c0)}.swipe-space p[data-v-2d211512]{margin:auto}.log[data-v-2d211512]{pointer-events:none;position:fixed;bottom:50%;color:#ff5f4b;font-size:1.5rem;left:10px;background-color:#fffdfa}",""]),t.exports=e},263:function(t,e,n){"use strict";n(182)},264:function(t,e,n){(e=n(32)(!1)).push([t.i,"@-webkit-keyframes shimmer-data-v-475ebaf0{to{transform:translateX(100%)}}@keyframes shimmer-data-v-475ebaf0{to{transform:translateX(100%)}}.main-nav[data-v-475ebaf0]{--link-width:20vw;position:fixed;z-index:2000;left:0;right:0;bottom:0;background:#f1eeeb}.main-nav[data-v-475ebaf0],.main-nav>*[data-v-475ebaf0]{height:var(--nav-height)}.main-nav>*[data-v-475ebaf0]{width:var(--link-width)}.new-icon[data-v-475ebaf0]{position:absolute;width:10px;height:10px;border-radius:50%;background:red}.nav-link[data-v-475ebaf0]{position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:opacity transform .2s .4s}.nav-link.home[data-v-475ebaf0]{opacity:0;pointer-events:none}.nav-link.lamps[data-v-475ebaf0]{transform:translateX(0);opacity:1;pointer-events:all}.nav-link.belt-bags[data-v-475ebaf0]{transform:translateX(var(--link-width));opacity:1;pointer-events:all}.nav-link.paintings[data-v-475ebaf0]{transform:translateX(calc(var(--link-width)*3));opacity:1;pointer-events:all}.nav-link.gallery[data-v-475ebaf0]{transform:translateX(calc(var(--link-width)*4));opacity:1;pointer-events:all}.main-nav.lamps .nav-link.home[data-v-475ebaf0]{transform:translateX(0);opacity:1;pointer-events:all}.main-nav.lamps .nav-link.lamps[data-v-475ebaf0]{opacity:0;pointer-events:none}.main-nav.belt-bags .nav-link.home[data-v-475ebaf0]{transform:translateX(0);opacity:1;pointer-events:all}.main-nav.belt-bags .nav-link.belt-bags[data-v-475ebaf0]{opacity:0;pointer-events:none}.main-nav.belt-bags .nav-link.lamps[data-v-475ebaf0]{transform:translateX(var(--link-width));opacity:1;pointer-events:all}.main-nav.paintings .nav-link.home[data-v-475ebaf0]{transform:translateX(0);opacity:1;pointer-events:all}.main-nav.paintings .nav-link.lamps[data-v-475ebaf0]{transform:translateX(var(--link-width));opacity:1;pointer-events:all}.main-nav.paintings .nav-link.belt-bags[data-v-475ebaf0]{transform:translateX(calc(var(--link-width)*3));opacity:1;pointer-events:all}.main-nav.paintings .nav-link.paintings[data-v-475ebaf0]{opacity:0;pointer-events:none}.main-nav.gallery .nav-link.home[data-v-475ebaf0]{transform:translateX(0);opacity:1;pointer-events:all}.main-nav.gallery .nav-link.lamps[data-v-475ebaf0]{transform:translateX(var(--link-width));opacity:1;pointer-events:all}.main-nav.gallery .nav-link.belt-bags[data-v-475ebaf0]{transform:translateX(calc(var(--link-width)*3));opacity:1;pointer-events:all}.main-nav.gallery .nav-link.paintings[data-v-475ebaf0]{transform:translateX(calc(var(--link-width)*4));opacity:1;pointer-events:all}.main-nav.gallery .nav-link.gallery[data-v-475ebaf0]{opacity:0;pointer-events:none}.middle-button[data-v-475ebaf0]{position:fixed;z-index:2010;right:0;bottom:0;transform:translateX(calc(var(--link-width)*-2)) translateY(calc(var(--nav-height)/-2))}.middle-button button[data-v-475ebaf0]{position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px;width:80px;height:80px;border-radius:50%;background:#5f4bff;color:#fffdfa}",""]),t.exports=e},265:function(t,e,n){"use strict";n(183)},266:function(t,e,n){(e=n(32)(!1)).push([t.i,"@-webkit-keyframes shimmer-data-v-240d6fc9{to{transform:translateX(100%)}}@keyframes shimmer-data-v-240d6fc9{to{transform:translateX(100%)}}.link-text[data-v-240d6fc9]{position:relative;line-height:70%;margin:5px 0 0}",""]),t.exports=e},267:function(t,e,n){"use strict";n(184)},268:function(t,e,n){(e=n(32)(!1)).push([t.i,"@-webkit-keyframes shimmer-data-v-3f43003a{to{transform:translateX(100%)}}@keyframes shimmer-data-v-3f43003a{to{transform:translateX(100%)}}.new-products-notification[data-v-3f43003a]{position:fixed;top:20px;left:0;right:0;display:flex;justify-content:center}",""]),t.exports=e},269:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return f})),n.d(e,"getters",(function(){return v})),n.d(e,"mutations",(function(){return m})),n.d(e,"actions",(function(){return h}));n(96),n(10),n(185),n(36),n(41);var r=n(47),o=n(187),l=n.n(o),c=n(43),d=n.n(c),f=function(){return{swipeVerticalPadding:100,newProductsCount:0,areNewProducts:!1,areAvailableProducts:!1,areOtherProducts:!1,filters:[],seenProducts:{},relatedProducts:new Set}},v={},m={setFilterCount:function(t,e){var n=e.sinceLastVisit,r=e.sinceLastWeek,o=e.countAvailable,l=e.countOther;"number"==typeof n&&(t.newProductsCount=n,t.areNewProducts=!0),"number"==typeof r&&r>0&&(t.areNewProducts=!0),"number"==typeof o&&o>0&&(t.areAvailableProducts=!0),"number"==typeof l&&l>0&&(t.areOtherProducts=!0)},setFilters:function(t,e){return t.filters=l()(e)},VIEW_PRODUCT:function(t,e){var n=t.seenProducts[e];t.seenProducts[e]="number"==typeof n?n+1:1,t.relatedProducts.add(e)},RESET_VIEWS:function(t){return t.seenProducts={}},RESET_RELATIONS:function(t){return t.relatedProducts.clear()}},h={seeProduct:function(t,e){var n=t.dispatch,r=t.commit;n("debounceEmitViews"),n("debounceEmitRelations"),r("VIEW_PRODUCT",e)},emitViews:function(t){var e=t.state,n=t.commit;this.$axios.post("".concat("https://renkidzielo.herokuapp.com","/products/view"),{entries:Object.entries(e.seenProducts)}),n("RESET_VIEWS")},debounceEmitViews:d()((function(t){return(0,t.dispatch)("emitViews")}),6e4,{maxWait:1e5}),emitRelations:function(t){var e=t.state,n=t.commit,o=e.relatedProducts;o.size>1&&this.$axios.post("".concat("https://renkidzielo.herokuapp.com","/ties/increase"),{entries:Object(r.a)(o)}),n("RESET_RELATIONS")},debounceEmitRelations:d()((function(t){return(0,t.dispatch)("emitRelations")}),1e5,{maxWait:2e5})}},273:function(t,e,n){var map={"./de":[217,0],"./de.js":[217,0],"./en":[218,1],"./en.js":[218,1],"./pl":[219,2],"./pl.js":[219,2]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=273,t.exports=r},320:function(t,e,n){"use strict";n.r(e);var r=n(1).default.extend({name:"NavLink",props:{name:{type:String,default:""},icon:{type:String,default:"image"}}}),o=(n(265),n(13)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"nav-link",class:this.name,attrs:{to:this.localePath(this.$attrs.to||"")}},[e("Icon",{staticClass:"link-icon",attrs:{icon:this.icon}}),this._v(" "),e("p",{staticClass:"link-text"},[this._t("default")],2)],1)}),[],!1,null,"240d6fc9",null);e.default=component.exports},42:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return f}));n(30);var r,o,l=n(76);!function(t){t[t.index=0]="index",t[t.lamps=1]="lamps",t[t["belt-bags"]=2]="belt-bags",t[t.paintings=3]="paintings"}(r||(r={})),function(t){t.index="Home",t.lamps="Lampy",t["belt-bags"]="Saszetki",t.paintings="Obrazy"}(o||(o={}));var c=function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"black",d=arguments.length>5&&void 0!==arguments[5]&&arguments[5];Object(l.a)(this,t),this.id=r,this.uid=n,this.name=e,this.icon=o,this.color=c,this.isSpecial=d},d=function t(e,path,title,n){Object(l.a)(this,t),this.name=e,this.path=path,this.title=title,this.icon=n},f=[new d("index","/","Home","home"),new d("lamps","/lamps","Lampy","lightbulb"),new d("belt-bags","/belt-bags","Saszetki","shopping-bag"),new d("paintings","/paintings","Obrazy","image"),new d("gallery","/gallery","Galeria","grip-vertical")]}},[[220,12,5,13]]]);