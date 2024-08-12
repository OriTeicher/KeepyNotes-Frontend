import {
  $ as d0,
  $a as x1,
  A as Ye,
  Aa as er,
  Ab as Yc,
  B as ye,
  Ba as Nc,
  Bb as x0,
  C as Wn,
  Ca as nr,
  Cb as b5,
  D as w5,
  Da as rr,
  Db as hr,
  E as oe,
  Ea as or,
  Eb as Jc,
  F as Sc,
  Fa as A1,
  Fb as Xc,
  G as h0,
  Ga as C5,
  Gb as ft,
  H as se,
  Ha as Fc,
  Hb as t4,
  I as f5,
  Ia as V5,
  Ib as e4,
  J as kc,
  Ja as e2,
  Jb as z0,
  K as Ec,
  Ka as Zc,
  Kb as n4,
  L as Ic,
  La as y5,
  Lb as r4,
  M as Kn,
  Ma as _5,
  N as it,
  Na as n2,
  O as Qn,
  Oa as V1,
  P as B1,
  Pa as sr,
  Q as p1,
  Qa as p0,
  R as Tc,
  Ra as r2,
  S as W,
  Sa as m0,
  T as j1,
  Ta as Rt,
  U as Dc,
  Ua as Ot,
  V as Y,
  Va as Nt,
  W as x5,
  Wa as j,
  X as U,
  Xa as $,
  Y as T,
  Ya as S1,
  Z as v0,
  Za as wt,
  _ as Yn,
  _a as c1,
  a as B,
  aa as zt,
  ab as y1,
  b as i1,
  ba as l1,
  bb as ae,
  c as _c,
  ca as U1,
  cb as Mt,
  d as L,
  da as pt,
  db as h1,
  e as Hc,
  ea as ie,
  eb as lt,
  f as Lc,
  fa as Pc,
  fb as ir,
  g as d5,
  ga as Je,
  gb as _e,
  h as u5,
  ha as mt,
  hb as He,
  i as g5,
  ia as Xe,
  ib as ar,
  j as gt,
  ja as Q1,
  jb as lr,
  k as D1,
  ka as Y1,
  kb as H5,
  l as ne,
  la as Jn,
  lb as w0,
  m as Z1,
  ma as t2,
  mb as f0,
  n as O,
  na as z5,
  nb as jc,
  o as c0,
  oa as at,
  ob as cr,
  p as qn,
  pa as L1,
  pb as Ft,
  q as Ac,
  qa as Rc,
  qb as Uc,
  r as bc,
  ra as Xn,
  rb as $c,
  s as n1,
  sa as Oc,
  sb as qc,
  t as Qe,
  ta as Pt,
  tb as L5,
  u as tt,
  ua as M5,
  ub as Gc,
  v as p5,
  va as u0,
  vb as Wc,
  w as Gn,
  wa as tr,
  wb as k1,
  x as m5,
  xa as g0,
  xb as Kc,
  y as Bc,
  ya as a1,
  yb as A5,
  z as re,
  za as o1,
  zb as Qc,
} from "./chunk-RP35EGSE.js";
var dr = class n {
  constructor(t) {
    (this.normalizedNames = new Map()),
      (this.lazyUpdate = null),
      t
        ? typeof t == "string"
          ? (this.lazyInit = () => {
              (this.headers = new Map()),
                t
                  .split(
                    `
`
                  )
                  .forEach((e) => {
                    let r = e.indexOf(":");
                    if (r > 0) {
                      let o = e.slice(0, r),
                        s = o.toLowerCase(),
                        a = e.slice(r + 1).trim();
                      this.maybeSetNormalizedName(o, s),
                        this.headers.has(s)
                          ? this.headers.get(s).push(a)
                          : this.headers.set(s, [a]);
                    }
                  });
            })
          : typeof Headers < "u" && t instanceof Headers
          ? ((this.headers = new Map()),
            t.forEach((e, r) => {
              this.setHeaderEntries(r, e);
            }))
          : (this.lazyInit = () => {
              (this.headers = new Map()),
                Object.entries(t).forEach(([e, r]) => {
                  this.setHeaderEntries(e, r);
                });
            })
        : (this.headers = new Map());
  }
  has(t) {
    return this.init(), this.headers.has(t.toLowerCase());
  }
  get(t) {
    this.init();
    let e = this.headers.get(t.toLowerCase());
    return e && e.length > 0 ? e[0] : null;
  }
  keys() {
    return this.init(), Array.from(this.normalizedNames.values());
  }
  getAll(t) {
    return this.init(), this.headers.get(t.toLowerCase()) || null;
  }
  append(t, e) {
    return this.clone({ name: t, value: e, op: "a" });
  }
  set(t, e) {
    return this.clone({ name: t, value: e, op: "s" });
  }
  delete(t, e) {
    return this.clone({ name: t, value: e, op: "d" });
  }
  maybeSetNormalizedName(t, e) {
    this.normalizedNames.has(e) || this.normalizedNames.set(e, t);
  }
  init() {
    this.lazyInit &&
      (this.lazyInit instanceof n
        ? this.copyFrom(this.lazyInit)
        : this.lazyInit(),
      (this.lazyInit = null),
      this.lazyUpdate &&
        (this.lazyUpdate.forEach((t) => this.applyUpdate(t)),
        (this.lazyUpdate = null)));
  }
  copyFrom(t) {
    t.init(),
      Array.from(t.headers.keys()).forEach((e) => {
        this.headers.set(e, t.headers.get(e)),
          this.normalizedNames.set(e, t.normalizedNames.get(e));
      });
  }
  clone(t) {
    let e = new n();
    return (
      (e.lazyInit =
        this.lazyInit && this.lazyInit instanceof n ? this.lazyInit : this),
      (e.lazyUpdate = (this.lazyUpdate || []).concat([t])),
      e
    );
  }
  applyUpdate(t) {
    let e = t.name.toLowerCase();
    switch (t.op) {
      case "a":
      case "s":
        let r = t.value;
        if ((typeof r == "string" && (r = [r]), r.length === 0)) return;
        this.maybeSetNormalizedName(t.name, e);
        let o = (t.op === "a" ? this.headers.get(e) : void 0) || [];
        o.push(...r), this.headers.set(e, o);
        break;
      case "d":
        let s = t.value;
        if (!s) this.headers.delete(e), this.normalizedNames.delete(e);
        else {
          let a = this.headers.get(e);
          if (!a) return;
          (a = a.filter((l) => s.indexOf(l) === -1)),
            a.length === 0
              ? (this.headers.delete(e), this.normalizedNames.delete(e))
              : this.headers.set(e, a);
        }
        break;
    }
  }
  setHeaderEntries(t, e) {
    let r = (Array.isArray(e) ? e : [e]).map((s) => s.toString()),
      o = t.toLowerCase();
    this.headers.set(o, r), this.maybeSetNormalizedName(t, o);
  }
  forEach(t) {
    this.init(),
      Array.from(this.normalizedNames.keys()).forEach((e) =>
        t(this.normalizedNames.get(e), this.headers.get(e))
      );
  }
};
var v4 = (function (n) {
    return (
      (n[(n.Sent = 0)] = "Sent"),
      (n[(n.UploadProgress = 1)] = "UploadProgress"),
      (n[(n.ResponseHeader = 2)] = "ResponseHeader"),
      (n[(n.DownloadProgress = 3)] = "DownloadProgress"),
      (n[(n.Response = 4)] = "Response"),
      (n[(n.User = 5)] = "User"),
      n
    );
  })(v4 || {}),
  B5 = class {
    constructor(t, e = d4.Ok, r = "OK") {
      (this.headers = t.headers || new dr()),
        (this.status = t.status !== void 0 ? t.status : e),
        (this.statusText = t.statusText || r),
        (this.url = t.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  };
var ur = class n extends B5 {
  constructor(t = {}) {
    super(t),
      (this.type = v4.Response),
      (this.body = t.body !== void 0 ? t.body : null);
  }
  clone(t = {}) {
    return new n({
      body: t.body !== void 0 ? t.body : this.body,
      headers: t.headers || this.headers,
      status: t.status !== void 0 ? t.status : this.status,
      statusText: t.statusText || this.statusText,
      url: t.url || this.url || void 0,
    });
  }
};
var d4 = (function (n) {
  return (
    (n[(n.Continue = 100)] = "Continue"),
    (n[(n.SwitchingProtocols = 101)] = "SwitchingProtocols"),
    (n[(n.Processing = 102)] = "Processing"),
    (n[(n.EarlyHints = 103)] = "EarlyHints"),
    (n[(n.Ok = 200)] = "Ok"),
    (n[(n.Created = 201)] = "Created"),
    (n[(n.Accepted = 202)] = "Accepted"),
    (n[(n.NonAuthoritativeInformation = 203)] = "NonAuthoritativeInformation"),
    (n[(n.NoContent = 204)] = "NoContent"),
    (n[(n.ResetContent = 205)] = "ResetContent"),
    (n[(n.PartialContent = 206)] = "PartialContent"),
    (n[(n.MultiStatus = 207)] = "MultiStatus"),
    (n[(n.AlreadyReported = 208)] = "AlreadyReported"),
    (n[(n.ImUsed = 226)] = "ImUsed"),
    (n[(n.MultipleChoices = 300)] = "MultipleChoices"),
    (n[(n.MovedPermanently = 301)] = "MovedPermanently"),
    (n[(n.Found = 302)] = "Found"),
    (n[(n.SeeOther = 303)] = "SeeOther"),
    (n[(n.NotModified = 304)] = "NotModified"),
    (n[(n.UseProxy = 305)] = "UseProxy"),
    (n[(n.Unused = 306)] = "Unused"),
    (n[(n.TemporaryRedirect = 307)] = "TemporaryRedirect"),
    (n[(n.PermanentRedirect = 308)] = "PermanentRedirect"),
    (n[(n.BadRequest = 400)] = "BadRequest"),
    (n[(n.Unauthorized = 401)] = "Unauthorized"),
    (n[(n.PaymentRequired = 402)] = "PaymentRequired"),
    (n[(n.Forbidden = 403)] = "Forbidden"),
    (n[(n.NotFound = 404)] = "NotFound"),
    (n[(n.MethodNotAllowed = 405)] = "MethodNotAllowed"),
    (n[(n.NotAcceptable = 406)] = "NotAcceptable"),
    (n[(n.ProxyAuthenticationRequired = 407)] = "ProxyAuthenticationRequired"),
    (n[(n.RequestTimeout = 408)] = "RequestTimeout"),
    (n[(n.Conflict = 409)] = "Conflict"),
    (n[(n.Gone = 410)] = "Gone"),
    (n[(n.LengthRequired = 411)] = "LengthRequired"),
    (n[(n.PreconditionFailed = 412)] = "PreconditionFailed"),
    (n[(n.PayloadTooLarge = 413)] = "PayloadTooLarge"),
    (n[(n.UriTooLong = 414)] = "UriTooLong"),
    (n[(n.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
    (n[(n.RangeNotSatisfiable = 416)] = "RangeNotSatisfiable"),
    (n[(n.ExpectationFailed = 417)] = "ExpectationFailed"),
    (n[(n.ImATeapot = 418)] = "ImATeapot"),
    (n[(n.MisdirectedRequest = 421)] = "MisdirectedRequest"),
    (n[(n.UnprocessableEntity = 422)] = "UnprocessableEntity"),
    (n[(n.Locked = 423)] = "Locked"),
    (n[(n.FailedDependency = 424)] = "FailedDependency"),
    (n[(n.TooEarly = 425)] = "TooEarly"),
    (n[(n.UpgradeRequired = 426)] = "UpgradeRequired"),
    (n[(n.PreconditionRequired = 428)] = "PreconditionRequired"),
    (n[(n.TooManyRequests = 429)] = "TooManyRequests"),
    (n[(n.RequestHeaderFieldsTooLarge = 431)] = "RequestHeaderFieldsTooLarge"),
    (n[(n.UnavailableForLegalReasons = 451)] = "UnavailableForLegalReasons"),
    (n[(n.InternalServerError = 500)] = "InternalServerError"),
    (n[(n.NotImplemented = 501)] = "NotImplemented"),
    (n[(n.BadGateway = 502)] = "BadGateway"),
    (n[(n.ServiceUnavailable = 503)] = "ServiceUnavailable"),
    (n[(n.GatewayTimeout = 504)] = "GatewayTimeout"),
    (n[(n.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"),
    (n[(n.VariantAlsoNegotiates = 506)] = "VariantAlsoNegotiates"),
    (n[(n.InsufficientStorage = 507)] = "InsufficientStorage"),
    (n[(n.LoopDetected = 508)] = "LoopDetected"),
    (n[(n.NotExtended = 510)] = "NotExtended"),
    (n[(n.NetworkAuthenticationRequired = 511)] =
      "NetworkAuthenticationRequired"),
    n
  );
})(d4 || {});
var V6 = new Y("");
var o4 = "b",
  s4 = "h",
  i4 = "s",
  a4 = "st",
  l4 = "u",
  c4 = "rt",
  vr = new Y(""),
  y6 = ["GET", "HEAD"];
function _6(n, t) {
  let f = T(vr),
    { isCacheActive: e } = f,
    r = _c(f, ["isCacheActive"]),
    { transferCache: o, method: s } = n;
  if (
    !e ||
    (s === "POST" && !r.includePostRequests && !o) ||
    (s !== "POST" && !y6.includes(s)) ||
    o === !1 ||
    r.filter?.(n) === !1
  )
    return t(n);
  let a = T(tr),
    l = L6(n),
    v = a.get(l, null),
    d = r.includeHeaders;
  if ((typeof o == "object" && o.includeHeaders && (d = o.includeHeaders), v)) {
    let { [o4]: z, [c4]: H, [s4]: E, [i4]: I, [a4]: S, [l4]: F } = v,
      G = z;
    switch (H) {
      case "arraybuffer":
        G = new TextEncoder().encode(z).buffer;
        break;
      case "blob":
        G = new Blob([z]);
        break;
    }
    let t1 = new dr(E);
    return O(
      new ur({ body: G, headers: t1, status: I, statusText: S, url: F })
    );
  }
  let g = z0(T(Pt));
  return t(n).pipe(
    B1((z) => {
      z instanceof ur &&
        g &&
        a.set(l, {
          [o4]: z.body,
          [s4]: H6(z.headers, d),
          [i4]: z.status,
          [a4]: z.statusText,
          [l4]: z.url || "",
          [c4]: n.responseType,
        });
    })
  );
}
function H6(n, t) {
  if (!t) return {};
  let e = {};
  for (let r of t) {
    let o = n.getAll(r);
    o !== null && (e[r] = o);
  }
  return e;
}
function h4(n) {
  return [...n.keys()]
    .sort()
    .map((t) => `${t}=${n.getAll(t)}`)
    .join("&");
}
function L6(n) {
  let { params: t, method: e, responseType: r, url: o } = n,
    s = h4(t),
    a = n.serializeBody();
  a instanceof URLSearchParams ? (a = h4(a)) : typeof a != "string" && (a = "");
  let l = [e, r, o, a, s].join("|"),
    v = A6(l);
  return v;
}
function A6(n) {
  let t = 0;
  for (let e of n) t = (Math.imul(31, t) + e.charCodeAt(0)) << 0;
  return (t += 2147483648), t.toString();
}
function u4(n) {
  return [
    {
      provide: vr,
      useFactory: () => (
        or("NgHttpTransferCache"), B({ isCacheActive: !0 }, n)
      ),
    },
    { provide: V6, useValue: _6, multi: !0, deps: [tr, vr] },
    {
      provide: w0,
      multi: !0,
      useFactory: () => {
        let t = T(f0),
          e = T(vr);
        return () => {
          jc(t).then(() => {
            e.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
var E5 = class extends Wc {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  I5 = class n extends E5 {
    static makeCurrent() {
      Gc(new n());
    }
    onAndCancel(t, e, r) {
      return (
        t.addEventListener(e, r),
        () => {
          t.removeEventListener(e, r);
        }
      );
    }
    dispatchEvent(t, e) {
      t.dispatchEvent(e);
    }
    remove(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }
    createElement(t, e) {
      return (e = e || this.getDefaultDocument()), e.createElement(t);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(t) {
      return t.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(t) {
      return t instanceof DocumentFragment;
    }
    getGlobalEventTarget(t, e) {
      return e === "window"
        ? window
        : e === "document"
        ? t
        : e === "body"
        ? t.body
        : null;
    }
    getBaseHref(t) {
      let e = B6();
      return e == null ? null : S6(e);
    }
    resetBaseElement() {
      M0 = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(t) {
      return b5(document.cookie, t);
    }
  },
  M0 = null;
function B6() {
  return (
    (M0 = M0 || document.querySelector("base")),
    M0 ? M0.getAttribute("href") : null
  );
}
function S6(n) {
  return new URL(n, document.baseURI).pathname;
}
var k6 = (() => {
    let t = class t {
      build() {
        return new XMLHttpRequest();
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  T5 = new Y(""),
  m4 = (() => {
    let t = class t {
      constructor(r, o) {
        (this._zone = o),
          (this._eventNameToPlugin = new Map()),
          r.forEach((s) => {
            s.manager = this;
          }),
          (this._plugins = r.slice().reverse());
      }
      addEventListener(r, o, s) {
        return this._findPluginFor(o).addEventListener(r, o, s);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(r) {
        let o = this._eventNameToPlugin.get(r);
        if (o) return o;
        if (((o = this._plugins.find((a) => a.supports(r))), !o))
          throw new p1(5101, !1);
        return this._eventNameToPlugin.set(r, o), o;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(T5), U(A1));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  gr = class {
    constructor(t) {
      this._doc = t;
    }
  },
  S5 = "ng-app-id",
  w4 = (() => {
    let t = class t {
      constructor(r, o, s, a = {}) {
        (this.doc = r),
          (this.appId = o),
          (this.nonce = s),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = z0(a)),
          this.resetHostNodes();
      }
      addStyles(r) {
        for (let o of r)
          this.changeUsageCount(o, 1) === 1 && this.onStyleAdded(o);
      }
      removeStyles(r) {
        for (let o of r)
          this.changeUsageCount(o, -1) <= 0 && this.onStyleRemoved(o);
      }
      ngOnDestroy() {
        let r = this.styleNodesInDOM;
        r && (r.forEach((o) => o.remove()), r.clear());
        for (let o of this.getAllStyles()) this.onStyleRemoved(o);
        this.resetHostNodes();
      }
      addHost(r) {
        this.hostNodes.add(r);
        for (let o of this.getAllStyles()) this.addStyleToHost(r, o);
      }
      removeHost(r) {
        this.hostNodes.delete(r);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(r) {
        for (let o of this.hostNodes) this.addStyleToHost(o, r);
      }
      onStyleRemoved(r) {
        let o = this.styleRef;
        o.get(r)?.elements?.forEach((s) => s.remove()), o.delete(r);
      }
      collectServerRenderedStyles() {
        let r = this.doc.head?.querySelectorAll(`style[${S5}="${this.appId}"]`);
        if (r?.length) {
          let o = new Map();
          return (
            r.forEach((s) => {
              s.textContent != null && o.set(s.textContent, s);
            }),
            o
          );
        }
        return null;
      }
      changeUsageCount(r, o) {
        let s = this.styleRef;
        if (s.has(r)) {
          let a = s.get(r);
          return (a.usage += o), a.usage;
        }
        return s.set(r, { usage: o, elements: [] }), o;
      }
      getStyleElement(r, o) {
        let s = this.styleNodesInDOM,
          a = s?.get(o);
        if (a?.parentNode === r) return s.delete(o), a.removeAttribute(S5), a;
        {
          let l = this.doc.createElement("style");
          return (
            this.nonce && l.setAttribute("nonce", this.nonce),
            (l.textContent = o),
            this.platformIsServer && l.setAttribute(S5, this.appId),
            r.appendChild(l),
            l
          );
        }
      }
      addStyleToHost(r, o) {
        let s = this.getStyleElement(r, o),
          a = this.styleRef,
          l = a.get(o)?.elements;
        l ? l.push(s) : a.set(o, { elements: [s], usage: 1 });
      }
      resetHostNodes() {
        let r = this.hostNodes;
        r.clear(), r.add(this.doc.head);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(k1), U(Xn), U(u0, 8), U(Pt));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  k5 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/MathML/",
  },
  O5 = /%COMP%/g,
  f4 = "%COMP%",
  E6 = `_nghost-${f4}`,
  I6 = `_ngcontent-${f4}`,
  T6 = !0,
  D6 = new Y("", { providedIn: "root", factory: () => T6 });
function P6(n) {
  return I6.replace(O5, n);
}
function R6(n) {
  return E6.replace(O5, n);
}
function x4(n, t) {
  return t.map((e) => e.replace(O5, n));
}
var pr = (() => {
    let t = class t {
      constructor(r, o, s, a, l, v, d, g = null) {
        (this.eventManager = r),
          (this.sharedStylesHost = o),
          (this.appId = s),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = l),
          (this.platformId = v),
          (this.ngZone = d),
          (this.nonce = g),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = z0(v)),
          (this.defaultRenderer = new C0(r, l, d, this.platformIsServer));
      }
      createRenderer(r, o) {
        if (!r || !o) return this.defaultRenderer;
        this.platformIsServer &&
          o.encapsulation === d0.ShadowDom &&
          (o = i1(B({}, o), { encapsulation: d0.Emulated }));
        let s = this.getOrCreateRenderer(r, o);
        return (
          s instanceof mr
            ? s.applyToHost(r)
            : s instanceof V0 && s.applyStyles(),
          s
        );
      }
      getOrCreateRenderer(r, o) {
        let s = this.rendererByCompId,
          a = s.get(o.id);
        if (!a) {
          let l = this.doc,
            v = this.ngZone,
            d = this.eventManager,
            g = this.sharedStylesHost,
            f = this.removeStylesOnCompDestroy,
            z = this.platformIsServer;
          switch (o.encapsulation) {
            case d0.Emulated:
              a = new mr(d, g, o, this.appId, f, l, v, z);
              break;
            case d0.ShadowDom:
              return new D5(d, g, r, o, l, v, this.nonce, z);
            default:
              a = new V0(d, g, o, f, l, v, z);
              break;
          }
          s.set(o.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(
        U(m4),
        U(w4),
        U(Xn),
        U(D6),
        U(k1),
        U(Pt),
        U(A1),
        U(u0)
      );
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  C0 = class {
    constructor(t, e, r, o) {
      (this.eventManager = t),
        (this.doc = e),
        (this.ngZone = r),
        (this.platformIsServer = o),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(t, e) {
      return e
        ? this.doc.createElementNS(k5[e] || e, t)
        : this.doc.createElement(t);
    }
    createComment(t) {
      return this.doc.createComment(t);
    }
    createText(t) {
      return this.doc.createTextNode(t);
    }
    appendChild(t, e) {
      (g4(t) ? t.content : t).appendChild(e);
    }
    insertBefore(t, e, r) {
      t && (g4(t) ? t.content : t).insertBefore(e, r);
    }
    removeChild(t, e) {
      t && t.removeChild(e);
    }
    selectRootElement(t, e) {
      let r = typeof t == "string" ? this.doc.querySelector(t) : t;
      if (!r) throw new p1(-5104, !1);
      return e || (r.textContent = ""), r;
    }
    parentNode(t) {
      return t.parentNode;
    }
    nextSibling(t) {
      return t.nextSibling;
    }
    setAttribute(t, e, r, o) {
      if (o) {
        e = o + ":" + e;
        let s = k5[o];
        s ? t.setAttributeNS(s, e, r) : t.setAttribute(e, r);
      } else t.setAttribute(e, r);
    }
    removeAttribute(t, e, r) {
      if (r) {
        let o = k5[r];
        o ? t.removeAttributeNS(o, e) : t.removeAttribute(`${r}:${e}`);
      } else t.removeAttribute(e);
    }
    addClass(t, e) {
      t.classList.add(e);
    }
    removeClass(t, e) {
      t.classList.remove(e);
    }
    setStyle(t, e, r, o) {
      o & (g0.DashCase | g0.Important)
        ? t.style.setProperty(e, r, o & g0.Important ? "important" : "")
        : (t.style[e] = r);
    }
    removeStyle(t, e, r) {
      r & g0.DashCase ? t.style.removeProperty(e) : (t.style[e] = "");
    }
    setProperty(t, e, r) {
      t != null && (t[e] = r);
    }
    setValue(t, e) {
      t.nodeValue = e;
    }
    listen(t, e, r) {
      if (
        typeof t == "string" &&
        ((t = L5().getGlobalEventTarget(this.doc, t)), !t)
      )
        throw new Error(`Unsupported event target ${t} for event ${e}`);
      return this.eventManager.addEventListener(
        t,
        e,
        this.decoratePreventDefault(r)
      );
    }
    decoratePreventDefault(t) {
      return (e) => {
        if (e === "__ngUnwrap__") return t;
        (this.platformIsServer ? this.ngZone.runGuarded(() => t(e)) : t(e)) ===
          !1 && e.preventDefault();
      };
    }
  };
function g4(n) {
  return n.tagName === "TEMPLATE" && n.content !== void 0;
}
var D5 = class extends C0 {
    constructor(t, e, r, o, s, a, l, v) {
      super(t, s, a, v),
        (this.sharedStylesHost = e),
        (this.hostEl = r),
        (this.shadowRoot = r.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let d = x4(o.id, o.styles);
      for (let g of d) {
        let f = document.createElement("style");
        l && f.setAttribute("nonce", l),
          (f.textContent = g),
          this.shadowRoot.appendChild(f);
      }
    }
    nodeOrShadowRoot(t) {
      return t === this.hostEl ? this.shadowRoot : t;
    }
    appendChild(t, e) {
      return super.appendChild(this.nodeOrShadowRoot(t), e);
    }
    insertBefore(t, e, r) {
      return super.insertBefore(this.nodeOrShadowRoot(t), e, r);
    }
    removeChild(t, e) {
      return super.removeChild(this.nodeOrShadowRoot(t), e);
    }
    parentNode(t) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  V0 = class extends C0 {
    constructor(t, e, r, o, s, a, l, v) {
      super(t, s, a, l),
        (this.sharedStylesHost = e),
        (this.removeStylesOnCompDestroy = o),
        (this.styles = v ? x4(v, r.styles) : r.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  mr = class extends V0 {
    constructor(t, e, r, o, s, a, l, v) {
      let d = o + "-" + r.id;
      super(t, e, r, s, a, l, v, d),
        (this.contentAttr = P6(d)),
        (this.hostAttr = R6(d));
    }
    applyToHost(t) {
      this.applyStyles(), this.setAttribute(t, this.hostAttr, "");
    }
    createElement(t, e) {
      let r = super.createElement(t, e);
      return super.setAttribute(r, this.contentAttr, ""), r;
    }
  },
  O6 = (() => {
    let t = class t extends gr {
      constructor(r) {
        super(r);
      }
      supports(r) {
        return !0;
      }
      addEventListener(r, o, s) {
        return (
          r.addEventListener(o, s, !1), () => this.removeEventListener(r, o, s)
        );
      }
      removeEventListener(r, o, s) {
        return r.removeEventListener(o, s);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(k1));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  p4 = ["alt", "control", "meta", "shift"],
  N6 = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  F6 = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  Z6 = (() => {
    let t = class t extends gr {
      constructor(r) {
        super(r);
      }
      supports(r) {
        return t.parseEventName(r) != null;
      }
      addEventListener(r, o, s) {
        let a = t.parseEventName(o),
          l = t.eventCallback(a.fullKey, s, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => L5().onAndCancel(r, a.domEventName, l));
      }
      static parseEventName(r) {
        let o = r.toLowerCase().split("."),
          s = o.shift();
        if (o.length === 0 || !(s === "keydown" || s === "keyup")) return null;
        let a = t._normalizeKey(o.pop()),
          l = "",
          v = o.indexOf("code");
        if (
          (v > -1 && (o.splice(v, 1), (l = "code.")),
          p4.forEach((g) => {
            let f = o.indexOf(g);
            f > -1 && (o.splice(f, 1), (l += g + "."));
          }),
          (l += a),
          o.length != 0 || a.length === 0)
        )
          return null;
        let d = {};
        return (d.domEventName = s), (d.fullKey = l), d;
      }
      static matchEventFullKeyCode(r, o) {
        let s = N6[r.key] || r.key,
          a = "";
        return (
          o.indexOf("code.") > -1 && ((s = r.code), (a = "code.")),
          s == null || !s
            ? !1
            : ((s = s.toLowerCase()),
              s === " " ? (s = "space") : s === "." && (s = "dot"),
              p4.forEach((l) => {
                if (l !== s) {
                  let v = F6[l];
                  v(r) && (a += l + ".");
                }
              }),
              (a += s),
              a === o)
        );
      }
      static eventCallback(r, o, s) {
        return (a) => {
          t.matchEventFullKeyCode(a, r) && s.runGuarded(() => o(a));
        };
      }
      static _normalizeKey(r) {
        return r === "esc" ? "escape" : r;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(k1));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function z4(n, t) {
  return Uc(B({ rootComponent: n }, j6(t)));
}
function j6(n) {
  return {
    appProviders: [...W6, ...(n?.providers ?? [])],
    platformProviders: G6,
  };
}
function U6() {
  I5.makeCurrent();
}
function $6() {
  return new z5();
}
function q6() {
  return Rc(document), document;
}
var G6 = [
  { provide: Pt, useValue: t4 },
  { provide: Oc, useValue: U6, multi: !0 },
  { provide: k1, useFactory: q6, deps: [] },
];
var W6 = [
  { provide: Pc, useValue: "root" },
  { provide: z5, useFactory: $6, deps: [] },
  { provide: T5, useClass: O6, multi: !0, deps: [k1, A1, Pt] },
  { provide: T5, useClass: Z6, multi: !0, deps: [k1] },
  pr,
  w4,
  m4,
  { provide: nr, useExisting: pr },
  { provide: r4, useClass: k6, deps: [] },
  [],
];
var M4 = (() => {
  let t = class t {
    constructor(r) {
      this._doc = r;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(r) {
      this._doc.title = r || "";
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(U(k1));
  }),
    (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var P5 = (function (n) {
  return (
    (n[(n.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
    (n[(n.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
    n
  );
})(P5 || {});
function C4(...n) {
  let t = [],
    e = new Set(),
    r = e.has(P5.HttpTransferCacheOptions);
  for (let { ɵproviders: o, ɵkind: s } of n) e.add(s), o.length && t.push(o);
  return ie([[], $c(), e.has(P5.NoHttpTransferCache) || r ? [] : u4({}), t]);
}
var K = "primary",
  O0 = Symbol("RouteTitle"),
  U5 = class {
    constructor(t) {
      this.params = t || {};
    }
    has(t) {
      return Object.prototype.hasOwnProperty.call(this.params, t);
    }
    get(t) {
      if (this.has(t)) {
        let e = this.params[t];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(t) {
      if (this.has(t)) {
        let e = this.params[t];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function l2(n) {
  return new U5(n);
}
function Q6(n, t, e) {
  let r = e.path.split("/");
  if (
    r.length > n.length ||
    (e.pathMatch === "full" && (t.hasChildren() || r.length < n.length))
  )
    return null;
  let o = {};
  for (let s = 0; s < r.length; s++) {
    let a = r[s],
      l = n[s];
    if (a.startsWith(":")) o[a.substring(1)] = l;
    else if (a !== l.path) return null;
  }
  return { consumed: n.slice(0, r.length), posParams: o };
}
function Y6(n, t) {
  if (n.length !== t.length) return !1;
  for (let e = 0; e < n.length; ++e) if (!Ct(n[e], t[e])) return !1;
  return !0;
}
function Ct(n, t) {
  let e = n ? $5(n) : void 0,
    r = t ? $5(t) : void 0;
  if (!e || !r || e.length != r.length) return !1;
  let o;
  for (let s = 0; s < e.length; s++)
    if (((o = e[s]), !E4(n[o], t[o]))) return !1;
  return !0;
}
function $5(n) {
  return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function E4(n, t) {
  if (Array.isArray(n) && Array.isArray(t)) {
    if (n.length !== t.length) return !1;
    let e = [...n].sort(),
      r = [...t].sort();
    return e.every((o, s) => r[s] === o);
  } else return n === t;
}
function I4(n) {
  return n.length > 0 ? n[n.length - 1] : null;
}
function ve(n) {
  return qn(n) ? n : lr(n) ? Z1(Promise.resolve(n)) : O(n);
}
var J6 = { exact: D4, subset: P4 },
  T4 = { exact: X6, subset: t9, ignored: () => !0 };
function V4(n, t, e) {
  return (
    J6[e.paths](n.root, t.root, e.matrixParams) &&
    T4[e.queryParams](n.queryParams, t.queryParams) &&
    !(e.fragment === "exact" && n.fragment !== t.fragment)
  );
}
function X6(n, t) {
  return Ct(n, t);
}
function D4(n, t, e) {
  if (
    !Ae(n.segments, t.segments) ||
    !xr(n.segments, t.segments, e) ||
    n.numberOfChildren !== t.numberOfChildren
  )
    return !1;
  for (let r in t.children)
    if (!n.children[r] || !D4(n.children[r], t.children[r], e)) return !1;
  return !0;
}
function t9(n, t) {
  return (
    Object.keys(t).length <= Object.keys(n).length &&
    Object.keys(t).every((e) => E4(n[e], t[e]))
  );
}
function P4(n, t, e) {
  return R4(n, t, t.segments, e);
}
function R4(n, t, e, r) {
  if (n.segments.length > e.length) {
    let o = n.segments.slice(0, e.length);
    return !(!Ae(o, e) || t.hasChildren() || !xr(o, e, r));
  } else if (n.segments.length === e.length) {
    if (!Ae(n.segments, e) || !xr(n.segments, e, r)) return !1;
    for (let o in t.children)
      if (!n.children[o] || !P4(n.children[o], t.children[o], r)) return !1;
    return !0;
  } else {
    let o = e.slice(0, n.segments.length),
      s = e.slice(n.segments.length);
    return !Ae(n.segments, o) || !xr(n.segments, o, r) || !n.children[K]
      ? !1
      : R4(n.children[K], t, s, r);
  }
}
function xr(n, t, e) {
  return t.every((r, o) => T4[e](n[o].parameters, r.parameters));
}
var le = class {
    constructor(t = new s1([], {}), e = {}, r = null) {
      (this.root = t), (this.queryParams = e), (this.fragment = r);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= l2(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return r9.serialize(this);
    }
  },
  s1 = class {
    constructor(t, e) {
      (this.segments = t),
        (this.children = e),
        (this.parent = null),
        Object.values(e).forEach((r) => (r.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return zr(this);
    }
  },
  Le = class {
    constructor(t, e) {
      (this.path = t), (this.parameters = e);
    }
    get parameterMap() {
      return (this._parameterMap ??= l2(this.parameters)), this._parameterMap;
    }
    toString() {
      return N4(this);
    }
  };
function e9(n, t) {
  return Ae(n, t) && n.every((e, r) => Ct(e.parameters, t[r].parameters));
}
function Ae(n, t) {
  return n.length !== t.length ? !1 : n.every((e, r) => e.path === t[r].path);
}
function n9(n, t) {
  let e = [];
  return (
    Object.entries(n.children).forEach(([r, o]) => {
      r === K && (e = e.concat(t(o, r)));
    }),
    Object.entries(n.children).forEach(([r, o]) => {
      r !== K && (e = e.concat(t(o, r)));
    }),
    e
  );
}
var N0 = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: () => new B0(), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  B0 = class {
    parse(t) {
      let e = new G5(t);
      return new le(
        e.parseRootSegment(),
        e.parseQueryParams(),
        e.parseFragment()
      );
    }
    serialize(t) {
      let e = `/${y0(t.root, !0)}`,
        r = i9(t.queryParams),
        o = typeof t.fragment == "string" ? `#${o9(t.fragment)}` : "";
      return `${e}${r}${o}`;
    }
  },
  r9 = new B0();
function zr(n) {
  return n.segments.map((t) => N4(t)).join("/");
}
function y0(n, t) {
  if (!n.hasChildren()) return zr(n);
  if (t) {
    let e = n.children[K] ? y0(n.children[K], !1) : "",
      r = [];
    return (
      Object.entries(n.children).forEach(([o, s]) => {
        o !== K && r.push(`${o}:${y0(s, !1)}`);
      }),
      r.length > 0 ? `${e}(${r.join("//")})` : e
    );
  } else {
    let e = n9(n, (r, o) =>
      o === K ? [y0(n.children[K], !1)] : [`${o}:${y0(r, !1)}`]
    );
    return Object.keys(n.children).length === 1 && n.children[K] != null
      ? `${zr(n)}/${e[0]}`
      : `${zr(n)}/(${e.join("//")})`;
  }
}
function O4(n) {
  return encodeURIComponent(n)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function wr(n) {
  return O4(n).replace(/%3B/gi, ";");
}
function o9(n) {
  return encodeURI(n);
}
function q5(n) {
  return O4(n)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Mr(n) {
  return decodeURIComponent(n);
}
function y4(n) {
  return Mr(n.replace(/\+/g, "%20"));
}
function N4(n) {
  return `${q5(n.path)}${s9(n.parameters)}`;
}
function s9(n) {
  return Object.entries(n)
    .map(([t, e]) => `;${q5(t)}=${q5(e)}`)
    .join("");
}
function i9(n) {
  let t = Object.entries(n)
    .map(([e, r]) =>
      Array.isArray(r)
        ? r.map((o) => `${wr(e)}=${wr(o)}`).join("&")
        : `${wr(e)}=${wr(r)}`
    )
    .filter((e) => e);
  return t.length ? `?${t.join("&")}` : "";
}
var a9 = /^[^\/()?;#]+/;
function N5(n) {
  let t = n.match(a9);
  return t ? t[0] : "";
}
var l9 = /^[^\/()?;=#]+/;
function c9(n) {
  let t = n.match(l9);
  return t ? t[0] : "";
}
var h9 = /^[^=?&#]+/;
function v9(n) {
  let t = n.match(h9);
  return t ? t[0] : "";
}
var d9 = /^[^&#]+/;
function u9(n) {
  let t = n.match(d9);
  return t ? t[0] : "";
}
var G5 = class {
  constructor(t) {
    (this.url = t), (this.remaining = t);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new s1([], {})
        : new s1([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let t = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(t);
      while (this.consumeOptional("&"));
    return t;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let t = [];
    for (
      this.peekStartsWith("(") || t.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), t.push(this.parseSegment());
    let e = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (e = this.parseParens(!0)));
    let r = {};
    return (
      this.peekStartsWith("(") && (r = this.parseParens(!1)),
      (t.length > 0 || Object.keys(e).length > 0) && (r[K] = new s1(t, e)),
      r
    );
  }
  parseSegment() {
    let t = N5(this.remaining);
    if (t === "" && this.peekStartsWith(";")) throw new p1(4009, !1);
    return this.capture(t), new Le(Mr(t), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let t = {};
    for (; this.consumeOptional(";"); ) this.parseParam(t);
    return t;
  }
  parseParam(t) {
    let e = c9(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = "";
    if (this.consumeOptional("=")) {
      let o = N5(this.remaining);
      o && ((r = o), this.capture(r));
    }
    t[Mr(e)] = Mr(r);
  }
  parseQueryParam(t) {
    let e = v9(this.remaining);
    if (!e) return;
    this.capture(e);
    let r = "";
    if (this.consumeOptional("=")) {
      let a = u9(this.remaining);
      a && ((r = a), this.capture(r));
    }
    let o = y4(e),
      s = y4(r);
    if (t.hasOwnProperty(o)) {
      let a = t[o];
      Array.isArray(a) || ((a = [a]), (t[o] = a)), a.push(s);
    } else t[o] = s;
  }
  parseParens(t) {
    let e = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let r = N5(this.remaining),
        o = this.remaining[r.length];
      if (o !== "/" && o !== ")" && o !== ";") throw new p1(4010, !1);
      let s;
      r.indexOf(":") > -1
        ? ((s = r.slice(0, r.indexOf(":"))), this.capture(s), this.capture(":"))
        : t && (s = K);
      let a = this.parseChildren();
      (e[s] = Object.keys(a).length === 1 ? a[K] : new s1([], a)),
        this.consumeOptional("//");
    }
    return e;
  }
  peekStartsWith(t) {
    return this.remaining.startsWith(t);
  }
  consumeOptional(t) {
    return this.peekStartsWith(t)
      ? ((this.remaining = this.remaining.substring(t.length)), !0)
      : !1;
  }
  capture(t) {
    if (!this.consumeOptional(t)) throw new p1(4011, !1);
  }
};
function F4(n) {
  return n.segments.length > 0 ? new s1([], { [K]: n }) : n;
}
function Z4(n) {
  let t = {};
  for (let [r, o] of Object.entries(n.children)) {
    let s = Z4(o);
    if (r === K && s.segments.length === 0 && s.hasChildren())
      for (let [a, l] of Object.entries(s.children)) t[a] = l;
    else (s.segments.length > 0 || s.hasChildren()) && (t[r] = s);
  }
  let e = new s1(n.segments, t);
  return g9(e);
}
function g9(n) {
  if (n.numberOfChildren === 1 && n.children[K]) {
    let t = n.children[K];
    return new s1(n.segments.concat(t.segments), t.children);
  }
  return n;
}
function c2(n) {
  return n instanceof le;
}
function p9(n, t, e = null, r = null) {
  let o = j4(n);
  return U4(o, t, e, r);
}
function j4(n) {
  let t;
  function e(s) {
    let a = {};
    for (let v of s.children) {
      let d = e(v);
      a[v.outlet] = d;
    }
    let l = new s1(s.url, a);
    return s === n && (t = l), l;
  }
  let r = e(n.root),
    o = F4(r);
  return t ?? o;
}
function U4(n, t, e, r) {
  let o = n;
  for (; o.parent; ) o = o.parent;
  if (t.length === 0) return F5(o, o, o, e, r);
  let s = m9(t);
  if (s.toRoot()) return F5(o, o, new s1([], {}), e, r);
  let a = w9(s, o, n),
    l = a.processChildren
      ? L0(a.segmentGroup, a.index, s.commands)
      : q4(a.segmentGroup, a.index, s.commands);
  return F5(o, a.segmentGroup, l, e, r);
}
function Cr(n) {
  return typeof n == "object" && n != null && !n.outlets && !n.segmentPath;
}
function S0(n) {
  return typeof n == "object" && n != null && n.outlets;
}
function F5(n, t, e, r, o) {
  let s = {};
  r &&
    Object.entries(r).forEach(([v, d]) => {
      s[v] = Array.isArray(d) ? d.map((g) => `${g}`) : `${d}`;
    });
  let a;
  n === t ? (a = e) : (a = $4(n, t, e));
  let l = F4(Z4(a));
  return new le(l, s, o);
}
function $4(n, t, e) {
  let r = {};
  return (
    Object.entries(n.children).forEach(([o, s]) => {
      s === t ? (r[o] = e) : (r[o] = $4(s, t, e));
    }),
    new s1(n.segments, r)
  );
}
var Vr = class {
  constructor(t, e, r) {
    if (
      ((this.isAbsolute = t),
      (this.numberOfDoubleDots = e),
      (this.commands = r),
      t && r.length > 0 && Cr(r[0]))
    )
      throw new p1(4003, !1);
    let o = r.find(S0);
    if (o && o !== I4(r)) throw new p1(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function m9(n) {
  if (typeof n[0] == "string" && n.length === 1 && n[0] === "/")
    return new Vr(!0, 0, n);
  let t = 0,
    e = !1,
    r = n.reduce((o, s, a) => {
      if (typeof s == "object" && s != null) {
        if (s.outlets) {
          let l = {};
          return (
            Object.entries(s.outlets).forEach(([v, d]) => {
              l[v] = typeof d == "string" ? d.split("/") : d;
            }),
            [...o, { outlets: l }]
          );
        }
        if (s.segmentPath) return [...o, s.segmentPath];
      }
      return typeof s != "string"
        ? [...o, s]
        : a === 0
        ? (s.split("/").forEach((l, v) => {
            (v == 0 && l === ".") ||
              (v == 0 && l === ""
                ? (e = !0)
                : l === ".."
                ? t++
                : l != "" && o.push(l));
          }),
          o)
        : [...o, s];
    }, []);
  return new Vr(e, t, r);
}
var i2 = class {
  constructor(t, e, r) {
    (this.segmentGroup = t), (this.processChildren = e), (this.index = r);
  }
};
function w9(n, t, e) {
  if (n.isAbsolute) return new i2(t, !0, 0);
  if (!e) return new i2(t, !1, NaN);
  if (e.parent === null) return new i2(e, !0, 0);
  let r = Cr(n.commands[0]) ? 0 : 1,
    o = e.segments.length - 1 + r;
  return f9(e, o, n.numberOfDoubleDots);
}
function f9(n, t, e) {
  let r = n,
    o = t,
    s = e;
  for (; s > o; ) {
    if (((s -= o), (r = r.parent), !r)) throw new p1(4005, !1);
    o = r.segments.length;
  }
  return new i2(r, !1, o - s);
}
function x9(n) {
  return S0(n[0]) ? n[0].outlets : { [K]: n };
}
function q4(n, t, e) {
  if (((n ??= new s1([], {})), n.segments.length === 0 && n.hasChildren()))
    return L0(n, t, e);
  let r = z9(n, t, e),
    o = e.slice(r.commandIndex);
  if (r.match && r.pathIndex < n.segments.length) {
    let s = new s1(n.segments.slice(0, r.pathIndex), {});
    return (
      (s.children[K] = new s1(n.segments.slice(r.pathIndex), n.children)),
      L0(s, 0, o)
    );
  } else
    return r.match && o.length === 0
      ? new s1(n.segments, {})
      : r.match && !n.hasChildren()
      ? W5(n, t, e)
      : r.match
      ? L0(n, 0, o)
      : W5(n, t, e);
}
function L0(n, t, e) {
  if (e.length === 0) return new s1(n.segments, {});
  {
    let r = x9(e),
      o = {};
    if (
      Object.keys(r).some((s) => s !== K) &&
      n.children[K] &&
      n.numberOfChildren === 1 &&
      n.children[K].segments.length === 0
    ) {
      let s = L0(n.children[K], t, e);
      return new s1(n.segments, s.children);
    }
    return (
      Object.entries(r).forEach(([s, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (o[s] = q4(n.children[s], t, a));
      }),
      Object.entries(n.children).forEach(([s, a]) => {
        r[s] === void 0 && (o[s] = a);
      }),
      new s1(n.segments, o)
    );
  }
}
function z9(n, t, e) {
  let r = 0,
    o = t,
    s = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; o < n.segments.length; ) {
    if (r >= e.length) return s;
    let a = n.segments[o],
      l = e[r];
    if (S0(l)) break;
    let v = `${l}`,
      d = r < e.length - 1 ? e[r + 1] : null;
    if (o > 0 && v === void 0) break;
    if (v && d && typeof d == "object" && d.outlets === void 0) {
      if (!H4(v, d, a)) return s;
      r += 2;
    } else {
      if (!H4(v, {}, a)) return s;
      r++;
    }
    o++;
  }
  return { match: !0, pathIndex: o, commandIndex: r };
}
function W5(n, t, e) {
  let r = n.segments.slice(0, t),
    o = 0;
  for (; o < e.length; ) {
    let s = e[o];
    if (S0(s)) {
      let v = M9(s.outlets);
      return new s1(r, v);
    }
    if (o === 0 && Cr(e[0])) {
      let v = n.segments[t];
      r.push(new Le(v.path, _4(e[0]))), o++;
      continue;
    }
    let a = S0(s) ? s.outlets[K] : `${s}`,
      l = o < e.length - 1 ? e[o + 1] : null;
    a && l && Cr(l)
      ? (r.push(new Le(a, _4(l))), (o += 2))
      : (r.push(new Le(a, {})), o++);
  }
  return new s1(r, {});
}
function M9(n) {
  let t = {};
  return (
    Object.entries(n).forEach(([e, r]) => {
      typeof r == "string" && (r = [r]),
        r !== null && (t[e] = W5(new s1([], {}), 0, r));
    }),
    t
  );
}
function _4(n) {
  let t = {};
  return Object.entries(n).forEach(([e, r]) => (t[e] = `${r}`)), t;
}
function H4(n, t, e) {
  return n == e.path && Ct(t, e.parameters);
}
var A0 = "imperative",
  E1 = (function (n) {
    return (
      (n[(n.NavigationStart = 0)] = "NavigationStart"),
      (n[(n.NavigationEnd = 1)] = "NavigationEnd"),
      (n[(n.NavigationCancel = 2)] = "NavigationCancel"),
      (n[(n.NavigationError = 3)] = "NavigationError"),
      (n[(n.RoutesRecognized = 4)] = "RoutesRecognized"),
      (n[(n.ResolveStart = 5)] = "ResolveStart"),
      (n[(n.ResolveEnd = 6)] = "ResolveEnd"),
      (n[(n.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (n[(n.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (n[(n.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (n[(n.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (n[(n.ChildActivationStart = 11)] = "ChildActivationStart"),
      (n[(n.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (n[(n.ActivationStart = 13)] = "ActivationStart"),
      (n[(n.ActivationEnd = 14)] = "ActivationEnd"),
      (n[(n.Scroll = 15)] = "Scroll"),
      (n[(n.NavigationSkipped = 16)] = "NavigationSkipped"),
      n
    );
  })(E1 || {}),
  ct = class {
    constructor(t, e) {
      (this.id = t), (this.url = e);
    }
  },
  h2 = class extends ct {
    constructor(t, e, r = "imperative", o = null) {
      super(t, e),
        (this.type = E1.NavigationStart),
        (this.navigationTrigger = r),
        (this.restoredState = o);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Zt = class extends ct {
    constructor(t, e, r) {
      super(t, e), (this.urlAfterRedirects = r), (this.type = E1.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  nt = (function (n) {
    return (
      (n[(n.Redirect = 0)] = "Redirect"),
      (n[(n.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (n[(n.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (n[(n.GuardRejected = 3)] = "GuardRejected"),
      n
    );
  })(nt || {}),
  yr = (function (n) {
    return (
      (n[(n.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (n[(n.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      n
    );
  })(yr || {}),
  ce = class extends ct {
    constructor(t, e, r, o) {
      super(t, e),
        (this.reason = r),
        (this.code = o),
        (this.type = E1.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  he = class extends ct {
    constructor(t, e, r, o) {
      super(t, e),
        (this.reason = r),
        (this.code = o),
        (this.type = E1.NavigationSkipped);
    }
  },
  k0 = class extends ct {
    constructor(t, e, r, o) {
      super(t, e),
        (this.error = r),
        (this.target = o),
        (this.type = E1.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  _r = class extends ct {
    constructor(t, e, r, o) {
      super(t, e),
        (this.urlAfterRedirects = r),
        (this.state = o),
        (this.type = E1.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  K5 = class extends ct {
    constructor(t, e, r, o) {
      super(t, e),
        (this.urlAfterRedirects = r),
        (this.state = o),
        (this.type = E1.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Q5 = class extends ct {
    constructor(t, e, r, o, s) {
      super(t, e),
        (this.urlAfterRedirects = r),
        (this.state = o),
        (this.shouldActivate = s),
        (this.type = E1.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Y5 = class extends ct {
    constructor(t, e, r, o) {
      super(t, e),
        (this.urlAfterRedirects = r),
        (this.state = o),
        (this.type = E1.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  J5 = class extends ct {
    constructor(t, e, r, o) {
      super(t, e),
        (this.urlAfterRedirects = r),
        (this.state = o),
        (this.type = E1.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  X5 = class {
    constructor(t) {
      (this.route = t), (this.type = E1.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  ts = class {
    constructor(t) {
      (this.route = t), (this.type = E1.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  es = class {
    constructor(t) {
      (this.snapshot = t), (this.type = E1.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  ns = class {
    constructor(t) {
      (this.snapshot = t), (this.type = E1.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  rs = class {
    constructor(t) {
      (this.snapshot = t), (this.type = E1.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  os = class {
    constructor(t) {
      (this.snapshot = t), (this.type = E1.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Hr = class {
    constructor(t, e, r) {
      (this.routerEvent = t),
        (this.position = e),
        (this.anchor = r),
        (this.type = E1.Scroll);
    }
    toString() {
      let t = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
      return `Scroll(anchor: '${this.anchor}', position: '${t}')`;
    }
  },
  E0 = class {},
  I0 = class {
    constructor(t) {
      this.url = t;
    }
  };
var ss = class {
    constructor() {
      (this.outlet = null),
        (this.route = null),
        (this.injector = null),
        (this.children = new F0()),
        (this.attachRef = null);
    }
  },
  F0 = (() => {
    let t = class t {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(r, o) {
        let s = this.getOrCreateContext(r);
        (s.outlet = o), this.contexts.set(r, s);
      }
      onChildOutletDestroyed(r) {
        let o = this.getContext(r);
        o && ((o.outlet = null), (o.attachRef = null));
      }
      onOutletDeactivated() {
        let r = this.contexts;
        return (this.contexts = new Map()), r;
      }
      onOutletReAttached(r) {
        this.contexts = r;
      }
      getOrCreateContext(r) {
        let o = this.getContext(r);
        return o || ((o = new ss()), this.contexts.set(r, o)), o;
      }
      getContext(r) {
        return this.contexts.get(r) || null;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  Lr = class {
    constructor(t) {
      this._root = t;
    }
    get root() {
      return this._root.value;
    }
    parent(t) {
      let e = this.pathFromRoot(t);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(t) {
      let e = is(t, this._root);
      return e ? e.children.map((r) => r.value) : [];
    }
    firstChild(t) {
      let e = is(t, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(t) {
      let e = as(t, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((o) => o.value).filter((o) => o !== t);
    }
    pathFromRoot(t) {
      return as(t, this._root).map((e) => e.value);
    }
  };
function is(n, t) {
  if (n === t.value) return t;
  for (let e of t.children) {
    let r = is(n, e);
    if (r) return r;
  }
  return null;
}
function as(n, t) {
  if (n === t.value) return [t];
  for (let e of t.children) {
    let r = as(n, e);
    if (r.length) return r.unshift(t), r;
  }
  return [];
}
var et = class {
  constructor(t, e) {
    (this.value = t), (this.children = e);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function s2(n) {
  let t = {};
  return n && n.children.forEach((e) => (t[e.value.outlet] = e)), t;
}
var Ar = class extends Lr {
  constructor(t, e) {
    super(t), (this.snapshot = e), ws(this, t);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function G4(n) {
  let t = C9(n),
    e = new D1([new Le("", {})]),
    r = new D1({}),
    o = new D1({}),
    s = new D1({}),
    a = new D1(""),
    l = new jt(e, r, s, a, o, K, n, t.root);
  return (l.snapshot = t.root), new Ar(new et(l, []), t);
}
function C9(n) {
  let t = {},
    e = {},
    r = {},
    o = "",
    s = new T0([], t, r, o, e, K, n, null, {});
  return new br("", new et(s, []));
}
var jt = class {
  constructor(t, e, r, o, s, a, l, v) {
    (this.urlSubject = t),
      (this.paramsSubject = e),
      (this.queryParamsSubject = r),
      (this.fragmentSubject = o),
      (this.dataSubject = s),
      (this.outlet = a),
      (this.component = l),
      (this._futureSnapshot = v),
      (this.title = this.dataSubject?.pipe(n1((d) => d[O0])) ?? O(void 0)),
      (this.url = t),
      (this.params = e),
      (this.queryParams = r),
      (this.fragment = o),
      (this.data = s);
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return (
      (this._paramMap ??= this.params.pipe(n1((t) => l2(t)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(n1((t) => l2(t)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function ms(n, t, e = "emptyOnly") {
  let r,
    { routeConfig: o } = n;
  return (
    t !== null &&
    (e === "always" ||
      o?.path === "" ||
      (!t.component && !t.routeConfig?.loadComponent))
      ? (r = {
          params: B(B({}, t.params), n.params),
          data: B(B({}, t.data), n.data),
          resolve: B(B(B(B({}, n.data), t.data), o?.data), n._resolvedData),
        })
      : (r = {
          params: B({}, n.params),
          data: B({}, n.data),
          resolve: B(B({}, n.data), n._resolvedData ?? {}),
        }),
    o && K4(o) && (r.resolve[O0] = o.title),
    r
  );
}
var T0 = class {
    get title() {
      return this.data?.[O0];
    }
    constructor(t, e, r, o, s, a, l, v, d) {
      (this.url = t),
        (this.params = e),
        (this.queryParams = r),
        (this.fragment = o),
        (this.data = s),
        (this.outlet = a),
        (this.component = l),
        (this.routeConfig = v),
        (this._resolve = d);
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (this._paramMap ??= l2(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= l2(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let t = this.url.map((r) => r.toString()).join("/"),
        e = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${t}', path:'${e}')`;
    }
  },
  br = class extends Lr {
    constructor(t, e) {
      super(e), (this.url = t), ws(this, e);
    }
    toString() {
      return W4(this._root);
    }
  };
function ws(n, t) {
  (t.value._routerState = n), t.children.forEach((e) => ws(n, e));
}
function W4(n) {
  let t = n.children.length > 0 ? ` { ${n.children.map(W4).join(", ")} } ` : "";
  return `${n.value}${t}`;
}
function Z5(n) {
  if (n.snapshot) {
    let t = n.snapshot,
      e = n._futureSnapshot;
    (n.snapshot = e),
      Ct(t.queryParams, e.queryParams) ||
        n.queryParamsSubject.next(e.queryParams),
      t.fragment !== e.fragment && n.fragmentSubject.next(e.fragment),
      Ct(t.params, e.params) || n.paramsSubject.next(e.params),
      Y6(t.url, e.url) || n.urlSubject.next(e.url),
      Ct(t.data, e.data) || n.dataSubject.next(e.data);
  } else
    (n.snapshot = n._futureSnapshot),
      n.dataSubject.next(n._futureSnapshot.data);
}
function ls(n, t) {
  let e = Ct(n.params, t.params) && e9(n.url, t.url),
    r = !n.parent != !t.parent;
  return e && !r && (!n.parent || ls(n.parent, t.parent));
}
function K4(n) {
  return typeof n.title == "string" || n.title === null;
}
var Z0 = (() => {
    let t = class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = K),
          (this.activateEvents = new L1()),
          (this.deactivateEvents = new L1()),
          (this.attachEvents = new L1()),
          (this.detachEvents = new L1()),
          (this.parentContexts = T(F0)),
          (this.location = T(Fc)),
          (this.changeDetector = T(Ft)),
          (this.environmentInjector = T(Je)),
          (this.inputBinder = T(Tr, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(r) {
        if (r.name) {
          let { firstChange: o, previousValue: s } = r.name;
          if (o) return;
          this.isTrackedInParentContexts(s) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(s)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(r) {
        return this.parentContexts.getContext(r)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          (this.parentContexts.onChildOutletCreated(this.name, this),
          this.activated)
        )
          return;
        let r = this.parentContexts.getContext(this.name);
        r?.route &&
          (r.attachRef
            ? this.attach(r.attachRef, r.route)
            : this.activateWith(r.route, r.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new p1(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new p1(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new p1(4012, !1);
        this.location.detach();
        let r = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(r.instance),
          r
        );
      }
      attach(r, o) {
        (this.activated = r),
          (this._activatedRoute = o),
          this.location.insert(r.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(r.instance);
      }
      deactivate() {
        if (this.activated) {
          let r = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(r);
        }
      }
      activateWith(r, o) {
        if (this.isActivated) throw new p1(4013, !1);
        this._activatedRoute = r;
        let s = this.location,
          l = r.snapshot.component,
          v = this.parentContexts.getOrCreateContext(this.name).children,
          d = new cs(r, v, s.injector);
        (this.activated = s.createComponent(l, {
          index: s.length,
          injector: d,
          environmentInjector: o ?? this.environmentInjector,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵdir = pt({
        type: t,
        selectors: [["router-outlet"]],
        inputs: { name: "name" },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        standalone: !0,
        features: [Xe],
      }));
    let n = t;
    return n;
  })(),
  cs = class n {
    __ngOutletInjector(t) {
      return new n(this.route, this.childContexts, t);
    }
    constructor(t, e, r) {
      (this.route = t), (this.childContexts = e), (this.parent = r);
    }
    get(t, e) {
      return t === jt
        ? this.route
        : t === F0
        ? this.childContexts
        : this.parent.get(t, e);
    }
  },
  Tr = new Y(""),
  L4 = (() => {
    let t = class t {
      constructor() {
        this.outletDataSubscriptions = new Map();
      }
      bindActivatedRouteToOutletComponent(r) {
        this.unsubscribeFromRouteData(r), this.subscribeToRouteData(r);
      }
      unsubscribeFromRouteData(r) {
        this.outletDataSubscriptions.get(r)?.unsubscribe(),
          this.outletDataSubscriptions.delete(r);
      }
      subscribeToRouteData(r) {
        let { activatedRoute: o } = r,
          s = Qe([o.queryParams, o.params, o.data])
            .pipe(
              it(
                ([a, l, v], d) => (
                  (v = B(B(B({}, a), l), v)),
                  d === 0 ? O(v) : Promise.resolve(v)
                )
              )
            )
            .subscribe((a) => {
              if (
                !r.isActivated ||
                !r.activatedComponentRef ||
                r.activatedRoute !== o ||
                o.component === null
              ) {
                this.unsubscribeFromRouteData(r);
                return;
              }
              let l = qc(o.component);
              if (!l) {
                this.unsubscribeFromRouteData(r);
                return;
              }
              for (let { templateName: v } of l.inputs)
                r.activatedComponentRef.setInput(v, a[v]);
            });
        this.outletDataSubscriptions.set(r, s);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function V9(n, t, e) {
  let r = D0(n, t._root, e ? e._root : void 0);
  return new Ar(r, t);
}
function D0(n, t, e) {
  if (e && n.shouldReuseRoute(t.value, e.value.snapshot)) {
    let r = e.value;
    r._futureSnapshot = t.value;
    let o = y9(n, t, e);
    return new et(r, o);
  } else {
    if (n.shouldAttach(t.value)) {
      let s = n.retrieve(t.value);
      if (s !== null) {
        let a = s.route;
        return (
          (a.value._futureSnapshot = t.value),
          (a.children = t.children.map((l) => D0(n, l))),
          a
        );
      }
    }
    let r = _9(t.value),
      o = t.children.map((s) => D0(n, s));
    return new et(r, o);
  }
}
function y9(n, t, e) {
  return t.children.map((r) => {
    for (let o of e.children)
      if (n.shouldReuseRoute(r.value, o.value.snapshot)) return D0(n, r, o);
    return D0(n, r);
  });
}
function _9(n) {
  return new jt(
    new D1(n.url),
    new D1(n.params),
    new D1(n.queryParams),
    new D1(n.fragment),
    new D1(n.data),
    n.outlet,
    n.component,
    n
  );
}
var Q4 = "ngNavigationCancelingError";
function Y4(n, t) {
  let { redirectTo: e, navigationBehaviorOptions: r } = c2(t)
      ? { redirectTo: t, navigationBehaviorOptions: void 0 }
      : t,
    o = J4(!1, nt.Redirect);
  return (o.url = e), (o.navigationBehaviorOptions = r), o;
}
function J4(n, t) {
  let e = new Error(`NavigationCancelingError: ${n || ""}`);
  return (e[Q4] = !0), (e.cancellationCode = t), e;
}
function H9(n) {
  return X4(n) && c2(n.url);
}
function X4(n) {
  return !!n && n[Q4];
}
var L9 = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵcmp = l1({
      type: t,
      selectors: [["ng-component"]],
      standalone: !0,
      features: [h1],
      decls: 1,
      vars: 0,
      template: function (o, s) {
        o & 1 && S1(0, "router-outlet");
      },
      dependencies: [Z0],
      encapsulation: 2,
    }));
  let n = t;
  return n;
})();
function A9(n, t) {
  return (
    n.providers &&
      !n._injector &&
      (n._injector = y5(n.providers, t, `Route: ${n.path}`)),
    n._injector ?? t
  );
}
function fs(n) {
  let t = n.children && n.children.map(fs),
    e = t ? i1(B({}, n), { children: t }) : B({}, n);
  return (
    !e.component &&
      !e.loadComponent &&
      (t || e.loadChildren) &&
      e.outlet &&
      e.outlet !== K &&
      (e.component = L9),
    e
  );
}
function Vt(n) {
  return n.outlet || K;
}
function b9(n, t) {
  let e = n.filter((r) => Vt(r) === t);
  return e.push(...n.filter((r) => Vt(r) !== t)), e;
}
function j0(n) {
  if (!n) return null;
  if (n.routeConfig?._injector) return n.routeConfig._injector;
  for (let t = n.parent; t; t = t.parent) {
    let e = t.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var B9 = (n, t, e, r) =>
    n1(
      (o) => (
        new hs(t, o.targetRouterState, o.currentRouterState, e, r).activate(n),
        o
      )
    ),
  hs = class {
    constructor(t, e, r, o, s) {
      (this.routeReuseStrategy = t),
        (this.futureState = e),
        (this.currState = r),
        (this.forwardEvent = o),
        (this.inputBindingEnabled = s);
    }
    activate(t) {
      let e = this.futureState._root,
        r = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, r, t),
        Z5(this.futureState.root),
        this.activateChildRoutes(e, r, t);
    }
    deactivateChildRoutes(t, e, r) {
      let o = s2(e);
      t.children.forEach((s) => {
        let a = s.value.outlet;
        this.deactivateRoutes(s, o[a], r), delete o[a];
      }),
        Object.values(o).forEach((s) => {
          this.deactivateRouteAndItsChildren(s, r);
        });
    }
    deactivateRoutes(t, e, r) {
      let o = t.value,
        s = e ? e.value : null;
      if (o === s)
        if (o.component) {
          let a = r.getContext(o.outlet);
          a && this.deactivateChildRoutes(t, e, a.children);
        } else this.deactivateChildRoutes(t, e, r);
      else s && this.deactivateRouteAndItsChildren(e, r);
    }
    deactivateRouteAndItsChildren(t, e) {
      t.value.component &&
      this.routeReuseStrategy.shouldDetach(t.value.snapshot)
        ? this.detachAndStoreRouteSubtree(t, e)
        : this.deactivateRouteAndOutlet(t, e);
    }
    detachAndStoreRouteSubtree(t, e) {
      let r = e.getContext(t.value.outlet),
        o = r && t.value.component ? r.children : e,
        s = s2(t);
      for (let a of Object.values(s)) this.deactivateRouteAndItsChildren(a, o);
      if (r && r.outlet) {
        let a = r.outlet.detach(),
          l = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(t.value.snapshot, {
          componentRef: a,
          route: t,
          contexts: l,
        });
      }
    }
    deactivateRouteAndOutlet(t, e) {
      let r = e.getContext(t.value.outlet),
        o = r && t.value.component ? r.children : e,
        s = s2(t);
      for (let a of Object.values(s)) this.deactivateRouteAndItsChildren(a, o);
      r &&
        (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()),
        (r.attachRef = null),
        (r.route = null));
    }
    activateChildRoutes(t, e, r) {
      let o = s2(e);
      t.children.forEach((s) => {
        this.activateRoutes(s, o[s.value.outlet], r),
          this.forwardEvent(new os(s.value.snapshot));
      }),
        t.children.length && this.forwardEvent(new ns(t.value.snapshot));
    }
    activateRoutes(t, e, r) {
      let o = t.value,
        s = e ? e.value : null;
      if ((Z5(o), o === s))
        if (o.component) {
          let a = r.getOrCreateContext(o.outlet);
          this.activateChildRoutes(t, e, a.children);
        } else this.activateChildRoutes(t, e, r);
      else if (o.component) {
        let a = r.getOrCreateContext(o.outlet);
        if (this.routeReuseStrategy.shouldAttach(o.snapshot)) {
          let l = this.routeReuseStrategy.retrieve(o.snapshot);
          this.routeReuseStrategy.store(o.snapshot, null),
            a.children.onOutletReAttached(l.contexts),
            (a.attachRef = l.componentRef),
            (a.route = l.route.value),
            a.outlet && a.outlet.attach(l.componentRef, l.route.value),
            Z5(l.route.value),
            this.activateChildRoutes(t, null, a.children);
        } else {
          let l = j0(o.snapshot);
          (a.attachRef = null),
            (a.route = o),
            (a.injector = l),
            a.outlet && a.outlet.activateWith(o, a.injector),
            this.activateChildRoutes(t, null, a.children);
        }
      } else this.activateChildRoutes(t, null, r);
    }
  },
  Br = class {
    constructor(t) {
      (this.path = t), (this.route = this.path[this.path.length - 1]);
    }
  },
  a2 = class {
    constructor(t, e) {
      (this.component = t), (this.route = e);
    }
  };
function S9(n, t, e) {
  let r = n._root,
    o = t ? t._root : null;
  return _0(r, o, e, [r.value]);
}
function k9(n) {
  let t = n.routeConfig ? n.routeConfig.canActivateChild : null;
  return !t || t.length === 0 ? null : { node: n, guards: t };
}
function d2(n, t) {
  let e = Symbol(),
    r = t.get(n, e);
  return r === e ? (typeof n == "function" && !Dc(n) ? n : t.get(n)) : r;
}
function _0(
  n,
  t,
  e,
  r,
  o = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let s = s2(t);
  return (
    n.children.forEach((a) => {
      E9(a, s[a.value.outlet], e, r.concat([a.value]), o),
        delete s[a.value.outlet];
    }),
    Object.entries(s).forEach(([a, l]) => b0(l, e.getContext(a), o)),
    o
  );
}
function E9(
  n,
  t,
  e,
  r,
  o = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let s = n.value,
    a = t ? t.value : null,
    l = e ? e.getContext(n.value.outlet) : null;
  if (a && s.routeConfig === a.routeConfig) {
    let v = I9(a, s, s.routeConfig.runGuardsAndResolvers);
    v
      ? o.canActivateChecks.push(new Br(r))
      : ((s.data = a.data), (s._resolvedData = a._resolvedData)),
      s.component ? _0(n, t, l ? l.children : null, r, o) : _0(n, t, e, r, o),
      v &&
        l &&
        l.outlet &&
        l.outlet.isActivated &&
        o.canDeactivateChecks.push(new a2(l.outlet.component, a));
  } else
    a && b0(t, l, o),
      o.canActivateChecks.push(new Br(r)),
      s.component
        ? _0(n, null, l ? l.children : null, r, o)
        : _0(n, null, e, r, o);
  return o;
}
function I9(n, t, e) {
  if (typeof e == "function") return e(n, t);
  switch (e) {
    case "pathParamsChange":
      return !Ae(n.url, t.url);
    case "pathParamsOrQueryParamsChange":
      return !Ae(n.url, t.url) || !Ct(n.queryParams, t.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !ls(n, t) || !Ct(n.queryParams, t.queryParams);
    case "paramsChange":
    default:
      return !ls(n, t);
  }
}
function b0(n, t, e) {
  let r = s2(n),
    o = n.value;
  Object.entries(r).forEach(([s, a]) => {
    o.component
      ? t
        ? b0(a, t.children.getContext(s), e)
        : b0(a, null, e)
      : b0(a, t, e);
  }),
    o.component
      ? t && t.outlet && t.outlet.isActivated
        ? e.canDeactivateChecks.push(new a2(t.outlet.component, o))
        : e.canDeactivateChecks.push(new a2(null, o))
      : e.canDeactivateChecks.push(new a2(null, o));
}
function U0(n) {
  return typeof n == "function";
}
function T9(n) {
  return typeof n == "boolean";
}
function D9(n) {
  return n && U0(n.canLoad);
}
function P9(n) {
  return n && U0(n.canActivate);
}
function R9(n) {
  return n && U0(n.canActivateChild);
}
function O9(n) {
  return n && U0(n.canDeactivate);
}
function N9(n) {
  return n && U0(n.canMatch);
}
function t3(n) {
  return n instanceof Ac || n?.name === "EmptyError";
}
var fr = Symbol("INITIAL_VALUE");
function v2() {
  return it((n) =>
    Qe(n.map((t) => t.pipe(oe(1), Kn(fr)))).pipe(
      n1((t) => {
        for (let e of t)
          if (e !== !0) {
            if (e === fr) return fr;
            if (e === !1 || e instanceof le) return e;
          }
        return !0;
      }),
      re((t) => t !== fr),
      oe(1)
    )
  );
}
function F9(n, t) {
  return tt((e) => {
    let {
      targetSnapshot: r,
      currentSnapshot: o,
      guards: { canActivateChecks: s, canDeactivateChecks: a },
    } = e;
    return a.length === 0 && s.length === 0
      ? O(i1(B({}, e), { guardsResult: !0 }))
      : Z9(a, r, o, n).pipe(
          tt((l) => (l && T9(l) ? j9(r, s, n, t) : O(l))),
          n1((l) => i1(B({}, e), { guardsResult: l }))
        );
  });
}
function Z9(n, t, e, r) {
  return Z1(n).pipe(
    tt((o) => W9(o.component, o.route, e, t, r)),
    se((o) => o !== !0, !0)
  );
}
function j9(n, t, e, r) {
  return Z1(t).pipe(
    ye((o) =>
      Gn(
        $9(o.route.parent, r),
        U9(o.route, r),
        G9(n, o.path, e),
        q9(n, o.route, e)
      )
    ),
    se((o) => o !== !0, !0)
  );
}
function U9(n, t) {
  return n !== null && t && t(new rs(n)), O(!0);
}
function $9(n, t) {
  return n !== null && t && t(new es(n)), O(!0);
}
function q9(n, t, e) {
  let r = t.routeConfig ? t.routeConfig.canActivate : null;
  if (!r || r.length === 0) return O(!0);
  let o = r.map((s) =>
    m5(() => {
      let a = j0(t) ?? e,
        l = d2(s, a),
        v = P9(l) ? l.canActivate(t, n) : mt(a, () => l(t, n));
      return ve(v).pipe(se());
    })
  );
  return O(o).pipe(v2());
}
function G9(n, t, e) {
  let r = t[t.length - 1],
    s = t
      .slice(0, t.length - 1)
      .reverse()
      .map((a) => k9(a))
      .filter((a) => a !== null)
      .map((a) =>
        m5(() => {
          let l = a.guards.map((v) => {
            let d = j0(a.node) ?? e,
              g = d2(v, d),
              f = R9(g) ? g.canActivateChild(r, n) : mt(d, () => g(r, n));
            return ve(f).pipe(se());
          });
          return O(l).pipe(v2());
        })
      );
  return O(s).pipe(v2());
}
function W9(n, t, e, r, o) {
  let s = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
  if (!s || s.length === 0) return O(!0);
  let a = s.map((l) => {
    let v = j0(t) ?? o,
      d = d2(l, v),
      g = O9(d) ? d.canDeactivate(n, t, e, r) : mt(v, () => d(n, t, e, r));
    return ve(g).pipe(se());
  });
  return O(a).pipe(v2());
}
function K9(n, t, e, r) {
  let o = t.canLoad;
  if (o === void 0 || o.length === 0) return O(!0);
  let s = o.map((a) => {
    let l = d2(a, n),
      v = D9(l) ? l.canLoad(t, e) : mt(n, () => l(t, e));
    return ve(v);
  });
  return O(s).pipe(v2(), e3(r));
}
function e3(n) {
  return Lc(
    B1((t) => {
      if (c2(t)) throw Y4(n, t);
    }),
    n1((t) => t === !0)
  );
}
function Q9(n, t, e, r) {
  let o = t.canMatch;
  if (!o || o.length === 0) return O(!0);
  let s = o.map((a) => {
    let l = d2(a, n),
      v = N9(l) ? l.canMatch(t, e) : mt(n, () => l(t, e));
    return ve(v);
  });
  return O(s).pipe(v2(), e3(r));
}
var P0 = class {
    constructor(t) {
      this.segmentGroup = t || null;
    }
  },
  Sr = class extends Error {
    constructor(t) {
      super(), (this.urlTree = t);
    }
  };
function o2(n) {
  return c0(new P0(n));
}
function Y9(n) {
  return c0(new p1(4e3, !1));
}
function J9(n) {
  return c0(J4(!1, nt.GuardRejected));
}
var vs = class {
    constructor(t, e) {
      (this.urlSerializer = t), (this.urlTree = e);
    }
    lineralizeSegments(t, e) {
      let r = [],
        o = e.root;
      for (;;) {
        if (((r = r.concat(o.segments)), o.numberOfChildren === 0)) return O(r);
        if (o.numberOfChildren > 1 || !o.children[K]) return Y9(t.redirectTo);
        o = o.children[K];
      }
    }
    applyRedirectCommands(t, e, r) {
      let o = this.applyRedirectCreateUrlTree(
        e,
        this.urlSerializer.parse(e),
        t,
        r
      );
      if (e.startsWith("/")) throw new Sr(o);
      return o;
    }
    applyRedirectCreateUrlTree(t, e, r, o) {
      let s = this.createSegmentGroup(t, e.root, r, o);
      return new le(
        s,
        this.createQueryParams(e.queryParams, this.urlTree.queryParams),
        e.fragment
      );
    }
    createQueryParams(t, e) {
      let r = {};
      return (
        Object.entries(t).forEach(([o, s]) => {
          if (typeof s == "string" && s.startsWith(":")) {
            let l = s.substring(1);
            r[o] = e[l];
          } else r[o] = s;
        }),
        r
      );
    }
    createSegmentGroup(t, e, r, o) {
      let s = this.createSegments(t, e.segments, r, o),
        a = {};
      return (
        Object.entries(e.children).forEach(([l, v]) => {
          a[l] = this.createSegmentGroup(t, v, r, o);
        }),
        new s1(s, a)
      );
    }
    createSegments(t, e, r, o) {
      return e.map((s) =>
        s.path.startsWith(":")
          ? this.findPosParam(t, s, o)
          : this.findOrReturn(s, r)
      );
    }
    findPosParam(t, e, r) {
      let o = r[e.path.substring(1)];
      if (!o) throw new p1(4001, !1);
      return o;
    }
    findOrReturn(t, e) {
      let r = 0;
      for (let o of e) {
        if (o.path === t.path) return e.splice(r), o;
        r++;
      }
      return t;
    }
  },
  ds = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function X9(n, t, e, r, o) {
  let s = xs(n, t, e);
  return s.matched
    ? ((r = A9(t, r)),
      Q9(r, t, e, o).pipe(n1((a) => (a === !0 ? s : B({}, ds)))))
    : O(s);
}
function xs(n, t, e) {
  if (t.path === "**") return t8(e);
  if (t.path === "")
    return t.pathMatch === "full" && (n.hasChildren() || e.length > 0)
      ? B({}, ds)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: e,
          parameters: {},
          positionalParamSegments: {},
        };
  let o = (t.matcher || Q6)(e, n, t);
  if (!o) return B({}, ds);
  let s = {};
  Object.entries(o.posParams ?? {}).forEach(([l, v]) => {
    s[l] = v.path;
  });
  let a =
    o.consumed.length > 0
      ? B(B({}, s), o.consumed[o.consumed.length - 1].parameters)
      : s;
  return {
    matched: !0,
    consumedSegments: o.consumed,
    remainingSegments: e.slice(o.consumed.length),
    parameters: a,
    positionalParamSegments: o.posParams ?? {},
  };
}
function t8(n) {
  return {
    matched: !0,
    parameters: n.length > 0 ? I4(n).parameters : {},
    consumedSegments: n,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function A4(n, t, e, r) {
  return e.length > 0 && r8(n, e, r)
    ? {
        segmentGroup: new s1(t, n8(r, new s1(e, n.children))),
        slicedSegments: [],
      }
    : e.length === 0 && o8(n, e, r)
    ? {
        segmentGroup: new s1(n.segments, e8(n, e, r, n.children)),
        slicedSegments: e,
      }
    : { segmentGroup: new s1(n.segments, n.children), slicedSegments: e };
}
function e8(n, t, e, r) {
  let o = {};
  for (let s of e)
    if (Dr(n, t, s) && !r[Vt(s)]) {
      let a = new s1([], {});
      o[Vt(s)] = a;
    }
  return B(B({}, r), o);
}
function n8(n, t) {
  let e = {};
  e[K] = t;
  for (let r of n)
    if (r.path === "" && Vt(r) !== K) {
      let o = new s1([], {});
      e[Vt(r)] = o;
    }
  return e;
}
function r8(n, t, e) {
  return e.some((r) => Dr(n, t, r) && Vt(r) !== K);
}
function o8(n, t, e) {
  return e.some((r) => Dr(n, t, r));
}
function Dr(n, t, e) {
  return (n.hasChildren() || t.length > 0) && e.pathMatch === "full"
    ? !1
    : e.path === "";
}
function s8(n, t, e, r) {
  return Vt(n) !== r && (r === K || !Dr(t, e, n)) ? !1 : xs(t, n, e).matched;
}
function i8(n, t, e) {
  return t.length === 0 && !n.children[e];
}
var us = class {};
function a8(n, t, e, r, o, s, a = "emptyOnly") {
  return new gs(n, t, e, r, o, a, s).recognize();
}
var l8 = 31,
  gs = class {
    constructor(t, e, r, o, s, a, l) {
      (this.injector = t),
        (this.configLoader = e),
        (this.rootComponentType = r),
        (this.config = o),
        (this.urlTree = s),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = l),
        (this.applyRedirects = new vs(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(t) {
      return new p1(4002, `'${t.segmentGroup}'`);
    }
    recognize() {
      let t = A4(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(t).pipe(
        n1((e) => {
          let r = new T0(
              [],
              Object.freeze({}),
              Object.freeze(B({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              K,
              this.rootComponentType,
              null,
              {}
            ),
            o = new et(r, e),
            s = new br("", o),
            a = p9(r, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (s.url = this.urlSerializer.serialize(a)),
            this.inheritParamsAndData(s._root, null),
            { state: s, tree: a }
          );
        })
      );
    }
    match(t) {
      return this.processSegmentGroup(this.injector, this.config, t, K).pipe(
        Ye((r) => {
          if (r instanceof Sr)
            return (this.urlTree = r.urlTree), this.match(r.urlTree.root);
          throw r instanceof P0 ? this.noMatchError(r) : r;
        })
      );
    }
    inheritParamsAndData(t, e) {
      let r = t.value,
        o = ms(r, e, this.paramsInheritanceStrategy);
      (r.params = Object.freeze(o.params)),
        (r.data = Object.freeze(o.data)),
        t.children.forEach((s) => this.inheritParamsAndData(s, r));
    }
    processSegmentGroup(t, e, r, o) {
      return r.segments.length === 0 && r.hasChildren()
        ? this.processChildren(t, e, r)
        : this.processSegment(t, e, r, r.segments, o, !0).pipe(
            n1((s) => (s instanceof et ? [s] : []))
          );
    }
    processChildren(t, e, r) {
      let o = [];
      for (let s of Object.keys(r.children))
        s === "primary" ? o.unshift(s) : o.push(s);
      return Z1(o).pipe(
        ye((s) => {
          let a = r.children[s],
            l = b9(e, s);
          return this.processSegmentGroup(t, l, a, s);
        }),
        Ec((s, a) => (s.push(...a), s)),
        w5(null),
        kc(),
        tt((s) => {
          if (s === null) return o2(r);
          let a = n3(s);
          return c8(a), O(a);
        })
      );
    }
    processSegment(t, e, r, o, s, a) {
      return Z1(e).pipe(
        ye((l) =>
          this.processSegmentAgainstRoute(
            l._injector ?? t,
            e,
            l,
            r,
            o,
            s,
            a
          ).pipe(
            Ye((v) => {
              if (v instanceof P0) return O(null);
              throw v;
            })
          )
        ),
        se((l) => !!l),
        Ye((l) => {
          if (t3(l)) return i8(r, o, s) ? O(new us()) : o2(r);
          throw l;
        })
      );
    }
    processSegmentAgainstRoute(t, e, r, o, s, a, l) {
      return s8(r, o, s, a)
        ? r.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(t, o, r, s, a)
          : this.allowRedirects && l
          ? this.expandSegmentAgainstRouteUsingRedirect(t, o, e, r, s, a)
          : o2(o)
        : o2(o);
    }
    expandSegmentAgainstRouteUsingRedirect(t, e, r, o, s, a) {
      let {
        matched: l,
        consumedSegments: v,
        positionalParamSegments: d,
        remainingSegments: g,
      } = xs(e, o, s);
      if (!l) return o2(e);
      o.redirectTo.startsWith("/") &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > l8 && (this.allowRedirects = !1));
      let f = this.applyRedirects.applyRedirectCommands(v, o.redirectTo, d);
      return this.applyRedirects
        .lineralizeSegments(o, f)
        .pipe(tt((z) => this.processSegment(t, r, e, z.concat(g), a, !1)));
    }
    matchSegmentAgainstRoute(t, e, r, o, s) {
      let a = X9(e, r, o, t, this.urlSerializer);
      return (
        r.path === "**" && (e.children = {}),
        a.pipe(
          it((l) =>
            l.matched
              ? ((t = r._injector ?? t),
                this.getChildConfig(t, r, o).pipe(
                  it(({ routes: v }) => {
                    let d = r._loadedInjector ?? t,
                      {
                        consumedSegments: g,
                        remainingSegments: f,
                        parameters: z,
                      } = l,
                      H = new T0(
                        g,
                        z,
                        Object.freeze(B({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        v8(r),
                        Vt(r),
                        r.component ?? r._loadedComponent ?? null,
                        r,
                        d8(r)
                      ),
                      { segmentGroup: E, slicedSegments: I } = A4(e, g, f, v);
                    if (I.length === 0 && E.hasChildren())
                      return this.processChildren(d, v, E).pipe(
                        n1((F) => (F === null ? null : new et(H, F)))
                      );
                    if (v.length === 0 && I.length === 0)
                      return O(new et(H, []));
                    let S = Vt(r) === s;
                    return this.processSegment(d, v, E, I, S ? K : s, !0).pipe(
                      n1((F) => new et(H, F instanceof et ? [F] : []))
                    );
                  })
                ))
              : o2(e)
          )
        )
      );
    }
    getChildConfig(t, e, r) {
      return e.children
        ? O({ routes: e.children, injector: t })
        : e.loadChildren
        ? e._loadedRoutes !== void 0
          ? O({ routes: e._loadedRoutes, injector: e._loadedInjector })
          : K9(t, e, r, this.urlSerializer).pipe(
              tt((o) =>
                o
                  ? this.configLoader.loadChildren(t, e).pipe(
                      B1((s) => {
                        (e._loadedRoutes = s.routes),
                          (e._loadedInjector = s.injector);
                      })
                    )
                  : J9(e)
              )
            )
        : O({ routes: [], injector: t });
    }
  };
function c8(n) {
  n.sort((t, e) =>
    t.value.outlet === K
      ? -1
      : e.value.outlet === K
      ? 1
      : t.value.outlet.localeCompare(e.value.outlet)
  );
}
function h8(n) {
  let t = n.value.routeConfig;
  return t && t.path === "";
}
function n3(n) {
  let t = [],
    e = new Set();
  for (let r of n) {
    if (!h8(r)) {
      t.push(r);
      continue;
    }
    let o = t.find((s) => r.value.routeConfig === s.value.routeConfig);
    o !== void 0 ? (o.children.push(...r.children), e.add(o)) : t.push(r);
  }
  for (let r of e) {
    let o = n3(r.children);
    t.push(new et(r.value, o));
  }
  return t.filter((r) => !e.has(r));
}
function v8(n) {
  return n.data || {};
}
function d8(n) {
  return n.resolve || {};
}
function u8(n, t, e, r, o, s) {
  return tt((a) =>
    a8(n, t, e, r, a.extractedUrl, o, s).pipe(
      n1(({ state: l, tree: v }) =>
        i1(B({}, a), { targetSnapshot: l, urlAfterRedirects: v })
      )
    )
  );
}
function g8(n, t) {
  return tt((e) => {
    let {
      targetSnapshot: r,
      guards: { canActivateChecks: o },
    } = e;
    if (!o.length) return O(e);
    let s = new Set(o.map((v) => v.route)),
      a = new Set();
    for (let v of s) if (!a.has(v)) for (let d of r3(v)) a.add(d);
    let l = 0;
    return Z1(a).pipe(
      ye((v) =>
        s.has(v)
          ? p8(v, r, n, t)
          : ((v.data = ms(v, v.parent, n).resolve), O(void 0))
      ),
      B1(() => l++),
      f5(1),
      tt((v) => (l === a.size ? O(e) : ne))
    );
  });
}
function r3(n) {
  let t = n.children.map((e) => r3(e)).flat();
  return [n, ...t];
}
function p8(n, t, e, r) {
  let o = n.routeConfig,
    s = n._resolve;
  return (
    o?.title !== void 0 && !K4(o) && (s[O0] = o.title),
    m8(s, n, t, r).pipe(
      n1(
        (a) => (
          (n._resolvedData = a), (n.data = ms(n, n.parent, e).resolve), null
        )
      )
    )
  );
}
function m8(n, t, e, r) {
  let o = $5(n);
  if (o.length === 0) return O({});
  let s = {};
  return Z1(o).pipe(
    tt((a) =>
      w8(n[a], t, e, r).pipe(
        se(),
        B1((l) => {
          s[a] = l;
        })
      )
    ),
    f5(1),
    Sc(s),
    Ye((a) => (t3(a) ? ne : c0(a)))
  );
}
function w8(n, t, e, r) {
  let o = j0(t) ?? r,
    s = d2(n, o),
    a = s.resolve ? s.resolve(t, e) : mt(o, () => s(t, e));
  return ve(a);
}
function j5(n) {
  return it((t) => {
    let e = n(t);
    return e ? Z1(e).pipe(n1(() => t)) : O(t);
  });
}
var o3 = (() => {
    let t = class t {
      buildTitle(r) {
        let o,
          s = r.root;
        for (; s !== void 0; )
          (o = this.getResolvedTitleForRoute(s) ?? o),
            (s = s.children.find((a) => a.outlet === K));
        return o;
      }
      getResolvedTitleForRoute(r) {
        return r.data[O0];
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: () => T(f8), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  f8 = (() => {
    let t = class t extends o3 {
      constructor(r) {
        super(), (this.title = r);
      }
      updateTitle(r) {
        let o = this.buildTitle(r);
        o !== void 0 && this.title.setTitle(o);
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(M4));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  $0 = new Y("", { providedIn: "root", factory: () => ({}) }),
  R0 = new Y(""),
  zs = (() => {
    let t = class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = T(cr));
      }
      loadComponent(r) {
        if (this.componentLoaders.get(r)) return this.componentLoaders.get(r);
        if (r._loadedComponent) return O(r._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(r);
        let o = ve(r.loadComponent()).pipe(
            n1(s3),
            B1((a) => {
              this.onLoadEndListener && this.onLoadEndListener(r),
                (r._loadedComponent = a);
            }),
            h0(() => {
              this.componentLoaders.delete(r);
            })
          ),
          s = new g5(o, () => new gt()).pipe(u5());
        return this.componentLoaders.set(r, s), s;
      }
      loadChildren(r, o) {
        if (this.childrenLoaders.get(o)) return this.childrenLoaders.get(o);
        if (o._loadedRoutes)
          return O({ routes: o._loadedRoutes, injector: o._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(o);
        let a = x8(o, this.compiler, r, this.onLoadEndListener).pipe(
            h0(() => {
              this.childrenLoaders.delete(o);
            })
          ),
          l = new g5(a, () => new gt()).pipe(u5());
        return this.childrenLoaders.set(o, l), l;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function x8(n, t, e, r) {
  return ve(n.loadChildren()).pipe(
    n1(s3),
    tt((o) =>
      o instanceof Zc || Array.isArray(o) ? O(o) : Z1(t.compileModuleAsync(o))
    ),
    n1((o) => {
      r && r(n);
      let s,
        a,
        l = !1;
      return (
        Array.isArray(o)
          ? ((a = o), (l = !0))
          : ((s = o.create(e).injector),
            (a = s.get(R0, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(fs), injector: s }
      );
    })
  );
}
function z8(n) {
  return n && typeof n == "object" && "default" in n;
}
function s3(n) {
  return z8(n) ? n.default : n;
}
var Ms = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: () => T(M8), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  M8 = (() => {
    let t = class t {
      shouldProcessUrl(r) {
        return !0;
      }
      extract(r) {
        return r;
      }
      merge(r, o) {
        return r;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  i3 = new Y(""),
  a3 = new Y("");
function C8(n, t, e) {
  let r = n.get(a3),
    o = n.get(k1);
  return n.get(A1).runOutsideAngular(() => {
    if (!o.startViewTransition || r.skipNextTransition)
      return (r.skipNextTransition = !1), new Promise((d) => setTimeout(d));
    let s,
      a = new Promise((d) => {
        s = d;
      }),
      l = o.startViewTransition(() => (s(), V8(n))),
      { onViewTransitionCreated: v } = r;
    return v && mt(n, () => v({ transition: l, from: t, to: e })), a;
  });
}
function V8(n) {
  return new Promise((t) => {
    C5(t, { injector: n });
  });
}
var Cs = (() => {
  let t = class t {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      (this.currentNavigation = null),
        (this.currentTransition = null),
        (this.lastSuccessfulNavigation = null),
        (this.events = new gt()),
        (this.transitionAbortSubject = new gt()),
        (this.configLoader = T(zs)),
        (this.environmentInjector = T(Je)),
        (this.urlSerializer = T(N0)),
        (this.rootContexts = T(F0)),
        (this.location = T(x0)),
        (this.inputBindingEnabled = T(Tr, { optional: !0 }) !== null),
        (this.titleStrategy = T(o3)),
        (this.options = T($0, { optional: !0 }) || {}),
        (this.paramsInheritanceStrategy =
          this.options.paramsInheritanceStrategy || "emptyOnly"),
        (this.urlHandlingStrategy = T(Ms)),
        (this.createViewTransition = T(i3, { optional: !0 })),
        (this.navigationId = 0),
        (this.afterPreactivation = () => O(void 0)),
        (this.rootComponentType = null);
      let r = (s) => this.events.next(new X5(s)),
        o = (s) => this.events.next(new ts(s));
      (this.configLoader.onLoadEndListener = o),
        (this.configLoader.onLoadStartListener = r);
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(r) {
      let o = ++this.navigationId;
      this.transitions?.next(
        i1(B(B({}, this.transitions.value), r), { id: o })
      );
    }
    setupNavigations(r, o, s) {
      return (
        (this.transitions = new D1({
          id: 0,
          currentUrlTree: o,
          currentRawUrl: o,
          extractedUrl: this.urlHandlingStrategy.extract(o),
          urlAfterRedirects: this.urlHandlingStrategy.extract(o),
          rawUrl: o,
          extras: {},
          resolve: null,
          reject: null,
          promise: Promise.resolve(!0),
          source: A0,
          restoredState: null,
          currentSnapshot: s.snapshot,
          targetSnapshot: null,
          currentRouterState: s,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        })),
        this.transitions.pipe(
          re((a) => a.id !== 0),
          n1((a) =>
            i1(B({}, a), {
              extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
            })
          ),
          it((a) => {
            let l = !1,
              v = !1;
            return O(a).pipe(
              it((d) => {
                if (this.navigationId > a.id)
                  return (
                    this.cancelNavigationTransition(
                      a,
                      "",
                      nt.SupersededByNewNavigation
                    ),
                    ne
                  );
                (this.currentTransition = a),
                  (this.currentNavigation = {
                    id: d.id,
                    initialUrl: d.rawUrl,
                    extractedUrl: d.extractedUrl,
                    trigger: d.source,
                    extras: d.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? i1(B({}, this.lastSuccessfulNavigation), {
                          previousNavigation: null,
                        })
                      : null,
                  });
                let g =
                    !r.navigated ||
                    this.isUpdatingInternalState() ||
                    this.isUpdatedBrowserUrl(),
                  f = d.extras.onSameUrlNavigation ?? r.onSameUrlNavigation;
                if (!g && f !== "reload") {
                  let z = "";
                  return (
                    this.events.next(
                      new he(
                        d.id,
                        this.urlSerializer.serialize(d.rawUrl),
                        z,
                        yr.IgnoredSameUrlNavigation
                      )
                    ),
                    d.resolve(null),
                    ne
                  );
                }
                if (this.urlHandlingStrategy.shouldProcessUrl(d.rawUrl))
                  return O(d).pipe(
                    it((z) => {
                      let H = this.transitions?.getValue();
                      return (
                        this.events.next(
                          new h2(
                            z.id,
                            this.urlSerializer.serialize(z.extractedUrl),
                            z.source,
                            z.restoredState
                          )
                        ),
                        H !== this.transitions?.getValue()
                          ? ne
                          : Promise.resolve(z)
                      );
                    }),
                    u8(
                      this.environmentInjector,
                      this.configLoader,
                      this.rootComponentType,
                      r.config,
                      this.urlSerializer,
                      this.paramsInheritanceStrategy
                    ),
                    B1((z) => {
                      (a.targetSnapshot = z.targetSnapshot),
                        (a.urlAfterRedirects = z.urlAfterRedirects),
                        (this.currentNavigation = i1(
                          B({}, this.currentNavigation),
                          { finalUrl: z.urlAfterRedirects }
                        ));
                      let H = new _r(
                        z.id,
                        this.urlSerializer.serialize(z.extractedUrl),
                        this.urlSerializer.serialize(z.urlAfterRedirects),
                        z.targetSnapshot
                      );
                      this.events.next(H);
                    })
                  );
                if (
                  g &&
                  this.urlHandlingStrategy.shouldProcessUrl(d.currentRawUrl)
                ) {
                  let {
                      id: z,
                      extractedUrl: H,
                      source: E,
                      restoredState: I,
                      extras: S,
                    } = d,
                    F = new h2(z, this.urlSerializer.serialize(H), E, I);
                  this.events.next(F);
                  let G = G4(this.rootComponentType).snapshot;
                  return (
                    (this.currentTransition = a =
                      i1(B({}, d), {
                        targetSnapshot: G,
                        urlAfterRedirects: H,
                        extras: i1(B({}, S), {
                          skipLocationChange: !1,
                          replaceUrl: !1,
                        }),
                      })),
                    (this.currentNavigation.finalUrl = H),
                    O(a)
                  );
                } else {
                  let z = "";
                  return (
                    this.events.next(
                      new he(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        z,
                        yr.IgnoredByUrlHandlingStrategy
                      )
                    ),
                    d.resolve(null),
                    ne
                  );
                }
              }),
              B1((d) => {
                let g = new K5(
                  d.id,
                  this.urlSerializer.serialize(d.extractedUrl),
                  this.urlSerializer.serialize(d.urlAfterRedirects),
                  d.targetSnapshot
                );
                this.events.next(g);
              }),
              n1(
                (d) => (
                  (this.currentTransition = a =
                    i1(B({}, d), {
                      guards: S9(
                        d.targetSnapshot,
                        d.currentSnapshot,
                        this.rootContexts
                      ),
                    })),
                  a
                )
              ),
              F9(this.environmentInjector, (d) => this.events.next(d)),
              B1((d) => {
                if (((a.guardsResult = d.guardsResult), c2(d.guardsResult)))
                  throw Y4(this.urlSerializer, d.guardsResult);
                let g = new Q5(
                  d.id,
                  this.urlSerializer.serialize(d.extractedUrl),
                  this.urlSerializer.serialize(d.urlAfterRedirects),
                  d.targetSnapshot,
                  !!d.guardsResult
                );
                this.events.next(g);
              }),
              re((d) =>
                d.guardsResult
                  ? !0
                  : (this.cancelNavigationTransition(d, "", nt.GuardRejected),
                    !1)
              ),
              j5((d) => {
                if (d.guards.canActivateChecks.length)
                  return O(d).pipe(
                    B1((g) => {
                      let f = new Y5(
                        g.id,
                        this.urlSerializer.serialize(g.extractedUrl),
                        this.urlSerializer.serialize(g.urlAfterRedirects),
                        g.targetSnapshot
                      );
                      this.events.next(f);
                    }),
                    it((g) => {
                      let f = !1;
                      return O(g).pipe(
                        g8(
                          this.paramsInheritanceStrategy,
                          this.environmentInjector
                        ),
                        B1({
                          next: () => (f = !0),
                          complete: () => {
                            f ||
                              this.cancelNavigationTransition(
                                g,
                                "",
                                nt.NoDataFromResolver
                              );
                          },
                        })
                      );
                    }),
                    B1((g) => {
                      let f = new J5(
                        g.id,
                        this.urlSerializer.serialize(g.extractedUrl),
                        this.urlSerializer.serialize(g.urlAfterRedirects),
                        g.targetSnapshot
                      );
                      this.events.next(f);
                    })
                  );
              }),
              j5((d) => {
                let g = (f) => {
                  let z = [];
                  f.routeConfig?.loadComponent &&
                    !f.routeConfig._loadedComponent &&
                    z.push(
                      this.configLoader.loadComponent(f.routeConfig).pipe(
                        B1((H) => {
                          f.component = H;
                        }),
                        n1(() => {})
                      )
                    );
                  for (let H of f.children) z.push(...g(H));
                  return z;
                };
                return Qe(g(d.targetSnapshot.root)).pipe(w5(null), oe(1));
              }),
              j5(() => this.afterPreactivation()),
              it(() => {
                let { currentSnapshot: d, targetSnapshot: g } = a,
                  f = this.createViewTransition?.(
                    this.environmentInjector,
                    d.root,
                    g.root
                  );
                return f ? Z1(f).pipe(n1(() => a)) : O(a);
              }),
              n1((d) => {
                let g = V9(
                  r.routeReuseStrategy,
                  d.targetSnapshot,
                  d.currentRouterState
                );
                return (
                  (this.currentTransition = a =
                    i1(B({}, d), { targetRouterState: g })),
                  (this.currentNavigation.targetRouterState = g),
                  a
                );
              }),
              B1(() => {
                this.events.next(new E0());
              }),
              B9(
                this.rootContexts,
                r.routeReuseStrategy,
                (d) => this.events.next(d),
                this.inputBindingEnabled
              ),
              oe(1),
              B1({
                next: (d) => {
                  (l = !0),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    this.events.next(
                      new Zt(
                        d.id,
                        this.urlSerializer.serialize(d.extractedUrl),
                        this.urlSerializer.serialize(d.urlAfterRedirects)
                      )
                    ),
                    this.titleStrategy?.updateTitle(
                      d.targetRouterState.snapshot
                    ),
                    d.resolve(!0);
                },
                complete: () => {
                  l = !0;
                },
              }),
              Qn(
                this.transitionAbortSubject.pipe(
                  B1((d) => {
                    throw d;
                  })
                )
              ),
              h0(() => {
                !l &&
                  !v &&
                  this.cancelNavigationTransition(
                    a,
                    "",
                    nt.SupersededByNewNavigation
                  ),
                  this.currentTransition?.id === a.id &&
                    ((this.currentNavigation = null),
                    (this.currentTransition = null));
              }),
              Ye((d) => {
                if (((v = !0), X4(d)))
                  this.events.next(
                    new ce(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      d.message,
                      d.cancellationCode
                    )
                  ),
                    H9(d) ? this.events.next(new I0(d.url)) : a.resolve(!1);
                else {
                  this.events.next(
                    new k0(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      d,
                      a.targetSnapshot ?? void 0
                    )
                  );
                  try {
                    a.resolve(r.errorHandler(d));
                  } catch (g) {
                    this.options.resolveNavigationPromiseOnError
                      ? a.resolve(!1)
                      : a.reject(g);
                  }
                }
                return ne;
              })
            );
          })
        )
      );
    }
    cancelNavigationTransition(r, o, s) {
      let a = new ce(r.id, this.urlSerializer.serialize(r.extractedUrl), o, s);
      this.events.next(a), r.resolve(!1);
    }
    isUpdatingInternalState() {
      return (
        this.currentTransition?.extractedUrl.toString() !==
        this.currentTransition?.currentUrlTree.toString()
      );
    }
    isUpdatedBrowserUrl() {
      return (
        this.urlHandlingStrategy
          .extract(this.urlSerializer.parse(this.location.path(!0)))
          .toString() !== this.currentTransition?.extractedUrl.toString() &&
        !this.currentTransition?.extras.skipLocationChange
      );
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
function y8(n) {
  return n !== A0;
}
var _8 = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: () => T(H8), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  ps = class {
    shouldDetach(t) {
      return !1;
    }
    store(t, e) {}
    shouldAttach(t) {
      return !1;
    }
    retrieve(t) {
      return null;
    }
    shouldReuseRoute(t, e) {
      return t.routeConfig === e.routeConfig;
    }
  },
  H8 = (() => {
    let t = class t extends ps {};
    (t.ɵfac = (() => {
      let r;
      return function (s) {
        return (r || (r = Jn(t)))(s || t);
      };
    })()),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  l3 = (() => {
    let t = class t {};
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: () => T(L8), providedIn: "root" }));
    let n = t;
    return n;
  })(),
  L8 = (() => {
    let t = class t extends l3 {
      constructor() {
        super(...arguments),
          (this.location = T(x0)),
          (this.urlSerializer = T(N0)),
          (this.options = T($0, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = T(Ms)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new le()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = G4(null)),
          (this.stateMemento = this.createStateMemento());
      }
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      getRouterState() {
        return this.routerState;
      }
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(r) {
        return this.location.subscribe((o) => {
          o.type === "popstate" && r(o.url, o.state);
        });
      }
      handleRouterEvent(r, o) {
        if (r instanceof h2) this.stateMemento = this.createStateMemento();
        else if (r instanceof he) this.rawUrlTree = o.initialUrl;
        else if (r instanceof _r) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !o.extras.skipLocationChange
          ) {
            let s = this.urlHandlingStrategy.merge(o.finalUrl, o.initialUrl);
            this.setBrowserUrl(s, o);
          }
        } else
          r instanceof E0
            ? ((this.currentUrlTree = o.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                o.finalUrl,
                o.initialUrl
              )),
              (this.routerState = o.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                (o.extras.skipLocationChange ||
                  this.setBrowserUrl(this.rawUrlTree, o)))
            : r instanceof ce &&
              (r.code === nt.GuardRejected || r.code === nt.NoDataFromResolver)
            ? this.restoreHistory(o)
            : r instanceof k0
            ? this.restoreHistory(o, !0)
            : r instanceof Zt &&
              ((this.lastSuccessfulId = r.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(r, o) {
        let s = this.urlSerializer.serialize(r);
        if (this.location.isCurrentPathEqualTo(s) || o.extras.replaceUrl) {
          let a = this.browserPageId,
            l = B(B({}, o.extras.state), this.generateNgRouterState(o.id, a));
          this.location.replaceState(s, "", l);
        } else {
          let a = B(
            B({}, o.extras.state),
            this.generateNgRouterState(o.id, this.browserPageId + 1)
          );
          this.location.go(s, "", a);
        }
      }
      restoreHistory(r, o = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let s = this.browserPageId,
            a = this.currentPageId - s;
          a !== 0
            ? this.location.historyGo(a)
            : this.currentUrlTree === r.finalUrl &&
              a === 0 &&
              (this.resetState(r), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (o && this.resetState(r), this.resetUrlToCurrentUrlTree());
      }
      resetState(r) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            r.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(r, o) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: r, ɵrouterPageId: o }
          : { navigationId: r };
      }
    };
    (t.ɵfac = (() => {
      let r;
      return function (s) {
        return (r || (r = Jn(t)))(s || t);
      };
    })()),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  H0 = (function (n) {
    return (
      (n[(n.COMPLETE = 0)] = "COMPLETE"),
      (n[(n.FAILED = 1)] = "FAILED"),
      (n[(n.REDIRECTING = 2)] = "REDIRECTING"),
      n
    );
  })(H0 || {});
function c3(n, t) {
  n.events
    .pipe(
      re(
        (e) =>
          e instanceof Zt ||
          e instanceof ce ||
          e instanceof k0 ||
          e instanceof he
      ),
      n1((e) =>
        e instanceof Zt || e instanceof he
          ? H0.COMPLETE
          : (
              e instanceof ce
                ? e.code === nt.Redirect ||
                  e.code === nt.SupersededByNewNavigation
                : !1
            )
          ? H0.REDIRECTING
          : H0.FAILED
      ),
      re((e) => e !== H0.REDIRECTING),
      oe(1)
    )
    .subscribe(() => {
      t();
    });
}
function A8(n) {
  throw n;
}
var b8 = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  B8 = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  J1 = (() => {
    let t = class t {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      constructor() {
        (this.disposed = !1),
          (this.isNgZoneEnabled = !1),
          (this.console = T(ar)),
          (this.stateManager = T(l3)),
          (this.options = T($0, { optional: !0 }) || {}),
          (this.pendingTasks = T(_5)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = T(Cs)),
          (this.urlSerializer = T(N0)),
          (this.location = T(x0)),
          (this.urlHandlingStrategy = T(Ms)),
          (this._events = new gt()),
          (this.errorHandler = this.options.errorHandler || A8),
          (this.navigated = !1),
          (this.routeReuseStrategy = T(_8)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = T(R0, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!T(Tr, { optional: !0 })),
          (this.eventsSubscription = new Hc()),
          (this.isNgZoneEnabled = T(A1) instanceof A1 && A1.isInAngularZone()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (r) => {
                this.console.warn(r);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let r = this.navigationTransitions.events.subscribe((o) => {
          try {
            let s = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (s !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(o, a),
                o instanceof ce &&
                  o.code !== nt.Redirect &&
                  o.code !== nt.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (o instanceof Zt) this.navigated = !0;
              else if (o instanceof I0) {
                let l = this.urlHandlingStrategy.merge(o.url, s.currentRawUrl),
                  v = {
                    info: s.extras.info,
                    skipLocationChange: s.extras.skipLocationChange,
                    replaceUrl:
                      this.urlUpdateStrategy === "eager" || y8(s.source),
                  };
                this.scheduleNavigation(l, A0, null, v, {
                  resolve: s.resolve,
                  reject: s.reject,
                  promise: s.promise,
                });
              }
            }
            k8(o) && this._events.next(o);
          } catch (s) {
            this.navigationTransitions.transitionAbortSubject.next(s);
          }
        });
        this.eventsSubscription.add(r);
      }
      resetRootComponentType(r) {
        (this.routerState.root.component = r),
          (this.navigationTransitions.rootComponentType = r);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              A0,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (r, o) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(r, "popstate", o);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(r, o, s) {
        let a = { replaceUrl: !0 },
          l = s?.navigationId ? s : null;
        if (s) {
          let d = B({}, s);
          delete d.navigationId,
            delete d.ɵrouterPageId,
            Object.keys(d).length !== 0 && (a.state = d);
        }
        let v = this.parseUrl(r);
        this.scheduleNavigation(v, o, l, a);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(r) {
        (this.config = r.map(fs)), (this.navigated = !1);
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
            (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            (this.nonRouterCurrentEntryChangeSubscription = void 0)),
          (this.disposed = !0),
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(r, o = {}) {
        let {
            relativeTo: s,
            queryParams: a,
            fragment: l,
            queryParamsHandling: v,
            preserveFragment: d,
          } = o,
          g = d ? this.currentUrlTree.fragment : l,
          f = null;
        switch (v) {
          case "merge":
            f = B(B({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            f = this.currentUrlTree.queryParams;
            break;
          default:
            f = a || null;
        }
        f !== null && (f = this.removeEmptyProps(f));
        let z;
        try {
          let H = s ? s.snapshot : this.routerState.snapshot.root;
          z = j4(H);
        } catch {
          (typeof r[0] != "string" || !r[0].startsWith("/")) && (r = []),
            (z = this.currentUrlTree.root);
        }
        return U4(z, r, f, g ?? null);
      }
      navigateByUrl(r, o = { skipLocationChange: !1 }) {
        let s = c2(r) ? r : this.parseUrl(r),
          a = this.urlHandlingStrategy.merge(s, this.rawUrlTree);
        return this.scheduleNavigation(a, A0, null, o);
      }
      navigate(r, o = { skipLocationChange: !1 }) {
        return S8(r), this.navigateByUrl(this.createUrlTree(r, o), o);
      }
      serializeUrl(r) {
        return this.urlSerializer.serialize(r);
      }
      parseUrl(r) {
        try {
          return this.urlSerializer.parse(r);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(r, o) {
        let s;
        if (
          (o === !0 ? (s = B({}, b8)) : o === !1 ? (s = B({}, B8)) : (s = o),
          c2(r))
        )
          return V4(this.currentUrlTree, r, s);
        let a = this.parseUrl(r);
        return V4(this.currentUrlTree, a, s);
      }
      removeEmptyProps(r) {
        return Object.entries(r).reduce(
          (o, [s, a]) => (a != null && (o[s] = a), o),
          {}
        );
      }
      scheduleNavigation(r, o, s, a, l) {
        if (this.disposed) return Promise.resolve(!1);
        let v, d, g;
        l
          ? ((v = l.resolve), (d = l.reject), (g = l.promise))
          : (g = new Promise((z, H) => {
              (v = z), (d = H);
            }));
        let f = this.pendingTasks.add();
        return (
          c3(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(f));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: o,
            restoredState: s,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: r,
            extras: a,
            resolve: v,
            reject: d,
            promise: g,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          g.catch((z) => Promise.reject(z))
        );
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function S8(n) {
  for (let t = 0; t < n.length; t++) if (n[t] == null) throw new p1(4008, !1);
}
function k8(n) {
  return !(n instanceof E0) && !(n instanceof I0);
}
var kr = class {};
var E8 = (() => {
    let t = class t {
      constructor(r, o, s, a, l) {
        (this.router = r),
          (this.injector = s),
          (this.preloadingStrategy = a),
          (this.loader = l);
      }
      setUpPreloading() {
        this.subscription = this.router.events
          .pipe(
            re((r) => r instanceof Zt),
            ye(() => this.preload())
          )
          .subscribe(() => {});
      }
      preload() {
        return this.processRoutes(this.injector, this.router.config);
      }
      ngOnDestroy() {
        this.subscription && this.subscription.unsubscribe();
      }
      processRoutes(r, o) {
        let s = [];
        for (let a of o) {
          a.providers &&
            !a._injector &&
            (a._injector = y5(a.providers, r, `Route: ${a.path}`));
          let l = a._injector ?? r,
            v = a._loadedInjector ?? l;
          ((a.loadChildren && !a._loadedRoutes && a.canLoad === void 0) ||
            (a.loadComponent && !a._loadedComponent)) &&
            s.push(this.preloadConfig(l, a)),
            (a.children || a._loadedRoutes) &&
              s.push(this.processRoutes(v, a.children ?? a._loadedRoutes));
        }
        return Z1(s).pipe(p5());
      }
      preloadConfig(r, o) {
        return this.preloadingStrategy.preload(o, () => {
          let s;
          o.loadChildren && o.canLoad === void 0
            ? (s = this.loader.loadChildren(r, o))
            : (s = O(null));
          let a = s.pipe(
            tt((l) =>
              l === null
                ? O(void 0)
                : ((o._loadedRoutes = l.routes),
                  (o._loadedInjector = l.injector),
                  this.processRoutes(l.injector ?? r, l.routes))
            )
          );
          if (o.loadComponent && !o._loadedComponent) {
            let l = this.loader.loadComponent(o);
            return Z1([a, l]).pipe(p5());
          } else return a;
        });
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(J1), U(cr), U(Je), U(kr), U(zs));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })(),
  h3 = new Y(""),
  I8 = (() => {
    let t = class t {
      constructor(r, o, s, a, l = {}) {
        (this.urlSerializer = r),
          (this.transitions = o),
          (this.viewportScroller = s),
          (this.zone = a),
          (this.options = l),
          (this.lastId = 0),
          (this.lastSource = "imperative"),
          (this.restoredId = 0),
          (this.store = {}),
          (this.environmentInjector = T(Je)),
          (l.scrollPositionRestoration ||= "disabled"),
          (l.anchorScrolling ||= "disabled");
      }
      init() {
        this.options.scrollPositionRestoration !== "disabled" &&
          this.viewportScroller.setHistoryScrollRestoration("manual"),
          (this.routerEventsSubscription = this.createScrollEvents()),
          (this.scrollEventsSubscription = this.consumeScrollEvents());
      }
      createScrollEvents() {
        return this.transitions.events.subscribe((r) => {
          r instanceof h2
            ? ((this.store[this.lastId] =
                this.viewportScroller.getScrollPosition()),
              (this.lastSource = r.navigationTrigger),
              (this.restoredId = r.restoredState
                ? r.restoredState.navigationId
                : 0))
            : r instanceof Zt
            ? ((this.lastId = r.id),
              this.scheduleScrollEvent(
                r,
                this.urlSerializer.parse(r.urlAfterRedirects).fragment
              ))
            : r instanceof he &&
              r.code === yr.IgnoredSameUrlNavigation &&
              ((this.lastSource = void 0),
              (this.restoredId = 0),
              this.scheduleScrollEvent(
                r,
                this.urlSerializer.parse(r.url).fragment
              ));
        });
      }
      consumeScrollEvents() {
        return this.transitions.events.subscribe((r) => {
          r instanceof Hr &&
            (r.position
              ? this.options.scrollPositionRestoration === "top"
                ? this.viewportScroller.scrollToPosition([0, 0])
                : this.options.scrollPositionRestoration === "enabled" &&
                  this.viewportScroller.scrollToPosition(r.position)
              : r.anchor && this.options.anchorScrolling === "enabled"
              ? this.viewportScroller.scrollToAnchor(r.anchor)
              : this.options.scrollPositionRestoration !== "disabled" &&
                this.viewportScroller.scrollToPosition([0, 0]));
        });
      }
      scheduleScrollEvent(r, o) {
        this.zone.runOutsideAngular(() =>
          L(this, null, function* () {
            yield new Promise((s) => {
              setTimeout(() => {
                s();
              }),
                C5(
                  () => {
                    s();
                  },
                  { injector: this.environmentInjector }
                );
            }),
              this.zone.run(() => {
                this.transitions.events.next(
                  new Hr(
                    r,
                    this.lastSource === "popstate"
                      ? this.store[this.restoredId]
                      : null,
                    o
                  )
                );
              });
          })
        );
      }
      ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe(),
          this.scrollEventsSubscription?.unsubscribe();
      }
    };
    (t.ɵfac = function (o) {
      er();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })();
function v3(n, ...t) {
  return ie([
    { provide: R0, multi: !0, useValue: n },
    [],
    { provide: jt, useFactory: d3, deps: [J1] },
    { provide: w0, multi: !0, useFactory: u3 },
    t.map((e) => e.ɵproviders),
  ]);
}
function d3(n) {
  return n.routerState.root;
}
function q0(n, t) {
  return { ɵkind: n, ɵproviders: t };
}
function u3() {
  let n = T(t2);
  return (t) => {
    let e = n.get(f0);
    if (t !== e.components[0]) return;
    let r = n.get(J1),
      o = n.get(g3);
    n.get(Vs) === 1 && r.initialNavigation(),
      n.get(p3, null, x5.Optional)?.setUpPreloading(),
      n.get(h3, null, x5.Optional)?.init(),
      r.resetRootComponentType(e.componentTypes[0]),
      o.closed || (o.next(), o.complete(), o.unsubscribe());
  };
}
var g3 = new Y("", { factory: () => new gt() }),
  Vs = new Y("", { providedIn: "root", factory: () => 1 });
function T8() {
  return q0(2, [
    { provide: Vs, useValue: 0 },
    {
      provide: H5,
      multi: !0,
      deps: [t2],
      useFactory: (t) => {
        let e = t.get(Kc, Promise.resolve());
        return () =>
          e.then(
            () =>
              new Promise((r) => {
                let o = t.get(J1),
                  s = t.get(g3);
                c3(o, () => {
                  r(!0);
                }),
                  (t.get(Cs).afterPreactivation = () => (
                    r(!0), s.closed ? O(void 0) : s
                  )),
                  o.initialNavigation();
              })
          );
      },
    },
  ]);
}
function D8() {
  return q0(3, [
    {
      provide: H5,
      multi: !0,
      useFactory: () => {
        let t = T(J1);
        return () => {
          t.setUpLocationChangeListener();
        };
      },
    },
    { provide: Vs, useValue: 2 },
  ]);
}
var p3 = new Y("");
function P8(n) {
  return q0(0, [
    { provide: p3, useExisting: E8 },
    { provide: kr, useExisting: n },
  ]);
}
function R8() {
  return q0(8, [L4, { provide: Tr, useExisting: L4 }]);
}
function O8(n) {
  let t = [
    { provide: i3, useValue: C8 },
    {
      provide: a3,
      useValue: B({ skipNextTransition: !!n?.skipInitialTransition }, n),
    },
  ];
  return q0(9, t);
}
var b4 = new Y("ROUTER_FORROOT_GUARD"),
  N8 = [
    x0,
    { provide: N0, useClass: B0 },
    J1,
    F0,
    { provide: jt, useFactory: d3, deps: [J1] },
    zs,
    [],
  ],
  u2 = (() => {
    let t = class t {
      constructor(r) {}
      static forRoot(r, o) {
        return {
          ngModule: t,
          providers: [
            N8,
            [],
            { provide: R0, multi: !0, useValue: r },
            { provide: b4, useFactory: U8, deps: [[J1, new v0(), new Yn()]] },
            { provide: $0, useValue: o || {} },
            o?.useHash ? Z8() : j8(),
            F8(),
            o?.preloadingStrategy ? P8(o.preloadingStrategy).ɵproviders : [],
            o?.initialNavigation ? $8(o) : [],
            o?.bindToComponentInputs ? R8().ɵproviders : [],
            o?.enableViewTransitions ? O8().ɵproviders : [],
            q8(),
          ],
        };
      }
      static forChild(r) {
        return {
          ngModule: t,
          providers: [{ provide: R0, multi: !0, useValue: r }],
        };
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(b4, 8));
    }),
      (t.ɵmod = U1({ type: t })),
      (t.ɵinj = j1({}));
    let n = t;
    return n;
  })();
function F8() {
  return {
    provide: h3,
    useFactory: () => {
      let n = T(n4),
        t = T(A1),
        e = T($0),
        r = T(Cs),
        o = T(N0);
      return (
        e.scrollOffset && n.setOffset(e.scrollOffset), new I8(o, r, n, t, e)
      );
    },
  };
}
function Z8() {
  return { provide: A5, useClass: Yc };
}
function j8() {
  return { provide: A5, useClass: Qc };
}
function U8(n) {
  return "guarded";
}
function $8(n) {
  return [
    n.initialNavigation === "disabled" ? D8().ɵproviders : [],
    n.initialNavigation === "enabledBlocking" ? T8().ɵproviders : [],
  ];
}
var B4 = new Y("");
function q8() {
  return [
    { provide: B4, useFactory: u3 },
    { provide: w0, multi: !0, useExisting: B4 },
  ];
}
var Tw = new Y("Ng Glyph Config");
var Dw = new Y("NgGlyphsToken");
function K8(n) {
  return n == null ? "" : /^\d+$/.test(n) ? `${n}px` : n;
}
var Q8 = new Y("Ng Icon Pre Processor"),
  Y8 = new Y("Ng Icon Post Processor");
function J8() {
  return T(Q8, { optional: !0 }) ?? ((n) => n);
}
function X8() {
  return T(Y8, { optional: !0 }) ?? (() => {});
}
var td = new Y("Ng Icon Config"),
  ed = { size: "1em" };
function nd() {
  return T(td, { optional: !0 }) ?? ed;
}
var rd = new Y("Ng Icon Loader Token");
var od = new Y("Ng Icon Cache Token");
function sd() {
  return T(rd, { optional: !0 });
}
function id() {
  return T(od, { optional: !0 });
}
function g2(n) {
  return [
    {
      provide: ys,
      useFactory: (t) =>
        B(
          B(
            {},
            t?.reduce((e, r) => B(B({}, e), r), {})
          ),
          n
        ),
      deps: [[ys, new v0(), new Yn()]],
      multi: !0,
    },
  ];
}
var ys = new Y("Icons Token");
function ad() {
  return T(ys, { optional: !0 }) ?? [];
}
function ld(n) {
  return typeof n == "string" ? Promise.resolve(n) : qn(n) ? bc(n) : n;
}
function cd(n) {
  return n
    .replace(/([^a-zA-Z0-9])+(.)?/g, (t, e, r) => (r ? r.toUpperCase() : ""))
    .replace(/[^a-zA-Z\d]/g, "")
    .replace(/^([A-Z])/, (t) => t.toLowerCase());
}
var hd = new Y("Ng Icon Logger"),
  _s = class {
    log(t) {
      console.log(t);
    }
    warn(t) {
      console.warn(t);
    }
    error(t) {
      console.error(t);
    }
  };
function vd() {
  return T(hd, { optional: !0 }) ?? new _s();
}
var p2 = (() => {
  let t = class t {
    constructor() {
      (this.config = nd()),
        (this.icons = ad()),
        (this.loader = sd()),
        (this.cache = id()),
        (this.preProcessor = J8()),
        (this.postProcessor = X8()),
        (this.injector = T(t2)),
        (this.elementRef = T(at)),
        (this.logger = vd()),
        (this.size = this.config.size),
        (this.color = this.config.color);
    }
    set name(r) {
      this.setIcon(r);
    }
    set svg(r) {
      this.setSvg(r);
    }
    ngOnChanges(r) {
      r.size && this.setIconSize(),
        r.color && this.setIconColor(),
        r.strokeWidth && this.setIconStrokeWidth();
    }
    ngOnInit() {
      this.setIconStyles();
    }
    setIconColor() {
      this.elementRef.nativeElement.style.removeProperty("color"),
        this.color !== void 0 &&
          this.elementRef.nativeElement.style.setProperty("color", this.color);
    }
    setIconSize() {
      this.elementRef.nativeElement.style.removeProperty("--ng-icon__size"),
        this.size !== void 0 &&
          this.elementRef.nativeElement.style.setProperty(
            "--ng-icon__size",
            this.size.toString()
          );
    }
    setIconStrokeWidth() {
      this.elementRef.nativeElement.style.removeProperty(
        "--ng-icon__stroke-width"
      ),
        this.strokeWidth !== void 0 &&
          this.elementRef.nativeElement.style.setProperty(
            "--ng-icon__stroke-width",
            this.strokeWidth.toString()
          );
    }
    setIconStyles() {
      this.setIconColor(), this.setIconSize(), this.setIconStrokeWidth();
    }
    setSvg(r) {
      (this.elementRef.nativeElement.innerHTML = this.preProcessor(r)),
        this.postProcessor(this.elementRef.nativeElement);
    }
    setIcon(r) {
      return L(this, null, function* () {
        let o = cd(r);
        for (let s of [...this.icons].reverse())
          if (s[o]) {
            this.setSvg(s[o]);
            return;
          }
        if (this.loader) {
          let s = yield this.requestIconFromLoader(r);
          if (s !== null) {
            this.setSvg(s);
            return;
          }
        }
        this.logger.warn(
          `No icon named ${r} was found. You may need to import it using the withIcons function.`
        );
      });
    }
    requestIconFromLoader(r) {
      return new Promise((o) => {
        mt(this.injector, () =>
          L(this, null, function* () {
            if (this.cache) {
              let l = this.cache.get(r);
              if (typeof l == "string") {
                o(l);
                return;
              }
              if (l instanceof Promise) {
                let v = yield l;
                o(v);
                return;
              }
            }
            let s = ld(this.loader(r));
            this.cache?.set(r, s);
            let a = yield s;
            this.cache?.set(r, a), o(a);
          })
        );
      });
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵcmp = l1({
      type: t,
      selectors: [["ng-icon"]],
      inputs: {
        name: "name",
        svg: "svg",
        size: [zt.HasDecoratorInputTransform, "size", "size", K8],
        strokeWidth: "strokeWidth",
        color: "color",
      },
      standalone: !0,
      features: [e2, Xe, h1],
      decls: 0,
      vars: 0,
      template: function (o, s) {},
      styles: [
        "[_nghost-%COMP%]{display:inline-block;width:var(--ng-icon__size, 1em);height:var(--ng-icon__size, 1em);line-height:initial;vertical-align:initial;overflow:hidden}[_nghost-%COMP%]     svg{width:inherit;height:inherit;vertical-align:inherit}",
      ],
      changeDetection: 0,
    }));
  let n = t;
  return n;
})();
var m3 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5c0-.39-.15-.74-.39-1.01c-.23-.26-.38-.61-.38-.99c0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5c0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9S8 9.67 8 10.5S7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"></path></svg>';
var w3 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>';
var f3 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54l-1.96-2.36L6.5 17h11l-3.54-4.71z"></path></svg>';
var x3 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></svg>';
var z3 =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19L21 7l-1.4-1.4L9 16.2z"></path></svg>';
function dd(n, t) {
  if (n & 1) {
    let e = wt();
    j(0, "ng-icon", 1),
      c1("click", function (o) {
        let s = Q1(e).$implicit,
          a = x1();
        return Y1(a.handleNoteAction(o, s.type));
      }),
      $();
  }
  if (n & 2) {
    let e = t.$implicit;
    V1("name", e.svg)("title", e.type);
  }
}
var M3 = (() => {
  class n {
    noteId = null;
    noteAction = new L1();
    icons = [
      { type: "remove", svg: "matDeleteForever" },
      { type: "copy", svg: "matContentCopy" },
      { type: "color", svg: "matColorLens" },
    ];
    handleNoteAction(e, r) {
      e.preventDefault(),
        e.stopPropagation(),
        this.noteId && this.noteAction.emit({ noteId: this.noteId, type: r });
    }
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["note-bottom-actions"]],
      inputs: { noteId: "noteId" },
      outputs: { noteAction: "noteAction" },
      standalone: !0,
      features: [
        Mt(
          [],
          [
            g2({
              matDeleteForever: x3,
              matContentCopy: w3,
              matColorLens: m3,
              matCropOriginal: f3,
              matDone: z3,
            }),
          ]
        ),
        h1,
      ],
      decls: 2,
      vars: 0,
      consts: [
        [1, "note-icon", 3, "name", "title"],
        [1, "note-icon", 3, "click", "name", "title"],
      ],
      template: function (r, o) {
        r & 1 && Ot(0, dd, 1, 2, "ng-icon", 0, Rt), r & 2 && Nt(o.icons);
      },
      dependencies: [p2],
      styles: [
        ".note-icon[_ngcontent-%COMP%]{font-size:23px;transition:scale .2s;bottom:0}.note-icon[_ngcontent-%COMP%]:hover{scale:1.2;opacity:.5}",
      ],
    });
  }
  return n;
})();
var C3 = "remove",
  Rr = "update",
  V3 = "copy",
  Or = "color";
var yt = "";
var _3 = function (n) {
    let t = [],
      e = 0;
    for (let r = 0; r < n.length; r++) {
      let o = n.charCodeAt(r);
      o < 128
        ? (t[e++] = o)
        : o < 2048
        ? ((t[e++] = (o >> 6) | 192), (t[e++] = (o & 63) | 128))
        : (o & 64512) === 55296 &&
          r + 1 < n.length &&
          (n.charCodeAt(r + 1) & 64512) === 56320
        ? ((o = 65536 + ((o & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
          (t[e++] = (o >> 18) | 240),
          (t[e++] = ((o >> 12) & 63) | 128),
          (t[e++] = ((o >> 6) & 63) | 128),
          (t[e++] = (o & 63) | 128))
        : ((t[e++] = (o >> 12) | 224),
          (t[e++] = ((o >> 6) & 63) | 128),
          (t[e++] = (o & 63) | 128));
    }
    return t;
  },
  ud = function (n) {
    let t = [],
      e = 0,
      r = 0;
    for (; e < n.length; ) {
      let o = n[e++];
      if (o < 128) t[r++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        let s = n[e++];
        t[r++] = String.fromCharCode(((o & 31) << 6) | (s & 63));
      } else if (o > 239 && o < 365) {
        let s = n[e++],
          a = n[e++],
          l = n[e++],
          v =
            (((o & 7) << 18) | ((s & 63) << 12) | ((a & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (v >> 10))),
          (t[r++] = String.fromCharCode(56320 + (v & 1023)));
      } else {
        let s = n[e++],
          a = n[e++];
        t[r++] = String.fromCharCode(
          ((o & 15) << 12) | ((s & 63) << 6) | (a & 63)
        );
      }
    }
    return t.join("");
  },
  H3 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(n, t) {
      if (!Array.isArray(n))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      let e = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let o = 0; o < n.length; o += 3) {
        let s = n[o],
          a = o + 1 < n.length,
          l = a ? n[o + 1] : 0,
          v = o + 2 < n.length,
          d = v ? n[o + 2] : 0,
          g = s >> 2,
          f = ((s & 3) << 4) | (l >> 4),
          z = ((l & 15) << 2) | (d >> 6),
          H = d & 63;
        v || ((H = 64), a || (z = 64)), r.push(e[g], e[f], e[z], e[H]);
      }
      return r.join("");
    },
    encodeString(n, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(n)
        : this.encodeByteArray(_3(n), t);
    },
    decodeString(n, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(n)
        : ud(this.decodeStringToByteArray(n, t));
    },
    decodeStringToByteArray(n, t) {
      this.init_();
      let e = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let o = 0; o < n.length; ) {
        let s = e[n.charAt(o++)],
          l = o < n.length ? e[n.charAt(o)] : 0;
        ++o;
        let d = o < n.length ? e[n.charAt(o)] : 64;
        ++o;
        let f = o < n.length ? e[n.charAt(o)] : 64;
        if ((++o, s == null || l == null || d == null || f == null))
          throw new Hs();
        let z = (s << 2) | (l >> 4);
        if ((r.push(z), d !== 64)) {
          let H = ((l << 4) & 240) | (d >> 2);
          if ((r.push(H), f !== 64)) {
            let E = ((d << 6) & 192) | f;
            r.push(E);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          (this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
      }
    },
  },
  Hs = class extends Error {
    constructor() {
      super(...arguments), (this.name = "DecodeBase64StringError");
    }
  },
  gd = function (n) {
    let t = _3(n);
    return H3.encodeByteArray(t, !0);
  },
  G0 = function (n) {
    return gd(n).replace(/\./g, "");
  },
  pd = function (n) {
    try {
      return H3.decodeString(n, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
function md() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
var wd = () => md().__FIREBASE_DEFAULTS__,
  fd = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    let n = process.env.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  xd = () => {
    if (typeof document > "u") return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    let t = n && pd(n[1]);
    return t && JSON.parse(t);
  },
  Ls = () => {
    try {
      return wd() || fd() || xd();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  zd = (n) => {
    var t, e;
    return (e =
      (t = Ls()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || e === void 0
      ? void 0
      : e[n];
  },
  L3 = (n) => {
    let t = zd(n);
    if (!t) return;
    let e = t.lastIndexOf(":");
    if (e <= 0 || e + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    let r = parseInt(t.substring(e + 1), 10);
    return t[0] === "[" ? [t.substring(1, e - 1), r] : [t.substring(0, e), r];
  },
  As = () => {
    var n;
    return (n = Ls()) === null || n === void 0 ? void 0 : n.config;
  };
var Nr = class {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, e) => {
        (this.resolve = t), (this.reject = e);
      }));
  }
  wrapCallback(t) {
    return (e, r) => {
      e ? this.reject(e) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(e) : t(e, r));
    };
  }
};
function A3(n, t) {
  if (n.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  let e = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    o = n.iat || 0,
    s = n.sub || n.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  let a = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: o,
      exp: o + 3600,
      auth_time: o,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    n
  );
  return [G0(JSON.stringify(e)), G0(JSON.stringify(a)), ""].join(".");
}
function b3() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Md() {
  var n;
  let t = (n = Ls()) === null || n === void 0 ? void 0 : n.forceEnvironment;
  if (t === "node") return !0;
  if (t === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function B3() {
  return (
    !Md() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function bs() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function S3() {
  return new Promise((n, t) => {
    try {
      let e = !0,
        r = "validate-browser-context-for-indexeddb-analytics-module",
        o = self.indexedDB.open(r);
      (o.onsuccess = () => {
        o.result.close(), e || self.indexedDB.deleteDatabase(r), n(!0);
      }),
        (o.onupgradeneeded = () => {
          e = !1;
        }),
        (o.onerror = () => {
          var s;
          t(
            ((s = o.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (e) {
      t(e);
    }
  });
}
var Cd = "FirebaseError",
  Ut = class n extends Error {
    constructor(t, e, r) {
      super(e),
        (this.code = t),
        (this.customData = r),
        (this.name = Cd),
        Object.setPrototypeOf(this, n.prototype),
        Error.captureStackTrace &&
          Error.captureStackTrace(this, W0.prototype.create);
    }
  },
  W0 = class {
    constructor(t, e, r) {
      (this.service = t), (this.serviceName = e), (this.errors = r);
    }
    create(t, ...e) {
      let r = e[0] || {},
        o = `${this.service}/${t}`,
        s = this.errors[t],
        a = s ? Vd(s, r) : "Error",
        l = `${this.serviceName}: ${a} (${o}).`;
      return new Ut(o, l, r);
    }
  };
function Vd(n, t) {
  return n.replace(yd, (e, r) => {
    let o = t[r];
    return o != null ? String(o) : `<${r}?>`;
  });
}
var yd = /\{\$([^}]+)}/g;
function K0(n, t) {
  if (n === t) return !0;
  let e = Object.keys(n),
    r = Object.keys(t);
  for (let o of e) {
    if (!r.includes(o)) return !1;
    let s = n[o],
      a = t[o];
    if (y3(s) && y3(a)) {
      if (!K0(s, a)) return !1;
    } else if (s !== a) return !1;
  }
  for (let o of r) if (!e.includes(o)) return !1;
  return !0;
}
function y3(n) {
  return n !== null && typeof n == "object";
}
var Ww = 4 * 60 * 60 * 1e3;
function $t(n) {
  return n && n._delegate ? n._delegate : n;
}
var qt = class {
  constructor(t, e, r) {
    (this.name = t),
      (this.instanceFactory = e),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
};
var be = "[DEFAULT]";
var Bs = class {
  constructor(t, e) {
    (this.name = t),
      (this.container = e),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    let e = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(e)) {
      let r = new Nr();
      if (
        (this.instancesDeferred.set(e, r),
        this.isInitialized(e) || this.shouldAutoInitialize())
      )
        try {
          let o = this.getOrInitializeService({ instanceIdentifier: e });
          o && r.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(e).promise;
  }
  getImmediate(t) {
    var e;
    let r = this.normalizeInstanceIdentifier(t?.identifier),
      o = (e = t?.optional) !== null && e !== void 0 ? e : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (o) return null;
        throw s;
      }
    else {
      if (o) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (Hd(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: be });
        } catch {}
      for (let [e, r] of this.instancesDeferred.entries()) {
        let o = this.normalizeInstanceIdentifier(e);
        try {
          let s = this.getOrInitializeService({ instanceIdentifier: o });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = be) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  delete() {
    return L(this, null, function* () {
      let t = Array.from(this.instances.values());
      yield Promise.all([
        ...t.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
        ...t.filter((e) => "_delete" in e).map((e) => e._delete()),
      ]);
    });
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = be) {
    return this.instances.has(t);
  }
  getOptions(t = be) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    let { options: e = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    let o = this.getOrInitializeService({ instanceIdentifier: r, options: e });
    for (let [s, a] of this.instancesDeferred.entries()) {
      let l = this.normalizeInstanceIdentifier(s);
      r === l && a.resolve(o);
    }
    return o;
  }
  onInit(t, e) {
    var r;
    let o = this.normalizeInstanceIdentifier(e),
      s =
        (r = this.onInitCallbacks.get(o)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(t), this.onInitCallbacks.set(o, s);
    let a = this.instances.get(o);
    return (
      a && t(a, o),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, e) {
    let r = this.onInitCallbacks.get(e);
    if (r)
      for (let o of r)
        try {
          o(t, e);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: e = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: _d(t),
        options: e,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, e),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = be) {
    return this.component ? (this.component.multipleInstances ? t : be) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
};
function _d(n) {
  return n === be ? void 0 : n;
}
function Hd(n) {
  return n.instantiationMode === "EAGER";
}
var Fr = class {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    let e = this.getProvider(t.name);
    if (e.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    e.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    let e = new Bs(t, this);
    return this.providers.set(t, e), e;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
};
var Ld = [],
  X = (function (n) {
    return (
      (n[(n.DEBUG = 0)] = "DEBUG"),
      (n[(n.VERBOSE = 1)] = "VERBOSE"),
      (n[(n.INFO = 2)] = "INFO"),
      (n[(n.WARN = 3)] = "WARN"),
      (n[(n.ERROR = 4)] = "ERROR"),
      (n[(n.SILENT = 5)] = "SILENT"),
      n
    );
  })(X || {}),
  Ad = {
    debug: X.DEBUG,
    verbose: X.VERBOSE,
    info: X.INFO,
    warn: X.WARN,
    error: X.ERROR,
    silent: X.SILENT,
  },
  bd = X.INFO,
  Bd = {
    [X.DEBUG]: "log",
    [X.VERBOSE]: "log",
    [X.INFO]: "info",
    [X.WARN]: "warn",
    [X.ERROR]: "error",
  },
  Sd = (n, t, ...e) => {
    if (t < n.logLevel) return;
    let r = new Date().toISOString(),
      o = Bd[t];
    if (o) console[o](`[${r}]  ${n.name}:`, ...e);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  },
  m2 = class {
    constructor(t) {
      (this.name = t),
        (this._logLevel = bd),
        (this._logHandler = Sd),
        (this._userLogHandler = null),
        Ld.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(t) {
      if (!(t in X))
        throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
      this._logLevel = t;
    }
    setLogLevel(t) {
      this._logLevel = typeof t == "string" ? Ad[t] : t;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(t) {
      if (typeof t != "function")
        throw new TypeError(
          "Value assigned to `logHandler` must be a function"
        );
      this._logHandler = t;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(t) {
      this._userLogHandler = t;
    }
    debug(...t) {
      this._userLogHandler && this._userLogHandler(this, X.DEBUG, ...t),
        this._logHandler(this, X.DEBUG, ...t);
    }
    log(...t) {
      this._userLogHandler && this._userLogHandler(this, X.VERBOSE, ...t),
        this._logHandler(this, X.VERBOSE, ...t);
    }
    info(...t) {
      this._userLogHandler && this._userLogHandler(this, X.INFO, ...t),
        this._logHandler(this, X.INFO, ...t);
    }
    warn(...t) {
      this._userLogHandler && this._userLogHandler(this, X.WARN, ...t),
        this._logHandler(this, X.WARN, ...t);
    }
    error(...t) {
      this._userLogHandler && this._userLogHandler(this, X.ERROR, ...t),
        this._logHandler(this, X.ERROR, ...t);
    }
  };
var kd = (n, t) => t.some((e) => n instanceof e),
  k3,
  E3;
function Ed() {
  return (
    k3 ||
    (k3 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Id() {
  return (
    E3 ||
    (E3 = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
var I3 = new WeakMap(),
  ks = new WeakMap(),
  T3 = new WeakMap(),
  Ss = new WeakMap(),
  Is = new WeakMap();
function Td(n) {
  let t = new Promise((e, r) => {
    let o = () => {
        n.removeEventListener("success", s), n.removeEventListener("error", a);
      },
      s = () => {
        e(_t(n.result)), o();
      },
      a = () => {
        r(n.error), o();
      };
    n.addEventListener("success", s), n.addEventListener("error", a);
  });
  return (
    t
      .then((e) => {
        e instanceof IDBCursor && I3.set(e, n);
      })
      .catch(() => {}),
    Is.set(t, n),
    t
  );
}
function Dd(n) {
  if (ks.has(n)) return;
  let t = new Promise((e, r) => {
    let o = () => {
        n.removeEventListener("complete", s),
          n.removeEventListener("error", a),
          n.removeEventListener("abort", a);
      },
      s = () => {
        e(), o();
      },
      a = () => {
        r(n.error || new DOMException("AbortError", "AbortError")), o();
      };
    n.addEventListener("complete", s),
      n.addEventListener("error", a),
      n.addEventListener("abort", a);
  });
  ks.set(n, t);
}
var Es = {
  get(n, t, e) {
    if (n instanceof IDBTransaction) {
      if (t === "done") return ks.get(n);
      if (t === "objectStoreNames") return n.objectStoreNames || T3.get(n);
      if (t === "store")
        return e.objectStoreNames[1]
          ? void 0
          : e.objectStore(e.objectStoreNames[0]);
    }
    return _t(n[t]);
  },
  set(n, t, e) {
    return (n[t] = e), !0;
  },
  has(n, t) {
    return n instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in n;
  },
};
function D3(n) {
  Es = n(Es);
}
function Pd(n) {
  return n === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...e) {
        let r = n.call(Zr(this), t, ...e);
        return T3.set(r, t.sort ? t.sort() : [t]), _t(r);
      }
    : Id().includes(n)
    ? function (...t) {
        return n.apply(Zr(this), t), _t(I3.get(this));
      }
    : function (...t) {
        return _t(n.apply(Zr(this), t));
      };
}
function Rd(n) {
  return typeof n == "function"
    ? Pd(n)
    : (n instanceof IDBTransaction && Dd(n),
      kd(n, Ed()) ? new Proxy(n, Es) : n);
}
function _t(n) {
  if (n instanceof IDBRequest) return Td(n);
  if (Ss.has(n)) return Ss.get(n);
  let t = Rd(n);
  return t !== n && (Ss.set(n, t), Is.set(t, n)), t;
}
var Zr = (n) => Is.get(n);
function R3(n, t, { blocked: e, upgrade: r, blocking: o, terminated: s } = {}) {
  let a = indexedDB.open(n, t),
    l = _t(a);
  return (
    r &&
      a.addEventListener("upgradeneeded", (v) => {
        r(_t(a.result), v.oldVersion, v.newVersion, _t(a.transaction), v);
      }),
    e && a.addEventListener("blocked", (v) => e(v.oldVersion, v.newVersion, v)),
    l
      .then((v) => {
        s && v.addEventListener("close", () => s()),
          o &&
            v.addEventListener("versionchange", (d) =>
              o(d.oldVersion, d.newVersion, d)
            );
      })
      .catch(() => {}),
    l
  );
}
var Od = ["get", "getKey", "getAll", "getAllKeys", "count"],
  Nd = ["put", "add", "delete", "clear"],
  Ts = new Map();
function P3(n, t) {
  if (!(n instanceof IDBDatabase && !(t in n) && typeof t == "string")) return;
  if (Ts.get(t)) return Ts.get(t);
  let e = t.replace(/FromIndex$/, ""),
    r = t !== e,
    o = Nd.includes(e);
  if (
    !(e in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || Od.includes(e))
  )
    return;
  let s = function (a, ...l) {
    return L(this, null, function* () {
      let v = this.transaction(a, o ? "readwrite" : "readonly"),
        d = v.store;
      return (
        r && (d = d.index(l.shift())),
        (yield Promise.all([d[e](...l), o && v.done]))[0]
      );
    });
  };
  return Ts.set(t, s), s;
}
D3((n) =>
  i1(B({}, n), {
    get: (t, e, r) => P3(t, e) || n.get(t, e, r),
    has: (t, e) => !!P3(t, e) || n.has(t, e),
  })
);
var Ps = class {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((e) => {
        if (Fd(e)) {
          let r = e.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((e) => e)
      .join(" ");
  }
};
function Fd(n) {
  let t = n.getComponent();
  return t?.type === "VERSION";
}
var Rs = "@firebase/app",
  O3 = "0.10.8";
var Be = new m2("@firebase/app"),
  Zd = "@firebase/app-compat",
  jd = "@firebase/analytics-compat",
  Ud = "@firebase/analytics",
  $d = "@firebase/app-check-compat",
  qd = "@firebase/app-check",
  Gd = "@firebase/auth",
  Wd = "@firebase/auth-compat",
  Kd = "@firebase/database",
  Qd = "@firebase/database-compat",
  Yd = "@firebase/functions",
  Jd = "@firebase/functions-compat",
  Xd = "@firebase/installations",
  tu = "@firebase/installations-compat",
  eu = "@firebase/messaging",
  nu = "@firebase/messaging-compat",
  ru = "@firebase/performance",
  ou = "@firebase/performance-compat",
  su = "@firebase/remote-config",
  iu = "@firebase/remote-config-compat",
  au = "@firebase/storage",
  lu = "@firebase/storage-compat",
  cu = "@firebase/firestore",
  hu = "@firebase/vertexai-preview",
  vu = "@firebase/firestore-compat",
  du = "firebase",
  uu = "10.12.5";
var Os = "[DEFAULT]",
  gu = {
    [Rs]: "fire-core",
    [Zd]: "fire-core-compat",
    [Ud]: "fire-analytics",
    [jd]: "fire-analytics-compat",
    [qd]: "fire-app-check",
    [$d]: "fire-app-check-compat",
    [Gd]: "fire-auth",
    [Wd]: "fire-auth-compat",
    [Kd]: "fire-rtdb",
    [Qd]: "fire-rtdb-compat",
    [Yd]: "fire-fn",
    [Jd]: "fire-fn-compat",
    [Xd]: "fire-iid",
    [tu]: "fire-iid-compat",
    [eu]: "fire-fcm",
    [nu]: "fire-fcm-compat",
    [ru]: "fire-perf",
    [ou]: "fire-perf-compat",
    [su]: "fire-rc",
    [iu]: "fire-rc-compat",
    [au]: "fire-gcs",
    [lu]: "fire-gcs-compat",
    [cu]: "fire-fst",
    [vu]: "fire-fst-compat",
    [hu]: "fire-vertex",
    "fire-js": "fire-js",
    [du]: "fire-js-all",
  };
var jr = new Map(),
  pu = new Map(),
  Ns = new Map();
function N3(n, t) {
  try {
    n.container.addComponent(t);
  } catch (e) {
    Be.debug(
      `Component ${t.name} failed to register with FirebaseApp ${n.name}`,
      e
    );
  }
}
function Q0(n) {
  let t = n.name;
  if (Ns.has(t))
    return (
      Be.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Ns.set(t, n);
  for (let e of jr.values()) N3(e, n);
  for (let e of pu.values()) N3(e, n);
  return !0;
}
function U3(n, t) {
  let e = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return e && e.triggerHeartbeat(), n.container.getProvider(t);
}
var mu = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  de = new W0("app", "Firebase", mu);
var Fs = class {
  constructor(t, e, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, e)),
      (this._name = e.name),
      (this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new qt("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw de.create("app-deleted", { appName: this._name });
  }
};
var $3 = uu;
function Us(n, t = {}) {
  let e = n;
  typeof t != "object" && (t = { name: t });
  let r = Object.assign({ name: Os, automaticDataCollectionEnabled: !1 }, t),
    o = r.name;
  if (typeof o != "string" || !o)
    throw de.create("bad-app-name", { appName: String(o) });
  if ((e || (e = As()), !e)) throw de.create("no-options");
  let s = jr.get(o);
  if (s) {
    if (K0(e, s.options) && K0(r, s.config)) return s;
    throw de.create("duplicate-app", { appName: o });
  }
  let a = new Fr(o);
  for (let v of Ns.values()) a.addComponent(v);
  let l = new Fs(e, r, a);
  return jr.set(o, l), l;
}
function q3(n = Os) {
  let t = jr.get(n);
  if (!t && n === Os && As()) return Us();
  if (!t) throw de.create("no-app", { appName: n });
  return t;
}
function ue(n, t, e) {
  var r;
  let o = (r = gu[n]) !== null && r !== void 0 ? r : n;
  e && (o += `-${e}`);
  let s = o.match(/\s|\//),
    a = t.match(/\s|\//);
  if (s || a) {
    let l = [`Unable to register library "${o}" with version "${t}":`];
    s &&
      l.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`
      ),
      s && a && l.push("and"),
      a &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Be.warn(l.join(" "));
    return;
  }
  Q0(new qt(`${o}-version`, () => ({ library: o, version: t }), "VERSION"));
}
var wu = "firebase-heartbeat-database",
  fu = 1,
  Y0 = "firebase-heartbeat-store",
  Ds = null;
function G3() {
  return (
    Ds ||
      (Ds = R3(wu, fu, {
        upgrade: (n, t) => {
          switch (t) {
            case 0:
              try {
                n.createObjectStore(Y0);
              } catch (e) {
                console.warn(e);
              }
          }
        },
      }).catch((n) => {
        throw de.create("idb-open", { originalErrorMessage: n.message });
      })),
    Ds
  );
}
function xu(n) {
  return L(this, null, function* () {
    try {
      let e = (yield G3()).transaction(Y0),
        r = yield e.objectStore(Y0).get(W3(n));
      return yield e.done, r;
    } catch (t) {
      if (t instanceof Ut) Be.warn(t.message);
      else {
        let e = de.create("idb-get", { originalErrorMessage: t?.message });
        Be.warn(e.message);
      }
    }
  });
}
function F3(n, t) {
  return L(this, null, function* () {
    try {
      let r = (yield G3()).transaction(Y0, "readwrite");
      yield r.objectStore(Y0).put(t, W3(n)), yield r.done;
    } catch (e) {
      if (e instanceof Ut) Be.warn(e.message);
      else {
        let r = de.create("idb-set", { originalErrorMessage: e?.message });
        Be.warn(r.message);
      }
    }
  });
}
function W3(n) {
  return `${n.name}!${n.options.appId}`;
}
var zu = 1024,
  Mu = 30 * 24 * 60 * 60 * 1e3,
  Zs = class {
    constructor(t) {
      (this.container = t), (this._heartbeatsCache = null);
      let e = this.container.getProvider("app").getImmediate();
      (this._storage = new js(e)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((r) => ((this._heartbeatsCache = r), r)));
    }
    triggerHeartbeat() {
      return L(this, null, function* () {
        var t, e;
        let o = this.container
            .getProvider("platform-logger")
            .getImmediate()
            .getPlatformInfoString(),
          s = Z3();
        if (
          !(
            ((t = this._heartbeatsCache) === null || t === void 0
              ? void 0
              : t.heartbeats) == null &&
            ((this._heartbeatsCache = yield this._heartbeatsCachePromise),
            ((e = this._heartbeatsCache) === null || e === void 0
              ? void 0
              : e.heartbeats) == null)
          ) &&
          !(
            this._heartbeatsCache.lastSentHeartbeatDate === s ||
            this._heartbeatsCache.heartbeats.some((a) => a.date === s)
          )
        )
          return (
            this._heartbeatsCache.heartbeats.push({ date: s, agent: o }),
            (this._heartbeatsCache.heartbeats =
              this._heartbeatsCache.heartbeats.filter((a) => {
                let l = new Date(a.date).valueOf();
                return Date.now() - l <= Mu;
              })),
            this._storage.overwrite(this._heartbeatsCache)
          );
      });
    }
    getHeartbeatsHeader() {
      return L(this, null, function* () {
        var t;
        if (
          (this._heartbeatsCache === null &&
            (yield this._heartbeatsCachePromise),
          ((t = this._heartbeatsCache) === null || t === void 0
            ? void 0
            : t.heartbeats) == null ||
            this._heartbeatsCache.heartbeats.length === 0)
        )
          return "";
        let e = Z3(),
          { heartbeatsToSend: r, unsentEntries: o } = Cu(
            this._heartbeatsCache.heartbeats
          ),
          s = G0(JSON.stringify({ version: 2, heartbeats: r }));
        return (
          (this._heartbeatsCache.lastSentHeartbeatDate = e),
          o.length > 0
            ? ((this._heartbeatsCache.heartbeats = o),
              yield this._storage.overwrite(this._heartbeatsCache))
            : ((this._heartbeatsCache.heartbeats = []),
              this._storage.overwrite(this._heartbeatsCache)),
          s
        );
      });
    }
  };
function Z3() {
  return new Date().toISOString().substring(0, 10);
}
function Cu(n, t = zu) {
  let e = [],
    r = n.slice();
  for (let o of n) {
    let s = e.find((a) => a.agent === o.agent);
    if (s) {
      if ((s.dates.push(o.date), j3(e) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((e.push({ agent: o.agent, dates: [o.date] }), j3(e) > t)) {
      e.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: e, unsentEntries: r };
}
var js = class {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  runIndexedDBEnvironmentCheck() {
    return L(this, null, function* () {
      return bs()
        ? S3()
            .then(() => !0)
            .catch(() => !1)
        : !1;
    });
  }
  read() {
    return L(this, null, function* () {
      if (yield this._canUseIndexedDBPromise) {
        let e = yield xu(this.app);
        return e?.heartbeats ? e : { heartbeats: [] };
      } else return { heartbeats: [] };
    });
  }
  overwrite(t) {
    return L(this, null, function* () {
      var e;
      if (yield this._canUseIndexedDBPromise) {
        let o = yield this.read();
        return F3(this.app, {
          lastSentHeartbeatDate:
            (e = t.lastSentHeartbeatDate) !== null && e !== void 0
              ? e
              : o.lastSentHeartbeatDate,
          heartbeats: t.heartbeats,
        });
      } else return;
    });
  }
  add(t) {
    return L(this, null, function* () {
      var e;
      if (yield this._canUseIndexedDBPromise) {
        let o = yield this.read();
        return F3(this.app, {
          lastSentHeartbeatDate:
            (e = t.lastSentHeartbeatDate) !== null && e !== void 0
              ? e
              : o.lastSentHeartbeatDate,
          heartbeats: [...o.heartbeats, ...t.heartbeats],
        });
      } else return;
    });
  }
};
function j3(n) {
  return G0(JSON.stringify({ version: 2, heartbeats: n })).length;
}
function Vu(n) {
  Q0(new qt("platform-logger", (t) => new Ps(t), "PRIVATE")),
    Q0(new qt("heartbeat", (t) => new Zs(t), "PRIVATE")),
    ue(Rs, O3, n),
    ue(Rs, O3, "esm2017"),
    ue("fire-js", "");
}
Vu("");
var K3 =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Q3 = {};
var ge, $s;
(function () {
  var n;
  function t(C, p) {
    function w() {}
    (w.prototype = p.prototype),
      (C.D = p.prototype),
      (C.prototype = new w()),
      (C.prototype.constructor = C),
      (C.C = function (x, M, y) {
        for (
          var m = Array(arguments.length - 2), It = 2;
          It < arguments.length;
          It++
        )
          m[It - 2] = arguments[It];
        return p.prototype[M].apply(x, m);
      });
  }
  function e() {
    this.blockSize = -1;
  }
  function r() {
    (this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s();
  }
  t(r, e),
    (r.prototype.s = function () {
      (this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0);
    });
  function o(C, p, w) {
    w || (w = 0);
    var x = Array(16);
    if (typeof p == "string")
      for (var M = 0; 16 > M; ++M)
        x[M] =
          p.charCodeAt(w++) |
          (p.charCodeAt(w++) << 8) |
          (p.charCodeAt(w++) << 16) |
          (p.charCodeAt(w++) << 24);
    else
      for (M = 0; 16 > M; ++M)
        x[M] = p[w++] | (p[w++] << 8) | (p[w++] << 16) | (p[w++] << 24);
    (p = C.g[0]), (w = C.g[1]), (M = C.g[2]);
    var y = C.g[3],
      m = (p + (y ^ (w & (M ^ y))) + x[0] + 3614090360) & 4294967295;
    (p = w + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (y + (M ^ (p & (w ^ M))) + x[1] + 3905402710) & 4294967295),
      (y = p + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (M + (w ^ (y & (p ^ w))) + x[2] + 606105819) & 4294967295),
      (M = y + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (w + (p ^ (M & (y ^ p))) + x[3] + 3250441966) & 4294967295),
      (w = M + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (p + (y ^ (w & (M ^ y))) + x[4] + 4118548399) & 4294967295),
      (p = w + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (y + (M ^ (p & (w ^ M))) + x[5] + 1200080426) & 4294967295),
      (y = p + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (M + (w ^ (y & (p ^ w))) + x[6] + 2821735955) & 4294967295),
      (M = y + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (w + (p ^ (M & (y ^ p))) + x[7] + 4249261313) & 4294967295),
      (w = M + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (p + (y ^ (w & (M ^ y))) + x[8] + 1770035416) & 4294967295),
      (p = w + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (y + (M ^ (p & (w ^ M))) + x[9] + 2336552879) & 4294967295),
      (y = p + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (M + (w ^ (y & (p ^ w))) + x[10] + 4294925233) & 4294967295),
      (M = y + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (w + (p ^ (M & (y ^ p))) + x[11] + 2304563134) & 4294967295),
      (w = M + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (p + (y ^ (w & (M ^ y))) + x[12] + 1804603682) & 4294967295),
      (p = w + (((m << 7) & 4294967295) | (m >>> 25))),
      (m = (y + (M ^ (p & (w ^ M))) + x[13] + 4254626195) & 4294967295),
      (y = p + (((m << 12) & 4294967295) | (m >>> 20))),
      (m = (M + (w ^ (y & (p ^ w))) + x[14] + 2792965006) & 4294967295),
      (M = y + (((m << 17) & 4294967295) | (m >>> 15))),
      (m = (w + (p ^ (M & (y ^ p))) + x[15] + 1236535329) & 4294967295),
      (w = M + (((m << 22) & 4294967295) | (m >>> 10))),
      (m = (p + (M ^ (y & (w ^ M))) + x[1] + 4129170786) & 4294967295),
      (p = w + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (y + (w ^ (M & (p ^ w))) + x[6] + 3225465664) & 4294967295),
      (y = p + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (M + (p ^ (w & (y ^ p))) + x[11] + 643717713) & 4294967295),
      (M = y + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (w + (y ^ (p & (M ^ y))) + x[0] + 3921069994) & 4294967295),
      (w = M + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (p + (M ^ (y & (w ^ M))) + x[5] + 3593408605) & 4294967295),
      (p = w + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (y + (w ^ (M & (p ^ w))) + x[10] + 38016083) & 4294967295),
      (y = p + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (M + (p ^ (w & (y ^ p))) + x[15] + 3634488961) & 4294967295),
      (M = y + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (w + (y ^ (p & (M ^ y))) + x[4] + 3889429448) & 4294967295),
      (w = M + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (p + (M ^ (y & (w ^ M))) + x[9] + 568446438) & 4294967295),
      (p = w + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (y + (w ^ (M & (p ^ w))) + x[14] + 3275163606) & 4294967295),
      (y = p + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (M + (p ^ (w & (y ^ p))) + x[3] + 4107603335) & 4294967295),
      (M = y + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (w + (y ^ (p & (M ^ y))) + x[8] + 1163531501) & 4294967295),
      (w = M + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (p + (M ^ (y & (w ^ M))) + x[13] + 2850285829) & 4294967295),
      (p = w + (((m << 5) & 4294967295) | (m >>> 27))),
      (m = (y + (w ^ (M & (p ^ w))) + x[2] + 4243563512) & 4294967295),
      (y = p + (((m << 9) & 4294967295) | (m >>> 23))),
      (m = (M + (p ^ (w & (y ^ p))) + x[7] + 1735328473) & 4294967295),
      (M = y + (((m << 14) & 4294967295) | (m >>> 18))),
      (m = (w + (y ^ (p & (M ^ y))) + x[12] + 2368359562) & 4294967295),
      (w = M + (((m << 20) & 4294967295) | (m >>> 12))),
      (m = (p + (w ^ M ^ y) + x[5] + 4294588738) & 4294967295),
      (p = w + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (y + (p ^ w ^ M) + x[8] + 2272392833) & 4294967295),
      (y = p + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (M + (y ^ p ^ w) + x[11] + 1839030562) & 4294967295),
      (M = y + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (w + (M ^ y ^ p) + x[14] + 4259657740) & 4294967295),
      (w = M + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (p + (w ^ M ^ y) + x[1] + 2763975236) & 4294967295),
      (p = w + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (y + (p ^ w ^ M) + x[4] + 1272893353) & 4294967295),
      (y = p + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (M + (y ^ p ^ w) + x[7] + 4139469664) & 4294967295),
      (M = y + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (w + (M ^ y ^ p) + x[10] + 3200236656) & 4294967295),
      (w = M + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (p + (w ^ M ^ y) + x[13] + 681279174) & 4294967295),
      (p = w + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (y + (p ^ w ^ M) + x[0] + 3936430074) & 4294967295),
      (y = p + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (M + (y ^ p ^ w) + x[3] + 3572445317) & 4294967295),
      (M = y + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (w + (M ^ y ^ p) + x[6] + 76029189) & 4294967295),
      (w = M + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (p + (w ^ M ^ y) + x[9] + 3654602809) & 4294967295),
      (p = w + (((m << 4) & 4294967295) | (m >>> 28))),
      (m = (y + (p ^ w ^ M) + x[12] + 3873151461) & 4294967295),
      (y = p + (((m << 11) & 4294967295) | (m >>> 21))),
      (m = (M + (y ^ p ^ w) + x[15] + 530742520) & 4294967295),
      (M = y + (((m << 16) & 4294967295) | (m >>> 16))),
      (m = (w + (M ^ y ^ p) + x[2] + 3299628645) & 4294967295),
      (w = M + (((m << 23) & 4294967295) | (m >>> 9))),
      (m = (p + (M ^ (w | ~y)) + x[0] + 4096336452) & 4294967295),
      (p = w + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (y + (w ^ (p | ~M)) + x[7] + 1126891415) & 4294967295),
      (y = p + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (M + (p ^ (y | ~w)) + x[14] + 2878612391) & 4294967295),
      (M = y + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (w + (y ^ (M | ~p)) + x[5] + 4237533241) & 4294967295),
      (w = M + (((m << 21) & 4294967295) | (m >>> 11))),
      (m = (p + (M ^ (w | ~y)) + x[12] + 1700485571) & 4294967295),
      (p = w + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (y + (w ^ (p | ~M)) + x[3] + 2399980690) & 4294967295),
      (y = p + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (M + (p ^ (y | ~w)) + x[10] + 4293915773) & 4294967295),
      (M = y + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (w + (y ^ (M | ~p)) + x[1] + 2240044497) & 4294967295),
      (w = M + (((m << 21) & 4294967295) | (m >>> 11))),
      (m = (p + (M ^ (w | ~y)) + x[8] + 1873313359) & 4294967295),
      (p = w + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (y + (w ^ (p | ~M)) + x[15] + 4264355552) & 4294967295),
      (y = p + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (M + (p ^ (y | ~w)) + x[6] + 2734768916) & 4294967295),
      (M = y + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (w + (y ^ (M | ~p)) + x[13] + 1309151649) & 4294967295),
      (w = M + (((m << 21) & 4294967295) | (m >>> 11))),
      (m = (p + (M ^ (w | ~y)) + x[4] + 4149444226) & 4294967295),
      (p = w + (((m << 6) & 4294967295) | (m >>> 26))),
      (m = (y + (w ^ (p | ~M)) + x[11] + 3174756917) & 4294967295),
      (y = p + (((m << 10) & 4294967295) | (m >>> 22))),
      (m = (M + (p ^ (y | ~w)) + x[2] + 718787259) & 4294967295),
      (M = y + (((m << 15) & 4294967295) | (m >>> 17))),
      (m = (w + (y ^ (M | ~p)) + x[9] + 3951481745) & 4294967295),
      (C.g[0] = (C.g[0] + p) & 4294967295),
      (C.g[1] =
        (C.g[1] + (M + (((m << 21) & 4294967295) | (m >>> 11)))) & 4294967295),
      (C.g[2] = (C.g[2] + M) & 4294967295),
      (C.g[3] = (C.g[3] + y) & 4294967295);
  }
  (r.prototype.u = function (C, p) {
    p === void 0 && (p = C.length);
    for (var w = p - this.blockSize, x = this.B, M = this.h, y = 0; y < p; ) {
      if (M == 0) for (; y <= w; ) o(this, C, y), (y += this.blockSize);
      if (typeof C == "string") {
        for (; y < p; )
          if (((x[M++] = C.charCodeAt(y++)), M == this.blockSize)) {
            o(this, x), (M = 0);
            break;
          }
      } else
        for (; y < p; )
          if (((x[M++] = C[y++]), M == this.blockSize)) {
            o(this, x), (M = 0);
            break;
          }
    }
    (this.h = M), (this.o += p);
  }),
    (r.prototype.v = function () {
      var C = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      );
      C[0] = 128;
      for (var p = 1; p < C.length - 8; ++p) C[p] = 0;
      var w = 8 * this.o;
      for (p = C.length - 8; p < C.length; ++p) (C[p] = w & 255), (w /= 256);
      for (this.u(C), C = Array(16), p = w = 0; 4 > p; ++p)
        for (var x = 0; 32 > x; x += 8) C[w++] = (this.g[p] >>> x) & 255;
      return C;
    });
  function s(C, p) {
    var w = l;
    return Object.prototype.hasOwnProperty.call(w, C) ? w[C] : (w[C] = p(C));
  }
  function a(C, p) {
    this.h = p;
    for (var w = [], x = !0, M = C.length - 1; 0 <= M; M--) {
      var y = C[M] | 0;
      (x && y == p) || ((w[M] = y), (x = !1));
    }
    this.g = w;
  }
  var l = {};
  function v(C) {
    return -128 <= C && 128 > C
      ? s(C, function (p) {
          return new a([p | 0], 0 > p ? -1 : 0);
        })
      : new a([C | 0], 0 > C ? -1 : 0);
  }
  function d(C) {
    if (isNaN(C) || !isFinite(C)) return f;
    if (0 > C) return S(d(-C));
    for (var p = [], w = 1, x = 0; C >= w; x++)
      (p[x] = (C / w) | 0), (w *= 4294967296);
    return new a(p, 0);
  }
  function g(C, p) {
    if (C.length == 0) throw Error("number format error: empty string");
    if (((p = p || 10), 2 > p || 36 < p))
      throw Error("radix out of range: " + p);
    if (C.charAt(0) == "-") return S(g(C.substring(1), p));
    if (0 <= C.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var w = d(Math.pow(p, 8)), x = f, M = 0; M < C.length; M += 8) {
      var y = Math.min(8, C.length - M),
        m = parseInt(C.substring(M, M + y), p);
      8 > y
        ? ((y = d(Math.pow(p, y))), (x = x.j(y).add(d(m))))
        : ((x = x.j(w)), (x = x.add(d(m))));
    }
    return x;
  }
  var f = v(0),
    z = v(1),
    H = v(16777216);
  (n = a.prototype),
    (n.m = function () {
      if (I(this)) return -S(this).m();
      for (var C = 0, p = 1, w = 0; w < this.g.length; w++) {
        var x = this.i(w);
        (C += (0 <= x ? x : 4294967296 + x) * p), (p *= 4294967296);
      }
      return C;
    }),
    (n.toString = function (C) {
      if (((C = C || 10), 2 > C || 36 < C))
        throw Error("radix out of range: " + C);
      if (E(this)) return "0";
      if (I(this)) return "-" + S(this).toString(C);
      for (var p = d(Math.pow(C, 6)), w = this, x = ""; ; ) {
        var M = w1(w, p).g;
        w = F(w, M.j(p));
        var y = ((0 < w.g.length ? w.g[0] : w.h) >>> 0).toString(C);
        if (((w = M), E(w))) return y + x;
        for (; 6 > y.length; ) y = "0" + y;
        x = y + x;
      }
    }),
    (n.i = function (C) {
      return 0 > C ? 0 : C < this.g.length ? this.g[C] : this.h;
    });
  function E(C) {
    if (C.h != 0) return !1;
    for (var p = 0; p < C.g.length; p++) if (C.g[p] != 0) return !1;
    return !0;
  }
  function I(C) {
    return C.h == -1;
  }
  n.l = function (C) {
    return (C = F(this, C)), I(C) ? -1 : E(C) ? 0 : 1;
  };
  function S(C) {
    for (var p = C.g.length, w = [], x = 0; x < p; x++) w[x] = ~C.g[x];
    return new a(w, ~C.h).add(z);
  }
  (n.abs = function () {
    return I(this) ? S(this) : this;
  }),
    (n.add = function (C) {
      for (
        var p = Math.max(this.g.length, C.g.length), w = [], x = 0, M = 0;
        M <= p;
        M++
      ) {
        var y = x + (this.i(M) & 65535) + (C.i(M) & 65535),
          m = (y >>> 16) + (this.i(M) >>> 16) + (C.i(M) >>> 16);
        (x = m >>> 16), (y &= 65535), (m &= 65535), (w[M] = (m << 16) | y);
      }
      return new a(w, w[w.length - 1] & -2147483648 ? -1 : 0);
    });
  function F(C, p) {
    return C.add(S(p));
  }
  n.j = function (C) {
    if (E(this) || E(C)) return f;
    if (I(this)) return I(C) ? S(this).j(S(C)) : S(S(this).j(C));
    if (I(C)) return S(this.j(S(C)));
    if (0 > this.l(H) && 0 > C.l(H)) return d(this.m() * C.m());
    for (var p = this.g.length + C.g.length, w = [], x = 0; x < 2 * p; x++)
      w[x] = 0;
    for (x = 0; x < this.g.length; x++)
      for (var M = 0; M < C.g.length; M++) {
        var y = this.i(x) >>> 16,
          m = this.i(x) & 65535,
          It = C.i(M) >>> 16,
          U2 = C.i(M) & 65535;
        (w[2 * x + 2 * M] += m * U2),
          G(w, 2 * x + 2 * M),
          (w[2 * x + 2 * M + 1] += y * U2),
          G(w, 2 * x + 2 * M + 1),
          (w[2 * x + 2 * M + 1] += m * It),
          G(w, 2 * x + 2 * M + 1),
          (w[2 * x + 2 * M + 2] += y * It),
          G(w, 2 * x + 2 * M + 2);
      }
    for (x = 0; x < p; x++) w[x] = (w[2 * x + 1] << 16) | w[2 * x];
    for (x = p; x < 2 * p; x++) w[x] = 0;
    return new a(w, 0);
  };
  function G(C, p) {
    for (; (C[p] & 65535) != C[p]; )
      (C[p + 1] += C[p] >>> 16), (C[p] &= 65535), p++;
  }
  function t1(C, p) {
    (this.g = C), (this.h = p);
  }
  function w1(C, p) {
    if (E(p)) throw Error("division by zero");
    if (E(C)) return new t1(f, f);
    if (I(C)) return (p = w1(S(C), p)), new t1(S(p.g), S(p.h));
    if (I(p)) return (p = w1(C, S(p))), new t1(S(p.g), p.h);
    if (30 < C.g.length) {
      if (I(C) || I(p))
        throw Error("slowDivide_ only works with positive integers.");
      for (var w = z, x = p; 0 >= x.l(C); ) (w = st(w)), (x = st(x));
      var M = u1(w, 1),
        y = u1(x, 1);
      for (x = u1(x, 2), w = u1(w, 2); !E(x); ) {
        var m = y.add(x);
        0 >= m.l(C) && ((M = M.add(w)), (y = m)),
          (x = u1(x, 1)),
          (w = u1(w, 1));
      }
      return (p = F(C, M.j(p))), new t1(M, p);
    }
    for (M = f; 0 <= C.l(p); ) {
      for (
        w = Math.max(1, Math.floor(C.m() / p.m())),
          x = Math.ceil(Math.log(w) / Math.LN2),
          x = 48 >= x ? 1 : Math.pow(2, x - 48),
          y = d(w),
          m = y.j(p);
        I(m) || 0 < m.l(C);

      )
        (w -= x), (y = d(w)), (m = y.j(p));
      E(y) && (y = z), (M = M.add(y)), (C = F(C, m));
    }
    return new t1(M, C);
  }
  (n.A = function (C) {
    return w1(this, C).h;
  }),
    (n.and = function (C) {
      for (
        var p = Math.max(this.g.length, C.g.length), w = [], x = 0;
        x < p;
        x++
      )
        w[x] = this.i(x) & C.i(x);
      return new a(w, this.h & C.h);
    }),
    (n.or = function (C) {
      for (
        var p = Math.max(this.g.length, C.g.length), w = [], x = 0;
        x < p;
        x++
      )
        w[x] = this.i(x) | C.i(x);
      return new a(w, this.h | C.h);
    }),
    (n.xor = function (C) {
      for (
        var p = Math.max(this.g.length, C.g.length), w = [], x = 0;
        x < p;
        x++
      )
        w[x] = this.i(x) ^ C.i(x);
      return new a(w, this.h ^ C.h);
    });
  function st(C) {
    for (var p = C.g.length + 1, w = [], x = 0; x < p; x++)
      w[x] = (C.i(x) << 1) | (C.i(x - 1) >>> 31);
    return new a(w, C.h);
  }
  function u1(C, p) {
    var w = p >> 5;
    p %= 32;
    for (var x = C.g.length - w, M = [], y = 0; y < x; y++)
      M[y] =
        0 < p ? (C.i(y + w) >>> p) | (C.i(y + w + 1) << (32 - p)) : C.i(y + w);
    return new a(M, C.h);
  }
  (r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    ($s = Q3.Md5 = r),
    (a.prototype.add = a.prototype.add),
    (a.prototype.multiply = a.prototype.j),
    (a.prototype.modulo = a.prototype.A),
    (a.prototype.compare = a.prototype.l),
    (a.prototype.toNumber = a.prototype.m),
    (a.prototype.toString = a.prototype.toString),
    (a.prototype.getBits = a.prototype.i),
    (a.fromNumber = d),
    (a.fromString = g),
    (ge = Q3.Integer = a);
}).apply(
  typeof K3 < "u"
    ? K3
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
var Ur =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Gt = {};
var qs, Gs, w2, Ws, J0, $r, Ks, Qs, Ys;
(function () {
  var n,
    t =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (i, c, h) {
            return (
              i == Array.prototype || i == Object.prototype || (i[c] = h.value),
              i
            );
          };
  function e(i) {
    i = [
      typeof globalThis == "object" && globalThis,
      i,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof Ur == "object" && Ur,
    ];
    for (var c = 0; c < i.length; ++c) {
      var h = i[c];
      if (h && h.Math == Math) return h;
    }
    throw Error("Cannot find global object");
  }
  var r = e(this);
  function o(i, c) {
    if (c)
      t: {
        var h = r;
        i = i.split(".");
        for (var u = 0; u < i.length - 1; u++) {
          var V = i[u];
          if (!(V in h)) break t;
          h = h[V];
        }
        (i = i[i.length - 1]),
          (u = h[i]),
          (c = c(u)),
          c != u &&
            c != null &&
            t(h, i, { configurable: !0, writable: !0, value: c });
      }
  }
  function s(i, c) {
    i instanceof String && (i += "");
    var h = 0,
      u = !1,
      V = {
        next: function () {
          if (!u && h < i.length) {
            var _ = h++;
            return { value: c(_, i[_]), done: !1 };
          }
          return (u = !0), { done: !0, value: void 0 };
        },
      };
    return (
      (V[Symbol.iterator] = function () {
        return V;
      }),
      V
    );
  }
  o("Array.prototype.values", function (i) {
    return (
      i ||
      function () {
        return s(this, function (c, h) {
          return h;
        });
      }
    );
  });
  var a = a || {},
    l = this || self;
  function v(i) {
    var c = typeof i;
    return (
      (c = c != "object" ? c : i ? (Array.isArray(i) ? "array" : c) : "null"),
      c == "array" || (c == "object" && typeof i.length == "number")
    );
  }
  function d(i) {
    var c = typeof i;
    return (c == "object" && i != null) || c == "function";
  }
  function g(i, c, h) {
    return i.call.apply(i.bind, arguments);
  }
  function f(i, c, h) {
    if (!i) throw Error();
    if (2 < arguments.length) {
      var u = Array.prototype.slice.call(arguments, 2);
      return function () {
        var V = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(V, u), i.apply(c, V);
      };
    }
    return function () {
      return i.apply(c, arguments);
    };
  }
  function z(i, c, h) {
    return (
      (z =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf("native code") != -1
          ? g
          : f),
      z.apply(null, arguments)
    );
  }
  function H(i, c) {
    var h = Array.prototype.slice.call(arguments, 1);
    return function () {
      var u = h.slice();
      return u.push.apply(u, arguments), i.apply(this, u);
    };
  }
  function E(i, c) {
    function h() {}
    (h.prototype = c.prototype),
      (i.aa = c.prototype),
      (i.prototype = new h()),
      (i.prototype.constructor = i),
      (i.Qb = function (u, V, _) {
        for (
          var k = Array(arguments.length - 2), v1 = 2;
          v1 < arguments.length;
          v1++
        )
          k[v1 - 2] = arguments[v1];
        return c.prototype[V].apply(u, k);
      });
  }
  function I(i) {
    let c = i.length;
    if (0 < c) {
      let h = Array(c);
      for (let u = 0; u < c; u++) h[u] = i[u];
      return h;
    }
    return [];
  }
  function S(i, c) {
    for (let h = 1; h < arguments.length; h++) {
      let u = arguments[h];
      if (v(u)) {
        let V = i.length || 0,
          _ = u.length || 0;
        i.length = V + _;
        for (let k = 0; k < _; k++) i[V + k] = u[k];
      } else i.push(u);
    }
  }
  class F {
    constructor(c, h) {
      (this.i = c), (this.j = h), (this.h = 0), (this.g = null);
    }
    get() {
      let c;
      return (
        0 < this.h
          ? (this.h--, (c = this.g), (this.g = c.next), (c.next = null))
          : (c = this.i()),
        c
      );
    }
  }
  function G(i) {
    return /^[\s\xa0]*$/.test(i);
  }
  function t1() {
    var i = l.navigator;
    return i && (i = i.userAgent) ? i : "";
  }
  function w1(i) {
    return w1[" "](i), i;
  }
  w1[" "] = function () {};
  var st =
    t1().indexOf("Gecko") != -1 &&
    !(
      t1().toLowerCase().indexOf("webkit") != -1 && t1().indexOf("Edge") == -1
    ) &&
    !(t1().indexOf("Trident") != -1 || t1().indexOf("MSIE") != -1) &&
    t1().indexOf("Edge") == -1;
  function u1(i, c, h) {
    for (let u in i) c.call(h, i[u], u, i);
  }
  function C(i, c) {
    for (let h in i) c.call(void 0, i[h], h, i);
  }
  function p(i) {
    let c = {};
    for (let h in i) c[h] = i[h];
    return c;
  }
  let w =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function x(i, c) {
    let h, u;
    for (let V = 1; V < arguments.length; V++) {
      u = arguments[V];
      for (h in u) i[h] = u[h];
      for (let _ = 0; _ < w.length; _++)
        (h = w[_]), Object.prototype.hasOwnProperty.call(u, h) && (i[h] = u[h]);
    }
  }
  function M(i) {
    var c = 1;
    i = i.split(":");
    let h = [];
    for (; 0 < c && i.length; ) h.push(i.shift()), c--;
    return i.length && h.push(i.join(":")), h;
  }
  function y(i) {
    l.setTimeout(() => {
      throw i;
    }, 0);
  }
  function m() {
    var i = Fo;
    let c = null;
    return (
      i.g &&
        ((c = i.g), (i.g = i.g.next), i.g || (i.h = null), (c.next = null)),
      c
    );
  }
  class It {
    constructor() {
      this.h = this.g = null;
    }
    add(c, h) {
      let u = U2.get();
      u.set(c, h), this.h ? (this.h.next = u) : (this.g = u), (this.h = u);
    }
  }
  var U2 = new F(
    () => new Fv(),
    (i) => i.reset()
  );
  class Fv {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(c, h) {
      (this.h = c), (this.g = h), (this.next = null);
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let $2,
    q2 = !1,
    Fo = new It(),
    yl = () => {
      let i = l.Promise.resolve(void 0);
      $2 = () => {
        i.then(Zv);
      };
    };
  var Zv = () => {
    for (var i; (i = m()); ) {
      try {
        i.h.call(i.g);
      } catch (h) {
        y(h);
      }
      var c = U2;
      c.j(i), 100 > c.h && (c.h++, (i.next = c.g), (c.g = i));
    }
    q2 = !1;
  };
  function Jt() {
    (this.s = this.s), (this.C = this.C);
  }
  (Jt.prototype.s = !1),
    (Jt.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (Jt.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    });
  function R1(i, c) {
    (this.type = i), (this.g = this.target = c), (this.defaultPrevented = !1);
  }
  R1.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var jv = (function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var i = !1,
      c = Object.defineProperty({}, "passive", {
        get: function () {
          i = !0;
        },
      });
    try {
      let h = () => {};
      l.addEventListener("test", h, c), l.removeEventListener("test", h, c);
    } catch {}
    return i;
  })();
  function G2(i, c) {
    if (
      (R1.call(this, i ? i.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      i)
    ) {
      var h = (this.type = i.type),
        u =
          i.changedTouches && i.changedTouches.length
            ? i.changedTouches[0]
            : null;
      if (
        ((this.target = i.target || i.srcElement),
        (this.g = c),
        (c = i.relatedTarget))
      ) {
        if (st) {
          t: {
            try {
              w1(c.nodeName);
              var V = !0;
              break t;
            } catch {}
            V = !1;
          }
          V || (c = null);
        }
      } else
        h == "mouseover"
          ? (c = i.fromElement)
          : h == "mouseout" && (c = i.toElement);
      (this.relatedTarget = c),
        u
          ? ((this.clientX = u.clientX !== void 0 ? u.clientX : u.pageX),
            (this.clientY = u.clientY !== void 0 ? u.clientY : u.pageY),
            (this.screenX = u.screenX || 0),
            (this.screenY = u.screenY || 0))
          : ((this.clientX = i.clientX !== void 0 ? i.clientX : i.pageX),
            (this.clientY = i.clientY !== void 0 ? i.clientY : i.pageY),
            (this.screenX = i.screenX || 0),
            (this.screenY = i.screenY || 0)),
        (this.button = i.button),
        (this.key = i.key || ""),
        (this.ctrlKey = i.ctrlKey),
        (this.altKey = i.altKey),
        (this.shiftKey = i.shiftKey),
        (this.metaKey = i.metaKey),
        (this.pointerId = i.pointerId || 0),
        (this.pointerType =
          typeof i.pointerType == "string"
            ? i.pointerType
            : Uv[i.pointerType] || ""),
        (this.state = i.state),
        (this.i = i),
        i.defaultPrevented && G2.aa.h.call(this);
    }
  }
  E(G2, R1);
  var Uv = { 2: "touch", 3: "pen", 4: "mouse" };
  G2.prototype.h = function () {
    G2.aa.h.call(this);
    var i = this.i;
    i.preventDefault ? i.preventDefault() : (i.returnValue = !1);
  };
  var W2 = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    $v = 0;
  function qv(i, c, h, u, V) {
    (this.listener = i),
      (this.proxy = null),
      (this.src = c),
      (this.type = h),
      (this.capture = !!u),
      (this.ha = V),
      (this.key = ++$v),
      (this.da = this.fa = !1);
  }
  function bn(i) {
    (i.da = !0),
      (i.listener = null),
      (i.proxy = null),
      (i.src = null),
      (i.ha = null);
  }
  function Bn(i) {
    (this.src = i), (this.g = {}), (this.h = 0);
  }
  Bn.prototype.add = function (i, c, h, u, V) {
    var _ = i.toString();
    (i = this.g[_]), i || ((i = this.g[_] = []), this.h++);
    var k = jo(i, c, u, V);
    return (
      -1 < k
        ? ((c = i[k]), h || (c.fa = !1))
        : ((c = new qv(c, this.src, _, !!u, V)), (c.fa = h), i.push(c)),
      c
    );
  };
  function Zo(i, c) {
    var h = c.type;
    if (h in i.g) {
      var u = i.g[h],
        V = Array.prototype.indexOf.call(u, c, void 0),
        _;
      (_ = 0 <= V) && Array.prototype.splice.call(u, V, 1),
        _ && (bn(c), i.g[h].length == 0 && (delete i.g[h], i.h--));
    }
  }
  function jo(i, c, h, u) {
    for (var V = 0; V < i.length; ++V) {
      var _ = i[V];
      if (!_.da && _.listener == c && _.capture == !!h && _.ha == u) return V;
    }
    return -1;
  }
  var Uo = "closure_lm_" + ((1e6 * Math.random()) | 0),
    $o = {};
  function _l(i, c, h, u, V) {
    if (u && u.once) return Ll(i, c, h, u, V);
    if (Array.isArray(c)) {
      for (var _ = 0; _ < c.length; _++) _l(i, c[_], h, u, V);
      return null;
    }
    return (
      (h = Ko(h)),
      i && i[W2]
        ? i.K(c, h, d(u) ? !!u.capture : !!u, V)
        : Hl(i, c, h, !1, u, V)
    );
  }
  function Hl(i, c, h, u, V, _) {
    if (!c) throw Error("Invalid event type");
    var k = d(V) ? !!V.capture : !!V,
      v1 = Go(i);
    if ((v1 || (i[Uo] = v1 = new Bn(i)), (h = v1.add(c, h, u, k, _)), h.proxy))
      return h;
    if (
      ((u = Gv()),
      (h.proxy = u),
      (u.src = i),
      (u.listener = h),
      i.addEventListener)
    )
      jv || (V = k),
        V === void 0 && (V = !1),
        i.addEventListener(c.toString(), u, V);
    else if (i.attachEvent) i.attachEvent(bl(c.toString()), u);
    else if (i.addListener && i.removeListener) i.addListener(u);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return h;
  }
  function Gv() {
    function i(h) {
      return c.call(i.src, i.listener, h);
    }
    let c = Wv;
    return i;
  }
  function Ll(i, c, h, u, V) {
    if (Array.isArray(c)) {
      for (var _ = 0; _ < c.length; _++) Ll(i, c[_], h, u, V);
      return null;
    }
    return (
      (h = Ko(h)),
      i && i[W2]
        ? i.L(c, h, d(u) ? !!u.capture : !!u, V)
        : Hl(i, c, h, !0, u, V)
    );
  }
  function Al(i, c, h, u, V) {
    if (Array.isArray(c))
      for (var _ = 0; _ < c.length; _++) Al(i, c[_], h, u, V);
    else
      (u = d(u) ? !!u.capture : !!u),
        (h = Ko(h)),
        i && i[W2]
          ? ((i = i.i),
            (c = String(c).toString()),
            c in i.g &&
              ((_ = i.g[c]),
              (h = jo(_, h, u, V)),
              -1 < h &&
                (bn(_[h]),
                Array.prototype.splice.call(_, h, 1),
                _.length == 0 && (delete i.g[c], i.h--))))
          : i &&
            (i = Go(i)) &&
            ((c = i.g[c.toString()]),
            (i = -1),
            c && (i = jo(c, h, u, V)),
            (h = -1 < i ? c[i] : null) && qo(h));
  }
  function qo(i) {
    if (typeof i != "number" && i && !i.da) {
      var c = i.src;
      if (c && c[W2]) Zo(c.i, i);
      else {
        var h = i.type,
          u = i.proxy;
        c.removeEventListener
          ? c.removeEventListener(h, u, i.capture)
          : c.detachEvent
          ? c.detachEvent(bl(h), u)
          : c.addListener && c.removeListener && c.removeListener(u),
          (h = Go(c))
            ? (Zo(h, i), h.h == 0 && ((h.src = null), (c[Uo] = null)))
            : bn(i);
      }
    }
  }
  function bl(i) {
    return i in $o ? $o[i] : ($o[i] = "on" + i);
  }
  function Wv(i, c) {
    if (i.da) i = !0;
    else {
      c = new G2(c, this);
      var h = i.listener,
        u = i.ha || i.src;
      i.fa && qo(i), (i = h.call(u, c));
    }
    return i;
  }
  function Go(i) {
    return (i = i[Uo]), i instanceof Bn ? i : null;
  }
  var Wo = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function Ko(i) {
    return typeof i == "function"
      ? i
      : (i[Wo] ||
          (i[Wo] = function (c) {
            return i.handleEvent(c);
          }),
        i[Wo]);
  }
  function O1() {
    Jt.call(this), (this.i = new Bn(this)), (this.M = this), (this.F = null);
  }
  E(O1, Jt),
    (O1.prototype[W2] = !0),
    (O1.prototype.removeEventListener = function (i, c, h, u) {
      Al(this, i, c, h, u);
    });
  function W1(i, c) {
    var h,
      u = i.F;
    if (u) for (h = []; u; u = u.F) h.push(u);
    if (((i = i.M), (u = c.type || c), typeof c == "string")) c = new R1(c, i);
    else if (c instanceof R1) c.target = c.target || i;
    else {
      var V = c;
      (c = new R1(u, i)), x(c, V);
    }
    if (((V = !0), h))
      for (var _ = h.length - 1; 0 <= _; _--) {
        var k = (c.g = h[_]);
        V = Sn(k, u, !0, c) && V;
      }
    if (
      ((k = c.g = i), (V = Sn(k, u, !0, c) && V), (V = Sn(k, u, !1, c) && V), h)
    )
      for (_ = 0; _ < h.length; _++)
        (k = c.g = h[_]), (V = Sn(k, u, !1, c) && V);
  }
  (O1.prototype.N = function () {
    if ((O1.aa.N.call(this), this.i)) {
      var i = this.i,
        c;
      for (c in i.g) {
        for (var h = i.g[c], u = 0; u < h.length; u++) bn(h[u]);
        delete i.g[c], i.h--;
      }
    }
    this.F = null;
  }),
    (O1.prototype.K = function (i, c, h, u) {
      return this.i.add(String(i), c, !1, h, u);
    }),
    (O1.prototype.L = function (i, c, h, u) {
      return this.i.add(String(i), c, !0, h, u);
    });
  function Sn(i, c, h, u) {
    if (((c = i.i.g[String(c)]), !c)) return !0;
    c = c.concat();
    for (var V = !0, _ = 0; _ < c.length; ++_) {
      var k = c[_];
      if (k && !k.da && k.capture == h) {
        var v1 = k.listener,
          T1 = k.ha || k.src;
        k.fa && Zo(i.i, k), (V = v1.call(T1, u) !== !1 && V);
      }
    }
    return V && !u.defaultPrevented;
  }
  function Bl(i, c, h) {
    if (typeof i == "function") h && (i = z(i, h));
    else if (i && typeof i.handleEvent == "function") i = z(i.handleEvent, i);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(c) ? -1 : l.setTimeout(i, c || 0);
  }
  function Sl(i) {
    i.g = Bl(() => {
      (i.g = null), i.i && ((i.i = !1), Sl(i));
    }, i.l);
    let c = i.h;
    (i.h = null), i.m.apply(null, c);
  }
  class Kv extends Jt {
    constructor(c, h) {
      super(),
        (this.m = c),
        (this.l = h),
        (this.h = null),
        (this.i = !1),
        (this.g = null);
    }
    j(c) {
      (this.h = arguments), this.g ? (this.i = !0) : Sl(this);
    }
    N() {
      super.N(),
        this.g &&
          (l.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null));
    }
  }
  function K2(i) {
    Jt.call(this), (this.h = i), (this.g = {});
  }
  E(K2, Jt);
  var kl = [];
  function El(i) {
    u1(
      i.g,
      function (c, h) {
        this.g.hasOwnProperty(h) && qo(c);
      },
      i
    ),
      (i.g = {});
  }
  (K2.prototype.N = function () {
    K2.aa.N.call(this), El(this);
  }),
    (K2.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    });
  var Qo = l.JSON.stringify,
    Qv = l.JSON.parse,
    Yv = class {
      stringify(i) {
        return l.JSON.stringify(i, void 0);
      }
      parse(i) {
        return l.JSON.parse(i, void 0);
      }
    };
  function Yo() {}
  Yo.prototype.h = null;
  function Il(i) {
    return i.h || (i.h = i.i());
  }
  function Tl() {}
  var Q2 = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function Jo() {
    R1.call(this, "d");
  }
  E(Jo, R1);
  function Xo() {
    R1.call(this, "c");
  }
  E(Xo, R1);
  var ze = {},
    Dl = null;
  function kn() {
    return (Dl = Dl || new O1());
  }
  ze.La = "serverreachability";
  function Pl(i) {
    R1.call(this, ze.La, i);
  }
  E(Pl, R1);
  function Y2(i) {
    let c = kn();
    W1(c, new Pl(c));
  }
  ze.STAT_EVENT = "statevent";
  function Rl(i, c) {
    R1.call(this, ze.STAT_EVENT, i), (this.stat = c);
  }
  E(Rl, R1);
  function K1(i) {
    let c = kn();
    W1(c, new Rl(c, i));
  }
  ze.Ma = "timingevent";
  function Ol(i, c) {
    R1.call(this, ze.Ma, i), (this.size = c);
  }
  E(Ol, R1);
  function J2(i, c) {
    if (typeof i != "function")
      throw Error("Fn must not be null and must be a function");
    return l.setTimeout(function () {
      i();
    }, c);
  }
  function X2() {
    this.g = !0;
  }
  X2.prototype.xa = function () {
    this.g = !1;
  };
  function Jv(i, c, h, u, V, _) {
    i.info(function () {
      if (i.g)
        if (_)
          for (var k = "", v1 = _.split("&"), T1 = 0; T1 < v1.length; T1++) {
            var e1 = v1[T1].split("=");
            if (1 < e1.length) {
              var N1 = e1[0];
              e1 = e1[1];
              var F1 = N1.split("_");
              k =
                2 <= F1.length && F1[1] == "type"
                  ? k + (N1 + "=" + e1 + "&")
                  : k + (N1 + "=redacted&");
            }
          }
        else k = null;
      else k = _;
      return (
        "XMLHTTP REQ (" +
        u +
        ") [attempt " +
        V +
        "]: " +
        c +
        `
` +
        h +
        `
` +
        k
      );
    });
  }
  function Xv(i, c, h, u, V, _, k) {
    i.info(function () {
      return (
        "XMLHTTP RESP (" +
        u +
        ") [ attempt " +
        V +
        "]: " +
        c +
        `
` +
        h +
        `
` +
        _ +
        " " +
        k
      );
    });
  }
  function qe(i, c, h, u) {
    i.info(function () {
      return "XMLHTTP TEXT (" + c + "): " + e6(i, h) + (u ? " " + u : "");
    });
  }
  function t6(i, c) {
    i.info(function () {
      return "TIMEOUT: " + c;
    });
  }
  X2.prototype.info = function () {};
  function e6(i, c) {
    if (!i.g) return c;
    if (!c) return null;
    try {
      var h = JSON.parse(c);
      if (h) {
        for (i = 0; i < h.length; i++)
          if (Array.isArray(h[i])) {
            var u = h[i];
            if (!(2 > u.length)) {
              var V = u[1];
              if (Array.isArray(V) && !(1 > V.length)) {
                var _ = V[0];
                if (_ != "noop" && _ != "stop" && _ != "close")
                  for (var k = 1; k < V.length; k++) V[k] = "";
              }
            }
          }
      }
      return Qo(h);
    } catch {
      return c;
    }
  }
  var En = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    Nl = {
      lb: "complete",
      Hb: "success",
      Ja: "error",
      Ia: "abort",
      zb: "ready",
      Ab: "readystatechange",
      TIMEOUT: "timeout",
      vb: "incrementaldata",
      yb: "progress",
      ob: "downloadprogress",
      Pb: "uploadprogress",
    },
    t5;
  function In() {}
  E(In, Yo),
    (In.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (In.prototype.i = function () {
      return {};
    }),
    (t5 = new In());
  function Xt(i, c, h, u) {
    (this.j = i),
      (this.i = c),
      (this.l = h),
      (this.R = u || 1),
      (this.U = new K2(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new Fl());
  }
  function Fl() {
    (this.i = null), (this.g = ""), (this.h = !1);
  }
  var Zl = {},
    e5 = {};
  function n5(i, c, h) {
    (i.L = 1), (i.v = Rn(Tt(c))), (i.m = h), (i.P = !0), jl(i, null);
  }
  function jl(i, c) {
    (i.F = Date.now()), Tn(i), (i.A = Tt(i.v));
    var h = i.A,
      u = i.R;
    Array.isArray(u) || (u = [String(u)]),
      rc(h.i, "t", u),
      (i.C = 0),
      (h = i.j.J),
      (i.h = new Fl()),
      (i.g = Mc(i.j, h ? c : null, !i.m)),
      0 < i.O && (i.M = new Kv(z(i.Y, i, i.g), i.O)),
      (c = i.U),
      (h = i.g),
      (u = i.ca);
    var V = "readystatechange";
    Array.isArray(V) || (V && (kl[0] = V.toString()), (V = kl));
    for (var _ = 0; _ < V.length; _++) {
      var k = _l(h, V[_], u || c.handleEvent, !1, c.h || c);
      if (!k) break;
      c.g[k.key] = k;
    }
    (c = i.H ? p(i.H) : {}),
      i.m
        ? (i.u || (i.u = "POST"),
          (c["Content-Type"] = "application/x-www-form-urlencoded"),
          i.g.ea(i.A, i.u, i.m, c))
        : ((i.u = "GET"), i.g.ea(i.A, i.u, null, c)),
      Y2(),
      Jv(i.i, i.u, i.A, i.l, i.R, i.m);
  }
  (Xt.prototype.ca = function (i) {
    i = i.target;
    let c = this.M;
    c && Dt(i) == 3 ? c.j() : this.Y(i);
  }),
    (Xt.prototype.Y = function (i) {
      try {
        if (i == this.g)
          t: {
            let F1 = Dt(this.g);
            var c = this.g.Ba();
            let Ke = this.g.Z();
            if (
              !(3 > F1) &&
              (F1 != 3 || (this.g && (this.h.h || this.g.oa() || hc(this.g))))
            ) {
              this.J ||
                F1 != 4 ||
                c == 7 ||
                (c == 8 || 0 >= Ke ? Y2(3) : Y2(2)),
                r5(this);
              var h = this.g.Z();
              this.X = h;
              e: if (Ul(this)) {
                var u = hc(this.g);
                i = "";
                var V = u.length,
                  _ = Dt(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > "u") {
                    Me(this), t0(this);
                    var k = "";
                    break e;
                  }
                  this.h.i = new l.TextDecoder();
                }
                for (c = 0; c < V; c++)
                  (this.h.h = !0),
                    (i += this.h.i.decode(u[c], {
                      stream: !(_ && c == V - 1),
                    }));
                (u.length = 0), (this.h.g += i), (this.C = 0), (k = this.h.g);
              } else k = this.g.oa();
              if (
                ((this.o = h == 200),
                Xv(this.i, this.u, this.A, this.l, this.R, F1, h),
                this.o)
              ) {
                if (this.T && !this.K) {
                  e: {
                    if (this.g) {
                      var v1,
                        T1 = this.g;
                      if (
                        (v1 = T1.g
                          ? T1.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !G(v1)
                      ) {
                        var e1 = v1;
                        break e;
                      }
                    }
                    e1 = null;
                  }
                  if ((h = e1))
                    qe(
                      this.i,
                      this.l,
                      h,
                      "Initial handshake response via X-HTTP-Initial-Response"
                    ),
                      (this.K = !0),
                      o5(this, h);
                  else {
                    (this.o = !1), (this.s = 3), K1(12), Me(this), t0(this);
                    break t;
                  }
                }
                if (this.P) {
                  h = !0;
                  let ut;
                  for (; !this.J && this.C < k.length; )
                    if (((ut = n6(this, k)), ut == e5)) {
                      F1 == 4 && ((this.s = 4), K1(14), (h = !1)),
                        qe(this.i, this.l, null, "[Incomplete Response]");
                      break;
                    } else if (ut == Zl) {
                      (this.s = 4),
                        K1(15),
                        qe(this.i, this.l, k, "[Invalid Chunk]"),
                        (h = !1);
                      break;
                    } else qe(this.i, this.l, ut, null), o5(this, ut);
                  if (
                    (Ul(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    F1 != 4 ||
                      k.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), K1(16), (h = !1)),
                    (this.o = this.o && h),
                    !h)
                  )
                    qe(this.i, this.l, k, "[Invalid Chunked Response]"),
                      Me(this),
                      t0(this);
                  else if (0 < k.length && !this.W) {
                    this.W = !0;
                    var N1 = this.j;
                    N1.g == this &&
                      N1.ba &&
                      !N1.M &&
                      (N1.j.info(
                        "Great, no buffering proxy detected. Bytes received: " +
                          k.length
                      ),
                      h5(N1),
                      (N1.M = !0),
                      K1(11));
                  }
                } else qe(this.i, this.l, k, null), o5(this, k);
                F1 == 4 && Me(this),
                  this.o &&
                    !this.J &&
                    (F1 == 4 ? wc(this.j, this) : ((this.o = !1), Tn(this)));
              } else
                x6(this.g),
                  h == 400 && 0 < k.indexOf("Unknown SID")
                    ? ((this.s = 3), K1(12))
                    : ((this.s = 0), K1(13)),
                  Me(this),
                  t0(this);
            }
          }
      } catch {
      } finally {
      }
    });
  function Ul(i) {
    return i.g ? i.u == "GET" && i.L != 2 && i.j.Ca : !1;
  }
  function n6(i, c) {
    var h = i.C,
      u = c.indexOf(
        `
`,
        h
      );
    return u == -1
      ? e5
      : ((h = Number(c.substring(h, u))),
        isNaN(h)
          ? Zl
          : ((u += 1),
            u + h > c.length
              ? e5
              : ((c = c.slice(u, u + h)), (i.C = u + h), c)));
  }
  Xt.prototype.cancel = function () {
    (this.J = !0), Me(this);
  };
  function Tn(i) {
    (i.S = Date.now() + i.I), $l(i, i.I);
  }
  function $l(i, c) {
    if (i.B != null) throw Error("WatchDog timer not null");
    i.B = J2(z(i.ba, i), c);
  }
  function r5(i) {
    i.B && (l.clearTimeout(i.B), (i.B = null));
  }
  Xt.prototype.ba = function () {
    this.B = null;
    let i = Date.now();
    0 <= i - this.S
      ? (t6(this.i, this.A),
        this.L != 2 && (Y2(), K1(17)),
        Me(this),
        (this.s = 2),
        t0(this))
      : $l(this, this.S - i);
  };
  function t0(i) {
    i.j.G == 0 || i.J || wc(i.j, i);
  }
  function Me(i) {
    r5(i);
    var c = i.M;
    c && typeof c.ma == "function" && c.ma(),
      (i.M = null),
      El(i.U),
      i.g && ((c = i.g), (i.g = null), c.abort(), c.ma());
  }
  function o5(i, c) {
    try {
      var h = i.j;
      if (h.G != 0 && (h.g == i || s5(h.h, i))) {
        if (!i.K && s5(h.h, i) && h.G == 3) {
          try {
            var u = h.Da.g.parse(c);
          } catch {
            u = null;
          }
          if (Array.isArray(u) && u.length == 3) {
            var V = u;
            if (V[0] == 0) {
              t: if (!h.u) {
                if (h.g)
                  if (h.g.F + 3e3 < i.F) jn(h), Fn(h);
                  else break t;
                c5(h), K1(18);
              }
            } else
              (h.za = V[1]),
                0 < h.za - h.T &&
                  37500 > V[2] &&
                  h.F &&
                  h.v == 0 &&
                  !h.C &&
                  (h.C = J2(z(h.Za, h), 6e3));
            if (1 >= Wl(h.h) && h.ca) {
              try {
                h.ca();
              } catch {}
              h.ca = void 0;
            }
          } else Ve(h, 11);
        } else if (((i.K || h.g == i) && jn(h), !G(c)))
          for (V = h.Da.g.parse(c), c = 0; c < V.length; c++) {
            let e1 = V[c];
            if (((h.T = e1[0]), (e1 = e1[1]), h.G == 2))
              if (e1[0] == "c") {
                (h.K = e1[1]), (h.ia = e1[2]);
                let N1 = e1[3];
                N1 != null && ((h.la = N1), h.j.info("VER=" + h.la));
                let F1 = e1[4];
                F1 != null && ((h.Aa = F1), h.j.info("SVER=" + h.Aa));
                let Ke = e1[5];
                Ke != null &&
                  typeof Ke == "number" &&
                  0 < Ke &&
                  ((u = 1.5 * Ke),
                  (h.L = u),
                  h.j.info("backChannelRequestTimeoutMs_=" + u)),
                  (u = h);
                let ut = i.g;
                if (ut) {
                  let $n = ut.g
                    ? ut.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if ($n) {
                    var _ = u.h;
                    _.g ||
                      ($n.indexOf("spdy") == -1 &&
                        $n.indexOf("quic") == -1 &&
                        $n.indexOf("h2") == -1) ||
                      ((_.j = _.l),
                      (_.g = new Set()),
                      _.h && (i5(_, _.h), (_.h = null)));
                  }
                  if (u.D) {
                    let v5 = ut.g
                      ? ut.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    v5 && ((u.ya = v5), g1(u.I, u.D, v5));
                  }
                }
                (h.G = 3),
                  h.l && h.l.ua(),
                  h.ba &&
                    ((h.R = Date.now() - i.F),
                    h.j.info("Handshake RTT: " + h.R + "ms")),
                  (u = h);
                var k = i;
                if (((u.qa = zc(u, u.J ? u.ia : null, u.W)), k.K)) {
                  Kl(u.h, k);
                  var v1 = k,
                    T1 = u.L;
                  T1 && (v1.I = T1), v1.B && (r5(v1), Tn(v1)), (u.g = k);
                } else pc(u);
                0 < h.i.length && Zn(h);
              } else (e1[0] != "stop" && e1[0] != "close") || Ve(h, 7);
            else
              h.G == 3 &&
                (e1[0] == "stop" || e1[0] == "close"
                  ? e1[0] == "stop"
                    ? Ve(h, 7)
                    : l5(h)
                  : e1[0] != "noop" && h.l && h.l.ta(e1),
                (h.v = 0));
          }
      }
      Y2(4);
    } catch {}
  }
  var r6 = class {
    constructor(i, c) {
      (this.g = i), (this.map = c);
    }
  };
  function ql(i) {
    (this.l = i || 10),
      l.PerformanceNavigationTiming
        ? ((i = l.performance.getEntriesByType("navigation")),
          (i =
            0 < i.length &&
            (i[0].nextHopProtocol == "hq" || i[0].nextHopProtocol == "h2")))
        : (i = !!(
            l.chrome &&
            l.chrome.loadTimes &&
            l.chrome.loadTimes() &&
            l.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = i ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []);
  }
  function Gl(i) {
    return i.h ? !0 : i.g ? i.g.size >= i.j : !1;
  }
  function Wl(i) {
    return i.h ? 1 : i.g ? i.g.size : 0;
  }
  function s5(i, c) {
    return i.h ? i.h == c : i.g ? i.g.has(c) : !1;
  }
  function i5(i, c) {
    i.g ? i.g.add(c) : (i.h = c);
  }
  function Kl(i, c) {
    i.h && i.h == c ? (i.h = null) : i.g && i.g.has(c) && i.g.delete(c);
  }
  ql.prototype.cancel = function () {
    if (((this.i = Ql(this)), this.h)) this.h.cancel(), (this.h = null);
    else if (this.g && this.g.size !== 0) {
      for (let i of this.g.values()) i.cancel();
      this.g.clear();
    }
  };
  function Ql(i) {
    if (i.h != null) return i.i.concat(i.h.D);
    if (i.g != null && i.g.size !== 0) {
      let c = i.i;
      for (let h of i.g.values()) c = c.concat(h.D);
      return c;
    }
    return I(i.i);
  }
  function o6(i) {
    if (i.V && typeof i.V == "function") return i.V();
    if (
      (typeof Map < "u" && i instanceof Map) ||
      (typeof Set < "u" && i instanceof Set)
    )
      return Array.from(i.values());
    if (typeof i == "string") return i.split("");
    if (v(i)) {
      for (var c = [], h = i.length, u = 0; u < h; u++) c.push(i[u]);
      return c;
    }
    (c = []), (h = 0);
    for (u in i) c[h++] = i[u];
    return c;
  }
  function s6(i) {
    if (i.na && typeof i.na == "function") return i.na();
    if (!i.V || typeof i.V != "function") {
      if (typeof Map < "u" && i instanceof Map) return Array.from(i.keys());
      if (!(typeof Set < "u" && i instanceof Set)) {
        if (v(i) || typeof i == "string") {
          var c = [];
          i = i.length;
          for (var h = 0; h < i; h++) c.push(h);
          return c;
        }
        (c = []), (h = 0);
        for (let u in i) c[h++] = u;
        return c;
      }
    }
  }
  function Yl(i, c) {
    if (i.forEach && typeof i.forEach == "function") i.forEach(c, void 0);
    else if (v(i) || typeof i == "string")
      Array.prototype.forEach.call(i, c, void 0);
    else
      for (var h = s6(i), u = o6(i), V = u.length, _ = 0; _ < V; _++)
        c.call(void 0, u[_], h && h[_], i);
  }
  var Jl = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function i6(i, c) {
    if (i) {
      i = i.split("&");
      for (var h = 0; h < i.length; h++) {
        var u = i[h].indexOf("="),
          V = null;
        if (0 <= u) {
          var _ = i[h].substring(0, u);
          V = i[h].substring(u + 1);
        } else _ = i[h];
        c(_, V ? decodeURIComponent(V.replace(/\+/g, " ")) : "");
      }
    }
  }
  function Ce(i) {
    if (
      ((this.g = this.o = this.j = ""),
      (this.s = null),
      (this.m = this.l = ""),
      (this.h = !1),
      i instanceof Ce)
    ) {
      (this.h = i.h),
        Dn(this, i.j),
        (this.o = i.o),
        (this.g = i.g),
        Pn(this, i.s),
        (this.l = i.l);
      var c = i.i,
        h = new r0();
      (h.i = c.i),
        c.g && ((h.g = new Map(c.g)), (h.h = c.h)),
        Xl(this, h),
        (this.m = i.m);
    } else
      i && (c = String(i).match(Jl))
        ? ((this.h = !1),
          Dn(this, c[1] || "", !0),
          (this.o = e0(c[2] || "")),
          (this.g = e0(c[3] || "", !0)),
          Pn(this, c[4]),
          (this.l = e0(c[5] || "", !0)),
          Xl(this, c[6] || "", !0),
          (this.m = e0(c[7] || "")))
        : ((this.h = !1), (this.i = new r0(null, this.h)));
  }
  Ce.prototype.toString = function () {
    var i = [],
      c = this.j;
    c && i.push(n0(c, tc, !0), ":");
    var h = this.g;
    return (
      (h || c == "file") &&
        (i.push("//"),
        (c = this.o) && i.push(n0(c, tc, !0), "@"),
        i.push(
          encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (h = this.s),
        h != null && i.push(":", String(h))),
      (h = this.l) &&
        (this.g && h.charAt(0) != "/" && i.push("/"),
        i.push(n0(h, h.charAt(0) == "/" ? c6 : l6, !0))),
      (h = this.i.toString()) && i.push("?", h),
      (h = this.m) && i.push("#", n0(h, v6)),
      i.join("")
    );
  };
  function Tt(i) {
    return new Ce(i);
  }
  function Dn(i, c, h) {
    (i.j = h ? e0(c, !0) : c), i.j && (i.j = i.j.replace(/:$/, ""));
  }
  function Pn(i, c) {
    if (c) {
      if (((c = Number(c)), isNaN(c) || 0 > c))
        throw Error("Bad port number " + c);
      i.s = c;
    } else i.s = null;
  }
  function Xl(i, c, h) {
    c instanceof r0
      ? ((i.i = c), d6(i.i, i.h))
      : (h || (c = n0(c, h6)), (i.i = new r0(c, i.h)));
  }
  function g1(i, c, h) {
    i.i.set(c, h);
  }
  function Rn(i) {
    return (
      g1(
        i,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      i
    );
  }
  function e0(i, c) {
    return i
      ? c
        ? decodeURI(i.replace(/%25/g, "%2525"))
        : decodeURIComponent(i)
      : "";
  }
  function n0(i, c, h) {
    return typeof i == "string"
      ? ((i = encodeURI(i).replace(c, a6)),
        h && (i = i.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        i)
      : null;
  }
  function a6(i) {
    return (
      (i = i.charCodeAt(0)),
      "%" + ((i >> 4) & 15).toString(16) + (i & 15).toString(16)
    );
  }
  var tc = /[#\/\?@]/g,
    l6 = /[#\?:]/g,
    c6 = /[#\?]/g,
    h6 = /[#\?@]/g,
    v6 = /#/g;
  function r0(i, c) {
    (this.h = this.g = null), (this.i = i || null), (this.j = !!c);
  }
  function te(i) {
    i.g ||
      ((i.g = new Map()),
      (i.h = 0),
      i.i &&
        i6(i.i, function (c, h) {
          i.add(decodeURIComponent(c.replace(/\+/g, " ")), h);
        }));
  }
  (n = r0.prototype),
    (n.add = function (i, c) {
      te(this), (this.i = null), (i = Ge(this, i));
      var h = this.g.get(i);
      return h || this.g.set(i, (h = [])), h.push(c), (this.h += 1), this;
    });
  function ec(i, c) {
    te(i),
      (c = Ge(i, c)),
      i.g.has(c) && ((i.i = null), (i.h -= i.g.get(c).length), i.g.delete(c));
  }
  function nc(i, c) {
    return te(i), (c = Ge(i, c)), i.g.has(c);
  }
  (n.forEach = function (i, c) {
    te(this),
      this.g.forEach(function (h, u) {
        h.forEach(function (V) {
          i.call(c, V, u, this);
        }, this);
      }, this);
  }),
    (n.na = function () {
      te(this);
      let i = Array.from(this.g.values()),
        c = Array.from(this.g.keys()),
        h = [];
      for (let u = 0; u < c.length; u++) {
        let V = i[u];
        for (let _ = 0; _ < V.length; _++) h.push(c[u]);
      }
      return h;
    }),
    (n.V = function (i) {
      te(this);
      let c = [];
      if (typeof i == "string")
        nc(this, i) && (c = c.concat(this.g.get(Ge(this, i))));
      else {
        i = Array.from(this.g.values());
        for (let h = 0; h < i.length; h++) c = c.concat(i[h]);
      }
      return c;
    }),
    (n.set = function (i, c) {
      return (
        te(this),
        (this.i = null),
        (i = Ge(this, i)),
        nc(this, i) && (this.h -= this.g.get(i).length),
        this.g.set(i, [c]),
        (this.h += 1),
        this
      );
    }),
    (n.get = function (i, c) {
      return i ? ((i = this.V(i)), 0 < i.length ? String(i[0]) : c) : c;
    });
  function rc(i, c, h) {
    ec(i, c),
      0 < h.length &&
        ((i.i = null), i.g.set(Ge(i, c), I(h)), (i.h += h.length));
  }
  n.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    let i = [],
      c = Array.from(this.g.keys());
    for (var h = 0; h < c.length; h++) {
      var u = c[h];
      let _ = encodeURIComponent(String(u)),
        k = this.V(u);
      for (u = 0; u < k.length; u++) {
        var V = _;
        k[u] !== "" && (V += "=" + encodeURIComponent(String(k[u]))), i.push(V);
      }
    }
    return (this.i = i.join("&"));
  };
  function Ge(i, c) {
    return (c = String(c)), i.j && (c = c.toLowerCase()), c;
  }
  function d6(i, c) {
    c &&
      !i.j &&
      (te(i),
      (i.i = null),
      i.g.forEach(function (h, u) {
        var V = u.toLowerCase();
        u != V && (ec(this, u), rc(this, V, h));
      }, i)),
      (i.j = c);
  }
  function u6(i, c) {
    let h = new X2();
    if (l.Image) {
      let u = new Image();
      (u.onload = H(ee, h, "TestLoadImage: loaded", !0, c, u)),
        (u.onerror = H(ee, h, "TestLoadImage: error", !1, c, u)),
        (u.onabort = H(ee, h, "TestLoadImage: abort", !1, c, u)),
        (u.ontimeout = H(ee, h, "TestLoadImage: timeout", !1, c, u)),
        l.setTimeout(function () {
          u.ontimeout && u.ontimeout();
        }, 1e4),
        (u.src = i);
    } else c(!1);
  }
  function g6(i, c) {
    let h = new X2(),
      u = new AbortController(),
      V = setTimeout(() => {
        u.abort(), ee(h, "TestPingServer: timeout", !1, c);
      }, 1e4);
    fetch(i, { signal: u.signal })
      .then((_) => {
        clearTimeout(V),
          _.ok
            ? ee(h, "TestPingServer: ok", !0, c)
            : ee(h, "TestPingServer: server error", !1, c);
      })
      .catch(() => {
        clearTimeout(V), ee(h, "TestPingServer: error", !1, c);
      });
  }
  function ee(i, c, h, u, V) {
    try {
      V &&
        ((V.onload = null),
        (V.onerror = null),
        (V.onabort = null),
        (V.ontimeout = null)),
        u(h);
    } catch {}
  }
  function p6() {
    this.g = new Yv();
  }
  function m6(i, c, h) {
    let u = h || "";
    try {
      Yl(i, function (V, _) {
        let k = V;
        d(V) && (k = Qo(V)), c.push(u + _ + "=" + encodeURIComponent(k));
      });
    } catch (V) {
      throw (c.push(u + "type=" + encodeURIComponent("_badmap")), V);
    }
  }
  function o0(i) {
    (this.l = i.Ub || null), (this.j = i.eb || !1);
  }
  E(o0, Yo),
    (o0.prototype.g = function () {
      return new On(this.l, this.j);
    }),
    (o0.prototype.i = (function (i) {
      return function () {
        return i;
      };
    })({}));
  function On(i, c) {
    O1.call(this),
      (this.D = i),
      (this.o = c),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = "GET"),
      (this.A = ""),
      (this.g = !1),
      (this.v = this.j = this.l = null);
  }
  E(On, O1),
    (n = On.prototype),
    (n.open = function (i, c) {
      if (this.readyState != 0)
        throw (this.abort(), Error("Error reopening a connection"));
      (this.B = i), (this.A = c), (this.readyState = 1), i0(this);
    }),
    (n.send = function (i) {
      if (this.readyState != 1)
        throw (this.abort(), Error("need to call open() first. "));
      this.g = !0;
      let c = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      i && (c.body = i),
        (this.D || l)
          .fetch(new Request(this.A, c))
          .then(this.Sa.bind(this), this.ga.bind(this));
    }),
    (n.abort = function () {
      (this.response = this.responseText = ""),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel("Request was aborted.").catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), s0(this)),
        (this.readyState = 0);
    }),
    (n.Sa = function (i) {
      if (
        this.g &&
        ((this.l = i),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = i.headers),
          (this.readyState = 2),
          i0(this)),
        this.g && ((this.readyState = 3), i0(this), this.g))
      )
        if (this.responseType === "arraybuffer")
          i.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof l.ReadableStream < "u" && "body" in i) {
          if (((this.j = i.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            (this.response = this.responseText = ""),
              (this.v = new TextDecoder());
          oc(this);
        } else i.text().then(this.Ra.bind(this), this.ga.bind(this));
    });
  function oc(i) {
    i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i));
  }
  (n.Pa = function (i) {
    if (this.g) {
      if (this.o && i.value) this.response.push(i.value);
      else if (!this.o) {
        var c = i.value ? i.value : new Uint8Array(0);
        (c = this.v.decode(c, { stream: !i.done })) &&
          (this.response = this.responseText += c);
      }
      i.done ? s0(this) : i0(this), this.readyState == 3 && oc(this);
    }
  }),
    (n.Ra = function (i) {
      this.g && ((this.response = this.responseText = i), s0(this));
    }),
    (n.Qa = function (i) {
      this.g && ((this.response = i), s0(this));
    }),
    (n.ga = function () {
      this.g && s0(this);
    });
  function s0(i) {
    (i.readyState = 4), (i.l = null), (i.j = null), (i.v = null), i0(i);
  }
  (n.setRequestHeader = function (i, c) {
    this.u.append(i, c);
  }),
    (n.getResponseHeader = function (i) {
      return (this.h && this.h.get(i.toLowerCase())) || "";
    }),
    (n.getAllResponseHeaders = function () {
      if (!this.h) return "";
      let i = [],
        c = this.h.entries();
      for (var h = c.next(); !h.done; )
        (h = h.value), i.push(h[0] + ": " + h[1]), (h = c.next());
      return i.join(`\r
`);
    });
  function i0(i) {
    i.onreadystatechange && i.onreadystatechange.call(i);
  }
  Object.defineProperty(On.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (i) {
      this.m = i ? "include" : "same-origin";
    },
  });
  function sc(i) {
    let c = "";
    return (
      u1(i, function (h, u) {
        (c += u),
          (c += ":"),
          (c += h),
          (c += `\r
`);
      }),
      c
    );
  }
  function a5(i, c, h) {
    t: {
      for (u in h) {
        var u = !1;
        break t;
      }
      u = !0;
    }
    u ||
      ((h = sc(h)),
      typeof i == "string"
        ? h != null && encodeURIComponent(String(h))
        : g1(i, c, h));
  }
  function f1(i) {
    O1.call(this),
      (this.headers = new Map()),
      (this.o = i || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ""),
      (this.m = 0),
      (this.l = ""),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ""),
      (this.J = !1);
  }
  E(f1, O1);
  var w6 = /^https?$/i,
    f6 = ["POST", "PUT"];
  (n = f1.prototype),
    (n.Ha = function (i) {
      this.J = i;
    }),
    (n.ea = function (i, c, h, u) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.D +
            "; newUri=" +
            i
        );
      (c = c ? c.toUpperCase() : "GET"),
        (this.D = i),
        (this.l = ""),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : t5.g()),
        (this.v = this.o ? Il(this.o) : Il(t5)),
        (this.g.onreadystatechange = z(this.Ea, this));
      try {
        (this.B = !0), this.g.open(c, String(i), !0), (this.B = !1);
      } catch (_) {
        ic(this, _);
        return;
      }
      if (((i = h || ""), (h = new Map(this.headers)), u))
        if (Object.getPrototypeOf(u) === Object.prototype)
          for (var V in u) h.set(V, u[V]);
        else if (typeof u.keys == "function" && typeof u.get == "function")
          for (let _ of u.keys()) h.set(_, u.get(_));
        else throw Error("Unknown input type for opt_headers: " + String(u));
      (u = Array.from(h.keys()).find((_) => _.toLowerCase() == "content-type")),
        (V = l.FormData && i instanceof l.FormData),
        !(0 <= Array.prototype.indexOf.call(f6, c, void 0)) ||
          u ||
          V ||
          h.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8"
          );
      for (let [_, k] of h) this.g.setRequestHeader(_, k);
      this.H && (this.g.responseType = this.H),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J);
      try {
        cc(this), (this.u = !0), this.g.send(i), (this.u = !1);
      } catch (_) {
        ic(this, _);
      }
    });
  function ic(i, c) {
    (i.h = !1),
      i.g && ((i.j = !0), i.g.abort(), (i.j = !1)),
      (i.l = c),
      (i.m = 5),
      ac(i),
      Nn(i);
  }
  function ac(i) {
    i.A || ((i.A = !0), W1(i, "complete"), W1(i, "error"));
  }
  (n.abort = function (i) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = i || 7),
      W1(this, "complete"),
      W1(this, "abort"),
      Nn(this));
  }),
    (n.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Nn(this, !0)),
        f1.aa.N.call(this);
    }),
    (n.Ea = function () {
      this.s || (this.B || this.u || this.j ? lc(this) : this.bb());
    }),
    (n.bb = function () {
      lc(this);
    });
  function lc(i) {
    if (i.h && typeof a < "u" && (!i.v[1] || Dt(i) != 4 || i.Z() != 2)) {
      if (i.u && Dt(i) == 4) Bl(i.Ea, 0, i);
      else if ((W1(i, "readystatechange"), Dt(i) == 4)) {
        i.h = !1;
        try {
          let k = i.Z();
          t: switch (k) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var c = !0;
              break t;
            default:
              c = !1;
          }
          var h;
          if (!(h = c)) {
            var u;
            if ((u = k === 0)) {
              var V = String(i.D).match(Jl)[1] || null;
              !V &&
                l.self &&
                l.self.location &&
                (V = l.self.location.protocol.slice(0, -1)),
                (u = !w6.test(V ? V.toLowerCase() : ""));
            }
            h = u;
          }
          if (h) W1(i, "complete"), W1(i, "success");
          else {
            i.m = 6;
            try {
              var _ = 2 < Dt(i) ? i.g.statusText : "";
            } catch {
              _ = "";
            }
            (i.l = _ + " [" + i.Z() + "]"), ac(i);
          }
        } finally {
          Nn(i);
        }
      }
    }
  }
  function Nn(i, c) {
    if (i.g) {
      cc(i);
      let h = i.g,
        u = i.v[0] ? () => {} : null;
      (i.g = null), (i.v = null), c || W1(i, "ready");
      try {
        h.onreadystatechange = u;
      } catch {}
    }
  }
  function cc(i) {
    i.I && (l.clearTimeout(i.I), (i.I = null));
  }
  n.isActive = function () {
    return !!this.g;
  };
  function Dt(i) {
    return i.g ? i.g.readyState : 0;
  }
  (n.Z = function () {
    try {
      return 2 < Dt(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (n.oa = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch {
        return "";
      }
    }),
    (n.Oa = function (i) {
      if (this.g) {
        var c = this.g.responseText;
        return i && c.indexOf(i) == 0 && (c = c.substring(i.length)), Qv(c);
      }
    });
  function hc(i) {
    try {
      if (!i.g) return null;
      if ("response" in i.g) return i.g.response;
      switch (i.H) {
        case "":
        case "text":
          return i.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in i.g)
            return i.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function x6(i) {
    let c = {};
    i = ((i.g && 2 <= Dt(i) && i.g.getAllResponseHeaders()) || "").split(`\r
`);
    for (let u = 0; u < i.length; u++) {
      if (G(i[u])) continue;
      var h = M(i[u]);
      let V = h[0];
      if (((h = h[1]), typeof h != "string")) continue;
      h = h.trim();
      let _ = c[V] || [];
      (c[V] = _), _.push(h);
    }
    C(c, function (u) {
      return u.join(", ");
    });
  }
  (n.Ba = function () {
    return this.m;
  }),
    (n.Ka = function () {
      return typeof this.l == "string" ? this.l : String(this.l);
    });
  function a0(i, c, h) {
    return (h && h.internalChannelParams && h.internalChannelParams[i]) || c;
  }
  function vc(i) {
    (this.Aa = 0),
      (this.i = []),
      (this.j = new X2()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = a0("failFast", !1, i)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = a0("baseRetryDelayMs", 5e3, i)),
      (this.cb = a0("retryDelaySeedMs", 1e4, i)),
      (this.Wa = a0("forwardChannelMaxRetries", 2, i)),
      (this.wa = a0("forwardChannelRequestTimeoutMs", 2e4, i)),
      (this.pa = (i && i.xmlHttpFactory) || void 0),
      (this.Xa = (i && i.Tb) || void 0),
      (this.Ca = (i && i.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (i && i.supportsCrossDomainXhr) || !1),
      (this.K = ""),
      (this.h = new ql(i && i.concurrentRequestLimit)),
      (this.Da = new p6()),
      (this.P = (i && i.fastHandshake) || !1),
      (this.O = (i && i.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (i && i.Rb) || !1),
      i && i.xa && this.j.xa(),
      i && i.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && i && i.detectBufferingProxy) || !1),
      (this.ja = void 0),
      i &&
        i.longPollingTimeout &&
        0 < i.longPollingTimeout &&
        (this.ja = i.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null);
  }
  (n = vc.prototype),
    (n.la = 8),
    (n.G = 1),
    (n.connect = function (i, c, h, u) {
      K1(0),
        (this.W = i),
        (this.H = c || {}),
        h && u !== void 0 && ((this.H.OSID = h), (this.H.OAID = u)),
        (this.F = this.X),
        (this.I = zc(this, null, this.W)),
        Zn(this);
    });
  function l5(i) {
    if ((dc(i), i.G == 3)) {
      var c = i.U++,
        h = Tt(i.I);
      if (
        (g1(h, "SID", i.K),
        g1(h, "RID", c),
        g1(h, "TYPE", "terminate"),
        l0(i, h),
        (c = new Xt(i, i.j, c)),
        (c.L = 2),
        (c.v = Rn(Tt(h))),
        (h = !1),
        l.navigator && l.navigator.sendBeacon)
      )
        try {
          h = l.navigator.sendBeacon(c.v.toString(), "");
        } catch {}
      !h && l.Image && ((new Image().src = c.v), (h = !0)),
        h || ((c.g = Mc(c.j, null)), c.g.ea(c.v)),
        (c.F = Date.now()),
        Tn(c);
    }
    xc(i);
  }
  function Fn(i) {
    i.g && (h5(i), i.g.cancel(), (i.g = null));
  }
  function dc(i) {
    Fn(i),
      i.u && (l.clearTimeout(i.u), (i.u = null)),
      jn(i),
      i.h.cancel(),
      i.s && (typeof i.s == "number" && l.clearTimeout(i.s), (i.s = null));
  }
  function Zn(i) {
    if (!Gl(i.h) && !i.s) {
      i.s = !0;
      var c = i.Ga;
      $2 || yl(), q2 || ($2(), (q2 = !0)), Fo.add(c, i), (i.B = 0);
    }
  }
  function z6(i, c) {
    return Wl(i.h) >= i.h.j - (i.s ? 1 : 0)
      ? !1
      : i.s
      ? ((i.i = c.D.concat(i.i)), !0)
      : i.G == 1 || i.G == 2 || i.B >= (i.Va ? 0 : i.Wa)
      ? !1
      : ((i.s = J2(z(i.Ga, i, c), fc(i, i.B))), i.B++, !0);
  }
  n.Ga = function (i) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!i) {
          (this.U = Math.floor(1e5 * Math.random())), (i = this.U++);
          let V = new Xt(this, this.j, i),
            _ = this.o;
          if (
            (this.S && (_ ? ((_ = p(_)), x(_, this.S)) : (_ = this.S)),
            this.m !== null || this.O || ((V.H = _), (_ = null)),
            this.P)
          )
            t: {
              for (var c = 0, h = 0; h < this.i.length; h++) {
                e: {
                  var u = this.i[h];
                  if (
                    "__data__" in u.map &&
                    ((u = u.map.__data__), typeof u == "string")
                  ) {
                    u = u.length;
                    break e;
                  }
                  u = void 0;
                }
                if (u === void 0) break;
                if (((c += u), 4096 < c)) {
                  c = h;
                  break t;
                }
                if (c === 4096 || h === this.i.length - 1) {
                  c = h + 1;
                  break t;
                }
              }
              c = 1e3;
            }
          else c = 1e3;
          (c = gc(this, V, c)),
            (h = Tt(this.I)),
            g1(h, "RID", i),
            g1(h, "CVER", 22),
            this.D && g1(h, "X-HTTP-Session-Id", this.D),
            l0(this, h),
            _ &&
              (this.O
                ? (c = "headers=" + encodeURIComponent(String(sc(_))) + "&" + c)
                : this.m && a5(h, this.m, _)),
            i5(this.h, V),
            this.Ua && g1(h, "TYPE", "init"),
            this.P
              ? (g1(h, "$req", c),
                g1(h, "SID", "null"),
                (V.T = !0),
                n5(V, h, null))
              : n5(V, h, c),
            (this.G = 2);
        }
      } else
        this.G == 3 &&
          (i ? uc(this, i) : this.i.length == 0 || Gl(this.h) || uc(this));
  };
  function uc(i, c) {
    var h;
    c ? (h = c.l) : (h = i.U++);
    let u = Tt(i.I);
    g1(u, "SID", i.K),
      g1(u, "RID", h),
      g1(u, "AID", i.T),
      l0(i, u),
      i.m && i.o && a5(u, i.m, i.o),
      (h = new Xt(i, i.j, h, i.B + 1)),
      i.m === null && (h.H = i.o),
      c && (i.i = c.D.concat(i.i)),
      (c = gc(i, h, 1e3)),
      (h.I = Math.round(0.5 * i.wa) + Math.round(0.5 * i.wa * Math.random())),
      i5(i.h, h),
      n5(h, u, c);
  }
  function l0(i, c) {
    i.H &&
      u1(i.H, function (h, u) {
        g1(c, u, h);
      }),
      i.l &&
        Yl({}, function (h, u) {
          g1(c, u, h);
        });
  }
  function gc(i, c, h) {
    h = Math.min(i.i.length, h);
    var u = i.l ? z(i.l.Na, i.l, i) : null;
    t: {
      var V = i.i;
      let _ = -1;
      for (;;) {
        let k = ["count=" + h];
        _ == -1
          ? 0 < h
            ? ((_ = V[0].g), k.push("ofs=" + _))
            : (_ = 0)
          : k.push("ofs=" + _);
        let v1 = !0;
        for (let T1 = 0; T1 < h; T1++) {
          let e1 = V[T1].g,
            N1 = V[T1].map;
          if (((e1 -= _), 0 > e1)) (_ = Math.max(0, V[T1].g - 100)), (v1 = !1);
          else
            try {
              m6(N1, k, "req" + e1 + "_");
            } catch {
              u && u(N1);
            }
        }
        if (v1) {
          u = k.join("&");
          break t;
        }
      }
    }
    return (i = i.i.splice(0, h)), (c.D = i), u;
  }
  function pc(i) {
    if (!i.g && !i.u) {
      i.Y = 1;
      var c = i.Fa;
      $2 || yl(), q2 || ($2(), (q2 = !0)), Fo.add(c, i), (i.v = 0);
    }
  }
  function c5(i) {
    return i.g || i.u || 3 <= i.v
      ? !1
      : (i.Y++, (i.u = J2(z(i.Fa, i), fc(i, i.v))), i.v++, !0);
  }
  (n.Fa = function () {
    if (
      ((this.u = null),
      mc(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var i = 2 * this.R;
      this.j.info("BP detection timer enabled: " + i),
        (this.A = J2(z(this.ab, this), i));
    }
  }),
    (n.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        (this.F = !1),
        (this.M = !0),
        K1(10),
        Fn(this),
        mc(this));
    });
  function h5(i) {
    i.A != null && (l.clearTimeout(i.A), (i.A = null));
  }
  function mc(i) {
    (i.g = new Xt(i, i.j, "rpc", i.Y)),
      i.m === null && (i.g.H = i.o),
      (i.g.O = 0);
    var c = Tt(i.qa);
    g1(c, "RID", "rpc"),
      g1(c, "SID", i.K),
      g1(c, "AID", i.T),
      g1(c, "CI", i.F ? "0" : "1"),
      !i.F && i.ja && g1(c, "TO", i.ja),
      g1(c, "TYPE", "xmlhttp"),
      l0(i, c),
      i.m && i.o && a5(c, i.m, i.o),
      i.L && (i.g.I = i.L);
    var h = i.g;
    (i = i.ia),
      (h.L = 1),
      (h.v = Rn(Tt(c))),
      (h.m = null),
      (h.P = !0),
      jl(h, i);
  }
  n.Za = function () {
    this.C != null && ((this.C = null), Fn(this), c5(this), K1(19));
  };
  function jn(i) {
    i.C != null && (l.clearTimeout(i.C), (i.C = null));
  }
  function wc(i, c) {
    var h = null;
    if (i.g == c) {
      jn(i), h5(i), (i.g = null);
      var u = 2;
    } else if (s5(i.h, c)) (h = c.D), Kl(i.h, c), (u = 1);
    else return;
    if (i.G != 0) {
      if (c.o)
        if (u == 1) {
          (h = c.m ? c.m.length : 0), (c = Date.now() - c.F);
          var V = i.B;
          (u = kn()), W1(u, new Ol(u, h)), Zn(i);
        } else pc(i);
      else if (
        ((V = c.s),
        V == 3 ||
          (V == 0 && 0 < c.X) ||
          !((u == 1 && z6(i, c)) || (u == 2 && c5(i))))
      )
        switch ((h && 0 < h.length && ((c = i.h), (c.i = c.i.concat(h))), V)) {
          case 1:
            Ve(i, 5);
            break;
          case 4:
            Ve(i, 10);
            break;
          case 3:
            Ve(i, 6);
            break;
          default:
            Ve(i, 2);
        }
    }
  }
  function fc(i, c) {
    let h = i.Ta + Math.floor(Math.random() * i.cb);
    return i.isActive() || (h *= 2), h * c;
  }
  function Ve(i, c) {
    if ((i.j.info("Error code " + c), c == 2)) {
      var h = z(i.fb, i),
        u = i.Xa;
      let V = !u;
      (u = new Ce(u || "//www.google.com/images/cleardot.gif")),
        (l.location && l.location.protocol == "http") || Dn(u, "https"),
        Rn(u),
        V ? u6(u.toString(), h) : g6(u.toString(), h);
    } else K1(2);
    (i.G = 0), i.l && i.l.sa(c), xc(i), dc(i);
  }
  n.fb = function (i) {
    i
      ? (this.j.info("Successfully pinged google.com"), K1(2))
      : (this.j.info("Failed to ping google.com"), K1(1));
  };
  function xc(i) {
    if (((i.G = 0), (i.ka = []), i.l)) {
      let c = Ql(i.h);
      (c.length != 0 || i.i.length != 0) &&
        (S(i.ka, c),
        S(i.ka, i.i),
        (i.h.i.length = 0),
        I(i.i),
        (i.i.length = 0)),
        i.l.ra();
    }
  }
  function zc(i, c, h) {
    var u = h instanceof Ce ? Tt(h) : new Ce(h);
    if (u.g != "") c && (u.g = c + "." + u.g), Pn(u, u.s);
    else {
      var V = l.location;
      (u = V.protocol),
        (c = c ? c + "." + V.hostname : V.hostname),
        (V = +V.port);
      var _ = new Ce(null);
      u && Dn(_, u), c && (_.g = c), V && Pn(_, V), h && (_.l = h), (u = _);
    }
    return (
      (h = i.D),
      (c = i.ya),
      h && c && g1(u, h, c),
      g1(u, "VER", i.la),
      l0(i, u),
      u
    );
  }
  function Mc(i, c, h) {
    if (c && !i.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (c = i.Ca && !i.pa ? new f1(new o0({ eb: h })) : new f1(i.pa)),
      c.Ha(i.J),
      c
    );
  }
  n.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function Cc() {}
  (n = Cc.prototype),
    (n.ua = function () {}),
    (n.ta = function () {}),
    (n.sa = function () {}),
    (n.ra = function () {}),
    (n.isActive = function () {
      return !0;
    }),
    (n.Na = function () {});
  function Un() {}
  Un.prototype.g = function (i, c) {
    return new X1(i, c);
  };
  function X1(i, c) {
    O1.call(this),
      (this.g = new vc(c)),
      (this.l = i),
      (this.h = (c && c.messageUrlParams) || null),
      (i = (c && c.messageHeaders) || null),
      c &&
        c.clientProtocolHeaderRequired &&
        (i
          ? (i["X-Client-Protocol"] = "webchannel")
          : (i = { "X-Client-Protocol": "webchannel" })),
      (this.g.o = i),
      (i = (c && c.initMessageHeaders) || null),
      c &&
        c.messageContentType &&
        (i
          ? (i["X-WebChannel-Content-Type"] = c.messageContentType)
          : (i = { "X-WebChannel-Content-Type": c.messageContentType })),
      c &&
        c.va &&
        (i
          ? (i["X-WebChannel-Client-Profile"] = c.va)
          : (i = { "X-WebChannel-Client-Profile": c.va })),
      (this.g.S = i),
      (i = c && c.Sb) && !G(i) && (this.g.m = i),
      (this.v = (c && c.supportsCrossDomainXhr) || !1),
      (this.u = (c && c.sendRawJson) || !1),
      (c = c && c.httpSessionIdParam) &&
        !G(c) &&
        ((this.g.D = c),
        (i = this.h),
        i !== null && c in i && ((i = this.h), c in i && delete i[c])),
      (this.j = new We(this));
  }
  E(X1, O1),
    (X1.prototype.m = function () {
      (this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0);
    }),
    (X1.prototype.close = function () {
      l5(this.g);
    }),
    (X1.prototype.o = function (i) {
      var c = this.g;
      if (typeof i == "string") {
        var h = {};
        (h.__data__ = i), (i = h);
      } else this.u && ((h = {}), (h.__data__ = Qo(i)), (i = h));
      c.i.push(new r6(c.Ya++, i)), c.G == 3 && Zn(c);
    }),
    (X1.prototype.N = function () {
      (this.g.l = null),
        delete this.j,
        l5(this.g),
        delete this.g,
        X1.aa.N.call(this);
    });
  function Vc(i) {
    Jo.call(this),
      i.__headers__ &&
        ((this.headers = i.__headers__),
        (this.statusCode = i.__status__),
        delete i.__headers__,
        delete i.__status__);
    var c = i.__sm__;
    if (c) {
      t: {
        for (let h in c) {
          i = h;
          break t;
        }
        i = void 0;
      }
      (this.i = i) &&
        ((i = this.i), (c = c !== null && i in c ? c[i] : void 0)),
        (this.data = c);
    } else this.data = i;
  }
  E(Vc, Jo);
  function yc() {
    Xo.call(this), (this.status = 1);
  }
  E(yc, Xo);
  function We(i) {
    this.g = i;
  }
  E(We, Cc),
    (We.prototype.ua = function () {
      W1(this.g, "a");
    }),
    (We.prototype.ta = function (i) {
      W1(this.g, new Vc(i));
    }),
    (We.prototype.sa = function (i) {
      W1(this.g, new yc());
    }),
    (We.prototype.ra = function () {
      W1(this.g, "b");
    }),
    (Un.prototype.createWebChannel = Un.prototype.g),
    (X1.prototype.send = X1.prototype.o),
    (X1.prototype.open = X1.prototype.m),
    (X1.prototype.close = X1.prototype.close),
    (Ys = Gt.createWebChannelTransport =
      function () {
        return new Un();
      }),
    (Qs = Gt.getStatEventTarget =
      function () {
        return kn();
      }),
    (Ks = Gt.Event = ze),
    ($r = Gt.Stat =
      {
        mb: 0,
        pb: 1,
        qb: 2,
        Jb: 3,
        Ob: 4,
        Lb: 5,
        Mb: 6,
        Kb: 7,
        Ib: 8,
        Nb: 9,
        PROXY: 10,
        NOPROXY: 11,
        Gb: 12,
        Cb: 13,
        Db: 14,
        Bb: 15,
        Eb: 16,
        Fb: 17,
        ib: 18,
        hb: 19,
        jb: 20,
      }),
    (En.NO_ERROR = 0),
    (En.TIMEOUT = 8),
    (En.HTTP_ERROR = 6),
    (J0 = Gt.ErrorCode = En),
    (Nl.COMPLETE = "complete"),
    (Ws = Gt.EventType = Nl),
    (Tl.EventType = Q2),
    (Q2.OPEN = "a"),
    (Q2.CLOSE = "b"),
    (Q2.ERROR = "c"),
    (Q2.MESSAGE = "d"),
    (O1.prototype.listen = O1.prototype.K),
    (w2 = Gt.WebChannel = Tl),
    (Gs = Gt.FetchXmlHttpFactory = o0),
    (f1.prototype.listenOnce = f1.prototype.L),
    (f1.prototype.getLastError = f1.prototype.Ka),
    (f1.prototype.getLastErrorCode = f1.prototype.Ba),
    (f1.prototype.getStatus = f1.prototype.Z),
    (f1.prototype.getResponseJson = f1.prototype.Oa),
    (f1.prototype.getResponseText = f1.prototype.oa),
    (f1.prototype.send = f1.prototype.ea),
    (f1.prototype.setWithCredentials = f1.prototype.Ha),
    (qs = Gt.XhrIo = f1);
}).apply(
  typeof Ur < "u"
    ? Ur
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
var Y3 = "@firebase/firestore";
var I1 = class {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
};
(I1.UNAUTHENTICATED = new I1(null)),
  (I1.GOOGLE_CREDENTIALS = new I1("google-credentials-uid")),
  (I1.FIRST_PARTY = new I1("first-party-uid")),
  (I1.MOCK_USER = new I1("mock-user"));
var O2 = "10.12.5";
var Ee = new m2("@firebase/firestore");
function X0() {
  return Ee.logLevel;
}
function D(n, ...t) {
  if (Ee.logLevel <= X.DEBUG) {
    let e = t.map(Pa);
    Ee.debug(`Firestore (${O2}): ${n}`, ...e);
  }
}
function Kt(n, ...t) {
  if (Ee.logLevel <= X.ERROR) {
    let e = t.map(Pa);
    Ee.error(`Firestore (${O2}): ${n}`, ...e);
  }
}
function _2(n, ...t) {
  if (Ee.logLevel <= X.WARN) {
    let e = t.map(Pa);
    Ee.warn(`Firestore (${O2}): ${n}`, ...e);
  }
}
function Pa(n) {
  if (typeof n == "string") return n;
  try {
    return (function (e) {
      return JSON.stringify(e);
    })(n);
  } catch {
    return n;
  }
}
function N(n = "Unexpected state") {
  let t = `FIRESTORE (${O2}) INTERNAL ASSERTION FAILED: ` + n;
  throw (Kt(t), new Error(t));
}
function d1(n, t) {
  n || N();
}
function Z(n, t) {
  return n;
}
var A = {
    OK: "ok",
    CANCELLED: "cancelled",
    UNKNOWN: "unknown",
    INVALID_ARGUMENT: "invalid-argument",
    DEADLINE_EXCEEDED: "deadline-exceeded",
    NOT_FOUND: "not-found",
    ALREADY_EXISTS: "already-exists",
    PERMISSION_DENIED: "permission-denied",
    UNAUTHENTICATED: "unauthenticated",
    RESOURCE_EXHAUSTED: "resource-exhausted",
    FAILED_PRECONDITION: "failed-precondition",
    ABORTED: "aborted",
    OUT_OF_RANGE: "out-of-range",
    UNIMPLEMENTED: "unimplemented",
    INTERNAL: "internal",
    UNAVAILABLE: "unavailable",
    DATA_LOSS: "data-loss",
  },
  P = class extends Ut {
    constructor(t, e) {
      super(t, e),
        (this.code = t),
        (this.message = e),
        (this.toString = () =>
          `${this.name}: [code=${this.code}]: ${this.message}`);
    }
  };
var Lt = class {
  constructor() {
    this.promise = new Promise((t, e) => {
      (this.resolve = t), (this.reject = e);
    });
  }
};
var Qr = class {
    constructor(t, e) {
      (this.user = e),
        (this.type = "OAuth"),
        (this.headers = new Map()),
        this.headers.set("Authorization", `Bearer ${t}`);
    }
  },
  ni = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {}
    start(t, e) {
      t.enqueueRetryable(() => e(I1.UNAUTHENTICATED));
    }
    shutdown() {}
  },
  ri = class {
    constructor(t) {
      (this.token = t), (this.changeListener = null);
    }
    getToken() {
      return Promise.resolve(this.token);
    }
    invalidateToken() {}
    start(t, e) {
      (this.changeListener = e), t.enqueueRetryable(() => e(this.token.user));
    }
    shutdown() {
      this.changeListener = null;
    }
  },
  oi = class {
    constructor(t) {
      (this.t = t),
        (this.currentUser = I1.UNAUTHENTICATED),
        (this.i = 0),
        (this.forceRefresh = !1),
        (this.auth = null);
    }
    start(t, e) {
      let r = this.i,
        o = (v) => (this.i !== r ? ((r = this.i), e(v)) : Promise.resolve()),
        s = new Lt();
      this.o = () => {
        this.i++,
          (this.currentUser = this.u()),
          s.resolve(),
          (s = new Lt()),
          t.enqueueRetryable(() => o(this.currentUser));
      };
      let a = () => {
          let v = s;
          t.enqueueRetryable(() =>
            L(this, null, function* () {
              yield v.promise, yield o(this.currentUser);
            })
          );
        },
        l = (v) => {
          D("FirebaseAuthCredentialsProvider", "Auth detected"),
            (this.auth = v),
            this.auth.addAuthTokenListener(this.o),
            a();
        };
      this.t.onInit((v) => l(v)),
        setTimeout(() => {
          if (!this.auth) {
            let v = this.t.getImmediate({ optional: !0 });
            v
              ? l(v)
              : (D("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
                s.resolve(),
                (s = new Lt()));
          }
        }, 0),
        a();
    }
    getToken() {
      let t = this.i,
        e = this.forceRefresh;
      return (
        (this.forceRefresh = !1),
        this.auth
          ? this.auth
              .getToken(e)
              .then((r) =>
                this.i !== t
                  ? (D(
                      "FirebaseAuthCredentialsProvider",
                      "getToken aborted due to token change."
                    ),
                    this.getToken())
                  : r
                  ? (d1(typeof r.accessToken == "string"),
                    new Qr(r.accessToken, this.currentUser))
                  : null
              )
          : Promise.resolve(null)
      );
    }
    invalidateToken() {
      this.forceRefresh = !0;
    }
    shutdown() {
      this.auth && this.auth.removeAuthTokenListener(this.o);
    }
    u() {
      let t = this.auth && this.auth.getUid();
      return d1(t === null || typeof t == "string"), new I1(t);
    }
  },
  si = class {
    constructor(t, e, r) {
      (this.l = t),
        (this.h = e),
        (this.P = r),
        (this.type = "FirstParty"),
        (this.user = I1.FIRST_PARTY),
        (this.I = new Map());
    }
    T() {
      return this.P ? this.P() : null;
    }
    get headers() {
      this.I.set("X-Goog-AuthUser", this.l);
      let t = this.T();
      return (
        t && this.I.set("Authorization", t),
        this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
        this.I
      );
    }
  },
  ii = class {
    constructor(t, e, r) {
      (this.l = t), (this.h = e), (this.P = r);
    }
    getToken() {
      return Promise.resolve(new si(this.l, this.h, this.P));
    }
    start(t, e) {
      t.enqueueRetryable(() => e(I1.FIRST_PARTY));
    }
    shutdown() {}
    invalidateToken() {}
  },
  ai = class {
    constructor(t) {
      (this.value = t),
        (this.type = "AppCheck"),
        (this.headers = new Map()),
        t &&
          t.length > 0 &&
          this.headers.set("x-firebase-appcheck", this.value);
    }
  },
  li = class {
    constructor(t) {
      (this.A = t),
        (this.forceRefresh = !1),
        (this.appCheck = null),
        (this.R = null);
    }
    start(t, e) {
      let r = (s) => {
        s.error != null &&
          D(
            "FirebaseAppCheckTokenProvider",
            `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
          );
        let a = s.token !== this.R;
        return (
          (this.R = s.token),
          D(
            "FirebaseAppCheckTokenProvider",
            `Received ${a ? "new" : "existing"} token.`
          ),
          a ? e(s.token) : Promise.resolve()
        );
      };
      this.o = (s) => {
        t.enqueueRetryable(() => r(s));
      };
      let o = (s) => {
        D("FirebaseAppCheckTokenProvider", "AppCheck detected"),
          (this.appCheck = s),
          this.appCheck.addTokenListener(this.o);
      };
      this.A.onInit((s) => o(s)),
        setTimeout(() => {
          if (!this.appCheck) {
            let s = this.A.getImmediate({ optional: !0 });
            s
              ? o(s)
              : D("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
          }
        }, 0);
    }
    getToken() {
      let t = this.forceRefresh;
      return (
        (this.forceRefresh = !1),
        this.appCheck
          ? this.appCheck
              .getToken(t)
              .then((e) =>
                e
                  ? (d1(typeof e.token == "string"),
                    (this.R = e.token),
                    new ai(e.token))
                  : null
              )
          : Promise.resolve(null)
      );
    }
    invalidateToken() {
      this.forceRefresh = !0;
    }
    shutdown() {
      this.appCheck && this.appCheck.removeTokenListener(this.o);
    }
  };
function yu(n) {
  let t = typeof self < "u" && (self.crypto || self.msCrypto),
    e = new Uint8Array(n);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(e);
  else for (let r = 0; r < n; r++) e[r] = Math.floor(256 * Math.random());
  return e;
}
var Yr = class {
  static newId() {
    let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      e = Math.floor(256 / t.length) * t.length,
      r = "";
    for (; r.length < 20; ) {
      let o = yu(40);
      for (let s = 0; s < o.length; ++s)
        r.length < 20 && o[s] < e && (r += t.charAt(o[s] % t.length));
    }
    return r;
  }
};
function r1(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
function H2(n, t, e) {
  return n.length === t.length && n.every((r, o) => e(r, t[o]));
}
var P1 = class n {
  constructor(t, e) {
    if (((this.seconds = t), (this.nanoseconds = e), e < 0))
      throw new P(
        A.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + e
      );
    if (e >= 1e9)
      throw new P(
        A.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + e
      );
    if (t < -62135596800)
      throw new P(A.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800)
      throw new P(A.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  static now() {
    return n.fromMillis(Date.now());
  }
  static fromDate(t) {
    return n.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    let e = Math.floor(t / 1e3),
      r = Math.floor(1e6 * (t - 1e3 * e));
    return new n(e, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? r1(this.nanoseconds, t.nanoseconds)
      : r1(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    let t = this.seconds - -62135596800;
    return (
      String(t).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
};
var q = class n {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new n(t);
  }
  static min() {
    return new n(new P1(0, 0));
  }
  static max() {
    return new n(new P1(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var Jr = class n {
    constructor(t, e, r) {
      e === void 0 ? (e = 0) : e > t.length && N(),
        r === void 0 ? (r = t.length - e) : r > t.length - e && N(),
        (this.segments = t),
        (this.offset = e),
        (this.len = r);
    }
    get length() {
      return this.len;
    }
    isEqual(t) {
      return n.comparator(this, t) === 0;
    }
    child(t) {
      let e = this.segments.slice(this.offset, this.limit());
      return (
        t instanceof n
          ? t.forEach((r) => {
              e.push(r);
            })
          : e.push(t),
        this.construct(e)
      );
    }
    limit() {
      return this.offset + this.length;
    }
    popFirst(t) {
      return (
        (t = t === void 0 ? 1 : t),
        this.construct(this.segments, this.offset + t, this.length - t)
      );
    }
    popLast() {
      return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
      return this.segments[this.offset];
    }
    lastSegment() {
      return this.get(this.length - 1);
    }
    get(t) {
      return this.segments[this.offset + t];
    }
    isEmpty() {
      return this.length === 0;
    }
    isPrefixOf(t) {
      if (t.length < this.length) return !1;
      for (let e = 0; e < this.length; e++)
        if (this.get(e) !== t.get(e)) return !1;
      return !0;
    }
    isImmediateParentOf(t) {
      if (this.length + 1 !== t.length) return !1;
      for (let e = 0; e < this.length; e++)
        if (this.get(e) !== t.get(e)) return !1;
      return !0;
    }
    forEach(t) {
      for (let e = this.offset, r = this.limit(); e < r; e++)
        t(this.segments[e]);
    }
    toArray() {
      return this.segments.slice(this.offset, this.limit());
    }
    static comparator(t, e) {
      let r = Math.min(t.length, e.length);
      for (let o = 0; o < r; o++) {
        let s = t.get(o),
          a = e.get(o);
        if (s < a) return -1;
        if (s > a) return 1;
      }
      return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }
  },
  M1 = class n extends Jr {
    construct(t, e, r) {
      return new n(t, e, r);
    }
    canonicalString() {
      return this.toArray().join("/");
    }
    toString() {
      return this.canonicalString();
    }
    toUriEncodedString() {
      return this.toArray().map(encodeURIComponent).join("/");
    }
    static fromString(...t) {
      let e = [];
      for (let r of t) {
        if (r.indexOf("//") >= 0)
          throw new P(
            A.INVALID_ARGUMENT,
            `Invalid segment (${r}). Paths must not contain // in them.`
          );
        e.push(...r.split("/").filter((o) => o.length > 0));
      }
      return new n(e);
    }
    static emptyPath() {
      return new n([]);
    }
  },
  _u = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
  ot = class n extends Jr {
    construct(t, e, r) {
      return new n(t, e, r);
    }
    static isValidIdentifier(t) {
      return _u.test(t);
    }
    canonicalString() {
      return this.toArray()
        .map(
          (t) => (
            (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
            n.isValidIdentifier(t) || (t = "`" + t + "`"),
            t
          )
        )
        .join(".");
    }
    toString() {
      return this.canonicalString();
    }
    isKeyField() {
      return this.length === 1 && this.get(0) === "__name__";
    }
    static keyField() {
      return new n(["__name__"]);
    }
    static fromServerFormat(t) {
      let e = [],
        r = "",
        o = 0,
        s = () => {
          if (r.length === 0)
            throw new P(
              A.INVALID_ARGUMENT,
              `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
            );
          e.push(r), (r = "");
        },
        a = !1;
      for (; o < t.length; ) {
        let l = t[o];
        if (l === "\\") {
          if (o + 1 === t.length)
            throw new P(
              A.INVALID_ARGUMENT,
              "Path has trailing escape character: " + t
            );
          let v = t[o + 1];
          if (v !== "\\" && v !== "." && v !== "`")
            throw new P(
              A.INVALID_ARGUMENT,
              "Path has invalid escape sequence: " + t
            );
          (r += v), (o += 2);
        } else
          l === "`"
            ? ((a = !a), o++)
            : l !== "." || a
            ? ((r += l), o++)
            : (s(), o++);
      }
      if ((s(), a))
        throw new P(A.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
      return new n(e);
    }
    static emptyPath() {
      return new n([]);
    }
  };
var R = class n {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new n(M1.fromString(t));
  }
  static fromName(t) {
    return new n(M1.fromString(t).popFirst(5));
  }
  static empty() {
    return new n(M1.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && M1.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, e) {
    return M1.comparator(t.path, e.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new n(new M1(t.slice()));
  }
};
var ci = class {
  constructor(t, e, r, o) {
    (this.indexId = t),
      (this.collectionGroup = e),
      (this.fields = r),
      (this.indexState = o);
  }
};
ci.UNKNOWN_ID = -1;
function Hu(n, t) {
  let e = n.toTimestamp().seconds,
    r = n.toTimestamp().nanoseconds + 1,
    o = q.fromTimestamp(r === 1e9 ? new P1(e + 1, 0) : new P1(e, r));
  return new Ie(o, R.empty(), t);
}
function Lu(n) {
  return new Ie(n.readTime, n.key, -1);
}
var Ie = class n {
  constructor(t, e, r) {
    (this.readTime = t), (this.documentKey = e), (this.largestBatchId = r);
  }
  static min() {
    return new n(q.min(), R.empty(), -1);
  }
  static max() {
    return new n(q.max(), R.empty(), -1);
  }
};
function Au(n, t) {
  let e = n.readTime.compareTo(t.readTime);
  return e !== 0
    ? e
    : ((e = R.comparator(n.documentKey, t.documentKey)),
      e !== 0 ? e : r1(n.largestBatchId, t.largestBatchId));
}
var bu =
    "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
  hi = class {
    constructor() {
      this.onCommittedListeners = [];
    }
    addOnCommittedListener(t) {
      this.onCommittedListeners.push(t);
    }
    raiseOnCommittedEvent() {
      this.onCommittedListeners.forEach((t) => t());
    }
  };
function wn(n) {
  return L(this, null, function* () {
    if (n.code !== A.FAILED_PRECONDITION || n.message !== bu) throw n;
    D("LocalStore", "Unexpectedly lost primary lease");
  });
}
var b = class n {
  constructor(t) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      t(
        (e) => {
          (this.isDone = !0),
            (this.result = e),
            this.nextCallback && this.nextCallback(e);
        },
        (e) => {
          (this.isDone = !0),
            (this.error = e),
            this.catchCallback && this.catchCallback(e);
        }
      );
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, e) {
    return (
      this.callbackAttached && N(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(e, this.error)
          : this.wrapSuccess(t, this.result)
        : new n((r, o) => {
            (this.nextCallback = (s) => {
              this.wrapSuccess(t, s).next(r, o);
            }),
              (this.catchCallback = (s) => {
                this.wrapFailure(e, s).next(r, o);
              });
          })
    );
  }
  toPromise() {
    return new Promise((t, e) => {
      this.next(t, e);
    });
  }
  wrapUserFunction(t) {
    try {
      let e = t();
      return e instanceof n ? e : n.resolve(e);
    } catch (e) {
      return n.reject(e);
    }
  }
  wrapSuccess(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : n.resolve(e);
  }
  wrapFailure(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : n.reject(e);
  }
  static resolve(t) {
    return new n((e, r) => {
      e(t);
    });
  }
  static reject(t) {
    return new n((e, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new n((e, r) => {
      let o = 0,
        s = 0,
        a = !1;
      t.forEach((l) => {
        ++o,
          l.next(
            () => {
              ++s, a && s === o && e();
            },
            (v) => r(v)
          );
      }),
        (a = !0),
        s === o && e();
    });
  }
  static or(t) {
    let e = n.resolve(!1);
    for (let r of t) e = e.next((o) => (o ? n.resolve(o) : r()));
    return e;
  }
  static forEach(t, e) {
    let r = [];
    return (
      t.forEach((o, s) => {
        r.push(e.call(this, o, s));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(t, e) {
    return new n((r, o) => {
      let s = t.length,
        a = new Array(s),
        l = 0;
      for (let v = 0; v < s; v++) {
        let d = v;
        e(t[d]).next(
          (g) => {
            (a[d] = g), ++l, l === s && r(a);
          },
          (g) => o(g)
        );
      }
    });
  }
  static doWhile(t, e) {
    return new n((r, o) => {
      let s = () => {
        t() === !0
          ? e().next(() => {
              s();
            }, o)
          : r();
      };
      s();
    });
  }
};
function Bu(n) {
  let t = n.match(/Android ([\d.]+)/i),
    e = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(e);
}
function fn(n) {
  return n.name === "IndexedDbTransactionError";
}
var Hh = (() => {
  class n {
    constructor(e, r) {
      (this.previousValue = e),
        r &&
          ((r.sequenceNumberHandler = (o) => this.ie(o)),
          (this.se = (o) => r.writeSequenceNumber(o)));
    }
    ie(e) {
      return (
        (this.previousValue = Math.max(e, this.previousValue)),
        this.previousValue
      );
    }
    next() {
      let e = ++this.previousValue;
      return this.se && this.se(e), e;
    }
  }
  return (n.oe = -1), n;
})();
function Ho(n) {
  return n == null;
}
function sn(n) {
  return n === 0 && 1 / n == -1 / 0;
}
function Su(n) {
  return (
    typeof n == "number" &&
    Number.isInteger(n) &&
    !sn(n) &&
    n <= Number.MAX_SAFE_INTEGER &&
    n >= Number.MIN_SAFE_INTEGER
  );
}
var ku = [
    "mutationQueues",
    "mutations",
    "documentMutations",
    "remoteDocuments",
    "targets",
    "owner",
    "targetGlobal",
    "targetDocuments",
    "clientMetadata",
    "remoteDocumentGlobal",
    "collectionParents",
    "bundles",
    "namedQueries",
  ],
  bf = [...ku, "documentOverlays"],
  Eu = [
    "mutationQueues",
    "mutations",
    "documentMutations",
    "remoteDocumentsV14",
    "targets",
    "owner",
    "targetGlobal",
    "targetDocuments",
    "clientMetadata",
    "remoteDocumentGlobal",
    "collectionParents",
    "bundles",
    "namedQueries",
    "documentOverlays",
  ],
  Iu = Eu,
  Tu = [...Iu, "indexConfiguration", "indexState", "indexEntries"];
var Bf = [...Tu, "globals"];
function J3(n) {
  let t = 0;
  for (let e in n) Object.prototype.hasOwnProperty.call(n, e) && t++;
  return t;
}
function Fe(n, t) {
  for (let e in n) Object.prototype.hasOwnProperty.call(n, e) && t(e, n[e]);
}
function Lh(n) {
  for (let t in n) if (Object.prototype.hasOwnProperty.call(n, t)) return !1;
  return !0;
}
var C1 = class n {
    constructor(t, e) {
      (this.comparator = t), (this.root = e || At.EMPTY);
    }
    insert(t, e) {
      return new n(
        this.comparator,
        this.root
          .insert(t, e, this.comparator)
          .copy(null, null, At.BLACK, null, null)
      );
    }
    remove(t) {
      return new n(
        this.comparator,
        this.root
          .remove(t, this.comparator)
          .copy(null, null, At.BLACK, null, null)
      );
    }
    get(t) {
      let e = this.root;
      for (; !e.isEmpty(); ) {
        let r = this.comparator(t, e.key);
        if (r === 0) return e.value;
        r < 0 ? (e = e.left) : r > 0 && (e = e.right);
      }
      return null;
    }
    indexOf(t) {
      let e = 0,
        r = this.root;
      for (; !r.isEmpty(); ) {
        let o = this.comparator(t, r.key);
        if (o === 0) return e + r.left.size;
        o < 0 ? (r = r.left) : ((e += r.left.size + 1), (r = r.right));
      }
      return -1;
    }
    isEmpty() {
      return this.root.isEmpty();
    }
    get size() {
      return this.root.size;
    }
    minKey() {
      return this.root.minKey();
    }
    maxKey() {
      return this.root.maxKey();
    }
    inorderTraversal(t) {
      return this.root.inorderTraversal(t);
    }
    forEach(t) {
      this.inorderTraversal((e, r) => (t(e, r), !1));
    }
    toString() {
      let t = [];
      return (
        this.inorderTraversal((e, r) => (t.push(`${e}:${r}`), !1)),
        `{${t.join(", ")}}`
      );
    }
    reverseTraversal(t) {
      return this.root.reverseTraversal(t);
    }
    getIterator() {
      return new M2(this.root, null, this.comparator, !1);
    }
    getIteratorFrom(t) {
      return new M2(this.root, t, this.comparator, !1);
    }
    getReverseIterator() {
      return new M2(this.root, null, this.comparator, !0);
    }
    getReverseIteratorFrom(t) {
      return new M2(this.root, t, this.comparator, !0);
    }
  },
  M2 = class {
    constructor(t, e, r, o) {
      (this.isReverse = o), (this.nodeStack = []);
      let s = 1;
      for (; !t.isEmpty(); )
        if (((s = e ? r(t.key, e) : 1), e && o && (s *= -1), s < 0))
          t = this.isReverse ? t.left : t.right;
        else {
          if (s === 0) {
            this.nodeStack.push(t);
            break;
          }
          this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
        }
    }
    getNext() {
      let t = this.nodeStack.pop(),
        e = { key: t.key, value: t.value };
      if (this.isReverse)
        for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
      else
        for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
      return e;
    }
    hasNext() {
      return this.nodeStack.length > 0;
    }
    peek() {
      if (this.nodeStack.length === 0) return null;
      let t = this.nodeStack[this.nodeStack.length - 1];
      return { key: t.key, value: t.value };
    }
  },
  At = class n {
    constructor(t, e, r, o, s) {
      (this.key = t),
        (this.value = e),
        (this.color = r ?? n.RED),
        (this.left = o ?? n.EMPTY),
        (this.right = s ?? n.EMPTY),
        (this.size = this.left.size + 1 + this.right.size);
    }
    copy(t, e, r, o, s) {
      return new n(
        t ?? this.key,
        e ?? this.value,
        r ?? this.color,
        o ?? this.left,
        s ?? this.right
      );
    }
    isEmpty() {
      return !1;
    }
    inorderTraversal(t) {
      return (
        this.left.inorderTraversal(t) ||
        t(this.key, this.value) ||
        this.right.inorderTraversal(t)
      );
    }
    reverseTraversal(t) {
      return (
        this.right.reverseTraversal(t) ||
        t(this.key, this.value) ||
        this.left.reverseTraversal(t)
      );
    }
    min() {
      return this.left.isEmpty() ? this : this.left.min();
    }
    minKey() {
      return this.min().key;
    }
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    insert(t, e, r) {
      let o = this,
        s = r(t, o.key);
      return (
        (o =
          s < 0
            ? o.copy(null, null, null, o.left.insert(t, e, r), null)
            : s === 0
            ? o.copy(null, e, null, null, null)
            : o.copy(null, null, null, null, o.right.insert(t, e, r))),
        o.fixUp()
      );
    }
    removeMin() {
      if (this.left.isEmpty()) return n.EMPTY;
      let t = this;
      return (
        t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
        (t = t.copy(null, null, null, t.left.removeMin(), null)),
        t.fixUp()
      );
    }
    remove(t, e) {
      let r,
        o = this;
      if (e(t, o.key) < 0)
        o.left.isEmpty() ||
          o.left.isRed() ||
          o.left.left.isRed() ||
          (o = o.moveRedLeft()),
          (o = o.copy(null, null, null, o.left.remove(t, e), null));
      else {
        if (
          (o.left.isRed() && (o = o.rotateRight()),
          o.right.isEmpty() ||
            o.right.isRed() ||
            o.right.left.isRed() ||
            (o = o.moveRedRight()),
          e(t, o.key) === 0)
        ) {
          if (o.right.isEmpty()) return n.EMPTY;
          (r = o.right.min()),
            (o = o.copy(r.key, r.value, null, null, o.right.removeMin()));
        }
        o = o.copy(null, null, null, null, o.right.remove(t, e));
      }
      return o.fixUp();
    }
    isRed() {
      return this.color;
    }
    fixUp() {
      let t = this;
      return (
        t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
        t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
        t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
        t
      );
    }
    moveRedLeft() {
      let t = this.colorFlip();
      return (
        t.right.left.isRed() &&
          ((t = t.copy(null, null, null, null, t.right.rotateRight())),
          (t = t.rotateLeft()),
          (t = t.colorFlip())),
        t
      );
    }
    moveRedRight() {
      let t = this.colorFlip();
      return (
        t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
      );
    }
    rotateLeft() {
      let t = this.copy(null, null, n.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, t, null);
    }
    rotateRight() {
      let t = this.copy(null, null, n.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, t);
    }
    colorFlip() {
      let t = this.left.copy(null, null, !this.left.color, null, null),
        e = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, t, e);
    }
    checkMaxDepth() {
      let t = this.check();
      return Math.pow(2, t) <= this.size + 1;
    }
    check() {
      if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw N();
      let t = this.left.check();
      if (t !== this.right.check()) throw N();
      return t + (this.isRed() ? 0 : 1);
    }
  };
(At.EMPTY = null), (At.RED = !0), (At.BLACK = !1);
At.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw N();
  }
  get value() {
    throw N();
  }
  get color() {
    throw N();
  }
  get left() {
    throw N();
  }
  get right() {
    throw N();
  }
  copy(t, e, r, o, s) {
    return this;
  }
  insert(t, e, r) {
    return new At(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
var q1 = class n {
    constructor(t) {
      (this.comparator = t), (this.data = new C1(this.comparator));
    }
    has(t) {
      return this.data.get(t) !== null;
    }
    first() {
      return this.data.minKey();
    }
    last() {
      return this.data.maxKey();
    }
    get size() {
      return this.data.size;
    }
    indexOf(t) {
      return this.data.indexOf(t);
    }
    forEach(t) {
      this.data.inorderTraversal((e, r) => (t(e), !1));
    }
    forEachInRange(t, e) {
      let r = this.data.getIteratorFrom(t[0]);
      for (; r.hasNext(); ) {
        let o = r.getNext();
        if (this.comparator(o.key, t[1]) >= 0) return;
        e(o.key);
      }
    }
    forEachWhile(t, e) {
      let r;
      for (
        r =
          e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator();
        r.hasNext();

      )
        if (!t(r.getNext().key)) return;
    }
    firstAfterOrEqual(t) {
      let e = this.data.getIteratorFrom(t);
      return e.hasNext() ? e.getNext().key : null;
    }
    getIterator() {
      return new Xr(this.data.getIterator());
    }
    getIteratorFrom(t) {
      return new Xr(this.data.getIteratorFrom(t));
    }
    add(t) {
      return this.copy(this.data.remove(t).insert(t, !0));
    }
    delete(t) {
      return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }
    isEmpty() {
      return this.data.isEmpty();
    }
    unionWith(t) {
      let e = this;
      return (
        e.size < t.size && ((e = t), (t = this)),
        t.forEach((r) => {
          e = e.add(r);
        }),
        e
      );
    }
    isEqual(t) {
      if (!(t instanceof n) || this.size !== t.size) return !1;
      let e = this.data.getIterator(),
        r = t.data.getIterator();
      for (; e.hasNext(); ) {
        let o = e.getNext().key,
          s = r.getNext().key;
        if (this.comparator(o, s) !== 0) return !1;
      }
      return !0;
    }
    toArray() {
      let t = [];
      return (
        this.forEach((e) => {
          t.push(e);
        }),
        t
      );
    }
    toString() {
      let t = [];
      return this.forEach((e) => t.push(e)), "SortedSet(" + t.toString() + ")";
    }
    copy(t) {
      let e = new n(this.comparator);
      return (e.data = t), e;
    }
  },
  Xr = class {
    constructor(t) {
      this.iter = t;
    }
    getNext() {
      return this.iter.getNext().key;
    }
    hasNext() {
      return this.iter.hasNext();
    }
  };
var ht = class n {
  constructor(t) {
    (this.fields = t), t.sort(ot.comparator);
  }
  static empty() {
    return new n([]);
  }
  unionWith(t) {
    let e = new q1(ot.comparator);
    for (let r of this.fields) e = e.add(r);
    for (let r of t) e = e.add(r);
    return new n(e.toArray());
  }
  covers(t) {
    for (let e of this.fields) if (e.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return H2(this.fields, t.fields, (e, r) => e.isEqual(r));
  }
};
var to = class extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
};
var G1 = class n {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    let e = (function (o) {
      try {
        return atob(o);
      } catch (s) {
        throw typeof DOMException < "u" && s instanceof DOMException
          ? new to("Invalid base64 string: " + s)
          : s;
      }
    })(t);
    return new n(e);
  }
  static fromUint8Array(t) {
    let e = (function (o) {
      let s = "";
      for (let a = 0; a < o.length; ++a) s += String.fromCharCode(o[a]);
      return s;
    })(t);
    return new n(e);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(t++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (e) {
      return btoa(e);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (e) {
      let r = new Uint8Array(e.length);
      for (let o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return r1(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
};
G1.EMPTY_BYTE_STRING = new G1("");
var Du = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function Qt(n) {
  if ((d1(!!n), typeof n == "string")) {
    let t = 0,
      e = Du.exec(n);
    if ((d1(!!e), e[1])) {
      let o = e[1];
      (o = (o + "000000000").substr(0, 9)), (t = Number(o));
    }
    let r = new Date(n);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: z1(n.seconds), nanos: z1(n.nanos) };
}
function z1(n) {
  return typeof n == "number" ? n : typeof n == "string" ? Number(n) : 0;
}
function me(n) {
  return typeof n == "string" ? G1.fromBase64String(n) : G1.fromUint8Array(n);
}
function Ra(n) {
  var t, e;
  return (
    ((e = (
      ((t = n?.mapValue) === null || t === void 0 ? void 0 : t.fields) || {}
    ).__type__) === null || e === void 0
      ? void 0
      : e.stringValue) === "server_timestamp"
  );
}
function Oa(n) {
  let t = n.mapValue.fields.__previous_value__;
  return Ra(t) ? Oa(t) : t;
}
function an(n) {
  let t = Qt(n.mapValue.fields.__local_write_time__.timestampValue);
  return new P1(t.seconds, t.nanos);
}
var vi = class {
    constructor(t, e, r, o, s, a, l, v, d) {
      (this.databaseId = t),
        (this.appId = e),
        (this.persistenceKey = r),
        (this.host = o),
        (this.ssl = s),
        (this.forceLongPolling = a),
        (this.autoDetectLongPolling = l),
        (this.longPollingOptions = v),
        (this.useFetchStreams = d);
    }
  },
  eo = class n {
    constructor(t, e) {
      (this.projectId = t), (this.database = e || "(default)");
    }
    static empty() {
      return new n("", "");
    }
    get isDefaultDatabase() {
      return this.database === "(default)";
    }
    isEqual(t) {
      return (
        t instanceof n &&
        t.projectId === this.projectId &&
        t.database === this.database
      );
    }
  };
var qr = { mapValue: { fields: { __type__: { stringValue: "__max__" } } } };
function Te(n) {
  return "nullValue" in n
    ? 0
    : "booleanValue" in n
    ? 1
    : "integerValue" in n || "doubleValue" in n
    ? 2
    : "timestampValue" in n
    ? 3
    : "stringValue" in n
    ? 5
    : "bytesValue" in n
    ? 6
    : "referenceValue" in n
    ? 7
    : "geoPointValue" in n
    ? 8
    : "arrayValue" in n
    ? 9
    : "mapValue" in n
    ? Ra(n)
      ? 4
      : Ah(n)
      ? 9007199254740991
      : 10
    : N();
}
function St(n, t) {
  if (n === t) return !0;
  let e = Te(n);
  if (e !== Te(t)) return !1;
  switch (e) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === t.booleanValue;
    case 4:
      return an(n).isEqual(an(t));
    case 3:
      return (function (o, s) {
        if (
          typeof o.timestampValue == "string" &&
          typeof s.timestampValue == "string" &&
          o.timestampValue.length === s.timestampValue.length
        )
          return o.timestampValue === s.timestampValue;
        let a = Qt(o.timestampValue),
          l = Qt(s.timestampValue);
        return a.seconds === l.seconds && a.nanos === l.nanos;
      })(n, t);
    case 5:
      return n.stringValue === t.stringValue;
    case 6:
      return (function (o, s) {
        return me(o.bytesValue).isEqual(me(s.bytesValue));
      })(n, t);
    case 7:
      return n.referenceValue === t.referenceValue;
    case 8:
      return (function (o, s) {
        return (
          z1(o.geoPointValue.latitude) === z1(s.geoPointValue.latitude) &&
          z1(o.geoPointValue.longitude) === z1(s.geoPointValue.longitude)
        );
      })(n, t);
    case 2:
      return (function (o, s) {
        if ("integerValue" in o && "integerValue" in s)
          return z1(o.integerValue) === z1(s.integerValue);
        if ("doubleValue" in o && "doubleValue" in s) {
          let a = z1(o.doubleValue),
            l = z1(s.doubleValue);
          return a === l ? sn(a) === sn(l) : isNaN(a) && isNaN(l);
        }
        return !1;
      })(n, t);
    case 9:
      return H2(n.arrayValue.values || [], t.arrayValue.values || [], St);
    case 10:
      return (function (o, s) {
        let a = o.mapValue.fields || {},
          l = s.mapValue.fields || {};
        if (J3(a) !== J3(l)) return !1;
        for (let v in a)
          if (a.hasOwnProperty(v) && (l[v] === void 0 || !St(a[v], l[v])))
            return !1;
        return !0;
      })(n, t);
    default:
      return N();
  }
}
function ln(n, t) {
  return (n.values || []).find((e) => St(e, t)) !== void 0;
}
function L2(n, t) {
  if (n === t) return 0;
  let e = Te(n),
    r = Te(t);
  if (e !== r) return r1(e, r);
  switch (e) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return r1(n.booleanValue, t.booleanValue);
    case 2:
      return (function (s, a) {
        let l = z1(s.integerValue || s.doubleValue),
          v = z1(a.integerValue || a.doubleValue);
        return l < v
          ? -1
          : l > v
          ? 1
          : l === v
          ? 0
          : isNaN(l)
          ? isNaN(v)
            ? 0
            : -1
          : 1;
      })(n, t);
    case 3:
      return X3(n.timestampValue, t.timestampValue);
    case 4:
      return X3(an(n), an(t));
    case 5:
      return r1(n.stringValue, t.stringValue);
    case 6:
      return (function (s, a) {
        let l = me(s),
          v = me(a);
        return l.compareTo(v);
      })(n.bytesValue, t.bytesValue);
    case 7:
      return (function (s, a) {
        let l = s.split("/"),
          v = a.split("/");
        for (let d = 0; d < l.length && d < v.length; d++) {
          let g = r1(l[d], v[d]);
          if (g !== 0) return g;
        }
        return r1(l.length, v.length);
      })(n.referenceValue, t.referenceValue);
    case 8:
      return (function (s, a) {
        let l = r1(z1(s.latitude), z1(a.latitude));
        return l !== 0 ? l : r1(z1(s.longitude), z1(a.longitude));
      })(n.geoPointValue, t.geoPointValue);
    case 9:
      return (function (s, a) {
        let l = s.values || [],
          v = a.values || [];
        for (let d = 0; d < l.length && d < v.length; ++d) {
          let g = L2(l[d], v[d]);
          if (g) return g;
        }
        return r1(l.length, v.length);
      })(n.arrayValue, t.arrayValue);
    case 10:
      return (function (s, a) {
        if (s === qr.mapValue && a === qr.mapValue) return 0;
        if (s === qr.mapValue) return 1;
        if (a === qr.mapValue) return -1;
        let l = s.fields || {},
          v = Object.keys(l),
          d = a.fields || {},
          g = Object.keys(d);
        v.sort(), g.sort();
        for (let f = 0; f < v.length && f < g.length; ++f) {
          let z = r1(v[f], g[f]);
          if (z !== 0) return z;
          let H = L2(l[v[f]], d[g[f]]);
          if (H !== 0) return H;
        }
        return r1(v.length, g.length);
      })(n.mapValue, t.mapValue);
    default:
      throw N();
  }
}
function X3(n, t) {
  if (typeof n == "string" && typeof t == "string" && n.length === t.length)
    return r1(n, t);
  let e = Qt(n),
    r = Qt(t),
    o = r1(e.seconds, r.seconds);
  return o !== 0 ? o : r1(e.nanos, r.nanos);
}
function A2(n) {
  return di(n);
}
function di(n) {
  return "nullValue" in n
    ? "null"
    : "booleanValue" in n
    ? "" + n.booleanValue
    : "integerValue" in n
    ? "" + n.integerValue
    : "doubleValue" in n
    ? "" + n.doubleValue
    : "timestampValue" in n
    ? (function (e) {
        let r = Qt(e);
        return `time(${r.seconds},${r.nanos})`;
      })(n.timestampValue)
    : "stringValue" in n
    ? n.stringValue
    : "bytesValue" in n
    ? (function (e) {
        return me(e).toBase64();
      })(n.bytesValue)
    : "referenceValue" in n
    ? (function (e) {
        return R.fromName(e).toString();
      })(n.referenceValue)
    : "geoPointValue" in n
    ? (function (e) {
        return `geo(${e.latitude},${e.longitude})`;
      })(n.geoPointValue)
    : "arrayValue" in n
    ? (function (e) {
        let r = "[",
          o = !0;
        for (let s of e.values || []) o ? (o = !1) : (r += ","), (r += di(s));
        return r + "]";
      })(n.arrayValue)
    : "mapValue" in n
    ? (function (e) {
        let r = Object.keys(e.fields || {}).sort(),
          o = "{",
          s = !0;
        for (let a of r)
          s ? (s = !1) : (o += ","), (o += `${a}:${di(e.fields[a])}`);
        return o + "}";
      })(n.mapValue)
    : N();
}
function ui(n) {
  return !!n && "integerValue" in n;
}
function Na(n) {
  return !!n && "arrayValue" in n;
}
function th(n) {
  return !!n && "nullValue" in n;
}
function eh(n) {
  return !!n && "doubleValue" in n && isNaN(Number(n.doubleValue));
}
function Wr(n) {
  return !!n && "mapValue" in n;
}
function en(n) {
  if (n.geoPointValue)
    return { geoPointValue: Object.assign({}, n.geoPointValue) };
  if (n.timestampValue && typeof n.timestampValue == "object")
    return { timestampValue: Object.assign({}, n.timestampValue) };
  if (n.mapValue) {
    let t = { mapValue: { fields: {} } };
    return Fe(n.mapValue.fields, (e, r) => (t.mapValue.fields[e] = en(r))), t;
  }
  if (n.arrayValue) {
    let t = { arrayValue: { values: [] } };
    for (let e = 0; e < (n.arrayValue.values || []).length; ++e)
      t.arrayValue.values[e] = en(n.arrayValue.values[e]);
    return t;
  }
  return Object.assign({}, n);
}
function Ah(n) {
  return (
    (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
var rt = class n {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new n({ mapValue: {} });
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let e = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (((e = (e.mapValue.fields || {})[t.get(r)]), !Wr(e))) return null;
      return (e = (e.mapValue.fields || {})[t.lastSegment()]), e || null;
    }
  }
  set(t, e) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = en(e);
  }
  setAll(t) {
    let e = ot.emptyPath(),
      r = {},
      o = [];
    t.forEach((a, l) => {
      if (!e.isImmediateParentOf(l)) {
        let v = this.getFieldsMap(e);
        this.applyChanges(v, r, o), (r = {}), (o = []), (e = l.popLast());
      }
      a ? (r[l.lastSegment()] = en(a)) : o.push(l.lastSegment());
    });
    let s = this.getFieldsMap(e);
    this.applyChanges(s, r, o);
  }
  delete(t) {
    let e = this.field(t.popLast());
    Wr(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return St(this.value, t.value);
  }
  getFieldsMap(t) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = { fields: {} });
    for (let r = 0; r < t.length; ++r) {
      let o = e.mapValue.fields[t.get(r)];
      (Wr(o) && o.mapValue.fields) ||
        ((o = { mapValue: { fields: {} } }), (e.mapValue.fields[t.get(r)] = o)),
        (e = o);
    }
    return e.mapValue.fields;
  }
  applyChanges(t, e, r) {
    Fe(e, (o, s) => (t[o] = s));
    for (let o of r) delete t[o];
  }
  clone() {
    return new n(en(this.value));
  }
};
function bh(n) {
  let t = [];
  return (
    Fe(n.fields, (e, r) => {
      let o = new ot([e]);
      if (Wr(r)) {
        let s = bh(r.mapValue).fields;
        if (s.length === 0) t.push(o);
        else for (let a of s) t.push(o.child(a));
      } else t.push(o);
    }),
    new ht(t)
  );
}
var xt = class n {
  constructor(t, e, r, o, s, a, l) {
    (this.key = t),
      (this.documentType = e),
      (this.version = r),
      (this.readTime = o),
      (this.createTime = s),
      (this.data = a),
      (this.documentState = l);
  }
  static newInvalidDocument(t) {
    return new n(t, 0, q.min(), q.min(), q.min(), rt.empty(), 0);
  }
  static newFoundDocument(t, e, r, o) {
    return new n(t, 1, e, q.min(), r, o, 0);
  }
  static newNoDocument(t, e) {
    return new n(t, 2, e, q.min(), q.min(), rt.empty(), 0);
  }
  static newUnknownDocument(t, e) {
    return new n(t, 3, e, q.min(), q.min(), rt.empty(), 2);
  }
  convertToFoundDocument(t, e) {
    return (
      !this.createTime.isEqual(q.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = t),
      (this.version = t),
      (this.documentType = 1),
      (this.data = e),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = rt.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = rt.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = q.min()), this;
  }
  setReadTime(t) {
    return (this.readTime = t), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return (
      t instanceof n &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  mutableCopy() {
    return new n(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`;
  }
};
var b2 = class {
  constructor(t, e) {
    (this.position = t), (this.inclusive = e);
  }
};
function nh(n, t, e) {
  let r = 0;
  for (let o = 0; o < n.position.length; o++) {
    let s = t[o],
      a = n.position[o];
    if (
      (s.field.isKeyField()
        ? (r = R.comparator(R.fromName(a.referenceValue), e.key))
        : (r = L2(a, e.data.field(s.field))),
      s.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function rh(n, t) {
  if (n === null) return t === null;
  if (
    t === null ||
    n.inclusive !== t.inclusive ||
    n.position.length !== t.position.length
  )
    return !1;
  for (let e = 0; e < n.position.length; e++)
    if (!St(n.position[e], t.position[e])) return !1;
  return !0;
}
var B2 = class {
  constructor(t, e = "asc") {
    (this.field = t), (this.dir = e);
  }
};
function Pu(n, t) {
  return n.dir === t.dir && n.field.isEqual(t.field);
}
var no = class {},
  b1 = class n extends no {
    constructor(t, e, r) {
      super(), (this.field = t), (this.op = e), (this.value = r);
    }
    static create(t, e, r) {
      return t.isKeyField()
        ? e === "in" || e === "not-in"
          ? this.createKeyFieldInFilter(t, e, r)
          : new pi(t, e, r)
        : e === "array-contains"
        ? new fi(t, r)
        : e === "in"
        ? new xi(t, r)
        : e === "not-in"
        ? new zi(t, r)
        : e === "array-contains-any"
        ? new Mi(t, r)
        : new n(t, e, r);
    }
    static createKeyFieldInFilter(t, e, r) {
      return e === "in" ? new mi(t, r) : new wi(t, r);
    }
    matches(t) {
      let e = t.data.field(this.field);
      return this.op === "!="
        ? e !== null && this.matchesComparison(L2(e, this.value))
        : e !== null &&
            Te(this.value) === Te(e) &&
            this.matchesComparison(L2(e, this.value));
    }
    matchesComparison(t) {
      switch (this.op) {
        case "<":
          return t < 0;
        case "<=":
          return t <= 0;
        case "==":
          return t === 0;
        case "!=":
          return t !== 0;
        case ">":
          return t > 0;
        case ">=":
          return t >= 0;
        default:
          return N();
      }
    }
    isInequality() {
      return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
    }
    getFlattenedFilters() {
      return [this];
    }
    getFilters() {
      return [this];
    }
  },
  kt = class n extends no {
    constructor(t, e) {
      super(), (this.filters = t), (this.op = e), (this.ae = null);
    }
    static create(t, e) {
      return new n(t, e);
    }
    matches(t) {
      return Bh(this)
        ? this.filters.find((e) => !e.matches(t)) === void 0
        : this.filters.find((e) => e.matches(t)) !== void 0;
    }
    getFlattenedFilters() {
      return (
        this.ae !== null ||
          (this.ae = this.filters.reduce(
            (t, e) => t.concat(e.getFlattenedFilters()),
            []
          )),
        this.ae
      );
    }
    getFilters() {
      return Object.assign([], this.filters);
    }
  };
function Bh(n) {
  return n.op === "and";
}
function Sh(n) {
  return Ru(n) && Bh(n);
}
function Ru(n) {
  for (let t of n.filters) if (t instanceof kt) return !1;
  return !0;
}
function gi(n) {
  if (n instanceof b1)
    return n.field.canonicalString() + n.op.toString() + A2(n.value);
  if (Sh(n)) return n.filters.map((t) => gi(t)).join(",");
  {
    let t = n.filters.map((e) => gi(e)).join(",");
    return `${n.op}(${t})`;
  }
}
function kh(n, t) {
  return n instanceof b1
    ? (function (r, o) {
        return (
          o instanceof b1 &&
          r.op === o.op &&
          r.field.isEqual(o.field) &&
          St(r.value, o.value)
        );
      })(n, t)
    : n instanceof kt
    ? (function (r, o) {
        return o instanceof kt &&
          r.op === o.op &&
          r.filters.length === o.filters.length
          ? r.filters.reduce((s, a, l) => s && kh(a, o.filters[l]), !0)
          : !1;
      })(n, t)
    : void N();
}
function Eh(n) {
  return n instanceof b1
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${A2(e.value)}`;
      })(n)
    : n instanceof kt
    ? (function (e) {
        return e.op.toString() + " {" + e.getFilters().map(Eh).join(" ,") + "}";
      })(n)
    : "Filter";
}
var pi = class extends b1 {
    constructor(t, e, r) {
      super(t, e, r), (this.key = R.fromName(r.referenceValue));
    }
    matches(t) {
      let e = R.comparator(t.key, this.key);
      return this.matchesComparison(e);
    }
  },
  mi = class extends b1 {
    constructor(t, e) {
      super(t, "in", e), (this.keys = Ih("in", e));
    }
    matches(t) {
      return this.keys.some((e) => e.isEqual(t.key));
    }
  },
  wi = class extends b1 {
    constructor(t, e) {
      super(t, "not-in", e), (this.keys = Ih("not-in", e));
    }
    matches(t) {
      return !this.keys.some((e) => e.isEqual(t.key));
    }
  };
function Ih(n, t) {
  var e;
  return (
    ((e = t.arrayValue) === null || e === void 0 ? void 0 : e.values) || []
  ).map((r) => R.fromName(r.referenceValue));
}
var fi = class extends b1 {
    constructor(t, e) {
      super(t, "array-contains", e);
    }
    matches(t) {
      let e = t.data.field(this.field);
      return Na(e) && ln(e.arrayValue, this.value);
    }
  },
  xi = class extends b1 {
    constructor(t, e) {
      super(t, "in", e);
    }
    matches(t) {
      let e = t.data.field(this.field);
      return e !== null && ln(this.value.arrayValue, e);
    }
  },
  zi = class extends b1 {
    constructor(t, e) {
      super(t, "not-in", e);
    }
    matches(t) {
      if (ln(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
      let e = t.data.field(this.field);
      return e !== null && !ln(this.value.arrayValue, e);
    }
  },
  Mi = class extends b1 {
    constructor(t, e) {
      super(t, "array-contains-any", e);
    }
    matches(t) {
      let e = t.data.field(this.field);
      return (
        !(!Na(e) || !e.arrayValue.values) &&
        e.arrayValue.values.some((r) => ln(this.value.arrayValue, r))
      );
    }
  };
var Ci = class {
  constructor(t, e = null, r = [], o = [], s = null, a = null, l = null) {
    (this.path = t),
      (this.collectionGroup = e),
      (this.orderBy = r),
      (this.filters = o),
      (this.limit = s),
      (this.startAt = a),
      (this.endAt = l),
      (this.ue = null);
  }
};
function oh(n, t = null, e = [], r = [], o = null, s = null, a = null) {
  return new Ci(n, t, e, r, o, s, a);
}
function Fa(n) {
  let t = Z(n);
  if (t.ue === null) {
    let e = t.path.canonicalString();
    t.collectionGroup !== null && (e += "|cg:" + t.collectionGroup),
      (e += "|f:"),
      (e += t.filters.map((r) => gi(r)).join(",")),
      (e += "|ob:"),
      (e += t.orderBy
        .map((r) =>
          (function (s) {
            return s.field.canonicalString() + s.dir;
          })(r)
        )
        .join(",")),
      Ho(t.limit) || ((e += "|l:"), (e += t.limit)),
      t.startAt &&
        ((e += "|lb:"),
        (e += t.startAt.inclusive ? "b:" : "a:"),
        (e += t.startAt.position.map((r) => A2(r)).join(","))),
      t.endAt &&
        ((e += "|ub:"),
        (e += t.endAt.inclusive ? "a:" : "b:"),
        (e += t.endAt.position.map((r) => A2(r)).join(","))),
      (t.ue = e);
  }
  return t.ue;
}
function Za(n, t) {
  if (n.limit !== t.limit || n.orderBy.length !== t.orderBy.length) return !1;
  for (let e = 0; e < n.orderBy.length; e++)
    if (!Pu(n.orderBy[e], t.orderBy[e])) return !1;
  if (n.filters.length !== t.filters.length) return !1;
  for (let e = 0; e < n.filters.length; e++)
    if (!kh(n.filters[e], t.filters[e])) return !1;
  return (
    n.collectionGroup === t.collectionGroup &&
    !!n.path.isEqual(t.path) &&
    !!rh(n.startAt, t.startAt) &&
    rh(n.endAt, t.endAt)
  );
}
function Vi(n) {
  return (
    R.isDocumentKey(n.path) &&
    n.collectionGroup === null &&
    n.filters.length === 0
  );
}
var S2 = class {
  constructor(
    t,
    e = null,
    r = [],
    o = [],
    s = null,
    a = "F",
    l = null,
    v = null
  ) {
    (this.path = t),
      (this.collectionGroup = e),
      (this.explicitOrderBy = r),
      (this.filters = o),
      (this.limit = s),
      (this.limitType = a),
      (this.startAt = l),
      (this.endAt = v),
      (this.ce = null),
      (this.le = null),
      (this.he = null),
      this.startAt,
      this.endAt;
  }
};
function Ou(n, t, e, r, o, s, a, l) {
  return new S2(n, t, e, r, o, s, a, l);
}
function Th(n) {
  return new S2(n);
}
function sh(n) {
  return (
    n.filters.length === 0 &&
    n.limit === null &&
    n.startAt == null &&
    n.endAt == null &&
    (n.explicitOrderBy.length === 0 ||
      (n.explicitOrderBy.length === 1 &&
        n.explicitOrderBy[0].field.isKeyField()))
  );
}
function Nu(n) {
  return n.collectionGroup !== null;
}
function nn(n) {
  let t = Z(n);
  if (t.ce === null) {
    t.ce = [];
    let e = new Set();
    for (let s of t.explicitOrderBy)
      t.ce.push(s), e.add(s.field.canonicalString());
    let r =
      t.explicitOrderBy.length > 0
        ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
        : "asc";
    (function (a) {
      let l = new q1(ot.comparator);
      return (
        a.filters.forEach((v) => {
          v.getFlattenedFilters().forEach((d) => {
            d.isInequality() && (l = l.add(d.field));
          });
        }),
        l
      );
    })(t).forEach((s) => {
      e.has(s.canonicalString()) || s.isKeyField() || t.ce.push(new B2(s, r));
    }),
      e.has(ot.keyField().canonicalString()) ||
        t.ce.push(new B2(ot.keyField(), r));
  }
  return t.ce;
}
function bt(n) {
  let t = Z(n);
  return t.le || (t.le = Fu(t, nn(n))), t.le;
}
function Fu(n, t) {
  if (n.limitType === "F")
    return oh(
      n.path,
      n.collectionGroup,
      t,
      n.filters,
      n.limit,
      n.startAt,
      n.endAt
    );
  {
    t = t.map((o) => {
      let s = o.dir === "desc" ? "asc" : "desc";
      return new B2(o.field, s);
    });
    let e = n.endAt ? new b2(n.endAt.position, n.endAt.inclusive) : null,
      r = n.startAt ? new b2(n.startAt.position, n.startAt.inclusive) : null;
    return oh(n.path, n.collectionGroup, t, n.filters, n.limit, e, r);
  }
}
function yi(n, t, e) {
  return new S2(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    n.filters.slice(),
    t,
    e,
    n.startAt,
    n.endAt
  );
}
function Lo(n, t) {
  return Za(bt(n), bt(t)) && n.limitType === t.limitType;
}
function Dh(n) {
  return `${Fa(bt(n))}|lt:${n.limitType}`;
}
function f2(n) {
  return `Query(target=${(function (e) {
    let r = e.path.canonicalString();
    return (
      e.collectionGroup !== null &&
        (r += " collectionGroup=" + e.collectionGroup),
      e.filters.length > 0 &&
        (r += `, filters: [${e.filters.map((o) => Eh(o)).join(", ")}]`),
      Ho(e.limit) || (r += ", limit: " + e.limit),
      e.orderBy.length > 0 &&
        (r += `, orderBy: [${e.orderBy
          .map((o) =>
            (function (a) {
              return `${a.field.canonicalString()} (${a.dir})`;
            })(o)
          )
          .join(", ")}]`),
      e.startAt &&
        ((r += ", startAt: "),
        (r += e.startAt.inclusive ? "b:" : "a:"),
        (r += e.startAt.position.map((o) => A2(o)).join(","))),
      e.endAt &&
        ((r += ", endAt: "),
        (r += e.endAt.inclusive ? "a:" : "b:"),
        (r += e.endAt.position.map((o) => A2(o)).join(","))),
      `Target(${r})`
    );
  })(bt(n))}; limitType=${n.limitType})`;
}
function Ao(n, t) {
  return (
    t.isFoundDocument() &&
    (function (r, o) {
      let s = o.key.path;
      return r.collectionGroup !== null
        ? o.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
        : R.isDocumentKey(r.path)
        ? r.path.isEqual(s)
        : r.path.isImmediateParentOf(s);
    })(n, t) &&
    (function (r, o) {
      for (let s of nn(r))
        if (!s.field.isKeyField() && o.data.field(s.field) === null) return !1;
      return !0;
    })(n, t) &&
    (function (r, o) {
      for (let s of r.filters) if (!s.matches(o)) return !1;
      return !0;
    })(n, t) &&
    (function (r, o) {
      return !(
        (r.startAt &&
          !(function (a, l, v) {
            let d = nh(a, l, v);
            return a.inclusive ? d <= 0 : d < 0;
          })(r.startAt, nn(r), o)) ||
        (r.endAt &&
          !(function (a, l, v) {
            let d = nh(a, l, v);
            return a.inclusive ? d >= 0 : d > 0;
          })(r.endAt, nn(r), o))
      );
    })(n, t)
  );
}
function Zu(n) {
  return (
    n.collectionGroup ||
    (n.path.length % 2 == 1
      ? n.path.lastSegment()
      : n.path.get(n.path.length - 2))
  );
}
function Ph(n) {
  return (t, e) => {
    let r = !1;
    for (let o of nn(n)) {
      let s = ju(o, t, e);
      if (s !== 0) return s;
      r = r || o.field.isKeyField();
    }
    return 0;
  };
}
function ju(n, t, e) {
  let r = n.field.isKeyField()
    ? R.comparator(t.key, e.key)
    : (function (s, a, l) {
        let v = a.data.field(s),
          d = l.data.field(s);
        return v !== null && d !== null ? L2(v, d) : N();
      })(n.field, t, e);
  switch (n.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return N();
  }
}
var we = class {
  constructor(t, e) {
    (this.mapKeyFn = t),
      (this.equalsFn = e),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(t) {
    let e = this.mapKeyFn(t),
      r = this.inner[e];
    if (r !== void 0) {
      for (let [o, s] of r) if (this.equalsFn(o, t)) return s;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, e) {
    let r = this.mapKeyFn(t),
      o = this.inner[r];
    if (o === void 0) return (this.inner[r] = [[t, e]]), void this.innerSize++;
    for (let s = 0; s < o.length; s++)
      if (this.equalsFn(o[s][0], t)) return void (o[s] = [t, e]);
    o.push([t, e]), this.innerSize++;
  }
  delete(t) {
    let e = this.mapKeyFn(t),
      r = this.inner[e];
    if (r === void 0) return !1;
    for (let o = 0; o < r.length; o++)
      if (this.equalsFn(r[o][0], t))
        return (
          r.length === 1 ? delete this.inner[e] : r.splice(o, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(t) {
    Fe(this.inner, (e, r) => {
      for (let [o, s] of r) t(o, s);
    });
  }
  isEmpty() {
    return Lh(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var Uu = new C1(R.comparator);
function Yt() {
  return Uu;
}
var Rh = new C1(R.comparator);
function tn(...n) {
  let t = Rh;
  for (let e of n) t = t.insert(e.key, e);
  return t;
}
function Oh(n) {
  let t = Rh;
  return n.forEach((e, r) => (t = t.insert(e, r.overlayedDocument))), t;
}
function Se() {
  return rn();
}
function Nh() {
  return rn();
}
function rn() {
  return new we(
    (n) => n.toString(),
    (n, t) => n.isEqual(t)
  );
}
var $u = new C1(R.comparator),
  qu = new q1(R.comparator);
function Q(...n) {
  let t = qu;
  for (let e of n) t = t.add(e);
  return t;
}
var Gu = new q1(r1);
function Wu() {
  return Gu;
}
function Fh(n, t) {
  if (n.useProto3Json) {
    if (isNaN(t)) return { doubleValue: "NaN" };
    if (t === 1 / 0) return { doubleValue: "Infinity" };
    if (t === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: sn(t) ? "-0" : t };
}
function Zh(n) {
  return { integerValue: "" + n };
}
function Ku(n, t) {
  return Su(t) ? Zh(t) : Fh(n, t);
}
var k2 = class {
  constructor() {
    this._ = void 0;
  }
};
function Qu(n, t, e) {
  return n instanceof E2
    ? (function (o, s) {
        let a = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: o.seconds, nanos: o.nanoseconds },
            },
          },
        };
        return (
          s && Ra(s) && (s = Oa(s)),
          s && (a.fields.__previous_value__ = s),
          { mapValue: a }
        );
      })(e, t)
    : n instanceof De
    ? Uh(n, t)
    : n instanceof Pe
    ? $h(n, t)
    : (function (o, s) {
        let a = jh(o, s),
          l = ih(a) + ih(o.Pe);
        return ui(a) && ui(o.Pe) ? Zh(l) : Fh(o.serializer, l);
      })(n, t);
}
function Yu(n, t, e) {
  return n instanceof De ? Uh(n, t) : n instanceof Pe ? $h(n, t) : e;
}
function jh(n, t) {
  return n instanceof I2
    ? (function (r) {
        return (
          ui(r) ||
          (function (s) {
            return !!s && "doubleValue" in s;
          })(r)
        );
      })(t)
      ? t
      : { integerValue: 0 }
    : null;
}
var E2 = class extends k2 {},
  De = class extends k2 {
    constructor(t) {
      super(), (this.elements = t);
    }
  };
function Uh(n, t) {
  let e = qh(t);
  for (let r of n.elements) e.some((o) => St(o, r)) || e.push(r);
  return { arrayValue: { values: e } };
}
var Pe = class extends k2 {
  constructor(t) {
    super(), (this.elements = t);
  }
};
function $h(n, t) {
  let e = qh(t);
  for (let r of n.elements) e = e.filter((o) => !St(o, r));
  return { arrayValue: { values: e } };
}
var I2 = class extends k2 {
  constructor(t, e) {
    super(), (this.serializer = t), (this.Pe = e);
  }
};
function ih(n) {
  return z1(n.integerValue || n.doubleValue);
}
function qh(n) {
  return Na(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function Ju(n, t) {
  return (
    n.field.isEqual(t.field) &&
    (function (r, o) {
      return (r instanceof De && o instanceof De) ||
        (r instanceof Pe && o instanceof Pe)
        ? H2(r.elements, o.elements, St)
        : r instanceof I2 && o instanceof I2
        ? St(r.Pe, o.Pe)
        : r instanceof E2 && o instanceof E2;
    })(n.transform, t.transform)
  );
}
var _i = class {
    constructor(t, e) {
      (this.version = t), (this.transformResults = e);
    }
  },
  Wt = class n {
    constructor(t, e) {
      (this.updateTime = t), (this.exists = e);
    }
    static none() {
      return new n();
    }
    static exists(t) {
      return new n(void 0, t);
    }
    static updateTime(t) {
      return new n(t);
    }
    get isNone() {
      return this.updateTime === void 0 && this.exists === void 0;
    }
    isEqual(t) {
      return (
        this.exists === t.exists &&
        (this.updateTime
          ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
          : !t.updateTime)
      );
    }
  };
function Kr(n, t) {
  return n.updateTime !== void 0
    ? t.isFoundDocument() && t.version.isEqual(n.updateTime)
    : n.exists === void 0 || n.exists === t.isFoundDocument();
}
var T2 = class {};
function Gh(n, t) {
  if (!n.hasLocalMutations || (t && t.fields.length === 0)) return null;
  if (t === null)
    return n.isNoDocument()
      ? new cn(n.key, Wt.none())
      : new Re(n.key, n.data, Wt.none());
  {
    let e = n.data,
      r = rt.empty(),
      o = new q1(ot.comparator);
    for (let s of t.fields)
      if (!o.has(s)) {
        let a = e.field(s);
        a === null && s.length > 1 && ((s = s.popLast()), (a = e.field(s))),
          a === null ? r.delete(s) : r.set(s, a),
          (o = o.add(s));
      }
    return new Et(n.key, r, new ht(o.toArray()), Wt.none());
  }
}
function Xu(n, t, e) {
  n instanceof Re
    ? (function (o, s, a) {
        let l = o.value.clone(),
          v = lh(o.fieldTransforms, s, a.transformResults);
        l.setAll(v),
          s.convertToFoundDocument(a.version, l).setHasCommittedMutations();
      })(n, t, e)
    : n instanceof Et
    ? (function (o, s, a) {
        if (!Kr(o.precondition, s))
          return void s.convertToUnknownDocument(a.version);
        let l = lh(o.fieldTransforms, s, a.transformResults),
          v = s.data;
        v.setAll(Wh(o)),
          v.setAll(l),
          s.convertToFoundDocument(a.version, v).setHasCommittedMutations();
      })(n, t, e)
    : (function (o, s, a) {
        s.convertToNoDocument(a.version).setHasCommittedMutations();
      })(0, t, e);
}
function on(n, t, e, r) {
  return n instanceof Re
    ? (function (s, a, l, v) {
        if (!Kr(s.precondition, a)) return l;
        let d = s.value.clone(),
          g = ch(s.fieldTransforms, v, a);
        return (
          d.setAll(g),
          a.convertToFoundDocument(a.version, d).setHasLocalMutations(),
          null
        );
      })(n, t, e, r)
    : n instanceof Et
    ? (function (s, a, l, v) {
        if (!Kr(s.precondition, a)) return l;
        let d = ch(s.fieldTransforms, v, a),
          g = a.data;
        return (
          g.setAll(Wh(s)),
          g.setAll(d),
          a.convertToFoundDocument(a.version, g).setHasLocalMutations(),
          l === null
            ? null
            : l
                .unionWith(s.fieldMask.fields)
                .unionWith(s.fieldTransforms.map((f) => f.field))
        );
      })(n, t, e, r)
    : (function (s, a, l) {
        return Kr(s.precondition, a)
          ? (a.convertToNoDocument(a.version).setHasLocalMutations(), null)
          : l;
      })(n, t, e);
}
function tg(n, t) {
  let e = null;
  for (let r of n.fieldTransforms) {
    let o = t.data.field(r.field),
      s = jh(r.transform, o || null);
    s != null && (e === null && (e = rt.empty()), e.set(r.field, s));
  }
  return e || null;
}
function ah(n, t) {
  return (
    n.type === t.type &&
    !!n.key.isEqual(t.key) &&
    !!n.precondition.isEqual(t.precondition) &&
    !!(function (r, o) {
      return (
        (r === void 0 && o === void 0) ||
        (!(!r || !o) && H2(r, o, (s, a) => Ju(s, a)))
      );
    })(n.fieldTransforms, t.fieldTransforms) &&
    (n.type === 0
      ? n.value.isEqual(t.value)
      : n.type !== 1 ||
        (n.data.isEqual(t.data) && n.fieldMask.isEqual(t.fieldMask)))
  );
}
var Re = class extends T2 {
    constructor(t, e, r, o = []) {
      super(),
        (this.key = t),
        (this.value = e),
        (this.precondition = r),
        (this.fieldTransforms = o),
        (this.type = 0);
    }
    getFieldMask() {
      return null;
    }
  },
  Et = class extends T2 {
    constructor(t, e, r, o, s = []) {
      super(),
        (this.key = t),
        (this.data = e),
        (this.fieldMask = r),
        (this.precondition = o),
        (this.fieldTransforms = s),
        (this.type = 1);
    }
    getFieldMask() {
      return this.fieldMask;
    }
  };
function Wh(n) {
  let t = new Map();
  return (
    n.fieldMask.fields.forEach((e) => {
      if (!e.isEmpty()) {
        let r = n.data.field(e);
        t.set(e, r);
      }
    }),
    t
  );
}
function lh(n, t, e) {
  let r = new Map();
  d1(n.length === e.length);
  for (let o = 0; o < e.length; o++) {
    let s = n[o],
      a = s.transform,
      l = t.data.field(s.field);
    r.set(s.field, Yu(a, l, e[o]));
  }
  return r;
}
function ch(n, t, e) {
  let r = new Map();
  for (let o of n) {
    let s = o.transform,
      a = e.data.field(o.field);
    r.set(o.field, Qu(s, a, t));
  }
  return r;
}
var cn = class extends T2 {
    constructor(t, e) {
      super(),
        (this.key = t),
        (this.precondition = e),
        (this.type = 2),
        (this.fieldTransforms = []);
    }
    getFieldMask() {
      return null;
    }
  },
  Hi = class extends T2 {
    constructor(t, e) {
      super(),
        (this.key = t),
        (this.precondition = e),
        (this.type = 3),
        (this.fieldTransforms = []);
    }
    getFieldMask() {
      return null;
    }
  };
var Li = class {
    constructor(t, e, r, o) {
      (this.batchId = t),
        (this.localWriteTime = e),
        (this.baseMutations = r),
        (this.mutations = o);
    }
    applyToRemoteDocument(t, e) {
      let r = e.mutationResults;
      for (let o = 0; o < this.mutations.length; o++) {
        let s = this.mutations[o];
        s.key.isEqual(t.key) && Xu(s, t, r[o]);
      }
    }
    applyToLocalView(t, e) {
      for (let r of this.baseMutations)
        r.key.isEqual(t.key) && (e = on(r, t, e, this.localWriteTime));
      for (let r of this.mutations)
        r.key.isEqual(t.key) && (e = on(r, t, e, this.localWriteTime));
      return e;
    }
    applyToLocalDocumentSet(t, e) {
      let r = Nh();
      return (
        this.mutations.forEach((o) => {
          let s = t.get(o.key),
            a = s.overlayedDocument,
            l = this.applyToLocalView(a, s.mutatedFields);
          l = e.has(o.key) ? null : l;
          let v = Gh(a, l);
          v !== null && r.set(o.key, v),
            a.isValidDocument() || a.convertToNoDocument(q.min());
        }),
        r
      );
    }
    keys() {
      return this.mutations.reduce((t, e) => t.add(e.key), Q());
    }
    isEqual(t) {
      return (
        this.batchId === t.batchId &&
        H2(this.mutations, t.mutations, (e, r) => ah(e, r)) &&
        H2(this.baseMutations, t.baseMutations, (e, r) => ah(e, r))
      );
    }
  },
  Ai = class n {
    constructor(t, e, r, o) {
      (this.batch = t),
        (this.commitVersion = e),
        (this.mutationResults = r),
        (this.docVersions = o);
    }
    static from(t, e, r) {
      d1(t.mutations.length === r.length);
      let o = (function () {
          return $u;
        })(),
        s = t.mutations;
      for (let a = 0; a < s.length; a++) o = o.insert(s[a].key, r[a].version);
      return new n(t, e, r, o);
    }
  };
var bi = class {
  constructor(t, e) {
    (this.largestBatchId = t), (this.mutation = e);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
};
var Bi = class {
  constructor(t, e) {
    (this.count = t), (this.unchangedNames = e);
  }
};
var _1, J;
function eg(n) {
  switch (n) {
    default:
      return N();
    case A.CANCELLED:
    case A.UNKNOWN:
    case A.DEADLINE_EXCEEDED:
    case A.RESOURCE_EXHAUSTED:
    case A.INTERNAL:
    case A.UNAVAILABLE:
    case A.UNAUTHENTICATED:
      return !1;
    case A.INVALID_ARGUMENT:
    case A.NOT_FOUND:
    case A.ALREADY_EXISTS:
    case A.PERMISSION_DENIED:
    case A.FAILED_PRECONDITION:
    case A.ABORTED:
    case A.OUT_OF_RANGE:
    case A.UNIMPLEMENTED:
    case A.DATA_LOSS:
      return !0;
  }
}
function Kh(n) {
  if (n === void 0) return Kt("GRPC error has no .code"), A.UNKNOWN;
  switch (n) {
    case _1.OK:
      return A.OK;
    case _1.CANCELLED:
      return A.CANCELLED;
    case _1.UNKNOWN:
      return A.UNKNOWN;
    case _1.DEADLINE_EXCEEDED:
      return A.DEADLINE_EXCEEDED;
    case _1.RESOURCE_EXHAUSTED:
      return A.RESOURCE_EXHAUSTED;
    case _1.INTERNAL:
      return A.INTERNAL;
    case _1.UNAVAILABLE:
      return A.UNAVAILABLE;
    case _1.UNAUTHENTICATED:
      return A.UNAUTHENTICATED;
    case _1.INVALID_ARGUMENT:
      return A.INVALID_ARGUMENT;
    case _1.NOT_FOUND:
      return A.NOT_FOUND;
    case _1.ALREADY_EXISTS:
      return A.ALREADY_EXISTS;
    case _1.PERMISSION_DENIED:
      return A.PERMISSION_DENIED;
    case _1.FAILED_PRECONDITION:
      return A.FAILED_PRECONDITION;
    case _1.ABORTED:
      return A.ABORTED;
    case _1.OUT_OF_RANGE:
      return A.OUT_OF_RANGE;
    case _1.UNIMPLEMENTED:
      return A.UNIMPLEMENTED;
    case _1.DATA_LOSS:
      return A.DATA_LOSS;
    default:
      return N();
  }
}
((J = _1 || (_1 = {}))[(J.OK = 0)] = "OK"),
  (J[(J.CANCELLED = 1)] = "CANCELLED"),
  (J[(J.UNKNOWN = 2)] = "UNKNOWN"),
  (J[(J.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (J[(J.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (J[(J.NOT_FOUND = 5)] = "NOT_FOUND"),
  (J[(J.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (J[(J.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (J[(J.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (J[(J.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (J[(J.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (J[(J.ABORTED = 10)] = "ABORTED"),
  (J[(J.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (J[(J.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (J[(J.INTERNAL = 13)] = "INTERNAL"),
  (J[(J.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (J[(J.DATA_LOSS = 15)] = "DATA_LOSS");
var hh = null;
function ng() {
  return new TextEncoder();
}
var rg = new ge([4294967295, 4294967295], 0);
function vh(n) {
  let t = ng().encode(n),
    e = new $s();
  return e.update(t), new Uint8Array(e.digest());
}
function dh(n) {
  let t = new DataView(n.buffer),
    e = t.getUint32(0, !0),
    r = t.getUint32(4, !0),
    o = t.getUint32(8, !0),
    s = t.getUint32(12, !0);
  return [new ge([e, r], 0), new ge([o, s], 0)];
}
var Si = class n {
    constructor(t, e, r) {
      if (
        ((this.bitmap = t),
        (this.padding = e),
        (this.hashCount = r),
        e < 0 || e >= 8)
      )
        throw new ke(`Invalid padding: ${e}`);
      if (r < 0) throw new ke(`Invalid hash count: ${r}`);
      if (t.length > 0 && this.hashCount === 0)
        throw new ke(`Invalid hash count: ${r}`);
      if (t.length === 0 && e !== 0)
        throw new ke(`Invalid padding when bitmap length is 0: ${e}`);
      (this.Ie = 8 * t.length - e), (this.Te = ge.fromNumber(this.Ie));
    }
    Ee(t, e, r) {
      let o = t.add(e.multiply(ge.fromNumber(r)));
      return (
        o.compare(rg) === 1 && (o = new ge([o.getBits(0), o.getBits(1)], 0)),
        o.modulo(this.Te).toNumber()
      );
    }
    de(t) {
      return (this.bitmap[Math.floor(t / 8)] & (1 << t % 8)) != 0;
    }
    mightContain(t) {
      if (this.Ie === 0) return !1;
      let e = vh(t),
        [r, o] = dh(e);
      for (let s = 0; s < this.hashCount; s++) {
        let a = this.Ee(r, o, s);
        if (!this.de(a)) return !1;
      }
      return !0;
    }
    static create(t, e, r) {
      let o = t % 8 == 0 ? 0 : 8 - (t % 8),
        s = new Uint8Array(Math.ceil(t / 8)),
        a = new n(s, o, e);
      return r.forEach((l) => a.insert(l)), a;
    }
    insert(t) {
      if (this.Ie === 0) return;
      let e = vh(t),
        [r, o] = dh(e);
      for (let s = 0; s < this.hashCount; s++) {
        let a = this.Ee(r, o, s);
        this.Ae(a);
      }
    }
    Ae(t) {
      let e = Math.floor(t / 8),
        r = t % 8;
      this.bitmap[e] |= 1 << r;
    }
  },
  ke = class extends Error {
    constructor() {
      super(...arguments), (this.name = "BloomFilterError");
    }
  };
var ro = class n {
    constructor(t, e, r, o, s) {
      (this.snapshotVersion = t),
        (this.targetChanges = e),
        (this.targetMismatches = r),
        (this.documentUpdates = o),
        (this.resolvedLimboDocuments = s);
    }
    static createSynthesizedRemoteEventForCurrentChange(t, e, r) {
      let o = new Map();
      return (
        o.set(t, hn.createSynthesizedTargetChangeForCurrentChange(t, e, r)),
        new n(q.min(), o, new C1(r1), Yt(), Q())
      );
    }
  },
  hn = class n {
    constructor(t, e, r, o, s) {
      (this.resumeToken = t),
        (this.current = e),
        (this.addedDocuments = r),
        (this.modifiedDocuments = o),
        (this.removedDocuments = s);
    }
    static createSynthesizedTargetChangeForCurrentChange(t, e, r) {
      return new n(r, e, Q(), Q(), Q());
    }
  };
var V2 = class {
    constructor(t, e, r, o) {
      (this.Re = t), (this.removedTargetIds = e), (this.key = r), (this.Ve = o);
    }
  },
  oo = class {
    constructor(t, e) {
      (this.targetId = t), (this.me = e);
    }
  },
  so = class {
    constructor(t, e, r = G1.EMPTY_BYTE_STRING, o = null) {
      (this.state = t),
        (this.targetIds = e),
        (this.resumeToken = r),
        (this.cause = o);
    }
  },
  io = class {
    constructor() {
      (this.fe = 0),
        (this.ge = gh()),
        (this.pe = G1.EMPTY_BYTE_STRING),
        (this.ye = !1),
        (this.we = !0);
    }
    get current() {
      return this.ye;
    }
    get resumeToken() {
      return this.pe;
    }
    get Se() {
      return this.fe !== 0;
    }
    get be() {
      return this.we;
    }
    De(t) {
      t.approximateByteSize() > 0 && ((this.we = !0), (this.pe = t));
    }
    Ce() {
      let t = Q(),
        e = Q(),
        r = Q();
      return (
        this.ge.forEach((o, s) => {
          switch (s) {
            case 0:
              t = t.add(o);
              break;
            case 2:
              e = e.add(o);
              break;
            case 1:
              r = r.add(o);
              break;
            default:
              N();
          }
        }),
        new hn(this.pe, this.ye, t, e, r)
      );
    }
    ve() {
      (this.we = !1), (this.ge = gh());
    }
    Fe(t, e) {
      (this.we = !0), (this.ge = this.ge.insert(t, e));
    }
    Me(t) {
      (this.we = !0), (this.ge = this.ge.remove(t));
    }
    xe() {
      this.fe += 1;
    }
    Oe() {
      (this.fe -= 1), d1(this.fe >= 0);
    }
    Ne() {
      (this.we = !0), (this.ye = !0);
    }
  },
  ki = class {
    constructor(t) {
      (this.Le = t),
        (this.Be = new Map()),
        (this.ke = Yt()),
        (this.qe = uh()),
        (this.Qe = new C1(r1));
    }
    Ke(t) {
      for (let e of t.Re)
        t.Ve && t.Ve.isFoundDocument()
          ? this.$e(e, t.Ve)
          : this.Ue(e, t.key, t.Ve);
      for (let e of t.removedTargetIds) this.Ue(e, t.key, t.Ve);
    }
    We(t) {
      this.forEachTarget(t, (e) => {
        let r = this.Ge(e);
        switch (t.state) {
          case 0:
            this.ze(e) && r.De(t.resumeToken);
            break;
          case 1:
            r.Oe(), r.Se || r.ve(), r.De(t.resumeToken);
            break;
          case 2:
            r.Oe(), r.Se || this.removeTarget(e);
            break;
          case 3:
            this.ze(e) && (r.Ne(), r.De(t.resumeToken));
            break;
          case 4:
            this.ze(e) && (this.je(e), r.De(t.resumeToken));
            break;
          default:
            N();
        }
      });
    }
    forEachTarget(t, e) {
      t.targetIds.length > 0
        ? t.targetIds.forEach(e)
        : this.Be.forEach((r, o) => {
            this.ze(o) && e(o);
          });
    }
    He(t) {
      let e = t.targetId,
        r = t.me.count,
        o = this.Je(e);
      if (o) {
        let s = o.target;
        if (Vi(s))
          if (r === 0) {
            let a = new R(s.path);
            this.Ue(e, a, xt.newNoDocument(a, q.min()));
          } else d1(r === 1);
        else {
          let a = this.Ye(e);
          if (a !== r) {
            let l = this.Ze(t),
              v = l ? this.Xe(l, t, a) : 1;
            if (v !== 0) {
              this.je(e);
              let d =
                v === 2
                  ? "TargetPurposeExistenceFilterMismatchBloom"
                  : "TargetPurposeExistenceFilterMismatch";
              this.Qe = this.Qe.insert(e, d);
            }
            hh?.et(
              (function (g, f, z, H, E) {
                var I, S, F, G, t1, w1;
                let st = {
                    localCacheCount: g,
                    existenceFilterCount: f.count,
                    databaseId: z.database,
                    projectId: z.projectId,
                  },
                  u1 = f.unchangedNames;
                return (
                  u1 &&
                    (st.bloomFilter = {
                      applied: E === 0,
                      hashCount:
                        (I = u1?.hashCount) !== null && I !== void 0 ? I : 0,
                      bitmapLength:
                        (G =
                          (F =
                            (S = u1?.bits) === null || S === void 0
                              ? void 0
                              : S.bitmap) === null || F === void 0
                            ? void 0
                            : F.length) !== null && G !== void 0
                          ? G
                          : 0,
                      padding:
                        (w1 =
                          (t1 = u1?.bits) === null || t1 === void 0
                            ? void 0
                            : t1.padding) !== null && w1 !== void 0
                          ? w1
                          : 0,
                      mightContain: (C) => {
                        var p;
                        return (
                          (p = H?.mightContain(C)) !== null && p !== void 0 && p
                        );
                      },
                    }),
                  st
                );
              })(a, t.me, this.Le.tt(), l, v)
            );
          }
        }
      }
    }
    Ze(t) {
      let e = t.me.unchangedNames;
      if (!e || !e.bits) return null;
      let {
          bits: { bitmap: r = "", padding: o = 0 },
          hashCount: s = 0,
        } = e,
        a,
        l;
      try {
        a = me(r).toUint8Array();
      } catch (v) {
        if (v instanceof to)
          return (
            _2(
              "Decoding the base64 bloom filter in existence filter failed (" +
                v.message +
                "); ignoring the bloom filter and falling back to full re-query."
            ),
            null
          );
        throw v;
      }
      try {
        l = new Si(a, o, s);
      } catch (v) {
        return (
          _2(
            v instanceof ke
              ? "BloomFilter error: "
              : "Applying bloom filter failed: ",
            v
          ),
          null
        );
      }
      return l.Ie === 0 ? null : l;
    }
    Xe(t, e, r) {
      return e.me.count === r - this.nt(t, e.targetId) ? 0 : 2;
    }
    nt(t, e) {
      let r = this.Le.getRemoteKeysForTarget(e),
        o = 0;
      return (
        r.forEach((s) => {
          let a = this.Le.tt(),
            l = `projects/${a.projectId}/databases/${
              a.database
            }/documents/${s.path.canonicalString()}`;
          t.mightContain(l) || (this.Ue(e, s, null), o++);
        }),
        o
      );
    }
    rt(t) {
      let e = new Map();
      this.Be.forEach((s, a) => {
        let l = this.Je(a);
        if (l) {
          if (s.current && Vi(l.target)) {
            let v = new R(l.target.path);
            this.ke.get(v) !== null ||
              this.it(a, v) ||
              this.Ue(a, v, xt.newNoDocument(v, t));
          }
          s.be && (e.set(a, s.Ce()), s.ve());
        }
      });
      let r = Q();
      this.qe.forEach((s, a) => {
        let l = !0;
        a.forEachWhile((v) => {
          let d = this.Je(v);
          return (
            !d || d.purpose === "TargetPurposeLimboResolution" || ((l = !1), !1)
          );
        }),
          l && (r = r.add(s));
      }),
        this.ke.forEach((s, a) => a.setReadTime(t));
      let o = new ro(t, e, this.Qe, this.ke, r);
      return (this.ke = Yt()), (this.qe = uh()), (this.Qe = new C1(r1)), o;
    }
    $e(t, e) {
      if (!this.ze(t)) return;
      let r = this.it(t, e.key) ? 2 : 0;
      this.Ge(t).Fe(e.key, r),
        (this.ke = this.ke.insert(e.key, e)),
        (this.qe = this.qe.insert(e.key, this.st(e.key).add(t)));
    }
    Ue(t, e, r) {
      if (!this.ze(t)) return;
      let o = this.Ge(t);
      this.it(t, e) ? o.Fe(e, 1) : o.Me(e),
        (this.qe = this.qe.insert(e, this.st(e).delete(t))),
        r && (this.ke = this.ke.insert(e, r));
    }
    removeTarget(t) {
      this.Be.delete(t);
    }
    Ye(t) {
      let e = this.Ge(t).Ce();
      return (
        this.Le.getRemoteKeysForTarget(t).size +
        e.addedDocuments.size -
        e.removedDocuments.size
      );
    }
    xe(t) {
      this.Ge(t).xe();
    }
    Ge(t) {
      let e = this.Be.get(t);
      return e || ((e = new io()), this.Be.set(t, e)), e;
    }
    st(t) {
      let e = this.qe.get(t);
      return e || ((e = new q1(r1)), (this.qe = this.qe.insert(t, e))), e;
    }
    ze(t) {
      let e = this.Je(t) !== null;
      return e || D("WatchChangeAggregator", "Detected inactive target", t), e;
    }
    Je(t) {
      let e = this.Be.get(t);
      return e && e.Se ? null : this.Le.ot(t);
    }
    je(t) {
      this.Be.set(t, new io()),
        this.Le.getRemoteKeysForTarget(t).forEach((e) => {
          this.Ue(t, e, null);
        });
    }
    it(t, e) {
      return this.Le.getRemoteKeysForTarget(t).has(e);
    }
  };
function uh() {
  return new C1(R.comparator);
}
function gh() {
  return new C1(R.comparator);
}
var og = { asc: "ASCENDING", desc: "DESCENDING" },
  sg = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  ig = { and: "AND", or: "OR" },
  Ei = class {
    constructor(t, e) {
      (this.databaseId = t), (this.useProto3Json = e);
    }
  };
function Ii(n, t) {
  return n.useProto3Json || Ho(t) ? t : { value: t };
}
function ao(n, t) {
  return n.useProto3Json
    ? `${new Date(1e3 * t.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
    : { seconds: "" + t.seconds, nanos: t.nanoseconds };
}
function Qh(n, t) {
  return n.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function ag(n, t) {
  return ao(n, t.toTimestamp());
}
function Bt(n) {
  return (
    d1(!!n),
    q.fromTimestamp(
      (function (e) {
        let r = Qt(e);
        return new P1(r.seconds, r.nanos);
      })(n)
    )
  );
}
function ja(n, t) {
  return Ti(n, t).canonicalString();
}
function Ti(n, t) {
  let e = (function (o) {
    return new M1(["projects", o.projectId, "databases", o.database]);
  })(n).child("documents");
  return t === void 0 ? e : e.child(t);
}
function Yh(n) {
  let t = M1.fromString(n);
  return d1(n7(t)), t;
}
function Di(n, t) {
  return ja(n.databaseId, t.path);
}
function Js(n, t) {
  let e = Yh(t);
  if (e.get(1) !== n.databaseId.projectId)
    throw new P(
      A.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        e.get(1) +
        " vs " +
        n.databaseId.projectId
    );
  if (e.get(3) !== n.databaseId.database)
    throw new P(
      A.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        e.get(3) +
        " vs " +
        n.databaseId.database
    );
  return new R(Xh(e));
}
function Jh(n, t) {
  return ja(n.databaseId, t);
}
function lg(n) {
  let t = Yh(n);
  return t.length === 4 ? M1.emptyPath() : Xh(t);
}
function Pi(n) {
  return new M1([
    "projects",
    n.databaseId.projectId,
    "databases",
    n.databaseId.database,
  ]).canonicalString();
}
function Xh(n) {
  return d1(n.length > 4 && n.get(4) === "documents"), n.popFirst(5);
}
function ph(n, t, e) {
  return { name: Di(n, t), fields: e.value.mapValue.fields };
}
function cg(n, t) {
  let e;
  if ("targetChange" in t) {
    t.targetChange;
    let r = (function (d) {
        return d === "NO_CHANGE"
          ? 0
          : d === "ADD"
          ? 1
          : d === "REMOVE"
          ? 2
          : d === "CURRENT"
          ? 3
          : d === "RESET"
          ? 4
          : N();
      })(t.targetChange.targetChangeType || "NO_CHANGE"),
      o = t.targetChange.targetIds || [],
      s = (function (d, g) {
        return d.useProto3Json
          ? (d1(g === void 0 || typeof g == "string"),
            G1.fromBase64String(g || ""))
          : (d1(g === void 0 || g instanceof Buffer || g instanceof Uint8Array),
            G1.fromUint8Array(g || new Uint8Array()));
      })(n, t.targetChange.resumeToken),
      a = t.targetChange.cause,
      l =
        a &&
        (function (d) {
          let g = d.code === void 0 ? A.UNKNOWN : Kh(d.code);
          return new P(g, d.message || "");
        })(a);
    e = new so(r, o, s, l || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    let r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    let o = Js(n, r.document.name),
      s = Bt(r.document.updateTime),
      a = r.document.createTime ? Bt(r.document.createTime) : q.min(),
      l = new rt({ mapValue: { fields: r.document.fields } }),
      v = xt.newFoundDocument(o, s, a, l),
      d = r.targetIds || [],
      g = r.removedTargetIds || [];
    e = new V2(d, g, v.key, v);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    let r = t.documentDelete;
    r.document;
    let o = Js(n, r.document),
      s = r.readTime ? Bt(r.readTime) : q.min(),
      a = xt.newNoDocument(o, s),
      l = r.removedTargetIds || [];
    e = new V2([], l, a.key, a);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    let r = t.documentRemove;
    r.document;
    let o = Js(n, r.document),
      s = r.removedTargetIds || [];
    e = new V2([], s, o, null);
  } else {
    if (!("filter" in t)) return N();
    {
      t.filter;
      let r = t.filter;
      r.targetId;
      let { count: o = 0, unchangedNames: s } = r,
        a = new Bi(o, s),
        l = r.targetId;
      e = new oo(l, a);
    }
  }
  return e;
}
function hg(n, t) {
  let e;
  if (t instanceof Re) e = { update: ph(n, t.key, t.value) };
  else if (t instanceof cn) e = { delete: Di(n, t.key) };
  else if (t instanceof Et)
    e = { update: ph(n, t.key, t.data), updateMask: xg(t.fieldMask) };
  else {
    if (!(t instanceof Hi)) return N();
    e = { verify: Di(n, t.key) };
  }
  return (
    t.fieldTransforms.length > 0 &&
      (e.updateTransforms = t.fieldTransforms.map((r) =>
        (function (s, a) {
          let l = a.transform;
          if (l instanceof E2)
            return {
              fieldPath: a.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (l instanceof De)
            return {
              fieldPath: a.field.canonicalString(),
              appendMissingElements: { values: l.elements },
            };
          if (l instanceof Pe)
            return {
              fieldPath: a.field.canonicalString(),
              removeAllFromArray: { values: l.elements },
            };
          if (l instanceof I2)
            return { fieldPath: a.field.canonicalString(), increment: l.Pe };
          throw N();
        })(0, r)
      )),
    t.precondition.isNone ||
      (e.currentDocument = (function (o, s) {
        return s.updateTime !== void 0
          ? { updateTime: ag(o, s.updateTime) }
          : s.exists !== void 0
          ? { exists: s.exists }
          : N();
      })(n, t.precondition)),
    e
  );
}
function vg(n, t) {
  return n && n.length > 0
    ? (d1(t !== void 0),
      n.map((e) =>
        (function (o, s) {
          let a = o.updateTime ? Bt(o.updateTime) : Bt(s);
          return (
            a.isEqual(q.min()) && (a = Bt(s)),
            new _i(a, o.transformResults || [])
          );
        })(e, t)
      ))
    : [];
}
function dg(n, t) {
  return { documents: [Jh(n, t.path)] };
}
function ug(n, t) {
  let e = { structuredQuery: {} },
    r = t.path,
    o;
  t.collectionGroup !== null
    ? ((o = r),
      (e.structuredQuery.from = [
        { collectionId: t.collectionGroup, allDescendants: !0 },
      ]))
    : ((o = r.popLast()),
      (e.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (e.parent = Jh(n, o));
  let s = (function (d) {
    if (d.length !== 0) return e7(kt.create(d, "and"));
  })(t.filters);
  s && (e.structuredQuery.where = s);
  let a = (function (d) {
    if (d.length !== 0)
      return d.map((g) =>
        (function (z) {
          return { field: x2(z.field), direction: mg(z.dir) };
        })(g)
      );
  })(t.orderBy);
  a && (e.structuredQuery.orderBy = a);
  let l = Ii(n, t.limit);
  return (
    l !== null && (e.structuredQuery.limit = l),
    t.startAt &&
      (e.structuredQuery.startAt = (function (d) {
        return { before: d.inclusive, values: d.position };
      })(t.startAt)),
    t.endAt &&
      (e.structuredQuery.endAt = (function (d) {
        return { before: !d.inclusive, values: d.position };
      })(t.endAt)),
    { _t: e, parent: o }
  );
}
function gg(n) {
  let t = lg(n.parent),
    e = n.structuredQuery,
    r = e.from ? e.from.length : 0,
    o = null;
  if (r > 0) {
    d1(r === 1);
    let g = e.from[0];
    g.allDescendants ? (o = g.collectionId) : (t = t.child(g.collectionId));
  }
  let s = [];
  e.where &&
    (s = (function (f) {
      let z = t7(f);
      return z instanceof kt && Sh(z) ? z.getFilters() : [z];
    })(e.where));
  let a = [];
  e.orderBy &&
    (a = (function (f) {
      return f.map((z) =>
        (function (E) {
          return new B2(
            z2(E.field),
            (function (S) {
              switch (S) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(E.direction)
          );
        })(z)
      );
    })(e.orderBy));
  let l = null;
  e.limit &&
    (l = (function (f) {
      let z;
      return (z = typeof f == "object" ? f.value : f), Ho(z) ? null : z;
    })(e.limit));
  let v = null;
  e.startAt &&
    (v = (function (f) {
      let z = !!f.before,
        H = f.values || [];
      return new b2(H, z);
    })(e.startAt));
  let d = null;
  return (
    e.endAt &&
      (d = (function (f) {
        let z = !f.before,
          H = f.values || [];
        return new b2(H, z);
      })(e.endAt)),
    Ou(t, o, a, s, l, "F", v, d)
  );
}
function pg(n, t) {
  let e = (function (o) {
    switch (o) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return N();
    }
  })(t.purpose);
  return e == null ? null : { "goog-listen-tags": e };
}
function t7(n) {
  return n.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case "IS_NAN":
            let r = z2(e.unaryFilter.field);
            return b1.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            let o = z2(e.unaryFilter.field);
            return b1.create(o, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            let s = z2(e.unaryFilter.field);
            return b1.create(s, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            let a = z2(e.unaryFilter.field);
            return b1.create(a, "!=", { nullValue: "NULL_VALUE" });
          default:
            return N();
        }
      })(n)
    : n.fieldFilter !== void 0
    ? (function (e) {
        return b1.create(
          z2(e.fieldFilter.field),
          (function (o) {
            switch (o) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              default:
                return N();
            }
          })(e.fieldFilter.op),
          e.fieldFilter.value
        );
      })(n)
    : n.compositeFilter !== void 0
    ? (function (e) {
        return kt.create(
          e.compositeFilter.filters.map((r) => t7(r)),
          (function (o) {
            switch (o) {
              case "AND":
                return "and";
              case "OR":
                return "or";
              default:
                return N();
            }
          })(e.compositeFilter.op)
        );
      })(n)
    : N();
}
function mg(n) {
  return og[n];
}
function wg(n) {
  return sg[n];
}
function fg(n) {
  return ig[n];
}
function x2(n) {
  return { fieldPath: n.canonicalString() };
}
function z2(n) {
  return ot.fromServerFormat(n.fieldPath);
}
function e7(n) {
  return n instanceof b1
    ? (function (e) {
        if (e.op === "==") {
          if (eh(e.value))
            return { unaryFilter: { field: x2(e.field), op: "IS_NAN" } };
          if (th(e.value))
            return { unaryFilter: { field: x2(e.field), op: "IS_NULL" } };
        } else if (e.op === "!=") {
          if (eh(e.value))
            return { unaryFilter: { field: x2(e.field), op: "IS_NOT_NAN" } };
          if (th(e.value))
            return { unaryFilter: { field: x2(e.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: x2(e.field), op: wg(e.op), value: e.value },
        };
      })(n)
    : n instanceof kt
    ? (function (e) {
        let r = e.getFilters().map((o) => e7(o));
        return r.length === 1
          ? r[0]
          : { compositeFilter: { op: fg(e.op), filters: r } };
      })(n)
    : N();
}
function xg(n) {
  let t = [];
  return (
    n.fields.forEach((e) => t.push(e.canonicalString())), { fieldPaths: t }
  );
}
function n7(n) {
  return n.length >= 4 && n.get(0) === "projects" && n.get(2) === "databases";
}
var vn = class n {
  constructor(
    t,
    e,
    r,
    o,
    s = q.min(),
    a = q.min(),
    l = G1.EMPTY_BYTE_STRING,
    v = null
  ) {
    (this.target = t),
      (this.targetId = e),
      (this.purpose = r),
      (this.sequenceNumber = o),
      (this.snapshotVersion = s),
      (this.lastLimboFreeSnapshotVersion = a),
      (this.resumeToken = l),
      (this.expectedCount = v);
  }
  withSequenceNumber(t) {
    return new n(
      this.target,
      this.targetId,
      this.purpose,
      t,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(t, e) {
    return new n(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      e,
      this.lastLimboFreeSnapshotVersion,
      t,
      null
    );
  }
  withExpectedCount(t) {
    return new n(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      t
    );
  }
  withLastLimboFreeSnapshotVersion(t) {
    return new n(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      t,
      this.resumeToken,
      this.expectedCount
    );
  }
};
var Ri = class {
  constructor(t) {
    this.ct = t;
  }
};
function zg(n) {
  let t = gg({ parent: n.parent, structuredQuery: n.structuredQuery });
  return n.limitType === "LAST" ? yi(t, t.limit, "L") : t;
}
var lo = class {
  constructor() {}
  It(t, e) {
    this.Tt(t, e), e.Et();
  }
  Tt(t, e) {
    if ("nullValue" in t) this.dt(e, 5);
    else if ("booleanValue" in t) this.dt(e, 10), e.At(t.booleanValue ? 1 : 0);
    else if ("integerValue" in t) this.dt(e, 15), e.At(z1(t.integerValue));
    else if ("doubleValue" in t) {
      let r = z1(t.doubleValue);
      isNaN(r) ? this.dt(e, 13) : (this.dt(e, 15), sn(r) ? e.At(0) : e.At(r));
    } else if ("timestampValue" in t) {
      let r = t.timestampValue;
      this.dt(e, 20),
        typeof r == "string" && (r = Qt(r)),
        e.Rt(`${r.seconds || ""}`),
        e.At(r.nanos || 0);
    } else if ("stringValue" in t) this.Vt(t.stringValue, e), this.ft(e);
    else if ("bytesValue" in t)
      this.dt(e, 30), e.gt(me(t.bytesValue)), this.ft(e);
    else if ("referenceValue" in t) this.yt(t.referenceValue, e);
    else if ("geoPointValue" in t) {
      let r = t.geoPointValue;
      this.dt(e, 45), e.At(r.latitude || 0), e.At(r.longitude || 0);
    } else
      "mapValue" in t
        ? Ah(t)
          ? this.dt(e, Number.MAX_SAFE_INTEGER)
          : (this.wt(t.mapValue, e), this.ft(e))
        : "arrayValue" in t
        ? (this.St(t.arrayValue, e), this.ft(e))
        : N();
  }
  Vt(t, e) {
    this.dt(e, 25), this.bt(t, e);
  }
  bt(t, e) {
    e.Rt(t);
  }
  wt(t, e) {
    let r = t.fields || {};
    this.dt(e, 55);
    for (let o of Object.keys(r)) this.Vt(o, e), this.Tt(r[o], e);
  }
  St(t, e) {
    let r = t.values || [];
    this.dt(e, 50);
    for (let o of r) this.Tt(o, e);
  }
  yt(t, e) {
    this.dt(e, 37),
      R.fromName(t).path.forEach((r) => {
        this.dt(e, 60), this.bt(r, e);
      });
  }
  dt(t, e) {
    t.At(e);
  }
  ft(t) {
    t.At(2);
  }
};
lo.Dt = new lo();
var Oi = class {
    constructor() {
      this.an = new Ni();
    }
    addToCollectionParentIndex(t, e) {
      return this.an.add(e), b.resolve();
    }
    getCollectionParents(t, e) {
      return b.resolve(this.an.getEntries(e));
    }
    addFieldIndex(t, e) {
      return b.resolve();
    }
    deleteFieldIndex(t, e) {
      return b.resolve();
    }
    deleteAllFieldIndexes(t) {
      return b.resolve();
    }
    createTargetIndexes(t, e) {
      return b.resolve();
    }
    getDocumentsMatchingTarget(t, e) {
      return b.resolve(null);
    }
    getIndexType(t, e) {
      return b.resolve(0);
    }
    getFieldIndexes(t, e) {
      return b.resolve([]);
    }
    getNextCollectionGroupToUpdate(t) {
      return b.resolve(null);
    }
    getMinOffset(t, e) {
      return b.resolve(Ie.min());
    }
    getMinOffsetFromCollectionGroup(t, e) {
      return b.resolve(Ie.min());
    }
    updateCollectionGroup(t, e, r) {
      return b.resolve();
    }
    updateIndexEntries(t, e) {
      return b.resolve();
    }
  },
  Ni = class {
    constructor() {
      this.index = {};
    }
    add(t) {
      let e = t.lastSegment(),
        r = t.popLast(),
        o = this.index[e] || new q1(M1.comparator),
        s = !o.has(r);
      return (this.index[e] = o.add(r)), s;
    }
    has(t) {
      let e = t.lastSegment(),
        r = t.popLast(),
        o = this.index[e];
      return o && o.has(r);
    }
    getEntries(t) {
      return (this.index[t] || new q1(M1.comparator)).toArray();
    }
  };
var kf = new Uint8Array(0);
var Ht = class n {
  constructor(t, e, r) {
    (this.cacheSizeCollectionThreshold = t),
      (this.percentileToCollect = e),
      (this.maximumSequenceNumbersToCollect = r);
  }
  static withCacheSize(t) {
    return new n(
      t,
      n.DEFAULT_COLLECTION_PERCENTILE,
      n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
    );
  }
};
(Ht.DEFAULT_COLLECTION_PERCENTILE = 10),
  (Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
  (Ht.DEFAULT = new Ht(
    41943040,
    Ht.DEFAULT_COLLECTION_PERCENTILE,
    Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
  )),
  (Ht.DISABLED = new Ht(-1, 0, 0));
var dn = class n {
  constructor(t) {
    this.Nn = t;
  }
  next() {
    return (this.Nn += 2), this.Nn;
  }
  static Ln() {
    return new n(0);
  }
  static Bn() {
    return new n(-1);
  }
};
var Fi = class {
  constructor() {
    (this.changes = new we(
      (t) => t.toString(),
      (t, e) => t.isEqual(e)
    )),
      (this.changesApplied = !1);
  }
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  removeEntry(t, e) {
    this.assertNotApplied(),
      this.changes.set(t, xt.newInvalidDocument(t).setReadTime(e));
  }
  getEntry(t, e) {
    this.assertNotApplied();
    let r = this.changes.get(e);
    return r !== void 0 ? b.resolve(r) : this.getFromCache(t, e);
  }
  getEntries(t, e) {
    return this.getAllFromCache(t, e);
  }
  apply(t) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t)
    );
  }
  assertNotApplied() {}
};
var Zi = class {
  constructor(t, e) {
    (this.overlayedDocument = t), (this.mutatedFields = e);
  }
};
var ji = class {
  constructor(t, e, r, o) {
    (this.remoteDocumentCache = t),
      (this.mutationQueue = e),
      (this.documentOverlayCache = r),
      (this.indexManager = o);
  }
  getDocument(t, e) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(t, e)
      .next((o) => ((r = o), this.remoteDocumentCache.getEntry(t, e)))
      .next((o) => (r !== null && on(r.mutation, o, ht.empty(), P1.now()), o));
  }
  getDocuments(t, e) {
    return this.remoteDocumentCache
      .getEntries(t, e)
      .next((r) => this.getLocalViewOfDocuments(t, r, Q()).next(() => r));
  }
  getLocalViewOfDocuments(t, e, r = Q()) {
    let o = Se();
    return this.populateOverlays(t, o, e).next(() =>
      this.computeViews(t, e, o, r).next((s) => {
        let a = tn();
        return (
          s.forEach((l, v) => {
            a = a.insert(l, v.overlayedDocument);
          }),
          a
        );
      })
    );
  }
  getOverlayedDocuments(t, e) {
    let r = Se();
    return this.populateOverlays(t, r, e).next(() =>
      this.computeViews(t, e, r, Q())
    );
  }
  populateOverlays(t, e, r) {
    let o = [];
    return (
      r.forEach((s) => {
        e.has(s) || o.push(s);
      }),
      this.documentOverlayCache.getOverlays(t, o).next((s) => {
        s.forEach((a, l) => {
          e.set(a, l);
        });
      })
    );
  }
  computeViews(t, e, r, o) {
    let s = Yt(),
      a = rn(),
      l = (function () {
        return rn();
      })();
    return (
      e.forEach((v, d) => {
        let g = r.get(d.key);
        o.has(d.key) && (g === void 0 || g.mutation instanceof Et)
          ? (s = s.insert(d.key, d))
          : g !== void 0
          ? (a.set(d.key, g.mutation.getFieldMask()),
            on(g.mutation, d, g.mutation.getFieldMask(), P1.now()))
          : a.set(d.key, ht.empty());
      }),
      this.recalculateAndSaveOverlays(t, s).next(
        (v) => (
          v.forEach((d, g) => a.set(d, g)),
          e.forEach((d, g) => {
            var f;
            return l.set(
              d,
              new Zi(g, (f = a.get(d)) !== null && f !== void 0 ? f : null)
            );
          }),
          l
        )
      )
    );
  }
  recalculateAndSaveOverlays(t, e) {
    let r = rn(),
      o = new C1((a, l) => a - l),
      s = Q();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(t, e)
      .next((a) => {
        for (let l of a)
          l.keys().forEach((v) => {
            let d = e.get(v);
            if (d === null) return;
            let g = r.get(v) || ht.empty();
            (g = l.applyToLocalView(d, g)), r.set(v, g);
            let f = (o.get(l.batchId) || Q()).add(v);
            o = o.insert(l.batchId, f);
          });
      })
      .next(() => {
        let a = [],
          l = o.getReverseIterator();
        for (; l.hasNext(); ) {
          let v = l.getNext(),
            d = v.key,
            g = v.value,
            f = Nh();
          g.forEach((z) => {
            if (!s.has(z)) {
              let H = Gh(e.get(z), r.get(z));
              H !== null && f.set(z, H), (s = s.add(z));
            }
          }),
            a.push(this.documentOverlayCache.saveOverlays(t, d, f));
        }
        return b.waitFor(a);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t, e) {
    return this.remoteDocumentCache
      .getEntries(t, e)
      .next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  getDocumentsMatchingQuery(t, e, r, o) {
    return (function (a) {
      return (
        R.isDocumentKey(a.path) &&
        a.collectionGroup === null &&
        a.filters.length === 0
      );
    })(e)
      ? this.getDocumentsMatchingDocumentQuery(t, e.path)
      : Nu(e)
      ? this.getDocumentsMatchingCollectionGroupQuery(t, e, r, o)
      : this.getDocumentsMatchingCollectionQuery(t, e, r, o);
  }
  getNextDocuments(t, e, r, o) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(t, e, r, o)
      .next((s) => {
        let a =
            o - s.size > 0
              ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                  t,
                  e,
                  r.largestBatchId,
                  o - s.size
                )
              : b.resolve(Se()),
          l = -1,
          v = s;
        return a.next((d) =>
          b
            .forEach(
              d,
              (g, f) => (
                l < f.largestBatchId && (l = f.largestBatchId),
                s.get(g)
                  ? b.resolve()
                  : this.remoteDocumentCache.getEntry(t, g).next((z) => {
                      v = v.insert(g, z);
                    })
              )
            )
            .next(() => this.populateOverlays(t, d, s))
            .next(() => this.computeViews(t, v, d, Q()))
            .next((g) => ({ batchId: l, changes: Oh(g) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(t, e) {
    return this.getDocument(t, new R(e)).next((r) => {
      let o = tn();
      return r.isFoundDocument() && (o = o.insert(r.key, r)), o;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, e, r, o) {
    let s = e.collectionGroup,
      a = tn();
    return this.indexManager.getCollectionParents(t, s).next((l) =>
      b
        .forEach(l, (v) => {
          let d = (function (f, z) {
            return new S2(
              z,
              null,
              f.explicitOrderBy.slice(),
              f.filters.slice(),
              f.limit,
              f.limitType,
              f.startAt,
              f.endAt
            );
          })(e, v.child(s));
          return this.getDocumentsMatchingCollectionQuery(t, d, r, o).next(
            (g) => {
              g.forEach((f, z) => {
                a = a.insert(f, z);
              });
            }
          );
        })
        .next(() => a)
    );
  }
  getDocumentsMatchingCollectionQuery(t, e, r, o) {
    let s;
    return this.documentOverlayCache
      .getOverlaysForCollection(t, e.path, r.largestBatchId)
      .next(
        (a) => (
          (s = a),
          this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, r, s, o)
        )
      )
      .next((a) => {
        s.forEach((v, d) => {
          let g = d.getKey();
          a.get(g) === null && (a = a.insert(g, xt.newInvalidDocument(g)));
        });
        let l = tn();
        return (
          a.forEach((v, d) => {
            let g = s.get(v);
            g !== void 0 && on(g.mutation, d, ht.empty(), P1.now()),
              Ao(e, d) && (l = l.insert(v, d));
          }),
          l
        );
      });
  }
};
var Ui = class {
  constructor(t) {
    (this.serializer = t), (this.lr = new Map()), (this.hr = new Map());
  }
  getBundleMetadata(t, e) {
    return b.resolve(this.lr.get(e));
  }
  saveBundleMetadata(t, e) {
    return (
      this.lr.set(
        e.id,
        (function (o) {
          return { id: o.id, version: o.version, createTime: Bt(o.createTime) };
        })(e)
      ),
      b.resolve()
    );
  }
  getNamedQuery(t, e) {
    return b.resolve(this.hr.get(e));
  }
  saveNamedQuery(t, e) {
    return (
      this.hr.set(
        e.name,
        (function (o) {
          return {
            name: o.name,
            query: zg(o.bundledQuery),
            readTime: Bt(o.readTime),
          };
        })(e)
      ),
      b.resolve()
    );
  }
};
var $i = class {
  constructor() {
    (this.overlays = new C1(R.comparator)), (this.Pr = new Map());
  }
  getOverlay(t, e) {
    return b.resolve(this.overlays.get(e));
  }
  getOverlays(t, e) {
    let r = Se();
    return b
      .forEach(e, (o) =>
        this.getOverlay(t, o).next((s) => {
          s !== null && r.set(o, s);
        })
      )
      .next(() => r);
  }
  saveOverlays(t, e, r) {
    return (
      r.forEach((o, s) => {
        this.ht(t, e, s);
      }),
      b.resolve()
    );
  }
  removeOverlaysForBatchId(t, e, r) {
    let o = this.Pr.get(r);
    return (
      o !== void 0 &&
        (o.forEach((s) => (this.overlays = this.overlays.remove(s))),
        this.Pr.delete(r)),
      b.resolve()
    );
  }
  getOverlaysForCollection(t, e, r) {
    let o = Se(),
      s = e.length + 1,
      a = new R(e.child("")),
      l = this.overlays.getIteratorFrom(a);
    for (; l.hasNext(); ) {
      let v = l.getNext().value,
        d = v.getKey();
      if (!e.isPrefixOf(d.path)) break;
      d.path.length === s && v.largestBatchId > r && o.set(v.getKey(), v);
    }
    return b.resolve(o);
  }
  getOverlaysForCollectionGroup(t, e, r, o) {
    let s = new C1((d, g) => d - g),
      a = this.overlays.getIterator();
    for (; a.hasNext(); ) {
      let d = a.getNext().value;
      if (d.getKey().getCollectionGroup() === e && d.largestBatchId > r) {
        let g = s.get(d.largestBatchId);
        g === null && ((g = Se()), (s = s.insert(d.largestBatchId, g))),
          g.set(d.getKey(), d);
      }
    }
    let l = Se(),
      v = s.getIterator();
    for (
      ;
      v.hasNext() &&
      (v.getNext().value.forEach((d, g) => l.set(d, g)), !(l.size() >= o));

    );
    return b.resolve(l);
  }
  ht(t, e, r) {
    let o = this.overlays.get(r.key);
    if (o !== null) {
      let a = this.Pr.get(o.largestBatchId).delete(r.key);
      this.Pr.set(o.largestBatchId, a);
    }
    this.overlays = this.overlays.insert(r.key, new bi(e, r));
    let s = this.Pr.get(e);
    s === void 0 && ((s = Q()), this.Pr.set(e, s)),
      this.Pr.set(e, s.add(r.key));
  }
};
var qi = class {
  constructor() {
    this.sessionToken = G1.EMPTY_BYTE_STRING;
  }
  getSessionToken(t) {
    return b.resolve(this.sessionToken);
  }
  setSessionToken(t, e) {
    return (this.sessionToken = e), b.resolve();
  }
};
var un = class {
    constructor() {
      (this.Ir = new q1(H1.Tr)), (this.Er = new q1(H1.dr));
    }
    isEmpty() {
      return this.Ir.isEmpty();
    }
    addReference(t, e) {
      let r = new H1(t, e);
      (this.Ir = this.Ir.add(r)), (this.Er = this.Er.add(r));
    }
    Ar(t, e) {
      t.forEach((r) => this.addReference(r, e));
    }
    removeReference(t, e) {
      this.Rr(new H1(t, e));
    }
    Vr(t, e) {
      t.forEach((r) => this.removeReference(r, e));
    }
    mr(t) {
      let e = new R(new M1([])),
        r = new H1(e, t),
        o = new H1(e, t + 1),
        s = [];
      return (
        this.Er.forEachInRange([r, o], (a) => {
          this.Rr(a), s.push(a.key);
        }),
        s
      );
    }
    gr() {
      this.Ir.forEach((t) => this.Rr(t));
    }
    Rr(t) {
      (this.Ir = this.Ir.delete(t)), (this.Er = this.Er.delete(t));
    }
    pr(t) {
      let e = new R(new M1([])),
        r = new H1(e, t),
        o = new H1(e, t + 1),
        s = Q();
      return (
        this.Er.forEachInRange([r, o], (a) => {
          s = s.add(a.key);
        }),
        s
      );
    }
    containsKey(t) {
      let e = new H1(t, 0),
        r = this.Ir.firstAfterOrEqual(e);
      return r !== null && t.isEqual(r.key);
    }
  },
  H1 = class {
    constructor(t, e) {
      (this.key = t), (this.yr = e);
    }
    static Tr(t, e) {
      return R.comparator(t.key, e.key) || r1(t.yr, e.yr);
    }
    static dr(t, e) {
      return r1(t.yr, e.yr) || R.comparator(t.key, e.key);
    }
  };
var Gi = class {
  constructor(t, e) {
    (this.indexManager = t),
      (this.referenceDelegate = e),
      (this.mutationQueue = []),
      (this.wr = 1),
      (this.Sr = new q1(H1.Tr));
  }
  checkEmpty(t) {
    return b.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, e, r, o) {
    let s = this.wr;
    this.wr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    let a = new Li(s, e, r, o);
    this.mutationQueue.push(a);
    for (let l of o)
      (this.Sr = this.Sr.add(new H1(l.key, s))),
        this.indexManager.addToCollectionParentIndex(t, l.key.path.popLast());
    return b.resolve(a);
  }
  lookupMutationBatch(t, e) {
    return b.resolve(this.br(e));
  }
  getNextMutationBatchAfterBatchId(t, e) {
    let r = e + 1,
      o = this.Dr(r),
      s = o < 0 ? 0 : o;
    return b.resolve(
      this.mutationQueue.length > s ? this.mutationQueue[s] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return b.resolve(this.mutationQueue.length === 0 ? -1 : this.wr - 1);
  }
  getAllMutationBatches(t) {
    return b.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, e) {
    let r = new H1(e, 0),
      o = new H1(e, Number.POSITIVE_INFINITY),
      s = [];
    return (
      this.Sr.forEachInRange([r, o], (a) => {
        let l = this.br(a.yr);
        s.push(l);
      }),
      b.resolve(s)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(t, e) {
    let r = new q1(r1);
    return (
      e.forEach((o) => {
        let s = new H1(o, 0),
          a = new H1(o, Number.POSITIVE_INFINITY);
        this.Sr.forEachInRange([s, a], (l) => {
          r = r.add(l.yr);
        });
      }),
      b.resolve(this.Cr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(t, e) {
    let r = e.path,
      o = r.length + 1,
      s = r;
    R.isDocumentKey(s) || (s = s.child(""));
    let a = new H1(new R(s), 0),
      l = new q1(r1);
    return (
      this.Sr.forEachWhile((v) => {
        let d = v.key.path;
        return !!r.isPrefixOf(d) && (d.length === o && (l = l.add(v.yr)), !0);
      }, a),
      b.resolve(this.Cr(l))
    );
  }
  Cr(t) {
    let e = [];
    return (
      t.forEach((r) => {
        let o = this.br(r);
        o !== null && e.push(o);
      }),
      e
    );
  }
  removeMutationBatch(t, e) {
    d1(this.vr(e.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.Sr;
    return b
      .forEach(e.mutations, (o) => {
        let s = new H1(o.key, e.batchId);
        return (
          (r = r.delete(s)),
          this.referenceDelegate.markPotentiallyOrphaned(t, o.key)
        );
      })
      .next(() => {
        this.Sr = r;
      });
  }
  xn(t) {}
  containsKey(t, e) {
    let r = new H1(e, 0),
      o = this.Sr.firstAfterOrEqual(r);
    return b.resolve(e.isEqual(o && o.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, b.resolve();
  }
  vr(t, e) {
    return this.Dr(t);
  }
  Dr(t) {
    return this.mutationQueue.length === 0
      ? 0
      : t - this.mutationQueue[0].batchId;
  }
  br(t) {
    let e = this.Dr(t);
    return e < 0 || e >= this.mutationQueue.length
      ? null
      : this.mutationQueue[e];
  }
};
var Wi = class {
    constructor(t) {
      (this.Fr = t),
        (this.docs = (function () {
          return new C1(R.comparator);
        })()),
        (this.size = 0);
    }
    setIndexManager(t) {
      this.indexManager = t;
    }
    addEntry(t, e) {
      let r = e.key,
        o = this.docs.get(r),
        s = o ? o.size : 0,
        a = this.Fr(e);
      return (
        (this.docs = this.docs.insert(r, {
          document: e.mutableCopy(),
          size: a,
        })),
        (this.size += a - s),
        this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
      );
    }
    removeEntry(t) {
      let e = this.docs.get(t);
      e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
    }
    getEntry(t, e) {
      let r = this.docs.get(e);
      return b.resolve(r ? r.document.mutableCopy() : xt.newInvalidDocument(e));
    }
    getEntries(t, e) {
      let r = Yt();
      return (
        e.forEach((o) => {
          let s = this.docs.get(o);
          r = r.insert(
            o,
            s ? s.document.mutableCopy() : xt.newInvalidDocument(o)
          );
        }),
        b.resolve(r)
      );
    }
    getDocumentsMatchingQuery(t, e, r, o) {
      let s = Yt(),
        a = e.path,
        l = new R(a.child("")),
        v = this.docs.getIteratorFrom(l);
      for (; v.hasNext(); ) {
        let {
          key: d,
          value: { document: g },
        } = v.getNext();
        if (!a.isPrefixOf(d.path)) break;
        d.path.length > a.length + 1 ||
          Au(Lu(g), r) <= 0 ||
          ((o.has(g.key) || Ao(e, g)) &&
            (s = s.insert(g.key, g.mutableCopy())));
      }
      return b.resolve(s);
    }
    getAllFromCollectionGroup(t, e, r, o) {
      N();
    }
    Mr(t, e) {
      return b.forEach(this.docs, (r) => e(r));
    }
    newChangeBuffer(t) {
      return new Ki(this);
    }
    getSize(t) {
      return b.resolve(this.size);
    }
  },
  Ki = class extends Fi {
    constructor(t) {
      super(), (this.ur = t);
    }
    applyChanges(t) {
      let e = [];
      return (
        this.changes.forEach((r, o) => {
          o.isValidDocument()
            ? e.push(this.ur.addEntry(t, o))
            : this.ur.removeEntry(r);
        }),
        b.waitFor(e)
      );
    }
    getFromCache(t, e) {
      return this.ur.getEntry(t, e);
    }
    getAllFromCache(t, e) {
      return this.ur.getEntries(t, e);
    }
  };
var Qi = class {
  constructor(t) {
    (this.persistence = t),
      (this.Or = new we((e) => Fa(e), Za)),
      (this.lastRemoteSnapshotVersion = q.min()),
      (this.highestTargetId = 0),
      (this.Nr = 0),
      (this.Lr = new un()),
      (this.targetCount = 0),
      (this.Br = dn.Ln());
  }
  forEachTarget(t, e) {
    return this.Or.forEach((r, o) => e(o)), b.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return b.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return b.resolve(this.Nr);
  }
  allocateTargetId(t) {
    return (
      (this.highestTargetId = this.Br.next()), b.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(t, e, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      e > this.Nr && (this.Nr = e),
      b.resolve()
    );
  }
  Qn(t) {
    this.Or.set(t.target, t);
    let e = t.targetId;
    e > this.highestTargetId &&
      ((this.Br = new dn(e)), (this.highestTargetId = e)),
      t.sequenceNumber > this.Nr && (this.Nr = t.sequenceNumber);
  }
  addTargetData(t, e) {
    return this.Qn(e), (this.targetCount += 1), b.resolve();
  }
  updateTargetData(t, e) {
    return this.Qn(e), b.resolve();
  }
  removeTargetData(t, e) {
    return (
      this.Or.delete(e.target),
      this.Lr.mr(e.targetId),
      (this.targetCount -= 1),
      b.resolve()
    );
  }
  removeTargets(t, e, r) {
    let o = 0,
      s = [];
    return (
      this.Or.forEach((a, l) => {
        l.sequenceNumber <= e &&
          r.get(l.targetId) === null &&
          (this.Or.delete(a),
          s.push(this.removeMatchingKeysForTargetId(t, l.targetId)),
          o++);
      }),
      b.waitFor(s).next(() => o)
    );
  }
  getTargetCount(t) {
    return b.resolve(this.targetCount);
  }
  getTargetData(t, e) {
    let r = this.Or.get(e) || null;
    return b.resolve(r);
  }
  addMatchingKeys(t, e, r) {
    return this.Lr.Ar(e, r), b.resolve();
  }
  removeMatchingKeys(t, e, r) {
    this.Lr.Vr(e, r);
    let o = this.persistence.referenceDelegate,
      s = [];
    return (
      o &&
        e.forEach((a) => {
          s.push(o.markPotentiallyOrphaned(t, a));
        }),
      b.waitFor(s)
    );
  }
  removeMatchingKeysForTargetId(t, e) {
    return this.Lr.mr(e), b.resolve();
  }
  getMatchingKeysForTargetId(t, e) {
    let r = this.Lr.pr(e);
    return b.resolve(r);
  }
  containsKey(t, e) {
    return b.resolve(this.Lr.containsKey(e));
  }
};
var Yi = class {
    constructor(t, e) {
      (this.kr = {}),
        (this.overlays = {}),
        (this.qr = new Hh(0)),
        (this.Qr = !1),
        (this.Qr = !0),
        (this.Kr = new qi()),
        (this.referenceDelegate = t(this)),
        (this.$r = new Qi(this)),
        (this.indexManager = new Oi()),
        (this.remoteDocumentCache = (function (o) {
          return new Wi(o);
        })((r) => this.referenceDelegate.Ur(r))),
        (this.serializer = new Ri(e)),
        (this.Wr = new Ui(this.serializer));
    }
    start() {
      return Promise.resolve();
    }
    shutdown() {
      return (this.Qr = !1), Promise.resolve();
    }
    get started() {
      return this.Qr;
    }
    setDatabaseDeletedListener() {}
    setNetworkEnabled() {}
    getIndexManager(t) {
      return this.indexManager;
    }
    getDocumentOverlayCache(t) {
      let e = this.overlays[t.toKey()];
      return e || ((e = new $i()), (this.overlays[t.toKey()] = e)), e;
    }
    getMutationQueue(t, e) {
      let r = this.kr[t.toKey()];
      return (
        r ||
          ((r = new Gi(e, this.referenceDelegate)), (this.kr[t.toKey()] = r)),
        r
      );
    }
    getGlobalsCache() {
      return this.Kr;
    }
    getTargetCache() {
      return this.$r;
    }
    getRemoteDocumentCache() {
      return this.remoteDocumentCache;
    }
    getBundleCache() {
      return this.Wr;
    }
    runTransaction(t, e, r) {
      D("MemoryPersistence", "Starting transaction:", t);
      let o = new Ji(this.qr.next());
      return (
        this.referenceDelegate.Gr(),
        r(o)
          .next((s) => this.referenceDelegate.zr(o).next(() => s))
          .toPromise()
          .then((s) => (o.raiseOnCommittedEvent(), s))
      );
    }
    jr(t, e) {
      return b.or(Object.values(this.kr).map((r) => () => r.containsKey(t, e)));
    }
  },
  Ji = class extends hi {
    constructor(t) {
      super(), (this.currentSequenceNumber = t);
    }
  },
  Xi = class n {
    constructor(t) {
      (this.persistence = t), (this.Hr = new un()), (this.Jr = null);
    }
    static Yr(t) {
      return new n(t);
    }
    get Zr() {
      if (this.Jr) return this.Jr;
      throw N();
    }
    addReference(t, e, r) {
      return (
        this.Hr.addReference(r, e), this.Zr.delete(r.toString()), b.resolve()
      );
    }
    removeReference(t, e, r) {
      return (
        this.Hr.removeReference(r, e), this.Zr.add(r.toString()), b.resolve()
      );
    }
    markPotentiallyOrphaned(t, e) {
      return this.Zr.add(e.toString()), b.resolve();
    }
    removeTarget(t, e) {
      this.Hr.mr(e.targetId).forEach((o) => this.Zr.add(o.toString()));
      let r = this.persistence.getTargetCache();
      return r
        .getMatchingKeysForTargetId(t, e.targetId)
        .next((o) => {
          o.forEach((s) => this.Zr.add(s.toString()));
        })
        .next(() => r.removeTargetData(t, e));
    }
    Gr() {
      this.Jr = new Set();
    }
    zr(t) {
      let e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
      return b
        .forEach(this.Zr, (r) => {
          let o = R.fromPath(r);
          return this.Xr(t, o).next((s) => {
            s || e.removeEntry(o, q.min());
          });
        })
        .next(() => ((this.Jr = null), e.apply(t)));
    }
    updateLimboDocument(t, e) {
      return this.Xr(t, e).next((r) => {
        r ? this.Zr.delete(e.toString()) : this.Zr.add(e.toString());
      });
    }
    Ur(t) {
      return 0;
    }
    Xr(t, e) {
      return b.or([
        () => b.resolve(this.Hr.containsKey(e)),
        () => this.persistence.getTargetCache().containsKey(t, e),
        () => this.persistence.jr(t, e),
      ]);
    }
  };
var ta = class n {
  constructor(t, e, r, o) {
    (this.targetId = t), (this.fromCache = e), (this.Ki = r), (this.$i = o);
  }
  static Ui(t, e) {
    let r = Q(),
      o = Q();
    for (let s of e.docChanges)
      switch (s.type) {
        case 0:
          r = r.add(s.doc.key);
          break;
        case 1:
          o = o.add(s.doc.key);
      }
    return new n(t, e.fromCache, r, o);
  }
};
var ea = class {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
};
var na = class {
  constructor() {
    (this.Wi = !1),
      (this.Gi = !1),
      (this.zi = 100),
      (this.ji = (function () {
        return B3() ? 8 : Bu(b3()) > 0 ? 6 : 4;
      })());
  }
  initialize(t, e) {
    (this.Hi = t), (this.indexManager = e), (this.Wi = !0);
  }
  getDocumentsMatchingQuery(t, e, r, o) {
    let s = { result: null };
    return this.Ji(t, e)
      .next((a) => {
        s.result = a;
      })
      .next(() => {
        if (!s.result)
          return this.Yi(t, e, o, r).next((a) => {
            s.result = a;
          });
      })
      .next(() => {
        if (s.result) return;
        let a = new ea();
        return this.Zi(t, e, a).next((l) => {
          if (((s.result = l), this.Gi)) return this.Xi(t, e, a, l.size);
        });
      })
      .next(() => s.result);
  }
  Xi(t, e, r, o) {
    return r.documentReadCount < this.zi
      ? (X0() <= X.DEBUG &&
          D(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            f2(e),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.zi,
            "documents"
          ),
        b.resolve())
      : (X0() <= X.DEBUG &&
          D(
            "QueryEngine",
            "Query:",
            f2(e),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            o,
            "documents as results."
          ),
        r.documentReadCount > this.ji * o
          ? (X0() <= X.DEBUG &&
              D(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                f2(e),
                "as using cache indexes may help improve performance."
              ),
            this.indexManager.createTargetIndexes(t, bt(e)))
          : b.resolve());
  }
  Ji(t, e) {
    if (sh(e)) return b.resolve(null);
    let r = bt(e);
    return this.indexManager.getIndexType(t, r).next((o) =>
      o === 0
        ? null
        : (e.limit !== null && o === 1 && ((e = yi(e, null, "F")), (r = bt(e))),
          this.indexManager.getDocumentsMatchingTarget(t, r).next((s) => {
            let a = Q(...s);
            return this.Hi.getDocuments(t, a).next((l) =>
              this.indexManager.getMinOffset(t, r).next((v) => {
                let d = this.es(e, l);
                return this.ts(e, d, a, v.readTime)
                  ? this.Ji(t, yi(e, null, "F"))
                  : this.ns(t, d, e, v);
              })
            );
          }))
    );
  }
  Yi(t, e, r, o) {
    return sh(e) || o.isEqual(q.min())
      ? b.resolve(null)
      : this.Hi.getDocuments(t, r).next((s) => {
          let a = this.es(e, s);
          return this.ts(e, a, r, o)
            ? b.resolve(null)
            : (X0() <= X.DEBUG &&
                D(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  o.toString(),
                  f2(e)
                ),
              this.ns(t, a, e, Hu(o, -1)).next((l) => l));
        });
  }
  es(t, e) {
    let r = new q1(Ph(t));
    return (
      e.forEach((o, s) => {
        Ao(t, s) && (r = r.add(s));
      }),
      r
    );
  }
  ts(t, e, r, o) {
    if (t.limit === null) return !1;
    if (r.size !== e.size) return !0;
    let s = t.limitType === "F" ? e.last() : e.first();
    return !!s && (s.hasPendingWrites || s.version.compareTo(o) > 0);
  }
  Zi(t, e, r) {
    return (
      X0() <= X.DEBUG &&
        D("QueryEngine", "Using full collection scan to execute query:", f2(e)),
      this.Hi.getDocumentsMatchingQuery(t, e, Ie.min(), r)
    );
  }
  ns(t, e, r, o) {
    return this.Hi.getDocumentsMatchingQuery(t, r, o).next(
      (s) => (
        e.forEach((a) => {
          s = s.insert(a.key, a);
        }),
        s
      )
    );
  }
};
var ra = class {
  constructor(t, e, r, o) {
    (this.persistence = t),
      (this.rs = e),
      (this.serializer = o),
      (this.ss = new C1(r1)),
      (this.os = new we((s) => Fa(s), Za)),
      (this._s = new Map()),
      (this.us = t.getRemoteDocumentCache()),
      (this.$r = t.getTargetCache()),
      (this.Wr = t.getBundleCache()),
      this.cs(r);
  }
  cs(t) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
      (this.indexManager = this.persistence.getIndexManager(t)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        t,
        this.indexManager
      )),
      (this.localDocuments = new ji(
        this.us,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.us.setIndexManager(this.indexManager),
      this.rs.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (e) => t.collect(e, this.ss)
    );
  }
};
function Mg(n, t, e, r) {
  return new ra(n, t, e, r);
}
function r7(n, t) {
  return L(this, null, function* () {
    let e = Z(n);
    return yield e.persistence.runTransaction(
      "Handle user change",
      "readonly",
      (r) => {
        let o;
        return e.mutationQueue
          .getAllMutationBatches(r)
          .next(
            (s) => ((o = s), e.cs(t), e.mutationQueue.getAllMutationBatches(r))
          )
          .next((s) => {
            let a = [],
              l = [],
              v = Q();
            for (let d of o) {
              a.push(d.batchId);
              for (let g of d.mutations) v = v.add(g.key);
            }
            for (let d of s) {
              l.push(d.batchId);
              for (let g of d.mutations) v = v.add(g.key);
            }
            return e.localDocuments
              .getDocuments(r, v)
              .next((d) => ({ ls: d, removedBatchIds: a, addedBatchIds: l }));
          });
      }
    );
  });
}
function Cg(n, t) {
  let e = Z(n);
  return e.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (r) => {
      let o = t.batch.keys(),
        s = e.us.newChangeBuffer({ trackRemovals: !0 });
      return (function (l, v, d, g) {
        let f = d.batch,
          z = f.keys(),
          H = b.resolve();
        return (
          z.forEach((E) => {
            H = H.next(() => g.getEntry(v, E)).next((I) => {
              let S = d.docVersions.get(E);
              d1(S !== null),
                I.version.compareTo(S) < 0 &&
                  (f.applyToRemoteDocument(I, d),
                  I.isValidDocument() &&
                    (I.setReadTime(d.commitVersion), g.addEntry(I)));
            });
          }),
          H.next(() => l.mutationQueue.removeMutationBatch(v, f))
        );
      })(e, r, t, s)
        .next(() => s.apply(r))
        .next(() => e.mutationQueue.performConsistencyCheck(r))
        .next(() =>
          e.documentOverlayCache.removeOverlaysForBatchId(r, o, t.batch.batchId)
        )
        .next(() =>
          e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            r,
            (function (l) {
              let v = Q();
              for (let d = 0; d < l.mutationResults.length; ++d)
                l.mutationResults[d].transformResults.length > 0 &&
                  (v = v.add(l.batch.mutations[d].key));
              return v;
            })(t)
          )
        )
        .next(() => e.localDocuments.getDocuments(r, o));
    }
  );
}
function o7(n) {
  let t = Z(n);
  return t.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (e) => t.$r.getLastRemoteSnapshotVersion(e)
  );
}
function Vg(n, t) {
  let e = Z(n),
    r = t.snapshotVersion,
    o = e.ss;
  return e.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (s) => {
      let a = e.us.newChangeBuffer({ trackRemovals: !0 });
      o = e.ss;
      let l = [];
      t.targetChanges.forEach((g, f) => {
        let z = o.get(f);
        if (!z) return;
        l.push(
          e.$r
            .removeMatchingKeys(s, g.removedDocuments, f)
            .next(() => e.$r.addMatchingKeys(s, g.addedDocuments, f))
        );
        let H = z.withSequenceNumber(s.currentSequenceNumber);
        t.targetMismatches.get(f) !== null
          ? (H = H.withResumeToken(
              G1.EMPTY_BYTE_STRING,
              q.min()
            ).withLastLimboFreeSnapshotVersion(q.min()))
          : g.resumeToken.approximateByteSize() > 0 &&
            (H = H.withResumeToken(g.resumeToken, r)),
          (o = o.insert(f, H)),
          (function (I, S, F) {
            return I.resumeToken.approximateByteSize() === 0 ||
              S.snapshotVersion.toMicroseconds() -
                I.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : F.addedDocuments.size +
                  F.modifiedDocuments.size +
                  F.removedDocuments.size >
                  0;
          })(z, H, g) && l.push(e.$r.updateTargetData(s, H));
      });
      let v = Yt(),
        d = Q();
      if (
        (t.documentUpdates.forEach((g) => {
          t.resolvedLimboDocuments.has(g) &&
            l.push(e.persistence.referenceDelegate.updateLimboDocument(s, g));
        }),
        l.push(
          yg(s, a, t.documentUpdates).next((g) => {
            (v = g.hs), (d = g.Ps);
          })
        ),
        !r.isEqual(q.min()))
      ) {
        let g = e.$r
          .getLastRemoteSnapshotVersion(s)
          .next((f) => e.$r.setTargetsMetadata(s, s.currentSequenceNumber, r));
        l.push(g);
      }
      return b
        .waitFor(l)
        .next(() => a.apply(s))
        .next(() => e.localDocuments.getLocalViewOfDocuments(s, v, d))
        .next(() => v);
    })
    .then((s) => ((e.ss = o), s));
}
function yg(n, t, e) {
  let r = Q(),
    o = Q();
  return (
    e.forEach((s) => (r = r.add(s))),
    t.getEntries(n, r).next((s) => {
      let a = Yt();
      return (
        e.forEach((l, v) => {
          let d = s.get(l);
          v.isFoundDocument() !== d.isFoundDocument() && (o = o.add(l)),
            v.isNoDocument() && v.version.isEqual(q.min())
              ? (t.removeEntry(l, v.readTime), (a = a.insert(l, v)))
              : !d.isValidDocument() ||
                v.version.compareTo(d.version) > 0 ||
                (v.version.compareTo(d.version) === 0 && d.hasPendingWrites)
              ? (t.addEntry(v), (a = a.insert(l, v)))
              : D(
                  "LocalStore",
                  "Ignoring outdated watch update for ",
                  l,
                  ". Current version:",
                  d.version,
                  " Watch version:",
                  v.version
                );
        }),
        { hs: a, Ps: o }
      );
    })
  );
}
function _g(n, t) {
  let e = Z(n);
  return e.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (r) => (
      t === void 0 && (t = -1),
      e.mutationQueue.getNextMutationBatchAfterBatchId(r, t)
    )
  );
}
function Hg(n, t) {
  let e = Z(n);
  return e.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let o;
      return e.$r
        .getTargetData(r, t)
        .next((s) =>
          s
            ? ((o = s), b.resolve(o))
            : e.$r
                .allocateTargetId(r)
                .next(
                  (a) => (
                    (o = new vn(
                      t,
                      a,
                      "TargetPurposeListen",
                      r.currentSequenceNumber
                    )),
                    e.$r.addTargetData(r, o).next(() => o)
                  )
                )
        );
    })
    .then((r) => {
      let o = e.ss.get(r.targetId);
      return (
        (o === null || r.snapshotVersion.compareTo(o.snapshotVersion) > 0) &&
          ((e.ss = e.ss.insert(r.targetId, r)), e.os.set(t, r.targetId)),
        r
      );
    });
}
function oa(n, t, e) {
  return L(this, null, function* () {
    let r = Z(n),
      o = r.ss.get(t),
      s = e ? "readwrite" : "readwrite-primary";
    try {
      e ||
        (yield r.persistence.runTransaction("Release target", s, (a) =>
          r.persistence.referenceDelegate.removeTarget(a, o)
        ));
    } catch (a) {
      if (!fn(a)) throw a;
      D(
        "LocalStore",
        `Failed to update sequence numbers for target ${t}: ${a}`
      );
    }
    (r.ss = r.ss.remove(t)), r.os.delete(o.target);
  });
}
function mh(n, t, e) {
  let r = Z(n),
    o = q.min(),
    s = Q();
  return r.persistence.runTransaction("Execute query", "readwrite", (a) =>
    (function (v, d, g) {
      let f = Z(v),
        z = f.os.get(g);
      return z !== void 0 ? b.resolve(f.ss.get(z)) : f.$r.getTargetData(d, g);
    })(r, a, bt(t))
      .next((l) => {
        if (l)
          return (
            (o = l.lastLimboFreeSnapshotVersion),
            r.$r.getMatchingKeysForTargetId(a, l.targetId).next((v) => {
              s = v;
            })
          );
      })
      .next(() =>
        r.rs.getDocumentsMatchingQuery(a, t, e ? o : q.min(), e ? s : Q())
      )
      .next((l) => (Lg(r, Zu(t), l), { documents: l, Is: s }))
  );
}
function Lg(n, t, e) {
  let r = n._s.get(t) || q.min();
  e.forEach((o, s) => {
    s.readTime.compareTo(r) > 0 && (r = s.readTime);
  }),
    n._s.set(t, r);
}
var co = class {
  constructor() {
    this.activeTargetIds = Wu();
  }
  Vs(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  fs(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  Rs() {
    let t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(t);
  }
};
var sa = class {
  constructor() {
    (this.io = new co()),
      (this.so = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(t) {}
  updateMutationState(t, e, r) {}
  addLocalQueryTarget(t) {
    return this.io.Vs(t), this.so[t] || "not-current";
  }
  updateQueryState(t, e, r) {
    this.so[t] = e;
  }
  removeLocalQueryTarget(t) {
    this.io.fs(t);
  }
  isLocalQueryTarget(t) {
    return this.io.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.so[t];
  }
  getAllActiveQueryTargets() {
    return this.io.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.io.activeTargetIds.has(t);
  }
  start() {
    return (this.io = new co()), Promise.resolve();
  }
  handleUserChange(t, e, r) {}
  setOnlineState(t) {}
  shutdown() {}
  writeSequenceNumber(t) {}
  notifyBundleLoaded(t) {}
};
var ia = class {
  oo(t) {}
  shutdown() {}
};
var ho = class {
  constructor() {
    (this._o = () => this.ao()),
      (this.uo = () => this.co()),
      (this.lo = []),
      this.ho();
  }
  oo(t) {
    this.lo.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this._o),
      window.removeEventListener("offline", this.uo);
  }
  ho() {
    window.addEventListener("online", this._o),
      window.addEventListener("offline", this.uo);
  }
  ao() {
    D("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (let t of this.lo) t(0);
  }
  co() {
    D("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (let t of this.lo) t(1);
  }
  static D() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
};
var Gr = null;
function Xs() {
  return (
    Gr === null
      ? (Gr = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : Gr++,
    "0x" + Gr.toString(16)
  );
}
var Ag = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
var aa = class {
  constructor(t) {
    (this.Po = t.Po), (this.Io = t.Io);
  }
  To(t) {
    this.Eo = t;
  }
  Ao(t) {
    this.Ro = t;
  }
  Vo(t) {
    this.mo = t;
  }
  onMessage(t) {
    this.fo = t;
  }
  close() {
    this.Io();
  }
  send(t) {
    this.Po(t);
  }
  po() {
    this.Eo();
  }
  yo() {
    this.Ro();
  }
  wo(t) {
    this.mo(t);
  }
  So(t) {
    this.fo(t);
  }
};
var $1 = "WebChannelConnection",
  la = class extends class {
    constructor(e) {
      (this.databaseInfo = e), (this.databaseId = e.databaseId);
      let r = e.ssl ? "https" : "http",
        o = encodeURIComponent(this.databaseId.projectId),
        s = encodeURIComponent(this.databaseId.database);
      (this.bo = r + "://" + e.host),
        (this.Do = `projects/${o}/databases/${s}`),
        (this.Co =
          this.databaseId.database === "(default)"
            ? `project_id=${o}`
            : `project_id=${o}&database_id=${s}`);
    }
    get vo() {
      return !1;
    }
    Fo(e, r, o, s, a) {
      let l = Xs(),
        v = this.Mo(e, r.toUriEncodedString());
      D("RestConnection", `Sending RPC '${e}' ${l}:`, v, o);
      let d = {
        "google-cloud-resource-prefix": this.Do,
        "x-goog-request-params": this.Co,
      };
      return (
        this.xo(d, s, a),
        this.Oo(e, v, d, o).then(
          (g) => (D("RestConnection", `Received RPC '${e}' ${l}: `, g), g),
          (g) => {
            throw (
              (_2(
                "RestConnection",
                `RPC '${e}' ${l} failed with error: `,
                g,
                "url: ",
                v,
                "request:",
                o
              ),
              g)
            );
          }
        )
      );
    }
    No(e, r, o, s, a, l) {
      return this.Fo(e, r, o, s, a);
    }
    xo(e, r, o) {
      (e["X-Goog-Api-Client"] = (function () {
        return "gl-js/ fire/" + O2;
      })()),
        (e["Content-Type"] = "text/plain"),
        this.databaseInfo.appId &&
          (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
        r && r.headers.forEach((s, a) => (e[a] = s)),
        o && o.headers.forEach((s, a) => (e[a] = s));
    }
    Mo(e, r) {
      let o = Ag[e];
      return `${this.bo}/v1/${r}:${o}`;
    }
    terminate() {}
  } {
    constructor(t) {
      super(t),
        (this.forceLongPolling = t.forceLongPolling),
        (this.autoDetectLongPolling = t.autoDetectLongPolling),
        (this.useFetchStreams = t.useFetchStreams),
        (this.longPollingOptions = t.longPollingOptions);
    }
    Oo(t, e, r, o) {
      let s = Xs();
      return new Promise((a, l) => {
        let v = new qs();
        v.setWithCredentials(!0),
          v.listenOnce(Ws.COMPLETE, () => {
            try {
              switch (v.getLastErrorCode()) {
                case J0.NO_ERROR:
                  let g = v.getResponseJson();
                  D($1, `XHR for RPC '${t}' ${s} received:`, JSON.stringify(g)),
                    a(g);
                  break;
                case J0.TIMEOUT:
                  D($1, `RPC '${t}' ${s} timed out`),
                    l(new P(A.DEADLINE_EXCEEDED, "Request time out"));
                  break;
                case J0.HTTP_ERROR:
                  let f = v.getStatus();
                  if (
                    (D(
                      $1,
                      `RPC '${t}' ${s} failed with status:`,
                      f,
                      "response text:",
                      v.getResponseText()
                    ),
                    f > 0)
                  ) {
                    let z = v.getResponseJson();
                    Array.isArray(z) && (z = z[0]);
                    let H = z?.error;
                    if (H && H.status && H.message) {
                      let E = (function (S) {
                        let F = S.toLowerCase().replace(/_/g, "-");
                        return Object.values(A).indexOf(F) >= 0 ? F : A.UNKNOWN;
                      })(H.status);
                      l(new P(E, H.message));
                    } else
                      l(
                        new P(
                          A.UNKNOWN,
                          "Server responded with status " + v.getStatus()
                        )
                      );
                  } else l(new P(A.UNAVAILABLE, "Connection failed."));
                  break;
                default:
                  N();
              }
            } finally {
              D($1, `RPC '${t}' ${s} completed.`);
            }
          });
        let d = JSON.stringify(o);
        D($1, `RPC '${t}' ${s} sending request:`, o),
          v.send(e, "POST", d, r, 15);
      });
    }
    Lo(t, e, r) {
      let o = Xs(),
        s = [this.bo, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
        a = Ys(),
        l = Qs(),
        v = {
          httpSessionIdParam: "gsessionid",
          initMessageHeaders: {},
          messageUrlParams: {
            database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
          },
          sendRawJson: !0,
          supportsCrossDomainXhr: !0,
          internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
          forceLongPolling: this.forceLongPolling,
          detectBufferingProxy: this.autoDetectLongPolling,
        },
        d = this.longPollingOptions.timeoutSeconds;
      d !== void 0 && (v.longPollingTimeout = Math.round(1e3 * d)),
        this.useFetchStreams && (v.xmlHttpFactory = new Gs({})),
        this.xo(v.initMessageHeaders, e, r),
        (v.encodeInitMessageHeaders = !0);
      let g = s.join("");
      D($1, `Creating RPC '${t}' stream ${o}: ${g}`, v);
      let f = a.createWebChannel(g, v),
        z = !1,
        H = !1,
        E = new aa({
          Po: (S) => {
            H
              ? D(
                  $1,
                  `Not sending because RPC '${t}' stream ${o} is closed:`,
                  S
                )
              : (z ||
                  (D($1, `Opening RPC '${t}' stream ${o} transport.`),
                  f.open(),
                  (z = !0)),
                D($1, `RPC '${t}' stream ${o} sending:`, S),
                f.send(S));
          },
          Io: () => f.close(),
        }),
        I = (S, F, G) => {
          S.listen(F, (t1) => {
            try {
              G(t1);
            } catch (w1) {
              setTimeout(() => {
                throw w1;
              }, 0);
            }
          });
        };
      return (
        I(f, w2.EventType.OPEN, () => {
          H || (D($1, `RPC '${t}' stream ${o} transport opened.`), E.po());
        }),
        I(f, w2.EventType.CLOSE, () => {
          H ||
            ((H = !0),
            D($1, `RPC '${t}' stream ${o} transport closed`),
            E.wo());
        }),
        I(f, w2.EventType.ERROR, (S) => {
          H ||
            ((H = !0),
            _2($1, `RPC '${t}' stream ${o} transport errored:`, S),
            E.wo(new P(A.UNAVAILABLE, "The operation could not be completed")));
        }),
        I(f, w2.EventType.MESSAGE, (S) => {
          var F;
          if (!H) {
            let G = S.data[0];
            d1(!!G);
            let t1 = G,
              w1 =
                t1.error ||
                ((F = t1[0]) === null || F === void 0 ? void 0 : F.error);
            if (w1) {
              D($1, `RPC '${t}' stream ${o} received error:`, w1);
              let st = w1.status,
                u1 = (function (w) {
                  let x = _1[w];
                  if (x !== void 0) return Kh(x);
                })(st),
                C = w1.message;
              u1 === void 0 &&
                ((u1 = A.INTERNAL),
                (C =
                  "Unknown error status: " +
                  st +
                  " with message " +
                  w1.message)),
                (H = !0),
                E.wo(new P(u1, C)),
                f.close();
            } else D($1, `RPC '${t}' stream ${o} received:`, G), E.So(G);
          }
        }),
        I(l, Ks.STAT_EVENT, (S) => {
          S.stat === $r.PROXY
            ? D($1, `RPC '${t}' stream ${o} detected buffering proxy`)
            : S.stat === $r.NOPROXY &&
              D($1, `RPC '${t}' stream ${o} detected no buffering proxy`);
        }),
        setTimeout(() => {
          E.yo();
        }, 0),
        E
      );
    }
  };
function ti() {
  return typeof document < "u" ? document : null;
}
function bo(n) {
  return new Ei(n, !0);
}
var vo = class {
  constructor(t, e, r = 1e3, o = 1.5, s = 6e4) {
    (this.ai = t),
      (this.timerId = e),
      (this.Bo = r),
      (this.ko = o),
      (this.qo = s),
      (this.Qo = 0),
      (this.Ko = null),
      (this.$o = Date.now()),
      this.reset();
  }
  reset() {
    this.Qo = 0;
  }
  Uo() {
    this.Qo = this.qo;
  }
  Wo(t) {
    this.cancel();
    let e = Math.floor(this.Qo + this.Go()),
      r = Math.max(0, Date.now() - this.$o),
      o = Math.max(0, e - r);
    o > 0 &&
      D(
        "ExponentialBackoff",
        `Backing off for ${o} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`
      ),
      (this.Ko = this.ai.enqueueAfterDelay(
        this.timerId,
        o,
        () => ((this.$o = Date.now()), t())
      )),
      (this.Qo *= this.ko),
      this.Qo < this.Bo && (this.Qo = this.Bo),
      this.Qo > this.qo && (this.Qo = this.qo);
  }
  zo() {
    this.Ko !== null && (this.Ko.skipDelay(), (this.Ko = null));
  }
  cancel() {
    this.Ko !== null && (this.Ko.cancel(), (this.Ko = null));
  }
  Go() {
    return (Math.random() - 0.5) * this.Qo;
  }
};
var uo = class {
    constructor(t, e, r, o, s, a, l, v) {
      (this.ai = t),
        (this.jo = r),
        (this.Ho = o),
        (this.connection = s),
        (this.authCredentialsProvider = a),
        (this.appCheckCredentialsProvider = l),
        (this.listener = v),
        (this.state = 0),
        (this.Jo = 0),
        (this.Yo = null),
        (this.Zo = null),
        (this.stream = null),
        (this.Xo = 0),
        (this.e_ = new vo(t, e));
    }
    t_() {
      return this.state === 1 || this.state === 5 || this.n_();
    }
    n_() {
      return this.state === 2 || this.state === 3;
    }
    start() {
      (this.Xo = 0), this.state !== 4 ? this.auth() : this.r_();
    }
    stop() {
      return L(this, null, function* () {
        this.t_() && (yield this.close(0));
      });
    }
    i_() {
      (this.state = 0), this.e_.reset();
    }
    s_() {
      this.n_() &&
        this.Yo === null &&
        (this.Yo = this.ai.enqueueAfterDelay(this.jo, 6e4, () => this.o_()));
    }
    __(t) {
      this.a_(), this.stream.send(t);
    }
    o_() {
      return L(this, null, function* () {
        if (this.n_()) return this.close(0);
      });
    }
    a_() {
      this.Yo && (this.Yo.cancel(), (this.Yo = null));
    }
    u_() {
      this.Zo && (this.Zo.cancel(), (this.Zo = null));
    }
    close(t, e) {
      return L(this, null, function* () {
        this.a_(),
          this.u_(),
          this.e_.cancel(),
          this.Jo++,
          t !== 4
            ? this.e_.reset()
            : e && e.code === A.RESOURCE_EXHAUSTED
            ? (Kt(e.toString()),
              Kt(
                "Using maximum backoff delay to prevent overloading the backend."
              ),
              this.e_.Uo())
            : e &&
              e.code === A.UNAUTHENTICATED &&
              this.state !== 3 &&
              (this.authCredentialsProvider.invalidateToken(),
              this.appCheckCredentialsProvider.invalidateToken()),
          this.stream !== null &&
            (this.c_(), this.stream.close(), (this.stream = null)),
          (this.state = t),
          yield this.listener.Vo(e);
      });
    }
    c_() {}
    auth() {
      this.state = 1;
      let t = this.l_(this.Jo),
        e = this.Jo;
      Promise.all([
        this.authCredentialsProvider.getToken(),
        this.appCheckCredentialsProvider.getToken(),
      ]).then(
        ([r, o]) => {
          this.Jo === e && this.h_(r, o);
        },
        (r) => {
          t(() => {
            let o = new P(
              A.UNKNOWN,
              "Fetching auth token failed: " + r.message
            );
            return this.P_(o);
          });
        }
      );
    }
    h_(t, e) {
      let r = this.l_(this.Jo);
      (this.stream = this.I_(t, e)),
        this.stream.To(() => {
          r(() => this.listener.To());
        }),
        this.stream.Ao(() => {
          r(
            () => (
              (this.state = 2),
              (this.Zo = this.ai.enqueueAfterDelay(
                this.Ho,
                1e4,
                () => (this.n_() && (this.state = 3), Promise.resolve())
              )),
              this.listener.Ao()
            )
          );
        }),
        this.stream.Vo((o) => {
          r(() => this.P_(o));
        }),
        this.stream.onMessage((o) => {
          r(() => (++this.Xo == 1 ? this.T_(o) : this.onNext(o)));
        });
    }
    r_() {
      (this.state = 5),
        this.e_.Wo(() =>
          L(this, null, function* () {
            (this.state = 0), this.start();
          })
        );
    }
    P_(t) {
      return (
        D("PersistentStream", `close with error: ${t}`),
        (this.stream = null),
        this.close(4, t)
      );
    }
    l_(t) {
      return (e) => {
        this.ai.enqueueAndForget(() =>
          this.Jo === t
            ? e()
            : (D(
                "PersistentStream",
                "stream callback skipped by getCloseGuardedDispatcher."
              ),
              Promise.resolve())
        );
      };
    }
  },
  ca = class extends uo {
    constructor(t, e, r, o, s, a) {
      super(
        t,
        "listen_stream_connection_backoff",
        "listen_stream_idle",
        "health_check_timeout",
        e,
        r,
        o,
        a
      ),
        (this.serializer = s);
    }
    I_(t, e) {
      return this.connection.Lo("Listen", t, e);
    }
    T_(t) {
      return this.onNext(t);
    }
    onNext(t) {
      this.e_.reset();
      let e = cg(this.serializer, t),
        r = (function (s) {
          if (!("targetChange" in s)) return q.min();
          let a = s.targetChange;
          return a.targetIds && a.targetIds.length
            ? q.min()
            : a.readTime
            ? Bt(a.readTime)
            : q.min();
        })(t);
      return this.listener.E_(e, r);
    }
    d_(t) {
      let e = {};
      (e.database = Pi(this.serializer)),
        (e.addTarget = (function (s, a) {
          let l,
            v = a.target;
          if (
            ((l = Vi(v) ? { documents: dg(s, v) } : { query: ug(s, v)._t }),
            (l.targetId = a.targetId),
            a.resumeToken.approximateByteSize() > 0)
          ) {
            l.resumeToken = Qh(s, a.resumeToken);
            let d = Ii(s, a.expectedCount);
            d !== null && (l.expectedCount = d);
          } else if (a.snapshotVersion.compareTo(q.min()) > 0) {
            l.readTime = ao(s, a.snapshotVersion.toTimestamp());
            let d = Ii(s, a.expectedCount);
            d !== null && (l.expectedCount = d);
          }
          return l;
        })(this.serializer, t));
      let r = pg(this.serializer, t);
      r && (e.labels = r), this.__(e);
    }
    A_(t) {
      let e = {};
      (e.database = Pi(this.serializer)), (e.removeTarget = t), this.__(e);
    }
  },
  ha = class extends uo {
    constructor(t, e, r, o, s, a) {
      super(
        t,
        "write_stream_connection_backoff",
        "write_stream_idle",
        "health_check_timeout",
        e,
        r,
        o,
        a
      ),
        (this.serializer = s);
    }
    get R_() {
      return this.Xo > 0;
    }
    start() {
      (this.lastStreamToken = void 0), super.start();
    }
    c_() {
      this.R_ && this.V_([]);
    }
    I_(t, e) {
      return this.connection.Lo("Write", t, e);
    }
    T_(t) {
      return (
        d1(!!t.streamToken),
        (this.lastStreamToken = t.streamToken),
        d1(!t.writeResults || t.writeResults.length === 0),
        this.listener.m_()
      );
    }
    onNext(t) {
      d1(!!t.streamToken),
        (this.lastStreamToken = t.streamToken),
        this.e_.reset();
      let e = vg(t.writeResults, t.commitTime),
        r = Bt(t.commitTime);
      return this.listener.f_(r, e);
    }
    g_() {
      let t = {};
      (t.database = Pi(this.serializer)), this.__(t);
    }
    V_(t) {
      let e = {
        streamToken: this.lastStreamToken,
        writes: t.map((r) => hg(this.serializer, r)),
      };
      this.__(e);
    }
  };
var va = class extends class {} {
    constructor(t, e, r, o) {
      super(),
        (this.authCredentials = t),
        (this.appCheckCredentials = e),
        (this.connection = r),
        (this.serializer = o),
        (this.p_ = !1);
    }
    y_() {
      if (this.p_)
        throw new P(
          A.FAILED_PRECONDITION,
          "The client has already been terminated."
        );
    }
    Fo(t, e, r, o) {
      return (
        this.y_(),
        Promise.all([
          this.authCredentials.getToken(),
          this.appCheckCredentials.getToken(),
        ])
          .then(([s, a]) => this.connection.Fo(t, Ti(e, r), o, s, a))
          .catch((s) => {
            throw s.name === "FirebaseError"
              ? (s.code === A.UNAUTHENTICATED &&
                  (this.authCredentials.invalidateToken(),
                  this.appCheckCredentials.invalidateToken()),
                s)
              : new P(A.UNKNOWN, s.toString());
          })
      );
    }
    No(t, e, r, o, s) {
      return (
        this.y_(),
        Promise.all([
          this.authCredentials.getToken(),
          this.appCheckCredentials.getToken(),
        ])
          .then(([a, l]) => this.connection.No(t, Ti(e, r), o, a, l, s))
          .catch((a) => {
            throw a.name === "FirebaseError"
              ? (a.code === A.UNAUTHENTICATED &&
                  (this.authCredentials.invalidateToken(),
                  this.appCheckCredentials.invalidateToken()),
                a)
              : new P(A.UNKNOWN, a.toString());
          })
      );
    }
    terminate() {
      (this.p_ = !0), this.connection.terminate();
    }
  },
  da = class {
    constructor(t, e) {
      (this.asyncQueue = t),
        (this.onlineStateHandler = e),
        (this.state = "Unknown"),
        (this.w_ = 0),
        (this.S_ = null),
        (this.b_ = !0);
    }
    D_() {
      this.w_ === 0 &&
        (this.C_("Unknown"),
        (this.S_ = this.asyncQueue.enqueueAfterDelay(
          "online_state_timeout",
          1e4,
          () => (
            (this.S_ = null),
            this.v_("Backend didn't respond within 10 seconds."),
            this.C_("Offline"),
            Promise.resolve()
          )
        )));
    }
    F_(t) {
      this.state === "Online"
        ? this.C_("Unknown")
        : (this.w_++,
          this.w_ >= 1 &&
            (this.M_(),
            this.v_(
              `Connection failed 1 times. Most recent error: ${t.toString()}`
            ),
            this.C_("Offline")));
    }
    set(t) {
      this.M_(), (this.w_ = 0), t === "Online" && (this.b_ = !1), this.C_(t);
    }
    C_(t) {
      t !== this.state && ((this.state = t), this.onlineStateHandler(t));
    }
    v_(t) {
      let e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
      this.b_ ? (Kt(e), (this.b_ = !1)) : D("OnlineStateTracker", e);
    }
    M_() {
      this.S_ !== null && (this.S_.cancel(), (this.S_ = null));
    }
  };
var ua = class {
  constructor(t, e, r, o, s) {
    (this.localStore = t),
      (this.datastore = e),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.x_ = []),
      (this.O_ = new Map()),
      (this.N_ = new Set()),
      (this.L_ = []),
      (this.B_ = s),
      this.B_.oo((a) => {
        r.enqueueAndForget(() =>
          L(this, null, function* () {
            Ze(this) &&
              (D(
                "RemoteStore",
                "Restarting streams for network reachability change."
              ),
              yield (function (v) {
                return L(this, null, function* () {
                  let d = Z(v);
                  d.N_.add(4),
                    yield xn(d),
                    d.k_.set("Unknown"),
                    d.N_.delete(4),
                    yield Bo(d);
                });
              })(this));
          })
        );
      }),
      (this.k_ = new da(r, o));
  }
};
function Bo(n) {
  return L(this, null, function* () {
    if (Ze(n)) for (let t of n.L_) yield t(!0);
  });
}
function xn(n) {
  return L(this, null, function* () {
    for (let t of n.L_) yield t(!1);
  });
}
function s7(n, t) {
  let e = Z(n);
  e.O_.has(t.targetId) ||
    (e.O_.set(t.targetId, t), Ga(e) ? qa(e) : N2(e).n_() && $a(e, t));
}
function Ua(n, t) {
  let e = Z(n),
    r = N2(e);
  e.O_.delete(t),
    r.n_() && i7(e, t),
    e.O_.size === 0 && (r.n_() ? r.s_() : Ze(e) && e.k_.set("Unknown"));
}
function $a(n, t) {
  if (
    (n.q_.xe(t.targetId),
    t.resumeToken.approximateByteSize() > 0 ||
      t.snapshotVersion.compareTo(q.min()) > 0)
  ) {
    let e = n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(e);
  }
  N2(n).d_(t);
}
function i7(n, t) {
  n.q_.xe(t), N2(n).A_(t);
}
function qa(n) {
  (n.q_ = new ki({
    getRemoteKeysForTarget: (t) => n.remoteSyncer.getRemoteKeysForTarget(t),
    ot: (t) => n.O_.get(t) || null,
    tt: () => n.datastore.serializer.databaseId,
  })),
    N2(n).start(),
    n.k_.D_();
}
function Ga(n) {
  return Ze(n) && !N2(n).t_() && n.O_.size > 0;
}
function Ze(n) {
  return Z(n).N_.size === 0;
}
function a7(n) {
  n.q_ = void 0;
}
function bg(n) {
  return L(this, null, function* () {
    n.k_.set("Online");
  });
}
function Bg(n) {
  return L(this, null, function* () {
    n.O_.forEach((t, e) => {
      $a(n, t);
    });
  });
}
function Sg(n, t) {
  return L(this, null, function* () {
    a7(n), Ga(n) ? (n.k_.F_(t), qa(n)) : n.k_.set("Unknown");
  });
}
function kg(n, t, e) {
  return L(this, null, function* () {
    if ((n.k_.set("Online"), t instanceof so && t.state === 2 && t.cause))
      try {
        yield (function (o, s) {
          return L(this, null, function* () {
            let a = s.cause;
            for (let l of s.targetIds)
              o.O_.has(l) &&
                (yield o.remoteSyncer.rejectListen(l, a),
                o.O_.delete(l),
                o.q_.removeTarget(l));
          });
        })(n, t);
      } catch (r) {
        D(
          "RemoteStore",
          "Failed to remove targets %s: %s ",
          t.targetIds.join(","),
          r
        ),
          yield go(n, r);
      }
    else if (
      (t instanceof V2 ? n.q_.Ke(t) : t instanceof oo ? n.q_.He(t) : n.q_.We(t),
      !e.isEqual(q.min()))
    )
      try {
        let r = yield o7(n.localStore);
        e.compareTo(r) >= 0 &&
          (yield (function (s, a) {
            let l = s.q_.rt(a);
            return (
              l.targetChanges.forEach((v, d) => {
                if (v.resumeToken.approximateByteSize() > 0) {
                  let g = s.O_.get(d);
                  g && s.O_.set(d, g.withResumeToken(v.resumeToken, a));
                }
              }),
              l.targetMismatches.forEach((v, d) => {
                let g = s.O_.get(v);
                if (!g) return;
                s.O_.set(
                  v,
                  g.withResumeToken(G1.EMPTY_BYTE_STRING, g.snapshotVersion)
                ),
                  i7(s, v);
                let f = new vn(g.target, v, d, g.sequenceNumber);
                $a(s, f);
              }),
              s.remoteSyncer.applyRemoteEvent(l)
            );
          })(n, e));
      } catch (r) {
        D("RemoteStore", "Failed to raise snapshot:", r), yield go(n, r);
      }
  });
}
function go(n, t, e) {
  return L(this, null, function* () {
    if (!fn(t)) throw t;
    n.N_.add(1),
      yield xn(n),
      n.k_.set("Offline"),
      e || (e = () => o7(n.localStore)),
      n.asyncQueue.enqueueRetryable(() =>
        L(this, null, function* () {
          D("RemoteStore", "Retrying IndexedDB access"),
            yield e(),
            n.N_.delete(1),
            yield Bo(n);
        })
      );
  });
}
function l7(n, t) {
  return t().catch((e) => go(n, e, t));
}
function So(n) {
  return L(this, null, function* () {
    let t = Z(n),
      e = fe(t),
      r = t.x_.length > 0 ? t.x_[t.x_.length - 1].batchId : -1;
    for (; Eg(t); )
      try {
        let o = yield _g(t.localStore, r);
        if (o === null) {
          t.x_.length === 0 && e.s_();
          break;
        }
        (r = o.batchId), Ig(t, o);
      } catch (o) {
        yield go(t, o);
      }
    c7(t) && h7(t);
  });
}
function Eg(n) {
  return Ze(n) && n.x_.length < 10;
}
function Ig(n, t) {
  n.x_.push(t);
  let e = fe(n);
  e.n_() && e.R_ && e.V_(t.mutations);
}
function c7(n) {
  return Ze(n) && !fe(n).t_() && n.x_.length > 0;
}
function h7(n) {
  fe(n).start();
}
function Tg(n) {
  return L(this, null, function* () {
    fe(n).g_();
  });
}
function Dg(n) {
  return L(this, null, function* () {
    let t = fe(n);
    for (let e of n.x_) t.V_(e.mutations);
  });
}
function Pg(n, t, e) {
  return L(this, null, function* () {
    let r = n.x_.shift(),
      o = Ai.from(r, t, e);
    yield l7(n, () => n.remoteSyncer.applySuccessfulWrite(o)), yield So(n);
  });
}
function Rg(n, t) {
  return L(this, null, function* () {
    t &&
      fe(n).R_ &&
      (yield (function (r, o) {
        return L(this, null, function* () {
          if (
            (function (a) {
              return eg(a) && a !== A.ABORTED;
            })(o.code)
          ) {
            let s = r.x_.shift();
            fe(r).i_(),
              yield l7(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, o)),
              yield So(r);
          }
        });
      })(n, t)),
      c7(n) && h7(n);
  });
}
function wh(n, t) {
  return L(this, null, function* () {
    let e = Z(n);
    e.asyncQueue.verifyOperationInProgress(),
      D("RemoteStore", "RemoteStore received new credentials");
    let r = Ze(e);
    e.N_.add(3),
      yield xn(e),
      r && e.k_.set("Unknown"),
      yield e.remoteSyncer.handleCredentialChange(t),
      e.N_.delete(3),
      yield Bo(e);
  });
}
function Og(n, t) {
  return L(this, null, function* () {
    let e = Z(n);
    t
      ? (e.N_.delete(2), yield Bo(e))
      : t || (e.N_.add(2), yield xn(e), e.k_.set("Unknown"));
  });
}
function N2(n) {
  return (
    n.Q_ ||
      ((n.Q_ = (function (e, r, o) {
        let s = Z(e);
        return (
          s.y_(),
          new ca(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            o
          )
        );
      })(n.datastore, n.asyncQueue, {
        To: bg.bind(null, n),
        Ao: Bg.bind(null, n),
        Vo: Sg.bind(null, n),
        E_: kg.bind(null, n),
      })),
      n.L_.push((t) =>
        L(this, null, function* () {
          t
            ? (n.Q_.i_(), Ga(n) ? qa(n) : n.k_.set("Unknown"))
            : (yield n.Q_.stop(), a7(n));
        })
      )),
    n.Q_
  );
}
function fe(n) {
  return (
    n.K_ ||
      ((n.K_ = (function (e, r, o) {
        let s = Z(e);
        return (
          s.y_(),
          new ha(
            r,
            s.connection,
            s.authCredentials,
            s.appCheckCredentials,
            s.serializer,
            o
          )
        );
      })(n.datastore, n.asyncQueue, {
        To: () => Promise.resolve(),
        Ao: Tg.bind(null, n),
        Vo: Rg.bind(null, n),
        m_: Dg.bind(null, n),
        f_: Pg.bind(null, n),
      })),
      n.L_.push((t) =>
        L(this, null, function* () {
          t
            ? (n.K_.i_(), yield So(n))
            : (yield n.K_.stop(),
              n.x_.length > 0 &&
                (D(
                  "RemoteStore",
                  `Stopping write stream with ${n.x_.length} pending writes`
                ),
                (n.x_ = [])));
        })
      )),
    n.K_
  );
}
var ga = class n {
  constructor(t, e, r, o, s) {
    (this.asyncQueue = t),
      (this.timerId = e),
      (this.targetTimeMs = r),
      (this.op = o),
      (this.removalCallback = s),
      (this.deferred = new Lt()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((a) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, e, r, o, s) {
    let a = Date.now() + r,
      l = new n(t, e, a, o, s);
    return l.start(r), l;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new P(A.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
};
function Wa(n, t) {
  if ((Kt("AsyncQueue", `${t}: ${n}`), fn(n)))
    return new P(A.UNAVAILABLE, `${t}: ${n}`);
  throw n;
}
var po = class n {
  constructor(t) {
    (this.comparator = t
      ? (e, r) => t(e, r) || R.comparator(e.key, r.key)
      : (e, r) => R.comparator(e.key, r.key)),
      (this.keyedMap = tn()),
      (this.sortedSet = new C1(this.comparator));
  }
  static emptySet(t) {
    return new n(t.comparator);
  }
  has(t) {
    return this.keyedMap.get(t) != null;
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t) {
    let e = this.keyedMap.get(t);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t) {
    this.sortedSet.inorderTraversal((e, r) => (t(e), !1));
  }
  add(t) {
    let e = this.delete(t.key);
    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
  }
  delete(t) {
    let e = this.get(t);
    return e
      ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e))
      : this;
  }
  isEqual(t) {
    if (!(t instanceof n) || this.size !== t.size) return !1;
    let e = this.sortedSet.getIterator(),
      r = t.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      let o = e.getNext().key,
        s = r.getNext().key;
      if (!o.isEqual(s)) return !1;
    }
    return !0;
  }
  toString() {
    let t = [];
    return (
      this.forEach((e) => {
        t.push(e.toString());
      }),
      t.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          t.join(`
`) +
          `
)`
    );
  }
  copy(t, e) {
    let r = new n();
    return (
      (r.comparator = this.comparator), (r.keyedMap = t), (r.sortedSet = e), r
    );
  }
};
var mo = class {
    constructor() {
      this.U_ = new C1(R.comparator);
    }
    track(t) {
      let e = t.doc.key,
        r = this.U_.get(e);
      r
        ? t.type !== 0 && r.type === 3
          ? (this.U_ = this.U_.insert(e, t))
          : t.type === 3 && r.type !== 1
          ? (this.U_ = this.U_.insert(e, { type: r.type, doc: t.doc }))
          : t.type === 2 && r.type === 2
          ? (this.U_ = this.U_.insert(e, { type: 2, doc: t.doc }))
          : t.type === 2 && r.type === 0
          ? (this.U_ = this.U_.insert(e, { type: 0, doc: t.doc }))
          : t.type === 1 && r.type === 0
          ? (this.U_ = this.U_.remove(e))
          : t.type === 1 && r.type === 2
          ? (this.U_ = this.U_.insert(e, { type: 1, doc: r.doc }))
          : t.type === 0 && r.type === 1
          ? (this.U_ = this.U_.insert(e, { type: 2, doc: t.doc }))
          : N()
        : (this.U_ = this.U_.insert(e, t));
    }
    W_() {
      let t = [];
      return (
        this.U_.inorderTraversal((e, r) => {
          t.push(r);
        }),
        t
      );
    }
  },
  D2 = class n {
    constructor(t, e, r, o, s, a, l, v, d) {
      (this.query = t),
        (this.docs = e),
        (this.oldDocs = r),
        (this.docChanges = o),
        (this.mutatedKeys = s),
        (this.fromCache = a),
        (this.syncStateChanged = l),
        (this.excludesMetadataChanges = v),
        (this.hasCachedResults = d);
    }
    static fromInitialDocuments(t, e, r, o, s) {
      let a = [];
      return (
        e.forEach((l) => {
          a.push({ type: 0, doc: l });
        }),
        new n(t, e, po.emptySet(e), a, r, o, !0, !1, s)
      );
    }
    get hasPendingWrites() {
      return !this.mutatedKeys.isEmpty();
    }
    isEqual(t) {
      if (
        !(
          this.fromCache === t.fromCache &&
          this.hasCachedResults === t.hasCachedResults &&
          this.syncStateChanged === t.syncStateChanged &&
          this.mutatedKeys.isEqual(t.mutatedKeys) &&
          Lo(this.query, t.query) &&
          this.docs.isEqual(t.docs) &&
          this.oldDocs.isEqual(t.oldDocs)
        )
      )
        return !1;
      let e = this.docChanges,
        r = t.docChanges;
      if (e.length !== r.length) return !1;
      for (let o = 0; o < e.length; o++)
        if (e[o].type !== r[o].type || !e[o].doc.isEqual(r[o].doc)) return !1;
      return !0;
    }
  };
var pa = class {
    constructor() {
      (this.G_ = void 0), (this.z_ = []);
    }
    j_() {
      return this.z_.some((t) => t.H_());
    }
  },
  ma = class {
    constructor() {
      (this.queries = fh()),
        (this.onlineState = "Unknown"),
        (this.J_ = new Set());
    }
    terminate() {
      (function (e, r) {
        let o = Z(e),
          s = o.queries;
        (o.queries = fh()),
          s.forEach((a, l) => {
            for (let v of l.z_) v.onError(r);
          });
      })(this, new P(A.ABORTED, "Firestore shutting down"));
    }
  };
function fh() {
  return new we((n) => Dh(n), Lo);
}
function Ng(n, t) {
  return L(this, null, function* () {
    let e = Z(n),
      r = 3,
      o = t.query,
      s = e.queries.get(o);
    s ? !s.j_() && t.H_() && (r = 2) : ((s = new pa()), (r = t.H_() ? 0 : 1));
    try {
      switch (r) {
        case 0:
          s.G_ = yield e.onListen(o, !0);
          break;
        case 1:
          s.G_ = yield e.onListen(o, !1);
          break;
        case 2:
          yield e.onFirstRemoteStoreListen(o);
      }
    } catch (a) {
      let l = Wa(a, `Initialization of query '${f2(t.query)}' failed`);
      return void t.onError(l);
    }
    e.queries.set(o, s),
      s.z_.push(t),
      t.Y_(e.onlineState),
      s.G_ && t.Z_(s.G_) && Ka(e);
  });
}
function Fg(n, t) {
  return L(this, null, function* () {
    let e = Z(n),
      r = t.query,
      o = 3,
      s = e.queries.get(r);
    if (s) {
      let a = s.z_.indexOf(t);
      a >= 0 &&
        (s.z_.splice(a, 1),
        s.z_.length === 0
          ? (o = t.H_() ? 0 : 1)
          : !s.j_() && t.H_() && (o = 2));
    }
    switch (o) {
      case 0:
        return e.queries.delete(r), e.onUnlisten(r, !0);
      case 1:
        return e.queries.delete(r), e.onUnlisten(r, !1);
      case 2:
        return e.onLastRemoteStoreUnlisten(r);
      default:
        return;
    }
  });
}
function Zg(n, t) {
  let e = Z(n),
    r = !1;
  for (let o of t) {
    let s = o.query,
      a = e.queries.get(s);
    if (a) {
      for (let l of a.z_) l.Z_(o) && (r = !0);
      a.G_ = o;
    }
  }
  r && Ka(e);
}
function jg(n, t, e) {
  let r = Z(n),
    o = r.queries.get(t);
  if (o) for (let s of o.z_) s.onError(e);
  r.queries.delete(t);
}
function Ka(n) {
  n.J_.forEach((t) => {
    t.next();
  });
}
var wa, xh;
((xh = wa || (wa = {})).X_ = "default"), (xh.Cache = "cache");
var fa = class {
  constructor(t, e, r) {
    (this.query = t),
      (this.ea = e),
      (this.ta = !1),
      (this.na = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  Z_(t) {
    if (!this.options.includeMetadataChanges) {
      let r = [];
      for (let o of t.docChanges) o.type !== 3 && r.push(o);
      t = new D2(
        t.query,
        t.docs,
        t.oldDocs,
        r,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        !0,
        t.hasCachedResults
      );
    }
    let e = !1;
    return (
      this.ta
        ? this.ra(t) && (this.ea.next(t), (e = !0))
        : this.ia(t, this.onlineState) && (this.sa(t), (e = !0)),
      (this.na = t),
      e
    );
  }
  onError(t) {
    this.ea.error(t);
  }
  Y_(t) {
    this.onlineState = t;
    let e = !1;
    return (
      this.na &&
        !this.ta &&
        this.ia(this.na, t) &&
        (this.sa(this.na), (e = !0)),
      e
    );
  }
  ia(t, e) {
    if (!t.fromCache || !this.H_()) return !0;
    let r = e !== "Offline";
    return (
      (!this.options.oa || !r) &&
      (!t.docs.isEmpty() || t.hasCachedResults || e === "Offline")
    );
  }
  ra(t) {
    if (t.docChanges.length > 0) return !0;
    let e = this.na && this.na.hasPendingWrites !== t.hasPendingWrites;
    return (
      !(!t.syncStateChanged && !e) && this.options.includeMetadataChanges === !0
    );
  }
  sa(t) {
    (t = D2.fromInitialDocuments(
      t.query,
      t.docs,
      t.mutatedKeys,
      t.fromCache,
      t.hasCachedResults
    )),
      (this.ta = !0),
      this.ea.next(t);
  }
  H_() {
    return this.options.source !== wa.Cache;
  }
};
var wo = class {
    constructor(t) {
      this.key = t;
    }
  },
  fo = class {
    constructor(t) {
      this.key = t;
    }
  },
  xa = class {
    constructor(t, e) {
      (this.query = t),
        (this.Ia = e),
        (this.Ta = null),
        (this.hasCachedResults = !1),
        (this.current = !1),
        (this.Ea = Q()),
        (this.mutatedKeys = Q()),
        (this.da = Ph(t)),
        (this.Aa = new po(this.da));
    }
    get Ra() {
      return this.Ia;
    }
    Va(t, e) {
      let r = e ? e.ma : new mo(),
        o = e ? e.Aa : this.Aa,
        s = e ? e.mutatedKeys : this.mutatedKeys,
        a = o,
        l = !1,
        v =
          this.query.limitType === "F" && o.size === this.query.limit
            ? o.last()
            : null,
        d =
          this.query.limitType === "L" && o.size === this.query.limit
            ? o.first()
            : null;
      if (
        (t.inorderTraversal((g, f) => {
          let z = o.get(g),
            H = Ao(this.query, f) ? f : null,
            E = !!z && this.mutatedKeys.has(z.key),
            I =
              !!H &&
              (H.hasLocalMutations ||
                (this.mutatedKeys.has(H.key) && H.hasCommittedMutations)),
            S = !1;
          z && H
            ? z.data.isEqual(H.data)
              ? E !== I && (r.track({ type: 3, doc: H }), (S = !0))
              : this.fa(z, H) ||
                (r.track({ type: 2, doc: H }),
                (S = !0),
                ((v && this.da(H, v) > 0) || (d && this.da(H, d) < 0)) &&
                  (l = !0))
            : !z && H
            ? (r.track({ type: 0, doc: H }), (S = !0))
            : z &&
              !H &&
              (r.track({ type: 1, doc: z }), (S = !0), (v || d) && (l = !0)),
            S &&
              (H
                ? ((a = a.add(H)), (s = I ? s.add(g) : s.delete(g)))
                : ((a = a.delete(g)), (s = s.delete(g))));
        }),
        this.query.limit !== null)
      )
        for (; a.size > this.query.limit; ) {
          let g = this.query.limitType === "F" ? a.last() : a.first();
          (a = a.delete(g.key)),
            (s = s.delete(g.key)),
            r.track({ type: 1, doc: g });
        }
      return { Aa: a, ma: r, ts: l, mutatedKeys: s };
    }
    fa(t, e) {
      return (
        t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
      );
    }
    applyChanges(t, e, r, o) {
      let s = this.Aa;
      (this.Aa = t.Aa), (this.mutatedKeys = t.mutatedKeys);
      let a = t.ma.W_();
      a.sort(
        (g, f) =>
          (function (H, E) {
            let I = (S) => {
              switch (S) {
                case 0:
                  return 1;
                case 2:
                case 3:
                  return 2;
                case 1:
                  return 0;
                default:
                  return N();
              }
            };
            return I(H) - I(E);
          })(g.type, f.type) || this.da(g.doc, f.doc)
      ),
        this.ga(r),
        (o = o != null && o);
      let l = e && !o ? this.pa() : [],
        v = this.Ea.size === 0 && this.current && !o ? 1 : 0,
        d = v !== this.Ta;
      return (
        (this.Ta = v),
        a.length !== 0 || d
          ? {
              snapshot: new D2(
                this.query,
                t.Aa,
                s,
                a,
                t.mutatedKeys,
                v === 0,
                d,
                !1,
                !!r && r.resumeToken.approximateByteSize() > 0
              ),
              ya: l,
            }
          : { ya: l }
      );
    }
    Y_(t) {
      return this.current && t === "Offline"
        ? ((this.current = !1),
          this.applyChanges(
            {
              Aa: this.Aa,
              ma: new mo(),
              mutatedKeys: this.mutatedKeys,
              ts: !1,
            },
            !1
          ))
        : { ya: [] };
    }
    wa(t) {
      return (
        !this.Ia.has(t) && !!this.Aa.has(t) && !this.Aa.get(t).hasLocalMutations
      );
    }
    ga(t) {
      t &&
        (t.addedDocuments.forEach((e) => (this.Ia = this.Ia.add(e))),
        t.modifiedDocuments.forEach((e) => {}),
        t.removedDocuments.forEach((e) => (this.Ia = this.Ia.delete(e))),
        (this.current = t.current));
    }
    pa() {
      if (!this.current) return [];
      let t = this.Ea;
      (this.Ea = Q()),
        this.Aa.forEach((r) => {
          this.wa(r.key) && (this.Ea = this.Ea.add(r.key));
        });
      let e = [];
      return (
        t.forEach((r) => {
          this.Ea.has(r) || e.push(new fo(r));
        }),
        this.Ea.forEach((r) => {
          t.has(r) || e.push(new wo(r));
        }),
        e
      );
    }
    Sa(t) {
      (this.Ia = t.Is), (this.Ea = Q());
      let e = this.Va(t.documents);
      return this.applyChanges(e, !0);
    }
    ba() {
      return D2.fromInitialDocuments(
        this.query,
        this.Aa,
        this.mutatedKeys,
        this.Ta === 0,
        this.hasCachedResults
      );
    }
  },
  za = class {
    constructor(t, e, r) {
      (this.query = t), (this.targetId = e), (this.view = r);
    }
  },
  Ma = class {
    constructor(t) {
      (this.key = t), (this.Da = !1);
    }
  },
  Ca = class {
    constructor(t, e, r, o, s, a) {
      (this.localStore = t),
        (this.remoteStore = e),
        (this.eventManager = r),
        (this.sharedClientState = o),
        (this.currentUser = s),
        (this.maxConcurrentLimboResolutions = a),
        (this.Ca = {}),
        (this.va = new we((l) => Dh(l), Lo)),
        (this.Fa = new Map()),
        (this.Ma = new Set()),
        (this.xa = new C1(R.comparator)),
        (this.Oa = new Map()),
        (this.Na = new un()),
        (this.La = {}),
        (this.Ba = new Map()),
        (this.ka = dn.Bn()),
        (this.onlineState = "Unknown"),
        (this.qa = void 0);
    }
    get isPrimaryClient() {
      return this.qa === !0;
    }
  };
function Ug(n, t, e = !0) {
  return L(this, null, function* () {
    let r = m7(n),
      o,
      s = r.va.get(t);
    return (
      s
        ? (r.sharedClientState.addLocalQueryTarget(s.targetId),
          (o = s.view.ba()))
        : (o = yield v7(r, t, e, !0)),
      o
    );
  });
}
function $g(n, t) {
  return L(this, null, function* () {
    let e = m7(n);
    yield v7(e, t, !0, !1);
  });
}
function v7(n, t, e, r) {
  return L(this, null, function* () {
    let o = yield Hg(n.localStore, bt(t)),
      s = o.targetId,
      a = e ? n.sharedClientState.addLocalQueryTarget(s) : "not-current",
      l;
    return (
      r && (l = yield qg(n, t, s, a === "current", o.resumeToken)),
      n.isPrimaryClient && e && s7(n.remoteStore, o),
      l
    );
  });
}
function qg(n, t, e, r, o) {
  return L(this, null, function* () {
    n.Qa = (f, z, H) =>
      (function (I, S, F, G) {
        return L(this, null, function* () {
          let t1 = S.view.Va(F);
          t1.ts &&
            (t1 = yield mh(I.localStore, S.query, !1).then(({ documents: C }) =>
              S.view.Va(C, t1)
            ));
          let w1 = G && G.targetChanges.get(S.targetId),
            st = G && G.targetMismatches.get(S.targetId) != null,
            u1 = S.view.applyChanges(t1, I.isPrimaryClient, w1, st);
          return Mh(I, S.targetId, u1.ya), u1.snapshot;
        });
      })(n, f, z, H);
    let s = yield mh(n.localStore, t, !0),
      a = new xa(t, s.Is),
      l = a.Va(s.documents),
      v = hn.createSynthesizedTargetChangeForCurrentChange(
        e,
        r && n.onlineState !== "Offline",
        o
      ),
      d = a.applyChanges(l, n.isPrimaryClient, v);
    Mh(n, e, d.ya);
    let g = new za(t, e, a);
    return (
      n.va.set(t, g),
      n.Fa.has(e) ? n.Fa.get(e).push(t) : n.Fa.set(e, [t]),
      d.snapshot
    );
  });
}
function Gg(n, t, e) {
  return L(this, null, function* () {
    let r = Z(n),
      o = r.va.get(t),
      s = r.Fa.get(o.targetId);
    if (s.length > 1)
      return (
        r.Fa.set(
          o.targetId,
          s.filter((a) => !Lo(a, t))
        ),
        void r.va.delete(t)
      );
    r.isPrimaryClient
      ? (r.sharedClientState.removeLocalQueryTarget(o.targetId),
        r.sharedClientState.isActiveQueryTarget(o.targetId) ||
          (yield oa(r.localStore, o.targetId, !1)
            .then(() => {
              r.sharedClientState.clearQueryState(o.targetId),
                e && Ua(r.remoteStore, o.targetId),
                Va(r, o.targetId);
            })
            .catch(wn)))
      : (Va(r, o.targetId), yield oa(r.localStore, o.targetId, !0));
  });
}
function Wg(n, t) {
  return L(this, null, function* () {
    let e = Z(n),
      r = e.va.get(t),
      o = e.Fa.get(r.targetId);
    e.isPrimaryClient &&
      o.length === 1 &&
      (e.sharedClientState.removeLocalQueryTarget(r.targetId),
      Ua(e.remoteStore, r.targetId));
  });
}
function Kg(n, t, e) {
  return L(this, null, function* () {
    let r = np(n);
    try {
      let o = yield (function (a, l) {
        let v = Z(a),
          d = P1.now(),
          g = l.reduce((H, E) => H.add(E.key), Q()),
          f,
          z;
        return v.persistence
          .runTransaction("Locally write mutations", "readwrite", (H) => {
            let E = Yt(),
              I = Q();
            return v.us
              .getEntries(H, g)
              .next((S) => {
                (E = S),
                  E.forEach((F, G) => {
                    G.isValidDocument() || (I = I.add(F));
                  });
              })
              .next(() => v.localDocuments.getOverlayedDocuments(H, E))
              .next((S) => {
                f = S;
                let F = [];
                for (let G of l) {
                  let t1 = tg(G, f.get(G.key).overlayedDocument);
                  t1 != null &&
                    F.push(
                      new Et(G.key, t1, bh(t1.value.mapValue), Wt.exists(!0))
                    );
                }
                return v.mutationQueue.addMutationBatch(H, d, F, l);
              })
              .next((S) => {
                z = S;
                let F = S.applyToLocalDocumentSet(f, I);
                return v.documentOverlayCache.saveOverlays(H, S.batchId, F);
              });
          })
          .then(() => ({ batchId: z.batchId, changes: Oh(f) }));
      })(r.localStore, t);
      r.sharedClientState.addPendingMutation(o.batchId),
        (function (a, l, v) {
          let d = a.La[a.currentUser.toKey()];
          d || (d = new C1(r1)),
            (d = d.insert(l, v)),
            (a.La[a.currentUser.toKey()] = d);
        })(r, o.batchId, e),
        yield zn(r, o.changes),
        yield So(r.remoteStore);
    } catch (o) {
      let s = Wa(o, "Failed to persist write");
      e.reject(s);
    }
  });
}
function d7(n, t) {
  return L(this, null, function* () {
    let e = Z(n);
    try {
      let r = yield Vg(e.localStore, t);
      t.targetChanges.forEach((o, s) => {
        let a = e.Oa.get(s);
        a &&
          (d1(
            o.addedDocuments.size +
              o.modifiedDocuments.size +
              o.removedDocuments.size <=
              1
          ),
          o.addedDocuments.size > 0
            ? (a.Da = !0)
            : o.modifiedDocuments.size > 0
            ? d1(a.Da)
            : o.removedDocuments.size > 0 && (d1(a.Da), (a.Da = !1)));
      }),
        yield zn(e, r, t);
    } catch (r) {
      yield wn(r);
    }
  });
}
function zh(n, t, e) {
  let r = Z(n);
  if ((r.isPrimaryClient && e === 0) || (!r.isPrimaryClient && e === 1)) {
    let o = [];
    r.va.forEach((s, a) => {
      let l = a.view.Y_(t);
      l.snapshot && o.push(l.snapshot);
    }),
      (function (a, l) {
        let v = Z(a);
        v.onlineState = l;
        let d = !1;
        v.queries.forEach((g, f) => {
          for (let z of f.z_) z.Y_(l) && (d = !0);
        }),
          d && Ka(v);
      })(r.eventManager, t),
      o.length && r.Ca.E_(o),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
function Qg(n, t, e) {
  return L(this, null, function* () {
    let r = Z(n);
    r.sharedClientState.updateQueryState(t, "rejected", e);
    let o = r.Oa.get(t),
      s = o && o.key;
    if (s) {
      let a = new C1(R.comparator);
      a = a.insert(s, xt.newNoDocument(s, q.min()));
      let l = Q().add(s),
        v = new ro(q.min(), new Map(), new C1(r1), a, l);
      yield d7(r, v), (r.xa = r.xa.remove(s)), r.Oa.delete(t), Qa(r);
    } else
      yield oa(r.localStore, t, !1)
        .then(() => Va(r, t, e))
        .catch(wn);
  });
}
function Yg(n, t) {
  return L(this, null, function* () {
    let e = Z(n),
      r = t.batch.batchId;
    try {
      let o = yield Cg(e.localStore, t);
      g7(e, r, null),
        u7(e, r),
        e.sharedClientState.updateMutationState(r, "acknowledged"),
        yield zn(e, o);
    } catch (o) {
      yield wn(o);
    }
  });
}
function Jg(n, t, e) {
  return L(this, null, function* () {
    let r = Z(n);
    try {
      let o = yield (function (a, l) {
        let v = Z(a);
        return v.persistence.runTransaction(
          "Reject batch",
          "readwrite-primary",
          (d) => {
            let g;
            return v.mutationQueue
              .lookupMutationBatch(d, l)
              .next(
                (f) => (
                  d1(f !== null),
                  (g = f.keys()),
                  v.mutationQueue.removeMutationBatch(d, f)
                )
              )
              .next(() => v.mutationQueue.performConsistencyCheck(d))
              .next(() =>
                v.documentOverlayCache.removeOverlaysForBatchId(d, g, l)
              )
              .next(() =>
                v.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d, g)
              )
              .next(() => v.localDocuments.getDocuments(d, g));
          }
        );
      })(r.localStore, t);
      g7(r, t, e),
        u7(r, t),
        r.sharedClientState.updateMutationState(t, "rejected", e),
        yield zn(r, o);
    } catch (o) {
      yield wn(o);
    }
  });
}
function u7(n, t) {
  (n.Ba.get(t) || []).forEach((e) => {
    e.resolve();
  }),
    n.Ba.delete(t);
}
function g7(n, t, e) {
  let r = Z(n),
    o = r.La[r.currentUser.toKey()];
  if (o) {
    let s = o.get(t);
    s && (e ? s.reject(e) : s.resolve(), (o = o.remove(t))),
      (r.La[r.currentUser.toKey()] = o);
  }
}
function Va(n, t, e = null) {
  n.sharedClientState.removeLocalQueryTarget(t);
  for (let r of n.Fa.get(t)) n.va.delete(r), e && n.Ca.Ka(r, e);
  n.Fa.delete(t),
    n.isPrimaryClient &&
      n.Na.mr(t).forEach((r) => {
        n.Na.containsKey(r) || p7(n, r);
      });
}
function p7(n, t) {
  n.Ma.delete(t.path.canonicalString());
  let e = n.xa.get(t);
  e !== null &&
    (Ua(n.remoteStore, e), (n.xa = n.xa.remove(t)), n.Oa.delete(e), Qa(n));
}
function Mh(n, t, e) {
  for (let r of e)
    r instanceof wo
      ? (n.Na.addReference(r.key, t), Xg(n, r))
      : r instanceof fo
      ? (D("SyncEngine", "Document no longer in limbo: " + r.key),
        n.Na.removeReference(r.key, t),
        n.Na.containsKey(r.key) || p7(n, r.key))
      : N();
}
function Xg(n, t) {
  let e = t.key,
    r = e.path.canonicalString();
  n.xa.get(e) ||
    n.Ma.has(r) ||
    (D("SyncEngine", "New document in limbo: " + e), n.Ma.add(r), Qa(n));
}
function Qa(n) {
  for (; n.Ma.size > 0 && n.xa.size < n.maxConcurrentLimboResolutions; ) {
    let t = n.Ma.values().next().value;
    n.Ma.delete(t);
    let e = new R(M1.fromString(t)),
      r = n.ka.next();
    n.Oa.set(r, new Ma(e)),
      (n.xa = n.xa.insert(e, r)),
      s7(
        n.remoteStore,
        new vn(bt(Th(e.path)), r, "TargetPurposeLimboResolution", Hh.oe)
      );
  }
}
function zn(n, t, e) {
  return L(this, null, function* () {
    let r = Z(n),
      o = [],
      s = [],
      a = [];
    r.va.isEmpty() ||
      (r.va.forEach((l, v) => {
        a.push(
          r.Qa(v, t, e).then((d) => {
            var g;
            if ((d || e) && r.isPrimaryClient) {
              let f = d
                ? !d.fromCache
                : (g = e?.targetChanges.get(v.targetId)) === null ||
                  g === void 0
                ? void 0
                : g.current;
              r.sharedClientState.updateQueryState(
                v.targetId,
                f ? "current" : "not-current"
              );
            }
            if (d) {
              o.push(d);
              let f = ta.Ui(v.targetId, d);
              s.push(f);
            }
          })
        );
      }),
      yield Promise.all(a),
      r.Ca.E_(o),
      yield (function (v, d) {
        return L(this, null, function* () {
          let g = Z(v);
          try {
            yield g.persistence.runTransaction(
              "notifyLocalViewChanges",
              "readwrite",
              (f) =>
                b.forEach(d, (z) =>
                  b
                    .forEach(z.Ki, (H) =>
                      g.persistence.referenceDelegate.addReference(
                        f,
                        z.targetId,
                        H
                      )
                    )
                    .next(() =>
                      b.forEach(z.$i, (H) =>
                        g.persistence.referenceDelegate.removeReference(
                          f,
                          z.targetId,
                          H
                        )
                      )
                    )
                )
            );
          } catch (f) {
            if (!fn(f)) throw f;
            D("LocalStore", "Failed to update sequence numbers: " + f);
          }
          for (let f of d) {
            let z = f.targetId;
            if (!f.fromCache) {
              let H = g.ss.get(z),
                E = H.snapshotVersion,
                I = H.withLastLimboFreeSnapshotVersion(E);
              g.ss = g.ss.insert(z, I);
            }
          }
        });
      })(r.localStore, s));
  });
}
function tp(n, t) {
  return L(this, null, function* () {
    let e = Z(n);
    if (!e.currentUser.isEqual(t)) {
      D("SyncEngine", "User change. New user:", t.toKey());
      let r = yield r7(e.localStore, t);
      (e.currentUser = t),
        (function (s, a) {
          s.Ba.forEach((l) => {
            l.forEach((v) => {
              v.reject(new P(A.CANCELLED, a));
            });
          }),
            s.Ba.clear();
        })(
          e,
          "'waitForPendingWrites' promise is rejected due to a user change."
        ),
        e.sharedClientState.handleUserChange(
          t,
          r.removedBatchIds,
          r.addedBatchIds
        ),
        yield zn(e, r.ls);
    }
  });
}
function ep(n, t) {
  let e = Z(n),
    r = e.Oa.get(t);
  if (r && r.Da) return Q().add(r.key);
  {
    let o = Q(),
      s = e.Fa.get(t);
    if (!s) return o;
    for (let a of s) {
      let l = e.va.get(a);
      o = o.unionWith(l.view.Ra);
    }
    return o;
  }
}
function m7(n) {
  let t = Z(n);
  return (
    (t.remoteStore.remoteSyncer.applyRemoteEvent = d7.bind(null, t)),
    (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = ep.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectListen = Qg.bind(null, t)),
    (t.Ca.E_ = Zg.bind(null, t.eventManager)),
    (t.Ca.Ka = jg.bind(null, t.eventManager)),
    t
  );
}
function np(n) {
  let t = Z(n);
  return (
    (t.remoteStore.remoteSyncer.applySuccessfulWrite = Yg.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectFailedWrite = Jg.bind(null, t)),
    t
  );
}
var xo = class {
  constructor() {
    this.synchronizeTabs = !1;
  }
  initialize(t) {
    return L(this, null, function* () {
      (this.serializer = bo(t.databaseInfo.databaseId)),
        (this.sharedClientState = this.createSharedClientState(t)),
        (this.persistence = this.createPersistence(t)),
        yield this.persistence.start(),
        (this.localStore = this.createLocalStore(t)),
        (this.gcScheduler = this.createGarbageCollectionScheduler(
          t,
          this.localStore
        )),
        (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
          t,
          this.localStore
        ));
    });
  }
  createGarbageCollectionScheduler(t, e) {
    return null;
  }
  createIndexBackfillerScheduler(t, e) {
    return null;
  }
  createLocalStore(t) {
    return Mg(this.persistence, new na(), t.initialUser, this.serializer);
  }
  createPersistence(t) {
    return new Yi(Xi.Yr, this.serializer);
  }
  createSharedClientState(t) {
    return new sa();
  }
  terminate() {
    return L(this, null, function* () {
      var t, e;
      (t = this.gcScheduler) === null || t === void 0 || t.stop(),
        (e = this.indexBackfillerScheduler) === null ||
          e === void 0 ||
          e.stop(),
        this.sharedClientState.shutdown(),
        yield this.persistence.shutdown();
    });
  }
};
var ya = class {
  initialize(t, e) {
    return L(this, null, function* () {
      this.localStore ||
        ((this.localStore = t.localStore),
        (this.sharedClientState = t.sharedClientState),
        (this.datastore = this.createDatastore(e)),
        (this.remoteStore = this.createRemoteStore(e)),
        (this.eventManager = this.createEventManager(e)),
        (this.syncEngine = this.createSyncEngine(e, !t.synchronizeTabs)),
        (this.sharedClientState.onlineStateHandler = (r) =>
          zh(this.syncEngine, r, 1)),
        (this.remoteStore.remoteSyncer.handleCredentialChange = tp.bind(
          null,
          this.syncEngine
        )),
        yield Og(this.remoteStore, this.syncEngine.isPrimaryClient));
    });
  }
  createEventManager(t) {
    return (function () {
      return new ma();
    })();
  }
  createDatastore(t) {
    let e = bo(t.databaseInfo.databaseId),
      r = (function (s) {
        return new la(s);
      })(t.databaseInfo);
    return (function (s, a, l, v) {
      return new va(s, a, l, v);
    })(t.authCredentials, t.appCheckCredentials, r, e);
  }
  createRemoteStore(t) {
    return (function (r, o, s, a, l) {
      return new ua(r, o, s, a, l);
    })(
      this.localStore,
      this.datastore,
      t.asyncQueue,
      (e) => zh(this.syncEngine, e, 0),
      (function () {
        return ho.D() ? new ho() : new ia();
      })()
    );
  }
  createSyncEngine(t, e) {
    return (function (o, s, a, l, v, d, g) {
      let f = new Ca(o, s, a, l, v, d);
      return g && (f.qa = !0), f;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      t.initialUser,
      t.maxConcurrentLimboResolutions,
      e
    );
  }
  terminate() {
    return L(this, null, function* () {
      var t, e;
      yield (function (o) {
        return L(this, null, function* () {
          let s = Z(o);
          D("RemoteStore", "RemoteStore shutting down."),
            s.N_.add(5),
            yield xn(s),
            s.B_.shutdown(),
            s.k_.set("Unknown");
        });
      })(this.remoteStore),
        (t = this.datastore) === null || t === void 0 || t.terminate(),
        (e = this.eventManager) === null || e === void 0 || e.terminate();
    });
  }
};
var _a = class {
  constructor(t) {
    (this.observer = t), (this.muted = !1);
  }
  next(t) {
    this.observer.next && this.Wa(this.observer.next, t);
  }
  error(t) {
    this.observer.error
      ? this.Wa(this.observer.error, t)
      : Kt("Uncaught Error in snapshot listener:", t.toString());
  }
  Ga() {
    this.muted = !0;
  }
  Wa(t, e) {
    this.muted ||
      setTimeout(() => {
        this.muted || t(e);
      }, 0);
  }
};
var Ha = class {
  constructor(t, e, r, o) {
    (this.authCredentials = t),
      (this.appCheckCredentials = e),
      (this.asyncQueue = r),
      (this.databaseInfo = o),
      (this.user = I1.UNAUTHENTICATED),
      (this.clientId = Yr.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, (s) =>
        L(this, null, function* () {
          D("FirestoreClient", "Received user=", s.uid),
            yield this.authCredentialListener(s),
            (this.user = s);
        })
      ),
      this.appCheckCredentials.start(
        r,
        (s) => (
          D("FirestoreClient", "Received new app check token=", s),
          this.appCheckCredentialListener(s, this.user)
        )
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new P(
        A.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    let t = new Lt();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(() =>
        L(this, null, function* () {
          try {
            this._onlineComponents &&
              (yield this._onlineComponents.terminate()),
              this._offlineComponents &&
                (yield this._offlineComponents.terminate()),
              this.authCredentials.shutdown(),
              this.appCheckCredentials.shutdown(),
              t.resolve();
          } catch (e) {
            let r = Wa(e, "Failed to shutdown persistence");
            t.reject(r);
          }
        })
      ),
      t.promise
    );
  }
};
function ei(n, t) {
  return L(this, null, function* () {
    n.asyncQueue.verifyOperationInProgress(),
      D("FirestoreClient", "Initializing OfflineComponentProvider");
    let e = n.configuration;
    yield t.initialize(e);
    let r = e.initialUser;
    n.setCredentialChangeListener((o) =>
      L(this, null, function* () {
        r.isEqual(o) || (yield r7(t.localStore, o), (r = o));
      })
    ),
      t.persistence.setDatabaseDeletedListener(() => n.terminate()),
      (n._offlineComponents = t);
  });
}
function Ch(n, t) {
  return L(this, null, function* () {
    n.asyncQueue.verifyOperationInProgress();
    let e = yield op(n);
    D("FirestoreClient", "Initializing OnlineComponentProvider"),
      yield t.initialize(e, n.configuration),
      n.setCredentialChangeListener((r) => wh(t.remoteStore, r)),
      n.setAppCheckTokenChangeListener((r, o) => wh(t.remoteStore, o)),
      (n._onlineComponents = t);
  });
}
function rp(n) {
  return n.name === "FirebaseError"
    ? n.code === A.FAILED_PRECONDITION || n.code === A.UNIMPLEMENTED
    : !(typeof DOMException < "u" && n instanceof DOMException) ||
        n.code === 22 ||
        n.code === 20 ||
        n.code === 11;
}
function op(n) {
  return L(this, null, function* () {
    if (!n._offlineComponents)
      if (n._uninitializedComponentsProvider) {
        D("FirestoreClient", "Using user provided OfflineComponentProvider");
        try {
          yield ei(n, n._uninitializedComponentsProvider._offline);
        } catch (t) {
          let e = t;
          if (!rp(e)) throw e;
          _2(
            "Error using user provided cache. Falling back to memory cache: " +
              e
          ),
            yield ei(n, new xo());
        }
      } else
        D("FirestoreClient", "Using default OfflineComponentProvider"),
          yield ei(n, new xo());
    return n._offlineComponents;
  });
}
function w7(n) {
  return L(this, null, function* () {
    return (
      n._onlineComponents ||
        (n._uninitializedComponentsProvider
          ? (D(
              "FirestoreClient",
              "Using user provided OnlineComponentProvider"
            ),
            yield Ch(n, n._uninitializedComponentsProvider._online))
          : (D("FirestoreClient", "Using default OnlineComponentProvider"),
            yield Ch(n, new ya()))),
      n._onlineComponents
    );
  });
}
function sp(n) {
  return w7(n).then((t) => t.syncEngine);
}
function ip(n) {
  return L(this, null, function* () {
    let t = yield w7(n),
      e = t.eventManager;
    return (
      (e.onListen = Ug.bind(null, t.syncEngine)),
      (e.onUnlisten = Gg.bind(null, t.syncEngine)),
      (e.onFirstRemoteStoreListen = $g.bind(null, t.syncEngine)),
      (e.onLastRemoteStoreUnlisten = Wg.bind(null, t.syncEngine)),
      e
    );
  });
}
function ap(n, t, e = {}) {
  let r = new Lt();
  return (
    n.asyncQueue.enqueueAndForget(() =>
      L(this, null, function* () {
        return (function (s, a, l, v, d) {
          let g = new _a({
              next: (z) => {
                a.enqueueAndForget(() => Fg(s, f)),
                  z.fromCache && v.source === "server"
                    ? d.reject(
                        new P(
                          A.UNAVAILABLE,
                          'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                        )
                      )
                    : d.resolve(z);
              },
              error: (z) => d.reject(z),
            }),
            f = new fa(l, g, { includeMetadataChanges: !0, oa: !0 });
          return Ng(s, f);
        })(yield ip(n), n.asyncQueue, t, e, r);
      })
    ),
    r.promise
  );
}
function f7(n) {
  let t = {};
  return (
    n.timeoutSeconds !== void 0 && (t.timeoutSeconds = n.timeoutSeconds), t
  );
}
var Vh = new Map();
function x7(n, t, e) {
  if (!e)
    throw new P(
      A.INVALID_ARGUMENT,
      `Function ${n}() cannot be called with an empty ${t}.`
    );
}
function lp(n, t, e, r) {
  if (t === !0 && r === !0)
    throw new P(A.INVALID_ARGUMENT, `${n} and ${e} cannot be used together.`);
}
function yh(n) {
  if (!R.isDocumentKey(n))
    throw new P(
      A.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`
    );
}
function _h(n) {
  if (R.isDocumentKey(n))
    throw new P(
      A.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`
    );
}
function Ya(n) {
  if (n === void 0) return "undefined";
  if (n === null) return "null";
  if (typeof n == "string")
    return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
  if (typeof n == "number" || typeof n == "boolean") return "" + n;
  if (typeof n == "object") {
    if (n instanceof Array) return "an array";
    {
      let t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(n);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof n == "function" ? "a function" : N();
}
function Oe(n, t) {
  if (("_delegate" in n && (n = n._delegate), !(n instanceof t))) {
    if (t.name === n.constructor.name)
      throw new P(
        A.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      let e = Ya(n);
      throw new P(
        A.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${e}`
      );
    }
  }
  return n;
}
var zo = class {
    constructor(t) {
      var e, r;
      if (t.host === void 0) {
        if (t.ssl !== void 0)
          throw new P(
            A.INVALID_ARGUMENT,
            "Can't provide ssl option if host option is not set"
          );
        (this.host = "firestore.googleapis.com"), (this.ssl = !0);
      } else
        (this.host = t.host),
          (this.ssl = (e = t.ssl) === null || e === void 0 || e);
      if (
        ((this.credentials = t.credentials),
        (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
        (this.localCache = t.localCache),
        t.cacheSizeBytes === void 0)
      )
        this.cacheSizeBytes = 41943040;
      else {
        if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
          throw new P(
            A.INVALID_ARGUMENT,
            "cacheSizeBytes must be at least 1048576"
          );
        this.cacheSizeBytes = t.cacheSizeBytes;
      }
      lp(
        "experimentalForceLongPolling",
        t.experimentalForceLongPolling,
        "experimentalAutoDetectLongPolling",
        t.experimentalAutoDetectLongPolling
      ),
        (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
        this.experimentalForceLongPolling
          ? (this.experimentalAutoDetectLongPolling = !1)
          : t.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!t.experimentalAutoDetectLongPolling),
        (this.experimentalLongPollingOptions = f7(
          (r = t.experimentalLongPollingOptions) !== null && r !== void 0
            ? r
            : {}
        )),
        (function (s) {
          if (s.timeoutSeconds !== void 0) {
            if (isNaN(s.timeoutSeconds))
              throw new P(
                A.INVALID_ARGUMENT,
                `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`
              );
            if (s.timeoutSeconds < 5)
              throw new P(
                A.INVALID_ARGUMENT,
                `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`
              );
            if (s.timeoutSeconds > 30)
              throw new P(
                A.INVALID_ARGUMENT,
                `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`
              );
          }
        })(this.experimentalLongPollingOptions),
        (this.useFetchStreams = !!t.useFetchStreams);
    }
    isEqual(t) {
      return (
        this.host === t.host &&
        this.ssl === t.ssl &&
        this.credentials === t.credentials &&
        this.cacheSizeBytes === t.cacheSizeBytes &&
        this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
        this.experimentalAutoDetectLongPolling ===
          t.experimentalAutoDetectLongPolling &&
        (function (r, o) {
          return r.timeoutSeconds === o.timeoutSeconds;
        })(
          this.experimentalLongPollingOptions,
          t.experimentalLongPollingOptions
        ) &&
        this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
        this.useFetchStreams === t.useFetchStreams
      );
    }
  },
  P2 = class {
    constructor(t, e, r, o) {
      (this._authCredentials = t),
        (this._appCheckCredentials = e),
        (this._databaseId = r),
        (this._app = o),
        (this.type = "firestore-lite"),
        (this._persistenceKey = "(lite)"),
        (this._settings = new zo({})),
        (this._settingsFrozen = !1);
    }
    get app() {
      if (!this._app)
        throw new P(
          A.FAILED_PRECONDITION,
          "Firestore was not initialized using the Firebase SDK. 'app' is not available"
        );
      return this._app;
    }
    get _initialized() {
      return this._settingsFrozen;
    }
    get _terminated() {
      return this._terminateTask !== void 0;
    }
    _setSettings(t) {
      if (this._settingsFrozen)
        throw new P(
          A.FAILED_PRECONDITION,
          "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
        );
      (this._settings = new zo(t)),
        t.credentials !== void 0 &&
          (this._authCredentials = (function (r) {
            if (!r) return new ni();
            switch (r.type) {
              case "firstParty":
                return new ii(
                  r.sessionIndex || "0",
                  r.iamToken || null,
                  r.authTokenFactory || null
                );
              case "provider":
                return r.client;
              default:
                throw new P(
                  A.INVALID_ARGUMENT,
                  "makeAuthCredentialsProvider failed due to invalid credential type"
                );
            }
          })(t.credentials));
    }
    _getSettings() {
      return this._settings;
    }
    _freezeSettings() {
      return (this._settingsFrozen = !0), this._settings;
    }
    _delete() {
      return (
        this._terminateTask || (this._terminateTask = this._terminate()),
        this._terminateTask
      );
    }
    toJSON() {
      return {
        app: this._app,
        databaseId: this._databaseId,
        settings: this._settings,
      };
    }
    _terminate() {
      return (
        (function (e) {
          let r = Vh.get(e);
          r &&
            (D("ComponentProvider", "Removing Datastore"),
            Vh.delete(e),
            r.terminate());
        })(this),
        Promise.resolve()
      );
    }
  };
function cp(n, t, e, r = {}) {
  var o;
  let s = (n = Oe(n, P2))._getSettings(),
    a = `${t}:${e}`;
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== a &&
      _2(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
      ),
    n._setSettings(Object.assign(Object.assign({}, s), { host: a, ssl: !1 })),
    r.mockUserToken)
  ) {
    let l, v;
    if (typeof r.mockUserToken == "string")
      (l = r.mockUserToken), (v = I1.MOCK_USER);
    else {
      l = A3(
        r.mockUserToken,
        (o = n._app) === null || o === void 0 ? void 0 : o.options.projectId
      );
      let d = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!d)
        throw new P(
          A.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      v = new I1(d);
    }
    n._authCredentials = new ri(new Qr(l, v));
  }
}
var Mo = class n {
    constructor(t, e, r) {
      (this.converter = e),
        (this._query = r),
        (this.type = "query"),
        (this.firestore = t);
    }
    withConverter(t) {
      return new n(this.firestore, t, this._query);
    }
  },
  vt = class n {
    constructor(t, e, r) {
      (this.converter = e),
        (this._key = r),
        (this.type = "document"),
        (this.firestore = t);
    }
    get _path() {
      return this._key.path;
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get path() {
      return this._key.path.canonicalString();
    }
    get parent() {
      return new pe(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(t) {
      return new n(this.firestore, t, this._key);
    }
  },
  pe = class n extends Mo {
    constructor(t, e, r) {
      super(t, e, Th(r)), (this._path = r), (this.type = "collection");
    }
    get id() {
      return this._query.path.lastSegment();
    }
    get path() {
      return this._query.path.canonicalString();
    }
    get parent() {
      let t = this._path.popLast();
      return t.isEmpty() ? null : new vt(this.firestore, null, new R(t));
    }
    withConverter(t) {
      return new n(this.firestore, t, this._path);
    }
  };
function z7(n, t, ...e) {
  if (((n = $t(n)), x7("collection", "path", t), n instanceof P2)) {
    let r = M1.fromString(t, ...e);
    return _h(r), new pe(n, null, r);
  }
  {
    if (!(n instanceof vt || n instanceof pe))
      throw new P(
        A.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    let r = n._path.child(M1.fromString(t, ...e));
    return _h(r), new pe(n.firestore, null, r);
  }
}
function ko(n, t, ...e) {
  if (
    ((n = $t(n)),
    arguments.length === 1 && (t = Yr.newId()),
    x7("doc", "path", t),
    n instanceof P2)
  ) {
    let r = M1.fromString(t, ...e);
    return yh(r), new vt(n, null, new R(r));
  }
  {
    if (!(n instanceof vt || n instanceof pe))
      throw new P(
        A.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    let r = n._path.child(M1.fromString(t, ...e));
    return (
      yh(r), new vt(n.firestore, n instanceof pe ? n.converter : null, new R(r))
    );
  }
}
var La = class {
  constructor() {
    (this._u = Promise.resolve()),
      (this.au = []),
      (this.uu = !1),
      (this.cu = []),
      (this.lu = null),
      (this.hu = !1),
      (this.Pu = !1),
      (this.Iu = []),
      (this.e_ = new vo(this, "async_queue_retry")),
      (this.Tu = () => {
        let e = ti();
        e &&
          D("AsyncQueue", "Visibility state changed to " + e.visibilityState),
          this.e_.zo();
      });
    let t = ti();
    t &&
      typeof t.addEventListener == "function" &&
      t.addEventListener("visibilitychange", this.Tu);
  }
  get isShuttingDown() {
    return this.uu;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.Eu(), this.du(t);
  }
  enterRestrictedMode(t) {
    if (!this.uu) {
      (this.uu = !0), (this.Pu = t || !1);
      let e = ti();
      e &&
        typeof e.removeEventListener == "function" &&
        e.removeEventListener("visibilitychange", this.Tu);
    }
  }
  enqueue(t) {
    if ((this.Eu(), this.uu)) return new Promise(() => {});
    let e = new Lt();
    return this.du(() =>
      this.uu && this.Pu
        ? Promise.resolve()
        : (t().then(e.resolve, e.reject), e.promise)
    ).then(() => e.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.au.push(t), this.Au()));
  }
  Au() {
    return L(this, null, function* () {
      if (this.au.length !== 0) {
        try {
          yield this.au[0](), this.au.shift(), this.e_.reset();
        } catch (t) {
          if (!fn(t)) throw t;
          D("AsyncQueue", "Operation failed with retryable error: " + t);
        }
        this.au.length > 0 && this.e_.Wo(() => this.Au());
      }
    });
  }
  du(t) {
    let e = this._u.then(
      () => (
        (this.hu = !0),
        t()
          .catch((r) => {
            (this.lu = r), (this.hu = !1);
            let o = (function (a) {
              let l = a.message || "";
              return (
                a.stack &&
                  (l = a.stack.includes(a.message)
                    ? a.stack
                    : a.message +
                      `
` +
                      a.stack),
                l
              );
            })(r);
            throw (Kt("INTERNAL UNHANDLED ERROR: ", o), r);
          })
          .then((r) => ((this.hu = !1), r))
      )
    );
    return (this._u = e), e;
  }
  enqueueAfterDelay(t, e, r) {
    this.Eu(), this.Iu.indexOf(t) > -1 && (e = 0);
    let o = ga.createAndSchedule(this, t, e, r, (s) => this.Ru(s));
    return this.cu.push(o), o;
  }
  Eu() {
    this.lu && N();
  }
  verifyOperationInProgress() {}
  Vu() {
    return L(this, null, function* () {
      let t;
      do (t = this._u), yield t;
      while (t !== this._u);
    });
  }
  mu(t) {
    for (let e of this.cu) if (e.timerId === t) return !0;
    return !1;
  }
  fu(t) {
    return this.Vu().then(() => {
      this.cu.sort((e, r) => e.targetTimeMs - r.targetTimeMs);
      for (let e of this.cu)
        if ((e.skipDelay(), t !== "all" && e.timerId === t)) break;
      return this.Vu();
    });
  }
  gu(t) {
    this.Iu.push(t);
  }
  Ru(t) {
    let e = this.cu.indexOf(t);
    this.cu.splice(e, 1);
  }
};
var Ne = class extends P2 {
  constructor(t, e, r, o) {
    super(t, e, r, o),
      (this.type = "firestore"),
      (this._queue = (function () {
        return new La();
      })()),
      (this._persistenceKey = o?.name || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || V7(this), this._firestoreClient.terminate();
  }
};
function M7(n, t) {
  let e = typeof n == "object" ? n : q3(),
    r = typeof n == "string" ? n : t || "(default)",
    o = U3(e, "firestore").getImmediate({ identifier: r });
  if (!o._initialized) {
    let s = L3("firestore");
    s && cp(o, ...s);
  }
  return o;
}
function C7(n) {
  return (
    n._firestoreClient || V7(n),
    n._firestoreClient.verifyNotTerminated(),
    n._firestoreClient
  );
}
function V7(n) {
  var t, e, r;
  let o = n._freezeSettings(),
    s = (function (l, v, d, g) {
      return new vi(
        l,
        v,
        d,
        g.host,
        g.ssl,
        g.experimentalForceLongPolling,
        g.experimentalAutoDetectLongPolling,
        f7(g.experimentalLongPollingOptions),
        g.useFetchStreams
      );
    })(
      n._databaseId,
      ((t = n._app) === null || t === void 0 ? void 0 : t.options.appId) || "",
      n._persistenceKey,
      o
    );
  (n._firestoreClient = new Ha(
    n._authCredentials,
    n._appCheckCredentials,
    n._queue,
    s
  )),
    !((e = o.localCache) === null || e === void 0) &&
      e._offlineComponentProvider &&
      !((r = o.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (n._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: o.localCache.kind,
        _offline: o.localCache._offlineComponentProvider,
        _online: o.localCache._onlineComponentProvider,
      });
}
var gn = class n {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new n(G1.fromBase64String(t));
    } catch (e) {
      throw new P(
        A.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + e
      );
    }
  }
  static fromUint8Array(t) {
    return new n(G1.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
};
var R2 = class {
  constructor(...t) {
    for (let e = 0; e < t.length; ++e)
      if (t[e].length === 0)
        throw new P(
          A.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new ot(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
};
var pn = class {
  constructor(t) {
    this._methodName = t;
  }
};
var mn = class {
  constructor(t, e) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new P(
        A.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + t
      );
    if (!isFinite(e) || e < -180 || e > 180)
      throw new P(
        A.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + e
      );
    (this._lat = t), (this._long = e);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(t) {
    return r1(this._lat, t._lat) || r1(this._long, t._long);
  }
};
var hp = /^__.*__$/,
  Aa = class {
    constructor(t, e, r) {
      (this.data = t), (this.fieldMask = e), (this.fieldTransforms = r);
    }
    toMutation(t, e) {
      return this.fieldMask !== null
        ? new Et(t, this.data, this.fieldMask, e, this.fieldTransforms)
        : new Re(t, this.data, e, this.fieldTransforms);
    }
  },
  Co = class {
    constructor(t, e, r) {
      (this.data = t), (this.fieldMask = e), (this.fieldTransforms = r);
    }
    toMutation(t, e) {
      return new Et(t, this.data, this.fieldMask, e, this.fieldTransforms);
    }
  };
function y7(n) {
  switch (n) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw N();
  }
}
var ba = class n {
    constructor(t, e, r, o, s, a) {
      (this.settings = t),
        (this.databaseId = e),
        (this.serializer = r),
        (this.ignoreUndefinedProperties = o),
        s === void 0 && this.pu(),
        (this.fieldTransforms = s || []),
        (this.fieldMask = a || []);
    }
    get path() {
      return this.settings.path;
    }
    get yu() {
      return this.settings.yu;
    }
    wu(t) {
      return new n(
        Object.assign(Object.assign({}, this.settings), t),
        this.databaseId,
        this.serializer,
        this.ignoreUndefinedProperties,
        this.fieldTransforms,
        this.fieldMask
      );
    }
    Su(t) {
      var e;
      let r = (e = this.path) === null || e === void 0 ? void 0 : e.child(t),
        o = this.wu({ path: r, bu: !1 });
      return o.Du(t), o;
    }
    Cu(t) {
      var e;
      let r = (e = this.path) === null || e === void 0 ? void 0 : e.child(t),
        o = this.wu({ path: r, bu: !1 });
      return o.pu(), o;
    }
    vu(t) {
      return this.wu({ path: void 0, bu: !0 });
    }
    Fu(t) {
      return yo(
        t,
        this.settings.methodName,
        this.settings.Mu || !1,
        this.path,
        this.settings.xu
      );
    }
    contains(t) {
      return (
        this.fieldMask.find((e) => t.isPrefixOf(e)) !== void 0 ||
        this.fieldTransforms.find((e) => t.isPrefixOf(e.field)) !== void 0
      );
    }
    pu() {
      if (this.path)
        for (let t = 0; t < this.path.length; t++) this.Du(this.path.get(t));
    }
    Du(t) {
      if (t.length === 0) throw this.Fu("Document fields must not be empty");
      if (y7(this.yu) && hp.test(t))
        throw this.Fu('Document fields cannot begin and end with "__"');
    }
  },
  Ba = class {
    constructor(t, e, r) {
      (this.databaseId = t),
        (this.ignoreUndefinedProperties = e),
        (this.serializer = r || bo(t));
    }
    Ou(t, e, r, o = !1) {
      return new ba(
        { yu: t, methodName: e, xu: r, path: ot.emptyPath(), bu: !1, Mu: o },
        this.databaseId,
        this.serializer,
        this.ignoreUndefinedProperties
      );
    }
  };
function _7(n) {
  let t = n._freezeSettings(),
    e = bo(n._databaseId);
  return new Ba(n._databaseId, !!t.ignoreUndefinedProperties, e);
}
function vp(n, t, e, r, o, s = {}) {
  let a = n.Ou(s.merge || s.mergeFields ? 2 : 0, t, e, o);
  Ja("Data must be an object, but it was:", a, r);
  let l = H7(r, a),
    v,
    d;
  if (s.merge) (v = new ht(a.fieldMask)), (d = a.fieldTransforms);
  else if (s.mergeFields) {
    let g = [];
    for (let f of s.mergeFields) {
      let z = Sa(t, f, e);
      if (!a.contains(z))
        throw new P(
          A.INVALID_ARGUMENT,
          `Field '${z}' is specified in your field mask but missing from your input data.`
        );
      A7(g, z) || g.push(z);
    }
    (v = new ht(g)), (d = a.fieldTransforms.filter((f) => v.covers(f.field)));
  } else (v = null), (d = a.fieldTransforms);
  return new Aa(new rt(l), v, d);
}
var Vo = class n extends pn {
  _toFieldTransform(t) {
    if (t.yu !== 2)
      throw t.yu === 1
        ? t.Fu(
            `${this._methodName}() can only appear at the top level of your update data`
          )
        : t.Fu(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
          );
    return t.fieldMask.push(t.path), null;
  }
  isEqual(t) {
    return t instanceof n;
  }
};
function dp(n, t, e, r) {
  let o = n.Ou(1, t, e);
  Ja("Data must be an object, but it was:", o, r);
  let s = [],
    a = rt.empty();
  Fe(r, (v, d) => {
    let g = Xa(t, v, e);
    d = $t(d);
    let f = o.Cu(g);
    if (d instanceof Vo) s.push(g);
    else {
      let z = Eo(d, f);
      z != null && (s.push(g), a.set(g, z));
    }
  });
  let l = new ht(s);
  return new Co(a, l, o.fieldTransforms);
}
function up(n, t, e, r, o, s) {
  let a = n.Ou(1, t, e),
    l = [Sa(t, r, e)],
    v = [o];
  if (s.length % 2 != 0)
    throw new P(
      A.INVALID_ARGUMENT,
      `Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let z = 0; z < s.length; z += 2) l.push(Sa(t, s[z])), v.push(s[z + 1]);
  let d = [],
    g = rt.empty();
  for (let z = l.length - 1; z >= 0; --z)
    if (!A7(d, l[z])) {
      let H = l[z],
        E = v[z];
      E = $t(E);
      let I = a.Cu(H);
      if (E instanceof Vo) d.push(H);
      else {
        let S = Eo(E, I);
        S != null && (d.push(H), g.set(H, S));
      }
    }
  let f = new ht(d);
  return new Co(g, f, a.fieldTransforms);
}
function Eo(n, t) {
  if (L7((n = $t(n)))) return Ja("Unsupported field value:", t, n), H7(n, t);
  if (n instanceof pn)
    return (
      (function (r, o) {
        if (!y7(o.yu))
          throw o.Fu(
            `${r._methodName}() can only be used with update() and set()`
          );
        if (!o.path)
          throw o.Fu(
            `${r._methodName}() is not currently supported inside arrays`
          );
        let s = r._toFieldTransform(o);
        s && o.fieldTransforms.push(s);
      })(n, t),
      null
    );
  if (n === void 0 && t.ignoreUndefinedProperties) return null;
  if ((t.path && t.fieldMask.push(t.path), n instanceof Array)) {
    if (t.settings.bu && t.yu !== 4)
      throw t.Fu("Nested arrays are not supported");
    return (function (r, o) {
      let s = [],
        a = 0;
      for (let l of r) {
        let v = Eo(l, o.vu(a));
        v == null && (v = { nullValue: "NULL_VALUE" }), s.push(v), a++;
      }
      return { arrayValue: { values: s } };
    })(n, t);
  }
  return (function (r, o) {
    if ((r = $t(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return Ku(o.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      let s = P1.fromDate(r);
      return { timestampValue: ao(o.serializer, s) };
    }
    if (r instanceof P1) {
      let s = new P1(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: ao(o.serializer, s) };
    }
    if (r instanceof mn)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof gn) return { bytesValue: Qh(o.serializer, r._byteString) };
    if (r instanceof vt) {
      let s = o.databaseId,
        a = r.firestore._databaseId;
      if (!a.isEqual(s))
        throw o.Fu(
          `Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`
        );
      return {
        referenceValue: ja(
          r.firestore._databaseId || o.databaseId,
          r._key.path
        ),
      };
    }
    throw o.Fu(`Unsupported field value: ${Ya(r)}`);
  })(n, t);
}
function H7(n, t) {
  let e = {};
  return (
    Lh(n)
      ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
      : Fe(n, (r, o) => {
          let s = Eo(o, t.Su(r));
          s != null && (e[r] = s);
        }),
    { mapValue: { fields: e } }
  );
}
function L7(n) {
  return !(
    typeof n != "object" ||
    n === null ||
    n instanceof Array ||
    n instanceof Date ||
    n instanceof P1 ||
    n instanceof mn ||
    n instanceof gn ||
    n instanceof vt ||
    n instanceof pn
  );
}
function Ja(n, t, e) {
  if (
    !L7(e) ||
    !(function (o) {
      return (
        typeof o == "object" &&
        o !== null &&
        (Object.getPrototypeOf(o) === Object.prototype ||
          Object.getPrototypeOf(o) === null)
      );
    })(e)
  ) {
    let r = Ya(e);
    throw r === "an object" ? t.Fu(n + " a custom object") : t.Fu(n + " " + r);
  }
}
function Sa(n, t, e) {
  if ((t = $t(t)) instanceof R2) return t._internalPath;
  if (typeof t == "string") return Xa(n, t);
  throw yo("Field path arguments must be of type string or ", n, !1, void 0, e);
}
var gp = new RegExp("[~\\*/\\[\\]]");
function Xa(n, t, e) {
  if (t.search(gp) >= 0)
    throw yo(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      n,
      !1,
      void 0,
      e
    );
  try {
    return new R2(...t.split("."))._internalPath;
  } catch {
    throw yo(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n,
      !1,
      void 0,
      e
    );
  }
}
function yo(n, t, e, r, o) {
  let s = r && !r.isEmpty(),
    a = o !== void 0,
    l = `Function ${t}() called with invalid data`;
  e && (l += " (via `toFirestore()`)"), (l += ". ");
  let v = "";
  return (
    (s || a) &&
      ((v += " (found"),
      s && (v += ` in field ${r}`),
      a && (v += ` in document ${o}`),
      (v += ")")),
    new P(A.INVALID_ARGUMENT, l + n + v)
  );
}
function A7(n, t) {
  return n.some((e) => e.isEqual(t));
}
var _o = class {
    constructor(t, e, r, o, s) {
      (this._firestore = t),
        (this._userDataWriter = e),
        (this._key = r),
        (this._document = o),
        (this._converter = s);
    }
    get id() {
      return this._key.path.lastSegment();
    }
    get ref() {
      return new vt(this._firestore, this._converter, this._key);
    }
    exists() {
      return this._document !== null;
    }
    data() {
      if (this._document) {
        if (this._converter) {
          let t = new ka(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            null
          );
          return this._converter.fromFirestore(t);
        }
        return this._userDataWriter.convertValue(this._document.data.value);
      }
    }
    get(t) {
      if (this._document) {
        let e = this._document.data.field(b7("DocumentSnapshot.get", t));
        if (e !== null) return this._userDataWriter.convertValue(e);
      }
    }
  },
  ka = class extends _o {
    data() {
      return super.data();
    }
  };
function b7(n, t) {
  return typeof t == "string"
    ? Xa(n, t)
    : t instanceof R2
    ? t._internalPath
    : t._delegate._internalPath;
}
function pp(n) {
  if (n.limitType === "L" && n.explicitOrderBy.length === 0)
    throw new P(
      A.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
var Ea = class {
  convertValue(t, e = "none") {
    switch (Te(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return z1(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, e);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(me(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, e);
      case 10:
        return this.convertObject(t.mapValue, e);
      default:
        throw N();
    }
  }
  convertObject(t, e) {
    return this.convertObjectMap(t.fields, e);
  }
  convertObjectMap(t, e = "none") {
    let r = {};
    return (
      Fe(t, (o, s) => {
        r[o] = this.convertValue(s, e);
      }),
      r
    );
  }
  convertGeoPoint(t) {
    return new mn(z1(t.latitude), z1(t.longitude));
  }
  convertArray(t, e) {
    return (t.values || []).map((r) => this.convertValue(r, e));
  }
  convertServerTimestamp(t, e) {
    switch (e) {
      case "previous":
        let r = Oa(t);
        return r == null ? null : this.convertValue(r, e);
      case "estimate":
        return this.convertTimestamp(an(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    let e = Qt(t);
    return new P1(e.seconds, e.nanos);
  }
  convertDocumentKey(t, e) {
    let r = M1.fromString(t);
    d1(n7(r));
    let o = new eo(r.get(1), r.get(3)),
      s = new R(r.popFirst(5));
    return (
      o.isEqual(e) ||
        Kt(
          `Document ${s} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`
        ),
      s
    );
  }
};
function mp(n, t, e) {
  let r;
  return (
    (r = n
      ? e && (e.merge || e.mergeFields)
        ? n.toFirestore(t, e)
        : n.toFirestore(t)
      : t),
    r
  );
}
var C2 = class {
    constructor(t, e) {
      (this.hasPendingWrites = t), (this.fromCache = e);
    }
    isEqual(t) {
      return (
        this.hasPendingWrites === t.hasPendingWrites &&
        this.fromCache === t.fromCache
      );
    }
  },
  Ia = class extends _o {
    constructor(t, e, r, o, s, a) {
      super(t, e, r, o, a),
        (this._firestore = t),
        (this._firestoreImpl = t),
        (this.metadata = s);
    }
    exists() {
      return super.exists();
    }
    data(t = {}) {
      if (this._document) {
        if (this._converter) {
          let e = new y2(
            this._firestore,
            this._userDataWriter,
            this._key,
            this._document,
            this.metadata,
            null
          );
          return this._converter.fromFirestore(e, t);
        }
        return this._userDataWriter.convertValue(
          this._document.data.value,
          t.serverTimestamps
        );
      }
    }
    get(t, e = {}) {
      if (this._document) {
        let r = this._document.data.field(b7("DocumentSnapshot.get", t));
        if (r !== null)
          return this._userDataWriter.convertValue(r, e.serverTimestamps);
      }
    }
  },
  y2 = class extends Ia {
    data(t = {}) {
      return super.data(t);
    }
  },
  Ta = class {
    constructor(t, e, r, o) {
      (this._firestore = t),
        (this._userDataWriter = e),
        (this._snapshot = o),
        (this.metadata = new C2(o.hasPendingWrites, o.fromCache)),
        (this.query = r);
    }
    get docs() {
      let t = [];
      return this.forEach((e) => t.push(e)), t;
    }
    get size() {
      return this._snapshot.docs.size;
    }
    get empty() {
      return this.size === 0;
    }
    forEach(t, e) {
      this._snapshot.docs.forEach((r) => {
        t.call(
          e,
          new y2(
            this._firestore,
            this._userDataWriter,
            r.key,
            r,
            new C2(
              this._snapshot.mutatedKeys.has(r.key),
              this._snapshot.fromCache
            ),
            this.query.converter
          )
        );
      });
    }
    docChanges(t = {}) {
      let e = !!t.includeMetadataChanges;
      if (e && this._snapshot.excludesMetadataChanges)
        throw new P(
          A.INVALID_ARGUMENT,
          "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
        );
      return (
        (this._cachedChanges &&
          this._cachedChangesIncludeMetadataChanges === e) ||
          ((this._cachedChanges = (function (o, s) {
            if (o._snapshot.oldDocs.isEmpty()) {
              let a = 0;
              return o._snapshot.docChanges.map((l) => {
                let v = new y2(
                  o._firestore,
                  o._userDataWriter,
                  l.doc.key,
                  l.doc,
                  new C2(
                    o._snapshot.mutatedKeys.has(l.doc.key),
                    o._snapshot.fromCache
                  ),
                  o.query.converter
                );
                return (
                  l.doc, { type: "added", doc: v, oldIndex: -1, newIndex: a++ }
                );
              });
            }
            {
              let a = o._snapshot.oldDocs;
              return o._snapshot.docChanges
                .filter((l) => s || l.type !== 3)
                .map((l) => {
                  let v = new y2(
                      o._firestore,
                      o._userDataWriter,
                      l.doc.key,
                      l.doc,
                      new C2(
                        o._snapshot.mutatedKeys.has(l.doc.key),
                        o._snapshot.fromCache
                      ),
                      o.query.converter
                    ),
                    d = -1,
                    g = -1;
                  return (
                    l.type !== 0 &&
                      ((d = a.indexOf(l.doc.key)), (a = a.delete(l.doc.key))),
                    l.type !== 1 &&
                      ((a = a.add(l.doc)), (g = a.indexOf(l.doc.key))),
                    { type: wp(l.type), doc: v, oldIndex: d, newIndex: g }
                  );
                });
            }
          })(this, e)),
          (this._cachedChangesIncludeMetadataChanges = e)),
        this._cachedChanges
      );
    }
  };
function wp(n) {
  switch (n) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return N();
  }
}
var Da = class extends Ea {
  constructor(t) {
    super(), (this.firestore = t);
  }
  convertBytes(t) {
    return new gn(t);
  }
  convertReference(t) {
    let e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new vt(this.firestore, null, e);
  }
};
function B7(n) {
  n = Oe(n, Mo);
  let t = Oe(n.firestore, Ne),
    e = C7(t),
    r = new Da(t);
  return pp(n._query), ap(e, n._query).then((o) => new Ta(t, r, n, o));
}
function S7(n, t, e, ...r) {
  n = Oe(n, vt);
  let o = Oe(n.firestore, Ne),
    s = _7(o),
    a;
  return (
    (a =
      typeof (t = $t(t)) == "string" || t instanceof R2
        ? up(s, "updateDoc", n._key, t, e, r)
        : dp(s, "updateDoc", n._key, t)),
    tl(o, [a.toMutation(n._key, Wt.exists(!0))])
  );
}
function k7(n) {
  return tl(Oe(n.firestore, Ne), [new cn(n._key, Wt.none())]);
}
function E7(n, t) {
  let e = Oe(n.firestore, Ne),
    r = ko(n),
    o = mp(n.converter, t);
  return tl(e, [
    vp(
      _7(n.firestore),
      "addDoc",
      r._key,
      o,
      n.converter !== null,
      {}
    ).toMutation(r._key, Wt.exists(!1)),
  ]).then(() => r);
}
function tl(n, t) {
  return (function (r, o) {
    let s = new Lt();
    return (
      r.asyncQueue.enqueueAndForget(() =>
        L(this, null, function* () {
          return Kg(yield sp(r), o, s);
        })
      ),
      s.promise
    );
  })(C7(n), t);
}
(function (t, e = !0) {
  (function (o) {
    O2 = o;
  })($3),
    Q0(
      new qt(
        "firestore",
        (r, { instanceIdentifier: o, options: s }) => {
          let a = r.getProvider("app").getImmediate(),
            l = new Ne(
              new oi(r.getProvider("auth-internal")),
              new li(r.getProvider("app-check-internal")),
              (function (d, g) {
                if (
                  !Object.prototype.hasOwnProperty.apply(d.options, [
                    "projectId",
                  ])
                )
                  throw new P(
                    A.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new eo(d.options.projectId, g);
              })(a, o),
              a
            );
          return (
            (s = Object.assign({ useFetchStreams: e }, s)), l._setSettings(s), l
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    ue(Y3, "4.6.5", t),
    ue(Y3, "4.6.5", "esm2017");
})();
var fp = "firebase",
  xp = "10.12.5";
ue(fp, xp, "app");
var zp = {
    apiKey: "AIzaSyBZrN9H_D5R4cjpxckizldO0t9sJtB47DA",
    authDomain: "keepynotes-1d3e0.firebaseapp.com",
    projectId: "keepynotes-1d3e0",
    storageBucket: "keepynotes-1d3e0.appspot.com",
    messagingSenderId: "349075250932",
    appId: "1:349075250932:web:158e05b11c8c46a63048a1",
    measurementId: "G-SC61C50XES",
  },
  Mp = Us(zp),
  el = M7(Mp),
  je = { addNote: Cp, loadNotes: Vp, removeNote: yp, updateNote: _p },
  nl = "notes",
  I7 = z7(el, nl);
function Cp(n) {
  return L(this, null, function* () {
    try {
      yield E7(I7, n);
    } catch (t) {
      console.error("Error adding note: ", t);
    }
  });
}
function Vp() {
  return L(this, null, function* () {
    try {
      return (yield B7(I7)).docs.map((e) => B({ _id: e.id }, e.data()));
    } catch (n) {
      return console.error("Error loading notes: ", n), [];
    }
  });
}
function yp(n) {
  return L(this, null, function* () {
    try {
      let t = ko(el, nl, n);
      yield k7(t);
    } catch (t) {
      console.error("Error removing note: ", t);
    }
  });
}
function _p(n, t) {
  return L(this, null, function* () {
    try {
      let e = ko(el, nl, n);
      yield S7(e, t);
    } catch (e) {
      console.error("Error updating note: ", e);
    }
  });
}
function F2(n, t) {
  return (
    (n = Math.ceil(n)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - n + 1)) + n
  );
}
function rl() {
  return `n-${F2(1e4, 1e8)}`;
}
function T7(n) {
  let t = ["The cat", "A dog", "My friend", "An artist", "The teacher"],
    e = ["jumps", "runs", "paints", "writes", "reads"],
    r = ["a book", "a picture", "a letter", "an email", "a song"],
    o = ["quickly", "slowly", "happily", "sadly", "eagerly"],
    s = [];
  for (let a = 0; a < n; a++) {
    let l = t[Math.floor(Math.random() * t.length)],
      v = e[Math.floor(Math.random() * e.length)],
      d = r[Math.floor(Math.random() * r.length)],
      g = o[Math.floor(Math.random() * o.length)];
    s.push(`${l} ${v} ${d} ${g}.`);
  }
  return s.join(" ");
}
var D7 = { getDemoNotes: Hp, getDemoNote: P7 },
  ol = [
    "white",
    "pink",
    "lightcoral",
    "lightskyblue",
    "lightsteelblue",
    "lightseagreen",
  ],
  sl = [
    "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
    "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
    "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
    "linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)",
    "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
    "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)",
  ];
function Hp(n = 10) {
  let t = [];
  for (let e = 0; e < n; e++) t.push(P7());
  return t;
}
function P7() {
  let n = F2(0, 5),
    t = ["Meeting", "Shopping", "Project", "Workout Plan", "Recipe"],
    e = ["text", "todo", "img", "video", "canvas"],
    r = t[Math.floor(Math.random() * t.length)],
    o = T7(F2(1, 10)),
    s = e[Math.floor(Math.random() * e.length)],
    a = O7(new Date()),
    l = n % 2 === 0 ? ol[n] : sl[n];
  return (
    je.addNote({
      _id: `note-00${F2(1, 1e6)}`,
      title: r,
      txt: o,
      createdAt: a,
      color: l,
    }),
    {
      _id: `note-00${F2(1, 1e6)}`,
      title: r,
      txt: o,
      type: s,
      createdAt: a,
      color: l,
    }
  );
}
function R7(n = "Title...", t = "Description...", e = "txt") {
  return {
    _id: "",
    title: n,
    txt: t,
    type: e,
    createdAt: O7(new Date()),
    color: "#FFF",
  };
}
function O7(n) {
  let t = n.getHours().toString().padStart(2, "0"),
    e = n.getMinutes().toString().padStart(2, "0"),
    r = n.getDate().toString().padStart(2, "0"),
    o = (n.getMonth() + 1).toString().padStart(2, "0");
  return `${t}:${e} ${r}/${o}`;
}
var Lp = (n) => ({ show: n }),
  N7 = (n) => ({ background: n }),
  F7 = (n) => ({ selected: n });
function Ap(n, t) {
  if (n & 1) {
    let e = wt();
    j(0, "div", 2),
      c1("click", function (o) {
        let s = Q1(e).$implicit,
          a = x1();
        return Y1(a.handleSelectColor(o, s));
      }),
      $();
  }
  if (n & 2) {
    let e = t.$implicit,
      r = x1();
    p0(lt(4, N7, e)), r2(lt(6, F7, e === r.activeColor));
  }
}
function bp(n, t) {
  if (n & 1) {
    let e = wt();
    j(0, "div", 2),
      c1("click", function (o) {
        let s = Q1(e).$implicit,
          a = x1();
        return Y1(a.handleSelectColor(o, s));
      }),
      $();
  }
  if (n & 2) {
    let e = t.$implicit,
      r = x1();
    p0(lt(4, N7, e)), r2(lt(6, F7, e === r.activeColor));
  }
}
var Z7 = (() => {
  class n {
    noteId;
    noteColor;
    selectedNote;
    isColorPickerOpen;
    selectedColor = new L1();
    activeColor = yt;
    colors = ol;
    gradients = sl;
    ngOnInit() {
      this.activeColor = this.noteColor;
    }
    handleSelectColor(e, r) {
      e.stopPropagation(),
        e.preventDefault(),
        (this.activeColor = r),
        this.selectedColor.emit({ noteId: this.noteId, type: Or, data: r });
    }
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["color-picker"]],
      inputs: {
        noteId: "noteId",
        noteColor: "noteColor",
        selectedNote: "selectedNote",
        isColorPickerOpen: "isColorPickerOpen",
      },
      outputs: { selectedColor: "selectedColor" },
      standalone: !0,
      features: [h1],
      decls: 5,
      vars: 4,
      consts: [
        [1, "color-picker-container"],
        [1, "color-item", 3, "style", "class"],
        [1, "color-item", 3, "click"],
      ],
      template: function (r, o) {
        r & 1 &&
          (j(0, "article", 0),
          Ot(1, Ap, 1, 8, "div", 1, Rt),
          Ot(3, bp, 1, 8, "div", 1, Rt),
          $()),
          r & 2 &&
            (r2(
              lt(2, Lp, o.isColorPickerOpen && o.selectedNote._id === o.noteId)
            ),
            a1(),
            Nt(o.colors),
            a1(2),
            Nt(o.gradients));
      },
      styles: [
        ".color-picker-container[_ngcontent-%COMP%]{position:absolute;bottom:30px;right:39px;display:grid;gap:4px;padding:5px 15px;border-radius:30px;grid-template-columns:repeat(6,1fr);pointer-events:none;opacity:0;box-shadow:#0000000d 0 0 0 1px}.color-picker-container.show[_ngcontent-%COMP%]{pointer-events:all;opacity:1;background:#ffffff73}.color-picker-container[_ngcontent-%COMP%]   .color-item[_ngcontent-%COMP%]{box-shadow:#3c40434d 0 1px 2px,#3c404326 0 1px 3px 1px;border-radius:50%;width:30px;height:30px}.color-picker-container[_ngcontent-%COMP%]   .color-item[_ngcontent-%COMP%]:hover{cursor:pointer}.color-picker-container[_ngcontent-%COMP%]   .color-item.selected[_ngcontent-%COMP%]{filter:brightness(85%)}.color-picker-container[_ngcontent-%COMP%]   .color-item.selected[_ngcontent-%COMP%], .color-picker-container[_ngcontent-%COMP%]   .color-item[_ngcontent-%COMP%]:hover{outline:2px solid rgba(0,0,0,.452)}",
      ],
    });
  }
  return n;
})();
var j7 = (() => {
  class n {
    el;
    renderer;
    noteId;
    constructor(e, r) {
      (this.el = e), (this.renderer = r);
    }
    onMouseOver() {
      this.renderer.addClass(this.el.nativeElement, "hovered");
    }
    onMouseOut() {
      this.renderer.removeClass(this.el.nativeElement, "hovered");
    }
    static ɵfac = function (r) {
      return new (r || n)(o1(at), o1(rr));
    };
    static ɵdir = pt({
      type: n,
      selectors: [["", "noteHover", ""]],
      hostBindings: function (r, o) {
        r & 1 &&
          c1("mouseover", function () {
            return o.onMouseOver();
          })("mouseout", function () {
            return o.onMouseOut();
          });
      },
      inputs: { noteId: [zt.None, "noteHover", "noteId"] },
      standalone: !0,
    });
  }
  return n;
})();
var Bp = new Y(""),
  Sp = new Y("");
function W7(n) {
  return n != null;
}
function K7(n) {
  return lr(n) ? Z1(n) : n;
}
function Q7(n) {
  let t = {};
  return (
    n.forEach((e) => {
      t = e != null ? B(B({}, t), e) : t;
    }),
    Object.keys(t).length === 0 ? null : t
  );
}
function Y7(n, t) {
  return t.map((e) => e(n));
}
function kp(n) {
  return !n.validate;
}
function J7(n) {
  return n.map((t) => (kp(t) ? t : (e) => t.validate(e)));
}
function Ep(n) {
  if (!n) return null;
  let t = n.filter(W7);
  return t.length == 0
    ? null
    : function (e) {
        return Q7(Y7(e, t));
      };
}
function hl(n) {
  return n != null ? Ep(J7(n)) : null;
}
function Ip(n) {
  if (!n) return null;
  let t = n.filter(W7);
  return t.length == 0
    ? null
    : function (e) {
        let r = Y7(e, t).map(K7);
        return Bc(r).pipe(n1(Q7));
      };
}
function vl(n) {
  return n != null ? Ip(J7(n)) : null;
}
function U7(n, t) {
  return n === null ? [t] : Array.isArray(n) ? [...n, t] : [n, t];
}
function Tp(n) {
  return n._rawValidators;
}
function Dp(n) {
  return n._rawAsyncValidators;
}
function il(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
function To(n, t) {
  return Array.isArray(n) ? n.includes(t) : n === t;
}
function $7(n, t) {
  let e = il(t);
  return (
    il(n).forEach((o) => {
      To(e, o) || e.push(o);
    }),
    e
  );
}
function q7(n, t) {
  return il(t).filter((e) => !To(n, e));
}
var al = class {
    constructor() {
      (this._rawValidators = []),
        (this._rawAsyncValidators = []),
        (this._onDestroyCallbacks = []);
    }
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _setValidators(t) {
      (this._rawValidators = t || []),
        (this._composedValidatorFn = hl(this._rawValidators));
    }
    _setAsyncValidators(t) {
      (this._rawAsyncValidators = t || []),
        (this._composedAsyncValidatorFn = vl(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(t) {
      this._onDestroyCallbacks.push(t);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((t) => t()),
        (this._onDestroyCallbacks = []);
    }
    reset(t = void 0) {
      this.control && this.control.reset(t);
    }
    hasError(t, e) {
      return this.control ? this.control.hasError(t, e) : !1;
    }
    getError(t, e) {
      return this.control ? this.control.getError(t, e) : null;
    }
  },
  yn = class extends al {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  };
var ll = class {
    constructor(t) {
      this._cd = t;
    }
    get isTouched() {
      return !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return !!this._cd?.submitted;
    }
  },
  Pp = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  xx = i1(B({}, Pp), { "[class.ng-submitted]": "isSubmitted" });
var Po = (() => {
  let t = class t extends ll {
    constructor(r) {
      super(r);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(o1(yn, 10));
  }),
    (t.ɵdir = pt({
      type: t,
      selectors: [
        ["", "formGroupName", ""],
        ["", "formArrayName", ""],
        ["", "ngModelGroup", ""],
        ["", "formGroup", ""],
        ["form", 3, "ngNoForm", ""],
        ["", "ngForm", ""],
      ],
      hostVars: 16,
      hostBindings: function (o, s) {
        o & 2 &&
          sr("ng-untouched", s.isUntouched)("ng-touched", s.isTouched)(
            "ng-pristine",
            s.isPristine
          )("ng-dirty", s.isDirty)("ng-valid", s.isValid)(
            "ng-invalid",
            s.isInvalid
          )("ng-pending", s.isPending)("ng-submitted", s.isSubmitted);
      },
      features: [V5],
    }));
  let n = t;
  return n;
})();
var Mn = "VALID",
  Io = "INVALID",
  Z2 = "PENDING",
  Cn = "DISABLED";
function Rp(n) {
  return (dl(n) ? n.validators : n) || null;
}
function Op(n) {
  return Array.isArray(n) ? hl(n) : n || null;
}
function Np(n, t) {
  return (dl(t) ? t.asyncValidators : n) || null;
}
function Fp(n) {
  return Array.isArray(n) ? vl(n) : n || null;
}
function dl(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function Zp(n, t, e) {
  let r = n.controls;
  if (!(t ? Object.keys(r) : r).length) throw new p1(1e3, "");
  if (!r[e]) throw new p1(1001, "");
}
function jp(n, t, e) {
  n._forEachChild((r, o) => {
    if (e[o] === void 0) throw new p1(1002, "");
  });
}
var cl = class {
    constructor(t, e) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = !1),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this.pristine = !0),
        (this.touched = !1),
        (this._onDisabledChange = []),
        this._assignValidators(t),
        this._assignAsyncValidators(e);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(t) {
      this._rawValidators = this._composedValidatorFn = t;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(t) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = t;
    }
    get parent() {
      return this._parent;
    }
    get valid() {
      return this.status === Mn;
    }
    get invalid() {
      return this.status === Io;
    }
    get pending() {
      return this.status == Z2;
    }
    get disabled() {
      return this.status === Cn;
    }
    get enabled() {
      return this.status !== Cn;
    }
    get dirty() {
      return !this.pristine;
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(t) {
      this._assignValidators(t);
    }
    setAsyncValidators(t) {
      this._assignAsyncValidators(t);
    }
    addValidators(t) {
      this.setValidators($7(t, this._rawValidators));
    }
    addAsyncValidators(t) {
      this.setAsyncValidators($7(t, this._rawAsyncValidators));
    }
    removeValidators(t) {
      this.setValidators(q7(t, this._rawValidators));
    }
    removeAsyncValidators(t) {
      this.setAsyncValidators(q7(t, this._rawAsyncValidators));
    }
    hasValidator(t) {
      return To(this._rawValidators, t);
    }
    hasAsyncValidator(t) {
      return To(this._rawAsyncValidators, t);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(t = {}) {
      (this.touched = !0),
        this._parent && !t.onlySelf && this._parent.markAsTouched(t);
    }
    markAllAsTouched() {
      this.markAsTouched({ onlySelf: !0 }),
        this._forEachChild((t) => t.markAllAsTouched());
    }
    markAsUntouched(t = {}) {
      (this.touched = !1),
        (this._pendingTouched = !1),
        this._forEachChild((e) => {
          e.markAsUntouched({ onlySelf: !0 });
        }),
        this._parent && !t.onlySelf && this._parent._updateTouched(t);
    }
    markAsDirty(t = {}) {
      (this.pristine = !1),
        this._parent && !t.onlySelf && this._parent.markAsDirty(t);
    }
    markAsPristine(t = {}) {
      (this.pristine = !0),
        (this._pendingDirty = !1),
        this._forEachChild((e) => {
          e.markAsPristine({ onlySelf: !0 });
        }),
        this._parent && !t.onlySelf && this._parent._updatePristine(t);
    }
    markAsPending(t = {}) {
      (this.status = Z2),
        t.emitEvent !== !1 && this.statusChanges.emit(this.status),
        this._parent && !t.onlySelf && this._parent.markAsPending(t);
    }
    disable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = Cn),
        (this.errors = null),
        this._forEachChild((r) => {
          r.disable(i1(B({}, t), { onlySelf: !0 }));
        }),
        this._updateValue(),
        t.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._updateAncestors(i1(B({}, t), { skipPristineCheck: e })),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(t = {}) {
      let e = this._parentMarkedDirty(t.onlySelf);
      (this.status = Mn),
        this._forEachChild((r) => {
          r.enable(i1(B({}, t), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
        this._updateAncestors(i1(B({}, t), { skipPristineCheck: e })),
        this._onDisabledChange.forEach((r) => r(!1));
    }
    _updateAncestors(t) {
      this._parent &&
        !t.onlySelf &&
        (this._parent.updateValueAndValidity(t),
        t.skipPristineCheck || this._parent._updatePristine(),
        this._parent._updateTouched());
    }
    setParent(t) {
      this._parent = t;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(t = {}) {
      this._setInitialStatus(),
        this._updateValue(),
        this.enabled &&
          (this._cancelExistingSubscription(),
          (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === Mn || this.status === Z2) &&
            this._runAsyncValidator(t.emitEvent)),
        t.emitEvent !== !1 &&
          (this.valueChanges.emit(this.value),
          this.statusChanges.emit(this.status)),
        this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
    }
    _updateTreeValidity(t = { emitEvent: !0 }) {
      this._forEachChild((e) => e._updateTreeValidity(t)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? Cn : Mn;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(t) {
      if (this.asyncValidator) {
        (this.status = Z2), (this._hasOwnPendingAsyncValidator = !0);
        let e = K7(this.asyncValidator(this));
        this._asyncValidationSubscription = e.subscribe((r) => {
          (this._hasOwnPendingAsyncValidator = !1),
            this.setErrors(r, { emitEvent: t });
        });
      }
    }
    _cancelExistingSubscription() {
      this._asyncValidationSubscription &&
        (this._asyncValidationSubscription.unsubscribe(),
        (this._hasOwnPendingAsyncValidator = !1));
    }
    setErrors(t, e = {}) {
      (this.errors = t), this._updateControlsErrors(e.emitEvent !== !1);
    }
    get(t) {
      let e = t;
      return e == null ||
        (Array.isArray(e) || (e = e.split(".")), e.length === 0)
        ? null
        : e.reduce((r, o) => r && r._find(o), this);
    }
    getError(t, e) {
      let r = e ? this.get(e) : this;
      return r && r.errors ? r.errors[t] : null;
    }
    hasError(t, e) {
      return !!this.getError(t, e);
    }
    get root() {
      let t = this;
      for (; t._parent; ) t = t._parent;
      return t;
    }
    _updateControlsErrors(t) {
      (this.status = this._calculateStatus()),
        t && this.statusChanges.emit(this.status),
        this._parent && this._parent._updateControlsErrors(t);
    }
    _initObservables() {
      (this.valueChanges = new L1()), (this.statusChanges = new L1());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? Cn
        : this.errors
        ? Io
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Z2)
        ? Z2
        : this._anyControlsHaveStatus(Io)
        ? Io
        : Mn;
    }
    _anyControlsHaveStatus(t) {
      return this._anyControls((e) => e.status === t);
    }
    _anyControlsDirty() {
      return this._anyControls((t) => t.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((t) => t.touched);
    }
    _updatePristine(t = {}) {
      (this.pristine = !this._anyControlsDirty()),
        this._parent && !t.onlySelf && this._parent._updatePristine(t);
    }
    _updateTouched(t = {}) {
      (this.touched = this._anyControlsTouched()),
        this._parent && !t.onlySelf && this._parent._updateTouched(t);
    }
    _registerOnCollectionChange(t) {
      this._onCollectionChange = t;
    }
    _setUpdateStrategy(t) {
      dl(t) && t.updateOn != null && (this._updateOn = t.updateOn);
    }
    _parentMarkedDirty(t) {
      let e = this._parent && this._parent.dirty;
      return !t && !!e && !this._parent._anyControlsDirty();
    }
    _find(t) {
      return null;
    }
    _assignValidators(t) {
      (this._rawValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedValidatorFn = Op(this._rawValidators));
    }
    _assignAsyncValidators(t) {
      (this._rawAsyncValidators = Array.isArray(t) ? t.slice() : t),
        (this._composedAsyncValidatorFn = Fp(this._rawAsyncValidators));
    }
  },
  Do = class extends cl {
    constructor(t, e, r) {
      super(Rp(e), Np(r, e)),
        (this.controls = t),
        this._initObservables(),
        this._setUpdateStrategy(e),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    registerControl(t, e) {
      return this.controls[t]
        ? this.controls[t]
        : ((this.controls[t] = e),
          e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange),
          e);
    }
    addControl(t, e, r = {}) {
      this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(t, e = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    setControl(t, e, r = {}) {
      this.controls[t] &&
        this.controls[t]._registerOnCollectionChange(() => {}),
        delete this.controls[t],
        e && this.registerControl(t, e),
        this.updateValueAndValidity({ emitEvent: r.emitEvent }),
        this._onCollectionChange();
    }
    contains(t) {
      return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
    }
    setValue(t, e = {}) {
      jp(this, !0, t),
        Object.keys(t).forEach((r) => {
          Zp(this, !0, r),
            this.controls[r].setValue(t[r], {
              onlySelf: !0,
              emitEvent: e.emitEvent,
            });
        }),
        this.updateValueAndValidity(e);
    }
    patchValue(t, e = {}) {
      t != null &&
        (Object.keys(t).forEach((r) => {
          let o = this.controls[r];
          o && o.patchValue(t[r], { onlySelf: !0, emitEvent: e.emitEvent });
        }),
        this.updateValueAndValidity(e));
    }
    reset(t = {}, e = {}) {
      this._forEachChild((r, o) => {
        r.reset(t ? t[o] : null, { onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._updatePristine(e),
        this._updateTouched(e),
        this.updateValueAndValidity(e);
    }
    getRawValue() {
      return this._reduceChildren(
        {},
        (t, e, r) => ((t[r] = e.getRawValue()), t)
      );
    }
    _syncPendingControls() {
      let t = this._reduceChildren(!1, (e, r) =>
        r._syncPendingControls() ? !0 : e
      );
      return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
    }
    _forEachChild(t) {
      Object.keys(this.controls).forEach((e) => {
        let r = this.controls[e];
        r && t(r, e);
      });
    }
    _setUpControls() {
      this._forEachChild((t) => {
        t.setParent(this),
          t._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(t) {
      for (let [e, r] of Object.entries(this.controls))
        if (this.contains(e) && t(r)) return !0;
      return !1;
    }
    _reduceValue() {
      let t = {};
      return this._reduceChildren(
        t,
        (e, r, o) => ((r.enabled || this.disabled) && (e[o] = r.value), e)
      );
    }
    _reduceChildren(t, e) {
      let r = t;
      return (
        this._forEachChild((o, s) => {
          r = e(r, o, s);
        }),
        r
      );
    }
    _allControlsDisabled() {
      for (let t of Object.keys(this.controls))
        if (this.controls[t].enabled) return !1;
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(t) {
      return this.controls.hasOwnProperty(t) ? this.controls[t] : null;
    }
  };
var X7 = new Y("CallSetDisabledState", {
    providedIn: "root",
    factory: () => ul,
  }),
  ul = "always";
function Up(n, t, e = ul) {
  tv(n, t),
    t.valueAccessor.writeValue(n.value),
    (n.disabled || e === "always") &&
      t.valueAccessor.setDisabledState?.(n.disabled),
    qp(n, t),
    Wp(n, t),
    Gp(n, t),
    $p(n, t);
}
function G7(n, t) {
  n.forEach((e) => {
    e.registerOnValidatorChange && e.registerOnValidatorChange(t);
  });
}
function $p(n, t) {
  if (t.valueAccessor.setDisabledState) {
    let e = (r) => {
      t.valueAccessor.setDisabledState(r);
    };
    n.registerOnDisabledChange(e),
      t._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(e);
      });
  }
}
function tv(n, t) {
  let e = Tp(n);
  t.validator !== null
    ? n.setValidators(U7(e, t.validator))
    : typeof e == "function" && n.setValidators([e]);
  let r = Dp(n);
  t.asyncValidator !== null
    ? n.setAsyncValidators(U7(r, t.asyncValidator))
    : typeof r == "function" && n.setAsyncValidators([r]);
  let o = () => n.updateValueAndValidity();
  G7(t._rawValidators, o), G7(t._rawAsyncValidators, o);
}
function qp(n, t) {
  t.valueAccessor.registerOnChange((e) => {
    (n._pendingValue = e),
      (n._pendingChange = !0),
      (n._pendingDirty = !0),
      n.updateOn === "change" && ev(n, t);
  });
}
function Gp(n, t) {
  t.valueAccessor.registerOnTouched(() => {
    (n._pendingTouched = !0),
      n.updateOn === "blur" && n._pendingChange && ev(n, t),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function ev(n, t) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    t.viewToModelUpdate(n._pendingValue),
    (n._pendingChange = !1);
}
function Wp(n, t) {
  let e = (r, o) => {
    t.valueAccessor.writeValue(r), o && t.viewToModelUpdate(r);
  };
  n.registerOnChange(e),
    t._registerOnDestroy(() => {
      n._unregisterOnChange(e);
    });
}
function Kp(n, t) {
  n == null, tv(n, t);
}
function Qp(n, t) {
  n._syncPendingControls(),
    t.forEach((e) => {
      let r = e.control;
      r.updateOn === "submit" &&
        r._pendingChange &&
        (e.viewToModelUpdate(r._pendingValue), (r._pendingChange = !1));
    });
}
var Yp = { provide: yn, useExisting: Tc(() => _n) },
  Vn = Promise.resolve(),
  _n = (() => {
    let t = class t extends yn {
      constructor(r, o, s) {
        super(),
          (this.callSetDisabledState = s),
          (this.submitted = !1),
          (this._directives = new Set()),
          (this.ngSubmit = new L1()),
          (this.form = new Do({}, hl(r), vl(o)));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(r) {
        Vn.then(() => {
          let o = this._findContainer(r.path);
          (r.control = o.registerControl(r.name, r.control)),
            Up(r.control, r, this.callSetDisabledState),
            r.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(r);
        });
      }
      getControl(r) {
        return this.form.get(r.path);
      }
      removeControl(r) {
        Vn.then(() => {
          let o = this._findContainer(r.path);
          o && o.removeControl(r.name), this._directives.delete(r);
        });
      }
      addFormGroup(r) {
        Vn.then(() => {
          let o = this._findContainer(r.path),
            s = new Do({});
          Kp(s, r),
            o.registerControl(r.name, s),
            s.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(r) {
        Vn.then(() => {
          let o = this._findContainer(r.path);
          o && o.removeControl(r.name);
        });
      }
      getFormGroup(r) {
        return this.form.get(r.path);
      }
      updateModel(r, o) {
        Vn.then(() => {
          this.form.get(r.path).setValue(o);
        });
      }
      setValue(r) {
        this.control.setValue(r);
      }
      onSubmit(r) {
        return (
          (this.submitted = !0),
          Qp(this.form, this._directives),
          this.ngSubmit.emit(r),
          r?.target?.method === "dialog"
        );
      }
      onReset() {
        this.resetForm();
      }
      resetForm(r = void 0) {
        this.form.reset(r), (this.submitted = !1);
      }
      _setUpdateStrategy() {
        this.options &&
          this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(r) {
        return r.pop(), r.length ? this.form.get(r) : this.form;
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(o1(Bp, 10), o1(Sp, 10), o1(X7, 8));
    }),
      (t.ɵdir = pt({
        type: t,
        selectors: [
          ["form", 3, "ngNoForm", "", 3, "formGroup", ""],
          ["ng-form"],
          ["", "ngForm", ""],
        ],
        hostBindings: function (o, s) {
          o & 1 &&
            c1("submit", function (l) {
              return s.onSubmit(l);
            })("reset", function () {
              return s.onReset();
            });
        },
        inputs: { options: [zt.None, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        features: [Mt([Yp]), V5],
      }));
    let n = t;
    return n;
  })();
var Ro = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵdir = pt({
      type: t,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""],
    }));
  let n = t;
  return n;
})();
var Jp = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵmod = U1({ type: t })),
    (t.ɵinj = j1({}));
  let n = t;
  return n;
})();
var Oo = (() => {
  let t = class t {
    static withConfig(r) {
      return {
        ngModule: t,
        providers: [{ provide: X7, useValue: r.callSetDisabledState ?? ul }],
      };
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵmod = U1({ type: t })),
    (t.ɵinj = j1({ imports: [Jp] }));
  let n = t;
  return n;
})();
var rv = (() => {
  class n {
    title;
    description;
    isEditorActive;
    noteToAdd;
    addNote = new L1();
    ngOnInit() {
      (this.title = yt), (this.description = yt), (this.isEditorActive = !1);
    }
    setTitle(e) {
      this.title = e.target.value;
    }
    setDescription(e) {
      this.description = e.target.value;
    }
    resetEditor() {
      (this.title = yt), (this.description = yt);
    }
    handleAddNote(e) {
      if ((e.preventDefault(), !this.title))
        throw new Error("Title is required!");
      let r = R7(this.title, this.description);
      this.addNote.emit({ noteId: yt, type: Rr, data: r }), this.resetEditor();
    }
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["add-note"]],
      outputs: { addNote: "addNote" },
      standalone: !0,
      features: [h1],
      decls: 5,
      vars: 2,
      consts: [
        [1, "add-note-container", 3, "submit"],
        ["type", "text", "placeholder", "Title...", 3, "input", "value"],
        ["placeholder", "How are you today...", 3, "input", "value"],
      ],
      template: function (r, o) {
        r & 1 &&
          (j(0, "form", 0),
          c1("submit", function (a) {
            return o.handleAddNote(a);
          }),
          j(1, "input", 1),
          c1("input", function (a) {
            return o.setTitle(a);
          }),
          $(),
          j(2, "textarea", 2),
          c1("input", function (a) {
            return o.setDescription(a);
          }),
          $(),
          j(3, "button"),
          y1(4, "Keep"),
          $()()),
          r & 2 &&
            (a1(),
            V1("value", o.title || null),
            a1(),
            V1("value", o.description || null));
      },
      dependencies: [Oo, Ro, Po, _n],
      styles: [
        ".add-note-container[_ngcontent-%COMP%]{outline:1px solid #585858;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;position:relative;border-radius:5px;color:#fff;display:grid;margin:auto;min-width:20%;max-width:600px;height:fit-content;margin-block-end:10px}.add-note-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{font-size:1.2em;font-weight:300}.add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#393c3f;border-radius:5px 5px 0 0;transition:.2s background-color ease-in;padding:10px 0;padding-block-end:10px;font-size:1rem;padding-inline-start:10px;color:#fff}.add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{color:#000;background-color:#c3c3c3}.add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::placeholder{color:#000}.add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:0 0 5px 5px;background-color:#393c3f;color:#fff;transition:.2s background-color ease-in;padding-inline-start:10px;padding-block-start:10px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;resize:none;height:100px;border:none}.add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{color:#000;outline:none;background-color:#c3c3c3}.add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus::placeholder{color:#000}.add-note-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:10px;outline:1px solid rgba(255,255,255,.123);padding:5px 30px;background-color:#333;color:#c3c3c3;justify-self:start;cursor:pointer;border:none;font-size:1rem;width:50px;height:auto;display:flex;align-items:center;justify-content:center;border-radius:5px}.add-note-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000;opacity:.7;background-color:#fff}",
      ],
    });
  }
  return n;
})();
var gl;
try {
  gl = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  gl = !1;
}
var Ln = (() => {
  let t = class t {
    constructor(r) {
      (this._platformId = r),
        (this.isBrowser = this._platformId
          ? e4(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || gl) &&
          typeof CSS < "u" &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.WEBKIT =
          this.isBrowser &&
          /AppleWebKit/i.test(navigator.userAgent) &&
          !this.BLINK &&
          !this.EDGE &&
          !this.TRIDENT),
        (this.IOS =
          this.isBrowser &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !("MSStream" in window)),
        (this.FIREFOX =
          this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
        (this.ANDROID =
          this.isBrowser &&
          /android/i.test(navigator.userAgent) &&
          !this.TRIDENT),
        (this.SAFARI =
          this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(U(Pt));
  }),
    (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
var Hn;
function Xp() {
  if (Hn == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (Hn = !0) })
      );
    } finally {
      Hn = Hn || !1;
    }
  return Hn;
}
function pl(n) {
  return Xp() ? n : !!n.capture;
}
function ov(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
function sv() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function ml(n) {
  return Array.isArray(n) ? n : [n];
}
function wl(n) {
  return n instanceof at ? n.nativeElement : n;
}
var av = new Set(),
  Ue,
  tm = (() => {
    let t = class t {
      constructor(r, o) {
        (this._platform = r),
          (this._nonce = o),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : nm);
      }
      matchMedia(r) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && em(r, this._nonce),
          this._matchMedia(r)
        );
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(Ln), U(u0, 8));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
function em(n, t) {
  if (!av.has(n))
    try {
      Ue ||
        ((Ue = document.createElement("style")),
        t && Ue.setAttribute("nonce", t),
        Ue.setAttribute("type", "text/css"),
        document.head.appendChild(Ue)),
        Ue.sheet &&
          (Ue.sheet.insertRule(`@media ${n} {body{ }}`, 0), av.add(n));
    } catch (e) {
      console.error(e);
    }
}
function nm(n) {
  return {
    matches: n === "all" || n === "",
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var cv = (() => {
  let t = class t {
    constructor(r, o) {
      (this._mediaMatcher = r),
        (this._zone = o),
        (this._queries = new Map()),
        (this._destroySubject = new gt());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(r) {
      return lv(ml(r)).some((s) => this._registerQuery(s).mql.matches);
    }
    observe(r) {
      let s = lv(ml(r)).map((l) => this._registerQuery(l).observable),
        a = Qe(s);
      return (
        (a = Gn(a.pipe(oe(1)), a.pipe(Ic(1), Wn(0)))),
        a.pipe(
          n1((l) => {
            let v = { matches: !1, breakpoints: {} };
            return (
              l.forEach(({ matches: d, query: g }) => {
                (v.matches = v.matches || d), (v.breakpoints[g] = d);
              }),
              v
            );
          })
        )
      );
    }
    _registerQuery(r) {
      if (this._queries.has(r)) return this._queries.get(r);
      let o = this._mediaMatcher.matchMedia(r),
        a = {
          observable: new d5((l) => {
            let v = (d) => this._zone.run(() => l.next(d));
            return (
              o.addListener(v),
              () => {
                o.removeListener(v);
              }
            );
          }).pipe(
            Kn(o),
            n1(({ matches: l }) => ({ query: r, matches: l })),
            Qn(this._destroySubject)
          ),
          mql: o,
        };
      return this._queries.set(r, a), a;
    }
  };
  (t.ɵfac = function (o) {
    return new (o || t)(U(tm), U(A1));
  }),
    (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
  let n = t;
  return n;
})();
function lv(n) {
  return n
    .map((t) => t.split(","))
    .reduce((t, e) => t.concat(e))
    .map((t) => t.trim());
}
function dv(n) {
  return n.buttons === 0 || n.detail === 0;
}
function uv(n) {
  let t =
    (n.touches && n.touches[0]) || (n.changedTouches && n.changedTouches[0]);
  return (
    !!t &&
    t.identifier === -1 &&
    (t.radiusX == null || t.radiusX === 1) &&
    (t.radiusY == null || t.radiusY === 1)
  );
}
var $e = (function (n) {
    return (
      (n[(n.NONE = 0)] = "NONE"),
      (n[(n.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (n[(n.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      n
    );
  })($e || {}),
  hv = "cdk-high-contrast-black-on-white",
  vv = "cdk-high-contrast-white-on-black",
  fl = "cdk-high-contrast-active",
  gv = (() => {
    let t = class t {
      constructor(r, o) {
        (this._platform = r),
          (this._document = o),
          (this._breakpointSubscription = T(cv)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return $e.NONE;
        let r = this._document.createElement("div");
        (r.style.backgroundColor = "rgb(1,2,3)"),
          (r.style.position = "absolute"),
          this._document.body.appendChild(r);
        let o = this._document.defaultView || window,
          s = o && o.getComputedStyle ? o.getComputedStyle(r) : null,
          a = ((s && s.backgroundColor) || "").replace(/ /g, "");
        switch ((r.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return $e.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return $e.BLACK_ON_WHITE;
        }
        return $e.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode &&
          this._platform.isBrowser &&
          this._document.body
        ) {
          let r = this._document.body.classList;
          r.remove(fl, hv, vv), (this._hasCheckedHighContrastMode = !0);
          let o = this.getHighContrastMode();
          o === $e.BLACK_ON_WHITE
            ? r.add(fl, hv)
            : o === $e.WHITE_ON_BLACK && r.add(fl, vv);
        }
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(Ln), U(k1));
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac, providedIn: "root" }));
    let n = t;
    return n;
  })();
var xl = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵmod = U1({ type: t })),
    (t.ɵinj = j1({}));
  let n = t;
  return n;
})();
function sm() {
  return !0;
}
var im = new Y("mat-sanity-checks", { providedIn: "root", factory: sm }),
  Mv = (() => {
    let t = class t {
      constructor(r, o, s) {
        (this._sanityChecks = o),
          (this._document = s),
          (this._hasDoneGlobalChecks = !1),
          r._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(r) {
        return sv()
          ? !1
          : typeof this._sanityChecks == "boolean"
          ? this._sanityChecks
          : !!this._sanityChecks[r];
      }
    };
    (t.ɵfac = function (o) {
      return new (o || t)(U(gv), U(im, 8), U(k1));
    }),
      (t.ɵmod = U1({ type: t })),
      (t.ɵinj = j1({ imports: [xl, xl] }));
    let n = t;
    return n;
  })();
var dt = (function (n) {
    return (
      (n[(n.FADING_IN = 0)] = "FADING_IN"),
      (n[(n.VISIBLE = 1)] = "VISIBLE"),
      (n[(n.FADING_OUT = 2)] = "FADING_OUT"),
      (n[(n.HIDDEN = 3)] = "HIDDEN"),
      n
    );
  })(dt || {}),
  zl = class {
    constructor(t, e, r, o = !1) {
      (this._renderer = t),
        (this.element = e),
        (this.config = r),
        (this._animationForciblyDisabledThroughCss = o),
        (this.state = dt.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  pv = pl({ passive: !0, capture: !0 }),
  Ml = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (t) => {
          let e = ov(t);
          e &&
            this._events.get(t.type)?.forEach((r, o) => {
              (o === e || o.contains(e)) && r.forEach((s) => s.handleEvent(t));
            });
        });
    }
    addHandler(t, e, r, o) {
      let s = this._events.get(e);
      if (s) {
        let a = s.get(r);
        a ? a.add(o) : s.set(r, new Set([o]));
      } else
        this._events.set(e, new Map([[r, new Set([o])]])),
          t.runOutsideAngular(() => {
            document.addEventListener(e, this._delegateEventHandler, pv);
          });
    }
    removeHandler(t, e, r) {
      let o = this._events.get(t);
      if (!o) return;
      let s = o.get(e);
      s &&
        (s.delete(r),
        s.size === 0 && o.delete(e),
        o.size === 0 &&
          (this._events.delete(t),
          document.removeEventListener(t, this._delegateEventHandler, pv)));
    }
  },
  mv = { enterDuration: 225, exitDuration: 150 },
  am = 800,
  wv = pl({ passive: !0, capture: !0 }),
  fv = ["mousedown", "touchstart"],
  xv = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  An = class An {
    constructor(t, e, r, o) {
      (this._target = t),
        (this._ngZone = e),
        (this._platform = o),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        o.isBrowser && (this._containerElement = wl(r));
    }
    fadeInRipple(t, e, r = {}) {
      let o = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        s = B(B({}, mv), r.animation);
      r.centered && ((t = o.left + o.width / 2), (e = o.top + o.height / 2));
      let a = r.radius || lm(t, e, o),
        l = t - o.left,
        v = e - o.top,
        d = s.enterDuration,
        g = document.createElement("div");
      g.classList.add("mat-ripple-element"),
        (g.style.left = `${l - a}px`),
        (g.style.top = `${v - a}px`),
        (g.style.height = `${a * 2}px`),
        (g.style.width = `${a * 2}px`),
        r.color != null && (g.style.backgroundColor = r.color),
        (g.style.transitionDuration = `${d}ms`),
        this._containerElement.appendChild(g);
      let f = window.getComputedStyle(g),
        z = f.transitionProperty,
        H = f.transitionDuration,
        E =
          z === "none" ||
          H === "0s" ||
          H === "0s, 0s" ||
          (o.width === 0 && o.height === 0),
        I = new zl(this, g, r, E);
      (g.style.transform = "scale3d(1, 1, 1)"),
        (I.state = dt.FADING_IN),
        r.persistent || (this._mostRecentTransientRipple = I);
      let S = null;
      return (
        !E &&
          (d || s.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let F = () => this._finishRippleTransition(I),
              G = () => this._destroyRipple(I);
            g.addEventListener("transitionend", F),
              g.addEventListener("transitioncancel", G),
              (S = { onTransitionEnd: F, onTransitionCancel: G });
          }),
        this._activeRipples.set(I, S),
        (E || !d) && this._finishRippleTransition(I),
        I
      );
    }
    fadeOutRipple(t) {
      if (t.state === dt.FADING_OUT || t.state === dt.HIDDEN) return;
      let e = t.element,
        r = B(B({}, mv), t.config.animation);
      (e.style.transitionDuration = `${r.exitDuration}ms`),
        (e.style.opacity = "0"),
        (t.state = dt.FADING_OUT),
        (t._animationForciblyDisabledThroughCss || !r.exitDuration) &&
          this._finishRippleTransition(t);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((t) => t.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((t) => {
        t.config.persistent || t.fadeOut();
      });
    }
    setupTriggerEvents(t) {
      let e = wl(t);
      !this._platform.isBrowser ||
        !e ||
        e === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = e),
        fv.forEach((r) => {
          An._eventManager.addHandler(this._ngZone, r, e, this);
        }));
    }
    handleEvent(t) {
      t.type === "mousedown"
        ? this._onMousedown(t)
        : t.type === "touchstart"
        ? this._onTouchStart(t)
        : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            xv.forEach((e) => {
              this._triggerElement.addEventListener(e, this, wv);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(t) {
      t.state === dt.FADING_IN
        ? this._startFadeOutTransition(t)
        : t.state === dt.FADING_OUT && this._destroyRipple(t);
    }
    _startFadeOutTransition(t) {
      let e = t === this._mostRecentTransientRipple,
        { persistent: r } = t.config;
      (t.state = dt.VISIBLE), !r && (!e || !this._isPointerDown) && t.fadeOut();
    }
    _destroyRipple(t) {
      let e = this._activeRipples.get(t) ?? null;
      this._activeRipples.delete(t),
        this._activeRipples.size || (this._containerRect = null),
        t === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (t.state = dt.HIDDEN),
        e !== null &&
          (t.element.removeEventListener("transitionend", e.onTransitionEnd),
          t.element.removeEventListener(
            "transitioncancel",
            e.onTransitionCancel
          )),
        t.element.remove();
    }
    _onMousedown(t) {
      let e = dv(t),
        r =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + am;
      !this._target.rippleDisabled &&
        !e &&
        !r &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(t.clientX, t.clientY, this._target.rippleConfig));
    }
    _onTouchStart(t) {
      if (!this._target.rippleDisabled && !uv(t)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let e = t.changedTouches;
        if (e)
          for (let r = 0; r < e.length; r++)
            this.fadeInRipple(
              e[r].clientX,
              e[r].clientY,
              this._target.rippleConfig
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((t) => {
          let e =
            t.state === dt.VISIBLE ||
            (t.config.terminateOnPointerUp && t.state === dt.FADING_IN);
          !t.config.persistent && e && t.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let t = this._triggerElement;
      t &&
        (fv.forEach((e) => An._eventManager.removeHandler(e, t, this)),
        this._pointerUpEventsRegistered &&
          (xv.forEach((e) => t.removeEventListener(e, this, wv)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
An._eventManager = new Ml();
var zv = An;
function lm(n, t, e) {
  let r = Math.max(Math.abs(n - e.left), Math.abs(n - e.right)),
    o = Math.max(Math.abs(t - e.top), Math.abs(t - e.bottom));
  return Math.sqrt(r * r + o * o);
}
var Cv = (() => {
  let t = class t {};
  (t.ɵfac = function (o) {
    return new (o || t)();
  }),
    (t.ɵmod = U1({ type: t })),
    (t.ɵinj = j1({ imports: [ft, Mv] }));
  let n = t;
  return n;
})();
var Vv = (() => {
  class n {
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["loader"]],
      standalone: !0,
      features: [h1],
      decls: 4,
      vars: 0,
      consts: [
        [1, "loader-container"],
        [1, "loader-item", "item-1"],
        [1, "loader-item", "item-2"],
        [1, "loader-item", "item-3"],
      ],
      template: function (r, o) {
        r & 1 &&
          (j(0, "article", 0), S1(1, "div", 1)(2, "div", 2)(3, "div", 3), $());
      },
      dependencies: [Cv],
      styles: [
        ".loader-container[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;margin-top:5vw}.loader-container[_ngcontent-%COMP%]   .loader-item[_ngcontent-%COMP%]{transition:scale .2s ease-in-out;width:50px;height:50px;background-color:#5c6166;border-radius:50%}.loader-container[_ngcontent-%COMP%]   .loader-item.item-1[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blow 1.5s ease-in-out infinite}.loader-container[_ngcontent-%COMP%]   .loader-item.item-2[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blow 1.5s ease-in-out infinite;animation-delay:.2s}.loader-container[_ngcontent-%COMP%]   .loader-item.item-3[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blow 1.5s ease-in-out infinite;animation-delay:.4s}@keyframes _ngcontent-%COMP%_blow{20%{scale:1}50%{scale:1.2}80%{scale:1}}",
      ],
    });
  }
  return n;
})();
var xe = (() => {
  class n {
    notesSubject = new D1([]);
    loadingSubject = new D1(!1);
    notes$ = this.notesSubject.asObservable();
    loading$ = this.loadingSubject.asObservable();
    originalNotes = [];
    loadNotes() {
      return L(this, null, function* () {
        this.loadingSubject.next(!0);
        try {
          let e = yield je.loadNotes();
          (!e || e.length < 10) && e.push(...D7.getDemoNotes(10)),
            this.setNotes(e);
        } catch (e) {
          console.error("Error loading notes: ", e);
        } finally {
          this.loadingSubject.next(!1);
        }
      });
    }
    getNoteById(e) {
      return this.notesSubject.value.find((r) => e === r._id);
    }
    setNotes(e) {
      this.notesSubject.next(e), (this.originalNotes = [...e]);
    }
    addNote(e) {
      return L(this, null, function* () {
        this.loadingSubject.next(!0);
        try {
          yield je.addNote(e);
          let r = [...this.notesSubject.value];
          r.unshift(e),
            this.notesSubject.next(r),
            this.originalNotes.unshift(e);
        } catch (r) {
          console.error("Error adding note: ", r);
        } finally {
          this.loadingSubject.next(!1);
        }
      });
    }
    updateNote(e) {
      return L(this, null, function* () {
        this.loadingSubject.next(!0);
        try {
          yield je.updateNote(e._id, e);
          let r = [...this.notesSubject.value],
            o = r.findIndex((a) => a._id === e._id);
          (r[o] = B({}, e)), this.notesSubject.next(r);
          let s = this.originalNotes.findIndex((a) => a._id === e._id);
          this.originalNotes[s] = B({}, e);
        } catch (r) {
          console.error("Error updating note: ", r);
        } finally {
          this.loadingSubject.next(!1);
        }
      });
    }
    removeNoteById(e) {
      return L(this, null, function* () {
        this.loadingSubject.next(!0);
        try {
          yield je.removeNote(e);
          let r = this.notesSubject.value.filter((o) => o._id !== e);
          this.notesSubject.next(r),
            (this.originalNotes = this.originalNotes.filter(
              (o) => o._id !== e
            ));
        } catch (r) {
          console.error("Error removing note: ", r);
        } finally {
          this.loadingSubject.next(!1);
        }
      });
    }
    filterNotes(e) {
      this.loadingSubject.next(!0);
      let r = e.toLowerCase(),
        o = this.originalNotes.filter((s) => s.title.toLowerCase().includes(r));
      this.notesSubject.next(o),
        setTimeout(() => {
          this.loadingSubject.next(!1);
        }, 500);
    }
    getFilteredNotes(e) {
      return this.originalNotes.filter((r) =>
        r.title.toLowerCase().startsWith(e.toLowerCase())
      );
    }
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵprov = W({ token: n, factory: n.ɵfac, providedIn: "root" });
  }
  return n;
})();
var cm = (n) => ({ background: n });
function hm(n, t) {
  if (n & 1) {
    let e = wt();
    j(0, "div", 3),
      c1("click", function () {
        let o = Q1(e).$implicit,
          s = x1(2);
        return Y1(s.displayNoteEditor(o._id));
      }),
      j(1, "h2"),
      y1(2),
      $(),
      j(3, "h4"),
      y1(4),
      $(),
      j(5, "p"),
      y1(6),
      $(),
      j(7, "note-bottom-actions", 4),
      c1("noteAction", function (o) {
        Q1(e);
        let s = x1(2);
        return Y1(s.onNoteAction(o));
      }),
      $(),
      j(8, "color-picker", 5),
      c1("selectedColor", function (o) {
        Q1(e);
        let s = x1(2);
        return Y1(s.onNoteAction(o));
      }),
      $()();
  }
  if (n & 2) {
    let e = t.$implicit,
      r = x1(2);
    V1("ngStyle", lt(9, cm, e.color)),
      a1(2),
      ae(e.title),
      a1(2),
      ae(e.txt),
      a1(2),
      ae(e.createdAt),
      a1(),
      V1("noteId", e._id),
      a1(),
      V1("noteId", e._id)("noteColor", e.color)("selectedNote", r.selectedNote)(
        "isColorPickerOpen",
        r.isColorPickerOpen
      );
  }
}
function vm(n, t) {
  if (
    (n & 1 &&
      (j(0, "section", 1),
      Ot(1, hm, 9, 11, "div", 2, Rt),
      $(),
      S1(3, "router-outlet")),
    n & 2)
  ) {
    let e = x1();
    a1(), Nt(e.notes);
  }
}
function dm(n, t) {
  n & 1 && S1(0, "loader");
}
var _v = (() => {
  class n {
    notesService;
    router;
    cdr;
    notes;
    selectedNote;
    isColorPickerOpen;
    colorPickerTimeout;
    isLoadingNotes = !1;
    subscription;
    constructor(e, r, o) {
      (this.notesService = e), (this.router = r), (this.cdr = o);
    }
    ngOnInit() {
      (this.isLoadingNotes = !0),
        (this.subscription = this.notesService.notes$.subscribe((e) => {
          (this.notes = e), (this.isLoadingNotes = !1), this.cdr.markForCheck();
        })),
        this.notesService.loadNotes();
    }
    ngOnDestroy() {
      this.subscription && this.subscription.unsubscribe();
    }
    getNoteIdxById(e) {
      return this.notes.findIndex((r) => r._id === e);
    }
    addUpdateNote(e, r) {
      return L(this, null, function* () {
        e
          ? yield this.notesService.updateNote(i1(B({}, r), { _id: e }))
          : yield this.notesService.addNote(i1(B({}, r), { _id: rl() }));
      });
    }
    removeNote(e) {
      return L(this, null, function* () {
        yield this.notesService.removeNoteById(e);
      });
    }
    duplicateNote(e) {
      return L(this, null, function* () {
        let r = this.notesService.getNoteById(e);
        if (!r) return;
        let o = i1(B({}, r), { _id: rl() });
        yield this.notesService.addNote(o);
      });
    }
    paintNote(e, r) {
      return L(this, null, function* () {
        let o = this.notesService.getNoteById(r);
        o && (yield this.notesService.updateNote(i1(B({}, o), { color: e })));
      });
    }
    toggleColorPicker() {
      (this.isColorPickerOpen = !this.isColorPickerOpen),
        this.isColorPickerOpen &&
          setTimeout(() => {
            this.isColorPickerOpen = !1;
          }, 2500);
    }
    displayNoteEditor(e) {
      this.router.navigate(["notes", e]);
    }
    onNoteAction(e) {
      return L(this, null, function* () {
        switch (
          ((this.selectedNote = e.noteId
            ? this.notes[this.getNoteIdxById(e.noteId)]
            : null),
          e.type)
        ) {
          case Rr:
            yield this.addUpdateNote(e.noteId, e.data);
            break;
          case C3:
            yield this.removeNote(e.noteId);
            break;
          case V3:
            yield this.duplicateNote(e.noteId);
            break;
          case Or:
            e.data
              ? yield this.paintNote(e.data, e.noteId)
              : this.toggleColorPicker();
            break;
        }
      });
    }
    static ɵfac = function (r) {
      return new (r || n)(o1(xe), o1(J1), o1(Ft));
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["note-index"]],
      standalone: !0,
      features: [h1],
      decls: 3,
      vars: 1,
      consts: [
        [3, "addNote"],
        [1, "notes-layout"],
        [
          "noteHover",
          "",
          1,
          "note-preview",
          2,
          "position",
          "relative",
          3,
          "ngStyle",
        ],
        [
          "noteHover",
          "",
          1,
          "note-preview",
          2,
          "position",
          "relative",
          3,
          "click",
          "ngStyle",
        ],
        [1, "icons-container", 3, "noteAction", "noteId"],
        [
          3,
          "selectedColor",
          "noteId",
          "noteColor",
          "selectedNote",
          "isColorPickerOpen",
        ],
      ],
      template: function (r, o) {
        r & 1 &&
          (j(0, "add-note", 0),
          c1("addNote", function (a) {
            return o.onNoteAction(a);
          }),
          $(),
          n2(1, vm, 4, 0)(2, dm, 1, 0)),
          r & 2 && (a1(), m0(1, o.isLoadingNotes ? 2 : 1));
      },
      dependencies: [Vv, ft, Jc, M3, Z7, rv, j7, u2, Z0],
      styles: [
        "*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-height:100vh;background-color:#272727;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Arial}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0px}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]{border:none;padding-inline-start:10px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%]{list-style:none}svg[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}svg[_ngcontent-%COMP%]:hover{filter:brightness(90%)}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:auto 1fr;transition:grid-template-columns .3s ease-in-out;min-height:100vh;z-index:1}.navbar[_ngcontent-%COMP%]{transition:.4s ease-in;color:#fff;z-index:10;position:sticky;top:0;background-color:#2e2e2e;padding-inline-start:10px;padding-inline-end:10px;grid-column:1/-1;display:grid;grid-template-columns:200px 1fr auto;justify-content:space-between;align-items:center;width:100%;box-shadow:#0000001a 0 1px 3px,#0000000f 0 1px 2px}.navbar.closed[_ngcontent-%COMP%]{grid-template-columns:42px 1fr auto}.navbar.closed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem}.sidebar[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.068);width:200px;background-color:#2e2e2ef5;color:#fff;position:sticky;top:64px;grid-column:1;grid-row:2;max-height:calc(100vh - 64px);display:flex;flex-direction:column;transition:width .4s ease-in;will-change:width}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]{transition:all .4s;height:39px;padding:10px;display:grid;grid-template-columns:1fr .1fr}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;transition:font-size .35s ease-in-out;opacity:1;width:fit-content}.sidebar[_ngcontent-%COMP%]   .sidebar-link.selected[_ngcontent-%COMP%]{background-color:#10101065}.sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#10101027}.notes-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.note-index[_ngcontent-%COMP%]{position:relative;max-width:100%;display:grid;grid-row:2;grid-column:2;height:fit-content;padding:10px;break-inside:avoid;padding-inline-end:15px}.closed-index[_ngcontent-%COMP%]{width:100%}@media (max-width: 800px){.navbar[_ngcontent-%COMP%], .navbar.closed[_ngcontent-%COMP%]{grid-template-columns:44px 1fr auto}.header-input[_ngcontent-%COMP%]{min-width:unset;width:97%}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:35px 1fr;will-change:grid-template-columns;transition:grid-template-columns .2s ease-in-out;min-height:100vh;z-index:1}.main-layout[_ngcontent-%COMP%]   .note-index[_ngcontent-%COMP%]{padding-inline-start:20px;padding-inline-end:10px}.closed-index[_ngcontent-%COMP%]{width:100%}.open-index[_ngcontent-%COMP%]{will-change:width}.open-index[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{will-change:width;width:150px}}[_nghost-%COMP%]   .note-preview[_ngcontent-%COMP%]{position:relative;break-inside:avoid;display:flex;flex-direction:column;gap:10px;padding:10px 10px 40px;border-radius:5px;scale:1;transition:filter .3s,transform .3s,scale .2s}[_nghost-%COMP%]   .note-preview[_ngcontent-%COMP%]:hover{cursor:pointer}[_nghost-%COMP%]   .note-preview[_ngcontent-%COMP%]:before{background-color:linear-gradient(#333,#fff)}[_nghost-%COMP%]   .note-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{opacity:.1;position:absolute;right:0;top:0;width:30px;height:30px;transition:opacity .4s;border:none;background-color:transparent}[_nghost-%COMP%]   .note-preview[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#00000052;color:#fff;opacity:1;border-radius:0 5px;cursor:pointer}[_nghost-%COMP%]   .note-preview[_ngcontent-%COMP%]   .icons-container[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;transition:opacity .2s ease-in;gap:10px;width:100%;left:0;padding:5px 0;align-items:center;justify-content:space-evenly;background-color:#ffffff0c;outline:1px solid rgba(0,0,0,.267);opacity:0}[_nghost-%COMP%]   .note-preview[_ngcontent-%COMP%]   .icons-container.hovered[_ngcontent-%COMP%]{opacity:1}.note-preview.hovered[_ngcontent-%COMP%]{scale:1.02}.note-preview.hovered[_ngcontent-%COMP%]   .icons-container[_ngcontent-%COMP%]{opacity:1}.notes-layout[_ngcontent-%COMP%]{columns:300px auto;column-gap:10px}.notes-layout[_ngcontent-%COMP%]   .note-preview[_ngcontent-%COMP%]{margin-block-end:10px}",
        "*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-height:100vh;background-color:#272727;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Arial}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0px}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]{border:none;padding-inline-start:10px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%]{list-style:none}svg[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}svg[_ngcontent-%COMP%]:hover{filter:brightness(90%)}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:auto 1fr;transition:grid-template-columns .3s ease-in-out;min-height:100vh;z-index:1}.navbar[_ngcontent-%COMP%]{transition:.4s ease-in;color:#fff;z-index:10;position:sticky;top:0;background-color:#2e2e2e;padding-inline-start:10px;padding-inline-end:10px;grid-column:1/-1;display:grid;grid-template-columns:200px 1fr auto;justify-content:space-between;align-items:center;width:100%;box-shadow:#0000001a 0 1px 3px,#0000000f 0 1px 2px}.navbar.closed[_ngcontent-%COMP%]{grid-template-columns:42px 1fr auto}.navbar.closed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem}.sidebar[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.068);width:200px;background-color:#2e2e2ef5;color:#fff;position:sticky;top:64px;grid-column:1;grid-row:2;max-height:calc(100vh - 64px);display:flex;flex-direction:column;transition:width .4s ease-in;will-change:width}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]{transition:all .4s;height:39px;padding:10px;display:grid;grid-template-columns:1fr .1fr}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;transition:font-size .35s ease-in-out;opacity:1;width:fit-content}.sidebar[_ngcontent-%COMP%]   .sidebar-link.selected[_ngcontent-%COMP%]{background-color:#10101065}.sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#10101027}.notes-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.note-index[_ngcontent-%COMP%]{position:relative;max-width:100%;display:grid;grid-row:2;grid-column:2;height:fit-content;padding:10px;break-inside:avoid;padding-inline-end:15px}.closed-index[_ngcontent-%COMP%]{width:100%}@media (max-width: 800px){.navbar[_ngcontent-%COMP%], .navbar.closed[_ngcontent-%COMP%]{grid-template-columns:44px 1fr auto}.header-input[_ngcontent-%COMP%]{min-width:unset;width:97%}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:35px 1fr;will-change:grid-template-columns;transition:grid-template-columns .2s ease-in-out;min-height:100vh;z-index:1}.main-layout[_ngcontent-%COMP%]   .note-index[_ngcontent-%COMP%]{padding-inline-start:20px;padding-inline-end:10px}.closed-index[_ngcontent-%COMP%]{width:100%}.open-index[_ngcontent-%COMP%]{will-change:width}.open-index[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{will-change:width;width:150px}}",
      ],
      changeDetection: 0,
    });
  }
  return n;
})();
var Hv = (() => {
  class n {
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["App-labels-editor"]],
      standalone: !0,
      features: [h1],
      decls: 2,
      vars: 0,
      template: function (r, o) {
        r & 1 && (j(0, "p"), y1(1, "labels-editor works!"), $());
      },
      styles: ["p[_ngcontent-%COMP%]{color:#fff}"],
    });
  }
  return n;
})();
var Lv = (() => {
  class n {
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["app-bin"]],
      standalone: !0,
      features: [h1],
      decls: 2,
      vars: 0,
      template: function (r, o) {
        r & 1 && (j(0, "p"), y1(1, "bin works!"), $());
      },
      dependencies: [ft],
      styles: ["p[_ngcontent-%COMP%]{color:#fff}"],
      changeDetection: 0,
    });
  }
  return n;
})();
var um = (n) => ({ background: n });
function gm(n, t) {
  if (n & 1) {
    let e = wt();
    j(0, "div", 0),
      c1("click", function () {
        Q1(e);
        let o = x1();
        return Y1(o.closeDialog());
      }),
      $(),
      j(1, "dialog")(2, "form", 1),
      c1("submit", function (o) {
        Q1(e);
        let s = x1();
        return Y1(s.onUpdateNote(o));
      }),
      S1(3, "input", 2),
      j(4, "textarea", 3),
      y1(5, " "),
      $(),
      j(6, "button"),
      y1(7, "Update"),
      $()()();
  }
  if (n & 2) {
    let e = x1();
    a1(2),
      p0(lt(4, um, e.noteToEdit == null ? null : e.noteToEdit.color)),
      a1(),
      V1("value", e.noteToEdit == null ? null : e.noteToEdit.title),
      a1(),
      V1("value", e.noteToEdit == null ? null : e.noteToEdit.txt);
  }
}
var Av = (() => {
  class n {
    route;
    router;
    noteService;
    noteToEdit;
    noteId;
    constructor(e, r, o) {
      (this.route = e), (this.router = r), (this.noteService = o);
    }
    ngOnInit() {
      return L(this, null, function* () {
        try {
          this.route.paramMap.subscribe((e) => {
            (this.noteId = e.get("noteId")),
              (this.noteToEdit = this.noteService.getNoteById(this.noteId)),
              this.noteToEdit || this.router.navigate(["notes"]);
          });
        } catch (e) {
          console.log(e);
        }
      });
    }
    onUpdateNote(e) {
      if ((e.preventDefault(), !this.noteToEdit)) return;
      let r = e.target,
        o = r.elements.namedItem("title"),
        s = r.elements.namedItem("txt");
      (this.noteToEdit.title = o.value),
        (this.noteToEdit.txt = s.value),
        this.noteService.updateNote(this.noteToEdit),
        this.router.navigate(["notes"]);
    }
    closeDialog() {
      this.router.navigate(["notes"]);
    }
    static ɵfac = function (r) {
      return new (r || n)(o1(jt), o1(J1), o1(xe));
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["App-note-details"]],
      standalone: !0,
      features: [h1],
      decls: 1,
      vars: 1,
      consts: [
        [1, "backdrop", 3, "click"],
        [1, "add-note-container", 3, "submit"],
        [
          "type",
          "text",
          "placeholder",
          "Title...",
          "name",
          "title",
          3,
          "value",
        ],
        ["placeholder", " How are you today...", "name", "txt", 3, "value"],
      ],
      template: function (r, o) {
        r & 1 && n2(0, gm, 8, 6), r & 2 && m0(0, o.noteId ? 0 : -1);
      },
      dependencies: [Oo, Ro, Po, _n, u2],
      styles: [
        ".add-note-container[_ngcontent-%COMP%]{outline:1px solid #585858;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;position:relative;border-radius:5px;color:#fff;display:grid;margin:auto;min-width:20%;max-width:600px;height:fit-content;margin-block-end:10px}.add-note-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{font-size:1.2em;font-weight:300}.add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#393c3f;border-radius:5px 5px 0 0;transition:.2s background-color ease-in;padding:10px 0;padding-block-end:10px;font-size:1rem;padding-inline-start:10px;color:#fff}.add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{color:#000;background-color:#c3c3c3}.add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus::placeholder{color:#000}.add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:0 0 5px 5px;background-color:#393c3f;color:#fff;transition:.2s background-color ease-in;padding-inline-start:10px;padding-block-start:10px;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;resize:none;height:100px;border:none}.add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{color:#000;outline:none;background-color:#c3c3c3}.add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus::placeholder{color:#000}.add-note-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:10px;bottom:10px;outline:1px solid rgba(255,255,255,.123);padding:5px 30px;background-color:#333;color:#c3c3c3;justify-self:start;cursor:pointer;border:none;font-size:1rem;width:50px;height:auto;display:flex;align-items:center;justify-content:center;border-radius:5px}.add-note-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000;opacity:.7;background-color:#fff}",
        "dialog[_ngcontent-%COMP%]{transition:all .5s;height:fit-content;z-index:20;inset:0;margin:auto;position:fixed;display:flex;align-items:center;border-radius:5px;justify-content:center;background-color:transparent;border:none;color:#000}dialog[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:gray}dialog[_ngcontent-%COMP%]   .add-note-container[_ngcontent-%COMP%]{width:50vw;min-width:fit-content}dialog[_ngcontent-%COMP%]   .add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:fit-content;color:#000;padding:10px;min-height:200px;font-size:20px;font-weight:600;background-color:transparent}dialog[_ngcontent-%COMP%]   .add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:700;font-size:28px}dialog[_ngcontent-%COMP%]   .add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], dialog[_ngcontent-%COMP%]   .add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{color:#000;background-color:transparent}dialog[_ngcontent-%COMP%]   .add-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder, dialog[_ngcontent-%COMP%]   .add-note-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:#333}.backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;transition:.2s ease;background:#00000080;z-index:10}",
      ],
    });
  }
  return n;
})();
var bv = [
  { path: "labels", component: Hv },
  {
    path: "notes",
    component: _v,
    children: [{ path: ":noteId", component: Av }],
  },
  { path: "bin", component: Lv },
  { path: yt, redirectTo: "/notes", pathMatch: "full" },
  { path: "**", redirectTo: "/notes" },
];
var pm = "@",
  mm = (() => {
    let t = class t {
      constructor(r, o, s, a, l) {
        (this.doc = r),
          (this.delegate = o),
          (this.zone = s),
          (this.animationType = a),
          (this.moduleImpl = l),
          (this._rendererFactoryPromise = null),
          (this.scheduler = T(Nc, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        return (this.moduleImpl ?? import("./chunk-DJMG7JCX.js"))
          .catch((o) => {
            throw new p1(5300, !1);
          })
          .then(({ ɵcreateEngine: o, ɵAnimationRendererFactory: s }) => {
            this._engine = o(this.animationType, this.doc, this.scheduler);
            let a = new s(this.delegate, this._engine, this.zone);
            return (this.delegate = a), a;
          });
      }
      createRenderer(r, o) {
        let s = this.delegate.createRenderer(r, o);
        if (s.ɵtype === 0) return s;
        typeof s.throwOnSyntheticProps == "boolean" &&
          (s.throwOnSyntheticProps = !1);
        let a = new Cl(s);
        return (
          o?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((l) => {
              let v = l.createRenderer(r, o);
              a.use(v);
            })
            .catch((l) => {
              a.use(s);
            }),
          a
        );
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
    };
    (t.ɵfac = function (o) {
      er();
    }),
      (t.ɵprov = W({ token: t, factory: t.ɵfac }));
    let n = t;
    return n;
  })(),
  Cl = class {
    constructor(t) {
      (this.delegate = t), (this.replay = []), (this.ɵtype = 1);
    }
    use(t) {
      if (((this.delegate = t), this.replay !== null)) {
        for (let e of this.replay) e(t);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(t, e) {
      return this.delegate.createElement(t, e);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(t, e) {
      this.delegate.appendChild(t, e);
    }
    insertBefore(t, e, r, o) {
      this.delegate.insertBefore(t, e, r, o);
    }
    removeChild(t, e, r) {
      this.delegate.removeChild(t, e, r);
    }
    selectRootElement(t, e) {
      return this.delegate.selectRootElement(t, e);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, e, r, o) {
      this.delegate.setAttribute(t, e, r, o);
    }
    removeAttribute(t, e, r) {
      this.delegate.removeAttribute(t, e, r);
    }
    addClass(t, e) {
      this.delegate.addClass(t, e);
    }
    removeClass(t, e) {
      this.delegate.removeClass(t, e);
    }
    setStyle(t, e, r, o) {
      this.delegate.setStyle(t, e, r, o);
    }
    removeStyle(t, e, r) {
      this.delegate.removeStyle(t, e, r);
    }
    setProperty(t, e, r) {
      this.shouldReplay(e) && this.replay.push((o) => o.setProperty(t, e, r)),
        this.delegate.setProperty(t, e, r);
    }
    setValue(t, e) {
      this.delegate.setValue(t, e);
    }
    listen(t, e, r) {
      return (
        this.shouldReplay(e) && this.replay.push((o) => o.listen(t, e, r)),
        this.delegate.listen(t, e, r)
      );
    }
    shouldReplay(t) {
      return this.replay !== null && t.startsWith(pm);
    }
  };
function Bv(n = "animations") {
  return (
    or("NgAsyncAnimations"),
    ie([
      {
        provide: nr,
        useFactory: (t, e, r) => new mm(t, e, r, n),
        deps: [k1, pr, A1],
      },
      {
        provide: M5,
        useValue: n === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var Sv = { providers: [v3(bv), C4(), Bv("noop")] };
var kv =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon" style="stroke-width:var(--ng-icon__stroke-width, 1.5)"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"></path></svg>';
var Ev =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon" style="stroke-width:var(--ng-icon__stroke-width, 1.5)"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>';
var j2 = (() => {
  class n {
    menuOpenSubject = new D1(!0);
    menuOpen$ = this.menuOpenSubject.asObservable();
    toggleMenu() {
      this.menuOpenSubject.next(!this.menuOpenSubject.value);
    }
    static ɵfac = function (r) {
      return new (r || n)();
    };
    static ɵprov = W({ token: n, factory: n.ɵfac, providedIn: "root" });
  }
  return n;
})();
var Iv = (() => {
  class n {
    menuService;
    noteService;
    searchTerm$ = new gt();
    loggedInUser = { username: "OriT5799" };
    isMenuOpen = !0;
    toggleMenuClick = new L1();
    constructor(e, r) {
      (this.menuService = e),
        (this.noteService = r),
        this.searchTerm$
          .pipe(Wn(500))
          .subscribe((o) => this.noteService.filterNotes(o));
    }
    handleToggleMenu() {
      this.menuService.toggleMenu();
    }
    onSearchNotes(e) {
      let r = e.target.value;
      this.searchTerm$.next(r);
    }
    static ɵfac = function (r) {
      return new (r || n)(o1(j2), o1(xe));
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["navbar"]],
      outputs: { toggleMenuClick: "toggleMenuClick" },
      standalone: !0,
      features: [Mt([], [g2({ heroBars4: kv, heroUserCircle: Ev })]), h1],
      decls: 6,
      vars: 1,
      consts: [
        ["name", "heroBars4", 1, "hamburger-svg", 3, "click"],
        [
          "type",
          "text",
          "placeholder",
          "Search note...",
          1,
          "header-input",
          3,
          "input",
        ],
        [2, "display", "flex", "align-items", "center", "gap", "5px"],
        [2, "font-size", "15px"],
        ["name", "heroUserCircle", 1, "hamburger-svg"],
      ],
      template: function (r, o) {
        r & 1 &&
          (j(0, "ng-icon", 0),
          c1("click", function () {
            return o.handleToggleMenu();
          }),
          $(),
          j(1, "input", 1),
          c1("input", function (a) {
            return o.onSearchNotes(a);
          }),
          $(),
          j(2, "div", 2)(3, "p", 3),
          y1(4),
          $(),
          S1(5, "ng-icon", 4),
          $()),
          r & 2 && (a1(4), ae(o.loggedInUser.username));
      },
      dependencies: [p2],
      styles: [
        "*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-height:100vh;background-color:#272727;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Arial}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0px}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]{border:none;padding-inline-start:10px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%]{list-style:none}svg[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}svg[_ngcontent-%COMP%]:hover{filter:brightness(90%)}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:auto 1fr;transition:grid-template-columns .3s ease-in-out;min-height:100vh;z-index:1}.navbar[_ngcontent-%COMP%]{transition:.4s ease-in;color:#fff;z-index:10;position:sticky;top:0;background-color:#2e2e2e;padding-inline-start:10px;padding-inline-end:10px;grid-column:1/-1;display:grid;grid-template-columns:200px 1fr auto;justify-content:space-between;align-items:center;width:100%;box-shadow:#0000001a 0 1px 3px,#0000000f 0 1px 2px}.navbar.closed[_ngcontent-%COMP%]{grid-template-columns:42px 1fr auto}.navbar.closed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem}.sidebar[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.068);width:200px;background-color:#2e2e2ef5;color:#fff;position:sticky;top:64px;grid-column:1;grid-row:2;max-height:calc(100vh - 64px);display:flex;flex-direction:column;transition:width .4s ease-in;will-change:width}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]{transition:all .4s;height:39px;padding:10px;display:grid;grid-template-columns:1fr .1fr}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;transition:font-size .35s ease-in-out;opacity:1;width:fit-content}.sidebar[_ngcontent-%COMP%]   .sidebar-link.selected[_ngcontent-%COMP%]{background-color:#10101065}.sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#10101027}.notes-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.note-index[_ngcontent-%COMP%]{position:relative;max-width:100%;display:grid;grid-row:2;grid-column:2;height:fit-content;padding:10px;break-inside:avoid;padding-inline-end:15px}.closed-index[_ngcontent-%COMP%]{width:100%}@media (max-width: 800px){.navbar[_ngcontent-%COMP%], .navbar.closed[_ngcontent-%COMP%]{grid-template-columns:44px 1fr auto}.header-input[_ngcontent-%COMP%]{min-width:unset;width:97%}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:35px 1fr;will-change:grid-template-columns;transition:grid-template-columns .2s ease-in-out;min-height:100vh;z-index:1}.main-layout[_ngcontent-%COMP%]   .note-index[_ngcontent-%COMP%]{padding-inline-start:20px;padding-inline-end:10px}.closed-index[_ngcontent-%COMP%]{width:100%}.open-index[_ngcontent-%COMP%]{will-change:width}.open-index[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{will-change:width;width:150px}}.header-input[_ngcontent-%COMP%]{color:#fff;outline:1px solid rgba(255,255,255,.2);transition:.2s ease-in;width:40%;min-width:418px;padding:15px 10px;font-size:1rem;background-color:#7788992d;border-radius:5px}.header-input[_ngcontent-%COMP%]::placeholder{color:#ffffff9a;font-weight:100}.header-input[_ngcontent-%COMP%]:focus{color:#000;background-color:#ffffffb6}.header-input[_ngcontent-%COMP%]:focus::placeholder{font-weight:100}.hamburger-svg[_ngcontent-%COMP%]{font-size:30px}",
        "*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-height:100vh;background-color:#272727;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Arial}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0px}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]{border:none;padding-inline-start:10px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%]{list-style:none}svg[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}svg[_ngcontent-%COMP%]:hover{filter:brightness(90%)}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:auto 1fr;transition:grid-template-columns .3s ease-in-out;min-height:100vh;z-index:1}.navbar[_ngcontent-%COMP%]{transition:.4s ease-in;color:#fff;z-index:10;position:sticky;top:0;background-color:#2e2e2e;padding-inline-start:10px;padding-inline-end:10px;grid-column:1/-1;display:grid;grid-template-columns:200px 1fr auto;justify-content:space-between;align-items:center;width:100%;box-shadow:#0000001a 0 1px 3px,#0000000f 0 1px 2px}.navbar.closed[_ngcontent-%COMP%]{grid-template-columns:42px 1fr auto}.navbar.closed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem}.sidebar[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.068);width:200px;background-color:#2e2e2ef5;color:#fff;position:sticky;top:64px;grid-column:1;grid-row:2;max-height:calc(100vh - 64px);display:flex;flex-direction:column;transition:width .4s ease-in;will-change:width}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]{transition:all .4s;height:39px;padding:10px;display:grid;grid-template-columns:1fr .1fr}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;transition:font-size .35s ease-in-out;opacity:1;width:fit-content}.sidebar[_ngcontent-%COMP%]   .sidebar-link.selected[_ngcontent-%COMP%]{background-color:#10101065}.sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#10101027}.notes-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.note-index[_ngcontent-%COMP%]{position:relative;max-width:100%;display:grid;grid-row:2;grid-column:2;height:fit-content;padding:10px;break-inside:avoid;padding-inline-end:15px}.closed-index[_ngcontent-%COMP%]{width:100%}@media (max-width: 800px){.navbar[_ngcontent-%COMP%], .navbar.closed[_ngcontent-%COMP%]{grid-template-columns:44px 1fr auto}.header-input[_ngcontent-%COMP%]{min-width:unset;width:97%}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:35px 1fr;will-change:grid-template-columns;transition:grid-template-columns .2s ease-in-out;min-height:100vh;z-index:1}.main-layout[_ngcontent-%COMP%]   .note-index[_ngcontent-%COMP%]{padding-inline-start:20px;padding-inline-end:10px}.closed-index[_ngcontent-%COMP%]{width:100%}.open-index[_ngcontent-%COMP%]{will-change:width}.open-index[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{will-change:width;width:150px}}",
      ],
    });
  }
  return n;
})();
var Tv =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"></path><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg>';
var Dv =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"><path fill-rule="evenodd" d="M11.097 1.515a.75.75 0 0 1 .589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 1 1 1.47.294L16.665 7.5h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.2 6h3.585a.75.75 0 0 1 0 1.5h-3.885l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 1 1-1.47-.294l1.02-5.103H3.75a.75.75 0 0 1 0-1.5h3.885l1.2-6H5.25a.75.75 0 0 1 0-1.5h3.885l1.08-5.397a.75.75 0 0 1 .882-.588ZM10.365 9l-1.2 6h4.47l1.2-6h-4.47Z" clip-rule="evenodd"></path></svg>';
var Pv =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"></path></svg>';
var wm = (n) => ({ selected: n });
function fm(n, t) {
  if (n & 1) {
    let e = wt();
    j(0, "div", 1),
      c1("click", function () {
        let o = Q1(e).$implicit,
          s = x1();
        return Y1(s.handleRouteSelect(o.route));
      }),
      j(1, "p"),
      y1(2),
      $(),
      S1(3, "ng-icon", 2),
      $();
  }
  if (n & 2) {
    let e = t.$implicit,
      r = x1();
    V1("ngClass", lt(3, wm, r.selectedRoute === e.route)),
      a1(2),
      ae(e.label),
      a1(),
      V1("name", e.svg);
  }
}
var Rv = (() => {
  class n {
    router;
    menuService;
    notesService;
    noteRef;
    isMenuOpen = !0;
    notesLength = 0;
    selectedRoute = "notes";
    links = [
      { label: "Notes", svg: "heroPencilSolid", route: "notes" },
      { label: "Labels", svg: "heroHashtagSolid", route: "labels" },
      { label: "Bin", svg: "heroArchiveBoxXMarkSolid", route: "bin" },
    ];
    constructor(e, r, o, s) {
      (this.router = e),
        (this.menuService = r),
        (this.notesService = o),
        (this.noteRef = s);
    }
    ngOnInit() {
      this.notesService.notes$.subscribe((e) => {
        (this.notesLength = e.length),
          (this.links[0].label = `Notes (${this.notesLength})`),
          this.noteRef.markForCheck();
      });
    }
    handleRouteSelect(e) {
      (this.selectedRoute = e), this.router.navigate([e]);
    }
    static ɵfac = function (r) {
      return new (r || n)(o1(J1), o1(j2), o1(xe), o1(Ft));
    };
    static ɵcmp = l1({
      type: n,
      selectors: [["sidebar"]],
      inputs: { isMenuOpen: "isMenuOpen" },
      standalone: !0,
      features: [
        Mt(
          [],
          [
            g2({
              heroPencilSolid: Pv,
              heroHashtagSolid: Dv,
              heroArchiveBoxXMarkSolid: Tv,
            }),
          ]
        ),
        h1,
      ],
      decls: 2,
      vars: 0,
      consts: [
        [1, "sidebar-link", 3, "ngClass"],
        [1, "sidebar-link", 3, "click", "ngClass"],
        [3, "name"],
      ],
      template: function (r, o) {
        r & 1 && Ot(0, fm, 4, 5, "div", 0, Rt), r & 2 && Nt(o.links);
      },
      dependencies: [ft, hr, p2],
      styles: [
        "*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-height:100vh;background-color:#272727;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Arial}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0px}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]{border:none;padding-inline-start:10px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%]{list-style:none}svg[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}svg[_ngcontent-%COMP%]:hover{filter:brightness(90%)}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:auto 1fr;transition:grid-template-columns .3s ease-in-out;min-height:100vh;z-index:1}.navbar[_ngcontent-%COMP%]{transition:.4s ease-in;color:#fff;z-index:10;position:sticky;top:0;background-color:#2e2e2e;padding-inline-start:10px;padding-inline-end:10px;grid-column:1/-1;display:grid;grid-template-columns:200px 1fr auto;justify-content:space-between;align-items:center;width:100%;box-shadow:#0000001a 0 1px 3px,#0000000f 0 1px 2px}.navbar.closed[_ngcontent-%COMP%]{grid-template-columns:42px 1fr auto}.navbar.closed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem}.sidebar[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.068);width:200px;background-color:#2e2e2ef5;color:#fff;position:sticky;top:64px;grid-column:1;grid-row:2;max-height:calc(100vh - 64px);display:flex;flex-direction:column;transition:width .4s ease-in;will-change:width}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]{transition:all .4s;height:39px;padding:10px;display:grid;grid-template-columns:1fr .1fr}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;transition:font-size .35s ease-in-out;opacity:1;width:fit-content}.sidebar[_ngcontent-%COMP%]   .sidebar-link.selected[_ngcontent-%COMP%]{background-color:#10101065}.sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#10101027}.notes-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.note-index[_ngcontent-%COMP%]{position:relative;max-width:100%;display:grid;grid-row:2;grid-column:2;height:fit-content;padding:10px;break-inside:avoid;padding-inline-end:15px}.closed-index[_ngcontent-%COMP%]{width:100%}@media (max-width: 800px){.navbar[_ngcontent-%COMP%], .navbar.closed[_ngcontent-%COMP%]{grid-template-columns:44px 1fr auto}.header-input[_ngcontent-%COMP%]{min-width:unset;width:97%}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:35px 1fr;will-change:grid-template-columns;transition:grid-template-columns .2s ease-in-out;min-height:100vh;z-index:1}.main-layout[_ngcontent-%COMP%]   .note-index[_ngcontent-%COMP%]{padding-inline-start:20px;padding-inline-end:10px}.closed-index[_ngcontent-%COMP%]{width:100%}.open-index[_ngcontent-%COMP%]{will-change:width}.open-index[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{will-change:width;width:150px}}",
      ],
      changeDetection: 0,
    });
  }
  return n;
})();
var Ov = (n, t) => ({ open: n, closed: t }),
  xm = (n, t) => ({ "open-index": n, "closed-index": t }),
  Nv = (() => {
    class n {
      menuService;
      title = "Google Keep";
      constructor(e) {
        this.menuService = e;
      }
      static ɵfac = function (r) {
        return new (r || n)(o1(j2));
      };
      static ɵcmp = l1({
        type: n,
        selectors: [["app-root"]],
        standalone: !0,
        features: [h1],
        decls: 12,
        vars: 24,
        consts: [
          [1, "app-container", "main-layout"],
          [1, "navbar", 3, "ngClass"],
          [1, "note-index", "content-container", 3, "ngClass"],
          [1, "sidebar", 3, "ngClass"],
        ],
        template: function (r, o) {
          r & 1 &&
            (j(0, "main", 0)(1, "navbar", 1),
            _e(2, "async"),
            _e(3, "async"),
            y1(4, " >"),
            $(),
            j(5, "main", 2),
            _e(6, "async"),
            _e(7, "async"),
            S1(8, "router-outlet"),
            $(),
            S1(9, "sidebar", 3),
            _e(10, "async"),
            _e(11, "async"),
            $()),
            r & 2 &&
              (a1(),
              V1(
                "ngClass",
                ir(
                  15,
                  Ov,
                  He(2, 3, o.menuService.menuOpen$),
                  !He(3, 5, o.menuService.menuOpen$)
                )
              ),
              a1(4),
              V1(
                "ngClass",
                ir(
                  18,
                  xm,
                  He(6, 7, o.menuService.menuOpen$),
                  !He(7, 9, o.menuService.menuOpen$)
                )
              ),
              a1(4),
              V1(
                "ngClass",
                ir(
                  21,
                  Ov,
                  He(10, 11, o.menuService.menuOpen$),
                  !He(11, 13, o.menuService.menuOpen$)
                )
              ));
        },
        dependencies: [ft, hr, Xc, Iv, Rv, u2, Z0],
        styles: [
          "*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{min-height:100vh;background-color:#272727;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Arial}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;width:0px}input[_ngcontent-%COMP%]:focus{outline:none}input[_ngcontent-%COMP%]{border:none;padding-inline-start:10px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin:0;padding:0}a[_ngcontent-%COMP%]{text-decoration:none}ul[_ngcontent-%COMP%]{list-style:none}svg[_ngcontent-%COMP%]{font-size:30px;cursor:pointer}svg[_ngcontent-%COMP%]:hover{filter:brightness(90%)}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:auto 1fr;transition:grid-template-columns .3s ease-in-out;min-height:100vh;z-index:1}.navbar[_ngcontent-%COMP%]{transition:.4s ease-in;color:#fff;z-index:10;position:sticky;top:0;background-color:#2e2e2e;padding-inline-start:10px;padding-inline-end:10px;grid-column:1/-1;display:grid;grid-template-columns:200px 1fr auto;justify-content:space-between;align-items:center;width:100%;box-shadow:#0000001a 0 1px 3px,#0000000f 0 1px 2px}.navbar.closed[_ngcontent-%COMP%]{grid-template-columns:42px 1fr auto}.navbar.closed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem}.sidebar[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.068);width:200px;background-color:#2e2e2ef5;color:#fff;position:sticky;top:64px;grid-column:1;grid-row:2;max-height:calc(100vh - 64px);display:flex;flex-direction:column;transition:width .4s ease-in;will-change:width}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]{transition:all .4s;height:39px;padding:10px;display:grid;grid-template-columns:1fr .1fr}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;transition:font-size .35s ease-in-out;opacity:1;width:fit-content}.sidebar[_ngcontent-%COMP%]   .sidebar-link.selected[_ngcontent-%COMP%]{background-color:#10101065}.sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]{width:44px}.sidebar[_ngcontent-%COMP%]   .sidebar.closed[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0}.sidebar[_ngcontent-%COMP%]   .sidebar-link[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#10101027}.notes-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr}.note-index[_ngcontent-%COMP%]{position:relative;max-width:100%;display:grid;grid-row:2;grid-column:2;height:fit-content;padding:10px;break-inside:avoid;padding-inline-end:15px}.closed-index[_ngcontent-%COMP%]{width:100%}@media (max-width: 800px){.navbar[_ngcontent-%COMP%], .navbar.closed[_ngcontent-%COMP%]{grid-template-columns:44px 1fr auto}.header-input[_ngcontent-%COMP%]{min-width:unset;width:97%}.main-layout[_ngcontent-%COMP%]{display:grid;grid-template-rows:64px 1fr;grid-template-columns:35px 1fr;will-change:grid-template-columns;transition:grid-template-columns .2s ease-in-out;min-height:100vh;z-index:1}.main-layout[_ngcontent-%COMP%]   .note-index[_ngcontent-%COMP%]{padding-inline-start:20px;padding-inline-end:10px}.closed-index[_ngcontent-%COMP%]{width:100%}.open-index[_ngcontent-%COMP%]{will-change:width}.open-index[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{will-change:width;width:150px}}",
        ],
      });
    }
    return n;
  })();
z4(Nv, Sv).catch((n) => console.error(n));
