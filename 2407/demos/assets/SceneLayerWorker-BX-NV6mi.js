const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i3s-DPeOV2nU.js","./main-BhyDjZ0Q.js","./preload-helper-dJJaZANz.js","./main-ByE8X11X.css","./georeference-CuDRIcjx.js","./mat3f64-DiVtVT5k.js","./mat4f64-D1udxz0O.js","./computeTranslationToOriginAndRotation-DcQJIXld.js","./DoubleArray-B40zVCEV.js","./quat-Duo2HkLB.js","./quatf64-BVXz_O4E.js","./meshVertexSpaceUtils-Dzi__JMW.js","./MeshLocalVertexSpace-CnCj3sZv.js","./vec3-RN6FJqmF.js","./BufferView-UZl0aYCE.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { h$ as n$2, bk as f$1 } from './main-BhyDjZ0Q.js';
import { y as y$1 } from './DoubleArray-B40zVCEV.js';
import { i as i$1, a as a$1 } from './MeshLocalVertexSpace-CnCj3sZv.js';
import { n as n$3, s } from './vec3-RN6FJqmF.js';
import './sphere-BpHDMTzV.js';
import './I3SUtil-qPN2o0Ih.js';
import './ObjectStack-B89sHAv-.js';
import './plane-D6jnmzVu.js';
import './mat3f64-DiVtVT5k.js';
import './mat4f64-D1udxz0O.js';
import './quatf64-BVXz_O4E.js';
import './computeTranslationToOriginAndRotation-DcQJIXld.js';
import './I3SBinaryReader-sl77ESRZ.js';
import './VertexAttribute-NSFkUlX8.js';
import './symbolColorUtils-DyFFeZsx.js';
import './orientedBoundingBox-B55R4C6x.js';
import './quat-Duo2HkLB.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var n$1,e$1;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32";}(n$1||(n$1={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished";}(e$1||(e$1={}));

