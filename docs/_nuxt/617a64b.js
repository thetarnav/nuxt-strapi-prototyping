(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{321:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g,l="RFC1738",c="RFC3986";e.exports={default:c,formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return String(e)}},RFC1738:l,RFC3986:c}},322:function(e,t,r){"use strict";var o=r(321),n=Object.prototype.hasOwnProperty,l=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),f=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:f,assign:function(e,source){return Object.keys(source).reduce((function(e,t){return e[t]=source[t],e}),e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var o=t[i],n=o.obj[o.prop],c=Object.keys(n),f=0;f<c.length;++f){var d=c[f],y=n[d];"object"==typeof y&&null!==y&&-1===r.indexOf(y)&&(t.push({obj:n,prop:d}),r.push(y))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(l(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r,n,l){if(0===e.length)return e;var f=e;if("symbol"==typeof e?f=Symbol.prototype.toString.call(e):"string"!=typeof e&&(f=String(e)),"iso-8859-1"===r)return escape(f).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var d="",i=0;i<f.length;++i){var y=f.charCodeAt(i);45===y||46===y||95===y||126===y||y>=48&&y<=57||y>=65&&y<=90||y>=97&&y<=122||l===o.RFC1738&&(40===y||41===y)?d+=f.charAt(i):y<128?d+=c[y]:y<2048?d+=c[192|y>>6]+c[128|63&y]:y<55296||y>=57344?d+=c[224|y>>12]+c[128|y>>6&63]+c[128|63&y]:(i+=1,y=65536+((1023&y)<<10|1023&f.charCodeAt(i)),d+=c[240|y>>18]+c[128|y>>12&63]+c[128|y>>6&63]+c[128|63&y])}return d},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(l(e)){for(var r=[],i=0;i<e.length;i+=1)r.push(t(e[i]));return r}return t(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(l(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var o=t;return l(t)&&!l(source)&&(o=f(t,r)),l(t)&&l(source)?(source.forEach((function(o,i){if(n.call(t,i)){var l=t[i];l&&"object"==typeof l&&o&&"object"==typeof o?t[i]=e(l,o,r):t.push(o)}else t[i]=o})),t):Object.keys(source).reduce((function(t,o){var l=source[o];return n.call(t,o)?t[o]=e(t[o],l,r):t[o]=l,t}),o)}}},323:function(e,t,r){"use strict";var o=r(324),n=r(325),l=r(321);e.exports={formats:l,parse:n,stringify:o}},324:function(e,t,r){"use strict";var o=r(322),n=r(321),l=Object.prototype.hasOwnProperty,c={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,y=function(e,t){d.apply(e,f(t)?t:[t])},m=Date.prototype.toISOString,h=n.default,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:h,formatter:n.formatters[h],indices:!1,serializeDate:function(e){return m.call(e)},skipNulls:!1,strictNullHandling:!1},j=function e(object,t,r,n,l,c,filter,d,m,h,j,O,w,x){var P,k=object;if("function"==typeof filter?k=filter(t,k):k instanceof Date?k=h(k):"comma"===r&&f(k)&&(k=o.maybeMap(k,(function(e){return e instanceof Date?h(e):e}))),null===k){if(n)return c&&!w?c(t,v.encoder,x,"key",j):t;k=""}if("string"==typeof(P=k)||"number"==typeof P||"boolean"==typeof P||"symbol"==typeof P||"bigint"==typeof P||o.isBuffer(k))return c?[O(w?t:c(t,v.encoder,x,"key",j))+"="+O(c(k,v.encoder,x,"value",j))]:[O(t)+"="+O(String(k))];var N,S=[];if(void 0===k)return S;if("comma"===r&&f(k))N=[{value:k.length>0?k.join(",")||null:void 0}];else if(f(filter))N=filter;else{var D=Object.keys(k);N=d?D.sort(d):D}for(var i=0;i<N.length;++i){var _=N[i],C="object"==typeof _&&void 0!==_.value?_.value:k[_];if(!l||null!==C){var E=f(k)?"function"==typeof r?r(t,_):t:t+(m?"."+_:"["+_+"]");y(S,e(C,E,r,n,l,c,filter,d,m,h,j,O,w,x))}}return S};e.exports=function(object,e){var t,r=object,o=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!l.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],filter=v.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,format:r,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof o.filter?r=(0,o.filter)("",r):f(o.filter)&&(t=o.filter);var d,m=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in c?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var h=c[d];t||(t=Object.keys(r)),o.sort&&t.sort(o.sort);for(var i=0;i<t.length;++i){var O=t[i];o.skipNulls&&null===r[O]||y(m,j(r[O],O,h,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.format,o.formatter,o.encodeValuesOnly,o.charset))}var w=m.join(o.delimiter),x=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?x+="utf8=%26%2310003%3B&":x+="utf8=%E2%9C%93&"),w.length>0?x+w:""}},325:function(e,t,r){"use strict";var o=r(322),n=Object.prototype.hasOwnProperty,l=Array.isArray,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},f=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},d=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},y=function(e,t,r,o){if(e){var l=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,f=r.depth>0&&/(\[[^[\]]*])/.exec(l),y=f?l.slice(0,f.index):l,m=[];if(y){if(!r.plainObjects&&n.call(Object.prototype,y)&&!r.allowPrototypes)return;m.push(y)}for(var i=0;r.depth>0&&null!==(f=c.exec(l))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,f[1].slice(1,-1))&&!r.allowPrototypes)return;m.push(f[1])}return f&&m.push("["+l.slice(f.index)+"]"),function(e,t,r,o){for(var n=o?t:d(t,r),i=e.length-1;i>=0;--i){var l,c=e[i];if("[]"===c&&r.parseArrays)l=[].concat(n);else{l=r.plainObjects?Object.create(null):{};var f="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,y=parseInt(f,10);r.parseArrays||""!==f?!isNaN(y)&&c!==f&&String(y)===f&&y>=0&&r.parseArrays&&y<=r.arrayLimit?(l=[])[y]=n:l[f]=n:l={0:n}}n=l}return n}(m,t,r,o)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var m="string"==typeof e?function(e,t){var i,r={},y=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,m=t.parameterLimit===1/0?void 0:t.parameterLimit,h=y.split(t.delimiter,m),v=-1,j=t.charset;if(t.charsetSentinel)for(i=0;i<h.length;++i)0===h[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[i]?j="utf-8":"utf8=%26%2310003%3B"===h[i]&&(j="iso-8859-1"),v=i,i=h.length);for(i=0;i<h.length;++i)if(i!==v){var O,w,x=h[i],P=x.indexOf("]="),k=-1===P?x.indexOf("="):P+1;-1===k?(O=t.decoder(x,c.decoder,j,"key"),w=t.strictNullHandling?null:""):(O=t.decoder(x.slice(0,k),c.decoder,j,"key"),w=o.maybeMap(d(x.slice(k+1),t),(function(e){return t.decoder(e,c.decoder,j,"value")}))),w&&t.interpretNumericEntities&&"iso-8859-1"===j&&(w=f(w)),x.indexOf("[]=")>-1&&(w=l(w)?[w]:w),n.call(r,O)?r[O]=o.combine(r[O],w):r[O]=w}return r}(e,r):e,h=r.plainObjects?Object.create(null):{},v=Object.keys(m),i=0;i<v.length;++i){var j=v[i],O=y(j,m[j],r,"string"==typeof e);h=o.merge(h,O,r)}return o.compact(h)}},326:function(e,t,r){"use strict";r(37),r(81),r(29),r(30),r(10),r(14),r(64),r(31),r(38);var o=r(16),n=r(1),l=r(323),c=r.n(l),f=r(144),d=r(42);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=!1;t.a=n.default.extend({beforeRouteEnter:function(e,t,r){var o;(null===(o=t.name)||void 0===o?void 0:o.includes("gallery"))&&t.query.prevRoute===e.name&&"string"==typeof t.query.scroll?e.params.scroll=t.query.scroll:e.params.scroll="",r()},beforeRouteLeave:function(e,t,r){var o,n;if((null===(o=e.name)||void 0===o?void 0:o.includes("gallery"))&&e.query.prevRoute!==t.name){var l=Object(f.a)(this.$el,{overflowY:["scroll","auto"]}),d=t.name||"index",y=null==d?void 0:d.split("___")[0],filter=null!==(n=e.query.filter)&&void 0!==n?n:"index"!==y?y:void 0,h=Math.round((null==l?void 0:l.scrollTop)||window.scrollY).toString(),v=c.a.stringify(m(m({},e.query),{},{prevRoute:d,filter:filter,scroll:h}));r(this.localePath("/gallery/".concat(e.params.productId||"","?").concat(v)))}else r()},layout:"topPageLayout",scrollToTop:!1,transition:function(e,t){var r,o;return{name:(d.b[(null===(r=null==e?void 0:e.name)||void 0===r?void 0:r.split("___")[0])||"index"]||0)<(d.b[(null===(o=null==t?void 0:t.name)||void 0===o?void 0:o.split("___")[0])||"index"]||0)?"swipe-right":"swipe-left"}},mounted:function(){h=!1,this.scrollToPrevPos()},methods:{scrollToPrevPos:function(){if(!h){var e=this.$route.params,t=Object(f.a)(this.$el,{overflowY:["scroll","auto"]})||window;if(e.scroll){var r=Math.min(parseInt(e.scroll),this.$el.scrollHeight-window.innerHeight);t.scrollTo({top:r}),e.scroll=""}else t.scrollTo({top:0});h=!0}}}})},327:function(e,t,r){var content=r(334);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(33).default)("19f0ee3a",content,!0,{sourceMap:!1})},333:function(e,t,r){"use strict";r(327)},334:function(e,t,r){(t=r(32)(!1)).push([e.i,'@-webkit-keyframes shimmer-data-v-6c336cf8{to{transform:translateX(100%)}}@keyframes shimmer-data-v-6c336cf8{to{transform:translateX(100%)}}.banner[data-v-6c336cf8]{z-index:-1;top:0;width:100%;height:30rem;background-size:cover;background-position-x:center}.banner[data-v-6c336cf8],.banner[data-v-6c336cf8]:after{position:absolute;left:0}.banner[data-v-6c336cf8]:after{content:"";right:0;bottom:0;height:70%;background:linear-gradient(transparent,#fffdfa)}.project-name[data-v-6c336cf8]{margin-top:24rem;color:#121214;text-align:center}.promo-photo[data-v-6c336cf8]{width:100%;height:calc(125vw - var(--space-size)*6*2)}',""]),e.exports=t},348:function(e,t,r){"use strict";r.r(t);var o=r(326).a.extend({name:"Home",head:function(){return{title:"Renkidzieło"}}}),n=(r(333),r(13)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page home px-6"},[r("figure",{directives:[{name:"lazy-background",rawName:"v-lazy-background"}],staticClass:"banner",attrs:{"lazy-background":"img/picek.jpg"}}),e._v(" "),r("h1",{staticClass:"project-name"},[e._v("Renkidzieło")]),e._v(" "),r("span",{staticClass:"project-logo icon subtitle u-center",staticStyle:{"font-size":"28px"}},[r("Icon",{attrs:{icon:"image"}})],1),e._v(" "),r("p",[e._v("\n\t\t"+e._s(e.$t("home.about"))+"\n\t")]),e._v(" "),r("p",[e._v(e._s(e.$t("home.cta.incentive")))]),e._v(" "),r("nuxt-link",{staticClass:"btn btn-primary btn-large u-center",attrs:{to:e.localePath({name:"gallery",query:{filter:"available"}})}},[e._v(e._s(e.$t("home.cta.button")))]),e._v(" "),r("div",{staticClass:"mt-20"},[r("nuxt-link",{attrs:{to:e.localePath("/gallery/6021bd9be541ac0015845c94")}},[r("img",{staticClass:"promo-photo cover-img",attrs:{src:"img/lampofon.jpg",alt:e.$t("home.heroImgAlt")}})])],1)],1)}),[],!1,null,"6c336cf8",null);t.default=component.exports}}]);