import { m } from './TimeOnly-D72A9AgU.js';
import { a as ae$1, t as te$1, k as ee$1, B, N, b as a, r, G, d as de, l as be, q as Be, X as X$1, v as Y, S as Se, U, H, x as t, Q as Q$1, I, h as he, D, y as Je, A as v, K as y$1, V, P as l$1 } from './arcadeUtils-CG0SSmqb.js';
import { e, j, q, f, c, a as e$1, b as a$1, d as a$2, g, k, F, A, B as B$1, h as b, i as k$1, L, I as I$1 } from './featureSetUtils-Bc60OoP9.js';
import { t as t$1 } from './ImmutableArray-DC4Q0AOY.js';
import { l } from './portalUtils-CSHH2o6-.js';
import { u, D as D$1 } from './SpatialFilter-Bd0cDkCa.js';
import { Q, eQ as S, er as We, dK as y } from './main-Bzk8b5UZ.js';
import { x as x$1 } from './WhereClause-Cqou6iY8.js';
import './preload-helper-dJJaZANz.js';
import './number-BJ29hM-u.js';
import './SubtypeGroupLayer-C5A4sbCe.js';
import './geometryEngineAsync-P7tW1BeM.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function X(e,t,n,a){if(1===a.length){if(U(a[0]))return l$1(e,a[0],-1);if(Q$1(a[0]))return l$1(e,a[0].toArray(),-1)}return l$1(e,a,-1)}async function ee(e,t,n){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await t.evaluateIdentifier(n,r));}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function te(e,t,n=null){for(const a in e)if(a.toLowerCase()===t.toLowerCase())return e[a];return n}function ne(e){if(null===e)return null;const t={type:te(e,"type",""),name:te(e,"name","")};if("range"===t.type)t.range=te(e,"range",[]);else {t.codedValues=[];for(const n of te(e,"codedValues",[]))t.codedValues.push({name:te(n,"name",""),code:te(n,"code",null)});}return t}function ae(e){if(null===e)return null;const t={},n=te(e,"wkt",null);null!==n&&(t.wkt=n);const a=te(e,"wkid",null);return null!==a&&(t.wkid=a),t}function ie(e){if(null===e)return null;const t={hasZ:te(e,"hasz",!1),hasM:te(e,"hasm",!1)},n=te(e,"spatialreference",null);n&&(t.spatialReference=ae(n));const a=te(e,"x",null);if(null!==a)return t.x=a,t.y=te(e,"y",null),t.hasZ&&(t.z=te(e,"z",null)),t.hasM&&(t.m=te(e,"m",null)),t;const i=te(e,"rings",null);if(null!==i)return t.rings=i,t;const r=te(e,"paths",null);if(null!==r)return t.paths=r,t;const s=te(e,"points",null);if(null!==s)return t.points=s,t;for(const o of ["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=te(e,o,null);null!==n&&(t[o]=n);}return t}function re(e,t){for(const n of t)if(n===e)return !0;return !1}function se(e){return !!e.layerDefinition&&(!!e.featureSet&&(!1!==re(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(!1!==U(e.layerDefinition.fields)&&!1!==U(e.featureSet.features))))}function oe(e){return "utc"===e?.toLowerCase()?"UTC":"unknown"===e?.toLowerCase()?"Unknown":e}function le(q$1){"async"===q$1.mode&&(q$1.functions.timezone=function(t,r$1){return q$1.standardFunctionAsync(t,r$1,(async(s,o,l)=>{if(ae$1(l,1,2,t,r$1),te$1(l[0]))return "Unknown";if(ee$1(l[0]))return "Unknown";if(B(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].datesInUnknownTimezone?oe("unknown"):oe(l[0].dateFieldsTimeZone);if(!(l[1]instanceof N)||!1===l[1].hasField("type"))throw new a(t,r.InvalidParameter,r$1);const e=l[1].field("type");if(!1===G(e))throw new a(t,r.InvalidParameter,r$1);switch(de(e).toLowerCase()){case"preferredtimezone":return oe(l[0].preferredTimeZone);case"editfieldsinfo":return oe(l[0].editFieldsInfo?.timeZone??null);case"timeinfo":return oe(l[0].timeInfo?.timeZone??null);case"field":if(l[1].hasField("fieldname")&&G(l[1].field("fieldname")))return oe(l[0].fieldTimeZone(de(l[1].field("fieldname"))))}throw new a(t,r.InvalidParameter,r$1)}const f=be(l[0],Be(t));if(null===f)return null;const u=f.timeZone;return "system"===u?m.systemTimeZoneCanonicalName:"utc"===u.toLowerCase()?"UTC":"unknown"===u.toLowerCase()?"Unknown":u}))},q$1.functions.sqltimestamp=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,r$1,s)=>{ae$1(s,1,3,e,t);const o=s[0];if(X$1(o)){if(1===s.length)return o.toSQLWithKeyword();if(2===s.length)return o.changeTimeZone(de(s[1])).toSQLWithKeyword();throw new a(e,r.InvalidParameter,t)}if(ee$1(o))return o.toSQLWithKeyword();if(B(o)){if(3!==s.length)throw new a(e,r.InvalidParameter,t);await o.load();const n=de(s[1]);if(ee$1(s[2]))return s[2].toSQLWithKeyword();if(!1===X$1(s[2]))throw new a(e,r.InvalidParameter,t);const r$1=o.fieldTimeZone(n);return null===r$1?s[2].toSQLWithKeyword():s[2].changeTimeZone(r$1).toSQLWithKeyword()}throw new a(e,r.InvalidParameter,t)}))},q$1.signatures.push({name:"sqltimestamp",min:2,max:4}),q$1.functions.featuresetbyid=function(e$1,t){return q$1.standardFunctionAsync(e$1,t,((n,r$1,o)=>{if(ae$1(o,2,4,e$1,t),o[0]instanceof e){const n=de(o[1]);let r$1=Y(o[2],null);const s=Se(Y(o[3],!0));if(null===r$1&&(r$1=["*"]),!1===U(r$1))throw new a(e$1,r.InvalidParameter,t);return o[0].featureSetById(n,s,r$1)}throw new a(e$1,r.InvalidParameter,t)}))},q$1.signatures.push({name:"featuresetbyid",min:2,max:4}),q$1.functions.getfeatureset=function(e,t){return q$1.standardFunctionAsync(e,t,((n,r$1,s)=>{if(ae$1(s,1,2,e,t),H(s[0])){let t=Y(s[1],"datasource");return null===t&&(t="datasource"),t=de(t).toLowerCase(),j(s[0].fullSchema(),t,e.lrucache,e.interceptor,e.spatialReference)}throw new a(e,r.InvalidParameter,t)}))},q$1.signatures.push({name:"getfeatureset",min:1,max:2}),q$1.functions.featuresetbyportalitem=function(e,n){return q$1.standardFunctionAsync(e,n,((r$1,s,o)=>{if(ae$1(o,2,5,e,n),null===o[0])throw new a(e,r.PortalRequired,n);if(o[0]instanceof t){const t=de(o[1]),r$1=de(o[2]);let s=Y(o[3],null);const f=Se(Y(o[4],!0));if(null===s&&(s=["*"]),!1===U(s))throw new a(e,r.InvalidParameter,n);let u=null;return u=e.services?.portal?e.services.portal:Q.getDefault(),u=l(o[0],u),q(t,r$1,e.spatialReference,s,f,u,e.lrucache,e.interceptor)}if(!1===G(o[0]))throw new a(e,r.PortalRequired,n);const f=de(o[0]),u=de(o[1]);let d=Y(o[2],null);const c=Se(Y(o[3],!0));if(null===d&&(d=["*"]),!1===U(d))throw new a(e,r.InvalidParameter,n);return q(f,u,e.spatialReference,d,c,e.services?.portal??Q.getDefault(),e.lrucache,e.interceptor)}))},q$1.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),q$1.functions.featuresetbyname=function(e$1,t){return q$1.standardFunctionAsync(e$1,t,((n,r$1,o)=>{if(ae$1(o,2,4,e$1,t),o[0]instanceof e){const n=de(o[1]);let r$1=Y(o[2],null);const s=Se(Y(o[3],!0));if(null===r$1&&(r$1=["*"]),!1===U(r$1))throw new a(e$1,r.InvalidParameter,t);return o[0].featureSetByName(n,s,r$1)}throw new a(e$1,r.InvalidParameter,t)}))},q$1.signatures.push({name:"featuresetbyname",min:2,max:4}),q$1.functions.featureset=function(e,t){return q$1.standardFunction(e,t,((r$1,s,o)=>{ae$1(o,1,1,e,t);let l=o[0];const f$1={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(G(l))l=JSON.parse(l),void 0!==l.layerDefinition?(f$1.layerDefinition=l.layerDefinition,f$1.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(f$1.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(f$1.featureSet.features=l.features,f$1.featureSet.geometryType=l.geometryType,f$1.layerDefinition.geometryType=f$1.featureSet.geometryType,f$1.layerDefinition.objectIdField=l.objectIdFieldName??"",f$1.layerDefinition.typeIdField=l.typeIdFieldName,f$1.layerDefinition.globalIdField=l.globalIdFieldName,f$1.layerDefinition.fields=l.fields,l.spatialReference&&(f$1.layerDefinition.spatialReference=l.spatialReference));else {if(!(o[0]instanceof N))throw new a(e,r.InvalidParameter,t);{l=JSON.parse(o[0].castToText(!0));const e=te(l,"layerdefinition");if(null!==e){f$1.layerDefinition.geometryType=te(e,"geometrytype",""),f$1.featureSet.geometryType=f$1.layerDefinition.geometryType,f$1.layerDefinition.globalIdField=te(e,"globalidfield",""),f$1.layerDefinition.objectIdField=te(e,"objectidfield",""),f$1.layerDefinition.typeIdField=te(e,"typeidfield",""),f$1.layerDefinition.hasZ=!0===te(e,"hasz",!1),f$1.layerDefinition.hasM=!0===te(e,"hasm",!1);const t=te(e,"spatialreference",null);t&&(f$1.layerDefinition.spatialReference=ae(t));for(const a of te(e,"fields",[])){const e={name:te(a,"name",""),alias:te(a,"alias",""),type:te(a,"type",""),nullable:te(a,"nullable",!0),editable:te(a,"editable",!0),length:te(a,"length",null),domain:ne(te(a,"domain"))};f$1.layerDefinition.fields.push(e);}const n=te(l,"featureset",null);if(n){const e={};for(const t of f$1.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of te(n,"features",[])){const n={},a=te(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];f$1.featureSet.features.push({attributes:n,geometry:ie(te(t,"geometry",null))});}}}else {f$1.layerDefinition.hasZ=!0===te(l,"hasz",!1),f$1.layerDefinition.hasM=!0===te(l,"hasm",!1),f$1.layerDefinition.geometryType=te(l,"geometrytype",""),f$1.featureSet.geometryType=f$1.layerDefinition.geometryType,f$1.layerDefinition.objectIdField=te(l,"objectidfieldname",""),f$1.layerDefinition.typeIdField=te(l,"typeidfieldname","");const e=te(l,"spatialreference",null);e&&(f$1.layerDefinition.spatialReference=ae(e));let t=te(l,"fields",null);if(U(t))for(const i of t){const e={name:te(i,"name",""),alias:te(i,"alias",""),type:te(i,"type",""),nullable:te(i,"nullable",!0),editable:te(i,"editable",!0),length:te(i,"length",null),domain:ne(te(i,"domain"))};f$1.layerDefinition.fields.push(e);}else t=null,f$1.layerDefinition.fields=t;const n={};for(const i of f$1.layerDefinition.fields)n[i.name.toLowerCase()]=i.name;let a=te(l,"features",null);if(U(a))for(const i of a){const e={},t=te(i,"attributes",{});for(const a in t)e[n[a.toLowerCase()]]=t[a];f$1.featureSet.features.push({attributes:e,geometry:ie(te(i,"geometry",null))});}else a=null,f$1.featureSet.features=a;}}}if(!1===se(f$1))throw new a(e,r.InvalidParameter,t);return f$1.layerDefinition.geometryType||(f$1.layerDefinition.geometryType="esriGeometryNull"),f.create(f$1,e.spatialReference)}))},q$1.signatures.push({name:"featureset",min:1,max:1}),q$1.functions.filter=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,r$1,s)=>{if(ae$1(s,2,2,e,t),U(s[0])||Q$1(s[0])){const n=[];let r$1=s[0];r$1 instanceof t$1&&(r$1=r$1.toArray());let o=null;if(!I(s[1]))throw new a(e,r.InvalidParameter,t);o=s[1].createFunction(e);for(const e of r$1){const t=o(e);S(t)?!0===await t&&n.push(e):!0===t&&n.push(e);}return n}if(B(s[0])){const t=await s[0].load(),n=x$1.create(s[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),a=n.getVariables();if(a.length>0){const t=[];for(let n=0;n<a.length;n++){const i={name:a[n]};t.push(await q$1.evaluateIdentifier(e,i));}const i={};for(let e=0;e<a.length;e++)i[a[e]]=t[e];return n.parameters=i,new c({parentfeatureset:s[0],whereclause:n})}return new c({parentfeatureset:s[0],whereclause:n})}throw new a(e,r.InvalidParameter,t)}))},q$1.signatures.push({name:"filter",min:2,max:2}),q$1.functions.orderby=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,r$1,s)=>{if(ae$1(s,2,2,e,t),B(s[0])){const e=new e$1(s[1]);return new a$1({parentfeatureset:s[0],orderbyclause:e})}throw new a(e,r.InvalidParameter,t)}))},q$1.signatures.push({name:"orderby",min:2,max:2}),q$1.functions.top=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,r$1,s)=>{if(ae$1(s,2,2,e,t),B(s[0]))return new a$2({parentfeatureset:s[0],topnum:s[1]});if(U(s[0]))return he(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,he(s[1]));if(Q$1(s[0]))return he(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,he(s[1]));throw new a(e,r.InvalidParameter,t)}))},q$1.signatures.push({name:"top",min:2,max:2}),q$1.functions.first=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,a,i)=>{if(ae$1(i,1,1,e,t),B(i[0])){const t=await i[0].first(n.abortSignal);if(null!==t){const n=D.createFromGraphicLikeObject(t.geometry,t.attributes,i[0],e.timeZone);return n._underlyingGraphic=t,n}return t}return U(i[0])?0===i[0].length?null:i[0][0]:Q$1(i[0])?0===i[0].length()?null:i[0].get(0):null}))},q$1.signatures.push({name:"first",min:1,max:1}),q$1.functions.attachments=function(e,t){return q$1.standardFunctionAsync(e,t,(async(r$1,s,o)=>{ae$1(o,1,2,e,t);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(o.length>1)if(o[1]instanceof N){if(o[1].hasField("minsize")&&(l.minsize=he(o[1].field("minsize"))),o[1].hasField("metadata")&&(l.returnMetadata=Se(o[1].field("metadata"))),o[1].hasField("maxsize")&&(l.maxsize=he(o[1].field("maxsize"))),o[1].hasField("types")){const e=Je(o[1].field("types"),!1);e.length>0&&(l.types=e);}}else if(null!==o[1])throw new a(e,r.InvalidParameter,t);if(H(o[0])){let t=o[0]._layer;return t instanceof We&&(t=g(t,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===t?[]:!1===B(t)?[]:(await t.load(),t.queryAttachments(o[0].field(t.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===o[0])return [];throw new a(e,r.InvalidParameter,t)}))},q$1.signatures.push({name:"attachments",min:1,max:2}),q$1.functions.featuresetbyrelationshipname=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,r$1,s)=>{ae$1(s,2,4,e,t);const o=s[0],l=de(s[1]);let c=Y(s[2],null);const m=Se(Y(s[3],!0));if(null===c&&(c=["*"]),!1===U(c))throw new a(e,r.InvalidParameter,t);if(null===s[0])return null;if(!H(s[0]))throw new a(e,r.InvalidParameter,t);let y=o._layer;if(y instanceof We&&(y=g(y,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===y)return null;if(!1===B(y))return null;y=await y.load();const w=y.relationshipMetaData().filter((e=>e.name===l));if(0===w.length)return null;if(void 0!==w[0].relationshipTableId&&null!==w[0].relationshipTableId&&w[0].relationshipTableId>-1)return k(y,w[0],o.field(y.objectIdField),y.spatialReference,c,m,e.lrucache,e.interceptor);let g$1=y.serviceUrl();if(!g$1)return null;g$1="/"===g$1.charAt(g$1.length-1)?g$1+w[0].relatedTableId.toString():g$1+"/"+w[0].relatedTableId.toString();const I=await F(g$1,y.spatialReference,c,m,e.lrucache,e.interceptor);await I.load();let D=I.relationshipMetaData();if(D=D.filter((e=>e.id===w[0].id)),!1===o.hasField(w[0].keyField)||null===o.field(w[0].keyField)){const e=await y.getFeatureByObjectId(o.field(y.objectIdField),[w[0].keyField]);if(e){const t=x$1.create(D[0].keyField+"= @id",I.getFieldsIndex(),I.dateFieldsTimeZoneDefaultUTC);return t.parameters={id:e.attributes[w[0].keyField]},I.filter(t)}return new u({parentfeatureset:I})}const T=x$1.create(D[0].keyField+"= @id",I.getFieldsIndex(),I.dateFieldsTimeZoneDefaultUTC);return T.parameters={id:o.field(w[0].keyField)},I.filter(T)}))},q$1.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),q$1.functions.featuresetbyassociation=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,r$1,s)=>{ae$1(s,2,3,e,t);const o=s[0],l=de(Y(s[1],"")).toLowerCase(),u=G(s[2])?de(s[2]):null;if(null===s[0])return null;if(!H(s[0]))throw new a(e,r.InvalidParameter,t);let d=o._layer;if(d instanceof We&&(d=g(d,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===d)return null;if(!1===B(d))return null;await d.load();const m=d.serviceUrl(),y$2=await A(m,e.spatialReference);let w=null,I=null,D=!1;if(null!==u&&""!==u&&void 0!==u){for(const e of y$2.terminals)e.terminalName===u&&(I=e.terminalId);null===I&&(D=!0);}const T=y$2.associations.getFieldsIndex(),E=T.get("TOGLOBALID").name,A$1=T.get("FROMGLOBALID").name,x=T.get("TOTERMINALID").name,S=T.get("FROMTERMINALID").name,L$1=T.get("FROMNETWORKSOURCEID").name,C=T.get("TONETWORKSOURCEID").name,v$1=T.get("ASSOCIATIONTYPE").name,P=T.get("ISCONTENTVISIBLE").name,k=T.get("OBJECTID").name;for(const e of d.fields)if("global-id"===e.type){w=o.field(e.name);break}let O=null,z=new B$1(new y({name:"percentalong",alias:"percentalong",type:"double"}),x$1.create("0",y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC)),H$1=new B$1(new y({name:"side",alias:"side",type:"string"}),x$1.create("''",y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC));const W="globalid",G$1="globalId",K={};for(const e in y$2.lkp)K[e]=y$2.lkp[e].sourceId;const q=new b(new y({name:"classname",alias:"classname",type:"string"}),null,K);let B$2="";switch(l){case"midspan":{B$2=`((${E}='${w}') OR ( ${A$1}='${w}')) AND (${v$1} IN (5))`,q.codefield=x$1.create(`CASE WHEN (${E}='${w}') THEN ${L$1} ELSE ${C} END`,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC);const e=y$1(L.findField(y$2.associations.fields,A$1));e.name=W,e.alias=W,O=new B$1(e,x$1.create(`CASE WHEN (${A$1}='${w}') THEN ${E} ELSE ${A$1} END`,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC)),z=y$2.unVersion>=4?new I$1(L.findField(y$2.associations.fields,T.get("PERCENTALONG").name)):new B$1(new y({name:"percentalong",alias:"percentalong",type:"double"}),x$1.create("0",y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{B$2=`((${E}='${w}') OR ( ${A$1}='${w}')) AND (${v$1} IN (4,6))`,q.codefield=x$1.create(`CASE WHEN (${E}='${w}') THEN ${L$1} ELSE ${C} END`,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC);const e=y$1(L.findField(y$2.associations.fields,A$1));e.name=W,e.alias=W,O=new B$1(e,x$1.create(`CASE WHEN (${A$1}='${w}') THEN ${E} ELSE ${A$1} END`,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC)),H$1=new B$1(new y({name:"side",alias:"side",type:"string"}),x$1.create(`CASE WHEN (${v$1}=4) THEN 'from' ELSE 'to' END`,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{let e=`${E}='@T'`,t=`${A$1}='@T'`;null!==I&&(e+=` AND ${x}=@A`,t+=` AND ${S}=@A`),B$2="(("+e+") OR ("+t+"))",B$2=v(B$2,"@T",w??""),e=v(e,"@T",w??""),null!==I&&(e=v(e,"@A",I.toString()),B$2=v(B$2,"@A",I.toString())),q.codefield=x$1.create("CASE WHEN "+e+` THEN ${L$1} ELSE ${C} END`,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC);const n=y$1(L.findField(y$2.associations.fields,A$1));n.name=W,n.alias=W,O=new B$1(n,x$1.create("CASE WHEN "+e+` THEN ${A$1} ELSE ${E} END`,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":B$2=`${E}='${w}' AND ${v$1} = 2`,null!==I&&(B$2+=` AND ${x} = `+I.toString()),q.codefield=L$1,B$2="( "+B$2+" )",O=new k$1(L.findField(y$2.associations.fields,A$1),W,W);break;case"content":B$2=`(${A$1}='${w}' AND ${v$1} = 2)`,null!==I&&(B$2+=` AND ${S} = `+I.toString()),q.codefield=C,B$2="( "+B$2+" )",O=new k$1(L.findField(y$2.associations.fields,E),W,W);break;case"structure":B$2=`(${E}='${w}' AND ${v$1} = 3)`,null!==I&&(B$2+=` AND ${x} = `+I.toString()),q.codefield=L$1,B$2="( "+B$2+" )",O=new k$1(L.findField(y$2.associations.fields,A$1),W,G$1);break;case"attached":B$2=`(${A$1}='${w}' AND ${v$1} = 3)`,null!==I&&(B$2+=` AND ${S} = `+I.toString()),q.codefield=C,B$2="( "+B$2+" )",O=new k$1(L.findField(y$2.associations.fields,E),W,G$1);break;default:throw new a(e,r.InvalidParameter,t)}D&&(B$2="1 <> 1");return new L({parentfeatureset:y$2.associations,adaptedFields:[new I$1(L.findField(y$2.associations.fields,k)),new I$1(L.findField(y$2.associations.fields,P)),O,H$1,q,z],extraFilter:B$2?x$1.create(B$2,y$2.associations.getFieldsIndex(),y$2.associations.dateFieldsTimeZoneDefaultUTC):null})}))},q$1.signatures.push({name:"featuresetbyassociation",min:2,max:6}),q$1.functions.groupby=function(e,t){return q$1.standardFunctionAsync(e,t,(async(r$1,s,o)=>{if(ae$1(o,3,3,e,t),!B(o[0]))throw new a(e,r.InvalidParameter,t);const l=await o[0].load(),f=[],u=[];let d=!1,c=[];if(G(o[1]))c.push(o[1]);else if(o[1]instanceof N)c.push(o[1]);else if(U(o[1]))c=o[1];else {if(!Q$1(o[1]))throw new a(e,r.InvalidParameter,t);c=o[1].toArray();}for(const m of c)if(G(m)){const e=x$1.create(de(m),l.getFieldsIndex(),l.dateFieldsTimeZoneDefaultUTC),t=!0===D$1(e)?de(m):"%%%%FIELDNAME";f.push({name:t,expression:e}),"%%%%FIELDNAME"===t&&(d=!0);}else {if(!(m instanceof N))throw new a(e,r.InvalidParameter,t);{const n=m.hasField("name")?m.field("name"):"%%%%FIELDNAME",r$1=m.hasField("expression")?m.field("expression"):"";if("%%%%FIELDNAME"===n&&(d=!0),!n)throw new a(e,r.InvalidParameter,t);f.push({name:n,expression:x$1.create(r$1||n,l.getFieldsIndex(),l.dateFieldsTimeZoneDefaultUTC)});}}if(c=[],G(o[2]))c.push(o[2]);else if(U(o[2]))c=o[2];else if(Q$1(o[2]))c=o[2].toArray();else {if(!(o[2]instanceof N))throw new a(e,r.InvalidParameter,t);c.push(o[2]);}for(const m of c){if(!(m instanceof N))throw new a(e,r.InvalidParameter,t);{const n=m.hasField("name")?m.field("name"):"",r$1=m.hasField("statistic")?m.field("statistic"):"",s=m.hasField("expression")?m.field("expression"):"";if(!n||!r$1||!s)throw new a(e,r.InvalidParameter,t);u.push({name:n,statistic:r$1.toLowerCase(),expression:x$1.create(s,l.getFieldsIndex(),l.dateFieldsTimeZoneDefaultUTC)});}}if(d){const e={};for(const n of l.fields)e[n.name.toLowerCase()]=1;for(const n of f)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of u)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of f)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}for(const t of f)await ee(t.expression,q$1,e);for(const t of u)await ee(t.expression,q$1,e);return o[0].groupby(f,u)}))},q$1.signatures.push({name:"groupby",min:3,max:3}),q$1.functions.distinct=function(e,t){return q$1.standardFunctionAsync(e,t,(async(r$1,s,o)=>{if(B(o[0])){ae$1(o,2,2,e,t);const r$1=await o[0].load(),s=[];let l=[];if(G(o[1]))l.push(o[1]);else if(o[1]instanceof N)l.push(o[1]);else if(U(o[1]))l=o[1];else {if(!Q$1(o[1]))throw new a(e,r.InvalidParameter,t);l=o[1].toArray();}let f=!1;for(const o of l)if(G(o)){const e=x$1.create(de(o),r$1.getFieldsIndex(),r$1.dateFieldsTimeZoneDefaultUTC),t=!0===D$1(e)?de(o):"%%%%FIELDNAME";s.push({name:t,expression:e}),"%%%%FIELDNAME"===t&&(f=!0);}else {if(!(o instanceof N))throw new a(e,r.InvalidParameter,t);{const n=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",l=o.hasField("expression")?o.field("expression"):"";if("%%%%FIELDNAME"===n&&(f=!0),!n)throw new a(e,r.InvalidParameter,t);s.push({name:n,expression:x$1.create(l||n,r$1.getFieldsIndex(),r$1.dateFieldsTimeZoneDefaultUTC)});}}if(f){const e={};for(const n of r$1.fields)e[n.name.toLowerCase()]=1;for(const n of s)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of s)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}for(const t of s)await ee(t.expression,q$1,e);return o[0].groupby(s,[])}return X("distinct",r$1,s,o)}))}),q$1.functions.getfeaturesetinfo=function(e,t){return q$1.standardFunctionAsync(e,t,(async(a,i,r)=>{if(ae$1(r,1,1,e,t),!B(r[0]))return null;const s=await r[0].getFeatureSetInfo();return s?N.convertObjectToArcadeDictionary({layerId:s.layerId,layerName:s.layerName,itemId:s.itemId,serviceLayerUrl:s.serviceLayerUrl,webMapLayerId:s.webMapLayerId??null,webMapLayerTitle:s.webMapLayerTitle??null,className:null,objectClassId:null},Be(e),!1,!1):null}))},q$1.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),q$1.functions.filterbysubtypecode=function(e,t){return q$1.standardFunctionAsync(e,t,(async(n,r$1,s)=>{if(ae$1(s,2,2,e,t),B(s[0])){const n=await s[0].load(),r$1=s[1];if(!V(r$1))throw new a(e,r.InvalidParameter,t);if(n.subtypeField){const e=x$1.create(`${n.subtypeField}= ${s[1]}`,n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC);return new c({parentfeatureset:s[0],whereclause:e})}if(null===n.typeIdField||""===n.typeIdField)throw new a(e,r.FeatureSetDoesNotHaveSubtypes,t);const o=x$1.create(`${n.typeIdField}= ${s[1]}`,n.getFieldsIndex(),n.dateFieldsTimeZoneDefaultUTC);return new c({parentfeatureset:s[0],whereclause:o})}throw new a(e,r.InvalidParameter,t)}))},q$1.signatures.push({name:"filterbysubtypecode",min:2,max:2});}

export { le as registerFunctions };
