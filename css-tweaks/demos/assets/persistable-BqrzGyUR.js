import { ed as d, ee as o, ef as p, eg as m, eh as R, ei as n, ej as Y, ek as g, el as Z, em as v, s, en as x$1, dS as n$1, aA as V$1, eo as it, aB as Ht, ep as w$1 } from './main-CHt_w1XH.js';
import { i } from './multiOriginJSONSupportUtils-Dlz6FGm5.js';
import { p as p$1 } from './resourceExtension-WIVcf82m.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function j(t){const r=t?.origins??[void 0];return (e,o)=>{const s=U(t,e,o);for(const t of r){const r=d(e,t,o);for(const t in s)r[t]=s[t];}}}function U(t,r,e){if("resource"===t?.type)return w(t,r,e);switch(t?.type??"other"){case"other":return {read:!0,write:!0};case"url":{const{read:t,write:r}=w$1;return {read:t,write:r}}}}function w(t,r,n$1){const i$1=o(r,n$1);return {type:String,read:(t,r,e)=>{const o=p(t,r,e);return i$1.type===String?o:"function"==typeof i$1.type?new i$1.type({url:o}):void 0},write:{writer(r,p,c,u){if(!u?.resources)return "string"==typeof r?void(p[c]=m(r,u)):void(p[c]=r.write({},u));const l=x(r),m$1=m(l,{...u,verifyItemRelativeUrls:u?.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},R.NO),d=i$1.type!==String&&(!i(this)||u?.origin&&this.originIdOf(n$1)>n(u.origin)),h={object:this,propertyName:n$1,value:r,targetUrl:m$1,dest:p,targetPropertyName:c,context:u,params:t};u?.portalItem&&m$1&&!Y(m$1)?d&&t?.contentAddressed?I(h):d?N(h):P(h):u?.portalItem&&(null==m$1||null!=g(m$1)||Z(m$1)||d)?I(h):p[c]=m$1;}}}}function I(e){const{targetUrl:o,params:p,value:u,context:a,dest:l,targetPropertyName:d}=e;if(!a.portalItem)return;const f=v(o),y=S(u,o,a);if(p?.contentAddressed&&"json"!==y.type)return void a.messages?.push(new s("persistable:contentAddressingUnsupported",`Property "${d}" is trying to serializing a resource with content of type ${y.type} with content addressing. Content addressing is only supported for json resources.`,{content:y}));const g=p?.contentAddressed&&"json"===y.type?x$1(y.jsonString):f?.filename??n$1(),v$1=V$1(p?.prefix??f?.prefix,g),j=`${v$1}.${p$1(y)}`;if(p?.contentAddressed&&a.resources&&"json"===y.type){const t=a.resources.toKeep.find((({resource:t})=>t.path===j))??a.resources.toAdd.find((({resource:t})=>t.path===j));if(t)return void(l[d]=t.resource.itemRelativeUrl)}const U=a.portalItem.resourceFromPath(j);Z(o)&&a.resources&&a.resources.pendingOperations.push(it(o).then((t=>{U.path=`${v$1}.${p$1({type:"blob",blob:t})}`,l[d]=U.itemRelativeUrl;})).catch((()=>{})));const w=p?.compress??!1;a.resources&&b({...e,resource:U,content:y,compress:w,updates:a.resources.toAdd}),l[d]=U.itemRelativeUrl;}function N(t){const{context:r,targetUrl:e,params:o,value:s,dest:n,targetPropertyName:i}=t;if(!r.portalItem)return;const c=r.portalItem.resourceFromPath(e),u=S(s,e,r),a=p$1(u),l=Ht(c.path),d=o?.compress??!1;a===l?(r.resources&&b({...t,resource:c,content:u,compress:d,updates:r.resources.toUpdate}),n[i]=e):I(t);}function P({context:t,targetUrl:r,dest:e,targetPropertyName:o}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),e[o]=r);}function b({object:t,propertyName:r,updates:e,resource:o,content:s,compress:n}){const i=e=>{O(t,r,e);};e.push({resource:o,content:s,compress:n,finish:i});}function S(t,r,e){return "string"==typeof t?{type:"url",url:r}:{type:"json",jsonString:JSON.stringify(t.toJSON(e))}}function x(t){return null==t?null:"string"==typeof t?t:t.url}function O(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url;}

export { j };
