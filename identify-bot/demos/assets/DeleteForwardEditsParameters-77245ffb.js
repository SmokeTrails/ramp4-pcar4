import { aX as e, aY as y, aZ as c, c2 as f, c3 as v } from './main-fb35569c.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p;let i=p=class extends f{static from(r){return v(p,r)}constructor(r){super(r),this.sessionId=void 0,this.moment=null;}};e([y({type:String,json:{write:!0}})],i.prototype,"sessionId",void 0),e([y({type:Date,json:{type:Number,write:{writer:(r,o)=>{o.moment=r?r.getTime():null;}}}})],i.prototype,"moment",void 0),i=p=e([c("esri.rest.versionManagement.gdbVersion.support.PostParameters")],i);const m=i;

export { m as default };
