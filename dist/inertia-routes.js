import { inject as Qr, reactive as Ar, getCurrentScope as Jr, onScopeDispose as Zr, unref as Yr, ref as Me, watch as Er, computed as ye, toValue as Ae, useAttrs as Xr } from "vue";
import { router as et } from "@inertiajs/vue3";
const Or = Symbol.for("inertia-routes"), rt = () => Qr(Or);
var tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(r) {
  if (r.__esModule)
    return r;
  var e = r.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var a = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(t, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), t;
}
var ot = Error, at = EvalError, it = RangeError, lt = ReferenceError, $r = SyntaxError, ie = TypeError, ft = URIError, ut = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, t = Symbol("test"), n = Object(t);
  if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var a = 42;
  e[t] = a;
  for (t in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var o = Object.getOwnPropertySymbols(e);
  if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i.value !== a || i.enumerable !== !0)
      return !1;
  }
  return !0;
}, Ze = typeof Symbol < "u" && Symbol, ct = ut, st = function() {
  return typeof Ze != "function" || typeof Symbol != "function" || typeof Ze("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ct();
}, Ee = {
  __proto__: null,
  foo: {}
}, pt = Object, yt = function() {
  return { __proto__: Ee }.foo === Ee.foo && !(Ee instanceof pt);
}, dt = "Function.prototype.bind called on incompatible ", vt = Object.prototype.toString, ht = Math.max, gt = "[object Function]", Ye = function(e, t) {
  for (var n = [], a = 0; a < e.length; a += 1)
    n[a] = e[a];
  for (var o = 0; o < t.length; o += 1)
    n[o + e.length] = t[o];
  return n;
}, mt = function(e, t) {
  for (var n = [], a = t || 0, o = 0; a < e.length; a += 1, o += 1)
    n[o] = e[a];
  return n;
}, bt = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, St = function(e) {
  var t = this;
  if (typeof t != "function" || vt.apply(t) !== gt)
    throw new TypeError(dt + t);
  for (var n = mt(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var c = t.apply(
        this,
        Ye(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return t.apply(
      e,
      Ye(n, arguments)
    );
  }, i = ht(0, t.length - n.length), l = [], u = 0; u < i; u++)
    l[u] = "$" + u;
  if (a = Function("binder", "return function (" + bt(l, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
    var f = function() {
    };
    f.prototype = t.prototype, a.prototype = new f(), f.prototype = null;
  }
  return a;
}, wt = St, ke = Function.prototype.bind || wt, At = Function.prototype.call, Et = Object.prototype.hasOwnProperty, Ot = ke, $t = Ot.call(At, Et), d, Pt = ot, _t = at, It = it, xt = lt, H = $r, V = ie, Ft = ft, Pr = Function, Oe = function(r) {
  try {
    return Pr('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, W = Object.getOwnPropertyDescriptor;
if (W)
  try {
    W({}, "");
  } catch {
    W = null;
  }
var $e = function() {
  throw new V();
}, Rt = W ? function() {
  try {
    return arguments.callee, $e;
  } catch {
    try {
      return W(arguments, "callee").get;
    } catch {
      return $e;
    }
  }
}() : $e, k = st(), Dt = yt(), S = Object.getPrototypeOf || (Dt ? function(r) {
  return r.__proto__;
} : null), K = {}, Tt = typeof Uint8Array > "u" || !S ? d : S(Uint8Array), L = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? d : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? d : ArrayBuffer,
  "%ArrayIteratorPrototype%": k && S ? S([][Symbol.iterator]()) : d,
  "%AsyncFromSyncIteratorPrototype%": d,
  "%AsyncFunction%": K,
  "%AsyncGenerator%": K,
  "%AsyncGeneratorFunction%": K,
  "%AsyncIteratorPrototype%": K,
  "%Atomics%": typeof Atomics > "u" ? d : Atomics,
  "%BigInt%": typeof BigInt > "u" ? d : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? d : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? d : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? d : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Pt,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": _t,
  "%Float32Array%": typeof Float32Array > "u" ? d : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? d : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? d : FinalizationRegistry,
  "%Function%": Pr,
  "%GeneratorFunction%": K,
  "%Int8Array%": typeof Int8Array > "u" ? d : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? d : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? d : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": k && S ? S(S([][Symbol.iterator]())) : d,
  "%JSON%": typeof JSON == "object" ? JSON : d,
  "%Map%": typeof Map > "u" ? d : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !k || !S ? d : S((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? d : Promise,
  "%Proxy%": typeof Proxy > "u" ? d : Proxy,
  "%RangeError%": It,
  "%ReferenceError%": xt,
  "%Reflect%": typeof Reflect > "u" ? d : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? d : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !k || !S ? d : S((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? d : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": k && S ? S(""[Symbol.iterator]()) : d,
  "%Symbol%": k ? Symbol : d,
  "%SyntaxError%": H,
  "%ThrowTypeError%": Rt,
  "%TypedArray%": Tt,
  "%TypeError%": V,
  "%Uint8Array%": typeof Uint8Array > "u" ? d : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? d : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? d : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? d : Uint32Array,
  "%URIError%": Ft,
  "%WeakMap%": typeof WeakMap > "u" ? d : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? d : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? d : WeakSet
};
if (S)
  try {
    null.error;
  } catch (r) {
    var Nt = S(S(r));
    L["%Error.prototype%"] = Nt;
  }
var Mt = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = Oe("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = Oe("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = Oe("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = r("%AsyncGeneratorFunction%");
    n && (t = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = r("%AsyncGenerator%");
    a && S && (t = S(a.prototype));
  }
  return L[e] = t, t;
}, Xe = {
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
}, le = ke, he = $t, Bt = le.call(Function.call, Array.prototype.concat), Ct = le.call(Function.apply, Array.prototype.splice), er = le.call(Function.call, String.prototype.replace), ge = le.call(Function.call, String.prototype.slice), Ut = le.call(Function.call, RegExp.prototype.exec), Wt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Lt = /\\(\\)?/g, Gt = function(e) {
  var t = ge(e, 0, 1), n = ge(e, -1);
  if (t === "%" && n !== "%")
    throw new H("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new H("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return er(e, Wt, function(o, i, l, u) {
    a[a.length] = l ? er(u, Lt, "$1") : i || o;
  }), a;
}, jt = function(e, t) {
  var n = e, a;
  if (he(Xe, n) && (a = Xe[n], n = "%" + a[0] + "%"), he(L, n)) {
    var o = L[n];
    if (o === K && (o = Mt(n)), typeof o > "u" && !t)
      throw new V("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: o
    };
  }
  throw new H("intrinsic " + e + " does not exist!");
}, Z = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new V("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new V('"allowMissing" argument must be a boolean');
  if (Ut(/^%?[^%]*%?$/, e) === null)
    throw new H("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Gt(e), a = n.length > 0 ? n[0] : "", o = jt("%" + a + "%", t), i = o.name, l = o.value, u = !1, f = o.alias;
  f && (a = f[0], Ct(n, Bt([0, 1], f)));
  for (var c = 1, p = !0; c < n.length; c += 1) {
    var s = n[c], y = ge(s, 0, 1), v = ge(s, -1);
    if ((y === '"' || y === "'" || y === "`" || v === '"' || v === "'" || v === "`") && y !== v)
      throw new H("property names with quotes must have matching quotes");
    if ((s === "constructor" || !p) && (u = !0), a += "." + s, i = "%" + a + "%", he(L, i))
      l = L[i];
    else if (l != null) {
      if (!(s in l)) {
        if (!t)
          throw new V("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (W && c + 1 >= n.length) {
        var b = W(l, s);
        p = !!b, p && "get" in b && !("originalValue" in b.get) ? l = b.get : l = l[s];
      } else
        p = he(l, s), l = l[s];
      p && !u && (L[i] = l);
    }
  }
  return l;
}, _r = { exports: {} }, Pe, rr;
function qe() {
  if (rr)
    return Pe;
  rr = 1;
  var r = Z, e = r("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Pe = e, Pe;
}
var kt = Z, de = kt("%Object.getOwnPropertyDescriptor%", !0);
if (de)
  try {
    de([], "length");
  } catch {
    de = null;
  }
var Ir = de, tr = qe(), qt = $r, q = ie, nr = Ir, zt = function(e, t, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new q("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new q("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new q("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new q("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new q("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new q("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, l = arguments.length > 6 ? arguments[6] : !1, u = !!nr && nr(e, t);
  if (tr)
    tr(e, t, {
      configurable: i === null && u ? u.configurable : !i,
      enumerable: a === null && u ? u.enumerable : !a,
      value: n,
      writable: o === null && u ? u.writable : !o
    });
  else if (l || !a && !o && !i)
    e[t] = n;
  else
    throw new qt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Be = qe(), xr = function() {
  return !!Be;
};
xr.hasArrayLengthDefineBug = function() {
  if (!Be)
    return null;
  try {
    return Be([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Kt = xr, Vt = Z, or = zt, Ht = Kt(), ar = Ir, ir = ie, Qt = Vt("%Math.floor%"), Jt = function(e, t) {
  if (typeof e != "function")
    throw new ir("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || Qt(t) !== t)
    throw new ir("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && ar) {
    var i = ar(e, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !n) && (Ht ? or(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t,
    !0,
    !0
  ) : or(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t
  )), e;
};
(function(r) {
  var e = ke, t = Z, n = Jt, a = ie, o = t("%Function.prototype.apply%"), i = t("%Function.prototype.call%"), l = t("%Reflect.apply%", !0) || e.call(i, o), u = qe(), f = t("%Math.max%");
  r.exports = function(s) {
    if (typeof s != "function")
      throw new a("a function is required");
    var y = l(e, i, arguments);
    return n(
      y,
      1 + f(0, s.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return l(e, o, arguments);
  };
  u ? u(r.exports, "apply", { value: c }) : r.exports.apply = c;
})(_r);
var Zt = _r.exports, Fr = Z, Rr = Zt, Yt = Rr(Fr("String.prototype.indexOf")), Xt = function(e, t) {
  var n = Fr(e, !!t);
  return typeof n == "function" && Yt(e, ".prototype.") > -1 ? Rr(n) : n;
};
const en = {}, rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en
}, Symbol.toStringTag, { value: "Module" })), tn = /* @__PURE__ */ nt(rn);
var ze = typeof Map == "function" && Map.prototype, _e = Object.getOwnPropertyDescriptor && ze ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, me = ze && _e && typeof _e.get == "function" ? _e.get : null, lr = ze && Map.prototype.forEach, Ke = typeof Set == "function" && Set.prototype, Ie = Object.getOwnPropertyDescriptor && Ke ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, be = Ke && Ie && typeof Ie.get == "function" ? Ie.get : null, fr = Ke && Set.prototype.forEach, nn = typeof WeakMap == "function" && WeakMap.prototype, ne = nn ? WeakMap.prototype.has : null, on = typeof WeakSet == "function" && WeakSet.prototype, oe = on ? WeakSet.prototype.has : null, an = typeof WeakRef == "function" && WeakRef.prototype, ur = an ? WeakRef.prototype.deref : null, ln = Boolean.prototype.valueOf, fn = Object.prototype.toString, un = Function.prototype.toString, cn = String.prototype.match, Ve = String.prototype.slice, N = String.prototype.replace, sn = String.prototype.toUpperCase, cr = String.prototype.toLowerCase, Dr = RegExp.prototype.test, sr = Array.prototype.concat, P = Array.prototype.join, pn = Array.prototype.slice, pr = Math.floor, Ce = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, xe = Object.getOwnPropertySymbols, Ue = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Q = typeof Symbol == "function" && typeof Symbol.iterator == "object", w = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Q || !0) ? Symbol.toStringTag : null, Tr = Object.prototype.propertyIsEnumerable, yr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function dr(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || Dr.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -pr(-r) : pr(r);
    if (n !== r) {
      var a = String(n), o = Ve.call(e, a.length + 1);
      return N.call(a, t, "$&_") + "." + N.call(N.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return N.call(e, t, "$&_");
}
var We = tn, vr = We.custom, hr = Mr(vr) ? vr : null, yn = function r(e, t, n, a) {
  var o = t || {};
  if (T(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (T(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var i = T(o, "customInspect") ? o.customInspect : !0;
  if (typeof i != "boolean" && i !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (T(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (T(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var l = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Cr(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return l ? dr(e, u) : u;
  }
  if (typeof e == "bigint") {
    var f = String(e) + "n";
    return l ? dr(e, f) : f;
  }
  var c = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof e == "object")
    return Le(e) ? "[Array]" : "[Object]";
  var p = Rn(o, n);
  if (typeof a > "u")
    a = [];
  else if (Br(a, e) >= 0)
    return "[Circular]";
  function s(E, R, D) {
    if (R && (a = pn.call(a), a.push(R)), D) {
      var ee = {
        depth: o.depth
      };
      return T(o, "quoteStyle") && (ee.quoteStyle = o.quoteStyle), r(E, ee, n + 1, a);
    }
    return r(E, o, n + 1, a);
  }
  if (typeof e == "function" && !gr(e)) {
    var y = An(e), v = ce(e, s);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (v.length > 0 ? " { " + P.call(v, ", ") + " }" : "");
  }
  if (Mr(e)) {
    var b = Q ? N.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ue.call(e);
    return typeof e == "object" && !Q ? re(b) : b;
  }
  if (In(e)) {
    for (var A = "<" + cr.call(String(e.nodeName)), _ = e.attributes || [], I = 0; I < _.length; I++)
      A += " " + _[I].name + "=" + Nr(dn(_[I].value), "double", o);
    return A += ">", e.childNodes && e.childNodes.length && (A += "..."), A += "</" + cr.call(String(e.nodeName)) + ">", A;
  }
  if (Le(e)) {
    if (e.length === 0)
      return "[]";
    var h = ce(e, s);
    return p && !Fn(h) ? "[" + Ge(h, p) + "]" : "[ " + P.call(h, ", ") + " ]";
  }
  if (hn(e)) {
    var x = ce(e, s);
    return !("cause" in Error.prototype) && "cause" in e && !Tr.call(e, "cause") ? "{ [" + String(e) + "] " + P.call(sr.call("[cause]: " + s(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + P.call(x, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (hr && typeof e[hr] == "function" && We)
      return We(e, { depth: c - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (En(e)) {
    var B = [];
    return lr && lr.call(e, function(E, R) {
      B.push(s(R, e, !0) + " => " + s(E, e));
    }), mr("Map", me.call(e), B, p);
  }
  if (Pn(e)) {
    var X = [];
    return fr && fr.call(e, function(E) {
      X.push(s(E, e));
    }), mr("Set", be.call(e), X, p);
  }
  if (On(e))
    return Fe("WeakMap");
  if (_n(e))
    return Fe("WeakSet");
  if ($n(e))
    return Fe("WeakRef");
  if (mn(e))
    return re(s(Number(e)));
  if (Sn(e))
    return re(s(Ce.call(e)));
  if (bn(e))
    return re(ln.call(e));
  if (gn(e))
    return re(s(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === tt)
    return "{ [object globalThis] }";
  if (!vn(e) && !gr(e)) {
    var G = ce(e, s), fe = yr ? yr(e) === Object.prototype : e instanceof Object || e.constructor === Object, C = e instanceof Object ? "" : "null prototype", F = !fe && w && Object(e) === e && w in e ? Ve.call(M(e), 8, -1) : C ? "Object" : "", ue = fe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", j = ue + (F || C ? "[" + P.call(sr.call([], F || [], C || []), ": ") + "] " : "");
    return G.length === 0 ? j + "{}" : p ? j + "{" + Ge(G, p) + "}" : j + "{ " + P.call(G, ", ") + " }";
  }
  return String(e);
};
function Nr(r, e, t) {
  var n = (t.quoteStyle || e) === "double" ? '"' : "'";
  return n + r + n;
}
function dn(r) {
  return N.call(String(r), /"/g, "&quot;");
}
function Le(r) {
  return M(r) === "[object Array]" && (!w || !(typeof r == "object" && w in r));
}
function vn(r) {
  return M(r) === "[object Date]" && (!w || !(typeof r == "object" && w in r));
}
function gr(r) {
  return M(r) === "[object RegExp]" && (!w || !(typeof r == "object" && w in r));
}
function hn(r) {
  return M(r) === "[object Error]" && (!w || !(typeof r == "object" && w in r));
}
function gn(r) {
  return M(r) === "[object String]" && (!w || !(typeof r == "object" && w in r));
}
function mn(r) {
  return M(r) === "[object Number]" && (!w || !(typeof r == "object" && w in r));
}
function bn(r) {
  return M(r) === "[object Boolean]" && (!w || !(typeof r == "object" && w in r));
}
function Mr(r) {
  if (Q)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !Ue)
    return !1;
  try {
    return Ue.call(r), !0;
  } catch {
  }
  return !1;
}
function Sn(r) {
  if (!r || typeof r != "object" || !Ce)
    return !1;
  try {
    return Ce.call(r), !0;
  } catch {
  }
  return !1;
}
var wn = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function T(r, e) {
  return wn.call(r, e);
}
function M(r) {
  return fn.call(r);
}
function An(r) {
  if (r.name)
    return r.name;
  var e = cn.call(un.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Br(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function En(r) {
  if (!me || !r || typeof r != "object")
    return !1;
  try {
    me.call(r);
    try {
      be.call(r);
    } catch {
      return !0;
    }
    return r instanceof Map;
  } catch {
  }
  return !1;
}
function On(r) {
  if (!ne || !r || typeof r != "object")
    return !1;
  try {
    ne.call(r, ne);
    try {
      oe.call(r, oe);
    } catch {
      return !0;
    }
    return r instanceof WeakMap;
  } catch {
  }
  return !1;
}
function $n(r) {
  if (!ur || !r || typeof r != "object")
    return !1;
  try {
    return ur.call(r), !0;
  } catch {
  }
  return !1;
}
function Pn(r) {
  if (!be || !r || typeof r != "object")
    return !1;
  try {
    be.call(r);
    try {
      me.call(r);
    } catch {
      return !0;
    }
    return r instanceof Set;
  } catch {
  }
  return !1;
}
function _n(r) {
  if (!oe || !r || typeof r != "object")
    return !1;
  try {
    oe.call(r, oe);
    try {
      ne.call(r, ne);
    } catch {
      return !0;
    }
    return r instanceof WeakSet;
  } catch {
  }
  return !1;
}
function In(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function Cr(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return Cr(Ve.call(r, 0, e.maxStringLength), e) + n;
  }
  var a = N.call(N.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, xn);
  return Nr(a, "single", e);
}
function xn(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + sn.call(e.toString(16));
}
function re(r) {
  return "Object(" + r + ")";
}
function Fe(r) {
  return r + " { ? }";
}
function mr(r, e, t, n) {
  var a = n ? Ge(t, n) : P.call(t, ", ");
  return r + " (" + e + ") {" + a + "}";
}
function Fn(r) {
  for (var e = 0; e < r.length; e++)
    if (Br(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function Rn(r, e) {
  var t;
  if (r.indent === "	")
    t = "	";
  else if (typeof r.indent == "number" && r.indent > 0)
    t = P.call(Array(r.indent + 1), " ");
  else
    return null;
  return {
    base: t,
    prev: P.call(Array(e + 1), t)
  };
}
function Ge(r, e) {
  if (r.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + P.call(r, "," + t) + `
` + e.prev;
}
function ce(r, e) {
  var t = Le(r), n = [];
  if (t) {
    n.length = r.length;
    for (var a = 0; a < r.length; a++)
      n[a] = T(r, a) ? e(r[a], r) : "";
  }
  var o = typeof xe == "function" ? xe(r) : [], i;
  if (Q) {
    i = {};
    for (var l = 0; l < o.length; l++)
      i["$" + o[l]] = o[l];
  }
  for (var u in r)
    T(r, u) && (t && String(Number(u)) === u && u < r.length || Q && i["$" + u] instanceof Symbol || (Dr.call(/[^\w$]/, u) ? n.push(e(u, r) + ": " + e(r[u], r)) : n.push(u + ": " + e(r[u], r))));
  if (typeof xe == "function")
    for (var f = 0; f < o.length; f++)
      Tr.call(r, o[f]) && n.push("[" + e(o[f]) + "]: " + e(r[o[f]], r));
  return n;
}
var Ur = Z, Y = Xt, Dn = yn, Tn = ie, se = Ur("%WeakMap%", !0), pe = Ur("%Map%", !0), Nn = Y("WeakMap.prototype.get", !0), Mn = Y("WeakMap.prototype.set", !0), Bn = Y("WeakMap.prototype.has", !0), Cn = Y("Map.prototype.get", !0), Un = Y("Map.prototype.set", !0), Wn = Y("Map.prototype.has", !0), He = function(r, e) {
  for (var t = r, n; (n = t.next) !== null; t = n)
    if (n.key === e)
      return t.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = n, n;
}, Ln = function(r, e) {
  var t = He(r, e);
  return t && t.value;
}, Gn = function(r, e, t) {
  var n = He(r, e);
  n ? n.value = t : r.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, jn = function(r, e) {
  return !!He(r, e);
}, kn = function() {
  var e, t, n, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new Tn("Side channel does not contain " + Dn(o));
    },
    get: function(o) {
      if (se && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Nn(e, o);
      } else if (pe) {
        if (t)
          return Cn(t, o);
      } else if (n)
        return Ln(n, o);
    },
    has: function(o) {
      if (se && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Bn(e, o);
      } else if (pe) {
        if (t)
          return Wn(t, o);
      } else if (n)
        return jn(n, o);
      return !1;
    },
    set: function(o, i) {
      se && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new se()), Mn(e, o, i)) : pe ? (t || (t = new pe()), Un(t, o, i)) : (n || (n = { key: {}, next: null }), Gn(n, o, i));
    }
  };
  return a;
}, qn = String.prototype.replace, zn = /%20/g, Re = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Qe = {
  default: Re.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return qn.call(r, zn, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: Re.RFC1738,
  RFC3986: Re.RFC3986
}, Kn = Qe, De = Object.prototype.hasOwnProperty, U = Array.isArray, O = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Vn = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (U(n)) {
      for (var a = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && a.push(n[o]);
      t.obj[t.prop] = a;
    }
  }
}, Wr = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (n[a] = e[a]);
  return n;
}, Hn = function r(e, t, n) {
  if (!t)
    return e;
  if (typeof t != "object") {
    if (U(e))
      e.push(t);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !De.call(Object.prototype, t)) && (e[t] = !0);
    else
      return [e, t];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(t);
  var a = e;
  return U(e) && !U(t) && (a = Wr(e, n)), U(e) && U(t) ? (t.forEach(function(o, i) {
    if (De.call(e, i)) {
      var l = e[i];
      l && typeof l == "object" && o && typeof o == "object" ? e[i] = r(l, o, n) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(t).reduce(function(o, i) {
    var l = t[i];
    return De.call(o, i) ? o[i] = r(o[i], l, n) : o[i] = l, o;
  }, a);
}, Qn = function(e, t) {
  return Object.keys(t).reduce(function(n, a) {
    return n[a] = t[a], n;
  }, e);
}, Jn = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Zn = function(e, t, n, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(c) {
      return "%26%23" + parseInt(c.slice(2), 16) + "%3B";
    });
  for (var l = "", u = 0; u < i.length; ++u) {
    var f = i.charCodeAt(u);
    if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || o === Kn.RFC1738 && (f === 40 || f === 41)) {
      l += i.charAt(u);
      continue;
    }
    if (f < 128) {
      l = l + O[f];
      continue;
    }
    if (f < 2048) {
      l = l + (O[192 | f >> 6] + O[128 | f & 63]);
      continue;
    }
    if (f < 55296 || f >= 57344) {
      l = l + (O[224 | f >> 12] + O[128 | f >> 6 & 63] + O[128 | f & 63]);
      continue;
    }
    u += 1, f = 65536 + ((f & 1023) << 10 | i.charCodeAt(u) & 1023), l += O[240 | f >> 18] + O[128 | f >> 12 & 63] + O[128 | f >> 6 & 63] + O[128 | f & 63];
  }
  return l;
}, Yn = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], a = 0; a < t.length; ++a)
    for (var o = t[a], i = o.obj[o.prop], l = Object.keys(i), u = 0; u < l.length; ++u) {
      var f = l[u], c = i[f];
      typeof c == "object" && c !== null && n.indexOf(c) === -1 && (t.push({ obj: i, prop: f }), n.push(c));
    }
  return Vn(t), e;
}, Xn = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, eo = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, ro = function(e, t) {
  return [].concat(e, t);
}, to = function(e, t) {
  if (U(e)) {
    for (var n = [], a = 0; a < e.length; a += 1)
      n.push(t(e[a]));
    return n;
  }
  return t(e);
}, Lr = {
  arrayToObject: Wr,
  assign: Qn,
  combine: ro,
  compact: Yn,
  decode: Jn,
  encode: Zn,
  isBuffer: eo,
  isRegExp: Xn,
  maybeMap: to,
  merge: Hn
}, Gr = kn, ve = Lr, ae = Qe, no = Object.prototype.hasOwnProperty, jr = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, t) {
    return e + "[" + t + "]";
  },
  repeat: function(e) {
    return e;
  }
}, $ = Array.isArray, oo = Array.prototype.push, kr = function(r, e) {
  oo.apply(r, $(e) ? e : [e]);
}, ao = Date.prototype.toISOString, br = ae.default, m = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: ve.encode,
  encodeValuesOnly: !1,
  format: br,
  formatter: ae.formatters[br],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return ao.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, io = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Te = {}, lo = function r(e, t, n, a, o, i, l, u, f, c, p, s, y, v, b, A, _, I) {
  for (var h = e, x = I, B = 0, X = !1; (x = x.get(Te)) !== void 0 && !X; ) {
    var G = x.get(e);
    if (B += 1, typeof G < "u") {
      if (G === B)
        throw new RangeError("Cyclic object value");
      X = !0;
    }
    typeof x.get(Te) > "u" && (B = 0);
  }
  if (typeof c == "function" ? h = c(t, h) : h instanceof Date ? h = y(h) : n === "comma" && $(h) && (h = ve.maybeMap(h, function(we) {
    return we instanceof Date ? y(we) : we;
  })), h === null) {
    if (i)
      return f && !A ? f(t, m.encoder, _, "key", v) : t;
    h = "";
  }
  if (io(h) || ve.isBuffer(h)) {
    if (f) {
      var fe = A ? t : f(t, m.encoder, _, "key", v);
      return [b(fe) + "=" + b(f(h, m.encoder, _, "value", v))];
    }
    return [b(t) + "=" + b(String(h))];
  }
  var C = [];
  if (typeof h > "u")
    return C;
  var F;
  if (n === "comma" && $(h))
    A && f && (h = ve.maybeMap(h, f)), F = [{ value: h.length > 0 ? h.join(",") || null : void 0 }];
  else if ($(c))
    F = c;
  else {
    var ue = Object.keys(h);
    F = p ? ue.sort(p) : ue;
  }
  var j = u ? t.replace(/\./g, "%2E") : t, E = a && $(h) && h.length === 1 ? j + "[]" : j;
  if (o && $(h) && h.length === 0)
    return E + "[]";
  for (var R = 0; R < F.length; ++R) {
    var D = F[R], ee = typeof D == "object" && typeof D.value < "u" ? D.value : h[D];
    if (!(l && ee === null)) {
      var Se = s && u ? D.replace(/\./g, "%2E") : D, Hr = $(h) ? typeof n == "function" ? n(E, Se) : E : E + (s ? "." + Se : "[" + Se + "]");
      I.set(e, B);
      var Je = Gr();
      Je.set(Te, I), kr(C, r(
        ee,
        Hr,
        n,
        a,
        o,
        i,
        l,
        u,
        n === "comma" && A && $(h) ? null : f,
        c,
        p,
        s,
        y,
        v,
        b,
        A,
        _,
        Je
      ));
    }
  }
  return C;
}, fo = function(e) {
  if (!e)
    return m;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var t = e.charset || m.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = ae.default;
  if (typeof e.format < "u") {
    if (!no.call(ae.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var a = ae.formatters[n], o = m.filter;
  (typeof e.filter == "function" || $(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in jr ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = m.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : m.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : m.addQueryPrefix,
    allowDots: l,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : m.allowEmptyArrays,
    arrayFormat: i,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : m.charsetSentinel,
    commaRoundTrip: e.commaRoundTrip,
    delimiter: typeof e.delimiter > "u" ? m.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : m.encode,
    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : m.encodeDotInKeys,
    encoder: typeof e.encoder == "function" ? e.encoder : m.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : m.encodeValuesOnly,
    filter: o,
    format: n,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : m.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : m.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : m.strictNullHandling
  };
}, uo = function(r, e) {
  var t = r, n = fo(e), a, o;
  typeof n.filter == "function" ? (o = n.filter, t = o("", t)) : $(n.filter) && (o = n.filter, a = o);
  var i = [];
  if (typeof t != "object" || t === null)
    return "";
  var l = jr[n.arrayFormat], u = l === "comma" && n.commaRoundTrip;
  a || (a = Object.keys(t)), n.sort && a.sort(n.sort);
  for (var f = Gr(), c = 0; c < a.length; ++c) {
    var p = a[c];
    n.skipNulls && t[p] === null || kr(i, lo(
      t[p],
      p,
      l,
      u,
      n.allowEmptyArrays,
      n.strictNullHandling,
      n.skipNulls,
      n.encodeDotInKeys,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      f
    ));
  }
  var s = i.join(n.delimiter), y = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? y += "utf8=%26%2310003%3B&" : y += "utf8=%E2%9C%93&"), s.length > 0 ? y + s : "";
}, J = Lr, je = Object.prototype.hasOwnProperty, co = Array.isArray, g = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !0,
  decoder: J.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, so = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, qr = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, po = "utf8=%26%2310003%3B", yo = "utf8=%E2%9C%93", vo = function(e, t) {
  var n = { __proto__: null }, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, i = a.split(t.delimiter, o), l = -1, u, f = t.charset;
  if (t.charsetSentinel)
    for (u = 0; u < i.length; ++u)
      i[u].indexOf("utf8=") === 0 && (i[u] === yo ? f = "utf-8" : i[u] === po && (f = "iso-8859-1"), l = u, u = i.length);
  for (u = 0; u < i.length; ++u)
    if (u !== l) {
      var c = i[u], p = c.indexOf("]="), s = p === -1 ? c.indexOf("=") : p + 1, y, v;
      s === -1 ? (y = t.decoder(c, g.decoder, f, "key"), v = t.strictNullHandling ? null : "") : (y = t.decoder(c.slice(0, s), g.decoder, f, "key"), v = J.maybeMap(
        qr(c.slice(s + 1), t),
        function(A) {
          return t.decoder(A, g.decoder, f, "value");
        }
      )), v && t.interpretNumericEntities && f === "iso-8859-1" && (v = so(v)), c.indexOf("[]=") > -1 && (v = co(v) ? [v] : v);
      var b = je.call(n, y);
      b && t.duplicates === "combine" ? n[y] = J.combine(n[y], v) : (!b || t.duplicates === "last") && (n[y] = v);
    }
  return n;
}, ho = function(r, e, t, n) {
  for (var a = n ? e : qr(e, t), o = r.length - 1; o >= 0; --o) {
    var i, l = r[o];
    if (l === "[]" && t.parseArrays)
      i = t.allowEmptyArrays && a === "" ? [] : [].concat(a);
    else {
      i = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = l.charAt(0) === "[" && l.charAt(l.length - 1) === "]" ? l.slice(1, -1) : l, f = t.decodeDotInKeys ? u.replace(/%2E/g, ".") : u, c = parseInt(f, 10);
      !t.parseArrays && f === "" ? i = { 0: a } : !isNaN(c) && l !== f && String(c) === f && c >= 0 && t.parseArrays && c <= t.arrayLimit ? (i = [], i[c] = a) : f !== "__proto__" && (i[f] = a);
    }
    a = i;
  }
  return a;
}, go = function(e, t, n, a) {
  if (e) {
    var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, l = /(\[[^[\]]*])/g, u = n.depth > 0 && i.exec(o), f = u ? o.slice(0, u.index) : o, c = [];
    if (f) {
      if (!n.plainObjects && je.call(Object.prototype, f) && !n.allowPrototypes)
        return;
      c.push(f);
    }
    for (var p = 0; n.depth > 0 && (u = l.exec(o)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && je.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      c.push(u[1]);
    }
    return u && c.push("[" + o.slice(u.index) + "]"), ho(c, t, n, a);
  }
}, mo = function(e) {
  if (!e)
    return g;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var t = typeof e.charset > "u" ? g.charset : e.charset, n = typeof e.duplicates > "u" ? g.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last")
    throw new TypeError("The duplicates option must be either combine, first, or last");
  var a = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : g.allowDots : !!e.allowDots;
  return {
    allowDots: a,
    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : g.allowEmptyArrays,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : g.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : g.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : g.arrayLimit,
    charset: t,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : g.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : g.comma,
    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : g.decodeDotInKeys,
    decoder: typeof e.decoder == "function" ? e.decoder : g.decoder,
    delimiter: typeof e.delimiter == "string" || J.isRegExp(e.delimiter) ? e.delimiter : g.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : g.depth,
    duplicates: n,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : g.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : g.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : g.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : g.strictNullHandling
  };
}, bo = function(r, e) {
  var t = mo(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? vo(r, t) : r, a = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(n), i = 0; i < o.length; ++i) {
    var l = o[i], u = go(l, n[l], t, typeof r == "string");
    a = J.merge(a, u, t);
  }
  return t.allowSparse === !0 ? a : J.compact(a);
}, So = uo, wo = bo, Ao = Qe, zr = {
  formats: Ao,
  parse: wo,
  stringify: So
};
class Ne {
  /**
   * @param {String} name - Route name.
   * @param {Object} definition - Route definition.
   * @param {Object} config - Ziggy configuration.
   */
  constructor(e, t, n) {
    this.name = e, this.definition = t, this.bindings = t.bindings ?? {}, this.wheres = t.wheres ?? {}, this.config = n;
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
    const e = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return e === "" ? "/" : e;
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
    var e;
    return ((e = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : e.map((t) => ({
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
  matchesUrl(e) {
    if (!this.definition.methods.includes("GET"))
      return !1;
    const t = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (i, l, u, f) => {
      var p;
      const c = `(?<${u}>${((p = this.wheres[u]) == null ? void 0 : p.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return f ? `(${l}${c})?` : `${l}${c}`;
    }).replace(/^\w+:\/\//, ""), [n, a] = e.replace(/^\w+:\/\//, "").split("?"), o = new RegExp(`^${t}/?$`).exec(decodeURI(n));
    if (o) {
      for (const i in o.groups)
        o.groups[i] = typeof o.groups[i] == "string" ? decodeURIComponent(o.groups[i]) : o.groups[i];
      return { params: o.groups, query: zr.parse(a) };
    }
    return !1;
  }
  /**
   * Hydrate and return a complete URL for this route with the given parameters.
   *
   * @param {Object} params
   * @return {String}
   */
  compile(e) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (n, a, o) => {
      if (!o && [null, void 0].includes(e[a]))
        throw new Error(
          `Ziggy error: '${a}' parameter is required for route '${this.name}'.`
        );
      if (this.wheres[a] && !new RegExp(
        `^${o ? `(${this.wheres[a]})?` : this.wheres[a]}$`
      ).test(e[a] ?? ""))
        throw new Error(
          `Ziggy error: '${a}' parameter does not match required format '${this.wheres[a]}' for route '${this.name}'.`
        );
      return encodeURI(e[a] ?? "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(`${this.origin}//`, `${this.origin}/`).replace(/\/+$/, "") : this.template;
  }
}
class Eo extends String {
  /**
   * @param {String} [name] - Route name.
   * @param {(String|Number|Array|Object)} [params] - Route parameters.
   * @param {Boolean} [absolute] - Whether to include the URL origin.
   * @param {Object} [config] - Ziggy configuration.
   */
  constructor(e, t, n = !0, a) {
    if (super(), this._config = a ?? (typeof Ziggy < "u" ? Ziggy : globalThis == null ? void 0 : globalThis.Ziggy), this._config = { ...this._config, absolute: n }, e) {
      if (!this._config.routes[e])
        throw new Error(`Ziggy error: route '${e}' is not in the route list.`);
      this._route = new Ne(e, this._config.routes[e], this._config), this._params = this._parse(t);
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
    const e = Object.keys(this._params).filter((t) => !this._route.parameterSegments.some(({ name: n }) => n === t)).filter((t) => t !== "_query").reduce((t, n) => ({ ...t, [n]: this._params[n] }), {});
    return this._route.compile(this._params) + zr.stringify(
      { ...e, ...this._params._query },
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
  _unresolve(e) {
    e ? this._config.absolute && e.startsWith("/") && (e = this._location().host + e) : e = this._currentUrl();
    let t = {};
    const [n, a] = Object.entries(this._config.routes).find(
      ([o, i]) => t = new Ne(o, i, this._config).matchesUrl(e)
    ) || [void 0, void 0];
    return { name: n, ...t, route: a };
  }
  _currentUrl() {
    const { host: e, pathname: t, search: n } = this._location();
    return (this._config.absolute ? e + t : t.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n;
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
  current(e, t) {
    const { name: n, params: a, query: o, route: i } = this._unresolve();
    if (!e)
      return n;
    const l = new RegExp(`^${e.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(
      n
    );
    if ([null, void 0].includes(t) || !l)
      return l;
    const u = new Ne(n, i, this._config);
    t = this._parse(t, u);
    const f = { ...a, ...o };
    if (Object.values(t).every((p) => !p) && !Object.values(f).some((p) => p !== void 0))
      return !0;
    const c = (p, s) => Object.entries(p).every(([y, v]) => Array.isArray(v) && Array.isArray(s[y]) ? v.every((b) => s[y].includes(b)) : typeof v == "object" && typeof s[y] == "object" && v !== null && s[y] !== null ? c(v, s[y]) : s[y] == v);
    return c(t, f);
  }
  /**
   * Get an object representing the current location (by default this will be
   * the JavaScript `window` global if it's available).
   *
   * @return {Object}
   */
  _location() {
    var a, o, i;
    const {
      host: e = "",
      pathname: t = "",
      search: n = ""
    } = typeof window < "u" ? window.location : {};
    return {
      host: ((a = this._config.location) == null ? void 0 : a.host) ?? e,
      pathname: ((o = this._config.location) == null ? void 0 : o.pathname) ?? t,
      search: ((i = this._config.location) == null ? void 0 : i.search) ?? n
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
    const { params: e, query: t } = this._unresolve();
    return { ...e, ...t };
  }
  /**
   * Check whether the given route exists.
   *
   * @param {String} name
   * @return {Boolean}
   */
  has(e) {
    return Object.keys(this._config.routes).includes(e);
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
  _parse(e = {}, t = this._route) {
    e ?? (e = {}), e = ["string", "number"].includes(typeof e) ? [e] : e;
    const n = t.parameterSegments.filter(({ name: a }) => !this._config.defaults[a]);
    return Array.isArray(e) ? e = e.reduce(
      (a, o, i) => n[i] ? { ...a, [n[i].name]: o } : typeof o == "object" ? { ...a, ...o } : { ...a, [o]: "" },
      {}
    ) : n.length === 1 && !e[n[0].name] && (e.hasOwnProperty(Object.values(t.bindings)[0]) || e.hasOwnProperty("id")) && (e = { [n[0].name]: e }), {
      ...this._defaults(t),
      ...this._substituteBindings(e, t)
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
  _defaults(e) {
    return e.parameterSegments.filter(({ name: t }) => this._config.defaults[t]).reduce(
      (t, { name: n }, a) => ({ ...t, [n]: this._config.defaults[n] }),
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
  _substituteBindings(e, { bindings: t, parameterSegments: n }) {
    return Object.entries(e).reduce((a, [o, i]) => {
      if (!i || typeof i != "object" || Array.isArray(i) || !n.some(({ name: l }) => l === o))
        return { ...a, [o]: i };
      if (!i.hasOwnProperty(t[o]))
        if (i.hasOwnProperty("id"))
          t[o] = "id";
        else
          throw new Error(
            `Ziggy error: object passed as '${o}' parameter is missing route model binding key '${t[o]}'.`
          );
      return { ...a, [o]: i[t[o]] };
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function Oo(r, e, t, n) {
  const a = new Eo(r, e, t, n);
  return r ? a.toString() : a;
}
const z = Ar({});
function Go(r) {
  return r.initialPage.props.ziggy && (Object.keys(r.initialPage.props.ziggy).forEach((e) => {
    z[e] = r.initialPage.props.ziggy[e];
  }), z.location = new URL(z.location)), {
    install: (e, t = {}) => {
      const n = t.global ?? !0, a = (o, i, l, u = z) => (z.location && typeof window < "u" && (z.location = null), Oo(o, i, l, u));
      e.provide(Or, a), n && (e.config.globalProperties.$route = a);
    }
  };
}
function $o(r) {
  return Jr() ? (Zr(r), !0) : !1;
}
function Kr(r) {
  return typeof r == "function" ? r() : Yr(r);
}
const Po = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _o = Object.prototype.toString, Io = (r) => _o.call(r) === "[object Object]", xo = () => {
};
function Fo(r) {
  return Object.entries(r);
}
function Ro(r) {
  var e;
  const t = Kr(r);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const Vr = Po ? window : void 0;
function Sr(...r) {
  let e, t, n, a;
  if (typeof r[0] == "string" || Array.isArray(r[0]) ? ([t, n, a] = r, e = Vr) : [e, t, n, a] = r, !e)
    return xo;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const o = [], i = () => {
    o.forEach((c) => c()), o.length = 0;
  }, l = (c, p, s, y) => (c.addEventListener(p, s, y), () => c.removeEventListener(p, s, y)), u = Er(
    () => [Ro(e), Kr(a)],
    ([c, p]) => {
      if (i(), !c)
        return;
      const s = Io(p) ? { ...p } : p;
      o.push(
        ...t.flatMap((y) => n.map((v) => l(c, y, v, s)))
      );
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    u(), i();
  };
  return $o(f), f;
}
const wr = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function Do(r = {}) {
  const { window: e = Vr } = r, t = Object.fromEntries(
    wr.map((o) => [o, Me()])
  );
  for (const [o, i] of Fo(t))
    Er(i, (l) => {
      !(e != null && e.location) || e.location[o] === l || (e.location[o] = l);
    });
  const n = (o) => {
    var i;
    const { state: l, length: u } = (e == null ? void 0 : e.history) || {}, { origin: f } = (e == null ? void 0 : e.location) || {};
    for (const c of wr)
      t[c].value = (i = e == null ? void 0 : e.location) == null ? void 0 : i[c];
    return Ar({
      trigger: o,
      state: l,
      length: u,
      origin: f,
      ...t
    });
  }, a = Me(n("load"));
  return e && (Sr(e, "popstate", () => a.value = n("popstate"), { passive: !0 }), Sr(e, "hashchange", () => a.value = n("hashchange"), { passive: !0 })), a;
}
const To = (r) => {
  const e = rt();
  return ye(() => {
    if (r = Ae(r), r) {
      if (typeof r == "string" && /^http/.test(r))
        return r;
      if (Array.isArray(r)) {
        const [t, n] = Ae(r);
        return typeof n != "object" ? e(t) : e(t, Ae(n));
      } else
        return e(r);
    } else
      return console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp"), "#";
  });
}, te = Me(null), No = [
  "data",
  "method",
  "replace",
  "preserve-scroll",
  "preserve-state",
  "only",
  "headers",
  "queryStringArrayFormat",
  "on-before",
  "on-start",
  "on-progress",
  "on-finish",
  "on-cancel",
  "on-error",
  "on-success"
], Mo = (r) => r.replace(/-./g, (e) => e[1].toUpperCase()), Bo = (r, e) => ["replace", "preserve-scroll", "preserve-state"].includes(r) ? !0 : e, Co = (r) => {
  const e = No.reduce((t, n) => (typeof r[n] < "u" && (t[Mo(n)] = Bo(n, r[n])), t), {});
  return e.method || (e.method = "GET"), e;
}, Uo = {
  useLink(r) {
    const e = Do();
    te.value || (te.value = `${e.value.origin}${e.value.pathname}`);
    const t = To(r.to), n = Xr(), a = Co(n);
    return {
      route: ye(() => ({ href: t.value })),
      isExactActive: ye(() => te.value === t.value),
      isActive: ye(() => te.value.startsWith(t.value)),
      navigate(o) {
        o.shiftKey || o.metaKey || o.ctrlKey || (o.preventDefault(), te.value = t.value, et.visit(t.value, a));
      }
    };
  }
}, jo = {
  install: (r) => {
    r.component("RouterLink", Uo);
  }
};
export {
  Go as useInertiaRoutes,
  To as useResolvedRoute,
  rt as useRoute,
  jo as vuetifyRoutesPlugin
};
