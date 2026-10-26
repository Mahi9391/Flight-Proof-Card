var KE = Object.defineProperty;
var WE = (t, a, o) => a in t ? KE(t, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[a] = o;
var Yl = (t, a, o) => WE(t, typeof a != "symbol" ? a + "" : a, o);
function QE(t, a) {
  for (var o = 0; o < a.length; o++) {
    const i = a[o];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in t)) {
          const c = Object.getOwnPropertyDescriptor(i, s);
          c && Object.defineProperty(t, s, c.get ? c : {
            enumerable: !0,
            get: () => i[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function Wm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Yp = { exports: {} }, hs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cb;
function ZE() {
  if (cb) return hs;
  cb = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function o(i, s, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: t,
      type: i,
      key: d,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return hs.Fragment = a, hs.jsx = o, hs.jsxs = o, hs;
}
var fb;
function JE() {
  return fb || (fb = 1, Yp.exports = ZE()), Yp.exports;
}
var S = JE(), Xp = { exports: {} }, Ve = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var db;
function eT() {
  if (db) return Ve;
  db = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.activity"), C = Symbol.for("react.view_transition"), T = Symbol.iterator;
  function R(B) {
    return B === null || typeof B != "object" ? null : (B = T && B[T] || B["@@iterator"], typeof B == "function" ? B : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, A = Object.assign, z = {};
  function N(B, Z, ne) {
    this.props = B, this.context = Z, this.refs = z, this.updater = ne || x;
  }
  N.prototype.isReactComponent = {}, N.prototype.setState = function(B, Z) {
    if (typeof B != "object" && typeof B != "function" && B != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, B, Z, "setState");
  }, N.prototype.forceUpdate = function(B) {
    this.updater.enqueueForceUpdate(this, B, "forceUpdate");
  };
  function O() {
  }
  O.prototype = N.prototype;
  function M(B, Z, ne) {
    this.props = B, this.context = Z, this.refs = z, this.updater = ne || x;
  }
  var D = M.prototype = new O();
  D.constructor = M, A(D, N.prototype), D.isPureReactComponent = !0;
  var _ = Array.isArray;
  function L() {
  }
  var k = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function E(B, Z, ne) {
    var fe = ne.ref;
    return {
      $$typeof: t,
      type: B,
      key: Z,
      ref: fe !== void 0 ? fe : null,
      props: ne
    };
  }
  function U(B, Z) {
    return E(B.type, Z, B.props);
  }
  function P(B) {
    return typeof B == "object" && B !== null && B.$$typeof === t;
  }
  function J(B) {
    var Z = { "=": "=0", ":": "=2" };
    return "$" + B.replace(/[=:]/g, function(ne) {
      return Z[ne];
    });
  }
  var te = /\/+/g;
  function X(B, Z) {
    return typeof B == "object" && B !== null && B.key != null ? J("" + B.key) : Z.toString(36);
  }
  function j(B) {
    switch (B.status) {
      case "fulfilled":
        return B.value;
      case "rejected":
        throw B.reason;
      default:
        switch (typeof B.status == "string" ? B.then(L, L) : (B.status = "pending", B.then(
          function(Z) {
            B.status === "pending" && (B.status = "fulfilled", B.value = Z);
          },
          function(Z) {
            B.status === "pending" && (B.status = "rejected", B.reason = Z);
          }
        )), B.status) {
          case "fulfilled":
            return B.value;
          case "rejected":
            throw B.reason;
        }
    }
    throw B;
  }
  function Y(B, Z, ne, fe, me) {
    var ve = typeof B;
    (ve === "undefined" || ve === "boolean") && (B = null);
    var he = !1;
    if (B === null) he = !0;
    else
      switch (ve) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (B.$$typeof) {
            case t:
            case a:
              he = !0;
              break;
            case y:
              return he = B._init, Y(
                he(B._payload),
                Z,
                ne,
                fe,
                me
              );
          }
      }
    if (he)
      return me = me(B), he = fe === "" ? "." + X(B, 0) : fe, _(me) ? (ne = "", he != null && (ne = he.replace(te, "$&/") + "/"), Y(me, Z, ne, "", function(_e) {
        return _e;
      })) : me != null && (P(me) && (me = U(
        me,
        ne + (me.key == null || B && B.key === me.key ? "" : ("" + me.key).replace(
          te,
          "$&/"
        ) + "/") + he
      )), Z.push(me)), 1;
    he = 0;
    var se = fe === "" ? "." : fe + ":";
    if (_(B))
      for (var ue = 0; ue < B.length; ue++)
        fe = B[ue], ve = se + X(fe, ue), he += Y(
          fe,
          Z,
          ne,
          ve,
          me
        );
    else if (ue = R(B), typeof ue == "function")
      for (B = ue.call(B), ue = 0; !(fe = B.next()).done; )
        fe = fe.value, ve = se + X(fe, ue++), he += Y(
          fe,
          Z,
          ne,
          ve,
          me
        );
    else if (ve === "object") {
      if (typeof B.then == "function")
        return Y(
          j(B),
          Z,
          ne,
          fe,
          me
        );
      throw Z = String(B), Error(
        "Objects are not valid as a React child (found: " + (Z === "[object Object]" ? "object with keys {" + Object.keys(B).join(", ") + "}" : Z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return he;
  }
  function W(B, Z, ne) {
    if (B == null) return B;
    var fe = [], me = 0;
    return Y(B, fe, "", "", function(ve) {
      return Z.call(ne, ve, me++);
    }), fe;
  }
  function G(B) {
    if (B._status === -1) {
      var Z = B._result, ne = Z();
      ne.then(
        function(fe) {
          (B._status === 0 || B._status === -1) && (B._status = 1, B._result = fe, ne.status === void 0 && (ne.status = "fulfilled", ne.value = fe));
        },
        function(fe) {
          (B._status === 0 || B._status === -1) && (B._status = 2, B._result = fe, ne.status === void 0 && (ne.status = "rejected", ne.reason = fe));
        }
      ), B._status === -1 && (B._status = 0, B._result = ne);
    }
    if (B._status === 1) return B._result.default;
    throw B._result;
  }
  var de = typeof reportError == "function" ? reportError : function(B) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof B == "object" && B !== null && typeof B.message == "string" ? String(B.message) : String(B),
        error: B
      });
      if (!window.dispatchEvent(Z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", B);
      return;
    }
    console.error(B);
  };
  function xe(B) {
    var Z = k.T, ne = {};
    ne.types = Z !== null ? Z.types : null, k.T = ne;
    try {
      var fe = B(), me = k.S;
      me !== null && me(ne, fe), typeof fe == "object" && fe !== null && typeof fe.then == "function" && fe.then(L, de);
    } catch (ve) {
      de(ve);
    } finally {
      Z !== null && ne.types !== null && (Z.types = ne.types), k.T = Z;
    }
  }
  function Ne(B) {
    var Z = k.T;
    if (Z !== null) {
      var ne = Z.types;
      ne === null ? Z.types = [B] : ne.indexOf(B) === -1 && ne.push(B);
    } else xe(Ne.bind(null, B));
  }
  var Me = {
    map: W,
    forEach: function(B, Z, ne) {
      W(
        B,
        function() {
          Z.apply(this, arguments);
        },
        ne
      );
    },
    count: function(B) {
      var Z = 0;
      return W(B, function() {
        Z++;
      }), Z;
    },
    toArray: function(B) {
      return W(B, function(Z) {
        return Z;
      }) || [];
    },
    only: function(B) {
      if (!P(B))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return B;
    }
  };
  return Ve.Activity = h, Ve.Children = Me, Ve.Component = N, Ve.Fragment = o, Ve.Profiler = s, Ve.PureComponent = M, Ve.StrictMode = i, Ve.Suspense = m, Ve.ViewTransition = C, Ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, Ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(B) {
      return k.H.useMemoCache(B);
    }
  }, Ve.addTransitionType = Ne, Ve.cache = function(B) {
    return function() {
      return B.apply(null, arguments);
    };
  }, Ve.cacheSignal = function() {
    return null;
  }, Ve.cloneElement = function(B, Z, ne) {
    if (B == null)
      throw Error(
        "The argument must be a React element, but you passed " + B + "."
      );
    var fe = A({}, B.props), me = B.key;
    if (Z != null)
      for (ve in Z.key !== void 0 && (me = "" + Z.key), Z)
        !F.call(Z, ve) || ve === "key" || ve === "__self" || ve === "__source" || ve === "ref" && Z.ref === void 0 || (fe[ve] = Z[ve]);
    var ve = arguments.length - 2;
    if (ve === 1) fe.children = ne;
    else if (1 < ve) {
      for (var he = Array(ve), se = 0; se < ve; se++)
        he[se] = arguments[se + 2];
      fe.children = he;
    }
    return E(B.type, me, fe);
  }, Ve.createContext = function(B) {
    return B = {
      $$typeof: d,
      _currentValue: B,
      _currentValue2: B,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, B.Provider = B, B.Consumer = {
      $$typeof: c,
      _context: B
    }, B;
  }, Ve.createElement = function(B, Z, ne) {
    var fe, me = {}, ve = null;
    if (Z != null)
      for (fe in Z.key !== void 0 && (ve = "" + Z.key), Z)
        F.call(Z, fe) && fe !== "key" && fe !== "__self" && fe !== "__source" && (me[fe] = Z[fe]);
    var he = arguments.length - 2;
    if (he === 1) me.children = ne;
    else if (1 < he) {
      for (var se = Array(he), ue = 0; ue < he; ue++)
        se[ue] = arguments[ue + 2];
      me.children = se;
    }
    if (B && B.defaultProps)
      for (fe in he = B.defaultProps, he)
        me[fe] === void 0 && (me[fe] = he[fe]);
    return E(B, ve, me);
  }, Ve.createRef = function() {
    return { current: null };
  }, Ve.forwardRef = function(B) {
    return { $$typeof: p, render: B };
  }, Ve.isValidElement = P, Ve.lazy = function(B) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: B },
      _init: G
    };
  }, Ve.memo = function(B, Z) {
    return {
      $$typeof: g,
      type: B,
      compare: Z === void 0 ? null : Z
    };
  }, Ve.startTransition = xe, Ve.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, Ve.use = function(B) {
    return k.H.use(B);
  }, Ve.useActionState = function(B, Z, ne) {
    return k.H.useActionState(B, Z, ne);
  }, Ve.useCallback = function(B, Z) {
    return k.H.useCallback(B, Z);
  }, Ve.useContext = function(B) {
    return k.H.useContext(B);
  }, Ve.useDebugValue = function() {
  }, Ve.useDeferredValue = function(B, Z) {
    return k.H.useDeferredValue(B, Z);
  }, Ve.useEffect = function(B, Z) {
    return k.H.useEffect(B, Z);
  }, Ve.useEffectEvent = function(B) {
    return k.H.useEffectEvent(B);
  }, Ve.useId = function() {
    return k.H.useId();
  }, Ve.useImperativeHandle = function(B, Z, ne) {
    return k.H.useImperativeHandle(B, Z, ne);
  }, Ve.useInsertionEffect = function(B, Z) {
    return k.H.useInsertionEffect(B, Z);
  }, Ve.useLayoutEffect = function(B, Z) {
    return k.H.useLayoutEffect(B, Z);
  }, Ve.useMemo = function(B, Z) {
    return k.H.useMemo(B, Z);
  }, Ve.useOptimistic = function(B, Z) {
    return k.H.useOptimistic(B, Z);
  }, Ve.useReducer = function(B, Z, ne) {
    return k.H.useReducer(B, Z, ne);
  }, Ve.useRef = function(B) {
    return k.H.useRef(B);
  }, Ve.useState = function(B) {
    return k.H.useState(B);
  }, Ve.useSyncExternalStore = function(B, Z, ne) {
    return k.H.useSyncExternalStore(
      B,
      Z,
      ne
    );
  }, Ve.useTransition = function() {
    return k.H.useTransition();
  }, Ve.version = "19.3.1", Ve;
}
var pb;
function Qm() {
  return pb || (pb = 1, Xp.exports = eT()), Xp.exports;
}
var b = Qm();
const Le = /* @__PURE__ */ Wm(b), Pc = /* @__PURE__ */ QE({
  __proto__: null,
  default: Le
}, [b]), js = {
  black: "#000",
  white: "#fff"
}, Xl = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Kl = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Wl = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ql = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Zl = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, gs = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, tT = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Or(t, ...a) {
  const o = new URL(`https://mui.com/production-error/?code=${t}`);
  return a.forEach((i) => o.searchParams.append("args[]", i)), `Minified MUI error #${t}; visit ${o} for the full message.`;
}
const ka = "$$material";
function Fc() {
  return Fc = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }, Fc.apply(null, arguments);
}
function nT(t) {
  if (t.sheet)
    return t.sheet;
  for (var a = 0; a < document.styleSheets.length; a++)
    if (document.styleSheets[a].ownerNode === t)
      return document.styleSheets[a];
}
function aT(t) {
  var a = document.createElement("style");
  return a.setAttribute("data-emotion", t.key), t.nonce !== void 0 && a.setAttribute("nonce", t.nonce), a.appendChild(document.createTextNode("")), a.setAttribute("data-s", ""), a;
}
var cx = /* @__PURE__ */ (function() {
  function t(o) {
    var i = this;
    this._insertTag = function(s) {
      var c;
      i.tags.length === 0 ? i.insertionPoint ? c = i.insertionPoint.nextSibling : i.prepend ? c = i.container.firstChild : c = i.before : c = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(s, c), i.tags.push(s);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var a = t.prototype;
  return a.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, a.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(aT(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = nT(s);
      try {
        c.insertRule(i, c.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(i));
    this.ctr++;
  }, a.flush = function() {
    this.tags.forEach(function(i) {
      var s;
      return (s = i.parentNode) == null ? void 0 : s.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, t;
})(), Rn = "-ms-", Vc = "-moz-", vt = "-webkit-", fx = "comm", Zm = "rule", Jm = "decl", rT = "@import", dx = "@keyframes", oT = "@layer", lT = Math.abs, ef = String.fromCharCode, iT = Object.assign;
function sT(t, a) {
  return Sn(t, 0) ^ 45 ? (((a << 2 ^ Sn(t, 0)) << 2 ^ Sn(t, 1)) << 2 ^ Sn(t, 2)) << 2 ^ Sn(t, 3) : 0;
}
function px(t) {
  return t.trim();
}
function uT(t, a) {
  return (t = a.exec(t)) ? t[0] : t;
}
function bt(t, a, o) {
  return t.replace(a, o);
}
function Tm(t, a) {
  return t.indexOf(a);
}
function Sn(t, a) {
  return t.charCodeAt(a) | 0;
}
function $s(t, a, o) {
  return t.slice(a, o);
}
function nr(t) {
  return t.length;
}
function eh(t) {
  return t.length;
}
function Tc(t, a) {
  return a.push(t), t;
}
function cT(t, a) {
  return t.map(a).join("");
}
var tf = 1, oi = 1, mx = 0, Vn = 0, ln = 0, hi = "";
function nf(t, a, o, i, s, c, d) {
  return { value: t, root: a, parent: o, type: i, props: s, children: c, line: tf, column: oi, length: d, return: "" };
}
function ys(t, a) {
  return iT(nf("", null, null, "", null, null, 0), t, { length: -t.length }, a);
}
function fT() {
  return ln;
}
function dT() {
  return ln = Vn > 0 ? Sn(hi, --Vn) : 0, oi--, ln === 10 && (oi = 1, tf--), ln;
}
function ra() {
  return ln = Vn < mx ? Sn(hi, Vn++) : 0, oi++, ln === 10 && (oi = 1, tf++), ln;
}
function or() {
  return Sn(hi, Vn);
}
function $c() {
  return Vn;
}
function Fs(t, a) {
  return $s(hi, t, a);
}
function Ls(t) {
  switch (t) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function hx(t) {
  return tf = oi = 1, mx = nr(hi = t), Vn = 0, [];
}
function gx(t) {
  return hi = "", t;
}
function Lc(t) {
  return px(Fs(Vn - 1, Rm(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function pT(t) {
  for (; (ln = or()) && ln < 33; )
    ra();
  return Ls(t) > 2 || Ls(ln) > 3 ? "" : " ";
}
function mT(t, a) {
  for (; --a && ra() && !(ln < 48 || ln > 102 || ln > 57 && ln < 65 || ln > 70 && ln < 97); )
    ;
  return Fs(t, $c() + (a < 6 && or() == 32 && ra() == 32));
}
function Rm(t) {
  for (; ra(); )
    switch (ln) {
      // ] ) " '
      case t:
        return Vn;
      // " '
      case 34:
      case 39:
        t !== 34 && t !== 39 && Rm(ln);
        break;
      // (
      case 40:
        t === 41 && Rm(t);
        break;
      // \
      case 92:
        ra();
        break;
    }
  return Vn;
}
function hT(t, a) {
  for (; ra() && t + ln !== 57; )
    if (t + ln === 84 && or() === 47)
      break;
  return "/*" + Fs(a, Vn - 1) + "*" + ef(t === 47 ? t : ra());
}
function gT(t) {
  for (; !Ls(or()); )
    ra();
  return Fs(t, Vn);
}
function yT(t) {
  return gx(_c("", null, null, null, [""], t = hx(t), 0, [0], t));
}
function _c(t, a, o, i, s, c, d, p, m) {
  for (var g = 0, y = 0, h = d, C = 0, T = 0, R = 0, x = 1, A = 1, z = 1, N = 0, O = "", M = s, D = c, _ = i, L = O; A; )
    switch (R = N, N = ra()) {
      // (
      case 40:
        if (R != 108 && Sn(L, h - 1) == 58) {
          Tm(L += bt(Lc(N), "&", "&\f"), "&\f") != -1 && (z = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        L += Lc(N);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        L += pT(R);
        break;
      // \
      case 92:
        L += mT($c() - 1, 7);
        continue;
      // /
      case 47:
        switch (or()) {
          case 42:
          case 47:
            Tc(vT(hT(ra(), $c()), a, o), m);
            break;
          default:
            L += "/";
        }
        break;
      // {
      case 123 * x:
        p[g++] = nr(L) * z;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (N) {
          // \0 }
          case 0:
          case 125:
            A = 0;
          // ;
          case 59 + y:
            z == -1 && (L = bt(L, /\f/g, "")), T > 0 && nr(L) - h && Tc(T > 32 ? hb(L + ";", i, o, h - 1) : hb(bt(L, " ", "") + ";", i, o, h - 2), m);
            break;
          // @ ;
          case 59:
            L += ";";
          // { rule/at-rule
          default:
            if (Tc(_ = mb(L, a, o, g, y, s, p, O, M = [], D = [], h), c), N === 123)
              if (y === 0)
                _c(L, a, _, _, M, c, h, p, D);
              else
                switch (C === 99 && Sn(L, 3) === 110 ? 100 : C) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _c(t, _, _, i && Tc(mb(t, _, _, 0, 0, s, p, O, s, M = [], h), D), s, D, h, p, i ? M : D);
                    break;
                  default:
                    _c(L, _, _, _, [""], D, 0, p, D);
                }
        }
        g = y = T = 0, x = z = 1, O = L = "", h = d;
        break;
      // :
      case 58:
        h = 1 + nr(L), T = R;
      default:
        if (x < 1) {
          if (N == 123)
            --x;
          else if (N == 125 && x++ == 0 && dT() == 125)
            continue;
        }
        switch (L += ef(N), N * x) {
          // &
          case 38:
            z = y > 0 ? 1 : (L += "\f", -1);
            break;
          // ,
          case 44:
            p[g++] = (nr(L) - 1) * z, z = 1;
            break;
          // @
          case 64:
            or() === 45 && (L += Lc(ra())), C = or(), y = h = nr(O = L += gT($c())), N++;
            break;
          // -
          case 45:
            R === 45 && nr(L) == 2 && (x = 0);
        }
    }
  return c;
}
function mb(t, a, o, i, s, c, d, p, m, g, y) {
  for (var h = s - 1, C = s === 0 ? c : [""], T = eh(C), R = 0, x = 0, A = 0; R < i; ++R)
    for (var z = 0, N = $s(t, h + 1, h = lT(x = d[R])), O = t; z < T; ++z)
      (O = px(x > 0 ? C[z] + " " + N : bt(N, /&\f/g, C[z]))) && (m[A++] = O);
  return nf(t, a, o, s === 0 ? Zm : p, m, g, y);
}
function vT(t, a, o) {
  return nf(t, a, o, fx, ef(fT()), $s(t, 2, -2), 0);
}
function hb(t, a, o, i) {
  return nf(t, a, o, Jm, $s(t, 0, i), $s(t, i + 1, -1), i);
}
function ni(t, a) {
  for (var o = "", i = eh(t), s = 0; s < i; s++)
    o += a(t[s], s, t, a) || "";
  return o;
}
function bT(t, a, o, i) {
  switch (t.type) {
    case oT:
      if (t.children.length) break;
    case rT:
    case Jm:
      return t.return = t.return || t.value;
    case fx:
      return "";
    case dx:
      return t.return = t.value + "{" + ni(t.children, i) + "}";
    case Zm:
      t.value = t.props.join(",");
  }
  return nr(o = ni(t.children, i)) ? t.return = t.value + "{" + o + "}" : "";
}
function xT(t) {
  var a = eh(t);
  return function(o, i, s, c) {
    for (var d = "", p = 0; p < a; p++)
      d += t[p](o, i, s, c) || "";
    return d;
  };
}
function ST(t) {
  return function(a) {
    a.root || (a = a.return) && t(a);
  };
}
function yx(t) {
  var a = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return a[o] === void 0 && (a[o] = t(o)), a[o];
  };
}
var CT = function(a, o, i) {
  for (var s = 0, c = 0; s = c, c = or(), s === 38 && c === 12 && (o[i] = 1), !Ls(c); )
    ra();
  return Fs(a, Vn);
}, ET = function(a, o) {
  var i = -1, s = 44;
  do
    switch (Ls(s)) {
      case 0:
        s === 38 && or() === 12 && (o[i] = 1), a[i] += CT(Vn - 1, o, i);
        break;
      case 2:
        a[i] += Lc(s);
        break;
      case 4:
        if (s === 44) {
          a[++i] = or() === 58 ? "&\f" : "", o[i] = a[i].length;
          break;
        }
      // fallthrough
      default:
        a[i] += ef(s);
    }
  while (s = ra());
  return a;
}, TT = function(a, o) {
  return gx(ET(hx(a), o));
}, gb = /* @__PURE__ */ new WeakMap(), RT = function(a) {
  if (!(a.type !== "rule" || !a.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  a.length < 1)) {
    for (var o = a.value, i = a.parent, s = a.column === i.column && a.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(a.props.length === 1 && o.charCodeAt(0) !== 58 && !gb.get(i)) && !s) {
      gb.set(a, !0);
      for (var c = [], d = TT(o, c), p = i.props, m = 0, g = 0; m < d.length; m++)
        for (var y = 0; y < p.length; y++, g++)
          a.props[g] = c[m] ? d[m].replace(/&\f/g, p[y]) : p[y] + " " + d[m];
    }
  }
}, wT = function(a) {
  if (a.type === "decl") {
    var o = a.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (a.return = "", a.value = "");
  }
};
function vx(t, a) {
  switch (sT(t, a)) {
    // color-adjust
    case 5103:
      return vt + "print-" + t + t;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return vt + t + t;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return vt + t + Vc + t + Rn + t + t;
    // flex, flex-direction
    case 6828:
    case 4268:
      return vt + t + Rn + t + t;
    // order
    case 6165:
      return vt + t + Rn + "flex-" + t + t;
    // align-items
    case 5187:
      return vt + t + bt(t, /(\w+).+(:[^]+)/, vt + "box-$1$2" + Rn + "flex-$1$2") + t;
    // align-self
    case 5443:
      return vt + t + Rn + "flex-item-" + bt(t, /flex-|-self/, "") + t;
    // align-content
    case 4675:
      return vt + t + Rn + "flex-line-pack" + bt(t, /align-content|flex-|-self/, "") + t;
    // flex-shrink
    case 5548:
      return vt + t + Rn + bt(t, "shrink", "negative") + t;
    // flex-basis
    case 5292:
      return vt + t + Rn + bt(t, "basis", "preferred-size") + t;
    // flex-grow
    case 6060:
      return vt + "box-" + bt(t, "-grow", "") + vt + t + Rn + bt(t, "grow", "positive") + t;
    // transition
    case 4554:
      return vt + bt(t, /([^-])(transform)/g, "$1" + vt + "$2") + t;
    // cursor
    case 6187:
      return bt(bt(bt(t, /(zoom-|grab)/, vt + "$1"), /(image-set)/, vt + "$1"), t, "") + t;
    // background, background-image
    case 5495:
    case 3959:
      return bt(t, /(image-set\([^]*)/, vt + "$1$`$1");
    // justify-content
    case 4968:
      return bt(bt(t, /(.+:)(flex-)?(.*)/, vt + "box-pack:$3" + Rn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + vt + t + t;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return bt(t, /(.+)-inline(.+)/, vt + "$1$2") + t;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (nr(t) - 1 - a > 6) switch (Sn(t, a + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Sn(t, a + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return bt(t, /(.+:)(.+)-([^]+)/, "$1" + vt + "$2-$3$1" + Vc + (Sn(t, a + 3) == 108 ? "$3" : "$2-$3")) + t;
        // (s)tretch
        case 115:
          return ~Tm(t, "stretch") ? vx(bt(t, "stretch", "fill-available"), a) + t : t;
      }
      break;
    // position: sticky
    case 4949:
      if (Sn(t, a + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Sn(t, nr(t) - 3 - (~Tm(t, "!important") && 10))) {
        // stic(k)y
        case 107:
          return bt(t, ":", ":" + vt) + t;
        // (inline-)?fl(e)x
        case 101:
          return bt(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + vt + (Sn(t, 14) === 45 ? "inline-" : "") + "box$3$1" + vt + "$2$3$1" + Rn + "$2box$3") + t;
      }
      break;
    // writing-mode
    case 5936:
      switch (Sn(t, a + 11)) {
        // vertical-l(r)
        case 114:
          return vt + t + Rn + bt(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
        // vertical-r(l)
        case 108:
          return vt + t + Rn + bt(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
        // horizontal(-)tb
        case 45:
          return vt + t + Rn + bt(t, /[svh]\w+-[tblr]{2}/, "lr") + t;
      }
      return vt + t + Rn + t + t;
  }
  return t;
}
var AT = function(a, o, i, s) {
  if (a.length > -1 && !a.return) switch (a.type) {
    case Jm:
      a.return = vx(a.value, a.length);
      break;
    case dx:
      return ni([ys(a, {
        value: bt(a.value, "@", "@" + vt)
      })], s);
    case Zm:
      if (a.length) return cT(a.props, function(c) {
        switch (uT(c, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ni([ys(a, {
              props: [bt(c, /:(read-\w+)/, ":" + Vc + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return ni([ys(a, {
              props: [bt(c, /:(plac\w+)/, ":" + vt + "input-$1")]
            }), ys(a, {
              props: [bt(c, /:(plac\w+)/, ":" + Vc + "$1")]
            }), ys(a, {
              props: [bt(c, /:(plac\w+)/, Rn + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, OT = [AT], bx = function(a) {
  var o = a.key;
  if (o === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(x) {
      var A = x.getAttribute("data-emotion");
      A.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var s = a.stylisPlugins || OT, c = {}, d, p = [];
  d = a.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(x) {
      for (var A = x.getAttribute("data-emotion").split(" "), z = 1; z < A.length; z++)
        c[A[z]] = !0;
      p.push(x);
    }
  );
  var m, g = [RT, wT];
  {
    var y, h = [bT, ST(function(x) {
      y.insert(x);
    })], C = xT(g.concat(s, h)), T = function(A) {
      return ni(yT(A), C);
    };
    m = function(A, z, N, O) {
      y = N, T(A ? A + "{" + z.styles + "}" : z.styles), O && (R.inserted[z.name] = !0);
    };
  }
  var R = {
    key: o,
    sheet: new cx({
      key: o,
      container: d,
      nonce: a.nonce,
      speedy: a.speedy,
      prepend: a.prepend,
      insertionPoint: a.insertionPoint
    }),
    nonce: a.nonce,
    inserted: c,
    registered: {},
    insert: m
  };
  return R.sheet.hydrate(p), R;
}, Kp = { exports: {} }, Ct = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yb;
function MT() {
  if (yb) return Ct;
  yb = 1;
  var t = typeof Symbol == "function" && Symbol.for, a = t ? Symbol.for("react.element") : 60103, o = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, s = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, d = t ? Symbol.for("react.provider") : 60109, p = t ? Symbol.for("react.context") : 60110, m = t ? Symbol.for("react.async_mode") : 60111, g = t ? Symbol.for("react.concurrent_mode") : 60111, y = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, C = t ? Symbol.for("react.suspense_list") : 60120, T = t ? Symbol.for("react.memo") : 60115, R = t ? Symbol.for("react.lazy") : 60116, x = t ? Symbol.for("react.block") : 60121, A = t ? Symbol.for("react.fundamental") : 60117, z = t ? Symbol.for("react.responder") : 60118, N = t ? Symbol.for("react.scope") : 60119;
  function O(D) {
    if (typeof D == "object" && D !== null) {
      var _ = D.$$typeof;
      switch (_) {
        case a:
          switch (D = D.type, D) {
            case m:
            case g:
            case i:
            case c:
            case s:
            case h:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case p:
                case y:
                case R:
                case T:
                case d:
                  return D;
                default:
                  return _;
              }
          }
        case o:
          return _;
      }
    }
  }
  function M(D) {
    return O(D) === g;
  }
  return Ct.AsyncMode = m, Ct.ConcurrentMode = g, Ct.ContextConsumer = p, Ct.ContextProvider = d, Ct.Element = a, Ct.ForwardRef = y, Ct.Fragment = i, Ct.Lazy = R, Ct.Memo = T, Ct.Portal = o, Ct.Profiler = c, Ct.StrictMode = s, Ct.Suspense = h, Ct.isAsyncMode = function(D) {
    return M(D) || O(D) === m;
  }, Ct.isConcurrentMode = M, Ct.isContextConsumer = function(D) {
    return O(D) === p;
  }, Ct.isContextProvider = function(D) {
    return O(D) === d;
  }, Ct.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === a;
  }, Ct.isForwardRef = function(D) {
    return O(D) === y;
  }, Ct.isFragment = function(D) {
    return O(D) === i;
  }, Ct.isLazy = function(D) {
    return O(D) === R;
  }, Ct.isMemo = function(D) {
    return O(D) === T;
  }, Ct.isPortal = function(D) {
    return O(D) === o;
  }, Ct.isProfiler = function(D) {
    return O(D) === c;
  }, Ct.isStrictMode = function(D) {
    return O(D) === s;
  }, Ct.isSuspense = function(D) {
    return O(D) === h;
  }, Ct.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === i || D === g || D === c || D === s || D === h || D === C || typeof D == "object" && D !== null && (D.$$typeof === R || D.$$typeof === T || D.$$typeof === d || D.$$typeof === p || D.$$typeof === y || D.$$typeof === A || D.$$typeof === z || D.$$typeof === N || D.$$typeof === x);
  }, Ct.typeOf = O, Ct;
}
var vb;
function zT() {
  return vb || (vb = 1, Kp.exports = MT()), Kp.exports;
}
var Wp, bb;
function DT() {
  if (bb) return Wp;
  bb = 1;
  var t = zT(), a = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, c = {};
  c[t.ForwardRef] = i, c[t.Memo] = s;
  function d(R) {
    return t.isMemo(R) ? s : c[R.$$typeof] || a;
  }
  var p = Object.defineProperty, m = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, C = Object.prototype;
  function T(R, x, A) {
    if (typeof x != "string") {
      if (C) {
        var z = h(x);
        z && z !== C && T(R, z, A);
      }
      var N = m(x);
      g && (N = N.concat(g(x)));
      for (var O = d(R), M = d(x), D = 0; D < N.length; ++D) {
        var _ = N[D];
        if (!o[_] && !(A && A[_]) && !(M && M[_]) && !(O && O[_])) {
          var L = y(x, _);
          try {
            p(R, _, L);
          } catch {
          }
        }
      }
    }
    return R;
  }
  return Wp = T, Wp;
}
DT();
var NT = !0;
function xx(t, a, o) {
  var i = "";
  return o.split(" ").forEach(function(s) {
    t[s] !== void 0 ? a.push(t[s] + ";") : s && (i += s + " ");
  }), i;
}
var th = function(a, o, i) {
  var s = a.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  NT === !1) && a.registered[s] === void 0 && (a.registered[s] = o.styles);
}, nh = function(a, o, i) {
  th(a, o, i);
  var s = a.key + "-" + o.name;
  if (a.inserted[o.name] === void 0) {
    var c = o;
    do
      a.insert(o === c ? "." + s : "", c, a.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function BT(t) {
  for (var a = 0, o, i = 0, s = t.length; s >= 4; ++i, s -= 4)
    o = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, a = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      a ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      a ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      a ^= t.charCodeAt(i) & 255, a = /* Math.imul(h, m): */
      (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16);
  }
  return a ^= a >>> 13, a = /* Math.imul(h, m): */
  (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), ((a ^ a >>> 15) >>> 0).toString(36);
}
var jT = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, $T = /[A-Z]|^ms/g, LT = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Sx = function(a) {
  return a.charCodeAt(1) === 45;
}, xb = function(a) {
  return a != null && typeof a != "boolean";
}, Qp = /* @__PURE__ */ yx(function(t) {
  return Sx(t) ? t : t.replace($T, "-$&").toLowerCase();
}), Sb = function(a, o) {
  switch (a) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(LT, function(i, s, c) {
          return ar = {
            name: s,
            styles: c,
            next: ar
          }, s;
        });
  }
  return jT[a] !== 1 && !Sx(a) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function _s(t, a, o) {
  if (o == null)
    return "";
  var i = o;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var s = o;
      if (s.anim === 1)
        return ar = {
          name: s.name,
          styles: s.styles,
          next: ar
        }, s.name;
      var c = o;
      if (c.styles !== void 0) {
        var d = c.next;
        if (d !== void 0)
          for (; d !== void 0; )
            ar = {
              name: d.name,
              styles: d.styles,
              next: ar
            }, d = d.next;
        var p = c.styles + ";";
        return p;
      }
      return _T(t, a, o);
    }
    case "function": {
      if (t !== void 0) {
        var m = ar, g = o(t);
        return ar = m, _s(t, a, g);
      }
      break;
    }
  }
  var y = o;
  if (a == null)
    return y;
  var h = a[y];
  return h !== void 0 ? h : y;
}
function _T(t, a, o) {
  var i = "";
  if (Array.isArray(o))
    for (var s = 0; s < o.length; s++)
      i += _s(t, a, o[s]) + ";";
  else
    for (var c in o) {
      var d = o[c];
      if (typeof d != "object") {
        var p = d;
        a != null && a[p] !== void 0 ? i += c + "{" + a[p] + "}" : xb(p) && (i += Qp(c) + ":" + Sb(c, p) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && (a == null || a[d[0]] === void 0))
        for (var m = 0; m < d.length; m++)
          xb(d[m]) && (i += Qp(c) + ":" + Sb(c, d[m]) + ";");
      else {
        var g = _s(t, a, d);
        switch (c) {
          case "animation":
          case "animationName": {
            i += Qp(c) + ":" + g + ";";
            break;
          }
          default:
            i += c + "{" + g + "}";
        }
      }
    }
  return i;
}
var Cb = /label:\s*([^\s;{]+)\s*(;|$)/g, ar;
function Vs(t, a, o) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, s = "";
  ar = void 0;
  var c = t[0];
  if (c == null || c.raw === void 0)
    i = !1, s += _s(o, a, c);
  else {
    var d = c;
    s += d[0];
  }
  for (var p = 1; p < t.length; p++)
    if (s += _s(o, a, t[p]), i) {
      var m = c;
      s += m[p];
    }
  Cb.lastIndex = 0;
  for (var g = "", y; (y = Cb.exec(s)) !== null; )
    g += "-" + y[1];
  var h = BT(s) + g;
  return {
    name: h,
    styles: s,
    next: ar
  };
}
var kT = function(a) {
  return a();
}, Cx = Pc.useInsertionEffect ? Pc.useInsertionEffect : !1, Ex = Cx || kT, Eb = Cx || b.useLayoutEffect, Tx = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ bx({
    key: "css"
  }) : null
), HT = Tx.Provider, ah = function(a) {
  return /* @__PURE__ */ b.forwardRef(function(o, i) {
    var s = b.useContext(Tx);
    return a(o, s, i);
  });
}, qs = /* @__PURE__ */ b.createContext({}), rh = {}.hasOwnProperty, wm = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", UT = function(a, o) {
  var i = {};
  for (var s in o)
    rh.call(o, s) && (i[s] = o[s]);
  return i[wm] = a, i;
}, IT = function(a) {
  var o = a.cache, i = a.serialized, s = a.isStringTag;
  return th(o, i, s), Ex(function() {
    return nh(o, i, s);
  }), null;
}, PT = /* @__PURE__ */ ah(function(t, a, o) {
  var i = t.css;
  typeof i == "string" && a.registered[i] !== void 0 && (i = a.registered[i]);
  var s = t[wm], c = [i], d = "";
  typeof t.className == "string" ? d = xx(a.registered, c, t.className) : t.className != null && (d = t.className + " ");
  var p = Vs(c, void 0, b.useContext(qs));
  d += a.key + "-" + p.name;
  var m = {};
  for (var g in t)
    rh.call(t, g) && g !== "css" && g !== wm && (m[g] = t[g]);
  return m.className = d, o && (m.ref = o), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(IT, {
    cache: a,
    serialized: p,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ b.createElement(s, m));
}), FT = PT, Tb = function(a, o) {
  var i = arguments;
  if (o == null || !rh.call(o, "css"))
    return b.createElement.apply(void 0, i);
  var s = i.length, c = new Array(s);
  c[0] = FT, c[1] = UT(a, o);
  for (var d = 2; d < s; d++)
    c[d] = i[d];
  return b.createElement.apply(null, c);
};
(function(t) {
  var a;
  a || (a = t.JSX || (t.JSX = {}));
})(Tb || (Tb = {}));
var VT = /* @__PURE__ */ ah(function(t, a) {
  var o = t.styles, i = Vs([o], void 0, b.useContext(qs)), s = b.useRef();
  return Eb(function() {
    var c = a.key + "-global", d = new a.sheet.constructor({
      key: c,
      nonce: a.sheet.nonce,
      container: a.sheet.container,
      speedy: a.sheet.isSpeedy
    }), p = !1, m = document.querySelector('style[data-emotion="' + c + " " + i.name + '"]');
    return a.sheet.tags.length && (d.before = a.sheet.tags[0]), m !== null && (p = !0, m.setAttribute("data-emotion", c), d.hydrate([m])), s.current = [d, p], function() {
      d.flush();
    };
  }, [a]), Eb(function() {
    var c = s.current, d = c[0], p = c[1];
    if (p) {
      c[1] = !1;
      return;
    }
    if (i.next !== void 0 && nh(a, i.next, !0), d.tags.length) {
      var m = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = m, d.flush();
    }
    a.insert("", i, d, !1);
  }, [a, i.name]), null;
});
function oh() {
  for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
    a[o] = arguments[o];
  return Vs(a);
}
function Gs() {
  var t = oh.apply(void 0, arguments), a = "animation-" + t.name;
  return {
    name: a,
    styles: "@keyframes " + a + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var qT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, GT = /* @__PURE__ */ yx(
  function(t) {
    return qT.test(t) || t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) < 91;
  }
  /* Z+1 */
), YT = GT, XT = function(a) {
  return a !== "theme";
}, Rb = function(a) {
  return typeof a == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  a.charCodeAt(0) > 96 ? YT : XT;
}, wb = function(a, o, i) {
  var s;
  if (o) {
    var c = o.shouldForwardProp;
    s = a.__emotion_forwardProp && c ? function(d) {
      return a.__emotion_forwardProp(d) && c(d);
    } : c;
  }
  return typeof s != "function" && i && (s = a.__emotion_forwardProp), s;
}, KT = function(a) {
  var o = a.cache, i = a.serialized, s = a.isStringTag;
  return th(o, i, s), Ex(function() {
    return nh(o, i, s);
  }), null;
}, WT = function t(a, o) {
  var i = a.__emotion_real === a, s = i && a.__emotion_base || a, c, d;
  o !== void 0 && (c = o.label, d = o.target);
  var p = wb(a, o, i), m = p || Rb(s), g = !m("as");
  return function() {
    var y = arguments, h = i && a.__emotion_styles !== void 0 ? a.__emotion_styles.slice(0) : [];
    if (c !== void 0 && h.push("label:" + c + ";"), y[0] == null || y[0].raw === void 0)
      h.push.apply(h, y);
    else {
      var C = y[0];
      h.push(C[0]);
      for (var T = y.length, R = 1; R < T; R++)
        h.push(y[R], C[R]);
    }
    var x = ah(function(A, z, N) {
      var O = g && A.as || s, M = "", D = [], _ = A;
      if (A.theme == null) {
        _ = {};
        for (var L in A)
          _[L] = A[L];
        _.theme = b.useContext(qs);
      }
      typeof A.className == "string" ? M = xx(z.registered, D, A.className) : A.className != null && (M = A.className + " ");
      var k = Vs(h.concat(D), z.registered, _);
      M += z.key + "-" + k.name, d !== void 0 && (M += " " + d);
      var F = g && p === void 0 ? Rb(O) : m, E = {};
      for (var U in A)
        g && U === "as" || F(U) && (E[U] = A[U]);
      return E.className = M, N && (E.ref = N), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(KT, {
        cache: z,
        serialized: k,
        isStringTag: typeof O == "string"
      }), /* @__PURE__ */ b.createElement(O, E));
    });
    return x.displayName = c !== void 0 ? c : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", x.defaultProps = a.defaultProps, x.__emotion_real = x, x.__emotion_base = s, x.__emotion_styles = h, x.__emotion_forwardProp = p, Object.defineProperty(x, "toString", {
      value: function() {
        return "." + d;
      }
    }), x.withComponent = function(A, z) {
      var N = t(A, Fc({}, o, z, {
        shouldForwardProp: wb(x, z, !0)
      }));
      return N.apply(void 0, h);
    }, x;
  };
}, QT = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Am = WT.bind(null);
QT.forEach(function(t) {
  Am[t] = Am(t);
});
const Zp = /* @__PURE__ */ new Map(), ZT = (t, a) => {
  const o = bx(t);
  return o.sheet = new a({
    key: o.key,
    nonce: o.sheet.nonce,
    container: o.sheet.container,
    speedy: o.sheet.isSpeedy,
    prepend: o.sheet.prepend,
    insertionPoint: o.sheet.insertionPoint
  }), o;
};
let fo;
if (typeof document == "object" && (fo = document.querySelector('[name="emotion-insertion-point"]'), !fo)) {
  fo = document.createElement("meta"), fo.setAttribute("name", "emotion-insertion-point"), fo.setAttribute("content", "");
  const t = document.querySelector("head");
  t && t.prepend(fo);
}
function JT(t, a) {
  if (t || a) {
    class o extends cx {
      insert(c, d) {
        return this.key && this.key.endsWith("global") && (this.before = fo), super.insert(c, d);
      }
    }
    const i = ZT({
      key: "css",
      insertionPoint: t ? fo : void 0
    }, o);
    if (a) {
      const s = i.insert;
      i.insert = (...c) => (c[1].styles.match(/^@layer\s+[^{]*$/) || (c[1].styles = `@layer mui {${c[1].styles}}`), s(...c));
    }
    return i;
  }
}
function e5(t) {
  const {
    injectFirst: a,
    enableCssLayer: o,
    children: i
  } = t, s = b.useMemo(() => {
    const c = `${a}-${o}`;
    if (typeof document == "object" && Zp.has(c))
      return Zp.get(c);
    const d = JT(a, o);
    return Zp.set(c, d), d;
  }, [a, o]);
  return s ? /* @__PURE__ */ S.jsx(HT, {
    value: s,
    children: i
  }) : i;
}
function t5(t) {
  return t == null || Object.keys(t).length === 0;
}
function Rx(t) {
  const {
    styles: a,
    defaultTheme: o = {}
  } = t, i = typeof a == "function" ? (s) => a(t5(s) ? o : s) : a;
  return /* @__PURE__ */ S.jsx(VT, {
    styles: i
  });
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function wx(t, a) {
  return Am(t, a);
}
function n5(t, a) {
  Array.isArray(t.__emotion_styles) && (t.__emotion_styles = a(t.__emotion_styles));
}
const Ab = [];
function ho(t) {
  return Ab[0] = t, Vs(Ab);
}
var Jp = { exports: {} }, Mt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ob;
function a5() {
  if (Ob) return Mt;
  Ob = 1;
  var t = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), C = Symbol.for("react.view_transition"), T = Symbol.for("react.client.reference");
  function R(x) {
    if (typeof x == "object" && x !== null) {
      var A = x.$$typeof;
      switch (A) {
        case t:
          switch (x = x.type, x) {
            case o:
            case s:
            case i:
            case m:
            case g:
            case C:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case d:
                case p:
                case h:
                case y:
                  return x;
                case c:
                  return x;
                default:
                  return A;
              }
          }
        case a:
          return A;
      }
    }
  }
  return Mt.ContextConsumer = c, Mt.ContextProvider = d, Mt.Element = t, Mt.ForwardRef = p, Mt.Fragment = o, Mt.Lazy = h, Mt.Memo = y, Mt.Portal = a, Mt.Profiler = s, Mt.StrictMode = i, Mt.Suspense = m, Mt.SuspenseList = g, Mt.isContextConsumer = function(x) {
    return R(x) === c;
  }, Mt.isContextProvider = function(x) {
    return R(x) === d;
  }, Mt.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Mt.isForwardRef = function(x) {
    return R(x) === p;
  }, Mt.isFragment = function(x) {
    return R(x) === o;
  }, Mt.isLazy = function(x) {
    return R(x) === h;
  }, Mt.isMemo = function(x) {
    return R(x) === y;
  }, Mt.isPortal = function(x) {
    return R(x) === a;
  }, Mt.isProfiler = function(x) {
    return R(x) === s;
  }, Mt.isStrictMode = function(x) {
    return R(x) === i;
  }, Mt.isSuspense = function(x) {
    return R(x) === m;
  }, Mt.isSuspenseList = function(x) {
    return R(x) === g;
  }, Mt.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === s || x === i || x === m || x === g || x === C || typeof x == "object" && x !== null && (x.$$typeof === h || x.$$typeof === y || x.$$typeof === d || x.$$typeof === c || x.$$typeof === p || x.$$typeof === T || x.getModuleId !== void 0);
  }, Mt.typeOf = R, Mt;
}
var Mb;
function r5() {
  return Mb || (Mb = 1, Jp.exports = /* @__PURE__ */ a5()), Jp.exports;
}
var Ax = /* @__PURE__ */ r5();
function rr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const a = Object.getPrototypeOf(t);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function Ox(t) {
  if (/* @__PURE__ */ b.isValidElement(t) || Ax.isValidElementType(t) || !rr(t))
    return t;
  const a = {};
  return Object.keys(t).forEach((o) => {
    a[o] = Ox(t[o]);
  }), a;
}
function An(t, a, o = {
  clone: !0
}) {
  const i = o.clone ? {
    ...t
  } : t;
  return rr(t) && rr(a) && Object.keys(a).forEach((s) => {
    /* @__PURE__ */ b.isValidElement(a[s]) || Ax.isValidElementType(a[s]) ? i[s] = a[s] : rr(a[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(t, s) && rr(t[s]) ? i[s] = An(t[s], a[s], o) : o.clone ? i[s] = rr(a[s]) ? Ox(a[s]) : a[s] : i[s] = a[s];
  }), i;
}
const o5 = (t) => {
  const a = Object.keys(t).map((o) => ({
    key: o,
    val: t[o]
  })) || [];
  return a.sort((o, i) => o.val - i.val), a.reduce((o, i) => ({
    ...o,
    [i.key]: i.val
  }), {});
};
function Mx(t) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: a = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: i = 5,
    ...s
  } = t, c = o5(a), d = Object.keys(c);
  function p(C) {
    return `@media (min-width:${typeof a[C] == "number" ? a[C] : C}${o})`;
  }
  function m(C) {
    return `@media (max-width:${(typeof a[C] == "number" ? a[C] : C) - i / 100}${o})`;
  }
  function g(C, T) {
    const R = d.indexOf(T);
    return `@media (min-width:${typeof a[C] == "number" ? a[C] : C}${o}) and (max-width:${(R !== -1 && typeof a[d[R]] == "number" ? a[d[R]] : T) - i / 100}${o})`;
  }
  function y(C) {
    return d.indexOf(C) + 1 < d.length ? g(C, d[d.indexOf(C) + 1]) : p(C);
  }
  function h(C) {
    const T = d.indexOf(C);
    return T === 0 ? p(d[1]) : T === d.length - 1 ? m(d[T]) : g(C, d[d.indexOf(C) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: c,
    up: p,
    down: m,
    between: g,
    only: y,
    not: h,
    unit: o,
    ...s
  };
}
function zb(t, a) {
  if (!t.containerQueries)
    return a;
  const o = Object.keys(a).filter((i) => i.startsWith("@container")).sort((i, s) => {
    var d, p;
    const c = /min-width:\s*([0-9.]+)/;
    return +(((d = i.match(c)) == null ? void 0 : d[1]) || 0) - +(((p = s.match(c)) == null ? void 0 : p[1]) || 0);
  });
  return o.length ? o.reduce((i, s) => {
    const c = a[s];
    return delete i[s], i[s] = c, i;
  }, {
    ...a
  }) : a;
}
function l5(t, a) {
  return a === "@" || a.startsWith("@") && (t.some((o) => a.startsWith(`@${o}`)) || !!a.match(/^@\d/));
}
function i5(t, a) {
  const o = a.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, i, s] = o, c = Number.isNaN(+i) ? i || 0 : +i;
  return t.containerQueries(s).up(c);
}
function s5(t) {
  const a = (c, d) => c.replace("@media", d ? `@container ${d}` : "@container");
  function o(c, d) {
    c.up = (...p) => a(t.breakpoints.up(...p), d), c.down = (...p) => a(t.breakpoints.down(...p), d), c.between = (...p) => a(t.breakpoints.between(...p), d), c.only = (...p) => a(t.breakpoints.only(...p), d), c.not = (...p) => {
      const m = a(t.breakpoints.not(...p), d);
      return m.includes("not all and") ? m.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : m;
    };
  }
  const i = {}, s = (c) => (o(i, c), i);
  return o(s), {
    ...t,
    containerQueries: s
  };
}
const u5 = {
  borderRadius: 4
};
function Os(t, a) {
  return a ? An(t, a, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : t;
}
const af = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Db = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (t) => `@media (min-width:${af[t]}px)`
}, c5 = {
  containerQueries: (t) => ({
    up: (a) => {
      let o = typeof a == "number" ? a : af[a] || a;
      return typeof o == "number" && (o = `${o}px`), t ? `@container ${t} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function Mr(t, a, o) {
  const i = t.theme || {};
  if (Array.isArray(a)) {
    const c = i.breakpoints || Db;
    return a.reduce((d, p, m) => (d[c.up(c.keys[m])] = o(a[m]), d), {});
  }
  if (typeof a == "object") {
    const c = i.breakpoints || Db;
    return Object.keys(a).reduce((d, p) => {
      if (l5(c.keys, p)) {
        const m = i5(i.containerQueries ? i : c5, p);
        m && (d[m] = o(a[p], p));
      } else if (Object.keys(c.values || af).includes(p)) {
        const m = c.up(p);
        d[m] = o(a[p], p);
      } else {
        const m = p;
        d[m] = a[m];
      }
      return d;
    }, {});
  }
  return o(a);
}
function f5(t = {}) {
  var o;
  return ((o = t.keys) == null ? void 0 : o.reduce((i, s) => {
    const c = t.up(s);
    return i[c] = {}, i;
  }, {})) || {};
}
function Nb(t, a) {
  return t.reduce((o, i) => {
    const s = o[i];
    return (!s || Object.keys(s).length === 0) && delete o[i], o;
  }, a);
}
function ce(t) {
  if (typeof t != "string")
    throw new Error(Or(7));
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function rf(t, a, o = !0) {
  if (!a || typeof a != "string")
    return null;
  if (t && t.vars && o) {
    const i = `vars.${a}`.split(".").reduce((s, c) => s && s[c] ? s[c] : null, t);
    if (i != null)
      return i;
  }
  return a.split(".").reduce((i, s) => i && i[s] != null ? i[s] : null, t);
}
function qc(t, a, o, i = o) {
  let s;
  return typeof t == "function" ? s = t(o) : Array.isArray(t) ? s = t[o] || i : s = rf(t, o) || i, a && (s = a(s, i, t)), s;
}
function en(t) {
  const {
    prop: a,
    cssProperty: o = t.prop,
    themeKey: i,
    transform: s
  } = t, c = (d) => {
    if (d[a] == null)
      return null;
    const p = d[a], m = d.theme, g = rf(m, i) || {};
    return Mr(d, p, (h) => {
      let C = qc(g, s, h);
      return h === C && typeof h == "string" && (C = qc(g, s, `${a}${h === "default" ? "" : ce(h)}`, h)), o === !1 ? C : {
        [o]: C
      };
    });
  };
  return c.propTypes = {}, c.filterProps = [a], c;
}
function d5(t) {
  const a = {};
  return (o) => (a[o] === void 0 && (a[o] = t(o)), a[o]);
}
const p5 = {
  m: "margin",
  p: "padding"
}, m5 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Bb = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, h5 = d5((t) => {
  if (t.length > 2)
    if (Bb[t])
      t = Bb[t];
    else
      return [t];
  const [a, o] = t.split(""), i = p5[a], s = m5[o] || "";
  return Array.isArray(s) ? s.map((c) => i + c) : [i + s];
}), lh = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ih = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...lh, ...ih];
function Ys(t, a, o, i) {
  const s = rf(t, a, !0) ?? o;
  return typeof s == "number" || typeof s == "string" ? (c) => typeof c == "string" ? c : typeof s == "string" ? `calc(${c} * ${s})` : s * c : Array.isArray(s) ? (c) => {
    if (typeof c == "string")
      return c;
    const d = Math.abs(c), p = s[d];
    return c >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
  } : typeof s == "function" ? s : () => {
  };
}
function sh(t) {
  return Ys(t, "spacing", 8);
}
function Xs(t, a) {
  return typeof a == "string" || a == null ? a : t(a);
}
function g5(t, a) {
  return (o) => t.reduce((i, s) => (i[s] = Xs(a, o), i), {});
}
function y5(t, a, o, i) {
  if (!a.includes(o))
    return null;
  const s = h5(o), c = g5(s, i), d = t[o];
  return Mr(t, d, c);
}
function zx(t, a) {
  const o = sh(t.theme);
  return Object.keys(t).map((i) => y5(t, a, i, o)).reduce(Os, {});
}
function Wt(t) {
  return zx(t, lh);
}
Wt.propTypes = {};
Wt.filterProps = lh;
function Qt(t) {
  return zx(t, ih);
}
Qt.propTypes = {};
Qt.filterProps = ih;
function uh(t = 8, a = sh({
  spacing: t
})) {
  if (t.mui)
    return t;
  const o = (...i) => (i.length === 0 ? [1] : i).map((c) => {
    const d = a(c);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return o.mui = !0, o;
}
function of(...t) {
  const a = t.reduce((i, s) => (s.filterProps.forEach((c) => {
    i[c] = s;
  }), i), {}), o = (i) => Object.keys(i).reduce((s, c) => a[c] ? Os(s, a[c](i)) : s, {});
  return o.propTypes = {}, o.filterProps = t.reduce((i, s) => i.concat(s.filterProps), []), o;
}
function Sa(t) {
  return typeof t != "number" ? t : `${t}px solid`;
}
function Ra(t, a) {
  return en({
    prop: t,
    themeKey: "borders",
    transform: a
  });
}
const v5 = Ra("border", Sa), b5 = Ra("borderTop", Sa), x5 = Ra("borderRight", Sa), S5 = Ra("borderBottom", Sa), C5 = Ra("borderLeft", Sa), E5 = Ra("borderColor"), T5 = Ra("borderTopColor"), R5 = Ra("borderRightColor"), w5 = Ra("borderBottomColor"), A5 = Ra("borderLeftColor"), O5 = Ra("outline", Sa), M5 = Ra("outlineColor"), lf = (t) => {
  if (t.borderRadius !== void 0 && t.borderRadius !== null) {
    const a = Ys(t.theme, "shape.borderRadius", 4), o = (i) => ({
      borderRadius: Xs(a, i)
    });
    return Mr(t, t.borderRadius, o);
  }
  return null;
};
lf.propTypes = {};
lf.filterProps = ["borderRadius"];
of(v5, b5, x5, S5, C5, E5, T5, R5, w5, A5, lf, O5, M5);
const sf = (t) => {
  if (t.gap !== void 0 && t.gap !== null) {
    const a = Ys(t.theme, "spacing", 8), o = (i) => ({
      gap: Xs(a, i)
    });
    return Mr(t, t.gap, o);
  }
  return null;
};
sf.propTypes = {};
sf.filterProps = ["gap"];
const uf = (t) => {
  if (t.columnGap !== void 0 && t.columnGap !== null) {
    const a = Ys(t.theme, "spacing", 8), o = (i) => ({
      columnGap: Xs(a, i)
    });
    return Mr(t, t.columnGap, o);
  }
  return null;
};
uf.propTypes = {};
uf.filterProps = ["columnGap"];
const cf = (t) => {
  if (t.rowGap !== void 0 && t.rowGap !== null) {
    const a = Ys(t.theme, "spacing", 8), o = (i) => ({
      rowGap: Xs(a, i)
    });
    return Mr(t, t.rowGap, o);
  }
  return null;
};
cf.propTypes = {};
cf.filterProps = ["rowGap"];
const z5 = en({
  prop: "gridColumn"
}), D5 = en({
  prop: "gridRow"
}), N5 = en({
  prop: "gridAutoFlow"
}), B5 = en({
  prop: "gridAutoColumns"
}), j5 = en({
  prop: "gridAutoRows"
}), $5 = en({
  prop: "gridTemplateColumns"
}), L5 = en({
  prop: "gridTemplateRows"
}), _5 = en({
  prop: "gridTemplateAreas"
}), k5 = en({
  prop: "gridArea"
});
of(sf, uf, cf, z5, D5, N5, B5, j5, $5, L5, _5, k5);
function ai(t, a) {
  return a === "grey" ? a : t;
}
const H5 = en({
  prop: "color",
  themeKey: "palette",
  transform: ai
}), U5 = en({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ai
}), I5 = en({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ai
});
of(H5, U5, I5);
function aa(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const P5 = en({
  prop: "width",
  transform: aa
}), ch = (t) => {
  if (t.maxWidth !== void 0 && t.maxWidth !== null) {
    const a = (o) => {
      var s, c, d, p, m;
      const i = ((d = (c = (s = t.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : c.values) == null ? void 0 : d[o]) || af[o];
      return i ? ((m = (p = t.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : m.unit) !== "px" ? {
        maxWidth: `${i}${t.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: aa(o)
      };
    };
    return Mr(t, t.maxWidth, a);
  }
  return null;
};
ch.filterProps = ["maxWidth"];
const F5 = en({
  prop: "minWidth",
  transform: aa
}), V5 = en({
  prop: "height",
  transform: aa
}), q5 = en({
  prop: "maxHeight",
  transform: aa
}), G5 = en({
  prop: "minHeight",
  transform: aa
});
en({
  prop: "size",
  cssProperty: "width",
  transform: aa
});
en({
  prop: "size",
  cssProperty: "height",
  transform: aa
});
const Y5 = en({
  prop: "boxSizing"
});
of(P5, ch, F5, V5, q5, G5, Y5);
const Ks = {
  // borders
  border: {
    themeKey: "borders",
    transform: Sa
  },
  borderTop: {
    themeKey: "borders",
    transform: Sa
  },
  borderRight: {
    themeKey: "borders",
    transform: Sa
  },
  borderBottom: {
    themeKey: "borders",
    transform: Sa
  },
  borderLeft: {
    themeKey: "borders",
    transform: Sa
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Sa
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: lf
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ai
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ai
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ai
  },
  // spacing
  p: {
    style: Qt
  },
  pt: {
    style: Qt
  },
  pr: {
    style: Qt
  },
  pb: {
    style: Qt
  },
  pl: {
    style: Qt
  },
  px: {
    style: Qt
  },
  py: {
    style: Qt
  },
  padding: {
    style: Qt
  },
  paddingTop: {
    style: Qt
  },
  paddingRight: {
    style: Qt
  },
  paddingBottom: {
    style: Qt
  },
  paddingLeft: {
    style: Qt
  },
  paddingX: {
    style: Qt
  },
  paddingY: {
    style: Qt
  },
  paddingInline: {
    style: Qt
  },
  paddingInlineStart: {
    style: Qt
  },
  paddingInlineEnd: {
    style: Qt
  },
  paddingBlock: {
    style: Qt
  },
  paddingBlockStart: {
    style: Qt
  },
  paddingBlockEnd: {
    style: Qt
  },
  m: {
    style: Wt
  },
  mt: {
    style: Wt
  },
  mr: {
    style: Wt
  },
  mb: {
    style: Wt
  },
  ml: {
    style: Wt
  },
  mx: {
    style: Wt
  },
  my: {
    style: Wt
  },
  margin: {
    style: Wt
  },
  marginTop: {
    style: Wt
  },
  marginRight: {
    style: Wt
  },
  marginBottom: {
    style: Wt
  },
  marginLeft: {
    style: Wt
  },
  marginX: {
    style: Wt
  },
  marginY: {
    style: Wt
  },
  marginInline: {
    style: Wt
  },
  marginInlineStart: {
    style: Wt
  },
  marginInlineEnd: {
    style: Wt
  },
  marginBlock: {
    style: Wt
  },
  marginBlockStart: {
    style: Wt
  },
  marginBlockEnd: {
    style: Wt
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (t) => ({
      "@media print": {
        display: t
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: sf
  },
  rowGap: {
    style: cf
  },
  columnGap: {
    style: uf
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: aa
  },
  maxWidth: {
    style: ch
  },
  minWidth: {
    transform: aa
  },
  height: {
    transform: aa
  },
  maxHeight: {
    transform: aa
  },
  minHeight: {
    transform: aa
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function X5(...t) {
  const a = t.reduce((i, s) => i.concat(Object.keys(s)), []), o = new Set(a);
  return t.every((i) => o.size === Object.keys(i).length);
}
function K5(t, a) {
  return typeof t == "function" ? t(a) : t;
}
function W5() {
  function t(o, i, s, c) {
    const d = {
      [o]: i,
      theme: s
    }, p = c[o];
    if (!p)
      return {
        [o]: i
      };
    const {
      cssProperty: m = o,
      themeKey: g,
      transform: y,
      style: h
    } = p;
    if (i == null)
      return null;
    if (g === "typography" && i === "inherit")
      return {
        [o]: i
      };
    const C = rf(s, g) || {};
    return h ? h(d) : Mr(d, i, (R) => {
      let x = qc(C, y, R);
      return R === x && typeof R == "string" && (x = qc(C, y, `${o}${R === "default" ? "" : ce(R)}`, R)), m === !1 ? x : {
        [m]: x
      };
    });
  }
  function a(o) {
    const {
      sx: i,
      theme: s = {},
      nested: c
    } = o || {};
    if (!i)
      return null;
    const d = s.unstable_sxConfig ?? Ks;
    function p(m) {
      let g = m;
      if (typeof m == "function")
        g = m(s);
      else if (typeof m != "object")
        return m;
      if (!g)
        return null;
      const y = f5(s.breakpoints), h = Object.keys(y);
      let C = y;
      return Object.keys(g).forEach((T) => {
        const R = K5(g[T], s);
        if (R != null)
          if (typeof R == "object")
            if (d[T])
              C = Os(C, t(T, R, s, d));
            else {
              const x = Mr({
                theme: s
              }, R, (A) => ({
                [T]: A
              }));
              X5(x, R) ? C[T] = a({
                sx: R,
                theme: s,
                nested: !0
              }) : C = Os(C, x);
            }
          else
            C = Os(C, t(T, R, s, d));
      }), !c && s.modularCssLayers ? {
        "@layer sx": zb(s, Nb(h, C))
      } : zb(s, Nb(h, C));
    }
    return Array.isArray(i) ? i.map(p) : p(i);
  }
  return a;
}
const go = W5();
go.filterProps = ["sx"];
function Q5(t, a) {
  var i;
  const o = this;
  if (o.vars) {
    if (!((i = o.colorSchemes) != null && i[t]) || typeof o.getColorSchemeSelector != "function")
      return {};
    let s = o.getColorSchemeSelector(t);
    return s === "&" ? a : ((s.includes("data-") || s.includes(".")) && (s = `*:where(${s.replace(/\s*&$/, "")}) &`), {
      [s]: a
    });
  }
  return o.palette.mode === t ? a : {};
}
function fh(t = {}, ...a) {
  const {
    breakpoints: o = {},
    palette: i = {},
    spacing: s,
    shape: c = {},
    ...d
  } = t, p = Mx(o), m = uh(s);
  let g = An({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...i
    },
    spacing: m,
    shape: {
      ...u5,
      ...c
    }
  }, d);
  return g = s5(g), g.applyStyles = Q5, g = a.reduce((y, h) => An(y, h), g), g.unstable_sxConfig = {
    ...Ks,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(h) {
    return go({
      sx: h,
      theme: this
    });
  }, g;
}
function Z5(t) {
  return Object.keys(t).length === 0;
}
function ff(t = null) {
  const a = b.useContext(qs);
  return !a || Z5(a) ? t : a;
}
const J5 = fh();
function dh(t = J5) {
  return ff(t);
}
function em(t) {
  const a = ho(t);
  return t !== a && a.styles ? (a.styles.match(/^@layer\s+[^{]*$/) || (a.styles = `@layer global{${a.styles}}`), a) : t;
}
function Dx({
  styles: t,
  themeId: a,
  defaultTheme: o = {}
}) {
  const i = dh(o), s = a && i[a] || i;
  let c = typeof t == "function" ? t(s) : t;
  return s.modularCssLayers && (Array.isArray(c) ? c = c.map((d) => em(typeof d == "function" ? d(s) : d)) : c = em(c)), /* @__PURE__ */ S.jsx(Rx, {
    styles: c
  });
}
const eR = (t) => {
  var i;
  const a = {
    systemProps: {},
    otherProps: {}
  }, o = ((i = t == null ? void 0 : t.theme) == null ? void 0 : i.unstable_sxConfig) ?? Ks;
  return Object.keys(t).forEach((s) => {
    o[s] ? a.systemProps[s] = t[s] : a.otherProps[s] = t[s];
  }), a;
};
function Nx(t) {
  const {
    sx: a,
    ...o
  } = t, {
    systemProps: i,
    otherProps: s
  } = eR(o);
  let c;
  return Array.isArray(a) ? c = [i, ...a] : typeof a == "function" ? c = (...d) => {
    const p = a(...d);
    return rr(p) ? {
      ...i,
      ...p
    } : i;
  } : c = {
    ...i,
    ...a
  }, {
    ...s,
    sx: c
  };
}
const jb = (t) => t, tR = () => {
  let t = jb;
  return {
    configure(a) {
      t = a;
    },
    generate(a) {
      return t(a);
    },
    reset() {
      t = jb;
    }
  };
}, Bx = tR();
function jx(t) {
  var a, o, i = "";
  if (typeof t == "string" || typeof t == "number") i += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (a = 0; a < s; a++) t[a] && (o = jx(t[a])) && (i && (i += " "), i += o);
  } else for (o in t) t[o] && (i && (i += " "), i += o);
  return i;
}
function Te() {
  for (var t, a, o = 0, i = "", s = arguments.length; o < s; o++) (t = arguments[o]) && (a = jx(t)) && (i && (i += " "), i += a);
  return i;
}
function nR(t = {}) {
  const {
    themeId: a,
    defaultTheme: o,
    defaultClassName: i = "MuiBox-root",
    generateClassName: s
  } = t, c = wx("div", {
    shouldForwardProp: (p) => p !== "theme" && p !== "sx" && p !== "as"
  })(go);
  return /* @__PURE__ */ b.forwardRef(function(m, g) {
    const y = dh(o), {
      className: h,
      component: C = "div",
      ...T
    } = Nx(m);
    return /* @__PURE__ */ S.jsx(c, {
      as: C,
      ref: g,
      className: Te(h, s ? s(i) : i),
      theme: a && y[a] || y,
      ...T
    });
  });
}
const aR = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function et(t, a, o = "Mui") {
  const i = aR[a];
  return i ? `${o}-${i}` : `${Bx.generate(t)}-${a}`;
}
function Ke(t, a, o = "Mui") {
  const i = {};
  return a.forEach((s) => {
    i[s] = et(t, s, o);
  }), i;
}
function $x(t) {
  const {
    variants: a,
    ...o
  } = t, i = {
    variants: a,
    style: ho(o),
    isProcessed: !0
  };
  return i.style === o || a && a.forEach((s) => {
    typeof s.style != "function" && (s.style = ho(s.style));
  }), i;
}
const rR = fh();
function tm(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
function Qo(t, a) {
  return a && t && typeof t == "object" && t.styles && !t.styles.startsWith("@layer") && (t.styles = `@layer ${a}{${String(t.styles)}}`), t;
}
function oR(t) {
  return t ? (a, o) => o[t] : null;
}
function lR(t, a, o) {
  t.theme = uR(t.theme) ? o : t.theme[a] || t.theme;
}
function kc(t, a, o) {
  const i = typeof a == "function" ? a(t) : a;
  if (Array.isArray(i))
    return i.flatMap((s) => kc(t, s, o));
  if (Array.isArray(i == null ? void 0 : i.variants)) {
    let s;
    if (i.isProcessed)
      s = o ? Qo(i.style, o) : i.style;
    else {
      const {
        variants: c,
        ...d
      } = i;
      s = o ? Qo(ho(d), o) : d;
    }
    return Lx(t, i.variants, [s], o);
  }
  return i != null && i.isProcessed ? o ? Qo(ho(i.style), o) : i.style : o ? Qo(ho(i), o) : i;
}
function Lx(t, a, o = [], i = void 0) {
  var c;
  let s;
  e: for (let d = 0; d < a.length; d += 1) {
    const p = a[d];
    if (typeof p.props == "function") {
      if (s ?? (s = {
        ...t,
        ...t.ownerState,
        ownerState: t.ownerState
      }), !p.props(s))
        continue;
    } else
      for (const m in p.props)
        if (t[m] !== p.props[m] && ((c = t.ownerState) == null ? void 0 : c[m]) !== p.props[m])
          continue e;
    typeof p.style == "function" ? (s ?? (s = {
      ...t,
      ...t.ownerState,
      ownerState: t.ownerState
    }), o.push(i ? Qo(ho(p.style(s)), i) : p.style(s))) : o.push(i ? Qo(ho(p.style), i) : p.style);
  }
  return o;
}
function iR(t = {}) {
  const {
    themeId: a,
    defaultTheme: o = rR,
    rootShouldForwardProp: i = tm,
    slotShouldForwardProp: s = tm
  } = t;
  function c(p) {
    lR(p, a, o);
  }
  return (p, m = {}) => {
    n5(p, (_) => _.filter((L) => L !== go));
    const {
      name: g,
      slot: y,
      skipVariantsResolver: h,
      skipSx: C,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: T = oR(fR(y)),
      ...R
    } = m, x = g && g.startsWith("Mui") || y ? "components" : "custom", A = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      y && y !== "Root" && y !== "root" || !1
    ), z = C || !1;
    let N = tm;
    y === "Root" || y === "root" ? N = i : y ? N = s : cR(p) && (N = void 0);
    const O = wx(p, {
      shouldForwardProp: N,
      label: sR(),
      ...R
    }), M = (_) => {
      if (_.__emotion_real === _)
        return _;
      if (typeof _ == "function")
        return function(k) {
          return kc(k, _, k.theme.modularCssLayers ? x : void 0);
        };
      if (rr(_)) {
        const L = $x(_);
        return function(F) {
          return L.variants ? kc(F, L, F.theme.modularCssLayers ? x : void 0) : F.theme.modularCssLayers ? Qo(L.style, x) : L.style;
        };
      }
      return _;
    }, D = (..._) => {
      const L = [], k = _.map(M), F = [];
      if (L.push(c), g && T && F.push(function(J) {
        var Y, W;
        const X = (W = (Y = J.theme.components) == null ? void 0 : Y[g]) == null ? void 0 : W.styleOverrides;
        if (!X)
          return null;
        const j = {};
        for (const G in X)
          j[G] = kc(J, X[G], J.theme.modularCssLayers ? "theme" : void 0);
        return T(J, j);
      }), g && !A && F.push(function(J) {
        var j, Y;
        const te = J.theme, X = (Y = (j = te == null ? void 0 : te.components) == null ? void 0 : j[g]) == null ? void 0 : Y.variants;
        return X ? Lx(J, X, [], J.theme.modularCssLayers ? "theme" : void 0) : null;
      }), z || F.push(go), Array.isArray(k[0])) {
        const P = k.shift(), J = new Array(L.length).fill(""), te = new Array(F.length).fill("");
        let X;
        X = [...J, ...P, ...te], X.raw = [...J, ...P.raw, ...te], L.unshift(X);
      }
      const E = [...L, ...k, ...F], U = O(...E);
      return p.muiName && (U.muiName = p.muiName), U;
    };
    return O.withConfig && (D.withConfig = O.withConfig), D;
  };
}
function sR(t, a) {
  return void 0;
}
function uR(t) {
  for (const a in t)
    return !1;
  return !0;
}
function cR(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96;
}
function fR(t) {
  return t && t.charAt(0).toLowerCase() + t.slice(1);
}
function li(t, a) {
  const o = {
    ...a
  };
  for (const i in t)
    if (Object.prototype.hasOwnProperty.call(t, i)) {
      const s = i;
      if (s === "components" || s === "slots")
        o[s] = {
          ...t[s],
          ...o[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const c = t[s], d = a[s];
        if (!d)
          o[s] = c || {};
        else if (!c)
          o[s] = d;
        else {
          o[s] = {
            ...d
          };
          for (const p in c)
            if (Object.prototype.hasOwnProperty.call(c, p)) {
              const m = p;
              o[s][m] = li(c[m], d[m]);
            }
        }
      } else o[s] === void 0 && (o[s] = t[s]);
    }
  return o;
}
function dR(t) {
  const {
    theme: a,
    name: o,
    props: i
  } = t;
  return !a || !a.components || !a.components[o] || !a.components[o].defaultProps ? i : li(a.components[o].defaultProps, i);
}
const oa = typeof window < "u" ? b.useLayoutEffect : b.useEffect;
function pR(t, a, o, i, s) {
  const [c, d] = b.useState(() => s && o ? o(t).matches : i ? i(t).matches : a);
  return oa(() => {
    if (!o)
      return;
    const p = o(t), m = () => {
      d(p.matches);
    };
    return m(), p.addEventListener("change", m), () => {
      p.removeEventListener("change", m);
    };
  }, [t, o]), c;
}
const mR = {
  ...Pc
}, _x = mR.useSyncExternalStore;
function hR(t, a, o, i, s) {
  const c = b.useCallback(() => a, [a]), d = b.useMemo(() => {
    if (s && o)
      return () => o(t).matches;
    if (i !== null) {
      const {
        matches: y
      } = i(t);
      return () => y;
    }
    return c;
  }, [c, t, i, s, o]), [p, m] = b.useMemo(() => {
    if (o === null)
      return [c, () => () => {
      }];
    const y = o(t);
    return [() => y.matches, (h) => (y.addEventListener("change", h), () => {
      y.removeEventListener("change", h);
    })];
  }, [c, o, t]);
  return _x(m, p, d);
}
function kx(t = {}) {
  const {
    themeId: a
  } = t;
  return function(i, s = {}) {
    let c = ff();
    c && a && (c = c[a] || c);
    const d = typeof window < "u" && typeof window.matchMedia < "u", {
      defaultMatches: p = !1,
      matchMedia: m = d ? window.matchMedia : null,
      ssrMatchMedia: g = null,
      noSsr: y = !1
    } = dR({
      name: "MuiUseMediaQuery",
      props: s,
      theme: c
    });
    let h = typeof i == "function" ? i(c) : i;
    return h = h.replace(/^@media( ?)/m, ""), h.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (_x !== void 0 ? hR : pR)(h, p, m, g, y);
  };
}
kx();
function Hx(t, a = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(a, Math.min(t, o));
}
function ph(t, a = 0, o = 1) {
  return Hx(t, a, o);
}
function gR(t) {
  t = t.slice(1);
  const a = new RegExp(`.{1,${t.length >= 6 ? 2 : 1}}`, "g");
  let o = t.match(a);
  return o && o[0].length === 1 && (o = o.map((i) => i + i)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((i, s) => s < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function yo(t) {
  if (t.type)
    return t;
  if (t.charAt(0) === "#")
    return yo(gR(t));
  const a = t.indexOf("("), o = t.substring(0, a);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(Or(9, t));
  let i = t.substring(a + 1, t.length - 1), s;
  if (o === "color") {
    if (i = i.split(" "), s = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(Or(10, s));
  } else
    i = i.split(",");
  return i = i.map((c) => parseFloat(c)), {
    type: o,
    values: i,
    colorSpace: s
  };
}
const yR = (t) => {
  const a = yo(t);
  return a.values.slice(0, 3).map((o, i) => a.type.includes("hsl") && i !== 0 ? `${o}%` : o).join(" ");
}, Rs = (t, a) => {
  try {
    return yR(t);
  } catch {
    return t;
  }
};
function df(t) {
  const {
    type: a,
    colorSpace: o
  } = t;
  let {
    values: i
  } = t;
  return a.includes("rgb") ? i = i.map((s, c) => c < 3 ? parseInt(s, 10) : s) : a.includes("hsl") && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), a.includes("color") ? i = `${o} ${i.join(" ")}` : i = `${i.join(", ")}`, `${a}(${i})`;
}
function Ux(t) {
  t = yo(t);
  const {
    values: a
  } = t, o = a[0], i = a[1] / 100, s = a[2] / 100, c = i * Math.min(s, 1 - s), d = (g, y = (g + o / 30) % 12) => s - c * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let p = "rgb";
  const m = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return t.type === "hsla" && (p += "a", m.push(a[3])), df({
    type: p,
    values: m
  });
}
function Om(t) {
  t = yo(t);
  let a = t.type === "hsl" || t.type === "hsla" ? yo(Ux(t)).values : t.values;
  return a = a.map((o) => (t.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]).toFixed(3));
}
function vR(t, a) {
  const o = Om(t), i = Om(a);
  return (Math.max(o, i) + 0.05) / (Math.min(o, i) + 0.05);
}
function dt(t, a) {
  return t = yo(t), a = ph(a), (t.type === "rgb" || t.type === "hsl") && (t.type += "a"), t.type === "color" ? t.values[3] = `/${a}` : t.values[3] = a, df(t);
}
function Rc(t, a, o) {
  try {
    return dt(t, a);
  } catch {
    return t;
  }
}
function mh(t, a) {
  if (t = yo(t), a = ph(a), t.type.includes("hsl"))
    t.values[2] *= 1 - a;
  else if (t.type.includes("rgb") || t.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      t.values[o] *= 1 - a;
  return df(t);
}
function Dt(t, a, o) {
  try {
    return mh(t, a);
  } catch {
    return t;
  }
}
function hh(t, a) {
  if (t = yo(t), a = ph(a), t.type.includes("hsl"))
    t.values[2] += (100 - t.values[2]) * a;
  else if (t.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      t.values[o] += (255 - t.values[o]) * a;
  else if (t.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      t.values[o] += (1 - t.values[o]) * a;
  return df(t);
}
function Nt(t, a, o) {
  try {
    return hh(t, a);
  } catch {
    return t;
  }
}
function bR(t, a = 0.15) {
  return Om(t) > 0.5 ? mh(t, a) : hh(t, a);
}
function wc(t, a, o) {
  try {
    return bR(t, a);
  } catch {
    return t;
  }
}
function $b(...t) {
  return t.reduce((a, o) => o == null ? a : function(...s) {
    a.apply(this, s), o.apply(this, s);
  }, () => {
  });
}
function gh(t, a = 166) {
  let o;
  function i(...s) {
    const c = () => {
      t.apply(this, s);
    };
    clearTimeout(o), o = setTimeout(c, a);
  }
  return i.clear = () => {
    clearTimeout(o);
  }, i;
}
function nm(t, a) {
  var o, i, s;
  return /* @__PURE__ */ b.isValidElement(t) && a.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    t.type.muiName ?? ((s = (i = (o = t.type) == null ? void 0 : o._payload) == null ? void 0 : i.value) == null ? void 0 : s.muiName)
  ) !== -1;
}
function la(t) {
  return t && t.ownerDocument || document;
}
function Ua(t) {
  return la(t).defaultView || window;
}
function Mm(t, a) {
  typeof t == "function" ? t(a) : t && (t.current = a);
}
let Lb = 0;
function xR(t) {
  const [a, o] = b.useState(t), i = t || a;
  return b.useEffect(() => {
    a == null && (Lb += 1, o(`mui-${Lb}`));
  }, [a]), i;
}
const SR = {
  ...Pc
}, _b = SR.useId;
function Nr(t) {
  if (_b !== void 0) {
    const a = _b();
    return t ?? a;
  }
  return xR(t);
}
function ri({
  controlled: t,
  default: a,
  name: o,
  state: i = "value"
}) {
  const {
    current: s
  } = b.useRef(t !== void 0), [c, d] = b.useState(a), p = s ? t : c, m = b.useCallback((g) => {
    s || d(g);
  }, []);
  return [p, m];
}
function La(t) {
  const a = b.useRef(t);
  return oa(() => {
    a.current = t;
  }), b.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, a.current)(...o)
  )).current;
}
function Jt(...t) {
  const a = b.useRef(void 0), o = b.useCallback((i) => {
    const s = t.map((c) => {
      if (c == null)
        return null;
      if (typeof c == "function") {
        const d = c, p = d(i);
        return typeof p == "function" ? p : () => {
          d(null);
        };
      }
      return c.current = i, () => {
        c.current = null;
      };
    });
    return () => {
      s.forEach((c) => c == null ? void 0 : c());
    };
  }, t);
  return b.useMemo(() => t.every((i) => i == null) ? null : (i) => {
    a.current && (a.current(), a.current = void 0), i != null && (a.current = o(i));
  }, t);
}
const kb = {};
function Ix(t, a) {
  const o = b.useRef(kb);
  return o.current === kb && (o.current = t(a)), o;
}
const CR = [];
function ER(t) {
  b.useEffect(t, CR);
}
class yh {
  constructor() {
    Yl(this, "currentId", null);
    Yl(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Yl(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new yh();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(a, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, a);
  }
}
function vh() {
  const t = Ix(yh.create).current;
  return ER(t.disposeEffect), t;
}
function Gc(t) {
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function Px(t = window) {
  const a = t.document.documentElement.clientWidth;
  return t.innerWidth - a;
}
const bh = (t) => {
  const a = b.useRef({});
  return b.useEffect(() => {
    a.current = t;
  }), a.current;
};
function TR(t) {
  return b.Children.toArray(t).filter((a) => /* @__PURE__ */ b.isValidElement(a));
}
const RR = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function tt(t, a, o = void 0) {
  const i = {};
  for (const s in t) {
    const c = t[s];
    let d = "", p = !0;
    for (let m = 0; m < c.length; m += 1) {
      const g = c[m];
      g && (d += (p === !0 ? "" : " ") + a(g), p = !1, o && o[g] && (d += " " + o[g]));
    }
    i[s] = d;
  }
  return i;
}
function wR(t) {
  return typeof t == "string";
}
function Fx(t, a, o) {
  return t === void 0 || wR(t) ? a : {
    ...a,
    ownerState: {
      ...a.ownerState,
      ...o
    }
  };
}
function Vx(t, a = []) {
  if (t === void 0)
    return {};
  const o = {};
  return Object.keys(t).filter((i) => i.match(/^on[A-Z]/) && typeof t[i] == "function" && !a.includes(i)).forEach((i) => {
    o[i] = t[i];
  }), o;
}
function Hb(t) {
  if (t === void 0)
    return {};
  const a = {};
  return Object.keys(t).filter((o) => !(o.match(/^on[A-Z]/) && typeof t[o] == "function")).forEach((o) => {
    a[o] = t[o];
  }), a;
}
function qx(t) {
  const {
    getSlotProps: a,
    additionalProps: o,
    externalSlotProps: i,
    externalForwardedProps: s,
    className: c
  } = t;
  if (!a) {
    const T = Te(o == null ? void 0 : o.className, c, s == null ? void 0 : s.className, i == null ? void 0 : i.className), R = {
      ...o == null ? void 0 : o.style,
      ...s == null ? void 0 : s.style,
      ...i == null ? void 0 : i.style
    }, x = {
      ...o,
      ...s,
      ...i
    };
    return T.length > 0 && (x.className = T), Object.keys(R).length > 0 && (x.style = R), {
      props: x,
      internalRef: void 0
    };
  }
  const d = Vx({
    ...s,
    ...i
  }), p = Hb(i), m = Hb(s), g = a(d), y = Te(g == null ? void 0 : g.className, o == null ? void 0 : o.className, c, s == null ? void 0 : s.className, i == null ? void 0 : i.className), h = {
    ...g == null ? void 0 : g.style,
    ...o == null ? void 0 : o.style,
    ...s == null ? void 0 : s.style,
    ...i == null ? void 0 : i.style
  }, C = {
    ...g,
    ...o,
    ...m,
    ...p
  };
  return y.length > 0 && (C.className = y), Object.keys(h).length > 0 && (C.style = h), {
    props: C,
    internalRef: g.ref
  };
}
function Gx(t, a, o) {
  return typeof t == "function" ? t(a, o) : t;
}
function Yx(t) {
  var h;
  const {
    elementType: a,
    externalSlotProps: o,
    ownerState: i,
    skipResolvingSlotProps: s = !1,
    ...c
  } = t, d = s ? {} : Gx(o, i), {
    props: p,
    internalRef: m
  } = qx({
    ...c,
    externalSlotProps: d
  }), g = Jt(m, d == null ? void 0 : d.ref, (h = t.additionalProps) == null ? void 0 : h.ref);
  return Fx(a, {
    ...p,
    ref: g
  }, i);
}
function gi(t) {
  var a;
  return parseInt(b.version, 10) >= 19 ? ((a = t == null ? void 0 : t.props) == null ? void 0 : a.ref) || null : (t == null ? void 0 : t.ref) || null;
}
const Xx = /* @__PURE__ */ b.createContext(null);
function xh() {
  return b.useContext(Xx);
}
const AR = typeof Symbol == "function" && Symbol.for, OR = AR ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function MR(t, a) {
  return typeof a == "function" ? a(t) : {
    ...t,
    ...a
  };
}
function zR(t) {
  const {
    children: a,
    theme: o
  } = t, i = xh(), s = b.useMemo(() => {
    const c = i === null ? {
      ...o
    } : MR(i, o);
    return c != null && (c[OR] = i !== null), c;
  }, [o, i]);
  return /* @__PURE__ */ S.jsx(Xx.Provider, {
    value: s,
    children: a
  });
}
const Kx = /* @__PURE__ */ b.createContext();
function DR({
  value: t,
  ...a
}) {
  return /* @__PURE__ */ S.jsx(Kx.Provider, {
    value: t ?? !0,
    ...a
  });
}
const pf = () => b.useContext(Kx) ?? !1, Wx = /* @__PURE__ */ b.createContext(void 0);
function NR({
  value: t,
  children: a
}) {
  return /* @__PURE__ */ S.jsx(Wx.Provider, {
    value: t,
    children: a
  });
}
function BR(t) {
  const {
    theme: a,
    name: o,
    props: i
  } = t;
  if (!a || !a.components || !a.components[o])
    return i;
  const s = a.components[o];
  return s.defaultProps ? li(s.defaultProps, i) : !s.styleOverrides && !s.variants ? li(s, i) : i;
}
function jR({
  props: t,
  name: a
}) {
  const o = b.useContext(Wx);
  return BR({
    props: t,
    name: a,
    theme: {
      components: o
    }
  });
}
function $R(t) {
  const a = ff(), o = Nr() || "", {
    modularCssLayers: i
  } = t;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !i || a !== null ? s = "" : typeof i == "string" ? s = i.replace(/mui(?!\.)/g, s) : s = `@layer ${s};`, oa(() => {
    var p, m;
    const c = document.querySelector("head");
    if (!c)
      return;
    const d = c.firstChild;
    if (s) {
      if (d && ((p = d.hasAttribute) != null && p.call(d, "data-mui-layer-order")) && d.getAttribute("data-mui-layer-order") === o)
        return;
      const g = document.createElement("style");
      g.setAttribute("data-mui-layer-order", o), g.textContent = s, c.prepend(g);
    } else
      (m = c.querySelector(`style[data-mui-layer-order="${o}"]`)) == null || m.remove();
  }, [s, o]), s ? /* @__PURE__ */ S.jsx(Dx, {
    styles: s
  }) : null;
}
const Ub = {};
function Ib(t, a, o, i = !1) {
  return b.useMemo(() => {
    const s = t && a[t] || a;
    if (typeof o == "function") {
      const c = o(s), d = t ? {
        ...a,
        [t]: c
      } : c;
      return i ? () => d : d;
    }
    return t ? {
      ...a,
      [t]: o
    } : {
      ...a,
      ...o
    };
  }, [t, a, o, i]);
}
function Qx(t) {
  const {
    children: a,
    theme: o,
    themeId: i
  } = t, s = ff(Ub), c = xh() || Ub, d = Ib(i, s, o), p = Ib(i, c, o, !0), m = (i ? d[i] : d).direction === "rtl", g = $R(d);
  return /* @__PURE__ */ S.jsx(zR, {
    theme: p,
    children: /* @__PURE__ */ S.jsx(qs.Provider, {
      value: d,
      children: /* @__PURE__ */ S.jsx(DR, {
        value: m,
        children: /* @__PURE__ */ S.jsxs(NR, {
          value: i ? d[i].components : d.components,
          children: [g, a]
        })
      })
    })
  });
}
const Pb = {
  theme: void 0
};
function LR(t) {
  let a, o;
  return function(s) {
    let c = a;
    return (c === void 0 || s.theme !== o) && (Pb.theme = s.theme, c = $x(t(Pb)), a = c, o = s.theme), c;
  };
}
const Sh = "mode", Ch = "color-scheme", _R = "data-color-scheme";
function kR(t) {
  const {
    defaultMode: a = "system",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: i = "dark",
    modeStorageKey: s = Sh,
    colorSchemeStorageKey: c = Ch,
    attribute: d = _R,
    colorSchemeNode: p = "document.documentElement",
    nonce: m
  } = t || {};
  let g = "", y = d;
  if (d === "class" && (y = ".%s"), d === "data" && (y = "[data-%s]"), y.startsWith(".")) {
    const C = y.substring(1);
    g += `${p}.classList.remove('${C}'.replace('%s', light), '${C}'.replace('%s', dark));
      ${p}.classList.add('${C}'.replace('%s', colorScheme));`;
  }
  const h = y.match(/\[([^\]]+)\]/);
  if (h) {
    const [C, T] = h[1].split("=");
    T || (g += `${p}.removeAttribute('${C}'.replace('%s', light));
      ${p}.removeAttribute('${C}'.replace('%s', dark));`), g += `
      ${p}.setAttribute('${C}'.replace('%s', colorScheme), ${T ? `${T}.replace('%s', colorScheme)` : '""'});`;
  } else
    g += `${p}.setAttribute('${y}', colorScheme);`;
  return /* @__PURE__ */ S.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? m : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${a}';
  const dark = localStorage.getItem('${c}-dark') || '${i}';
  const light = localStorage.getItem('${c}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${g}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function HR() {
}
const UR = ({
  key: t,
  storageWindow: a
}) => (!a && typeof window < "u" && (a = window), {
  get(o) {
    if (typeof window > "u")
      return;
    if (!a)
      return o;
    let i;
    try {
      i = a.localStorage.getItem(t);
    } catch {
    }
    return i || o;
  },
  set: (o) => {
    if (a)
      try {
        a.localStorage.setItem(t, o);
      } catch {
      }
  },
  subscribe: (o) => {
    if (!a)
      return HR;
    const i = (s) => {
      const c = s.newValue;
      s.key === t && o(c);
    };
    return a.addEventListener("storage", i), () => {
      a.removeEventListener("storage", i);
    };
  }
});
function am() {
}
function Fb(t) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && t === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Zx(t, a) {
  if (t.mode === "light" || t.mode === "system" && t.systemMode === "light")
    return a("light");
  if (t.mode === "dark" || t.mode === "system" && t.systemMode === "dark")
    return a("dark");
}
function IR(t) {
  return Zx(t, (a) => {
    if (a === "light")
      return t.lightColorScheme;
    if (a === "dark")
      return t.darkColorScheme;
  });
}
function PR(t) {
  const {
    defaultMode: a = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: i,
    supportedColorSchemes: s = [],
    modeStorageKey: c = Sh,
    colorSchemeStorageKey: d = Ch,
    storageWindow: p = typeof window > "u" ? void 0 : window,
    storageManager: m = UR,
    noSsr: g = !1
  } = t, y = s.join(","), h = s.length > 1, C = b.useMemo(() => m == null ? void 0 : m({
    key: c,
    storageWindow: p
  }), [m, c, p]), T = b.useMemo(() => m == null ? void 0 : m({
    key: `${d}-light`,
    storageWindow: p
  }), [m, d, p]), R = b.useMemo(() => m == null ? void 0 : m({
    key: `${d}-dark`,
    storageWindow: p
  }), [m, d, p]), [x, A] = b.useState(() => {
    const k = (C == null ? void 0 : C.get(a)) || a, F = (T == null ? void 0 : T.get(o)) || o, E = (R == null ? void 0 : R.get(i)) || i;
    return {
      mode: k,
      systemMode: Fb(k),
      lightColorScheme: F,
      darkColorScheme: E
    };
  }), [z, N] = b.useState(g || !h);
  b.useEffect(() => {
    N(!0);
  }, []);
  const O = IR(x), M = b.useCallback((k) => {
    A((F) => {
      if (k === F.mode)
        return F;
      const E = k ?? a;
      return C == null || C.set(E), {
        ...F,
        mode: E,
        systemMode: Fb(E)
      };
    });
  }, [C, a]), D = b.useCallback((k) => {
    k ? typeof k == "string" ? k && !y.includes(k) ? console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`) : A((F) => {
      const E = {
        ...F
      };
      return Zx(F, (U) => {
        U === "light" && (T == null || T.set(k), E.lightColorScheme = k), U === "dark" && (R == null || R.set(k), E.darkColorScheme = k);
      }), E;
    }) : A((F) => {
      const E = {
        ...F
      }, U = k.light === null ? o : k.light, P = k.dark === null ? i : k.dark;
      return U && (y.includes(U) ? (E.lightColorScheme = U, T == null || T.set(U)) : console.error(`\`${U}\` does not exist in \`theme.colorSchemes\`.`)), P && (y.includes(P) ? (E.darkColorScheme = P, R == null || R.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), E;
    }) : A((F) => (T == null || T.set(o), R == null || R.set(i), {
      ...F,
      lightColorScheme: o,
      darkColorScheme: i
    }));
  }, [y, T, R, o, i]), _ = b.useCallback((k) => {
    x.mode === "system" && A((F) => {
      const E = k != null && k.matches ? "dark" : "light";
      return F.systemMode === E ? F : {
        ...F,
        systemMode: E
      };
    });
  }, [x.mode]), L = b.useRef(_);
  return L.current = _, b.useEffect(() => {
    if (typeof window.matchMedia != "function" || !h)
      return;
    const k = (...E) => L.current(...E), F = window.matchMedia("(prefers-color-scheme: dark)");
    return F.addListener(k), k(F), () => {
      F.removeListener(k);
    };
  }, [h]), b.useEffect(() => {
    if (h) {
      const k = (C == null ? void 0 : C.subscribe((U) => {
        (!U || ["light", "dark", "system"].includes(U)) && M(U || a);
      })) || am, F = (T == null ? void 0 : T.subscribe((U) => {
        (!U || y.match(U)) && D({
          light: U
        });
      })) || am, E = (R == null ? void 0 : R.subscribe((U) => {
        (!U || y.match(U)) && D({
          dark: U
        });
      })) || am;
      return () => {
        k(), F(), E();
      };
    }
  }, [D, M, y, a, p, h, C, T, R]), {
    ...x,
    mode: z ? x.mode : void 0,
    systemMode: z ? x.systemMode : void 0,
    colorScheme: z ? O : void 0,
    setMode: M,
    setColorScheme: D
  };
}
const FR = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function VR(t) {
  const {
    themeId: a,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    modeStorageKey: i = Sh,
    colorSchemeStorageKey: s = Ch,
    disableTransitionOnChange: c = !1,
    defaultColorScheme: d,
    resolveTheme: p
  } = t, m = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, g = /* @__PURE__ */ b.createContext(void 0), y = () => b.useContext(g) || m, h = {}, C = {};
  function T(z) {
    var Ye, Tt, Bt, ht;
    const {
      children: N,
      theme: O,
      modeStorageKey: M = i,
      colorSchemeStorageKey: D = s,
      disableTransitionOnChange: _ = c,
      storageManager: L,
      storageWindow: k = typeof window > "u" ? void 0 : window,
      documentNode: F = typeof document > "u" ? void 0 : document,
      colorSchemeNode: E = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: U = !1,
      disableStyleSheetGeneration: P = !1,
      defaultMode: J = "system",
      noSsr: te
    } = z, X = b.useRef(!1), j = xh(), Y = b.useContext(g), W = !!Y && !U, G = b.useMemo(() => O || (typeof o == "function" ? o() : o), [O]), de = G[a], xe = de || G, {
      colorSchemes: Ne = h,
      components: Me = C,
      cssVarPrefix: B
    } = xe, Z = Object.keys(Ne).filter((Ze) => !!Ne[Ze]).join(","), ne = b.useMemo(() => Z.split(","), [Z]), fe = typeof d == "string" ? d : d.light, me = typeof d == "string" ? d : d.dark, ve = Ne[fe] && Ne[me] ? J : ((Tt = (Ye = Ne[xe.defaultColorScheme]) == null ? void 0 : Ye.palette) == null ? void 0 : Tt.mode) || ((Bt = xe.palette) == null ? void 0 : Bt.mode), {
      mode: he,
      setMode: se,
      systemMode: ue,
      lightColorScheme: _e,
      darkColorScheme: Be,
      colorScheme: $e,
      setColorScheme: lt
    } = PR({
      supportedColorSchemes: ne,
      defaultLightColorScheme: fe,
      defaultDarkColorScheme: me,
      modeStorageKey: M,
      colorSchemeStorageKey: D,
      defaultMode: ve,
      storageManager: L,
      storageWindow: k,
      noSsr: te
    });
    let ye = he, we = $e;
    W && (ye = Y.mode, we = Y.colorScheme);
    const De = b.useMemo(() => {
      var Fe;
      const Ze = we || xe.defaultColorScheme, He = ((Fe = xe.generateThemeVars) == null ? void 0 : Fe.call(xe)) || xe.vars, Ue = {
        ...xe,
        components: Me,
        colorSchemes: Ne,
        cssVarPrefix: B,
        vars: He
      };
      if (typeof Ue.generateSpacing == "function" && (Ue.spacing = Ue.generateSpacing()), Ze) {
        const _t = Ne[Ze];
        _t && typeof _t == "object" && Object.keys(_t).forEach((jt) => {
          _t[jt] && typeof _t[jt] == "object" ? Ue[jt] = {
            ...Ue[jt],
            ..._t[jt]
          } : Ue[jt] = _t[jt];
        });
      }
      return p ? p(Ue) : Ue;
    }, [xe, we, Me, Ne, B]), Ge = xe.colorSchemeSelector;
    oa(() => {
      if (we && E && Ge && Ge !== "media") {
        const Ze = Ge;
        let He = Ge;
        if (Ze === "class" && (He = ".%s"), Ze === "data" && (He = "[data-%s]"), Ze != null && Ze.startsWith("data-") && !Ze.includes("%s") && (He = `[${Ze}="%s"]`), He.startsWith("."))
          E.classList.remove(...ne.map((Ue) => He.substring(1).replace("%s", Ue))), E.classList.add(He.substring(1).replace("%s", we));
        else {
          const Ue = He.replace("%s", we).match(/\[([^\]]+)\]/);
          if (Ue) {
            const [Fe, _t] = Ue[1].split("=");
            _t || ne.forEach((jt) => {
              E.removeAttribute(Fe.replace(we, jt));
            }), E.setAttribute(Fe, _t ? _t.replace(/"|'/g, "") : "");
          } else
            E.setAttribute(He, we);
        }
      }
    }, [we, Ge, E, ne]), b.useEffect(() => {
      let Ze;
      if (_ && X.current && F) {
        const He = F.createElement("style");
        He.appendChild(F.createTextNode(FR)), F.head.appendChild(He), window.getComputedStyle(F.body), Ze = setTimeout(() => {
          F.head.removeChild(He);
        }, 1);
      }
      return () => {
        clearTimeout(Ze);
      };
    }, [we, _, F]), b.useEffect(() => (X.current = !0, () => {
      X.current = !1;
    }), []);
    const Ce = b.useMemo(() => ({
      allColorSchemes: ne,
      colorScheme: we,
      darkColorScheme: Be,
      lightColorScheme: _e,
      mode: ye,
      setColorScheme: lt,
      setMode: se,
      systemMode: ue
    }), [ne, we, Be, _e, ye, lt, se, ue, De.colorSchemeSelector]);
    let ge = !0;
    (P || xe.cssVariables === !1 || W && (j == null ? void 0 : j.cssVarPrefix) === B) && (ge = !1);
    const Xe = /* @__PURE__ */ S.jsxs(b.Fragment, {
      children: [/* @__PURE__ */ S.jsx(Qx, {
        themeId: de ? a : void 0,
        theme: De,
        children: N
      }), ge && /* @__PURE__ */ S.jsx(Rx, {
        styles: ((ht = De.generateStyleSheets) == null ? void 0 : ht.call(De)) || []
      })]
    });
    return W ? Xe : /* @__PURE__ */ S.jsx(g.Provider, {
      value: Ce,
      children: Xe
    });
  }
  const R = typeof d == "string" ? d : d.light, x = typeof d == "string" ? d : d.dark;
  return {
    CssVarsProvider: T,
    useColorScheme: y,
    getInitColorSchemeScript: (z) => kR({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: R,
      defaultDarkColorScheme: x,
      modeStorageKey: i,
      ...z
    })
  };
}
function qR(t = "") {
  function a(...i) {
    if (!i.length)
      return "";
    const s = i[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${t ? `${t}-` : ""}${s}${a(...i.slice(1))})` : `, ${s}`;
  }
  return (i, ...s) => `var(--${t ? `${t}-` : ""}${i}${a(...s)})`;
}
const Vb = (t, a, o, i = []) => {
  let s = t;
  a.forEach((c, d) => {
    d === a.length - 1 ? Array.isArray(s) ? s[Number(c)] = o : s && typeof s == "object" && (s[c] = o) : s && typeof s == "object" && (s[c] || (s[c] = i.includes(c) ? [] : {}), s = s[c]);
  });
}, GR = (t, a, o) => {
  function i(s, c = [], d = []) {
    Object.entries(s).forEach(([p, m]) => {
      (!o || o && !o([...c, p])) && m != null && (typeof m == "object" && Object.keys(m).length > 0 ? i(m, [...c, p], Array.isArray(m) ? [...d, p] : d) : a([...c, p], m, d));
    });
  }
  i(t);
}, YR = (t, a) => typeof a == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) => t.includes(i)) || t[t.length - 1].toLowerCase().includes("opacity") ? a : `${a}px` : a;
function rm(t, a) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: i
  } = a || {}, s = {}, c = {}, d = {};
  return GR(
    t,
    (p, m, g) => {
      if ((typeof m == "string" || typeof m == "number") && (!i || !i(p, m))) {
        const y = `--${o ? `${o}-` : ""}${p.join("-")}`, h = YR(p, m);
        Object.assign(s, {
          [y]: h
        }), Vb(c, p, `var(${y})`, g), Vb(d, p, `var(${y}, ${h})`, g);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: c,
    varsWithDefaults: d
  };
}
function XR(t, a = {}) {
  const {
    getSelector: o = A,
    disableCssColorScheme: i,
    colorSchemeSelector: s
  } = a, {
    colorSchemes: c = {},
    components: d,
    defaultColorScheme: p = "light",
    ...m
  } = t, {
    vars: g,
    css: y,
    varsWithDefaults: h
  } = rm(m, a);
  let C = h;
  const T = {}, {
    [p]: R,
    ...x
  } = c;
  if (Object.entries(x || {}).forEach(([O, M]) => {
    const {
      vars: D,
      css: _,
      varsWithDefaults: L
    } = rm(M, a);
    C = An(C, L), T[O] = {
      css: _,
      vars: D
    };
  }), R) {
    const {
      css: O,
      vars: M,
      varsWithDefaults: D
    } = rm(R, a);
    C = An(C, D), T[p] = {
      css: O,
      vars: M
    };
  }
  function A(O, M) {
    var _, L;
    let D = s;
    if (s === "class" && (D = ".%s"), s === "data" && (D = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (D = `[${s}="%s"]`), O) {
      if (D === "media")
        return t.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${((L = (_ = c[O]) == null ? void 0 : _.palette) == null ? void 0 : L.mode) || O})`]: {
            ":root": M
          }
        };
      if (D)
        return t.defaultColorScheme === O ? `:root, ${D.replace("%s", String(O))}` : D.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: C,
    generateThemeVars: () => {
      let O = {
        ...g
      };
      return Object.entries(T).forEach(([, {
        vars: M
      }]) => {
        O = An(O, M);
      }), O;
    },
    generateStyleSheets: () => {
      var k, F;
      const O = [], M = t.defaultColorScheme || "light";
      function D(E, U) {
        Object.keys(U).length && O.push(typeof E == "string" ? {
          [E]: {
            ...U
          }
        } : E);
      }
      D(o(void 0, {
        ...y
      }), y);
      const {
        [M]: _,
        ...L
      } = T;
      if (_) {
        const {
          css: E
        } = _, U = (F = (k = c[M]) == null ? void 0 : k.palette) == null ? void 0 : F.mode, P = !i && U ? {
          colorScheme: U,
          ...E
        } : {
          ...E
        };
        D(o(M, {
          ...P
        }), P);
      }
      return Object.entries(L).forEach(([E, {
        css: U
      }]) => {
        var te, X;
        const P = (X = (te = c[E]) == null ? void 0 : te.palette) == null ? void 0 : X.mode, J = !i && P ? {
          colorScheme: P,
          ...U
        } : {
          ...U
        };
        D(o(E, {
          ...J
        }), J);
      }), O;
    }
  };
}
function KR(t) {
  return function(o) {
    return t === "media" ? `@media (prefers-color-scheme: ${o})` : t ? t.startsWith("data-") && !t.includes("%s") ? `[${t}="${o}"] &` : t === "class" ? `.${o} &` : t === "data" ? `[data-${o}] &` : `${t.replace("%s", o)} &` : "&";
  };
}
function qb(t) {
  const {
    defaultProps: a = {},
    mixins: o = {},
    overrides: i = {},
    palette: s = {},
    props: c = {},
    styleOverrides: d = {},
    ...p
  } = t, m = {
    ...p,
    components: {}
  };
  Object.keys(a).forEach((x) => {
    const A = m.components[x] || {};
    A.defaultProps = a[x], m.components[x] = A;
  }), Object.keys(c).forEach((x) => {
    const A = m.components[x] || {};
    A.defaultProps = c[x], m.components[x] = A;
  }), Object.keys(d).forEach((x) => {
    const A = m.components[x] || {};
    A.styleOverrides = d[x], m.components[x] = A;
  }), Object.keys(i).forEach((x) => {
    const A = m.components[x] || {};
    A.styleOverrides = i[x], m.components[x] = A;
  }), m.spacing = uh(t.spacing);
  const g = Mx(t.breakpoints || {}), y = m.spacing;
  m.mixins = {
    gutters: (x = {}) => ({
      paddingLeft: y(2),
      paddingRight: y(2),
      ...x,
      [g.up("sm")]: {
        paddingLeft: y(3),
        paddingRight: y(3),
        ...x[g.up("sm")]
      }
    }),
    ...o
  };
  const {
    type: h,
    mode: C,
    ...T
  } = s, R = C || h || "light";
  return m.palette = {
    // theme.palette.text.hint
    text: {
      hint: R === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.38)"
    },
    mode: R,
    type: R,
    ...T
  }, m;
}
function Jx() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: js.white,
      default: js.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const WR = Jx();
function eS() {
  return {
    text: {
      primary: js.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: js.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Gb = eS();
function Yb(t, a, o, i) {
  const s = i.light || i, c = i.dark || i * 1.5;
  t[a] || (t.hasOwnProperty(o) ? t[a] = t[o] : a === "light" ? t.light = hh(t.main, s) : a === "dark" && (t.dark = mh(t.main, c)));
}
function QR(t = "light") {
  return t === "dark" ? {
    main: Wl[200],
    light: Wl[50],
    dark: Wl[400]
  } : {
    main: Wl[700],
    light: Wl[400],
    dark: Wl[800]
  };
}
function ZR(t = "light") {
  return t === "dark" ? {
    main: Kl[200],
    light: Kl[50],
    dark: Kl[400]
  } : {
    main: Kl[500],
    light: Kl[300],
    dark: Kl[700]
  };
}
function JR(t = "light") {
  return t === "dark" ? {
    main: Xl[500],
    light: Xl[300],
    dark: Xl[700]
  } : {
    main: Xl[700],
    light: Xl[400],
    dark: Xl[800]
  };
}
function e4(t = "light") {
  return t === "dark" ? {
    main: Ql[400],
    light: Ql[300],
    dark: Ql[700]
  } : {
    main: Ql[700],
    light: Ql[500],
    dark: Ql[900]
  };
}
function t4(t = "light") {
  return t === "dark" ? {
    main: Zl[400],
    light: Zl[300],
    dark: Zl[700]
  } : {
    main: Zl[800],
    light: Zl[500],
    dark: Zl[900]
  };
}
function n4(t = "light") {
  return t === "dark" ? {
    main: gs[400],
    light: gs[300],
    dark: gs[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: gs[500],
    dark: gs[900]
  };
}
function Eh(t) {
  const {
    mode: a = "light",
    contrastThreshold: o = 3,
    tonalOffset: i = 0.2,
    ...s
  } = t, c = t.primary || QR(a), d = t.secondary || ZR(a), p = t.error || JR(a), m = t.info || e4(a), g = t.success || t4(a), y = t.warning || n4(a);
  function h(x) {
    return vR(x, Gb.text.primary) >= o ? Gb.text.primary : WR.text.primary;
  }
  const C = ({
    color: x,
    name: A,
    mainShade: z = 500,
    lightShade: N = 300,
    darkShade: O = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[z] && (x.main = x[z]), !x.hasOwnProperty("main"))
      throw new Error(Or(11, A ? ` (${A})` : "", z));
    if (typeof x.main != "string")
      throw new Error(Or(12, A ? ` (${A})` : "", JSON.stringify(x.main)));
    return Yb(x, "light", N, i), Yb(x, "dark", O, i), x.contrastText || (x.contrastText = h(x.main)), x;
  };
  let T;
  return a === "light" ? T = Jx() : a === "dark" && (T = eS()), An({
    // A collection of common colors.
    common: {
      ...js
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: a,
    // The colors used to represent primary interface elements for a user.
    primary: C({
      color: c,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: C({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: C({
      color: p,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: C({
      color: y,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: C({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: C({
      color: g,
      name: "success"
    }),
    // The grey colors.
    grey: tT,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: C,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: i,
    // The light and dark mode object.
    ...T
  }, s);
}
function a4(t) {
  const a = {};
  return Object.entries(t).forEach((i) => {
    const [s, c] = i;
    typeof c == "object" && (a[s] = `${c.fontStyle ? `${c.fontStyle} ` : ""}${c.fontVariant ? `${c.fontVariant} ` : ""}${c.fontWeight ? `${c.fontWeight} ` : ""}${c.fontStretch ? `${c.fontStretch} ` : ""}${c.fontSize || ""}${c.lineHeight ? `/${c.lineHeight} ` : ""}${c.fontFamily || ""}`);
  }), a;
}
function r4(t, a) {
  return {
    toolbar: {
      minHeight: 56,
      [t.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [t.up("sm")]: {
        minHeight: 64
      }
    },
    ...a
  };
}
function o4(t) {
  return Math.round(t * 1e5) / 1e5;
}
const Xb = {
  textTransform: "uppercase"
}, Kb = '"Roboto", "Helvetica", "Arial", sans-serif';
function tS(t, a) {
  const {
    fontFamily: o = Kb,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: c = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: m = 16,
    // Apply the CSS properties to all the variants.
    allVariants: g,
    pxToRem: y,
    ...h
  } = typeof a == "function" ? a(t) : a, C = i / 14, T = y || ((A) => `${A / m * C}rem`), R = (A, z, N, O, M) => ({
    fontFamily: o,
    fontWeight: A,
    fontSize: T(z),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === Kb ? {
      letterSpacing: `${o4(O / z)}em`
    } : {},
    ...M,
    ...g
  }), x = {
    h1: R(s, 96, 1.167, -1.5),
    h2: R(s, 60, 1.2, -0.5),
    h3: R(c, 48, 1.167, 0),
    h4: R(c, 34, 1.235, 0.25),
    h5: R(c, 24, 1.334, 0),
    h6: R(d, 20, 1.6, 0.15),
    subtitle1: R(c, 16, 1.75, 0.15),
    subtitle2: R(d, 14, 1.57, 0.1),
    body1: R(c, 16, 1.5, 0.15),
    body2: R(c, 14, 1.43, 0.15),
    button: R(d, 14, 1.75, 0.4, Xb),
    caption: R(c, 12, 1.66, 0.4),
    overline: R(c, 12, 2.66, 1, Xb),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return An({
    htmlFontSize: m,
    pxToRem: T,
    fontFamily: o,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: c,
    fontWeightMedium: d,
    fontWeightBold: p,
    ...x
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const l4 = 0.2, i4 = 0.14, s4 = 0.12;
function Pt(...t) {
  return [`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${l4})`, `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${i4})`, `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${s4})`].join(",");
}
const u4 = ["none", Pt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Pt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Pt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Pt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Pt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Pt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Pt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Pt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Pt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Pt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Pt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Pt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Pt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Pt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Pt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Pt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Pt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Pt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Pt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Pt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Pt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Pt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Pt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Pt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], c4 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, nS = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Wb(t) {
  return `${Math.round(t)}ms`;
}
function f4(t) {
  if (!t)
    return 0;
  const a = t / 36;
  return Math.min(Math.round((4 + 15 * a ** 0.25 + a / 5) * 10), 3e3);
}
function d4(t) {
  const a = {
    ...c4,
    ...t.easing
  }, o = {
    ...nS,
    ...t.duration
  };
  return {
    getAutoHeightDuration: f4,
    create: (s = ["all"], c = {}) => {
      const {
        duration: d = o.standard,
        easing: p = a.easeInOut,
        delay: m = 0,
        ...g
      } = c;
      return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof d == "string" ? d : Wb(d)} ${p} ${typeof m == "string" ? m : Wb(m)}`).join(",");
    },
    ...t,
    easing: a,
    duration: o
  };
}
const p4 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function m4(t) {
  return rr(t) || typeof t > "u" || typeof t == "string" || typeof t == "boolean" || typeof t == "number" || Array.isArray(t);
}
function aS(t = {}) {
  const a = {
    ...t
  };
  function o(i) {
    const s = Object.entries(i);
    for (let c = 0; c < s.length; c++) {
      const [d, p] = s[c];
      !m4(p) || d.startsWith("unstable_") ? delete i[d] : rr(p) && (i[d] = {
        ...p
      }, o(i[d]));
    }
  }
  return o(a), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(a, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function zm(t = {}, ...a) {
  const {
    breakpoints: o,
    mixins: i = {},
    spacing: s,
    palette: c = {},
    transitions: d = {},
    typography: p = {},
    shape: m,
    ...g
  } = t;
  if (t.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  t.generateThemeVars === void 0)
    throw new Error(Or(20));
  const y = Eh(c), h = fh(t);
  let C = An(h, {
    mixins: r4(h.breakpoints, i),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: u4.slice(),
    typography: tS(y, p),
    transitions: d4(d),
    zIndex: {
      ...p4
    }
  });
  return C = An(C, g), C = a.reduce((T, R) => An(T, R), C), C.unstable_sxConfig = {
    ...Ks,
    ...g == null ? void 0 : g.unstable_sxConfig
  }, C.unstable_sx = function(R) {
    return go({
      sx: R,
      theme: this
    });
  }, C.toRuntimeSource = aS, C;
}
function Dm(t) {
  let a;
  return t < 1 ? a = 5.11916 * t ** 2 : a = 4.5 * Math.log(t + 1) + 2, Math.round(a * 10) / 1e3;
}
const h4 = [...Array(25)].map((t, a) => {
  if (a === 0)
    return "none";
  const o = Dm(a);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function rS(t) {
  return {
    inputPlaceholder: t === "dark" ? 0.5 : 0.42,
    inputUnderline: t === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: t === "dark" ? 0.2 : 0.12,
    switchTrack: t === "dark" ? 0.3 : 0.38
  };
}
function oS(t) {
  return t === "dark" ? h4 : [];
}
function g4(t) {
  const {
    palette: a = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: i,
    ...s
  } = t, c = Eh(a);
  return {
    palette: c,
    opacity: {
      ...rS(c.mode),
      ...o
    },
    overlays: i || oS(c.mode),
    ...s
  };
}
function y4(t) {
  var a;
  return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || // ends with sxConfig
  t[0] === "palette" && !!((a = t[1]) != null && a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const v4 = (t) => [...[...Array(25)].map((a, o) => `--${t ? `${t}-` : ""}overlays-${o}`), `--${t ? `${t}-` : ""}palette-AppBar-darkBg`, `--${t ? `${t}-` : ""}palette-AppBar-darkColor`], b4 = (t) => (a, o) => {
  const i = t.rootSelector || ":root", s = t.colorSchemeSelector;
  let c = s;
  if (s === "class" && (c = ".%s"), s === "data" && (c = "[data-%s]"), s != null && s.startsWith("data-") && !s.includes("%s") && (c = `[${s}="%s"]`), t.defaultColorScheme === a) {
    if (a === "dark") {
      const d = {};
      return v4(t.cssVarPrefix).forEach((p) => {
        d[p] = o[p], delete o[p];
      }), c === "media" ? {
        [i]: o,
        "@media (prefers-color-scheme: dark)": {
          [i]: d
        }
      } : c ? {
        [c.replace("%s", a)]: d,
        [`${i}, ${c.replace("%s", a)}`]: o
      } : {
        [i]: {
          ...o,
          ...d
        }
      };
    }
    if (c && c !== "media")
      return `${i}, ${c.replace("%s", String(a))}`;
  } else if (a) {
    if (c === "media")
      return {
        [`@media (prefers-color-scheme: ${String(a)})`]: {
          [i]: o
        }
      };
    if (c)
      return c.replace("%s", String(a));
  }
  return i;
};
function x4(t, a) {
  a.forEach((o) => {
    t[o] || (t[o] = {});
  });
}
function ae(t, a, o) {
  !t[a] && o && (t[a] = o);
}
function ws(t) {
  return typeof t != "string" || !t.startsWith("hsl") ? t : Ux(t);
}
function wr(t, a) {
  `${a}Channel` in t || (t[`${a}Channel`] = Rs(ws(t[a])));
}
function S4(t) {
  return typeof t == "number" ? `${t}px` : typeof t == "string" || typeof t == "function" || Array.isArray(t) ? t : "8px";
}
const tr = (t) => {
  try {
    return t();
  } catch {
  }
}, C4 = (t = "mui") => qR(t);
function om(t, a, o, i) {
  if (!a)
    return;
  a = a === !0 ? {} : a;
  const s = i === "dark" ? "dark" : "light";
  if (!o) {
    t[i] = g4({
      ...a,
      palette: {
        mode: s,
        ...a == null ? void 0 : a.palette
      }
    });
    return;
  }
  const {
    palette: c,
    ...d
  } = zm({
    ...o,
    palette: {
      mode: s,
      ...a == null ? void 0 : a.palette
    }
  });
  return t[i] = {
    ...a,
    palette: c,
    opacity: {
      ...rS(s),
      ...a == null ? void 0 : a.opacity
    },
    overlays: (a == null ? void 0 : a.overlays) || oS(s)
  }, d;
}
function E4(t = {}, ...a) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: i,
    disableCssColorScheme: s = !1,
    cssVarPrefix: c = "mui",
    shouldSkipGeneratingVar: d = y4,
    colorSchemeSelector: p = o.light && o.dark ? "media" : void 0,
    rootSelector: m = ":root",
    ...g
  } = t, y = Object.keys(o)[0], h = i || (o.light && y !== "light" ? "light" : y), C = C4(c), {
    [h]: T,
    light: R,
    dark: x,
    ...A
  } = o, z = {
    ...A
  };
  let N = T;
  if ((h === "dark" && !("dark" in o) || h === "light" && !("light" in o)) && (N = !0), !N)
    throw new Error(Or(21, h));
  const O = om(z, N, g, h);
  R && !z.light && om(z, R, void 0, "light"), x && !z.dark && om(z, x, void 0, "dark");
  let M = {
    defaultColorScheme: h,
    ...O,
    cssVarPrefix: c,
    colorSchemeSelector: p,
    rootSelector: m,
    getCssVar: C,
    colorSchemes: z,
    font: {
      ...a4(O.typography),
      ...O.font
    },
    spacing: S4(g.spacing)
  };
  Object.keys(M.colorSchemes).forEach((F) => {
    const E = M.colorSchemes[F].palette, U = (P) => {
      const J = P.split("-"), te = J[1], X = J[2];
      return C(P, E[te][X]);
    };
    if (E.mode === "light" && (ae(E.common, "background", "#fff"), ae(E.common, "onBackground", "#000")), E.mode === "dark" && (ae(E.common, "background", "#000"), ae(E.common, "onBackground", "#fff")), x4(E, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), E.mode === "light") {
      ae(E.Alert, "errorColor", Dt(E.error.light, 0.6)), ae(E.Alert, "infoColor", Dt(E.info.light, 0.6)), ae(E.Alert, "successColor", Dt(E.success.light, 0.6)), ae(E.Alert, "warningColor", Dt(E.warning.light, 0.6)), ae(E.Alert, "errorFilledBg", U("palette-error-main")), ae(E.Alert, "infoFilledBg", U("palette-info-main")), ae(E.Alert, "successFilledBg", U("palette-success-main")), ae(E.Alert, "warningFilledBg", U("palette-warning-main")), ae(E.Alert, "errorFilledColor", tr(() => E.getContrastText(E.error.main))), ae(E.Alert, "infoFilledColor", tr(() => E.getContrastText(E.info.main))), ae(E.Alert, "successFilledColor", tr(() => E.getContrastText(E.success.main))), ae(E.Alert, "warningFilledColor", tr(() => E.getContrastText(E.warning.main))), ae(E.Alert, "errorStandardBg", Nt(E.error.light, 0.9)), ae(E.Alert, "infoStandardBg", Nt(E.info.light, 0.9)), ae(E.Alert, "successStandardBg", Nt(E.success.light, 0.9)), ae(E.Alert, "warningStandardBg", Nt(E.warning.light, 0.9)), ae(E.Alert, "errorIconColor", U("palette-error-main")), ae(E.Alert, "infoIconColor", U("palette-info-main")), ae(E.Alert, "successIconColor", U("palette-success-main")), ae(E.Alert, "warningIconColor", U("palette-warning-main")), ae(E.AppBar, "defaultBg", U("palette-grey-100")), ae(E.Avatar, "defaultBg", U("palette-grey-400")), ae(E.Button, "inheritContainedBg", U("palette-grey-300")), ae(E.Button, "inheritContainedHoverBg", U("palette-grey-A100")), ae(E.Chip, "defaultBorder", U("palette-grey-400")), ae(E.Chip, "defaultAvatarColor", U("palette-grey-700")), ae(E.Chip, "defaultIconColor", U("palette-grey-700")), ae(E.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), ae(E.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), ae(E.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), ae(E.LinearProgress, "primaryBg", Nt(E.primary.main, 0.62)), ae(E.LinearProgress, "secondaryBg", Nt(E.secondary.main, 0.62)), ae(E.LinearProgress, "errorBg", Nt(E.error.main, 0.62)), ae(E.LinearProgress, "infoBg", Nt(E.info.main, 0.62)), ae(E.LinearProgress, "successBg", Nt(E.success.main, 0.62)), ae(E.LinearProgress, "warningBg", Nt(E.warning.main, 0.62)), ae(E.Skeleton, "bg", `rgba(${U("palette-text-primaryChannel")} / 0.11)`), ae(E.Slider, "primaryTrack", Nt(E.primary.main, 0.62)), ae(E.Slider, "secondaryTrack", Nt(E.secondary.main, 0.62)), ae(E.Slider, "errorTrack", Nt(E.error.main, 0.62)), ae(E.Slider, "infoTrack", Nt(E.info.main, 0.62)), ae(E.Slider, "successTrack", Nt(E.success.main, 0.62)), ae(E.Slider, "warningTrack", Nt(E.warning.main, 0.62));
      const P = wc(E.background.default, 0.8);
      ae(E.SnackbarContent, "bg", P), ae(E.SnackbarContent, "color", tr(() => E.getContrastText(P))), ae(E.SpeedDialAction, "fabHoverBg", wc(E.background.paper, 0.15)), ae(E.StepConnector, "border", U("palette-grey-400")), ae(E.StepContent, "border", U("palette-grey-400")), ae(E.Switch, "defaultColor", U("palette-common-white")), ae(E.Switch, "defaultDisabledColor", U("palette-grey-100")), ae(E.Switch, "primaryDisabledColor", Nt(E.primary.main, 0.62)), ae(E.Switch, "secondaryDisabledColor", Nt(E.secondary.main, 0.62)), ae(E.Switch, "errorDisabledColor", Nt(E.error.main, 0.62)), ae(E.Switch, "infoDisabledColor", Nt(E.info.main, 0.62)), ae(E.Switch, "successDisabledColor", Nt(E.success.main, 0.62)), ae(E.Switch, "warningDisabledColor", Nt(E.warning.main, 0.62)), ae(E.TableCell, "border", Nt(Rc(E.divider, 1), 0.88)), ae(E.Tooltip, "bg", Rc(E.grey[700], 0.92));
    }
    if (E.mode === "dark") {
      ae(E.Alert, "errorColor", Nt(E.error.light, 0.6)), ae(E.Alert, "infoColor", Nt(E.info.light, 0.6)), ae(E.Alert, "successColor", Nt(E.success.light, 0.6)), ae(E.Alert, "warningColor", Nt(E.warning.light, 0.6)), ae(E.Alert, "errorFilledBg", U("palette-error-dark")), ae(E.Alert, "infoFilledBg", U("palette-info-dark")), ae(E.Alert, "successFilledBg", U("palette-success-dark")), ae(E.Alert, "warningFilledBg", U("palette-warning-dark")), ae(E.Alert, "errorFilledColor", tr(() => E.getContrastText(E.error.dark))), ae(E.Alert, "infoFilledColor", tr(() => E.getContrastText(E.info.dark))), ae(E.Alert, "successFilledColor", tr(() => E.getContrastText(E.success.dark))), ae(E.Alert, "warningFilledColor", tr(() => E.getContrastText(E.warning.dark))), ae(E.Alert, "errorStandardBg", Dt(E.error.light, 0.9)), ae(E.Alert, "infoStandardBg", Dt(E.info.light, 0.9)), ae(E.Alert, "successStandardBg", Dt(E.success.light, 0.9)), ae(E.Alert, "warningStandardBg", Dt(E.warning.light, 0.9)), ae(E.Alert, "errorIconColor", U("palette-error-main")), ae(E.Alert, "infoIconColor", U("palette-info-main")), ae(E.Alert, "successIconColor", U("palette-success-main")), ae(E.Alert, "warningIconColor", U("palette-warning-main")), ae(E.AppBar, "defaultBg", U("palette-grey-900")), ae(E.AppBar, "darkBg", U("palette-background-paper")), ae(E.AppBar, "darkColor", U("palette-text-primary")), ae(E.Avatar, "defaultBg", U("palette-grey-600")), ae(E.Button, "inheritContainedBg", U("palette-grey-800")), ae(E.Button, "inheritContainedHoverBg", U("palette-grey-700")), ae(E.Chip, "defaultBorder", U("palette-grey-700")), ae(E.Chip, "defaultAvatarColor", U("palette-grey-300")), ae(E.Chip, "defaultIconColor", U("palette-grey-300")), ae(E.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), ae(E.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), ae(E.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), ae(E.LinearProgress, "primaryBg", Dt(E.primary.main, 0.5)), ae(E.LinearProgress, "secondaryBg", Dt(E.secondary.main, 0.5)), ae(E.LinearProgress, "errorBg", Dt(E.error.main, 0.5)), ae(E.LinearProgress, "infoBg", Dt(E.info.main, 0.5)), ae(E.LinearProgress, "successBg", Dt(E.success.main, 0.5)), ae(E.LinearProgress, "warningBg", Dt(E.warning.main, 0.5)), ae(E.Skeleton, "bg", `rgba(${U("palette-text-primaryChannel")} / 0.13)`), ae(E.Slider, "primaryTrack", Dt(E.primary.main, 0.5)), ae(E.Slider, "secondaryTrack", Dt(E.secondary.main, 0.5)), ae(E.Slider, "errorTrack", Dt(E.error.main, 0.5)), ae(E.Slider, "infoTrack", Dt(E.info.main, 0.5)), ae(E.Slider, "successTrack", Dt(E.success.main, 0.5)), ae(E.Slider, "warningTrack", Dt(E.warning.main, 0.5));
      const P = wc(E.background.default, 0.98);
      ae(E.SnackbarContent, "bg", P), ae(E.SnackbarContent, "color", tr(() => E.getContrastText(P))), ae(E.SpeedDialAction, "fabHoverBg", wc(E.background.paper, 0.15)), ae(E.StepConnector, "border", U("palette-grey-600")), ae(E.StepContent, "border", U("palette-grey-600")), ae(E.Switch, "defaultColor", U("palette-grey-300")), ae(E.Switch, "defaultDisabledColor", U("palette-grey-600")), ae(E.Switch, "primaryDisabledColor", Dt(E.primary.main, 0.55)), ae(E.Switch, "secondaryDisabledColor", Dt(E.secondary.main, 0.55)), ae(E.Switch, "errorDisabledColor", Dt(E.error.main, 0.55)), ae(E.Switch, "infoDisabledColor", Dt(E.info.main, 0.55)), ae(E.Switch, "successDisabledColor", Dt(E.success.main, 0.55)), ae(E.Switch, "warningDisabledColor", Dt(E.warning.main, 0.55)), ae(E.TableCell, "border", Dt(Rc(E.divider, 1), 0.68)), ae(E.Tooltip, "bg", Rc(E.grey[700], 0.92));
    }
    wr(E.background, "default"), wr(E.background, "paper"), wr(E.common, "background"), wr(E.common, "onBackground"), wr(E, "divider"), Object.keys(E).forEach((P) => {
      const J = E[P];
      P !== "tonalOffset" && J && typeof J == "object" && (J.main && ae(E[P], "mainChannel", Rs(ws(J.main))), J.light && ae(E[P], "lightChannel", Rs(ws(J.light))), J.dark && ae(E[P], "darkChannel", Rs(ws(J.dark))), J.contrastText && ae(E[P], "contrastTextChannel", Rs(ws(J.contrastText))), P === "text" && (wr(E[P], "primary"), wr(E[P], "secondary")), P === "action" && (J.active && wr(E[P], "active"), J.selected && wr(E[P], "selected")));
    });
  }), M = a.reduce((F, E) => An(F, E), M);
  const D = {
    prefix: c,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: d,
    getSelector: b4(M)
  }, {
    vars: _,
    generateThemeVars: L,
    generateStyleSheets: k
  } = XR(M, D);
  return M.vars = _, Object.entries(M.colorSchemes[M.defaultColorScheme]).forEach(([F, E]) => {
    M[F] = E;
  }), M.generateThemeVars = L, M.generateStyleSheets = k, M.generateSpacing = function() {
    return uh(g.spacing, sh(this));
  }, M.getColorSchemeSelector = KR(p), M.spacing = M.generateSpacing(), M.shouldSkipGeneratingVar = d, M.unstable_sxConfig = {
    ...Ks,
    ...g == null ? void 0 : g.unstable_sxConfig
  }, M.unstable_sx = function(E) {
    return go({
      sx: E,
      theme: this
    });
  }, M.toRuntimeSource = aS, M;
}
function Qb(t, a, o) {
  t.colorSchemes && o && (t.colorSchemes[a] = {
    ...o !== !0 && o,
    palette: Eh({
      ...o === !0 ? {} : o.palette,
      mode: a
    })
    // cast type to skip module augmentation test
  });
}
function ks(t = {}, ...a) {
  const {
    palette: o,
    cssVariables: i = !1,
    colorSchemes: s = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: c = o == null ? void 0 : o.mode,
    ...d
  } = t, p = c || "light", m = s == null ? void 0 : s[p], g = {
    ...s,
    ...o ? {
      [p]: {
        ...typeof m != "boolean" && m,
        palette: o
      }
    } : void 0
  };
  if (i === !1) {
    if (!("colorSchemes" in t))
      return zm(t, ...a);
    let y = o;
    "palette" in t || g[p] && (g[p] !== !0 ? y = g[p].palette : p === "dark" && (y = {
      mode: "dark"
    }));
    const h = zm({
      ...t,
      palette: y
    }, ...a);
    return h.defaultColorScheme = p, h.colorSchemes = g, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...g.light !== !0 && g.light,
      palette: h.palette
    }, Qb(h, "dark", g.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...g.dark !== !0 && g.dark,
      palette: h.palette
    }, Qb(h, "light", g.light)), h;
  }
  return !o && !("light" in g) && p === "light" && (g.light = !0), E4({
    ...d,
    colorSchemes: g,
    defaultColorScheme: p,
    ...typeof i != "boolean" && i
  }, ...a);
}
const Th = ks();
function bo() {
  const t = dh(Th);
  return t[ka] || t;
}
function Rh(t) {
  return t !== "ownerState" && t !== "theme" && t !== "sx" && t !== "as";
}
const qn = (t) => Rh(t) && t !== "classes", pe = iR({
  themeId: ka,
  defaultTheme: Th,
  rootShouldForwardProp: qn
});
function T4({
  theme: t,
  ...a
}) {
  const o = ka in t ? t[ka] : void 0;
  return /* @__PURE__ */ S.jsx(Qx, {
    ...a,
    themeId: o ? ka : void 0,
    theme: o || t
  });
}
const Ac = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: R4
} = VR({
  themeId: ka,
  // @ts-ignore ignore module augmentation tests
  theme: () => ks({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ac.colorSchemeStorageKey,
  modeStorageKey: Ac.modeStorageKey,
  defaultColorScheme: {
    light: Ac.defaultLightColorScheme,
    dark: Ac.defaultDarkColorScheme
  },
  resolveTheme: (t) => {
    const a = {
      ...t,
      typography: tS(t.palette, t.typography)
    };
    return a.unstable_sx = function(i) {
      return go({
        sx: i,
        theme: this
      });
    }, a;
  }
}), w4 = R4;
function A4({
  theme: t,
  ...a
}) {
  const o = b.useMemo(() => {
    if (typeof t == "function")
      return t;
    const i = ka in t ? t[ka] : t;
    return "colorSchemes" in i ? null : "vars" in i ? t : {
      ...t,
      vars: null
    };
  }, [t]);
  return o ? /* @__PURE__ */ S.jsx(T4, {
    theme: o,
    ...a
  }) : /* @__PURE__ */ S.jsx(w4, {
    theme: t,
    ...a
  });
}
function O4(t) {
  return /* @__PURE__ */ S.jsx(Dx, {
    ...t,
    defaultTheme: Th,
    themeId: ka
  });
}
function M4(t) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ S.jsx(O4, {
        styles: typeof t == "function" ? (i) => t({
          theme: i,
          ...o
        }) : t
      })
    );
  };
}
function z4() {
  return Nx;
}
const qe = LR;
function at(t) {
  return jR(t);
}
function D4(t) {
  return et("MuiSvgIcon", t);
}
Ke("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const N4 = (t) => {
  const {
    color: a,
    fontSize: o,
    classes: i
  } = t, s = {
    root: ["root", a !== "inherit" && `color${ce(a)}`, `fontSize${ce(o)}`]
  };
  return tt(s, D4, i);
}, B4 = pe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.color !== "inherit" && a[`color${ce(o.color)}`], a[`fontSize${ce(o.fontSize)}`]];
  }
})(qe(({
  theme: t
}) => {
  var a, o, i, s, c, d, p, m, g, y, h, C, T, R;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (s = (a = t.transitions) == null ? void 0 : a.create) == null ? void 0 : s.call(a, "fill", {
      duration: (i = (o = (t.vars ?? t).transitions) == null ? void 0 : o.duration) == null ? void 0 : i.shorter
    }),
    variants: [
      {
        props: (x) => !x.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((d = (c = t.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : d.call(c, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((m = (p = t.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : m.call(p, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((y = (g = t.typography) == null ? void 0 : g.pxToRem) == null ? void 0 : y.call(g, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((t.vars ?? t).palette).filter(([, x]) => x && x.main).map(([x]) => {
        var A, z;
        return {
          props: {
            color: x
          },
          style: {
            color: (z = (A = (t.vars ?? t).palette) == null ? void 0 : A[x]) == null ? void 0 : z.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (C = (h = (t.vars ?? t).palette) == null ? void 0 : h.action) == null ? void 0 : C.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (R = (T = (t.vars ?? t).palette) == null ? void 0 : T.action) == null ? void 0 : R.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Nm = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: c,
    color: d = "inherit",
    component: p = "svg",
    fontSize: m = "medium",
    htmlColor: g,
    inheritViewBox: y = !1,
    titleAccess: h,
    viewBox: C = "0 0 24 24",
    ...T
  } = i, R = /* @__PURE__ */ b.isValidElement(s) && s.type === "svg", x = {
    ...i,
    color: d,
    component: p,
    fontSize: m,
    instanceFontSize: a.fontSize,
    inheritViewBox: y,
    viewBox: C,
    hasSvgAsChild: R
  }, A = {};
  y || (A.viewBox = C);
  const z = N4(x);
  return /* @__PURE__ */ S.jsxs(B4, {
    as: p,
    className: Te(z.root, c),
    focusable: "false",
    color: g,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: o,
    ...A,
    ...T,
    ...R && s.props,
    ownerState: x,
    children: [R ? s.props.children : s, h ? /* @__PURE__ */ S.jsx("title", {
      children: h
    }) : null]
  });
});
Nm.muiName = "SvgIcon";
function Et(t, a) {
  function o(i, s) {
    return /* @__PURE__ */ S.jsx(Nm, {
      "data-testid": `${a}Icon`,
      ref: s,
      ...i,
      children: t
    });
  }
  return o.muiName = Nm.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(o));
}
function lS(t, a) {
  if (!t)
    return a;
  if (typeof t == "function" || typeof a == "function")
    return (s) => {
      const c = typeof a == "function" ? a(s) : a, d = typeof t == "function" ? t({
        ...s,
        ...c
      }) : t, p = Te(s == null ? void 0 : s.className, c == null ? void 0 : c.className, d == null ? void 0 : d.className);
      return {
        ...c,
        ...d,
        ...!!p && {
          className: p
        },
        ...(c == null ? void 0 : c.style) && (d == null ? void 0 : d.style) && {
          style: {
            ...c.style,
            ...d.style
          }
        },
        ...(c == null ? void 0 : c.sx) && (d == null ? void 0 : d.sx) && {
          sx: [...Array.isArray(c.sx) ? c.sx : [c.sx], ...Array.isArray(d.sx) ? d.sx : [d.sx]]
        }
      };
    };
  const o = a, i = Te(o == null ? void 0 : o.className, t == null ? void 0 : t.className);
  return {
    ...a,
    ...t,
    ...!!i && {
      className: i
    },
    ...(o == null ? void 0 : o.style) && (t == null ? void 0 : t.style) && {
      style: {
        ...o.style,
        ...t.style
      }
    },
    ...(o == null ? void 0 : o.sx) && (t == null ? void 0 : t.sx) && {
      sx: [...Array.isArray(o.sx) ? o.sx : [o.sx], ...Array.isArray(t.sx) ? t.sx : [t.sx]]
    }
  };
}
function iS(t, a) {
  if (t == null) return {};
  var o = {};
  for (var i in t) if ({}.hasOwnProperty.call(t, i)) {
    if (a.indexOf(i) !== -1) continue;
    o[i] = t[i];
  }
  return o;
}
function Bm(t, a) {
  return Bm = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, Bm(t, a);
}
function sS(t, a) {
  t.prototype = Object.create(a.prototype), t.prototype.constructor = t, Bm(t, a);
}
var lm = { exports: {} }, xn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zb;
function j4() {
  if (Zb) return xn;
  Zb = 1;
  var t = Qm();
  function a(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        h += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + y + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var i = {
    d: {
      f: o,
      r: function() {
        throw Error(a(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal"), c = Symbol.for("react.recoverable"), d = Symbol.for("react.optimistic_key");
  function p(y, h, C) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: T == null ? null : T === d ? d : "" + T,
      children: y,
      containerInfo: h,
      implementation: C
    };
  }
  var m = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(y, h) {
    if (y === "font") return "";
    if (typeof h == "string")
      return h === "use-credentials" ? h : "";
  }
  return xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, xn.browser = function(y) {
    return { $$typeof: c, _reason: y };
  }, xn.createPortal = function(y, h) {
    var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11)
      throw Error(a(299));
    return p(y, h, null, C);
  }, xn.flushSync = function(y) {
    var h = m.T, C = i.p;
    try {
      if (m.T = null, i.p = 2, y) return y();
    } finally {
      m.T = h, i.p = C, i.d.f();
    }
  }, xn.preconnect = function(y, h) {
    typeof y == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, i.d.C(y, h));
  }, xn.prefetchDNS = function(y) {
    typeof y == "string" && i.d.D(y);
  }, xn.preinit = function(y, h) {
    if (typeof y == "string" && h && typeof h.as == "string") {
      var C = h.as, T = g(C, h.crossOrigin), R = typeof h.integrity == "string" ? h.integrity : void 0, x = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      C === "style" ? i.d.S(
        y,
        typeof h.precedence == "string" ? h.precedence : void 0,
        {
          crossOrigin: T,
          integrity: R,
          fetchPriority: x
        }
      ) : C === "script" && i.d.X(y, {
        crossOrigin: T,
        integrity: R,
        fetchPriority: x,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, xn.preinitModule = function(y, h) {
    if (typeof y == "string")
      if (typeof h == "object" && h !== null) {
        if (h.as == null || h.as === "script") {
          var C = g(
            h.as,
            h.crossOrigin
          );
          i.d.M(y, {
            crossOrigin: C,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
            nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0
          });
        }
      } else h == null && i.d.M(y);
  }, xn.preload = function(y, h) {
    if (typeof y == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var C = h.as, T = g(C, h.crossOrigin);
      i.d.L(y, C, {
        crossOrigin: T,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, xn.preloadModule = function(y, h) {
    if (typeof y == "string")
      if (h) {
        var C = g(h.as, h.crossOrigin);
        i.d.m(y, {
          as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
          crossOrigin: C,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0
        });
      } else i.d.m(y);
  }, xn.requestFormReset = function(y) {
    i.d.r(y);
  }, xn.unstable_batchedUpdates = function(y, h) {
    return y(h);
  }, xn.useFormState = function(y, h, C) {
    return m.H.useFormState(y, h, C);
  }, xn.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, xn.version = "19.3.1", xn;
}
var Jb;
function uS() {
  if (Jb) return lm.exports;
  Jb = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return t(), lm.exports = j4(), lm.exports;
}
var cS = uS();
const Oc = /* @__PURE__ */ Wm(cS), e1 = {
  disabled: !1
}, Yc = Le.createContext(null);
var $4 = function(a) {
  return a.scrollTop;
}, As = "unmounted", Ko = "exited", Wo = "entering", ti = "entered", jm = "exiting", wa = /* @__PURE__ */ (function(t) {
  sS(a, t);
  function a(i, s) {
    var c;
    c = t.call(this, i, s) || this;
    var d = s, p = d && !d.isMounting ? i.enter : i.appear, m;
    return c.appearStatus = null, i.in ? p ? (m = Ko, c.appearStatus = Wo) : m = ti : i.unmountOnExit || i.mountOnEnter ? m = As : m = Ko, c.state = {
      status: m
    }, c.nextCallback = null, c;
  }
  a.getDerivedStateFromProps = function(s, c) {
    var d = s.in;
    return d && c.status === As ? {
      status: Ko
    } : null;
  };
  var o = a.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(s) {
    var c = null;
    if (s !== this.props) {
      var d = this.state.status;
      this.props.in ? d !== Wo && d !== ti && (c = Wo) : (d === Wo || d === ti) && (c = jm);
    }
    this.updateStatus(!1, c);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var s = this.props.timeout, c, d, p;
    return c = d = p = s, s != null && typeof s != "number" && (c = s.exit, d = s.enter, p = s.appear !== void 0 ? s.appear : d), {
      exit: c,
      enter: d,
      appear: p
    };
  }, o.updateStatus = function(s, c) {
    if (s === void 0 && (s = !1), c !== null)
      if (this.cancelNextCallback(), c === Wo) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var d = this.props.nodeRef ? this.props.nodeRef.current : Oc.findDOMNode(this);
          d && $4(d);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Ko && this.setState({
      status: As
    });
  }, o.performEnter = function(s) {
    var c = this, d = this.props.enter, p = this.context ? this.context.isMounting : s, m = this.props.nodeRef ? [p] : [Oc.findDOMNode(this), p], g = m[0], y = m[1], h = this.getTimeouts(), C = p ? h.appear : h.enter;
    if (!s && !d || e1.disabled) {
      this.safeSetState({
        status: ti
      }, function() {
        c.props.onEntered(g);
      });
      return;
    }
    this.props.onEnter(g, y), this.safeSetState({
      status: Wo
    }, function() {
      c.props.onEntering(g, y), c.onTransitionEnd(C, function() {
        c.safeSetState({
          status: ti
        }, function() {
          c.props.onEntered(g, y);
        });
      });
    });
  }, o.performExit = function() {
    var s = this, c = this.props.exit, d = this.getTimeouts(), p = this.props.nodeRef ? void 0 : Oc.findDOMNode(this);
    if (!c || e1.disabled) {
      this.safeSetState({
        status: Ko
      }, function() {
        s.props.onExited(p);
      });
      return;
    }
    this.props.onExit(p), this.safeSetState({
      status: jm
    }, function() {
      s.props.onExiting(p), s.onTransitionEnd(d.exit, function() {
        s.safeSetState({
          status: Ko
        }, function() {
          s.props.onExited(p);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(s, c) {
    c = this.setNextCallback(c), this.setState(s, c);
  }, o.setNextCallback = function(s) {
    var c = this, d = !0;
    return this.nextCallback = function(p) {
      d && (d = !1, c.nextCallback = null, s(p));
    }, this.nextCallback.cancel = function() {
      d = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(s, c) {
    this.setNextCallback(c);
    var d = this.props.nodeRef ? this.props.nodeRef.current : Oc.findDOMNode(this), p = s == null && !this.props.addEndListener;
    if (!d || p) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var m = this.props.nodeRef ? [this.nextCallback] : [d, this.nextCallback], g = m[0], y = m[1];
      this.props.addEndListener(g, y);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, o.render = function() {
    var s = this.state.status;
    if (s === As)
      return null;
    var c = this.props, d = c.children;
    c.in, c.mountOnEnter, c.unmountOnExit, c.appear, c.enter, c.exit, c.timeout, c.addEndListener, c.onEnter, c.onEntering, c.onEntered, c.onExit, c.onExiting, c.onExited, c.nodeRef;
    var p = iS(c, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Le.createElement(Yc.Provider, {
        value: null
      }, typeof d == "function" ? d(s, p) : Le.cloneElement(Le.Children.only(d), p))
    );
  }, a;
})(Le.Component);
wa.contextType = Yc;
wa.propTypes = {};
function Jl() {
}
wa.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Jl,
  onEntering: Jl,
  onEntered: Jl,
  onExit: Jl,
  onExiting: Jl,
  onExited: Jl
};
wa.UNMOUNTED = As;
wa.EXITED = Ko;
wa.ENTERING = Wo;
wa.ENTERED = ti;
wa.EXITING = jm;
function L4(t) {
  if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function wh(t, a) {
  var o = function(c) {
    return a && b.isValidElement(c) ? a(c) : c;
  }, i = /* @__PURE__ */ Object.create(null);
  return t && b.Children.map(t, function(s) {
    return s;
  }).forEach(function(s) {
    i[s.key] = o(s);
  }), i;
}
function _4(t, a) {
  t = t || {}, a = a || {};
  function o(y) {
    return y in a ? a[y] : t[y];
  }
  var i = /* @__PURE__ */ Object.create(null), s = [];
  for (var c in t)
    c in a ? s.length && (i[c] = s, s = []) : s.push(c);
  var d, p = {};
  for (var m in a) {
    if (i[m])
      for (d = 0; d < i[m].length; d++) {
        var g = i[m][d];
        p[i[m][d]] = o(g);
      }
    p[m] = o(m);
  }
  for (d = 0; d < s.length; d++)
    p[s[d]] = o(s[d]);
  return p;
}
function Zo(t, a, o) {
  return o[a] != null ? o[a] : t.props[a];
}
function k4(t, a) {
  return wh(t.children, function(o) {
    return b.cloneElement(o, {
      onExited: a.bind(null, o),
      in: !0,
      appear: Zo(o, "appear", t),
      enter: Zo(o, "enter", t),
      exit: Zo(o, "exit", t)
    });
  });
}
function H4(t, a, o) {
  var i = wh(t.children), s = _4(a, i);
  return Object.keys(s).forEach(function(c) {
    var d = s[c];
    if (b.isValidElement(d)) {
      var p = c in a, m = c in i, g = a[c], y = b.isValidElement(g) && !g.props.in;
      m && (!p || y) ? s[c] = b.cloneElement(d, {
        onExited: o.bind(null, d),
        in: !0,
        exit: Zo(d, "exit", t),
        enter: Zo(d, "enter", t)
      }) : !m && p && !y ? s[c] = b.cloneElement(d, {
        in: !1
      }) : m && p && b.isValidElement(g) && (s[c] = b.cloneElement(d, {
        onExited: o.bind(null, d),
        in: g.props.in,
        exit: Zo(d, "exit", t),
        enter: Zo(d, "enter", t)
      }));
    }
  }), s;
}
var U4 = Object.values || function(t) {
  return Object.keys(t).map(function(a) {
    return t[a];
  });
}, I4 = {
  component: "div",
  childFactory: function(a) {
    return a;
  }
}, Ah = /* @__PURE__ */ (function(t) {
  sS(a, t);
  function a(i, s) {
    var c;
    c = t.call(this, i, s) || this;
    var d = c.handleExited.bind(L4(c));
    return c.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: d,
      firstRender: !0
    }, c;
  }
  var o = a.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, a.getDerivedStateFromProps = function(s, c) {
    var d = c.children, p = c.handleExited, m = c.firstRender;
    return {
      children: m ? k4(s, p) : H4(s, d, p),
      firstRender: !1
    };
  }, o.handleExited = function(s, c) {
    var d = wh(this.props.children);
    s.key in d || (s.props.onExited && s.props.onExited(c), this.mounted && this.setState(function(p) {
      var m = Fc({}, p.children);
      return delete m[s.key], {
        children: m
      };
    }));
  }, o.render = function() {
    var s = this.props, c = s.component, d = s.childFactory, p = iS(s, ["component", "childFactory"]), m = this.state.contextValue, g = U4(this.state.children).map(d);
    return delete p.appear, delete p.enter, delete p.exit, c === null ? /* @__PURE__ */ Le.createElement(Yc.Provider, {
      value: m
    }, g) : /* @__PURE__ */ Le.createElement(Yc.Provider, {
      value: m
    }, /* @__PURE__ */ Le.createElement(c, p, g));
  }, a;
})(Le.Component);
Ah.propTypes = {};
Ah.defaultProps = I4;
const Oh = (t) => t.scrollTop;
function vo(t, a) {
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = t;
  return {
    duration: s.transitionDuration ?? (typeof o == "number" ? o : o[a.mode] || 0),
    easing: s.transitionTimingFunction ?? (typeof i == "object" ? i[a.mode] : i),
    delay: s.transitionDelay
  };
}
function P4(t) {
  return et("MuiCollapse", t);
}
Ke("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const F4 = (t) => {
  const {
    orientation: a,
    classes: o
  } = t, i = {
    root: ["root", `${a}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${a}`],
    wrapperInner: ["wrapperInner", `${a}`]
  };
  return tt(i, P4, o);
}, V4 = pe("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, a[o.orientation], o.state === "entered" && a.entered, o.state === "exited" && !o.in && o.collapsedSize === "0px" && a.hidden];
  }
})(qe(({
  theme: t
}) => ({
  height: 0,
  overflow: "hidden",
  transition: t.transitions.create("height"),
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "auto",
      width: 0,
      transition: t.transitions.create("width")
    }
  }, {
    props: {
      state: "entered"
    },
    style: {
      height: "auto",
      overflow: "visible"
    }
  }, {
    props: {
      state: "entered",
      orientation: "horizontal"
    },
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.state === "exited" && !a.in && a.collapsedSize === "0px",
    style: {
      visibility: "hidden"
    }
  }]
}))), q4 = pe("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (t, a) => a.wrapper
})({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), G4 = pe("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (t, a) => a.wrapperInner
})({
  width: "100%",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "auto",
      height: "100%"
    }
  }]
}), $m = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiCollapse"
  }), {
    addEndListener: s,
    children: c,
    className: d,
    collapsedSize: p = "0px",
    component: m,
    easing: g,
    in: y,
    onEnter: h,
    onEntered: C,
    onEntering: T,
    onExit: R,
    onExited: x,
    onExiting: A,
    orientation: z = "vertical",
    style: N,
    timeout: O = nS.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: M = wa,
    ...D
  } = i, _ = {
    ...i,
    orientation: z,
    collapsedSize: p
  }, L = F4(_), k = bo(), F = vh(), E = b.useRef(null), U = b.useRef(), P = typeof p == "number" ? `${p}px` : p, J = z === "horizontal", te = J ? "width" : "height", X = b.useRef(null), j = Jt(o, X), Y = (ne) => (fe) => {
    if (ne) {
      const me = X.current;
      fe === void 0 ? ne(me) : ne(me, fe);
    }
  }, W = () => E.current ? E.current[J ? "clientWidth" : "clientHeight"] : 0, G = Y((ne, fe) => {
    E.current && J && (E.current.style.position = "absolute"), ne.style[te] = P, h && h(ne, fe);
  }), de = Y((ne, fe) => {
    const me = W();
    E.current && J && (E.current.style.position = "");
    const {
      duration: ve,
      easing: he
    } = vo({
      style: N,
      timeout: O,
      easing: g
    }, {
      mode: "enter"
    });
    if (O === "auto") {
      const se = k.transitions.getAutoHeightDuration(me);
      ne.style.transitionDuration = `${se}ms`, U.current = se;
    } else
      ne.style.transitionDuration = typeof ve == "string" ? ve : `${ve}ms`;
    ne.style[te] = `${me}px`, ne.style.transitionTimingFunction = he, T && T(ne, fe);
  }), xe = Y((ne, fe) => {
    ne.style[te] = "auto", C && C(ne, fe);
  }), Ne = Y((ne) => {
    ne.style[te] = `${W()}px`, R && R(ne);
  }), Me = Y(x), B = Y((ne) => {
    const fe = W(), {
      duration: me,
      easing: ve
    } = vo({
      style: N,
      timeout: O,
      easing: g
    }, {
      mode: "exit"
    });
    if (O === "auto") {
      const he = k.transitions.getAutoHeightDuration(fe);
      ne.style.transitionDuration = `${he}ms`, U.current = he;
    } else
      ne.style.transitionDuration = typeof me == "string" ? me : `${me}ms`;
    ne.style[te] = P, ne.style.transitionTimingFunction = ve, A && A(ne);
  }), Z = (ne) => {
    O === "auto" && F.start(U.current || 0, ne), s && s(X.current, ne);
  };
  return /* @__PURE__ */ S.jsx(M, {
    in: y,
    onEnter: G,
    onEntered: xe,
    onEntering: de,
    onExit: Ne,
    onExited: Me,
    onExiting: B,
    addEndListener: Z,
    nodeRef: X,
    timeout: O === "auto" ? null : O,
    ...D,
    children: (ne, {
      ownerState: fe,
      ...me
    }) => /* @__PURE__ */ S.jsx(V4, {
      as: m,
      className: Te(L.root, d, {
        entered: L.entered,
        exited: !y && P === "0px" && L.hidden
      }[ne]),
      style: {
        [J ? "minWidth" : "minHeight"]: P,
        ...N
      },
      ref: j,
      ownerState: {
        ..._,
        state: ne
      },
      ...me,
      children: /* @__PURE__ */ S.jsx(q4, {
        ownerState: {
          ..._,
          state: ne
        },
        className: L.wrapper,
        ref: E,
        children: /* @__PURE__ */ S.jsx(G4, {
          ownerState: {
            ..._,
            state: ne
          },
          className: L.wrapperInner,
          children: c
        })
      })
    })
  });
});
$m && ($m.muiSupportAuto = !0);
function Y4(t) {
  return et("MuiPaper", t);
}
Ke("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const X4 = (t) => {
  const {
    square: a,
    elevation: o,
    variant: i,
    classes: s
  } = t, c = {
    root: ["root", i, !a && "rounded", i === "elevation" && `elevation${o}`]
  };
  return tt(c, Y4, s);
}, K4 = pe("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, a[o.variant], !o.square && a.rounded, o.variant === "elevation" && a[`elevation${o.elevation}`]];
  }
})(qe(({
  theme: t
}) => ({
  backgroundColor: (t.vars || t).palette.background.paper,
  color: (t.vars || t).palette.text.primary,
  transition: t.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: a
    }) => !a.square,
    style: {
      borderRadius: t.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(t.vars || t).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), al = /* @__PURE__ */ b.forwardRef(function(a, o) {
  var T;
  const i = at({
    props: a,
    name: "MuiPaper"
  }), s = bo(), {
    className: c,
    component: d = "div",
    elevation: p = 1,
    square: m = !1,
    variant: g = "elevation",
    ...y
  } = i, h = {
    ...i,
    component: d,
    elevation: p,
    square: m,
    variant: g
  }, C = X4(h);
  return /* @__PURE__ */ S.jsx(K4, {
    as: d,
    ownerState: h,
    className: Te(C.root, c),
    ref: o,
    ...y,
    style: {
      ...g === "elevation" && {
        "--Paper-shadow": (s.vars || s).shadows[p],
        ...s.vars && {
          "--Paper-overlay": (T = s.vars.overlays) == null ? void 0 : T[p]
        },
        ...!s.vars && s.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${dt("#fff", Dm(p))}, ${dt("#fff", Dm(p))})`
        }
      },
      ...y.style
    }
  });
});
function pt(t, a) {
  const {
    className: o,
    elementType: i,
    ownerState: s,
    externalForwardedProps: c,
    internalForwardedProps: d,
    shouldForwardComponentProp: p = !1,
    ...m
  } = a, {
    component: g,
    slots: y = {
      [t]: void 0
    },
    slotProps: h = {
      [t]: void 0
    },
    ...C
  } = c, T = y[t] || i, R = Gx(h[t], s), {
    props: {
      component: x,
      ...A
    },
    internalRef: z
  } = qx({
    className: o,
    ...m,
    externalForwardedProps: t === "root" ? C : void 0,
    externalSlotProps: R
  }), N = Jt(z, R == null ? void 0 : R.ref, a.ref), O = t === "root" ? x || g : x, M = Fx(T, {
    ...t === "root" && !g && !y[t] && d,
    ...t !== "root" && !y[t] && d,
    ...A,
    ...O && !p && {
      as: O
    },
    ...O && p && {
      component: O
    },
    ref: N
  }, s);
  return [T, M];
}
class Xc {
  constructor() {
    Yl(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Xc();
  }
  static use() {
    const a = Ix(Xc.create).current, [o, i] = b.useState(!1);
    return a.shouldMount = o, a.setShouldMount = i, b.useEffect(a.mountEffect, [o]), a;
  }
  mount() {
    return this.mounted || (this.mounted = Q4(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...a) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.start(...a);
    });
  }
  stop(...a) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.stop(...a);
    });
  }
  pulsate(...a) {
    this.mount().then(() => {
      var o;
      return (o = this.ref.current) == null ? void 0 : o.pulsate(...a);
    });
  }
}
function W4() {
  return Xc.use();
}
function Q4() {
  let t, a;
  const o = new Promise((i, s) => {
    t = i, a = s;
  });
  return o.resolve = t, o.reject = a, o;
}
function Z4(t) {
  const {
    className: a,
    classes: o,
    pulsate: i = !1,
    rippleX: s,
    rippleY: c,
    rippleSize: d,
    in: p,
    onExited: m,
    timeout: g
  } = t, [y, h] = b.useState(!1), C = Te(a, o.ripple, o.rippleVisible, i && o.ripplePulsate), T = {
    width: d,
    height: d,
    top: -(d / 2) + c,
    left: -(d / 2) + s
  }, R = Te(o.child, y && o.childLeaving, i && o.childPulsate);
  return !p && !y && h(!0), b.useEffect(() => {
    if (!p && m != null) {
      const x = setTimeout(m, g);
      return () => {
        clearTimeout(x);
      };
    }
  }, [m, p, g]), /* @__PURE__ */ S.jsx("span", {
    className: C,
    style: T,
    children: /* @__PURE__ */ S.jsx("span", {
      className: R
    })
  });
}
const xa = Ke("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Lm = 550, J4 = 80, ew = Gs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, tw = Gs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, nw = Gs`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, aw = pe("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), rw = pe(Z4, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${xa.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ew};
    animation-duration: ${Lm}ms;
    animation-timing-function: ${({
  theme: t
}) => t.transitions.easing.easeInOut};
  }

  &.${xa.ripplePulsate} {
    animation-duration: ${({
  theme: t
}) => t.transitions.duration.shorter}ms;
  }

  & .${xa.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${xa.childLeaving} {
    opacity: 0;
    animation-name: ${tw};
    animation-duration: ${Lm}ms;
    animation-timing-function: ${({
  theme: t
}) => t.transitions.easing.easeInOut};
  }

  & .${xa.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${nw};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: t
}) => t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, ow = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: c = {},
    className: d,
    ...p
  } = i, [m, g] = b.useState([]), y = b.useRef(0), h = b.useRef(null);
  b.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [m]);
  const C = b.useRef(!1), T = vh(), R = b.useRef(null), x = b.useRef(null), A = b.useCallback((M) => {
    const {
      pulsate: D,
      rippleX: _,
      rippleY: L,
      rippleSize: k,
      cb: F
    } = M;
    g((E) => [...E, /* @__PURE__ */ S.jsx(rw, {
      classes: {
        ripple: Te(c.ripple, xa.ripple),
        rippleVisible: Te(c.rippleVisible, xa.rippleVisible),
        ripplePulsate: Te(c.ripplePulsate, xa.ripplePulsate),
        child: Te(c.child, xa.child),
        childLeaving: Te(c.childLeaving, xa.childLeaving),
        childPulsate: Te(c.childPulsate, xa.childPulsate)
      },
      timeout: Lm,
      pulsate: D,
      rippleX: _,
      rippleY: L,
      rippleSize: k
    }, y.current)]), y.current += 1, h.current = F;
  }, [c]), z = b.useCallback((M = {}, D = {}, _ = () => {
  }) => {
    const {
      pulsate: L = !1,
      center: k = s || D.pulsate,
      fakeElement: F = !1
      // For test purposes
    } = D;
    if ((M == null ? void 0 : M.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (C.current = !0);
    const E = F ? null : x.current, U = E ? E.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let P, J, te;
    if (k || M === void 0 || M.clientX === 0 && M.clientY === 0 || !M.clientX && !M.touches)
      P = Math.round(U.width / 2), J = Math.round(U.height / 2);
    else {
      const {
        clientX: X,
        clientY: j
      } = M.touches && M.touches.length > 0 ? M.touches[0] : M;
      P = Math.round(X - U.left), J = Math.round(j - U.top);
    }
    if (k)
      te = Math.sqrt((2 * U.width ** 2 + U.height ** 2) / 3), te % 2 === 0 && (te += 1);
    else {
      const X = Math.max(Math.abs((E ? E.clientWidth : 0) - P), P) * 2 + 2, j = Math.max(Math.abs((E ? E.clientHeight : 0) - J), J) * 2 + 2;
      te = Math.sqrt(X ** 2 + j ** 2);
    }
    M != null && M.touches ? R.current === null && (R.current = () => {
      A({
        pulsate: L,
        rippleX: P,
        rippleY: J,
        rippleSize: te,
        cb: _
      });
    }, T.start(J4, () => {
      R.current && (R.current(), R.current = null);
    })) : A({
      pulsate: L,
      rippleX: P,
      rippleY: J,
      rippleSize: te,
      cb: _
    });
  }, [s, A, T]), N = b.useCallback(() => {
    z({}, {
      pulsate: !0
    });
  }, [z]), O = b.useCallback((M, D) => {
    if (T.clear(), (M == null ? void 0 : M.type) === "touchend" && R.current) {
      R.current(), R.current = null, T.start(0, () => {
        O(M, D);
      });
      return;
    }
    R.current = null, g((_) => _.length > 0 ? _.slice(1) : _), h.current = D;
  }, [T]);
  return b.useImperativeHandle(o, () => ({
    pulsate: N,
    start: z,
    stop: O
  }), [N, z, O]), /* @__PURE__ */ S.jsx(aw, {
    className: Te(xa.root, c.root, d),
    ref: x,
    ...p,
    children: /* @__PURE__ */ S.jsx(Ah, {
      component: null,
      exit: !0,
      children: m
    })
  });
});
function lw(t) {
  return et("MuiButtonBase", t);
}
const iw = Ke("MuiButtonBase", ["root", "disabled", "focusVisible"]), sw = (t) => {
  const {
    disabled: a,
    focusVisible: o,
    focusVisibleClassName: i,
    classes: s
  } = t, d = tt({
    root: ["root", a && "disabled", o && "focusVisible"]
  }, lw, s);
  return o && i && (d.root += ` ${i}`), d;
}, uw = pe("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${iw.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), tl = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiButtonBase"
  }), {
    action: s,
    centerRipple: c = !1,
    children: d,
    className: p,
    component: m = "button",
    disabled: g = !1,
    disableRipple: y = !1,
    disableTouchRipple: h = !1,
    focusRipple: C = !1,
    focusVisibleClassName: T,
    LinkComponent: R = "a",
    onBlur: x,
    onClick: A,
    onContextMenu: z,
    onDragLeave: N,
    onFocus: O,
    onFocusVisible: M,
    onKeyDown: D,
    onKeyUp: _,
    onMouseDown: L,
    onMouseLeave: k,
    onMouseUp: F,
    onTouchEnd: E,
    onTouchMove: U,
    onTouchStart: P,
    tabIndex: J = 0,
    TouchRippleProps: te,
    touchRippleRef: X,
    type: j,
    ...Y
  } = i, W = b.useRef(null), G = W4(), de = Jt(G.ref, X), [xe, Ne] = b.useState(!1);
  g && xe && Ne(!1), b.useImperativeHandle(s, () => ({
    focusVisible: () => {
      Ne(!0), W.current.focus();
    }
  }), []);
  const Me = G.shouldMount && !y && !g;
  b.useEffect(() => {
    xe && C && !y && G.pulsate();
  }, [y, C, xe, G]);
  const B = Ar(G, "start", L, h), Z = Ar(G, "stop", z, h), ne = Ar(G, "stop", N, h), fe = Ar(G, "stop", F, h), me = Ar(G, "stop", (ge) => {
    xe && ge.preventDefault(), k && k(ge);
  }, h), ve = Ar(G, "start", P, h), he = Ar(G, "stop", E, h), se = Ar(G, "stop", U, h), ue = Ar(G, "stop", (ge) => {
    Gc(ge.target) || Ne(!1), x && x(ge);
  }, !1), _e = La((ge) => {
    W.current || (W.current = ge.currentTarget), Gc(ge.target) && (Ne(!0), M && M(ge)), O && O(ge);
  }), Be = () => {
    const ge = W.current;
    return m && m !== "button" && !(ge.tagName === "A" && ge.href);
  }, $e = La((ge) => {
    C && !ge.repeat && xe && ge.key === " " && G.stop(ge, () => {
      G.start(ge);
    }), ge.target === ge.currentTarget && Be() && ge.key === " " && ge.preventDefault(), D && D(ge), ge.target === ge.currentTarget && Be() && ge.key === "Enter" && !g && (ge.preventDefault(), A && A(ge));
  }), lt = La((ge) => {
    C && ge.key === " " && xe && !ge.defaultPrevented && G.stop(ge, () => {
      G.pulsate(ge);
    }), _ && _(ge), A && ge.target === ge.currentTarget && Be() && ge.key === " " && !ge.defaultPrevented && A(ge);
  });
  let ye = m;
  ye === "button" && (Y.href || Y.to) && (ye = R);
  const we = {};
  ye === "button" ? (we.type = j === void 0 ? "button" : j, we.disabled = g) : (!Y.href && !Y.to && (we.role = "button"), g && (we["aria-disabled"] = g));
  const De = Jt(o, W), Ge = {
    ...i,
    centerRipple: c,
    component: m,
    disabled: g,
    disableRipple: y,
    disableTouchRipple: h,
    focusRipple: C,
    tabIndex: J,
    focusVisible: xe
  }, Ce = sw(Ge);
  return /* @__PURE__ */ S.jsxs(uw, {
    as: ye,
    className: Te(Ce.root, p),
    ownerState: Ge,
    onBlur: ue,
    onClick: A,
    onContextMenu: Z,
    onFocus: _e,
    onKeyDown: $e,
    onKeyUp: lt,
    onMouseDown: B,
    onMouseLeave: me,
    onMouseUp: fe,
    onDragLeave: ne,
    onTouchEnd: he,
    onTouchMove: se,
    onTouchStart: ve,
    ref: De,
    tabIndex: g ? -1 : J,
    type: j,
    ...we,
    ...Y,
    children: [d, Me ? /* @__PURE__ */ S.jsx(ow, {
      ref: de,
      center: c,
      ...te
    }) : null]
  });
});
function Ar(t, a, o, i = !1) {
  return La((s) => (o && o(s), i || t[a](s), !0));
}
function cw(t) {
  return typeof t.main == "string";
}
function fw(t, a = []) {
  if (!cw(t))
    return !1;
  for (const o of a)
    if (!t.hasOwnProperty(o) || typeof t[o] != "string")
      return !1;
  return !0;
}
function wn(t = []) {
  return ([, a]) => a && fw(a, t);
}
function dw(t) {
  return et("MuiCircularProgress", t);
}
Ke("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const uo = 44, _m = Gs`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, km = Gs`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, pw = typeof _m != "string" ? oh`
        animation: ${_m} 1.4s linear infinite;
      ` : null, mw = typeof km != "string" ? oh`
        animation: ${km} 1.4s ease-in-out infinite;
      ` : null, hw = (t) => {
  const {
    classes: a,
    variant: o,
    color: i,
    disableShrink: s
  } = t, c = {
    root: ["root", o, `color${ce(i)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ce(o)}`, s && "circleDisableShrink"]
  };
  return tt(c, dw, a);
}, gw = pe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, a[o.variant], a[`color${ce(o.color)}`]];
  }
})(qe(({
  theme: t
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: t.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: pw || {
      animation: `${_m} 1.4s linear infinite`
    }
  }, ...Object.entries(t.palette).filter(wn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      color: (t.vars || t).palette[a].main
    }
  }))]
}))), yw = pe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (t, a) => a.svg
})({
  display: "block"
  // Keeps the progress centered
}), vw = pe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.circle, a[`circle${ce(o.variant)}`], o.disableShrink && a.circleDisableShrink];
  }
})(qe(({
  theme: t
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: t.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: a
    }) => a.variant === "indeterminate" && !a.disableShrink,
    style: mw || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${km} 1.4s ease-in-out infinite`
    }
  }]
}))), Mh = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiCircularProgress"
  }), {
    className: s,
    color: c = "primary",
    disableShrink: d = !1,
    size: p = 40,
    style: m,
    thickness: g = 3.6,
    value: y = 0,
    variant: h = "indeterminate",
    ...C
  } = i, T = {
    ...i,
    color: c,
    disableShrink: d,
    size: p,
    thickness: g,
    value: y,
    variant: h
  }, R = hw(T), x = {}, A = {}, z = {};
  if (h === "determinate") {
    const N = 2 * Math.PI * ((uo - g) / 2);
    x.strokeDasharray = N.toFixed(3), z["aria-valuenow"] = Math.round(y), x.strokeDashoffset = `${((100 - y) / 100 * N).toFixed(3)}px`, A.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ S.jsx(gw, {
    className: Te(R.root, s),
    style: {
      width: p,
      height: p,
      ...A,
      ...m
    },
    ownerState: T,
    ref: o,
    role: "progressbar",
    ...z,
    ...C,
    children: /* @__PURE__ */ S.jsx(yw, {
      className: R.svg,
      ownerState: T,
      viewBox: `${uo / 2} ${uo / 2} ${uo} ${uo}`,
      children: /* @__PURE__ */ S.jsx(vw, {
        className: R.circle,
        style: x,
        ownerState: T,
        cx: uo,
        cy: uo,
        r: (uo - g) / 2,
        fill: "none",
        strokeWidth: g
      })
    })
  });
});
function bw(t) {
  return et("MuiIconButton", t);
}
const t1 = Ke("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), xw = (t) => {
  const {
    classes: a,
    disabled: o,
    color: i,
    edge: s,
    size: c,
    loading: d
  } = t, p = {
    root: ["root", d && "loading", o && "disabled", i !== "default" && `color${ce(i)}`, s && `edge${ce(s)}`, `size${ce(c)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return tt(p, bw, a);
}, Sw = pe(tl, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.loading && a.loading, o.color !== "default" && a[`color${ce(o.color)}`], o.edge && a[`edge${ce(o.edge)}`], a[`size${ce(o.size)}`]];
  }
})(qe(({
  theme: t
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: t.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (t.vars || t).palette.action.active,
  transition: t.transitions.create("background-color", {
    duration: t.transitions.duration.shortest
  }),
  variants: [{
    props: (a) => !a.disableRipple,
    style: {
      "--IconButton-hoverBg": t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : dt(t.palette.action.active, t.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), qe(({
  theme: t
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(t.palette).filter(wn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      color: (t.vars || t).palette[a].main
    }
  })), ...Object.entries(t.palette).filter(wn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      "--IconButton-hoverBg": t.vars ? `rgba(${(t.vars || t).palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : dt((t.vars || t).palette[a].main, t.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: t.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: t.typography.pxToRem(28)
    }
  }],
  [`&.${t1.disabled}`]: {
    backgroundColor: "transparent",
    color: (t.vars || t).palette.action.disabled
  },
  [`&.${t1.loading}`]: {
    color: "transparent"
  }
}))), Cw = pe("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (t, a) => a.loadingIndicator
})(({
  theme: t
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (t.vars || t).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Ws = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: c,
    className: d,
    color: p = "default",
    disabled: m = !1,
    disableFocusRipple: g = !1,
    size: y = "medium",
    id: h,
    loading: C = null,
    loadingIndicator: T,
    ...R
  } = i, x = Nr(h), A = T ?? /* @__PURE__ */ S.jsx(Mh, {
    "aria-labelledby": x,
    color: "inherit",
    size: 16
  }), z = {
    ...i,
    edge: s,
    color: p,
    disabled: m,
    disableFocusRipple: g,
    loading: C,
    loadingIndicator: A,
    size: y
  }, N = xw(z);
  return /* @__PURE__ */ S.jsxs(Sw, {
    id: C ? x : h,
    className: Te(N.root, d),
    centerRipple: !0,
    focusRipple: !g,
    disabled: m || C,
    ref: o,
    ...R,
    ownerState: z,
    children: [typeof C == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S.jsx("span", {
      className: N.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ S.jsx(Cw, {
        className: N.loadingIndicator,
        ownerState: z,
        children: C && A
      })
    }), c]
  });
}), Ew = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Tw(t) {
  return et("MuiTypography", t);
}
Ke("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Rw = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, ww = z4(), Aw = (t) => {
  const {
    align: a,
    gutterBottom: o,
    noWrap: i,
    paragraph: s,
    variant: c,
    classes: d
  } = t, p = {
    root: ["root", c, t.align !== "inherit" && `align${ce(a)}`, o && "gutterBottom", i && "noWrap", s && "paragraph"]
  };
  return tt(p, Tw, d);
}, Ow = pe("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.variant && a[o.variant], o.align !== "inherit" && a[`align${ce(o.align)}`], o.noWrap && a.noWrap, o.gutterBottom && a.gutterBottom, o.paragraph && a.paragraph];
  }
})(qe(({
  theme: t
}) => {
  var a;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(t.typography).filter(([o, i]) => o !== "inherit" && i && typeof i == "object").map(([o, i]) => ({
      props: {
        variant: o
      },
      style: i
    })), ...Object.entries(t.palette).filter(wn()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        color: (t.vars || t).palette[o].main
      }
    })), ...Object.entries(((a = t.palette) == null ? void 0 : a.text) || {}).filter(([, o]) => typeof o == "string").map(([o]) => ({
      props: {
        color: `text${ce(o)}`
      },
      style: {
        color: (t.vars || t).palette.text[o]
      }
    })), {
      props: ({
        ownerState: o
      }) => o.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), n1 = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Ae = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    color: i,
    ...s
  } = at({
    props: a,
    name: "MuiTypography"
  }), c = !Rw[i], d = ww({
    ...s,
    ...c && {
      color: i
    }
  }), {
    align: p = "inherit",
    className: m,
    component: g,
    gutterBottom: y = !1,
    noWrap: h = !1,
    paragraph: C = !1,
    variant: T = "body1",
    variantMapping: R = n1,
    ...x
  } = d, A = {
    ...d,
    align: p,
    color: i,
    className: m,
    component: g,
    gutterBottom: y,
    noWrap: h,
    paragraph: C,
    variant: T,
    variantMapping: R
  }, z = g || (C ? "p" : R[T] || n1[T]) || "span", N = Aw(A);
  return /* @__PURE__ */ S.jsx(Ow, {
    as: z,
    ref: o,
    className: Te(N.root, m),
    ...x,
    ownerState: A,
    style: {
      ...p !== "inherit" && {
        "--Typography-textAlign": p
      },
      ...x.style
    }
  });
});
function a1(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function Mw(t = {}) {
  const {
    ignoreAccents: a = !0,
    ignoreCase: o = !0,
    limit: i,
    matchFrom: s = "any",
    stringify: c,
    trim: d = !1
  } = t;
  return (p, {
    inputValue: m,
    getOptionLabel: g
  }) => {
    let y = d ? m.trim() : m;
    o && (y = y.toLowerCase()), a && (y = a1(y));
    const h = y ? p.filter((C) => {
      let T = (c || g)(C);
      return o && (T = T.toLowerCase()), a && (T = a1(T)), s === "start" ? T.startsWith(y) : T.includes(y);
    }) : p;
    return typeof i == "number" ? h.slice(0, i) : h;
  };
}
const zw = Mw(), r1 = 5, Dw = (t) => {
  var a;
  return t.current !== null && ((a = t.current.parentElement) == null ? void 0 : a.contains(document.activeElement));
}, Nw = [];
function o1(t, a, o) {
  if (a || t == null)
    return "";
  const i = o(t);
  return typeof i == "string" ? i : "";
}
function Bw(t) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: a = Dw,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: o = "Mui",
    autoComplete: i = !1,
    autoHighlight: s = !1,
    autoSelect: c = !1,
    blurOnSelect: d = !1,
    clearOnBlur: p = !t.freeSolo,
    clearOnEscape: m = !1,
    componentName: g = "useAutocomplete",
    defaultValue: y = t.multiple ? Nw : null,
    disableClearable: h = !1,
    disableCloseOnSelect: C = !1,
    disabled: T,
    disabledItemsFocusable: R = !1,
    disableListWrap: x = !1,
    filterOptions: A = zw,
    filterSelectedOptions: z = !1,
    freeSolo: N = !1,
    getOptionDisabled: O,
    getOptionKey: M,
    getOptionLabel: D = (ie) => ie.label ?? ie,
    groupBy: _,
    handleHomeEndKeys: L = !t.freeSolo,
    id: k,
    includeInputInList: F = !1,
    inputValue: E,
    isOptionEqualToValue: U = (ie, re) => ie === re,
    multiple: P = !1,
    onChange: J,
    onClose: te,
    onHighlightChange: X,
    onInputChange: j,
    onOpen: Y,
    open: W,
    openOnFocus: G = !1,
    options: de,
    readOnly: xe = !1,
    selectOnFocus: Ne = !t.freeSolo,
    value: Me
  } = t, B = Nr(k);
  let Z = D;
  Z = (ie) => {
    const re = D(ie);
    return typeof re != "string" ? String(re) : re;
  };
  const ne = b.useRef(!1), fe = b.useRef(!0), me = b.useRef(null), ve = b.useRef(null), [he, se] = b.useState(null), [ue, _e] = b.useState(-1), Be = s ? 0 : -1, $e = b.useRef(Be), lt = b.useRef(o1(y ?? Me, P, Z)).current, [ye, we] = ri({
    controlled: Me,
    default: y,
    name: g
  }), [De, Ge] = ri({
    controlled: E,
    default: lt,
    name: g,
    state: "inputValue"
  }), [Ce, ge] = b.useState(!1), Xe = b.useCallback((ie, re, Ee) => {
    if (!(P ? ye.length < re.length : re !== null) && !p)
      return;
    const ot = o1(re, P, Z);
    De !== ot && (Ge(ot), j && j(ie, ot, Ee));
  }, [Z, De, P, j, Ge, p, ye]), [Ye, Tt] = ri({
    controlled: W,
    default: !1,
    name: g,
    state: "open"
  }), [Bt, ht] = b.useState(!0), Ze = !P && ye != null && De === Z(ye), He = Ye && !xe, Ue = He ? A(
    de.filter((ie) => !(z && (P ? ye : [ye]).some((re) => re !== null && U(ie, re)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Ze && Bt ? "" : De,
      getOptionLabel: Z
    }
  ) : [], Fe = bh({
    filteredOptions: Ue,
    value: ye,
    inputValue: De
  });
  b.useEffect(() => {
    const ie = ye !== Fe.value;
    Ce && !ie || N && !ie || Xe(null, ye, "reset");
  }, [ye, Xe, Ce, Fe.value, N]);
  const _t = Ye && Ue.length > 0 && !xe, jt = La((ie) => {
    ie === -1 ? me.current.focus() : he.querySelector(`[data-tag-index="${ie}"]`).focus();
  });
  b.useEffect(() => {
    P && ue > ye.length - 1 && (_e(-1), jt(-1));
  }, [ye, P, ue, jt]);
  function Ia(ie, re) {
    if (!ve.current || ie < 0 || ie >= Ue.length)
      return -1;
    let Ee = ie;
    for (; ; ) {
      const Pe = ve.current.querySelector(`[data-option-index="${Ee}"]`), ot = R ? !1 : !Pe || Pe.disabled || Pe.getAttribute("aria-disabled") === "true";
      if (Pe && Pe.hasAttribute("tabindex") && !ot)
        return Ee;
      if (re === "next" ? Ee = (Ee + 1) % Ue.length : Ee = (Ee - 1 + Ue.length) % Ue.length, Ee === ie)
        return -1;
    }
  }
  const ze = La(({
    event: ie,
    index: re,
    reason: Ee
  }) => {
    if ($e.current = re, re === -1 ? me.current.removeAttribute("aria-activedescendant") : me.current.setAttribute("aria-activedescendant", `${B}-option-${re}`), X && ["mouse", "keyboard", "touch"].includes(Ee) && X(ie, re === -1 ? null : Ue[re], Ee), !ve.current)
      return;
    const Pe = ve.current.querySelector(`[role="option"].${o}-focused`);
    Pe && (Pe.classList.remove(`${o}-focused`), Pe.classList.remove(`${o}-focusVisible`));
    let ot = ve.current;
    if (ve.current.getAttribute("role") !== "listbox" && (ot = ve.current.parentElement.querySelector('[role="listbox"]')), !ot)
      return;
    if (re === -1) {
      ot.scrollTop = 0;
      return;
    }
    const xt = ve.current.querySelector(`[data-option-index="${re}"]`);
    if (xt && (xt.classList.add(`${o}-focused`), Ee === "keyboard" && xt.classList.add(`${o}-focusVisible`), ot.scrollHeight > ot.clientHeight && Ee !== "mouse" && Ee !== "touch")) {
      const qt = xt, On = ot.clientHeight + ot.scrollTop, To = qt.offsetTop + qt.offsetHeight;
      To > On ? ot.scrollTop = To - ot.clientHeight : qt.offsetTop - qt.offsetHeight * (_ ? 1.3 : 0) < ot.scrollTop && (ot.scrollTop = qt.offsetTop - qt.offsetHeight * (_ ? 1.3 : 0));
    }
  }), Je = La(({
    event: ie,
    diff: re,
    direction: Ee = "next",
    reason: Pe
  }) => {
    if (!He)
      return;
    const xt = Ia((() => {
      const qt = Ue.length - 1;
      if (re === "reset")
        return Be;
      if (re === "start")
        return 0;
      if (re === "end")
        return qt;
      const On = $e.current + re;
      return On < 0 ? On === -1 && F ? -1 : x && $e.current !== -1 || Math.abs(re) > 1 ? 0 : qt : On > qt ? On === qt + 1 && F ? -1 : x || Math.abs(re) > 1 ? qt : 0 : On;
    })(), Ee);
    if (ze({
      index: xt,
      reason: Pe,
      event: ie
    }), i && re !== "reset")
      if (xt === -1)
        me.current.value = De;
      else {
        const qt = Z(Ue[xt]);
        me.current.value = qt, qt.toLowerCase().indexOf(De.toLowerCase()) === 0 && De.length > 0 && me.current.setSelectionRange(De.length, qt.length);
      }
  }), Ft = () => {
    const ie = (re, Ee) => {
      const Pe = re ? Z(re) : "", ot = Ee ? Z(Ee) : "";
      return Pe === ot;
    };
    if ($e.current !== -1 && Fe.filteredOptions && Fe.filteredOptions.length !== Ue.length && Fe.inputValue === De && (P ? ye.length === Fe.value.length && Fe.value.every((re, Ee) => Z(ye[Ee]) === Z(re)) : ie(Fe.value, ye))) {
      const re = Fe.filteredOptions[$e.current];
      if (re)
        return Ue.findIndex((Ee) => Z(Ee) === Z(re));
    }
    return -1;
  }, jn = b.useCallback(() => {
    if (!He)
      return;
    const ie = Ft();
    if (ie !== -1) {
      $e.current = ie;
      return;
    }
    const re = P ? ye[0] : ye;
    if (Ue.length === 0 || re == null) {
      Je({
        diff: "reset"
      });
      return;
    }
    if (ve.current) {
      if (re != null) {
        const Ee = Ue[$e.current];
        if (P && Ee && ye.findIndex((ot) => U(Ee, ot)) !== -1)
          return;
        const Pe = Ue.findIndex((ot) => U(ot, re));
        Pe === -1 ? Je({
          diff: "reset"
        }) : ze({
          index: Pe
        });
        return;
      }
      if ($e.current >= Ue.length - 1) {
        ze({
          index: Ue.length - 1
        });
        return;
      }
      ze({
        index: $e.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    Ue.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    P ? !1 : ye,
    z,
    Je,
    ze,
    He,
    De,
    P
  ]), tn = La((ie) => {
    Mm(ve, ie), ie && jn();
  });
  b.useEffect(() => {
    jn();
  }, [jn]);
  const Gn = (ie) => {
    Ye || (Tt(!0), ht(!0), Y && Y(ie));
  }, Pa = (ie, re) => {
    Ye && (Tt(!1), te && te(ie, re));
  }, Oa = (ie, re, Ee, Pe) => {
    if (P) {
      if (ye.length === re.length && ye.every((ot, xt) => ot === re[xt]))
        return;
    } else if (ye === re)
      return;
    J && J(ie, re, Ee, Pe), we(re);
  }, Ma = b.useRef(!1), sa = (ie, re, Ee = "selectOption", Pe = "options") => {
    let ot = Ee, xt = re;
    if (P) {
      xt = Array.isArray(ye) ? ye.slice() : [];
      const qt = xt.findIndex((On) => U(re, On));
      qt === -1 ? xt.push(re) : Pe !== "freeSolo" && (xt.splice(qt, 1), ot = "removeOption");
    }
    Xe(ie, xt, ot), Oa(ie, xt, ot, {
      option: re
    }), !C && (!ie || !ie.ctrlKey && !ie.metaKey) && Pa(ie, ot), (d === !0 || d === "touch" && Ma.current || d === "mouse" && !Ma.current) && me.current.blur();
  };
  function So(ie, re) {
    if (ie === -1)
      return -1;
    let Ee = ie;
    for (; ; ) {
      if (re === "next" && Ee === ye.length || re === "previous" && Ee === -1)
        return -1;
      const Pe = he.querySelector(`[data-tag-index="${Ee}"]`);
      if (!Pe || !Pe.hasAttribute("tabindex") || Pe.disabled || Pe.getAttribute("aria-disabled") === "true")
        Ee += re === "next" ? 1 : -1;
      else
        return Ee;
    }
  }
  const rl = (ie, re) => {
    if (!P)
      return;
    De === "" && Pa(ie, "toggleInput");
    let Ee = ue;
    ue === -1 ? De === "" && re === "previous" && (Ee = ye.length - 1) : (Ee += re === "next" ? 1 : -1, Ee < 0 && (Ee = 0), Ee === ye.length && (Ee = -1)), Ee = So(Ee, re), _e(Ee), jt(Ee);
  }, cr = (ie) => {
    ne.current = !0, Ge(""), j && j(ie, "", "clear"), Oa(ie, P ? [] : null, "clear");
  }, fr = (ie) => (re) => {
    if (ie.onKeyDown && ie.onKeyDown(re), !re.defaultMuiPrevented && (ue !== -1 && !["ArrowLeft", "ArrowRight"].includes(re.key) && (_e(-1), jt(-1)), re.which !== 229))
      switch (re.key) {
        case "Home":
          He && L && (re.preventDefault(), Je({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: re
          }));
          break;
        case "End":
          He && L && (re.preventDefault(), Je({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: re
          }));
          break;
        case "PageUp":
          re.preventDefault(), Je({
            diff: -r1,
            direction: "previous",
            reason: "keyboard",
            event: re
          }), Gn(re);
          break;
        case "PageDown":
          re.preventDefault(), Je({
            diff: r1,
            direction: "next",
            reason: "keyboard",
            event: re
          }), Gn(re);
          break;
        case "ArrowDown":
          re.preventDefault(), Je({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: re
          }), Gn(re);
          break;
        case "ArrowUp":
          re.preventDefault(), Je({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: re
          }), Gn(re);
          break;
        case "ArrowLeft":
          rl(re, "previous");
          break;
        case "ArrowRight":
          rl(re, "next");
          break;
        case "Enter":
          if ($e.current !== -1 && He) {
            const Ee = Ue[$e.current], Pe = O ? O(Ee) : !1;
            if (re.preventDefault(), Pe)
              return;
            sa(re, Ee, "selectOption"), i && me.current.setSelectionRange(me.current.value.length, me.current.value.length);
          } else N && De !== "" && Ze === !1 && (P && re.preventDefault(), sa(re, De, "createOption", "freeSolo"));
          break;
        case "Escape":
          He ? (re.preventDefault(), re.stopPropagation(), Pa(re, "escape")) : m && (De !== "" || P && ye.length > 0) && (re.preventDefault(), re.stopPropagation(), cr(re));
          break;
        case "Backspace":
          if (P && !xe && De === "" && ye.length > 0) {
            const Ee = ue === -1 ? ye.length - 1 : ue, Pe = ye.slice();
            Pe.splice(Ee, 1), Oa(re, Pe, "removeOption", {
              option: ye[Ee]
            });
          }
          break;
        case "Delete":
          if (P && !xe && De === "" && ye.length > 0 && ue !== -1) {
            const Ee = ue, Pe = ye.slice();
            Pe.splice(Ee, 1), Oa(re, Pe, "removeOption", {
              option: ye[Ee]
            });
          }
          break;
      }
  }, mn = (ie) => {
    ge(!0), G && !ne.current && Gn(ie);
  }, Cn = (ie) => {
    if (a(ve)) {
      me.current.focus();
      return;
    }
    ge(!1), fe.current = !0, ne.current = !1, c && $e.current !== -1 && He ? sa(ie, Ue[$e.current], "blur") : c && N && De !== "" ? sa(ie, De, "blur", "freeSolo") : p && Xe(ie, ye, "blur"), Pa(ie, "blur");
  }, sn = (ie) => {
    const re = ie.target.value;
    De !== re && (Ge(re), ht(!1), j && j(ie, re, "input")), re === "" ? !h && !P && Oa(ie, null, "clear") : Gn(ie);
  }, Co = (ie) => {
    const re = Number(ie.currentTarget.getAttribute("data-option-index"));
    $e.current !== re && ze({
      event: ie,
      index: re,
      reason: "mouse"
    });
  }, Si = (ie) => {
    ze({
      event: ie,
      index: Number(ie.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Ma.current = !0;
  }, Ci = (ie) => {
    const re = Number(ie.currentTarget.getAttribute("data-option-index"));
    sa(ie, Ue[re], "selectOption"), Ma.current = !1;
  }, jr = (ie) => (re) => {
    const Ee = ye.slice();
    Ee.splice(ie, 1), Oa(re, Ee, "removeOption", {
      option: ye[ie]
    });
  }, $r = (ie) => {
    Ye ? Pa(ie, "toggleInput") : Gn(ie);
  }, Fa = (ie) => {
    ie.currentTarget.contains(ie.target) && ie.target.getAttribute("id") !== B && ie.preventDefault();
  }, Ut = (ie) => {
    ie.currentTarget.contains(ie.target) && (me.current.focus(), Ne && fe.current && me.current.selectionEnd - me.current.selectionStart === 0 && me.current.select(), fe.current = !1);
  }, Vt = (ie) => {
    !T && (De === "" || !Ye) && $r(ie);
  };
  let En = N && De.length > 0;
  En = En || (P ? ye.length > 0 : ye !== null);
  let Eo = Ue;
  return _ && (Eo = Ue.reduce((ie, re, Ee) => {
    const Pe = _(re);
    return ie.length > 0 && ie[ie.length - 1].group === Pe ? ie[ie.length - 1].options.push(re) : ie.push({
      key: Ee,
      index: Ee,
      group: Pe,
      options: [re]
    }), ie;
  }, [])), T && Ce && Cn(), {
    getRootProps: (ie = {}) => ({
      ...ie,
      onKeyDown: fr(ie),
      onMouseDown: Fa,
      onClick: Ut
    }),
    getInputLabelProps: () => ({
      id: `${B}-label`,
      htmlFor: B
    }),
    getInputProps: () => ({
      id: B,
      value: De,
      onBlur: Cn,
      onFocus: mn,
      onChange: sn,
      onMouseDown: Vt,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": He ? "" : null,
      "aria-autocomplete": i ? "both" : "list",
      "aria-controls": _t ? `${B}-listbox` : void 0,
      "aria-expanded": _t,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: me,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: T
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: cr
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: $r
    }),
    getTagProps: ({
      index: ie
    }) => ({
      key: ie,
      "data-tag-index": ie,
      tabIndex: -1,
      ...!xe && {
        onDelete: jr(ie)
      }
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${B}-listbox`,
      "aria-labelledby": `${B}-label`,
      ref: tn,
      onMouseDown: (ie) => {
        ie.preventDefault();
      }
    }),
    getOptionProps: ({
      index: ie,
      option: re
    }) => {
      const Ee = (P ? ye : [ye]).some((ot) => ot != null && U(re, ot)), Pe = O ? O(re) : !1;
      return {
        key: (M == null ? void 0 : M(re)) ?? Z(re),
        tabIndex: -1,
        role: "option",
        id: `${B}-option-${ie}`,
        onMouseMove: Co,
        onClick: Ci,
        onTouchStart: Si,
        "data-option-index": ie,
        "aria-disabled": Pe,
        "aria-selected": Ee
      };
    },
    id: B,
    inputValue: De,
    value: ye,
    dirty: En,
    expanded: He && he,
    popupOpen: He,
    focused: Ce || ue !== -1,
    anchorEl: he,
    setAnchorEl: se,
    focusedTag: ue,
    groupedOptions: Eo
  };
}
var Pn = "top", Ea = "bottom", Ta = "right", Fn = "left", zh = "auto", Qs = [Pn, Ea, Ta, Fn], ii = "start", Hs = "end", jw = "clippingParents", fS = "viewport", vs = "popper", $w = "reference", l1 = /* @__PURE__ */ Qs.reduce(function(t, a) {
  return t.concat([a + "-" + ii, a + "-" + Hs]);
}, []), dS = /* @__PURE__ */ [].concat(Qs, [zh]).reduce(function(t, a) {
  return t.concat([a, a + "-" + ii, a + "-" + Hs]);
}, []), Lw = "beforeRead", _w = "read", kw = "afterRead", Hw = "beforeMain", Uw = "main", Iw = "afterMain", Pw = "beforeWrite", Fw = "write", Vw = "afterWrite", qw = [Lw, _w, kw, Hw, Uw, Iw, Pw, Fw, Vw];
function ir(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function ia(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var a = t.ownerDocument;
    return a && a.defaultView || window;
  }
  return t;
}
function nl(t) {
  var a = ia(t).Element;
  return t instanceof a || t instanceof Element;
}
function Ca(t) {
  var a = ia(t).HTMLElement;
  return t instanceof a || t instanceof HTMLElement;
}
function Dh(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var a = ia(t).ShadowRoot;
  return t instanceof a || t instanceof ShadowRoot;
}
function Gw(t) {
  var a = t.state;
  Object.keys(a.elements).forEach(function(o) {
    var i = a.styles[o] || {}, s = a.attributes[o] || {}, c = a.elements[o];
    !Ca(c) || !ir(c) || (Object.assign(c.style, i), Object.keys(s).forEach(function(d) {
      var p = s[d];
      p === !1 ? c.removeAttribute(d) : c.setAttribute(d, p === !0 ? "" : p);
    }));
  });
}
function Yw(t) {
  var a = t.state, o = {
    popper: {
      position: a.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(a.elements.popper.style, o.popper), a.styles = o, a.elements.arrow && Object.assign(a.elements.arrow.style, o.arrow), function() {
    Object.keys(a.elements).forEach(function(i) {
      var s = a.elements[i], c = a.attributes[i] || {}, d = Object.keys(a.styles.hasOwnProperty(i) ? a.styles[i] : o[i]), p = d.reduce(function(m, g) {
        return m[g] = "", m;
      }, {});
      !Ca(s) || !ir(s) || (Object.assign(s.style, p), Object.keys(c).forEach(function(m) {
        s.removeAttribute(m);
      }));
    });
  };
}
const Xw = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gw,
  effect: Yw,
  requires: ["computeStyles"]
};
function lr(t) {
  return t.split("-")[0];
}
var el = Math.max, Kc = Math.min, si = Math.round;
function Hm() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(a) {
    return a.brand + "/" + a.version;
  }).join(" ") : navigator.userAgent;
}
function pS() {
  return !/^((?!chrome|android).)*safari/i.test(Hm());
}
function ui(t, a, o) {
  a === void 0 && (a = !1), o === void 0 && (o = !1);
  var i = t.getBoundingClientRect(), s = 1, c = 1;
  a && Ca(t) && (s = t.offsetWidth > 0 && si(i.width) / t.offsetWidth || 1, c = t.offsetHeight > 0 && si(i.height) / t.offsetHeight || 1);
  var d = nl(t) ? ia(t) : window, p = d.visualViewport, m = !pS() && o, g = (i.left + (m && p ? p.offsetLeft : 0)) / s, y = (i.top + (m && p ? p.offsetTop : 0)) / c, h = i.width / s, C = i.height / c;
  return {
    width: h,
    height: C,
    top: y,
    right: g + h,
    bottom: y + C,
    left: g,
    x: g,
    y
  };
}
function Nh(t) {
  var a = ui(t), o = t.offsetWidth, i = t.offsetHeight;
  return Math.abs(a.width - o) <= 1 && (o = a.width), Math.abs(a.height - i) <= 1 && (i = a.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: o,
    height: i
  };
}
function mS(t, a) {
  var o = a.getRootNode && a.getRootNode();
  if (t.contains(a))
    return !0;
  if (o && Dh(o)) {
    var i = a;
    do {
      if (i && t.isSameNode(i))
        return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function zr(t) {
  return ia(t).getComputedStyle(t);
}
function Kw(t) {
  return ["table", "td", "th"].indexOf(ir(t)) >= 0;
}
function xo(t) {
  return ((nl(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function mf(t) {
  return ir(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Dh(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    xo(t)
  );
}
function i1(t) {
  return !Ca(t) || // https://github.com/popperjs/popper-core/issues/837
  zr(t).position === "fixed" ? null : t.offsetParent;
}
function Ww(t) {
  var a = /firefox/i.test(Hm()), o = /Trident/i.test(Hm());
  if (o && Ca(t)) {
    var i = zr(t);
    if (i.position === "fixed")
      return null;
  }
  var s = mf(t);
  for (Dh(s) && (s = s.host); Ca(s) && ["html", "body"].indexOf(ir(s)) < 0; ) {
    var c = zr(s);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || a && c.willChange === "filter" || a && c.filter && c.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Zs(t) {
  for (var a = ia(t), o = i1(t); o && Kw(o) && zr(o).position === "static"; )
    o = i1(o);
  return o && (ir(o) === "html" || ir(o) === "body" && zr(o).position === "static") ? a : o || Ww(t) || a;
}
function Bh(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Ms(t, a, o) {
  return el(t, Kc(a, o));
}
function Qw(t, a, o) {
  var i = Ms(t, a, o);
  return i > o ? o : i;
}
function hS() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gS(t) {
  return Object.assign({}, hS(), t);
}
function yS(t, a) {
  return a.reduce(function(o, i) {
    return o[i] = t, o;
  }, {});
}
var Zw = function(a, o) {
  return a = typeof a == "function" ? a(Object.assign({}, o.rects, {
    placement: o.placement
  })) : a, gS(typeof a != "number" ? a : yS(a, Qs));
};
function Jw(t) {
  var a, o = t.state, i = t.name, s = t.options, c = o.elements.arrow, d = o.modifiersData.popperOffsets, p = lr(o.placement), m = Bh(p), g = [Fn, Ta].indexOf(p) >= 0, y = g ? "height" : "width";
  if (!(!c || !d)) {
    var h = Zw(s.padding, o), C = Nh(c), T = m === "y" ? Pn : Fn, R = m === "y" ? Ea : Ta, x = o.rects.reference[y] + o.rects.reference[m] - d[m] - o.rects.popper[y], A = d[m] - o.rects.reference[m], z = Zs(c), N = z ? m === "y" ? z.clientHeight || 0 : z.clientWidth || 0 : 0, O = x / 2 - A / 2, M = h[T], D = N - C[y] - h[R], _ = N / 2 - C[y] / 2 + O, L = Ms(M, _, D), k = m;
    o.modifiersData[i] = (a = {}, a[k] = L, a.centerOffset = L - _, a);
  }
}
function eA(t) {
  var a = t.state, o = t.options, i = o.element, s = i === void 0 ? "[data-popper-arrow]" : i;
  s != null && (typeof s == "string" && (s = a.elements.popper.querySelector(s), !s) || mS(a.elements.popper, s) && (a.elements.arrow = s));
}
const tA = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Jw,
  effect: eA,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ci(t) {
  return t.split("-")[1];
}
var nA = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function aA(t, a) {
  var o = t.x, i = t.y, s = a.devicePixelRatio || 1;
  return {
    x: si(o * s) / s || 0,
    y: si(i * s) / s || 0
  };
}
function s1(t) {
  var a, o = t.popper, i = t.popperRect, s = t.placement, c = t.variation, d = t.offsets, p = t.position, m = t.gpuAcceleration, g = t.adaptive, y = t.roundOffsets, h = t.isFixed, C = d.x, T = C === void 0 ? 0 : C, R = d.y, x = R === void 0 ? 0 : R, A = typeof y == "function" ? y({
    x: T,
    y: x
  }) : {
    x: T,
    y: x
  };
  T = A.x, x = A.y;
  var z = d.hasOwnProperty("x"), N = d.hasOwnProperty("y"), O = Fn, M = Pn, D = window;
  if (g) {
    var _ = Zs(o), L = "clientHeight", k = "clientWidth";
    if (_ === ia(o) && (_ = xo(o), zr(_).position !== "static" && p === "absolute" && (L = "scrollHeight", k = "scrollWidth")), _ = _, s === Pn || (s === Fn || s === Ta) && c === Hs) {
      M = Ea;
      var F = h && _ === D && D.visualViewport ? D.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        _[L]
      );
      x -= F - i.height, x *= m ? 1 : -1;
    }
    if (s === Fn || (s === Pn || s === Ea) && c === Hs) {
      O = Ta;
      var E = h && _ === D && D.visualViewport ? D.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        _[k]
      );
      T -= E - i.width, T *= m ? 1 : -1;
    }
  }
  var U = Object.assign({
    position: p
  }, g && nA), P = y === !0 ? aA({
    x: T,
    y: x
  }, ia(o)) : {
    x: T,
    y: x
  };
  if (T = P.x, x = P.y, m) {
    var J;
    return Object.assign({}, U, (J = {}, J[M] = N ? "0" : "", J[O] = z ? "0" : "", J.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + T + "px, " + x + "px)" : "translate3d(" + T + "px, " + x + "px, 0)", J));
  }
  return Object.assign({}, U, (a = {}, a[M] = N ? x + "px" : "", a[O] = z ? T + "px" : "", a.transform = "", a));
}
function rA(t) {
  var a = t.state, o = t.options, i = o.gpuAcceleration, s = i === void 0 ? !0 : i, c = o.adaptive, d = c === void 0 ? !0 : c, p = o.roundOffsets, m = p === void 0 ? !0 : p, g = {
    placement: lr(a.placement),
    variation: ci(a.placement),
    popper: a.elements.popper,
    popperRect: a.rects.popper,
    gpuAcceleration: s,
    isFixed: a.options.strategy === "fixed"
  };
  a.modifiersData.popperOffsets != null && (a.styles.popper = Object.assign({}, a.styles.popper, s1(Object.assign({}, g, {
    offsets: a.modifiersData.popperOffsets,
    position: a.options.strategy,
    adaptive: d,
    roundOffsets: m
  })))), a.modifiersData.arrow != null && (a.styles.arrow = Object.assign({}, a.styles.arrow, s1(Object.assign({}, g, {
    offsets: a.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: m
  })))), a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-placement": a.placement
  });
}
const oA = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: rA,
  data: {}
};
var Mc = {
  passive: !0
};
function lA(t) {
  var a = t.state, o = t.instance, i = t.options, s = i.scroll, c = s === void 0 ? !0 : s, d = i.resize, p = d === void 0 ? !0 : d, m = ia(a.elements.popper), g = [].concat(a.scrollParents.reference, a.scrollParents.popper);
  return c && g.forEach(function(y) {
    y.addEventListener("scroll", o.update, Mc);
  }), p && m.addEventListener("resize", o.update, Mc), function() {
    c && g.forEach(function(y) {
      y.removeEventListener("scroll", o.update, Mc);
    }), p && m.removeEventListener("resize", o.update, Mc);
  };
}
const iA = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lA,
  data: {}
};
var sA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Hc(t) {
  return t.replace(/left|right|bottom|top/g, function(a) {
    return sA[a];
  });
}
var uA = {
  start: "end",
  end: "start"
};
function u1(t) {
  return t.replace(/start|end/g, function(a) {
    return uA[a];
  });
}
function jh(t) {
  var a = ia(t), o = a.pageXOffset, i = a.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: i
  };
}
function $h(t) {
  return ui(xo(t)).left + jh(t).scrollLeft;
}
function cA(t, a) {
  var o = ia(t), i = xo(t), s = o.visualViewport, c = i.clientWidth, d = i.clientHeight, p = 0, m = 0;
  if (s) {
    c = s.width, d = s.height;
    var g = pS();
    (g || !g && a === "fixed") && (p = s.offsetLeft, m = s.offsetTop);
  }
  return {
    width: c,
    height: d,
    x: p + $h(t),
    y: m
  };
}
function fA(t) {
  var a, o = xo(t), i = jh(t), s = (a = t.ownerDocument) == null ? void 0 : a.body, c = el(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), d = el(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), p = -i.scrollLeft + $h(t), m = -i.scrollTop;
  return zr(s || o).direction === "rtl" && (p += el(o.clientWidth, s ? s.clientWidth : 0) - c), {
    width: c,
    height: d,
    x: p,
    y: m
  };
}
function Lh(t) {
  var a = zr(t), o = a.overflow, i = a.overflowX, s = a.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + s + i);
}
function vS(t) {
  return ["html", "body", "#document"].indexOf(ir(t)) >= 0 ? t.ownerDocument.body : Ca(t) && Lh(t) ? t : vS(mf(t));
}
function zs(t, a) {
  var o;
  a === void 0 && (a = []);
  var i = vS(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), c = ia(i), d = s ? [c].concat(c.visualViewport || [], Lh(i) ? i : []) : i, p = a.concat(d);
  return s ? p : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    p.concat(zs(mf(d)))
  );
}
function Um(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function dA(t, a) {
  var o = ui(t, !1, a === "fixed");
  return o.top = o.top + t.clientTop, o.left = o.left + t.clientLeft, o.bottom = o.top + t.clientHeight, o.right = o.left + t.clientWidth, o.width = t.clientWidth, o.height = t.clientHeight, o.x = o.left, o.y = o.top, o;
}
function c1(t, a, o) {
  return a === fS ? Um(cA(t, o)) : nl(a) ? dA(a, o) : Um(fA(xo(t)));
}
function pA(t) {
  var a = zs(mf(t)), o = ["absolute", "fixed"].indexOf(zr(t).position) >= 0, i = o && Ca(t) ? Zs(t) : t;
  return nl(i) ? a.filter(function(s) {
    return nl(s) && mS(s, i) && ir(s) !== "body";
  }) : [];
}
function mA(t, a, o, i) {
  var s = a === "clippingParents" ? pA(t) : [].concat(a), c = [].concat(s, [o]), d = c[0], p = c.reduce(function(m, g) {
    var y = c1(t, g, i);
    return m.top = el(y.top, m.top), m.right = Kc(y.right, m.right), m.bottom = Kc(y.bottom, m.bottom), m.left = el(y.left, m.left), m;
  }, c1(t, d, i));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
function bS(t) {
  var a = t.reference, o = t.element, i = t.placement, s = i ? lr(i) : null, c = i ? ci(i) : null, d = a.x + a.width / 2 - o.width / 2, p = a.y + a.height / 2 - o.height / 2, m;
  switch (s) {
    case Pn:
      m = {
        x: d,
        y: a.y - o.height
      };
      break;
    case Ea:
      m = {
        x: d,
        y: a.y + a.height
      };
      break;
    case Ta:
      m = {
        x: a.x + a.width,
        y: p
      };
      break;
    case Fn:
      m = {
        x: a.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: a.x,
        y: a.y
      };
  }
  var g = s ? Bh(s) : null;
  if (g != null) {
    var y = g === "y" ? "height" : "width";
    switch (c) {
      case ii:
        m[g] = m[g] - (a[y] / 2 - o[y] / 2);
        break;
      case Hs:
        m[g] = m[g] + (a[y] / 2 - o[y] / 2);
        break;
    }
  }
  return m;
}
function Us(t, a) {
  a === void 0 && (a = {});
  var o = a, i = o.placement, s = i === void 0 ? t.placement : i, c = o.strategy, d = c === void 0 ? t.strategy : c, p = o.boundary, m = p === void 0 ? jw : p, g = o.rootBoundary, y = g === void 0 ? fS : g, h = o.elementContext, C = h === void 0 ? vs : h, T = o.altBoundary, R = T === void 0 ? !1 : T, x = o.padding, A = x === void 0 ? 0 : x, z = gS(typeof A != "number" ? A : yS(A, Qs)), N = C === vs ? $w : vs, O = t.rects.popper, M = t.elements[R ? N : C], D = mA(nl(M) ? M : M.contextElement || xo(t.elements.popper), m, y, d), _ = ui(t.elements.reference), L = bS({
    reference: _,
    element: O,
    placement: s
  }), k = Um(Object.assign({}, O, L)), F = C === vs ? k : _, E = {
    top: D.top - F.top + z.top,
    bottom: F.bottom - D.bottom + z.bottom,
    left: D.left - F.left + z.left,
    right: F.right - D.right + z.right
  }, U = t.modifiersData.offset;
  if (C === vs && U) {
    var P = U[s];
    Object.keys(E).forEach(function(J) {
      var te = [Ta, Ea].indexOf(J) >= 0 ? 1 : -1, X = [Pn, Ea].indexOf(J) >= 0 ? "y" : "x";
      E[J] += P[X] * te;
    });
  }
  return E;
}
function hA(t, a) {
  a === void 0 && (a = {});
  var o = a, i = o.placement, s = o.boundary, c = o.rootBoundary, d = o.padding, p = o.flipVariations, m = o.allowedAutoPlacements, g = m === void 0 ? dS : m, y = ci(i), h = y ? p ? l1 : l1.filter(function(R) {
    return ci(R) === y;
  }) : Qs, C = h.filter(function(R) {
    return g.indexOf(R) >= 0;
  });
  C.length === 0 && (C = h);
  var T = C.reduce(function(R, x) {
    return R[x] = Us(t, {
      placement: x,
      boundary: s,
      rootBoundary: c,
      padding: d
    })[lr(x)], R;
  }, {});
  return Object.keys(T).sort(function(R, x) {
    return T[R] - T[x];
  });
}
function gA(t) {
  if (lr(t) === zh)
    return [];
  var a = Hc(t);
  return [u1(t), a, u1(a)];
}
function yA(t) {
  var a = t.state, o = t.options, i = t.name;
  if (!a.modifiersData[i]._skip) {
    for (var s = o.mainAxis, c = s === void 0 ? !0 : s, d = o.altAxis, p = d === void 0 ? !0 : d, m = o.fallbackPlacements, g = o.padding, y = o.boundary, h = o.rootBoundary, C = o.altBoundary, T = o.flipVariations, R = T === void 0 ? !0 : T, x = o.allowedAutoPlacements, A = a.options.placement, z = lr(A), N = z === A, O = m || (N || !R ? [Hc(A)] : gA(A)), M = [A].concat(O).reduce(function(B, Z) {
      return B.concat(lr(Z) === zh ? hA(a, {
        placement: Z,
        boundary: y,
        rootBoundary: h,
        padding: g,
        flipVariations: R,
        allowedAutoPlacements: x
      }) : Z);
    }, []), D = a.rects.reference, _ = a.rects.popper, L = /* @__PURE__ */ new Map(), k = !0, F = M[0], E = 0; E < M.length; E++) {
      var U = M[E], P = lr(U), J = ci(U) === ii, te = [Pn, Ea].indexOf(P) >= 0, X = te ? "width" : "height", j = Us(a, {
        placement: U,
        boundary: y,
        rootBoundary: h,
        altBoundary: C,
        padding: g
      }), Y = te ? J ? Ta : Fn : J ? Ea : Pn;
      D[X] > _[X] && (Y = Hc(Y));
      var W = Hc(Y), G = [];
      if (c && G.push(j[P] <= 0), p && G.push(j[Y] <= 0, j[W] <= 0), G.every(function(B) {
        return B;
      })) {
        F = U, k = !1;
        break;
      }
      L.set(U, G);
    }
    if (k)
      for (var de = R ? 3 : 1, xe = function(Z) {
        var ne = M.find(function(fe) {
          var me = L.get(fe);
          if (me)
            return me.slice(0, Z).every(function(ve) {
              return ve;
            });
        });
        if (ne)
          return F = ne, "break";
      }, Ne = de; Ne > 0; Ne--) {
        var Me = xe(Ne);
        if (Me === "break") break;
      }
    a.placement !== F && (a.modifiersData[i]._skip = !0, a.placement = F, a.reset = !0);
  }
}
const vA = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yA,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function f1(t, a, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: t.top - a.height - o.y,
    right: t.right - a.width + o.x,
    bottom: t.bottom - a.height + o.y,
    left: t.left - a.width - o.x
  };
}
function d1(t) {
  return [Pn, Ta, Ea, Fn].some(function(a) {
    return t[a] >= 0;
  });
}
function bA(t) {
  var a = t.state, o = t.name, i = a.rects.reference, s = a.rects.popper, c = a.modifiersData.preventOverflow, d = Us(a, {
    elementContext: "reference"
  }), p = Us(a, {
    altBoundary: !0
  }), m = f1(d, i), g = f1(p, s, c), y = d1(m), h = d1(g);
  a.modifiersData[o] = {
    referenceClippingOffsets: m,
    popperEscapeOffsets: g,
    isReferenceHidden: y,
    hasPopperEscaped: h
  }, a.attributes.popper = Object.assign({}, a.attributes.popper, {
    "data-popper-reference-hidden": y,
    "data-popper-escaped": h
  });
}
const xA = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: bA
};
function SA(t, a, o) {
  var i = lr(t), s = [Fn, Pn].indexOf(i) >= 0 ? -1 : 1, c = typeof o == "function" ? o(Object.assign({}, a, {
    placement: t
  })) : o, d = c[0], p = c[1];
  return d = d || 0, p = (p || 0) * s, [Fn, Ta].indexOf(i) >= 0 ? {
    x: p,
    y: d
  } : {
    x: d,
    y: p
  };
}
function CA(t) {
  var a = t.state, o = t.options, i = t.name, s = o.offset, c = s === void 0 ? [0, 0] : s, d = dS.reduce(function(y, h) {
    return y[h] = SA(h, a.rects, c), y;
  }, {}), p = d[a.placement], m = p.x, g = p.y;
  a.modifiersData.popperOffsets != null && (a.modifiersData.popperOffsets.x += m, a.modifiersData.popperOffsets.y += g), a.modifiersData[i] = d;
}
const EA = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: CA
};
function TA(t) {
  var a = t.state, o = t.name;
  a.modifiersData[o] = bS({
    reference: a.rects.reference,
    element: a.rects.popper,
    placement: a.placement
  });
}
const RA = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: TA,
  data: {}
};
function wA(t) {
  return t === "x" ? "y" : "x";
}
function AA(t) {
  var a = t.state, o = t.options, i = t.name, s = o.mainAxis, c = s === void 0 ? !0 : s, d = o.altAxis, p = d === void 0 ? !1 : d, m = o.boundary, g = o.rootBoundary, y = o.altBoundary, h = o.padding, C = o.tether, T = C === void 0 ? !0 : C, R = o.tetherOffset, x = R === void 0 ? 0 : R, A = Us(a, {
    boundary: m,
    rootBoundary: g,
    padding: h,
    altBoundary: y
  }), z = lr(a.placement), N = ci(a.placement), O = !N, M = Bh(z), D = wA(M), _ = a.modifiersData.popperOffsets, L = a.rects.reference, k = a.rects.popper, F = typeof x == "function" ? x(Object.assign({}, a.rects, {
    placement: a.placement
  })) : x, E = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), U = a.modifiersData.offset ? a.modifiersData.offset[a.placement] : null, P = {
    x: 0,
    y: 0
  };
  if (_) {
    if (c) {
      var J, te = M === "y" ? Pn : Fn, X = M === "y" ? Ea : Ta, j = M === "y" ? "height" : "width", Y = _[M], W = Y + A[te], G = Y - A[X], de = T ? -k[j] / 2 : 0, xe = N === ii ? L[j] : k[j], Ne = N === ii ? -k[j] : -L[j], Me = a.elements.arrow, B = T && Me ? Nh(Me) : {
        width: 0,
        height: 0
      }, Z = a.modifiersData["arrow#persistent"] ? a.modifiersData["arrow#persistent"].padding : hS(), ne = Z[te], fe = Z[X], me = Ms(0, L[j], B[j]), ve = O ? L[j] / 2 - de - me - ne - E.mainAxis : xe - me - ne - E.mainAxis, he = O ? -L[j] / 2 + de + me + fe + E.mainAxis : Ne + me + fe + E.mainAxis, se = a.elements.arrow && Zs(a.elements.arrow), ue = se ? M === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, _e = (J = U == null ? void 0 : U[M]) != null ? J : 0, Be = Y + ve - _e - ue, $e = Y + he - _e, lt = Ms(T ? Kc(W, Be) : W, Y, T ? el(G, $e) : G);
      _[M] = lt, P[M] = lt - Y;
    }
    if (p) {
      var ye, we = M === "x" ? Pn : Fn, De = M === "x" ? Ea : Ta, Ge = _[D], Ce = D === "y" ? "height" : "width", ge = Ge + A[we], Xe = Ge - A[De], Ye = [Pn, Fn].indexOf(z) !== -1, Tt = (ye = U == null ? void 0 : U[D]) != null ? ye : 0, Bt = Ye ? ge : Ge - L[Ce] - k[Ce] - Tt + E.altAxis, ht = Ye ? Ge + L[Ce] + k[Ce] - Tt - E.altAxis : Xe, Ze = T && Ye ? Qw(Bt, Ge, ht) : Ms(T ? Bt : ge, Ge, T ? ht : Xe);
      _[D] = Ze, P[D] = Ze - Ge;
    }
    a.modifiersData[i] = P;
  }
}
const OA = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: AA,
  requiresIfExists: ["offset"]
};
function MA(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function zA(t) {
  return t === ia(t) || !Ca(t) ? jh(t) : MA(t);
}
function DA(t) {
  var a = t.getBoundingClientRect(), o = si(a.width) / t.offsetWidth || 1, i = si(a.height) / t.offsetHeight || 1;
  return o !== 1 || i !== 1;
}
function NA(t, a, o) {
  o === void 0 && (o = !1);
  var i = Ca(a), s = Ca(a) && DA(a), c = xo(a), d = ui(t, s, o), p = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = {
    x: 0,
    y: 0
  };
  return (i || !i && !o) && ((ir(a) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Lh(c)) && (p = zA(a)), Ca(a) ? (m = ui(a, !0), m.x += a.clientLeft, m.y += a.clientTop) : c && (m.x = $h(c))), {
    x: d.left + p.scrollLeft - m.x,
    y: d.top + p.scrollTop - m.y,
    width: d.width,
    height: d.height
  };
}
function BA(t) {
  var a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), i = [];
  t.forEach(function(c) {
    a.set(c.name, c);
  });
  function s(c) {
    o.add(c.name);
    var d = [].concat(c.requires || [], c.requiresIfExists || []);
    d.forEach(function(p) {
      if (!o.has(p)) {
        var m = a.get(p);
        m && s(m);
      }
    }), i.push(c);
  }
  return t.forEach(function(c) {
    o.has(c.name) || s(c);
  }), i;
}
function jA(t) {
  var a = BA(t);
  return qw.reduce(function(o, i) {
    return o.concat(a.filter(function(s) {
      return s.phase === i;
    }));
  }, []);
}
function $A(t) {
  var a;
  return function() {
    return a || (a = new Promise(function(o) {
      Promise.resolve().then(function() {
        a = void 0, o(t());
      });
    })), a;
  };
}
function LA(t) {
  var a = t.reduce(function(o, i) {
    var s = o[i.name];
    return o[i.name] = s ? Object.assign({}, s, i, {
      options: Object.assign({}, s.options, i.options),
      data: Object.assign({}, s.data, i.data)
    }) : i, o;
  }, {});
  return Object.keys(a).map(function(o) {
    return a[o];
  });
}
var p1 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function m1() {
  for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
    a[o] = arguments[o];
  return !a.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function _A(t) {
  t === void 0 && (t = {});
  var a = t, o = a.defaultModifiers, i = o === void 0 ? [] : o, s = a.defaultOptions, c = s === void 0 ? p1 : s;
  return function(p, m, g) {
    g === void 0 && (g = c);
    var y = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, p1, c),
      modifiersData: {},
      elements: {
        reference: p,
        popper: m
      },
      attributes: {},
      styles: {}
    }, h = [], C = !1, T = {
      state: y,
      setOptions: function(z) {
        var N = typeof z == "function" ? z(y.options) : z;
        x(), y.options = Object.assign({}, c, y.options, N), y.scrollParents = {
          reference: nl(p) ? zs(p) : p.contextElement ? zs(p.contextElement) : [],
          popper: zs(m)
        };
        var O = jA(LA([].concat(i, y.options.modifiers)));
        return y.orderedModifiers = O.filter(function(M) {
          return M.enabled;
        }), R(), T.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!C) {
          var z = y.elements, N = z.reference, O = z.popper;
          if (m1(N, O)) {
            y.rects = {
              reference: NA(N, Zs(O), y.options.strategy === "fixed"),
              popper: Nh(O)
            }, y.reset = !1, y.placement = y.options.placement, y.orderedModifiers.forEach(function(E) {
              return y.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var M = 0; M < y.orderedModifiers.length; M++) {
              if (y.reset === !0) {
                y.reset = !1, M = -1;
                continue;
              }
              var D = y.orderedModifiers[M], _ = D.fn, L = D.options, k = L === void 0 ? {} : L, F = D.name;
              typeof _ == "function" && (y = _({
                state: y,
                options: k,
                name: F,
                instance: T
              }) || y);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $A(function() {
        return new Promise(function(A) {
          T.forceUpdate(), A(y);
        });
      }),
      destroy: function() {
        x(), C = !0;
      }
    };
    if (!m1(p, m))
      return T;
    T.setOptions(g).then(function(A) {
      !C && g.onFirstUpdate && g.onFirstUpdate(A);
    });
    function R() {
      y.orderedModifiers.forEach(function(A) {
        var z = A.name, N = A.options, O = N === void 0 ? {} : N, M = A.effect;
        if (typeof M == "function") {
          var D = M({
            state: y,
            name: z,
            instance: T,
            options: O
          }), _ = function() {
          };
          h.push(D || _);
        }
      });
    }
    function x() {
      h.forEach(function(A) {
        return A();
      }), h = [];
    }
    return T;
  };
}
var kA = [iA, RA, oA, Xw, EA, vA, OA, tA, xA], HA = /* @__PURE__ */ _A({
  defaultModifiers: kA
});
function UA(t) {
  return typeof t == "function" ? t() : t;
}
const xS = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    children: i,
    container: s,
    disablePortal: c = !1
  } = a, [d, p] = b.useState(null), m = Jt(/* @__PURE__ */ b.isValidElement(i) ? gi(i) : null, o);
  if (oa(() => {
    c || p(UA(s) || document.body);
  }, [s, c]), oa(() => {
    if (d && !c)
      return Mm(o, d), () => {
        Mm(o, null);
      };
  }, [o, d, c]), c) {
    if (/* @__PURE__ */ b.isValidElement(i)) {
      const g = {
        ref: m
      };
      return /* @__PURE__ */ b.cloneElement(i, g);
    }
    return i;
  }
  return d && /* @__PURE__ */ cS.createPortal(i, d);
});
function IA(t) {
  return et("MuiPopper", t);
}
Ke("MuiPopper", ["root"]);
function PA(t, a) {
  if (a === "ltr")
    return t;
  switch (t) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return t;
  }
}
function Im(t) {
  return typeof t == "function" ? t() : t;
}
function FA(t) {
  return t.nodeType !== void 0;
}
const VA = (t) => {
  const {
    classes: a
  } = t;
  return tt({
    root: ["root"]
  }, IA, a);
}, qA = {}, GA = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    anchorEl: i,
    children: s,
    direction: c,
    disablePortal: d,
    modifiers: p,
    open: m,
    placement: g,
    popperOptions: y,
    popperRef: h,
    slotProps: C = {},
    slots: T = {},
    TransitionProps: R,
    // @ts-ignore internal logic
    ownerState: x,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...A
  } = a, z = b.useRef(null), N = Jt(z, o), O = b.useRef(null), M = Jt(O, h), D = b.useRef(M);
  oa(() => {
    D.current = M;
  }, [M]), b.useImperativeHandle(h, () => O.current, []);
  const _ = PA(g, c), [L, k] = b.useState(_), [F, E] = b.useState(Im(i));
  b.useEffect(() => {
    O.current && O.current.forceUpdate();
  }), b.useEffect(() => {
    i && E(Im(i));
  }, [i]), oa(() => {
    if (!F || !m)
      return;
    const X = (W) => {
      k(W.placement);
    };
    let j = [{
      name: "preventOverflow",
      options: {
        altBoundary: d
      }
    }, {
      name: "flip",
      options: {
        altBoundary: d
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: W
      }) => {
        X(W);
      }
    }];
    p != null && (j = j.concat(p)), y && y.modifiers != null && (j = j.concat(y.modifiers));
    const Y = HA(F, z.current, {
      placement: _,
      ...y,
      modifiers: j
    });
    return D.current(Y), () => {
      Y.destroy(), D.current(null);
    };
  }, [F, d, p, m, y, _]);
  const U = {
    placement: L
  };
  R !== null && (U.TransitionProps = R);
  const P = VA(a), J = T.root ?? "div", te = Yx({
    elementType: J,
    externalSlotProps: C.root,
    externalForwardedProps: A,
    additionalProps: {
      role: "tooltip",
      ref: N
    },
    ownerState: a,
    className: P.root
  });
  return /* @__PURE__ */ S.jsx(J, {
    ...te,
    children: typeof s == "function" ? s(U) : s
  });
}), YA = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    anchorEl: i,
    children: s,
    container: c,
    direction: d = "ltr",
    disablePortal: p = !1,
    keepMounted: m = !1,
    modifiers: g,
    open: y,
    placement: h = "bottom",
    popperOptions: C = qA,
    popperRef: T,
    style: R,
    transition: x = !1,
    slotProps: A = {},
    slots: z = {},
    ...N
  } = a, [O, M] = b.useState(!0), D = () => {
    M(!1);
  }, _ = () => {
    M(!0);
  };
  if (!m && !y && (!x || O))
    return null;
  let L;
  if (c)
    L = c;
  else if (i) {
    const E = Im(i);
    L = E && FA(E) ? la(E).body : la(null).body;
  }
  const k = !y && m && (!x || O) ? "none" : void 0, F = x ? {
    in: y,
    onEnter: D,
    onExited: _
  } : void 0;
  return /* @__PURE__ */ S.jsx(xS, {
    disablePortal: p,
    container: L,
    children: /* @__PURE__ */ S.jsx(GA, {
      anchorEl: i,
      direction: d,
      disablePortal: p,
      modifiers: g,
      ref: o,
      open: x ? !O : y,
      placement: h,
      popperOptions: C,
      popperRef: T,
      slotProps: A,
      slots: z,
      ...N,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: k,
        ...R
      },
      TransitionProps: F,
      children: s
    })
  });
}), XA = pe(YA, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({}), SS = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = pf(), s = at({
    props: a,
    name: "MuiPopper"
  }), {
    anchorEl: c,
    component: d,
    components: p,
    componentsProps: m,
    container: g,
    disablePortal: y,
    keepMounted: h,
    modifiers: C,
    open: T,
    placement: R,
    popperOptions: x,
    popperRef: A,
    transition: z,
    slots: N,
    slotProps: O,
    ...M
  } = s, D = (N == null ? void 0 : N.root) ?? (p == null ? void 0 : p.Root), _ = {
    anchorEl: c,
    container: g,
    disablePortal: y,
    keepMounted: h,
    modifiers: C,
    open: T,
    placement: R,
    popperOptions: x,
    popperRef: A,
    transition: z,
    ...M
  };
  return /* @__PURE__ */ S.jsx(XA, {
    as: d,
    direction: i ? "rtl" : "ltr",
    slots: {
      root: D
    },
    slotProps: O ?? m,
    ..._,
    ref: o
  });
});
function KA(t) {
  return et("MuiListSubheader", t);
}
Ke("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const WA = (t) => {
  const {
    classes: a,
    color: o,
    disableGutters: i,
    inset: s,
    disableSticky: c
  } = t, d = {
    root: ["root", o !== "default" && `color${ce(o)}`, !i && "gutters", s && "inset", !c && "sticky"]
  };
  return tt(d, KA, a);
}, QA = pe("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.color !== "default" && a[`color${ce(o.color)}`], !o.disableGutters && a.gutters, o.inset && a.inset, !o.disableSticky && a.sticky];
  }
})(qe(({
  theme: t
}) => ({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (t.vars || t).palette.text.secondary,
  fontFamily: t.typography.fontFamily,
  fontWeight: t.typography.fontWeightMedium,
  fontSize: t.typography.pxToRem(14),
  variants: [{
    props: {
      color: "primary"
    },
    style: {
      color: (t.vars || t).palette.primary.main
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: a
    }) => a.inset,
    style: {
      paddingLeft: 72
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disableSticky,
    style: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: (t.vars || t).palette.background.paper
    }
  }]
}))), Pm = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiListSubheader"
  }), {
    className: s,
    color: c = "default",
    component: d = "li",
    disableGutters: p = !1,
    disableSticky: m = !1,
    inset: g = !1,
    ...y
  } = i, h = {
    ...i,
    color: c,
    component: d,
    disableGutters: p,
    disableSticky: m,
    inset: g
  }, C = WA(h);
  return /* @__PURE__ */ S.jsx(QA, {
    as: d,
    className: Te(C.root, s),
    ref: o,
    ownerState: h,
    ...y
  });
});
Pm && (Pm.muiSkipListHighlight = !0);
const ZA = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function JA(t) {
  return et("MuiChip", t);
}
const ut = Ke("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), eO = (t) => {
  const {
    classes: a,
    disabled: o,
    size: i,
    color: s,
    iconColor: c,
    onDelete: d,
    clickable: p,
    variant: m
  } = t, g = {
    root: ["root", m, o && "disabled", `size${ce(i)}`, `color${ce(s)}`, p && "clickable", p && `clickableColor${ce(s)}`, d && "deletable", d && `deletableColor${ce(s)}`, `${m}${ce(s)}`],
    label: ["label", `label${ce(i)}`],
    avatar: ["avatar", `avatar${ce(i)}`, `avatarColor${ce(s)}`],
    icon: ["icon", `icon${ce(i)}`, `iconColor${ce(c)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ce(i)}`, `deleteIconColor${ce(s)}`, `deleteIcon${ce(m)}Color${ce(s)}`]
  };
  return tt(g, JA, a);
}, tO = pe("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t, {
      color: i,
      iconColor: s,
      clickable: c,
      onDelete: d,
      size: p,
      variant: m
    } = o;
    return [{
      [`& .${ut.avatar}`]: a.avatar
    }, {
      [`& .${ut.avatar}`]: a[`avatar${ce(p)}`]
    }, {
      [`& .${ut.avatar}`]: a[`avatarColor${ce(i)}`]
    }, {
      [`& .${ut.icon}`]: a.icon
    }, {
      [`& .${ut.icon}`]: a[`icon${ce(p)}`]
    }, {
      [`& .${ut.icon}`]: a[`iconColor${ce(s)}`]
    }, {
      [`& .${ut.deleteIcon}`]: a.deleteIcon
    }, {
      [`& .${ut.deleteIcon}`]: a[`deleteIcon${ce(p)}`]
    }, {
      [`& .${ut.deleteIcon}`]: a[`deleteIconColor${ce(i)}`]
    }, {
      [`& .${ut.deleteIcon}`]: a[`deleteIcon${ce(m)}Color${ce(i)}`]
    }, a.root, a[`size${ce(p)}`], a[`color${ce(i)}`], c && a.clickable, c && i !== "default" && a[`clickableColor${ce(i)})`], d && a.deletable, d && i !== "default" && a[`deletableColor${ce(i)}`], a[m], a[`${m}${ce(i)}`]];
  }
})(qe(({
  theme: t
}) => {
  const a = t.palette.mode === "light" ? t.palette.grey[700] : t.palette.grey[300];
  return {
    maxWidth: "100%",
    fontFamily: t.typography.fontFamily,
    fontSize: t.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (t.vars || t).palette.text.primary,
    backgroundColor: (t.vars || t).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: t.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${ut.disabled}`]: {
      opacity: (t.vars || t).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ut.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: t.vars ? t.vars.palette.Chip.defaultAvatarColor : a,
      fontSize: t.typography.pxToRem(12)
    },
    [`& .${ut.avatarColorPrimary}`]: {
      color: (t.vars || t).palette.primary.contrastText,
      backgroundColor: (t.vars || t).palette.primary.dark
    },
    [`& .${ut.avatarColorSecondary}`]: {
      color: (t.vars || t).palette.secondary.contrastText,
      backgroundColor: (t.vars || t).palette.secondary.dark
    },
    [`& .${ut.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: t.typography.pxToRem(10)
    },
    [`& .${ut.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ut.deleteIcon}`]: {
      WebkitTapHighlightColor: "transparent",
      color: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / 0.26)` : dt(t.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / 0.4)` : dt(t.palette.text.primary, 0.4)
      }
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        height: 24,
        [`& .${ut.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ut.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(t.palette).filter(wn(["contrastText"])).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        backgroundColor: (t.vars || t).palette[o].main,
        color: (t.vars || t).palette[o].contrastText,
        [`& .${ut.deleteIcon}`]: {
          color: t.vars ? `rgba(${t.vars.palette[o].contrastTextChannel} / 0.7)` : dt(t.palette[o].contrastText, 0.7),
          "&:hover, &:active": {
            color: (t.vars || t).palette[o].contrastText
          }
        }
      }
    })), {
      props: (o) => o.iconColor === o.color,
      style: {
        [`& .${ut.icon}`]: {
          color: t.vars ? t.vars.palette.Chip.defaultIconColor : a
        }
      }
    }, {
      props: (o) => o.iconColor === o.color && o.color !== "default",
      style: {
        [`& .${ut.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${ut.focusVisible}`]: {
          backgroundColor: t.vars ? `rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : dt(t.palette.action.selected, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
        }
      }
    }, ...Object.entries(t.palette).filter(wn(["dark"])).map(([o]) => ({
      props: {
        color: o,
        onDelete: !0
      },
      style: {
        [`&.${ut.focusVisible}`]: {
          background: (t.vars || t).palette[o].dark
        }
      }
    })), {
      props: {
        clickable: !0
      },
      style: {
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: t.vars ? `rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : dt(t.palette.action.selected, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity)
        },
        [`&.${ut.focusVisible}`]: {
          backgroundColor: t.vars ? `rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : dt(t.palette.action.selected, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
        },
        "&:active": {
          boxShadow: (t.vars || t).shadows[1]
        }
      }
    }, ...Object.entries(t.palette).filter(wn(["dark"])).map(([o]) => ({
      props: {
        color: o,
        clickable: !0
      },
      style: {
        [`&:hover, &.${ut.focusVisible}`]: {
          backgroundColor: (t.vars || t).palette[o].dark
        }
      }
    })), {
      props: {
        variant: "outlined"
      },
      style: {
        backgroundColor: "transparent",
        border: t.vars ? `1px solid ${t.vars.palette.Chip.defaultBorder}` : `1px solid ${t.palette.mode === "light" ? t.palette.grey[400] : t.palette.grey[700]}`,
        [`&.${ut.clickable}:hover`]: {
          backgroundColor: (t.vars || t).palette.action.hover
        },
        [`&.${ut.focusVisible}`]: {
          backgroundColor: (t.vars || t).palette.action.focus
        },
        [`& .${ut.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ut.avatarSmall}`]: {
          marginLeft: 2
        },
        [`& .${ut.icon}`]: {
          marginLeft: 4
        },
        [`& .${ut.iconSmall}`]: {
          marginLeft: 2
        },
        [`& .${ut.deleteIcon}`]: {
          marginRight: 5
        },
        [`& .${ut.deleteIconSmall}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(t.palette).filter(wn()).map(([o]) => ({
      props: {
        variant: "outlined",
        color: o
      },
      style: {
        color: (t.vars || t).palette[o].main,
        border: `1px solid ${t.vars ? `rgba(${t.vars.palette[o].mainChannel} / 0.7)` : dt(t.palette[o].main, 0.7)}`,
        [`&.${ut.clickable}:hover`]: {
          backgroundColor: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : dt(t.palette[o].main, t.palette.action.hoverOpacity)
        },
        [`&.${ut.focusVisible}`]: {
          backgroundColor: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.focusOpacity})` : dt(t.palette[o].main, t.palette.action.focusOpacity)
        },
        [`& .${ut.deleteIcon}`]: {
          color: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / 0.7)` : dt(t.palette[o].main, 0.7),
          "&:hover, &:active": {
            color: (t.vars || t).palette[o].main
          }
        }
      }
    }))]
  };
})), nO = pe("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t, {
      size: i
    } = o;
    return [a.label, a[`label${ce(i)}`]];
  }
})({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      variant: "outlined"
    },
    style: {
      paddingLeft: 11,
      paddingRight: 11
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingLeft: 8,
      paddingRight: 8
    }
  }, {
    props: {
      size: "small",
      variant: "outlined"
    },
    style: {
      paddingLeft: 7,
      paddingRight: 7
    }
  }]
});
function h1(t) {
  return t.key === "Backspace" || t.key === "Delete";
}
const fi = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiChip"
  }), {
    avatar: s,
    className: c,
    clickable: d,
    color: p = "default",
    component: m,
    deleteIcon: g,
    disabled: y = !1,
    icon: h,
    label: C,
    onClick: T,
    onDelete: R,
    onKeyDown: x,
    onKeyUp: A,
    size: z = "medium",
    variant: N = "filled",
    tabIndex: O,
    skipFocusWhenDisabled: M = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    ...D
  } = i, _ = b.useRef(null), L = Jt(_, o), k = (G) => {
    G.stopPropagation(), R && R(G);
  }, F = (G) => {
    G.currentTarget === G.target && h1(G) && G.preventDefault(), x && x(G);
  }, E = (G) => {
    G.currentTarget === G.target && R && h1(G) && R(G), A && A(G);
  }, U = d !== !1 && T ? !0 : d, P = U || R ? tl : m || "div", J = {
    ...i,
    component: P,
    disabled: y,
    size: z,
    color: p,
    iconColor: /* @__PURE__ */ b.isValidElement(h) && h.props.color || p,
    onDelete: !!R,
    clickable: U,
    variant: N
  }, te = eO(J), X = P === tl ? {
    component: m || "div",
    focusVisibleClassName: te.focusVisible,
    ...R && {
      disableRipple: !0
    }
  } : {};
  let j = null;
  R && (j = g && /* @__PURE__ */ b.isValidElement(g) ? /* @__PURE__ */ b.cloneElement(g, {
    className: Te(g.props.className, te.deleteIcon),
    onClick: k
  }) : /* @__PURE__ */ S.jsx(ZA, {
    className: Te(te.deleteIcon),
    onClick: k
  }));
  let Y = null;
  s && /* @__PURE__ */ b.isValidElement(s) && (Y = /* @__PURE__ */ b.cloneElement(s, {
    className: Te(te.avatar, s.props.className)
  }));
  let W = null;
  return h && /* @__PURE__ */ b.isValidElement(h) && (W = /* @__PURE__ */ b.cloneElement(h, {
    className: Te(te.icon, h.props.className)
  })), /* @__PURE__ */ S.jsxs(tO, {
    as: P,
    className: Te(te.root, c),
    disabled: U && y ? !0 : void 0,
    onClick: T,
    onKeyDown: F,
    onKeyUp: E,
    ref: L,
    tabIndex: M && y ? -1 : O,
    ownerState: J,
    ...X,
    ...D,
    children: [Y || W, /* @__PURE__ */ S.jsx(nO, {
      className: Te(te.label),
      ownerState: J,
      children: C
    }), j]
  });
});
function zc(t) {
  return parseInt(t, 10) || 0;
}
const aO = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function rO(t) {
  for (const a in t)
    return !1;
  return !0;
}
function g1(t) {
  return rO(t) || t.outerHeightStyle === 0 && !t.overflowing;
}
const oO = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    onChange: i,
    maxRows: s,
    minRows: c = 1,
    style: d,
    value: p,
    ...m
  } = a, {
    current: g
  } = b.useRef(p != null), y = b.useRef(null), h = Jt(o, y), C = b.useRef(null), T = b.useRef(null), R = b.useCallback(() => {
    const O = y.current, M = T.current;
    if (!O || !M)
      return;
    const _ = Ua(O).getComputedStyle(O);
    if (_.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    M.style.width = _.width, M.value = O.value || a.placeholder || "x", M.value.slice(-1) === `
` && (M.value += " ");
    const L = _.boxSizing, k = zc(_.paddingBottom) + zc(_.paddingTop), F = zc(_.borderBottomWidth) + zc(_.borderTopWidth), E = M.scrollHeight;
    M.value = "x";
    const U = M.scrollHeight;
    let P = E;
    c && (P = Math.max(Number(c) * U, P)), s && (P = Math.min(Number(s) * U, P)), P = Math.max(P, U);
    const J = P + (L === "border-box" ? k + F : 0), te = Math.abs(P - E) <= 1;
    return {
      outerHeightStyle: J,
      overflowing: te
    };
  }, [s, c, a.placeholder]), x = La(() => {
    const O = y.current, M = R();
    if (!O || !M || g1(M))
      return !1;
    const D = M.outerHeightStyle;
    return C.current != null && C.current !== D;
  }), A = b.useCallback(() => {
    const O = y.current, M = R();
    if (!O || !M || g1(M))
      return;
    const D = M.outerHeightStyle;
    C.current !== D && (C.current = D, O.style.height = `${D}px`), O.style.overflow = M.overflowing ? "hidden" : "";
  }, [R]), z = b.useRef(-1);
  oa(() => {
    const O = gh(A), M = y == null ? void 0 : y.current;
    if (!M)
      return;
    const D = Ua(M);
    D.addEventListener("resize", O);
    let _;
    return typeof ResizeObserver < "u" && (_ = new ResizeObserver(() => {
      x() && (_.unobserve(M), cancelAnimationFrame(z.current), A(), z.current = requestAnimationFrame(() => {
        _.observe(M);
      }));
    }), _.observe(M)), () => {
      O.clear(), cancelAnimationFrame(z.current), D.removeEventListener("resize", O), _ && _.disconnect();
    };
  }, [R, A, x]), oa(() => {
    A();
  });
  const N = (O) => {
    g || A(), i && i(O);
  };
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx("textarea", {
      value: p,
      onChange: N,
      ref: h,
      rows: c,
      style: d,
      ...m
    }), /* @__PURE__ */ S.jsx("textarea", {
      "aria-hidden": !0,
      className: a.className,
      readOnly: !0,
      ref: T,
      tabIndex: -1,
      style: {
        ...aO.shadow,
        ...d,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
});
function Fm(t) {
  return typeof t == "string";
}
function yi({
  props: t,
  states: a,
  muiFormControl: o
}) {
  return a.reduce((i, s) => (i[s] = t[s], o && typeof t[s] > "u" && (i[s] = o[s]), i), {});
}
const _h = /* @__PURE__ */ b.createContext(void 0);
function vi() {
  return b.useContext(_h);
}
function y1(t) {
  return t != null && !(Array.isArray(t) && t.length === 0);
}
function Wc(t, a = !1) {
  return t && (y1(t.value) && t.value !== "" || a && y1(t.defaultValue) && t.defaultValue !== "");
}
function lO(t) {
  return t.startAdornment;
}
function iO(t) {
  return et("MuiInputBase", t);
}
const ta = Ke("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
var v1;
const hf = (t, a) => {
  const {
    ownerState: o
  } = t;
  return [a.root, o.formControl && a.formControl, o.startAdornment && a.adornedStart, o.endAdornment && a.adornedEnd, o.error && a.error, o.size === "small" && a.sizeSmall, o.multiline && a.multiline, o.color && a[`color${ce(o.color)}`], o.fullWidth && a.fullWidth, o.hiddenLabel && a.hiddenLabel];
}, gf = (t, a) => {
  const {
    ownerState: o
  } = t;
  return [a.input, o.size === "small" && a.inputSizeSmall, o.multiline && a.inputMultiline, o.type === "search" && a.inputTypeSearch, o.startAdornment && a.inputAdornedStart, o.endAdornment && a.inputAdornedEnd, o.hiddenLabel && a.inputHiddenLabel];
}, sO = (t) => {
  const {
    classes: a,
    color: o,
    disabled: i,
    error: s,
    endAdornment: c,
    focused: d,
    formControl: p,
    fullWidth: m,
    hiddenLabel: g,
    multiline: y,
    readOnly: h,
    size: C,
    startAdornment: T,
    type: R
  } = t, x = {
    root: ["root", `color${ce(o)}`, i && "disabled", s && "error", m && "fullWidth", d && "focused", p && "formControl", C && C !== "medium" && `size${ce(C)}`, y && "multiline", T && "adornedStart", c && "adornedEnd", g && "hiddenLabel", h && "readOnly"],
    input: ["input", i && "disabled", R === "search" && "inputTypeSearch", y && "inputMultiline", C === "small" && "inputSizeSmall", g && "inputHiddenLabel", T && "inputAdornedStart", c && "inputAdornedEnd", h && "readOnly"]
  };
  return tt(x, iO, a);
}, yf = pe("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: hf
})(qe(({
  theme: t
}) => ({
  ...t.typography.body1,
  color: (t.vars || t).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ta.disabled}`]: {
    color: (t.vars || t).palette.text.disabled,
    cursor: "default"
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.multiline,
    style: {
      padding: "4px 0 5px"
    }
  }, {
    props: ({
      ownerState: a,
      size: o
    }) => a.multiline && o === "small",
    style: {
      paddingTop: 1
    }
  }, {
    props: ({
      ownerState: a
    }) => a.fullWidth,
    style: {
      width: "100%"
    }
  }]
}))), vf = pe("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: gf
})(qe(({
  theme: t
}) => {
  const a = t.palette.mode === "light", o = {
    color: "currentColor",
    ...t.vars ? {
      opacity: t.vars.opacity.inputPlaceholder
    } : {
      opacity: a ? 0.42 : 0.5
    },
    transition: t.transitions.create("opacity", {
      duration: t.transitions.duration.shorter
    })
  }, i = {
    opacity: "0 !important"
  }, s = t.vars ? {
    opacity: t.vars.opacity.inputPlaceholder
  } : {
    opacity: a ? 0.42 : 0.5
  };
  return {
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    "&::-webkit-input-placeholder": o,
    "&::-moz-placeholder": o,
    // Firefox 19+
    "&::-ms-input-placeholder": o,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${ta.formControl} &`]: {
      "&::-webkit-input-placeholder": i,
      "&::-moz-placeholder": i,
      // Firefox 19+
      "&::-ms-input-placeholder": i,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${ta.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (t.vars || t).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: c
      }) => !c.disableInjectingGlobalStyles,
      style: {
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: "mui-auto-fill"
        }
      }
    }, {
      props: {
        size: "small"
      },
      style: {
        paddingTop: 1
      }
    }, {
      props: ({
        ownerState: c
      }) => c.multiline,
      style: {
        height: "auto",
        resize: "none",
        padding: 0,
        paddingTop: 0
      }
    }, {
      props: {
        type: "search"
      },
      style: {
        MozAppearance: "textfield"
        // Improve type search style.
      }
    }]
  };
})), b1 = M4({
  "@keyframes mui-auto-fill": {
    from: {
      display: "block"
    }
  },
  "@keyframes mui-auto-fill-cancel": {
    from: {
      display: "block"
    }
  }
}), kh = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: c,
    autoFocus: d,
    className: p,
    color: m,
    components: g = {},
    componentsProps: y = {},
    defaultValue: h,
    disabled: C,
    disableInjectingGlobalStyles: T,
    endAdornment: R,
    error: x,
    fullWidth: A = !1,
    id: z,
    inputComponent: N = "input",
    inputProps: O = {},
    inputRef: M,
    margin: D,
    maxRows: _,
    minRows: L,
    multiline: k = !1,
    name: F,
    onBlur: E,
    onChange: U,
    onClick: P,
    onFocus: J,
    onKeyDown: te,
    onKeyUp: X,
    placeholder: j,
    readOnly: Y,
    renderSuffix: W,
    rows: G,
    size: de,
    slotProps: xe = {},
    slots: Ne = {},
    startAdornment: Me,
    type: B = "text",
    value: Z,
    ...ne
  } = i, fe = O.value != null ? O.value : Z, {
    current: me
  } = b.useRef(fe != null), ve = b.useRef(), he = b.useCallback((Fe) => {
  }, []), se = Jt(ve, M, O.ref, he), [ue, _e] = b.useState(!1), Be = vi(), $e = yi({
    props: i,
    muiFormControl: Be,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  $e.focused = Be ? Be.focused : ue, b.useEffect(() => {
    !Be && C && ue && (_e(!1), E && E());
  }, [Be, C, ue, E]);
  const lt = Be && Be.onFilled, ye = Be && Be.onEmpty, we = b.useCallback((Fe) => {
    Wc(Fe) ? lt && lt() : ye && ye();
  }, [lt, ye]);
  oa(() => {
    me && we({
      value: fe
    });
  }, [fe, we, me]);
  const De = (Fe) => {
    J && J(Fe), O.onFocus && O.onFocus(Fe), Be && Be.onFocus ? Be.onFocus(Fe) : _e(!0);
  }, Ge = (Fe) => {
    E && E(Fe), O.onBlur && O.onBlur(Fe), Be && Be.onBlur ? Be.onBlur(Fe) : _e(!1);
  }, Ce = (Fe, ..._t) => {
    if (!me) {
      const jt = Fe.target || ve.current;
      if (jt == null)
        throw new Error(Or(1));
      we({
        value: jt.value
      });
    }
    O.onChange && O.onChange(Fe, ..._t), U && U(Fe, ..._t);
  };
  b.useEffect(() => {
    we(ve.current);
  }, []);
  const ge = (Fe) => {
    ve.current && Fe.currentTarget === Fe.target && ve.current.focus(), P && P(Fe);
  };
  let Xe = N, Ye = O;
  k && Xe === "input" && (G ? Ye = {
    type: void 0,
    minRows: G,
    maxRows: G,
    ...Ye
  } : Ye = {
    type: void 0,
    maxRows: _,
    minRows: L,
    ...Ye
  }, Xe = oO);
  const Tt = (Fe) => {
    we(Fe.animationName === "mui-auto-fill-cancel" ? ve.current : {
      value: "x"
    });
  };
  b.useEffect(() => {
    Be && Be.setAdornedStart(!!Me);
  }, [Be, Me]);
  const Bt = {
    ...i,
    color: $e.color || "primary",
    disabled: $e.disabled,
    endAdornment: R,
    error: $e.error,
    focused: $e.focused,
    formControl: Be,
    fullWidth: A,
    hiddenLabel: $e.hiddenLabel,
    multiline: k,
    size: $e.size,
    startAdornment: Me,
    type: B
  }, ht = sO(Bt), Ze = Ne.root || g.Root || yf, He = xe.root || y.root || {}, Ue = Ne.input || g.Input || vf;
  return Ye = {
    ...Ye,
    ...xe.input ?? y.input
  }, /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [!T && typeof b1 == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (v1 || (v1 = /* @__PURE__ */ S.jsx(b1, {}))), /* @__PURE__ */ S.jsxs(Ze, {
      ...He,
      ref: o,
      onClick: ge,
      ...ne,
      ...!Fm(Ze) && {
        ownerState: {
          ...Bt,
          ...He.ownerState
        }
      },
      className: Te(ht.root, He.className, p, Y && "MuiInputBase-readOnly"),
      children: [Me, /* @__PURE__ */ S.jsx(_h.Provider, {
        value: null,
        children: /* @__PURE__ */ S.jsx(Ue, {
          "aria-invalid": $e.error,
          "aria-describedby": s,
          autoComplete: c,
          autoFocus: d,
          defaultValue: h,
          disabled: $e.disabled,
          id: z,
          onAnimationStart: Tt,
          name: F,
          placeholder: j,
          readOnly: Y,
          required: $e.required,
          rows: G,
          value: fe,
          onKeyDown: te,
          onKeyUp: X,
          type: B,
          ...Ye,
          ...!Fm(Ue) && {
            as: Xe,
            ownerState: {
              ...Bt,
              ...Ye.ownerState
            }
          },
          ref: se,
          className: Te(ht.input, Ye.className, Y && "MuiInputBase-readOnly"),
          onBlur: Ge,
          onChange: Ce,
          onFocus: De
        })
      }), R, W ? W({
        ...$e,
        startAdornment: Me
      }) : null]
    })]
  });
});
function uO(t) {
  return et("MuiInput", t);
}
const po = {
  ...ta,
  ...Ke("MuiInput", ["root", "underline", "input"])
};
function cO(t) {
  return et("MuiOutlinedInput", t);
}
const va = {
  ...ta,
  ...Ke("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function fO(t) {
  return et("MuiFilledInput", t);
}
const na = {
  ...ta,
  ...Ke("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
}, CS = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
function dO(t) {
  return et("MuiAutocomplete", t);
}
const nt = Ke("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]);
var x1, S1;
const pO = (t) => {
  const {
    classes: a,
    disablePortal: o,
    expanded: i,
    focused: s,
    fullWidth: c,
    hasClearIcon: d,
    hasPopupIcon: p,
    inputFocused: m,
    popupOpen: g,
    size: y
  } = t, h = {
    root: ["root", i && "expanded", s && "focused", c && "fullWidth", d && "hasClearIcon", p && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", m && "inputFocused"],
    tag: ["tag", `tagSize${ce(y)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", g && "popupIndicatorOpen"],
    popper: ["popper", o && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return tt(h, dO, a);
}, mO = pe("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t, {
      fullWidth: i,
      hasClearIcon: s,
      hasPopupIcon: c,
      inputFocused: d,
      size: p
    } = o;
    return [{
      [`& .${nt.tag}`]: a.tag
    }, {
      [`& .${nt.tag}`]: a[`tagSize${ce(p)}`]
    }, {
      [`& .${nt.inputRoot}`]: a.inputRoot
    }, {
      [`& .${nt.input}`]: a.input
    }, {
      [`& .${nt.input}`]: d && a.inputFocused
    }, a.root, i && a.fullWidth, c && a.hasPopupIcon, s && a.hasClearIcon];
  }
})({
  [`&.${nt.focused} .${nt.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${nt.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${nt.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${nt.inputRoot}`]: {
    [`.${nt.hasPopupIcon}&, .${nt.hasClearIcon}&`]: {
      paddingRight: 30
    },
    [`.${nt.hasPopupIcon}.${nt.hasClearIcon}&`]: {
      paddingRight: 56
    },
    [`& .${nt.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${po.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${po.root}.${ta.sizeSmall}`]: {
    [`& .${po.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${va.root}`]: {
    padding: 9,
    [`.${nt.hasPopupIcon}&, .${nt.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${nt.hasPopupIcon}.${nt.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${nt.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${nt.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${va.root}.${ta.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${nt.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${na.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${nt.hasPopupIcon}&, .${nt.hasClearIcon}&`]: {
      paddingRight: 39
    },
    [`.${nt.hasPopupIcon}.${nt.hasClearIcon}&`]: {
      paddingRight: 65
    },
    [`& .${na.input}`]: {
      padding: "7px 4px"
    },
    [`& .${nt.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${na.root}.${ta.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${na.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${ta.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${na.root}.${ta.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${nt.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${na.root}.${ta.hiddenLabel}.${ta.sizeSmall}`]: {
    [`& .${nt.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${nt.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${nt.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${nt.input}`]: {
        opacity: 1
      }
    }
  }, {
    props: {
      multiple: !0
    },
    style: {
      [`& .${nt.inputRoot}`]: {
        flexWrap: "wrap"
      }
    }
  }]
}), hO = pe("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (t, a) => a.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), gO = pe(Ws, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (t, a) => a.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), yO = pe(Ws, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.popupIndicator, o.popupOpen && a.popupIndicatorOpen];
  }
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), vO = pe(SS, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [{
      [`& .${nt.option}`]: a.option
    }, a.popper, o.disablePortal && a.popperDisablePortal];
  }
})(qe(({
  theme: t
}) => ({
  zIndex: (t.vars || t).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
}))), bO = pe(al, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (t, a) => a.paper
})(qe(({
  theme: t
}) => ({
  ...t.typography.body1,
  overflow: "auto"
}))), xO = pe("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (t, a) => a.loading
})(qe(({
  theme: t
}) => ({
  color: (t.vars || t).palette.text.secondary,
  padding: "14px 16px"
}))), SO = pe("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (t, a) => a.noOptions
})(qe(({
  theme: t
}) => ({
  color: (t.vars || t).palette.text.secondary,
  padding: "14px 16px"
}))), CO = pe("ul", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (t, a) => a.listbox
})(qe(({
  theme: t
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${nt.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [t.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${nt.focused}`]: {
      backgroundColor: (t.vars || t).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (t.vars || t).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${nt.focusVisible}`]: {
      backgroundColor: (t.vars || t).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : dt(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${nt.focused}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : dt(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (t.vars || t).palette.action.selected
        }
      },
      [`&.${nt.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : dt(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    }
  }
}))), EO = pe(Pm, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (t, a) => a.groupLabel
})(qe(({
  theme: t
}) => ({
  backgroundColor: (t.vars || t).palette.background.paper,
  top: -8
}))), TO = pe("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (t, a) => a.groupUl
})({
  padding: 0,
  [`& .${nt.option}`]: {
    paddingLeft: 24
  }
}), C1 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiAutocomplete"
  }), {
    autoComplete: s = !1,
    autoHighlight: c = !1,
    autoSelect: d = !1,
    blurOnSelect: p = !1,
    ChipProps: m,
    className: g,
    clearIcon: y = x1 || (x1 = /* @__PURE__ */ S.jsx(Ew, {
      fontSize: "small"
    })),
    clearOnBlur: h = !i.freeSolo,
    clearOnEscape: C = !1,
    clearText: T = "Clear",
    closeText: R = "Close",
    componentsProps: x,
    defaultValue: A = i.multiple ? [] : null,
    disableClearable: z = !1,
    disableCloseOnSelect: N = !1,
    disabled: O = !1,
    disabledItemsFocusable: M = !1,
    disableListWrap: D = !1,
    disablePortal: _ = !1,
    filterOptions: L,
    filterSelectedOptions: k = !1,
    forcePopupIcon: F = "auto",
    freeSolo: E = !1,
    fullWidth: U = !1,
    getLimitTagsText: P = (Ie) => `+${Ie}`,
    getOptionDisabled: J,
    getOptionKey: te,
    getOptionLabel: X,
    isOptionEqualToValue: j,
    groupBy: Y,
    handleHomeEndKeys: W = !i.freeSolo,
    id: G,
    includeInputInList: de = !1,
    inputValue: xe,
    limitTags: Ne = -1,
    ListboxComponent: Me,
    ListboxProps: B,
    loading: Z = !1,
    loadingText: ne = "Loading…",
    multiple: fe = !1,
    noOptionsText: me = "No options",
    onChange: ve,
    onClose: he,
    onHighlightChange: se,
    onInputChange: ue,
    onOpen: _e,
    open: Be,
    openOnFocus: $e = !1,
    openText: lt = "Open",
    options: ye,
    PaperComponent: we,
    PopperComponent: De,
    popupIcon: Ge = S1 || (S1 = /* @__PURE__ */ S.jsx(CS, {})),
    readOnly: Ce = !1,
    renderGroup: ge,
    renderInput: Xe,
    renderOption: Ye,
    renderTags: Tt,
    selectOnFocus: Bt = !i.freeSolo,
    size: ht = "medium",
    slots: Ze = {},
    slotProps: He = {},
    value: Ue,
    ...Fe
  } = i, {
    getRootProps: _t,
    getInputProps: jt,
    getInputLabelProps: Ia,
    getPopupIndicatorProps: ze,
    getClearProps: Je,
    getTagProps: Ft,
    getListboxProps: jn,
    getOptionProps: tn,
    value: Gn,
    dirty: Pa,
    expanded: Oa,
    id: Ma,
    popupOpen: sa,
    focused: So,
    focusedTag: rl,
    anchorEl: cr,
    setAnchorEl: fr,
    inputValue: mn,
    groupedOptions: Cn
  } = Bw({
    ...i,
    componentName: "Autocomplete"
  }), sn = !z && !O && Pa && !Ce, Co = (!E || F === !0) && F !== !1, {
    onMouseDown: Si
  } = jt(), {
    ref: Ci,
    ...jr
  } = jn(), Fa = X || ((Ie) => Ie.label ?? Ie), Ut = {
    ...i,
    disablePortal: _,
    expanded: Oa,
    focused: So,
    fullWidth: U,
    getOptionLabel: Fa,
    hasClearIcon: sn,
    hasPopupIcon: Co,
    inputFocused: rl === -1,
    popupOpen: sa,
    size: ht
  }, Vt = pO(Ut), En = {
    slots: {
      paper: we,
      popper: De,
      ...Ze
    },
    slotProps: {
      chip: m,
      listbox: B,
      ...x,
      ...He
    }
  }, [Eo, ie] = pt("listbox", {
    elementType: CO,
    externalForwardedProps: En,
    ownerState: Ut,
    className: Vt.listbox,
    additionalProps: jr,
    ref: Ci
  }), [re, Ee] = pt("paper", {
    elementType: al,
    externalForwardedProps: En,
    ownerState: Ut,
    className: Vt.paper
  }), [Pe, ot] = pt("popper", {
    elementType: SS,
    externalForwardedProps: En,
    ownerState: Ut,
    className: Vt.popper,
    additionalProps: {
      disablePortal: _,
      style: {
        width: cr ? cr.clientWidth : null
      },
      role: "presentation",
      anchorEl: cr,
      open: sa
    }
  });
  let xt;
  if (fe && Gn.length > 0) {
    const Ie = (kt) => ({
      className: Vt.tag,
      disabled: O,
      ...Ft(kt)
    });
    Tt ? xt = Tt(Gn, Ie, Ut) : xt = Gn.map((kt, Mn) => {
      const {
        key: Lr,
        ...Cf
      } = Ie({
        index: Mn
      });
      return /* @__PURE__ */ S.jsx(fi, {
        label: Fa(kt),
        size: ht,
        ...Cf,
        ...En.slotProps.chip
      }, Lr);
    });
  }
  if (Ne > -1 && Array.isArray(xt)) {
    const Ie = xt.length - Ne;
    !So && Ie > 0 && (xt = xt.splice(0, Ne), xt.push(/* @__PURE__ */ S.jsx("span", {
      className: Vt.tag,
      children: P(Ie)
    }, xt.length)));
  }
  const On = ge || ((Ie) => /* @__PURE__ */ S.jsxs("li", {
    children: [/* @__PURE__ */ S.jsx(EO, {
      className: Vt.groupLabel,
      ownerState: Ut,
      component: "div",
      children: Ie.group
    }), /* @__PURE__ */ S.jsx(TO, {
      className: Vt.groupUl,
      ownerState: Ut,
      children: Ie.children
    })]
  }, Ie.key)), Ei = Ye || ((Ie, kt) => {
    const {
      key: Mn,
      ...Lr
    } = Ie;
    return /* @__PURE__ */ S.jsx("li", {
      ...Lr,
      children: Fa(kt)
    }, Mn);
  }), Ti = (Ie, kt) => {
    const Mn = tn({
      option: Ie,
      index: kt
    });
    return Ei({
      ...Mn,
      className: Vt.option
    }, Ie, {
      selected: Mn["aria-selected"],
      index: kt,
      inputValue: mn
    }, Ut);
  }, Ro = En.slotProps.clearIndicator, $n = En.slotProps.popupIndicator;
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx(mO, {
      ref: o,
      className: Te(Vt.root, g),
      ownerState: Ut,
      ..._t(Fe),
      children: Xe({
        id: Ma,
        disabled: O,
        fullWidth: !0,
        size: ht === "small" ? "small" : void 0,
        InputLabelProps: Ia(),
        InputProps: {
          ref: fr,
          className: Vt.inputRoot,
          startAdornment: xt,
          onMouseDown: (Ie) => {
            Ie.target === Ie.currentTarget && Si(Ie);
          },
          ...(sn || Co) && {
            endAdornment: /* @__PURE__ */ S.jsxs(hO, {
              className: Vt.endAdornment,
              ownerState: Ut,
              children: [sn ? /* @__PURE__ */ S.jsx(gO, {
                ...Je(),
                "aria-label": T,
                title: T,
                ownerState: Ut,
                ...Ro,
                className: Te(Vt.clearIndicator, Ro == null ? void 0 : Ro.className),
                children: y
              }) : null, Co ? /* @__PURE__ */ S.jsx(yO, {
                ...ze(),
                disabled: O,
                "aria-label": sa ? R : lt,
                title: sa ? R : lt,
                ownerState: Ut,
                ...$n,
                className: Te(Vt.popupIndicator, $n == null ? void 0 : $n.className),
                children: Ge
              }) : null]
            })
          }
        },
        inputProps: {
          className: Vt.input,
          disabled: O,
          readOnly: Ce,
          ...jt()
        }
      })
    }), cr ? /* @__PURE__ */ S.jsx(vO, {
      as: Pe,
      ...ot,
      children: /* @__PURE__ */ S.jsxs(bO, {
        as: re,
        ...Ee,
        children: [Z && Cn.length === 0 ? /* @__PURE__ */ S.jsx(xO, {
          className: Vt.loading,
          ownerState: Ut,
          children: ne
        }) : null, Cn.length === 0 && !E && !Z ? /* @__PURE__ */ S.jsx(SO, {
          className: Vt.noOptions,
          ownerState: Ut,
          role: "presentation",
          onMouseDown: (Ie) => {
            Ie.preventDefault();
          },
          children: me
        }) : null, Cn.length > 0 ? /* @__PURE__ */ S.jsx(Eo, {
          as: Me,
          ...ie,
          children: Cn.map((Ie, kt) => Y ? On({
            key: Ie.key,
            group: Ie.group,
            children: Ie.options.map((Mn, Lr) => Ti(Mn, Ie.index + Lr))
          }) : Ti(Ie, kt))
        }) : null]
      })
    }) : null]
  });
}), RO = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Vm = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = bo(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    addEndListener: c,
    appear: d = !0,
    children: p,
    easing: m,
    in: g,
    onEnter: y,
    onEntered: h,
    onEntering: C,
    onExit: T,
    onExited: R,
    onExiting: x,
    style: A,
    timeout: z = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: N = wa,
    ...O
  } = a, M = b.useRef(null), D = Jt(M, gi(p), o), _ = (te) => (X) => {
    if (te) {
      const j = M.current;
      X === void 0 ? te(j) : te(j, X);
    }
  }, L = _(C), k = _((te, X) => {
    Oh(te);
    const j = vo({
      style: A,
      timeout: z,
      easing: m
    }, {
      mode: "enter"
    });
    te.style.webkitTransition = i.transitions.create("opacity", j), te.style.transition = i.transitions.create("opacity", j), y && y(te, X);
  }), F = _(h), E = _(x), U = _((te) => {
    const X = vo({
      style: A,
      timeout: z,
      easing: m
    }, {
      mode: "exit"
    });
    te.style.webkitTransition = i.transitions.create("opacity", X), te.style.transition = i.transitions.create("opacity", X), T && T(te);
  }), P = _(R), J = (te) => {
    c && c(M.current, te);
  };
  return /* @__PURE__ */ S.jsx(N, {
    appear: d,
    in: g,
    nodeRef: M,
    onEnter: k,
    onEntered: F,
    onEntering: L,
    onExit: U,
    onExited: P,
    onExiting: E,
    addEndListener: J,
    timeout: z,
    ...O,
    children: (te, {
      ownerState: X,
      ...j
    }) => /* @__PURE__ */ b.cloneElement(p, {
      style: {
        opacity: 0,
        visibility: te === "exited" && !g ? "hidden" : void 0,
        ...RO[te],
        ...A,
        ...p.props.style
      },
      ref: D,
      ...j
    })
  });
});
function wO(t) {
  return et("MuiBackdrop", t);
}
Ke("MuiBackdrop", ["root", "invisible"]);
const AO = (t) => {
  const {
    classes: a,
    invisible: o
  } = t;
  return tt({
    root: ["root", o && "invisible"]
  }, wO, a);
}, OO = pe("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.invisible && a.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), ES = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: c,
    component: d = "div",
    invisible: p = !1,
    open: m,
    components: g = {},
    componentsProps: y = {},
    slotProps: h = {},
    slots: C = {},
    TransitionComponent: T,
    transitionDuration: R,
    ...x
  } = i, A = {
    ...i,
    component: d,
    invisible: p
  }, z = AO(A), N = {
    transition: T,
    root: g.Root,
    ...C
  }, O = {
    ...y,
    ...h
  }, M = {
    slots: N,
    slotProps: O
  }, [D, _] = pt("root", {
    elementType: OO,
    externalForwardedProps: M,
    className: Te(z.root, c),
    ownerState: A
  }), [L, k] = pt("transition", {
    elementType: Vm,
    externalForwardedProps: M,
    ownerState: A
  });
  return /* @__PURE__ */ S.jsx(L, {
    in: m,
    timeout: R,
    ...x,
    ...k,
    children: /* @__PURE__ */ S.jsx(D, {
      "aria-hidden": !0,
      ..._,
      classes: z,
      ref: o,
      children: s
    })
  });
});
function MO(t) {
  const {
    badgeContent: a,
    invisible: o = !1,
    max: i = 99,
    showZero: s = !1
  } = t, c = bh({
    badgeContent: a,
    max: i
  });
  let d = o;
  o === !1 && a === 0 && !s && (d = !0);
  const {
    badgeContent: p,
    max: m = i
  } = d ? c : t, g = p && Number(p) > m ? `${m}+` : p;
  return {
    badgeContent: p,
    invisible: d,
    max: m,
    displayValue: g
  };
}
function zO(t) {
  return et("MuiBadge", t);
}
const co = Ke("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), im = 10, sm = 4, DO = (t) => {
  const {
    color: a,
    anchorOrigin: o,
    invisible: i,
    overlap: s,
    variant: c,
    classes: d = {}
  } = t, p = {
    root: ["root"],
    badge: ["badge", c, i && "invisible", `anchorOrigin${ce(o.vertical)}${ce(o.horizontal)}`, `anchorOrigin${ce(o.vertical)}${ce(o.horizontal)}${ce(s)}`, `overlap${ce(s)}`, a !== "default" && `color${ce(a)}`]
  };
  return tt(p, zO, d);
}, NO = pe("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), BO = pe("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.badge, a[o.variant], a[`anchorOrigin${ce(o.anchorOrigin.vertical)}${ce(o.anchorOrigin.horizontal)}${ce(o.overlap)}`], o.color !== "default" && a[`color${ce(o.color)}`], o.invisible && a.invisible];
  }
})(qe(({
  theme: t
}) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  position: "absolute",
  boxSizing: "border-box",
  fontFamily: t.typography.fontFamily,
  fontWeight: t.typography.fontWeightMedium,
  fontSize: t.typography.pxToRem(12),
  minWidth: im * 2,
  lineHeight: 1,
  padding: "0 6px",
  height: im * 2,
  borderRadius: im,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: t.transitions.create("transform", {
    easing: t.transitions.easing.easeInOut,
    duration: t.transitions.duration.enteringScreen
  }),
  variants: [...Object.entries(t.palette).filter(wn(["contrastText"])).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      backgroundColor: (t.vars || t).palette[a].main,
      color: (t.vars || t).palette[a].contrastText
    }
  })), {
    props: {
      variant: "dot"
    },
    style: {
      borderRadius: sm,
      height: sm * 2,
      minWidth: sm * 2,
      padding: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "right" && a.overlap === "rectangular",
    style: {
      top: 0,
      right: 0,
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "right" && a.overlap === "rectangular",
    style: {
      bottom: 0,
      right: 0,
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "left" && a.overlap === "rectangular",
    style: {
      top: 0,
      left: 0,
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "left" && a.overlap === "rectangular",
    style: {
      bottom: 0,
      left: 0,
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "right" && a.overlap === "circular",
    style: {
      top: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, -50%)",
      transformOrigin: "100% 0%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "right" && a.overlap === "circular",
    style: {
      bottom: "14%",
      right: "14%",
      transform: "scale(1) translate(50%, 50%)",
      transformOrigin: "100% 100%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(50%, 50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "top" && a.anchorOrigin.horizontal === "left" && a.overlap === "circular",
    style: {
      top: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, -50%)",
      transformOrigin: "0% 0%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(-50%, -50%)"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchorOrigin.vertical === "bottom" && a.anchorOrigin.horizontal === "left" && a.overlap === "circular",
    style: {
      bottom: "14%",
      left: "14%",
      transform: "scale(1) translate(-50%, 50%)",
      transformOrigin: "0% 100%",
      [`&.${co.invisible}`]: {
        transform: "scale(0) translate(-50%, 50%)"
      }
    }
  }, {
    props: {
      invisible: !0
    },
    style: {
      transition: t.transitions.create("transform", {
        easing: t.transitions.easing.easeInOut,
        duration: t.transitions.duration.leavingScreen
      })
    }
  }]
})));
function E1(t) {
  return {
    vertical: (t == null ? void 0 : t.vertical) ?? "top",
    horizontal: (t == null ? void 0 : t.horizontal) ?? "right"
  };
}
const jO = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiBadge"
  }), {
    anchorOrigin: s,
    className: c,
    classes: d,
    component: p,
    components: m = {},
    componentsProps: g = {},
    children: y,
    overlap: h = "rectangular",
    color: C = "default",
    invisible: T = !1,
    max: R = 99,
    badgeContent: x,
    slots: A,
    slotProps: z,
    showZero: N = !1,
    variant: O = "standard",
    ...M
  } = i, {
    badgeContent: D,
    invisible: _,
    max: L,
    displayValue: k
  } = MO({
    max: R,
    invisible: T,
    badgeContent: x,
    showZero: N
  }), F = bh({
    anchorOrigin: E1(s),
    color: C,
    overlap: h,
    variant: O,
    badgeContent: x
  }), E = _ || D == null && O !== "dot", {
    color: U = C,
    overlap: P = h,
    anchorOrigin: J,
    variant: te = O
  } = E ? F : i, X = E1(J), j = te !== "dot" ? k : void 0, Y = {
    ...i,
    badgeContent: D,
    invisible: E,
    max: L,
    displayValue: j,
    showZero: N,
    anchorOrigin: X,
    color: U,
    overlap: P,
    variant: te
  }, W = DO(Y), G = {
    slots: {
      root: (A == null ? void 0 : A.root) ?? m.Root,
      badge: (A == null ? void 0 : A.badge) ?? m.Badge
    },
    slotProps: {
      root: (z == null ? void 0 : z.root) ?? g.root,
      badge: (z == null ? void 0 : z.badge) ?? g.badge
    }
  }, [de, xe] = pt("root", {
    elementType: NO,
    externalForwardedProps: {
      ...G,
      ...M
    },
    ownerState: Y,
    className: Te(W.root, c),
    ref: o,
    additionalProps: {
      as: p
    }
  }), [Ne, Me] = pt("badge", {
    elementType: BO,
    externalForwardedProps: G,
    ownerState: Y,
    className: W.badge
  });
  return /* @__PURE__ */ S.jsxs(de, {
    ...xe,
    children: [y, /* @__PURE__ */ S.jsx(Ne, {
      ...Me,
      children: j
    })]
  });
}), $O = Ke("MuiBox", ["root"]), LO = ks(), be = nR({
  themeId: ka,
  defaultTheme: LO,
  defaultClassName: $O.root,
  generateClassName: Bx.generate
});
function _O(t) {
  return et("MuiButton", t);
}
const Xo = Ke("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), kO = /* @__PURE__ */ b.createContext({}), HO = /* @__PURE__ */ b.createContext(void 0), UO = (t) => {
  const {
    color: a,
    disableElevation: o,
    fullWidth: i,
    size: s,
    variant: c,
    loading: d,
    loadingPosition: p,
    classes: m
  } = t, g = {
    root: ["root", d && "loading", c, `${c}${ce(a)}`, `size${ce(s)}`, `${c}Size${ce(s)}`, `color${ce(a)}`, o && "disableElevation", i && "fullWidth", d && `loadingPosition${ce(p)}`],
    startIcon: ["icon", "startIcon", `iconSize${ce(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${ce(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, y = tt(g, _O, m);
  return {
    ...m,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...y
  };
}, TS = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], IO = pe(tl, {
  shouldForwardProp: (t) => qn(t) || t === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, a[o.variant], a[`${o.variant}${ce(o.color)}`], a[`size${ce(o.size)}`], a[`${o.variant}Size${ce(o.size)}`], o.color === "inherit" && a.colorInherit, o.disableElevation && a.disableElevation, o.fullWidth && a.fullWidth, o.loading && a.loading];
  }
})(qe(({
  theme: t
}) => {
  const a = t.palette.mode === "light" ? t.palette.grey[300] : t.palette.grey[800], o = t.palette.mode === "light" ? t.palette.grey.A100 : t.palette.grey[700];
  return {
    ...t.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (t.vars || t).shape.borderRadius,
    transition: t.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: t.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Xo.disabled}`]: {
      color: (t.vars || t).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (t.vars || t).shadows[2],
        "&:hover": {
          boxShadow: (t.vars || t).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (t.vars || t).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (t.vars || t).shadows[8]
        },
        [`&.${Xo.focusVisible}`]: {
          boxShadow: (t.vars || t).shadows[6]
        },
        [`&.${Xo.disabled}`]: {
          color: (t.vars || t).palette.action.disabled,
          boxShadow: (t.vars || t).shadows[0],
          backgroundColor: (t.vars || t).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Xo.disabled}`]: {
          border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(t.palette).filter(wn()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        "--variant-textColor": (t.vars || t).palette[i].main,
        "--variant-outlinedColor": (t.vars || t).palette[i].main,
        "--variant-outlinedBorder": t.vars ? `rgba(${t.vars.palette[i].mainChannel} / 0.5)` : dt(t.palette[i].main, 0.5),
        "--variant-containedColor": (t.vars || t).palette[i].contrastText,
        "--variant-containedBg": (t.vars || t).palette[i].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (t.vars || t).palette[i].dark,
            "--variant-textBg": t.vars ? `rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : dt(t.palette[i].main, t.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (t.vars || t).palette[i].main,
            "--variant-outlinedBg": t.vars ? `rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : dt(t.palette[i].main, t.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": t.vars ? t.vars.palette.Button.inheritContainedBg : a,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": t.vars ? t.vars.palette.Button.inheritContainedHoverBg : o,
            "--variant-textBg": t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : dt(t.palette.text.primary, t.palette.action.hoverOpacity),
            "--variant-outlinedBg": t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : dt(t.palette.text.primary, t.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: t.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: t.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: t.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: t.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: t.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: t.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Xo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Xo.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: t.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: t.transitions.duration.short
        }),
        [`&.${Xo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), PO = pe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.startIcon, o.loading && a.startIconLoadingStart, a[`iconSize${ce(o.size)}`]];
  }
})(({
  theme: t
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: t.transitions.create(["opacity"], {
        duration: t.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...TS]
})), FO = pe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.endIcon, o.loading && a.endIconLoadingEnd, a[`iconSize${ce(o.size)}`]];
  }
})(({
  theme: t
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: t.transitions.create(["opacity"], {
        duration: t.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...TS]
})), VO = pe("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (t, a) => a.loadingIndicator
})(({
  theme: t
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (t.vars || t).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), T1 = pe("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (t, a) => a.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), _a = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = b.useContext(kO), s = b.useContext(HO), c = li(i, a), d = at({
    props: c,
    name: "MuiButton"
  }), {
    children: p,
    color: m = "primary",
    component: g = "button",
    className: y,
    disabled: h = !1,
    disableElevation: C = !1,
    disableFocusRipple: T = !1,
    endIcon: R,
    focusVisibleClassName: x,
    fullWidth: A = !1,
    id: z,
    loading: N = null,
    loadingIndicator: O,
    loadingPosition: M = "center",
    size: D = "medium",
    startIcon: _,
    type: L,
    variant: k = "text",
    ...F
  } = d, E = Nr(z), U = O ?? /* @__PURE__ */ S.jsx(Mh, {
    "aria-labelledby": E,
    color: "inherit",
    size: 16
  }), P = {
    ...d,
    color: m,
    component: g,
    disabled: h,
    disableElevation: C,
    disableFocusRipple: T,
    fullWidth: A,
    loading: N,
    loadingIndicator: U,
    loadingPosition: M,
    size: D,
    type: L,
    variant: k
  }, J = UO(P), te = (_ || N && M === "start") && /* @__PURE__ */ S.jsx(PO, {
    className: J.startIcon,
    ownerState: P,
    children: _ || /* @__PURE__ */ S.jsx(T1, {
      className: J.loadingIconPlaceholder,
      ownerState: P
    })
  }), X = (R || N && M === "end") && /* @__PURE__ */ S.jsx(FO, {
    className: J.endIcon,
    ownerState: P,
    children: R || /* @__PURE__ */ S.jsx(T1, {
      className: J.loadingIconPlaceholder,
      ownerState: P
    })
  }), j = s || "", Y = typeof N == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ S.jsx("span", {
      className: J.loadingWrapper,
      style: {
        display: "contents"
      },
      children: N && /* @__PURE__ */ S.jsx(VO, {
        className: J.loadingIndicator,
        ownerState: P,
        children: U
      })
    })
  ) : null;
  return /* @__PURE__ */ S.jsxs(IO, {
    ownerState: P,
    className: Te(i.className, J.root, y, j),
    component: g,
    disabled: h || N,
    focusRipple: !T,
    focusVisibleClassName: Te(J.focusVisible, x),
    ref: o,
    type: L,
    id: N ? E : z,
    ...F,
    classes: J,
    children: [te, M !== "end" && Y, p, M === "end" && Y, X]
  });
});
function qO(t) {
  const a = la(t);
  return a.body === t ? Ua(t).innerWidth > a.documentElement.clientWidth : t.scrollHeight > t.clientHeight;
}
function Ds(t, a) {
  a ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden");
}
function R1(t) {
  return parseInt(Ua(t).getComputedStyle(t).paddingRight, 10) || 0;
}
function GO(t) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(t.tagName), i = t.tagName === "INPUT" && t.getAttribute("type") === "hidden";
  return o || i;
}
function w1(t, a, o, i, s) {
  const c = [a, o, ...i];
  [].forEach.call(t.children, (d) => {
    const p = !c.includes(d), m = !GO(d);
    p && m && Ds(d, s);
  });
}
function um(t, a) {
  let o = -1;
  return t.some((i, s) => a(i) ? (o = s, !0) : !1), o;
}
function YO(t, a) {
  const o = [], i = t.container;
  if (!a.disableScrollLock) {
    if (qO(i)) {
      const d = Px(Ua(i));
      o.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${R1(i) + d}px`;
      const p = la(i).querySelectorAll(".mui-fixed");
      [].forEach.call(p, (m) => {
        o.push({
          value: m.style.paddingRight,
          property: "padding-right",
          el: m
        }), m.style.paddingRight = `${R1(m) + d}px`;
      });
    }
    let c;
    if (i.parentNode instanceof DocumentFragment)
      c = la(i).body;
    else {
      const d = i.parentElement, p = Ua(i);
      c = (d == null ? void 0 : d.nodeName) === "HTML" && p.getComputedStyle(d).overflowY === "scroll" ? d : i;
    }
    o.push({
      value: c.style.overflow,
      property: "overflow",
      el: c
    }, {
      value: c.style.overflowX,
      property: "overflow-x",
      el: c
    }, {
      value: c.style.overflowY,
      property: "overflow-y",
      el: c
    }), c.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: c,
      el: d,
      property: p
    }) => {
      c ? d.style.setProperty(p, c) : d.style.removeProperty(p);
    });
  };
}
function XO(t) {
  const a = [];
  return [].forEach.call(t.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && a.push(o);
  }), a;
}
class KO {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(a, o) {
    let i = this.modals.indexOf(a);
    if (i !== -1)
      return i;
    i = this.modals.length, this.modals.push(a), a.modalRef && Ds(a.modalRef, !1);
    const s = XO(o);
    w1(o, a.mount, a.modalRef, s, !0);
    const c = um(this.containers, (d) => d.container === o);
    return c !== -1 ? (this.containers[c].modals.push(a), i) : (this.containers.push({
      modals: [a],
      container: o,
      restore: null,
      hiddenSiblings: s
    }), i);
  }
  mount(a, o) {
    const i = um(this.containers, (c) => c.modals.includes(a)), s = this.containers[i];
    s.restore || (s.restore = YO(s, o));
  }
  remove(a, o = !0) {
    const i = this.modals.indexOf(a);
    if (i === -1)
      return i;
    const s = um(this.containers, (d) => d.modals.includes(a)), c = this.containers[s];
    if (c.modals.splice(c.modals.indexOf(a), 1), this.modals.splice(i, 1), c.modals.length === 0)
      c.restore && c.restore(), a.modalRef && Ds(a.modalRef, o), w1(c.container, a.mount, a.modalRef, c.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const d = c.modals[c.modals.length - 1];
      d.modalRef && Ds(d.modalRef, !1);
    }
    return i;
  }
  isTopModal(a) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === a;
  }
}
const WO = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function QO(t) {
  const a = parseInt(t.getAttribute("tabindex") || "", 10);
  return Number.isNaN(a) ? t.contentEditable === "true" || (t.nodeName === "AUDIO" || t.nodeName === "VIDEO" || t.nodeName === "DETAILS") && t.getAttribute("tabindex") === null ? 0 : t.tabIndex : a;
}
function ZO(t) {
  if (t.tagName !== "INPUT" || t.type !== "radio" || !t.name)
    return !1;
  const a = (i) => t.ownerDocument.querySelector(`input[type="radio"]${i}`);
  let o = a(`[name="${t.name}"]:checked`);
  return o || (o = a(`[name="${t.name}"]`)), o !== t;
}
function JO(t) {
  return !(t.disabled || t.tagName === "INPUT" && t.type === "hidden" || ZO(t));
}
function e3(t) {
  const a = [], o = [];
  return Array.from(t.querySelectorAll(WO)).forEach((i, s) => {
    const c = QO(i);
    c === -1 || !JO(i) || (c === 0 ? a.push(i) : o.push({
      documentOrder: s,
      tabIndex: c,
      node: i
    }));
  }), o.sort((i, s) => i.tabIndex === s.tabIndex ? i.documentOrder - s.documentOrder : i.tabIndex - s.tabIndex).map((i) => i.node).concat(a);
}
function t3() {
  return !0;
}
function n3(t) {
  const {
    children: a,
    disableAutoFocus: o = !1,
    disableEnforceFocus: i = !1,
    disableRestoreFocus: s = !1,
    getTabbable: c = e3,
    isEnabled: d = t3,
    open: p
  } = t, m = b.useRef(!1), g = b.useRef(null), y = b.useRef(null), h = b.useRef(null), C = b.useRef(null), T = b.useRef(!1), R = b.useRef(null), x = Jt(gi(a), R), A = b.useRef(null);
  b.useEffect(() => {
    !p || !R.current || (T.current = !o);
  }, [o, p]), b.useEffect(() => {
    if (!p || !R.current)
      return;
    const O = la(R.current);
    return R.current.contains(O.activeElement) || (R.current.hasAttribute("tabIndex") || R.current.setAttribute("tabIndex", "-1"), T.current && R.current.focus()), () => {
      s || (h.current && h.current.focus && (m.current = !0, h.current.focus()), h.current = null);
    };
  }, [p]), b.useEffect(() => {
    if (!p || !R.current)
      return;
    const O = la(R.current), M = (L) => {
      A.current = L, !(i || !d() || L.key !== "Tab") && O.activeElement === R.current && L.shiftKey && (m.current = !0, y.current && y.current.focus());
    }, D = () => {
      var F, E;
      const L = R.current;
      if (L === null)
        return;
      if (!O.hasFocus() || !d() || m.current) {
        m.current = !1;
        return;
      }
      if (L.contains(O.activeElement) || i && O.activeElement !== g.current && O.activeElement !== y.current)
        return;
      if (O.activeElement !== C.current)
        C.current = null;
      else if (C.current !== null)
        return;
      if (!T.current)
        return;
      let k = [];
      if ((O.activeElement === g.current || O.activeElement === y.current) && (k = c(R.current)), k.length > 0) {
        const U = !!((F = A.current) != null && F.shiftKey && ((E = A.current) == null ? void 0 : E.key) === "Tab"), P = k[0], J = k[k.length - 1];
        typeof P != "string" && typeof J != "string" && (U ? J.focus() : P.focus());
      } else
        L.focus();
    };
    O.addEventListener("focusin", D), O.addEventListener("keydown", M, !0);
    const _ = setInterval(() => {
      O.activeElement && O.activeElement.tagName === "BODY" && D();
    }, 50);
    return () => {
      clearInterval(_), O.removeEventListener("focusin", D), O.removeEventListener("keydown", M, !0);
    };
  }, [o, i, s, d, p, c]);
  const z = (O) => {
    h.current === null && (h.current = O.relatedTarget), T.current = !0, C.current = O.target;
    const M = a.props.onFocus;
    M && M(O);
  }, N = (O) => {
    h.current === null && (h.current = O.relatedTarget), T.current = !0;
  };
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: N,
      ref: g,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(a, {
      ref: x,
      onFocus: z
    }), /* @__PURE__ */ S.jsx("div", {
      tabIndex: p ? 0 : -1,
      onFocus: N,
      ref: y,
      "data-testid": "sentinelEnd"
    })]
  });
}
function a3(t) {
  return typeof t == "function" ? t() : t;
}
function r3(t) {
  return t ? t.props.hasOwnProperty("in") : !1;
}
const A1 = () => {
}, Dc = new KO();
function o3(t) {
  const {
    container: a,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: i = !1,
    closeAfterTransition: s = !1,
    onTransitionEnter: c,
    onTransitionExited: d,
    children: p,
    onClose: m,
    open: g,
    rootRef: y
  } = t, h = b.useRef({}), C = b.useRef(null), T = b.useRef(null), R = Jt(T, y), [x, A] = b.useState(!g), z = r3(p);
  let N = !0;
  (t["aria-hidden"] === "false" || t["aria-hidden"] === !1) && (N = !1);
  const O = () => la(C.current), M = () => (h.current.modalRef = T.current, h.current.mount = C.current, h.current), D = () => {
    Dc.mount(M(), {
      disableScrollLock: i
    }), T.current && (T.current.scrollTop = 0);
  }, _ = La(() => {
    const X = a3(a) || O().body;
    Dc.add(M(), X), T.current && D();
  }), L = () => Dc.isTopModal(M()), k = La((X) => {
    C.current = X, X && (g && L() ? D() : T.current && Ds(T.current, N));
  }), F = b.useCallback(() => {
    Dc.remove(M(), N);
  }, [N]);
  b.useEffect(() => () => {
    F();
  }, [F]), b.useEffect(() => {
    g ? _() : (!z || !s) && F();
  }, [g, F, z, s, _]);
  const E = (X) => (j) => {
    var Y;
    (Y = X.onKeyDown) == null || Y.call(X, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !L()) && (o || (j.stopPropagation(), m && m(j, "escapeKeyDown")));
  }, U = (X) => (j) => {
    var Y;
    (Y = X.onClick) == null || Y.call(X, j), j.target === j.currentTarget && m && m(j, "backdropClick");
  };
  return {
    getRootProps: (X = {}) => {
      const j = Vx(t);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const Y = {
        ...j,
        ...X
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...Y,
        onKeyDown: E(Y),
        ref: R
      };
    },
    getBackdropProps: (X = {}) => {
      const j = X;
      return {
        "aria-hidden": !0,
        ...j,
        onClick: U(j),
        open: g
      };
    },
    getTransitionProps: () => {
      const X = () => {
        A(!1), c && c();
      }, j = () => {
        A(!0), d && d(), s && F();
      };
      return {
        onEnter: $b(X, (p == null ? void 0 : p.props.onEnter) ?? A1),
        onExited: $b(j, (p == null ? void 0 : p.props.onExited) ?? A1)
      };
    },
    rootRef: R,
    portalRef: k,
    isTopModal: L,
    exited: x,
    hasTransition: z
  };
}
function l3(t) {
  return et("MuiModal", t);
}
Ke("MuiModal", ["root", "hidden", "backdrop"]);
const i3 = (t) => {
  const {
    open: a,
    exited: o,
    classes: i
  } = t;
  return tt({
    root: ["root", !a && o && "hidden"],
    backdrop: ["backdrop"]
  }, l3, i);
}, s3 = pe("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, !o.open && o.exited && a.hidden];
  }
})(qe(({
  theme: t
}) => ({
  position: "fixed",
  zIndex: (t.vars || t).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: a
    }) => !a.open && a.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), u3 = pe(ES, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (t, a) => a.backdrop
})({
  zIndex: -1
}), Hh = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    name: "MuiModal",
    props: a
  }), {
    BackdropComponent: s = u3,
    BackdropProps: c,
    classes: d,
    className: p,
    closeAfterTransition: m = !1,
    children: g,
    container: y,
    component: h,
    components: C = {},
    componentsProps: T = {},
    disableAutoFocus: R = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: A = !1,
    disablePortal: z = !1,
    disableRestoreFocus: N = !1,
    disableScrollLock: O = !1,
    hideBackdrop: M = !1,
    keepMounted: D = !1,
    onBackdropClick: _,
    onClose: L,
    onTransitionEnter: k,
    onTransitionExited: F,
    open: E,
    slotProps: U = {},
    slots: P = {},
    // eslint-disable-next-line react/prop-types
    theme: J,
    ...te
  } = i, X = {
    ...i,
    closeAfterTransition: m,
    disableAutoFocus: R,
    disableEnforceFocus: x,
    disableEscapeKeyDown: A,
    disablePortal: z,
    disableRestoreFocus: N,
    disableScrollLock: O,
    hideBackdrop: M,
    keepMounted: D
  }, {
    getRootProps: j,
    getBackdropProps: Y,
    getTransitionProps: W,
    portalRef: G,
    isTopModal: de,
    exited: xe,
    hasTransition: Ne
  } = o3({
    ...X,
    rootRef: o
  }), Me = {
    ...X,
    exited: xe
  }, B = i3(Me), Z = {};
  if (g.props.tabIndex === void 0 && (Z.tabIndex = "-1"), Ne) {
    const {
      onEnter: se,
      onExited: ue
    } = W();
    Z.onEnter = se, Z.onExited = ue;
  }
  const ne = {
    slots: {
      root: C.Root,
      backdrop: C.Backdrop,
      ...P
    },
    slotProps: {
      ...T,
      ...U
    }
  }, [fe, me] = pt("root", {
    ref: o,
    elementType: s3,
    externalForwardedProps: {
      ...ne,
      ...te,
      component: h
    },
    getSlotProps: j,
    ownerState: Me,
    className: Te(p, B == null ? void 0 : B.root, !Me.open && Me.exited && (B == null ? void 0 : B.hidden))
  }), [ve, he] = pt("backdrop", {
    ref: c == null ? void 0 : c.ref,
    elementType: s,
    externalForwardedProps: ne,
    shouldForwardComponentProp: !0,
    additionalProps: c,
    getSlotProps: (se) => Y({
      ...se,
      onClick: (ue) => {
        _ && _(ue), se != null && se.onClick && se.onClick(ue);
      }
    }),
    className: Te(c == null ? void 0 : c.className, B == null ? void 0 : B.backdrop),
    ownerState: Me
  });
  return !D && !E && (!Ne || xe) ? null : /* @__PURE__ */ S.jsx(xS, {
    ref: G,
    container: y,
    disablePortal: z,
    children: /* @__PURE__ */ S.jsxs(fe, {
      ...me,
      children: [!M && s ? /* @__PURE__ */ S.jsx(ve, {
        ...he
      }) : null, /* @__PURE__ */ S.jsx(n3, {
        disableEnforceFocus: x,
        disableAutoFocus: R,
        disableRestoreFocus: N,
        isEnabled: de,
        open: E,
        children: /* @__PURE__ */ b.cloneElement(g, Z)
      })]
    })
  });
});
function c3(t) {
  return et("MuiDialog", t);
}
const cm = Ke("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), RS = /* @__PURE__ */ b.createContext({}), f3 = pe(ES, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (t, a) => a.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), d3 = (t) => {
  const {
    classes: a,
    scroll: o,
    maxWidth: i,
    fullWidth: s,
    fullScreen: c
  } = t, d = {
    root: ["root"],
    container: ["container", `scroll${ce(o)}`],
    paper: ["paper", `paperScroll${ce(o)}`, `paperWidth${ce(String(i))}`, s && "paperFullWidth", c && "paperFullScreen"]
  };
  return tt(d, c3, a);
}, p3 = pe(Hh, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), m3 = pe("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.container, a[`scroll${ce(o.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), h3 = pe(al, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.paper, a[`scrollPaper${ce(o.scroll)}`], a[`paperWidth${ce(String(o.maxWidth))}`], o.fullWidth && a.paperFullWidth, o.fullScreen && a.paperFullScreen];
  }
})(qe(({
  theme: t
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: t.breakpoints.unit === "px" ? Math.max(t.breakpoints.values.xs, 444) : `max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,
      [`&.${cm.paperScrollBody}`]: {
        [t.breakpoints.down(Math.max(t.breakpoints.values.xs, 444) + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(t.breakpoints.values).filter((a) => a !== "xs").map((a) => ({
    props: {
      maxWidth: a
    },
    style: {
      maxWidth: `${t.breakpoints.values[a]}${t.breakpoints.unit}`,
      [`&.${cm.paperScrollBody}`]: {
        [t.breakpoints.down(t.breakpoints.values[a] + 64)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: a
    }) => a.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${cm.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), g3 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiDialog"
  }), s = bo(), c = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    "aria-describedby": d,
    "aria-labelledby": p,
    "aria-modal": m = !0,
    BackdropComponent: g,
    BackdropProps: y,
    children: h,
    className: C,
    disableEscapeKeyDown: T = !1,
    fullScreen: R = !1,
    fullWidth: x = !1,
    maxWidth: A = "sm",
    onBackdropClick: z,
    onClick: N,
    onClose: O,
    open: M,
    PaperComponent: D = al,
    PaperProps: _ = {},
    scroll: L = "paper",
    slots: k = {},
    slotProps: F = {},
    TransitionComponent: E = Vm,
    transitionDuration: U = c,
    TransitionProps: P,
    ...J
  } = i, te = {
    ...i,
    disableEscapeKeyDown: T,
    fullScreen: R,
    fullWidth: x,
    maxWidth: A,
    scroll: L
  }, X = d3(te), j = b.useRef(), Y = (Be) => {
    j.current = Be.target === Be.currentTarget;
  }, W = (Be) => {
    N && N(Be), j.current && (j.current = null, z && z(Be), O && O(Be, "backdropClick"));
  }, G = Nr(p), de = b.useMemo(() => ({
    titleId: G
  }), [G]), xe = {
    transition: E,
    ...k
  }, Ne = {
    transition: P,
    paper: _,
    backdrop: y,
    ...F
  }, Me = {
    slots: xe,
    slotProps: Ne
  }, [B, Z] = pt("root", {
    elementType: p3,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Me,
    ownerState: te,
    className: Te(X.root, C),
    ref: o
  }), [ne, fe] = pt("backdrop", {
    elementType: f3,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Me,
    ownerState: te
  }), [me, ve] = pt("paper", {
    elementType: h3,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Me,
    ownerState: te,
    className: Te(X.paper, _.className)
  }), [he, se] = pt("container", {
    elementType: m3,
    externalForwardedProps: Me,
    ownerState: te,
    className: Te(X.container)
  }), [ue, _e] = pt("transition", {
    elementType: Vm,
    externalForwardedProps: Me,
    ownerState: te,
    additionalProps: {
      appear: !0,
      in: M,
      timeout: U,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ S.jsx(B, {
    closeAfterTransition: !0,
    slots: {
      backdrop: ne
    },
    slotProps: {
      backdrop: {
        transitionDuration: U,
        as: g,
        ...fe
      }
    },
    disableEscapeKeyDown: T,
    onClose: O,
    open: M,
    onClick: W,
    ...Z,
    ...J,
    children: /* @__PURE__ */ S.jsx(ue, {
      ..._e,
      children: /* @__PURE__ */ S.jsx(he, {
        onMouseDown: Y,
        ...se,
        children: /* @__PURE__ */ S.jsx(me, {
          as: D,
          elevation: 24,
          role: "dialog",
          "aria-describedby": d,
          "aria-labelledby": G,
          "aria-modal": m,
          ...ve,
          children: /* @__PURE__ */ S.jsx(RS.Provider, {
            value: de,
            children: h
          })
        })
      })
    })
  });
});
function y3(t) {
  return et("MuiDialogActions", t);
}
Ke("MuiDialogActions", ["root", "spacing"]);
const v3 = (t) => {
  const {
    classes: a,
    disableSpacing: o
  } = t;
  return tt({
    root: ["root", !o && "spacing"]
  }, y3, a);
}, b3 = pe("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, !o.disableSpacing && a.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), x3 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiDialogActions"
  }), {
    className: s,
    disableSpacing: c = !1,
    ...d
  } = i, p = {
    ...i,
    disableSpacing: c
  }, m = v3(p);
  return /* @__PURE__ */ S.jsx(b3, {
    className: Te(m.root, s),
    ownerState: p,
    ref: o,
    ...d
  });
});
function S3(t) {
  return et("MuiDialogContent", t);
}
Ke("MuiDialogContent", ["root", "dividers"]);
function C3(t) {
  return et("MuiDialogTitle", t);
}
const E3 = Ke("MuiDialogTitle", ["root"]), T3 = (t) => {
  const {
    classes: a,
    dividers: o
  } = t;
  return tt({
    root: ["root", o && "dividers"]
  }, S3, a);
}, R3 = pe("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.dividers && a.dividers];
  }
})(qe(({
  theme: t
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: a
    }) => a.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(t.vars || t).palette.divider}`,
      borderBottom: `1px solid ${(t.vars || t).palette.divider}`
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.dividers,
    style: {
      [`.${E3.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), w3 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiDialogContent"
  }), {
    className: s,
    dividers: c = !1,
    ...d
  } = i, p = {
    ...i,
    dividers: c
  }, m = T3(p);
  return /* @__PURE__ */ S.jsx(R3, {
    className: Te(m.root, s),
    ownerState: p,
    ref: o,
    ...d
  });
}), A3 = (t) => {
  const {
    classes: a
  } = t;
  return tt({
    root: ["root"]
  }, C3, a);
}, O3 = pe(Ae, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), M3 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiDialogTitle"
  }), {
    className: s,
    id: c,
    ...d
  } = i, p = i, m = A3(p), {
    titleId: g = c
  } = b.useContext(RS);
  return /* @__PURE__ */ S.jsx(O3, {
    component: "h2",
    className: Te(m.root, s),
    ownerState: p,
    ref: o,
    variant: "h6",
    id: c ?? g,
    ...d
  });
});
function z3(t) {
  return et("MuiDivider", t);
}
const O1 = Ke("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), D3 = (t) => {
  const {
    absolute: a,
    children: o,
    classes: i,
    flexItem: s,
    light: c,
    orientation: d,
    textAlign: p,
    variant: m
  } = t;
  return tt({
    root: ["root", a && "absolute", m, c && "light", d === "vertical" && "vertical", s && "flexItem", o && "withChildren", o && d === "vertical" && "withChildrenVertical", p === "right" && d !== "vertical" && "textAlignRight", p === "left" && d !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", d === "vertical" && "wrapperVertical"]
  }, z3, i);
}, N3 = pe("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.absolute && a.absolute, a[o.variant], o.light && a.light, o.orientation === "vertical" && a.vertical, o.flexItem && a.flexItem, o.children && a.withChildren, o.children && o.orientation === "vertical" && a.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && a.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && a.textAlignLeft];
  }
})(qe(({
  theme: t
}) => ({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (t.vars || t).palette.divider,
  borderBottomWidth: "thin",
  variants: [{
    props: {
      absolute: !0
    },
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%"
    }
  }, {
    props: {
      light: !0
    },
    style: {
      borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : dt(t.palette.divider, 0.08)
    }
  }, {
    props: {
      variant: "inset"
    },
    style: {
      marginLeft: 72
    }
  }, {
    props: {
      variant: "middle",
      orientation: "horizontal"
    },
    style: {
      marginLeft: t.spacing(2),
      marginRight: t.spacing(2)
    }
  }, {
    props: {
      variant: "middle",
      orientation: "vertical"
    },
    style: {
      marginTop: t.spacing(1),
      marginBottom: t.spacing(1)
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      borderBottomWidth: 0,
      borderRightWidth: "thin"
    }
  }, {
    props: {
      flexItem: !0
    },
    style: {
      alignSelf: "stretch",
      height: "auto"
    }
  }, {
    props: ({
      ownerState: a
    }) => !!a.children,
    style: {
      display: "flex",
      textAlign: "center",
      border: 0,
      borderTopStyle: "solid",
      borderLeftStyle: "solid",
      "&::before, &::after": {
        content: '""',
        alignSelf: "center"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.children && a.orientation !== "vertical",
    style: {
      "&::before, &::after": {
        width: "100%",
        borderTop: `thin solid ${(t.vars || t).palette.divider}`,
        borderTopStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.orientation === "vertical" && a.children,
    style: {
      flexDirection: "column",
      "&::before, &::after": {
        height: "100%",
        borderLeft: `thin solid ${(t.vars || t).palette.divider}`,
        borderLeftStyle: "inherit"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.textAlign === "right" && a.orientation !== "vertical",
    style: {
      "&::before": {
        width: "90%"
      },
      "&::after": {
        width: "10%"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.textAlign === "left" && a.orientation !== "vertical",
    style: {
      "&::before": {
        width: "10%"
      },
      "&::after": {
        width: "90%"
      }
    }
  }]
}))), B3 = pe("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.wrapper, o.orientation === "vertical" && a.wrapperVertical];
  }
})(qe(({
  theme: t
}) => ({
  display: "inline-block",
  paddingLeft: `calc(${t.spacing(1)} * 1.2)`,
  paddingRight: `calc(${t.spacing(1)} * 1.2)`,
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      paddingTop: `calc(${t.spacing(1)} * 1.2)`,
      paddingBottom: `calc(${t.spacing(1)} * 1.2)`
    }
  }]
}))), Is = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiDivider"
  }), {
    absolute: s = !1,
    children: c,
    className: d,
    orientation: p = "horizontal",
    component: m = c || p === "vertical" ? "div" : "hr",
    flexItem: g = !1,
    light: y = !1,
    role: h = m !== "hr" ? "separator" : void 0,
    textAlign: C = "center",
    variant: T = "fullWidth",
    ...R
  } = i, x = {
    ...i,
    absolute: s,
    component: m,
    flexItem: g,
    light: y,
    orientation: p,
    role: h,
    textAlign: C,
    variant: T
  }, A = D3(x);
  return /* @__PURE__ */ S.jsx(N3, {
    as: m,
    className: Te(A.root, d),
    role: h,
    ref: o,
    ownerState: x,
    "aria-orientation": h === "separator" && (m !== "hr" || p === "vertical") ? p : void 0,
    ...R,
    children: c ? /* @__PURE__ */ S.jsx(B3, {
      className: A.wrapper,
      ownerState: x,
      children: c
    }) : null
  });
});
Is && (Is.muiSkipListHighlight = !0);
function j3(t, a, o) {
  const i = a.getBoundingClientRect(), s = o && o.getBoundingClientRect(), c = Ua(a);
  let d;
  if (a.fakeTransform)
    d = a.fakeTransform;
  else {
    const g = c.getComputedStyle(a);
    d = g.getPropertyValue("-webkit-transform") || g.getPropertyValue("transform");
  }
  let p = 0, m = 0;
  if (d && d !== "none" && typeof d == "string") {
    const g = d.split("(")[1].split(")")[0].split(",");
    p = parseInt(g[4], 10), m = parseInt(g[5], 10);
  }
  return t === "left" ? s ? `translateX(${s.right + p - i.left}px)` : `translateX(${c.innerWidth + p - i.left}px)` : t === "right" ? s ? `translateX(-${i.right - s.left - p}px)` : `translateX(-${i.left + i.width - p}px)` : t === "up" ? s ? `translateY(${s.bottom + m - i.top}px)` : `translateY(${c.innerHeight + m - i.top}px)` : s ? `translateY(-${i.top - s.top + i.height - m}px)` : `translateY(-${i.top + i.height - m}px)`;
}
function $3(t) {
  return typeof t == "function" ? t() : t;
}
function Nc(t, a, o) {
  const i = $3(o), s = j3(t, a, i);
  s && (a.style.webkitTransform = s, a.style.transform = s);
}
const L3 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = bo(), s = {
    enter: i.transitions.easing.easeOut,
    exit: i.transitions.easing.sharp
  }, c = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    addEndListener: d,
    appear: p = !0,
    children: m,
    container: g,
    direction: y = "down",
    easing: h = s,
    in: C,
    onEnter: T,
    onEntered: R,
    onEntering: x,
    onExit: A,
    onExited: z,
    onExiting: N,
    style: O,
    timeout: M = c,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: D = wa,
    ..._
  } = a, L = b.useRef(null), k = Jt(gi(m), L, o), F = (W) => (G) => {
    W && (G === void 0 ? W(L.current) : W(L.current, G));
  }, E = F((W, G) => {
    Nc(y, W, g), Oh(W), T && T(W, G);
  }), U = F((W, G) => {
    const de = vo({
      timeout: M,
      style: O,
      easing: h
    }, {
      mode: "enter"
    });
    W.style.webkitTransition = i.transitions.create("-webkit-transform", {
      ...de
    }), W.style.transition = i.transitions.create("transform", {
      ...de
    }), W.style.webkitTransform = "none", W.style.transform = "none", x && x(W, G);
  }), P = F(R), J = F(N), te = F((W) => {
    const G = vo({
      timeout: M,
      style: O,
      easing: h
    }, {
      mode: "exit"
    });
    W.style.webkitTransition = i.transitions.create("-webkit-transform", G), W.style.transition = i.transitions.create("transform", G), Nc(y, W, g), A && A(W);
  }), X = F((W) => {
    W.style.webkitTransition = "", W.style.transition = "", z && z(W);
  }), j = (W) => {
    d && d(L.current, W);
  }, Y = b.useCallback(() => {
    L.current && Nc(y, L.current, g);
  }, [y, g]);
  return b.useEffect(() => {
    if (C || y === "down" || y === "right")
      return;
    const W = gh(() => {
      L.current && Nc(y, L.current, g);
    }), G = Ua(L.current);
    return G.addEventListener("resize", W), () => {
      W.clear(), G.removeEventListener("resize", W);
    };
  }, [y, C, g]), b.useEffect(() => {
    C || Y();
  }, [C, Y]), /* @__PURE__ */ S.jsx(D, {
    nodeRef: L,
    onEnter: E,
    onEntered: P,
    onEntering: U,
    onExit: te,
    onExited: X,
    onExiting: J,
    addEndListener: j,
    appear: p,
    in: C,
    timeout: M,
    ..._,
    children: (W, {
      ownerState: G,
      ...de
    }) => /* @__PURE__ */ b.cloneElement(m, {
      ref: k,
      style: {
        visibility: W === "exited" && !C ? "hidden" : void 0,
        ...O,
        ...m.props.style
      },
      ...de
    })
  });
});
function _3(t) {
  return et("MuiDrawer", t);
}
Ke("MuiDrawer", ["root", "docked", "paper", "anchorLeft", "anchorRight", "anchorTop", "anchorBottom", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const wS = (t, a) => {
  const {
    ownerState: o
  } = t;
  return [a.root, (o.variant === "permanent" || o.variant === "persistent") && a.docked, a.modal];
}, k3 = (t) => {
  const {
    classes: a,
    anchor: o,
    variant: i
  } = t, s = {
    root: ["root", `anchor${ce(o)}`],
    docked: [(i === "permanent" || i === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${ce(o)}`, i !== "temporary" && `paperAnchorDocked${ce(o)}`]
  };
  return tt(s, _3, a);
}, H3 = pe(Hh, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: wS
})(qe(({
  theme: t
}) => ({
  zIndex: (t.vars || t).zIndex.drawer
}))), U3 = pe("div", {
  shouldForwardProp: qn,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: wS
})({
  flex: "0 0 auto"
}), I3 = pe(al, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.paper, a[`paperAnchor${ce(o.anchor)}`], o.variant !== "temporary" && a[`paperAnchorDocked${ce(o.anchor)}`]];
  }
})(qe(({
  theme: t
}) => ({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (t.vars || t).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0,
  variants: [{
    props: {
      anchor: "left"
    },
    style: {
      left: 0
    }
  }, {
    props: {
      anchor: "top"
    },
    style: {
      top: 0,
      left: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: {
      anchor: "right"
    },
    style: {
      right: 0
    }
  }, {
    props: {
      anchor: "bottom"
    },
    style: {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "left" && a.variant !== "temporary",
    style: {
      borderRight: `1px solid ${(t.vars || t).palette.divider}`
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "top" && a.variant !== "temporary",
    style: {
      borderBottom: `1px solid ${(t.vars || t).palette.divider}`
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "right" && a.variant !== "temporary",
    style: {
      borderLeft: `1px solid ${(t.vars || t).palette.divider}`
    }
  }, {
    props: ({
      ownerState: a
    }) => a.anchor === "bottom" && a.variant !== "temporary",
    style: {
      borderTop: `1px solid ${(t.vars || t).palette.divider}`
    }
  }]
}))), AS = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function P3(t) {
  return ["left", "right"].includes(t);
}
function F3({
  direction: t
}, a) {
  return t === "rtl" && P3(a) ? AS[a] : a;
}
const M1 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiDrawer"
  }), s = bo(), c = pf(), d = {
    enter: s.transitions.duration.enteringScreen,
    exit: s.transitions.duration.leavingScreen
  }, {
    anchor: p = "left",
    BackdropProps: m,
    children: g,
    className: y,
    elevation: h = 16,
    hideBackdrop: C = !1,
    ModalProps: {
      BackdropProps: T,
      ...R
    } = {},
    onClose: x,
    open: A = !1,
    PaperProps: z = {},
    SlideProps: N,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O,
    transitionDuration: M = d,
    variant: D = "temporary",
    slots: _ = {},
    slotProps: L = {},
    ...k
  } = i, F = b.useRef(!1);
  b.useEffect(() => {
    F.current = !0;
  }, []);
  const E = F3({
    direction: c ? "rtl" : "ltr"
  }, p), P = {
    ...i,
    anchor: p,
    elevation: h,
    open: A,
    variant: D,
    ...k
  }, J = k3(P), te = {
    slots: {
      transition: O,
      ..._
    },
    slotProps: {
      paper: z,
      transition: N,
      ...L,
      backdrop: lS(L.backdrop || {
        ...m,
        ...T
      }, {
        transitionDuration: M
      })
    }
  }, [X, j] = pt("root", {
    ref: o,
    elementType: H3,
    className: Te(J.root, J.modal, y),
    shouldForwardComponentProp: !0,
    ownerState: P,
    externalForwardedProps: {
      ...te,
      ...k,
      ...R
    },
    additionalProps: {
      open: A,
      onClose: x,
      hideBackdrop: C,
      slots: {
        backdrop: te.slots.backdrop
      },
      slotProps: {
        backdrop: te.slotProps.backdrop
      }
    }
  }), [Y, W] = pt("paper", {
    elementType: I3,
    shouldForwardComponentProp: !0,
    className: Te(J.paper, z.className),
    ownerState: P,
    externalForwardedProps: te,
    additionalProps: {
      elevation: D === "temporary" ? h : 0,
      square: !0
    }
  }), [G, de] = pt("docked", {
    elementType: U3,
    ref: o,
    className: Te(J.root, J.docked, y),
    ownerState: P,
    externalForwardedProps: te,
    additionalProps: k
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [xe, Ne] = pt("transition", {
    elementType: L3,
    ownerState: P,
    externalForwardedProps: te,
    additionalProps: {
      in: A,
      direction: AS[E],
      timeout: M,
      appear: F.current
    }
  }), Me = /* @__PURE__ */ S.jsx(Y, {
    ...W,
    children: g
  });
  if (D === "permanent")
    return /* @__PURE__ */ S.jsx(G, {
      ...de,
      children: Me
    });
  const B = /* @__PURE__ */ S.jsx(xe, {
    ...Ne,
    children: Me
  });
  return D === "persistent" ? /* @__PURE__ */ S.jsx(G, {
    ...de,
    children: B
  }) : /* @__PURE__ */ S.jsx(X, {
    ...j,
    children: B
  });
});
function V3(t) {
  return et("MuiFab", t);
}
const z1 = Ke("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), q3 = (t) => {
  const {
    color: a,
    variant: o,
    classes: i,
    size: s
  } = t, c = {
    root: ["root", o, `size${ce(s)}`, a === "inherit" ? "colorInherit" : a]
  }, d = tt(c, V3, i);
  return {
    ...i,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, G3 = pe(tl, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (t) => qn(t) || t === "classes",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, a[o.variant], a[`size${ce(o.size)}`], o.color === "inherit" && a.colorInherit, a[ce(o.size)], a[o.color]];
  }
})(qe(({
  theme: t
}) => {
  var a, o;
  return {
    ...t.typography.button,
    minHeight: 36,
    transition: t.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: t.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (t.vars || t).zIndex.fab,
    boxShadow: (t.vars || t).shadows[6],
    "&:active": {
      boxShadow: (t.vars || t).shadows[12]
    },
    color: t.vars ? t.vars.palette.text.primary : (o = (a = t.palette).getContrastText) == null ? void 0 : o.call(a, t.palette.grey[300]),
    backgroundColor: (t.vars || t).palette.grey[300],
    "&:hover": {
      backgroundColor: (t.vars || t).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (t.vars || t).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${z1.focusVisible}`]: {
      boxShadow: (t.vars || t).shadows[6]
    },
    variants: [{
      props: {
        size: "small"
      },
      style: {
        width: 40,
        height: 40
      }
    }, {
      props: {
        size: "medium"
      },
      style: {
        width: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended"
      },
      style: {
        borderRadius: 48 / 2,
        padding: "0 16px",
        width: "auto",
        minHeight: "auto",
        minWidth: 48,
        height: 48
      }
    }, {
      props: {
        variant: "extended",
        size: "small"
      },
      style: {
        width: "auto",
        padding: "0 8px",
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      }
    }, {
      props: {
        variant: "extended",
        size: "medium"
      },
      style: {
        width: "auto",
        padding: "0 16px",
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit"
      }
    }]
  };
}), qe(({
  theme: t
}) => ({
  variants: [...Object.entries(t.palette).filter(wn(["dark", "contrastText"])).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      color: (t.vars || t).palette[a].contrastText,
      backgroundColor: (t.vars || t).palette[a].main,
      "&:hover": {
        backgroundColor: (t.vars || t).palette[a].dark,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (t.vars || t).palette[a].main
        }
      }
    }
  }))]
})), qe(({
  theme: t
}) => ({
  [`&.${z1.disabled}`]: {
    color: (t.vars || t).palette.action.disabled,
    boxShadow: (t.vars || t).shadows[0],
    backgroundColor: (t.vars || t).palette.action.disabledBackground
  }
}))), Y3 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiFab"
  }), {
    children: s,
    className: c,
    color: d = "default",
    component: p = "button",
    disabled: m = !1,
    disableFocusRipple: g = !1,
    focusVisibleClassName: y,
    size: h = "large",
    variant: C = "circular",
    ...T
  } = i, R = {
    ...i,
    color: d,
    component: p,
    disabled: m,
    disableFocusRipple: g,
    size: h,
    variant: C
  }, x = q3(R);
  return /* @__PURE__ */ S.jsx(G3, {
    className: Te(x.root, c),
    component: p,
    disabled: m,
    focusRipple: !g,
    focusVisibleClassName: Te(x.focusVisible, y),
    ownerState: R,
    ref: o,
    ...T,
    classes: x,
    children: s
  });
}), X3 = (t) => {
  const {
    classes: a,
    disableUnderline: o,
    startAdornment: i,
    endAdornment: s,
    size: c,
    hiddenLabel: d,
    multiline: p
  } = t, m = {
    root: ["root", !o && "underline", i && "adornedStart", s && "adornedEnd", c === "small" && `size${ce(c)}`, d && "hiddenLabel", p && "multiline"],
    input: ["input"]
  }, g = tt(m, fO, a);
  return {
    ...a,
    // forward classes to the InputBase
    ...g
  };
}, K3 = pe(yf, {
  shouldForwardProp: (t) => qn(t) || t === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [...hf(t, a), !o.disableUnderline && a.underline];
  }
})(qe(({
  theme: t
}) => {
  const a = t.palette.mode === "light", o = a ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = a ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = a ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", c = a ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (t.vars || t).shape.borderRadius,
    borderTopRightRadius: (t.vars || t).shape.borderRadius,
    transition: t.transitions.create("background-color", {
      duration: t.transitions.duration.shorter,
      easing: t.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: t.vars ? t.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${na.focused}`]: {
      backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : i
    },
    [`&.${na.disabled}`]: {
      backgroundColor: t.vars ? t.vars.palette.FilledInput.disabledBg : c
    },
    variants: [{
      props: ({
        ownerState: d
      }) => !d.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: t.transitions.create("transform", {
            duration: t.transitions.duration.shorter,
            easing: t.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${na.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${na.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (t.vars || t).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})` : o}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: t.transitions.create("border-bottom-color", {
            duration: t.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${na.disabled}, .${na.error}):before`]: {
          borderBottom: `1px solid ${(t.vars || t).palette.text.primary}`
        },
        [`&.${na.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(t.palette).filter(wn()).map(([d]) => {
      var p;
      return {
        props: {
          disableUnderline: !1,
          color: d
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(p = (t.vars || t).palette[d]) == null ? void 0 : p.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: d
      }) => d.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: d
      }) => d.endAdornment,
      style: {
        paddingRight: 12
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: d,
        size: p
      }) => d.multiline && p === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline && d.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: d
      }) => d.multiline && d.hiddenLabel && d.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), W3 = pe(vf, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: gf
})(qe(({
  theme: t
}) => ({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  ...!t.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: t.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: t.palette.mode === "light" ? null : "#fff",
      caretColor: t.palette.mode === "light" ? null : "#fff",
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    }
  },
  ...t.vars && {
    "&:-webkit-autofill": {
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit"
    },
    [t.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      ownerState: a
    }) => a.hiddenLabel,
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: ({
      ownerState: a
    }) => a.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.hiddenLabel && a.size === "small",
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }, {
    props: ({
      ownerState: a
    }) => a.multiline,
    style: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0
    }
  }]
}))), Uh = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiFilledInput"
  }), {
    disableUnderline: s = !1,
    components: c = {},
    componentsProps: d,
    fullWidth: p = !1,
    hiddenLabel: m,
    // declare here to prevent spreading to DOM
    inputComponent: g = "input",
    multiline: y = !1,
    slotProps: h,
    slots: C = {},
    type: T = "text",
    ...R
  } = i, x = {
    ...i,
    disableUnderline: s,
    fullWidth: p,
    inputComponent: g,
    multiline: y,
    type: T
  }, A = X3(i), z = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, N = h ?? d ? An(z, h ?? d) : z, O = C.root ?? c.Root ?? K3, M = C.input ?? c.Input ?? W3;
  return /* @__PURE__ */ S.jsx(kh, {
    slots: {
      root: O,
      input: M
    },
    slotProps: N,
    fullWidth: p,
    inputComponent: g,
    multiline: y,
    ref: o,
    type: T,
    ...R,
    classes: A
  });
});
Uh.muiName = "Input";
function Q3(t) {
  return et("MuiFormControl", t);
}
Ke("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const Z3 = (t) => {
  const {
    classes: a,
    margin: o,
    fullWidth: i
  } = t, s = {
    root: ["root", o !== "none" && `margin${ce(o)}`, i && "fullWidth"]
  };
  return tt(s, Q3, a);
}, J3 = pe("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, a[`margin${ce(o.margin)}`], o.fullWidth && a.fullWidth];
  }
})({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top",
  // Fix alignment issue on Safari.
  variants: [{
    props: {
      margin: "normal"
    },
    style: {
      marginTop: 16,
      marginBottom: 8
    }
  }, {
    props: {
      margin: "dense"
    },
    style: {
      marginTop: 8,
      marginBottom: 4
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
}), Qc = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiFormControl"
  }), {
    children: s,
    className: c,
    color: d = "primary",
    component: p = "div",
    disabled: m = !1,
    error: g = !1,
    focused: y,
    fullWidth: h = !1,
    hiddenLabel: C = !1,
    margin: T = "none",
    required: R = !1,
    size: x = "medium",
    variant: A = "outlined",
    ...z
  } = i, N = {
    ...i,
    color: d,
    component: p,
    disabled: m,
    error: g,
    fullWidth: h,
    hiddenLabel: C,
    margin: T,
    required: R,
    size: x,
    variant: A
  }, O = Z3(N), [M, D] = b.useState(() => {
    let X = !1;
    return s && b.Children.forEach(s, (j) => {
      if (!nm(j, ["Input", "Select"]))
        return;
      const Y = nm(j, ["Select"]) ? j.props.input : j;
      Y && lO(Y.props) && (X = !0);
    }), X;
  }), [_, L] = b.useState(() => {
    let X = !1;
    return s && b.Children.forEach(s, (j) => {
      nm(j, ["Input", "Select"]) && (Wc(j.props, !0) || Wc(j.props.inputProps, !0)) && (X = !0);
    }), X;
  }), [k, F] = b.useState(!1);
  m && k && F(!1);
  const E = y !== void 0 && !m ? y : k;
  let U;
  b.useRef(!1);
  const P = b.useCallback(() => {
    L(!0);
  }, []), J = b.useCallback(() => {
    L(!1);
  }, []), te = b.useMemo(() => ({
    adornedStart: M,
    setAdornedStart: D,
    color: d,
    disabled: m,
    error: g,
    filled: _,
    focused: E,
    fullWidth: h,
    hiddenLabel: C,
    size: x,
    onBlur: () => {
      F(!1);
    },
    onFocus: () => {
      F(!0);
    },
    onEmpty: J,
    onFilled: P,
    registerEffect: U,
    required: R,
    variant: A
  }), [M, d, m, g, _, E, h, C, U, J, P, R, x, A]);
  return /* @__PURE__ */ S.jsx(_h.Provider, {
    value: te,
    children: /* @__PURE__ */ S.jsx(J3, {
      as: p,
      ownerState: N,
      className: Te(O.root, c),
      ref: o,
      ...z,
      children: s
    })
  });
});
function eM(t) {
  return et("MuiFormHelperText", t);
}
const D1 = Ke("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var N1;
const tM = (t) => {
  const {
    classes: a,
    contained: o,
    size: i,
    disabled: s,
    error: c,
    filled: d,
    focused: p,
    required: m
  } = t, g = {
    root: ["root", s && "disabled", c && "error", i && `size${ce(i)}`, o && "contained", p && "focused", d && "filled", m && "required"]
  };
  return tt(g, eM, a);
}, nM = pe("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.size && a[`size${ce(o.size)}`], o.contained && a.contained, o.filled && a.filled];
  }
})(qe(({
  theme: t
}) => ({
  color: (t.vars || t).palette.text.secondary,
  ...t.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${D1.disabled}`]: {
    color: (t.vars || t).palette.text.disabled
  },
  [`&.${D1.error}`]: {
    color: (t.vars || t).palette.error.main
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginTop: 4
    }
  }, {
    props: ({
      ownerState: a
    }) => a.contained,
    style: {
      marginLeft: 14,
      marginRight: 14
    }
  }]
}))), aM = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: c,
    component: d = "p",
    disabled: p,
    error: m,
    filled: g,
    focused: y,
    margin: h,
    required: C,
    variant: T,
    ...R
  } = i, x = vi(), A = yi({
    props: i,
    muiFormControl: x,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), z = {
    ...i,
    component: d,
    contained: A.variant === "filled" || A.variant === "outlined",
    variant: A.variant,
    size: A.size,
    disabled: A.disabled,
    error: A.error,
    filled: A.filled,
    focused: A.focused,
    required: A.required
  };
  delete z.ownerState;
  const N = tM(z);
  return /* @__PURE__ */ S.jsx(nM, {
    as: d,
    className: Te(N.root, c),
    ref: o,
    ...R,
    ownerState: z,
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      N1 || (N1 = /* @__PURE__ */ S.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : s
  });
});
function rM(t) {
  return et("MuiFormLabel", t);
}
const Ns = Ke("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), oM = (t) => {
  const {
    classes: a,
    color: o,
    focused: i,
    disabled: s,
    error: c,
    filled: d,
    required: p
  } = t, m = {
    root: ["root", `color${ce(o)}`, s && "disabled", c && "error", d && "filled", i && "focused", p && "required"],
    asterisk: ["asterisk", c && "error"]
  };
  return tt(m, rM, a);
}, lM = pe("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, o.color === "secondary" && a.colorSecondary, o.filled && a.filled];
  }
})(qe(({
  theme: t
}) => ({
  color: (t.vars || t).palette.text.secondary,
  ...t.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(t.palette).filter(wn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      [`&.${Ns.focused}`]: {
        color: (t.vars || t).palette[a].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ns.disabled}`]: {
        color: (t.vars || t).palette.text.disabled
      },
      [`&.${Ns.error}`]: {
        color: (t.vars || t).palette.error.main
      }
    }
  }]
}))), iM = pe("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (t, a) => a.asterisk
})(qe(({
  theme: t
}) => ({
  [`&.${Ns.error}`]: {
    color: (t.vars || t).palette.error.main
  }
}))), sM = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiFormLabel"
  }), {
    children: s,
    className: c,
    color: d,
    component: p = "label",
    disabled: m,
    error: g,
    filled: y,
    focused: h,
    required: C,
    ...T
  } = i, R = vi(), x = yi({
    props: i,
    muiFormControl: R,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), A = {
    ...i,
    color: x.color || "primary",
    component: p,
    disabled: x.disabled,
    error: x.error,
    filled: x.filled,
    focused: x.focused,
    required: x.required
  }, z = oM(A);
  return /* @__PURE__ */ S.jsxs(lM, {
    as: p,
    ownerState: A,
    className: Te(z.root, c),
    ref: o,
    ...T,
    children: [s, x.required && /* @__PURE__ */ S.jsxs(iM, {
      ownerState: A,
      "aria-hidden": !0,
      className: z.asterisk,
      children: [" ", "*"]
    })]
  });
});
function qm(t) {
  return `scale(${t}, ${t ** 2})`;
}
const uM = {
  entering: {
    opacity: 1,
    transform: qm(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, fm = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Gm = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    addEndListener: i,
    appear: s = !0,
    children: c,
    easing: d,
    in: p,
    onEnter: m,
    onEntered: g,
    onEntering: y,
    onExit: h,
    onExited: C,
    onExiting: T,
    style: R,
    timeout: x = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: A = wa,
    ...z
  } = a, N = vh(), O = b.useRef(), M = bo(), D = b.useRef(null), _ = Jt(D, gi(c), o), L = (X) => (j) => {
    if (X) {
      const Y = D.current;
      j === void 0 ? X(Y) : X(Y, j);
    }
  }, k = L(y), F = L((X, j) => {
    Oh(X);
    const {
      duration: Y,
      delay: W,
      easing: G
    } = vo({
      style: R,
      timeout: x,
      easing: d
    }, {
      mode: "enter"
    });
    let de;
    x === "auto" ? (de = M.transitions.getAutoHeightDuration(X.clientHeight), O.current = de) : de = Y, X.style.transition = [M.transitions.create("opacity", {
      duration: de,
      delay: W
    }), M.transitions.create("transform", {
      duration: fm ? de : de * 0.666,
      delay: W,
      easing: G
    })].join(","), m && m(X, j);
  }), E = L(g), U = L(T), P = L((X) => {
    const {
      duration: j,
      delay: Y,
      easing: W
    } = vo({
      style: R,
      timeout: x,
      easing: d
    }, {
      mode: "exit"
    });
    let G;
    x === "auto" ? (G = M.transitions.getAutoHeightDuration(X.clientHeight), O.current = G) : G = j, X.style.transition = [M.transitions.create("opacity", {
      duration: G,
      delay: Y
    }), M.transitions.create("transform", {
      duration: fm ? G : G * 0.666,
      delay: fm ? Y : Y || G * 0.333,
      easing: W
    })].join(","), X.style.opacity = 0, X.style.transform = qm(0.75), h && h(X);
  }), J = L(C), te = (X) => {
    x === "auto" && N.start(O.current || 0, X), i && i(D.current, X);
  };
  return /* @__PURE__ */ S.jsx(A, {
    appear: s,
    in: p,
    nodeRef: D,
    onEnter: F,
    onEntered: E,
    onEntering: k,
    onExit: P,
    onExited: J,
    onExiting: U,
    addEndListener: te,
    timeout: x === "auto" ? null : x,
    ...z,
    children: (X, {
      ownerState: j,
      ...Y
    }) => /* @__PURE__ */ b.cloneElement(c, {
      style: {
        opacity: 0,
        transform: qm(0.75),
        visibility: X === "exited" && !p ? "hidden" : void 0,
        ...uM[X],
        ...R,
        ...c.props.style
      },
      ref: _,
      ...Y
    })
  });
});
Gm && (Gm.muiSupportAuto = !0);
const cM = kx({
  themeId: ka
}), fM = (t) => {
  const {
    classes: a,
    disableUnderline: o
  } = t, s = tt({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, uO, a);
  return {
    ...a,
    // forward classes to the InputBase
    ...s
  };
}, dM = pe(yf, {
  shouldForwardProp: (t) => qn(t) || t === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [...hf(t, a), !o.disableUnderline && a.underline];
  }
})(qe(({
  theme: t
}) => {
  let o = t.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return t.vars && (o = `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`), {
    position: "relative",
    variants: [{
      props: ({
        ownerState: i
      }) => i.formControl,
      style: {
        "label + &": {
          marginTop: 16
        }
      }
    }, {
      props: ({
        ownerState: i
      }) => !i.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: t.transitions.create("transform", {
            duration: t.transitions.duration.shorter,
            easing: t.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${po.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${po.error}`]: {
          "&::before, &::after": {
            borderBottomColor: (t.vars || t).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${o}`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: t.transitions.create("border-bottom-color", {
            duration: t.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${po.disabled}, .${po.error}):before`]: {
          borderBottom: `2px solid ${(t.vars || t).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${po.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(t.palette).filter(wn()).map(([i]) => ({
      props: {
        color: i,
        disableUnderline: !1
      },
      style: {
        "&::after": {
          borderBottom: `2px solid ${(t.vars || t).palette[i].main}`
        }
      }
    }))]
  };
})), pM = pe(vf, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: gf
})({}), Ih = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiInput"
  }), {
    disableUnderline: s = !1,
    components: c = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: m = "input",
    multiline: g = !1,
    slotProps: y,
    slots: h = {},
    type: C = "text",
    ...T
  } = i, R = fM(i), A = {
    root: {
      ownerState: {
        disableUnderline: s
      }
    }
  }, z = y ?? d ? An(y ?? d, A) : A, N = h.root ?? c.Root ?? dM, O = h.input ?? c.Input ?? pM;
  return /* @__PURE__ */ S.jsx(kh, {
    slots: {
      root: N,
      input: O
    },
    slotProps: z,
    fullWidth: p,
    inputComponent: m,
    multiline: g,
    ref: o,
    type: C,
    ...T,
    classes: R
  });
});
Ih.muiName = "Input";
function mM(t) {
  return et("MuiInputLabel", t);
}
Ke("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const hM = (t) => {
  const {
    classes: a,
    formControl: o,
    size: i,
    shrink: s,
    disableAnimation: c,
    variant: d,
    required: p
  } = t, m = {
    root: ["root", o && "formControl", !c && "animated", s && "shrink", i && i !== "normal" && `size${ce(i)}`, d],
    asterisk: [p && "asterisk"]
  }, g = tt(m, mM, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...g
  };
}, gM = pe(sM, {
  shouldForwardProp: (t) => qn(t) || t === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [{
      [`& .${Ns.asterisk}`]: a.asterisk
    }, a.root, o.formControl && a.formControl, o.size === "small" && a.sizeSmall, o.shrink && a.shrink, !o.disableAnimation && a.animated, o.focused && a.focused, a[o.variant]];
  }
})(qe(({
  theme: t
}) => ({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  variants: [{
    props: ({
      ownerState: a
    }) => a.formControl,
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, 20px) scale(1)"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      // Compensation for the `Input.inputSizeSmall` style.
      transform: "translate(0, 17px) scale(1)"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.shrink,
    style: {
      transform: "translate(0, -1.5px) scale(0.75)",
      transformOrigin: "top left",
      maxWidth: "133%"
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.disableAnimation,
    style: {
      transition: t.transitions.create(["color", "transform", "max-width"], {
        duration: t.transitions.duration.shorter,
        easing: t.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(12px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "filled",
      size: "small"
    },
    style: {
      transform: "translate(12px, 13px) scale(1)"
    }
  }, {
    props: ({
      variant: a,
      ownerState: o
    }) => a === "filled" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      transform: "translate(12px, 7px) scale(0.75)",
      maxWidth: "calc(133% - 24px)"
    }
  }, {
    props: ({
      variant: a,
      ownerState: o,
      size: i
    }) => a === "filled" && o.shrink && i === "small",
    style: {
      transform: "translate(12px, 4px) scale(0.75)"
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: "none",
      transform: "translate(14px, 16px) scale(1)",
      maxWidth: "calc(100% - 24px)"
    }
  }, {
    props: {
      variant: "outlined",
      size: "small"
    },
    style: {
      transform: "translate(14px, 9px) scale(1)"
    }
  }, {
    props: ({
      variant: a,
      ownerState: o
    }) => a === "outlined" && o.shrink,
    style: {
      userSelect: "none",
      pointerEvents: "auto",
      // Theoretically, we should have (8+5)*2/0.75 = 34px
      // but it feels a better when it bleeds a bit on the left, so 32px.
      maxWidth: "calc(133% - 32px)",
      transform: "translate(14px, -9px) scale(0.75)"
    }
  }]
}))), OS = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    name: "MuiInputLabel",
    props: a
  }), {
    disableAnimation: s = !1,
    margin: c,
    shrink: d,
    variant: p,
    className: m,
    ...g
  } = i, y = vi();
  let h = d;
  typeof h > "u" && y && (h = y.filled || y.focused || y.adornedStart);
  const C = yi({
    props: i,
    muiFormControl: y,
    states: ["size", "variant", "required", "focused"]
  }), T = {
    ...i,
    disableAnimation: s,
    formControl: y,
    shrink: h,
    size: C.size,
    variant: C.variant,
    required: C.required,
    focused: C.focused
  }, R = hM(T);
  return /* @__PURE__ */ S.jsx(gM, {
    "data-shrink": h,
    ref: o,
    className: Te(R.root, m),
    ...g,
    ownerState: T,
    classes: R
  });
}), Ym = /* @__PURE__ */ b.createContext({});
function yM(t) {
  return et("MuiList", t);
}
Ke("MuiList", ["root", "padding", "dense", "subheader"]);
const vM = (t) => {
  const {
    classes: a,
    disablePadding: o,
    dense: i,
    subheader: s
  } = t;
  return tt({
    root: ["root", !o && "padding", i && "dense", s && "subheader"]
  }, yM, a);
}, bM = pe("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, !o.disablePadding && a.padding, o.dense && a.dense, o.subheader && a.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: t
    }) => t.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), xM = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiList"
  }), {
    children: s,
    className: c,
    component: d = "ul",
    dense: p = !1,
    disablePadding: m = !1,
    subheader: g,
    ...y
  } = i, h = b.useMemo(() => ({
    dense: p
  }), [p]), C = {
    ...i,
    component: d,
    dense: p,
    disablePadding: m
  }, T = vM(C);
  return /* @__PURE__ */ S.jsx(Ym.Provider, {
    value: h,
    children: /* @__PURE__ */ S.jsxs(bM, {
      as: d,
      className: Te(T.root, c),
      ref: o,
      ownerState: C,
      ...y,
      children: [g, s]
    })
  });
}), B1 = Ke("MuiListItemIcon", ["root", "alignItemsFlexStart"]), j1 = Ke("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function dm(t, a, o) {
  return t === a ? t.firstChild : a && a.nextElementSibling ? a.nextElementSibling : o ? null : t.firstChild;
}
function $1(t, a, o) {
  return t === a ? o ? t.firstChild : t.lastChild : a && a.previousElementSibling ? a.previousElementSibling : o ? null : t.lastChild;
}
function MS(t, a) {
  if (a === void 0)
    return !0;
  let o = t.innerText;
  return o === void 0 && (o = t.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : a.repeating ? o[0] === a.keys[0] : o.startsWith(a.keys.join(""));
}
function bs(t, a, o, i, s, c) {
  let d = !1, p = s(t, a, a ? o : !1);
  for (; p; ) {
    if (p === t.firstChild) {
      if (d)
        return !1;
      d = !0;
    }
    const m = i ? !1 : p.disabled || p.getAttribute("aria-disabled") === "true";
    if (!p.hasAttribute("tabindex") || !MS(p, c) || m)
      p = s(t, p, o);
    else
      return p.focus(), !0;
  }
  return !1;
}
const SM = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: i,
    autoFocus: s = !1,
    autoFocusItem: c = !1,
    children: d,
    className: p,
    disabledItemsFocusable: m = !1,
    disableListWrap: g = !1,
    onKeyDown: y,
    variant: h = "selectedMenu",
    ...C
  } = a, T = b.useRef(null), R = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  oa(() => {
    s && T.current.focus();
  }, [s]), b.useImperativeHandle(i, () => ({
    adjustStyleForScrollbar: (O, {
      direction: M
    }) => {
      const D = !T.current.style.width;
      if (O.clientHeight < T.current.clientHeight && D) {
        const _ = `${Px(Ua(O))}px`;
        T.current.style[M === "rtl" ? "paddingLeft" : "paddingRight"] = _, T.current.style.width = `calc(100% + ${_})`;
      }
      return T.current;
    }
  }), []);
  const x = (O) => {
    const M = T.current, D = O.key;
    if (O.ctrlKey || O.metaKey || O.altKey) {
      y && y(O);
      return;
    }
    const L = la(M).activeElement;
    if (D === "ArrowDown")
      O.preventDefault(), bs(M, L, g, m, dm);
    else if (D === "ArrowUp")
      O.preventDefault(), bs(M, L, g, m, $1);
    else if (D === "Home")
      O.preventDefault(), bs(M, null, g, m, dm);
    else if (D === "End")
      O.preventDefault(), bs(M, null, g, m, $1);
    else if (D.length === 1) {
      const k = R.current, F = D.toLowerCase(), E = performance.now();
      k.keys.length > 0 && (E - k.lastTime > 500 ? (k.keys = [], k.repeating = !0, k.previousKeyMatched = !0) : k.repeating && F !== k.keys[0] && (k.repeating = !1)), k.lastTime = E, k.keys.push(F);
      const U = L && !k.repeating && MS(L, k);
      k.previousKeyMatched && (U || bs(M, L, !1, m, dm, k)) ? O.preventDefault() : k.previousKeyMatched = !1;
    }
    y && y(O);
  }, A = Jt(T, o);
  let z = -1;
  b.Children.forEach(d, (O, M) => {
    if (!/* @__PURE__ */ b.isValidElement(O)) {
      z === M && (z += 1, z >= d.length && (z = -1));
      return;
    }
    O.props.disabled || (h === "selectedMenu" && O.props.selected || z === -1) && (z = M), z === M && (O.props.disabled || O.props.muiSkipListHighlight || O.type.muiSkipListHighlight) && (z += 1, z >= d.length && (z = -1));
  });
  const N = b.Children.map(d, (O, M) => {
    if (M === z) {
      const D = {};
      return c && (D.autoFocus = !0), O.props.tabIndex === void 0 && h === "selectedMenu" && (D.tabIndex = 0), /* @__PURE__ */ b.cloneElement(O, D);
    }
    return O;
  });
  return /* @__PURE__ */ S.jsx(xM, {
    role: "menu",
    ref: A,
    className: p,
    onKeyDown: x,
    tabIndex: s ? 0 : -1,
    ...C,
    children: N
  });
});
function CM(t) {
  return et("MuiPopover", t);
}
Ke("MuiPopover", ["root", "paper"]);
function L1(t, a) {
  let o = 0;
  return typeof a == "number" ? o = a : a === "center" ? o = t.height / 2 : a === "bottom" && (o = t.height), o;
}
function _1(t, a) {
  let o = 0;
  return typeof a == "number" ? o = a : a === "center" ? o = t.width / 2 : a === "right" && (o = t.width), o;
}
function k1(t) {
  return [t.horizontal, t.vertical].map((a) => typeof a == "number" ? `${a}px` : a).join(" ");
}
function Bc(t) {
  return typeof t == "function" ? t() : t;
}
const EM = (t) => {
  const {
    classes: a
  } = t;
  return tt({
    root: ["root"],
    paper: ["paper"]
  }, CM, a);
}, TM = pe(Hh, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({}), zS = pe(al, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (t, a) => a.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), RM = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiPopover"
  }), {
    action: s,
    anchorEl: c,
    anchorOrigin: d = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: p,
    anchorReference: m = "anchorEl",
    children: g,
    className: y,
    container: h,
    elevation: C = 8,
    marginThreshold: T = 16,
    open: R,
    PaperProps: x = {},
    // TODO: remove in v7
    slots: A = {},
    slotProps: z = {},
    transformOrigin: N = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: O,
    // TODO: remove in v7
    transitionDuration: M = "auto",
    TransitionProps: D = {},
    // TODO: remove in v7
    disableScrollLock: _ = !1,
    ...L
  } = i, k = b.useRef(), F = {
    ...i,
    anchorOrigin: d,
    anchorReference: m,
    elevation: C,
    marginThreshold: T,
    transformOrigin: N,
    TransitionComponent: O,
    transitionDuration: M,
    TransitionProps: D
  }, E = EM(F), U = b.useCallback(() => {
    if (m === "anchorPosition")
      return p;
    const he = Bc(c), ue = (he && he.nodeType === 1 ? he : la(k.current).body).getBoundingClientRect();
    return {
      top: ue.top + L1(ue, d.vertical),
      left: ue.left + _1(ue, d.horizontal)
    };
  }, [c, d.horizontal, d.vertical, p, m]), P = b.useCallback((he) => ({
    vertical: L1(he, N.vertical),
    horizontal: _1(he, N.horizontal)
  }), [N.horizontal, N.vertical]), J = b.useCallback((he) => {
    const se = {
      width: he.offsetWidth,
      height: he.offsetHeight
    }, ue = P(se);
    if (m === "none")
      return {
        top: null,
        left: null,
        transformOrigin: k1(ue)
      };
    const _e = U();
    let Be = _e.top - ue.vertical, $e = _e.left - ue.horizontal;
    const lt = Be + se.height, ye = $e + se.width, we = Ua(Bc(c)), De = we.innerHeight - T, Ge = we.innerWidth - T;
    if (T !== null && Be < T) {
      const Ce = Be - T;
      Be -= Ce, ue.vertical += Ce;
    } else if (T !== null && lt > De) {
      const Ce = lt - De;
      Be -= Ce, ue.vertical += Ce;
    }
    if (T !== null && $e < T) {
      const Ce = $e - T;
      $e -= Ce, ue.horizontal += Ce;
    } else if (ye > Ge) {
      const Ce = ye - Ge;
      $e -= Ce, ue.horizontal += Ce;
    }
    return {
      top: `${Math.round(Be)}px`,
      left: `${Math.round($e)}px`,
      transformOrigin: k1(ue)
    };
  }, [c, m, U, P, T]), [te, X] = b.useState(R), j = b.useCallback(() => {
    const he = k.current;
    if (!he)
      return;
    const se = J(he);
    se.top !== null && he.style.setProperty("top", se.top), se.left !== null && (he.style.left = se.left), he.style.transformOrigin = se.transformOrigin, X(!0);
  }, [J]);
  b.useEffect(() => (_ && window.addEventListener("scroll", j), () => window.removeEventListener("scroll", j)), [c, _, j]);
  const Y = () => {
    j();
  }, W = () => {
    X(!1);
  };
  b.useEffect(() => {
    R && j();
  }), b.useImperativeHandle(s, () => R ? {
    updatePosition: () => {
      j();
    }
  } : null, [R, j]), b.useEffect(() => {
    if (!R)
      return;
    const he = gh(() => {
      j();
    }), se = Ua(Bc(c));
    return se.addEventListener("resize", he), () => {
      he.clear(), se.removeEventListener("resize", he);
    };
  }, [c, R, j]);
  let G = M;
  const de = {
    slots: {
      transition: O,
      ...A
    },
    slotProps: {
      transition: D,
      paper: x,
      ...z
    }
  }, [xe, Ne] = pt("transition", {
    elementType: Gm,
    externalForwardedProps: de,
    ownerState: F,
    getSlotProps: (he) => ({
      ...he,
      onEntering: (se, ue) => {
        var _e;
        (_e = he.onEntering) == null || _e.call(he, se, ue), Y();
      },
      onExited: (se) => {
        var ue;
        (ue = he.onExited) == null || ue.call(he, se), W();
      }
    }),
    additionalProps: {
      appear: !0,
      in: R
    }
  });
  M === "auto" && !xe.muiSupportAuto && (G = void 0);
  const Me = h || (c ? la(Bc(c)).body : void 0), [B, {
    slots: Z,
    slotProps: ne,
    ...fe
  }] = pt("root", {
    ref: o,
    elementType: TM,
    externalForwardedProps: {
      ...de,
      ...L
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: A.backdrop
      },
      slotProps: {
        backdrop: lS(typeof z.backdrop == "function" ? z.backdrop(F) : z.backdrop, {
          invisible: !0
        })
      },
      container: Me,
      open: R
    },
    ownerState: F,
    className: Te(E.root, y)
  }), [me, ve] = pt("paper", {
    ref: k,
    className: E.paper,
    elementType: zS,
    externalForwardedProps: de,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: C,
      style: te ? void 0 : {
        opacity: 0
      }
    },
    ownerState: F
  });
  return /* @__PURE__ */ S.jsx(B, {
    ...fe,
    ...!Fm(B) && {
      slots: Z,
      slotProps: ne,
      disableScrollLock: _
    },
    children: /* @__PURE__ */ S.jsx(xe, {
      ...Ne,
      timeout: G,
      children: /* @__PURE__ */ S.jsx(me, {
        ...ve,
        children: g
      })
    })
  });
});
function wM(t) {
  return et("MuiMenu", t);
}
Ke("MuiMenu", ["root", "paper", "list"]);
const AM = {
  vertical: "top",
  horizontal: "right"
}, OM = {
  vertical: "top",
  horizontal: "left"
}, MM = (t) => {
  const {
    classes: a
  } = t;
  return tt({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, wM, a);
}, zM = pe(RM, {
  shouldForwardProp: (t) => qn(t) || t === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({}), DM = pe(zS, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (t, a) => a.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), NM = pe(SM, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (t, a) => a.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), BM = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: c,
    className: d,
    disableAutoFocusItem: p = !1,
    MenuListProps: m = {},
    onClose: g,
    open: y,
    PaperProps: h = {},
    PopoverClasses: C,
    transitionDuration: T = "auto",
    TransitionProps: {
      onEntering: R,
      ...x
    } = {},
    variant: A = "selectedMenu",
    slots: z = {},
    slotProps: N = {},
    ...O
  } = i, M = pf(), D = {
    ...i,
    autoFocus: s,
    disableAutoFocusItem: p,
    MenuListProps: m,
    onEntering: R,
    PaperProps: h,
    transitionDuration: T,
    TransitionProps: x,
    variant: A
  }, _ = MM(D), L = s && !p && y, k = b.useRef(null), F = (G, de) => {
    k.current && k.current.adjustStyleForScrollbar(G, {
      direction: M ? "rtl" : "ltr"
    }), R && R(G, de);
  }, E = (G) => {
    G.key === "Tab" && (G.preventDefault(), g && g(G, "tabKeyDown"));
  };
  let U = -1;
  b.Children.map(c, (G, de) => {
    /* @__PURE__ */ b.isValidElement(G) && (G.props.disabled || (A === "selectedMenu" && G.props.selected || U === -1) && (U = de));
  });
  const P = {
    slots: z,
    slotProps: {
      list: m,
      transition: x,
      paper: h,
      ...N
    }
  }, J = Yx({
    elementType: z.root,
    externalSlotProps: N.root,
    ownerState: D,
    className: [_.root, d]
  }), [te, X] = pt("paper", {
    className: _.paper,
    elementType: DM,
    externalForwardedProps: P,
    shouldForwardComponentProp: !0,
    ownerState: D
  }), [j, Y] = pt("list", {
    className: Te(_.list, m.className),
    elementType: NM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    getSlotProps: (G) => ({
      ...G,
      onKeyDown: (de) => {
        var xe;
        E(de), (xe = G.onKeyDown) == null || xe.call(G, de);
      }
    }),
    ownerState: D
  }), W = typeof P.slotProps.transition == "function" ? P.slotProps.transition(D) : P.slotProps.transition;
  return /* @__PURE__ */ S.jsx(zM, {
    onClose: g,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: M ? "right" : "left"
    },
    transformOrigin: M ? AM : OM,
    slots: {
      root: z.root,
      paper: te,
      backdrop: z.backdrop,
      ...z.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: z.transition
      }
    },
    slotProps: {
      root: J,
      paper: X,
      backdrop: typeof N.backdrop == "function" ? N.backdrop(D) : N.backdrop,
      transition: {
        ...W,
        onEntering: (...G) => {
          var de;
          F(...G), (de = W == null ? void 0 : W.onEntering) == null || de.call(W, ...G);
        }
      }
    },
    open: y,
    ref: o,
    transitionDuration: T,
    ownerState: D,
    ...O,
    classes: C,
    children: /* @__PURE__ */ S.jsx(j, {
      actions: k,
      autoFocus: s && (U === -1 || p),
      autoFocusItem: L,
      variant: A,
      ...Y,
      children: c
    })
  });
});
function jM(t) {
  return et("MuiMenuItem", t);
}
const xs = Ke("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), $M = (t, a) => {
  const {
    ownerState: o
  } = t;
  return [a.root, o.dense && a.dense, o.divider && a.divider, !o.disableGutters && a.gutters];
}, LM = (t) => {
  const {
    disabled: a,
    dense: o,
    divider: i,
    disableGutters: s,
    selected: c,
    classes: d
  } = t, m = tt({
    root: ["root", o && "dense", a && "disabled", !s && "gutters", i && "divider", c && "selected"]
  }, jM, d);
  return {
    ...d,
    ...m
  };
}, _M = pe(tl, {
  shouldForwardProp: (t) => qn(t) || t === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: $M
})(qe(({
  theme: t
}) => ({
  ...t.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (t.vars || t).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${xs.selected}`]: {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : dt(t.palette.primary.main, t.palette.action.selectedOpacity),
    [`&.${xs.focusVisible}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : dt(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
    }
  },
  [`&.${xs.selected}:hover`]: {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : dt(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : dt(t.palette.primary.main, t.palette.action.selectedOpacity)
    }
  },
  [`&.${xs.focusVisible}`]: {
    backgroundColor: (t.vars || t).palette.action.focus
  },
  [`&.${xs.disabled}`]: {
    opacity: (t.vars || t).palette.action.disabledOpacity
  },
  [`& + .${O1.root}`]: {
    marginTop: t.spacing(1),
    marginBottom: t.spacing(1)
  },
  [`& + .${O1.inset}`]: {
    marginLeft: 52
  },
  [`& .${j1.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${j1.inset}`]: {
    paddingLeft: 36
  },
  [`& .${B1.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: a
    }) => !a.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: a
    }) => a.divider,
    style: {
      borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: a
    }) => !a.dense,
    style: {
      [t.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...t.typography.body2,
      [`& .${B1.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), ba = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiMenuItem"
  }), {
    autoFocus: s = !1,
    component: c = "li",
    dense: d = !1,
    divider: p = !1,
    disableGutters: m = !1,
    focusVisibleClassName: g,
    role: y = "menuitem",
    tabIndex: h,
    className: C,
    ...T
  } = i, R = b.useContext(Ym), x = b.useMemo(() => ({
    dense: d || R.dense || !1,
    disableGutters: m
  }), [R.dense, d, m]), A = b.useRef(null);
  oa(() => {
    s && A.current && A.current.focus();
  }, [s]);
  const z = {
    ...i,
    dense: x.dense,
    divider: p,
    disableGutters: m
  }, N = LM(i), O = Jt(A, o);
  let M;
  return i.disabled || (M = h !== void 0 ? h : -1), /* @__PURE__ */ S.jsx(Ym.Provider, {
    value: x,
    children: /* @__PURE__ */ S.jsx(_M, {
      ref: O,
      role: y,
      tabIndex: M,
      component: c,
      focusVisibleClassName: Te(N.focusVisible, g),
      className: Te(N.root, C),
      ...T,
      ownerState: z,
      classes: N
    })
  });
});
function kM(t) {
  return et("MuiNativeSelect", t);
}
const Ph = Ke("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), HM = (t) => {
  const {
    classes: a,
    variant: o,
    disabled: i,
    multiple: s,
    open: c,
    error: d
  } = t, p = {
    select: ["select", o, i && "disabled", s && "multiple", d && "error"],
    icon: ["icon", `icon${ce(o)}`, c && "iconOpen", i && "disabled"]
  };
  return tt(p, kM, a);
}, DS = pe("select", {
  name: "MuiNativeSelect"
})(({
  theme: t
}) => ({
  // Reset
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  // Reset
  borderRadius: 0,
  cursor: "pointer",
  "&:focus": {
    // Reset Chrome style
    borderRadius: 0
  },
  [`&.${Ph.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.variant !== "filled" && a.variant !== "outlined",
    style: {
      // Bump specificity to allow extending custom inputs
      "&&&": {
        paddingRight: 24,
        minWidth: 16
        // So it doesn't collapse.
      }
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      "&&&": {
        paddingRight: 32
      }
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      borderRadius: (t.vars || t).shape.borderRadius,
      "&:focus": {
        borderRadius: (t.vars || t).shape.borderRadius
        // Reset the reset for Chrome style
      },
      "&&&": {
        paddingRight: 32
      }
    }
  }]
})), UM = pe(DS, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: qn,
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.select, a[o.variant], o.error && a.error, {
      [`&.${Ph.multiple}`]: a.multiple
    }];
  }
})({}), NS = pe("svg", {
  name: "MuiNativeSelect"
})(({
  theme: t
}) => ({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  // Center vertically, height is 1em
  top: "calc(50% - .5em)",
  // Don't block pointer events on the select under the icon.
  pointerEvents: "none",
  color: (t.vars || t).palette.action.active,
  [`&.${Ph.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  },
  variants: [{
    props: ({
      ownerState: a
    }) => a.open,
    style: {
      transform: "rotate(180deg)"
    }
  }, {
    props: {
      variant: "filled"
    },
    style: {
      right: 7
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      right: 7
    }
  }]
})), IM = pe(NS, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.icon, o.variant && a[`icon${ce(o.variant)}`], o.open && a.iconOpen];
  }
})({}), PM = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    className: i,
    disabled: s,
    error: c,
    IconComponent: d,
    inputRef: p,
    variant: m = "standard",
    ...g
  } = a, y = {
    ...a,
    disabled: s,
    variant: m,
    error: c
  }, h = HM(y);
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx(UM, {
      ownerState: y,
      className: Te(h.select, i),
      disabled: s,
      ref: p || o,
      ...g
    }), a.multiple ? null : /* @__PURE__ */ S.jsx(IM, {
      as: d,
      ownerState: y,
      className: h.icon
    })]
  });
});
var H1;
const FM = pe("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: qn
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), VM = pe("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: qn
})(qe(({
  theme: t
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: ({
      ownerState: a
    }) => !a.withLabel,
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: t.transitions.create("width", {
        duration: 150,
        easing: t.transitions.easing.easeOut
      })
    }
  }, {
    props: ({
      ownerState: a
    }) => a.withLabel,
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: t.transitions.create("max-width", {
        duration: 50,
        easing: t.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: ({
      ownerState: a
    }) => a.withLabel && a.notched,
    style: {
      maxWidth: "100%",
      transition: t.transitions.create("max-width", {
        duration: 100,
        easing: t.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function qM(t) {
  const {
    children: a,
    classes: o,
    className: i,
    label: s,
    notched: c,
    ...d
  } = t, p = s != null && s !== "", m = {
    ...t,
    notched: c,
    withLabel: p
  };
  return /* @__PURE__ */ S.jsx(FM, {
    "aria-hidden": !0,
    className: i,
    ownerState: m,
    ...d,
    children: /* @__PURE__ */ S.jsx(VM, {
      ownerState: m,
      children: p ? /* @__PURE__ */ S.jsx("span", {
        children: s
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        H1 || (H1 = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const GM = (t) => {
  const {
    classes: a
  } = t, i = tt({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, cO, a);
  return {
    ...a,
    // forward classes to the InputBase
    ...i
  };
}, YM = pe(yf, {
  shouldForwardProp: (t) => qn(t) || t === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: hf
})(qe(({
  theme: t
}) => {
  const a = t.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (t.vars || t).shape.borderRadius,
    [`&:hover .${va.notchedOutline}`]: {
      borderColor: (t.vars || t).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${va.notchedOutline}`]: {
        borderColor: t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)` : a
      }
    },
    [`&.${va.focused} .${va.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(t.palette).filter(wn()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        [`&.${va.focused} .${va.notchedOutline}`]: {
          borderColor: (t.vars || t).palette[o].main
        }
      }
    })), {
      props: {},
      // to overide the above style
      style: {
        [`&.${va.error} .${va.notchedOutline}`]: {
          borderColor: (t.vars || t).palette.error.main
        },
        [`&.${va.disabled} .${va.notchedOutline}`]: {
          borderColor: (t.vars || t).palette.action.disabled
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => o.startAdornment,
      style: {
        paddingLeft: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.endAdornment,
      style: {
        paddingRight: 14
      }
    }, {
      props: ({
        ownerState: o
      }) => o.multiline,
      style: {
        padding: "16.5px 14px"
      }
    }, {
      props: ({
        ownerState: o,
        size: i
      }) => o.multiline && i === "small",
      style: {
        padding: "8.5px 14px"
      }
    }]
  };
})), XM = pe(qM, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (t, a) => a.notchedOutline
})(qe(({
  theme: t
}) => {
  const a = t.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)` : a
  };
})), KM = pe(vf, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: gf
})(qe(({
  theme: t
}) => ({
  padding: "16.5px 14px",
  ...!t.vars && {
    "&:-webkit-autofill": {
      WebkitBoxShadow: t.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
      WebkitTextFillColor: t.palette.mode === "light" ? null : "#fff",
      caretColor: t.palette.mode === "light" ? null : "#fff",
      borderRadius: "inherit"
    }
  },
  ...t.vars && {
    "&:-webkit-autofill": {
      borderRadius: "inherit"
    },
    [t.getColorSchemeSelector("dark")]: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #266798 inset",
        WebkitTextFillColor: "#fff",
        caretColor: "#fff"
      }
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 14px"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.multiline,
    style: {
      padding: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      ownerState: a
    }) => a.endAdornment,
    style: {
      paddingRight: 0
    }
  }]
}))), Fh = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiOutlinedInput"
  }), {
    components: s = {},
    fullWidth: c = !1,
    inputComponent: d = "input",
    label: p,
    multiline: m = !1,
    notched: g,
    slots: y = {},
    slotProps: h = {},
    type: C = "text",
    ...T
  } = i, R = GM(i), x = vi(), A = yi({
    props: i,
    muiFormControl: x,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), z = {
    ...i,
    color: A.color || "primary",
    disabled: A.disabled,
    error: A.error,
    focused: A.focused,
    formControl: x,
    fullWidth: c,
    hiddenLabel: A.hiddenLabel,
    multiline: m,
    size: A.size,
    type: C
  }, N = y.root ?? s.Root ?? YM, O = y.input ?? s.Input ?? KM, [M, D] = pt("notchedOutline", {
    elementType: XM,
    className: R.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: z,
    externalForwardedProps: {
      slots: y,
      slotProps: h
    },
    additionalProps: {
      label: p != null && p !== "" && A.required ? /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [p, " ", "*"]
      }) : p
    }
  });
  return /* @__PURE__ */ S.jsx(kh, {
    slots: {
      root: N,
      input: O
    },
    slotProps: h,
    renderSuffix: (_) => /* @__PURE__ */ S.jsx(M, {
      ...D,
      notched: typeof g < "u" ? g : !!(_.startAdornment || _.filled || _.focused)
    }),
    fullWidth: c,
    inputComponent: d,
    multiline: m,
    ref: o,
    type: C,
    ...T,
    classes: {
      ...R,
      notchedOutline: null
    }
  });
});
Fh.muiName = "Input";
const WM = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), QM = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
}), "StarBorder");
function ZM(t) {
  return et("MuiRating", t);
}
const Ss = Ke("MuiRating", ["root", "sizeSmall", "sizeMedium", "sizeLarge", "readOnly", "disabled", "focusVisible", "visuallyHidden", "pristine", "label", "labelEmptyValueActive", "icon", "iconEmpty", "iconFilled", "iconHover", "iconFocus", "iconActive", "decimal"]);
function JM(t) {
  const a = t.toString().split(".")[1];
  return a ? a.length : 0;
}
function pm(t, a) {
  if (t == null)
    return t;
  const o = Math.round(t / a) * a;
  return Number(o.toFixed(JM(a)));
}
const e6 = (t) => {
  const {
    classes: a,
    size: o,
    readOnly: i,
    disabled: s,
    emptyValueFocused: c,
    focusVisible: d
  } = t, p = {
    root: ["root", `size${ce(o)}`, s && "disabled", d && "focusVisible", i && "readOnly"],
    label: ["label", "pristine"],
    labelEmptyValue: [c && "labelEmptyValueActive"],
    icon: ["icon"],
    iconEmpty: ["iconEmpty"],
    iconFilled: ["iconFilled"],
    iconHover: ["iconHover"],
    iconFocus: ["iconFocus"],
    iconActive: ["iconActive"],
    decimal: ["decimal"],
    visuallyHidden: ["visuallyHidden"]
  };
  return tt(p, ZM, a);
}, t6 = pe("span", {
  name: "MuiRating",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [{
      [`& .${Ss.visuallyHidden}`]: a.visuallyHidden
    }, a.root, a[`size${ce(o.size)}`], o.readOnly && a.readOnly];
  }
})(qe(({
  theme: t
}) => ({
  display: "inline-flex",
  // Required to position the pristine input absolutely
  position: "relative",
  fontSize: t.typography.pxToRem(24),
  color: "#faaf00",
  cursor: "pointer",
  textAlign: "left",
  width: "min-content",
  WebkitTapHighlightColor: "transparent",
  [`&.${Ss.disabled}`]: {
    opacity: (t.vars || t).palette.action.disabledOpacity,
    pointerEvents: "none"
  },
  [`&.${Ss.focusVisible} .${Ss.iconActive}`]: {
    outline: "1px solid #999"
  },
  [`& .${Ss.visuallyHidden}`]: RR,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      fontSize: t.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      fontSize: t.typography.pxToRem(30)
    }
  }, {
    // TODO v6: use the .Mui-readOnly global state class
    props: ({
      ownerState: a
    }) => a.readOnly,
    style: {
      pointerEvents: "none"
    }
  }]
}))), BS = pe("label", {
  name: "MuiRating",
  slot: "Label",
  overridesResolver: ({
    ownerState: t
  }, a) => [a.label, t.emptyValueFocused && a.labelEmptyValueActive]
})({
  cursor: "inherit",
  variants: [{
    props: ({
      ownerState: t
    }) => t.emptyValueFocused,
    style: {
      top: 0,
      bottom: 0,
      position: "absolute",
      outline: "1px solid #999",
      width: "100%"
    }
  }]
}), n6 = pe("span", {
  name: "MuiRating",
  slot: "Icon",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.icon, o.iconEmpty && a.iconEmpty, o.iconFilled && a.iconFilled, o.iconHover && a.iconHover, o.iconFocus && a.iconFocus, o.iconActive && a.iconActive];
  }
})(qe(({
  theme: t
}) => ({
  // Fit wrapper to actual icon size.
  display: "flex",
  transition: t.transitions.create("transform", {
    duration: t.transitions.duration.shortest
  }),
  // Fix mouseLeave issue.
  // https://github.com/facebook/react/issues/4492
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: a
    }) => a.iconActive,
    style: {
      transform: "scale(1.2)"
    }
  }, {
    props: ({
      ownerState: a
    }) => a.iconEmpty,
    style: {
      color: (t.vars || t).palette.action.disabled
    }
  }]
}))), a6 = pe("span", {
  name: "MuiRating",
  slot: "Decimal",
  shouldForwardProp: (t) => Rh(t) && t !== "iconActive",
  overridesResolver: (t, a) => {
    const {
      iconActive: o
    } = t;
    return [a.decimal, o && a.iconActive];
  }
})({
  position: "relative",
  variants: [{
    props: ({
      iconActive: t
    }) => t,
    style: {
      transform: "scale(1.2)"
    }
  }]
});
function r6(t) {
  const {
    value: a,
    ...o
  } = t;
  return /* @__PURE__ */ S.jsx("span", {
    ...o
  });
}
function U1(t) {
  const {
    classes: a,
    disabled: o,
    emptyIcon: i,
    focus: s,
    getLabelText: c,
    highlightSelectedOnly: d,
    hover: p,
    icon: m,
    IconContainerComponent: g,
    isActive: y,
    itemValue: h,
    labelProps: C,
    name: T,
    onBlur: R,
    onChange: x,
    onClick: A,
    onFocus: z,
    readOnly: N,
    ownerState: O,
    ratingValue: M,
    ratingValueRounded: D,
    slots: _ = {},
    slotProps: L = {}
  } = t, k = d ? h === M : h <= M, F = h <= p, E = h <= s, U = h === D, P = `${T}-${Nr()}`, J = {
    slots: _,
    slotProps: L
  }, [te, X] = pt("icon", {
    elementType: n6,
    className: Te(a.icon, k ? a.iconFilled : a.iconEmpty, F && a.iconHover, E && a.iconFocus, y && a.iconActive),
    externalForwardedProps: J,
    ownerState: {
      ...O,
      iconEmpty: !k,
      iconFilled: k,
      iconHover: F,
      iconFocus: E,
      iconActive: y
    },
    additionalProps: {
      value: h
    },
    internalForwardedProps: {
      // TODO: remove this in v7 because `IconContainerComponent` is deprecated
      // only forward if `slots.icon` is NOT provided
      as: g
    }
  }), [j, Y] = pt("label", {
    elementType: BS,
    externalForwardedProps: J,
    ownerState: {
      ...O,
      emptyValueFocused: void 0
    },
    additionalProps: {
      style: C == null ? void 0 : C.style,
      htmlFor: P
    }
  }), W = /* @__PURE__ */ S.jsx(te, {
    ...X,
    children: i && !k ? i : m
  });
  return N ? /* @__PURE__ */ S.jsx("span", {
    ...C,
    children: W
  }) : /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsxs(j, {
      ...Y,
      children: [W, /* @__PURE__ */ S.jsx("span", {
        className: a.visuallyHidden,
        children: c(h)
      })]
    }), /* @__PURE__ */ S.jsx("input", {
      className: a.visuallyHidden,
      onFocus: z,
      onBlur: R,
      onChange: x,
      onClick: A,
      disabled: o,
      value: h,
      id: P,
      type: "radio",
      name: T,
      checked: U
    })]
  });
}
const o6 = /* @__PURE__ */ S.jsx(WM, {
  fontSize: "inherit"
}), l6 = /* @__PURE__ */ S.jsx(QM, {
  fontSize: "inherit"
});
function i6(t) {
  return `${t || "0"} Star${t !== 1 ? "s" : ""}`;
}
const s6 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    name: "MuiRating",
    props: a
  }), {
    component: s = "span",
    className: c,
    defaultValue: d = null,
    disabled: p = !1,
    emptyIcon: m = l6,
    emptyLabelText: g = "Empty",
    getLabelText: y = i6,
    highlightSelectedOnly: h = !1,
    icon: C = o6,
    IconContainerComponent: T = r6,
    max: R = 5,
    name: x,
    onChange: A,
    onChangeActive: z,
    onMouseLeave: N,
    onMouseMove: O,
    precision: M = 1,
    readOnly: D = !1,
    size: _ = "medium",
    value: L,
    slots: k = {},
    slotProps: F = {},
    ...E
  } = i, U = Nr(x), [P, J] = ri({
    controlled: L,
    default: d,
    name: "Rating"
  }), te = pm(P, M), X = pf(), [{
    hover: j,
    focus: Y
  }, W] = b.useState({
    hover: -1,
    focus: -1
  });
  let G = te;
  j !== -1 && (G = j), Y !== -1 && (G = Y);
  const [de, xe] = b.useState(!1), Ne = b.useRef(), Me = Jt(Ne, o), B = (Ce) => {
    O && O(Ce);
    const ge = Ne.current, {
      right: Xe,
      left: Ye,
      width: Tt
    } = ge.getBoundingClientRect();
    let Bt;
    X ? Bt = (Xe - Ce.clientX) / Tt : Bt = (Ce.clientX - Ye) / Tt;
    let ht = pm(R * Bt + M / 2, M);
    ht = Hx(ht, M, R), W((Ze) => Ze.hover === ht && Ze.focus === ht ? Ze : {
      hover: ht,
      focus: ht
    }), xe(!1), z && j !== ht && z(Ce, ht);
  }, Z = (Ce) => {
    N && N(Ce);
    const ge = -1;
    W({
      hover: ge,
      focus: ge
    }), z && j !== ge && z(Ce, ge);
  }, ne = (Ce) => {
    let ge = Ce.target.value === "" ? null : parseFloat(Ce.target.value);
    j !== -1 && (ge = j), J(ge), A && A(Ce, ge);
  }, fe = (Ce) => {
    Ce.clientX === 0 && Ce.clientY === 0 || (W({
      hover: -1,
      focus: -1
    }), J(null), A && parseFloat(Ce.target.value) === te && A(Ce, null));
  }, me = (Ce) => {
    Gc(Ce.target) && xe(!0);
    const ge = parseFloat(Ce.target.value);
    W((Xe) => ({
      hover: Xe.hover,
      focus: ge
    }));
  }, ve = (Ce) => {
    if (j !== -1)
      return;
    Gc(Ce.target) || xe(!1);
    const ge = -1;
    W((Xe) => ({
      hover: Xe.hover,
      focus: ge
    }));
  }, [he, se] = b.useState(!1), ue = {
    ...i,
    component: s,
    defaultValue: d,
    disabled: p,
    emptyIcon: m,
    emptyLabelText: g,
    emptyValueFocused: he,
    focusVisible: de,
    getLabelText: y,
    icon: C,
    IconContainerComponent: T,
    max: R,
    precision: M,
    readOnly: D,
    size: _
  }, _e = e6(ue), Be = {
    slots: k,
    slotProps: F
  }, [$e, lt] = pt("root", {
    ref: Me,
    className: Te(_e.root, c),
    elementType: t6,
    externalForwardedProps: {
      ...Be,
      ...E,
      component: s
    },
    getSlotProps: (Ce) => ({
      ...Ce,
      onMouseMove: (ge) => {
        var Xe;
        B(ge), (Xe = Ce.onMouseMove) == null || Xe.call(Ce, ge);
      },
      onMouseLeave: (ge) => {
        var Xe;
        Z(ge), (Xe = Ce.onMouseLeave) == null || Xe.call(Ce, ge);
      }
    }),
    ownerState: ue,
    additionalProps: {
      role: D ? "img" : null,
      "aria-label": D ? y(G) : null
    }
  }), [ye, we] = pt("label", {
    className: Te(_e.label, _e.labelEmptyValue),
    elementType: BS,
    externalForwardedProps: Be,
    ownerState: ue
  }), [De, Ge] = pt("decimal", {
    className: _e.decimal,
    elementType: a6,
    externalForwardedProps: Be,
    ownerState: ue
  });
  return /* @__PURE__ */ S.jsxs($e, {
    ...lt,
    children: [Array.from(new Array(R)).map((Ce, ge) => {
      const Xe = ge + 1, Ye = {
        classes: _e,
        disabled: p,
        emptyIcon: m,
        focus: Y,
        getLabelText: y,
        highlightSelectedOnly: h,
        hover: j,
        icon: C,
        IconContainerComponent: T,
        name: U,
        onBlur: ve,
        onChange: ne,
        onClick: fe,
        onFocus: me,
        ratingValue: G,
        ratingValueRounded: te,
        readOnly: D,
        ownerState: ue,
        slots: k,
        slotProps: F
      }, Tt = Xe === Math.ceil(G) && (j !== -1 || Y !== -1);
      if (M < 1) {
        const Bt = Array.from(new Array(1 / M));
        return /* @__PURE__ */ b.createElement(De, {
          ...Ge,
          key: Xe,
          className: Te(Ge.className, Tt && _e.iconActive),
          iconActive: Tt
        }, Bt.map((ht, Ze) => {
          const He = pm(Xe - 1 + (Ze + 1) * M, M);
          return /* @__PURE__ */ S.jsx(U1, {
            ...Ye,
            // The icon is already displayed as active
            isActive: !1,
            itemValue: He,
            labelProps: {
              style: Bt.length - 1 === Ze ? {} : {
                width: He === G ? `${(Ze + 1) * M * 100}%` : "0%",
                overflow: "hidden",
                position: "absolute"
              }
            }
          }, He);
        }));
      }
      return /* @__PURE__ */ S.jsx(U1, {
        ...Ye,
        isActive: Tt,
        itemValue: Xe
      }, Xe);
    }), !D && !p && /* @__PURE__ */ S.jsxs(ye, {
      ...we,
      children: [/* @__PURE__ */ S.jsx("input", {
        className: _e.visuallyHidden,
        value: "",
        id: `${U}-empty`,
        type: "radio",
        name: U,
        checked: te == null,
        onFocus: () => se(!0),
        onBlur: () => se(!1),
        onChange: ne
      }), /* @__PURE__ */ S.jsx("span", {
        className: _e.visuallyHidden,
        children: g
      })]
    })]
  });
});
function jS(t) {
  return et("MuiSelect", t);
}
const Cs = Ke("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var I1;
const u6 = pe(DS, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [
      // Win specificity over the input base
      {
        [`&.${Cs.select}`]: a.select
      },
      {
        [`&.${Cs.select}`]: a[o.variant]
      },
      {
        [`&.${Cs.error}`]: a.error
      },
      {
        [`&.${Cs.multiple}`]: a.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Cs.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), c6 = pe(NS, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.icon, o.variant && a[`icon${ce(o.variant)}`], o.open && a.iconOpen];
  }
})({}), f6 = pe("input", {
  shouldForwardProp: (t) => Rh(t) && t !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (t, a) => a.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function P1(t, a) {
  return typeof a == "object" && a !== null ? t === a : String(t) === String(a);
}
function d6(t) {
  return t == null || typeof t == "string" && !t.trim();
}
const p6 = (t) => {
  const {
    classes: a,
    variant: o,
    disabled: i,
    multiple: s,
    open: c,
    error: d
  } = t, p = {
    select: ["select", o, i && "disabled", s && "multiple", d && "error"],
    icon: ["icon", `icon${ce(o)}`, c && "iconOpen", i && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return tt(p, jS, a);
}, m6 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  var Ia;
  const {
    "aria-describedby": i,
    "aria-label": s,
    autoFocus: c,
    autoWidth: d,
    children: p,
    className: m,
    defaultOpen: g,
    defaultValue: y,
    disabled: h,
    displayEmpty: C,
    error: T = !1,
    IconComponent: R,
    inputRef: x,
    labelId: A,
    MenuProps: z = {},
    multiple: N,
    name: O,
    onBlur: M,
    onChange: D,
    onClose: _,
    onFocus: L,
    onOpen: k,
    open: F,
    readOnly: E,
    renderValue: U,
    required: P,
    SelectDisplayProps: J = {},
    tabIndex: te,
    // catching `type` from Input which makes no sense for SelectInput
    type: X,
    value: j,
    variant: Y = "standard",
    ...W
  } = a, [G, de] = ri({
    controlled: j,
    default: y,
    name: "Select"
  }), [xe, Ne] = ri({
    controlled: F,
    default: g,
    name: "Select"
  }), Me = b.useRef(null), B = b.useRef(null), [Z, ne] = b.useState(null), {
    current: fe
  } = b.useRef(F != null), [me, ve] = b.useState(), he = Jt(o, x), se = b.useCallback((ze) => {
    B.current = ze, ze && ne(ze);
  }, []), ue = Z == null ? void 0 : Z.parentNode;
  b.useImperativeHandle(he, () => ({
    focus: () => {
      B.current.focus();
    },
    node: Me.current,
    value: G
  }), [G]), b.useEffect(() => {
    g && xe && Z && !fe && (ve(d ? null : ue.clientWidth), B.current.focus());
  }, [Z, d]), b.useEffect(() => {
    c && B.current.focus();
  }, [c]), b.useEffect(() => {
    if (!A)
      return;
    const ze = la(B.current).getElementById(A);
    if (ze) {
      const Je = () => {
        getSelection().isCollapsed && B.current.focus();
      };
      return ze.addEventListener("click", Je), () => {
        ze.removeEventListener("click", Je);
      };
    }
  }, [A]);
  const _e = (ze, Je) => {
    ze ? k && k(Je) : _ && _(Je), fe || (ve(d ? null : ue.clientWidth), Ne(ze));
  }, Be = (ze) => {
    ze.button === 0 && (ze.preventDefault(), B.current.focus(), _e(!0, ze));
  }, $e = (ze) => {
    _e(!1, ze);
  }, lt = b.Children.toArray(p), ye = (ze) => {
    const Je = lt.find((Ft) => Ft.props.value === ze.target.value);
    Je !== void 0 && (de(Je.props.value), D && D(ze, Je));
  }, we = (ze) => (Je) => {
    let Ft;
    if (Je.currentTarget.hasAttribute("tabindex")) {
      if (N) {
        Ft = Array.isArray(G) ? G.slice() : [];
        const jn = G.indexOf(ze.props.value);
        jn === -1 ? Ft.push(ze.props.value) : Ft.splice(jn, 1);
      } else
        Ft = ze.props.value;
      if (ze.props.onClick && ze.props.onClick(Je), G !== Ft && (de(Ft), D)) {
        const jn = Je.nativeEvent || Je, tn = new jn.constructor(jn.type, jn);
        Object.defineProperty(tn, "target", {
          writable: !0,
          value: {
            value: Ft,
            name: O
          }
        }), D(tn, ze);
      }
      N || _e(!1, Je);
    }
  }, De = (ze) => {
    E || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].includes(ze.key) && (ze.preventDefault(), _e(!0, ze));
  }, Ge = Z !== null && xe, Ce = (ze) => {
    !Ge && M && (Object.defineProperty(ze, "target", {
      writable: !0,
      value: {
        value: G,
        name: O
      }
    }), M(ze));
  };
  delete W["aria-invalid"];
  let ge, Xe;
  const Ye = [];
  let Tt = !1;
  (Wc({
    value: G
  }) || C) && (U ? ge = U(G) : Tt = !0);
  const Bt = lt.map((ze) => {
    if (!/* @__PURE__ */ b.isValidElement(ze))
      return null;
    let Je;
    if (N) {
      if (!Array.isArray(G))
        throw new Error(Or(2));
      Je = G.some((Ft) => P1(Ft, ze.props.value)), Je && Tt && Ye.push(ze.props.children);
    } else
      Je = P1(G, ze.props.value), Je && Tt && (Xe = ze.props.children);
    return /* @__PURE__ */ b.cloneElement(ze, {
      "aria-selected": Je ? "true" : "false",
      onClick: we(ze),
      onKeyUp: (Ft) => {
        Ft.key === " " && Ft.preventDefault(), ze.props.onKeyUp && ze.props.onKeyUp(Ft);
      },
      role: "option",
      selected: Je,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ze.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  Tt && (N ? Ye.length === 0 ? ge = null : ge = Ye.reduce((ze, Je, Ft) => (ze.push(Je), Ft < Ye.length - 1 && ze.push(", "), ze), []) : ge = Xe);
  let ht = me;
  !d && fe && Z && (ht = ue.clientWidth);
  let Ze;
  typeof te < "u" ? Ze = te : Ze = h ? null : 0;
  const He = J.id || (O ? `mui-component-select-${O}` : void 0), Ue = {
    ...a,
    variant: Y,
    value: G,
    open: Ge,
    error: T
  }, Fe = p6(Ue), _t = {
    ...z.PaperProps,
    ...(Ia = z.slotProps) == null ? void 0 : Ia.paper
  }, jt = Nr();
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx(u6, {
      as: "div",
      ref: se,
      tabIndex: Ze,
      role: "combobox",
      "aria-controls": Ge ? jt : void 0,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": Ge ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [A, He].filter(Boolean).join(" ") || void 0,
      "aria-describedby": i,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": T ? "true" : void 0,
      onKeyDown: De,
      onMouseDown: h || E ? null : Be,
      onBlur: Ce,
      onFocus: L,
      ...J,
      ownerState: Ue,
      className: Te(J.className, Fe.select, m),
      id: He,
      children: d6(ge) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        I1 || (I1 = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : ge
    }), /* @__PURE__ */ S.jsx(f6, {
      "aria-invalid": T,
      value: Array.isArray(G) ? G.join(",") : G,
      name: O,
      ref: Me,
      "aria-hidden": !0,
      onChange: ye,
      tabIndex: -1,
      disabled: h,
      className: Fe.nativeInput,
      autoFocus: c,
      required: P,
      ...W,
      ownerState: Ue
    }), /* @__PURE__ */ S.jsx(c6, {
      as: R,
      className: Fe.icon,
      ownerState: Ue
    }), /* @__PURE__ */ S.jsx(BM, {
      id: `menu-${O || ""}`,
      anchorEl: ue,
      open: Ge,
      onClose: $e,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      ...z,
      slotProps: {
        ...z.slotProps,
        list: {
          "aria-labelledby": A,
          role: "listbox",
          "aria-multiselectable": N ? "true" : void 0,
          disableListWrap: !0,
          id: jt,
          ...z.MenuListProps
        },
        paper: {
          ..._t,
          style: {
            minWidth: ht,
            ..._t != null ? _t.style : null
          }
        }
      },
      children: Bt
    })]
  });
}), h6 = (t) => {
  const {
    classes: a
  } = t, i = tt({
    root: ["root"]
  }, jS, a);
  return {
    ...a,
    ...i
  };
}, Vh = {
  name: "MuiSelect",
  overridesResolver: (t, a) => a.root,
  shouldForwardProp: (t) => qn(t) && t !== "variant",
  slot: "Root"
}, g6 = pe(Ih, Vh)(""), y6 = pe(Fh, Vh)(""), v6 = pe(Uh, Vh)(""), Ps = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    name: "MuiSelect",
    props: a
  }), {
    autoWidth: s = !1,
    children: c,
    classes: d = {},
    className: p,
    defaultOpen: m = !1,
    displayEmpty: g = !1,
    IconComponent: y = CS,
    id: h,
    input: C,
    inputProps: T,
    label: R,
    labelId: x,
    MenuProps: A,
    multiple: z = !1,
    native: N = !1,
    onClose: O,
    onOpen: M,
    open: D,
    renderValue: _,
    SelectDisplayProps: L,
    variant: k = "outlined",
    ...F
  } = i, E = N ? PM : m6, U = vi(), P = yi({
    props: i,
    muiFormControl: U,
    states: ["variant", "error"]
  }), J = P.variant || k, te = {
    ...i,
    variant: J,
    classes: d
  }, X = h6(te), {
    root: j,
    ...Y
  } = X, W = C || {
    standard: /* @__PURE__ */ S.jsx(g6, {
      ownerState: te
    }),
    outlined: /* @__PURE__ */ S.jsx(y6, {
      label: R,
      ownerState: te
    }),
    filled: /* @__PURE__ */ S.jsx(v6, {
      ownerState: te
    })
  }[J], G = Jt(o, gi(W));
  return /* @__PURE__ */ S.jsx(b.Fragment, {
    children: /* @__PURE__ */ b.cloneElement(W, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: E,
      inputProps: {
        children: c,
        error: P.error,
        IconComponent: y,
        variant: J,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: z,
        ...N ? {
          id: h
        } : {
          autoWidth: s,
          defaultOpen: m,
          displayEmpty: g,
          labelId: x,
          MenuProps: A,
          onClose: O,
          onOpen: M,
          open: D,
          renderValue: _,
          SelectDisplayProps: {
            id: h,
            ...L
          }
        },
        ...T,
        classes: T ? An(Y, T.classes) : Y,
        ...C ? C.props.inputProps : {}
      },
      ...(z && N || g) && J === "outlined" ? {
        notched: !0
      } : {},
      ref: G,
      className: Te(W.props.className, p, X.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!C && {
        variant: J
      },
      ...F
    })
  });
});
Ps.muiName = "Select";
function b6(t) {
  return et("MuiTextField", t);
}
Ke("MuiTextField", ["root"]);
const x6 = {
  standard: Ih,
  filled: Uh,
  outlined: Fh
}, S6 = (t) => {
  const {
    classes: a
  } = t;
  return tt({
    root: ["root"]
  }, b6, a);
}, C6 = pe(Qc, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (t, a) => a.root
})({}), Bs = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiTextField"
  }), {
    autoComplete: s,
    autoFocus: c = !1,
    children: d,
    className: p,
    color: m = "primary",
    defaultValue: g,
    disabled: y = !1,
    error: h = !1,
    FormHelperTextProps: C,
    fullWidth: T = !1,
    helperText: R,
    id: x,
    InputLabelProps: A,
    inputProps: z,
    InputProps: N,
    inputRef: O,
    label: M,
    maxRows: D,
    minRows: _,
    multiline: L = !1,
    name: k,
    onBlur: F,
    onChange: E,
    onFocus: U,
    placeholder: P,
    required: J = !1,
    rows: te,
    select: X = !1,
    SelectProps: j,
    slots: Y = {},
    slotProps: W = {},
    type: G,
    value: de,
    variant: xe = "outlined",
    ...Ne
  } = i, Me = {
    ...i,
    autoFocus: c,
    color: m,
    disabled: y,
    error: h,
    fullWidth: T,
    multiline: L,
    required: J,
    select: X,
    variant: xe
  }, B = S6(Me), Z = Nr(x), ne = R && Z ? `${Z}-helper-text` : void 0, fe = M && Z ? `${Z}-label` : void 0, me = x6[xe], ve = {
    slots: Y,
    slotProps: {
      input: N,
      inputLabel: A,
      htmlInput: z,
      formHelperText: C,
      select: j,
      ...W
    }
  }, he = {}, se = ve.slotProps.inputLabel;
  xe === "outlined" && (se && typeof se.shrink < "u" && (he.notched = se.shrink), he.label = M), X && ((!j || !j.native) && (he.id = void 0), he["aria-describedby"] = void 0);
  const [ue, _e] = pt("root", {
    elementType: C6,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...ve,
      ...Ne
    },
    ownerState: Me,
    className: Te(B.root, p),
    ref: o,
    additionalProps: {
      disabled: y,
      error: h,
      fullWidth: T,
      required: J,
      color: m,
      variant: xe
    }
  }), [Be, $e] = pt("input", {
    elementType: me,
    externalForwardedProps: ve,
    additionalProps: he,
    ownerState: Me
  }), [lt, ye] = pt("inputLabel", {
    elementType: OS,
    externalForwardedProps: ve,
    ownerState: Me
  }), [we, De] = pt("htmlInput", {
    elementType: "input",
    externalForwardedProps: ve,
    ownerState: Me
  }), [Ge, Ce] = pt("formHelperText", {
    elementType: aM,
    externalForwardedProps: ve,
    ownerState: Me
  }), [ge, Xe] = pt("select", {
    elementType: Ps,
    externalForwardedProps: ve,
    ownerState: Me
  }), Ye = /* @__PURE__ */ S.jsx(Be, {
    "aria-describedby": ne,
    autoComplete: s,
    autoFocus: c,
    defaultValue: g,
    fullWidth: T,
    multiline: L,
    name: k,
    rows: te,
    maxRows: D,
    minRows: _,
    type: G,
    value: de,
    id: Z,
    inputRef: O,
    onBlur: F,
    onChange: E,
    onFocus: U,
    placeholder: P,
    inputProps: De,
    slots: {
      input: Y.htmlInput ? we : void 0
    },
    ...$e
  });
  return /* @__PURE__ */ S.jsxs(ue, {
    ..._e,
    children: [M != null && M !== "" && /* @__PURE__ */ S.jsx(lt, {
      htmlFor: Z,
      id: fe,
      ...ye,
      children: M
    }), X ? /* @__PURE__ */ S.jsx(ge, {
      "aria-describedby": ne,
      id: Z,
      labelId: fe,
      value: de,
      input: Ye,
      ...Xe,
      children: d
    }) : Ye, R && /* @__PURE__ */ S.jsx(Ge, {
      id: ne,
      ...Ce,
      children: R
    })]
  });
});
function E6(t) {
  return et("MuiToggleButton", t);
}
const Jo = Ke("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), $S = /* @__PURE__ */ b.createContext({}), LS = /* @__PURE__ */ b.createContext(void 0);
function T6(t, a) {
  return a === void 0 || t === void 0 ? !1 : Array.isArray(a) ? a.includes(t) : t === a;
}
const R6 = (t) => {
  const {
    classes: a,
    fullWidth: o,
    selected: i,
    disabled: s,
    size: c,
    color: d
  } = t, p = {
    root: ["root", i && "selected", s && "disabled", o && "fullWidth", `size${ce(c)}`, d]
  };
  return tt(p, E6, a);
}, w6 = pe(tl, {
  name: "MuiToggleButton",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [a.root, a[`size${ce(o.size)}`]];
  }
})(qe(({
  theme: t
}) => ({
  ...t.typography.button,
  borderRadius: (t.vars || t).shape.borderRadius,
  padding: 11,
  border: `1px solid ${(t.vars || t).palette.divider}`,
  color: (t.vars || t).palette.action.active,
  [`&.${Jo.disabled}`]: {
    color: (t.vars || t).palette.action.disabled,
    border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`
  },
  "&:hover": {
    textDecoration: "none",
    // Reset on mouse devices
    backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : dt(t.palette.text.primary, t.palette.action.hoverOpacity),
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [{
    props: {
      color: "standard"
    },
    style: {
      [`&.${Jo.selected}`]: {
        color: (t.vars || t).palette.text.primary,
        backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : dt(t.palette.text.primary, t.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : dt(t.palette.text.primary, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : dt(t.palette.text.primary, t.palette.action.selectedOpacity)
          }
        }
      }
    }
  }, ...Object.entries(t.palette).filter(wn()).map(([a]) => ({
    props: {
      color: a
    },
    style: {
      [`&.${Jo.selected}`]: {
        color: (t.vars || t).palette[a].main,
        backgroundColor: t.vars ? `rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : dt(t.palette[a].main, t.palette.action.selectedOpacity),
        "&:hover": {
          backgroundColor: t.vars ? `rgba(${t.vars.palette[a].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : dt(t.palette[a].main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: t.vars ? `rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : dt(t.palette[a].main, t.palette.action.selectedOpacity)
          }
        }
      }
    }
  })), {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      padding: 7,
      fontSize: t.typography.pxToRem(13)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 15,
      fontSize: t.typography.pxToRem(15)
    }
  }]
}))), mm = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const {
    value: i,
    ...s
  } = b.useContext($S), c = b.useContext(LS), d = li({
    ...s,
    selected: T6(a.value, i)
  }, a), p = at({
    props: d,
    name: "MuiToggleButton"
  }), {
    children: m,
    className: g,
    color: y = "standard",
    disabled: h = !1,
    disableFocusRipple: C = !1,
    fullWidth: T = !1,
    onChange: R,
    onClick: x,
    selected: A,
    size: z = "medium",
    value: N,
    ...O
  } = p, M = {
    ...p,
    color: y,
    disabled: h,
    disableFocusRipple: C,
    fullWidth: T,
    size: z
  }, D = R6(M), _ = (k) => {
    x && (x(k, N), k.defaultPrevented) || R && R(k, N);
  }, L = c || "";
  return /* @__PURE__ */ S.jsx(w6, {
    className: Te(s.className, D.root, g, L),
    disabled: h,
    focusRipple: !C,
    ref: o,
    onClick: _,
    onChange: R,
    value: N,
    ownerState: M,
    "aria-pressed": A,
    ...O,
    children: m
  });
});
function A6(t) {
  return et("MuiToggleButtonGroup", t);
}
const Ht = Ke("MuiToggleButtonGroup", ["root", "selected", "horizontal", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth", "firstButton", "lastButton", "middleButton"]), O6 = (t) => {
  const {
    classes: a,
    orientation: o,
    fullWidth: i,
    disabled: s
  } = t, c = {
    root: ["root", o, i && "fullWidth"],
    grouped: ["grouped", `grouped${ce(o)}`, s && "disabled"],
    firstButton: ["firstButton"],
    lastButton: ["lastButton"],
    middleButton: ["middleButton"]
  };
  return tt(c, A6, a);
}, M6 = pe("div", {
  name: "MuiToggleButtonGroup",
  slot: "Root",
  overridesResolver: (t, a) => {
    const {
      ownerState: o
    } = t;
    return [{
      [`& .${Ht.grouped}`]: a.grouped
    }, {
      [`& .${Ht.grouped}`]: a[`grouped${ce(o.orientation)}`]
    }, {
      [`& .${Ht.firstButton}`]: a.firstButton
    }, {
      [`& .${Ht.lastButton}`]: a.lastButton
    }, {
      [`& .${Ht.middleButton}`]: a.middleButton
    }, a.root, o.orientation === "vertical" && a.vertical, o.fullWidth && a.fullWidth];
  }
})(qe(({
  theme: t
}) => ({
  display: "inline-flex",
  borderRadius: (t.vars || t).shape.borderRadius,
  variants: [{
    props: {
      orientation: "vertical"
    },
    style: {
      flexDirection: "column",
      [`& .${Ht.grouped}`]: {
        [`&.${Ht.selected} + .${Ht.grouped}.${Ht.selected}`]: {
          borderTop: 0,
          marginTop: 0
        }
      },
      [`& .${Ht.firstButton},& .${Ht.middleButton}`]: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Ht.lastButton},& .${Ht.middleButton}`]: {
        marginTop: -1,
        borderTop: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      },
      [`& .${Ht.lastButton}.${Jo.disabled},& .${Ht.middleButton}.${Jo.disabled}`]: {
        borderTop: "1px solid transparent"
      }
    }
  }, {
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      [`& .${Ht.grouped}`]: {
        [`&.${Ht.selected} + .${Ht.grouped}.${Ht.selected}`]: {
          borderLeft: 0,
          marginLeft: 0
        }
      },
      [`& .${Ht.firstButton},& .${Ht.middleButton}`]: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      [`& .${Ht.lastButton},& .${Ht.middleButton}`]: {
        marginLeft: -1,
        borderLeft: "1px solid transparent",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      [`& .${Ht.lastButton}.${Jo.disabled},& .${Ht.middleButton}.${Jo.disabled}`]: {
        borderLeft: "1px solid transparent"
      }
    }
  }]
}))), z6 = /* @__PURE__ */ b.forwardRef(function(a, o) {
  const i = at({
    props: a,
    name: "MuiToggleButtonGroup"
  }), {
    children: s,
    className: c,
    color: d = "standard",
    disabled: p = !1,
    exclusive: m = !1,
    fullWidth: g = !1,
    onChange: y,
    orientation: h = "horizontal",
    size: C = "medium",
    value: T,
    ...R
  } = i, x = {
    ...i,
    disabled: p,
    fullWidth: g,
    orientation: h,
    size: C
  }, A = O6(x), z = b.useCallback((L, k) => {
    if (!y)
      return;
    const F = T && T.indexOf(k);
    let E;
    T && F >= 0 ? (E = T.slice(), E.splice(F, 1)) : E = T ? T.concat(k) : [k], y(L, E);
  }, [y, T]), N = b.useCallback((L, k) => {
    y && y(L, T === k ? null : k);
  }, [y, T]), O = b.useMemo(() => ({
    className: A.grouped,
    onChange: m ? N : z,
    value: T,
    size: C,
    fullWidth: g,
    color: d,
    disabled: p
  }), [A.grouped, m, N, z, T, C, g, d, p]), M = TR(s), D = M.length, _ = (L) => {
    const k = L === 0, F = L === D - 1;
    return k && F ? "" : k ? A.firstButton : F ? A.lastButton : A.middleButton;
  };
  return /* @__PURE__ */ S.jsx(M6, {
    role: "group",
    className: Te(A.root, c),
    ref: o,
    ownerState: x,
    ...R,
    children: /* @__PURE__ */ S.jsx($S.Provider, {
      value: O,
      children: M.map((L, k) => /* @__PURE__ */ S.jsx(LS.Provider, {
        value: _(k),
        children: L
      }, k))
    })
  });
}), di = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49s7.12-1.9 16.57-4.43c.81-.23 1.28-1.05 1.07-1.85"
}), "FlightTakeoff"), D6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "m15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7z"
}), "ConnectingAirports"), N6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z"
}), "SwapHoriz"), _S = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M2.5 19h19v2h-19zm16.84-3.15c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17z"
}), "FlightLand"), B6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search"), j6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), mo = [
  // US & Americas
  { code: "JFK", city: "New York", name: "John F. Kennedy Intl", country: "United States", lat: 40.6413, lon: -73.7781, aliases: ["nyc", "new york", "newyork", "manhattan", "queens"] },
  { code: "EWR", city: "New York", name: "Newark Liberty Intl", country: "United States", lat: 40.6895, lon: -74.1745, aliases: ["newark", "new jersey", "nj"] },
  { code: "LGA", city: "New York", name: "LaGuardia", country: "United States", lat: 40.7769, lon: -73.874, aliases: ["laguardia"] },
  { code: "SFO", city: "San Francisco", name: "San Francisco Intl", country: "United States", lat: 37.6213, lon: -122.379, aliases: ["sf", "san francisco", "bay area", "silicon valley"] },
  { code: "LAX", city: "Los Angeles", name: "Los Angeles Intl", country: "United States", lat: 33.9416, lon: -118.4085, aliases: ["la", "los angeles", "hollywood", "california"] },
  { code: "ORD", city: "Chicago", name: "O'Hare Intl", country: "United States", lat: 41.9742, lon: -87.9073, aliases: ["chicago", "ohare", "illinois"] },
  { code: "MIA", city: "Miami", name: "Miami Intl", country: "United States", lat: 25.7959, lon: -80.287, aliases: ["miami", "florida", "south beach"] },
  { code: "SEA", city: "Seattle", name: "Seattle-Tacoma Intl", country: "United States", lat: 47.4502, lon: -122.3088, aliases: ["seattle", "tacoma", "washington"] },
  { code: "BOS", city: "Boston", name: "Logan Intl", country: "United States", lat: 42.3656, lon: -71.0096, aliases: ["boston", "logan", "massachusetts"] },
  { code: "LAS", city: "Las Vegas", name: "Harry Reid Intl", country: "United States", lat: 36.084, lon: -115.1537, aliases: ["las vegas", "vegas", "nevada"] },
  { code: "YYZ", city: "Toronto", name: "Toronto Pearson Intl", country: "Canada", lat: 43.6777, lon: -79.6248, aliases: ["toronto", "pearson", "ontario"] },
  { code: "YVR", city: "Vancouver", name: "Vancouver Intl", country: "Canada", lat: 49.1967, lon: -123.1815, aliases: ["vancouver", "bc"] },
  // UK & Europe
  { code: "LHR", city: "London", name: "Heathrow", country: "United Kingdom", lat: 51.47, lon: -0.4543, aliases: ["london", "lon", "heathrow", "england", "uk", "britain"] },
  { code: "LGW", city: "London", name: "Gatwick", country: "United Kingdom", lat: 51.1537, lon: -0.1821, aliases: ["gatwick"] },
  { code: "CDG", city: "Paris", name: "Charles de Gaulle", country: "France", lat: 49.0097, lon: 2.5479, aliases: ["paris", "cdg", "france"] },
  { code: "FRA", city: "Frankfurt", name: "Frankfurt Airport", country: "Germany", lat: 50.0379, lon: 8.5622, aliases: ["frankfurt", "germany"] },
  { code: "BER", city: "Berlin", name: "Berlin Brandenburg", country: "Germany", lat: 52.3667, lon: 13.5033, aliases: ["berlin"] },
  { code: "AMS", city: "Amsterdam", name: "Schiphol", country: "Netherlands", lat: 52.3105, lon: 4.7683, aliases: ["amsterdam", "schiphol", "holland"] },
  { code: "FCO", city: "Rome", name: "Leonardo da Vinci-Fiumicino", country: "Italy", lat: 41.8003, lon: 12.2389, aliases: ["rome", "roma", "fiumicino", "italy"] },
  { code: "BCN", city: "Barcelona", name: "Josep Tarradellas Barcelona-El Prat", country: "Spain", lat: 41.2974, lon: 2.0833, aliases: ["barcelona", "el prat", "spain"] },
  { code: "MAD", city: "Madrid", name: "Adolfo Suárez Madrid-Barajas", country: "Spain", lat: 40.4839, lon: -3.568, aliases: ["madrid", "barajas"] },
  { code: "ZRH", city: "Zurich", name: "Zurich Airport", country: "Switzerland", lat: 47.4582, lon: 8.5555, aliases: ["zurich", "switzerland", "swiss"] },
  { code: "IST", city: "Istanbul", name: "Istanbul Airport", country: "Turkey", lat: 41.2753, lon: 28.7519, aliases: ["istanbul", "turkey"] },
  // India & South Asia
  { code: "DEL", city: "New Delhi", name: "Indira Gandhi Intl", country: "India", lat: 28.5562, lon: 77.1, aliases: ["delhi", "new delhi", "del", "ncr", "gurgaon", "noida"] },
  { code: "BOM", city: "Mumbai", name: "Chhatrapati Shivaji Maharaj Intl", country: "India", lat: 19.0896, lon: 72.8656, aliases: ["mumbai", "bombay", "bom", "maharashtra"] },
  { code: "BLR", city: "Bengaluru", name: "Kempegowda Intl", country: "India", lat: 13.1986, lon: 77.7066, aliases: ["bangalore", "bengaluru", "blr", "karnataka"] },
  { code: "MAA", city: "Chennai", name: "Chennai Intl", country: "India", lat: 12.9941, lon: 80.1709, aliases: ["chennai", "madras", "maa", "tamil nadu"] },
  { code: "CCU", city: "Kolkata", name: "Netaji Subhash Chandra Bose Intl", country: "India", lat: 22.6547, lon: 88.4467, aliases: ["kolkata", "calcutta", "ccu", "west bengal"] },
  { code: "HYD", city: "Hyderabad", name: "Rajiv Gandhi Intl", country: "India", lat: 17.2403, lon: 78.4294, aliases: ["hyderabad", "hyd", "telangana"] },
  { code: "GOI", city: "Goa", name: "Dabolim Airport", country: "India", lat: 15.3808, lon: 73.8314, aliases: ["goa", "dabolim", "panaji"] },
  { code: "GOX", city: "Goa", name: "Manohar Intl (Mopa)", country: "India", lat: 15.7719, lon: 73.8683, aliases: ["mopa", "north goa"] },
  { code: "COK", city: "Kochi", name: "Cochin Intl", country: "India", lat: 10.1518, lon: 76.4019, aliases: ["kochi", "cochin", "kerala"] },
  { code: "AMD", city: "Ahmedabad", name: "Sardar Vallabhbhai Patel Intl", country: "India", lat: 23.0772, lon: 72.6347, aliases: ["ahmedabad", "gujarat"] },
  // Middle East
  { code: "DXB", city: "Dubai", name: "Dubai Intl", country: "United Arab Emirates", lat: 25.2532, lon: 55.3657, aliases: ["dubai", "dxb", "uae", "emirates"] },
  { code: "AUH", city: "Abu Dhabi", name: "Zayed Intl", country: "United Arab Emirates", lat: 24.433, lon: 54.6511, aliases: ["abu dhabi", "auh"] },
  { code: "DOH", city: "Doha", name: "Hamad Intl", country: "Qatar", lat: 25.2731, lon: 51.6081, aliases: ["doha", "qatar", "doh"] },
  // Asia Pacific
  { code: "SIN", city: "Singapore", name: "Singapore Changi", country: "Singapore", lat: 1.3644, lon: 103.9915, aliases: ["singapore", "changi", "sin"] },
  { code: "BKK", city: "Bangkok", name: "Suvarnabhumi", country: "Thailand", lat: 13.69, lon: 100.7501, aliases: ["bangkok", "suvarnabhumi", "thailand", "bkk"] },
  { code: "HND", city: "Tokyo", name: "Tokyo Haneda", country: "Japan", lat: 35.5494, lon: 139.7798, aliases: ["tokyo", "haneda", "japan", "tyo"] },
  { code: "NRT", city: "Tokyo", name: "Narita Intl", country: "Japan", lat: 35.772, lon: 140.3929, aliases: ["narita"] },
  { code: "HKG", city: "Hong Kong", name: "Hong Kong Intl", country: "Hong Kong", lat: 22.308, lon: 113.9185, aliases: ["hong kong", "hkg", "hongkong"] },
  { code: "ICN", city: "Seoul", name: "Incheon Intl", country: "South Korea", lat: 37.4602, lon: 126.4407, aliases: ["seoul", "incheon", "korea", "icn"] },
  { code: "SYD", city: "Sydney", name: "Sydney Kingsford Smith", country: "Australia", lat: -33.9399, lon: 151.1753, aliases: ["sydney", "australia", "syd"] },
  { code: "MEL", city: "Melbourne", name: "Melbourne Airport", country: "Australia", lat: -37.669, lon: 144.841, aliases: ["melbourne", "mel"] }
];
function In(t) {
  if (!t || typeof t != "string") return null;
  const a = t.trim().toLowerCase();
  if (!a) return null;
  const o = mo.find((m) => m.code.toLowerCase() === a);
  if (o) return o;
  const i = mo.find((m) => m.city.toLowerCase() === a);
  if (i) return i;
  const s = mo.find((m) => m.aliases.some((g) => g.toLowerCase() === a));
  if (s) return s;
  const c = mo.find(
    (m) => m.city.toLowerCase().includes(a) || m.name.toLowerCase().includes(a) || m.aliases.some((g) => g.toLowerCase().includes(a))
  );
  if (c) return c;
  const d = a.replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase() || "DST", p = a.charAt(0).toUpperCase() + a.slice(1);
  return {
    code: d.padEnd(3, "X"),
    city: p,
    name: `${p} Airport`,
    country: "International",
    lat: 30 + d.charCodeAt(0) % 20,
    lon: 10 + d.charCodeAt(1) % 60,
    aliases: [a]
  };
}
function $6(t, a, o, i) {
  const c = (o - t) * Math.PI / 180, d = (i - a) * Math.PI / 180, p = Math.sin(c / 2) * Math.sin(c / 2) + Math.cos(t * Math.PI / 180) * Math.cos(o * Math.PI / 180) * Math.sin(d / 2) * Math.sin(d / 2), m = 2 * Math.atan2(Math.sqrt(p), Math.sqrt(1 - p));
  return Math.round(6371 * m);
}
const L6 = [
  { label: "NYC ⇄ London", from: "JFK", to: "LHR" },
  { label: "Delhi ⇄ Mumbai", from: "DEL", to: "BOM" },
  { label: "SFO ⇄ Tokyo", from: "SFO", to: "HND" },
  { label: "Dubai ⇄ Singapore", from: "DXB", to: "SIN" },
  { label: "Paris ⇄ Rome", from: "CDG", to: "FCO" }
];
function _6({
  origin: t,
  destination: a,
  onSearch: o,
  cabinClass: i,
  onCabinClassChange: s,
  isSidebar: c = !1
}) {
  const [d, p] = b.useState(t), [m, g] = b.useState(a), [y, h] = b.useState(() => {
    const x = /* @__PURE__ */ new Date();
    return x.setDate(x.getDate() + 7), x.toISOString().split("T")[0];
  }), C = () => {
    const x = d;
    p(m), g(x), m && x && o(m, x, y, i);
  }, T = () => {
    d && m && o(d, m, y, i);
  }, R = (x) => {
    const A = mo.find((N) => N.code === x.from) || d, z = mo.find((N) => N.code === x.to) || m;
    p(A), g(z), o(A, z, y, i);
  };
  return /* @__PURE__ */ S.jsxs(
    be,
    {
      sx: {
        backgroundColor: "#ffffff",
        borderRadius: 3,
        p: { xs: 2, sm: 2.5 },
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        border: "1px solid rgba(0, 0, 0, 0.08)",
        mb: 2.5
      },
      children: [
        /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, flexWrap: "wrap", gap: 1 }, children: [
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ S.jsx(
              be,
              {
                sx: {
                  backgroundColor: "#1E40AF",
                  color: "#fff",
                  borderRadius: 2,
                  p: 0.75,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: /* @__PURE__ */ S.jsx(di, { fontSize: "small" })
              }
            ),
            /* @__PURE__ */ S.jsx(Ae, { variant: "h6", sx: { fontWeight: 700, color: "#0F172A", fontSize: { xs: "1.1rem", sm: "1.25rem" } }, children: "Find & Compare Flights" })
          ] }),
          /* @__PURE__ */ S.jsxs(Qc, { size: "small", sx: { minWidth: 120 }, children: [
            /* @__PURE__ */ S.jsx(OS, { id: "cabin-class-label", children: "Class" }),
            /* @__PURE__ */ S.jsxs(
              Ps,
              {
                labelId: "cabin-class-label",
                value: i,
                label: "Class",
                onChange: (x) => {
                  s(x.target.value), d && m && o(d, m, y, x.target.value);
                },
                sx: { borderRadius: 2 },
                children: [
                  /* @__PURE__ */ S.jsx(ba, { value: "Economy", children: "Economy" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "Business", children: "Business" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "First", children: "First Class" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs(
          be,
          {
            sx: {
              display: "grid",
              gridTemplateColumns: c ? "1fr" : { xs: "1fr", md: "1.8fr auto 1.8fr 1.2fr auto" },
              gap: 1.5,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ S.jsx(
                C1,
                {
                  value: d,
                  onChange: (x, A) => p(A),
                  options: mo,
                  getOptionLabel: (x) => `${x.city} (${x.code}) - ${x.name}`,
                  renderInput: (x) => /* @__PURE__ */ S.jsx(
                    Bs,
                    {
                      ...x,
                      label: "From (Origin)",
                      placeholder: "City or Airport",
                      size: "small",
                      InputProps: {
                        ...x.InputProps,
                        startAdornment: /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
                          /* @__PURE__ */ S.jsx(di, { sx: { color: "#64748B", mr: 1, fontSize: 20 } }),
                          x.InputProps.startAdornment
                        ] })
                      }
                    }
                  ),
                  sx: { minWidth: 180 }
                }
              ),
              /* @__PURE__ */ S.jsx(be, { sx: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ S.jsx(
                Ws,
                {
                  onClick: C,
                  sx: {
                    backgroundColor: "#F1F5F9",
                    "&:hover": { backgroundColor: "#E2E8F0" },
                    border: "1px solid #CBD5E1",
                    width: 38,
                    height: 38
                  },
                  title: "Swap Origin and Destination",
                  children: /* @__PURE__ */ S.jsx(N6, { sx: { color: "#1E40AF", fontSize: 20 } })
                }
              ) }),
              /* @__PURE__ */ S.jsx(
                C1,
                {
                  value: m,
                  onChange: (x, A) => g(A),
                  options: mo,
                  getOptionLabel: (x) => `${x.city} (${x.code}) - ${x.name}`,
                  renderInput: (x) => /* @__PURE__ */ S.jsx(
                    Bs,
                    {
                      ...x,
                      label: "To (Destination)",
                      placeholder: "City or Airport",
                      size: "small",
                      InputProps: {
                        ...x.InputProps,
                        startAdornment: /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
                          /* @__PURE__ */ S.jsx(_S, { sx: { color: "#64748B", mr: 1, fontSize: 20 } }),
                          x.InputProps.startAdornment
                        ] })
                      }
                    }
                  ),
                  sx: { minWidth: 180 }
                }
              ),
              /* @__PURE__ */ S.jsx(
                Bs,
                {
                  type: "date",
                  size: "small",
                  label: "Departure Date",
                  value: y,
                  onChange: (x) => h(x.target.value),
                  InputLabelProps: { shrink: !0 },
                  InputProps: {
                    startAdornment: /* @__PURE__ */ S.jsx(j6, { sx: { color: "#64748B", mr: 1, fontSize: 18 } })
                  }
                }
              ),
              /* @__PURE__ */ S.jsx(
                _a,
                {
                  variant: "contained",
                  onClick: T,
                  startIcon: /* @__PURE__ */ S.jsx(B6, {}),
                  sx: {
                    backgroundColor: "#1E40AF",
                    color: "#fff",
                    fontWeight: 600,
                    py: 1,
                    px: 3,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "0.95rem",
                    "&:hover": { backgroundColor: "#1D4ED8" }
                  },
                  children: "Search"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(be, { sx: { mt: 2, display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 }, children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B", fontWeight: 600, mr: 0.5 }, children: "Popular Routes:" }),
          L6.map((x) => /* @__PURE__ */ S.jsx(
            fi,
            {
              label: x.label,
              size: "small",
              clickable: !0,
              onClick: () => R(x),
              sx: {
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                fontWeight: 500,
                fontSize: "0.78rem",
                "&:hover": {
                  backgroundColor: "#EFF6FF",
                  borderColor: "#93C5FD",
                  color: "#1D4ED8"
                }
              }
            },
            x.label
          ))
        ] })
      ]
    }
  );
}
const k6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4"
}), "AttachMoney"), H6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83"
}), "Speed"), U6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
}), "Star"), I6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M16 17.01V10h-2v7.01h-3L15 21l4-3.99zM9 3 5 6.99h3V14h2V6.99h3z"
}), "SwapVert"), P6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"
}), "FilterAlt");
function F6({
  sortMode: t,
  onSortChange: a,
  stopsFilter: o,
  onStopsFilterChange: i,
  selectedAirline: s,
  onAirlineChange: c,
  availableAirlines: d = [],
  cheapestPrice: p = null,
  fastestDuration: m = null,
  currency: g = "$",
  totalCount: y = 0
}) {
  return /* @__PURE__ */ S.jsxs(be, { sx: { mb: 2.5 }, children: [
    /* @__PURE__ */ S.jsxs(
      be,
      {
        sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "center" },
          gap: 1.5,
          mb: 2
        },
        children: [
          /* @__PURE__ */ S.jsxs(
            z6,
            {
              value: ["cheapest", "fastest", "best"].includes(t) ? t : null,
              exclusive: !0,
              onChange: (h, C) => {
                C && a(C);
              },
              "aria-label": "flight quick sort",
              sx: {
                display: "flex",
                width: { xs: "100%", md: "auto" },
                backgroundColor: "#ffffff",
                borderRadius: 2.5,
                border: "1px solid #E2E8F0",
                overflow: "hidden",
                "& .MuiToggleButton-root": {
                  flex: 1,
                  py: 1,
                  px: { xs: 1.5, sm: 2.5 },
                  border: "none",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  color: "#475569",
                  transition: "all 0.2s ease",
                  "&.Mui-selected": {
                    backgroundColor: "#EFF6FF",
                    color: "#1D4ED8",
                    fontWeight: 700,
                    borderBottom: "3px solid #1D4ED8"
                  },
                  "&:hover": {
                    backgroundColor: "#F8FAFC"
                  }
                }
              },
              children: [
                /* @__PURE__ */ S.jsx(mm, { value: "cheapest", "aria-label": "cheapest flights", children: /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
                  /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
                    /* @__PURE__ */ S.jsx(k6, { fontSize: "small", sx: { color: "#10B981" } }),
                    /* @__PURE__ */ S.jsx("span", { children: "Cheapest" })
                  ] }),
                  p !== null && /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#10B981", fontWeight: 700, fontSize: "0.75rem" }, children: [
                    "from ",
                    g,
                    p
                  ] })
                ] }) }),
                /* @__PURE__ */ S.jsx(mm, { value: "fastest", "aria-label": "fastest flights", children: /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
                  /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
                    /* @__PURE__ */ S.jsx(H6, { fontSize: "small", sx: { color: "#F59E0B" } }),
                    /* @__PURE__ */ S.jsx("span", { children: "Fastest" })
                  ] }),
                  m && /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#F59E0B", fontWeight: 700, fontSize: "0.75rem" }, children: m })
                ] }) }),
                /* @__PURE__ */ S.jsx(mm, { value: "best", "aria-label": "best value flights", children: /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
                  /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
                    /* @__PURE__ */ S.jsx(U6, { fontSize: "small", sx: { color: "#8B5CF6" } }),
                    /* @__PURE__ */ S.jsx("span", { children: "Best Value" })
                  ] }),
                  /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B", fontSize: "0.75rem" }, children: "Balanced" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1.5 }, children: [
            /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { color: "#64748B", fontWeight: 500, display: { xs: "none", sm: "block" } }, children: [
              "Showing ",
              /* @__PURE__ */ S.jsx("strong", { children: y }),
              " flights"
            ] }),
            /* @__PURE__ */ S.jsx(Qc, { size: "small", sx: { minWidth: 200 }, children: /* @__PURE__ */ S.jsxs(
              Ps,
              {
                value: t,
                onChange: (h) => a(h.target.value),
                displayEmpty: !0,
                startAdornment: /* @__PURE__ */ S.jsx(I6, { fontSize: "small", sx: { color: "#64748B", mr: 1 } }),
                sx: {
                  borderRadius: 2,
                  backgroundColor: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.85rem"
                },
                children: [
                  /* @__PURE__ */ S.jsx(ba, { value: "cheapest", children: "Price: Low to High (Cheapest)" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "price_desc", children: "Price: High to Low" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "fastest", children: "Duration: Shortest to Longest" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "duration_desc", children: "Duration: Longest to Shortest" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "best", children: "Best Value (Score)" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "earliest", children: "Departure: Earliest first" }),
                  /* @__PURE__ */ S.jsx(ba, { value: "latest", children: "Departure: Latest first" })
                ]
              }
            ) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ S.jsxs(
      be,
      {
        sx: {
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 1.5,
          p: 1.5,
          backgroundColor: "#F8FAFC",
          borderRadius: 2,
          border: "1px solid #E2E8F0"
        },
        children: [
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5, color: "#475569" }, children: [
            /* @__PURE__ */ S.jsx(P6, { fontSize: "small", sx: { color: "#64748B" } }),
            /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }, children: "Filters:" })
          ] }),
          /* @__PURE__ */ S.jsx(be, { sx: { display: "flex", gap: 0.75 }, children: [
            { label: "All Stops", value: "all" },
            { label: "Non-stop Only", value: "0" },
            { label: "1 Stop Max", value: "1" }
          ].map((h) => /* @__PURE__ */ S.jsx(
            fi,
            {
              label: h.label,
              size: "small",
              clickable: !0,
              color: o === h.value ? "primary" : "default",
              variant: o === h.value ? "filled" : "outlined",
              onClick: () => i(h.value),
              sx: {
                fontWeight: 600,
                fontSize: "0.75rem",
                backgroundColor: o === h.value ? "#1E40AF" : "#ffffff"
              }
            },
            h.value
          )) }),
          d.length > 0 && /* @__PURE__ */ S.jsx(Qc, { size: "small", sx: { minWidth: 150, ml: { sm: "auto" } }, children: /* @__PURE__ */ S.jsxs(
            Ps,
            {
              value: s,
              onChange: (h) => c(h.target.value),
              displayEmpty: !0,
              sx: { height: 32, fontSize: "0.78rem", backgroundColor: "#ffffff", borderRadius: 1.5 },
              children: [
                /* @__PURE__ */ S.jsx(ba, { value: "all", children: "All Airlines" }),
                d.map((h) => /* @__PURE__ */ S.jsx(ba, { value: h, sx: { fontSize: "0.8rem" }, children: h }, h))
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
const V6 = Et([/* @__PURE__ */ S.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}, "0"), /* @__PURE__ */ S.jsx("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
}, "1")], "AccessTime"), F1 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M17 6h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M9.5 18H8V9h1.5zm3.25 0h-1.5V9h1.5zm.75-12h-3V3.5h3zM16 18h-1.5V9H16z"
}), "Luggage"), q6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0m-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13"
}), "Wifi"), G6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99"
}), "Power"), Y6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4"
}), "Restaurant"), X6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M12 3c-4.8 0-9 3.86-9 9 0 2.12.74 4.07 1.97 5.61L3 19.59 4.41 21l1.97-1.97C7.93 20.26 9.88 21 12 21c2.3 0 4.61-.88 6.36-2.64C20.12 16.61 21 14.3 21 12V3zm3.83 9.26-5.16 4.63c-.16.15-.41.14-.56-.01-.14-.14-.16-.36-.04-.52l2.44-3.33-4.05-.4c-.44-.04-.63-.59-.3-.89l5.16-4.63c.16-.15.41-.14.56.01.14.14.16.36.04.52l-2.44 3.33 4.05.4c.45.04.63.59.3.89"
}), "EnergySavingsLeaf"), K6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle"), W6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore"), Q6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
}), "ExpandLess");
function Z6({ flight: t, onSelect: a, isSidebar: o = !1 }) {
  const [i, s] = b.useState(!1);
  return /* @__PURE__ */ S.jsxs(
    be,
    {
      sx: {
        backgroundColor: "#ffffff",
        borderRadius: 3,
        border: "1px solid #E2E8F0",
        p: { xs: 2, sm: 2.5 },
        mb: 2,
        transition: "all 0.2s ease",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(30, 64, 175, 0.12)",
          borderColor: "#93C5FD"
        }
      },
      children: [
        /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, flexWrap: "wrap", gap: 1 }, children: [
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ S.jsx(
              be,
              {
                sx: {
                  width: 42,
                  height: 42,
                  borderRadius: 2,
                  backgroundColor: t.airlineBg || "#EFF6FF",
                  color: t.airlineColor || "#1E40AF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  border: `1.5px solid ${t.airlineColor}30`
                },
                children: t.airlineCode
              }
            ),
            /* @__PURE__ */ S.jsxs(be, { children: [
              /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                /* @__PURE__ */ S.jsx(Ae, { variant: "subtitle1", sx: { fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }, children: t.airline }),
                /* @__PURE__ */ S.jsx(
                  fi,
                  {
                    label: t.flightNumber,
                    size: "small",
                    sx: {
                      height: 20,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      backgroundColor: "#F1F5F9",
                      color: "#475569"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#64748B", display: "flex", alignItems: "center", gap: 0.5, mt: 0.25 }, children: [
                /* @__PURE__ */ S.jsx("span", { children: t.aircraft }),
                /* @__PURE__ */ S.jsx("span", { children: "•" }),
                /* @__PURE__ */ S.jsx("span", { style: { color: "#10B981", fontWeight: 600 }, children: t.onTimeRate })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            t.seatsLeft <= 3 && /* @__PURE__ */ S.jsx(
              fi,
              {
                label: `Only ${t.seatsLeft} seats left`,
                size: "small",
                sx: {
                  backgroundColor: "#FEF2F2",
                  color: "#DC2626",
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  border: "1px solid #FECACA"
                }
              }
            ),
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
              /* @__PURE__ */ S.jsx(s6, { value: t.rating, precision: 0.1, size: "small", readOnly: !0, sx: { fontSize: "0.85rem" } }),
              /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 700, color: "#334155" }, children: t.rating })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs(
          be,
          {
            sx: {
              display: "grid",
              gridTemplateColumns: o ? "1fr" : { xs: "1fr", md: "1fr auto 1fr auto" },
              alignItems: "center",
              gap: { xs: 2, md: 3 },
              py: 1
            },
            children: [
              /* @__PURE__ */ S.jsxs(be, { children: [
                /* @__PURE__ */ S.jsx(Ae, { variant: "h5", sx: { fontWeight: 800, color: "#0F172A", letterSpacing: "-0.5px" }, children: t.departureTime }),
                /* @__PURE__ */ S.jsx(Ae, { variant: "body2", sx: { fontWeight: 700, color: "#1E40AF" }, children: t.origin.code }),
                /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B", display: "block" }, children: t.origin.city })
              ] }),
              /* @__PURE__ */ S.jsxs(be, { sx: { textAlign: "center", minWidth: { xs: "100%", md: 170 } }, children: [
                /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5, mb: 0.5 }, children: [
                  /* @__PURE__ */ S.jsx(V6, { sx: { fontSize: 15, color: "#64748B" } }),
                  /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 700, color: "#334155", fontSize: "0.82rem" }, children: t.durationFormatted })
                ] }),
                /* @__PURE__ */ S.jsxs(be, { sx: { position: "relative", display: "flex", alignItems: "center", my: 0.75 }, children: [
                  /* @__PURE__ */ S.jsx(
                    be,
                    {
                      sx: {
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#1E40AF",
                        zIndex: 1
                      }
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    be,
                    {
                      sx: {
                        flex: 1,
                        height: 2,
                        backgroundColor: t.stops === 0 ? "#3B82F6" : "#F59E0B",
                        mx: 0.5,
                        position: "relative"
                      },
                      children: t.stops > 0 && /* @__PURE__ */ S.jsx(
                        be,
                        {
                          sx: {
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            backgroundColor: "#F59E0B",
                            position: "absolute",
                            top: -2.5,
                            left: "50%",
                            transform: "translateX(-50%)",
                            border: "1px solid #ffffff"
                          },
                          title: t.layoverCity || "Layover"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ S.jsx(di, { sx: { fontSize: 16, color: "#1E40AF", transform: "rotate(45deg)", zIndex: 1 } })
                ] }),
                t.stops === 0 ? /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#059669", fontWeight: 700, fontSize: "0.75rem" }, children: "Non-stop" }) : /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#D97706", fontWeight: 600, fontSize: "0.75rem" }, children: [
                  "1 stop ",
                  t.layoverCity ? `(${t.layoverCity.split(" ")[0]})` : ""
                ] })
              ] }),
              /* @__PURE__ */ S.jsxs(be, { sx: { textAlign: { xs: "left", md: "right" } }, children: [
                /* @__PURE__ */ S.jsx(Ae, { variant: "h5", sx: { fontWeight: 800, color: "#0F172A", letterSpacing: "-0.5px" }, children: t.arrivalTime }),
                /* @__PURE__ */ S.jsx(Ae, { variant: "body2", sx: { fontWeight: 700, color: "#1E40AF" }, children: t.destination.code }),
                /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B", display: "block" }, children: t.destination.city })
              ] }),
              /* @__PURE__ */ S.jsxs(
                be,
                {
                  sx: {
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                    justifyContent: { xs: "space-between", md: "center" },
                    alignItems: { xs: "center", md: "flex-end" },
                    borderLeft: { md: "1px solid #F1F5F9" },
                    pl: { md: 3 },
                    pt: { xs: 1.5, md: 0 },
                    borderTop: { xs: "1px solid #F1F5F9", md: "none" }
                  },
                  children: [
                    /* @__PURE__ */ S.jsxs(be, { sx: { textAlign: { xs: "left", md: "right" }, mb: { md: 1 } }, children: [
                      /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B", display: "block", fontSize: "0.75rem" }, children: "Total price" }),
                      /* @__PURE__ */ S.jsxs(Ae, { variant: "h5", sx: { fontWeight: 800, color: "#1E40AF", letterSpacing: "-0.5px", lineHeight: 1.1 }, children: [
                        t.currency,
                        t.price
                      ] }),
                      /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#94A3B8", fontSize: "0.7rem" }, children: [
                        t.cabinClass,
                        " • per person"
                      ] })
                    ] }),
                    /* @__PURE__ */ S.jsx(
                      _a,
                      {
                        variant: "contained",
                        onClick: () => a(t),
                        sx: {
                          backgroundColor: "#1E40AF",
                          color: "#ffffff",
                          fontWeight: 700,
                          borderRadius: 2,
                          px: 2.5,
                          py: 0.85,
                          textTransform: "none",
                          fontSize: "0.88rem",
                          "&:hover": {
                            backgroundColor: "#1D4ED8"
                          }
                        },
                        children: "Select Flight"
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(be, { sx: { mt: 1.5, display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #F8FAFC", pt: 1 }, children: [
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1.5, color: "#64748B", fontSize: "0.75rem" }, children: [
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
              /* @__PURE__ */ S.jsx(F1, { sx: { fontSize: 15 } }),
              /* @__PURE__ */ S.jsx("span", { children: "Included baggage" })
            ] }),
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
              /* @__PURE__ */ S.jsx(X6, { sx: { fontSize: 15, color: "#10B981" } }),
              /* @__PURE__ */ S.jsx("span", { style: { color: "#047857", fontWeight: 600 }, children: t.emissions })
            ] })
          ] }),
          /* @__PURE__ */ S.jsx(
            _a,
            {
              size: "small",
              onClick: () => s(!i),
              endIcon: i ? /* @__PURE__ */ S.jsx(Q6, {}) : /* @__PURE__ */ S.jsx(W6, {}),
              sx: {
                textTransform: "none",
                fontSize: "0.75rem",
                color: "#1E40AF",
                fontWeight: 600,
                p: 0
              },
              children: i ? "Hide details" : "Flight details"
            }
          )
        ] }),
        /* @__PURE__ */ S.jsx($m, { in: i, timeout: "auto", unmountOnExit: !0, children: /* @__PURE__ */ S.jsxs(be, { sx: { mt: 2, pt: 2, borderTop: "1px dashed #E2E8F0", backgroundColor: "#F8FAFC", p: 2, borderRadius: 2 }, children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "subtitle2", sx: { fontWeight: 700, color: "#0F172A", mb: 1 }, children: "Itinerary Breakdown" }),
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", gap: 1.5 }, children: [
              /* @__PURE__ */ S.jsx(di, { sx: { color: "#1E40AF", fontSize: 20, mt: 0.25 } }),
              /* @__PURE__ */ S.jsxs(be, { children: [
                /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { fontWeight: 700, color: "#1E293B" }, children: [
                  t.departureTime,
                  " — ",
                  t.origin.name,
                  " (",
                  t.origin.code,
                  ")"
                ] }),
                /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B" }, children: "Terminal 2, Gate B12 • Check-in starts 3h before departure" })
              ] })
            ] }),
            /* @__PURE__ */ S.jsxs(be, { sx: { pl: 4, py: 0.5, borderLeft: "2px solid #CBD5E1", ml: 1.25 }, children: [
              /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#475569", display: "block", fontWeight: 600 }, children: [
                "Flight duration: ",
                t.durationFormatted,
                " • ",
                t.aircraft
              ] }),
              t.stops > 0 && t.layoverCity && /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#D97706", display: "block", fontWeight: 700, mt: 0.5 }, children: [
                "⚠️ Layover at ",
                t.layoverCity,
                " (",
                t.layoverFormatted || "1h 30m",
                ")"
              ] })
            ] }),
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", gap: 1.5 }, children: [
              /* @__PURE__ */ S.jsx(_S, { sx: { color: "#1E40AF", fontSize: 20, mt: 0.25 } }),
              /* @__PURE__ */ S.jsxs(be, { children: [
                /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { fontWeight: 700, color: "#1E293B" }, children: [
                  t.arrivalTime,
                  " — ",
                  t.destination.name,
                  " (",
                  t.destination.code,
                  ")"
                ] }),
                /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B" }, children: "Terminal 3, Baggage Claim Carousels 4-6" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ S.jsx(Is, { sx: { my: 1.5 } }),
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }, children: [
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.75, color: "#334155" }, children: [
              /* @__PURE__ */ S.jsx(F1, { sx: { fontSize: 17, color: "#64748B" } }),
              /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 600 }, children: t.baggage })
            ] }),
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.75, color: "#334155" }, children: [
              /* @__PURE__ */ S.jsx(q6, { sx: { fontSize: 17, color: "#64748B" } }),
              /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 600 }, children: "High-speed Wi-Fi" })
            ] }),
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.75, color: "#334155" }, children: [
              /* @__PURE__ */ S.jsx(G6, { sx: { fontSize: 17, color: "#64748B" } }),
              /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 600 }, children: "USB & AC in-seat power" })
            ] }),
            /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.75, color: "#334155" }, children: [
              /* @__PURE__ */ S.jsx(Y6, { sx: { fontSize: 17, color: "#64748B" } }),
              /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 600 }, children: "Complimentary meal & beverages" })
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
const kS = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), J6 = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M20.19 4H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.81-2-1.81-2m-2.46 9.3-8.86 2.36-1.66-2.88.93-.25 1.26.99 2.39-.64-2.4-4.16 1.4-.38 4.01 3.74 2.44-.65c.51-.14 1.04.17 1.18.68.13.51-.17 1.04-.69 1.19"
}), "AirplaneTicket");
function ez({ flight: t, open: a, onClose: o }) {
  const [i, s] = b.useState(!1), [c, d] = b.useState("Alex Morgan"), [p, m] = b.useState("alex.morgan@example.com");
  if (!t) return null;
  const g = Math.round(t.price * 0.82), y = t.price - g, h = () => {
    s(!0);
  }, C = () => {
    s(!1), o();
  };
  return /* @__PURE__ */ S.jsxs(g3, { open: a, onClose: C, maxWidth: "sm", fullWidth: !0, PaperProps: { sx: { borderRadius: 3, p: 1 } }, children: [
    /* @__PURE__ */ S.jsxs(M3, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", pb: 1 }, children: [
      /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ S.jsx(J6, { sx: { color: "#1E40AF" } }),
        /* @__PURE__ */ S.jsx(Ae, { variant: "h6", sx: { fontWeight: 800 }, children: i ? "Booking Confirmed!" : "Flight Itinerary & Booking" })
      ] }),
      /* @__PURE__ */ S.jsx(Ws, { onClick: C, size: "small", children: /* @__PURE__ */ S.jsx(kS, {}) })
    ] }),
    /* @__PURE__ */ S.jsx(w3, { dividers: !0, sx: { borderTop: "1px solid #F1F5F9" }, children: i ? /* @__PURE__ */ S.jsxs(be, { sx: { textAlign: "center", py: 3 }, children: [
      /* @__PURE__ */ S.jsx(K6, { sx: { fontSize: 64, color: "#10B981", mb: 1.5 } }),
      /* @__PURE__ */ S.jsx(Ae, { variant: "h5", sx: { fontWeight: 800, color: "#0F172A", mb: 1 }, children: "You're all set to fly!" }),
      /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { color: "#64748B", mb: 3 }, children: [
        "Your booking confirmation has been issued. E-ticket sent to ",
        /* @__PURE__ */ S.jsx("strong", { children: p }),
        "."
      ] }),
      /* @__PURE__ */ S.jsxs(be, { sx: { backgroundColor: "#F8FAFC", borderRadius: 2, p: 2, border: "1px solid #E2E8F0", textAlign: "left", mb: 2 }, children: [
        /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B", display: "block", textTransform: "uppercase", fontWeight: 700 }, children: "Booking Reference (PNR)" }),
        /* @__PURE__ */ S.jsxs(Ae, { variant: "h6", sx: { fontWeight: 800, color: "#1E40AF", letterSpacing: 1.5 }, children: [
          "HD-",
          t.airlineCode,
          Math.floor(1e3 + Math.random() * 9e3)
        ] }),
        /* @__PURE__ */ S.jsx(Is, { sx: { my: 1 } }),
        /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { fontWeight: 600 }, children: [
          "Passenger: ",
          c
        ] }),
        /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { color: "#475569" }, children: [
          "Flight: ",
          t.airline,
          " (",
          t.flightNumber,
          ") • ",
          t.origin.city,
          " (",
          t.origin.code,
          ") → ",
          t.destination.city,
          " (",
          t.destination.code,
          ")"
        ] }),
        /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { color: "#475569" }, children: [
          "Departure: ",
          t.departureTime,
          " • Duration: ",
          t.durationFormatted
        ] })
      ] })
    ] }) : /* @__PURE__ */ S.jsxs(be, { children: [
      /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }, children: [
        /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
          /* @__PURE__ */ S.jsx(
            be,
            {
              sx: {
                width: 38,
                height: 38,
                borderRadius: 2,
                backgroundColor: t.airlineBg,
                color: t.airlineColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800
              },
              children: t.airlineCode
            }
          ),
          /* @__PURE__ */ S.jsxs(be, { children: [
            /* @__PURE__ */ S.jsxs(Ae, { variant: "subtitle1", sx: { fontWeight: 700 }, children: [
              t.airline,
              " — ",
              t.flightNumber
            ] }),
            /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#64748B" }, children: [
              t.aircraft,
              " • ",
              t.cabinClass
            ] })
          ] })
        ] }),
        /* @__PURE__ */ S.jsx(
          fi,
          {
            label: t.stops === 0 ? "Non-stop" : "1 Stop",
            color: t.stops === 0 ? "success" : "warning",
            size: "small",
            sx: { fontWeight: 700 }
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(be, { sx: { backgroundColor: "#F8FAFC", borderRadius: 2, p: 2, mb: 2.5, border: "1px solid #E2E8F0" }, children: /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ S.jsxs(be, { children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "h6", sx: { fontWeight: 800 }, children: t.departureTime }),
          /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { fontWeight: 700, color: "#1E40AF" }, children: [
            t.origin.city,
            " (",
            t.origin.code,
            ")"
          ] }),
          /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B" }, children: t.origin.name })
        ] }),
        /* @__PURE__ */ S.jsxs(be, { sx: { textAlign: "center" }, children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { fontWeight: 700, color: "#64748B" }, children: t.durationFormatted }),
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 0.5, color: "#1E40AF" }, children: [
            /* @__PURE__ */ S.jsx(be, { sx: { width: 30, height: 2, backgroundColor: "#CBD5E1" } }),
            /* @__PURE__ */ S.jsx(di, { sx: { fontSize: 16 } }),
            /* @__PURE__ */ S.jsx(be, { sx: { width: 30, height: 2, backgroundColor: "#CBD5E1" } })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs(be, { sx: { textAlign: "right" }, children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "h6", sx: { fontWeight: 800 }, children: t.arrivalTime }),
          /* @__PURE__ */ S.jsxs(Ae, { variant: "body2", sx: { fontWeight: 700, color: "#1E40AF" }, children: [
            t.destination.city,
            " (",
            t.destination.code,
            ")"
          ] }),
          /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#64748B" }, children: t.destination.name })
        ] })
      ] }) }),
      /* @__PURE__ */ S.jsx(Ae, { variant: "subtitle2", sx: { fontWeight: 700, mb: 1 }, children: "Traveler Information" }),
      /* @__PURE__ */ S.jsxs(be, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 1.5, mb: 2 }, children: [
        /* @__PURE__ */ S.jsx(
          Bs,
          {
            size: "small",
            label: "Full Name",
            value: c,
            onChange: (T) => d(T.target.value)
          }
        ),
        /* @__PURE__ */ S.jsx(
          Bs,
          {
            size: "small",
            label: "Email Address",
            value: p,
            onChange: (T) => m(T.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(Ae, { variant: "subtitle2", sx: { fontWeight: 700, mb: 1 }, children: "Price Breakdown" }),
      /* @__PURE__ */ S.jsxs(be, { sx: { backgroundColor: "#F1F5F9", borderRadius: 2, p: 1.5 }, children: [
        /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", justifyContent: "space-between", mb: 0.5 }, children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#475569" }, children: "Base Airfare (1 Adult)" }),
          /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { fontWeight: 600 }, children: [
            t.currency,
            g
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", justifyContent: "space-between", mb: 0.5 }, children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "caption", sx: { color: "#475569" }, children: "Taxes, Airport Fees & Surcharges" }),
          /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { fontWeight: 600 }, children: [
            t.currency,
            y
          ] })
        ] }),
        /* @__PURE__ */ S.jsx(Is, { sx: { my: 0.75 } }),
        /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ S.jsx(Ae, { variant: "subtitle2", sx: { fontWeight: 800 }, children: "Total (incl. all taxes)" }),
          /* @__PURE__ */ S.jsxs(Ae, { variant: "h6", sx: { fontWeight: 800, color: "#1E40AF" }, children: [
            t.currency,
            t.price
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ S.jsx(x3, { sx: { p: 2 }, children: i ? /* @__PURE__ */ S.jsx(_a, { variant: "contained", onClick: C, fullWidth: !0, sx: { backgroundColor: "#1E40AF", py: 1, borderRadius: 2 }, children: "Done" }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx(_a, { onClick: C, sx: { color: "#64748B" }, children: "Cancel" }),
      /* @__PURE__ */ S.jsx(
        _a,
        {
          variant: "contained",
          onClick: h,
          sx: { backgroundColor: "#1E40AF", fontWeight: 700, px: 3, borderRadius: 2 },
          children: "Confirm & Book Flight"
        }
      )
    ] }) })
  ] });
}
function V1(t) {
  if (!t || typeof t != "string")
    return {
      from: In("NYC"),
      to: In("LON"),
      isDefault: !0,
      rawQuery: ""
    };
  let a = t.trim();
  a = a.replace(/^["']|["']$/g, ""), a = a.replace(/^(?:show\s+me\s+|find\s+|search\s+|book\s+|cheap\s+|cheapest\s+|best\s+)+/i, "");
  const o = a.match(/(?:flights?|tickets?)?\s*to\s+([a-zA-Z\s]+?)\s+from\s+([a-zA-Z\s]+)/i);
  if (o) {
    const p = ei(o[1]), m = ei(o[2]), g = In(p), y = In(m);
    if (g && y)
      return { from: y, to: g, isDefault: !1, rawQuery: t };
  }
  const i = a.match(/(?:(?:flights?|fly|tickets?|search|find|book)\s+)?(?:from\s+)?([a-zA-Z\s]+?)\s+(?:to|-|->|–)\s+([a-zA-Z\s]+?)(?:\s+(?:flights?|flight|tickets?|travel|airfare|planes?))?$/i);
  if (i) {
    const p = ei(i[1]), m = ei(i[2]);
    if (p && m && p.toLowerCase() !== m.toLowerCase()) {
      const g = In(p), y = In(m);
      if (g && y)
        return { from: g, to: y, isDefault: !1, rawQuery: t };
    }
  }
  const s = a.match(/\b([a-zA-Z]{3})\s*(?:to|-|->|–|\s)\s*([a-zA-Z]{3})\b/i);
  if (s) {
    const p = In(s[1]), m = In(s[2]);
    if (p && m)
      return { from: p, to: m, isDefault: !1, rawQuery: t };
  }
  const c = a.match(/(?:flights?|fly|tickets?)\s+(?:to|for)\s+([a-zA-Z\s]+)/i);
  if (c) {
    const p = ei(c[1]), m = In(p);
    if (m) {
      const g = m.code === "JFK" || m.city === "New York" ? "LHR" : "JFK";
      return {
        from: In(g),
        to: m,
        isDefault: !1,
        rawQuery: t
      };
    }
  }
  const d = a.match(/(?:flights?|fly|tickets?)\s+from\s+([a-zA-Z\s]+)/i);
  if (d) {
    const p = ei(d[1]), m = In(p);
    if (m) {
      const g = m.code === "LHR" ? "JFK" : "LHR";
      return {
        from: m,
        to: In(g),
        isDefault: !1,
        rawQuery: t
      };
    }
  }
  return {
    from: In("NYC"),
    to: In("LON"),
    isDefault: !0,
    rawQuery: t
  };
}
function ei(t) {
  return t ? t.replace(/\b(flights?|cheap|tickets?|air|airline|airfare|travel|roundtrip|oneway|nonstop|non-stop|direct|show|me|find|plane|planes)\b/gi, "").replace(/^from\s+/i, "").trim() : "";
}
const q1 = [
  { name: "Emirates", code: "EK", prefix: "EK", color: "#D71921", bg: "#FEE2E2", rating: 4.8 },
  { name: "Delta Air Lines", code: "DL", prefix: "DL", color: "#002244", bg: "#E0E7FF", rating: 4.6 },
  { name: "British Airways", code: "BA", prefix: "BA", color: "#075AAA", bg: "#DBEAFE", rating: 4.5 },
  { name: "Air India", code: "AI", prefix: "AI", color: "#ED1C24", bg: "#FFE4E6", rating: 4.4 },
  { name: "IndiGo", code: "6E", prefix: "6E", color: "#001E6C", bg: "#E0F2FE", rating: 4.3 },
  { name: "United Airlines", code: "UA", prefix: "UA", color: "#005DAA", bg: "#EDE9FE", rating: 4.4 },
  { name: "Singapore Airlines", code: "SQ", prefix: "SQ", color: "#C59A52", bg: "#FEF3C7", rating: 4.9 },
  { name: "Qatar Airways", code: "QR", prefix: "QR", color: "#5C0632", bg: "#FCE7F3", rating: 4.8 },
  { name: "Lufthansa", code: "LH", prefix: "LH", color: "#05164D", bg: "#FEF9C3", rating: 4.5 },
  { name: "Air France", code: "AF", prefix: "AF", color: "#002157", bg: "#E0E7FF", rating: 4.6 },
  { name: "Virgin Atlantic", code: "VS", prefix: "VS", color: "#D60000", bg: "#FFE4E6", rating: 4.7 },
  { name: "American Airlines", code: "AA", prefix: "AA", color: "#0078D2", bg: "#E0F2FE", rating: 4.3 }
], G1 = [
  "Boeing 787-9 Dreamliner",
  "Airbus A350-900",
  "Boeing 777-300ER",
  "Airbus A321neo",
  "Airbus A320neo",
  "Boeing 737 MAX 9"
];
function tz(t, a, o = null, i = "Economy") {
  if (!t || !a) return [];
  const s = Math.max(300, $6(t.lat, t.lon, a.lat, a.lon)), c = Math.round(s / 800 * 60) + 35, d = t.country === "India" && a.country === "India", p = d ? "₹" : "$", g = Math.max(d ? 3200 : 85, Math.round(s * (d ? 4.2 : 0.085)));
  let y = [...q1];
  d && (y = q1.filter((T) => ["6E", "AI", "BA", "EK"].includes(T.code)));
  const h = [
    { depH: 6, depM: 15, stops: 0, priceMult: 0.92, durationMult: 1 },
    { depH: 8, depM: 45, stops: 0, priceMult: 1.15, durationMult: 0.98 },
    { depH: 10, depM: 30, stops: 1, priceMult: 0.82, durationMult: 1.45, layoverCity: Y1(t, a) },
    { depH: 13, depM: 20, stops: 0, priceMult: 1.05, durationMult: 1.02 },
    { depH: 16, depM: 50, stops: 0, priceMult: 1.12, durationMult: 1 },
    { depH: 18, depM: 15, stops: 1, priceMult: 0.78, durationMult: 1.55, layoverCity: Y1(t, a) },
    { depH: 21, depM: 0, stops: 0, priceMult: 0.95, durationMult: 0.97 },
    { depH: 23, depM: 40, stops: 0, priceMult: 0.88, durationMult: 0.96 }
  ], C = i === "Business" ? 2.8 : i === "First" ? 4.5 : 1;
  return h.map((T, R) => {
    const x = y[R % y.length], A = `${x.prefix}-${100 + (R * 37 + 14) % 899}`, z = Math.round(c * T.durationMult), N = Math.floor(z / 60), O = z % 60, M = `${N}h ${O < 10 ? "0" : ""}${O}m`, D = T.depH, _ = T.depM, L = D >= 12 ? "PM" : "AM", F = `${D % 12 === 0 ? 12 : D % 12}:${_ < 10 ? "0" : ""}${_} ${L}`, E = D * 60 + _ + z, U = Math.floor(E / 60) % 24, P = E % 60, J = Math.floor(E / 1440), te = U >= 12 ? "PM" : "AM", j = `${U % 12 === 0 ? 12 : U % 12}:${P < 10 ? "0" : ""}${P} ${te}${J > 0 ? ` (+${J})` : ""}`, Y = Math.round(g * T.priceMult * C), W = Math.round(Y / 5) * 5, G = G1[R % G1.length], de = T.stops > 0 ? Math.round(z - c) : 0, xe = T.stops > 0 ? `${Math.floor(de / 60)}h ${de % 60}m layover` : null;
    return {
      id: `fl-${x.code}-${t.code}-${a.code}-${R}`,
      flightNumber: A,
      airline: x.name,
      airlineCode: x.code,
      airlineColor: x.color,
      airlineBg: x.bg,
      rating: x.rating,
      aircraft: G,
      origin: {
        code: t.code,
        city: t.city,
        name: t.name,
        country: t.country
      },
      destination: {
        code: a.code,
        city: a.city,
        name: a.name,
        country: a.country
      },
      departureTime: F,
      arrivalTime: j,
      departureHour24: D,
      departureMin: _,
      durationMinutes: z,
      durationFormatted: M,
      stops: T.stops,
      layoverCity: T.layoverCity || null,
      layoverFormatted: xe,
      price: W,
      currency: p,
      cabinClass: i,
      seatsLeft: R % 5 + 2,
      baggage: "1 carry-on (7kg) + 1 checked bag (23kg)",
      emissions: T.stops === 0 ? "-14% emissions" : "+8% emissions",
      onTimeRate: `${88 + R * 3 % 10}% on-time`,
      amenities: ["Wi-Fi available", "USB in-seat power", "Complimentary meal", "Free movies & TV"]
    };
  });
}
function Y1(t, a) {
  return t.country === "India" || a.country === "India" ? "Dubai (DXB)" : t.country === "United States" && a.country === "Japan" ? "Honolulu (HNL)" : "Frankfurt (FRA)";
}
function nz(t, a = "cheapest") {
  if (!t || !Array.isArray(t)) return [];
  const o = [...t];
  switch (a) {
    case "cheapest":
      return o.sort((i, s) => i.price - s.price);
    case "price_desc":
      return o.sort((i, s) => s.price - i.price);
    case "fastest":
      return o.sort((i, s) => i.durationMinutes - s.durationMinutes);
    case "duration_desc":
      return o.sort((i, s) => s.durationMinutes - i.durationMinutes);
    case "earliest":
      return o.sort((i, s) => {
        const c = i.departureHour24 * 60 + i.departureMin, d = s.departureHour24 * 60 + s.departureMin;
        return c - d;
      });
    case "latest":
      return o.sort((i, s) => {
        const c = i.departureHour24 * 60 + i.departureMin;
        return s.departureHour24 * 60 + s.departureMin - c;
      });
    case "best":
    default: {
      if (o.length === 0) return o;
      const i = Math.min(...o.map((g) => g.price)), s = Math.max(...o.map((g) => g.price)), c = Math.min(...o.map((g) => g.durationMinutes)), d = Math.max(...o.map((g) => g.durationMinutes)), p = s - i || 1, m = d - c || 1;
      return o.sort((g, y) => {
        const h = 0.55 * ((g.price - i) / p) + 0.45 * ((g.durationMinutes - c) / m), C = 0.55 * ((y.price - i) / p) + 0.45 * ((y.durationMinutes - c) / m);
        return h - C;
      });
    }
  }
}
function az(t) {
  var te, X;
  const a = t.deployedBackendURL ?? "", o = (((te = t == null ? void 0 : t.UIOptions) == null ? void 0 : te.format) || (t == null ? void 0 : t.format)) === "sidebar", i = b.useMemo(() => {
    var j;
    if (t != null && t.searchData && typeof t.searchData == "object") {
      if (typeof t.searchData.query == "string" && t.searchData.query.trim())
        return t.searchData.query.trim();
      if (Array.isArray(t.searchData) && ((j = t.searchData[0]) != null && j.query))
        return t.searchData[0].query.trim();
    }
    return typeof (t == null ? void 0 : t.searchQuery) == "string" && t.searchQuery.trim() ? t.searchQuery.trim() : "flights from New York to London";
  }, [t == null ? void 0 : t.searchData, t == null ? void 0 : t.searchQuery]), s = b.useMemo(() => V1(i), [i]), [c, d] = b.useState(s.from), [p, m] = b.useState(s.to), [g, y] = b.useState("Economy"), [h, C] = b.useState("cheapest"), [T, R] = b.useState("all"), [x, A] = b.useState("all"), [z, N] = b.useState(!1), [O, M] = b.useState([]), [D, _] = b.useState(null);
  b.useEffect(() => {
    const j = V1(i);
    d(j.from), m(j.to);
  }, [i]);
  const L = b.useCallback(async (j, Y, W) => {
    if (!j || !Y) return;
    N(!0);
    try {
      if (a) {
        const de = await fetch(
          `${a}/api/flights?from=${encodeURIComponent(j.city || j.code)}&to=${encodeURIComponent(Y.city || Y.code)}&cabinClass=${encodeURIComponent(W)}`,
          { signal: AbortSignal.timeout(2e3) }
        );
        if (de.ok) {
          const xe = await de.json();
          if (xe && Array.isArray(xe.flights) && xe.flights.length > 0) {
            M(xe.flights), N(!1);
            return;
          }
        }
      }
    } catch {
    }
    const G = tz(j, Y, null, W);
    M(G), N(!1);
  }, [a]);
  b.useEffect(() => {
    L(c, p, g);
  }, [c, p, g, L]), b.useEffect(() => {
    var j;
    (j = t == null ? void 0 : t.messageHandlers) == null || j.componentLoaded();
  }, [t == null ? void 0 : t.messageHandlers]);
  const k = (j, Y, W, G) => {
    var de;
    d(j), m(Y), y(G), L(j, Y, G), (de = t == null ? void 0 : t.messageHandlers) != null && de.searchQuery && j && Y && t.messageHandlers.searchQuery(`flights from ${j.city} to ${Y.city}`);
  }, F = b.useMemo(() => {
    let j = [...O];
    if (T !== "all") {
      const Y = parseInt(T, 10);
      j = j.filter((W) => W.stops === Y);
    }
    return x !== "all" && (j = j.filter((Y) => Y.airline === x)), nz(j, h);
  }, [O, T, x, h]), E = b.useMemo(() => O.length ? Math.min(...O.map((j) => j.price)) : null, [O]), U = b.useMemo(() => {
    if (!O.length) return null;
    const j = Math.min(...O.map((G) => G.durationMinutes)), Y = Math.floor(j / 60), W = j % 60;
    return `${Y}h ${W < 10 ? "0" : ""}${W}m`;
  }, [O]), P = b.useMemo(() => {
    const j = new Set(O.map((Y) => Y.airline));
    return Array.from(j);
  }, [O]), J = ((X = O[0]) == null ? void 0 : X.currency) || "$";
  return /* @__PURE__ */ S.jsxs(
    be,
    {
      sx: {
        backgroundColor: "#F8FAFC",
        minHeight: "100%",
        p: { xs: 1.5, sm: 2.5 },
        color: "#0F172A",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif"
      },
      children: [
        /* @__PURE__ */ S.jsx(be, { sx: { mb: 2.5, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 1 }, children: /* @__PURE__ */ S.jsxs(be, { children: [
          /* @__PURE__ */ S.jsxs(be, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ S.jsx(Ae, { variant: "h5", sx: { fontWeight: 800, color: "#0F172A", fontSize: { xs: "1.25rem", sm: "1.5rem" } }, children: c ? `${c.city} (${c.code})` : "Origin" }),
            /* @__PURE__ */ S.jsx(D6, { sx: { color: "#1E40AF", fontSize: 24 } }),
            /* @__PURE__ */ S.jsx(Ae, { variant: "h5", sx: { fontWeight: 800, color: "#0F172A", fontSize: { xs: "1.25rem", sm: "1.5rem" } }, children: p ? `${p.city} (${p.code})` : "Destination" })
          ] }),
          /* @__PURE__ */ S.jsxs(Ae, { variant: "caption", sx: { color: "#64748B", display: "block", mt: 0.5 }, children: [
            "Showing real-time airline fares & schedules parsed from Hyperdart query: “",
            i,
            "”"
          ] })
        ] }) }),
        /* @__PURE__ */ S.jsx(
          _6,
          {
            origin: c,
            destination: p,
            onSearch: k,
            cabinClass: g,
            onCabinClassChange: y,
            isSidebar: o
          }
        ),
        /* @__PURE__ */ S.jsx(
          F6,
          {
            sortMode: h,
            onSortChange: C,
            stopsFilter: T,
            onStopsFilterChange: R,
            selectedAirline: x,
            onAirlineChange: A,
            availableAirlines: P,
            cheapestPrice: E,
            fastestDuration: U,
            currency: J,
            totalCount: F.length
          }
        ),
        z ? /* @__PURE__ */ S.jsxs(be, { sx: { textAlign: "center", py: 6 }, children: [
          /* @__PURE__ */ S.jsx(Mh, { size: 40, sx: { color: "#1E40AF", mb: 2 } }),
          /* @__PURE__ */ S.jsxs(Ae, { variant: "body1", sx: { color: "#64748B", fontWeight: 600 }, children: [
            "Searching live flights between ",
            c == null ? void 0 : c.city,
            " and ",
            p == null ? void 0 : p.city,
            "..."
          ] })
        ] }) : F.length > 0 ? /* @__PURE__ */ S.jsx(be, { children: F.map((j) => /* @__PURE__ */ S.jsx(
          Z6,
          {
            flight: j,
            onSelect: (Y) => _(Y),
            isSidebar: o
          },
          j.id
        )) }) : /* @__PURE__ */ S.jsxs(al, { sx: { p: 4, textAlign: "center", borderRadius: 3, backgroundColor: "#ffffff", border: "1px solid #E2E8F0" }, children: [
          /* @__PURE__ */ S.jsx(di, { sx: { fontSize: 48, color: "#94A3B8", mb: 1.5 } }),
          /* @__PURE__ */ S.jsx(Ae, { variant: "h6", sx: { fontWeight: 700, color: "#334155", mb: 1 }, children: "No flights match your filters" }),
          /* @__PURE__ */ S.jsx(Ae, { variant: "body2", sx: { color: "#64748B", mb: 2.5 }, children: "Try resetting your stops or airline filters to see available flights." }),
          /* @__PURE__ */ S.jsx(
            _a,
            {
              variant: "outlined",
              onClick: () => {
                R("all"), A("all");
              },
              sx: { textTransform: "none", fontWeight: 600, borderRadius: 2 },
              children: "Reset Filters"
            }
          )
        ] }),
        /* @__PURE__ */ S.jsx(
          ez,
          {
            flight: D,
            open: !!D,
            onClose: () => _(null)
          }
        )
      ]
    }
  );
}
/**
 * react-router v7.18.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var qh = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, HS = /^[\\/]{2}/;
function rz(t, a) {
  return a + t.replace(/\\/g, "/");
}
var X1 = "popstate";
function K1(t) {
  return typeof t == "object" && t != null && "pathname" in t && "search" in t && "hash" in t && "state" in t && "key" in t;
}
function oz(t = {}) {
  function a(i, s) {
    var g;
    let c = (g = s.state) == null ? void 0 : g.masked, { pathname: d, search: p, hash: m } = c || i.location;
    return Xm(
      "",
      { pathname: d, search: p, hash: m },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default",
      c ? {
        pathname: i.location.pathname,
        search: i.location.search,
        hash: i.location.hash
      } : void 0
    );
  }
  function o(i, s) {
    return typeof s == "string" ? s : pi(s);
  }
  return iz(
    a,
    o,
    null,
    t
  );
}
function Yt(t, a) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(a);
}
function sr(t, a) {
  if (!t) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function lz() {
  return Math.random().toString(36).substring(2, 10);
}
function W1(t, a) {
  return {
    usr: t.state,
    key: t.key,
    idx: a,
    masked: t.mask ? {
      pathname: t.pathname,
      search: t.search,
      hash: t.hash
    } : void 0
  };
}
function Xm(t, a, o = null, i, s) {
  return {
    pathname: typeof t == "string" ? t : t.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? bi(a) : a,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || i || lz(),
    mask: s
  };
}
function pi({
  pathname: t = "/",
  search: a = "",
  hash: o = ""
}) {
  return a && a !== "?" && (t += a.charAt(0) === "?" ? a : "?" + a), o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o), t;
}
function bi(t) {
  let a = {};
  if (t) {
    let o = t.indexOf("#");
    o >= 0 && (a.hash = t.substring(o), t = t.substring(0, o));
    let i = t.indexOf("?");
    i >= 0 && (a.search = t.substring(i), t = t.substring(0, i)), t && (a.pathname = t);
  }
  return a;
}
function iz(t, a, o, i = {}) {
  let { window: s = document.defaultView, v5Compat: c = !1 } = i, d = s.history, p = "POP", m = null, g = y();
  g == null && (g = 0, d.replaceState({ ...d.state, idx: g }, ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function h() {
    p = "POP";
    let A = y(), z = A == null ? null : A - g;
    g = A, m && m({ action: p, location: x.location, delta: z });
  }
  function C(A, z) {
    p = "PUSH";
    let N = K1(A) ? A : Xm(x.location, A, z);
    g = y() + 1;
    let O = W1(N, g), M = x.createHref(N.mask || N);
    try {
      d.pushState(O, "", M);
    } catch (D) {
      if (D instanceof DOMException && D.name === "DataCloneError")
        throw D;
      s.location.assign(M);
    }
    c && m && m({ action: p, location: x.location, delta: 1 });
  }
  function T(A, z) {
    p = "REPLACE";
    let N = K1(A) ? A : Xm(x.location, A, z);
    g = y();
    let O = W1(N, g), M = x.createHref(N.mask || N);
    d.replaceState(O, "", M), c && m && m({ action: p, location: x.location, delta: 0 });
  }
  function R(A) {
    return sz(s, A);
  }
  let x = {
    get action() {
      return p;
    },
    get location() {
      return t(s, d);
    },
    listen(A) {
      if (m)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(X1, h), m = A, () => {
        s.removeEventListener(X1, h), m = null;
      };
    },
    createHref(A) {
      return a(s, A);
    },
    createURL: R,
    encodeLocation(A) {
      let z = R(A);
      return {
        pathname: z.pathname,
        search: z.search,
        hash: z.hash
      };
    },
    push: C,
    replace: T,
    go(A) {
      return d.go(A);
    }
  };
  return x;
}
function sz(t, a, o = !1) {
  let i = "http://localhost";
  t && (i = t.location.origin !== "null" ? t.location.origin : t.location.href), Yt(i, "No window.location.(origin|href) available to create URL");
  let s = typeof a == "string" ? a : pi(a);
  return s = s.replace(/ $/, "%20"), !o && HS.test(s) && (s = i + s), new URL(s, i);
}
function US(t, a, o = "/") {
  return uz(t, a, o, !1);
}
function uz(t, a, o, i, s) {
  let c = typeof a == "string" ? bi(a) : a, d = Dr(c.pathname || "/", o);
  if (d == null)
    return null;
  let p = cz(t), m = null, g = Sz(d);
  for (let y = 0; m == null && y < p.length; ++y)
    m = xz(
      p[y],
      g,
      i
    );
  return m;
}
function cz(t) {
  let a = IS(t);
  return fz(a), a;
}
function IS(t, a = [], o = [], i = "", s = !1) {
  let c = (d, p, m = s, g) => {
    let y = {
      relativePath: g === void 0 ? d.path || "" : g,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: p,
      route: d
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(i) && m)
        return;
      Yt(
        y.relativePath.startsWith(i),
        `Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), y.relativePath = y.relativePath.slice(i.length);
    }
    let h = Ha([i, y.relativePath]), C = o.concat(y);
    d.children && d.children.length > 0 && (Yt(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      d.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
    ), IS(
      d.children,
      a,
      C,
      h,
      m
    )), !(d.path == null && !d.index) && a.push({
      path: h,
      score: vz(h, d.index),
      routesMeta: C.map((T, R) => {
        let [x, A] = VS(
          T.relativePath,
          T.caseSensitive,
          R === C.length - 1
        );
        return {
          ...T,
          matcher: x,
          compiledParams: A
        };
      })
    });
  };
  return t.forEach((d, p) => {
    var m;
    if (d.path === "" || !((m = d.path) != null && m.includes("?")))
      c(d, p);
    else
      for (let g of PS(d.path))
        c(d, p, !0, g);
  }), a;
}
function PS(t) {
  let a = t.split("/");
  if (a.length === 0) return [];
  let [o, ...i] = a, s = o.endsWith("?"), c = o.replace(/\?$/, "");
  if (i.length === 0)
    return s ? [c, ""] : [c];
  let d = PS(i.join("/")), p = [];
  return p.push(
    ...d.map(
      (m) => m === "" ? c : [c, m].join("/")
    )
  ), s && p.push(...d), p.map(
    (m) => t.startsWith("/") && m === "" ? "/" : m
  );
}
function fz(t) {
  t.sort(
    (a, o) => a.score !== o.score ? o.score - a.score : bz(
      a.routesMeta.map((i) => i.childrenIndex),
      o.routesMeta.map((i) => i.childrenIndex)
    )
  );
}
var dz = /^:[\w-]+$/, pz = 3, mz = 2, hz = 1, gz = 10, yz = -2, Q1 = (t) => t === "*";
function vz(t, a) {
  let o = t.split("/"), i = o.length;
  return o.some(Q1) && (i += yz), a && (i += mz), o.filter((s) => !Q1(s)).reduce(
    (s, c) => s + (dz.test(c) ? pz : c === "" ? hz : gz),
    i
  );
}
function bz(t, a) {
  return t.length === a.length && t.slice(0, -1).every((i, s) => i === a[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t[t.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function xz(t, a, o = !1) {
  let { routesMeta: i } = t, s = {}, c = "/", d = [];
  for (let p = 0; p < i.length; ++p) {
    let m = i[p], g = p === i.length - 1, y = c === "/" ? a : a.slice(c.length) || "/", h = {
      path: m.relativePath,
      caseSensitive: m.caseSensitive,
      end: g
    }, C = (
      // Use precomputed matcher if it exists
      m.matcher && m.compiledParams ? FS(
        h,
        y,
        m.matcher,
        m.compiledParams
      ) : Zc(h, y)
    ), T = m.route;
    if (!C && g && o && !i[i.length - 1].route.index && (C = Zc(
      {
        path: m.relativePath,
        caseSensitive: m.caseSensitive,
        end: !1
      },
      y
    )), !C)
      return null;
    Object.assign(s, C.params), d.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: Ha([c, C.pathname]),
      pathnameBase: Tz(
        Ha([c, C.pathnameBase])
      ),
      route: T
    }), C.pathnameBase !== "/" && (c = Ha([c, C.pathnameBase]));
  }
  return d;
}
function Zc(t, a) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [o, i] = VS(
    t.path,
    t.caseSensitive,
    t.end
  );
  return FS(t, a, o, i);
}
function FS(t, a, o, i) {
  let s = a.match(o);
  if (!s) return null;
  let c = s[0], d = mi(c, 1), p = s.slice(1);
  return {
    params: i.reduce(
      (g, { paramName: y, isOptional: h }, C) => {
        if (y === "*") {
          let R = p[C] || "";
          d = mi(
            c.slice(0, c.length - R.length),
            1
          );
        }
        const T = p[C];
        return h && !T ? g[y] = void 0 : g[y] = (T || "").replace(/%2F/g, "/"), g;
      },
      {}
    ),
    pathname: c,
    pathnameBase: d,
    pattern: t
  };
}
function VS(t, a = !1, o = !0) {
  sr(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`
  );
  let i = [], s = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, p, m, g, y) => {
      if (i.push({ paramName: p, isOptional: m != null }), m) {
        let h = y.charAt(g + d.length);
        return h && h !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return t.endsWith("*") ? (i.push({ paramName: "*" }), s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? s += "\\/*$" : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, a ? void 0 : "i"), i];
}
function Sz(t) {
  try {
    return t.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return sr(
      !1,
      `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), t;
  }
}
function Dr(t, a) {
  if (a === "/") return t;
  if (!t.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let o = a.endsWith("/") ? a.length - 1 : a.length, i = t.charAt(o);
  return i && i !== "/" ? null : t.slice(o) || "/";
}
function Cz(t, a = "/") {
  let {
    pathname: o,
    search: i = "",
    hash: s = ""
  } = typeof t == "string" ? bi(t) : t, c;
  return o ? (o = GS(o), o.startsWith("/") || o.startsWith("\\") ? c = Z1(o.substring(1), "/") : c = Z1(o, a)) : c = a, {
    pathname: c,
    search: Rz(i),
    hash: wz(s)
  };
}
function Z1(t, a) {
  let o = mi(a).split("/");
  return t.split("/").forEach((s) => {
    s === ".." ? o.length > 1 && o.pop() : s !== "." && o.push(s);
  }), o.length > 1 ? o.join("/") : "/";
}
function hm(t, a, o, i) {
  return `Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ez(t) {
  return t.filter(
    (a, o) => o === 0 || a.route.path && a.route.path.length > 0
  );
}
function qS(t) {
  let a = Ez(t);
  return a.map(
    (o, i) => i === a.length - 1 ? o.pathname : o.pathnameBase
  );
}
function Gh(t, a, o, i = !1) {
  let s;
  typeof t == "string" ? s = bi(t) : (s = { ...t }, Yt(
    !s.pathname || !s.pathname.includes("?"),
    hm("?", "pathname", "search", s)
  ), Yt(
    !s.pathname || !s.pathname.includes("#"),
    hm("#", "pathname", "hash", s)
  ), Yt(
    !s.search || !s.search.includes("#"),
    hm("#", "search", "hash", s)
  ));
  let c = t === "" || s.pathname === "", d = c ? "/" : s.pathname, p;
  if (d == null)
    p = o;
  else {
    let h = a.length - 1;
    if (!i && d.startsWith("..")) {
      let C = d.split("/");
      for (; C[0] === ".."; )
        C.shift(), h -= 1;
      s.pathname = C.join("/");
    }
    p = h >= 0 ? a[h] : "/";
  }
  let m = Cz(s, p), g = d && d !== "/" && d.endsWith("/"), y = (c || d === ".") && o.endsWith("/");
  return !m.pathname.endsWith("/") && (g || y) && (m.pathname += "/"), m;
}
var GS = (t) => t.replace(/[\\/]{2,}/g, "/"), Ha = (t) => GS(t.join("/"));
function mi(t, a = 0) {
  let o = t.length;
  for (; o > a && t.charCodeAt(o - 1) === 47; )
    o--;
  return o === t.length ? t : t.slice(0, o);
}
var Tz = (t) => mi(t).replace(/^\/*/, "/"), Rz = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, wz = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t, Az = class {
  constructor(t, a, o, i = !1) {
    this.status = t, this.statusText = a || "", this.internal = i, o instanceof Error ? (this.data = o.toString(), this.error = o) : this.data = o;
  }
};
function Oz(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
function Mz(t) {
  let a = t.map((o) => o.route.path).filter(Boolean);
  return Ha(a) || "/";
}
var YS = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function XS(t, a) {
  let o = t;
  if (typeof o != "string" || !qh.test(o))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: o
    };
  let i = o, s = !1;
  if (YS)
    try {
      let c = new URL(window.location.href), d = HS.test(o) ? new URL(rz(o, c.protocol)) : new URL(o), p = Dr(d.pathname, a);
      d.origin === c.origin && p != null ? o = p + d.search + d.hash : s = !0;
    } catch {
      sr(
        !1,
        `<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: i,
    isExternal: s,
    to: o
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var J1 = new URL("http://localhost");
function KS(t) {
  if (t.createURL)
    return t.createURL("/");
  try {
    return new URL(t.createHref("/"), J1);
  } catch {
    return J1;
  }
}
function gm(t, a) {
  return t.origin === a.origin && (t.origin !== "null" || t.protocol === a.protocol && t.host === a.host);
}
function zz(t, a) {
  if (t.startsWith("//"))
    return !0;
  let o = a.protocol.toLowerCase();
  return t.toLowerCase().startsWith(o) ? a.host === "" || t.slice(o.length).startsWith("//") : !1;
}
function WS(t, a, o, i) {
  let s = null;
  try {
    s = t == null ? null : new URL(t, o);
  } catch {
  }
  let c = new URL(a, o), d = s != null && !gm(s, o), p = !gm(c, o);
  if (i === "reject") {
    if (d || p)
      throw new Error("External navigation is not allowed");
  } else if (p && (s == null || !zz(t, s) || !gm(s, c)))
    throw new Error("External navigation is not allowed");
}
var QS = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  QS
);
var Dz = [
  "GET",
  ...QS
];
new Set(Dz);
var Nz = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  // eslint-disable-next-line no-script-url
  "javascript:"
];
function Bz(t) {
  try {
    return Nz.includes(new URL(t).protocol);
  } catch {
    return !1;
  }
}
var xi = b.createContext(null);
xi.displayName = "DataRouter";
var bf = b.createContext(null);
bf.displayName = "DataRouterState";
var ZS = b.createContext(!1);
function jz() {
  return b.useContext(ZS);
}
var JS = b.createContext({
  isTransitioning: !1
});
JS.displayName = "ViewTransition";
var $z = b.createContext(
  /* @__PURE__ */ new Map()
);
$z.displayName = "Fetchers";
var Lz = b.createContext(null);
Lz.displayName = "Await";
var Aa = b.createContext(
  null
);
Aa.displayName = "Navigation";
var Js = b.createContext(
  null
);
Js.displayName = "Location";
var Br = b.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Br.displayName = "Route";
var Yh = b.createContext(null);
Yh.displayName = "RouteError";
var eC = "REACT_ROUTER_ERROR", _z = "REDIRECT", kz = "ROUTE_ERROR_RESPONSE";
function Hz(t) {
  if (t.startsWith(`${eC}:${_z}:{`))
    try {
      let a = JSON.parse(t.slice(28));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
        return a;
    } catch {
    }
}
function Uz(t) {
  if (t.startsWith(
    `${eC}:${kz}:{`
  ))
    try {
      let a = JSON.parse(t.slice(40));
      if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
        return new Az(
          a.status,
          a.statusText,
          a.data
        );
    } catch {
    }
}
function Iz(t, { relative: a } = {}) {
  Yt(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: i } = b.useContext(Aa), { hash: s, pathname: c, search: d } = tu(t, { relative: a }), p = c;
  return o !== "/" && (p = c === "/" ? o : Ha([o, c])), i.createHref({ pathname: p, search: d, hash: s });
}
function eu() {
  return b.useContext(Js) != null;
}
function ur() {
  return Yt(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), b.useContext(Js).location;
}
var tC = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function nC(t) {
  b.useContext(Aa).static || b.useLayoutEffect(t);
}
function aC() {
  let { isDataRoute: t } = b.useContext(Br);
  return t ? eD() : Pz();
}
function Pz() {
  Yt(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let t = b.useContext(xi), { basename: a, navigator: o } = b.useContext(Aa), { matches: i } = b.useContext(Br), { pathname: s } = ur(), c = JSON.stringify(qS(i)), d = b.useRef(!1);
  return nC(() => {
    d.current = !0;
  }), b.useCallback(
    (m, g = {}) => {
      if (sr(d.current, tC), !d.current) return;
      if (typeof m == "number") {
        o.go(m);
        return;
      }
      let y = Gh(
        m,
        JSON.parse(c),
        s,
        g.relative === "path"
      );
      t == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : Ha([a, y.pathname])), WS(
        typeof m == "string" ? m : pi(m),
        o.createHref(y),
        KS(o),
        "reject"
      ), (g.replace ? o.replace : o.push)(
        y,
        g.state,
        g
      );
    },
    [
      a,
      o,
      c,
      s,
      t
    ]
  );
}
b.createContext(null);
function tu(t, { relative: a } = {}) {
  let { matches: o } = b.useContext(Br), { pathname: i } = ur(), s = JSON.stringify(qS(o));
  return b.useMemo(
    () => Gh(
      t,
      JSON.parse(s),
      i,
      a === "path"
    ),
    [t, s, i, a]
  );
}
function Fz(t, a) {
  return rC(t, a);
}
function rC(t, a, o) {
  var A;
  Yt(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: i } = b.useContext(Aa), { matches: s } = b.useContext(Br), c = s[s.length - 1], d = c ? c.params : {}, p = c ? c.pathname : "/", m = c ? c.pathnameBase : "/", g = c && c.route;
  {
    let z = g && g.path || "";
    lC(
      p,
      !g || z.endsWith("*") || z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z === "/" ? "*" : `${z}/*`}">.`
    );
  }
  let y = ur(), h;
  if (a) {
    let z = typeof a == "string" ? bi(a) : a;
    Yt(
      m === "/" || ((A = z.pathname) == null ? void 0 : A.startsWith(m)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${z.pathname}" was given in the \`location\` prop.`
    ), h = z;
  } else
    h = y;
  let C = h.pathname || "/", T = C;
  if (m !== "/") {
    let z = m.replace(/^\//, "").split("/");
    T = "/" + C.replace(/^\//, "").split("/").slice(z.length).join("/");
  }
  let R = o && o.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    o.state.matches.map(
      (z) => Object.assign(z, {
        route: o.manifest[z.route.id] || z.route
      })
    )
  ) : US(t, { pathname: T });
  sr(
    g || R != null,
    `No routes matched location "${h.pathname}${h.search}${h.hash}" `
  ), sr(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let x = Xz(
    R && R.map(
      (z) => Object.assign({}, z, {
        params: Object.assign({}, d, z.params),
        pathname: Ha([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          i.encodeLocation ? i.encodeLocation(
            z.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : z.pathname
        ]),
        pathnameBase: z.pathnameBase === "/" ? m : Ha([
          m,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          i.encodeLocation ? i.encodeLocation(
            z.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : z.pathnameBase
        ])
      })
    ),
    s,
    o
  );
  return a && x ? /* @__PURE__ */ b.createElement(
    Js.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          mask: void 0,
          ...h
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    x
  ) : x;
}
function Vz() {
  let t = Jz(), a = Oz(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), o = t instanceof Error ? t.stack : null, i = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: i }, c = { padding: "2px 4px", backgroundColor: i }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    t
  ), d = /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ b.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ b.createElement("code", { style: c }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ b.createElement("code", { style: c }, "errorElement"), " prop on your route.")), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ b.createElement("h3", { style: { fontStyle: "italic" } }, a), o ? /* @__PURE__ */ b.createElement("pre", { style: s }, o) : null, d);
}
var qz = /* @__PURE__ */ b.createElement(Vz, null), oC = class extends b.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, a) {
    return a.location !== t.location || a.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : a.error,
      location: a.location,
      revalidation: t.revalidation || a.revalidation
    };
  }
  componentDidCatch(t, a) {
    this.props.onError ? this.props.onError(t, a) : console.error(
      "React Router caught the following error during render",
      t
    );
  }
  render() {
    let t = this.state.error;
    if (this.context && typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      const o = Uz(t.digest);
      o && (t = o);
    }
    let a = t !== void 0 ? /* @__PURE__ */ b.createElement(Br.Provider, { value: this.props.routeContext }, /* @__PURE__ */ b.createElement(
      Yh.Provider,
      {
        value: t,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ b.createElement(Gz, { error: t }, a) : a;
  }
};
oC.contextType = ZS;
var ym = /* @__PURE__ */ new WeakMap();
function Gz({
  children: t,
  error: a
}) {
  let { basename: o, navigator: i } = b.useContext(Aa);
  if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
    let s = Hz(a.digest);
    if (s) {
      let c = ym.get(a);
      if (c) throw c;
      let d = XS(s.location, o), p = d.absoluteURL || d.to;
      if (WS(
        s.location,
        p,
        KS(i),
        "allow-explicit"
      ), Bz(p))
        throw new Error("Invalid redirect location");
      if (YS && !ym.get(a))
        if (d.isExternal || s.reloadDocument)
          window.location.href = p;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: s.replace
            })
          );
          throw ym.set(a, m), m;
        }
      return /* @__PURE__ */ b.createElement("meta", { httpEquiv: "refresh", content: `0;url=${p}` });
    }
  }
  return t;
}
function Yz({ routeContext: t, match: a, children: o }) {
  let i = b.useContext(xi);
  return i && i.static && i.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ b.createElement(Br.Provider, { value: t }, o);
}
function Xz(t, a = [], o) {
  let i = o == null ? void 0 : o.state;
  if (t == null) {
    if (!i)
      return null;
    if (i.errors)
      t = i.matches;
    else if (a.length === 0 && !i.initialized && i.matches.length > 0)
      t = i.matches;
    else
      return null;
  }
  let s = t, c = i == null ? void 0 : i.errors;
  if (c != null) {
    let y = s.findIndex(
      (h) => h.route.id && (c == null ? void 0 : c[h.route.id]) !== void 0
    );
    Yt(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, y + 1)
    );
  }
  let d = !1, p = -1;
  if (o && i) {
    d = i.renderFallback;
    for (let y = 0; y < s.length; y++) {
      let h = s[y];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (p = y), h.route.id) {
        let { loaderData: C, errors: T } = i, R = h.route.loader && !C.hasOwnProperty(h.route.id) && (!T || T[h.route.id] === void 0);
        if (h.route.lazy || R) {
          o.isStatic && (d = !0), p >= 0 ? s = s.slice(0, p + 1) : s = [s[0]];
          break;
        }
      }
    }
  }
  let m = o == null ? void 0 : o.onError, g = i && m ? (y, h) => {
    var C, T;
    m(y, {
      location: i.location,
      params: ((T = (C = i.matches) == null ? void 0 : C[0]) == null ? void 0 : T.params) ?? {},
      pattern: Mz(i.matches),
      errorInfo: h
    });
  } : void 0;
  return s.reduceRight(
    (y, h, C) => {
      let T, R = !1, x = null, A = null;
      i && (T = c && h.route.id ? c[h.route.id] : void 0, x = h.route.errorElement || qz, d && (p < 0 && C === 0 ? (lC(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), R = !0, A = null) : p === C && (R = !0, A = h.route.hydrateFallbackElement || null)));
      let z = a.concat(s.slice(0, C + 1)), N = () => {
        let O;
        return T ? O = x : R ? O = A : h.route.Component ? O = /* @__PURE__ */ b.createElement(h.route.Component, null) : h.route.element ? O = h.route.element : O = y, /* @__PURE__ */ b.createElement(
          Yz,
          {
            match: h,
            routeContext: {
              outlet: y,
              matches: z,
              isDataRoute: i != null
            },
            children: O
          }
        );
      };
      return i && (h.route.ErrorBoundary || h.route.errorElement || C === 0) ? /* @__PURE__ */ b.createElement(
        oC,
        {
          location: i.location,
          revalidation: i.revalidation,
          component: x,
          error: T,
          children: N(),
          routeContext: { outlet: null, matches: z, isDataRoute: !0 },
          onError: g
        }
      ) : N();
    },
    null
  );
}
function Xh(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Kz(t) {
  let a = b.useContext(xi);
  return Yt(a, Xh(t)), a;
}
function Wz(t) {
  let a = b.useContext(bf);
  return Yt(a, Xh(t)), a;
}
function Qz(t) {
  let a = b.useContext(Br);
  return Yt(a, Xh(t)), a;
}
function Kh(t) {
  let a = Qz(t), o = a.matches[a.matches.length - 1];
  return Yt(
    o.route.id,
    `${t} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function Zz() {
  return Kh(
    "useRouteId"
    /* UseRouteId */
  );
}
function Jz() {
  var i;
  let t = b.useContext(Yh), a = Wz(
    "useRouteError"
    /* UseRouteError */
  ), o = Kh(
    "useRouteError"
    /* UseRouteError */
  );
  return t !== void 0 ? t : (i = a.errors) == null ? void 0 : i[o];
}
function eD() {
  let { router: t } = Kz(
    "useNavigate"
    /* UseNavigateStable */
  ), a = Kh(
    "useNavigate"
    /* UseNavigateStable */
  ), o = b.useRef(!1);
  return nC(() => {
    o.current = !0;
  }), b.useCallback(
    async (s, c = {}) => {
      sr(o.current, tC), o.current && (typeof s == "number" ? await t.navigate(s) : await t.navigate(s, { fromRouteId: a, ...c }));
    },
    [t, a]
  );
}
var ex = {};
function lC(t, a, o) {
  !a && !ex[t] && (ex[t] = !0, sr(!1, o));
}
b.memo(tD);
function tD({
  routes: t,
  manifest: a,
  future: o,
  state: i,
  isStatic: s,
  onError: c
}) {
  return rC(t, void 0, {
    manifest: a,
    state: i,
    isStatic: s,
    onError: c
  });
}
function iC(t) {
  Yt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function nD({
  basename: t = "/",
  children: a = null,
  location: o,
  navigationType: i = "POP",
  navigator: s,
  static: c = !1,
  useTransitions: d
}) {
  Yt(
    !eu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = t.replace(/^\/*/, "/"), m = b.useMemo(
    () => ({
      basename: p,
      navigator: s,
      static: c,
      useTransitions: d,
      future: {}
    }),
    [p, s, c, d]
  );
  typeof o == "string" && (o = bi(o));
  let {
    pathname: g = "/",
    search: y = "",
    hash: h = "",
    state: C = null,
    key: T = "default",
    mask: R
  } = o, x = b.useMemo(() => {
    let A = Dr(g, p);
    return A == null ? null : {
      location: {
        pathname: A,
        search: y,
        hash: h,
        state: C,
        key: T,
        mask: R
      },
      navigationType: i
    };
  }, [p, g, y, h, C, T, i, R]);
  return sr(
    x != null,
    `<Router basename="${p}"> is not able to match the URL "${g}${y}${h}" because it does not start with the basename, so the <Router> won't render anything.`
  ), x == null ? null : /* @__PURE__ */ b.createElement(Aa.Provider, { value: m }, /* @__PURE__ */ b.createElement(Js.Provider, { children: a, value: x }));
}
function aD({
  children: t,
  location: a
}) {
  return Fz(Km(t), a);
}
function Km(t, a = []) {
  let o = [];
  return b.Children.forEach(t, (i, s) => {
    if (!b.isValidElement(i))
      return;
    let c = [...a, s];
    if (i.type === b.Fragment) {
      o.push.apply(
        o,
        Km(i.props.children, c)
      );
      return;
    }
    Yt(
      i.type === iC,
      `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Yt(
      !i.props.index || !i.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: i.props.id || c.join("-"),
      caseSensitive: i.props.caseSensitive,
      element: i.props.element,
      Component: i.props.Component,
      index: i.props.index,
      path: i.props.path,
      middleware: i.props.middleware,
      loader: i.props.loader,
      action: i.props.action,
      hydrateFallbackElement: i.props.hydrateFallbackElement,
      HydrateFallback: i.props.HydrateFallback,
      errorElement: i.props.errorElement,
      ErrorBoundary: i.props.ErrorBoundary,
      hasErrorBoundary: i.props.hasErrorBoundary === !0 || i.props.ErrorBoundary != null || i.props.errorElement != null,
      shouldRevalidate: i.props.shouldRevalidate,
      handle: i.props.handle,
      lazy: i.props.lazy
    };
    i.props.children && (d.children = Km(
      i.props.children,
      c
    )), o.push(d);
  }), o;
}
var Uc = "get", Ic = "application/x-www-form-urlencoded";
function xf(t) {
  return typeof HTMLElement < "u" && t instanceof HTMLElement;
}
function rD(t) {
  return xf(t) && t.tagName.toLowerCase() === "button";
}
function oD(t) {
  return xf(t) && t.tagName.toLowerCase() === "form";
}
function lD(t) {
  return xf(t) && t.tagName.toLowerCase() === "input";
}
function iD(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function sD(t, a) {
  return t.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !iD(t);
}
var jc = null;
function uD() {
  if (jc === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), jc = !1;
    } catch {
      jc = !0;
    }
  return jc;
}
var cD = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function vm(t) {
  return t != null && !cD.has(t) ? (sr(
    !1,
    `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ic}"`
  ), null) : t;
}
function fD(t, a) {
  let o, i, s, c, d;
  if (oD(t)) {
    let p = t.getAttribute("action");
    i = p ? Dr(p, a) : null, o = t.getAttribute("method") || Uc, s = vm(t.getAttribute("enctype")) || Ic, c = new FormData(t);
  } else if (rD(t) || lD(t) && (t.type === "submit" || t.type === "image")) {
    let p = t.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = t.getAttribute("formaction") || p.getAttribute("action");
    if (i = m ? Dr(m, a) : null, o = t.getAttribute("formmethod") || p.getAttribute("method") || Uc, s = vm(t.getAttribute("formenctype")) || vm(p.getAttribute("enctype")) || Ic, c = new FormData(p, t), !uD()) {
      let { name: g, type: y, value: h } = t;
      if (y === "image") {
        let C = g ? `${g}.` : "";
        c.append(`${C}x`, "0"), c.append(`${C}y`, "0");
      } else g && c.append(g, h);
    }
  } else {
    if (xf(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = Uc, i = null, s = Ic, d = t;
  }
  return c && s === "text/plain" && (d = c, c = void 0), { action: i, method: o.toLowerCase(), encType: s, formData: c, body: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Wh(t, a) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(a);
}
function sC(t, a, o, i) {
  let s = typeof t == "string" ? new URL(
    t,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : t;
  return o ? s.pathname.endsWith("/") ? s.pathname = `${s.pathname}_.${i}` : s.pathname = `${s.pathname}.${i}` : s.pathname === "/" ? s.pathname = `_root.${i}` : a && Dr(s.pathname, a) === "/" ? s.pathname = `${mi(a)}/_root.${i}` : s.pathname = `${mi(s.pathname)}.${i}`, s;
}
async function dD(t, a) {
  if (t.id in a)
    return a[t.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      t.module
    );
    return a[t.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${t.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function pD(t) {
  return t == null ? !1 : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
}
async function mD(t, a, o) {
  let i = await Promise.all(
    t.map(async (s) => {
      let c = a.routes[s.route.id];
      if (c) {
        let d = await dD(c, o);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return vD(
    i.flat(1).filter(pD).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function tx(t, a, o, i, s, c) {
  let d = (m, g) => o[g] ? m.route.id !== o[g].route.id : !0, p = (m, g) => {
    var y;
    return (
      // param change, /users/123 -> /users/456
      o[g].pathname !== m.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((y = o[g].route.path) == null ? void 0 : y.endsWith("*")) && o[g].params["*"] !== m.params["*"]
    );
  };
  return c === "assets" ? a.filter(
    (m, g) => d(m, g) || p(m, g)
  ) : c === "data" ? a.filter((m, g) => {
    var h;
    let y = i.routes[m.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (d(m, g) || p(m, g))
      return !0;
    if (m.route.shouldRevalidate) {
      let C = m.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: ((h = o[0]) == null ? void 0 : h.params) || {},
        nextUrl: new URL(t, window.origin),
        nextParams: m.params,
        defaultShouldRevalidate: !0
      });
      if (typeof C == "boolean")
        return C;
    }
    return !0;
  }) : [];
}
function hD(t, a, { includeHydrateFallback: o } = {}) {
  return gD(
    t.map((i) => {
      let s = a.routes[i.route.id];
      if (!s) return [];
      let c = [s.module];
      return s.clientActionModule && (c = c.concat(s.clientActionModule)), s.clientLoaderModule && (c = c.concat(s.clientLoaderModule)), o && s.hydrateFallbackModule && (c = c.concat(s.hydrateFallbackModule)), s.imports && (c = c.concat(s.imports)), c;
    }).flat(1)
  );
}
function gD(t) {
  return [...new Set(t)];
}
function yD(t) {
  let a = {}, o = Object.keys(t).sort();
  for (let i of o)
    a[i] = t[i];
  return a;
}
function vD(t, a) {
  let o = /* @__PURE__ */ new Set();
  return new Set(a), t.reduce((i, s) => {
    let c = JSON.stringify(yD(s));
    return o.has(c) || (o.add(c), i.push({ key: c, link: s })), i;
  }, []);
}
function Qh() {
  let t = b.useContext(xi);
  return Wh(
    t,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), t;
}
function bD() {
  let t = b.useContext(bf);
  return Wh(
    t,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), t;
}
var Zh = b.createContext(void 0);
Zh.displayName = "FrameworkContext";
function Sf() {
  let t = b.useContext(Zh);
  return Wh(
    t,
    "You must render this element inside a <HydratedRouter> element"
  ), t;
}
function xD(t, a) {
  let o = b.useContext(Zh), [i, s] = b.useState(!1), [c, d] = b.useState(!1), { onFocus: p, onBlur: m, onMouseEnter: g, onMouseLeave: y, onTouchStart: h } = a, C = b.useRef(null);
  b.useEffect(() => {
    if (t === "render" && d(!0), t === "viewport") {
      let x = (z) => {
        z.forEach((N) => {
          d(N.isIntersecting);
        });
      }, A = new IntersectionObserver(x, { threshold: 0.5 });
      return C.current && A.observe(C.current), () => {
        A.disconnect();
      };
    }
  }, [t]), b.useEffect(() => {
    if (i) {
      let x = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(x);
      };
    }
  }, [i]);
  let T = () => {
    s(!0);
  }, R = () => {
    s(!1), d(!1);
  };
  return o ? t !== "intent" ? [c, C, {}] : [
    c,
    C,
    {
      onFocus: Es(p, T),
      onBlur: Es(m, R),
      onMouseEnter: Es(g, T),
      onMouseLeave: Es(y, R),
      onTouchStart: Es(h, T)
    }
  ] : [!1, C, {}];
}
function Es(t, a) {
  return (o) => {
    t && t(o), o.defaultPrevented || a(o);
  };
}
function SD({ page: t, ...a }) {
  let o = jz(), { nonce: i } = Sf(), { router: s } = Qh(), c = b.useMemo(
    () => US(s.routes, t, s.basename),
    [s.routes, t, s.basename]
  );
  return c ? (a.nonce == null && i && (a = { ...a, nonce: i }), o ? /* @__PURE__ */ b.createElement(ED, { page: t, matches: c, ...a }) : /* @__PURE__ */ b.createElement(TD, { page: t, matches: c, ...a })) : null;
}
function CD(t) {
  let { manifest: a, routeModules: o } = Sf(), [i, s] = b.useState([]);
  return b.useEffect(() => {
    let c = !1;
    return mD(t, a, o).then(
      (d) => {
        c || s(d);
      }
    ), () => {
      c = !0;
    };
  }, [t, a, o]), i;
}
function ED({
  page: t,
  matches: a,
  ...o
}) {
  let i = ur(), { future: s } = Sf(), { basename: c } = Qh(), d = b.useMemo(() => {
    if (t === i.pathname + i.search + i.hash)
      return [];
    let p = sC(
      t,
      c,
      s.v8_trailingSlashAwareDataRequests,
      "rsc"
    ), m = !1, g = [];
    for (let y of a)
      typeof y.route.shouldRevalidate == "function" ? m = !0 : g.push(y.route.id);
    return m && g.length > 0 && p.searchParams.set("_routes", g.join(",")), [p.pathname + p.search];
  }, [
    c,
    s.v8_trailingSlashAwareDataRequests,
    t,
    i,
    a
  ]);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, d.map((p) => /* @__PURE__ */ b.createElement("link", { key: p, rel: "prefetch", as: "fetch", href: p, ...o })));
}
function TD({
  page: t,
  matches: a,
  ...o
}) {
  let i = ur(), { future: s, manifest: c, routeModules: d } = Sf(), { basename: p } = Qh(), { loaderData: m, matches: g } = bD(), y = b.useMemo(
    () => tx(
      t,
      a,
      g,
      c,
      i,
      "data"
    ),
    [t, a, g, c, i]
  ), h = b.useMemo(
    () => tx(
      t,
      a,
      g,
      c,
      i,
      "assets"
    ),
    [t, a, g, c, i]
  ), C = b.useMemo(() => {
    if (t === i.pathname + i.search + i.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), A = !1;
    if (a.forEach((N) => {
      var M;
      let O = c.routes[N.route.id];
      !O || !O.hasLoader || (!y.some((D) => D.route.id === N.route.id) && N.route.id in m && ((M = d[N.route.id]) != null && M.shouldRevalidate) || O.hasClientLoader ? A = !0 : x.add(N.route.id));
    }), x.size === 0)
      return [];
    let z = sC(
      t,
      p,
      s.v8_trailingSlashAwareDataRequests,
      "data"
    );
    return A && x.size > 0 && z.searchParams.set(
      "_routes",
      a.filter((N) => x.has(N.route.id)).map((N) => N.route.id).join(",")
    ), [z.pathname + z.search];
  }, [
    p,
    s.v8_trailingSlashAwareDataRequests,
    m,
    i,
    c,
    y,
    a,
    t,
    d
  ]), T = b.useMemo(
    () => hD(h, c),
    [h, c]
  ), R = CD(h);
  return /* @__PURE__ */ b.createElement(b.Fragment, null, C.map((x) => /* @__PURE__ */ b.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...o })), T.map((x) => /* @__PURE__ */ b.createElement("link", { key: x, rel: "modulepreload", href: x, ...o })), R.map(({ key: x, link: A }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ b.createElement(
      "link",
      {
        key: x,
        nonce: o.nonce,
        ...A,
        crossOrigin: A.crossOrigin ?? o.crossOrigin
      }
    )
  )));
}
function RD(...t) {
  return (a) => {
    t.forEach((o) => {
      typeof o == "function" ? o(a) : o != null && (o.current = a);
    });
  };
}
var wD = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  wD && (window.__reactRouterVersion = // @ts-expect-error
  "7.18.4");
} catch {
}
function AD({
  basename: t,
  children: a,
  useTransitions: o,
  window: i
}) {
  let s = b.useRef();
  s.current == null && (s.current = oz({ window: i, v5Compat: !0 }));
  let c = s.current, [d, p] = b.useState({
    action: c.action,
    location: c.location
  }), m = b.useCallback(
    (g) => {
      o === !1 ? p(g) : b.startTransition(() => p(g));
    },
    [o]
  );
  return b.useLayoutEffect(() => c.listen(m), [c, m]), /* @__PURE__ */ b.createElement(
    nD,
    {
      basename: t,
      children: a,
      location: d.location,
      navigationType: d.action,
      navigator: c,
      useTransitions: o
    }
  );
}
var uC = b.forwardRef(
  function({
    onClick: a,
    discover: o = "render",
    prefetch: i = "none",
    relative: s,
    reloadDocument: c,
    replace: d,
    mask: p,
    state: m,
    target: g,
    to: y,
    preventScrollReset: h,
    viewTransition: C,
    defaultShouldRevalidate: T,
    ...R
  }, x) {
    let { basename: A, navigator: z, useTransitions: N } = b.useContext(Aa), O = typeof y == "string" && qh.test(y), M = XS(y, A);
    y = M.to;
    let D = Iz(y, { relative: s }), _ = ur(), L = null;
    if (p) {
      let X = Gh(
        p,
        [],
        _.mask ? _.mask.pathname : "/",
        !0
      );
      A !== "/" && (X.pathname = X.pathname === "/" ? A : Ha([A, X.pathname])), L = z.createHref(X);
    }
    let [k, F, E] = xD(
      i,
      R
    ), U = DD(y, {
      replace: d,
      mask: p,
      state: m,
      target: g,
      preventScrollReset: h,
      relative: s,
      viewTransition: C,
      defaultShouldRevalidate: T,
      useTransitions: N
    });
    function P(X) {
      a && a(X), X.defaultPrevented || U(X);
    }
    let J = !(M.isExternal || c), te = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ b.createElement(
        "a",
        {
          ...R,
          ...E,
          href: (J ? L : void 0) || M.absoluteURL || D,
          onClick: J ? P : a,
          ref: RD(x, F),
          target: g,
          "data-discover": !O && o === "render" ? "true" : void 0
        }
      )
    );
    return k && !O ? /* @__PURE__ */ b.createElement(b.Fragment, null, te, /* @__PURE__ */ b.createElement(SD, { page: D })) : te;
  }
);
uC.displayName = "Link";
var OD = b.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: s = !1,
    style: c,
    to: d,
    viewTransition: p,
    children: m,
    ...g
  }, y) {
    let h = tu(d, { relative: g.relative }), C = ur(), T = b.useContext(bf), { navigator: R, basename: x } = b.useContext(Aa), A = T != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    LD(h) && p === !0, z = R.encodeLocation ? R.encodeLocation(h).pathname : h.pathname, N = C.pathname, O = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
    o || (N = N.toLowerCase(), O = O ? O.toLowerCase() : null, z = z.toLowerCase()), O && x && (O = Dr(O, x) || O);
    const M = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
    let D = N === z || !s && N.startsWith(z) && N.charAt(M) === "/", _ = O != null && (O === z || !s && O.startsWith(z) && O.charAt(z.length) === "/"), L = {
      isActive: D,
      isPending: _,
      isTransitioning: A
    }, k = D ? a : void 0, F;
    typeof i == "function" ? F = i(L) : F = [
      i,
      D ? "active" : null,
      _ ? "pending" : null,
      A ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let E = typeof c == "function" ? c(L) : c;
    return /* @__PURE__ */ b.createElement(
      uC,
      {
        ...g,
        "aria-current": k,
        className: F,
        ref: y,
        style: E,
        to: d,
        viewTransition: p
      },
      typeof m == "function" ? m(L) : m
    );
  }
);
OD.displayName = "NavLink";
var MD = b.forwardRef(
  ({
    discover: t = "render",
    fetcherKey: a,
    navigate: o,
    reloadDocument: i,
    replace: s,
    state: c,
    method: d = Uc,
    action: p,
    onSubmit: m,
    relative: g,
    preventScrollReset: y,
    viewTransition: h,
    defaultShouldRevalidate: C,
    ...T
  }, R) => {
    let { useTransitions: x } = b.useContext(Aa), A = jD(), z = $D(p, { relative: g }), N = d.toLowerCase() === "get" ? "get" : "post", O = typeof p == "string" && qh.test(p), M = (D) => {
      if (m && m(D), D.defaultPrevented) return;
      D.preventDefault();
      let _ = D.nativeEvent.submitter, L = (_ == null ? void 0 : _.getAttribute("formmethod")) || d, k = () => A(_ || D.currentTarget, {
        fetcherKey: a,
        method: L,
        navigate: o,
        replace: s,
        state: c,
        relative: g,
        preventScrollReset: y,
        viewTransition: h,
        defaultShouldRevalidate: C
      });
      x && o !== !1 ? b.startTransition(() => k()) : k();
    };
    return /* @__PURE__ */ b.createElement(
      "form",
      {
        ref: R,
        method: N,
        action: z,
        onSubmit: i ? m : M,
        ...T,
        "data-discover": !O && t === "render" ? "true" : void 0
      }
    );
  }
);
MD.displayName = "Form";
function zD(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cC(t) {
  let a = b.useContext(xi);
  return Yt(a, zD(t)), a;
}
function DD(t, {
  target: a,
  replace: o,
  mask: i,
  state: s,
  preventScrollReset: c,
  relative: d,
  viewTransition: p,
  defaultShouldRevalidate: m,
  useTransitions: g
} = {}) {
  let y = aC(), h = ur(), C = tu(t, { relative: d });
  return b.useCallback(
    (T) => {
      if (sD(T, a)) {
        T.preventDefault();
        let R = o !== void 0 ? o : pi(h) === pi(C), x = () => y(t, {
          replace: R,
          mask: i,
          state: s,
          preventScrollReset: c,
          relative: d,
          viewTransition: p,
          defaultShouldRevalidate: m
        });
        g ? b.startTransition(() => x()) : x();
      }
    },
    [
      h,
      y,
      C,
      o,
      i,
      s,
      a,
      t,
      c,
      d,
      p,
      m,
      g
    ]
  );
}
var ND = 0, BD = () => `__${String(++ND)}__`;
function jD() {
  let { router: t } = cC(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = b.useContext(Aa), o = Zz(), i = t.fetch, s = t.navigate;
  return b.useCallback(
    async (c, d = {}) => {
      let { action: p, method: m, encType: g, formData: y, body: h } = fD(
        c,
        a
      );
      if (d.navigate === !1) {
        let C = d.fetcherKey || BD();
        await i(C, o, d.action || p, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: y,
          body: h,
          formMethod: d.method || m,
          formEncType: d.encType || g,
          flushSync: d.flushSync
        });
      } else
        await s(d.action || p, {
          defaultShouldRevalidate: d.defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: y,
          body: h,
          formMethod: d.method || m,
          formEncType: d.encType || g,
          replace: d.replace,
          state: d.state,
          fromRouteId: o,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition
        });
    },
    [i, s, a, o]
  );
}
function $D(t, { relative: a } = {}) {
  let { basename: o } = b.useContext(Aa), i = b.useContext(Br);
  Yt(i, "useFormAction must be used inside a RouteContext");
  let [s] = i.matches.slice(-1), c = { ...tu(t || ".", { relative: a }) }, d = ur();
  if (t == null) {
    c.search = d.search;
    let p = new URLSearchParams(c.search), m = p.getAll("index");
    if (m.some((y) => y === "")) {
      p.delete("index"), m.filter((h) => h).forEach((h) => p.append("index", h));
      let y = p.toString();
      c.search = y ? `?${y}` : "";
    }
  }
  return (!t || t === ".") && s.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (c.pathname = c.pathname === "/" ? o : Ha([o, c.pathname])), pi(c);
}
function LD(t, { relative: a } = {}) {
  let o = b.useContext(JS);
  Yt(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = cC(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = tu(t, { relative: a });
  if (!o.isTransitioning)
    return !1;
  let c = Dr(o.currentLocation.pathname, i) || o.currentLocation.pathname, d = Dr(o.nextLocation.pathname, i) || o.nextLocation.pathname;
  return Zc(s.pathname, d) != null || Zc(s.pathname, c) != null;
}
const _D = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), "Add"), nx = Et(/* @__PURE__ */ S.jsx("path", {
  d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
}), "FilterList"), kD = Et([/* @__PURE__ */ S.jsx("path", {
  d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
}, "0"), /* @__PURE__ */ S.jsx("path", {
  d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
}, "1")], "DoubleArrow");
var bm = { exports: {} }, Ts = {}, xm = { exports: {} }, Sm = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ax;
function HD() {
  return ax || (ax = 1, (function(t) {
    function a(j, Y) {
      var W = j.length;
      j.push(Y);
      e: for (; 0 < W; ) {
        var G = W - 1 >>> 1, de = j[G];
        if (0 < s(de, Y))
          j[G] = Y, j[W] = de, W = G;
        else break e;
      }
    }
    function o(j) {
      return j.length === 0 ? null : j[0];
    }
    function i(j) {
      if (j.length === 0) return null;
      var Y = j[0], W = j.pop();
      if (W !== Y) {
        j[0] = W;
        e: for (var G = 0, de = j.length, xe = de >>> 1; G < xe; ) {
          var Ne = 2 * (G + 1) - 1, Me = j[Ne], B = Ne + 1, Z = j[B];
          if (0 > s(Me, W))
            B < de && 0 > s(Z, Me) ? (j[G] = Z, j[B] = W, G = B) : (j[G] = Me, j[Ne] = W, G = Ne);
          else if (B < de && 0 > s(Z, W))
            j[G] = Z, j[B] = W, G = B;
          else break e;
        }
      }
      return Y;
    }
    function s(j, Y) {
      var W = j.sortIndex - Y.sortIndex;
      return W !== 0 ? W : j.id - Y.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      t.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, p = d.now();
      t.unstable_now = function() {
        return d.now() - p;
      };
    }
    var m = [], g = [], y = 1, h = null, C = 3, T = !1, R = !1, x = !1, A = !1, z = typeof setTimeout == "function" ? setTimeout : null, N = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    function M(j) {
      for (var Y = o(g); Y !== null; ) {
        if (Y.callback === null) i(g);
        else if (Y.startTime <= j)
          i(g), Y.sortIndex = Y.expirationTime, a(m, Y);
        else break;
        Y = o(g);
      }
    }
    function D(j) {
      if (x = !1, M(j), !R)
        if (o(m) !== null)
          R = !0, _ || (_ = !0, P());
        else {
          var Y = o(g);
          Y !== null && X(D, Y.startTime - j);
        }
    }
    var _ = !1, L = -1, k = 5, F = -1;
    function E() {
      return A ? !0 : !(t.unstable_now() - F < k);
    }
    function U() {
      if (A = !1, _) {
        var j = t.unstable_now();
        F = j;
        var Y = !0;
        try {
          e: {
            R = !1, x && (x = !1, N(L), L = -1), T = !0;
            var W = C;
            try {
              t: {
                for (M(j), h = o(m); h !== null && !(h.expirationTime > j && E()); ) {
                  var G = h.callback;
                  if (typeof G == "function") {
                    h.callback = null, C = h.priorityLevel;
                    var de = G(
                      h.expirationTime <= j
                    );
                    if (j = t.unstable_now(), typeof de == "function") {
                      h.callback = de, M(j), Y = !0;
                      break t;
                    }
                    h === o(m) && i(m), M(j);
                  } else i(m);
                  h = o(m);
                }
                if (h !== null) Y = !0;
                else {
                  var xe = o(g);
                  xe !== null && X(
                    D,
                    xe.startTime - j
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              h = null, C = W, T = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? P() : _ = !1;
        }
      }
    }
    var P;
    if (typeof O == "function")
      P = function() {
        O(U);
      };
    else if (typeof MessageChannel < "u") {
      var J = new MessageChannel(), te = J.port2;
      J.port1.onmessage = U, P = function() {
        te.postMessage(null);
      };
    } else
      P = function() {
        z(U, 0);
      };
    function X(j, Y) {
      L = z(function() {
        j(t.unstable_now());
      }, Y);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(j) {
      j.callback = null;
    }, t.unstable_forceFrameRate = function(j) {
      0 > j || 125 < j ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : k = 0 < j ? Math.floor(1e3 / j) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, t.unstable_next = function(j) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = C;
      }
      var W = C;
      C = Y;
      try {
        return j();
      } finally {
        C = W;
      }
    }, t.unstable_requestPaint = function() {
      A = !0;
    }, t.unstable_runWithPriority = function(j, Y) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var W = C;
      C = j;
      try {
        return Y();
      } finally {
        C = W;
      }
    }, t.unstable_scheduleCallback = function(j, Y, W) {
      var G = t.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? G + W : G) : W = G, j) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return de = W + de, j = {
        id: y++,
        callback: Y,
        priorityLevel: j,
        startTime: W,
        expirationTime: de,
        sortIndex: -1
      }, W > G ? (j.sortIndex = W, a(g, j), o(m) === null && j === o(g) && (x ? (N(L), L = -1) : x = !0, X(D, W - G))) : (j.sortIndex = de, a(m, j), R || T || (R = !0, _ || (_ = !0, P()))), j;
    }, t.unstable_shouldYield = E, t.unstable_wrapCallback = function(j) {
      var Y = C;
      return function() {
        var W = C;
        C = Y;
        try {
          return j.apply(this, arguments);
        } finally {
          C = W;
        }
      };
    };
  })(Sm)), Sm;
}
var rx;
function UD() {
  return rx || (rx = 1, xm.exports = HD()), xm.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ox;
function ID() {
  if (ox) return Ts;
  ox = 1;
  var t = UD(), a = Qm(), o = uS();
  function i(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    for (var n = e, r = n; r && !r.alternate; )
      n = r, (n.flags & 4098) !== 0 && (e = n.return), r = n.return;
    for (; n.return; ) n = n.return;
    return n.tag === 3 ? e : null;
  }
  function d(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(i(188));
  }
  function g(e) {
    var n = e.alternate;
    if (!n) {
      if (n = c(e), n === null) throw Error(i(188));
      return n !== e ? null : e;
    }
    for (var r = e, l = n; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (l = u.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return m(u), e;
          if (f === l) return m(u), n;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== l.return) r = u, l = f;
      else {
        for (var v = !1, w = u.child; w; ) {
          if (w === r) {
            v = !0, r = u, l = f;
            break;
          }
          if (w === l) {
            v = !0, l = u, r = f;
            break;
          }
          w = w.sibling;
        }
        if (!v) {
          for (w = f.child; w; ) {
            if (w === r) {
              v = !0, r = f, l = u;
              break;
            }
            if (w === l) {
              v = !0, l = f, r = u;
              break;
            }
            w = w.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (r.alternate !== l) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : n;
  }
  function y(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = y(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  function h(e, n, r, l, u, f) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && r(e, l, u, f) || (e.tag !== 22 || e.memoizedState === null) && (n || e.tag !== 5 && e.tag !== 27) && h(
        e.child,
        n,
        r,
        l,
        u,
        f
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function C(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function T(e) {
    var n = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (n = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return n;
  }
  function R(e) {
    var n = [null, null], r = C(e);
    return r === null || x(
      n,
      e,
      r.child,
      { foundSelf: !1 }
    ), n;
  }
  function x(e, n, r, l) {
    for (; r !== null; ) {
      if (r === n) l.foundSelf = !0;
      else if (r.tag === 5 || r.tag === 27 || r.tag === 6) {
        if (l.foundSelf) return e[1] = r, !0;
        e[0] = r;
      } else if ((r.tag !== 22 || r.memoizedState === null) && x(
        e,
        n,
        r.child,
        l
      ))
        return !0;
      r = r.sibling;
    }
    return !1;
  }
  function A(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(i(559));
    }
  }
  var z = null, N = null;
  function O(e, n, r) {
    return e === r ? !0 : e === n ? (z = e, !0) : !1;
  }
  function M(e, n, r) {
    return e === r ? (N = e, !1) : e === n ? (N !== null && (z = e), !0) : !1;
  }
  function D(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function _(e, n, r) {
    for (var l = 0, u = e; u; u = r(u)) l++;
    u = 0;
    for (var f = n; f; f = r(f)) u++;
    for (; 0 < l - u; ) e = r(e), l--;
    for (; 0 < u - l; ) n = r(n), u--;
    for (; l--; ) {
      if (e === n || n !== null && e === n.alternate)
        return e;
      e = r(e), n = r(n);
    }
    return null;
  }
  var L = Object.assign, k = Symbol.for("react.element"), F = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), X = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), xe = Symbol.for("react.activity"), Ne = Symbol.for("react.legacy_hidden"), Me = Symbol.for("react.memo_cache_sentinel"), B = Symbol.for("react.view_transition"), Z = Symbol.for("react.recoverable"), ne = Symbol.iterator;
  function fe(e) {
    return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var me = Symbol.for("react.client.reference");
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === me ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case J:
        return "Profiler";
      case P:
        return "StrictMode";
      case Y:
        return "Suspense";
      case W:
        return "SuspenseList";
      case xe:
        return "Activity";
      case B:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case X:
          return e.displayName || "Context";
        case te:
          return (e._context.displayName || "Context") + ".Consumer";
        case j:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case G:
          return n = e.displayName || null, n !== null ? n : ve(e.type) || "Memo";
        case de:
          n = e._payload, e = e._init;
          try {
            return ve(e(n));
          } catch {
          }
      }
    return null;
  }
  var he = Array.isArray, se = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _e = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Be = [], $e = -1;
  function lt(e) {
    return { current: e };
  }
  function ye(e) {
    0 > $e || (e.current = Be[$e], Be[$e] = null, $e--);
  }
  function we(e, n) {
    $e++, Be[$e] = e.current, e.current = n;
  }
  var De = lt(null), Ge = lt(null), Ce = lt(null), ge = lt(null);
  function Xe(e, n) {
    switch (we(Ce, n), we(Ge, e), we(De, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? b0(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = b0(n), e = x0(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ye(De), we(De, e);
  }
  function Ye() {
    ye(De), ye(Ge), ye(Ce);
  }
  function Tt(e) {
    var n = e.memoizedState;
    n !== null && (Vl._currentValue = n.memoizedState, we(ge, e)), n = De.current;
    var r = x0(n, e.type);
    n !== r && (we(Ge, e), we(De, r));
  }
  function Bt(e) {
    Ge.current === e && (ye(De), ye(Ge)), ge.current === e && (ye(ge), Vl._currentValue = _e);
  }
  var ht, Ze;
  function He(e) {
    if (ht === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        ht = n && n[1] || "", Ze = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ht + e + Ze;
  }
  var Ue = !1;
  function Fe(e, n) {
    if (!e || Ue) return "";
    Ue = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var le = function() {
                throw Error();
              };
              if (Object.defineProperty(le.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(le, []);
                } catch (Se) {
                  var I = Se;
                }
                Reflect.construct(e, [], le);
              } else {
                try {
                  le.call();
                } catch (Se) {
                  I = Se;
                }
                le = !1;
                try {
                  var Q = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), le = !0, new e();
                } finally {
                  le && (Q !== void 0 ? Object.defineProperty(e.prototype, "props", Q) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (Se) {
                I = Se;
              }
              (le = e()) && typeof le.catch == "function" && le.catch(function() {
              });
            }
          } catch (Se) {
            if (Se && I && typeof Se.stack == "string")
              return [Se.stack, I.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = l.DetermineComponentFrameRoot(), v = f[0], w = f[1];
      if (v && w) {
        var $ = v.split(`
`), q = w.split(`
`);
        for (u = l = 0; l < $.length && !$[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < q.length && !q[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === $.length || u === q.length)
          for (l = $.length - 1, u = q.length - 1; 1 <= l && 0 <= u && $[l] !== q[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if ($[l] !== q[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || $[l] !== q[u]) {
                  var ee = `
` + $[l].replace(" at new ", " at ");
                  return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), ee;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Ue = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? He(r) : "";
  }
  function _t(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return He(e.type);
      case 16:
        return He("Lazy");
      case 13:
        return e.child !== n && n !== null ? He("Suspense Fallback") : He("Suspense");
      case 19:
        return He("SuspenseList");
      case 0:
      case 15:
        return Fe(e.type, !1);
      case 11:
        return Fe(e.type.render, !1);
      case 1:
        return Fe(e.type, !0);
      case 31:
        return He("Activity");
      case 30:
        return He("ViewTransition");
      default:
        return "";
    }
  }
  function jt(e) {
    try {
      var n = "", r = null;
      do
        n += _t(e, r), r = e, e = e.return;
      while (e);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Ia = Object.prototype.hasOwnProperty, ze = t.unstable_scheduleCallback, Je = t.unstable_cancelCallback, Ft = t.unstable_shouldYield, jn = t.unstable_requestPaint, tn = t.unstable_now, Gn = t.unstable_getCurrentPriorityLevel, Pa = t.unstable_ImmediatePriority, Oa = t.unstable_UserBlockingPriority, Ma = t.unstable_NormalPriority, sa = t.unstable_LowPriority, So = t.unstable_IdlePriority, rl = t.log, cr = t.unstable_setDisableYieldValue, fr = null, mn = null;
  function Cn(e) {
    if (typeof rl == "function" && cr(e), mn && typeof mn.setStrictMode == "function")
      try {
        mn.setStrictMode(fr, e);
      } catch {
      }
  }
  var sn = Math.clz32 ? Math.clz32 : Ci, Co = Math.log, Si = Math.LN2;
  function Ci(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Co(e) / Si | 0) | 0;
  }
  var jr = 256, $r = 262144, Fa = 4194304;
  function Ut(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vt(e, n, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, f = e.suspendedLanes, v = e.pingedLanes;
    e = e.warmLanes;
    var w = l & 134217727;
    return w !== 0 ? (l = w & ~f, l !== 0 ? u = Ut(l) : (v &= w, v !== 0 ? u = Ut(v) : r || (r = w & ~e, r !== 0 && (u = Ut(r))))) : (w = l & ~f, w !== 0 ? u = Ut(w) : v !== 0 ? u = Ut(v) : r || (r = l & ~e, r !== 0 && (u = Ut(r)))), u === 0 ? 0 : n !== 0 && n !== u && (n & f) === 0 && (f = u & -u, r = n & -n, f >= r || f === 32 && (r & 4194048) !== 0) ? n : u;
  }
  function En(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Eo(e, n) {
    (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var l = 31 - sn(r), u = 1 << l;
        n |= e[l], r &= ~u;
      }
    return n;
  }
  function ie(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function re() {
    var e = Fa;
    return Fa <<= 1, (Fa & 62914560) === 0 && (Fa = 4194304), e;
  }
  function Ee(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function Pe(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function ot(e, n, r, l, u, f) {
    var v = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var w = e.entanglements, $ = e.expirationTimes, q = e.hiddenUpdates;
    for (r = v & ~r; 0 < r; ) {
      var ee = 31 - sn(r), le = 1 << ee;
      w[ee] = 0, $[ee] = -1;
      var I = q[ee];
      if (I !== null)
        for (q[ee] = null, ee = 0; ee < I.length; ee++) {
          var Q = I[ee];
          Q !== null && (Q.lane &= -536870913);
        }
      r &= ~le;
    }
    l !== 0 && xt(e, l, 0), f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(v & ~n));
  }
  function xt(e, n, r) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - sn(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function qt(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r; ) {
      var l = 31 - sn(r), u = 1 << l;
      u & n | e[l] & n && (e[l] |= n), r &= ~u;
    }
  }
  function On(e, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : To(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function To(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ei(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ti() {
    var e = ue.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ab(e.type));
  }
  function Ro(e, n) {
    var r = ue.p;
    try {
      return ue.p = e, n();
    } finally {
      ue.p = r;
    }
  }
  var $n = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + $n, kt = "__reactProps$" + $n, Mn = "__reactContainer$" + $n, Lr = "__reactEvents$" + $n, Cf = "__reactListeners$" + $n, dC = "__reactHandles$" + $n, Jh = "__reactResources$" + $n, Ri = "__reactMarker$" + $n, nu = "__reactLoad$" + $n;
  function au(e) {
    delete e[Ie], delete e[kt], delete e[Cf], delete e[dC];
  }
  function wo(e) {
    var n;
    if (n = e[Ie]) return n;
    for (var r = e.parentNode; r; ) {
      if (n = r[Mn] || r[Ie]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
          for (e = _0(e); e !== null; ) {
            if (r = e[Ie]) return r;
            e = _0(e);
          }
        return n;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function ol(e) {
    if (e = e[Ie] || e[Mn]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function wi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ll(e) {
    var n = e[Jh];
    return n || (n = e[Jh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function cn(e) {
    e[Ri] = !0;
  }
  function eg(e) {
    e[nu] = void 0;
  }
  var tg = /* @__PURE__ */ new Set(), ng = {};
  function Ao(e, n) {
    il(e, n), il(e + "Capture", n);
  }
  function il(e, n) {
    for (ng[e] = n, e = 0; e < n.length; e++)
      tg.add(n[e]);
  }
  var pC = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ag = {}, rg = {};
  function mC(e) {
    return Ia.call(rg, e) ? !0 : Ia.call(ag, e) ? !1 : pC.test(e) ? rg[e] = !0 : (ag[e] = !0, !1);
  }
  var gt = !1;
  function og() {
    var e = gt;
    return gt = !1, e;
  }
  function ru(e, n, r) {
    if (mC(n))
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, r);
      }
  }
  function ou(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, r);
    }
  }
  function dr(e, n, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, l);
    }
  }
  function Yn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function lg(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function hC(e, n, r) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    );
    if (!e.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, f = l.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(v) {
          r = "" + v, f.call(this, v);
        }
      }), Object.defineProperty(e, n, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(v) {
          r = "" + v;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function Ef(e) {
    if (!e._valueTracker) {
      var n = lg(e) ? "checked" : "value";
      e._valueTracker = hC(
        e,
        n,
        "" + e[n]
      );
    }
  }
  function ig(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), l = "";
    return e && (l = lg(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (n.setValue(e), !0) : !1;
  }
  var gC = /[\n"\\]/g;
  function ua(e) {
    return e.replace(
      gC,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Tf(e, n, r, l, u, f, v, w) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), n != null ? v === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Yn(n)) : e.value !== "" + Yn(n) && (e.value = "" + Yn(n)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), n != null ? v === "number" && e.value == n ? Rf(e, Yn(e.value)) : Rf(e, Yn(n)) : r != null ? Rf(e, Yn(r)) : l != null && e.removeAttribute("value"), u == null && f != null && (e.defaultChecked = !!f), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + Yn(w) : e.removeAttribute("name");
  }
  function sg(e, n, r, l, u, f, v, w) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), n != null || r != null) {
      if (!(f !== "submit" && f !== "reset" || n != null)) {
        Ef(e);
        return;
      }
      r = r != null ? "" + Yn(r) : "", n = n != null ? "" + Yn(n) : r, w || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = w ? e.checked : !!l, e.defaultChecked = !!l, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v), Ef(e);
  }
  function Rf(e, n) {
    e.defaultValue !== "" + n && (e.defaultValue = "" + n);
  }
  function sl(e, n, r, l) {
    if (e = e.options, n) {
      n = {};
      for (var u = 0; u < r.length; u++)
        n["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        u = n.hasOwnProperty("$" + e[r].value), e[r].selected !== u && (e[r].selected = u), u && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Yn(r), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function ug(e, n, r) {
    if (n != null && (n = "" + Yn(n), n !== e.value && (e.value = n), r == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + Yn(r) : "";
  }
  function cg(e, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(i(92));
        if (he(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), n = r;
    }
    r = Yn(n), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), Ef(e);
  }
  function ul(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var yC = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function fg(e, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, r) : typeof r != "number" || r === 0 || yC.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px";
  }
  function dg(e, n, r) {
    if (n != null && typeof n != "object")
      throw Error(i(62));
    if (e = e.style, r != null) {
      for (var l in r)
        !r.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", gt = !0);
      for (var u in n)
        l = n[u], n.hasOwnProperty(u) && r[u] !== l && (fg(e, u, l), gt = !0);
    } else
      for (var f in n)
        n.hasOwnProperty(f) && fg(e, f, n[f]);
  }
  function wf(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var vC = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), bC = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function lu(e) {
    return bC.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Va() {
  }
  var Af = null;
  function Of(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var cl = null, fl = null;
  function pg(e) {
    var n = ol(e);
    if (n && (e = n.stateNode)) {
      var r = e[kt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Tf(
            e,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), n = r.name, r.type === "radio" && n != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + ua(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < r.length; n++) {
              var l = r[n];
              if (l !== e && l.form === e.form) {
                var u = l[kt] || null;
                if (!u) throw Error(i(90));
                Tf(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              l = r[n], l.form === e.form && ig(l);
          }
          break e;
        case "textarea":
          ug(e, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && sl(e, !!r.multiple, n, !1);
      }
    }
  }
  var Mf = !1;
  function mg(e, n, r) {
    if (Mf) return e(n, r);
    Mf = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Mf = !1, (cl !== null || fl !== null) && (lc(), cl && (n = cl, e = fl, fl = cl = null, pg(n), e)))
        for (n = 0; n < e.length; n++) pg(e[n]);
    }
  }
  function Ai(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[kt] || null;
    if (l === null) return null;
    r = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function")
      throw Error(
        i(231, n, typeof r)
      );
    return r;
  }
  var pr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zf = !1;
  if (pr)
    try {
      var Oi = {};
      Object.defineProperty(Oi, "passive", {
        get: function() {
          zf = !0;
        }
      }), window.addEventListener("test", Oi, Oi), window.removeEventListener("test", Oi, Oi);
    } catch {
      zf = !1;
    }
  var _r = null, Df = null, iu = null;
  function hg() {
    if (iu) return iu;
    var e, n = Df, r = n.length, l, u = "value" in _r ? _r.value : _r.textContent, f = u.length;
    for (e = 0; e < r && n[e] === u[e]; e++) ;
    var v = r - e;
    for (l = 1; l <= v && n[r - l] === u[f - l]; l++) ;
    return iu = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function su(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function uu() {
    return !0;
  }
  function gg() {
    return !1;
  }
  function zn(e) {
    function n(r, l, u, f, v) {
      this._reactName = r, this._targetInst = u, this.type = l, this.nativeEvent = f, this.target = v, this.currentTarget = null;
      for (var w in e)
        e.hasOwnProperty(w) && (r = e[w], this[w] = r ? r(f) : f[w]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? uu : gg, this.isPropagationStopped = gg, this;
    }
    return L(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = uu);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = uu);
      },
      persist: function() {
      },
      isPersistent: uu
    }), n;
  }
  var kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, cu = zn(kr), Mi = L({}, kr, { view: 0, detail: 0 }), xC = zn(Mi), Nf, Bf, zi, fu = L({}, Mi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $f,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== zi && (zi && e.type === "mousemove" ? (Nf = e.screenX - zi.screenX, Bf = e.screenY - zi.screenY) : Bf = Nf = 0, zi = e), Nf);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Bf;
    }
  }), yg = zn(fu), SC = L({}, fu, { dataTransfer: 0 }), CC = zn(SC), EC = L({}, Mi, { relatedTarget: 0 }), jf = zn(EC), TC = L({}, kr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), RC = zn(TC), wC = L({}, kr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), AC = zn(wC), OC = L({}, kr, { data: 0 }), vg = zn(OC), MC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, zC = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, DC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function NC(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = DC[e]) ? !!n[e] : !1;
  }
  function $f() {
    return NC;
  }
  var BC = L({}, Mi, {
    key: function(e) {
      if (e.key) {
        var n = MC[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = su(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zC[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $f,
    charCode: function(e) {
      return e.type === "keypress" ? su(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? su(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), jC = zn(BC), $C = L({}, fu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), bg = zn($C), LC = L({}, kr, { submitter: 0 }), _C = zn(LC), kC = L({}, Mi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $f
  }), HC = zn(kC), UC = L({}, kr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), IC = zn(UC), PC = L({}, fu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), FC = zn(PC), VC = L({}, kr, {
    newState: 0,
    oldState: 0,
    source: 0
  }), qC = zn(VC), GC = [9, 13, 27, 32], Lf = pr && "CompositionEvent" in window, Di = null;
  pr && "documentMode" in document && (Di = document.documentMode);
  var YC = pr && "TextEvent" in window && !Di, xg = pr && (!Lf || Di && 8 < Di && 11 >= Di), Sg = " ", Cg = !1;
  function Eg(e, n) {
    switch (e) {
      case "keyup":
        return GC.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Tg(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dl = !1;
  function XC(e, n) {
    switch (e) {
      case "compositionend":
        return Tg(n);
      case "keypress":
        return n.which !== 32 ? null : (Cg = !0, Sg);
      case "textInput":
        return e = n.data, e === Sg && Cg ? null : e;
      default:
        return null;
    }
  }
  function KC(e, n) {
    if (dl)
      return e === "compositionend" || !Lf && Eg(e, n) ? (e = hg(), iu = Df = _r = null, dl = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return xg && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var WC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Rg(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!WC[e.type] : n === "textarea";
  }
  function wg(e, n, r, l) {
    cl ? fl ? fl.push(l) : fl = [l] : cl = l, n = dc(n, "onChange"), 0 < n.length && (r = new cu(
      "onChange",
      "change",
      null,
      r,
      l
    ), e.push({ event: r, listeners: n }));
  }
  var Ni = null, Bi = null;
  function QC(e) {
    p0(e, 0);
  }
  function du(e) {
    var n = wi(e);
    if (ig(n)) return e;
  }
  function Ag(e, n) {
    if (e === "change") return n;
  }
  var Og = !1;
  if (pr) {
    var _f;
    if (pr) {
      var kf = "oninput" in document;
      if (!kf) {
        var Mg = document.createElement("div");
        Mg.setAttribute("oninput", "return;"), kf = typeof Mg.oninput == "function";
      }
      _f = kf;
    } else _f = !1;
    Og = _f && (!document.documentMode || 9 < document.documentMode);
  }
  function zg() {
    Ni && (Ni.detachEvent("onpropertychange", Dg), Bi = Ni = null);
  }
  function Dg(e) {
    if (e.propertyName === "value" && du(Bi)) {
      var n = [];
      wg(
        n,
        Bi,
        e,
        Of(e)
      ), mg(QC, n);
    }
  }
  function ZC(e, n, r) {
    e === "focusin" ? (zg(), Ni = n, Bi = r, Ni.attachEvent("onpropertychange", Dg)) : e === "focusout" && zg();
  }
  function JC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return du(Bi);
  }
  function e2(e, n) {
    if (e === "click") return du(n);
  }
  function t2(e, n) {
    if (e === "input" || e === "change")
      return du(n);
  }
  function n2(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var Xn = typeof Object.is == "function" ? Object.is : n2;
  function ji(e, n) {
    if (Xn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var r = Object.keys(e), l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!Ia.call(n, u) || !Xn(e[u], n[u]))
        return !1;
    }
    return !0;
  }
  function Hf(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ng(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bg(e, n) {
    var r = Ng(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (l = e + r.textContent.length, e <= n && l >= n)
          return { node: r, offset: n - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Ng(r);
    }
  }
  function jg(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? jg(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function $g(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Hf(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = Hf(e.document);
    }
    return n;
  }
  function Uf(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var a2 = pr && "documentMode" in document && 11 >= document.documentMode, pl = null, If = null, $i = null, Pf = !1;
  function Lg(e, n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Pf || pl == null || pl !== Hf(l) || (l = pl, "selectionStart" in l && Uf(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), $i && ji($i, l) || ($i = l, l = dc(If, "onSelect"), 0 < l.length && (n = new cu(
      "onSelect",
      "select",
      null,
      n,
      r
    ), e.push({ event: n, listeners: l }), n.target = pl)));
  }
  function Oo(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
  }
  var ml = {
    animationend: Oo("Animation", "AnimationEnd"),
    animationiteration: Oo("Animation", "AnimationIteration"),
    animationstart: Oo("Animation", "AnimationStart"),
    transitionrun: Oo("Transition", "TransitionRun"),
    transitionstart: Oo("Transition", "TransitionStart"),
    transitioncancel: Oo("Transition", "TransitionCancel"),
    transitionend: Oo("Transition", "TransitionEnd")
  }, Ff = {}, _g = {};
  pr && (_g = document.createElement("div").style, "AnimationEvent" in window || (delete ml.animationend.animation, delete ml.animationiteration.animation, delete ml.animationstart.animation), "TransitionEvent" in window || delete ml.transitionend.transition);
  function Mo(e) {
    if (Ff[e]) return Ff[e];
    if (!ml[e]) return e;
    var n = ml[e], r;
    for (r in n)
      if (n.hasOwnProperty(r) && r in _g)
        return Ff[e] = n[r];
    return e;
  }
  var kg = Mo("animationend"), Hg = Mo("animationiteration"), Ug = Mo("animationstart"), r2 = Mo("transitionrun"), o2 = Mo("transitionstart"), l2 = Mo("transitioncancel"), Ig = Mo("transitionend"), Pg = /* @__PURE__ */ new Map(), Vf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Vf.push("scrollEnd");
  function za(e, n) {
    Pg.set(e, n), Ao(n, [e]);
  }
  var i2 = 0;
  function mr(e, n) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (n.autoName !== null) return n.autoName;
    e = ja.identifierPrefix;
    var r = i2++;
    return e = "_" + e + "t_" + r.toString(32) + "_", n.autoName = e;
  }
  function Fg(e) {
    if (e == null || typeof e == "string")
      return e;
    var n = null, r = jl;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = e[r[l]];
        if (u != null) {
          if (u === "none") return "none";
          n = n == null ? u : n + (" " + u);
        }
      }
    return n ?? e.default;
  }
  function hr(e, n) {
    return e = Fg(e), n = Fg(n), n == null ? e === "auto" ? null : e : n === "auto" ? null : n;
  }
  var pu = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, ca = [], hl = 0, qf = 0;
  function mu() {
    for (var e = hl, n = qf = hl = 0; n < e; ) {
      var r = ca[n];
      ca[n++] = null;
      var l = ca[n];
      ca[n++] = null;
      var u = ca[n];
      ca[n++] = null;
      var f = ca[n];
      if (ca[n++] = null, l !== null && u !== null) {
        var v = l.pending;
        v === null ? u.next = u : (u.next = v.next, v.next = u), l.pending = u;
      }
      f !== 0 && Vg(r, u, f);
    }
  }
  function hu(e, n, r, l) {
    ca[hl++] = e, ca[hl++] = n, ca[hl++] = r, ca[hl++] = l, qf |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Gf(e, n, r, l) {
    return hu(e, n, r, l), gu(e);
  }
  function zo(e, n) {
    return hu(e, null, null, n), gu(e);
  }
  function Vg(e, n, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var u = !1, f = e.return; f !== null; )
      f.childLanes |= r, l = f.alternate, l !== null && (l.childLanes |= r), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (u = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, u && n !== null && (u = 31 - sn(r), e = f.hiddenUpdates, l = e[u], l === null ? e[u] = [n] : l.push(n), n.lane = r | 536870912), f) : null;
  }
  function gu(e) {
    if (50 < as)
      throw as = 0, oc = null, Error(i(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var gl = {};
  function s2(e, n, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ln(e, n, r, l) {
    return new s2(e, n, r, l);
  }
  function Yf(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function gr(e, n) {
    var r = e.alternate;
    return r === null ? (r = Ln(
      e.tag,
      n,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 1206910976, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function qg(e, n) {
    e.flags &= 1206910978;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function yu(e, n, r, l, u, f) {
    var v = 0;
    if (l = e, typeof l == "function") Yf(l) && (v = 1);
    else if (typeof l == "string")
      v = LE(
        e,
        r,
        De.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case xe:
          return e = Ln(31, r, n, u), e.elementType = xe, e.lanes = f, e;
        case U:
          return Do(r.children, u, f, n);
        case P:
          v = 8, u |= 24;
          break;
        case J:
          return e = Ln(12, r, n, u | 2), e.elementType = J, e.lanes = f, e;
        case Y:
          return e = Ln(13, r, n, u), e.elementType = Y, e.lanes = f, e;
        case W:
          return e = Ln(19, r, n, u), e.elementType = W, e.lanes = f, e;
        case Ne:
        case B:
          return e = u | 32, e = Ln(30, r, n, e), e.elementType = B, e.lanes = f, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case X:
                v = 10;
                break e;
              case te:
                v = 9;
                break e;
              case j:
                v = 11;
                break e;
              case G:
                v = 14;
                break e;
              case de:
                v = 16, l = null;
                break e;
            }
          v = 29, r = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = Ln(v, r, n, u), n.elementType = e, n.type = l, n.lanes = f, n;
  }
  function Do(e, n, r, l) {
    return e = Ln(7, e, l, n), e.lanes = r, e;
  }
  function Xf(e, n, r) {
    return e = Ln(6, e, null, n), e.lanes = r, e;
  }
  function Gg(e) {
    var n = Ln(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function Kf(e, n, r) {
    return n = Ln(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = r, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var Yg = /* @__PURE__ */ new WeakMap();
  function fa(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = Yg.get(e);
      return r !== void 0 ? r : (n = {
        value: e,
        source: n,
        stack: jt(n)
      }, Yg.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: jt(n)
    };
  }
  var yl = [], vl = 0, vu = null, Li = 0, da = [], pa = 0, Hr = null, qa = 1, Ga = "";
  function yr(e, n) {
    yl[vl++] = Li, yl[vl++] = vu, vu = e, Li = n;
  }
  function Xg(e, n, r) {
    da[pa++] = qa, da[pa++] = Ga, da[pa++] = Hr, Hr = e;
    var l = qa;
    e = Ga;
    var u = 32 - sn(l) - 1;
    l &= ~(1 << u), r += 1;
    var f = 32 - sn(n) + u;
    if (30 < f) {
      var v = u - u % 5;
      f = (l & (1 << v) - 1).toString(32), l >>= v, u -= v, qa = 1 << 32 - sn(n) + u | r << u | l, Ga = f + e;
    } else
      qa = 1 << f | r << u | l, Ga = e;
  }
  function bu(e) {
    e.return !== null && (yr(e, 1), Xg(e, 1, 0));
  }
  function Wf(e) {
    for (; e === vu; )
      vu = yl[--vl], yl[vl] = null, Li = yl[--vl], yl[vl] = null;
    for (; e === Hr; )
      Hr = da[--pa], da[pa] = null, Ga = da[--pa], da[pa] = null, qa = da[--pa], da[pa] = null;
  }
  function Kg(e, n) {
    da[pa++] = qa, da[pa++] = Ga, da[pa++] = Hr, qa = n.id, Ga = n.overflow, Hr = e;
  }
  var fn = null, $t = null, rt = !1, Ur = null, ma = !1, Qf = Error(i(519));
  function Ir(e) {
    var n = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw _i(fa(n, e)), Qf;
  }
  function Wg(e) {
    var n = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (n[Ie] = e, n[kt] = l, r) {
      case "dialog":
        st("cancel", n), st("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        st("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < os.length; r++)
          st(os[r], n);
        break;
      case "source":
        st("error", n);
        break;
      case "img":
      case "image":
      case "link":
        st("error", n), st("load", n);
        break;
      case "details":
        st("toggle", n);
        break;
      case "input":
        st("invalid", n), sg(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        st("invalid", n);
        break;
      case "textarea":
        st("invalid", n), cg(n, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || l.suppressHydrationWarning === !0 || y0(n.textContent, r) ? (l.popover != null && (st("beforetoggle", n), st("toggle", n)), l.onScroll != null && st("scroll", n), l.onScrollEnd != null && st("scrollend", n), l.onClick != null && (n.onclick = Va), n = !0) : n = !1, n || Ir(e, !0);
  }
  function xu(e) {
    for (fn = e.return; fn; )
      switch (fn.tag) {
        case 5:
        case 31:
        case 13:
          ma = !1;
          return;
        case 27:
        case 3:
          ma = !0;
          return;
        default:
          fn = fn.return;
      }
  }
  function bl(e) {
    if (e !== fn) return !1;
    if (!rt) return xu(e), rt = !0, !1;
    var n = e.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || Ap(e.type, e.memoizedProps)), r = !r), r && $t && Ir(e), xu(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      $t = L0(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      $t = L0(e);
    } else
      n === 27 ? (n = $t, ao(e.type) ? (e = Lp, Lp = null, $t = e) : $t = n) : $t = fn ? ga(e.stateNode.nextSibling) : null;
    return !0;
  }
  function No() {
    $t = fn = null, rt = !1;
  }
  function Zf() {
    var e = Ur;
    return e !== null && (Hn === null ? Hn = e : Hn.push.apply(
      Hn,
      e
    ), Ur = null), e;
  }
  function _i(e) {
    Ur === null ? Ur = [e] : Ur.push(e);
  }
  var Jf = lt(null), Bo = null, vr = null;
  function Pr(e, n, r) {
    we(Jf, n._currentValue), n._currentValue = r;
  }
  function br(e) {
    e._currentValue = Jf.current, ye(Jf);
  }
  function Su(e, n, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === r) break;
      e = e.return;
    }
  }
  function ed(e, n, r, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var v = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var w = f;
          f = u;
          for (var $ = 0; $ < n.length; $++)
            if (w.context === n[$]) {
              f.lanes |= r, w = f.alternate, w !== null && (w.lanes |= r), Su(
                f.return,
                r,
                e
              ), l || (v = null);
              break e;
            }
          f = w.next;
        }
      } else if (u.tag === 18) {
        if (v = u.return, v === null) throw Error(i(341));
        v.lanes |= r, f = v.alternate, f !== null && (f.lanes |= r), Su(v, r, e), v = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= r, v = u.alternate, v !== null && (v.lanes |= r), Su(
          u.return,
          r,
          e
        ), v = u.child, v = v !== null ? v.sibling : null) : v = u.child;
      if (v !== null) v.return = u;
      else
        for (v = u; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (u = v.sibling, u !== null) {
            u.return = v.return, v = u;
            break;
          }
          v = v.return;
        }
      u = v;
    }
  }
  function jo(e, n, r, l) {
    e = null;
    for (var u = n, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var v = u.alternate;
        if (v === null) throw Error(i(387));
        if (v = v.memoizedProps, v !== null) {
          var w = u.type;
          Xn(u.pendingProps.value, v.value) || (e !== null ? e.push(w) : e = [w]);
        }
      } else if (u === ge.current) {
        if (v = u.alternate, v === null) throw Error(i(387));
        v.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Vl) : e = [Vl]);
      }
      u = u.return;
    }
    return e !== null && ed(
      n,
      e,
      r,
      l
    ), n.flags |= 262144, e !== null;
  }
  function Cu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Xn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function $o(e) {
    Bo = e, vr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function hn(e) {
    return Qg(Bo, e);
  }
  function Eu(e, n) {
    return Bo === null && $o(e), Qg(e, n);
  }
  function Qg(e, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, vr === null) {
      if (e === null) throw Error(i(308));
      vr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else vr = vr.next = n;
    return r;
  }
  var u2 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(r, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(r) {
        return r();
      });
    };
  }, c2 = t.unstable_scheduleCallback, f2 = t.unstable_NormalPriority, nn = {
    $$typeof: X,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function td() {
    return {
      controller: new u2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ki(e) {
    e.refCount--, e.refCount === 0 && c2(f2, function() {
      e.controller.abort();
    });
  }
  function Zg(e, n) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var r = e.transitionTypes;
      for (r === null && (r = e.transitionTypes = []), e = 0; e < n.length; e++) {
        var l = n[e];
        r.indexOf(l) === -1 && r.push(l);
      }
    }
  }
  var Hi = null;
  function d2(e) {
    var n = e.transitionTypes;
    return e.transitionTypes = null, n;
  }
  var Ui = null, nd = 0, Lo = 0, xl = null;
  function p2(e, n) {
    if (Ui === null) {
      var r = Ui = [];
      nd = 0, Lo = vp(), xl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return nd++, n.then(Jg, Jg), n;
  }
  function Jg() {
    if (--nd === 0 && (Hi = null, Ui !== null)) {
      xl !== null && (xl.status = "fulfilled");
      var e = Ui;
      Ui = null, Lo = 0, xl = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function m2(e, n) {
    var r = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        r.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var u = 0; u < r.length; u++) (0, r[u])(n);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < r.length; u++)
          (0, r[u])(void 0);
      }
    ), l;
  }
  var ey = se.S;
  se.S = function(e, n) {
    if (Gv = tn(), typeof n == "object" && n !== null && typeof n.then == "function" && p2(e, n), Hi !== null)
      for (var r = kl; r !== null; )
        Zg(r, Hi), r = r.next;
    if (r = e.types, r !== null) {
      for (var l = kl; l !== null; )
        Zg(l, r), l = l.next;
      if (Lo !== 0) {
        l = Hi, l === null && (l = Hi = []);
        for (var u = 0; u < r.length; u++) {
          var f = r[u];
          l.indexOf(f) === -1 && l.push(f);
        }
      }
    }
    ey !== null && ey(e, n);
  };
  var _o = lt(null);
  function ad() {
    var e = _o.current;
    return e !== null ? e : zt.pooledCache;
  }
  function Tu(e, n) {
    n === null ? we(_o, _o.current) : we(_o, n.pool);
  }
  function ty() {
    var e = ad();
    return e === null ? null : { parent: nn._currentValue, pool: e };
  }
  var Sl = Error(i(460)), rd = Error(i(474)), Ru = Error(i(542)), wu = { then: function() {
  } };
  function ny(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ay(e, n, r) {
    switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(Va, Va), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, oy(e), e === void 0 && !("reason" in n) ? Error(i(600)) : e;
      default:
        if (typeof n.status == "string") n.then(Va, Va);
        else {
          if (e = zt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, oy(e), e;
        }
        throw Ho = n, Sl;
    }
  }
  function ko(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Ho = r, Sl) : r;
    }
  }
  var Ho = null;
  function ry() {
    if (Ho === null) throw Error(i(459));
    var e = Ho;
    return Ho = null, e;
  }
  function oy(e) {
    if (e === Sl || e === Ru)
      throw Error(i(483));
  }
  var Cl = null, Ii = 0;
  function Au(e) {
    var n = Ii;
    return Ii += 1, Cl === null && (Cl = []), ay(Cl, e, n);
  }
  function Fr(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function Ou(e, n) {
    throw n.$$typeof === k ? Error(i(525)) : (e = Object.prototype.toString.call(n), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function ly(e) {
    function n(V, H) {
      if (e) {
        var K = V.deletions;
        K === null ? (V.deletions = [H], V.flags |= 16) : K.push(H);
      }
    }
    function r(V, H) {
      if (!e) return null;
      for (; H !== null; )
        n(V, H), H = H.sibling;
      return null;
    }
    function l(V) {
      for (var H = /* @__PURE__ */ new Map(); V !== null; )
        V.key === null ? H.set(V.index, V) : H.set(V.key, V), V = V.sibling;
      return H;
    }
    function u(V, H) {
      return V = gr(V, H), V.index = 0, V.sibling = null, V;
    }
    function f(V, H, K) {
      return V.index = K, e ? (K = V.alternate, K !== null ? (K = K.index, K < H ? (V.flags |= 2, H) : K) : (V.flags |= 134217730, H)) : (V.flags |= 1048576, H);
    }
    function v(V) {
      return e && V.alternate === null && (V.flags |= 134217730), V;
    }
    function w(V, H, K, oe) {
      return H === null || H.tag !== 6 ? (H = Xf(K, V.mode, oe), H.return = V, H) : (H = u(H, K), H.return = V, H);
    }
    function $(V, H, K, oe) {
      var Re = K.type;
      return Re === U ? (V = ee(
        V,
        H,
        K.props.children,
        oe,
        K.key
      ), Fr(V, K), V) : H !== null && (H.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === de && ko(Re) === H.type) ? (H = u(H, K.props), Fr(H, K), H.return = V, H) : (H = yu(
        K.type,
        K.key,
        K.props,
        null,
        V.mode,
        oe
      ), Fr(H, K), H.return = V, H);
    }
    function q(V, H, K, oe) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== K.containerInfo || H.stateNode.implementation !== K.implementation ? (H = Kf(K, V.mode, oe), H.return = V, H) : (H = u(H, K.children || []), H.return = V, H);
    }
    function ee(V, H, K, oe, Re) {
      return H === null || H.tag !== 7 ? (H = Do(
        K,
        V.mode,
        oe,
        Re
      ), H.return = V, H) : (H = u(H, K), H.return = V, H);
    }
    function le(V, H, K) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return H = Xf(
          "" + H,
          V.mode,
          K
        ), H.return = V, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case F:
            return K = yu(
              H.type,
              H.key,
              H.props,
              null,
              V.mode,
              K
            ), Fr(K, H), K.return = V, K;
          case E:
            return H = Kf(
              H,
              V.mode,
              K
            ), H.return = V, H;
          case de:
            return H = ko(H), le(V, H, K);
        }
        if (he(H) || fe(H))
          return H = Do(
            H,
            V.mode,
            K,
            null
          ), H.return = V, H;
        if (typeof H.then == "function")
          return le(V, Au(H), K);
        if (H.$$typeof === X)
          return le(
            V,
            Eu(V, H),
            K
          );
        Ou(V, H);
      }
      return null;
    }
    function I(V, H, K, oe) {
      var Re = H !== null ? H.key : null;
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return Re !== null ? null : w(V, H, "" + K, oe);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case F:
            return K.key === Re ? $(V, H, K, oe) : null;
          case E:
            return K.key === Re ? q(V, H, K, oe) : null;
          case de:
            return K = ko(K), I(V, H, K, oe);
        }
        if (he(K) || fe(K))
          return Re !== null ? null : ee(V, H, K, oe, null);
        if (typeof K.then == "function")
          return I(
            V,
            H,
            Au(K),
            oe
          );
        if (K.$$typeof === X)
          return I(
            V,
            H,
            Eu(V, K),
            oe
          );
        Ou(V, K);
      }
      return null;
    }
    function Q(V, H, K, oe, Re) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return V = V.get(K) || null, w(H, V, "" + oe, Re);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case F:
            return V = V.get(
              oe.key === null ? K : oe.key
            ) || null, $(H, V, oe, Re);
          case E:
            return V = V.get(
              oe.key === null ? K : oe.key
            ) || null, q(H, V, oe, Re);
          case de:
            return oe = ko(oe), Q(
              V,
              H,
              K,
              oe,
              Re
            );
        }
        if (he(oe) || fe(oe))
          return V = V.get(K) || null, ee(H, V, oe, Re, null);
        if (typeof oe.then == "function")
          return Q(
            V,
            H,
            K,
            Au(oe),
            Re
          );
        if (oe.$$typeof === X)
          return Q(
            V,
            H,
            K,
            Eu(H, oe),
            Re
          );
        Ou(H, oe);
      }
      return null;
    }
    function Se(V, H, K, oe) {
      for (var Re = null, ft = null, je = H, ke = H = 0, on = null; je !== null && ke < K.length; ke++) {
        je.index > ke ? (on = je, je = null) : on = je.sibling;
        var mt = I(
          V,
          je,
          K[ke],
          oe
        );
        if (mt === null) {
          je === null && (je = on);
          break;
        }
        e && je && mt.alternate === null && n(V, je), H = f(mt, H, ke), ft === null ? Re = mt : ft.sibling = mt, ft = mt, je = on;
      }
      if (ke === K.length)
        return r(V, je), rt && yr(V, ke), Re;
      if (je === null) {
        for (; ke < K.length; ke++)
          je = le(V, K[ke], oe), je !== null && (H = f(
            je,
            H,
            ke
          ), ft === null ? Re = je : ft.sibling = je, ft = je);
        return rt && yr(V, ke), Re;
      }
      for (je = l(je); ke < K.length; ke++)
        on = Q(
          je,
          V,
          ke,
          K[ke],
          oe
        ), on !== null && (e && (mt = on.alternate, mt !== null && je.delete(mt.key === null ? ke : mt.key)), H = f(
          on,
          H,
          ke
        ), ft === null ? Re = on : ft.sibling = on, ft = on);
      return e && je.forEach(function(so) {
        return n(V, so);
      }), rt && yr(V, ke), Re;
    }
    function Oe(V, H, K, oe) {
      if (K == null) throw Error(i(151));
      for (var Re = null, ft = null, je = H, ke = H = 0, on = null, mt = K.next(); je !== null && !mt.done; ke++, mt = K.next()) {
        je.index > ke ? (on = je, je = null) : on = je.sibling;
        var so = I(V, je, mt.value, oe);
        if (so === null) {
          je === null && (je = on);
          break;
        }
        e && je && so.alternate === null && n(V, je), H = f(so, H, ke), ft === null ? Re = so : ft.sibling = so, ft = so, je = on;
      }
      if (mt.done)
        return r(V, je), rt && yr(V, ke), Re;
      if (je === null) {
        for (; !mt.done; ke++, mt = K.next())
          mt = le(V, mt.value, oe), mt !== null && (H = f(mt, H, ke), ft === null ? Re = mt : ft.sibling = mt, ft = mt);
        return rt && yr(V, ke), Re;
      }
      for (je = l(je); !mt.done; ke++, mt = K.next())
        mt = Q(je, V, ke, mt.value, oe), mt !== null && (e && (on = mt.alternate, on !== null && je.delete(
          on.key === null ? ke : on.key
        )), H = f(mt, H, ke), ft === null ? Re = mt : ft.sibling = mt, ft = mt);
      return e && je.forEach(function(XE) {
        return n(V, XE);
      }), rt && yr(V, ke), Re;
    }
    function Qe(V, H, K, oe) {
      if (typeof K == "object" && K !== null && K.type === U && K.key === null && K.props.ref === void 0 && (K = K.props.children), typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case F:
            e: {
              for (var Re = K.key; H !== null; ) {
                if (H.key === Re) {
                  if (Re = K.type, Re === U) {
                    if (H.tag === 7) {
                      r(
                        V,
                        H.sibling
                      ), oe = u(
                        H,
                        K.props.children
                      ), Fr(oe, K), oe.return = V, V = oe;
                      break e;
                    }
                  } else if (H.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === de && ko(Re) === H.type) {
                    r(
                      V,
                      H.sibling
                    ), oe = u(H, K.props), Fr(oe, K), oe.return = V, V = oe;
                    break e;
                  }
                  r(V, H);
                  break;
                } else n(V, H);
                H = H.sibling;
              }
              K.type === U ? (oe = Do(
                K.props.children,
                V.mode,
                oe,
                K.key
              ), Fr(oe, K), oe.return = V, V = oe) : (oe = yu(
                K.type,
                K.key,
                K.props,
                null,
                V.mode,
                oe
              ), Fr(oe, K), oe.return = V, V = oe);
            }
            return v(V);
          case E:
            e: {
              for (Re = K.key; H !== null; ) {
                if (H.key === Re)
                  if (H.tag === 4 && H.stateNode.containerInfo === K.containerInfo && H.stateNode.implementation === K.implementation) {
                    r(
                      V,
                      H.sibling
                    ), oe = u(H, K.children || []), oe.return = V, V = oe;
                    break e;
                  } else {
                    r(V, H);
                    break;
                  }
                else n(V, H);
                H = H.sibling;
              }
              oe = Kf(K, V.mode, oe), oe.return = V, V = oe;
            }
            return v(V);
          case de:
            return K = ko(K), Qe(
              V,
              H,
              K,
              oe
            );
        }
        if (he(K))
          return Se(
            V,
            H,
            K,
            oe
          );
        if (fe(K)) {
          if (Re = fe(K), typeof Re != "function") throw Error(i(150));
          return K = Re.call(K), Oe(
            V,
            H,
            K,
            oe
          );
        }
        if (typeof K.then == "function")
          return Qe(
            V,
            H,
            Au(K),
            oe
          );
        if (K.$$typeof === X)
          return Qe(
            V,
            H,
            Eu(V, K),
            oe
          );
        Ou(V, K);
      }
      return typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint" ? (K = "" + K, H !== null && H.tag === 6 ? (r(V, H.sibling), oe = u(H, K), oe.return = V, V = oe) : (r(V, H), oe = Xf(K, V.mode, oe), oe.return = V, V = oe), v(V)) : r(V, H);
    }
    return function(V, H, K, oe) {
      try {
        Ii = 0;
        var Re = Qe(
          V,
          H,
          K,
          oe
        );
        return Cl = null, Re;
      } catch (je) {
        if (je === Sl || je === Ru) throw je;
        var ft = Ln(29, je, null, V.mode);
        return ft.lanes = oe, ft.return = V, ft;
      } finally {
      }
    };
  }
  var Uo = ly(!0), iy = ly(!1), Vr = !1;
  function od(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ld(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function qr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Gr(e, n, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (yt & 2) !== 0) {
      var u = l.pending;
      return u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n, n = gu(e), Vg(e, null, r), n;
    }
    return hu(e, l, n, r), gu(e);
  }
  function Pi(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, qt(e, r);
    }
  }
  function id(e, n) {
    var r = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var u = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var v = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          f === null ? u = f = v : f = f.next = v, r = r.next;
        } while (r !== null);
        f === null ? u = f = n : f = f.next = n;
      } else u = f = n;
      r = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n;
  }
  var sd = !1;
  function Fi() {
    if (sd) {
      var e = xl;
      if (e !== null) throw e;
    }
  }
  function Vi(e, n, r, l) {
    sd = !1;
    var u = e.updateQueue;
    Vr = !1;
    var f = u.firstBaseUpdate, v = u.lastBaseUpdate, w = u.shared.pending;
    if (w !== null) {
      u.shared.pending = null;
      var $ = w, q = $.next;
      $.next = null, v === null ? f = q : v.next = q, v = $;
      var ee = e.alternate;
      ee !== null && (ee = ee.updateQueue, w = ee.lastBaseUpdate, w !== v && (w === null ? ee.firstBaseUpdate = q : w.next = q, ee.lastBaseUpdate = $));
    }
    if (f !== null) {
      var le = u.baseState;
      v = 0, ee = q = $ = null, w = f;
      do {
        var I = w.lane & -536870913, Q = I !== w.lane;
        if (Q ? (ct & I) === I : (l & I) === I) {
          I !== 0 && I === Lo && (sd = !0), ee !== null && (ee = ee.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = e, Oe = w;
            I = n;
            var Qe = r;
            switch (Oe.tag) {
              case 1:
                if (Se = Oe.payload, typeof Se == "function") {
                  le = Se.call(Qe, le, I);
                  break e;
                }
                le = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = Oe.payload, I = typeof Se == "function" ? Se.call(Qe, le, I) : Se, I == null) break e;
                le = L({}, le, I);
                break e;
              case 2:
                Vr = !0;
            }
          }
          I = w.callback, I !== null && (e.flags |= 64, Q && (e.flags |= 8192), Q = u.callbacks, Q === null ? u.callbacks = [I] : Q.push(I));
        } else
          Q = {
            lane: I,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          }, ee === null ? (q = ee = Q, $ = le) : ee = ee.next = Q, v |= I;
        if (w = w.next, w === null) {
          if (w = u.shared.pending, w === null)
            break;
          Q = w, w = Q.next, Q.next = null, u.lastBaseUpdate = Q, u.shared.pending = null;
        }
      } while (!0);
      ee === null && ($ = le), u.baseState = $, u.firstBaseUpdate = q, u.lastBaseUpdate = ee, f === null && (u.shared.lanes = 0), Jr |= v, e.lanes = v, e.memoizedState = le;
    }
  }
  function sy(e, n) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(n);
  }
  function uy(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        sy(r[e], n);
  }
  var Yr = lt(null), Mu = lt(0);
  function cy(e, n) {
    e = Tr, we(Mu, e), we(Yr, n), Tr = e | n.baseLanes;
  }
  function ud() {
    we(Mu, Tr), we(Yr, Yr.current);
  }
  function cd() {
    Tr = Mu.current, ye(Yr), ye(Mu);
  }
  var gn = lt(null), Tn = null;
  function Xr(e) {
    var n = e.alternate;
    we(yn, yn.current & 1), we(gn, e), Tn === null && (n === null || Yr.current !== null || n.memoizedState !== null) && (Tn = e);
  }
  function fd(e) {
    we(yn, yn.current), we(gn, e), Tn === null && (Tn = e);
  }
  function fy(e) {
    e.tag === 22 ? (we(yn, yn.current), we(gn, e), Tn === null && (Tn = e)) : Kr();
  }
  function Kr() {
    we(yn, yn.current), we(gn, gn.current);
  }
  function Kn(e) {
    ye(gn), Tn === e && (Tn = null), ye(yn);
  }
  var yn = lt(0);
  function qi(e, n) {
    we(gn, gn.current), we(yn, n);
  }
  function dd(e) {
    ye(yn), ye(gn), Tn === e && (Tn = null);
  }
  function zu(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || jp(r) || $p(r)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== "independent") {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var xr = 0, We = null, Ot = null, an = null, Du = !1, El = !1, Io = !1, Nu = 0, Gi = 0, Tl = null, h2 = 0;
  function Xt() {
    throw Error(i(321));
  }
  function pd(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!Xn(e[r], n[r])) return !1;
    return !0;
  }
  function md(e, n, r, l, u, f) {
    return xr = f, We = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, se.H = e === null || e.memoizedState === null ? Xy : Ky, Io = !1, f = r(l, u), Io = !1, El && (f = py(
      n,
      r,
      l,
      u
    )), dy(e), f;
  }
  function dy(e) {
    se.H = Hu;
    var n = Ot !== null && Ot.next !== null;
    if (xr = 0, an = Ot = We = null, Du = !1, Gi = 0, Tl = null, n) throw Error(i(300));
    e === null || rn || (e = e.dependencies, e !== null && Cu(e) && (rn = !0));
  }
  function py(e, n, r, l) {
    We = e;
    var u = 0;
    do {
      if (El && (Tl = null), Gi = 0, El = !1, 25 <= u) throw Error(i(301));
      if (u += 1, an = Ot = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      se.H = E2, f = n(r, l);
    } while (El);
    return f;
  }
  function g2() {
    var e = se.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? Yi(n) : n, e = e.useState()[0], (Ot !== null ? Ot.memoizedState : null) !== e && (We.flags |= 1024), n;
  }
  function hd() {
    var e = Nu !== 0;
    return Nu = 0, e;
  }
  function gd(e, n, r) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
  }
  function yd(e) {
    if (Du) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      Du = !1;
    }
    xr = 0, an = Ot = We = null, El = !1, Gi = Nu = 0, Tl = null;
  }
  function Dn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return an === null ? We.memoizedState = an = e : an = an.next = e, an;
  }
  function Zt() {
    if (Ot === null) {
      var e = We.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ot.next;
    var n = an === null ? We.memoizedState : an.next;
    if (n !== null)
      an = n, Ot = e;
    else {
      if (e === null)
        throw We.alternate === null ? Error(i(467)) : Error(i(310));
      Ot = e, e = {
        memoizedState: Ot.memoizedState,
        baseState: Ot.baseState,
        baseQueue: Ot.baseQueue,
        queue: Ot.queue,
        next: null
      }, an === null ? We.memoizedState = an = e : an = an.next = e;
    }
    return an;
  }
  function Bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Yi(e) {
    var n = Gi;
    return Gi += 1, Tl === null && (Tl = []), e = ay(Tl, e, n), n = We, (an === null ? n.memoizedState : an.next) === null && (n = n.alternate, se.H = n === null || n.memoizedState === null ? Xy : Ky), e;
  }
  function ju(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Yi(e);
      if (e.$$typeof === Z) return;
      if (e.$$typeof === X) return hn(e);
    }
    throw Error(i(438, String(e)));
  }
  function vd(e) {
    var n = null, r = We.updateQueue;
    if (r !== null && (n = r.memoCache), n == null) {
      var l = We.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = Bu(), We.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
      for (r = n.data[n.index] = Array(e), l = 0; l < e; l++)
        r[l] = Me;
    return n.index++, r;
  }
  function Sr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function $u(e) {
    var n = Zt();
    return bd(n, Ot, e);
  }
  function bd(e, n, r) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = r;
    var u = e.baseQueue, f = l.pending;
    if (f !== null) {
      if (u !== null) {
        var v = u.next;
        u.next = f.next, f.next = v;
      }
      n.baseQueue = u = f, l.pending = null;
    }
    if (f = e.baseState, u === null) e.memoizedState = f;
    else {
      n = u.next;
      var w = v = null, $ = null, q = n, ee = !1;
      do {
        var le = q.lane & -536870913;
        if (le !== q.lane ? (ct & le) === le : (xr & le) === le) {
          var I = q.revertLane;
          if (I === 0)
            $ !== null && ($ = $.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), le === Lo && (ee = !0);
          else if ((xr & I) === I) {
            q = q.next, I === Lo && (ee = !0);
            continue;
          } else
            le = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, $ === null ? (w = $ = le, v = f) : $ = $.next = le, We.lanes |= I, Jr |= I;
          le = q.action, Io && r(f, le), f = q.hasEagerState ? q.eagerState : r(f, le);
        } else
          I = {
            lane: le,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, $ === null ? (w = $ = I, v = f) : $ = $.next = I, We.lanes |= le, Jr |= le;
        q = q.next;
      } while (q !== null && q !== n);
      if ($ === null ? v = f : $.next = w, !Xn(f, e.memoizedState) && (rn = !0, ee && (r = xl, r !== null)))
        throw r;
      e.memoizedState = f, e.baseState = v, e.baseQueue = $, l.lastRenderedState = f;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function xd(e) {
    var n = Zt(), r = n.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch, u = r.pending, f = n.memoizedState;
    if (u !== null) {
      r.pending = null;
      var v = u = u.next;
      do
        f = e(f, v.action), v = v.next;
      while (v !== u);
      Xn(f, n.memoizedState) || (rn = !0), n.memoizedState = f, n.baseQueue === null && (n.baseState = f), r.lastRenderedState = f;
    }
    return [f, l];
  }
  function my(e, n, r) {
    var l = We, u = Zt(), f = rt;
    if (f) {
      if (r === void 0) throw Error(i(407));
      r = r();
    } else r = n();
    var v = !Xn(
      (Ot || u).memoizedState,
      r
    );
    if (v && (u.memoizedState = r, rn = !0), u = u.queue, Ed(yy.bind(null, l, u, e), [
      e
    ]), e = u.getSnapshot !== n || v || an !== null && (an.memoizedState.tag & 1) !== 0, Rl(
      e ? 9 : 8,
      { destroy: void 0 },
      gy.bind(null, l, u, r, n),
      null
    ), e) {
      if (l.flags |= 2048, zt === null) throw Error(i(349));
      f || (xr & 127) !== 0 || hy(l, n, r);
    }
    return r;
  }
  function hy(e, n, r) {
    e.flags |= 16384, e = { getSnapshot: n, value: r }, n = We.updateQueue, n === null ? (n = Bu(), We.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
  }
  function gy(e, n, r, l) {
    n.value = r, n.getSnapshot = l, vy(n) && by(e);
  }
  function yy(e, n, r) {
    return r(function() {
      vy(n) && by(e);
    });
  }
  function vy(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !Xn(e, r);
    } catch {
      return !0;
    }
  }
  function by(e) {
    var n = zo(e, 2);
    n !== null && Un(n, e, 2);
  }
  function Sd(e) {
    var n = Dn();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Io) {
        Cn(!0);
        try {
          r();
        } finally {
          Cn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sr,
      lastRenderedState: e
    }, n;
  }
  function xy(e, n, r, l) {
    return e.baseState = r, bd(
      e,
      Ot,
      typeof l == "function" ? l : Sr
    );
  }
  function y2(e, n, r, l, u) {
    if (ku(e)) throw Error(i(485));
    if (e = n.action, e !== null) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          f.listeners.push(v);
        }
      };
      se.T !== null ? r(!0) : f.isTransition = !1, l(f), r = n.pending, r === null ? (f.next = n.pending = f, Sy(n, f)) : (f.next = r.next, n.pending = r.next = f);
    }
  }
  function Sy(e, n) {
    var r = n.action, l = n.payload, u = e.state;
    if (n.isTransition) {
      var f = se.T, v = {};
      v.types = f !== null ? f.types : null, se.T = v;
      try {
        var w = r(u, l), $ = se.S;
        $ !== null && $(v, w), Cy(e, n, w);
      } catch (q) {
        Cd(e, n, q);
      } finally {
        f !== null && v.types !== null && (f.types = v.types), se.T = f;
      }
    } else
      try {
        f = r(u, l), Cy(e, n, f);
      } catch (q) {
        Cd(e, n, q);
      }
  }
  function Cy(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(l) {
        Ey(e, n, l);
      },
      function(l) {
        return Cd(e, n, l);
      }
    ) : Ey(e, n, r);
  }
  function Ey(e, n, r) {
    n.status = "fulfilled", n.value = r, Ty(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, Sy(e, r)));
  }
  function Cd(e, n, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = r, Ty(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Ty(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Ry(e, n) {
    return n;
  }
  function wy(e, n) {
    if (rt) {
      var r = zt.formState;
      if (r !== null) {
        e: {
          var l = We;
          if (rt) {
            if ($t) {
              t: {
                for (var u = $t, f = ma; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (u = ga(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                f = u.data, u = f === "F!" || f === "F" ? u : null;
              }
              if (u) {
                $t = ga(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Ir(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return r = Dn(), r.memoizedState = r.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ry,
      lastRenderedState: n
    }, r.queue = l, r = qy.bind(
      null,
      We,
      l
    ), l.dispatch = r, l = Sd(!1), f = Od.bind(
      null,
      We,
      !1,
      l.queue
    ), l = Dn(), u = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, r = y2.bind(
      null,
      We,
      u,
      f,
      r
    ), u.dispatch = r, l.memoizedState = e, [n, r, !1];
  }
  function Ay(e) {
    var n = Zt();
    return Oy(n, Ot, e);
  }
  function Oy(e, n, r) {
    if (n = bd(
      e,
      n,
      Ry
    )[0], e = $u(Sr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = Yi(n);
      } catch (v) {
        throw v === Sl ? Ru : v;
      }
    else l = n;
    n = Zt();
    var u = n.queue, f = u.dispatch;
    return r !== n.memoizedState && (We.flags |= 2048, Rl(
      9,
      { destroy: void 0 },
      v2.bind(null, u, r),
      null
    )), [l, f, e];
  }
  function v2(e, n) {
    e.action = n;
  }
  function My(e) {
    var n = Zt(), r = Ot;
    if (r !== null)
      return Oy(n, r, e);
    Zt(), n = n.memoizedState, r = Zt();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [n, l, !1];
  }
  function Rl(e, n, r, l) {
    return e = { tag: e, create: r, deps: l, inst: n, next: null }, n = We.updateQueue, n === null && (n = Bu(), We.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, n.lastEffect = e), e;
  }
  function zy() {
    return Zt().memoizedState;
  }
  function Lu(e, n, r, l) {
    var u = Dn();
    We.flags |= e, u.memoizedState = Rl(
      1 | n,
      { destroy: void 0 },
      r,
      l === void 0 ? null : l
    );
  }
  function _u(e, n, r, l) {
    var u = Zt();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    Ot !== null && l !== null && pd(l, Ot.memoizedState.deps) ? u.memoizedState = Rl(n, f, r, l) : (We.flags |= e, u.memoizedState = Rl(
      1 | n,
      f,
      r,
      l
    ));
  }
  function Dy(e, n) {
    Lu(8390656, 8, e, n);
  }
  function Ed(e, n) {
    _u(2048, 8, e, n);
  }
  function b2(e) {
    We.flags |= 4;
    var n = We.updateQueue;
    if (n === null)
      n = Bu(), We.updateQueue = n, n.events = [e];
    else {
      var r = n.events;
      r === null ? n.events = [e] : r.push(e);
    }
  }
  function Ny(e) {
    var n = Zt().memoizedState;
    return b2({ ref: n, nextImpl: e }), function() {
      if ((yt & 2) !== 0) throw Error(i(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function By(e, n) {
    return _u(4, 2, e, n);
  }
  function jy(e, n) {
    return _u(4, 4, e, n);
  }
  function $y(e, n) {
    if (typeof n == "function") {
      e = e();
      var r = n(e);
      return function() {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Ly(e, n, r) {
    r = r != null ? r.concat([e]) : null, _u(4, 4, $y.bind(null, n, e), r);
  }
  function Td() {
  }
  function _y(e, n) {
    var r = Zt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && pd(n, l[1]) ? l[0] : (r.memoizedState = [e, n], e);
  }
  function ky(e, n) {
    var r = Zt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && pd(n, l[1]))
      return l[0];
    if (l = e(), Io) {
      Cn(!0);
      try {
        e();
      } finally {
        Cn(!1);
      }
    }
    return r.memoizedState = [l, n], l;
  }
  function Rd(e, n, r) {
    return r === void 0 || (xr & 1073741824) !== 0 && (ct & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = Xv(), We.lanes |= e, Jr |= e, r);
  }
  function Hy(e, n, r, l) {
    return Xn(r, n) ? r : Yr.current !== null ? (e = Rd(e, r, l), Xn(e, n) || (rn = !0), e) : (xr & 106) === 0 || (xr & 1073741824) !== 0 && (ct & 261930) === 0 ? (rn = !0, e.memoizedState = r) : (e = Xv(), We.lanes |= e, Jr |= e, n);
  }
  function Uy(e, n, r, l, u) {
    var f = ue.p;
    ue.p = f !== 0 && 8 > f ? f : 8;
    var v = se.T, w = {};
    w.types = v !== null ? v.types : null, se.T = w, Od(e, !1, n, r);
    try {
      var $ = u(), q = se.S;
      if (q !== null && q(w, $), $ !== null && typeof $ == "object" && typeof $.then == "function") {
        var ee = m2(
          $,
          l
        );
        Xi(
          e,
          n,
          ee,
          Jn(e)
        );
      } else
        Xi(
          e,
          n,
          l,
          Jn(e)
        );
    } catch (le) {
      Xi(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: le },
        Jn()
      );
    } finally {
      ue.p = f, v !== null && w.types !== null && (v.types = w.types), se.T = v;
    }
  }
  function x2() {
  }
  function wd(e, n, r, l) {
    if (e.tag !== 5) throw Error(i(476));
    var u = Iy(e).queue;
    Uy(
      e,
      u,
      n,
      _e,
      r === null ? x2 : function() {
        return Py(e), r(l);
      }
    );
  }
  function Iy(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: _e,
      baseState: _e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sr,
        lastRenderedState: _e
      },
      next: null
    };
    var r = {};
    return n.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sr,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Py(e) {
    var n = Iy(e);
    n.next === null && (n = e.alternate.memoizedState), Xi(
      e,
      n.next.queue,
      {},
      Jn()
    );
  }
  function Ad() {
    return hn(Vl);
  }
  function Fy() {
    return Zt().memoizedState;
  }
  function Vy() {
    return Zt().memoizedState;
  }
  function S2(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = Jn();
          e = qr(r);
          var l = Gr(n, e, r);
          l !== null && (Un(l, n, r), Pi(l, n, r)), n = { cache: td() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function C2(e, n, r) {
    var l = Jn();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ku(e) ? Gy(n, r) : (r = Gf(e, n, r, l), r !== null && (Un(r, e, l), Yy(r, n, l)));
  }
  function qy(e, n, r) {
    var l = Jn();
    Xi(e, n, r, l);
  }
  function Xi(e, n, r, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ku(e)) Gy(n, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer, f !== null))
        try {
          var v = n.lastRenderedState, w = f(v, r);
          if (u.hasEagerState = !0, u.eagerState = w, Xn(w, v))
            return hu(e, n, u, 0), zt === null && mu(), !1;
        } catch {
        } finally {
        }
      if (r = Gf(e, n, u, l), r !== null)
        return Un(r, e, l), Yy(r, n, l), !0;
    }
    return !1;
  }
  function Od(e, n, r, l) {
    if (l = {
      lane: 2,
      revertLane: vp(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ku(e)) {
      if (n) throw Error(i(479));
    } else
      n = Gf(
        e,
        r,
        l,
        2
      ), n !== null && Un(n, e, 2);
  }
  function ku(e) {
    var n = e.alternate;
    return e === We || n !== null && n === We;
  }
  function Gy(e, n) {
    El = Du = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
  }
  function Yy(e, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, qt(e, r);
    }
  }
  var Hu = {
    readContext: hn,
    use: ju,
    useCallback: Xt,
    useContext: Xt,
    useEffect: Xt,
    useImperativeHandle: Xt,
    useLayoutEffect: Xt,
    useInsertionEffect: Xt,
    useMemo: Xt,
    useReducer: Xt,
    useRef: Xt,
    useState: Xt,
    useDebugValue: Xt,
    useDeferredValue: Xt,
    useTransition: Xt,
    useSyncExternalStore: Xt,
    useId: Xt,
    useHostTransitionStatus: Xt,
    useFormState: Xt,
    useActionState: Xt,
    useOptimistic: Xt,
    useMemoCache: Xt,
    useCacheRefresh: Xt,
    useEffectEvent: Xt
  }, Xy = {
    readContext: hn,
    use: ju,
    useCallback: function(e, n) {
      return Dn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: hn,
    useEffect: Dy,
    useImperativeHandle: function(e, n, r) {
      r = r != null ? r.concat([e]) : null, Lu(
        4194308,
        4,
        $y.bind(null, n, e),
        r
      );
    },
    useLayoutEffect: function(e, n) {
      return Lu(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Lu(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var r = Dn();
      n = n === void 0 ? null : n;
      var l = e();
      if (Io) {
        Cn(!0);
        try {
          e();
        } finally {
          Cn(!1);
        }
      }
      return r.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, r) {
      var l = Dn();
      if (r !== void 0) {
        var u = r(n);
        if (Io) {
          Cn(!0);
          try {
            r(n);
          } finally {
            Cn(!1);
          }
        }
      } else u = n;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = C2.bind(
        null,
        We,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = Dn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Sd(e);
      var n = e.queue, r = qy.bind(null, We, n);
      return n.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Td,
    useDeferredValue: function(e, n) {
      var r = Dn();
      return Rd(r, e, n);
    },
    useTransition: function() {
      var e = Sd(!1);
      return e = Uy.bind(
        null,
        We,
        e.queue,
        !0,
        !1
      ), Dn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, r) {
      var l = We, u = Dn();
      if (rt) {
        if (r === void 0)
          throw Error(i(407));
        r = r();
      } else {
        if (r = n(), zt === null)
          throw Error(i(349));
        (ct & 127) !== 0 || hy(l, n, r);
      }
      u.memoizedState = r;
      var f = { value: r, getSnapshot: n };
      return u.queue = f, Dy(yy.bind(null, l, f, e), [
        e
      ]), l.flags |= 2048, Rl(
        9,
        { destroy: void 0 },
        gy.bind(
          null,
          l,
          f,
          r,
          n
        ),
        null
      ), r;
    },
    useId: function() {
      var e = Dn(), n = zt.identifierPrefix;
      if (rt) {
        var r = Ga, l = qa;
        r = (l & ~(1 << 32 - sn(l) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = Nu++, 0 < r && (n += "H" + r.toString(32)), n += "_";
      } else
        r = h2++, n = "_" + n + "r_" + r.toString(32) + "_";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Ad,
    useFormState: wy,
    useActionState: wy,
    useOptimistic: function(e) {
      var n = Dn();
      n.memoizedState = n.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = r, n = Od.bind(
        null,
        We,
        !0,
        r
      ), r.dispatch = n, [e, n];
    },
    useMemoCache: vd,
    useCacheRefresh: function() {
      return Dn().memoizedState = S2.bind(
        null,
        We
      );
    },
    useEffectEvent: function(e) {
      var n = Dn(), r = { impl: e };
      return n.memoizedState = r, function() {
        if ((yt & 2) !== 0)
          throw Error(i(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, Ky = {
    readContext: hn,
    use: ju,
    useCallback: _y,
    useContext: hn,
    useEffect: Ed,
    useImperativeHandle: Ly,
    useInsertionEffect: By,
    useLayoutEffect: jy,
    useMemo: ky,
    useReducer: $u,
    useRef: zy,
    useState: function() {
      return $u(Sr);
    },
    useDebugValue: Td,
    useDeferredValue: function(e, n) {
      var r = Zt();
      return Hy(
        r,
        Ot.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = $u(Sr)[0], n = Zt().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        n
      ];
    },
    useSyncExternalStore: my,
    useId: Fy,
    useHostTransitionStatus: Ad,
    useFormState: Ay,
    useActionState: Ay,
    useOptimistic: function(e, n) {
      var r = Zt();
      return xy(r, Ot, e, n);
    },
    useMemoCache: vd,
    useCacheRefresh: Vy,
    useEffectEvent: Ny
  }, E2 = {
    readContext: hn,
    use: ju,
    useCallback: _y,
    useContext: hn,
    useEffect: Ed,
    useImperativeHandle: Ly,
    useInsertionEffect: By,
    useLayoutEffect: jy,
    useMemo: ky,
    useReducer: xd,
    useRef: zy,
    useState: function() {
      return xd(Sr);
    },
    useDebugValue: Td,
    useDeferredValue: function(e, n) {
      var r = Zt();
      return Ot === null ? Rd(r, e, n) : Hy(
        r,
        Ot.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = xd(Sr)[0], n = Zt().memoizedState;
      return [
        typeof e == "boolean" ? e : Yi(e),
        n
      ];
    },
    useSyncExternalStore: my,
    useId: Fy,
    useHostTransitionStatus: Ad,
    useFormState: My,
    useActionState: My,
    useOptimistic: function(e, n) {
      var r = Zt();
      return Ot !== null ? xy(r, Ot, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: vd,
    useCacheRefresh: Vy,
    useEffectEvent: Ny
  };
  function Md(e, n, r, l) {
    n = e.memoizedState, r = r(l, n), r = r == null ? n : L({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var zd = {
    enqueueSetState: function(e, n, r) {
      e = e._reactInternals;
      var l = Jn(), u = qr(l);
      u.payload = n, r != null && (u.callback = r), n = Gr(e, u, l), n !== null && (Un(n, e, l), Pi(n, e, l));
    },
    enqueueReplaceState: function(e, n, r) {
      e = e._reactInternals;
      var l = Jn(), u = qr(l);
      u.tag = 1, u.payload = n, r != null && (u.callback = r), n = Gr(e, u, l), n !== null && (Un(n, e, l), Pi(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var r = Jn(), l = qr(r);
      l.tag = 2, n != null && (l.callback = n), n = Gr(e, l, r), n !== null && (Un(n, e, r), Pi(n, e, r));
    }
  };
  function Wy(e, n, r, l, u, f, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, v) : n.prototype && n.prototype.isPureReactComponent ? !ji(r, l) || !ji(u, f) : !0;
  }
  function Qy(e, n, r, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== e && zd.enqueueReplaceState(n, n.state, null);
  }
  function Po(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var l in n)
        l !== "ref" && (r[l] = n[l]);
    }
    if (e = e.defaultProps) {
      r === n && (r = L({}, r));
      for (var u in e)
        r[u] === void 0 && (r[u] = e[u]);
    }
    return r;
  }
  function Zy(e) {
    pu(e);
  }
  function Jy(e) {
    console.error(e);
  }
  function ev(e) {
    pu(e);
  }
  function Uu(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function tv(e, n, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Dd(e, n, r) {
    return r = qr(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      Uu(e, n);
    }, r;
  }
  function nv(e) {
    return e = qr(e), e.tag = 3, e;
  }
  function av(e, n, r, l) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = l.value;
      e.payload = function() {
        return u(f);
      }, e.callback = function() {
        tv(n, r, l);
      };
    }
    var v = r.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      tv(n, r, l), typeof u != "function" && (eo === null ? eo = /* @__PURE__ */ new Set([this]) : eo.add(this));
      var w = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: w !== null ? w : ""
      });
    });
  }
  function T2(e, n, r, l, u) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = r.alternate, n !== null && jo(
        n,
        r,
        u,
        !0
      ), r = gn.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
          case 19:
            return Tn === null ? ic() : r.alternate === null && Kt === 0 && (Kt = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, l === wu ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), hp(e, l, u)), !1;
          case 22:
            return r.flags |= 65536, l === wu ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), hp(e, l, u)), !1;
        }
        throw Error(i(435, r.tag));
      }
      return hp(e, l, u), ic(), !1;
    }
    if (rt)
      return n = gn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, l !== Qf && (e = Error(i(422), { cause: l }), _i(fa(e, r)))) : (l !== Qf && (n = Error(i(423), {
        cause: l
      }), _i(
        fa(n, r)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = fa(l, r), u = Dd(
        e.stateNode,
        l,
        u
      ), id(e, u), Kt !== 4 && (Kt = 2)), !1;
    var f = Error(i(520), { cause: l });
    if (f = fa(f, r), ns === null ? ns = [f] : ns.push(f), Kt !== 4 && (Kt = 2), n === null) return !0;
    l = fa(l, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = u & -u, r.lanes |= e, e = Dd(r.stateNode, l, e), id(r, e), !1;
        case 1:
          if (n = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (eo === null || !eo.has(f))))
            return r.flags |= 65536, u &= -u, r.lanes |= u, u = nv(u), av(
              u,
              e,
              r,
              l
            ), id(r, u), !1;
          break;
        case 22:
          if (r.memoizedState !== null)
            return r.flags |= 65536, !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Nd = Error(i(461)), rn = !1;
  function un(e, n, r, l) {
    n.child = e === null ? iy(n, null, r, l) : Uo(
      n,
      e.child,
      r,
      l
    );
  }
  function rv(e, n, r, l, u) {
    r = r.render;
    var f = n.ref;
    if ("ref" in l) {
      var v = {};
      for (var w in l)
        w !== "ref" && (v[w] = l[w]);
    } else v = l;
    return $o(n), l = md(
      e,
      n,
      r,
      v,
      f,
      u
    ), w = hd(), e !== null && !rn ? (gd(e, n, u), Cr(e, n, u)) : (rt && w && bu(n), n.flags |= 1, un(e, n, l, u), n.child);
  }
  function ov(e, n, r, l, u) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" && !Yf(f) && f.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = f, lv(
        e,
        n,
        f,
        l,
        u
      )) : (e = yu(
        r.type,
        null,
        l,
        n,
        n.mode,
        u
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (f = e.child, !Ud(e, u)) {
      var v = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : ji, r(v, l) && e.ref === n.ref)
        return Cr(e, n, u);
    }
    return n.flags |= 1, e = gr(f, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function lv(e, n, r, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (ji(f, l) && e.ref === n.ref)
        if (rn = !1, n.pendingProps = l = f, Ud(e, u))
          (e.flags & 131072) !== 0 && (rn = !0);
        else
          return n.lanes = e.lanes, Cr(e, n, u);
    }
    return Bd(
      e,
      n,
      r,
      l,
      u
    );
  }
  function iv(e, n, r, l) {
    var u = l.children, f = e !== null ? e.memoizedState : null;
    if (e === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | r : r, e !== null) {
          for (l = n.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~f;
        } else l = 0, n.child = null;
        return sv(
          e,
          n,
          f,
          r,
          l
        );
      }
      if ((r & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Tu(
          n,
          f !== null ? f.cachePool : null
        ), f !== null ? cy(n, f) : ud(), fy(n);
      else
        return l = n.lanes = 536870912, sv(
          e,
          n,
          f !== null ? f.baseLanes | r : r,
          r,
          l
        );
    } else
      f !== null ? (Tu(n, f.cachePool), cy(n, f), Kr(), n.memoizedState = null) : (e !== null && Tu(n, null), ud(), Kr());
    return un(e, n, u, r), n.child;
  }
  function Ki(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function sv(e, n, r, l, u) {
    var f = ad();
    return f = f === null ? null : { parent: nn._currentValue, pool: f }, n.memoizedState = {
      baseLanes: r,
      cachePool: f
    }, e !== null && Tu(n, null), ud(), fy(n), e !== null && jo(e, n, l, !0), n.childLanes = u, null;
  }
  function Iu(e, n) {
    return n = Pu(
      { mode: n.mode, children: n.children },
      e.mode
    ), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function uv(e, n, r) {
    return Uo(n, e.child, null, r), e = Iu(n, n.pendingProps), e.flags |= 2, Kn(n), n.memoizedState = null, e;
  }
  function R2(e, n, r) {
    var l = n.pendingProps, u = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (rt) {
        if (l.mode === "hidden")
          return e = Iu(n, l), n.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Ki(null, e);
        if (fd(n), (e = $t) ? (e = $0(
          e,
          ma
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Hr !== null ? { id: qa, overflow: Ga } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Gg(e), r.return = n, n.child = r, fn = n, $t = null)) : e = null, e === null) throw Ir(n);
        return n.lanes = 536870912, null;
      }
      return Iu(n, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if (fd(n), u)
        if (n.flags & 256)
          n.flags &= -257, n = uv(
            e,
            n,
            r
          );
        else if (n.memoizedState !== null)
          n.child = e.child, n.flags |= 128, n = null;
        else throw Error(i(558));
      else if (rn || jo(e, n, r, !1), u = (r & e.childLanes) !== 0, rn || u) {
        if (Yr.current === null) {
          if (l = zt, l !== null && (v = On(l, r), v !== 0 && v !== f.retryLane))
            throw f.retryLane = v, zo(e, v), Un(l, e, v), Nd;
          ic();
        }
        n = uv(
          e,
          n,
          r
        );
      } else
        e = f.treeContext, $t = ga(v.nextSibling), fn = n, rt = !0, Ur = null, ma = !1, e !== null && Kg(n, e), n = Iu(n, l), n.flags |= 134221824;
      return n;
    }
    return e = gr(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function wl(e, n) {
    var r = n.ref;
    if (r === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(i(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function Bd(e, n, r, l, u) {
    return $o(n), r = md(
      e,
      n,
      r,
      l,
      void 0,
      u
    ), l = hd(), e !== null && !rn ? (gd(e, n, u), Cr(e, n, u)) : (rt && l && bu(n), n.flags |= 1, un(e, n, r, u), n.child);
  }
  function cv(e, n, r, l, u, f) {
    return $o(n), n.updateQueue = null, r = py(
      n,
      l,
      r,
      u
    ), dy(e), l = hd(), e !== null && !rn ? (gd(e, n, f), Cr(e, n, f)) : (rt && l && bu(n), n.flags |= 1, un(e, n, r, f), n.child);
  }
  function fv(e, n, r, l, u) {
    if ($o(n), n.stateNode === null) {
      var f = gl, v = r.contextType;
      typeof v == "object" && v !== null && (f = hn(v)), f = new r(l, f), n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = zd, n.stateNode = f, f._reactInternals = n, f = n.stateNode, f.props = l, f.state = n.memoizedState, f.refs = {}, od(n), v = r.contextType, f.context = typeof v == "object" && v !== null ? hn(v) : gl, f.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (Md(
        n,
        r,
        v,
        l
      ), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && zd.enqueueReplaceState(f, f.state, null), Vi(n, l, f, u), Fi(), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = n.stateNode;
      var w = n.memoizedProps, $ = Po(r, w);
      f.props = $;
      var q = f.context, ee = r.contextType;
      v = gl, typeof ee == "object" && ee !== null && (v = hn(ee));
      var le = r.getDerivedStateFromProps;
      ee = typeof le == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = n.pendingProps !== w, ee || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || q !== v) && Qy(
        n,
        f,
        l,
        v
      ), Vr = !1;
      var I = n.memoizedState;
      f.state = I, Vi(n, l, f, u), Fi(), q = n.memoizedState, w || I !== q || Vr ? (typeof le == "function" && (Md(
        n,
        r,
        le,
        l
      ), q = n.memoizedState), ($ = Vr || Wy(
        n,
        r,
        $,
        l,
        I,
        q,
        v
      )) ? (ee || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = q), f.props = l, f.state = q, f.context = v, l = $) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      f = n.stateNode, ld(e, n), v = n.memoizedProps, ee = Po(r, v), f.props = ee, le = n.pendingProps, I = f.context, q = r.contextType, $ = gl, typeof q == "object" && q !== null && ($ = hn(q)), w = r.getDerivedStateFromProps, (q = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== le || I !== $) && Qy(
        n,
        f,
        l,
        $
      ), Vr = !1, I = n.memoizedState, f.state = I, Vi(n, l, f, u), Fi();
      var Q = n.memoizedState;
      v !== le || I !== Q || Vr || e !== null && e.dependencies !== null && Cu(e.dependencies) ? (typeof w == "function" && (Md(
        n,
        r,
        w,
        l
      ), Q = n.memoizedState), (ee = Vr || Wy(
        n,
        r,
        ee,
        l,
        I,
        Q,
        $
      ) || e !== null && e.dependencies !== null && Cu(e.dependencies)) ? (q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, Q, $), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        l,
        Q,
        $
      )), typeof f.componentDidUpdate == "function" && (n.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = Q), f.props = l, f.state = Q, f.context = $, l = ee) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (n.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return f = l, wl(e, n), l = (n.flags & 128) !== 0, f || l ? (f = n.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : f.render(), n.flags |= 1, e !== null && l ? (n.child = Uo(
      n,
      e.child,
      null,
      u
    ), n.child = Uo(
      n,
      null,
      r,
      u
    )) : un(e, n, r, u), n.memoizedState = f.state, e = n.child) : e = Cr(
      e,
      n,
      u
    ), e;
  }
  function dv(e, n, r, l) {
    return No(), n.flags |= 256, un(e, n, r, l), n.child;
  }
  var jd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $d(e) {
    return { baseLanes: e, cachePool: ty() };
  }
  function Ld(e, n, r) {
    return e = e !== null ? e.childLanes & ~r : 0, n && (e |= Zn), e;
  }
  function pv(e, n, r) {
    var l = n.pendingProps, u = !1, f = (n.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (yn.current & 2) !== 0), v && (u = !0, n.flags &= -129), v = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (rt) {
        if (u ? Xr(n) : Kr(), (e = $t) ? (e = $0(
          e,
          ma
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Hr !== null ? { id: qa, overflow: Ga } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Gg(e), r.return = n, n.child = r, fn = n, $t = null)) : e = null, e === null) throw Ir(n);
        return $p(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      return f = l.children, l = l.fallback, u ? (Kr(), u = n.mode, f = Pu(
        { mode: "hidden", children: f },
        u
      ), l = Do(
        l,
        u,
        r,
        null
      ), f.return = n, l.return = n, f.sibling = l, n.child = f, l = n.child, l.memoizedState = $d(r), l.childLanes = Ld(
        e,
        v,
        r
      ), n.memoizedState = jd, Ki(null, l)) : (Xr(n), _d(n, f));
    }
    var w = e.memoizedState;
    if (w !== null) {
      var $ = w.dehydrated;
      if ($ !== null)
        return w2(
          e,
          n,
          f,
          v,
          l,
          $,
          w,
          r
        );
    }
    return u ? (Kr(), u = l.fallback, f = n.mode, w = e.child, $ = w.sibling, l = gr(w, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = w.subtreeFlags & 1206910976, $ !== null ? u = gr($, u) : (u = Do(
      u,
      f,
      r,
      null
    ), u.flags |= 2), u.return = n, l.return = n, l.sibling = u, n.child = l, Ki(null, l), l = n.child, u = e.child.memoizedState, u === null ? u = $d(r) : (f = u.cachePool, f !== null ? (w = nn._currentValue, f = f.parent !== w ? { parent: w, pool: w } : f) : f = ty(), u = {
      baseLanes: u.baseLanes | r,
      cachePool: f
    }), l.memoizedState = u, l.childLanes = Ld(
      e,
      v,
      r
    ), n.memoizedState = jd, Ki(e.child, l)) : (Xr(n), r = e.child, e = r.sibling, r = gr(r, {
      mode: "visible",
      children: l.children
    }), r.return = n, r.sibling = null, e !== null && (v = n.deletions, v === null ? (n.deletions = [e], n.flags |= 16) : v.push(e)), n.child = r, n.memoizedState = null, r);
  }
  function _d(e, n) {
    return n = Pu(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Pu(e, n) {
    return e = Ln(22, e, null, n), e.lanes = 0, e;
  }
  function Fu(e, n, r) {
    return Uo(n, e.child, null, r), e = _d(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function w2(e, n, r, l, u, f, v, w) {
    if (r)
      return n.flags & 256 ? (Xr(n), n.flags &= -257, Fu(
        e,
        n,
        w
      )) : n.memoizedState !== null ? (Kr(), n.child = e.child, n.flags |= 128, null) : (Kr(), f = u.fallback, v = n.mode, u = Pu(
        { mode: "visible", children: u.children },
        v
      ), f = Do(
        f,
        v,
        w,
        null
      ), f.flags |= 2, u.return = n, f.return = n, u.sibling = f, n.child = u, Uo(n, e.child, null, w), u = n.child, u.memoizedState = $d(w), u.childLanes = Ld(
        e,
        l,
        w
      ), n.memoizedState = jd, Ki(null, u));
    if (Xr(n), $p(f)) {
      if (l = f.nextSibling && f.nextSibling.dataset, l) var $ = l.dgst;
      return l = $, l !== "" && (u = Error(i(419)), u.stack = "", u.digest = l, _i({ value: u, source: null, stack: null })), Fu(
        e,
        n,
        w
      );
    }
    if (rn || jo(e, n, w, !1), l = (w & e.childLanes) !== 0, rn || l) {
      if (Yr.current !== null)
        return Fu(
          e,
          n,
          w
        );
      if (l = zt, l !== null && (u = On(
        l,
        w
      ), u !== 0 && u !== v.retryLane))
        throw v.retryLane = u, zo(e, u), Un(l, e, u), Nd;
      return jp(f) || ic(), Fu(
        e,
        n,
        w
      );
    }
    return jp(f) ? (n.flags |= 192, n.child = e.child, null) : (e = v.treeContext, $t = ga(f.nextSibling), fn = n, rt = !0, Ur = null, ma = !1, e !== null && Kg(n, e), n = _d(
      n,
      u.children
    ), n.flags |= 134221824, n);
  }
  function mv(e, n, r) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Su(e.return, n, r);
  }
  function hv(e) {
    for (var n = null; e !== null; ) {
      var r = e.alternate;
      r !== null && zu(r) === null && (n = e), e = e.sibling;
    }
    return n;
  }
  function Vu(e, n, r, l, u, f) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: r,
      tailMode: u,
      treeForkCount: f
    } : (v.isBackwards = n, v.rendering = null, v.renderingStartTime = 0, v.last = l, v.tail = r, v.tailMode = u, v.treeForkCount = f);
  }
  function kd(e) {
    var n = e.child;
    for (e.child = null; n !== null; ) {
      var r = n.sibling;
      n.sibling = e.child, e.child = n, n = r;
    }
  }
  function Hd(e, n, r) {
    var l = n.pendingProps, u = l.revealOrder, f = l.tail;
    l = l.children;
    var v = yn.current;
    if (n.flags & 128)
      return qi(n, v), null;
    var w = (v & 2) !== 0;
    if (w ? (v = v & 1 | 2, n.flags |= 128) : v &= 1, qi(n, v), u === "backwards" && e !== null ? (kd(e), un(e, n, l, r), kd(e)) : un(e, n, l, r), l = rt ? Li : 0, !w && e !== null && (e.flags & 128) !== 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && mv(e, r, n);
        else if (e.tag === 19)
          mv(e, r, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (u) {
      case "backwards":
        r = hv(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null, kd(n)), Vu(
          n,
          !0,
          u,
          null,
          f,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (r = null, u = n.child, n.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && zu(e) === null) {
            n.child = u;
            break;
          }
          e = u.sibling, u.sibling = r, r = u, u = e;
        }
        Vu(
          n,
          !0,
          r,
          null,
          f,
          l
        );
        break;
      case "together":
        Vu(
          n,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        n.memoizedState = null;
        break;
      default:
        r = hv(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null), Vu(
          n,
          !1,
          u,
          r,
          f,
          l
        );
    }
    return n.child;
  }
  function gv(e, n, r) {
    var l = n.pendingProps;
    return Pr(n, n.type, l.value), un(e, n, l.children, r), n.child;
  }
  function Cr(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), Jr |= n.lanes, (r & n.childLanes) === 0)
      if (e !== null) {
        if (jo(
          e,
          n,
          r,
          !1
        ), (r & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(i(153));
    if (n.child !== null) {
      for (e = n.child, r = gr(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; )
        e = e.sibling, r = r.sibling = gr(e, e.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function Ud(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Cu(e)));
  }
  function A2(e, n, r) {
    switch (n.tag) {
      case 3:
        Xe(n, n.stateNode.containerInfo), Pr(n, nn, e.memoizedState.cache), No();
        break;
      case 27:
      case 5:
        Tt(n);
        break;
      case 4:
        Xe(n, n.stateNode.containerInfo);
        break;
      case 10:
        Pr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, fd(n), null;
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return Xr(n), n.flags |= 128, null;
          l = jo(
            e,
            n,
            r,
            !1
          );
          var u = n.child.childLanes;
          return l || (r & u) !== 0 ? pv(e, n, r) : (Xr(n), e = Cr(
            e,
            n,
            r
          ), e !== null ? e.sibling : null);
        }
        Xr(n);
        break;
      case 19:
        if (n.flags & 128)
          return Hd(
            e,
            n,
            r
          );
        if (u = (e.flags & 128) !== 0, l = (r & n.childLanes) !== 0, l || (jo(
          e,
          n,
          r,
          !1
        ), l = (r & n.childLanes) !== 0), u) {
          if (l)
            return Hd(
              e,
              n,
              r
            );
          n.flags |= 128;
        }
        if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), qi(n, yn.current), l) break;
        return null;
      case 22:
        return n.lanes = 0, iv(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        Pr(n, nn, e.memoizedState.cache);
    }
    return Cr(e, n, r);
  }
  function yv(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        rn = !0;
      else {
        if (!Ud(e, r) && (n.flags & 128) === 0)
          return rn = !1, A2(
            e,
            n,
            r
          );
        rn = (e.flags & 131072) !== 0;
      }
    else
      rn = !1, rt && (n.flags & 1048576) !== 0 && Xg(n, Li, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var l = n.pendingProps;
          if (e = ko(n.elementType), n.type = e, typeof e == "function")
            Yf(e) ? (l = Po(e, l), n.tag = 1, n = fv(
              null,
              n,
              e,
              l,
              r
            )) : (n.tag = 0, n = Bd(
              null,
              n,
              e,
              l,
              r
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === j) {
                n.tag = 11, n = rv(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === G) {
                n.tag = 14, n = ov(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === X) {
                n.tag = 10, n.type = e, n = gv(
                  null,
                  n,
                  r
                );
                break e;
              }
            }
            throw n = ve(e) || e, Error(i(306, n, ""));
          }
        }
        return n;
      case 0:
        return Bd(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 1:
        return l = n.type, u = Po(
          l,
          n.pendingProps
        ), fv(
          e,
          n,
          l,
          u,
          r
        );
      case 3:
        e: {
          if (Xe(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          l = n.pendingProps;
          var f = n.memoizedState;
          u = f.element, ld(e, n), Vi(n, l, null, r);
          var v = n.memoizedState;
          if (l = v.cache, Pr(n, nn, l), l !== f.cache && ed(
            n,
            [nn],
            r,
            !0
          ), Fi(), l = v.element, f.isDehydrated)
            if (f = {
              element: l,
              isDehydrated: !1,
              cache: v.cache
            }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
              n = dv(
                e,
                n,
                l,
                r
              );
              break e;
            } else if (l !== u) {
              u = fa(
                Error(i(424)),
                n
              ), _i(u), n = dv(
                e,
                n,
                l,
                r
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for ($t = ga(e.firstChild), fn = n, rt = !0, Ur = null, ma = !0, r = iy(
                n,
                null,
                l,
                r
              ), n.child = r; r; )
                r.flags = r.flags & -3 | 134221824, r = r.sibling;
            }
          else {
            if (No(), l === u) {
              n = Cr(
                e,
                n,
                r
              );
              break e;
            }
            un(e, n, l, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return wl(e, n), e === null ? (r = P0(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = r : rt || (n.stateNode = S0(
          n.type,
          n.pendingProps,
          Ce.current,
          n
        )) : n.memoizedState = P0(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Tt(n), e === null && rt && (l = n.stateNode = k0(
          n.type,
          n.pendingProps,
          Ce.current
        ), fn = n, ma = !0, u = $t, ao(n.type) ? (Lp = u, $t = ga(l.firstChild)) : $t = u), un(
          e,
          n,
          n.pendingProps.children,
          r
        ), wl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && rt && ((u = l = $t) && (l = SE(
          l,
          n.type,
          n.pendingProps,
          ma
        ), l !== null ? (n.stateNode = l, fn = n, $t = ga(l.firstChild), ma = !1, u = !0) : u = !1), u || Ir(n)), Tt(n), u = n.type, f = n.pendingProps, v = e !== null ? e.memoizedProps : null, l = f.children, Ap(u, f) ? l = null : v !== null && Ap(u, v) && (n.flags |= 32), n.memoizedState !== null && (u = md(
          e,
          n,
          g2,
          null,
          null,
          r
        ), Vl._currentValue = u), wl(e, n), un(e, n, l, r), n.child;
      case 6:
        return e === null && rt && ((e = r = $t) && (r = CE(
          r,
          n.pendingProps,
          ma
        ), r !== null ? (n.stateNode = r, fn = n, $t = null, e = !0) : e = !1), e || Ir(n)), null;
      case 13:
        return pv(e, n, r);
      case 4:
        return Xe(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = Uo(
          n,
          null,
          l,
          r
        ) : un(e, n, l, r), n.child;
      case 11:
        return rv(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 7:
        return l = n.pendingProps, wl(e, n), un(e, n, l, r), n.child;
      case 8:
        return un(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 12:
        return un(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 10:
        return gv(e, n, r);
      case 9:
        return u = n.type._context, l = n.pendingProps.children, $o(n), u = hn(u), l = l(u), n.flags |= 1, un(e, n, l, r), n.child;
      case 14:
        return ov(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 15:
        return lv(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 19:
        return Hd(e, n, r);
      case 31:
        return R2(e, n, r);
      case 22:
        return iv(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        return $o(n), l = hn(nn), e === null ? (u = ad(), u === null && (u = zt, f = td(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= r), u = f), n.memoizedState = { parent: l, cache: u }, od(n), Pr(n, nn, u)) : ((e.lanes & r) !== 0 && (ld(e, n), Vi(n, null, null, r), Fi()), u = e.memoizedState, f = n.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), Pr(n, nn, l)) : (l = f.cache, Pr(n, nn, l), l !== u.cache && ed(
          n,
          [nn],
          r,
          !0
        ))), un(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 30:
        return n.stateNode === null && (n.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = n.pendingProps, l.name != null && l.name !== "auto" ? n.flags |= e === null ? 18882560 : 18874368 : rt && bu(n), e !== null && e.memoizedProps.name !== l.name ? n.flags |= 4194816 : wl(e, n), un(e, n, l.children, r), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(i(156, n.tag));
  }
  function Er(e) {
    e.flags |= 4;
  }
  function Id(e, n, r, l, u) {
    var f;
    if ((f = (e.mode & 32) !== 0) && (f = r === null ? G0(n, l) : G0(n, l) && (l.src !== r.src || l.srcSet !== r.srcSet)), f) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Zv()) e.flags |= 8192;
        else
          throw Ho = wu, rd;
    } else e.flags &= -16777217;
  }
  function vv(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Y0(n))
      if (Zv()) e.flags |= 8192;
      else
        throw Ho = wu, rd;
  }
  function qu(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? re() : 536870912, e.lanes |= n, Dl |= n);
  }
  function Wi(e, n) {
    if (!rt)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var r = e.tail, l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? e.tail = null : r.sibling = null;
      }
  }
  function Lt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
    if (n)
      for (var u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags & 1206910976, l |= u.flags & 1206910976, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = r, n;
  }
  function O2(e, n, r) {
    var l = n.pendingProps;
    switch (Wf(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Lt(n), null;
      case 1:
        return Lt(n), null;
      case 3:
        return r = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), br(nn), Ye(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bl(n) ? Er(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Zf())), Lt(n), null;
      case 26:
        var u = n.type, f = n.memoizedState;
        return e === null ? (Er(n), f !== null ? (Lt(n), vv(n, f)) : (Lt(n), Id(
          n,
          u,
          null,
          l,
          r
        ))) : f ? f !== e.memoizedState ? (Er(n), Lt(n), vv(n, f)) : (Lt(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== l && Er(n), Lt(n), Id(
          n,
          u,
          e,
          l,
          r
        )), null;
      case 27:
        if (Bt(n), r = Ce.current, u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Er(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(i(166));
            return Lt(n), n.subtreeFlags &= -33554433, null;
          }
          e = De.current, bl(n) ? Wg(n) : (e = k0(u, l, r), n.stateNode = e, Er(n));
        }
        return Lt(n), n.subtreeFlags &= -33554433, null;
      case 5:
        if (Bt(n), u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Er(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(i(166));
            return Lt(n), n.subtreeFlags &= -33554433, null;
          }
          if (f = De.current, bl(n))
            Wg(n);
          else {
            var v = is(
              Ce.current
            );
            switch (f) {
              case 1:
                f = v.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                f = v.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    f = v.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    f = v.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    f = v.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof l.is == "string" ? v.createElement("select", {
                      is: l.is
                    }) : v.createElement("select"), l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                    break;
                  default:
                    f = typeof l.is == "string" ? v.createElement(u, { is: l.is }) : v.createElement(u);
                }
            }
            f[Ie] = n, f[kt] = l;
            e: for (v = n.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6)
                f.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                v.child.return = v, v = v.child;
                continue;
              }
              if (v === n) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === n)
                  break e;
                v = v.return;
              }
              v.sibling.return = v.return, v = v.sibling;
            }
            n.stateNode = f;
            e: switch (bn(f, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Er(n);
          }
        }
        return Lt(n), n.subtreeFlags &= -33554433, Id(
          n,
          n.type,
          e === null ? null : e.memoizedProps,
          n.pendingProps,
          r
        ), null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && Er(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(i(166));
          if (e = Ce.current, bl(n)) {
            if (e = n.stateNode, r = n.memoizedProps, l = null, u = fn, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[Ie] = n, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || y0(e.nodeValue, r)), e || Ir(n, !0);
          } else
            e = is(e).createTextNode(
              l
            ), e[Ie] = n, n.stateNode = e;
        }
        return Lt(n), null;
      case 31:
        if (r = n.memoizedState, e === null || e.memoizedState !== null) {
          if (l = bl(n), r !== null) {
            if (e === null) {
              if (!l) throw Error(i(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(557));
              e[Ie] = n;
            } else
              No(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Lt(n), e = !1;
          } else
            r = Zf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return n.flags & 256 ? (Kn(n), n) : (Kn(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(i(558));
        }
        return Lt(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = bl(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(i(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(i(317));
              u[Ie] = n;
            } else
              No(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Lt(n), u = !1;
          } else
            u = Zf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return n.flags & 256 ? (Kn(n), n) : (Kn(n), null);
        }
        return Kn(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = n.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== u && (l.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), qu(n, n.updateQueue), Lt(n), null);
      case 4:
        return Ye(), e === null && Cp(n.stateNode.containerInfo), n.flags |= 67108864, Lt(n), null;
      case 10:
        return br(n.type), Lt(n), null;
      case 19:
        if (dd(n), l = n.memoizedState, l === null) return Lt(n), null;
        if (u = (n.flags & 128) !== 0, f = l.rendering, f === null)
          if (u) Wi(l, !1);
          else {
            if (Kt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (f = zu(e), f !== null) {
                  for (n.flags |= 128, Wi(l, !1), e = f.updateQueue, n.updateQueue = e, qu(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; )
                    qg(r, e), r = r.sibling;
                  return qi(
                    n,
                    yn.current & 1 | 2
                  ), rt && yr(n, l.treeForkCount), n.child;
                }
                e = e.sibling;
              }
            l.tail !== null && tn() > ac && (n.flags |= 128, u = !0, Wi(l, !1), n.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = zu(f), e !== null) {
              if (n.flags |= 128, u = !0, e = e.updateQueue, n.updateQueue = e, qu(n, e), Wi(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !f.alternate && !rt)
                return Lt(n), null;
            } else
              2 * tn() - l.renderingStartTime > ac && r !== 536870912 && (n.flags |= 128, u = !0, Wi(l, !1), n.lanes = 4194304);
          l.isBackwards ? (f.sibling = n.child, n.child = f) : (e = l.last, e !== null ? e.sibling = f : n.child = f, l.last = f);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (r = e; r !== null; ) {
              if (r.alternate !== null) {
                r = !1;
                break e;
              }
              r = r.sibling;
            }
            r = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = tn(), e.sibling = null, f = yn.current, f = u ? f & 1 | 2 : f & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !r || rt ? qi(n, f) : (r = f, we(gn, n), we(yn, r), Tn === null && (Tn = n)), rt && yr(n, l.treeForkCount), e;
        }
        return Lt(n), null;
      case 22:
      case 23:
        return Kn(n), cd(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (Lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Lt(n), r = n.updateQueue, r !== null && qu(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== r && (n.flags |= 2048), e !== null && ye(_o), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), br(nn), Lt(n), null;
      case 25:
        return null;
      case 30:
        return n.flags |= 33554432, Lt(n), null;
    }
    throw Error(i(156, n.tag));
  }
  function M2(e, n) {
    switch (Wf(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return br(nn), Ye(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Bt(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Kn(n), n.alternate === null)
            throw Error(i(340));
          No();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (Kn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(i(340));
          No();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return dd(n), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, e = n.memoizedState, e !== null && (e.rendering = null, e.tail = null), n.flags |= 4, n) : null;
      case 4:
        return Ye(), null;
      case 10:
        return br(n.type), null;
      case 22:
      case 23:
        return Kn(n), cd(), e !== null && ye(_o), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return br(nn), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bv(e, n) {
    switch (Wf(n), n.tag) {
      case 3:
        br(nn), Ye();
        break;
      case 26:
      case 27:
      case 5:
        Bt(n);
        break;
      case 4:
        Ye();
        break;
      case 31:
        n.memoizedState !== null && Kn(n);
        break;
      case 13:
        Kn(n);
        break;
      case 19:
        dd(n);
        break;
      case 10:
        br(n.type);
        break;
      case 22:
      case 23:
        Kn(n), cd(), e !== null && ye(_o);
        break;
      case 24:
        br(nn);
    }
  }
  function Qi(e, n) {
    try {
      var r = n.updateQueue, l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var f = r.create, v = r.inst;
            l = f(), v.destroy = l;
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (w) {
      wt(n, n.return, w);
    }
  }
  function Wr(e, n, r) {
    try {
      var l = n.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var v = l.inst, w = v.destroy;
            if (w !== void 0) {
              v.destroy = void 0, u = n;
              var $ = r, q = w;
              try {
                q();
              } catch (ee) {
                wt(
                  u,
                  $,
                  ee
                );
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (ee) {
      wt(n, n.return, ee);
    }
  }
  function xv(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        uy(n, r);
      } catch (l) {
        wt(e, e.return, l);
      }
    }
  }
  function Sv(e, n, r) {
    r.props = Po(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      wt(e, n, l);
    }
  }
  function Ya(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var u = e.stateNode, f = mr(e.memoizedProps, u);
            (u.ref === null || u.ref.name !== f) && (u.ref = O0(f)), l = u.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var v = new ea(e);
              h(
                e.child,
                !1,
                bE,
                v,
                void 0,
                void 0
              ), e.stateNode = v;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof r == "function" ? e.refCleanup = r(l) : r.current = l;
      }
    } catch (w) {
      wt(e, n, w);
    }
  }
  function vn(e, n) {
    var r = e.ref, l = e.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          wt(e, n, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          wt(e, n, u);
        }
      else r.current = null;
  }
  function Gu(e, n) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && n !== null)
      for (var r = 0; r < n.length; r++)
        j0(
          e.stateNode,
          n[r]
        );
  }
  function Cv(e) {
    for (var n = e.return; n !== null && (Fd(n) && j0(e.stateNode, n.stateNode), !Pd(n)); )
      n = n.return;
  }
  function Zi(e) {
    for (var n = e.return; n !== null && (Fd(n) && xE(e.stateNode, n.stateNode), !Pd(n)); )
      n = n.return;
  }
  function Pd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Fd(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Vd(e) {
    var n = e.type, r = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (u) {
      wt(e, e.return, u);
    }
  }
  function qd(e, n, r) {
    try {
      var l = e.stateNode;
      tE(l, e.type, r, n), l[kt] = n;
    } catch (u) {
      wt(e, e.return, u);
    }
  }
  function Ev(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ao(e.type) || e.tag === 4;
  }
  function Gd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ev(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ao(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Yd(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(u, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(u), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = Va)), Gu(e, l), gt = !0;
    else if (u !== 4 && (u === 27 && (Gu(e, l), l = null, ao(e.type) && (r = e.stateNode, n = null)), e = e.child, e !== null))
      for (Yd(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        Yd(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function Yu(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? r.insertBefore(u, n) : r.appendChild(u), Gu(e, l), gt = !0;
    else if (u !== 4 && (u === 27 && (Gu(e, l), l = null, ao(e.type) && (r = e.stateNode)), e = e.child, e !== null))
      for (Yu(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        Yu(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function Tv(e) {
    var n = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      bn(n, l, r), n[Ie] = e, n[kt] = r;
    } catch (f) {
      wt(e, e.return, f);
    }
  }
  var Xu = !1, Wn = null;
  function Rv(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Xu = !0);
  }
  var Xa = null;
  function wv() {
    var e = Xa;
    return Xa = null, e;
  }
  var _n = 0;
  function Al(e, n, r, l, u) {
    return _n = 0, Av(
      e.child,
      n,
      r,
      l,
      u
    );
  }
  function Av(e, n, r, l, u) {
    for (var f = !1; e !== null; ) {
      if (e.tag === 5) {
        var v = e.stateNode;
        if (l !== null) {
          var w = zp(v);
          l.push(w), w.view && (f = !0);
        } else
          f || zp(v).view && (f = !0);
        Xu = !0, w0(
          v,
          _n === 0 ? n : n + "_" + _n,
          r
        ), _n++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u || Av(
        e.child,
        n,
        r,
        l,
        u
      ) && (f = !0));
      e = e.sibling;
    }
    return f;
  }
  function Ka(e, n) {
    for (; e !== null; )
      e.tag === 5 ? A0(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || Ka(
        e.child,
        n
      )), e = e.sibling;
  }
  function Ku(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (Ku(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var n = e.memoizedProps;
          if (n.name == null || n.name === "auto")
            throw Error(i(544));
          var r = n.name;
          n = hr(n.default, n.share), n !== "none" && (Al(
            e,
            r,
            n,
            null,
            !1
          ) || Ka(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function Xd(e, n) {
    if (e.tag === 30) {
      var r = e.stateNode, l = e.memoizedProps, u = mr(l, r), f = hr(
        l.default,
        r.paired ? l.share : l.enter
      );
      f !== "none" ? Al(e, u, f, null, !1) ? (Ku(e), r.paired || n || $l(e, l.onEnter)) : Ka(e.child, !1) : Ku(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Xd(e, n), e = e.sibling;
    else Ku(e);
  }
  function Kd(e) {
    if (Wn !== null && Wn.size !== 0) {
      var n = Wn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var r = e.memoizedProps, l = r.name;
              if (l != null && l !== "auto") {
                var u = n.get(l);
                if (u !== void 0) {
                  var f = hr(
                    r.default,
                    r.share
                  );
                  if (f !== "none" && (Al(
                    e,
                    l,
                    f,
                    null,
                    !1
                  ) ? (f = e.stateNode, u.paired = f, f.paired = u, $l(e, r.onShare)) : Ka(e.child, !1)), n.delete(l), n.size === 0) break;
                }
              }
            }
            Kd(e);
          }
          e = e.sibling;
        }
    }
  }
  function Wd(e) {
    if (e.tag === 30) {
      var n = e.memoizedProps, r = mr(n, e.stateNode), l = Wn !== null ? Wn.get(r) : void 0, u = hr(
        n.default,
        l !== void 0 ? n.share : n.exit
      );
      u !== "none" && (Al(e, r, u, null, !1) ? l !== void 0 ? (u = e.stateNode, l.paired = u, u.paired = l, Wn.delete(r), $l(e, n.onShare)) : $l(e, n.onExit) : Ka(e.child, !1)), Wn !== null && Kd(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Wd(e), e = e.sibling;
    else
      Wn !== null && Kd(e);
  }
  function Ov(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, r = mr(n, e.stateNode);
        n = hr(n.default, n.update), e.flags &= -5, n !== "none" && Al(
          e,
          r,
          n,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Ov(e);
      e = e.sibling;
    }
  }
  function Qd(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var n = e.stateNode;
            n.paired !== null && (n.paired = null, Ka(e.child, !1));
          }
          Qd(e);
        }
        e = e.sibling;
      }
  }
  function Wu(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Ka(e.child, !1), Qd(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Wu(e), e = e.sibling;
    else Qd(e);
  }
  function Mv(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Ka(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Mv(e), e = e.sibling;
  }
  function Zd(e, n, r, l, u, f, v) {
    for (var w = !1; n !== null; ) {
      if (n.tag === 5) {
        var $ = n.stateNode;
        if (f !== null && _n < f.length) {
          var q = f[_n], ee = zp($);
          (q.view || ee.view) && (w = !0);
          var le;
          if (le = (e.flags & 4) === 0)
            if (ee.clip) le = !0;
            else {
              le = q.rect;
              var I = ee.rect;
              le = le.y !== I.y || le.x !== I.x || le.height !== I.height || le.width !== I.width;
            }
          le && (e.flags |= 4), ee.abs ? ee = !q.abs : (q = q.rect, ee = ee.rect, ee = q.height !== ee.height || q.width !== ee.width), ee && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && w0(
          $,
          _n === 0 ? r : r + "_" + _n,
          u
        ), w && (e.flags & 4) !== 0 || (Xa === null && (Xa = []), Xa.push(
          $,
          _n === 0 ? l : l + "_" + _n,
          n.memoizedProps
        )), _n++;
      } else (n.tag !== 22 || n.memoizedState === null) && (n.tag === 30 && v ? e.flags |= n.flags & 32 : Zd(
        e,
        n.child,
        r,
        l,
        u,
        f,
        v
      ) && (w = !0));
      n = n.sibling;
    }
    return w;
  }
  function zv(e, n) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var r = e.memoizedProps, l = e.stateNode, u = mr(r, l), f = hr(r.default, r.update), v;
        v = e.memoizedState, e.memoizedState = null, l = e;
        var w = e.child;
        _n = 0, u = Zd(
          l,
          w,
          u,
          u,
          f,
          v,
          !1
        ), (e.flags & 4) !== 0 && u && $l(e, r.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && zv(e);
      e = e.sibling;
    }
  }
  var dn = !1, St = !1, Wa = !1, Jd = !1, Dv = typeof WeakSet == "function" ? WeakSet : Set, pn = null, Qa = !1, Ji = !1, Qu = !1, ep = !1;
  function z2(e, n, r) {
    if (e = e.containerInfo, Rp = ql, e = $g(e), Uf(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var f = u.anchorOffset, v = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, v.nodeType;
            } catch {
              l = null;
              break e;
            }
            var w = 0, $ = -1, q = -1, ee = 0, le = 0, I = e, Q = null;
            t: for (; ; ) {
              for (var Se; I !== l || f !== 0 && I.nodeType !== 3 || ($ = w + f), I !== v || u !== 0 && I.nodeType !== 3 || (q = w + u), I.nodeType === 3 && (w += I.nodeValue.length), (Se = I.firstChild) !== null; )
                Q = I, I = Se;
              for (; ; ) {
                if (I === e) break t;
                if (Q === l && ++ee === f && ($ = w), Q === v && ++le === u && (q = w), (Se = I.nextSibling) !== null) break;
                I = Q, Q = I.parentNode;
              }
              I = Se;
            }
            l = $ === -1 || q === -1 ? null : { start: $, end: q };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (wp = { focusedElem: e, selectionRange: l }, ql = !1, r = (r & 335544064) === r, pn = n, n = r ? 9270 : 1024; pn !== null; ) {
      if (e = pn, r && (l = e.deletions, l !== null))
        for (f = 0; f < l.length; f++)
          r && Wd(l[f]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        r && Rv(e), Zu(r);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && r && Wd(l), Zu(r);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            r && Rv(e), Zu(r);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & n) !== 0 && l !== null ? (l.return = e, pn = l) : (r && Ov(e), Zu(r));
      }
    }
    Wn = null;
  }
  function Zu(e) {
    for (; pn !== null; ) {
      var n = pn, r = e, l = n.alternate, u = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && l !== null) {
            r = void 0, u = l.memoizedProps, l = l.memoizedState;
            var f = n.stateNode;
            try {
              var v = Po(
                n.type,
                u
              );
              r = f.getSnapshotBeforeUpdate(
                v,
                l
              ), f.__reactInternalSnapshotBeforeUpdate = r;
            } catch (w) {
              wt(n, n.return, w);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (l = n.stateNode.containerInfo, r = l.nodeType, r === 9)
              Bp(l);
            else if (r === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Bp(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          r && l !== null && (r = mr(
            l.memoizedProps,
            l.stateNode
          ), u = n.memoizedProps, u = hr(u.default, u.update), u !== "none" && Al(
            l,
            r,
            u,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(i(163));
      }
      if (l = n.sibling, l !== null) {
        l.return = n.return, pn = l;
        break;
      }
      pn = n.return;
    }
  }
  function Nv(e, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Za(e, r), l & 4 && Qi(5, r);
        break;
      case 1:
        if (Za(e, r), l & 4)
          if (e = r.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (v) {
              wt(r, r.return, v);
            }
          else {
            var u = Po(
              r.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              wt(
                r,
                r.return,
                v
              );
            }
          }
        l & 64 && xv(r), l & 512 && Ya(r, r.return);
        break;
      case 3:
        if (Za(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
          if (n = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            uy(e, n);
          } catch (v) {
            wt(r, r.return, v);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Tv(r);
      case 26:
      case 5:
        Za(e, r), n === null && l & 4 && Vd(r), l & 512 && Ya(r, r.return);
        break;
      case 12:
        Za(e, r);
        break;
      case 31:
        Za(e, r), l & 4 && Lv(e, r);
        break;
      case 13:
        Za(e, r), l & 4 && _v(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = P2.bind(
          null,
          r
        ), EE(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || dn, !l) {
          var f = n !== null && n.memoizedState !== null || St;
          n = dn, u = St, dn = l, (St = f) && !u ? (l = 2, (r.subtreeFlags & 8772) !== 0 && (l |= 1), Ba(
            e,
            r,
            l
          )) : Za(e, r), dn = n, St = u;
        }
        break;
      case 30:
        Za(e, r), l & 512 && Ya(r, r.return);
        break;
      case 7:
        l & 512 && Ya(r, r.return);
      default:
        Za(e, r);
    }
  }
  function tp(e, n) {
    for (e = e.child; e !== null; )
      Bv(e, n), e = e.sibling;
  }
  function Bv(e, n) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var r = e.stateNode;
          if (n) {
            var l = r.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var u = e.stateNode, f = e.memoizedProps.style, v = f != null && f.hasOwnProperty("display") ? f.display : null;
            u.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
          }
        } catch ($) {
          wt(e, e.return, $);
        }
        np(e, n);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = n ? "" : e.memoizedProps, gt = !0;
        } catch ($) {
          wt(e, e.return, $);
        }
        break;
      case 18:
        try {
          var w = e.stateNode;
          n ? R0(w, !0) : R0(e.stateNode, !1);
        } catch ($) {
          wt(e, e.return, $);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && tp(e, n);
        break;
      default:
        tp(e, n);
    }
  }
  function np(e, n) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var r = e, l = n;
          switch (r.tag) {
            case 4:
              Bv(r, l);
              break e;
            case 22:
              r.memoizedState === null && np(r, l);
              break e;
            default:
              np(r, l);
          }
        }
        e = e.sibling;
      }
  }
  function jv(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, jv(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && au(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var It = null, kn = !1;
  function Da(e, n, r) {
    for (r = r.child; r !== null; )
      $v(e, n, r), r = r.sibling;
  }
  function $v(e, n, r) {
    if (mn && typeof mn.onCommitFiberUnmount == "function")
      try {
        mn.onCommitFiberUnmount(fr, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        St || vn(r, n), Da(
          e,
          n,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && !St && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        St || vn(r, n), Zi(r);
        var l = It, u = kn;
        ao(r.type) && (It = r.stateNode, kn = !1), Da(
          e,
          n,
          r
        ), H0(
          r.stateNode,
          r.type,
          r.memoizedProps
        ), It = l, kn = u;
        break;
      case 5:
        St || vn(r, n), Zi(r);
      case 6:
        if (r.tag === 6 && Zi(r), l = It, u = kn, It = null, Da(
          e,
          n,
          r
        ), It = l, kn = u, It !== null)
          if (kn)
            try {
              (It.nodeType === 9 ? It.body : It.nodeName === "HTML" ? It.ownerDocument.body : It).removeChild(r.stateNode), gt = !0;
            } catch (f) {
              wt(
                r,
                n,
                f
              );
            }
          else
            try {
              It.removeChild(r.stateNode), gt = !0;
            } catch (f) {
              wt(
                r,
                n,
                f
              );
            }
        break;
      case 18:
        It !== null && (kn ? (e = It, T0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), Gl(e)) : T0(It, r.stateNode));
        break;
      case 4:
        l = It, u = kn, It = r.stateNode.containerInfo, kn = !0, Da(
          e,
          n,
          r
        ), It = l, kn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Wr(2, r, n), St || Wr(4, r, n), Da(
          e,
          n,
          r
        );
        break;
      case 1:
        St || (vn(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function" && Sv(
          r,
          n,
          l
        )), Da(
          e,
          n,
          r
        );
        break;
      case 21:
        Da(
          e,
          n,
          r
        );
        break;
      case 22:
        St = (l = St) || r.memoizedState !== null, Da(
          e,
          n,
          r
        ), St = l;
        break;
      case 30:
        vn(r, n), Da(
          e,
          n,
          r
        );
        break;
      case 7:
        St || vn(r, n), Da(
          e,
          n,
          r
        );
        break;
      default:
        Da(
          e,
          n,
          r
        );
    }
  }
  function Lv(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Gl(e);
      } catch (r) {
        wt(n, n.return, r);
      }
    }
  }
  function _v(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Gl(e);
      } catch (r) {
        wt(n, n.return, r);
      }
  }
  function D2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Dv()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Dv()), n;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Ju(e, n) {
    var r = D2(e);
    n.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var u = F2.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function Nn(e, n, r) {
    var l = n.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var f = l[u], v = e, w = n, $ = w;
        e: for (; $ !== null; ) {
          switch ($.tag) {
            case 27:
              if (ao($.type)) {
                It = $.stateNode, kn = !1;
                break e;
              }
              break;
            case 5:
              It = $.stateNode, kn = !1;
              break e;
            case 3:
            case 4:
              It = $.stateNode.containerInfo, kn = !0;
              break e;
          }
          $ = $.return;
        }
        if (It === null) throw Error(i(160));
        $v(v, w, f), It = null, kn = !1, v = f.alternate, v !== null && (v.return = null), f.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        kv(n, e, r), n = n.sibling;
  }
  var Na = null;
  function kv(e, n, r) {
    var l = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var f = 0; f < l.length; f++) {
            var v = l[f];
            v.ref.impl = v.nextImpl;
          }
        Nn(n, e, r), Bn(e), u & 4 && (Wr(3, e, e.return), Qi(3, e), Wr(5, e, e.return));
        break;
      case 1:
        Nn(n, e, r), Bn(e), u & 512 && (St || l === null || vn(l, l.return)), u & 64 && dn && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? n : r.concat(n))));
        break;
      case 26:
        if (f = Na, Nn(n, e, r), Bn(e), u & 512 && (St || l === null || vn(l, l.return)), u & 4)
          if (u = l !== null ? l.memoizedState : null, r = e.memoizedState, l === null)
            if (r === null)
              if (e.stateNode === null)
                if (dn)
                  e.stateNode = S0(
                    e.type,
                    e.memoizedProps,
                    n.containerInfo,
                    e
                  );
                else {
                  e: {
                    n = e.type, r = e.memoizedProps, u = f.ownerDocument || f;
                    t: switch (n) {
                      case "title":
                        l = u.getElementsByTagName("title")[0], (!l || l[Ri] || l[Ie] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = u.createElement(n), u.head.insertBefore(
                          l,
                          u.querySelector("head > title")
                        )), bn(l, n, r), l[Ie] = e, cn(l), n = l;
                        break e;
                      case "link":
                        if (f = q0(
                          "link",
                          "href",
                          u
                        ).get(n + (r.href || ""))) {
                          for (v = 0; v < f.length; v++)
                            if (l = f[v], l.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && l.getAttribute("rel") === (r.rel == null ? null : r.rel) && l.getAttribute("title") === (r.title == null ? null : r.title) && l.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                              f.splice(v, 1);
                              break t;
                            }
                        }
                        l = u.createElement(n), bn(l, n, r), u.head.appendChild(l);
                        break;
                      case "meta":
                        if (f = q0(
                          "meta",
                          "content",
                          u
                        ).get(n + (r.content || ""))) {
                          for (v = 0; v < f.length; v++)
                            if (l = f[v], l.getAttribute("content") === (r.content == null ? null : "" + r.content) && l.getAttribute("name") === (r.name == null ? null : r.name) && l.getAttribute("property") === (r.property == null ? null : r.property) && l.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && l.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                              f.splice(v, 1);
                              break t;
                            }
                        }
                        l = u.createElement(n), bn(l, n, r), u.head.appendChild(l);
                        break;
                      default:
                        throw Error(i(468, n));
                    }
                    l[Ie] = e, cn(l), n = l;
                  }
                  e.stateNode = n;
                }
              else
                dn || Up(f, e.type, e.stateNode);
            else
              e.stateNode = V0(
                f,
                r,
                e.memoizedProps
              );
          else
            u !== r ? (u === null ? (n = l.stateNode, n === null || St || n.parentNode.removeChild(n)) : u.count--, r === null ? dn || Up(f, e.type, e.stateNode) : V0(f, r, e.memoizedProps)) : r === null && e.stateNode !== null && qd(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        Nn(n, e, r), Bn(e), u & 512 && (St || l === null || vn(l, l.return)), l !== null && u & 4 && qd(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (f = Wa, Wa = !1, Nn(n, e, r), Wa = f, Bn(e), u & 512 && (St || l === null || vn(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ul(n, ""), gt = !0;
          } catch (ee) {
            wt(e, e.return, ee);
          }
        }
        u & 4 && e.stateNode != null && (n = e.memoizedProps, qd(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), u & 1024 && (Jd = !0);
        break;
      case 6:
        if (Nn(n, e, r), Bn(e), u & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          n = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = n, gt = !0;
          } catch (ee) {
            wt(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (gt = !1, mc = null, f = Na, Na = ss(n.containerInfo), Nn(n, e, r), Na = f, Bn(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Gl(n.containerInfo);
          } catch (ee) {
            wt(e, e.return, ee);
          }
        Jd && (Jd = !1, Hv(e)), gt = !1;
        break;
      case 4:
        u = Wa, Wa = dn, l = og(), f = Na, Na = ss(
          e.stateNode.containerInfo
        ), Nn(n, e, r), Bn(e), Na = f, gt && Ji && (Qu = !0), gt = l, Wa = u;
        break;
      case 12:
        Nn(n, e, r), Bn(e);
        break;
      case 31:
        Nn(n, e, r), Bn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ju(e, n)));
        break;
      case 13:
        Nn(n, e, r), Bn(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (nc = tn()), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ju(e, n)));
        break;
      case 22:
        f = e.memoizedState !== null, v = l !== null && l.memoizedState !== null;
        var w = dn, $ = St, q = Wa;
        dn = w || f, Wa = q || f, St = $ || v, Nn(n, e, r), St = $, Wa = q, dn = w, Bn(e), u & 8192 && (n = e.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, !f || l === null || v || dn || St || (n = v || St, r = dn, l = St, dn = f || dn, St = n, Qr(e, 2), dn = r, St = l), !f && Wa || tp(e, f)), u & 4 && (n = e.updateQueue, n !== null && (r = n.retryQueue, r !== null && (n.retryQueue = null, Ju(e, r))));
        break;
      case 19:
        Nn(n, e, r), Bn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Ju(e, n)));
        break;
      case 30:
        u & 512 && (St || l === null || vn(l, l.return)), u = og(), f = Ji, v = (r & 335544064) === r, w = e.memoizedProps, Ji = v && hr(
          w.default,
          w.update
        ) !== "none", Nn(n, e, r), Bn(e), v && l !== null && gt && (e.flags |= 4), Ji = f, gt = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (St || l === null || vn(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        Nn(n, e, r), Bn(e);
    }
  }
  function Bn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (Ev(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null; ) {
          if (Fd(u)) {
            var f = u.stateNode;
            l === null ? l = [f] : l.push(f);
          }
          if (Pd(u)) break;
          u = u.return;
        }
        var v = l;
        if (r == null) throw Error(i(160));
        switch (r.tag) {
          case 27:
            var w = r.stateNode, $ = Gd(e);
            Yu(
              e,
              $,
              w,
              v
            );
            break;
          case 5:
            var q = r.stateNode;
            r.flags & 32 && (ul(q, ""), r.flags &= -33);
            var ee = Gd(e);
            Yu(
              e,
              ee,
              q,
              v
            );
            break;
          case 3:
          case 4:
            var le = r.stateNode.containerInfo, I = Gd(e);
            Yd(
              e,
              I,
              le,
              v
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (Q) {
        wt(e, e.return, Q);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Hv(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Hv(n), n.tag === 5 && n.flags & 1024 && (n = n.stateNode, ql = !0, n.reset(), ql = !1), e = e.sibling;
      }
  }
  function Ol(e, n) {
    if (n.subtreeFlags & 9270)
      for (n = n.child; n !== null; )
        Uv(n, e), n = n.sibling;
    else zv(n);
  }
  function Uv(e, n) {
    var r = e.alternate;
    if (r === null) Xd(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (ep = Qa = !1, wv(), Ol(n, e), !Qa && !Qu) {
            if (e = Xa, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                r = e[l];
                var u = e[l + 1];
                A0(r, e[l + 2]), r = r.ownerDocument.documentElement, r !== null && r.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            e = n.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), ep = !0;
          }
          Xa = null;
          break;
        case 5:
          Ol(n, e);
          break;
        case 4:
          l = Qa, Qa = !1, Ol(n, e), Qa && (Qu = !0), Qa = l;
          break;
        case 22:
          e.memoizedState === null && (r.memoizedState !== null ? Xd(e, !1) : Ol(n, e));
          break;
        case 30:
          l = Qa, u = wv(), Qa = !1, Ol(n, e), Qa && (e.flags |= 4);
          var f = e.memoizedProps, v = e.stateNode;
          n = mr(f, v), v = mr(r.memoizedProps, v);
          var w = hr(f.default, f.update);
          w === "none" ? n = !1 : (f = r.memoizedState, r.memoizedState = null, r = e.child, _n = 0, n = Zd(
            e,
            r,
            n,
            v,
            w,
            f,
            !0
          ), _n !== (f === null ? 0 : f.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && n ? ($l(
            e,
            e.memoizedProps.onUpdate
          ), Xa = u) : u !== null && (u.push.apply(u, Xa), Xa = u), Qa = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          Ol(n, e);
      }
  }
  function Za(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Nv(e, n.alternate, n), n = n.sibling;
  }
  function Qr(e, n) {
    for (e = e.child; e !== null; ) {
      var r = e, l = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wr(4, r, r.return), Qr(
            r,
            l
          );
          break;
        case 1:
          vn(r, r.return);
          var u = r.stateNode;
          typeof u.componentWillUnmount == "function" && Sv(
            r,
            r.return,
            u
          ), Qr(
            r,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && H0(
            r.stateNode,
            r.type,
            r.memoizedProps
          );
        case 5:
          vn(r, r.return), r.tag !== 5 && r.tag !== 27 || Zi(r), Qr(
            r,
            l
          );
          break;
        case 6:
          Zi(r);
          break;
        case 26:
          vn(r, r.return), u = r.stateNode, r.memoizedState !== null || u === null || St || u.parentNode.removeChild(u), Qr(
            r,
            l
          );
          break;
        case 22:
          r.memoizedState === null && Qr(
            r,
            l
          );
          break;
        case 30:
          vn(r, r.return), Qr(
            r,
            l
          );
          break;
        case 7:
          vn(r, r.return);
        default:
          Qr(
            r,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Ba(e, n, r) {
    for (r = (n.subtreeFlags & 8772) !== 0 ? r : r & -2, n = n.child; n !== null; ) {
      var l = n.alternate, u = e, f = n, v = f.flags, w = (r & 1) !== 0;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ba(
            u,
            f,
            r
          ), Qi(4, f);
          break;
        case 1:
          if (Ba(
            u,
            f,
            r
          ), l = f, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (ee) {
              wt(l, l.return, ee);
            }
          if (l = f, u = l.updateQueue, u !== null) {
            var $ = l.stateNode;
            try {
              var q = u.shared.hiddenCallbacks;
              if (q !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < q.length; u++)
                  sy(q[u], $);
            } catch (ee) {
              wt(l, l.return, ee);
            }
          }
          w && v & 64 && xv(f), Ya(f, f.return);
          break;
        case 27:
          (r & 2) !== 0 && Tv(f);
        case 5:
          f.tag !== 5 && f.tag !== 27 || Cv(f), Ba(
            u,
            f,
            r
          ), w && l === null && v & 4 && Vd(f), Ya(f, f.return);
          break;
        case 6:
          Cv(f);
          break;
        case 26:
          $ = f.stateNode, f.memoizedState !== null || $ === null || dn || Up(
            ss($.ownerDocument),
            f.type,
            $
          ), Ba(
            u,
            f,
            r
          ), w && l === null && v & 4 && Vd(f), Ya(f, f.return);
          break;
        case 12:
          Ba(
            u,
            f,
            r
          );
          break;
        case 31:
          Ba(
            u,
            f,
            r
          ), w && v & 4 && Lv(u, f);
          break;
        case 13:
          Ba(
            u,
            f,
            r
          ), w && v & 4 && _v(u, f);
          break;
        case 22:
          f.memoizedState === null && Ba(
            u,
            f,
            r
          ), Ya(f, f.return);
          break;
        case 30:
          Ba(
            u,
            f,
            r
          ), Ya(f, f.return);
          break;
        case 7:
          Ya(f, f.return);
        default:
          Ba(
            u,
            f,
            r
          );
      }
      n = n.sibling;
    }
  }
  function ap(e, n) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && ki(r));
  }
  function rp(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ki(e));
  }
  function ha(e, n, r, l) {
    var u = (r & 335544064) === r;
    if (n.subtreeFlags & (u ? 10262 : 10256))
      for (n = n.child; n !== null; )
        Iv(
          e,
          n,
          r,
          l
        ), n = n.sibling;
    else u && Mv(n);
  }
  function Iv(e, n, r, l) {
    var u = (r & 335544064) === r;
    u && n.alternate === null && n.return !== null && n.return.alternate !== null && Wu(n);
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ha(
          e,
          n,
          r,
          l
        ), f & 2048 && Qi(9, n);
        break;
      case 1:
        ha(
          e,
          n,
          r,
          l
        );
        break;
      case 3:
        ha(
          e,
          n,
          r,
          l
        ), u && ep && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), f & 2048 && (f = null, n.alternate !== null && (f = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== f && (n.refCount++, f != null && ki(f)));
        break;
      case 12:
        if (f & 2048) {
          ha(
            e,
            n,
            r,
            l
          ), f = n.stateNode;
          try {
            var v = n.memoizedProps, w = v.id, $ = v.onPostCommit;
            typeof $ == "function" && $(
              w,
              n.alternate === null ? "mount" : "update",
              f.passiveEffectDuration,
              -0
            );
          } catch (q) {
            wt(n, n.return, q);
          }
        } else
          ha(
            e,
            n,
            r,
            l
          );
        break;
      case 31:
        ha(
          e,
          n,
          r,
          l
        );
        break;
      case 13:
        ha(
          e,
          n,
          r,
          l
        );
        break;
      case 23:
        break;
      case 22:
        v = n.stateNode, w = n.alternate, n.memoizedState !== null ? (u && w !== null && w.memoizedState === null && Wu(w), v._visibility & 2 ? ha(
          e,
          n,
          r,
          l
        ) : es(
          e,
          n
        )) : (u && w !== null && w.memoizedState !== null && Wu(n), v._visibility & 2 ? ha(
          e,
          n,
          r,
          l
        ) : (v._visibility |= 2, Ml(
          e,
          n,
          r,
          l,
          (n.subtreeFlags & 10256) !== 0 || !1
        ))), f & 2048 && ap(w, n);
        break;
      case 24:
        ha(
          e,
          n,
          r,
          l
        ), f & 2048 && rp(n.alternate, n);
        break;
      case 30:
        u && (f = n.alternate, f !== null && (Ka(f.child, !0), Ka(n.child, !0))), ha(
          e,
          n,
          r,
          l
        );
        break;
      default:
        ha(
          e,
          n,
          r,
          l
        );
    }
  }
  function Ml(e, n, r, l, u) {
    for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var f = e, v = n, w = r, $ = l, q = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ml(
            f,
            v,
            w,
            $,
            u
          ), Qi(8, v);
          break;
        case 23:
          break;
        case 22:
          var ee = v.stateNode;
          v.memoizedState !== null ? ee._visibility & 2 ? Ml(
            f,
            v,
            w,
            $,
            u
          ) : es(
            f,
            v
          ) : (ee._visibility |= 2, Ml(
            f,
            v,
            w,
            $,
            u
          )), u && q & 2048 && ap(
            v.alternate,
            v
          );
          break;
        case 24:
          Ml(
            f,
            v,
            w,
            $,
            u
          ), u && q & 2048 && rp(v.alternate, v);
          break;
        default:
          Ml(
            f,
            v,
            w,
            $,
            u
          );
      }
      n = n.sibling;
    }
  }
  function es(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e, l = n, u = l.flags;
        switch (l.tag) {
          case 22:
            es(r, l), u & 2048 && ap(
              l.alternate,
              l
            );
            break;
          case 24:
            es(r, l), u & 2048 && rp(l.alternate, l);
            break;
          default:
            es(r, l);
        }
        n = n.sibling;
      }
  }
  var Fo = 8192;
  function Vo(e, n, r) {
    if (e.subtreeFlags & Fo)
      for (e = e.child; e !== null; )
        Pv(
          e,
          n,
          r
        ), e = e.sibling;
  }
  function Pv(e, n, r) {
    switch (e.tag) {
      case 26:
        Vo(
          e,
          n,
          r
        ), e.flags & Fo && (e.memoizedState !== null ? _E(
          r,
          Na,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (n & 335544128) === n && K0(r, e)));
        break;
      case 5:
        Vo(
          e,
          n,
          r
        ), e.flags & Fo && (e = e.stateNode, (n & 335544128) === n && K0(r, e));
        break;
      case 3:
      case 4:
        var l = Na;
        Na = ss(e.stateNode.containerInfo), Vo(
          e,
          n,
          r
        ), Na = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Fo, Fo = 16777216, Vo(
          e,
          n,
          r
        ), Fo = l) : Vo(
          e,
          n,
          r
        ));
        break;
      case 30:
        if ((e.flags & Fo) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var u = e.stateNode;
          u.paired = null, Wn === null && (Wn = /* @__PURE__ */ new Map()), Wn.set(l, u);
        }
        Vo(
          e,
          n,
          r
        );
        break;
      default:
        Vo(
          e,
          n,
          r
        );
    }
  }
  function Fv(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function ts(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          pn = l, qv(
            l,
            e
          );
        }
      Fv(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Vv(e), e = e.sibling;
  }
  function Vv(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ts(e), e.flags & 2048 && Wr(9, e, e.return);
        break;
      case 3:
        ts(e);
        break;
      case 12:
        ts(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, ec(e)) : ts(e);
        break;
      default:
        ts(e);
    }
  }
  function ec(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          pn = l, qv(
            l,
            e
          );
        }
      Fv(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Wr(8, n, n.return), ec(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, ec(n));
          break;
        default:
          ec(n);
      }
      e = e.sibling;
    }
  }
  function qv(e, n) {
    for (; pn !== null; ) {
      var r = pn;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Wr(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ki(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, pn = l;
      else
        e: for (r = e; pn !== null; ) {
          l = pn;
          var u = l.sibling, f = l.return;
          if (jv(l), l === r) {
            pn = null;
            break e;
          }
          if (u !== null) {
            u.return = f, pn = u;
            break e;
          }
          pn = f;
        }
    }
  }
  var N2 = {
    getCacheForType: function(e) {
      var n = hn(nn), r = n.data.get(e);
      return r === void 0 && (r = e(), n.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return hn(nn).controller.signal;
    }
  }, B2 = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, zt = null, it = null, ct = 0, Rt = 0, Qn = null, Zr = !1, zl = !1, op = !1, Tr = 0, Kt = 0, Jr = 0, qo = 0, tc = 0, Zn = 0, Dl = 0, ns = null, Hn = null, lp = !1, nc = 0, Gv = 0, ac = 1 / 0, rc = null, eo = null, Gt = 0, ja = null, Go = null, Ja = 0, ip = 0, sp = null, Yv = null, Nl = null, Bl = null, jl = null, as = 0, oc = null;
  function Jn() {
    return (yt & 2) !== 0 && ct !== 0 ? ct & -ct : se.T !== null ? vp() : Ti();
  }
  function Xv() {
    if (Zn === 0)
      if ((ct & 536870912) === 0 || rt) {
        var e = $r;
        $r <<= 1, ($r & 3932160) === 0 && ($r = 262144), Zn = e;
      } else Zn = 536870912;
    return e = gn.current, e !== null && (e.flags |= 32), Zn;
  }
  function $l(e, n) {
    if (n != null) {
      var r = e.stateNode, l = r.ref;
      l === null && (l = r.ref = O0(
        mr(e.memoizedProps, r)
      )), Bl === null && (Bl = []), Bl.push(n.bind(null, l));
    }
  }
  function Un(e, n, r) {
    (e === zt && (Rt === 2 || Rt === 9) || e.cancelPendingCommit !== null) && (Ll(e, 0), to(
      e,
      ct,
      Zn,
      !1
    )), Pe(e, r), ((yt & 2) === 0 || e !== zt) && (e === zt && ((yt & 2) === 0 && (qo |= r), Kt === 4 && to(
      e,
      ct,
      Zn,
      !1
    )), er(e));
  }
  function Kv(e, n, r) {
    if ((yt & 6) !== 0) throw Error(i(327));
    var l = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || En(e, n), u = l ? L2(e, n) : cp(e, n, !0), f = l;
    do {
      if (u === 0) {
        zl && !l && to(e, n, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, f && !j2(r)) {
          u = cp(e, n, !1), f = !1;
          continue;
        }
        if (u === 2) {
          if (f = n, e.errorRecoveryDisabledLanes & f)
            var v = 0;
          else
            v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            n = v;
            e: {
              var w = e;
              u = ns;
              var $ = w.current.memoizedState.isDehydrated;
              if ($ && (Ll(w, v).flags |= 256), v = cp(
                w,
                v,
                !1
              ), v !== 2 && v !== 6) {
                if (op && !$) {
                  w.errorRecoveryDisabledLanes |= f, qo |= f, u = 4;
                  break e;
                }
                f = Hn, Hn = u, f !== null && (Hn === null ? Hn = f : Hn.push.apply(
                  Hn,
                  f
                ));
              }
              u = v;
            }
            if (f = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ll(e, 0), to(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, f = u, f) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((n & 4194048) !== n && (n & 62914560) !== n)
                break;
            case 6:
              to(
                l,
                n,
                Zn,
                !Zr
              );
              break e;
            case 2:
              Hn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((n & 62914560) === n && (u = nc + 300 - tn(), 10 < u)) {
            if (to(
              l,
              n,
              Zn,
              !Zr
            ), Vt(l, 0, !0) !== 0) break e;
            Ja = n, l.timeoutHandle = Mp(
              Wv.bind(
                null,
                l,
                r,
                Hn,
                rc,
                lp,
                n,
                Zn,
                qo,
                Dl,
                Zr,
                f,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Wv(
            l,
            r,
            Hn,
            rc,
            lp,
            n,
            Zn,
            qo,
            Dl,
            Zr,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    er(e);
  }
  function Wv(e, n, r, l, u, f, v, w, $, q, ee, le, I, Q) {
    e.timeoutHandle = -1;
    var Se = n.subtreeFlags, Oe = (f & 335544064) === f;
    if (le = null, (Oe || Se & 8192 || (Se & 16785408) === 16785408) && (le = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Va
    }, Wn = null, Pv(
      n,
      f,
      le
    ), Oe && (Se = le, Oe = e.containerInfo, Oe = (Oe.nodeType === 9 ? Oe : Oe.ownerDocument).__reactViewTransition, Oe != null && (Se.count++, Se.waitingForViewTransition = !0, Se = fs.bind(Se), Oe.finished.then(Se, Se))), Se = (f & 62914560) === f ? nc - tn() : (f & 4194048) === f ? Gv - tn() : 0, Se = kE(
      le,
      Se
    ), Se !== null)) {
      Ja = f, e.cancelPendingCommit = Se(
        r0.bind(
          null,
          e,
          n,
          f,
          r,
          l,
          u,
          v,
          w,
          $,
          q,
          ee,
          le,
          null,
          I,
          Q
        )
      ), to(e, f, v, !q);
      return;
    }
    r0(
      e,
      n,
      f,
      r,
      l,
      u,
      v,
      w,
      $,
      q,
      ee,
      le
    );
  }
  function j2(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var l = 0; l < r.length; l++) {
          var u = r[l], f = u.getSnapshot;
          u = u.value;
          try {
            if (!Xn(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = n.child, n.subtreeFlags & 16384 && r !== null)
        r.return = n, n = r;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function to(e, n, r, l) {
    n = Eo(e, n), n &= ~tc, n &= ~qo, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var u = n; 0 < u; ) {
      var f = 31 - sn(u), v = 1 << f;
      l[f] = -1, u &= ~v;
    }
    r !== 0 && xt(e, r, n);
  }
  function lc() {
    return (yt & 6) === 0 ? (rs(0), !1) : !0;
  }
  function up() {
    if (it !== null) {
      if (Rt === 0)
        var e = it.return;
      else
        e = it, vr = Bo = null, yd(e), Cl = null, Ii = 0, e = it;
      for (; e !== null; )
        bv(e.alternate, e), e = e.return;
      it = null;
    }
  }
  function Ll(e, n) {
    var r = e.timeoutHandle;
    return r !== -1 && (e.timeoutHandle = -1, rE(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Ja = 0, up(), zt = e, it = r = gr(e.current, null), ct = n, Rt = 0, Qn = null, Zr = !1, zl = En(e, n), op = !1, Dl = Zn = tc = qo = Jr = Kt = 0, Hn = ns = null, lp = !1, Tr = Eo(e, n), mu(), r;
  }
  function Qv(e, n) {
    We = null, se.H = Hu, n === Sl || n === Ru ? (n = ry(), Rt = 3) : n === rd ? (n = ry(), Rt = 4) : Rt = n === Nd ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Qn = n, it === null && (Kt = 1, Uu(
      e,
      fa(n, e.current)
    ));
  }
  function Zv() {
    var e = gn.current;
    return e === null ? !0 : (ct & 4194048) === ct ? Tn === null : (ct & 62914560) === ct || (ct & 536870912) !== 0 ? e === Tn : !1;
  }
  function Jv() {
    var e = se.H;
    return se.H = Hu, e === null ? Hu : e;
  }
  function e0() {
    var e = se.A;
    return se.A = N2, e;
  }
  function ic() {
    Kt = 4, Zr || (ct & 4194048) !== ct && gn.current !== null || (zl = !0), (Jr & 134217727) === 0 && (qo & 134217727) === 0 || zt === null || to(
      zt,
      ct,
      Zn,
      !1
    );
  }
  function cp(e, n, r) {
    var l = yt;
    yt |= 2;
    var u = Jv(), f = e0();
    (zt !== e || ct !== n) && (rc = null, Ll(e, n)), n = !1;
    var v = Kt;
    e: do
      try {
        if (Rt !== 0 && it !== null) {
          var w = it, $ = Qn;
          switch (Rt) {
            case 8:
              up(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gn.current === null && (n = !0);
              var q = Rt;
              if (Rt = 0, Qn = null, _l(e, w, $, q), r && zl) {
                v = 0;
                break e;
              }
              break;
            default:
              q = Rt, Rt = 0, Qn = null, _l(e, w, $, q);
          }
        }
        $2(), v = Kt;
        break;
      } catch (ee) {
        Qv(e, ee);
      }
    while (!0);
    return n && e.shellSuspendCounter++, vr = Bo = null, yt = l, se.H = u, se.A = f, it === null && (zt = null, ct = 0, mu()), v;
  }
  function $2() {
    for (; it !== null; ) t0(it);
  }
  function L2(e, n) {
    var r = yt;
    yt |= 2;
    var l = Jv(), u = e0();
    zt !== e || ct !== n ? (rc = null, ac = tn() + 500, Ll(e, n)) : zl = En(
      e,
      n
    );
    e: do
      try {
        if (Rt !== 0 && it !== null) {
          n = it;
          var f = Qn;
          t: switch (Rt) {
            case 1:
              Rt = 0, Qn = null, _l(e, n, f, 1);
              break;
            case 2:
            case 9:
              if (ny(f)) {
                Rt = 0, Qn = null, n0(n);
                break;
              }
              n = function() {
                Rt !== 2 && Rt !== 9 || zt !== e || (Rt = 7), er(e);
              }, f.then(n, n);
              break e;
            case 3:
              Rt = 7;
              break e;
            case 4:
              Rt = 5;
              break e;
            case 7:
              ny(f) ? (Rt = 0, Qn = null, n0(n)) : (Rt = 0, Qn = null, _l(e, n, f, 7));
              break;
            case 5:
              var v = null;
              switch (it.tag) {
                case 26:
                  v = it.memoizedState;
                case 5:
                case 27:
                  var w = it;
                  if (v ? Y0(v) : w.stateNode.complete) {
                    Rt = 0, Qn = null;
                    var $ = w.sibling;
                    if ($ !== null) it = $;
                    else {
                      var q = w.return;
                      q !== null ? (it = q, sc(q)) : it = null;
                    }
                    break t;
                  }
              }
              Rt = 0, Qn = null, _l(e, n, f, 5);
              break;
            case 6:
              Rt = 0, Qn = null, _l(e, n, f, 6);
              break;
            case 8:
              up(), Kt = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        _2();
        break;
      } catch (ee) {
        Qv(e, ee);
      }
    while (!0);
    return vr = Bo = null, se.H = l, se.A = u, yt = r, it !== null ? 0 : (zt = null, ct = 0, mu(), Kt);
  }
  function _2() {
    for (; it !== null && !Ft(); )
      t0(it);
  }
  function t0(e) {
    var n = yv(e.alternate, e, Tr);
    e.memoizedProps = e.pendingProps, n === null ? sc(e) : it = n;
  }
  function n0(e) {
    var n = e, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = cv(
          r,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ct
        );
        break;
      case 11:
        n = cv(
          r,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ct
        );
        break;
      case 5:
        yd(n);
        var l = n;
        l === fn && (rt ? (xu(l), l.tag === 5 && l.stateNode != null && ($t = l.stateNode)) : (xu(l), rt = !0));
      default:
        bv(r, n), n = it = qg(n, Tr), n = yv(r, n, Tr);
    }
    e.memoizedProps = e.pendingProps, n === null ? sc(e) : it = n;
  }
  function _l(e, n, r, l) {
    vr = Bo = null, yd(n), Cl = null, Ii = 0;
    var u = n.return;
    try {
      if (T2(
        e,
        u,
        n,
        r,
        ct
      )) {
        Kt = 1, Uu(
          e,
          fa(r, e.current)
        ), it = null;
        return;
      }
    } catch (f) {
      if (u !== null) throw it = u, f;
      Kt = 1, Uu(
        e,
        fa(r, e.current)
      ), it = null;
      return;
    }
    n.flags & 32768 ? (rt || l === 1 ? e = !0 : zl || (ct & 536870912) !== 0 ? e = !1 : (Zr = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = gn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), a0(n, e)) : sc(n);
  }
  function sc(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        a0(
          n,
          Zr
        );
        return;
      }
      e = n.return;
      var r = O2(
        n.alternate,
        n,
        Tr
      );
      if (r !== null) {
        it = r;
        return;
      }
      if (n = n.sibling, n !== null) {
        it = n;
        return;
      }
      it = n = e;
    } while (n !== null);
    Kt === 0 && (Kt = 5);
  }
  function a0(e, n) {
    do {
      var r = M2(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, it = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
        it = e;
        return;
      }
      it = e = r;
    } while (e !== null);
    Kt = 6, it = null;
  }
  function r0(e, n, r, l, u, f, v, w, $, q, ee, le) {
    e.cancelPendingCommit = null;
    do
      uc();
    while (Gt !== 0);
    if ((yt & 6) !== 0) throw Error(i(327));
    if (n !== null) {
      if (n === e.current) throw Error(i(177));
      e === zt && (it = zt = null, ct = 0), Go = n, ja = e, Ja = r, sp = u, Yv = l, k2(
        e,
        n,
        r,
        v,
        w,
        $,
        le
      );
    }
  }
  function k2(e, n, r, l, u, f, v) {
    var w = n.lanes | n.childLanes;
    if (ip = w, w |= qf, ot(
      e,
      r,
      w,
      l,
      u,
      f
    ), Bl = null, (r & 335544064) === r ? (jl = d2(e), l = 10262) : (jl = null, l = 10256), (n.subtreeFlags & l) !== 0 || (n.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, V2(Ma, function() {
      return mp(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Xu = !1, l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
      l = se.T, se.T = null, u = ue.p, ue.p = 2, f = yt, yt |= 4;
      try {
        z2(e, n, r);
      } finally {
        yt = f, ue.p = u, se.T = l;
      }
    }
    Gt = 1, Xu ? Nl = cE(
      v,
      e.containerInfo,
      jl,
      fp,
      dp,
      U2,
      pp,
      mp,
      H2
    ) : (fp(), dp(), pp());
  }
  function H2(e) {
    if (Gt !== 0) {
      var n = ja.onRecoverableError;
      n(e, { componentStack: null });
    }
  }
  function U2() {
    Gt === 3 && (Gt = 0, Uv(Go, ja), Gt = 4);
  }
  function fp() {
    if (Gt === 1) {
      Gt = 0;
      var e = ja, n = Go, r = Ja, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = se.T, se.T = null;
        var u = ue.p;
        ue.p = 2;
        var f = yt;
        yt |= 4;
        try {
          Ji = Qu = !1, kv(n, e, r), r = wp;
          var v = $g(e.containerInfo), w = r.focusedElem, $ = r.selectionRange;
          if (v !== w && w && w.ownerDocument && jg(
            w.ownerDocument.documentElement,
            w
          )) {
            if ($ !== null && Uf(w)) {
              var q = $.start, ee = $.end;
              if (ee === void 0 && (ee = q), "selectionStart" in w)
                w.selectionStart = q, w.selectionEnd = Math.min(
                  ee,
                  w.value.length
                );
              else {
                var le = w.ownerDocument || document, I = le && le.defaultView || window;
                if (I.getSelection) {
                  var Q = I.getSelection(), Se = w.textContent.length, Oe = Math.min($.start, Se), Qe = $.end === void 0 ? Oe : Math.min($.end, Se);
                  !Q.extend && Oe > Qe && (v = Qe, Qe = Oe, Oe = v);
                  var V = Bg(
                    w,
                    Oe
                  ), H = Bg(
                    w,
                    Qe
                  );
                  if (V && H && (Q.rangeCount !== 1 || Q.anchorNode !== V.node || Q.anchorOffset !== V.offset || Q.focusNode !== H.node || Q.focusOffset !== H.offset)) {
                    var K = le.createRange();
                    K.setStart(V.node, V.offset), Q.removeAllRanges(), Oe > Qe ? (Q.addRange(K), Q.extend(H.node, H.offset)) : (K.setEnd(H.node, H.offset), Q.addRange(K));
                  }
                }
              }
            }
            for (le = [], Q = w; Q = Q.parentNode; )
              Q.nodeType === 1 && le.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < le.length; w++) {
              var oe = le[w];
              oe.element.scrollLeft = oe.left, oe.element.scrollTop = oe.top;
            }
          }
          ql = !!Rp, wp = Rp = null;
        } finally {
          yt = f, ue.p = u, se.T = l;
        }
      }
      e.current = n, Gt = 2;
    }
  }
  function dp() {
    if (Gt === 2) {
      Gt = 0;
      var e = ja, n = Go, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = se.T, se.T = null;
        var l = ue.p;
        ue.p = 2;
        var u = yt;
        yt |= 4;
        try {
          Nv(e, n.alternate, n);
        } finally {
          yt = u, ue.p = l, se.T = r;
        }
      }
      Gt = 3;
    }
  }
  function pp() {
    if (Gt === 4 || Gt === 3) {
      Gt = 0;
      var e = Nl;
      Nl = null, jn();
      var n = ja, r = Go, l = Ja, u = Yv, f = (l & 335544064) === l ? 10262 : 10256;
      if ((r.subtreeFlags & f) !== 0 || (r.flags & f) !== 0 ? Gt = 5 : (Gt = 0, Go = ja = null, o0(n, n.pendingLanes)), f = n.pendingLanes, f === 0 && (eo = null), Ei(l), r = r.stateNode, mn && typeof mn.onCommitFiberRoot == "function")
        try {
          mn.onCommitFiberRoot(
            fr,
            r,
            void 0,
            (r.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        r = se.T, f = ue.p, ue.p = 2, se.T = null;
        try {
          for (var v = n.onRecoverableError, w = 0; w < u.length; w++) {
            var $ = u[w];
            v($.value, {
              componentStack: $.stack
            });
          }
        } finally {
          se.T = r, ue.p = f;
        }
      }
      if (u = Bl, v = jl, jl = null, u !== null && (Bl = null, v === null && (v = []), e !== null))
        for ($ = 0; $ < u.length; $++)
          r = (0, u[$])(
            v
          ), r !== void 0 && e.finished.finally(r);
      (Ja & 3) !== 0 && uc(), er(n), f = n.pendingLanes, (l & 261930) !== 0 && (f & 42) !== 0 ? n === oc ? as++ : (as = 0, oc = n) : (as = 0, oc = null), rs(0);
    }
  }
  function o0(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ki(n)));
  }
  function uc() {
    return Nl !== null && (Nl.skipTransition(), Nl = null), fp(), dp(), pp(), mp();
  }
  function mp() {
    if (Gt !== 5) return !1;
    var e = ja, n = ip;
    ip = 0;
    var r = Ei(Ja), l = se.T, u = ue.p;
    try {
      ue.p = 32 > r ? 32 : r, se.T = null, r = sp, sp = null;
      var f = ja, v = Ja;
      if (Gt = 0, Go = ja = null, Ja = 0, (yt & 6) !== 0) throw Error(i(331));
      var w = yt;
      if (yt |= 4, Vv(f.current), Iv(
        f,
        f.current,
        v,
        r
      ), yt = w, rs(0, !1), mn && typeof mn.onPostCommitFiberRoot == "function")
        try {
          mn.onPostCommitFiberRoot(fr, f);
        } catch {
        }
      return !0;
    } finally {
      ue.p = u, se.T = l, o0(e, n);
    }
  }
  function l0(e, n, r) {
    n = fa(r, n), n = Dd(e.stateNode, n, 2), e = Gr(e, n, 2), e !== null && (Pe(e, 2), er(e));
  }
  function wt(e, n, r) {
    if (e.tag === 3)
      l0(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          l0(
            n,
            e,
            r
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (eo === null || !eo.has(l))) {
            e = fa(r, e), r = nv(2), l = Gr(n, r, 2), l !== null && (av(
              r,
              l,
              n,
              e
            ), Pe(l, 2), er(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function hp(e, n, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new B2();
      var u = /* @__PURE__ */ new Set();
      l.set(n, u);
    } else
      u = l.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(n, u));
    u.has(r) || (op = !0, u.add(r), e = I2.bind(null, e, n, r), n.then(e, e));
  }
  function I2(e, n, r) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, zt === e && (ct & r) === r && ((Kt === 4 || Kt === 3 && (ct & 62914560) === ct && 300 > tn() - nc) && (yt & 2) === 0 ? Ll(e, 0) : tc |= r, Dl === ct && (Dl = 0)), er(e);
  }
  function i0(e, n) {
    n === 0 && (n = re()), e = zo(e, n), e !== null && (Pe(e, n), er(e));
  }
  function P2(e) {
    var n = e.memoizedState, r = 0;
    n !== null && (r = n.retryLane), i0(e, r);
  }
  function F2(e, n) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(n), i0(e, r);
  }
  function V2(e, n) {
    return ze(e, n);
  }
  var kl = null, Hl = null, gp = !1, cc = !1, yp = !1, no = 0;
  function er(e) {
    e !== Hl && e.next === null && (Hl === null ? kl = Hl = e : Hl = Hl.next = e), cc = !0, gp || (gp = !0, G2());
  }
  function rs(e, n) {
    if (!yp && cc) {
      yp = !0;
      do
        for (var r = !1, l = kl; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var v = l.suspendedLanes, w = l.pingedLanes;
              f = (1 << 31 - sn(42 | e) + 1) - 1, f &= u & ~(v & ~w), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (r = !0, f0(l, f));
          } else
            f = ct, f = Vt(
              l,
              l === zt ? f : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (f & 3) === 0 || En(l, f) || (r = !0, f0(l, f));
          l = l.next;
        }
      while (r);
      yp = !1;
    }
  }
  function q2() {
    s0();
  }
  function s0() {
    cc = gp = !1;
    var e = 0;
    no !== 0 && aE() && (e = no);
    for (var n = tn(), r = null, l = kl; l !== null; ) {
      var u = l.next, f = u0(l, n);
      f === 0 ? (l.next = null, r === null ? kl = u : r.next = u, u === null && (Hl = r)) : (r = l, (e !== 0 || (f & 3) !== 0) && (cc = !0)), l = u;
    }
    Gt !== 0 && Gt !== 5 || rs(e), no !== 0 && (no = 0);
  }
  function u0(e, n) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var v = 31 - sn(f), w = 1 << v, $ = u[v];
      $ === -1 ? ((w & r) === 0 || (w & l) !== 0) && (u[v] = ie(w, n)) : $ <= n && (e.expiredLanes |= w), f &= ~w;
    }
    if (n = zt, r = ct, r = Vt(
      e,
      e === n ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, r === 0 || e === n && (Rt === 2 || Rt === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Je(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || En(e, r)) {
      if (n = r & -r, n === e.callbackPriority) return n;
      switch (l !== null && Je(l), Ei(r)) {
        case 2:
        case 8:
          r = Oa;
          break;
        case 32:
          r = Ma;
          break;
        case 268435456:
          r = So;
          break;
        default:
          r = Ma;
      }
      return l = c0.bind(null, e), r = ze(r, l), e.callbackPriority = n, e.callbackNode = r, n;
    }
    return l !== null && l !== null && Je(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function c0(e, n) {
    if (Gt !== 0 && Gt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (uc() && e.callbackNode !== r)
      return null;
    var l = ct;
    return l = Vt(
      e,
      e === zt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Kv(e, l, n), u0(e, tn()), e.callbackNode != null && e.callbackNode === r ? c0.bind(null, e) : null);
  }
  function f0(e, n) {
    if (uc()) return null;
    Kv(e, n, !0);
  }
  function G2() {
    oE(function() {
      (yt & 6) !== 0 ? ze(
        Pa,
        q2
      ) : s0();
    });
  }
  function vp() {
    if (no === 0) {
      var e = Lo;
      e === 0 && (e = jr, jr <<= 1, (jr & 261888) === 0 && (jr = 256)), no = e;
    }
    return no;
  }
  function d0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : lu(e);
  }
  function Y2(e, n, r, l, u) {
    if (n === "submit" && r && r.stateNode === u) {
      var f = d0(
        (u[kt] || null).action
      ), v = l.submitter;
      v && (n = (n = v[kt] || null) ? d0(n.formAction) : v.getAttribute("formAction"), n !== null && (f = n, v = null));
      var w = new cu(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (no !== 0) {
                  var $ = new FormData(u, v);
                  wd(
                    r,
                    {
                      pending: !0,
                      data: $,
                      method: u.method,
                      action: f
                    },
                    null,
                    $
                  );
                }
              } else
                typeof f == "function" && (w.preventDefault(), $ = new FormData(u, v), wd(
                  r,
                  {
                    pending: !0,
                    data: $,
                    method: u.method,
                    action: f
                  },
                  f,
                  $
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var bp = 0; bp < Vf.length; bp++) {
    var xp = Vf[bp], X2 = xp.toLowerCase(), K2 = xp[0].toUpperCase() + xp.slice(1);
    za(
      X2,
      "on" + K2
    );
  }
  za(kg, "onAnimationEnd"), za(Hg, "onAnimationIteration"), za(Ug, "onAnimationStart"), za("dblclick", "onDoubleClick"), za("focusin", "onFocus"), za("focusout", "onBlur"), za(r2, "onTransitionRun"), za(o2, "onTransitionStart"), za(l2, "onTransitionCancel"), za(Ig, "onTransitionEnd"), il("onMouseEnter", ["mouseout", "mouseover"]), il("onMouseLeave", ["mouseout", "mouseover"]), il("onPointerEnter", ["pointerout", "pointerover"]), il("onPointerLeave", ["pointerout", "pointerover"]), Ao(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ao(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ao("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ao(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ao(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ao(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var os = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), W2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(os)
  );
  function p0(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r], u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (n)
          for (var v = l.length - 1; 0 <= v; v--) {
            var w = l[v], $ = w.instance, q = w.currentTarget;
            if (w = w.listener, $ !== f && u.isPropagationStopped())
              break e;
            f = w, u.currentTarget = q;
            try {
              f(u);
            } catch (ee) {
              pu(ee);
            }
            u.currentTarget = null, f = $;
          }
        else
          for (v = 0; v < l.length; v++) {
            if (w = l[v], $ = w.instance, q = w.currentTarget, w = w.listener, $ !== f && u.isPropagationStopped())
              break e;
            f = w, u.currentTarget = q;
            try {
              f(u);
            } catch (ee) {
              pu(ee);
            }
            u.currentTarget = null, f = $;
          }
      }
    }
  }
  function st(e, n) {
    var r = n[Lr];
    r === void 0 && (r = n[Lr] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (m0(n, e, 2, !1), r.add(l));
  }
  function Sp(e, n, r) {
    var l = 0;
    n && (l |= 4), m0(
      r,
      e,
      l,
      n
    );
  }
  var fc = "_reactListening" + Math.random().toString(36).slice(2);
  function Cp(e) {
    if (!e[fc]) {
      e[fc] = !0, tg.forEach(function(r) {
        r !== "selectionchange" && (W2.has(r) || Sp(r, !1, e), Sp(r, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[fc] || (n[fc] = !0, Sp("selectionchange", !1, n));
    }
  }
  function m0(e, n, r, l) {
    switch (ab(n)) {
      case 2:
        var u = PE;
        break;
      case 8:
        u = FE;
        break;
      default:
        u = Pp;
    }
    r = u.bind(
      null,
      n,
      r,
      e
    ), u = void 0, !zf || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(n, r, {
      capture: !0,
      passive: u
    }) : e.addEventListener(n, r, !0) : u !== void 0 ? e.addEventListener(n, r, {
      passive: u
    }) : e.addEventListener(n, r, !1);
  }
  function Ep(e, n, r, l, u) {
    var f = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var w = l.stateNode.containerInfo;
          if (w === u) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var $ = v.tag;
              if (($ === 3 || $ === 4) && v.stateNode.containerInfo === u)
                return;
              v = v.return;
            }
          for (; w !== null; ) {
            if (v = wo(w), v === null) return;
            if ($ = v.tag, $ === 5 || $ === 6 || $ === 26 || $ === 27) {
              l = f = v;
              continue e;
            }
            w = w.parentNode;
          }
        }
        l = l.return;
      }
    mg(function() {
      var q = f, ee = Of(r), le = [];
      e: {
        var I = Pg.get(e);
        if (I !== void 0) {
          var Q = cu, Se = e;
          switch (e) {
            case "keypress":
              if (su(r) === 0) break e;
            case "keydown":
            case "keyup":
              Q = jC;
              break;
            case "focusin":
              Se = "focus", Q = jf;
              break;
            case "focusout":
              Se = "blur", Q = jf;
              break;
            case "beforeblur":
            case "afterblur":
              Q = jf;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = yg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = CC;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = HC;
              break;
            case kg:
            case Hg:
            case Ug:
              Q = RC;
              break;
            case Ig:
              Q = IC;
              break;
            case "scroll":
            case "scrollend":
              Q = xC;
              break;
            case "wheel":
              Q = FC;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = AC;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = bg;
              break;
            case "submit":
              Q = _C;
              break;
            case "toggle":
            case "beforetoggle":
              Q = qC;
          }
          var Oe = (n & 4) !== 0, Qe = !Oe && (e === "scroll" || e === "scrollend"), V = Oe ? I !== null ? I + "Capture" : null : I;
          Oe = [];
          for (var H = q, K; H !== null; ) {
            var oe = H;
            if (K = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || K === null || V === null || (oe = Ai(H, V), oe != null && Oe.push(
              ls(H, oe, K)
            )), Qe) break;
            H = H.return;
          }
          0 < Oe.length && (I = new Q(
            I,
            Se,
            null,
            r,
            ee
          ), le.push({ event: I, listeners: Oe }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Q = e === "mouseover" || e === "pointerover", I = e === "mouseout" || e === "pointerout", Q && r !== Af && (Se = r.relatedTarget || r.fromElement) && (wo(Se) || Se[Mn]))
            break e;
          (I || Q) && (Se = ee.window === ee ? ee : (Q = ee.ownerDocument) ? Q.defaultView || Q.parentWindow : window, I ? (Q = r.relatedTarget || r.toElement, I = q, Q = Q ? wo(Q) : null, Q !== null && (Qe = c(Q), Oe = Q.tag, Q !== Qe || Oe !== 5 && Oe !== 27 && Oe !== 6) && (Q = null)) : (I = null, Q = q), I !== Q && (Oe = yg, oe = "onMouseLeave", V = "onMouseEnter", H = "mouse", (e === "pointerout" || e === "pointerover") && (Oe = bg, oe = "onPointerLeave", V = "onPointerEnter", H = "pointer"), Qe = I == null ? Se : wi(I), K = Q == null ? Se : wi(Q), Se = new Oe(
            oe,
            H + "leave",
            I,
            r,
            ee
          ), Se.target = Qe, Se.relatedTarget = K, oe = null, wo(ee) === q && (Oe = new Oe(
            V,
            H + "enter",
            Q,
            r,
            ee
          ), Oe.target = K, Oe.relatedTarget = Qe, oe = Oe), Qe = oe, Oe = I && Q ? _(
            I,
            Q,
            Q2
          ) : null, I !== null && h0(
            le,
            Se,
            I,
            Oe,
            !1
          ), Q !== null && Qe !== null && h0(
            le,
            Qe,
            Q,
            Oe,
            !0
          )));
        }
        e: {
          if (I = q ? wi(q) : window, Q = I.nodeName && I.nodeName.toLowerCase(), Q === "select" || Q === "input" && I.type === "file")
            var Re = Ag;
          else if (Rg(I))
            if (Og)
              Re = t2;
            else {
              Re = JC;
              var ft = ZC;
            }
          else
            Q = I.nodeName, !Q || Q.toLowerCase() !== "input" || I.type !== "checkbox" && I.type !== "radio" ? q && wf(q.elementType) && (Re = Ag) : Re = e2;
          if (Re && (Re = Re(e, q))) {
            wg(
              le,
              Re,
              r,
              ee
            );
            break e;
          }
          ft && ft(e, I, q);
        }
        switch (ft = q ? wi(q) : window, e) {
          case "focusin":
            (Rg(ft) || ft.contentEditable === "true") && (pl = ft, If = q, $i = null);
            break;
          case "focusout":
            $i = If = pl = null;
            break;
          case "mousedown":
            Pf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pf = !1, Lg(le, r, ee);
            break;
          case "selectionchange":
            if (a2) break;
          case "keydown":
          case "keyup":
            Lg(le, r, ee);
        }
        var je;
        if (Lf)
          e: {
            switch (e) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else
          dl ? Eg(e, r) && (ke = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (ke = "onCompositionStart");
        ke && (xg && r.locale !== "ko" && (dl || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && dl && (je = hg()) : (_r = ee, Df = "value" in _r ? _r.value : _r.textContent, dl = !0)), ft = dc(q, ke), 0 < ft.length && (ke = new vg(
          ke,
          e,
          null,
          r,
          ee
        ), le.push({ event: ke, listeners: ft }), je ? ke.data = je : (je = Tg(r), je !== null && (ke.data = je)))), (je = YC ? XC(e, r) : KC(e, r)) && (ke = dc(q, "onBeforeInput"), 0 < ke.length && (ft = new vg(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          ee
        ), le.push({
          event: ft,
          listeners: ke
        }), ft.data = je)), Y2(
          le,
          e,
          q,
          r,
          ee
        );
      }
      p0(le, n);
    });
  }
  function ls(e, n, r) {
    return {
      instance: e,
      listener: n,
      currentTarget: r
    };
  }
  function dc(e, n) {
    for (var r = n + "Capture", l = []; e !== null; ) {
      var u = e, f = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || f === null || (u = Ai(e, r), u != null && l.unshift(
        ls(e, u, f)
      ), u = Ai(e, n), u != null && l.push(
        ls(e, u, f)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Q2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function h0(e, n, r, l, u) {
    for (var f = n._reactName, v = []; r !== null && r !== l; ) {
      var w = r, $ = w.alternate, q = w.stateNode;
      if (w = w.tag, $ !== null && $ === l) break;
      w !== 5 && w !== 26 && w !== 27 || q === null || ($ = q, u ? (q = Ai(r, f), q != null && v.unshift(
        ls(r, q, $)
      )) : u || (q = Ai(r, f), q != null && v.push(
        ls(r, q, $)
      ))), r = r.return;
    }
    v.length !== 0 && e.push({ event: n, listeners: v });
  }
  var Z2 = /\r\n?/g, J2 = /\u0000|\uFFFD/g;
  function g0(e) {
    return (typeof e == "string" ? e : "" + e).replace(Z2, `
`).replace(J2, "");
  }
  function y0(e, n) {
    return n = g0(n), g0(e) === n;
  }
  function At(e, n, r, l, u, f) {
    switch (r) {
      case "children":
        if (typeof l == "string")
          n === "body" || n === "textarea" && l === "" || ul(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          n !== "body" && ul(e, "" + l);
        else return;
        break;
      case "className":
        ou(e, "class", l);
        break;
      case "tabIndex":
        ou(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ou(e, r, l);
        break;
      case "style":
        dg(e, l, f);
        return;
      case "data":
        if (n !== "object") {
          ou(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = lu(l), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (r === "formAction" ? (n !== "input" && At(e, n, "name", u.name, u, null), At(
            e,
            n,
            "formEncType",
            u.formEncType,
            u,
            null
          ), At(
            e,
            n,
            "formMethod",
            u.formMethod,
            u,
            null
          ), At(
            e,
            n,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (At(e, n, "encType", u.encType, u, null), At(e, n, "method", u.method, u, null), At(e, n, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = lu(l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = Va);
        return;
      case "onScroll":
        l != null && st("scroll", e);
        return;
      case "onScrollEnd":
        l != null && st("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(i(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(i(60));
            (f != null ? f.__html : void 0) !== r && (e.innerHTML = r);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        r = lu(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(r) : e.setAttribute(r, l);
        break;
      case "popover":
        st("beforetoggle", e), st("toggle", e), ru(e, "popover", l);
        break;
      case "xlinkActuate":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        dr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        dr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        dr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        dr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        ru(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")
          r = vC.get(r) || r, ru(e, r, l);
        else return;
    }
    gt = !0;
  }
  function Tp(e, n, r, l, u, f) {
    switch (r) {
      case "style":
        dg(e, l, f);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(i(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(i(60));
            (f != null ? f.__html : void 0) !== r && (e.innerHTML = r);
          }
        }
        break;
      case "children":
        if (typeof l == "string") ul(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          ul(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && st("scroll", e);
        return;
      case "onScrollEnd":
        l != null && st("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = Va);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ng.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (u = r.endsWith("Capture"), f = r.slice(2, u ? r.length - 7 : void 0), n = e[kt] || null, n = n != null ? n[r] : null, typeof n == "function" && e.removeEventListener(f, n, u), typeof l == "function")) {
              typeof n != "function" && n !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(f, l, u);
              break e;
            }
            gt = !0, r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : ru(e, r, l);
          }
        return;
    }
    gt = !0;
  }
  function bn(e, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        st("error", e), st("load", e);
        var l = !1, u = !1, f;
        for (f in r)
          if (r.hasOwnProperty(f)) {
            var v = r[f];
            if (v != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, n));
                default:
                  At(e, n, f, v, r, null);
              }
          }
        u && At(e, n, "srcSet", r.srcSet, r, null), l && At(e, n, "src", r.src, r, null);
        return;
      case "input":
        st("invalid", e);
        var w = f = v = u = null, $ = null, q = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var ee = r[l];
            if (ee != null)
              switch (l) {
                case "name":
                  u = ee;
                  break;
                case "type":
                  v = ee;
                  break;
                case "checked":
                  $ = ee;
                  break;
                case "defaultChecked":
                  q = ee;
                  break;
                case "value":
                  f = ee;
                  break;
                case "defaultValue":
                  w = ee;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ee != null)
                    throw Error(i(137, n));
                  break;
                default:
                  At(e, n, l, ee, r, null);
              }
          }
        sg(
          e,
          f,
          w,
          $,
          q,
          v,
          u,
          !1
        );
        return;
      case "select":
        st("invalid", e), l = v = f = null;
        for (u in r)
          if (r.hasOwnProperty(u) && (w = r[u], w != null))
            switch (u) {
              case "value":
                f = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "multiple":
                l = w;
              default:
                At(e, n, u, w, r, null);
            }
        n = f, r = v, e.multiple = !!l, n != null ? sl(e, !!l, n, !1) : r != null && sl(e, !!l, r, !0);
        return;
      case "textarea":
        st("invalid", e), f = u = l = null;
        for (v in r)
          if (r.hasOwnProperty(v) && (w = r[v], w != null))
            switch (v) {
              case "value":
                l = w;
                break;
              case "defaultValue":
                u = w;
                break;
              case "children":
                f = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(i(91));
                break;
              default:
                At(e, n, v, w, r, null);
            }
        cg(e, l, u, f);
        return;
      case "option":
        for ($ in r)
          if (r.hasOwnProperty($) && (l = r[$], l != null))
            switch ($) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                At(e, n, $, l, r, null);
            }
        return;
      case "dialog":
        st("beforetoggle", e), st("toggle", e), st("cancel", e), st("close", e);
        break;
      case "iframe":
      case "object":
        st("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < os.length; l++)
          st(os[l], e);
        break;
      case "image":
        st("error", e), st("load", e);
        break;
      case "details":
        st("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        st("error", e), st("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in r)
          if (r.hasOwnProperty(q) && (l = r[q], l != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, n));
              default:
                At(e, n, q, l, r, null);
            }
        return;
      default:
        if (wf(n)) {
          for (ee in r)
            r.hasOwnProperty(ee) && (l = r[ee], l !== void 0 && Tp(
              e,
              n,
              ee,
              l,
              r,
              void 0
            ));
          return;
        }
    }
    for (w in r)
      r.hasOwnProperty(w) && (l = r[w], l != null && At(e, n, w, l, r, null));
  }
  var eE = {};
  function tE(e, n, r, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, f = null, v = null, w = null, $ = null, q = null, ee = null;
        for (Q in r) {
          var le = r[Q];
          if (r.hasOwnProperty(Q) && le != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                $ = le;
              default:
                l.hasOwnProperty(Q) || At(e, n, Q, null, l, le);
            }
        }
        for (var I in l) {
          var Q = l[I];
          if (le = r[I], l.hasOwnProperty(I) && (Q != null || le != null))
            switch (I) {
              case "type":
                Q !== le && (gt = !0), f = Q;
                break;
              case "name":
                Q !== le && (gt = !0), u = Q;
                break;
              case "checked":
                Q !== le && (gt = !0), q = Q;
                break;
              case "defaultChecked":
                Q !== le && (gt = !0), ee = Q;
                break;
              case "value":
                Q !== le && (gt = !0), v = Q;
                break;
              case "defaultValue":
                Q !== le && (gt = !0), w = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(i(137, n));
                break;
              default:
                Q !== le && At(
                  e,
                  n,
                  I,
                  Q,
                  l,
                  le
                );
            }
        }
        Tf(
          e,
          v,
          w,
          $,
          q,
          ee,
          f,
          u
        );
        return;
      case "select":
        Q = v = w = I = null;
        for (f in r)
          if ($ = r[f], r.hasOwnProperty(f) && $ != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                Q = $;
              default:
                l.hasOwnProperty(f) || At(
                  e,
                  n,
                  f,
                  null,
                  l,
                  $
                );
            }
        for (u in l)
          if (f = l[u], $ = r[u], l.hasOwnProperty(u) && (f != null || $ != null))
            switch (u) {
              case "value":
                f !== $ && (gt = !0), I = f;
                break;
              case "defaultValue":
                f !== $ && (gt = !0), w = f;
                break;
              case "multiple":
                f !== $ && (gt = !0), v = f;
              default:
                f !== $ && At(
                  e,
                  n,
                  u,
                  f,
                  l,
                  $
                );
            }
        n = w, r = v, l = Q, I != null ? sl(e, !!r, I, !1) : !!l != !!r && (n != null ? sl(e, !!r, n, !0) : sl(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        Q = I = null;
        for (w in r)
          if (u = r[w], r.hasOwnProperty(w) && u != null && !l.hasOwnProperty(w))
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                At(e, n, w, null, l, u);
            }
        for (v in l)
          if (u = l[v], f = r[v], l.hasOwnProperty(v) && (u != null || f != null))
            switch (v) {
              case "value":
                u !== f && (gt = !0), I = u;
                break;
              case "defaultValue":
                u !== f && (gt = !0), Q = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== f && At(e, n, v, u, l, f);
            }
        ug(e, I, Q);
        return;
      case "option":
        for (var Se in r)
          if (I = r[Se], r.hasOwnProperty(Se) && I != null && !l.hasOwnProperty(Se))
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                At(
                  e,
                  n,
                  Se,
                  null,
                  l,
                  I
                );
            }
        for ($ in l)
          if (I = l[$], Q = r[$], l.hasOwnProperty($) && I !== Q && (I != null || Q != null))
            switch ($) {
              case "selected":
                I !== Q && (gt = !0), e.selected = I && typeof I != "function" && typeof I != "symbol";
                break;
              default:
                At(
                  e,
                  n,
                  $,
                  I,
                  l,
                  Q
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Oe in r)
          I = r[Oe], r.hasOwnProperty(Oe) && I != null && !l.hasOwnProperty(Oe) && At(e, n, Oe, null, l, I);
        for (q in l)
          if (I = l[q], Q = r[q], l.hasOwnProperty(q) && I !== Q && (I != null || Q != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(i(137, n));
                break;
              default:
                At(
                  e,
                  n,
                  q,
                  I,
                  l,
                  Q
                );
            }
        return;
      default:
        if (wf(n)) {
          for (var Qe in r)
            I = r[Qe], r.hasOwnProperty(Qe) && I !== void 0 && !l.hasOwnProperty(Qe) && Tp(
              e,
              n,
              Qe,
              void 0,
              l,
              I
            );
          for (ee in l)
            I = l[ee], Q = r[ee], !l.hasOwnProperty(ee) || I === Q || I === void 0 && Q === void 0 || Tp(
              e,
              n,
              ee,
              I,
              l,
              Q
            );
          return;
        }
    }
    for (var V in r)
      I = r[V], r.hasOwnProperty(V) && I != null && !l.hasOwnProperty(V) && At(e, n, V, null, l, I);
    for (le in l)
      I = l[le], Q = r[le], !l.hasOwnProperty(le) || I === Q || I == null && Q == null || At(e, n, le, I, l, Q);
  }
  function v0(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function nE() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var u = r[l], f = u.transferSize, v = u.initiatorType, w = u.duration;
        if (f && w && v0(v)) {
          for (v = 0, w = u.responseEnd, l += 1; l < r.length; l++) {
            var $ = r[l], q = $.startTime;
            if (q > w) break;
            var ee = $.transferSize, le = $.initiatorType;
            ee && v0(le) && ($ = $.responseEnd, v += ee * ($ < w ? 1 : (w - q) / ($ - q)));
          }
          if (--l, n += 8 * (f + v) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Rp = null, wp = null;
  function is(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function b0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function x0(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function S0(e, n, r, l) {
    return r = is(
      r
    ).createElement(e), r[Ie] = l, r[kt] = n, bn(r, e, n), cn(r), r;
  }
  function Ap(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Op = null;
  function aE() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Op ? !1 : (Op = e, !0) : (Op = null, !1);
  }
  var Mp = typeof setTimeout == "function" ? setTimeout : void 0, rE = typeof clearTimeout == "function" ? clearTimeout : void 0, C0 = typeof Promise == "function" ? Promise : void 0, E0 = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Mp, oE = typeof queueMicrotask == "function" ? queueMicrotask : typeof C0 < "u" ? function(e) {
    return C0.resolve(null).then(e).catch(lE);
  } : Mp;
  function lE(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ao(e) {
    return e === "head";
  }
  function T0(e, n) {
    var r = n, l = 0;
    do {
      var u = r.nextSibling;
      if (e.removeChild(r), u && u.nodeType === 8)
        if (r = u.data, r === "/$" || r === "/&") {
          if (l === 0) {
            e.removeChild(u), Gl(n);
            return;
          }
          l--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          l++;
        else if (r === "html")
          _p(
            e.ownerDocument.documentElement
          );
        else if (r === "head") {
          r = e.ownerDocument.head, _p(r);
          for (var f = r.firstChild; f; ) {
            var v = f.nextSibling, w = f.nodeName;
            f[Ri] || w === "SCRIPT" || w === "STYLE" || w === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = v;
          }
        } else
          r === "body" && _p(e.ownerDocument.body);
      r = u;
    } while (r);
    Gl(n);
  }
  function R0(e, n) {
    var r = e;
    e = 0;
    do {
      var l = r.nextSibling;
      if (r.nodeType === 1 ? n ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (n ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), l && l.nodeType === 8)
        if (r = l.data, r === "/$") {
          if (e === 0) break;
          e--;
        } else
          r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
      r = l;
    } while (r);
  }
  function w0(e, n, r) {
    if (n = CSS.escape(n) !== n ? "r-" + btoa(n).replace(/=/g, "") : n, e.style.viewTransitionName = n, r != null && (e.style.viewTransitionClass = r), r = getComputedStyle(e), r.display === "inline") {
      if (n = e.getClientRects(), n.length === 1) var l = 1;
      else
        for (var u = l = 0; u < n.length; u++) {
          var f = n[u];
          0 < f.width && 0 < f.height && l++;
        }
      l === 1 && (e = e.style, e.display = n.length === 1 ? "inline-block" : "block", e.marginTop = "-" + r.paddingTop, e.marginBottom = "-" + r.paddingBottom);
    }
  }
  function A0(e, n) {
    e = e.style, n = n.style;
    var r = n != null ? n.hasOwnProperty("viewTransitionName") ? n.viewTransitionName : n.hasOwnProperty("view-transition-name") ? n["view-transition-name"] : null : null;
    e.viewTransitionName = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), r = n != null ? n.hasOwnProperty("viewTransitionClass") ? n.viewTransitionClass : n.hasOwnProperty("view-transition-class") ? n["view-transition-class"] : null : null, e.viewTransitionClass = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), e.display === "inline-block" && (n == null ? e.display = e.margin = "" : (r = n.display, e.display = r == null || typeof r == "boolean" ? "" : r, r = n.margin, r != null ? e.margin = r : (r = n.hasOwnProperty("marginTop") ? n.marginTop : n["margin-top"], e.marginTop = r == null || typeof r == "boolean" ? "" : r, n = n.hasOwnProperty("marginBottom") ? n.marginBottom : n["margin-bottom"], e.marginBottom = n == null || typeof n == "boolean" ? "" : n)));
  }
  function iE(e, n, r) {
    return r = r.ownerDocument.defaultView, {
      rect: e,
      abs: n.position === "absolute" || n.position === "fixed",
      clip: n.clipPath !== "none" || n.overflow !== "visible" || n.filter !== "none" || n.mask !== "none" || n.mask !== "none" || n.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= r.innerHeight && e.left <= r.innerWidth
    };
  }
  function zp(e) {
    var n = e.getBoundingClientRect(), r = getComputedStyle(e);
    return iE(n, r, e);
  }
  function sE(e) {
    return e.documentElement.clientHeight;
  }
  function uE(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function cE(e, n, r, l, u, f, v, w, $) {
    var q = n.nodeType === 9 ? n : n.ownerDocument;
    try {
      var ee = q.startViewTransition({
        update: function() {
          var I = q.defaultView, Q = I.navigation && I.navigation.transition, Se = q.fonts.status;
          l();
          var Oe = [];
          if (Se === "loaded" && (sE(q), q.fonts.status === "loading" && Oe.push(q.fonts.ready)), Se = Oe.length, e !== null)
            for (var Qe = e.suspenseyImages, V = 0, H = 0; H < Qe.length; H++) {
              var K = Qe[H];
              if (!K.complete) {
                var oe = K.getBoundingClientRect();
                if (0 < oe.bottom && 0 < oe.right && oe.top < I.innerHeight && oe.left < I.innerWidth) {
                  if (V += X0(K), V > hc) {
                    Oe.length = Se;
                    break;
                  }
                  K = new Promise(
                    uE.bind(K)
                  ), Oe.push(K);
                }
              }
            }
          if (0 < Oe.length)
            return I = Promise.race([
              Promise.all(Oe),
              new Promise(function(Re) {
                return setTimeout(Re, 500);
              })
            ]).then(u, u), (Q ? Promise.allSettled([Q.finished, I]) : I).then(f, f);
          if (u(), Q)
            return Q.finished.then(
              f,
              f
            );
          f();
        },
        types: r
      });
      q.__reactViewTransition = ee;
      var le = [];
      return ee.ready.then(
        function() {
          for (var I = q.documentElement.getAnimations({
            subtree: !0
          }), Q = 0; Q < I.length; Q++) {
            var Se = I[Q], Oe = Se.effect, Qe = Oe.pseudoElement;
            if (Qe != null && Qe.startsWith("::view-transition")) {
              le.push(Se), Se = Oe.getKeyframes();
              for (var V = Qe = void 0, H = !0, K = 0; K < Se.length; K++) {
                var oe = Se[K], Re = oe.width;
                if (Qe === void 0) Qe = Re;
                else if (Qe !== Re) {
                  H = !1;
                  break;
                }
                if (Re = oe.height, V === void 0) V = Re;
                else if (V !== Re) {
                  H = !1;
                  break;
                }
                delete oe.width, delete oe.height, oe.transform === "none" && delete oe.transform;
              }
              H && Qe !== void 0 && V !== void 0 && (Oe.setKeyframes(Se), H = getComputedStyle(
                Oe.target,
                Oe.pseudoElement
              ), H.width !== Qe || H.height !== V) && (H = Se[0], H.width = Qe, H.height = V, H = Se[Se.length - 1], H.width = Qe, H.height = V, Oe.setKeyframes(Se));
            }
          }
          v();
        },
        function(I) {
          q.__reactViewTransition === ee && (q.__reactViewTransition = null);
          try {
            if (typeof I == "object" && I !== null)
              switch (I.name) {
                case "InvalidStateError":
                  (I.message === "View transition was skipped because document visibility state is hidden." || I.message === "Skipping view transition because document visibility state has become hidden." || I.message === "Skipping view transition because viewport size changed." || I.message === "Transition was aborted because of invalid state") && (I = null);
              }
            I !== null && $(I);
          } finally {
            l(), u(), v();
          }
        }
      ), ee.finished.finally(function() {
        for (var I = 0; I < le.length; I++)
          le[I].cancel();
        q.__reactViewTransition === ee && (q.__reactViewTransition = null), w();
      }), ee;
    } catch {
      return l(), u(), v(), null;
    }
  }
  function Yo(e, n) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + n + ")";
  }
  Yo.prototype.animate = function(e, n) {
    return n = typeof n == "number" ? { duration: n } : L({}, n), n.pseudoElement = this._selector, this._scope.animate(e, n);
  }, Yo.prototype.getAnimations = function() {
    for (var e = this._scope, n = this._selector, r = e.getAnimations({ subtree: !0 }), l = [], u = 0; u < r.length; u++) {
      var f = r[u].effect;
      f !== null && f.target === e && f.pseudoElement === n && l.push(r[u]);
    }
    return l;
  }, Yo.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function O0(e) {
    return {
      name: e,
      group: new Yo("group", e),
      imagePair: new Yo("image-pair", e),
      old: new Yo("old", e),
      new: new Yo("new", e)
    };
  }
  function ea(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  ea.prototype.addEventListener = function(e, n, r) {
    var l = null, u = null;
    if (!(r != null && typeof r != "boolean" && (l = r.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var f = this._eventListeners;
      if (z0(f, e, n, r) === -1) {
        var v = this, w = n;
        r != null && typeof r != "boolean" && r.once === !0 && (w = function($) {
          v.removeEventListener(
            e,
            n,
            r
          ), typeof n == "function" ? n.call(this, $) : n.handleEvent($);
        }), l !== null && (u = v.removeEventListener.bind(
          v,
          e,
          n,
          r
        ), l.addEventListener("abort", u, { once: !0 }), u = l.removeEventListener.bind(l, "abort", u)), l = Ul(r), f.push({
          type: e,
          listener: n,
          optionsOrUseCapture: r,
          attachedListener: w,
          cleanup: u
        }), h(
          this._fragmentFiber.child,
          !1,
          fE,
          e,
          w,
          l
        );
      }
      this._eventListeners = f;
    }
  };
  function fE(e, n, r, l) {
    return A(e).addEventListener(
      n,
      r,
      l
    ), !1;
  }
  ea.prototype.removeEventListener = function(e, n, r) {
    var l = this._eventListeners;
    if (l !== null && (n = z0(
      l,
      e,
      n,
      r
    ), n !== -1)) {
      var u = l[n];
      r = u.attachedListener;
      var f = u.cleanup;
      u = Ul(u.optionsOrUseCapture), h(
        this._fragmentFiber.child,
        !1,
        dE,
        e,
        r,
        u
      ), l.splice(n, 1), f !== null && f();
    }
  };
  function dE(e, n, r, l) {
    return A(e).removeEventListener(
      n,
      r,
      l
    ), !1;
  }
  function Ul(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function M0(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function z0(e, n, r, l) {
    if (e.length === 0) return -1;
    l = M0(l);
    for (var u = 0; u < e.length; u++) {
      var f = e[u];
      if (f.type === n && f.listener === r && M0(f.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  ea.prototype.dispatchEvent = function(e) {
    var n = C(
      this._fragmentFiber
    );
    if (n === null) return !0;
    n = A(n);
    var r = this._eventListeners;
    if (r !== null && 0 < r.length || !e.bubbles) {
      var l = n.nodeType === 9 ? n.createComment("") : document.createTextNode("");
      if (r)
        for (var u = 0; u < r.length; u++) {
          var f = r[u];
          l.addEventListener(
            f.type,
            f.attachedListener,
            Ul(f.optionsOrUseCapture)
          );
        }
      if (n.appendChild(l), e = l.dispatchEvent(e), r)
        for (u = 0; u < r.length; u++)
          f = r[u], l.removeEventListener(
            f.type,
            f.attachedListener,
            Ul(f.optionsOrUseCapture)
          );
      return n.removeChild(l), e;
    }
    return n.dispatchEvent(e);
  }, ea.prototype.focus = function(e) {
    h(
      this._fragmentFiber.child,
      !0,
      D0,
      e,
      void 0,
      void 0
    );
  };
  function D0(e, n) {
    return e.tag === 6 ? !1 : (e = A(e), TE(e, n));
  }
  ea.prototype.focusLast = function(e) {
    var n = [];
    h(
      this._fragmentFiber.child,
      !0,
      Dp,
      n,
      void 0,
      void 0
    );
    for (var r = n.length - 1; 0 <= r && !D0(n[r], e); r--) ;
  };
  function Dp(e, n) {
    return n.push(e), !1;
  }
  ea.prototype.blur = function() {
    var e = C(
      this._fragmentFiber
    );
    e !== null && (e = A(e), e = is(e).activeElement, e !== null && h(
      this._fragmentFiber.child,
      !1,
      pE,
      e,
      void 0,
      void 0
    ));
  };
  function pE(e, n) {
    return e.tag === 6 ? !1 : (e = A(e), e === n || e.contains(n) ? (n.blur(), !0) : !1);
  }
  ea.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(
      this._fragmentFiber.child,
      !1,
      mE,
      e,
      void 0,
      void 0
    );
  };
  function mE(e, n) {
    return e.tag === 6 || (e = A(e), n.observe(e)), !1;
  }
  ea.prototype.unobserveUsing = function(e) {
    var n = this._observers;
    if (n !== null && n.has(e)) {
      n.delete(e), h(
        this._fragmentFiber.child,
        !1,
        hE,
        e,
        void 0,
        void 0
      );
      for (var r = n = 0; r < $a.length; r++) {
        var l = $a[r];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : $a[n++] = l;
      }
      $a.length = n;
    }
  };
  function hE(e, n) {
    return e.tag === 6 || (e = A(e), n.unobserve(e)), !1;
  }
  var $a = [], Np = !1;
  function gE(e, n, r) {
    $a.push({
      fragmentInstance: e,
      observer: n,
      instance: r
    }), Np || (Np = !0, RE(function() {
      Np = !1;
      var l = $a;
      $a = [];
      for (var u = 0; u < l.length; u++) {
        var f = l[u];
        f.observer.unobserve(f.instance);
      }
    }));
  }
  ea.prototype.getClientRects = function() {
    var e = [];
    return h(
      this._fragmentFiber.child,
      !1,
      yE,
      e,
      void 0,
      void 0
    ), e;
  };
  function yE(e, n) {
    if (e.tag === 6) {
      e = e.stateNode;
      var r = e.ownerDocument.createRange();
      r.selectNodeContents(e), n.push.apply(n, r.getClientRects());
    } else
      e = A(e), n.push.apply(n, e.getClientRects());
    return !1;
  }
  ea.prototype.getRootNode = function(e) {
    var n = C(
      this._fragmentFiber
    );
    return n === null ? this : A(n).getRootNode(e);
  }, ea.prototype.compareDocumentPosition = function(e) {
    var n = C(
      this._fragmentFiber
    );
    if (n === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var r = [];
    h(
      this._fragmentFiber.child,
      !1,
      Dp,
      r,
      void 0,
      void 0
    );
    var l = A(n);
    if (r.length === 0) {
      if (r = l, T(this._fragmentFiber)) {
        e: {
          for (n = this._fragmentFiber.return; n !== null; ) {
            if (n.tag === 4) {
              n = n.stateNode.containerInfo;
              break e;
            }
            if (n.tag === 3 || n.tag === 5 || n.tag === 27)
              break;
            n = n.return;
          }
          n = null;
        }
        n != null && (r = n);
      }
      n = this._fragmentFiber;
      var u = l = r.compareDocumentPosition(e);
      return r === e ? u = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (r = R(n)[1], r === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (e = A(r).compareDocumentPosition(
        e
      ), u = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    n = A(r[0]), u = A(r[r.length - 1]);
    var f = T(this._fragmentFiber) ? n.parentElement : l;
    if (f == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = f.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY, f = f.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var v = n.compareDocumentPosition(e), w = u.compareDocumentPosition(e), $ = v & Node.DOCUMENT_POSITION_CONTAINED_BY || w & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return w = l && f && v & Node.DOCUMENT_POSITION_FOLLOWING && w & Node.DOCUMENT_POSITION_PRECEDING, n = l && n === e || f && u === e || $ || w ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && n === e || !f && u === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : v, n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || vE(
      n,
      this._fragmentFiber,
      r[0],
      r[r.length - 1],
      e
    ) ? n : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function vE(e, n, r, l, u) {
    var f = wo(u);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (r = !!f)
        e: {
          for (; f !== null; ) {
            if (f.tag === 7 && (f === n || f.alternate === n)) {
              r = !0;
              break e;
            }
            f = f.return;
          }
          r = !1;
        }
      return r;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (f === null)
        return f = u.ownerDocument, u === f || u === f.documentElement || u === f.body;
      e: {
        for (f = n, n = C(n); f !== null; ) {
          if (!(f.tag !== 5 && f.tag !== 3 && f.tag !== 27 || f !== n && f.alternate !== n)) {
            f = !0;
            break e;
          }
          f = f.return;
        }
        f = !1;
      }
      return f;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((n = !!f) && !(n = f === r) && (n = _(
      r,
      f,
      D
    ), n === null ? n = !1 : (h(
      n,
      !0,
      O,
      f,
      r
    ), f = z, z = null, n = f !== null)), n) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((n = !!f) && !(n = f === l) && (n = _(
      l,
      f,
      D
    ), n === null ? n = !1 : (h(
      n,
      !0,
      M,
      f,
      l
    ), f = z, N = z = null, n = f !== null)), n) : !1;
  }
  function N0(e, n) {
    var r = e.ownerDocument.createRange();
    r.selectNodeContents(e), e = r.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      n ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  ea.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(i(566));
    var n = [];
    h(
      this._fragmentFiber.child,
      !1,
      Dp,
      n,
      void 0,
      void 0
    );
    var r = e !== !1;
    if (n.length === 0) {
      var l = R(
        this._fragmentFiber
      );
      if (l = r ? l[1] || l[0] || C(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = A(l), N0(e, r);
        return;
      }
      if (l = A(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          r = "host" in l ? l.host : null, r !== null && r.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = r ? n.length - 1 : 0; l !== (r ? -1 : n.length); ) {
      var u = n[l];
      u.tag === 6 ? (u = A(u), N0(u, r)) : A(u).scrollIntoView(e), l += r ? -1 : 1;
    }
  };
  function bE(e, n) {
    return e = A(e), B0(e, n), !1;
  }
  function B0(e, n) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(n);
  }
  function j0(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          Ul(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(f) {
      for (var v = 0, w = 0; w < $a.length; w++) {
        var $ = $a[w];
        ($.fragmentInstance !== n || $.observer !== f || $.instance !== e) && ($a[v++] = $);
      }
      $a.length = v, f.observe(e);
    }), B0(e, n));
  }
  function xE(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          Ul(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(f) {
      typeof f.rootMargin == "string" ? gE(
        n,
        f,
        e
      ) : f.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(n));
  }
  function Bp(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bp(r), au(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function SE(e, n, r, l) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ri])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = ga(e.nextSibling), e === null) break;
    }
    return null;
  }
  function CE(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = ga(e.nextSibling), e === null)) return null;
    return e;
  }
  function $0(e, n) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = ga(e.nextSibling), e === null)) return null;
    return e;
  }
  function jp(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function $p(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function EE(e, n) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = n;
    else if (e.data !== "$?" || r.readyState !== "loading")
      n();
    else {
      var l = function() {
        n(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function ga(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return e;
  }
  var Lp = null;
  function L0(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (n === 0)
            return ga(e.nextSibling);
          n--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function _0(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (n === 0) return e;
          n--;
        } else r !== "/$" && r !== "/&" || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function TE(e, n) {
    function r() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", r, !0), (e.focus || HTMLElement.prototype.focus).call(e, n);
    } finally {
      e.ownerDocument.removeEventListener("focus", r, !0);
    }
    return l;
  }
  function RE(e) {
    E0(function() {
      E0(function(n) {
        return e(n);
      });
    });
  }
  function k0(e, n, r) {
    switch (n = is(r), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function H0(e, n, r) {
    for (var l in r) {
      var u = r[l];
      r.hasOwnProperty(l) && u != null && At(e, n, l, null, eE, u);
    }
    r.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Va && (e.onclick = null), au(e);
  }
  function _p(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    au(e);
  }
  var ya = /* @__PURE__ */ new Map(), U0 = /* @__PURE__ */ new Set();
  function ss(e) {
    if (typeof e.getRootNode == "function") {
      var n = e.getRootNode();
      if (n.nodeType === 9 || n.nodeType === 11) return n;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Rr = ue.d;
  ue.d = {
    f: wE,
    r: AE,
    D: OE,
    C: ME,
    L: zE,
    m: DE,
    X: BE,
    S: NE,
    M: jE
  };
  function wE() {
    var e = Rr.f(), n = lc();
    return e || n;
  }
  function AE(e) {
    var n = ol(e);
    n !== null && n.tag === 5 && n.type === "form" ? Py(n) : Rr.r(e);
  }
  var Il = typeof document > "u" ? null : document;
  function I0(e, n, r) {
    var l = Il;
    if (l && typeof n == "string" && n) {
      var u = ua(n);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof r == "string" && (u += '[crossorigin="' + r + '"]'), U0.has(u) || (U0.add(u), e = { rel: e, crossOrigin: r, href: n }, l.querySelector(u) === null && (n = l.createElement("link"), bn(n, "link", e), cn(n), l.head.appendChild(n)));
    }
  }
  function OE(e) {
    Rr.D(e), I0("dns-prefetch", e, null);
  }
  function ME(e, n) {
    Rr.C(e, n), I0("preconnect", e, n);
  }
  function zE(e, n, r) {
    Rr.L(e, n, r);
    var l = Il;
    if (l && e && n) {
      var u = 'link[rel="preload"][as="' + ua(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (u += '[imagesrcset="' + ua(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (u += '[imagesizes="' + ua(
        r.imageSizes
      ) + '"]')) : u += '[href="' + ua(e) + '"]';
      var f = u;
      switch (n) {
        case "style":
          f = Pl(e);
          break;
        case "script":
          f = Fl(e);
      }
      if (!(ya.has(f) || (e = L(
        {
          rel: "preload",
          href: n === "image" && r && r.imageSrcSet ? void 0 : e,
          as: n
        },
        r
      ), ya.set(f, e), l.querySelector(u) !== null || n === "style" && l.querySelector(us(f)) || n === "script" && l.querySelector(cs(f))))) {
        var v = l.createElement("link");
        bn(v, "link", e), n === "style" && (v[nu] = !0, v.onload = v.onerror = function() {
          eg(v);
        }), cn(v), l.head.appendChild(v);
      }
    }
  }
  function DE(e, n) {
    Rr.m(e, n);
    var r = Il;
    if (r && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", u = 'link[rel="modulepreload"][as="' + ua(l) + '"][href="' + ua(e) + '"]', f = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Fl(e);
      }
      if (!ya.has(f) && (e = L({ rel: "modulepreload", href: e }, n), ya.set(f, e), r.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(cs(f)))
              return;
        }
        l = r.createElement("link"), bn(l, "link", e), cn(l), r.head.appendChild(l);
      }
    }
  }
  function NE(e, n, r) {
    Rr.S(e, n, r);
    var l = Il;
    if (l && e) {
      var u = ll(l).hoistableStyles, f = Pl(e);
      n = n || "default";
      var v = u.get(f);
      if (!v) {
        var w = { loading: 0, preload: null };
        if (v = l.querySelector(
          us(f)
        ))
          w.loading = 5;
        else {
          e = L(
            { rel: "stylesheet", href: e, "data-precedence": n },
            r
          ), (r = ya.get(f)) && kp(e, r);
          var $ = v = l.createElement("link");
          cn($), bn($, "link", e), $._p = new Promise(function(q, ee) {
            $.onload = q, $.onerror = ee;
          }), $.addEventListener("load", function() {
            w.loading |= 1;
          }), $.addEventListener("error", function() {
            w.loading |= 2;
          }), w.loading |= 4, pc(v, n, l);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: w
        }, u.set(f, v);
      }
    }
  }
  function BE(e, n) {
    Rr.X(e, n);
    var r = Il;
    if (r && e) {
      var l = ll(r).hoistableScripts, u = Fl(e), f = l.get(u);
      f || (f = r.querySelector(cs(u)), f || (e = L({ src: e, async: !0 }, n), (n = ya.get(u)) && Hp(e, n), f = r.createElement("script"), cn(f), bn(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function jE(e, n) {
    Rr.M(e, n);
    var r = Il;
    if (r && e) {
      var l = ll(r).hoistableScripts, u = Fl(e), f = l.get(u);
      f || (f = r.querySelector(cs(u)), f || (e = L({ src: e, async: !0, type: "module" }, n), (n = ya.get(u)) && Hp(e, n), f = r.createElement("script"), cn(f), bn(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function P0(e, n, r, l) {
    var u = (u = Ce.current) ? ss(u) : null;
    if (!u) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (r = Pl(r.href), n = ll(
          u
        ).hoistableStyles, l = n.get(r), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = Pl(r.href);
          var f = ll(
            u
          ).hoistableStyles, v = f.get(e);
          if (v || (u = u.ownerDocument || u, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, v), (f = u.querySelector(
            us(e)
          )) ? f._p || (v.instance = f, v.state.loading = 5) : (f = ya.get(e), f || (f = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, ya.set(e, f)), $E(
            u,
            e,
            f,
            v.state
          ))), n && l === null)
            throw Error(i(528, ""));
          return v;
        }
        if (n && l !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (r = Fl(r), n = ll(
          u
        ).hoistableScripts, l = n.get(r), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Pl(e) {
    return 'href="' + ua(e) + '"';
  }
  function us(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function F0(e) {
    return L({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function $E(e, n, r, l) {
    if (n = e.querySelector(
      'link[rel="preload"][as="style"][' + n + "]"
    )) {
      if (n[nu] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      n = e.createElement("link"), n[nu] = !0, n.onload = n.onerror = eg.bind(null, n), bn(n, "link", r), cn(n), e.head.appendChild(n);
    l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Fl(e) {
    return '[src="' + ua(e) + '"]';
  }
  function cs(e) {
    return "script[async]" + e;
  }
  function V0(e, n, r) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + ua(r.href) + '"]'
          );
          if (l)
            return n.instance = l, cn(l), l;
          var u = L({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), cn(l), bn(l, "style", u), pc(l, r.precedence, e), n.instance = l;
        case "stylesheet":
          u = Pl(r.href);
          var f = e.querySelector(
            us(u)
          );
          if (f)
            return n.state.loading |= 4, n.instance = f, cn(f), f;
          l = F0(r), (u = ya.get(u)) && kp(l, u), f = (e.ownerDocument || e).createElement("link"), cn(f);
          var v = f;
          return v._p = new Promise(function(w, $) {
            v.onload = w, v.onerror = $;
          }), bn(f, "link", l), n.state.loading |= 4, pc(f, r.precedence, e), n.instance = f;
        case "script":
          return f = Fl(r.src), (u = e.querySelector(
            cs(f)
          )) ? (n.instance = u, cn(u), u) : (l = r, (u = ya.get(f)) && (l = L({}, r), Hp(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), cn(u), bn(u, "link", l), e.head.appendChild(u), n.instance = u);
        case "void":
          return null;
        default:
          throw Error(i(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, pc(l, r.precedence, e));
    return n.instance;
  }
  function pc(e, n, r) {
    for (var l = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, f = u, v = 0; v < l.length; v++) {
      var w = l[v];
      if (w.dataset.precedence === n) f = w;
      else if (f !== u) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild));
  }
  function kp(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Hp(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var mc = null;
  function q0(e, n, r) {
    if (mc === null) {
      var l = /* @__PURE__ */ new Map(), u = mc = /* @__PURE__ */ new Map();
      u.set(r, l);
    } else
      u = mc, l = u.get(r), l || (l = /* @__PURE__ */ new Map(), u.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), u = 0; u < r.length; u++) {
      var f = r[u];
      if (!(f[Ri] || f[Ie] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = f.getAttribute(n) || "";
        v = e + v;
        var w = l.get(v);
        w ? w.push(f) : l.set(v, [f]);
      }
    }
    return l;
  }
  function Up(e, n, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function LE(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function G0(e, n) {
    return e === "img" && n.src != null && n.src !== "" && n.onLoad == null && n.loading !== "lazy";
  }
  function Y0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function X0(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function K0(e, n) {
    typeof n.decode == "function" && (e.imgCount++, n.complete || (e.imgBytes += X0(n), e.suspenseyImages.push(n)), e = HE.bind(e), n.decode().then(e, e));
  }
  function _E(e, n, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var u = Pl(l.href), f = n.querySelector(
          us(u)
        );
        if (f) {
          n = f._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = fs.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = f, cn(f);
          return;
        }
        f = n.ownerDocument || n, l = F0(l), (u = ya.get(u)) && kp(l, u), f = f.createElement("link"), cn(f);
        var v = f;
        v._p = new Promise(function(w, $) {
          v.onload = w, v.onerror = $;
        }), bn(f, "link", l), r.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = fs.bind(e), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var hc = 0;
  function kE(e, n) {
    return e.stylesheets && e.count === 0 && yc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && yc(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + n);
      0 < e.imgBytes && hc === 0 && (hc = 62500 * nE());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && yc(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > hc ? 50 : 800) + n
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function W0(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) yc(e, e.stylesheets);
      else if (e.unsuspend) {
        var n = e.unsuspend;
        e.unsuspend = null, n();
      }
    }
  }
  function fs() {
    this.count--, W0(this);
  }
  function HE() {
    this.imgCount--, W0(this);
  }
  var gc = null;
  function yc(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, gc = /* @__PURE__ */ new Map(), n.forEach(UE, e), gc = null, fs.call(e));
  }
  function UE(e, n) {
    if (!(n.state.loading & 4)) {
      var r = gc.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), gc.set(e, r);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < u.length; f++) {
          var v = u[f];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (r.set(v.dataset.precedence, v), l = v);
        }
        l && r.set(null, l);
      }
      u = n.instance, v = u.getAttribute("data-precedence"), f = r.get(v) || l, f === l && r.set(null, u), r.set(v, u), this.count++, l = fs.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), f ? f.parentNode.insertBefore(u, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Vl = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: _e,
    _currentValue2: _e,
    _threadCount: 0
  };
  function IE(e, n, r, l, u, f, v, w, $) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ee(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ee(0), this.hiddenUpdates = Ee(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = $, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Q0(e, n, r, l, u, f, v, w, $, q, ee, le) {
    return e = new IE(
      e,
      n,
      r,
      v,
      $,
      q,
      ee,
      le,
      w
    ), n = 1, f === !0 && (n |= 24), f = Ln(3, null, null, n), e.current = f, f.stateNode = e, n = td(), n.refCount++, e.pooledCache = n, n.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: n
    }, od(f), e;
  }
  function Z0(e) {
    return e ? (e = gl, e) : gl;
  }
  function J0(e, n, r, l, u, f) {
    u = Z0(u), l.context === null ? l.context = u : l.pendingContext = u, l = qr(n), l.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (l.callback = f), r = Gr(e, l, n), r !== null && (Un(r, e, n), Pi(r, e, n));
  }
  function eb(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function Ip(e, n) {
    eb(e, n), (e = e.alternate) && eb(e, n);
  }
  function tb(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = zo(e, 67108864);
      n !== null && Un(n, e, 67108864), Ip(e, 67108864);
    }
  }
  function nb(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Jn();
      n = To(n);
      var r = zo(e, n);
      r !== null && Un(r, e, n), Ip(e, n);
    }
  }
  var ql = !0;
  function PE(e, n, r, l) {
    var u = se.T;
    se.T = null;
    var f = ue.p;
    try {
      ue.p = 2, Pp(e, n, r, l);
    } finally {
      ue.p = f, se.T = u;
    }
  }
  function FE(e, n, r, l) {
    var u = se.T;
    se.T = null;
    var f = ue.p;
    try {
      ue.p = 8, Pp(e, n, r, l);
    } finally {
      ue.p = f, se.T = u;
    }
  }
  function Pp(e, n, r, l) {
    if (ql) {
      var u = Fp(l);
      if (u === null)
        Ep(
          e,
          n,
          l,
          vc,
          r
        ), rb(e, l);
      else if (qE(
        u,
        e,
        n,
        r,
        l
      ))
        l.stopPropagation();
      else if (rb(e, l), n & 4 && -1 < VE.indexOf(e)) {
        for (; u !== null; ) {
          var f = ol(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var v = Ut(f.pendingLanes);
                  if (v !== 0) {
                    var w = f;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; v; ) {
                      var $ = 1 << 31 - sn(v);
                      w.entanglements[1] |= $, v &= ~$;
                    }
                    er(f), (yt & 6) === 0 && (ac = tn() + 500, rs(0));
                  }
                }
                break;
              case 31:
              case 13:
                w = zo(f, 2), w !== null && Un(w, f, 2), lc(), Ip(f, 2);
            }
          if (f = Fp(l), f === null && Ep(
            e,
            n,
            l,
            vc,
            r
          ), f === u) break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else
        Ep(
          e,
          n,
          l,
          null,
          r
        );
    }
  }
  function Fp(e) {
    return e = Of(e), Vp(e);
  }
  var vc = null;
  function Vp(e) {
    if (vc = null, e = wo(e), e !== null) {
      var n = c(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (e = d(n), e !== null) return e;
          e = null;
        } else if (r === 31) {
          if (e = p(n), e !== null) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return vc = e, null;
  }
  function ab(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Gn()) {
          case Pa:
            return 2;
          case Oa:
            return 8;
          case Ma:
          case sa:
            return 32;
          case So:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qp = !1, ro = null, oo = null, lo = null, ds = /* @__PURE__ */ new Map(), ps = /* @__PURE__ */ new Map(), io = [], VE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rb(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        ro = null;
        break;
      case "dragenter":
      case "dragleave":
        oo = null;
        break;
      case "mouseover":
      case "mouseout":
        lo = null;
        break;
      case "pointerover":
      case "pointerout":
        ds.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ps.delete(n.pointerId);
    }
  }
  function ms(e, n, r, l, u, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: n,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [u]
    }, n !== null && (n = ol(n), n !== null && tb(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), e);
  }
  function qE(e, n, r, l, u) {
    switch (n) {
      case "focusin":
        return ro = ms(
          ro,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "dragenter":
        return oo = ms(
          oo,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "mouseover":
        return lo = ms(
          lo,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "pointerover":
        var f = u.pointerId;
        return ds.set(
          f,
          ms(
            ds.get(f) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return f = u.pointerId, ps.set(
          f,
          ms(
            ps.get(f) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function ob(e) {
    var n = wo(e.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = d(r), n !== null) {
            e.blockedOn = n, Ro(e.priority, function() {
              nb(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = p(r), n !== null) {
            e.blockedOn = n, Ro(e.priority, function() {
              nb(r);
            });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function bc(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = Fp(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(
          r.type,
          r
        );
        Af = l, r.target.dispatchEvent(l), Af = null;
      } else
        return n = ol(r), n !== null && tb(n), e.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function lb(e, n, r) {
    bc(e) && r.delete(n);
  }
  function GE() {
    qp = !1, ro !== null && bc(ro) && (ro = null), oo !== null && bc(oo) && (oo = null), lo !== null && bc(lo) && (lo = null), ds.forEach(lb), ps.forEach(lb);
  }
  function xc(e, n) {
    e.blockedOn === n && (e.blockedOn = null, qp || (qp = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      GE
    )));
  }
  var Sc = null;
  function ib(e) {
    Sc !== e && (Sc = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Sc === e && (Sc = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n], l = e[n + 1], u = e[n + 2];
          if (typeof l != "function") {
            if (Vp(l || r) === null)
              continue;
            break;
          }
          var f = ol(r);
          f !== null && (e.splice(n, 3), n -= 3, wd(
            f,
            {
              pending: !0,
              data: u,
              method: r.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function Gl(e) {
    function n($) {
      return xc($, e);
    }
    ro !== null && xc(ro, e), oo !== null && xc(oo, e), lo !== null && xc(lo, e), ds.forEach(n), ps.forEach(n);
    for (var r = 0; r < io.length; r++) {
      var l = io[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < io.length && (r = io[0], r.blockedOn === null); )
      ob(r), r.blockedOn === null && io.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (l = 0; l < r.length; l += 3) {
        var u = r[l], f = r[l + 1], v = u[kt] || null;
        if (typeof f == "function")
          v || ib(r);
        else if (v) {
          var w = null;
          if (f && f.hasAttribute("formAction")) {
            if (u = f, v = f[kt] || null)
              w = v.formAction;
            else if (Vp(u) !== null) continue;
          } else w = v.action;
          typeof w == "function" ? r[l + 1] = w : (r.splice(l, 3), l -= 3), ib(r);
        }
      }
  }
  function sb() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(v) {
            return u = v;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      u !== null && (u(), u = null), l || setTimeout(r, 20);
    }
    function r() {
      if (!l && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(r, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), u !== null && (u(), u = null);
      };
    }
  }
  function Gp(e) {
    this._internalRoot = e;
  }
  Cc.prototype.render = Gp.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(i(409));
    var r = n.current, l = Jn();
    J0(r, l, e, n, null, null);
  }, Cc.prototype.unmount = Gp.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      J0(e.current, 2, null, e, null, null), lc(), n[Mn] = null;
    }
  };
  function Cc(e) {
    this._internalRoot = e;
  }
  Cc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = Ti();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < io.length && n !== 0 && n < io[r].priority; r++) ;
      io.splice(r, 0, e), r === 0 && ob(e);
    }
  };
  var ub = a.version;
  if (ub !== "19.3.1")
    throw Error(
      i(
        527,
        ub,
        "19.3.1"
      )
    );
  ue.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = g(n), e = e !== null ? y(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var YE = {
    bundleType: 0,
    version: "19.3.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: se,
    reconcilerVersion: "19.3.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ec = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ec.isDisabled && Ec.supportsFiber)
      try {
        fr = Ec.inject(
          YE
        ), mn = Ec;
      } catch {
      }
  }
  return Ts.createRoot = function(e, n) {
    if (!s(e)) throw Error(i(299));
    var r = !1, l = "", u = Zy, f = Jy, v = ev;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (v = n.onRecoverableError)), n = Q0(
      e,
      1,
      !1,
      null,
      null,
      r,
      l,
      null,
      u,
      f,
      v,
      sb
    ), e[Mn] = n.current, Cp(e), new Gp(n);
  }, Ts.hydrateRoot = function(e, n, r) {
    if (!s(e)) throw Error(i(299));
    var l = !1, u = "", f = Zy, v = Jy, w = ev, $ = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onUncaughtError !== void 0 && (f = r.onUncaughtError), r.onCaughtError !== void 0 && (v = r.onCaughtError), r.onRecoverableError !== void 0 && (w = r.onRecoverableError), r.formState !== void 0 && ($ = r.formState)), n = Q0(
      e,
      1,
      !0,
      n,
      r ?? null,
      l,
      u,
      $,
      f,
      v,
      w,
      sb
    ), n.context = Z0(null), r = n.current, l = Jn(), l = To(l), u = qr(l), u.callback = null, Gr(r, u, l), r = l, n.current.lanes = r, Pe(n, r), er(n), e[Mn] = n.current, Cp(e), new Cc(n);
  }, Ts.version = "19.3.1", Ts;
}
var lx;
function PD() {
  if (lx) return bm.exports;
  lx = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (a) {
        console.error(a);
      }
  }
  return t(), bm.exports = ID(), bm.exports;
}
var FD = PD();
const VD = /* @__PURE__ */ Wm(FD);
function Jc() {
  return Jc = Object.assign ? Object.assign.bind() : function(t) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (t[i] = o[i]);
    }
    return t;
  }, Jc.apply(null, arguments);
}
const Cm = {
  light: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#EEEEEE"
        }
      }
    }
  },
  dark: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#424242",
          backgroundImage: "none"
        }
      }
    }
  },
  lightsOut: {
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: "#212121"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          backgroundImage: "none"
        }
      }
    }
  }
}, qD = {
  default: {
    palette: {
      mode: "light"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  light: {
    components: {
      ...Cm.light
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      secondary: {
        main: "#40f0bb"
      },
      mode: "light",
      background: {
        default: "#F5F5F5",
        cardContainer: "#fafafa"
      },
      customShadow: "0px 6px 9px 0px #00000014"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  dark: {
    components: {
      ...Cm.dark
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#303030",
        paper: "#424242",
        cardContainer: "#424242"
      },
      customShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  },
  lightsOut: {
    components: {
      ...Cm.lightsOut
    },
    palette: {
      primary: {
        main: "#F05F40"
      },
      mode: "dark",
      background: {
        default: "#000",
        paper: "#000",
        cardContainer: "#000"
      }
    },
    shadows: Array(25).fill("0px 4px 12px #888888"),
    typography: {
      // "fontFamily": "Quicksand"
    },
    shape: {
      borderRadius: 12
    }
  }
}, ix = (t) => ({
  MuiCard: {
    styleOverrides: {
      root: ({
        theme: a
      }) => {
        var o, i;
        return {
          backgroundColor: a.palette.mode === "dark" ? ((i = (o = t.palette) == null ? void 0 : o.background) == null ? void 0 : i.cardContainer) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: ({
        theme: a
      }) => {
        var o, i;
        return {
          backgroundColor: a.palette.mode === "dark" ? ((i = (o = t.palette) == null ? void 0 : o.background) == null ? void 0 : i.paper) || "#424242" : void 0,
          backgroundImage: "none"
        };
      }
    }
  }
});
class GD extends b.Component {
  constructor(o) {
    super(o);
    Yl(this, "handleReload", () => {
      const {
        reloadPath: o
      } = this.props;
      o && fC(o) ? window.location.href = o : window.location.reload();
    });
    this.state = {
      themeName: o.themeName || "light",
      hasAppError: !1
    }, this.themeSource = o.theme || qD;
    const i = this.themeSource[this.state.themeName];
    this.theme = ks({
      ...qb(i),
      components: {
        ...ix(i)
      }
    });
  }
  /*
   * ERROR BOUNDARY CAPABILITIES:
   *   CATCHES:
   *   - Render crashes (e.g., null references during render)
   *   - Missing JS Chunks (ChunkLoadError mid-session)
   *   - Synchronous errors in lifecycle methods/useEffect
   */
  static getDerivedStateFromError(o) {
    return {
      hasAppError: !0
    };
  }
  componentDidCatch(o, i) {
    console.error("HDTheme Error Boundary caught an error:", o, i);
  }
  componentDidUpdate(o) {
    if (this.props.themeName !== o.themeName) {
      const i = this.themeSource[this.props.themeName];
      this.theme = ks({
        ...qb(i),
        components: {
          ...ix(i)
        }
      }), this.setState({
        themeName: this.props.themeName
      });
    }
  }
  render() {
    return this.state.hasAppError ? /* @__PURE__ */ Le.createElement("div", {
      style: {
        padding: "60px 20px",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
        color: "#111827",
        margin: "20px auto",
        maxWidth: "600px"
      }
    }, /* @__PURE__ */ Le.createElement("h3", {
      style: {
        marginBottom: "10px",
        fontSize: "1.5rem",
        fontWeight: "500"
      }
    }, "Something went wrong"), /* @__PURE__ */ Le.createElement("p", {
      style: {
        marginBottom: "24px",
        color: "#4b5563",
        fontSize: "1rem"
      }
    }, "The application may have been updated in the background."), /* @__PURE__ */ Le.createElement("button", {
      onClick: this.handleReload,
      style: {
        padding: "10px 24px",
        cursor: "pointer",
        background: "transparent",
        color: "#374151",
        border: "1px solid #d1d5db",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: "500"
      }
    }, "Reload Application")) : /* @__PURE__ */ Le.createElement(e5, {
      injectFirst: !0
    }, /* @__PURE__ */ Le.createElement(A4, {
      theme: this.theme
    }, this.props.children));
  }
}
function fC(t) {
  return !(!t || typeof t != "string" || !t.startsWith("/") || t.startsWith("//") || /^[a-zA-Z][a-zA-Z0-9+\-.]*:/i.test(t));
}
function YD(t) {
  if (t && typeof t == "object" && "componentPath" in t) {
    const {
      componentPath: a,
      ...o
    } = t;
    return Object.keys(o).length > 0 ? o : {};
  }
  return t;
}
function XD(t) {
  return {
    setWebsearchHeader: (a) => window.parent.postMessage({
      type: "setWebsearchHeader",
      header: a
    }, "*"),
    secondaryMenu: (a) => t(a),
    searchQuery: (a) => window.parent.postMessage({
      type: "searchQuery",
      query: a
    }, "*"),
    switchFullScreen: (a = !0, o = !1) => window.parent.postMessage({
      type: "switchFullScreen",
      fullScreen: a,
      navigatedViaRoute: o
    }, "*"),
    componentLoaded: () => window.parent.postMessage({
      type: "componentLoaded"
    }, "*"),
    loadAiGeneratedResponse: (a) => new Promise((o, i) => {
      const s = Date.now();
      function c(d) {
        var p, m;
        ((p = d.data) == null ? void 0 : p.type) === "loadAiGeneratedResponseResult" && ((m = d.data) == null ? void 0 : m.requestId) === s && (window.removeEventListener("message", c), d.data.error ? i(new Error(d.data.error)) : o(d.data.response));
      }
      window.addEventListener("message", c), window.parent.postMessage({
        type: "loadAiGeneratedResponse",
        payload: a,
        requestId: s
      }, "*");
    }),
    unload: (a = "") => window.parent.postMessage({
      type: "unload",
      message: a
    }, "*")
  };
}
const KD = {
  outerContainer: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    width: "100%"
  }
};
function WD(t) {
  b.useEffect(() => {
    if (!t) return;
    const a = (o) => {
      (o.key === "/" || o.code === "Slash") && window.parent.postMessage({
        type: "searchShortcutPressed",
        event: {
          key: o.key,
          code: o.code
        }
      }, "*");
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [t]);
}
const QD = pe(Y3)(({
  theme: t
}) => ({
  zIndex: "5",
  position: "fixed",
  bottom: 58,
  right: 10,
  opacity: 0.8,
  width: "48px",
  height: "48px",
  [t.breakpoints.up("lg")]: {
    bottom: 58,
    right: "calc(100% - 1140px)"
  }
})), sx = pe("div")(({
  theme: t
}) => ({
  display: "flex",
  justifyContent: "space-evenly",
  cursor: "pointer",
  position: "sticky",
  bottom: 0,
  backgroundColor: t.palette.background.default,
  zIndex: 1e3
})), ZD = (t) => {
  var O;
  const {
    isMdUp: a
  } = t, [o, i] = b.useState(a), [s, c] = b.useState(!1);
  b.useEffect(() => {
    i(a);
  }, [a]);
  const {
    menu: d,
    componentFullWidth: p,
    fullHeight: m,
    applyBtnMdUp: g,
    applyBtnMdUpOnClick: y,
    applyBtnSmDown: h,
    applyBtnSmDownOnClick: C,
    filters: T,
    noOfFilters: R,
    preventAutoClose: x
  } = t.secondaryMenu, A = () => {
    i(!o), c(!s);
  }, z = (M) => {
    A(), M();
  }, N = () => {
    A();
  };
  return b.useEffect(() => {
    var M;
    if ((M = t.secondaryMenu) != null && M.menu && document.getElementById("secondaryMenu")) {
      const _ = document.getElementById("secondaryMenu").clientHeight > window.innerHeight;
      t.setHeightOverflow(_);
    }
  }, [(O = t.secondaryMenu) == null ? void 0 : O.menu]), /* @__PURE__ */ Le.createElement(Le.Fragment, null, !o && /* @__PURE__ */ Le.createElement(QD, {
    onClick: A,
    color: "primary",
    className: p ? "fabButtonClose" : "fabButton"
  }, T ? R ? /* @__PURE__ */ Le.createElement(jO, {
    badgeContent: R,
    color: "primary"
  }, /* @__PURE__ */ Le.createElement(nx, null)) : /* @__PURE__ */ Le.createElement(nx, null) : /* @__PURE__ */ Le.createElement(_D, null)), a && o && /* @__PURE__ */ Le.createElement(M1, {
    variant: "persistent",
    anchor: "right",
    open: o,
    PaperProps: {
      elevation: 1,
      id: "secondaryMenu",
      sx: {
        boxSizing: "border-box",
        paddingTop: "4px",
        width: o ? "100%" : 0,
        position: "static",
        height: m ? "inherit" : "auto"
      }
    }
  }, d, g && y ? /* @__PURE__ */ Le.createElement(sx, null, /* @__PURE__ */ Le.createElement(_a, {
    variant: "outlined",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: N
  }, "Close"), /* @__PURE__ */ Le.createElement(_a, {
    variant: "contained",
    sx: {
      width: "50%"
    },
    color: "primary",
    onClick: () => z(y)
  }, "Apply")) : /* @__PURE__ */ Le.createElement(be, {
    sx: {
      display: "flex",
      padding: "16px",
      cursor: "pointer"
    },
    onClick: A
  }, /* @__PURE__ */ Le.createElement(Ae, {
    variant: "caption"
  }, "Hide Menu"), /* @__PURE__ */ Le.createElement(kD, {
    sx: {
      color: "grey",
      width: 16,
      height: 20
    }
  }))), !a && /* @__PURE__ */ Le.createElement(M1, {
    anchor: "right",
    open: s,
    onClose: A,
    PaperProps: {
      sx: {
        width: "80%"
      }
    }
  }, /* @__PURE__ */ Le.createElement("div", {
    tabIndex: 0,
    role: "button",
    onClick: h && C || x ? void 0 : A,
    onKeyDown: h && C || x ? void 0 : A
  }, x && /* @__PURE__ */ Le.createElement(be, {
    sx: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "10px"
    }
  }, /* @__PURE__ */ Le.createElement(Ws, {
    onClick: A,
    edge: "end",
    "aria-label": "close",
    size: "large"
  }, /* @__PURE__ */ Le.createElement(kS, null))), d, h && C && /* @__PURE__ */ Le.createElement(sx, null, /* @__PURE__ */ Le.createElement(_a, {
    variant: "outlined",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: N
  }, "Close"), /* @__PURE__ */ Le.createElement(_a, {
    variant: "contained",
    color: "primary",
    style: {
      width: "50%"
    },
    onClick: () => z(C)
  }, "Apply")))));
};
var JD = /* @__PURE__ */ b.memo(ZD);
const e8 = ({
  secondaryMenuProps: t,
  isMdUp: a
}) => {
  const [o, i] = b.useState(!1), [s, c] = b.useState({
    scrollPos: 0,
    top: 0
  }), d = b.useRef(null), p = {
    innerContainer: {
      position: "sticky",
      top: 0,
      bottom: "auto",
      display: "flex",
      flexDirection: "column"
    }
  };
  return b.useEffect(() => {
    const m = () => {
      var h;
      const g = (h = d == null ? void 0 : d.current) == null ? void 0 : h.offsetHeight, y = window.innerHeight;
      c((C) => {
        const T = C.scrollPos - window.scrollY;
        let R = C.top + T;
        return R > 0 && (R = 0), R < y - g && (R = y - g), {
          top: R,
          scrollPos: window.scrollY
        };
      });
    };
    return window.addEventListener("scroll", m), () => {
      window.removeEventListener("scroll", m);
    };
  }, []), t && t !== "" && t.menu !== "" ? /* @__PURE__ */ Le.createElement("div", {
    ref: d,
    style: {
      ...p.innerContainer,
      top: o ? s == null ? void 0 : s.top : 0,
      width: a ? "240px" : 0,
      height: "100%"
    }
  }, /* @__PURE__ */ Le.createElement(JD, {
    setHeightOverflow: i,
    secondaryMenu: t,
    isMdUp: a
  })) : null;
};
let Em = null;
function ux(t, a, o, i, s) {
  const c = document.getElementById("root");
  Em || (Em = VD.createRoot(c));
  const d = location.pathname.indexOf(a) < 0 ? "" : location.pathname.slice(0, location.pathname.indexOf(a));
  Em.render(/* @__PURE__ */ Le.createElement(t, {
    baseURL: a,
    basename: d,
    searchData: o,
    UIOptions: i,
    deployedBackendURL: s
  }));
}
function t8(t, a, o) {
  window.onmessage = function(c) {
    if (c.data.type === "dataRefresh") {
      const d = c.data.searchData && c.data.searchData[0];
      ux(t, a, d, c.data.UIOptions, o);
    }
  }, ux(t, a, {}, {}, o);
  const i = new ResizeObserver((c) => {
    if (c.length > 0) {
      const d = c[0].target.clientHeight;
      window.parent.postMessage({
        type: "resizeIframe",
        height: d
      }, "*");
    }
  }), s = document.getElementById("root");
  s && i.observe(s);
}
const n8 = (t) => {
  var O, M;
  const a = b.useRef(!1), o = aC(), i = ur(), s = bo(), c = cM(s.breakpoints.up("md")), [d, p] = b.useState(null), {
    format: m,
    UIOptions: g,
    searchData: y,
    baseURL: h = "",
    basename: C = ""
  } = t, T = m === "fullscreen", R = C + h, {
    componentStyles: x,
    ...A
  } = g || {}, z = b.useMemo(() => XD(p), []);
  WD(T), b.useEffect(() => {
    if (t.searchData && t.searchData.componentPath) {
      const D = t.searchData.componentPath, _ = D.startsWith(R) ? D.substring(R.length) : D;
      fC(_) ? o(_, {
        replace: !0
      }) : console.warn("[withHD] Blocked unsafe componentPath:", D);
    }
  }, [(O = t == null ? void 0 : t.searchData) == null ? void 0 : O.componentPath]), b.useEffect(() => {
    const D = R + i.pathname + i.search;
    a.current ? D && (!(t.searchData && t.searchData.componentPath) || t.searchData && t.searchData.componentPath && D !== t.searchData.componentPath) && window.parent.postMessage({
      type: "updateComponentPath",
      componentPath: D
    }, "*") : a.current = !0;
  }, [i == null ? void 0 : i.pathname, i == null ? void 0 : i.search]);
  const N = YD(y);
  return /* @__PURE__ */ Le.createElement("div", {
    style: KD.outerContainer
  }, /* @__PURE__ */ Le.createElement("div", {
    style: {
      width: c && T && d && d.menu !== "" ? "calc(100% - 400px)" : "100%",
      maxWidth: c && T && d && d.menu !== "" ? "966px" : "1160px",
      margin: c && T && ((M = g == null ? void 0 : g.componentStyles) == null ? void 0 : M.margin) || ""
    }
  }, /* @__PURE__ */ Le.createElement(t.comp, Jc({}, t, {
    UIOptions: A,
    searchData: N,
    messageHandlers: z
  }))), T && /* @__PURE__ */ Le.createElement(e8, {
    secondaryMenuProps: d,
    isMdUp: c
  }));
}, a8 = (t) => {
  const a = (o) => {
    let {
      quickPanel: i,
      basename: s,
      searchData: c,
      UIOptions: d,
      ...p
    } = o ? {
      ...o
    } : {};
    i = i || !0, s = s || "", p.search = p.search || ((y) => console.log("New query = ", y));
    const m = c && (typeof c == "object" && !Array.isArray(c) || Array.isArray(c) && c.length > 0);
    let g = !0;
    try {
      g = window.self !== window.top;
    } catch {
      g = !0;
    }
    return /* @__PURE__ */ Le.createElement(b.Fragment, null, m || d && d.sandbox || !g ? /* @__PURE__ */ Le.createElement(AD, {
      basename: s + (o.baseURL || "")
    }, /* @__PURE__ */ Le.createElement(GD, {
      themeName: d && d.themeName,
      theme: d && d.theme,
      reloadPath: `/${s + (o.baseURL || "")}`
    }, /* @__PURE__ */ Le.createElement(aD, null, /* @__PURE__ */ Le.createElement(iC, {
      path: "*",
      element: /* @__PURE__ */ Le.createElement(n8, Jc({}, o, {
        comp: t,
        quickPanel: i,
        format: d && d.format,
        searchData: c,
        UIOptions: d,
        basename: s
      }))
    })))) : null, !m && d && d.sandbox ? /* @__PURE__ */ Le.createElement("div", {
      style: {
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "red",
        color: "white"
      }
    }, /* @__PURE__ */ Le.createElement("h6", {
      style: {
        margin: "5px"
      }
    }, "No search data received. Component will not be loaded...")) : null);
  };
  return a.initHD = t8, a;
};
function r8(t, a) {
  a === void 0 && (a = {});
  var o = a.insertAt;
  if (!(typeof document > "u")) {
    var i = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
    s.type = "text/css", o === "top" && i.firstChild ? i.insertBefore(s, i.firstChild) : i.appendChild(s), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(document.createTextNode(t));
  }
}
var o8 = `/* placeholder animations */
.imgComponentStyles_placeholder__GXJke {
    margin: 0 auto;
    width: 100%;
    height: 18px;
    border-radius: 8px;
    background-color: #eee;
}

@keyframes imgComponentStyles_placeHolderShimmer__5-fnD {
    0% {
        background-position: -468px 0
    }

    100% {
        background-position: 468px 0
    }
}

.imgComponentStyles_animated-background__vGXc6 {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: imgComponentStyles_placeHolderShimmer__5-fnD;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 15%, #b2b2b2 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100%;
    border-radius: 20px;
    position: relative;
}

/* blinking dot */
@keyframes imgComponentStyles_up-right__Y-xzl {
    0% {
        transform: scale(1);
        opacity: .25
    }

    50% {
        transform: scale (1, 5);
        opacity: 1;
    }

    100% {
        transform: scale(1);
        opacity: .25;
    }
}

.imgComponentStyles_border__Lvjsc {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    opacity: .25;
}

.imgComponentStyles_dot-animation__T9Onq {
    background-color: white;
    position: relative;
    top: -12px;
    left: 30px;
    -webkit-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -moz-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    -o-animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
    animation: imgComponentStyles_up-right__Y-xzl 1s infinite;
}`;
r8(o8);
const i8 = a8(az);
export {
  i8 as default
};
