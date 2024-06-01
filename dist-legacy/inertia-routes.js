import { inject as Gr, reactive as qr, computed as zr, toValue as Se } from "vue";
const mr = Symbol.for("inertia-routes"), Kr = () => Gr(mr);
var kr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hr(r) {
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
var jr = Error, Qr = EvalError, Vr = RangeError, Jr = ReferenceError, br = SyntaxError, ae = TypeError, Zr = URIError, Yr = function() {
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
}, Ve = typeof Symbol < "u" && Symbol, Xr = Yr, et = function() {
  return typeof Ve != "function" || typeof Symbol != "function" || typeof Ve("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Xr();
}, we = {
  __proto__: null,
  foo: {}
}, rt = Object, tt = function() {
  return { __proto__: we }.foo === we.foo && !(we instanceof rt);
}, nt = "Function.prototype.bind called on incompatible ", ot = Object.prototype.toString, at = Math.max, it = "[object Function]", Je = function(e, t) {
  for (var n = [], a = 0; a < e.length; a += 1)
    n[a] = e[a];
  for (var o = 0; o < t.length; o += 1)
    n[o + e.length] = t[o];
  return n;
}, lt = function(e, t) {
  for (var n = [], a = t, o = 0; a < e.length; a += 1, o += 1)
    n[o] = e[a];
  return n;
}, ft = function(r, e) {
  for (var t = "", n = 0; n < r.length; n += 1)
    t += r[n], n + 1 < r.length && (t += e);
  return t;
}, ut = function(e) {
  var t = this;
  if (typeof t != "function" || ot.apply(t) !== it)
    throw new TypeError(nt + t);
  for (var n = lt(arguments, 1), a, o = function() {
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
  }, i = at(0, t.length - n.length), f = [], l = 0; l < i; l++)
    f[l] = "$" + l;
  if (a = Function("binder", "return function (" + ft(f, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
    var s = function() {
    };
    s.prototype = t.prototype, a.prototype = new s(), s.prototype = null;
  }
  return a;
}, ct = ut, Ge = Function.prototype.bind || ct, st = Function.prototype.call, pt = Object.prototype.hasOwnProperty, yt = Ge, dt = yt.call(st, pt), y, vt = jr, ht = Qr, gt = Vr, mt = Jr, Q = br, j = ae, bt = Zr, Sr = Function, Ae = function(r) {
  try {
    return Sr('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, W = Object.getOwnPropertyDescriptor;
if (W)
  try {
    W({}, "");
  } catch {
    W = null;
  }
var Oe = function() {
  throw new j();
}, St = W ? function() {
  try {
    return arguments.callee, Oe;
  } catch {
    try {
      return W(arguments, "callee").get;
    } catch {
      return Oe;
    }
  }
}() : Oe, z = et(), wt = tt(), S = Object.getPrototypeOf || (wt ? function(r) {
  return r.__proto__;
} : null), H = {}, At = typeof Uint8Array > "u" || !S ? y : S(Uint8Array), L = {
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
  "%Error%": vt,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": ht,
  "%Float32Array%": typeof Float32Array > "u" ? y : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? y : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? y : FinalizationRegistry,
  "%Function%": Sr,
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
  "%RangeError%": gt,
  "%ReferenceError%": mt,
  "%Reflect%": typeof Reflect > "u" ? y : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? y : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !z || !S ? y : S((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? y : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": z && S ? S(""[Symbol.iterator]()) : y,
  "%Symbol%": z ? Symbol : y,
  "%SyntaxError%": Q,
  "%ThrowTypeError%": St,
  "%TypedArray%": At,
  "%TypeError%": j,
  "%Uint8Array%": typeof Uint8Array > "u" ? y : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? y : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? y : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? y : Uint32Array,
  "%URIError%": bt,
  "%WeakMap%": typeof WeakMap > "u" ? y : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? y : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? y : WeakSet
};
if (S)
  try {
    null.error;
  } catch (r) {
    var Ot = S(S(r));
    L["%Error.prototype%"] = Ot;
  }
var Et = function r(e) {
  var t;
  if (e === "%AsyncFunction%")
    t = Ae("async function () {}");
  else if (e === "%GeneratorFunction%")
    t = Ae("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    t = Ae("async function* () {}");
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
}, ie = Ge, de = dt, $t = ie.call(Function.call, Array.prototype.concat), Pt = ie.call(Function.apply, Array.prototype.splice), Ye = ie.call(Function.call, String.prototype.replace), ve = ie.call(Function.call, String.prototype.slice), _t = ie.call(Function.call, RegExp.prototype.exec), It = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, xt = /\\(\\)?/g, Ft = function(e) {
  var t = ve(e, 0, 1), n = ve(e, -1);
  if (t === "%" && n !== "%")
    throw new Q("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%")
    throw new Q("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return Ye(e, It, function(o, i, f, l) {
    a[a.length] = f ? Ye(l, xt, "$1") : i || o;
  }), a;
}, Rt = function(e, t) {
  var n = e, a;
  if (de(Ze, n) && (a = Ze[n], n = "%" + a[0] + "%"), de(L, n)) {
    var o = L[n];
    if (o === H && (o = Et(n)), typeof o > "u" && !t)
      throw new j("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: o
    };
  }
  throw new Q("intrinsic " + e + " does not exist!");
}, Z = function(e, t) {
  if (typeof e != "string" || e.length === 0)
    throw new j("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean")
    throw new j('"allowMissing" argument must be a boolean');
  if (_t(/^%?[^%]*%?$/, e) === null)
    throw new Q("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Ft(e), a = n.length > 0 ? n[0] : "", o = Rt("%" + a + "%", t), i = o.name, f = o.value, l = !1, s = o.alias;
  s && (a = s[0], Pt(n, $t([0, 1], s)));
  for (var c = 1, p = !0; c < n.length; c += 1) {
    var u = n[c], d = ve(u, 0, 1), h = ve(u, -1);
    if ((d === '"' || d === "'" || d === "`" || h === '"' || h === "'" || h === "`") && d !== h)
      throw new Q("property names with quotes must have matching quotes");
    if ((u === "constructor" || !p) && (l = !0), a += "." + u, i = "%" + a + "%", de(L, i))
      f = L[i];
    else if (f != null) {
      if (!(u in f)) {
        if (!t)
          throw new j("base intrinsic for " + e + " exists, but the property is not available.");
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
}, wr = { exports: {} }, Ee, Xe;
function qe() {
  if (Xe)
    return Ee;
  Xe = 1;
  var r = Z, e = r("%Object.defineProperty%", !0) || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ee = e, Ee;
}
var Dt = Z, pe = Dt("%Object.getOwnPropertyDescriptor%", !0);
if (pe)
  try {
    pe([], "length");
  } catch {
    pe = null;
  }
var Ar = pe, er = qe(), Tt = br, K = ae, rr = Ar, Nt = function(e, t, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new K("`obj` must be an object or a function`");
  if (typeof t != "string" && typeof t != "symbol")
    throw new K("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new K("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new K("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new K("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new K("`loose`, if provided, must be a boolean");
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
    throw new Tt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ne = qe(), Or = function() {
  return !!Ne;
};
Or.hasArrayLengthDefineBug = function() {
  if (!Ne)
    return null;
  try {
    return Ne([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Mt = Or, Bt = Z, tr = Nt, Ct = Mt(), nr = Ar, or = ae, Ut = Bt("%Math.floor%"), Wt = function(e, t) {
  if (typeof e != "function")
    throw new or("`fn` is not a function");
  if (typeof t != "number" || t < 0 || t > 4294967295 || Ut(t) !== t)
    throw new or("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, o = !0;
  if ("length" in e && nr) {
    var i = nr(e, "length");
    i && !i.configurable && (a = !1), i && !i.writable && (o = !1);
  }
  return (a || o || !n) && (Ct ? tr(
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
  var e = Ge, t = Z, n = Wt, a = ae, o = t("%Function.prototype.apply%"), i = t("%Function.prototype.call%"), f = t("%Reflect.apply%", !0) || e.call(i, o), l = qe(), s = t("%Math.max%");
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
})(wr);
var Lt = wr.exports, Er = Z, $r = Lt, Gt = $r(Er("String.prototype.indexOf")), qt = function(e, t) {
  var n = Er(e, !!t);
  return typeof n == "function" && Gt(e, ".prototype.") > -1 ? $r(n) : n;
};
const zt = {}, Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zt
}, Symbol.toStringTag, { value: "Module" })), kt = /* @__PURE__ */ Hr(Kt);
var ze = typeof Map == "function" && Map.prototype, $e = Object.getOwnPropertyDescriptor && ze ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, he = ze && $e && typeof $e.get == "function" ? $e.get : null, ar = ze && Map.prototype.forEach, Ke = typeof Set == "function" && Set.prototype, Pe = Object.getOwnPropertyDescriptor && Ke ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ge = Ke && Pe && typeof Pe.get == "function" ? Pe.get : null, ir = Ke && Set.prototype.forEach, Ht = typeof WeakMap == "function" && WeakMap.prototype, te = Ht ? WeakMap.prototype.has : null, jt = typeof WeakSet == "function" && WeakSet.prototype, ne = jt ? WeakSet.prototype.has : null, Qt = typeof WeakRef == "function" && WeakRef.prototype, lr = Qt ? WeakRef.prototype.deref : null, Vt = Boolean.prototype.valueOf, Jt = Object.prototype.toString, Zt = Function.prototype.toString, Yt = String.prototype.match, ke = String.prototype.slice, N = String.prototype.replace, Xt = String.prototype.toUpperCase, fr = String.prototype.toLowerCase, Pr = RegExp.prototype.test, ur = Array.prototype.concat, P = Array.prototype.join, en = Array.prototype.slice, cr = Math.floor, Me = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, _e = Object.getOwnPropertySymbols, Be = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, V = typeof Symbol == "function" && typeof Symbol.iterator == "object", w = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === V || !0) ? Symbol.toStringTag : null, _r = Object.prototype.propertyIsEnumerable, sr = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function pr(r, e) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || Pr.call(/e/, e))
    return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -cr(-r) : cr(r);
    if (n !== r) {
      var a = String(n), o = ke.call(e, a.length + 1);
      return N.call(a, t, "$&_") + "." + N.call(N.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return N.call(e, t, "$&_");
}
var Ce = kt, yr = Ce.custom, dr = xr(yr) ? yr : null, rn = function r(e, t, n, a) {
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
    return Rr(e, o);
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
  var p = Sn(o, n);
  if (typeof a > "u")
    a = [];
  else if (Fr(a, e) >= 0)
    return "[Circular]";
  function u(O, R, D) {
    if (R && (a = en.call(a), a.push(R)), D) {
      var ee = {
        depth: o.depth
      };
      return T(o, "quoteStyle") && (ee.quoteStyle = o.quoteStyle), r(O, ee, n + 1, a);
    }
    return r(O, o, n + 1, a);
  }
  if (typeof e == "function" && !vr(e)) {
    var d = sn(e), h = ue(e, u);
    return "[Function" + (d ? ": " + d : " (anonymous)") + "]" + (h.length > 0 ? " { " + P.call(h, ", ") + " }" : "");
  }
  if (xr(e)) {
    var b = V ? N.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Be.call(e);
    return typeof e == "object" && !V ? re(b) : b;
  }
  if (gn(e)) {
    for (var A = "<" + fr.call(String(e.nodeName)), _ = e.attributes || [], I = 0; I < _.length; I++)
      A += " " + _[I].name + "=" + Ir(tn(_[I].value), "double", o);
    return A += ">", e.childNodes && e.childNodes.length && (A += "..."), A += "</" + fr.call(String(e.nodeName)) + ">", A;
  }
  if (Ue(e)) {
    if (e.length === 0)
      return "[]";
    var v = ue(e, u);
    return p && !bn(v) ? "[" + We(v, p) + "]" : "[ " + P.call(v, ", ") + " ]";
  }
  if (on(e)) {
    var x = ue(e, u);
    return !("cause" in Error.prototype) && "cause" in e && !_r.call(e, "cause") ? "{ [" + String(e) + "] " + P.call(ur.call("[cause]: " + u(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + P.call(x, ", ") + " }";
  }
  if (typeof e == "object" && i) {
    if (dr && typeof e[dr] == "function" && Ce)
      return Ce(e, { depth: c - n });
    if (i !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (pn(e)) {
    var B = [];
    return ar && ar.call(e, function(O, R) {
      B.push(u(R, e, !0) + " => " + u(O, e));
    }), hr("Map", he.call(e), B, p);
  }
  if (vn(e)) {
    var X = [];
    return ir && ir.call(e, function(O) {
      X.push(u(O, e));
    }), hr("Set", ge.call(e), X, p);
  }
  if (yn(e))
    return Ie("WeakMap");
  if (hn(e))
    return Ie("WeakSet");
  if (dn(e))
    return Ie("WeakRef");
  if (ln(e))
    return re(u(Number(e)));
  if (un(e))
    return re(u(Me.call(e)));
  if (fn(e))
    return re(Vt.call(e));
  if (an(e))
    return re(u(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === kr)
    return "{ [object globalThis] }";
  if (!nn(e) && !vr(e)) {
    var G = ue(e, u), le = sr ? sr(e) === Object.prototype : e instanceof Object || e.constructor === Object, C = e instanceof Object ? "" : "null prototype", F = !le && w && Object(e) === e && w in e ? ke.call(M(e), 8, -1) : C ? "Object" : "", fe = le || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", q = fe + (F || C ? "[" + P.call(ur.call([], F || [], C || []), ": ") + "] " : "");
    return G.length === 0 ? q + "{}" : p ? q + "{" + We(G, p) + "}" : q + "{ " + P.call(G, ", ") + " }";
  }
  return String(e);
};
function Ir(r, e, t) {
  var n = (t.quoteStyle || e) === "double" ? '"' : "'";
  return n + r + n;
}
function tn(r) {
  return N.call(String(r), /"/g, "&quot;");
}
function Ue(r) {
  return M(r) === "[object Array]" && (!w || !(typeof r == "object" && w in r));
}
function nn(r) {
  return M(r) === "[object Date]" && (!w || !(typeof r == "object" && w in r));
}
function vr(r) {
  return M(r) === "[object RegExp]" && (!w || !(typeof r == "object" && w in r));
}
function on(r) {
  return M(r) === "[object Error]" && (!w || !(typeof r == "object" && w in r));
}
function an(r) {
  return M(r) === "[object String]" && (!w || !(typeof r == "object" && w in r));
}
function ln(r) {
  return M(r) === "[object Number]" && (!w || !(typeof r == "object" && w in r));
}
function fn(r) {
  return M(r) === "[object Boolean]" && (!w || !(typeof r == "object" && w in r));
}
function xr(r) {
  if (V)
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
function un(r) {
  if (!r || typeof r != "object" || !Me)
    return !1;
  try {
    return Me.call(r), !0;
  } catch {
  }
  return !1;
}
var cn = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function T(r, e) {
  return cn.call(r, e);
}
function M(r) {
  return Jt.call(r);
}
function sn(r) {
  if (r.name)
    return r.name;
  var e = Yt.call(Zt.call(r), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Fr(r, e) {
  if (r.indexOf)
    return r.indexOf(e);
  for (var t = 0, n = r.length; t < n; t++)
    if (r[t] === e)
      return t;
  return -1;
}
function pn(r) {
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
function yn(r) {
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
function dn(r) {
  if (!lr || !r || typeof r != "object")
    return !1;
  try {
    return lr.call(r), !0;
  } catch {
  }
  return !1;
}
function vn(r) {
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
function hn(r) {
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
function gn(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function Rr(r, e) {
  if (r.length > e.maxStringLength) {
    var t = r.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return Rr(ke.call(r, 0, e.maxStringLength), e) + n;
  }
  var a = N.call(N.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, mn);
  return Ir(a, "single", e);
}
function mn(r) {
  var e = r.charCodeAt(0), t = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + Xt.call(e.toString(16));
}
function re(r) {
  return "Object(" + r + ")";
}
function Ie(r) {
  return r + " { ? }";
}
function hr(r, e, t, n) {
  var a = n ? We(t, n) : P.call(t, ", ");
  return r + " (" + e + ") {" + a + "}";
}
function bn(r) {
  for (var e = 0; e < r.length; e++)
    if (Fr(r[e], `
`) >= 0)
      return !1;
  return !0;
}
function Sn(r, e) {
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
  var o = typeof _e == "function" ? _e(r) : [], i;
  if (V) {
    i = {};
    for (var f = 0; f < o.length; f++)
      i["$" + o[f]] = o[f];
  }
  for (var l in r)
    T(r, l) && (t && String(Number(l)) === l && l < r.length || V && i["$" + l] instanceof Symbol || (Pr.call(/[^\w$]/, l) ? n.push(e(l, r) + ": " + e(r[l], r)) : n.push(l + ": " + e(r[l], r))));
  if (typeof _e == "function")
    for (var s = 0; s < o.length; s++)
      _r.call(r, o[s]) && n.push("[" + e(o[s]) + "]: " + e(r[o[s]], r));
  return n;
}
var Dr = Z, Y = qt, wn = rn, An = ae, ce = Dr("%WeakMap%", !0), se = Dr("%Map%", !0), On = Y("WeakMap.prototype.get", !0), En = Y("WeakMap.prototype.set", !0), $n = Y("WeakMap.prototype.has", !0), Pn = Y("Map.prototype.get", !0), _n = Y("Map.prototype.set", !0), In = Y("Map.prototype.has", !0), He = function(r, e) {
  for (var t = r, n; (n = t.next) !== null; t = n)
    if (n.key === e)
      return t.next = n.next, n.next = /** @type {NonNullable<typeof list.next>} */
      r.next, r.next = n, n;
}, xn = function(r, e) {
  var t = He(r, e);
  return t && t.value;
}, Fn = function(r, e, t) {
  var n = He(r, e);
  n ? n.value = t : r.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: e,
    next: r.next,
    value: t
  };
}, Rn = function(r, e) {
  return !!He(r, e);
}, Dn = function() {
  var e, t, n, a = {
    assert: function(o) {
      if (!a.has(o))
        throw new An("Side channel does not contain " + wn(o));
    },
    get: function(o) {
      if (ce && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return On(e, o);
      } else if (se) {
        if (t)
          return Pn(t, o);
      } else if (n)
        return xn(n, o);
    },
    has: function(o) {
      if (ce && o && (typeof o == "object" || typeof o == "function")) {
        if (e)
          return $n(e, o);
      } else if (se) {
        if (t)
          return In(t, o);
      } else if (n)
        return Rn(n, o);
      return !1;
    },
    set: function(o, i) {
      ce && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new ce()), En(e, o, i)) : se ? (t || (t = new se()), _n(t, o, i)) : (n || (n = { key: {}, next: null }), Fn(n, o, i));
    }
  };
  return a;
}, Tn = String.prototype.replace, Nn = /%20/g, xe = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, je = {
  default: xe.RFC3986,
  formatters: {
    RFC1738: function(r) {
      return Tn.call(r, Nn, "+");
    },
    RFC3986: function(r) {
      return String(r);
    }
  },
  RFC1738: xe.RFC1738,
  RFC3986: xe.RFC3986
}, Mn = je, Fe = Object.prototype.hasOwnProperty, U = Array.isArray, E = function() {
  for (var r = [], e = 0; e < 256; ++e)
    r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r;
}(), Bn = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (U(n)) {
      for (var a = [], o = 0; o < n.length; ++o)
        typeof n[o] < "u" && a.push(n[o]);
      t.obj[t.prop] = a;
    }
  }
}, Tr = function(e, t) {
  for (var n = t && t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (n[a] = e[a]);
  return n;
}, Cn = function r(e, t, n) {
  if (!t)
    return e;
  if (typeof t != "object") {
    if (U(e))
      e.push(t);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Fe.call(Object.prototype, t)) && (e[t] = !0);
    else
      return [e, t];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(t);
  var a = e;
  return U(e) && !U(t) && (a = Tr(e, n)), U(e) && U(t) ? (t.forEach(function(o, i) {
    if (Fe.call(e, i)) {
      var f = e[i];
      f && typeof f == "object" && o && typeof o == "object" ? e[i] = r(f, o, n) : e.push(o);
    } else
      e[i] = o;
  }), e) : Object.keys(t).reduce(function(o, i) {
    var f = t[i];
    return Fe.call(o, i) ? o[i] = r(o[i], f, n) : o[i] = f, o;
  }, a);
}, Un = function(e, t) {
  return Object.keys(t).reduce(function(n, a) {
    return n[a] = t[a], n;
  }, e);
}, Wn = function(r, e, t) {
  var n = r.replace(/\+/g, " ");
  if (t === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Re = 1024, Ln = function(e, t, n, a, o) {
  if (e.length === 0)
    return e;
  var i = e;
  if (typeof e == "symbol" ? i = Symbol.prototype.toString.call(e) : typeof e != "string" && (i = String(e)), n === "iso-8859-1")
    return escape(i).replace(/%u[0-9a-f]{4}/gi, function(d) {
      return "%26%23" + parseInt(d.slice(2), 16) + "%3B";
    });
  for (var f = "", l = 0; l < i.length; l += Re) {
    for (var s = i.length >= Re ? i.slice(l, l + Re) : i, c = [], p = 0; p < s.length; ++p) {
      var u = s.charCodeAt(p);
      if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === Mn.RFC1738 && (u === 40 || u === 41)) {
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
}, Gn = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], a = 0; a < t.length; ++a)
    for (var o = t[a], i = o.obj[o.prop], f = Object.keys(i), l = 0; l < f.length; ++l) {
      var s = f[l], c = i[s];
      typeof c == "object" && c !== null && n.indexOf(c) === -1 && (t.push({ obj: i, prop: s }), n.push(c));
    }
  return Bn(t), e;
}, qn = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, zn = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Kn = function(e, t) {
  return [].concat(e, t);
}, kn = function(e, t) {
  if (U(e)) {
    for (var n = [], a = 0; a < e.length; a += 1)
      n.push(t(e[a]));
    return n;
  }
  return t(e);
}, Nr = {
  arrayToObject: Tr,
  assign: Un,
  combine: Kn,
  compact: Gn,
  decode: Wn,
  encode: Ln,
  isBuffer: zn,
  isRegExp: qn,
  maybeMap: kn,
  merge: Cn
}, Mr = Dn, ye = Nr, oe = je, Hn = Object.prototype.hasOwnProperty, Br = {
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
}, $ = Array.isArray, jn = Array.prototype.push, Cr = function(r, e) {
  jn.apply(r, $(e) ? e : [e]);
}, Qn = Date.prototype.toISOString, gr = oe.default, m = {
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
    return Qn.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Vn = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, De = {}, Jn = function r(e, t, n, a, o, i, f, l, s, c, p, u, d, h, b, A, _, I) {
  for (var v = e, x = I, B = 0, X = !1; (x = x.get(De)) !== void 0 && !X; ) {
    var G = x.get(e);
    if (B += 1, typeof G < "u") {
      if (G === B)
        throw new RangeError("Cyclic object value");
      X = !0;
    }
    typeof x.get(De) > "u" && (B = 0);
  }
  if (typeof c == "function" ? v = c(t, v) : v instanceof Date ? v = d(v) : n === "comma" && $(v) && (v = ye.maybeMap(v, function(be) {
    return be instanceof Date ? d(be) : be;
  })), v === null) {
    if (i)
      return s && !A ? s(t, m.encoder, _, "key", h) : t;
    v = "";
  }
  if (Vn(v) || ye.isBuffer(v)) {
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
      var me = u && l ? D.replace(/\./g, "%2E") : D, Lr = $(v) ? typeof n == "function" ? n(O, me) : O : O + (u ? "." + me : "[" + me + "]");
      I.set(e, B);
      var Qe = Mr();
      Qe.set(De, I), Cr(C, r(
        ee,
        Lr,
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
        Qe
      ));
    }
  }
  return C;
}, Zn = function(e) {
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
    if (!Hn.call(oe.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var a = oe.formatters[n], o = m.filter;
  (typeof e.filter == "function" || $(e.filter)) && (o = e.filter);
  var i;
  if (e.arrayFormat in Br ? i = e.arrayFormat : "indices" in e ? i = e.indices ? "indices" : "repeat" : i = m.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
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
}, Yn = function(r, e) {
  var t = r, n = Zn(e), a, o;
  typeof n.filter == "function" ? (o = n.filter, t = o("", t)) : $(n.filter) && (o = n.filter, a = o);
  var i = [];
  if (typeof t != "object" || t === null)
    return "";
  var f = Br[n.arrayFormat], l = f === "comma" && n.commaRoundTrip;
  a || (a = Object.keys(t)), n.sort && a.sort(n.sort);
  for (var s = Mr(), c = 0; c < a.length; ++c) {
    var p = a[c];
    n.skipNulls && t[p] === null || Cr(i, Jn(
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
}, J = Nr, Le = Object.prototype.hasOwnProperty, Xn = Array.isArray, g = {
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
}, eo = function(r) {
  return r.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, Ur = function(r, e) {
  return r && typeof r == "string" && e.comma && r.indexOf(",") > -1 ? r.split(",") : r;
}, ro = "utf8=%26%2310003%3B", to = "utf8=%E2%9C%93", no = function(e, t) {
  var n = { __proto__: null }, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, i = a.split(t.delimiter, o), f = -1, l, s = t.charset;
  if (t.charsetSentinel)
    for (l = 0; l < i.length; ++l)
      i[l].indexOf("utf8=") === 0 && (i[l] === to ? s = "utf-8" : i[l] === ro && (s = "iso-8859-1"), f = l, l = i.length);
  for (l = 0; l < i.length; ++l)
    if (l !== f) {
      var c = i[l], p = c.indexOf("]="), u = p === -1 ? c.indexOf("=") : p + 1, d, h;
      u === -1 ? (d = t.decoder(c, g.decoder, s, "key"), h = t.strictNullHandling ? null : "") : (d = t.decoder(c.slice(0, u), g.decoder, s, "key"), h = J.maybeMap(
        Ur(c.slice(u + 1), t),
        function(A) {
          return t.decoder(A, g.decoder, s, "value");
        }
      )), h && t.interpretNumericEntities && s === "iso-8859-1" && (h = eo(h)), c.indexOf("[]=") > -1 && (h = Xn(h) ? [h] : h);
      var b = Le.call(n, d);
      b && t.duplicates === "combine" ? n[d] = J.combine(n[d], h) : (!b || t.duplicates === "last") && (n[d] = h);
    }
  return n;
}, oo = function(r, e, t, n) {
  for (var a = n ? e : Ur(e, t), o = r.length - 1; o >= 0; --o) {
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
}, ao = function(e, t, n, a) {
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
    return l && c.push("[" + o.slice(l.index) + "]"), oo(c, t, n, a);
  }
}, io = function(e) {
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
}, lo = function(r, e) {
  var t = io(e);
  if (r === "" || r === null || typeof r > "u")
    return t.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof r == "string" ? no(r, t) : r, a = t.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, o = Object.keys(n), i = 0; i < o.length; ++i) {
    var f = o[i], l = ao(f, n[f], t, typeof r == "string");
    a = J.merge(a, l, t);
  }
  return t.allowSparse === !0 ? a : J.compact(a);
}, fo = Yn, uo = lo, co = je, Wr = {
  formats: co,
  parse: uo,
  stringify: fo
};
class Te {
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
      return { params: o.groups, query: Wr.parse(a) };
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
class so extends String {
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
      this._route = new Te(e, this._config.routes[e], this._config), this._params = this._parse(t);
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
    return this._route.compile(this._params) + Wr.stringify(
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
      ([o, i]) => t = new Te(o, i, this._config).matchesUrl(e)
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
    const l = new Te(n, i, this._config);
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
function po(r, e, t, n) {
  const a = new so(r, e, t, n);
  return r ? a.toString() : a;
}
const k = qr({});
function vo(r) {
  return r.initialPage.props.ziggy && (Object.keys(r.initialPage.props.ziggy).forEach((e) => {
    k[e] = r.initialPage.props.ziggy[e];
  }), k.location = new URL(k.location)), {
    install: (e, { mixin: t = !1 } = {}) => {
      const n = (a, o, i, f = k) => (k.location && typeof window < "u" && (k.location = null), po(a, o, i, f));
      e.provide(mr, n), t === !0 && e.mixin({
        methods: {
          route: n
        }
      }), e.prototype.$route = n;
    }
  };
}
const ho = (r) => {
  const e = Kr();
  return zr(() => {
    if (r = Se(r), r) {
      if (typeof r == "string" && /^http/.test(r))
        return r;
      if (Array.isArray(r)) {
        const [t, n] = Se(r);
        return t ? typeof n != "object" ? e(t) : e(t, Se(n)) : "#";
      } else
        return r ? e(r) : "#";
    } else
      return console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp"), "#";
  });
};
export {
  vo as useInertiaRoutes,
  ho as useResolvedRoute,
  Kr as useRoute
};