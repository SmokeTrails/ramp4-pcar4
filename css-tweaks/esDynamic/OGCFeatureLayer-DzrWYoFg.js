import { N as t, O as r, P as O, eV as B, Y as N, bh as m, gr as L, s as R, ey as Z, ex as H, g0 as U, g1 as V, dV as z, f$ as J, g2 as W, dZ as k, dX as K, dY as Y, dW as X, d_ as ee, g3 as b, g4 as te, f5 as w, fZ as se, eF as re, dH as oe, aU as ie, dI as x, g7 as ne, g8 as pe, g6 as ae, e1 as le, ga as ue, Z as de, gb as ce, gc as ye, gd as he, gs as fe, e2 as ge, gf as me, e8 as ve } from "./main-DNcervVH.js";
import { R as Se, x as F, C as I, P as Ce, O as Re, N as be, q as we, v as xe, k as Fe } from "./ogcFeatureUtils-Bst4X4nu.js";
let d = class extends B {
  constructor() {
    super(...arguments), this.featureDefinition = null, this.type = "ogc-feature";
  }
  load(e) {
    return this.addResolvingPromise(this._loadOGCServices(this.layer, e)), this.when();
  }
  getSource() {
    const { featureDefinition: { collection: e, layerDefinition: o, spatialReference: i, supportedCrs: n }, layer: { apiKey: l, customParameters: a, effectiveMaxRecordCount: p } } = this;
    return { type: "ogc-source", collection: e, layerDefinition: o, maxRecordCount: p, queryParameters: { apiKey: l, customParameters: a }, spatialReference: i, supportedCrs: n };
  }
  queryExtent(e, o = {}) {
    return null;
  }
  queryFeatureCount(e, o = {}) {
    return null;
  }
  queryFeatures(e, o = {}) {
    return this.queryFeaturesJSON(e, o).then((i) => N.fromJSON(i));
  }
  queryFeaturesJSON(e, o = {}) {
    const i = this.getSource();
    return this.load(o).then(() => Se(i, e, o));
  }
  queryObjectIds(e, o = {}) {
    return null;
  }
  serviceSupportsSpatialReference(e) {
    return !(!e.isWGS84 && !e.isWebMercator) || !!this.featureDefinition.supportedCrs[e.wkid];
  }
  _conformsToType(e, o) {
    const i = new RegExp(`^${o}$`, "i");
    return e.conformsTo.some((n) => i.test(n)) ?? !1;
  }
  _getCapabilities(e, o) {
    return { analytics: { supportsCacheHint: !1 }, attachment: null, data: { isVersioned: !1, supportsAttachment: !1, supportsM: !1, supportsZ: e }, metadata: { supportsAdvancedFieldProperties: !1 }, operations: { supportsCalculate: !1, supportsTruncate: !1, supportsValidateSql: !1, supportsAdd: !1, supportsDelete: !1, supportsEditing: !1, supportsChangeTracking: !1, supportsQuery: !1, supportsQueryAnalytics: !1, supportsQueryAttachments: !1, supportsQueryTopFeatures: !1, supportsResizeAttachments: !1, supportsSync: !1, supportsUpdate: !1, supportsExceedsLimitStatistics: !1, supportsAsyncConvert3D: !1 }, query: { maxRecordCount: o, maxRecordCountFactor: void 0, standardMaxRecordCount: void 0, supportsCacheHint: !1, supportsCentroid: !1, supportsDisjointSpatialRelationship: !1, supportsDistance: !1, supportsDistinct: !1, supportsExtent: !1, supportsFormatPBF: !1, supportsGeometryProperties: !1, supportsHavingClause: !1, supportsHistoricMoment: !1, supportsMaxRecordCountFactor: !1, supportsOrderBy: !1, supportsPagination: !1, supportsPercentileStatistics: !1, supportsQuantization: !1, supportsQuantizationEditMode: !1, supportsQueryByAnonymous: !1, supportsQueryByOthers: !1, supportsQueryGeometry: !1, supportsResultType: !1, supportsStandardizedQueriesOnly: !1, supportsTopFeaturesQuery: !1, supportsStatistics: !1, supportsSpatialAggregationStatistics: !1, supportedSpatialAggregationStatistics: { envelope: !1, centroid: !1, convexHull: !1 }, supportsDefaultSpatialReference: !1, supportsFullTextSearch: !1, supportsCompactGeometry: !1, supportsSqlExpression: !1, tileMaxRecordCount: void 0 }, queryRelated: { supportsCount: !1, supportsOrderBy: !1, supportsPagination: !1, supportsCacheHint: !1 }, queryTopFeatures: { supportsCacheHint: !1 }, editing: { supportsDeleteByAnonymous: !1, supportsDeleteByOthers: !1, supportsGeometryUpdate: !1, supportsGlobalId: !1, supportsReturnServiceEditsInSourceSpatialReference: !1, supportsRollbackOnFailure: !1, supportsUpdateByAnonymous: !1, supportsUpdateByOthers: !1, supportsUploadWithItemId: !1, supportsUpdateWithoutM: !1, supportsAsyncApplyEdits: !1, zDefault: void 0 } };
  }
  _getMaxRecordCount(e) {
    const o = e?.components?.parameters;
    return o?.limit?.schema?.maximum ?? o?.limitFeatures?.schema?.maximum;
  }
  _getStorageSpatialReference(e) {
    const o = e.storageCrs ?? F, i = I(o);
    return i == null ? m.WGS84 : new m({ wkid: i });
  }
  _getSupportedSpatialReferences(e, o) {
    const i = "#/crs", n = e.crs ?? [F], l = n.includes(i) ? n.filter((p) => p !== i).concat(o.crs ?? []) : n, a = /^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;
    return l.filter((p) => !a.test(p));
  }
  async _loadOGCServices(e, o) {
    const i = o != null ? o.signal : null, { apiKey: n, collectionId: l, customParameters: a, fields: p, geometryType: $, hasZ: D, objectIdField: T, timeInfo: j, url: P } = e, _ = { fields: p?.map((u) => u.toJSON()), geometryType: L.toJSON($), hasZ: D ?? !1, objectIdField: T, timeInfo: j?.toJSON() }, c = { apiKey: n, customParameters: a, signal: i }, h = await Ce(P, c), [v, S] = await Promise.all([Re(h, c), be(h, c)]);
    if (!this._conformsToType(v, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")) throw new R("ogc-feature-layer:no-geojson-support", "Server does not support geojson");
    const y = S.collections.find(({ id: u }) => u === l);
    if (!y) throw new R("ogc-feature-layer:collection-not-found", "Server does not contain the named collection");
    const E = this._conformsToType(v, "http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30") ? await we(h, c) : null, C = await xe(y, _, c), q = this._getMaxRecordCount(E), A = this._getCapabilities(C.hasZ, q), G = this._getStorageSpatialReference(y).toJSON(), M = this._getSupportedSpatialReferences(y, S), Q = new RegExp(`^${Fe}`, "i"), f = {};
    for (const u of M) {
      const g = I(u);
      g != null && (f[g] || (f[g] = u.replace(Q, "")));
    }
    this.featureDefinition = { capabilities: A, collection: y, layerDefinition: C, spatialReference: G, supportedCrs: f };
  }
};
t([r()], d.prototype, "featureDefinition", void 0), t([r({ constructOnly: !0 })], d.prototype, "layer", void 0), t([r()], d.prototype, "type", void 0), d = t([O("esri.layers.graphics.sources.OGCFeatureSource")], d);
const Ie = me();
let s = class extends Z(H(U(V(z(J(W(k(K(Y(X(ee(ve)))))))))))) {
  constructor(e) {
    super(e), this.capabilities = null, this.collectionId = null, this.copyright = null, this.description = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelingInfo = null, this.labelsVisible = !0, this.legendEnabled = !0, this.maxRecordCount = null, this.objectIdField = null, this.operationalLayerType = "OGCFeatureLayer", this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new d({ layer: this }), this.spatialReference = null, this.title = null, this.type = "ogc-feature", this.typeIdField = null, this.types = null, this.url = null;
  }
  destroy() {
    this.source?.destroy();
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["OGCFeatureServer"] }, e).then(() => this._fetchService(e))), this.when();
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get effectiveMaxRecordCount() {
    return this.maxRecordCount ?? this.capabilities?.query.maxRecordCount ?? 5e3;
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  set renderer(e) {
    b(e, this.fieldsIndex), this._set("renderer", e);
  }
  on(e, o) {
    return super.on(e, o);
  }
  createPopupTemplate(e) {
    return te(this, e);
  }
  createQuery() {
    return new w();
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, o) {
    let i, n = !1;
    const l = o?.feature?.attributes, a = this.typeIdField && l?.[this.typeIdField];
    return a != null && this.types && (n = this.types.some((p) => p.id == a && (i = p.domains?.[e], i?.type === "inherited" && (i = this._getLayerDomain(e)), !0))), n || i || (i = this._getLayerDomain(e)), i;
  }
  queryFeatures(e, o) {
    return this.load().then(() => this.source.queryFeatures(w.from(e) || this.createQuery(), o)).then((i) => (i?.features?.forEach((n) => {
      n.layer = n.sourceLayer = this;
    }), i));
  }
  serviceSupportsSpatialReference(e) {
    return this.source?.serviceSupportsSpatialReference(e) ?? !1;
  }
  async _fetchService(e) {
    await this.source.load(e), this.read(this.source.featureDefinition, { origin: "service" }), b(this.renderer, this.fieldsIndex), se(this.timeInfo, this.fieldsIndex);
  }
  _getLayerDomain(e) {
    if (!this.fields) return null;
    for (const o of this.fields) if (o.name === e && o.domain) return o.domain;
    return null;
  }
};
t([r({ readOnly: !0, json: { origins: { service: { read: !0 } } } })], s.prototype, "capabilities", void 0), t([r({ type: String, json: { write: !0 } })], s.prototype, "collectionId", void 0), t([r({ type: String })], s.prototype, "copyright", void 0), t([r({ readOnly: !0 })], s.prototype, "defaultPopupTemplate", null), t([r({ readOnly: !0, type: String, json: { origins: { service: { name: "collection.description" } } } })], s.prototype, "description", void 0), t([r({ type: String })], s.prototype, "displayField", void 0), t([r({ type: Number })], s.prototype, "effectiveMaxRecordCount", null), t([r(re)], s.prototype, "elevationInfo", void 0), t([r({ type: [oe], json: { origins: { service: { name: "layerDefinition.fields" } } } })], s.prototype, "fields", void 0), t([r(Ie.fieldsIndex)], s.prototype, "fieldsIndex", void 0), t([r({ readOnly: !0, type: ie, json: { origins: { service: { name: "layerDefinition.extent" } } } })], s.prototype, "fullExtent", void 0), t([r({ type: x.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: x.read } } } } })], s.prototype, "geometryType", void 0), t([r({ type: Boolean, json: { origins: { service: { name: "layerDefinition.hasZ" } } } })], s.prototype, "hasZ", void 0), t([r({ type: Boolean, readOnly: !0 })], s.prototype, "isTable", null), t([r({ type: [ne], json: { origins: { "web-document": { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: pe }, write: !0 } } } })], s.prototype, "labelingInfo", void 0), t([r(ae)], s.prototype, "labelsVisible", void 0), t([r(le)], s.prototype, "legendEnabled", void 0), t([r({ type: Number })], s.prototype, "maxRecordCount", void 0), t([r({ type: String, json: { origins: { service: { name: "layerDefinition.objectIdField" } } } })], s.prototype, "objectIdField", void 0), t([r({ type: ["OGCFeatureLayer"] })], s.prototype, "operationalLayerType", void 0), t([r(ue)], s.prototype, "popupEnabled", void 0), t([r({ type: de, json: { name: "popupInfo", write: !0 } })], s.prototype, "popupTemplate", void 0), t([r({ types: ce, json: { origins: { service: { name: "layerDefinition.drawingInfo.renderer", write: !1 }, "web-scene": { types: ye, name: "layerDefinition.drawingInfo.renderer", write: !0 } }, name: "layerDefinition.drawingInfo.renderer", write: !0 } })], s.prototype, "renderer", null), t([r(he)], s.prototype, "screenSizePerspectiveEnabled", void 0), t([r({ readOnly: !0 })], s.prototype, "source", void 0), t([r({ readOnly: !0, type: m, json: { origins: { service: { read: !0 } } } })], s.prototype, "spatialReference", void 0), t([r({ type: String, json: { write: { enabled: !0, ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "collection.title" } } } })], s.prototype, "title", void 0), t([r({ readOnly: !0, json: { read: !1 } })], s.prototype, "type", void 0), t([r({ type: String, readOnly: !0 })], s.prototype, "typeIdField", void 0), t([r({ type: [fe] })], s.prototype, "types", void 0), t([r(ge)], s.prototype, "url", void 0), s = t([O("esri.layers.OGCFeatureLayer")], s);
const De = s;
export {
  De as default
};
//# sourceMappingURL=OGCFeatureLayer-DzrWYoFg.js.map
