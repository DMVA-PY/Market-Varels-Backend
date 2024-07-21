const xe = class xe {
};
xe.AB_CONTROL_VARIANT = "a", xe.AB_TREATMENT_VARIANT = "b", xe.getStoreId = () => {
  var s;
  return (s = xe.getStorefrontObject().storeId) == null ? void 0 : s.toString();
}, xe.getCountry = () => xe.getStorefrontObject().lang.split("_")[1], xe.getLanguage = () => xe.getStorefrontObject().lang.replace("_", "-"), xe.getCartId = () => xe.getStorefrontObject().cartId ? xe.getStorefrontObject().cartId.toString() : null, xe.hasExpressCheckout = () => xe.getStorefrontObject().hasExpressCheckout, xe.isPageCart = () => window.LS.template === "cart", xe.isModalCartEnabled = () => !!document.querySelector('[data-store="cart-form"]'), xe.getThemeCode = () => window.LS.theme.code, xe.getCustomerId = () => window.LS.customer ? window.LS.customer.toString() : void 0, xe.isExpressCheckoutExperimentTreatmentVariant = () => xe.getStorefrontObject().abStorefrontCartExperiments["ab-storefront_cart-ec"] === xe.AB_TREATMENT_VARIANT, xe.getStorefrontObject = () => ({
  hasExpressCheckout: window.LS.store.checkout_express,
  storeId: window.LS.store.id,
  cartId: window.LS.cart.id,
  lang: window.LS.lang,
  abStorefrontCartExperiments: window.LS.abStorefrontCartExperiments
  // ab tests are loaded at the moment script runs
});
let se = xe;
class fp extends Error {
  constructor() {
    super(), this.message = "Not found selector for render ExpressCheckoutButton", this.name = "WALLET_FAILED_RENDER_EXPRESS_CHECKOUT_BUTTON";
  }
}
const io = class io {
  static handle() {
    io.themeWithButtonIncompatibility.includes(
      se.getThemeCode()
    ) && io.transformContainer();
  }
  static transformContainer() {
    document.querySelectorAll('input[name="go_to_checkout"]').forEach((u) => {
      u.parentElement && (u.parentElement.style.cssText = "width: 350px");
    });
  }
};
io.themeWithButtonIncompatibility = ["bahia", "base"];
let $s = io;
const gt = class gt {
  constructor() {
    this.inputButton = document.querySelector("input[name='go_to_checkout']");
  }
  static handle() {
    gt.hasCompatibility() || (gt.transformMainButton(), gt.transformMoreButton(), gt.transformCartAjaxButton());
  }
  static hasCompatibility() {
    return !gt.incompatibilityThemesList.includes(
      se.getThemeCode()
    );
  }
  static transformMainButton() {
    var m;
    const s = document.querySelector("input[name='go_to_checkout']");
    if (!s)
      return;
    const u = (m = s.parentElement) == null ? void 0 : m.parentElement;
    if (!u)
      return;
    const c = u.classList;
    c.remove(
      ...gt.classesToRemove
    ), c.add(
      ...gt.classesToAdd
    ), s.classList.remove("mb-3", "m-bottom-half");
  }
  static transformCartAjaxButton() {
    const s = document.getElementById(
      "ajax-cart-submit-div"
    );
    s && (s.style.cssText = "width: 100%; display: flex; flex-direction: column;");
  }
  static transformMoreButton() {
    var L, _, M;
    const s = document.querySelector("input[name='go_to_checkout']"), u = (L = s == null ? void 0 : s.parentElement) == null ? void 0 : L.parentElement;
    if (!u)
      return;
    const c = u.closest(".row");
    if (!c)
      return;
    c.classList.add("flex-column-reverse", "mt-5");
    const w = c.querySelector(".js-modal-close");
    w && ((_ = w == null ? void 0 : w.parentElement) == null || _.classList.remove(
      "order-md-1",
      "order-2"
    ), w.classList.add("d-block", "p-0"));
    const E = c.querySelector(".js-toggle-cart");
    E && ((M = E.parentElement) == null || M.classList.remove("col-sm-6"));
  }
  static getincompatibilityThemesList() {
    return this.incompatibilityThemesList;
  }
};
gt.incompatibilityThemesList = [
  "bahia",
  "material",
  "new_linkedman"
], gt.classesToRemove = ["col-md-6", "col-sm-6", "col-6"], gt.classesToAdd = ["col-md-12", "col-sm-12", "col-12"];
let Bs = gt;
const fu = class fu {
  static run() {
    this.transformWidthInputCheckout(), se.isPageCart() ? $s.handle() : Bs.handle(), this.disabledCartHoverWithCuboTheme();
  }
  static disabledCartHoverWithCuboTheme() {
    if (se.getThemeCode() === "cubo") {
      const s = document.querySelector(
        "#ajax-cart #ajax-cart-submit-div"
      );
      s && s.classList.add("hidden");
    }
  }
};
fu.transformWidthInputCheckout = () => {
  const s = document.querySelector(
    "[name=go_to_checkout]"
  );
  s && (s.style.width = "100%");
};
let Hs = fu;
function pp(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var jd = { exports: {} }, no = {}, js = { exports: {} }, ne = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd;
function hp() {
  if (sd)
    return ne;
  sd = 1;
  var i = Symbol.for("react.element"), s = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), E = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), D = Symbol.iterator;
  function F(f) {
    return f === null || typeof f != "object" ? null : (f = D && f[D] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, re = Object.assign, Z = {};
  function G(f, S, R) {
    this.props = f, this.context = S, this.refs = Z, this.updater = R || K;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(f, S) {
    if (typeof f != "object" && typeof f != "function" && f != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, S, "setState");
  }, G.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function fe() {
  }
  fe.prototype = G.prototype;
  function ie(f, S, R) {
    this.props = f, this.context = S, this.refs = Z, this.updater = R || K;
  }
  var b = ie.prototype = new fe();
  b.constructor = ie, re(b, G.prototype), b.isPureReactComponent = !0;
  var X = Array.isArray, oe = Object.prototype.hasOwnProperty, H = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(f, S, R) {
    var J, Y = {}, de = null, ee = null;
    if (S != null)
      for (J in S.ref !== void 0 && (ee = S.ref), S.key !== void 0 && (de = "" + S.key), S)
        oe.call(S, J) && !U.hasOwnProperty(J) && (Y[J] = S[J]);
    var ue = arguments.length - 2;
    if (ue === 1)
      Y.children = R;
    else if (1 < ue) {
      for (var te = Array(ue), _e = 0; _e < ue; _e++)
        te[_e] = arguments[_e + 2];
      Y.children = te;
    }
    if (f && f.defaultProps)
      for (J in ue = f.defaultProps, ue)
        Y[J] === void 0 && (Y[J] = ue[J]);
    return { $$typeof: i, type: f, key: de, ref: ee, props: Y, _owner: H.current };
  }
  function Ye(f, S) {
    return { $$typeof: i, type: f.type, key: S, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function wt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === i;
  }
  function Mt(f) {
    var S = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(R) {
      return S[R];
    });
  }
  var ut = /\/+/g;
  function We(f, S) {
    return typeof f == "object" && f !== null && f.key != null ? Mt("" + f.key) : S.toString(36);
  }
  function rt(f, S, R, J, Y) {
    var de = typeof f;
    (de === "undefined" || de === "boolean") && (f = null);
    var ee = !1;
    if (f === null)
      ee = !0;
    else
      switch (de) {
        case "string":
        case "number":
          ee = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case i:
            case s:
              ee = !0;
          }
      }
    if (ee)
      return ee = f, Y = Y(ee), f = J === "" ? "." + We(ee, 0) : J, X(Y) ? (R = "", f != null && (R = f.replace(ut, "$&/") + "/"), rt(Y, S, R, "", function(_e) {
        return _e;
      })) : Y != null && (wt(Y) && (Y = Ye(Y, R + (!Y.key || ee && ee.key === Y.key ? "" : ("" + Y.key).replace(ut, "$&/") + "/") + f)), S.push(Y)), 1;
    if (ee = 0, J = J === "" ? "." : J + ":", X(f))
      for (var ue = 0; ue < f.length; ue++) {
        de = f[ue];
        var te = J + We(de, ue);
        ee += rt(de, S, R, te, Y);
      }
    else if (te = F(f), typeof te == "function")
      for (f = te.call(f), ue = 0; !(de = f.next()).done; )
        de = de.value, te = J + We(de, ue++), ee += rt(de, S, R, te, Y);
    else if (de === "object")
      throw S = String(f), Error("Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead.");
    return ee;
  }
  function at(f, S, R) {
    if (f == null)
      return f;
    var J = [], Y = 0;
    return rt(f, J, "", "", function(de) {
      return S.call(R, de, Y++);
    }), J;
  }
  function $e(f) {
    if (f._status === -1) {
      var S = f._result;
      S = S(), S.then(function(R) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = R);
      }, function(R) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = R);
      }), f._status === -1 && (f._status = 0, f._result = S);
    }
    if (f._status === 1)
      return f._result.default;
    throw f._result;
  }
  var ge = { current: null }, N = { transition: null }, z = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: N, ReactCurrentOwner: H };
  return ne.Children = { map: at, forEach: function(f, S, R) {
    at(f, function() {
      S.apply(this, arguments);
    }, R);
  }, count: function(f) {
    var S = 0;
    return at(f, function() {
      S++;
    }), S;
  }, toArray: function(f) {
    return at(f, function(S) {
      return S;
    }) || [];
  }, only: function(f) {
    if (!wt(f))
      throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, ne.Component = G, ne.Fragment = u, ne.Profiler = m, ne.PureComponent = ie, ne.StrictMode = c, ne.Suspense = _, ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, ne.cloneElement = function(f, S, R) {
    if (f == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var J = re({}, f.props), Y = f.key, de = f.ref, ee = f._owner;
    if (S != null) {
      if (S.ref !== void 0 && (de = S.ref, ee = H.current), S.key !== void 0 && (Y = "" + S.key), f.type && f.type.defaultProps)
        var ue = f.type.defaultProps;
      for (te in S)
        oe.call(S, te) && !U.hasOwnProperty(te) && (J[te] = S[te] === void 0 && ue !== void 0 ? ue[te] : S[te]);
    }
    var te = arguments.length - 2;
    if (te === 1)
      J.children = R;
    else if (1 < te) {
      ue = Array(te);
      for (var _e = 0; _e < te; _e++)
        ue[_e] = arguments[_e + 2];
      J.children = ue;
    }
    return { $$typeof: i, type: f.type, key: Y, ref: de, props: J, _owner: ee };
  }, ne.createContext = function(f) {
    return f = { $$typeof: E, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: w, _context: f }, f.Consumer = f;
  }, ne.createElement = Pe, ne.createFactory = function(f) {
    var S = Pe.bind(null, f);
    return S.type = f, S;
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(f) {
    return { $$typeof: L, render: f };
  }, ne.isValidElement = wt, ne.lazy = function(f) {
    return { $$typeof: B, _payload: { _status: -1, _result: f }, _init: $e };
  }, ne.memo = function(f, S) {
    return { $$typeof: M, type: f, compare: S === void 0 ? null : S };
  }, ne.startTransition = function(f) {
    var S = N.transition;
    N.transition = {};
    try {
      f();
    } finally {
      N.transition = S;
    }
  }, ne.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ne.useCallback = function(f, S) {
    return ge.current.useCallback(f, S);
  }, ne.useContext = function(f) {
    return ge.current.useContext(f);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(f) {
    return ge.current.useDeferredValue(f);
  }, ne.useEffect = function(f, S) {
    return ge.current.useEffect(f, S);
  }, ne.useId = function() {
    return ge.current.useId();
  }, ne.useImperativeHandle = function(f, S, R) {
    return ge.current.useImperativeHandle(f, S, R);
  }, ne.useInsertionEffect = function(f, S) {
    return ge.current.useInsertionEffect(f, S);
  }, ne.useLayoutEffect = function(f, S) {
    return ge.current.useLayoutEffect(f, S);
  }, ne.useMemo = function(f, S) {
    return ge.current.useMemo(f, S);
  }, ne.useReducer = function(f, S, R) {
    return ge.current.useReducer(f, S, R);
  }, ne.useRef = function(f) {
    return ge.current.useRef(f);
  }, ne.useState = function(f) {
    return ge.current.useState(f);
  }, ne.useSyncExternalStore = function(f, S, R) {
    return ge.current.useSyncExternalStore(f, S, R);
  }, ne.useTransition = function() {
    return ge.current.useTransition();
  }, ne.version = "18.2.0", ne;
}
var ud;
function ou() {
  return ud || (ud = 1, js.exports = hp()), js.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ad;
function mp() {
  if (ad)
    return no;
  ad = 1;
  var i = ou(), s = Symbol.for("react.element"), u = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(L, _, M) {
    var B, D = {}, F = null, K = null;
    M !== void 0 && (F = "" + M), _.key !== void 0 && (F = "" + _.key), _.ref !== void 0 && (K = _.ref);
    for (B in _)
      c.call(_, B) && !w.hasOwnProperty(B) && (D[B] = _[B]);
    if (L && L.defaultProps)
      for (B in _ = L.defaultProps, _)
        D[B] === void 0 && (D[B] = _[B]);
    return { $$typeof: s, type: L, key: F, ref: K, props: D, _owner: m.current };
  }
  return no.Fragment = u, no.jsx = E, no.jsxs = E, no;
}
jd.exports = mp();
var V = jd.exports, zd = { exports: {} }, nt = {}, zs = { exports: {} }, Ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cd;
function gp() {
  return cd || (cd = 1, function(i) {
    function s(N, z) {
      var f = N.length;
      N.push(z);
      e:
        for (; 0 < f; ) {
          var S = f - 1 >>> 1, R = N[S];
          if (0 < m(R, z))
            N[S] = z, N[f] = R, f = S;
          else
            break e;
        }
    }
    function u(N) {
      return N.length === 0 ? null : N[0];
    }
    function c(N) {
      if (N.length === 0)
        return null;
      var z = N[0], f = N.pop();
      if (f !== z) {
        N[0] = f;
        e:
          for (var S = 0, R = N.length, J = R >>> 1; S < J; ) {
            var Y = 2 * (S + 1) - 1, de = N[Y], ee = Y + 1, ue = N[ee];
            if (0 > m(de, f))
              ee < R && 0 > m(ue, de) ? (N[S] = ue, N[ee] = f, S = ee) : (N[S] = de, N[Y] = f, S = Y);
            else if (ee < R && 0 > m(ue, f))
              N[S] = ue, N[ee] = f, S = ee;
            else
              break e;
          }
      }
      return z;
    }
    function m(N, z) {
      var f = N.sortIndex - z.sortIndex;
      return f !== 0 ? f : N.id - z.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      i.unstable_now = function() {
        return w.now();
      };
    } else {
      var E = Date, L = E.now();
      i.unstable_now = function() {
        return E.now() - L;
      };
    }
    var _ = [], M = [], B = 1, D = null, F = 3, K = !1, re = !1, Z = !1, G = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(N) {
      for (var z = u(M); z !== null; ) {
        if (z.callback === null)
          c(M);
        else if (z.startTime <= N)
          c(M), z.sortIndex = z.expirationTime, s(_, z);
        else
          break;
        z = u(M);
      }
    }
    function X(N) {
      if (Z = !1, b(N), !re)
        if (u(_) !== null)
          re = !0, $e(oe);
        else {
          var z = u(M);
          z !== null && ge(X, z.startTime - N);
        }
    }
    function oe(N, z) {
      re = !1, Z && (Z = !1, fe(Pe), Pe = -1), K = !0;
      var f = F;
      try {
        for (b(z), D = u(_); D !== null && (!(D.expirationTime > z) || N && !Mt()); ) {
          var S = D.callback;
          if (typeof S == "function") {
            D.callback = null, F = D.priorityLevel;
            var R = S(D.expirationTime <= z);
            z = i.unstable_now(), typeof R == "function" ? D.callback = R : D === u(_) && c(_), b(z);
          } else
            c(_);
          D = u(_);
        }
        if (D !== null)
          var J = !0;
        else {
          var Y = u(M);
          Y !== null && ge(X, Y.startTime - z), J = !1;
        }
        return J;
      } finally {
        D = null, F = f, K = !1;
      }
    }
    var H = !1, U = null, Pe = -1, Ye = 5, wt = -1;
    function Mt() {
      return !(i.unstable_now() - wt < Ye);
    }
    function ut() {
      if (U !== null) {
        var N = i.unstable_now();
        wt = N;
        var z = !0;
        try {
          z = U(!0, N);
        } finally {
          z ? We() : (H = !1, U = null);
        }
      } else
        H = !1;
    }
    var We;
    if (typeof ie == "function")
      We = function() {
        ie(ut);
      };
    else if (typeof MessageChannel < "u") {
      var rt = new MessageChannel(), at = rt.port2;
      rt.port1.onmessage = ut, We = function() {
        at.postMessage(null);
      };
    } else
      We = function() {
        G(ut, 0);
      };
    function $e(N) {
      U = N, H || (H = !0, We());
    }
    function ge(N, z) {
      Pe = G(function() {
        N(i.unstable_now());
      }, z);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, i.unstable_continueExecution = function() {
      re || K || (re = !0, $e(oe));
    }, i.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ye = 0 < N ? Math.floor(1e3 / N) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(_);
    }, i.unstable_next = function(N) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = F;
      }
      var f = F;
      F = z;
      try {
        return N();
      } finally {
        F = f;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(N, z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var f = F;
      F = N;
      try {
        return z();
      } finally {
        F = f;
      }
    }, i.unstable_scheduleCallback = function(N, z, f) {
      var S = i.unstable_now();
      switch (typeof f == "object" && f !== null ? (f = f.delay, f = typeof f == "number" && 0 < f ? S + f : S) : f = S, N) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return R = f + R, N = { id: B++, callback: z, priorityLevel: N, startTime: f, expirationTime: R, sortIndex: -1 }, f > S ? (N.sortIndex = f, s(M, N), u(_) === null && N === u(M) && (Z ? (fe(Pe), Pe = -1) : Z = !0, ge(X, f - S))) : (N.sortIndex = R, s(_, N), re || K || (re = !0, $e(oe))), N;
    }, i.unstable_shouldYield = Mt, i.unstable_wrapCallback = function(N) {
      var z = F;
      return function() {
        var f = F;
        F = z;
        try {
          return N.apply(this, arguments);
        } finally {
          F = f;
        }
      };
    };
  }(Ms)), Ms;
}
var dd;
function vp() {
  return dd || (dd = 1, zs.exports = gp()), zs.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fd;
function yp() {
  if (fd)
    return nt;
  fd = 1;
  var i = ou(), s = vp();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var c = /* @__PURE__ */ new Set(), m = {};
  function w(e, t) {
    E(e, t), E(e + "Capture", t);
  }
  function E(e, t) {
    for (m[e] = t, e = 0; e < t.length; e++)
      c.add(t[e]);
  }
  var L = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _ = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, D = {};
  function F(e) {
    return _.call(D, e) ? !0 : _.call(B, e) ? !1 : M.test(e) ? D[e] = !0 : (B[e] = !0, !1);
  }
  function K(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function re(e, t, n, r) {
    if (t === null || typeof t > "u" || K(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function Z(e, t, n, r, o, l, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = a;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    G[e] = new Z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    G[t] = new Z(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    G[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    G[e] = new Z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    G[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    G[e] = new Z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    G[e] = new Z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    G[e] = new Z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    G[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var fe = /[\-:]([a-z])/g;
  function ie(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      fe,
      ie
    );
    G[t] = new Z(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(fe, ie);
    G[t] = new Z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(fe, ie);
    G[t] = new Z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    G[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    G[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function b(e, t, n, r) {
    var o = G.hasOwnProperty(t) ? G[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (re(t, n, o, r) && (n = null), r || o === null ? F(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var X = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, oe = Symbol.for("react.element"), H = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), Ye = Symbol.for("react.profiler"), wt = Symbol.for("react.provider"), Mt = Symbol.for("react.context"), ut = Symbol.for("react.forward_ref"), We = Symbol.for("react.suspense"), rt = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), N = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object" ? null : (e = N && e[N] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var f = Object.assign, S;
  function R(e) {
    if (S === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        S = t && t[1] || "";
      }
    return `
` + S + e;
  }
  var J = !1;
  function Y(e, t) {
    if (!e || J)
      return "";
    J = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch (y) {
            var r = y;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (y) {
            r = y;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (y) {
          r = y;
        }
        e();
      }
    } catch (y) {
      if (y && r && typeof y.stack == "string") {
        for (var o = y.stack.split(`
`), l = r.stack.split(`
`), a = o.length - 1, d = l.length - 1; 1 <= a && 0 <= d && o[a] !== l[d]; )
          d--;
        for (; 1 <= a && 0 <= d; a--, d--)
          if (o[a] !== l[d]) {
            if (a !== 1 || d !== 1)
              do
                if (a--, d--, 0 > d || o[a] !== l[d]) {
                  var p = `
` + o[a].replace(" at new ", " at ");
                  return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), p;
                }
              while (1 <= a && 0 <= d);
            break;
          }
      }
    } finally {
      J = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function de(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Y(e.type, !1), e;
      case 11:
        return e = Y(e.type.render, !1), e;
      case 1:
        return e = Y(e.type, !0), e;
      default:
        return "";
    }
  }
  function ee(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case U:
        return "Fragment";
      case H:
        return "Portal";
      case Ye:
        return "Profiler";
      case Pe:
        return "StrictMode";
      case We:
        return "Suspense";
      case rt:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Mt:
          return (e.displayName || "Context") + ".Consumer";
        case wt:
          return (e._context.displayName || "Context") + ".Provider";
        case ut:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case at:
          return t = e.displayName || null, t !== null ? t : ee(e.type) || "Memo";
        case $e:
          t = e._payload, e = e._init;
          try {
            return ee(e(t));
          } catch {
          }
      }
    return null;
  }
  function ue(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ee(t);
      case 8:
        return t === Pe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function te(e) {
    switch (typeof e) {
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
  function _e(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function gr(e) {
    var t = _e(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(a) {
        r = "" + a, l.call(this, a);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(a) {
        r = "" + a;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Dt(e) {
    e._valueTracker || (e._valueTracker = gr(e));
  }
  function Et(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = _e(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function uo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wi(e, t) {
    var n = t.checked;
    return f({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function pu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function hu(e, t) {
    t = t.checked, t != null && b(e, "checked", t, !1);
  }
  function $i(e, t) {
    hu(e, t);
    var n = te(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Bi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Bi(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function mu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Bi(e, t, n) {
    (t !== "number" || uo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var vr = Array.isArray;
  function Dn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + te(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(u(91));
    return f({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function gu(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(u(92));
        if (vr(n)) {
          if (1 < n.length)
            throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function vu(e, t) {
    var n = te(t.value), r = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function yu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function wu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? wu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var ao, Eu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (ao = ao || document.createElement("div"), ao.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ao.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function yr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, gf = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wr).forEach(function(e) {
    gf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e];
    });
  });
  function Su(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px";
  }
  function Cu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, o = Su(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
      }
  }
  var vf = f({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Zi(e, t) {
    if (t) {
      if (vf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(u(62));
    }
  }
  function Ki(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
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
  var Yi = null;
  function Gi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xi = null, Fn = null, Un = null;
  function ku(e) {
    if (e = Wr(e)) {
      if (typeof Xi != "function")
        throw Error(u(280));
      var t = e.stateNode;
      t && (t = Oo(t), Xi(e.stateNode, e.type, t));
    }
  }
  function xu(e) {
    Fn ? Un ? Un.push(e) : Un = [e] : Fn = e;
  }
  function _u() {
    if (Fn) {
      var e = Fn, t = Un;
      if (Un = Fn = null, ku(e), t)
        for (e = 0; e < t.length; e++)
          ku(t[e]);
    }
  }
  function Tu(e, t) {
    return e(t);
  }
  function Lu() {
  }
  var qi = !1;
  function Nu(e, t, n) {
    if (qi)
      return e(t, n);
    qi = !0;
    try {
      return Tu(e, t, n);
    } finally {
      qi = !1, (Fn !== null || Un !== null) && (Lu(), _u());
    }
  }
  function Er(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = Oo(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
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
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(u(231, t, typeof n));
    return n;
  }
  var Ji = !1;
  if (L)
    try {
      var Sr = {};
      Object.defineProperty(Sr, "passive", { get: function() {
        Ji = !0;
      } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
    } catch {
      Ji = !1;
    }
  function yf(e, t, n, r, o, l, a, d, p) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (k) {
      this.onError(k);
    }
  }
  var Cr = !1, co = null, fo = !1, bi = null, wf = { onError: function(e) {
    Cr = !0, co = e;
  } };
  function Ef(e, t, n, r, o, l, a, d, p) {
    Cr = !1, co = null, yf.apply(wf, arguments);
  }
  function Sf(e, t, n, r, o, l, a, d, p) {
    if (Ef.apply(this, arguments), Cr) {
      if (Cr) {
        var y = co;
        Cr = !1, co = null;
      } else
        throw Error(u(198));
      fo || (fo = !0, bi = y);
    }
  }
  function vn(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Pu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Ru(e) {
    if (vn(e) !== e)
      throw Error(u(188));
  }
  function Cf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = vn(e), t === null)
        throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null)
        break;
      var l = o.alternate;
      if (l === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === l.child) {
        for (l = o.child; l; ) {
          if (l === n)
            return Ru(o), e;
          if (l === r)
            return Ru(o), t;
          l = l.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return)
        n = o, r = l;
      else {
        for (var a = !1, d = o.child; d; ) {
          if (d === n) {
            a = !0, n = o, r = l;
            break;
          }
          if (d === r) {
            a = !0, r = o, n = l;
            break;
          }
          d = d.sibling;
        }
        if (!a) {
          for (d = l.child; d; ) {
            if (d === n) {
              a = !0, n = l, r = o;
              break;
            }
            if (d === r) {
              a = !0, r = l, n = o;
              break;
            }
            d = d.sibling;
          }
          if (!a)
            throw Error(u(189));
        }
      }
      if (n.alternate !== r)
        throw Error(u(190));
    }
    if (n.tag !== 3)
      throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function Au(e) {
    return e = Cf(e), e !== null ? Iu(e) : null;
  }
  function Iu(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = Iu(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var Ou = s.unstable_scheduleCallback, ju = s.unstable_cancelCallback, kf = s.unstable_shouldYield, xf = s.unstable_requestPaint, Le = s.unstable_now, _f = s.unstable_getCurrentPriorityLevel, el = s.unstable_ImmediatePriority, zu = s.unstable_UserBlockingPriority, po = s.unstable_NormalPriority, Tf = s.unstable_LowPriority, Mu = s.unstable_IdlePriority, ho = null, Rt = null;
  function Lf(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function")
      try {
        Rt.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : Rf, Nf = Math.log, Pf = Math.LN2;
  function Rf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Nf(e) / Pf | 0) | 0;
  }
  var mo = 64, go = 4194304;
  function kr(e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function vo(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, o = e.suspendedLanes, l = e.pingedLanes, a = n & 268435455;
    if (a !== 0) {
      var d = a & ~o;
      d !== 0 ? r = kr(d) : (l &= a, l !== 0 && (r = kr(l)));
    } else
      a = n & ~o, a !== 0 ? r = kr(a) : l !== 0 && (r = kr(l));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - St(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Af(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function If(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var a = 31 - St(l), d = 1 << a, p = o[a];
      p === -1 ? (!(d & n) || d & r) && (o[a] = Af(d, t)) : p <= t && (e.expiredLanes |= d), l &= ~d;
    }
  }
  function tl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Du() {
    var e = mo;
    return mo <<= 1, !(mo & 4194240) && (mo = 64), e;
  }
  function nl(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function xr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - St(t), e[t] = n;
  }
  function Of(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - St(n), l = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
    }
  }
  function rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - St(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var he = 0;
  function Fu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Uu, ol, Vu, Wu, $u, il = !1, yo = [], Xt = null, qt = null, Jt = null, _r = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), bt = [], jf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Bu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xt = null;
        break;
      case "dragenter":
      case "dragleave":
        qt = null;
        break;
      case "mouseover":
      case "mouseout":
        Jt = null;
        break;
      case "pointerover":
      case "pointerout":
        _r.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Tr.delete(t.pointerId);
    }
  }
  function Lr(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Wr(t), t !== null && ol(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function zf(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Xt = Lr(Xt, e, t, n, r, o), !0;
      case "dragenter":
        return qt = Lr(qt, e, t, n, r, o), !0;
      case "mouseover":
        return Jt = Lr(Jt, e, t, n, r, o), !0;
      case "pointerover":
        var l = o.pointerId;
        return _r.set(l, Lr(_r.get(l) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return l = o.pointerId, Tr.set(l, Lr(Tr.get(l) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function Hu(e) {
    var t = yn(e.target);
    if (t !== null) {
      var n = vn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Pu(n), t !== null) {
            e.blockedOn = t, $u(e.priority, function() {
              Vu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function wo(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Yi = r, n.target.dispatchEvent(r), Yi = null;
      } else
        return t = Wr(n), t !== null && ol(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Qu(e, t, n) {
    wo(e) && n.delete(t);
  }
  function Mf() {
    il = !1, Xt !== null && wo(Xt) && (Xt = null), qt !== null && wo(qt) && (qt = null), Jt !== null && wo(Jt) && (Jt = null), _r.forEach(Qu), Tr.forEach(Qu);
  }
  function Nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, il || (il = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Mf)));
  }
  function Pr(e) {
    function t(o) {
      return Nr(o, e);
    }
    if (0 < yo.length) {
      Nr(yo[0], e);
      for (var n = 1; n < yo.length; n++) {
        var r = yo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Xt !== null && Nr(Xt, e), qt !== null && Nr(qt, e), Jt !== null && Nr(Jt, e), _r.forEach(t), Tr.forEach(t), n = 0; n < bt.length; n++)
      r = bt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < bt.length && (n = bt[0], n.blockedOn === null); )
      Hu(n), n.blockedOn === null && bt.shift();
  }
  var Vn = X.ReactCurrentBatchConfig, Eo = !0;
  function Df(e, t, n, r) {
    var o = he, l = Vn.transition;
    Vn.transition = null;
    try {
      he = 1, ll(e, t, n, r);
    } finally {
      he = o, Vn.transition = l;
    }
  }
  function Ff(e, t, n, r) {
    var o = he, l = Vn.transition;
    Vn.transition = null;
    try {
      he = 4, ll(e, t, n, r);
    } finally {
      he = o, Vn.transition = l;
    }
  }
  function ll(e, t, n, r) {
    if (Eo) {
      var o = sl(e, t, n, r);
      if (o === null)
        xl(e, t, r, So, n), Bu(e, r);
      else if (zf(o, e, t, n, r))
        r.stopPropagation();
      else if (Bu(e, r), t & 4 && -1 < jf.indexOf(e)) {
        for (; o !== null; ) {
          var l = Wr(o);
          if (l !== null && Uu(l), l = sl(e, t, n, r), l === null && xl(e, t, r, So, n), l === o)
            break;
          o = l;
        }
        o !== null && r.stopPropagation();
      } else
        xl(e, t, r, null, n);
    }
  }
  var So = null;
  function sl(e, t, n, r) {
    if (So = null, e = Gi(r), e = yn(e), e !== null)
      if (t = vn(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = Pu(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return So = e, null;
  }
  function Zu(e) {
    switch (e) {
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
      case "resize":
      case "seeked":
      case "submit":
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
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
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
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (_f()) {
          case el:
            return 1;
          case zu:
            return 4;
          case po:
          case Tf:
            return 16;
          case Mu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var en = null, ul = null, Co = null;
  function Ku() {
    if (Co)
      return Co;
    var e, t = ul, n = t.length, r, o = "value" in en ? en.value : en.textContent, l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
      ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[l - r]; r++)
      ;
    return Co = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function ko(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function xo() {
    return !0;
  }
  function Yu() {
    return !1;
  }
  function ot(e) {
    function t(n, r, o, l, a) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = a, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(l) : l[d]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? xo : Yu, this.isPropagationStopped = Yu, this;
    }
    return f(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xo);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xo);
    }, persist: function() {
    }, isPersistent: xo }), t;
  }
  var Wn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, al = ot(Wn), Rr = f({}, Wn, { view: 0, detail: 0 }), Uf = ot(Rr), cl, dl, Ar, _o = f({}, Rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Ar && (Ar && e.type === "mousemove" ? (cl = e.screenX - Ar.screenX, dl = e.screenY - Ar.screenY) : dl = cl = 0, Ar = e), cl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : dl;
  } }), Gu = ot(_o), Vf = f({}, _o, { dataTransfer: 0 }), Wf = ot(Vf), $f = f({}, Rr, { relatedTarget: 0 }), fl = ot($f), Bf = f({}, Wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hf = ot(Bf), Qf = f({}, Wn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Zf = ot(Qf), Kf = f({}, Wn, { data: 0 }), Xu = ot(Kf), Yf = {
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
  }, Gf = {
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
  }, Xf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Xf[e]) ? !!t[e] : !1;
  }
  function pl() {
    return qf;
  }
  var Jf = f({}, Rr, { key: function(e) {
    if (e.key) {
      var t = Yf[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = ko(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pl, charCode: function(e) {
    return e.type === "keypress" ? ko(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? ko(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), bf = ot(Jf), e1 = f({}, _o, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), qu = ot(e1), t1 = f({}, Rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pl }), n1 = ot(t1), r1 = f({}, Wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), o1 = ot(r1), i1 = f({}, _o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), l1 = ot(i1), s1 = [9, 13, 27, 32], hl = L && "CompositionEvent" in window, Ir = null;
  L && "documentMode" in document && (Ir = document.documentMode);
  var u1 = L && "TextEvent" in window && !Ir, Ju = L && (!hl || Ir && 8 < Ir && 11 >= Ir), bu = " ", ea = !1;
  function ta(e, t) {
    switch (e) {
      case "keyup":
        return s1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function na(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $n = !1;
  function a1(e, t) {
    switch (e) {
      case "compositionend":
        return na(t);
      case "keypress":
        return t.which !== 32 ? null : (ea = !0, bu);
      case "textInput":
        return e = t.data, e === bu && ea ? null : e;
      default:
        return null;
    }
  }
  function c1(e, t) {
    if ($n)
      return e === "compositionend" || !hl && ta(e, t) ? (e = Ku(), Co = ul = en = null, $n = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ju && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var d1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!d1[e.type] : t === "textarea";
  }
  function oa(e, t, n, r) {
    xu(r), t = Ro(t, "onChange"), 0 < t.length && (n = new al("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Or = null, jr = null;
  function f1(e) {
    Ca(e, 0);
  }
  function To(e) {
    var t = Kn(e);
    if (Et(t))
      return e;
  }
  function p1(e, t) {
    if (e === "change")
      return t;
  }
  var ia = !1;
  if (L) {
    var ml;
    if (L) {
      var gl = "oninput" in document;
      if (!gl) {
        var la = document.createElement("div");
        la.setAttribute("oninput", "return;"), gl = typeof la.oninput == "function";
      }
      ml = gl;
    } else
      ml = !1;
    ia = ml && (!document.documentMode || 9 < document.documentMode);
  }
  function sa() {
    Or && (Or.detachEvent("onpropertychange", ua), jr = Or = null);
  }
  function ua(e) {
    if (e.propertyName === "value" && To(jr)) {
      var t = [];
      oa(t, jr, e, Gi(e)), Nu(f1, t);
    }
  }
  function h1(e, t, n) {
    e === "focusin" ? (sa(), Or = t, jr = n, Or.attachEvent("onpropertychange", ua)) : e === "focusout" && sa();
  }
  function m1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return To(jr);
  }
  function g1(e, t) {
    if (e === "click")
      return To(t);
  }
  function v1(e, t) {
    if (e === "input" || e === "change")
      return To(t);
  }
  function y1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : y1;
  function zr(e, t) {
    if (Ct(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!_.call(t, o) || !Ct(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function aa(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function ca(e, t) {
    var n = aa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = aa(n);
    }
  }
  function da(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? da(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function fa() {
    for (var e = window, t = uo(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = uo(e.document);
    }
    return t;
  }
  function vl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function w1(e) {
    var t = fa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && da(n.ownerDocument.documentElement, n)) {
      if (r !== null && vl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, l = Math.min(r.start, o);
          r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ca(n, l);
          var a = ca(
            n,
            r
          );
          o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var E1 = L && "documentMode" in document && 11 >= document.documentMode, Bn = null, yl = null, Mr = null, wl = !1;
  function pa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl || Bn == null || Bn !== uo(r) || (r = Bn, "selectionStart" in r && vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mr && zr(Mr, r) || (Mr = r, r = Ro(yl, "onSelect"), 0 < r.length && (t = new al("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Bn)));
  }
  function Lo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Hn = { animationend: Lo("Animation", "AnimationEnd"), animationiteration: Lo("Animation", "AnimationIteration"), animationstart: Lo("Animation", "AnimationStart"), transitionend: Lo("Transition", "TransitionEnd") }, El = {}, ha = {};
  L && (ha = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
  function No(e) {
    if (El[e])
      return El[e];
    if (!Hn[e])
      return e;
    var t = Hn[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in ha)
        return El[e] = t[n];
    return e;
  }
  var ma = No("animationend"), ga = No("animationiteration"), va = No("animationstart"), ya = No("transitionend"), wa = /* @__PURE__ */ new Map(), Ea = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function tn(e, t) {
    wa.set(e, t), w(t, [e]);
  }
  for (var Sl = 0; Sl < Ea.length; Sl++) {
    var Cl = Ea[Sl], S1 = Cl.toLowerCase(), C1 = Cl[0].toUpperCase() + Cl.slice(1);
    tn(S1, "on" + C1);
  }
  tn(ma, "onAnimationEnd"), tn(ga, "onAnimationIteration"), tn(va, "onAnimationStart"), tn("dblclick", "onDoubleClick"), tn("focusin", "onFocus"), tn("focusout", "onBlur"), tn(ya, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), k1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
  function Sa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Sf(r, t, void 0, e), e.currentTarget = null;
  }
  function Ca(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var a = r.length - 1; 0 <= a; a--) {
            var d = r[a], p = d.instance, y = d.currentTarget;
            if (d = d.listener, p !== l && o.isPropagationStopped())
              break e;
            Sa(o, d, y), l = p;
          }
        else
          for (a = 0; a < r.length; a++) {
            if (d = r[a], p = d.instance, y = d.currentTarget, d = d.listener, p !== l && o.isPropagationStopped())
              break e;
            Sa(o, d, y), l = p;
          }
      }
    }
    if (fo)
      throw e = bi, fo = !1, bi = null, e;
  }
  function ye(e, t) {
    var n = t[Rl];
    n === void 0 && (n = t[Rl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ka(t, e, 2, !1), n.add(r));
  }
  function kl(e, t, n) {
    var r = 0;
    t && (r |= 4), ka(n, e, r, t);
  }
  var Po = "_reactListening" + Math.random().toString(36).slice(2);
  function Fr(e) {
    if (!e[Po]) {
      e[Po] = !0, c.forEach(function(n) {
        n !== "selectionchange" && (k1.has(n) || kl(n, !1, e), kl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Po] || (t[Po] = !0, kl("selectionchange", !1, t));
    }
  }
  function ka(e, t, n, r) {
    switch (Zu(t)) {
      case 1:
        var o = Df;
        break;
      case 4:
        o = Ff;
        break;
      default:
        o = ll;
    }
    n = o.bind(null, t, n, e), o = void 0, !Ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function xl(e, t, n, r, o) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var a = r.tag;
          if (a === 3 || a === 4) {
            var d = r.stateNode.containerInfo;
            if (d === o || d.nodeType === 8 && d.parentNode === o)
              break;
            if (a === 4)
              for (a = r.return; a !== null; ) {
                var p = a.tag;
                if ((p === 3 || p === 4) && (p = a.stateNode.containerInfo, p === o || p.nodeType === 8 && p.parentNode === o))
                  return;
                a = a.return;
              }
            for (; d !== null; ) {
              if (a = yn(d), a === null)
                return;
              if (p = a.tag, p === 5 || p === 6) {
                r = l = a;
                continue e;
              }
              d = d.parentNode;
            }
          }
          r = r.return;
        }
    Nu(function() {
      var y = l, k = Gi(n), x = [];
      e: {
        var C = wa.get(e);
        if (C !== void 0) {
          var P = al, I = e;
          switch (e) {
            case "keypress":
              if (ko(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              P = bf;
              break;
            case "focusin":
              I = "focus", P = fl;
              break;
            case "focusout":
              I = "blur", P = fl;
              break;
            case "beforeblur":
            case "afterblur":
              P = fl;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              P = Gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = Wf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = n1;
              break;
            case ma:
            case ga:
            case va:
              P = Hf;
              break;
            case ya:
              P = o1;
              break;
            case "scroll":
              P = Uf;
              break;
            case "wheel":
              P = l1;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = Zf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = qu;
          }
          var O = (t & 4) !== 0, Ne = !O && e === "scroll", g = O ? C !== null ? C + "Capture" : null : C;
          O = [];
          for (var h = y, v; h !== null; ) {
            v = h;
            var T = v.stateNode;
            if (v.tag === 5 && T !== null && (v = T, g !== null && (T = Er(h, g), T != null && O.push(Ur(h, T, v)))), Ne)
              break;
            h = h.return;
          }
          0 < O.length && (C = new P(C, I, null, n, k), x.push({ event: C, listeners: O }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", P = e === "mouseout" || e === "pointerout", C && n !== Yi && (I = n.relatedTarget || n.fromElement) && (yn(I) || I[Ft]))
            break e;
          if ((P || C) && (C = k.window === k ? k : (C = k.ownerDocument) ? C.defaultView || C.parentWindow : window, P ? (I = n.relatedTarget || n.toElement, P = y, I = I ? yn(I) : null, I !== null && (Ne = vn(I), I !== Ne || I.tag !== 5 && I.tag !== 6) && (I = null)) : (P = null, I = y), P !== I)) {
            if (O = Gu, T = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (O = qu, T = "onPointerLeave", g = "onPointerEnter", h = "pointer"), Ne = P == null ? C : Kn(P), v = I == null ? C : Kn(I), C = new O(T, h + "leave", P, n, k), C.target = Ne, C.relatedTarget = v, T = null, yn(k) === y && (O = new O(g, h + "enter", I, n, k), O.target = v, O.relatedTarget = Ne, T = O), Ne = T, P && I)
              t: {
                for (O = P, g = I, h = 0, v = O; v; v = Qn(v))
                  h++;
                for (v = 0, T = g; T; T = Qn(T))
                  v++;
                for (; 0 < h - v; )
                  O = Qn(O), h--;
                for (; 0 < v - h; )
                  g = Qn(g), v--;
                for (; h--; ) {
                  if (O === g || g !== null && O === g.alternate)
                    break t;
                  O = Qn(O), g = Qn(g);
                }
                O = null;
              }
            else
              O = null;
            P !== null && xa(x, C, P, O, !1), I !== null && Ne !== null && xa(x, Ne, I, O, !0);
          }
        }
        e: {
          if (C = y ? Kn(y) : window, P = C.nodeName && C.nodeName.toLowerCase(), P === "select" || P === "input" && C.type === "file")
            var j = p1;
          else if (ra(C))
            if (ia)
              j = v1;
            else {
              j = m1;
              var W = h1;
            }
          else
            (P = C.nodeName) && P.toLowerCase() === "input" && (C.type === "checkbox" || C.type === "radio") && (j = g1);
          if (j && (j = j(e, y))) {
            oa(x, j, n, k);
            break e;
          }
          W && W(e, C, y), e === "focusout" && (W = C._wrapperState) && W.controlled && C.type === "number" && Bi(C, "number", C.value);
        }
        switch (W = y ? Kn(y) : window, e) {
          case "focusin":
            (ra(W) || W.contentEditable === "true") && (Bn = W, yl = y, Mr = null);
            break;
          case "focusout":
            Mr = yl = Bn = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wl = !1, pa(x, n, k);
            break;
          case "selectionchange":
            if (E1)
              break;
          case "keydown":
          case "keyup":
            pa(x, n, k);
        }
        var $;
        if (hl)
          e: {
            switch (e) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break e;
              case "compositionend":
                Q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break e;
            }
            Q = void 0;
          }
        else
          $n ? ta(e, n) && (Q = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Q = "onCompositionStart");
        Q && (Ju && n.locale !== "ko" && ($n || Q !== "onCompositionStart" ? Q === "onCompositionEnd" && $n && ($ = Ku()) : (en = k, ul = "value" in en ? en.value : en.textContent, $n = !0)), W = Ro(y, Q), 0 < W.length && (Q = new Xu(Q, e, null, n, k), x.push({ event: Q, listeners: W }), $ ? Q.data = $ : ($ = na(n), $ !== null && (Q.data = $)))), ($ = u1 ? a1(e, n) : c1(e, n)) && (y = Ro(y, "onBeforeInput"), 0 < y.length && (k = new Xu("onBeforeInput", "beforeinput", null, n, k), x.push({ event: k, listeners: y }), k.data = $));
      }
      Ca(x, t);
    });
  }
  function Ur(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ro(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, l = o.stateNode;
      o.tag === 5 && l !== null && (o = l, l = Er(e, n), l != null && r.unshift(Ur(e, l, o)), l = Er(e, t), l != null && r.push(Ur(e, l, o))), e = e.return;
    }
    return r;
  }
  function Qn(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function xa(e, t, n, r, o) {
    for (var l = t._reactName, a = []; n !== null && n !== r; ) {
      var d = n, p = d.alternate, y = d.stateNode;
      if (p !== null && p === r)
        break;
      d.tag === 5 && y !== null && (d = y, o ? (p = Er(n, l), p != null && a.unshift(Ur(n, p, d))) : o || (p = Er(n, l), p != null && a.push(Ur(n, p, d)))), n = n.return;
    }
    a.length !== 0 && e.push({ event: t, listeners: a });
  }
  var x1 = /\r\n?/g, _1 = /\u0000|\uFFFD/g;
  function _a(e) {
    return (typeof e == "string" ? e : "" + e).replace(x1, `
`).replace(_1, "");
  }
  function Ao(e, t, n) {
    if (t = _a(t), _a(e) !== t && n)
      throw Error(u(425));
  }
  function Io() {
  }
  var _l = null, Tl = null;
  function Ll(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Nl = typeof setTimeout == "function" ? setTimeout : void 0, T1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ta = typeof Promise == "function" ? Promise : void 0, L1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ta < "u" ? function(e) {
    return Ta.resolve(null).then(e).catch(N1);
  } : Nl;
  function N1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Pl(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$") {
          if (r === 0) {
            e.removeChild(o), Pr(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    Pr(t);
  }
  function nn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function La(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Zn = Math.random().toString(36).slice(2), At = "__reactFiber$" + Zn, Vr = "__reactProps$" + Zn, Ft = "__reactContainer$" + Zn, Rl = "__reactEvents$" + Zn, P1 = "__reactListeners$" + Zn, R1 = "__reactHandles$" + Zn;
  function yn(e) {
    var t = e[At];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ft] || n[At]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = La(e); e !== null; ) {
            if (n = e[At])
              return n;
            e = La(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Wr(e) {
    return e = e[At] || e[Ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Kn(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(u(33));
  }
  function Oo(e) {
    return e[Vr] || null;
  }
  var Al = [], Yn = -1;
  function rn(e) {
    return { current: e };
  }
  function we(e) {
    0 > Yn || (e.current = Al[Yn], Al[Yn] = null, Yn--);
  }
  function ve(e, t) {
    Yn++, Al[Yn] = e.current, e.current = t;
  }
  var on = {}, Be = rn(on), qe = rn(!1), wn = on;
  function Gn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return on;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, l;
    for (l in n)
      o[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Je(e) {
    return e = e.childContextTypes, e != null;
  }
  function jo() {
    we(qe), we(Be);
  }
  function Na(e, t, n) {
    if (Be.current !== on)
      throw Error(u(168));
    ve(Be, t), ve(qe, n);
  }
  function Pa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var o in r)
      if (!(o in t))
        throw Error(u(108, ue(e) || "Unknown", o));
    return f({}, n, r);
  }
  function zo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, wn = Be.current, ve(Be, e), ve(qe, qe.current), !0;
  }
  function Ra(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(u(169));
    n ? (e = Pa(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, we(qe), we(Be), ve(Be, e)) : we(qe), ve(qe, n);
  }
  var Ut = null, Mo = !1, Il = !1;
  function Aa(e) {
    Ut === null ? Ut = [e] : Ut.push(e);
  }
  function A1(e) {
    Mo = !0, Aa(e);
  }
  function ln() {
    if (!Il && Ut !== null) {
      Il = !0;
      var e = 0, t = he;
      try {
        var n = Ut;
        for (he = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ut = null, Mo = !1;
      } catch (o) {
        throw Ut !== null && (Ut = Ut.slice(e + 1)), Ou(el, ln), o;
      } finally {
        he = t, Il = !1;
      }
    }
    return null;
  }
  var Xn = [], qn = 0, Do = null, Fo = 0, ct = [], dt = 0, En = null, Vt = 1, Wt = "";
  function Sn(e, t) {
    Xn[qn++] = Fo, Xn[qn++] = Do, Do = e, Fo = t;
  }
  function Ia(e, t, n) {
    ct[dt++] = Vt, ct[dt++] = Wt, ct[dt++] = En, En = e;
    var r = Vt;
    e = Wt;
    var o = 32 - St(r) - 1;
    r &= ~(1 << o), n += 1;
    var l = 32 - St(t) + o;
    if (30 < l) {
      var a = o - o % 5;
      l = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Vt = 1 << 32 - St(t) + o | n << o | r, Wt = l + e;
    } else
      Vt = 1 << l | n << o | r, Wt = e;
  }
  function Ol(e) {
    e.return !== null && (Sn(e, 1), Ia(e, 1, 0));
  }
  function jl(e) {
    for (; e === Do; )
      Do = Xn[--qn], Xn[qn] = null, Fo = Xn[--qn], Xn[qn] = null;
    for (; e === En; )
      En = ct[--dt], ct[dt] = null, Wt = ct[--dt], ct[dt] = null, Vt = ct[--dt], ct[dt] = null;
  }
  var it = null, lt = null, Se = !1, kt = null;
  function Oa(e, t) {
    var n = mt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ja(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, it = e, lt = nn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, it = e, lt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Vt, overflow: Wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, it = e, lt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function zl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ml(e) {
    if (Se) {
      var t = lt;
      if (t) {
        var n = t;
        if (!ja(e, t)) {
          if (zl(e))
            throw Error(u(418));
          t = nn(n.nextSibling);
          var r = it;
          t && ja(e, t) ? Oa(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, it = e);
        }
      } else {
        if (zl(e))
          throw Error(u(418));
        e.flags = e.flags & -4097 | 2, Se = !1, it = e;
      }
    }
  }
  function za(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    it = e;
  }
  function Uo(e) {
    if (e !== it)
      return !1;
    if (!Se)
      return za(e), Se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ll(e.type, e.memoizedProps)), t && (t = lt)) {
      if (zl(e))
        throw Ma(), Error(u(418));
      for (; t; )
        Oa(e, t), t = nn(t.nextSibling);
    }
    if (za(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                lt = nn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        lt = null;
      }
    } else
      lt = it ? nn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ma() {
    for (var e = lt; e; )
      e = nn(e.nextSibling);
  }
  function Jn() {
    lt = it = null, Se = !1;
  }
  function Dl(e) {
    kt === null ? kt = [e] : kt.push(e);
  }
  var I1 = X.ReactCurrentBatchConfig;
  function xt(e, t) {
    if (e && e.defaultProps) {
      t = f({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Vo = rn(null), Wo = null, bn = null, Fl = null;
  function Ul() {
    Fl = bn = Wo = null;
  }
  function Vl(e) {
    var t = Vo.current;
    we(Vo), e._currentValue = t;
  }
  function Wl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function er(e, t) {
    Wo = e, Fl = bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (be = !0), e.firstContext = null);
  }
  function ft(e) {
    var t = e._currentValue;
    if (Fl !== e)
      if (e = { context: e, memoizedValue: t, next: null }, bn === null) {
        if (Wo === null)
          throw Error(u(308));
        bn = e, Wo.dependencies = { lanes: 0, firstContext: e };
      } else
        bn = bn.next = e;
    return t;
  }
  var Cn = null;
  function $l(e) {
    Cn === null ? Cn = [e] : Cn.push(e);
  }
  function Da(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, $l(t)) : (n.next = o.next, o.next = n), t.interleaved = n, $t(e, r);
  }
  function $t(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var sn = !1;
  function Bl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function un(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, le & 2) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, $t(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, $l(r)) : (t.next = o.next, o.next = t), r.interleaved = t, $t(e, n);
  }
  function $o(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  function Ua(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? o = l = a : l = l.next = a, n = n.next;
        } while (n !== null);
        l === null ? o = l = t : l = l.next = t;
      } else
        o = l = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Bo(e, t, n, r) {
    var o = e.updateQueue;
    sn = !1;
    var l = o.firstBaseUpdate, a = o.lastBaseUpdate, d = o.shared.pending;
    if (d !== null) {
      o.shared.pending = null;
      var p = d, y = p.next;
      p.next = null, a === null ? l = y : a.next = y, a = p;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, d = k.lastBaseUpdate, d !== a && (d === null ? k.firstBaseUpdate = y : d.next = y, k.lastBaseUpdate = p));
    }
    if (l !== null) {
      var x = o.baseState;
      a = 0, k = y = p = null, d = l;
      do {
        var C = d.lane, P = d.eventTime;
        if ((r & C) === C) {
          k !== null && (k = k.next = {
            eventTime: P,
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          });
          e: {
            var I = e, O = d;
            switch (C = t, P = n, O.tag) {
              case 1:
                if (I = O.payload, typeof I == "function") {
                  x = I.call(P, x, C);
                  break e;
                }
                x = I;
                break e;
              case 3:
                I.flags = I.flags & -65537 | 128;
              case 0:
                if (I = O.payload, C = typeof I == "function" ? I.call(P, x, C) : I, C == null)
                  break e;
                x = f({}, x, C);
                break e;
              case 2:
                sn = !0;
            }
          }
          d.callback !== null && d.lane !== 0 && (e.flags |= 64, C = o.effects, C === null ? o.effects = [d] : C.push(d));
        } else
          P = { eventTime: P, lane: C, tag: d.tag, payload: d.payload, callback: d.callback, next: null }, k === null ? (y = k = P, p = x) : k = k.next = P, a |= C;
        if (d = d.next, d === null) {
          if (d = o.shared.pending, d === null)
            break;
          C = d, d = C.next, C.next = null, o.lastBaseUpdate = C, o.shared.pending = null;
        }
      } while (!0);
      if (k === null && (p = x), o.baseState = p, o.firstBaseUpdate = y, o.lastBaseUpdate = k, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          a |= o.lane, o = o.next;
        while (o !== t);
      } else
        l === null && (o.shared.lanes = 0);
      _n |= a, e.lanes = a, e.memoizedState = x;
    }
  }
  function Va(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], o = r.callback;
        if (o !== null) {
          if (r.callback = null, r = n, typeof o != "function")
            throw Error(u(191, o));
          o.call(r);
        }
      }
  }
  var Wa = new i.Component().refs;
  function Hl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : f({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ho = { isMounted: function(e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), o = fn(e), l = Bt(r, o);
    l.payload = t, n != null && (l.callback = n), t = un(e, l, o), t !== null && (Lt(t, e, o, r), $o(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), o = fn(e), l = Bt(r, o);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = un(e, l, o), t !== null && (Lt(t, e, o, r), $o(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Xe(), r = fn(e), o = Bt(n, r);
    o.tag = 2, t != null && (o.callback = t), t = un(e, o, r), t !== null && (Lt(t, e, r, n), $o(t, e, r));
  } };
  function $a(e, t, n, r, o, l, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, a) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(o, l) : !0;
  }
  function Ba(e, t, n) {
    var r = !1, o = on, l = t.contextType;
    return typeof l == "object" && l !== null ? l = ft(l) : (o = Je(t) ? wn : Be.current, r = t.contextTypes, l = (r = r != null) ? Gn(e, o) : on), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ho, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function Ha(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ho.enqueueReplaceState(t, t.state, null);
  }
  function Ql(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = Wa, Bl(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = ft(l) : (l = Je(t) ? wn : Be.current, o.context = Gn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Hl(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ho.enqueueReplaceState(o, o.state, null), Bo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function $r(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(u(147, e));
        var o = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(a) {
          var d = o.refs;
          d === Wa && (d = o.refs = {}), a === null ? delete d[l] : d[l] = a;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string")
        throw Error(u(284));
      if (!n._owner)
        throw Error(u(290, e));
    }
    return e;
  }
  function Qo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Qa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Za(e) {
    function t(g, h) {
      if (e) {
        var v = g.deletions;
        v === null ? (g.deletions = [h], g.flags |= 16) : v.push(h);
      }
    }
    function n(g, h) {
      if (!e)
        return null;
      for (; h !== null; )
        t(g, h), h = h.sibling;
      return null;
    }
    function r(g, h) {
      for (g = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
      return g;
    }
    function o(g, h) {
      return g = hn(g, h), g.index = 0, g.sibling = null, g;
    }
    function l(g, h, v) {
      return g.index = v, e ? (v = g.alternate, v !== null ? (v = v.index, v < h ? (g.flags |= 2, h) : v) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
    }
    function a(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function d(g, h, v, T) {
      return h === null || h.tag !== 6 ? (h = Ns(v, g.mode, T), h.return = g, h) : (h = o(h, v), h.return = g, h);
    }
    function p(g, h, v, T) {
      var j = v.type;
      return j === U ? k(g, h, v.props.children, T, v.key) : h !== null && (h.elementType === j || typeof j == "object" && j !== null && j.$$typeof === $e && Qa(j) === h.type) ? (T = o(h, v.props), T.ref = $r(g, h, v), T.return = g, T) : (T = ci(v.type, v.key, v.props, null, g.mode, T), T.ref = $r(g, h, v), T.return = g, T);
    }
    function y(g, h, v, T) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = Ps(v, g.mode, T), h.return = g, h) : (h = o(h, v.children || []), h.return = g, h);
    }
    function k(g, h, v, T, j) {
      return h === null || h.tag !== 7 ? (h = Pn(v, g.mode, T, j), h.return = g, h) : (h = o(h, v), h.return = g, h);
    }
    function x(g, h, v) {
      if (typeof h == "string" && h !== "" || typeof h == "number")
        return h = Ns("" + h, g.mode, v), h.return = g, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case oe:
            return v = ci(h.type, h.key, h.props, null, g.mode, v), v.ref = $r(g, null, h), v.return = g, v;
          case H:
            return h = Ps(h, g.mode, v), h.return = g, h;
          case $e:
            var T = h._init;
            return x(g, T(h._payload), v);
        }
        if (vr(h) || z(h))
          return h = Pn(h, g.mode, v, null), h.return = g, h;
        Qo(g, h);
      }
      return null;
    }
    function C(g, h, v, T) {
      var j = h !== null ? h.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number")
        return j !== null ? null : d(g, h, "" + v, T);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case oe:
            return v.key === j ? p(g, h, v, T) : null;
          case H:
            return v.key === j ? y(g, h, v, T) : null;
          case $e:
            return j = v._init, C(
              g,
              h,
              j(v._payload),
              T
            );
        }
        if (vr(v) || z(v))
          return j !== null ? null : k(g, h, v, T, null);
        Qo(g, v);
      }
      return null;
    }
    function P(g, h, v, T, j) {
      if (typeof T == "string" && T !== "" || typeof T == "number")
        return g = g.get(v) || null, d(h, g, "" + T, j);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case oe:
            return g = g.get(T.key === null ? v : T.key) || null, p(h, g, T, j);
          case H:
            return g = g.get(T.key === null ? v : T.key) || null, y(h, g, T, j);
          case $e:
            var W = T._init;
            return P(g, h, v, W(T._payload), j);
        }
        if (vr(T) || z(T))
          return g = g.get(v) || null, k(h, g, T, j, null);
        Qo(h, T);
      }
      return null;
    }
    function I(g, h, v, T) {
      for (var j = null, W = null, $ = h, Q = h = 0, Me = null; $ !== null && Q < v.length; Q++) {
        $.index > Q ? (Me = $, $ = null) : Me = $.sibling;
        var ae = C(g, $, v[Q], T);
        if (ae === null) {
          $ === null && ($ = Me);
          break;
        }
        e && $ && ae.alternate === null && t(g, $), h = l(ae, h, Q), W === null ? j = ae : W.sibling = ae, W = ae, $ = Me;
      }
      if (Q === v.length)
        return n(g, $), Se && Sn(g, Q), j;
      if ($ === null) {
        for (; Q < v.length; Q++)
          $ = x(g, v[Q], T), $ !== null && (h = l($, h, Q), W === null ? j = $ : W.sibling = $, W = $);
        return Se && Sn(g, Q), j;
      }
      for ($ = r(g, $); Q < v.length; Q++)
        Me = P($, g, Q, v[Q], T), Me !== null && (e && Me.alternate !== null && $.delete(Me.key === null ? Q : Me.key), h = l(Me, h, Q), W === null ? j = Me : W.sibling = Me, W = Me);
      return e && $.forEach(function(mn) {
        return t(g, mn);
      }), Se && Sn(g, Q), j;
    }
    function O(g, h, v, T) {
      var j = z(v);
      if (typeof j != "function")
        throw Error(u(150));
      if (v = j.call(v), v == null)
        throw Error(u(151));
      for (var W = j = null, $ = h, Q = h = 0, Me = null, ae = v.next(); $ !== null && !ae.done; Q++, ae = v.next()) {
        $.index > Q ? (Me = $, $ = null) : Me = $.sibling;
        var mn = C(g, $, ae.value, T);
        if (mn === null) {
          $ === null && ($ = Me);
          break;
        }
        e && $ && mn.alternate === null && t(g, $), h = l(mn, h, Q), W === null ? j = mn : W.sibling = mn, W = mn, $ = Me;
      }
      if (ae.done)
        return n(
          g,
          $
        ), Se && Sn(g, Q), j;
      if ($ === null) {
        for (; !ae.done; Q++, ae = v.next())
          ae = x(g, ae.value, T), ae !== null && (h = l(ae, h, Q), W === null ? j = ae : W.sibling = ae, W = ae);
        return Se && Sn(g, Q), j;
      }
      for ($ = r(g, $); !ae.done; Q++, ae = v.next())
        ae = P($, g, Q, ae.value, T), ae !== null && (e && ae.alternate !== null && $.delete(ae.key === null ? Q : ae.key), h = l(ae, h, Q), W === null ? j = ae : W.sibling = ae, W = ae);
      return e && $.forEach(function(dp) {
        return t(g, dp);
      }), Se && Sn(g, Q), j;
    }
    function Ne(g, h, v, T) {
      if (typeof v == "object" && v !== null && v.type === U && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case oe:
            e: {
              for (var j = v.key, W = h; W !== null; ) {
                if (W.key === j) {
                  if (j = v.type, j === U) {
                    if (W.tag === 7) {
                      n(g, W.sibling), h = o(W, v.props.children), h.return = g, g = h;
                      break e;
                    }
                  } else if (W.elementType === j || typeof j == "object" && j !== null && j.$$typeof === $e && Qa(j) === W.type) {
                    n(g, W.sibling), h = o(W, v.props), h.ref = $r(g, W, v), h.return = g, g = h;
                    break e;
                  }
                  n(g, W);
                  break;
                } else
                  t(g, W);
                W = W.sibling;
              }
              v.type === U ? (h = Pn(v.props.children, g.mode, T, v.key), h.return = g, g = h) : (T = ci(v.type, v.key, v.props, null, g.mode, T), T.ref = $r(g, h, v), T.return = g, g = T);
            }
            return a(g);
          case H:
            e: {
              for (W = v.key; h !== null; ) {
                if (h.key === W)
                  if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                    n(g, h.sibling), h = o(h, v.children || []), h.return = g, g = h;
                    break e;
                  } else {
                    n(g, h);
                    break;
                  }
                else
                  t(g, h);
                h = h.sibling;
              }
              h = Ps(v, g.mode, T), h.return = g, g = h;
            }
            return a(g);
          case $e:
            return W = v._init, Ne(g, h, W(v._payload), T);
        }
        if (vr(v))
          return I(g, h, v, T);
        if (z(v))
          return O(g, h, v, T);
        Qo(g, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, v), h.return = g, g = h) : (n(g, h), h = Ns(v, g.mode, T), h.return = g, g = h), a(g)) : n(g, h);
    }
    return Ne;
  }
  var tr = Za(!0), Ka = Za(!1), Br = {}, It = rn(Br), Hr = rn(Br), Qr = rn(Br);
  function kn(e) {
    if (e === Br)
      throw Error(u(174));
    return e;
  }
  function Zl(e, t) {
    switch (ve(Qr, t), ve(Hr, e), ve(It, Br), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qi(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qi(t, e);
    }
    we(It), ve(It, t);
  }
  function nr() {
    we(It), we(Hr), we(Qr);
  }
  function Ya(e) {
    kn(Qr.current);
    var t = kn(It.current), n = Qi(t, e.type);
    t !== n && (ve(Hr, e), ve(It, n));
  }
  function Kl(e) {
    Hr.current === e && (we(It), we(Hr));
  }
  var Ce = rn(0);
  function Zo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Yl = [];
  function Gl() {
    for (var e = 0; e < Yl.length; e++)
      Yl[e]._workInProgressVersionPrimary = null;
    Yl.length = 0;
  }
  var Ko = X.ReactCurrentDispatcher, Xl = X.ReactCurrentBatchConfig, xn = 0, ke = null, Ie = null, je = null, Yo = !1, Zr = !1, Kr = 0, O1 = 0;
  function He() {
    throw Error(u(321));
  }
  function ql(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ct(e[n], t[n]))
        return !1;
    return !0;
  }
  function Jl(e, t, n, r, o, l) {
    if (xn = l, ke = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? D1 : F1, e = n(r, o), Zr) {
      l = 0;
      do {
        if (Zr = !1, Kr = 0, 25 <= l)
          throw Error(u(301));
        l += 1, je = Ie = null, t.updateQueue = null, Ko.current = U1, e = n(r, o);
      } while (Zr);
    }
    if (Ko.current = qo, t = Ie !== null && Ie.next !== null, xn = 0, je = Ie = ke = null, Yo = !1, t)
      throw Error(u(300));
    return e;
  }
  function bl() {
    var e = Kr !== 0;
    return Kr = 0, e;
  }
  function Ot() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return je === null ? ke.memoizedState = je = e : je = je.next = e, je;
  }
  function pt() {
    if (Ie === null) {
      var e = ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = Ie.next;
    var t = je === null ? ke.memoizedState : je.next;
    if (t !== null)
      je = t, Ie = e;
    else {
      if (e === null)
        throw Error(u(310));
      Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, je === null ? ke.memoizedState = je = e : je = je.next = e;
    }
    return je;
  }
  function Yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function es(e) {
    var t = pt(), n = t.queue;
    if (n === null)
      throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ie, o = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (o !== null) {
        var a = o.next;
        o.next = l.next, l.next = a;
      }
      r.baseQueue = o = l, n.pending = null;
    }
    if (o !== null) {
      l = o.next, r = r.baseState;
      var d = a = null, p = null, y = l;
      do {
        var k = y.lane;
        if ((xn & k) === k)
          p !== null && (p = p.next = { lane: 0, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), r = y.hasEagerState ? y.eagerState : e(r, y.action);
        else {
          var x = {
            lane: k,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          };
          p === null ? (d = p = x, a = r) : p = p.next = x, ke.lanes |= k, _n |= k;
        }
        y = y.next;
      } while (y !== null && y !== l);
      p === null ? a = r : p.next = d, Ct(r, t.memoizedState) || (be = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = p, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        l = o.lane, ke.lanes |= l, _n |= l, o = o.next;
      while (o !== e);
    } else
      o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ts(e) {
    var t = pt(), n = t.queue;
    if (n === null)
      throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, l = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var a = o = o.next;
      do
        l = e(l, a.action), a = a.next;
      while (a !== o);
      Ct(l, t.memoizedState) || (be = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Ga() {
  }
  function Xa(e, t) {
    var n = ke, r = pt(), o = t(), l = !Ct(r.memoizedState, o);
    if (l && (r.memoizedState = o, be = !0), r = r.queue, ns(ba.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || je !== null && je.memoizedState.tag & 1) {
      if (n.flags |= 2048, Gr(9, Ja.bind(null, n, r, o, t), void 0, null), ze === null)
        throw Error(u(349));
      xn & 30 || qa(n, t, o);
    }
    return o;
  }
  function qa(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ja(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ec(t) && tc(e);
  }
  function ba(e, t, n) {
    return n(function() {
      ec(t) && tc(e);
    });
  }
  function ec(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ct(e, n);
    } catch {
      return !0;
    }
  }
  function tc(e) {
    var t = $t(e, 1);
    t !== null && Lt(t, e, 1, -1);
  }
  function nc(e) {
    var t = Ot();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yr, lastRenderedState: e }, t.queue = e, e = e.dispatch = M1.bind(null, ke, e), [t.memoizedState, e];
  }
  function Gr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ke.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ke.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function rc() {
    return pt().memoizedState;
  }
  function Go(e, t, n, r) {
    var o = Ot();
    ke.flags |= e, o.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Xo(e, t, n, r) {
    var o = pt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (Ie !== null) {
      var a = Ie.memoizedState;
      if (l = a.destroy, r !== null && ql(r, a.deps)) {
        o.memoizedState = Gr(t, n, l, r);
        return;
      }
    }
    ke.flags |= e, o.memoizedState = Gr(1 | t, n, l, r);
  }
  function oc(e, t) {
    return Go(8390656, 8, e, t);
  }
  function ns(e, t) {
    return Xo(2048, 8, e, t);
  }
  function ic(e, t) {
    return Xo(4, 2, e, t);
  }
  function lc(e, t) {
    return Xo(4, 4, e, t);
  }
  function sc(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function uc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Xo(4, 4, sc.bind(null, t, e), n);
  }
  function rs() {
  }
  function ac(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ql(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function cc(e, t) {
    var n = pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ql(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function dc(e, t, n) {
    return xn & 21 ? (Ct(n, t) || (n = Du(), ke.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, be = !0), e.memoizedState = n);
  }
  function j1(e, t) {
    var n = he;
    he = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Xl.transition;
    Xl.transition = {};
    try {
      e(!1), t();
    } finally {
      he = n, Xl.transition = r;
    }
  }
  function fc() {
    return pt().memoizedState;
  }
  function z1(e, t, n) {
    var r = fn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, pc(e))
      hc(t, n);
    else if (n = Da(e, t, n, r), n !== null) {
      var o = Xe();
      Lt(n, e, r, o), mc(n, t, r);
    }
  }
  function M1(e, t, n) {
    var r = fn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (pc(e))
      hc(t, o);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null))
        try {
          var a = t.lastRenderedState, d = l(a, n);
          if (o.hasEagerState = !0, o.eagerState = d, Ct(d, a)) {
            var p = t.interleaved;
            p === null ? (o.next = o, $l(t)) : (o.next = p.next, p.next = o), t.interleaved = o;
            return;
          }
        } catch {
        } finally {
        }
      n = Da(e, t, o, r), n !== null && (o = Xe(), Lt(n, e, r, o), mc(n, t, r));
    }
  }
  function pc(e) {
    var t = e.alternate;
    return e === ke || t !== null && t === ke;
  }
  function hc(e, t) {
    Zr = Yo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function mc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  var qo = { readContext: ft, useCallback: He, useContext: He, useEffect: He, useImperativeHandle: He, useInsertionEffect: He, useLayoutEffect: He, useMemo: He, useReducer: He, useRef: He, useState: He, useDebugValue: He, useDeferredValue: He, useTransition: He, useMutableSource: He, useSyncExternalStore: He, useId: He, unstable_isNewReconciler: !1 }, D1 = { readContext: ft, useCallback: function(e, t) {
    return Ot().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ft, useEffect: oc, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Go(
      4194308,
      4,
      sc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Go(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Go(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Ot();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Ot();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = z1.bind(null, ke, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Ot();
    return e = { current: e }, t.memoizedState = e;
  }, useState: nc, useDebugValue: rs, useDeferredValue: function(e) {
    return Ot().memoizedState = e;
  }, useTransition: function() {
    var e = nc(!1), t = e[0];
    return e = j1.bind(null, e[1]), Ot().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ke, o = Ot();
    if (Se) {
      if (n === void 0)
        throw Error(u(407));
      n = n();
    } else {
      if (n = t(), ze === null)
        throw Error(u(349));
      xn & 30 || qa(r, t, n);
    }
    o.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return o.queue = l, oc(ba.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, Gr(9, Ja.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = Ot(), t = ze.identifierPrefix;
    if (Se) {
      var n = Wt, r = Vt;
      n = (r & ~(1 << 32 - St(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = O1++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, F1 = {
    readContext: ft,
    useCallback: ac,
    useContext: ft,
    useEffect: ns,
    useImperativeHandle: uc,
    useInsertionEffect: ic,
    useLayoutEffect: lc,
    useMemo: cc,
    useReducer: es,
    useRef: rc,
    useState: function() {
      return es(Yr);
    },
    useDebugValue: rs,
    useDeferredValue: function(e) {
      var t = pt();
      return dc(t, Ie.memoizedState, e);
    },
    useTransition: function() {
      var e = es(Yr)[0], t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ga,
    useSyncExternalStore: Xa,
    useId: fc,
    unstable_isNewReconciler: !1
  }, U1 = { readContext: ft, useCallback: ac, useContext: ft, useEffect: ns, useImperativeHandle: uc, useInsertionEffect: ic, useLayoutEffect: lc, useMemo: cc, useReducer: ts, useRef: rc, useState: function() {
    return ts(Yr);
  }, useDebugValue: rs, useDeferredValue: function(e) {
    var t = pt();
    return Ie === null ? t.memoizedState = e : dc(t, Ie.memoizedState, e);
  }, useTransition: function() {
    var e = ts(Yr)[0], t = pt().memoizedState;
    return [e, t];
  }, useMutableSource: Ga, useSyncExternalStore: Xa, useId: fc, unstable_isNewReconciler: !1 };
  function rr(e, t) {
    try {
      var n = "", r = t;
      do
        n += de(r), r = r.return;
      while (r);
      var o = n;
    } catch (l) {
      o = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function os(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function is(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var V1 = typeof WeakMap == "function" ? WeakMap : Map;
  function gc(e, t, n) {
    n = Bt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      oi || (oi = !0, Es = r), is(e, t);
    }, n;
  }
  function vc(e, t, n) {
    n = Bt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        is(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      is(e, t), typeof r != "function" && (cn === null ? cn = /* @__PURE__ */ new Set([this]) : cn.add(this));
      var a = t.stack;
      this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" });
    }), n;
  }
  function yc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new V1();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else
      o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = ep.bind(null, e, t, n), t.then(e, e));
  }
  function wc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ec(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1), t.tag = 2, un(n, t, 1))), n.lanes |= 1), e);
  }
  var W1 = X.ReactCurrentOwner, be = !1;
  function Ge(e, t, n, r) {
    t.child = e === null ? Ka(t, null, n, r) : tr(t, e.child, n, r);
  }
  function Sc(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return er(t, o), r = Jl(e, t, n, r, l, o), n = bl(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (Se && n && Ol(t), t.flags |= 1, Ge(e, t, r, o), t.child);
  }
  function Cc(e, t, n, r, o) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !Ls(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, kc(e, t, l, r, o)) : (e = ci(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, !(e.lanes & o)) {
      var a = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : zr, n(a, r) && e.ref === t.ref)
        return Ht(e, t, o);
    }
    return t.flags |= 1, e = hn(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function kc(e, t, n, r, o) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (zr(l, r) && e.ref === t.ref)
        if (be = !1, t.pendingProps = r = l, (e.lanes & o) !== 0)
          e.flags & 131072 && (be = !0);
        else
          return t.lanes = e.lanes, Ht(e, t, o);
    }
    return ls(e, t, n, r, o);
  }
  function xc(e, t, n) {
    var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ve(ir, st), st |= n;
      else {
        if (!(n & 1073741824))
          return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ve(ir, st), st |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, ve(ir, st), st |= r;
      }
    else
      l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ve(ir, st), st |= r;
    return Ge(e, t, o, n), t.child;
  }
  function _c(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ls(e, t, n, r, o) {
    var l = Je(n) ? wn : Be.current;
    return l = Gn(t, l), er(t, o), n = Jl(e, t, n, r, l, o), r = bl(), e !== null && !be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ht(e, t, o)) : (Se && r && Ol(t), t.flags |= 1, Ge(e, t, n, o), t.child);
  }
  function Tc(e, t, n, r, o) {
    if (Je(n)) {
      var l = !0;
      zo(t);
    } else
      l = !1;
    if (er(t, o), t.stateNode === null)
      bo(e, t), Ba(t, n, r), Ql(t, n, r, o), r = !0;
    else if (e === null) {
      var a = t.stateNode, d = t.memoizedProps;
      a.props = d;
      var p = a.context, y = n.contextType;
      typeof y == "object" && y !== null ? y = ft(y) : (y = Je(n) ? wn : Be.current, y = Gn(t, y));
      var k = n.getDerivedStateFromProps, x = typeof k == "function" || typeof a.getSnapshotBeforeUpdate == "function";
      x || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== r || p !== y) && Ha(t, a, r, y), sn = !1;
      var C = t.memoizedState;
      a.state = C, Bo(t, r, a, o), p = t.memoizedState, d !== r || C !== p || qe.current || sn ? (typeof k == "function" && (Hl(t, n, k, r), p = t.memoizedState), (d = sn || $a(t, n, d, r, C, p, y)) ? (x || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = y, r = d) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      a = t.stateNode, Fa(e, t), d = t.memoizedProps, y = t.type === t.elementType ? d : xt(t.type, d), a.props = y, x = t.pendingProps, C = a.context, p = n.contextType, typeof p == "object" && p !== null ? p = ft(p) : (p = Je(n) ? wn : Be.current, p = Gn(t, p));
      var P = n.getDerivedStateFromProps;
      (k = typeof P == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (d !== x || C !== p) && Ha(t, a, r, p), sn = !1, C = t.memoizedState, a.state = C, Bo(t, r, a, o);
      var I = t.memoizedState;
      d !== x || C !== I || qe.current || sn ? (typeof P == "function" && (Hl(t, n, P, r), I = t.memoizedState), (y = sn || $a(t, n, y, r, C, I, p) || !1) ? (k || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, I, p), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, I, p)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = I), a.props = r, a.state = I, a.context = p, r = y) : (typeof a.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ss(e, t, n, r, l, o);
  }
  function ss(e, t, n, r, o, l) {
    _c(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
      return o && Ra(t, n, !1), Ht(e, t, l);
    r = t.stateNode, W1.current = t;
    var d = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = tr(t, e.child, null, l), t.child = tr(t, null, d, l)) : Ge(e, t, d, l), t.memoizedState = r.state, o && Ra(t, n, !0), t.child;
  }
  function Lc(e) {
    var t = e.stateNode;
    t.pendingContext ? Na(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Na(e, t.context, !1), Zl(e, t.containerInfo);
  }
  function Nc(e, t, n, r, o) {
    return Jn(), Dl(o), t.flags |= 256, Ge(e, t, n, r), t.child;
  }
  var us = { dehydrated: null, treeContext: null, retryLane: 0 };
  function as(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Pc(e, t, n) {
    var r = t.pendingProps, o = Ce.current, l = !1, a = (t.flags & 128) !== 0, d;
    if ((d = a) || (d = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), d ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ve(Ce, o & 1), e === null)
      return Ml(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (a = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, a = { mode: "hidden", children: a }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = a) : l = di(a, r, 0, null), e = Pn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = as(n), t.memoizedState = us, e) : cs(t, a));
    if (o = e.memoizedState, o !== null && (d = o.dehydrated, d !== null))
      return $1(e, t, a, r, d, o, n);
    if (l) {
      l = r.fallback, a = t.mode, o = e.child, d = o.sibling;
      var p = { mode: "hidden", children: r.children };
      return !(a & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = p, t.deletions = null) : (r = hn(o, p), r.subtreeFlags = o.subtreeFlags & 14680064), d !== null ? l = hn(d, l) : (l = Pn(l, a, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, a = e.child.memoizedState, a = a === null ? as(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }, l.memoizedState = a, l.childLanes = e.childLanes & ~n, t.memoizedState = us, r;
    }
    return l = e.child, e = l.sibling, r = hn(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function cs(e, t) {
    return t = di({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Jo(e, t, n, r) {
    return r !== null && Dl(r), tr(t, e.child, null, n), e = cs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function $1(e, t, n, r, o, l, a) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = os(Error(u(422))), Jo(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = di({ mode: "visible", children: r.children }, o, 0, null), l = Pn(l, o, a, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && tr(t, e.child, null, a), t.child.memoizedState = as(a), t.memoizedState = us, l);
    if (!(t.mode & 1))
      return Jo(e, t, a, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r)
        var d = r.dgst;
      return r = d, l = Error(u(419)), r = os(l, r, void 0), Jo(e, t, a, r);
    }
    if (d = (a & e.childLanes) !== 0, be || d) {
      if (r = ze, r !== null) {
        switch (a & -a) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = o & (r.suspendedLanes | a) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, $t(e, o), Lt(r, e, o, -1));
      }
      return Ts(), r = os(Error(u(421))), Jo(e, t, a, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = tp.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, lt = nn(o.nextSibling), it = t, Se = !0, kt = null, e !== null && (ct[dt++] = Vt, ct[dt++] = Wt, ct[dt++] = En, Vt = e.id, Wt = e.overflow, En = t), t = cs(t, r.children), t.flags |= 4096, t);
  }
  function Rc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wl(e.return, t, n);
  }
  function ds(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
  }
  function Ac(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, l = r.tail;
    if (Ge(e, t, r.children, n), r = Ce.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Rc(e, n, t);
            else if (e.tag === 19)
              Rc(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (ve(Ce, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            e = n.alternate, e !== null && Zo(e) === null && (o = n), n = n.sibling;
          n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ds(t, !1, o, n, l);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Zo(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = n, n = o, o = e;
          }
          ds(t, !0, n, null, l);
          break;
        case "together":
          ds(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function bo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = hn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function B1(e, t, n) {
    switch (t.tag) {
      case 3:
        Lc(t), Jn();
        break;
      case 5:
        Ya(t);
        break;
      case 1:
        Je(t.type) && zo(t);
        break;
      case 4:
        Zl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ve(Vo, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ve(Ce, Ce.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Pc(e, t, n) : (ve(Ce, Ce.current & 1), e = Ht(e, t, n), e !== null ? e.sibling : null);
        ve(Ce, Ce.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Ac(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ve(Ce, Ce.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, xc(e, t, n);
    }
    return Ht(e, t, n);
  }
  var Ic, fs, Oc, jc;
  Ic = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, fs = function() {
  }, Oc = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, kn(It.current);
      var l = null;
      switch (n) {
        case "input":
          o = Wi(e, o), r = Wi(e, r), l = [];
          break;
        case "select":
          o = f({}, o, { value: void 0 }), r = f({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          o = Hi(e, o), r = Hi(e, r), l = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Io);
      }
      Zi(n, r);
      var a;
      n = null;
      for (y in o)
        if (!r.hasOwnProperty(y) && o.hasOwnProperty(y) && o[y] != null)
          if (y === "style") {
            var d = o[y];
            for (a in d)
              d.hasOwnProperty(a) && (n || (n = {}), n[a] = "");
          } else
            y !== "dangerouslySetInnerHTML" && y !== "children" && y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (m.hasOwnProperty(y) ? l || (l = []) : (l = l || []).push(y, null));
      for (y in r) {
        var p = r[y];
        if (d = o != null ? o[y] : void 0, r.hasOwnProperty(y) && p !== d && (p != null || d != null))
          if (y === "style")
            if (d) {
              for (a in d)
                !d.hasOwnProperty(a) || p && p.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
              for (a in p)
                p.hasOwnProperty(a) && d[a] !== p[a] && (n || (n = {}), n[a] = p[a]);
            } else
              n || (l || (l = []), l.push(
                y,
                n
              )), n = p;
          else
            y === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, d = d ? d.__html : void 0, p != null && d !== p && (l = l || []).push(y, p)) : y === "children" ? typeof p != "string" && typeof p != "number" || (l = l || []).push(y, "" + p) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && (m.hasOwnProperty(y) ? (p != null && y === "onScroll" && ye("scroll", e), l || d === p || (l = [])) : (l = l || []).push(y, p));
      }
      n && (l = l || []).push("style", n);
      var y = l;
      (t.updateQueue = y) && (t.flags |= 4);
    }
  }, jc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Xr(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function H1(e, t, n) {
    var r = t.pendingProps;
    switch (jl(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qe(t), null;
      case 1:
        return Je(t.type) && jo(), Qe(t), null;
      case 3:
        return r = t.stateNode, nr(), we(qe), we(Be), Gl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Uo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, kt !== null && (ks(kt), kt = null))), fs(e, t), Qe(t), null;
      case 5:
        Kl(t);
        var o = kn(Qr.current);
        if (n = t.type, e !== null && t.stateNode != null)
          Oc(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(u(166));
            return Qe(t), null;
          }
          if (e = kn(It.current), Uo(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[At] = t, r[Vr] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ye("cancel", r), ye("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Dr.length; o++)
                  ye(Dr[o], r);
                break;
              case "source":
                ye("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ye(
                  "error",
                  r
                ), ye("load", r);
                break;
              case "details":
                ye("toggle", r);
                break;
              case "input":
                pu(r, l), ye("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, ye("invalid", r);
                break;
              case "textarea":
                gu(r, l), ye("invalid", r);
            }
            Zi(n, l), o = null;
            for (var a in l)
              if (l.hasOwnProperty(a)) {
                var d = l[a];
                a === "children" ? typeof d == "string" ? r.textContent !== d && (l.suppressHydrationWarning !== !0 && Ao(r.textContent, d, e), o = ["children", d]) : typeof d == "number" && r.textContent !== "" + d && (l.suppressHydrationWarning !== !0 && Ao(
                  r.textContent,
                  d,
                  e
                ), o = ["children", "" + d]) : m.hasOwnProperty(a) && d != null && a === "onScroll" && ye("scroll", r);
              }
            switch (n) {
              case "input":
                Dt(r), mu(r, l, !0);
                break;
              case "textarea":
                Dt(r), yu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = Io);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            a = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, { is: r.is }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n), e[At] = t, e[Vr] = r, Ic(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (a = Ki(n, r), n) {
                case "dialog":
                  ye("cancel", e), ye("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ye("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Dr.length; o++)
                    ye(Dr[o], e);
                  o = r;
                  break;
                case "source":
                  ye("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ye(
                    "error",
                    e
                  ), ye("load", e), o = r;
                  break;
                case "details":
                  ye("toggle", e), o = r;
                  break;
                case "input":
                  pu(e, r), o = Wi(e, r), ye("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = f({}, r, { value: void 0 }), ye("invalid", e);
                  break;
                case "textarea":
                  gu(e, r), o = Hi(e, r), ye("invalid", e);
                  break;
                default:
                  o = r;
              }
              Zi(n, o), d = o;
              for (l in d)
                if (d.hasOwnProperty(l)) {
                  var p = d[l];
                  l === "style" ? Cu(e, p) : l === "dangerouslySetInnerHTML" ? (p = p ? p.__html : void 0, p != null && Eu(e, p)) : l === "children" ? typeof p == "string" ? (n !== "textarea" || p !== "") && yr(e, p) : typeof p == "number" && yr(e, "" + p) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (m.hasOwnProperty(l) ? p != null && l === "onScroll" && ye("scroll", e) : p != null && b(e, l, p, a));
                }
              switch (n) {
                case "input":
                  Dt(e), mu(e, r, !1);
                  break;
                case "textarea":
                  Dt(e), yu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + te(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? Dn(e, !!r.multiple, l, !1) : r.defaultValue != null && Dn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Io);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null)
          jc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(u(166));
          if (n = kn(Qr.current), kn(It.current), Uo(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (l = r.nodeValue !== n) && (e = it, e !== null))
              switch (e.tag) {
                case 3:
                  Ao(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Ao(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r;
        }
        return Qe(t), null;
      case 13:
        if (we(Ce), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Se && lt !== null && t.mode & 1 && !(t.flags & 128))
            Ma(), Jn(), t.flags |= 98560, l = !1;
          else if (l = Uo(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l)
                throw Error(u(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l)
                throw Error(u(317));
              l[At] = t;
            } else
              Jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Qe(t), l = !1;
          } else
            kt !== null && (ks(kt), kt = null), l = !0;
          if (!l)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ce.current & 1 ? Oe === 0 && (Oe = 3) : Ts())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
      case 4:
        return nr(), fs(e, t), e === null && Fr(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return Vl(t.type._context), Qe(t), null;
      case 17:
        return Je(t.type) && jo(), Qe(t), null;
      case 19:
        if (we(Ce), l = t.memoizedState, l === null)
          return Qe(t), null;
        if (r = (t.flags & 128) !== 0, a = l.rendering, a === null)
          if (r)
            Xr(l, !1);
          else {
            if (Oe !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (a = Zo(e), a !== null) {
                  for (t.flags |= 128, Xr(l, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    l = n, e = r, l.flags &= 14680066, a = l.alternate, a === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, e = a.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return ve(Ce, Ce.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Le() > lr && (t.flags |= 128, r = !0, Xr(l, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Zo(a), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Xr(l, !0), l.tail === null && l.tailMode === "hidden" && !a.alternate && !Se)
                return Qe(t), null;
            } else
              2 * Le() - l.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, Xr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (a.sibling = t.child, t.child = a) : (n = l.last, n !== null ? n.sibling = a : t.child = a, l.last = a);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = Le(), t.sibling = null, n = Ce.current, ve(Ce, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
      case 22:
      case 23:
        return _s(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? st & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Q1(e, t) {
    switch (jl(t), t.tag) {
      case 1:
        return Je(t.type) && jo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return nr(), we(qe), we(Be), Gl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Kl(t), null;
      case 13:
        if (we(Ce), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(u(340));
          Jn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return we(Ce), null;
      case 4:
        return nr(), null;
      case 10:
        return Vl(t.type._context), null;
      case 22:
      case 23:
        return _s(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ei = !1, Ze = !1, Z1 = typeof WeakSet == "function" ? WeakSet : Set, A = null;
  function or(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Te(e, t, r);
        }
      else
        n.current = null;
  }
  function ps(e, t, n) {
    try {
      n();
    } catch (r) {
      Te(e, t, r);
    }
  }
  var zc = !1;
  function K1(e, t) {
    if (_l = Eo, e = fa(), vl(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset, l = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var a = 0, d = -1, p = -1, y = 0, k = 0, x = e, C = null;
            t:
              for (; ; ) {
                for (var P; x !== n || o !== 0 && x.nodeType !== 3 || (d = a + o), x !== l || r !== 0 && x.nodeType !== 3 || (p = a + r), x.nodeType === 3 && (a += x.nodeValue.length), (P = x.firstChild) !== null; )
                  C = x, x = P;
                for (; ; ) {
                  if (x === e)
                    break t;
                  if (C === n && ++y === o && (d = a), C === l && ++k === r && (p = a), (P = x.nextSibling) !== null)
                    break;
                  x = C, C = x.parentNode;
                }
                x = P;
              }
            n = d === -1 || p === -1 ? null : { start: d, end: p };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (Tl = { focusedElem: e, selectionRange: n }, Eo = !1, A = t; A !== null; )
      if (t = A, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, A = e;
      else
        for (; A !== null; ) {
          t = A;
          try {
            var I = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (I !== null) {
                    var O = I.memoizedProps, Ne = I.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? O : xt(t.type, O), Ne);
                    g.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (T) {
            Te(t, t.return, T);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, A = e;
            break;
          }
          A = t.return;
        }
    return I = zc, zc = !1, I;
  }
  function qr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var l = o.destroy;
          o.destroy = void 0, l !== void 0 && ps(t, n, l);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function ti(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function hs(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Mc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[Vr], delete t[Rl], delete t[P1], delete t[R1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Fc(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Dc(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function ms(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Io));
    else if (r !== 4 && (e = e.child, e !== null))
      for (ms(e, t, n), e = e.sibling; e !== null; )
        ms(e, t, n), e = e.sibling;
  }
  function gs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (gs(e, t, n), e = e.sibling; e !== null; )
        gs(e, t, n), e = e.sibling;
  }
  var Ue = null, _t = !1;
  function an(e, t, n) {
    for (n = n.child; n !== null; )
      Uc(e, t, n), n = n.sibling;
  }
  function Uc(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function")
      try {
        Rt.onCommitFiberUnmount(ho, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        Ze || or(n, t);
      case 6:
        var r = Ue, o = _t;
        Ue = null, an(e, t, n), Ue = r, _t = o, Ue !== null && (_t ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null && (_t ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? Pl(e.parentNode, n) : e.nodeType === 1 && Pl(e, n), Pr(e)) : Pl(Ue, n.stateNode));
        break;
      case 4:
        r = Ue, o = _t, Ue = n.stateNode.containerInfo, _t = !0, an(e, t, n), Ue = r, _t = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var l = o, a = l.destroy;
            l = l.tag, a !== void 0 && (l & 2 || l & 4) && ps(n, t, a), o = o.next;
          } while (o !== r);
        }
        an(e, t, n);
        break;
      case 1:
        if (!Ze && (or(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (d) {
            Te(n, t, d);
          }
        an(e, t, n);
        break;
      case 21:
        an(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ze = (r = Ze) || n.memoizedState !== null, an(e, t, n), Ze = r) : an(e, t, n);
        break;
      default:
        an(e, t, n);
    }
  }
  function Vc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Z1()), t.forEach(function(r) {
        var o = np.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function Tt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var l = e, a = t, d = a;
          e:
            for (; d !== null; ) {
              switch (d.tag) {
                case 5:
                  Ue = d.stateNode, _t = !1;
                  break e;
                case 3:
                  Ue = d.stateNode.containerInfo, _t = !0;
                  break e;
                case 4:
                  Ue = d.stateNode.containerInfo, _t = !0;
                  break e;
              }
              d = d.return;
            }
          if (Ue === null)
            throw Error(u(160));
          Uc(l, a, o), Ue = null, _t = !1;
          var p = o.alternate;
          p !== null && (p.return = null), o.return = null;
        } catch (y) {
          Te(o, t, y);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        Wc(t, e), t = t.sibling;
  }
  function Wc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Tt(t, e), jt(e), r & 4) {
          try {
            qr(3, e, e.return), ti(3, e);
          } catch (O) {
            Te(e, e.return, O);
          }
          try {
            qr(5, e, e.return);
          } catch (O) {
            Te(e, e.return, O);
          }
        }
        break;
      case 1:
        Tt(t, e), jt(e), r & 512 && n !== null && or(n, n.return);
        break;
      case 5:
        if (Tt(t, e), jt(e), r & 512 && n !== null && or(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            yr(o, "");
          } catch (O) {
            Te(e, e.return, O);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var l = e.memoizedProps, a = n !== null ? n.memoizedProps : l, d = e.type, p = e.updateQueue;
          if (e.updateQueue = null, p !== null)
            try {
              d === "input" && l.type === "radio" && l.name != null && hu(o, l), Ki(d, a);
              var y = Ki(d, l);
              for (a = 0; a < p.length; a += 2) {
                var k = p[a], x = p[a + 1];
                k === "style" ? Cu(o, x) : k === "dangerouslySetInnerHTML" ? Eu(o, x) : k === "children" ? yr(o, x) : b(o, k, x, y);
              }
              switch (d) {
                case "input":
                  $i(o, l);
                  break;
                case "textarea":
                  vu(o, l);
                  break;
                case "select":
                  var C = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!l.multiple;
                  var P = l.value;
                  P != null ? Dn(o, !!l.multiple, P, !1) : C !== !!l.multiple && (l.defaultValue != null ? Dn(
                    o,
                    !!l.multiple,
                    l.defaultValue,
                    !0
                  ) : Dn(o, !!l.multiple, l.multiple ? [] : "", !1));
              }
              o[Vr] = l;
            } catch (O) {
              Te(e, e.return, O);
            }
        }
        break;
      case 6:
        if (Tt(t, e), jt(e), r & 4) {
          if (e.stateNode === null)
            throw Error(u(162));
          o = e.stateNode, l = e.memoizedProps;
          try {
            o.nodeValue = l;
          } catch (O) {
            Te(e, e.return, O);
          }
        }
        break;
      case 3:
        if (Tt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Pr(t.containerInfo);
          } catch (O) {
            Te(e, e.return, O);
          }
        break;
      case 4:
        Tt(t, e), jt(e);
        break;
      case 13:
        Tt(t, e), jt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ws = Le())), r & 4 && Vc(e);
        break;
      case 22:
        if (k = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ze = (y = Ze) || k, Tt(t, e), Ze = y) : Tt(t, e), jt(e), r & 8192) {
          if (y = e.memoizedState !== null, (e.stateNode.isHidden = y) && !k && e.mode & 1)
            for (A = e, k = e.child; k !== null; ) {
              for (x = A = k; A !== null; ) {
                switch (C = A, P = C.child, C.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    qr(4, C, C.return);
                    break;
                  case 1:
                    or(C, C.return);
                    var I = C.stateNode;
                    if (typeof I.componentWillUnmount == "function") {
                      r = C, n = C.return;
                      try {
                        t = r, I.props = t.memoizedProps, I.state = t.memoizedState, I.componentWillUnmount();
                      } catch (O) {
                        Te(r, n, O);
                      }
                    }
                    break;
                  case 5:
                    or(C, C.return);
                    break;
                  case 22:
                    if (C.memoizedState !== null) {
                      Hc(x);
                      continue;
                    }
                }
                P !== null ? (P.return = C, A = P) : Hc(x);
              }
              k = k.sibling;
            }
          e:
            for (k = null, x = e; ; ) {
              if (x.tag === 5) {
                if (k === null) {
                  k = x;
                  try {
                    o = x.stateNode, y ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (d = x.stateNode, p = x.memoizedProps.style, a = p != null && p.hasOwnProperty("display") ? p.display : null, d.style.display = Su("display", a));
                  } catch (O) {
                    Te(e, e.return, O);
                  }
                }
              } else if (x.tag === 6) {
                if (k === null)
                  try {
                    x.stateNode.nodeValue = y ? "" : x.memoizedProps;
                  } catch (O) {
                    Te(e, e.return, O);
                  }
              } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
                x.child.return = x, x = x.child;
                continue;
              }
              if (x === e)
                break e;
              for (; x.sibling === null; ) {
                if (x.return === null || x.return === e)
                  break e;
                k === x && (k = null), x = x.return;
              }
              k === x && (k = null), x.sibling.return = x.return, x = x.sibling;
            }
        }
        break;
      case 19:
        Tt(t, e), jt(e), r & 4 && Vc(e);
        break;
      case 21:
        break;
      default:
        Tt(
          t,
          e
        ), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Dc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (yr(o, ""), r.flags &= -33);
            var l = Fc(e);
            gs(e, l, o);
            break;
          case 3:
          case 4:
            var a = r.stateNode.containerInfo, d = Fc(e);
            ms(e, d, a);
            break;
          default:
            throw Error(u(161));
        }
      } catch (p) {
        Te(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Y1(e, t, n) {
    A = e, $c(e);
  }
  function $c(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
      var o = A, l = o.child;
      if (o.tag === 22 && r) {
        var a = o.memoizedState !== null || ei;
        if (!a) {
          var d = o.alternate, p = d !== null && d.memoizedState !== null || Ze;
          d = ei;
          var y = Ze;
          if (ei = a, (Ze = p) && !y)
            for (A = o; A !== null; )
              a = A, p = a.child, a.tag === 22 && a.memoizedState !== null ? Qc(o) : p !== null ? (p.return = a, A = p) : Qc(o);
          for (; l !== null; )
            A = l, $c(l), l = l.sibling;
          A = o, ei = d, Ze = y;
        }
        Bc(e);
      } else
        o.subtreeFlags & 8772 && l !== null ? (l.return = o, A = l) : Bc(e);
    }
  }
  function Bc(e) {
    for (; A !== null; ) {
      var t = A;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ze || ti(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ze)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var o = t.elementType === t.type ? n.memoizedProps : xt(t.type, n.memoizedProps);
                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var l = t.updateQueue;
                l !== null && Va(t, l, r);
                break;
              case 3:
                var a = t.updateQueue;
                if (a !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Va(t, a, n);
                }
                break;
              case 5:
                var d = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = d;
                  var p = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      p.autoFocus && n.focus();
                      break;
                    case "img":
                      p.src && (n.src = p.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var y = t.alternate;
                  if (y !== null) {
                    var k = y.memoizedState;
                    if (k !== null) {
                      var x = k.dehydrated;
                      x !== null && Pr(x);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          Ze || t.flags & 512 && hs(t);
        } catch (C) {
          Te(t, t.return, C);
        }
      }
      if (t === e) {
        A = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, A = n;
        break;
      }
      A = t.return;
    }
  }
  function Hc(e) {
    for (; A !== null; ) {
      var t = A;
      if (t === e) {
        A = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, A = n;
        break;
      }
      A = t.return;
    }
  }
  function Qc(e) {
    for (; A !== null; ) {
      var t = A;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ti(4, t);
            } catch (p) {
              Te(t, n, p);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (p) {
                Te(t, o, p);
              }
            }
            var l = t.return;
            try {
              hs(t);
            } catch (p) {
              Te(t, l, p);
            }
            break;
          case 5:
            var a = t.return;
            try {
              hs(t);
            } catch (p) {
              Te(t, a, p);
            }
        }
      } catch (p) {
        Te(t, t.return, p);
      }
      if (t === e) {
        A = null;
        break;
      }
      var d = t.sibling;
      if (d !== null) {
        d.return = t.return, A = d;
        break;
      }
      A = t.return;
    }
  }
  var G1 = Math.ceil, ni = X.ReactCurrentDispatcher, vs = X.ReactCurrentOwner, ht = X.ReactCurrentBatchConfig, le = 0, ze = null, Re = null, Ve = 0, st = 0, ir = rn(0), Oe = 0, Jr = null, _n = 0, ri = 0, ys = 0, br = null, et = null, ws = 0, lr = 1 / 0, Qt = null, oi = !1, Es = null, cn = null, ii = !1, dn = null, li = 0, eo = 0, Ss = null, si = -1, ui = 0;
  function Xe() {
    return le & 6 ? Le() : si !== -1 ? si : si = Le();
  }
  function fn(e) {
    return e.mode & 1 ? le & 2 && Ve !== 0 ? Ve & -Ve : I1.transition !== null ? (ui === 0 && (ui = Du()), ui) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zu(e.type)), e) : 1;
  }
  function Lt(e, t, n, r) {
    if (50 < eo)
      throw eo = 0, Ss = null, Error(u(185));
    xr(e, n, r), (!(le & 2) || e !== ze) && (e === ze && (!(le & 2) && (ri |= n), Oe === 4 && pn(e, Ve)), tt(e, r), n === 1 && le === 0 && !(t.mode & 1) && (lr = Le() + 500, Mo && ln()));
  }
  function tt(e, t) {
    var n = e.callbackNode;
    If(e, t);
    var r = vo(e, e === ze ? Ve : 0);
    if (r === 0)
      n !== null && ju(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ju(n), t === 1)
        e.tag === 0 ? A1(Kc.bind(null, e)) : Aa(Kc.bind(null, e)), L1(function() {
          !(le & 6) && ln();
        }), n = null;
      else {
        switch (Fu(r)) {
          case 1:
            n = el;
            break;
          case 4:
            n = zu;
            break;
          case 16:
            n = po;
            break;
          case 536870912:
            n = Mu;
            break;
          default:
            n = po;
        }
        n = td(n, Zc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Zc(e, t) {
    if (si = -1, ui = 0, le & 6)
      throw Error(u(327));
    var n = e.callbackNode;
    if (sr() && e.callbackNode !== n)
      return null;
    var r = vo(e, e === ze ? Ve : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = ai(e, r);
    else {
      t = r;
      var o = le;
      le |= 2;
      var l = Gc();
      (ze !== e || Ve !== t) && (Qt = null, lr = Le() + 500, Ln(e, t));
      do
        try {
          J1();
          break;
        } catch (d) {
          Yc(e, d);
        }
      while (!0);
      Ul(), ni.current = l, le = o, Re !== null ? t = 0 : (ze = null, Ve = 0, t = Oe);
    }
    if (t !== 0) {
      if (t === 2 && (o = tl(e), o !== 0 && (r = o, t = Cs(e, o))), t === 1)
        throw n = Jr, Ln(e, 0), pn(e, r), tt(e, Le()), n;
      if (t === 6)
        pn(e, r);
      else {
        if (o = e.current.alternate, !(r & 30) && !X1(o) && (t = ai(e, r), t === 2 && (l = tl(e), l !== 0 && (r = l, t = Cs(e, l))), t === 1))
          throw n = Jr, Ln(e, 0), pn(e, r), tt(e, Le()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            Nn(e, et, Qt);
            break;
          case 3:
            if (pn(e, r), (r & 130023424) === r && (t = ws + 500 - Le(), 10 < t)) {
              if (vo(e, 0) !== 0)
                break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                Xe(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Nl(Nn.bind(null, e, et, Qt), t);
              break;
            }
            Nn(e, et, Qt);
            break;
          case 4:
            if (pn(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var a = 31 - St(r);
              l = 1 << a, a = t[a], a > o && (o = a), r &= ~l;
            }
            if (r = o, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * G1(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Nl(Nn.bind(null, e, et, Qt), r);
              break;
            }
            Nn(e, et, Qt);
            break;
          case 5:
            Nn(e, et, Qt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return tt(e, Le()), e.callbackNode === n ? Zc.bind(null, e) : null;
  }
  function Cs(e, t) {
    var n = br;
    return e.current.memoizedState.isDehydrated && (Ln(e, t).flags |= 256), e = ai(e, t), e !== 2 && (t = et, et = n, t !== null && ks(t)), e;
  }
  function ks(e) {
    et === null ? et = e : et.push.apply(et, e);
  }
  function X1(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r], l = o.getSnapshot;
            o = o.value;
            try {
              if (!Ct(l(), o))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function pn(e, t) {
    for (t &= ~ys, t &= ~ri, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - St(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Kc(e) {
    if (le & 6)
      throw Error(u(327));
    sr();
    var t = vo(e, 0);
    if (!(t & 1))
      return tt(e, Le()), null;
    var n = ai(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = tl(e);
      r !== 0 && (t = r, n = Cs(e, r));
    }
    if (n === 1)
      throw n = Jr, Ln(e, 0), pn(e, t), tt(e, Le()), n;
    if (n === 6)
      throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nn(e, et, Qt), tt(e, Le()), null;
  }
  function xs(e, t) {
    var n = le;
    le |= 1;
    try {
      return e(t);
    } finally {
      le = n, le === 0 && (lr = Le() + 500, Mo && ln());
    }
  }
  function Tn(e) {
    dn !== null && dn.tag === 0 && !(le & 6) && sr();
    var t = le;
    le |= 1;
    var n = ht.transition, r = he;
    try {
      if (ht.transition = null, he = 1, e)
        return e();
    } finally {
      he = r, ht.transition = n, le = t, !(le & 6) && ln();
    }
  }
  function _s() {
    st = ir.current, we(ir);
  }
  function Ln(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, T1(n)), Re !== null)
      for (n = Re.return; n !== null; ) {
        var r = n;
        switch (jl(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && jo();
            break;
          case 3:
            nr(), we(qe), we(Be), Gl();
            break;
          case 5:
            Kl(r);
            break;
          case 4:
            nr();
            break;
          case 13:
            we(Ce);
            break;
          case 19:
            we(Ce);
            break;
          case 10:
            Vl(r.type._context);
            break;
          case 22:
          case 23:
            _s();
        }
        n = n.return;
      }
    if (ze = e, Re = e = hn(e.current, null), Ve = st = t, Oe = 0, Jr = null, ys = ri = _n = 0, et = br = null, Cn !== null) {
      for (t = 0; t < Cn.length; t++)
        if (n = Cn[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var o = r.next, l = n.pending;
          if (l !== null) {
            var a = l.next;
            l.next = o, r.next = a;
          }
          n.pending = r;
        }
      Cn = null;
    }
    return e;
  }
  function Yc(e, t) {
    do {
      var n = Re;
      try {
        if (Ul(), Ko.current = qo, Yo) {
          for (var r = ke.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          Yo = !1;
        }
        if (xn = 0, je = Ie = ke = null, Zr = !1, Kr = 0, vs.current = null, n === null || n.return === null) {
          Oe = 1, Jr = t, Re = null;
          break;
        }
        e: {
          var l = e, a = n.return, d = n, p = t;
          if (t = Ve, d.flags |= 32768, p !== null && typeof p == "object" && typeof p.then == "function") {
            var y = p, k = d, x = k.tag;
            if (!(k.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var C = k.alternate;
              C ? (k.updateQueue = C.updateQueue, k.memoizedState = C.memoizedState, k.lanes = C.lanes) : (k.updateQueue = null, k.memoizedState = null);
            }
            var P = wc(a);
            if (P !== null) {
              P.flags &= -257, Ec(P, a, d, l, t), P.mode & 1 && yc(l, y, t), t = P, p = y;
              var I = t.updateQueue;
              if (I === null) {
                var O = /* @__PURE__ */ new Set();
                O.add(p), t.updateQueue = O;
              } else
                I.add(p);
              break e;
            } else {
              if (!(t & 1)) {
                yc(l, y, t), Ts();
                break e;
              }
              p = Error(u(426));
            }
          } else if (Se && d.mode & 1) {
            var Ne = wc(a);
            if (Ne !== null) {
              !(Ne.flags & 65536) && (Ne.flags |= 256), Ec(Ne, a, d, l, t), Dl(rr(p, d));
              break e;
            }
          }
          l = p = rr(p, d), Oe !== 4 && (Oe = 2), br === null ? br = [l] : br.push(l), l = a;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var g = gc(l, p, t);
                Ua(l, g);
                break e;
              case 1:
                d = p;
                var h = l.type, v = l.stateNode;
                if (!(l.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (cn === null || !cn.has(v)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var T = vc(l, d, t);
                  Ua(l, T);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        qc(n);
      } catch (j) {
        t = j, Re === n && n !== null && (Re = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gc() {
    var e = ni.current;
    return ni.current = qo, e === null ? qo : e;
  }
  function Ts() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4), ze === null || !(_n & 268435455) && !(ri & 268435455) || pn(ze, Ve);
  }
  function ai(e, t) {
    var n = le;
    le |= 2;
    var r = Gc();
    (ze !== e || Ve !== t) && (Qt = null, Ln(e, t));
    do
      try {
        q1();
        break;
      } catch (o) {
        Yc(e, o);
      }
    while (!0);
    if (Ul(), le = n, ni.current = r, Re !== null)
      throw Error(u(261));
    return ze = null, Ve = 0, Oe;
  }
  function q1() {
    for (; Re !== null; )
      Xc(Re);
  }
  function J1() {
    for (; Re !== null && !kf(); )
      Xc(Re);
  }
  function Xc(e) {
    var t = ed(e.alternate, e, st);
    e.memoizedProps = e.pendingProps, t === null ? qc(e) : Re = t, vs.current = null;
  }
  function qc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Q1(n, t), n !== null) {
          n.flags &= 32767, Re = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Oe = 6, Re = null;
          return;
        }
      } else if (n = H1(n, t, st), n !== null) {
        Re = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Re = t;
        return;
      }
      Re = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function Nn(e, t, n) {
    var r = he, o = ht.transition;
    try {
      ht.transition = null, he = 1, b1(e, t, n, r);
    } finally {
      ht.transition = o, he = r;
    }
    return null;
  }
  function b1(e, t, n, r) {
    do
      sr();
    while (dn !== null);
    if (le & 6)
      throw Error(u(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Of(e, l), e === ze && (Re = ze = null, Ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ii || (ii = !0, td(po, function() {
      return sr(), null;
    })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
      l = ht.transition, ht.transition = null;
      var a = he;
      he = 1;
      var d = le;
      le |= 4, vs.current = null, K1(e, n), Wc(n, e), w1(Tl), Eo = !!_l, Tl = _l = null, e.current = n, Y1(n), xf(), le = d, he = a, ht.transition = l;
    } else
      e.current = n;
    if (ii && (ii = !1, dn = e, li = o), l = e.pendingLanes, l === 0 && (cn = null), Lf(n.stateNode), tt(e, Le()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (oi)
      throw oi = !1, e = Es, Es = null, e;
    return li & 1 && e.tag !== 0 && sr(), l = e.pendingLanes, l & 1 ? e === Ss ? eo++ : (eo = 0, Ss = e) : eo = 0, ln(), null;
  }
  function sr() {
    if (dn !== null) {
      var e = Fu(li), t = ht.transition, n = he;
      try {
        if (ht.transition = null, he = 16 > e ? 16 : e, dn === null)
          var r = !1;
        else {
          if (e = dn, dn = null, li = 0, le & 6)
            throw Error(u(331));
          var o = le;
          for (le |= 4, A = e.current; A !== null; ) {
            var l = A, a = l.child;
            if (A.flags & 16) {
              var d = l.deletions;
              if (d !== null) {
                for (var p = 0; p < d.length; p++) {
                  var y = d[p];
                  for (A = y; A !== null; ) {
                    var k = A;
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qr(8, k, l);
                    }
                    var x = k.child;
                    if (x !== null)
                      x.return = k, A = x;
                    else
                      for (; A !== null; ) {
                        k = A;
                        var C = k.sibling, P = k.return;
                        if (Mc(k), k === y) {
                          A = null;
                          break;
                        }
                        if (C !== null) {
                          C.return = P, A = C;
                          break;
                        }
                        A = P;
                      }
                  }
                }
                var I = l.alternate;
                if (I !== null) {
                  var O = I.child;
                  if (O !== null) {
                    I.child = null;
                    do {
                      var Ne = O.sibling;
                      O.sibling = null, O = Ne;
                    } while (O !== null);
                  }
                }
                A = l;
              }
            }
            if (l.subtreeFlags & 2064 && a !== null)
              a.return = l, A = a;
            else
              e:
                for (; A !== null; ) {
                  if (l = A, l.flags & 2048)
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qr(9, l, l.return);
                    }
                  var g = l.sibling;
                  if (g !== null) {
                    g.return = l.return, A = g;
                    break e;
                  }
                  A = l.return;
                }
          }
          var h = e.current;
          for (A = h; A !== null; ) {
            a = A;
            var v = a.child;
            if (a.subtreeFlags & 2064 && v !== null)
              v.return = a, A = v;
            else
              e:
                for (a = h; A !== null; ) {
                  if (d = A, d.flags & 2048)
                    try {
                      switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ti(9, d);
                      }
                    } catch (j) {
                      Te(d, d.return, j);
                    }
                  if (d === a) {
                    A = null;
                    break e;
                  }
                  var T = d.sibling;
                  if (T !== null) {
                    T.return = d.return, A = T;
                    break e;
                  }
                  A = d.return;
                }
          }
          if (le = o, ln(), Rt && typeof Rt.onPostCommitFiberRoot == "function")
            try {
              Rt.onPostCommitFiberRoot(ho, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        he = n, ht.transition = t;
      }
    }
    return !1;
  }
  function Jc(e, t, n) {
    t = rr(n, t), t = gc(e, t, 1), e = un(e, t, 1), t = Xe(), e !== null && (xr(e, 1, t), tt(e, t));
  }
  function Te(e, t, n) {
    if (e.tag === 3)
      Jc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (cn === null || !cn.has(r))) {
            e = rr(n, e), e = vc(t, e, 1), t = un(t, e, 1), e = Xe(), t !== null && (xr(t, 1, e), tt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function ep(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, ze === e && (Ve & n) === n && (Oe === 4 || Oe === 3 && (Ve & 130023424) === Ve && 500 > Le() - ws ? Ln(e, 0) : ys |= n), tt(e, t);
  }
  function bc(e, t) {
    t === 0 && (e.mode & 1 ? (t = go, go <<= 1, !(go & 130023424) && (go = 4194304)) : t = 1);
    var n = Xe();
    e = $t(e, t), e !== null && (xr(e, t, n), tt(e, n));
  }
  function tp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), bc(e, n);
  }
  function np(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), bc(e, n);
  }
  var ed;
  ed = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || qe.current)
        be = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return be = !1, B1(e, t, n);
        be = !!(e.flags & 131072);
      }
    else
      be = !1, Se && t.flags & 1048576 && Ia(t, Fo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        bo(e, t), e = t.pendingProps;
        var o = Gn(t, Be.current);
        er(t, n), o = Jl(null, t, r, e, o, n);
        var l = bl();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (l = !0, zo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Bl(t), o.updater = Ho, t.stateNode = o, o._reactInternals = t, Ql(t, r, e, n), t = ss(null, t, r, !0, l, n)) : (t.tag = 0, Se && l && Ol(t), Ge(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (bo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = op(r), e = xt(r, e), o) {
            case 0:
              t = ls(null, t, r, e, n);
              break e;
            case 1:
              t = Tc(null, t, r, e, n);
              break e;
            case 11:
              t = Sc(null, t, r, e, n);
              break e;
            case 14:
              t = Cc(null, t, r, xt(r.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), ls(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), Tc(e, t, r, o, n);
      case 3:
        e: {
          if (Lc(t), e === null)
            throw Error(u(387));
          r = t.pendingProps, l = t.memoizedState, o = l.element, Fa(e, t), Bo(t, r, null, n);
          var a = t.memoizedState;
          if (r = a.element, l.isDehydrated)
            if (l = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
              o = rr(Error(u(423)), t), t = Nc(e, t, r, n, o);
              break e;
            } else if (r !== o) {
              o = rr(Error(u(424)), t), t = Nc(e, t, r, n, o);
              break e;
            } else
              for (lt = nn(t.stateNode.containerInfo.firstChild), it = t, Se = !0, kt = null, n = Ka(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Jn(), r === o) {
              t = Ht(e, t, n);
              break e;
            }
            Ge(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ya(t), e === null && Ml(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, a = o.children, Ll(r, o) ? a = null : l !== null && Ll(r, l) && (t.flags |= 32), _c(e, t), Ge(e, t, a, n), t.child;
      case 6:
        return e === null && Ml(t), null;
      case 13:
        return Pc(e, t, n);
      case 4:
        return Zl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : Ge(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), Sc(e, t, r, o, n);
      case 7:
        return Ge(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ge(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, a = o.value, ve(Vo, r._currentValue), r._currentValue = a, l !== null)
            if (Ct(l.value, a)) {
              if (l.children === o.children && !qe.current) {
                t = Ht(e, t, n);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                var d = l.dependencies;
                if (d !== null) {
                  a = l.child;
                  for (var p = d.firstContext; p !== null; ) {
                    if (p.context === r) {
                      if (l.tag === 1) {
                        p = Bt(-1, n & -n), p.tag = 2;
                        var y = l.updateQueue;
                        if (y !== null) {
                          y = y.shared;
                          var k = y.pending;
                          k === null ? p.next = p : (p.next = k.next, k.next = p), y.pending = p;
                        }
                      }
                      l.lanes |= n, p = l.alternate, p !== null && (p.lanes |= n), Wl(
                        l.return,
                        n,
                        t
                      ), d.lanes |= n;
                      break;
                    }
                    p = p.next;
                  }
                } else if (l.tag === 10)
                  a = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (a = l.return, a === null)
                    throw Error(u(341));
                  a.lanes |= n, d = a.alternate, d !== null && (d.lanes |= n), Wl(a, n, t), a = l.sibling;
                } else
                  a = l.child;
                if (a !== null)
                  a.return = l;
                else
                  for (a = l; a !== null; ) {
                    if (a === t) {
                      a = null;
                      break;
                    }
                    if (l = a.sibling, l !== null) {
                      l.return = a.return, a = l;
                      break;
                    }
                    a = a.return;
                  }
                l = a;
              }
          Ge(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, er(t, n), o = ft(o), r = r(o), t.flags |= 1, Ge(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = xt(r, t.pendingProps), o = xt(r.type, o), Cc(e, t, r, o, n);
      case 15:
        return kc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : xt(r, o), bo(e, t), t.tag = 1, Je(r) ? (e = !0, zo(t)) : e = !1, er(t, n), Ba(t, r, o), Ql(t, r, o, n), ss(null, t, r, !0, e, n);
      case 19:
        return Ac(e, t, n);
      case 22:
        return xc(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function td(e, t) {
    return Ou(e, t);
  }
  function rp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mt(e, t, n, r) {
    return new rp(e, t, n, r);
  }
  function Ls(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function op(e) {
    if (typeof e == "function")
      return Ls(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ut)
        return 11;
      if (e === at)
        return 14;
    }
    return 2;
  }
  function hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ci(e, t, n, r, o, l) {
    var a = 2;
    if (r = e, typeof e == "function")
      Ls(e) && (a = 1);
    else if (typeof e == "string")
      a = 5;
    else
      e:
        switch (e) {
          case U:
            return Pn(n.children, o, l, t);
          case Pe:
            a = 8, o |= 8;
            break;
          case Ye:
            return e = mt(12, n, t, o | 2), e.elementType = Ye, e.lanes = l, e;
          case We:
            return e = mt(13, n, t, o), e.elementType = We, e.lanes = l, e;
          case rt:
            return e = mt(19, n, t, o), e.elementType = rt, e.lanes = l, e;
          case ge:
            return di(n, o, l, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case wt:
                  a = 10;
                  break e;
                case Mt:
                  a = 9;
                  break e;
                case ut:
                  a = 11;
                  break e;
                case at:
                  a = 14;
                  break e;
                case $e:
                  a = 16, r = null;
                  break e;
              }
            throw Error(u(130, e == null ? e : typeof e, ""));
        }
    return t = mt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function Pn(e, t, n, r) {
    return e = mt(7, e, r, t), e.lanes = n, e;
  }
  function di(e, t, n, r) {
    return e = mt(22, e, r, t), e.elementType = ge, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ns(e, t, n) {
    return e = mt(6, e, null, t), e.lanes = n, e;
  }
  function Ps(e, t, n) {
    return t = mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function ip(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nl(0), this.expirationTimes = nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function Rs(e, t, n, r, o, l, a, d, p) {
    return e = new ip(e, t, n, d, p), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = mt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bl(l), e;
  }
  function lp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: H, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function nd(e) {
    if (!e)
      return on;
    e = e._reactInternals;
    e: {
      if (vn(e) !== e || e.tag !== 1)
        throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Je(n))
        return Pa(e, n, t);
    }
    return t;
  }
  function rd(e, t, n, r, o, l, a, d, p) {
    return e = Rs(n, r, !0, e, o, l, a, d, p), e.context = nd(null), n = e.current, r = Xe(), o = fn(n), l = Bt(r, o), l.callback = t ?? null, un(n, l, o), e.current.lanes = o, xr(e, o, r), tt(e, r), e;
  }
  function fi(e, t, n, r) {
    var o = t.current, l = Xe(), a = fn(o);
    return n = nd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Bt(l, a), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = un(o, t, a), e !== null && (Lt(e, o, a, l), $o(e, o, a)), a;
  }
  function pi(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function od(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function As(e, t) {
    od(e, t), (e = e.alternate) && od(e, t);
  }
  function sp() {
    return null;
  }
  var id = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Is(e) {
    this._internalRoot = e;
  }
  hi.prototype.render = Is.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(u(409));
    fi(e, t, null, null);
  }, hi.prototype.unmount = Is.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Tn(function() {
        fi(null, e, null, null);
      }), t[Ft] = null;
    }
  };
  function hi(e) {
    this._internalRoot = e;
  }
  hi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++)
        ;
      bt.splice(n, 0, e), n === 0 && Hu(e);
    }
  };
  function Os(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function ld() {
  }
  function up(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var y = pi(a);
          l.call(y);
        };
      }
      var a = rd(t, r, e, 0, null, !1, !1, "", ld);
      return e._reactRootContainer = a, e[Ft] = a.current, Fr(e.nodeType === 8 ? e.parentNode : e), Tn(), a;
    }
    for (; o = e.lastChild; )
      e.removeChild(o);
    if (typeof r == "function") {
      var d = r;
      r = function() {
        var y = pi(p);
        d.call(y);
      };
    }
    var p = Rs(e, 0, !1, null, null, !1, !1, "", ld);
    return e._reactRootContainer = p, e[Ft] = p.current, Fr(e.nodeType === 8 ? e.parentNode : e), Tn(function() {
      fi(t, p, n, r);
    }), p;
  }
  function gi(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
      var a = l;
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var p = pi(a);
          d.call(p);
        };
      }
      fi(t, a, e, o);
    } else
      a = up(n, t, e, o, r);
    return pi(a);
  }
  Uu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kr(t.pendingLanes);
          n !== 0 && (rl(t, n | 1), tt(t, Le()), !(le & 6) && (lr = Le() + 500, ln()));
        }
        break;
      case 13:
        Tn(function() {
          var r = $t(e, 1);
          if (r !== null) {
            var o = Xe();
            Lt(r, e, 1, o);
          }
        }), As(e, 1);
    }
  }, ol = function(e) {
    if (e.tag === 13) {
      var t = $t(e, 134217728);
      if (t !== null) {
        var n = Xe();
        Lt(t, e, 134217728, n);
      }
      As(e, 134217728);
    }
  }, Vu = function(e) {
    if (e.tag === 13) {
      var t = fn(e), n = $t(e, t);
      if (n !== null) {
        var r = Xe();
        Lt(n, e, t, r);
      }
      As(e, t);
    }
  }, Wu = function() {
    return he;
  }, $u = function(e, t) {
    var n = he;
    try {
      return he = e, t();
    } finally {
      he = n;
    }
  }, Xi = function(e, t, n) {
    switch (t) {
      case "input":
        if ($i(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Oo(r);
              if (!o)
                throw Error(u(90));
              Et(r), $i(r, o);
            }
          }
        }
        break;
      case "textarea":
        vu(e, n);
        break;
      case "select":
        t = n.value, t != null && Dn(e, !!n.multiple, t, !1);
    }
  }, Tu = xs, Lu = Tn;
  var ap = { usingClientEntryPoint: !1, Events: [Wr, Kn, Oo, xu, _u, xs] }, to = { findFiberByHostInstance: yn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, cp = { bundleType: to.bundleType, version: to.version, rendererPackageName: to.rendererPackageName, rendererConfig: to.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: X.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Au(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: to.findFiberByHostInstance || sp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vi.isDisabled && vi.supportsFiber)
      try {
        ho = vi.inject(cp), Rt = vi;
      } catch {
      }
  }
  return nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap, nt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Os(t))
      throw Error(u(200));
    return lp(e, t, null, n);
  }, nt.createRoot = function(e, t) {
    if (!Os(e))
      throw Error(u(299));
    var n = !1, r = "", o = id;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Rs(e, 1, !1, null, null, n, !1, r, o), e[Ft] = t.current, Fr(e.nodeType === 8 ? e.parentNode : e), new Is(t);
  }, nt.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = Au(t), e = e === null ? null : e.stateNode, e;
  }, nt.flushSync = function(e) {
    return Tn(e);
  }, nt.hydrate = function(e, t, n) {
    if (!mi(t))
      throw Error(u(200));
    return gi(null, e, t, !0, n);
  }, nt.hydrateRoot = function(e, t, n) {
    if (!Os(e))
      throw Error(u(405));
    var r = n != null && n.hydratedSources || null, o = !1, l = "", a = id;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = rd(t, null, e, 1, n ?? null, o, !1, l, a), e[Ft] = t.current, Fr(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
          n,
          o
        );
    return new hi(t);
  }, nt.render = function(e, t, n) {
    if (!mi(t))
      throw Error(u(200));
    return gi(null, e, t, !1, n);
  }, nt.unmountComponentAtNode = function(e) {
    if (!mi(e))
      throw Error(u(40));
    return e._reactRootContainer ? (Tn(function() {
      gi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ft] = null;
      });
    }), !0) : !1;
  }, nt.unstable_batchedUpdates = xs, nt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!mi(n))
      throw Error(u(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(u(38));
    return gi(e, t, n, !1, r);
  }, nt.version = "18.2.0-next-9e3b772b8-20220608", nt;
}
function Md() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Md);
    } catch (i) {
      console.error(i);
    }
}
Md(), zd.exports = yp();
var wp = zd.exports, Dd, pd = wp;
Dd = pd.createRoot, pd.hydrateRoot;
var Ke = function() {
  return Ke = Object.assign || function(s) {
    for (var u, c = 1, m = arguments.length; c < m; c++) {
      u = arguments[c];
      for (var w in u)
        Object.prototype.hasOwnProperty.call(u, w) && (s[w] = u[w]);
    }
    return s;
  }, Ke.apply(this, arguments);
};
function cr(i, s, u) {
  if (u || arguments.length === 2)
    for (var c = 0, m = s.length, w; c < m; c++)
      (w || !(c in s)) && (w || (w = Array.prototype.slice.call(s, 0, c)), w[c] = s[c]);
  return i.concat(w || Array.prototype.slice.call(s));
}
function Ep(i) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(u) {
    return s[u] === void 0 && (s[u] = i(u)), s[u];
  };
}
var Sp = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Cp = /* @__PURE__ */ Ep(
  function(i) {
    return Sp.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Yt = ou();
const jn = /* @__PURE__ */ pp(Yt);
var Ee = "-ms-", oo = "-moz-", pe = "-webkit-", Fd = "comm", zi = "rule", iu = "decl", kp = "@import", Ud = "@keyframes", xp = "@layer", Vd = Math.abs, lu = String.fromCharCode, Qs = Object.assign;
function _p(i, s) {
  return De(i, 0) ^ 45 ? (((s << 2 ^ De(i, 0)) << 2 ^ De(i, 1)) << 2 ^ De(i, 2)) << 2 ^ De(i, 3) : 0;
}
function Wd(i) {
  return i.trim();
}
function Zt(i, s) {
  return (i = s.exec(i)) ? i[0] : i;
}
function q(i, s, u) {
  return i.replace(s, u);
}
function ki(i, s, u) {
  return i.indexOf(s, u);
}
function De(i, s) {
  return i.charCodeAt(s) | 0;
}
function dr(i, s, u) {
  return i.slice(s, u);
}
function zt(i) {
  return i.length;
}
function $d(i) {
  return i.length;
}
function ro(i, s) {
  return s.push(i), i;
}
function Tp(i, s) {
  return i.map(s).join("");
}
function hd(i, s) {
  return i.filter(function(u) {
    return !Zt(u, s);
  });
}
var Mi = 1, fr = 1, Bd = 0, yt = 0, Ae = 0, mr = "";
function Di(i, s, u, c, m, w, E, L) {
  return { value: i, root: s, parent: u, type: c, props: m, children: w, line: Mi, column: fr, length: E, return: "", siblings: L };
}
function gn(i, s) {
  return Qs(Di("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, s);
}
function ur(i) {
  for (; i.root; )
    i = gn(i.root, { children: [i] });
  ro(i, i.siblings);
}
function Lp() {
  return Ae;
}
function Np() {
  return Ae = yt > 0 ? De(mr, --yt) : 0, fr--, Ae === 10 && (fr = 1, Mi--), Ae;
}
function Pt() {
  return Ae = yt < Bd ? De(mr, yt++) : 0, fr++, Ae === 10 && (fr = 1, Mi++), Ae;
}
function In() {
  return De(mr, yt);
}
function xi() {
  return yt;
}
function Fi(i, s) {
  return dr(mr, i, s);
}
function Zs(i) {
  switch (i) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Pp(i) {
  return Mi = fr = 1, Bd = zt(mr = i), yt = 0, [];
}
function Rp(i) {
  return mr = "", i;
}
function Ds(i) {
  return Wd(Fi(yt - 1, Ks(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function Ap(i) {
  for (; (Ae = In()) && Ae < 33; )
    Pt();
  return Zs(i) > 2 || Zs(Ae) > 3 ? "" : " ";
}
function Ip(i, s) {
  for (; --s && Pt() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); )
    ;
  return Fi(i, xi() + (s < 6 && In() == 32 && Pt() == 32));
}
function Ks(i) {
  for (; Pt(); )
    switch (Ae) {
      case i:
        return yt;
      case 34:
      case 39:
        i !== 34 && i !== 39 && Ks(Ae);
        break;
      case 40:
        i === 41 && Ks(i);
        break;
      case 92:
        Pt();
        break;
    }
  return yt;
}
function Op(i, s) {
  for (; Pt() && i + Ae !== 57; )
    if (i + Ae === 84 && In() === 47)
      break;
  return "/*" + Fi(s, yt - 1) + "*" + lu(i === 47 ? i : Pt());
}
function jp(i) {
  for (; !Zs(In()); )
    Pt();
  return Fi(i, yt);
}
function zp(i) {
  return Rp(_i("", null, null, null, [""], i = Pp(i), 0, [0], i));
}
function _i(i, s, u, c, m, w, E, L, _) {
  for (var M = 0, B = 0, D = E, F = 0, K = 0, re = 0, Z = 1, G = 1, fe = 1, ie = 0, b = "", X = m, oe = w, H = c, U = b; G; )
    switch (re = ie, ie = Pt()) {
      case 40:
        if (re != 108 && De(U, D - 1) == 58) {
          ki(U += q(Ds(ie), "&", "&\f"), "&\f", Vd(M ? L[M - 1] : 0)) != -1 && (fe = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        U += Ds(ie);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        U += Ap(re);
        break;
      case 92:
        U += Ip(xi() - 1, 7);
        continue;
      case 47:
        switch (In()) {
          case 42:
          case 47:
            ro(Mp(Op(Pt(), xi()), s, u, _), _);
            break;
          default:
            U += "/";
        }
        break;
      case 123 * Z:
        L[M++] = zt(U) * fe;
      case 125 * Z:
      case 59:
      case 0:
        switch (ie) {
          case 0:
          case 125:
            G = 0;
          case 59 + B:
            fe == -1 && (U = q(U, /\f/g, "")), K > 0 && zt(U) - D && ro(K > 32 ? gd(U + ";", c, u, D - 1, _) : gd(q(U, " ", "") + ";", c, u, D - 2, _), _);
            break;
          case 59:
            U += ";";
          default:
            if (ro(H = md(U, s, u, M, B, m, L, b, X = [], oe = [], D, w), w), ie === 123)
              if (B === 0)
                _i(U, s, H, H, X, w, D, L, oe);
              else
                switch (F === 99 && De(U, 3) === 110 ? 100 : F) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _i(i, H, H, c && ro(md(i, H, H, 0, 0, m, L, b, m, X = [], D, oe), oe), m, oe, D, L, c ? X : oe);
                    break;
                  default:
                    _i(U, H, H, H, [""], oe, 0, L, oe);
                }
        }
        M = B = K = 0, Z = fe = 1, b = U = "", D = E;
        break;
      case 58:
        D = 1 + zt(U), K = re;
      default:
        if (Z < 1) {
          if (ie == 123)
            --Z;
          else if (ie == 125 && Z++ == 0 && Np() == 125)
            continue;
        }
        switch (U += lu(ie), ie * Z) {
          case 38:
            fe = B > 0 ? 1 : (U += "\f", -1);
            break;
          case 44:
            L[M++] = (zt(U) - 1) * fe, fe = 1;
            break;
          case 64:
            In() === 45 && (U += Ds(Pt())), F = In(), B = D = zt(b = U += jp(xi())), ie++;
            break;
          case 45:
            re === 45 && zt(U) == 2 && (Z = 0);
        }
    }
  return w;
}
function md(i, s, u, c, m, w, E, L, _, M, B, D) {
  for (var F = m - 1, K = m === 0 ? w : [""], re = $d(K), Z = 0, G = 0, fe = 0; Z < c; ++Z)
    for (var ie = 0, b = dr(i, F + 1, F = Vd(G = E[Z])), X = i; ie < re; ++ie)
      (X = Wd(G > 0 ? K[ie] + " " + b : q(b, /&\f/g, K[ie]))) && (_[fe++] = X);
  return Di(i, s, u, m === 0 ? zi : L, _, M, B, D);
}
function Mp(i, s, u, c) {
  return Di(i, s, u, Fd, lu(Lp()), dr(i, 2, -2), 0, c);
}
function gd(i, s, u, c, m) {
  return Di(i, s, u, iu, dr(i, 0, c), dr(i, c + 1, -1), c, m);
}
function Hd(i, s, u) {
  switch (_p(i, s)) {
    case 5103:
      return pe + "print-" + i + i;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return pe + i + i;
    case 4789:
      return oo + i + i;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return pe + i + oo + i + Ee + i + i;
    case 5936:
      switch (De(i, s + 11)) {
        case 114:
          return pe + i + Ee + q(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        case 108:
          return pe + i + Ee + q(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        case 45:
          return pe + i + Ee + q(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    case 6828:
    case 4268:
    case 2903:
      return pe + i + Ee + i + i;
    case 6165:
      return pe + i + Ee + "flex-" + i + i;
    case 5187:
      return pe + i + q(i, /(\w+).+(:[^]+)/, pe + "box-$1$2" + Ee + "flex-$1$2") + i;
    case 5443:
      return pe + i + Ee + "flex-item-" + q(i, /flex-|-self/g, "") + (Zt(i, /flex-|baseline/) ? "" : Ee + "grid-row-" + q(i, /flex-|-self/g, "")) + i;
    case 4675:
      return pe + i + Ee + "flex-line-pack" + q(i, /align-content|flex-|-self/g, "") + i;
    case 5548:
      return pe + i + Ee + q(i, "shrink", "negative") + i;
    case 5292:
      return pe + i + Ee + q(i, "basis", "preferred-size") + i;
    case 6060:
      return pe + "box-" + q(i, "-grow", "") + pe + i + Ee + q(i, "grow", "positive") + i;
    case 4554:
      return pe + q(i, /([^-])(transform)/g, "$1" + pe + "$2") + i;
    case 6187:
      return q(q(q(i, /(zoom-|grab)/, pe + "$1"), /(image-set)/, pe + "$1"), i, "") + i;
    case 5495:
    case 3959:
      return q(i, /(image-set\([^]*)/, pe + "$1$`$1");
    case 4968:
      return q(q(i, /(.+:)(flex-)?(.*)/, pe + "box-pack:$3" + Ee + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + pe + i + i;
    case 4200:
      if (!Zt(i, /flex-|baseline/))
        return Ee + "grid-column-align" + dr(i, s) + i;
      break;
    case 2592:
    case 3360:
      return Ee + q(i, "template-", "") + i;
    case 4384:
    case 3616:
      return u && u.some(function(c, m) {
        return s = m, Zt(c.props, /grid-\w+-end/);
      }) ? ~ki(i + (u = u[s].value), "span", 0) ? i : Ee + q(i, "-start", "") + i + Ee + "grid-row-span:" + (~ki(u, "span", 0) ? Zt(u, /\d+/) : +Zt(u, /\d+/) - +Zt(i, /\d+/)) + ";" : Ee + q(i, "-start", "") + i;
    case 4896:
    case 4128:
      return u && u.some(function(c) {
        return Zt(c.props, /grid-\w+-start/);
      }) ? i : Ee + q(q(i, "-end", "-span"), "span ", "") + i;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(i, /(.+)-inline(.+)/, pe + "$1$2") + i;
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
      if (zt(i) - 1 - s > 6)
        switch (De(i, s + 1)) {
          case 109:
            if (De(i, s + 4) !== 45)
              break;
          case 102:
            return q(i, /(.+:)(.+)-([^]+)/, "$1" + pe + "$2-$3$1" + oo + (De(i, s + 3) == 108 ? "$3" : "$2-$3")) + i;
          case 115:
            return ~ki(i, "stretch", 0) ? Hd(q(i, "stretch", "fill-available"), s, u) + i : i;
        }
      break;
    case 5152:
    case 5920:
      return q(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(c, m, w, E, L, _, M) {
        return Ee + m + ":" + w + M + (E ? Ee + m + "-span:" + (L ? _ : +_ - +w) + M : "") + i;
      });
    case 4949:
      if (De(i, s + 6) === 121)
        return q(i, ":", ":" + pe) + i;
      break;
    case 6444:
      switch (De(i, De(i, 14) === 45 ? 18 : 11)) {
        case 120:
          return q(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + pe + (De(i, 14) === 45 ? "inline-" : "") + "box$3$1" + pe + "$2$3$1" + Ee + "$2box$3") + i;
        case 100:
          return q(i, ":", ":" + Ee) + i;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return q(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function Ni(i, s) {
  for (var u = "", c = 0; c < i.length; c++)
    u += s(i[c], c, i, s) || "";
  return u;
}
function Dp(i, s, u, c) {
  switch (i.type) {
    case xp:
      if (i.children.length)
        break;
    case kp:
    case iu:
      return i.return = i.return || i.value;
    case Fd:
      return "";
    case Ud:
      return i.return = i.value + "{" + Ni(i.children, c) + "}";
    case zi:
      if (!zt(i.value = i.props.join(",")))
        return "";
  }
  return zt(u = Ni(i.children, c)) ? i.return = i.value + "{" + u + "}" : "";
}
function Fp(i) {
  var s = $d(i);
  return function(u, c, m, w) {
    for (var E = "", L = 0; L < s; L++)
      E += i[L](u, c, m, w) || "";
    return E;
  };
}
function Up(i) {
  return function(s) {
    s.root || (s = s.return) && i(s);
  };
}
function Vp(i, s, u, c) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case iu:
        i.return = Hd(i.value, i.length, u);
        return;
      case Ud:
        return Ni([gn(i, { value: q(i.value, "@", "@" + pe) })], c);
      case zi:
        if (i.length)
          return Tp(u = i.props, function(m) {
            switch (Zt(m, c = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ur(gn(i, { props: [q(m, /:(read-\w+)/, ":" + oo + "$1")] })), ur(gn(i, { props: [m] })), Qs(i, { props: hd(u, c) });
                break;
              case "::placeholder":
                ur(gn(i, { props: [q(m, /:(plac\w+)/, ":" + pe + "input-$1")] })), ur(gn(i, { props: [q(m, /:(plac\w+)/, ":" + oo + "$1")] })), ur(gn(i, { props: [q(m, /:(plac\w+)/, Ee + "input-$1")] })), ur(gn(i, { props: [m] })), Qs(i, { props: hd(u, c) });
                break;
            }
            return "";
          });
    }
}
var Wp = {
  animationIterationCount: 1,
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
}, ce = { WALLET_API_URL: "https://api-wallet.tiendanube.com", NODE_ENV: "production", WALLET_IFRAME_URL: "https://nuvempay.nuvemshop.com.br", WALLET_LIB_AUTH_URL: "https://wallet.tiendanube.com/auth.js" }, zn = typeof process < "u" && ce !== void 0 && (ce.REACT_APP_SC_ATTR || ce.SC_ATTR) || "data-styled", Qd = "active", Zd = "data-styled-version", Ui = "6.1.8", su = `/*!sc*/
`, uu = typeof window < "u" && "HTMLElement" in window, $p = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && ce !== void 0 && ce.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ce.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ce.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ce.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && ce !== void 0 && ce.SC_DISABLE_SPEEDY !== void 0 && ce.SC_DISABLE_SPEEDY !== "" ? ce.SC_DISABLE_SPEEDY !== "false" && ce.SC_DISABLE_SPEEDY : ce.NODE_ENV !== "production"), vd = /invalid hook call/i, yi = /* @__PURE__ */ new Set(), Bp = function(i, s) {
  if (ce.NODE_ENV !== "production") {
    var u = s ? ' with the id of "'.concat(s, '"') : "", c = "The component ".concat(i).concat(u, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, m = console.error;
    try {
      var w = !0;
      console.error = function(E) {
        for (var L = [], _ = 1; _ < arguments.length; _++)
          L[_ - 1] = arguments[_];
        vd.test(E) ? (w = !1, yi.delete(c)) : m.apply(void 0, cr([E], L, !1));
      }, Yt.useRef(), w && !yi.has(c) && (console.warn(c), yi.add(c));
    } catch (E) {
      vd.test(E.message) && yi.delete(c);
    } finally {
      console.error = m;
    }
  }
}, Vi = Object.freeze([]), pr = Object.freeze({});
function Hp(i, s, u) {
  return u === void 0 && (u = pr), i.theme !== u.theme && i.theme || s || u.theme;
}
var Ys = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Qp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zp = /(^-|-$)/g;
function yd(i) {
  return i.replace(Qp, "-").replace(Zp, "");
}
var Kp = /(a)(d)/gi, wi = 52, wd = function(i) {
  return String.fromCharCode(i + (i > 25 ? 39 : 97));
};
function Gs(i) {
  var s, u = "";
  for (s = Math.abs(i); s > wi; s = s / wi | 0)
    u = wd(s % wi) + u;
  return (wd(s % wi) + u).replace(Kp, "$1-$2");
}
var Fs, Kd = 5381, Rn = function(i, s) {
  for (var u = s.length; u; )
    i = 33 * i ^ s.charCodeAt(--u);
  return i;
}, Yd = function(i) {
  return Rn(Kd, i);
};
function Yp(i) {
  return Gs(Yd(i) >>> 0);
}
function Gd(i) {
  return ce.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function Us(i) {
  return typeof i == "string" && (ce.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
var Xd = typeof Symbol == "function" && Symbol.for, qd = Xd ? Symbol.for("react.memo") : 60115, Gp = Xd ? Symbol.for("react.forward_ref") : 60112, Xp = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, qp = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Jd = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Jp = ((Fs = {})[Gp] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Fs[qd] = Jd, Fs);
function Ed(i) {
  return ("type" in (s = i) && s.type.$$typeof) === qd ? Jd : "$$typeof" in i ? Jp[i.$$typeof] : Xp;
  var s;
}
var bp = Object.defineProperty, e0 = Object.getOwnPropertyNames, Sd = Object.getOwnPropertySymbols, t0 = Object.getOwnPropertyDescriptor, n0 = Object.getPrototypeOf, Cd = Object.prototype;
function bd(i, s, u) {
  if (typeof s != "string") {
    if (Cd) {
      var c = n0(s);
      c && c !== Cd && bd(i, c, u);
    }
    var m = e0(s);
    Sd && (m = m.concat(Sd(s)));
    for (var w = Ed(i), E = Ed(s), L = 0; L < m.length; ++L) {
      var _ = m[L];
      if (!(_ in qp || u && u[_] || E && _ in E || w && _ in w)) {
        var M = t0(s, _);
        try {
          bp(i, _, M);
        } catch {
        }
      }
    }
  }
  return i;
}
function Mn(i) {
  return typeof i == "function";
}
function au(i) {
  return typeof i == "object" && "styledComponentId" in i;
}
function An(i, s) {
  return i && s ? "".concat(i, " ").concat(s) : i || s || "";
}
function kd(i, s) {
  if (i.length === 0)
    return "";
  for (var u = i[0], c = 1; c < i.length; c++)
    u += s ? s + i[c] : i[c];
  return u;
}
function hr(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function Xs(i, s, u) {
  if (u === void 0 && (u = !1), !u && !hr(i) && !Array.isArray(i))
    return s;
  if (Array.isArray(s))
    for (var c = 0; c < s.length; c++)
      i[c] = Xs(i[c], s[c]);
  else if (hr(s))
    for (var c in s)
      i[c] = Xs(i[c], s[c]);
  return i;
}
function cu(i, s) {
  Object.defineProperty(i, "toString", { value: s });
}
var r0 = ce.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function o0() {
  for (var i = [], s = 0; s < arguments.length; s++)
    i[s] = arguments[s];
  for (var u = i[0], c = [], m = 1, w = i.length; m < w; m += 1)
    c.push(i[m]);
  return c.forEach(function(E) {
    u = u.replace(/%[a-z]/, E);
  }), u;
}
function Gt(i) {
  for (var s = [], u = 1; u < arguments.length; u++)
    s[u - 1] = arguments[u];
  return ce.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i, " for more information.").concat(s.length > 0 ? " Args: ".concat(s.join(", ")) : "")) : new Error(o0.apply(void 0, cr([r0[i]], s, !1)).trim());
}
var i0 = function() {
  function i(s) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = s;
  }
  return i.prototype.indexOfGroup = function(s) {
    for (var u = 0, c = 0; c < s; c++)
      u += this.groupSizes[c];
    return u;
  }, i.prototype.insertRules = function(s, u) {
    if (s >= this.groupSizes.length) {
      for (var c = this.groupSizes, m = c.length, w = m; s >= w; )
        if ((w <<= 1) < 0)
          throw Gt(16, "".concat(s));
      this.groupSizes = new Uint32Array(w), this.groupSizes.set(c), this.length = w;
      for (var E = m; E < w; E++)
        this.groupSizes[E] = 0;
    }
    for (var L = this.indexOfGroup(s + 1), _ = (E = 0, u.length); E < _; E++)
      this.tag.insertRule(L, u[E]) && (this.groupSizes[s]++, L++);
  }, i.prototype.clearGroup = function(s) {
    if (s < this.length) {
      var u = this.groupSizes[s], c = this.indexOfGroup(s), m = c + u;
      this.groupSizes[s] = 0;
      for (var w = c; w < m; w++)
        this.tag.deleteRule(c);
    }
  }, i.prototype.getGroup = function(s) {
    var u = "";
    if (s >= this.length || this.groupSizes[s] === 0)
      return u;
    for (var c = this.groupSizes[s], m = this.indexOfGroup(s), w = m + c, E = m; E < w; E++)
      u += "".concat(this.tag.getRule(E)).concat(su);
    return u;
  }, i;
}(), Ti = /* @__PURE__ */ new Map(), Pi = /* @__PURE__ */ new Map(), Li = 1, Ei = function(i) {
  if (Ti.has(i))
    return Ti.get(i);
  for (; Pi.has(Li); )
    Li++;
  var s = Li++;
  if (ce.NODE_ENV !== "production" && ((0 | s) < 0 || s > 1073741824))
    throw Gt(16, "".concat(s));
  return Ti.set(i, s), Pi.set(s, i), s;
}, l0 = function(i, s) {
  Li = s + 1, Ti.set(i, s), Pi.set(s, i);
}, s0 = "style[".concat(zn, "][").concat(Zd, '="').concat(Ui, '"]'), u0 = new RegExp("^".concat(zn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), a0 = function(i, s, u) {
  for (var c, m = u.split(","), w = 0, E = m.length; w < E; w++)
    (c = m[w]) && i.registerName(s, c);
}, c0 = function(i, s) {
  for (var u, c = ((u = s.textContent) !== null && u !== void 0 ? u : "").split(su), m = [], w = 0, E = c.length; w < E; w++) {
    var L = c[w].trim();
    if (L) {
      var _ = L.match(u0);
      if (_) {
        var M = 0 | parseInt(_[1], 10), B = _[2];
        M !== 0 && (l0(B, M), a0(i, B, _[3]), i.getTag().insertRules(M, m)), m.length = 0;
      } else
        m.push(L);
    }
  }
};
function d0() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var ef = function(i) {
  var s = document.head, u = i || s, c = document.createElement("style"), m = function(L) {
    var _ = Array.from(L.querySelectorAll("style[".concat(zn, "]")));
    return _[_.length - 1];
  }(u), w = m !== void 0 ? m.nextSibling : null;
  c.setAttribute(zn, Qd), c.setAttribute(Zd, Ui);
  var E = d0();
  return E && c.setAttribute("nonce", E), u.insertBefore(c, w), c;
}, f0 = function() {
  function i(s) {
    this.element = ef(s), this.element.appendChild(document.createTextNode("")), this.sheet = function(u) {
      if (u.sheet)
        return u.sheet;
      for (var c = document.styleSheets, m = 0, w = c.length; m < w; m++) {
        var E = c[m];
        if (E.ownerNode === u)
          return E;
      }
      throw Gt(17);
    }(this.element), this.length = 0;
  }
  return i.prototype.insertRule = function(s, u) {
    try {
      return this.sheet.insertRule(u, s), this.length++, !0;
    } catch {
      return !1;
    }
  }, i.prototype.deleteRule = function(s) {
    this.sheet.deleteRule(s), this.length--;
  }, i.prototype.getRule = function(s) {
    var u = this.sheet.cssRules[s];
    return u && u.cssText ? u.cssText : "";
  }, i;
}(), p0 = function() {
  function i(s) {
    this.element = ef(s), this.nodes = this.element.childNodes, this.length = 0;
  }
  return i.prototype.insertRule = function(s, u) {
    if (s <= this.length && s >= 0) {
      var c = document.createTextNode(u);
      return this.element.insertBefore(c, this.nodes[s] || null), this.length++, !0;
    }
    return !1;
  }, i.prototype.deleteRule = function(s) {
    this.element.removeChild(this.nodes[s]), this.length--;
  }, i.prototype.getRule = function(s) {
    return s < this.length ? this.nodes[s].textContent : "";
  }, i;
}(), h0 = function() {
  function i(s) {
    this.rules = [], this.length = 0;
  }
  return i.prototype.insertRule = function(s, u) {
    return s <= this.length && (this.rules.splice(s, 0, u), this.length++, !0);
  }, i.prototype.deleteRule = function(s) {
    this.rules.splice(s, 1), this.length--;
  }, i.prototype.getRule = function(s) {
    return s < this.length ? this.rules[s] : "";
  }, i;
}(), xd = uu, m0 = { isServer: !uu, useCSSOMInjection: !$p }, tf = function() {
  function i(s, u, c) {
    s === void 0 && (s = pr), u === void 0 && (u = {});
    var m = this;
    this.options = Ke(Ke({}, m0), s), this.gs = u, this.names = new Map(c), this.server = !!s.isServer, !this.server && uu && xd && (xd = !1, function(w) {
      for (var E = document.querySelectorAll(s0), L = 0, _ = E.length; L < _; L++) {
        var M = E[L];
        M && M.getAttribute(zn) !== Qd && (c0(w, M), M.parentNode && M.parentNode.removeChild(M));
      }
    }(this)), cu(this, function() {
      return function(w) {
        for (var E = w.getTag(), L = E.length, _ = "", M = function(D) {
          var F = function(fe) {
            return Pi.get(fe);
          }(D);
          if (F === void 0)
            return "continue";
          var K = w.names.get(F), re = E.getGroup(D);
          if (K === void 0 || re.length === 0)
            return "continue";
          var Z = "".concat(zn, ".g").concat(D, '[id="').concat(F, '"]'), G = "";
          K !== void 0 && K.forEach(function(fe) {
            fe.length > 0 && (G += "".concat(fe, ","));
          }), _ += "".concat(re).concat(Z, '{content:"').concat(G, '"}').concat(su);
        }, B = 0; B < L; B++)
          M(B);
        return _;
      }(m);
    });
  }
  return i.registerId = function(s) {
    return Ei(s);
  }, i.prototype.reconstructWithOptions = function(s, u) {
    return u === void 0 && (u = !0), new i(Ke(Ke({}, this.options), s), this.gs, u && this.names || void 0);
  }, i.prototype.allocateGSInstance = function(s) {
    return this.gs[s] = (this.gs[s] || 0) + 1;
  }, i.prototype.getTag = function() {
    return this.tag || (this.tag = (s = function(u) {
      var c = u.useCSSOMInjection, m = u.target;
      return u.isServer ? new h0(m) : c ? new f0(m) : new p0(m);
    }(this.options), new i0(s)));
    var s;
  }, i.prototype.hasNameForId = function(s, u) {
    return this.names.has(s) && this.names.get(s).has(u);
  }, i.prototype.registerName = function(s, u) {
    if (Ei(s), this.names.has(s))
      this.names.get(s).add(u);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(u), this.names.set(s, c);
    }
  }, i.prototype.insertRules = function(s, u, c) {
    this.registerName(s, u), this.getTag().insertRules(Ei(s), c);
  }, i.prototype.clearNames = function(s) {
    this.names.has(s) && this.names.get(s).clear();
  }, i.prototype.clearRules = function(s) {
    this.getTag().clearGroup(Ei(s)), this.clearNames(s);
  }, i.prototype.clearTag = function() {
    this.tag = void 0;
  }, i;
}(), g0 = /&/g, v0 = /^\s*\/\/.*$/gm;
function nf(i, s) {
  return i.map(function(u) {
    return u.type === "rule" && (u.value = "".concat(s, " ").concat(u.value), u.value = u.value.replaceAll(",", ",".concat(s, " ")), u.props = u.props.map(function(c) {
      return "".concat(s, " ").concat(c);
    })), Array.isArray(u.children) && u.type !== "@keyframes" && (u.children = nf(u.children, s)), u;
  });
}
function y0(i) {
  var s, u, c, m = i === void 0 ? pr : i, w = m.options, E = w === void 0 ? pr : w, L = m.plugins, _ = L === void 0 ? Vi : L, M = function(F, K, re) {
    return re.startsWith(u) && re.endsWith(u) && re.replaceAll(u, "").length > 0 ? ".".concat(s) : F;
  }, B = _.slice();
  B.push(function(F) {
    F.type === zi && F.value.includes("&") && (F.props[0] = F.props[0].replace(g0, u).replace(c, M));
  }), E.prefix && B.push(Vp), B.push(Dp);
  var D = function(F, K, re, Z) {
    K === void 0 && (K = ""), re === void 0 && (re = ""), Z === void 0 && (Z = "&"), s = Z, u = K, c = new RegExp("\\".concat(u, "\\b"), "g");
    var G = F.replace(v0, ""), fe = zp(re || K ? "".concat(re, " ").concat(K, " { ").concat(G, " }") : G);
    E.namespace && (fe = nf(fe, E.namespace));
    var ie = [];
    return Ni(fe, Fp(B.concat(Up(function(b) {
      return ie.push(b);
    })))), ie;
  };
  return D.hash = _.length ? _.reduce(function(F, K) {
    return K.name || Gt(15), Rn(F, K.name);
  }, Kd).toString() : "", D;
}
var w0 = new tf(), qs = y0(), rf = jn.createContext({ shouldForwardProp: void 0, styleSheet: w0, stylis: qs });
rf.Consumer;
jn.createContext(void 0);
function _d() {
  return Yt.useContext(rf);
}
var Td = function() {
  function i(s, u) {
    var c = this;
    this.inject = function(m, w) {
      w === void 0 && (w = qs);
      var E = c.name + w.hash;
      m.hasNameForId(c.id, E) || m.insertRules(c.id, E, w(c.rules, E, "@keyframes"));
    }, this.name = s, this.id = "sc-keyframes-".concat(s), this.rules = u, cu(this, function() {
      throw Gt(12, String(c.name));
    });
  }
  return i.prototype.getName = function(s) {
    return s === void 0 && (s = qs), this.name + s.hash;
  }, i;
}(), E0 = function(i) {
  return i >= "A" && i <= "Z";
};
function Ld(i) {
  for (var s = "", u = 0; u < i.length; u++) {
    var c = i[u];
    if (u === 1 && c === "-" && i[0] === "-")
      return i;
    E0(c) ? s += "-" + c.toLowerCase() : s += c;
  }
  return s.startsWith("ms-") ? "-" + s : s;
}
var of = function(i) {
  return i == null || i === !1 || i === "";
}, lf = function(i) {
  var s, u, c = [];
  for (var m in i) {
    var w = i[m];
    i.hasOwnProperty(m) && !of(w) && (Array.isArray(w) && w.isCss || Mn(w) ? c.push("".concat(Ld(m), ":"), w, ";") : hr(w) ? c.push.apply(c, cr(cr(["".concat(m, " {")], lf(w), !1), ["}"], !1)) : c.push("".concat(Ld(m), ": ").concat((s = m, (u = w) == null || typeof u == "boolean" || u === "" ? "" : typeof u != "number" || u === 0 || s in Wp || s.startsWith("--") ? String(u).trim() : "".concat(u, "px")), ";")));
  }
  return c;
};
function On(i, s, u, c) {
  if (of(i))
    return [];
  if (au(i))
    return [".".concat(i.styledComponentId)];
  if (Mn(i)) {
    if (!Mn(w = i) || w.prototype && w.prototype.isReactComponent || !s)
      return [i];
    var m = i(s);
    return ce.NODE_ENV === "production" || typeof m != "object" || Array.isArray(m) || m instanceof Td || hr(m) || m === null || console.error("".concat(Gd(i), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), On(m, s, u, c);
  }
  var w;
  return i instanceof Td ? u ? (i.inject(u, c), [i.getName(c)]) : [i] : hr(i) ? lf(i) : Array.isArray(i) ? Array.prototype.concat.apply(Vi, i.map(function(E) {
    return On(E, s, u, c);
  })) : [i.toString()];
}
function S0(i) {
  for (var s = 0; s < i.length; s += 1) {
    var u = i[s];
    if (Mn(u) && !au(u))
      return !1;
  }
  return !0;
}
var C0 = Yd(Ui), k0 = function() {
  function i(s, u, c) {
    this.rules = s, this.staticRulesId = "", this.isStatic = ce.NODE_ENV === "production" && (c === void 0 || c.isStatic) && S0(s), this.componentId = u, this.baseHash = Rn(C0, u), this.baseStyle = c, tf.registerId(u);
  }
  return i.prototype.generateAndInjectStyles = function(s, u, c) {
    var m = this.baseStyle ? this.baseStyle.generateAndInjectStyles(s, u, c) : "";
    if (this.isStatic && !c.hash)
      if (this.staticRulesId && u.hasNameForId(this.componentId, this.staticRulesId))
        m = An(m, this.staticRulesId);
      else {
        var w = kd(On(this.rules, s, u, c)), E = Gs(Rn(this.baseHash, w) >>> 0);
        if (!u.hasNameForId(this.componentId, E)) {
          var L = c(w, ".".concat(E), void 0, this.componentId);
          u.insertRules(this.componentId, E, L);
        }
        m = An(m, E), this.staticRulesId = E;
      }
    else {
      for (var _ = Rn(this.baseHash, c.hash), M = "", B = 0; B < this.rules.length; B++) {
        var D = this.rules[B];
        if (typeof D == "string")
          M += D, ce.NODE_ENV !== "production" && (_ = Rn(_, D));
        else if (D) {
          var F = kd(On(D, s, u, c));
          _ = Rn(_, F + B), M += F;
        }
      }
      if (M) {
        var K = Gs(_ >>> 0);
        u.hasNameForId(this.componentId, K) || u.insertRules(this.componentId, K, c(M, ".".concat(K), void 0, this.componentId)), m = An(m, K);
      }
    }
    return m;
  }, i;
}(), Ri = jn.createContext(void 0);
Ri.Consumer;
function x0(i) {
  var s = jn.useContext(Ri), u = Yt.useMemo(function() {
    return function(c, m) {
      if (!c)
        throw Gt(14);
      if (Mn(c)) {
        var w = c(m);
        if (ce.NODE_ENV !== "production" && (w === null || Array.isArray(w) || typeof w != "object"))
          throw Gt(7);
        return w;
      }
      if (Array.isArray(c) || typeof c != "object")
        throw Gt(8);
      return m ? Ke(Ke({}, m), c) : c;
    }(i.theme, s);
  }, [i.theme, s]);
  return i.children ? jn.createElement(Ri.Provider, { value: u }, i.children) : null;
}
var Vs = {}, Nd = /* @__PURE__ */ new Set();
function _0(i, s, u) {
  var c = au(i), m = i, w = !Us(i), E = s.attrs, L = E === void 0 ? Vi : E, _ = s.componentId, M = _ === void 0 ? function(X, oe) {
    var H = typeof X != "string" ? "sc" : yd(X);
    Vs[H] = (Vs[H] || 0) + 1;
    var U = "".concat(H, "-").concat(Yp(Ui + H + Vs[H]));
    return oe ? "".concat(oe, "-").concat(U) : U;
  }(s.displayName, s.parentComponentId) : _, B = s.displayName, D = B === void 0 ? function(X) {
    return Us(X) ? "styled.".concat(X) : "Styled(".concat(Gd(X), ")");
  }(i) : B, F = s.displayName && s.componentId ? "".concat(yd(s.displayName), "-").concat(s.componentId) : s.componentId || M, K = c && m.attrs ? m.attrs.concat(L).filter(Boolean) : L, re = s.shouldForwardProp;
  if (c && m.shouldForwardProp) {
    var Z = m.shouldForwardProp;
    if (s.shouldForwardProp) {
      var G = s.shouldForwardProp;
      re = function(X, oe) {
        return Z(X, oe) && G(X, oe);
      };
    } else
      re = Z;
  }
  var fe = new k0(u, F, c ? m.componentStyle : void 0);
  function ie(X, oe) {
    return function(H, U, Pe) {
      var Ye = H.attrs, wt = H.componentStyle, Mt = H.defaultProps, ut = H.foldedComponentIds, We = H.styledComponentId, rt = H.target, at = jn.useContext(Ri), $e = _d(), ge = H.shouldForwardProp || $e.shouldForwardProp;
      ce.NODE_ENV !== "production" && Yt.useDebugValue(We);
      var N = Hp(U, at, Mt) || pr, z = function(de, ee, ue) {
        for (var te, _e = Ke(Ke({}, ee), { className: void 0, theme: ue }), gr = 0; gr < de.length; gr += 1) {
          var Dt = Mn(te = de[gr]) ? te(_e) : te;
          for (var Et in Dt)
            _e[Et] = Et === "className" ? An(_e[Et], Dt[Et]) : Et === "style" ? Ke(Ke({}, _e[Et]), Dt[Et]) : Dt[Et];
        }
        return ee.className && (_e.className = An(_e.className, ee.className)), _e;
      }(Ye, U, N), f = z.as || rt, S = {};
      for (var R in z)
        z[R] === void 0 || R[0] === "$" || R === "as" || R === "theme" && z.theme === N || (R === "forwardedAs" ? S.as = z.forwardedAs : ge && !ge(R, f) || (S[R] = z[R], ge || ce.NODE_ENV !== "development" || Cp(R) || Nd.has(R) || !Ys.has(f) || (Nd.add(R), console.warn('styled-components: it looks like an unknown prop "'.concat(R, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var J = function(de, ee) {
        var ue = _d(), te = de.generateAndInjectStyles(ee, ue.styleSheet, ue.stylis);
        return ce.NODE_ENV !== "production" && Yt.useDebugValue(te), te;
      }(wt, z);
      ce.NODE_ENV !== "production" && H.warnTooManyClasses && H.warnTooManyClasses(J);
      var Y = An(ut, We);
      return J && (Y += " " + J), z.className && (Y += " " + z.className), S[Us(f) && !Ys.has(f) ? "class" : "className"] = Y, S.ref = Pe, Yt.createElement(f, S);
    }(b, X, oe);
  }
  ie.displayName = D;
  var b = jn.forwardRef(ie);
  return b.attrs = K, b.componentStyle = fe, b.displayName = D, b.shouldForwardProp = re, b.foldedComponentIds = c ? An(m.foldedComponentIds, m.styledComponentId) : "", b.styledComponentId = F, b.target = c ? m.target : i, Object.defineProperty(b, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(X) {
    this._foldedDefaultProps = c ? function(oe) {
      for (var H = [], U = 1; U < arguments.length; U++)
        H[U - 1] = arguments[U];
      for (var Pe = 0, Ye = H; Pe < Ye.length; Pe++)
        Xs(oe, Ye[Pe], !0);
      return oe;
    }({}, m.defaultProps, X) : X;
  } }), ce.NODE_ENV !== "production" && (Bp(D, F), b.warnTooManyClasses = /* @__PURE__ */ function(X, oe) {
    var H = {}, U = !1;
    return function(Pe) {
      if (!U && (H[Pe] = !0, Object.keys(H).length >= 200)) {
        var Ye = oe ? ' with the id of "'.concat(oe, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(X).concat(Ye, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), U = !0, H = {};
      }
    };
  }(D, F)), cu(b, function() {
    return ".".concat(b.styledComponentId);
  }), w && bd(b, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), b;
}
function Pd(i, s) {
  for (var u = [i[0]], c = 0, m = s.length; c < m; c += 1)
    u.push(s[c], i[c + 1]);
  return u;
}
var Rd = function(i) {
  return Object.assign(i, { isCss: !0 });
};
function T0(i) {
  for (var s = [], u = 1; u < arguments.length; u++)
    s[u - 1] = arguments[u];
  if (Mn(i) || hr(i))
    return Rd(On(Pd(Vi, cr([i], s, !0))));
  var c = i;
  return s.length === 0 && c.length === 1 && typeof c[0] == "string" ? On(c) : Rd(On(Pd(c, s)));
}
function Js(i, s, u) {
  if (u === void 0 && (u = pr), !s)
    throw Gt(1, s);
  var c = function(m) {
    for (var w = [], E = 1; E < arguments.length; E++)
      w[E - 1] = arguments[E];
    return i(s, u, T0.apply(void 0, cr([m], w, !1)));
  };
  return c.attrs = function(m) {
    return Js(i, s, Ke(Ke({}, u), { attrs: Array.prototype.concat(u.attrs, m).filter(Boolean) }));
  }, c.withConfig = function(m) {
    return Js(i, s, Ke(Ke({}, u), m));
  }, c;
}
var sf = function(i) {
  return Js(_0, i);
}, Fe = sf;
Ys.forEach(function(i) {
  Fe[i] = sf(i);
});
ce.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Si = "__sc-".concat(zn, "__");
ce.NODE_ENV !== "production" && ce.NODE_ENV !== "test" && typeof window < "u" && (window[Si] || (window[Si] = 0), window[Si] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Si] += 1);
const bs = {
  fontWeight: {
    book: 300,
    medium: 500,
    semibold: 600
  },
  pallete: {
    nimbusPrimaryInteractive: "#0050C3"
  },
  background: {
    neutral: "#FFF"
  },
  lineHeights: {
    small: "16px"
  },
  fontSize: {
    large: "24px",
    xMedium: "16px",
    medium: "14px",
    xSmall: "12px",
    small: "10px"
  },
  spacing: {
    small: "8px",
    xSmall: "12px",
    xMedium: "16px"
  },
  fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
}, L0 = (i) => /* @__PURE__ */ V.jsx(x0, { theme: bs, children: i }), uf = (i, s) => {
  const u = document.getElementById(s);
  Dd(u).render(L0(i));
}, N0 = Fe.div.attrs({
  role: "separator"
})`
  &&& {
    margin-bottom: ${({ marginBottom: i, theme: s }) => i ?? s.spacing.xMedium};
    margin-top: ${({ marginTop: i, theme: s }) => i ?? s.spacing.xMedium};
    width: ${({ width: i }) => i ?? "100%"};
  }
`, P0 = Fe.div`
  display: grid;
  place-items: center;
  grid-template-columns: 10fr 1fr 10fr;
  opacity: 0.5;
  margin-bottom: ${({ $marginBottom: i, theme: s }) => i ?? s.spacing.xSmall};
  margin-top: ${({ $marginTop: i, theme: s }) => i ?? s.spacing.xSmall};
  width: ${({ width: i }) => i ?? "100%"};
`, Ad = Fe.div`
  height: 1px;
  width: 100%;
  opacity: 0.3;
  background-color: currentColor;
`, R0 = Fe.div`
  padding: 0px 16px;
  text-transform: uppercase;
  font-size: 12px;
`, A0 = ({
  text: i,
  width: s,
  marginBottom: u,
  marginTop: c
}) => /* @__PURE__ */ V.jsxs(
  P0,
  {
    width: s,
    $marginBottom: u,
    $marginTop: c,
    role: "separator",
    children: [
      /* @__PURE__ */ V.jsx(Ad, {}),
      /* @__PURE__ */ V.jsx(R0, { children: i }),
      /* @__PURE__ */ V.jsx(Ad, {})
    ]
  }
), me = Fe.path`
  fill: ${({ fill: i }) => i};
`, du = Fe.svg`
  width: ${({ width: i }) => i};
  height: ${({ height: i }) => i};
`, I0 = Fe(du)`
  position: absolute;
`, O0 = () => /* @__PURE__ */ V.jsxs(
  I0,
  {
    width: "226",
    height: "17",
    viewBox: "0 0 226 17",
    fill: "none",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M146.635 0H146.617a8.493 8.493 0 0 0-5.91 2.409A6.618 6.618 0 0 0 131.52 8.5a6.618 6.618 0 0 0 6.611 6.611c.884 0 1.759-.18 2.569-.52A8.466 8.466 0 0 0 146.621 17c4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.806-8.493-8.486-8.5Zm-.014 15.111A6.619 6.619 0 0 1 140.01 8.5h-1.889a8.45 8.45 0 0 0 1.317 4.536 4.727 4.727 0 0 1-1.307.186 4.728 4.728 0 0 1-4.723-4.722 4.728 4.728 0 0 1 4.723-4.722 4.68 4.68 0 0 1 2.832.943 4.687 4.687 0 0 1 1.89 3.779h1.889a6.554 6.554 0 0 0-2.362-5.063 6.609 6.609 0 0 1 4.245-1.548 6.618 6.618 0 0 1 6.606 6.611 6.62 6.62 0 0 1-6.611 6.611h.001Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M166.265 5.92c.241.431.362.93.362 1.495v4.868h-1.822V7.846a1.79 1.79 0 0 0-.195-.862 1.362 1.362 0 0 0-.542-.556 1.598 1.598 0 0 0-.792-.194c-.297 0-.562.065-.793.194-.232.13-.413.316-.542.556a1.782 1.782 0 0 0-.195.862v4.437h-1.835V4.717h1.724v.93c.175-.312.419-.56.73-.743.404-.236.874-.355 1.412-.355.538 0 1.051.12 1.482.361.431.242.766.578 1.008 1.01h-.002Zm8.36-1.203v4.59c0 .62-.141 1.168-.425 1.64a2.95 2.95 0 0 1-1.168 1.106c-.496.264-1.082.397-1.759.397-.677 0-1.255-.133-1.76-.397a2.924 2.924 0 0 1-1.182-1.106c-.283-.472-.424-1.02-.424-1.64v-4.59h1.835V9.25c0 .306.065.572.195.8.129.228.31.405.542.536a1.6 1.6 0 0 0 .793.194c.296 0 .574-.065.806-.194.232-.13.411-.308.536-.536.125-.227.188-.494.188-.8V4.717h1.823Zm8.185 0-2.976 7.566h-1.613l-2.977-7.566h1.989l1.788 4.938 1.8-4.938h1.989Zm6.464.931a3.33 3.33 0 0 0-1.148-.806c-.45-.195-.971-.292-1.565-.292-.714 0-1.354.171-1.918.514a3.788 3.788 0 0 0-1.349 1.398c-.334.59-.501 1.264-.501 2.024s.163 1.4.487 2.002c.324.604.781 1.08 1.37 1.433.588.353 1.273.528 2.052.528.51 0 .983-.08 1.418-.236a3.457 3.457 0 0 0 1.126-.654c.316-.278.547-.598.695-.96l-1.474-.722a1.889 1.889 0 0 1-.688.709c-.292.176-.647.264-1.065.264-.417 0-.786-.098-1.106-.292a1.83 1.83 0 0 1-.723-.828 2.256 2.256 0 0 1-.184-.703h5.449c.037-.11.062-.234.076-.369.014-.134.021-.271.021-.41 0-.51-.083-.986-.25-1.426a3.636 3.636 0 0 0-.723-1.176v.002Zm-3.726.696a1.807 1.807 0 0 1 1.015-.292c.379 0 .739.097 1.022.292.282.194.487.459.612.792.057.152.091.316.101.487h-3.558a2.23 2.23 0 0 1 .133-.445c.153-.362.377-.64.675-.834Zm16.632-.424c.24.431.361.93.361 1.495v4.868h-1.821V7.846a1.9 1.9 0 0 0-.181-.862 1.317 1.317 0 0 0-.508-.556 1.484 1.484 0 0 0-.772-.194c-.298 0-.543.065-.765.194-.223.13-.395.316-.515.556-.121.242-.18.529-.18.862v4.437h-1.822V7.846a1.9 1.9 0 0 0-.181-.862 1.317 1.317 0 0 0-.508-.556 1.484 1.484 0 0 0-.772-.194 1.47 1.47 0 0 0-.765.194 1.3 1.3 0 0 0-.514.556 1.904 1.904 0 0 0-.181.862v4.437h-1.835V4.717h1.724v.95c.154-.299.367-.537.639-.714.418-.268.908-.403 1.474-.403.622 0 1.168.163 1.641.487.298.204.529.45.695.736.202-.32.453-.577.751-.772.463-.301.997-.452 1.599-.452.538 0 1.017.12 1.44.361.421.242.753.578.995 1.01h.001Zm7.579-.851c-.56-.341-1.196-.513-1.907-.513-.712 0-1.307.164-1.843.491a3.293 3.293 0 0 0-1.089 1.07v-1.4h-.854v10.418h.854v-4.298c.26.458.617.829 1.074 1.111.545.337 1.165.505 1.857.505a3.6 3.6 0 0 0 1.907-.52 3.696 3.696 0 0 0 1.323-1.416c.322-.598.483-1.266.483-2.006 0-.74-.161-1.438-.483-2.035a3.645 3.645 0 0 0-1.323-1.408h.001Zm.526 5.015c-.247.47-.584.84-1.011 1.11-.427.27-.91.406-1.451.406a2.738 2.738 0 0 1-1.473-.406 2.936 2.936 0 0 1-1.031-1.11 3.258 3.258 0 0 1-.384-1.586c0-.588.128-1.115.384-1.58a2.94 2.94 0 0 1 1.038-1.103c.437-.27.926-.405 1.466-.405.54 0 1.024.135 1.451.405.427.27.764.639 1.011 1.103.246.465.37.992.37 1.58 0 .588-.123 1.117-.37 1.586Zm6.812-5.208c-.422-.214-.908-.32-1.458-.32a3.46 3.46 0 0 0-2.262.84 2.567 2.567 0 0 0-.655.84l.768.413a2.39 2.39 0 0 1 .868-.926c.38-.237.806-.356 1.28-.356.579 0 1.048.156 1.409.47.36.313.54.72.54 1.223v.423l-2.831.474c-.579.095-1.048.258-1.409.49-.36.233-.621.51-.783.833a2.295 2.295 0 0 0-.242 1.038c0 .417.11.787.328 1.11a2.2 2.2 0 0 0 .882.755c.37.18.792.27 1.267.27a3.3 3.3 0 0 0 1.273-.235c.385-.157.719-.36 1.004-.612.218-.192.388-.401.512-.625v1.301h.854V7.06c0-.493-.119-.927-.357-1.301a2.45 2.45 0 0 0-.989-.883h.001Zm-.803 6.418c-.408.251-.887.377-1.438.377-.475 0-.865-.128-1.174-.384a1.234 1.234 0 0 1-.462-.995c0-.38.132-.712.398-.996.265-.285.721-.48 1.366-.583l2.603-.432v.66c0 .493-.113.946-.341 1.358a2.672 2.672 0 0 1-.953.996l.001-.001Zm8.644-6.577-2.592 6.443-2.579-6.443h-.939l3.039 7.554-.375.88c-.218.502-.46.863-.726 1.08-.265.22-.631.332-1.095.342-.123 0-.259-.01-.406-.029a3.414 3.414 0 0 1-.391-.071v.796a2.92 2.92 0 0 0 .882.142c.493 0 .908-.106 1.245-.32.337-.213.614-.48.832-.803.218-.324.394-.641.526-.954l3.532-8.618h-.953Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M8.6 8.729c-.19 1.116-.635 1.989-1.337 2.619-.702.63-1.615.945-2.74.945-.918 0-1.72-.216-2.403-.648A4.37 4.37 0 0 1 .54 9.849C.18 9.093 0 8.243 0 7.298c0-.945.18-1.8.54-2.565a4.261 4.261 0 0 1 1.58-1.796c.683-.44 1.484-.661 2.402-.661 1.071 0 1.954.301 2.646.904.702.594 1.161 1.422 1.378 2.484l-1.85.095c-.135-.621-.391-1.098-.77-1.431-.378-.333-.854-.5-1.43-.5-.595 0-1.094.153-1.499.46-.396.296-.693.71-.891 1.241-.189.522-.283 1.112-.283 1.769 0 .657.094 1.246.283 1.768.198.513.495.923.891 1.229.405.297.905.445 1.498.445.603 0 1.098-.18 1.486-.54.386-.36.639-.882.756-1.566L8.6 8.73Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M13.226 12.239c-.71 0-1.336-.153-1.876-.46a3.087 3.087 0 0 1-1.229-1.309c-.288-.567-.432-1.224-.432-1.97 0-.748.144-1.405.432-1.972a3.087 3.087 0 0 1 1.229-1.31c.54-.305 1.165-.458 1.876-.458.711 0 1.332.153 1.863.459.54.306.954.742 1.242 1.31.288.566.432 1.223.432 1.97 0 .747-.144 1.404-.432 1.971a3.064 3.064 0 0 1-1.242 1.31c-.53.306-1.152.459-1.863.459Zm0-1.418c.558 0 .986-.202 1.283-.607.306-.405.459-.977.459-1.715 0-.738-.153-1.31-.46-1.714-.296-.405-.724-.608-1.282-.608s-.99.203-1.296.608c-.297.405-.445.976-.445 1.714s.148 1.31.445 1.715c.306.405.738.607 1.296.607Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "m19.755 4.922.04 1.147c.18-.414.441-.733.783-.958.351-.234.76-.351 1.229-.351.513 0 .945.13 1.296.391.35.252.603.612.756 1.08.17-.486.436-.85.796-1.093.37-.252.81-.378 1.323-.378.486 0 .905.103 1.256.31.35.207.62.513.81.918.198.405.297.9.297 1.485v4.604h-1.755v-4.05c0-.612-.095-1.071-.284-1.377-.189-.315-.472-.473-.85-.473-.306 0-.563.072-.77.216-.207.135-.364.342-.472.621-.108.27-.162.608-.162 1.013v4.05h-1.593v-4.05c0-.405-.04-.743-.122-1.013-.08-.27-.207-.477-.378-.62a.932.932 0 0 0-.62-.217c-.307 0-.563.072-.77.216a1.33 1.33 0 0 0-.473.635c-.108.27-.162.603-.162.999v4.05h-1.755V4.922h1.58Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M30 4.922h1.661l.054 1.498-.148-.162c.18-.486.463-.855.85-1.107.396-.26.873-.391 1.431-.391.657 0 1.215.166 1.674.5.468.332.815.782 1.04 1.35.234.557.35 1.187.35 1.89 0 .701-.116 1.336-.35 1.903a2.958 2.958 0 0 1-1.04 1.336c-.459.333-1.017.5-1.674.5-.369 0-.702-.059-.999-.176a2.14 2.14 0 0 1-.77-.513 2.28 2.28 0 0 1-.499-.837l.176-.135v3.524H30v-9.18Zm1.62 3.577c0 .423.064.81.19 1.161s.32.635.58.85c.261.217.585.325.972.325.567 0 1-.22 1.296-.662.297-.45.446-1.008.446-1.674 0-.657-.149-1.21-.446-1.66-.297-.45-.729-.675-1.296-.675-.387 0-.71.108-.972.324-.26.216-.454.5-.58.85a3.415 3.415 0 0 0-.19 1.161Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "m39.953 4.922.068 2.011-.135-.067c.09-.666.279-1.157.567-1.472.297-.315.715-.472 1.255-.472h.675v1.363h-.688c-.378 0-.689.063-.932.19a1.115 1.115 0 0 0-.526.566c-.108.252-.162.572-.162.959v4.077H38.32V4.922h1.633Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M43.39 7.095c.143-.738.49-1.31 1.039-1.714.558-.414 1.278-.621 2.16-.621 1.035 0 1.818.26 2.349.783.54.522.81 1.287.81 2.295v2.443c0 .19.036.324.108.405a.456.456 0 0 0 .337.122h.27v1.269l-.405.013h-.054a4.155 4.155 0 0 1-.742-.04 1.543 1.543 0 0 1-.689-.31c-.198-.163-.315-.41-.35-.743-.172.369-.464.67-.878.904-.405.225-.905.338-1.499.338-.738 0-1.35-.185-1.836-.554a1.792 1.792 0 0 1-.729-1.485c0-.44.104-.8.31-1.08.208-.279.505-.5.892-.661.387-.171.886-.315 1.498-.432l2.012-.405c-.01-.54-.13-.94-.365-1.202-.225-.27-.571-.405-1.04-.405-.377 0-.688.104-.93.31-.235.199-.397.491-.487.878l-1.782-.108Zm1.687 3.051c0 .252.108.46.324.621.216.162.522.243.918.243.333 0 .625-.076.877-.23.261-.161.464-.4.608-.715.144-.324.216-.715.216-1.174V8.81l-1.35.243-.23.04a5.698 5.698 0 0 0-.756.19.978.978 0 0 0-.445.31c-.108.135-.162.32-.162.553Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "m56.644 4.922.067 2.011-.135-.067c.09-.666.28-1.157.567-1.472.297-.315.716-.472 1.256-.472h.675v1.363h-.689c-.378 0-.688.063-.931.19a1.115 1.115 0 0 0-.527.566c-.108.252-.162.572-.162.959v4.077H55.01V4.922h1.634Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M60.304 7.095c.144-.738.49-1.31 1.04-1.714.557-.414 1.277-.621 2.16-.621 1.034 0 1.817.26 2.348.783.54.522.81 1.287.81 2.295v2.443c0 .19.036.324.108.405a.456.456 0 0 0 .338.122h.27v1.269l-.405.013h-.054a4.155 4.155 0 0 1-.743-.04 1.543 1.543 0 0 1-.688-.31c-.198-.163-.315-.41-.351-.743-.171.369-.464.67-.878.904-.405.225-.904.338-1.498.338-.738 0-1.35-.185-1.836-.554a1.792 1.792 0 0 1-.73-1.485c0-.44.104-.8.311-1.08.207-.279.504-.5.891-.661.387-.171.887-.315 1.499-.432l2.011-.405c-.009-.54-.13-.94-.364-1.202-.225-.27-.572-.405-1.04-.405-.378 0-.688.104-.931.31-.234.199-.396.491-.486.878l-1.782-.108Zm1.687 3.051c0 .252.108.46.324.621.216.162.522.243.918.243.333 0 .626-.076.878-.23.26-.161.463-.4.607-.715.144-.324.216-.715.216-1.174V8.81l-1.35.243-.23.04a5.698 5.698 0 0 0-.755.19.978.978 0 0 0-.446.31c-.108.135-.162.32-.162.553Zm2.133-6.29H62.99l.85-1.756h1.513l-1.229 1.755Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M68.748 4.922h1.66l.054 1.498-.148-.162c.18-.486.463-.855.85-1.107.396-.26.873-.391 1.431-.391.657 0 1.215.166 1.674.5.468.332.814.782 1.04 1.35.234.557.35 1.187.35 1.89 0 .701-.117 1.336-.35 1.903a2.958 2.958 0 0 1-1.04 1.336c-.459.333-1.017.5-1.674.5-.369 0-.702-.059-.999-.176a2.14 2.14 0 0 1-.77-.513 2.28 2.28 0 0 1-.499-.837l.175-.135v3.524h-1.754v-9.18Zm1.62 3.577c0 .423.063.81.189 1.161s.319.635.58.85c.261.217.585.325.972.325.567 0 .999-.22 1.296-.662.297-.45.445-1.008.445-1.674 0-.657-.148-1.21-.445-1.66-.297-.45-.729-.675-1.296-.675-.387 0-.711.108-.972.324-.261.216-.454.5-.58.85a3.415 3.415 0 0 0-.19 1.161Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M78.716 4.922v7.155H76.96V4.922h1.755Zm.027-2.43v1.43h-1.81v-1.43h1.81Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M85.339 2.492h1.755v9.585h-1.66l-.041-1.013c-.198.37-.49.657-.877.864-.388.207-.824.31-1.31.31-.612 0-1.148-.152-1.606-.458-.46-.306-.81-.738-1.053-1.296-.243-.567-.365-1.229-.365-1.985s.121-1.413.364-1.97c.243-.568.594-1.004 1.053-1.31.46-.306.995-.46 1.607-.46.459 0 .877.1 1.255.298.379.198.671.472.878.823V2.492Zm-.094 7.25c.143-.36.215-.775.215-1.243 0-.477-.072-.89-.215-1.242-.145-.36-.347-.639-.608-.837a1.476 1.476 0 0 0-.918-.297c-.531 0-.954.216-1.269.648-.315.432-.472 1.008-.472 1.728 0 .711.157 1.278.472 1.701.315.423.738.635 1.269.635.351 0 .657-.095.918-.284.261-.189.463-.459.608-.81Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M88.714 7.095c.144-.738.49-1.31 1.04-1.714.558-.414 1.278-.621 2.16-.621 1.035 0 1.818.26 2.349.783.54.522.81 1.287.81 2.295v2.443c0 .19.036.324.108.405a.456.456 0 0 0 .337.122h.27v1.269l-.405.013h-.054a4.155 4.155 0 0 1-.742-.04 1.543 1.543 0 0 1-.689-.31c-.198-.163-.315-.41-.35-.743-.172.369-.464.67-.878.904-.405.225-.905.338-1.499.338-.738 0-1.35-.185-1.836-.554a1.792 1.792 0 0 1-.729-1.485c0-.44.104-.8.31-1.08.208-.279.505-.5.892-.661.387-.171.886-.315 1.498-.432l2.012-.405c-.01-.54-.13-.94-.365-1.202-.225-.27-.571-.405-1.04-.405-.377 0-.688.104-.93.31-.235.199-.397.491-.487.878l-1.782-.108Zm1.688 3.051c0 .252.108.46.324.621.216.162.522.243.918.243.333 0 .625-.076.877-.23.261-.161.464-.4.608-.715.144-.324.216-.715.216-1.174V8.81l-1.35.243-.23.04a5.698 5.698 0 0 0-.756.19.978.978 0 0 0-.445.31c-.108.135-.162.32-.162.553Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M105.02 7.554c-.063-.432-.239-.77-.527-1.012a1.47 1.47 0 0 0-.999-.365c-.558 0-.99.203-1.296.608-.297.405-.445.976-.445 1.714s.148 1.31.445 1.715c.306.405.738.607 1.296.607.414 0 .761-.126 1.04-.378s.454-.612.526-1.08l1.809.081a2.99 2.99 0 0 1-.567 1.485 2.968 2.968 0 0 1-1.201.972 3.78 3.78 0 0 1-1.607.338c-.711 0-1.336-.153-1.876-.46a3.088 3.088 0 0 1-1.229-1.309c-.288-.567-.432-1.224-.432-1.97 0-.748.144-1.405.432-1.972a3.088 3.088 0 0 1 1.229-1.31c.54-.305 1.165-.458 1.876-.458.567 0 1.094.112 1.58.337.486.216.882.531 1.188.945.306.405.49.878.553 1.418l-1.795.094Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M111.405 12.239c-.711 0-1.337-.153-1.877-.46a3.086 3.086 0 0 1-1.228-1.309c-.288-.567-.432-1.224-.432-1.97 0-.748.144-1.405.432-1.972a3.086 3.086 0 0 1 1.228-1.31c.54-.305 1.166-.458 1.877-.458.711 0 1.332.153 1.863.459.54.306.954.742 1.242 1.31.288.566.432 1.223.432 1.97 0 .747-.144 1.404-.432 1.971a3.064 3.064 0 0 1-1.242 1.31c-.531.306-1.152.459-1.863.459Zm0-1.418c.558 0 .985-.202 1.282-.607.306-.405.459-.977.459-1.715 0-.738-.153-1.31-.459-1.714-.297-.405-.724-.608-1.282-.608s-.99.203-1.296.608c-.297.405-.446.976-.446 1.714s.149 1.31.446 1.715c.306.405.738.607 1.296.607Z",
          fill: "white"
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "m117.933 4.922.04 1.147c.18-.414.441-.733.783-.958a2.164 2.164 0 0 1 1.229-.351c.513 0 .945.13 1.296.391.351.252.603.612.756 1.08.171-.486.436-.85.796-1.093.369-.252.81-.378 1.323-.378.486 0 .905.103 1.256.31.351.207.621.513.81.918.198.405.297.9.297 1.485v4.604h-1.755v-4.05c0-.612-.095-1.071-.284-1.377-.189-.315-.472-.473-.85-.473-.306 0-.563.072-.77.216-.207.135-.364.342-.472.621-.108.27-.162.608-.162 1.013v4.05h-1.593v-4.05c0-.405-.041-.743-.122-1.013-.081-.27-.207-.477-.378-.62a.932.932 0 0 0-.621-.217c-.306 0-.562.072-.769.216a1.332 1.332 0 0 0-.473.635c-.108.27-.162.603-.162.999v4.05h-1.755V4.922h1.58Z",
          fill: "white"
        }
      )
    ]
  }
), j0 = Fe.div`
  display: grid;
  position: relative;
  place-items: center;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 8px;
  background: ${({ theme: i }) => i.pallete.nimbusPrimaryInteractive} !important;
  border-color: ${({ theme: i }) => i.pallete.nimbusPrimaryInteractive} !important;
  overflow: hidden;
  box-shadow: none !important;
  ${({ $isDisabled: i }) => i && `
  opacity: 0.5;
  cursor: not-allowed;
  outline: 0;
`}
`, z0 = Fe.span`
  display: inline-flex;
  color: ${({ theme: i }) => i.pallete.nimbusPrimaryInteractive} !important;
  visibility: hidden;
  opacity: 0;
  letter-spacing: -0.5em;
  white-space: nowrap;
  text-transform: unset;
  user-select: none;
  width: 0px;
`;
Fe.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Ai = "center", M0 = Fe.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent: i }) => i ?? Ai};
  align-items: ${({ alignItems: i }) => i ?? Ai};
  width: 100%;
`;
Fe.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent: i }) => i ?? Ai};
  align-items: ${({ alignItems: i }) => i ?? Ai};
  width: 100%;
`;
class D0 {
  constructor() {
    this.EVENT_NAME = "ui_start_checkout";
  }
  getName() {
    return this.EVENT_NAME;
  }
  build() {
    return {};
  }
}
const af = () => document.querySelector(
  '[data-store="cart-form"]'
), cf = () => {
  const i = af(), s = document.createElement("input");
  s.name = "checkout_query_param", s.setAttribute("type", "hidden"), s.setAttribute("value", "ec"), i == null || i.append(s);
}, Nt = class Nt {
};
Nt.event = {
  CART_BLOCKED: "cart.blocked",
  CART_RELEASED: "cart.released"
}, Nt.onCartBlocked = (s) => {
  document.addEventListener(Nt.event.CART_BLOCKED, s);
}, Nt.onCartReleased = (s) => {
  document.addEventListener(Nt.event.CART_RELEASED, s);
}, Nt.removeEventCartBlocked = (s) => {
  document.removeEventListener(Nt.event.CART_BLOCKED, s);
}, Nt.removeEventCartReleased = (s) => {
  document.removeEventListener(Nt.event.CART_RELEASED, s);
};
let ar = Nt;
const F0 = () => {
  const [i, s] = Yt.useState(!1), u = () => {
    window.metricService.dispatch(new D0());
  };
  Yt.useEffect(() => {
    const w = document.querySelector("[name=go_to_checkout]"), E = () => {
      s(!0), w == null || w.classList.add("disabled");
    }, L = () => {
      s(!1), w == null || w.classList.remove("disabled");
    };
    return ar.onCartBlocked(E), ar.onCartReleased(L), () => {
      ar.removeEventCartBlocked(E), ar.removeEventCartReleased(L);
    };
  }, []);
  const c = () => {
    i || (cf(), af().submit());
  }, m = (w) => {
    w.preventDefault(), u(), c();
  };
  return /* @__PURE__ */ V.jsxs(M0, { children: [
    /* @__PURE__ */ V.jsx(
      A0,
      {
        marginTop: bs.spacing.small,
        marginBottom: bs.spacing.small,
        text: "OU"
      }
    ),
    /* @__PURE__ */ V.jsxs(
      j0,
      {
        role: "button",
        tabIndex: 0,
        className: "btn btn-primary btn-big",
        onClick: m,
        "data-testid": "express-checkout-button",
        "aria-labelledby": "express_checkout_label",
        $isDisabled: i,
        children: [
          /* @__PURE__ */ V.jsx(O0, {}),
          /* @__PURE__ */ V.jsx(z0, { id: "express_checkout_label", children: "Compra rápida com Nuvem Pay" })
        ]
      }
    )
  ] });
}, U0 = () => uf(/* @__PURE__ */ V.jsx(F0, {}), "expressCheckoutButton"), vt = class vt {
  static hide() {
    var s;
    (s = document.querySelector(vt.SELECTOR)) == null || s.remove();
  }
  static renderWalletExpressCheckoutButton() {
    const s = this.getSelectorContainer();
    if (s) {
      const u = document.createElement("div");
      u.id = "expressCheckoutButton", u.style.cssText = "width:100%", this.insertExpressCheckoutButton(
        s,
        u
      ), Hs.run(), U0();
    } else
      this.reportError();
  }
  static insertExpressCheckoutButton(s, u) {
    se.isPageCart() && se.getThemeCode() !== "cubo" ? s.after(u) : s.appendChild(u);
  }
  static getSelectorContainer() {
    return se.isPageCart() ? this.getSelectorForCartTemplate() : this.getSelectorForModalTemplate();
  }
  static getSelectorForCartTemplate() {
    return se.getThemeCode() === "cubo" ? document.querySelector(
      vt.SELECTOR_CONTAINER_FOR_CUBO_THEME_WITH_CART_TEMPLATE
    ) : document.querySelector(
      vt.SELECTOR_CHECKOUT_INPUT_CART_TEMPLATE
    );
  }
  static reportError() {
    if (!(se.getThemeCode() === "cubo" && !se.isPageCart()))
      throw new fp();
  }
};
vt.SELECTOR = "#expressCheckoutButton", vt.SELECTOR_CONTAINER_BUTTONS_PAGE_TEMPLATE = "#modal-cart .js-ajax-cart-submit, form#ajax-cart-details.js-ajax-cart-panel .js-ajax-cart-submit", vt.SELECTOR_CHECKOUT_INPUT_CART_TEMPLATE = "input[name=go_to_checkout]", vt.SELECTOR_LEGACY_BUTTON = ".js-ajax-cart-express-checkout-container", vt.SELECTOR_CONTAINER_FOR_CUBO_THEME_WITH_CART_TEMPLATE = "#ajax-cart-submit-div.row", vt.getSelectorForModalTemplate = () => document.querySelector(
  vt.SELECTOR_CONTAINER_BUTTONS_PAGE_TEMPLATE
);
let so = vt;
class V0 {
  run() {
    (se.isPageCart() || se.isModalCartEnabled()) && (this.removeExpressCheckoutButton(), this.setExpressCheckoutAsDefault());
  }
  removeExpressCheckoutButton() {
    so.hide();
  }
  setExpressCheckoutAsDefault() {
    document.getElementsByName("go_to_checkout").forEach((u) => {
      u.setAttribute("name", "go_to_express_checkout");
    }), cf();
  }
}
class W0 extends Error {
  constructor(s) {
    super(), this.message = "Failed to request store info", this.name = "WALLET_STORE_INFO", this.cause = s.cause, this.stack = s.stack;
  }
}
class $0 extends Error {
  constructor(s) {
    super(), this.message = "Error occurred trying to run auth flow", this.name = "WALLET_AUTH_FLOW", this.cause = s.cause, this.stack = s.stack;
  }
}
class df extends Error {
  constructor() {
    super(), this.message = "Error Iframe not found", this.name = "WALLET_IFRAME_NOT_FOUND";
  }
}
var B0 = { WALLET_API_URL: "https://api-wallet.tiendanube.com", NODE_ENV: "production", WALLET_IFRAME_URL: "https://nuvempay.nuvemshop.com.br", WALLET_LIB_AUTH_URL: "https://wallet.tiendanube.com/auth.js" };
class H0 {
  constructor(s) {
    this.getWalletUserEmail = async () => {
      try {
        const u = await window.WalletAuth.start(
          this.getConfigWalletAuth()
        );
        return u.isLogged ? u.user.email : "";
      } catch (u) {
        throw new $0(u);
      }
    }, this.getConfigWalletAuth = () => ({
      loggedUserEmail: null,
      iframeHost: B0.WALLET_IFRAME_URL,
      version: "v2"
    }), this.getStoreInfo = async () => {
      try {
        const u = se.getCustomerId(), c = se.getStoreId();
        return await this.walletApi.getStoreInfo({
          storeId: c,
          customerId: u
        });
      } catch (u) {
        throw u instanceof df ? u : new W0(u);
      }
    }, this.walletApi = s;
  }
  async run() {
    const s = await this.getWalletUserEmail();
    if (!s)
      return { status: "notLogged" };
    const u = await this.getStoreInfo();
    return {
      status: !u.customerEmail || s === u.customerEmail ? "logged" : "notLogged"
    }.status === "logged" ? {
      status: "logged",
      email: s,
      expressCheckoutVersion: u.expressCheckoutVersion
    } : { status: "notLogged" };
  }
}
var Q0 = { WALLET_API_URL: "https://api-wallet.tiendanube.com", NODE_ENV: "production", WALLET_IFRAME_URL: "https://nuvempay.nuvemshop.com.br", WALLET_LIB_AUTH_URL: "https://wallet.tiendanube.com/auth.js" };
const Z0 = Q0.WALLET_API_URL, K0 = "v1";
class ff {
  constructor() {
    this.commonHeaders = {
      "Accept-Language": se.getLanguage(),
      "Content-Type": "application/json"
    }, this.getErrorContexts = (s) => ({
      store: {
        storeId: se.getStoreId(),
        cartId: se.getCartId(),
        country: se.getCountry()
      },
      template: window.LS.template,
      theme: se.getThemeCode(),
      ...s
    });
  }
  reportException(s) {
    this.reportLog(s.message, {
      error: JSON.stringify(s, Object.getOwnPropertyNames(s))
    });
  }
  reportLog(s, u) {
    fetch(`${Z0}/${K0}/logger`, {
      method: "POST",
      body: JSON.stringify({
        log: `[WALLET_STORE_FRONT] ${s}`,
        context: {
          ...this.getErrorContexts(u)
        }
      }),
      headers: this.commonHeaders
    });
  }
}
class Y0 {
  constructor(s) {
    this.event = {
      WALLET_CART_IDENTIFICATION: "wallet_cart_identification"
    }, this.eventDataForRequest = () => ({
      store_id: se.getStoreId(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.api = s;
  }
  async registerEventWalletCartIdentification(s, u) {
    const c = {
      ...this.eventDataForRequest(),
      cart_hash: u,
      cart_id: s
    };
    await this.api.registerEvent(
      c,
      this.event.WALLET_CART_IDENTIFICATION
    );
  }
}
class G0 extends Error {
  constructor(s, u) {
    super(), this.message = "Error occurred trying to register event", this.name = "WALLET_REGISTER_EVENT", this.customTag = { name: "wallet_register_event", data: s }, this.stack = u.stack, this.cause = u.cause;
  }
}
class X0 {
  constructor(s, u) {
    this.event = {
      WALLET_CART_IDENTIFICATION: "wallet_cart_identification"
    }, this.eventService = new Y0(s), this.errorHandlerService = u;
  }
  run() {
    this.reportEventWalletCartIdentification();
  }
  reportEventWalletCartIdentification() {
    window.addEventListener("cart.updated", async (s) => {
      var u, c;
      try {
        const m = window.localStorage.getItem(
          "WALLET_CART_IDENTIFICATION"
        ), w = (u = s.detail) == null ? void 0 : u.id.toString(), E = (c = s.detail) == null ? void 0 : c.token;
        (!m || w !== m) && (await this.eventService.registerEventWalletCartIdentification(
          w,
          E
        ), window.localStorage.setItem(
          "WALLET_CART_IDENTIFICATION",
          w
        ));
      } catch (m) {
        this.errorHandlerService.reportException(
          new G0(
            this.event.WALLET_CART_IDENTIFICATION,
            m
          )
        );
      }
    });
  }
}
class q0 extends Error {
  constructor() {
    super(), this.message = "Error occurred trying to load Auth library", this.name = "WALLET_LOAD_AUTH";
  }
}
var J0 = { WALLET_API_URL: "https://api-wallet.tiendanube.com", NODE_ENV: "production", WALLET_IFRAME_URL: "https://nuvempay.nuvemshop.com.br", WALLET_LIB_AUTH_URL: "https://wallet.tiendanube.com/auth.js" };
class b0 {
  run() {
    return new Promise((s, u) => {
      const c = document.createElement("script");
      c.src = J0.WALLET_LIB_AUTH_URL, document.body.appendChild(c), c.addEventListener("load", () => {
        window.WalletAuth ? s("WalletAuth library is ready") : u(new q0());
      });
    });
  }
}
var eh = { WALLET_API_URL: "https://api-wallet.tiendanube.com", NODE_ENV: "production", WALLET_IFRAME_URL: "https://nuvempay.nuvemshop.com.br", WALLET_LIB_AUTH_URL: "https://wallet.tiendanube.com/auth.js" };
const lo = class lo {
  static postMessage(s, u) {
    var m;
    const c = document.getElementById(this.iframeId);
    if (!c)
      throw new df();
    (m = c == null ? void 0 : c.contentWindow) == null || m.postMessage(
      JSON.stringify({ message: s, data: u }),
      this.host
    );
  }
};
lo.host = eh.WALLET_IFRAME_URL, lo.iframeId = "walletAuthProxyIframe", lo.EVENTS = {
  NUVEM_REQUEST: "NUVEM_REQUEST"
};
let Ii = lo;
var th = { WALLET_API_URL: "https://api-wallet.tiendanube.com", NODE_ENV: "production", WALLET_IFRAME_URL: "https://nuvempay.nuvemshop.com.br", WALLET_LIB_AUTH_URL: "https://wallet.tiendanube.com/auth.js" };
const Oi = class Oi {
};
Oi.onMessage = (s, u, c) => {
  window.addEventListener(
    "message",
    (m) => {
      const w = m.data;
      w.error ? c == null || c(w.error) : w.message === s && m.origin === th.WALLET_IFRAME_URL && u(w.data);
    }
  );
}, Oi.removeEvent = (s, u) => {
  window.removeEventListener(s, u);
};
let eu = Oi;
class nh {
  get(s, u) {
    return new Promise((c, m) => {
      const w = setTimeout(() => {
        m(new Error(`Timeout request with message:${s}`));
      }, 6e3), E = (L) => {
        clearTimeout(w), c(L);
      };
      eu.onMessage(s, E), Ii.postMessage(s, u);
    });
  }
}
/*! js-cookie v3.0.5 | MIT */
function Ci(i) {
  for (var s = 1; s < arguments.length; s++) {
    var u = arguments[s];
    for (var c in u)
      i[c] = u[c];
  }
  return i;
}
var rh = {
  read: function(i) {
    return i[0] === '"' && (i = i.slice(1, -1)), i.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(i) {
    return encodeURIComponent(i).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function tu(i, s) {
  function u(m, w, E) {
    if (!(typeof document > "u")) {
      E = Ci({}, s, E), typeof E.expires == "number" && (E.expires = new Date(Date.now() + E.expires * 864e5)), E.expires && (E.expires = E.expires.toUTCString()), m = encodeURIComponent(m).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var L = "";
      for (var _ in E)
        E[_] && (L += "; " + _, E[_] !== !0 && (L += "=" + E[_].split(";")[0]));
      return document.cookie = m + "=" + i.write(w, m) + L;
    }
  }
  function c(m) {
    if (!(typeof document > "u" || arguments.length && !m)) {
      for (var w = document.cookie ? document.cookie.split("; ") : [], E = {}, L = 0; L < w.length; L++) {
        var _ = w[L].split("="), M = _.slice(1).join("=");
        try {
          var B = decodeURIComponent(_[0]);
          if (E[B] = i.read(M, B), m === B)
            break;
        } catch {
        }
      }
      return m ? E[m] : E;
    }
  }
  return Object.create(
    {
      set: u,
      get: c,
      remove: function(m, w) {
        u(
          m,
          "",
          Ci({}, w, {
            expires: -1
          })
        );
      },
      withAttributes: function(m) {
        return tu(this.converter, Ci({}, this.attributes, m));
      },
      withConverter: function(m) {
        return tu(Ci({}, this.converter, m), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(s) },
      converter: { value: Object.freeze(i) }
    }
  );
}
var oh = tu(rh, { path: "/" });
const Kt = class Kt {
  static isAuthenticated() {
    return !!Kt.getCookieByName(
      Kt.cookie.WALLET_AUTHENTICATED
    );
  }
  static getAccessToken() {
    return Kt.getCookieByName(
      Kt.cookie.WALLET_ACCESS_TOKEN
    );
  }
  static getCrossStoreImposible() {
    const s = Kt.getCookieByName(
      Kt.cookie.WALLET_CROSS_STORE_IMPOSSIBLE
    );
    return s ? s === "true" : !1;
  }
  static getCookieByName(s) {
    return oh.get(s);
  }
};
Kt.cookie = {
  WALLET_AUTHENTICATED: "wallet-authenticated",
  WALLET_ACCESS_TOKEN: "wallet-access-token",
  WALLET_CROSS_STORE_IMPOSSIBLE: "wallet-cross-store-impossible"
};
let nu = Kt;
class ih {
  constructor(s) {
    this.commonHeaders = {
      "Accept-Language": se.getLanguage()
    }, this.post = (u, c) => this.authClient.makeRequest("POST", u, c, this.commonHeaders), this.get = async (u) => this.authClient.makeRequest("GET", u, void 0, this.commonHeaders), this.authClient = new window.WalletAuth.Client(s);
  }
}
var lh = { WALLET_API_URL: "https://api-wallet.tiendanube.com", NODE_ENV: "production", WALLET_IFRAME_URL: "https://nuvempay.nuvemshop.com.br", WALLET_LIB_AUTH_URL: "https://wallet.tiendanube.com/auth.js" };
const sh = lh.WALLET_API_URL, Id = "v1";
class uh {
  constructor() {
    this.registerEvent = async (s, u) => {
      await this.client.post(`/${Id}/events`, {
        event: u,
        eventData: s
      });
    }, this.getStoreInfo = async (s) => {
      if (this.isCrossStore())
        return await this.iframeClient.get(
          Ii.EVENTS.NUVEM_REQUEST,
          { resource: "storeInfo", body: s }
        );
      const u = s.customerId ? `?customer_id=${s.customerId}` : "";
      return (await this.client.get(
        `/${Id}/stores/${s.storeId}/info${u}`
      )).data;
    }, this.isCrossStore = () => !nu.getCrossStoreImposible(), this.client = new ih(sh), this.iframeClient = new nh();
  }
}
const ah = ({
  height: i = "12",
  width: s = "67",
  fill: u = "currentColor"
}) => /* @__PURE__ */ V.jsxs(
  du,
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: i,
    viewBox: "0 0 67 12",
    fill: "none",
    children: [
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M10.67 0H10.6633C10.6633 0 10.659 0 10.6566 0C9.09061 0.0024326 7.59882 0.616663 6.4853 1.69978C5.91547 1.45773 5.30124 1.33306 4.66694 1.33306C2.09325 1.33306 0 3.42631 0 6C0 8.57369 2.09325 10.6663 4.66633 10.6663C5.2909 10.6663 5.90878 10.5392 6.47983 10.2984C7.56112 11.3499 9.03588 12 10.6596 12C13.968 12 16.6596 9.30833 16.6596 6C16.6596 2.69167 13.9734 0.00486519 10.67 0ZM10.6596 10.6663C8.08656 10.6663 5.99331 8.57308 5.99331 6H4.66025C4.66025 7.17677 5.00203 8.27448 5.5895 9.20191C5.2909 9.28765 4.98013 9.33327 4.66633 9.33327C2.8285 9.33327 1.33306 7.83843 1.33306 6C1.33306 4.16157 2.82789 2.66673 4.66633 2.66673C5.39428 2.66673 6.08575 2.89661 6.66592 3.33266C7.51368 3.96939 7.99959 4.94182 7.99959 6H9.33266C9.33266 4.60369 8.72816 3.31502 7.66633 2.4253C8.50071 1.72532 9.55828 1.33428 10.6627 1.33306C13.2345 1.33489 15.326 3.42753 15.326 5.99939C15.326 8.57125 13.2327 10.6663 10.6596 10.6663Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M21.295 9.30402H20.0264V3.94501H21.295V4.65594C21.6337 4.14205 22.181 3.81365 22.9351 3.81365C24.2475 3.81365 25.0132 4.67783 25.0132 6.07718V9.30341H23.7446V6.31801C23.7446 5.48667 23.3292 4.98373 22.5526 4.98373C21.776 4.98373 21.295 5.5633 21.295 6.48221V9.30402Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M25.9065 6.99611V3.94502H27.1751V6.91948C27.1751 7.76177 27.5905 8.26471 28.2905 8.26471C28.9905 8.26471 29.4058 7.76177 29.4058 6.91948V3.94502H30.6744V6.99611C30.6744 8.53777 29.7774 9.43479 28.2905 9.43479C26.8036 9.43479 25.9065 8.53777 25.9065 6.99611Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M31.0351 3.94502H32.3797L33.8125 7.66325L35.2562 3.94502H36.568L34.3592 9.30404H33.2439L31.0351 3.94502Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M41.8485 6.62453C41.8485 5.01719 40.7441 3.81427 39.1806 3.81427C37.6171 3.81427 36.4573 5.01719 36.4573 6.62453C36.4573 8.23186 37.6165 9.43478 39.2463 9.43478C40.3835 9.43478 41.2149 8.88806 41.6631 8.04577L40.6243 7.55378C40.3184 8.02388 39.9572 8.36322 39.2572 8.36322C38.4587 8.36322 37.7697 7.78366 37.715 7.00705H41.8382C41.8492 6.8538 41.8485 6.72244 41.8485 6.62453ZM37.7259 6.08875C37.8135 5.47634 38.404 4.85299 39.1587 4.85299C39.9134 4.85299 40.5039 5.37782 40.5915 6.08875H37.7259Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M43.7691 9.30402H42.5005V3.94501H43.7691V4.65594C44.0647 4.14205 44.5676 3.81365 45.2998 3.81365C46.0764 3.81365 46.6341 4.18523 46.9291 4.80858C47.2137 4.2947 47.8261 3.81365 48.7115 3.81365C49.9473 3.81365 50.6582 4.66688 50.6582 6.0115V9.30341H49.3896V6.25233C49.3896 5.46478 49.029 4.97278 48.3618 4.97278C47.6947 4.97278 47.2246 5.53046 47.2137 6.40558V9.30341H45.9451V6.29612C45.9451 5.46478 45.5844 4.97278 44.9173 4.97278C44.2173 4.97278 43.7691 5.5414 43.7691 6.46032V9.30402Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M54.2858 3.92319C53.4216 3.92319 52.569 4.38234 52.1968 5.07138V4.0436H51.5516V11.5786H52.1968V8.29761C52.58 8.98664 53.3997 9.4239 54.2858 9.4239C55.7946 9.4239 56.9653 8.22098 56.9653 6.67932C56.9653 5.13766 55.7952 3.92319 54.2858 3.92319ZM54.242 8.82244C53.061 8.82244 52.1536 7.86035 52.1536 6.67932C52.1536 5.4983 53.061 4.52465 54.242 4.52465C55.4231 4.52465 56.2982 5.4539 56.2982 6.67932C56.2982 7.90474 55.3902 8.82244 54.242 8.82244Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M59.6758 3.92319C58.67 3.92319 57.8824 4.49181 57.6203 5.41072L58.2436 5.58587C58.4516 4.89684 58.9436 4.51431 59.6764 4.51431C60.5078 4.51431 61.0107 4.98441 61.0107 5.78291V6.08942L59.2611 6.28646C58.0363 6.41782 57.4348 6.99739 57.4348 7.94853C57.4348 8.81271 58.1129 9.42512 59.1078 9.42512C59.9714 9.42512 60.6714 9.03164 61.0326 8.41924V9.30531H61.656V5.82791C61.656 4.63594 60.9341 3.92501 59.6764 3.92501L59.6758 3.92319ZM61.0101 7.13848C61.0101 8.05678 60.2664 8.83339 59.2167 8.83339C58.5605 8.83339 58.1013 8.46181 58.1013 7.90413C58.1013 7.34646 58.5386 6.94204 59.3699 6.84352L61.0101 6.65743V7.13848Z",
          fill: u
        }
      ),
      /* @__PURE__ */ V.jsx(
        me,
        {
          d: "M64.3118 10.2424C63.8739 11.2939 63.4354 11.7099 62.702 11.7099C62.494 11.7099 62.3298 11.6661 62.1875 11.6114V11.0093C62.3079 11.0641 62.4831 11.1078 62.6692 11.1078C63.1399 11.1078 63.4141 10.8232 63.7097 10.1111L64.0819 9.20191L61.9132 4.04359H62.6254L64.4212 8.44658L66.2062 4.04359H66.8964L64.3118 10.2424Z",
          fill: u
        }
      )
    ]
  }
), ch = ({
  height: i = "24",
  width: s = "24",
  fill: u = "currentColor"
}) => /* @__PURE__ */ V.jsxs(
  du,
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: s,
    height: i,
    fill: u,
    children: [
      /* @__PURE__ */ V.jsx("rect", { width: "24", height: "24", rx: "12", fill: "#0059D5" }),
      /* @__PURE__ */ V.jsx(
        me,
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.74956 9C9.74956 8.40326 9.98661 7.83097 10.4086 7.40901C10.8305 6.98705 11.4028 6.75 11.9996 6.75C12.5963 6.75 13.1686 6.98705 13.5905 7.40901C14.0125 7.83097 14.2496 8.40326 14.2496 9C14.2496 9.59674 14.0125 10.169 13.5905 10.591C13.1686 11.0129 12.5963 11.25 11.9996 11.25C11.4028 11.25 10.8305 11.0129 10.4086 10.591C9.98661 10.169 9.74956 9.59674 9.74956 9ZM7.87506 16.0525C7.89192 14.9697 8.33388 13.937 9.10554 13.1773C9.8772 12.4176 10.9167 11.9917 11.9996 11.9917C13.0825 11.9917 14.1219 12.4176 14.8936 13.1773C15.6652 13.937 16.1072 14.9697 16.1241 16.0525C16.1254 16.1254 16.1054 16.1971 16.0666 16.2588C16.0278 16.3205 15.9718 16.3696 15.9056 16.4C14.6801 16.9619 13.3476 17.2518 11.9996 17.25C10.6066 17.25 9.28306 16.946 8.09356 16.4C8.0273 16.3696 7.97135 16.3205 7.93254 16.2588C7.89373 16.1971 7.87376 16.1254 7.87506 16.0525Z",
          fill: "#fff"
        }
      )
    ]
  }
), Ws = Fe.div`
  margin: ${({ mt: i = 0, mr: s = 0, ml: u = 0, mb: c = 0 }) => `${i}px ${s}px ${c}px ${u}px`};
`, Od = Fe.span`
  font-size: ${({ theme: i, size: s = "medium" }) => i.fontSize[s]};
  font-weight: ${({ weight: i = "medium", theme: s }) => s.fontWeight[i]};
  font-family: ${({ theme: i }) => i.fontFamily};
`, dh = Fe.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: ${({ padding: i }) => i};
  background: transparent;
  margin: ${({ margin: i }) => i};
`, fh = Fe.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`, ph = Fe.div`
  display: flex;
  align-items: center;
`, pf = ({
  email: i,
  margin: s = "0px",
  padding: u = "0px",
  ...c
}) => /* @__PURE__ */ V.jsxs(dh, { "data-testid": c["data-testid"], margin: s, padding: u, children: [
  /* @__PURE__ */ V.jsxs(fh, { children: [
    /* @__PURE__ */ V.jsx(Od, { weight: "medium", size: "small", children: "Acesso rápido" }),
    /* @__PURE__ */ V.jsx(Ws, { mr: 4 }),
    /* @__PURE__ */ V.jsx(ah, {})
  ] }),
  /* @__PURE__ */ V.jsx(Ws, { mt: 4, mb: 4 }),
  /* @__PURE__ */ V.jsxs(ph, { children: [
    /* @__PURE__ */ V.jsx(ch, {}),
    /* @__PURE__ */ V.jsx(Ws, { mr: 8 }),
    /* @__PURE__ */ V.jsx(Od, { size: "xSmall", weight: "medium", children: i })
  ] }),
  /* @__PURE__ */ V.jsx(N0, { className: "divider" })
] });
pf.defaultProps = {
  email: void 0
};
const hf = ({ margin: i, padding: s, email: u, ...c }) => {
  uf(
    /* @__PURE__ */ V.jsx(
      pf,
      {
        "data-testid": c["data-testid"],
        margin: i,
        padding: s,
        email: u
      }
    ),
    "emailPanelCart"
  );
};
class mf {
  constructor() {
    this.themeCustomSelectorsList = ["atlantico"];
  }
  createContainerEmailPanel() {
    const s = document.createElement("div");
    return s.setAttribute("id", "emailPanelCart"), s;
  }
  hasThemeWithCustomSelectors() {
    return this.themeCustomSelectorsList.includes(se.getThemeCode());
  }
  appendEmailPanelContainer() {
    this.hasThemeWithCustomSelectors() ? this.appendEmailPanelContainerForAtlanticoTheme() : this.appendEmailPanelContainerForCommonThemes();
  }
}
class hh extends mf {
  constructor() {
    super(...arguments), this.SELECTOR_CONTAINER_BUTTONS_MODAL_TEMPLATE = "#modal-cart .js-ajax-cart-submit, form#ajax-cart-details.js-ajax-cart-panel .js-ajax-cart-submit", this.themeStyleConditionsList = [
      "amazonas",
      "cubo",
      "atlantico"
    ];
  }
  render(s) {
    if (this.isModalHoverTemplate())
      return;
    this.appendEmailPanelContainer();
    const { margin: u, padding: c } = this.getStyles();
    hf({
      "data-testid": "email-panel-modal-cart",
      margin: u,
      padding: c,
      email: s
    });
  }
  appendEmailPanelContainerForCommonThemes() {
    const s = this.createContainerEmailPanel(), u = document.querySelector(
      '[data-store="cart-form"] > .modal-header, .modal-right-header'
    ), c = u.nextElementSibling;
    c.classList.contains("js-toggle-cart") ? c == null || c.after(s) : u == null || u.after(s);
  }
  appendEmailPanelContainerForAtlanticoTheme() {
    const s = this.createContainerEmailPanel(), u = document.querySelector(".cart-body");
    u.insertBefore(
      s,
      u.firstChild
    );
  }
  hasThemeWithConditions() {
    return this.themeStyleConditionsList.includes(se.getThemeCode());
  }
  getStyleThemesWithConditions() {
    return se.getThemeCode() === "atlantico" ? {
      margin: "8px 0px 24px 0px",
      padding: "0px 20px 0px 20px"
    } : {
      margin: "0px",
      padding: "0px"
    };
  }
  getStyles() {
    return this.hasThemeWithConditions() ? this.getStyleThemesWithConditions() : {
      margin: "8px 0px 0px 0px",
      padding: "2px 15px 2px 15px"
    };
  }
  isModalHoverTemplate() {
    const s = document.querySelector(
      this.SELECTOR_CONTAINER_BUTTONS_MODAL_TEMPLATE
    );
    return se.getThemeCode() === "cubo" && !s;
  }
}
class mh extends mf {
  render(s) {
    this.appendEmailPanelContainer();
    const { margin: u } = this.getStyles();
    hf({
      "data-testid": "email-panel-page-cart",
      margin: u,
      email: s
    });
  }
  appendEmailPanelContainerForAtlanticoTheme() {
    var c;
    const s = this.createContainerEmailPanel(), u = (c = document.querySelector(".page-header")) == null ? void 0 : c.firstElementChild;
    u == null || u.append(s);
  }
  appendEmailPanelContainerForCommonThemes() {
    const s = this.createContainerEmailPanel(), u = document.querySelector('[data-store="cart-form"]');
    u == null || u.insertBefore(s, u.firstChild);
  }
  getStyles() {
    return se.getThemeCode() === "atlantico" ? {
      margin: "16px 0px 0px 0px",
      padding: "0px"
    } : {
      margin: "0px 0px 24px 0px",
      padding: "0px"
    };
  }
}
class gh {
  constructor(s) {
    this.email = s, this.modalTemplateEmailPanelRenderer = new hh(), this.pageTemplateEmailPanelRenderer = new mh();
  }
  run() {
    se.isPageCart() ? this.addToPageCart() : se.isModalCartEnabled() && this.addToModalCart();
  }
  addToModalCart() {
    this.modalTemplateEmailPanelRenderer.render(this.email);
  }
  addToPageCart() {
    this.pageTemplateEmailPanelRenderer.render(this.email);
  }
}
class vh {
  run() {
    se.getCustomerId() && so.hide();
  }
}
const yh = "V3";
class wh {
  constructor() {
    this.actions = {
      authenticated: [],
      notAuthenticated: []
    }, this.errorHandlerService = new ff(), this.loadAuthService = new b0(), this.actions = {
      authenticated: [new V0()],
      notAuthenticated: [new vh()]
    };
  }
  async start() {
    if (se.hasExpressCheckout() && !se.isExpressCheckoutExperimentTreatmentVariant()) {
      so.renderWalletExpressCheckoutButton();
      try {
        await this.loadAuthService.run();
        const { sessionService: s } = this.buildInstaceAfterLoadLibrary(), u = await s.run();
        u.status === "logged" ? (this.addActionEmailRenderer(u), await this.runActions("authenticated")) : await this.runActions("notAuthenticated");
      } catch (s) {
        this.errorHandlerService.reportException(s);
      }
    }
  }
  async runActions(s) {
    await Promise.all(
      this.actions[s].map((u) => Promise.resolve(u.run()))
    );
  }
  addActionEmailRenderer(s) {
    if (s.expressCheckoutVersion === yh) {
      const u = new gh(s.email);
      this.actions.authenticated.unshift(u);
    }
  }
  buildInstaceAfterLoadLibrary() {
    const s = new uh(), u = new H0(s);
    return this.actions.authenticated.push(
      new X0(s, this.errorHandlerService)
    ), { walletApi: s, sessionService: u };
  }
}
const Eh = async (i, s = 1e3) => new Promise((u, c) => {
  const m = Date.now(), w = setInterval(() => {
    i() ? (clearInterval(w), u()) : Date.now() - m >= s && (clearInterval(w), c(new Error("Timeout waiting for condition to be met")));
  }, 100);
}), ji = class ji {
  constructor() {
    this.bootstrapper = new wh(), this.scriptAlreadyRun = !1;
  }
  async execute() {
    window.LS.cart.id ? await this.bootstrapper.start() : window.addEventListener("cart.updated", async () => {
      if (!this.scriptAlreadyRun) {
        this.scriptAlreadyRun = !0;
        try {
          await Eh(
            () => !!window.LS.abStorefrontCartExperiments,
            ji.WAIT_TILL_AB_EXPERIMENTS_ARE_LOADED_IN_MS
          ), await this.bootstrapper.start();
        } catch (s) {
          new ff().reportException(s);
        }
      }
    });
  }
};
ji.WAIT_TILL_AB_EXPERIMENTS_ARE_LOADED_IN_MS = 500;
let ru = ji;
(async function() {
  await new ru().execute();
})();
