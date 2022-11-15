!(function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var n = {};
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 1));
})([
  function (t, e, n) {
    "use strict";
    function r() {
      for (
        var t =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
          e = "",
          n = 0;
        n < 35;
        n += 1
      )
        e += t[Math.floor(Math.random() * t.length)];
      return e;
    }
    n.d(e, "a", function () {
      return o;
    }),
      (e.c = r);
    var o = {
        USER: { name: "wap_user", expirationDays: 365 },
        CLICK_PLACES: { name: "wap-click-places", expirationDays: 7300 },
        LAST_EVENT: { name: "wap_last_event", expirationDays: 7300 },
        WAPID: { name: "WAPID", expirationDays: 7300 },
      },
      i = (function () {
        function t() {}
        return (
          (t.prototype.read = function (t) {
            return window.WOVN.io.internal.cookieStore.get(t);
          }),
          (t.prototype.write = function (t, e) {
            return window.WOVN.io.internal.cookieStore.set(t, e);
          }),
          (t.prototype.remove = function (t) {
            return window.WOVN.io.internal.cookieStore.erase(t);
          }),
          t
        );
      })();
    e.b = new i();
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = n(2),
      o = n(6),
      i = n(0);
    r.a.showWidgetPage();
    var a = [];
    window.addEventListener("click", function (t) {
      if ((a.push(o.a.getWithDom(t.target)), window.localStorage))
        try {
          window.localStorage.setItem(i.a.CLICK_PLACES.name, a.join("\t"));
        } catch (t) {
          i.b.write(i.a.CLICK_PLACES, a.join("\t"));
        }
    });
  },
  function (t, e, n) {
    "use strict";
    var r = n(3),
      o = (function () {
        function t() {}
        return (
          (t.prototype.showWidgetPage = function () {
            var t = {
              event: "showWidgetPage",
              property: { loadTime: 0, projectTokenStatus: !0 },
            };
            r.a.propertyInfo(t);
          }),
          t
        );
      })();
    e.a = new o();
  },
  function (t, e, n) {
    "use strict";
    var r = n(0),
      o = n(4),
      i = n(5),
      a = (function () {
        function t() {}
        return (
          (t.prototype.propertyInfo = function (t) {
            var e = document.title,
              n = document.referrer,
              a = window.location.href,
              u = navigator.language,
              c = window.innerWidth || document.body.clientWidth,
              s = window.innerHeight || document.body.clientHeight,
              p = this.setWapCookie(),
              f = o.a.getSelectedLangCookie(),
              l = o.a.getProjectToken(),
              w = o.a.getInsertType(),
              d = o.a.getDefaultLang(),
              g = r.b.read(r.a.USER),
              y = t.event,
              h = this.getClickPlaces();
            this.info = {
              title: e,
              referer: n,
              url: a,
              lang: u,
              width: c,
              height: s,
              id: p,
              selectedLang: f,
              projectToken: l,
              insertType: w,
              event: y,
              wapUser: g,
              defaultLang: d,
              clickPlace: h,
            };
            var v;
            if (t && t.property)
              for (v in t.property) this.info[v] = t.property[v];
            (this.info = this.stringify(this.info)),
              r.b.write(r.a.LAST_EVENT, t.event),
              i.a.post(this.info);
          }),
          (t.prototype.getClickPlaces = function () {
            var t = null;
            return (
              window.localStorage &&
                (t = window.localStorage.getItem(r.a.CLICK_PLACES.name)),
              t
                ? (window.localStorage.removeItem(r.a.CLICK_PLACES.name),
                  t.split("\t"))
                : (r.b.read(r.a.CLICK_PLACES) &&
                    (t = r.b.read(r.a.CLICK_PLACES)),
                  t ? (r.b.remove(r.a.CLICK_PLACES), t.split("\t")) : [])
            );
          }),
          (t.prototype.setWapCookie = function () {
            if (r.b.read(r.a.WAPID)) return r.b.read(r.a.WAPID);
            var t = Object(r.c)();
            return r.b.write(r.a.WAPID, t), t;
          }),
          (t.prototype.stringify = function (t) {
            switch (typeof t) {
              case "string":
                return this.quote(t);
              case "number":
              case "boolean":
                return String(t);
              case "object":
                if (!t) return "null";
                var e = Object.prototype.toString.apply(t);
                if ("[object Array]" === e) {
                  for (var n = [], r = 0; r < t.length; ++r)
                    n[r] = this.stringify(t[r]);
                  return "[" + n.join(",") + "]";
                }
                if ("[object Object]" === e) {
                  var n = [];
                  for (var o in t)
                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                      var i = t[o];
                      if (void 0 === i) continue;
                      n.push(this.quote(o) + ":" + this.stringify(i));
                    }
                  return "{" + n.join(",") + "}";
                }
                return this.quote(String(t));
              default:
                return this.quote(String(t));
            }
          }),
          (t.prototype.quote = function (t) {
            var e = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
              },
              n = function (t) {
                return (
                  e[t] ||
                  "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1)
                );
              },
              r = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return '"' + t.replace(r, n) + '"';
          }),
          t
        );
      })();
    e.a = new a();
  },
  function (t, e, n) {
    "use strict";
    var r = (function () {
      function t() {}
      return (
        (t.prototype.getProjectToken = function () {
          try {
            return window.WOVN.io.internal.getProjectToken();
          } catch (t) {
            return null;
          }
        }),
        (t.prototype.getInsertType = function () {
          try {
            return window.WOVN.io.internal.isBackendSnippet()
              ? "backend"
              : "script";
          } catch (t) {
            return null;
          }
        }),
        (t.prototype.getSelectedLangCookie = function () {
          return window.WOVN.io.internal.getSelectedLangCookie();
        }),
        (t.prototype.getDefaultLang = function () {
          try {
            return window.WOVN.io.internal.getDefaultLang();
          } catch (t) {
            return "(none)";
          }
        }),
        t
      );
    })();
    e.a = new r();
  },
  function (t, e, n) {
    "use strict";
    var r = (function () {
      function t() {}
      return (
        (t.prototype.post = function (t) {
          var e = this.newXhr();
          e.open("POST", "https://wap.wovn.io/post", !0),
            (e.onreadystaposttechange = function () {
              4 === e.readyState && (e = null);
            }),
            e.send(t);
        }),
        (t.prototype.newXhr = function () {
          if (window.XMLHttpRequest) return new XMLHttpRequest();
          try {
            return new window.ActiveXObject("Msxml2.XMLHTTP");
          } catch (t) {
            return new window.ActiveXObject("Microsoft.XMLHTTP");
          }
        }),
        t
      );
    })();
    e.a = new r();
  },
  function (t, e, n) {
    "use strict";
    var r = (function () {
      function t() {}
      return (
        (t.prototype.getWithDom = function (t) {
          try {
            return " " + this.traversal(t, []).reverse().join(" ") + " ";
          } catch (t) {
            return "@ " + t.toString();
          }
        }),
        (t.prototype.count = function (t) {
          for (var e = -1; t; ) ++e, (t = t.previousElementSibling);
          return e;
        }),
        (t.prototype.traversal = function (t, e) {
          if (!t) return e;
          var n = t.parentElement;
          if (!n) return e;
          var r = t.tagName.toLowerCase();
          if ("html" === r || "body" === r) return e;
          var o = t.className ? " ." + t.className.replace(" ", " .") : "",
            i = t.id ? " #" + t.id : "",
            a = " " + this.count(t);
          return e.push("/" + r + a + i + o), this.traversal(n, e);
        }),
        t
      );
    })();
    e.a = new r();
  },
]);
