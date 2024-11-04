import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { aX as e, aY as y, aZ as c, e_ as m, b1 as k, b6 as d, aI as M$1, s, aF as j, eQ as p$1, W as has, dM as o, J as s$1, g3 as c$1, eC as e$1, g4 as c$2, g5 as p$2, d_ as n, g6 as f, e2 as t, d$ as f$1, e0 as u$1, e1 as j$1, e3 as m$1, bl as f$2, C as a, g7 as p$3, g1 as g, I, g8 as p$4, fa as b, g9 as c$3, eK as f$3, dL as y$1, e5 as I$1, ga as m$2, gb as C, gc as i, e6 as c$4, gd as g$1, ge as y$2, b7 as P, gf as m$3, gg as u, gh as p$5, gi as p$6, e7 as d$1, gj as s$2, ed as b$1 } from './main-bf9b57d3.js';
import { l } from './clientSideDefaults-b53e86de.js';
import './QueryEngineCapabilities-5bb5f351.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends m{constructor(){super(...arguments),this.type="geojson",this.refresh=k((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>d.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M$1.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new s("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s$1=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s$1.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s$1.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s$1}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new s("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return null==t?null:"mesh"===t.type||"extent"===t.type?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await p$1("GeoJSONSourceWorker",{strategy:has("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,hasZ:s,geometryType:n,objectIdField:a,url:l$1,timeInfo:c,customParameters:d}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),m={url:l$1,customParameters:d,fields:t&&t.map((e=>e.toJSON())),geometryType:o.toJSON(n),hasZ:s,objectIdField:a,timeInfo:c?c.toJSON():null,spatialReference:p?null:r&&r.toJSON()},y=await this._connection.invoke("load",m,{signal:e});for(const i of y.warnings)s$1.getLogger(this.layer).warn("#load()",`$${i.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:i});y.featureErrors.length&&s$1.getLogger(this.layer).warn("#load()",`Encountered ${y.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:y.featureErrors}),this.sourceJSON=y.layerDefinition,this.capabilities=l(this.sourceJSON.hasZ,!0);}};e([y()],p.prototype,"capabilities",void 0),e([y()],p.prototype,"type",void 0),e([y({constructOnly:!0})],p.prototype,"layer",void 0),e([y()],p.prototype,"sourceJSON",void 0),p=e([c("esri.layers.graphics.sources.GeoJSONSource")],p);

const B=s$2();let _=class extends(c$1(e$1(c$2(p$2(n(f(t(f$1(u$1(j$1(m$1(b$1)))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=f$2.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson";}destroy(){this.source?.destroy();}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(a).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),p$3(this.renderer,this.fieldsIndex),g(this.timeInfo,this.fieldsIndex);}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?I(this.url):null}set renderer(e){p$3(e,this.fieldsIndex),this._set("renderer",e);}set url(e){if(!e)return void this._set("url",e);const t=I(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query});}async applyEdits(e,t){const{applyEdits:r}=await __vitePreload(() => import('./editingSupport-cc2b6f51.js'),true?["./editingSupport-cc2b6f51.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url);await this.load();const o=await r(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return p$4(this,e)}createQuery(){const e=new b,t=this.capabilities?.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:o}=this;return e.timeExtent=null!=r&&null!=o?o.offset(-r.value,r.unit):o||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}};e([y({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"capabilities",null),e([y({type:String})],_.prototype,"copyright",void 0),e([y({readOnly:!0})],_.prototype,"createQueryVersion",null),e([y(c$3("dateFieldsTimeReference"))],_.prototype,"dateFieldsTimeZone",void 0),e([y({readOnly:!0})],_.prototype,"defaultPopupTemplate",null),e([y({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],_.prototype,"definitionExpression",void 0),e([y({type:String})],_.prototype,"displayField",void 0),e([y({type:Boolean})],_.prototype,"editingEnabled",void 0),e([y(f$3)],_.prototype,"elevationInfo",void 0),e([y({type:[y$1],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],_.prototype,"fields",void 0),e([y(B.fieldsIndex)],_.prototype,"fieldsIndex",void 0),e([y({type:M$1,json:{name:"extent"}})],_.prototype,"fullExtent",void 0),e([y({type:["point","polygon","polyline","multipoint"],json:{read:{reader:o.read}}})],_.prototype,"geometryType",void 0),e([y({type:Boolean})],_.prototype,"hasZ",void 0),e([y(I$1)],_.prototype,"id",void 0),e([y({type:Boolean,readOnly:!0})],_.prototype,"isTable",null),e([y(m$2)],_.prototype,"labelsVisible",void 0),e([y({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i},write:!0}})],_.prototype,"labelingInfo",void 0),e([y(c$4)],_.prototype,"legendEnabled",void 0),e([y({type:["show","hide"]})],_.prototype,"listMode",void 0),e([y({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],_.prototype,"objectIdField",void 0),e([y(g$1)],_.prototype,"opacity",void 0),e([y({type:["GeoJSON"]})],_.prototype,"operationalLayerType",void 0),e([y({readOnly:!0})],_.prototype,"parsedUrl",null),e([y(y$2)],_.prototype,"popupEnabled",void 0),e([y({type:P,json:{name:"popupInfo",write:!0}})],_.prototype,"popupTemplate",void 0),e([y({types:m$3,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:u}}}})],_.prototype,"renderer",null),e([y(p$5)],_.prototype,"screenSizePerspectiveEnabled",void 0),e([y({readOnly:!0})],_.prototype,"source",void 0),e([y({type:f$2})],_.prototype,"spatialReference",void 0),e([y({type:[p$6]})],_.prototype,"templates",void 0),e([y()],_.prototype,"title",void 0),e([y({json:{read:!1},readOnly:!0})],_.prototype,"type",void 0),e([y(d$1)],_.prototype,"url",null),_=e([c("esri.layers.GeoJSONLayer")],_);const M=_;

export { M as default };
