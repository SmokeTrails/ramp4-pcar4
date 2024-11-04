import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-Bzk8b5UZ.js';
import { X } from './FeatureLayerView2D-CLXl_mnj.js';
import './preload-helper-dJJaZANz.js';
import './Container-Cbcmbyed.js';
import './highlightReasons-BQS-r4GY.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-CvmF31-D.js';
import './LayerView-D0TNOx33.js';
import './TechniqueInstance-CqMsL4s0.js';
import './UpdateTracking2D-CV7fDTEx.js';
import './TurboLine-D08IZgCp.js';
import './enums-DZmWLm_j.js';
import './earcut-CAeO6eN8.js';
import './GeometryUtils-CvmvJy0V.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-IFTNRbny.js';
import './Program-CEW_qpwS.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-BfH_K6o9.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BiwOILY0.js';
import './WGLContainer-D4tufTmB.js';
import './ProgramTemplate-DYwQu-mI.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-DMl_6UpV.js';
import './floatRGBA-Do8EmXnf.js';
import './FeatureCommandQueue-B8HgPwR6.js';
import './HighlightCounter-CVGTUNF8.js';
import './popupUtils-CwjOnQRP.js';
import './RefreshableLayerView-DxuhzZVX.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
