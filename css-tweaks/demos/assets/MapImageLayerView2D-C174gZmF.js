import { aW as e, aX as y$1, fs as j, aY as c, ft as m, aR as c$1, af as b$1, H as s$1, b2 as d$1 } from './main-CHt_w1XH.js';
import { a } from './BitmapContainer-NHRJDJSi.js';
import { m as m$1, u } from './LayerView-BfSbI1QU.js';
import { $ } from './GraphicsView2D-yFiNq4Ft.js';
import { h } from './HighlightGraphicContainer-BNmsNJQj.js';
import { v } from './ExportStrategy-Bp0zzApF.js';
import { i } from './RefreshableLayerView-CvA-fFdW.js';
import { U, r } from './drapedUtils-6ok-ZSRq.js';
import './preload-helper-dJJaZANz.js';
import './WGLContainer-Dn-Cy6MP.js';
import './definitions-slUvtMCM.js';
import './LabelMetric-CgzX-12N.js';
import './enums-CgzwTbC2.js';
import './enums-DZmWLm_j.js';
import './Texture-SK3n7djF.js';
import './Program-Dy5x1vRE.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './ProgramTemplate-BMhquZd8.js';
import './Container--QYO6OWe.js';
import './highlightReasons-BAbkcdET.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './earcut-DG992m4Z.js';
import './UpdateTracking2D-BjxemXeM.js';
import './TurboLine-B3Pw2sKL.js';
import './GeometryUtils-zh2NSz8I.js';
import './Rect-9uT7dZO1.js';
import './BindType-KnpK3yZX.js';
import './Util-VLLapEpf.js';
import './constants-C0QDwCF4.js';
import './AttributeStore-BI-sE1q4.js';
import './TimeOnly-Cpa2z_N3.js';
import './timeSupport-BX1TVK4i.js';
import './json-Beimr7gP.js';
import './FeatureCommandQueue-CCwJ-Pgh.js';
import './normalizeUtilsSync-Davr4Ag7.js';
import './AGraphicContainer-Dr9i4L-U.js';
import './TechniqueInstance-pPLN79ls.js';
import './TileContainer-CAJCPmhZ.js';
import './vec3f32-CLbqcArJ.js';
import './Bitmap-CCGhGK1D.js';
import './popupUtils-DkMewZoJ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"floors",null),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1()],a.prototype,"suspended",void 0),e([y$1(j)],a.prototype,"timeExtent",void 0),a=e([c("esri.views.layers.MapImageLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(p(i(m$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a$1=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a$1,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([c("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
