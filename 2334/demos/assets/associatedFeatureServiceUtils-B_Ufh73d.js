import { p as p$1, s as s$1, S, Q, B as a, U as U$1, C as t } from './main-Bzk8b5UZ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function s(e,r){const n=p$1(e);if(!n)throw new s$1("invalid-url","Invalid scene service url");const o={...r,sceneServerUrl:n.url.path,layerId:n.sublayer??void 0};if(o.sceneLayerItem??=await l(o),null==o.sceneLayerItem)return f(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const i=await y(o);if(!i?.url)throw new s$1("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=i;const s=await f(i.url,o);return s.portalItem=i,s}async function l(e){const r=(await c(e)).serviceItemId;if(!r)return null;const t=new S({id:r,apiKey:e.apiKey}),a$1=await u(e);null!=a$1&&(t.portal=new Q({url:a$1}));try{return t.load({signal:e.signal})}catch(s){return a(s),null}}async function c(e){if(e.rootDocument)return e.rootDocument;const t={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const n=await U$1(e.sceneServerUrl,t);e.rootDocument=n.data;}catch{e.rootDocument={};}return e.rootDocument}async function u(t$1){const a$1=t?.findServerInfo(t$1.sceneServerUrl);if(a$1?.owningSystemUrl)return a$1.owningSystemUrl;const o=t$1.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const e=(await U$1(o,{query:{f:"json"},responseType:"json",signal:t$1.signal})).data.owningSystemUrl;if(e)return e}catch(i){a(i);}return null}async function f(e,n){const o=p$1(e);if(!o)throw new s$1("invalid-feature-service-url","Invalid feature service url");const i=o.url.path,s=n.layerId;if(null==s)return {serverUrl:i};const l=c(n),u=n.featureServiceItem?await n.featureServiceItem.fetchData("json"):null,f=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,y=e=>{const t={query:{f:"json",...f},responseType:"json",authMode:e,signal:n.signal};return U$1(i,t)},m=y("anonymous").catch((()=>y("no-prompt"))),[p,d]=await Promise.all([m,l]),v=d?.layers,w=p.data&&p.data.layers;if(!Array.isArray(w))throw new Error("expected layers array");if(Array.isArray(v))for(let r=0;r<Math.min(v.length,w.length);r++){if(v[r].id===s)return {serverUrl:i,layerId:w[r].id}}else if(null!=s&&s<w.length)return {serverUrl:i,layerId:w[s].id};throw new Error("could not find matching associated sublayer")}async function y({sceneLayerItem:e,signal:r}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const n=new S({portal:t.portal,id:t.id});return await n.load(),n}catch(t){return a(t),null}}

export { s };
