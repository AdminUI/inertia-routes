import { inject as Jr, reactive as Er, getCurrentScope as Zr, onScopeDispose as Yr, unref as Xr, ref as Be, watch as Or, computed as ye, toValue as Ae, useAttrs as et } from "vue";
import { router as rt } from "@inertiajs/vue3";
const $r = Symbol.for("inertia-routes"), tt = () => Jr($r);
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ot(r) {
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
var at = Error, it = EvalError, lt = RangeError, ft = ReferenceError, Pr = SyntaxError, ie = TypeError, ut = URIError, ct = function() {
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
}, Ye = typeof Symbol < "u" && Symbol, st = ct, pt = function() {
  return typeof Ye != "function" || typeof Symbol != "function" || typeof Ye("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : st();
}, Ee = {
  __proto__: null,
  foo: {}
}, yt = Object, dt = function() {
  return { __proto__: Ee }.foo === Ee.foo && !(Ee instanceof yt);
}, vt = "Function.prototype.bind called on incompatible ", ht = Object.prototype.toString, gt = Math.max, mt = "[object Function]", Xe = function(e, t) {
  for (var n = [], a = 0; a < e.length; a += 1)
    n[a] = e[a];
  for (var o = 0; o < t.length; o += 1)
    n[o + e.length] = t[o];
  return n;
}, bt = function(e, t) {
  for (var n = [], a = t, o = 0; a < e.length; a += 1, o += 1)
    n[o] = e[a];
  return n;
}, wt = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, St = function(e) {
  var t = this;
  if (typeof t != "function" || ht.apply(t) !== mt)
    throw new TypeError(vt + t);
  for (var n = bt(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var u = t.apply(
        this,
        Xe(n, arguments)
      );
      return Object(u) === u ? u : this;
    }
    return t.apply(
      e,
      Xe(n, arguments)
    );
  }, i = gt(0, t.length - n.length), f = [], l = 0; l < i; l++)
    f[l] = "$" + l;
  if (a = Function("binder", "return function (" + wt(f, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
    var s = function() {
    };
    s.prototype = t.prototype, a.prototype = new s(), s.prototype = null;
  }
  return a;
}, At = St, je = Function.prototype.bind || At, Et = Function.prototype.call, Ot = Object.prototype.hasOwnProperty, $t = je, Pt = $t.call(Et, Ot), d, _t = at, It = it, xt = lt, Ft = ft, H = Pr, V = ie, Rt = ut, _r = Function, Oe = function(r) {
  try {
    return _r('"use strict"; return (' + r + ").constructor;")();
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
}, Dt = W ? function() {
  try {
    return arguments.callee, $e;
  } catch {
    try {
      return W(arguments, "callee").get;
    } catch {
      return $e;
    }
  }
}() : $e, k = pt(), Tt = dt(), w = Object.getPrototypeOf || (Tt ? function(r) {
  return r.__proto__;
} : null), K = {}, Nt = typeof Uint8Array > "u" || !w ? d : w(Uint8Array), L = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? d : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? d : ArrayBuffer,
  "%ArrayIteratorPrototype%": k && w ? w([][Symbol.iterator]()) : d,
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
  "%Error%": _t,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": It,
  "%Float32Array%": typeof Float32Array > "u" ? d : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? d : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? d : FinalizationRegistry,
  "%Function%": _r,
  "%GeneratorFunction%": K,
  "%Int8Array%": typeof Int8Array > "u" ? d : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? d : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? d : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": k && w ? w(w([][Symbol.iterator]())) : d,
  "%JSON%": typeof JSON == "object" ? JSON : d,
  "%Map%": typeof Map > "u" ? d : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !k || !w ? d : w((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? d : Promise,
  "%Proxy%": typeof Proxy > "u" ? d : Proxy,
  "%RangeError%": xt,
  "%ReferenceError%": Ft,
  "%Reflect%": typeof Reflect > "u" ? d : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? d : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !k || !w ? d : w((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? d : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": k && w ? w(""[Symbol.iterator]()) : d,
  "%Symbol%": k ? Symbol : d,
  "%SyntaxError%": H,
  "%ThrowTypeError%": Dt,
  "%TypedArray%": Nt,
  "%TypeError%": V,
  "%Uint8Array%": typeof Uint8Array > "u" ? d : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? d : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? d : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? d : Uint32Array,
  "%URIError%": Rt,
  "%WeakMap%": typeof WeakMap > "u" ? d : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? d : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? d : WeakSet
};
if (w)
  try {
    null.error;
  } catch (r) {
    var Mt = w(w(r));
    L["%Error.prototype%"] = Mt;
  }
var Bt = function r(e) {
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
    a && w && (t = w(a.prototype));
  }
  return L[e] = t, t;
}, er = {
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
}, le = je, he = Pt, Ct = le.call(Function.call, Array.prototype.concat), Ut = le.call(Function.apply, Array.prototype.splice), rr = le.call(Function.call, String.prototype.replace), ge = le.call(Function.call, String.prototype.slice), Wt = le.call(Function.call, RegExp.prototype.exec), Lt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Gt = /\\(\\)?/g, qt = function(e) {
  var t = ge(e, 0, 1), n = ge(e, -1);
  if (t === "%" && n !== "%")
    throw new H("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new H("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return rr(e, Lt, function(o, i, f, l) {
    a[a.length] = f ? rr(l, Gt, "$1") : i || o;
  }), a;
}, kt = function(e, t) {
  var n = e, a;
  if (he(er, n) && (a = er[n], n = "%" + a[0] + "%"), he(L, n)) {
    var o = L[n];
    if (o === K && (o = Bt(n)), typeof o > "u" && !t)
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
  if (Wt(/^%?[^%]*%?$/, e) === null)
    throw new H("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = qt(e), a = n.length > 0 ? n[0] : "", o = kt("%" + a + "%", t), i = o.name, f = o.value, l = !1, s = o.alias;
  s && (a = s[0], Ut(n, Ct([0, 1], s)));
  for (var u = 1, p = !0; u < n.length; u += 1) {
    var c = n[u], y = ge(c, 0, 1), v = ge(c, -1);
    if ((y === '"' || y === "'" || y === "`" || v === '"' || v === "'" || v === "`") && y !== v)
      throw new H("property names with quotes must have matching quotes");
    if ((c === "constructor" || !p) && (l = !0), a += "." + c, i = "%" + a + "%", he(L, i))
      f = L[i];
    else if (f != null) {
      if (!(c in f)) {
        if (!t)
          throw new V("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (W && u + 1 >= n.length) {
        var b = W(f, c);
        p = !!b, p && "get" in b && !("originalValue" in b.get) ? f = b.get : f = f[c];
      } else
        p = he(f, c), f = f[c];
      p && !l && (L[i] = f);
    }
  }
  return f;
}, Ir = { exports: {} }, Pe, tr;
function ze() {
  if (tr)
    return Pe;
  tr = 1;
  var r = Z, e = r("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Pe = e, Pe;
}
var jt = Z, de = jt("%Object.getOwnPropertyDescriptor%", !0);
if (de)
  try {
    de([], "length");
  } catch {
    de = null;
  }
var xr = de, nr = ze(), zt = Pr, j = ie, or = xr, Kt = function(e, t, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new j("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new j("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new j("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new j("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new j("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new j("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, l = !!or && or(e, t);
  if (nr)
    nr(e, t, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: n,
      writable: o === null && l ? l.writable : !o
    });
  else if (f || !a && !o && !i)
    e[t] = n;
  else
    throw new zt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ce = ze(), Fr = function() {
  return !!Ce;
};
Fr.hasArrayLengthDefineBug = function() {
  if (!Ce)
    return null;
  try {
    return Ce([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Vt = Fr, Ht = Z, ar = Kt, Qt = Vt(), ir = xr, lr = ie, Jt = Ht("%Math.floor%"), Zt = function(e, t) {
  if (typeof e != "function")
    throw new lr("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || Jt(t) !== t)
    throw new lr("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && ir) {
    var i = ir(e, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !n) && (Qt ? ar(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t,
    !0,
    !0
  ) : ar(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t
  )), e;
};
(function(r) {
  var e = je, t = Z, n = Zt, a = ie, o = t("%Function.prototype.apply%"), i = t("%Function.prototype.call%"), f = t("%Reflect.apply%", !0) || e.call(i, o), l = ze(), s = t("%Math.max%");
  r.exports = function(c) {
    if (typeof c != "function")
      throw new a("a function is required");
    var y = f(e, i, arguments);
    return n(
      y,
      1 + s(0, c.length - (arguments.length - 1)),
      !0
    );
  };
  var u = function() {
    return f(e, o, arguments);
  };
  l ? l(r.exports, "apply", { value: u }) : r.exports.apply = u;
})(Ir);
var Yt = Ir.exports, Rr = Z, Dr = Yt, Xt = Dr(Rr("String.prototype.indexOf")), en = function(e, t) {
  var n = Rr(e, !!t);
  return typeof n == "function" && Xt(e, ".prototype.") > -1 ? Dr(n) : n;
};
const rn = {}, tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rn
}, Symbol.toStringTag, { value: "Module" })), nn = /* @__PURE__ */ ot(tn);
var Ke = typeof Map == "function" && Map.prototype, _e = Object.getOwnPropertyDescriptor && Ke ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, me = Ke && _e && typeof _e.get == "function" ? _e.get : null, fr = Ke && Map.prototype.forEach, Ve = typeof Set == "function" && Set.prototype, Ie = Object.getOwnPropertyDescriptor && Ve ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, be = Ve && Ie && typeof Ie.get == "function" ? Ie.get : null, ur = Ve && Set.prototype.forEach, on = typeof WeakMap == "function" && WeakMap.prototype, ne = on ? WeakMap.prototype.has : null, an = typeof WeakSet == "function" && WeakSet.prototype, oe = an ? WeakSet.prototype.has : null, ln = typeof WeakRef == "function" && WeakRef.prototype, cr = ln ? WeakRef.prototype.deref : null, fn = Boolean.prototype.valueOf, un = Object.prototype.toString, cn = Function.prototype.toString, sn = String.prototype.match, He = String.prototype.slice, N = String.prototype.replace, pn = String.prototype.toUpperCase, sr = String.prototype.toLowerCase, Tr = RegExp.prototype.test, pr = Array.prototype.concat, P = Array.prototype.join, yn = Array.prototype.slice, yr = Math.floor, Ue = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, xe = Object.getOwnPropertySymbols, We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Q = typeof Symbol == "function" && typeof Symbol.iterator == "object", S = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Q || !0) ? Symbol.toStringTag : null, Nr = Object.prototype.propertyIsEnumerable, dr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function vr(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || Tr.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -yr(-r) : yr(r);
    if (n !== r) {
      var a = String(n), o = He.call(e, a.length + 1);
      return N.call(a, t, "$&_") + "." + N.call(N.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return N.call(e, t, "$&_");
}
var Le = nn, hr = Le.custom, gr = Br(hr) ? hr : null, dn = function r(e, t, n, a) {
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
  var f = o.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Ur(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return f ? vr(e, l) : l;
  }
  if (typeof e == "bigint") {
    var s = String(e) + "n";
    return f ? vr(e, s) : s;
  }
  var u = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= u && u > 0 && typeof e == "object")
    return Ge(e) ? "[Array]" : "[Object]";
  var p = Dn(o, n);
  if (typeof a > "u")
    a = [];
  else if (Cr(a, e) >= 0)
    return "[Circular]";
  function c(E, R, D) {
    if (R && (a = yn.call(a), a.push(R)), D) {
      var ee = {
        depth: o.depth
      };
      return T(o, "quoteStyle") && (ee.quoteStyle = o.quoteStyle), r(E, ee, n + 1, a);
    }
    return r(E, o, n + 1, a);
  }
  if (typeof e == "function" && !mr(e)) {
    var y = En(e), v = ce(e, c);
    return "[Function" + (y ? ": " + y : " (anonymous)") + "]" + (v.length > 0 ? " { " + P.call(v, ", ") + " }" : "");
  }
  if (Br(e)) {
    var b = Q ? N.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : We.call(e);
    return typeof e == "object" && !Q ? re(b) : b;
  }
  if (xn(e)) {
    for (var A = "<" + sr.call(String(e.nodeName)), _ = e.attributes || [], I = 0; I < _.length; I++)
      A += " " + _[I].name + "=" + Mr(vn(_[I].value), "double", o);
    return A += ">", e.childNodes && e.childNodes.length && (A += "..."), A += "</" + sr.call(String(e.nodeName)) + ">", A;
  }
  if (Ge(e)) {
    if (e.length === 0)
      return "[]";
    var h = ce(e, c);
    return p && !Rn(h) ? "[" + qe(h, p) + "]" : "[ " + P.call(h, ", ") + " ]";
  }
  if (gn(e)) {
    var x = ce(e, c);
    return !("cause" in Error.prototype) && "cause" in e && !Nr.call(e, "cause") ? "{ [" + String(e) + "] " + P.call(pr.call("[cause]: " + c(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + P.call(x, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (gr && typeof e[gr] == "function" && Le)
      return Le(e, { depth: u - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (On(e)) {
    var B = [];
    return fr && fr.call(e, function(E, R) {
      B.push(c(R, e, !0) + " => " + c(E, e));
    }), br("Map", me.call(e), B, p);
  }
  if (_n(e)) {
    var X = [];
    return ur && ur.call(e, function(E) {
      X.push(c(E, e));
    }), br("Set", be.call(e), X, p);
  }
  if ($n(e))
    return Fe("WeakMap");
  if (In(e))
    return Fe("WeakSet");
  if (Pn(e))
    return Fe("WeakRef");
  if (bn(e))
    return re(c(Number(e)));
  if (Sn(e))
    return re(c(Ue.call(e)));
  if (wn(e))
    return re(fn.call(e));
  if (mn(e))
    return re(c(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === nt)
    return "{ [object globalThis] }";
  if (!hn(e) && !mr(e)) {
    var G = ce(e, c), fe = dr ? dr(e) === Object.prototype : e instanceof Object || e.constructor === Object, C = e instanceof Object ? "" : "null prototype", F = !fe && S && Object(e) === e && S in e ? He.call(M(e), 8, -1) : C ? "Object" : "", ue = fe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", q = ue + (F || C ? "[" + P.call(pr.call([], F || [], C || []), ": ") + "] " : "");
    return G.length === 0 ? q + "{}" : p ? q + "{" + qe(G, p) + "}" : q + "{ " + P.call(G, ", ") + " }";
  }
  return String(e);
};
function Mr(r, e, t) {
  var n = (t.quoteStyle || e) === "double" ? '"' : "'";
  return n + r + n;
}
function vn(r) {
  return N.call(String(r), /"/g, "&quot;");
}
function Ge(r) {
  return M(r) === "[object Array]" && (!S || !(typeof r == "object" && S in r));
}
function hn(r) {
  return M(r) === "[object Date]" && (!S || !(typeof r == "object" && S in r));
}
function mr(r) {
  return M(r) === "[object RegExp]" && (!S || !(typeof r == "object" && S in r));
}
function gn(r) {
  return M(r) === "[object Error]" && (!S || !(typeof r == "object" && S in r));
}
function mn(r) {
  return M(r) === "[object String]" && (!S || !(typeof r == "object" && S in r));
}
function bn(r) {
  return M(r) === "[object Number]" && (!S || !(typeof r == "object" && S in r));
}
function wn(r) {
  return M(r) === "[object Boolean]" && (!S || !(typeof r == "object" && S in r));
}
function Br(r) {
  if (Q)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !We)
    return !1;
  try {
    return We.call(r), !0;
  } catch {
  }
  return !1;
}
function Sn(r) {
  if (!r || typeof r != "object" || !Ue)
    return !1;
  try {
    return Ue.call(r), !0;
  } catch {
  }
  return !1;
}
var An = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function T(r, e) {
  return An.call(r, e);
}
function M(r) {
  return un.call(r);
}
function En(r) {
  if (r.name)
    return r.name;
  var e = sn.call(cn.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Cr(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function On(r) {
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
function $n(r) {
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
function Pn(r) {
  if (!cr || !r || typeof r != "object")
    return !1;
  try {
    return cr.call(r), !0;
  } catch {
  }
  return !1;
}
function _n(r) {
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
function In(r) {
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
function xn(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function Ur(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return Ur(He.call(r, 0, e.maxStringLength), e) + n;
  }
  var a = N.call(N.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Fn);
  return Mr(a, "single", e);
}
function Fn(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + pn.call(e.toString(16));
}
function re(r) {
  return "Object(" + r + ")";
}
function Fe(r) {
  return r + " { ? }";
}
function br(r, e, t, n) {
  var a = n ? qe(t, n) : P.call(t, ", ");
  return r + " (" + e + ") {" + a + "}";
}
function Rn(r) {
  for (var e = 0; e < r.length; e++)
    if (Cr(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function Dn(r, e) {
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
function qe(r, e) {
  if (r.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + P.call(r, "," + t) + `
` + e.prev;
}
function ce(r, e) {
  var t = Ge(r), n = [];
  if (t) {
    n.length = r.length;
    for (var a = 0; a < r.length; a++)
      n[a] = T(r, a) ? e(r[a], r) : "";
  }
  var o = typeof xe == "function" ? xe(r) : [], i;
  if (Q) {
    i = {};
    for (var f = 0; f < o.length; f++)
      i["$" + o[f]] = o[f];
  }
  for (var l in r)
    T(r, l) && (t && String(Number(l)) === l && l < r.length || Q && i["$" + l] instanceof Symbol || (Tr.call(/[^\w$]/, l) ? n.push(e(l, r) + ": " + e(r[l], r)) : n.push(l + ": " + e(r[l], r))));
  if (typeof xe == "function")
    for (var s = 0; s < o.length; s++)
      Nr.call(r, o[s]) && n.push("[" + e(o[s]) + "]: " + e(r[o[s]], r));
  return n;
}
var Wr = Z, Y = en, Tn = dn, Nn = ie, se = Wr("%WeakMap%", !0), pe = Wr("%Map%", !0), Mn = Y("WeakMap.prototype.get", !0), Bn = Y("WeakMap.prototype.set", !0), Cn = Y("WeakMap.prototype.has", !0), Un = Y("Map.prototype.get", !0), Wn = Y("Map.prototype.set", !0), Ln = Y("Map.prototype.has", !0), Qe = function(r, e) {
  for (var t = r, n; (n = t.next) !== null; t = n)
    if (n.key === e)
      return t.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = n, n;
}, Gn = function(r, e) {
  var t = Qe(r, e);
  return t && t.value;
}, qn = function(r, e, t) {
  var n = Qe(r, e);
  n ? n.value = t : r.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, kn = function(r, e) {
  return !!Qe(r, e);
}, jn = function() {
  var e, t, n, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new Nn("Side channel does not contain " + Tn(o));
    },
    get: function(o) {
      if (se && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Mn(e, o);
      } else if (pe) {
        if (t)
          return Un(t, o);
      } else if (n)
        return Gn(n, o);
    },
    has: function(o) {
      if (se && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return Cn(e, o);
      } else if (pe) {
        if (t)
          return Ln(t, o);
      } else if (n)
        return kn(n, o);
      return !1;
    },
    set: function(o, i) {
      se && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new se()), Bn(e, o, i)) : pe ? (t || (t = new pe()), Wn(t, o, i)) : (n || (n = { key: {}, next: null }), qn(n, o, i));
    }
  };
  return a;
}, zn = String.prototype.replace, Kn = /%20/g, Re = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Je = {
  default: Re.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return zn.call(r, Kn, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: Re.RFC1738,
  RFC3986: Re.RFC3986
}, Vn = Je, De = Object.prototype.hasOwnProperty, U = Array.isArray, O = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Hn = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (U(n)) {
      for (var a = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && a.push(n[o]);
      t.obj[t.prop] = a;
    }
  }
}, Lr = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (n[a] = e[a]);
  return n;
}, Qn = function r(e, t, n) {
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
  return U(e) && !U(t) && (a = Lr(e, n)), U(e) && U(t) ? (t.forEach(function(o, i) {
    if (De.call(e, i)) {
      var f = e[i];
      f && typeof f == "object" && o && typeof o == "object" ? e[i] = r(f, o, n) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(t).reduce(function(o, i) {
    var f = t[i];
    return De.call(o, i) ? o[i] = r(o[i], f, n) : o[i] = f, o;
  }, a);
}, Jn = function(e, t) {
  return Object.keys(t).reduce(function(n, a) {
    return n[a] = t[a], n;
  }, e);
}, Zn = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Te = 1024, Yn = function(e, t, n, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(y) {
      return "%26%23" + parseInt(y.slice(2), 16) + "%3B";
    });
  for (var f = "", l = 0; l < i.length; l += Te) {
    for (var s = i.length >= Te ? i.slice(l, l + Te) : i, u = [], p = 0; p < s.length; ++p) {
      var c = s.charCodeAt(p);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || o === Vn.RFC1738 && (c === 40 || c === 41)) {
        u[u.length] = s.charAt(p);
        continue;
      }
      if (c < 128) {
        u[u.length] = O[c];
        continue;
      }
      if (c < 2048) {
        u[u.length] = O[192 | c >> 6] + O[128 | c & 63];
        continue;
      }
      if (c < 55296 || c >= 57344) {
        u[u.length] = O[224 | c >> 12] + O[128 | c >> 6 & 63] + O[128 | c & 63];
        continue;
      }
      p += 1, c = 65536 + ((c & 1023) << 10 | s.charCodeAt(p) & 1023), u[u.length] = O[240 | c >> 18] + O[128 | c >> 12 & 63] + O[128 | c >> 6 & 63] + O[128 | c & 63];
    }
    f += u.join("");
  }
  return f;
}, Xn = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], a = 0; a < t.length; ++a)
    for (var o = t[a], i = o.obj[o.prop], f = Object.keys(i), l = 0; l < f.length; ++l) {
      var s = f[l], u = i[s];
      typeof u == "object" && u !== null && n.indexOf(u) === -1 && (t.push({ obj: i, prop: s }), n.push(u));
    }
  return Hn(t), e;
}, eo = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, ro = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, to = function(e, t) {
  return [].concat(e, t);
}, no = function(e, t) {
  if (U(e)) {
    for (var n = [], a = 0; a < e.length; a += 1)
      n.push(t(e[a]));
    return n;
  }
  return t(e);
}, Gr = {
  arrayToObject: Lr,
  assign: Jn,
  combine: to,
  compact: Xn,
  decode: Zn,
  encode: Yn,
  isBuffer: ro,
  isRegExp: eo,
  maybeMap: no,
  merge: Qn
}, qr = jn, ve = Gr, ae = Je, oo = Object.prototype.hasOwnProperty, kr = {
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
}, $ = Array.isArray, ao = Array.prototype.push, jr = function(r, e) {
  ao.apply(r, $(e) ? e : [e]);
}, io = Date.prototype.toISOString, wr = ae.default, m = {
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
  format: wr,
  formatter: ae.formatters[wr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return io.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, lo = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Ne = {}, fo = function r(e, t, n, a, o, i, f, l, s, u, p, c, y, v, b, A, _, I) {
  for (var h = e, x = I, B = 0, X = !1; (x = x.get(Ne)) !== void 0 && !X; ) {
    var G = x.get(e);
    if (B += 1, typeof G < "u") {
      if (G === B)
        throw new RangeError("Cyclic object value");
      X = !0;
    }
    typeof x.get(Ne) > "u" && (B = 0);
  }
  if (typeof u == "function" ? h = u(t, h) : h instanceof Date ? h = y(h) : n === "comma" && $(h) && (h = ve.maybeMap(h, function(Se) {
    return Se instanceof Date ? y(Se) : Se;
  })), h === null) {
    if (i)
      return s && !A ? s(t, m.encoder, _, "key", v) : t;
    h = "";
  }
  if (lo(h) || ve.isBuffer(h)) {
    if (s) {
      var fe = A ? t : s(t, m.encoder, _, "key", v);
      return [b(fe) + "=" + b(s(h, m.encoder, _, "value", v))];
    }
    return [b(t) + "=" + b(String(h))];
  }
  var C = [];
  if (typeof h > "u")
    return C;
  var F;
  if (n === "comma" && $(h))
    A && s && (h = ve.maybeMap(h, s)), F = [{ value: h.length > 0 ? h.join(",") || null : void 0 }];
  else if ($(u))
    F = u;
  else {
    var ue = Object.keys(h);
    F = p ? ue.sort(p) : ue;
  }
  var q = l ? t.replace(/\./g, "%2E") : t, E = a && $(h) && h.length === 1 ? q + "[]" : q;
  if (o && $(h) && h.length === 0)
    return E + "[]";
  for (var R = 0; R < F.length; ++R) {
    var D = F[R], ee = typeof D == "object" && typeof D.value < "u" ? D.value : h[D];
    if (!(f && ee === null)) {
      var we = c && l ? D.replace(/\./g, "%2E") : D, Qr = $(h) ? typeof n == "function" ? n(E, we) : E : E + (c ? "." + we : "[" + we + "]");
      I.set(e, B);
      var Ze = qr();
      Ze.set(Ne, I), jr(C, r(
        ee,
        Qr,
        n,
        a,
        o,
        i,
        f,
        l,
        n === "comma" && A && $(h) ? null : s,
        u,
        p,
        c,
        y,
        v,
        b,
        A,
        _,
        Ze
      ));
    }
  }
  return C;
}, uo = function(e) {
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
    if (!oo.call(ae.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var a = ae.formatters[n], o = m.filter;
  (typeof e.filter == "function" || $(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in kr ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = m.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var f = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : m.allowDots : !!e.allowDots;
  return {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : m.addQueryPrefix,
    allowDots: f,
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
}, co = function(r, e) {
  var t = r, n = uo(e), a, o;
  typeof n.filter == "function" ? (o = n.filter, t = o("", t)) : $(n.filter) && (o = n.filter, a = o);
  var i = [];
  if (typeof t != "object" || t === null)
    return "";
  var f = kr[n.arrayFormat], l = f === "comma" && n.commaRoundTrip;
  a || (a = Object.keys(t)), n.sort && a.sort(n.sort);
  for (var s = qr(), u = 0; u < a.length; ++u) {
    var p = a[u];
    n.skipNulls && t[p] === null || jr(i, fo(
      t[p],
      p,
      f,
      l,
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
      s
    ));
  }
  var c = i.join(n.delimiter), y = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? y += "utf8=%26%2310003%3B&" : y += "utf8=%E2%9C%93&"), c.length > 0 ? y + c : "";
}, J = Gr, ke = Object.prototype.hasOwnProperty, so = Array.isArray, g = {
  allowDots: !1,
  allowEmptyArrays: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decodeDotInKeys: !1,
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
}, po = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, zr = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, yo = "utf8=%26%2310003%3B", vo = "utf8=%E2%9C%93", ho = function(e, t) {
  var n = { __proto__: null }, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, i = a.split(t.delimiter, o), f = -1, l, s = t.charset;
  if (t.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === vo ? s = "utf-8" : i[l] === yo && (s = "iso-8859-1"), f = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== f) {
      var u = i[l], p = u.indexOf("]="), c = p === -1 ? u.indexOf("=") : p + 1, y, v;
      c === -1 ? (y = t.decoder(u, g.decoder, s, "key"), v = t.strictNullHandling ? null : "") : (y = t.decoder(u.slice(0, c), g.decoder, s, "key"), v = J.maybeMap(
        zr(u.slice(c + 1), t),
        function(A) {
          return t.decoder(A, g.decoder, s, "value");
        }
      )), v && t.interpretNumericEntities && s === "iso-8859-1" && (v = po(v)), u.indexOf("[]=") > -1 && (v = so(v) ? [v] : v);
      var b = ke.call(n, y);
      b && t.duplicates === "combine" ? n[y] = J.combine(n[y], v) : (!b || t.duplicates === "last") && (n[y] = v);
    }
  return n;
}, go = function(r, e, t, n) {
  for (var a = n ? e : zr(e, t), o = r.length - 1; o >= 0; --o) {
    var i, f = r[o];
    if (f === "[]" && t.parseArrays)
      i = t.allowEmptyArrays && a === "" ? [] : [].concat(a);
    else {
      i = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = f.charAt(0) === "[" && f.charAt(f.length - 1) === "]" ? f.slice(1, -1) : f, s = t.decodeDotInKeys ? l.replace(/%2E/g, ".") : l, u = parseInt(s, 10);
      !t.parseArrays && s === "" ? i = { 0: a } : !isNaN(u) && f !== s && String(u) === s && u >= 0 && t.parseArrays && u <= t.arrayLimit ? (i = [], i[u] = a) : s !== "__proto__" && (i[s] = a);
    }
    a = i;
  }
  return a;
}, mo = function(e, t, n, a) {
  if (e) {
    var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, f = /(\[[^[\]]*])/g, l = n.depth > 0 && i.exec(o), s = l ? o.slice(0, l.index) : o, u = [];
    if (s) {
      if (!n.plainObjects && ke.call(Object.prototype, s) && !n.allowPrototypes)
        return;
      u.push(s);
    }
    for (var p = 0; n.depth > 0 && (l = f.exec(o)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && ke.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      u.push(l[1]);
    }
    return l && u.push("[" + o.slice(l.index) + "]"), go(u, t, n, a);
  }
}, bo = function(e) {
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
}, wo = function(r, e) {
  var t = bo(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? ho(r, t) : r, a = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(n), i = 0; i < o.length; ++i) {
    var f = o[i], l = mo(f, n[f], t, typeof r == "string");
    a = J.merge(a, l, t);
  }
  return t.allowSparse === !0 ? a : J.compact(a);
}, So = co, Ao = wo, Eo = Je, Kr = {
  formats: Eo,
  parse: Ao,
  stringify: So
};
class Me {
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
    const t = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (i, f, l, s) => {
      var p;
      const u = `(?<${l}>${((p = this.wheres[l]) == null ? void 0 : p.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return s ? `(${f}${u})?` : `${f}${u}`;
    }).replace(/^\w+:\/\//, ""), [n, a] = e.replace(/^\w+:\/\//, "").split("?"), o = new RegExp(`^${t}/?$`).exec(n) ?? new RegExp(`^${t}/?$`).exec(decodeURI(n));
    if (o) {
      for (const i in o.groups)
        o.groups[i] = typeof o.groups[i] == "string" ? decodeURIComponent(o.groups[i]) : o.groups[i];
      return { params: o.groups, query: Kr.parse(a) };
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
          `Ziggy error: '${a}' parameter '${e[a]}' does not match required format '${this.wheres[a]}' for route '${this.name}'.`
        );
      return encodeURI(e[a] ?? "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class Oo extends String {
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
      this._route = new Me(e, this._config.routes[e], this._config), this._params = this._parse(t);
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
    return this._route.compile(this._params) + Kr.stringify(
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
      ([o, i]) => t = new Me(o, i, this._config).matchesUrl(e)
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
    const f = new RegExp(`^${e.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(
      n
    );
    if ([null, void 0].includes(t) || !f)
      return f;
    const l = new Me(n, i, this._config);
    t = this._parse(t, l);
    const s = { ...a, ...o };
    if (Object.values(t).every((p) => !p) && !Object.values(s).some((p) => p !== void 0))
      return !0;
    const u = (p, c) => Object.entries(p).every(([y, v]) => Array.isArray(v) && Array.isArray(c[y]) ? v.every((b) => c[y].includes(b)) : typeof v == "object" && typeof c[y] == "object" && v !== null && c[y] !== null ? u(v, c[y]) : c[y] == v);
    return u(t, s);
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
  has(e) {
    return this._config.routes.hasOwnProperty(e);
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
      if (!i || typeof i != "object" || Array.isArray(i) || !n.some(({ name: f }) => f === o))
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
function $o(r, e, t, n) {
  const a = new Oo(r, e, t, n);
  return r ? a.toString() : a;
}
const z = Er({});
function ko(r) {
  return r.initialPage.props.ziggy && (Object.keys(r.initialPage.props.ziggy).forEach((e) => {
    z[e] = r.initialPage.props.ziggy[e];
  }), z.location = new URL(z.location)), {
    install: (e, t = {}) => {
      const n = t.global ?? !0, a = (o, i, f, l = z) => (z.location && typeof window < "u" && (z.location = null), $o(o, i, f, l));
      e.provide($r, a), n && (e.config.globalProperties.$route = a);
    }
  };
}
function Po(r) {
  return Zr() ? (Yr(r), !0) : !1;
}
function Vr(r) {
  return typeof r == "function" ? r() : Xr(r);
}
const _o = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Io = Object.prototype.toString, xo = (r) => Io.call(r) === "[object Object]", Fo = () => {
};
function Ro(r) {
  return Object.entries(r);
}
function Do(r) {
  var e;
  const t = Vr(r);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const Hr = _o ? window : void 0;
function Sr(...r) {
  let e, t, n, a;
  if (typeof r[0] == "string" || Array.isArray(r[0]) ? ([t, n, a] = r, e = Hr) : [e, t, n, a] = r, !e)
    return Fo;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const o = [], i = () => {
    o.forEach((u) => u()), o.length = 0;
  }, f = (u, p, c, y) => (u.addEventListener(p, c, y), () => u.removeEventListener(p, c, y)), l = Or(
    () => [Do(e), Vr(a)],
    ([u, p]) => {
      if (i(), !u)
        return;
      const c = xo(p) ? { ...p } : p;
      o.push(
        ...t.flatMap((y) => n.map((v) => f(u, y, v, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    l(), i();
  };
  return Po(s), s;
}
const Ar = [
  "hash",
  "host",
  "hostname",
  "href",
  "pathname",
  "port",
  "protocol",
  "search"
];
function To(r = {}) {
  const { window: e = Hr } = r, t = Object.fromEntries(
    Ar.map((o) => [o, Be()])
  );
  for (const [o, i] of Ro(t))
    Or(i, (f) => {
      !(e != null && e.location) || e.location[o] === f || (e.location[o] = f);
    });
  const n = (o) => {
    var i;
    const { state: f, length: l } = (e == null ? void 0 : e.history) || {}, { origin: s } = (e == null ? void 0 : e.location) || {};
    for (const u of Ar)
      t[u].value = (i = e == null ? void 0 : e.location) == null ? void 0 : i[u];
    return Er({
      trigger: o,
      state: f,
      length: l,
      origin: s,
      ...t
    });
  }, a = Be(n("load"));
  return e && (Sr(e, "popstate", () => a.value = n("popstate"), { passive: !0 }), Sr(e, "hashchange", () => a.value = n("hashchange"), { passive: !0 })), a;
}
const No = (r) => {
  const e = tt();
  return ye(() => {
    if (r = Ae(r), r) {
      if (typeof r == "string" && /^http/.test(r))
        return r;
      if (Array.isArray(r)) {
        const [t, n] = Ae(r);
        return t ? typeof n != "object" ? e(t) : e(t, Ae(n)) : "#";
      } else
        return r ? e(r) : "#";
    } else
      return console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp"), "#";
  });
}, te = Be(null), Mo = [
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
], Bo = (r) => r.replace(/-./g, (e) => e[1].toUpperCase()), Co = (r, e) => ["replace", "preserve-scroll", "preserve-state"].includes(r) ? !0 : e, Uo = (r) => {
  const e = Mo.reduce((t, n) => (typeof r[n] < "u" && (t[Bo(n)] = Co(n, r[n])), t), {});
  return e.method || (e.method = "GET"), e;
}, Wo = (r) => {
  const e = To();
  te.value || (te.value = `${e.value.origin}${e.value.pathname}`);
  const t = No(r.to), n = et(), a = Uo(n);
  return {
    route: ye(() => ({ href: t.value })),
    isExactActive: ye(() => te.value === t.value),
    isActive: ye(() => te.value.startsWith(t.value)),
    navigate(o) {
      o.shiftKey || o.metaKey || o.ctrlKey || (o.preventDefault(), te.value = t.value, rt.visit(t.value, a));
    }
  };
}, Lo = {
  name: "RouterLink",
  useLink: Wo
}, jo = {
  install: (r) => {
    r.component("RouterLink", Lo);
  }
};
export {
  ko as useInertiaRoutes,
  No as useResolvedRoute,
  tt as useRoute,
  jo as vuetifyRoutesPlugin
};
