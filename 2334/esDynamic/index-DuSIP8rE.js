import { a as o } from "./fabric-BIi096bK.js";
import { bx as n } from "./main-Bh1f0za8.js";
class m extends n {
  get config() {
    return this.$iApi.fixture.get("export").config?.map;
  }
  async make(e) {
    const a = await this.$iApi.geo.map.takeScreenshot({
      quality: 1,
      format: "png"
    }), t = new Image();
    t.src = a.dataUrl;
    const i = await new Promise((r) => t.onload = () => r(t));
    return new o.fabric.Image(i, e);
  }
}
export {
  m as default
};
//# sourceMappingURL=index-DuSIP8rE.js.map
