import * as C from "react";
import N, { useCallback as pe, forwardRef as M, Children as St, isValidElement as Mn, createElement as x, cloneElement as Ur, Fragment as Ht, createContext as mt, useContext as rt, useState as X, useEffect as Q, useRef as I, useMemo as xt, useLayoutEffect as Ps, useReducer as ks, useDebugValue as Hg, useImperativeHandle as Yg, Component as Kg, createRef as no } from "react";
import * as Gg from "react-dom";
import Xc, { flushSync as Ms, createPortal as Jc } from "react-dom";
var it = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var p = { exports: {} }, ro = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iu;
function qg() {
  if (Iu)
    return ro;
  Iu = 1;
  var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, l) {
    var u, d = {}, f = null, m = null;
    l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      r.call(c, u) && !a.hasOwnProperty(u) && (d[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: i, key: f, ref: m, props: d, _owner: o.current };
  }
  return ro.Fragment = n, ro.jsx = s, ro.jsxs = s, ro;
}
var oo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ju;
function Xg() {
  return ju || (ju = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function g(S) {
      if (S === null || typeof S != "object")
        return null;
      var ne = v && S[v] || S[h];
      return typeof ne == "function" ? ne : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(S) {
      {
        for (var ne = arguments.length, de = new Array(ne > 1 ? ne - 1 : 0), Ne = 1; Ne < ne; Ne++)
          de[Ne - 1] = arguments[Ne];
        $("error", S, de);
      }
    }
    function $(S, ne, de) {
      {
        var Ne = y.ReactDebugCurrentFrame, je = Ne.getStackAddendum();
        je !== "" && (ne += "%s", de = de.concat([je]));
        var ze = de.map(function(Ae) {
          return String(Ae);
        });
        ze.unshift("Warning: " + ne), Function.prototype.apply.call(console[S], console, ze);
      }
    }
    var _ = !1, w = !1, T = !1, k = !1, j = !1, R;
    R = Symbol.for("react.module.reference");
    function ee(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === r || S === a || j || S === o || S === l || S === u || k || S === m || _ || w || T || typeof S == "object" && S !== null && (S.$$typeof === f || S.$$typeof === d || S.$$typeof === s || S.$$typeof === i || S.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === R || S.getModuleId !== void 0));
    }
    function re(S, ne, de) {
      var Ne = S.displayName;
      if (Ne)
        return Ne;
      var je = ne.displayName || ne.name || "";
      return je !== "" ? de + "(" + je + ")" : de;
    }
    function U(S) {
      return S.displayName || "Context";
    }
    function B(S) {
      if (S == null)
        return null;
      if (typeof S.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
        return S.displayName || S.name || null;
      if (typeof S == "string")
        return S;
      switch (S) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case i:
            var ne = S;
            return U(ne) + ".Consumer";
          case s:
            var de = S;
            return U(de._context) + ".Provider";
          case c:
            return re(S, S.render, "ForwardRef");
          case d:
            var Ne = S.displayName || null;
            return Ne !== null ? Ne : B(S.type) || "Memo";
          case f: {
            var je = S, ze = je._payload, Ae = je._init;
            try {
              return B(Ae(ze));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, G = 0, J, Y, Z, D, O, L, z;
    function oe() {
    }
    oe.__reactDisabledLog = !0;
    function ce() {
      {
        if (G === 0) {
          J = console.log, Y = console.info, Z = console.warn, D = console.error, O = console.group, L = console.groupCollapsed, z = console.groupEnd;
          var S = {
            configurable: !0,
            enumerable: !0,
            value: oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: S,
            log: S,
            warn: S,
            error: S,
            group: S,
            groupCollapsed: S,
            groupEnd: S
          });
        }
        G++;
      }
    }
    function ye() {
      {
        if (G--, G === 0) {
          var S = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, S, {
              value: J
            }),
            info: W({}, S, {
              value: Y
            }),
            warn: W({}, S, {
              value: Z
            }),
            error: W({}, S, {
              value: D
            }),
            group: W({}, S, {
              value: O
            }),
            groupCollapsed: W({}, S, {
              value: L
            }),
            groupEnd: W({}, S, {
              value: z
            })
          });
        }
        G < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var be = y.ReactCurrentDispatcher, te;
    function le(S, ne, de) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (je) {
            var Ne = je.stack.trim().match(/\n( *(at )?)/);
            te = Ne && Ne[1] || "";
          }
        return `
` + te + S;
      }
    }
    var ve = !1, q;
    {
      var he = typeof WeakMap == "function" ? WeakMap : Map;
      q = new he();
    }
    function K(S, ne) {
      if (!S || ve)
        return "";
      {
        var de = q.get(S);
        if (de !== void 0)
          return de;
      }
      var Ne;
      ve = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ze;
      ze = be.current, be.current = null, ce();
      try {
        if (ne) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (ln) {
              Ne = ln;
            }
            Reflect.construct(S, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (ln) {
              Ne = ln;
            }
            S.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ln) {
            Ne = ln;
          }
          S();
        }
      } catch (ln) {
        if (ln && Ne && typeof ln.stack == "string") {
          for (var Oe = ln.stack.split(`
`), ht = Ne.stack.split(`
`), et = Oe.length - 1, nt = ht.length - 1; et >= 1 && nt >= 0 && Oe[et] !== ht[nt]; )
            nt--;
          for (; et >= 1 && nt >= 0; et--, nt--)
            if (Oe[et] !== ht[nt]) {
              if (et !== 1 || nt !== 1)
                do
                  if (et--, nt--, nt < 0 || Oe[et] !== ht[nt]) {
                    var Mt = `
` + Oe[et].replace(" at new ", " at ");
                    return S.displayName && Mt.includes("<anonymous>") && (Mt = Mt.replace("<anonymous>", S.displayName)), typeof S == "function" && q.set(S, Mt), Mt;
                  }
                while (et >= 1 && nt >= 0);
              break;
            }
        }
      } finally {
        ve = !1, be.current = ze, ye(), Error.prepareStackTrace = je;
      }
      var fr = S ? S.displayName || S.name : "", Au = fr ? le(fr) : "";
      return typeof S == "function" && q.set(S, Au), Au;
    }
    function Re(S, ne, de) {
      return K(S, !1);
    }
    function Ve(S) {
      var ne = S.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function lt(S, ne, de) {
      if (S == null)
        return "";
      if (typeof S == "function")
        return K(S, Ve(S));
      if (typeof S == "string")
        return le(S);
      switch (S) {
        case l:
          return le("Suspense");
        case u:
          return le("SuspenseList");
      }
      if (typeof S == "object")
        switch (S.$$typeof) {
          case c:
            return Re(S.render);
          case d:
            return lt(S.type, ne, de);
          case f: {
            var Ne = S, je = Ne._payload, ze = Ne._init;
            try {
              return lt(ze(je), ne, de);
            } catch {
            }
          }
        }
      return "";
    }
    var P = Object.prototype.hasOwnProperty, F = {}, H = y.ReactDebugCurrentFrame;
    function xe(S) {
      if (S) {
        var ne = S._owner, de = lt(S.type, S._source, ne ? ne.type : null);
        H.setExtraStackFrame(de);
      } else
        H.setExtraStackFrame(null);
    }
    function ue(S, ne, de, Ne, je) {
      {
        var ze = Function.call.bind(P);
        for (var Ae in S)
          if (ze(S, Ae)) {
            var Oe = void 0;
            try {
              if (typeof S[Ae] != "function") {
                var ht = Error((Ne || "React class") + ": " + de + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ht.name = "Invariant Violation", ht;
              }
              Oe = S[Ae](ne, Ae, Ne, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Oe = et;
            }
            Oe && !(Oe instanceof Error) && (xe(je), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", de, Ae, typeof Oe), xe(null)), Oe instanceof Error && !(Oe.message in F) && (F[Oe.message] = !0, xe(je), b("Failed %s type: %s", de, Oe.message), xe(null));
          }
      }
    }
    var se = Array.isArray;
    function $e(S) {
      return se(S);
    }
    function Ge(S) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, de = ne && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return de;
      }
    }
    function qe(S) {
      try {
        return sn(S), !1;
      } catch {
        return !0;
      }
    }
    function sn(S) {
      return "" + S;
    }
    function _a(S) {
      if (qe(S))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(S)), sn(S);
    }
    var cn = y.ReactCurrentOwner, Qr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ca, eo, to;
    to = {};
    function Ea(S) {
      if (P.call(S, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(S, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return S.ref !== void 0;
    }
    function Mg(S) {
      if (P.call(S, "key")) {
        var ne = Object.getOwnPropertyDescriptor(S, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return S.key !== void 0;
    }
    function Og(S, ne) {
      if (typeof S.ref == "string" && cn.current && ne && cn.current.stateNode !== ne) {
        var de = B(cn.current.type);
        to[de] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(cn.current.type), S.ref), to[de] = !0);
      }
    }
    function Dg(S, ne) {
      {
        var de = function() {
          Ca || (Ca = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function Rg(S, ne) {
      {
        var de = function() {
          eo || (eo = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        de.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var Ag = function(S, ne, de, Ne, je, ze, Ae) {
      var Oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: S,
        key: ne,
        ref: de,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: ze
      };
      return Oe._store = {}, Object.defineProperty(Oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(Oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)), Oe;
    };
    function Ig(S, ne, de, Ne, je) {
      {
        var ze, Ae = {}, Oe = null, ht = null;
        de !== void 0 && (_a(de), Oe = "" + de), Mg(ne) && (_a(ne.key), Oe = "" + ne.key), Ea(ne) && (ht = ne.ref, Og(ne, je));
        for (ze in ne)
          P.call(ne, ze) && !Qr.hasOwnProperty(ze) && (Ae[ze] = ne[ze]);
        if (S && S.defaultProps) {
          var et = S.defaultProps;
          for (ze in et)
            Ae[ze] === void 0 && (Ae[ze] = et[ze]);
        }
        if (Oe || ht) {
          var nt = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Oe && Dg(Ae, nt), ht && Rg(Ae, nt);
        }
        return Ag(S, Oe, ht, je, Ne, cn.current, Ae);
      }
    }
    var pi = y.ReactCurrentOwner, Pu = y.ReactDebugCurrentFrame;
    function dr(S) {
      if (S) {
        var ne = S._owner, de = lt(S.type, S._source, ne ? ne.type : null);
        Pu.setExtraStackFrame(de);
      } else
        Pu.setExtraStackFrame(null);
    }
    var mi;
    mi = !1;
    function vi(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function ku() {
      {
        if (pi.current) {
          var S = B(pi.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
    }
    function jg(S) {
      {
        if (S !== void 0) {
          var ne = S.fileName.replace(/^.*[\\\/]/, ""), de = S.lineNumber;
          return `

Check your code at ` + ne + ":" + de + ".";
        }
        return "";
      }
    }
    var Mu = {};
    function Lg(S) {
      {
        var ne = ku();
        if (!ne) {
          var de = typeof S == "string" ? S : S.displayName || S.name;
          de && (ne = `

Check the top-level render call using <` + de + ">.");
        }
        return ne;
      }
    }
    function Ou(S, ne) {
      {
        if (!S._store || S._store.validated || S.key != null)
          return;
        S._store.validated = !0;
        var de = Lg(ne);
        if (Mu[de])
          return;
        Mu[de] = !0;
        var Ne = "";
        S && S._owner && S._owner !== pi.current && (Ne = " It was passed a child from " + B(S._owner.type) + "."), dr(S), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, Ne), dr(null);
      }
    }
    function Du(S, ne) {
      {
        if (typeof S != "object")
          return;
        if ($e(S))
          for (var de = 0; de < S.length; de++) {
            var Ne = S[de];
            vi(Ne) && Ou(Ne, ne);
          }
        else if (vi(S))
          S._store && (S._store.validated = !0);
        else if (S) {
          var je = g(S);
          if (typeof je == "function" && je !== S.entries)
            for (var ze = je.call(S), Ae; !(Ae = ze.next()).done; )
              vi(Ae.value) && Ou(Ae.value, ne);
        }
      }
    }
    function Fg(S) {
      {
        var ne = S.type;
        if (ne == null || typeof ne == "string")
          return;
        var de;
        if (typeof ne == "function")
          de = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === d))
          de = ne.propTypes;
        else
          return;
        if (de) {
          var Ne = B(ne);
          ue(de, S.props, "prop", Ne, S);
        } else if (ne.PropTypes !== void 0 && !mi) {
          mi = !0;
          var je = B(ne);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Vg(S) {
      {
        for (var ne = Object.keys(S.props), de = 0; de < ne.length; de++) {
          var Ne = ne[de];
          if (Ne !== "children" && Ne !== "key") {
            dr(S), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), dr(null);
            break;
          }
        }
        S.ref !== null && (dr(S), b("Invalid attribute `ref` supplied to `React.Fragment`."), dr(null));
      }
    }
    function Ru(S, ne, de, Ne, je, ze) {
      {
        var Ae = ee(S);
        if (!Ae) {
          var Oe = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ht = jg(je);
          ht ? Oe += ht : Oe += ku();
          var et;
          S === null ? et = "null" : $e(S) ? et = "array" : S !== void 0 && S.$$typeof === t ? (et = "<" + (B(S.type) || "Unknown") + " />", Oe = " Did you accidentally export a JSX literal instead of a component?") : et = typeof S, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Oe);
        }
        var nt = Ig(S, ne, de, je, ze);
        if (nt == null)
          return nt;
        if (Ae) {
          var Mt = ne.children;
          if (Mt !== void 0)
            if (Ne)
              if ($e(Mt)) {
                for (var fr = 0; fr < Mt.length; fr++)
                  Du(Mt[fr], S);
                Object.freeze && Object.freeze(Mt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Du(Mt, S);
        }
        return S === r ? Vg(nt) : Fg(nt), nt;
      }
    }
    function Ug(S, ne, de) {
      return Ru(S, ne, de, !0);
    }
    function Wg(S, ne, de) {
      return Ru(S, ne, de, !1);
    }
    var Bg = Wg, zg = Ug;
    oo.Fragment = r, oo.jsx = Bg, oo.jsxs = zg;
  }()), oo;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = qg() : e.exports = Xg();
})(p);
function E() {
  return E = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, E.apply(this, arguments);
}
function Jg(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Zo(...e) {
  return (t) => e.forEach(
    (n) => Jg(n, t)
  );
}
function we(...e) {
  return pe(Zo(...e), e);
}
const Jt = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find(Qg);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ Mn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(ic, E({}, r, {
      ref: t
    }), /* @__PURE__ */ Mn(s) ? /* @__PURE__ */ Ur(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(ic, E({}, r, {
    ref: t
  }), n);
});
Jt.displayName = "Slot";
const ic = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Mn(n) ? /* @__PURE__ */ Ur(n, {
    ...eb(r, n.props),
    ref: t ? Zo(t, n.ref) : n.ref
  }) : St.count(n) > 1 ? St.only(null) : null;
});
ic.displayName = "SlotClone";
const Qc = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function Qg(e) {
  return /* @__PURE__ */ Mn(e) && e.type === Qc;
}
function eb(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      a(...i), o(...i);
    } : o && (n[r] = o) : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function jf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = jf(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Lf() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = jf(e)) && (r && (r += " "), r += t);
  return r;
}
const Lu = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Fu = Lf, Wr = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null)
    return Fu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = a == null ? void 0 : a[l];
    if (u === null)
      return null;
    const f = Lu(u) || Lu(d);
    return o[l][f];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [d, f] = u;
    return f === void 0 || (l[d] = f), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: f, ...m } = u;
    return Object.entries(m).every((v) => {
      let [h, g] = v;
      return Array.isArray(g) ? g.includes({
        ...a,
        ...i
      }[h]) : {
        ...a,
        ...i
      }[h] === g;
    }) ? [
      ...l,
      d,
      f
    ] : l;
  }, []);
  return Fu(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
async function NT(e, t) {
  const n = await fetch(e, t);
  if (!n.ok)
    throw new Error(n.statusText);
  return n.json();
}
const TT = async (e = 3e3) => {
  await new Promise((t) => setTimeout(t, e));
}, hi = (e, t = 1) => {
  let n = e.replace("#", "");
  n.length === 3 && (n = `${n[0]}${n[0]}${n[1]}${n[1]}${n[2]}${n[2]}`);
  const r = parseInt(n.substring(0, 2), 16), o = parseInt(n.substring(2, 4), 16), a = parseInt(n.substring(4, 6), 16);
  return t > 1 && t <= 100 && (t = t / 100), `rgba(${r},${o},${a},${t})`;
}, PT = (e) => {
  const t = hi(e), n = hi(e, 0.1), r = hi(e, 0.3);
  return {
    colorOpacity1: t,
    colorOpacity2: n,
    colorOpacity3: r
  };
}, gi = {
  DIGITAL: [
    { label: "0412", value: "0412", image: "/images/marks/digitel.png" }
  ],
  MOVISTAR: [
    { label: "0414", value: "0414", image: "/images/marks/movistar.png" },
    { label: "0424", value: "0424", image: "/images/marks/movistar.png" }
  ],
  MOVILNET: [
    { label: "0416", value: "0416", image: "/images/marks/movilnet.png" },
    { label: "0426", value: "0426", image: "/images/marks/movilnet.png" }
  ]
}, kT = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), MT = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), OT = (e) => e.replace(/\s/g, "").replace(/(\d{3})(\d{4})/, (r, o, a) => `${o} ${a}`), DT = (e) => {
  const t = e.substring(0, 4), r = e.substring(4).replace(/(\d{3})(\d{4})/, "$1 $2");
  return { codeLine: t, number: r };
}, Ka = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1048576).toFixed(1)} MB`, RT = () => [...gi.DIGITAL, ...gi.MOVILNET, ...gi.MOVISTAR], ao = {
  VENEZUELAN: { label: "Venezolano", value: "VENEZUELAN", key: "V" },
  PASSPORT: { label: "Pasaporte", value: "PASSPORT", key: "P" },
  JURIDICAL: { label: "Jurídico", value: "JURIDICAL", key: "J" },
  FOREIGN: { label: "Extranjero", value: "FOREIGN", key: "E" },
  GOVERNMENTAL: { label: "Gubernamental", value: "GOVERNMENTAL", key: "G" }
};
function tb() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Ff(t)) && (r && (r += " "), r += n);
  return r;
}
function Ff(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Ff(e[r])) && (n && (n += " "), n += t);
  return n;
}
var el = "-";
function nb(e) {
  var t = ob(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function a(i) {
    var c = i.split(el);
    return c[0] === "" && c.length !== 1 && c.shift(), Vf(c, t) || rb(i);
  }
  function s(i, c) {
    var l = n[i] || [];
    return c && o[i] ? [].concat(l, o[i]) : l;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: s
  };
}
function Vf(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Vf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var a = e.join(el);
    return (s = t.validators.find(function(i) {
      var c = i.validator;
      return c(a);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Vu = /^\[(.+)\]$/;
function rb(e) {
  if (Vu.test(e)) {
    var t = Vu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function ob(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = sb(Object.entries(e.classGroups), n);
  return o.forEach(function(a) {
    var s = a[0], i = a[1];
    cc(i, r, s, t);
  }), r;
}
function cc(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? t : Uu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ab(o)) {
        cc(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(s) {
      var i = s[0], c = s[1];
      cc(c, Uu(t, i), n, r);
    });
  });
}
function Uu(e, t) {
  var n = e;
  return t.split(el).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function ab(e) {
  return e.isThemeGetter;
}
function sb(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], a = o.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(i) {
        var c = i[0], l = i[1];
        return [t + c, l];
      })) : s;
    });
    return [r, a];
  }) : e;
}
function ib(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(a, s) {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set: function(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}
var Uf = "!";
function cb(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var i = [], c = 0, l = 0, u, d = 0; d < s.length; d++) {
      var f = s[d];
      if (c === 0) {
        if (f === r && (n || s.slice(d, d + o) === t)) {
          i.push(s.slice(l, d)), l = d + o;
          continue;
        }
        if (f === "/") {
          u = d;
          continue;
        }
      }
      f === "[" ? c++ : f === "]" && c--;
    }
    var m = i.length === 0 ? s : s.substring(l), v = m.startsWith(Uf), h = v ? m.substring(1) : m, g = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: g
    };
  };
}
function lb(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function ub(e) {
  return {
    cache: ib(e.cacheSize),
    splitModifiers: cb(e),
    ...nb(e)
  };
}
var db = /\s+/;
function fb(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(db).map(function(s) {
    var i = n(s), c = i.modifiers, l = i.hasImportantModifier, u = i.baseClassName, d = i.maybePostfixModifierPosition, f = r(d ? u.substring(0, d) : u), m = Boolean(d);
    if (!f) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (f = r(u), !f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      m = !1;
    }
    var v = lb(c).join(":"), h = l ? v + Uf : v;
    return {
      isTailwindClass: !0,
      modifierId: h,
      classGroupId: f,
      originalClassName: s,
      hasPostfixModifier: m
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var i = s.modifierId, c = s.classGroupId, l = s.hasPostfixModifier, u = i + c;
    return a.has(u) ? !1 : (a.add(u), o(c, l).forEach(function(d) {
      return a.add(i + d);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function pb() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, a, s = i;
  function i(l) {
    var u = t[0], d = t.slice(1), f = d.reduce(function(m, v) {
      return v(m);
    }, u());
    return r = ub(f), o = r.cache.get, a = r.cache.set, s = c, c(l);
  }
  function c(l) {
    var u = o(l);
    if (u)
      return u;
    var d = fb(l, r);
    return a(l, d), d;
  }
  return function() {
    return s(tb.apply(null, arguments));
  };
}
function He(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Wf = /^\[(?:([a-z-]+):)?(.+)\]$/i, mb = /^\d+\/\d+$/, vb = /* @__PURE__ */ new Set(["px", "full", "screen"]), hb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bb = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function jt(e) {
  return Kn(e) || vb.has(e) || mb.test(e) || lc(e);
}
function lc(e) {
  return ar(e, "length", Cb);
}
function xb(e) {
  return ar(e, "size", Bf);
}
function yb(e) {
  return ar(e, "position", Bf);
}
function $b(e) {
  return ar(e, "url", Eb);
}
function Sa(e) {
  return ar(e, "number", Kn);
}
function Kn(e) {
  return !Number.isNaN(Number(e));
}
function wb(e) {
  return e.endsWith("%") && Kn(e.slice(0, -1));
}
function so(e) {
  return Wu(e) || ar(e, "number", Wu);
}
function De(e) {
  return Wf.test(e);
}
function io() {
  return !0;
}
function Cn(e) {
  return hb.test(e);
}
function _b(e) {
  return ar(e, "", Sb);
}
function ar(e, t, n) {
  var r = Wf.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function Cb(e) {
  return gb.test(e);
}
function Bf() {
  return !1;
}
function Eb(e) {
  return e.startsWith("url(");
}
function Wu(e) {
  return Number.isInteger(Number(e));
}
function Sb(e) {
  return bb.test(e);
}
function Nb() {
  var e = He("colors"), t = He("spacing"), n = He("blur"), r = He("brightness"), o = He("borderColor"), a = He("borderRadius"), s = He("borderSpacing"), i = He("borderWidth"), c = He("contrast"), l = He("grayscale"), u = He("hueRotate"), d = He("invert"), f = He("gap"), m = He("gradientColorStops"), v = He("gradientColorStopPositions"), h = He("inset"), g = He("margin"), y = He("opacity"), b = He("padding"), $ = He("saturate"), _ = He("scale"), w = He("sepia"), T = He("skew"), k = He("space"), j = He("translate"), R = function() {
    return ["auto", "contain", "none"];
  }, ee = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, re = function() {
    return ["auto", De, t];
  }, U = function() {
    return [De, t];
  }, B = function() {
    return ["", jt];
  }, W = function() {
    return ["auto", Kn, De];
  }, G = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, J = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, Y = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Z = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, D = function() {
    return ["", "0", De];
  }, O = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, L = function() {
    return [Kn, Sa];
  }, z = function() {
    return [Kn, De];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [io],
      spacing: [jt],
      blur: ["none", "", Cn, De],
      brightness: L(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Cn, De],
      borderSpacing: U(),
      borderWidth: B(),
      contrast: L(),
      grayscale: D(),
      hueRotate: z(),
      invert: D(),
      gap: U(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wb, lc],
      inset: re(),
      margin: re(),
      opacity: L(),
      padding: U(),
      saturate: L(),
      scale: L(),
      sepia: D(),
      skew: z(),
      space: U(),
      translate: U()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", De]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Cn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(G(), [De])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", so]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: re()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", De]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", so]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [io]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", so]
        }, De]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [io]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [so]
        }, De]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Z())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(Z(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(Z(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [k]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", De, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", De, jt]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Cn]
        }, Cn, De]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [De, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", De, jt]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [De, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Cn, lc]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Sa]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [io]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", De]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Kn, Sa]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", De, jt]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", De]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", De]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(J(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", De, jt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: U()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", De]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", De]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(G(), [yb])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", xb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $b]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(J(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: J()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(J())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [De, jt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [jt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: B()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [jt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Cn, _b]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [io]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Y()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Y()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Cn, De]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", De]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: z()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", De]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: z()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", De]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [so, De]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [j]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [j]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", De]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", De]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": U()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": U()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": U()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": U()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": U()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": U()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": U()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": U()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": U()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": U()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": U()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": U()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": U()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": U()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": U()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": U()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": U()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": U()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", De]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [jt, Sa]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var Tb = /* @__PURE__ */ pb(Nb);
function A(...e) {
  return Tb(Lf(e));
}
const zf = ({ className: e }) => /* @__PURE__ */ p.exports.jsx("div", { className: A(`spinner h-4 w-4 ${e}`) }), bo = Wr(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), at = C.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, isLoading: o, children: a, ...s }, i) => {
    const c = r ? Jt : "button";
    return /* @__PURE__ */ p.exports.jsx(
      c,
      {
        className: A(bo({ variant: t, size: n, className: e })),
        ref: i,
        ...s,
        children: o ? /* @__PURE__ */ p.exports.jsx(zf, {}) : a
      }
    );
  }
);
at.displayName = "Button";
var Pb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const kb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mb = (e, t) => {
  const n = M(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => x(
      "svg",
      {
        ref: l,
        ...Pb,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${kb(e)}`,
        ...c
      },
      [
        ...t.map(([u, d]) => x(u, d)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
var ot = Mb;
const On = ot("Check", [
  ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }]
]), xo = ot("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Hf = ot("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), qo = ot("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), Bu = ot("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), zu = ot("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), Os = ot("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]), Hu = ot("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]), Yu = ot("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]), Ds = ot("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]), Ob = ot("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), Db = ot("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), Rb = ot("PanelLeftClose", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]), Ab = ot("PanelLeftOpen", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn"
    }
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]), Ib = ot("PenSquare", [
  [
    "path",
    {
      d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1qinfi"
    }
  ],
  [
    "path",
    { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }
  ]
]), Yf = ot("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), jb = ot("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), Lb = ot("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]), Fb = ot("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), tl = ot("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function bi(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
function co(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", o;
    if (r === "formatting" && e.formattingValues) {
      var a = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[s] || e.formattingValues[a];
    } else {
      var i = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[c] || e.values[i];
    }
    var l = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[l];
  };
}
function lo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    var s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Ub(i, function(d) {
      return d.test(s);
    }) : Vb(i, function(d) {
      return d.test(s);
    }), l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
    var u = t.slice(s.length);
    return {
      value: l,
      rest: u
    };
  };
}
function Vb(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function Ub(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Wb(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var o = r[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    var s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var i = t.slice(o.length);
    return {
      value: s,
      rest: i
    };
  };
}
function Nr(e) {
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function ct(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Ce(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function Me(e) {
  Ce(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || Nr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Rt(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = ct(t);
  return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Qt(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = ct(t);
  if (isNaN(r))
    return new Date(NaN);
  if (!r)
    return n;
  var o = n.getDate(), a = new Date(n.getTime());
  a.setMonth(n.getMonth() + r + 1, 0);
  var s = a.getDate();
  return o >= s ? a : (n.setFullYear(a.getFullYear(), a.getMonth(), o), n);
}
function Bb(e, t) {
  Ce(2, arguments);
  var n = Me(e).getTime(), r = ct(t);
  return new Date(n + r);
}
var zb = {};
function Fn() {
  return zb;
}
function en(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Me(e), m = f.getDay(), v = (m < d ? 7 : 0) + m - d;
  return f.setDate(f.getDate() - v), f.setHours(0, 0, 0, 0), f;
}
function Jn(e) {
  return Ce(1, arguments), en(e, {
    weekStartsOn: 1
  });
}
function Hb(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getFullYear(), r = new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var o = Jn(r), a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var s = Jn(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Yb(e) {
  Ce(1, arguments);
  var t = Hb(e), n = new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = Jn(n);
  return r;
}
function yo(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Tr(e) {
  Ce(1, arguments);
  var t = Me(e);
  return t.setHours(0, 0, 0, 0), t;
}
var Kb = 864e5;
function mn(e, t) {
  Ce(2, arguments);
  var n = Tr(e), r = Tr(t), o = n.getTime() - yo(n), a = r.getTime() - yo(r);
  return Math.round((o - a) / Kb);
}
function uc(e, t) {
  Ce(2, arguments);
  var n = ct(t), r = n * 7;
  return Rt(e, r);
}
function Gb(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return Qt(e, n * 12);
}
function Zb(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Nr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Me(r);
    (n === void 0 || n < o || isNaN(Number(o))) && (n = o);
  }), n || new Date(NaN);
}
function qb(e) {
  Ce(1, arguments);
  var t;
  if (e && typeof e.forEach == "function")
    t = e;
  else if (Nr(e) === "object" && e !== null)
    t = Array.prototype.slice.call(e);
  else
    return new Date(NaN);
  var n;
  return t.forEach(function(r) {
    var o = Me(r);
    (n === void 0 || n > o || isNaN(o.getDate())) && (n = o);
  }), n || new Date(NaN);
}
function Et(e, t) {
  Ce(2, arguments);
  var n = Tr(e), r = Tr(t);
  return n.getTime() === r.getTime();
}
function nl(e) {
  return Ce(1, arguments), e instanceof Date || Nr(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Xb(e) {
  if (Ce(1, arguments), !nl(e) && typeof e != "number")
    return !1;
  var t = Me(e);
  return !isNaN(Number(t));
}
function $o(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
var Jb = 6048e5;
function Qb(e, t, n) {
  Ce(2, arguments);
  var r = en(e, n), o = en(t, n), a = r.getTime() - yo(r), s = o.getTime() - yo(o);
  return Math.round((a - s) / Jb);
}
function rl(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Nt(e) {
  Ce(1, arguments);
  var t = Me(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function e1(e) {
  Ce(1, arguments);
  var t = Me(e), n = new Date(0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function ol(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Me(e), m = f.getDay(), v = (m < d ? -7 : 0) + 6 - (m - d);
  return f.setDate(f.getDate() + v), f.setHours(23, 59, 59, 999), f;
}
function Kf(e) {
  return Ce(1, arguments), ol(e, {
    weekStartsOn: 1
  });
}
function t1(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return Bb(e, -n);
}
var n1 = 864e5;
function r1(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), o = n - r;
  return Math.floor(o / n1) + 1;
}
function Ga(e) {
  Ce(1, arguments);
  var t = 1, n = Me(e), r = n.getUTCDay(), o = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n;
}
function Gf(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getUTCFullYear(), r = new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var o = Ga(r), a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Ga(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function o1(e) {
  Ce(1, arguments);
  var t = Gf(e), n = new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = Ga(n);
  return r;
}
var a1 = 6048e5;
function s1(e) {
  Ce(1, arguments);
  var t = Me(e), n = Ga(t).getTime() - o1(t).getTime();
  return Math.round(n / a1) + 1;
}
function Za(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.weekStartsOn) !== null && o !== void 0 ? o : u.weekStartsOn) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = Me(e), m = f.getUTCDay(), v = (m < d ? 7 : 0) + m - d;
  return f.setUTCDate(f.getUTCDate() - v), f.setUTCHours(0, 0, 0, 0), f;
}
function Zf(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Me(e), d = u.getUTCFullYear(), f = Fn(), m = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setUTCFullYear(d + 1, 0, m), v.setUTCHours(0, 0, 0, 0);
  var h = Za(v, t), g = new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var y = Za(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function i1(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = Zf(e, t), m = new Date(0);
  m.setUTCFullYear(f, 0, d), m.setUTCHours(0, 0, 0, 0);
  var v = Za(m, t);
  return v;
}
var c1 = 6048e5;
function l1(e, t) {
  Ce(1, arguments);
  var n = Me(e), r = Za(n, t).getTime() - i1(n, t).getTime();
  return Math.round(r / c1) + 1;
}
function Ue(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var u1 = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), o = r > 0 ? r : 1 - r;
    return Ue(n === "yy" ? o % 100 : o, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : Ue(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return Ue(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return Ue(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return Ue(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return Ue(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return Ue(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, o = t.getUTCMilliseconds(), a = Math.floor(o * Math.pow(10, r - 3));
    return Ue(a, n.length);
  }
};
const En = u1;
var pr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, d1 = {
  // Era
  G: function(t, n, r) {
    var o = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(o, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(o, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(o, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var o = t.getUTCFullYear(), a = o > 0 ? o : 1 - o;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return En.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, o) {
    var a = Zf(t, o), s = a > 0 ? a : 1 - a;
    if (n === "YY") {
      var i = s % 100;
      return Ue(i, 2);
    }
    return n === "Yo" ? r.ordinalNumber(s, {
      unit: "year"
    }) : Ue(s, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = Gf(t);
    return Ue(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return Ue(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(o);
      case "QQ":
        return Ue(o, 2);
      case "Qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var o = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(o);
      case "qq":
        return Ue(o, 2);
      case "qo":
        return r.ordinalNumber(o, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return En.M(t, n);
      case "Mo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var o = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(o + 1);
      case "LL":
        return Ue(o + 1, 2);
      case "Lo":
        return r.ordinalNumber(o + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, o) {
    var a = l1(t, o);
    return n === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Ue(a, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var o = s1(t);
    return n === "Io" ? r.ordinalNumber(o, {
      unit: "week"
    }) : Ue(o, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : En.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var o = r1(t);
    return n === "Do" ? r.ordinalNumber(o, {
      unit: "dayOfYear"
    }) : Ue(o, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var o = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(s);
      case "ee":
        return Ue(s, 2);
      case "eo":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, o) {
    var a = t.getUTCDay(), s = (a - o.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(s);
      case "cc":
        return Ue(s, n.length);
      case "co":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var o = t.getUTCDay(), a = o === 0 ? 7 : o;
    switch (n) {
      case "i":
        return String(a);
      case "ii":
        return Ue(a, n.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var o = t.getUTCHours(), a = o / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o === 12 ? a = pr.noon : o === 0 ? a = pr.midnight : a = o / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var o = t.getUTCHours(), a;
    switch (o >= 17 ? a = pr.evening : o >= 12 ? a = pr.afternoon : o >= 4 ? a = pr.morning : a = pr.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var o = t.getUTCHours() % 12;
      return o === 0 && (o = 12), r.ordinalNumber(o, {
        unit: "hour"
      });
    }
    return En.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : En.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var o = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Ue(o, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var o = t.getUTCHours();
    return o === 0 && (o = 24), n === "ko" ? r.ordinalNumber(o, {
      unit: "hour"
    }) : Ue(o, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : En.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : En.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return En.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    if (s === 0)
      return "Z";
    switch (n) {
      case "X":
        return Gu(s);
      case "XXXX":
      case "XX":
        return Hn(s);
      case "XXXXX":
      case "XXX":
      default:
        return Hn(s, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "x":
        return Gu(s);
      case "xxxx":
      case "xx":
        return Hn(s);
      case "xxxxx":
      case "xxx":
      default:
        return Hn(s, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ku(s, ":");
      case "OOOO":
      default:
        return "GMT" + Hn(s, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ku(s, ":");
      case "zzzz":
      default:
        return "GMT" + Hn(s, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, o) {
    var a = o._originalDate || t, s = Math.floor(a.getTime() / 1e3);
    return Ue(s, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, o) {
    var a = o._originalDate || t, s = a.getTime();
    return Ue(s, n.length);
  }
};
function Ku(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.floor(r / 60), a = r % 60;
  if (a === 0)
    return n + String(o);
  var s = t || "";
  return n + String(o) + s + Ue(a, 2);
}
function Gu(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + Ue(Math.abs(e) / 60, 2);
  }
  return Hn(e, t);
}
function Hn(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", o = Math.abs(e), a = Ue(Math.floor(o / 60), 2), s = Ue(o % 60, 2);
  return r + a + n + s;
}
const f1 = d1;
var Zu = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, qf = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, p1 = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], o = r[1], a = r[2];
  if (!a)
    return Zu(t, n);
  var s;
  switch (o) {
    case "P":
      s = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      s = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      s = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      s = n.dateTime({
        width: "full"
      });
      break;
  }
  return s.replace("{{date}}", Zu(o, n)).replace("{{time}}", qf(a, n));
}, m1 = {
  p: qf,
  P: p1
};
const v1 = m1;
var h1 = ["D", "DD"], g1 = ["YY", "YYYY"];
function b1(e) {
  return h1.indexOf(e) !== -1;
}
function x1(e) {
  return g1.indexOf(e) !== -1;
}
function qu(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var y1 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, $1 = function(t, n, r) {
  var o, a = y1[t];
  return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
};
const w1 = $1;
var _1 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, C1 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, E1 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, S1 = {
  date: bi({
    formats: _1,
    defaultWidth: "full"
  }),
  time: bi({
    formats: C1,
    defaultWidth: "full"
  }),
  dateTime: bi({
    formats: E1,
    defaultWidth: "full"
  })
};
const N1 = S1;
var T1 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, P1 = function(t, n, r, o) {
  return T1[t];
};
const k1 = P1;
var M1 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, O1 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, D1 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, R1 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, A1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, I1 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, j1 = function(t, n) {
  var r = Number(t), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, L1 = {
  ordinalNumber: j1,
  era: co({
    values: M1,
    defaultWidth: "wide"
  }),
  quarter: co({
    values: O1,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: co({
    values: D1,
    defaultWidth: "wide"
  }),
  day: co({
    values: R1,
    defaultWidth: "wide"
  }),
  dayPeriod: co({
    values: A1,
    defaultWidth: "wide",
    formattingValues: I1,
    defaultFormattingWidth: "wide"
  })
};
const F1 = L1;
var V1 = /^(\d+)(th|st|nd|rd)?/i, U1 = /\d+/i, W1 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, B1 = {
  any: [/^b/i, /^(a|c)/i]
}, z1 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, H1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Y1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, K1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, G1 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Z1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, q1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, X1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, J1 = {
  ordinalNumber: Wb({
    matchPattern: V1,
    parsePattern: U1,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: lo({
    matchPatterns: W1,
    defaultMatchWidth: "wide",
    parsePatterns: B1,
    defaultParseWidth: "any"
  }),
  quarter: lo({
    matchPatterns: z1,
    defaultMatchWidth: "wide",
    parsePatterns: H1,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: lo({
    matchPatterns: Y1,
    defaultMatchWidth: "wide",
    parsePatterns: K1,
    defaultParseWidth: "any"
  }),
  day: lo({
    matchPatterns: G1,
    defaultMatchWidth: "wide",
    parsePatterns: Z1,
    defaultParseWidth: "any"
  }),
  dayPeriod: lo({
    matchPatterns: q1,
    defaultMatchWidth: "any",
    parsePatterns: X1,
    defaultParseWidth: "any"
  })
};
const Q1 = J1;
var ex = {
  code: "en-US",
  formatDistance: w1,
  formatLong: N1,
  formatRelative: k1,
  localize: F1,
  match: Q1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Xf = ex;
var tx = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nx = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rx = /^'([^]*?)'?$/, ox = /''/g, ax = /[a-zA-Z]/;
function sr(e, t, n) {
  var r, o, a, s, i, c, l, u, d, f, m, v, h, g, y, b, $, _;
  Ce(2, arguments);
  var w = String(t), T = Fn(), k = (r = (o = n == null ? void 0 : n.locale) !== null && o !== void 0 ? o : T.locale) !== null && r !== void 0 ? r : Xf, j = ct((a = (s = (i = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (l = n.locale) === null || l === void 0 || (u = l.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && i !== void 0 ? i : T.firstWeekContainsDate) !== null && s !== void 0 ? s : (d = T.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(j >= 1 && j <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var R = ct((m = (v = (h = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (y = n.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.weekStartsOn) !== null && h !== void 0 ? h : T.weekStartsOn) !== null && v !== void 0 ? v : ($ = T.locale) === null || $ === void 0 || (_ = $.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!k.localize)
    throw new RangeError("locale must contain localize property");
  if (!k.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ee = Me(e);
  if (!Xb(ee))
    throw new RangeError("Invalid time value");
  var re = yo(ee), U = t1(ee, re), B = {
    firstWeekContainsDate: j,
    weekStartsOn: R,
    locale: k,
    _originalDate: ee
  }, W = w.match(nx).map(function(G) {
    var J = G[0];
    if (J === "p" || J === "P") {
      var Y = v1[J];
      return Y(G, k.formatLong);
    }
    return G;
  }).join("").match(tx).map(function(G) {
    if (G === "''")
      return "'";
    var J = G[0];
    if (J === "'")
      return sx(G);
    var Y = f1[J];
    if (Y)
      return !(n != null && n.useAdditionalWeekYearTokens) && x1(G) && qu(G, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && b1(G) && qu(G, t, String(e)), Y(U, G, k.localize, B);
    if (J.match(ax))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + J + "`");
    return G;
  }).join("");
  return W;
}
function sx(e) {
  var t = e.match(rx);
  return t ? t[1].replace(ox, "'") : e;
}
function ix(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getFullYear(), r = t.getMonth(), o = new Date(0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
var cx = 6048e5;
function lx(e) {
  Ce(1, arguments);
  var t = Me(e), n = Jn(t).getTime() - Yb(t).getTime();
  return Math.round(n / cx) + 1;
}
function ux(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getTime();
  return n;
}
function dx(e) {
  return Ce(1, arguments), Math.floor(ux(e) / 1e3);
}
function fx(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Me(e), d = u.getFullYear(), f = Fn(), m = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var v = new Date(0);
  v.setFullYear(d + 1, 0, m), v.setHours(0, 0, 0, 0);
  var h = en(v, t), g = new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var y = en(g, t);
  return u.getTime() >= h.getTime() ? d + 1 : u.getTime() >= y.getTime() ? d : d - 1;
}
function px(e, t) {
  var n, r, o, a, s, i, c, l;
  Ce(1, arguments);
  var u = Fn(), d = ct((n = (r = (o = (a = t == null ? void 0 : t.firstWeekContainsDate) !== null && a !== void 0 ? a : t == null || (s = t.locale) === null || s === void 0 || (i = s.options) === null || i === void 0 ? void 0 : i.firstWeekContainsDate) !== null && o !== void 0 ? o : u.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = u.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = fx(e, t), m = new Date(0);
  m.setFullYear(f, 0, d), m.setHours(0, 0, 0, 0);
  var v = en(m, t);
  return v;
}
var mx = 6048e5;
function vx(e, t) {
  Ce(1, arguments);
  var n = Me(e), r = en(n, t).getTime() - px(n, t).getTime();
  return Math.round(r / mx) + 1;
}
function hx(e) {
  Ce(1, arguments);
  var t = Me(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function gx(e, t) {
  return Ce(1, arguments), Qb(hx(e), Nt(e), t) + 1;
}
function Jf(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getTime() > r.getTime();
}
function Qf(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getTime() < r.getTime();
}
function al(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function bx(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = Me(t);
  return n.getFullYear() === r.getFullYear();
}
function Xu(e, t) {
  Ce(2, arguments);
  var n = ct(t);
  return Rt(e, -n);
}
function xi(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = ct(t), o = n.getFullYear(), a = n.getDate(), s = new Date(0);
  s.setFullYear(o, r, 15), s.setHours(0, 0, 0, 0);
  var i = ix(s);
  return n.setMonth(r, Math.min(a, i)), n;
}
function Ju(e, t) {
  Ce(2, arguments);
  var n = Me(e), r = ct(t);
  return isNaN(n.getTime()) ? new Date(NaN) : (n.setFullYear(r), n);
}
var Ee = function() {
  return Ee = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ee.apply(this, arguments);
};
function xx(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ep(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Xo(e) {
  return e.mode === "multiple";
}
function Jo(e) {
  return e.mode === "range";
}
function Rs(e) {
  return e.mode === "single";
}
var yx = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function $x(e, t) {
  return sr(e, "LLLL y", t);
}
function wx(e, t) {
  return sr(e, "d", t);
}
function _x(e, t) {
  return sr(e, "LLLL", t);
}
function Cx(e) {
  return "".concat(e);
}
function Ex(e, t) {
  return sr(e, "cccccc", t);
}
function Sx(e, t) {
  return sr(e, "yyyy", t);
}
var Nx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: $x,
  formatDay: wx,
  formatMonthCaption: _x,
  formatWeekNumber: Cx,
  formatWeekdayName: Ex,
  formatYearCaption: Sx
}), Tx = function(e, t, n) {
  return sr(e, "do MMMM (EEEE)", n);
}, Px = function() {
  return "Month: ";
}, kx = function() {
  return "Go to next month";
}, Mx = function() {
  return "Go to previous month";
}, Ox = function(e, t) {
  return sr(e, "cccc", t);
}, Dx = function(e) {
  return "Week n. ".concat(e);
}, Rx = function() {
  return "Year: ";
}, Ax = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Tx,
  labelMonthDropdown: Px,
  labelNext: kx,
  labelPrevious: Mx,
  labelWeekNumber: Dx,
  labelWeekday: Ox,
  labelYearDropdown: Rx
});
function Ix() {
  var e = "buttons", t = yx, n = Xf, r = {}, o = {}, a = 1, s = {}, i = new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Nx,
    labels: Ax,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function jx(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Nt(r) : t && (a = new Date(t, 0, 1)), o ? s = rl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Tr(a) : void 0,
    toDate: s ? Tr(s) : void 0
  };
}
var tp = mt(void 0);
function Lx(e) {
  var t, n = e.initialProps, r = Ix(), o = jx(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var c;
  (Rs(n) || Xo(n) || Jo(n)) && (c = n.onSelect);
  var l = Ee(Ee(Ee({}, r), n), { captionLayout: i, classNames: Ee(Ee({}, r.classNames), n.classNames), components: Ee({}, n.components), formatters: Ee(Ee({}, r.formatters), n.formatters), fromDate: a, labels: Ee(Ee({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: Ee(Ee({}, r.modifiers), n.modifiers), modifiersClassNames: Ee(Ee({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: Ee(Ee({}, r.styles), n.styles), toDate: s });
  return N.createElement(tp.Provider, { value: l }, e.children);
}
function Ye() {
  var e = rt(tp);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function np(e) {
  var t = Ye(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return N.createElement("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id }, a(e.displayMonth, { locale: n }));
}
function Fx(e) {
  return N.createElement(
    "svg",
    Ee({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e),
    N.createElement("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function rp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, c = e.style, l = Ye(), u = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Fx;
  return N.createElement(
    "div",
    { className: i, style: c },
    N.createElement("span", { className: l.classNames.vhidden }, e["aria-label"]),
    N.createElement("select", { name: e.name, "aria-label": e["aria-label"], className: l.classNames.dropdown, style: l.styles.dropdown, value: o, onChange: r }, a),
    N.createElement(
      "div",
      { className: l.classNames.caption_label, style: l.styles.caption_label, "aria-hidden": "true" },
      s,
      N.createElement(u, { className: l.classNames.dropdown_icon, style: l.styles.dropdown_icon })
    )
  );
}
function Vx(e) {
  var t, n = Ye(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, c = n.classNames, l = n.components, u = n.labels.labelMonthDropdown;
  if (!r)
    return N.createElement(N.Fragment, null);
  if (!o)
    return N.createElement(N.Fragment, null);
  var d = [];
  if (bx(r, o))
    for (var f = Nt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      d.push(xi(f, m));
  else
    for (var f = Nt(new Date()), m = 0; m <= 11; m++)
      d.push(xi(f, m));
  var v = function(g) {
    var y = Number(g.target.value), b = xi(Nt(e.displayMonth), y);
    e.onChange(b);
  }, h = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : rp;
  return N.createElement(h, { name: "months", "aria-label": u(), className: c.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }) }, d.map(function(g) {
    return N.createElement("option", { key: g.getMonth(), value: g.getMonth() }, i(g, { locale: s }));
  }));
}
function Ux(e) {
  var t, n = e.displayMonth, r = Ye(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, c = r.classNames, l = r.components, u = r.formatters.formatYearCaption, d = r.labels.labelYearDropdown, f = [];
  if (!o)
    return N.createElement(N.Fragment, null);
  if (!a)
    return N.createElement(N.Fragment, null);
  for (var m = o.getFullYear(), v = a.getFullYear(), h = m; h <= v; h++)
    f.push(Ju(e1(new Date()), h));
  var g = function(b) {
    var $ = Ju(Nt(n), Number(b.target.value));
    e.onChange($);
  }, y = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : rp;
  return N.createElement(y, { name: "years", "aria-label": d(), className: c.dropdown_year, style: i.dropdown_year, onChange: g, value: n.getFullYear(), caption: u(n, { locale: s }) }, f.map(function(b) {
    return N.createElement("option", { key: b.getFullYear(), value: b.getFullYear() }, u(b, { locale: s }));
  }));
}
function Wx(e, t) {
  var n = X(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function Bx(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, c = i === void 0 ? 1 : i;
  if (a && $o(a, o) < 0) {
    var l = -1 * (c - 1);
    o = Qt(a, l);
  }
  return s && $o(o, s) < 0 && (o = s), Nt(o);
}
function zx() {
  var e = Ye(), t = Bx(e), n = Wx(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var c = Nt(s);
      o(c), (i = e.onMonthChange) === null || i === void 0 || i.call(e, c);
    }
  };
  return [r, a];
}
function Hx(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Nt(e), a = Nt(Qt(o, r)), s = $o(a, o), i = [], c = 0; c < s; c++) {
    var l = Qt(o, c);
    i.push(l);
  }
  return n && (i = i.reverse()), i;
}
function Yx(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return Qt(i, s);
    var c = $o(n, e);
    if (!(c < a))
      return Qt(i, s);
  }
}
function Kx(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Nt(e);
    if (!n)
      return Qt(i, -s);
    var c = $o(i, n);
    if (!(c <= 0))
      return Qt(i, -s);
  }
}
var op = mt(void 0);
function Gx(e) {
  var t = Ye(), n = zx(), r = n[0], o = n[1], a = Hx(r, t), s = Yx(r, t), i = Kx(r, t), c = function(d) {
    return a.some(function(f) {
      return al(d, f);
    });
  }, l = function(d, f) {
    c(d) || (f && Qf(d, f) ? o(Qt(d, 1 + t.numberOfMonths * -1)) : o(d));
  }, u = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: l,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: c
  };
  return N.createElement(op.Provider, { value: u }, e.children);
}
function Qo() {
  var e = rt(op);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Qu(e) {
  var t, n = Ye(), r = n.classNames, o = n.styles, a = n.components, s = Qo().goToMonth, i = function(u) {
    s(u);
  }, c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : np, l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth });
  return N.createElement(
    "div",
    { className: r.caption_dropdowns, style: o.caption_dropdowns },
    N.createElement("div", { className: r.vhidden }, l),
    N.createElement(Vx, { onChange: i, displayMonth: e.displayMonth }),
    N.createElement(Ux, { onChange: i, displayMonth: e.displayMonth })
  );
}
function Zx(e) {
  return N.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" })
  );
}
function qx(e) {
  return N.createElement(
    "svg",
    Ee({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e),
    N.createElement("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" })
  );
}
var qa = M(function(e, t) {
  var n = Ye(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = Ee(Ee({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), N.createElement("button", Ee({}, e, { ref: t, type: "button", className: s, style: i }));
});
function Xx(e) {
  var t, n, r = Ye(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, c = r.labels, l = c.labelPrevious, u = c.labelNext, d = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return N.createElement(N.Fragment, null);
  var f = l(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), v = u(e.nextMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : qx, y = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : Zx;
  return N.createElement(
    "div",
    { className: s.nav, style: i.nav },
    !e.hidePrevious && N.createElement(qa, { name: "previous-month", "aria-label": f, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick }, o === "rtl" ? N.createElement(g, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(y, { className: s.nav_icon, style: i.nav_icon })),
    !e.hideNext && N.createElement(qa, { name: "next-month", "aria-label": v, className: h, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick }, o === "rtl" ? N.createElement(y, { className: s.nav_icon, style: i.nav_icon }) : N.createElement(g, { className: s.nav_icon, style: i.nav_icon }))
  );
}
function ed(e) {
  var t = Ye().numberOfMonths, n = Qo(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(v) {
    return al(e.displayMonth, v);
  }), c = i === 0, l = i === s.length - 1, u = t > 1 && (c || !l), d = t > 1 && (l || !c), f = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return N.createElement(Xx, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: o, previousMonth: r, onPreviousClick: f, onNextClick: m });
}
function Jx(e) {
  var t, n = Ye(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, c = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : np, l;
  return o ? l = N.createElement(c, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? l = N.createElement(Qu, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? l = N.createElement(
    N.Fragment,
    null,
    N.createElement(Qu, { displayMonth: e.displayMonth, id: e.id }),
    N.createElement(ed, { displayMonth: e.displayMonth, id: e.id })
  ) : l = N.createElement(
    N.Fragment,
    null,
    N.createElement(c, { id: e.id, displayMonth: e.displayMonth }),
    N.createElement(ed, { displayMonth: e.displayMonth, id: e.id })
  ), N.createElement("div", { className: r.caption, style: a.caption }, l);
}
function Qx(e) {
  var t = Ye(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? N.createElement(
    "tfoot",
    { className: o, style: r.tfoot },
    N.createElement(
      "tr",
      null,
      N.createElement("td", { colSpan: 8 }, n)
    )
  ) : N.createElement(N.Fragment, null);
}
function ey(e, t, n) {
  for (var r = n ? Jn(new Date()) : en(new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = Rt(r, a);
    o.push(s);
  }
  return o;
}
function ty() {
  var e = Ye(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, l = ey(o, a, s);
  return N.createElement(
    "tr",
    { style: n.head_row, className: t.head_row },
    r && N.createElement("td", { style: n.head_cell, className: t.head_cell }),
    l.map(function(u, d) {
      return N.createElement("th", { key: d, scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(u, { locale: o }) }, i(u, { locale: o }));
    })
  );
}
function ny() {
  var e, t = Ye(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : ty;
  return N.createElement(
    "thead",
    { style: r.head, className: n.head },
    N.createElement(a, null)
  );
}
function ry(e) {
  var t = Ye(), n = t.locale, r = t.formatters.formatDay;
  return N.createElement(N.Fragment, null, r(e.date, { locale: n }));
}
var sl = mt(void 0);
function oy(e) {
  if (!Xo(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return N.createElement(sl.Provider, { value: t }, e.children);
  }
  return N.createElement(ay, { initialProps: e.initialProps, children: e.children });
}
function ay(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(l, u, d) {
    var f, m;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, l, u, d);
    var v = Boolean(u.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var h = Boolean(!u.selected && a && (r == null ? void 0 : r.length) === a);
      if (!h) {
        var g = r ? ep([], r, !0) : [];
        if (u.selected) {
          var y = g.findIndex(function(b) {
            return Et(l, b);
          });
          g.splice(y, 1);
        } else
          g.push(l);
        (m = t.onSelect) === null || m === void 0 || m.call(t, g, l, u, d);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(l) {
    var u = a && r.length > a - 1, d = r.some(function(f) {
      return Et(f, l);
    });
    return Boolean(u && !d);
  });
  var c = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return N.createElement(sl.Provider, { value: c }, n);
}
function il() {
  var e = rt(sl);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function sy(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  if (!r)
    return { from: e, to: void 0 };
  if (!o && Et(r, e))
    return { from: r, to: e };
  if (!o && Qf(e, r))
    return { from: e, to: r };
  if (!o)
    return { from: r, to: e };
  if (!(Et(o, e) && Et(r, e))) {
    if (Et(o, e))
      return { from: o, to: void 0 };
    if (!Et(r, e))
      return Jf(r, e) ? { from: e, to: o } : { from: r, to: e };
  }
}
var cl = mt(void 0);
function iy(e) {
  if (!Jo(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return N.createElement(cl.Provider, { value: t }, e.children);
  }
  return N.createElement(cy, { initialProps: e.initialProps, children: e.children });
}
function cy(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, c = t.max, l = function(m, v, h) {
    var g, y;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, m, v, h);
    var b = sy(m, r);
    (y = t.onSelect) === null || y === void 0 || y.call(t, b, m, v, h);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a && (u.range_start = [a], s ? (u.range_end = [s], Et(a, s) || (u.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : u.range_end = [a]), i && (a && !s && u.disabled.push({
    after: Xu(a, i - 1),
    before: Rt(a, i - 1)
  }), a && s && u.disabled.push({
    after: a,
    before: Rt(a, i - 1)
  })), c && (a && !s && (u.disabled.push({
    before: Rt(a, -c + 1)
  }), u.disabled.push({
    after: Rt(a, c - 1)
  })), a && s)) {
    var d = mn(s, a) + 1, f = c - d;
    u.disabled.push({
      before: Xu(a, f)
    }), u.disabled.push({
      after: Rt(s, f)
    });
  }
  return N.createElement(cl.Provider, { value: { selected: r, onDayClick: l, modifiers: u } }, n);
}
function ll() {
  var e = rt(cl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Ua(e) {
  return Array.isArray(e) ? ep([], e, !0) : e !== void 0 ? [e] : [];
}
function ly(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Ua(o);
  }), t;
}
var Yt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Yt || (Yt = {}));
var uy = Yt.Selected, un = Yt.Disabled, dy = Yt.Hidden, fy = Yt.Today, yi = Yt.RangeEnd, $i = Yt.RangeMiddle, wi = Yt.RangeStart, py = Yt.Outside;
function my(e, t, n) {
  var r, o = (r = {}, r[uy] = Ua(e.selected), r[un] = Ua(e.disabled), r[dy] = Ua(e.hidden), r[fy] = [e.today], r[yi] = [], r[$i] = [], r[wi] = [], r[py] = [], r);
  return e.fromDate && o[un].push({ before: e.fromDate }), e.toDate && o[un].push({ after: e.toDate }), Xo(e) ? o[un] = o[un].concat(t.modifiers[un]) : Jo(e) && (o[un] = o[un].concat(n.modifiers[un]), o[wi] = n.modifiers[wi], o[$i] = n.modifiers[$i], o[yi] = n.modifiers[yi]), o;
}
var ap = mt(void 0);
function vy(e) {
  var t = Ye(), n = il(), r = ll(), o = my(t, n, r), a = ly(t.modifiers), s = Ee(Ee({}, o), a);
  return N.createElement(ap.Provider, { value: s }, e.children);
}
function sp() {
  var e = rt(ap);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function hy(e) {
  return Boolean(e && typeof e == "object" && "before" in e && "after" in e);
}
function gy(e) {
  return Boolean(e && typeof e == "object" && "from" in e);
}
function by(e) {
  return Boolean(e && typeof e == "object" && "after" in e);
}
function xy(e) {
  return Boolean(e && typeof e == "object" && "before" in e);
}
function yy(e) {
  return Boolean(e && typeof e == "object" && "dayOfWeek" in e);
}
function $y(e, t) {
  var n, r = t.from, o = t.to;
  if (!r)
    return !1;
  if (!o && Et(r, e))
    return !0;
  if (!o)
    return !1;
  var a = mn(o, r) < 0;
  a && (n = [o, r], r = n[0], o = n[1]);
  var s = mn(e, r) >= 0 && mn(o, e) >= 0;
  return s;
}
function wy(e) {
  return nl(e);
}
function _y(e) {
  return Array.isArray(e) && e.every(nl);
}
function Cy(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (wy(n))
      return Et(e, n);
    if (_y(n))
      return n.includes(e);
    if (gy(n))
      return $y(e, n);
    if (yy(n))
      return n.dayOfWeek.includes(e.getDay());
    if (hy(n)) {
      var r = mn(n.before, e), o = mn(n.after, e), a = r > 0, s = o < 0, i = Jf(n.before, n.after);
      return i ? s && a : a || s;
    }
    return by(n) ? mn(e, n.after) > 0 : xy(n) ? mn(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function ul(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return Cy(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !al(e, n) && (o.outside = !0), o;
}
function Ey(e, t) {
  for (var n = Nt(e[0]), r = rl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = ul(s, t), c = !i.disabled && !i.hidden;
    if (!c) {
      s = Rt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = Rt(s, 1);
  }
  return a || o;
}
var Sy = 365;
function ip(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, c = o.weekStartsOn, l = o.fromDate, u = o.toDate, d = o.locale, f = {
    day: Rt,
    week: uc,
    month: Qt,
    year: Gb,
    startOfWeek: function(g) {
      return o.ISOWeek ? Jn(g) : en(g, { locale: d, weekStartsOn: c });
    },
    endOfWeek: function(g) {
      return o.ISOWeek ? Kf(g) : ol(g, { locale: d, weekStartsOn: c });
    }
  }, m = f[n](e, r === "after" ? 1 : -1);
  r === "before" && l ? m = Zb([l, m]) : r === "after" && u && (m = qb([u, m]));
  var v = !0;
  if (a) {
    var h = ul(m, a);
    v = !h.disabled && !h.hidden;
  }
  return v ? m : i.count > Sy ? i.lastFocused : ip(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: Ee(Ee({}, i), { count: i.count + 1 })
  });
}
var cp = mt(void 0);
function Ny(e) {
  var t = Qo(), n = sp(), r = X(), o = r[0], a = r[1], s = X(), i = s[0], c = s[1], l = Ey(t.displayMonths, n), u = o ?? (i && t.isDateDisplayed(i)) ? i : l, d = function() {
    c(o), a(void 0);
  }, f = function(g) {
    a(g);
  }, m = Ye(), v = function(g, y) {
    if (o) {
      var b = ip(o, {
        moveBy: g,
        direction: y,
        context: m,
        modifiers: n
      });
      Et(o, b) || (t.goToDate(b, o), f(b));
    }
  }, h = {
    focusedDay: o,
    focusTarget: u,
    blur: d,
    focus: f,
    focusDayAfter: function() {
      return v("day", "after");
    },
    focusDayBefore: function() {
      return v("day", "before");
    },
    focusWeekAfter: function() {
      return v("week", "after");
    },
    focusWeekBefore: function() {
      return v("week", "before");
    },
    focusMonthBefore: function() {
      return v("month", "before");
    },
    focusMonthAfter: function() {
      return v("month", "after");
    },
    focusYearBefore: function() {
      return v("year", "before");
    },
    focusYearAfter: function() {
      return v("year", "after");
    },
    focusStartOfWeek: function() {
      return v("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return v("endOfWeek", "after");
    }
  };
  return N.createElement(cp.Provider, { value: h }, e.children);
}
function dl() {
  var e = rt(cp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function Ty(e, t) {
  var n = sp(), r = ul(e, n, t);
  return r;
}
var fl = mt(void 0);
function Py(e) {
  if (!Rs(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return N.createElement(fl.Provider, { value: t }, e.children);
  }
  return N.createElement(ky, { initialProps: e.initialProps, children: e.children });
}
function ky(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var c, l, u;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, s, i), s.selected && !t.required) {
      (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, s, i);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return N.createElement(fl.Provider, { value: o }, n);
}
function lp() {
  var e = rt(fl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function My(e, t) {
  var n = Ye(), r = lp(), o = il(), a = ll(), s = dl(), i = s.focusDayAfter, c = s.focusDayBefore, l = s.focusWeekAfter, u = s.focusWeekBefore, d = s.blur, f = s.focus, m = s.focusMonthBefore, v = s.focusMonthAfter, h = s.focusYearBefore, g = s.focusYearAfter, y = s.focusStartOfWeek, b = s.focusEndOfWeek, $ = function(Y) {
    var Z, D, O, L;
    Rs(n) ? (Z = r.onDayClick) === null || Z === void 0 || Z.call(r, e, t, Y) : Xo(n) ? (D = o.onDayClick) === null || D === void 0 || D.call(o, e, t, Y) : Jo(n) ? (O = a.onDayClick) === null || O === void 0 || O.call(a, e, t, Y) : (L = n.onDayClick) === null || L === void 0 || L.call(n, e, t, Y);
  }, _ = function(Y) {
    var Z;
    f(e), (Z = n.onDayFocus) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, w = function(Y) {
    var Z;
    d(), (Z = n.onDayBlur) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, T = function(Y) {
    var Z;
    (Z = n.onDayMouseEnter) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, k = function(Y) {
    var Z;
    (Z = n.onDayMouseLeave) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, j = function(Y) {
    var Z;
    (Z = n.onDayPointerEnter) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, R = function(Y) {
    var Z;
    (Z = n.onDayPointerLeave) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, ee = function(Y) {
    var Z;
    (Z = n.onDayTouchCancel) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, re = function(Y) {
    var Z;
    (Z = n.onDayTouchEnd) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, U = function(Y) {
    var Z;
    (Z = n.onDayTouchMove) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, B = function(Y) {
    var Z;
    (Z = n.onDayTouchStart) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, W = function(Y) {
    var Z;
    (Z = n.onDayKeyUp) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, G = function(Y) {
    var Z;
    switch (Y.key) {
      case "ArrowLeft":
        Y.preventDefault(), Y.stopPropagation(), n.dir === "rtl" ? i() : c();
        break;
      case "ArrowRight":
        Y.preventDefault(), Y.stopPropagation(), n.dir === "rtl" ? c() : i();
        break;
      case "ArrowDown":
        Y.preventDefault(), Y.stopPropagation(), l();
        break;
      case "ArrowUp":
        Y.preventDefault(), Y.stopPropagation(), u();
        break;
      case "PageUp":
        Y.preventDefault(), Y.stopPropagation(), Y.shiftKey ? h() : m();
        break;
      case "PageDown":
        Y.preventDefault(), Y.stopPropagation(), Y.shiftKey ? g() : v();
        break;
      case "Home":
        Y.preventDefault(), Y.stopPropagation(), y();
        break;
      case "End":
        Y.preventDefault(), Y.stopPropagation(), b();
        break;
    }
    (Z = n.onDayKeyDown) === null || Z === void 0 || Z.call(n, e, t, Y);
  }, J = {
    onClick: $,
    onFocus: _,
    onBlur: w,
    onKeyDown: G,
    onKeyUp: W,
    onMouseEnter: T,
    onMouseLeave: k,
    onPointerEnter: j,
    onPointerLeave: R,
    onTouchCancel: ee,
    onTouchEnd: re,
    onTouchMove: U,
    onTouchStart: B
  };
  return J;
}
function Oy() {
  var e = Ye(), t = lp(), n = il(), r = ll(), o = Rs(e) ? t.selected : Xo(e) ? n.selected : Jo(e) ? r.selected : void 0;
  return o;
}
function Dy(e) {
  return Object.values(Yt).includes(e);
}
function Ry(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (Dy(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function Ay(e, t) {
  var n = Ee({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = Ee(Ee({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function Iy(e, t, n) {
  var r, o, a, s = Ye(), i = dl(), c = Ty(e, t), l = My(e, c), u = Oy(), d = Boolean(s.onDayClick || s.mode !== "default");
  Q(function() {
    var T;
    c.outside || i.focusedDay && d && Et(i.focusedDay, e) && ((T = n.current) === null || T === void 0 || T.focus());
  }, [
    i.focusedDay,
    e,
    n,
    d,
    c.outside
  ]);
  var f = Ry(s, c).join(" "), m = Ay(s, c), v = Boolean(c.outside && !s.showOutsideDays || c.hidden), h = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : ry, g = N.createElement(h, { date: e, displayMonth: t, activeModifiers: c }), y = {
    style: m,
    className: f,
    children: g,
    role: "gridcell"
  }, b = i.focusTarget && Et(i.focusTarget, e) && !c.outside, $ = i.focusedDay && Et(i.focusedDay, e), _ = Ee(Ee(Ee({}, y), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = $ || b ? 0 : -1, r)), l), w = {
    isButton: d,
    isHidden: v,
    activeModifiers: c,
    selectedDays: u,
    buttonProps: _,
    divProps: y
  };
  return w;
}
function jy(e) {
  var t = I(null), n = Iy(e.date, e.displayMonth, t);
  return n.isHidden ? N.createElement("div", { role: "gridcell" }) : n.isButton ? N.createElement(qa, Ee({ name: "day", ref: t }, n.buttonProps)) : N.createElement("div", Ee({}, n.divProps));
}
function Ly(e) {
  var t = e.number, n = e.dates, r = Ye(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, c = r.labels.labelWeekNumber, l = r.formatters.formatWeekNumber, u = l(Number(t), { locale: i });
  if (!o)
    return N.createElement("span", { className: s.weeknumber, style: a.weeknumber }, u);
  var d = c(Number(t), { locale: i }), f = function(m) {
    o(t, n, m);
  };
  return N.createElement(qa, { name: "week-number", "aria-label": d, className: s.weeknumber, style: a.weeknumber, onClick: f }, u);
}
function Fy(e) {
  var t, n, r = Ye(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, c = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : jy, l = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : Ly, u;
  return s && (u = N.createElement(
    "td",
    { className: a.cell, style: o.cell },
    N.createElement(l, { number: e.weekNumber, dates: e.dates })
  )), N.createElement(
    "tr",
    { className: a.row, style: o.row },
    u,
    e.dates.map(function(d) {
      return N.createElement(
        "td",
        { className: a.cell, style: o.cell, key: dx(d), role: "presentation" },
        N.createElement(c, { displayMonth: e.displayMonth, date: d })
      );
    })
  );
}
function td(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Kf(t) : ol(t, n), o = n != null && n.ISOWeek ? Jn(e) : en(e, n), a = mn(r, o), s = [], i = 0; i <= a; i++)
    s.push(Rt(o, i));
  var c = s.reduce(function(l, u) {
    var d = n != null && n.ISOWeek ? lx(u) : vx(u, n), f = l.find(function(m) {
      return m.weekNumber === d;
    });
    return f ? (f.dates.push(u), l) : (l.push({
      weekNumber: d,
      dates: [u]
    }), l);
  }, []);
  return c;
}
function Vy(e, t) {
  var n = td(Nt(e), rl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = gx(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = uc(a, 6 - r), i = td(uc(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function Uy(e) {
  var t, n, r, o = Ye(), a = o.locale, s = o.classNames, i = o.styles, c = o.hideHead, l = o.fixedWeeks, u = o.components, d = o.weekStartsOn, f = o.firstWeekContainsDate, m = o.ISOWeek, v = Vy(e.displayMonth, {
    useFixedWeeks: Boolean(l),
    ISOWeek: m,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), h = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : ny, g = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : Fy, y = (r = u == null ? void 0 : u.Footer) !== null && r !== void 0 ? r : Qx;
  return N.createElement(
    "table",
    { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"] },
    !c && N.createElement(h, null),
    N.createElement("tbody", { className: s.tbody, style: i.tbody, role: "rowgroup" }, v.map(function(b) {
      return N.createElement(g, { displayMonth: e.displayMonth, key: b.weekNumber, dates: b.dates, weekNumber: b.weekNumber });
    })),
    N.createElement(y, { displayMonth: e.displayMonth })
  );
}
function Wy() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var By = Wy() ? C.useLayoutEffect : C.useEffect, _i = !1, zy = 0;
function nd() {
  return "react-day-picker-".concat(++zy);
}
function Hy(e) {
  var t, n = e ?? (_i ? nd() : null), r = C.useState(n), o = r[0], a = r[1];
  return By(function() {
    o === null && a(nd());
  }, []), C.useEffect(function() {
    _i === !1 && (_i = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function Yy(e) {
  var t, n, r = Ye(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, c = Qo().displayMonths, l = Hy(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), u = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = s.month, m = e.displayIndex === 0, v = e.displayIndex === c.length - 1, h = !m && !v;
  o === "rtl" && (t = [m, v], v = t[0], m = t[1]), m && (d.push(a.caption_start), f = Ee(Ee({}, f), s.caption_start)), v && (d.push(a.caption_end), f = Ee(Ee({}, f), s.caption_end)), h && (d.push(a.caption_between), f = Ee(Ee({}, f), s.caption_between));
  var g = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : Jx;
  return N.createElement(
    "div",
    { key: e.displayIndex, className: d.join(" "), style: f },
    N.createElement(g, { id: l, displayMonth: e.displayMonth }),
    N.createElement(Uy, { id: u, "aria-labelledby": l, displayMonth: e.displayMonth })
  );
}
function Ky(e) {
  var t = e.initialProps, n = Ye(), r = dl(), o = Qo(), a = X(!1), s = a[0], i = a[1];
  Q(function() {
    n.initialFocus && r.focusTarget && (s || (r.focus(r.focusTarget), i(!0)));
  }, [
    n.initialFocus,
    s,
    r.focus,
    r.focusTarget,
    r
  ]);
  var c = [n.classNames.root, n.className];
  n.numberOfMonths > 1 && c.push(n.classNames.multiple_months), n.showWeekNumber && c.push(n.classNames.with_weeknumber);
  var l = Ee(Ee({}, n.styles.root), n.style), u = Object.keys(t).filter(function(d) {
    return d.startsWith("data-");
  }).reduce(function(d, f) {
    var m;
    return Ee(Ee({}, d), (m = {}, m[f] = t[f], m));
  }, {});
  return N.createElement(
    "div",
    Ee({ className: c.join(" "), style: l, dir: n.dir, id: n.id }, u),
    N.createElement("div", { className: n.classNames.months, style: n.styles.months }, o.displayMonths.map(function(d, f) {
      return N.createElement(Yy, { key: f, displayIndex: f, displayMonth: d });
    }))
  );
}
function Gy(e) {
  var t = e.children, n = xx(e, ["children"]);
  return N.createElement(
    Lx,
    { initialProps: n },
    N.createElement(
      Gx,
      null,
      N.createElement(
        Py,
        { initialProps: n },
        N.createElement(
          oy,
          { initialProps: n },
          N.createElement(
            iy,
            { initialProps: n },
            N.createElement(
              vy,
              null,
              N.createElement(Ny, null, t)
            )
          )
        )
      )
    )
  );
}
function Zy(e) {
  return N.createElement(
    Gy,
    Ee({}, e),
    N.createElement(Ky, { initialProps: e })
  );
}
function qy({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ p.exports.jsx(
    Zy,
    {
      showOutsideDays: n,
      className: A("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: A(
          bo({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: A(
          bo({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: ({ ...o }) => /* @__PURE__ */ p.exports.jsx(Hf, { className: "h-4 w-4" }),
        IconRight: ({ ...o }) => /* @__PURE__ */ p.exports.jsx(qo, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
qy.displayName = "Calendar";
function Xy(e, t) {
  const n = /* @__PURE__ */ mt(t);
  function r(a) {
    const { children: s, ...i } = a, c = xt(
      () => i,
      Object.values(i)
    );
    return /* @__PURE__ */ x(n.Provider, {
      value: c
    }, s);
  }
  function o(a) {
    const s = rt(n);
    if (s)
      return s;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [
    r,
    o
  ];
}
function Ke(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ mt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: m, ...v } = d, h = (f == null ? void 0 : f[e][c]) || i, g = xt(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ x(h.Provider, {
        value: g
      }, m);
    }
    function u(d, f) {
      const m = (f == null ? void 0 : f[e][c]) || i, v = rt(m);
      if (v)
        return v;
      if (s !== void 0)
        return s;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ mt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return xt(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    Jy(o, ...t)
  ];
}
function Jy(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return {
          ...i,
          ...d
        };
      }, {});
      return xt(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function We(e) {
  const t = I(e);
  return Q(() => {
    t.current = e;
  }), xt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
const ft = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ps : () => {
}, Qy = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ie = Qy.reduce((e, t) => {
  const n = /* @__PURE__ */ M((r, o) => {
    const { asChild: a, ...s } = r, i = a ? Jt : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, E({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Xa(e, t) {
  e && Ms(
    () => e.dispatchEvent(t)
  );
}
const up = "Avatar", [e6, AT] = Ke(up), [t6, dp] = e6(up), n6 = /* @__PURE__ */ M((e, t) => {
  const { __scopeAvatar: n, ...r } = e, [o, a] = X("idle");
  return /* @__PURE__ */ x(t6, {
    scope: n,
    imageLoadingStatus: o,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ x(ie.span, E({}, r, {
    ref: t
  })));
}), r6 = "AvatarImage", o6 = /* @__PURE__ */ M((e, t) => {
  const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
  }, ...a } = e, s = dp(r6, n), i = i6(r), c = We((l) => {
    o(l), s.onImageLoadingStatusChange(l);
  });
  return ft(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ x(ie.img, E({}, a, {
    ref: t,
    src: r
  })) : null;
}), a6 = "AvatarFallback", s6 = /* @__PURE__ */ M((e, t) => {
  const { __scopeAvatar: n, delayMs: r, ...o } = e, a = dp(a6, n), [s, i] = X(r === void 0);
  return Q(() => {
    if (r !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        r
      );
      return () => window.clearTimeout(c);
    }
  }, [
    r
  ]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t
  })) : null;
});
function i6(e) {
  const [t, n] = X("idle");
  return Q(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), a = (s) => () => {
      r && n(s);
    };
    return n("loading"), o.onload = a("loaded"), o.onerror = a("error"), o.src = e, () => {
      r = !1;
    };
  }, [
    e
  ]), t;
}
const fp = n6, pp = o6, mp = s6, Br = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  fp,
  {
    ref: n,
    className: A(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Br.displayName = fp.displayName;
const zr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  pp,
  {
    ref: n,
    className: A("aspect-square h-full w-full", e),
    ...t
  }
));
zr.displayName = pp.displayName;
const Hr = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  mp,
  {
    ref: n,
    className: A(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Hr.displayName = mp.displayName;
const c6 = Wr(
  "inline-flex select-none justify-center items-center border rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: (
          // 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
          "bg-primary border-transparent text-primary-foreground"
        ),
        secondary: "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
        destructive: "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
        outline: "text-foreground",
        red: "bg-red-200 border-2 border-red-600 text-red-600",
        success: "bg-green-100 border-2 border-green-500 text-green-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function po({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ p.exports.jsx("div", { className: A(c6({ variant: t }), e), ...n });
}
function V(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Vn(e) {
  const t = e + "CollectionProvider", [n, r] = Ke(t), [o, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), s = (m) => {
    const { scope: v, children: h } = m, g = N.useRef(null), y = N.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ N.createElement(o, {
      scope: v,
      itemMap: y,
      collectionRef: g
    }, h);
  }, i = e + "CollectionSlot", c = /* @__PURE__ */ N.forwardRef((m, v) => {
    const { scope: h, children: g } = m, y = a(i, h), b = we(v, y.collectionRef);
    return /* @__PURE__ */ N.createElement(Jt, {
      ref: b
    }, g);
  }), l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ N.forwardRef((m, v) => {
    const { scope: h, children: g, ...y } = m, b = N.useRef(null), $ = we(v, b), _ = a(l, h);
    return N.useEffect(() => (_.itemMap.set(b, {
      ref: b,
      ...y
    }), () => void _.itemMap.delete(b))), /* @__PURE__ */ N.createElement(Jt, {
      [u]: "",
      ref: $
    }, g);
  });
  function f(m) {
    const v = a(e + "CollectionConsumer", m);
    return N.useCallback(() => {
      const g = v.collectionRef.current;
      if (!g)
        return [];
      const y = Array.from(g.querySelectorAll(`[${u}]`));
      return Array.from(v.itemMap.values()).sort(
        (_, w) => y.indexOf(_.ref.current) - y.indexOf(w.ref.current)
      );
    }, [
      v.collectionRef,
      v.itemMap
    ]);
  }
  return [
    {
      Provider: s,
      Slot: c,
      ItemSlot: d
    },
    f,
    r
  ];
}
const l6 = /* @__PURE__ */ mt(void 0);
function on(e) {
  const t = rt(l6);
  return e || t || "ltr";
}
function u6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e);
  Q(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const dc = "dismissableLayer.update", d6 = "dismissableLayer.pointerDownOutside", f6 = "dismissableLayer.focusOutside";
let rd;
const p6 = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ir = /* @__PURE__ */ M((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: o, onPointerDownOutside: a, onFocusOutside: s, onInteractOutside: i, onDismiss: c, ...l } = e, u = rt(p6), [d, f] = X(null), m = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = X({}), h = we(
    t,
    (j) => f(j)
  ), g = Array.from(u.layers), [y] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), b = g.indexOf(y), $ = d ? g.indexOf(d) : -1, _ = u.layersWithOutsidePointerEventsDisabled.size > 0, w = $ >= b, T = m6((j) => {
    const R = j.target, ee = [
      ...u.branches
    ].some(
      (re) => re.contains(R)
    );
    !w || ee || (a == null || a(j), i == null || i(j), j.defaultPrevented || c == null || c());
  }, m), k = v6((j) => {
    const R = j.target;
    [
      ...u.branches
    ].some(
      (re) => re.contains(R)
    ) || (s == null || s(j), i == null || i(j), j.defaultPrevented || c == null || c());
  }, m);
  return u6((j) => {
    $ === u.layers.size - 1 && (o == null || o(j), !j.defaultPrevented && c && (j.preventDefault(), c()));
  }, m), Q(() => {
    if (d)
      return r && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (rd = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), od(), () => {
        r && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = rd);
      };
  }, [
    d,
    m,
    r,
    u
  ]), Q(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), od());
  }, [
    d,
    u
  ]), Q(() => {
    const j = () => v({});
    return document.addEventListener(dc, j), () => document.removeEventListener(dc, j);
  }, []), /* @__PURE__ */ x(ie.div, E({}, l, {
    ref: h,
    style: {
      pointerEvents: _ ? w ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: V(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: V(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: V(e.onPointerDownCapture, T.onPointerDownCapture)
  }));
});
function m6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = I(!1), o = I(() => {
  });
  return Q(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          vp(d6, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
          once: !0
        })) : l();
      }
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function v6(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = We(e), r = I(!1);
  return Q(() => {
    const o = (a) => {
      a.target && !r.current && vp(f6, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function od() {
  const e = new CustomEvent(dc);
  document.dispatchEvent(e);
}
function vp(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Xa(o, a) : o.dispatchEvent(a);
}
let Ci = 0;
function As() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : ad()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : ad()), Ci++, () => {
      Ci === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Ci--;
    };
  }, []);
}
function ad() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Ei = "focusScope.autoFocusOnMount", Si = "focusScope.autoFocusOnUnmount", sd = {
  bubbles: !1,
  cancelable: !0
}, Is = /* @__PURE__ */ M((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = X(null), l = We(o), u = We(a), d = I(null), f = we(
    t,
    (h) => c(h)
  ), m = I({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  Q(() => {
    if (r) {
      let h = function($) {
        if (m.paused || !i)
          return;
        const _ = $.target;
        i.contains(_) ? d.current = _ : Nn(d.current, {
          select: !0
        });
      }, g = function($) {
        if (m.paused || !i)
          return;
        const _ = $.relatedTarget;
        _ !== null && (i.contains(_) || Nn(d.current, {
          select: !0
        }));
      }, y = function($) {
        const _ = document.activeElement;
        for (const w of $)
          w.removedNodes.length > 0 && (i != null && i.contains(_) || Nn(i));
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", g);
      const b = new MutationObserver(y);
      return i && b.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), b.disconnect();
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), Q(() => {
    if (i) {
      cd.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(Ei, sd);
        i.addEventListener(Ei, l), i.dispatchEvent(y), y.defaultPrevented || (h6($6(hp(i)), {
          select: !0
        }), document.activeElement === h && Nn(i));
      }
      return () => {
        i.removeEventListener(Ei, l), setTimeout(() => {
          const y = new CustomEvent(Si, sd);
          i.addEventListener(Si, u), i.dispatchEvent(y), y.defaultPrevented || Nn(h ?? document.body, {
            select: !0
          }), i.removeEventListener(Si, u), cd.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const v = pe((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
    if (g && y) {
      const b = h.currentTarget, [$, _] = g6(b);
      $ && _ ? !h.shiftKey && y === _ ? (h.preventDefault(), n && Nn($, {
        select: !0
      })) : h.shiftKey && y === $ && (h.preventDefault(), n && Nn(_, {
        select: !0
      })) : y === b && h.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(ie.div, E({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: v
  }));
});
function h6(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Nn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function g6(e) {
  const t = hp(e), n = id(t, e), r = id(t.reverse(), e);
  return [
    n,
    r
  ];
}
function hp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function id(e, t) {
  for (const n of e)
    if (!b6(n, {
      upTo: t
    }))
      return n;
}
function b6(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function x6(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Nn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && x6(e) && t && e.select();
  }
}
const cd = y6();
function y6() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ld(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ld(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function ld(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function $6(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const w6 = C["useId".toString()] || (() => {
});
let _6 = 0;
function tt(e) {
  const [t, n] = C.useState(w6());
  return ft(() => {
    e || n(
      (r) => r ?? String(_6++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const C6 = ["top", "right", "bottom", "left"], Dn = Math.min, Pt = Math.max, Ja = Math.round, Na = Math.floor, Rn = (e) => ({
  x: e,
  y: e
}), E6 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, S6 = {
  start: "end",
  end: "start"
};
function fc(e, t, n) {
  return Pt(e, Dn(t, n));
}
function gn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bn(e) {
  return e.split("-")[0];
}
function Yr(e) {
  return e.split("-")[1];
}
function pl(e) {
  return e === "x" ? "y" : "x";
}
function ml(e) {
  return e === "y" ? "height" : "width";
}
function Kr(e) {
  return ["top", "bottom"].includes(bn(e)) ? "y" : "x";
}
function vl(e) {
  return pl(Kr(e));
}
function N6(e, t, n) {
  n === void 0 && (n = !1);
  const r = Yr(e), o = vl(e), a = ml(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Qa(s)), [s, Qa(s)];
}
function T6(e) {
  const t = Qa(e);
  return [pc(e), t, pc(t)];
}
function pc(e) {
  return e.replace(/start|end/g, (t) => S6[t]);
}
function P6(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function k6(e, t, n, r) {
  const o = Yr(e);
  let a = P6(bn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(pc)))), a;
}
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, (t) => E6[t]);
}
function M6(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function gp(e) {
  return typeof e != "number" ? M6(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function es(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function ud(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Kr(t), s = vl(t), i = ml(s), c = bn(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[i] / 2 - o[i] / 2;
  let m;
  switch (c) {
    case "top":
      m = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Yr(t)) {
    case "start":
      m[s] -= f * (n && l ? -1 : 1);
      break;
    case "end":
      m[s] += f * (n && l ? -1 : 1);
      break;
  }
  return m;
}
const O6 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = ud(l, r, c), f = r, m = {}, v = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: g,
      fn: y
    } = i[h], {
      x: b,
      y: $,
      data: _,
      reset: w
    } = await y({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: m,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    if (u = b ?? u, d = $ ?? d, m = {
      ...m,
      [g]: {
        ...m[g],
        ..._
      }
    }, w && v <= 50) {
      v++, typeof w == "object" && (w.placement && (f = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
      }) : w.rects), {
        x: u,
        y: d
      } = ud(l, f, c)), h = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: m
  };
};
async function wo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = gn(t, e), v = gp(m), g = i[f ? d === "floating" ? "reference" : "floating" : d], y = es(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), b = d === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), _ = await (a.isElement == null ? void 0 : a.isElement($)) ? await (a.getScale == null ? void 0 : a.getScale($)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = es(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: $,
    strategy: c
  }) : b);
  return {
    top: (y.top - w.top + v.top) / _.y,
    bottom: (w.bottom - y.bottom + v.bottom) / _.y,
    left: (y.left - w.left + v.left) / _.x,
    right: (w.right - y.right + v.right) / _.x
  };
}
const dd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i
    } = t, {
      element: c,
      padding: l = 0
    } = gn(e, t) || {};
    if (c == null)
      return {};
    const u = gp(l), d = {
      x: n,
      y: r
    }, f = vl(o), m = ml(f), v = await s.getDimensions(c), h = f === "y", g = h ? "top" : "left", y = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", $ = a.reference[m] + a.reference[f] - d[f] - a.floating[m], _ = d[f] - a.reference[f], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let T = w ? w[b] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(w))) && (T = i.floating[b] || a.floating[m]);
    const k = $ / 2 - _ / 2, j = T / 2 - v[m] / 2 - 1, R = Dn(u[g], j), ee = Dn(u[y], j), re = R, U = T - v[m] - ee, B = T / 2 - v[m] / 2 + k, W = fc(re, B, U), J = Yr(o) != null && B != W && a.reference[m] / 2 - (B < re ? R : ee) - v[m] / 2 < 0 ? B < re ? re - B : U - B : 0;
    return {
      [f]: d[f] - J,
      data: {
        [f]: W,
        centerOffset: B - W + J
      }
    };
  }
}), D6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n;
      const {
        placement: r,
        middlewareData: o,
        rects: a,
        initialPlacement: s,
        platform: i,
        elements: c
      } = t, {
        mainAxis: l = !0,
        crossAxis: u = !0,
        fallbackPlacements: d,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: v = !0,
        ...h
      } = gn(e, t), g = bn(r), y = bn(s) === s, b = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), $ = d || (y || !v ? [Qa(s)] : T6(s));
      !d && m !== "none" && $.push(...k6(s, v, m, b));
      const _ = [s, ...$], w = await wo(t, h), T = [];
      let k = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (l && T.push(w[g]), u) {
        const re = N6(r, a, b);
        T.push(w[re[0]], w[re[1]]);
      }
      if (k = [...k, {
        placement: r,
        overflows: T
      }], !T.every((re) => re <= 0)) {
        var j, R;
        const re = (((j = o.flip) == null ? void 0 : j.index) || 0) + 1, U = _[re];
        if (U)
          return {
            data: {
              index: re,
              overflows: k
            },
            reset: {
              placement: U
            }
          };
        let B = (R = k.filter((W) => W.overflows[0] <= 0).sort((W, G) => W.overflows[1] - G.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!B)
          switch (f) {
            case "bestFit": {
              var ee;
              const W = (ee = k.map((G) => [G.placement, G.overflows.filter((J) => J > 0).reduce((J, Y) => J + Y, 0)]).sort((G, J) => G[1] - J[1])[0]) == null ? void 0 : ee[0];
              W && (B = W);
              break;
            }
            case "initialPlacement":
              B = s;
              break;
          }
        if (r !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function fd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function pd(e) {
  return C6.some((t) => e[t] >= 0);
}
const R6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = gn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await wo(t, {
            ...o,
            elementContext: "reference"
          }), s = fd(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: pd(s)
            }
          };
        }
        case "escaped": {
          const a = await wo(t, {
            ...o,
            altBoundary: !0
          }), s = fd(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: pd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function A6(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = bn(n), i = Yr(n), c = Kr(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = gn(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), c ? {
    x: m * u,
    y: f * l
  } : {
    x: f * l,
    y: m * u
  };
}
const I6 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r
      } = t, o = await A6(t, e);
      return {
        x: n + o.x,
        y: r + o.y,
        data: o
      };
    }
  };
}, j6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (g) => {
            let {
              x: y,
              y: b
            } = g;
            return {
              x: y,
              y: b
            };
          }
        },
        ...c
      } = gn(e, t), l = {
        x: n,
        y: r
      }, u = await wo(t, c), d = Kr(bn(o)), f = pl(d);
      let m = l[f], v = l[d];
      if (a) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = m + u[g], $ = m - u[y];
        m = fc(b, m, $);
      }
      if (s) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", b = v + u[g], $ = v - u[y];
        v = fc(b, v, $);
      }
      const h = i.fn({
        ...t,
        [f]: m,
        [d]: v
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r
        }
      };
    }
  };
}, L6 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = gn(e, t), u = {
        x: n,
        y: r
      }, d = Kr(o), f = pl(d);
      let m = u[f], v = u[d];
      const h = gn(i, t), g = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const $ = f === "y" ? "height" : "width", _ = a.reference[f] - a.floating[$] + g.mainAxis, w = a.reference[f] + a.reference[$] - g.mainAxis;
        m < _ ? m = _ : m > w && (m = w);
      }
      if (l) {
        var y, b;
        const $ = f === "y" ? "width" : "height", _ = ["top", "left"].includes(bn(o)), w = a.reference[d] - a.floating[$] + (_ && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (_ ? 0 : g.crossAxis), T = a.reference[d] + a.reference[$] + (_ ? 0 : ((b = s.offset) == null ? void 0 : b[d]) || 0) - (_ ? g.crossAxis : 0);
        v < w ? v = w : v > T && (v = T);
      }
      return {
        [f]: m,
        [d]: v
      };
    }
  };
}, F6 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: s = () => {
        },
        ...i
      } = gn(e, t), c = await wo(t, i), l = bn(n), u = Yr(n), d = Kr(n) === "y", {
        width: f,
        height: m
      } = r.floating;
      let v, h;
      l === "top" || l === "bottom" ? (v = l, h = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, v = u === "end" ? "top" : "bottom");
      const g = m - c[v], y = f - c[h], b = !t.middlewareData.shift;
      let $ = g, _ = y;
      if (d) {
        const T = f - c.left - c.right;
        _ = u || b ? Dn(y, T) : T;
      } else {
        const T = m - c.top - c.bottom;
        $ = u || b ? Dn(g, T) : T;
      }
      if (b && !u) {
        const T = Pt(c.left, 0), k = Pt(c.right, 0), j = Pt(c.top, 0), R = Pt(c.bottom, 0);
        d ? _ = f - 2 * (T !== 0 || k !== 0 ? T + k : Pt(c.left, c.right)) : $ = m - 2 * (j !== 0 || R !== 0 ? j + R : Pt(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: _,
        availableHeight: $
      });
      const w = await o.getDimensions(a.floating);
      return f !== w.width || m !== w.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function An(e) {
  return bp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function kt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $n(e) {
  var t;
  return (t = (bp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function bp(e) {
  return e instanceof Node || e instanceof kt(e).Node;
}
function xn(e) {
  return e instanceof Element || e instanceof kt(e).Element;
}
function tn(e) {
  return e instanceof HTMLElement || e instanceof kt(e).HTMLElement;
}
function md(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof kt(e).ShadowRoot;
}
function ea(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function V6(e) {
  return ["table", "td", "th"].includes(An(e));
}
function hl(e) {
  const t = gl(), n = At(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function U6(e) {
  let t = Pr(e);
  for (; tn(t) && !js(t); ) {
    if (hl(t))
      return t;
    t = Pr(t);
  }
  return null;
}
function gl() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function js(e) {
  return ["html", "body", "#document"].includes(An(e));
}
function At(e) {
  return kt(e).getComputedStyle(e);
}
function Ls(e) {
  return xn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function Pr(e) {
  if (An(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    md(e) && e.host || // Fallback.
    $n(e)
  );
  return md(t) ? t.host : t;
}
function xp(e) {
  const t = Pr(e);
  return js(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : tn(t) && ea(t) ? t : xp(t);
}
function ts(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = xp(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = kt(r);
  return o ? t.concat(a, a.visualViewport || [], ea(r) ? r : []) : t.concat(r, ts(r));
}
function yp(e) {
  const t = At(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = tn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Ja(n) !== a || Ja(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function bl(e) {
  return xn(e) ? e : e.contextElement;
}
function _r(e) {
  const t = bl(e);
  if (!tn(t))
    return Rn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = yp(t);
  let s = (a ? Ja(n.width) : n.width) / r, i = (a ? Ja(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const W6 = /* @__PURE__ */ Rn(0);
function $p(e) {
  const t = kt(e);
  return !gl() || !t.visualViewport ? W6 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function B6(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== kt(e) ? !1 : t;
}
function Qn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = bl(e);
  let s = Rn(1);
  t && (r ? xn(r) && (s = _r(r)) : s = _r(e));
  const i = B6(a, n, r) ? $p(a) : Rn(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const f = kt(a), m = r && xn(r) ? kt(r) : r;
    let v = f.frameElement;
    for (; v && r && m !== f; ) {
      const h = _r(v), g = v.getBoundingClientRect(), y = At(v), b = g.left + (v.clientLeft + parseFloat(y.paddingLeft)) * h.x, $ = g.top + (v.clientTop + parseFloat(y.paddingTop)) * h.y;
      c *= h.x, l *= h.y, u *= h.x, d *= h.y, c += b, l += $, v = kt(v).frameElement;
    }
  }
  return es({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function z6(e) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e;
  const o = tn(n), a = $n(n);
  if (n === a)
    return t;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = Rn(1);
  const c = Rn(0);
  if ((o || !o && r !== "fixed") && ((An(n) !== "body" || ea(a)) && (s = Ls(n)), tn(n))) {
    const l = Qn(n);
    i = _r(n), c.x = l.x + n.clientLeft, c.y = l.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - s.scrollLeft * i.x + c.x,
    y: t.y * i.y - s.scrollTop * i.y + c.y
  };
}
function H6(e) {
  return Array.from(e.getClientRects());
}
function wp(e) {
  return Qn($n(e)).left + Ls(e).scrollLeft;
}
function Y6(e) {
  const t = $n(e), n = Ls(e), r = e.ownerDocument.body, o = Pt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + wp(e);
  const i = -n.scrollTop;
  return At(r).direction === "rtl" && (s += Pt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function K6(e, t) {
  const n = kt(e), r = $n(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = gl();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function G6(e, t) {
  const n = Qn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = tn(e) ? _r(e) : Rn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function vd(e, t, n) {
  let r;
  if (t === "viewport")
    r = K6(e, n);
  else if (t === "document")
    r = Y6($n(e));
  else if (xn(t))
    r = G6(t, n);
  else {
    const o = $p(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return es(r);
}
function _p(e, t) {
  const n = Pr(e);
  return n === t || !xn(n) || js(n) ? !1 : At(n).position === "fixed" || _p(n, t);
}
function Z6(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = ts(e).filter((i) => xn(i) && An(i) !== "body"), o = null;
  const a = At(e).position === "fixed";
  let s = a ? Pr(e) : e;
  for (; xn(s) && !js(s); ) {
    const i = At(s), c = hl(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ea(s) && !c && _p(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Pr(s);
  }
  return t.set(e, r), r;
}
function q6(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Z6(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = vd(t, u, o);
    return l.top = Pt(d.top, l.top), l.right = Dn(d.right, l.right), l.bottom = Dn(d.bottom, l.bottom), l.left = Pt(d.left, l.left), l;
  }, vd(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function X6(e) {
  return yp(e);
}
function J6(e, t, n) {
  const r = tn(t), o = $n(t), a = n === "fixed", s = Qn(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Rn(0);
  if (r || !r && !a)
    if ((An(t) !== "body" || ea(o)) && (i = Ls(t)), r) {
      const l = Qn(t, !0, a, t);
      c.x = l.x + t.clientLeft, c.y = l.y + t.clientTop;
    } else
      o && (c.x = wp(o));
  return {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function hd(e, t) {
  return !tn(e) || At(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Cp(e, t) {
  const n = kt(e);
  if (!tn(e))
    return n;
  let r = hd(e, t);
  for (; r && V6(r) && At(r).position === "static"; )
    r = hd(r, t);
  return r && (An(r) === "html" || An(r) === "body" && At(r).position === "static" && !hl(r)) ? n : r || U6(e) || n;
}
const Q6 = async function(e) {
  let {
    reference: t,
    floating: n,
    strategy: r
  } = e;
  const o = this.getOffsetParent || Cp, a = this.getDimensions;
  return {
    reference: J6(t, await o(n), r),
    floating: {
      x: 0,
      y: 0,
      ...await a(n)
    }
  };
};
function e2(e) {
  return At(e).direction === "rtl";
}
const t2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: z6,
  getDocumentElement: $n,
  getClippingRect: q6,
  getOffsetParent: Cp,
  getElementRects: Q6,
  getClientRects: H6,
  getDimensions: X6,
  getScale: _r,
  isElement: xn,
  isRTL: e2
};
function n2(e, t) {
  let n = null, r;
  const o = $n(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const {
      left: l,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (i || t(), !d || !f)
      return;
    const m = Na(u), v = Na(o.clientWidth - (l + d)), h = Na(o.clientHeight - (u + f)), g = Na(l), b = {
      rootMargin: -m + "px " + -v + "px " + -h + "px " + -g + "px",
      threshold: Pt(0, Dn(1, c)) || 1
    };
    let $ = !0;
    function _(w) {
      const T = w[0].intersectionRatio;
      if (T !== c) {
        if (!$)
          return s();
        T ? s(!1, T) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      $ = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, b);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function r2(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = bl(e), u = o || a ? [...l ? ts(l) : [], ...ts(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  const d = l && i ? n2(l, n) : null;
  let f = -1, m = null;
  s && (m = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === l && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      m && m.observe(t);
    })), n();
  }), l && !c && m.observe(l), m.observe(t));
  let v, h = c ? Qn(e) : null;
  c && g();
  function g() {
    const y = Qn(e);
    h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && n(), h = y, v = requestAnimationFrame(g);
  }
  return n(), () => {
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), d && d(), m && m.disconnect(), m = null, c && cancelAnimationFrame(v);
  };
}
const o2 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: t2,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return O6(e, t, {
    ...o,
    platform: a
  });
}, a2 = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? dd({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? dd({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
};
var Wa = typeof document < "u" ? Ps : Q;
function ns(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!ns(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !ns(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ep(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function gd(e, t) {
  const n = Ep(e);
  return Math.round(t * n) / n;
}
function bd(e) {
  const t = C.useRef(e);
  return Wa(() => {
    t.current = e;
  }), t;
}
function s2(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = C.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, m] = C.useState(r);
  ns(f, r) || m(r);
  const [v, h] = C.useState(null), [g, y] = C.useState(null), b = C.useCallback((J) => {
    J != T.current && (T.current = J, h(J));
  }, [h]), $ = C.useCallback((J) => {
    J !== k.current && (k.current = J, y(J));
  }, [y]), _ = a || v, w = s || g, T = C.useRef(null), k = C.useRef(null), j = C.useRef(u), R = bd(c), ee = bd(o), re = C.useCallback(() => {
    if (!T.current || !k.current)
      return;
    const J = {
      placement: t,
      strategy: n,
      middleware: f
    };
    ee.current && (J.platform = ee.current), o2(T.current, k.current, J).then((Y) => {
      const Z = {
        ...Y,
        isPositioned: !0
      };
      U.current && !ns(j.current, Z) && (j.current = Z, Gg.flushSync(() => {
        d(Z);
      }));
    });
  }, [f, t, n, ee]);
  Wa(() => {
    l === !1 && j.current.isPositioned && (j.current.isPositioned = !1, d((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [l]);
  const U = C.useRef(!1);
  Wa(() => (U.current = !0, () => {
    U.current = !1;
  }), []), Wa(() => {
    if (_ && (T.current = _), w && (k.current = w), _ && w) {
      if (R.current)
        return R.current(_, w, re);
      re();
    }
  }, [_, w, re, R]);
  const B = C.useMemo(() => ({
    reference: T,
    floating: k,
    setReference: b,
    setFloating: $
  }), [b, $]), W = C.useMemo(() => ({
    reference: _,
    floating: w
  }), [_, w]), G = C.useMemo(() => {
    const J = {
      position: n,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return J;
    const Y = gd(W.floating, u.x), Z = gd(W.floating, u.y);
    return i ? {
      ...J,
      transform: "translate(" + Y + "px, " + Z + "px)",
      ...Ep(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Y,
      top: Z
    };
  }, [n, i, W.floating, u.x, u.y]);
  return C.useMemo(() => ({
    ...u,
    update: re,
    refs: B,
    elements: W,
    floatingStyles: G
  }), [u, re, B, W, G]);
}
function ta(e) {
  const [t, n] = X(void 0);
  return ft(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, i = l.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({
          width: s,
          height: i
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const Sp = "Popper", [Np, an] = Ke(Sp), [i2, Tp] = Np(Sp), c2 = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = X(null);
  return /* @__PURE__ */ x(i2, {
    scope: t,
    anchor: r,
    onAnchorChange: o
  }, n);
}, l2 = "PopperAnchor", u2 = /* @__PURE__ */ M((e, t) => {
  const { __scopePopper: n, virtualRef: r, ...o } = e, a = Tp(l2, n), s = I(null), i = we(t, s);
  return Q(() => {
    a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : /* @__PURE__ */ x(ie.div, E({}, o, {
    ref: i
  }));
}), Pp = "PopperContent", [d2, IT] = Np(Pp), f2 = /* @__PURE__ */ M((e, t) => {
  var n, r, o, a, s, i, c, l;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: m = "center", alignOffset: v = 0, arrowPadding: h = 0, collisionBoundary: g = [], collisionPadding: y = 0, sticky: b = "partial", hideWhenDetached: $ = !1, avoidCollisions: _ = !0, onPlaced: w, ...T } = e, k = Tp(Pp, u), [j, R] = X(null), ee = we(
    t,
    (Ve) => R(Ve)
  ), [re, U] = X(null), B = ta(re), W = (n = B == null ? void 0 : B.width) !== null && n !== void 0 ? n : 0, G = (r = B == null ? void 0 : B.height) !== null && r !== void 0 ? r : 0, J = d + (m !== "center" ? "-" + m : ""), Y = typeof y == "number" ? y : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...y
  }, Z = Array.isArray(g) ? g : [
    g
  ], D = Z.length > 0, O = {
    padding: Y,
    boundary: Z.filter(p2),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: D
  }, { refs: L, floatingStyles: z, placement: oe, isPositioned: ce, middlewareData: ye } = s2({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: J,
    whileElementsMounted: r2,
    elements: {
      reference: k.anchor
    },
    middleware: [
      I6({
        mainAxis: f + G,
        alignmentAxis: v
      }),
      _ && j6({
        mainAxis: !0,
        crossAxis: !1,
        limiter: b === "partial" ? L6() : void 0,
        ...O
      }),
      _ && D6({
        ...O
      }),
      F6({
        ...O,
        apply: ({ elements: Ve, rects: lt, availableWidth: P, availableHeight: F }) => {
          const { width: H, height: xe } = lt.reference, ue = Ve.floating.style;
          ue.setProperty("--radix-popper-available-width", `${P}px`), ue.setProperty("--radix-popper-available-height", `${F}px`), ue.setProperty("--radix-popper-anchor-width", `${H}px`), ue.setProperty("--radix-popper-anchor-height", `${xe}px`);
        }
      }),
      re && a2({
        element: re,
        padding: h
      }),
      m2({
        arrowWidth: W,
        arrowHeight: G
      }),
      $ && R6({
        strategy: "referenceHidden"
      })
    ]
  }), [be, te] = kp(oe), le = We(w);
  ft(() => {
    ce && (le == null || le());
  }, [
    ce,
    le
  ]);
  const ve = (o = ye.arrow) === null || o === void 0 ? void 0 : o.x, q = (a = ye.arrow) === null || a === void 0 ? void 0 : a.y, he = ((s = ye.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [K, Re] = X();
  return ft(() => {
    j && Re(window.getComputedStyle(j).zIndex);
  }, [
    j
  ]), /* @__PURE__ */ x("div", {
    ref: L.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...z,
      transform: ce ? z.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: K,
      ["--radix-popper-transform-origin"]: [
        (i = ye.transformOrigin) === null || i === void 0 ? void 0 : i.x,
        (c = ye.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ x(d2, {
    scope: u,
    placedSide: be,
    onArrowChange: U,
    arrowX: ve,
    arrowY: q,
    shouldHideArrow: he
  }, /* @__PURE__ */ x(ie.div, E({
    "data-side": be,
    "data-align": te
  }, T, {
    ref: ee,
    style: {
      ...T.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: ce ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = ye.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function p2(e) {
  return e !== null;
}
const m2 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, a, s;
    const { placement: i, rects: c, middlewareData: l } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, m = d ? 0 : e.arrowHeight, [v, h] = kp(i), g = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[h], y = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + f / 2, b = ((a = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && a !== void 0 ? a : 0) + m / 2;
    let $ = "", _ = "";
    return v === "bottom" ? ($ = d ? g : `${y}px`, _ = `${-m}px`) : v === "top" ? ($ = d ? g : `${y}px`, _ = `${c.floating.height + m}px`) : v === "right" ? ($ = `${-m}px`, _ = d ? g : `${b}px`) : v === "left" && ($ = `${c.floating.width + m}px`, _ = d ? g : `${b}px`), {
      data: {
        x: $,
        y: _
      }
    };
  }
});
function kp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Gr = c2, na = u2, ra = f2, Fs = /* @__PURE__ */ M((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Xc.createPortal(/* @__PURE__ */ x(ie.div, E({}, o, {
    ref: t
  })), r) : null;
});
function v2(e, t) {
  return ks((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Ze = (e) => {
  const { present: t, children: n } = e, r = h2(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = we(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Ur(o, {
    ref: a
  }) : null;
};
Ze.displayName = "Presence";
function h2(e) {
  const [t, n] = X(), r = I({}), o = I(e), a = I("none"), s = e ? "mounted" : "unmounted", [i, c] = v2(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Q(() => {
    const l = Ta(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), ft(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, m = Ta(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), ft(() => {
    if (t) {
      const l = (d) => {
        const m = Ta(r.current).includes(d.animationName);
        d.target === t && m && Ms(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Ta(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: pe((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ta(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Qe({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = g2({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = We(n), c = pe((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && i(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function g2({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = I(r), a = We(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const Ni = "rovingFocusGroup.onEntryFocus", b2 = {
  bubbles: !1,
  cancelable: !0
}, xl = "RovingFocusGroup", [mc, Mp, x2] = Vn(xl), [y2, Un] = Ke(xl, [
  x2
]), [$2, w2] = y2(xl), _2 = /* @__PURE__ */ M((e, t) => /* @__PURE__ */ x(mc.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(mc.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(C2, E({}, e, {
  ref: t
}))))), C2 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: a, currentTabStopId: s, defaultCurrentTabStopId: i, onCurrentTabStopIdChange: c, onEntryFocus: l, ...u } = e, d = I(null), f = we(t, d), m = on(a), [v = null, h] = Qe({
    prop: s,
    defaultProp: i,
    onChange: c
  }), [g, y] = X(!1), b = We(l), $ = Mp(n), _ = I(!1), [w, T] = X(0);
  return Q(() => {
    const k = d.current;
    if (k)
      return k.addEventListener(Ni, b), () => k.removeEventListener(Ni, b);
  }, [
    b
  ]), /* @__PURE__ */ x($2, {
    scope: n,
    orientation: r,
    dir: m,
    loop: o,
    currentTabStopId: v,
    onItemFocus: pe(
      (k) => h(k),
      [
        h
      ]
    ),
    onItemShiftTab: pe(
      () => y(!0),
      []
    ),
    onFocusableItemAdd: pe(
      () => T(
        (k) => k + 1
      ),
      []
    ),
    onFocusableItemRemove: pe(
      () => T(
        (k) => k - 1
      ),
      []
    )
  }, /* @__PURE__ */ x(ie.div, E({
    tabIndex: g || w === 0 ? -1 : 0,
    "data-orientation": r
  }, u, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: V(e.onMouseDown, () => {
      _.current = !0;
    }),
    onFocus: V(e.onFocus, (k) => {
      const j = !_.current;
      if (k.target === k.currentTarget && j && !g) {
        const R = new CustomEvent(Ni, b2);
        if (k.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
          const ee = $().filter(
            (G) => G.focusable
          ), re = ee.find(
            (G) => G.active
          ), U = ee.find(
            (G) => G.id === v
          ), W = [
            re,
            U,
            ...ee
          ].filter(Boolean).map(
            (G) => G.ref.current
          );
          Op(W);
        }
      }
      _.current = !1;
    }),
    onBlur: V(
      e.onBlur,
      () => y(!1)
    )
  })));
}), E2 = "RovingFocusGroupItem", S2 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, ...s } = e, i = tt(), c = a || i, l = w2(E2, n), u = l.currentTabStopId === c, d = Mp(n), { onFocusableItemAdd: f, onFocusableItemRemove: m } = l;
  return Q(() => {
    if (r)
      return f(), () => m();
  }, [
    r,
    f,
    m
  ]), /* @__PURE__ */ x(mc.ItemSlot, {
    scope: n,
    id: c,
    focusable: r,
    active: o
  }, /* @__PURE__ */ x(ie.span, E({
    tabIndex: u ? 0 : -1,
    "data-orientation": l.orientation
  }, s, {
    ref: t,
    onMouseDown: V(e.onMouseDown, (v) => {
      r ? l.onItemFocus(c) : v.preventDefault();
    }),
    onFocus: V(
      e.onFocus,
      () => l.onItemFocus(c)
    ),
    onKeyDown: V(e.onKeyDown, (v) => {
      if (v.key === "Tab" && v.shiftKey) {
        l.onItemShiftTab();
        return;
      }
      if (v.target !== v.currentTarget)
        return;
      const h = P2(v, l.orientation, l.dir);
      if (h !== void 0) {
        v.preventDefault();
        let y = d().filter(
          (b) => b.focusable
        ).map(
          (b) => b.ref.current
        );
        if (h === "last")
          y.reverse();
        else if (h === "prev" || h === "next") {
          h === "prev" && y.reverse();
          const b = y.indexOf(v.currentTarget);
          y = l.loop ? k2(y, b + 1) : y.slice(b + 1);
        }
        setTimeout(
          () => Op(y)
        );
      }
    })
  })));
}), N2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function T2(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function P2(e, t, n) {
  const r = T2(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(r)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(r)))
    return N2[r];
}
function Op(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function k2(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Vs = _2, Us = S2;
var M2 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mr = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), ka = {}, Ti = 0, Dp = function(e) {
  return e && (e.host || Dp(e.parentNode));
}, O2 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Dp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return Boolean(n);
  });
}, D2 = function(e, t, n, r) {
  var o = O2(t, Array.isArray(e) ? e : [e]);
  ka[n] || (ka[n] = /* @__PURE__ */ new WeakMap());
  var a = ka[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (i.has(f))
        u(f);
      else {
        var m = f.getAttribute(r), v = m !== null && m !== "false", h = (mr.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        mr.set(f, h), a.set(f, g), s.push(f), h === 1 && v && Pa.set(f, !0), g === 1 && f.setAttribute(n, "true"), v || f.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), Ti++, function() {
    s.forEach(function(d) {
      var f = mr.get(d) - 1, m = a.get(d) - 1;
      mr.set(d, f), a.set(d, m), f || (Pa.has(d) || d.removeAttribute(r), Pa.delete(d)), m || d.removeAttribute(n);
    }), Ti--, Ti || (mr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), ka = {});
  };
}, oa = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || M2(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), D2(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, pt = function() {
  return pt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, pt.apply(this, arguments);
};
function yl(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Rp(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var mo = "right-scroll-bar-position", vo = "width-before-scroll-bar", R2 = "with-scroll-bars-hidden", A2 = "--removed-body-scroll-bar-size";
function I2(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function j2(e, t) {
  var n = X(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function Ap(e, t) {
  return j2(t || null, function(n) {
    return e.forEach(function(r) {
      return I2(r, n);
    });
  });
}
function L2(e) {
  return e;
}
function F2(e, t) {
  t === void 0 && (t = L2);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function Ip(e) {
  e === void 0 && (e = {});
  var t = F2(null);
  return t.options = pt({ async: !0, ssr: !1 }, e), t;
}
var jp = function(e) {
  var t = e.sideCar, n = yl(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return C.createElement(r, pt({}, n));
};
jp.isSideCarExport = !0;
function Lp(e, t) {
  return e.useMedium(t), jp;
}
var Fp = Ip(), Pi = function() {
}, Ws = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Pi,
    onWheelCapture: Pi,
    onTouchMoveCapture: Pi
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, b = yl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = f, _ = Ap([n, t]), w = pt(pt({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Fp, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(y, pt({}, w, { className: c, ref: _ }), i)
  );
});
Ws.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ws.classNames = {
  fullWidth: vo,
  zeroRight: mo
};
var xd, V2 = function() {
  if (xd)
    return xd;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function U2() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = V2();
  return t && e.setAttribute("nonce", t), e;
}
function W2(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function B2(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var z2 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = U2()) && (W2(t, n), B2(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, H2 = function() {
  var e = z2();
  return function(t, n) {
    C.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $l = function() {
  var e = H2(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Y2 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ki = function(e) {
  return parseInt(e || "", 10) || 0;
}, K2 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ki(n), ki(r), ki(o)];
}, G2 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Y2;
  var t = K2(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Z2 = $l(), q2 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(R2, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(mo, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(vo, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(mo, " .").concat(mo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(vo, " .").concat(vo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(A2, ": ").concat(i, `px;
  }
`);
}, Vp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = C.useMemo(function() {
    return G2(o);
  }, [o]);
  return C.createElement(Z2, { styles: q2(a, !t, o, n ? "" : "!important") });
}, vc = !1;
if (typeof window < "u")
  try {
    var Ma = Object.defineProperty({}, "passive", {
      get: function() {
        return vc = !0, !0;
      }
    });
    window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
  } catch {
    vc = !1;
  }
var vr = vc ? { passive: !1 } : !1, X2 = function(e) {
  return e.tagName === "TEXTAREA";
}, Up = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !X2(e) && n[t] === "visible")
  );
}, J2 = function(e) {
  return Up(e, "overflowY");
}, Q2 = function(e) {
  return Up(e, "overflowX");
}, yd = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Wp(e, n);
    if (r) {
      var o = Bp(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, e$ = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, t$ = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Wp = function(e, t) {
  return e === "v" ? J2(t) : Q2(t);
}, Bp = function(e, t) {
  return e === "v" ? e$(t) : t$(t);
}, n$ = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, r$ = function(e, t, n, r, o) {
  var a = n$(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var m = Bp(e, i), v = m[0], h = m[1], g = m[2], y = h - g - a * v;
    (v || y) && Wp(e, i) && (d += y, f += v), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, Oa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $d = function(e) {
  return [e.deltaX, e.deltaY];
}, wd = function(e) {
  return e && "current" in e ? e.current : e;
}, o$ = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, a$ = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, s$ = 0, hr = [];
function i$(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(s$++)[0], a = C.useState(function() {
    return $l();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Rp([e.lockRef.current], (e.shards || []).map(wd), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !s.current.allowPinchZoom;
    var y = Oa(h), b = n.current, $ = "deltaX" in h ? h.deltaX : b[0] - y[0], _ = "deltaY" in h ? h.deltaY : b[1] - y[1], w, T = h.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && k === "h" && T.type === "range")
      return !1;
    var j = yd(k, T);
    if (!j)
      return !0;
    if (j ? w = k : (w = k === "v" ? "h" : "v", j = yd(k, T)), !j)
      return !1;
    if (!r.current && "changedTouches" in h && ($ || _) && (r.current = w), !w)
      return !0;
    var R = r.current || w;
    return r$(R, g, h, R === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!hr.length || hr[hr.length - 1] !== a)) {
      var y = "deltaY" in g ? $d(g) : Oa(g), b = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && o$(w.delta, y);
      })[0];
      if (b && b.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!b) {
        var $ = (s.current.shards || []).map(wd).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, y, b) {
    var $ = { name: h, delta: g, target: y, should: b };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = Oa(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, $d(h), h.target, i(h, e.lockRef.current));
  }, []), f = C.useCallback(function(h) {
    l(h.type, Oa(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return hr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, vr), document.addEventListener("touchmove", c, vr), document.addEventListener("touchstart", u, vr), function() {
      hr = hr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, vr), document.removeEventListener("touchmove", c, vr), document.removeEventListener("touchstart", u, vr);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: a$(o) }) : null,
    m ? C.createElement(Vp, { gapMode: "margin" }) : null
  );
}
const c$ = Lp(Fp, i$);
var zp = C.forwardRef(function(e, t) {
  return C.createElement(Ws, pt({}, e, { ref: t, sideCar: c$ }));
});
zp.classNames = Ws.classNames;
const Bs = zp, hc = [
  "Enter",
  " "
], l$ = [
  "ArrowDown",
  "PageUp",
  "Home"
], Hp = [
  "ArrowUp",
  "PageDown",
  "End"
], u$ = [
  ...l$,
  ...Hp
], d$ = {
  ltr: [
    ...hc,
    "ArrowRight"
  ],
  rtl: [
    ...hc,
    "ArrowLeft"
  ]
}, f$ = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, zs = "Menu", [_o, p$, m$] = Vn(zs), [cr, aa] = Ke(zs, [
  m$,
  an,
  Un
]), Hs = an(), Yp = Un(), [Kp, Wn] = cr(zs), [v$, sa] = cr(zs), h$ = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Hs(t), [c, l] = X(null), u = I(!1), d = We(a), f = on(o);
  return Q(() => {
    const m = () => {
      u.current = !0, document.addEventListener("pointerdown", v, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", v, {
        capture: !0,
        once: !0
      });
    }, v = () => u.current = !1;
    return document.addEventListener("keydown", m, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", m, {
        capture: !0
      }), document.removeEventListener("pointerdown", v, {
        capture: !0
      }), document.removeEventListener("pointermove", v, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ x(Gr, i, /* @__PURE__ */ x(Kp, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: c,
    onContentChange: l
  }, /* @__PURE__ */ x(v$, {
    scope: t,
    onClose: pe(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: f,
    modal: s
  }, r)));
}, Gp = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e, o = Hs(n);
  return /* @__PURE__ */ x(na, E({}, o, r, {
    ref: t
  }));
}), Zp = "MenuPortal", [g$, qp] = cr(Zp, {
  forceMount: void 0
}), b$ = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Wn(Zp, t);
  return /* @__PURE__ */ x(g$, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    container: o
  }, r)));
}, Wt = "MenuContent", [x$, wl] = cr(Wt), y$ = /* @__PURE__ */ M((e, t) => {
  const n = qp(Wt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Wn(Wt, e.__scopeMenu), s = sa(Wt, e.__scopeMenu);
  return /* @__PURE__ */ x(_o.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(_o.Slot, {
    scope: e.__scopeMenu
  }, s.modal ? /* @__PURE__ */ x($$, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(w$, E({}, o, {
    ref: t
  })))));
}), $$ = /* @__PURE__ */ M((e, t) => {
  const n = Wn(Wt, e.__scopeMenu), r = I(null), o = we(t, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return oa(a);
  }, []), /* @__PURE__ */ x(_l, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: V(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), w$ = /* @__PURE__ */ M((e, t) => {
  const n = Wn(Wt, e.__scopeMenu);
  return /* @__PURE__ */ x(_l, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), _l = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, loop: r = !1, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: s, disableOutsidePointerEvents: i, onEntryFocus: c, onEscapeKeyDown: l, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: m, disableOutsideScroll: v, ...h } = e, g = Wn(Wt, n), y = sa(Wt, n), b = Hs(n), $ = Yp(n), _ = p$(n), [w, T] = X(null), k = I(null), j = we(t, k, g.onContentChange), R = I(0), ee = I(""), re = I(0), U = I(null), B = I("right"), W = I(0), G = v ? Bs : Ht, J = v ? {
    as: Jt,
    allowPinchZoom: !0
  } : void 0, Y = (D) => {
    var O, L;
    const z = ee.current + D, oe = _().filter(
      (ve) => !ve.disabled
    ), ce = document.activeElement, ye = (O = oe.find(
      (ve) => ve.ref.current === ce
    )) === null || O === void 0 ? void 0 : O.textValue, be = oe.map(
      (ve) => ve.textValue
    ), te = U$(be, z, ye), le = (L = oe.find(
      (ve) => ve.textValue === te
    )) === null || L === void 0 ? void 0 : L.ref.current;
    (function ve(q) {
      ee.current = q, window.clearTimeout(R.current), q !== "" && (R.current = window.setTimeout(
        () => ve(""),
        1e3
      ));
    })(z), le && setTimeout(
      () => le.focus()
    );
  };
  Q(() => () => window.clearTimeout(R.current), []), As();
  const Z = pe((D) => {
    var O, L;
    return B.current === ((O = U.current) === null || O === void 0 ? void 0 : O.side) && B$(D, (L = U.current) === null || L === void 0 ? void 0 : L.area);
  }, []);
  return /* @__PURE__ */ x(x$, {
    scope: n,
    searchRef: ee,
    onItemEnter: pe((D) => {
      Z(D) && D.preventDefault();
    }, [
      Z
    ]),
    onItemLeave: pe((D) => {
      var O;
      Z(D) || ((O = k.current) === null || O === void 0 || O.focus(), T(null));
    }, [
      Z
    ]),
    onTriggerLeave: pe((D) => {
      Z(D) && D.preventDefault();
    }, [
      Z
    ]),
    pointerGraceTimerRef: re,
    onPointerGraceIntentChange: pe((D) => {
      U.current = D;
    }, [])
  }, /* @__PURE__ */ x(G, J, /* @__PURE__ */ x(Is, {
    asChild: !0,
    trapped: o,
    onMountAutoFocus: V(a, (D) => {
      var O;
      D.preventDefault(), (O = k.current) === null || O === void 0 || O.focus();
    }),
    onUnmountAutoFocus: s
  }, /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onEscapeKeyDown: l,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: m
  }, /* @__PURE__ */ x(Vs, E({
    asChild: !0
  }, $, {
    dir: y.dir,
    orientation: "vertical",
    loop: r,
    currentTabStopId: w,
    onCurrentTabStopIdChange: T,
    onEntryFocus: V(c, (D) => {
      y.isUsingKeyboardRef.current || D.preventDefault();
    })
  }), /* @__PURE__ */ x(ra, E({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": rm(g.open),
    "data-radix-menu-content": "",
    dir: y.dir
  }, b, h, {
    ref: j,
    style: {
      outline: "none",
      ...h.style
    },
    onKeyDown: V(h.onKeyDown, (D) => {
      const L = D.target.closest("[data-radix-menu-content]") === D.currentTarget, z = D.ctrlKey || D.altKey || D.metaKey, oe = D.key.length === 1;
      L && (D.key === "Tab" && D.preventDefault(), !z && oe && Y(D.key));
      const ce = k.current;
      if (D.target !== ce || !u$.includes(D.key))
        return;
      D.preventDefault();
      const be = _().filter(
        (te) => !te.disabled
      ).map(
        (te) => te.ref.current
      );
      Hp.includes(D.key) && be.reverse(), F$(be);
    }),
    onBlur: V(e.onBlur, (D) => {
      D.currentTarget.contains(D.target) || (window.clearTimeout(R.current), ee.current = "");
    }),
    onPointerMove: V(e.onPointerMove, Co((D) => {
      const O = D.target, L = W.current !== D.clientX;
      if (D.currentTarget.contains(O) && L) {
        const z = D.clientX > W.current ? "right" : "left";
        B.current = z, W.current = D.clientX;
      }
    }))
  })))))));
}), Xp = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "group"
  }, r, {
    ref: t
  }));
}), _$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({}, r, {
    ref: t
  }));
}), gc = "MenuItem", _d = "menu.itemSelect", Cl = /* @__PURE__ */ M((e, t) => {
  const { disabled: n = !1, onSelect: r, ...o } = e, a = I(null), s = sa(gc, e.__scopeMenu), i = wl(gc, e.__scopeMenu), c = we(t, a), l = I(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const f = new CustomEvent(_d, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        _d,
        (m) => r == null ? void 0 : r(m),
        {
          once: !0
        }
      ), Xa(d, f), f.defaultPrevented ? l.current = !1 : s.onClose();
    }
  };
  return /* @__PURE__ */ x(Jp, E({}, o, {
    ref: c,
    disabled: n,
    onClick: V(e.onClick, u),
    onPointerDown: (d) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, d), l.current = !0;
    },
    onPointerUp: V(e.onPointerUp, (d) => {
      var f;
      l.current || (f = d.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: V(e.onKeyDown, (d) => {
      const f = i.searchRef.current !== "";
      n || f && d.key === " " || hc.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), Jp = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = wl(gc, n), i = Yp(n), c = I(null), l = we(t, c), [u, d] = X(!1), [f, m] = X("");
  return Q(() => {
    const v = c.current;
    if (v) {
      var h;
      m(((h = v.textContent) !== null && h !== void 0 ? h : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ x(_o.ItemSlot, {
    scope: n,
    disabled: r,
    textValue: o ?? f
  }, /* @__PURE__ */ x(Us, E({
    asChild: !0
  }, i, {
    focusable: !r
  }), /* @__PURE__ */ x(ie.div, E({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0
  }, a, {
    ref: l,
    onPointerMove: V(e.onPointerMove, Co((v) => {
      r ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus());
    })),
    onPointerLeave: V(e.onPointerLeave, Co(
      (v) => s.onItemLeave(v)
    )),
    onFocus: V(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: V(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), C$ = /* @__PURE__ */ M((e, t) => {
  const { checked: n = !1, onCheckedChange: r, ...o } = e;
  return /* @__PURE__ */ x(em, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ x(Cl, E({
    role: "menuitemcheckbox",
    "aria-checked": rs(n) ? "mixed" : n
  }, o, {
    ref: t,
    "data-state": El(n),
    onSelect: V(
      o.onSelect,
      () => r == null ? void 0 : r(rs(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), E$ = "MenuRadioGroup", [S$, N$] = cr(E$, {
  value: void 0,
  onValueChange: () => {
  }
}), T$ = /* @__PURE__ */ M((e, t) => {
  const { value: n, onValueChange: r, ...o } = e, a = We(r);
  return /* @__PURE__ */ x(S$, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ x(Xp, E({}, o, {
    ref: t
  })));
}), P$ = "MenuRadioItem", k$ = /* @__PURE__ */ M((e, t) => {
  const { value: n, ...r } = e, o = N$(P$, e.__scopeMenu), a = n === o.value;
  return /* @__PURE__ */ x(em, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ x(Cl, E({
    role: "menuitemradio",
    "aria-checked": a
  }, r, {
    ref: t,
    "data-state": El(a),
    onSelect: V(r.onSelect, () => {
      var s;
      return (s = o.onValueChange) === null || s === void 0 ? void 0 : s.call(o, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Qp = "MenuItemIndicator", [em, M$] = cr(Qp, {
  checked: !1
}), O$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, forceMount: r, ...o } = e, a = M$(Qp, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || rs(a.checked) || a.checked === !0
  }, /* @__PURE__ */ x(ie.span, E({}, o, {
    ref: t,
    "data-state": El(a.checked)
  })));
}), D$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenu: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    role: "separator",
    "aria-orientation": "horizontal"
  }, r, {
    ref: t
  }));
}), tm = "MenuSub", [R$, nm] = cr(tm), A$ = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Wn(tm, t), s = Hs(t), [i, c] = X(null), [l, u] = X(null), d = We(o);
  return Q(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ x(Gr, s, /* @__PURE__ */ x(Kp, {
    scope: t,
    open: r,
    onOpenChange: d,
    content: l,
    onContentChange: u
  }, /* @__PURE__ */ x(R$, {
    scope: t,
    contentId: tt(),
    triggerId: tt(),
    trigger: i,
    onTriggerChange: c
  }, n)));
}, Da = "MenuSubTrigger", I$ = /* @__PURE__ */ M((e, t) => {
  const n = Wn(Da, e.__scopeMenu), r = sa(Da, e.__scopeMenu), o = nm(Da, e.__scopeMenu), a = wl(Da, e.__scopeMenu), s = I(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: c } = a, l = {
    __scopeMenu: e.__scopeMenu
  }, u = pe(() => {
    s.current && window.clearTimeout(s.current), s.current = null;
  }, []);
  return Q(
    () => u,
    [
      u
    ]
  ), Q(() => {
    const d = i.current;
    return () => {
      window.clearTimeout(d), c(null);
    };
  }, [
    i,
    c
  ]), /* @__PURE__ */ x(Gp, E({
    asChild: !0
  }, l), /* @__PURE__ */ x(Jp, E({
    id: o.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": o.contentId,
    "data-state": rm(n.open)
  }, e, {
    ref: Zo(t, o.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: V(e.onPointerMove, Co((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: V(e.onPointerLeave, Co((d) => {
      var f;
      u();
      const m = (f = n.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (m) {
        var v;
        const h = (v = n.content) === null || v === void 0 ? void 0 : v.dataset.side, g = h === "right", y = g ? -5 : 5, b = m[g ? "left" : "right"], $ = m[g ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + y,
              y: d.clientY
            },
            {
              x: b,
              y: m.top
            },
            {
              x: $,
              y: m.top
            },
            {
              x: $,
              y: m.bottom
            },
            {
              x: b,
              y: m.bottom
            }
          ],
          side: h
        }), window.clearTimeout(i.current), i.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(d), d.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: V(e.onKeyDown, (d) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && d.key === " ") && d$[r.dir].includes(d.key)) {
        var m;
        n.onOpenChange(!0), (m = n.content) === null || m === void 0 || m.focus(), d.preventDefault();
      }
    })
  })));
}), j$ = "MenuSubContent", L$ = /* @__PURE__ */ M((e, t) => {
  const n = qp(Wt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Wn(Wt, e.__scopeMenu), s = sa(Wt, e.__scopeMenu), i = nm(j$, e.__scopeMenu), c = I(null), l = we(t, c);
  return /* @__PURE__ */ x(_o.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(_o.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(_l, E({
    id: i.contentId,
    "aria-labelledby": i.triggerId
  }, o, {
    ref: l,
    align: "start",
    side: s.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var d;
      s.isUsingKeyboardRef.current && ((d = c.current) === null || d === void 0 || d.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: V(e.onFocusOutside, (u) => {
      u.target !== i.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: V(e.onEscapeKeyDown, (u) => {
      s.onClose(), u.preventDefault();
    }),
    onKeyDown: V(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), f = f$[s.dir].includes(u.key);
      if (d && f) {
        var m;
        a.onOpenChange(!1), (m = i.trigger) === null || m === void 0 || m.focus(), u.preventDefault();
      }
    })
  })))));
});
function rm(e) {
  return e ? "open" : "closed";
}
function rs(e) {
  return e === "indeterminate";
}
function El(e) {
  return rs(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function F$(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function V$(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
function U$(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = V$(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function W$(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function B$(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return W$(n, t);
}
function Co(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Sl = h$, Nl = Gp, Tl = b$, Pl = y$, kl = Xp, Ml = _$, Ol = Cl, Dl = C$, Rl = T$, Al = k$, Il = O$, jl = D$, Ll = A$, Fl = I$, Vl = L$, om = "ContextMenu", [z$, jT] = Ke(om, [
  aa
]), $t = aa(), [H$, am] = z$(om), Y$ = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = X(!1), c = $t(t), l = We(r), u = pe((d) => {
    i(d), l(d);
  }, [
    l
  ]);
  return /* @__PURE__ */ x(H$, {
    scope: t,
    open: s,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ x(Sl, E({}, c, {
    dir: o,
    open: s,
    onOpenChange: u,
    modal: a
  }), n));
}, K$ = "ContextMenuTrigger", G$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = am(K$, n), s = $t(n), i = I({
    x: 0,
    y: 0
  }), c = I({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...i.current
    })
  }), l = I(0), u = pe(
    () => window.clearTimeout(l.current),
    []
  ), d = (f) => {
    i.current = {
      x: f.clientX,
      y: f.clientY
    }, a.onOpenChange(!0);
  };
  return Q(
    () => u,
    [
      u
    ]
  ), Q(
    () => void (r && u()),
    [
      r,
      u
    ]
  ), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Nl, E({}, s, {
    virtualRef: c
  })), /* @__PURE__ */ x(ie.span, E({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0
  }, o, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: r ? e.onContextMenu : V(e.onContextMenu, (f) => {
      u(), d(f), f.preventDefault();
    }),
    onPointerDown: r ? e.onPointerDown : V(e.onPointerDown, Ra((f) => {
      u(), l.current = window.setTimeout(
        () => d(f),
        700
      );
    })),
    onPointerMove: r ? e.onPointerMove : V(e.onPointerMove, Ra(u)),
    onPointerCancel: r ? e.onPointerCancel : V(e.onPointerCancel, Ra(u)),
    onPointerUp: r ? e.onPointerUp : V(e.onPointerUp, Ra(u))
  })));
}), Z$ = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = $t(t);
  return /* @__PURE__ */ x(Tl, E({}, r, n));
}, q$ = "ContextMenuContent", X$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = am(q$, n), a = $t(n), s = I(!1);
  return /* @__PURE__ */ x(Pl, E({}, a, r, {
    ref: t,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (i) => {
      var c;
      (c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && s.current && i.preventDefault(), s.current = !1;
    },
    onInteractOutside: (i) => {
      var c;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, i), !i.defaultPrevented && !o.modal && (s.current = !0);
    },
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), J$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(kl, E({}, o, r, {
    ref: t
  }));
}), Q$ = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ml, E({}, o, r, {
    ref: t
  }));
}), ew = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Ol, E({}, o, r, {
    ref: t
  }));
}), tw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Dl, E({}, o, r, {
    ref: t
  }));
}), nw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), rw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), ow = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), aw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), sw = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = $t(t), [i, c] = Qe({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(Ll, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, iw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), cw = /* @__PURE__ */ M((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = $t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function Ra(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const lw = Y$, uw = G$, sm = Z$, im = X$, dw = J$, cm = Q$, lm = ew, um = tw, fw = nw, dm = rw, fm = ow, pm = aw, pw = sw, mm = iw, vm = cw, LT = lw, FT = uw, VT = dw, UT = sm, WT = pw, BT = fw, mw = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  mm,
  {
    ref: o,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p.exports.jsx(qo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
mw.displayName = mm.displayName;
const vw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  vm,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-left-1",
      e
    ),
    ...t
  }
));
vw.displayName = vm.displayName;
const hw = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(sm, { children: /* @__PURE__ */ p.exports.jsx(
  im,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80",
      e
    ),
    ...t
  }
) }));
hw.displayName = im.displayName;
const gw = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  lm,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
gw.displayName = lm.displayName;
const bw = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  um,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(fm, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
bw.displayName = um.displayName;
const xw = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  dm,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(fm, { children: /* @__PURE__ */ p.exports.jsx(Os, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
xw.displayName = dm.displayName;
const yw = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  cm,
  {
    ref: r,
    className: A(
      "px-2 py-1.5 text-sm font-semibold text-foreground",
      t && "pl-8",
      e
    ),
    ...n
  }
));
yw.displayName = cm.displayName;
const $w = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  pm,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
$w.displayName = pm.displayName;
const ww = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: A(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
ww.displayName = "ContextMenuShortcut";
var ia = (e) => e.type === "checkbox", wr = (e) => e instanceof Date, gt = (e) => e == null;
const hm = (e) => typeof e == "object";
var st = (e) => !gt(e) && !Array.isArray(e) && hm(e) && !wr(e), gm = (e) => st(e) && e.target ? ia(e.target) ? e.target.checked : e.target.value : e, _w = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, bm = (e, t) => e.has(_w(t)), Cw = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return st(t) && t.hasOwnProperty("isPrototypeOf");
}, Ul = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function qt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Ul && (e instanceof Blob || e instanceof FileList)) && (n || st(e)))
    if (t = n ? [] : {}, !n && !Cw(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = qt(e[r]));
  else
    return e;
  return t;
}
var ca = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Je = (e) => e === void 0, fe = (e, t, n) => {
  if (!t || !st(e))
    return n;
  const r = ca(t.split(/[,[\].]+?/)).reduce((o, a) => gt(o) ? o : o[a], e);
  return Je(r) || r === e ? Je(e[t]) ? n : e[t] : r;
};
const os = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Vt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, dn = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, xm = N.createContext(null), Ys = () => N.useContext(xm), Ew = (e) => {
  const { children: t, ...n } = e;
  return N.createElement(xm.Provider, { value: n }, t);
};
var ym = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Vt.all && (t._proxyFormState[s] = !r || Vt.all), n && (n[s] = !0), e[s];
      }
    });
  return o;
}, Ot = (e) => st(e) && !Object.keys(e).length, $m = (e, t, n, r) => {
  n(e);
  const { name: o, ...a } = e;
  return Ot(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!r || Vt.all));
}, Ba = (e) => Array.isArray(e) ? e : [e], wm = (e, t, n) => n && t ? e === t : !e || !t || e === t || Ba(e).some((r) => r && (r.startsWith(t) || t.startsWith(r)));
function Wl(e) {
  const t = N.useRef(e);
  t.current = e, N.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function Sw(e) {
  const t = Ys(), { control: n = t.control, disabled: r, name: o, exact: a } = e || {}, [s, i] = N.useState(n._formState), c = N.useRef(!0), l = N.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = N.useRef(o);
  return u.current = o, Wl({
    disabled: r,
    next: (d) => c.current && wm(u.current, d.name, a) && $m(d, l.current, n._updateFormState) && i({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), N.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), ym(s, n, l.current, !1);
}
var Xt = (e) => typeof e == "string", _m = (e, t, n, r, o) => Xt(e) ? (r && t.watch.add(e), fe(n, e, o)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), fe(n, a))) : (r && (t.watchAll = !0), n);
function Nw(e) {
  const t = Ys(), { control: n = t.control, name: r, defaultValue: o, disabled: a, exact: s } = e || {}, i = N.useRef(r);
  i.current = r, Wl({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      wm(i.current, u.name, s) && l(qt(_m(i.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = N.useState(n._getWatch(r, o));
  return N.useEffect(() => n._removeUnmounted()), c;
}
var Bl = (e) => /^\w*$/.test(e), Cm = (e) => ca(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function Be(e, t, n) {
  let r = -1;
  const o = Bl(t) ? [t] : Cm(t), a = o.length, s = a - 1;
  for (; ++r < a; ) {
    const i = o[r];
    let c = n;
    if (r !== s) {
      const l = e[i];
      c = st(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function Tw(e) {
  const t = Ys(), { name: n, control: r = t.control, shouldUnregister: o } = e, a = bm(r._names.array, n), s = Nw({
    control: r,
    name: n,
    defaultValue: fe(r._formValues, n, fe(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), i = Sw({
    control: r,
    name: n
  }), c = N.useRef(r.register(n, {
    ...e.rules,
    value: s
  }));
  return c.current = r.register(n, e.rules), N.useEffect(() => {
    const l = r._options.shouldUnregister || o, u = (d, f) => {
      const m = fe(r._fields, d);
      m && (m._f.mount = f);
    };
    if (u(n, !0), l) {
      const d = qt(fe(r._options.defaultValues, n));
      Be(r._defaultValues, n, d), Je(fe(r._formValues, n)) && Be(r._formValues, n, d);
    }
    return () => {
      (a ? l && !r._state.action : l) ? r.unregister(n) : u(n, !1);
    };
  }, [n, r, a, o]), {
    field: {
      name: n,
      value: s,
      onChange: N.useCallback((l) => c.current.onChange({
        target: {
          value: gm(l),
          name: n
        },
        type: os.CHANGE
      }), [n]),
      onBlur: N.useCallback(() => c.current.onBlur({
        target: {
          value: fe(r._formValues, n),
          name: n
        },
        type: os.BLUR
      }), [n, r]),
      ref: (l) => {
        const u = fe(r._fields, n);
        u && l && (u._f.ref = {
          focus: () => l.focus(),
          select: () => l.select(),
          setCustomValidity: (d) => l.setCustomValidity(d),
          reportValidity: () => l.reportValidity()
        });
      }
    },
    formState: i,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!fe(i.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!fe(i.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!fe(i.touchedFields, n)
      },
      error: {
        enumerable: !0,
        get: () => fe(i.errors, n)
      }
    })
  };
}
const Pw = (e) => e.render(Tw(e));
var Em = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {};
const bc = (e, t, n) => {
  for (const r of n || Object.keys(e)) {
    const o = fe(e, r);
    if (o) {
      const { _f: a, ...s } = o;
      if (a && t(a.name)) {
        if (a.ref.focus) {
          a.ref.focus();
          break;
        } else if (a.refs && a.refs[0].focus) {
          a.refs[0].focus();
          break;
        }
      } else
        st(s) && bc(s, t);
    }
  }
};
var Cd = (e) => ({
  isOnSubmit: !e || e === Vt.onSubmit,
  isOnBlur: e === Vt.onBlur,
  isOnChange: e === Vt.onChange,
  isOnAll: e === Vt.all,
  isOnTouch: e === Vt.onTouched
}), Ed = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length)))), kw = (e, t, n) => {
  const r = ca(fe(e, n));
  return Be(r, "root", t[n]), Be(e, n, r), e;
}, Cr = (e) => typeof e == "boolean", zl = (e) => e.type === "file", kn = (e) => typeof e == "function", as = (e) => {
  if (!Ul)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, za = (e) => Xt(e), Hl = (e) => e.type === "radio", ss = (e) => e instanceof RegExp;
const Sd = {
  value: !1,
  isValid: !1
}, Nd = { value: !0, isValid: !0 };
var Sm = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Je(e[0].attributes.value) ? Je(e[0].value) || e[0].value === "" ? Nd : { value: e[0].value, isValid: !0 } : Nd
    ) : Sd;
  }
  return Sd;
};
const Td = {
  isValid: !1,
  value: null
};
var Nm = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Td) : Td;
function Pd(e, t, n = "validate") {
  if (za(e) || Array.isArray(e) && e.every(za) || Cr(e) && !e)
    return {
      type: n,
      message: za(e) ? e : "",
      ref: t
    };
}
var gr = (e) => st(e) && !ss(e) ? e : {
  value: e,
  message: ""
}, kd = async (e, t, n, r, o) => {
  const { ref: a, refs: s, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: f, validate: m, name: v, valueAsNumber: h, mount: g, disabled: y } = e._f, b = fe(t, v);
  if (!g || y)
    return {};
  const $ = s ? s[0] : a, _ = (U) => {
    r && $.reportValidity && ($.setCustomValidity(Cr(U) ? "" : U || ""), $.reportValidity());
  }, w = {}, T = Hl(a), k = ia(a), j = T || k, R = (h || zl(a)) && Je(a.value) && Je(b) || as(a) && a.value === "" || b === "" || Array.isArray(b) && !b.length, ee = Em.bind(null, v, n, w), re = (U, B, W, G = dn.maxLength, J = dn.minLength) => {
    const Y = U ? B : W;
    w[v] = {
      type: U ? G : J,
      message: Y,
      ref: a,
      ...ee(U ? G : J, Y)
    };
  };
  if (o ? !Array.isArray(b) || !b.length : i && (!j && (R || gt(b)) || Cr(b) && !b || k && !Sm(s).isValid || T && !Nm(s).isValid)) {
    const { value: U, message: B } = za(i) ? { value: !!i, message: i } : gr(i);
    if (U && (w[v] = {
      type: dn.required,
      message: B,
      ref: $,
      ...ee(dn.required, B)
    }, !n))
      return _(B), w;
  }
  if (!R && (!gt(u) || !gt(d))) {
    let U, B;
    const W = gr(d), G = gr(u);
    if (!gt(b) && !isNaN(b)) {
      const J = a.valueAsNumber || b && +b;
      gt(W.value) || (U = J > W.value), gt(G.value) || (B = J < G.value);
    } else {
      const J = a.valueAsDate || new Date(b), Y = (O) => new Date(new Date().toDateString() + " " + O), Z = a.type == "time", D = a.type == "week";
      Xt(W.value) && b && (U = Z ? Y(b) > Y(W.value) : D ? b > W.value : J > new Date(W.value)), Xt(G.value) && b && (B = Z ? Y(b) < Y(G.value) : D ? b < G.value : J < new Date(G.value));
    }
    if ((U || B) && (re(!!U, W.message, G.message, dn.max, dn.min), !n))
      return _(w[v].message), w;
  }
  if ((c || l) && !R && (Xt(b) || o && Array.isArray(b))) {
    const U = gr(c), B = gr(l), W = !gt(U.value) && b.length > +U.value, G = !gt(B.value) && b.length < +B.value;
    if ((W || G) && (re(W, U.message, B.message), !n))
      return _(w[v].message), w;
  }
  if (f && !R && Xt(b)) {
    const { value: U, message: B } = gr(f);
    if (ss(U) && !b.match(U) && (w[v] = {
      type: dn.pattern,
      message: B,
      ref: a,
      ...ee(dn.pattern, B)
    }, !n))
      return _(B), w;
  }
  if (m) {
    if (kn(m)) {
      const U = await m(b, t), B = Pd(U, $);
      if (B && (w[v] = {
        ...B,
        ...ee(dn.validate, B.message)
      }, !n))
        return _(B.message), w;
    } else if (st(m)) {
      let U = {};
      for (const B in m) {
        if (!Ot(U) && !n)
          break;
        const W = Pd(await m[B](b, t), $, B);
        W && (U = {
          ...W,
          ...ee(B, W.message)
        }, _(W.message), n && (w[v] = U));
      }
      if (!Ot(U) && (w[v] = {
        ref: $,
        ...U
      }, !n))
        return w;
    }
  }
  return _(!0), w;
};
function Mw(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = Je(e) ? r++ : e[t[r++]];
  return e;
}
function Ow(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Je(e[t]))
      return !1;
  return !0;
}
function ut(e, t) {
  const n = Array.isArray(t) ? t : Bl(t) ? [t] : Cm(t), r = n.length === 1 ? e : Mw(e, n), o = n.length - 1, a = n[o];
  return r && delete r[a], o !== 0 && (st(r) && Ot(r) || Array.isArray(r) && Ow(r)) && ut(e, n.slice(0, -1)), e;
}
function Mi() {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const a of e)
        a.next && a.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((a) => a !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}
var is = (e) => gt(e) || !hm(e);
function Gn(e, t) {
  if (is(e) || is(t))
    return e === t;
  if (wr(e) && wr(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const a = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const s = t[o];
      if (wr(a) && wr(s) || st(a) && st(s) || Array.isArray(a) && Array.isArray(s) ? !Gn(a, s) : a !== s)
        return !1;
    }
  }
  return !0;
}
var Tm = (e) => e.type === "select-multiple", Dw = (e) => Hl(e) || ia(e), Oi = (e) => as(e) && e.isConnected, Pm = (e) => {
  for (const t in e)
    if (kn(e[t]))
      return !0;
  return !1;
};
function cs(e, t = {}) {
  const n = Array.isArray(e);
  if (st(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || st(e[r]) && !Pm(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, cs(e[r], t[r])) : gt(e[r]) || (t[r] = !0);
  return t;
}
function km(e, t, n) {
  const r = Array.isArray(e);
  if (st(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || st(e[o]) && !Pm(e[o]) ? Je(t) || is(n[o]) ? n[o] = Array.isArray(e[o]) ? cs(e[o], []) : { ...cs(e[o]) } : km(e[o], gt(t) ? {} : t[o], n[o]) : n[o] = !Gn(e[o], t[o]);
  return n;
}
var Di = (e, t) => km(e, t, cs(t)), Mm = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => Je(e) ? e : t ? e === "" ? NaN : e && +e : n && Xt(e) ? new Date(e) : r ? r(e) : e;
function Ri(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return zl(t) ? t.files : Hl(t) ? Nm(e.refs).value : Tm(t) ? [...t.selectedOptions].map(({ value: n }) => n) : ia(t) ? Sm(e.refs).value : Mm(Je(t.value) ? e.ref.value : t.value, e);
}
var Rw = (e, t, n, r) => {
  const o = {};
  for (const a of e) {
    const s = fe(t, a);
    s && Be(o, a, s._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, uo = (e) => Je(e) ? e : ss(e) ? e.source : st(e) ? ss(e.value) ? e.value.source : e.value : e, Aw = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Md(e, t, n) {
  const r = fe(e, n);
  if (r || Bl(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const a = o.join("."), s = fe(t, a), i = fe(e, a);
    if (s && !Array.isArray(s) && n !== a)
      return { name: n };
    if (i && i.type)
      return {
        name: a,
        error: i
      };
    o.pop();
  }
  return {
    name: n
  };
}
var Iw = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, jw = (e, t) => !ca(fe(e, t)).length && ut(e, t);
const Lw = {
  mode: Vt.onSubmit,
  reValidateMode: Vt.onChange,
  shouldFocusError: !0
};
function Fw(e = {}, t) {
  let n = {
    ...Lw,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: kn(n.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  }, o = {}, a = st(n.defaultValues) || st(n.values) ? qt(n.defaultValues || n.values) || {} : {}, s = n.shouldUnregister ? {} : qt(a), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: Mi(),
    array: Mi(),
    state: Mi()
  }, m = e.resetOptions && e.resetOptions.keepDirtyValues, v = Cd(n.mode), h = Cd(n.reValidateMode), g = n.criteriaMode === Vt.all, y = (P) => (F) => {
    clearTimeout(u), u = setTimeout(P, F);
  }, b = async (P) => {
    if (d.isValid || P) {
      const F = n.resolver ? Ot((await R()).errors) : await re(o, !0);
      F !== r.isValid && f.state.next({
        isValid: F
      });
    }
  }, $ = (P) => d.isValidating && f.state.next({
    isValidating: P
  }), _ = (P, F = [], H, xe, ue = !0, se = !0) => {
    if (xe && H) {
      if (i.action = !0, se && Array.isArray(fe(o, P))) {
        const $e = H(fe(o, P), xe.argA, xe.argB);
        ue && Be(o, P, $e);
      }
      if (se && Array.isArray(fe(r.errors, P))) {
        const $e = H(fe(r.errors, P), xe.argA, xe.argB);
        ue && Be(r.errors, P, $e), jw(r.errors, P);
      }
      if (d.touchedFields && se && Array.isArray(fe(r.touchedFields, P))) {
        const $e = H(fe(r.touchedFields, P), xe.argA, xe.argB);
        ue && Be(r.touchedFields, P, $e);
      }
      d.dirtyFields && (r.dirtyFields = Di(a, s)), f.state.next({
        name: P,
        isDirty: B(P, F),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Be(s, P, F);
  }, w = (P, F) => {
    Be(r.errors, P, F), f.state.next({
      errors: r.errors
    });
  }, T = (P, F, H, xe) => {
    const ue = fe(o, P);
    if (ue) {
      const se = fe(s, P, Je(H) ? fe(a, P) : H);
      Je(se) || xe && xe.defaultChecked || F ? Be(s, P, F ? se : Ri(ue._f)) : J(P, se), i.mount && b();
    }
  }, k = (P, F, H, xe, ue) => {
    let se = !1, $e = !1;
    const Ge = {
      name: P
    };
    if (!H || xe) {
      d.isDirty && ($e = r.isDirty, r.isDirty = Ge.isDirty = B(), se = $e !== Ge.isDirty);
      const qe = Gn(fe(a, P), F);
      $e = fe(r.dirtyFields, P), qe ? ut(r.dirtyFields, P) : Be(r.dirtyFields, P, !0), Ge.dirtyFields = r.dirtyFields, se = se || d.dirtyFields && $e !== !qe;
    }
    if (H) {
      const qe = fe(r.touchedFields, P);
      qe || (Be(r.touchedFields, P, H), Ge.touchedFields = r.touchedFields, se = se || d.touchedFields && qe !== H);
    }
    return se && ue && f.state.next(Ge), se ? Ge : {};
  }, j = (P, F, H, xe) => {
    const ue = fe(r.errors, P), se = d.isValid && Cr(F) && r.isValid !== F;
    if (e.delayError && H ? (l = y(() => w(P, H)), l(e.delayError)) : (clearTimeout(u), l = null, H ? Be(r.errors, P, H) : ut(r.errors, P)), (H ? !Gn(ue, H) : ue) || !Ot(xe) || se) {
      const $e = {
        ...xe,
        ...se && Cr(F) ? { isValid: F } : {},
        errors: r.errors,
        name: P
      };
      r = {
        ...r,
        ...$e
      }, f.state.next($e);
    }
    $(!1);
  }, R = async (P) => n.resolver(s, n.context, Rw(P || c.mount, o, n.criteriaMode, n.shouldUseNativeValidation)), ee = async (P) => {
    const { errors: F } = await R();
    if (P)
      for (const H of P) {
        const xe = fe(F, H);
        xe ? Be(r.errors, H, xe) : ut(r.errors, H);
      }
    else
      r.errors = F;
    return F;
  }, re = async (P, F, H = {
    valid: !0
  }) => {
    for (const xe in P) {
      const ue = P[xe];
      if (ue) {
        const { _f: se, ...$e } = ue;
        if (se) {
          const Ge = c.array.has(se.name), qe = await kd(ue, s, g, n.shouldUseNativeValidation && !F, Ge);
          if (qe[se.name] && (H.valid = !1, F))
            break;
          !F && (fe(qe, se.name) ? Ge ? kw(r.errors, qe, se.name) : Be(r.errors, se.name, qe[se.name]) : ut(r.errors, se.name));
        }
        $e && await re($e, F, H);
      }
    }
    return H.valid;
  }, U = () => {
    for (const P of c.unMount) {
      const F = fe(o, P);
      F && (F._f.refs ? F._f.refs.every((H) => !Oi(H)) : !Oi(F._f.ref)) && be(P);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, B = (P, F) => (P && F && Be(s, P, F), !Gn(L(), a)), W = (P, F, H) => _m(P, c, {
    ...i.mount ? s : Je(F) ? a : Xt(P) ? { [P]: F } : F
  }, H, F), G = (P) => ca(fe(i.mount ? s : a, P, e.shouldUnregister ? fe(a, P, []) : [])), J = (P, F, H = {}) => {
    const xe = fe(o, P);
    let ue = F;
    if (xe) {
      const se = xe._f;
      se && (!se.disabled && Be(s, P, Mm(F, se)), ue = as(se.ref) && gt(F) ? "" : F, Tm(se.ref) ? [...se.ref.options].forEach(($e) => $e.selected = ue.includes($e.value)) : se.refs ? ia(se.ref) ? se.refs.length > 1 ? se.refs.forEach(($e) => (!$e.defaultChecked || !$e.disabled) && ($e.checked = Array.isArray(ue) ? !!ue.find((Ge) => Ge === $e.value) : ue === $e.value)) : se.refs[0] && (se.refs[0].checked = !!ue) : se.refs.forEach(($e) => $e.checked = $e.value === ue) : zl(se.ref) ? se.ref.value = "" : (se.ref.value = ue, se.ref.type || f.values.next({
        name: P,
        values: { ...s }
      })));
    }
    (H.shouldDirty || H.shouldTouch) && k(P, ue, H.shouldTouch, H.shouldDirty, !0), H.shouldValidate && O(P);
  }, Y = (P, F, H) => {
    for (const xe in F) {
      const ue = F[xe], se = `${P}.${xe}`, $e = fe(o, se);
      (c.array.has(P) || !is(ue) || $e && !$e._f) && !wr(ue) ? Y(se, ue, H) : J(se, ue, H);
    }
  }, Z = (P, F, H = {}) => {
    const xe = fe(o, P), ue = c.array.has(P), se = qt(F);
    Be(s, P, se), ue ? (f.array.next({
      name: P,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && H.shouldDirty && f.state.next({
      name: P,
      dirtyFields: Di(a, s),
      isDirty: B(P, se)
    })) : xe && !xe._f && !gt(se) ? Y(P, se, H) : J(P, se, H), Ed(P, c) && f.state.next({ ...r }), f.values.next({
      name: P,
      values: { ...s }
    }), !i.mount && t();
  }, D = async (P) => {
    const F = P.target;
    let H = F.name, xe = !0;
    const ue = fe(o, H), se = () => F.type ? Ri(ue._f) : gm(P);
    if (ue) {
      let $e, Ge;
      const qe = se(), sn = P.type === os.BLUR || P.type === os.FOCUS_OUT, _a = !Aw(ue._f) && !n.resolver && !fe(r.errors, H) && !ue._f.deps || Iw(sn, fe(r.touchedFields, H), r.isSubmitted, h, v), cn = Ed(H, c, sn);
      Be(s, H, qe), sn ? (ue._f.onBlur && ue._f.onBlur(P), l && l(0)) : ue._f.onChange && ue._f.onChange(P);
      const Qr = k(H, qe, sn, !1), Ca = !Ot(Qr) || cn;
      if (!sn && f.values.next({
        name: H,
        type: P.type,
        values: { ...s }
      }), _a)
        return d.isValid && b(), Ca && f.state.next({ name: H, ...cn ? {} : Qr });
      if (!sn && cn && f.state.next({ ...r }), $(!0), n.resolver) {
        const { errors: eo } = await R([H]), to = Md(r.errors, o, H), Ea = Md(eo, o, to.name || H);
        $e = Ea.error, H = Ea.name, Ge = Ot(eo);
      } else
        $e = (await kd(ue, s, g, n.shouldUseNativeValidation))[H], xe = isNaN(qe) || qe === fe(s, H, qe), xe && ($e ? Ge = !1 : d.isValid && (Ge = await re(o, !0)));
      xe && (ue._f.deps && O(ue._f.deps), j(H, Ge, $e, Qr));
    }
  }, O = async (P, F = {}) => {
    let H, xe;
    const ue = Ba(P);
    if ($(!0), n.resolver) {
      const se = await ee(Je(P) ? P : ue);
      H = Ot(se), xe = P ? !ue.some(($e) => fe(se, $e)) : H;
    } else
      P ? (xe = (await Promise.all(ue.map(async (se) => {
        const $e = fe(o, se);
        return await re($e && $e._f ? { [se]: $e } : $e);
      }))).every(Boolean), !(!xe && !r.isValid) && b()) : xe = H = await re(o);
    return f.state.next({
      ...!Xt(P) || d.isValid && H !== r.isValid ? {} : { name: P },
      ...n.resolver || !P ? { isValid: H } : {},
      errors: r.errors,
      isValidating: !1
    }), F.shouldFocus && !xe && bc(o, (se) => se && fe(r.errors, se), P ? ue : c.mount), xe;
  }, L = (P) => {
    const F = {
      ...a,
      ...i.mount ? s : {}
    };
    return Je(P) ? F : Xt(P) ? fe(F, P) : P.map((H) => fe(F, H));
  }, z = (P, F) => ({
    invalid: !!fe((F || r).errors, P),
    isDirty: !!fe((F || r).dirtyFields, P),
    isTouched: !!fe((F || r).touchedFields, P),
    error: fe((F || r).errors, P)
  }), oe = (P) => {
    P && Ba(P).forEach((F) => ut(r.errors, F)), f.state.next({
      errors: P ? r.errors : {}
    });
  }, ce = (P, F, H) => {
    const xe = (fe(o, P, { _f: {} })._f || {}).ref;
    Be(r.errors, P, {
      ...F,
      ref: xe
    }), f.state.next({
      name: P,
      errors: r.errors,
      isValid: !1
    }), H && H.shouldFocus && xe && xe.focus && xe.focus();
  }, ye = (P, F) => kn(P) ? f.values.subscribe({
    next: (H) => P(W(void 0, F), H)
  }) : W(P, F, !0), be = (P, F = {}) => {
    for (const H of P ? Ba(P) : c.mount)
      c.mount.delete(H), c.array.delete(H), F.keepValue || (ut(o, H), ut(s, H)), !F.keepError && ut(r.errors, H), !F.keepDirty && ut(r.dirtyFields, H), !F.keepTouched && ut(r.touchedFields, H), !n.shouldUnregister && !F.keepDefaultValue && ut(a, H);
    f.values.next({
      values: { ...s }
    }), f.state.next({
      ...r,
      ...F.keepDirty ? { isDirty: B() } : {}
    }), !F.keepIsValid && b();
  }, te = (P, F = {}) => {
    let H = fe(o, P);
    const xe = Cr(F.disabled);
    return Be(o, P, {
      ...H || {},
      _f: {
        ...H && H._f ? H._f : { ref: { name: P } },
        name: P,
        mount: !0,
        ...F
      }
    }), c.mount.add(P), Je(F.value) || Be(s, P, F.value), H ? xe && Be(s, P, F.disabled ? void 0 : fe(s, P, Ri(H._f))) : T(P, !0, F.value), {
      ...xe ? { disabled: F.disabled } : {},
      ...n.progressive ? {
        required: !!F.required,
        min: uo(F.min),
        max: uo(F.max),
        minLength: uo(F.minLength),
        maxLength: uo(F.maxLength),
        pattern: uo(F.pattern)
      } : {},
      name: P,
      onChange: D,
      onBlur: D,
      ref: (ue) => {
        if (ue) {
          te(P, F), H = fe(o, P);
          const se = Je(ue.value) && ue.querySelectorAll && ue.querySelectorAll("input,select,textarea")[0] || ue, $e = Dw(se), Ge = H._f.refs || [];
          if ($e ? Ge.find((qe) => qe === se) : se === H._f.ref)
            return;
          Be(o, P, {
            _f: {
              ...H._f,
              ...$e ? {
                refs: [
                  ...Ge.filter(Oi),
                  se,
                  ...Array.isArray(fe(a, P)) ? [{}] : []
                ],
                ref: { type: se.type, name: P }
              } : { ref: se }
            }
          }), T(P, !1, void 0, se);
        } else
          H = fe(o, P, {}), H._f && (H._f.mount = !1), (n.shouldUnregister || F.shouldUnregister) && !(bm(c.array, P) && i.action) && c.unMount.add(P);
      }
    };
  }, le = () => n.shouldFocusError && bc(o, (P) => P && fe(r.errors, P), c.mount), ve = (P, F) => async (H) => {
    H && (H.preventDefault && H.preventDefault(), H.persist && H.persist());
    let xe = qt(s);
    if (f.state.next({
      isSubmitting: !0
    }), n.resolver) {
      const { errors: ue, values: se } = await R();
      r.errors = ue, xe = se;
    } else
      await re(o);
    ut(r.errors, "root"), Ot(r.errors) ? (f.state.next({
      errors: {}
    }), await P(xe, H)) : (F && await F({ ...r.errors }, H), le(), setTimeout(le)), f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Ot(r.errors),
      submitCount: r.submitCount + 1,
      errors: r.errors
    });
  }, q = (P, F = {}) => {
    fe(o, P) && (Je(F.defaultValue) ? Z(P, fe(a, P)) : (Z(P, F.defaultValue), Be(a, P, F.defaultValue)), F.keepTouched || ut(r.touchedFields, P), F.keepDirty || (ut(r.dirtyFields, P), r.isDirty = F.defaultValue ? B(P, fe(a, P)) : B()), F.keepError || (ut(r.errors, P), d.isValid && b()), f.state.next({ ...r }));
  }, he = (P, F = {}) => {
    const H = P || a, xe = qt(H), ue = P && !Ot(P) ? xe : a;
    if (F.keepDefaultValues || (a = H), !F.keepValues) {
      if (F.keepDirtyValues || m)
        for (const se of c.mount)
          fe(r.dirtyFields, se) ? Be(ue, se, fe(s, se)) : Z(se, fe(ue, se));
      else {
        if (Ul && Je(P))
          for (const se of c.mount) {
            const $e = fe(o, se);
            if ($e && $e._f) {
              const Ge = Array.isArray($e._f.refs) ? $e._f.refs[0] : $e._f.ref;
              if (as(Ge)) {
                const qe = Ge.closest("form");
                if (qe) {
                  qe.reset();
                  break;
                }
              }
            }
          }
        o = {};
      }
      s = e.shouldUnregister ? F.keepDefaultValues ? qt(a) : {} : qt(ue), f.array.next({
        values: { ...ue }
      }), f.values.next({
        values: { ...ue }
      });
    }
    c = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !i.mount && t(), i.mount = !d.isValid || !!F.keepIsValid, i.watch = !!e.shouldUnregister, f.state.next({
      submitCount: F.keepSubmitCount ? r.submitCount : 0,
      isDirty: F.keepDirty ? r.isDirty : !!(F.keepDefaultValues && !Gn(P, a)),
      isSubmitted: F.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: F.keepDirtyValues ? r.dirtyFields : F.keepDefaultValues && P ? Di(a, P) : {},
      touchedFields: F.keepTouched ? r.touchedFields : {},
      errors: F.keepErrors ? r.errors : {},
      isSubmitting: !1,
      isSubmitSuccessful: !1
    });
  }, K = (P, F) => he(kn(P) ? P(s) : P, F);
  return {
    control: {
      register: te,
      unregister: be,
      getFieldState: z,
      handleSubmit: ve,
      setError: ce,
      _executeSchema: R,
      _getWatch: W,
      _getDirty: B,
      _updateValid: b,
      _removeUnmounted: U,
      _updateFieldArray: _,
      _getFieldArray: G,
      _reset: he,
      _resetDefaultValues: () => kn(n.defaultValues) && n.defaultValues().then((P) => {
        K(P, n.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (P) => {
        r = {
          ...r,
          ...P
        };
      },
      _subjects: f,
      _proxyFormState: d,
      get _fields() {
        return o;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return i;
      },
      set _state(P) {
        i = P;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return c;
      },
      set _names(P) {
        c = P;
      },
      get _formState() {
        return r;
      },
      set _formState(P) {
        r = P;
      },
      get _options() {
        return n;
      },
      set _options(P) {
        n = {
          ...n,
          ...P
        };
      }
    },
    trigger: O,
    register: te,
    handleSubmit: ve,
    watch: ye,
    setValue: Z,
    getValues: L,
    reset: K,
    resetField: q,
    clearErrors: oe,
    unregister: be,
    setError: ce,
    setFocus: (P, F = {}) => {
      const H = fe(o, P), xe = H && H._f;
      if (xe) {
        const ue = xe.refs ? xe.refs[0] : xe.ref;
        ue.focus && (ue.focus(), F.shouldSelect && ue.select());
      }
    },
    getFieldState: z
  };
}
function Vw(e = {}) {
  const t = N.useRef(), n = N.useRef(), [r, o] = N.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: kn(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: kn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Fw(e, () => o((s) => ({ ...s }))),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, Wl({
    subject: a._subjects.state,
    next: (s) => {
      $m(s, a._proxyFormState, a._updateFormState, !0) && o({ ...a._formState });
    }
  }), N.useEffect(() => {
    e.values && !Gn(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values) : a._resetDefaultValues();
  }, [e.values, a]), N.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), t.current.formState = ym(r, a), t.current;
}
const Uw = /* @__PURE__ */ M((e, t) => /* @__PURE__ */ x(ie.label, E({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var r;
    (r = e.onMouseDown) === null || r === void 0 || r.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), Om = Uw, Ww = Wr(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), la = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Om,
  {
    ref: n,
    className: A(Ww(), e),
    ...t
  }
));
la.displayName = Om.displayName;
const Bw = Ew, Dm = C.createContext(
  {}
), Eo = ({
  ...e
}) => /* @__PURE__ */ p.exports.jsx(Dm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ p.exports.jsx(Pw, { ...e }) }), Ks = () => {
  const e = C.useContext(Dm), t = C.useContext(Rm), { getFieldState: n, formState: r } = Ys(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, Rm = C.createContext(
  {}
), kr = C.forwardRef(({ className: e, ...t }, n) => {
  const r = C.useId();
  return /* @__PURE__ */ p.exports.jsx(Rm.Provider, { value: { id: r }, children: /* @__PURE__ */ p.exports.jsx("div", { ref: n, className: A("space-y-2", e), ...t }) });
});
kr.displayName = "FormItem";
const Mr = C.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = Ks();
  return /* @__PURE__ */ p.exports.jsx(
    la,
    {
      ref: n,
      className: A(r && "text-destructive", e),
      htmlFor: o,
      ...t
    }
  );
});
Mr.displayName = "FormLabel";
const So = C.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = Ks();
  return /* @__PURE__ */ p.exports.jsx(
    Jt,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
So.displayName = "FormControl";
const No = C.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Ks();
  return /* @__PURE__ */ p.exports.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: A("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
No.displayName = "FormDescription";
const zw = C.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = Ks(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ p.exports.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: A("text-sm font-medium text-destructive", e),
      ...n,
      children: s
    }
  ) : null;
});
zw.displayName = "FormMessage";
const Am = "Dialog", [Im, jm] = Ke(Am), [Hw, Gt] = Im(Am), Yw = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = I(null), c = I(null), [l = !1, u] = Qe({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(Hw, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: tt(),
    titleId: tt(),
    descriptionId: tt(),
    open: l,
    onOpenChange: u,
    onOpenToggle: pe(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, Kw = "DialogTrigger", Gw = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(Kw, n), a = we(t, o.triggerRef);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": Yl(o.open)
  }, r, {
    ref: a,
    onClick: V(e.onClick, o.onOpenToggle)
  }));
}), Lm = "DialogPortal", [Zw, Fm] = Im(Lm, {
  forceMount: void 0
}), qw = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Gt(Lm, t);
  return /* @__PURE__ */ x(Zw, {
    scope: t,
    forceMount: n
  }, St.map(
    r,
    (s) => /* @__PURE__ */ x(Ze, {
      present: n || a.open
    }, /* @__PURE__ */ x(Fs, {
      asChild: !0,
      container: o
    }, s))
  ));
}, xc = "DialogOverlay", Xw = /* @__PURE__ */ M((e, t) => {
  const n = Fm(xc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gt(xc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(Jw, E({}, o, {
    ref: t
  }))) : null;
}), Jw = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(xc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(Bs, {
      as: Jt,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(ie.div, E({
      "data-state": Yl(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Or = "DialogContent", Qw = /* @__PURE__ */ M((e, t) => {
  const n = Fm(Or, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Gt(Or, e.__scopeDialog);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(e7, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(t7, E({}, o, {
    ref: t
  })));
}), e7 = /* @__PURE__ */ M((e, t) => {
  const n = Gt(Or, e.__scopeDialog), r = I(null), o = we(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return oa(a);
  }, []), /* @__PURE__ */ x(Vm, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: V(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: V(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), t7 = /* @__PURE__ */ M((e, t) => {
  const n = Gt(Or, e.__scopeDialog), r = I(!1), o = I(!1);
  return /* @__PURE__ */ x(Vm, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), Vm = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Gt(Or, n), c = I(null), l = we(t, c);
  return As(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(Is, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(ir, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Yl(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Um = "DialogTitle", n7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(Um, n);
  return /* @__PURE__ */ x(ie.h2, E({
    id: o.titleId
  }, r, {
    ref: t
  }));
}), r7 = "DialogDescription", o7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(r7, n);
  return /* @__PURE__ */ x(ie.p, E({
    id: o.descriptionId
  }, r, {
    ref: t
  }));
}), a7 = "DialogClose", s7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = Gt(a7, n);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button"
  }, r, {
    ref: t,
    onClick: V(
      e.onClick,
      () => o.onOpenChange(!1)
    )
  }));
});
function Yl(e) {
  return e ? "open" : "closed";
}
const i7 = "DialogTitleWarning", [c7, zT] = Xy(i7, {
  contentName: Or,
  titleName: Um,
  docsSlug: "dialog"
}), Kl = Yw, Gl = Gw, ua = qw, da = Xw, fa = Qw, pa = n7, ma = o7, va = s7, l7 = Kl, HT = Gl, Wm = ({
  className: e,
  children: t,
  ...n
}) => /* @__PURE__ */ p.exports.jsx(ua, { className: A(e), ...n, children: /* @__PURE__ */ p.exports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-4", children: t }) });
Wm.displayName = ua.displayName;
const Bm = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  da,
  {
    ref: n,
    className: A(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      e
    ),
    ...t
  }
));
Bm.displayName = da.displayName;
const zm = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(Wm, { children: [
  /* @__PURE__ */ p.exports.jsx(Bm, {}),
  /* @__PURE__ */ p.exports.jsxs(
    fa,
    {
      ref: r,
      className: A(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        e
      ),
      ...n,
      children: [
        t,
        !n["aria-modal"] && /* @__PURE__ */ p.exports.jsxs(va, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p.exports.jsx(tl, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
zm.displayName = fa.displayName;
const u7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
u7.displayName = "DialogHeader";
const d7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
d7.displayName = "DialogFooter";
const f7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  pa,
  {
    ref: n,
    className: A(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
f7.displayName = pa.displayName;
const p7 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  ma,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
p7.displayName = ma.displayName;
const yc = C.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
    "input",
    {
      type: t,
      className: A(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
yc.displayName = "InputUI";
function Hm({ children: e, id: t, form: n, label: r, classNameContainer: o, description: a, defaultValue: s, icon: i, iconDirection: c = "left", ...l }) {
  const [u, d] = C.useState(!1), f = () => c === "left" && (i || l.type === "password") ? "pl-9" : c === "right" ? "pr-9" : "";
  return l.type === "password" ? /* @__PURE__ */ p.exports.jsx(
    Eo,
    {
      control: n.control,
      defaultValue: s,
      name: t,
      render: ({ field: m, formState: v }) => {
        var h;
        return /* @__PURE__ */ p.exports.jsxs(kr, { className: A("w-full", o), children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
              r,
              " "
            ] }),
            ((h = v == null ? void 0 : v.errors[t]) == null ? void 0 : h.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              v.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ p.exports.jsx(No, { className: "text-xs", children: a }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ p.exports.jsx(So, { children: /* @__PURE__ */ p.exports.jsxs("div", { className: "relative", children: [
            c === "left" && /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: /* @__PURE__ */ p.exports.jsx(
              "button",
              {
                type: "button",
                onClick: () => d((g) => !g),
                className: "absolute inset-y-0 left-0 flex items-center pl-3 z-50",
                children: u ? /* @__PURE__ */ p.exports.jsx(Yu, { size: 18 }) : /* @__PURE__ */ p.exports.jsx(Hu, { size: 18 })
              }
            ) }),
            /* @__PURE__ */ p.exports.jsx(
              yc,
              {
                ...m,
                ...l,
                className: A(f(), l.className),
                type: u ? "text" : "password"
              }
            ),
            c === "right" && /* @__PURE__ */ p.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 z-10", children: /* @__PURE__ */ p.exports.jsx(
              "button",
              {
                type: "button",
                tabIndex: -1,
                onClick: () => d((g) => !g),
                children: u ? /* @__PURE__ */ p.exports.jsx(Yu, { size: 18 }) : /* @__PURE__ */ p.exports.jsx(Hu, { size: 18 })
              }
            ) })
          ] }) })
        ] });
      }
    }
  ) : /* @__PURE__ */ p.exports.jsx(
    Eo,
    {
      control: n.control,
      name: t,
      defaultValue: s,
      render: ({ field: m, formState: v }) => {
        var h;
        return /* @__PURE__ */ p.exports.jsxs(kr, { className: A("w-full", o), children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
            r && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
              r,
              " "
            ] }),
            ((h = v == null ? void 0 : v.errors[t]) == null ? void 0 : h.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
              "* ",
              v.errors[t].message
            ] })
          ] }),
          a && /* @__PURE__ */ p.exports.jsx(No, { className: "text-xs", children: a }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
          /* @__PURE__ */ p.exports.jsxs("div", { className: "relative", children: [
            c === "left" && i && /* @__PURE__ */ p.exports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none", children: i }),
            /* @__PURE__ */ p.exports.jsx(So, { children: /* @__PURE__ */ p.exports.jsx(
              yc,
              {
                ...m,
                ...l,
                className: f()
              }
            ) }),
            c === "right" && i && /* @__PURE__ */ p.exports.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: i })
          ] })
        ] });
      }
    }
  );
}
const m7 = (e) => e.replace(/[\.\s]/g, "").replace(/(\d{1,3})(?=(\d{3})+(?:\.\d+)?$)/g, "$1."), v7 = (e) => {
  /[0-9.]/.test(e.key) || e.preventDefault();
}, Od = (e) => {
  const t = [
    ao.VENEZUELAN,
    ao.JURIDICAL,
    ao.FOREIGN,
    ao.PASSPORT,
    ao.GOVERNMENTAL
  ];
  return !e || e.length === 0 ? t.map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  })) : t.filter((o) => e.includes(o.value)).map((o) => ({
    label: o.key,
    value: o.key.toLowerCase()
  }));
}, Ct = {
  type: {
    id: "pidType",
    tabIndex: void 0,
    buttonClassName: "w-[80px]",
    popoverClassName: "w-[90px]",
    notFoundLabel: "Codigo No Encontrado",
    ctaPlaceholder: "Tipo",
    placeholder: "Buscar...",
    defaultValue: Od(["VENEZUELAN"])[0].value,
    label: "Cedula",
    items: Od(["VENEZUELAN", "FOREIGN", "PASSPORT"])
  },
  number: {
    id: "pidNumber",
    tabIndex: void 0,
    placeholder: "00.000.000",
    maxLength: 10,
    defaultValue: ""
  }
};
function YT({
  form: e,
  pid: t = Ct
}) {
  var r, o, a, s, i, c, l, u, d, f, m, v, h, g;
  const n = (y) => {
    const { value: b } = y.target, $ = m7(b);
    e.setValue("pidNumber", $);
  };
  return /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex justify-start items-end gap-x-2", children: [
    /* @__PURE__ */ p.exports.jsx(
      d8,
      {
        id: "pidType",
        form: e,
        label: ((r = t == null ? void 0 : t.type) == null ? void 0 : r.label) || Ct.type.label,
        items: ((o = t == null ? void 0 : t.type) == null ? void 0 : o.items) || Ct.type.items,
        tabIndex: ((a = t == null ? void 0 : t.type) == null ? void 0 : a.tabIndex) || Ct.type.tabIndex,
        placeholder: ((s = t == null ? void 0 : t.type) == null ? void 0 : s.placeholder) || Ct.type.placeholder,
        defaultValue: ((i = t == null ? void 0 : t.type) == null ? void 0 : i.defaultValue) || Ct.type.defaultValue,
        notFoundLabel: ((c = t == null ? void 0 : t.type) == null ? void 0 : c.notFoundLabel) || Ct.type.notFoundLabel,
        ctaPlaceholder: ((l = t == null ? void 0 : t.type) == null ? void 0 : l.ctaPlaceholder) || Ct.type.ctaPlaceholder,
        buttonClassName: ((u = t == null ? void 0 : t.type) == null ? void 0 : u.buttonClassName) || Ct.type.buttonClassName,
        popoverClassName: ((d = t == null ? void 0 : t.type) == null ? void 0 : d.popoverClassName) || Ct.type.popoverClassName,
        disabled: ((f = t == null ? void 0 : t.type) == null ? void 0 : f.disabled) || Ct.type.disabled
      }
    ),
    /* @__PURE__ */ p.exports.jsx(
      Hm,
      {
        id: "pidNumber",
        form: e,
        type: "text",
        defaultValue: (m = t == null ? void 0 : t.number) == null ? void 0 : m.defaultValue,
        onKeyPress: v7,
        onKeyUp: n,
        tabIndex: ((v = t == null ? void 0 : t.number) == null ? void 0 : v.tabIndex) || Ct.number.tabIndex,
        maxLength: ((h = t == null ? void 0 : t.number) == null ? void 0 : h.maxLength) || Ct.number.maxLength,
        placeholder: ((g = t == null ? void 0 : t.number) == null ? void 0 : g.placeholder) || Ct.number.placeholder
      }
    )
  ] });
}
const Ym = "Popover", [Km, KT] = Ke(Ym, [
  an
]), Zl = an(), [h7, Zr] = Km(Ym), g7 = (e) => {
  const { __scopePopover: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !1 } = e, i = Zl(t), c = I(null), [l, u] = X(!1), [d = !1, f] = Qe({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(Gr, i, /* @__PURE__ */ x(h7, {
    scope: t,
    contentId: tt(),
    triggerRef: c,
    open: d,
    onOpenChange: f,
    onOpenToggle: pe(
      () => f(
        (m) => !m
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: pe(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: pe(
      () => u(!1),
      []
    ),
    modal: s
  }, n));
}, b7 = "PopoverTrigger", x7 = /* @__PURE__ */ M((e, t) => {
  const { __scopePopover: n, ...r } = e, o = Zr(b7, n), a = Zl(n), s = we(t, o.triggerRef), i = /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": o.open,
    "aria-controls": o.contentId,
    "data-state": qm(o.open)
  }, r, {
    ref: s,
    onClick: V(e.onClick, o.onOpenToggle)
  }));
  return o.hasCustomAnchor ? i : /* @__PURE__ */ x(na, E({
    asChild: !0
  }, a), i);
}), Gm = "PopoverPortal", [y7, $7] = Km(Gm, {
  forceMount: void 0
}), w7 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Zr(Gm, t);
  return /* @__PURE__ */ x(y7, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ze, {
    present: n || a.open
  }, /* @__PURE__ */ x(Fs, {
    asChild: !0,
    container: o
  }, r)));
}, To = "PopoverContent", _7 = /* @__PURE__ */ M((e, t) => {
  const n = $7(To, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Zr(To, e.__scopePopover);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(C7, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(E7, E({}, o, {
    ref: t
  })));
}), C7 = /* @__PURE__ */ M((e, t) => {
  const n = Zr(To, e.__scopePopover), r = I(null), o = we(t, r), a = I(!1);
  return Q(() => {
    const s = r.current;
    if (s)
      return oa(s);
  }, []), /* @__PURE__ */ x(Bs, {
    as: Jt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Zm, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (s) => {
      var i;
      s.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: V(e.onPointerDownOutside, (s) => {
      const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
      a.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: V(
      e.onFocusOutside,
      (s) => s.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), E7 = /* @__PURE__ */ M((e, t) => {
  const n = Zr(To, e.__scopePopover), r = I(!1), o = I(!1);
  return /* @__PURE__ */ x(Zm, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, a), !a.defaultPrevented) {
        var i;
        r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
      }
      r.current = !1, o.current = !1;
    },
    onInteractOutside: (a) => {
      var s, i;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
      const c = a.target;
      ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
    }
  }));
}), Zm = /* @__PURE__ */ M((e, t) => {
  const { __scopePopover: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, disableOutsidePointerEvents: s, onEscapeKeyDown: i, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = Zr(To, n), m = Zl(n);
  return As(), /* @__PURE__ */ x(Is, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onInteractOutside: u,
    onEscapeKeyDown: i,
    onPointerDownOutside: c,
    onFocusOutside: l,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ x(ra, E({
    "data-state": qm(f.open),
    role: "dialog",
    id: f.contentId
  }, m, d, {
    ref: t,
    style: {
      ...d.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function qm(e) {
  return e ? "open" : "closed";
}
const S7 = g7, N7 = x7, T7 = w7, Xm = _7, ls = S7, us = N7, Po = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ p.exports.jsx(T7, { children: /* @__PURE__ */ p.exports.jsx(
  Xm,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: A(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
Po.displayName = Xm.displayName;
const Jm = C.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
    "textarea",
    {
      className: A(
        "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Jm.displayName = "TextareaUI";
const GT = ({ id: e, form: t, label: n, className: r, description: o, placeholder: a, containerClassName: s, ...i }) => /* @__PURE__ */ p.exports.jsx(
  Eo,
  {
    control: t.control,
    name: e,
    render: ({ field: c, formState: l }) => {
      var u;
      return /* @__PURE__ */ p.exports.jsxs(kr, { className: A("w-full", s), children: [
        /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          n && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
            n,
            " "
          ] }),
          ((u = l == null ? void 0 : l.errors[e]) == null ? void 0 : u.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            l.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ p.exports.jsx(No, { className: "text-xs", children: o }),
        /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ p.exports.jsx(So, { children: /* @__PURE__ */ p.exports.jsx(
          Jm,
          {
            placeholder: a,
            className: A("resize-none", r),
            ...c,
            ...i
          }
        ) })
      ] });
    }
  }
);
function ko(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function qr(e) {
  const t = I({
    value: e,
    previous: e
  });
  return xt(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const Qm = /* @__PURE__ */ M((e, t) => /* @__PURE__ */ x(ie.span, E({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), ev = Qm, P7 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], k7 = [
  " ",
  "Enter"
], Gs = "Select", [Zs, ql, M7] = Vn(Gs), [Xr, ZT] = Ke(Gs, [
  M7,
  an
]), Xl = an(), [O7, lr] = Xr(Gs), [D7, R7] = Xr(Gs), A7 = (e) => {
  const { __scopeSelect: t, children: n, open: r, defaultOpen: o, onOpenChange: a, value: s, defaultValue: i, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: m } = e, v = Xl(t), [h, g] = X(null), [y, b] = X(null), [$, _] = X(!1), w = on(l), [T = !1, k] = Qe({
    prop: r,
    defaultProp: o,
    onChange: a
  }), [j, R] = Qe({
    prop: s,
    defaultProp: i,
    onChange: c
  }), ee = I(null), re = h ? Boolean(h.closest("form")) : !0, [U, B] = X(/* @__PURE__ */ new Set()), W = Array.from(U).map(
    (G) => G.props.value
  ).join(";");
  return /* @__PURE__ */ x(Gr, v, /* @__PURE__ */ x(O7, {
    required: m,
    scope: t,
    trigger: h,
    onTriggerChange: g,
    valueNode: y,
    onValueNodeChange: b,
    valueNodeHasChildren: $,
    onValueNodeHasChildrenChange: _,
    contentId: tt(),
    value: j,
    onValueChange: R,
    open: T,
    onOpenChange: k,
    dir: w,
    triggerPointerDownPosRef: ee,
    disabled: f
  }, /* @__PURE__ */ x(Zs.Provider, {
    scope: t
  }, /* @__PURE__ */ x(D7, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: pe((G) => {
      B(
        (J) => new Set(J).add(G)
      );
    }, []),
    onNativeOptionRemove: pe((G) => {
      B((J) => {
        const Y = new Set(J);
        return Y.delete(G), Y;
      });
    }, [])
  }, n)), re ? /* @__PURE__ */ x(rv, {
    key: W,
    "aria-hidden": !0,
    required: m,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: j,
    onChange: (G) => R(G.target.value),
    disabled: f
  }, j === void 0 ? /* @__PURE__ */ x("option", {
    value: ""
  }) : null, Array.from(U)) : null));
}, I7 = "SelectTrigger", j7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Xl(n), s = lr(I7, n), i = s.disabled || r, c = we(t, s.onTriggerChange), l = ql(n), [u, d, f] = ov((v) => {
    const h = l().filter(
      (b) => !b.disabled
    ), g = h.find(
      (b) => b.value === s.value
    ), y = av(h, v, g);
    y !== void 0 && s.onValueChange(y.value);
  }), m = () => {
    i || (s.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ x(na, E({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "combobox",
    "aria-controls": s.contentId,
    "aria-expanded": s.open,
    "aria-required": s.required,
    "aria-autocomplete": "none",
    dir: s.dir,
    "data-state": s.open ? "open" : "closed",
    disabled: i,
    "data-disabled": i ? "" : void 0,
    "data-placeholder": s.value === void 0 ? "" : void 0
  }, o, {
    ref: c,
    onClick: V(o.onClick, (v) => {
      v.currentTarget.focus();
    }),
    onPointerDown: V(o.onPointerDown, (v) => {
      const h = v.target;
      h.hasPointerCapture(v.pointerId) && h.releasePointerCapture(v.pointerId), v.button === 0 && v.ctrlKey === !1 && (m(), s.triggerPointerDownPosRef.current = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      }, v.preventDefault());
    }),
    onKeyDown: V(o.onKeyDown, (v) => {
      const h = u.current !== "";
      !(v.ctrlKey || v.altKey || v.metaKey) && v.key.length === 1 && d(v.key), !(h && v.key === " ") && P7.includes(v.key) && (m(), v.preventDefault());
    })
  })));
}), L7 = "SelectValue", F7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s, ...i } = e, c = lr(L7, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = we(t, c.onValueNodeChange);
  return ft(() => {
    l(u);
  }, [
    l,
    u
  ]), /* @__PURE__ */ x(ie.span, E({}, i, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), c.value === void 0 && s !== void 0 ? s : a);
}), V7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, children: r, ...o } = e;
  return /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, o, {
    ref: t
  }), r || "▼");
}), U7 = (e) => /* @__PURE__ */ x(Fs, E({
  asChild: !0
}, e)), Dr = "SelectContent", W7 = /* @__PURE__ */ M((e, t) => {
  const n = lr(Dr, e.__scopeSelect), [r, o] = X();
  if (ft(() => {
    o(new DocumentFragment());
  }, []), !n.open) {
    const a = r;
    return a ? /* @__PURE__ */ Jc(/* @__PURE__ */ x(tv, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x(Zs.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ x(B7, E({}, e, {
    ref: t
  }));
}), fn = 10, [tv, qs] = Xr(Dr), B7 = /* @__PURE__ */ M((e, t) => {
  const {
    __scopeSelect: n,
    position: r = "item-aligned",
    onCloseAutoFocus: o,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: m,
    sticky: v,
    hideWhenDetached: h,
    avoidCollisions: g,
    //
    ...y
  } = e, b = lr(Dr, n), [$, _] = X(null), [w, T] = X(null), k = we(
    t,
    (te) => _(te)
  ), [j, R] = X(null), [ee, re] = X(null), U = ql(n), [B, W] = X(!1), G = I(!1);
  Q(() => {
    if ($)
      return oa($);
  }, [
    $
  ]), As();
  const J = pe((te) => {
    const [le, ...ve] = U().map(
      (K) => K.ref.current
    ), [q] = ve.slice(-1), he = document.activeElement;
    for (const K of te)
      if (K === he || (K == null || K.scrollIntoView({
        block: "nearest"
      }), K === le && w && (w.scrollTop = 0), K === q && w && (w.scrollTop = w.scrollHeight), K == null || K.focus(), document.activeElement !== he))
        return;
  }, [
    U,
    w
  ]), Y = pe(
    () => J([
      j,
      $
    ]),
    [
      J,
      j,
      $
    ]
  );
  Q(() => {
    B && Y();
  }, [
    B,
    Y
  ]);
  const { onOpenChange: Z, triggerPointerDownPosRef: D } = b;
  Q(() => {
    if ($) {
      let te = {
        x: 0,
        y: 0
      };
      const le = (q) => {
        var he, K, Re, Ve;
        te = {
          x: Math.abs(Math.round(q.pageX) - ((he = (K = D.current) === null || K === void 0 ? void 0 : K.x) !== null && he !== void 0 ? he : 0)),
          y: Math.abs(Math.round(q.pageY) - ((Re = (Ve = D.current) === null || Ve === void 0 ? void 0 : Ve.y) !== null && Re !== void 0 ? Re : 0))
        };
      }, ve = (q) => {
        te.x <= 10 && te.y <= 10 ? q.preventDefault() : $.contains(q.target) || Z(!1), document.removeEventListener("pointermove", le), D.current = null;
      };
      return D.current !== null && (document.addEventListener("pointermove", le), document.addEventListener("pointerup", ve, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", le), document.removeEventListener("pointerup", ve, {
          capture: !0
        });
      };
    }
  }, [
    $,
    Z,
    D
  ]), Q(() => {
    const te = () => Z(!1);
    return window.addEventListener("blur", te), window.addEventListener("resize", te), () => {
      window.removeEventListener("blur", te), window.removeEventListener("resize", te);
    };
  }, [
    Z
  ]);
  const [O, L] = ov((te) => {
    const le = U().filter(
      (he) => !he.disabled
    ), ve = le.find(
      (he) => he.ref.current === document.activeElement
    ), q = av(le, te, ve);
    q && setTimeout(
      () => q.ref.current.focus()
    );
  }), z = pe((te, le, ve) => {
    const q = !G.current && !ve;
    (b.value !== void 0 && b.value === le || q) && (R(te), q && (G.current = !0));
  }, [
    b.value
  ]), oe = pe(
    () => $ == null ? void 0 : $.focus(),
    [
      $
    ]
  ), ce = pe((te, le, ve) => {
    const q = !G.current && !ve;
    (b.value !== void 0 && b.value === le || q) && re(te);
  }, [
    b.value
  ]), ye = r === "popper" ? Dd : z7, be = ye === Dd ? {
    side: i,
    sideOffset: c,
    align: l,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: m,
    sticky: v,
    hideWhenDetached: h,
    avoidCollisions: g
  } : {};
  return /* @__PURE__ */ x(tv, {
    scope: n,
    content: $,
    viewport: w,
    onViewportChange: T,
    itemRefCallback: z,
    selectedItem: j,
    onItemLeave: oe,
    itemTextRefCallback: ce,
    focusSelectedItem: Y,
    selectedItemText: ee,
    position: r,
    isPositioned: B,
    searchRef: O
  }, /* @__PURE__ */ x(Bs, {
    as: Jt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Is, {
    asChild: !0,
    trapped: b.open,
    onMountAutoFocus: (te) => {
      te.preventDefault();
    },
    onUnmountAutoFocus: V(o, (te) => {
      var le;
      (le = b.trigger) === null || le === void 0 || le.focus({
        preventScroll: !0
      }), te.preventDefault();
    })
  }, /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (te) => te.preventDefault(),
    onDismiss: () => b.onOpenChange(!1)
  }, /* @__PURE__ */ x(ye, E({
    role: "listbox",
    id: b.contentId,
    "data-state": b.open ? "open" : "closed",
    dir: b.dir,
    onContextMenu: (te) => te.preventDefault()
  }, y, be, {
    onPlaced: () => W(!0),
    ref: k,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...y.style
    },
    onKeyDown: V(y.onKeyDown, (te) => {
      const le = te.ctrlKey || te.altKey || te.metaKey;
      if (te.key === "Tab" && te.preventDefault(), !le && te.key.length === 1 && L(te.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(te.key)) {
        let q = U().filter(
          (he) => !he.disabled
        ).map(
          (he) => he.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(te.key) && (q = q.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(te.key)) {
          const he = te.target, K = q.indexOf(he);
          q = q.slice(K + 1);
        }
        setTimeout(
          () => J(q)
        ), te.preventDefault();
      }
    })
  }))))));
}), z7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = lr(Dr, n), s = qs(Dr, n), [i, c] = X(null), [l, u] = X(null), d = we(
    t,
    (k) => u(k)
  ), f = ql(n), m = I(!1), v = I(!0), { viewport: h, selectedItem: g, selectedItemText: y, focusSelectedItem: b } = s, $ = pe(() => {
    if (a.trigger && a.valueNode && i && l && h && g && y) {
      const k = a.trigger.getBoundingClientRect(), j = l.getBoundingClientRect(), R = a.valueNode.getBoundingClientRect(), ee = y.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const he = ee.left - j.left, K = R.left - he, Re = k.left - K, Ve = k.width + Re, lt = Math.max(Ve, j.width), P = window.innerWidth - fn, F = ko(K, [
          fn,
          P - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.left = F + "px";
      } else {
        const he = j.right - ee.right, K = window.innerWidth - R.right - he, Re = window.innerWidth - k.right - K, Ve = k.width + Re, lt = Math.max(Ve, j.width), P = window.innerWidth - fn, F = ko(K, [
          fn,
          P - lt
        ]);
        i.style.minWidth = Ve + "px", i.style.right = F + "px";
      }
      const re = f(), U = window.innerHeight - fn * 2, B = h.scrollHeight, W = window.getComputedStyle(l), G = parseInt(W.borderTopWidth, 10), J = parseInt(W.paddingTop, 10), Y = parseInt(W.borderBottomWidth, 10), Z = parseInt(W.paddingBottom, 10), D = G + J + B + Z + Y, O = Math.min(g.offsetHeight * 5, D), L = window.getComputedStyle(h), z = parseInt(L.paddingTop, 10), oe = parseInt(L.paddingBottom, 10), ce = k.top + k.height / 2 - fn, ye = U - ce, be = g.offsetHeight / 2, te = g.offsetTop + be, le = G + J + te, ve = D - le;
      if (le <= ce) {
        const he = g === re[re.length - 1].ref.current;
        i.style.bottom = "0px";
        const K = l.clientHeight - h.offsetTop - h.offsetHeight, Re = Math.max(ye, be + (he ? oe : 0) + K + Y), Ve = le + Re;
        i.style.height = Ve + "px";
      } else {
        const he = g === re[0].ref.current;
        i.style.top = "0px";
        const Re = Math.max(ce, G + h.offsetTop + (he ? z : 0) + be) + ve;
        i.style.height = Re + "px", h.scrollTop = le - ce + h.offsetTop;
      }
      i.style.margin = `${fn}px 0`, i.style.minHeight = O + "px", i.style.maxHeight = U + "px", r == null || r(), requestAnimationFrame(
        () => m.current = !0
      );
    }
  }, [
    f,
    a.trigger,
    a.valueNode,
    i,
    l,
    h,
    g,
    y,
    a.dir,
    r
  ]);
  ft(
    () => $(),
    [
      $
    ]
  );
  const [_, w] = X();
  ft(() => {
    l && w(window.getComputedStyle(l).zIndex);
  }, [
    l
  ]);
  const T = pe((k) => {
    k && v.current === !0 && ($(), b == null || b(), v.current = !1);
  }, [
    $,
    b
  ]);
  return /* @__PURE__ */ x(H7, {
    scope: n,
    contentWrapper: i,
    shouldExpandOnScrollRef: m,
    onScrollButtonChange: T
  }, /* @__PURE__ */ x("div", {
    ref: c,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: _
    }
  }, /* @__PURE__ */ x(ie.div, E({}, o, {
    ref: d,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...o.style
    }
  }))));
}), Dd = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, align: r = "start", collisionPadding: o = fn, ...a } = e, s = Xl(n);
  return /* @__PURE__ */ x(ra, E({}, s, a, {
    ref: t,
    align: r,
    collisionPadding: o,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [H7, Y7] = Xr(Dr, {}), Rd = "SelectViewport", K7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = qs(Rd, n), a = Y7(Rd, n), s = we(t, o.onViewportChange), i = I(0);
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(Zs.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, E({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, r, {
    ref: s,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...r.style
    },
    onScroll: V(r.onScroll, (c) => {
      const l = c.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const f = Math.abs(i.current - l.scrollTop);
        if (f > 0) {
          const m = window.innerHeight - fn * 2, v = parseFloat(u.style.minHeight), h = parseFloat(u.style.height), g = Math.max(v, h);
          if (g < m) {
            const y = g + f, b = Math.min(m, y), $ = y - b;
            u.style.height = b + "px", u.style.bottom === "0px" && (l.scrollTop = $ > 0 ? $ : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      i.current = l.scrollTop;
    })
  }))));
}), G7 = "SelectGroup", [Z7, q7] = Xr(G7), X7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = tt();
  return /* @__PURE__ */ x(Z7, {
    scope: n,
    id: o
  }, /* @__PURE__ */ x(ie.div, E({
    role: "group",
    "aria-labelledby": o
  }, r, {
    ref: t
  })));
}), J7 = "SelectLabel", Q7 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e, o = q7(J7, n);
  return /* @__PURE__ */ x(ie.div, E({
    id: o.id
  }, r, {
    ref: t
  }));
}), $c = "SelectItem", [e4, nv] = Xr($c), t4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e, i = lr($c, n), c = qs($c, n), l = i.value === r, [u, d] = X(a ?? ""), [f, m] = X(!1), v = we(t, (y) => {
    var b;
    return (b = c.itemRefCallback) === null || b === void 0 ? void 0 : b.call(c, y, r, o);
  }), h = tt(), g = () => {
    o || (i.onValueChange(r), i.onOpenChange(!1));
  };
  return /* @__PURE__ */ x(e4, {
    scope: n,
    value: r,
    disabled: o,
    textId: h,
    isSelected: l,
    onItemTextChange: pe((y) => {
      d((b) => {
        var $;
        return b || (($ = y == null ? void 0 : y.textContent) !== null && $ !== void 0 ? $ : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ x(Zs.ItemSlot, {
    scope: n,
    value: r,
    disabled: o,
    textValue: u
  }, /* @__PURE__ */ x(ie.div, E({
    role: "option",
    "aria-labelledby": h,
    "data-highlighted": f ? "" : void 0,
    "aria-selected": l && f,
    "data-state": l ? "checked" : "unchecked",
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0,
    tabIndex: o ? void 0 : -1
  }, s, {
    ref: v,
    onFocus: V(
      s.onFocus,
      () => m(!0)
    ),
    onBlur: V(
      s.onBlur,
      () => m(!1)
    ),
    onPointerUp: V(s.onPointerUp, g),
    onPointerMove: V(s.onPointerMove, (y) => {
      if (o) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      } else
        y.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: V(s.onPointerLeave, (y) => {
      if (y.currentTarget === document.activeElement) {
        var b;
        (b = c.onItemLeave) === null || b === void 0 || b.call(c);
      }
    }),
    onKeyDown: V(s.onKeyDown, (y) => {
      var b;
      ((b = c.searchRef) === null || b === void 0 ? void 0 : b.current) !== "" && y.key === " " || (k7.includes(y.key) && g(), y.key === " " && y.preventDefault());
    })
  }))));
}), Aa = "SelectItemText", n4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, className: r, style: o, ...a } = e, s = lr(Aa, n), i = qs(Aa, n), c = nv(Aa, n), l = R7(Aa, n), [u, d] = X(null), f = we(
    t,
    (y) => d(y),
    c.onItemTextChange,
    (y) => {
      var b;
      return (b = i.itemTextRefCallback) === null || b === void 0 ? void 0 : b.call(i, y, c.value, c.disabled);
    }
  ), m = u == null ? void 0 : u.textContent, v = xt(
    () => /* @__PURE__ */ x("option", {
      key: c.value,
      value: c.value,
      disabled: c.disabled
    }, m),
    [
      c.disabled,
      c.value,
      m
    ]
  ), { onNativeOptionAdd: h, onNativeOptionRemove: g } = l;
  return ft(() => (h(v), () => g(v)), [
    h,
    g,
    v
  ]), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(ie.span, E({
    id: c.textId
  }, a, {
    ref: f
  })), c.isSelected && s.valueNode && !s.valueNodeHasChildren ? /* @__PURE__ */ Jc(a.children, s.valueNode) : null);
}), r4 = "SelectItemIndicator", o4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return nv(r4, n).isSelected ? /* @__PURE__ */ x(ie.span, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  })) : null;
}), a4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSelect: n, ...r } = e;
  return /* @__PURE__ */ x(ie.div, E({
    "aria-hidden": !0
  }, r, {
    ref: t
  }));
}), rv = /* @__PURE__ */ M((e, t) => {
  const { value: n, ...r } = e, o = I(null), a = we(t, o), s = qr(n);
  return Q(() => {
    const i = o.current, c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
    if (s !== n && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(i, n), i.dispatchEvent(d);
    }
  }, [
    s,
    n
  ]), /* @__PURE__ */ x(Qm, {
    asChild: !0
  }, /* @__PURE__ */ x("select", E({}, r, {
    ref: a,
    defaultValue: n
  })));
});
rv.displayName = "BubbleSelect";
function ov(e) {
  const t = We(e), n = I(""), r = I(0), o = pe((s) => {
    const i = n.current + s;
    t(i), function c(l) {
      n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(
        () => c(""),
        1e3
      ));
    }(i);
  }, [
    t
  ]), a = pe(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return Q(() => () => window.clearTimeout(r.current), []), [
    n,
    o,
    a
  ];
}
function av(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(
    (l) => l === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = s4(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter(
    (l) => l !== n
  ));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function s4(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const i4 = A7, sv = j7, c4 = F7, l4 = V7, u4 = U7, iv = W7, d4 = K7, f4 = X7, cv = Q7, lv = t4, p4 = n4, m4 = o4, uv = a4, dv = i4, qT = f4, fv = c4, Jl = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  sv,
  {
    ref: r,
    className: A(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p.exports.jsx(l4, { asChild: !0, children: /* @__PURE__ */ p.exports.jsx(xo, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Jl.displayName = sv.displayName;
const Ql = C.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ p.exports.jsx(u4, { children: /* @__PURE__ */ p.exports.jsx(
  iv,
  {
    ref: o,
    className: A(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80",
      n === "popper" && "translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: /* @__PURE__ */ p.exports.jsx(
      d4,
      {
        className: A(
          "p-1",
          n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children: t
      }
    )
  }
) }));
Ql.displayName = iv.displayName;
const v4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  cv,
  {
    ref: n,
    className: A("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
v4.displayName = cv.displayName;
const eu = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  lv,
  {
    ref: r,
    className: A(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(m4, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ p.exports.jsx(p4, { children: t })
    ]
  }
));
eu.displayName = lv.displayName;
const h4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  uv,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
h4.displayName = uv.displayName;
const g4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    ref: n,
    className: A(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
g4.displayName = "Card";
const b4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    ref: n,
    className: A("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
b4.displayName = "CardHeader";
const x4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "h3",
  {
    ref: n,
    className: A(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
x4.displayName = "CardTitle";
const y4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "p",
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
y4.displayName = "CardDescription";
const $4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("div", { ref: n, className: A("p-6 pt-0", e), ...t }));
$4.displayName = "CardContent";
const w4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    ref: n,
    className: A(" flex items-center p-6 pt-0", e),
    ...t
  }
));
w4.displayName = "CardFooter";
const pv = "Checkbox", [_4, XT] = Ke(pv), [C4, E4] = _4(pv), S4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeCheckbox: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = X(null), m = we(
    t,
    ($) => f($)
  ), v = I(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, y] = Qe({
    prop: o,
    defaultProp: a,
    onChange: l
  }), b = I(g);
  return Q(() => {
    const $ = d == null ? void 0 : d.form;
    if ($) {
      const _ = () => y(b.current);
      return $.addEventListener("reset", _), () => $.removeEventListener("reset", _);
    }
  }, [
    d,
    y
  ]), /* @__PURE__ */ x(C4, {
    scope: n,
    state: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "checkbox",
    "aria-checked": Zn(g) ? "mixed" : g,
    "aria-required": s,
    "data-state": mv(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onKeyDown: V(e.onKeyDown, ($) => {
      $.key === "Enter" && $.preventDefault();
    }),
    onClick: V(e.onClick, ($) => {
      y(
        (_) => Zn(_) ? !0 : !_
      ), h && (v.current = $.isPropagationStopped(), v.current || $.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(P4, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), N4 = "CheckboxIndicator", T4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = E4(N4, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || Zn(a.state) || a.state === !0
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": mv(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), P4 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = I(null), s = qr(n), i = ta(t);
  return Q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      c.indeterminate = Zn(n), d.call(c, Zn(n) ? !1 : n), c.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: Zn(n) ? !1 : n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Zn(e) {
  return e === "indeterminate";
}
function mv(e) {
  return Zn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const vv = S4, k4 = T4, M4 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  vv,
  {
    ref: n,
    className: A(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.exports.jsx(
      k4,
      {
        className: A("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" })
      }
    )
  }
));
M4.displayName = vv.displayName;
const hv = "DropdownMenu", [O4, JT] = Ke(hv, [
  aa
]), wt = aa(), [D4, gv] = O4(hv), R4 = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: a, onOpenChange: s, modal: i = !0 } = e, c = wt(t), l = I(null), [u = !1, d] = Qe({
    prop: o,
    defaultProp: a,
    onChange: s
  });
  return /* @__PURE__ */ x(D4, {
    scope: t,
    triggerId: tt(),
    triggerRef: l,
    contentId: tt(),
    open: u,
    onOpenChange: d,
    onOpenToggle: pe(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: i
  }, /* @__PURE__ */ x(Sl, E({}, c, {
    open: u,
    onOpenChange: d,
    dir: r,
    modal: i
  }), n));
}, A4 = "DropdownMenuTrigger", I4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = gv(A4, n), s = wt(n);
  return /* @__PURE__ */ x(Nl, E({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, E({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: Zo(t, a.triggerRef),
    onPointerDown: V(e.onPointerDown, (i) => {
      !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
    }),
    onKeyDown: V(e.onKeyDown, (i) => {
      r || ([
        "Enter",
        " "
      ].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(i.key) && i.preventDefault());
    })
  })));
}), j4 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = wt(t);
  return /* @__PURE__ */ x(Tl, E({}, r, n));
}, L4 = "DropdownMenuContent", F4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = gv(L4, n), a = wt(n), s = I(!1);
  return /* @__PURE__ */ x(Pl, E({
    id: o.contentId,
    "aria-labelledby": o.triggerId
  }, a, r, {
    ref: t,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (i) => {
      var c;
      s.current || (c = o.triggerRef.current) === null || c === void 0 || c.focus(), s.current = !1, i.preventDefault();
    }),
    onInteractOutside: V(e.onInteractOutside, (i) => {
      const c = i.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
      (!o.modal || u) && (s.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), V4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(kl, E({}, o, r, {
    ref: t
  }));
}), U4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ml, E({}, o, r, {
    ref: t
  }));
}), W4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Ol, E({}, o, r, {
    ref: t
  }));
}), B4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Dl, E({}, o, r, {
    ref: t
  }));
}), z4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), H4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), Y4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), K4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), G4 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = wt(t), [i = !1, c] = Qe({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Ll, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, Z4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Fl, E({}, o, r, {
    ref: t
  }));
}), q4 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = wt(n);
  return /* @__PURE__ */ x(Vl, E({}, o, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), X4 = R4, J4 = I4, bv = j4, xv = F4, Q4 = V4, yv = U4, $v = W4, wv = B4, e3 = z4, _v = H4, Cv = Y4, Ev = K4, t3 = G4, Sv = Z4, Nv = q4, QT = X4, eP = J4, tP = Q4, nP = bv, rP = t3, oP = e3, n3 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  Sv,
  {
    ref: o,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p.exports.jsx(qo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
n3.displayName = Sv.displayName;
const r3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Nv,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      e
    ),
    ...t
  }
));
r3.displayName = Nv.displayName;
const o3 = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p.exports.jsx(bv, { children: /* @__PURE__ */ p.exports.jsx(
  xv,
  {
    ref: r,
    sideOffset: t,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
o3.displayName = xv.displayName;
const a3 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  $v,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
a3.displayName = $v.displayName;
const s3 = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  wv,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(Cv, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
s3.displayName = wv.displayName;
const i3 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  _v,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(Cv, { children: /* @__PURE__ */ p.exports.jsx(Os, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
i3.displayName = _v.displayName;
const c3 = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  yv,
  {
    ref: r,
    className: A(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
c3.displayName = yv.displayName;
const l3 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Ev,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
l3.displayName = Ev.displayName;
const u3 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: A("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
u3.displayName = "DropdownMenuShortcut";
const wc = "horizontal", d3 = [
  "horizontal",
  "vertical"
], Tv = /* @__PURE__ */ M((e, t) => {
  const { decorative: n, orientation: r = wc, ...o } = e, a = Pv(r) ? r : wc, i = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ x(ie.div, E({
    "data-orientation": a
  }, i, o, {
    ref: t
  }));
});
Tv.propTypes = {
  orientation(e, t, n) {
    const r = e[t], o = String(r);
    return r && !Pv(r) ? new Error(f3(o, n)) : null;
  }
};
function f3(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${wc}\`.`;
}
function Pv(e) {
  return d3.includes(e);
}
const kv = Tv, tu = C.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ p.exports.jsx(
    kv,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: A(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
tu.displayName = kv.displayName;
function Er(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function p3(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Mv(...e) {
  return (t) => e.forEach(
    (n) => p3(n, t)
  );
}
function ha(...e) {
  return pe(Mv(...e), e);
}
function m3(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = /* @__PURE__ */ mt(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(d) {
      const { scope: f, children: m, ...v } = d, h = (f == null ? void 0 : f[e][c]) || i, g = xt(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ x(h.Provider, {
        value: g
      }, m);
    }
    function u(d, f) {
      const m = (f == null ? void 0 : f[e][c]) || i, v = rt(m);
      if (v)
        return v;
      if (s !== void 0)
        return s;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return l.displayName = a + "Provider", [
      l,
      u
    ];
  }
  const o = () => {
    const a = n.map((s) => /* @__PURE__ */ mt(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return xt(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    r,
    v3(o, ...t)
  ];
}
function v3(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const d = c(a)[`__scope${l}`];
        return {
          ...i,
          ...d
        };
      }, {});
      return xt(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const _c = Boolean(globalThis == null ? void 0 : globalThis.document) ? Ps : () => {
}, h3 = C["useId".toString()] || (() => {
});
let g3 = 0;
function Ai(e) {
  const [t, n] = C.useState(h3());
  return _c(() => {
    e || n(
      (r) => r ?? String(g3++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function er(e) {
  const t = I(e);
  return Q(() => {
    t.current = e;
  }), xt(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function b3({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = x3({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = er(n), c = pe((l) => {
    if (a) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && i(d);
    } else
      o(l);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    c
  ];
}
function x3({ defaultProp: e, onChange: t }) {
  const n = X(e), [r] = n, o = I(r), a = er(t);
  return Q(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
const nu = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e, o = St.toArray(n), a = o.find($3);
  if (a) {
    const s = a.props.children, i = o.map((c) => c === a ? St.count(s) > 1 ? St.only(null) : /* @__PURE__ */ Mn(s) ? s.props.children : null : c);
    return /* @__PURE__ */ x(Cc, E({}, r, {
      ref: t
    }), /* @__PURE__ */ Mn(s) ? /* @__PURE__ */ Ur(s, void 0, i) : null);
  }
  return /* @__PURE__ */ x(Cc, E({}, r, {
    ref: t
  }), n);
});
nu.displayName = "Slot";
const Cc = /* @__PURE__ */ M((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Mn(n) ? /* @__PURE__ */ Ur(n, {
    ...w3(r, n.props),
    ref: Mv(t, n.ref)
  }) : St.count(n) > 1 ? St.only(null) : null;
});
Cc.displayName = "SlotClone";
const y3 = ({ children: e }) => /* @__PURE__ */ x(Ht, null, e);
function $3(e) {
  return /* @__PURE__ */ Mn(e) && e.type === y3;
}
function w3(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...i) => {
      a == null || a(...i), o == null || o(...i);
    } : r === "style" ? n[r] = {
      ...o,
      ...a
    } : r === "className" && (n[r] = [
      o,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const _3 = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Xs = _3.reduce((e, t) => {
  const n = /* @__PURE__ */ M((r, o) => {
    const { asChild: a, ...s } = r, i = a ? nu : t;
    return Q(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(i, E({}, s, {
      ref: o
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function C3(e, t) {
  e && Ms(
    () => e.dispatchEvent(t)
  );
}
function E3(e) {
  const t = er(e);
  Q(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const Ec = "dismissableLayer.update", S3 = "dismissableLayer.pointerDownOutside", N3 = "dismissableLayer.focusOutside";
let Ad;
const T3 = /* @__PURE__ */ mt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), P3 = /* @__PURE__ */ M((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, onDismiss: i, ...c } = e, l = rt(T3), [u, d] = X(null), [, f] = X({}), m = ha(
    t,
    (T) => d(T)
  ), v = Array.from(l.layers), [h] = [
    ...l.layersWithOutsidePointerEventsDisabled
  ].slice(-1), g = v.indexOf(h), y = u ? v.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, $ = y >= g, _ = k3((T) => {
    const k = T.target, j = [
      ...l.branches
    ].some(
      (R) => R.contains(k)
    );
    !$ || j || (o == null || o(T), s == null || s(T), T.defaultPrevented || i == null || i());
  }), w = M3((T) => {
    const k = T.target;
    [
      ...l.branches
    ].some(
      (R) => R.contains(k)
    ) || (a == null || a(T), s == null || s(T), T.defaultPrevented || i == null || i());
  });
  return E3((T) => {
    y === l.layers.size - 1 && (r == null || r(T), !T.defaultPrevented && i && (T.preventDefault(), i()));
  }), Q(() => {
    if (u)
      return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ad = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Id(), () => {
        n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Ad);
      };
  }, [
    u,
    n,
    l
  ]), Q(() => () => {
    u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Id());
  }, [
    u,
    l
  ]), Q(() => {
    const T = () => f({});
    return document.addEventListener(Ec, T), () => document.removeEventListener(Ec, T);
  }, []), /* @__PURE__ */ x(Xs.div, E({}, c, {
    ref: m,
    style: {
      pointerEvents: b ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Er(e.onFocusCapture, w.onFocusCapture),
    onBlurCapture: Er(e.onBlurCapture, w.onBlurCapture),
    onPointerDownCapture: Er(e.onPointerDownCapture, _.onPointerDownCapture)
  }));
});
function k3(e) {
  const t = er(e), n = I(!1), r = I(() => {
  });
  return Q(() => {
    const o = (s) => {
      if (s.target && !n.current) {
        let c = function() {
          Ov(S3, t, i, {
            discrete: !0
          });
        };
        const i = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (document.removeEventListener("click", r.current), r.current = c, document.addEventListener("click", r.current, {
          once: !0
        })) : c();
      }
      n.current = !1;
    }, a = window.setTimeout(() => {
      document.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), document.removeEventListener("pointerdown", o), document.removeEventListener("click", r.current);
    };
  }, [
    t
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function M3(e) {
  const t = er(e), n = I(!1);
  return Q(() => {
    const r = (o) => {
      o.target && !n.current && Ov(N3, t, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", r), () => document.removeEventListener("focusin", r);
  }, [
    t
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Id() {
  const e = new CustomEvent(Ec);
  document.dispatchEvent(e);
}
function Ov(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? C3(o, a) : o.dispatchEvent(a);
}
const Ii = "focusScope.autoFocusOnMount", ji = "focusScope.autoFocusOnUnmount", jd = {
  bubbles: !1,
  cancelable: !0
}, O3 = /* @__PURE__ */ M((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e, [i, c] = X(null), l = er(o), u = er(a), d = I(null), f = ha(
    t,
    (h) => c(h)
  ), m = I({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  Q(() => {
    if (r) {
      let h = function(y) {
        if (m.paused || !i)
          return;
        const b = y.target;
        i.contains(b) ? d.current = b : Yn(d.current, {
          select: !0
        });
      }, g = function(y) {
        m.paused || !i || i.contains(y.relatedTarget) || Yn(d.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", h), document.addEventListener("focusout", g), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", g);
      };
    }
  }, [
    r,
    i,
    m.paused
  ]), Q(() => {
    if (i) {
      Fd.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(Ii, jd);
        i.addEventListener(Ii, l), i.dispatchEvent(y), y.defaultPrevented || (D3(L3(Dv(i)), {
          select: !0
        }), document.activeElement === h && Yn(i));
      }
      return () => {
        i.removeEventListener(Ii, l), setTimeout(() => {
          const y = new CustomEvent(ji, jd);
          i.addEventListener(ji, u), i.dispatchEvent(y), y.defaultPrevented || Yn(h ?? document.body, {
            select: !0
          }), i.removeEventListener(ji, u), Fd.remove(m);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    m
  ]);
  const v = pe((h) => {
    if (!n && !r || m.paused)
      return;
    const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
    if (g && y) {
      const b = h.currentTarget, [$, _] = R3(b);
      $ && _ ? !h.shiftKey && y === _ ? (h.preventDefault(), n && Yn($, {
        select: !0
      })) : h.shiftKey && y === $ && (h.preventDefault(), n && Yn(_, {
        select: !0
      })) : y === b && h.preventDefault();
    }
  }, [
    n,
    r,
    m.paused
  ]);
  return /* @__PURE__ */ x(Xs.div, E({
    tabIndex: -1
  }, s, {
    ref: f,
    onKeyDown: v
  }));
});
function D3(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Yn(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function R3(e) {
  const t = Dv(e), n = Ld(t, e), r = Ld(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Dv(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Ld(e, t) {
  for (const n of e)
    if (!A3(n, {
      upTo: t
    }))
      return n;
}
function A3(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function I3(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Yn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && I3(e) && t && e.select();
  }
}
const Fd = j3();
function j3() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Vd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Vd(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Vd(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function L3(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const F3 = /* @__PURE__ */ M((e, t) => {
  var n;
  const { container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...o } = e;
  return r ? /* @__PURE__ */ Xc.createPortal(/* @__PURE__ */ x(Xs.div, E({}, o, {
    ref: t
  })), r) : null;
});
function V3(e, t) {
  return ks((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Js = (e) => {
  const { present: t, children: n } = e, r = U3(t), o = typeof n == "function" ? n({
    present: r.isPresent
  }) : St.only(n), a = ha(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ Ur(o, {
    ref: a
  }) : null;
};
Js.displayName = "Presence";
function U3(e) {
  const [t, n] = X(), r = I({}), o = I(e), a = I("none"), s = e ? "mounted" : "unmounted", [i, c] = V3(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return Q(() => {
    const l = Ia(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), _c(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const f = a.current, m = Ia(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [
    e,
    c
  ]), _c(() => {
    if (t) {
      const l = (d) => {
        const m = Ia(r.current).includes(d.animationName);
        d.target === t && m && Ms(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Ia(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: pe((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ia(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Li = 0;
function W3() {
  Q(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Ud()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Ud()), Li++, () => {
      Li === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), Li--;
    };
  }, []);
}
function Ud() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Rv = Ip(), Fi = function() {
}, Qs = C.forwardRef(function(e, t) {
  var n = C.useRef(null), r = C.useState({
    onScrollCapture: Fi,
    onWheelCapture: Fi,
    onTouchMoveCapture: Fi
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, m = e.noIsolation, v = e.inert, h = e.allowPinchZoom, g = e.as, y = g === void 0 ? "div" : g, b = yl(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), $ = f, _ = Ap([n, t]), w = pt(pt({}, b), o);
  return C.createElement(
    C.Fragment,
    null,
    u && C.createElement($, { sideCar: Rv, removeScrollBar: l, shards: d, noIsolation: m, inert: v, setCallbacks: a, allowPinchZoom: !!h, lockRef: n }),
    s ? C.cloneElement(C.Children.only(i), pt(pt({}, w), { ref: _ })) : C.createElement(y, pt({}, w, { className: c, ref: _ }), i)
  );
});
Qs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qs.classNames = {
  fullWidth: vo,
  zeroRight: mo
};
var Sc = !1;
if (typeof window < "u")
  try {
    var ja = Object.defineProperty({}, "passive", {
      get: function() {
        return Sc = !0, !0;
      }
    });
    window.addEventListener("test", ja, ja), window.removeEventListener("test", ja, ja);
  } catch {
    Sc = !1;
  }
var br = Sc ? { passive: !1 } : !1, B3 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, z3 = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && // not-not-scrollable
  !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, Wd = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Av(e, n);
    if (r) {
      var o = Iv(e, n), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, H3 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Y3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Av = function(e, t) {
  return e === "v" ? B3(t) : z3(t);
}, Iv = function(e, t) {
  return e === "v" ? H3(t) : Y3(t);
}, K3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, G3 = function(e, t, n, r, o) {
  var a = K3(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, f = 0;
  do {
    var m = Iv(e, i), v = m[0], h = m[1], g = m[2], y = h - g - a * v;
    (v || y) && Av(e, i) && (d += y, f += v), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && f === 0 || !o && -s > f)) && (l = !0), l;
}, La = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Bd = function(e) {
  return [e.deltaX, e.deltaY];
}, zd = function(e) {
  return e && "current" in e ? e.current : e;
}, Z3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, q3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, X3 = 0, xr = [];
function J3(e) {
  var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), o = C.useState(X3++)[0], a = C.useState(function() {
    return $l();
  })[0], s = C.useRef(e);
  C.useEffect(function() {
    s.current = e;
  }, [e]), C.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Rp([e.lockRef.current], (e.shards || []).map(zd), !0).filter(Boolean);
      return h.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = C.useCallback(function(h, g) {
    if ("touches" in h && h.touches.length === 2)
      return !s.current.allowPinchZoom;
    var y = La(h), b = n.current, $ = "deltaX" in h ? h.deltaX : b[0] - y[0], _ = "deltaY" in h ? h.deltaY : b[1] - y[1], w, T = h.target, k = Math.abs($) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && k === "h" && T.type === "range")
      return !1;
    var j = Wd(k, T);
    if (!j)
      return !0;
    if (j ? w = k : (w = k === "v" ? "h" : "v", j = Wd(k, T)), !j)
      return !1;
    if (!r.current && "changedTouches" in h && ($ || _) && (r.current = w), !w)
      return !0;
    var R = r.current || w;
    return G3(R, g, h, R === "h" ? $ : _, !0);
  }, []), c = C.useCallback(function(h) {
    var g = h;
    if (!(!xr.length || xr[xr.length - 1] !== a)) {
      var y = "deltaY" in g ? Bd(g) : La(g), b = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && Z3(w.delta, y);
      })[0];
      if (b && b.should) {
        g.preventDefault();
        return;
      }
      if (!b) {
        var $ = (s.current.shards || []).map(zd).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = $.length > 0 ? i(g, $[0]) : !s.current.noIsolation;
        _ && g.preventDefault();
      }
    }
  }, []), l = C.useCallback(function(h, g, y, b) {
    var $ = { name: h, delta: g, target: y, should: b };
    t.current.push($), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== $;
      });
    }, 1);
  }, []), u = C.useCallback(function(h) {
    n.current = La(h), r.current = void 0;
  }, []), d = C.useCallback(function(h) {
    l(h.type, Bd(h), h.target, i(h, e.lockRef.current));
  }, []), f = C.useCallback(function(h) {
    l(h.type, La(h), h.target, i(h, e.lockRef.current));
  }, []);
  C.useEffect(function() {
    return xr.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", c, br), document.addEventListener("touchmove", c, br), document.addEventListener("touchstart", u, br), function() {
      xr = xr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", c, br), document.removeEventListener("touchmove", c, br), document.removeEventListener("touchstart", u, br);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return C.createElement(
    C.Fragment,
    null,
    v ? C.createElement(a, { styles: q3(o) }) : null,
    m ? C.createElement(Vp, { gapMode: "margin" }) : null
  );
}
const Q3 = Lp(Rv, J3);
var jv = C.forwardRef(function(e, t) {
  return C.createElement(Qs, pt({}, e, { ref: t, sideCar: Q3 }));
});
jv.classNames = Qs.classNames;
const e5 = jv, Lv = "Dialog", [Fv, aP] = m3(Lv), [t5, ur] = Fv(Lv), n5 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: s = !0 } = e, i = I(null), c = I(null), [l = !1, u] = b3({
    prop: r,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ x(t5, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Ai(),
    titleId: Ai(),
    descriptionId: Ai(),
    open: l,
    onOpenChange: u,
    onOpenToggle: pe(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: s
  }, n);
}, Vv = "DialogPortal", [r5, Uv] = Fv(Vv, {
  forceMount: void 0
}), o5 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ur(Vv, t);
  return /* @__PURE__ */ x(r5, {
    scope: t,
    forceMount: n
  }, St.map(
    r,
    (s) => /* @__PURE__ */ x(Js, {
      present: n || a.open
    }, /* @__PURE__ */ x(F3, {
      asChild: !0,
      container: o
    }, s))
  ));
}, Nc = "DialogOverlay", a5 = /* @__PURE__ */ M((e, t) => {
  const n = Uv(Nc, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ur(Nc, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Js, {
    present: r || a.open
  }, /* @__PURE__ */ x(s5, E({}, o, {
    ref: t
  }))) : null;
}), s5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, ...r } = e, o = ur(Nc, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(e5, {
      as: nu,
      allowPinchZoom: !0,
      shards: [
        o.contentRef
      ]
    }, /* @__PURE__ */ x(Xs.div, E({
      "data-state": Bv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Mo = "DialogContent", i5 = /* @__PURE__ */ M((e, t) => {
  const n = Uv(Mo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ur(Mo, e.__scopeDialog);
  return /* @__PURE__ */ x(Js, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ x(c5, E({}, o, {
    ref: t
  })) : /* @__PURE__ */ x(l5, E({}, o, {
    ref: t
  })));
}), c5 = /* @__PURE__ */ M((e, t) => {
  const n = ur(Mo, e.__scopeDialog), r = I(null), o = ha(t, n.contentRef, r);
  return Q(() => {
    const a = r.current;
    if (a)
      return oa(a);
  }, []), /* @__PURE__ */ x(Wv, E({}, e, {
    ref: o,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Er(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Er(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || i) && a.preventDefault();
    }),
    onFocusOutside: Er(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), l5 = /* @__PURE__ */ M((e, t) => {
  const n = ur(Mo, e.__scopeDialog), r = I(!1);
  return /* @__PURE__ */ x(Wv, E({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o), !o.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), o.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (o) => {
      var a, s;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o), o.defaultPrevented || (r.current = !0);
      const i = o.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(i)) && o.preventDefault();
    }
  }));
}), Wv = /* @__PURE__ */ M((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = ur(Mo, n), c = I(null), l = ha(t, c);
  return W3(), /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(O3, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(P3, E({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Bv(i.open)
  }, s, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
});
function Bv(e) {
  return e ? "open" : "closed";
}
const u5 = n5, d5 = o5, f5 = a5, p5 = i5;
var Hd = 1, m5 = 0.9, v5 = 0.3, Vi = 0.1, h5 = 0, Ui = 0.999, g5 = 0.9999, b5 = 0.99, Yd = /[\\\/\-_+.# \t"@\[\(\{&]/, x5 = /[\\\/\-_+.# \t"@\[\(\{&]/g;
function Tc(e, t, n, r, o, a) {
  if (a === t.length)
    return o === e.length ? Hd : b5;
  for (var s = r.charAt(a), i = n.indexOf(s, o), c = 0, l, u, d; i >= 0; )
    l = Tc(e, t, n, r, i + 1, a + 1), l > c && (i === o ? l *= Hd : Yd.test(e.charAt(i - 1)) ? (l *= m5, d = e.slice(o, i - 1).match(x5), d && o > 0 && (l *= Math.pow(Ui, d.length))) : Yd.test(e.slice(o, i - 1)) ? (l *= h5, o > 0 && (l *= Math.pow(Ui, i - o))) : (l *= v5, o > 0 && (l *= Math.pow(Ui, i - o))), e.charAt(i) !== t.charAt(a) && (l *= g5)), l < Vi && n.charAt(i - 1) === r.charAt(a + 1) && n.charAt(i - 1) !== r.charAt(a) && (u = Tc(e, t, n, r, i + 1, a + 2), u * Vi > l && (l = u * Vi)), l > c && (c = l), i = n.indexOf(s, i + 1);
  return c;
}
function y5(e, t) {
  return Tc(e, t, e.toLowerCase(), t.toLowerCase(), 0, 0);
}
var $5 = y5, w5 = '[cmdk-list-sizer=""]', fo = '[cmdk-group=""]', Wi = '[cmdk-group-items=""]', _5 = '[cmdk-group-heading=""]', zv = '[cmdk-item=""]', Kd = `${zv}:not([aria-disabled="true"])`, Pc = "cmdk-item-select", Tn = "data-value", C5 = (e, t) => $5(e, t), Hv = C.createContext(void 0), ga = () => C.useContext(Hv), Yv = C.createContext(void 0), ru = () => C.useContext(Yv), Kv = C.createContext(void 0), Gv = C.forwardRef((e, t) => {
  let n = C.useRef(null), r = yr(() => ({ search: "", value: "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } })), o = yr(() => /* @__PURE__ */ new Set()), a = yr(() => /* @__PURE__ */ new Map()), s = yr(() => /* @__PURE__ */ new Map()), i = yr(() => /* @__PURE__ */ new Set()), c = Zv(e), { label: l, children: u, value: d, onValueChange: f, filter: m, shouldFilter: v, ...h } = e, g = C.useId(), y = C.useId(), b = C.useId(), $ = A5();
  Jr(() => {
    if (d !== void 0) {
      let D = d.trim().toLowerCase();
      r.current.value = D, $(6, ee), _.emit();
    }
  }, [d]);
  let _ = C.useMemo(() => ({ subscribe: (D) => (i.current.add(D), () => i.current.delete(D)), snapshot: () => r.current, setState: (D, O, L) => {
    var z, oe, ce;
    if (!Object.is(r.current[D], O)) {
      if (r.current[D] = O, D === "search")
        R(), k(), $(1, j);
      else if (D === "value")
        if (((z = c.current) == null ? void 0 : z.value) !== void 0) {
          (ce = (oe = c.current).onValueChange) == null || ce.call(oe, O);
          return;
        } else
          L || $(5, ee);
      _.emit();
    }
  }, emit: () => {
    i.current.forEach((D) => D());
  } }), []), w = C.useMemo(() => ({ value: (D, O) => {
    O !== s.current.get(D) && (s.current.set(D, O), r.current.filtered.items.set(D, T(O)), $(2, () => {
      k(), _.emit();
    }));
  }, item: (D, O) => (o.current.add(D), O && (a.current.has(O) ? a.current.get(O).add(D) : a.current.set(O, /* @__PURE__ */ new Set([D]))), $(3, () => {
    R(), k(), r.current.value || j(), _.emit();
  }), () => {
    s.current.delete(D), o.current.delete(D), r.current.filtered.items.delete(D), $(4, () => {
      R(), j(), _.emit();
    });
  }), group: (D) => (a.current.has(D) || a.current.set(D, /* @__PURE__ */ new Set()), () => {
    s.current.delete(D), a.current.delete(D);
  }), filter: () => c.current.shouldFilter, label: l || e["aria-label"], listId: g, inputId: b, labelId: y }), []);
  function T(D) {
    var O;
    let L = ((O = c.current) == null ? void 0 : O.filter) ?? C5;
    return D ? L(D, r.current.search) : 0;
  }
  function k() {
    if (!n.current || !r.current.search || c.current.shouldFilter === !1)
      return;
    let D = r.current.filtered.items, O = [];
    r.current.filtered.groups.forEach((z) => {
      let oe = a.current.get(z), ce = 0;
      oe.forEach((ye) => {
        let be = D.get(ye);
        ce = Math.max(be, ce);
      }), O.push([z, ce]);
    });
    let L = n.current.querySelector(w5);
    U().sort((z, oe) => {
      let ce = z.getAttribute(Tn), ye = oe.getAttribute(Tn);
      return (D.get(ye) ?? 0) - (D.get(ce) ?? 0);
    }).forEach((z) => {
      let oe = z.closest(Wi);
      oe ? oe.appendChild(z.parentElement === oe ? z : z.closest(`${Wi} > *`)) : L.appendChild(z.parentElement === L ? z : z.closest(`${Wi} > *`));
    }), O.sort((z, oe) => oe[1] - z[1]).forEach((z) => {
      let oe = n.current.querySelector(`${fo}[${Tn}="${z[0]}"]`);
      oe == null || oe.parentElement.appendChild(oe);
    });
  }
  function j() {
    let D = U().find((L) => !L.ariaDisabled), O = D == null ? void 0 : D.getAttribute(Tn);
    _.setState("value", O || void 0);
  }
  function R() {
    if (!r.current.search || c.current.shouldFilter === !1) {
      r.current.filtered.count = o.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let D = 0;
    for (let O of o.current) {
      let L = s.current.get(O), z = T(L);
      r.current.filtered.items.set(O, z), z > 0 && D++;
    }
    for (let [O, L] of a.current)
      for (let z of L)
        if (r.current.filtered.items.get(z) > 0) {
          r.current.filtered.groups.add(O);
          break;
        }
    r.current.filtered.count = D;
  }
  function ee() {
    var D, O, L;
    let z = re();
    z && (((D = z.parentElement) == null ? void 0 : D.firstChild) === z && ((L = (O = z.closest(fo)) == null ? void 0 : O.querySelector(_5)) == null || L.scrollIntoView({ block: "nearest" })), z.scrollIntoView({ block: "nearest" }));
  }
  function re() {
    return n.current.querySelector(`${zv}[aria-selected="true"]`);
  }
  function U() {
    return Array.from(n.current.querySelectorAll(Kd));
  }
  function B(D) {
    let O = U()[D];
    O && _.setState("value", O.getAttribute(Tn));
  }
  function W(D) {
    var O;
    let L = re(), z = U(), oe = z.findIndex((ye) => ye === L), ce = z[oe + D];
    (O = c.current) != null && O.loop && (ce = oe + D < 0 ? z[z.length - 1] : oe + D === z.length ? z[0] : z[oe + D]), ce && _.setState("value", ce.getAttribute(Tn));
  }
  function G(D) {
    let O = re(), L = O == null ? void 0 : O.closest(fo), z;
    for (; L && !z; )
      L = D > 0 ? D5(L, fo) : R5(L, fo), z = L == null ? void 0 : L.querySelector(Kd);
    z ? _.setState("value", z.getAttribute(Tn)) : W(D);
  }
  let J = () => B(U().length - 1), Y = (D) => {
    D.preventDefault(), D.metaKey ? J() : D.altKey ? G(1) : W(1);
  }, Z = (D) => {
    D.preventDefault(), D.metaKey ? B(0) : D.altKey ? G(-1) : W(-1);
  };
  return C.createElement("div", { ref: ba([n, t]), ...h, "cmdk-root": "", onKeyDown: (D) => {
    var O;
    if ((O = h.onKeyDown) == null || O.call(h, D), !D.defaultPrevented)
      switch (D.key) {
        case "n":
        case "j": {
          D.ctrlKey && Y(D);
          break;
        }
        case "ArrowDown": {
          Y(D);
          break;
        }
        case "p":
        case "k": {
          D.ctrlKey && Z(D);
          break;
        }
        case "ArrowUp": {
          Z(D);
          break;
        }
        case "Home": {
          D.preventDefault(), B(0);
          break;
        }
        case "End": {
          D.preventDefault(), J();
          break;
        }
        case "Enter": {
          D.preventDefault();
          let L = re();
          if (L) {
            let z = new Event(Pc);
            L.dispatchEvent(z);
          }
        }
      }
  } }, C.createElement("label", { "cmdk-label": "", htmlFor: w.inputId, id: w.labelId, style: I5 }, l), C.createElement(Yv.Provider, { value: _ }, C.createElement(Hv.Provider, { value: w }, u)));
}), E5 = C.forwardRef((e, t) => {
  let n = C.useId(), r = C.useRef(null), o = C.useContext(Kv), a = ga(), s = Zv(e);
  Jr(() => a.item(n, o), []);
  let i = qv(n, r, [e.value, e.children, r]), c = ru(), l = Rr((y) => y.value && y.value === i.current), u = Rr((y) => a.filter() === !1 ? !0 : y.search ? y.filtered.items.get(n) > 0 : !0);
  C.useEffect(() => {
    let y = r.current;
    if (!(!y || e.disabled))
      return y.addEventListener(Pc, d), () => y.removeEventListener(Pc, d);
  }, [u, e.onSelect, e.disabled]);
  function d() {
    var y, b;
    (b = (y = s.current).onSelect) == null || b.call(y, i.current);
  }
  function f() {
    c.setState("value", i.current, !0);
  }
  if (!u)
    return null;
  let { disabled: m, value: v, onSelect: h, ...g } = e;
  return C.createElement("div", { ref: ba([r, t]), ...g, "cmdk-item": "", role: "option", "aria-disabled": m || void 0, "aria-selected": l || void 0, "data-selected": l || void 0, onPointerMove: m ? void 0 : f, onClick: m ? void 0 : d }, e.children);
}), S5 = C.forwardRef((e, t) => {
  let { heading: n, children: r, ...o } = e, a = C.useId(), s = C.useRef(null), i = C.useRef(null), c = C.useId(), l = ga(), u = Rr((f) => l.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(a) : !0);
  Jr(() => l.group(a), []), qv(a, s, [e.value, e.heading, i]);
  let d = C.createElement(Kv.Provider, { value: a }, r);
  return C.createElement("div", { ref: ba([s, t]), ...o, "cmdk-group": "", role: "presentation", hidden: u ? void 0 : !0 }, n && C.createElement("div", { ref: i, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), C.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, d));
}), N5 = C.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = C.useRef(null), a = Rr((s) => !s.search);
  return !n && !a ? null : C.createElement("div", { ref: ba([o, t]), ...r, "cmdk-separator": "", role: "separator" });
}), T5 = C.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = ru(), s = Rr((c) => c.search), i = ga();
  return C.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), C.createElement("input", { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": i.listId, "aria-labelledby": i.labelId, id: i.inputId, type: "text", value: o ? e.value : s, onChange: (c) => {
    o || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), P5 = C.forwardRef((e, t) => {
  let { children: n, ...r } = e, o = C.useRef(null), a = C.useRef(null), s = ga();
  return C.useEffect(() => {
    if (a.current && o.current) {
      let i = a.current, c = o.current, l, u = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let d = i.getBoundingClientRect().height;
          c.style.setProperty("--cmdk-list-height", d.toFixed(1) + "px");
        });
      });
      return u.observe(i), () => {
        cancelAnimationFrame(l), u.unobserve(i);
      };
    }
  }, []), C.createElement("div", { ref: ba([o, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": "Suggestions", id: s.listId, "aria-labelledby": s.inputId }, C.createElement("div", { ref: a, "cmdk-list-sizer": "" }, n));
}), k5 = C.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, container: o, ...a } = e;
  return C.createElement(u5, { open: n, onOpenChange: r }, C.createElement(d5, { container: o }, C.createElement(f5, { "cmdk-overlay": "" }), C.createElement(p5, { "aria-label": e.label, "cmdk-dialog": "" }, C.createElement(Gv, { ref: t, ...a }))));
}), M5 = C.forwardRef((e, t) => {
  let n = C.useRef(!0), r = Rr((o) => o.filtered.count === 0);
  return C.useEffect(() => {
    n.current = !1;
  }, []), n.current || !r ? null : C.createElement("div", { ref: t, ...e, "cmdk-empty": "", role: "presentation" });
}), O5 = C.forwardRef((e, t) => {
  let { progress: n, children: r, ...o } = e;
  return C.createElement("div", { ref: t, ...o, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": "Loading..." }, C.createElement("div", { "aria-hidden": !0 }, r));
}), Tt = Object.assign(Gv, { List: P5, Item: E5, Input: T5, Group: S5, Separator: N5, Dialog: k5, Empty: M5, Loading: O5 });
function D5(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function R5(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Zv(e) {
  let t = C.useRef(e);
  return Jr(() => {
    t.current = e;
  }), t;
}
var Jr = typeof window > "u" ? C.useEffect : C.useLayoutEffect;
function yr(e) {
  let t = C.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function ba(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function Rr(e) {
  let t = ru(), n = () => e(t.snapshot());
  return C.useSyncExternalStore(t.subscribe, n, n);
}
function qv(e, t, n) {
  let r = C.useRef(), o = ga();
  return Jr(() => {
    var a;
    let s = (() => {
      var i;
      for (let c of n) {
        if (typeof c == "string")
          return c.trim().toLowerCase();
        if (typeof c == "object" && "current" in c && c.current)
          return (i = c.current.textContent) == null ? void 0 : i.trim().toLowerCase();
      }
    })();
    o.value(e, s), (a = t.current) == null || a.setAttribute(Tn, s), r.current = s;
  }), r;
}
var A5 = () => {
  let [e, t] = C.useState(), n = yr(() => /* @__PURE__ */ new Map());
  return Jr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
}, I5 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const Oo = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt,
  {
    ref: n,
    className: A(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Oo.displayName = Tt.displayName;
const sP = ({ children: e, ...t }) => /* @__PURE__ */ p.exports.jsx(l7, { ...t, children: /* @__PURE__ */ p.exports.jsx(zm, { className: "overflow-hidden p-0 shadow-2xl", children: /* @__PURE__ */ p.exports.jsx(Oo, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: e }) }) }), ds = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ p.exports.jsx(Yf, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ p.exports.jsx(
    Tt.Input,
    {
      ref: n,
      className: A(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
ds.displayName = Tt.Input.displayName;
const Xv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt.List,
  {
    ref: n,
    className: A("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Xv.displayName = Tt.List.displayName;
const fs = C.forwardRef((e, t) => /* @__PURE__ */ p.exports.jsx(
  Tt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
fs.displayName = Tt.Empty.displayName;
const Do = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt.Group,
  {
    ref: n,
    className: A(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      e
    ),
    ...t
  }
));
Do.displayName = Tt.Group.displayName;
const Jv = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Tt.Separator,
  {
    ref: n,
    className: A("-mx-1 h-px bg-border", e),
    ...t
  }
));
Jv.displayName = Tt.Separator.displayName;
const Ro = C.forwardRef(({ className: e, onClick: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Tt.Item,
  {
    ref: r,
    onClick: t,
    className: A(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n
  }
));
Ro.displayName = Tt.Item.displayName;
const j5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: A(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
j5.displayName = "CommandShortcut";
const L5 = /* @__PURE__ */ M((e, t) => {
  const { ratio: n = 1, style: r, ...o } = e;
  return /* @__PURE__ */ x("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ x(ie.div, E({}, o, {
    ref: t,
    style: {
      ...r,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
}), F5 = L5, iP = F5;
function V5(e, t) {
  return ks((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const Qv = "ScrollArea", [eh, cP] = Ke(Qv), [U5, It] = eh(Qv), W5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, type: r = "hover", dir: o, scrollHideDelay: a = 600, ...s } = e, [i, c] = X(null), [l, u] = X(null), [d, f] = X(null), [m, v] = X(null), [h, g] = X(null), [y, b] = X(0), [$, _] = X(0), [w, T] = X(!1), [k, j] = X(!1), R = we(
    t,
    (re) => c(re)
  ), ee = on(o);
  return /* @__PURE__ */ x(U5, {
    scope: n,
    type: r,
    dir: ee,
    scrollHideDelay: a,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: f,
    scrollbarX: m,
    onScrollbarXChange: v,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: T,
    scrollbarY: h,
    onScrollbarYChange: g,
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: j,
    onCornerWidthChange: b,
    onCornerHeightChange: _
  }, /* @__PURE__ */ x(ie.div, E({
    dir: ee
  }, s, {
    ref: R,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      ["--radix-scroll-area-corner-width"]: y + "px",
      ["--radix-scroll-area-corner-height"]: $ + "px",
      ...e.style
    }
  })));
}), B5 = "ScrollAreaViewport", z5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, children: r, ...o } = e, a = It(B5, n), s = I(null), i = we(t, s, a.onViewportChange);
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(ie.div, E({
    "data-radix-scroll-area-viewport": ""
  }, o, {
    ref: i,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ x("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, r)));
}), wn = "ScrollAreaScrollbar", th = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = It(wn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
  return Q(() => (i ? a(!0) : s(!0), () => {
    i ? a(!1) : s(!1);
  }), [
    i,
    a,
    s
  ]), o.type === "hover" ? /* @__PURE__ */ x(H5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "scroll" ? /* @__PURE__ */ x(Y5, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "auto" ? /* @__PURE__ */ x(nh, E({}, r, {
    ref: t,
    forceMount: n
  })) : o.type === "always" ? /* @__PURE__ */ x(ou, E({}, r, {
    ref: t
  })) : null;
}), H5 = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = It(wn, e.__scopeScrollArea), [a, s] = X(!1);
  return Q(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, u = () => {
        c = window.setTimeout(
          () => s(!1),
          o.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", u);
      };
    }
  }, [
    o.scrollArea,
    o.scrollHideDelay
  ]), /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(nh, E({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), Y5 = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = It(wn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = ti(
    () => c("SCROLL_END"),
    100
  ), [i, c] = V5("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return Q(() => {
    if (i === "idle") {
      const l = window.setTimeout(
        () => c("HIDE"),
        o.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    i,
    o.scrollHideDelay,
    c
  ]), Q(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let d = l[u];
      const f = () => {
        const m = l[u];
        d !== m && (c("SCROLL"), s()), d = m;
      };
      return l.addEventListener("scroll", f), () => l.removeEventListener("scroll", f);
    }
  }, [
    o.viewport,
    a,
    c,
    s
  ]), /* @__PURE__ */ x(Ze, {
    present: n || i !== "hidden"
  }, /* @__PURE__ */ x(ou, E({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, r, {
    ref: t,
    onPointerEnter: V(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: V(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), nh = /* @__PURE__ */ M((e, t) => {
  const n = It(wn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = X(!1), i = e.orientation === "horizontal", c = ti(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Ar(n.viewport, c), Ar(n.content, c), /* @__PURE__ */ x(Ze, {
    present: r || a
  }, /* @__PURE__ */ x(ou, E({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), ou = /* @__PURE__ */ M((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = It(wn, e.__scopeScrollArea), a = I(null), s = I(0), [i, c] = X({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = sh(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: Boolean(l > 0 && l < 1),
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (f) => s.current = f
  };
  function d(f, m) {
    return e_(f, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ x(K5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollLeft, m = Gd(f, i, o.dir);
        a.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollLeft = d(f, o.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ x(G5, E({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (o.viewport && a.current) {
        const f = o.viewport.scrollTop, m = Gd(f, i);
        a.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = f);
    },
    onDragScroll: (f) => {
      o.viewport && (o.viewport.scrollTop = d(f));
    }
  })) : null;
}), K5 = /* @__PURE__ */ M((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(wn, e.__scopeScrollArea), [s, i] = X(), c = I(null), l = we(t, c, a.onScrollbarXChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(oh, E({
    "data-orientation": "horizontal"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      ["--radix-scroll-area-thumb-width"]: ei(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(f), ch(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: ps(s.paddingLeft),
          paddingEnd: ps(s.paddingRight)
        }
      });
    }
  }));
}), G5 = /* @__PURE__ */ M((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = It(wn, e.__scopeScrollArea), [s, i] = X(), c = I(null), l = we(t, c, a.onScrollbarYChange);
  return Q(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ x(oh, E({
    "data-orientation": "vertical"
  }, o, {
    ref: l,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      ["--radix-scroll-area-thumb-height"]: ei(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(f), ch(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && a.viewport && s && r({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: ps(s.paddingTop),
          paddingEnd: ps(s.paddingBottom)
        }
      });
    }
  }));
}), [Z5, rh] = eh(wn), oh = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, sizes: r, hasThumb: o, onThumbChange: a, onThumbPointerUp: s, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...f } = e, m = It(wn, n), [v, h] = X(null), g = we(
    t,
    (R) => h(R)
  ), y = I(null), b = I(""), $ = m.viewport, _ = r.content - r.viewport, w = We(u), T = We(c), k = ti(d, 10);
  function j(R) {
    if (y.current) {
      const ee = R.clientX - y.current.left, re = R.clientY - y.current.top;
      l({
        x: ee,
        y: re
      });
    }
  }
  return Q(() => {
    const R = (ee) => {
      const re = ee.target;
      (v == null ? void 0 : v.contains(re)) && w(ee, _);
    };
    return document.addEventListener("wheel", R, {
      passive: !1
    }), () => document.removeEventListener("wheel", R, {
      passive: !1
    });
  }, [
    $,
    v,
    _,
    w
  ]), Q(T, [
    r,
    T
  ]), Ar(v, k), Ar(m.content, k), /* @__PURE__ */ x(Z5, {
    scope: n,
    scrollbar: v,
    hasThumb: o,
    onThumbChange: We(a),
    onThumbPointerUp: We(s),
    onThumbPositionChange: T,
    onThumbPointerDown: We(i)
  }, /* @__PURE__ */ x(ie.div, E({}, f, {
    ref: g,
    style: {
      position: "absolute",
      ...f.style
    },
    onPointerDown: V(e.onPointerDown, (R) => {
      R.button === 0 && (R.target.setPointerCapture(R.pointerId), y.current = v.getBoundingClientRect(), b.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", j(R));
    }),
    onPointerMove: V(e.onPointerMove, j),
    onPointerUp: V(e.onPointerUp, (R) => {
      const ee = R.target;
      ee.hasPointerCapture(R.pointerId) && ee.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = b.current, y.current = null;
    })
  })));
}), kc = "ScrollAreaThumb", q5 = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = rh(kc, e.__scopeScrollArea);
  return /* @__PURE__ */ x(Ze, {
    present: n || o.hasThumb
  }, /* @__PURE__ */ x(X5, E({
    ref: t
  }, r)));
}), X5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, style: r, ...o } = e, a = It(kc, n), s = rh(kc, n), { onThumbPositionChange: i } = s, c = we(
    t,
    (d) => s.onThumbChange(d)
  ), l = I(), u = ti(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return Q(() => {
    const d = a.viewport;
    if (d) {
      const f = () => {
        if (u(), !l.current) {
          const m = t_(d, i);
          l.current = m, i();
        }
      };
      return i(), d.addEventListener("scroll", f), () => d.removeEventListener("scroll", f);
    }
  }, [
    a.viewport,
    u,
    i
  ]), /* @__PURE__ */ x(ie.div, E({
    "data-state": s.hasThumb ? "visible" : "hidden"
  }, o, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...r
    },
    onPointerDownCapture: V(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), v = d.clientX - m.left, h = d.clientY - m.top;
      s.onThumbPointerDown({
        x: v,
        y: h
      });
    }),
    onPointerUp: V(e.onPointerUp, s.onThumbPointerUp)
  }));
}), ah = "ScrollAreaCorner", J5 = /* @__PURE__ */ M((e, t) => {
  const n = It(ah, e.__scopeScrollArea), r = Boolean(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && r ? /* @__PURE__ */ x(Q5, E({}, e, {
    ref: t
  })) : null;
}), Q5 = /* @__PURE__ */ M((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = It(ah, n), [a, s] = X(0), [i, c] = X(0), l = Boolean(a && i);
  return Ar(o.scrollbarX, () => {
    var u;
    const d = ((u = o.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Ar(o.scrollbarY, () => {
    var u;
    const d = ((u = o.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    o.onCornerWidthChange(d), s(d);
  }), l ? /* @__PURE__ */ x(ie.div, E({}, r, {
    ref: t,
    style: {
      width: a,
      height: i,
      position: "absolute",
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function ps(e) {
  return e ? parseInt(e, 10) : 0;
}
function sh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function ei(e) {
  const t = sh(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function e_(e, t, n, r = "ltr") {
  const o = ei(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return ih([
    c,
    l
  ], d)(e);
}
function Gd(e, t, n = "ltr") {
  const r = ei(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [
    0,
    s
  ] : [
    s * -1,
    0
  ], l = ko(e, c);
  return ih([
    0,
    s
  ], [
    0,
    i
  ])(l);
}
function ih(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function ch(e, t) {
  return e > 0 && e < t;
}
const t_ = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, r = 0;
  return function o() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function ti(e, t) {
  const n = We(e), r = I(0);
  return Q(
    () => () => window.clearTimeout(r.current),
    []
  ), pe(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Ar(e, t) {
  const n = We(t);
  ft(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const lh = W5, n_ = z5, r_ = J5, o_ = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  lh,
  {
    ref: r,
    className: A("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx(n_, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ p.exports.jsx(uh, {}),
      /* @__PURE__ */ p.exports.jsx(r_, {})
    ]
  }
));
o_.displayName = lh.displayName;
const uh = C.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  th,
  {
    ref: r,
    orientation: t,
    className: A(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx(q5, { className: "relative flex-1 rounded-full bg-border" })
  }
));
uh.displayName = th.displayName;
const lP = Kl, uP = Gl, dP = va, dh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(ua, { className: A(e), ...t });
dh.displayName = ua.displayName;
const fh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  da,
  {
    className: A(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
fh.displayName = da.displayName;
const a_ = Wr(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), s_ = C.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(dh, { children: [
  /* @__PURE__ */ p.exports.jsx(fh, {}),
  /* @__PURE__ */ p.exports.jsxs(
    fa,
    {
      ref: o,
      className: A(a_({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.exports.jsxs(va, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ p.exports.jsx(tl, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
s_.displayName = fa.displayName;
const i_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
i_.displayName = "SheetHeader";
const c_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
c_.displayName = "SheetFooter";
const l_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  pa,
  {
    ref: n,
    className: A("text-lg font-semibold text-foreground", e),
    ...t
  }
));
l_.displayName = pa.displayName;
const u_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  ma,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
u_.displayName = ma.displayName;
const ph = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ p.exports.jsx(
  "table",
  {
    ref: n,
    className: A("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
ph.displayName = "TableUI";
const mh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("thead", { ref: n, className: A("[&_tr]:border-b", e), ...t }));
mh.displayName = "TableHeader";
const vh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "tbody",
  {
    ref: n,
    className: A("[&_tr:last-child]:border-0", e),
    ...t
  }
));
vh.displayName = "TableBody";
const d_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "tfoot",
  {
    ref: n,
    className: A("bg-primary font-medium text-primary-foreground", e),
    ...t
  }
));
d_.displayName = "TableFooter";
const ni = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "tr",
  {
    ref: n,
    className: A(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
ni.displayName = "TableRow";
const hh = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "th",
  {
    ref: n,
    className: A(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
hh.displayName = "TableHead";
const au = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "td",
  {
    ref: n,
    className: A("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
au.displayName = "TableCell";
const f_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  "caption",
  {
    ref: n,
    className: A("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
f_.displayName = "TableCaption";
const p_ = "AlertDialog", [m_, fP] = Ke(p_, [
  jm
]), _n = jm(), v_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = _n(t);
  return /* @__PURE__ */ x(Kl, E({}, r, n, {
    modal: !0
  }));
}, h_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(Gl, E({}, o, r, {
    ref: t
  }));
}), g_ = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = _n(t);
  return /* @__PURE__ */ x(ua, E({}, r, n));
}, b_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(da, E({}, o, r, {
    ref: t
  }));
}), gh = "AlertDialogContent", [x_, y_] = m_(gh), $_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, children: r, ...o } = e, a = _n(n), s = I(null), i = we(t, s), c = I(null);
  return /* @__PURE__ */ x(c7, {
    contentName: gh,
    titleName: w_,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ x(x_, {
    scope: n,
    cancelRef: c
  }, /* @__PURE__ */ x(fa, E({
    role: "alertdialog"
  }, a, o, {
    ref: i,
    onOpenAutoFocus: V(o.onOpenAutoFocus, (l) => {
      var u;
      l.preventDefault(), (u = c.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (l) => l.preventDefault(),
    onInteractOutside: (l) => l.preventDefault()
  }), /* @__PURE__ */ x(Qc, null, r), !1)));
}), w_ = "AlertDialogTitle", __ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(pa, E({}, o, r, {
    ref: t
  }));
}), C_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(ma, E({}, o, r, {
    ref: t
  }));
}), E_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = _n(n);
  return /* @__PURE__ */ x(va, E({}, o, r, {
    ref: t
  }));
}), S_ = "AlertDialogCancel", N_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = y_(S_, n), a = _n(n), s = we(t, o);
  return /* @__PURE__ */ x(va, E({}, a, r, {
    ref: s
  }));
}), T_ = v_, P_ = h_, bh = g_, xh = b_, yh = $_, $h = E_, wh = N_, _h = __, Ch = C_, pP = T_, mP = P_, Eh = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(bh, { className: A(e), ...t });
Eh.displayName = bh.displayName;
const Sh = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  xh,
  {
    className: A(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...n,
    ref: r
  }
));
Sh.displayName = xh.displayName;
const k_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsxs(Eh, { children: [
  /* @__PURE__ */ p.exports.jsx(Sh, {}),
  /* @__PURE__ */ p.exports.jsx(
    yh,
    {
      ref: n,
      className: A(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        e
      ),
      ...t
    }
  )
] }));
k_.displayName = yh.displayName;
const M_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
M_.displayName = "AlertDialogHeader";
const O_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "div",
  {
    className: A(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
O_.displayName = "AlertDialogFooter";
const D_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  _h,
  {
    ref: n,
    className: A("text-lg font-semibold", e),
    ...t
  }
));
D_.displayName = _h.displayName;
const R_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Ch,
  {
    ref: n,
    className: A("text-sm text-muted-foreground", e),
    ...t
  }
));
R_.displayName = Ch.displayName;
const A_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  $h,
  {
    ref: n,
    className: A(bo(), e),
    ...t
  }
));
A_.displayName = $h.displayName;
const I_ = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  wh,
  {
    ref: n,
    className: A(
      bo({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
I_.displayName = wh.displayName;
function vP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.exports.jsx(
    "div",
    {
      className: A("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Nh = "Collapsible", [j_, Th] = Ke(Nh), [L_, su] = j_(Nh), F_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeCollapsible: n, open: r, defaultOpen: o, disabled: a, onOpenChange: s, ...i } = e, [c = !1, l] = Qe({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ x(L_, {
    scope: n,
    disabled: a,
    contentId: tt(),
    open: c,
    onOpenToggle: pe(
      () => l(
        (u) => !u
      ),
      [
        l
      ]
    )
  }, /* @__PURE__ */ x(ie.div, E({
    "data-state": iu(c),
    "data-disabled": a ? "" : void 0
  }, i, {
    ref: t
  })));
}), V_ = "CollapsibleTrigger", Ph = /* @__PURE__ */ M((e, t) => {
  const { __scopeCollapsible: n, ...r } = e, o = su(V_, n);
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-controls": o.contentId,
    "aria-expanded": o.open || !1,
    "data-state": iu(o.open),
    "data-disabled": o.disabled ? "" : void 0,
    disabled: o.disabled
  }, r, {
    ref: t,
    onClick: V(e.onClick, o.onOpenToggle)
  }));
}), kh = "CollapsibleContent", Mh = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = su(kh, e.__scopeCollapsible);
  return /* @__PURE__ */ x(
    Ze,
    {
      present: n || o.open
    },
    ({ present: a }) => /* @__PURE__ */ x(U_, E({}, r, {
      ref: t,
      present: a
    }))
  );
}), U_ = /* @__PURE__ */ M((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = su(kh, n), [i, c] = X(r), l = I(null), u = we(t, l), d = I(0), f = d.current, m = I(0), v = m.current, h = s.open || i, g = I(h), y = I();
  return Q(() => {
    const b = requestAnimationFrame(
      () => g.current = !1
    );
    return () => cancelAnimationFrame(b);
  }, []), ft(() => {
    const b = l.current;
    if (b) {
      y.current = y.current || {
        transitionDuration: b.style.transitionDuration,
        animationName: b.style.animationName
      }, b.style.transitionDuration = "0s", b.style.animationName = "none";
      const $ = b.getBoundingClientRect();
      d.current = $.height, m.current = $.width, g.current || (b.style.transitionDuration = y.current.transitionDuration, b.style.animationName = y.current.animationName), c(r);
    }
  }, [
    s.open,
    r
  ]), /* @__PURE__ */ x(ie.div, E({
    "data-state": iu(s.open),
    "data-disabled": s.disabled ? "" : void 0,
    id: s.contentId,
    hidden: !h
  }, a, {
    ref: u,
    style: {
      ["--radix-collapsible-content-height"]: f ? `${f}px` : void 0,
      ["--radix-collapsible-content-width"]: v ? `${v}px` : void 0,
      ...e.style
    }
  }), h && o);
});
function iu(e) {
  return e ? "open" : "closed";
}
const Oh = F_, W_ = Ph, B_ = Mh, Bn = "Accordion", z_ = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [cu, H_, Y_] = Vn(Bn), [ri, hP] = Ke(Bn, [
  Y_,
  Th
]), lu = Th(), Dh = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { type: n, ...r } = e, o = r, a = r;
  return /* @__PURE__ */ N.createElement(cu.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ N.createElement(q_, E({}, a, {
    ref: t
  })) : /* @__PURE__ */ N.createElement(Z_, E({}, o, {
    ref: t
  })));
});
Dh.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [Rh, K_] = ri(Bn), [Ah, G_] = ri(Bn, {
  collapsible: !1
}), Z_ = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, collapsible: a = !1, ...s } = e, [i, c] = Qe({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ N.createElement(Rh, {
    scope: e.__scopeAccordion,
    value: i ? [
      i
    ] : [],
    onItemOpen: c,
    onItemClose: N.useCallback(
      () => a && c(""),
      [
        a,
        c
      ]
    )
  }, /* @__PURE__ */ N.createElement(Ah, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ N.createElement(Ih, E({}, s, {
    ref: t
  }))));
}), q_ = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { value: n, defaultValue: r, onValueChange: o = () => {
  }, ...a } = e, [s = [], i] = Qe({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = N.useCallback(
    (u) => i(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      i
    ]
  ), l = N.useCallback(
    (u) => i(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      i
    ]
  );
  return /* @__PURE__ */ N.createElement(Rh, {
    scope: e.__scopeAccordion,
    value: s,
    onItemOpen: c,
    onItemClose: l
  }, /* @__PURE__ */ N.createElement(Ah, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ N.createElement(Ih, E({}, a, {
    ref: t
  }))));
}), [X_, oi] = ri(Bn), Ih = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = N.useRef(null), c = we(i, t), l = H_(n), d = on(o) === "ltr", f = V(e.onKeyDown, (m) => {
    var v;
    if (!z_.includes(m.key))
      return;
    const h = m.target, g = l().filter((R) => {
      var ee;
      return !((ee = R.ref.current) !== null && ee !== void 0 && ee.disabled);
    }), y = g.findIndex(
      (R) => R.ref.current === h
    ), b = g.length;
    if (y === -1)
      return;
    m.preventDefault();
    let $ = y;
    const _ = 0, w = b - 1, T = () => {
      $ = y + 1, $ > w && ($ = _);
    }, k = () => {
      $ = y - 1, $ < _ && ($ = w);
    };
    switch (m.key) {
      case "Home":
        $ = _;
        break;
      case "End":
        $ = w;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? T() : k());
        break;
      case "ArrowDown":
        a === "vertical" && T();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? k() : T());
        break;
      case "ArrowUp":
        a === "vertical" && k();
        break;
    }
    const j = $ % b;
    (v = g[j].ref.current) === null || v === void 0 || v.focus();
  });
  return /* @__PURE__ */ N.createElement(X_, {
    scope: n,
    disabled: r,
    direction: o,
    orientation: a
  }, /* @__PURE__ */ N.createElement(cu.Slot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(ie.div, E({}, s, {
    "data-orientation": a,
    ref: c,
    onKeyDown: r ? void 0 : f
  }))));
}), Mc = "AccordionItem", [J_, uu] = ri(Mc), Q_ = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: r, ...o } = e, a = oi(Mc, n), s = K_(Mc, n), i = lu(n), c = tt(), l = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ N.createElement(J_, {
    scope: n,
    open: l,
    disabled: u,
    triggerId: c
  }, /* @__PURE__ */ N.createElement(Oh, E({
    "data-orientation": a.orientation,
    "data-state": jh(l)
  }, i, o, {
    ref: t,
    disabled: u,
    open: l,
    onOpenChange: (d) => {
      d ? s.onItemOpen(r) : s.onItemClose(r);
    }
  })));
}), e8 = "AccordionHeader", t8 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = oi(Bn, n), a = uu(e8, n);
  return /* @__PURE__ */ N.createElement(ie.h3, E({
    "data-orientation": o.orientation,
    "data-state": jh(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), Zd = "AccordionTrigger", n8 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = oi(Bn, n), a = uu(Zd, n), s = G_(Zd, n), i = lu(n);
  return /* @__PURE__ */ N.createElement(cu.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ N.createElement(W_, E({
    "aria-disabled": a.open && !s.collapsible || void 0,
    "data-orientation": o.orientation,
    id: a.triggerId
  }, i, r, {
    ref: t
  })));
}), r8 = "AccordionContent", o8 = /* @__PURE__ */ N.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...r } = e, o = oi(Bn, n), a = uu(r8, n), s = lu(n);
  return /* @__PURE__ */ N.createElement(B_, E({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": o.orientation
  }, s, r, {
    ref: t,
    style: {
      ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
      ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function jh(e) {
  return e ? "open" : "closed";
}
const a8 = Dh, s8 = Q_, i8 = t8, Lh = n8, Fh = o8, gP = a8, c8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  s8,
  {
    ref: n,
    className: A("border-b", e),
    ...t
  }
));
c8.displayName = "AccordionItem";
const l8 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(i8, { className: "flex", children: /* @__PURE__ */ p.exports.jsxs(
  Lh,
  {
    ref: r,
    className: A(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p.exports.jsx(xo, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
l8.displayName = Lh.displayName;
const u8 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Fh,
  {
    ref: r,
    className: A(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx("div", { className: "pb-4 pt-0", children: t })
  }
));
u8.displayName = Fh.displayName;
const bP = Oh, xP = Ph, yP = Mh;
function d8({
  id: e,
  form: t,
  label: n,
  items: r,
  rules: o,
  value: a,
  disabled: s,
  setValue: i,
  tabIndex: c,
  placeholder: l,
  defaultValue: u,
  notFoundLabel: d,
  ctaPlaceholder: f,
  buttonClassName: m,
  popoverClassName: v
}) {
  var y;
  const [h, g] = X(!1);
  return t ? /* @__PURE__ */ p.exports.jsx(
    Eo,
    {
      control: t.control,
      name: e,
      defaultValue: u,
      rules: o,
      render: ({ field: b, formState: $ }) => {
        var _, w, T;
        return /* @__PURE__ */ p.exports.jsxs(kr, { className: "flex flex-col", children: [
          n && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
            n,
            " ",
            ((w = (_ = $.errors) == null ? void 0 : _.pidType) == null ? void 0 : w.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light", children: [
              "* ",
              $.errors.pidType.message
            ] })
          ] }),
          /* @__PURE__ */ p.exports.jsxs(ls, { open: h, onOpenChange: g, children: [
            /* @__PURE__ */ p.exports.jsx(us, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(
              at,
              {
                disabled: s,
                tabIndex: c,
                variant: "outline",
                role: "combobox",
                style: { marginTop: 12 },
                className: A("w-min justify-between", !b.value && "text-muted-foreground", `${m}`),
                children: [
                  b.value ? (T = r.find((k) => k.value === b.value)) == null ? void 0 : T.label : f,
                  /* @__PURE__ */ p.exports.jsx(zu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                ]
              }
            ) }),
            /* @__PURE__ */ p.exports.jsx(Po, { className: A("w-[200px] p-0", v), children: /* @__PURE__ */ p.exports.jsxs(Oo, { children: [
              /* @__PURE__ */ p.exports.jsx(ds, { placeholder: l, className: "h-9" }),
              /* @__PURE__ */ p.exports.jsx(fs, { children: d }),
              /* @__PURE__ */ p.exports.jsx(Do, { children: r.map((k) => /* @__PURE__ */ p.exports.jsxs(
                Ro,
                {
                  value: k.value,
                  onSelect: (j) => {
                    t.setValue(e, j), g(!1);
                  },
                  className: "w-full flex justify-start items-center",
                  children: [
                    (k == null ? void 0 : k.image) && /* @__PURE__ */ p.exports.jsx("img", { src: k.image, alt: k.label, width: 40, className: "mr-2" }),
                    (k == null ? void 0 : k.icon) && k.icon,
                    k.label,
                    /* @__PURE__ */ p.exports.jsx(
                      On,
                      {
                        className: A(
                          "ml-auto h-4 w-4",
                          k.value === b.value ? "opacity-100" : "opacity-0"
                        )
                      }
                    )
                  ]
                },
                k.value
              )) })
            ] }) })
          ] })
        ] });
      }
    }
  ) : /* @__PURE__ */ p.exports.jsxs(ls, { open: h, onOpenChange: g, children: [
    /* @__PURE__ */ p.exports.jsx(us, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(
      at,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": h,
        className: "w-full justify-between",
        children: [
          a ? (y = r.find((b) => b.value === a)) == null ? void 0 : y.label : f,
          /* @__PURE__ */ p.exports.jsx(zu, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ p.exports.jsx(Po, { className: "w-full p-0", children: /* @__PURE__ */ p.exports.jsxs(Oo, { children: [
      /* @__PURE__ */ p.exports.jsx(ds, { placeholder: l, className: "h-9" }),
      /* @__PURE__ */ p.exports.jsx(fs, { children: d }),
      /* @__PURE__ */ p.exports.jsx(Do, { children: r.map((b) => /* @__PURE__ */ p.exports.jsxs(
        Ro,
        {
          onSelect: ($) => {
            i($ === a ? "" : $), g(!1);
          },
          children: [
            b.label,
            /* @__PURE__ */ p.exports.jsx(
              On,
              {
                className: A(
                  "ml-auto h-4 w-4",
                  a === b.value ? "opacity-100" : "opacity-0"
                )
              }
            )
          ]
        },
        b.value
      )) })
    ] }) })
  ] });
}
let Bi;
const Vh = "HoverCard", [Uh, $P] = Ke(Vh, [
  an
]), du = an(), [f8, fu] = Uh(Vh), p8 = (e) => {
  const { __scopeHoverCard: t, children: n, open: r, defaultOpen: o, onOpenChange: a, openDelay: s = 700, closeDelay: i = 300 } = e, c = du(t), l = I(0), u = I(0), d = I(!1), f = I(!1), [m = !1, v] = Qe({
    prop: r,
    defaultProp: o,
    onChange: a
  }), h = pe(() => {
    clearTimeout(u.current), l.current = window.setTimeout(
      () => v(!0),
      s
    );
  }, [
    s,
    v
  ]), g = pe(() => {
    clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(
      () => v(!1),
      i
    ));
  }, [
    i,
    v
  ]), y = pe(
    () => v(!1),
    [
      v
    ]
  );
  return Q(() => () => {
    clearTimeout(l.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ x(f8, {
    scope: t,
    open: m,
    onOpenChange: v,
    onOpen: h,
    onClose: g,
    onDismiss: y,
    hasSelectionRef: d,
    isPointerDownOnContentRef: f
  }, /* @__PURE__ */ x(Gr, c, n));
}, m8 = "HoverCardTrigger", v8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeHoverCard: n, ...r } = e, o = fu(m8, n), a = du(n);
  return /* @__PURE__ */ x(na, E({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.a, E({
    "data-state": o.open ? "open" : "closed"
  }, r, {
    ref: t,
    onPointerEnter: V(e.onPointerEnter, ms(o.onOpen)),
    onPointerLeave: V(e.onPointerLeave, ms(o.onClose)),
    onFocus: V(e.onFocus, o.onOpen),
    onBlur: V(e.onBlur, o.onClose),
    onTouchStart: V(
      e.onTouchStart,
      (s) => s.preventDefault()
    )
  })));
}), h8 = "HoverCardPortal", [wP, g8] = Uh(h8, {
  forceMount: void 0
}), Oc = "HoverCardContent", b8 = /* @__PURE__ */ M((e, t) => {
  const n = g8(Oc, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = fu(Oc, e.__scopeHoverCard);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.open
  }, /* @__PURE__ */ x(x8, E({
    "data-state": a.open ? "open" : "closed"
  }, o, {
    onPointerEnter: V(e.onPointerEnter, ms(a.onOpen)),
    onPointerLeave: V(e.onPointerLeave, ms(a.onClose)),
    ref: t
  })));
}), x8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: s, ...i } = e, c = fu(Oc, n), l = du(n), u = I(null), d = we(t, u), [f, m] = X(!1);
  return Q(() => {
    if (f) {
      const v = document.body;
      return Bi = v.style.userSelect || v.style.webkitUserSelect, v.style.userSelect = "none", v.style.webkitUserSelect = "none", () => {
        v.style.userSelect = Bi, v.style.webkitUserSelect = Bi;
      };
    }
  }, [
    f
  ]), Q(() => {
    if (u.current) {
      const v = () => {
        m(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var h;
          ((h = document.getSelection()) === null || h === void 0 ? void 0 : h.toString()) !== "" && (c.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", v), () => {
        document.removeEventListener("pointerup", v), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    c.isPointerDownOnContentRef,
    c.hasSelectionRef
  ]), Q(() => {
    u.current && y8(u.current).forEach(
      (h) => h.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: s,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: V(a, (v) => {
      v.preventDefault();
    }),
    onDismiss: c.onDismiss
  }, /* @__PURE__ */ x(ra, E({}, l, i, {
    onPointerDown: V(i.onPointerDown, (v) => {
      v.currentTarget.contains(v.target) && m(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
    }),
    ref: d,
    style: {
      ...i.style,
      userSelect: f ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: f ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function ms(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function y8(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const $8 = p8, w8 = v8, Wh = b8, _P = $8, CP = w8, _8 = C.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ p.exports.jsx(
  Wh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: A(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
_8.displayName = Wh.displayName;
const EP = () => /* @__PURE__ */ p.exports.jsx("span", { className: "loader-fade-dot" }), pu = "Menubar", [Dc, C8, E8] = Vn(pu), [Bh, SP] = Ke(pu, [
  E8,
  Un
]), _t = aa(), zh = Un(), [S8, mu] = Bh(pu), N8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, value: r, onValueChange: o, defaultValue: a, loop: s = !0, dir: i, ...c } = e, l = on(i), u = zh(n), [d = "", f] = Qe({
    prop: r,
    onChange: o,
    defaultProp: a
  }), [m, v] = X(null);
  return /* @__PURE__ */ x(S8, {
    scope: n,
    value: d,
    onMenuOpen: pe((h) => {
      f(h), v(h);
    }, [
      f
    ]),
    onMenuClose: pe(
      () => f(""),
      [
        f
      ]
    ),
    onMenuToggle: pe((h) => {
      f(
        (g) => Boolean(g) ? "" : h
      ), v(h);
    }, [
      f
    ]),
    dir: l,
    loop: s
  }, /* @__PURE__ */ x(Dc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Dc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(Vs, E({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: s,
    dir: l,
    currentTabStopId: m,
    onCurrentTabStopIdChange: v
  }), /* @__PURE__ */ x(ie.div, E({
    role: "menubar"
  }, c, {
    ref: t
  }))))));
}), Hh = "MenubarMenu", [T8, Yh] = Bh(Hh), P8 = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = tt(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = mu(Hh, t), i = _t(t), c = I(null), l = I(!1), u = s.value === a;
  return Q(() => {
    u || (l.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ x(T8, {
    scope: t,
    value: a,
    triggerId: tt(),
    triggerRef: c,
    contentId: tt(),
    wasKeyboardTriggerOpenRef: l
  }, /* @__PURE__ */ x(Sl, E({}, i, {
    open: u,
    onOpenChange: (d) => {
      d || s.onMenuClose();
    },
    modal: !1,
    dir: s.dir
  }, r)));
}, qd = "MenubarTrigger", k8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = zh(n), s = _t(n), i = mu(qd, n), c = Yh(qd, n), l = I(null), u = we(t, l, c.triggerRef), [d, f] = X(!1), m = i.value === c.value;
  return /* @__PURE__ */ x(Dc.ItemSlot, {
    scope: n,
    value: c.value,
    disabled: r
  }, /* @__PURE__ */ x(Us, E({
    asChild: !0
  }, a, {
    focusable: !r,
    tabStopId: c.value
  }), /* @__PURE__ */ x(Nl, E({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "menuitem",
    id: c.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": m,
    "aria-controls": m ? c.contentId : void 0,
    "data-highlighted": d ? "" : void 0,
    "data-state": m ? "open" : "closed",
    "data-disabled": r ? "" : void 0,
    disabled: r
  }, o, {
    ref: u,
    onPointerDown: V(e.onPointerDown, (v) => {
      !r && v.button === 0 && v.ctrlKey === !1 && (i.onMenuOpen(c.value), m || v.preventDefault());
    }),
    onPointerEnter: V(e.onPointerEnter, () => {
      if (Boolean(i.value) && !m) {
        var h;
        i.onMenuOpen(c.value), (h = l.current) === null || h === void 0 || h.focus();
      }
    }),
    onKeyDown: V(e.onKeyDown, (v) => {
      r || ([
        "Enter",
        " "
      ].includes(v.key) && i.onMenuToggle(c.value), v.key === "ArrowDown" && i.onMenuOpen(c.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(v.key) && (c.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
    }),
    onFocus: V(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: V(
      e.onBlur,
      () => f(!1)
    )
  })))));
}), M8 = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = _t(t);
  return /* @__PURE__ */ x(Tl, E({}, r, n));
}, Xd = "MenubarContent", O8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, align: r = "start", ...o } = e, a = _t(n), s = mu(Xd, n), i = Yh(Xd, n), c = C8(n), l = I(!1);
  return /* @__PURE__ */ x(Pl, E({
    id: i.contentId,
    "aria-labelledby": i.triggerId,
    "data-radix-menubar-content": ""
  }, a, o, {
    ref: t,
    align: r,
    onCloseAutoFocus: V(e.onCloseAutoFocus, (u) => {
      if (!Boolean(s.value) && !l.current) {
        var f;
        (f = i.triggerRef.current) === null || f === void 0 || f.focus();
      }
      l.current = !1, u.preventDefault();
    }),
    onFocusOutside: V(e.onFocusOutside, (u) => {
      const d = u.target;
      c().some((m) => {
        var v;
        return (v = m.ref.current) === null || v === void 0 ? void 0 : v.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: V(e.onInteractOutside, () => {
      l.current = !0;
    }),
    onEntryFocus: (u) => {
      i.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: V(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const d = u.target, f = d.hasAttribute("data-radix-menubar-subtrigger"), m = d.closest("[data-radix-menubar-content]") !== u.currentTarget, h = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!h && f || m && h)
          return;
        let b = c().filter(
          (w) => !w.disabled
        ).map(
          (w) => w.value
        );
        h && b.reverse();
        const $ = b.indexOf(i.value);
        b = s.loop ? z8(b, $ + 1) : b.slice($ + 1);
        const [_] = b;
        _ && s.onMenuOpen(_);
      }
    }, {
      checkForDefaultPrevented: !1
    }),
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), D8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(kl, E({}, o, r, {
    ref: t
  }));
}), R8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ml, E({}, o, r, {
    ref: t
  }));
}), A8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Ol, E({}, o, r, {
    ref: t
  }));
}), I8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Dl, E({}, o, r, {
    ref: t
  }));
}), j8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Rl, E({}, o, r, {
    ref: t
  }));
}), L8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Al, E({}, o, r, {
    ref: t
  }));
}), F8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Il, E({}, o, r, {
    ref: t
  }));
}), V8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(jl, E({}, o, r, {
    ref: t
  }));
}), U8 = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = _t(t), [i = !1, c] = Qe({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(Ll, E({}, s, {
    open: i,
    onOpenChange: c
  }), n);
}, W8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Fl, E({
    "data-radix-menubar-subtrigger": ""
  }, o, r, {
    ref: t
  }));
}), B8 = /* @__PURE__ */ M((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = _t(n);
  return /* @__PURE__ */ x(Vl, E({}, o, {
    "data-radix-menubar-content": ""
  }, r, {
    ref: t,
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function z8(e, t) {
  return e.map(
    (n, r) => e[(t + r) % e.length]
  );
}
const Kh = N8, H8 = P8, Gh = k8, Zh = M8, qh = O8, Y8 = D8, Xh = R8, Jh = A8, Qh = I8, K8 = j8, e0 = L8, t0 = F8, n0 = V8, G8 = U8, r0 = W8, o0 = B8, NP = H8, TP = Y8, PP = Zh, kP = G8, MP = K8, Z8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Kh,
  {
    ref: n,
    className: A(
      "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
      e
    ),
    ...t
  }
));
Z8.displayName = Kh.displayName;
const q8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Gh,
  {
    ref: n,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      e
    ),
    ...t
  }
));
q8.displayName = Gh.displayName;
const X8 = C.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  r0,
  {
    ref: o,
    className: A(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p.exports.jsx(qo, { className: "ml-auto h-4 w-4" })
    ]
  }
));
X8.displayName = r0.displayName;
const J8 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  o0,
  {
    ref: n,
    className: A(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
J8.displayName = o0.displayName;
const Q8 = C.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ p.exports.jsx(Zh, { children: /* @__PURE__ */ p.exports.jsx(
    qh,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: A(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...o
    }
  ) })
);
Q8.displayName = qh.displayName;
const eC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Jh,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
eC.displayName = Jh.displayName;
const tC = C.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ p.exports.jsxs(
  Qh,
  {
    ref: o,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(t0, { children: /* @__PURE__ */ p.exports.jsx(On, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
tC.displayName = Qh.displayName;
const nC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  e0,
  {
    ref: r,
    className: A(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ p.exports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(t0, { children: /* @__PURE__ */ p.exports.jsx(Os, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
nC.displayName = e0.displayName;
const rC = C.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  Xh,
  {
    ref: r,
    className: A(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
rC.displayName = Xh.displayName;
const oC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  n0,
  {
    ref: n,
    className: A("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
oC.displayName = n0.displayName;
const aC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.exports.jsx(
  "span",
  {
    className: A(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
aC.displayname = "MenubarShortcut";
const xa = "NavigationMenu", [vu, a0, sC] = Vn(xa), [Rc, iC, cC] = Vn(xa), [hu, OP] = Ke(xa, [
  sC,
  cC
]), [lC, Zt] = hu(xa), [uC, dC] = hu(xa), fC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, value: r, onValueChange: o, defaultValue: a, delayDuration: s = 200, skipDelayDuration: i = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, f] = X(null), m = we(
    t,
    (R) => f(R)
  ), v = on(l), h = I(0), g = I(0), y = I(0), [b, $] = X(!0), [_ = "", w] = Qe({
    prop: r,
    onChange: (R) => {
      const ee = R !== "", re = i > 0;
      ee ? (window.clearTimeout(y.current), re && $(!1)) : (window.clearTimeout(y.current), y.current = window.setTimeout(
        () => $(!0),
        i
      )), o == null || o(R);
    },
    defaultProp: a
  }), T = pe(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(
      () => w(""),
      150
    );
  }, [
    w
  ]), k = pe((R) => {
    window.clearTimeout(g.current), w(R);
  }, [
    w
  ]), j = pe((R) => {
    _ === R ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
      window.clearTimeout(g.current), w(R);
    }, s);
  }, [
    _,
    w,
    s
  ]);
  return Q(() => () => {
    window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(y.current);
  }, []), /* @__PURE__ */ x(pC, {
    scope: n,
    isRootMenu: !0,
    value: _,
    dir: v,
    orientation: c,
    rootNavigationMenu: d,
    onTriggerEnter: (R) => {
      window.clearTimeout(h.current), b ? j(R) : k(R);
    },
    onTriggerLeave: () => {
      window.clearTimeout(h.current), T();
    },
    onContentEnter: () => window.clearTimeout(g.current),
    onContentLeave: T,
    onItemSelect: (R) => {
      w(
        (ee) => ee === R ? "" : R
      );
    },
    onItemDismiss: () => w("")
  }, /* @__PURE__ */ x(ie.nav, E({
    "aria-label": "Main",
    "data-orientation": c,
    dir: v
  }, u, {
    ref: m
  })));
}), pC = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: o, orientation: a, children: s, value: i, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: m } = e, [v, h] = X(null), [g, y] = X(/* @__PURE__ */ new Map()), [b, $] = X(null);
  return /* @__PURE__ */ x(lC, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    value: i,
    previousValue: qr(i),
    baseId: tt(),
    dir: o,
    orientation: a,
    viewport: v,
    onViewportChange: h,
    indicatorTrack: b,
    onIndicatorTrackChange: $,
    onTriggerEnter: We(u),
    onTriggerLeave: We(d),
    onContentEnter: We(f),
    onContentLeave: We(m),
    onItemSelect: We(c),
    onItemDismiss: We(l),
    onViewportContentChange: pe((_, w) => {
      y((T) => (T.set(_, w), new Map(T)));
    }, []),
    onViewportContentRemove: pe((_) => {
      y((w) => w.has(_) ? (w.delete(_), new Map(w)) : w);
    }, [])
  }, /* @__PURE__ */ x(vu.Provider, {
    scope: t
  }, /* @__PURE__ */ x(uC, {
    scope: t,
    items: g
  }, s)));
}, mC = "NavigationMenuList", vC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Zt(mC, n), a = /* @__PURE__ */ x(ie.ul, E({
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
  return /* @__PURE__ */ x(ie.div, {
    style: {
      position: "relative"
    },
    ref: o.onIndicatorTrackChange
  }, /* @__PURE__ */ x(vu.Slot, {
    scope: n
  }, o.isRootMenu ? /* @__PURE__ */ x(u0, {
    asChild: !0
  }, a) : a));
}), hC = "NavigationMenuItem", [gC, s0] = hu(hC), bC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, value: r, ...o } = e, a = tt(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = I(null), c = I(null), l = I(null), u = I(() => {
  }), d = I(!1), f = pe((v = "start") => {
    if (i.current) {
      u.current();
      const h = Ac(i.current);
      h.length && gu(v === "start" ? h : h.reverse());
    }
  }, []), m = pe(() => {
    if (i.current) {
      const v = Ac(i.current);
      v.length && (u.current = PC(v));
    }
  }, []);
  return /* @__PURE__ */ x(gC, {
    scope: n,
    value: s,
    triggerRef: c,
    contentRef: i,
    focusProxyRef: l,
    wasEscapeCloseRef: d,
    onEntryKeyDown: f,
    onFocusProxyEnter: f,
    onRootContentClose: m,
    onContentFocusOutside: m
  }, /* @__PURE__ */ x(ie.li, E({}, o, {
    ref: t
  })));
}), Jd = "NavigationMenuTrigger", xC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = Zt(Jd, e.__scopeNavigationMenu), s = s0(Jd, e.__scopeNavigationMenu), i = I(null), c = we(i, s.triggerRef, t), l = f0(a.baseId, s.value), u = p0(a.baseId, s.value), d = I(!1), f = I(!1), m = s.value === a.value;
  return /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(vu.ItemSlot, {
    scope: n,
    value: s.value
  }, /* @__PURE__ */ x(d0, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.button, E({
    id: l,
    disabled: r,
    "data-disabled": r ? "" : void 0,
    "data-state": bu(m),
    "aria-expanded": m,
    "aria-controls": u
  }, o, {
    ref: c,
    onPointerEnter: V(e.onPointerEnter, () => {
      f.current = !1, s.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: V(e.onPointerMove, vs(() => {
      r || f.current || s.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(s.value), d.current = !0);
    })),
    onPointerLeave: V(e.onPointerLeave, vs(() => {
      r || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: V(e.onClick, () => {
      a.onItemSelect(s.value), f.current = m;
    }),
    onKeyDown: V(e.onKeyDown, (v) => {
      const g = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      m && v.key === g && (s.onEntryKeyDown(), v.preventDefault());
    })
  })))), m && /* @__PURE__ */ x(Ht, null, /* @__PURE__ */ x(ev, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: s.focusProxyRef,
    onFocus: (v) => {
      const h = s.contentRef.current, g = v.relatedTarget, y = g === i.current, b = h == null ? void 0 : h.contains(g);
      (y || !b) && s.onFocusProxyEnter(y ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ x("span", {
    "aria-owns": u
  })));
}), Qd = "navigationMenu.linkSelect", yC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
  return /* @__PURE__ */ x(d0, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.a, E({
    "data-active": r ? "" : void 0,
    "aria-current": r ? "page" : void 0
  }, a, {
    ref: t,
    onClick: V(e.onClick, (s) => {
      const i = s.target, c = new CustomEvent(Qd, {
        bubbles: !0,
        cancelable: !0
      });
      if (i.addEventListener(
        Qd,
        (l) => o == null ? void 0 : o(l),
        {
          once: !0
        }
      ), Xa(i, c), !c.defaultPrevented && !s.metaKey) {
        const l = new CustomEvent(Ha, {
          bubbles: !0,
          cancelable: !0
        });
        Xa(i, l);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), i0 = "NavigationMenuIndicator", $C = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = Zt(i0, e.__scopeNavigationMenu), a = Boolean(o.value);
  return o.indicatorTrack ? /* @__PURE__ */ Xc.createPortal(/* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(wC, E({}, r, {
    ref: t
  }))), o.indicatorTrack) : null;
}), wC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Zt(i0, n), a = a0(n), [s, i] = X(null), [c, l] = X(null), u = o.orientation === "horizontal", d = Boolean(o.value);
  Q(() => {
    var m;
    const h = (m = a().find(
      (g) => g.value === o.value
    )) === null || m === void 0 ? void 0 : m.ref.current;
    h && i(h);
  }, [
    a,
    o.value
  ]);
  const f = () => {
    s && l({
      size: u ? s.offsetWidth : s.offsetHeight,
      offset: u ? s.offsetLeft : s.offsetTop
    });
  };
  return Ic(s, f), Ic(o.indicatorTrack, f), c ? /* @__PURE__ */ x(ie.div, E({
    "aria-hidden": !0,
    "data-state": d ? "visible" : "hidden",
    "data-orientation": o.orientation
  }, r, {
    ref: t,
    style: {
      position: "absolute",
      ...u ? {
        left: 0,
        width: c.size + "px",
        transform: `translateX(${c.offset}px)`
      } : {
        top: 0,
        height: c.size + "px",
        transform: `translateY(${c.offset}px)`
      },
      ...r.style
    }
  })) : null;
}), Ao = "NavigationMenuContent", _C = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = Zt(Ao, e.__scopeNavigationMenu), a = s0(Ao, e.__scopeNavigationMenu), s = we(a.contentRef, t), i = a.value === o.value, c = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ x(CC, E({
    forceMount: n
  }, c, {
    ref: s
  })) : /* @__PURE__ */ x(Ze, {
    present: n || i
  }, /* @__PURE__ */ x(c0, E({
    "data-state": bu(i)
  }, c, {
    ref: s,
    onPointerEnter: V(e.onPointerEnter, o.onContentEnter),
    onPointerLeave: V(e.onPointerLeave, vs(o.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !i && o.isRootMenu ? "none" : void 0,
      ...c.style
    }
  })));
}), CC = /* @__PURE__ */ M((e, t) => {
  const n = Zt(Ao, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return ft(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    r
  ]), ft(() => () => o(e.value), [
    e.value,
    o
  ]), null;
}), Ha = "navigationMenu.rootContentDismiss", c0 = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, value: r, triggerRef: o, focusProxyRef: a, wasEscapeCloseRef: s, onRootContentClose: i, onContentFocusOutside: c, ...l } = e, u = Zt(Ao, n), d = I(null), f = we(d, t), m = f0(u.baseId, r), v = p0(u.baseId, r), h = a0(n), g = I(null), { onItemDismiss: y } = u;
  Q(() => {
    const $ = d.current;
    if (u.isRootMenu && $) {
      const _ = () => {
        var w;
        y(), i(), $.contains(document.activeElement) && ((w = o.current) === null || w === void 0 || w.focus());
      };
      return $.addEventListener(Ha, _), () => $.removeEventListener(Ha, _);
    }
  }, [
    u.isRootMenu,
    e.value,
    o,
    y,
    i
  ]);
  const b = xt(() => {
    const _ = h().map(
      (ee) => ee.value
    );
    u.dir === "rtl" && _.reverse();
    const w = _.indexOf(u.value), T = _.indexOf(u.previousValue), k = r === u.value, j = T === _.indexOf(r);
    if (!k && !j)
      return g.current;
    const R = (() => {
      if (w !== T) {
        if (k && T !== -1)
          return w > T ? "from-end" : "from-start";
        if (j && w !== -1)
          return w > T ? "to-start" : "to-end";
      }
      return null;
    })();
    return g.current = R, R;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    h,
    r
  ]);
  return /* @__PURE__ */ x(u0, {
    asChild: !0
  }, /* @__PURE__ */ x(ir, E({
    id: v,
    "aria-labelledby": m,
    "data-motion": b,
    "data-orientation": u.orientation
  }, l, {
    ref: f,
    onDismiss: () => {
      var $;
      const _ = new Event(Ha, {
        bubbles: !0,
        cancelable: !0
      });
      ($ = d.current) === null || $ === void 0 || $.dispatchEvent(_);
    },
    onFocusOutside: V(e.onFocusOutside, ($) => {
      var _;
      c();
      const w = $.target;
      (_ = u.rootNavigationMenu) !== null && _ !== void 0 && _.contains(w) && $.preventDefault();
    }),
    onPointerDownOutside: V(e.onPointerDownOutside, ($) => {
      var _;
      const w = $.target, T = h().some((j) => {
        var R;
        return (R = j.ref.current) === null || R === void 0 ? void 0 : R.contains(w);
      }), k = u.isRootMenu && ((_ = u.viewport) === null || _ === void 0 ? void 0 : _.contains(w));
      (T || k || !u.isRootMenu) && $.preventDefault();
    }),
    onKeyDown: V(e.onKeyDown, ($) => {
      const _ = $.altKey || $.ctrlKey || $.metaKey;
      if ($.key === "Tab" && !_) {
        const k = Ac($.currentTarget), j = document.activeElement, R = k.findIndex(
          (U) => U === j
        ), re = $.shiftKey ? k.slice(0, R).reverse() : k.slice(R + 1, k.length);
        if (gu(re))
          $.preventDefault();
        else {
          var T;
          (T = a.current) === null || T === void 0 || T.focus();
        }
      }
    }),
    onEscapeKeyDown: V(e.onEscapeKeyDown, ($) => {
      s.current = !0;
    })
  })));
}), l0 = "NavigationMenuViewport", EC = /* @__PURE__ */ M((e, t) => {
  const { forceMount: n, ...r } = e, o = Zt(l0, e.__scopeNavigationMenu), a = Boolean(o.value);
  return /* @__PURE__ */ x(Ze, {
    present: n || a
  }, /* @__PURE__ */ x(SC, E({}, r, {
    ref: t
  })));
}), SC = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = Zt(l0, n), s = we(t, a.onViewportChange), i = dC(Ao, e.__scopeNavigationMenu), [c, l] = X(null), [u, d] = X(null), f = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, v = Boolean(a.value), h = v ? a.value : a.previousValue;
  return Ic(u, () => {
    u && l({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ x(ie.div, E({
    "data-state": bu(v),
    "data-orientation": a.orientation
  }, o, {
    ref: s,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !v && a.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: f,
      ["--radix-navigation-menu-viewport-height"]: m,
      ...o.style
    },
    onPointerEnter: V(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: V(e.onPointerLeave, vs(a.onContentLeave))
  }), Array.from(i.items).map(([y, { ref: b, forceMount: $, ..._ }]) => {
    const w = h === y;
    return /* @__PURE__ */ x(Ze, {
      key: y,
      present: $ || w
    }, /* @__PURE__ */ x(c0, E({}, _, {
      ref: Zo(b, (T) => {
        w && T && d(T);
      })
    })));
  }));
}), NC = "FocusGroup", u0 = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = Zt(NC, n);
  return /* @__PURE__ */ x(Rc.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Rc.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, E({
    dir: o.dir
  }, r, {
    ref: t
  }))));
}), ef = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], TC = "FocusGroupItem", d0 = /* @__PURE__ */ M((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = iC(n), a = Zt(TC, n);
  return /* @__PURE__ */ x(Rc.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x(ie.button, E({}, r, {
    ref: t,
    onKeyDown: V(e.onKeyDown, (s) => {
      if ([
        "Home",
        "End",
        ...ef
      ].includes(s.key)) {
        let c = o().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(s.key) && c.reverse(), ef.includes(s.key)) {
          const d = c.indexOf(s.currentTarget);
          c = c.slice(d + 1);
        }
        setTimeout(
          () => gu(c)
        ), s.preventDefault();
      }
    })
  })));
});
function Ac(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function gu(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function PC(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Ic(e, t) {
  const n = We(t);
  ft(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
function bu(e) {
  return e ? "open" : "closed";
}
function f0(e, t) {
  return `${e}-trigger-${t}`;
}
function p0(e, t) {
  return `${e}-content-${t}`;
}
function vs(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const m0 = fC, v0 = vC, kC = bC, h0 = xC, MC = yC, g0 = $C, b0 = _C, x0 = EC, OC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  m0,
  {
    ref: r,
    className: A(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ p.exports.jsx(y0, {})
    ]
  }
));
OC.displayName = m0.displayName;
const DC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  v0,
  {
    ref: n,
    className: A(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
DC.displayName = v0.displayName;
const DP = kC, RC = Wr(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), AC = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsxs(
  h0,
  {
    ref: r,
    className: A(RC(), "group", e),
    ...n,
    children: [
      t,
      " ",
      /* @__PURE__ */ p.exports.jsx(
        xo,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
AC.displayName = h0.displayName;
const IC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  b0,
  {
    ref: n,
    className: A(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      e
    ),
    ...t
  }
));
IC.displayName = b0.displayName;
const RP = MC, y0 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx("div", { className: A("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ p.exports.jsx(
  x0,
  {
    className: A(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      e
    ),
    ref: n,
    ...t
  }
) }));
y0.displayName = x0.displayName;
const jC = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  g0,
  {
    ref: n,
    className: A(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p.exports.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
));
jC.displayName = g0.displayName;
const $0 = "Progress", ai = 100, [LC, AP] = Ke($0), [FC, VC] = LC($0), w0 = /* @__PURE__ */ M((e, t) => {
  const { __scopeProgress: n, value: r, max: o, getValueLabel: a = BC, ...s } = e, i = jc(o) ? o : ai, c = C0(r, i) ? r : null, l = hs(c) ? a(c, i) : void 0;
  return /* @__PURE__ */ x(FC, {
    scope: n,
    value: c,
    max: i
  }, /* @__PURE__ */ x(ie.div, E({
    "aria-valuemax": i,
    "aria-valuemin": 0,
    "aria-valuenow": hs(c) ? c : void 0,
    "aria-valuetext": l,
    role: "progressbar",
    "data-state": _0(c, i),
    "data-value": c ?? void 0,
    "data-max": i
  }, s, {
    ref: t
  })));
});
w0.propTypes = {
  max(e, t, n) {
    const r = e[t], o = String(r);
    return r && !jc(r) ? new Error(zC(o, n)) : null;
  },
  value(e, t, n) {
    const r = e[t], o = String(r), a = jc(e.max) ? e.max : ai;
    return r != null && !C0(r, a) ? new Error(HC(o, n)) : null;
  }
};
const UC = "ProgressIndicator", WC = /* @__PURE__ */ M((e, t) => {
  var n;
  const { __scopeProgress: r, ...o } = e, a = VC(UC, r);
  return /* @__PURE__ */ x(ie.div, E({
    "data-state": _0(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, o, {
    ref: t
  }));
});
function BC(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function _0(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function hs(e) {
  return typeof e == "number";
}
function jc(e) {
  return hs(e) && !isNaN(e) && e > 0;
}
function C0(e, t) {
  return hs(e) && !isNaN(e) && e <= t && e >= 0;
}
function zC(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ai}\`.`;
}
function HC(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ai} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const E0 = w0, YC = WC, KC = C.forwardRef(({ className: e, value: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  E0,
  {
    ref: r,
    className: A(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx(
      YC,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
KC.displayName = E0.displayName;
const S0 = "Radio", [GC, N0] = Ke(S0), [ZC, qC] = GC(S0), XC = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadio: n, name: r, checked: o = !1, required: a, disabled: s, value: i = "on", onCheck: c, ...l } = e, [u, d] = X(null), f = we(
    t,
    (h) => d(h)
  ), m = I(!1), v = u ? Boolean(u.closest("form")) : !0;
  return /* @__PURE__ */ x(ZC, {
    scope: n,
    checked: o,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "radio",
    "aria-checked": o,
    "data-state": T0(o),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: i
  }, l, {
    ref: f,
    onClick: V(e.onClick, (h) => {
      o || c == null || c(), v && (m.current = h.isPropagationStopped(), m.current || h.stopPropagation());
    })
  })), v && /* @__PURE__ */ x(e9, {
    control: u,
    bubbles: !m.current,
    name: r,
    value: i,
    checked: o,
    required: a,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), JC = "RadioIndicator", QC = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadio: n, forceMount: r, ...o } = e, a = qC(JC, n);
  return /* @__PURE__ */ x(Ze, {
    present: r || a.checked
  }, /* @__PURE__ */ x(ie.span, E({
    "data-state": T0(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  })));
}), e9 = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = I(null), s = qr(n), i = ta(t);
  return Q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function T0(e) {
  return e ? "checked" : "unchecked";
}
const t9 = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], P0 = "RadioGroup", [n9, IP] = Ke(P0, [
  Un,
  N0
]), k0 = Un(), M0 = N0(), [r9, o9] = n9(P0), a9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadioGroup: n, name: r, defaultValue: o, value: a, required: s = !1, disabled: i = !1, orientation: c, dir: l, loop: u = !0, onValueChange: d, ...f } = e, m = k0(n), v = on(l), [h, g] = Qe({
    prop: a,
    defaultProp: o,
    onChange: d
  });
  return /* @__PURE__ */ x(r9, {
    scope: n,
    name: r,
    required: s,
    disabled: i,
    value: h,
    onValueChange: g
  }, /* @__PURE__ */ x(Vs, E({
    asChild: !0
  }, m, {
    orientation: c,
    dir: v,
    loop: u
  }), /* @__PURE__ */ x(ie.div, E({
    role: "radiogroup",
    "aria-required": s,
    "aria-orientation": c,
    "data-disabled": i ? "" : void 0,
    dir: v
  }, f, {
    ref: t
  }))));
}), s9 = "RadioGroupItem", i9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = o9(s9, n), s = a.disabled || r, i = k0(n), c = M0(n), l = I(null), u = we(t, l), d = a.value === o.value, f = I(!1);
  return Q(() => {
    const m = (h) => {
      t9.includes(h.key) && (f.current = !0);
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", m), document.addEventListener("keyup", v), () => {
      document.removeEventListener("keydown", m), document.removeEventListener("keyup", v);
    };
  }, []), /* @__PURE__ */ x(Us, E({
    asChild: !0
  }, i, {
    focusable: !s,
    active: d
  }), /* @__PURE__ */ x(XC, E({
    disabled: s,
    required: a.required,
    checked: d
  }, c, o, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(o.value),
    onKeyDown: V((m) => {
      m.key === "Enter" && m.preventDefault();
    }),
    onFocus: V(o.onFocus, () => {
      var m;
      f.current && ((m = l.current) === null || m === void 0 || m.click());
    })
  })));
}), c9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeRadioGroup: n, ...r } = e, o = M0(n);
  return /* @__PURE__ */ x(QC, E({}, o, r, {
    ref: t
  }));
}), O0 = a9, D0 = i9, l9 = c9, u9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  O0,
  {
    className: A("grid gap-2", e),
    ...t,
    ref: n
  }
));
u9.displayName = O0.displayName;
const d9 = C.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  D0,
  {
    ref: r,
    className: A(
      "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ p.exports.jsx(l9, { className: "flex items-center justify-center", children: /* @__PURE__ */ p.exports.jsx(Os, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
d9.displayName = D0.displayName;
const R0 = [
  "PageUp",
  "PageDown"
], A0 = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], I0 = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, ya = "Slider", [Lc, f9, p9] = Vn(ya), [j0, jP] = Ke(ya, [
  p9
]), [m9, si] = j0(ya), v9 = /* @__PURE__ */ M((e, t) => {
  const { name: n, min: r = 0, max: o = 100, step: a = 1, orientation: s = "horizontal", disabled: i = !1, minStepsBetweenThumbs: c = 0, defaultValue: l = [
    r
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: m = !1, ...v } = e, [h, g] = X(null), y = we(
    t,
    (W) => g(W)
  ), b = I(/* @__PURE__ */ new Set()), $ = I(0), _ = s === "horizontal", w = h ? Boolean(h.closest("form")) : !0, T = _ ? h9 : g9, [k = [], j] = Qe({
    prop: u,
    defaultProp: l,
    onChange: (W) => {
      var G;
      (G = [
        ...b.current
      ][$.current]) === null || G === void 0 || G.focus(), d(W);
    }
  }), R = I(k);
  function ee(W) {
    const G = S9(k, W);
    B(W, G);
  }
  function re(W) {
    B(W, $.current);
  }
  function U() {
    const W = R.current[$.current];
    k[$.current] !== W && f(k);
  }
  function B(W, G, { commit: J } = {
    commit: !1
  }) {
    const Y = k9(a), Z = M9(Math.round((W - r) / a) * a + r, Y), D = ko(Z, [
      r,
      o
    ]);
    j((O = []) => {
      const L = C9(O, D, G);
      if (P9(L, c * a)) {
        $.current = L.indexOf(D);
        const z = String(L) !== String(O);
        return z && J && f(L), z ? L : O;
      } else
        return O;
    });
  }
  return /* @__PURE__ */ x(m9, {
    scope: e.__scopeSlider,
    disabled: i,
    min: r,
    max: o,
    valueIndexToChangeRef: $,
    thumbs: b.current,
    values: k,
    orientation: s
  }, /* @__PURE__ */ x(Lc.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(Lc.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(T, E({
    "aria-disabled": i,
    "data-disabled": i ? "" : void 0
  }, v, {
    ref: y,
    onPointerDown: V(v.onPointerDown, () => {
      i || (R.current = k);
    }),
    min: r,
    max: o,
    inverted: m,
    onSlideStart: i ? void 0 : ee,
    onSlideMove: i ? void 0 : re,
    onSlideEnd: i ? void 0 : U,
    onHomeKeyDown: () => !i && B(r, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !i && B(o, k.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: W, direction: G }) => {
      if (!i) {
        const Z = R0.includes(W.key) || W.shiftKey && A0.includes(W.key) ? 10 : 1, D = $.current, O = k[D], L = a * Z * G;
        B(O + L, D, {
          commit: !0
        });
      }
    }
  })))), w && k.map(
    (W, G) => /* @__PURE__ */ x(_9, {
      key: G,
      name: n ? n + (k.length > 1 ? "[]" : "") : void 0,
      value: W
    })
  ));
}), [L0, F0] = j0(ya, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), h9 = /* @__PURE__ */ M((e, t) => {
  const { min: n, max: r, dir: o, inverted: a, onSlideStart: s, onSlideMove: i, onSlideEnd: c, onStepKeyDown: l, ...u } = e, [d, f] = X(null), m = we(
    t,
    ($) => f($)
  ), v = I(), h = on(o), g = h === "ltr", y = g && !a || !g && a;
  function b($) {
    const _ = v.current || d.getBoundingClientRect(), w = [
      0,
      _.width
    ], k = xu(w, y ? [
      n,
      r
    ] : [
      r,
      n
    ]);
    return v.current = _, k($ - _.left);
  }
  return /* @__PURE__ */ x(L0, {
    scope: e.__scopeSlider,
    startEdge: y ? "left" : "right",
    endEdge: y ? "right" : "left",
    direction: y ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ x(V0, E({
    dir: h,
    "data-orientation": "horizontal"
  }, u, {
    ref: m,
    style: {
      ...u.style,
      ["--radix-slider-thumb-transform"]: "translateX(-50%)"
    },
    onSlideStart: ($) => {
      const _ = b($.clientX);
      s == null || s(_);
    },
    onSlideMove: ($) => {
      const _ = b($.clientX);
      i == null || i(_);
    },
    onSlideEnd: () => {
      v.current = void 0, c == null || c();
    },
    onStepKeyDown: ($) => {
      const w = I0[y ? "from-left" : "from-right"].includes($.key);
      l == null || l({
        event: $,
        direction: w ? -1 : 1
      });
    }
  })));
}), g9 = /* @__PURE__ */ M((e, t) => {
  const { min: n, max: r, inverted: o, onSlideStart: a, onSlideMove: s, onSlideEnd: i, onStepKeyDown: c, ...l } = e, u = I(null), d = we(t, u), f = I(), m = !o;
  function v(h) {
    const g = f.current || u.current.getBoundingClientRect(), y = [
      0,
      g.height
    ], $ = xu(y, m ? [
      r,
      n
    ] : [
      n,
      r
    ]);
    return f.current = g, $(h - g.top);
  }
  return /* @__PURE__ */ x(L0, {
    scope: e.__scopeSlider,
    startEdge: m ? "bottom" : "top",
    endEdge: m ? "top" : "bottom",
    size: "height",
    direction: m ? 1 : -1
  }, /* @__PURE__ */ x(V0, E({
    "data-orientation": "vertical"
  }, l, {
    ref: d,
    style: {
      ...l.style,
      ["--radix-slider-thumb-transform"]: "translateY(50%)"
    },
    onSlideStart: (h) => {
      const g = v(h.clientY);
      a == null || a(g);
    },
    onSlideMove: (h) => {
      const g = v(h.clientY);
      s == null || s(g);
    },
    onSlideEnd: () => {
      f.current = void 0, i == null || i();
    },
    onStepKeyDown: (h) => {
      const y = I0[m ? "from-bottom" : "from-top"].includes(h.key);
      c == null || c({
        event: h,
        direction: y ? -1 : 1
      });
    }
  })));
}), V0 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, onSlideStart: r, onSlideMove: o, onSlideEnd: a, onHomeKeyDown: s, onEndKeyDown: i, onStepKeyDown: c, ...l } = e, u = si(ya, n);
  return /* @__PURE__ */ x(ie.span, E({}, l, {
    ref: t,
    onKeyDown: V(e.onKeyDown, (d) => {
      d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (i(d), d.preventDefault()) : R0.concat(A0).includes(d.key) && (c(d), d.preventDefault());
    }),
    onPointerDown: V(e.onPointerDown, (d) => {
      const f = d.target;
      f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : r(d);
    }),
    onPointerMove: V(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && o(d);
    }),
    onPointerUp: V(e.onPointerUp, (d) => {
      const f = d.target;
      f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), b9 = "SliderTrack", x9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = si(b9, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-disabled": o.disabled ? "" : void 0,
    "data-orientation": o.orientation
  }, r, {
    ref: t
  }));
}), tf = "SliderRange", y9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, ...r } = e, o = si(tf, n), a = F0(tf, n), s = I(null), i = we(t, s), c = o.values.length, l = o.values.map(
    (f) => U0(f, o.min, o.max)
  ), u = c > 1 ? Math.min(...l) : 0, d = 100 - Math.max(...l);
  return /* @__PURE__ */ x(ie.span, E({
    "data-orientation": o.orientation,
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: i,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: d + "%"
    }
  }));
}), nf = "SliderThumb", $9 = /* @__PURE__ */ M((e, t) => {
  const n = f9(e.__scopeSlider), [r, o] = X(null), a = we(
    t,
    (i) => o(i)
  ), s = xt(
    () => r ? n().findIndex(
      (i) => i.ref.current === r
    ) : -1,
    [
      n,
      r
    ]
  );
  return /* @__PURE__ */ x(w9, E({}, e, {
    ref: a,
    index: s
  }));
}), w9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeSlider: n, index: r, ...o } = e, a = si(nf, n), s = F0(nf, n), [i, c] = X(null), l = we(
    t,
    (g) => c(g)
  ), u = ta(i), d = a.values[r], f = d === void 0 ? 0 : U0(d, a.min, a.max), m = E9(r, a.values.length), v = u == null ? void 0 : u[s.size], h = v ? N9(v, f, s.direction) : 0;
  return Q(() => {
    if (i)
      return a.thumbs.add(i), () => {
        a.thumbs.delete(i);
      };
  }, [
    i,
    a.thumbs
  ]), /* @__PURE__ */ x("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [s.startEdge]: `calc(${f}% + ${h}px)`
    }
  }, /* @__PURE__ */ x(Lc.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(ie.span, E({
    role: "slider",
    "aria-label": e["aria-label"] || m,
    "aria-valuemin": a.min,
    "aria-valuenow": d,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, o, {
    ref: l,
    style: d === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: V(e.onFocus, () => {
      a.valueIndexToChangeRef.current = r;
    })
  }))));
}), _9 = (e) => {
  const { value: t, ...n } = e, r = I(null), o = qr(t);
  return Q(() => {
    const a = r.current, s = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(s, "value").set;
    if (o !== t && c) {
      const l = new Event("input", {
        bubbles: !0
      });
      c.call(a, t), a.dispatchEvent(l);
    }
  }, [
    o,
    t
  ]), /* @__PURE__ */ x("input", E({
    style: {
      display: "none"
    }
  }, n, {
    ref: r,
    defaultValue: t
  }));
};
function C9(e = [], t, n) {
  const r = [
    ...e
  ];
  return r[n] = t, r.sort(
    (o, a) => o - a
  );
}
function U0(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return ko(a, [
    0,
    100
  ]);
}
function E9(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function S9(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (o) => Math.abs(o - t)
  ), r = Math.min(...n);
  return n.indexOf(r);
}
function N9(e, t, n) {
  const r = e / 2, a = xu([
    0,
    50
  ], [
    0,
    r
  ]);
  return (r - a(t) * n) * n;
}
function T9(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function P9(e, t) {
  if (t > 0) {
    const n = T9(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function xu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function k9(e) {
  return (String(e).split(".")[1] || "").length;
}
function M9(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const W0 = v9, O9 = x9, D9 = y9, R9 = $9, A9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsxs(
  W0,
  {
    ref: n,
    className: A(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ p.exports.jsx(O9, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ p.exports.jsx(D9, { className: "absolute h-full bg-primary" }) }),
      /* @__PURE__ */ p.exports.jsx(R9, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
A9.displayName = W0.displayName;
const B0 = "Tabs", [I9, LP] = Ke(B0, [
  Un
]), z0 = Un(), [j9, yu] = I9(B0), L9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, value: r, onValueChange: o, defaultValue: a, orientation: s = "horizontal", dir: i, activationMode: c = "automatic", ...l } = e, u = on(i), [d, f] = Qe({
    prop: r,
    onChange: o,
    defaultProp: a
  });
  return /* @__PURE__ */ x(j9, {
    scope: n,
    baseId: tt(),
    value: d,
    onValueChange: f,
    orientation: s,
    dir: u,
    activationMode: c
  }, /* @__PURE__ */ x(ie.div, E({
    dir: u,
    "data-orientation": s
  }, l, {
    ref: t
  })));
}), F9 = "TabsList", V9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, loop: r = !0, ...o } = e, a = yu(F9, n), s = z0(n);
  return /* @__PURE__ */ x(Vs, E({
    asChild: !0
  }, s, {
    orientation: a.orientation,
    dir: a.dir,
    loop: r
  }), /* @__PURE__ */ x(ie.div, E({
    role: "tablist",
    "aria-orientation": a.orientation
  }, o, {
    ref: t
  })));
}), U9 = "TabsTrigger", W9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = yu(U9, n), i = z0(n), c = H0(s.baseId, r), l = Y0(s.baseId, r), u = r === s.value;
  return /* @__PURE__ */ x(Us, E({
    asChild: !0
  }, i, {
    focusable: !o,
    active: u
  }), /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": l,
    "data-state": u ? "active" : "inactive",
    "data-disabled": o ? "" : void 0,
    disabled: o,
    id: c
  }, a, {
    ref: t,
    onMouseDown: V(e.onMouseDown, (d) => {
      !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
    }),
    onKeyDown: V(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && s.onValueChange(r);
    }),
    onFocus: V(e.onFocus, () => {
      const d = s.activationMode !== "manual";
      !u && !o && d && s.onValueChange(r);
    })
  })));
}), B9 = "TabsContent", z9 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = yu(B9, n), c = H0(i.baseId, r), l = Y0(i.baseId, r), u = r === i.value, d = I(u);
  return Q(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ x(
    Ze,
    {
      present: o || u
    },
    ({ present: f }) => /* @__PURE__ */ x(ie.div, E({
      "data-state": u ? "active" : "inactive",
      "data-orientation": i.orientation,
      role: "tabpanel",
      "aria-labelledby": c,
      hidden: !f,
      id: l,
      tabIndex: 0
    }, s, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: d.current ? "0s" : void 0
      }
    }), f && a)
  );
});
function H0(e, t) {
  return `${e}-trigger-${t}`;
}
function Y0(e, t) {
  return `${e}-content-${t}`;
}
const H9 = L9, K0 = V9, G0 = W9, Z0 = z9, FP = H9, Y9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  K0,
  {
    ref: n,
    className: A(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
Y9.displayName = K0.displayName;
const K9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  G0,
  {
    ref: n,
    className: A(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
K9.displayName = G0.displayName;
const G9 = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  Z0,
  {
    ref: n,
    className: A(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
G9.displayName = Z0.displayName;
const Z9 = /* @__PURE__ */ M((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...a } = e, [s = !1, i] = Qe({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ x(ie.button, E({
    type: "button",
    "aria-pressed": s,
    "data-state": s ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: V(e.onClick, () => {
      e.disabled || i(!s);
    })
  }));
}), q0 = Z9, q9 = Wr(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), X9 = C.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ p.exports.jsx(
  q0,
  {
    ref: o,
    className: A(q9({ variant: t, size: n, className: e })),
    ...r
  }
));
X9.displayName = q0.displayName;
const [ii, VP] = Ke("Tooltip", [
  an
]), $u = an(), J9 = "TooltipProvider", Q9 = 700, Fc = "tooltip.open", [eE, wu] = ii(J9), tE = (e) => {
  const { __scopeTooltip: t, delayDuration: n = Q9, skipDelayDuration: r = 300, disableHoverableContent: o = !1, children: a } = e, [s, i] = X(!0), c = I(!1), l = I(0);
  return Q(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ x(eE, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: pe(() => {
      window.clearTimeout(l.current), i(!1);
    }, []),
    onClose: pe(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => i(!0),
        r
      );
    }, [
      r
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: pe((u) => {
      c.current = u;
    }, []),
    disableHoverableContent: o
  }, a);
}, _u = "Tooltip", [nE, ci] = ii(_u), rE = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = !1, onOpenChange: a, disableHoverableContent: s, delayDuration: i } = e, c = wu(_u, e.__scopeTooltip), l = $u(t), [u, d] = X(null), f = tt(), m = I(0), v = s ?? c.disableHoverableContent, h = i ?? c.delayDuration, g = I(!1), [y = !1, b] = Qe({
    prop: r,
    defaultProp: o,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Fc))) : c.onClose(), a == null || a(k);
    }
  }), $ = xt(() => y ? g.current ? "delayed-open" : "instant-open" : "closed", [
    y
  ]), _ = pe(() => {
    window.clearTimeout(m.current), g.current = !1, b(!0);
  }, [
    b
  ]), w = pe(() => {
    window.clearTimeout(m.current), b(!1);
  }, [
    b
  ]), T = pe(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      g.current = !0, b(!0);
    }, h);
  }, [
    h,
    b
  ]);
  return Q(() => () => window.clearTimeout(m.current), []), /* @__PURE__ */ x(Gr, l, /* @__PURE__ */ x(nE, {
    scope: t,
    contentId: f,
    open: y,
    stateAttribute: $,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: pe(() => {
      c.isOpenDelayed ? T() : _();
    }, [
      c.isOpenDelayed,
      T,
      _
    ]),
    onTriggerLeave: pe(() => {
      v ? w() : window.clearTimeout(m.current);
    }, [
      w,
      v
    ]),
    onOpen: _,
    onClose: w,
    disableHoverableContent: v
  }, n));
}, rf = "TooltipTrigger", oE = /* @__PURE__ */ M((e, t) => {
  const { __scopeTooltip: n, ...r } = e, o = ci(rf, n), a = wu(rf, n), s = $u(n), i = I(null), c = we(t, i, o.onTriggerChange), l = I(!1), u = I(!1), d = pe(
    () => l.current = !1,
    []
  );
  return Q(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ x(na, E({
    asChild: !0
  }, s), /* @__PURE__ */ x(ie.button, E({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": o.open ? o.contentId : void 0,
    "data-state": o.stateAttribute
  }, r, {
    ref: c,
    onPointerMove: V(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: V(e.onPointerLeave, () => {
      o.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: V(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: V(e.onFocus, () => {
      l.current || o.onOpen();
    }),
    onBlur: V(e.onBlur, o.onClose),
    onClick: V(e.onClick, o.onClose)
  })));
}), aE = "TooltipPortal", [UP, sE] = ii(aE, {
  forceMount: void 0
}), Io = "TooltipContent", iE = /* @__PURE__ */ M((e, t) => {
  const n = sE(Io, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = ci(Io, e.__scopeTooltip);
  return /* @__PURE__ */ x(Ze, {
    present: r || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ x(X0, E({
    side: o
  }, a, {
    ref: t
  })) : /* @__PURE__ */ x(cE, E({
    side: o
  }, a, {
    ref: t
  })));
}), cE = /* @__PURE__ */ M((e, t) => {
  const n = ci(Io, e.__scopeTooltip), r = wu(Io, e.__scopeTooltip), o = I(null), a = we(t, o), [s, i] = X(null), { trigger: c, onClose: l } = n, u = o.current, { onPointerInTransitChange: d } = r, f = pe(() => {
    i(null), d(!1);
  }, [
    d
  ]), m = pe((v, h) => {
    const g = v.currentTarget, y = {
      x: v.clientX,
      y: v.clientY
    }, b = uE(y, g.getBoundingClientRect()), $ = dE(y, b), _ = fE(h.getBoundingClientRect()), w = mE([
      ...$,
      ..._
    ]);
    i(w), d(!0);
  }, [
    d
  ]);
  return Q(() => () => f(), [
    f
  ]), Q(() => {
    if (c && u) {
      const v = (g) => m(g, u), h = (g) => m(g, c);
      return c.addEventListener("pointerleave", v), u.addEventListener("pointerleave", h), () => {
        c.removeEventListener("pointerleave", v), u.removeEventListener("pointerleave", h);
      };
    }
  }, [
    c,
    u,
    m,
    f
  ]), Q(() => {
    if (s) {
      const v = (h) => {
        const g = h.target, y = {
          x: h.clientX,
          y: h.clientY
        }, b = (c == null ? void 0 : c.contains(g)) || (u == null ? void 0 : u.contains(g)), $ = !pE(y, s);
        b ? f() : $ && (f(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [
    c,
    u,
    s,
    l,
    f
  ]), /* @__PURE__ */ x(X0, E({}, e, {
    ref: a
  }));
}), [lE, WP] = ii(_u, {
  isInside: !1
}), X0 = /* @__PURE__ */ M((e, t) => {
  const { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: a, onPointerDownOutside: s, ...i } = e, c = ci(Io, n), l = $u(n), { onClose: u } = c;
  return Q(() => (document.addEventListener(Fc, u), () => document.removeEventListener(Fc, u)), [
    u
  ]), Q(() => {
    if (c.trigger) {
      const d = (f) => {
        const m = f.target;
        m != null && m.contains(c.trigger) && u();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    u
  ]), /* @__PURE__ */ x(ir, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: s,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ x(ra, E({
    "data-state": c.stateAttribute
  }, l, i, {
    ref: t,
    style: {
      ...i.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ x(Qc, null, r), /* @__PURE__ */ x(lE, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ x(ev, {
    id: c.contentId,
    role: "tooltip"
  }, o || r))));
});
function uE(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function dE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      r.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      r.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return r;
}
function fE(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    {
      x: o,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: r
    },
    {
      x: o,
      y: r
    }
  ];
}
function pE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function mE(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), vE(t);
}
function vE(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        t.pop();
      else
        break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        n.pop();
      else
        break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const hE = tE, gE = rE, bE = oE, J0 = iE, Ir = hE, jr = gE, Lr = bE, tr = C.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ p.exports.jsx(
  J0,
  {
    ref: r,
    sideOffset: t,
    className: A(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
));
tr.displayName = J0.displayName;
const Q0 = "Switch", [xE, BP] = Ke(Q0), [yE, $E] = xE(Q0), wE = /* @__PURE__ */ M((e, t) => {
  const { __scopeSwitch: n, name: r, checked: o, defaultChecked: a, required: s, disabled: i, value: c = "on", onCheckedChange: l, ...u } = e, [d, f] = X(null), m = we(
    t,
    (b) => f(b)
  ), v = I(!1), h = d ? Boolean(d.closest("form")) : !0, [g = !1, y] = Qe({
    prop: o,
    defaultProp: a,
    onChange: l
  });
  return /* @__PURE__ */ x(yE, {
    scope: n,
    checked: g,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, E({
    type: "button",
    role: "switch",
    "aria-checked": g,
    "aria-required": s,
    "data-state": eg(g),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: c
  }, u, {
    ref: m,
    onClick: V(e.onClick, (b) => {
      y(
        ($) => !$
      ), h && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
    })
  })), h && /* @__PURE__ */ x(EE, {
    control: d,
    bubbles: !v.current,
    name: r,
    value: c,
    checked: g,
    required: s,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), _E = "SwitchThumb", CE = /* @__PURE__ */ M((e, t) => {
  const { __scopeSwitch: n, ...r } = e, o = $E(_E, n);
  return /* @__PURE__ */ x(ie.span, E({
    "data-state": eg(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, r, {
    ref: t
  }));
}), EE = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e, a = I(null), s = qr(n), i = ta(t);
  return Q(() => {
    const c = a.current, l = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (s !== n && d) {
      const f = new Event("click", {
        bubbles: r
      });
      d.call(c, n), c.dispatchEvent(f);
    }
  }, [
    s,
    n,
    r
  ]), /* @__PURE__ */ x("input", E({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, o, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...i,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function eg(e) {
  return e ? "checked" : "unchecked";
}
const tg = wE, SE = CE, NE = C.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.exports.jsx(
  tg,
  {
    className: A(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ p.exports.jsx(
      SE,
      {
        className: A(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
NE.displayName = tg.displayName;
const of = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach((f) => f(t, d));
    }
  }, o = () => t, i = { setState: r, getState: o, subscribe: (c) => (n.add(c), () => n.delete(c)), destroy: () => {
    n.clear();
  } };
  return t = e(r, o, i), i;
}, TE = (e) => e ? of(e) : of;
var ng = { exports: {} }, zi = {}, Hi = { exports: {} }, Yi = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af;
function PE() {
  if (af)
    return Yi;
  af = 1;
  var e = N;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(d, f) {
    var m = f(), v = r({ inst: { value: m, getSnapshot: f } }), h = v[0].inst, g = v[1];
    return a(function() {
      h.value = m, h.getSnapshot = f, c(h) && g({ inst: h });
    }, [d, m, f]), o(function() {
      return c(h) && g({ inst: h }), d(function() {
        c(h) && g({ inst: h });
      });
    }, [d]), s(m), m;
  }
  function c(d) {
    var f = d.getSnapshot;
    d = d.value;
    try {
      var m = f();
      return !n(d, m);
    } catch {
      return !0;
    }
  }
  function l(d, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return Yi.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Yi;
}
var Ki = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function kE() {
  return sf || (sf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n($) {
      {
        for (var _ = arguments.length, w = new Array(_ > 1 ? _ - 1 : 0), T = 1; T < _; T++)
          w[T - 1] = arguments[T];
        r("error", $, w);
      }
    }
    function r($, _, w) {
      {
        var T = t.ReactDebugCurrentFrame, k = T.getStackAddendum();
        k !== "" && (_ += "%s", w = w.concat([k]));
        var j = w.map(function(R) {
          return String(R);
        });
        j.unshift("Warning: " + _), Function.prototype.apply.call(console[$], console, j);
      }
    }
    function o($, _) {
      return $ === _ && ($ !== 0 || 1 / $ === 1 / _) || $ !== $ && _ !== _;
    }
    var a = typeof Object.is == "function" ? Object.is : o, s = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function f($, _, w) {
      u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var T = _();
      if (!d) {
        var k = _();
        a(T, k) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var j = s({
        inst: {
          value: T,
          getSnapshot: _
        }
      }), R = j[0].inst, ee = j[1];
      return c(function() {
        R.value = T, R.getSnapshot = _, m(R) && ee({
          inst: R
        });
      }, [$, T, _]), i(function() {
        m(R) && ee({
          inst: R
        });
        var re = function() {
          m(R) && ee({
            inst: R
          });
        };
        return $(re);
      }, [$]), l(T), T;
    }
    function m($) {
      var _ = $.getSnapshot, w = $.value;
      try {
        var T = _();
        return !a(w, T);
      } catch {
        return !0;
      }
    }
    function v($, _, w) {
      return _();
    }
    var h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", g = !h, y = g ? v : f, b = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y;
    Ki.useSyncExternalStore = b, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ki;
}
var cf;
function rg() {
  return cf || (cf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = PE() : e.exports = kE();
  }(Hi)), Hi.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf;
function ME() {
  if (lf)
    return zi;
  lf = 1;
  var e = N, t = rg();
  function n(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return zi.useSyncExternalStoreWithSelector = function(l, u, d, f, m) {
    var v = a(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else
      h = v.current;
    v = i(function() {
      function y(T) {
        if (!b) {
          if (b = !0, $ = T, T = f(T), m !== void 0 && h.hasValue) {
            var k = h.value;
            if (m(k, T))
              return _ = k;
          }
          return _ = T;
        }
        if (k = _, r($, T))
          return k;
        var j = f(T);
        return m !== void 0 && m(k, j) ? k : ($ = T, _ = j);
      }
      var b = !1, $, _, w = d === void 0 ? null : d;
      return [function() {
        return y(u());
      }, w === null ? void 0 : function() {
        return y(w());
      }];
    }, [u, d, f, m]);
    var g = o(l, v[0], v[1]);
    return s(function() {
      h.hasValue = !0, h.value = g;
    }, [g]), c(g), g;
  }, zi;
}
var Gi = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uf;
function OE() {
  return uf || (uf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = N, t = rg();
    function n(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var r = typeof Object.is == "function" ? Object.is : n, o = t.useSyncExternalStore, a = e.useRef, s = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(u, d, f, m, v) {
      var h = a(null), g;
      h.current === null ? (g = {
        hasValue: !1,
        value: null
      }, h.current = g) : g = h.current;
      var y = i(function() {
        var w = !1, T, k, j = function(U) {
          if (!w) {
            w = !0, T = U;
            var B = m(U);
            if (v !== void 0 && g.hasValue) {
              var W = g.value;
              if (v(W, B))
                return k = W, W;
            }
            return k = B, B;
          }
          var G = T, J = k;
          if (r(G, U))
            return J;
          var Y = m(U);
          return v !== void 0 && v(J, Y) ? J : (T = U, k = Y, Y);
        }, R = f === void 0 ? null : f, ee = function() {
          return j(d());
        }, re = R === null ? void 0 : function() {
          return j(R());
        };
        return [ee, re];
      }, [d, f, m, v]), b = y[0], $ = y[1], _ = o(u, b, $);
      return s(function() {
        g.hasValue = !0, g.value = _;
      }, [_]), c(_), _;
    }
    Gi.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Gi;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ME() : e.exports = OE();
})(ng);
const DE = /* @__PURE__ */ Zg(ng.exports), { useSyncExternalStoreWithSelector: RE } = DE;
function AE(e, t = e.getState, n) {
  const r = RE(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    n
  );
  return Hg(r), r;
}
const df = (e) => {
  const t = typeof e == "function" ? TE(e) : e, n = (r, o) => AE(t, r, o);
  return Object.assign(n, t), n;
}, og = (e) => e ? df(e) : df, IE = ({ profile: e, isExpanded: t }) => /* @__PURE__ */ p.exports.jsxs("header", { className: `${t ? "justify-start" : "justify-center"} w-full h-14 flex items-start gap-x-3`, children: [
  /* @__PURE__ */ p.exports.jsxs(Br, { className: "w-16 h-full border border-gray-200 shadow-sm rounded-md", children: [
    /* @__PURE__ */ p.exports.jsx(
      zr,
      {
        className: "h-full border border-gray-200 object-cover rounded-md",
        src: e == null ? void 0 : e.photo
      }
    ),
    /* @__PURE__ */ p.exports.jsx(Hr, { className: "p-2 rounded-md h-full bg-transparent", children: /* @__PURE__ */ p.exports.jsx(Fb, { className: "text-black dark:text-white h-full" }) })
  ] }),
  t && /* @__PURE__ */ p.exports.jsxs("section", { className: "w-full h-full flex flex-col justify-center", children: [
    /* @__PURE__ */ p.exports.jsxs("span", { className: "truncate", children: [
      e == null ? void 0 : e.name,
      " ",
      e == null ? void 0 : e.lastname
    ] }),
    (e == null ? void 0 : e.role) && /* @__PURE__ */ p.exports.jsx(po, { className: "w-full", children: e.role })
  ] })
] }), jE = ({ isExpanded: e, theme: t }) => /* @__PURE__ */ p.exports.jsx(
  "button",
  {
    onClick: t.toggleTheme,
    className: `w-full border-2 border-transparent flex ${e ? "justify-center" : ""} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
    children: t.value === "light" ? /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
      /* @__PURE__ */ p.exports.jsx(Db, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Oscuro" })
    ] }) : /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
      /* @__PURE__ */ p.exports.jsx(jb, { className: "dark:text-white" }),
      !e && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Claro" })
    ] })
  }
), LE = ({ logout: e, isExpanded: t, toggleExpandSidebar: n, theme: r }) => /* @__PURE__ */ p.exports.jsxs("section", { className: "pl-2 pr-3", children: [
  /* @__PURE__ */ p.exports.jsx("div", { className: "border border-slate-200 w-full" }),
  /* @__PURE__ */ p.exports.jsxs("ul", { className: "mt-2 space-y-2", children: [
    /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsx(jE, { isExpanded: !t, theme: r }) }),
    /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsxs(
      "button",
      {
        onClick: n,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          t ? /* @__PURE__ */ p.exports.jsx(Rb, { className: "dark:text-white", size: 20 }) : /* @__PURE__ */ p.exports.jsx(Ab, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Menu" })
        ]
      }
    ) }),
    e && /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsxs(
      "button",
      {
        onClick: e,
        className: `w-full border-2 border-transparent flex ${t ? "" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ p.exports.jsx(Ob, { className: "dark:text-white", size: 20 }),
          t && /* @__PURE__ */ p.exports.jsx("span", { className: "pl-2 dark:text-white text-sm", children: "Cerrar Sesión" })
        ]
      }
    ) })
  ] })
] }), li = og((e) => ({
  isExpanded: !0,
  setIsExpanded: (t) => e({ isExpanded: t }),
  toggleExpandSidebar: () => e((t) => ({ isExpanded: !t.isExpanded }))
})), zP = ({ children: e, className: t, profile: n, logout: r, theme: o }) => {
  const { isExpanded: a, toggleExpandSidebar: s } = li();
  return /* @__PURE__ */ p.exports.jsx(
    "aside",
    {
      tabIndex: -1,
      className: A(
        "sidebar dark:border-transparent overflow-hidden hidden lg:block",
        t,
        `${a ? "max-w-[240px]" : "max-w-[100px]"}`
      ),
      children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full py-8 grid grid-rows-[56px_1fr_160px] h-full gap-y-3 px-3", children: [
        /* @__PURE__ */ p.exports.jsx(IE, { isExpanded: a, profile: n }),
        e,
        /* @__PURE__ */ p.exports.jsx(
          LE,
          {
            theme: o,
            logout: r,
            isExpanded: a,
            toggleExpandSidebar: s
          }
        )
      ] })
    }
  );
}, HP = ({ children: e }) => {
  const { isExpanded: t } = li();
  return /* @__PURE__ */ p.exports.jsx("section", { className: "w-full h-full py-3 scroll-content", children: /* @__PURE__ */ p.exports.jsx("div", { className: `${t ? " pr-2" : "pl-2"} w-full space-y-3`, children: e }) });
}, YP = ({ to: e, label: t, icon: n, pathname: r, Link: o }) => {
  const [a, s] = X(!1), i = I(null), { isExpanded: c } = li();
  return Q(() => {
    const l = () => {
      const u = i.current.querySelector(`#${e.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        s(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [e]), o ? /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    o,
    {
      href: e,
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${c ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: n }),
        !a && c && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && c && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    "div",
    {
      ref: i,
      className: `cursor-pointer border-2 border-transparent flex ${c ? "justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${r.startsWith(e) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: n }),
        !a && c && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: e.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: t
          }
        ),
        a && c && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: e.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: t
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: t }) })
        ] })
      ]
    }
  ) });
}, ff = ({ isExpanded: e, pathname: t, to: n, icon: r, label: o, Link: a }) => {
  const [s, i] = X(!1), c = I(null);
  return Q(() => {
    const l = () => {
      const u = c.current.querySelector(`#${n.replaceAll("/", "_")}`);
      if (u) {
        const d = u.offsetWidth < u.scrollWidth;
        i(d);
      }
    };
    return window.addEventListener("resize", l), l(), () => window.removeEventListener("resize", l);
  }, [n]), a ? /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    a,
    {
      href: n,
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
        ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) }) : /* @__PURE__ */ p.exports.jsx(Ir, { delayDuration: 180, children: /* @__PURE__ */ p.exports.jsxs(
    "div",
    {
      ref: c,
      className: `cursor-pointer border-2 border-transparent flex ${e ? "pl-4 justify-start h-[42px]" : "justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover 
          ${t.startsWith(n) && "border-2 border-gray-300 bg-gray-200 dark:border-dark dark:bg-main-hover"} select-none`,
      children: [
        /* @__PURE__ */ p.exports.jsx("div", { children: r }),
        !s && e && /* @__PURE__ */ p.exports.jsx(
          "span",
          {
            id: n.replaceAll("/", "_"),
            className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
            children: o
          }
        ),
        s && e && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
          /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
            "span",
            {
              id: n.replaceAll("/", "_"),
              className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
              children: o
            }
          ) }),
          /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: o }) })
        ] })
      ]
    }
  ) });
}, KP = ({ label: e, icon: t, sublinks: n, pathname: r, Link: o }) => {
  const [a, s] = X(!1), [i, c] = X(!1), { isExpanded: l } = li(), u = I(null), d = () => c((m) => !m), f = e.replaceAll(" ", "_");
  return Q(() => {
    const m = () => {
      const v = u.current.querySelector(`#${f}`);
      if (v) {
        const h = v.offsetWidth < v.scrollWidth;
        s(h);
      }
    };
    return window.addEventListener("resize", m), m(), () => window.removeEventListener("resize", m);
  }, [e]), o ? /* @__PURE__ */ p.exports.jsxs(Ir, { delayDuration: 180, children: [
    /* @__PURE__ */ p.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ p.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ p.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
              /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ p.exports.jsx(Bu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ p.exports.jsx(xo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ p.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsx(
      ff,
      {
        ...m,
        Link: o,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] }) : /* @__PURE__ */ p.exports.jsxs(Ir, { delayDuration: 180, children: [
    /* @__PURE__ */ p.exports.jsxs(
      "div",
      {
        ref: u,
        onClick: d,
        className: `cursor-pointer border-2 border-transparent grid grid-rows-1 ${l ? "grid-cols-8 justify-center h-[42px]" : "grid-cols-2 justify-center"} items-center p-2 group group-hover:text-black text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 hover:dark:bg-main-hover select-none`,
        children: [
          /* @__PURE__ */ p.exports.jsxs("div", { className: `flex w-full justify-start items-center ${l ? "col-span-7" : "col-span-1"}`, children: [
            /* @__PURE__ */ p.exports.jsx("div", { children: t }),
            !a && l && /* @__PURE__ */ p.exports.jsx(
              "span",
              {
                id: f,
                className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                children: e
              }
            ),
            a && l && /* @__PURE__ */ p.exports.jsxs(jr, { children: [
              /* @__PURE__ */ p.exports.jsx(Lr, { className: "truncate", children: /* @__PURE__ */ p.exports.jsx(
                "span",
                {
                  id: f,
                  className: "pl-2 mt-0.5 dark:text-white text-sm whitespace-nowrap truncate block",
                  children: e
                }
              ) }),
              /* @__PURE__ */ p.exports.jsx(tr, { children: /* @__PURE__ */ p.exports.jsx("p", { children: e }) })
            ] })
          ] }),
          /* @__PURE__ */ p.exports.jsx("div", { className: "col-span-1 w-fit", children: i ? /* @__PURE__ */ p.exports.jsx(Bu, { className: "justify-self-end dark:text-white", size: 20 }) : /* @__PURE__ */ p.exports.jsx(xo, { className: "justify-self-end dark:text-white", size: 20 }) })
        ]
      }
    ),
    /* @__PURE__ */ p.exports.jsx("ul", { className: `${i ? "block" : "hidden"} space-y-2`, children: n.map((m) => /* @__PURE__ */ p.exports.jsx("li", { children: /* @__PURE__ */ p.exports.jsx(
      ff,
      {
        ...m,
        pathname: r,
        isExpanded: l
      }
    ) }, m.to)) })
  ] });
};
og((e, t) => ({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  onSubmitTable: null,
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  },
  setInitialTable: (n) => e((r) => {
    const o = (c) => (c == null ? void 0 : c.filters) && (c == null ? void 0 : c.filters.length), a = n.columns.filter(o).map((c) => {
      const l = c.filters.map((d) => ({ ...d, selected: !1 })), u = { ...c, id: c.id, options: l };
      return delete u.filters, u;
    }), i = n.columns.filter((c) => c.isQuery).map((c) => ({
      id: c.id,
      label: c.label
    }));
    return {
      ...r,
      queries: i,
      filters: a,
      data: (n == null ? void 0 : n.data) ?? [],
      columns: n == null ? void 0 : n.columns,
      pagination: n.pagination,
      onSubmitTable: n.onSubmitTable
    };
  }),
  getFilterOptionsSelectedById: (n) => {
    const r = t().filters.find((o) => o.id === n);
    return r ? r.options.filter((o) => o.selected).map((o) => o.value) : [];
  },
  getFiltersWithOptionsSelected: () => t().filters.map((n) => ({
    id: n.id,
    values: n.options.filter((r) => r.selected).map((r) => r.value)
  })).filter((n) => n.values.length > 0),
  setShowFilters: (n) => e((r) => ({ ...r, showFilters: n })),
  selectOptionFilter: (n, r, o) => e((a) => {
    const s = a.filters.map((i) => i.id === n ? {
      ...i,
      options: i.options.map((c) => c.id === r ? { ...c, selected: o } : c)
    } : i);
    return { ...a, filters: s };
  }),
  resetFilters: () => e((n) => {
    const r = n.filters.map((o) => ({
      ...o,
      options: o.options.map((a) => ({ ...a, selected: !1 }))
    }));
    return { ...n, filters: r };
  }),
  updateLimit: (n) => {
    const { filters: r, queries: o, onSubmitTable: a, pagination: { page: s } } = t();
    e((i) => ({ ...i, pagination: { ...i.pagination, limit: n } })), a({ filters: r, queries: o, limit: n, page: s });
  },
  updatePage: (n) => e((r) => ({ ...r, pagination: { ...r.pagination, page: n } })),
  setPagination: (n) => e((r) => ({ ...r, pagination: n })),
  nextPage: () => {
    e((i) => ({
      ...i,
      pagination: { ...i.pagination, page: i.pagination.page + 1 }
    }));
    const { filters: n, queries: r, onSubmitTable: o, pagination: { page: a, limit: s } } = t();
    o({ filters: n, queries: r, limit: s, page: a });
  },
  prevPage: () => {
    e((i) => {
      const c = i.pagination.page, l = c === 1 ? 1 : c - 1;
      return {
        ...i,
        pagination: { ...i.pagination, page: l }
      };
    });
    const { filters: n, queries: r, onSubmitTable: o, pagination: { page: a, limit: s } } = t();
    a !== 1 && o({ filters: n, queries: r, limit: s, page: a });
  },
  setColumns: (n) => e((r) => ({ ...r, columns: n })),
  setFilters: (n) => e((r) => ({ ...r, filters: n })),
  setQueries: (n) => e((r) => ({ ...r, queries: n })),
  setData: (n) => e((r) => ({ ...r, data: n }))
}));
const zn = mt({
  data: [],
  filters: [],
  queries: [],
  columns: [],
  showFilters: !0,
  searchForm: null,
  onSubmitTable: null,
  setSearchForm: () => {
  },
  pagination: {
    limit: 5,
    page: 1,
    labels: { plural: "Items", single: "Item" },
    hasPrevPage: !1,
    hasNextPage: !1
  }
});
function FE() {
  const { pagination: e, updateLimit: t, nextPage: n, prevPage: r } = rt(zn);
  return /* @__PURE__ */ p.exports.jsx("div", { className: "flex flex-wrap items-center justify-end", children: /* @__PURE__ */ p.exports.jsxs("div", { className: "flex items-end sm:items-center space-x-6 lg:space-x-8 mt-2 sm:mt-0", children: [
    /* @__PURE__ */ p.exports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ p.exports.jsxs("p", { className: "text-sm font-medium", children: [
        e.labels.plural,
        " por Pagina"
      ] }),
      /* @__PURE__ */ p.exports.jsxs(
        dv,
        {
          value: `${e.limit}`,
          onValueChange: (o) => t(Number(o)),
          children: [
            /* @__PURE__ */ p.exports.jsx(Jl, { className: "h-8 w-[70px]", children: /* @__PURE__ */ p.exports.jsx(fv, { placeholder: e.limit }) }),
            /* @__PURE__ */ p.exports.jsx(Ql, { side: "top", children: [5, 10, 15, 20].map((o) => /* @__PURE__ */ p.exports.jsx(eu, { value: `${o}`, children: o }, o)) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ p.exports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ p.exports.jsxs(
        at,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => r(),
          disabled: !e.hasPrevPage,
          children: [
            /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Pagina Anterior" }),
            /* @__PURE__ */ p.exports.jsx(Hf, { className: "h-4 w-4" })
          ]
        }
      ),
      /* @__PURE__ */ p.exports.jsx("div", { children: /* @__PURE__ */ p.exports.jsxs("p", { className: "text-sm font-medium", children: [
        "Pagina ",
        e.page
      ] }) }),
      /* @__PURE__ */ p.exports.jsxs(
        at,
        {
          type: "button",
          variant: "outline",
          className: "h-8 w-8 p-0",
          onClick: () => n(),
          disabled: !e.hasNextPage,
          children: [
            /* @__PURE__ */ p.exports.jsx("span", { className: "sr-only", children: "Siguiente Pagina" }),
            /* @__PURE__ */ p.exports.jsx(qo, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}
const VE = () => {
  const { columns: e } = rt(zn);
  return /* @__PURE__ */ p.exports.jsx(mh, { children: /* @__PURE__ */ p.exports.jsx(ni, { children: e.length > 0 && e.map((t, n) => /* @__PURE__ */ p.exports.jsx(hh, { children: t.label }, `${t.id}-${n}`)) }) });
}, GP = (e) => {
  const t = (e == null ? void 0 : e.hasNextPage) ?? !1, n = (e == null ? void 0 : e.hasPrevPage) ?? !1, r = (e == null ? void 0 : e.limit) ?? 10, o = (e == null ? void 0 : e.page) ?? 1;
  return { hasNextPage: t, hasPrevPage: n, limit: r, page: o, labels: { plural: "Items", single: "Item" } };
}, ZP = { limit: 10, page: 1 }, pf = () => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
  /[018]/g,
  (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
), qP = (e, t) => [
  ...truckColumns.slice(0, truckColumns.length - 1),
  e,
  ...truckColumns.slice(truckColumns.length - 1)
], UE = ({ colSpan: e }) => /* @__PURE__ */ p.exports.jsx(ni, { children: /* @__PURE__ */ p.exports.jsx(au, { colSpan: e, className: "h-24 text-center", children: "Sin Resultados" }) }), WE = ({ data: e, columns: t }) => /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: e.map((n) => /* @__PURE__ */ p.exports.jsx(ni, { children: t.map((r) => /* @__PURE__ */ p.exports.jsx(au, { children: r != null && r.render ? /* @__PURE__ */ p.exports.jsx("div", { children: r.render(n) }) : /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: n[r.id] }) }, pf())) }, pf())) }), BE = () => {
  const { data: e, columns: t } = rt(zn);
  return /* @__PURE__ */ p.exports.jsx(vh, { children: e.length ? /* @__PURE__ */ p.exports.jsx(WE, { data: e, columns: t }) : /* @__PURE__ */ p.exports.jsx(UE, { colSpan: t.length }) });
}, zE = () => /* @__PURE__ */ p.exports.jsxs(ph, { children: [
  /* @__PURE__ */ p.exports.jsx(VE, {}),
  /* @__PURE__ */ p.exports.jsx(BE, {})
] }), HE = () => /* @__PURE__ */ p.exports.jsx("span", { className: "loader-fade-dot" }), YE = () => /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: [
  /* @__PURE__ */ p.exports.jsx(HE, {}),
  /* @__PURE__ */ p.exports.jsx("h6", { className: "font-semibold", children: "Cargando..." })
] });
var mf = function(e, t, n) {
  if (e && "reportValidity" in e) {
    var r = fe(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, ag = function(e, t) {
  var n = function(o) {
    var a = t.fields[o];
    a && a.ref && "reportValidity" in a.ref ? mf(a.ref, o, e) : a.refs && a.refs.forEach(function(s) {
      return mf(s, o, e);
    });
  };
  for (var r in t.fields)
    n(r);
}, KE = function(e, t) {
  t.shouldUseNativeValidation && ag(e, t);
  var n = {};
  for (var r in e) {
    var o = fe(t.fields, r);
    Be(n, r, Object.assign(e[r] || {}, { ref: o && o.ref }));
  }
  return n;
}, GE = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, a = r.message, s = r.path.join(".");
    if (!n[s])
      if ("unionErrors" in r) {
        var i = r.unionErrors[0].errors[0];
        n[s] = { message: i.message, type: i.code };
      } else
        n[s] = { message: a, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var c = n[s].types, l = c && c[r.code];
      n[s] = Em(s, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, ZE = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, a) {
    try {
      return Promise.resolve(function(s, i) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return a.shouldUseNativeValidation && ag({}, a), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(s) {
        if (function(i) {
          return i.errors != null;
        }(s))
          return { values: {}, errors: KE(GE(s.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw s;
      }));
    } catch (s) {
      return Promise.reject(s);
    }
  };
}, pn = { exports: {} }, Zi = { exports: {} }, Le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vf;
function qE() {
  if (vf)
    return Le;
  vf = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function $(w) {
    if (typeof w == "object" && w !== null) {
      var T = w.$$typeof;
      switch (T) {
        case t:
          switch (w = w.type, w) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case u:
                case v:
                case m:
                case s:
                  return w;
                default:
                  return T;
              }
          }
        case n:
          return T;
      }
    }
  }
  function _(w) {
    return $(w) === l;
  }
  return Le.AsyncMode = c, Le.ConcurrentMode = l, Le.ContextConsumer = i, Le.ContextProvider = s, Le.Element = t, Le.ForwardRef = u, Le.Fragment = r, Le.Lazy = v, Le.Memo = m, Le.Portal = n, Le.Profiler = a, Le.StrictMode = o, Le.Suspense = d, Le.isAsyncMode = function(w) {
    return _(w) || $(w) === c;
  }, Le.isConcurrentMode = _, Le.isContextConsumer = function(w) {
    return $(w) === i;
  }, Le.isContextProvider = function(w) {
    return $(w) === s;
  }, Le.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Le.isForwardRef = function(w) {
    return $(w) === u;
  }, Le.isFragment = function(w) {
    return $(w) === r;
  }, Le.isLazy = function(w) {
    return $(w) === v;
  }, Le.isMemo = function(w) {
    return $(w) === m;
  }, Le.isPortal = function(w) {
    return $(w) === n;
  }, Le.isProfiler = function(w) {
    return $(w) === a;
  }, Le.isStrictMode = function(w) {
    return $(w) === o;
  }, Le.isSuspense = function(w) {
    return $(w) === d;
  }, Le.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === l || w === a || w === o || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === m || w.$$typeof === s || w.$$typeof === i || w.$$typeof === u || w.$$typeof === g || w.$$typeof === y || w.$$typeof === b || w.$$typeof === h);
  }, Le.typeOf = $, Le;
}
var Fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hf;
function XE() {
  return hf || (hf = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function $(K) {
      return typeof K == "string" || typeof K == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      K === r || K === l || K === a || K === o || K === d || K === f || typeof K == "object" && K !== null && (K.$$typeof === v || K.$$typeof === m || K.$$typeof === s || K.$$typeof === i || K.$$typeof === u || K.$$typeof === g || K.$$typeof === y || K.$$typeof === b || K.$$typeof === h);
    }
    function _(K) {
      if (typeof K == "object" && K !== null) {
        var Re = K.$$typeof;
        switch (Re) {
          case t:
            var Ve = K.type;
            switch (Ve) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return Ve;
              default:
                var lt = Ve && Ve.$$typeof;
                switch (lt) {
                  case i:
                  case u:
                  case v:
                  case m:
                  case s:
                    return lt;
                  default:
                    return Re;
                }
            }
          case n:
            return Re;
        }
      }
    }
    var w = c, T = l, k = i, j = s, R = t, ee = u, re = r, U = v, B = m, W = n, G = a, J = o, Y = d, Z = !1;
    function D(K) {
      return Z || (Z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(K) || _(K) === c;
    }
    function O(K) {
      return _(K) === l;
    }
    function L(K) {
      return _(K) === i;
    }
    function z(K) {
      return _(K) === s;
    }
    function oe(K) {
      return typeof K == "object" && K !== null && K.$$typeof === t;
    }
    function ce(K) {
      return _(K) === u;
    }
    function ye(K) {
      return _(K) === r;
    }
    function be(K) {
      return _(K) === v;
    }
    function te(K) {
      return _(K) === m;
    }
    function le(K) {
      return _(K) === n;
    }
    function ve(K) {
      return _(K) === a;
    }
    function q(K) {
      return _(K) === o;
    }
    function he(K) {
      return _(K) === d;
    }
    Fe.AsyncMode = w, Fe.ConcurrentMode = T, Fe.ContextConsumer = k, Fe.ContextProvider = j, Fe.Element = R, Fe.ForwardRef = ee, Fe.Fragment = re, Fe.Lazy = U, Fe.Memo = B, Fe.Portal = W, Fe.Profiler = G, Fe.StrictMode = J, Fe.Suspense = Y, Fe.isAsyncMode = D, Fe.isConcurrentMode = O, Fe.isContextConsumer = L, Fe.isContextProvider = z, Fe.isElement = oe, Fe.isForwardRef = ce, Fe.isFragment = ye, Fe.isLazy = be, Fe.isMemo = te, Fe.isPortal = le, Fe.isProfiler = ve, Fe.isStrictMode = q, Fe.isSuspense = he, Fe.isValidElementType = $, Fe.typeOf = _;
  }()), Fe;
}
var gf;
function sg() {
  return gf || (gf = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = qE() : e.exports = XE();
  }(Zi)), Zi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var qi, bf;
function JE() {
  if (bf)
    return qi;
  bf = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var c = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return qi = o() ? Object.assign : function(a, s) {
    for (var i, c = r(a), l, u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var d in i)
        t.call(i, d) && (c[d] = i[d]);
      if (e) {
        l = e(i);
        for (var f = 0; f < l.length; f++)
          n.call(i, l[f]) && (c[l[f]] = i[l[f]]);
      }
    }
    return c;
  }, qi;
}
var Xi, xf;
function Cu() {
  if (xf)
    return Xi;
  xf = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xi = e, Xi;
}
var Ji, yf;
function ig() {
  return yf || (yf = 1, Ji = Function.call.bind(Object.prototype.hasOwnProperty)), Ji;
}
var Qi, $f;
function QE() {
  if ($f)
    return Qi;
  $f = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Cu(), n = {}, r = ig();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, i, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (r(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var f = Error(
                (c || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = a[u](s, u, c, i, null, t);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + i + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var m = l ? l() : "";
            e(
              "Failed " + i + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Qi = o, Qi;
}
var ec, wf;
function eS() {
  if (wf)
    return ec;
  wf = 1;
  var e = sg(), t = JE(), n = Cu(), r = ig(), o = QE(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var c = "Warning: " + i;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ec = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var L = O && (l && O[l] || O[u]);
      if (typeof L == "function")
        return L;
    }
    var f = "<<anonymous>>", m = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: b(),
      arrayOf: $,
      element: _(),
      elementType: w(),
      instanceOf: T,
      node: ee(),
      objectOf: j,
      oneOf: k,
      oneOfType: R,
      shape: U,
      exact: B
    };
    function v(O, L) {
      return O === L ? O !== 0 || 1 / O === 1 / L : O !== O && L !== L;
    }
    function h(O, L) {
      this.message = O, this.data = L && typeof L == "object" ? L : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function g(O) {
      if (process.env.NODE_ENV !== "production")
        var L = {}, z = 0;
      function oe(ye, be, te, le, ve, q, he) {
        if (le = le || f, q = q || te, he !== n) {
          if (c) {
            var K = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw K.name = "Invariant Violation", K;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = le + ":" + te;
            !L[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + le + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), L[Re] = !0, z++);
          }
        }
        return be[te] == null ? ye ? be[te] === null ? new h("The " + ve + " `" + q + "` is marked as required " + ("in `" + le + "`, but its value is `null`.")) : new h("The " + ve + " `" + q + "` is marked as required in " + ("`" + le + "`, but its value is `undefined`.")) : null : O(be, te, le, ve, q);
      }
      var ce = oe.bind(null, !1);
      return ce.isRequired = oe.bind(null, !0), ce;
    }
    function y(O) {
      function L(z, oe, ce, ye, be, te) {
        var le = z[oe], ve = J(le);
        if (ve !== O) {
          var q = Y(le);
          return new h(
            "Invalid " + ye + " `" + be + "` of type " + ("`" + q + "` supplied to `" + ce + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return g(L);
    }
    function b() {
      return g(s);
    }
    function $(O) {
      function L(z, oe, ce, ye, be) {
        if (typeof O != "function")
          return new h("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside arrayOf.");
        var te = z[oe];
        if (!Array.isArray(te)) {
          var le = J(te);
          return new h("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an array."));
        }
        for (var ve = 0; ve < te.length; ve++) {
          var q = O(te, ve, ce, ye, be + "[" + ve + "]", n);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return g(L);
    }
    function _() {
      function O(L, z, oe, ce, ye) {
        var be = L[z];
        if (!i(be)) {
          var te = J(be);
          return new h("Invalid " + ce + " `" + ye + "` of type " + ("`" + te + "` supplied to `" + oe + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(O);
    }
    function w() {
      function O(L, z, oe, ce, ye) {
        var be = L[z];
        if (!e.isValidElementType(be)) {
          var te = J(be);
          return new h("Invalid " + ce + " `" + ye + "` of type " + ("`" + te + "` supplied to `" + oe + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(O);
    }
    function T(O) {
      function L(z, oe, ce, ye, be) {
        if (!(z[oe] instanceof O)) {
          var te = O.name || f, le = D(z[oe]);
          return new h("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected ") + ("instance of `" + te + "`."));
        }
        return null;
      }
      return g(L);
    }
    function k(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function L(z, oe, ce, ye, be) {
        for (var te = z[oe], le = 0; le < O.length; le++)
          if (v(te, O[le]))
            return null;
        var ve = JSON.stringify(O, function(he, K) {
          var Re = Y(K);
          return Re === "symbol" ? String(K) : K;
        });
        return new h("Invalid " + ye + " `" + be + "` of value `" + String(te) + "` " + ("supplied to `" + ce + "`, expected one of " + ve + "."));
      }
      return g(L);
    }
    function j(O) {
      function L(z, oe, ce, ye, be) {
        if (typeof O != "function")
          return new h("Property `" + be + "` of component `" + ce + "` has invalid PropType notation inside objectOf.");
        var te = z[oe], le = J(te);
        if (le !== "object")
          return new h("Invalid " + ye + " `" + be + "` of type " + ("`" + le + "` supplied to `" + ce + "`, expected an object."));
        for (var ve in te)
          if (r(te, ve)) {
            var q = O(te, ve, ce, ye, be + "." + ve, n);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return g(L);
    }
    function R(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var L = 0; L < O.length; L++) {
        var z = O[L];
        if (typeof z != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Z(z) + " at index " + L + "."
          ), s;
      }
      function oe(ce, ye, be, te, le) {
        for (var ve = [], q = 0; q < O.length; q++) {
          var he = O[q], K = he(ce, ye, be, te, le, n);
          if (K == null)
            return null;
          K.data && r(K.data, "expectedType") && ve.push(K.data.expectedType);
        }
        var Re = ve.length > 0 ? ", expected one of type [" + ve.join(", ") + "]" : "";
        return new h("Invalid " + te + " `" + le + "` supplied to " + ("`" + be + "`" + Re + "."));
      }
      return g(oe);
    }
    function ee() {
      function O(L, z, oe, ce, ye) {
        return W(L[z]) ? null : new h("Invalid " + ce + " `" + ye + "` supplied to " + ("`" + oe + "`, expected a ReactNode."));
      }
      return g(O);
    }
    function re(O, L, z, oe, ce) {
      return new h(
        (O || "React class") + ": " + L + " type `" + z + "." + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ce + "`."
      );
    }
    function U(O) {
      function L(z, oe, ce, ye, be) {
        var te = z[oe], le = J(te);
        if (le !== "object")
          return new h("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        for (var ve in O) {
          var q = O[ve];
          if (typeof q != "function")
            return re(ce, ye, be, ve, Y(q));
          var he = q(te, ve, ce, ye, be + "." + ve, n);
          if (he)
            return he;
        }
        return null;
      }
      return g(L);
    }
    function B(O) {
      function L(z, oe, ce, ye, be) {
        var te = z[oe], le = J(te);
        if (le !== "object")
          return new h("Invalid " + ye + " `" + be + "` of type `" + le + "` " + ("supplied to `" + ce + "`, expected `object`."));
        var ve = t({}, z[oe], O);
        for (var q in ve) {
          var he = O[q];
          if (r(O, q) && typeof he != "function")
            return re(ce, ye, be, q, Y(he));
          if (!he)
            return new h(
              "Invalid " + ye + " `" + be + "` key `" + q + "` supplied to `" + ce + "`.\nBad object: " + JSON.stringify(z[oe], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var K = he(te, q, ce, ye, be + "." + q, n);
          if (K)
            return K;
        }
        return null;
      }
      return g(L);
    }
    function W(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(W);
          if (O === null || i(O))
            return !0;
          var L = d(O);
          if (L) {
            var z = L.call(O), oe;
            if (L !== O.entries) {
              for (; !(oe = z.next()).done; )
                if (!W(oe.value))
                  return !1;
            } else
              for (; !(oe = z.next()).done; ) {
                var ce = oe.value;
                if (ce && !W(ce[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function G(O, L) {
      return O === "symbol" ? !0 : L ? L["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && L instanceof Symbol : !1;
    }
    function J(O) {
      var L = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : G(L, O) ? "symbol" : L;
    }
    function Y(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var L = J(O);
      if (L === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return L;
    }
    function Z(O) {
      var L = Y(O);
      switch (L) {
        case "array":
        case "object":
          return "an " + L;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + L;
        default:
          return L;
      }
    }
    function D(O) {
      return !O.constructor || !O.constructor.name ? f : O.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, ec;
}
var tc, _f;
function tS() {
  if (_f)
    return tc;
  _f = 1;
  var e = Cu();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, tc = function() {
    function r(s, i, c, l, u, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, tc;
}
if (process.env.NODE_ENV !== "production") {
  var nS = sg(), rS = !0;
  pn.exports = eS()(nS.isElement, rS);
} else
  pn.exports = tS()();
var oS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, aS = Object.defineProperty, sS = Object.defineProperties, iS = Object.getOwnPropertyDescriptors, gs = Object.getOwnPropertySymbols, cg = Object.prototype.hasOwnProperty, lg = Object.prototype.propertyIsEnumerable, Cf = (e, t, n) => t in e ? aS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ef = (e, t) => {
  for (var n in t || (t = {}))
    cg.call(t, n) && Cf(e, n, t[n]);
  if (gs)
    for (var n of gs(t))
      lg.call(t, n) && Cf(e, n, t[n]);
  return e;
}, cS = (e, t) => sS(e, iS(t)), lS = (e, t) => {
  var n = {};
  for (var r in e)
    cg.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && gs)
    for (var r of gs(e))
      t.indexOf(r) < 0 && lg.call(e, r) && (n[r] = e[r]);
  return n;
}, $a = (e, t, n) => {
  const r = M(
    (o, a) => {
      var s = o, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = s, d = lS(s, ["color", "size", "stroke", "children"]);
      return x(
        "svg",
        Ef(cS(Ef({
          ref: a
        }, oS), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...n.map(([f, m]) => x(f, m)), ...u || []]
      );
    }
  );
  return r.propTypes = {
    color: pn.exports.string,
    size: pn.exports.oneOfType([pn.exports.string, pn.exports.number]),
    stroke: pn.exports.oneOfType([pn.exports.string, pn.exports.number])
  }, r.displayName = `${t}`, r;
}, uS = $a(
  "adjustments-horizontal",
  "IconAdjustmentsHorizontal",
  [
    ["path", { d: "M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
    ["path", { d: "M4 6l8 0", key: "svg-1" }],
    ["path", { d: "M16 6l4 0", key: "svg-2" }],
    ["path", { d: "M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }],
    ["path", { d: "M4 12l2 0", key: "svg-4" }],
    ["path", { d: "M10 12l10 0", key: "svg-5" }],
    ["path", { d: "M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-6" }],
    ["path", { d: "M4 18l11 0", key: "svg-7" }],
    ["path", { d: "M19 18l1 0", key: "svg-8" }]
  ]
), dS = $a("adjustments", "IconAdjustments", [
  ["path", { d: "M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }],
  ["path", { d: "M6 4v4", key: "svg-1" }],
  ["path", { d: "M6 12v8", key: "svg-2" }],
  ["path", { d: "M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-3" }],
  ["path", { d: "M12 4v10", key: "svg-4" }],
  ["path", { d: "M12 18v2", key: "svg-5" }],
  ["path", { d: "M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-6" }],
  ["path", { d: "M18 4v1", key: "svg-7" }],
  ["path", { d: "M18 9v11", key: "svg-8" }]
]), Eu = $a("photo-plus", "IconPhotoPlus", [
  ["path", { d: "M15 8h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5",
      key: "svg-1"
    }
  ],
  ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4", key: "svg-2" }],
  ["path", { d: "M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54", key: "svg-3" }],
  ["path", { d: "M16 19h6", key: "svg-4" }],
  ["path", { d: "M19 16v6", key: "svg-5" }]
]), fS = $a("photo-star", "IconPhotoStar", [
  ["path", { d: "M15 8h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M11 21h-5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5",
      key: "svg-1"
    }
  ],
  ["path", { d: "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2", key: "svg-2" }],
  [
    "path",
    {
      d: "M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z",
      key: "svg-3"
    }
  ]
]), pS = $a("search", "IconSearch", [
  ["path", { d: "M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }],
  ["path", { d: "M21 21l-6 -6", key: "svg-1" }]
]), Ie;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const a = {};
    for (const s of o)
      a[s] = s;
    return a;
  }, e.getValidEnumValues = (o) => {
    const a = e.objectKeys(o).filter((i) => typeof o[o[i]] != "number"), s = {};
    for (const i of a)
      s[i] = o[i];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(a) {
    return o[a];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const a = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && a.push(s);
    return a;
  }, e.find = (o, a) => {
    for (const s of o)
      if (a(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, a = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(a);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, a) => typeof a == "bigint" ? a.toString() : a;
})(Ie || (Ie = {}));
var Vc;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Vc || (Vc = {}));
const me = Ie.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Pn = (e) => {
  switch (typeof e) {
    case "undefined":
      return me.undefined;
    case "string":
      return me.string;
    case "number":
      return isNaN(e) ? me.nan : me.number;
    case "boolean":
      return me.boolean;
    case "function":
      return me.function;
    case "bigint":
      return me.bigint;
    case "symbol":
      return me.symbol;
    case "object":
      return Array.isArray(e) ? me.array : e === null ? me.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? me.promise : typeof Map < "u" && e instanceof Map ? me.map : typeof Set < "u" && e instanceof Set ? me.set : typeof Date < "u" && e instanceof Date ? me.date : me.object;
    default:
      return me.unknown;
  }
}, ae = Ie.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), mS = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Bt extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(a) {
      return a.message;
    }, r = { _errors: [] }, o = (a) => {
      for (const s of a.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(n(s));
        else {
          let i = r, c = 0;
          for (; c < s.path.length; ) {
            const l = s.path[c];
            c === s.path.length - 1 ? (i[l] = i[l] || { _errors: [] }, i[l]._errors.push(n(s))) : i[l] = i[l] || { _errors: [] }, i = i[l], c++;
          }
        }
    };
    return o(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ie.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Bt.create = (e) => new Bt(e);
const jo = (e, t) => {
  let n;
  switch (e.code) {
    case ae.invalid_type:
      e.received === me.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ae.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ie.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ie.joinValues(e.keys, ", ")}`;
      break;
    case ae.invalid_union:
      n = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ie.joinValues(e.options)}`;
      break;
    case ae.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ie.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ae.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ae.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ae.invalid_date:
      n = "Invalid date";
      break;
    case ae.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ie.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ae.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ae.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ae.custom:
      n = "Invalid input";
      break;
    case ae.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ae.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ae.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ie.assertNever(e);
  }
  return { message: n };
};
let ug = jo;
function vS(e) {
  ug = e;
}
function bs() {
  return ug;
}
const xs = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, a = [...n, ...o.path || []], s = {
    ...o,
    path: a
  };
  let i = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(s, { data: t, defaultError: i }).message;
  return {
    ...o,
    path: a,
    message: o.message || i
  };
}, hS = [];
function ge(e, t) {
  const n = xs({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      bs(),
      jo
      // then global default map
    ].filter((r) => !!r)
  });
  e.common.issues.push(n);
}
class vt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const o of n) {
      if (o.status === "aborted")
        return Te;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n)
      r.push({
        key: await o.key,
        value: await o.value
      });
    return vt.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: a, value: s } = o;
      if (a.status === "aborted" || s.status === "aborted")
        return Te;
      a.status === "dirty" && t.dirty(), s.status === "dirty" && t.dirty(), (typeof s.value < "u" || o.alwaysSet) && (r[a.value] = s.value);
    }
    return { status: t.value, value: r };
  }
}
const Te = Object.freeze({
  status: "aborted"
}), dg = (e) => ({ status: "dirty", value: e }), yt = (e) => ({ status: "valid", value: e }), Uc = (e) => e.status === "aborted", Wc = (e) => e.status === "dirty", ys = (e) => e.status === "valid", $s = (e) => typeof Promise < "u" && e instanceof Promise;
var _e;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(_e || (_e = {}));
class nn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Sf = (e, t) => {
  if (ys(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Bt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Pe(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (s, i) => s.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: r ?? i.defaultError } : { message: n ?? i.defaultError }, description: o };
}
class ke {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Pn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Pn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new vt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Pn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if ($s(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Pn(t)
    }, a = this._parseSync({ data: t, path: o.path, parent: o });
    return Sf(o, a);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Pn(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), a = await ($s(o) ? o : Promise.resolve(o));
    return Sf(r, a);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, a) => {
      const s = t(o), i = () => a.addIssue({
        code: ae.custom,
        ...r(o)
      });
      return typeof Promise < "u" && s instanceof Promise ? s.then((c) => c ? !0 : (i(), !1)) : s ? !0 : (i(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new Kt({
      schema: this,
      typeName: Se.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return vn.create(this, this._def);
  }
  nullable() {
    return or.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return zt.create(this, this._def);
  }
  promise() {
    return Vr.create(this, this._def);
  }
  or(t) {
    return Uo.create([this, t], this._def);
  }
  and(t) {
    return Wo.create(this, t, this._def);
  }
  transform(t) {
    return new Kt({
      ...Pe(this._def),
      schema: this,
      typeName: Se.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ko({
      ...Pe(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Se.ZodDefault
    });
  }
  brand() {
    return new pg({
      typeName: Se.ZodBranded,
      type: this,
      ...Pe(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Es({
      ...Pe(this._def),
      innerType: this,
      catchValue: n,
      typeName: Se.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return wa.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const gS = /^c[^\s-]{8,}$/i, bS = /^[a-z][a-z0-9]*$/, xS = /[0-9A-HJKMNP-TV-Z]{26}/, yS = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i, $S = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/, wS = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u, _S = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, CS = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, ES = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function SS(e, t) {
  return !!((t === "v4" || !t) && _S.test(e) || (t === "v6" || !t) && CS.test(e));
}
class Ut extends ke {
  constructor() {
    super(...arguments), this._regex = (t, n, r) => this.refinement((o) => t.test(o), {
      validation: n,
      code: ae.invalid_string,
      ..._e.errToObj(r)
    }), this.nonempty = (t) => this.min(1, _e.errToObj(t)), this.trim = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    }), this.toLowerCase = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    }), this.toUpperCase = () => new Ut({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== me.string) {
      const a = this._getOrReturnCtx(t);
      return ge(
        a,
        {
          code: ae.invalid_type,
          expected: me.string,
          received: a.parsedType
        }
        //
      ), Te;
    }
    const r = new vt();
    let o;
    for (const a of this._def.checks)
      if (a.kind === "min")
        t.data.length < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "max")
        t.data.length > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), r.dirty());
      else if (a.kind === "length") {
        const s = t.data.length > a.value, i = t.data.length < a.value;
        (s || i) && (o = this._getOrReturnCtx(t, o), s ? ge(o, {
          code: ae.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : i && ge(o, {
          code: ae.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), r.dirty());
      } else if (a.kind === "email")
        $S.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "email",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "emoji")
        wS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "emoji",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "uuid")
        yS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "uuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid")
        gS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "cuid2")
        bS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "ulid")
        xS.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ulid",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty());
      else if (a.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ge(o, {
            validation: "url",
            code: ae.invalid_string,
            message: a.message
          }), r.dirty();
        }
      else
        a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "regex",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty())) : a.kind === "trim" ? t.data = t.data.trim() : a.kind === "includes" ? t.data.includes(a.value, a.position) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { includes: a.value, position: a.position },
          message: a.message
        }), r.dirty()) : a.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : a.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : a.kind === "startsWith" ? t.data.startsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { startsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "endsWith" ? t.data.endsWith(a.value) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: { endsWith: a.value },
          message: a.message
        }), r.dirty()) : a.kind === "datetime" ? ES(a).test(t.data) || (o = this._getOrReturnCtx(t, o), ge(o, {
          code: ae.invalid_string,
          validation: "datetime",
          message: a.message
        }), r.dirty()) : a.kind === "ip" ? SS(t.data, a.version) || (o = this._getOrReturnCtx(t, o), ge(o, {
          validation: "ip",
          code: ae.invalid_string,
          message: a.message
        }), r.dirty()) : Ie.assertNever(a);
    return { status: r.value, value: t.data };
  }
  _addCheck(t) {
    return new Ut({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ..._e.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ..._e.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ..._e.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ..._e.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ..._e.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ..._e.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ..._e.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ..._e.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      ..._e.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ..._e.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ..._e.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ..._e.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ..._e.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ..._e.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ..._e.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ..._e.errToObj(n)
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Ut.create = (e) => {
  var t;
  return new Ut({
    checks: [],
    typeName: Se.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Pe(e)
  });
};
function NS(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, a = parseInt(e.toFixed(o).replace(".", "")), s = parseInt(t.toFixed(o).replace(".", ""));
  return a % s / Math.pow(10, o);
}
class In extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== me.number) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.number,
        received: a.parsedType
      }), Te;
    }
    let r;
    const o = new vt();
    for (const a of this._def.checks)
      a.kind === "int" ? Ie.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), o.dirty()) : a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? NS(t.data, a.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : a.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_finite,
        message: a.message
      }), o.dirty()) : Ie.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, _e.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, _e.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, _e.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, _e.toString(n));
  }
  setLimit(t, n, r, o) {
    return new In({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: _e.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new In({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: _e.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _e.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: _e.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: _e.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: _e.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ie.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
In.create = (e) => new In({
  checks: [],
  typeName: Se.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Pe(e)
});
class jn extends ke {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== me.bigint) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.bigint,
        received: a.parsedType
      }), Te;
    }
    let r;
    const o = new vt();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? t.data < a.value : t.data <= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "max" ? (a.inclusive ? t.data > a.value : t.data >= a.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), o.dirty()) : a.kind === "multipleOf" ? t.data % a.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), o.dirty()) : Ie.assertNever(a);
    return { status: o.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, _e.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, _e.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, _e.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, _e.toString(n));
  }
  setLimit(t, n, r, o) {
    return new jn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: _e.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new jn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: _e.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: _e.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: _e.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
jn.create = (e) => {
  var t;
  return new jn({
    checks: [],
    typeName: Se.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Pe(e)
  });
};
class Lo extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = Boolean(t.data)), this._getType(t) !== me.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.boolean,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
Lo.create = (e) => new Lo({
  typeName: Se.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Pe(e)
});
class nr extends ke {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== me.date) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_type,
        expected: me.date,
        received: a.parsedType
      }), Te;
    }
    if (isNaN(t.data.getTime())) {
      const a = this._getOrReturnCtx(t);
      return ge(a, {
        code: ae.invalid_date
      }), Te;
    }
    const r = new vt();
    let o;
    for (const a of this._def.checks)
      a.kind === "min" ? t.data.getTime() < a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ae.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), r.dirty()) : a.kind === "max" ? t.data.getTime() > a.value && (o = this._getOrReturnCtx(t, o), ge(o, {
        code: ae.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), r.dirty()) : Ie.assertNever(a);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new nr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: _e.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: _e.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
nr.create = (e) => new nr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Se.ZodDate,
  ...Pe(e)
});
class ws extends ke {
  _parse(t) {
    if (this._getType(t) !== me.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.symbol,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
ws.create = (e) => new ws({
  typeName: Se.ZodSymbol,
  ...Pe(e)
});
class Fo extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.undefined,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
Fo.create = (e) => new Fo({
  typeName: Se.ZodUndefined,
  ...Pe(e)
});
class Vo extends ke {
  _parse(t) {
    if (this._getType(t) !== me.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.null,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
Vo.create = (e) => new Vo({
  typeName: Se.ZodNull,
  ...Pe(e)
});
class Fr extends ke {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
Fr.create = (e) => new Fr({
  typeName: Se.ZodAny,
  ...Pe(e)
});
class qn extends ke {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return yt(t.data);
  }
}
qn.create = (e) => new qn({
  typeName: Se.ZodUnknown,
  ...Pe(e)
});
class yn extends ke {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ae.invalid_type,
      expected: me.never,
      received: n.parsedType
    }), Te;
  }
}
yn.create = (e) => new yn({
  typeName: Se.ZodNever,
  ...Pe(e)
});
class _s extends ke {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.void,
        received: r.parsedType
      }), Te;
    }
    return yt(t.data);
  }
}
_s.create = (e) => new _s({
  typeName: Se.ZodVoid,
  ...Pe(e)
});
class zt extends ke {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== me.array)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.array,
        received: n.parsedType
      }), Te;
    if (o.exactLength !== null) {
      const s = n.data.length > o.exactLength.value, i = n.data.length < o.exactLength.value;
      (s || i) && (ge(n, {
        code: s ? ae.too_big : ae.too_small,
        minimum: i ? o.exactLength.value : void 0,
        maximum: s ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ge(n, {
      code: ae.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ge(n, {
      code: ae.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((s, i) => o.type._parseAsync(new nn(n, s, n.path, i)))).then((s) => vt.mergeArray(r, s));
    const a = [...n.data].map((s, i) => o.type._parseSync(new nn(n, s, n.path, i)));
    return vt.mergeArray(r, a);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new zt({
      ...this._def,
      minLength: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new zt({
      ...this._def,
      maxLength: { value: t, message: _e.toString(n) }
    });
  }
  length(t, n) {
    return new zt({
      ...this._def,
      exactLength: { value: t, message: _e.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
zt.create = (e, t) => new zt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Se.ZodArray,
  ...Pe(t)
});
function $r(e) {
  if (e instanceof Xe) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = vn.create($r(r));
    }
    return new Xe({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof zt ? new zt({
      ...e._def,
      type: $r(e.element)
    }) : e instanceof vn ? vn.create($r(e.unwrap())) : e instanceof or ? or.create($r(e.unwrap())) : e instanceof rn ? rn.create(e.items.map((t) => $r(t))) : e;
}
class Xe extends ke {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ie.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== me.object) {
      const l = this._getOrReturnCtx(t);
      return ge(l, {
        code: ae.invalid_type,
        expected: me.object,
        received: l.parsedType
      }), Te;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: a, keys: s } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof yn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        s.includes(l) || i.push(l);
    const c = [];
    for (const l of s) {
      const u = a[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new nn(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof yn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (ge(o, {
          code: ae.unrecognized_keys,
          keys: i
        }), r.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of i) {
        const d = o.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new nn(o, d, o.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const d = await u.key;
        l.push({
          key: d,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => vt.mergeObjectSync(r, l)) : vt.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return _e.errToObj, new Xe({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, a, s, i;
          const c = (s = (a = (o = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(o, n, r).message) !== null && s !== void 0 ? s : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (i = _e.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new Xe({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Xe({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Xe({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Xe({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Se.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Xe({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ie.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ie.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return $r(this);
  }
  partial(t) {
    const n = {};
    return Ie.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ie.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let a = this.shape[r];
        for (; a instanceof vn; )
          a = a._def.innerType;
        n[r] = a;
      }
    }), new Xe({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return fg(Ie.objectKeys(this.shape));
  }
}
Xe.create = (e, t) => new Xe({
  shape: () => e,
  unknownKeys: "strip",
  catchall: yn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
Xe.strictCreate = (e, t) => new Xe({
  shape: () => e,
  unknownKeys: "strict",
  catchall: yn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
Xe.lazycreate = (e, t) => new Xe({
  shape: e,
  unknownKeys: "strip",
  catchall: yn.create(),
  typeName: Se.ZodObject,
  ...Pe(t)
});
class Uo extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(a) {
      for (const i of a)
        if (i.result.status === "valid")
          return i.result;
      for (const i of a)
        if (i.result.status === "dirty")
          return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((i) => new Bt(i.ctx.common.issues));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: s
      }), Te;
    }
    if (n.common.async)
      return Promise.all(r.map(async (a) => {
        const s = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: n.data,
            path: n.path,
            parent: s
          }),
          ctx: s
        };
      })).then(o);
    {
      let a;
      const s = [];
      for (const c of r) {
        const l = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !a && (a = { result: u, ctx: l }), l.common.issues.length && s.push(l.common.issues);
      }
      if (a)
        return n.common.issues.push(...a.ctx.common.issues), a.result;
      const i = s.map((c) => new Bt(c));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: i
      }), Te;
    }
  }
  get options() {
    return this._def.options;
  }
}
Uo.create = (e, t) => new Uo({
  options: e,
  typeName: Se.ZodUnion,
  ...Pe(t)
});
const Ya = (e) => e instanceof zo ? Ya(e.schema) : e instanceof Kt ? Ya(e.innerType()) : e instanceof Ho ? [e.value] : e instanceof Ln ? e.options : e instanceof Yo ? Object.keys(e.enum) : e instanceof Ko ? Ya(e._def.innerType) : e instanceof Fo ? [void 0] : e instanceof Vo ? [null] : null;
class ui extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.object)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.object,
        received: n.parsedType
      }), Te;
    const r = this.discriminator, o = n.data[r], a = this.optionsMap.get(o);
    return a ? n.common.async ? a._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : a._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ge(n, {
      code: ae.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), Te);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const o = /* @__PURE__ */ new Map();
    for (const a of n) {
      const s = Ya(a.shape[t]);
      if (!s)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of s) {
        if (o.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        o.set(i, a);
      }
    }
    return new ui({
      typeName: Se.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Pe(r)
    });
  }
}
function Bc(e, t) {
  const n = Pn(e), r = Pn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === me.object && r === me.object) {
    const o = Ie.objectKeys(t), a = Ie.objectKeys(e).filter((i) => o.indexOf(i) !== -1), s = { ...e, ...t };
    for (const i of a) {
      const c = Bc(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      s[i] = c.data;
    }
    return { valid: !0, data: s };
  } else if (n === me.array && r === me.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let a = 0; a < e.length; a++) {
      const s = e[a], i = t[a], c = Bc(s, i);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else
    return n === me.date && r === me.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Wo extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (a, s) => {
      if (Uc(a) || Uc(s))
        return Te;
      const i = Bc(a.value, s.value);
      return i.valid ? ((Wc(a) || Wc(s)) && n.dirty(), { status: n.value, value: i.data }) : (ge(r, {
        code: ae.invalid_intersection_types
      }), Te);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([a, s]) => o(a, s)) : o(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
Wo.create = (e, t, n) => new Wo({
  left: e,
  right: t,
  typeName: Se.ZodIntersection,
  ...Pe(n)
});
class rn extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.array)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.array,
        received: r.parsedType
      }), Te;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ae.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Te;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ae.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const a = [...r.data].map((s, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new nn(r, s, r.path, i)) : null;
    }).filter((s) => !!s);
    return r.common.async ? Promise.all(a).then((s) => vt.mergeArray(n, s)) : vt.mergeArray(n, a);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new rn({
      ...this._def,
      rest: t
    });
  }
}
rn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new rn({
    items: e,
    typeName: Se.ZodTuple,
    rest: null,
    ...Pe(t)
  });
};
class Bo extends ke {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.object)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.object,
        received: r.parsedType
      }), Te;
    const o = [], a = this._def.keyType, s = this._def.valueType;
    for (const i in r.data)
      o.push({
        key: a._parse(new nn(r, i, r.path, i)),
        value: s._parse(new nn(r, r.data[i], r.path, i))
      });
    return r.common.async ? vt.mergeObjectAsync(n, o) : vt.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ke ? new Bo({
      keyType: t,
      valueType: n,
      typeName: Se.ZodRecord,
      ...Pe(r)
    }) : new Bo({
      keyType: Ut.create(),
      valueType: t,
      typeName: Se.ZodRecord,
      ...Pe(n)
    });
  }
}
class Cs extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.map)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.map,
        received: r.parsedType
      }), Te;
    const o = this._def.keyType, a = this._def.valueType, s = [...r.data.entries()].map(([i, c], l) => ({
      key: o._parse(new nn(r, i, r.path, [l, "key"])),
      value: a._parse(new nn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of s) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return Te;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
        }
        return { status: n.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of s) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return Te;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), i.set(l.value, u.value);
      }
      return { status: n.value, value: i };
    }
  }
}
Cs.create = (e, t, n) => new Cs({
  valueType: t,
  keyType: e,
  typeName: Se.ZodMap,
  ...Pe(n)
});
class rr extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.set)
      return ge(r, {
        code: ae.invalid_type,
        expected: me.set,
        received: r.parsedType
      }), Te;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ge(r, {
      code: ae.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ge(r, {
      code: ae.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const a = this._def.valueType;
    function s(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return Te;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const i = [...r.data.values()].map((c, l) => a._parse(new nn(r, c, r.path, l)));
    return r.common.async ? Promise.all(i).then((c) => s(c)) : s(i);
  }
  min(t, n) {
    return new rr({
      ...this._def,
      minSize: { value: t, message: _e.toString(n) }
    });
  }
  max(t, n) {
    return new rr({
      ...this._def,
      maxSize: { value: t, message: _e.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
rr.create = (e, t) => new rr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Se.ZodSet,
  ...Pe(t)
});
class Sr extends ke {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.function)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.function,
        received: n.parsedType
      }), Te;
    function r(i, c) {
      return xs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          bs(),
          jo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(i, c) {
      return xs({
        data: i,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          bs(),
          jo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const a = { errorMap: n.common.contextualErrorMap }, s = n.data;
    return this._def.returns instanceof Vr ? yt(async (...i) => {
      const c = new Bt([]), l = await this._def.args.parseAsync(i, a).catch((f) => {
        throw c.addIssue(r(i, f)), c;
      }), u = await s(...l);
      return await this._def.returns._def.type.parseAsync(u, a).catch((f) => {
        throw c.addIssue(o(u, f)), c;
      });
    }) : yt((...i) => {
      const c = this._def.args.safeParse(i, a);
      if (!c.success)
        throw new Bt([r(i, c.error)]);
      const l = s(...c.data), u = this._def.returns.safeParse(l, a);
      if (!u.success)
        throw new Bt([o(l, u.error)]);
      return u.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Sr({
      ...this._def,
      args: rn.create(t).rest(qn.create())
    });
  }
  returns(t) {
    return new Sr({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Sr({
      args: t || rn.create([]).rest(qn.create()),
      returns: n || qn.create(),
      typeName: Se.ZodFunction,
      ...Pe(r)
    });
  }
}
class zo extends ke {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
zo.create = (e, t) => new zo({
  getter: e,
  typeName: Se.ZodLazy,
  ...Pe(t)
});
class Ho extends ke {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ae.invalid_literal,
        expected: this._def.value
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ho.create = (e, t) => new Ho({
  value: e,
  typeName: Se.ZodLiteral,
  ...Pe(t)
});
function fg(e, t) {
  return new Ln({
    values: e,
    typeName: Se.ZodEnum,
    ...Pe(t)
  });
}
class Ln extends ke {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: Ie.joinValues(r),
        received: n.parsedType,
        code: ae.invalid_type
      }), Te;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: r
      }), Te;
    }
    return yt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t) {
    return Ln.create(t);
  }
  exclude(t) {
    return Ln.create(this.options.filter((n) => !t.includes(n)));
  }
}
Ln.create = fg;
class Yo extends ke {
  _parse(t) {
    const n = Ie.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== me.string && r.parsedType !== me.number) {
      const o = Ie.objectValues(n);
      return ge(r, {
        expected: Ie.joinValues(o),
        received: r.parsedType,
        code: ae.invalid_type
      }), Te;
    }
    if (n.indexOf(t.data) === -1) {
      const o = Ie.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ae.invalid_enum_value,
        options: o
      }), Te;
    }
    return yt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Yo.create = (e, t) => new Yo({
  values: e,
  typeName: Se.ZodNativeEnum,
  ...Pe(t)
});
class Vr extends ke {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.promise && n.common.async === !1)
      return ge(n, {
        code: ae.invalid_type,
        expected: me.promise,
        received: n.parsedType
      }), Te;
    const r = n.parsedType === me.promise ? n.data : Promise.resolve(n.data);
    return yt(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
Vr.create = (e, t) => new Vr({
  type: e,
  typeName: Se.ZodPromise,
  ...Pe(t)
});
class Kt extends ke {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Se.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null;
    if (o.type === "preprocess") {
      const s = o.transform(r.data);
      return r.common.async ? Promise.resolve(s).then((i) => this._def.schema._parseAsync({
        data: i,
        path: r.path,
        parent: r
      })) : this._def.schema._parseSync({
        data: s,
        path: r.path,
        parent: r
      });
    }
    const a = {
      addIssue: (s) => {
        ge(r, s), s.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), o.type === "refinement") {
      const s = (i) => {
        const c = o.refinement(i, a);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (r.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? Te : (i.status === "dirty" && n.dirty(), s(i.value), { status: n.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((i) => i.status === "aborted" ? Te : (i.status === "dirty" && n.dirty(), s(i.value).then(() => ({ status: n.value, value: i.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!ys(s))
          return s;
        const i = o.transform(s.value, a);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => ys(s) ? Promise.resolve(o.transform(s.value, a)).then((i) => ({ status: n.value, value: i })) : s);
    Ie.assertNever(o);
  }
}
Kt.create = (e, t, n) => new Kt({
  schema: e,
  typeName: Se.ZodEffects,
  effect: t,
  ...Pe(n)
});
Kt.createWithPreprocess = (e, t, n) => new Kt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Se.ZodEffects,
  ...Pe(n)
});
class vn extends ke {
  _parse(t) {
    return this._getType(t) === me.undefined ? yt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
vn.create = (e, t) => new vn({
  innerType: e,
  typeName: Se.ZodOptional,
  ...Pe(t)
});
class or extends ke {
  _parse(t) {
    return this._getType(t) === me.null ? yt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
or.create = (e, t) => new or({
  innerType: e,
  typeName: Se.ZodNullable,
  ...Pe(t)
});
class Ko extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === me.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ko.create = (e, t) => new Ko({
  innerType: e,
  typeName: Se.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Pe(t)
});
class Es extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return $s(o) ? o.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new Bt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Bt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Es.create = (e, t) => new Es({
  innerType: e,
  typeName: Se.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Pe(t)
});
class Ss extends ke {
  _parse(t) {
    if (this._getType(t) !== me.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: me.nan,
        received: r.parsedType
      }), Te;
    }
    return { status: "valid", value: t.data };
  }
}
Ss.create = (e) => new Ss({
  typeName: Se.ZodNaN,
  ...Pe(e)
});
const TS = Symbol("zod_brand");
class pg extends ke {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class wa extends ke {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return a.status === "aborted" ? Te : a.status === "dirty" ? (n.dirty(), dg(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? Te : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new wa({
      in: t,
      out: n,
      typeName: Se.ZodPipeline
    });
  }
}
const mg = (e, t = {}, n) => e ? Fr.create().superRefine((r, o) => {
  var a, s;
  if (!e(r)) {
    const i = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (s = (a = i.fatal) !== null && a !== void 0 ? a : n) !== null && s !== void 0 ? s : !0, l = typeof i == "string" ? { message: i } : i;
    o.addIssue({ code: "custom", ...l, fatal: c });
  }
}) : Fr.create(), PS = {
  object: Xe.lazycreate
};
var Se;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline";
})(Se || (Se = {}));
const kS = (e, t = {
  message: `Input not instance of ${e.name}`
}) => mg((n) => n instanceof e, t), vg = Ut.create, hg = In.create, MS = Ss.create, OS = jn.create, gg = Lo.create, DS = nr.create, RS = ws.create, AS = Fo.create, IS = Vo.create, jS = Fr.create, LS = qn.create, FS = yn.create, VS = _s.create, US = zt.create, WS = Xe.create, BS = Xe.strictCreate, zS = Uo.create, HS = ui.create, YS = Wo.create, KS = rn.create, GS = Bo.create, ZS = Cs.create, qS = rr.create, XS = Sr.create, JS = zo.create, QS = Ho.create, eN = Ln.create, tN = Yo.create, nN = Vr.create, Nf = Kt.create, rN = vn.create, oN = or.create, aN = Kt.createWithPreprocess, sN = wa.create, iN = () => vg().optional(), cN = () => hg().optional(), lN = () => gg().optional(), uN = {
  string: (e) => Ut.create({ ...e, coerce: !0 }),
  number: (e) => In.create({ ...e, coerce: !0 }),
  boolean: (e) => Lo.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => jn.create({ ...e, coerce: !0 }),
  date: (e) => nr.create({ ...e, coerce: !0 })
}, dN = Te;
var Tf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: jo,
  setErrorMap: vS,
  getErrorMap: bs,
  makeIssue: xs,
  EMPTY_PATH: hS,
  addIssueToContext: ge,
  ParseStatus: vt,
  INVALID: Te,
  DIRTY: dg,
  OK: yt,
  isAborted: Uc,
  isDirty: Wc,
  isValid: ys,
  isAsync: $s,
  get util() {
    return Ie;
  },
  get objectUtil() {
    return Vc;
  },
  ZodParsedType: me,
  getParsedType: Pn,
  ZodType: ke,
  ZodString: Ut,
  ZodNumber: In,
  ZodBigInt: jn,
  ZodBoolean: Lo,
  ZodDate: nr,
  ZodSymbol: ws,
  ZodUndefined: Fo,
  ZodNull: Vo,
  ZodAny: Fr,
  ZodUnknown: qn,
  ZodNever: yn,
  ZodVoid: _s,
  ZodArray: zt,
  ZodObject: Xe,
  ZodUnion: Uo,
  ZodDiscriminatedUnion: ui,
  ZodIntersection: Wo,
  ZodTuple: rn,
  ZodRecord: Bo,
  ZodMap: Cs,
  ZodSet: rr,
  ZodFunction: Sr,
  ZodLazy: zo,
  ZodLiteral: Ho,
  ZodEnum: Ln,
  ZodNativeEnum: Yo,
  ZodPromise: Vr,
  ZodEffects: Kt,
  ZodTransformer: Kt,
  ZodOptional: vn,
  ZodNullable: or,
  ZodDefault: Ko,
  ZodCatch: Es,
  ZodNaN: Ss,
  BRAND: TS,
  ZodBranded: pg,
  ZodPipeline: wa,
  custom: mg,
  Schema: ke,
  ZodSchema: ke,
  late: PS,
  get ZodFirstPartyTypeKind() {
    return Se;
  },
  coerce: uN,
  any: jS,
  array: US,
  bigint: OS,
  boolean: gg,
  date: DS,
  discriminatedUnion: HS,
  effect: Nf,
  enum: eN,
  function: XS,
  instanceof: kS,
  intersection: YS,
  lazy: JS,
  literal: QS,
  map: ZS,
  nan: MS,
  nativeEnum: tN,
  never: FS,
  null: IS,
  nullable: oN,
  number: hg,
  object: WS,
  oboolean: lN,
  onumber: cN,
  optional: rN,
  ostring: iN,
  pipeline: sN,
  preprocess: aN,
  promise: nN,
  record: GS,
  set: qS,
  strictObject: BS,
  string: vg,
  symbol: RS,
  transformer: Nf,
  tuple: KS,
  undefined: AS,
  union: zS,
  unknown: LS,
  void: VS,
  NEVER: dN,
  ZodIssueCode: ae,
  quotelessJson: mS,
  ZodError: Bt
});
const fN = () => {
  const { showFilters: e, setShowFilters: t } = rt(zn);
  return /* @__PURE__ */ p.exports.jsxs(
    at,
    {
      variant: "outline",
      onClick: () => t(!e),
      className: "ml-auto py-5 whitespace-nowrap",
      children: [
        /* @__PURE__ */ p.exports.jsx(uS, { className: "mr-2 h-4 w-4" }),
        "Mostrar Filtros"
      ]
    }
  );
}, pN = ({ id: e, icon: t, label: n, options: r }) => {
  const { selectOptionFilter: o, getFilterOptionsSelectedById: a, resetFilters: s } = rt(zn);
  return /* @__PURE__ */ p.exports.jsxs(ls, { children: [
    /* @__PURE__ */ p.exports.jsx(us, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(at, { variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
      t || /* @__PURE__ */ p.exports.jsx(dS, { size: 16, className: "mr-2" }),
      n,
      a(e).length > 0 && /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
        /* @__PURE__ */ p.exports.jsx(tu, { orientation: "vertical", className: "mx-2 h-4" }),
        /* @__PURE__ */ p.exports.jsx(
          po,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal lg:hidden",
            children: a(e).length
          }
        ),
        /* @__PURE__ */ p.exports.jsx("div", { className: "hidden space-x-1 lg:flex", children: a(e).length > 2 ? /* @__PURE__ */ p.exports.jsxs(
          po,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: [
              a(e).length,
              " seleccionados"
            ]
          }
        ) : r.filter((i) => i.selected).map((i) => /* @__PURE__ */ p.exports.jsx(
          po,
          {
            variant: "secondary",
            className: "rounded-sm px-1 font-normal",
            children: i.label
          },
          i.value.toString()
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.exports.jsx(Po, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ p.exports.jsxs(Oo, { children: [
      /* @__PURE__ */ p.exports.jsx(ds, { placeholder: n }),
      /* @__PURE__ */ p.exports.jsxs(Xv, { children: [
        /* @__PURE__ */ p.exports.jsx(fs, { children: "Sin Resultados" }),
        /* @__PURE__ */ p.exports.jsx(Do, { children: r.map((i) => /* @__PURE__ */ p.exports.jsxs(
          Ro,
          {
            onSelect: () => {
              i.selected ? o(e, i.id, !1) : o(e, i.id, !0);
            },
            children: [
              /* @__PURE__ */ p.exports.jsx(
                "div",
                {
                  className: A(
                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                    i.selected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                  ),
                  children: /* @__PURE__ */ p.exports.jsx(On, { className: A("h-4 w-4") })
                }
              ),
              i.icon,
              /* @__PURE__ */ p.exports.jsx("span", { children: i.label })
            ]
          },
          i.value.toString()
        )) }),
        a(e).length > 0 && /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
          /* @__PURE__ */ p.exports.jsx(Jv, {}),
          /* @__PURE__ */ p.exports.jsx(Do, { children: /* @__PURE__ */ p.exports.jsx(
            Ro,
            {
              onSelect: () => s(),
              className: "justify-center text-center",
              children: "Limpiar Filtros"
            }
          ) })
        ] })
      ] })
    ] }) })
  ] });
}, mN = ({ id: e, form: t, label: n, icon: r, queryText: o }) => /* @__PURE__ */ p.exports.jsxs(ls, { children: [
  /* @__PURE__ */ p.exports.jsx(us, { asChild: !0, children: /* @__PURE__ */ p.exports.jsxs(at, { variant: "outline", size: "sm", className: "py-5 border-dashed", children: [
    /* @__PURE__ */ p.exports.jsx(Yf, { size: 16, className: "mr-2 text-gray-500" }),
    n,
    /* @__PURE__ */ p.exports.jsx(tu, { orientation: "vertical", className: "mx-2 h-4" }),
    /* @__PURE__ */ p.exports.jsx(
      po,
      {
        variant: "secondary",
        className: "rounded-sm px-1 font-normal",
        children: o || "Buscar "
      }
    )
  ] }) }),
  /* @__PURE__ */ p.exports.jsxs(Po, { className: "w-fit p-4", align: "start", children: [
    /* @__PURE__ */ p.exports.jsxs(la, { htmlFor: e, children: [
      "Buscar ",
      n
    ] }),
    /* @__PURE__ */ p.exports.jsx(
      Hm,
      {
        id: e,
        form: t,
        type: "text",
        placeholder: `Ingrese ${n}`
      }
    )
  ] })
] }), vN = ({ form: e, onSubmit: t }) => {
  const { queries: n, filters: r, showFilters: o, resetFilters: a } = rt(zn), s = e.watch(n.map((i) => i.id));
  return /* @__PURE__ */ p.exports.jsx("div", { className: "w-10/12 flex items-center justify-between", children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex flex-col items-start gap-x-2 gap-y-2", children: [
    /* @__PURE__ */ p.exports.jsx("form", { onSubmit: e.handleSubmit(t), className: "w-full flex justify-start items-center sm:mr-4", children: /* @__PURE__ */ p.exports.jsx("section", { className: "mr-3 flex justify-start items-center gap-x-3", children: n.map((i, c) => /* @__PURE__ */ p.exports.jsx(
      mN,
      {
        queryText: s[c],
        label: i.label,
        id: i.id,
        form: e
      },
      i.id
    )) }) }),
    r != null && r.length ? /* @__PURE__ */ p.exports.jsxs("div", { className: "w-auto h-full flex flex-wrap gap-x-3 gap-y-2 justify-start items-center", children: [
      /* @__PURE__ */ p.exports.jsx(fN, {}),
      o && r && r.map((i) => /* @__PURE__ */ p.exports.jsx(
        pN,
        {
          id: i.id,
          icon: i.icon,
          label: i.label,
          options: i.options
        },
        i.id
      )),
      o && /* @__PURE__ */ p.exports.jsxs(
        at,
        {
          type: "button",
          variant: "ghost",
          onClick: () => {
            a();
          },
          className: "px-2 py-5 lg:px-3 ml-0 lg:ml-auto",
          children: [
            "Limpiar Filtros",
            /* @__PURE__ */ p.exports.jsx(tl, { className: "ml-2 h-4 w-4" })
          ]
        }
      )
    ] }) : null
  ] }) });
}, hN = ({ onSubmitTable: e, loading: t }) => {
  const { queries: n, getFiltersWithOptionsSelected: r, filters: o, pagination: { page: a, limit: s }, setSearchForm: i } = rt(zn), c = Vw({
    defaultValues: n.reduce((u, d) => (u[d.id] = "", u), {}),
    resolver: ZE(Tf.object(
      n.reduce((u, d) => (u[d.id] = Tf.string().optional(), u), {})
    ))
  }), l = async (u) => {
    var m;
    const d = [], f = r();
    (m = Object.entries(u)) == null || m.forEach((v) => {
      v[1] && d.push({
        field: v[0],
        text: v[1]
      });
    }), e({ queries: d, filters: f, limit: s, page: a });
  };
  return Q(() => i(c), [c]), !(n != null && n.length) && !(o != null && o.length) ? /* @__PURE__ */ p.exports.jsx("div", {}) : /* @__PURE__ */ p.exports.jsx(Bw, { ...c, children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex flex-wrap justify-between items-end gap-y-2", children: [
    n != null && n.length || o != null && o.length ? /* @__PURE__ */ p.exports.jsx(vN, { form: c, onSubmit: l }) : /* @__PURE__ */ p.exports.jsx("div", {}),
    /* @__PURE__ */ p.exports.jsx("div", { className: "w-fit flex flex-col gap-y-2", children: /* @__PURE__ */ p.exports.jsx(
      at,
      {
        type: "submit",
        onClick: c.handleSubmit(l),
        disabled: t,
        className: "ml-auto py-5 whitespace-nowrap",
        children: t ? /* @__PURE__ */ p.exports.jsx(zf, {}) : /* @__PURE__ */ p.exports.jsxs(p.exports.Fragment, { children: [
          /* @__PURE__ */ p.exports.jsx(pS, { className: "dark:border-white h-5 w-5 mr-2" }),
          "Buscar"
        ] })
      }
    ) })
  ] }) });
}, gN = () => /* @__PURE__ */ p.exports.jsx("div", { className: "w-full h-full flex flex-col justify-center items-center py-24", children: /* @__PURE__ */ p.exports.jsx("h6", { className: "font-semibold", children: "Hubo un error" }) }), bN = () => /* @__PURE__ */ p.exports.jsxs("svg", { width: "138", height: "108", viewBox: "0 0 138 108", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ p.exports.jsx("path", { d: "M71.7336 89.3743C91.2541 89.3743 107.079 73.5372 107.079 54.0011C107.079 34.465 91.2541 18.6279 71.7336 18.6279C52.2131 18.6279 36.3887 34.465 36.3887 54.0011C36.3887 73.5372 52.2131 89.3743 71.7336 89.3743Z", fill: "#DBE8EC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M119.497 46.5978V42.7778C119.497 42.0493 119.208 41.3507 118.693 40.8356C118.179 40.3205 117.481 40.0312 116.753 40.0312H107.066C106.338 40.0312 105.64 39.7418 105.125 39.2267C104.611 38.7116 104.321 38.013 104.321 37.2846V33.4646C104.321 32.7361 104.611 32.0375 105.125 31.5224C105.64 31.0073 106.338 30.718 107.066 30.718H107.372C108.1 30.718 108.798 30.4286 109.312 29.9135C109.827 29.3984 110.116 28.6998 110.116 27.9714V24.1514C110.116 23.4229 109.827 22.7243 109.312 22.2092C108.798 21.6942 108.1 21.4048 107.372 21.4048H36.9918C36.264 21.4048 35.5659 21.6942 35.0512 22.2092C34.5366 22.7243 34.2474 23.4229 34.2474 24.1514V27.9714C34.2474 28.6998 34.5366 29.3984 35.0512 29.9135C35.5659 30.4286 36.264 30.718 36.9918 30.718C37.7197 30.718 38.4177 31.0073 38.9324 31.5224C39.4471 32.0375 39.7362 32.7361 39.7362 33.4646V37.2846C39.7362 38.013 39.4471 38.7116 38.9324 39.2267C38.4177 39.7418 37.7197 40.0312 36.9918 40.0312H26.379C25.6511 40.0312 24.9531 40.3205 24.4384 40.8356C23.9237 41.3507 23.6346 42.0493 23.6346 42.7778V46.5978C23.6346 47.3262 23.9237 48.0248 24.4384 48.5399C24.9531 49.055 25.6511 49.3444 26.379 49.3444H30.5433C30.9037 49.3444 31.2606 49.4154 31.5935 49.5534C31.9265 49.6915 32.229 49.8938 32.4839 50.1488C32.7387 50.4039 32.9409 50.7066 33.0788 51.0399C33.2167 51.3731 33.2877 51.7303 33.2877 52.0909V55.911C33.2877 56.6394 32.9986 57.338 32.4839 57.8531C31.9692 58.3682 31.2712 58.6576 30.5433 58.6576H30.5332C29.8054 58.6576 29.1073 58.9469 28.5927 59.462C28.078 59.9771 27.7888 60.6757 27.7888 61.4041V65.2241C27.7888 65.9526 28.078 66.6512 28.5927 67.1663C29.1073 67.6814 29.8054 67.9707 30.5332 67.9707H31.1357C31.4961 67.9707 31.853 68.0418 32.186 68.1798C32.5189 68.3178 32.8215 68.5201 33.0763 68.7752C33.3312 69.0302 33.5333 69.333 33.6712 69.6663C33.8091 69.9995 33.8801 70.3566 33.8801 70.7173V74.5374C33.8801 75.2658 33.591 75.9644 33.0763 76.4795C32.5616 76.9946 31.8636 77.2839 31.1357 77.2839H21.2478C20.52 77.2839 19.8219 77.5733 19.3072 78.0884C18.7926 78.6035 18.5034 79.3021 18.5034 80.0305V83.8505C18.5034 84.579 18.7926 85.2776 19.3072 85.7927C19.8219 86.3077 20.52 86.5971 21.2478 86.5971H108.845C109.573 86.5971 110.271 86.3078 110.786 85.7927C111.3 85.2776 111.59 84.579 111.59 83.8505V80.0305C111.59 79.3021 111.3 78.6035 110.786 78.0884C110.271 77.5733 109.573 77.2839 108.845 77.2839H106.466C105.738 77.2839 105.04 76.9946 104.525 76.4795C104.01 75.9644 103.721 75.2658 103.721 74.5373V70.7173C103.721 69.9889 104.01 69.2903 104.525 68.7752C105.04 68.2601 105.738 67.9707 106.466 67.9707H112.076C112.804 67.9707 113.502 67.6814 114.017 67.1663C114.532 66.6512 114.821 65.9526 114.821 65.2242V61.4041C114.821 60.6757 114.532 59.9771 114.017 59.462C113.502 58.9469 112.804 58.6576 112.076 58.6576H110.374C109.646 58.6576 108.948 58.3682 108.434 57.8531C107.919 57.338 107.63 56.6394 107.63 55.911V52.0909C107.63 51.3625 107.919 50.6639 108.434 50.1488C108.948 49.6337 109.646 49.3444 110.374 49.3444H116.753C117.481 49.3444 118.179 49.055 118.693 48.5399C119.208 48.0248 119.497 47.3262 119.497 46.5978Z", fill: "#DBE8EC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M81.5986 19.4407H88.4069", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M81.5986 21.4048H88.4069", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M81.5986 23.3689H88.4069", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M25.6138 61.1533H32.4222", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M25.6138 63.1172H32.4222", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M25.6138 65.0813H32.4222", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M107.078 79.1523H113.887", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M107.078 81.1162H113.887", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M107.078 83.0801H113.887", stroke: "#B9D4DB", strokeWidth: "3", strokeMiterlimit: "10", strokeLinecap: "round" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M115.745 45.5961C117.352 45.5961 118.655 44.2921 118.655 42.6837C118.655 41.0752 117.352 39.7712 115.745 39.7712C114.137 39.7712 112.834 41.0752 112.834 42.6837C112.834 44.2921 114.137 45.5961 115.745 45.5961Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M108.065 46.2956C108.898 46.2956 109.574 45.6195 109.574 44.7855C109.574 43.9515 108.898 43.2754 108.065 43.2754C107.232 43.2754 106.556 43.9515 106.556 44.7855C106.556 45.6195 107.232 46.2956 108.065 46.2956Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M111.896 37.7146C113.087 37.7146 114.052 36.7487 114.052 35.5571C114.052 34.3656 113.087 33.3997 111.896 33.3997C110.706 33.3997 109.741 34.3656 109.741 35.5571C109.741 36.7487 110.706 37.7146 111.896 37.7146Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M35.1461 85.6059C37.0584 85.6059 38.6086 84.0544 38.6086 82.1406C38.6086 80.2268 37.0584 78.6753 35.1461 78.6753C33.2338 78.6753 31.6836 80.2268 31.6836 82.1406C31.6836 84.0544 33.2338 85.6059 35.1461 85.6059Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M28.2996 85.6742C29.2957 85.6742 30.1032 84.8661 30.1032 83.8692C30.1032 82.8723 29.2957 82.0642 28.2996 82.0642C27.3036 82.0642 26.4961 82.8723 26.4961 83.8692C26.4961 84.8661 27.3036 85.6742 28.2996 85.6742Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M26.1815 78.9186C26.756 78.9186 27.2218 78.4524 27.2218 77.8774C27.2218 77.3023 26.756 76.8362 26.1815 76.8362C25.6069 76.8362 25.1411 77.3023 25.1411 77.8774C25.1411 78.4524 25.6069 78.9186 26.1815 78.9186Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M31.3397 77.7066C32.7172 77.7066 33.8338 76.5891 33.8338 75.2106C33.8338 73.8321 32.7172 72.7146 31.3397 72.7146C29.9623 72.7146 28.8457 73.8321 28.8457 75.2106C28.8457 76.5891 29.9623 77.7066 31.3397 77.7066Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.2828 32.0404C55.1951 32.0404 56.7453 30.489 56.7453 28.5751C56.7453 26.6613 55.1951 25.1099 53.2828 25.1099C51.3705 25.1099 49.8203 26.6613 49.8203 28.5751C49.8203 30.489 51.3705 32.0404 53.2828 32.0404Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.4232 23.3148C54.4193 23.3148 55.2267 22.5067 55.2267 21.5098C55.2267 20.513 54.4193 19.7048 53.4232 19.7048C52.4271 19.7048 51.6196 20.513 51.6196 21.5098C51.6196 22.5067 52.4271 23.3148 53.4232 23.3148Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M65.436 24.1268C66.2981 24.1268 66.9969 23.4274 66.9969 22.5646C66.9969 21.7019 66.2981 21.0024 65.436 21.0024C64.5739 21.0024 63.875 21.7019 63.875 22.5646C63.875 23.4274 64.5739 24.1268 65.436 24.1268Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M59.7572 22.0875C60.3317 22.0875 60.7975 21.6213 60.7975 21.0463C60.7975 20.4713 60.3317 20.0051 59.7572 20.0051C59.1826 20.0051 58.7168 20.4713 58.7168 21.0463C58.7168 21.6213 59.1826 22.0875 59.7572 22.0875Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M60.9662 29.2254C62.3436 29.2254 63.4602 28.1079 63.4602 26.7294C63.4602 25.3509 62.3436 24.2334 60.9662 24.2334C59.5888 24.2334 58.4722 25.3509 58.4722 26.7294C58.4722 28.1079 59.5888 29.2254 60.9662 29.2254Z", fill: "#B9D4DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M102.504 61.5022L79.4863 73.911V45.7637L102.504 38.572V61.5022Z", fill: "#E06714" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M79.4866 45.7637L52.314 43.0127L46.7451 34.7901C46.6807 34.695 46.6434 34.584 46.6372 34.4693C46.6309 34.3545 46.6561 34.2402 46.7099 34.1386C46.7637 34.037 46.8441 33.9521 46.9426 33.8928C47.041 33.8336 47.1537 33.8022 47.2685 33.8022H72.8654C72.9809 33.8022 73.0943 33.8339 73.1931 33.8939C73.2919 33.9538 73.3725 34.0397 73.4259 34.1423L79.4866 45.7637Z", fill: "#F9AE2B" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M52.314 71.16L42.8243 69.1838C42.682 69.1542 42.5543 69.0764 42.4626 68.9636C42.3709 68.8507 42.3208 68.7097 42.3208 68.5643V41.7097C42.3208 41.6157 42.3417 41.5228 42.3821 41.4379C42.4225 41.353 42.4812 41.2781 42.5541 41.2188C42.627 41.1594 42.7122 41.1171 42.8035 41.0949C42.8948 41.0726 42.9899 41.071 43.0819 41.0902L52.314 43.0127V71.16ZM88.6477 76.9634L79.4865 73.911V45.7637L89.0471 48.9491C89.1731 48.9911 89.2827 49.0717 89.3603 49.1795C89.4379 49.2872 89.4797 49.4167 89.4797 49.5496V76.3629C89.4797 76.4632 89.4559 76.562 89.4103 76.6512C89.3647 76.7405 89.2985 76.8176 89.2172 76.8762C89.136 76.9349 89.042 76.9733 88.943 76.9885C88.8439 77.0036 88.7427 76.995 88.6477 76.9634Z", fill: "#F9AE2B" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M79.4865 73.911L52.314 71.16V43.0127L79.4865 45.7637V73.911Z", fill: "#409CB5" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M72.5769 81.442L44.8516 80.3349L52.3141 71.1599L79.4866 73.911L73.0776 81.2269C73.0154 81.2979 72.9382 81.354 72.8516 81.3912C72.765 81.4284 72.6711 81.4458 72.5769 81.442Z", fill: "#F9AE2B" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M79.4866 45.7637L102.505 38.572L74.3691 35.9509L79.4866 45.7637Z", fill: "#EE781D" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M52.314 71.16L79.4865 58.462V45.7637L52.314 43.0127V71.16Z", fill: "#25788E" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.9431 61.9876C53.9431 61.9876 56.9118 60.6877 57.7003 61.6162C58.4889 62.5446 60.2515 62.9624 60.2515 62.9624L61.7822 60.3628L65.9568 62.3125L68.2296 65.4228L66.7453 69.0901C66.7453 69.0901 63.7303 69.0437 62.2924 69.6471C60.8545 70.2506 57.0973 70.297 57.0973 70.297L55.3811 67.0011C55.3811 67.0011 53.201 63.798 53.9431 61.9876Z", fill: "#DBE8EC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M60.2515 62.9624C60.537 63.2156 60.8112 63.4782 61.08 63.7453C61.351 64.0105 61.6119 64.2842 61.8738 64.5572C62.1301 64.8348 62.3932 65.1066 62.6417 65.3907C62.8924 65.673 63.1476 65.9514 63.3899 66.2408L62.8555 66.5053C62.7343 66.0006 62.6147 65.4956 62.5075 64.9877C62.3981 64.4803 62.3044 63.9694 62.2063 63.4595C62.0276 62.4357 61.861 61.4092 61.7822 60.3628C62.1608 61.3413 62.4517 62.3397 62.7305 63.3409C62.8611 63.8434 62.9962 64.345 63.1155 64.8501C63.2371 65.3547 63.3462 65.8622 63.4537 66.3699L63.4547 66.3743C63.4689 66.4413 63.4602 66.5112 63.4302 66.5727C63.4001 66.6343 63.3503 66.684 63.2887 66.7139C63.2271 66.7438 63.1573 66.7523 63.0904 66.7379C63.0234 66.7235 62.9632 66.6871 62.9194 66.6345C62.6778 66.3446 62.4491 66.0439 62.216 65.7469C61.9806 65.4518 61.7599 65.1445 61.5323 64.8429C61.3103 64.5366 61.0874 64.2311 60.8746 63.9171C60.6595 63.6051 60.4498 63.2885 60.2515 62.9624Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M65.9569 62.3125C65.7799 62.6947 65.5807 63.0618 65.3821 63.4293C65.1783 63.7933 64.9732 64.1564 64.7568 64.5118C64.5467 64.8715 64.3207 65.2203 64.1001 65.5729C63.8779 65.9243 63.6431 66.2672 63.4152 66.6148L63.0931 66.1286C63.5156 66.0418 63.9397 65.963 64.3644 65.8876C64.7909 65.821 65.2148 65.7416 65.6434 65.6853C66.0705 65.6219 66.5 65.5702 66.9301 65.5217C67.3618 65.4808 67.7928 65.4368 68.2298 65.4228C67.821 65.5779 67.4061 65.703 66.9919 65.8312C66.5762 65.952 66.1599 66.0694 65.7412 66.1751C65.3239 66.2879 64.902 66.3777 64.4827 66.4802C64.0616 66.5739 63.6399 66.6643 63.2165 66.7466L63.2099 66.7479C63.1486 66.7598 63.0852 66.7532 63.0278 66.7287C62.9704 66.7043 62.9216 66.6632 62.8876 66.6108C62.8537 66.5584 62.8363 66.497 62.8375 66.4346C62.8387 66.3722 62.8585 66.3115 62.8944 66.2605C63.1335 65.9205 63.3658 65.5759 63.6105 65.2398C63.857 64.9049 64.098 64.5662 64.3549 64.2383C64.6056 63.9063 64.8675 63.5818 65.1307 63.2583C65.3992 62.9383 65.667 62.6179 65.9569 62.3125Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M66.7453 69.0901C66.4028 68.9277 66.0789 68.7401 65.7531 68.5551C65.4316 68.3643 65.1129 68.1697 64.8007 67.9662C64.1724 67.5646 63.5643 67.1356 62.9675 66.6914L63.4241 66.6011C63.0633 67.1896 62.6893 67.7701 62.2881 68.3341C62.0918 68.6187 61.8835 68.896 61.6741 69.1727C61.4598 69.4464 61.2455 69.7201 61.0093 69.9805C61.1306 69.6504 61.2738 69.3336 61.4171 69.0168C61.5653 68.703 61.7144 68.3899 61.8757 68.084C62.1896 67.4671 62.5308 66.8667 62.8851 66.2742C62.9062 66.2389 62.9341 66.208 62.9672 66.1834C63.0002 66.1589 63.0378 66.1411 63.0777 66.131C63.1177 66.121 63.1592 66.1189 63.1999 66.125C63.2406 66.131 63.2798 66.145 63.3151 66.1661L63.339 66.1819L63.3417 66.184C63.9417 66.6239 64.5305 67.079 65.0991 67.5616C65.3854 67.8002 65.6651 68.0477 65.942 68.299C66.2147 68.5559 66.4893 68.8105 66.7453 69.0901Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.9434 61.9875C55.5459 62.5898 57.1089 63.2738 58.6663 63.9696C59.4414 64.3249 60.2183 64.6766 60.9863 65.0467C61.7584 65.4082 62.5233 65.7847 63.2878 66.1619L63.2902 66.163C63.3389 66.1871 63.3803 66.2236 63.4102 66.269C63.4401 66.3143 63.4574 66.3668 63.4604 66.421C63.4633 66.4753 63.4518 66.5293 63.427 66.5776C63.4022 66.6259 63.3649 66.6668 63.3191 66.6959C62.8143 67.0175 62.2989 67.3223 61.7887 67.6354C61.2794 67.9499 60.759 68.2471 60.2448 68.5538C59.7254 68.8525 59.2084 69.1548 58.6829 69.4439C58.1599 69.7369 57.6314 70.0213 57.0975 70.2971C57.5727 69.9289 58.0538 69.5701 58.5408 69.2205C59.0249 68.8664 59.5174 68.5254 60.0076 68.181C60.5029 67.8444 60.9921 67.4983 61.4924 67.1696C61.9917 66.8394 62.4858 66.5011 62.9905 66.1794L63.0218 66.7134C62.2511 66.3489 61.4808 65.9837 60.7177 65.6036C59.9504 65.232 59.192 64.842 58.4319 64.4556C56.9188 63.668 55.4114 62.8687 53.9434 61.9875Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M55.1914 66.7046C55.7333 66.4997 56.2544 66.2437 56.7478 65.94C57.2071 65.6688 57.5896 65.2848 57.8592 64.8243C58.0927 64.3529 58.1767 63.8213 58.1001 63.3007C58.0214 62.7276 57.8875 62.1635 57.7002 61.6162C58.1167 62.0693 58.4209 62.6141 58.5883 63.2066C58.7795 63.8435 58.7181 64.5296 58.4167 65.1223C58.0916 65.6904 57.5854 66.1328 56.9791 66.3786C56.4163 66.6238 55.8044 66.7353 55.1914 66.7046ZM59.9322 64.881C59.8979 65.3135 59.8235 65.742 59.71 66.1608C59.602 66.5728 59.4719 66.9787 59.3202 67.3766C59.1694 67.775 58.9969 68.1647 58.8034 68.5441C58.6098 68.9324 58.3801 69.3017 58.1174 69.647C58.151 69.2143 58.2251 68.7857 58.3388 68.3669C58.4467 67.9549 58.5771 67.5491 58.7295 67.1514C58.8809 66.7533 59.0536 66.3636 59.247 65.9842C59.4408 65.596 59.6702 65.2267 59.9322 64.881Z", fill: "#BAD5DB" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.7888 77.2916C53.7888 77.2916 51.5274 79.6141 50.4477 79.0511C49.3679 78.488 47.5778 78.7649 47.5778 78.7649L47.1374 81.75L42.5365 81.5163L39.261 79.491L39.2568 75.5343C39.2568 75.5343 42.0676 74.4415 43.1727 73.3407C44.2779 72.2399 47.7413 70.7815 47.7413 70.7815L50.571 73.1885C50.571 73.1885 53.7954 75.3347 53.7888 77.2916Z", fill: "#C0D8DD" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M47.5782 78.7649C46.8772 78.4763 46.1923 78.1574 45.5102 77.8331C45.1713 77.6669 44.8296 77.506 44.4939 77.3339C44.1572 77.1635 43.8187 76.9966 43.4855 76.8197L43.7492 76.5221C44.3526 77.3665 44.9353 78.2253 45.5067 79.092C46.0713 79.9634 46.6292 80.8395 47.1378 81.75C46.461 80.9567 45.8334 80.1292 45.2126 79.297C44.5986 78.46 43.9958 77.6151 43.4137 76.7559L43.4122 76.7537C43.3866 76.7159 43.3743 76.6706 43.3774 76.625C43.3805 76.5794 43.3988 76.5361 43.4293 76.5022C43.4598 76.4682 43.5009 76.4454 43.5458 76.4374C43.5908 76.4295 43.6371 76.4369 43.6774 76.4583C44.0103 76.6357 44.338 76.8231 44.6675 77.007C44.9978 77.1892 45.3222 77.3827 45.6495 77.5709C46.2997 77.9552 46.9469 78.3449 47.5782 78.7649Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M42.5367 81.5163C42.627 80.6855 42.7572 79.8631 42.9006 79.0437C43.0418 78.2237 43.2061 77.4087 43.376 76.595L43.6968 76.8143L42.6121 77.5201C42.2454 77.7476 41.8834 77.9824 41.5128 78.204C41.1449 78.4296 40.7726 78.6487 40.3991 78.8658C40.0228 79.0787 39.6476 79.2934 39.2612 79.491C39.5949 79.2134 39.9397 78.9526 40.2833 78.6902C40.6298 78.432 40.9775 78.1757 41.3296 77.926C41.6791 77.6723 42.0371 77.4317 42.3904 77.1839L43.4656 76.4636C43.5004 76.4404 43.5413 76.428 43.5831 76.4282C43.6249 76.4284 43.6657 76.4411 43.7002 76.4647C43.7347 76.4883 43.7614 76.5217 43.7767 76.5606C43.7921 76.5995 43.7955 76.6421 43.7865 76.683C43.6083 77.495 43.4244 78.3058 43.2174 79.1116C43.0127 79.9179 42.7946 80.7214 42.5367 81.5163Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M39.2568 75.5343C39.6292 75.5793 39.9964 75.6445 40.3641 75.7077C40.7307 75.7754 41.0964 75.8463 41.4604 75.9242C42.189 76.0771 42.9124 76.2508 43.6328 76.4359L43.3743 76.6058C43.4336 76.2657 43.4861 75.9245 43.5511 75.5853C43.6154 75.246 43.677 74.9062 43.7498 74.5683C43.8902 73.8916 44.0433 73.2169 44.2361 72.5486C44.2105 73.2437 44.1453 73.9325 44.0673 74.6192C44.031 74.963 43.9834 75.305 43.9386 75.6474C43.8944 75.99 43.8377 76.3305 43.7878 76.6721C43.7799 76.7264 43.7508 76.7754 43.7068 76.8082C43.6628 76.841 43.6076 76.8549 43.5533 76.847L43.5326 76.8429L43.5292 76.842C42.8083 76.6589 42.0903 76.4643 41.3775 76.2491C41.0208 76.1429 40.6658 76.0296 40.3117 75.9133C39.9587 75.7924 39.6052 75.6734 39.2568 75.5343Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M53.7892 77.2916C52.9352 77.2891 52.0826 77.2651 51.2299 77.2437C50.3774 77.2185 49.5256 77.1822 48.6738 77.1448C46.9708 77.0629 45.269 76.9622 43.5684 76.8427L43.5669 76.8426C43.5308 76.84 43.496 76.8278 43.4661 76.8073C43.4363 76.7869 43.4124 76.7588 43.3969 76.726C43.3815 76.6933 43.375 76.657 43.3782 76.6209C43.3814 76.5848 43.3942 76.5502 43.4152 76.5207C43.7619 76.0326 44.1194 75.5521 44.4716 75.0679C44.8228 74.5831 45.1853 74.1062 45.5416 73.6249C45.9035 73.1476 46.2608 72.6671 46.6309 72.1956C47.0001 71.7234 47.3631 71.2469 47.7417 70.7815C47.4268 71.2923 47.0965 71.792 46.7723 72.2961C46.449 72.8009 46.1129 73.2966 45.7815 73.7956C45.4444 74.2905 45.1135 74.7898 44.7714 75.2812C44.4302 75.7732 44.0943 76.269 43.7477 76.7572L43.5944 76.4352C45.2965 76.5315 46.9973 76.6483 48.6968 76.7857C49.5463 76.8571 50.3958 76.9296 51.2446 77.0132C52.0931 77.1005 52.9418 77.1853 53.7892 77.2916Z", fill: "#9FC6CC" }),
  /* @__PURE__ */ p.exports.jsx("path", { d: "M50.8585 73.3918C50.4064 73.7575 49.9975 74.1737 49.6399 74.6324C49.292 75.0629 49.0672 75.5796 48.9893 76.1278C48.96 76.3952 48.982 76.6659 49.0542 76.9251C49.1236 77.193 49.2312 77.4496 49.3735 77.6869C49.6778 78.1817 50.0384 78.6395 50.4481 79.051C49.9191 78.7564 49.4588 78.3526 49.0976 77.8663C48.7065 77.3584 48.5185 76.7229 48.5704 76.0838C48.6574 75.4559 48.9446 74.8729 49.3891 74.4213C49.8016 73.9791 50.3022 73.6284 50.8585 73.3918ZM47.1522 76.8672C47.0609 76.4481 46.9969 76.0235 46.9606 75.596C46.9205 75.1718 46.8949 74.7472 46.886 74.3223C46.8756 73.8973 46.8831 73.472 46.9044 73.0465C46.9218 72.6178 46.9675 72.1907 47.041 71.7681C47.1329 72.1871 47.1971 72.6118 47.2333 73.0393C47.2731 73.4635 47.2991 73.8881 47.3073 74.313C47.3169 74.738 47.3098 75.1633 47.2882 75.5889C47.2707 76.0175 47.2253 76.4445 47.1522 76.8672Z", fill: "#9FC6CC" })
] }), xN = () => /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full flex flex-col items-center justify-center py-8", children: [
  /* @__PURE__ */ p.exports.jsx(bN, {}),
  /* @__PURE__ */ p.exports.jsx("div", { className: "-mt-3", children: /* @__PURE__ */ p.exports.jsx("span", { children: "Sin Resultados" }) })
] }), yN = {
  limit: 5,
  page: 1,
  labels: { plural: "Items", single: "Item" },
  hasPrevPage: !1,
  hasNextPage: !1
};
function XP(e) {
  const { data: t, columns: n, loading: r, error: o } = e, [a, s] = X(!1), [i, c] = X([]), [l, u] = X(), [d, f] = X((e == null ? void 0 : e.pagination) ?? yN), m = pe((b) => e.onSubmitTable({ ...b }), [e]), v = pe((b) => {
    var T;
    f(b);
    const $ = l.getValues(), _ = [];
    (T = Object.entries($)) == null || T.forEach((k) => {
      k[1] && _.push({
        field: k[0],
        text: k[1]
      });
    });
    const w = i.map((k) => ({
      id: k.id,
      label: k.label,
      options: k.options.filter((j) => j.selected).map((j) => j.value)
    })).filter((k) => k.options.length > 0);
    m({ filters: w, queries: _, limit: b.limit, page: b.page });
  }, [i, m, l]), h = pe(() => {
    v({ ...d, page: d.page + 1 });
  }, [d, v]), g = pe(() => {
    d.page > 1 && v({ ...d, page: d.page - 1 });
  }, [d, v]);
  Q(() => {
    if (!(i != null && i.length)) {
      const b = (_) => (_ == null ? void 0 : _.filters) && (_ == null ? void 0 : _.filters.length), $ = n.filter(b).map((_) => {
        const w = _.filters.map((k) => ({ ...k, selected: !1 }));
        return { ..._, id: _.id, options: w };
      });
      c($);
    }
  }, [n, i == null ? void 0 : i.length]), Q(() => {
    f((b) => ({
      ...b,
      hasNextPage: e.pagination.hasNextPage,
      hasPrevPage: e.pagination.hasPrevPage
    }));
  }, [e.pagination.hasNextPage, e.pagination.hasNextPage]);
  const y = {
    data: t,
    columns: n,
    pagination: d,
    showFilters: a,
    filters: i,
    queries: n.filter((b) => b.isQuery).map((b) => ({
      id: b.id,
      label: b.label
    })),
    onSubmitTable: m,
    getFilterOptionsSelectedById: (b) => {
      const $ = i.find((_) => _.id === b);
      return $ ? $.options.filter((w) => w.selected).map((w) => w.value) : [];
    },
    getFiltersWithOptionsSelected: () => i.map((b) => ({
      id: b.id,
      label: b.label,
      options: b.options.filter(($) => $.selected).map(($) => $.value)
    })).filter((b) => b.options.length > 0),
    selectOptionFilter: (b, $, _) => {
      const w = i.map((T) => T.id === b ? {
        ...T,
        options: T.options.map((k) => k.id === $ ? { ...k, selected: _ } : k)
      } : T);
      c(w);
    },
    resetFilters: () => {
      const b = i.map(($) => ({
        ...$,
        options: $.options.map((_) => ({ ..._, selected: !1 }))
      }));
      c(b);
    },
    setShowFilters: (b) => s(b),
    updateLimit: (b) => v({ ...d, limit: b }),
    searchForm: l,
    nextPage: h,
    setSearchForm: (b) => u(b),
    prevPage: g
  };
  return /* @__PURE__ */ p.exports.jsx(zn.Provider, { value: { ...y }, children: /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full h-fit space-y-4", children: [
    !r && !o && t && /* @__PURE__ */ p.exports.jsx(hN, { onSubmitTable: m, loading: r }),
    /* @__PURE__ */ p.exports.jsxs("div", { className: "rounded-md border", children: [
      r && /* @__PURE__ */ p.exports.jsx(YE, {}),
      !r && o && /* @__PURE__ */ p.exports.jsx(gN, {}),
      !r && !o && !t && /* @__PURE__ */ p.exports.jsx(xN, {}),
      !r && !o && t && /* @__PURE__ */ p.exports.jsx(zE, {})
    ] }),
    !r && !o && t && /* @__PURE__ */ p.exports.jsx(FE, {})
  ] }) });
}
const JP = ({
  id: e,
  label: t,
  defaultValue: n,
  placeholder: r,
  description: o,
  items: a,
  form: s,
  tabIndex: i,
  classNameContainer: c,
  classNameSelect: l
}) => /* @__PURE__ */ p.exports.jsx(
  Eo,
  {
    control: s.control,
    name: e,
    defaultValue: n,
    render: ({ field: u, formState: d }) => {
      var f;
      return /* @__PURE__ */ p.exports.jsxs(kr, { className: A("w-full", c), children: [
        /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-start items-end", children: [
          t && /* @__PURE__ */ p.exports.jsxs(Mr, { className: "flex", children: [
            t,
            " "
          ] }),
          ((f = d == null ? void 0 : d.errors[e]) == null ? void 0 : f.message) && /* @__PURE__ */ p.exports.jsxs("span", { className: "text-xs font-light text-destructive", children: [
            "* ",
            d.errors[e].message
          ] })
        ] }),
        o && /* @__PURE__ */ p.exports.jsx(No, { className: "text-xs", children: o }),
        /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
        /* @__PURE__ */ p.exports.jsxs(dv, { onValueChange: u.onChange, defaultValue: u.value, children: [
          /* @__PURE__ */ p.exports.jsx(So, { children: /* @__PURE__ */ p.exports.jsx(Jl, { tabIndex: i, className: A("w-full", l), children: /* @__PURE__ */ p.exports.jsx(fv, { placeholder: r }) }) }),
          /* @__PURE__ */ p.exports.jsx(Ql, { children: a.map((m) => {
            var v, h;
            return /* @__PURE__ */ p.exports.jsx(eu, { value: (v = m.value) == null ? void 0 : v.toString(), children: /* @__PURE__ */ p.exports.jsxs("div", { className: "flex justify-center items-center", children: [
              (m == null ? void 0 : m.icon) && /* @__PURE__ */ p.exports.jsx("div", { className: "dark:text-white mr-2 h-5", children: m.icon }),
              m.label
            ] }) }, (h = m.value) == null ? void 0 : h.toString());
          }) })
        ] })
      ] });
    }
  }
);
function di() {
  return (di = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
function bg(e, t) {
  if (e == null)
    return {};
  var n, r, o = {}, a = Object.keys(e);
  for (r = 0; r < a.length; r++)
    t.indexOf(n = a[r]) >= 0 || (o[n] = e[n]);
  return o;
}
function zc(e) {
  var t = I(e), n = I(function(r) {
    t.current && t.current(r);
  });
  return t.current = e, n.current;
}
var Go = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 1), e > n ? n : e < t ? t : e;
}, ho = function(e) {
  return "touches" in e;
}, Hc = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, Pf = function(e, t, n) {
  var r = e.getBoundingClientRect(), o = ho(t) ? function(a, s) {
    for (var i = 0; i < a.length; i++)
      if (a[i].identifier === s)
        return a[i];
    return a[0];
  }(t.touches, n) : t;
  return { left: Go((o.pageX - (r.left + Hc(e).pageXOffset)) / r.width), top: Go((o.pageY - (r.top + Hc(e).pageYOffset)) / r.height) };
}, kf = function(e) {
  !ho(e) && e.preventDefault();
}, xg = N.memo(function(e) {
  var t = e.onMove, n = e.onKey, r = bg(e, ["onMove", "onKey"]), o = I(null), a = zc(t), s = zc(n), i = I(null), c = I(!1), l = xt(function() {
    var m = function(g) {
      kf(g), (ho(g) ? g.touches.length > 0 : g.buttons > 0) && o.current ? a(Pf(o.current, g, i.current)) : h(!1);
    }, v = function() {
      return h(!1);
    };
    function h(g) {
      var y = c.current, b = Hc(o.current), $ = g ? b.addEventListener : b.removeEventListener;
      $(y ? "touchmove" : "mousemove", m), $(y ? "touchend" : "mouseup", v);
    }
    return [function(g) {
      var y = g.nativeEvent, b = o.current;
      if (b && (kf(y), !function(_, w) {
        return w && !ho(_);
      }(y, c.current) && b)) {
        if (ho(y)) {
          c.current = !0;
          var $ = y.changedTouches || [];
          $.length && (i.current = $[0].identifier);
        }
        b.focus(), a(Pf(b, y, i.current)), h(!0);
      }
    }, function(g) {
      var y = g.which || g.keyCode;
      y < 37 || y > 40 || (g.preventDefault(), s({ left: y === 39 ? 0.05 : y === 37 ? -0.05 : 0, top: y === 40 ? 0.05 : y === 38 ? -0.05 : 0 }));
    }, h];
  }, [s, a]), u = l[0], d = l[1], f = l[2];
  return Q(function() {
    return f;
  }, [f]), N.createElement("div", di({}, r, { onTouchStart: u, onMouseDown: u, className: "react-colorful__interactive", ref: o, onKeyDown: d, tabIndex: 0, role: "slider" }));
}), Su = function(e) {
  return e.filter(Boolean).join(" ");
}, yg = function(e) {
  var t = e.color, n = e.left, r = e.top, o = r === void 0 ? 0.5 : r, a = Su(["react-colorful__pointer", e.className]);
  return N.createElement("div", { className: a, style: { top: 100 * o + "%", left: 100 * n + "%" } }, N.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, dt = function(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = Math.pow(10, t)), Math.round(n * e) / n;
}, $N = function(e) {
  return SN(Yc(e));
}, Yc = function(e) {
  return e[0] === "#" && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: e.length === 4 ? dt(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: e.length === 8 ? dt(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, wN = function(e) {
  return EN(CN(e));
}, _N = function(e) {
  var t = e.s, n = e.v, r = e.a, o = (200 - t) * n / 100;
  return { h: dt(e.h), s: dt(o > 0 && o < 200 ? t * n / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: dt(o / 2), a: dt(r, 2) };
}, Kc = function(e) {
  var t = _N(e);
  return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)";
}, CN = function(e) {
  var t = e.h, n = e.s, r = e.v, o = e.a;
  t = t / 360 * 6, n /= 100, r /= 100;
  var a = Math.floor(t), s = r * (1 - n), i = r * (1 - (t - a) * n), c = r * (1 - (1 - t + a) * n), l = a % 6;
  return { r: dt(255 * [r, i, s, s, c, r][l]), g: dt(255 * [c, r, r, i, s, s][l]), b: dt(255 * [s, s, c, r, r, i][l]), a: dt(o, 2) };
}, Fa = function(e) {
  var t = e.toString(16);
  return t.length < 2 ? "0" + t : t;
}, EN = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = o < 1 ? Fa(dt(255 * o)) : "";
  return "#" + Fa(t) + Fa(n) + Fa(r) + a;
}, SN = function(e) {
  var t = e.r, n = e.g, r = e.b, o = e.a, a = Math.max(t, n, r), s = a - Math.min(t, n, r), i = s ? a === t ? (n - r) / s : a === n ? 2 + (r - t) / s : 4 + (t - n) / s : 0;
  return { h: dt(60 * (i < 0 ? i + 6 : i)), s: dt(a ? s / a * 100 : 0), v: dt(a / 255 * 100), a: o };
}, NN = N.memo(function(e) {
  var t = e.hue, n = e.onChange, r = Su(["react-colorful__hue", e.className]);
  return N.createElement("div", { className: r }, N.createElement(xg, { onMove: function(o) {
    n({ h: 360 * o.left });
  }, onKey: function(o) {
    n({ h: Go(t + 360 * o.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": dt(t), "aria-valuemax": "360", "aria-valuemin": "0" }, N.createElement(yg, { className: "react-colorful__hue-pointer", left: t / 360, color: Kc({ h: t, s: 100, v: 100, a: 1 }) })));
}), TN = N.memo(function(e) {
  var t = e.hsva, n = e.onChange, r = { backgroundColor: Kc({ h: t.h, s: 100, v: 100, a: 1 }) };
  return N.createElement("div", { className: "react-colorful__saturation", style: r }, N.createElement(xg, { onMove: function(o) {
    n({ s: 100 * o.left, v: 100 - 100 * o.top });
  }, onKey: function(o) {
    n({ s: Go(t.s + 100 * o.left, 0, 100), v: Go(t.v - 100 * o.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + dt(t.s) + "%, Brightness " + dt(t.v) + "%" }, N.createElement(yg, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: Kc(t) })));
}), $g = function(e, t) {
  if (e === t)
    return !0;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}, PN = function(e, t) {
  return e.toLowerCase() === t.toLowerCase() || $g(Yc(e), Yc(t));
};
function kN(e, t, n) {
  var r = zc(n), o = X(function() {
    return e.toHsva(t);
  }), a = o[0], s = o[1], i = I({ color: t, hsva: a });
  Q(function() {
    if (!e.equal(t, i.current.color)) {
      var l = e.toHsva(t);
      i.current = { hsva: l, color: t }, s(l);
    }
  }, [t, e]), Q(function() {
    var l;
    $g(a, i.current.hsva) || e.equal(l = e.fromHsva(a), i.current.color) || (i.current = { hsva: a, color: l }, r(l));
  }, [a, e, r]);
  var c = pe(function(l) {
    s(function(u) {
      return Object.assign({}, u, l);
    });
  }, []);
  return [a, c];
}
var MN = typeof window < "u" ? Ps : Q, ON = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}, Mf = /* @__PURE__ */ new Map(), DN = function(e) {
  MN(function() {
    var t = e.current ? e.current.ownerDocument : document;
    if (t !== void 0 && !Mf.has(t)) {
      var n = t.createElement("style");
      n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, Mf.set(t, n);
      var r = ON();
      r && n.setAttribute("nonce", r), t.head.appendChild(n);
    }
  }, []);
}, RN = function(e) {
  var t = e.className, n = e.colorModel, r = e.color, o = r === void 0 ? n.defaultColor : r, a = e.onChange, s = bg(e, ["className", "colorModel", "color", "onChange"]), i = I(null);
  DN(i);
  var c = kN(n, o, a), l = c[0], u = c[1], d = Su(["react-colorful", t]);
  return N.createElement("div", di({}, s, { ref: i, className: d }), N.createElement(TN, { hsva: l, onChange: u }), N.createElement(NN, { hue: l.h, onChange: u, className: "react-colorful__last-control" }));
}, AN = { defaultColor: "000", toHsva: $N, fromHsva: function(e) {
  return wN({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: PN }, IN = function(e) {
  return N.createElement(RN, di({}, e, { colorModel: AN }));
};
const QP = ({ color: e, onChange: t, presetColors: n }) => /* @__PURE__ */ p.exports.jsxs("div", { className: "picker", children: [
  /* @__PURE__ */ p.exports.jsx(IN, { color: e, onChange: t }),
  /* @__PURE__ */ p.exports.jsx("div", { className: "picker__swatches", children: n.map((r) => /* @__PURE__ */ p.exports.jsx(
    "button",
    {
      className: "picker__swatch",
      style: { background: r },
      onClick: () => t(r)
    },
    r
  )) })
] });
function jN(e, t, n) {
  var r = X([]), o = r[0], a = r[1], s = I([]), i = pe(function(d, f) {
    var m = e(d, f), v = m[0], h = m[1];
    return a(function(g) {
      return [].concat(h.reverse(), g);
    }), v;
  }, [e]), c = ks(i, n), l = c[0], u = c[1];
  return Q(function() {
    var d = o.pop();
    if (d) {
      var f = t(d, u);
      f && s.current.push(f), a([].concat(o));
    }
  }, [o, t]), Q(function() {
    return function() {
      s.current.forEach(function(d) {
        d();
      });
    };
  }, []), [l, u];
}
function Ft() {
  return Ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ft.apply(this, arguments);
}
function LN(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var fi = {
  3: "Cancel",
  6: "Help",
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
  28: "Convert",
  29: "NonConvert",
  30: "Accept",
  31: "ModeChange",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  41: "Select",
  42: "Print",
  43: "Execute",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  48: ["0", ")"],
  49: ["1", "!"],
  50: ["2", "@"],
  51: ["3", "#"],
  52: ["4", "$"],
  53: ["5", "%"],
  54: ["6", "^"],
  55: ["7", "&"],
  56: ["8", "*"],
  57: ["9", "("],
  91: "OS",
  93: "ContextMenu",
  106: "*",
  107: "+",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  181: "VolumeMute",
  182: "VolumeDown",
  183: "VolumeUp",
  186: [";", ":"],
  187: ["=", "+"],
  188: [",", "<"],
  189: ["-", "_"],
  190: [".", ">"],
  191: ["/", "?"],
  192: ["`", "~"],
  219: ["[", "{"],
  220: ["\\", "|"],
  221: ["]", "}"],
  222: ["'", '"'],
  224: "Meta",
  225: "AltGraph",
  246: "Attn",
  247: "CrSel",
  248: "ExSel",
  249: "EraseEof",
  250: "Play",
  251: "ZoomOut"
}, bt;
for (bt = 1; bt < 25; bt += 1)
  fi[111 + bt] = "F" + bt;
for (bt = 65; bt < 91; bt += 1) {
  var Of = /* @__PURE__ */ String.fromCharCode(bt);
  fi[bt] = [/* @__PURE__ */ Of.toLowerCase(), /* @__PURE__ */ Of.toUpperCase()];
}
for (bt = 96; bt < 106; bt += 1)
  fi[bt] = /* @__PURE__ */ String.fromCharCode(bt - 48);
function FN(e) {
  if (e.key && e.key !== "Unidentified")
    return e.key;
  var t = fi[e.which || e.keyCode] || "Unidentified";
  return Array.isArray(t) ? t[+(e.shiftKey || 0)] : t;
}
var VN = {
  getKey: FN
};
function Va() {
}
function wg(e, t) {
  return Array.from({
    length: t
  }, function(n, r) {
    return r + e;
  });
}
function UN(e, t) {
  var n = /* @__PURE__ */ Object.create({});
  for (var r in t)
    if (!e.includes(r)) {
      var o;
      Object.assign(n, (o = {}, o[r] = t[r], o));
    }
  return n;
}
var WN = ["refs"], nc = [], BN = ["autoFocus", "length", "validate", "format", "debug"], zN = ["onResolveKey", "onRejectKey", "onChange", "onComplete"], HN = ["Alt", "Control", "Enter", "Meta", "Shift", "Tab"], YN = {
  ref: {
    current: []
  },
  length: 5,
  validate: /^[a-zA-Z0-9]$/,
  format: function(t) {
    return t;
  },
  onResolveKey: Va,
  onRejectKey: Va,
  onChange: Va,
  onComplete: Va,
  debug: !1
};
function KN(e) {
  return {
    focusIdx: 0,
    codeLength: e.length,
    isKeyAllowed: GN(e.validate),
    fallback: null
  };
}
function _g(e) {
  return Math.max(0, e - 1);
}
function Gc(e, t) {
  return t === 0 ? 0 : Math.min(e + 1, t - 1);
}
function GN(e) {
  return function(t) {
    return !t || t.length > 1 ? !1 : typeof e == "string" ? e.split("").includes(t) : e instanceof Array ? e.includes(t) : e instanceof RegExp ? e.test(t) : e(t);
  };
}
function Df(e, t, n) {
  var r = n.split("").slice(0, e.codeLength).every(e.isKeyAllowed);
  if (!r)
    return [e, [{
      type: "set-input-val",
      idx: e.focusIdx,
      val: ""
    }, {
      type: "reject-key",
      idx: t,
      key: n
    }, {
      type: "handle-code-change"
    }]];
  var o = Math.min(n.length, e.codeLength - e.focusIdx), a = Gc(o + e.focusIdx - 1, e.codeLength), s = wg(0, o).flatMap(function(i) {
    return [{
      type: "set-input-val",
      idx: i + e.focusIdx,
      val: n[i]
    }, {
      type: "resolve-key",
      idx: i + e.focusIdx,
      key: n[i]
    }];
  });
  return e.focusIdx !== a && s.push({
    type: "focus-input",
    idx: a
  }), s.push({
    type: "handle-code-change"
  }), [Ft({}, e, {
    focusIdx: a
  }), s];
}
var ZN = function(t, n) {
  switch (n.type) {
    case "handle-key-down":
      switch (n.key) {
        case "Unidentified":
          return [Ft({}, t, {
            fallback: {
              idx: t.focusIdx,
              val: n.val
            }
          }), nc];
        case "Dead":
          return [t, [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: ""
          }, {
            type: "reject-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "handle-code-change"
          }]];
        case "ArrowLeft": {
          var r = _g(t.focusIdx);
          return [Ft({}, t, {
            focusIdx: r
          }), [{
            type: "focus-input",
            idx: r
          }]];
        }
        case "ArrowRight": {
          var o = Gc(t.focusIdx, t.codeLength);
          return [Ft({}, t, {
            focusIdx: o
          }), [{
            type: "focus-input",
            idx: o
          }]];
        }
        case "Delete":
        case "Backspace":
          return [t, [{
            type: "handle-delete",
            idx: t.focusIdx
          }, {
            type: "handle-code-change"
          }]];
        default: {
          if (!t.isKeyAllowed(n.key))
            return [t, [{
              type: "reject-key",
              idx: t.focusIdx,
              key: n.key
            }]];
          var a = Gc(t.focusIdx, t.codeLength);
          return [Ft({}, t, {
            focusIdx: a
          }), [{
            type: "set-input-val",
            idx: t.focusIdx,
            val: n.key
          }, {
            type: "resolve-key",
            idx: t.focusIdx,
            key: n.key
          }, {
            type: "focus-input",
            idx: a
          }, {
            type: "handle-code-change"
          }]];
        }
      }
    case "handle-key-up": {
      if (!t.fallback)
        return [t, nc];
      var s = Ft({}, t, {
        fallback: null
      }), i = [], c = t.fallback, l = c.idx, u = c.val, d = n.val;
      if (u === "" && d === "")
        i.push({
          type: "handle-delete",
          idx: l
        }, {
          type: "handle-code-change"
        });
      else if (u === "" && d !== "")
        return Df(s, l, d);
      return [s, i];
    }
    case "handle-paste":
      return Df(t, n.idx, n.val);
    case "focus-input":
      return [Ft({}, t, {
        focusIdx: n.idx
      }), [{
        type: "focus-input",
        idx: n.idx
      }]];
    default:
      return [t, nc];
  }
};
function qN(e) {
  var t = e.refs, n = LN(e, WN);
  return pe(function(r) {
    switch (r.type) {
      case "focus-input": {
        t.current[r.idx].focus();
        break;
      }
      case "set-input-val": {
        var o = n.format(r.val);
        t.current[r.idx].value = o;
        break;
      }
      case "resolve-key": {
        t.current[r.idx].setCustomValidity(""), n.onResolveKey(r.key, t.current[r.idx]);
        break;
      }
      case "reject-key": {
        t.current[r.idx].setCustomValidity("Invalid key"), n.onRejectKey(r.key, t.current[r.idx]);
        break;
      }
      case "handle-delete": {
        var a = t.current[r.idx].value;
        if (t.current[r.idx].setCustomValidity(""), t.current[r.idx].value = "", !a) {
          var s = _g(r.idx);
          t.current[s].focus(), t.current[s].setCustomValidity(""), t.current[s].value = "";
        }
        break;
      }
      case "handle-code-change": {
        var i = (n.dir || document.documentElement.getAttribute("dir") || "ltr").toLowerCase(), c = t.current.map(function(u) {
          return u.value.trim();
        }), l = (i === "rtl" ? c.reverse() : c).join("");
        n.onChange(l), l.length === n.length && n.onComplete(l);
        break;
      }
    }
  }, [n, t]);
}
var XN = /* @__PURE__ */ M(function(e, t) {
  var n = Ft({}, YN, e), r = n.autoFocus, o = n.length, a = UN([].concat(BN, zN), n), s = I([]), i = qN(Ft({
    refs: s
  }, n)), c = jN(ZN, i, KN(n))[1];
  Yg(t, function() {
    return s.current;
  }, [s]);
  function l(h) {
    return function() {
      c({
        type: "focus-input",
        idx: h
      });
    };
  }
  function u(h) {
    return function(g) {
      var y = VN.getKey(g.nativeEvent);
      !HN.includes(y) && !g.ctrlKey && !g.altKey && !g.metaKey && g.nativeEvent.target instanceof HTMLInputElement && (g.preventDefault(), c({
        type: "handle-key-down",
        idx: h,
        key: y,
        val: g.nativeEvent.target.value
      }));
    };
  }
  function d(h) {
    return function(g) {
      g.nativeEvent.target instanceof HTMLInputElement && c({
        type: "handle-key-up",
        idx: h,
        val: g.nativeEvent.target.value
      });
    };
  }
  function f(h) {
    return function(g) {
      g.preventDefault();
      var y = g.clipboardData.getData("Text");
      c({
        type: "handle-paste",
        idx: h,
        val: y
      });
    };
  }
  function m(h) {
    return function(g) {
      g && (s.current[h] = g);
    };
  }
  function v(h) {
    return Boolean(h === 0 && r);
  }
  return N.createElement(N.Fragment, null, wg(0, o).map(function(h) {
    return N.createElement("input", Object.assign({
      type: "text",
      autoCapitalize: "off",
      autoCorrect: "off",
      autoComplete: "off",
      inputMode: "text"
    }, a, {
      key: h,
      ref: m(h),
      autoFocus: v(h),
      onFocus: l(h),
      onKeyDown: u(h),
      onKeyUp: d(h),
      onPaste: f(h)
    }));
  }));
});
const ek = ({ onComplete: e, mode: t, length: n, disabled: r, tabIndex: o, autoFocus: a, containerClassName: s, className: i, ...c }) => {
  const [l] = N.useState(!1);
  return /* @__PURE__ */ p.exports.jsx("div", { className: A("pin-field-container", s), children: /* @__PURE__ */ p.exports.jsx(
    XN,
    {
      className: A("pin-field", { complete: l }, i),
      onComplete: e,
      validate: t === "numeric" ? "0123456789" : "abcABC123",
      disabled: r,
      length: n,
      ...c
    }
  ) });
};
var Cg = {}, Nu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getListFiles = e.getImage = e.getBase64 = e.getAcceptTypeString = e.openFileDialog = void 0, e.openFileDialog = function(t) {
    t.current && t.current.click();
  }, e.getAcceptTypeString = function(t, n) {
    return t != null && t.length ? t.map(function(r) {
      return "." + r;
    }).join(", ") : n ? "" : "image/*";
  }, e.getBase64 = function(t) {
    var n = new FileReader();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(String(n.result));
      }), n.readAsDataURL(t);
    });
  }, e.getImage = function(t) {
    var n = new Image();
    return new Promise(function(r) {
      n.addEventListener("load", function() {
        return r(n);
      }), n.src = URL.createObjectURL(t);
    });
  }, e.getListFiles = function(t, n) {
    for (var r = [], o = 0; o < t.length; o += 1)
      r.push(e.getBase64(t[o]));
    return Promise.all(r).then(function(a) {
      var s = a.map(function(i, c) {
        var l;
        return l = {}, l[n] = i, l.file = t[c], l;
      });
      return s;
    });
  };
})(Nu);
var Eg = {}, hn = {};
Object.defineProperty(hn, "__esModule", { value: !0 });
hn.DEFAULT_DATA_URL_KEY = hn.INIT_MAX_NUMBER = hn.DEFAULT_NULL_INDEX = void 0;
hn.DEFAULT_NULL_INDEX = -1;
hn.INIT_MAX_NUMBER = 1e3;
hn.DEFAULT_DATA_URL_KEY = "dataURL";
(function(e) {
  var t = it && it.__awaiter || function(a, s, i, c) {
    function l(u) {
      return u instanceof i ? u : new i(function(d) {
        d(u);
      });
    }
    return new (i || (i = Promise))(function(u, d) {
      function f(h) {
        try {
          v(c.next(h));
        } catch (g) {
          d(g);
        }
      }
      function m(h) {
        try {
          v(c.throw(h));
        } catch (g) {
          d(g);
        }
      }
      function v(h) {
        h.done ? u(h.value) : l(h.value).then(f, m);
      }
      v((c = c.apply(a, s || [])).next());
    });
  }, n = it && it.__generator || function(a, s) {
    var i = { label: 0, sent: function() {
      if (u[0] & 1)
        throw u[1];
      return u[1];
    }, trys: [], ops: [] }, c, l, u, d;
    return d = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
      return this;
    }), d;
    function f(v) {
      return function(h) {
        return m([v, h]);
      };
    }
    function m(v) {
      if (c)
        throw new TypeError("Generator is already executing.");
      for (; i; )
        try {
          if (c = 1, l && (u = v[0] & 2 ? l.return : v[0] ? l.throw || ((u = l.return) && u.call(l), 0) : l.next) && !(u = u.call(l, v[1])).done)
            return u;
          switch (l = 0, u && (v = [v[0] & 2, u.value]), v[0]) {
            case 0:
            case 1:
              u = v;
              break;
            case 4:
              return i.label++, { value: v[1], done: !1 };
            case 5:
              i.label++, l = v[1], v = [0];
              continue;
            case 7:
              v = i.ops.pop(), i.trys.pop();
              continue;
            default:
              if (u = i.trys, !(u = u.length > 0 && u[u.length - 1]) && (v[0] === 6 || v[0] === 2)) {
                i = 0;
                continue;
              }
              if (v[0] === 3 && (!u || v[1] > u[0] && v[1] < u[3])) {
                i.label = v[1];
                break;
              }
              if (v[0] === 6 && i.label < u[1]) {
                i.label = u[1], u = v;
                break;
              }
              if (u && i.label < u[2]) {
                i.label = u[2], i.ops.push(v);
                break;
              }
              u[2] && i.ops.pop(), i.trys.pop();
              continue;
          }
          v = s.call(a, i);
        } catch (h) {
          v = [6, h], l = 0;
        } finally {
          c = u = 0;
        }
      if (v[0] & 5)
        throw v[1];
      return { value: v[0] ? v[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.getErrorValidation = e.isMaxNumberValid = e.isAcceptTypeValid = e.isMaxFileSizeValid = e.isImageValid = e.isResolutionValid = void 0;
  var r = hn, o = Nu;
  e.isResolutionValid = function(a, s, i, c) {
    if (i === void 0 && (i = 0), c === void 0 && (c = 1), !i || !c || !a.width || !a.height)
      return !0;
    switch (s) {
      case "absolute": {
        if (a.width === i && a.height === c)
          return !0;
        break;
      }
      case "ratio": {
        var l = i / c;
        if (a.width / a.height === l)
          return !0;
        break;
      }
      case "less": {
        if (a.width <= i && a.height <= c)
          return !0;
        break;
      }
      case "more": {
        if (a.width >= i && a.height >= c)
          return !0;
        break;
      }
    }
    return !1;
  }, e.isImageValid = function(a) {
    return !!a.includes("image");
  }, e.isMaxFileSizeValid = function(a, s) {
    return s ? a <= s : !0;
  }, e.isAcceptTypeValid = function(a, s) {
    if (a && a.length > 0) {
      var i = s.split(".").pop() || "";
      if (a.findIndex(function(c) {
        return c.toLowerCase() === i.toLowerCase();
      }) < 0)
        return !1;
    }
    return !0;
  }, e.isMaxNumberValid = function(a, s, i) {
    if (s !== 0 && !s)
      return !0;
    if (i === r.DEFAULT_NULL_INDEX) {
      if (a <= s)
        return !0;
    } else if (a <= s + 1)
      return !0;
    return !1;
  }, e.getErrorValidation = function(a) {
    var s = a.fileList, i = a.value, c = a.maxNumber, l = a.keyUpdate, u = a.acceptType, d = a.maxFileSize, f = a.resolutionType, m = a.resolutionWidth, v = a.resolutionHeight, h = a.allowNonImageType;
    return t(void 0, void 0, void 0, function() {
      var g, y, b, $, _;
      return n(this, function(w) {
        switch (w.label) {
          case 0:
            return g = {}, e.isMaxNumberValid(s.length + i.length, c, l) ? [3, 1] : (g.maxNumber = !0, [3, 5]);
          case 1:
            y = 0, w.label = 2;
          case 2:
            return y < s.length ? (b = s[y].file, b ? !h && !e.isImageValid(b.type) ? (g.acceptType = !0, [3, 5]) : e.isAcceptTypeValid(u, b.name) ? e.isMaxFileSizeValid(b.size, d) ? f ? [4, o.getImage(b)] : [3, 4] : (g.maxFileSize = !0, [3, 5]) : (g.acceptType = !0, [3, 5]) : [3, 4]) : [3, 5];
          case 3:
            if ($ = w.sent(), _ = e.isResolutionValid($, f, m, v), !_)
              return g.resolution = !0, [3, 5];
            w.label = 4;
          case 4:
            return y += 1, [3, 2];
          case 5:
            return Object.values(g).find(Boolean) ? [2, g] : [2, null];
        }
      });
    });
  };
})(Eg);
var Zc = it && it.__assign || function() {
  return Zc = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Zc.apply(this, arguments);
}, JN = it && it.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n), Object.defineProperty(e, r, { enumerable: !0, get: function() {
    return t[n];
  } });
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), QN = it && it.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), eT = it && it.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && JN(t, e, n);
  return QN(t, e), t;
}, rc = it && it.__awaiter || function(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(u) {
      try {
        l(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, oc = it && it.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; n; )
      try {
        if (r = 1, o && (a = l[0] & 2 ? o.return : l[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, l[1])).done)
          return a;
        switch (o = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
          case 0:
          case 1:
            a = l;
            break;
          case 4:
            return n.label++, { value: l[1], done: !1 };
          case 5:
            n.label++, o = l[1], l = [0];
            continue;
          case 7:
            l = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              n = 0;
              continue;
            }
            if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
              n.label = l[1];
              break;
            }
            if (l[0] === 6 && n.label < a[1]) {
              n.label = a[1], a = l;
              break;
            }
            if (a && n.label < a[2]) {
              n.label = a[2], n.ops.push(l);
              break;
            }
            a[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        l = t.call(e, n);
      } catch (u) {
        l = [6, u], o = 0;
      } finally {
        r = a = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, ac = it && it.__spreadArrays || function() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), o = 0, t = 0; t < n; t++)
    for (var a = arguments[t], s = 0, i = a.length; s < i; s++, o++)
      r[o] = a[s];
  return r;
};
Object.defineProperty(Cg, "__esModule", { value: !0 });
var Lt = eT(N), sc = Nu, tT = Eg, Sn = hn, nT = function(e) {
  var t = e.value, n = t === void 0 ? [] : t, r = e.onChange, o = e.onError, a = e.children, s = e.dataURLKey, i = s === void 0 ? Sn.DEFAULT_DATA_URL_KEY : s, c = e.multiple, l = c === void 0 ? !1 : c, u = e.maxNumber, d = u === void 0 ? Sn.INIT_MAX_NUMBER : u, f = e.acceptType, m = e.maxFileSize, v = e.resolutionWidth, h = e.resolutionHeight, g = e.resolutionType, y = e.inputProps, b = y === void 0 ? {} : y, $ = e.allowNonImageType, _ = $ === void 0 ? !1 : $, w = n || [], T = Lt.useRef(null), k = Lt.useState(Sn.DEFAULT_NULL_INDEX), j = k[0], R = k[1], ee = Lt.useState(null), re = ee[0], U = ee[1], B = Lt.useState(!1), W = B[0], G = B[1], J = Lt.useCallback(function() {
    return sc.openFileDialog(T);
  }, [
    T
  ]), Y = Lt.useCallback(function() {
    R(Sn.DEFAULT_NULL_INDEX), J();
  }, [J]), Z = Lt.useCallback(function() {
    r == null || r([]);
  }, [r]), D = function(q) {
    var he = ac(w);
    Array.isArray(q) ? q.forEach(function(K) {
      he.splice(K, 1);
    }) : he.splice(q, 1), r == null || r(he);
  }, O = function(q) {
    R(q), J();
  }, L = function(q) {
    return rc(void 0, void 0, void 0, function() {
      var he;
      return oc(this, function(K) {
        switch (K.label) {
          case 0:
            return [4, tT.getErrorValidation({
              fileList: q,
              maxFileSize: m,
              maxNumber: d,
              acceptType: f,
              keyUpdate: j,
              resolutionType: g,
              resolutionWidth: v,
              resolutionHeight: h,
              value: w,
              allowNonImageType: _
            })];
          case 1:
            return he = K.sent(), he ? (U(he), o == null || o(he, q), [2, !1]) : (re && U(null), [2, !0]);
        }
      });
    });
  }, z = function(q) {
    return rc(void 0, void 0, void 0, function() {
      var he, K, Re, Ve, lt, P;
      return oc(this, function(F) {
        switch (F.label) {
          case 0:
            return q ? [4, sc.getListFiles(q, i)] : [
              2
              /*return*/
            ];
          case 1:
            return he = F.sent(), he.length ? [4, L(he)] : [
              2
              /*return*/
            ];
          case 2:
            if (K = F.sent(), !K)
              return [
                2
                /*return*/
              ];
            if (Ve = [], j > Sn.DEFAULT_NULL_INDEX)
              lt = he[0], Re = ac(w), Re[j] = lt, Ve.push(j);
            else if (l)
              for (Re = ac(w, he), P = w.length; P < Re.length; P += 1)
                Ve.push(P);
            else
              Re = [he[0]], Ve.push(0);
            return r == null || r(Re, Ve), [
              2
              /*return*/
            ];
        }
      });
    });
  }, oe = function(q) {
    return rc(void 0, void 0, void 0, function() {
      return oc(this, function(he) {
        switch (he.label) {
          case 0:
            return [4, z(q.target.files)];
          case 1:
            return he.sent(), j > Sn.DEFAULT_NULL_INDEX && R(Sn.DEFAULT_NULL_INDEX), T.current && (T.current.value = ""), [
              2
              /*return*/
            ];
        }
      });
    });
  }, ce = Lt.useMemo(function() {
    return sc.getAcceptTypeString(f, _);
  }, [f, _]), ye = function(q) {
    q.preventDefault(), q.stopPropagation();
  }, be = function(q) {
    q.preventDefault(), q.stopPropagation(), q.dataTransfer.items && q.dataTransfer.items.length > 0 && G(!0);
  }, te = function(q) {
    q.preventDefault(), q.stopPropagation(), G(!1);
  }, le = function(q) {
    q.preventDefault(), q.stopPropagation(), G(!1), q.dataTransfer.files && q.dataTransfer.files.length > 0 && z(q.dataTransfer.files);
  }, ve = function(q) {
    q.preventDefault(), q.stopPropagation(), q.dataTransfer.clearData();
  };
  return Lt.default.createElement(
    Lt.default.Fragment,
    null,
    Lt.default.createElement("input", Zc({ type: "file", accept: ce, ref: T, multiple: l && j === Sn.DEFAULT_NULL_INDEX, onChange: oe, style: { display: "none" } }, b)),
    a == null ? void 0 : a({
      imageList: w,
      onImageUpload: Y,
      onImageRemoveAll: Z,
      onImageUpdate: O,
      onImageRemove: D,
      errors: re,
      dragProps: {
        onDrop: le,
        onDragEnter: be,
        onDragLeave: te,
        onDragOver: ye,
        onDragStart: ve
      },
      isDragging: W
    })
  );
}, Sg = Cg.default = nT;
const rT = (e, t) => {
  const n = e.split(","), r = n[0].match(/:(.*?);/);
  if (!r)
    throw new Error("Invalid data URI");
  const o = r[1], a = atob(n[1]), s = new ArrayBuffer(a.length), i = new Uint8Array(s);
  for (let c = 0; c < a.length; c++)
    i[c] = a.charCodeAt(c);
  return new File([s], t, { type: o });
}, Ng = ({
  resizer: e,
  imageFile: t,
  maxWidth: n = 1080,
  // Nueva resolución horizontal
  maxHeight: r = 720,
  // Nueva resolución vertical
  compressFormat: o = "png",
  // Formato de salida (JPEG, PNG, WEBP)
  quality: a = 80,
  // Calidad de compresión (0-100)
  rotation: s = 0,
  // Rotación en grados (0, 90, 180, 270)
  outputType: i = "base64"
}) => new Promise((c) => {
  e == null || e.imageFileResizer(
    t,
    n,
    r,
    o,
    a,
    s,
    async (l) => {
      const u = rT(l == null ? void 0 : l.toString(), t.name);
      c({ data_url: l, file: u });
    },
    i
  );
}), oT = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ p.exports.jsxs(Br, { className: A("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ p.exports.jsx(zr, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ p.exports.jsx(Hr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ p.exports.jsx(Ds, {}) })
] });
function aT() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-unzoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z" })
  );
}
function sT() {
  return N.createElement(
    "svg",
    { "aria-hidden": "true", "data-rmiz-btn-zoom-icon": !0, fill: "currentColor", focusable: "false", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" },
    N.createElement("path", { d: "M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z" })
  );
}
const Ns = (e, t) => {
  var n, r;
  return e === ((r = (n = t == null ? void 0 : t.tagName) == null ? void 0 : n.toUpperCase) == null ? void 0 : r.call(n));
}, Tu = (e) => Ns("DIV", e) || Ns("SPAN", e), Ts = (e) => Ns("IMG", e), Rf = (e) => e.complete && e.naturalHeight !== 0, qc = (e) => Ns("SVG", e), Tg = ({ height: e, offset: t, width: n }) => Math.min((window.innerWidth - t * 2) / n, (window.innerHeight - t * 2) / e), iT = ({ containerHeight: e, containerWidth: t, offset: n, targetHeight: r, targetWidth: o }) => {
  const a = Tg({
    height: r,
    offset: n,
    width: o
  }), s = o > r ? o / t : r / e;
  return a > 1 ? s : a * s;
}, Xn = ({ containerHeight: e, containerWidth: t, hasScalableSrc: n, offset: r, targetHeight: o, targetWidth: a }) => !e || !t ? 1 : !n && o && a ? iT({
  containerHeight: e,
  containerWidth: t,
  offset: r,
  targetHeight: o,
  targetWidth: a
}) : Tg({
  height: e,
  offset: r,
  width: t
}), cT = /url(?:\(['"]?)(.*?)(?:['"]?\))/, Af = (e) => {
  var t;
  if (e) {
    if (Ts(e))
      return e.currentSrc;
    if (Tu(e)) {
      const n = window.getComputedStyle(e).backgroundImage;
      if (n)
        return (t = cT.exec(n)) == null ? void 0 : t[1];
    }
  }
}, lT = (e) => {
  if (e)
    return Ts(e) ? e.alt ?? void 0 : e.getAttribute("aria-label") ?? void 0;
}, uT = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, offset: a, targetHeight: s, targetWidth: i }) => {
  const c = Xn({
    containerHeight: e,
    containerWidth: r,
    hasScalableSrc: o,
    offset: a,
    targetHeight: s,
    targetWidth: i
  });
  return {
    top: n,
    left: t,
    width: r * c,
    height: e * c,
    transform: `translate(0,0) scale(${1 / c})`
  };
}, Dt = ({ position: e, relativeNum: t }) => {
  const n = parseFloat(e);
  return e.endsWith("%") ? t * n / 100 : n;
}, dT = ({ containerHeight: e, containerLeft: t, containerTop: n, containerWidth: r, hasScalableSrc: o, objectFit: a, objectPosition: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (a === "scale-down" && (l <= r && c <= e ? a = "none" : a = "contain"), a === "cover" || a === "contain") {
    const u = r / l, d = e / c, f = a === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", v = "50%"] = s.split(" "), h = Dt({ position: m, relativeNum: r - l * f }), g = Dt({ position: v, relativeNum: e - c * f }), y = Xn({
      containerHeight: c * f,
      containerWidth: l * f,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + g,
      left: t + h,
      width: l * f * y,
      height: c * f * y,
      transform: `translate(0,0) scale(${1 / y})`
    };
  } else if (a === "none") {
    const [u = "50%", d = "50%"] = s.split(" "), f = Dt({ position: u, relativeNum: r - l }), m = Dt({ position: d, relativeNum: e - c }), v = Xn({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: n + m,
      left: t + f,
      width: l * v,
      height: c * v,
      transform: `translate(0,0) scale(${1 / v})`
    };
  } else if (a === "fill") {
    const u = r / l, d = e / c, f = Math.max(u, d), m = Xn({
      containerHeight: c * f,
      containerWidth: l * f,
      hasScalableSrc: o,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      width: r * m,
      height: e * m,
      transform: `translate(0,0) scale(${1 / m})`
    };
  } else
    return {};
}, fT = ({ backgroundPosition: e, backgroundSize: t, containerHeight: n, containerLeft: r, containerTop: o, containerWidth: a, hasScalableSrc: s, offset: i, targetHeight: c, targetWidth: l }) => {
  if (t === "cover" || t === "contain") {
    const u = a / l, d = n / c, f = t === "cover" ? Math.max(u, d) : Math.min(u, d), [m = "50%", v = "50%"] = e.split(" "), h = Dt({ position: m, relativeNum: a - l * f }), g = Dt({ position: v, relativeNum: n - c * f }), y = Xn({
      containerHeight: c * f,
      containerWidth: l * f,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + g,
      left: r + h,
      width: l * f * y,
      height: c * f * y,
      transform: `translate(0,0) scale(${1 / y})`
    };
  } else if (t === "auto") {
    const [u = "50%", d = "50%"] = e.split(" "), f = Dt({ position: u, relativeNum: a - l }), m = Dt({ position: d, relativeNum: n - c }), v = Xn({
      containerHeight: c,
      containerWidth: l,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + m,
      left: r + f,
      width: l * v,
      height: c * v,
      transform: `translate(0,0) scale(${1 / v})`
    };
  } else {
    const [u = "50%", d = "50%"] = t.split(" "), f = Dt({ position: u, relativeNum: a }), m = Dt({ position: d, relativeNum: n }), v = f / l, h = m / c, g = Math.min(v, h), [y = "50%", b = "50%"] = e.split(" "), $ = Dt({ position: y, relativeNum: a - l * g }), _ = Dt({ position: b, relativeNum: n - c * g }), w = Xn({
      containerHeight: c * g,
      containerWidth: l * g,
      hasScalableSrc: s,
      offset: i,
      targetHeight: c,
      targetWidth: l
    });
    return {
      top: o + _,
      left: r + $,
      width: l * g * w,
      height: c * g * w,
      transform: `translate(0,0) scale(${1 / w})`
    };
  }
}, pT = /\.svg$/i, mT = ({ hasZoomImg: e, imgSrc: t, isSvg: n, isZoomed: r, loadedImgEl: o, offset: a, shouldRefresh: s, targetEl: i }) => {
  var y;
  const c = n || ((y = t == null ? void 0 : t.slice) == null ? void 0 : y.call(t, 0, 18)) === "data:image/svg+xml" || e || !!(t && pT.test(t)), l = i.getBoundingClientRect(), u = window.getComputedStyle(i), d = o != null && Tu(i), f = o != null && !d, m = uT({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: (o == null ? void 0 : o.naturalHeight) ?? l.height,
    targetWidth: (o == null ? void 0 : o.naturalWidth) ?? l.width
  }), v = f ? dT({
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    objectFit: u.objectFit,
    objectPosition: u.objectPosition,
    offset: a,
    targetHeight: o.naturalHeight,
    targetWidth: o.naturalWidth
  }) : void 0, h = d ? fT({
    backgroundPosition: u.backgroundPosition,
    backgroundSize: u.backgroundSize,
    containerHeight: l.height,
    containerLeft: l.left,
    containerTop: l.top,
    containerWidth: l.width,
    hasScalableSrc: c,
    offset: a,
    targetHeight: o.naturalHeight,
    targetWidth: o.naturalWidth
  }) : void 0, g = Object.assign({}, m, v, h);
  if (r) {
    const b = window.innerWidth / 2, $ = window.innerHeight / 2, _ = parseFloat(String(g.left || 0)) + parseFloat(String(g.width || 0)) / 2, w = parseFloat(String(g.top || 0)) + parseFloat(String(g.height || 0)) / 2, T = b - _, k = $ - w;
    s && (g.transitionDuration = "0.01ms"), g.transform = `translate(${T}px,${k}px) scale(1)`;
  }
  return g;
}, vT = (e) => {
  if (!e)
    return {};
  if (qc(e)) {
    const t = e.parentElement, n = e.getBoundingClientRect();
    if (t) {
      const r = t.getBoundingClientRect();
      return {
        height: n.height,
        left: r.left - n.left,
        top: r.top - n.top,
        width: n.width
      };
    } else
      return {
        height: n.height,
        left: n.left,
        width: n.width,
        top: n.top
      };
  } else
    return {
      height: e.offsetHeight,
      left: e.offsetLeft,
      width: e.offsetWidth,
      top: e.offsetTop
    };
};
let go;
typeof document < "u" && (go = document.createElement("div"), go.setAttribute("data-rmiz-portal", ""), document.body.appendChild(go));
const hT = ["img", "svg", '[role="img"]', "[data-zoom]"].map((e) => `${e}:not([aria-hidden="true"])`).join(","), If = {
  overflow: "",
  width: ""
};
function gT(e) {
  return N.createElement(Pg, { ...e });
}
class Pg extends Kg {
  constructor() {
    super(...arguments), this.state = {
      id: "",
      isZoomImgLoaded: !1,
      loadedImgEl: void 0,
      modalState: "UNLOADED",
      shouldRefresh: !1
    }, this.refContent = no(), this.refDialog = no(), this.refModalContent = no(), this.refModalImg = no(), this.refWrap = no(), this.imgEl = null, this.prevBodyAttrs = If, this.styleModalImg = {}, this.setId = () => {
      const t = () => Math.random().toString(16).slice(-4);
      this.setState({ id: t() + t() + t() });
    }, this.setAndTrackImg = () => {
      var n, r, o, a, s, i;
      const t = this.refContent.current;
      t && (this.imgEl = t.querySelector(hT), this.imgEl ? ((r = (n = this.changeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), (a = (o = this.imgEl) == null ? void 0 : o.addEventListener) == null || a.call(o, "load", this.handleImgLoad), (i = (s = this.imgEl) == null ? void 0 : s.addEventListener) == null || i.call(s, "click", this.handleZoom), this.state.loadedImgEl || this.handleImgLoad(), this.imgElObserver = new ResizeObserver((c) => {
        const l = c[0];
        l != null && l.target && (this.imgEl = l.target, this.setState({}));
      }), this.imgElObserver.observe(this.imgEl)) : this.changeObserver || (this.changeObserver = new MutationObserver(this.setAndTrackImg), this.changeObserver.observe(t, { childList: !0, subtree: !0 })));
    }, this.handleIfZoomChanged = (t) => {
      const { isZoomed: n } = this.props;
      !t && n ? this.zoom() : t && !n && this.unzoom();
    }, this.handleImgLoad = () => {
      const { imgEl: t } = this, n = Af(t);
      if (!n)
        return;
      const r = new Image();
      Ts(t) && (r.sizes = t.sizes, r.srcset = t.srcset), r.src = n;
      const o = () => {
        this.setState({ loadedImgEl: r });
      };
      r.decode().then(o).catch(() => {
        if (Rf(r)) {
          o();
          return;
        }
        r.onload = o;
      });
    }, this.handleZoom = () => {
      var t, n;
      (n = (t = this.props).onZoomChange) == null || n.call(t, !0);
    }, this.handleUnzoom = () => {
      var t, n;
      (n = (t = this.props).onZoomChange) == null || n.call(t, !1);
    }, this.handleDialogCancel = (t) => {
      t.preventDefault();
    }, this.handleDialogClick = (t) => {
      (t.target === this.refModalContent.current || t.target === this.refModalImg.current) && this.handleUnzoom();
    }, this.handleKeyDown = (t) => {
      (t.key === "Escape" || t.keyCode === 27) && (t.preventDefault(), t.stopPropagation(), this.handleUnzoom());
    }, this.handleWheel = (t) => {
      t.ctrlKey || (t.stopPropagation(), queueMicrotask(() => {
        this.handleUnzoom();
      }));
    }, this.handleTouchStart = (t) => {
      t.changedTouches.length === 1 && t.changedTouches[0] && (this.touchYStart = t.changedTouches[0].screenY);
    }, this.handleTouchMove = (t) => {
      if (this.touchYStart != null && t.changedTouches[0]) {
        this.touchYEnd = t.changedTouches[0].screenY;
        const n = Math.max(this.touchYStart, this.touchYEnd), r = Math.min(this.touchYStart, this.touchYEnd);
        Math.abs(n - r) > 10 && (this.touchYStart = void 0, this.touchYEnd = void 0, this.handleUnzoom());
      }
    }, this.handleTouchCancel = () => {
      this.touchYStart = void 0, this.touchYEnd = void 0;
    }, this.handleResize = () => {
      this.setState({ shouldRefresh: !0 });
    }, this.zoom = () => {
      var t, n, r, o;
      this.bodyScrollDisable(), (n = (t = this.refDialog.current) == null ? void 0 : t.showModal) == null || n.call(t), this.setState({ modalState: "LOADING" }), this.loadZoomImg(), window.addEventListener("wheel", this.handleWheel, { passive: !0 }), window.addEventListener("touchstart", this.handleTouchStart, { passive: !0 }), window.addEventListener("touchmove", this.handleTouchMove, { passive: !0 }), window.addEventListener("touchcancel", this.handleTouchCancel, { passive: !0 }), document.addEventListener("keydown", this.handleKeyDown, !0), (o = (r = this.refModalImg.current) == null ? void 0 : r.addEventListener) == null || o.call(r, "transitionend", this.handleZoomEnd, { once: !0 });
    }, this.handleZoomEnd = () => {
      setTimeout(() => {
        this.setState({ modalState: "LOADED" }), window.addEventListener("resize", this.handleResize, { passive: !0 });
      }, 0);
    }, this.unzoom = () => {
      var t, n;
      this.setState({ modalState: "UNLOADING" }), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), document.removeEventListener("keydown", this.handleKeyDown, !0), (n = (t = this.refModalImg.current) == null ? void 0 : t.addEventListener) == null || n.call(t, "transitionend", this.handleUnzoomEnd, { once: !0 });
    }, this.handleUnzoomEnd = () => {
      setTimeout(() => {
        var t, n;
        window.removeEventListener("resize", this.handleResize), this.setState({
          shouldRefresh: !1,
          modalState: "UNLOADED"
        }), (n = (t = this.refDialog.current) == null ? void 0 : t.close) == null || n.call(t), this.bodyScrollEnable();
      }, 0);
    }, this.bodyScrollDisable = () => {
      this.prevBodyAttrs = {
        overflow: document.body.style.overflow,
        width: document.body.style.width
      };
      const t = document.body.clientWidth;
      document.body.style.overflow = "hidden", document.body.style.width = `${t}px`;
    }, this.bodyScrollEnable = () => {
      document.body.style.width = this.prevBodyAttrs.width, document.body.style.overflow = this.prevBodyAttrs.overflow, this.prevBodyAttrs = If;
    }, this.loadZoomImg = () => {
      const { props: { zoomImg: t } } = this, n = t == null ? void 0 : t.src;
      if (n) {
        const r = new Image();
        r.sizes = (t == null ? void 0 : t.sizes) ?? "", r.srcset = (t == null ? void 0 : t.srcSet) ?? "", r.src = n;
        const o = () => {
          this.setState({ isZoomImgLoaded: !0 });
        };
        r.decode().then(o).catch(() => {
          if (Rf(r)) {
            o();
            return;
          }
          r.onload = o;
        });
      }
    }, this.UNSAFE_handleSvg = () => {
      var o, a, s, i, c;
      const { imgEl: t, refModalImg: n, styleModalImg: r } = this;
      if (qc(t)) {
        const l = document.createElement("div");
        l.innerHTML = t.outerHTML;
        const u = l.firstChild;
        u.style.width = `${r.width || 0}px`, u.style.height = `${r.height || 0}px`, u.addEventListener("click", this.handleUnzoom), (s = (a = (o = n.current) == null ? void 0 : o.firstChild) == null ? void 0 : a.remove) == null || s.call(a), (c = (i = n.current) == null ? void 0 : i.appendChild) == null || c.call(i, u);
      }
    };
  }
  render() {
    const { handleDialogCancel: t, handleDialogClick: n, handleUnzoom: r, handleZoom: o, imgEl: a, props: { a11yNameButtonUnzoom: s, a11yNameButtonZoom: i, children: c, classDialog: l, IconUnzoom: u, IconZoom: d, isZoomed: f, wrapElement: m, ZoomContent: v, zoomImg: h, zoomMargin: g }, refContent: y, refDialog: b, refModalContent: $, refModalImg: _, refWrap: w, state: { id: T, isZoomImgLoaded: k, loadedImgEl: j, modalState: R, shouldRefresh: ee } } = this, re = `rmiz-modal-${T}`, U = `rmiz-modal-img-${T}`, B = Tu(a), W = Ts(a), G = qc(a), J = lT(a), Y = Af(a), Z = W ? a.sizes : void 0, D = W ? a.srcset : void 0, O = !!(h != null && h.src), L = a && (j || G) && window.getComputedStyle(a).display !== "none", z = J ? `${i}: ${J}` : i, oe = R === "LOADING" || R === "LOADED", ce = L ? "found" : "not-found", ye = R === "UNLOADED" || R === "UNLOADING" ? "hidden" : "visible", be = {
      visibility: R === "UNLOADED" ? "visible" : "hidden"
    }, te = vT(a);
    this.styleModalImg = L ? mT({
      hasZoomImg: O,
      imgSrc: Y,
      isSvg: G,
      isZoomed: f && oe,
      loadedImgEl: j,
      offset: g,
      shouldRefresh: ee,
      targetEl: a
    }) : {};
    let le = null;
    if (L) {
      const ve = W || B ? N.createElement("img", { alt: J, sizes: Z, src: Y, srcSet: D, ...k && R === "LOADED" ? h : {}, "data-rmiz-modal-img": "", height: this.styleModalImg.height || void 0, id: U, ref: _, style: this.styleModalImg, width: this.styleModalImg.width || void 0 }) : G ? N.createElement("div", { "data-rmiz-modal-img": !0, ref: _, style: this.styleModalImg }) : null, q = N.createElement(
        "button",
        { "aria-label": s, "data-rmiz-btn-unzoom": "", onClick: r, type: "button" },
        N.createElement(u, null)
      );
      le = v ? N.createElement(v, { buttonUnzoom: q, modalState: R, img: ve, onUnzoom: r }) : N.createElement(
        N.Fragment,
        null,
        ve,
        q
      );
    }
    return N.createElement(
      m,
      { "aria-owns": re, "data-rmiz": "", ref: w },
      N.createElement(m, { "data-rmiz-content": ce, ref: y, style: be }, c),
      L && N.createElement(
        m,
        { "data-rmiz-ghost": "", style: te },
        N.createElement(
          "button",
          { "aria-label": z, "data-rmiz-btn-zoom": "", onClick: o, type: "button" },
          N.createElement(d, null)
        )
      ),
      L && go != null && Jc(N.createElement(
        "dialog",
        { "aria-labelledby": U, "aria-modal": "true", className: l, "data-rmiz-modal": "", id: re, onClick: n, onClose: r, onCancel: t, ref: b, role: "dialog" },
        N.createElement("div", { "data-rmiz-modal-overlay": ye }),
        N.createElement("div", { "data-rmiz-modal-content": "", ref: $ }, le)
      ), go)
    );
  }
  componentDidMount() {
    this.setId(), this.setAndTrackImg(), this.handleImgLoad(), this.UNSAFE_handleSvg();
  }
  componentWillUnmount() {
    var t, n, r, o, a, s, i, c, l, u, d, f;
    this.state.modalState !== "UNLOADED" && this.bodyScrollEnable(), (n = (t = this.changeObserver) == null ? void 0 : t.disconnect) == null || n.call(t), (o = (r = this.imgElObserver) == null ? void 0 : r.disconnect) == null || o.call(r), (s = (a = this.imgEl) == null ? void 0 : a.removeEventListener) == null || s.call(a, "load", this.handleImgLoad), (c = (i = this.imgEl) == null ? void 0 : i.removeEventListener) == null || c.call(i, "click", this.handleZoom), (u = (l = this.refModalImg.current) == null ? void 0 : l.removeEventListener) == null || u.call(l, "transitionend", this.handleZoomEnd), (f = (d = this.refModalImg.current) == null ? void 0 : d.removeEventListener) == null || f.call(d, "transitionend", this.handleUnzoomEnd), window.removeEventListener("wheel", this.handleWheel), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchcancel", this.handleTouchCancel), window.removeEventListener("resize", this.handleResize), document.removeEventListener("keydown", this.handleKeyDown, !0);
  }
  componentDidUpdate(t) {
    this.UNSAFE_handleSvg(), this.handleIfZoomChanged(t.isZoomed);
  }
}
Pg.defaultProps = {
  a11yNameButtonUnzoom: "Minimize image",
  a11yNameButtonZoom: "Expand image",
  IconUnzoom: aT,
  IconZoom: sT,
  wrapElement: "div",
  zoomMargin: 0
};
function kg(e) {
  const [t, n] = X(!1);
  return N.createElement(gT, { ...e, isZoomed: t, onZoomChange: n });
}
const bT = ({ src: e, imageContainerClassName: t }) => /* @__PURE__ */ p.exports.jsx(kg, { children: /* @__PURE__ */ p.exports.jsxs(Br, { className: A("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ p.exports.jsx(zr, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ p.exports.jsx(Hr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ p.exports.jsx(Ds, {}) })
] }) }), xT = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, setUploadImage: o, onImageRemove: a, setLocalImage: s }) => /* @__PURE__ */ p.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ p.exports.jsx(
    at,
    {
      tabIndex: n == null ? void 0 : n.viewCompress,
      className: "whitespace-nowrap",
      type: "button",
      onClick: () => t.openComparisons(),
      children: "Ver Compresión"
    }
  ),
  /* @__PURE__ */ p.exports.jsx(
    at,
    {
      tabIndex: n == null ? void 0 : n.change,
      className: "max-w-[116.33px] w-full",
      type: "button",
      onClick: () => r(e),
      children: "Cambiar"
    }
  ),
  /* @__PURE__ */ p.exports.jsx(
    at,
    {
      tabIndex: n == null ? void 0 : n.delete,
      className: "max-w-[116.33px] w-full",
      type: "button",
      onClick: () => {
        a(e), s([]), o({ original: null, compressed: null });
      },
      children: "Eliminar"
    }
  )
] }), yT = ({ dragProps: e, isDragging: t, emptyClassName: n, icons: r, tabIndexs: o, uploadLabel: a, onImageUpload: s }) => /* @__PURE__ */ p.exports.jsxs(
  "div",
  {
    ...e,
    className: A(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      (r == null ? void 0 : r.placeholder) || /* @__PURE__ */ p.exports.jsx(Eu, { className: "text-zinc-400 w-10 h-10" }),
      /* @__PURE__ */ p.exports.jsxs(at, { type: "button", tabIndex: o == null ? void 0 : o.upload, className: `mt-2 ${t && "text-indigo-600"}`, onClick: s, children: [
        r == null ? void 0 : r.uploadButton,
        a || "Cargar Imagen"
      ] }),
      /* @__PURE__ */ p.exports.jsx("span", { className: "font-semibold text-zinc-500", children: "o arrastra y suelta una imagen" })
    ]
  }
), tk = ({
  initialPreview: e = null,
  setUploadImage: t,
  format: n,
  label: r,
  uploadLabel: o,
  tabIndexs: a,
  emptyClassName: s,
  imageContainerClassName: i,
  icons: c,
  zoom: l,
  compress: u
}) => {
  const [d, f] = X(e ? [{ data_url: e, file: null }] : []), m = async (v, h) => {
    var $, _, w, T, k, j, R, ee, re;
    const g = ($ = v[0]) == null ? void 0 : $.file, y = (_ = v[0]) == null ? void 0 : _.data_url;
    if (!g) {
      f([{ data_url: "", file: null }]);
      return;
    }
    f([{ data_url: y, file: g }]);
    const b = Ka((w = v[0]) == null ? void 0 : w.file.size);
    if (u != null && u.resizer) {
      const { data_url: U, file: B } = await Ng({
        resizer: u == null ? void 0 : u.resizer,
        imageFile: g,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), W = Ka(B.size);
      t({
        original: {
          preview: (T = v[0]) == null ? void 0 : T.data_url,
          file: (k = v[0]) == null ? void 0 : k.file,
          size: {
            formated: b,
            bytes: (j = v[0]) == null ? void 0 : j.file.size
          }
        },
        compressed: {
          preview: U == null ? void 0 : U.toString(),
          file: B,
          size: {
            formated: W,
            bytes: B.size
          }
        }
      });
      return;
    }
    t({
      original: {
        preview: (R = v[0]) == null ? void 0 : R.data_url,
        file: (ee = v[0]) == null ? void 0 : ee.file,
        size: { formated: b, bytes: (re = v[0]) == null ? void 0 : re.file.size }
      },
      compressed: null
    });
  };
  return /* @__PURE__ */ p.exports.jsxs("div", { className: "w-full", children: [
    r && /* @__PURE__ */ p.exports.jsx(la, { children: r }),
    /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ p.exports.jsx(
      Sg,
      {
        value: d,
        onChange: m,
        dataURLKey: "data_url",
        acceptType: ["webp", "png", "jpg", "jpeg"],
        children: ({ imageList: v, onImageUpload: h, onImageUpdate: g, onImageRemove: y, isDragging: b, dragProps: $ }) => /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: v.length >= 1 ? /* @__PURE__ */ p.exports.jsx("div", { children: v.map((_, w) => /* @__PURE__ */ p.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
          l ? /* @__PURE__ */ p.exports.jsx(bT, { imageContainerClassName: i, src: _ == null ? void 0 : _.data_url }) : /* @__PURE__ */ p.exports.jsx(oT, { imageContainerClassName: i, previewUrl: _ == null ? void 0 : _.data_url }),
          /* @__PURE__ */ p.exports.jsx(
            xT,
            {
              imageIndex: w,
              setUploadImage: t,
              onImageRemove: y,
              onImageUpdate: g,
              compress: u,
              tabIndexs: a,
              setLocalImage: f
            }
          )
        ] }, w)) }) : /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: /* @__PURE__ */ p.exports.jsx(
          yT,
          {
            dragProps: $,
            emptyClassName: s,
            icons: c,
            isDragging: b,
            onImageUpload: h,
            tabIndexs: a,
            uploadLabel: o
          }
        ) }) })
      }
    )
  ] });
}, $T = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ p.exports.jsxs(Br, { className: A("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ p.exports.jsx(zr, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ p.exports.jsx(Hr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ p.exports.jsx(Ds, {}) })
] }), wT = ({ imageIndex: e, compress: t, tabIndexs: n, onImageUpdate: r, onImageRemove: o }) => /* @__PURE__ */ p.exports.jsxs("div", { className: "mt-2 gap-x-2 w-full flex flex-col justify-center items-end gap-y-2 absolute top-2 right-2", children: [
  (t == null ? void 0 : t.openComparisons) && /* @__PURE__ */ p.exports.jsx(
    at,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.viewCompress,
      onClick: () => t.openComparisons(),
      className: "whitespace-nowrap backdrop-blur-sm border-green-900 bg-green-900 bg-opacity-10 hover:bg-green-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ p.exports.jsx(fS, { size: 16 })
    }
  ),
  /* @__PURE__ */ p.exports.jsx(
    at,
    {
      size: "icon",
      type: "button",
      variant: "outline",
      tabIndex: n == null ? void 0 : n.change,
      onClick: () => r(e),
      className: "backdrop-blur-sm border-yellow-900 bg-yellow-900 bg-opacity-10 hover:bg-yellow-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ p.exports.jsx(Ib, { size: 14 })
    }
  ),
  /* @__PURE__ */ p.exports.jsx(
    at,
    {
      tabIndex: n == null ? void 0 : n.delete,
      type: "button",
      size: "icon",
      variant: "outline",
      onClick: () => o(e),
      className: "backdrop-blur-sm border-red-900 bg-red-900 bg-opacity-10 hover:bg-red-900 hover:bg-opacity-30",
      children: /* @__PURE__ */ p.exports.jsx(Lb, { size: 14 })
    }
  )
] }), _T = ({ previewUrl: e, imageContainerClassName: t }) => /* @__PURE__ */ p.exports.jsx(kg, { children: /* @__PURE__ */ p.exports.jsxs(Br, { className: A("w-full h-[237px] rounded-md", t), children: [
  /* @__PURE__ */ p.exports.jsx(zr, { src: e, className: "rounded-md object-contain m-auto h-full", style: { width: "-webkit-fill-available" } }),
  /* @__PURE__ */ p.exports.jsx(Hr, { className: "w-full h-full rounded-md", children: /* @__PURE__ */ p.exports.jsx(Ds, {}) })
] }) }), CT = ({ dragProps: e, isDragging: t, emptyClassName: n, icons: r, tabIndexs: o, uploadLabel: a, onImageUpload: s }) => /* @__PURE__ */ p.exports.jsxs(
  "div",
  {
    ...e,
    className: A(
      `${t ? "border-indigo-600" : "border-gray-300"}`,
      "h-[250px] mt-1 flex flex-col justify-center items-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md text-center",
      n
    ),
    children: [
      (r == null ? void 0 : r.placeholder) || /* @__PURE__ */ p.exports.jsx(Eu, { className: "text-zinc-400 w-10 h-10" }),
      /* @__PURE__ */ p.exports.jsxs(at, { type: "button", tabIndex: o == null ? void 0 : o.upload, className: `mt-2 ${t && "text-indigo-600"}`, onClick: s, children: [
        r == null ? void 0 : r.uploadButton,
        a || "Cargar Imagenes"
      ] }),
      /* @__PURE__ */ p.exports.jsx("span", { className: "font-semibold text-zinc-500", children: "o arrastra y suelta imagenes" })
    ]
  }
), nk = ({
  label: e,
  setUploadImages: t,
  format: n,
  uploadLabel: r,
  tabIndexs: o,
  emptyClassName: a,
  imageContainerClassName: s,
  icons: i,
  zoom: c,
  compress: l
}) => {
  const [u, d] = X([]), f = async (m, v) => {
    d(m);
    const h = m.map(async (g) => {
      var w, T, k, j;
      const { data_url: y, file: b } = await Ng({
        resizer: l.resizer,
        imageFile: g.file,
        quality: (n == null ? void 0 : n.quality) || 10,
        maxWidth: (n == null ? void 0 : n.width) || 500,
        maxHeight: (n == null ? void 0 : n.width) || 500,
        compressFormat: (n == null ? void 0 : n.extension) || "png",
        rotation: (n == null ? void 0 : n.rotation) || 0
      }), $ = Ka((w = m[0]) == null ? void 0 : w.file.size), _ = Ka(b.size);
      return {
        original: {
          preview: (T = m[0]) == null ? void 0 : T.data_url,
          file: (k = m[0]) == null ? void 0 : k.file,
          size: {
            formated: $,
            bytes: (j = m[0]) == null ? void 0 : j.file.size
          }
        },
        compressed: {
          preview: y == null ? void 0 : y.toString(),
          file: b,
          size: {
            formated: _,
            bytes: b.size
          }
        }
      };
    });
    Promise.all(h).then(t);
  };
  return /* @__PURE__ */ p.exports.jsxs("div", { children: [
    e && /* @__PURE__ */ p.exports.jsx(la, { children: e }),
    /* @__PURE__ */ p.exports.jsx("div", { className: "my-2" }),
    /* @__PURE__ */ p.exports.jsx(
      Sg,
      {
        multiple: !0,
        value: u,
        dataURLKey: "data_url",
        onChange: f,
        acceptType: ["webp", "png", "jpeg", "jpg"],
        children: ({ imageList: m, onImageUpload: v, onImageUpdate: h, onImageRemove: g, isDragging: y, dragProps: b }) => /* @__PURE__ */ p.exports.jsx(p.exports.Fragment, { children: m.length >= 1 ? /* @__PURE__ */ p.exports.jsxs("div", { className: "grid grid-cols-2 grid-flow-row gap-4", children: [
          m.map(($, _) => /* @__PURE__ */ p.exports.jsxs("div", { className: "imagen-container w-full flex flex-col justify-center items-center relative", children: [
            c ? /* @__PURE__ */ p.exports.jsx(_T, { imageContainerClassName: s, previewUrl: $ == null ? void 0 : $.data_url }) : /* @__PURE__ */ p.exports.jsx($T, { imageContainerClassName: s, previewUrl: $ == null ? void 0 : $.data_url }),
            /* @__PURE__ */ p.exports.jsx(
              wT,
              {
                imageIndex: _,
                onImageRemove: g,
                onImageUpdate: h,
                compress: l,
                tabIndexs: o
              }
            )
          ] }, _)),
          /* @__PURE__ */ p.exports.jsx("div", { className: "imagen-container", children: /* @__PURE__ */ p.exports.jsx(
            "div",
            {
              ...b,
              className: A(`w-full h-[237px] ${y ? "border-indigo-600" : "border-slate-50"} flex flex-col justify-center items-center border-dashed border-2 bg-slate-50 bg-opacity-5 rounded-md p-2`, s),
              children: /* @__PURE__ */ p.exports.jsx(
                at,
                {
                  type: "button",
                  variant: "outline",
                  className: "p-2 h-min",
                  onClick: v,
                  children: /* @__PURE__ */ p.exports.jsx(Eu, { className: "w-8 h-8" })
                }
              )
            }
          ) })
        ] }) : /* @__PURE__ */ p.exports.jsx(
          CT,
          {
            dragProps: b,
            emptyClassName: a,
            icons: i,
            isDragging: y,
            onImageUpload: v,
            tabIndexs: o,
            uploadLabel: r
          }
        ) })
      }
    )
  ] });
};
function rk(e) {
  const [t, n] = X(null), [r, o] = X(null), [a, s] = X(!1);
  Q(() => {
    e && (async () => {
      try {
        s(!0);
        const l = await e();
        n(l);
      } catch (l) {
        o(l);
      } finally {
        s(!1);
      }
    })();
  }, [e]);
  async function i(c) {
    try {
      s(!0);
      const l = await c();
      n(l);
    } catch (l) {
      o(l);
    } finally {
      s(!1);
    }
  }
  return { data: t, error: r, loading: a, fetcher: i };
}
const ok = ({ children: e }) => /* @__PURE__ */ p.exports.jsx("div", { className: "app-layout", children: e });
export {
  gP as Accordion,
  u8 as AccordionContent,
  c8 as AccordionItem,
  l8 as AccordionTrigger,
  pP as AlertDialog,
  A_ as AlertDialogAction,
  I_ as AlertDialogCancel,
  k_ as AlertDialogContent,
  R_ as AlertDialogDescription,
  O_ as AlertDialogFooter,
  M_ as AlertDialogHeader,
  D_ as AlertDialogTitle,
  mP as AlertDialogTrigger,
  ok as AppLayout,
  iP as AspectRatio,
  Br as Avatar,
  Hr as AvatarFallback,
  zr as AvatarImage,
  po as Badge,
  at as Button,
  ao as CI_TYPES,
  qy as Calendar,
  g4 as Card,
  $4 as CardContent,
  y4 as CardDescription,
  w4 as CardFooter,
  b4 as CardHeader,
  x4 as CardTitle,
  M4 as Checkbox,
  ek as CodeVerification,
  bP as Collapsible,
  yP as CollapsibleContent,
  xP as CollapsibleTrigger,
  d8 as ComboBox,
  Oo as Command,
  sP as CommandDialog,
  fs as CommandEmpty,
  Do as CommandGroup,
  ds as CommandInput,
  Ro as CommandItem,
  Xv as CommandList,
  Jv as CommandSeparator,
  j5 as CommandShortcut,
  LT as ContextMenu,
  bw as ContextMenuCheckboxItem,
  hw as ContextMenuContent,
  VT as ContextMenuGroup,
  gw as ContextMenuItem,
  yw as ContextMenuLabel,
  UT as ContextMenuPortal,
  BT as ContextMenuRadioGroup,
  xw as ContextMenuRadioItem,
  $w as ContextMenuSeparator,
  ww as ContextMenuShortcut,
  WT as ContextMenuSub,
  vw as ContextMenuSubContent,
  mw as ContextMenuSubTrigger,
  FT as ContextMenuTrigger,
  XP as CustomTable,
  l7 as Dialog,
  zm as DialogContent,
  p7 as DialogDescription,
  d7 as DialogFooter,
  u7 as DialogHeader,
  f7 as DialogTitle,
  HT as DialogTrigger,
  QT as DropdownMenu,
  s3 as DropdownMenuCheckboxItem,
  o3 as DropdownMenuContent,
  tP as DropdownMenuGroup,
  a3 as DropdownMenuItem,
  c3 as DropdownMenuLabel,
  nP as DropdownMenuPortal,
  oP as DropdownMenuRadioGroup,
  i3 as DropdownMenuRadioItem,
  l3 as DropdownMenuSeparator,
  u3 as DropdownMenuShortcut,
  rP as DropdownMenuSub,
  r3 as DropdownMenuSubContent,
  n3 as DropdownMenuSubTrigger,
  eP as DropdownMenuTrigger,
  Bw as Form,
  So as FormControl,
  No as FormDescription,
  Eo as FormField,
  kr as FormItem,
  Mr as FormLabel,
  zw as FormMessage,
  JP as GenericSelect,
  _P as HoverCard,
  _8 as HoverCardContent,
  CP as HoverCardTrigger,
  bT as ImageWithZoom,
  Hm as Input,
  YT as InputPID,
  yc as InputUI,
  la as Label,
  EP as LoaderDots,
  Z8 as Menubar,
  tC as MenubarCheckboxItem,
  Q8 as MenubarContent,
  TP as MenubarGroup,
  eC as MenubarItem,
  rC as MenubarLabel,
  NP as MenubarMenu,
  PP as MenubarPortal,
  MP as MenubarRadioGroup,
  nC as MenubarRadioItem,
  oC as MenubarSeparator,
  aC as MenubarShortcut,
  kP as MenubarSub,
  J8 as MenubarSubContent,
  X8 as MenubarSubTrigger,
  q8 as MenubarTrigger,
  nk as MultipleImages,
  YP as NavLink,
  KP as NavLinkNested,
  OC as NavigationMenu,
  IC as NavigationMenuContent,
  jC as NavigationMenuIndicator,
  DP as NavigationMenuItem,
  RP as NavigationMenuLink,
  DC as NavigationMenuList,
  AC as NavigationMenuTrigger,
  y0 as NavigationMenuViewport,
  gi as PHONE_LINE_CODES,
  ls as Popover,
  Po as PopoverContent,
  us as PopoverTrigger,
  KC as Progress,
  u9 as RadioGroup,
  d9 as RadioGroupItem,
  o_ as ScrollArea,
  uh as ScrollBar,
  dv as Select,
  Ql as SelectContent,
  qT as SelectGroup,
  eu as SelectItem,
  v4 as SelectLabel,
  h4 as SelectSeparator,
  Jl as SelectTrigger,
  fv as SelectValue,
  tu as Separator,
  lP as Sheet,
  dP as SheetClose,
  s_ as SheetContent,
  u_ as SheetDescription,
  c_ as SheetFooter,
  i_ as SheetHeader,
  l_ as SheetTitle,
  uP as SheetTrigger,
  zP as Sidebar,
  HP as SidebarContent,
  LE as SidebarFooter,
  IE as SidebarHeader,
  vP as Skeleton,
  A9 as Slider,
  zf as Spinner,
  QP as SwatchesPicker,
  NE as Switch,
  vh as TableBody,
  f_ as TableCaption,
  au as TableCell,
  d_ as TableFooter,
  hh as TableHead,
  mh as TableHeader,
  ni as TableRow,
  ph as TableUI,
  FP as Tabs,
  G9 as TabsContent,
  Y9 as TabsList,
  K9 as TabsTrigger,
  GT as TextArea,
  Jm as TextareaUI,
  X9 as Toggle,
  jE as ToggleTheme,
  jr as Tooltip,
  tr as TooltipContent,
  Ir as TooltipProvider,
  Lr as TooltipTrigger,
  tk as UploadImage,
  c6 as badgeVariants,
  bo as buttonVariants,
  A as cn,
  Ka as convertBytes,
  hi as convertHexToRGBA,
  NT as fetcher,
  kT as formatCI,
  Od as formatCITypes,
  RT as formatCodePhoneLines,
  GP as formatPagination,
  DT as formatPhone,
  OT as formatPhoneNumber,
  MT as formatRIF,
  pf as generateUUID,
  PT as getMultiOpacityColor,
  ZP as initialPagination,
  qP as insertColumn,
  RC as navigationMenuTriggerStyle,
  TT as simulateFetch,
  q9 as toggleVariants,
  rk as useFetch,
  Ks as useFormField,
  li as useSidebar
};
//# sourceMappingURL=index.es.js.map
