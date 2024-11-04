import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { cV as o$1, s, aX as e, aY as y$1, aZ as c$1, hC as o$2, bo as Et, J as s$1, f8 as A, _ as L$1, U as U$1, eP as y$2, fa as b, bl as f$1, jb as c$2 } from './main-af5539f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c=class extends o$1.EventedAccessor{destroy(){this.emit("destroy");}get connectionError(){return this.errorString?new s("stream-connection",this.errorString):null}onFeature(r){this.emit("data-received",r);}onMessage(r){this.emit("message-received",r);}};e([y$1({readOnly:!0})],c.prototype,"connectionError",null),c=e([c$1("esri.layers.support.StreamConnection")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var h$1;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED";}(h$1||(h$1={}));let d$1=class d extends n{constructor(e){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:o,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=o$2(t,s,o),this._open();}normalizeCtorArgs(){return {}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake();}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null;}get connectionStatus(){if(null==this._websocket)return "disconnected";switch(this._websocket.readyState){case h$1.CONNECTING:case h$1.OPEN:return "connected";case h$1.CLOSING:case h$1.CLOSED:return "disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e);}sendMessageToClient(e){this._onMessage(e);}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close();}async _tryCreateWebSocket(e=this._config.source.path,r=1e3,i=0){try{if(this.destroyed)return;const t=Et(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus");}catch(c){const n=r/1e3;return this._config.maxReconnectionAttempts&&i>=this._config.maxReconnectionAttempts?(s$1.getLogger(this).error(new s("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(s$1.getLogger(this).error(new s("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,c)),await A(r),this._tryCreateWebSocket(e,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),i+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t);}catch(s$2){return void s$1.getLogger(this).error(new s("websocket-connection","Failed to parse message, invalid JSON",{error:s$2}))}};}_createWebSocket(e){return new Promise(((t,o)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s);},s.onclose=e=>{s.onopen=s.onclose=null,o(e);};}))}async _handshake(e=1e4){const s$2=this._websocket;if(null==s$2)return;const n=L$1(),i=s$2.onmessage,{filter:c,outFields:a,spatialReference:l}=this._config;return n.timeout(e),s$2.onmessage=e=>{let r=null;try{r=JSON.parse(e.data);}catch(h){}r&&"object"==typeof r||(s$1.getLogger(this).error(new s("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),this.destroy()),r.spatialReference?.wkid!==l?.wkid&&(s$1.getLogger(this).error(new s("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),n.reject(),this.destroy()),"json"!==r.format&&(s$1.getLogger(this).error(new s("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),this.destroy()),c&&r.filter!==c&&s$1.getLogger(this).error(new s("websocket-connection","Tried to set filter, but server doesn't support it")),a&&r.outFields!==a&&s$1.getLogger(this).error(new s("websocket-connection","Tried to set outFields, but server doesn't support it")),s$2.onmessage=i;for(const t of this._outstandingMessages)s$2.send(JSON.stringify(t));this._outstandingMessages=[],n.resolve();},s$2.send(JSON.stringify({filter:c,outFields:a,format:"json",spatialReference:{wkid:l.wkid}})),n.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t);}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),s$1.getLogger(this).error("websocket-connection",t);}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&s$1.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open();}};e([y$1()],d$1.prototype,"connectionStatus",null),e([y$1()],d$1.prototype,"errorString",void 0),d$1=e([c$1("esri.layers.graphics.sources.connections.WebSocketConnection")],d$1);

