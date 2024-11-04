import { aW as e, aX as y, aY as c } from './main-CHt_w1XH.js';
import { X } from './FeatureLayerView2D-DmCadVlY.js';
import './preload-helper-dJJaZANz.js';
import './Container--QYO6OWe.js';
import './highlightReasons-BAbkcdET.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-SK3n7djF.js';
import './LayerView-BfSbI1QU.js';
import './TechniqueInstance-pPLN79ls.js';
import './UpdateTracking2D-BjxemXeM.js';
import './TurboLine-B3Pw2sKL.js';
import './enums-DZmWLm_j.js';
import './earcut-DG992m4Z.js';
import './GeometryUtils-zh2NSz8I.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-CgzX-12N.js';
import './Program-Dy5x1vRE.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-VLLapEpf.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CAJCPmhZ.js';
import './WGLContainer-Dn-Cy6MP.js';
import './ProgramTemplate-BMhquZd8.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-BJSBkowR.js';
import './floatRGBA-BVUTyFGz.js';
import './FeatureCommandQueue-CCwJ-Pgh.js';
import './HighlightCounter-kY72mubv.js';
import './popupUtils-DkMewZoJ.js';
import './RefreshableLayerView-CvA-fFdW.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
