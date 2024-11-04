import { f7 as S } from "./main-DNcervVH.js";
const z = 512;
var P, f;
(function(x) {
  x[x.Unknown = 0] = "Unknown", x[x.Point = 1] = "Point", x[x.LineString = 2] = "LineString", x[x.Polygon = 3] = "Polygon";
})(P || (P = {}));
let g = class R {
  constructor(i, t) {
    this.x = i, this.y = t;
  }
  clone() {
    return new R(this.x, this.y);
  }
  equals(i, t) {
    return i === this.x && t === this.y;
  }
  isEqual(i) {
    return i.x === this.x && i.y === this.y;
  }
  setCoords(i, t) {
    return this.x = i, this.y = t, this;
  }
  normalize() {
    const i = this.x, t = this.y, s = Math.sqrt(i * i + t * t);
    return this.x /= s, this.y /= s, this;
  }
  rightPerpendicular() {
    const i = this.x;
    return this.x = this.y, this.y = -i, this;
  }
  leftPerpendicular() {
    const i = this.x;
    return this.x = -this.y, this.y = i, this;
  }
  move(i, t) {
    return this.x += i, this.y += t, this;
  }
  assign(i) {
    return this.x = i.x, this.y = i.y, this;
  }
  assignAdd(i, t) {
    return this.x = i.x + t.x, this.y = i.y + t.y, this;
  }
  assignSub(i, t) {
    return this.x = i.x - t.x, this.y = i.y - t.y, this;
  }
  rotate(i, t) {
    const s = this.x, h = this.y;
    return this.x = s * i - h * t, this.y = s * t + h * i, this;
  }
  scale(i) {
    return this.x *= i, this.y *= i, this;
  }
  length() {
    const i = this.x, t = this.y;
    return Math.sqrt(i * i + t * t);
  }
  sub(i) {
    return this.x -= i.x, this.y -= i.y, this;
  }
  add(i) {
    return this.x += i.x, this.y += i.y, this;
  }
  static distance(i, t) {
    const s = t.x - i.x, h = t.y - i.y;
    return Math.sqrt(s * s + h * h);
  }
  static add(i, t) {
    return new R(i.x + t.x, i.y + t.y);
  }
  static sub(i, t) {
    return new R(i.x - t.x, i.y - t.y);
  }
};
class v {
  constructor(i, t, s) {
    this.ratio = i, this.x = t, this.y = s;
  }
}
let H = class {
  constructor(i, t, s, h = 8, e = 8) {
    this._lines = [], this._starts = [], this.validateTessellation = !0, this._pixelRatio = h, this._pixelMargin = e, this._tileSize = z * h, this._dz = i, this._yPos = t, this._xPos = s;
  }
  setPixelMargin(i) {
    i !== this._pixelMargin && (this._pixelMargin = i, this.setExtent(this._extent));
  }
  setExtent(i) {
    this._extent = i, this._finalRatio = this._tileSize / i * (1 << this._dz);
    let t = this._pixelRatio * this._pixelMargin;
    t /= this._finalRatio;
    const s = i >> this._dz;
    t > s && (t = s), this._margin = t, this._xmin = s * this._xPos - t, this._ymin = s * this._yPos - t, this._xmax = this._xmin + s + 2 * t, this._ymax = this._ymin + s + 2 * t;
  }
  reset(i) {
    this._type = i, this._lines = [], this._starts = [], this._line = null, this._start = 0;
  }
  moveTo(i, t) {
    this._pushLine(), this._prevIsIn = this._isIn(i, t), this._moveTo(i, t, this._prevIsIn), this._prevPt = new g(i, t), this._firstPt = new g(i, t), this._dist = 0;
  }
  lineTo(i, t) {
    const s = this._isIn(i, t), h = new g(i, t), e = g.distance(this._prevPt, h);
    let n, l, _, r, d, m, y, p;
    if (s) this._prevIsIn ? this._lineTo(i, t, !0) : (n = this._prevPt, l = h, _ = this._intersect(l, n), this._start = this._dist + e * (1 - this._r), this._lineTo(_.x, _.y, !0), this._lineTo(l.x, l.y, !0));
    else if (this._prevIsIn) l = this._prevPt, n = h, _ = this._intersect(l, n), this._lineTo(_.x, _.y, !0), this._lineTo(n.x, n.y, !1);
    else {
      const a = this._prevPt, o = h;
      if (a.x <= this._xmin && o.x <= this._xmin || a.x >= this._xmax && o.x >= this._xmax || a.y <= this._ymin && o.y <= this._ymin || a.y >= this._ymax && o.y >= this._ymax) this._lineTo(o.x, o.y, !1);
      else {
        const c = [];
        if ((a.x < this._xmin && o.x > this._xmin || a.x > this._xmin && o.x < this._xmin) && (r = (this._xmin - a.x) / (o.x - a.x), p = a.y + r * (o.y - a.y), p <= this._ymin ? m = !1 : p >= this._ymax ? m = !0 : c.push(new v(r, this._xmin, p))), (a.x < this._xmax && o.x > this._xmax || a.x > this._xmax && o.x < this._xmax) && (r = (this._xmax - a.x) / (o.x - a.x), p = a.y + r * (o.y - a.y), p <= this._ymin ? m = !1 : p >= this._ymax ? m = !0 : c.push(new v(r, this._xmax, p))), (a.y < this._ymin && o.y > this._ymin || a.y > this._ymin && o.y < this._ymin) && (r = (this._ymin - a.y) / (o.y - a.y), y = a.x + r * (o.x - a.x), y <= this._xmin ? d = !1 : y >= this._xmax ? d = !0 : c.push(new v(r, y, this._ymin))), (a.y < this._ymax && o.y > this._ymax || a.y > this._ymax && o.y < this._ymax) && (r = (this._ymax - a.y) / (o.y - a.y), y = a.x + r * (o.x - a.x), y <= this._xmin ? d = !1 : y >= this._xmax ? d = !0 : c.push(new v(r, y, this._ymax))), c.length === 0) d ? m ? this._lineTo(this._xmax, this._ymax, !0) : this._lineTo(this._xmax, this._ymin, !0) : m ? this._lineTo(this._xmin, this._ymax, !0) : this._lineTo(this._xmin, this._ymin, !0);
        else if (c.length > 1 && c[0].ratio > c[1].ratio) this._start = this._dist + e * c[1].ratio, this._lineTo(c[1].x, c[1].y, !0), this._lineTo(c[0].x, c[0].y, !0);
        else {
          this._start = this._dist + e * c[0].ratio;
          for (let u = 0; u < c.length; u++) this._lineTo(c[u].x, c[u].y, !0);
        }
        this._lineTo(o.x, o.y, !1);
      }
    }
    this._dist += e, this._prevIsIn = s, this._prevPt = h;
  }
  close() {
    if (this._line.length > 2) {
      const i = this._firstPt, t = this._prevPt;
      i.x === t.x && i.y === t.y || this.lineTo(i.x, i.y);
      const s = this._line;
      let h = s.length;
      for (; h >= 4 && (s[0].x === s[1].x && s[0].x === s[h - 2].x || s[0].y === s[1].y && s[0].y === s[h - 2].y); ) s.pop(), s[0].x = s[h - 2].x, s[0].y = s[h - 2].y, --h;
    }
  }
  result(i = !0) {
    return this._pushLine(), this._lines.length === 0 ? null : (this._type === P.Polygon && i && D.simplify(this._tileSize, this._margin * this._finalRatio, this._lines), this._lines);
  }
  resultWithStarts() {
    if (this._type !== P.LineString) throw new Error("Only valid for lines");
    this._pushLine();
    const i = this._lines, t = i.length;
    if (t === 0) return null;
    const s = [];
    for (let h = 0; h < t; h++) s.push({ line: i[h], start: this._starts[h] || 0 });
    return s;
  }
  _isIn(i, t) {
    return i >= this._xmin && i <= this._xmax && t >= this._ymin && t <= this._ymax;
  }
  _intersect(i, t) {
    let s, h, e;
    if (t.x >= this._xmin && t.x <= this._xmax) h = t.y <= this._ymin ? this._ymin : this._ymax, e = (h - i.y) / (t.y - i.y), s = i.x + e * (t.x - i.x);
    else if (t.y >= this._ymin && t.y <= this._ymax) s = t.x <= this._xmin ? this._xmin : this._xmax, e = (s - i.x) / (t.x - i.x), h = i.y + e * (t.y - i.y);
    else {
      h = t.y <= this._ymin ? this._ymin : this._ymax, s = t.x <= this._xmin ? this._xmin : this._xmax;
      const n = (s - i.x) / (t.x - i.x), l = (h - i.y) / (t.y - i.y);
      n < l ? (e = n, h = i.y + n * (t.y - i.y)) : (e = l, s = i.x + l * (t.x - i.x));
    }
    return this._r = e, new g(s, h);
  }
  _pushLine() {
    this._line && (this._type === P.Point ? this._line.length > 0 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === P.LineString ? this._line.length > 1 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === P.Polygon && this._line.length > 3 && (this._lines.push(this._line), this._starts.push(this._start))), this._line = [], this._start = 0;
  }
  _moveTo(i, t, s) {
    this._type !== P.Polygon ? s && (i = Math.round((i - (this._xmin + this._margin)) * this._finalRatio), t = Math.round((t - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new g(i, t))) : (s || (i < this._xmin && (i = this._xmin), i > this._xmax && (i = this._xmax), t < this._ymin && (t = this._ymin), t > this._ymax && (t = this._ymax)), i = Math.round((i - (this._xmin + this._margin)) * this._finalRatio), t = Math.round((t - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new g(i, t)), this._isH = !1, this._isV = !1);
  }
  _lineTo(i, t, s) {
    let h, e;
    if (this._type !== P.Polygon) if (s) {
      if (i = Math.round((i - (this._xmin + this._margin)) * this._finalRatio), t = Math.round((t - (this._ymin + this._margin)) * this._finalRatio), this._line.length > 0 && (h = this._line[this._line.length - 1], h.equals(i, t))) return;
      this._line.push(new g(i, t));
    } else this._line && this._line.length > 0 && this._pushLine();
    else if (s || (i < this._xmin && (i = this._xmin), i > this._xmax && (i = this._xmax), t < this._ymin && (t = this._ymin), t > this._ymax && (t = this._ymax)), i = Math.round((i - (this._xmin + this._margin)) * this._finalRatio), t = Math.round((t - (this._ymin + this._margin)) * this._finalRatio), this._line && this._line.length > 0) {
      h = this._line[this._line.length - 1];
      const n = h.x === i, l = h.y === t;
      if (n && l) return;
      this._isH && n || this._isV && l ? (h.x = i, h.y = t, e = this._line[this._line.length - 2], e.x === i && e.y === t ? (this._line.pop(), this._line.length <= 1 ? (this._isH = !1, this._isV = !1) : (e = this._line[this._line.length - 2], this._isH = e.x === i, this._isV = e.y === t)) : (this._isH = e.x === i, this._isV = e.y === t)) : (this._line.push(new g(i, t)), this._isH = n, this._isV = l);
    } else this._line.push(new g(i, t));
  }
};
class A {
  setExtent(i) {
    this._ratio = i === 4096 ? 1 : 4096 / i;
  }
  get validateTessellation() {
    return this._ratio < 1;
  }
  reset(i) {
    this._lines = [], this._line = null;
  }
  moveTo(i, t) {
    this._line && this._lines.push(this._line), this._line = [];
    const s = this._ratio;
    this._line.push(new g(i * s, t * s));
  }
  lineTo(i, t) {
    const s = this._ratio;
    this._line.push(new g(i * s, t * s));
  }
  close() {
    const i = this._line;
    i && !i[0].isEqual(i[i.length - 1]) && i.push(i[0]);
  }
  result() {
    return this._line && this._lines.push(this._line), this._lines.length === 0 ? null : this._lines;
  }
}
(function(x) {
  x[x.sideLeft = 0] = "sideLeft", x[x.sideRight = 1] = "sideRight", x[x.sideTop = 2] = "sideTop", x[x.sideBottom = 3] = "sideBottom";
})(f || (f = {}));
let D = class T {
  static simplify(i, t, s) {
    if (!s) return;
    const h = -t, e = i + t, n = -t, l = i + t, _ = [], r = [], d = s.length;
    for (let y = 0; y < d; ++y) {
      const p = s[y];
      if (!p || p.length < 2) continue;
      let a, o = p[0];
      const c = p.length;
      for (let u = 1; u < c; ++u) a = p[u], o.x === a.x && (o.x <= h && (o.y > a.y ? (_.push(y), _.push(u), _.push(f.sideLeft), _.push(-1)) : (r.push(y), r.push(u), r.push(f.sideLeft), r.push(-1))), o.x >= e && (o.y < a.y ? (_.push(y), _.push(u), _.push(f.sideRight), _.push(-1)) : (r.push(y), r.push(u), r.push(f.sideRight), r.push(-1)))), o.y === a.y && (o.y <= n && (o.x < a.x ? (_.push(y), _.push(u), _.push(f.sideTop), _.push(-1)) : (r.push(y), r.push(u), r.push(f.sideTop), r.push(-1))), o.y >= l && (o.x > a.x ? (_.push(y), _.push(u), _.push(f.sideBottom), _.push(-1)) : (r.push(y), r.push(u), r.push(f.sideBottom), r.push(-1)))), o = a;
    }
    if (_.length === 0 || r.length === 0) return;
    T.fillParent(s, r, _), T.fillParent(s, _, r);
    const m = [];
    T.calcDeltas(m, r, _), T.calcDeltas(m, _, r), T.addDeltas(m, s);
  }
  static fillParent(i, t, s) {
    const h = s.length, e = t.length;
    for (let n = 0; n < e; n += 4) {
      const l = t[n], _ = t[n + 1], r = t[n + 2], d = i[l][_ - 1], m = i[l][_];
      let y = 8092, p = -1;
      for (let a = 0; a < h; a += 4) {
        if (s[a + 2] !== r) continue;
        const o = s[a], c = s[a + 1], u = i[o][c - 1], w = i[o][c];
        switch (r) {
          case f.sideLeft:
          case f.sideRight:
            if (I(d.y, u.y, w.y) && I(m.y, u.y, w.y)) {
              const M = Math.abs(w.y - u.y);
              M < y && (y = M, p = a);
            }
            break;
          case f.sideTop:
          case f.sideBottom:
            if (I(d.x, u.x, w.x) && I(m.x, u.x, w.x)) {
              const M = Math.abs(w.x - u.x);
              M < y && (y = M, p = a);
            }
        }
      }
      t[n + 3] = p;
    }
  }
  static calcDeltas(i, t, s) {
    const h = t.length;
    for (let e = 0; e < h; e += 4) {
      const n = [], l = T.calcDelta(e, t, s, n);
      i.push(t[e]), i.push(t[e + 1]), i.push(t[e + 2]), i.push(l);
    }
  }
  static calcDelta(i, t, s, h) {
    const e = t[i + 3];
    if (e === -1) return 0;
    const n = h.length;
    return n > 1 && h[n - 2] === e ? 0 : (h.push(e), T.calcDelta(e, s, t, h) + 1);
  }
  static addDeltas(i, t) {
    const s = i.length;
    let h = 0;
    for (let e = 0; e < s; e += 4) {
      const n = i[e + 3];
      n > h && (h = n);
    }
    for (let e = 0; e < s; e += 4) {
      const n = t[i[e]], l = i[e + 1], _ = h - i[e + 3];
      switch (i[e + 2]) {
        case f.sideLeft:
          n[l - 1].x -= _, n[l].x -= _, l === 1 && (n[n.length - 1].x -= _), l === n.length - 1 && (n[0].x -= _);
          break;
        case f.sideRight:
          n[l - 1].x += _, n[l].x += _, l === 1 && (n[n.length - 1].x += _), l === n.length - 1 && (n[0].x += _);
          break;
        case f.sideTop:
          n[l - 1].y -= _, n[l].y -= _, l === 1 && (n[n.length - 1].y -= _), l === n.length - 1 && (n[0].y -= _);
          break;
        case f.sideBottom:
          n[l - 1].y += _, n[l].y += _, l === 1 && (n[n.length - 1].y += _), l === n.length - 1 && (n[0].y += _);
      }
    }
  }
};
const I = (x, i, t) => x >= i && x <= t || x >= t && x <= i, O = Number.POSITIVE_INFINITY, L = Math.PI, U = 2 * L, N = 128 / L, $ = 256 / 360, F = L / 180, q = 1 / Math.LN2;
function b(x, i) {
  return (x %= i) >= 0 ? x : x + i;
}
function W(x) {
  return b(x * N, 256);
}
function Y(x) {
  return b(x * $, 256);
}
function j(x) {
  return Math.log(x) * q;
}
function G(x, i, t) {
  return x * (1 - t) + i * t;
}
const E = 8, V = 14, k = 16;
function J(x) {
  return E + Math.max((x - V) * k, 0);
}
function K(x, i, t) {
  let s, h, e, n = 0;
  for (const l of t) {
    s = l.length;
    for (let _ = 1; _ < s; ++_)
      h = l[_ - 1], e = l[_], h.y > i != e.y > i && ((e.x - h.x) * (i - h.y) - (e.y - h.y) * (x - h.x) > 0 ? n++ : n--);
  }
  return n !== 0;
}
function Q(x, i, t, s) {
  let h, e, n, l;
  const _ = s * s;
  for (const r of t) {
    const d = r.length;
    if (!(d < 2)) {
      h = r[0].x, e = r[0].y;
      for (let m = 1; m < d; ++m) {
        if (n = r[m].x, l = r[m].y, S(x, i, h, e, n, l) < _) return !0;
        h = n, e = l;
      }
    }
  }
  return !1;
}
function X(x, i, t, s, h, e, n) {
  const l = Math.max(s, Math.min(i, e)) - i, _ = Math.max(h, Math.min(t, n)) - t;
  return l * l + _ * _ <= x * x;
}
function Z(x, i) {
  if (i === 0 || Number.isNaN(i)) return x;
  const t = [], s = new g(0, 0), h = new g(0, 0), e = new g(0, 0);
  for (let n = 0; n < x.length; n++) {
    const l = x[n], _ = [];
    for (let r = 0; r < l.length; r++) {
      const d = l[r - 1], m = l[r], y = l[r + 1];
      r === 0 ? s.setCoords(0, 0) : s.assignSub(m, d).normalize().rightPerpendicular(), r === l.length - 1 ? h.setCoords(0, 0) : h.assignSub(y, m).normalize().rightPerpendicular(), e.assignAdd(s, h).normalize();
      const p = e.x * h.x + e.y * h.y;
      p !== 0 && e.scale(1 / p), _.push(g.add(m, e.scale(i)));
    }
    t.push(_);
  }
  return t;
}
function ii(x, i, t, s) {
  const h = new g(x[0], x[1]);
  if (h.scale(s), i === "viewport") {
    const e = -t * (Math.PI / 180), n = Math.cos(e), l = Math.sin(e);
    h.rotate(n, l);
  }
  return h;
}
export {
  K as I,
  Q as N,
  Z as P,
  A as _,
  b as a,
  ii as b,
  j as c,
  J as d,
  U as e,
  W as f,
  H as g,
  g as h,
  P as i,
  Y as l,
  L as o,
  G as p,
  O as r,
  F as s,
  X as w
};
//# sourceMappingURL=GeometryUtils-DuHbAiL1.js.map