const h=1e4,d={maxQueryDepth:5,maxRecordCountFactor:3};let g=class extends d$1{constructor(e){super({...d,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null;}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||s$1.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o);}_onMessage(e){if("attributes"in e){let o;try{o=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(o.geometry);}catch(t){return void s$1.getLogger(this).error(new s("geoevent-connection","Failed to parse message",t))}this.onFeature(o);}else this.onMessage(e);}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},i=U$1(e.path,{query:r,responseType:"json"}),o=(await i).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:i,token:o}=r,n=this._inferWebSocketBaseUrl(i);return Et(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return s$1.getLogger(this).error(new s("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s$2=this._websocket;if(null==s$2||null==e&&null==t)return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const c=L$1(),u=()=>{a||(this.destroyed||this._websocket!==s$2||s$1.getLogger(this).error(new s("geoevent-connection","Server timed out when setting filter")),c.reject());},l=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(s$1.getLogger(this).error(new s("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(s$2),a=!0,c.resolve());};return s$2.onmessage=l,s$2.send(n),setTimeout(u,h),c.promise}_serializeFilter(e,t){const o={};if(null==e&&null==t)return o;if(e?.geometry)try{const t=y$2(e.geometry);if("extent"!==t.type)throw new s(`Expected extent but found type ${t.type}`);o.geometry=JSON.stringify(t.shiftCentralMeridian());}catch(s$2){s$1.getLogger(this).error(new s("geoevent-connection","Encountered an error when setting connection geometryDefinition",s$2));}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(o.where=e.where),null!=t&&(o.outFields=t.join(",")),o}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,o=e.attributes[t],s$2=this._relatedFeatures.get(o);if(!s$2)return s$1.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=s$2;for(const r in n)e.attributes[r]=n[r];return a&&(e.geometry=a),e.geometry||e.centroid||s$1.getLogger(this).error(new s("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),i=this._queryArchive(t);await r;const o=await i;if(!o)return;for(const s of o.features)this.onFeature(this._enrich(s));}catch(e){s$1.getLogger(this).error(new s("geoevent-connection","Encountered an error when querying buddy services",{error:e}));}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t);}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await __vitePreload(() => import('./main-af5539f8.js').then(n => n.qN),true?["./main-af5539f8.js","./preload-helper-a4975f27.js","./main-5c005d17.css"]:void 0,import.meta.url)).default)({url:e}),{capabilities:r}=await t.load(),i=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,s=r.query.supportsCentroid,n=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,l=i?a*n:a,h=new b;if(h.outFields=this._config.outFields??["*"],h.where=this._config.filter?.where??"1=1",h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=f$1.fromJSON(this._config.spatialReference),s&&(h.returnCentroid=!0),i&&(h.maxRecordCountFactor=n),o)return h.num=l,t.destroy(),this._queryPages(e,h);const d=await c$2(e,h,this._config.sourceSpatialReference);return t.destroy(),d.data}async _queryPages(e,t,r=[],i=0){t.start=null!=t.num?i*t.num:null;const{data:o}=await c$2(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&i<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,i+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,i=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[i];t.set(e,o);}this._relatedFeatures=t;}};g=e([c$1("esri.layers.graphics.sources.connections.GeoEventConnection")],g);const y=g;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends n{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:r,spatialReference:t,sourceSpatialReference:s}=e;this._featureZScaler=o$2(r,s,t);}normalizeCtorArgs(){return {}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const r of e.features)null!=this._featureZScaler&&this._featureZScaler(r.geometry),this.onFeature(r);}this.onMessage(e);}};e([y$1()],a.prototype,"connectionStatus",void 0),e([y$1()],a.prototype,"errorString",void 0),a=e([c$1("esri.layers.support.ClientSideConnection")],a);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(e,t){if(null==e&&null==t)return null;const n={};return null!=t&&(n.geometry=t),null!=e&&(n.where=e),n}function r(r,i,s,c,l,u,a$1,m,p){const f={source:r,sourceSpatialReference:i,spatialReference:s,geometryType:c,filter:o(l,u),maxReconnectionAttempts:a$1,maxReconnectionInterval:m,customParameters:p};if(!r)return new a(f);return r.path.startsWith("wss://")||r.path.startsWith("ws://")?new d$1(f):new y(f)}

export { r as createConnection };
