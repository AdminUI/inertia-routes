import Xt, { reactive as en, toValue as rn, computed as tn } from "vue";
var Hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nn(a) {
  if (a.__esModule) return a;
  var r = a.default;
  if (typeof r == "function") {
    var n = function o() {
      return this instanceof o ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(a).forEach(function(o) {
    var p = Object.getOwnPropertyDescriptor(a, o);
    Object.defineProperty(n, o, p.get ? p : {
      enumerable: !0,
      get: function() {
        return a[o];
      }
    });
  }), n;
}
var Be, zr;
function be() {
  return zr || (zr = 1, Be = TypeError), Be;
}
const an = {}, on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: an
}, Symbol.toStringTag, { value: "Module" })), un = /* @__PURE__ */ nn(on);
var Ue, kr;
function _e() {
  if (kr) return Ue;
  kr = 1;
  var a = typeof Map == "function" && Map.prototype, r = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = a && r && typeof r.get == "function" ? r.get : null, o = a && Map.prototype.forEach, p = typeof Set == "function" && Set.prototype, s = Object.getOwnPropertyDescriptor && p ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, S = p && s && typeof s.get == "function" ? s.get : null, y = p && Set.prototype.forEach, A = typeof WeakMap == "function" && WeakMap.prototype, m = A ? WeakMap.prototype.has : null, d = typeof WeakSet == "function" && WeakSet.prototype, h = d ? WeakSet.prototype.has : null, g = typeof WeakRef == "function" && WeakRef.prototype, f = g ? WeakRef.prototype.deref : null, c = Boolean.prototype.valueOf, b = Object.prototype.toString, i = Function.prototype.toString, u = String.prototype.match, l = String.prototype.slice, w = String.prototype.replace, v = String.prototype.toUpperCase, O = String.prototype.toLowerCase, E = RegExp.prototype.test, P = Array.prototype.concat, _ = Array.prototype.join, D = Array.prototype.slice, $ = Math.floor, M = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, R = Object.getOwnPropertySymbols, G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, U = typeof Symbol == "function" && typeof Symbol.iterator == "object", k = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === U || !0) ? Symbol.toStringTag : null, ee = Object.prototype.propertyIsEnumerable, re = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
    return e.__proto__;
  } : null);
  function x(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || E.call(/e/, t))
      return t;
    var F = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == "number") {
      var T = e < 0 ? -$(-e) : $(e);
      if (T !== e) {
        var C = String(T), q = l.call(t, C.length + 1);
        return w.call(C, F, "$&_") + "." + w.call(w.call(q, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return w.call(t, F, "$&_");
  }
  var V = un, te = V.custom, pe = j(te) ? te : null, ae = {
    __proto__: null,
    double: '"',
    single: "'"
  }, oe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Ue = function e(t, F, T, C) {
    var q = F || {};
    if (z(q, "quoteStyle") && !z(ae, q.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (z(q, "maxStringLength") && (typeof q.maxStringLength == "number" ? q.maxStringLength < 0 && q.maxStringLength !== 1 / 0 : q.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ce = z(q, "customInspect") ? q.customInspect : !0;
    if (typeof ce != "boolean" && ce !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (z(q, "indent") && q.indent !== null && q.indent !== "	" && !(parseInt(q.indent, 10) === q.indent && q.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (z(q, "numericSeparator") && typeof q.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var ye = q.numericSeparator;
    if (typeof t > "u")
      return "undefined";
    if (t === null)
      return "null";
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "string")
      return Mr(t, q);
    if (typeof t == "number") {
      if (t === 0)
        return 1 / 0 / t > 0 ? "0" : "-0";
      var K = String(t);
      return ye ? x(t, K) : K;
    }
    if (typeof t == "bigint") {
      var se = String(t) + "n";
      return ye ? x(t, se) : se;
    }
    var Ie = typeof q.depth > "u" ? 5 : q.depth;
    if (typeof T > "u" && (T = 0), T >= Ie && Ie > 0 && typeof t == "object")
      return ue(t) ? "[Array]" : "[Object]";
    var me = Jt(q, T);
    if (typeof C > "u")
      C = [];
    else if (le(C, t) >= 0)
      return "[Circular]";
    function X(Se, Re, Yt) {
      if (Re && (C = D.call(C), C.push(Re)), Yt) {
        var jr = {
          depth: q.depth
        };
        return z(q, "quoteStyle") && (jr.quoteStyle = q.quoteStyle), e(Se, jr, T + 1, C);
      }
      return e(Se, q, T + 1, C);
    }
    if (typeof t == "function" && !W(t)) {
      var Tr = de(t), Cr = Ee(t, X);
      return "[Function" + (Tr ? ": " + Tr : " (anonymous)") + "]" + (Cr.length > 0 ? " { " + _.call(Cr, ", ") + " }" : "");
    }
    if (j(t)) {
      var Br = U ? w.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : G.call(t);
      return typeof t == "object" && !U ? Oe(Br) : Br;
    }
    if (Vt(t)) {
      for (var Ae = "<" + O.call(String(t.nodeName)), Fe = t.attributes || [], Pe = 0; Pe < Fe.length; Pe++)
        Ae += " " + Fe[Pe].name + "=" + ie(ne(Fe[Pe].value), "double", q);
      return Ae += ">", t.childNodes && t.childNodes.length && (Ae += "..."), Ae += "</" + O.call(String(t.nodeName)) + ">", Ae;
    }
    if (ue(t)) {
      if (t.length === 0)
        return "[]";
      var De = Ee(t, X);
      return me && !Qt(De) ? "[" + xe(De, me) + "]" : "[ " + _.call(De, ", ") + " ]";
    }
    if (I(t)) {
      var Me = Ee(t, X);
      return !("cause" in Error.prototype) && "cause" in t && !ee.call(t, "cause") ? "{ [" + String(t) + "] " + _.call(P.call("[cause]: " + X(t.cause), Me), ", ") + " }" : Me.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + _.call(Me, ", ") + " }";
    }
    if (typeof t == "object" && ce) {
      if (pe && typeof t[pe] == "function" && V)
        return V(t, { depth: Ie - T });
      if (ce !== "symbol" && typeof t.inspect == "function")
        return t.inspect();
    }
    if (Y(t)) {
      var Ur = [];
      return o && o.call(t, function(Se, Re) {
        Ur.push(X(Re, t, !0) + " => " + X(Se, t));
      }), Nr("Map", n.call(t), Ur, me);
    }
    if (ge(t)) {
      var Lr = [];
      return y && y.call(t, function(Se) {
        Lr.push(X(Se, t));
      }), Nr("Set", S.call(t), Lr, me);
    }
    if (he(t))
      return qe("WeakMap");
    if (kt(t))
      return qe("WeakSet");
    if (ve(t))
      return qe("WeakRef");
    if (N(t))
      return Oe(X(Number(t)));
    if (J(t))
      return Oe(X(M.call(t)));
    if (L(t))
      return Oe(c.call(t));
    if (B(t))
      return Oe(X(String(t)));
    if (typeof window < "u" && t === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && t === globalThis || typeof Hr < "u" && t === Hr)
      return "{ [object globalThis] }";
    if (!fe(t) && !W(t)) {
      var Ne = Ee(t, X), Wr = re ? re(t) === Object.prototype : t instanceof Object || t.constructor === Object, Te = t instanceof Object ? "" : "null prototype", Gr = !Wr && k && Object(t) === t && k in t ? l.call(Z(t), 8, -1) : Te ? "Object" : "", Zt = Wr || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", Ce = Zt + (Gr || Te ? "[" + _.call(P.call([], Gr || [], Te || []), ": ") + "] " : "");
      return Ne.length === 0 ? Ce + "{}" : me ? Ce + "{" + xe(Ne, me) + "}" : Ce + "{ " + _.call(Ne, ", ") + " }";
    }
    return String(t);
  };
  function ie(e, t, F) {
    var T = F.quoteStyle || t, C = ae[T];
    return C + e + C;
  }
  function ne(e) {
    return w.call(String(e), /"/g, "&quot;");
  }
  function Q(e) {
    return !k || !(typeof e == "object" && (k in e || typeof e[k] < "u"));
  }
  function ue(e) {
    return Z(e) === "[object Array]" && Q(e);
  }
  function fe(e) {
    return Z(e) === "[object Date]" && Q(e);
  }
  function W(e) {
    return Z(e) === "[object RegExp]" && Q(e);
  }
  function I(e) {
    return Z(e) === "[object Error]" && Q(e);
  }
  function B(e) {
    return Z(e) === "[object String]" && Q(e);
  }
  function N(e) {
    return Z(e) === "[object Number]" && Q(e);
  }
  function L(e) {
    return Z(e) === "[object Boolean]" && Q(e);
  }
  function j(e) {
    if (U)
      return e && typeof e == "object" && e instanceof Symbol;
    if (typeof e == "symbol")
      return !0;
    if (!e || typeof e != "object" || !G)
      return !1;
    try {
      return G.call(e), !0;
    } catch {
    }
    return !1;
  }
  function J(e) {
    if (!e || typeof e != "object" || !M)
      return !1;
    try {
      return M.call(e), !0;
    } catch {
    }
    return !1;
  }
  var H = Object.prototype.hasOwnProperty || function(e) {
    return e in this;
  };
  function z(e, t) {
    return H.call(e, t);
  }
  function Z(e) {
    return b.call(e);
  }
  function de(e) {
    if (e.name)
      return e.name;
    var t = u.call(i.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null;
  }
  function le(e, t) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var F = 0, T = e.length; F < T; F++)
      if (e[F] === t)
        return F;
    return -1;
  }
  function Y(e) {
    if (!n || !e || typeof e != "object")
      return !1;
    try {
      n.call(e);
      try {
        S.call(e);
      } catch {
        return !0;
      }
      return e instanceof Map;
    } catch {
    }
    return !1;
  }
  function he(e) {
    if (!m || !e || typeof e != "object")
      return !1;
    try {
      m.call(e, m);
      try {
        h.call(e, h);
      } catch {
        return !0;
      }
      return e instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function ve(e) {
    if (!f || !e || typeof e != "object")
      return !1;
    try {
      return f.call(e), !0;
    } catch {
    }
    return !1;
  }
  function ge(e) {
    if (!S || !e || typeof e != "object")
      return !1;
    try {
      S.call(e);
      try {
        n.call(e);
      } catch {
        return !0;
      }
      return e instanceof Set;
    } catch {
    }
    return !1;
  }
  function kt(e) {
    if (!h || !e || typeof e != "object")
      return !1;
    try {
      h.call(e, h);
      try {
        m.call(e, m);
      } catch {
        return !0;
      }
      return e instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Vt(e) {
    return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
  }
  function Mr(e, t) {
    if (e.length > t.maxStringLength) {
      var F = e.length - t.maxStringLength, T = "... " + F + " more character" + (F > 1 ? "s" : "");
      return Mr(l.call(e, 0, t.maxStringLength), t) + T;
    }
    var C = oe[t.quoteStyle || "single"];
    C.lastIndex = 0;
    var q = w.call(w.call(e, C, "\\$1"), /[\x00-\x1f]/g, Kt);
    return ie(q, "single", t);
  }
  function Kt(e) {
    var t = e.charCodeAt(0), F = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[t];
    return F ? "\\" + F : "\\x" + (t < 16 ? "0" : "") + v.call(t.toString(16));
  }
  function Oe(e) {
    return "Object(" + e + ")";
  }
  function qe(e) {
    return e + " { ? }";
  }
  function Nr(e, t, F, T) {
    var C = T ? xe(F, T) : _.call(F, ", ");
    return e + " (" + t + ") {" + C + "}";
  }
  function Qt(e) {
    for (var t = 0; t < e.length; t++)
      if (le(e[t], `
`) >= 0)
        return !1;
    return !0;
  }
  function Jt(e, t) {
    var F;
    if (e.indent === "	")
      F = "	";
    else if (typeof e.indent == "number" && e.indent > 0)
      F = _.call(Array(e.indent + 1), " ");
    else
      return null;
    return {
      base: F,
      prev: _.call(Array(t + 1), F)
    };
  }
  function xe(e, t) {
    if (e.length === 0)
      return "";
    var F = `
` + t.prev + t.base;
    return F + _.call(e, "," + F) + `
` + t.prev;
  }
  function Ee(e, t) {
    var F = ue(e), T = [];
    if (F) {
      T.length = e.length;
      for (var C = 0; C < e.length; C++)
        T[C] = z(e, C) ? t(e[C], e) : "";
    }
    var q = typeof R == "function" ? R(e) : [], ce;
    if (U) {
      ce = {};
      for (var ye = 0; ye < q.length; ye++)
        ce["$" + q[ye]] = q[ye];
    }
    for (var K in e)
      z(e, K) && (F && String(Number(K)) === K && K < e.length || U && ce["$" + K] instanceof Symbol || (E.call(/[^\w$]/, K) ? T.push(t(K, e) + ": " + t(e[K], e)) : T.push(K + ": " + t(e[K], e))));
    if (typeof R == "function")
      for (var se = 0; se < q.length; se++)
        ee.call(e, q[se]) && T.push("[" + t(q[se]) + "]: " + t(e[q[se]], e));
    return T;
  }
  return Ue;
}
var Le, Vr;
function fn() {
  if (Vr) return Le;
  Vr = 1;
  var a = /* @__PURE__ */ _e(), r = /* @__PURE__ */ be(), n = function(y, A, m) {
    for (var d = y, h; (h = d.next) != null; d = h)
      if (h.key === A)
        return d.next = h.next, m || (h.next = /** @type {NonNullable<typeof list.next>} */
        y.next, y.next = h), h;
  }, o = function(y, A) {
    if (y) {
      var m = n(y, A);
      return m && m.value;
    }
  }, p = function(y, A, m) {
    var d = n(y, A);
    d ? d.value = m : y.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: A,
      next: y.next,
      value: m
    };
  }, s = function(y, A) {
    return y ? !!n(y, A) : !1;
  }, S = function(y, A) {
    if (y)
      return n(y, A, !0);
  };
  return Le = function() {
    var A, m = {
      assert: function(d) {
        if (!m.has(d))
          throw new r("Side channel does not contain " + a(d));
      },
      delete: function(d) {
        var h = A && A.next, g = S(A, d);
        return g && h && h === g && (A = void 0), !!g;
      },
      get: function(d) {
        return o(A, d);
      },
      has: function(d) {
        return s(A, d);
      },
      set: function(d, h) {
        A || (A = {
          next: void 0
        }), p(
          /** @type {NonNullable<typeof $o>} */
          A,
          d,
          h
        );
      }
    };
    return m;
  }, Le;
}
var We, Kr;
function Tt() {
  return Kr || (Kr = 1, We = Object), We;
}
var Ge, Qr;
function ln() {
  return Qr || (Qr = 1, Ge = Error), Ge;
}
var je, Jr;
function cn() {
  return Jr || (Jr = 1, je = EvalError), je;
}
var He, Zr;
function sn() {
  return Zr || (Zr = 1, He = RangeError), He;
}
var ze, Yr;
function pn() {
  return Yr || (Yr = 1, ze = ReferenceError), ze;
}
var ke, Xr;
function yn() {
  return Xr || (Xr = 1, ke = SyntaxError), ke;
}
var Ve, et;
function dn() {
  return et || (et = 1, Ve = URIError), Ve;
}
var Ke, rt;
function hn() {
  return rt || (rt = 1, Ke = Math.abs), Ke;
}
var Qe, tt;
function vn() {
  return tt || (tt = 1, Qe = Math.floor), Qe;
}
var Je, nt;
function gn() {
  return nt || (nt = 1, Je = Math.max), Je;
}
var Ze, at;
function mn() {
  return at || (at = 1, Ze = Math.min), Ze;
}
var Ye, ot;
function Sn() {
  return ot || (ot = 1, Ye = Math.pow), Ye;
}
var Xe, it;
function wn() {
  return it || (it = 1, Xe = Math.round), Xe;
}
var er, ut;
function bn() {
  return ut || (ut = 1, er = Number.isNaN || function(r) {
    return r !== r;
  }), er;
}
var rr, ft;
function On() {
  if (ft) return rr;
  ft = 1;
  var a = /* @__PURE__ */ bn();
  return rr = function(n) {
    return a(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, rr;
}
var tr, lt;
function An() {
  return lt || (lt = 1, tr = Object.getOwnPropertyDescriptor), tr;
}
var nr, ct;
function Ct() {
  if (ct) return nr;
  ct = 1;
  var a = /* @__PURE__ */ An();
  if (a)
    try {
      a([], "length");
    } catch {
      a = null;
    }
  return nr = a, nr;
}
var ar, st;
function En() {
  if (st) return ar;
  st = 1;
  var a = Object.defineProperty || !1;
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch {
      a = !1;
    }
  return ar = a, ar;
}
var or, pt;
function Pn() {
  return pt || (pt = 1, or = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var r = {}, n = Symbol("test"), o = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]")
      return !1;
    var p = 42;
    r[n] = p;
    for (var s in r)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
      return !1;
    var S = Object.getOwnPropertySymbols(r);
    if (S.length !== 1 || S[0] !== n || !Object.prototype.propertyIsEnumerable.call(r, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var y = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(r, n)
      );
      if (y.value !== p || y.enumerable !== !0)
        return !1;
    }
    return !0;
  }), or;
}
var ir, yt;
function Rn() {
  if (yt) return ir;
  yt = 1;
  var a = typeof Symbol < "u" && Symbol, r = Pn();
  return ir = function() {
    return typeof a != "function" || typeof Symbol != "function" || typeof a("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
  }, ir;
}
var ur, dt;
function Bt() {
  return dt || (dt = 1, ur = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ur;
}
var fr, ht;
function Ut() {
  if (ht) return fr;
  ht = 1;
  var a = /* @__PURE__ */ Tt();
  return fr = a.getPrototypeOf || null, fr;
}
var lr, vt;
function _n() {
  if (vt) return lr;
  vt = 1;
  var a = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, n = Math.max, o = "[object Function]", p = function(A, m) {
    for (var d = [], h = 0; h < A.length; h += 1)
      d[h] = A[h];
    for (var g = 0; g < m.length; g += 1)
      d[g + A.length] = m[g];
    return d;
  }, s = function(A, m) {
    for (var d = [], h = m, g = 0; h < A.length; h += 1, g += 1)
      d[g] = A[h];
    return d;
  }, S = function(y, A) {
    for (var m = "", d = 0; d < y.length; d += 1)
      m += y[d], d + 1 < y.length && (m += A);
    return m;
  };
  return lr = function(A) {
    var m = this;
    if (typeof m != "function" || r.apply(m) !== o)
      throw new TypeError(a + m);
    for (var d = s(arguments, 1), h, g = function() {
      if (this instanceof h) {
        var u = m.apply(
          this,
          p(d, arguments)
        );
        return Object(u) === u ? u : this;
      }
      return m.apply(
        A,
        p(d, arguments)
      );
    }, f = n(0, m.length - d.length), c = [], b = 0; b < f; b++)
      c[b] = "$" + b;
    if (h = Function("binder", "return function (" + S(c, ",") + "){ return binder.apply(this,arguments); }")(g), m.prototype) {
      var i = function() {
      };
      i.prototype = m.prototype, h.prototype = new i(), i.prototype = null;
    }
    return h;
  }, lr;
}
var cr, gt;
function $e() {
  if (gt) return cr;
  gt = 1;
  var a = _n();
  return cr = Function.prototype.bind || a, cr;
}
var sr, mt;
function Ir() {
  return mt || (mt = 1, sr = Function.prototype.call), sr;
}
var pr, St;
function Lt() {
  return St || (St = 1, pr = Function.prototype.apply), pr;
}
var yr, wt;
function $n() {
  return wt || (wt = 1, yr = typeof Reflect < "u" && Reflect && Reflect.apply), yr;
}
var dr, bt;
function qn() {
  if (bt) return dr;
  bt = 1;
  var a = $e(), r = Lt(), n = Ir(), o = $n();
  return dr = o || a.call(n, r), dr;
}
var hr, Ot;
function Wt() {
  if (Ot) return hr;
  Ot = 1;
  var a = $e(), r = /* @__PURE__ */ be(), n = Ir(), o = qn();
  return hr = function(s) {
    if (s.length < 1 || typeof s[0] != "function")
      throw new r("a function is required");
    return o(a, n, s);
  }, hr;
}
var vr, At;
function xn() {
  if (At) return vr;
  At = 1;
  var a = Wt(), r = /* @__PURE__ */ Ct(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (S) {
    if (!S || typeof S != "object" || !("code" in S) || S.code !== "ERR_PROTO_ACCESS")
      throw S;
  }
  var o = !!n && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), p = Object, s = p.getPrototypeOf;
  return vr = o && typeof o.get == "function" ? a([o.get]) : typeof s == "function" ? (
    /** @type {import('./get')} */
    function(y) {
      return s(y == null ? y : p(y));
    }
  ) : !1, vr;
}
var gr, Et;
function In() {
  if (Et) return gr;
  Et = 1;
  var a = Bt(), r = Ut(), n = /* @__PURE__ */ xn();
  return gr = a ? function(p) {
    return a(p);
  } : r ? function(p) {
    if (!p || typeof p != "object" && typeof p != "function")
      throw new TypeError("getProto: not an object");
    return r(p);
  } : n ? function(p) {
    return n(p);
  } : null, gr;
}
var mr, Pt;
function Fn() {
  if (Pt) return mr;
  Pt = 1;
  var a = Function.prototype.call, r = Object.prototype.hasOwnProperty, n = $e();
  return mr = n.call(a, r), mr;
}
var Sr, Rt;
function Fr() {
  if (Rt) return Sr;
  Rt = 1;
  var a, r = /* @__PURE__ */ Tt(), n = /* @__PURE__ */ ln(), o = /* @__PURE__ */ cn(), p = /* @__PURE__ */ sn(), s = /* @__PURE__ */ pn(), S = /* @__PURE__ */ yn(), y = /* @__PURE__ */ be(), A = /* @__PURE__ */ dn(), m = /* @__PURE__ */ hn(), d = /* @__PURE__ */ vn(), h = /* @__PURE__ */ gn(), g = /* @__PURE__ */ mn(), f = /* @__PURE__ */ Sn(), c = /* @__PURE__ */ wn(), b = /* @__PURE__ */ On(), i = Function, u = function(W) {
    try {
      return i('"use strict"; return (' + W + ").constructor;")();
    } catch {
    }
  }, l = /* @__PURE__ */ Ct(), w = /* @__PURE__ */ En(), v = function() {
    throw new y();
  }, O = l ? function() {
    try {
      return arguments.callee, v;
    } catch {
      try {
        return l(arguments, "callee").get;
      } catch {
        return v;
      }
    }
  }() : v, E = Rn()(), P = In(), _ = Ut(), D = Bt(), $ = Lt(), M = Ir(), R = {}, G = typeof Uint8Array > "u" || !P ? a : P(Uint8Array), U = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? a : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? a : ArrayBuffer,
    "%ArrayIteratorPrototype%": E && P ? P([][Symbol.iterator]()) : a,
    "%AsyncFromSyncIteratorPrototype%": a,
    "%AsyncFunction%": R,
    "%AsyncGenerator%": R,
    "%AsyncGeneratorFunction%": R,
    "%AsyncIteratorPrototype%": R,
    "%Atomics%": typeof Atomics > "u" ? a : Atomics,
    "%BigInt%": typeof BigInt > "u" ? a : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? a : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? a : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? a : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": n,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": o,
    "%Float32Array%": typeof Float32Array > "u" ? a : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? a : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? a : FinalizationRegistry,
    "%Function%": i,
    "%GeneratorFunction%": R,
    "%Int8Array%": typeof Int8Array > "u" ? a : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? a : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? a : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": E && P ? P(P([][Symbol.iterator]())) : a,
    "%JSON%": typeof JSON == "object" ? JSON : a,
    "%Map%": typeof Map > "u" ? a : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !E || !P ? a : P((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": l,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? a : Promise,
    "%Proxy%": typeof Proxy > "u" ? a : Proxy,
    "%RangeError%": p,
    "%ReferenceError%": s,
    "%Reflect%": typeof Reflect > "u" ? a : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? a : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !E || !P ? a : P((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? a : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": E && P ? P(""[Symbol.iterator]()) : a,
    "%Symbol%": E ? Symbol : a,
    "%SyntaxError%": S,
    "%ThrowTypeError%": O,
    "%TypedArray%": G,
    "%TypeError%": y,
    "%Uint8Array%": typeof Uint8Array > "u" ? a : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? a : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? a : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? a : Uint32Array,
    "%URIError%": A,
    "%WeakMap%": typeof WeakMap > "u" ? a : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? a : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? a : WeakSet,
    "%Function.prototype.call%": M,
    "%Function.prototype.apply%": $,
    "%Object.defineProperty%": w,
    "%Object.getPrototypeOf%": _,
    "%Math.abs%": m,
    "%Math.floor%": d,
    "%Math.max%": h,
    "%Math.min%": g,
    "%Math.pow%": f,
    "%Math.round%": c,
    "%Math.sign%": b,
    "%Reflect.getPrototypeOf%": D
  };
  if (P)
    try {
      null.error;
    } catch (W) {
      var k = P(P(W));
      U["%Error.prototype%"] = k;
    }
  var ee = function W(I) {
    var B;
    if (I === "%AsyncFunction%")
      B = u("async function () {}");
    else if (I === "%GeneratorFunction%")
      B = u("function* () {}");
    else if (I === "%AsyncGeneratorFunction%")
      B = u("async function* () {}");
    else if (I === "%AsyncGenerator%") {
      var N = W("%AsyncGeneratorFunction%");
      N && (B = N.prototype);
    } else if (I === "%AsyncIteratorPrototype%") {
      var L = W("%AsyncGenerator%");
      L && P && (B = P(L.prototype));
    }
    return U[I] = B, B;
  }, re = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, x = $e(), V = /* @__PURE__ */ Fn(), te = x.call(M, Array.prototype.concat), pe = x.call($, Array.prototype.splice), ae = x.call(M, String.prototype.replace), oe = x.call(M, String.prototype.slice), ie = x.call(M, RegExp.prototype.exec), ne = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Q = /\\(\\)?/g, ue = function(I) {
    var B = oe(I, 0, 1), N = oe(I, -1);
    if (B === "%" && N !== "%")
      throw new S("invalid intrinsic syntax, expected closing `%`");
    if (N === "%" && B !== "%")
      throw new S("invalid intrinsic syntax, expected opening `%`");
    var L = [];
    return ae(I, ne, function(j, J, H, z) {
      L[L.length] = H ? ae(z, Q, "$1") : J || j;
    }), L;
  }, fe = function(I, B) {
    var N = I, L;
    if (V(re, N) && (L = re[N], N = "%" + L[0] + "%"), V(U, N)) {
      var j = U[N];
      if (j === R && (j = ee(N)), typeof j > "u" && !B)
        throw new y("intrinsic " + I + " exists, but is not available. Please file an issue!");
      return {
        alias: L,
        name: N,
        value: j
      };
    }
    throw new S("intrinsic " + I + " does not exist!");
  };
  return Sr = function(I, B) {
    if (typeof I != "string" || I.length === 0)
      throw new y("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof B != "boolean")
      throw new y('"allowMissing" argument must be a boolean');
    if (ie(/^%?[^%]*%?$/, I) === null)
      throw new S("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var N = ue(I), L = N.length > 0 ? N[0] : "", j = fe("%" + L + "%", B), J = j.name, H = j.value, z = !1, Z = j.alias;
    Z && (L = Z[0], pe(N, te([0, 1], Z)));
    for (var de = 1, le = !0; de < N.length; de += 1) {
      var Y = N[de], he = oe(Y, 0, 1), ve = oe(Y, -1);
      if ((he === '"' || he === "'" || he === "`" || ve === '"' || ve === "'" || ve === "`") && he !== ve)
        throw new S("property names with quotes must have matching quotes");
      if ((Y === "constructor" || !le) && (z = !0), L += "." + Y, J = "%" + L + "%", V(U, J))
        H = U[J];
      else if (H != null) {
        if (!(Y in H)) {
          if (!B)
            throw new y("base intrinsic for " + I + " exists, but the property is not available.");
          return;
        }
        if (l && de + 1 >= N.length) {
          var ge = l(H, Y);
          le = !!ge, le && "get" in ge && !("originalValue" in ge.get) ? H = ge.get : H = H[Y];
        } else
          le = V(H, Y), H = H[Y];
        le && !z && (U[J] = H);
      }
    }
    return H;
  }, Sr;
}
var wr, _t;
function Gt() {
  if (_t) return wr;
  _t = 1;
  var a = /* @__PURE__ */ Fr(), r = Wt(), n = r([a("%String.prototype.indexOf%")]);
  return wr = function(p, s) {
    var S = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      a(p, !!s)
    );
    return typeof S == "function" && n(p, ".prototype.") > -1 ? r([S]) : S;
  }, wr;
}
var br, $t;
function jt() {
  if ($t) return br;
  $t = 1;
  var a = /* @__PURE__ */ Fr(), r = /* @__PURE__ */ Gt(), n = /* @__PURE__ */ _e(), o = /* @__PURE__ */ be(), p = a("%Map%", !0), s = r("Map.prototype.get", !0), S = r("Map.prototype.set", !0), y = r("Map.prototype.has", !0), A = r("Map.prototype.delete", !0), m = r("Map.prototype.size", !0);
  return br = !!p && /** @type {Exclude<import('.'), false>} */
  function() {
    var h, g = {
      assert: function(f) {
        if (!g.has(f))
          throw new o("Side channel does not contain " + n(f));
      },
      delete: function(f) {
        if (h) {
          var c = A(h, f);
          return m(h) === 0 && (h = void 0), c;
        }
        return !1;
      },
      get: function(f) {
        if (h)
          return s(h, f);
      },
      has: function(f) {
        return h ? y(h, f) : !1;
      },
      set: function(f, c) {
        h || (h = new p()), S(h, f, c);
      }
    };
    return g;
  }, br;
}
var Or, qt;
function Dn() {
  if (qt) return Or;
  qt = 1;
  var a = /* @__PURE__ */ Fr(), r = /* @__PURE__ */ Gt(), n = /* @__PURE__ */ _e(), o = jt(), p = /* @__PURE__ */ be(), s = a("%WeakMap%", !0), S = r("WeakMap.prototype.get", !0), y = r("WeakMap.prototype.set", !0), A = r("WeakMap.prototype.has", !0), m = r("WeakMap.prototype.delete", !0);
  return Or = s ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var h, g, f = {
        assert: function(c) {
          if (!f.has(c))
            throw new p("Side channel does not contain " + n(c));
        },
        delete: function(c) {
          if (s && c && (typeof c == "object" || typeof c == "function")) {
            if (h)
              return m(h, c);
          } else if (o && g)
            return g.delete(c);
          return !1;
        },
        get: function(c) {
          return s && c && (typeof c == "object" || typeof c == "function") && h ? S(h, c) : g && g.get(c);
        },
        has: function(c) {
          return s && c && (typeof c == "object" || typeof c == "function") && h ? A(h, c) : !!g && g.has(c);
        },
        set: function(c, b) {
          s && c && (typeof c == "object" || typeof c == "function") ? (h || (h = new s()), y(h, c, b)) : o && (g || (g = o()), g.set(c, b));
        }
      };
      return f;
    }
  ) : o, Or;
}
var Ar, xt;
function Mn() {
  if (xt) return Ar;
  xt = 1;
  var a = /* @__PURE__ */ be(), r = /* @__PURE__ */ _e(), n = fn(), o = jt(), p = Dn(), s = p || o || n;
  return Ar = function() {
    var y, A = {
      assert: function(m) {
        if (!A.has(m))
          throw new a("Side channel does not contain " + r(m));
      },
      delete: function(m) {
        return !!y && y.delete(m);
      },
      get: function(m) {
        return y && y.get(m);
      },
      has: function(m) {
        return !!y && y.has(m);
      },
      set: function(m, d) {
        y || (y = s()), y.set(m, d);
      }
    };
    return A;
  }, Ar;
}
var Er, It;
function Dr() {
  if (It) return Er;
  It = 1;
  var a = String.prototype.replace, r = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Er = {
    default: n.RFC3986,
    formatters: {
      RFC1738: function(o) {
        return a.call(o, r, "+");
      },
      RFC3986: function(o) {
        return String(o);
      }
    },
    RFC1738: n.RFC1738,
    RFC3986: n.RFC3986
  }, Er;
}
var Pr, Ft;
function Ht() {
  if (Ft) return Pr;
  Ft = 1;
  var a = /* @__PURE__ */ Dr(), r = Object.prototype.hasOwnProperty, n = Array.isArray, o = function() {
    for (var i = [], u = 0; u < 256; ++u)
      i.push("%" + ((u < 16 ? "0" : "") + u.toString(16)).toUpperCase());
    return i;
  }(), p = function(u) {
    for (; u.length > 1; ) {
      var l = u.pop(), w = l.obj[l.prop];
      if (n(w)) {
        for (var v = [], O = 0; O < w.length; ++O)
          typeof w[O] < "u" && v.push(w[O]);
        l.obj[l.prop] = v;
      }
    }
  }, s = function(u, l) {
    for (var w = l && l.plainObjects ? { __proto__: null } : {}, v = 0; v < u.length; ++v)
      typeof u[v] < "u" && (w[v] = u[v]);
    return w;
  }, S = function i(u, l, w) {
    if (!l)
      return u;
    if (typeof l != "object" && typeof l != "function") {
      if (n(u))
        u.push(l);
      else if (u && typeof u == "object")
        (w && (w.plainObjects || w.allowPrototypes) || !r.call(Object.prototype, l)) && (u[l] = !0);
      else
        return [u, l];
      return u;
    }
    if (!u || typeof u != "object")
      return [u].concat(l);
    var v = u;
    return n(u) && !n(l) && (v = s(u, w)), n(u) && n(l) ? (l.forEach(function(O, E) {
      if (r.call(u, E)) {
        var P = u[E];
        P && typeof P == "object" && O && typeof O == "object" ? u[E] = i(P, O, w) : u.push(O);
      } else
        u[E] = O;
    }), u) : Object.keys(l).reduce(function(O, E) {
      var P = l[E];
      return r.call(O, E) ? O[E] = i(O[E], P, w) : O[E] = P, O;
    }, v);
  }, y = function(u, l) {
    return Object.keys(l).reduce(function(w, v) {
      return w[v] = l[v], w;
    }, u);
  }, A = function(i, u, l) {
    var w = i.replace(/\+/g, " ");
    if (l === "iso-8859-1")
      return w.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }, m = 1024, d = function(u, l, w, v, O) {
    if (u.length === 0)
      return u;
    var E = u;
    if (typeof u == "symbol" ? E = Symbol.prototype.toString.call(u) : typeof u != "string" && (E = String(u)), w === "iso-8859-1")
      return escape(E).replace(/%u[0-9a-f]{4}/gi, function(G) {
        return "%26%23" + parseInt(G.slice(2), 16) + "%3B";
      });
    for (var P = "", _ = 0; _ < E.length; _ += m) {
      for (var D = E.length >= m ? E.slice(_, _ + m) : E, $ = [], M = 0; M < D.length; ++M) {
        var R = D.charCodeAt(M);
        if (R === 45 || R === 46 || R === 95 || R === 126 || R >= 48 && R <= 57 || R >= 65 && R <= 90 || R >= 97 && R <= 122 || O === a.RFC1738 && (R === 40 || R === 41)) {
          $[$.length] = D.charAt(M);
          continue;
        }
        if (R < 128) {
          $[$.length] = o[R];
          continue;
        }
        if (R < 2048) {
          $[$.length] = o[192 | R >> 6] + o[128 | R & 63];
          continue;
        }
        if (R < 55296 || R >= 57344) {
          $[$.length] = o[224 | R >> 12] + o[128 | R >> 6 & 63] + o[128 | R & 63];
          continue;
        }
        M += 1, R = 65536 + ((R & 1023) << 10 | D.charCodeAt(M) & 1023), $[$.length] = o[240 | R >> 18] + o[128 | R >> 12 & 63] + o[128 | R >> 6 & 63] + o[128 | R & 63];
      }
      P += $.join("");
    }
    return P;
  }, h = function(u) {
    for (var l = [{ obj: { o: u }, prop: "o" }], w = [], v = 0; v < l.length; ++v)
      for (var O = l[v], E = O.obj[O.prop], P = Object.keys(E), _ = 0; _ < P.length; ++_) {
        var D = P[_], $ = E[D];
        typeof $ == "object" && $ !== null && w.indexOf($) === -1 && (l.push({ obj: E, prop: D }), w.push($));
      }
    return p(l), u;
  }, g = function(u) {
    return Object.prototype.toString.call(u) === "[object RegExp]";
  }, f = function(u) {
    return !u || typeof u != "object" ? !1 : !!(u.constructor && u.constructor.isBuffer && u.constructor.isBuffer(u));
  }, c = function(u, l) {
    return [].concat(u, l);
  }, b = function(u, l) {
    if (n(u)) {
      for (var w = [], v = 0; v < u.length; v += 1)
        w.push(l(u[v]));
      return w;
    }
    return l(u);
  };
  return Pr = {
    arrayToObject: s,
    assign: y,
    combine: c,
    compact: h,
    decode: A,
    encode: d,
    isBuffer: f,
    isRegExp: g,
    maybeMap: b,
    merge: S
  }, Pr;
}
var Rr, Dt;
function Nn() {
  if (Dt) return Rr;
  Dt = 1;
  var a = Mn(), r = /* @__PURE__ */ Ht(), n = /* @__PURE__ */ Dr(), o = Object.prototype.hasOwnProperty, p = {
    brackets: function(i) {
      return i + "[]";
    },
    comma: "comma",
    indices: function(i, u) {
      return i + "[" + u + "]";
    },
    repeat: function(i) {
      return i;
    }
  }, s = Array.isArray, S = Array.prototype.push, y = function(b, i) {
    S.apply(b, s(i) ? i : [i]);
  }, A = Date.prototype.toISOString, m = n.default, d = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: r.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: m,
    formatter: n.formatters[m],
    // deprecated
    indices: !1,
    serializeDate: function(i) {
      return A.call(i);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, h = function(i) {
    return typeof i == "string" || typeof i == "number" || typeof i == "boolean" || typeof i == "symbol" || typeof i == "bigint";
  }, g = {}, f = function b(i, u, l, w, v, O, E, P, _, D, $, M, R, G, U, k, ee, re) {
    for (var x = i, V = re, te = 0, pe = !1; (V = V.get(g)) !== void 0 && !pe; ) {
      var ae = V.get(i);
      if (te += 1, typeof ae < "u") {
        if (ae === te)
          throw new RangeError("Cyclic object value");
        pe = !0;
      }
      typeof V.get(g) > "u" && (te = 0);
    }
    if (typeof D == "function" ? x = D(u, x) : x instanceof Date ? x = R(x) : l === "comma" && s(x) && (x = r.maybeMap(x, function(J) {
      return J instanceof Date ? R(J) : J;
    })), x === null) {
      if (O)
        return _ && !k ? _(u, d.encoder, ee, "key", G) : u;
      x = "";
    }
    if (h(x) || r.isBuffer(x)) {
      if (_) {
        var oe = k ? u : _(u, d.encoder, ee, "key", G);
        return [U(oe) + "=" + U(_(x, d.encoder, ee, "value", G))];
      }
      return [U(u) + "=" + U(String(x))];
    }
    var ie = [];
    if (typeof x > "u")
      return ie;
    var ne;
    if (l === "comma" && s(x))
      k && _ && (x = r.maybeMap(x, _)), ne = [{ value: x.length > 0 ? x.join(",") || null : void 0 }];
    else if (s(D))
      ne = D;
    else {
      var Q = Object.keys(x);
      ne = $ ? Q.sort($) : Q;
    }
    var ue = P ? String(u).replace(/\./g, "%2E") : String(u), fe = w && s(x) && x.length === 1 ? ue + "[]" : ue;
    if (v && s(x) && x.length === 0)
      return fe + "[]";
    for (var W = 0; W < ne.length; ++W) {
      var I = ne[W], B = typeof I == "object" && I && typeof I.value < "u" ? I.value : x[I];
      if (!(E && B === null)) {
        var N = M && P ? String(I).replace(/\./g, "%2E") : String(I), L = s(x) ? typeof l == "function" ? l(fe, N) : fe : fe + (M ? "." + N : "[" + N + "]");
        re.set(i, te);
        var j = a();
        j.set(g, re), y(ie, b(
          B,
          L,
          l,
          w,
          v,
          O,
          E,
          P,
          l === "comma" && k && s(x) ? null : _,
          D,
          $,
          M,
          R,
          G,
          U,
          k,
          ee,
          j
        ));
      }
    }
    return ie;
  }, c = function(i) {
    if (!i)
      return d;
    if (typeof i.allowEmptyArrays < "u" && typeof i.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof i.encodeDotInKeys < "u" && typeof i.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (i.encoder !== null && typeof i.encoder < "u" && typeof i.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var u = i.charset || d.charset;
    if (typeof i.charset < "u" && i.charset !== "utf-8" && i.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var l = n.default;
    if (typeof i.format < "u") {
      if (!o.call(n.formatters, i.format))
        throw new TypeError("Unknown format option provided.");
      l = i.format;
    }
    var w = n.formatters[l], v = d.filter;
    (typeof i.filter == "function" || s(i.filter)) && (v = i.filter);
    var O;
    if (i.arrayFormat in p ? O = i.arrayFormat : "indices" in i ? O = i.indices ? "indices" : "repeat" : O = d.arrayFormat, "commaRoundTrip" in i && typeof i.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var E = typeof i.allowDots > "u" ? i.encodeDotInKeys === !0 ? !0 : d.allowDots : !!i.allowDots;
    return {
      addQueryPrefix: typeof i.addQueryPrefix == "boolean" ? i.addQueryPrefix : d.addQueryPrefix,
      allowDots: E,
      allowEmptyArrays: typeof i.allowEmptyArrays == "boolean" ? !!i.allowEmptyArrays : d.allowEmptyArrays,
      arrayFormat: O,
      charset: u,
      charsetSentinel: typeof i.charsetSentinel == "boolean" ? i.charsetSentinel : d.charsetSentinel,
      commaRoundTrip: !!i.commaRoundTrip,
      delimiter: typeof i.delimiter > "u" ? d.delimiter : i.delimiter,
      encode: typeof i.encode == "boolean" ? i.encode : d.encode,
      encodeDotInKeys: typeof i.encodeDotInKeys == "boolean" ? i.encodeDotInKeys : d.encodeDotInKeys,
      encoder: typeof i.encoder == "function" ? i.encoder : d.encoder,
      encodeValuesOnly: typeof i.encodeValuesOnly == "boolean" ? i.encodeValuesOnly : d.encodeValuesOnly,
      filter: v,
      format: l,
      formatter: w,
      serializeDate: typeof i.serializeDate == "function" ? i.serializeDate : d.serializeDate,
      skipNulls: typeof i.skipNulls == "boolean" ? i.skipNulls : d.skipNulls,
      sort: typeof i.sort == "function" ? i.sort : null,
      strictNullHandling: typeof i.strictNullHandling == "boolean" ? i.strictNullHandling : d.strictNullHandling
    };
  };
  return Rr = function(b, i) {
    var u = b, l = c(i), w, v;
    typeof l.filter == "function" ? (v = l.filter, u = v("", u)) : s(l.filter) && (v = l.filter, w = v);
    var O = [];
    if (typeof u != "object" || u === null)
      return "";
    var E = p[l.arrayFormat], P = E === "comma" && l.commaRoundTrip;
    w || (w = Object.keys(u)), l.sort && w.sort(l.sort);
    for (var _ = a(), D = 0; D < w.length; ++D) {
      var $ = w[D], M = u[$];
      l.skipNulls && M === null || y(O, f(
        M,
        $,
        E,
        P,
        l.allowEmptyArrays,
        l.strictNullHandling,
        l.skipNulls,
        l.encodeDotInKeys,
        l.encode ? l.encoder : null,
        l.filter,
        l.sort,
        l.allowDots,
        l.serializeDate,
        l.format,
        l.formatter,
        l.encodeValuesOnly,
        l.charset,
        _
      ));
    }
    var R = O.join(l.delimiter), G = l.addQueryPrefix === !0 ? "?" : "";
    return l.charsetSentinel && (l.charset === "iso-8859-1" ? G += "utf8=%26%2310003%3B&" : G += "utf8=%E2%9C%93&"), R.length > 0 ? G + R : "";
  }, Rr;
}
var _r, Mt;
function Tn() {
  if (Mt) return _r;
  Mt = 1;
  var a = /* @__PURE__ */ Ht(), r = Object.prototype.hasOwnProperty, n = Array.isArray, o = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: a.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, p = function(g) {
    return g.replace(/&#(\d+);/g, function(f, c) {
      return String.fromCharCode(parseInt(c, 10));
    });
  }, s = function(g, f, c) {
    if (g && typeof g == "string" && f.comma && g.indexOf(",") > -1)
      return g.split(",");
    if (f.throwOnLimitExceeded && c >= f.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + f.arrayLimit + " element" + (f.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return g;
  }, S = "utf8=%26%2310003%3B", y = "utf8=%E2%9C%93", A = function(f, c) {
    var b = { __proto__: null }, i = c.ignoreQueryPrefix ? f.replace(/^\?/, "") : f;
    i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var u = c.parameterLimit === 1 / 0 ? void 0 : c.parameterLimit, l = i.split(
      c.delimiter,
      c.throwOnLimitExceeded ? u + 1 : u
    );
    if (c.throwOnLimitExceeded && l.length > u)
      throw new RangeError("Parameter limit exceeded. Only " + u + " parameter" + (u === 1 ? "" : "s") + " allowed.");
    var w = -1, v, O = c.charset;
    if (c.charsetSentinel)
      for (v = 0; v < l.length; ++v)
        l[v].indexOf("utf8=") === 0 && (l[v] === y ? O = "utf-8" : l[v] === S && (O = "iso-8859-1"), w = v, v = l.length);
    for (v = 0; v < l.length; ++v)
      if (v !== w) {
        var E = l[v], P = E.indexOf("]="), _ = P === -1 ? E.indexOf("=") : P + 1, D, $;
        _ === -1 ? (D = c.decoder(E, o.decoder, O, "key"), $ = c.strictNullHandling ? null : "") : (D = c.decoder(E.slice(0, _), o.decoder, O, "key"), $ = a.maybeMap(
          s(
            E.slice(_ + 1),
            c,
            n(b[D]) ? b[D].length : 0
          ),
          function(R) {
            return c.decoder(R, o.decoder, O, "value");
          }
        )), $ && c.interpretNumericEntities && O === "iso-8859-1" && ($ = p(String($))), E.indexOf("[]=") > -1 && ($ = n($) ? [$] : $);
        var M = r.call(b, D);
        M && c.duplicates === "combine" ? b[D] = a.combine(b[D], $) : (!M || c.duplicates === "last") && (b[D] = $);
      }
    return b;
  }, m = function(g, f, c, b) {
    var i = 0;
    if (g.length > 0 && g[g.length - 1] === "[]") {
      var u = g.slice(0, -1).join("");
      i = Array.isArray(f) && f[u] ? f[u].length : 0;
    }
    for (var l = b ? f : s(f, c, i), w = g.length - 1; w >= 0; --w) {
      var v, O = g[w];
      if (O === "[]" && c.parseArrays)
        v = c.allowEmptyArrays && (l === "" || c.strictNullHandling && l === null) ? [] : a.combine([], l);
      else {
        v = c.plainObjects ? { __proto__: null } : {};
        var E = O.charAt(0) === "[" && O.charAt(O.length - 1) === "]" ? O.slice(1, -1) : O, P = c.decodeDotInKeys ? E.replace(/%2E/g, ".") : E, _ = parseInt(P, 10);
        !c.parseArrays && P === "" ? v = { 0: l } : !isNaN(_) && O !== P && String(_) === P && _ >= 0 && c.parseArrays && _ <= c.arrayLimit ? (v = [], v[_] = l) : P !== "__proto__" && (v[P] = l);
      }
      l = v;
    }
    return l;
  }, d = function(f, c, b, i) {
    if (f) {
      var u = b.allowDots ? f.replace(/\.([^.[]+)/g, "[$1]") : f, l = /(\[[^[\]]*])/, w = /(\[[^[\]]*])/g, v = b.depth > 0 && l.exec(u), O = v ? u.slice(0, v.index) : u, E = [];
      if (O) {
        if (!b.plainObjects && r.call(Object.prototype, O) && !b.allowPrototypes)
          return;
        E.push(O);
      }
      for (var P = 0; b.depth > 0 && (v = w.exec(u)) !== null && P < b.depth; ) {
        if (P += 1, !b.plainObjects && r.call(Object.prototype, v[1].slice(1, -1)) && !b.allowPrototypes)
          return;
        E.push(v[1]);
      }
      if (v) {
        if (b.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + b.depth + " and strictDepth is true");
        E.push("[" + u.slice(v.index) + "]");
      }
      return m(E, c, b, i);
    }
  }, h = function(f) {
    if (!f)
      return o;
    if (typeof f.allowEmptyArrays < "u" && typeof f.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof f.decodeDotInKeys < "u" && typeof f.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (f.decoder !== null && typeof f.decoder < "u" && typeof f.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof f.charset < "u" && f.charset !== "utf-8" && f.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof f.throwOnLimitExceeded < "u" && typeof f.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var c = typeof f.charset > "u" ? o.charset : f.charset, b = typeof f.duplicates > "u" ? o.duplicates : f.duplicates;
    if (b !== "combine" && b !== "first" && b !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var i = typeof f.allowDots > "u" ? f.decodeDotInKeys === !0 ? !0 : o.allowDots : !!f.allowDots;
    return {
      allowDots: i,
      allowEmptyArrays: typeof f.allowEmptyArrays == "boolean" ? !!f.allowEmptyArrays : o.allowEmptyArrays,
      allowPrototypes: typeof f.allowPrototypes == "boolean" ? f.allowPrototypes : o.allowPrototypes,
      allowSparse: typeof f.allowSparse == "boolean" ? f.allowSparse : o.allowSparse,
      arrayLimit: typeof f.arrayLimit == "number" ? f.arrayLimit : o.arrayLimit,
      charset: c,
      charsetSentinel: typeof f.charsetSentinel == "boolean" ? f.charsetSentinel : o.charsetSentinel,
      comma: typeof f.comma == "boolean" ? f.comma : o.comma,
      decodeDotInKeys: typeof f.decodeDotInKeys == "boolean" ? f.decodeDotInKeys : o.decodeDotInKeys,
      decoder: typeof f.decoder == "function" ? f.decoder : o.decoder,
      delimiter: typeof f.delimiter == "string" || a.isRegExp(f.delimiter) ? f.delimiter : o.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof f.depth == "number" || f.depth === !1 ? +f.depth : o.depth,
      duplicates: b,
      ignoreQueryPrefix: f.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof f.interpretNumericEntities == "boolean" ? f.interpretNumericEntities : o.interpretNumericEntities,
      parameterLimit: typeof f.parameterLimit == "number" ? f.parameterLimit : o.parameterLimit,
      parseArrays: f.parseArrays !== !1,
      plainObjects: typeof f.plainObjects == "boolean" ? f.plainObjects : o.plainObjects,
      strictDepth: typeof f.strictDepth == "boolean" ? !!f.strictDepth : o.strictDepth,
      strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : o.strictNullHandling,
      throwOnLimitExceeded: typeof f.throwOnLimitExceeded == "boolean" ? f.throwOnLimitExceeded : !1
    };
  };
  return _r = function(g, f) {
    var c = h(f);
    if (g === "" || g === null || typeof g > "u")
      return c.plainObjects ? { __proto__: null } : {};
    for (var b = typeof g == "string" ? A(g, c) : g, i = c.plainObjects ? { __proto__: null } : {}, u = Object.keys(b), l = 0; l < u.length; ++l) {
      var w = u[l], v = d(w, b[w], c, typeof g == "string");
      i = a.merge(i, v, c);
    }
    return c.allowSparse === !0 ? i : a.compact(i);
  }, _r;
}
var $r, Nt;
function Cn() {
  if (Nt) return $r;
  Nt = 1;
  var a = /* @__PURE__ */ Nn(), r = /* @__PURE__ */ Tn(), n = /* @__PURE__ */ Dr();
  return $r = {
    formats: n,
    parse: r,
    stringify: a
  }, $r;
}
var zt = /* @__PURE__ */ Cn();
class qr {
  /**
   * @param {String} name - Route name.
   * @param {Object} definition - Route definition.
   * @param {Object} config - Ziggy configuration.
   */
  constructor(r, n, o) {
    this.name = r, this.definition = n, this.bindings = n.bindings ?? {}, this.wheres = n.wheres ?? {}, this.config = o;
  }
  /**
   * Get a 'template' of the complete URL for this route.
   *
   * @example
   * https://{team}.ziggy.dev/user/{user}
   *
   * @return {String} Route template.
   */
  get template() {
    const r = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return r === "" ? "/" : r;
  }
  /**
   * Get a template of the origin for this route.
   *
   * @example
   * https://{team}.ziggy.dev/
   *
   * @return {String} Route origin template.
   */
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  /**
   * Get an array of objects representing the parameters that this route accepts.
   *
   * @example
   * [{ name: 'team', required: true }, { name: 'user', required: false }]
   *
   * @return {Array} Parameter segments.
   */
  get parameterSegments() {
    var r;
    return ((r = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : r.map((n) => ({
      name: n.replace(/{|\??}/g, ""),
      required: !/\?}$/.test(n)
    }))) ?? [];
  }
  /**
   * Get whether this route's template matches the given URL.
   *
   * @param {String} url - URL to check.
   * @return {Object|false} - If this route matches, returns the matched parameters.
   */
  matchesUrl(r) {
    if (!this.definition.methods.includes("GET")) return !1;
    const n = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (S, y, A, m) => {
      var h;
      const d = `(?<${A}>${((h = this.wheres[A]) == null ? void 0 : h.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return m ? `(${y}${d})?` : `${y}${d}`;
    }).replace(/^\w+:\/\//, ""), [o, p] = r.replace(/^\w+:\/\//, "").split("?"), s = new RegExp(`^${n}/?$`).exec(o) ?? new RegExp(`^${n}/?$`).exec(decodeURI(o));
    if (s) {
      for (const S in s.groups)
        s.groups[S] = typeof s.groups[S] == "string" ? decodeURIComponent(s.groups[S]) : s.groups[S];
      return { params: s.groups, query: zt.parse(p) };
    }
    return !1;
  }
  /**
   * Hydrate and return a complete URL for this route with the given parameters.
   *
   * @param {Object} params
   * @return {String}
   */
  compile(r) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (o, p, s) => {
      if (!s && [null, void 0].includes(r[p]))
        throw new Error(
          `Ziggy error: '${p}' parameter is required for route '${this.name}'.`
        );
      if (this.wheres[p] && !new RegExp(
        `^${s ? `(${this.wheres[p]})?` : this.wheres[p]}$`
      ).test(r[p] ?? ""))
        throw new Error(
          `Ziggy error: '${p}' parameter '${r[p]}' does not match required format '${this.wheres[p]}' for route '${this.name}'.`
        );
      return encodeURI(r[p] ?? "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class Bn extends String {
  /**
   * @param {String} [name] - Route name.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @param {Boolean} [absolute] - Whether to include the URL origin.
   * @param {Object} [config] - Ziggy configuration.
   */
  constructor(r, n, o = !0, p) {
    if (super(), this._config = p ?? (typeof Ziggy < "u" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy), this._config = { ...this._config, absolute: o }, r) {
      if (!this._config.routes[r])
        throw new Error(`Ziggy error: route '${r}' is not in the route list.`);
      this._route = new qr(r, this._config.routes[r], this._config), this._params = this._parse(n);
    }
  }
  /**
   * Get the compiled URL string for the current route and parameters.
   *
   * @example
   * // with 'posts.show' route 'posts/{post}'
   * (new Router('posts.show', 1)).toString(); // 'https://ziggy.dev/posts/1'
   *
   * @return {String}
   */
  toString() {
    const r = Object.keys(this._params).filter((n) => !this._route.parameterSegments.some(({ name: o }) => o === n)).filter((n) => n !== "_query").reduce((n, o) => ({ ...n, [o]: this._params[o] }), {});
    return this._route.compile(this._params) + zt.stringify(
      { ...r, ...this._params._query },
      {
        addQueryPrefix: !0,
        arrayFormat: "indices",
        encodeValuesOnly: !0,
        skipNulls: !0,
        encoder: (n, o) => typeof n == "boolean" ? Number(n) : o(n)
      }
    );
  }
  /**
   * Get the parameters, values, and metadata from the given URL.
   *
   * @param {String} [url] - The URL to inspect, defaults to the current window URL.
   * @return {{ name: string, params: Object, query: Object, route: Route }}
   */
  _unresolve(r) {
    r ? this._config.absolute && r.startsWith("/") && (r = this._location().host + r) : r = this._currentUrl();
    let n = {};
    const [o, p] = Object.entries(this._config.routes).find(
      ([s, S]) => n = new qr(s, S, this._config).matchesUrl(r)
    ) || [void 0, void 0];
    return { name: o, ...n, route: p };
  }
  _currentUrl() {
    const { host: r, pathname: n, search: o } = this._location();
    return (this._config.absolute ? r + n : n.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + o;
  }
  /**
   * Get the name of the route matching the current window URL, or, given a route name
   * and parameters, check if the current window URL and parameters match that route.
   *
   * @example
   * // at URL https://ziggy.dev/posts/4 with 'posts.show' route 'posts/{post}'
   * route().current(); // 'posts.show'
   * route().current('posts.index'); // false
   * route().current('posts.show'); // true
   * route().current('posts.show', { post: 1 }); // false
   * route().current('posts.show', { post: 4 }); // true
   *
   * @param {String} [name] - Route name to check.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @return {(Boolean|String|undefined)}
   */
  current(r, n) {
    const { name: o, params: p, query: s, route: S } = this._unresolve();
    if (!r) return o;
    const y = new RegExp(`^${r.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(
      o
    );
    if ([null, void 0].includes(n) || !y) return y;
    const A = new qr(o, S, this._config);
    n = this._parse(n, A);
    const m = { ...p, ...s };
    if (Object.values(n).every((h) => !h) && !Object.values(m).some((h) => h !== void 0))
      return !0;
    const d = (h, g) => Object.entries(h).every(([f, c]) => Array.isArray(c) && Array.isArray(g[f]) ? c.every((b) => g[f].includes(b)) : typeof c == "object" && typeof g[f] == "object" && c !== null && g[f] !== null ? d(c, g[f]) : g[f] == c);
    return d(n, m);
  }
  /**
   * Get an object representing the current location (by default this will be
   * the JavaScript `window` global if it's available).
   *
   * @return {Object}
   */
  _location() {
    var p, s, S;
    const {
      host: r = "",
      pathname: n = "",
      search: o = ""
    } = typeof window < "u" ? window.location : {};
    return {
      host: ((p = this._config.location) == null ? void 0 : p.host) ?? r,
      pathname: ((s = this._config.location) == null ? void 0 : s.pathname) ?? n,
      search: ((S = this._config.location) == null ? void 0 : S.search) ?? o
    };
  }
  /**
   * Get all parameter values from the current window URL.
   *
   * @example
   * // at URL https://tighten.ziggy.dev/posts/4?lang=en with 'posts.show' route 'posts/{post}' and domain '{team}.ziggy.dev'
   * route().params; // { team: 'tighten', post: 4, lang: 'en' }
   *
   * @return {Object}
   */
  get params() {
    const { params: r, query: n } = this._unresolve();
    return { ...r, ...n };
  }
  get routeParams() {
    return this._unresolve().params;
  }
  get queryParams() {
    return this._unresolve().query;
  }
  /**
   * Check whether the given route exists.
   *
   * @param {String} name
   * @return {Boolean}
   */
  has(r) {
    return this._config.routes.hasOwnProperty(r);
  }
  /**
   * Parse Laravel-style route parameters of any type into a normalized object.
   *
   * @example
   * // with route parameter names 'event' and 'venue'
   * _parse(1); // { event: 1 }
   * _parse({ event: 2, venue: 3 }); // { event: 2, venue: 3 }
   * _parse(['Taylor', 'Matt']); // { event: 'Taylor', venue: 'Matt' }
   * _parse([4, { uuid: 56789, name: 'Grand Canyon' }]); // { event: 4, venue: 56789 }
   *
   * @param {(String|Number|Array|Object)} params - Route parameters.
   * @param {Route} route - Route instance.
   * @return {Object} Normalized complete route parameters.
   */
  _parse(r = {}, n = this._route) {
    r ?? (r = {}), r = ["string", "number"].includes(typeof r) ? [r] : r;
    const o = n.parameterSegments.filter(({ name: p }) => !this._config.defaults[p]);
    return Array.isArray(r) ? r = r.reduce(
      (p, s, S) => o[S] ? { ...p, [o[S].name]: s } : typeof s == "object" ? { ...p, ...s } : { ...p, [s]: "" },
      {}
    ) : o.length === 1 && !r[o[0].name] && (r.hasOwnProperty(Object.values(n.bindings)[0]) || r.hasOwnProperty("id")) && (r = { [o[0].name]: r }), {
      ...this._defaults(n),
      ...this._substituteBindings(r, n)
    };
  }
  /**
   * Populate default parameters for the given route.
   *
   * @example
   * // with default parameters { locale: 'en', country: 'US' } and 'posts.show' route '{locale}/posts/{post}'
   * defaults(...); // { locale: 'en' }
   *
   * @param {Route} route
   * @return {Object} Default route parameters.
   */
  _defaults(r) {
    return r.parameterSegments.filter(({ name: n }) => this._config.defaults[n]).reduce(
      (n, { name: o }, p) => ({ ...n, [o]: this._config.defaults[o] }),
      {}
    );
  }
  /**
   * Substitute Laravel route model bindings in the given parameters.
   *
   * @example
   * _substituteBindings({ post: { id: 4, slug: 'hello-world', title: 'Hello, world!' } }, { bindings: { post: 'slug' } }); // { post: 'hello-world' }
   *
   * @param {Object} params - Route parameters.
   * @param {Object} route - Route definition.
   * @return {Object} Normalized route parameters.
   */
  _substituteBindings(r, { bindings: n, parameterSegments: o }) {
    return Object.entries(r).reduce((p, [s, S]) => {
      if (!S || typeof S != "object" || Array.isArray(S) || !o.some(({ name: y }) => y === s))
        return { ...p, [s]: S };
      if (!S.hasOwnProperty(n[s]))
        if (S.hasOwnProperty("id"))
          n[s] = "id";
        else
          throw new Error(
            `Ziggy error: object passed as '${s}' parameter is missing route model binding key '${n[s]}'.`
          );
      return { ...p, [s]: S[n[s]] };
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function Un(a, r, n, o) {
  const p = new Bn(a, r, n, o);
  return a ? p.toString() : p;
}
const we = en({});
function Gn(a) {
  var n, o, p;
  const r = ((p = (o = (n = a == null ? void 0 : a.props) == null ? void 0 : n.initialPage) == null ? void 0 : o.props) == null ? void 0 : p.ziggy) ?? null;
  return r && (Object.keys(r).forEach((s) => {
    we[s] = r[s];
  }), we.location = new URL(we.location)), {
    install: (s, { mixin: S = !1 } = {}) => {
      const y = (A, m, d, h = we) => (we.location && typeof window < "u" && (we.location = null), Un(A, m, d, h));
      S === !0 && s.mixin({
        methods: {
          route: y
        }
      }), s.prototype.$route = y;
    }
  };
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const xr = rn, Ln = () => Xt.prototype.$route, jn = (a) => {
  const r = Ln();
  return tn(() => {
    if (a = xr(a), a) {
      if (typeof a == "string" && /^http/.test(a))
        return a;
      if (Array.isArray(a)) {
        const [n, o] = xr(a);
        return n ? typeof o != "object" ? r(n) : r(n, xr(o)) : "#";
      } else return a ? r(a) : "#";
    } else return console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp"), "#";
  });
};
export {
  Gn as useInertiaRoutes,
  jn as useResolvedRoute,
  Ln as useRoute
};
