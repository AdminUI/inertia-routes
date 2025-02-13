import { inject as ca, reactive as uo, watch as fo, getCurrentScope as la, onScopeDispose as sa, ref as ct, computed as He, toValue as Ae, unref as pa, getCurrentInstance as ya, useAttrs as da, onMounted as ha, onUnmounted as ga } from "vue";
import { router as qt } from "@inertiajs/vue3";
const co = Symbol.for("inertia-routes"), va = () => ca(co);
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ma(e) {
  if (e.__esModule) return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var dr, Ut;
function Ne() {
  return Ut || (Ut = 1, dr = TypeError), dr;
}
const ba = {}, Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ba
}, Symbol.toStringTag, { value: "Module" })), wa = /* @__PURE__ */ ma(Sa);
var hr, Lt;
function er() {
  if (Lt) return hr;
  Lt = 1;
  var e = typeof Map == "function" && Map.prototype, r = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, t = e && r && typeof r.get == "function" ? r.get : null, n = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, i = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && i && typeof i.get == "function" ? i.get : null, f = o && Set.prototype.forEach, g = typeof WeakMap == "function" && WeakMap.prototype, h = g ? WeakMap.prototype.has : null, v = typeof WeakSet == "function" && WeakSet.prototype, m = v ? WeakSet.prototype.has : null, b = typeof WeakRef == "function" && WeakRef.prototype, c = b ? WeakRef.prototype.deref : null, d = Boolean.prototype.valueOf, A = Object.prototype.toString, l = Function.prototype.toString, p = String.prototype.match, y = String.prototype.slice, w = String.prototype.replace, S = String.prototype.toUpperCase, O = String.prototype.toLowerCase, x = RegExp.prototype.test, _ = Array.prototype.concat, $ = Array.prototype.join, M = Array.prototype.slice, P = Math.floor, F = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, E = Object.getOwnPropertySymbols, z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, B = typeof Symbol == "function" && typeof Symbol.iterator == "object", k = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === B || !0) ? Symbol.toStringTag : null, oe = Object.prototype.propertyIsEnumerable, ae = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(a) {
    return a.__proto__;
  } : null);
  function R(a, u) {
    if (a === 1 / 0 || a === -1 / 0 || a !== a || a && a > -1e3 && a < 1e3 || x.call(/e/, u))
      return u;
    var C = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof a == "number") {
      var D = a < 0 ? -P(-a) : P(a);
      if (D !== a) {
        var N = String(D), T = y.call(u, N.length + 1);
        return w.call(N, C, "$&_") + "." + w.call(w.call(T, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return w.call(u, C, "$&_");
  }
  var Z = wa, ie = Z.custom, Se = H(ie) ? ie : null, se = {
    __proto__: null,
    double: '"',
    single: "'"
  }, pe = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  hr = function a(u, C, D, N) {
    var T = C || {};
    if (V(T, "quoteStyle") && !V(se, T.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (V(T, "maxStringLength") && (typeof T.maxStringLength == "number" ? T.maxStringLength < 0 && T.maxStringLength !== 1 / 0 : T.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var ve = V(T, "customInspect") ? T.customInspect : !0;
    if (typeof ve != "boolean" && ve !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (V(T, "indent") && T.indent !== null && T.indent !== "	" && !(parseInt(T.indent, 10) === T.indent && T.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (V(T, "numericSeparator") && typeof T.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var we = T.numericSeparator;
    if (typeof u > "u")
      return "undefined";
    if (u === null)
      return "null";
    if (typeof u == "boolean")
      return u ? "true" : "false";
    if (typeof u == "string")
      return $t(u, T);
    if (typeof u == "number") {
      if (u === 0)
        return 1 / 0 / u > 0 ? "0" : "-0";
      var Q = String(u);
      return we ? R(u, Q) : Q;
    }
    if (typeof u == "bigint") {
      var me = String(u) + "n";
      return we ? R(u, me) : me;
    }
    var ur = typeof T.depth > "u" ? 5 : T.depth;
    if (typeof D > "u" && (D = 0), D >= ur && ur > 0 && typeof u == "object")
      return de(u) ? "[Array]" : "[Object]";
    var Ce = ia(T, D);
    if (typeof N > "u")
      N = [];
    else if (ge(N, u) >= 0)
      return "[Circular]";
    function re(Me, Je, fa) {
      if (Je && (N = M.call(N), N.push(Je)), fa) {
        var Dt = {
          depth: T.depth
        };
        return V(T, "quoteStyle") && (Dt.quoteStyle = T.quoteStyle), a(Me, Dt, D + 1, N);
      }
      return a(Me, T, D + 1, N);
    }
    if (typeof u == "function" && !W(u)) {
      var Tt = Pe(u), Rt = Ze(u, re);
      return "[Function" + (Tt ? ": " + Tt : " (anonymous)") + "]" + (Rt.length > 0 ? " { " + $.call(Rt, ", ") + " }" : "");
    }
    if (H(u)) {
      var It = B ? w.call(String(u), /^(Symbol\(.*\))_[^)]*$/, "$1") : z.call(u);
      return typeof u == "object" && !B ? Be(It) : It;
    }
    if (na(u)) {
      for (var Ge = "<" + O.call(String(u.nodeName)), fr = u.attributes || [], Qe = 0; Qe < fr.length; Qe++)
        Ge += " " + fr[Qe].name + "=" + ye(ue(fr[Qe].value), "double", T);
      return Ge += ">", u.childNodes && u.childNodes.length && (Ge += "..."), Ge += "</" + O.call(String(u.nodeName)) + ">", Ge;
    }
    if (de(u)) {
      if (u.length === 0)
        return "[]";
      var cr = Ze(u, re);
      return Ce && !aa(cr) ? "[" + ir(cr, Ce) + "]" : "[ " + $.call(cr, ", ") + " ]";
    }
    if (I(u)) {
      var lr = Ze(u, re);
      return !("cause" in Error.prototype) && "cause" in u && !oe.call(u, "cause") ? "{ [" + String(u) + "] " + $.call(_.call("[cause]: " + re(u.cause), lr), ", ") + " }" : lr.length === 0 ? "[" + String(u) + "]" : "{ [" + String(u) + "] " + $.call(lr, ", ") + " }";
    }
    if (typeof u == "object" && ve) {
      if (Se && typeof u[Se] == "function" && Z)
        return Z(u, { depth: ur - D });
      if (ve !== "symbol" && typeof u.inspect == "function")
        return u.inspect();
    }
    if (ee(u)) {
      var Ct = [];
      return n && n.call(u, function(Me, Je) {
        Ct.push(re(Je, u, !0) + " => " + re(Me, u));
      }), Pt("Map", t.call(u), Ct, Ce);
    }
    if (Ie(u)) {
      var Mt = [];
      return f && f.call(u, function(Me) {
        Mt.push(re(Me, u));
      }), Pt("Set", s.call(u), Mt, Ce);
    }
    if (Te(u))
      return ar("WeakMap");
    if (ta(u))
      return ar("WeakSet");
    if (Re(u))
      return ar("WeakRef");
    if (j(u))
      return Be(re(Number(u)));
    if (Y(u))
      return Be(re(F.call(u)));
    if (G(u))
      return Be(d.call(u));
    if (L(u))
      return Be(re(String(u)));
    if (typeof window < "u" && u === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && u === globalThis || typeof Nt < "u" && u === Nt)
      return "{ [object globalThis] }";
    if (!he(u) && !W(u)) {
      var sr = Ze(u, re), Ft = ae ? ae(u) === Object.prototype : u instanceof Object || u.constructor === Object, pr = u instanceof Object ? "" : "null prototype", jt = !Ft && k && Object(u) === u && k in u ? y.call(X(u), 8, -1) : pr ? "Object" : "", ua = Ft || typeof u.constructor != "function" ? "" : u.constructor.name ? u.constructor.name + " " : "", yr = ua + (jt || pr ? "[" + $.call(_.call([], jt || [], pr || []), ": ") + "] " : "");
      return sr.length === 0 ? yr + "{}" : Ce ? yr + "{" + ir(sr, Ce) + "}" : yr + "{ " + $.call(sr, ", ") + " }";
    }
    return String(u);
  };
  function ye(a, u, C) {
    var D = C.quoteStyle || u, N = se[D];
    return N + a + N;
  }
  function ue(a) {
    return w.call(String(a), /"/g, "&quot;");
  }
  function J(a) {
    return !k || !(typeof a == "object" && (k in a || typeof a[k] < "u"));
  }
  function de(a) {
    return X(a) === "[object Array]" && J(a);
  }
  function he(a) {
    return X(a) === "[object Date]" && J(a);
  }
  function W(a) {
    return X(a) === "[object RegExp]" && J(a);
  }
  function I(a) {
    return X(a) === "[object Error]" && J(a);
  }
  function L(a) {
    return X(a) === "[object String]" && J(a);
  }
  function j(a) {
    return X(a) === "[object Number]" && J(a);
  }
  function G(a) {
    return X(a) === "[object Boolean]" && J(a);
  }
  function H(a) {
    if (B)
      return a && typeof a == "object" && a instanceof Symbol;
    if (typeof a == "symbol")
      return !0;
    if (!a || typeof a != "object" || !z)
      return !1;
    try {
      return z.call(a), !0;
    } catch {
    }
    return !1;
  }
  function Y(a) {
    if (!a || typeof a != "object" || !F)
      return !1;
    try {
      return F.call(a), !0;
    } catch {
    }
    return !1;
  }
  var K = Object.prototype.hasOwnProperty || function(a) {
    return a in this;
  };
  function V(a, u) {
    return K.call(a, u);
  }
  function X(a) {
    return A.call(a);
  }
  function Pe(a) {
    if (a.name)
      return a.name;
    var u = p.call(l.call(a), /^function\s*([\w$]+)/);
    return u ? u[1] : null;
  }
  function ge(a, u) {
    if (a.indexOf)
      return a.indexOf(u);
    for (var C = 0, D = a.length; C < D; C++)
      if (a[C] === u)
        return C;
    return -1;
  }
  function ee(a) {
    if (!t || !a || typeof a != "object")
      return !1;
    try {
      t.call(a);
      try {
        s.call(a);
      } catch {
        return !0;
      }
      return a instanceof Map;
    } catch {
    }
    return !1;
  }
  function Te(a) {
    if (!h || !a || typeof a != "object")
      return !1;
    try {
      h.call(a, h);
      try {
        m.call(a, m);
      } catch {
        return !0;
      }
      return a instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Re(a) {
    if (!c || !a || typeof a != "object")
      return !1;
    try {
      return c.call(a), !0;
    } catch {
    }
    return !1;
  }
  function Ie(a) {
    if (!s || !a || typeof a != "object")
      return !1;
    try {
      s.call(a);
      try {
        t.call(a);
      } catch {
        return !0;
      }
      return a instanceof Set;
    } catch {
    }
    return !1;
  }
  function ta(a) {
    if (!m || !a || typeof a != "object")
      return !1;
    try {
      m.call(a, m);
      try {
        h.call(a, h);
      } catch {
        return !0;
      }
      return a instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function na(a) {
    return !a || typeof a != "object" ? !1 : typeof HTMLElement < "u" && a instanceof HTMLElement ? !0 : typeof a.nodeName == "string" && typeof a.getAttribute == "function";
  }
  function $t(a, u) {
    if (a.length > u.maxStringLength) {
      var C = a.length - u.maxStringLength, D = "... " + C + " more character" + (C > 1 ? "s" : "");
      return $t(y.call(a, 0, u.maxStringLength), u) + D;
    }
    var N = pe[u.quoteStyle || "single"];
    N.lastIndex = 0;
    var T = w.call(w.call(a, N, "\\$1"), /[\x00-\x1f]/g, oa);
    return ye(T, "single", u);
  }
  function oa(a) {
    var u = a.charCodeAt(0), C = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[u];
    return C ? "\\" + C : "\\x" + (u < 16 ? "0" : "") + S.call(u.toString(16));
  }
  function Be(a) {
    return "Object(" + a + ")";
  }
  function ar(a) {
    return a + " { ? }";
  }
  function Pt(a, u, C, D) {
    var N = D ? ir(C, D) : $.call(C, ", ");
    return a + " (" + u + ") {" + N + "}";
  }
  function aa(a) {
    for (var u = 0; u < a.length; u++)
      if (ge(a[u], `
`) >= 0)
        return !1;
    return !0;
  }
  function ia(a, u) {
    var C;
    if (a.indent === "	")
      C = "	";
    else if (typeof a.indent == "number" && a.indent > 0)
      C = $.call(Array(a.indent + 1), " ");
    else
      return null;
    return {
      base: C,
      prev: $.call(Array(u + 1), C)
    };
  }
  function ir(a, u) {
    if (a.length === 0)
      return "";
    var C = `
` + u.prev + u.base;
    return C + $.call(a, "," + C) + `
` + u.prev;
  }
  function Ze(a, u) {
    var C = de(a), D = [];
    if (C) {
      D.length = a.length;
      for (var N = 0; N < a.length; N++)
        D[N] = V(a, N) ? u(a[N], a) : "";
    }
    var T = typeof E == "function" ? E(a) : [], ve;
    if (B) {
      ve = {};
      for (var we = 0; we < T.length; we++)
        ve["$" + T[we]] = T[we];
    }
    for (var Q in a)
      V(a, Q) && (C && String(Number(Q)) === Q && Q < a.length || B && ve["$" + Q] instanceof Symbol || (x.call(/[^\w$]/, Q) ? D.push(u(Q, a) + ": " + u(a[Q], a)) : D.push(Q + ": " + u(a[Q], a))));
    if (typeof E == "function")
      for (var me = 0; me < T.length; me++)
        oe.call(a, T[me]) && D.push("[" + u(T[me]) + "]: " + u(a[T[me]], a));
    return D;
  }
  return hr;
}
var gr, Bt;
function Aa() {
  if (Bt) return gr;
  Bt = 1;
  var e = /* @__PURE__ */ er(), r = /* @__PURE__ */ Ne(), t = function(f, g, h) {
    for (var v = f, m; (m = v.next) != null; v = m)
      if (m.key === g)
        return v.next = m.next, h || (m.next = /** @type {NonNullable<typeof list.next>} */
        f.next, f.next = m), m;
  }, n = function(f, g) {
    if (f) {
      var h = t(f, g);
      return h && h.value;
    }
  }, o = function(f, g, h) {
    var v = t(f, g);
    v ? v.value = h : f.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: g,
      next: f.next,
      value: h
    };
  }, i = function(f, g) {
    return f ? !!t(f, g) : !1;
  }, s = function(f, g) {
    if (f)
      return t(f, g, !0);
  };
  return gr = function() {
    var g, h = {
      assert: function(v) {
        if (!h.has(v))
          throw new r("Side channel does not contain " + e(v));
      },
      delete: function(v) {
        var m = g && g.next, b = s(g, v);
        return b && m && m === b && (g = void 0), !!b;
      },
      get: function(v) {
        return n(g, v);
      },
      has: function(v) {
        return i(g, v);
      },
      set: function(v, m) {
        g || (g = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          g,
          v,
          m
        );
      }
    };
    return h;
  }, gr;
}
var vr, Gt;
function lo() {
  return Gt || (Gt = 1, vr = Object), vr;
}
var mr, Wt;
function Oa() {
  return Wt || (Wt = 1, mr = Error), mr;
}
var br, zt;
function xa() {
  return zt || (zt = 1, br = EvalError), br;
}
var Sr, Ht;
function _a() {
  return Ht || (Ht = 1, Sr = RangeError), Sr;
}
var wr, Kt;
function Ea() {
  return Kt || (Kt = 1, wr = ReferenceError), wr;
}
var Ar, Vt;
function $a() {
  return Vt || (Vt = 1, Ar = SyntaxError), Ar;
}
var Or, kt;
function Pa() {
  return kt || (kt = 1, Or = URIError), Or;
}
var xr, Zt;
function Ta() {
  return Zt || (Zt = 1, xr = Math.abs), xr;
}
var _r, Qt;
function Ra() {
  return Qt || (Qt = 1, _r = Math.floor), _r;
}
var Er, Jt;
function Ia() {
  return Jt || (Jt = 1, Er = Math.max), Er;
}
var $r, Yt;
function Ca() {
  return Yt || (Yt = 1, $r = Math.min), $r;
}
var Pr, Xt;
function Ma() {
  return Xt || (Xt = 1, Pr = Math.pow), Pr;
}
var Tr, en;
function Fa() {
  return en || (en = 1, Tr = Math.round), Tr;
}
var Rr, rn;
function ja() {
  return rn || (rn = 1, Rr = Number.isNaN || function(r) {
    return r !== r;
  }), Rr;
}
var Ir, tn;
function Da() {
  if (tn) return Ir;
  tn = 1;
  var e = /* @__PURE__ */ ja();
  return Ir = function(t) {
    return e(t) || t === 0 ? t : t < 0 ? -1 : 1;
  }, Ir;
}
var Cr, nn;
function qa() {
  return nn || (nn = 1, Cr = Object.getOwnPropertyDescriptor), Cr;
}
var Mr, on;
function so() {
  if (on) return Mr;
  on = 1;
  var e = /* @__PURE__ */ qa();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Mr = e, Mr;
}
var Fr, an;
function Na() {
  if (an) return Fr;
  an = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Fr = e, Fr;
}
var jr, un;
function Ua() {
  return un || (un = 1, jr = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var r = {}, t = Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return !1;
    var o = 42;
    r[t] = o;
    for (var i in r)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(r);
    if (s.length !== 1 || s[0] !== t || !Object.prototype.propertyIsEnumerable.call(r, t))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var f = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(r, t)
      );
      if (f.value !== o || f.enumerable !== !0)
        return !1;
    }
    return !0;
  }), jr;
}
var Dr, fn;
function La() {
  if (fn) return Dr;
  fn = 1;
  var e = typeof Symbol < "u" && Symbol, r = Ua();
  return Dr = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : r();
  }, Dr;
}
var qr, cn;
function po() {
  return cn || (cn = 1, qr = typeof Reflect < "u" && Reflect.getPrototypeOf || null), qr;
}
var Nr, ln;
function yo() {
  if (ln) return Nr;
  ln = 1;
  var e = /* @__PURE__ */ lo();
  return Nr = e.getPrototypeOf || null, Nr;
}
var Ur, sn;
function Ba() {
  if (sn) return Ur;
  sn = 1;
  var e = "Function.prototype.bind called on incompatible ", r = Object.prototype.toString, t = Math.max, n = "[object Function]", o = function(g, h) {
    for (var v = [], m = 0; m < g.length; m += 1)
      v[m] = g[m];
    for (var b = 0; b < h.length; b += 1)
      v[b + g.length] = h[b];
    return v;
  }, i = function(g, h) {
    for (var v = [], m = h, b = 0; m < g.length; m += 1, b += 1)
      v[b] = g[m];
    return v;
  }, s = function(f, g) {
    for (var h = "", v = 0; v < f.length; v += 1)
      h += f[v], v + 1 < f.length && (h += g);
    return h;
  };
  return Ur = function(g) {
    var h = this;
    if (typeof h != "function" || r.apply(h) !== n)
      throw new TypeError(e + h);
    for (var v = i(arguments, 1), m, b = function() {
      if (this instanceof m) {
        var p = h.apply(
          this,
          o(v, arguments)
        );
        return Object(p) === p ? p : this;
      }
      return h.apply(
        g,
        o(v, arguments)
      );
    }, c = t(0, h.length - v.length), d = [], A = 0; A < c; A++)
      d[A] = "$" + A;
    if (m = Function("binder", "return function (" + s(d, ",") + "){ return binder.apply(this,arguments); }")(b), h.prototype) {
      var l = function() {
      };
      l.prototype = h.prototype, m.prototype = new l(), l.prototype = null;
    }
    return m;
  }, Ur;
}
var Lr, pn;
function rr() {
  if (pn) return Lr;
  pn = 1;
  var e = Ba();
  return Lr = Function.prototype.bind || e, Lr;
}
var Br, yn;
function dt() {
  return yn || (yn = 1, Br = Function.prototype.call), Br;
}
var Gr, dn;
function ho() {
  return dn || (dn = 1, Gr = Function.prototype.apply), Gr;
}
var Wr, hn;
function Ga() {
  return hn || (hn = 1, Wr = typeof Reflect < "u" && Reflect && Reflect.apply), Wr;
}
var zr, gn;
function Wa() {
  if (gn) return zr;
  gn = 1;
  var e = rr(), r = ho(), t = dt(), n = Ga();
  return zr = n || e.call(t, r), zr;
}
var Hr, vn;
function go() {
  if (vn) return Hr;
  vn = 1;
  var e = rr(), r = /* @__PURE__ */ Ne(), t = dt(), n = Wa();
  return Hr = function(i) {
    if (i.length < 1 || typeof i[0] != "function")
      throw new r("a function is required");
    return n(e, t, i);
  }, Hr;
}
var Kr, mn;
function za() {
  if (mn) return Kr;
  mn = 1;
  var e = go(), r = /* @__PURE__ */ so(), t;
  try {
    t = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!t && r && r(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, i = o.getPrototypeOf;
  return Kr = n && typeof n.get == "function" ? e([n.get]) : typeof i == "function" ? (
    /** @type {import('./get')} */
    function(f) {
      return i(f == null ? f : o(f));
    }
  ) : !1, Kr;
}
var Vr, bn;
function Ha() {
  if (bn) return Vr;
  bn = 1;
  var e = po(), r = yo(), t = /* @__PURE__ */ za();
  return Vr = e ? function(o) {
    return e(o);
  } : r ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return r(o);
  } : t ? function(o) {
    return t(o);
  } : null, Vr;
}
var kr, Sn;
function Ka() {
  if (Sn) return kr;
  Sn = 1;
  var e = Function.prototype.call, r = Object.prototype.hasOwnProperty, t = rr();
  return kr = t.call(e, r), kr;
}
var Zr, wn;
function ht() {
  if (wn) return Zr;
  wn = 1;
  var e, r = /* @__PURE__ */ lo(), t = /* @__PURE__ */ Oa(), n = /* @__PURE__ */ xa(), o = /* @__PURE__ */ _a(), i = /* @__PURE__ */ Ea(), s = /* @__PURE__ */ $a(), f = /* @__PURE__ */ Ne(), g = /* @__PURE__ */ Pa(), h = /* @__PURE__ */ Ta(), v = /* @__PURE__ */ Ra(), m = /* @__PURE__ */ Ia(), b = /* @__PURE__ */ Ca(), c = /* @__PURE__ */ Ma(), d = /* @__PURE__ */ Fa(), A = /* @__PURE__ */ Da(), l = Function, p = function(W) {
    try {
      return l('"use strict"; return (' + W + ").constructor;")();
    } catch {
    }
  }, y = /* @__PURE__ */ so(), w = /* @__PURE__ */ Na(), S = function() {
    throw new f();
  }, O = y ? function() {
    try {
      return arguments.callee, S;
    } catch {
      try {
        return y(arguments, "callee").get;
      } catch {
        return S;
      }
    }
  }() : S, x = La()(), _ = Ha(), $ = yo(), M = po(), P = ho(), F = dt(), E = {}, z = typeof Uint8Array > "u" || !_ ? e : _(Uint8Array), B = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": x && _ ? _([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": E,
    "%AsyncGenerator%": E,
    "%AsyncGeneratorFunction%": E,
    "%AsyncIteratorPrototype%": E,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": t,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": l,
    "%GeneratorFunction%": E,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": x && _ ? _(_([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !x || !_ ? e : _((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": r,
    "%Object.getOwnPropertyDescriptor%": y,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": i,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !x || !_ ? e : _((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": x && _ ? _(""[Symbol.iterator]()) : e,
    "%Symbol%": x ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": O,
    "%TypedArray%": z,
    "%TypeError%": f,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": g,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": F,
    "%Function.prototype.apply%": P,
    "%Object.defineProperty%": w,
    "%Object.getPrototypeOf%": $,
    "%Math.abs%": h,
    "%Math.floor%": v,
    "%Math.max%": m,
    "%Math.min%": b,
    "%Math.pow%": c,
    "%Math.round%": d,
    "%Math.sign%": A,
    "%Reflect.getPrototypeOf%": M
  };
  if (_)
    try {
      null.error;
    } catch (W) {
      var k = _(_(W));
      B["%Error.prototype%"] = k;
    }
  var oe = function W(I) {
    var L;
    if (I === "%AsyncFunction%")
      L = p("async function () {}");
    else if (I === "%GeneratorFunction%")
      L = p("function* () {}");
    else if (I === "%AsyncGeneratorFunction%")
      L = p("async function* () {}");
    else if (I === "%AsyncGenerator%") {
      var j = W("%AsyncGeneratorFunction%");
      j && (L = j.prototype);
    } else if (I === "%AsyncIteratorPrototype%") {
      var G = W("%AsyncGenerator%");
      G && _ && (L = _(G.prototype));
    }
    return B[I] = L, L;
  }, ae = {
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
  }, R = rr(), Z = /* @__PURE__ */ Ka(), ie = R.call(F, Array.prototype.concat), Se = R.call(P, Array.prototype.splice), se = R.call(F, String.prototype.replace), pe = R.call(F, String.prototype.slice), ye = R.call(F, RegExp.prototype.exec), ue = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, J = /\\(\\)?/g, de = function(I) {
    var L = pe(I, 0, 1), j = pe(I, -1);
    if (L === "%" && j !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (j === "%" && L !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var G = [];
    return se(I, ue, function(H, Y, K, V) {
      G[G.length] = K ? se(V, J, "$1") : Y || H;
    }), G;
  }, he = function(I, L) {
    var j = I, G;
    if (Z(ae, j) && (G = ae[j], j = "%" + G[0] + "%"), Z(B, j)) {
      var H = B[j];
      if (H === E && (H = oe(j)), typeof H > "u" && !L)
        throw new f("intrinsic " + I + " exists, but is not available. Please file an issue!");
      return {
        alias: G,
        name: j,
        value: H
      };
    }
    throw new s("intrinsic " + I + " does not exist!");
  };
  return Zr = function(I, L) {
    if (typeof I != "string" || I.length === 0)
      throw new f("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof L != "boolean")
      throw new f('"allowMissing" argument must be a boolean');
    if (ye(/^%?[^%]*%?$/, I) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var j = de(I), G = j.length > 0 ? j[0] : "", H = he("%" + G + "%", L), Y = H.name, K = H.value, V = !1, X = H.alias;
    X && (G = X[0], Se(j, ie([0, 1], X)));
    for (var Pe = 1, ge = !0; Pe < j.length; Pe += 1) {
      var ee = j[Pe], Te = pe(ee, 0, 1), Re = pe(ee, -1);
      if ((Te === '"' || Te === "'" || Te === "`" || Re === '"' || Re === "'" || Re === "`") && Te !== Re)
        throw new s("property names with quotes must have matching quotes");
      if ((ee === "constructor" || !ge) && (V = !0), G += "." + ee, Y = "%" + G + "%", Z(B, Y))
        K = B[Y];
      else if (K != null) {
        if (!(ee in K)) {
          if (!L)
            throw new f("base intrinsic for " + I + " exists, but the property is not available.");
          return;
        }
        if (y && Pe + 1 >= j.length) {
          var Ie = y(K, ee);
          ge = !!Ie, ge && "get" in Ie && !("originalValue" in Ie.get) ? K = Ie.get : K = K[ee];
        } else
          ge = Z(K, ee), K = K[ee];
        ge && !V && (B[Y] = K);
      }
    }
    return K;
  }, Zr;
}
var Qr, An;
function vo() {
  if (An) return Qr;
  An = 1;
  var e = /* @__PURE__ */ ht(), r = go(), t = r([e("%String.prototype.indexOf%")]);
  return Qr = function(o, i) {
    var s = (
      /** @type {Parameters<typeof callBindBasic>[0][0]} */
      e(o, !!i)
    );
    return typeof s == "function" && t(o, ".prototype.") > -1 ? r([s]) : s;
  }, Qr;
}
var Jr, On;
function mo() {
  if (On) return Jr;
  On = 1;
  var e = /* @__PURE__ */ ht(), r = /* @__PURE__ */ vo(), t = /* @__PURE__ */ er(), n = /* @__PURE__ */ Ne(), o = e("%Map%", !0), i = r("Map.prototype.get", !0), s = r("Map.prototype.set", !0), f = r("Map.prototype.has", !0), g = r("Map.prototype.delete", !0), h = r("Map.prototype.size", !0);
  return Jr = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var m, b = {
      assert: function(c) {
        if (!b.has(c))
          throw new n("Side channel does not contain " + t(c));
      },
      delete: function(c) {
        if (m) {
          var d = g(m, c);
          return h(m) === 0 && (m = void 0), d;
        }
        return !1;
      },
      get: function(c) {
        if (m)
          return i(m, c);
      },
      has: function(c) {
        return m ? f(m, c) : !1;
      },
      set: function(c, d) {
        m || (m = new o()), s(m, c, d);
      }
    };
    return b;
  }, Jr;
}
var Yr, xn;
function Va() {
  if (xn) return Yr;
  xn = 1;
  var e = /* @__PURE__ */ ht(), r = /* @__PURE__ */ vo(), t = /* @__PURE__ */ er(), n = mo(), o = /* @__PURE__ */ Ne(), i = e("%WeakMap%", !0), s = r("WeakMap.prototype.get", !0), f = r("WeakMap.prototype.set", !0), g = r("WeakMap.prototype.has", !0), h = r("WeakMap.prototype.delete", !0);
  return Yr = i ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var m, b, c = {
        assert: function(d) {
          if (!c.has(d))
            throw new o("Side channel does not contain " + t(d));
        },
        delete: function(d) {
          if (i && d && (typeof d == "object" || typeof d == "function")) {
            if (m)
              return h(m, d);
          } else if (n && b)
            return b.delete(d);
          return !1;
        },
        get: function(d) {
          return i && d && (typeof d == "object" || typeof d == "function") && m ? s(m, d) : b && b.get(d);
        },
        has: function(d) {
          return i && d && (typeof d == "object" || typeof d == "function") && m ? g(m, d) : !!b && b.has(d);
        },
        set: function(d, A) {
          i && d && (typeof d == "object" || typeof d == "function") ? (m || (m = new i()), f(m, d, A)) : n && (b || (b = n()), b.set(d, A));
        }
      };
      return c;
    }
  ) : n, Yr;
}
var Xr, _n;
function ka() {
  if (_n) return Xr;
  _n = 1;
  var e = /* @__PURE__ */ Ne(), r = /* @__PURE__ */ er(), t = Aa(), n = mo(), o = Va(), i = o || n || t;
  return Xr = function() {
    var f, g = {
      assert: function(h) {
        if (!g.has(h))
          throw new e("Side channel does not contain " + r(h));
      },
      delete: function(h) {
        return !!f && f.delete(h);
      },
      get: function(h) {
        return f && f.get(h);
      },
      has: function(h) {
        return !!f && f.has(h);
      },
      set: function(h, v) {
        f || (f = i()), f.set(h, v);
      }
    };
    return g;
  }, Xr;
}
var et, En;
function gt() {
  if (En) return et;
  En = 1;
  var e = String.prototype.replace, r = /%20/g, t = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return et = {
    default: t.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, r, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: t.RFC1738,
    RFC3986: t.RFC3986
  }, et;
}
var rt, $n;
function bo() {
  if ($n) return rt;
  $n = 1;
  var e = /* @__PURE__ */ gt(), r = Object.prototype.hasOwnProperty, t = Array.isArray, n = function() {
    for (var l = [], p = 0; p < 256; ++p)
      l.push("%" + ((p < 16 ? "0" : "") + p.toString(16)).toUpperCase());
    return l;
  }(), o = function(p) {
    for (; p.length > 1; ) {
      var y = p.pop(), w = y.obj[y.prop];
      if (t(w)) {
        for (var S = [], O = 0; O < w.length; ++O)
          typeof w[O] < "u" && S.push(w[O]);
        y.obj[y.prop] = S;
      }
    }
  }, i = function(p, y) {
    for (var w = y && y.plainObjects ? { __proto__: null } : {}, S = 0; S < p.length; ++S)
      typeof p[S] < "u" && (w[S] = p[S]);
    return w;
  }, s = function l(p, y, w) {
    if (!y)
      return p;
    if (typeof y != "object" && typeof y != "function") {
      if (t(p))
        p.push(y);
      else if (p && typeof p == "object")
        (w && (w.plainObjects || w.allowPrototypes) || !r.call(Object.prototype, y)) && (p[y] = !0);
      else
        return [p, y];
      return p;
    }
    if (!p || typeof p != "object")
      return [p].concat(y);
    var S = p;
    return t(p) && !t(y) && (S = i(p, w)), t(p) && t(y) ? (y.forEach(function(O, x) {
      if (r.call(p, x)) {
        var _ = p[x];
        _ && typeof _ == "object" && O && typeof O == "object" ? p[x] = l(_, O, w) : p.push(O);
      } else
        p[x] = O;
    }), p) : Object.keys(y).reduce(function(O, x) {
      var _ = y[x];
      return r.call(O, x) ? O[x] = l(O[x], _, w) : O[x] = _, O;
    }, S);
  }, f = function(p, y) {
    return Object.keys(y).reduce(function(w, S) {
      return w[S] = y[S], w;
    }, p);
  }, g = function(l, p, y) {
    var w = l.replace(/\+/g, " ");
    if (y === "iso-8859-1")
      return w.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }, h = 1024, v = function(p, y, w, S, O) {
    if (p.length === 0)
      return p;
    var x = p;
    if (typeof p == "symbol" ? x = Symbol.prototype.toString.call(p) : typeof p != "string" && (x = String(p)), w === "iso-8859-1")
      return escape(x).replace(/%u[0-9a-f]{4}/gi, function(z) {
        return "%26%23" + parseInt(z.slice(2), 16) + "%3B";
      });
    for (var _ = "", $ = 0; $ < x.length; $ += h) {
      for (var M = x.length >= h ? x.slice($, $ + h) : x, P = [], F = 0; F < M.length; ++F) {
        var E = M.charCodeAt(F);
        if (E === 45 || E === 46 || E === 95 || E === 126 || E >= 48 && E <= 57 || E >= 65 && E <= 90 || E >= 97 && E <= 122 || O === e.RFC1738 && (E === 40 || E === 41)) {
          P[P.length] = M.charAt(F);
          continue;
        }
        if (E < 128) {
          P[P.length] = n[E];
          continue;
        }
        if (E < 2048) {
          P[P.length] = n[192 | E >> 6] + n[128 | E & 63];
          continue;
        }
        if (E < 55296 || E >= 57344) {
          P[P.length] = n[224 | E >> 12] + n[128 | E >> 6 & 63] + n[128 | E & 63];
          continue;
        }
        F += 1, E = 65536 + ((E & 1023) << 10 | M.charCodeAt(F) & 1023), P[P.length] = n[240 | E >> 18] + n[128 | E >> 12 & 63] + n[128 | E >> 6 & 63] + n[128 | E & 63];
      }
      _ += P.join("");
    }
    return _;
  }, m = function(p) {
    for (var y = [{ obj: { o: p }, prop: "o" }], w = [], S = 0; S < y.length; ++S)
      for (var O = y[S], x = O.obj[O.prop], _ = Object.keys(x), $ = 0; $ < _.length; ++$) {
        var M = _[$], P = x[M];
        typeof P == "object" && P !== null && w.indexOf(P) === -1 && (y.push({ obj: x, prop: M }), w.push(P));
      }
    return o(y), p;
  }, b = function(p) {
    return Object.prototype.toString.call(p) === "[object RegExp]";
  }, c = function(p) {
    return !p || typeof p != "object" ? !1 : !!(p.constructor && p.constructor.isBuffer && p.constructor.isBuffer(p));
  }, d = function(p, y) {
    return [].concat(p, y);
  }, A = function(p, y) {
    if (t(p)) {
      for (var w = [], S = 0; S < p.length; S += 1)
        w.push(y(p[S]));
      return w;
    }
    return y(p);
  };
  return rt = {
    arrayToObject: i,
    assign: f,
    combine: d,
    compact: m,
    decode: g,
    encode: v,
    isBuffer: c,
    isRegExp: b,
    maybeMap: A,
    merge: s
  }, rt;
}
var tt, Pn;
function Za() {
  if (Pn) return tt;
  Pn = 1;
  var e = ka(), r = /* @__PURE__ */ bo(), t = /* @__PURE__ */ gt(), n = Object.prototype.hasOwnProperty, o = {
    brackets: function(l) {
      return l + "[]";
    },
    comma: "comma",
    indices: function(l, p) {
      return l + "[" + p + "]";
    },
    repeat: function(l) {
      return l;
    }
  }, i = Array.isArray, s = Array.prototype.push, f = function(A, l) {
    s.apply(A, i(l) ? l : [l]);
  }, g = Date.prototype.toISOString, h = t.default, v = {
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
    format: h,
    formatter: t.formatters[h],
    // deprecated
    indices: !1,
    serializeDate: function(l) {
      return g.call(l);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, m = function(l) {
    return typeof l == "string" || typeof l == "number" || typeof l == "boolean" || typeof l == "symbol" || typeof l == "bigint";
  }, b = {}, c = function A(l, p, y, w, S, O, x, _, $, M, P, F, E, z, B, k, oe, ae) {
    for (var R = l, Z = ae, ie = 0, Se = !1; (Z = Z.get(b)) !== void 0 && !Se; ) {
      var se = Z.get(l);
      if (ie += 1, typeof se < "u") {
        if (se === ie)
          throw new RangeError("Cyclic object value");
        Se = !0;
      }
      typeof Z.get(b) > "u" && (ie = 0);
    }
    if (typeof M == "function" ? R = M(p, R) : R instanceof Date ? R = E(R) : y === "comma" && i(R) && (R = r.maybeMap(R, function(Y) {
      return Y instanceof Date ? E(Y) : Y;
    })), R === null) {
      if (O)
        return $ && !k ? $(p, v.encoder, oe, "key", z) : p;
      R = "";
    }
    if (m(R) || r.isBuffer(R)) {
      if ($) {
        var pe = k ? p : $(p, v.encoder, oe, "key", z);
        return [B(pe) + "=" + B($(R, v.encoder, oe, "value", z))];
      }
      return [B(p) + "=" + B(String(R))];
    }
    var ye = [];
    if (typeof R > "u")
      return ye;
    var ue;
    if (y === "comma" && i(R))
      k && $ && (R = r.maybeMap(R, $)), ue = [{ value: R.length > 0 ? R.join(",") || null : void 0 }];
    else if (i(M))
      ue = M;
    else {
      var J = Object.keys(R);
      ue = P ? J.sort(P) : J;
    }
    var de = _ ? String(p).replace(/\./g, "%2E") : String(p), he = w && i(R) && R.length === 1 ? de + "[]" : de;
    if (S && i(R) && R.length === 0)
      return he + "[]";
    for (var W = 0; W < ue.length; ++W) {
      var I = ue[W], L = typeof I == "object" && I && typeof I.value < "u" ? I.value : R[I];
      if (!(x && L === null)) {
        var j = F && _ ? String(I).replace(/\./g, "%2E") : String(I), G = i(R) ? typeof y == "function" ? y(he, j) : he : he + (F ? "." + j : "[" + j + "]");
        ae.set(l, ie);
        var H = e();
        H.set(b, ae), f(ye, A(
          L,
          G,
          y,
          w,
          S,
          O,
          x,
          _,
          y === "comma" && k && i(R) ? null : $,
          M,
          P,
          F,
          E,
          z,
          B,
          k,
          oe,
          H
        ));
      }
    }
    return ye;
  }, d = function(l) {
    if (!l)
      return v;
    if (typeof l.allowEmptyArrays < "u" && typeof l.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof l.encodeDotInKeys < "u" && typeof l.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (l.encoder !== null && typeof l.encoder < "u" && typeof l.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var p = l.charset || v.charset;
    if (typeof l.charset < "u" && l.charset !== "utf-8" && l.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var y = t.default;
    if (typeof l.format < "u") {
      if (!n.call(t.formatters, l.format))
        throw new TypeError("Unknown format option provided.");
      y = l.format;
    }
    var w = t.formatters[y], S = v.filter;
    (typeof l.filter == "function" || i(l.filter)) && (S = l.filter);
    var O;
    if (l.arrayFormat in o ? O = l.arrayFormat : "indices" in l ? O = l.indices ? "indices" : "repeat" : O = v.arrayFormat, "commaRoundTrip" in l && typeof l.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var x = typeof l.allowDots > "u" ? l.encodeDotInKeys === !0 ? !0 : v.allowDots : !!l.allowDots;
    return {
      addQueryPrefix: typeof l.addQueryPrefix == "boolean" ? l.addQueryPrefix : v.addQueryPrefix,
      allowDots: x,
      allowEmptyArrays: typeof l.allowEmptyArrays == "boolean" ? !!l.allowEmptyArrays : v.allowEmptyArrays,
      arrayFormat: O,
      charset: p,
      charsetSentinel: typeof l.charsetSentinel == "boolean" ? l.charsetSentinel : v.charsetSentinel,
      commaRoundTrip: !!l.commaRoundTrip,
      delimiter: typeof l.delimiter > "u" ? v.delimiter : l.delimiter,
      encode: typeof l.encode == "boolean" ? l.encode : v.encode,
      encodeDotInKeys: typeof l.encodeDotInKeys == "boolean" ? l.encodeDotInKeys : v.encodeDotInKeys,
      encoder: typeof l.encoder == "function" ? l.encoder : v.encoder,
      encodeValuesOnly: typeof l.encodeValuesOnly == "boolean" ? l.encodeValuesOnly : v.encodeValuesOnly,
      filter: S,
      format: y,
      formatter: w,
      serializeDate: typeof l.serializeDate == "function" ? l.serializeDate : v.serializeDate,
      skipNulls: typeof l.skipNulls == "boolean" ? l.skipNulls : v.skipNulls,
      sort: typeof l.sort == "function" ? l.sort : null,
      strictNullHandling: typeof l.strictNullHandling == "boolean" ? l.strictNullHandling : v.strictNullHandling
    };
  };
  return tt = function(A, l) {
    var p = A, y = d(l), w, S;
    typeof y.filter == "function" ? (S = y.filter, p = S("", p)) : i(y.filter) && (S = y.filter, w = S);
    var O = [];
    if (typeof p != "object" || p === null)
      return "";
    var x = o[y.arrayFormat], _ = x === "comma" && y.commaRoundTrip;
    w || (w = Object.keys(p)), y.sort && w.sort(y.sort);
    for (var $ = e(), M = 0; M < w.length; ++M) {
      var P = w[M], F = p[P];
      y.skipNulls && F === null || f(O, c(
        F,
        P,
        x,
        _,
        y.allowEmptyArrays,
        y.strictNullHandling,
        y.skipNulls,
        y.encodeDotInKeys,
        y.encode ? y.encoder : null,
        y.filter,
        y.sort,
        y.allowDots,
        y.serializeDate,
        y.format,
        y.formatter,
        y.encodeValuesOnly,
        y.charset,
        $
      ));
    }
    var E = O.join(y.delimiter), z = y.addQueryPrefix === !0 ? "?" : "";
    return y.charsetSentinel && (y.charset === "iso-8859-1" ? z += "utf8=%26%2310003%3B&" : z += "utf8=%E2%9C%93&"), E.length > 0 ? z + E : "";
  }, tt;
}
var nt, Tn;
function Qa() {
  if (Tn) return nt;
  Tn = 1;
  var e = /* @__PURE__ */ bo(), r = Object.prototype.hasOwnProperty, t = Array.isArray, n = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: e.decode,
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
  }, o = function(b) {
    return b.replace(/&#(\d+);/g, function(c, d) {
      return String.fromCharCode(parseInt(d, 10));
    });
  }, i = function(b, c, d) {
    if (b && typeof b == "string" && c.comma && b.indexOf(",") > -1)
      return b.split(",");
    if (c.throwOnLimitExceeded && d >= c.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + c.arrayLimit + " element" + (c.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return b;
  }, s = "utf8=%26%2310003%3B", f = "utf8=%E2%9C%93", g = function(c, d) {
    var A = { __proto__: null }, l = d.ignoreQueryPrefix ? c.replace(/^\?/, "") : c;
    l = l.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var p = d.parameterLimit === 1 / 0 ? void 0 : d.parameterLimit, y = l.split(
      d.delimiter,
      d.throwOnLimitExceeded ? p + 1 : p
    );
    if (d.throwOnLimitExceeded && y.length > p)
      throw new RangeError("Parameter limit exceeded. Only " + p + " parameter" + (p === 1 ? "" : "s") + " allowed.");
    var w = -1, S, O = d.charset;
    if (d.charsetSentinel)
      for (S = 0; S < y.length; ++S)
        y[S].indexOf("utf8=") === 0 && (y[S] === f ? O = "utf-8" : y[S] === s && (O = "iso-8859-1"), w = S, S = y.length);
    for (S = 0; S < y.length; ++S)
      if (S !== w) {
        var x = y[S], _ = x.indexOf("]="), $ = _ === -1 ? x.indexOf("=") : _ + 1, M, P;
        $ === -1 ? (M = d.decoder(x, n.decoder, O, "key"), P = d.strictNullHandling ? null : "") : (M = d.decoder(x.slice(0, $), n.decoder, O, "key"), P = e.maybeMap(
          i(
            x.slice($ + 1),
            d,
            t(A[M]) ? A[M].length : 0
          ),
          function(E) {
            return d.decoder(E, n.decoder, O, "value");
          }
        )), P && d.interpretNumericEntities && O === "iso-8859-1" && (P = o(String(P))), x.indexOf("[]=") > -1 && (P = t(P) ? [P] : P);
        var F = r.call(A, M);
        F && d.duplicates === "combine" ? A[M] = e.combine(A[M], P) : (!F || d.duplicates === "last") && (A[M] = P);
      }
    return A;
  }, h = function(b, c, d, A) {
    var l = 0;
    if (b.length > 0 && b[b.length - 1] === "[]") {
      var p = b.slice(0, -1).join("");
      l = Array.isArray(c) && c[p] ? c[p].length : 0;
    }
    for (var y = A ? c : i(c, d, l), w = b.length - 1; w >= 0; --w) {
      var S, O = b[w];
      if (O === "[]" && d.parseArrays)
        S = d.allowEmptyArrays && (y === "" || d.strictNullHandling && y === null) ? [] : e.combine([], y);
      else {
        S = d.plainObjects ? { __proto__: null } : {};
        var x = O.charAt(0) === "[" && O.charAt(O.length - 1) === "]" ? O.slice(1, -1) : O, _ = d.decodeDotInKeys ? x.replace(/%2E/g, ".") : x, $ = parseInt(_, 10);
        !d.parseArrays && _ === "" ? S = { 0: y } : !isNaN($) && O !== _ && String($) === _ && $ >= 0 && d.parseArrays && $ <= d.arrayLimit ? (S = [], S[$] = y) : _ !== "__proto__" && (S[_] = y);
      }
      y = S;
    }
    return y;
  }, v = function(c, d, A, l) {
    if (c) {
      var p = A.allowDots ? c.replace(/\.([^.[]+)/g, "[$1]") : c, y = /(\[[^[\]]*])/, w = /(\[[^[\]]*])/g, S = A.depth > 0 && y.exec(p), O = S ? p.slice(0, S.index) : p, x = [];
      if (O) {
        if (!A.plainObjects && r.call(Object.prototype, O) && !A.allowPrototypes)
          return;
        x.push(O);
      }
      for (var _ = 0; A.depth > 0 && (S = w.exec(p)) !== null && _ < A.depth; ) {
        if (_ += 1, !A.plainObjects && r.call(Object.prototype, S[1].slice(1, -1)) && !A.allowPrototypes)
          return;
        x.push(S[1]);
      }
      if (S) {
        if (A.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + A.depth + " and strictDepth is true");
        x.push("[" + p.slice(S.index) + "]");
      }
      return h(x, d, A, l);
    }
  }, m = function(c) {
    if (!c)
      return n;
    if (typeof c.allowEmptyArrays < "u" && typeof c.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof c.decodeDotInKeys < "u" && typeof c.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (c.decoder !== null && typeof c.decoder < "u" && typeof c.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof c.charset < "u" && c.charset !== "utf-8" && c.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof c.throwOnLimitExceeded < "u" && typeof c.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var d = typeof c.charset > "u" ? n.charset : c.charset, A = typeof c.duplicates > "u" ? n.duplicates : c.duplicates;
    if (A !== "combine" && A !== "first" && A !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var l = typeof c.allowDots > "u" ? c.decodeDotInKeys === !0 ? !0 : n.allowDots : !!c.allowDots;
    return {
      allowDots: l,
      allowEmptyArrays: typeof c.allowEmptyArrays == "boolean" ? !!c.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof c.allowPrototypes == "boolean" ? c.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof c.allowSparse == "boolean" ? c.allowSparse : n.allowSparse,
      arrayLimit: typeof c.arrayLimit == "number" ? c.arrayLimit : n.arrayLimit,
      charset: d,
      charsetSentinel: typeof c.charsetSentinel == "boolean" ? c.charsetSentinel : n.charsetSentinel,
      comma: typeof c.comma == "boolean" ? c.comma : n.comma,
      decodeDotInKeys: typeof c.decodeDotInKeys == "boolean" ? c.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof c.decoder == "function" ? c.decoder : n.decoder,
      delimiter: typeof c.delimiter == "string" || e.isRegExp(c.delimiter) ? c.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof c.depth == "number" || c.depth === !1 ? +c.depth : n.depth,
      duplicates: A,
      ignoreQueryPrefix: c.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof c.interpretNumericEntities == "boolean" ? c.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof c.parameterLimit == "number" ? c.parameterLimit : n.parameterLimit,
      parseArrays: c.parseArrays !== !1,
      plainObjects: typeof c.plainObjects == "boolean" ? c.plainObjects : n.plainObjects,
      strictDepth: typeof c.strictDepth == "boolean" ? !!c.strictDepth : n.strictDepth,
      strictNullHandling: typeof c.strictNullHandling == "boolean" ? c.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof c.throwOnLimitExceeded == "boolean" ? c.throwOnLimitExceeded : !1
    };
  };
  return nt = function(b, c) {
    var d = m(c);
    if (b === "" || b === null || typeof b > "u")
      return d.plainObjects ? { __proto__: null } : {};
    for (var A = typeof b == "string" ? g(b, d) : b, l = d.plainObjects ? { __proto__: null } : {}, p = Object.keys(A), y = 0; y < p.length; ++y) {
      var w = p[y], S = v(w, A[w], d, typeof b == "string");
      l = e.merge(l, S, d);
    }
    return d.allowSparse === !0 ? l : e.compact(l);
  }, nt;
}
var ot, Rn;
function Ja() {
  if (Rn) return ot;
  Rn = 1;
  var e = /* @__PURE__ */ Za(), r = /* @__PURE__ */ Qa(), t = /* @__PURE__ */ gt();
  return ot = {
    formats: t,
    parse: r,
    stringify: e
  }, ot;
}
var So = /* @__PURE__ */ Ja();
class at {
  /**
   * @param {String} name - Route name.
   * @param {Object} definition - Route definition.
   * @param {Object} config - Ziggy configuration.
   */
  constructor(r, t, n) {
    this.name = r, this.definition = t, this.bindings = t.bindings ?? {}, this.wheres = t.wheres ?? {}, this.config = n;
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
    return ((r = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : r.map((t) => ({
      name: t.replace(/{|\??}/g, ""),
      required: !/\?}$/.test(t)
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
    const t = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (s, f, g, h) => {
      var m;
      const v = `(?<${g}>${((m = this.wheres[g]) == null ? void 0 : m.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return h ? `(${f}${v})?` : `${f}${v}`;
    }).replace(/^\w+:\/\//, ""), [n, o] = r.replace(/^\w+:\/\//, "").split("?"), i = new RegExp(`^${t}/?$`).exec(decodeURI(n));
    if (i) {
      for (const s in i.groups)
        i.groups[s] = typeof i.groups[s] == "string" ? decodeURIComponent(i.groups[s]) : i.groups[s];
      return { params: i.groups, query: So.parse(o) };
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
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (n, o, i) => {
      if (!i && [null, void 0].includes(r[o]))
        throw new Error(
          `Ziggy error: '${o}' parameter is required for route '${this.name}'.`
        );
      if (this.wheres[o] && !new RegExp(
        `^${i ? `(${this.wheres[o]})?` : this.wheres[o]}$`
      ).test(r[o] ?? ""))
        throw new Error(
          `Ziggy error: '${o}' parameter does not match required format '${this.wheres[o]}' for route '${this.name}'.`
        );
      return encodeURI(r[o] ?? "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(`${this.origin}//`, `${this.origin}/`).replace(/\/+$/, "") : this.template;
  }
}
class Ya extends String {
  /**
   * @param {String} [name] - Route name.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @param {Boolean} [absolute] - Whether to include the URL origin.
   * @param {Object} [config] - Ziggy configuration.
   */
  constructor(r, t, n = !0, o) {
    if (super(), this._config = o ?? (typeof Ziggy < "u" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy), this._config = { ...this._config, absolute: n }, r) {
      if (!this._config.routes[r])
        throw new Error(`Ziggy error: route '${r}' is not in the route list.`);
      this._route = new at(r, this._config.routes[r], this._config), this._params = this._parse(t);
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
    const r = Object.keys(this._params).filter((t) => !this._route.parameterSegments.some(({ name: n }) => n === t)).filter((t) => t !== "_query").reduce((t, n) => ({ ...t, [n]: this._params[n] }), {});
    return this._route.compile(this._params) + So.stringify(
      { ...r, ...this._params._query },
      {
        addQueryPrefix: !0,
        arrayFormat: "indices",
        encodeValuesOnly: !0,
        skipNulls: !0,
        encoder: (t, n) => typeof t == "boolean" ? Number(t) : n(t)
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
    let t = {};
    const [n, o] = Object.entries(this._config.routes).find(
      ([i, s]) => t = new at(i, s, this._config).matchesUrl(r)
    ) || [void 0, void 0];
    return { name: n, ...t, route: o };
  }
  _currentUrl() {
    const { host: r, pathname: t, search: n } = this._location();
    return (this._config.absolute ? r + t : t.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n;
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
  current(r, t) {
    const { name: n, params: o, query: i, route: s } = this._unresolve();
    if (!r) return n;
    const f = new RegExp(`^${r.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(
      n
    );
    if ([null, void 0].includes(t) || !f) return f;
    const g = new at(n, s, this._config);
    t = this._parse(t, g);
    const h = { ...o, ...i };
    if (Object.values(t).every((m) => !m) && !Object.values(h).some((m) => m !== void 0))
      return !0;
    const v = (m, b) => Object.entries(m).every(([c, d]) => Array.isArray(d) && Array.isArray(b[c]) ? d.every((A) => b[c].includes(A)) : typeof d == "object" && typeof b[c] == "object" && d !== null && b[c] !== null ? v(d, b[c]) : b[c] == d);
    return v(t, h);
  }
  /**
   * Get an object representing the current location (by default this will be
   * the JavaScript `window` global if it's available).
   *
   * @return {Object}
   */
  _location() {
    var o, i, s;
    const {
      host: r = "",
      pathname: t = "",
      search: n = ""
    } = typeof window < "u" ? window.location : {};
    return {
      host: ((o = this._config.location) == null ? void 0 : o.host) ?? r,
      pathname: ((i = this._config.location) == null ? void 0 : i.pathname) ?? t,
      search: ((s = this._config.location) == null ? void 0 : s.search) ?? n
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
    const { params: r, query: t } = this._unresolve();
    return { ...r, ...t };
  }
  /**
   * Check whether the given route exists.
   *
   * @param {String} name
   * @return {Boolean}
   */
  has(r) {
    return Object.keys(this._config.routes).includes(r);
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
  _parse(r = {}, t = this._route) {
    r ?? (r = {}), r = ["string", "number"].includes(typeof r) ? [r] : r;
    const n = t.parameterSegments.filter(({ name: o }) => !this._config.defaults[o]);
    return Array.isArray(r) ? r = r.reduce(
      (o, i, s) => n[s] ? { ...o, [n[s].name]: i } : typeof i == "object" ? { ...o, ...i } : { ...o, [i]: "" },
      {}
    ) : n.length === 1 && !r[n[0].name] && (r.hasOwnProperty(Object.values(t.bindings)[0]) || r.hasOwnProperty("id")) && (r = { [n[0].name]: r }), {
      ...this._defaults(t),
      ...this._substituteBindings(r, t)
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
    return r.parameterSegments.filter(({ name: t }) => this._config.defaults[t]).reduce(
      (t, { name: n }, o) => ({ ...t, [n]: this._config.defaults[n] }),
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
  _substituteBindings(r, { bindings: t, parameterSegments: n }) {
    return Object.entries(r).reduce((o, [i, s]) => {
      if (!s || typeof s != "object" || Array.isArray(s) || !n.some(({ name: f }) => f === i))
        return { ...o, [i]: s };
      if (!s.hasOwnProperty(t[i]))
        if (s.hasOwnProperty("id"))
          t[i] = "id";
        else
          throw new Error(
            `Ziggy error: object passed as '${i}' parameter is missing route model binding key '${t[i]}'.`
          );
      return { ...o, [i]: s[t[i]] };
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function Xa(e, r, t, n) {
  const o = new Ya(e, r, t, n);
  return e ? o.toString() : o;
}
const Fe = uo({});
function hs(e) {
  return e.initialPage.props.ziggy && (Object.keys(e.initialPage.props.ziggy).forEach((r) => {
    Fe[r] = e.initialPage.props.ziggy[r];
  }), Fe.location = new URL(Fe.location)), {
    /**
     * @param { import("vue").App } app
     */
    install: (r, t = {}) => {
      const n = t.global ?? !0, o = (i, s, f, g = Fe) => (Fe.location && typeof window < "u" && (Fe.location = null), Xa(i, s, f, g));
      r.provide(co, o), n && (r.config.globalProperties.$route = o);
    }
  };
}
function ei(e) {
  return la() ? (sa(e), !0) : !1;
}
const ri = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ti = Object.prototype.toString, ni = (e) => ti.call(e) === "[object Object]";
function oi(e) {
  return Object.entries(e);
}
function it(e) {
  return Array.isArray(e) ? e : [e];
}
function ai(e, r, t) {
  return fo(
    e,
    r,
    {
      ...t,
      immediate: !0
    }
  );
}
const wo = ri ? window : void 0;
function ii(e) {
  var r;
  const t = Ae(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
function In(...e) {
  const r = [], t = () => {
    r.forEach((f) => f()), r.length = 0;
  }, n = (f, g, h, v) => (f.addEventListener(g, h, v), () => f.removeEventListener(g, h, v)), o = He(() => {
    const f = it(Ae(e[0])).filter((g) => g != null);
    return f.every((g) => typeof g != "string") ? f : void 0;
  }), i = ai(
    () => {
      var f, g;
      return [
        (g = (f = o.value) == null ? void 0 : f.map((h) => ii(h))) != null ? g : [wo].filter((h) => h != null),
        it(Ae(o.value ? e[1] : e[0])),
        it(pa(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ae(o.value ? e[3] : e[2])
      ];
    },
    ([f, g, h, v]) => {
      if (t(), !(f != null && f.length) || !(g != null && g.length) || !(h != null && h.length))
        return;
      const m = ni(v) ? { ...v } : v;
      r.push(
        ...f.flatMap(
          (b) => g.flatMap(
            (c) => h.map((d) => n(b, c, d, m))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    i(), t();
  };
  return ei(t), s;
}
const Cn = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function ui(e = {}) {
  const { window: r = wo } = e, t = Object.fromEntries(
    Cn.map((i) => [i, ct()])
  );
  for (const [i, s] of oi(t))
    fo(s, (f) => {
      !(r != null && r.location) || r.location[i] === f || (r.location[i] = f);
    });
  const n = (i) => {
    var s;
    const { state: f, length: g } = (r == null ? void 0 : r.history) || {}, { origin: h } = (r == null ? void 0 : r.location) || {};
    for (const v of Cn)
      t[v].value = (s = r == null ? void 0 : r.location) == null ? void 0 : s[v];
    return uo({
      trigger: i,
      state: f,
      length: g,
      origin: h,
      ...t
    });
  }, o = ct(n("load"));
  if (r) {
    const i = { passive: !0 };
    In(r, "popstate", () => o.value = n("popstate"), i), In(r, "hashchange", () => o.value = n("hashchange"), i);
  }
  return o;
}
const fi = (e) => {
  const r = va();
  return He(() => {
    if (e = Ae(e), e) {
      if (typeof e == "string" && /^http/.test(e))
        return e;
      if (Array.isArray(e)) {
        const [t, n] = Ae(e);
        return t ? typeof n != "object" ? r(t) : r(t, Ae(n)) : "#";
      } else return e ? r(e) : "#";
    } else return console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp"), "#";
  });
};
var Ao = typeof global == "object" && global && global.Object === Object && global, ci = typeof self == "object" && self && self.Object === Object && self, ne = Ao || ci || Function("return this")(), te = ne.Symbol, Oo = Object.prototype, li = Oo.hasOwnProperty, si = Oo.toString, We = te ? te.toStringTag : void 0;
function pi(e) {
  var r = li.call(e, We), t = e[We];
  try {
    e[We] = void 0;
    var n = !0;
  } catch {
  }
  var o = si.call(e);
  return n && (r ? e[We] = t : delete e[We]), o;
}
var yi = Object.prototype, di = yi.toString;
function hi(e) {
  return di.call(e);
}
var gi = "[object Null]", vi = "[object Undefined]", Mn = te ? te.toStringTag : void 0;
function xe(e) {
  return e == null ? e === void 0 ? vi : gi : Mn && Mn in Object(e) ? pi(e) : hi(e);
}
function _e(e) {
  return e != null && typeof e == "object";
}
var mi = "[object Symbol]";
function vt(e) {
  return typeof e == "symbol" || _e(e) && xe(e) == mi;
}
function xo(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = Array(n); ++t < n; )
    o[t] = r(e[t], t, e);
  return o;
}
var ce = Array.isArray, Fn = te ? te.prototype : void 0, jn = Fn ? Fn.toString : void 0;
function _o(e) {
  if (typeof e == "string")
    return e;
  if (ce(e))
    return xo(e, _o) + "";
  if (vt(e))
    return jn ? jn.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function De(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
function bi(e) {
  return e;
}
var Si = "[object AsyncFunction]", wi = "[object Function]", Ai = "[object GeneratorFunction]", Oi = "[object Proxy]";
function Eo(e) {
  if (!De(e))
    return !1;
  var r = xe(e);
  return r == wi || r == Ai || r == Si || r == Oi;
}
var ut = ne["__core-js_shared__"], Dn = function() {
  var e = /[^.]+$/.exec(ut && ut.keys && ut.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xi(e) {
  return !!Dn && Dn in e;
}
var _i = Function.prototype, Ei = _i.toString;
function Ee(e) {
  if (e != null) {
    try {
      return Ei.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $i = /[\\^$.*+?()[\]{}|]/g, Pi = /^\[object .+?Constructor\]$/, Ti = Function.prototype, Ri = Object.prototype, Ii = Ti.toString, Ci = Ri.hasOwnProperty, Mi = RegExp(
  "^" + Ii.call(Ci).replace($i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fi(e) {
  if (!De(e) || xi(e))
    return !1;
  var r = Eo(e) ? Mi : Pi;
  return r.test(Ee(e));
}
function ji(e, r) {
  return e == null ? void 0 : e[r];
}
function $e(e, r) {
  var t = ji(e, r);
  return Fi(t) ? t : void 0;
}
var lt = $e(ne, "WeakMap");
function Di(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var qi = 800, Ni = 16, Ui = Date.now;
function Li(e) {
  var r = 0, t = 0;
  return function() {
    var n = Ui(), o = Ni - (n - t);
    if (t = n, o > 0) {
      if (++r >= qi)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
function Bi(e) {
  return function() {
    return e;
  };
}
var Xe = function() {
  try {
    var e = $e(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Gi = Xe ? function(e, r) {
  return Xe(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Bi(r),
    writable: !0
  });
} : bi, Wi = Li(Gi);
function zi(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var Hi = 9007199254740991, Ki = /^(?:0|[1-9]\d*)$/;
function mt(e, r) {
  var t = typeof e;
  return r = r ?? Hi, !!r && (t == "number" || t != "symbol" && Ki.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function $o(e, r, t) {
  r == "__proto__" && Xe ? Xe(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
function Po(e, r) {
  return e === r || e !== e && r !== r;
}
var Vi = Object.prototype, ki = Vi.hasOwnProperty;
function bt(e, r, t) {
  var n = e[r];
  (!(ki.call(e, r) && Po(n, t)) || t === void 0 && !(r in e)) && $o(e, r, t);
}
function Zi(e, r, t, n) {
  var o = !t;
  t || (t = {});
  for (var i = -1, s = r.length; ++i < s; ) {
    var f = r[i], g = void 0;
    g === void 0 && (g = e[f]), o ? $o(t, f, g) : bt(t, f, g);
  }
  return t;
}
var qn = Math.max;
function Qi(e, r, t) {
  return r = qn(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, o = -1, i = qn(n.length - r, 0), s = Array(i); ++o < i; )
      s[o] = n[r + o];
    o = -1;
    for (var f = Array(r + 1); ++o < r; )
      f[o] = n[o];
    return f[r] = t(s), Di(e, this, f);
  };
}
var Ji = 9007199254740991;
function St(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ji;
}
function Yi(e) {
  return e != null && St(e.length) && !Eo(e);
}
var Xi = Object.prototype;
function eu(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Xi;
  return e === t;
}
function ru(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var tu = "[object Arguments]";
function Nn(e) {
  return _e(e) && xe(e) == tu;
}
var To = Object.prototype, nu = To.hasOwnProperty, ou = To.propertyIsEnumerable, wt = Nn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Nn : function(e) {
  return _e(e) && nu.call(e, "callee") && !ou.call(e, "callee");
};
function au() {
  return !1;
}
var Ro = typeof exports == "object" && exports && !exports.nodeType && exports, Un = Ro && typeof module == "object" && module && !module.nodeType && module, iu = Un && Un.exports === Ro, Ln = iu ? ne.Buffer : void 0, uu = Ln ? Ln.isBuffer : void 0, Io = uu || au, fu = "[object Arguments]", cu = "[object Array]", lu = "[object Boolean]", su = "[object Date]", pu = "[object Error]", yu = "[object Function]", du = "[object Map]", hu = "[object Number]", gu = "[object Object]", vu = "[object RegExp]", mu = "[object Set]", bu = "[object String]", Su = "[object WeakMap]", wu = "[object ArrayBuffer]", Au = "[object DataView]", Ou = "[object Float32Array]", xu = "[object Float64Array]", _u = "[object Int8Array]", Eu = "[object Int16Array]", $u = "[object Int32Array]", Pu = "[object Uint8Array]", Tu = "[object Uint8ClampedArray]", Ru = "[object Uint16Array]", Iu = "[object Uint32Array]", U = {};
U[Ou] = U[xu] = U[_u] = U[Eu] = U[$u] = U[Pu] = U[Tu] = U[Ru] = U[Iu] = !0;
U[fu] = U[cu] = U[wu] = U[lu] = U[Au] = U[su] = U[pu] = U[yu] = U[du] = U[hu] = U[gu] = U[vu] = U[mu] = U[bu] = U[Su] = !1;
function Cu(e) {
  return _e(e) && St(e.length) && !!U[xe(e)];
}
function At(e) {
  return function(r) {
    return e(r);
  };
}
var Co = typeof exports == "object" && exports && !exports.nodeType && exports, Ke = Co && typeof module == "object" && module && !module.nodeType && module, Mu = Ke && Ke.exports === Co, ft = Mu && Ao.process, qe = function() {
  try {
    var e = Ke && Ke.require && Ke.require("util").types;
    return e || ft && ft.binding && ft.binding("util");
  } catch {
  }
}(), Bn = qe && qe.isTypedArray, Fu = Bn ? At(Bn) : Cu;
function ju(e, r) {
  var t = ce(e), n = !t && wt(e), o = !t && !n && Io(e), i = !t && !n && !o && Fu(e), s = t || n || o || i, f = s ? ru(e.length, String) : [], g = f.length;
  for (var h in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    mt(h, g)) || f.push(h);
  return f;
}
function Du(e, r) {
  return function(t) {
    return e(r(t));
  };
}
function qu(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Nu = Object.prototype, Uu = Nu.hasOwnProperty;
function Lu(e) {
  if (!De(e))
    return qu(e);
  var r = eu(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !Uu.call(e, n)) || t.push(n);
  return t;
}
function Bu(e) {
  return Yi(e) ? ju(e) : Lu(e);
}
var Gu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Wu = /^\w*$/;
function zu(e, r) {
  if (ce(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || vt(e) ? !0 : Wu.test(e) || !Gu.test(e) || r != null && e in Object(r);
}
var Ve = $e(Object, "create");
function Hu() {
  this.__data__ = Ve ? Ve(null) : {}, this.size = 0;
}
function Ku(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Vu = "__lodash_hash_undefined__", ku = Object.prototype, Zu = ku.hasOwnProperty;
function Qu(e) {
  var r = this.__data__;
  if (Ve) {
    var t = r[e];
    return t === Vu ? void 0 : t;
  }
  return Zu.call(r, e) ? r[e] : void 0;
}
var Ju = Object.prototype, Yu = Ju.hasOwnProperty;
function Xu(e) {
  var r = this.__data__;
  return Ve ? r[e] !== void 0 : Yu.call(r, e);
}
var ef = "__lodash_hash_undefined__";
function rf(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ve && r === void 0 ? ef : r, this;
}
function Oe(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Oe.prototype.clear = Hu;
Oe.prototype.delete = Ku;
Oe.prototype.get = Qu;
Oe.prototype.has = Xu;
Oe.prototype.set = rf;
function tf() {
  this.__data__ = [], this.size = 0;
}
function tr(e, r) {
  for (var t = e.length; t--; )
    if (Po(e[t][0], r))
      return t;
  return -1;
}
var nf = Array.prototype, of = nf.splice;
function af(e) {
  var r = this.__data__, t = tr(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : of.call(r, t, 1), --this.size, !0;
}
function uf(e) {
  var r = this.__data__, t = tr(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function ff(e) {
  return tr(this.__data__, e) > -1;
}
function cf(e, r) {
  var t = this.__data__, n = tr(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
function le(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
le.prototype.clear = tf;
le.prototype.delete = af;
le.prototype.get = uf;
le.prototype.has = ff;
le.prototype.set = cf;
var ke = $e(ne, "Map");
function lf() {
  this.size = 0, this.__data__ = {
    hash: new Oe(),
    map: new (ke || le)(),
    string: new Oe()
  };
}
function sf(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function nr(e, r) {
  var t = e.__data__;
  return sf(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function pf(e) {
  var r = nr(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function yf(e) {
  return nr(this, e).get(e);
}
function df(e) {
  return nr(this, e).has(e);
}
function hf(e, r) {
  var t = nr(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
function be(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
be.prototype.clear = lf;
be.prototype.delete = pf;
be.prototype.get = yf;
be.prototype.has = df;
be.prototype.set = hf;
var gf = "Expected a function";
function Ot(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(gf);
  var t = function() {
    var n = arguments, o = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(o))
      return i.get(o);
    var s = e.apply(this, n);
    return t.cache = i.set(o, s) || i, s;
  };
  return t.cache = new (Ot.Cache || be)(), t;
}
Ot.Cache = be;
var vf = 500;
function mf(e) {
  var r = Ot(e, function(n) {
    return t.size === vf && t.clear(), n;
  }), t = r.cache;
  return r;
}
var bf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sf = /\\(\\)?/g, wf = mf(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(bf, function(t, n, o, i) {
    r.push(o ? i.replace(Sf, "$1") : n || t);
  }), r;
});
function xt(e) {
  return e == null ? "" : _o(e);
}
function Ue(e, r) {
  return ce(e) ? e : zu(e, r) ? [e] : wf(xt(e));
}
function or(e) {
  if (typeof e == "string" || vt(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function Mo(e, r) {
  r = Ue(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[or(r[t++])];
  return t && t == n ? e : void 0;
}
function _t(e, r) {
  for (var t = -1, n = r.length, o = e.length; ++t < n; )
    e[o + t] = r[t];
  return e;
}
var Gn = te ? te.isConcatSpreadable : void 0;
function Af(e) {
  return ce(e) || wt(e) || !!(Gn && e && e[Gn]);
}
function Of(e, r, t, n, o) {
  var i = -1, s = e.length;
  for (t || (t = Af), o || (o = []); ++i < s; ) {
    var f = e[i];
    t(f) ? _t(o, f) : o[o.length] = f;
  }
  return o;
}
function xf(e) {
  var r = e == null ? 0 : e.length;
  return r ? Of(e) : [];
}
function Fo(e) {
  return Wi(Qi(e, void 0, xf), e + "");
}
var jo = Du(Object.getPrototypeOf, Object), _f = "[object Object]", Ef = Function.prototype, $f = Object.prototype, Do = Ef.toString, Pf = $f.hasOwnProperty, Tf = Do.call(Object);
function Rf(e) {
  if (!_e(e) || xe(e) != _f)
    return !1;
  var r = jo(e);
  if (r === null)
    return !0;
  var t = Pf.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && Do.call(t) == Tf;
}
function If(e, r, t) {
  var n = -1, o = e.length;
  r < 0 && (r = -r > o ? 0 : o + r), t = t > o ? o : t, t < 0 && (t += o), o = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(o); ++n < o; )
    i[n] = e[n + r];
  return i;
}
function Cf(e, r, t, n) {
  for (var o = -1, i = e == null ? 0 : e.length; ++o < i; )
    t = r(t, e[o], o, e);
  return t;
}
function Mf(e) {
  return function(r) {
    return e == null ? void 0 : e[r];
  };
}
var Ff = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, jf = Mf(Ff), Df = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qf = "\\u0300-\\u036f", Nf = "\\ufe20-\\ufe2f", Uf = "\\u20d0-\\u20ff", Lf = qf + Nf + Uf, Bf = "[" + Lf + "]", Gf = RegExp(Bf, "g");
function Wf(e) {
  return e = xt(e), e && e.replace(Df, jf).replace(Gf, "");
}
var zf = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function Hf(e) {
  return e.match(zf) || [];
}
var Kf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Vf(e) {
  return Kf.test(e);
}
var qo = "\\ud800-\\udfff", kf = "\\u0300-\\u036f", Zf = "\\ufe20-\\ufe2f", Qf = "\\u20d0-\\u20ff", Jf = kf + Zf + Qf, No = "\\u2700-\\u27bf", Uo = "a-z\\xdf-\\xf6\\xf8-\\xff", Yf = "\\xac\\xb1\\xd7\\xf7", Xf = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ec = "\\u2000-\\u206f", rc = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Lo = "A-Z\\xc0-\\xd6\\xd8-\\xde", tc = "\\ufe0e\\ufe0f", Bo = Yf + Xf + ec + rc, Go = "['’]", Wn = "[" + Bo + "]", nc = "[" + Jf + "]", Wo = "\\d+", oc = "[" + No + "]", zo = "[" + Uo + "]", Ho = "[^" + qo + Bo + Wo + No + Uo + Lo + "]", ac = "\\ud83c[\\udffb-\\udfff]", ic = "(?:" + nc + "|" + ac + ")", uc = "[^" + qo + "]", Ko = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vo = "[\\ud800-\\udbff][\\udc00-\\udfff]", je = "[" + Lo + "]", fc = "\\u200d", zn = "(?:" + zo + "|" + Ho + ")", cc = "(?:" + je + "|" + Ho + ")", Hn = "(?:" + Go + "(?:d|ll|m|re|s|t|ve))?", Kn = "(?:" + Go + "(?:D|LL|M|RE|S|T|VE))?", ko = ic + "?", Zo = "[" + tc + "]?", lc = "(?:" + fc + "(?:" + [uc, Ko, Vo].join("|") + ")" + Zo + ko + ")*", sc = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", pc = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", yc = Zo + ko + lc, dc = "(?:" + [oc, Ko, Vo].join("|") + ")" + yc, hc = RegExp([
  je + "?" + zo + "+" + Hn + "(?=" + [Wn, je, "$"].join("|") + ")",
  cc + "+" + Kn + "(?=" + [Wn, je + zn, "$"].join("|") + ")",
  je + "?" + zn + "+" + Hn,
  je + "+" + Kn,
  pc,
  sc,
  Wo,
  dc
].join("|"), "g");
function gc(e) {
  return e.match(hc) || [];
}
function vc(e, r, t) {
  return e = xt(e), r = r, r === void 0 ? Vf(e) ? gc(e) : Hf(e) : e.match(r) || [];
}
var mc = "['’]", bc = RegExp(mc, "g");
function Sc(e) {
  return function(r) {
    return Cf(vc(Wf(r).replace(bc, "")), e, "");
  };
}
function wc() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return ce(e) ? e : [e];
}
function Ac() {
  this.__data__ = new le(), this.size = 0;
}
function Oc(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function xc(e) {
  return this.__data__.get(e);
}
function _c(e) {
  return this.__data__.has(e);
}
var Ec = 200;
function $c(e, r) {
  var t = this.__data__;
  if (t instanceof le) {
    var n = t.__data__;
    if (!ke || n.length < Ec - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new be(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
function Le(e) {
  var r = this.__data__ = new le(e);
  this.size = r.size;
}
Le.prototype.clear = Ac;
Le.prototype.delete = Oc;
Le.prototype.get = xc;
Le.prototype.has = _c;
Le.prototype.set = $c;
var Qo = typeof exports == "object" && exports && !exports.nodeType && exports, Vn = Qo && typeof module == "object" && module && !module.nodeType && module, Pc = Vn && Vn.exports === Qo, kn = Pc ? ne.Buffer : void 0;
kn && kn.allocUnsafe;
function Tc(e, r) {
  return e.slice();
}
function Rc(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (i[o++] = s);
  }
  return i;
}
function Jo() {
  return [];
}
var Ic = Object.prototype, Cc = Ic.propertyIsEnumerable, Zn = Object.getOwnPropertySymbols, Mc = Zn ? function(e) {
  return e == null ? [] : (e = Object(e), Rc(Zn(e), function(r) {
    return Cc.call(e, r);
  }));
} : Jo, Fc = Object.getOwnPropertySymbols, jc = Fc ? function(e) {
  for (var r = []; e; )
    _t(r, Mc(e)), e = jo(e);
  return r;
} : Jo;
function Dc(e, r, t) {
  var n = r(e);
  return ce(e) ? n : _t(n, t(e));
}
function Yo(e) {
  return Dc(e, Bu, jc);
}
var st = $e(ne, "DataView"), pt = $e(ne, "Promise"), yt = $e(ne, "Set"), Qn = "[object Map]", qc = "[object Object]", Jn = "[object Promise]", Yn = "[object Set]", Xn = "[object WeakMap]", eo = "[object DataView]", Nc = Ee(st), Uc = Ee(ke), Lc = Ee(pt), Bc = Ee(yt), Gc = Ee(lt), fe = xe;
(st && fe(new st(new ArrayBuffer(1))) != eo || ke && fe(new ke()) != Qn || pt && fe(pt.resolve()) != Jn || yt && fe(new yt()) != Yn || lt && fe(new lt()) != Xn) && (fe = function(e) {
  var r = xe(e), t = r == qc ? e.constructor : void 0, n = t ? Ee(t) : "";
  if (n)
    switch (n) {
      case Nc:
        return eo;
      case Uc:
        return Qn;
      case Lc:
        return Jn;
      case Bc:
        return Yn;
      case Gc:
        return Xn;
    }
  return r;
});
var Wc = Object.prototype, zc = Wc.hasOwnProperty;
function Hc(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && zc.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var ro = ne.Uint8Array;
function Et(e) {
  var r = new e.constructor(e.byteLength);
  return new ro(r).set(new ro(e)), r;
}
function Kc(e, r) {
  var t = Et(e.buffer);
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Vc = /\w*$/;
function kc(e) {
  var r = new e.constructor(e.source, Vc.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var to = te ? te.prototype : void 0, no = to ? to.valueOf : void 0;
function Zc(e) {
  return no ? Object(no.call(e)) : {};
}
function Qc(e, r) {
  var t = Et(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
var Jc = "[object Boolean]", Yc = "[object Date]", Xc = "[object Map]", el = "[object Number]", rl = "[object RegExp]", tl = "[object Set]", nl = "[object String]", ol = "[object Symbol]", al = "[object ArrayBuffer]", il = "[object DataView]", ul = "[object Float32Array]", fl = "[object Float64Array]", cl = "[object Int8Array]", ll = "[object Int16Array]", sl = "[object Int32Array]", pl = "[object Uint8Array]", yl = "[object Uint8ClampedArray]", dl = "[object Uint16Array]", hl = "[object Uint32Array]";
function gl(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case al:
      return Et(e);
    case Jc:
    case Yc:
      return new n(+e);
    case il:
      return Kc(e);
    case ul:
    case fl:
    case cl:
    case ll:
    case sl:
    case pl:
    case yl:
    case dl:
    case hl:
      return Qc(e);
    case Xc:
      return new n();
    case el:
    case nl:
      return new n(e);
    case rl:
      return kc(e);
    case tl:
      return new n();
    case ol:
      return Zc(e);
  }
}
var vl = "[object Map]";
function ml(e) {
  return _e(e) && fe(e) == vl;
}
var oo = qe && qe.isMap, bl = oo ? At(oo) : ml, Sl = "[object Set]";
function wl(e) {
  return _e(e) && fe(e) == Sl;
}
var ao = qe && qe.isSet, Al = ao ? At(ao) : wl, Xo = "[object Arguments]", Ol = "[object Array]", xl = "[object Boolean]", _l = "[object Date]", El = "[object Error]", ea = "[object Function]", $l = "[object GeneratorFunction]", Pl = "[object Map]", Tl = "[object Number]", ra = "[object Object]", Rl = "[object RegExp]", Il = "[object Set]", Cl = "[object String]", Ml = "[object Symbol]", Fl = "[object WeakMap]", jl = "[object ArrayBuffer]", Dl = "[object DataView]", ql = "[object Float32Array]", Nl = "[object Float64Array]", Ul = "[object Int8Array]", Ll = "[object Int16Array]", Bl = "[object Int32Array]", Gl = "[object Uint8Array]", Wl = "[object Uint8ClampedArray]", zl = "[object Uint16Array]", Hl = "[object Uint32Array]", q = {};
q[Xo] = q[Ol] = q[jl] = q[Dl] = q[xl] = q[_l] = q[ql] = q[Nl] = q[Ul] = q[Ll] = q[Bl] = q[Pl] = q[Tl] = q[ra] = q[Rl] = q[Il] = q[Cl] = q[Ml] = q[Gl] = q[Wl] = q[zl] = q[Hl] = !0;
q[El] = q[ea] = q[Fl] = !1;
function Ye(e, r, t, n, o, i) {
  var s;
  if (t && (s = o ? t(e, n, o, i) : t(e)), s !== void 0)
    return s;
  if (!De(e))
    return e;
  var f = ce(e);
  if (f)
    s = Hc(e);
  else {
    var g = fe(e), h = g == ea || g == $l;
    if (Io(e))
      return Tc(e);
    if (g == ra || g == Xo || h && !o)
      s = {};
    else {
      if (!q[g])
        return o ? e : {};
      s = gl(e, g);
    }
  }
  i || (i = new Le());
  var v = i.get(e);
  if (v)
    return v;
  i.set(e, s), Al(e) ? e.forEach(function(c) {
    s.add(Ye(c, r, t, c, e, i));
  }) : bl(e) && e.forEach(function(c, d) {
    s.set(d, Ye(c, r, t, d, e, i));
  });
  var m = Yo, b = f ? void 0 : m(e);
  return zi(b || e, function(c, d) {
    b && (d = c, c = e[d]), bt(s, d, Ye(c, r, t, d, e, i));
  }), s;
}
function Kl(e, r) {
  return e != null && r in Object(e);
}
function Vl(e, r, t) {
  r = Ue(r, e);
  for (var n = -1, o = r.length, i = !1; ++n < o; ) {
    var s = or(r[n]);
    if (!(i = e != null && t(e, s)))
      break;
    e = e[s];
  }
  return i || ++n != o ? i : (o = e == null ? 0 : e.length, !!o && St(o) && mt(s, o) && (ce(e) || wt(e)));
}
function kl(e, r) {
  return e != null && Vl(e, r, Kl);
}
function Zl(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
function Ql(e, r) {
  return r.length < 2 ? e : Mo(e, If(r, 0, -1));
}
var Jl = Sc(function(e, r, t) {
  return e + (t ? " " : "") + r.toLowerCase();
});
function Yl(e, r) {
  return r = Ue(r, e), e = Ql(e, r), e == null || delete e[or(Zl(r))];
}
function Xl(e) {
  return Rf(e) ? void 0 : e;
}
var es = 1, rs = 2, ts = 4, io = Fo(function(e, r) {
  var t = {};
  if (e == null)
    return t;
  var n = !1;
  r = xo(r, function(i) {
    return i = Ue(i, e), n || (n = i.length > 1), i;
  }), Zi(e, Yo(e), t), n && (t = Ye(t, es | rs | ts, Xl));
  for (var o = r.length; o--; )
    Yl(t, r[o]);
  return t;
});
function ns(e, r, t, n) {
  if (!De(e))
    return e;
  r = Ue(r, e);
  for (var o = -1, i = r.length, s = i - 1, f = e; f != null && ++o < i; ) {
    var g = or(r[o]), h = t;
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return e;
    if (o != s) {
      var v = f[g];
      h = void 0, h === void 0 && (h = De(v) ? v : mt(r[o + 1]) ? [] : {});
    }
    bt(f, g, h), f = f[g];
  }
  return e;
}
function os(e, r, t) {
  for (var n = -1, o = r.length, i = {}; ++n < o; ) {
    var s = r[n], f = Mo(e, s);
    t(f, s) && ns(i, Ue(s, e), f);
  }
  return i;
}
function as(e, r) {
  return os(e, r, function(t, n) {
    return kl(e, n);
  });
}
var is = Fo(function(e, r) {
  return e == null ? {} : as(e, r);
});
const ze = ct(null), us = [
  "cache-for",
  "data",
  "method",
  "replace",
  "prefetch",
  "preserve-scroll",
  "preserve-state",
  "only",
  "except",
  "headers",
  "query-string-array-format",
  "on-before",
  "on-start",
  "on-progress",
  "on-finish",
  "on-cancel",
  "on-cancel-token",
  "on-error",
  "on-success",
  "async"
], fs = (e) => e.replace(/-./g, (r) => r[1].toUpperCase()), cs = (e, r) => ["replace", "preserve-scroll", "preserve-state", "async"].includes(e) ? !0 : e === "prefetch" ? r ? wc(r) : ["hover"] : ["method"].includes(e) ? Jl(r) : r, ls = (e) => {
  const r = us.reduce((t, n) => (typeof e[n] < "u" && (t[fs(n)] = cs(n, e[n])), t), {});
  return r.method || (r.method = "get"), r;
}, ss = (e) => {
  const r = ya(), t = new AbortController(), n = ui();
  ze.value || (ze.value = `${n.value.origin}${n.value.pathname}`);
  const o = fi(e.to), i = da(), s = ls(i);
  return ha(() => {
    var h, v;
    const { prefetch: f } = s, g = () => {
      qt.prefetch(o.value, io(s, ["cacheFor"]), is(s, ["cacheFor"]));
    };
    (f == null ? void 0 : f.length) > 0 && (f.includes("mount") && g(), f.includes("hover") && ((h = r.proxy) != null && h.$el) && r.proxy.$el.addEventListener("mouseenter", g, {
      signal: t.signal
    }), f.includes("click") && ((v = r.proxy) != null && v.$el) && r.proxy.$el.addEventListener("click", g, {
      signal: t.signal
    }));
  }), ga(() => t.abort()), {
    route: He(() => ({ href: o.value })),
    isExactActive: He(() => ze.value === o.value),
    isActive: He(() => ze.value.startsWith(o.value)),
    navigate(f) {
      f.shiftKey || f.metaKey || f.ctrlKey || (f.preventDefault(), ze.value = o.value, qt.visit(o.value, io(s, ["prefetch", "cacheFor"])));
    }
  };
}, ps = {
  name: "RouterLink",
  useLink: ss
}, gs = {
  install: (e) => {
    e.component("RouterLink", ps);
  }
};
export {
  hs as useInertiaRoutes,
  fi as useResolvedRoute,
  va as useRoute,
  gs as vuetifyRoutesPlugin
};
