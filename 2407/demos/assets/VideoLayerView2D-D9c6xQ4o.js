import { dW as i$1, c1 as f$1, aW as e, aX as y, aY as c, ai as u$1, ey as h, a4 as c$1, b9 as u$2, b2 as d$1, b4 as P$1 } from './main-BhyDjZ0Q.js';
import { m as m$1, u as u$3 } from './LayerView-DjxLU4A5.js';
import { t } from './GraphicContainer-itu2Y58C.js';
import { $ } from './GraphicsView2D-Dv7BUUJv.js';
import './preload-helper-dJJaZANz.js';
import './Container-ddLFvo_i.js';
import './highlightReasons-Djfsz-43.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BEoxsVE3.js';
import './AGraphicContainer-DGXsdf1B.js';
import './TechniqueInstance-BdBgnZv5.js';
import './UpdateTracking2D-m_HAnFY3.js';
import './TurboLine-Bbqslyv_.js';
import './enums-DZmWLm_j.js';
import './earcut-9bQ4Wcu3.js';
import './GeometryUtils-D-LE2Lsk.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BN9vC4N1.js';
import './Program-BoC-3bQ1.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BKzTl2d2.js';
import './constants-C0QDwCF4.js';
import './TileContainer-DfH9WsLD.js';
import './WGLContainer-CGSzXE41.js';
import './ProgramTemplate-BmrNRl7_.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './FeatureCommandQueue-BNOuH6NO.js';
import './vec3f32-CLbqcArJ.js';
import './AttributeStore-CGPiyHEb.js';
import './TimeOnly-DYAM52i6.js';
import './timeSupport-CVzO8rFm.js';
import './json-Beimr7gP.js';
import './normalizeUtilsSync-FSWxpgTN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p=class extends(i$1(f$1)){constructor(o){super(o),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null;}};e([y({type:Boolean})],p.prototype,"frameCenter",void 0),e([y({type:Boolean})],p.prototype,"frameOutline",void 0),e([y({type:Boolean})],p.prototype,"lineOfSight",void 0),e([y({type:Boolean})],p.prototype,"sensorLocation",void 0),e([y({type:Boolean})],p.prototype,"sensorTrail",void 0),p=e([c("esri.layers.support.TelemetryDisplay")],p);const i=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const f=new u$1([255,127,0]);let g=class extends(m$1(u$3)){constructor(){super(...arguments),this._graphicsLayer=new h,this._frameOutlineGraphic=new c$1({symbol:{type:"simple-fill",outline:{type:"simple-line",color:f}}}),this._sensorTrailGraphic=new c$1({symbol:{type:"simple-line",color:f}}),this._lineOfSightGraphic=new c$1({symbol:{type:"simple-line",color:f}}),this._sensorLocationGraphic=new c$1({symbol:{type:"simple-marker",color:f}}),this._frameCenterGraphic=new c$1({symbol:{type:"simple-marker",color:f}}),this.layer=null,this.symbolColor=f,this.visibleTelemetryElements=null;}destroy(){this._graphicsLayer=u$2(this._graphicsLayer);}initialize(){this.addHandles(d$1((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor;}),P$1)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new i({frameCenter:this.layer.telemetryDisplay?.frameCenter??!0,frameOutline:this.layer.telemetryDisplay?.frameOutline??!0,lineOfSight:this.layer.telemetryDisplay?.lineOfSight??!0,sensorLocation:this.layer.telemetryDisplay?.sensorLocation??!0,sensorTrail:this.layer.telemetryDisplay?.sensorTrail??!0});}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new t(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([d$1((()=>[this.layer.telemetryDisplay?.frameCenter,this.layer.telemetryDisplay?.frameOutline,this.layer.telemetryDisplay?.sensorLocation,this.layer.telemetryDisplay?.sensorTrail,this.layer.telemetryDisplay?.lineOfSight]),(()=>this._updateVisibleTelemetryElements()),P$1),d$1((()=>[this.layer.telemetry,this.visibleTelemetryElements?.frameCenter,this.visibleTelemetryElements?.frameOutline,this.visibleTelemetryElements?.sensorLocation,this.visibleTelemetryElements?.sensorTrail,this.visibleTelemetryElements?.lineOfSight]),(()=>this._updateGraphicGeometries()),P$1)]);}detach(){this.container.removeAllChildren(),this.graphicsView=u$2(this.graphicsView);}supportsSpatialReference(e){return !0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange();}update(e){this.graphicsView.processUpdate(e);}isUpdating(){return !this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail);}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:i}=this;e&&i&&(i.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,i.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,i.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,i.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,i.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null);}};e([y()],g.prototype,"graphicsView",void 0),e([y()],g.prototype,"layer",void 0),e([y()],g.prototype,"symbolColor",void 0),e([y({type:i})],g.prototype,"visibleTelemetryElements",void 0),g=e([c("esri.views.2d.layers.VideoLayerView2D")],g);const u=g;

export { u as default };
