import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { aX as e$1, aY as y, aZ as c$1, c2 as f, dW as u$1, a4 as V, aF as j, bf as H, dE as s$1, i5 as rn, e4 as o, a_ as v, fn as C, h as u$2, U as U$1, X as a, gN as F, eB as l$1, e0 as u$3, e1 as j$2, e2 as t$1, e3 as m$1, eC as e$2, eD as i, dX as i$1, c_ as Z, gO as T, g7 as p$1, jq as n, J as s$3, C as a$1, A as t$2, fa as b, s as s$4, jr as x, a5 as c$2, g8 as p$3, aB as V$1, f7 as w, js as V$2, jt as r, G as x$1, ju as t$3, gr as t$4, gn as e$3, ag as b$1, gt as w$1, jv as t$5, jw as p$4, jx as p$5, eK as f$1, ga as m$4, gb as C$1, gc as i$3, e6 as c$3, jy as r$1, gg as u$5, ge as y$2, b7 as P$1, gh as p$6, gj as s$6, ed as b$2 } from './main-bf9b57d3.js';
import { $ as $$1 } from './Mesh-19f918d4.js';
import { i as i$2, m as m$2 } from './uploadAssetErrors-3489aae1.js';
import { L, P } from './SceneService-6ea54b27.js';
import { m, s as s$7 } from './capabilities-fe1f3e25.js';
import { s as s$5 } from './associatedFeatureServiceUtils-103ea9a5.js';
import { s as s$2, l as l$2, u as u$4, m as m$3 } from './I3SLayerDefinitions-9e588c0a.js';
import { a as a$2 } from './lazyLayerLoader-2298e690.js';
import { j as j$1 } from './persistable-72f7fc31.js';
import { I, y as y$1, Z as Z$1 } from './elevationInfoUtils-017e8551.js';
import { $ } from './I3SUtil-0e4818ac.js';
import { n as n$1, p as p$2 } from './popupUtils-be8e0642.js';
import './georeference-44df2691.js';
import './mat3f64-3fe11525.js';
import './mat4f64-b32e2490.js';
import './computeTranslationToOriginAndRotation-549392a4.js';
import './DoubleArray-2a055ca3.js';
import './quat-54e33f01.js';
import './quatf64-137a8dbb.js';
import './meshVertexSpaceUtils-7316b224.js';
import './MeshLocalVertexSpace-2b2bc4ec.js';
import './vec3-356f9a83.js';
import './BufferView-71c891bf.js';
import './imageUtils-6d581807.js';
import './earcut-a070b095.js';
import './Indices-d2842f7e.js';
import './deduplicate-bc644308.js';
import './plane-618ffdc6.js';
import './triangle-96445edc.js';
import './Util-dc144851.js';
import './ObjectStack-72ba47a5.js';
import './lineSegment-26c7b51b.js';
import './basicInterfaces-f85cdac5.js';
import './VertexAttribute-66b2103c.js';
import './External-d09adeb5.js';
import './originUtils-f2cf510b.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './jsonContext-60559b96.js';
import './resourceUtils-21e073ff.js';
import './resourceUtils-15912736.js';
import './saveAPIKeyUtils-793d8e4a.js';
import './saveUtils-0fab324d.js';
import './resourceExtension-cfa3ba53.js';
import './sphere-e8582f09.js';
import './I3SBinaryReader-dfbe78b1.js';
import './symbolColorUtils-0d5ad765.js';
import './orientedBoundingBox-e8827581.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s=class extends f{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo";}};e$1([y({type:String,json:{read:!0,write:!0}})],s.prototype,"name",void 0),e$1([y({type:String,json:{read:!0,write:!0}})],s.prototype,"field",void 0),e$1([y({type:[Number],json:{read:!0,write:!0}})],s.prototype,"currentRangeExtent",void 0),e$1([y({type:[Number],json:{read:!0,write:!0}})],s.prototype,"fullRangeExtent",void 0),e$1([y({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=e$1([c$1("esri.layers.support.RangeInfo")],s);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var c;let p=c=class extends(u$1(V.ofType(j))){constructor(e){super(e);}clone(){return new c(this.items.map((e=>e.clone())))}write(e,r){return this.toJSON(r)}toJSON(e){const r=e?.layer?.spatialReference;return r?this.toArray().map((t=>{if(!r.equals(t.spatialReference)){if(!H(t.spatialReference,r))return e?.messages&&e.messages.push(new s$1("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new j;rn(t,s,r),t=s;}const s=t.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new s$1("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((r=>r.toJSON(e))))}static fromJSON(e,r){const t=new c;return e.forEach((e=>t.add(j.fromJSON(e,r)))),t}};p=c=e$1([c$1("esri.layers.support.PolygonCollection")],p);const l=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var u;let g=u=class extends f{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new l,this._geometriesSource=null;}initialize(){this.addHandles(v((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),C));}readGeometries(e,r,o){Array.isArray(e)?this.geometries=l.fromJSON(e,o):this._geometriesSource={url:u$2(e,o),context:o};}async loadGeometries(e,o){if(null==this._geometriesSource)return;const{url:s,context:t}=this._geometriesSource,i=await U$1(s,{responseType:"json",signal:o?.signal}),a=e.toJSON(),p=i.data.map((e=>({...e,spatialReference:a})));this.geometries=l.fromJSON(p,t),this._geometriesSource=null;}clone(){const e=new u({geometries:a(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};e$1([y({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],g.prototype,"spatialRelationship",void 0),e$1([y({type:l,nonNullable:!0,json:{write:!0}}),j$1({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],g.prototype,"geometries",void 0),e$1([o(["web-scene","portal-item"],"geometries")],g.prototype,"readGeometries",null),g=u=e$1([c$1("esri.layers.support.SceneFilter")],g);const h=g;

