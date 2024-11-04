import { S as S$1, s as s$2, t as g$1, y as s$3 } from './main-CHt_w1XH.js';
import { s as s$1 } from './associatedFeatureServiceUtils-CLgOx703.js';
import { t as t$1, a as a$1 } from './lazyLayerLoader-DAvwelo1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class e{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map;}async fetchServiceMetadata(e,a){const s=this._serviceMetadatas.get(e);if(s)return s;const r=await t$1(e,a);return this._serviceMetadatas.set(e,r),r}async fetchItemData(t){const{id:e}=t;if(!e)return null;const{_itemDatas:a}=this;if(a.has(e))return a.get(e);const s=await t.fetchData();return a.set(e,s),s}async fetchCustomParameters(t,e){const a=await this.fetchItemData(t);return a&&"object"==typeof a&&(e?e(a):a.customParameters)||null}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(e){const t={id:e.id,name:e.name};return "Oriented Imagery Layer"===e.type&&(t.layerType="OrientedImageryLayer"),t}async function a(e,a,r){if(null==e?.layers||null==e?.tables){const s=await r.fetchServiceMetadata(a,{customParameters:l(e)?.customParameters});(e=e||{}).layers=e.layers||s?.layers?.map(t),e.tables=e.tables||s?.tables?.map(t);}return e}function r(e){const{layers:t,tables:a}=e;return t?.length?t[0].id:a?.length?a[0].id:null}function l(e){if(!e)return null;const{layers:t,tables:a}=e;return t?.length?t[0]:a?.length?a[0]:null}function s(e){return (e?.layers?.length??0)+(e?.tables?.length??0)}function n(e){const t=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&t.push(e.id);})),t}function u(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}function i(e){return e?.layers?.filter((({layerType:e})=>"CatalogLayer"===e)).map((({id:e})=>e))}async function c(a,r,s){if(!a?.url)return r??{};if(r??={},!r.layers){const e=await s.fetchServiceMetadata(a.url);r.layers=e.layers?.map(t);}const{serverUrl:n,portalItem:u}=await s$1(a.url,{sceneLayerItem:a,customParameters:l(r)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return r.tables=[],r;if(!r.tables&&u){const e=await u.fetchData();if(e?.tables)r.tables=e.tables.map(t);else {const a=await s.fetchServiceMetadata(n,{customParameters:l(e)?.customParameters});r.tables=a?.tables?.map(t);}}if(r.tables)for(const e of r.tables)e.url=`${n}/${e.id}`;return r}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function d(e){!e.portalItem||e.portalItem instanceof S$1||(e={...e,portalItem:new S$1(e.portalItem)});const a=await L(e.portalItem);return new(a.constructor)({portalItem:e.portalItem,...a.properties})}async function L(e$1){await e$1.load();const a=new e;return N(await w(e$1,a))}async function w(a,r){switch(a.type){case"3DTiles Service":return C();case"CSV":return P();case"Feature Collection":return M(a);case"Feature Service":return I(a,r);case"Feed":return U();case"GeoJson":return j();case"Group Layer":return V();case"Image Service":return h(a,r);case"KML":return F();case"Map Service":return S(a,r);case"Media Layer":return W();case"Scene Service":return v(a,r);case"Stream Service":return g();case"Vector Tile Service":return T();case"WFS":return G();case"WMS":return b();case"WMTS":return O();default:throw new s$2("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type})}}async function N(e){const a=e.className,r=a$1[a];return {constructor:await r(),properties:e.properties}}async function S(e,a){return await D(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function I(e,a){const r=await J(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return {className:"GroupLayer"}}async function v(e,r){const s=await J(e,r,(async()=>{try{if(!e.url)return [];const{serverUrl:t}=await s$1(e.url,{sceneLayerItem:e}),s=await r.fetchServiceMetadata(t);return s?.tables??[]}catch{return []}}));if("object"==typeof s){const a={};let c;if(null!=s.id?(a.layerId=s.id,c=`${e.url}/layers/${s.id}`):c=e.url,e.typeKeywords?.length)for(const r of Object.keys(g$1))if(e.typeKeywords.includes(r))return {className:g$1[r]};const i=await r.fetchServiceMetadata(c,{customParameters:await r.fetchCustomParameters(e,(e=>l(e)?.customParameters))});return {className:g$1[i?.layerType]||"SceneLayer",properties:a}}if(!1===s){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===a?.layerType)return {className:"VoxelLayer"}}return {className:"GroupLayer"}}async function M(e){await e.load();const a=s$3(e,"Map Notes"),r=s$3(e,"Markup");if(a||r)return {className:"MapNotesLayer"};if(s$3(e,"Route Layer"))return {className:"RouteLayer"};const t=await e.fetchData();return 1===s(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function h(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return {className:"ElevationLayer"};if(r.includes("tiled imagery"))return {className:"ImageryTileLayer"};const t=await a.fetchItemData(e),s=t?.layerType;if("ArcGISTiledImageServiceLayer"===s)return {className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return {className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),n=c.cacheType?.toLowerCase(),i=c.capabilities?.toLowerCase().includes("tilesonly");return "map"===n||i?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function g(){return {className:"StreamLayer"}}function T(){return {className:"VectorTileLayer"}}function j(){return {className:"GeoJSONLayer"}}function C(){return {className:"IntegratedMesh3DTilesLayer"}}function P(){return {className:"CSVLayer"}}function F(){return {className:"KMLLayer"}}function G(){return {className:"WFSLayer"}}function b(){return {className:"WMSLayer"}}function O(){return {className:"WMTSLayer"}}function U(){return {className:"StreamLayer"}}function V(){return {className:"GroupLayer"}}function W(){return {className:"MediaLayer"}}async function D(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}async function J(e,a$1,r){const{url:t,type:s$1}=e,c$1="Feature Service"===s$1;if(!t)return {};if(/\/\d+$/.test(t)){if(c$1){const r=await a$1.fetchServiceMetadata(t,{customParameters:await a$1.fetchCustomParameters(e,(e=>l(e)?.customParameters))});if("Oriented Imagery Layer"===r.type)return {id:r.id,className:"OrientedImageryLayer",sourceJSON:r}}return {}}await e.load();let f=await a$1.fetchItemData(e);if(c$1){const e=await a(f,t,a$1),r=K(e);if("object"==typeof r){const a=n(e),t=u(e),s=i(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&t?.includes(r.id)?"OrientedImageryLayer":null!=r.id&&s?.includes(r.id)?"CatalogLayer":"FeatureLayer";}return r}"Scene Service"===s$1&&(f=await c(e,f,a$1));if(s(f)>0)return K(f);const p=await a$1.fetchServiceMetadata(t);return r&&(p.tables=await r()),K(p)}function K(e){return 1===s(e)&&{id:r(e)}}

const portalLayers = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	fromItem: d,
	selectLayerClassPath: w
}, Symbol.toStringTag, { value: 'Module' }));

export { a, c, e, i, l, n, portalLayers as p, r, s, t, u, w };