function e(){return n||(n=new Promise((t=>__vitePreload(() => import('./i3s-DPeOV2nU.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url).then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)});delete n.then;})))).catch((t=>{throw t}))),n}function i(e){return n$2(`esri/libs/i3s/${e}`)}let n;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var o,r,a,d$1,c$1;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked";}(o||(o={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked";}(r||(r={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached";}(a||(a={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera";}(d$1||(d$1={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf";}(c$1||(c$1={}));

async function c(e){g=await _();const t=[e.geometryBuffer];return {result:E(g,e,t),transferList:t}}async function l(e){g=await _();const t=[e.geometryBuffer],{geometryBuffer:r}=e,o=r.byteLength,n=g._malloc(o),s=new Uint8Array(g.HEAPU8.buffer,n,o);s.set(new Uint8Array(r));const i=g.dracoDecompressPointCloudData(n,s.byteLength);if(g._free(n),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,f=i.positions.slice();return a&&t.push(a.buffer),t.push(f.buffer),{result:{positions:f,featureIds:a},transferList:t}}async function u(e){await _(),L(e);const t={buffer:e.buffer};return {result:t,transferList:[t.buffer]}}async function m(e){await _(),w(e);}async function y(e){g=await _(),g.setLegacySchema(e.context,e.jsonSchema);}async function p(n){const{localMatrix:s,origin:i,positions:a,vertexSpace:f,localMode:c}=n,l=f$1.fromJSON(n.inSpatialReference),u=f$1.fromJSON(n.outSpatialReference);let m;if("georeferenced"===f.type&&null==f.origin){const[{projectBuffer:e},{initializeProjection:t}]=await Promise.all([__vitePreload(() => import('./main-BhyDjZ0Q.js').then(n => n.qK),true?__vite__mapDeps([1,2,3]):void 0,import.meta.url),__vitePreload(() => import('./main-BhyDjZ0Q.js').then(n => n.qL),true?__vite__mapDeps([1,2,3]):void 0,import.meta.url)]);await t(l,u),m=new Float64Array(a.length),e(a,l,0,m,u,0,m.length/3);}else {const e="georeferenced"===f.type?i$1.fromJSON(f):a$1.fromJSON(f),{project:n}=await __vitePreload(async () => { const {project:n} = await import('./georeference-CuDRIcjx.js').then(n => n.g);return {project:n}},true?__vite__mapDeps([4,1,2,3,5,6,7,8,9,10,11,12,13,14]):void 0,import.meta.url);m=y$1(n({positions:a,transform:s?{localMatrix:s}:void 0,vertexSpace:e,inSpatialReference:l,outSpatialReference:u,localMode:c}));}const y=m.length,[p,d,b]=i;for(let e=0;e<y;e+=3)m[e]-=p,m[e+1]-=d,m[e+2]-=b;return {result:{projected:m,original:a},transferList:[m.buffer,a.buffer]}}async function d({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return n$3(r,t,e),s(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function b(e){I(e);}let h,g;function w(e){if(!g)return;const t=e.modifications,r=g._malloc(8*t.length),o=new Float64Array(g.HEAPU8.buffer,r,t.length);for(let n=0;n<t.length;++n)o[n]=t[n];g.setModifications(e.context,r,t.length,e.isGeodetic),g._free(r);}function E(e,t,r){const{context:o,localOrigin:n,globalTrafo:s,mbs:a,obbData:f,elevationOffset:c,geometryBuffer:l,geometryDescriptor:u,indexToVertexProjector:m,vertexToRenderProjector:y}=t,p=e._malloc(l.byteLength),d=33,b=e._malloc(d*Float64Array.BYTES_PER_ELEMENT),h=new Uint8Array(e.HEAPU8.buffer,p,l.byteLength);h.set(new Uint8Array(l));const g=new Float64Array(e.HEAPU8.buffer,b,d);S(g,n);let w=g.byteOffset+3*g.BYTES_PER_ELEMENT,E=new Float64Array(g.buffer,w);S(E,s),w+=16*g.BYTES_PER_ELEMENT,E=new Float64Array(g.buffer,w),S(E,a),w+=4*g.BYTES_PER_ELEMENT,f&&(E=new Float64Array(g.buffer,w),S(E,f));const A=u,L={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},I=e.process(o,!!t.obbData,p,h.byteLength,A,L,b,c,m,y,t.normalReferenceFrame);if(e._free(b),e._free(p),I.error.length>0)throw new Error(`i3s.wasm: ${I.error}`);if(I.discarded)return null;const j=I.componentOffsets.length>0?I.componentOffsets.slice():null,_=I.featureIds.length>0?I.featureIds.slice():null,x=I.anchorIds.length>0?Array.from(I.anchorIds):null,M=I.anchors.length>0?Array.from(I.anchors):null,P=I.interleavedVertedData.slice().buffer,U=I.indicesType===n$1.Int16?new Uint16Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/2).slice():new Uint32Array(I.indices.buffer,I.indices.byteOffset,I.indices.byteLength/4).slice(),O=I.positions.slice(),T=I.positionIndicesType===n$1.Int16?new Uint16Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/2).slice():new Uint32Array(I.positionIndices.buffer,I.positionIndices.byteOffset,I.positionIndices.byteLength/4).slice(),R={layout:t.layouts[0],interleavedVertexData:P,indices:U,hasColors:I.hasColors,hasModifications:I.hasModifications,positionData:{data:O,indices:T}};return _&&r.push(_.buffer),j&&r.push(j.buffer),r.push(P),r.push(U.buffer),r.push(O.buffer),r.push(T.buffer),{componentOffsets:j,featureIds:_,anchorIds:x,anchors:M,transformedGeometry:R,obb:I.obb}}function A(e){return 0===e?r.Unmodified:1===e?r.PotentiallyModified:2===e?r.Culled:r.Unknown}function L(e){if(!g)return;const{context:t,buffer:r}=e,o=g._malloc(r.byteLength),n=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(g.HEAPU8.buffer,o,n),i=new Float64Array(r);s.set(i),g.filterOBBs(t,o,n),i.set(s),g._free(o);}function I(e){g&&0===g.destroy(e)&&(g=null);}function S(e,t){for(let r=0;r<t.length;++r)e[r]=t[r];}async function j(){g||await _();}function _(){return g?Promise.resolve(g):(h||(h=e().then((e=>(g=e,h=null,g)))),h)}const x={transform:(e,t)=>g&&E(g,e,t),destroy:I};

export { b as destroyContext, l as dracoDecompressPointCloudData, u as filterObbsForModifications, L as filterObbsForModificationsSync, j as initialize, A as interpretObbModificationResults, c as process, p as project, y as setLegacySchema, m as setModifications, w as setModificationsSync, x as test, d as transformNormals };
