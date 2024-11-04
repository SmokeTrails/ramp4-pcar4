import { N as s, P as i } from "./main-Bh1f0za8.js";
import { E as a, a as h, R as o } from "./Container-DgONJXRm.js";
import { i as n } from "./AGraphicContainer-Ie5A1BVp.js";
let t = class extends n {
  get hasHighlight() {
    return this.children.some((e) => e.hasData);
  }
  renderChildren(e) {
    this.attributeView.update(), e.drawPhase === a.HIGHLIGHT && this.children.some((r) => r.hasData) && (super.renderChildren(e), e.context.setColorMask(!0, !0, !0, !0), h(e, !0, (r) => {
      this._renderChildren(r, o.All);
    }));
  }
};
t = s([i("esri.views.2d.layers.support.HighlightGraphicContainer")], t);
const m = t;
export {
  m as h
};
//# sourceMappingURL=HighlightGraphicContainer-TNKRQc2r.js.map
