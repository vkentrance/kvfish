﻿(()=>{"use strict";var e,a,t,r={426921:(e,a,t)=>{var r=t(102483);window.Language=new r.default;try{stManager.done(jsc("web/language.js"))}catch(e){}},102483:(e,a,t)=>{t.d(a,{default:()=>c});t(976142),t(283946),t(59357);var r=t(442699),n=t(917685),o=t(414914),l=t(116886),s=t(719016);class c{init(){cur.languagesListSearch=new window.vkIndexer(cur.languagesList,(e=>(0,r.replaceEntities)(e.name)+" "+e.name_rus+" "+e.name_eng)),cur.destroy.push((()=>{delete cur.languagesListSearch})),(0,o.elfocus)("language_search_form")}search(e){var a=ge("all_languages_list"),t=[];t=(e=(0,r.trim)(e)).length>0?cur.languagesListSearch.search(e):cur.languagesList,window.tooltips&&tooltips.destroyAll();var n=((e,a)=>{if(e.length){var t={},n=0,o=!1,s=Math.ceil(e.length/cur.columnsNum);if(a){a+=" "+((0,l.parseLatin)(a)||"");var c=(a=(0,r.trim)((0,r.escapeRE)(a.replace(/[,]/g,"")))).replace(cur.languagesListSearch.delimiter,"|").replace(/(^\||\|$|\?)/g,"");o=new RegExp("("+c+")","gi")}(0,r.each)(e,((e,l)=>{var c=Math.floor(n/s);t["column_"+c]||(t["column_"+c]="");var i=clone(l);a&&o&&(i.name=(0,r.replaceEntities)(i.name),i.name=i.name.replace(o,'<span class="language_name_hl">$1</span>')),t["column_"+c]+=(0,r.getTemplate)("langRow",i),n++}));var i="";return(0,r.each)(t,((e,a)=>{i+=(0,r.getTemplate)("langColumn",{column:a})})),i}return""})(t,e);(0,o.toggle)("languages_not_found",!n),(0,o.toggle)(a,n),(0,o.val)(a,n)}showEngName(e){(0,s.showTooltip)(e,{text:(0,o.attr)(e,"data-eng-name"),black:1,shift:[0,0,-30]})}changeLang(e,a,t){if((0,o.hasClass)(e,"language_selected"))return!1;ajax.post("al_index.php",{act:"change_lang",lang_id:a,module:cur.module,hash:t},{onDone:function(){nav.objLoc.lang?(delete nav.objLoc.lang,nav.setLoc(nav.objLoc),nav.reload({force:!0})):nav.reload({force:!0})}})}showBetaTooltip(e,a){(0,n.cancelEvent)(a),(0,s.showTooltip)(e,{text:getLang("global_language_beta_version"),black:1,shift:[16,4,0]})}showOtherLanguages(){curBox().hide(),showBox("lang.php?act=lang_dialog",{all:1},{params:{dark:!0,bodyStyle:"padding: 0px"},noreload:!0})}}}},n={};function o(e){var a=n[e];if(void 0!==a)return a.exports;var t=n[e]={id:e,loaded:!1,exports:{}};return r[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=r,e=[],o.O=(a,t,r,n)=>{if(!t){var l=1/0;for(u=0;u<e.length;u++){for(var[t,r,n]=e[u],s=!0,c=0;c<t.length;c++)(!1&n||l>=n)&&Object.keys(o.O).every((e=>o.O[e](t[c])))?t.splice(c--,1):(s=!1,n<l&&(l=n));if(s){e.splice(u--,1);var i=r();void 0!==i&&(a=i)}}return a}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[t,r,n]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);o.r(n);var l={};a=a||[null,t({}),t([]),t(t)];for(var s=2&r&&e;"object"==typeof s&&!~a.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((a=>l[a]=()=>e[a]));return l.default=()=>e,o.d(n,l),n},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.e=()=>Promise.resolve(),o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={80908:0};o.O.j=a=>0===e[a];var a=(a,t)=>{var r,n,[l,s,c]=t,i=0;for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var u=c(o);for(a&&a(t);i<l.length;i++)n=l[i],o.o(e,n)&&e[n]&&e[n][0](),e[l[i]]=0;return o.O(u)},t=self.webpackChunkvk=self.webpackChunkvk||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var l=o.O(void 0,[68592],(()=>o(426921)));l=o.O(l)})();