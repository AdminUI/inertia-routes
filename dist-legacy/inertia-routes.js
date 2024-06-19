import Lr, { reactive as Gr, unref as qr, computed as zr } from "vue";
var kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kr(r) {
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
var Hr = Error, Vr = EvalError, jr = RangeError, Qr = ReferenceError, mr = SyntaxError, ae = TypeError, Jr = URIError, Zr = function() {
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
}, Qe = typeof Symbol < "u" && Symbol, Yr = Zr, Xr = function() {
  return typeof Qe != "function" || typeof Symbol != "function" || typeof Qe("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Yr();
}, Se = {
  __proto__: null,
  foo: {}
}, et = Object, rt = function() {
  return { __proto__: Se }.foo === Se.foo && !(Se instanceof et);
}, tt = "Function.prototype.bind called on incompatible ", nt = Object.prototype.toString, ot = Math.max, at = "[object Function]", Je = function(e, t) {
  for (var n = [], a = 0; a < e.length; a += 1)
    n[a] = e[a];
  for (var o = 0; o < t.length; o += 1)
    n[o + e.length] = t[o];
  return n;
}, it = function(e, t) {
  for (var n = [], a = t, o = 0; a < e.length; a += 1, o += 1)
    n[o] = e[a];
  return n;
}, lt = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, ft = function(e) {
  var t = this;
  if (typeof t != "function" || nt.apply(t) !== at)
    throw new TypeError(tt + t);
  for (var n = it(arguments, 1), a, o = function() {
    if (this instanceof a) {
      var c = t.apply(
        this,
        Je(n, arguments)
      );
      return Object(c) === c ? c : this;
    }
    return t.apply(
      e,
      Je(n, arguments)
    );
  }, i = ot(0, t.length - n.length), f = [], l = 0; l < i; l++)
    f[l] = "$" + l;
  if (a = Function("binder", "return function (" + lt(f, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
    var s = function() {
    };
    s.prototype = t.prototype, a.prototype = new s(), s.prototype = null;
  }
  return a;
}, ut = ft, Ge = Function.prototype.bind || ut, ct = Function.prototype.call, st = Object.prototype.hasOwnProperty, pt = Ge, yt = pt.call(ct, st), y, dt = Hr, vt = Vr, ht = jr, gt = Qr, j = mr, V = ae, mt = Jr, br = Function, we = function(r) {
  try {
    return br('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, W = Object.getOwnPropertyDescriptor;
if (W)
  try {
    W({}, "");
  } catch {
    W = null;
  }
var Ae = function() {
  throw new V();
}, bt = W ? function() {
  try {
    return arguments.callee, Ae;
  } catch {
    try {
      return W(arguments, "callee").get;
    } catch {
      return Ae;
    }
  }
}() : Ae, z = Xr(), St = rt(), S = Object.getPrototypeOf || (St ? function(r) {
  return r.__proto__;
} : null), H = {}, wt = typeof Uint8Array > "u" || !S ? y : S(Uint8Array), L = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? y : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? y : ArrayBuffer,
  "%ArrayIteratorPrototype%": z && S ? S([][Symbol.iterator]()) : y,
  "%AsyncFromSyncIteratorPrototype%": y,
  "%AsyncFunction%": H,
  "%AsyncGenerator%": H,
  "%AsyncGeneratorFunction%": H,
  "%AsyncIteratorPrototype%": H,
  "%Atomics%": typeof Atomics > "u" ? y : Atomics,
  "%BigInt%": typeof BigInt > "u" ? y : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? y : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? y : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? y : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": dt,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": vt,
  "%Float32Array%": typeof Float32Array > "u" ? y : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? y : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? y : FinalizationRegistry,
  "%Function%": br,
  "%GeneratorFunction%": H,
  "%Int8Array%": typeof Int8Array > "u" ? y : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? y : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? y : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": z && S ? S(S([][Symbol.iterator]())) : y,
  "%JSON%": typeof JSON == "object" ? JSON : y,
  "%Map%": typeof Map > "u" ? y : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !z || !S ? y : S((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? y : Promise,
  "%Proxy%": typeof Proxy > "u" ? y : Proxy,
  "%RangeError%": ht,
  "%ReferenceError%": gt,
  "%Reflect%": typeof Reflect > "u" ? y : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? y : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !z || !S ? y : S((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? y : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": z && S ? S(""[Symbol.iterator]()) : y,
  "%Symbol%": z ? Symbol : y,
  "%SyntaxError%": j,
  "%ThrowTypeError%": bt,
  "%TypedArray%": wt,
  "%TypeError%": V,
  "%Uint8Array%": typeof Uint8Array > "u" ? y : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? y : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? y : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? y : Uint32Array,
  "%URIError%": mt,
  "%WeakMap%": typeof WeakMap > "u" ? y : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? y : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? y : WeakSet
};
if (S)
  try {
    null.error;
  } catch (r) {
    var At = S(S(r));
    L["%Error.prototype%"] = At;
  }
var Ot = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = we("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = we("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = we("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = r("%AsyncGeneratorFunction%");
    n && (t = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = r("%AsyncGenerator%");
    a && S && (t = S(a.prototype));
  }
  return L[e] = t, t;
}, Ze = {
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
}, ie = Ge, de = yt, Et = ie.call(Function.call, Array.prototype.concat), $t = ie.call(Function.apply, Array.prototype.splice), Ye = ie.call(Function.call, String.prototype.replace), ve = ie.call(Function.call, String.prototype.slice), Pt = ie.call(Function.call, RegExp.prototype.exec), _t = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, It = /\\(\\)?/g, xt = function(e) {
  var t = ve(e, 0, 1), n = ve(e, -1);
  if (t === "%" && n !== "%")
    throw new j("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new j("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Ye(e, _t, function(o, i, f, l) {
    a[a.length] = f ? Ye(l, It, "$1") : i || o;
  }), a;
}, Ft = function(e, t) {
  var n = e, a;
  if (de(Ze, n) && (a = Ze[n], n = "%" + a[0] + "%"), de(L, n)) {
    var o = L[n];
    if (o === H && (o = Ot(n)), typeof o > "u" && !t)
      throw new V("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: o
    };
  }
  throw new j("intrinsic " + e + " does not exist!");
}, Z = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new V("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new V('"allowMissing" argument must be a boolean');
  if (Pt(/^%?[^%]*%?$/, e) === null)
    throw new j("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = xt(e), a = n.length > 0 ? n[0] : "", o = Ft("%" + a + "%", t), i = o.name, f = o.value, l = !1, s = o.alias;
  s && (a = s[0], $t(n, Et([0, 1], s)));
  for (var c = 1, p = !0; c < n.length; c += 1) {
    var u = n[c], d = ve(u, 0, 1), h = ve(u, -1);
    if ((d === '"' || d === "'" || d === "`" || h === '"' || h === "'" || h === "`") && d !== h)
      throw new j("property names with quotes must have matching quotes");
    if ((u === "constructor" || !p) && (l = !0), a += "." + u, i = "%" + a + "%", de(L, i))
      f = L[i];
    else if (f != null) {
      if (!(u in f)) {
        if (!t)
          throw new V("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (W && c + 1 >= n.length) {
        var b = W(f, u);
        p = !!b, p && "get" in b && !("originalValue" in b.get) ? f = b.get : f = f[u];
      } else
        p = de(f, u), f = f[u];
      p && !l && (L[i] = f);
    }
  }
  return f;
}, Sr = { exports: {} }, Oe, Xe;
function qe() {
  if (Xe)
    return Oe;
  Xe = 1;
  var r = Z, e = r("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Oe = e, Oe;
}
var Rt = Z, pe = Rt("%Object.getOwnPropertyDescriptor%", !0);
if (pe)
  try {
    pe([], "length");
  } catch {
    pe = null;
  }
var wr = pe, er = qe(), Dt = mr, k = ae, rr = wr, Tt = function(e, t, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new k("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new k("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new k("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new k("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new k("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new k("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, f = arguments.length > 6 ? arguments[6] : !1, l = !!rr && rr(e, t);
  if (er)
    er(e, t, {
      configurable: i === null && l ? l.configurable : !i,
      enumerable: a === null && l ? l.enumerable : !a,
      value: n,
      writable: o === null && l ? l.writable : !o
    });
  else if (f || !a && !o && !i)
    e[t] = n;
  else
    throw new Dt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ne = qe(), Ar = function() {
  return !!Ne;
};
Ar.hasArrayLengthDefineBug = function() {
  if (!Ne)
    return null;
  try {
    return Ne([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Nt = Ar, Mt = Z, tr = Tt, Bt = Nt(), nr = wr, or = ae, Ct = Mt("%Math.floor%"), Ut = function(e, t) {
  if (typeof e != "function")
    throw new or("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || Ct(t) !== t)
    throw new or("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && nr) {
    var i = nr(e, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !n) && (Bt ? tr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t,
    !0,
    !0
  ) : tr(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    t
  )), e;
};
(function(r) {
  var e = Ge, t = Z, n = Ut, a = ae, o = t("%Function.prototype.apply%"), i = t("%Function.prototype.call%"), f = t("%Reflect.apply%", !0) || e.call(i, o), l = qe(), s = t("%Math.max%");
  r.exports = function(u) {
    if (typeof u != "function")
      throw new a("a function is required");
    var d = f(e, i, arguments);
    return n(
      d,
      1 + s(0, u.length - (arguments.length - 1)),
      !0
    );
  };
  var c = function() {
    return f(e, o, arguments);
  };
  l ? l(r.exports, "apply", { value: c }) : r.exports.apply = c;
})(Sr);
var Wt = Sr.exports, Or = Z, Er = Wt, Lt = Er(Or("String.prototype.indexOf")), Gt = function(e, t) {
  var n = Or(e, !!t);
  return typeof n == "function" && Lt(e, ".prototype.") > -1 ? Er(n) : n;
};
const qt = {}, zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt
}, Symbol.toStringTag, { value: "Module" })), kt = /* @__PURE__ */ Kr(zt);
var ze = typeof Map == "function" && Map.prototype, Ee = Object.getOwnPropertyDescriptor && ze ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, he = ze && Ee && typeof Ee.get == "function" ? Ee.get : null, ar = ze && Map.prototype.forEach, ke = typeof Set == "function" && Set.prototype, $e = Object.getOwnPropertyDescriptor && ke ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ge = ke && $e && typeof $e.get == "function" ? $e.get : null, ir = ke && Set.prototype.forEach, Kt = typeof WeakMap == "function" && WeakMap.prototype, te = Kt ? WeakMap.prototype.has : null, Ht = typeof WeakSet == "function" && WeakSet.prototype, ne = Ht ? WeakSet.prototype.has : null, Vt = typeof WeakRef == "function" && WeakRef.prototype, lr = Vt ? WeakRef.prototype.deref : null, jt = Boolean.prototype.valueOf, Qt = Object.prototype.toString, Jt = Function.prototype.toString, Zt = String.prototype.match, Ke = String.prototype.slice, N = String.prototype.replace, Yt = String.prototype.toUpperCase, fr = String.prototype.toLowerCase, $r = RegExp.prototype.test, ur = Array.prototype.concat, P = Array.prototype.join, Xt = Array.prototype.slice, cr = Math.floor, Me = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Pe = Object.getOwnPropertySymbols, Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Q = typeof Symbol == "function" && typeof Symbol.iterator == "object", w = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Q || !0) ? Symbol.toStringTag : null, Pr = Object.prototype.propertyIsEnumerable, sr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function pr(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || $r.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -cr(-r) : cr(r);
    if (n !== r) {
      var a = String(n), o = Ke.call(e, a.length + 1);
      return N.call(a, t, "$&_") + "." + N.call(N.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return N.call(e, t, "$&_");
}
var Ce = kt, yr = Ce.custom, dr = Ir(yr) ? yr : null, en = function r(e, t, n, a) {
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
    return Fr(e, o);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return f ? pr(e, l) : l;
  }
  if (typeof e == "bigint") {
    var s = String(e) + "n";
    return f ? pr(e, s) : s;
  }
  var c = typeof o.depth > "u" ? 5 : o.depth;
  if (typeof n > "u" && (n = 0), n >= c && c > 0 && typeof e == "object")
    return Ue(e) ? "[Array]" : "[Object]";
  var p = bn(o, n);
  if (typeof a > "u")
    a = [];
  else if (xr(a, e) >= 0)
    return "[Circular]";
  function u(O, R, D) {
    if (R && (a = Xt.call(a), a.push(R)), D) {
      var ee = {
        depth: o.depth
      };
      return T(o, "quoteStyle") && (ee.quoteStyle = o.quoteStyle), r(O, ee, n + 1, a);
    }
    return r(O, o, n + 1, a);
  }
  if (typeof e == "function" && !vr(e)) {
    var d = cn(e), h = ue(e, u);
    return "[Function" + (d ? ": " + d : " (anonymous)") + "]" + (h.length > 0 ? " { " + P.call(h, ", ") + " }" : "");
  }
  if (Ir(e)) {
    var b = Q ? N.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Be.call(e);
    return typeof e == "object" && !Q ? re(b) : b;
  }
  if (hn(e)) {
    for (var A = "<" + fr.call(String(e.nodeName)), _ = e.attributes || [], I = 0; I < _.length; I++)
      A += " " + _[I].name + "=" + _r(rn(_[I].value), "double", o);
    return A += ">", e.childNodes && e.childNodes.length && (A += "..."), A += "</" + fr.call(String(e.nodeName)) + ">", A;
  }
  if (Ue(e)) {
    if (e.length === 0)
      return "[]";
    var v = ue(e, u);
    return p && !mn(v) ? "[" + We(v, p) + "]" : "[ " + P.call(v, ", ") + " ]";
  }
  if (nn(e)) {
    var x = ue(e, u);
    return !("cause" in Error.prototype) && "cause" in e && !Pr.call(e, "cause") ? "{ [" + String(e) + "] " + P.call(ur.call("[cause]: " + u(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + P.call(x, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (dr && typeof e[dr] == "function" && Ce)
      return Ce(e, { depth: c - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (sn(e)) {
    var B = [];
    return ar && ar.call(e, function(O, R) {
      B.push(u(R, e, !0) + " => " + u(O, e));
    }), hr("Map", he.call(e), B, p);
  }
  if (dn(e)) {
    var X = [];
    return ir && ir.call(e, function(O) {
      X.push(u(O, e));
    }), hr("Set", ge.call(e), X, p);
  }
  if (pn(e))
    return _e("WeakMap");
  if (vn(e))
    return _e("WeakSet");
  if (yn(e))
    return _e("WeakRef");
  if (an(e))
    return re(u(Number(e)));
  if (fn(e))
    return re(u(Me.call(e)));
  if (ln(e))
    return re(jt.call(e));
  if (on(e))
    return re(u(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === kr)
    return "{ [object globalThis] }";
  if (!tn(e) && !vr(e)) {
    var G = ue(e, u), le = sr ? sr(e) === Object.prototype : e instanceof Object || e.constructor === Object, C = e instanceof Object ? "" : "null prototype", F = !le && w && Object(e) === e && w in e ? Ke.call(M(e), 8, -1) : C ? "Object" : "", fe = le || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", q = fe + (F || C ? "[" + P.call(ur.call([], F || [], C || []), ": ") + "] " : "");
    return G.length === 0 ? q + "{}" : p ? q + "{" + We(G, p) + "}" : q + "{ " + P.call(G, ", ") + " }";
  }
  return String(e);
};
function _r(r, e, t) {
  var n = (t.quoteStyle || e) === "double" ? '"' : "'";
  return n + r + n;
}
function rn(r) {
  return N.call(String(r), /"/g, "&quot;");
}
function Ue(r) {
  return M(r) === "[object Array]" && (!w || !(typeof r == "object" && w in r));
}
function tn(r) {
  return M(r) === "[object Date]" && (!w || !(typeof r == "object" && w in r));
}
function vr(r) {
  return M(r) === "[object RegExp]" && (!w || !(typeof r == "object" && w in r));
}
function nn(r) {
  return M(r) === "[object Error]" && (!w || !(typeof r == "object" && w in r));
}
function on(r) {
  return M(r) === "[object String]" && (!w || !(typeof r == "object" && w in r));
}
function an(r) {
  return M(r) === "[object Number]" && (!w || !(typeof r == "object" && w in r));
}
function ln(r) {
  return M(r) === "[object Boolean]" && (!w || !(typeof r == "object" && w in r));
}
function Ir(r) {
  if (Q)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !Be)
    return !1;
  try {
    return Be.call(r), !0;
  } catch {
  }
  return !1;
}
function fn(r) {
  if (!r || typeof r != "object" || !Me)
    return !1;
  try {
    return Me.call(r), !0;
  } catch {
  }
  return !1;
}
var un = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function T(r, e) {
  return un.call(r, e);
}
function M(r) {
  return Qt.call(r);
}
function cn(r) {
  if (r.name)
    return r.name;
  var e = Zt.call(Jt.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function xr(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function sn(r) {
  if (!he || !r || typeof r != "object")
    return !1;
  try {
    he.call(r);
    try {
      ge.call(r);
    } catch {
      return !0;
    }
    return r instanceof Map;
  } catch {
  }
  return !1;
}
function pn(r) {
  if (!te || !r || typeof r != "object")
    return !1;
  try {
    te.call(r, te);
    try {
      ne.call(r, ne);
    } catch {
      return !0;
    }
    return r instanceof WeakMap;
  } catch {
  }
  return !1;
}
function yn(r) {
  if (!lr || !r || typeof r != "object")
    return !1;
  try {
    return lr.call(r), !0;
  } catch {
  }
  return !1;
}
function dn(r) {
  if (!ge || !r || typeof r != "object")
    return !1;
  try {
    ge.call(r);
    try {
      he.call(r);
    } catch {
      return !0;
    }
    return r instanceof Set;
  } catch {
  }
  return !1;
}
function vn(r) {
  if (!ne || !r || typeof r != "object")
    return !1;
  try {
    ne.call(r, ne);
    try {
      te.call(r, te);
    } catch {
      return !0;
    }
    return r instanceof WeakSet;
  } catch {
  }
  return !1;
}
function hn(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function Fr(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return Fr(Ke.call(r, 0, e.maxStringLength), e) + n;
  }
  var a = N.call(N.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, gn);
  return _r(a, "single", e);
}
function gn(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + Yt.call(e.toString(16));
}
function re(r) {
  return "Object(" + r + ")";
}
function _e(r) {
  return r + " { ? }";
}
function hr(r, e, t, n) {
  var a = n ? We(t, n) : P.call(t, ", ");
  return r + " (" + e + ") {" + a + "}";
}
function mn(r) {
  for (var e = 0; e < r.length; e++)
    if (xr(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function bn(r, e) {
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
function We(r, e) {
  if (r.length === 0)
    return "";
  var t = `
` + e.prev + e.base;
  return t + P.call(r, "," + t) + `
` + e.prev;
}
function ue(r, e) {
  var t = Ue(r), n = [];
  if (t) {
    n.length = r.length;
    for (var a = 0; a < r.length; a++)
      n[a] = T(r, a) ? e(r[a], r) : "";
  }
  var o = typeof Pe == "function" ? Pe(r) : [], i;
  if (Q) {
    i = {};
    for (var f = 0; f < o.length; f++)
      i["$" + o[f]] = o[f];
  }
  for (var l in r)
    T(r, l) && (t && String(Number(l)) === l && l < r.length || Q && i["$" + l] instanceof Symbol || ($r.call(/[^\w$]/, l) ? n.push(e(l, r) + ": " + e(r[l], r)) : n.push(l + ": " + e(r[l], r))));
  if (typeof Pe == "function")
    for (var s = 0; s < o.length; s++)
      Pr.call(r, o[s]) && n.push("[" + e(o[s]) + "]: " + e(r[o[s]], r));
  return n;
}
var Rr = Z, Y = Gt, Sn = en, wn = ae, ce = Rr("%WeakMap%", !0), se = Rr("%Map%", !0), An = Y("WeakMap.prototype.get", !0), On = Y("WeakMap.prototype.set", !0), En = Y("WeakMap.prototype.has", !0), $n = Y("Map.prototype.get", !0), Pn = Y("Map.prototype.set", !0), _n = Y("Map.prototype.has", !0), He = function(r, e) {
  for (var t = r, n; (n = t.next) !== null; t = n)
    if (n.key === e)
      return t.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = n, n;
}, In = function(r, e) {
  var t = He(r, e);
  return t && t.value;
}, xn = function(r, e, t) {
  var n = He(r, e);
  n ? n.value = t : r.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, Fn = function(r, e) {
  return !!He(r, e);
}, Rn = function() {
  var e, t, n, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new wn("Side channel does not contain " + Sn(o));
    },
    get: function(o) {
      if (ce && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return An(e, o);
      } else if (se) {
        if (t)
          return $n(t, o);
      } else if (n)
        return In(n, o);
    },
    has: function(o) {
      if (ce && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return En(e, o);
      } else if (se) {
        if (t)
          return _n(t, o);
      } else if (n)
        return Fn(n, o);
      return !1;
    },
    set: function(o, i) {
      ce && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new ce()), On(e, o, i)) : se ? (t || (t = new se()), Pn(t, o, i)) : (n || (n = { key: {}, next: null }), xn(n, o, i));
    }
  };
  return a;
}, Dn = String.prototype.replace, Tn = /%20/g, Ie = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Ve = {
  default: Ie.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return Dn.call(r, Tn, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: Ie.RFC1738,
  RFC3986: Ie.RFC3986
}, Nn = Ve, xe = Object.prototype.hasOwnProperty, U = Array.isArray, E = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Mn = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (U(n)) {
      for (var a = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && a.push(n[o]);
      t.obj[t.prop] = a;
    }
  }
}, Dr = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (n[a] = e[a]);
  return n;
}, Bn = function r(e, t, n) {
  if (!t)
    return e;
  if (typeof t != "object") {
    if (U(e))
      e.push(t);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !xe.call(Object.prototype, t)) && (e[t] = !0);
    else
      return [e, t];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(t);
  var a = e;
  return U(e) && !U(t) && (a = Dr(e, n)), U(e) && U(t) ? (t.forEach(function(o, i) {
    if (xe.call(e, i)) {
      var f = e[i];
      f && typeof f == "object" && o && typeof o == "object" ? e[i] = r(f, o, n) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(t).reduce(function(o, i) {
    var f = t[i];
    return xe.call(o, i) ? o[i] = r(o[i], f, n) : o[i] = f, o;
  }, a);
}, Cn = function(e, t) {
  return Object.keys(t).reduce(function(n, a) {
    return n[a] = t[a], n;
  }, e);
}, Un = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Fe = 1024, Wn = function(e, t, n, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(d) {
      return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
    });
  for (var f = "", l = 0; l < i.length; l += Fe) {
    for (var s = i.length >= Fe ? i.slice(l, l + Fe) : i, c = [], p = 0; p < s.length; ++p) {
      var u = s.charCodeAt(p);
      if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === Nn.RFC1738 && (u === 40 || u === 41)) {
        c[c.length] = s.charAt(p);
        continue;
      }
      if (u < 128) {
        c[c.length] = E[u];
        continue;
      }
      if (u < 2048) {
        c[c.length] = E[192 | u >> 6] + E[128 | u & 63];
        continue;
      }
      if (u < 55296 || u >= 57344) {
        c[c.length] = E[224 | u >> 12] + E[128 | u >> 6 & 63] + E[128 | u & 63];
        continue;
      }
      p += 1, u = 65536 + ((u & 1023) << 10 | s.charCodeAt(p) & 1023), c[c.length] = E[240 | u >> 18] + E[128 | u >> 12 & 63] + E[128 | u >> 6 & 63] + E[128 | u & 63];
    }
    f += c.join("");
  }
  return f;
}, Ln = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], a = 0; a < t.length; ++a)
    for (var o = t[a], i = o.obj[o.prop], f = Object.keys(i), l = 0; l < f.length; ++l) {
      var s = f[l], c = i[s];
      typeof c == "object" && c !== null && n.indexOf(c) === -1 && (t.push({ obj: i, prop: s }), n.push(c));
    }
  return Mn(t), e;
}, Gn = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, qn = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, zn = function(e, t) {
  return [].concat(e, t);
}, kn = function(e, t) {
  if (U(e)) {
    for (var n = [], a = 0; a < e.length; a += 1)
      n.push(t(e[a]));
    return n;
  }
  return t(e);
}, Tr = {
  arrayToObject: Dr,
  assign: Cn,
  combine: zn,
  compact: Ln,
  decode: Un,
  encode: Wn,
  isBuffer: qn,
  isRegExp: Gn,
  maybeMap: kn,
  merge: Bn
}, Nr = Rn, ye = Tr, oe = Ve, Kn = Object.prototype.hasOwnProperty, Mr = {
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
}, $ = Array.isArray, Hn = Array.prototype.push, Br = function(r, e) {
  Hn.apply(r, $(e) ? e : [e]);
}, Vn = Date.prototype.toISOString, gr = oe.default, m = {
  addQueryPrefix: !1,
  allowDots: !1,
  allowEmptyArrays: !1,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encodeDotInKeys: !1,
  encoder: ye.encode,
  encodeValuesOnly: !1,
  format: gr,
  formatter: oe.formatters[gr],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Vn.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, jn = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Re = {}, Qn = function r(e, t, n, a, o, i, f, l, s, c, p, u, d, h, b, A, _, I) {
  for (var v = e, x = I, B = 0, X = !1; (x = x.get(Re)) !== void 0 && !X; ) {
    var G = x.get(e);
    if (B += 1, typeof G < "u") {
      if (G === B)
        throw new RangeError("Cyclic object value");
      X = !0;
    }
    typeof x.get(Re) > "u" && (B = 0);
  }
  if (typeof c == "function" ? v = c(t, v) : v instanceof Date ? v = d(v) : n === "comma" && $(v) && (v = ye.maybeMap(v, function(be) {
    return be instanceof Date ? d(be) : be;
  })), v === null) {
    if (i)
      return s && !A ? s(t, m.encoder, _, "key", h) : t;
    v = "";
  }
  if (jn(v) || ye.isBuffer(v)) {
    if (s) {
      var le = A ? t : s(t, m.encoder, _, "key", h);
      return [b(le) + "=" + b(s(v, m.encoder, _, "value", h))];
    }
    return [b(t) + "=" + b(String(v))];
  }
  var C = [];
  if (typeof v > "u")
    return C;
  var F;
  if (n === "comma" && $(v))
    A && s && (v = ye.maybeMap(v, s)), F = [{ value: v.length > 0 ? v.join(",") || null : void 0 }];
  else if ($(c))
    F = c;
  else {
    var fe = Object.keys(v);
    F = p ? fe.sort(p) : fe;
  }
  var q = l ? t.replace(/\./g, "%2E") : t, O = a && $(v) && v.length === 1 ? q + "[]" : q;
  if (o && $(v) && v.length === 0)
    return O + "[]";
  for (var R = 0; R < F.length; ++R) {
    var D = F[R], ee = typeof D == "object" && typeof D.value < "u" ? D.value : v[D];
    if (!(f && ee === null)) {
      var me = u && l ? D.replace(/\./g, "%2E") : D, Wr = $(v) ? typeof n == "function" ? n(O, me) : O : O + (u ? "." + me : "[" + me + "]");
      I.set(e, B);
      var je = Nr();
      je.set(Re, I), Br(C, r(
        ee,
        Wr,
        n,
        a,
        o,
        i,
        f,
        l,
        n === "comma" && A && $(v) ? null : s,
        c,
        p,
        u,
        d,
        h,
        b,
        A,
        _,
        je
      ));
    }
  }
  return C;
}, Jn = function(e) {
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
  var n = oe.default;
  if (typeof e.format < "u") {
    if (!Kn.call(oe.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var a = oe.formatters[n], o = m.filter;
  (typeof e.filter == "function" || $(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in Mr ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = m.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
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
}, Zn = function(r, e) {
  var t = r, n = Jn(e), a, o;
  typeof n.filter == "function" ? (o = n.filter, t = o("", t)) : $(n.filter) && (o = n.filter, a = o);
  var i = [];
  if (typeof t != "object" || t === null)
    return "";
  var f = Mr[n.arrayFormat], l = f === "comma" && n.commaRoundTrip;
  a || (a = Object.keys(t)), n.sort && a.sort(n.sort);
  for (var s = Nr(), c = 0; c < a.length; ++c) {
    var p = a[c];
    n.skipNulls && t[p] === null || Br(i, Qn(
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
  var u = i.join(n.delimiter), d = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), u.length > 0 ? d + u : "";
}, J = Tr, Le = Object.prototype.hasOwnProperty, Yn = Array.isArray, g = {
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
}, Xn = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, Cr = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, eo = "utf8=%26%2310003%3B", ro = "utf8=%E2%9C%93", to = function(e, t) {
  var n = { __proto__: null }, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, i = a.split(t.delimiter, o), f = -1, l, s = t.charset;
  if (t.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === ro ? s = "utf-8" : i[l] === eo && (s = "iso-8859-1"), f = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== f) {
      var c = i[l], p = c.indexOf("]="), u = p === -1 ? c.indexOf("=") : p + 1, d, h;
      u === -1 ? (d = t.decoder(c, g.decoder, s, "key"), h = t.strictNullHandling ? null : "") : (d = t.decoder(c.slice(0, u), g.decoder, s, "key"), h = J.maybeMap(
        Cr(c.slice(u + 1), t),
        function(A) {
          return t.decoder(A, g.decoder, s, "value");
        }
      )), h && t.interpretNumericEntities && s === "iso-8859-1" && (h = Xn(h)), c.indexOf("[]=") > -1 && (h = Yn(h) ? [h] : h);
      var b = Le.call(n, d);
      b && t.duplicates === "combine" ? n[d] = J.combine(n[d], h) : (!b || t.duplicates === "last") && (n[d] = h);
    }
  return n;
}, no = function(r, e, t, n) {
  for (var a = n ? e : Cr(e, t), o = r.length - 1; o >= 0; --o) {
    var i, f = r[o];
    if (f === "[]" && t.parseArrays)
      i = t.allowEmptyArrays && a === "" ? [] : [].concat(a);
    else {
      i = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var l = f.charAt(0) === "[" && f.charAt(f.length - 1) === "]" ? f.slice(1, -1) : f, s = t.decodeDotInKeys ? l.replace(/%2E/g, ".") : l, c = parseInt(s, 10);
      !t.parseArrays && s === "" ? i = { 0: a } : !isNaN(c) && f !== s && String(c) === s && c >= 0 && t.parseArrays && c <= t.arrayLimit ? (i = [], i[c] = a) : s !== "__proto__" && (i[s] = a);
    }
    a = i;
  }
  return a;
}, oo = function(e, t, n, a) {
  if (e) {
    var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, f = /(\[[^[\]]*])/g, l = n.depth > 0 && i.exec(o), s = l ? o.slice(0, l.index) : o, c = [];
    if (s) {
      if (!n.plainObjects && Le.call(Object.prototype, s) && !n.allowPrototypes)
        return;
      c.push(s);
    }
    for (var p = 0; n.depth > 0 && (l = f.exec(o)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && Le.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      c.push(l[1]);
    }
    return l && c.push("[" + o.slice(l.index) + "]"), no(c, t, n, a);
  }
}, ao = function(e) {
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
}, io = function(r, e) {
  var t = ao(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? to(r, t) : r, a = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(n), i = 0; i < o.length; ++i) {
    var f = o[i], l = oo(f, n[f], t, typeof r == "string");
    a = J.merge(a, l, t);
  }
  return t.allowSparse === !0 ? a : J.compact(a);
}, lo = Zn, fo = io, uo = Ve, Ur = {
  formats: uo,
  parse: fo,
  stringify: lo
};
class De {
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
    const t = this.template.replace(/(\/?){([^}?]*)(\??)}/g, (i, f, l, s) => {
      var p;
      const c = `(?<${l}>${((p = this.wheres[l]) == null ? void 0 : p.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return s ? `(${f}${c})?` : `${f}${c}`;
    }).replace(/^\w+:\/\//, ""), [n, a] = e.replace(/^\w+:\/\//, "").split("?"), o = new RegExp(`^${t}/?$`).exec(decodeURI(n));
    if (o) {
      for (const i in o.groups)
        o.groups[i] = typeof o.groups[i] == "string" ? decodeURIComponent(o.groups[i]) : o.groups[i];
      return { params: o.groups, query: Ur.parse(a) };
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
class co extends String {
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
      this._route = new De(e, this._config.routes[e], this._config), this._params = this._parse(t);
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
    return this._route.compile(this._params) + Ur.stringify(
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
      ([o, i]) => t = new De(o, i, this._config).matchesUrl(e)
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
    const l = new De(n, i, this._config);
    t = this._parse(t, l);
    const s = { ...a, ...o };
    if (Object.values(t).every((p) => !p) && !Object.values(s).some((p) => p !== void 0))
      return !0;
    const c = (p, u) => Object.entries(p).every(([d, h]) => Array.isArray(h) && Array.isArray(u[d]) ? h.every((b) => u[d].includes(b)) : typeof h == "object" && typeof u[d] == "object" && h !== null && u[d] !== null ? c(h, u[d]) : u[d] == h);
    return c(t, s);
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
function so(r, e, t, n) {
  const a = new co(r, e, t, n);
  return r ? a.toString() : a;
}
const K = Gr({});
function vo(r) {
  var t, n, a;
  const e = ((a = (n = (t = r == null ? void 0 : r.props) == null ? void 0 : t.initialPage) == null ? void 0 : n.props) == null ? void 0 : a.ziggy) ?? null;
  return e && (Object.keys(e).forEach((o) => {
    K[o] = e[o];
  }), K.location = new URL(K.location)), {
    install: (o, { mixin: i = !1 } = {}) => {
      const f = (l, s, c, p = K) => (K.location && typeof window < "u" && (K.location = null), so(l, s, c, p));
      i === !0 && o.mixin({
        methods: {
          route: f
        }
      }), o.prototype.$route = f;
    }
  };
}
function Te(r) {
  return typeof r == "function" ? r() : qr(r);
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const po = () => Lr.prototype.$route, ho = (r) => {
  const e = po();
  return zr(() => {
    if (r = Te(r), r) {
      if (typeof r == "string" && /^http/.test(r))
        return r;
      if (Array.isArray(r)) {
        const [t, n] = Te(r);
        return t ? typeof n != "object" ? e(t) : e(t, Te(n)) : "#";
      } else
        return r ? e(r) : "#";
    } else
      return console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp"), "#";
  });
};
export {
  vo as useInertiaRoutes,
  ho as useResolvedRoute,
  po as useRoute
};