async function e(e){const r=[];for(const n of e)n.name.toLowerCase().endsWith(".zip")?r.push(t(n)):r.push(Promise.resolve(n));return (await Promise.all(r)).flat()}async function t(e){const{BlobReader:t,ZipReader:r,BlobWriter:n}=await __vitePreload(() => import('./zipjs-wrapper-4c92eef8.js'),true?[]:void 0,import.meta.url),a=[],i=new r(new t(e));return (await i.getEntries()).forEach((e=>{if(e.directory||/^__MACOS/i.test(e.filename))return;const t=new n,r=e.getData?.(t).then((t=>new File([t],e.filename)));r&&a.push(r);})),Promise.all(a)}

const we=new Set(["3DObject","Point"]),Ie=s$6();let Le=class extends(m(F(L(l$1(u$3(j$2(t$1(m$1(e$2(i(i$1(b$2)))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new V,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0;}normalizeCtorArgs(e,t){return "string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null);}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new Z(this.fields)}readNodePages(e,t,r){return "Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:s$2.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo();}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&T(this.associatedLayer)}get geometryType(){return Fe[this.profile]||"mesh"}set renderer(e){p$1(e,this.fieldsIndex),this._set("renderer",e);}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=null!=e?e:s$7;const{query:t,queryRelated:r,editing:{supportsGlobalId:i,supportsRollbackOnFailure:s,supportsUploadWithItemId:o,supportsGeometryUpdate:a,supportsReturnServiceEditsInSourceSpatialReference:n$1},data:{supportsZ:l,supportsM:p,isVersioned:d,supportsAttachment:y},operations:{supportsEditing:u,supportsAdd:c,supportsUpdate:h,supportsDelete:f,supportsQuery:m,supportsQueryAttachments:g,supportsAsyncConvert3D:v}}=e,b=e.operations.supportsChangeTracking,w=!!this.associatedLayer?.infoFor3D&&n();return {query:t,queryRelated:r,editing:{supportsGlobalId:i,supportsReturnServiceEditsInSourceSpatialReference:n$1,supportsRollbackOnFailure:s,supportsGeometryUpdate:w&&a,supportsUploadWithItemId:o},data:{supportsAttachment:y,supportsZ:l,supportsM:p,isVersioned:d},operations:{supportsQuery:m,supportsQueryAttachments:g,supportsEditing:u&&b,supportsAdd:w&&c&&b,supportsDelete:w&&f&&b,supportsUpdate:h&&b,supportsAsyncConvert3D:v}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e);}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return !e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return null!=r&&je[r]?je[r]:(s$3.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(a$1),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await t$2(this,{origin:"service"},t),p$1(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e);}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load());}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference);}catch(e){s$3.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null;}}createQuery(){const e=new b;return "mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new s$4("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new s$4("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=x(this.fieldsIndex,await n$1(this,p$2(this)));return $(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const i=await this.queryCachedAttributes(e,[r]);if(!i||0===i.length)throw new s$4("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new c$2;return s.attributes=i[0],s.layer=this,s.sourceLayer=this,s}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(s$3.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return p$3(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new s$4("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load();}catch(e){throw new s$4("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new s$4("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new s$4("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const i of this.statisticsInfo)if(i.name===r.name){const e=V$1(this.parsedUrl.path,i.href);return U$1(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s$4("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(P.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(P.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await __vitePreload(() => import('./editingSupport-cc2b6f51.js'),true?["./editingSupport-cc2b6f51.js","./main-bf9b57d3.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url);let i=t;await this.load();const s=this.associatedLayer;if(!s)throw new s$4(`${this.type}-layer:not-editable`,"Service is not editable");await s.load();const{globalIdField:o}=s,a=!!s.infoFor3D,l=i?.globalIdUsed??!0;if(a&&null==o)throw new s$4(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(a&&!l)throw new s$4(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return w(s.url)&&a&&null!=e.deleteFeatures&&null!=o&&(i={...i,globalIdToObjectId:await V$2(s,e.deleteFeatures,o)}),r(this,s.source,e,i)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new s$4(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const r$1=e=>{throw s$3.getLogger(this).error(".convertMesh()",e.message),e};await this.load(),this.infoFor3D||r$1(new s$4("invalid:layer","SceneLayer has no capability for mesh conversion"));const i=await this.extractAndFilterFiles(e),s=i.reduce(((e,t)=>r(this.infoFor3D,t)?e+1:e),0);0===s&&r$1(new i$2),s>1&&r$1(new m$2);const o=this.spatialReference,a=t?.location??new x$1({x:0,y:0,z:0,spatialReference:o}),p=a.spatialReference.isGeographic?"local":"georeferenced",d=$$1.createWithExternalSource(a,i,{vertexSpace:p}),[y]=await this.uploadAssets([d],t);return y}async extractAndFilterFiles(e$1){await this.load();const t=this.infoFor3D;if(!t)return e$1;return (await e(e$1)).filter((e=>t$3(t,e)))}validateLayer(e){if(e.layerType&&!we.has(e.layerType))throw new s$4("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s$4("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new s$4("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(e,t){let r=!1,i=!1;if(null==e)r=!0,i=!0;else {const s=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,i=s;break;case"vertex-reference-frame":r=!0,i=!s;break;default:r=!1;}}if(!r)throw new s$4("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new s$4("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference);}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else {if("mesh-pyramids"!==this.profile)throw new s$4("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject");}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=i;}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges();}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()));}e&&this._set("fields",e);}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=t$4(this);for(let r=0;r<e.length;r++){const i=e[r],s=this.originIdOf(i),o=this.associatedLayer.originIdOf(i);s<o&&(o===e$3.SERVICE||o===e$3.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],o);}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.editingInfo?.lastEditDate,t=this.associatedLayer?.serverGens,r=this.associatedLayer?.getAtOrigin("fullExtent","service");if(!n()||null==this.associatedLayer?.infoFor3D||!r||!w(this.associatedLayer?.url)||!e||this.serviceUpdateTimeStamp?.lastUpdate===e.getTime()||!this.serviceUpdateTimeStamp&&t?.minServerGen===t?.serverGen)return;t$4(this).setAtOrigin("fullExtent",r.clone(),e$3.SERVICE);}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges));}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:i}=await s$5(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),s=await a$2.FeatureLayer();this.associatedLayer=new s({url:t,customParameters:this.customParameters,layerId:r,portalItem:i}),await this.associatedLayer.load();}catch(t){b$1(t)||this._logWarningOnPopupEnabled();}}async _logWarningOnPopupEnabled(){await w$1((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?s$3.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):s$3.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&I(s$3.getLogger(this),y$1("Mesh scene layers","relative-to-scene",e)),I(s$3.getLogger(this),Z$1("Scene layers",e));}};e$1([y({types:{key:"type",base:t$5,typeMap:{selection:p$4}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],Le.prototype,"featureReduction",void 0),e$1([y({type:[s],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],Le.prototype,"rangeInfos",void 0),e$1([y({json:{read:!1}})],Le.prototype,"associatedLayer",void 0),e$1([y({type:["show","hide"]})],Le.prototype,"listMode",void 0),e$1([y({type:["ArcGISSceneServiceLayer"]})],Le.prototype,"operationalLayerType",void 0),e$1([y({json:{read:!1},readOnly:!0})],Le.prototype,"type",void 0),e$1([y({...Ie.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Le.prototype,"fields",void 0),e$1([y()],Le.prototype,"types",null),e$1([y()],Le.prototype,"typeIdField",null),e$1([y()],Le.prototype,"templates",null),e$1([y()],Le.prototype,"formTemplate",null),e$1([y({readOnly:!0,clonable:!1})],Le.prototype,"fieldsIndex",null),e$1([y({type:p$5,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],Le.prototype,"floorInfo",void 0),e$1([y(Ie.outFields)],Le.prototype,"outFields",void 0),e$1([y({type:s$2,readOnly:!0,json:{read:!1}})],Le.prototype,"nodePages",void 0),e$1([o("service","nodePages",["nodePages","pointNodePages"])],Le.prototype,"readNodePages",null),e$1([y({type:[l$2],readOnly:!0})],Le.prototype,"materialDefinitions",void 0),e$1([y({type:[u$4],readOnly:!0})],Le.prototype,"textureSetDefinitions",void 0),e$1([y({type:[m$3],readOnly:!0})],Le.prototype,"geometryDefinitions",void 0),e$1([y({readOnly:!0})],Le.prototype,"serviceUpdateTimeStamp",void 0),e$1([y({readOnly:!0})],Le.prototype,"attributeStorageInfo",void 0),e$1([y({readOnly:!0})],Le.prototype,"statisticsInfo",void 0),e$1([y({type:V.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],Le.prototype,"excludeObjectIds",void 0),e$1([y({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Le.prototype,"definitionExpression",void 0),e$1([y({type:h,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],Le.prototype,"filter",void 0),e$1([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Le.prototype,"path",void 0),e$1([y(f$1)],Le.prototype,"elevationInfo",null),e$1([y({readOnly:!0,json:{read:!1}})],Le.prototype,"effectiveCapabilities",null),e$1([y({readOnly:!0})],Le.prototype,"effectiveEditingEnabled",null),e$1([y({type:String})],Le.prototype,"geometryType",null),e$1([y(m$4)],Le.prototype,"labelsVisible",void 0),e$1([y({type:[C$1],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:i$3},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:i$3},write:!0}})],Le.prototype,"labelingInfo",void 0),e$1([y(c$3)],Le.prototype,"legendEnabled",void 0),e$1([y({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?r$1(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],Le.prototype,"opacity",void 0),e$1([y({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Le.prototype,"priority",void 0),e$1([y({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Le.prototype,"semantic",void 0),e$1([y({types:u$5,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],Le.prototype,"renderer",null),e$1([y({json:{read:!1}})],Le.prototype,"cachedDrawingInfo",void 0),e$1([o("service","cachedDrawingInfo")],Le.prototype,"readCachedDrawingInfo",null),e$1([y({readOnly:!0,json:{read:!1}})],Le.prototype,"capabilities",null),e$1([y({type:Boolean,json:{read:!1}})],Le.prototype,"editingEnabled",null),e$1([y({readOnly:!0,json:{write:!1,read:!1}})],Le.prototype,"infoFor3D",null),e$1([y({readOnly:!0,json:{write:!1,read:!1}})],Le.prototype,"relationships",null),e$1([y(y$2)],Le.prototype,"popupEnabled",void 0),e$1([y({type:P$1,json:{name:"popupInfo",write:!0}})],Le.prototype,"popupTemplate",void 0),e$1([y({readOnly:!0,json:{read:!1}})],Le.prototype,"defaultPopupTemplate",null),e$1([y({type:String,json:{read:!1}})],Le.prototype,"objectIdField",void 0),e$1([o("service","objectIdField",["objectIdField","fields"])],Le.prototype,"readObjectIdField",null),e$1([y({type:String,json:{read:!1}})],Le.prototype,"globalIdField",void 0),e$1([o("service","globalIdField",["globalIdField","fields"])],Le.prototype,"readGlobalIdField",null),e$1([y({readOnly:!0,type:String,json:{read:!1}})],Le.prototype,"displayField",null),e$1([y({type:String,json:{read:!1}})],Le.prototype,"profile",void 0),e$1([o("service","profile",["store.profile"])],Le.prototype,"readProfile",null),e$1([y({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],Le.prototype,"normalReferenceFrame",void 0),e$1([y(p$6)],Le.prototype,"screenSizePerspectiveEnabled",void 0),e$1([y({json:{read:!1,origins:{service:{read:!0}}}})],Le.prototype,"serviceItemId",void 0),Le=e$1([c$1("esri.layers.SceneLayer")],Le);const je={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Fe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Se=Le;

export { Se as default };
