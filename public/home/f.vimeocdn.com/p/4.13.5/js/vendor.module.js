/* VimeoPlayer - v4.13.5 - 2022-11-10 - https://player.vimeo.com/NOTICE.txt */
function e(e, t) {
    return e === t || e != e && t != t
}

function t(t, n) {
    for (var r = t.length; r--;)
        if (e(t[r][0], n)) return r;
    return -1
}
var n = Array.prototype.splice;

function r(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
r.prototype.clear = function() {
    this.__data__ = [], this.size = 0
}, r.prototype.delete = function(e) {
    var r = this.__data__,
        i = t(r, e);
    return !(i < 0 || (i == r.length - 1 ? r.pop() : n.call(r, i, 1), --this.size, 0))
}, r.prototype.get = function(e) {
    var n = this.__data__,
        r = t(n, e);
    return r < 0 ? void 0 : n[r][1]
}, r.prototype.has = function(e) {
    return t(this.__data__, e) > -1
}, r.prototype.set = function(e, n) {
    var r = this.__data__,
        i = t(r, e);
    return i < 0 ? (++this.size, r.push([e, n])) : r[i][1] = n, this
};
var i = "object" == typeof global && global && global.Object === Object && global,
    o = "object" == typeof self && self && self.Object === Object && self,
    s = i || o || Function("return this")(),
    a = s.Symbol,
    c = Object.prototype,
    u = c.hasOwnProperty,
    l = c.toString,
    d = a ? a.toStringTag : void 0,
    h = Object.prototype.toString,
    f = a ? a.toStringTag : void 0;

function p(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : f && f in Object(e) ? function(e) {
        var t = u.call(e, d),
            n = e[d];
        try {
            e[d] = void 0;
            var r = !0
        } catch (rl) {}
        var i = l.call(e);
        return r && (t ? e[d] = n : delete e[d]), i
    }(e) : function(e) {
        return h.call(e)
    }(e)
}

function m(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
}

function _(e) {
    if (!m(e)) return !1;
    var t = p(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
var v = s["__core-js_shared__"],
    g = function() {
        var e = /[^.]+$/.exec(v && v.keys && v.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }(),
    y = Function.prototype.toString;

function b(e) {
    if (null != e) {
        try {
            return y.call(e)
        } catch (rl) {}
        try {
            return e + ""
        } catch (rl) {}
    }
    return ""
}
var E = /^\[object .+?Constructor\]$/,
    S = Function.prototype,
    T = Object.prototype,
    w = S.toString,
    A = T.hasOwnProperty,
    I = RegExp("^" + w.call(A).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function k(e, t) {
    var n = function(e, t) {
        return null == e ? void 0 : e[t]
    }(e, t);
    return function(e) {
        return !(!m(e) || function(e) {
            return !!g && g in e
        }(e)) && (_(e) ? I : E).test(b(e))
    }(n) ? n : void 0
}
var R = k(s, "Map"),
    P = k(Object, "create"),
    D = Object.prototype.hasOwnProperty,
    O = Object.prototype.hasOwnProperty;

function C(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function x(e, t) {
    var n = e.__data__;
    return function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
}

function L(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function M(e) {
    var t = this.__data__ = new r(e);
    this.size = t.size
}
C.prototype.clear = function() {
    this.__data__ = P ? P(null) : {}, this.size = 0
}, C.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}, C.prototype.get = function(e) {
    var t = this.__data__;
    if (P) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n
    }
    return D.call(t, e) ? t[e] : void 0
}, C.prototype.has = function(e) {
    var t = this.__data__;
    return P ? void 0 !== t[e] : O.call(t, e)
}, C.prototype.set = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = P && void 0 === t ? "__lodash_hash_undefined__" : t, this
}, L.prototype.clear = function() {
    this.size = 0, this.__data__ = {
        hash: new C,
        map: new(R || r),
        string: new C
    }
}, L.prototype.delete = function(e) {
    var t = x(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}, L.prototype.get = function(e) {
    return x(this, e).get(e)
}, L.prototype.has = function(e) {
    return x(this, e).has(e)
}, L.prototype.set = function(e, t) {
    var n = x(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}, M.prototype.clear = function() {
    this.__data__ = new r, this.size = 0
}, M.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, M.prototype.get = function(e) {
    return this.__data__.get(e)
}, M.prototype.has = function(e) {
    return this.__data__.has(e)
}, M.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof r) {
        var i = n.__data__;
        if (!R || i.length < 199) return i.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new L(i)
    }
    return n.set(e, t), this.size = n.size, this
};
var N = function() {
    try {
        var e = k(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (rl) {}
}();

function F(e, t, n) {
    "__proto__" == t && N ? N(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var U = Object.prototype.hasOwnProperty;

function B(t, n, r) {
    var i = t[n];
    U.call(t, n) && e(i, r) && (void 0 !== r || n in t) || F(t, n, r)
}

function j(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s;) {
        var a = t[o],
            c = r ? r(n[a], e[a], a, n, e) : void 0;
        void 0 === c && (c = e[a]), i ? F(n, a, c) : B(n, a, c)
    }
    return n
}

function V(e) {
    return null != e && "object" == typeof e
}

function H(e) {
    return V(e) && "[object Arguments]" == p(e)
}
var X = Object.prototype,
    q = X.hasOwnProperty,
    G = X.propertyIsEnumerable,
    z = H(function() {
        return arguments
    }()) ? H : function(e) {
        return V(e) && q.call(e, "callee") && !G.call(e, "callee")
    },
    W = Array.isArray,
    Y = "object" == typeof exports && exports && !exports.nodeType && exports,
    $ = Y && "object" == typeof module && module && !module.nodeType && module,
    K = $ && $.exports === Y ? s.Buffer : void 0,
    Q = (K ? K.isBuffer : void 0) || function() {
        return !1
    },
    J = /^(?:0|[1-9]\d*)$/;

function Z(e, t) {
    var n = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && J.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function ee(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}
var te = {};

function ne(e) {
    return function(t) {
        return e(t)
    }
}
te["[object Float32Array]"] = te["[object Float64Array]"] = te["[object Int8Array]"] = te["[object Int16Array]"] = te["[object Int32Array]"] = te["[object Uint8Array]"] = te["[object Uint8ClampedArray]"] = te["[object Uint16Array]"] = te["[object Uint32Array]"] = !0, te["[object Arguments]"] = te["[object Array]"] = te["[object ArrayBuffer]"] = te["[object Boolean]"] = te["[object DataView]"] = te["[object Date]"] = te["[object Error]"] = te["[object Function]"] = te["[object Map]"] = te["[object Number]"] = te["[object Object]"] = te["[object RegExp]"] = te["[object Set]"] = te["[object String]"] = te["[object WeakMap]"] = !1;
var re = "object" == typeof exports && exports && !exports.nodeType && exports,
    ie = re && "object" == typeof module && module && !module.nodeType && module,
    oe = ie && ie.exports === re && i.process,
    se = function() {
        try {
            return ie && ie.require && ie.require("util").types || oe && oe.binding && oe.binding("util")
        } catch (rl) {}
    }(),
    ae = se && se.isTypedArray,
    ce = ae ? ne(ae) : function(e) {
        return V(e) && ee(e.length) && !!te[p(e)]
    },
    ue = Object.prototype.hasOwnProperty;

function le(e, t) {
    var n = W(e),
        r = !n && z(e),
        i = !n && !r && Q(e),
        o = !n && !r && !i && ce(e),
        s = n || r || i || o,
        a = s ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }(e.length, String) : [],
        c = a.length;
    for (var u in e) !t && !ue.call(e, u) || s && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || Z(u, c)) || a.push(u);
    return a
}
var de = Object.prototype;

function he(e) {
    var t = e && e.constructor;
    return e === ("function" == typeof t && t.prototype || de)
}

function fe(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var pe = fe(Object.keys, Object),
    me = Object.prototype.hasOwnProperty;

function _e(e) {
    if (!he(e)) return pe(e);
    var t = [];
    for (var n in Object(e)) me.call(e, n) && "constructor" != n && t.push(n);
    return t
}

function ve(e) {
    return null != e && ee(e.length) && !_(e)
}

function ge(e) {
    return ve(e) ? le(e) : _e(e)
}
var ye = Object.prototype.hasOwnProperty;

function be(e) {
    return ve(e) ? le(e, !0) : function(e) {
        if (!m(e)) return function(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }(e);
        var t = he(e),
            n = [];
        for (var r in e)("constructor" != r || !t && ye.call(e, r)) && n.push(r);
        return n
    }(e)
}
var Ee = "object" == typeof exports && exports && !exports.nodeType && exports,
    Se = Ee && "object" == typeof module && module && !module.nodeType && module,
    Te = Se && Se.exports === Ee ? s.Buffer : void 0,
    we = Te ? Te.allocUnsafe : void 0;

function Ae(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = we ? we(n) : new e.constructor(n);
    return e.copy(r), r
}

function Ie(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}

function ke() {
    return []
}
var Re = Object.prototype.propertyIsEnumerable,
    Pe = Object.getOwnPropertySymbols,
    De = Pe ? function(e) {
        return null == e ? [] : (e = Object(e), function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var s = e[n];
                t(s) && (o[i++] = s)
            }
            return o
        }(Pe(e), (function(t) {
            return Re.call(e, t)
        })))
    } : ke;

function Oe(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
    return e
}
var Ce = fe(Object.getPrototypeOf, Object),
    xe = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) Oe(t, De(e)), e = Ce(e);
        return t
    } : ke;

function Le(e, t, n) {
    var r = t(e);
    return W(e) ? r : Oe(r, n(e))
}

function Me(e) {
    return Le(e, ge, De)
}

function Ne(e) {
    return Le(e, be, xe)
}
var Fe = k(s, "DataView"),
    Ue = k(s, "Promise"),
    Be = k(s, "Set"),
    je = k(s, "WeakMap"),
    Ve = b(Fe),
    He = b(R),
    Xe = b(Ue),
    qe = b(Be),
    Ge = b(je),
    ze = p;
(Fe && "[object DataView]" != ze(new Fe(new ArrayBuffer(1))) || R && "[object Map]" != ze(new R) || Ue && "[object Promise]" != ze(Ue.resolve()) || Be && "[object Set]" != ze(new Be) || je && "[object WeakMap]" != ze(new je)) && (ze = function(e) {
    var t = p(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? b(n) : "";
    if (r) switch (r) {
        case Ve:
            return "[object DataView]";
        case He:
            return "[object Map]";
        case Xe:
            return "[object Promise]";
        case qe:
            return "[object Set]";
        case Ge:
            return "[object WeakMap]"
    }
    return t
});
var We = ze,
    Ye = Object.prototype.hasOwnProperty,
    $e = s.Uint8Array;

function Ke(e) {
    var t = new e.constructor(e.byteLength);
    return new $e(t).set(new $e(e)), t
}
var Qe = /\w*$/,
    Je = a ? a.prototype : void 0,
    Ze = Je ? Je.valueOf : void 0;

function et(e, t) {
    var n = t ? Ke(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var tt = Object.create,
    nt = function() {
        function e() {}
        return function(t) {
            if (!m(t)) return {};
            if (tt) return tt(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }();

function rt(e) {
    return "function" != typeof e.constructor || he(e) ? {} : nt(Ce(e))
}
var it = se && se.isMap,
    ot = it ? ne(it) : function(e) {
        return V(e) && "[object Map]" == We(e)
    },
    st = se && se.isSet,
    at = st ? ne(st) : function(e) {
        return V(e) && "[object Set]" == We(e)
    },
    ct = {};

function ut(e, t, n, r, i, o) {
    var s, a = 1 & t,
        c = 2 & t,
        u = 4 & t;
    if (n && (s = i ? n(e, r, i, o) : n(e)), void 0 !== s) return s;
    if (!m(e)) return e;
    var l = W(e);
    if (l) {
        if (s = function(e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && Ye.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }(e), !a) return Ie(e, s)
    } else {
        var d = We(e),
            h = "[object Function]" == d || "[object GeneratorFunction]" == d;
        if (Q(e)) return Ae(e, a);
        if ("[object Object]" == d || "[object Arguments]" == d || h && !i) {
            if (s = c || h ? {} : rt(e), !a) return c ? function(e, t) {
                return j(e, xe(e), t)
            }(e, function(e, t) {
                return e && j(t, be(t), e)
            }(s, e)) : function(e, t) {
                return j(e, De(e), t)
            }(e, function(e, t) {
                return e && j(t, ge(t), e)
            }(s, e))
        } else {
            if (!ct[d]) return i ? e : {};
            s = function(e, t, n) {
                var r = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return Ke(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new r(+e);
                    case "[object DataView]":
                        return function(e, t) {
                            var n = t ? Ke(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return et(e, n);
                    case "[object Map]":
                        return new r;
                    case "[object Number]":
                    case "[object String]":
                        return new r(e);
                    case "[object RegExp]":
                        return function(e) {
                            var t = new e.constructor(e.source, Qe.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }(e);
                    case "[object Set]":
                        return new r;
                    case "[object Symbol]":
                        return function(e) {
                            return Ze ? Object(Ze.call(e)) : {}
                        }(e)
                }
            }(e, d, a)
        }
    }
    o || (o = new M);
    var f = o.get(e);
    if (f) return f;
    o.set(e, s), at(e) ? e.forEach((function(r) {
        s.add(ut(r, t, n, r, e, o))
    })) : ot(e) && e.forEach((function(r, i) {
        s.set(i, ut(r, t, n, i, e, o))
    }));
    var p = u ? c ? Ne : Me : c ? keysIn : ge,
        _ = l ? void 0 : p(e);
    return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
    }(_ || e, (function(r, i) {
        _ && (r = e[i = r]), B(s, i, ut(r, t, n, i, e, o))
    })), s
}

function lt(e) {
    return ut(e, 5)
}
ct["[object Arguments]"] = ct["[object Array]"] = ct["[object ArrayBuffer]"] = ct["[object DataView]"] = ct["[object Boolean]"] = ct["[object Date]"] = ct["[object Float32Array]"] = ct["[object Float64Array]"] = ct["[object Int8Array]"] = ct["[object Int16Array]"] = ct["[object Int32Array]"] = ct["[object Map]"] = ct["[object Number]"] = ct["[object Object]"] = ct["[object RegExp]"] = ct["[object Set]"] = ct["[object String]"] = ct["[object Symbol]"] = ct["[object Uint8Array]"] = ct["[object Uint8ClampedArray]"] = ct["[object Uint16Array]"] = ct["[object Uint32Array]"] = !0, ct["[object Error]"] = ct["[object Function]"] = ct["[object WeakMap]"] = !1;
var dt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function ht(e, t, n) {
    return e(n = {
        path: t,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == t && n.path)
        }
    }, n.exports), n.exports
}
var ft = ht((function(e, t) {
    e.exports = function(e) {
        var t = {};
        return (e = e || {}).prependOn = function(t, n) {
            return e.on(t, n, !0)
        }, e.eventNames = function() {
            return Object.keys(t)
        }, e.on = function(n, r, i) {
            for (var o = 0, s = (n = [].concat(n)).length; o < s; o++) {
                var a = n[o];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), i ? t[a].unshift(r) : t[a].push(r)
            }
            return e
        }, e.once = function(t, n, r) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n, e.on(t, i, r)
        }, e.off = function(n, r) {
            if (!n) return t = {}, e;
            for (var i = 0, o = (n = [].concat(n)).length; i < o; i++) {
                var s = n[i];
                if (!s) throw new Error("Tried to remove an undefined event.");
                if (s in t)
                    if (r) {
                        var a = t[s].indexOf(r);
                        if (-1 === a)
                            for (var c = 0, u = t[s].length; c < u; c++)
                                if (t[s][c].handler === r) {
                                    a = i;
                                    break
                                }
                        if (-1 === a) return e;
                        t[s].splice(a, 1)
                    } else delete t[s]
            }
            return e
        }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var r = t[n].slice(0), i = 0, o = r.length; i < o; i++)
                    if (r[i].apply(e, r.slice.call(arguments, 1)), e.__isHalted) {
                        delete e.__isHalted;
                        break
                    }
            return e
        }, e.halt = function() {
            return e.__isHalted = !0, e
        }, e
    }
}));

function pt(e) {
    return e.filter((e, t, n) => n.indexOf(e) === t)
}

function mt(e, t) {
    return e.reduce((e, n, r, i) => e.concat(t(n, r, i)), [])
}

function _t(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const r in n) {
            const i = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(t, r, Object.assign(i, e))
        }
    }), t)
}
const vt = _t({
        enumerable: !1,
        configurable: !0,
        writeable: !1
    }),
    gt = _t({
        enumerable: !1,
        configurable: !1,
        writeable: !1
    }),
    yt = _t({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    bt = e => new Promise((t, n) => setTimeout(t, e));

function Et(e) {
    e.substring(0, e.lastIndexOf("/") + 1)
}
const St = e => Math.pow(e, 2),
    Tt = e => Math.sqrt(e);

function wt(e, ...t) {
    return t.reduce((e, t) => (Object.keys(t || {}).forEach(n => {
        const r = e[n],
            i = t[n];
        r && void 0 === i || (Array.isArray(i) ? e[n] = (r || []).concat(i) : (e => e && "object" == typeof e)(i) ? e[n] = wt({}, r, i) : e[n] = i)
    }), e), e)
}

function At() {
    let e, t, n = new Promise((function(n, r) {
        e = n, t = r
    }));
    return n.resolve = e, n.reject = t, n
}

function It(e, t) {
    let n = e;
    for (let r = 0; r < t.length; r++)
        if (t.start(r) <= e && t.end(r) >= e) {
            n = t.end(r);
            break
        }
    return n - e
}

function kt(e, t) {
    if (!t || !t.length) return 0;
    if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return 0;
    let n = 0;
    for (let r = t.length - 1; r >= 0 && t.end(r) > e; --r) n += t.end(r) - Math.max(t.start(r), e);
    return n
}

function Rt() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Pt(e) {
    return Rt() - e
}

function Dt(e) {
    if ("object" != typeof e) return "";
    let t = [];
    for (let n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.length ? t.join("&") : ""
}

function Ot(e) {
    return "string" != typeof e ? {} : e.replace("?", "").split("&").reduce((e, t) => {
        if (t.length > 0) {
            const [n, r] = t.split("=");
            e[n] = decodeURIComponent(r)
        }
        return e
    }, {})
}

function Ct(e) {
    const t = document.createElement("a");
    return t.href = e, t
}

function xt(e, t) {
    const n = Dt(t);
    let r = -1 === e.indexOf("?") ? "?" : "&";
    return `${e}${n?`${r}${n}`:""}`
}

function Lt(e) {
    const t = e.split("://");
    if (2 !== t.length) return null;
    const n = t[1].split("/");
    if (n.length > 1) return n[0];
    const r = t[1].split("?");
    if (r.length > 1) return r[0];
    const i = t[1].split("#");
    return i.length > 1 ? i[0] : t[1]
}

function Mt(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}

function Nt(e) {
    return e
}
var Ft = Math.max;

function Ut(e, t, n) {
    return t = Ft(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments, i = -1, o = Ft(r.length - t, 0), s = Array(o); ++i < o;) s[i] = r[t + i];
            i = -1;
            for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
            return a[t] = n(s), Mt(e, this, a)
        }
}

function Bt(e) {
    return function() {
        return e
    }
}
var jt = N ? function(e, t) {
        return N(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Bt(t),
            writable: !0
        })
    } : Nt,
    Vt = Date.now,
    Ht = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = Vt(),
                i = 16 - (r - n);
            if (n = r, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(jt);

function Xt(e, t) {
    return Ht(Ut(e, t, Nt), e + "")
}

function qt(t, n, r) {
    (void 0 === r || e(t[n], r)) && (void 0 !== r || n in t) || F(t, n, r)
}
var Gt = function(e, t, n) {
        for (var r = -1, i = Object(e), o = n(e), s = o.length; s--;) {
            var a = o[++r];
            if (!1 === t(i[a], a, i)) break
        }
        return e
    },
    zt = Function.prototype,
    Wt = Object.prototype,
    Yt = zt.toString,
    $t = Wt.hasOwnProperty,
    Kt = Yt.call(Object);

function Qt(e) {
    if (!V(e) || "[object Object]" != p(e)) return !1;
    var t = Ce(e);
    if (null === t) return !0;
    var n = $t.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && Yt.call(n) == Kt
}

function Jt(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function Zt(e, t, n, r, i) {
    e !== t && Gt(t, (function(o, s) {
        if (i || (i = new M), m(o)) ! function(e, t, n, r, i, o, s) {
            var a = Jt(e, n),
                c = Jt(t, n),
                u = s.get(c);
            if (u) qt(e, n, u);
            else {
                var l = o ? o(a, c, n + "", e, t, s) : void 0,
                    d = void 0 === l;
                if (d) {
                    var h = W(c),
                        f = !h && Q(c),
                        p = !h && !f && ce(c);
                    l = c, h || f || p ? W(a) ? l = a : function(e) {
                        return V(e) && ve(e)
                    }(a) ? l = Ie(a) : f ? (d = !1, l = Ae(c, !0)) : p ? (d = !1, l = et(c, !0)) : l = [] : Qt(c) || z(c) ? (l = a, z(a) ? l = function(e) {
                        return j(e, be(e))
                    }(a) : m(a) && !_(a) || (l = rt(c))) : d = !1
                }
                d && (s.set(c, l), i(l, c, r, o, s), s.delete(c)), qt(e, n, l)
            }
        }(e, t, s, n, Zt, r, i);
        else {
            var a = r ? r(Jt(e, s), o, s + "", e, t, i) : void 0;
            void 0 === a && (a = o), qt(e, s, a)
        }
    }), be)
}

function en(e, t, n, r, i, o) {
    return m(e) && m(t) && (o.set(t, e), Zt(e, t, void 0, en, o), o.delete(t)), e
}

function tn(t) {
    return Xt((function(n, r) {
        var i = -1,
            o = r.length,
            s = o > 1 ? r[o - 1] : void 0,
            a = o > 2 ? r[2] : void 0;
        for (s = t.length > 3 && "function" == typeof s ? (o--, s) : void 0, a && function(t, n, r) {
                if (!m(r)) return !1;
                var i = typeof n;
                return !!("number" == i ? ve(r) && Z(n, r.length) : "string" == i && n in r) && e(r[n], t)
            }(r[0], r[1], a) && (s = o < 3 ? void 0 : s, o = 1), n = Object(n); ++i < o;) {
            var c = r[i];
            c && t(n, c, i, s)
        }
        return n
    }))
}
var nn = tn((function(e, t, n, r) {
        Zt(e, t, n, r)
    })),
    rn = Xt((function(e) {
        return e.push(void 0, en), Mt(nn, void 0, e)
    }));

function on(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function sn(e, t, n) {
    return t && on(e.prototype, t), n && on(e, n), e
}

function an(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function cn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function un(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? cn(Object(n), !0).forEach((function(t) {
            an(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : cn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function ln(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function dn(e) {
    return (dn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function hn(e, t) {
    return (hn = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function fn() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (rl) {
        return !1
    }
}

function pn(e, t, n) {
    return (pn = fn() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && hn(i, n.prototype), i
    }).apply(null, arguments)
}

function mn(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (mn = function(e) {
        if (null === e || ! function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return pn(e, arguments, dn(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), hn(n, e)
    })(e)
}

function _n(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function vn(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function gn(e) {
    return function(e) {
        if (Array.isArray(e)) return yn(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || function(e, t) {
        if (e) {
            if ("string" == typeof e) return yn(e, void 0);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? yn(e, void 0) : void 0
        }
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function yn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}
let bn = function() {
    function e(e) {
        this._available = !1, this._active = !1, this._video = e, ft(this)
    }
    sn(e, null, [{
        key: "displayName",
        get: function() {
            return "ExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return !1
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return []
        }
    }]);
    var t = e.prototype;
    return t.showPicker = function() {}, t.getFile = function() {
        const e = this.constructor.displayName.replace("ExternalDisplay", "");
        if (this._video.externalDisplayFiles[e]) return this._video.externalDisplayFiles[e];
        const t = this.constructor.supportedVideoTypes,
            n = this._video.files.filter(e => -1 !== t.indexOf(e.mime)).sort((e, n) => e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime));
        if (!n.length) throw new Error(`No files available for ${this.constructor.displayName} external display.`);
        return n[0]
    }, sn(e, [{
        key: "active",
        get: function() {
            return this._active
        }
    }, {
        key: "available",
        get: function() {
            return this._available
        }
    }, {
        key: "element",
        get: function() {
            return document.createElement("div")
        }
    }]), e
}();
const En = {
        ABORT: "abort",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        DURATION_CHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        ERROR: "error",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PROGRESS: "progress",
        RATE_CHANGE: "ratechange",
        RESIZE: "resize",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
        WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
        WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged"
    },
    Sn = {
        AVAILABLE: "externaldisplayavailable",
        UNAVAILABLE: "externaldisplayunavailable",
        ACTIVATED: "externaldisplayactivated",
        DEACTIVATED: "externaldisplaydeactivated"
    },
    Tn = {
        AIRPLAY_AVAILABLE: "available",
        AIRPLAY_UNAVAILABLE: "unavailable",
        AIRPLAY_ACTIVATED: "activated",
        AIRPLAY_DEACTIVATED: "deactivated"
    },
    wn = {
        SCANNER_CHANGE: "scannerchange",
        SCANNER_ERROR: "scannererror",
        FILE_ERROR: "fileerror",
        FILE_SRC_UPDATE: "filesrcupdate",
        DOWNLOAD_START: "downloadstart",
        DOWNLOAD_END: "downloadend",
        DOWNLOAD_ERROR: "downloaderror",
        DOWNLOAD_TIMEOUT: "downloadtimeout",
        DRM_AUTH_FAILURE: "drmauthfailure",
        DRM_AUTH_SUCCESS: "drmauthsuccess",
        DRM_FAILURE: "drmfailure",
        DRM_KEY_SWITCH: "drmkeyswitch",
        DRM_OUTPUT_RESTRICTED: "drmoutputrestricted",
        EME_UNSUPPORTED: "emeunsupported",
        CURRENT_FILE_CHANGE: "currentfilechange",
        MEDIA_URL_EXPIRED: "mediaurlexpired",
        MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest",
        STREAM_CHANGE: "streamchange",
        STREAM_CHANGE_START: "streamchangestart",
        STREAM_UPDATED: "streamupdated",
        STREAM_BUFFER_START: "streambufferstart",
        STREAM_BUFFER_END: "streambufferend",
        DROPPED_FRAMES: "droppedframes",
        BANDWIDTH: "bandwidth",
        STREAM_TARGET_CHANGE: "streamtargetchange",
        CUE_POINT: "cuepoint",
        BUFFER_OCCUPANCY: "bufferoccupancy",
        MANIFEST_TIMEOUT: "manifesttimeout",
        MANIFEST_LOADED: "manifestloaded",
        STREAMS_LOADED: "streamsloaded",
        TEXT_SRC_UPDATE: "texttracksrcupdate",
        TEXT_TRACKS_AVAILABLE: "texttracksavailable",
        AV_DURATION_MISMATCH: "avdurationmismatch",
        BUFFER_STARTED: "bufferstarted",
        BUFFER_ENDED: "bufferended",
        QUOTA_EXCEEDED_ERROR: "quotaexceedederror",
        CHAPTER_CUES_UPDATED: "chaptercuesupdated",
        APPEND_BUFFER_END: "appendbufferend",
        DROPPED_FRAME_PERCENT_EXCEEDED: "droppedframepercentexceeded"
    },
    An = {
        STREAM_ONLINE: "livestreamonline",
        STREAM_OFFLINE: "livestreamoffline",
        BUFFER_GAP_JUMP: "livebuffergapjump",
        BUFFER_GAP_JUMP_PREVENT: "livebuffergapjumpprevent",
        STALL_JUMP: "livestalljump"
    },
    In = {
        CAMERA_UPDATE: "cameraupdate",
        CAMERA_CHANGE: "camerachange",
        MOTION_START: "motionstart",
        MOTION_END: "motionend",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        WEBVR_ENTER: "entervr",
        WEBVR_EXIT: "exitvr",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable"
    },
    kn = {
        MEDIASESSION_PLAY: "mediasessionplay",
        MEDIASESSION_PAUSE: "mediasessionpause",
        MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward",
        MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward"
    },
    Rn = {
        BRAIN_ML_MODEL_ERR: "brainmlmodelerr",
        BRAIN_ML_MODEL_NET_ERR: "brainmlmodelresperr",
        BRAIN_ML_MODEL_TIMEOUT: "brainmlmodeltimeout",
        BRAIN_ML_SWITCH_TO_SKYFIRE: "brainmlmodelswitchtoskyfire",
        BRAIN_ML_MODEL_INPUTS: "brainmlmodelinputs"
    },
    Pn = Object.assign({}, En, Sn, Tn, wn, In, An, kn, Rn);
let Dn = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this, t) || this)._videoElement = document.createElement("video"), n._videoElement.setAttribute("data-airplay", ""), n._videoElement.setAttribute("x-webkit-airplay", "allow"), n.addVideoEventListeners(), n
    }
    ln(t, e), sn(t, null, [{
        key: "displayName",
        get: function() {
            return "AirPlayExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return "WebKitPlaybackTargetAvailabilityEvent" in window
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/vnd.apple.mpegurl", "video/mp4"]
        }
    }]);
    var n = t.prototype;
    return n.addVideoEventListeners = function(e = this._videoElement) {
        e.addEventListener(En.LOADED_METADATA, e => {
            this.fire(En.LOADED_METADATA, e)
        }), e.addEventListener("webkitplaybacktargetavailabilitychanged", e => {
            switch (e.availability) {
                case "available":
                    this._available || (this._available = !0, this.fire(Tn.AIRPLAY_AVAILABLE));
                    break;
                case "not-available":
                    this._available && (this._available = !1, this.fire(Tn.AIRPLAY_UNAVAILABLE))
            }
        }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", e => {
            if (e.target.webkitCurrentPlaybackTargetIsWireless) return this._active = !0, void this.fire(Tn.AIRPLAY_ACTIVATED);
            this._active = !1, this.fire(Tn.AIRPLAY_DEACTIVATED)
        })
    }, n.showPicker = function() {
        this._videoElement.webkitShowPlaybackTargetPicker(), this.loadMetadata().then(() => this._videoElement.webkitShowPlaybackTargetPicker()).catch(() => {})
    }, n.loadMetadata = function() {
        return this._videoElement.readyState >= 1 ? Promise.resolve() : new Promise((e, t) => {
            this._videoElement.addEventListener(En.LOADED_METADATA, () => {
                e()
            }), this._videoElement.src = this.getFile().src
        })
    }, sn(t, [{
        key: "element",
        get: function() {
            return this._videoElement
        },
        set: function(e) {
            if (!(e instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
            e !== this._videoElement && (this.addVideoEventListeners(e), this._videoElement = e, this._videoElement.setAttribute("x-webkit-airplay", "allow"))
        }
    }]), t
}(bn);
var On = navigator.userAgent.toLowerCase();

function Cn(e) {
    e = e.toLowerCase();
    var t = new RegExp(e).test(On);
    return "safari" === e ? t && new RegExp("version").test(On) : t
}

function xn(e) {
    var t = document.createElement("div"),
        n = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
    for (var i in r) {
        var o = r[i];
        if (void 0 !== t.style[o]) return o
    }
    return e
}
var Ln = !!Cn("android") && (parseFloat(On.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
    Mn = window.devicePixelRatio || 1,
    Nn = !(!Cn("windows phone") && !Cn("iemobile")) && (parseFloat(On.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
    Fn = !!Cn("msie") && parseFloat(On.replace(/^.*msie (\d+).*$/, "$1")),
    Un = !!Cn("trident") && parseFloat(On.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
    Bn = !!(Cn("ipad;") || Cn("iphone;") || Cn("ipod touch;")) && parseFloat(On.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")),
    jn = "MacIntel" === navigator.platform && void 0 !== navigator.standalone,
    Vn = Cn("opera") || Cn("opr"),
    Hn = /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(On);

function Xn() {
    if (!Cn("safari")) return [];
    var e = On.split(" ").find((function(e) {
        return /version\//.test(e)
    }));
    return e ? e.replace("version/", "").split(".").map((function(e) {
        return parseInt(e, 10)
    })) : []
}
var qn = Cn("safari") && Cn("apple") && !Cn("chrome") && !Cn("android") && Xn()[0] >= 11,
    Gn = {
        airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window,
        android: Ln,
        appleMail: Hn,
        hasAutoplayPolicy: Ln || Bn || qn || function() {
            if (!Cn("chrome")) return [];
            var e = On.split(" ").find((function(e) {
                return Bn ? /CriOS\//.test(e) : /chrome\//.test(e)
            }));
            return e ? e.replace("chrome/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }()[0] >= 66,
        iOS: Bn,
        iPadOS: jn,
        mobileAndroid: Ln && Cn("mobile"),
        browser: {
            bb10: Cn("bb10"),
            chrome: Cn("chrome"),
            firefox: Cn("firefox"),
            ie: Fn || Un,
            edge: Cn("edge"),
            opera: Vn,
            safari: Cn("safari") && Cn("apple") && !Cn("chrome") && !Cn("android")
        },
        devicePixelRatio: Mn,
        iPhone: Cn("iphone;") || Cn("ipod touch;") || Cn("ipod;"),
        iPad: Cn("ipad;"),
        iPadNonRetina: Cn("ipad;") && Mn < 2,
        mac: Cn("mac os"),
        pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1,
        passiveEvents: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (rl) {}
            return e
        }(),
        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || Cn("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1,
        transformProperty: xn("transform"),
        transitionProperty: xn("transition"),
        webp: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        }(),
        windowsPhone: Nn
    },
    zn = /mac os x 10_13/.test(On),
    Wn = Gn.iOS && Gn.iOS >= 11,
    Yn = Gn.iPhone && 812 === window.screen.availHeight && 375 === window.screen.availWidth,
    $n = Gn.iPhone && 896 === window.screen.availHeight && 414 === window.screen.availWidth,
    Kn = Gn.iPad && 1112 === window.screen.availWidth && 834 === window.screen.availHeight,
    Qn = Gn.iPad && 834 === window.screen.availWidth && 1194 === window.screen.availHeight,
    Jn = Gn.iPad && 1024 === window.screen.availWidth && 1366 === window.screen.availHeight,
    Zn = Yn || $n || Kn || Qn || Jn;

function er() {
    return !!(qn && zn || qn && Wn) || "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="hvc1"')
}

function tr() {
    return !(Gn.iOS || Gn.iPad || Gn.browser.ie) && (!Cn("safari") || Xn()[0] > 11 || 11 === Xn()[0] && (Xn()[2] > 1 || Xn()[1] > 0))
}
Gn.hevc = er(), Gn.hdr = qn && Wn && Zn, Gn.dolbyVision = function() {
    var e = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="dvh1"');
    if (!e) {
        var t = document.createElement("video");
        "canPlayType" in t && (e = "probably" === t.canPlayType('video/mp4; codecs="dvh1"'))
    }
    if (jn || Gn.iOS) {
        var n = Xn(),
            r = n[0],
            i = n[1];
        if (r < 14 || 14 === r && i < 1) return !1
    }
    return e
}(), Gn.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || MediaSource.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), Gn.av1 = "undefined" != typeof MediaSource && MediaSource.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), Gn.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), Gn.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), Gn.spatialPlayback = tr(), Gn.spatialHEVC = !Gn.browser.safari && tr() && er(), Gn.stereoscopic = Gn.spatialPlayback && Gn.mobileAndroid;
const nr = (() => {
        const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
        return !!e && {
            major: parseInt(e[1], 10),
            minor: parseInt(e[2], 10)
        }
    })(),
    rr = function(e) {
        for (let t = 0, n = this.length; t < n; t++)
            if (this[t].id === `${e}`) return this[t];
        return null
    };

function ir(e = []) {
    return e.item = function(e) {
        return this[e]
    }, e.getTrackById = rr, e
}

function or() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function sr(e) {
    return or() - e
}

function ar() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ (16 * Math.random() >> e) / 4).toString(16))
}

function cr(e) {
    const t = window.atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
    return r
}

function ur(e, t, n, r) {
    let i = 0,
        o = 0,
        s = 0,
        a = 0;
    const c = e,
        u = t,
        l = n / r;
    return c / u >= l ? (o = u, i = (l * u).toFixed(2)) : (i = c, o = (c / l).toFixed(2)), s = Math.max((c - i) / 2, 0), a = Math.max((u - o) / 2, 0), {
        width: i,
        height: o,
        left: s,
        top: a
    }
}

function lr(e) {
    const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
    return void 0 !== t ? !!t : e.webkitDisplayingFullscreen
}

function dr(e, t) {
    let n = e;
    return t && (n += `;codecs="${t}"`), n
}

function hr(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function fr(e, t) {
    return e && e.tests && e.tests[t] ? e.tests[t] : null
}

function pr(e) {
    return e && "ML" === e.displayName
}
let mr = function(e, t) {
    this.name = e, this.message = t, Object.freeze(this)
};
const _r = new WeakMap;
let vr = function() {
    function e(e, t = {}) {
        const n = parseFloat(e);
        if (isNaN(n)) throw new TypeError("Time must be a number.");
        if (n < 0) throw new TypeError("Time must be a positive number.");
        this.time = e, this.data = t, this.id = ar();
        try {
            const n = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
            this.vttCue = new n(e, e + .25, JSON.stringify(t)), this.vttCue.id = this.id
        } catch (rl) {
            throw new mr("CuePointsNotSupported", "Cue points are not supported in this browser.")
        }
        _r.set(this.vttCue, this), Object.freeze(this)
    }
    return e.fromVTTCue = function(t) {
        if (_r.has(t)) return _r.get(t);
        let n = {};
        try {
            n = JSON.parse(t.text)
        } catch (rl) {}
        return new e(t.startTime, n)
    }, e
}();

function gr(e, t, n) {
    let r;
    try {
        document.removeChild({})
    } catch (rl) {
        r = Object.create(Object.getPrototypeOf(rl), {
            name: {
                value: t,
                configurable: !0,
                writable: !0
            },
            code: {
                value: e,
                configurable: !0,
                writable: !0
            },
            message: {
                value: n,
                configurable: !0,
                writable: !0
            },
            toString: {
                value: () => `${t}: DOM Exception ${e}`,
                configurable: !0,
                writable: !0
            }
        })
    }
    return Object.freeze(r)
}
const yr = (e, t) => {
    if (!e || void 0 === e[t]) throw gr(1, "INDEX_SIZE_ERR");
    return e[t]
};

function br(e = [], t = []) {
    return Object.freeze({
        get length() {
            return e.length
        },
        start: t => yr(e, t),
        end: e => yr(t, e),
        [Symbol.iterator]: () => function(e, t) {
            let n = 0;
            return {
                [Symbol.iterator]() {
                    return this
                },
                next: () => n < e.length ? {
                    done: !1,
                    value: t ? [e[n], t[n++]] : e[n++]
                } : {
                    done: !0
                }
            }
        }(e, t)
    })
}
br.from = function(e) {
    if (!(e instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
    const t = [],
        n = [];
    for (let r = 0, i = e.length; r < i; r++) t.push(e.start(r)), n.push(e.end(r));
    return br(t, n)
};
const Er = "DRMFailure",
    Sr = "MediaUrlBadRequest",
    Tr = "PlayInterrupted",
    wr = "TextTracksNotSupported";

function Ar() {}
const Ir = document.createElement("video"),
    kr = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "video/mp4": 'video/mp4; codecs="avc1.64001E"',
        "video/webm": 'video/webm; codecs="vp8, vorbis"',
        "video/x-flv": 'video/x-flv; codecs="vp6"'
    },
    Rr = function() {
        const e = "undefined" == typeof TextTrack ? {} : TextTrack;
        return {
            disabled: "DISABLED" in e ? e.DISABLED : "disabled",
            hidden: "HIDDEN" in e ? e.HIDDEN : "hidden",
            showing: "SHOWING" in e ? e.SHOWING : "showing"
        }
    }(),
    Pr = function() {
        const e = document.createElement("track");
        return "track" in e && "oncuechange" in e.track
    }(),
    Dr = new WeakMap;
let Or = function() {
    function e(e, t = {}) {
        this._element = e, this._options = t, this._telecineVideo = null, this._currentFile = null, this._externalDisplays = [], ft(this), this.on(En.LOADED_METADATA, () => this._initMediaSessionHandlers()), this.on(En.PLAY, () => this._initMediaSessionMetadata());
        let n = e.querySelector("video");
        n || (n = document.createElement("video"), n.preload = "none", this._element.appendChild(n)), n.setAttribute("tabindex", "-1"), this._video = n, t.playRequest && (this._playRequest = t.playRequest, this._playRequest.video = n), t.htmlScanner && t.htmlScanner.controls && (this._video.controls = !0), this._boundHandleVideoEvent = this.handleVideoEvent.bind(this), this.addVideoEventListeners(), this._preload = "none", this._externalDisplayActivated = !1, this._inFullscreen = !1, this._lastCurrentTime = -1
    }
    sn(e, null, [{
        key: "displayName",
        get: function() {
            return "HTMLScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return e.supportedVideoTypes.length > 0
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            const e = [];
            if ("function" != typeof Ir.canPlayType) return e;
            for (const t in kr) {
                const n = kr[t];
                Gn.android && "application/vnd.apple.mpegurl" === t || (Gn.android && !Gn.mobileAndroid && "video/mp4" === t && Gn.android instanceof String ? parseInt(Gn.android.split(".")[0], 10) > 3 && e.push(t) : Ir.canPlayType(n).replace(/^no$/, "") && e.push(t))
            }
            return e
        }
    }, {
        key: "supportedAudioTypes",
        get: function() {
            return []
        }
    }, {
        key: "supportedExternalDisplays",
        get: function() {
            return [Dn]
        }
    }, {
        key: "supportsSettingVolume",
        get: function() {
            if (Gn.android || Gn.iOS || Gn.iPadOS) return !1;
            const e = Ir.volume;
            return Ir.volume = .5 * e, Ir.volume !== e
        }
    }, {
        key: "supportsTextTracks",
        get: function() {
            return void 0 !== Ir.textTracks && Ir.textTracks instanceof TextTrackList
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            if (Gn.android && nr && nr.major < 52) return !1;
            const e = Ir.playbackRate;
            Ir.playbackRate = .5 * e;
            const t = e !== Ir.playbackRate;
            return Ir.playbackRate = e, t
        }
    }]);
    var t = e.prototype;
    return t.deactivate = function() {
        this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeVideoEventListeners(), this.removeSnapshot(), this._video.style.display = "none"
    }, t.reactivate = function() {
        this.addVideoEventListeners(), this._video.style.display = ""
    }, t.addVideoEventListeners = function(e = this._video) {
        Object.keys(En).forEach(t => {
            const n = En[t];
            e.addEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.removeVideoEventListeners = function(e = this._video) {
        Object.keys(En).forEach(t => {
            const n = En[t];
            e.removeEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.play = function(e) {
        return this._playRequest.start(e).catch(e => {
            throw this._onPlayError(e), e
        })
    }, t._onPlayError = function(e) {
        this.fire(En.ERROR, new mr(null == e ? void 0 : e.name, null == e ? void 0 : e.message))
    }, t.pause = function() {
        this._playRequest.cancel(), this._video.pause()
    }, t.onpause = function() {}, t.ontimeupdate = function() {
        this._lastCurrentTime = this.currentTime
    }, t.addTextTrack = function(e) {
        let t, n;
        e.src ? (t = document.createElement("track"), t.kind = e.kind, t.src = e.src, t.id = `telecine-track-${e.id}`, t.srclang = e.language, t.label = e.label, this._video.appendChild(t), n = t.track) : (n = this._video.addTextTrack(e.kind, e.label, e.language), this._textTracks = this._textTracks || {}, this._textTracks[`telecine-track-${e.id}`] = n), n.addEventListener("cuechange", () => e.dispatchEvent("cuechange")), this._video.addEventListener("timeupdate", () => {
            lr(this._video) && (e.mode = n.mode)
        });
        const r = () => {
                const t = Gn.iOS && lr(this._video);
                !e._modeHasBeenSet || t ? e.mode = n.mode : n.mode = Rr[e.mode]
            },
            i = [];
        if (t ? t.addEventListener("load", r) : r(), ["loadeddata", "seeking"].forEach(e => {
                this._video.addEventListener(e, r), i.push([e, r])
            }), e._modeHasBeenSet && (n.mode = Rr[e.mode]), !Pr) {
            let t = [];
            const r = () => {
                if (n && "disabled" !== Rr[n.mode]) {
                    if (t.length !== n.activeCues.length) return e.dispatchEvent("cuechange"), void(t = Array.from(n.activeCues));
                    for (let r = 0, i = n.activeCues.length; r < i; r++)
                        if (n.activeCues[r].startTime !== t[r].startTime) return e.dispatchEvent("cuechange"), void(t = Array.from(n.activeCues))
                }
            };
            this._video.addEventListener("timeupdate", r), i.push(["timeupdate", r])
        }
        return Dr.set(e, i), n
    }, t.removeTextTrack = function(e) {
        const t = this._video.querySelector(`#telecine-track-${e.id}`);
        t && this._video.removeChild(t);
        const n = Dr.get(e);
        Array.isArray(n) && n.forEach(([e, t]) => {
            this._video.removeEventListener(e, t)
        })
    }, t.getCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.cues) : []
    }, t.getActiveCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.activeCues) : []
    }, t.setModeForTrack = function(e, t) {
        const n = this.getTrackById(`telecine-track-${e.id}`);
        return n && n.mode !== Rr[t] && (n.mode = Rr[t], Pr || "disabled" === t || e.dispatchEvent("cuechange")), this
    }, t.setSrcForTrack = function(e, t) {
        const n = this._video.querySelector(`#telecine-track-${e.id}`);
        return n && null === n.track.cues && (n.src = t), this
    }, t._createChapterCue = function(e, t, n = null) {
        let r;
        this._chaptersTrack || (this._chaptersTrack = this._video.addTextTrack("chapters"), this._chaptersTrack.mode = "hidden");
        const i = e.timecode,
            o = n ? n.timecode : t,
            s = window.VTTCue || window.TextTrackCue;
        try {
            r = new s(i, o, e.title)
        } catch (rl) {
            throw new mr("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        r.size = (o - i) / t, r.id = i, this._chaptersTrack.addCue(r)
    }, t.addChapter = function(e, t) {
        const n = this.video.chapters,
            r = {
                timecode: e,
                title: t
            };
        n.push(r), n.sort((e, t) => e.timecode - t.timecode);
        const i = n[n.indexOf(r) + 1];
        this._createChapterCue(r, this.video.duration, i), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t.removeChapter = function(e) {
        try {
            this._chaptersTrack.removeCue(e)
        } catch (rl) {
            throw new mr("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        const t = this.video.chapters.find(t => t.timecode === e.timecode);
        this.video.chapters.splice(t, 1), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t._updateChapterCues = function(e, t) {
        for (let n = 0; n < e.cues.length; n++) {
            let r = e.cues[n],
                i = e.cues[n + 1];
            const o = i ? i.startTime : t;
            r.endTime = o, r.size = (o - r.startTime) / t
        }
        this.fire(wn.CHAPTER_CUES_UPDATED)
    }, t.addChapters = function(e, t) {
        0 !== e.length && t && (e = e.filter(e => this._isValidChapter(e, t))).sort((e, t) => e.timecode - t.timecode).forEach((n, r) => this._createChapterCue(n, t, e[r + 1]))
    }, t.addCuePoint = function(e, t = {}) {
        if (this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"), this._cuePointTrack.mode = "hidden", this._cuePointTrack.addEventListener("cuechange", e => {
                Array.from(e.target.activeCues).forEach(e => {
                    this.fire(wn.CUE_POINT, vr.fromVTTCue(e))
                })
            }), this._video.addEventListener("canplay", e => {
                this._cuePointTrack.mode = "hidden"
            })), e = parseFloat(e), isNaN(e)) throw new TypeError("Time must be a number.");
        if (e < 0 || e >= this.duration) throw new TypeError("Time must be a positive number less than the duration of the video.");
        const n = new vr(e, t);
        return this._cuePointTrack.addCue(n.vttCue), n
    }, t.removeCuePoint = function(e) {
        if (!e) throw new mr("InvalidCuePoint", "The specified cue point is not valid.");
        return this._cuePointTrack.removeCue(e.vttCue), !0
    }, t.removeAllCuePoints = function() {
        return this._cuePointTrack && this._cuePointTrack.length && Array.from(this._cuePointTrack.cues).forEach(e => {
            this._cuePointTrack.removeCue(e)
        }), !0
    }, t.requestPictureInPicture = function() {
        try {
            const e = this;
            return function(t, n) {
                var r = function() {
                    if (e._video.readyState < 1) return function(e, t) {
                        return e && e.then ? e.then(Ar) : Promise.resolve()
                    }(e._initPreload())
                }();
                return r && r.then ? r.then(n) : n()
            }(0, (function() {
                switch (e.pictureInPictureSupportType) {
                    case "pip-api":
                        return e._video.requestPictureInPicture();
                    case "webkit-presentation-mode":
                        return e._video.webkitSetPresentationMode("picture-in-picture");
                    default:
                        throw new Error("Picture-in-picture is not supported by this browser")
                }
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._initPreload = function() {
        return this.preload = "auto", new Promise(e => {
            this.once(En.LOADED_METADATA, e)
        })
    }, t.exitPictureInPicture = function() {
        try {
            const e = this;
            switch (e.pictureInPictureSupportType) {
                case "pip-api":
                    return document.exitPictureInPicture();
                case "webkit-presentation-mode":
                    return e._video.webkitSetPresentationMode("inline");
                default:
                    throw new Error("Picture-in-picture is not supported by this browser")
            }
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t.onerror = function() {
        if (!this._video.error) return !1;
        switch (this._video.error.code) {
            case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return this._fireVideoError("MediaSrcNotSupportedError", "The media was not suitable."), this._switchToNextFile(), !1;
            case this._video.error.MEDIA_ERR_DECODE:
                return -1 !== this._lastCurrentTime && Gn.iOS ? (this._video.load(), this.currentTime = this._lastCurrentTime, this._lastCurrentTime = -1, !1) : (this._fireVideoError("MediaDecodeError", "The media could not be decoded."), this._switchToNextFile(), !1);
            case this._video.error.MEDIA_ERR_NETWORK:
                return this._fireVideoError("MediaNetworkError", "A network error ocurred while fetching the media."), !1;
            case this._video.error.MEDIA_ERR_ABORTED:
                return this._fireVideoError("MediaAbortedError", "The user agent aborted the fetching of the media."), !1;
            default:
                return this._fireVideoError("MediaUnknownError", "An unknown error occurred."), !1
        }
    }, t._fireVideoError = function(e, t) {
        this.fire(En.ERROR, new mr(e, t))
    }, t.onended = function() {
        if (this._video.paused || this._video.pause(), this.currentTime < this._video.duration) return !1
    }, t.onwaiting = function() {
        return !1
    }, t.onwebkitbeginfullscreen = function() {
        this._inFullscreen = !0
    }, t.onwebkitendfullscreen = function() {
        this._inFullscreen = !1
    }, t.onwebkitpresentationmodechanged = function() {
        this.fire(this.pictureInPictureActive ? En.ENTER_PICTURE_IN_PICTURE : En.LEAVE_PICTURE_IN_PICTURE)
    }, t.shouldHandleVideoEvent = function(e) {
        return !0
    }, t.handleVideoEvent = function(e) {
        e.target === this._video && !1 !== this.shouldHandleVideoEvent(e) && ("function" == typeof this[`on${e.type}`] && !1 === this[`on${e.type}`](e) || this.fire(e.type))
    }, t.swapVideo = function(e, t) {
        const n = e.paused;
        this.removeVideoEventListeners(e), e.parentElement.replaceChild(t, e), e.pause(), t.currentTime = e.currentTime, n || t.play(), this.addVideoEventListeners(t), this._video = t
    }, t.onexternaldisplayactivated = function(e) {
        this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video, this.swapVideo(this._video, e.element)), this._externalDisplayActivated = !0)
    }, t.onexternaldisplaydeactivated = function(e) {
        this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo), this._originalVideo = null), this._externalDisplayActivated = !1)
    }, t.setVideoSrc = function(e) {
        this._video.src = e
    }, t.canSeekTo = function(e) {
        const t = this.duration;
        if (t && e > t && (e = t), this._video.seekable.length > 0)
            for (let n = 0, r = this._video.seekable.length; n < r; n++)
                if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e) return !0;
        return !1
    }, t.seekToTime = function(e) {
        return this.canSeekTo(e) ? (this._video.currentTime = e, Promise.resolve(this._video.currentTime)) : new Promise((t, n) => {
            const r = () => {
                this.canSeekTo(e) && (Object.keys(En).forEach(e => {
                    const t = En[e];
                    this._video.removeEventListener(t, r)
                }), this._video.currentTime = e, t(this._video.currentTime))
            };
            Object.keys(En).forEach(e => {
                const t = En[e];
                this._video.addEventListener(t, r)
            })
        })
    }, t.takeSnapshot = function() {
        let e = this._element.querySelector("[telecine-snapshot]");
        e || (e = document.createElement("canvas"), e.setAttribute("telecine-snapshot", ""), this._element.appendChild(e)), e.setAttribute("width", `${this._element.clientWidth}px`), e.setAttribute("height", `${this._element.clientHeight}px`), e.style.display = "";
        const {
            width: t,
            height: n,
            left: r,
            top: i
        } = ur(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight);
        e.style.cssText = `position:absolute;width:${t}px;height:${n}px;left:${r}px;top:${i}px`;
        const o = e.getContext("2d");
        e.width > 0 && e.height > 0 && o.drawImage(this._video, 0, 0, e.width, e.height)
    }, t.removeSnapshot = function() {
        const e = this._element.querySelector("[telecine-snapshot]");
        e && (e.style.display = "none")
    }, t.getTrackById = function(e) {
        if (this._textTracks && this._textTracks[e]) return this._textTracks[e];
        if ("function" == typeof this._video.textTracks.getTrackById) return this._video.textTracks.getTrackById(e);
        const t = document.getElementById(e);
        return t ? t.track : null
    }, t.initDrm = function() {
        const e = this._telecineVideo.drmHandler;
        e && e.init(this)
    }, t.showExternalDisplayPicker = function(e) {
        if (!this._externalDisplays.length) throw new mr("ExternalDisplayUnvailable", "No external displays are available.");
        if (!e) return void this._externalDisplays[0].showPicker();
        const t = this._externalDisplays.filter(t => t.constructor.displayName.replace("ExternalDisplay", "") === e)[0];
        if (!t) throw new mr("InvalidExternalDisplay", "The specified external display is not available.");
        t.showPicker()
    }, t._pickFile = function() {
        return this._files.length < 1 ? null : this._files.slice(0).sort((e, t) => e.priority - t.priority)[0]
    }, t._updateCurrentFile = function() {
        const e = this._pickFile();
        e ? this.currentFile = e : this.fire(wn.SCANNER_ERROR, {
            reason: "all files failed"
        })
    }, t._isValidChapter = function(e, t) {
        return void 0 !== e.timecode && e.timecode >= 0 && e.timecode <= t && void 0 !== e.title
    }, t._switchToNextFile = function() {
        const e = this._files.indexOf(this._currentFile);
        this._files.splice(e, 1), this._updateCurrentFile()
    }, t._initMediaSessionMetadata = function() {
        if (!("mediaSession" in navigator)) return;
        const e = {
            title: this._telecineVideo.title,
            artist: this._telecineVideo.subtitle,
            artwork: []
        };
        this._telecineVideo.metadata.thumbnail && e.artwork.push({
            src: this._telecineVideo.metadata.thumbnail
        }), navigator.mediaSession.metadata = new MediaMetadata(e)
    }, t._initMediaSessionHandlers = function() {
        var e;
        "function" == typeof(null == (e = navigator.mediaSession) ? void 0 : e.setActionHandler) && (navigator.mediaSession.setActionHandler("play", () => {
            this.play().then(() => this.fire(kn.MEDIASESSION_PLAY)).catch(this._onPlayError.bind(this))
        }), navigator.mediaSession.setActionHandler("pause", () => {
            this.pause(), this.fire(kn.MEDIASESSION_PAUSE)
        }), navigator.mediaSession.setActionHandler("seekforward", () => {
            this.currentTime = Math.min(this.duration, this.currentTime + 10), this.fire(kn.MEDIASESSION_SEEK_FORWARD)
        }), navigator.mediaSession.setActionHandler("seekbackward", () => {
            this.currentTime = Math.max(0, this.currentTime - 10), this.fire(kn.MEDIASESSION_SEEK_BACKWARD)
        }))
    }, sn(e, [{
        key: "chaptersTrack",
        get: function() {
            return this._chaptersTrack
        }
    }, {
        key: "manifest",
        get: function() {
            return this._manifest
        }
    }, {
        key: "buffered",
        get: function() {
            return br.from(this._video.buffered)
        }
    }, {
        key: "cuePoints",
        get: function() {
            return this._cuePointTrack ? Array.from(this._cuePointTrack.cues).map(e => vr.fromVTTCue(e)) : []
        }
    }, {
        key: "currentFile",
        get: function() {
            return this._currentFile
        },
        set: function(t) {
            const n = !this._video.paused,
                r = this.currentTime,
                i = !this._currentFile || t.video.id !== this._currentFile.video.id;
            if (i || this.takeSnapshot(), this._currentFile = t, i && (this._video.preload = this._preload), this.constructor === e && this._video.readyState > 0 && (this._video.currentTime = 0), (Gn.iOS || Gn.android) && this._currentFile.video.title) {
                let e = this._currentFile.video.title;
                this._currentFile.video.subtitle && (e = `${e} ${this._currentFile.video.subtitle}`), this._video.setAttribute("title", e)
            } else this._video.removeAttribute("title");
            this.setVideoSrc(this._currentFile.src, i), this.fire(wn.CURRENT_FILE_CHANGE, t), Gn.iOS && !i && this.play().catch(this._onPlayError.bind(this)), this.constructor !== e || i ? n && this.play().catch(this._onPlayError.bind(this)) : (this.seekToTime(r).then(e => (n && this.play().catch(this._onPlayError.bind(this)), e)).catch(() => {}), this.once("canplay", () => this.removeSnapshot()), this.once("playing", () => this.removeSnapshot()))
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this.seekToTime(e)
        }
    }, {
        key: "duration",
        get: function() {
            return this._video.duration
        }
    }, {
        key: "ended",
        get: function() {
            return this._video.ended
        }
    }, {
        key: "externalDisplayAvailable",
        get: function() {
            return this._externalDisplays.some(e => e.available)
        }
    }, {
        key: "externalDisplayActive",
        get: function() {
            return this._externalDisplays.some(e => e.active)
        }
    }, {
        key: "loop",
        get: function() {
            return this._video.loop
        },
        set: function(e) {
            this._video.loop = e
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return null
        }
    }, {
        key: "muted",
        get: function() {
            return this._video.muted
        },
        set: function(e) {
            this._video.muted = e
        }
    }, {
        key: "playsinline",
        get: function() {
            return this._video.playsinline
        },
        set: function(e) {
            this._video.playsinline = e, e ? this._video.setAttribute("playsinline", "") : this._video.removeAttribute("playsinline")
        }
    }, {
        key: "paused",
        get: function() {
            return this._video.paused
        }
    }, {
        key: "defaultPlaybackRate",
        get: function() {
            return this._video.defaultPlaybackRate
        },
        set: function(e) {
            this._video.defaultPlaybackRate = e
        }
    }, {
        key: "playbackRate",
        get: function() {
            return this._video.playbackRate
        },
        set: function(e) {
            this._video.playbackRate = e
        }
    }, {
        key: "played",
        get: function() {
            return this._video.played
        }
    }, {
        key: "seekable",
        get: function() {
            return this._video.seekable
        }
    }, {
        key: "seeking",
        get: function() {
            return this._video.seeking
        }
    }, {
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._video.preload = e, this._preload = e
        }
    }, {
        key: "autoPictureInPicture",
        get: function() {
            return this._video.autoPictureInPicture
        },
        set: function(e) {
            this._video.autoPictureInPicture = e
        }
    }, {
        key: "disablePictureInPicture",
        get: function() {
            return this._video.disablePictureInPicture
        },
        set: function(e) {
            this._video.disablePictureInPicture = e
        }
    }, {
        key: "pictureInPictureActive",
        get: function() {
            return "picture-in-picture" === this._video.webkitPresentationMode || !!document.pictureInPictureElement
        }
    }, {
        key: "pictureInPictureEnabled",
        get: function() {
            if (this.disablePictureInPicture) return !1;
            switch (this.pictureInPictureSupportType) {
                case "pip-api":
                    return document.pictureInPictureEnabled;
                case "webkit-presentation-mode":
                    return !0;
                default:
                    return !1
            }
        }
    }, {
        key: "pictureInPictureSupportType",
        get: function() {
            return "pictureInPictureEnabled" in document ? "pip-api" : !("function" != typeof this._video.webkitSetPresentationMode || !this._video.webkitSupportsPresentationMode("picture-in-picture")) && "webkit-presentation-mode"
        }
    }, {
        key: "video",
        get: function() {
            return this._telecineVideo
        },
        set: function(e) {
            if (this.reactivate(), this._telecineVideo !== e) {
                if (this._telecineVideo && (this._telecineVideo.off("filesrcupdate"), this._telecineVideo.off("texttracksrcupdate")), this.removeAllCuePoints(), this._telecineVideo = e, this._files = e.files.filter(e => -1 !== this.constructor.supportedVideoTypes.indexOf(e.mime)), this._telecineVideo.on("filesrcupdate", e => {
                        e === this._currentFile && this._updateCurrentFile()
                    }), this._telecineVideo.on("texttracksrcupdate", e => {
                        this.video.currentScanner && this.video.currentScanner.setSrcForTrack(e, e.src)
                    }), this._options.externalDisplays && this._options.externalDisplays.length) {
                    this._externalDisplays = [];
                    let t = this.constructor.supportedExternalDisplays;
                    Array.isArray(t) || (t = []);
                    const n = t.map(e => e.displayName);
                    this._options.externalDisplays.filter(e => e.supported && -1 !== n.indexOf(e.displayName)).forEach(t => {
                        const n = new t(e),
                            r = t.displayName.replace("ExternalDisplay", "");
                        n.on(En.LOADED_METADATA, e => this.fire(En.LOADED_METADATA, e)), n.on("available", () => this.fire(Sn.AVAILABLE, {
                            type: r
                        })), n.on("unavailable", () => this.fire(Sn.UNAVAILABLE, {
                            type: r
                        })), n.on("activated", () => {
                            "function" == typeof this.onexternaldisplayactivated && this.onexternaldisplayactivated(n), this.fire(Sn.ACTIVATED, {
                                type: r
                            })
                        }), n.on("deactivated", () => {
                            "function" == typeof this.onexternaldisplaydeactivated && this.onexternaldisplaydeactivated(n), this.fire(Sn.DEACTIVATED, {
                                type: r
                            })
                        }), this._externalDisplays.push(n)
                    })
                }
                this._updateCurrentFile(), Gn.iOS && this._externalDisplays.forEach(e => {
                    "AirPlay" === e.constructor.displayName && (e.element = this._video)
                }), this.initDrm()
            }
        }
    }, {
        key: "videoElement",
        get: function() {
            return this._video
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._video.videoHeight
        }
    }, {
        key: "volume",
        get: function() {
            return Tt(this._video.volume)
        },
        set: function(e) {
            this._video.volume = St(e)
        }
    }, {
        key: "readyState",
        get: function() {
            return this._video.readyState
        }
    }]), e
}();
const Cr = {
        MANIFEST: "manifest",
        SEGMENT: "segment"
    },
    xr = {
        method: "GET",
        async: !0,
        retry: 0,
        throwHttpErrors: !0,
        headers: {},
        hooks: {
            beforeRequest: [],
            beforeRetry: [],
            afterResponse: []
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        retryStatus: function(e) {
            return [408, 413, 429].includes(e) || e >= 500 && e < 600
        }
    };

function Lr(e, t) {
    this.headers = {}, this.perfTimings = {}, wt(this, t), this.ok = 2 == (this.status / 100 | 0), this.body = e, this.text = () => Promise.resolve(e), this.json = () => Promise.resolve(JSON.parse(e)), this.blob = () => Promise.resolve(new Blob([e])), this.arrayBuffer = () => Promise.resolve(e), this.clone = () => new Lr(e, this), this.isVimeoResponse = !0
}
let Mr = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "The operation was aborted.") || this).name = "AbortError", t
        }
        return ln(t, e), t
    }(mn(Error)),
    Nr = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t.statusText) || this).name = "HTTPError", n.response = t, n
        }
        return ln(t, e), t
    }(mn(Error)),
    Fr = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "A network error occurred.") || this).name = "NetworkError", t
        }
        return ln(t, e), t
    }(mn(Error)),
    Ur = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, "Request timed out.") || this).name = "TimeoutError", n.timeoutMs = t, n
        }
        return ln(t, e), t
    }(mn(Error));

function Br() {}

function jr(e, t, n) {
    if (!e.s) {
        if (n instanceof Vr) {
            if (!n.s) return void(n.o = jr.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(jr.bind(null, e, t), jr.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Vr = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    jr(r, 1, e(this.v))
                } catch (rl) {
                    jr(r, 2, rl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? jr(r, 1, t ? t(i) : i) : n ? jr(r, 1, n(i)) : jr(r, 2, i)
            } catch (rl) {
                jr(r, 2, rl)
            }
        }, r
    }, e
}();

function Hr(e) {
    return e instanceof Vr && 1 & e.s
}

function Xr(e) {
    const t = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (rl) {
                return Promise.reject(rl)
            }
        }
    }((function(r) {
        return function(e, t) {
            try {
                var n = e()
            } catch (rl) {
                return t(rl)
            }
            return n && n.then ? n.then(void 0, t) : n
        }(r, (function(i) {
            let o = !1;
            n++;
            const s = function(t) {
                if (!e.retryAbortErrors && t instanceof Mr) return 0;
                if (t instanceof Ur) return 0;
                if (n >= e.retry) return 0;
                if (t instanceof Nr) {
                    if (!e.retryStatus(t.response.status)) return 0;
                    const n = t.response.headers["retry-after"];
                    if (n && e.retryStatus(t.response.status)) {
                        let e = Number(n);
                        return isNaN(e) ? e = Date.parse(n) - Date.now() : e *= 1e3, e
                    }
                    if (413 === t.response.status) return 0
                }
                return .3 * 2 ** (n - 1) * 1e3
            }(i);
            return function(a, c) {
                var u = function() {
                    if (0 !== s && n > 0) return function(e, t, n) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(bt(s), (function() {
                        const s = e.hooks.beforeRetry || [];
                        return function(e, t) {
                            return e && e.then ? e.then(t) : t()
                        }(function(e, t, n) {
                            var r, i, o = -1;
                            return function n(s) {
                                try {
                                    for (; ++o < e.length;)
                                        if ((s = t(o)) && s.then) {
                                            if (!Hr(s)) return void s.then(n, i || (i = jr.bind(null, r = new Vr, 2)));
                                            s = s.v
                                        }
                                    r ? jr(r, 1, s) : r = s
                                } catch (rl) {
                                    jr(r || (r = new Vr), 2, rl)
                                }
                            }(), r
                        }(s, (function(t) {
                            return function(e, t) {
                                return e && e.then ? e.then(Br) : Promise.resolve()
                            }((0, s[t])(e, i, n))
                        })), (function() {
                            return o = !0, t(r)
                        }))
                    }))
                }();
                return u && u.then ? u.then(c) : c(u)
            }(0, (function(t) {
                if (o) return t;
                if (e.throwHttpErrors) throw i
            }))
        }))
    }));
    let n = 0;
    return t
}

function qr(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Gr(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }
}

function zr(e, t, n) {
    if (!e.s) {
        if (n instanceof Wr) {
            if (!n.s) return void(n.o = zr.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(zr.bind(null, e, t), zr.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Wr = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    zr(r, 1, e(this.v))
                } catch (rl) {
                    zr(r, 2, rl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? zr(r, 1, t ? t(i) : i) : n ? zr(r, 1, n(i)) : zr(r, 2, i)
            } catch (rl) {
                zr(r, 2, rl)
            }
        }, r
    }, e
}();

function Yr(e) {
    return e instanceof Wr && 1 & e.s
}

function $r(e, t, n) {
    var r, i, o = -1;
    return function s(a) {
        try {
            for (; ++o < e.length && (!n || !n());)
                if ((a = t(o)) && a.then) {
                    if (!Yr(a)) return void a.then(s, i || (i = zr.bind(null, r = new Wr, 2)));
                    a = a.v
                }
            r ? zr(r, 1, a) : r = a
        } catch (rl) {
            zr(r || (r = new Wr), 2, rl)
        }
    }(), r
}

function Kr(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const Qr = ["get", "post", "put", "patch", "head", "delete"],
    Jr = {
        json: "application/json",
        text: "text/plain",
        arrayBuffer: "*/*",
        blob: "*/*"
    },
    Zr = ["get"];

function ei(e, t) {
    const n = Gr((function() {
        let e = !1,
            n = !1;
        const r = t.hooks.beforeRequest || [];
        return Kr($r(r, (function(i) {
            return qr((0, r[i])(t), (function(r) {
                return r instanceof ti ? (t = r, void(n = !0)) : (null == r ? void 0 : r.isVimeoResponse) ? (e = !0, Promise.resolve(r).then(ni(t))) : void 0
            }))
        }), (function() {
            return n || e
        })), (function(n) {
            return e ? n : function(e, t) {
                let {
                    url: n,
                    method: r,
                    body: i,
                    onDownloadProgress: o
                } = e, s = 100;
                return new Promise((function(a, c) {
                    const u = t ? new t : new XMLHttpRequest,
                        l = window.performance;
                    u.open(r.toUpperCase(), n, e.async), e.timeout && (u.timeout = e.timeout), u.onload = function() {
                        if (0 === u.status && (!u.responseURL || 0 !== u.responseURL.indexOf("file:"))) return;
                        const e = {};
                        u.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (t, n, r) => {
                            e[n] = e[n] ? `${e[n]},${r}` : r
                        });
                        let t = {};
                        if (window.performance && void 0 !== window.performance.getEntriesByType) {
                            const e = window.performance.getEntriesByType("resource");
                            if (e.length && e.length >= s && ("function" == typeof l.clearResourceTimings && l.clearResourceTimings(), "function" == typeof l.setResourceTimingBufferSize && (l.setResourceTimingBufferSize(500), s = 500)), e.length) {
                                const n = e.filter(e => e.name === u.responseURL).sort((e, t) => e.connectStart - t.connectStart);
                                n.length && (t = n[n.length - 1].toJSON())
                            }
                        }
                        a(new Lr(u.response, {
                            headers: e,
                            statusText: u.statusText,
                            status: u.status,
                            url: u.responseURL,
                            perfTimings: t
                        }))
                    }, u.onabort = function() {
                        c(new Mr)
                    }, u.onerror = function() {
                        c(new Fr)
                    }, u.ontimeout = function() {
                        c(new Ur(e.timeout))
                    }, "function" == typeof o && u.addEventListener("progress", o);
                    for (let t in e.headers) u.setRequestHeader(t, e.headers[t]);
                    e.withCredentials && (u.withCredentials = !0), e.responseType && (u.responseType = e.responseType), e.abort = u.abort.bind(u), u.send(i || null)
                }))
            }(t).then(ni(t))
        }))
    }));
    t = new ti(e, t);
    const {
        method: r,
        json: i,
        jwt: o,
        searchParams: s
    } = t;
    if (i && (t.headers["Content-Type"] = Jr.json, t.body = JSON.stringify(i)), o && (t.headers.Authorization = `jwt ${o}`), s) {
        const [e, n] = t.url.split("?");
        t.url = xt(e, un(un({}, Ot(n)), s))
    }
    const a = -1 !== Zr.indexOf(r.toLowerCase()) ? Xr(t)(n) : n();
    for (const c in Jr) a[c] = Gr((function() {
        return t.headers["Content-Type"] = Jr[c], qr(a, (function(e) {
            return e.clone()[c]()
        }))
    }));
    return function e(t, n) {
        const r = t.then.bind(t);
        return Object.assign(t, {
            abort: n,
            then: (...t) => e(r.apply(void 0, t), n)
        })
    }(a, () => t.abort())
}

function ti(e, t) {
    wt(this, xr, e = "string" == typeof e ? {
        url: e
    } : e, t)
}

function ni(e) {
    const {
        validateStatus: t,
        throwHttpErrors: n,
        hooks: r
    } = e;
    return Gr((function(i) {
        const o = r.afterResponse || [];
        return Kr($r(o, (function(t) {
            return qr((0, o[t])(e, i.clone()), (function(e) {
                e instanceof Lr && (i = e)
            }))
        })), (function() {
            if (!t || t(i.status)) return i;
            if (n) throw new Nr(i);
            return i
        }))
    }))
}
Qr.forEach((function(e) {
    return ei[e] = (t, n) => ei(t, un({
        method: e
    }, n)), ei[e]
}));
const {
    get: ri,
    post: ii,
    put: oi,
    patch: si,
    head: ai
} = ei, ci = {
    ARRAY_BUFFER: "arraybuffer"
};
var ui = Object.freeze({
    __proto__: null,
    ContentTypes: Cr,
    defaults: xr,
    requestMethods: Qr,
    responseTypes: Jr,
    retryMethods: Zr,
    request: ei,
    Request: ti,
    get: ri,
    post: ii,
    put: oi,
    patch: si,
    head: ai,
    Response: Lr,
    ResponseTypes: ci,
    AbortError: Mr,
    HTTPError: Nr,
    NetworkError: Fr,
    TimeoutError: Ur
});

function li(e, t = []) {
    if (0 === e.length) return 0;
    let n = 0,
        r = 0;
    for (let i = 0; i < e.length; i++) {
        const o = t[i] || 1;
        r += o, n += e[i] * o
    }
    return n / r
}

function di(e) {
    e.sort((e, t) => e - t);
    const t = Math.floor(e.length / 2);
    return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
}

function hi() {
    return "undefined" != typeof performance ? performance.now() : Date.now()
}
let fi = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    return ln(t, e), t
}(mn(Error));

function pi() {}
const mi = [],
    _i = [],
    vi = [];

function gi(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const yi = [];
let bi = function() {
        function e(e = {}) {
            const {
                retryCount: t = 3,
                parallel: n = 1,
                includeWithSpeeds: r = !0,
                timeout: i = 0,
                retryAbortErrors: o = !0
            } = e;
            this._queue = [], this._activeRequests = new Set, this._retries = new WeakMap, this._retryCount = t, this._running = !1, this._processingQueue = !1, this._parallel = n, this._includeWithSpeeds = r, this._timeout = i, this._retryAbortErrors = o, this._initialize()
        }
        e.getPercentileSpeed = function(e = 5, t = .8) {
            return function(e, t) {
                if (e.sort(), 0 === e.length) return 0;
                if (t <= 0) return e[0];
                if (t >= 1) return e[e.length - 1];
                const n = e.length * t,
                    r = Math.floor(n),
                    i = r + 1,
                    o = n % 1;
                return i >= e.length ? e[r] : e[r] * (1 - o) + e[i] * o
            }(mi.slice(-e), t)
        }, e.getAverageSpeed = function(e = 5, t = []) {
            return li(mi.slice(-e), t)
        }, e.getHarmonicAverageSpeed = function(e = 5) {
            return function(e) {
                if (0 === e.length) return 0;
                let t = 0;
                for (let n = 0; n < e.length; n++) t += 1 / e[n];
                return e.length / t
            }(mi.slice(-e))
        }, e.getVolatilityScaler = function(e = 5) {
            const t = mi.slice(-e);
            if (t.length < 3) return null;
            const n = li(t, []);
            return Math.min.apply(Math, gn(t)) / n
        }, e.getMedianSpeed = function(e = 5) {
            return di(mi.slice(-e))
        }, e.getResponseSpeeds = function() {
            return mi
        }, e.getProgressSpeeds = function() {
            return yi
        }, e.getFailedSegments = function() {
            return _i
        }, e.getSuccessfulSegments = function() {
            return vi
        };
        var t = e.prototype;
        return t.add = function(e, t) {
            return new Promise((n, r) => {
                const i = this._createSegmentInfo(e, n, r);
                this._addSegmentToQueue(i, t), this._running && !this._processingQueue && this._processQueue()
            })
        }, t.start = function() {
            this._running || (this._running = !0, this._processQueue())
        }, t.stop = function() {
            this._running = !1
        }, t.abort = function(e = null) {
            this._queue.filter(t => !e || e === t.stream).forEach(e => {
                e.reject(new fi("Stream manually aborted")), this.fire("downloadabort", e.identifier)
            }), this._queue = this._queue.filter(t => e && e !== t.stream), this._activeRequests.forEach(t => {
                e && e !== t.stream || t.request.abort()
            })
        }, t._insertAtPosition = function(e) {
            let t = 0;
            for (; t < this._queue.length && !(this._queue[t].priority > e.priority); t++);
            this._queue.splice(t, 0, e)
        }, t._initialize = function() {
            this._pendingFetchMap = new WeakMap, ft(this), window.addEventListener("online", () => {
                this.start(), this._waitUntilOnline && (this._waitUntilOnline.resolve(), this._waitUntilOnline = null)
            }), window.addEventListener("offline", () => {
                this.stop(), this.abort(), this._waitUntilOnline = new At
            })
        }, t._addSegmentToQueue = function(e, t) {
            e.hasOwnProperty("priority") ? this._insertAtPosition(e) : this._queue[t ? "unshift" : "push"](e)
        }, t._processQueue = function() {
            if (!this._running) return;
            this._processingQueue = !0;
            const e = this._parallel - this._activeRequests.size;
            for (let t = 0; t < e; t++) this._fetchOne()
        }, t._createSegmentInfo = function(e, t, n) {
            let r = e;
            return e.id && (r = e.id), un(un({}, e), {}, {
                identifier: r,
                resolve: t,
                reject: n
            })
        }, t._continueProcessingQueue = function() {
            0 !== this._activeRequests.size || 0 !== this._queue.length ? this._activeRequests.size < this._parallel && this._processQueue() : this._processingQueue = !1
        }, t._fetchOne = function() {
            if (0 === this._queue.length) return void(this._processingQueue = !1);
            const e = this._queue.shift(),
                {
                    url: t,
                    byteRange: n,
                    isInitSegmentRequest: r,
                    identifier: i,
                    timeout: o
                } = e,
                s = {
                    stream: e.stream,
                    data: {
                        url: t,
                        isInitSegmentRequest: r,
                        requestSendTime: hi(),
                        uuid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
                    }
                };
            let a = this._timeout;
            const c = parseInt(o, 10);
            c >= 0 && (a = c);
            const u = {
                url: t,
                type: Cr.SEGMENT,
                responseType: ci.ARRAY_BUFFER,
                retry: this._retryCount,
                hooks: {
                    beforeRetry: [this._beforeRetry.bind(this)]
                },
                onDownloadProgress: this._makeOnDownloadProgress(i, s),
                headers: n && {
                    Range: `bytes=${n}`
                },
                retryAbortErrors: this._retryAbortErrors,
                timeout: a
            };
            this.fire("downloadstart", i), s.request = ei(u).then(this._makeOnRequestLoad(s, e)).catch(this._makeOnRequestError(s, e)), this._activeRequests.add(s)
        }, t._beforeRetry = function() {
            try {
                const e = this;
                return function(t) {
                    var n = function() {
                        if (e._waitUntilOnline) return function(e, t) {
                            return e && e.then ? e.then(pi) : Promise.resolve()
                        }(e._waitUntilOnline)
                    }();
                    if (n && n.then) return n.then(pi)
                }()
            } catch (rl) {
                return Promise.reject(rl)
            }
        }, t._makeOnDownloadProgress = function(e, t) {
            let n = 0,
                r = 0,
                i = hi();
            return o => {
                if (o.lengthComputable) {
                    const s = 8 * (o.loaded - r),
                        a = hi(),
                        c = a - i,
                        u = {
                            startTime: i,
                            length: c,
                            bitrate: s / (c / 1e3),
                            index: n
                        };
                    n > 0 && (yi.length >= 100 && yi.shift(), yi.push(u)), i = a, r = o.loaded, n += 1, this._pendingFetchMap.set(t, {
                        bytesTotal: o.total,
                        bytesLoaded: o.loaded,
                        percent: o.loaded / o.total,
                        identifier: e
                    }), this.fire("progress", e)
                }
            }
        }, t._makeOnRequestLoad = function(e, t) {
            const n = this,
                r = hi(),
                {
                    identifier: i,
                    resolve: o
                } = t;
            return function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (rl) {
                        return Promise.reject(rl)
                    }
                }
            }((function(s) {
                let a = hi() - r;
                return gi(s.arrayBuffer(), (function(r) {
                    return e.data.duration = hi() - e.data.requestSendTime, n._activeRequests.delete(e), n._pendingFetchMap.delete(e), n._saveResponseSpeeds(t, a, r.byteLength), n.fire("downloadend", i, {
                        request: e,
                        response: s
                    }), vi.push({
                        url: e.data.url,
                        status: 200,
                        duration: e.data.duration
                    }), gi(n._processBuffer(e, r), (function(e) {
                        o(r = e), n._continueProcessingQueue()
                    }))
                }))
            }))
        }, t._saveResponseSpeeds = function(e, t, n) {
            const r = e.includeWithBandwidthChecks,
                i = t / 1e3;
            if (n > 8e3) {
                const t = 8 * n;
                let o = t / i;
                if (e.excludeConnectTime && t <= 16e5) {
                    const e = (50 * Math.max(0, 1 - t / 16e5) + 150) / 1e3;
                    o = t / Math.max(.1, i - e)
                }
                mi.length > 100 && mi.shift(), this._includeWithSpeeds && r && mi.push(o)
            }
        }, t._processBuffer = function(e, t) {
            return e.data.url && e.data.url.match(".ts$") ? this._feedMuxer(e, t) : Promise.resolve(new Uint8Array(t))
        }, t._feedMuxer = function(e, t) {
            try {
                const n = this;
                return function(e, t) {
                    var r = function() {
                        if (!n._transmuxer) return gi(n._loadMux(), (function(e) {
                            n._transmuxer = new e({
                                keepOriginalTimestamps: !0
                            })
                        }))
                    }();
                    return r && r.then ? r.then(t) : t()
                }(0, (function() {
                    return new Promise(r => {
                        n._transmuxer.on("data", t => {
                            n._transmuxer.off("data");
                            let i = new Uint8Array(t.initSegment.byteLength + t.data.byteLength);
                            i.set(t.initSegment, 0), i.set(t.data, t.initSegment.byteLength), r(e.data.isInitSegmentRequest ? t.initSegment : i)
                        }), n._transmuxer.push(new Uint8Array(t)), n._transmuxer.flush()
                    })
                }))
            } catch (rl) {
                return Promise.reject(rl)
            }
        }, t._makeOnRequestError = function(e, t) {
            const {
                identifier: n,
                reject: r,
                size: i
            } = t;
            return t => {
                const o = hi() - e.data.requestSendTime;
                if (e.data.duration = o, t instanceof Mr) _i.push({
                    url: e.data.url,
                    status: "abort",
                    duration: o
                }), this.fire("downloadabort", n);
                else if (t instanceof Nr) _i.push({
                    url: e.data.url,
                    status: t.response.status,
                    duration: o
                }), this.fire("downloaderror", n, t.response.status);
                else if (t instanceof Ur) {
                    if (_i.push({
                            url: e.data.url,
                            status: "timeout",
                            duration: o
                        }), i > 0 && t.timeoutMs > 0) {
                        let e = 8 * i / (t.timeoutMs / 1e3);
                        e *= .5, mi.push(e)
                    }
                    this.fire("downloadtimeout", n, {
                        timeoutMs: t.timeoutMs
                    })
                }
                this._pendingFetchMap.delete(e), this._activeRequests.delete(e), r(t), this._continueProcessingQueue()
            }
        }, t._loadMux = function() {
            return import ("./mux-mp4.module.js").then(({
                default: e
            }) => e)
        }, sn(e, [{
            key: "parallel",
            get: function() {
                return this._parallel
            },
            set: function(e) {
                this._parallel = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                const e = [];
                return this._activeRequests.forEach(t => {
                    if (this._pendingFetchMap.get(t)) {
                        const n = this._pendingFetchMap.get(t);
                        n.elapsedTime = hi() - t.data.requestSendTime, e.push(n)
                    }
                }), e
            }
        }]), e
    }(),
    Ei = function() {
        function e(e) {
            ft(this), this._sorcerer = e, this._sourceBuffer = null, this._activeStreamIndex = null, this._needsStreamSwitch = !1, this._needInitSegment = !0, this._lastAppended = null, this._toRemove = [], this._streams = [], this._quotaExceeded = !1, this._quotaExceededTimer = null, this._appendingFinalSegment = !1, this._finalSegmentTime = void 0, this._addingInitSegment = !1, this._isFirstSegment = !0, this._bufferState = {}, this._boundHandleUpdateEnd = this._handleUpdateEnd.bind(this), this._sorcerer.on("durationset", this._onDurationSet.bind(this))
        }
        var t = e.prototype;
        return t.addStream = function(e) {
            e.on("segmentadd", () => this._process());
            const t = this._streams.push(e) - 1;
            e.index = t, null === this._activeStreamIndex && (this._setActiveIndex(t), this._needsStreamSwitch = !0)
        }, t.streamIndexAtTime = function(e) {
            return this._bufferState[void 0] ? {
                stream: this.activeStreamIndex
            } : this._bufferState[Math.floor(e / 6)]
        }, t.switchTo = function(e, t = !0, n = {}) {
            let r = e;
            "object" == typeof e && (r = e.index);
            let i = this._activeStreamIndex !== r;
            const o = i;
            if (!i && this._needsStreamSwitch && (i = !0), i) {
                this._needsStreamSwitch = !1;
                const e = this._activeStreamIndex,
                    n = this._streams[e];
                this.fire("streamchangestart", e, r), n && o && t && n.abort(), this._switchToIndex = r, this._setActiveIndex(r)
            }
            return this._process(), new Promise(e => {
                i ? this._resolveSwitchComplete = () => {
                    this._switchToIndex === r && (this._resolveSwitchComplete = null, e(), this.fire("streamchange", r, n))
                } : e()
            })
        }, t.isTimeInBuffer = function(e) {
            for (let t = 0; t < this._sourceBuffer.buffered.length; t++) {
                const n = this._sourceBuffer.buffered.start(t),
                    r = this._sourceBuffer.buffered.end(t);
                if (n <= e && r >= e) return !0
            }
            return !1
        }, t.hasAppendedFinalSegment = function() {
            return void 0 !== this._finalSegmentTime && this.isTimeInBuffer(this._finalSegmentTime)
        }, t.clear = function() {
            this._streams.forEach(e => e.clear())
        }, t.remove = function(e, t = this._sorcerer._mediaSource.duration) {
            return new Promise((n, r) => {
                this._toRemove.push([e, t, n]), this._process()
            })
        }, t.removeEventListeners = function() {
            this._sourceBuffer && this._sourceBuffer.removeEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._onDurationSet = function() {
            const e = this._sorcerer._mediaSource.duration;
            let t = Math.floor(e / 6);
            t += 6 % e > 1 ? 1 : 0;
            for (let n = 0; n < t; n++) this._bufferState[n] = {
                stream: null,
                segment: n,
                type: "video"
            }
        }, t._attachEvents = function() {
            this._sourceBuffer.addEventListener("updateend", this._boundHandleUpdateEnd)
        }, t._setActiveIndex = function(e) {
            this._needInitSegment = !0, this._activeStreamIndex = e, this._sorcerer._frameDropper.streamIndex = e
        }, t._handleUpdateEnd = function() {
            this._checkEndOfStream(), this._updateBufferEnd(), this._process()
        }, t._checkEndOfStream = function() {
            if (this._appendingFinalSegment && this.endTime) return this._appendingFinalSegment = !1, this._finalSegmentTime = this.endTime, void this._sorcerer.checkEndOfStream();
            !this.activeStream.hasNextSegment() && this._finalSegmentTime > 0 && "open" === this._sorcerer._mediaSource.readyState && this._sorcerer.checkEndOfStream()
        }, t._updateBufferEnd = function() {
            this._lastAppended && (this.fire("appendbufferend", this._lastAppended), this._lastAppended = null, this._resolveSwitchComplete && this._resolveSwitchComplete())
        }, t._process = function() {
            if (this._sourceBuffer) {
                if (this.activeStream && "closed" !== this._sorcerer._mediaSource.readyState && !this._sourceBuffer.updating)
                    if (this._toRemove.length) this._removeBuffer();
                    else if (!this._quotaExceeded && !this._addingInitSegment) return this._needInitSegment ? (this._needInitSegment = !1, void this._appendInitSegment()) : void this._appendSegment()
            } else this.on("sourcebufferattach", this._process)
        }, t._removeBuffer = function() {
            const [e, t, n] = this._toRemove.shift(), r = e => {
                this._sourceBuffer.removeEventListener("updateend", r), n(), clearTimeout(this._quotaExceededTimer), this._quotaExceededTimer = setTimeout(() => {
                    this._quotaExceeded = !1, this._process()
                }, 5e3)
            };
            this._sourceBuffer.addEventListener("updateend", r), this._sourceBuffer.remove(e, t)
        }, t._appendInitSegment = function() {
            this._addingInitSegment = !0, this.activeStream.getInitSegment().then(e => (this._lastAppended = null, this._sourceBuffer.appendBuffer(e), this._addingInitSegment = !1, e)).catch(e => {
                this._needInitSegment = !0, this._addingInitSegment = !1
            })
        }, t._appendSegment = function() {
            const e = this.activeStream.getNextSegment();
            if (null === e) return;
            const t = this.activeStream.getIdForSegment(e);
            this.activeStream.isFinal(e) && (this._appendingFinalSegment = !0), this._lastAppended = t, this.fire("appendbufferstart", t);
            try {
                this._sourceBuffer.appendBuffer(e), this._bufferState[t.segment] = t, this._isFirstSegment && (this._isFirstSegment = !1, this.fire("initialbufferstart"))
            } catch (rl) {
                if ("QuotaExceededError" === rl.name) {
                    this._quotaExceeded = !0, this.fire("quotaexceedederror", this._sourceBuffer.buffered);
                    const t = 6;
                    if (this._sorcerer._video.currentTime > t) {
                        const e = 0,
                            n = this._sorcerer._video.currentTime - t;
                        this._sorcerer.removeBuffer(e, n)
                    }
                    this.activeStream._readyToAppend.unshift(e)
                }
            }
        }, sn(e, [{
            key: "streams",
            get: function() {
                return this._streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return this._activeStreamIndex
            }
        }, {
            key: "activeStream",
            get: function() {
                return this._streams[this._activeStreamIndex]
            }
        }, {
            key: "sourceBuffer",
            get: function() {
                return this._sourceBuffer
            },
            set: function(e) {
                this._sourceBuffer = e, this._attachEvents(), this.fire("sourcebufferattach")
            }
        }, {
            key: "endTime",
            get: function() {
                const e = this._sourceBuffer.buffered;
                if (e.length > 0) return e.end(e.length - 1)
            }
        }]), e
    }();

function Si() {}
let Ti = function() {
        function e(e, t = "", n = new bi) {
            ft(this), this._readyToAppend = [], this._initSegment = e, this._needInitSegment = !0, this._index = NaN, this._codec = t, this._fetcher = n, this._fetcher.start(), this._bufferData = new WeakMap, this._segmentToId = {}
        }
        e.isValidSegmentUrl = function(e) {
            return "string" == typeof e || "string" == typeof e.url && "string" == typeof e.byteRange
        };
        var t = e.prototype;
        return t.getIdForSegment = function(t) {
            return e.isValidSegmentUrl(t) ? this._segmentToId[t] : this._bufferData.get(t).id
        }, t.isFinal = function(e) {
            return this._bufferData.get(e).final
        }, t.addSegment = function(t, {
            identifier: n = null,
            isFinalSegment: r = !1,
            loadOnly: i = !1,
            priority: o = 0,
            includeWithBandwidthChecks: s = !0,
            excludeConnectTime: a = !1,
            timeout: c = null,
            size: u = null
        } = {}) {
            return this._needInitSegment && this.getInitSegment(), e.isValidSegmentUrl(t) ? (this._segmentToId[t] = n || t, this.fire("queued", this.getIdForSegment(t)), this._fetcher.add({
                url: t.url || t,
                byteRange: t.byteRange,
                id: this.getIdForSegment(t),
                stream: this,
                includeWithBandwidthChecks: s,
                excludeConnectTime: a,
                isInitSegmentRequest: !1,
                priority: o,
                timeout: c,
                size: u
            }).then(e => {
                this._bufferData.set(e, {
                    id: n || t,
                    final: r
                }), this._readyToAppend.push(e), this.fire("bufferqueueadd", this.getIdForSegment(t)), i || this.fire("segmentadd")
            })) : (this._bufferData.set(t, {
                id: n,
                final: r
            }), this._readyToAppend.push(t), this.fire("bufferqueueadd", n), Promise.resolve())
        }, t.clear = function() {
            this._readyToAppend = []
        }, t.abort = function() {
            try {
                const e = this;
                return function(t, n) {
                    var r = function() {
                        if (e._needInitSegment) return function(e) {
                            if (e && e.then) return e.then(Si)
                        }(function(t, n) {
                            try {
                                var r = function(e, t) {
                                    return e && e.then ? e.then(Si) : Promise.resolve()
                                }(e.getInitSegment())
                            } catch (rl) {
                                return
                            }
                            return r && r.then ? r.then(void 0, n) : r
                        }(0, (function(e) {})))
                    }();
                    return r && r.then ? r.then(n) : n()
                }(0, (function() {
                    e._fetcher.abort(e)
                }))
            } catch (rl) {
                return Promise.reject(rl)
            }
        }, t.hasNextSegment = function() {
            return this._readyToAppend.length > 0
        }, t.getNextSegment = function() {
            return 0 === this._readyToAppend.length ? null : this._readyToAppend.shift()
        }, t.getInitSegment = function() {
            const t = "object" == typeof this._initSegment && "url" in this._initSegment ? this._initSegment.url : this._initSegment;
            return t ? (this._needInitSegment = !1, e.isValidSegmentUrl(t) ? this._fetcher.add({
                url: t,
                byteRange: this._initSegment.byteRange,
                id: null,
                stream: this,
                isInitSegmentRequest: !0,
                priority: 0
            }).then(e => (this._initSegment = e, this._initSegment)) : Promise.resolve(this._initSegment)) : Promise.resolve(null)
        }, sn(e, [{
            key: "codec",
            get: function() {
                return this._codec
            },
            set: function(e) {
                this._codec = e
            }
        }, {
            key: "index",
            get: function() {
                return this._index
            },
            set: function(e) {
                this._index = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }]), e
    }(),
    wi = function() {
        function e(e) {
            this._video = e, this._running = !1, this._droppedFramesTimeout = null, this._droppedFrameData = {}, this._decodedFrameData = {}, this._droppedFrames = 0, this._decodedFrames = 0, this._streamIndex = "default", this._attached = !1, this.bound = {
                startCheckingDroppedFrames: this._startCheckingDroppedFrames.bind(this),
                stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this),
                handleVisibilityChanged: this._handleVisibilityChanged.bind(this)
            }
        }
        var t = e.prototype;
        return t.init = function() {
            this._attachEvents()
        }, t.start = function() {
            return this._startCheckingDroppedFrames(), this
        }, t.stop = function() {
            return this._stopCheckingDroppedFrames(), this
        }, t.destroy = function() {
            this._stopCheckingDroppedFrames(), this._removeEvents()
        }, t.getDroppedFrameRate = function(e, t, n = "average") {
            const r = this._droppedFrameData[t];
            if (!r) return 0;
            if (r.length < e) return 0;
            const i = r.slice(-e);
            return "median" === n ? di(i) : li(i)
        }, t.getDroppedFrameTotal = function() {
            return {
                dropped: this._getTotalDroppedFrames(),
                total: this._getTotalFrames()
            }
        }, t._attachEvents = function() {
            this._attached || (this._video.addEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.addEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.addEventListener("ended", this.bound.stopCheckingDroppedFrames), document.addEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !0)
        }, t._removeEvents = function() {
            this._video.removeEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.removeEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.removeEventListener("ended", this.bound.stopCheckingDroppedFrames), document.removeEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !1
        }, t._startCheckingDroppedFrames = function() {
            this._running = !0, this._checkDroppedFrames()
        }, t._stopCheckingDroppedFrames = function() {
            this._running = !1
        }, t._checkDroppedFrames = function() {
            if (!this._running || null === this._streamIndex) return;
            if (Gn.browser.safari && (document.hidden || "hidden" === document.visibilityState)) return;
            clearTimeout(this._droppedFramesTimeout);
            const e = this._getTotalDroppedFrames(),
                t = e - this._droppedFrames;
            this._droppedFrames = e;
            const n = this._getTotalDecodedFrames(),
                r = n - this._decodedFrames;
            this._decodedFrames = n, this._droppedFrameData[this._streamIndex] || (this._droppedFrameData[this._streamIndex] = []), this._decodedFrameData[this._streamIndex] || (this._decodedFrameData[this._streamIndex] = []), this._droppedFrameData[this._streamIndex].length > 100 && this._droppedFrameData[this._streamIndex].shift(), this._decodedFrameData[this._streamIndex].length > 100 && this._decodedFrameData[this._streamIndex].shift(), this._droppedFrameData[this._streamIndex].push(t), this._decodedFrameData[this._streamIndex].push(r), this._droppedFramesTimeout = setTimeout(() => {
                this._checkDroppedFrames()
            }, 1e3)
        }, t._handleVisibilityChanged = function() {
            !Gn.browser.safari || document.hidden && "hidden" === document.visibilityState || this._checkDroppedFrames()
        }, t._getTotalDroppedFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().droppedVideoFrames : this._video.webkitDroppedFrameCount || 0
        }, t._getTotalFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().totalVideoFrames : this._video.webkitDecodedFrameCount || 0
        }, t._getTotalDecodedFrames = function() {
            if ("function" == typeof this._video.getVideoPlaybackQuality) {
                const e = this._video.getVideoPlaybackQuality();
                return e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames
            }
            return this._video.webkitDecodedFrameCount || 0
        }, sn(e, [{
            key: "streamIndex",
            get: function() {
                return this._streamIndex
            },
            set: function(e) {
                this._streamIndex = e
            }
        }]), e
    }(),
    Ai = function() {
        function e(e, t = {}) {
            this._video = e, this._options = t, ft(this);
            const {
                fetcherTimeout: n = 0,
                fetcherRetryAbortErrors: r = !0
            } = this._options;
            this._frameDropper = new wi(e), this._mediaSource = new MediaSource, this._fetcher = new bi({
                parallel: 1,
                timeout: n,
                retryAbortErrors: r
            }), this._buffersForCodec = {}, this._buffers = [], this._readyPromiseResolve = null, this._boundHandleSourceOpen = this._handleSourceOpen.bind(this), this._attachEvents()
        }
        var t = e.prototype;
        return t.switchTo = function(e) {
            return 1 === this._buffers.length && this.video.switchTo(e)
        }, t.getCurrentSpeed = function({
            type: e = "average",
            howMany: t = 10,
            weights: n = [],
            percentile: r = null
        } = {}) {
            return "harmonicAverage" === e ? bi.getHarmonicAverageSpeed(t) : "average" === e ? bi.getAverageSpeed(t, n) : "median" === e ? bi.getMedianSpeed(t) : bi.getPercentileSpeed(t, r)
        }, t.getVolatilityScaler = function(e) {
            return bi.getVolatilityScaler(e)
        }, t.getResponseSpeeds = function() {
            return bi.getResponseSpeeds()
        }, t.getFailedSegments = function() {
            return bi.getFailedSegments()
        }, t.getSuccessfulSegments = function() {
            return bi.getSuccessfulSegments()
        }, t.getDroppedFrameRate = function(e, t = this.activeStreamIndex, n = "average") {
            return this._frameDropper.getDroppedFrameRate(e, t, n)
        }, t.getDroppedFrameTotal = function() {
            return this._frameDropper.getDroppedFrameTotal()
        }, t.clear = function() {
            this._buffers.forEach(e => e.clear())
        }, t.initFrameDropper = function() {
            this._frameDropper.init()
        }, t.streamIndexAtTime = function(e, t) {
            return this._buffersForCodec[t].streamIndexAtTime(e) ? this._buffersForCodec[t].streamIndexAtTime(e).stream : null
        }, t.removeBuffer = function(e = 0, t = this._video.duration) {
            if (e >= (t = t || 0)) return Promise.resolve();
            const n = this._buffers.map(n => n.remove(e, t));
            return Promise.all(n)
        }, t.addStream = function(e, t) {
            const n = this._getCodecType(e);
            if (!this._buffersForCodec[n]) {
                const t = new Ei(this, n);
                this._buffersForCodec[n] = t, this._buffers.push(t), this.readyPromise.then(() => {
                    let r;
                    try {
                        r = this._mediaSource.addSourceBuffer(e)
                    } catch (rl) {
                        if (22 !== rl.code) return void this.fire("srcnotsupported", rl);
                        r = this._buffersForCodec[n]
                    }
                    if (this._options.duration) {
                        const e = .1;
                        r.appendWindowEnd = this._options.duration + e
                    }
                    t.sourceBuffer = r
                }).catch(e => {}), ["appendbufferstart", "appendbufferend", "streamchange", "streamchangestart", "initialbufferstart", "quotaexceedederror"].forEach(e => {
                    t.on(e, t => {
                        this.fire(e, t)
                    })
                })
            }
            const r = new Ti(t, e, this._fetcher);
            return ["queued", "bufferqueueadd"].forEach(e => {
                r.on(e, t => {
                    this.fire(e, t)
                })
            }), this._buffersForCodec[n].addStream(r), r
        }, t.checkEndOfStream = function() {
            if (!this._buffers.every(e => e.hasAppendedFinalSegment())) return;
            const e = () => {
                this._video.removeEventListener("timeupdate", e), this._buffers.every(e => e.isTimeInBuffer(this._video.currentTime)) && this.endOfStream()
            };
            this._video.addEventListener("timeupdate", e)
        }, t.abortFetches = function() {
            this._fetcher.abort()
        }, t.endOfStream = function() {
            "open" === this._mediaSource.readyState && (this._sourceBuffersAreUpdating() || (this._mediaSource.endOfStream(), this.fire("endofstream")))
        }, t.destroy = function() {
            this.clear(), this._removeEventListeners(), this.off(), this._frameDropper.destroy(), this._fetcher.abort(), this._video.src && (this._video.removeAttribute("src"), this._video.load())
        }, t._attachEvents = function() {
            this.readyPromise = new Promise((e, t) => {
                this._readyPromiseResolve = e, this._mediaSource.addEventListener("sourceopen", this._boundHandleSourceOpen)
            }), ["downloadstart", "downloadend", "downloadabort", "downloaderror", "downloadtimeout", "progress"].forEach(e => {
                this._fetcher.on(e, (...t) => {
                    this.fire.apply(this, [e].concat(t))
                })
            })
        }, t._sourceBuffersAreUpdating = function() {
            for (let e = 0; e < this._mediaSource.sourceBuffers.length; e++)
                if (this._mediaSource.sourceBuffers[e].updating) return !0;
            return !1
        }, t._handleSourceOpen = function() {
            URL.revokeObjectURL(this._video.src), this._mediaSource.removeEventListener("sourceopen", this._boundHandleSourceOpen), this._options.duration && (this._mediaSource.duration = this._options.duration, this.fire("durationset")), this._readyPromiseResolve()
        }, t._removeEventListeners = function() {
            this._buffers.forEach(e => e.removeEventListeners())
        }, t._getCodecType = function(e) {
            return 0 === e.indexOf("audio") ? "audio" : "video"
        }, sn(e, [{
            key: "mediaSource",
            get: function() {
                return this._mediaSource
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }, {
            key: "streams",
            get: function() {
                return 1 === this._buffers.length && this.video.streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return 1 === this._buffers.length && this.video.activeStreamIndex
            }
        }, {
            key: "video",
            get: function() {
                return !!this._buffersForCodec.video && this._buffersForCodec.video
            }
        }, {
            key: "audio",
            get: function() {
                return !!this._buffersForCodec.audio && this._buffersForCodec.audio
            }
        }]), e
    }(),
    Ii = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t) || this)._options = n, r.blacklisted = [], r.whitelisted = [], r.MAX_LOADABLE_SEGMENTS_AUTO = 3, r.MAX_LOADABLE_SEGMENTS_LOCKED = 15, r.SEGMENT_DURATION = 6, r
        }
        ln(t, e), sn(t, [{
            key: "displayName",
            get: function() {
                return "MediaSource"
            }
        }]);
        var n = t.prototype;
        return n.isTimeInBuffer = function(e, t, n) {
            return this._timesAreInRange(e, e, t, n, 1)
        }, n.getDistanceFromBuffer = function(e, t) {
            let n = e;
            for (let r = 0; r < t.length; r++)
                if (t.start(r) <= e && t.end(r) >= e) {
                    n = t.end(r);
                    break
                }
            return n - e
        }, n.blacklist = function(e) {
            this.blacklisted[e] = 1
        }, n.lock = function(e = []) {
            this.whitelisted = e
        }, n.filterStreams = function(e, t, n, r = null) {
            const i = [];
            let o, s = !1;
            for (let a = 0; a < e.length; a++)
                if (o && o[0] === e[a].width && o[1] === e[a].height) i.push(e[a]);
                else {
                    if (s) break;
                    this.blacklisted[a] && -1 === this.whitelisted.indexOf(a) || this.whitelisted.length && -1 === this.whitelisted.indexOf(a) || (this.whitelisted.length ? i.push(e[a]) : (this._getScaleFromDimensions(t, n, e[a].width, e[a].height, r) >= (n < 1e3 / (window.devicePixelRatio || 1) ? 1.75 : 1) && (s = !0), i.push(e[a]), o = [e[a].width, e[a].height]))
                }
            return i
        }, n.getCurrentSpeed = function() {
            let e = "average",
                t = 3,
                n = [1, 2, 5];
            return this._options.tests && this._options.tests.harmonic_average && this._options.tests.harmonic_average.group && (e = "harmonicAverage", t = this._getMaxLoadableSegmentsAuto(), n = []), this.scanner.sorcerer.getCurrentSpeed({
                type: e,
                howMany: t,
                weights: n
            })
        }, n.shouldUseSurroundSound = function(e, t) {
            return "240p" !== e[t].quality
        }, n.getAudioIndexFromVideo = function(e, t, n) {
            if (0 === t.length) return !1;
            if (!e[n]) return 0;
            const r = t.filter(({
                channels: e
            }) => e > 2);
            if (r.length > 0 && this.shouldUseSurroundSound(e, n)) {
                const e = r[r.length - 1];
                return t.indexOf(e)
            }
            return t.length > 1 && 0 === n && e[n].height <= 360 && e.length > 1 ? "mp4a.40.2" === t[0].codecs && t[0].bitrate < 8e4 && "240p" !== e[n].quality ? 1 : 0 : t.length - 1
        }, n._getVisibleDimensions = function(e, t, n, r) {
            const i = n / r,
                o = e - t * i,
                s = t - e / i;
            let a = e - o,
                c = t - s;
            return o > 0 && (c = t), s > 0 && (a = e), [a, c]
        }, n._getScaleFromDimensions = function(e, t, n, r, i = null) {
            const o = this._getVisibleDimensions(e, t, n, r);
            let s = n * r;
            i && (s *= i);
            const a = window.devicePixelRatio || 1;
            return s / (o[0] * o[1] * a * a)
        }, n._getMaxLoadableSegmentsAuto = function() {
            const e = fr(this._options, "lookahead_count");
            return e && e.group && e.data.count ? e.data.count : e && e.data.segment_lookahead_count ? e.data.segment_lookahead_count : this.MAX_LOADABLE_SEGMENTS_AUTO
        }, n._getSecondsToLoadAhead = function(e, t, n) {
            const r = n && n.bitrate > 11e6;
            return 1 === this.whitelisted.length ? r ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION : this._getMaxLoadableSegmentsAuto() * this.SEGMENT_DURATION
        }, n._timesAreInRange = function(e, t, n, r, i = 0) {
            if (!n) return !1;
            t = Math.min(t, r);
            for (let o = 0; o < n.length; o++) {
                const r = hr(n.start(o)) - i,
                    s = hr(n.end(o)) + i;
                if (r <= e && s >= t) return !0
            }
            return !1
        }, n._hasSeparateStreams = function(e) {
            return e.video.length > 0 && e.audio.length > 0
        }, n._isSegmentInBuffer = function(e, t, n, r) {
            let i = 1;
            return this._hasSeparateStreams(r) && (i = .05), this._timesAreInRange(e.start, e.end, t, n, i)
        }, t
    }(function() {
        function e(e) {
            this.scanner = e, this.STREAM_TYPE_VIDEO = "video", this.STREAM_TYPE_AUDIO = "audio"
        }
        sn(e, [{
            key: "displayName",
            get: function() {
                return "Brain"
            }
        }]);
        var t = e.prototype;
        return t.destroy = function() {}, t.shouldPowerUp = function(e, t) {
            return !1
        }, t.shouldPowerDown = function(e, t) {
            return !1
        }, t.canPowerUp = function(e, t) {
            return 1 !== e.length && t < e.length - 1
        }, t.canPowerDown = function(e, t) {
            return 1 !== e.length && t > 0
        }, t.filterStreams = function(e) {
            return e
        }, e
    }());
let ki = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).BANDWIDTH_UPSWITCH_THRESHOLD = .85, r.BANDWIDTH_DOWNSWITCH_THRESHOLD = .9, r.DEFAULT_TIMEOUT = 8e3, r.SEGMENT_RELATIVE_TIMEOUT_RATIO = 4 / 3, r.MINIMUM_TIMEOUT = 1e3, r.FRAME_DROP_WINDOW_SECONDS = 10, r
        }
        ln(t, e), sn(t, [{
            key: "displayName",
            get: function() {
                return "Skyfire"
            }
        }]);
        var n = t.prototype;
        return n.shouldPowerUp = function(e, t, n) {
            n && this._options.startingBandwidthThreshold && (this.BANDWIDTH_UPSWITCH_THRESHOLD = this._options.startingBandwidthThreshold);
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), !this.canPowerUp(e, r)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const i = this.getCurrentSpeed();
            if (!i) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const o = this._getStreamFromSpeed(i, this.BANDWIDTH_UPSWITCH_THRESHOLD, e);
            return o === r || !n && o > r && It(this.scanner.currentTime, this.scanner._video.buffered) < 1.5 * this.SEGMENT_DURATION ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: o,
                reasonForSwitch: 3
            })
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve({
                    index: e.length - 1,
                    reasonForSwitch: 6
                }) : Promise.resolve({
                    index: !1,
                    reasonForSwitch: null
                })
            }
            if (!this.canPowerDown(e, n)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = this.getCurrentSpeed();
            if (!r) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent)) return this.blacklist(n), Promise.resolve({
                index: n - 1,
                reasonForSwitch: 2
            });
            const i = this._getStreamFromSpeed(r, this.BANDWIDTH_DOWNSWITCH_THRESHOLD, e);
            return i === n ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: i,
                reasonForSwitch: 1
            })
        }, n.hasTooManyDroppedFrames = function(e, t, n) {
            return this.scanner.sorcerer.getDroppedFrameRate(this.FRAME_DROP_WINDOW_SECONDS, e, "median") / t.framerate * 100 >= n
        }, n.getTimeEstimateToLoad = function(e, t) {
            if (null === t) return 3;
            const n = t.segments[e],
                r = n.end - n.start,
                i = this.getCurrentSpeed();
            return r * (t.bitrate + t.audioBitrate) / i * 1.3
        }, n.canPlayFromTimeInStream = function(e, t) {
            if (!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)) return !1;
            if (!t) return !1;
            const n = this.getSegmentsToLoad(!1, this.STREAM_TYPE_VIDEO, t);
            if (0 === n.length) return !0;
            const r = It(e, this.scanner._video.buffered);
            return this.getTimeEstimateToLoad(n[0], t) < r
        }, n.getSegmentsToLoad = function(e, t = this.STREAM_TYPE_VIDEO, n) {
            const r = this.scanner._video,
                i = this.scanner.currentTime,
                o = [],
                s = i + this._getSecondsToLoadAhead(i, r.duration, n),
                a = this.scanner.sorcerer[t].activeStreamIndex,
                c = this.scanner._streams[t][a];
            if (!c) return o;
            const u = this.scanner.sorcerer[t].sourceBuffer;
            let l = null;
            u && (l = u.buffered);
            for (let d = 0; d < c.segments.length; d++) {
                const t = c.segments[d];
                if (t.end < i || t.start > s) continue;
                const n = i >= t.start && i < t.end,
                    r = this._isSegmentInBuffer(t, l, this.scanner._video.duration, this.scanner._streams);
                !e && r || e && r && n || (n || s >= t.start) && o.push(d)
            }
            return o
        }, n.getSegmentRelativeTimeout = function(e, t, n) {
            var r;
            const i = null == t ? void 0 : t.bitrate,
                o = null == (r = e[0]) ? void 0 : r.bitrate;
            if (!i || !o || !n) return this.DEFAULT_TIMEOUT;
            if (i === o) return this.DEFAULT_TIMEOUT;
            const s = n * this.SEGMENT_RELATIVE_TIMEOUT_RATIO;
            return Math.max(this.MINIMUM_TIMEOUT, Math.min(this.DEFAULT_TIMEOUT, s))
        }, n._getStreamFromSpeed = function(e, t, n) {
            let r = 0;
            for (let i = r; i < n.length; i++) e * t > n[i].bitrate + n[i].audioBitrate && (r = i);
            return r
        }, t
    }(Ii),
    Ri = function(e) {
        function t(t, n = {}) {
            var r, i, o;
            return (o = e.call(this, t, n) || this)._mimirURL = n.tests.ml_brain.data.mimir_url, o._geolocation = n.tests.ml_brain.data.geolocation, o._segmentToStreamDecisionMap = {}, o._pendingModelFetch = null, o._prevBufferDurations = [], o._prevSegmentDownloadTimes = [], o._prevSegmentByteLengths = [], o._prevDistancesFromBuffer = [], o._prevSegmentStreamIndexes = [], o._prevRemainingSegmentCounts = [], o._prevTTFBs = [], o._prevSegmentTimeouts = [], o._prevSegmentRequestIDs = [], o._prevModelInputs = null, o._lastModelResponseTime = 0, o._videoSegInProgress = null, o._audioSegInProgress = null, o._scrubInProgress = !1, o._hasPreloaded = !1, o._networkIssueCount = 0, o._audioStreams = [], o._videoBufferAppendCount = 0, o._scannerEventsHandlers = [
                [wn.DOWNLOAD_START, o._handleDownloadStart.bind(vn(o))],
                [wn.DOWNLOAD_END, o._handleDownloadEnd.bind(vn(o))],
                [wn.APPEND_BUFFER_END, o._handleAppendBufferEnd.bind(vn(o))],
                [wn.DOWNLOAD_TIMEOUT, o._handleDownloadTimeout.bind(vn(o))]
            ], o._beforeRequestHooks = [o._beforeSegmentQualityFetch], o._afterResponseHooks = [o._afterSegmentQualityFetch], o._scannerEventsHandlers.forEach(e => {
                o.scanner.on(e[0], e[1])
            }), (r = xr.hooks.beforeRequest).push.apply(r, gn(o._beforeRequestHooks)), (i = xr.hooks.afterResponse).push.apply(i, gn(o._afterResponseHooks)), o
        }
        ln(t, e), sn(t, [{
            key: "displayName",
            get: function() {
                return "ML"
            }
        }]);
        var n = t.prototype;
        return n.destroy = function() {
            this._scannerEventsHandlers.forEach(e => {
                this.scanner.off(e[0], e[1])
            }), this._beforeRequestHooks.forEach(e => {
                const t = xr.hooks.beforeRequest,
                    n = t.indexOf(e);
                n >= 0 && t.splice(n, 1)
            }), this._afterResponseHooks.forEach(e => {
                const t = xr.hooks.afterResponse,
                    n = t.indexOf(e);
                n >= 0 && t.splice(n, 1)
            })
        }, n._handleDownloadStart = function({
            identifier: e
        }) {
            e.type === this.STREAM_TYPE_VIDEO && (this._videoSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            }), e.type === this.STREAM_TYPE_AUDIO && (this._audioSegInProgress = {
                index: e.segment,
                streamIndex: e.stream,
                complete: null
            })
        }, n._segmentInProgressMatchesIdentifer = function(e, t = this.STREAM_TYPE_VIDEO) {
            return t === this.STREAM_TYPE_VIDEO ? null !== this._videoSegInProgress && this._videoSegInProgress.index === e.segment && this._videoSegInProgress.streamIndex === e.stream : t === this.STREAM_TYPE_AUDIO && null !== this._audioSegInProgress && this._audioSegInProgress.index === e.segment
        }, n._isSegmentInProgress = function() {
            return null !== this._videoSegInProgress || null !== this._audioSegInProgress
        }, n._handleDownloadEnd = function({
            identifier: e,
            data: {
                request: t,
                response: n
            }
        }) {
            const r = t.data.duration / 1e3,
                i = n.body.byteLength;
            let o = null;
            n.perfTimings && (o = n.perfTimings.responseStart - n.perfTimings.connectStart), e.type === this.STREAM_TYPE_VIDEO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && (this._videoSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: o,
                uuid: t.data.uuid
            }, this._hasPreloaded || (this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: e.segment - 1,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: o,
                didSegmentTimeout: !1
            }), this._hasPreloaded = !0)), e.type === this.STREAM_TYPE_AUDIO && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && (this._audioSegInProgress.complete = {
                downloadTime: r,
                byteLength: i,
                ttfb: o,
                uuid: t.data.uuid
            })
        }, n._handleDownloadTimeout = function({
            identifier: e,
            data: t
        }) {
            const n = (t.timeoutMs || 8e3) / 1e3,
                r = e.segment,
                i = this.scanner._streams[e.type][e.stream].segments[r].size;
            delete this._segmentToStreamDecisionMap[r], this._updateModelInputData({
                streamIndex: e.stream,
                segmentIndex: r,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: .1,
                didSegmentTimeout: !0
            })
        }, n._clearInProgress = function() {
            this._videoSegInProgress = null, this._audioSegInProgress = null
        }, n._handleAppendBufferEnd = function({
            identifier: e
        }) {
            if (e.type === this.STREAM_TYPE_VIDEO && (this._videoBufferAppendCount += 1), this._hasSeparateStreams(this.scanner._streams)) {
                if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_AUDIO) && null !== this._videoSegInProgress.complete && null !== this._audioSegInProgress.complete) {
                    const t = this._videoSegInProgress.complete,
                        n = this._audioSegInProgress.complete,
                        r = t.downloadTime + n.downloadTime,
                        i = t.byteLength + n.byteLength,
                        o = t.ttfb + n.ttfb;
                    this._updateModelInputData({
                        streamIndex: e.stream,
                        segmentIndex: e.segment - 1,
                        segmentDLTime: r,
                        segmentLength: i,
                        ttfb: o,
                        segmentRequestID: t.uuid,
                        didSegmentTimeout: !1
                    }), this._clearInProgress()
                }
            } else if (this._segmentInProgressMatchesIdentifer(e, this.STREAM_TYPE_VIDEO) && null !== this._videoSegInProgress.complete) {
                const t = this._videoSegInProgress.complete;
                this._updateModelInputData({
                    streamIndex: e.stream,
                    segmentIndex: e.segment - 1,
                    segmentDLTime: t.downloadTime,
                    segmentLength: t.byteLength,
                    ttfb: t.ttfb,
                    segmentRequestID: t.uuid,
                    didSegmentTimeout: !1
                }), this._clearInProgress()
            }
        }, n._updateModelInputData = function(e) {
            const {
                streamIndex: t,
                segmentIndex: n,
                segmentDLTime: r,
                segmentLength: i,
                ttfb: o,
                segmentRequestID: s,
                didSegmentTimeout: a
            } = e, c = this.scanner._streams.video[t], u = this.scanner.sorcerer.video.sourceBuffer;
            if (!u || !c) return;
            this._prevBufferDurations.push(this.getTotalBufferDuration()), this._prevDistancesFromBuffer.push(It(this.scanner.currentTime, u.buffered)), this._prevSegmentStreamIndexes.push(t), this._prevSegmentDownloadTimes.push(r), this._prevSegmentByteLengths.push(i);
            const l = o + this._lastModelResponseTime;
            this._prevTTFBs.push(l), this._prevRemainingSegmentCounts.push(c.segments.length - n), this._prevSegmentRequestIDs.push(s), this._prevSegmentTimeouts.push(Number(a))
        }, n.handleScrubEnd = function(e) {
            const t = this._prevSegmentDownloadTimes.length,
                n = t ? this._prevSegmentDownloadTimes[t - 1] : 0,
                r = this._prevSegmentByteLengths.length,
                i = r ? this._prevSegmentByteLengths[r - 1] : 0,
                o = this._prevTTFBs.length,
                s = o ? this._prevTTFBs[o - 1] : 0,
                a = this.scanner._streams.video[e],
                c = this._getFirstLookaheadSegmentNotInBuffer(a),
                u = c ? c.index : this._prevRemainingSegmentCounts[this._prevRemainingSegmentCounts.length - 1],
                l = this._prevSegmentRequestIDs.length ? this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1] : "";
            this._updateModelInputData({
                streamIndex: e,
                segmentIndex: u,
                segmentDLTime: n,
                segmentLength: i,
                ttfb: s,
                segmentRequestID: l,
                didSegmentTimeout: !1
            })
        }, n.shouldPowerUp = function(e, t, n) {
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), 1 === this.whitelisted.length) return this.whitelisted[0] > r ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerUp(e, r)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const i = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === i) return Promise.resolve(!1);
            const o = {
                    index: i.index,
                    streamIndex: i.streamIndex
                },
                s = i.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === o.index && this._pendingModelFetch.streamIndex === o.streamIndex) return Promise.resolve(!1);
            if (!(s in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(o, e, t).then(e => e > r && e).catch(console.error);
            const a = this._segmentToStreamDecisionMap[s];
            return a > r ? Promise.resolve(a) : Promise.resolve(!1)
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve(e.length - 1) : Promise.resolve(!1)
            }
            if (1 === this.whitelisted.length) return this.whitelisted[0] < n ? Promise.resolve(0) : Promise.resolve(!1);
            if (1 === this.scanner._streams.video.length) return Promise.resolve(!1);
            if (!this.canPowerDown(e, n)) return Promise.resolve(!1);
            if (this.scrubInProgress) return Promise.resolve(!1);
            const r = this._getFirstLookaheadSegmentNotInBuffer(t);
            if (null === r) return Promise.resolve(!1);
            const i = {
                    index: r.index,
                    streamIndex: r.streamIndex
                },
                o = r.index;
            if (null !== this._pendingModelFetch && this._pendingModelFetch.index === i.index && this._pendingModelFetch.streamIndex === i.streamIndex) return Promise.resolve(!1);
            if (!(o in this._segmentToStreamDecisionMap)) return this._fetchSegmentQualityFromModel(i, e, t).then(e => e < n && e).catch(console.error);
            const s = this._segmentToStreamDecisionMap[o];
            return s < n ? Promise.resolve(s) : Promise.resolve(!1)
        }, n.getTotalBufferDuration = function() {
            const e = this.scanner.sorcerer.video.sourceBuffer;
            let t = 0;
            if (!e) return t;
            for (let n = 0; n < e.buffered.length; n++) {
                const r = e.buffered.start(n);
                t += e.buffered.end(n) - r
            }
            return t
        }, n.canPlayFromTimeInStream = function(e, t) {
            return !!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration) && !!t
        }, n._normalizeModelInput = function(e, t = 0) {
            let n = e.slice(0);
            if (n.length < 8) {
                const e = 8 - n.length;
                for (let r = 0; r < e; r++) n.unshift(t);
                return n
            }
            return n.slice(n.length - 8, n.length)
        }, n._getModelInputs = function(e, t) {
            const n = {
                    240: 1,
                    360: 2,
                    480: 3,
                    540: 3,
                    720: 4,
                    1080: 5,
                    1440: 6,
                    2160: 7
                },
                r = {
                    240: 0,
                    360: 1,
                    480: 2,
                    540: 2,
                    720: 3,
                    1080: 4,
                    1440: 5,
                    2160: 6
                };
            let i = [0, 0, 0, 0, 0, 0, 0, 0],
                o = [0, 0, 0, 0, 0, 0, 0, 0],
                s = [0, 0, 0, 0, 0, 0, 0, 0];
            this._videoBufferAppendCount < 3 && (s[s.length - 1] = 1);
            for (let c = 0; c < t.length; c++) {
                const s = t[c],
                    a = parseInt(s.quality, 10);
                a in n && (i[n[a]] = 1);
                const u = this.getAudioIndexFromVideo(t, this._audioStreams, c);
                let l = null;
                "number" == typeof u && (l = this._audioStreams[u]);
                for (let t = 0; t < s.segments.length; t++)
                    if (t === e && a in r) {
                        const e = s.segments[t].size;
                        let n = 0;
                        l && l.segments[t] && (n = l.segments[t].size), o[r[a]] = e + n
                    }
            }
            const a = this._prevSegmentStreamIndexes.map(e => parseInt(this.scanner._streams.video[e].quality, 10));
            return {
                availableQualities: i,
                nextChunkSizes: o,
                lastBufferSizes: this._normalizeModelInput(this._prevBufferDurations),
                lastChunkDownloadTimes: this._normalizeModelInput(this._prevSegmentDownloadTimes),
                lastTtfb: this._normalizeModelInput(this._prevTTFBs, .1),
                lastChunkSizes: this._normalizeModelInput(this._prevSegmentByteLengths),
                lastChunkQualities: this._normalizeModelInput(a),
                numRemainingChunks: this._normalizeModelInput(this._prevRemainingSegmentCounts),
                lastPlaybackHeads: this._normalizeModelInput(this._prevDistancesFromBuffer),
                geolocation: [
                    [this._geolocation]
                ],
                downloadTimeout: this._normalizeModelInput(this._prevSegmentTimeouts),
                videoStart: s
            }
        }, n._getStreamQualityFromModelOutput = function(e, t) {
            let n = -1,
                r = -1;
            for (let o = 0; o < e.length; o++) e[o] > r && (r = e[o], n = o);
            let i = [];
            for (let o = 0; o < t.length; o++) 1 === t[o] && i.push(o);
            return {
                1: 240,
                2: 360,
                3: 540,
                4: 720,
                5: 1080,
                6: 1440,
                7: 2160
            }[i[n]]
        }, n._getStreamIndexFromQuality = function(e, t) {
            for (let n = 0; n < t.length; n++) {
                const r = parseInt(t[n].quality, 10);
                if (r === e) return n;
                if (480 === r && 540 === e) return n
            }
            return 0
        }, n._beforeSegmentQualityFetch = function(e) {
            e.startTime = or()
        }, n._afterSegmentQualityFetch = function(e, t) {
            return t.duration = sr(e.startTime), t
        }, n._fetchSegmentQualityFromModel = function(e, t, n) {
            const r = this._getModelInputs(e.index, t);
            return this._pendingModelFetch = e, ei.post(this._mimirURL, {
                json: {
                    inputs: r
                },
                timeout: 2e3
            }).then(n => {
                this._lastModelResponseTime = n.perfTimings.duration;
                const i = JSON.parse(n.body),
                    o = this._getStreamQualityFromModelOutput(i.outputs[0], r.availableQualities),
                    s = this._getStreamIndexFromQuality(o, t);
                if (this._segmentToStreamDecisionMap[e.index] = s, this._prevSegmentRequestIDs.length && this._prevModelInputs) {
                    const e = this._prevSegmentRequestIDs[this._prevSegmentRequestIDs.length - 1];
                    this.scanner.fire(Rn.BRAIN_ML_MODEL_INPUTS, un({
                        chunkRequestID: e,
                        duration: n.duration,
                        geolocation: this._geolocation
                    }, this._prevModelInputs))
                }
                return this._prevModelInputs = r, this._pendingModelFetch = null, s
            }).catch(t => {
                if (t instanceof Nr) {
                    const e = {
                        status: t.response.status,
                        resp: t.response.body,
                        url: this._mimirURL
                    };
                    this.scanner.fire(Rn.BRAIN_ML_MODEL_ERR, e), this._networkIssueCount++
                }
                if (t instanceof Ur) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(Rn.BRAIN_ML_MODEL_TIMEOUT, e), this._networkIssueCount++
                }
                if (t instanceof Fr) {
                    const e = {
                        url: this._mimirURL
                    };
                    this.scanner.fire(Rn.BRAIN_ML_MODEL_NET_ERR, e), this._networkIssueCount++
                }
                this._networkIssueCount >= 2 && this.scanner.resetBrain(!0);
                const n = e.streamIndex;
                return this._segmentToStreamDecisionMap[e.index] = n, this._pendingModelFetch = null, n
            })
        }, n._getFirstLookaheadSegmentNotInBuffer = function(e) {
            const t = this.scanner.sorcerer.video.sourceBuffer;
            let n = null;
            if (t && (n = t.buffered), null === n) return null;
            const r = this._getLookaheadSegments(e);
            for (let i = 0; i < r.length; i++) {
                const e = r[i].segment;
                if (!this._isSegmentInBuffer(e, n, this.scanner._video.duration, this.scanner._streams)) return r[i]
            }
            return null
        }, n._getLookaheadSegments = function(e, t = this.STREAM_TYPE_VIDEO) {
            const n = this.scanner._video,
                r = this.scanner.currentTime,
                i = r + this._getSecondsToLoadAhead(r, n.duration, e),
                o = [],
                s = this.scanner.sorcerer[t].activeStreamIndex,
                a = this.scanner._streams[t][s];
            if (!a) return o;
            for (let c = 0; c < a.segments.length; c++) {
                const e = a.segments[c];
                e.end < r || e.start > i || (r >= e.start && r < e.end || i >= e.start) && o.push({
                    segment: e,
                    index: c,
                    streamIndex: s
                })
            }
            return o
        }, n._clearSegmentsNotInBufferFromDecisionMap = function(e, t) {
            Object.keys(this._segmentToStreamDecisionMap).filter(t => -1 === e.indexOf(parseInt(t, 10))).forEach(e => {
                const n = this._segmentToStreamDecisionMap[e],
                    r = this.scanner._streams.video[n].segments[e];
                this._isSegmentInBuffer(r, t, this.scanner._video.duration, this.scanner._streams) || delete this._segmentToStreamDecisionMap[e]
            })
        }, n.getSegmentsToLoad = function(e, t, n) {
            const r = this._getLookaheadSegments(n, t),
                i = this.scanner.sorcerer[t].sourceBuffer;
            let o = null;
            i && (o = i.buffered), this._clearSegmentsNotInBufferFromDecisionMap(r.map(e => e.index), o);
            const s = [];
            for (let a = 0; a < r.length; a++) {
                const e = r[a].segment,
                    t = r[a].index,
                    n = this._isSegmentInBuffer(e, o, this.scanner._video.duration, this.scanner._streams),
                    i = t in this._segmentToStreamDecisionMap;
                n || !i && 1 !== this.whitelisted.length && 1 !== this.scanner._streams.video.length || s.push(t)
            }
            return s
        }, sn(t, [{
            key: "audioStreams",
            get: function() {
                return this._audioStreams
            },
            set: function(e) {
                this._audioStreams = e
            }
        }, {
            key: "scrubInProgress",
            set: function(e) {
                this._scrubInProgress = e
            },
            get: function() {
                return this._scrubInProgress
            }
        }]), t
    }(Ii),
    Pi = function() {
        function e(e, t) {
            this._video = e, this._getCurrentStream = t
        }
        var t = e.prototype;
        return t.start = function() {
            return clearInterval(this._checkGapInterval), this._checkGapInterval = setInterval(this._checkGap.bind(this), 200), this._checkGap()
        }, t.stop = function() {
            clearInterval(this._checkGapInterval)
        }, t.onSegmentAppended = function() {
            this._checkGap()
        }, t._checkGap = function() {
            const e = this._video.buffered,
                t = this._video.currentTime,
                n = this._getGapIndex(e, t);
            if (0 === this._video.readyState) return !1;
            if (this._video.paused) return !1;
            const r = this._video.duration;
            if (t >= r) return this._video.currentTime = r - .1, !0;
            if (e.length <= n) return !1;
            const i = e.start(n);
            return !(i >= r || i - t > .5 || 0 !== n || (this.stop(), this._correctFirstSegmentStart("audio", i), this._correctFirstSegmentStart("video", i), this._video.currentTime = i, 0))
        }, t._getGapIndex = function(e, t) {
            if (!e || !e.length) return null;
            let n = 0;
            for (; n < e.length; n++) {
                const r = e.start(n),
                    i = e.end(n);
                if (r > t && (0 === n || i - t <= .1)) break
            }
            return n >= 0 ? n : null
        }, t._correctFirstSegmentStart = function(e, t) {
            const n = this._getCurrentStream(0, e);
            n && n.segments && n.segments[0] && (n.segments[0].start = t)
        }, e
    }();
let Di = function() {
        function e(e, t = {}) {
            this._scanner = e, this.sessionId = t.sessionId, this.clipId = t.clipId
        }
        var t = e.prototype;
        return t.getLogAsQueryParam = function(e, t) {
            return this._buildCMCDQueryParam(this._getLog(e, t))
        }, t._getLog = function(e, t) {
            let n = {};
            return Object.assign(n, this._getStaticSessionData()), Object.assign(n, this._getDynamicSessionData(e, t)), n
        }, t._buildCMCDQueryParam = function(e) {
            return Dt({
                CMCD: this._getObjectAsAlphabetizedString(e)
            })
        }, t._getStaticSessionData = function() {
            return {
                sid: `"${this.sessionId}"`,
                cid: `"${this.clipId}"`,
                st: this._getStreamType(),
                sf: this._getStreamingFormat()
            }
        }, t._getDynamicSessionData = function(e, t) {
            return {
                pr: this._scanner.playbackRate,
                br: this._scanner.getBitrateAtTime(this._scanner.currentTime, t) / 1e3,
                ot: this._getObjectType(t),
                bl: this._getBufferLength(e)
            }
        }, t._getObjectType = function(e) {
            switch (e) {
                case "audio":
                    return "a";
                case "video":
                    return "v";
                default:
                    return "av"
            }
        }, t._getBufferLength = function(e) {
            return Math.round(1e3 * (parseFloat(e.end) - parseFloat(e.start)))
        }, t._getStreamType = function() {
            switch (this._scanner.displayName) {
                case "HLSLiveScanner":
                case "NativeHLSLiveScanner":
                    return "l";
                case "MediaSourceScanner":
                default:
                    return "v"
            }
        }, t._getStreamingFormat = function() {
            switch (this._scanner.displayName) {
                case "HLSLiveScanner":
                case "NativeHLSLiveScanner":
                    return '"hls"';
                case "MediaSourceScanner":
                default:
                    return '"dash"'
            }
        }, t._getObjectAsAlphabetizedString = function(e) {
            let t = [],
                n = "";
            for (var r = 0, i = Object.entries(e); r < i.length; r++) {
                const [e, n] = i[r];
                t.push({
                    key: e,
                    value: n
                })
            }
            return t.sort((function(e, t) {
                return e.key.localeCompare(t.key)
            })).forEach(({
                key: e,
                value: t
            }) => {
                n += `${e}=${t},`
            }), n.replace(/,\s*$/, "")
        }, e
    }(),
    Oi = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).reset(), r.manifestLoadDurations = [], n.mediaSourceScanner && (r._maxPreloadStreamIndex = n.mediaSourceScanner.maxPreloadStreamIndex), r
        }
        ln(t, e), sn(t, null, [{
            key: "displayName",
            get: function() {
                return "MediaSourceScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.vimeo.dash+json", "video/vnd.mpeg.dash.mpd"]
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.sorcerer && this.sorcerer.destroy(), this.reset()
        }, n.reset = function() {
            this._waitingOnSet = new Set, this._streamsForSegment = {}, Gn.browser.safari && (this._gapJumper = new Pi(this._video, this._getCurrentStream.bind(this))), this.resetBrain(), this._setupCMCDLogger(), this._ready = !1, this._startedPlaying = !1, this._manifest = null, this._streams = {}, this._streams.audio = [], this._streams.video = [], this._audioStreams = [], this._onReady = null, this._baseUrl = null, this._lastTargetStreamId = null, this._timeToSeekTo = null, this._resolveSeek = null, this._resolveStartPreload = null, this._reloadingExistingVideo = !1, this._lastStreamIndex = null, this._checkSwitchUp = !1, this._clearBufferAtTime = !1, this._preloadStream = null, this._removeBufferPromise = null, this._ranIntoBuffer = !1, this._restrictedStreamIndexes = [], this._switching = {}, this._lastDownloadBitrate = 0, this._preloadSegmentStreamIndex = null, clearInterval(this._loadSegmentsInterval), clearTimeout(this._slowLoadSegmentTimeout)
        }, n.resetBrain = function(e = !1) {
            const t = this._options.mediaSourceScanner || {};
            t.tests = this._options.tests;
            const n = Gn.ie;
            if (this._brain && this._brain.destroy(), e || n) {
                const e = pr(this._brain);
                return this._brain = new ki(this, t), void((e || n) && this.fire(Rn.BRAIN_ML_SWITCH_TO_SKYFIRE))
            }
            this._brain = new ki(this, t);
            const r = fr(t, "ml_brain");
            r && r.group && r.data.use_model && (this._brain = new Ri(this, t))
        }, n.preloadStream = function() {
            if (this._preloadStream) return this._preloadStream;
            let e = 0,
                t = 1;
            this._streams.audio.length && (t = 2);
            let n = this.sorcerer.video.activeStreamIndex;
            this._restrictedStreamIndexes.length && (n = this._restrictedStreamIndexes[0]);
            let r = 0;
            const i = this._brain.getSegmentsToLoad(!1, "video", n);
            i.length > 0 && (r = i[0]);
            let o = () => {};
            const s = (e = !1) => {
                    e && (n = this.sorcerer.video.activeStreamIndex), this._preloadSegmentStreamIndex = n, this._restartLoadSegmentsIntervalWithBackoff(!0)
                },
                a = n => {
                    e += 1, e < t || (n.segment === r && 0 === this._restrictedStreamIndexes.length ? this._getStreamIndexToLoadAndSwitchReason(!0).then(t => {
                        let {
                            index: r,
                            reasonForSwitch: i
                        } = t, a = {
                            reasonForSwitch: i
                        };
                        if (!1 !== r && r > n.stream) {
                            if (this.sorcerer.video.switchTo(r, !1, a), this._streams.audio.length) {
                                const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r);
                                this.sorcerer.audio.switchTo(e, !1)
                            }
                            return e = 0, void s(!0)
                        }
                        o()
                    }).catch(console.error) : o())
                };
            return this._preloadStream = new Promise((e, t) => {
                o = () => {
                    const t = this._getCurrentStream(n).segments[0].end,
                        r = this._getDuration(!0);
                    if (this.currentTime >= r && (this.currentTime = r), this.currentTime > t && (this.sorcerer.clear(), this._waitingOnSet = new Set), this.sorcerer.video.switchTo(n, !1), this._streams.audio.length) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n);
                        this.sorcerer.audio.switchTo(e, !1)
                    }
                    this.sorcerer.off("bufferqueueadd", a), this._preloadSegmentStreamIndex = null, this._ready = !0, e()
                }, this.sorcerer.on("bufferqueueadd", a), s()
            }), this._preloadStream
        }, n.loadManifest = function(e) {
            const t = this,
                n = Date.now();
            return Gn.browser.ie && e && -1 !== e.indexOf("archive_playlist") ? (setTimeout(() => {
                this._fireVideoError("MediaUnknownError", "An unknown error occurred.")
            }, 250), new Promise(() => {})) : ei({
                url: e,
                timeout: 1e4,
                type: Cr.MANIFEST
            }).then(t => (t.url && t.url !== e && -1 !== t.url.indexOf("live-archive") && (this._baseUrl = t.url.split("/").slice(0, -2).join("/")), this.manifestLoadDurations.push({
                url: e,
                status: t.status,
                duration: Date.now() - n
            }), this.fire(wn.MANIFEST_LOADED), t.text())).then(function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (rl) {
                        return Promise.reject(rl)
                    }
                }
            }((function(n) {
                let r;
                return function(i, o) {
                    var s = function() {
                        if (-1 !== e.indexOf(".mpd")) return function(e, t, n) {
                            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                        }(t._loadMediaManifest(), (function({
                            parseMPD: t
                        }) {
                            r = t(n, e)
                        }));
                        r = JSON.parse(n)
                    }();
                    return s && s.then ? s.then(o) : o()
                }(0, (function() {
                    return r
                }))
            }))).catch(t => {
                if (this.manifestLoadDurations.push({
                        url: e,
                        status: t.response && t.response.status,
                        duration: Date.now() - n
                    }), this.reset(), t instanceof Nr && 410 === t.response.status) return this.fire(wn.MEDIA_URL_EXPIRED), new Promise(() => {});
                throw t instanceof Nr && 400 === t.response.status ? this.fire(wn.MEDIA_URL_BAD_REQUEST, t.response.url) : t instanceof Ur && this.fire(wn.MANIFEST_TIMEOUT), t
            })
        }, n.setVideoSrc = function(e, t, n = !0) {
            if (n && !t && this._onReady) {
                var r;
                if (("metadata" === this._preload || "none" === this._preload && !this.paused) && !this._ready) return void this._onReady.then(() => {
                    const t = this.paused;
                    this.setVideoSrc(e, t, !1)
                }).catch(console.error);
                if ("sd-fallback" === (null == (r = this._telecineVideo.drmHandler) ? void 0 : r.state)) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !0, !1)
                }).catch(console.error);
                if ("auto" === this._preload) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !1, !1)
                }).catch(console.error)
            }
            t && this.reset(), t || !this.paused || this.sorcerer || (t = !0);
            let i = this._initializeManifest;
            t && (i = this._initialize);
            const o = e.split("/");
            o.pop();
            const s = `${o.join("/")}/`;
            this._reloadingExistingVideo = !t, this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then(e => ("string" == typeof this._baseUrl && -1 !== this._baseUrl.indexOf("live-archive") || (this._baseUrl = s), e)).then(i.bind(this)), t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)), this._onReady = this._addCatchToPromise(this._onReady)
        }, n.getBitrateAtTime = function(e, t) {
            if (!this.sorcerer) return 0;
            const n = this.sorcerer.streamIndexAtTime(e, t);
            return this._streams[t][n] ? this._streams[t][n].bitrate : 0
        }, n.lockStreamIndexes = function() {
            const e = this._restrictedStreamIndexes.map(e => this._streams.video.indexOf(this._streams.video[e])),
                t = !this.paused;
            if (t && (this._ignorePauseEvent = !0, this._video.pause()), this._switching.video = !1, this._brain.lock(e), !this._startedPlaying && "auto" !== this._preload) return;
            const n = Math.max(this.currentTime - 7, 0),
                r = Math.min(this.currentTime + 7, this._video.duration);
            this.sorcerer.removeBuffer(n, r).then(() => {
                !this._startedPlaying && "auto" === this._preload || this.ended ? this._loadSegments() : (this.seekToTime(this.currentTime), t && this.paused && (this._ignorePlayEvent = !0, this._video.play()))
            }).catch(console.error)
        }, n.seekToTime = function(e) {
            if (e === this.currentTime) return Promise.resolve();
            const t = null === this._timeToSeekTo;
            if (t || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, this._handleScrubbing(), this._ready)
                for (const n in this._streams)
                    if (this._streams[n].length > 0) {
                        const e = this.sorcerer[n].activeStreamIndex;
                        this.sorcerer[n].streams[e].abort()
                    }
            return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._onReady, this._removeBufferPromise]).then(() => {
                this._loadSegments()
            }).catch(console.error), this._paused && 0 === e && this.fire(En.SEEKING), t || this.play().catch(this._onPlayError.bind(this)), this._onReady.then(() => this._seekInProgressPromise).catch(e => {})
        }, n.takeSnapshot = function() {}, n.initDrm = function() {}, n.onstalled = function() {
            return !1
        }, n.onseeked = function(e) {
            this._startedPlaying && this._restartLoadSegmentsIntervalWithBackoff()
        }, n.onended = function(t) {
            return e.prototype.onended.call(this, t), !0
        }, n.onseeking = function(e) {
            this._startedPlaying
        }, n._handleScrubbing = function() {
            this._scrubStart(), clearTimeout(this._scrubTimeout), this._scrubTimeout = setTimeout(() => {
                this._scrubEnd()
            }, 200)
        }, n._scrubStart = function() {
            this._scrubbing || (this._scrubbing = !0, pr(this._brain) && (this._brain.scrubInProgress = !0))
        }, n._scrubEnd = function() {
            if (this._scrubbing = !1, pr(this._brain)) {
                this._brain.scrubInProgress = !1;
                const e = this.sorcerer.video.activeStreamIndex;
                this._brain.handleScrubEnd(e), this._loadSegments()
            }
        }, n.ontimeupdate = function(t) {
            if (!this.sorcerer) return !1;
            if (e.prototype.ontimeupdate.call(this), this._gapJumper && this._gapJumper.stop(), 0 === this.currentTime) return this._startedPlaying;
            if (this._timeToSeekTo) return !1;
            if (this._startedPlaying || (this._startedPlaying = !0), this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                const e = 2;
                this.sorcerer.removeBuffer(0, this._clearBufferAtTime - e), this._clearBufferAtTime = !1
            }
            const n = this.sorcerer.getDroppedFrameTotal();
            this.fire(wn.DROPPED_FRAMES, n);
            const r = this.sorcerer.getResponseSpeeds(),
                i = this._streams.video[this.sorcerer.video.activeStreamIndex],
                o = this._options.tests && this._options.tests.download_bitrate;
            if ((!o || !o.group) && i && this._brain.getCurrentSpeed) {
                const e = {
                    speed: this._brain.getCurrentSpeed(),
                    bitrate: i.bitrate,
                    speeds: r
                };
                this.fire(wn.BANDWIDTH, e)
            }
            const s = this._video.buffered.length;
            if (!s) return !0;
            const a = this._video.buffered.end(s - 1);
            return Math.ceil(a) === Math.ceil(this._video.duration) || (Math.abs(this.currentTime - a) < .2 ? (this._ranIntoBuffer || (this.fire(wn.STREAM_BUFFER_START, {
                hasLowerStreamIndex: this.sorcerer.video.activeStreamIndex > 0
            }), this._ranIntoBuffer = !0), !1) : void 0)
        }, n._isEnded = function() {
            return !!this.ended || Math.ceil(this.currentTime) === Math.ceil(this._video.duration)
        }, n._loadSegmentsIntervalTick = function() {
            return !!this.sorcerer && !this._isEnded() && (null !== this._preloadSegmentStreamIndex ? (this._loadPreloadSegments(), !0) : 0 !== this.currentTime || this._ready ? (this._loadSegments(), !0) : this._startedPlaying)
        }, n.onprogress = function() {
            this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && this._ranIntoBuffer && (this.fire(wn.STREAM_BUFFER_END), this._ranIntoBuffer = !1)
        }, n.onwaiting = function() {
            return !this._gapJumper || !this._gapJumper.start()
        }, n.onerror = function() {
            return !!this._video.error && (this._video.error.code === this._video.error.MEDIA_ERR_DECODE ? (this.fire(wn.SCANNER_ERROR, {
                reason: "encountered media decode error"
            }), !1) : e.prototype.onerror.call(this))
        }, n.pause = function() {
            e.prototype.pause.call(this)
        }, n.play = function() {
            return this._restartLoadSegmentsIntervalWithBackoff(), e.prototype.play.call(this, () => (this._resolveStartPreload && this._resolveStartPreload(), this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), this._onReady.then(() => Promise.resolve(this._seekInProgressPromise))))
        }, n.onpause = function() {
            return this._ignorePauseEvent ? (this._ignorePauseEvent = !1, !1) : (e.prototype.onpause.call(this), !0)
        }, n.onplay = function() {
            return !this._ignorePlayEvent || (this._ignorePlayEvent = !1, !1)
        }, n._addCallbackToPromise = function(e, t, n = !0) {
            let r = e.then(t);
            return n && (r = this._addCatchToPromise(r)), r
        }, n._addCatchToPromise = function(e) {
            return e.catch(e => (this.fire(wn.FILE_ERROR, {
                reason: e
            }), new Promise((e, t) => {})))
        }, n._handleBufferForSeek = function() {
            this._ready && this._streams.video[this.sorcerer.video.activeStreamIndex].bitrate / 1e3 > 12e3 && (this._removeBufferPromise = this.sorcerer.removeBuffer())
        }, n._startPreload = function(e, t) {
            return new Promise((n, r) => {
                "none" !== t || this._reloadingExistingVideo && !this.paused ? n(e) : this._resolveStartPreload = () => {
                    n(e), this._resolveStartPreload = null
                }
            })
        }, n._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
            return new Promise((t, n) => {
                const r = this._startedPlaying && 0 === e,
                    i = this._brain.canPlayFromTimeInStream(e, this._getCurrentStream());
                r || i ? t(e) : (this._handleBufferForSeek(), this._resolveSeek = t)
            }).then(e => {
                this._timeToSeekTo = null, this._seekInProgressPromise = null;
                const t = new Promise((e, t) => {
                    this._lastSeekReject = t;
                    const n = () => {
                        e(this._video.currentTime), this._video.removeEventListener("seeked", n)
                    };
                    this._video.addEventListener("seeked", n)
                });
                return this._video.currentTime = e, t
            })
        }, n._handlePreloadChanged = function(e, t) {
            "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload()
        }, n._avDurationDifference = function(e) {
            const t = e.audio.reduce((e, t) => e + t.duration, 0),
                n = e.video.reduce((e, t) => e + t.duration, 0),
                r = t / e.audio.length,
                i = n / e.video.length;
            return r + 4 < i ? i - r : 0
        }, n._manifestContainsSegmentSizes = function(e) {
            return e.video.every(e => e.segments.every(e => "size" in e))
        }, n._initializeManifest = function(e) {
            return new Promise((t, n) => {
                if (this._manifest = e, this._streams.video = this._sortVideoStreams(e.video), e.audio) {
                    const t = this._avDurationDifference(e);
                    if (t > 0) return this.fire(wn.AV_DURATION_MISMATCH, t), this.fire(wn.SCANNER_ERROR, {
                        reason: "Encountered A/V duration mismatch"
                    }), void n();
                    const r = e.audio.filter(e => "opus" === e.codecs),
                        i = e.audio.filter(e => "opus" !== e.codecs),
                        o = Gn.browser.safari || Gn.iOS || Gn.iPadOS || !MediaSource.isTypeSupported('audio/mp4; codecs="opus"') || !r.length ? i : r;
                    this._streams.audio = this._sortAudioStreams(o)
                }
                for (let r = 0; r < this._streams.video.length; r++) {
                    let t = 0;
                    if (e.audio) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r),
                            n = this._streams.audio[e];
                        n && (t = n.bitrate)
                    }
                    this._streams.video[r].audioBitrate = t
                }
                pr(this._brain) && this._streams.audio.length > 0 && (this._brain.audioStreams = this._streams.audio), this._initDrm(this._streams.video, this._streams.audio, this._manifest.key_info), this._manifestContainsSegmentSizes(e) || this.resetBrain(!0), this.fire(wn.STREAMS_LOADED, this._streams), t()
            })
        }, n._setUpSorcerer = function(e, t) {
            this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new Ai(e, t), this._video.src = URL.createObjectURL(this.sorcerer.mediaSource), this.successfulSegments = this.sorcerer.getSuccessfulSegments(), this.failedSegments = this.sorcerer.getFailedSegments(), this._restartLoadSegmentsIntervalWithBackoff()
        }, n._restartLoadSegmentsIntervalWithBackoff = function(e = !1) {
            this._restartLoadSegmentsInterval(500), clearTimeout(this._slowLoadSegmentTimeout), this._slowLoadSegmentTimeout = setTimeout(() => {
                this._restartLoadSegmentsInterval(5e3)
            }, 6e4), e && this._loadSegmentsIntervalTick()
        }, n._restartLoadSegmentsInterval = function(e) {
            clearInterval(this._loadSegmentsInterval), this._loadSegmentsInterval = setInterval(() => {
                this._loadSegmentsIntervalTick()
            }, e)
        }, n._getDuration = function(e = !1) {
            let t = e ? 1 / 0 : 0;
            for (const n in this._streams) this._streams[n].length && (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
            return t
        }, n._initialize = function(e) {
            return this._initializeManifest(e).then(() => {
                const t = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null,
                    n = this._brain.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, t).length - 1;
                let r = this._streams.video[0];
                this._restrictedStreamIndexes.length && (r = this._streams.video[this._restrictedStreamIndexes[0]]), void 0 !== this._maxPreloadStreamIndex && n <= this._streams.video.indexOf(e.video[this._maxPreloadStreamIndex]) && (r = this._streams.video[n]), this._setUpSorcerer(this._video, {
                    duration: this._getDuration(),
                    fetcherTimeout: 8e3,
                    fetcherRetryAbortErrors: !1
                }), this.sorcerer.on("srcnotsupported", () => {
                    this.fire(wn.SCANNER_ERROR, {
                        reason: "this codec is not supported for mediasource playback"
                    })
                });
                const i = this._streams.video.indexOf(r);
                for (const e in this._streams) this._streams[e].forEach((t, n) => {
                    let r = this._getSegmentUrl(n, "init", e);
                    this._useRangeRequests(n, e) && this._streams[e][n].init_segment_range && (r = {
                        url: r,
                        byteRange: this._getRangeForSegment(n, "init", e)
                    }), this.sorcerer.addStream(`${t.mime_type}; codecs="${this._streams[e][n].codecs}"`, r)
                });
                this.sorcerer.video.switchTo(i, !0, {
                    reasonForSwitch: 7
                }), this.sorcerer.on("queued", this._handleQueued.bind(this)), this.sorcerer.on("downloadabort", this._handleAborted.bind(this)), this.sorcerer.on("appendbufferend", this._handleAppendBufferEnd.bind(this)), this.sorcerer.on("downloadstart", this._handleDownloadStart.bind(this)), this.sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this.sorcerer.on("downloaderror", this._handleDownloadError.bind(this)), this.sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this.sorcerer.on("quotaexceedederror", this._handleQuotaExceededError.bind(this)), this.sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this.sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this.sorcerer.mediaSource.addEventListener("sourceended", () => {
                    this.fire(En.PROGRESS)
                })
            })
        }, n._sortVideoStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                const n = e.width * e.height * e.bitrate,
                    r = t.width * t.height * t.bitrate;
                return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
            })), t
        }, n._sortAudioStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                return e.bitrate * e.channels - t.bitrate * t.channels
            })), t
        }, n._useRangeRequests = function(e, t) {
            return !!this._streams[t][e].segments[0].range
        }, n._getRangeForSegment = function(e, t, n) {
            return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range
        }, n._getSegmentPriority = function(e, t, n = "video") {
            return "init" === t ? 0 : this._streams[n][e].segments[t].start
        }, n._getSegmentUrl = function(e, t, n = "video", r = !1) {
            if ("init" === t && !this._streams[n][e].init_segment_range && -1 === this._streams[n][e].init_segment.indexOf(".")) return function(e) {
                return cr(e).buffer
            }(this._streams[n][e].init_segment);
            let i = this._baseUrl;
            const o = this._manifest.base_url && -1 !== this._manifest.base_url.indexOf("//");
            if (o && (i = this._manifest.base_url), this._manifest.base_url && !o && (i += this._manifest.base_url), this._streams[n][e].base_url && (i += this._streams[n][e].base_url), this._useRangeRequests(e, n)) return i;
            if ("init" === t) return i += this._streams[n][e].init_segment, i;
            const s = this._streams[n][e].segments[t];
            s.url && (i += s.url);
            const a = -1 !== i.indexOf("akamaized"),
                c = -1 === i.indexOf("?") ? "?" : "&";
            return r && this.CMCDLogger && a && (i += `${c}${this.CMCDLogger.getLogAsQueryParam(s,n)}`), i
        }, n._key = function(e, t, n) {
            return `${e}:${t}:${n}`
        }, n._isFinalSegment = function(e, t, n) {
            return t === this._streams[n][e].segments.length - 1
        }, n._getCurrentlyLoadingStreamsForSegment = function(e, t) {
            const n = [],
                r = this._streamsForSegment[e];
            if (!r) return n;
            for (let i = 0; i < r.length; i++) this._waitingOnSet.has(this._key(r[i], e, t)) && n.push(r[i]);
            return n
        }, n.getCurrentStream = function(e = "video") {
            return this._getCurrentStream(0, e)
        }, n._getCurrentStream = function(e = 0, t = "video") {
            return void 0 !== this.sorcerer && (e = this.sorcerer[t].activeStreamIndex), this._streams[t][e]
        }, n._getStreamIndexToLoadAndSwitchReason = function(e) {
            let t = this._streams.video;
            const n = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null;
            if (t = this._brain.filterStreams(t, this._video.clientWidth, this._video.clientHeight, n), 0 === t.length) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this._switching.video && !pr(this._brain)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = t[t.length - 1];
            if (r.id !== this._lastTargetStreamId) {
                this._lastTargetStreamId = r.id;
                const e = {
                    index: this._streams.video.indexOf(r),
                    streams: this._streams.video
                };
                this.fire(wn.STREAM_TARGET_CHANGE, e)
            }
            const i = this._getCurrentStream();
            return this._brain.shouldPowerUp(t, i, e).then(e => !1 === e.index ? this._brain.shouldPowerDown(t, i).then(e => !1 === e.index ? {
                index: e.index,
                reasonForSwitch: e.reasonForSwitch
            } : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            }) : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            })
        }, n._loadSegmentsForType = function(e = "video") {
            this._getStreamIndexToLoadAndSwitchReason(!1).then(t => {
                let {
                    index: n,
                    reasonForSwitch: r
                } = t, i = {
                    reasonForSwitch: r
                };
                "audio" === e && (!1 === n && (n = this.sorcerer.video.activeStreamIndex), n = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n), this.sorcerer.audio.activeStreamIndex === n && (n = !1));
                let o = !1;
                !1 !== n && (o = n > this.sorcerer[e].activeStreamIndex, this._switching[e] = !0, this.sorcerer[e].switchTo(n, !0, i).then(() => {
                    this._switching[e] = !1
                }).catch(console.error));
                let s = o;
                const a = this._brain.getSegmentsToLoad(s, e, this._getCurrentStream()),
                    c = this.sorcerer[e].activeStreamIndex;
                for (let u = 0; u < a.length; u++) {
                    const t = this._getSegmentUrl(c, a[u], e, !0),
                        n = this._getCurrentlyLoadingStreamsForSegment(a[u], e);
                    if (n.length > 1) continue;
                    if (1 === n.length && c <= n[0]) continue;
                    const r = this._isFinalSegment(c, a[u], e),
                        i = {
                            stream: c,
                            segment: a[u],
                            type: e
                        },
                        o = this.sorcerer[e].streams[c];
                    let s = t;
                    this._useRangeRequests(c, e) && (s = {
                        url: s,
                        byteRange: this._getRangeForSegment(c, a[u], e)
                    });
                    const l = this._getSegmentPriority(c, a[u], e),
                        d = "video" === e;
                    let h = null;
                    0 === c && "video" === e && (h = 16e3);
                    let f = null;
                    try {
                        f = this._streams[e][c].segments[a[u]].size
                    } catch (rl) {}
                    o.addSegment(s, {
                        identifier: i,
                        isFinalSegment: r,
                        priority: l,
                        includeWithBandwidthChecks: d,
                        timeout: h,
                        size: f
                    }).catch(e => {
                        if (!(e instanceof fi || e instanceof Mr || e instanceof Ur)) throw e
                    })
                }
            }).catch(console.error)
        }, n._loadPreloadSegments = function() {
            for (const e in this._streams) {
                if (0 === this._streams[e].length) continue;
                let t = 0;
                const n = this._brain.getSegmentsToLoad(!1, e, this._getCurrentStream());
                n.length > 0 && (t = n[0]);
                let r = this._preloadSegmentStreamIndex;
                "audio" === e && (r = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, this._preloadSegmentStreamIndex));
                const i = this._key(r, t, e);
                if (this._waitingOnSet.has(i)) continue;
                const o = this._getSegmentUrl(r, t, e),
                    s = this._isFinalSegment(r, t, e),
                    a = this.sorcerer[e].streams[r],
                    c = {
                        stream: r,
                        segment: t,
                        type: e
                    },
                    u = !0;
                let l = o;
                this._useRangeRequests(r, e) && (l = {
                    url: l,
                    byteRange: this._getRangeForSegment(r, t, e)
                }), a.addSegment(l, {
                    identifier: c,
                    isFinalSegment: s,
                    loadOnly: u,
                    priority: 0
                }).catch(e => {
                    if (!(e instanceof fi || e instanceof Mr || e instanceof Ur)) throw e
                })
            }
        }, n._loadSegments = function() {
            return this._onReady && this._onReady.then(() => {
                for (const e in this._streams) this._streams[e].length > 0 && this._loadSegmentsForType(e)
            })
        }, n._handleQueued = function(e) {
            this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)), this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []), -1 === this._streamsForSegment[e.segment].indexOf(e.stream) && this._streamsForSegment[e.segment].push(e.stream)
        }, n._clearWaitingOn = function(e) {
            (this._streamsForSegment[e.segment] || []).forEach(t => {
                this._waitingOnSet.delete(this._key(t, e.segment, e.type))
            })
        }, n._handleAborted = function(e) {
            this._streamsForSegment[e.segment] && this._clearWaitingOn(e)
        }, n._handleAppendBufferEnd = function(e) {
            this.fire(wn.APPEND_BUFFER_END, {
                identifier: e
            }), this._restartLoadSegmentsIntervalWithBackoff(), this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1, this._clearBufferAtTime = this._streams.video[e.stream].segments[e.segment].start), this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
            const t = this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream());
            null !== this._timeToSeekTo && this._resolveSeek && t && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null), this._gapJumper && this._gapJumper.onSegmentAppended()
        }, n._handleDownloadStart = function(e) {
            this.fire(wn.DOWNLOAD_START, {
                identifier: e
            })
        }, n._handleDownloadEnd = function(e, t) {
            this.fire(wn.DOWNLOAD_END, {
                identifier: e,
                data: t
            })
        }, n._handleDownloadError = function(e, t) {
            this._clearWaitingOn(e);
            let n = wn.DOWNLOAD_ERROR;
            410 === t && (n = wn.MEDIA_URL_EXPIRED), this.fire(n, {
                identifier: e,
                status: t
            })
        }, n._handleDownloadTimeout = function(e, t) {
            this.fire(wn.DOWNLOAD_TIMEOUT, {
                identifier: e,
                data: t
            }), this._streamsForSegment[e.segment] && this._clearWaitingOn(e), "video" === e.type ? this._switching.video = !1 : "audio" === e.type && (this._switching.audio = !1)
        }, n._handleQuotaExceededError = function(e) {
            this.fire(wn.QUOTA_EXCEEDED_ERROR, {
                buffered: e
            })
        }, n._handleStreamChangeStart = function(e, t) {
            const n = {
                previousStreamIndex: this._manifest.video.indexOf(this._streams.video[e]),
                index: this._manifest.video.indexOf(this._streams.video[t]),
                streams: this._manifest.video
            };
            this.fire(wn.STREAM_CHANGE_START, n)
        }, n._handleStreamChange = function(e, t) {
            e > this._lastStreamIndex && this.currentTime > 0 && (this._checkSwitchUp = !0), this._lastStreamIndex = e;
            const n = {
                index: this._manifest.video.indexOf(this._streams.video[e]),
                streams: this._manifest.video,
                metadata: t
            };
            this.fire(wn.STREAM_CHANGE, n)
        }, n._initDrm = function(e = [], t = [], n = {}) {
            const r = this._telecineVideo.drmHandler;
            if (!r) return;
            const i = {
                audio: t.map(e => `${e.mime_type};codecs="${e.codecs}"`),
                video: e.map(e => `${e.mime_type};codecs="${e.codecs}"`)
            };
            r.init(this, i, n), r.setFallbackCallback(() => this.pause())
        }, n._setupCMCDLogger = function() {
            var e, t;
            (null == (e = this._options.tests) || null == (t = e.cmcd) ? void 0 : t.group) && (this.CMCDLogger = new Di(this, this._options.sessionMetadata))
        }, n._loadMediaManifest = function() {
            return import ("./media-manifest.module.js")
        }, sn(t, [{
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._handlePreloadChanged(this._preload, e), this._preload = e
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._video
            }
        }, {
            key: "videoWidth",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.height : this._video.videoHeight
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function(e = []) {
                this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._onReady.then(() => this.lockStreamIndexes()).catch(console.error))
            }
        }, {
            key: "currentTime",
            get: function() {
                return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
            },
            set: function(e) {
                (this._startedPlaying || 0 !== e) && this.seekToTime(e)
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._lastDownloadBitrate
            }
        }, {
            key: "brainDebug",
            get: function() {
                const e = this.sorcerer && this._brain && this._brain.getCurrentSpeed ? this._brain.getCurrentSpeed() : null;
                let t = this.sorcerer && this.sorcerer.getResponseSpeeds ? this.sorcerer.getResponseSpeeds() : null;
                return t = t ? t.slice(-20) : [], {
                    currentSpeed: e,
                    responseSpeeds: t
                }
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this.sorcerer ? this.sorcerer.video.activeStreamIndex > 0 : null
            }
        }]), t
    }(Or),
    Ci = function() {
        function e(e) {
            this._scanner = e, this._currentTime = 0, this._latencyInterval = setInterval(this._onLatencyInterval.bind(this), 500)
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._latencyInterval)
        }, t._onLatencyInterval = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return;
            this._currentTime = e.currentTime;
            const n = this._computeLatency();
            null !== n && (this._latency = n, this._scanner.lowLatencyMode ? Gn.browser.ie || Gn.browser.safari || null !== this._scanner.presentationDelay && (e.playbackRate = 1) : e.playbackRate = 1)
        }, t._estimateLiveEdge = function() {
            const e = this._scanner.getCurrentStream();
            if (!e) return null;
            const t = e.segments[0],
                n = this._scanner.videoElement.buffered.length && (null == t ? void 0 : t.start);
            return t && e.hasProgramDateTime && n ? n + (Date.now() - t.programDateTime) / 1e3 : e.edge
        }, t._computeLatency = function() {
            const e = this._estimateLiveEdge();
            return null === e || 0 === this._currentTime ? null : e - this._currentTime
        }, t._getForwardBufferLength = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return 0;
            const n = e.buffered.length;
            return n ? e.buffered.end(n - 1) : t.edge - this._currentTime
        }, sn(e, [{
            key: "latency",
            get: function() {
                return this._latency
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                const e = this._estimateLiveEdge(),
                    t = this._scanner.presentationDelay,
                    n = this._scanner.getCurrentStream();
                return null === e || null === t || null === n ? 0 : Math.min(n.edge, e - t - this.edgeStalled)
            }
        }, {
            key: "edgeStalled",
            get: function() {
                const e = this._scanner.getCurrentStream();
                if (!e) return 0;
                const t = 3 * (this._scanner.lowLatencyMode && e.partTargetDuration || e.targetDuration);
                return Math.max(e.age - t, 0)
            }
        }]), e
    }();
const xi = [1, 2, 5];
let Li = function(e) {
    function t(t, n = {}) {
        var r;
        return (r = e.call(this, t, n) || this)._UPSHIFT_BANDWIDTH_THRESHOLD = .4, r._DOWNSHIFT_BANDWIDTH_THRESHOLD = .6, r.consecutiveStreamIndex = {}, r.isNewPlayback = !0, r
    }
    ln(t, e), sn(t, [{
        key: "displayName",
        get: function() {
            return "Live"
        }
    }]);
    var n = t.prototype;
    return n.optimalStream = function(e, t) {
        var n, r;
        this.isNewPlayback && ((null == (r = this.scanner.sorcerer) ? void 0 : r.getResponseSpeeds().length) >= 2 && (this.isNewPlayback = !1));
        if (1 === e.length) return {
            index: 0,
            reasonForSwitch: 6
        };
        if (this.isNewPlayback) {
            let t = 0,
                n = 0,
                r = this.scanner.videoElement.clientHeight,
                i = [];
            for (let o = 0; o < e.length; o++) {
                let s = e[o].height;
                i.push(s), s < r && s > n && (t = o, n = e[o].height)
            }
            return t = Math.max(0, t - 1), {
                index: t,
                reasonForSwitch: 4
            }
        }
        const i = this.getCurrentSpeed();
        let o = t,
            s = t;
        for (let f = 0; f < e.length; f++) i * this._UPSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (o = f), i * this._DOWNSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (s = f);
        const a = t < o ? o : s;
        this._clearConsecutiveStreamIndexes(a), this.consecutiveStreamIndex[a]++;
        const c = this.scanner.lowLatencyMode ? .5 : 1.5,
            u = this.scanner.segmentLength * c,
            l = this.scanner.videoElement,
            d = l.buffered,
            h = null == (n = this._options.mediaSourceScanner) ? void 0 : n.droppedFrameSwitchPercent;
        return d && 0 !== d.length ? d.end(d.length - 1) - l.currentTime < u ? {
            index: 0 !== t ? t - 1 : 0,
            reasonForSwitch: 1
        } : t > 0 && !isNaN(h) && this.hasTooManyDroppedFrames(t, this.scanner.getCurrentStream(), h) ? (this.blacklist(t), this.scanner.fire(wn.DROPPED_FRAME_PERCENT_EXCEEDED), {
            index: t - 1,
            reasonForSwitch: 2
        }) : this.consecutiveStreamIndex[a] > 2 && a !== t ? {
            index: a,
            reasonForSwitch: 3
        } : {
            index: t,
            reasonForSwitch: null
        } : {
            index: 0,
            reasonForSwitch: 5
        }
    }, n.getCurrentSpeed = function() {
        var e;
        return null == (e = this.scanner.sorcerer) ? void 0 : e.getCurrentSpeed({
            type: "average",
            howMany: 5,
            weights: xi
        })
    }, n._clearConsecutiveStreamIndexes = function(e) {
        this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
        for (const t in this.consecutiveStreamIndex) this.consecutiveStreamIndex.hasOwnProperty(t) && parseInt(t, 10) !== e && (this.consecutiveStreamIndex[t] = 0)
    }, n.getAvailabilityStart = function(e) {
        return this._getSegmentAvailabilityStart(e.edge)
    }, n.getAvailabilityEnd = function(e) {
        return this._getSegmentAvailabilityEnd(e.edge)
    }, n.getSegmentsToLoad = function(e, t, n) {
        var r, i, o;
        const {
            currentTime: s,
            sorcerer: a,
            bufferTarget: c
        } = this.scanner, u = null == (r = a[t]) || null == (i = r.sourceBuffer) ? void 0 : i.buffered, l = (null == u ? void 0 : u.length) ? u.start(u.length - 1) : 0, d = kt(Math.max(s, l), u);
        if (!e && d >= c) return [];
        const h = this._getSegmentAvailabilityStart(n.edge),
            f = this._getSegmentAvailabilityEnd(n.edge),
            p = this.scanner.lowLatencyMode && (null == (o = n.parts) ? void 0 : o.length),
            m = (p ? n.parts : n.segments).filter(t => !!t.uri && (e || !this.scanner.isSegmentAdded(t)) && !(t.end < h || t.start > f));
        return p && m.forEach((e, t) => {
            for (; e = e.dependentOn;) m.includes(e) || this.scanner.isStreamSegmentAdded(e) || m.splice(t, 0, e)
        }), a[t].activeStreamIndex, m
    }, n._getSegmentAvailabilityStart = function(e) {
        const t = e - this._getPresentationDelay();
        return Math.max(0, t)
    }, n._getSegmentAvailabilityEnd = function(e) {
        const t = this._getPresentationDelay(),
            n = this.scanner.bufferTarget,
            r = e - Math.max(0, t - n);
        return Math.max(0, r)
    }, n._getPresentationDelay = function() {
        return this.scanner.presentationDelay || this.scanner.manifest.presentationDelay
    }, t
}(ki);
const Mi = ["disabled", "hidden", "showing"],
    Ni = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
    Fi = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
    Ui = new WeakMap,
    Bi = new WeakMap;
let ji = function() {
    function e({
        kind: e,
        src: t = null,
        label: n = "",
        language: r = "",
        id: i = ar()
    }, o) {
        if (-1 === Ni.indexOf(e)) throw gr(12, "SYNTAX_ERR", "Syntax Error");
        ft(this), Object.defineProperties(this, {
            kind: {
                value: e,
                enumerable: !0
            },
            label: {
                value: n,
                enumerable: !0
            },
            language: {
                value: r,
                enumerable: !0
            },
            id: {
                value: `${i}`,
                enumerable: !0
            },
            rtl: {
                value: -1 !== Fi.indexOf(r.substr(0, 2)),
                enumerable: !0
            }
        }), this.video = o, this.src = t, this._modeHasBeenSet = !1, Ui.set(this, "disabled")
    }
    return e.prototype.dispatchEvent = function(e) {
        this.fire(e, {
            target: this
        })
    }, sn(e, [{
        key: "mode",
        get: function() {
            return Ui.get(this)
        },
        set: function(e) {
            if (Mi.indexOf(e) > -1) {
                if (this._modeHasBeenSet = !0, Ui.get(this) === e) return;
                Ui.set(this, e), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e), this.dispatchEvent("modechange")
            }
        }
    }, {
        key: "src",
        get: function() {
            return Bi.get(this)
        },
        set: function(e) {
            Bi.set(this, e), this.video.fire(wn.TEXT_SRC_UPDATE, this)
        }
    }, {
        key: "cues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : []
        }
    }, {
        key: "activeCues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : []
        }
    }]), e
}();

function Vi(e) {
    var t = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(e);
    if (!t) return -1;
    var n = parseInt(t[4], 10) / 1e3;
    return n += parseInt(t[3], 10), t[2] && (n += 60 * parseInt(t[2], 10)), t[1] && (n += 60 * parseInt(t[1], 10) * 60), n
}

function Hi(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Xi(e, t) {
    try {
        var n = e()
    } catch (rl) {
        return t(rl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function qi(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const Gi = Gn.browser.ie || Gn.browser.edge ? .5 : .2;

function zi() {}

function Wi(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }
}

function Yi(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function $i(e, t) {
    if (!t) return e && e.then ? e.then(zi) : Promise.resolve()
}
let Ki = function(e) {
    function t(t, n = {}) {
        var r, i, o;
        (o = e.call(this, t, n) || this)._playInitiated = !1, o._captionsEnabled = !1, o._STREAM_SWITCH_CHECK_INTERVAL = 2e3, o._DOWN_SHIFT_CHECK_INTERVAL = 1e4, o.reset();
        const s = n.lowLatencyMode ? 5 : 12;
        return o.bufferTarget = n.bufferTarget || s, o.presentationDelay = n.presentationDelay || s, o.lowLatencyMode = n.lowLatencyMode, o._timeoutTest = null == (r = o._options.tests) || null == (i = r.llhls_timeout) ? void 0 : i.group, window.addEventListener("online", () => {
            o.play()
        }), o
    }
    ln(t, e), sn(t, null, [{
        key: "displayName",
        get: function() {
            return "HLSLiveScanner"
        }
    }, {
        key: "supported",
        get: function() {
            return "undefined" != typeof MediaSource && MediaSource.isTypeSupported
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/x-mpegURL"]
        }
    }, {
        key: "supportsPlaybackRate",
        get: function() {
            return !1
        }
    }]);
    var n = t.prototype;
    return n.deactivate = function() {
        e.prototype.deactivate.call(this), this.reset()
    }, n.reset = function() {
        var e, t, n;
        null == (e = this._sorcerer) || e.destroy(), null == (t = this._manifestLoader) || t.stop(), null == (n = this._latencyController) || n.destroy(), this._videoReady = new At, this._sorcerer = null, this._streams = {}, this._streams.video = [], this._streams.audio = [], this._lastStreamIndex = 0, this._isOnline = !1, this._hasLiveEventEnded = !1, this._timeSinceLastStreamSwitchCheck = 0, this._timeSinceLastDownShift = Number.NEGATIVE_INFINITY, this._lastStallCurrentTime = -1, this._abr = new Li(this, this._options), this._latencyController = new Ci(this), this._restrictedStreamIndexes = [], this._switching = {}, this._segmentsAdded = {}, this._captionsAdded = {}
    }, n.endLive = function() {
        var t;
        this._isOnline = !1, null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._sorcerer.endOfStream()), this._hasLiveEventEnded = !0, e.prototype.deactivate.call(this), this.fire(En.ENDED)
    }, n._signalOnline = function() {
        this._isOnline || (this._isOnline = !0, this.fire(An.STREAM_ONLINE))
    }, n._signalOffline = function() {
        this._isOnline && (this._isOnline = !1, this.fire(An.STREAM_OFFLINE))
    }, n._toggleConnection = function(e) {
        e ? this._signalOnline() : this._signalOffline()
    }, n._loadManifest = function(e) {
        try {
            const t = this;
            if (t._hasLiveEventEnded) return;
            t._manifestLoader && (t._manifestLoader.stop(), t._manifestLoader.off());
            let n = [t._loadMediaManifest()];
            return t.video.metadata.p2pReady && n.push(t.video.metadata.p2pReady), Hi(Promise.allSettled(n), (function([n]) {
                const {
                    M3U8Loader: r,
                    PLAYLIST_UPDATE: i,
                    PLAYLIST_ERROR: o,
                    convertTsCodecs: s
                } = n.value;
                return t._manifestLoader = new r, t._manifestLoader.lowLatencyMode = t.lowLatencyMode, t._manifestLoader.on(i, t._onPlaylistUpdate.bind(t)), t._manifestLoader.on(o, e => {
                    t._signalOffline()
                }), qi(Xi((function() {
                    const n = t.video.metadata.playlistRefreshUrl;
                    return Hi(t._manifestLoader.start(e, n), (function(e) {
                        t._manifest = e, t._signalOnline()
                    }))
                }), (function(e) {
                    throw t._signalOffline(), t.endLive(), e
                })), (function(e) {
                    t._streams.video = Qi(function(e) {
                        return e.filter(t => t.codecs.split(".")[0] === e[0].codecs.split(".")[0])
                    }(function(e) {
                        const t = e.slice(0);
                        return t.sort((function(e, t) {
                            const n = e.width * e.height * e.bitrate,
                                r = t.width * t.height * t.bitrate;
                            return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
                        })), t
                    }(t._manifest.video))), t._streams.audio = Qi(pt(mt(t._streams.video, ({
                        audio: e
                    }) => e)));
                    const {
                        index: n,
                        reasonForSwitch: r
                    } = t._getStream("video", !0);
                    let i = {
                        reasonForSwitch: r
                    };
                    return Hi(t._manifestLoader.switchTo("video", n), (function() {
                        let e, r = [];
                        if (t._streams.audio.length) {
                            let {
                                index: n
                            } = t._getStream("audio", !0);
                            e = n, r.push(t._manifestLoader.switchTo("audio", e))
                        }
                        if (t.manifest.captions && t.manifest.captions.length > 0) {
                            const {
                                index: e
                            } = t._getStream("subtitles", !0);
                            r.push(t._manifestLoader.switchTo("subtitles", e))
                        }
                        return Hi(Promise.all(r), (function() {
                            var r, o;
                            null == (r = t._sorcerer) || r.destroy(), t._sorcerer = new Ai(t._video, {
                                fetcherRetryAbortErrors: !1,
                                fetcherTimeout: 8e3
                            }), t._sorcerer.initFrameDropper(), t._streams.video.forEach(e => {
                                t._sorcerer.addStream(s(dr(t._manifestLoader.activeStream("video").mimeType, e.codecs)), e.initSegment)
                            }), t._streams.audio.forEach(e => {
                                t._sorcerer.addStream(s(dr(t._manifestLoader.activeStream("audio").mimeType, e.codecs)), e.initSegment)
                            }), t.fire(wn.STREAMS_LOADED, t._streams), t.manifest.captions && t.manifest.captions.length > 0 && (t.manifest.captions.forEach(t._loadTextTrack.bind(t)), t.fire(wn.TEXT_TRACKS_AVAILABLE)), t._setUpMediaSorcererEvents(), t._sorcerer.video.switchTo(n, !1, i), t._streams.audio.length && (null == (o = t._sorcerer.audio) || o.switchTo(e, !1))
                        }))
                    }))
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._refreshManifest = function() {
        try {
            const e = this;
            return function(e) {
                if (e && e.then) return e.then(zi)
            }(Xi((function() {
                return Hi(e._manifestLoader.update(), (function() {
                    e._signalOnline()
                }))
            }), (function() {
                e._signalOffline()
            })))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._setUpMediaSorcererEvents = function() {
        this._sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this._sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this._sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this._sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this._sorcerer.on("downloadabort", this._handleDownloadAbort.bind(this)), this._sorcerer.on("appendbufferend", this._handleBufferAppend.bind(this))
    }, n._handleDownloadEnd = function(e, t) {
        if (e && e.isInitSegmentRequest) return;
        const n = this._getCurrentStream();
        t.extraContext = {
            liveAvail: {
                start: this._abr.getAvailabilityStart(n),
                end: this._abr.getAvailabilityEnd(n)
            }
        }, this.fire(wn.DOWNLOAD_END, {
            identifier: e,
            data: t
        })
    }, n._handleDownloadTimeout = function(e, t) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e), this._switching[e.type] = !1, this.fire(wn.DOWNLOAD_TIMEOUT, {
            identifier: e,
            data: t
        }))
    }, n._handleDownloadAbort = function(e) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e))
    }, n._handleStreamChangeStart = function(e, t) {
        const n = {
            previousStreamIndex: this._streams.video.indexOf(this._streams.video[e]),
            index: this._streams.video.indexOf(this._streams.video[t]),
            streams: this._streams.video
        };
        this.fire(wn.STREAM_CHANGE_START, n)
    }, n._handleStreamChange = function(e, t = {}) {
        this.fire(wn.STREAM_CHANGE, {
            index: e,
            streams: this._streams.video,
            metadata: t
        })
    }, n._handleBufferAppend = function(e) {
        const {
            type: t,
            stream: n
        } = e, r = this.sorcerer[t].sourceBuffer.buffered, i = this._getSegmentById(e);
        i && r.length && (this._streams[t][n].playlist.timeOffset = r.end(r.length - 1) - (i.end - i.timeOffset))
    }, n._key = function({
        type: e,
        segment: t,
        part: n
    }) {
        return `${e}_${t}_${n}`
    }, n._getSegmentById = function({
        type: e,
        stream: t,
        segment: n,
        part: r
    }) {
        const i = this._streams[e][t].getSegmentBySN(n);
        return (null == i ? void 0 : i.getPart(r)) || i
    }, n._clearSegment = function(e) {
        if (e.part > 0) {
            const t = un(un({}, e), {}, {
                part: e.part - 1
            });
            this._clearSegment(t)
        }
        const t = this._key(e);
        delete this._segmentsAdded[t]
    }, n.isSegmentAdded = function(e) {
        return !!this._segmentsAdded[this._key(e)]
    }, n.isStreamSegmentAdded = function(e) {
        const t = this._key(e),
            n = this._sorcerer[e.type].activeStreamIndex;
        return !!this._segmentsAdded[t] && this._segmentsAdded[t].stream === n
    }, n._onPlaylistUpdate = function(e, t) {
        try {
            const r = this,
                {
                    type: i
                } = e;
            var n;
            return r.fire(wn.STREAM_UPDATED, e), "subtitles" === i ? void(r._captionsEnabled && (null == (n = r.manifest.captions) ? void 0 : n.length) > 0 && r._addTextTrackCue()) : (t || r._loadSegmentsForType(i), r._toggleConnection(r._hasNewSegments(i) || !r._atDurationEnd()), r._checkForPlaybackGap(), (r.lowLatencyMode || r.video.metadata.p2pReady) && r._checkForPlaybackStall(), Hi())
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._loadTextTrack = function({
        label: e,
        language: t
    }, n) {
        if (!this._captionsTrack) {
            const r = new ji({
                label: e,
                id: n,
                kind: "captions",
                language: t
            }, this._telecineVideo);
            this._telecineVideo.textTracks = ir([r]), this._captionsTrack = this.addTextTrack(r)
        }
    }, n._addTextTrackCue = function() {
        try {
            const e = this;
            return Hi(e._videoReady, (function() {
                e.manifest.captions && e.manifest.captions[0].segments.forEach(Wi((function(t) {
                    const n = `${t.type}_${t.mediaSequenceNumber}`;
                    if (!e._captionsAdded[n]) return e._captionsAdded[n] = !0, Hi(ei(t.url).text(), (function(t) {
                        const n = function(e) {
                                var t = 0,
                                    n = e.split(/(?:(?:\r\n|\n){2,})/),
                                    r = [],
                                    i = null;
                                do {
                                    0 === t && /^\uFEFF?WEBVTT(?: .*)?/.test(n[t]) && t++, (i = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(n[t])) && r.push({
                                        startTime: Vi(i[2]),
                                        endTime: Vi(i[3]),
                                        text: i[5]
                                    }), t++
                                } while (t < n.length);
                                return r
                            }(t),
                            r = function(e) {
                                const t = e.match(/=MPEGTS:(\d+),/);
                                return (t && t[1] || 0) / 9e4
                            }(t);
                        n.forEach(t => {
                            t.startTime = r + t.startTime, t.endTime = r + t.endTime;
                            const n = new(window.VTTCue || window.TextTrackCue)(t.startTime, t.endTime, t.text);
                            e._captionsTrack.addCue(n)
                        })
                    }))
                })))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._hasNewSegments = function(e) {
        var t;
        const n = this._getCurrentStream(e),
            r = 3 * (this.lowLatencyMode ? 3 : 1);
        return (null == (t = n.playlist) ? void 0 : t.misses) < r
    }, n._waitForEnoughSegments = function() {
        try {
            var e, t, n;
            const r = this;
            if (!(null == (e = r._options) || null == (t = e.tests) || null == (n = t.live_verify_duration) ? void 0 : n.group)) return Promise.resolve();
            const i = 1e3 * r.bufferTarget,
                o = r.bufferTarget / 2,
                s = Date.now();
            return Hi(r._videoReady, (function() {
                const e = Wi((function() {
                    return r.availableDuration >= o ? Promise.resolve(!0) : Date.now() - s >= i ? Promise.resolve(!1) : Hi(bt(100), (function() {
                        return Hi(r._refreshManifest(), (function() {
                            return e()
                        }))
                    }))
                }));
                return e()
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._loadSegments = function() {
        try {
            const e = this;
            return Hi(e._videoReady, (function() {
                for (const t in e._streams) e._streams[t].length > 0 && e._loadSegmentsForType(t)
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._loadSegmentsForType = function(e) {
        try {
            const t = this;
            return Hi(t._videoReady, (function() {
                const {
                    index: n,
                    reasonForSwitch: r
                } = t._getStream(e);
                let i;
                return Yi((function() {
                    if (n >= 0 && n !== t.sorcerer[e].activeStreamIndex) return i = n > t.sorcerer[e].activeStreamIndex, t._switching[e] = !0, Hi(t._manifestLoader.switchTo(e, n), (function() {
                        let i = {
                            reasonForSwitch: r
                        };
                        t.sorcerer[e].switchTo(n, !0, i).then(() => {
                            t._switching[e] = !1
                        }).catch(console.error)
                    }))
                }), (function() {
                    return Hi(bt(0), (function() {
                        const n = t.lowLatencyMode && void 0 !== i,
                            r = t._sorcerer[e].activeStreamIndex,
                            o = t._getCurrentStream(e, r),
                            s = t._abr.getSegmentsToLoad(n, e, o),
                            a = t._getSegmentTimeoutMs();
                        s.forEach(n => {
                            const i = t._key(n),
                                s = {
                                    type: e,
                                    stream: r,
                                    segment: n.segment,
                                    part: n.part
                                },
                                c = "video" === e && !n.hint;
                            let u = a;
                            if (n.hint && t._playInitiated && n.start > t.currentTime) {
                                const e = 1e3 * (n.start - t.currentTime);
                                u = Math.min(8e3, e + a)
                            }
                            const l = o.bitrate / 8 * n.duration,
                                d = t.sorcerer[e].streams[r],
                                h = t._preventExpiredSegmentUsage(n);
                            d.addSegment(h, {
                                identifier: s,
                                includeWithBandwidthChecks: c,
                                priority: n.programDateTime,
                                excludeConnectTime: t.lowLatencyMode,
                                timeout: t._timeoutTest || t.lowLatencyMode ? u : 8e3,
                                size: t._timeoutTest || t.lowLatencyMode ? l : void 0
                            }).catch(e => {
                                e instanceof fi || e instanceof Mr || t._clearSegment(s)
                            }), t._segmentsAdded[i] = s
                        })
                    }))
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._preventExpiredSegmentUsage = function(e) {
        var t;
        let n = null == e ? void 0 : e.url;
        const r = null == (t = this._manifestLoader) ? void 0 : t.baseUrl;
        return r && n && !n.startsWith(r) && (n = `${r}${e.uri}`), n
    }, n._getStream = function(e, t = !1) {
        var n, r;
        if (this._switching[e]) return {
            index: -1,
            reasonForSwitch: null
        };
        if ("subtitles" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.subtitles[e.currentRenditions.subtitles].index,
                reasonForSwitch: null
            }
        }
        if ("audio" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.audio[e.currentRenditions.audio].index,
                reasonForSwitch: null
            }
        }
        if (!t && sr(this._timeSinceLastStreamSwitchCheck) < this._STREAM_SWITCH_CHECK_INTERVAL) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        this._timeSinceLastStreamSwitchCheck = or();
        const i = null == (n = this.video) || null == (r = n.metadata) ? void 0 : r.percentShown,
            o = this._abr.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, i);
        if (0 === o.length) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        const {
            index: s,
            reasonForSwitch: a
        } = this._abr.optimalStream(o, this._lastStreamIndex), c = o[s], u = this._streams.video.indexOf(c);
        if (u >= 0 && (t || u !== this._lastStreamIndex)) {
            if (u > this._lastStreamIndex && sr(this._timeSinceLastDownShift) < this._DOWN_SHIFT_CHECK_INTERVAL) return {
                index: this._lastStreamIndex,
                reasonForSwitch: a
            };
            u < this._lastStreamIndex && (this._timeSinceLastDownShift = or());
            const e = {
                index: u,
                streams: this._streams.video
            };
            return this.fire(wn.STREAM_TARGET_CHANGE, e), this._lastStreamIndex = u, {
                index: u,
                reasonForSwitch: a
            }
        }
        return {
            index: this._lastStreamIndex,
            reasonForSwitch: a
        }
    }, n.getCurrentStream = function(e = "video") {
        return this._getCurrentStream(e)
    }, n._getCurrentStream = function(e = "video", t = 0) {
        return void 0 !== this._sorcerer && null !== this._sorcerer && (t = this._sorcerer[e].activeStreamIndex), this._streams[e][t]
    }, n._checkForPlaybackStall = function() {
        if (this._video.currentTime === this._lastStallCurrentTime && or() - this._lastStallCheckTime >= 1e3 && this._shouldBeMakingProgress()) {
            const e = "Jumping forward 0.1s" + ` because of stall at time of ${this._video.currentTime}`;
            this.fire(An.STALL_JUMP, {
                msg: e
            }), this._video.currentTime += .1
        }
        this._lastStallCurrentTime = this._video.currentTime, this._lastStallCheckTime = or()
    }, n._shouldBeMakingProgress = function() {
        return 0 !== this._video.readyState && !!this._video.buffered.length && !this._video.paused && this._hasContentFor(this._video.buffered, this._video.currentTime)
    }, n._hasContentFor = function(e, t) {
        for (let n = 0; n < e.length; n++)
            if (!(t < e.start(n) - .1 || t > e.end(n) - .5)) return !0;
        return !1
    }, n._checkForPlaybackGap = function() {
        const e = this.buffered;
        if (!e.length) return;
        const t = e.length,
            n = this._video.currentTime;
        let r, i, o;
        try {
            r = function(e, t) {
                if (!e || !e.length) return null;
                if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
                let n;
                for (let r = 0; r < e.length; r++)
                    if (e.start(r) > t && (0 === r || e.end(r - 1) - t <= .5)) {
                        n = r;
                        break
                    }
                return n >= 0 ? n : null
            }(e, n)
        } catch (rl) {
            throw DOMException, rl
        }
        if (null === r) return;
        if (0 === this._video.readyState) return;
        if (this._video.paused) return;
        if (t <= r) return;
        try {
            i = e.start(r), o = e.end(t - 1)
        } catch (rl) {
            throw DOMException, rl
        }
        const s = i - n,
            a = o - i,
            c = this.lowLatencyMode ? 1 : 2;
        if (a > 0 && a <= this.segmentLength * c) {
            const e = "Preventing jump too close to buffered end time." + ` Would have jumped to: ${i}.` + ` Last buffered end time ${o}.`;
            this.fire(An.BUFFER_GAP_JUMP_PREVENT, {
                msg: e
            })
        } else {
            if (0 === r) {
                const e = `Jumping forward ${s}` + ` seconds because of gap before start time of ${i}`;
                this.fire(An.BUFFER_GAP_JUMP, {
                    msg: e
                })
            } else {
                const t = `Jumping forward ${s} seconds because of gap starting at` + ` ${e.end(r-1)} and ending at ${i}`;
                this.fire(An.BUFFER_GAP_JUMP, {
                    msg: t
                })
            }
            this._video.currentTime = i + .1
        }
    }, n._atDurationEnd = function() {
        const e = this.buffered;
        return !!(e && e.length && this._video.currentTime + Gi > e.end(e.length - 1))
    }, n.setVideoSrc = function(e) {
        try {
            const t = this;
            return Hi(t._startPreload(t._preload), (function() {
                return Hi(t._loadManifest(e), (function() {
                    t._video.src = URL.createObjectURL(t._sorcerer.mediaSource), t._videoReady.resolve()
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n._startPreload = function(e) {
        try {
            const t = this;
            return t._preloadReady = new At, "none" === e && t.paused || t._preloadReady.resolve(), t._preloadReady
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, n.getBitrateAtTime = function(e, t) {
        if (!this._sorcerer) return 0;
        const n = this._sorcerer.streamIndexAtTime(e, t);
        return this._streams[t][n] ? this._streams[t][n].bandwidth : 0
    }, n.onprogress = function() {
        this._checkForPlaybackGap()
    }, n.ondurationchange = function() {
        this._checkForPlaybackGap()
    }, n.ontimeupdate = function() {
        if (!this._sorcerer) return;
        e.prototype.ontimeupdate.call(this), this.fire(wn.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
        const t = this._getCurrentStream();
        if (t) {
            const e = {
                speed: this._abr.getCurrentSpeed(),
                bitrate: t.bitrate,
                speeds: this._sorcerer.getResponseSpeeds()
            };
            this.fire(wn.BANDWIDTH, e)
        }!this._isOnline && this._atDurationEnd() && this.fire(An.STREAM_OFFLINE), !this.lowLatencyMode && sr(this._timeSinceLastStreamSwitchCheck) > this._STREAM_SWITCH_CHECK_INTERVAL && this._loadSegments()
    }, n.seekToTime = function() {}, n.onpause = function() {
        var e;
        null == (e = this._manifestLoader) || e.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._segmentsAdded = {}, this._sorcerer.removeBuffer().catch(() => {}))
    }, n.onplay = function() {
        this._playInitiated && this._refreshManifest()
    }, n.pause = function() {
        e.prototype.pause.call(this)
    }, n.play = function() {
        const t = this;
        return e.prototype.play.call(this, Wi((function() {
            return t._preloadReady.resolve(), Yi((function() {
                if (t._playInitiated) return t._segmentsAdded = {}, qi(Xi((function() {
                    return $i(t._sorcerer.removeBuffer())
                }), (function(e) {})), (function() {
                    return $i(t._refreshManifest())
                }))
            }), (function() {
                return Hi(t._videoReady, (function() {
                    return Hi(t._waitForEnoughSegments(), (function() {
                        return t._loadSegments(), Hi(t._bufferAvailable(), (function() {
                            const e = Math.max(t._latencyController.liveSyncPosition, t._video.buffered.start(0));
                            t.currentTime = e, t._playInitiated = !0
                        }))
                    }))
                }))
            }))
        })))
    }, n._bufferAvailable = function() {
        return new Promise(e => {
            const t = () => {
                this.buffered.length && (this._sorcerer.off("appendbufferend", t), e())
            };
            this._sorcerer.on("appendbufferend", t), t()
        })
    }, n._getSegmentTimeoutMs = function() {
        return this._abr.getSegmentRelativeTimeout(this._streams.video, this._getCurrentStream("video"), 1e3 * this.segmentLength)
    }, n._loadMediaManifest = function() {
        return import ("./media-manifest.module.js")
    }, n.setCaptionsState = function(e) {
        this._captionsEnabled = e
    }, sn(t, [{
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._preload !== e && "none" !== e && this._preloadReady.resolve(), this._preload = e
        }
    }, {
        key: "latency",
        get: function() {
            var e;
            return null == (e = this._latencyController) ? void 0 : e.latency
        }
    }, {
        key: "lowLatencyMode",
        get: function() {
            return this._lowLatencyMode
        },
        set: function(e) {
            this._lowLatencyMode = e, this._manifestLoader && (this._manifestLoader.lowLatencyMode = e)
        }
    }, {
        key: "downloadSpeed",
        get: function() {
            return this._abr.getCurrentSpeed()
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            return this._restrictedStreamIndexes
        },
        set: function(e) {
            this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._abr.lock(this._restrictedStreamIndexes))
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._stream ? this._stream.width : this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._stream ? this._stream.height : this._video.videoHeight
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this._video.readyState > 0 && (this._video.currentTime = e)
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return this._sorcerer ? this._sorcerer.video.activeStreamIndex > 0 : null
        }
    }, {
        key: "sorcerer",
        get: function() {
            return this._sorcerer
        }
    }, {
        key: "segmentLength",
        get: function() {
            var e, t, n, r;
            return this.lowLatencyMode && (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) ? void 0 : t.partTargetDuration) || (null == (n = this._manifestLoader) || null == (r = n.activeStream("video")) ? void 0 : r.targetDuration)
        }
    }, {
        key: "segmentCount",
        get: function() {
            var e, t, n;
            return (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) || null == (n = t.segments) ? void 0 : n.length) || 0
        }
    }, {
        key: "availableDuration",
        get: function() {
            const e = this.segmentCount * this.segmentLength;
            return isNaN(e) ? 0 : e
        }
    }]), t
}(Or);

function Qi(e) {
    return e.forEach((e, t) => {
        e.index = t
    }), e
}
const Ji = document.createElement("video"),
    Zi = {
        "application/x-mpegURL": "application/x-mpegURL"
    };
let eo = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._apiManifestUrl = null, r.reset(), window.addEventListener("online", () => {
                r.play()
            }), r
        }
        ln(t, e), sn(t, null, [{
            key: "displayName",
            get: function() {
                return "NativeHLSLiveScanner"
            }
        }, {
            key: "supported",
            get: function() {
                return t.supportedVideoTypes.length > 0
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                const e = [];
                if ("function" != typeof Ji.canPlayType) return e;
                for (const t in Zi) {
                    const n = Zi[t];
                    Ji.canPlayType(n).replace(/^no$/, "") && e.push(t)
                }
                return e
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return !1
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.reset()
        }, n.reset = function() {
            this._manifestRefreshTimeout && clearTimeout(this._manifestRefreshTimeout), this._onReady = null, this._manifestRefreshTimeout = null, this._isOnline = !1, this._hasLiveEventEnded = !1, this._hlsAvailabilityCheckTimeout = null, this._bufferedIndex = 0, this._manifestRefreshTimeout = null, this._abr = new Li(this, this._options), this._restrictedStreamIndexes = []
        }, n.endLive = function() {
            this._isOnline = !1, this._hasLiveEventEnded = !0, clearTimeout(this._manifestRefreshTimeout), this._video.pause(),
                function(e) {
                    setTimeout(e, 0)
                }(() => {
                    e.prototype.deactivate.call(this), this.fire(En.ENDED)
                })
        }, n._setUpRefreshTimer = function() {
            const e = Ot(this.video.metadata.playlistRefreshUrl.split("?")[1]);
            e.expires && (this._manifestRefreshTimeout = setTimeout(() => {
                this._refreshLiveApiPlaylistUrl()
            }, 1e3 * (e.expires - 10)))
        }, n._refreshLiveApiPlaylistUrl = function(e = 0) {
            const t = this.video.metadata.playlistRefreshUrl;
            return ei(t).json().then(n => {
                if (!("url" in n)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${n}`);
                return this._loadNativeHlsManifest(n.url.hls).then(() => (this.play(), this._checkHlsAvailability(5e3), null)).catch(() => this._refreshLiveApiPlaylistUrl(++e))
            }).catch(() => {
                if (e >= 3) throw new Error(`Manifest failed to load after ${e} attempts.`);
                return ++e, this._refreshLiveApiPlaylistUrl(e)
            })
        }, n._setUpLiveEventListeners = function() {
            this.on(An.STREAM_OFFLINE, () => {
                this._isOnline = !1
            })
        }, n._setUpNativeHls = function(e) {
            return this._setUpLiveEventListeners(), this._isOnline = !0, this.fire(An.STREAM_ONLINE), this._checkHlsAvailability(5e3), Promise.resolve(e)
        }, n._loadNativeHlsManifest = function(e) {
            return this._apiManifestUrl = e, /json=1/.test(e) ? ei(e).json().then(e => {
                if (!("url" in e)) throw new Error(`Error parsing 'url' key from Live API manifest endpoint: ${this._apiManifestUrl} ${e}`);
                this._video.src = e.url, this._setUpRefreshTimer()
            }).catch(e => {
                const t = this.video.metadata.playlistRefreshUrl;
                return ei(t).json().then(e => {
                    if (!("url" in e)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${e}`);
                    this._apiManifestUrl = e.url.ios, this._video.src = e.url.ios, this._setUpRefreshTimer()
                })
            }) : (this._video.src = e, this._setUpRefreshTimer(), Promise.resolve())
        }, n._checkHlsAvailability = function(e) {
            "number" == typeof Gn.iOS && Gn.iOS < 9 || this._hlsAvailabilityCheckTimeout || (this._hlsAvailabilityCheckTimeout = setTimeout(() => {
                if (!this._isOnline) return;
                const e = new XMLHttpRequest;
                e.onload = () => {
                    410 !== e.status ? (200 !== e.status && this.fire(An.STREAM_OFFLINE), e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && this.fire(An.STREAM_OFFLINE)) : this._refreshLiveApiPlaylistUrl()
                }, e.onerror = () => {
                    this.fire(An.STREAM_OFFLINE)
                }, /json=1/.test(this._apiManifestUrl) ? ei(this._apiManifestUrl).json().then(t => {
                    "url" in t || this.fire(An.STREAM_OFFLINE), e.open("GET", t.url), e.send()
                }).catch(() => {
                    e.open("GET", this._apiManifestUrl), e.send()
                }) : (e.open("GET", this._apiManifestUrl), e.send())
            }, e))
        }, n.setVideoSrc = function(e) {
            this._onReady = this._setUpNativeHls(e).then(() => (this._apiManifestUrl = e, this._loadNativeHlsManifest(e)))
        }, n.onprogress = function() {
            this._hlsAvailabilityCheckTimeout && (clearTimeout(this._hlsAvailabilityCheckTimeout), this._hlsAvailabilityCheckTimeout = null)
        }, n.onstalled = function() {
            this._checkHlsAvailability(1e4)
        }, n.onerror = function() {
            return this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (ei(this._apiManifestUrl).then(() => {
                e.prototype.onerror.call(this)
            }).catch(t => {
                t instanceof Fr ? this.fire(En.ERROR, new mr("MediaNetworkError", "A network error ocurred while fetching the media.")) : e.prototype.onerror.call(this)
            }), !1) : e.prototype.onerror.call(this)
        }, n.onwaiting = function() {
            this._checkHlsAvailability(1e4)
        }, n.seekToTime = function() {}, n.play = function() {
            return e.prototype.play.call(this, () => this._onReady)
        }, sn(t, [{
            key: "currentTime",
            get: function() {
                return this._video.currentTime
            },
            set: function(e) {
                this._video.currentTime = e
            }
        }]), t
    }(Or),
    to = function() {
        function e(e, t = {}) {
            this._telecine = e, this._element = e._element, this._options = t
        }
        sn(e, null, [{
            key: "displayName",
            get: function() {
                return "Effect"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return []
            }
        }]);
        var t = e.prototype;
        return t.activate = function() {
            throw new mr("NotImplemented", "The effect must implement the activate method.")
        }, t.deactivate = function() {
            throw new mr("NotImplemented", "The effect must implement the deactivate method.")
        }, e
    }();
const no = new WeakMap,
    ro = new WeakMap;
let io = function() {
    function e({
        src: e,
        mime: t,
        id: n = ar(),
        priority: r = 0,
        metadata: i = {}
    }, o) {
        if (!e) throw new TypeError("Must provide a src for the file.");
        if (!t) throw new TypeError("Must provide a mime type for the file.");
        Object.defineProperties(this, {
            mime: {
                value: t,
                enumerable: !0
            },
            id: {
                value: `${n}`,
                enumerable: !0
            },
            metadata: {
                value: i,
                enumerable: !0
            }
        }), this.video = o, this.priority = r, this.src = e
    }
    return sn(e, [{
        key: "priority",
        get: function() {
            return no.get(this)
        },
        set: function(e) {
            if (!("number" == typeof(e = parseInt(e, 10)) && isFinite(e) && Math.floor(e) === e && e >= 0)) throw new TypeError("The file priority must be an integer greater than or equal to 0.");
            no.set(this, e)
        }
    }, {
        key: "src",
        get: function() {
            return ro.get(this)
        },
        set: function(e) {
            ro.set(this, e), this.video.fire(wn.FILE_SRC_UPDATE, this)
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
            return this.video.currentScanner.restrictedStreamIndexes
        },
        set: function(e = []) {
            if (!Array.isArray(e)) throw new TypeError("Indexes must be an array.");
            if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
            this.video.currentScanner.restrictedStreamIndexes = e
        }
    }]), e
}();

function oo() {
    return !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys)
}

function so(e, t, n) {
    "string" == typeof t && (t = function(e) {
        const t = new ArrayBuffer(2 * e.length),
            n = new Uint16Array(t);
        for (let r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
        return n
    }(t));
    let r = 0;
    const i = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength),
        o = new DataView(i);
    new Uint8Array(i, r, e.byteLength).set(e), r += e.byteLength, o.setUint32(r, t.byteLength, !0), r += 4;
    const s = new Uint8Array(i, r, t.byteLength);
    return s.set(t), r += s.byteLength, o.setUint32(r, n.byteLength, !0), r += 4, new Uint8Array(i, r, n.byteLength).set(n), new Uint8Array(i, 0, i.byteLength)
}

function ao(e, t = !0) {
    const n = t ? e.buffer : e,
        r = String.fromCharCode.apply(null, new Uint16Array(n)),
        i = (new DOMParser).parseFromString(r, "application/xml"),
        o = {},
        s = i.getElementsByTagName("HttpHeader");
    for (let a = 0; a < s.length; ++a) {
        const e = s[a].querySelector("name"),
            t = s[a].querySelector("value");
        o[e.textContent] = t.textContent
    }
    return [o, e = cr(i.querySelector("Challenge").textContent)]
}

function co(e, t, n, r) {
    const i = r.audio || [],
        o = r.video || [],
        s = [{
            video: "HW_SECURE_ALL",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }].map(e => {
            const t = {
                persistentState: "optional",
                sessionTypes: ["temporary"]
            };
            return o.length && (t.videoCapabilities = o.map(t => ({
                contentType: t,
                robustness: e.video
            }))), i.length && (t.audioCapabilities = i.map(t => ({
                contentType: t,
                robustness: e.audio
            }))), t
        }),
        a = Object.keys(e).map(r => {
            const i = e[r].id;
            if (t || n) {
                let e = null;
                const n = t ? window.WebKitMediaKeys : window.MSMediaKeys;
                try {
                    e = new n(i)
                } catch (rl) {}
                return Promise.resolve({
                    name: i,
                    keySystem: e
                })
            }
            return navigator.requestMediaKeySystemAccess(i, s).then(e => e.createMediaKeys()).catch(e => {}).then(e => ({
                name: i,
                keySystem: e
            }))
        });
    return Promise.all(a)
}

function uo(e, t) {
    let n = null;
    return Object.keys(e).forEach(r => {
        t.name === e[r].id && (n = e[r])
    }), n
}
let lo = function() {
        function e(e, t) {
            this._cdms = e.cdms, this._lrToken = e.lr_token, this._userId = e.user, this._assetId = e.asset, this._useHls = t, this._licenseUrl = null, this._keySession = null, this._preferredKeySystem = null, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}) {
            return this._video = e._video, this._scanner = e, oo() ? (this._licenseRequestMetadata = function(e, t) {
                const n = {},
                    r = `${window.screen.availWidth}x${window.screen.availHeight}`,
                    i = window.devicePixelRatio;
                return n.merchant = "vimeo", n.sessionId = JSON.stringify({
                    ua: navigator.userAgent,
                    token: e,
                    resolution: r,
                    pixelRatio: i
                }), n.userId = t, n
            }(this._lrToken, this._userId), co(this._cdms, this._useHls, !1, t).then(e => {
                if (e.forEach(e => {
                        e.keySystem && (this._preferredKeySystem = e)
                    }), !this._preferredKeySystem) return this._scanner.fire(wn.EME_UNSUPPORTED), !1;
                const t = uo(this._cdms, this._preferredKeySystem);
                return this._encryptedEventName = "encrypted", this._licenseUrl = t.license_url, this._useHls && (this._certificateUrl = t.certificate_url, this._encryptedEventName = "webkitneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest), this._useHls ? (this._video.webkitSetMediaKeys(this._preferredKeySystem.keySystem), !0) : this._video.mediaKeys ? (this._keySession = this._video.mediaKeys.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), !0) : (this._keySession = this._preferredKeySystem.keySystem.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), this._video.setMediaKeys(this._preferredKeySystem.keySystem), !0)
            })) : (this._scanner.fire(wn.EME_UNSUPPORTED), !1)
        }, t.destroy = function() {
            this._keySession && this._keySession.sessionId && this._keySession.close(), this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._generateRequest = function(e) {
            return "com.apple.fps.1_0" === this._preferredKeySystem.name ? (this._loadFairPlayCertificate().then(t => {
                this._contentId = `assetId=${this._assetId}`;
                const n = so(e.initData, this._contentId, t);
                return this._keySession = this._preferredKeySystem.keySystem.createSession("video/mp4", n), this._keySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), t
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : !this._keySession.sessionId && !this._activeKeySession && (this._activeKeySession = this._keySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(wn.DRM_FAILURE)
            }), !0)
        }, t._getLicense = function(e) {
            return new Promise((t, n) => {
                this._activeKeySession = null;
                const r = new XMLHttpRequest;
                r.keySession = e.target, r.responseType = "arraybuffer", r.open("POST", this._licenseUrl), r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata)));
                let i = e.message;
                if ("com.microsoft.playready" === this._preferredKeySystem.name) {
                    const t = ao(e.message, !1),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        r.setRequestHeader([e], n[e])
                    }), i = t[1]
                }
                if ("com.apple.fps.1_0" === this._preferredKeySystem.name) {
                    let e = btoa(String.fromCharCode.apply(null, i));
                    e = encodeURIComponent(e), i = `spc=${e}&${this._contentId}`, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                }
                r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: wn.DRM_FAILURE
                        });
                        else try {
                            this._scanner.fire(wn.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(r.response);
                            let n = e.buffer;
                            "com.apple.fps.1_0" === this._preferredKeySystem.name && (n = function(e) {
                                let t = window.atob(e.trim());
                                return "<ckc>" === t.substr(0, 5) && "</ckc>" === t.substr(-6) && (t = t.slice(5, -6)), new Uint8Array(atob(t).split("").map(e => e.charCodeAt(0)))
                            }(btoa(String.fromCharCode.apply(null, e)))), r.keySession.update(n), t()
                        } catch (rl) {
                            n(`Error updating key session: ${rl}`)
                        } else {
                            const e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                            n({
                                error: wn.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, r.onerror = n, r.send(i)
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            })
        }, t._loadFairPlayCertificate = function() {
            return new Promise((e, t) => {
                const n = new XMLHttpRequest;
                n.responseType = "arraybuffer", n.open("GET", this._certificateUrl), n.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata))), n.onload = () => {
                    if (403 !== n.status)
                        if (n.status >= 400) t({
                            error: wn.DRM_FAILURE
                        });
                        else try {
                            e(new Uint8Array(n.response))
                        } catch (rl) {
                            t(rl)
                        } else {
                            const e = JSON.parse(n.getResponseHeader("x-dt-error-message"));
                            t({
                                error: wn.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, n.onerror = t, n.send()
            })
        }, e
    }(),
    ho = function() {
        function e() {
            this._cdmList = {}, this._preferredKeySystems = {}, this._licenseTokenUrls = {}, this._licenseUrls = {}, this._certificateUrls = {}, this._keySessions = {}, this._keyChainState = "default", this._keyTypes = {
                KEYCHAIN_DEFAULT: "default",
                KEYCHAIN_SD_FALLBACK: "sd-fallback"
            }
        }
        var t = e.prototype;
        return t.getAllKeySessions = function() {
            return Object.values(this._keySessions) || []
        }, t.getCdms = function(e) {
            return this._cdmList[e]
        }, t.getAllPreferredKeySystems = function() {
            return this._preferredKeySystems
        }, t.addCdms = function(e, t) {
            this._cdmList[t] = e
        }, t.addKeySession = function(e, t) {
            this._keySessions[t] = e
        }, t.addLicenseTokenUrl = function(e, t) {
            this._licenseTokenUrls[t] = e
        }, t.addLicenseUrl = function(e, t) {
            this._licenseUrls[t] = e
        }, t.addPreferedKeySystem = function(e, t) {
            this._preferredKeySystems[t] = e
        }, t.closeAllKeySessions = function() {
            for (let e in this._keySessions) this._keySessions[e] && this._keySessions[e].sessionId && this._keySessions[e].close()
        }, sn(e, [{
            key: "state",
            get: function() {
                return this._keyChainState
            },
            set: function(e) {
                Object.values(this._keyTypes).indexOf(e) < 0 || (this._keyChainState = e)
            }
        }, {
            key: "activeKeySession",
            get: function() {
                return this._keySessions[this._keyChainState]
            }
        }, {
            key: "activeKeySystem",
            get: function() {
                return this._preferredKeySystems[this._keyChainState]
            }
        }, {
            key: "keyTypes",
            get: function() {
                return this._keyTypes
            }
        }, {
            key: "activeLicenseTokenUrl",
            get: function() {
                return this._licenseTokenUrls[this._keyChainState]
            }
        }, {
            key: "activeLicenseUrl",
            get: function() {
                return this._licenseUrls[this._keyChainState]
            }
        }]), e
    }(),
    fo = function() {
        function e(e, t) {
            this._hasFallbackAssets = !!e.fallback_asset, this._useHls = t, this._fallbackCallback = () => null, this._currentTime = 0, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this), this._boundOnKeyStatus = this._onKeyStatus.bind(this), this._keyChain = new ho, this._keyTypes = this._keyChain.keyTypes, this._keyChain.state = this._keyTypes.KEYCHAIN_DEFAULT, this._keyChain.addCdms(e.cdms, this._keyTypes.KEYCHAIN_DEFAULT), this._hasFallbackAssets && this._keyChain.addCdms(e.fallback_cdms, this._keyTypes.KEYCHAIN_SD_FALLBACK)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}, n = {}) {
            return this._video = e._video, this._scanner = e, this._useMs = !!window.MSMediaKeys, oo() || this._useMs ? this._keyChain.state === this._keyTypes.KEYCHAIN_SD_FALLBACK ? this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                this._scanner.currentTime = this._currentTime, this._scanner.play()
            }) : this.setUpKeySystem(t, n).then(() => this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK)) : (this._scanner.fire(wn.EME_UNSUPPORTED), Promise.reject())
        }, t.setUpKeySystem = function(e, t, n = this._keyTypes.KEYCHAIN_DEFAULT) {
            return new Promise((r, i) => {
                const o = this._keyChain.getCdms(n);
                return o || i(), co(o, this._useHls, this._useMs, e).then(e => {
                    this._keyChain.addPreferedKeySystem(e.find(e => e.keySystem), n);
                    const r = this._keyChain.activeKeySystem && uo(o, this._keyChain.activeKeySystem);
                    if (!r) throw this._scanner.fire(wn.EME_UNSUPPORTED), new Error("No valid key system was found.");
                    this._keyChain.addLicenseTokenUrl(r.license_url, n);
                    const i = t && t.inits && t.inits[r.id];
                    return i || this._addEncryptedHandler(r, n), this._setMediaKeys(n).then(() => {
                        const e = this._keyChain.state === n;
                        return i && e && this._generateRequest(i.cenc, n)
                    })
                }).then(r)
            })
        }, t.destroy = function() {
            this._keyChain && this._keyChain.closeAllKeySessions(), this._video && this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._switchKeyChainState = function(e) {
            return new Promise(t => {
                this._keyChain.state = e, this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), t()
            })
        }, t._addEncryptedHandler = function(e, t) {
            this._encryptedEventName = "encrypted", this._keyChain.addLicenseUrl(e.license_url, t), this._useHls ? (this._certificateUrl = e.certificate_url, this._encryptedEventName = "webkitneedkey") : this._useMs && (this._encryptedEventName = "msneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._setMediaKeys = function(e) {
            return new Promise(t => {
                if (this._useMs) {
                    const e = () => {
                        this._video.msSetMediaKeys(this._keyChain.activeKeySystem.keySystem), this._video.removeEventListener("loadedmetadata", e), t()
                    };
                    this._video.readyState >= 1 ? e() : this._video.addEventListener("loadedmetadata", e)
                } else {
                    if (this._useHls) this._video.webkitSetMediaKeys(this._keyChain.activeKeySystem.keySystem);
                    else {
                        const t = this._video.mediaKeys || this._keyChain.activeKeySystem.keySystem;
                        this._keyChain.addKeySession(this._createSession(t), e), e === this._keyChain.state && this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), this._video.mediaKeys || this._video.setMediaKeys(this._keyChain.activeKeySystem.keySystem)
                    }
                    t()
                }
            })
        }, t._createSession = function(e, t, n) {
            const r = e.createSession(t, n);
            if (!r) throw new Error("Could not create key session");
            return r
        }, t._generateRequest = function(e, t) {
            t = t || this._keyChain.state;
            const n = new Error("A decryption key error was encountered");
            return "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name ? (this._loadFairPlayCertificate(this._certificateUrl).then(r => {
                this._contentId = function(e) {
                    var t = function(e) {
                            const t = new Uint16Array(e.buffer);
                            return String.fromCharCode.apply(null, t)
                        }(e),
                        n = document.createElement("a");
                    return n.href = t, n.hostname
                }(e.initData);
                const i = so(e.initData, this._contentId, r);
                return this._keyChain.addKeySession(this._createSession(this._keyChain.activeKeySystem.keySystem, "video/mp4", i), t), this._keyChain.activeKeySession.contentId = this._contentId, this._keyChain.activeKeySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("webkitkeyerror", e => {
                    throw n
                }), r
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : "com.microsoft.playready" === this._keyChain.activeKeySystem.name ? (this._keyChain.addKeySession(this._createSession(this._video.msKeys, "video/mp4", e.initData), t), this._keyChain.activeKeySession.addEventListener("mskeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("mskeyerror", e => {
                throw n
            }), !0) : !this._keyChain.activeKeySession.sessionId && !this._activeKeySession && (this._keyChain.activeKeySession.addEventListener("keystatuseschange", this._boundOnKeyStatus), this._activeKeySession = this._keyChain.activeKeySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(wn.DRM_FAILURE)
            }), !0)
        }, t._onKeyStatus = function() {
            let e = !1;
            const t = Array.from(this._keyChain.activeKeySession.keyStatuses.values());
            if (t.forEach((t, n) => {
                    switch (t) {
                        case "expired":
                            e = !0
                    }
                }), t.every(e => "output-restricted" === e)) {
                if (this._hasFallbackAssets) return this._currentTime = this._scanner.currentTime, void this._switchKeyChainState(this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                    this._fallbackCallback(), this._scanner.fire(wn.DRM_KEY_SWITCH, this._keyTypes.KEYCHAIN_SD_FALLBACK)
                }).catch(e => {
                    this._scanner.fire(wn.DRM_OUTPUT_RESTRICTED)
                });
                this._scanner.fire(wn.DRM_OUTPUT_RESTRICTED)
            }
            e && this._keyChain.activeKeySession.close()
        }, t._getLicense = function(e) {
            return this._getLicenseUrl(this._keyChain.activeLicenseTokenUrl).then(t => new Promise((n, r) => {
                this._keyChain.addLicenseUrl(t, this._keyChain.state), this._activeKeySession = null;
                const i = new XMLHttpRequest;
                i.keySession = e.target, i.open("POST", this._keyChain.activeLicenseUrl), i.responseType = "arraybuffer";
                let o = e.message;
                if ("com.microsoft.playready" === this._keyChain.activeKeySystem.name) {
                    const t = ao(e.message),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        i.setRequestHeader(e, n[e])
                    }), o = t[1]
                }
                "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name && (o = new Uint8Array(o), i.setRequestHeader("Content-type", "application/octet-stream")), i.onload = () => {
                    if (403 !== i.status)
                        if (i.status >= 400) r(new mr(wn.DRM_FAILURE));
                        else try {
                            this._scanner.fire(wn.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(i.response);
                            i.keySession.update(e), n()
                        } catch (rl) {
                            r(new mr(wn.DRM_FAILURE, `Error updating key session: ${rl}`))
                        } else r(new mr(wn.DRM_AUTH_FAILURE))
                }, i.onerror = r, i.send(o)
            }).catch(e => {
                this._scanner.fire(e.name, {
                    text: e.message || "License request failed."
                })
            }))
        }, t._getLicenseUrl = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.onload = () => {
                    if (r.status >= 400) n(new mr(wn.DRM_FAILURE));
                    else try {
                        try {
                            const e = JSON.parse(r.response),
                                {
                                    licenseAcquisitionUrl: n,
                                    token: i
                                } = e;
                            if (!n && !i) throw new Error;
                            t(`${n}?ExpressPlayToken=${i}`)
                        } catch (e) {
                            t(r.response)
                        }
                    } catch (rl) {
                        n(new mr(wn.DRM_FAILURE, `Error retrieving License Acquisition URL (LA_URL): ${rl}`))
                    }
                }, r.onerror = n, r.send()
            })
        }, t._loadFairPlayCertificate = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.responseType = "arraybuffer", r.setRequestHeader("Pragma", "Cache-Control: no-cache"), r.setRequestHeader("Cache-Control", "max-age=0"), r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: wn.DRM_FAILURE
                        });
                        else try {
                            t(new Uint8Array(r.response))
                        } catch (rl) {
                            n(rl)
                        } else n({
                            error: wn.DRM_AUTH_FAILURE
                        })
                }, r.onerror = n, r.send()
            })
        }, t.setFallbackCallback = function(e) {
            this._fallbackCallback = () => e()
        }, sn(e, [{
            key: "state",
            get: function() {
                return this._keyChain.state
            }
        }, {
            key: "hasFallbackAssets",
            get: function() {
                return this._hasFallbackAssets
            }
        }]), e
    }();
const po = new WeakMap;
let mo = function() {
        function e({
            files: e,
            id: t = ar(),
            title: n = null,
            subtitle: r = null,
            metadata: i = {},
            textTracks: o = ir(),
            externalDisplayFiles: s = {},
            chapters: a = [],
            duration: c
        }) {
            if (!e || !Array.isArray(e)) throw new TypeError("Must provide files for the video.");
            ft(this);
            const u = function(e = []) {
                    return e.getFileById = rr, e
                }(e.map(e => e instanceof io ? (e.video = this, e) : new io(e, this))),
                l = ir(o.map(e => e instanceof ji ? (e.video = this, e) : new ji(e, this)));
            Object.keys(s).forEach(e => {
                !s[e] || s[e] instanceof io || (s[e] = new io(s[e], this))
            }), Object.defineProperties(this, {
                id: {
                    value: `${t}`,
                    enumerable: !0
                },
                title: {
                    value: n,
                    enumerable: !0
                },
                subtitle: {
                    value: r,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                },
                files: {
                    value: u,
                    enumerable: !0
                },
                textTracks: {
                    value: l,
                    enumerable: !0,
                    writable: !0
                },
                chapters: {
                    value: a,
                    enumerable: !0
                },
                duration: {
                    value: c,
                    enumerable: !0
                },
                externalDisplayFiles: {
                    value: s,
                    enumerable: !0
                }
            }), i.drm && (i.drm.fastly ? this._drmHandler = new fo(i.drm, i.useHls) : this._drmHandler = new lo(i.drm, i.useHls))
        }
        return e.prototype.deactivate = function() {
            this._drmHandler && this._drmHandler.destroy(), this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e))
        }, sn(e, [{
            key: "drmHandler",
            get: function() {
                return this._drmHandler || null
            }
        }, {
            key: "currentFile",
            get: function() {
                return this.currentScanner.currentFile
            },
            set: function(e) {
                this.currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return po.get(this)
            },
            set: function(e) {
                this.currentScanner && this.currentScanner.constructor.supportsTextTracks && this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e)), e.constructor.supportsTextTracks && this.textTracks.forEach(t => e.addTextTrack(t)), po.set(this, e)
            }
        }, {
            key: "chapters",
            get: function() {
                return this.chapters
            }
        }]), e
    }(),
    _o = function() {
        function e(e, t = {}) {
            this._telecine = e, this._options = t, this._bufferInterval = null, this._lastBufferCheckVideoTime = this._options.embedTime ? this._options.embedTime : 0, this._isBuffering = !1, this._isSeeking = !1, this._userPlayState = !1, this.playInitiated = !1, this._isLiveStreamOnline = !1, this._checkInterval = 250, ft(this), this._boundEndBuffering = this._endBuffering.bind(this), this._boundOnPause = this._onPause.bind(this), this._boundOnSeeking = this._onSeeking.bind(this), this._boundOnSeeked = this._onSeeked.bind(this), this._boundOnLiveOnline = this._onLiveOnline.bind(this), this._boundOnLiveOffline = this._onLiveOffline.bind(this), this._toggleEvents(this._telecine.on), this._options.noInterval || this._setUpRebufferMonitor()
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._bufferInterval), this._toggleEvents(this._telecine.off), this._endBuffering()
        }, t._toggleEvents = function(e) {
            e(En.PAUSE, this._boundOnPause), e(En.PLAYING, this._boundEndBuffering), e(En.SEEKING, this._boundOnSeeking), e(En.SEEKED, this._boundOnSeeked), e(An.STREAM_ONLINE, this._boundOnLiveOnline), e(An.STREAM_OFFLINE, this._boundOnLiveOffline)
        }, t._onPause = function() {
            this.userPlayState = !1
        }, t._endBuffering = function() {
            this._isBuffering && (this._isBuffering = !1, this.fire(wn.BUFFER_ENDED))
        }, t._onSeeking = function() {
            this._isSeeking = !0
        }, t._onSeeked = function() {
            this._isSeeking = !1
        }, t._onLiveOnline = function() {
            this._isLiveStreamOnline = !0
        }, t._onLiveOffline = function() {
            this._isLiveStreamOnline = !1
        }, t._setUpRebufferMonitor = function() {
            clearInterval(this._bufferInterval), this._bufferInterval = setInterval(this.runIntervalCheck.bind(this), this._checkInterval)
        }, t.runIntervalCheck = function() {
            if (!this._telecine.video) return;
            const e = this._telecine.video.currentScanner;
            if (!e) return;
            const t = this._telecine.isLive(),
                n = e.currentTime,
                r = this._checkInterval / 2 / 1e3;
            if (this.playInitiated && (!this._isSeeking || t) && (!this._telecine.paused || this.userPlayState) && !this._isBuffering && n < this._lastBufferCheckVideoTime + r) {
                if (t && !this._isLiveStreamOnline) return;
                const e = this._telecine.buffered;
                for (let t = 0; t < e.length; t++)
                    if (n >= e.start(t) && n + .2 <= e.end(t)) return;
                if (n + r >= this._telecine.duration) return;
                this._isBuffering = !0, this.fire(wn.BUFFER_STARTED)
            }(this.playInitiated && this._isBuffering && n > this._lastBufferCheckVideoTime + r || t && !this._isLiveStreamOnline && this._isBuffering) && (this._isBuffering = !1, this.fire(wn.BUFFER_ENDED)), this._lastBufferCheckVideoTime = n
        }, sn(e, [{
            key: "userPlayState",
            get: function() {
                return this._userPlayState
            },
            set: function(e) {
                this._userPlayState = e, e || this._endBuffering()
            }
        }]), e
    }();

function vo() {
    let e, t;

    function n() {
        if (!t) return Promise.reject();
        e.preload = "";
        let n = e.play();
        return void 0 === n && (n = new Promise(t => {
            e.addEventListener("playing", t)
        })), n
    }

    function r() {
        t && (t.resolve(), t = null)
    }

    function i(e) {
        t && (t.reject(e), t = null)
    }
    return {
        set video(t) {
            e = t
        },
        get video() {
            return e
        },
        get active() {
            return !!t
        },
        start: function(o = Promise.resolve.bind(Promise)) {
            return t || (t = new At), e.src ? document.createElement("video").load() : e.load(), o().then(n).then(r).catch(i), t
        },
        cancel: function() {
            t && (t.reject(new mr("PlayInterrupted", "The play() request was interrupted by a call to pause()")), t = null)
        }
    }
}
let go = function() {
        function e(e, t, n = {}) {
            this._element = e, this._scanners = t, this._options = n, this._video = null, this._textTracks = ir(), this._properties = {}, this._currentScanner = new Or(e), this._options.playRequest = new vo, this._blacklistedScanners = [], this._activeEffects = [], ft(this)
        }
        var t = e.prototype;
        return t.supportsEffect = function(e) {
            return !!e.supported && e.supportedScanners.some(e => this._getScannerName(this._currentScanner) === e.displayName)
        }, t.getEffectByName = function(e) {
            let t = null;
            return this._activeEffects.forEach(n => {
                e === this._getEffectName(n) && (t = n)
            }), t
        }, t.activateEffect = function(e, t) {
            const n = new e(this, t);
            return n.activate(), this._activeEffects.push(n), n
        }, t.deactivateEffect = function(e) {
            return this._activeEffects.some((t, n) => t.constructor === e && (t.deactivate(), this._activeEffects.splice(n, 1), !0))
        }, t.deactivateEffects = function() {
            this._activeEffects.forEach(e => this.deactivateEffect(e.constructor))
        }, t.play = function() {
            if (!this._video || this._video.files.length < 1) throw new mr("NoFiles", "There are no files to play.");
            this._rebufferMonitor.playInitiated || (this._rebufferMonitor.playInitiated = !0), this._rebufferMonitor.userPlayState = !0;
            const e = this._currentScanner.play();
            return this._properties.paused = !1, e
        }, t.pause = function() {
            if (!this._video || this._video.files.length < 1) throw new mr("NoFiles", "There are no files to play.");
            return this._rebufferMonitor.userPlayState = !1, this._currentScanner.pause(), this._properties.paused = !0, this
        }, t.isLive = function() {
            return this.currentScannerName.includes("Live")
        }, t.endLive = function() {
            this._currentScanner.endLive()
        }, t.getBitrateAtTime = function(e, t = "video") {
            return "MediaSourceScanner" !== this._getScannerName(this._currentScanner) && "HLSLiveScanner" !== this._getScannerName(this._currentScanner) || "audio" === t && this._currentScanner._streams[t].length <= 1 ? 0 : this._currentScanner.getBitrateAtTime(e, t)
        }, t.getCurrentStream = function(e = "video") {
            var t, n;
            return null == (t = (n = this._currentScanner).getCurrentStream) ? void 0 : t.call(n, e)
        }, t.showExternalDisplayPicker = function(e) {
            this._currentScanner.showExternalDisplayPicker(e)
        }, t.requestPictureInPicture = function() {
            return this._currentScanner.requestPictureInPicture()
        }, t.exitPictureInPicture = function() {
            return this._currentScanner.exitPictureInPicture()
        }, t.addChapter = function(e, t) {
            this._currentScanner.addChapter(e, t)
        }, t.removeChapter = function(e) {
            this._currentScanner.removeChapter(e)
        }, t.addCuePoint = function(e, t) {
            return this._currentScanner.addCuePoint(e, t)
        }, t.removeCuePoint = function(e) {
            return this._currentScanner.removeCuePoint(e)
        }, t.removeAllCuePoints = function() {
            return this._currentScanner.removeAllCuePoints()
        }, t.addVideoEventListeners = function() {
            return this._currentScanner.addVideoEventListeners()
        }, t.removeVideoEventListeners = function() {
            return this._currentScanner.removeVideoEventListeners()
        }, t._findScanner = function({
            textTrackSupport: e = !1
        } = {}) {
            const t = this._video.files.sort((e, t) => e.priority - t.priority),
                n = this._scanners;
            for (const r in t) {
                let i = t[r];
                for (const t in n) {
                    let r = n[t];
                    if (r.supported && (!e || r.supportsTextTracks) && -1 === this._blacklistedScanners.indexOf(this._getScannerName(r)) && r.supportedVideoTypes.some(e => i.mime === e)) return r
                }
            }
            return e ? (this._fireVideoError("TextTracksNotSupported", "None of the scanners support text tracks in this browser."), this._blacklistedScanners = [], this._findScanner()) : null
        }, t.reactivate = function() {
            var e;
            (null == (e = this._currentScanner) ? void 0 : e.reactivate) && this._currentScanner.reactivate(), this.play()
        }, t._initScanner = function(e, t) {
            if (this._currentScanner.constructor === e && this._currentScanner.video === t) return;
            this._currentScanner.deactivate();
            const n = new e(this._element, this._options);
            Object.keys(Pn).forEach(e => {
                const t = Pn[e];
                n.on(t, e => this._handleEvent(t, e, n))
            }), this._currentScanner = n, t.currentScanner = n, this._currentScanner.video = t;
            const r = Object.keys(this._properties);
            for (let i = 0; i < r.length; i++) {
                const e = r[i];
                "paused" !== e ? "currentTime" !== e && (this._currentScanner[e] = this._properties[e]) : !1 === this._properties.paused && this._currentScanner.play()
            }
            this._currentScanner.addChapters(t.chapters, t.duration), this.fire(wn.SCANNER_CHANGE, this._getScannerName(this._currentScanner))
        }, t._updateScanner = function() {
            if (null === this._video) return;
            const e = this._findScanner({
                textTrackSupport: this._video.textTracks.length > 0
            });
            e ? this._initScanner(e, this._video) : this._fireVideoError("FilesNotPlayable", "None of the files could be played in this browser.")
        }, t._resetScanner = function() {
            this._currentScanner.deactivate(), this._currentScanner = new Or(this._element)
        }, t._handleEvent = function(e, t, n) {
            if (n === this._currentScanner) {
                switch (e) {
                    case En.ERROR:
                        return void(t instanceof mr && this.fire(En.ERROR, t));
                    case wn.SCANNER_ERROR:
                        this._fireVideoError("ScannerError", `The current scanner can no longer be used because ${t.reason}`), this._blacklistedScanners.push(this._getScannerName(this._currentScanner)), this._updateScanner([]);
                        break;
                    case wn.FILE_ERROR:
                        this._fireVideoError("FileError", `The current file can no longer be used because ${t.reason}`), this._currentScanner._switchToNextFile();
                        break;
                    case wn.DOWNLOAD_ERROR:
                        this._fireVideoError("DownloadError", t), this._currentScanner._switchToNextFile();
                        break;
                    case wn.EME_UNSUPPORTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "emeunsupported"
                        });
                        break;
                    case wn.DRM_FAILURE:
                    case wn.DRM_AUTH_FAILURE:
                        this._fireVideoError("DRMFailure", {
                            text: t.text,
                            code: t.code
                        });
                        break;
                    case wn.DRM_OUTPUT_RESTRICTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "outputrestricted"
                        });
                        break;
                    case wn.DRM_AUTH_SUCCESS:
                        this.fire(wn.DRM_AUTH_SUCCESS);
                        break;
                    case En.TIME_UPDATE:
                        this._properties.currentTime = this._currentScanner.currentTime;
                        break;
                    case wn.MEDIA_URL_EXPIRED:
                        this._fireVideoError("MediaUrlExpired", t);
                        break;
                    case wn.MEDIA_URL_BAD_REQUEST:
                        this._fireVideoError("MediaUrlBadRequest", t);
                        break;
                    case Rn.BRAIN_ML_MODEL_ERR:
                        this._fireVideoError("MimirError", t);
                        break;
                    case Rn.BRAIN_ML_MODEL_NET_ERR:
                        this._fireVideoError("MimirNetworkError", t);
                        break;
                    case Rn.BRAIN_ML_MODEL_TIMEOUT:
                        this._fireVideoError("MimirNetworkTimeout", t);
                        break;
                    case In.SPATIAL_UNSUPPORTED:
                        this.getEffectByName("ThreeSixtyEffect").deactivate();
                        break;
                    case En.ENDED:
                        this._properties.paused = !0;
                        break;
                    case En.WAITING:
                        this.fire(En.WAITING)
                }
                this._activeEffects.forEach(t => {
                    "function" == typeof t[`on${e}`] && t[`on${e}`]()
                }), this.fire(e, t)
            }
        }, t._fireVideoError = function(e, t) {
            this.fire(En.ERROR, new mr(e, t))
        }, t._getScannerName = function(e) {
            return e instanceof Or ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setUpRebufferMonitor = function() {
            this._rebufferMonitor && this._rebufferMonitor.destroy(), this._rebufferMonitor = new _o(this, this._options), this._rebufferMonitor.on(wn.BUFFER_STARTED, () => {
                this.fire(wn.BUFFER_STARTED)
            }), this._rebufferMonitor.on(wn.BUFFER_ENDED, () => {
                this.fire(wn.BUFFER_ENDED)
            })
        }, t._getEffectName = function(e) {
            return e instanceof to ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setCaptionsState = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsState(e)
        }, sn(e, [{
            key: "element",
            get: function() {
                return this._element
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._currentScanner.videoElement
            }
        }, {
            key: "manifest",
            get: function() {
                return this._currentScanner.manifest || {
                    video: []
                }
            }
        }, {
            key: "supportsSettingVolume",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsSettingVolume)
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return this._currentScanner.constructor.supportsPlaybackRate
            }
        }, {
            key: "supportsTextTracks",
            get: function() {
                return this._scanners.some(e => e.supported && e.supportsTextTracks)
            }
        }, {
            key: "activeEffects",
            get: function() {
                return this._activeEffects
            }
        }, {
            key: "latency",
            get: function() {
                return this._currentScanner.latency
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._currentScanner.downloadSpeed || 0
            }
        }, {
            key: "pictureInPictureActive",
            get: function() {
                return this._currentScanner.pictureInPictureActive
            }
        }, {
            key: "pictureInPictureEnabled",
            get: function() {
                return this._currentScanner.pictureInPictureEnabled
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this._currentScanner.isLowerProfileAvailable
            }
        }, {
            key: "buffered",
            get: function() {
                return this._currentScanner.buffered
            }
        }, {
            key: "bufferTarget",
            get: function() {
                return this._currentScanner.bufferTarget
            },
            set: function(e) {
                this._properties.bufferTarget = e, this._currentScanner.bufferTarget = e
            }
        }, {
            key: "presentationDelay",
            get: function() {
                return this._currentScanner.presentationDelay
            },
            set: function(e) {
                this._properties.presentationDelay = e, this._currentScanner.presentationDelay = e
            }
        }, {
            key: "lowLatencyMode",
            get: function() {
                return this._currentScanner.lowLatencyMode
            },
            set: function(e) {
                this._properties.lowLatencyMode = e, this._currentScanner.lowLatencyMode = e
            }
        }, {
            key: "manifestLoadDurations",
            get: function() {
                return this._currentScanner.manifestLoadDurations ? this._currentScanner.manifestLoadDurations : []
            }
        }, {
            key: "successfulSegments",
            get: function() {
                return this._currentScanner.successfulSegments ? this._currentScanner.successfulSegments : []
            }
        }, {
            key: "failedSegments",
            get: function() {
                return this._currentScanner.failedSegments ? this._currentScanner.failedSegments : []
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._currentScanner.cuePoints
            }
        }, {
            key: "currentChapterID",
            get: function() {
                if (this._currentScanner && this._currentScanner.chaptersTrack && this._currentScanner.chaptersTrack.activeCues.length) {
                    const {
                        activeCues: e
                    } = this._currentScanner.chaptersTrack;
                    return e[e.length - 1].id
                }
                return null
            }
        }, {
            key: "chapters",
            get: function() {
                return this._currentScanner.chaptersTrack ? this._currentScanner.chaptersTrack.cues : []
            }
        }, {
            key: "chaptersTrack",
            get: function() {
                return this._currentScanner.chaptersTrack
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentScanner.currentFile
            },
            set: function(e) {
                if ("string" == typeof e && (e = this._files.filter(t => t.id === e)[0]), !e) throw new mr("FileNotValid", "The file is not valid.");
                this._currentScanner.currentFile = e
            }
        }, {
            key: "currentScannerName",
            get: function() {
                return this._getScannerName(this._currentScanner)
            }
        }, {
            key: "currentScanner",
            get: function() {
                return this._currentScanner
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._currentScanner.currentTime
            },
            set: function(e) {
                this._properties.currentTime = e, this._currentScanner.currentTime = e
            }
        }, {
            key: "duration",
            get: function() {
                return this._currentScanner.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._currentScanner.ended
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._currentScanner.externalDisplayAvailable
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._currentScanner.externalDisplayActive
            }
        }, {
            key: "loop",
            get: function() {
                return this._currentScanner.loop
            },
            set: function(e) {
                this._properties.loop = e, this._currentScanner.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._currentScanner.muted
            },
            set: function(e) {
                this._properties.muted = !!e, this._currentScanner.muted = !!e
            }
        }, {
            key: "playsinline",
            get: function() {
                return this._currentScanner.playsinline
            },
            set: function(e) {
                this._properties.playsinline = !!e, this._currentScanner.playsinline = !!e
            }
        }, {
            key: "paused",
            get: function() {
                return this._currentScanner.paused
            }
        }, {
            key: "played",
            get: function() {
                return this._currentScanner.played
            }
        }, {
            key: "seekable",
            get: function() {
                return this._currentScanner.seekable
            }
        }, {
            key: "seeking",
            get: function() {
                return this._currentScanner.seeking
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._currentScanner.defaultPlaybackRate
            },
            set: function(e) {
                this._properties.defaultPlaybackRate = e, this._currentScanner.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._currentScanner.playbackRate
            },
            set: function(e) {
                this._properties.playbackRate = e, this._currentScanner.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._currentScanner.preload
            },
            set: function(e) {
                this._properties.preload = e, this._currentScanner.preload = e
            }
        }, {
            key: "autoPictureInPicture",
            get: function() {
                return this._currentScanner.autoPictureInPicture
            },
            set: function(e) {
                this._properties.autoPictureInPicture = !!e, this._currentScanner.autoPictureInPicture = !!e
            }
        }, {
            key: "disablePictureInPicture",
            get: function() {
                return this._currentScanner.disablePictureInPicture
            },
            set: function(e) {
                this._properties.disablePictureInPicture = !!e, this._currentScanner.disablePictureInPicture = !!e
            }
        }, {
            key: "video",
            get: function() {
                return this._video
            },
            set: function(e) {
                this._video && this._video.deactivate(), this._blacklistedScanners = [], this._setUpRebufferMonitor(), null === e ? (this._video = null, this._resetScanner()) : (this._video = new mo(e), this._updateScanner())
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._currentScanner.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._currentScanner.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._currentScanner.volume
            },
            set: function(e) {
                if (e < 0 || e > 1) throw new mr("IndexSizeError", `Failed to set the 'volume' property: The volume provided (${e}) is outside of the range [0, 1].`);
                this._properties.volume = e, this._currentScanner.volume = e
            }
        }, {
            key: "brainDebug",
            get: function() {
                return this._currentScanner.brainDebug
            }
        }]), e
    }(),
    yo = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._video = r._telecine._currentScanner._video, r
        }
        ln(t, e), sn(t, null, [{
            key: "displayName",
            get: function() {
                return "CanvasEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !0
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Or, Oi]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            this._activated = !0, this._canvas = document.createElement("canvas"), this._canvas.className = "vp-canvas-effect", this._canvas.style.cssText = "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        ", this._ctx = this._canvas.getContext("2d", {
                alpha: !1
            }), this._element.appendChild(this._canvas), this._startRendering()
        }, n.deactivate = function() {
            this._canvas && this._element.removeChild(this._canvas), this._stopRendering(), this._activated = !1
        }, n._startRendering = function() {
            this._requestFrame()
        }, n._requestFrame = function() {
            this._animationFrame = window.requestAnimationFrame(this._renderFrame.bind(this))
        }, n._renderFrame = function() {
            const e = this._video,
                t = this._canvas;
            t.width = e.clientWidth, t.height = e.clientHeight;
            const n = Math.floor(this._videoContentWidth()),
                r = Math.floor(this._videoContentHeight()),
                i = Math.floor((e.clientWidth - n) / 2),
                o = Math.floor((e.clientHeight - r) / 2);
            this._ctx.fillStyle = "#000", this._ctx.fillRect(0, 0, t.width, t.height), this._ctx.drawImage(e, i, o, n, r), this._requestFrame()
        }, n._videoRatio = function() {
            return this._video.videoHeight / this._video.videoWidth
        }, n._videoContentWidth = function() {
            return Math.min(this._video.clientHeight / this._videoRatio(), this._video.clientWidth)
        }, n._videoContentHeight = function() {
            return Math.min(this._video.clientWidth * this._videoRatio(), this._video.clientHeight)
        }, n._stopRendering = function() {
            this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, t
    }(to),
    bo = function() {
        function e() {}
        return sn(e, null, [{
            key: "Equirect",
            get: function() {
                return "equirectangular"
            }
        }]), e
    }(),
    Eo = function() {
        function e() {}
        return sn(e, null, [{
            key: "Mono",
            get: function() {
                return "mono"
            }
        }, {
            key: "TopBottom",
            get: function() {
                return "top-bottom"
            }
        }]), e
    }(),
    So = function() {
        function e(e, t, n) {
            switch (this.isStereo = t !== Eo.Mono, this._leftEye = null, this._rightEye = null, e) {
                case bo.Equirect:
                    this.createEquirectProjection(n, t);
                    break;
                default:
                    this.createEquirectProjection(n, Eo.Mono)
            }
        }
        var t = e.prototype;
        return t.createEquirectProjection = function(e, t) {
            switch (t) {
                case Eo.Mono:
                    this._leftEye = this._createEquirectangularSphereMesh(e);
                    break;
                case Eo.TopBottom:
                    this._leftEye = this._createEquirectangularSphereMesh(e), this._rightEye = this._createEquirectangularSphereMesh(e), this._leftEye.layers.set(1), this._rightEye.layers.set(2), this._chopGeometryUvs(this._leftEye.geometry, .5, 0), this._chopGeometryUvs(this._rightEye.geometry, .5, .5)
            }
        }, t._createEquirectangularSphereMesh = function(t, n, r, i) {
            const o = new THREE.SphereBufferGeometry(n || e.SPHERE_RADIUS, r || e.TESSELATION_WIDTH, i || e.TESSELATION_HEIGHT);
            o.scale(-1, 1, 1);
            const s = new THREE.MeshBasicMaterial({
                map: t
            });
            return new THREE.Mesh(o, s)
        }, t._chopGeometryUvs = function(e, t, n, r = 1) {
            for (let i = 0; i < e.attributes.uv.array.length; i += 2) e.attributes.uv.array[i + r] *= t, e.attributes.uv.array[i + r] += n
        }, sn(e, [{
            key: "left",
            get: function() {
                return this._leftEye
            }
        }, {
            key: "right",
            get: function() {
                return this._rightEye
            }
        }], [{
            key: "TESSELATION_WIDTH",
            get: function() {
                return 120
            }
        }, {
            key: "TESSELATION_HEIGHT",
            get: function() {
                return 80
            }
        }, {
            key: "SPHERE_RADIUS",
            get: function() {
                return 500
            }
        }]), e
    }(),
    To = function() {
        function e(e) {
            this._renderer = e
        }
        var t = e.prototype;
        return t.hasVRHeadset = function() {
            return Gn.webvr ? navigator.getVRDisplays().then(e => e.length > 0 ? (this._renderer.vr.setDevice(e[0]), e[0]) : null) : null
        }, t.enter = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().requestPresent([{
                source: this._renderer.domElement
            }])
        }, t.exit = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().exitPresent()
        }, sn(e, [{
            key: "supported",
            get: function() {
                return Gn.webvr
            }
        }, {
            key: "device",
            get: function() {
                return this._renderer && this._renderer.vr.getDevice() ? this._renderer.vr.getDevice() : null
            }
        }, {
            key: "isPresenting",
            get: function() {
                return !(!this._renderer || !this._renderer.vr.getDevice()) && this._renderer.vr.getDevice().isPresenting
            }
        }]), e
    }(),
    wo = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._camera = null, r._scene = null, r._renderer = null, r.isUserInteracting = !1, r._onMouseDownMouseX = 0, r._onMouseDownMouseY = 0, r._coordinates = {
                lat: 0,
                long: 0
            }, r._previousCoordinates = {
                lat: 0,
                long: 0
            }, r._onMouseDownCoordinates = {
                lat: 0,
                long: 0
            }, r._previousCameraProps = r.cameraProps, r._phi = 0, r._theta = 0, r._rotation = 0, r._video = r._telecine._currentScanner._video, r._videoRefreshLoop = null, r._gyroVector = {
                x: 0,
                y: 0
            }, r._offset = {
                lat: 0,
                long: 0
            }, r._writeSpeeds = {
                videoFps: r._options.fps,
                motionRenderSpeed: 60
            }, r._maxTimeBetweenWrites = 1e3 / r._writeSpeeds.videoFps, r._motionTimeouts = [], r._movingAutomatically = !1, r._deviceMotionHasOccurred = !1, r._updateFromGyroscopePending = !1, r._keysPressed = {
                up: !1,
                down: !1,
                left: !1,
                right: !1
            }, r
        }
        ln(t, e), sn(t, [{
            key: "isUserInteracting",
            set: function(e) {
                e !== this._isUserInteracting && (this._isUserInteracting = e, e ? this._options.isMobile || this._telecine.fire(In.MOTION_START) : this._options.isMobile || this._telecine.fire(In.MOTION_END))
            },
            get: function() {
                return this._isUserInteracting
            }
        }], [{
            key: "displayName",
            get: function() {
                return "ThreeSixtyEffect"
            }
        }, {
            key: "supported",
            get: function() {
                try {
                    const e = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (rl) {
                    return this._telecine._currentScanner.fire(In.SPATIAL_UNSUPPORTED), !1
                }
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [Or, Oi]
            }
        }]), t.frustumSurfaceArea = function(e, t, n) {
            const r = 2 * So.SPHERE_RADIUS * 2 * Math.sin(Math.PI / 180 * (e / 2));
            return r * (r * t / n) / (4 * Math.PI * Math.pow(So.SPHERE_RADIUS, 2))
        };
        var n = t.prototype;
        return n.activate = function() {
            return new Promise((e, t) => {
                if (window.THREE) return void e();
                const n = document.createElement("script");
                n.src = this._options.threeUrl, document.body.appendChild(n), n.onload = () => {
                    e()
                }
            }).then(() => this._initialize())
        }, n._initialize = function() {
            this._activated = !0, this._camera = new THREE.PerspectiveCamera(this._options.fieldOfView, this._video.clientWidth / this._video.clientHeight, 1, 2 * So.SPHERE_RADIUS), this._camera.target = new THREE.Vector3(0, 0, 0), this._camera.layers.enable(1), this._initializeAutoMovement(this._options.directorTimeline), this._scene = new THREE.Scene, this._texture = new THREE.VideoTexture(this._video), this._texture.generateMipmaps = !1, this._texture.minFilter = THREE.NearestFilter, this._texture.maxFilter = THREE.NearestFilter, this._texture.format = THREE.RGBFormat, this._projector = new So(this._options.projection, this._options.stereoMode, this._texture), this._projector.isStereo && this._scene.add(this._projector.right), this._scene.add(this._projector.left), this._renderer = new THREE.WebGLRenderer, this._renderer.vr.enabled = !0, this._renderer.setPixelRatio(window.devicePixelRatio), this._output = document.createElement("div"), this._output.appendChild(this._renderer.domElement), this._element.appendChild(this._output), this._hideOutput(), this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), this._startRendering(), this._telecine._currentScanner.paused || this._showOutput(), this._webvr = new To(this._renderer), this._webvr.supported && this._webvr.hasVRHeadset().then(e => {
                setTimeout(() => {
                    this._telecine.fire(In.WEBVR_HARDWARE_AVAILABLE, this._webvr.device)
                }, 100)
            }).catch(e => {})
        }, n.toggleVR = function() {
            if (this._webvr.isPresenting) this._webvr.exit().then(() => {
                this.adjustRenderSize()
            }).catch(e => {});
            else {
                if (this._telecine._currentScanner.paused) return;
                this._webvr.enter().then(() => {
                    this.adjustRenderSize()
                }).catch(e => {})
            }
        }, n.onplay = function() {
            this._activated && (this._showOutput(), this.adjustRenderSize())
        }, n.deactivate = function() {
            this._output && this._element.removeChild(this._output), this._stopRendering(), this._activated = !1
        }, n.snapToCenter = function() {
            this._motionTimeouts.forEach(e => clearTimeout(e));
            const e = ((this._coordinates.long >= 180 ? 360 : 0) - this._coordinates.long) / 11,
                t = (0 - this._coordinates.lat) / 11;
            this._rotation = 0;
            for (let n = 0; n < 50; n++) this._motionTimeouts.push(setTimeout(() => {
                0 === n && (this._movingAutomatically = !0, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)), 49 === n && (this._movingAutomatically = !1, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps)), this._updateViewpoint(this._coordinates.lat + t / Math.pow(1.1, n), this._coordinates.long + e / Math.pow(1.1, n)), this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t / Math.pow(1.1, n), this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t / Math.pow(1.1, n)
            }, n * this._maxTimeBetweenWrites))
        }, n.isStereo = function() {
            return !!this._projector && this._projector.isStereo
        }, n._initializeAutoMovement = function(e) {
            e && e[0] && void 0 !== e[0].p && "undefined" !== e[0].y && this._updateViewpoint(e[0].p, e[0].y)
        }, n._updateViewpoint = function(e, t) {
            this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, e %= 360, this._coordinates.lat = Math.max(-85, Math.min(85, e)), t = (t %= 360) >= 0 ? t : 360 + t, this._coordinates.long = t
        }, n.makeContact = function(e) {
            this.isUserInteracting = !0, this._motionTimeouts.forEach(e => clearTimeout(e)), this._movingAutomatically = !1, this._contactPoint = {
                x: e.x,
                y: e.y
            }, this._onMouseDownCoordinates.long = this._coordinates.long, this._onMouseDownCoordinates.lat = this._coordinates.lat, this._motionStart = {
                long: this._coordinates.long,
                lat: this._coordinates.lat
            }, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)
        }, n.move = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._motionStart.lat - .2 * (this._contactPoint.y - e.y),
                n = .2 * (this._contactPoint.x - e.x) + this._motionStart.long;
            this._updateViewpoint(t, n)
        }, n.moveWheel = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._coordinates.lat - .1 * e.y,
                n = this._coordinates.long + .1 * e.x;
            this._updateViewpoint(t, n)
        }, n.moveDevice = function(e, t, n, r) {
            this._updateFromGyroscopePending = !0;
            const i = new THREE.Quaternion;
            let o = window.orientation;
            null === o && (o = this._video.clientWidth > this._video.clientHeight ? 90 : 0), e = e ? THREE.Math.degToRad(e) : 0, t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0;
            const s = o ? THREE.Math.degToRad(o) : 0,
                a = new THREE.Vector3(0, 0, 1),
                c = new THREE.Euler,
                u = new THREE.Quaternion,
                l = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
            c.set(t, e, -n, "YXZ"), i.setFromEuler(c), i.multiply(l), i.multiply(u.setFromAxisAngle(a, -s)), this._gyroVector = (new THREE.Euler).setFromQuaternion(i, "YXZ"), this._rotation = this._gyroVector.z, this.isUserInteracting || this._movingAutomatically || this._updateViewpoint(THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long), this._deviceMotionHasOccurred || (this.snapToCenter(), this._telecine.fire(In.MOTION_START), this._deviceMotionHasOccurred = !0)
        }, n.releaseContact = function(e) {
            if (this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long, this.isUserInteracting = !1, this._motionStart && !e) {
                const e = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                this._moveDueToMomentum(e)
            }
        }, n.abandonMotion = function() {
            this.isUserInteracting = !1, this._motionStart = null
        }, n.keyPress = function(e) {
            this._options.keyboardDisabled || (this._keyIsDown() || (this.isUserInteracting = !0, this._motionTimeouts && this._motionTimeouts.forEach(e => clearTimeout(e))), this._keysPressed[e] || (this._keysPressed[e] = !0))
        }, n.keyUp = function(e) {
            this._keysPressed[e] = !1, this._keyIsDown() || (this.isUserInteracting = !1, this._moveDueToMomentum(1 / 0))
        }, n._moveFromKeyPress = function() {
            Object.keys(this._keysPressed).forEach(e => {
                if (this._keysPressed[e]) switch (e) {
                    case "up":
                        this._updateViewpoint(this._coordinates.lat + 2, this._coordinates.long);
                        break;
                    case "down":
                        this._updateViewpoint(this._coordinates.lat - 2, this._coordinates.long);
                        break;
                    case "left":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long - 2);
                        break;
                    case "right":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long + 2)
                }
            })
        }, n._keyIsDown = function() {
            return Object.keys(this._keysPressed).map(e => this._keysPressed[e]).some(e => e)
        }, n._moveDueToMomentum = function(e) {
            if (e >= 20) {
                const t = {
                    long: this._coordinates.long - this._previousCoordinates.long,
                    lat: this._coordinates.lat - this._previousCoordinates.lat
                };
                e === 1 / 0 && (t.long /= 2, t.lat /= 2);
                for (let e = 1; e < 50; e++) this._motionTimeouts.push(setTimeout(() => {
                    1 === e && (this._movingAutomatically = !0), 49 === e && (this._movingAutomatically = !1, this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps);
                    const n = 2 / Math.pow(e, 1.5);
                    this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t.long, this._updateViewpoint(this._coordinates.lat + t.lat * n, this._coordinates.long + t.long * n)
                }, e * this._maxTimeBetweenWrites))
            }
        }, n.onseeked = function() {
            this._activated && this._update()
        }, n.onresize = function() {
            this.adjustRenderSize(), this.isUserInteracting = !1
        }, n._update = function() {
            if (!this.isVRPresenting) {
                this._phi = THREE.Math.degToRad(90 + this._coordinates.lat), this._theta = THREE.Math.degToRad(this._coordinates.long), this._camera.position.set(Math.sin(this._phi) * Math.cos(this._theta), Math.cos(this._phi), Math.sin(this._phi) * Math.sin(this._theta)), this._camera.lookAt(this._camera.target), this._camera.rotation.z += this._rotation;
                const e = this.cameraProps;
                this._telecine.fire(In.CAMERA_UPDATE, e), this._previousCameraProps.yaw === e.yaw && this._previousCameraProps.pitch === e.pitch && this._previousCameraProps.roll === e.roll && this._previousCameraProps.fov === e.fov || (this._previousCameraProps = e, this._telecine.fire(In.CAMERA_CHANGE, e))
            }
            this._renderer.render(this._scene, this._camera)
        }, n.adjustRenderSize = function() {
            if (this.isVRPresenting) this._camera.aspect = this._video.clientWidth / this._video.clientHeight, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._video.clientWidth, this._video.clientHeight);
            else {
                this._video.clientWidth > this._video.clientHeight ? this._camera.aspect = Math.max(1, Math.min(2, this._video.clientWidth / this._video.clientHeight)) : this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)), this._camera.updateProjectionMatrix();
                const e = ur(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                this._renderer.setSize(e.width, e.height), this._output.style.paddingTop = `${e.top}px`
            }
        }, n._startRendering = function() {
            this._renderer.setAnimationLoop(() => {
                this._keyIsDown() && this._moveFromKeyPress(), this._update()
            })
        }, n._stopRendering = function() {
            this._renderer.setAnimationLoop(null)
        }, n._showOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "block"
            })
        }, n._hideOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "none"
            })
        }, n._styleOutput = function({
            backgroundColor: e,
            display: t
        } = {}) {
            this._output.style.cssText = `position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:${e};width:100%;height:100%;text-align:center;display:${t}`
        }, sn(t, [{
            key: "currentCoordinates",
            get: function() {
                return this._coordinates
            },
            set: function([e, t]) {
                if (e > 90 || e < -90) throw new RangeError("Latitude should be a float between -90 and 90.");
                if (t < 0 || t > 360) throw new RangeError("Longitude should be a float between 0 and 360.");
                this._updateViewpoint(e, t), this._update()
            }
        }, {
            key: "cameraProps",
            get: function() {
                return {
                    yaw: this._coordinates.long,
                    pitch: this._coordinates.lat,
                    roll: this.roll,
                    fov: this.fieldOfView
                }
            },
            set: function(e) {
                e = un(un({}, this.cameraProps), e), this.fieldOfView = e.fov, this.roll = e.roll, this.currentCoordinates = [e.pitch, e.yaw]
            }
        }, {
            key: "roll",
            get: function() {
                return 180 * this._rotation / Math.PI
            },
            set: function(e) {
                if (e < -180 || e > 180) throw new RangeError("Roll should be a float between -180 and 180.");
                this._rotation = THREE.Math.degToRad(e)
            }
        }, {
            key: "isVRPresenting",
            get: function() {
                return this._webvr && this._webvr.isPresenting
            }
        }, {
            key: "fieldOfView",
            get: function() {
                return this._camera ? this._camera.fov : this._options.fieldOfView
            },
            set: function(e) {
                this._camera.fov = e, this._camera.updateProjectionMatrix(), this._renderer.render(this._scene, this._camera)
            }
        }, {
            key: "hasVRHeadset",
            get: function() {
                return this._webvr && !!this._webvr.device
            }
        }]), t
    }(to);

function Ao(e) {
    return "symbol" == typeof e || V(e) && "[object Symbol]" == p(e)
}
var Io = /^\s+|\s+$/g,
    ko = /^[-+]0x[0-9a-f]+$/i,
    Ro = /^0b[01]+$/i,
    Po = /^0o[0-7]+$/i,
    Do = parseInt;

function Oo(e) {
    if ("number" == typeof e) return e;
    if (Ao(e)) return NaN;
    if (m(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = m(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(Io, "");
    var n = Ro.test(e);
    return n || Po.test(e) ? Do(e.slice(2), n ? 2 : 8) : ko.test(e) ? NaN : +e
}
var Co = a ? a.prototype : void 0,
    xo = Co ? Co.toString : void 0;

function Lo(e) {
    if ("string" == typeof e) return e;
    if (W(e)) return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }(e, Lo) + "";
    if (Ao(e)) return xo ? xo.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Mo(e) {
    return null == e ? "" : Lo(e)
}
var No = s.isFinite,
    Fo = Math.min,
    Uo = function(e) {
        var t = Math.round;
        return function(e, n) {
            if (e = Oo(e), (n = null == n ? 0 : Fo(function(e) {
                    var t = function(e) {
                            return e ? (e = Oo(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        }(e),
                        n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }(n), 292)) && No(e)) {
                var r = (Mo(e) + "e").split("e");
                return +((r = (Mo(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
            }
            return t(e)
        }
    }();

function Bo(e) {
    return !isNaN(e)
}

function jo(e) {
    return Uo(e, 3)
}
let Vo = 0;

function Ho(e = "b") {
    return `${e}${++Vo}`
}
Ho(), Ho();
const Xo = Ho(),
    qo = Ho(),
    Go = Ho(),
    zo = Ho(),
    Wo = Ho(),
    Yo = Ho(),
    $o = Ho(),
    Ko = Ho(),
    Qo = Ho(),
    Jo = Ho(),
    Zo = Ho(),
    es = Ho(),
    ts = Ho(),
    ns = Ho(),
    rs = Ho();
var is = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: Yo,
        TELECINE_READY: $o,
        TELECINE_VIDEO_INIT: Ko,
        PLAY_INITIATED: Qo,
        QUALITY_CHANGED: Jo,
        FORCED_QUALITY: Zo,
        CUE_CHANGED: es,
        CAPTIONS_CHANGED: ts,
        SPATIAL_PLAYBACK_TOGGLED: ns,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: rs
    }),
    os = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
const ss = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    as = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    cs = (un(un(un(un(un(un(un(un(un({}, En), wn), An), os), In), Sn), kn), Rn), is), un(un({}, An), os));

function us(e) {
    var t;
    return "done" === (null == e || null == (t = e.archive) ? void 0 : t.status)
}

function ls(e) {
    return "pending" === (null == e ? void 0 : e.status)
}

function ds(e) {
    return "started" === (null == e ? void 0 : e.status)
}

function hs(e) {
    return "ended" === (null == e ? void 0 : e.status)
}

function fs(e) {
    return ps(e, "/playlist/refresh")
}

function ps(e, t) {
    var n;
    const r = null == (n = e.request.files.hls) ? void 0 : n.default_cdn,
        {
            signature: i,
            timestamp: o,
            expires: s
        } = e.request;
    return `${`https://${e.player_url}/live/${e.video.id}`}${t}${`?signature=${i}&time=${o}&expires=${s}&cdn=${r}`}`
}
var ms = Object.prototype.hasOwnProperty;

function _s(e) {
    if (null == e) return !0;
    if (ve(e) && (W(e) || "string" == typeof e || "function" == typeof e.splice || Q(e) || ce(e) || z(e))) return !e.length;
    var t = We(e);
    if ("[object Map]" == t || "[object Set]" == t) return !e.size;
    if (he(e)) return !_e(e).length;
    for (var n in e)
        if (ms.call(e, n)) return !1;
    return !0
}

function vs(e) {
    const t = this;
    let n = {};
    const r = {
        get attributes() {
            return Object.assign({}, t)
        },
        get previousAttributes() {
            return n
        },
        clear() {
            i();
            var e = t.attributes;
            for (var n in e) delete t[n]
        },
        set(e) {
            for (var n in i(), e = lt(e)) t[n] = e[n]
        },
        clone: () => new vs(t.attributes),
        toJSON: () => lt(t.attributes)
    };

    function i() {
        _s(t.attributes) || (n = lt(t.attributes))
    }
    return r.set(e), vt(t, r)
}

function gs(e, t) {
    const n = new vs(rn(e, t));
    let r = !1;
    return gt(n, {
        reset: function(e) {
            return n.clear(),
                function(e) {
                    r = !0, n.set(e), rn(n, t)
                }(e), n
        },
        isNewVideo: function() {
            const e = n.previousAttributes;
            return !r || e.video.id !== n.video.id || e.video.version.current !== n.video.version.current || e.video.live_event && !us(e.video.live_event) && (!n.video.live_event || us(n.video.live_event))
        }
    })
}
var ys = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    bs = /^\w*$/;

function Es(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var n = function n() {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            o = n.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, r);
        return n.cache = o.set(i, s) || o, s
    };
    return n.cache = new(Es.Cache || L), n
}
Es.Cache = L;
var Ss = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Ts = /\\(\\)?/g,
    ws = function(e) {
        var t = Es((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(Ss, (function(e, n, r, i) {
                    t.push(r ? i.replace(Ts, "$1") : n || e)
                })), t
            }), (function(e) {
                return 500 === n.size && n.clear(), e
            })),
            n = t.cache;
        return t
    }();

function As(e, t) {
    return W(e) ? e : function(e, t) {
        if (W(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !Ao(e)) || bs.test(e) || !ys.test(e) || null != t && e in Object(t)
    }(e, t) ? [e] : ws(Mo(e))
}

function Is(e) {
    if ("string" == typeof e || Ao(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function ks(e, t) {
    for (var n = 0, r = (t = As(t, e)).length; null != e && n < r;) e = e[Is(t[n++])];
    return n && n == r ? e : void 0
}

function Rs(e, t, n) {
    var r = null == e ? void 0 : ks(e, t);
    return void 0 === r ? n : r
}

function Ps(e, t, n) {
    return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = Oo(n)) == n ? n : 0), void 0 !== t && (t = (t = Oo(t)) == t ? t : 0),
        function(e, t, n) {
            return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
        }(Oo(e), t, n)
}

function Ds(e) {
    return e.quality || e.metadata.quality
}

function Os(e, t = !1, n = !1) {
    let r = e.url;
    if ("avc_url" in e && (r = e.avc_url), n) return r;
    const i = t ? Gn.spatialHEVC && Gn.hevc : Gn.hevc,
        o = t ? Gn.spatialHEVC && Gn.hdr : Gn.hdr;
    return Gn.dolbyVision && "hevc_dvh1_url" in e ? r = e.hevc_dvh1_url : o && "hevc_hdr_url" in e ? r = e.hevc_hdr_url : i && "hevc_sdr_url" in e ? r = e.hevc_sdr_url : Gn.av1 && "av1_url" in e && (r = e.av1_url), r
}

function Cs(e) {
    return e.fallback_url
}

function xs(e, t = !1) {
    const n = e.request.files,
        r = n.hls.default_cdn,
        i = e.request.drm,
        o = n.hls.cdns[r],
        s = t ? Cs(o) : Os(o, e.video.spatial, i);
    return {
        id: `hls-${r}-${e.video.id}`,
        src: s,
        mime: ss.hls,
        priority: 2,
        metadata: {
            cdn: r,
            origin: n.hls.cdns[r].origin,
            quality: "sd"
        }
    }
}

function Ls(e, t = !1) {
    const n = e.request.files;
    return _s(n.dash) ? [] : Object.keys(n.dash.cdns).map(r => {
        const i = n.dash.cdns[r],
            o = t ? Cs(i) : Os(i, e.video.spatial);
        return {
            id: `dash-${r}-${e.video.id}`,
            src: o,
            mime: e.request.drm ? ss.dashMpd : ss.dash,
            priority: r === n.dash.default_cdn ? 1 : 2,
            metadata: {
                cdn: r,
                origin: n.dash.cdns[r].origin,
                quality: "sd"
            }
        }
    })
}

function Ms(e) {
    if (_s(e.progressive)) return [];
    let t = e.progressive;
    return "progressive_avc" in e && (t = e.progressive_avc), t.filter(Fs(t))
}

function Ns(e) {
    if ("number" == typeof e) return e;
    const t = e.split("-");
    return 5 === t.length ? t[0] : parseInt(t[0], 10)
}

function Fs(e) {
    const t = e.filter(Us).map(Ds);
    return e => -1 === t.indexOf(Ds(e)) || Us(e)
}

function Us(e) {
    let t = e.fps;
    return "metadata" in e && (t = e.metadata.fps), t > 30
}

function Bs(e) {
    return js(e) >= 720
}

function js(e) {
    return "string" != typeof e && (e = Ds(e)), parseInt(e, 10)
}

function Vs(e) {
    const t = Ms(e.request.files).map(e => e.quality);
    return Hs(e, e.embed.quality, t)
}

function Hs(e, t, n = []) {
    return e.embed.on_site || Gn.android || Gn.iOS || Gn.windowsPhone || !t || n.length && -1 === n.indexOf(t) ? null : t
}

function Xs(e = "desc") {
    return (t, n) => {
        const r = js(t),
            i = qs(t),
            o = js(n),
            s = qs(n);
        return "asc" === e ? r - o || i - s : o - r || s - i
    }
}

function qs(e) {
    return "object" != typeof e ? 0 : "fps" in e ? e.fps : "metadata" in e && "fps" in e.metadata ? e.metadata.fps : 0
}

function Gs(e) {
    const t = e.video.live_event,
        n = e.request.files;
    if (!_s(n.hls)) {
        var r;
        const i = n.hls.default_cdn,
            o = n.hls.cdns[i].json_url || (null == (r = t.playback) ? void 0 : r.hls_noredirect),
            s = e.request.flags.live_dash ? 2 : 1;
        return {
            id: `hls-${i}-${e.video.id}`,
            src: o,
            mime: ss.hlsLive,
            priority: s,
            metadata: {
                cdn: i,
                origin: n.hls.cdns[i].origin,
                quality: "sd"
            }
        }
    }
    return null
}

function zs(e, t) {
    let n = [];
    if (t.video) {
        const r = t.video.currentFile.mime;
        if (r === ss.hlsLive) return t.manifest.video.map(e => un(un({}, e), {}, {
            quality: `${e.height}p`
        }));
        if ([ss.dash, ss.dashMpd].includes(r)) {
            const r = t.video.drmHandler && "sd-fallback" === t.video.drmHandler.state;
            n = function(e, t = !1, n = !1) {
                if (!e) return [];
                let r = e.streams;
                "streams_avc" in e && (r = e.streams_avc);
                const i = t ? Gn.spatialHEVC && Gn.hevc : Gn.hevc,
                    o = t ? Gn.spatialHEVC && Gn.hdr : Gn.hdr;
                return Gn.dolbyVision && "streams_hevc_dvh1" in e ? r = e.streams_hevc_dvh1 : o && "streams_hevc_hdr" in e ? r = e.streams_hevc_hdr : i && "streams_hevc_sdr" in e ? r = e.streams_hevc_sdr : Gn.av1 && "streams_av1" in e && (r = e.streams_av1), n && "streams_fallback" in e && (r = e.streams_fallback), r
            }(e.request.files.dash, e.video.spatial, r)
        } else n = t.video.files.filter(e => "progressive" === as[e.mime])
    }
    return n.filter(Fs(n)).sort(Xs())
}

function Ws(e) {
    let t = Ds(e);
    const n = {
        "1440p": "2K",
        "2160p": "4K",
        "2700p": "5K",
        "3240p": "6K",
        "3780p": "7K",
        "4320p": "8K"
    };
    for (const r in n) t = t.replace(r, n[r]);
    return t
}

function Ys(e) {
    return Gn.spatialPlayback && e.video.spatial ? 35 : 75
}

function $s(e) {
    return e.request.text_tracks.map(e => ({
        id: e.id,
        src: e.url,
        kind: e.kind,
        label: e.label,
        language: e.lang
    }))
}
let Ks = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    Qs = Ks;
var Js = {
    set: function(e) {
        Qs = Object.assign({}, Ks, e)
    },
    captureException: function(e, t) {
        return Qs.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return Qs.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return Qs.captureBreadcrumb(e, t, n, r)
    }
};

function Zs(e, t, n) {
    const r = e.embed.playsinline && (Gn.mobileAndroid || Gn.iOS >= 10);
    let i = !1,
        o = !1,
        s = !1,
        a = !0,
        c = "auto";

    function u(e) {
        var t, r, i, o;
        const {
            embed: s
        } = e;
        n.disablePictureInPicture = !(null === (t = null !== (r = s.pip) && void 0 !== r ? r : s.settings.pip) || void 0 === t || t), n.autoPictureInPicture = null === (i = null !== (o = s.auto_pip) && void 0 !== o ? o : s.settings.auto_pip) || void 0 === i || i
    }

    function l(e) {
        if (!a && n.buffered && n.buffered.length > 0) {
            e = e || n.currentTime;
            const r = function(e, t) {
                    var n = e.length - 1;
                    if (e.length > 1)
                        for (var r = 0, i = e.length; r < i; r++)
                            if (e.start(r) <= t && e.end(r) >= t) {
                                n = r;
                                break
                            }
                    return n
                }(n.buffered, e),
                o = n.buffered.end(r),
                a = o / n.duration,
                c = n.duration;
            if (t.fire(En.PROGRESS, {
                    loaded: o,
                    duration: c,
                    loadProgress: a
                }), s && i && o === n.duration) return void(i && n.paused && n.play().catch(Js.captureException))
        }
    }

    function d(t) {
        if ("auto" === t) return void(n.video.currentFile.restrictedStreamIndexes = []);
        const r = zs(e, n).reverse().map(e => e.quality).indexOf(t); - 1 !== r && (Js.captureBreadcrumb(`Switched to ${t}`, {}, "video"), n.video.currentFile.restrictedStreamIndexes = [r])
    }

    function h(r) {
        const i = zs(e, n).map(e => e.quality),
            o = Hs(e, e.embed.quality, i);
        o && t.fire(Zo, o), d(o || "auto")
    }
    return t.on(Ko, (function() {
        var i;
        n.playsinline = r, n.muted = e.embed.muted, n.lowLatencyMode = null == (i = e.video.live_event) ? void 0 : i.low_latency, u(e), t.on(Yo, (e, t) => {
            (null == t ? void 0 : t.embed.settings.pip) !== e.embed.settings.pip && u(e)
        })
    })), t.on(qo, (function() {
        a = !0, n.paused || n.pause(), o = !1, i = !1, n.currentTime = 0
    })), n.on(En.PLAY, (function() {
        a = !1, t.fire(En.PLAY, n.currentTime)
    })), n.on(En.PAUSE, (function() {
        i = !1, t.fire(En.PAUSE, n.currentTime, n.ended)
    })), n.on(En.PLAYING, (function(e) {
        l()
    })), n.on(En.TIME_UPDATE, (function(e) {
        const r = n.currentTime;
        if (!a) {
            const e = n.duration,
                i = r / e,
                o = n.playbackRate;
            t.fire(En.TIME_UPDATE, {
                currentTime: r,
                duration: e,
                timeProgress: i,
                playbackRate: o
            })
        }
    })), n.on(En.ENDED, (function(e) {
        n.loop ? n.play().catch(Js.captureException) : (i = !1, t.fire(En.ENDED, e))
    })), n.on(En.LOADED_METADATA, (function(t) {
        const r = n.duration;
        if (isFinite(r) && r > 0) {
            if (r < e.video.duration - 1 || r > e.video.duration + 1) return;
            e.video.duration = r
        }
        e.video.video_width = n.videoWidth, e.video.video_height = n.videoHeight
    })), n.on(En.DURATION_CHANGE, (function(t) {
        const r = n.duration;
        isFinite(r) && (e.video.duration > 0 && (r < e.video.duration - 1 || r > e.video.duration + 1) || (e.video.duration = r))
    })), n.on(En.PROGRESS, l), n.on(wn.BUFFER_STARTED, () => {
        s = !0
    }), n.on(wn.BUFFER_ENDED, () => {
        s = !1
    }), t.on(Xo, (function(t, r) {
        r || (r = (n.duration || e.video.duration) * Ps(t, 0, 1)), r = Ps(r, 0, jo(n.duration || e.video.duration)), n.currentTime = r
    })), n.on(En.SEEKING, (function() {
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(En.SEEKING, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(En.SEEKED, (function() {
        l();
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(En.SEEKED, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(wn.CURRENT_FILE_CHANGE, (function(r) {
        Js.captureBreadcrumb("Current file changed", {
            id: r.id,
            mime: r.mime,
            src: r.src,
            metadata: r.metadata
        }, "video"), r.metadata.quality, [ss.dash, ss.dashMpd].includes(r.mime) && h(), [ss.hlsLive].includes(r.mime) ? n.once(wn.STREAMS_LOADED, () => {
            h()
        }) : function(n) {
            const r = Vs(e);
            r && t.fire(Zo, r)
        }()
    })), {
        play: function() {
            return i = !0, o || (t.fire(Qo), o = !0), n.play()
        },
        pause: function() {
            i = !1, n.pause()
        },
        get quality() {
            return c
        },
        set quality(r) {
            ! function(r) {
                const i = n.video.currentFile.mime;
                if ([ss.dash, ss.dashMpd, ss.hlsLive].includes(i)) d(r);
                else {
                    const t = zs(e, n).filter(e => e.metadata.quality === r);
                    t.length > 0 && (a = !0, n.video.currentFile = t[0])
                }
                c = r, t.fire(Jo, r)
            }(r)
        }
    }
}

function ea(e, t, n) {
    let r = null;
    Gn.spatialPlayback && (t.on(Ko, (function() {
        r && (n.deactivateEffect(wo), r = null, t.fire(ns, r));
        const i = e.video.spatial;
        i && (e.request.drm || n.supportsEffect(wo) && (r = n.activateEffect(wo, {
            threeUrl: e.request.urls.three_js,
            fps: e.video.fps,
            fieldOfView: i.fov,
            directorTimeline: i.director_timeline,
            projection: i.projection,
            stereoMode: i.stereo_mode,
            initialView: i.initial_view,
            isMobile: Gn.android,
            dimensions: e.embed.on_site ? {
                width: 1080,
                height: 540
            } : {
                width: 640,
                height: 360
            },
            keyboardDisabled: !e.embed.keyboard
        }), t.fire(ns, r)))
    })), n.on(In.SPATIAL_UNSUPPORTED, (function() {
        r && (n.deactivateEffect(wo), r = null, t.fire(ns, r))
    })))
}

function ta(e, t, n) {
    let r = null;
    t.on(Ko, (function() {
        r && (n.deactivateEffect(yo), r = null), e.video.canvas && (e.request.drm || n.supportsEffect(yo) && (r = n.activateEffect(yo)))
    }))
}
var na = tn((function(e, t, n) {
    Zt(e, t, n)
}));

function ra(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
let ia = function() {
    function e(e, t, n) {
        ft(this), this._liveEvent = lt(e), this._sessionUrl = e.session_url || e.sessionUrl, this._sessionRefreshUrl = t, this._appPollUrl = n, this._forcedPoll = !1, this._disabled = !1, this._setupPolling()
    }
    var t = e.prototype;
    return t.disable = function() {
        this._disabled = !0
    }, t.forcePolling = function() {
        this.isForcePolling || (this._forcedPoll = !0, this._setupPolling())
    }, t.unforcePolling = function() {
        this._forcedPoll = !1
    }, t._setupPolling = function() {
        !1 !== this._liveEvent.polling && (this._shouldPollApp() ? this._pollApp() : this._shouldPoll() && this._pollLiveApi())
    }, t._shouldPoll = function() {
        var e;
        return !(hs(this._liveEvent) && "started" !== (null == (e = this._liveEvent.archive) ? void 0 : e.status) || !this.isForcePolling && ds(this._liveEvent))
    }, t._shouldPollApp = function() {
        return !this._sessionUrl || !(!ls(this._liveEvent) || null !== this._liveEvent.id)
    }, t._refreshSessionUrl = function() {
        try {
            const e = this;
            return ra(ei(e._sessionRefreshUrl).json(), (function(t) {
                return e._sessionUrl = t.url, t.url
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._pollLiveApi = function() {
        try {
            const e = this;
            if (e._disabled) return;
            let t, n = {};
            return Gn.browser.ie && (n = {
                    Pragma: "no-cache",
                    "Cache-Control": "no-cache"
                }),
                function(e, t) {
                    return e && e.then ? e.then(t) : t()
                }(function(r, i) {
                    try {
                        var o = ra(ei({
                            url: e._sessionUrl,
                            retry: 3,
                            retryStatus: e => [410].includes(e) || xr.retryStatus(e),
                            hooks: {
                                beforeRetry: [e._beforeRetry.bind(e)]
                            },
                            headers: n
                        }).json(), (function(e) {
                            t = e
                        }))
                    } catch (rl) {
                        return i()
                    }
                    return o && o.then ? o.then(void 0, i) : o
                }(0, (function() {
                    throw new Error(`Hit max retries polling ${e._sessionUrl}`)
                })), (function(n) {
                    if (t.status !== e._liveEvent.status) {
                        if (hs(t) && "provision_expire" === t.terminate_reason) return e._sessionUrl = null, e._liveEvent.id = null, void setTimeout(e._setupPolling.bind(e), 5e3);
                        const n = {
                            active: cs.EVENT_ACTIVE,
                            pending: cs.EVENT_PENDING,
                            started: cs.EVENT_STARTED,
                            ended: cs.EVENT_ENDED
                        }[t.status];
                        try {
                            e.fire(n, t)
                        } catch (r) {
                            throw new Error(`Error firing live event status change ${r}`)
                        }
                    }
                    if (t.archive && (!e._liveEvent.archive || t.archive.status !== e._liveEvent.archive.status)) {
                        const n = {
                            started: cs.ARCHIVE_STARTED,
                            done: cs.ARCHIVE_DONE,
                            error: cs.ARCHIVE_ERROR
                        }[t.archive.status];
                        e.fire(n, t)
                    }
                    e._liveEvent = na(e._liveEvent, t), e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), 5e3)
                }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._beforeRetry = function(e, t) {
        try {
            return ra(this._refreshSessionUrl(), (function(t) {
                e.url = t
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, t._pollApp = function() {
        try {
            const e = this;
            if (e._disabled) return;
            return ra(ei(e._appPollUrl).json(), (function(t) {
                let n = !1;
                return function(r, i) {
                    var o = function() {
                        if (null !== t.ingest.session_id) return e._liveEvent.id = t.ingest.session_id, ra(e._refreshSessionUrl(), (function() {
                            e._pollLiveApi(), n = !0
                        }))
                    }();
                    return o && o.then ? o.then(i) : i(o)
                }(0, (function(t) {
                    if (n) return t;
                    setTimeout(e._pollApp.bind(e), 5e3)
                }))
            }))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }, sn(e, [{
        key: "isForcePolling",
        get: function() {
            return this._forcedPoll
        }
    }]), e
}();

function oa(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r
    } catch (rl) {
        return Promise.reject(rl)
    }
}

function sa(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function aa(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function ca(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (rl) {
            return Promise.reject(rl)
        }
    }
}

function ua(e, t) {
    try {
        var n = e()
    } catch (rl) {
        return t(rl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function la(e, t, n) {
    const r = ca((function() {
            return ua((function() {
                return oa(y, (function(e) {
                    return e(n)
                }))
            }), (function(e) {
                return Js.captureException(e), null
            }))
        })),
        i = ca((function(e) {
            return ua((function() {
                return oa(g, (function(t) {
                    return t(n, {
                        TelecineEvents: wn,
                        VideoEvents: En
                    }, e)
                }))
            }), (function(e) {
                return null
            }))
        })),
        o = ca((function() {
            if (u && u.stop(), e.video.p2p) return d = new At, aa((function() {
                if (!u) return function(e = 30) {
                    n.bufferTarget = e, n.presentationDelay = e
                }(), sa(i(e.video.p2p), (function(e) {
                    u = e
                }))
            }), (function() {
                var e;
                null == (e = u) || e.setUp(), d.resolve()
            }))
        })),
        s = ca((function() {
            const {
                kollective_jwt: t,
                kollective_jitc: n
            } = e.video;
            if (l && l.stop(), t && n) return d = new At, aa((function() {
                if (!l) return oa(r, (function(e) {
                    l = e
                }))
            }), (function() {
                var e;
                return sa(null == (e = l) ? void 0 : e.setUp(n, t), (function() {
                    d.resolve()
                }))
            }))
        }));
    let a, c, u, l, d, h, f = !1,
        p = 0,
        m = 0;

    function _() {
        c && (c.disable(), c = null)
    }

    function v() {
        n.endLive()
    }

    function g() {
        return import ("./streamroot.module.js").then(({
            default: e
        }) => e)
    }

    function y() {
        return import ("./kollective.module.js").then(({
            default: e
        }) => e)
    }
    return t.on(Yo, (function() {
        a && !e.isNewVideo() || (a = !0, s(), o(), _(), e.video.live_event && !us(e.video.live_event) && (function(n) {
            c = new ia(n, function(e) {
                return ps(e, "/session/refresh")
            }(e), function(e) {
                return `https://${e.vimeo_url}/live_event/status?clip_id=${e.video.id}`
            }(e)), c.on(cs.EVENT_ENDED, v), Object.keys(cs).forEach(e => {
                const n = cs[e];
                c.on(n, e => {
                    t.fire(n, e)
                })
            })
        }(e.video.live_event), function() {
            p = 0, m = 0;
            let e = !1;
            n.once(En.PLAYING, () => e = !0);
            let r = Rt();
            clearInterval(h), h = setInterval(() => {
                n.paused || (p += Pt(r) / 1e3), e && f && (m += Pt(r) / 1e3),
                    function(e) {
                        if (n.lowLatencyMode && e > 12 && n.latency > 10 && f) {
                            const e = "Rebuffer ratio > 12% and latency > 10s, fallback to normal HLS w/ target latency of 12s.";
                            t.fire(cs.LOW_LATENCY_FALLBACK, {
                                msg: e
                            }), n.lowLatencyMode = !1, n.presentationDelay = 12, n.bufferTarget = 12
                        }
                    }(m / p * 100), r = Rt()
            }, 500)
        }()))
    })), t.on(Go, (function() {
        u && (u.destroy(), u = null), l && (l.destroy(), l = null), _()
    })), n.on(cs.STREAM_ONLINE, (function() {
        c.isForcePolling && c.unforcePolling()
    })), n.on(cs.STREAM_OFFLINE, (function() {
        c.isForcePolling || c.forcePolling()
    })), n.on(wn.BUFFER_STARTED, (function() {
        f = !0
    })), n.on(wn.BUFFER_ENDED, (function() {
        f = !1
    })), {
        get p2pReady() {
            return d
        }
    }
}

function da(e, t = []) {
    if (!e || "null" === e || 0 === t.length) return {
        track: null
    };
    const [n, r] = e.split("."), [i] = n.split(/[-_]/), o = n !== i, s = t.filter(e => o && e.language === n || e.language === i).sort((e, t) => {
        const o = 2 * (e.language === i && e.kind === r) + 2 * (e.language === n) + 1 * (e.kind === r);
        return 2 * (t.language === i && t.kind === r) + 2 * (t.language === n) + 1 * (t.kind === r) - o
    });
    return s.length > 0 ? {
        track: s[0],
        exactMatch: s[0].language === n && s[0].kind === r
    } : {
        track: null
    }
}

function ha(e) {
    const t = e.split(/\n/g);
    let n = "",
        r = [];
    return t.forEach(e => {
        let t = e.match(/<[a-zA-Z]+ ?.*?>/g) || [],
            i = e.match(/<\/[a-zA-Z]+ ?.*?>/g) || [];
        const o = r.map(({
            startTag: e
        }) => e);
        r = [], t = o.concat(t), t.forEach(e => {
            let [t] = e.replace(/<|>/g, "").split(" ");
            const n = i.indexOf(`</${t}>`); - 1 !== n ? i.splice(n, 1) : r.push({
                startTag: e,
                closeTag: `</${t}>`
            })
        });
        const s = r.map(({
                closeTag: e
            }) => e).reverse().join(""),
            a = o.join("");
        n += `<span class="vp-captions-line">${a}${e}${s}</span>`
    }), n
}

function fa(e, t, n, r) {
    let i;

    function o() {
        return t.pictureInPictureActive ? "showing" : "hidden"
    }

    function s() {
        if (0 !== t.video.textTracks.length) {
            if (t.video.textTracks.forEach(e => {
                    e.on("cuechange", a), e.on("modechange", c)
                }), t.video.textTracks.language) {
                const [n] = t.video.textTracks.language.split(/[-_]/), [r] = t.video.textTracks.language.split(/[-_]/);
                if (n !== r) {
                    const n = `${t.video.textTracks.language}.subtitles`,
                        {
                            track: r
                        } = da(n, t.video.textTracks);
                    if (r) return void e.fire(zo, n)
                }
            }
            e.fire(Wo)
        } else e.fire(Wo)
    }

    function a(t) {
        const n = t.target,
            r = n.activeCues,
            i = [];
        let o;
        for (var s = 0, a = r.length; s < a; s++) "" !== r[s].text.replace(/^\s+|\s+$/gm, "") && (o = document.createElement("span"), o.appendChild(r[s].getCueAsHTML()), i.push({
            html: ha(o.innerHTML),
            text: r[s].text
        }));
        e.fire(es, n, i)
    }

    function c(t) {
        const r = t.target,
            i = n.querySelector("video");
        Gn.iOS && function(e) {
            const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
            return void 0 !== t ? !!t : e.webkitDisplayingFullscreen
        }(i) && "showing" === r.mode && e.fire(ts, r)
    }
    e.on(Ko, s), e.on(zo, (function(n) {
        if (i && i.id === n) return;
        let r = t.video.textTracks.getTrackById(n),
            s = !0;
        r || ({
            track: r,
            exactMatch: s
        } = da(n, t.video.textTracks)), r !== i && setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = e === r ? o() : "disabled"
            }), e.fire(ts, r, !s), i = r
        }, 0)
    })), e.on(Wo, (function() {
        setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = "disabled"
            }), e.fire(es), i && (i = null, e.fire(ts, null))
        }, 0)
    })), e.on(wn.TEXT_TRACKS_AVAILABLE, s), e.on([En.ENTER_PICTURE_IN_PICTURE, En.LEAVE_PICTURE_IN_PICTURE], (function() {
        ! function(e) {
            i && i.mode !== e && (i.mode = e)
        }(o())
    }))
}

function pa(e, t, n) {
    let r, i, o;

    function s(e, t) {
        e.forEach(e => {
            const t = r.video.files.getFileById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        }), t.forEach(e => {
            const t = r.video.textTracks.getTrackById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        })
    }
    return function() {
            var t;
            r = new go(n, [Oi, Ki, eo, Or], {
                externalDisplays: [Dn],
                mediaSourceScanner: {
                    droppedFrameSwitchPercent: Ys(e)
                },
                tests: e.request.ab_tests,
                fileCodecs: e.request.file_codecs,
                bufferTarget: e.video.buffer_target,
                presentationDelay: e.video.presentation_delay,
                lowLatencyMode: null == (t = e.video.live_event) ? void 0 : t.low_latency,
                sessionMetadata: {
                    clipId: e.video.id,
                    sessionId: e.request.session
                }
            })
        }(), Object.values(En).filter(e => ![En.TIME_UPDATE, En.PROGRESS, En.SUSPEND, En.ERROR].includes(e)).forEach(e => {
            r.on(e, (t = "") => {
                Js.captureBreadcrumb(e, t, "video event")
            })
        }), r.on(wn.STREAMS_LOADED, (function(t) {
            t.video.forEach(t => {
                const n = function(e, t) {
                    return t.find(t => Ns(t.id) === String(e) || Ns(t.id) === Ns(e))
                }(t.id, zs(e, r));
                n ? (t.profile = n.profile, t.quality = n.quality, t.fps = n.fps) : (t.profile = null, t.quality = `${t.height}p`, t.fps = t.framerate)
            })
        })), r.on(wn.STREAM_CHANGE, (function({
            index: e,
            streams: n,
            metadata: r
        }) {
            const i = n[e];
            Js.captureBreadcrumb("Stream changed", i, "video"), t.fire(wn.STREAM_CHANGE, i, e, n, r)
        })), r.on(wn.STREAM_TARGET_CHANGE, (function({
            index: e,
            streams: n
        }) {
            const r = n[e];
            t.fire(wn.STREAM_TARGET_CHANGE, r, e, n)
        })), r.on(wn.DRM_KEY_SWITCH, (function() {
            if (!e.request.drm.fallback_asset) return;
            const t = $s(e);
            s(function(e) {
                const t = e.request.files;
                let n = [];
                const r = e.request.drm && Gn.browser.safari;
                return (t.hls && (Gn.iPhone || Gn.iPad) || r) && (n = n.concat(xs(e, !0))), t.dash && !r && (n = n.concat(Ls(e, !0))), n
            }(e), t)
        })),
        function(e, t, n) {
            [Sn.ACTIVATED, Sn.AVAILABLE, Sn.DEACTIVATED, Sn.UNAVAILABLE, An.STREAM_OFFLINE, An.STREAM_ONLINE, An.BUFFER_GAP_JUMP, An.BUFFER_GAP_JUMP_PREVENT, An.STALL_JUMP, kn.MEDIASESSION_PAUSE, kn.MEDIASESSION_PLAY, kn.MEDIASESSION_SEEK_BACKWARD, kn.MEDIASESSION_SEEK_FORWARD, wn.AV_DURATION_MISMATCH, wn.BANDWIDTH, wn.BUFFER_ENDED, wn.BUFFER_OCCUPANCY, wn.BUFFER_STARTED, wn.CHAPTER_CUES_UPDATED, wn.CUE_POINT, wn.CURRENT_FILE_CHANGE, wn.DOWNLOAD_END, wn.DOWNLOAD_TIMEOUT, wn.DRM_AUTH_SUCCESS, wn.DRM_KEY_SWITCH, wn.DROPPED_FRAMES, wn.MANIFEST_LOADED, wn.MANIFEST_TIMEOUT, wn.QUOTA_EXCEEDED_ERROR, wn.SCANNER_CHANGE, wn.STREAM_CHANGE_START, wn.STREAM_BUFFER_END, wn.STREAM_BUFFER_START, wn.TEXT_TRACKS_AVAILABLE, wn.DROPPED_FRAME_PERCENT_EXCEEDED, In.CAMERA_UPDATE, In.CAMERA_CHANGE, In.MOTION_END, In.MOTION_START, In.SPATIAL_UNSUPPORTED, In.WEBVR_ENTER, In.WEBVR_EXIT, In.WEBVR_HARDWARE_AVAILABLE, Rn.BRAIN_ML_SWITCH_TO_SKYFIRE, Rn.BRAIN_ML_MODEL_INPUTS, En.DURATION_CHANGE, En.ERROR, En.LOAD_START, En.LOADED_DATA, En.LOADED_METADATA, En.PLAYING, En.RATE_CHANGE, En.RESIZE, En.STALLED, En.VOLUME_CHANGE, En.WAITING, En.ENTER_PICTURE_IN_PICTURE, En.LEAVE_PICTURE_IN_PICTURE, En.WEBKIT_BEGIN_FULLSCREEN, En.WEBKIT_END_FULLSCREEN].forEach(n => {
                e(n, (...e) => {
                    t.apply(void 0, [n].concat(e))
                })
            })
        }(r.on, t.fire), t.fire($o), new fa(t, r, n, e), new ea(e, t, r), new ta(e, t, r), o = new la(e, t, r), i = new Zs(e, t, r), t.on(Yo, (function() {
            const i = e.video.live_event;
            if (ls(i) || function(e) {
                    return "active" === (null == e ? void 0 : e.status)
                }(i) || hs(i) && !us(i)) return void(r.video = null);
            if (ds(i) && r.video && !e.isNewVideo()) return;
            const a = ds(i) ? function(e) {
                    const t = [],
                        n = Gs(e);
                    n && t.push(n);
                    const r = function(e) {
                        var t;
                        const n = e.video.live_event,
                            r = e.request.files;
                        if (_s(r.dash)) return null;
                        const i = r.dash.default_cdn,
                            o = r.dash.cdns[i].url || (null == (t = n.playback) ? void 0 : t.dash_noredirect),
                            s = e.request.flags.live_dash ? 2 : 1;
                        return {
                            id: `dash-${i}-${e.video.id}`,
                            src: o,
                            mime: ss.dashMpd,
                            priority: s,
                            metadata: {
                                cdn: i,
                                origin: r.dash.cdns[i].origin,
                                quality: "sd"
                            }
                        }
                    }(e);
                    return r && t.push(r), t
                }(e) : function(e) {
                    var t, n, r, i, o;
                    const s = e.request.files,
                        a = Ms(s),
                        c = Vs(e),
                        u = e.request.cookie.quality || c || function(e) {
                            const t = Ms(e.request.files);
                            let n = t.some(Bs);
                            Gn.mobileAndroid && (n = !1);
                            let r = "720p";
                            if (n) {
                                const e = t.map(Ds); - 1 !== e.indexOf("1080p") && -1 === e.indexOf("720p") && (r = "1080p")
                            }
                            return e.request.cookie.hd || e.video.default_to_hd ? r : "360p"
                        }(e);
                    let l = function({
                        files: e = [],
                        preference: t = "360p",
                        priorityOffset: n = 0
                    }) {
                        (e = Array.from(e)).sort(Xs());
                        const r = e.map(Ds);
                        if (t) {
                            -1 === r.indexOf(t) && (r.push(t), r.sort((e, t) => js(t) - js(e)));
                            const e = r.indexOf(t),
                                n = r.splice(0, e);
                            n.reverse(), r.push.apply(r, gn(n))
                        }
                        return e.map(e => ({
                            id: e.id,
                            src: e.url,
                            mime: e.mime,
                            priority: r.indexOf(e.quality) + 1 + n,
                            metadata: {
                                profile: e.profile,
                                cdn: e.cdn,
                                origin: e.origin,
                                quality: e.quality,
                                fps: e.fps
                            }
                        }))
                    }({
                        files: a,
                        preference: u,
                        priorityOffset: 2
                    });
                    const d = e.request.drm && Gn.browser.safari,
                        h = (null == (t = e.request.file_codecs) || null == (n = t.hevc) || null == (r = n.dvh1) ? void 0 : r.length) > 0,
                        f = (null == (i = e.request.files.dash) || null == (o = i.streams_hevc_dvh1) ? void 0 : o.length) > 0 && "undefined" != typeof MediaSource,
                        p = Gn.dolbyVision && h && !f;
                    return (s.hls && (Gn.iPhone || Gn.iPad) || d || p) && (l = l.concat(xs(e))), !s.dash || d || p || (l = l.concat(Ls(e))), l
                }(e),
                c = $s(e);
            !r.video || e.isNewVideo() ? function(i, s) {
                const a = e.video.live_event,
                    c = n.getBoundingClientRect(),
                    u = ds(a) ? Gs(e) : function(e) {
                        const t = e.request.files;
                        if (!_s(t.hls)) {
                            const e = t.hls.default_cdn,
                                n = t.hls.cdns[e],
                                r = n.captions || n.url;
                            return r ? {
                                src: r,
                                mime: ss.hls,
                                metadata: {
                                    cdn: e,
                                    origin: n.origin,
                                    quality: "sd"
                                }
                            } : null
                        }
                        return null
                    }(e);
                r.video = {
                    id: e.video.id,
                    title: e.video.title,
                    subtitle: `from ${e.video.owner.name}`,
                    files: i,
                    textTracks: s,
                    chapters: Rs(e, "embed.chapters", []),
                    duration: e.video.duration,
                    externalDisplayFiles: {
                        AirPlay: u
                    },
                    metadata: {
                        playlistRefreshUrl: fs(e),
                        thumbnail: e.video.thumbs[640],
                        useHls: e.request.drm && Gn.browser.safari,
                        drm: e.request.drm,
                        p2pReady: e.video.ecdn_provider && o.p2pReady,
                        percentShown: wo.frustumSurfaceArea(e.video.spatial.fov, c.width, c.height)
                    }
                }, t.fire(Ko)
            }(a, c) : s(a, c)
        })), yt({
            telecine: r
        }, i)
}

function ma(e, t, n) {
    this.constructorName = "BackboneError", this.message = e, this.name = t, this.source = n
}
ma.prototype = new Error;
var _a = {
    embed: {},
    request: {
        cookie: {},
        files: {},
        flags: {},
        urls: {},
        text_tracks: [],
        file_codecs: {}
    },
    video: {
        owner: {},
        thumbs: {},
        version: {}
    },
    user: {}
};

function va(e, t) {
    let n;
    const r = ft();
    let i, o, s = null,
        a = new gs(t, _a);

    function c(e, t) {
        return r.fire(Yo, e, t), e
    }
    const u = {
        play: () => i.play(),
        pause: () => i.pause(),
        get currentTime() {
            return o.currentTime > .1 ? jo(o.currentTime) : 0
        },
        set currentTime(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0) throw new ma("Seconds must be a positive number less than the duration of the video.", "RangeError", "setCurrentTime");
            r.fire(Xo, null, e)
        },
        get duration() {
            return jo(a.video.duration)
        },
        get enabledTextTrack() {
            return s
        },
        loadVideo(e) {
            const t = lt(a);
            return a.reset(e), a = c(a, t), this
        },
        reactivate() {
            var e;
            return (null == (e = o) ? void 0 : e.reactivate) && o.reactivate(), this
        },
        unload() {
            return r.fire(qo), this
        },
        destroy() {
            return r.fire(Go), this
        },
        on(e, t) {
            return r.on(e, t), this
        },
        once(e, t) {
            return r.once(e, t), this
        },
        off(e, t) {
            return r.off(e, t), this
        },
        hasTextTrack(e) {
            let t, n, r = this.textTracks;
            if (Bo(e)) n = r.getTrackById(e);
            else {
                let n = e.split(".")[0];
                t = r.some(e => e.language.toLowerCase() === n.toLowerCase())
            }
            return !(!n && !t)
        },
        enableTextTrack(e, t = null) {
            let n, i, a = this.textTracks;
            if (Bo(e)) s = a.getTrackById(e);
            else {
                if ([n, i = t] = e.split("."), !this.hasTextTrack(e)) throw new ma(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
                s = da(i ? `${n}.${i}` : n, a).track
            }
            if (!s || i && s.kind !== i) throw new ma(`There are no ${i} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            o._setCaptionsState(!0), r.fire(zo, s.id)
        },
        disableTextTrack() {
            s = null, o._setCaptionsState(!1), r.fire(Wo)
        },
        get qualities() {
            return function(e) {
                var t;
                const n = e.representations.map(t => {
                        const n = Ds(t);
                        return {
                            id: n,
                            label: Ws(t),
                            active: e.quality === n
                        }
                    }),
                    r = null == (t = e.video) ? void 0 : t.currentFile.mime;
                return [ss.dash, ss.dashMpd, ss.hlsLive].includes(r) && n.unshift({
                    id: "auto",
                    label: "Auto",
                    active: !e.quality || "auto" === e.quality
                }), n
            }(this)
        },
        get quality() {
            return i.quality
        },
        set quality(e) {
            i.quality = e
        },
        get playbackRate() {
            return o ? o.playbackRate : 1
        },
        set playbackRate(e) {
            o.playbackRate = e, o.defaultPlaybackRate = e
        },
        get textTracks() {
            return o.video ? o.video.textTracks : []
        },
        get representations() {
            return zs(a, o)
        },
        get volume() {
            return o ? o.volume : jo(a.request.cookie.volume)
        },
        set volume(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0 || e > 1) throw new ma("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            o.volume = e
        },
        get videoId() {
            return a.video.id
        },
        get videoWidth() {
            return o.videoWidth || a.video.width
        },
        get videoHeight() {
            return o.videoHeight || a.video.height
        },
        get readyState() {
            return o.videoElement.readyState
        },
        get telecine() {
            return o
        },
        get pictureInPictureEnabled() {
            const e = Gn.spatialPlayback && a.video.spatial,
                t = Gn.browser.safari && this.readyState < 1;
            return t && o.once(En.LOADED_METADATA, () => r.fire(rs)), !t && !e && o.pictureInPictureEnabled
        }
    };
    return a = c(a), i = new pa(a, r, e), o = i.telecine, n = Object.create(o), yt(n, u)
}
var ga = "object" == typeof global && global && global.Object === Object && global,
    ya = "object" == typeof self && self && self.Object === Object && self,
    ba = (ga || ya || Function("return this")()).Symbol,
    Ea = Object.prototype,
    Sa = Ea.hasOwnProperty,
    Ta = Ea.toString,
    wa = ba ? ba.toStringTag : void 0,
    Aa = Object.prototype.toString,
    Ia = ba ? ba.toStringTag : void 0;
var ka = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object),
    Ra = Function.prototype,
    Pa = Object.prototype,
    Da = Ra.toString,
    Oa = Pa.hasOwnProperty,
    Ca = Da.call(Object),
    xa = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }();

function La(e, t, n) {
    var r;
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
        return n(La)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var i = e,
        o = t,
        s = [],
        a = s,
        c = !1;

    function u() {
        a === s && (a = s.slice())
    }

    function l() {
        return o
    }

    function d(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return u(), a.push(e),
            function() {
                if (t) {
                    t = !1, u();
                    var n = a.indexOf(e);
                    a.splice(n, 1)
                }
            }
    }

    function h(e) {
        if (! function(e) {
                if (! function(e) {
                        return null != e && "object" == typeof e
                    }(e) || "[object Object]" != function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Ia && Ia in Object(e) ? function(e) {
                            var t = Sa.call(e, wa),
                                n = e[wa];
                            try {
                                e[wa] = void 0;
                                var r = !0
                            } catch (rl) {}
                            var i = Ta.call(e);
                            return r && (t ? e[wa] = n : delete e[wa]), i
                        }(e) : function(e) {
                            return Aa.call(e)
                        }(e)
                    }(e)) return !1;
                var t = ka(e);
                if (null === t) return !0;
                var n = Oa.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && Da.call(n) == Ca
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
            c = !0, o = i(o, e)
        } finally {
            c = !1
        }
        for (var t = s = a, n = 0; n < t.length; n++)(0, t[n])();
        return e
    }
    return h({
        type: "@@redux/INIT"
    }), (r = {
        dispatch: h,
        subscribe: d,
        getState: l,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            i = e, h({
                type: "@@redux/INIT"
            })
        }
    })[xa] = function() {
        var e, t = d;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                function n() {
                    e.next && e.next(l())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[xa] = function() {
            return this
        }, e
    }, r
}

function Ma() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}
var Na = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
};

function Fa() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function(n, r, i) {
            var o, s = e(n, r, i),
                a = s.dispatch,
                c = {
                    getState: s.getState,
                    dispatch: function(e) {
                        return a(e)
                    }
                };
            return o = t.map((function(e) {
                return e(c)
            })), a = Ma.apply(void 0, o)(s.dispatch), Na({}, s, {
                dispatch: a
            })
        }
    }
}

function Ua(e) {
    return "string" == typeof e || !W(e) && V(e) && "[object String]" == p(e)
}

function Ba() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function ja(e) {
    return Ba() - e
}

function Va() {
    let e = 0,
        t = null,
        n = 0,
        r = !1;

    function i() {
        return e / 1e3
    }
    return {
        trackBufferStart: function(e, i) {
            t = Ba(), n++, r = !0, e(i)
        },
        trackBufferEnd: function(n, i = {}) {
            if (!r) return;
            const o = ja(t);
            e += o, i.buffer_duration = o / 1e3, r = !1, n(i)
        },
        trackVideoExit: function(n) {
            r && !n && (e += ja(t))
        },
        resetLastBufferTime: function() {
            t = null
        },
        getBufferRatio: function(e) {
            const t = i() / e * 100;
            return isNaN(t) ? 0 : Math.round(100 * t) / 100
        },
        getBufferCount: function() {
            return n
        },
        getTotalBufferDuration: i,
        isVideoBuffering: function() {
            return r
        }
    }
}
const Ha = {
    VIDEO_BUFFER_END: "video-buffer-end",
    VIDEO_BUFFER_START: "video-buffer-start",
    VIDEO_ENDED: "video-ended",
    VIDEO_EXIT: "video-exit",
    VIDEO_LOAD_FAILURE: "video-load-failure",
    VIDEO_MINUTE_WATCHED: "video-minute-watched",
    VIDEO_PAUSED: "video-paused",
    VIDEO_PLAYED: "video-played",
    VIDEO_PLAYBACK_ERROR: "video-playback-error",
    VIDEO_READY: "video-ready",
    VIDEO_START_ATTEMPT: "video-start-attempt",
    VIDEO_START_FAILURE: "video-start-failure",
    VIDEO_START_TIME: "video-start-time",
    VIDEO_SEEK: "video-seek",
    VIDEO_SEEKED: "video-seeked",
    CHUNK_DOWNLOADED: "chunk_downloaded"
};

function Xa(e) {
    function t(e, t, n = !0, r = "POST") {
        return new Promise((i, o) => {
            "POST" === r && navigator.sendBeacon ? i({
                status: navigator.sendBeacon(e, t)
            }) : ei({
                url: e,
                body: t,
                method: r,
                async: n,
                headers: {
                    "Content-Type": "text/plain; charset=UTF-8"
                }
            }).then(e => {
                i({
                    response: e,
                    status: e.status
                })
            }).catch(o)
        })
    }
    return {
        log: function(n, r = !0, i = !0) {
            i && (n.event_time = n.event_time || Ba());
            const o = [n];
            return t(e, JSON.stringify(o), r)
        },
        logRequestPromiseWithUrl: t
    }
}

function qa(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        o = !1,
        s = -1,
        a = null,
        c = null,
        u = null,
        l = {
            satisfied: 0,
            tolerable: 0,
            frustrated: 0
        },
        d = null;

    function h() {
        const t = e.getBoundingClientRect(),
            n = e.videoWidth,
            r = e.videoHeight;
        if (0 === n && 0 === r) return;
        let i = "satisfied";
        if (t.width > n && t.height > r && (n / t.width < .4 ? i = "satisfied" : n / t.width < 1 ? i = "tolerable" : n / t.width > 1 && (i = "frustrated")), c) {
            const e = ja(c);
            l[u] += e
        }
        u = i, c = Ba()
    }

    function f() {
        return o ? 0 : 1
    }

    function p() {
        return -1 === s ? null : s > 8e3 || -1 === s ? 0 : s > 2e3 ? .5 : 1
    }

    function m() {
        return d ? (i = r / ja(d), t >= 4 || i >= .12 ? 0 : t < 4 && 0 !== t ? i < .12 ? .5 : 0 : 1) : null
    }

    function _() {
        if (-1 === s) return null;
        switch (h(), Object.keys(l).reduce((e, t) => l[e] > l[t] ? e : t)) {
            case "satisfied":
                return 1;
            case "tolerable":
                return .5;
            case "frustrated":
                return 0
        }
        return null
    }
    return e.addEventListener("playing", () => {
        -1 === s && (a = Ba())
    }), e.addEventListener("progress", () => {
        -1 === s && (d = Ba(), s = ja(a)), h()
    }), {
        startupTimeScore: p,
        rebufferScore: m,
        failureScore: f,
        videoQualityScore: _,
        overallScore: function() {
            return Math.min(f(), p(), m(), _())
        },
        trackBufferStart: function() {
            -1 !== s && (t++, n = Ba())
        },
        trackBufferEnd: function() {
            -1 !== s && (r += ja(n))
        },
        onError: function(e) {
            e.final && (o = !0)
        }
    }
}

function Ga(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function za(e, t) {
    let n, r, i, o, s, a, c, u, l, d, h, f, p = 0;

    function m() {
        n = 0, r = 0, i = 0, o = null, s = 0, a = !1, c = !1, u = null, l = !1, d = new qa(e), h = new Va, f = {
            bufferTracker: h,
            videoBufferCheck: () => {
                setInterval(() => {
                    let t = e.currentTime;
                    c && !l && !e.paused && !f.bufferTracker.isVideoBuffering() && t < i + .125 && f.bufferTracker.trackBufferStart(v), c && !e.paused && f.bufferTracker.isVideoBuffering() && t > i + .125 && (f.bufferTracker.trackBufferEnd(g), f.bufferTracker.resetLastBufferTime()), i = t
                }, 250)
            },
            addEventData: e => null,
            playbackSessionTimer: () => {
                let t = Ba();
                setInterval(() => {
                    (!e.paused && a || l || f.bufferTracker.isVideoBuffering()) && (s += ja(t) / 1e3), t = Ba()
                }, 500)
            }
        }
    }

    function _(e, n = {}) {
        0 === p && (n = Object.assign(n, f.addEventData(e)), t(e, n))
    }

    function v(e = {}) {
        d.trackBufferStart(), _(Ha.VIDEO_BUFFER_START, e)
    }

    function g(e = {}) {
        d.trackBufferEnd(), _(Ha.VIDEO_BUFFER_END, e)
    }
    return m(), _(Ha.VIDEO_READY),
        function() {
            let t = Math.floor(60 * Math.random());
            setInterval(() => {
                !e.paused && a && (n++, 0 !== r ? n >= 60 && (n = 0, r++, _(Ha.VIDEO_MINUTE_WATCHED)) : n === t && (n = 0, r++, _(Ha.VIDEO_MINUTE_WATCHED)))
            }, 1e3)
        }(), window.addEventListener("unload", t => {
            f.bufferTracker.trackVideoExit(e.paused);
            const n = {
                startup: d.startupTimeScore(),
                rebuffer: d.rebufferScore(),
                failure: d.failureScore(),
                quality: d.videoQualityScore(),
                overall: d.overallScore()
            };
            u && _(Ha.VIDEO_EXIT, {
                vxs: n
            })
        }, !1), e.addEventListener("playing", () => {
            a = !0, l || c && _(Ha.VIDEO_PLAYED)
        }), e.addEventListener("timeupdate", () => {
            if (c) return;
            let e = {
                startup_duration: u ? Ga(ja(u) / 1e3, 2) : null
            };
            _(Ha.VIDEO_START_TIME, e), c = !0
        }), e.addEventListener("pause", () => {
            a = !1, _(Ha.VIDEO_PAUSED)
        }), e.addEventListener("seeking", () => {
            l || (o = Ba(), l = !0, a = !1, _(Ha.VIDEO_SEEK))
        }), e.addEventListener("seeked", () => {
            l = !1, e.paused || (a = !0), _(Ha.VIDEO_SEEKED, {
                seek_duration: ja(o) / 1e3
            }), o = null
        }), e.addEventListener("ended", () => {
            _(Ha.VIDEO_ENDED)
        }), e.addEventListener("waiting", () => {
            a = !1
        }), e.addEventListener("canplay", () => {
            l || f.bufferTracker.isVideoBuffering() && !a && (f.bufferTracker.trackBufferEnd(g), f.bufferTracker.resetLastBufferTime())
        }), {
            globalProperties: function() {
                return {
                    autoplay: e.autoplay,
                    buffer_count: f.bufferTracker.getBufferCount(),
                    total_buffer_duration: f.bufferTracker.getTotalBufferDuration(),
                    buffer_ratio: f.bufferTracker.getBufferRatio(s),
                    client_time: Ba(),
                    is_buffering: f.bufferTracker.isVideoBuffering(),
                    looping: e.loop,
                    minutes_watched: r,
                    network_state: e.networkState,
                    playback_rate: e.playbackRate,
                    player_width: e.getBoundingClientRect().width,
                    player_height: e.getBoundingClientRect().height,
                    session_playback_duration: Ga(s, 2),
                    video_time: e.currentTime,
                    video_height: e.videoHeight,
                    video_width: e.videoWidth,
                    volume: Ga(e.volume, 2)
                }
            },
            logStartRequest: function() {
                u = Ba(), _(Ha.VIDEO_START_ATTEMPT)
            },
            customizeHooks: function(e) {
                f = Object.assign(f, e)
            },
            initHooks: function() {
                f.videoBufferCheck(), f.playbackSessionTimer()
            },
            logBufferStart: v,
            logBufferEnd: g,
            setDisplayContext: function(e) {
                p = e
            },
            handleExternalError: function(e, t) {
                a = !1, d.onError(t), _(c ? Ha.VIDEO_PLAYBACK_ERROR : c ? Ha.VIDEO_START_FAILURE : Ha.VIDEO_LOAD_FAILURE, e)
            },
            reset: m
        }
}
var Wa = function() {
        return s.Date.now()
    },
    Ya = Math.max,
    $a = Math.min;

function Ka(e, t, n) {
    var r, i, o, s, a, c, u = 0,
        l = !1,
        d = !1,
        h = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function f(t) {
        var n = r,
            o = i;
        return r = i = void 0, u = t, s = e.apply(o, n)
    }

    function p(e) {
        return u = e, a = setTimeout(v, t), l ? f(e) : s
    }

    function _(e) {
        var n = e - c;
        return void 0 === c || n >= t || n < 0 || d && e - u >= o
    }

    function v() {
        var e = Wa();
        if (_(e)) return g(e);
        a = setTimeout(v, function(e) {
            var n = t - (e - c);
            return d ? $a(n, o - (e - u)) : n
        }(e))
    }

    function g(e) {
        return a = void 0, h && r ? f(e) : (r = i = void 0, s)
    }

    function y() {
        var e = Wa(),
            n = _(e);
        if (r = arguments, i = this, c = e, n) {
            if (void 0 === a) return p(c);
            if (d) return clearTimeout(a), a = setTimeout(v, t), f(c)
        }
        return void 0 === a && (a = setTimeout(v, t)), s
    }
    return t = Oo(t) || 0, m(n) && (l = !!n.leading, o = (d = "maxWait" in n) ? Ya(Oo(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h), y.cancel = function() {
        void 0 !== a && clearTimeout(a), u = 0, r = c = i = a = void 0
    }, y.flush = function() {
        return void 0 === a ? s : g(Wa())
    }, y
}
const Qa = {
    SETUP_DONE: "SETUP_DONE",
    NOT_SETUP: "NOT_SETUP"
};
let Ja = function() {
    function e() {
        this.version = "1.2.36", this.remotePlayer = null, this.remotePlayerController = null, this.CastContextEventType = null, this.RemotePlayerEventType = null, this.CastState = Qa, this.SessionState = null, this.PlayerState = null, this.currentLoadRequestId = null, this.currentLoadRequestPromise = null
    }
    var t = e.prototype;
    return t.init = function({
        receiverApplicationId: e = "",
        resumeSavedSession: t = !0,
        language: n = null,
        autoJoinPolicy: r = "TAB_AND_ORIGIN_SCOPED"
    } = {}) {
        if (!this.isGCastApiAvailable) throw new Error("CAF is not available. Call setup() first.");
        if ("string" != typeof e || "" === e.trim()) throw new Error("Parameter 'receiverApplicationId' must be valid.");
        switch (r) {
            case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
                break;
            default:
                r = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
        }
        return this.CastContextEventType = cast.framework.CastContextEventType, this.RemotePlayerEventType = cast.framework.RemotePlayerEventType, this.CastState = Object.assign(this.CastState, cast.framework.CastState), this.SessionState = cast.framework.SessionState, this.PlayerState = chrome.cast.media.PlayerState, cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: e.trim(),
            resumeSavedSession: t,
            language: n,
            autoJoinPolicy: r
        }), this.isInitialized ? this.remotePlayerController : this.initRemotePlayer()
    }, t.initRemotePlayer = function() {
        if (!this.isGCastApiAvailable) throw new ReferenceError("CAF is not available. Call setup() first.");
        return this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer), this.remotePlayerController
    }, t.setup = function({
        loadLibrary: e = !0
    } = {}) {
        return new Promise((t, n) => {
            if (this.isGCastApiAvailable) return this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, void t(!0);
            window.__onGCastApiAvailable = (e, r) => {
                if (r) {
                    const e = new Error(r);
                    n(e)
                } else this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, t(e)
            };
            try {
                if (!1 === e) throw new ReferenceError("Cast is not available. Make sure the library has been loaded.");
                this.loadLibrary() || t(!1)
            } catch (r) {
                const e = new Error(r);
                n(e)
            }
        })
    }, t.loadLibrary = function() {
        if (this.isGCastApiAvailable) return !0;
        if (null !== window.chrome && void 0 !== window.chrome && "Google Inc." === window.navigator.vendor) {
            let e = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
            if (!(document.querySelectorAll('script[src^="' + e + '"]').length > 0)) {
                e += "?loadCastFramework=1";
                const t = document.createElement("script");
                return t.src = e, t.async = !0, t.defer = !0, document.head.appendChild(t), !0
            }
        }
        return !1
    }, t.loadMedia = function({
        contentId: e,
        contentType: t,
        currentTime: n = 0,
        duration: r = 0,
        requestCustomData: i = null,
        mediaCustomData: o = null,
        autoRequest: s = !1,
        tracks: a = [],
        ottCastOptions: c
    }) {
        return e ? this.isSessionEstablished ? this.loadMediaOnSession(this.currentSession, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: c
        }) : !0 !== s ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(s => this.loadMediaOnSession(s, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: c
        })) : Promise.reject(new TypeError("Option 'contentId' must be valid."))
    }, t.loadMediaOnSession = function(e, {
        contentId: t,
        contentType: n,
        currentTime: r = 0,
        duration: i,
        requestCustomData: o = null,
        mediaCustomData: s = null,
        tracks: a = [],
        ottCastOptions: c
    }) {
        if (e && e instanceof cast.framework.CastSession) {
            const u = e.getSessionState();
            if (u !== this.SessionState.SESSION_STARTING && u !== this.SessionState.SESSION_STARTED && u !== this.SessionState.SESSION_RESUMED) return Promise.reject(new ReferenceError("Session must be established."));
            const l = this.createLoadRequest(t, n, r, i, o, s, a, c);
            return null !== this.currentLoadRequestId && this.currentLoadRequestId === l.requestId || (this.currentLoadRequestId = l.requestId, this.currentLoadingMediaPromise = e.loadMedia(l).finally(() => {
                this.currentLoadRequestId = null, this.currentLoadingMediaPromise = null
            })), this.currentLoadingMediaPromise
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.requestSession = function() {
        return this.isSessionEstablished ? Promise.resolve(this.currentSession) : this.castContext ? this.castContext.requestSession().then(() => this.currentSession) : Promise.reject(new Error("CastContext is not available. Call setup() first."))
    }, t.sendMessage = function({
        namespace: e,
        data: t = {},
        autoRequest: n = !1
    }) {
        return this.isSessionEstablished ? this.sendMessageOnSession(this.currentSession, {
            namespace: e,
            data: t
        }) : !0 !== n ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(n => this.sendMessageOnSession(n, {
            namespace: e,
            data: t
        }))
    }, t.sendMessageOnSession = function(e, {
        namespace: t,
        data: n = {}
    }) {
        if (e || !(e instanceof cast.framework.CastSession)) {
            const r = e.getSessionState();
            return r !== this.SessionState.SESSION_STARTING && r !== this.SessionState.SESSION_STARTED && r !== this.SessionState.SESSION_RESUMED ? Promise.reject(new ReferenceError("Session must be established.")) : e.sendMessage(t, n)
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.createCastButton = function(e) {
        const t = document.createElement("button", "google-cast-button");
        return e && e.style && (null === e.style["--disconnected-color"] && (e.style["--disconnected-color"] = "#00ADEF"), null === e.style["--connected-color"] && (e.style["--connected-color"] = "#E5E500")), e && Object.keys(e).forEach(n => {
            if ("string" == typeof e[n]) t.setAttribute(n, e[n]);
            else if ("style" === n && "object" == typeof e[n]) {
                let r = "";
                Object.keys(e[n]).forEach(t => {
                    r += t + ":" + e[n][t] + ";"
                }), t.setAttribute(n, r)
            }
        }), t
    }, t.createLoadRequest = function(e, t, n, r, i, o, s, a) {
        const c = a ? new chrome.cast.media.MediaInfo(a.contentId) : new chrome.cast.media.MediaInfo(e.toString(), t);
        c.customData = o, c.duration = r;
        const u = {
            subtitles: chrome.cast.media.TextTrackType.SUBTITLES,
            captions: chrome.cast.media.TextTrackType.CAPTIONS
        };
        c.tracks = s.map(e => {
            const t = new chrome.cast.media.Track(e.id, chrome.cast.media.TrackType.TEXT);
            return t.trackContentId = e.url, t.trackContentType = "text/vtt", t.subtype = u[e.kind], t.name = e.label, t.language = e.lang, t
        });
        const l = new chrome.cast.media.LoadRequest(c);
        return l.customData = a ? a.customData : i, l.currentTime = n || 0, a && (l.credentials = a.credentials, l.credentialsType = a.credentialsType), l
    }, sn(e, [{
        key: "isGCastApiAvailable",
        get: function() {
            return !!("undefined" != typeof cast && cast && cast.framework && cast.framework.VERSION)
        }
    }, {
        key: "castState",
        get: function() {
            return this.castContext ? this.castContext.getCastState() : this.isGCastApiAvailable ? this.CastState.SETUP_DONE : this.CastState.NOT_SETUP
        }
    }, {
        key: "versionGCastApi",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.VERSION : null
        }
    }, {
        key: "castContext",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.CastContext.getInstance() : null
        }
    }, {
        key: "currentSession",
        get: function() {
            return this.castContext ? this.castContext.getCurrentSession() : null
        }
    }, {
        key: "currentSessionObj",
        get: function() {
            const e = this.currentSession;
            return e ? e.getSessionObj() : null
        }
    }, {
        key: "isInitialized",
        get: function() {
            return !(!this.isGCastApiAvailable || !this.remotePlayerController)
        }
    }, {
        key: "isSessionEstablished",
        get: function() {
            const e = this.currentSessionObj;
            return !!e && e.status === chrome.cast.SessionStatus.CONNECTED
        }
    }, {
        key: "isCastConnected",
        get: function() {
            return this.castState === this.CastState.CONNECTED
        }
    }]), e
}();
var Za, ec = 0,
    tc = 0,
    nc = {},
    rc = {};

function ic(e, t, n) {
    return "_root" == t ? n : e !== n ? function(e) {
        return Za || (Za = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : cc.matchesSelector)
    }(e).call(e, t) ? e : e.parentNode ? (ec++, ic(e.parentNode, t, n)) : void 0 : void 0
}

function oc(e, t, n, r) {
    nc[e.id] || (nc[e.id] = {}), nc[e.id][t] || (nc[e.id][t] = {}), nc[e.id][t][n] || (nc[e.id][t][n] = []), nc[e.id][t][n].push(r)
}

function sc(e, t, n, r) {
    if (nc[e.id])
        if (t)
            if (r || n)
                if (r) {
                    if (nc[e.id][t][n])
                        for (var i = 0; i < nc[e.id][t][n].length; i++)
                            if (nc[e.id][t][n][i] === r) {
                                nc[e.id][t][n].splice(i, 1);
                                break
                            }
                } else delete nc[e.id][t][n];
    else nc[e.id][t] = {};
    else
        for (var o in nc[e.id]) nc[e.id].hasOwnProperty(o) && (nc[e.id][o] = {})
}

function ac(e, t, n, r) {
    if (this.element) {
        e instanceof Array || (e = [e]), n || "function" != typeof t || (n = t, t = "_root");
        var i, o = this.id;
        for (i = 0; i < e.length; i++) r ? sc(this, e[i], t, n) : (nc[o] && nc[o][e[i]] || cc.addEvent(this, e[i], s(e[i])), oc(this, e[i], t, n));
        return this
    }

    function s(e) {
        return function(t) {
            ! function(e, t, n) {
                if (nc[e][n]) {
                    var r, i, o = t.target || t.srcElement,
                        s = {},
                        a = 0,
                        c = 0;
                    for (r in ec = 0, nc[e][n]) nc[e][n].hasOwnProperty(r) && (i = ic(o, r, rc[e].element)) && cc.matchesEvent(n, rc[e].element, i, "_root" == r, t) && (ec++, nc[e][n][r].match = i, s[ec] = nc[e][n][r]);
                    for (t.stopPropagation = function() {
                            t.cancelBubble = !0
                        }, a = 0; a <= ec; a++)
                        if (s[a])
                            for (c = 0; c < s[a].length; c++) {
                                if (!1 === s[a][c].call(s[a].match, t)) return void cc.cancel(t);
                                if (t.cancelBubble) return
                            }
                }
            }(o, t, e)
        }
    }
}

function cc(e, t) {
    if (!(this instanceof cc)) {
        for (var n in rc)
            if (rc[n].element === e) return rc[n];
        return tc++, rc[tc] = new cc(e, tc), rc[tc]
    }
    this.element = e, this.id = t
}
cc.prototype.on = function(e, t, n) {
    return ac.call(this, e, t, n)
}, cc.prototype.off = function(e, t, n) {
    return ac.call(this, e, t, n, !0)
}, cc.matchesSelector = function() {}, cc.cancel = function(e) {
    e.preventDefault(), e.stopPropagation()
}, cc.addEvent = function(e, t, n) {
    var r = "blur" == t || "focus" == t,
        i = Gn.passiveEvents ? {
            capture: r,
            passive: !1
        } : r;
    e.element.addEventListener(t, n, i)
}, cc.matchesEvent = function() {
    return !0
};
const uc = cc.addEvent,
    lc = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
    dc = {
        pointerdown: "MSPointerDown",
        pointerup: "MSPointerUp",
        pointercancel: "MSPointerCancel",
        pointermove: "MSPointerMove",
        pointerenter: "MSPointerEnter",
        pointerleave: "MSPointerLeave",
        pointerover: "MSPointerOver",
        pointerout: "MSPointerOut"
    },
    hc = "onmspointerenter" in document,
    fc = "onmspointerleave" in document;

function pc(e, t) {
    return null == e || e != e ? t : e
}
cc.addEvent = function(e, t, n) {
    lc && dc[t] && (t = dc[t]), "transitionend" === t && (uc(e, "webkitTransitionEnd", n), uc(e, "otransitionend", n)), "mouseenter" === t && (t = "mouseover"), "mouseleave" === t && (t = "mouseout"), "MSPointerEnter" !== t || hc || (t = "MSPointerOver"), "MSPointerLeave" !== t || fc || (t = "MSPointerOut"), uc(e, t, n)
}, cc.matchesEvent = function(e, t, n, r, i) {
    return !("mouseenter" === e || "mouseleave" === e || !hc && "MSPointerEnter" === e || !fc && "MSPointerLeave" === e) || function(e, t, n, r) {
        return !r.relatedTarget || (!n || e === t) && t !== r.relatedTarget && !t.contains(r.relatedTarget)
    }(t, n, r, i)
};
var mc = ht((function(e, t) {
    function n(e, t) {
        return e === t
    }

    function r(e, t, n) {
        if (null === t || null === n || t.length !== n.length) return !1;
        for (var r = t.length, i = 0; i < r; i++)
            if (!e(t[i], n[i])) return !1;
        return !0
    }

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
            i = null,
            o = null;
        return function() {
            return r(t, i, arguments) || (o = e.apply(null, arguments)), i = arguments, o
        }
    }

    function o(e) {
        var t = Array.isArray(e[0]) ? e[0] : e;
        if (!t.every((function(e) {
                return "function" == typeof e
            }))) {
            var n = t.map((function(e) {
                return typeof e
            })).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
        }
        return t
    }

    function s(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return function() {
            for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
            var a = 0,
                c = r.pop(),
                u = o(r),
                l = e.apply(void 0, [function() {
                    return a++, c.apply(null, arguments)
                }].concat(n)),
                d = i((function() {
                    for (var e = [], t = u.length, n = 0; n < t; n++) e.push(u[n].apply(null, arguments));
                    return l.apply(null, e)
                }));
            return d.resultFunc = c, d.recomputations = function() {
                return a
            }, d.resetRecomputations = function() {
                return a = 0
            }, d
        }
    }
    t.__esModule = !0, t.defaultMemoize = i, t.createSelectorCreator = s, t.createStructuredSelector = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
        if ("object" != typeof e) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
        var n = Object.keys(e);
        return t(n.map((function(t) {
            return e[t]
        })), (function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return t.reduce((function(e, t, r) {
                return e[n[r]] = t, e
            }), {})
        }))
    };
    var a = t.createSelector = s(i)
}));

function _c(...e) {
    if (1 === e.length && e[0] instanceof _c) {
        var t = e[0];
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    }
    if (1 === e.length) {
        if ("string" == typeof e[0] && e[0].indexOf("rgb") >= 0) return this.rgba = function(e) {
            var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(e);
            if (!t) throw new Error("Invalid rgb value");
            return {
                red: parseInt(t[1], 10),
                green: parseInt(t[2], 10),
                blue: parseInt(t[3], 10),
                alpha: parseFloat(t[5]) || 1
            }
        }(e[0]), this;
        if (! function(e) {
                return "string" == typeof(e = e.replace("#", "")) && (3 === e.length || 6 === e.length) && !isNaN(parseInt(e, 16))
            }(`${e[0]}`)) throw new Error("Invalid hex value");
        return this.hex = e[0], this
    }
    if (3 === e.length || 4 === e.length) {
        for (var n = 0; n < 3; n++)
            if (isNaN(parseInt(e[n], 10)) || parseInt(e[n], 10) < 0 || parseInt(e[n], 10) > 255) throw new Error("Invalid rgb value");
        if (e[3] && parseFloat(e[3]) < 0 || parseFloat(e[3]) > 1) throw new Error("Invalid alpha value");
        return this.rgba = {
            red: e[0],
            green: e[1],
            blue: e[2],
            alpha: parseFloat(e[3]) || 1
        }, this
    }
    throw new Error("Invalid color")
}
_c.prototype = {
    get complement() {
        var e = this.clone();
        return e.rgb = {
            red: 255 - this.red,
            green: 255 - this.green,
            blue: 255 - this.blue
        }, e
    },
    get hex() {
        return _c.rgbToHex(this.red, this.green, this.blue)
    },
    set hex(e) {
        return this.rgba = _c.hexToRgb(e), this
    },
    get hsl() {
        return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
    },
    set hsl(e) {
        this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness;
        var t = _c.hslToRgb(e.hue, e.saturation, e.lightness);
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this
    },
    get luminance() {
        function e(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
        return .2126 * e(this.red / 255) + .7152 * e(this.green / 255) + .0722 * e(this.blue / 255)
    },
    get rgb() {
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
    },
    set rgb(e) {
        return this.rgba = e, this
    },
    get rgba() {
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
    },
    set rgba(e) {
        this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha || 1;
        var t = _c.rgbToHsl(e.red, e.green, e.blue);
        return this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    },
    get yiq() {
        return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3
    },
    clone: function() {
        return new _c(this)
    },
    lighten: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness + e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.lighten(5), r = n.contrast(this).ratio, !(this.lightness >= 100)););
        return this
    },
    darken: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness - e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.darken(5), r = n.contrast(this).ratio, !(this.lightness <= 0)););
        return this
    },
    overlayOn: function(e) {
        if (this.alpha >= 1) return this;
        var t = this.clone();
        return t.rgba = {
            red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
            green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
            blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
            alpha: t.alpha + e.alpha * (1 - this.alpha)
        }, t
    },
    contrast: function(e) {
        var t = this.alpha;
        if (t >= 1) {
            e.alpha < 1 && (e = e.overlayOn(this));
            var n = this.luminance + .05,
                r = e.luminance + .05,
                i = n / r;
            return r > n && (i = 1 / i), {
                ratio: i = Math.round(10 * i) / 10,
                error: 0,
                min: i,
                max: i
            }
        }
        var o = this.overlayOn(_c.white).contrast(e).ratio,
            s = this.overlayOn(_c.black).contrast(e).ratio,
            a = Math.max(o, s),
            c = {
                red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
                green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
                blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255)
            },
            u = this.clone();
        u.rgb = c;
        var l = this.overlayOn(u).contrast(e).ratio;
        return {
            ratio: Math.round((l + a) / 2 * 10) / 10,
            error: Math.round((a - l) / 2 * 10) / 10,
            min: l,
            max: a,
            closest: u,
            farthest: s === a ? _c.white : _c.black
        }
    },
    wcagAACompliant: function(e) {
        return this.contrast(e).ratio >= 4.5
    },
    wcagAAACompliant: function(e) {
        return this.contrast(e).ratio >= 7
    },
    yiqContrastColor: function() {
        return this.yiq >= 120 ? new _c(0, 0, 0) : new _c(255, 255, 255)
    }
}, _c.hexToRgb = function(e) {
    var t;
    return 3 === (e = String(e)).length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e)) && (t[1] += t[1], t[2] += t[2], t[3] += t[3]) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e), t ? {
        red: parseInt(t[1], 16),
        green: parseInt(t[2], 16),
        blue: parseInt(t[3], 16),
        alpha: 1
    } : null
}, _c.rgbToHex = function(e, t, n) {
    return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1)
}, _c.rgbToHsl = function(e, t, n) {
    e /= 255, t /= 255, n /= 255;
    var r, i = Math.max(e, t, n),
        o = Math.min(e, t, n),
        s = (i + o) / 2,
        a = s;
    if (i === o) return {
        hue: 0,
        saturation: 0,
        lightness: 100 * a
    };
    var c = i - o;
    return r = a > .5 ? c / (2 - i - o) : c / (i + o), i === e ? s = (t - n) / c + (t < n ? 6 : 0) : i === t ? s = (n - e) / c + 2 : i === n && (s = (e - t) / c + 4), s /= 6, {
        hue: Math.round(360 * s),
        saturation: Math.round(100 * r),
        lightness: Math.round(100 * a)
    }
}, _c.hslToRgb = function(e, t, n) {
    function r(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + 6 * (2 / 3 - n) * (t - e) : e
    }
    if (e /= 360, n /= 100, 0 == (t /= 100)) return {
        red: Math.floor(255 * n),
        green: Math.floor(255 * n),
        blue: Math.floor(255 * n)
    };
    var i = n < .5 ? n * (1 + t) : n + t - t * n,
        o = 2 * n - i;
    return {
        red: Math.floor(255 * r(o, i, e + 1 / 3)),
        green: Math.floor(255 * r(o, i, e)),
        blue: Math.floor(255 * r(o, i, e - 1 / 3))
    }
}, _c.hslToHex = function(e, t, n) {
    var r = _c.hslToRgb(e, t, n);
    return _c.rgbToHex(r.red, r.green, r.blue)
}, _c.white = new _c("fff"), _c.black = new _c("000");
var vc = function() {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var n = -1;
            return e.some((function(e, r) {
                return e[0] === t && (n = r, !0)
            })), n
        }
        return (function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function(t) {
                var n = this.__entries__,
                    r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0])
                }
            }, t
        }())
    }(),
    gc = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    yc = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    bc = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(yc) : function(e) {
        return setTimeout((function() {
            return e(Date.now())
        }), 1e3 / 60)
    },
    Ec = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Sc = "undefined" != typeof MutationObserver,
    Tc = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                var n = !1,
                    r = !1,
                    i = 0;

                function o() {
                    n && (n = !1, e()), r && a()
                }

                function s() {
                    bc(o)
                }

                function a() {
                    var e = Date.now();
                    if (n) {
                        if (e - i < 2) return;
                        r = !0
                    } else n = !0, r = !1, setTimeout(s, 20);
                    i = e
                }
                return a
            }(this.refresh.bind(this))
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(e) {
            var t = this.observers_,
                n = t.indexOf(e);
            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter((function(e) {
                return e.gatherActive(), e.hasActive()
            }));
            return e.forEach((function(e) {
                return e.broadcastActive()
            })), e.length > 0
        }, e.prototype.connect_ = function() {
            gc && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Sc ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            gc && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName,
                n = void 0 === t ? "" : t;
            Ec.some((function(e) {
                return !!~n.indexOf(e)
            })) && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    wc = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    Ac = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || yc
    },
    Ic = Oc(0, 0, 0, 0);

function kc(e) {
    return parseFloat(e) || 0
}

function Rc(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce((function(t, n) {
        return t + kc(e["border-" + n + "-width"])
    }), 0)
}
var Pc = "undefined" != typeof SVGGraphicsElement ? function(e) {
    return e instanceof Ac(e).SVGGraphicsElement
} : function(e) {
    return e instanceof Ac(e).SVGElement && "function" == typeof e.getBBox
};

function Dc(e) {
    return gc ? Pc(e) ? function(e) {
        var t = e.getBBox();
        return Oc(0, 0, t.width, t.height)
    }(e) : function(e) {
        var t = e.clientWidth,
            n = e.clientHeight;
        if (!t && !n) return Ic;
        var r = Ac(e).getComputedStyle(e),
            i = function(e) {
                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                    var i = r[n],
                        o = e["padding-" + i];
                    t[i] = kc(o)
                }
                return t
            }(r),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = kc(r.width),
            c = kc(r.height);
        if ("border-box" === r.boxSizing && (Math.round(a + o) !== t && (a -= Rc(r, "left", "right") + o), Math.round(c + s) !== n && (c -= Rc(r, "top", "bottom") + s)), ! function(e) {
                return e === Ac(e).document.documentElement
            }(e)) {
            var u = Math.round(a + o) - t,
                l = Math.round(c + s) - n;
            1 !== Math.abs(u) && (a -= u), 1 !== Math.abs(l) && (c -= l)
        }
        return Oc(i.left, i.top, a, c)
    }(e) : Ic
}

function Oc(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var Cc = function() {
        function e(e) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Oc(0, 0, 0, 0), this.target = e
        }
        return e.prototype.isActive = function() {
            var e = Dc(this.target);
            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
        }, e
    }(),
    xc = function(e, t) {
        var n = function(e) {
            var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                s = Object.create(o.prototype);
            return wc(s, {
                x: t,
                y: n,
                width: r,
                height: i,
                top: n,
                right: t + r,
                bottom: i + n,
                left: t
            }), s
        }(t);
        wc(this, {
            target: e,
            contentRect: n
        })
    },
    Lc = function() {
        function e(e, t, n) {
            if (this.activeObservations_ = [], this.observations_ = new vc, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Ac(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new Cc(e)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Ac(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(), this.observations_.forEach((function(t) {
                t.isActive() && e.activeObservations_.push(t)
            }))
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_,
                    t = this.activeObservations_.map((function(e) {
                        return new xc(e.target, e.broadcastRect())
                    }));
                this.callback_.call(e, t, e), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    Mc = "undefined" != typeof WeakMap ? new WeakMap : new vc,
    Nc = function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = Tc.getInstance(),
            r = new Lc(t, n, this);
        Mc.set(this, r)
    };
["observe", "unobserve", "disconnect"].forEach((function(e) {
    Nc.prototype[e] = function() {
        var t;
        return (t = Mc.get(this))[e].apply(t, arguments)
    }
}));
var Fc = void 0 !== yc.ResizeObserver ? yc.ResizeObserver : Nc;

function Uc(e, t, n) {
    var r = !0,
        i = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return m(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ka(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}

function Bc(e, t, n) {
    this.constructorName = "MessageApiError", this.message = e, this.name = t, this.source = n
}

function jc(e) {
    return e
}

function Vc(e) {
    if (!e || "" === e) return {};
    if ("object" == typeof e) return e;
    try {
        return JSON.parse(e)
    } catch (t) {
        return {}
    }
}

function Hc(e) {}
Bc.prototype = new Error;
let Xc = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    qc = Xc;
var Gc = {
    set: function(e) {
        qc = Object.assign({}, Xc, e)
    },
    captureException: function(e, t) {
        return qc.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return qc.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return qc.captureBreadcrumb(e, t, n, r)
    }
};

function zc(e) {
    const t = function(e) {
            let t = document.referrer || e;
            try {
                t = decodeURIComponent(t)
            } catch (rl) {
                t = unescape(t)
            }
            return t
        }(e),
        n = {},
        r = {},
        i = {
            parseMessage: Vc,
            buildMessage: jc,
            logError: Hc
        };
    let o = {};
    const s = {
        get methods() {
            return n
        },
        extendMethods(...e) {
            yt.apply(void 0, [n].concat(e))
        },
        get listeners() {
            return o
        },
        set listeners(e) {
            o = e
        },
        emit(e, ...t) {
            if (a.apply(void 0, [e].concat(t))) {
                const n = {
                    event: e
                };
                t && t[0] && (n.data = t[0]), c(n)
            }
        },
        filter(e, t) {
            t || "function" != typeof e || (t = e, e = null), e ? function(e, t) {
                r.event = r.event || {}, r.event[e] = r.event[e] || [], r.event[e].push(t)
            }(e, t) : function(e) {
                r.global = r.global || [], r.global.push(e)
            }(t)
        },
        hooks: (...e) => yt.apply(void 0, [i].concat(e))
    };

    function a(...e) {
        if (r) {
            let t, n;
            if (r.global && r.global.length)
                for (t = 0; t < r.global.length; t++)
                    if (n = r.global[t], !n.apply(n, e)) return !1;
            let i = e[0];
            if (r.event && r.event[i] && r.event[i].length)
                for (t = 0; t < r.event[i].length; t++)
                    if (n = r.event[i][t], !n.apply(n, e)) return !1
        }
        return !0
    }

    function c(e) {
        if (window.postMessage && window.parent.postMessage && (e = i.buildMessage(e), window.parent != window)) try {
            const n = t && "null" !== t ? t : "*";
            window.parent.postMessage(e, n)
        } catch (n) {}
    }
    return window.addEventListener("message", (function(e) {
        if (e.source !== window.parent) return;
        let t = i.parseMessage(e.data),
            {
                method: r,
                value: o
            } = t;
        if (!(void 0 === r || "string" != typeof r || r.indexOf("_") > -1)) try {
            let s = function(e, t) {
                if (!e) return null;
                let n = Object.getOwnPropertyDescriptor(t, e);
                if (n && "function" == typeof n.value) return n.value;
                if (n && "function" == typeof n.get) return n.get;
                const r = e.substr(0, 3),
                    i = e.substr(3, 1).toLowerCase() + e.substr(4);
                return n = Object.getOwnPropertyDescriptor(t, i), "get" === r && n && "function" == typeof n.get ? n.get : "set" === r && n && "function" == typeof n.set ? n.set : null
            }(r, n);
            if (!s) throw new Bc(`“${e}” is not a valid method. Valid methods are: ${function(e){return Object.keys(e).reduce((t,n)=>{const r=Object.getOwnPropertyDescriptor(e,n);return"function"==typeof r.value?(t.push(n),t):("function"==typeof r.get&&t.push("get"+n.charAt(0).toUpperCase()+n.slice(1)),"function"==typeof r.set&&t.push("set"+n.charAt(0).toUpperCase()+n.slice(1)),t)},[]).sort()}(n).join(", ")}.`, "TypeError", r);
            Gc.captureBreadcrumb("API message received", t, "api"), Promise.resolve(s.call(e, o)).then(e => c({
                method: r,
                value: null == e ? o : e
            })).catch(i.logError)
        } catch (s) {
            i.logError(s)
        }
    }), !1), s
}
var Wc = self !== top,
    Yc = function() {
        var e = document.createElement("video"),
            t = {
                request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
            },
            n = {};
        for (var r in t)
            for (var i = 0, o = t[r].length; i < o; i++)
                if (t[r][i] in e || t[r][i] in document || "on" + t[r][i].toLowerCase() in document) {
                    n[r] = t[r][i];
                    break
                }
        return n
    }(),
    $c = {
        ENTER: "enter",
        EXIT: "exit",
        CHANGE: "change",
        ERROR: "error"
    },
    Kc = [],
    Qc = {};

function Jc() {
    var e = Array.prototype.slice.apply(arguments),
        t = e.shift();
    Qc[t].forEach((function(t) {
        "function" == typeof t && t.apply(t, e)
    }))
}

function Zc(e) {
    return function(t, n) {
        -1 !== Kc.indexOf(t) && e.call(this, t, n)
    }
}

function eu(e) {
    var t = null;
    if ("VIDEO" === e.tagName) t = e;
    else {
        var n = e.getElementsByTagName("video");
        n[0] && (t = n[0])
    }
    return t
}
Object.keys($c).forEach((function(e) {
    Kc.push($c[e]), Qc[$c[e]] = []
}));
var tu = null,
    nu = function() {},
    ru = [];

function iu(e) {
    var t = eu(e);
    if (t && t.webkitEnterFullscreen) {
        try {
            t.readyState < t.HAVE_METADATA ? (t.addEventListener("loadedmetadata", (function n() {
                t.removeEventListener("loadedmetadata", n, !1);
                try {
                    t.webkitEnterFullscreen()
                } catch (r) {
                    return au("cannot_enter_fullscreen", e)
                }
            }), !1), t.load()) : t.webkitEnterFullscreen(), tu = t
        } catch (n) {
            return au("not_supported", e)
        }
        return !0
    }
    return au(void 0 === Yc.request ? "not_supported" : "not_enabled", e)
}
var ou = function(e) {
        var t = ru[ru.length - 1];
        t && (e !== t.element && e !== tu || !t.hasEntered) && ("VIDEO" === e.tagName && (tu = e), 1 === ru.length && cu.onenter(cu.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0, Jc($c.ENTER, cu.element))
    },
    su = function() {
        tu = null;
        var e = ru.pop();
        e && (e.exit.call(e.element), Jc($c.EXIT, e.element), cu.element || (ru.forEach((function(e) {
            e.exit.call(e.element), Jc($c.EXIT, e.element)
        })), ru = [], cu.onexit()))
    },
    au = function(e, t) {
        if (ru.length > 0) {
            var n = ru.pop();
            t = t || n.element, n.error.call(t, e), cu.onerror(t, e), Jc($c.ERROR, t, e)
        }
    },
    cu = {
        request: function(e, t, n, r) {
            if (e = e || document.body, ru.push({
                    element: e,
                    enter: t || nu,
                    exit: n || nu,
                    error: r || nu
                }), void 0 === Yc.request) return iu(e);
            if (Wc && !1 === document[Yc.enabled]) return iu(e);
            try {
                e[Yc.request]()
            } catch (i) {
                au("not_enabled", e)
            }
        },
        exit: function() {
            !document[Yc.exit] && cu.element ? cu.element[Yc.exit]() : document[Yc.exit]()
        },
        toggle: function(e, t, n, r) {
            cu.element ? cu.exit() : cu.request(e, t, n, r)
        },
        videoEnabled: function(e) {
            if (cu.enabled) return !0;
            var t = eu(e = e || document.body);
            return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
        },
        on: Zc((function(e, t) {
            Qc[e].push(t)
        })),
        off: Zc((function(e, t) {
            var n = Qc[e].indexOf(t);
            n > -1 && Qc[e].splice(n, 1)
        })),
        onenter: nu,
        onexit: nu,
        onchange: nu,
        onerror: nu
    };
try {
    Object.defineProperties(cu, {
        element: {
            enumerable: !0,
            get: function() {
                return tu && tu.webkitDisplayingFullscreen ? tu : document[Yc.element] || null
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return document[Yc.enabled] || !1
            }
        }
    })
} catch (Qg) {
    cu.element = null, cu.enabled = !1
}
Yc.change && document.addEventListener(Yc.change, (function(e) {
    if (cu.onchange(cu.element), Jc($c.CHANGE, cu.element), cu.element) {
        var t = ru[ru.length - 2];
        t && t.element === cu.element ? su() : ou(cu.element)
    } else su()
}), !1), document.addEventListener("webkitbeginfullscreen", (function(e) {
    var t = !0;
    if (ru.length > 0)
        for (var n = 0, r = ru.length; n < r; n++)
            if (eu(ru[n].element) === e.srcElement) {
                t = !1;
                break
            }
    t && ru.push({
        element: e.srcElement,
        enter: nu,
        exit: nu,
        error: nu
    }), cu.onchange(e.srcElement), Jc($c.CHANGE, cu.srcElement), ou(e.srcElement)
}), !0), document.addEventListener("webkitendfullscreen", (function(e) {
    cu.onchange(e.srcElement), Jc($c.CHANGE, e.srcElement), su(e.srcElement)
}), !0), Yc.error && document.addEventListener(Yc.error, (function(e) {
    au("not_allowed")
}), !1);
var uu = Object.prototype.hasOwnProperty,
    lu = tn((function(e, t) {
        if (he(t) || ve(t)) j(t, ge(t), e);
        else
            for (var n in t) uu.call(t, n) && B(e, n, t[n])
    })),
    du = ht((function(e) {
        ! function() {
            var t = "undefined" != typeof window && window === this ? this : void 0 !== dt && null != dt ? dt : this,
                n = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                };

            function r() {
                r = function() {}, t.Symbol || (t.Symbol = o)
            }
            var i = 0;

            function o(e) {
                return "jscomp_symbol_" + (e || "") + i++
            }

            function s() {
                r();
                var e = t.Symbol.iterator;
                e || (e = t.Symbol.iterator = t.Symbol("iterator")), "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return a(this)
                    }
                }), s = function() {}
            }

            function a(e) {
                var n = 0;
                return function(e) {
                    return s(), (e = {
                        next: e
                    })[t.Symbol.iterator] = function() {
                        return this
                    }, e
                }((function() {
                    return n < e.length ? {
                        done: !1,
                        value: e[n++]
                    } : {
                        done: !0
                    }
                }))
            }

            function c(e) {
                s();
                var t = e[Symbol.iterator];
                return t ? t.call(e) : a(e)
            }

            function u(e) {
                if (!(e instanceof Array)) {
                    e = c(e);
                    for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                    e = n
                }
                return e
            }
            var l = 0,
                d = "img script iframe link audio video source".split(" ");

            function h(e, t) {
                for (var n = (e = c(e)).next(); !n.done; n = e.next())
                    if (n = n.value, t.includes(n.nodeName.toLowerCase()) || h(n.children, t)) return !0;
                return !1
            }

            function f(e, t) {
                if (2 < e.length) return performance.now();
                for (var n = [], r = (t = c(t)).next(); !r.done; r = t.next()) r = r.value, n.push({
                    timestamp: r.start,
                    type: "requestStart"
                }), n.push({
                    timestamp: r.end,
                    type: "requestEnd"
                });
                for (r = (t = c(e)).next(); !r.done; r = t.next()) n.push({
                    timestamp: r.value,
                    type: "requestStart"
                });
                for (n.sort((function(e, t) {
                        return e.timestamp - t.timestamp
                    })), e = e.length, t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                    case "requestStart":
                        e--;
                        break;
                    case "requestEnd":
                        if (2 < ++e) return r.timestamp;
                        break;
                    default:
                        throw Error("Internal Error: This should never happen")
                }
                return 0
            }

            function p(e) {
                e = e || {}, this.w = !!e.useMutationObserver, this.u = e.minValue || null, e = window.__tti && window.__tti.e;
                var t = window.__tti && window.__tti.o;
                this.a = e ? e.map((function(e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    })) : [], t && t.disconnect(), this.b = [], this.f = new Map, this.j = null, this.v = -1 / 0, this.i = !1, this.h = this.c = this.s = null,
                    function(e, t) {
                        var n = XMLHttpRequest.prototype.send,
                            r = l++;
                        XMLHttpRequest.prototype.send = function(i) {
                            for (var o = [], s = 0; s < arguments.length; ++s) o[s - 0] = arguments[s];
                            var a = this;
                            return e(r), this.addEventListener("readystatechange", (function() {
                                4 === a.readyState && t(r)
                            })), n.apply(this, o)
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e, t) {
                        var n = fetch;
                        fetch = function(r) {
                            for (var i = [], o = 0; o < arguments.length; ++o) i[o - 0] = arguments[o];
                            return new Promise((function(r, o) {
                                var s = l++;
                                e(s), n.apply(null, [].concat(u(i))).then((function(e) {
                                    t(s), r(e)
                                }), (function(e) {
                                    t(e), o(e)
                                }))
                            }))
                        }
                    }(this.m.bind(this), this.l.bind(this)),
                    function(e) {
                        e.c = new PerformanceObserver((function(t) {
                            for (var n = (t = c(t.getEntries())).next(); !n.done; n = t.next())
                                if ("resource" === (n = n.value).entryType && (e.b.push({
                                        start: n.fetchStart,
                                        end: n.responseEnd
                                    }), _(e, f(e.g, e.b) + 5e3)), "longtask" === n.entryType) {
                                    var r = n.startTime + n.duration;
                                    e.a.push({
                                        start: n.startTime,
                                        end: r
                                    }), _(e, r + 5e3)
                                }
                        })), e.c.observe({
                            entryTypes: ["longtask", "resource"]
                        })
                    }(this), this.w && (this.h = function(e) {
                        var t = new MutationObserver((function(t) {
                            for (var n = (t = c(t)).next(); !n.done; n = t.next())("childList" == (n = n.value).type && h(n.addedNodes, d) || "attributes" == n.type && d.includes(n.target.tagName.toLowerCase())) && e(n)
                        }));
                        return t.observe(document, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0,
                            attributeFilter: ["href", "src"]
                        }), t
                    }(this.B.bind(this)))
            }

            function m(e) {
                e.i = !0;
                var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                    n = f(e.g, e.b);
                _(e, Math.max(n + 5e3, t))
            }

            function _(e, t) {
                !e.i || e.v > t || (clearTimeout(e.j), e.j = setTimeout((function() {
                    var t = performance.timing.navigationStart,
                        n = f(e.g, e.b);
                    if (t = (window.a && window.a.A ? 1e3 * window.a.A().C - t : 0) || performance.timing.domContentLoadedEventEnd - t, e.u) var r = e.u;
                    else r = performance.timing.domContentLoadedEventEnd ? (r = performance.timing).domContentLoadedEventEnd - r.navigationStart : null;
                    var i = performance.now();
                    null === r && _(e, Math.max(n + 5e3, i + 1e3));
                    var o = e.a;
                    (n = 5e3 > i - n || 5e3 > i - (n = o.length ? o[o.length - 1].end : t) ? null : Math.max(n, r)) && (e.s(n), clearTimeout(e.j), e.i = !1, e.c && e.c.disconnect(), e.h && e.h.disconnect()), _(e, performance.now() + 1e3)
                }), t - performance.now()), e.v = t)
            }
            p.prototype.getFirstConsistentlyInteractive = function() {
                var e = this;
                return new Promise((function(t) {
                    e.s = t, "complete" == document.readyState ? m(e) : window.addEventListener("load", (function() {
                        m(e)
                    }))
                }))
            }, p.prototype.m = function(e) {
                this.f.set(e, performance.now())
            }, p.prototype.l = function(e) {
                this.f.delete(e)
            }, p.prototype.B = function() {
                _(this, performance.now() + 5e3)
            }, t.Object.defineProperties(p.prototype, {
                g: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return [].concat(u(this.f.values()))
                    }
                }
            });
            var v = {
                getFirstConsistentlyInteractive: function(e) {
                    return e = e || {}, "PerformanceLongTaskTiming" in window ? new p(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                }
            };
            e.exports ? e.exports = v : window.ttiPolyfill = v
        }()
    })),
    hu = function() {
        return (hu = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };

function fu(e) {
    return e.toLowerCase()
}
var pu = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
    mu = /[^A-Z0-9]+/gi;

function _u(e, t) {
    void 0 === t && (t = {});
    for (var n = t.splitRegexp, r = void 0 === n ? pu : n, i = t.stripRegexp, o = void 0 === i ? mu : i, s = t.transform, a = void 0 === s ? fu : s, c = t.delimiter, u = void 0 === c ? " " : c, l = vu(vu(e, r, "$1\0$2"), o, "\0"), d = 0, h = l.length;
        "\0" === l.charAt(d);) d++;
    for (;
        "\0" === l.charAt(h - 1);) h--;
    return l.slice(d, h).split("\0").map(a).join(u)
}

function vu(e, t, n) {
    return t instanceof RegExp ? e.replace(t, n) : t.reduce((function(e, t) {
        return e.replace(t, n)
    }), e)
}

function gu(e, t) {
    var n = e.charAt(0),
        r = e.substr(1).toLowerCase();
    return t > 0 && n >= "0" && n <= "9" ? "_" + n + r : "" + n.toUpperCase() + r
}

function yu(e) {
    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
}

function bu(e, t) {
    return void 0 === t && (t = {}), _u(e, hu({
        delimiter: "",
        transform: gu
    }, t))
}

function Eu(e, t) {
    return 0 === t ? e.toLowerCase() : gu(e, t)
}

function Su(e) {
    return e.charAt(0).toUpperCase() + e.substr(1)
}

function Tu(e) {
    return Su(e.toLowerCase())
}

function wu(e, t) {
    return void 0 === t && (t = {}), _u(e, hu({
        delimiter: " ",
        transform: Tu
    }, t))
}

function Au(e) {
    return e.toUpperCase()
}

function Iu(e, t) {
    return void 0 === t && (t = {}), _u(e, hu({
        delimiter: "."
    }, t))
}

function ku(e, t) {
    var n = e.toLowerCase();
    return 0 === t ? Su(n) : n
}
for (var Ru = Object.freeze({
        __proto__: null,
        camelCaseTransform: Eu,
        camelCaseTransformMerge: function(e, t) {
            return 0 === t ? e.toLowerCase() : yu(e)
        },
        camelCase: function(e, t) {
            return void 0 === t && (t = {}), bu(e, hu({
                transform: Eu
            }, t))
        },
        capitalCaseTransform: Tu,
        capitalCase: wu,
        constantCase: function(e, t) {
            return void 0 === t && (t = {}), _u(e, hu({
                delimiter: "_",
                transform: Au
            }, t))
        },
        dotCase: Iu,
        headerCase: function(e, t) {
            return void 0 === t && (t = {}), wu(e, hu({
                delimiter: "-"
            }, t))
        },
        noCase: _u,
        paramCase: function(e, t) {
            return void 0 === t && (t = {}), Iu(e, hu({
                delimiter: "-"
            }, t))
        },
        pascalCaseTransform: gu,
        pascalCaseTransformMerge: yu,
        pascalCase: bu,
        pathCase: function(e, t) {
            return void 0 === t && (t = {}), Iu(e, hu({
                delimiter: "/"
            }, t))
        },
        sentenceCaseTransform: ku,
        sentenceCase: function(e, t) {
            return void 0 === t && (t = {}), _u(e, hu({
                delimiter: " ",
                transform: ku
            }, t))
        },
        snakeCase: function(e, t) {
            return void 0 === t && (t = {}), Iu(e, hu({
                delimiter: "_"
            }, t))
        }
    }), Pu = ht((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Tracker = void 0;
        var n = function() {
            function e() {
                this.name = "bigpicture-client-ts", this.version = "1.2.1"
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "version",
                baseName: "version",
                type: "string"
            }], e
        }();
        t.Tracker = n
    })), Du = ht((function(e) {
        var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (t) {
            var n = new Uint8Array(16);
            e.exports = function() {
                return t(n), n
            }
        } else {
            var r = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
                return r
            }
        }
    })), Ou = [], Cu = 0; Cu < 256; ++Cu) Ou[Cu] = (Cu + 256).toString(16).substr(1);
var xu, Lu, Mu = function(e, t) {
        var n = t || 0,
            r = Ou;
        return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
    },
    Nu = 0,
    Fu = 0,
    Uu = function(e, t, n) {
        var r = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var i = (e = e || {}).random || (e.rng || Du)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t)
            for (var o = 0; o < 16; ++o) t[r + o] = i[o];
        return t || Mu(i)
    },
    Bu = Uu;
Bu.v1 = function(e, t, n) {
    var r = t && n || 0,
        i = t || [],
        o = (e = e || {}).node || xu,
        s = void 0 !== e.clockseq ? e.clockseq : Lu;
    if (null == o || null == s) {
        var a = Du();
        null == o && (o = xu = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]), null == s && (s = Lu = 16383 & (a[6] << 8 | a[7]))
    }
    var c = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
        u = void 0 !== e.nsecs ? e.nsecs : Fu + 1,
        l = c - Nu + (u - Fu) / 1e4;
    if (l < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (l < 0 || c > Nu) && void 0 === e.nsecs && (u = 0), u >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    Nu = c, Fu = u, Lu = s;
    var d = (1e4 * (268435455 & (c += 122192928e5)) + u) % 4294967296;
    i[r++] = d >>> 24 & 255, i[r++] = d >>> 16 & 255, i[r++] = d >>> 8 & 255, i[r++] = 255 & d;
    var h = c / 4294967296 * 1e4 & 268435455;
    i[r++] = h >>> 8 & 255, i[r++] = 255 & h, i[r++] = h >>> 24 & 15 | 16, i[r++] = h >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = 255 & s;
    for (var f = 0; f < 6; ++f) i[r + f] = o[f];
    return t || Mu(i)
}, Bu.v4 = Uu;
var ju = Bu,
    Vu = ht((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Envelope = void 0;
        var n = function() {
            function e(e, t) {
                this.event = e, this.eid = ju.v4(), this.ts_ms = Date.now(), this._tracker = new Pu.Tracker, this._globalBPO = t
            }
            return Object.defineProperty(e.prototype, "tracker", {
                get: function() {
                    return this._tracker
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "global", {
                get: function() {
                    return this._globalBPO
                },
                enumerable: !1,
                configurable: !0
            }), e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "eid",
                baseName: "eid",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "event",
                baseName: "event",
                type: "Event"
            }, {
                name: "global",
                baseName: "global",
                type: "Event"
            }, {
                name: "tracker",
                baseName: "tracker",
                type: "Tracker"
            }], e
        }();
        t.Envelope = n
    })),
    Hu = ht((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Event = void 0;
        var n = function() {
            function e(e, t, n, r) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n, this.namespace = r
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }, {
                name: "namespace",
                baseName: "namespace",
                type: "string"
            }], e
        }();
        t.Event = n
    })),
    Xu = ht((function(e, t) {
        var n = dt && dt.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = dt && dt.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ObjectSerializer = void 0, r(Vu, t), r(Hu, t), r(Pu, t);
        var i = Hu,
            o = Pu,
            s = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
            a = {},
            c = {
                Envelope: Vu.Envelope,
                Event: i.Event,
                Tracker: o.Tracker
            },
            u = function() {
                function e() {}
                return e.findCorrectType = function(e, t) {
                    if (null == e) return t;
                    if (-1 !== s.indexOf(t.toLowerCase())) return t;
                    if ("Date" === t) return t;
                    if (a[t]) return t;
                    if (!c[t]) return t;
                    var n = c[t].discriminator;
                    if (null == n) return t;
                    if (e[n]) {
                        var r = e[n];
                        return c[r] ? r : t
                    }
                    return t
                }, e.serialize = function(t, n) {
                    if (null == t) return t;
                    if (-1 !== s.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var u = t[o];
                            i.push(e.serialize(u, r))
                        }
                        return i
                    }
                    if ("Date" === n) return t.toISOString();
                    if (a[n]) return t;
                    if (!c[n]) return t;
                    n = this.findCorrectType(t, n);
                    var l = c[n].getAttributeTypeMap(),
                        d = {};
                    for (var o in l) {
                        var h = l[o];
                        d[h.baseName] = e.serialize(t[h.name], h.type)
                    }
                    return d
                }, e.deserialize = function(t, n) {
                    if (n = e.findCorrectType(t, n), null == t) return t;
                    if (-1 !== s.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var u = t[o];
                            i.push(e.deserialize(u, r))
                        }
                        return i
                    }
                    if ("Date" === n) return new Date(t);
                    if (a[n]) return t;
                    if (!c[n]) return t;
                    var l = new c[n],
                        d = c[n].getAttributeTypeMap();
                    for (var o in d) {
                        var h = d[o];
                        l[h.name] = e.deserialize(t[h.baseName], h.type)
                    }
                    return l
                }, e
            }();
        t.ObjectSerializer = u
    })),
    qu = function(e) {
        return e && e.default || e
    }(Ru),
    Gu = ht((function(e, t) {
        var n, r = dt && dt.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (rl) {
                            o(rl)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (rl) {
                            o(rl)
                        }
                    }

                    function c(e) {
                        e.done ? i(e.value) : function(e) {
                            return e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))
                        }(e.value).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            i = dt && dt.__generator || function(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = t.call(e, s)
                            } catch (rl) {
                                o = [6, rl], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BigPictureClient = t.Configuration = t.Service = void 0,
            function(e) {
                e.FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", e.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com"
            }(n = t.Service || (t.Service = {}));
        var o = function(e, t) {
            void 0 === t && (t = null), this.service = e, this.globalBPO = t
        };
        t.Configuration = o;
        var s = function() {
            function e() {}
            return Object.defineProperty(e, "isInitalized", {
                get: function() {
                    return Boolean(e.conf.globalBPO)
                },
                enumerable: !1,
                configurable: !0
            }), e.configure = function(t) {
                e.conf = t, e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE.map((function(t) {
                    return e.sendEvent(t)
                })), e.WAIT_QUEUE = [])
            }, e.sendEvent = function(t) {
                return r(this, void 0, void 0, (function() {
                    var n, r, o, s, a;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                return e.isInitalized ? (n = JSON.stringify(Xu.ObjectSerializer.serialize([new Vu.Envelope(t, this.conf.globalBPO)], "Array<Envelope>")), r = t.name, null != t.namespace && (r = qu.snakeCase(t.namespace) + "." + t.name), o = this.conf.service + "/add/" + encodeURIComponent(r), navigator.sendBeacon ? [3, 2] : (s = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: n
                                }, [4, fetch(o, s)])) : (e.WAIT_QUEUE.push(t), Boolean(e.flushQueueTimeoutHandler) || (e.flushQueueTimeoutHandler = setTimeout((function() {
                                    e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE = [])
                                }), e.FLUSH_QUEUE_TIMEOUT)), [2]);
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                a = new Blob([n]), navigator.sendBeacon(o, a), i.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.FLUSH_QUEUE_TIMEOUT = 1e4, e.conf = new o(n.FRESNEL_PROD), e.WAIT_QUEUE = [], e
        }();
        t.BigPictureClient = s
    })),
    zu = ht((function(e, t) {
        var n = dt && dt.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n), Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                })
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = dt && dt.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(Gu, t), r(Xu, t)
    }));
const Wu = function(e) {
        return (t, ...n) => (n.forEach(n => {
            for (const r in n) {
                const i = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(t, r, Object.assign(i, e))
            }
        }), t)
    }({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    Yu = {
        AD_BUFFERING: "ad-buffering",
        AD_COMPLETE: "ad-complete",
        AD_CLICK: "ad-click",
        AD_SKIPPED: "ad-skipped",
        ALL_ADS_COMPLETED: "all-ads-completed",
        AD_ERROR: "ad-error",
        AD_STARTED: "ad-started",
        ADS_MANAGER_LOADED: "ads-manager-loaded",
        CONTENT_PAUSE_REQUESTED: "content-pause-requested",
        CONTENT_RESUME_REQUESTED: "content-resume-requested"
    };

function $u(e, t) {
    const n = ft();
    let r, i, o, s, a;

    function c(e) {
        var o = new r.AdsRenderingSettings;
        o.restoreCustomPlaybackStateOnAdBreakComplete = !0, o.uiElements = [], i = e.getAdsManager(t.videoPlayer, o), n.fire(Yu.ADS_MANAGER_LOADED), i.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), i.addEventListener(r.AdEvent.Type.CONTENT_PAUSE_REQUESTED, u), i.addEventListener(r.AdEvent.Type.CONTENT_RESUME_REQUESTED, l), i.addEventListener(r.AdEvent.Type.AD_BUFFERING, d), i.addEventListener(r.AdEvent.Type.STARTED, h), i.addEventListener(r.AdEvent.Type.COMPLETE, f), i.addEventListener(r.AdEvent.Type.CLICK, p), i.addEventListener(r.AdEvent.Type.SKIPPED, m), i.addEventListener(r.AdEvent.Type.ALL_ADS_COMPLETED, _)
    }

    function u(e) {
        n.fire(Yu.CONTENT_PAUSE_REQUESTED, e)
    }

    function l(e) {
        n.fire(Yu.CONTENT_RESUME_REQUESTED, e)
    }

    function d(e) {
        n.fire(Yu.AD_BUFFERING, e)
    }

    function h(e) {
        n.fire(Yu.AD_STARTED, e)
    }

    function f(e) {
        n.fire(Yu.AD_COMPLETE, e)
    }

    function p(e) {
        i.pause(), n.fire(Yu.AD_CLICK, e)
    }

    function m(e) {
        n.fire(Yu.AD_SKIPPED, e)
    }

    function _(e) {
        n.fire(Yu.ALL_ADS_COMPLETED, e)
    }

    function v(e) {
        n.fire(Yu.AD_ERROR, e.getError()), i && i.destroy()
    }
    const g = {
        start: (e, t) => (a.initialize(), i.init(e, t, r.ViewMode.NORMAL), i.start()),
        stop: () => i.stop(),
        pause: () => i.pause(),
        play: () => i.resume(),
        skip: () => i.skip(),
        resize: (e, t, n) => n ? i.resize(e, t, r.ViewMode.FULLSCREEN) : i.resize(e, t, r.ViewMode.NORMAL),
        destroy() {
            n.off(), i.destroy(), o.destroy(), a.destroy()
        },
        get volume() {
            return Tt(i.getVolume())
        },
        set volume(e) {
            i.setVolume(St(e))
        },
        get adsManager() {
            return i
        },
        get adsLoader() {
            return o
        },
        get remainingTime() {
            return i.getRemainingTime()
        },
        setContentComplete() {
            o.contentComplete()
        },
        on(e, t) {
            return n.on(e, t), this
        },
        off(e, t) {
            return n.off(e, t), this
        }
    };
    return function(e, t, n) {
        if (document.getElementById("vp-ima-sdk")) n();
        else {
            var r = document.createElement("script");
            r.id = "vp-ima-sdk", r.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", r.onreadystatechange = r.onload = () => {
                n && n()
            }, document.getElementsByTagName("body")[0].appendChild(r)
        }
    }(0, 0, (function() {
        r = google.ima;
        let n = Gn.iOS ? t.videoPlayer.videoElement : t.videoPlayer;
        a = new r.AdDisplayContainer(e, n), o = new r.AdsLoader(a), o.addEventListener(r.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, c), o.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), s = new r.AdsRequest, t.adUrl && (s.adTagUrl = t.adUrl), s.linearAdSlotWidth = t.width.linear, s.linearAdSlotHeight = t.height.linear, s.nonLinearAdSlotWidth = t.width.nonlinear, s.nonLinearAdSlotHeight = t.height.nonlinear, o.requestAds(s)
    })), Wu(this, g)
}

function Ku(e, t, n, r) {
    if (!m(e)) return e;
    for (var i = -1, o = (t = As(t, e)).length, s = o - 1, a = e; null != a && ++i < o;) {
        var c = Is(t[i]),
            u = n;
        if (i != s) {
            var l = a[c];
            void 0 === (u = r ? r(l, c, a) : void 0) && (u = m(l) ? l : Z(t[i + 1]) ? [] : {})
        }
        B(a, c, u), a = a[c]
    }
    return e
}

function Qu(e, t) {
    return null != e && t in Object(e)
}

function Ju(e, t) {
    return function(e, t, n) {
        for (var r = -1, i = t.length, o = {}; ++r < i;) {
            var s = t[r],
                a = ks(e, s);
            n(0, s) && Ku(o, As(s, e), a)
        }
        return o
    }(e, t, (function(t, n) {
        return function(e, t) {
            return null != e && function(e, t, n) {
                for (var r = -1, i = (t = As(t, e)).length, o = !1; ++r < i;) {
                    var s = Is(t[r]);
                    if (!(o = null != e && n(e, s))) break;
                    e = e[s]
                }
                return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && ee(i) && Z(s, i) && (W(e) || z(e))
            }(e, t, Qu)
        }(e, n)
    }))
}
var Zu = a ? a.isConcatSpreadable : void 0;

function el(e) {
    return W(e) || z(e) || !!(Zu && e && e[Zu])
}

function tl(e) {
    return null != e && e.length ? function e(t, n, r, i, o) {
        var s = -1,
            a = t.length;
        for (r || (r = el), o || (o = []); ++s < a;) {
            var c = t[s];
            n > 0 && r(c) ? n > 1 ? e(c, n - 1, r, i, o) : Oe(o, c) : i || (o[o.length] = c)
        }
        return o
    }(e, 1) : []
}
var nl = function(e) {
    return Ht(Ut(e, void 0, tl), e + "")
}((function(e, t) {
    return null == e ? {} : Ju(e, t)
}));
! function() {
    var e, t, n, r, i = {
            passive: !0,
            capture: !0
        },
        o = new Date,
        s = function() {
            r = [], t = -1, e = null, l(addEventListener)
        },
        a = function(r, i) {
            e || (e = i, t = r, n = new Date, l(removeEventListener), c())
        },
        c = function() {
            if (t >= 0 && t < n - o) {
                var i = {
                    entryType: "first-input",
                    name: e.type,
                    target: e.target,
                    cancelable: e.cancelable,
                    startTime: e.timeStamp,
                    processingStart: e.timeStamp + t
                };
                r.forEach((function(e) {
                    e(i)
                })), r = []
            }
        },
        u = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() {
                            a(e, t), o()
                        },
                        r = function() {
                            o()
                        },
                        o = function() {
                            removeEventListener("pointerup", n, i), removeEventListener("pointercancel", r, i)
                        };
                    addEventListener("pointerup", n, i), addEventListener("pointercancel", r, i)
                }(t, e) : a(t, e)
            }
        },
        l = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                return e(t, u, i)
            }))
        },
        d = "hidden" === document.visibilityState ? 0 : 1 / 0;
    addEventListener("visibilitychange", (function e(t) {
        "hidden" === document.visibilityState && (d = t.timeStamp, removeEventListener("visibilitychange", e, !0))
    }), !0), s(), self.webVitals = {
        firstInputPolyfill: function(e) {
            r.push(e), c()
        },
        resetFirstInputPolyfill: s,
        get firstHiddenTime() {
            return d
        }
    }
}();
var rl = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    },
    il = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    ol = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }), !0)
    },
    sl = function(e, t, n) {
        var r;
        return function(i) {
            t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
        }
    },
    al = -1,
    cl = function() {
        il((function(e) {
            var t = e.timeStamp;
            al = t
        }), !0)
    },
    ul = function() {
        return al < 0 && ((al = window.webVitals.firstHiddenTime) === 1 / 0 && cl(), ol((function() {
            setTimeout((function() {
                al = "hidden" === document.visibilityState ? 0 : 1 / 0, cl()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return al
            }
        }
    },
    ll = function(e, t) {
        var n, r = ul(),
            i = rl("FCP"),
            o = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
            s = o ? null : "paint";
        (o || s) && (n = sl(e, i, t), o && function(e) {
            "first-contentful-paint" === e.name && (s && s.disconnect(), e.startTime < r.firstHiddenTime && (i.value = e.startTime, i.entries.push(e), n(!0)))
        }(o), ol((function(r) {
            i = rl("FCP"), n = sl(e, i, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    i.value = performance.now() - r.timeStamp, n(!0)
                }))
            }))
        })))
    },
    dl = !1,
    hl = -1,
    fl = function(e, t) {
        dl || (ll((function(e) {
            hl = e.value
        })), dl = !0);
        var n, r = function(t) {
                hl > -1 && e(t)
            },
            i = rl("CLS", 0),
            o = 0,
            s = [],
            a = function(e) {
                if (!e.hadRecentInput) {
                    var t = s[0],
                        r = s[s.length - 1];
                    o && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, s.push(e)) : (o = e.value, s = [e]), o > i.value && (i.value = o, i.entries = s, n())
                }
            };
        n = sl(r, i, t), il((function() {
            "layout-shift".takeRecords().map(a), n(!0)
        })), ol((function() {
            o = 0, hl = -1, i = rl("CLS", 0), n = sl(r, i, t)
        }))
    },
    pl = function(e, t) {
        var n, r = ul(),
            i = rl("FID"),
            o = function(e) {
                e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
            },
            s = "first-input";
        n = sl(e, i, t), il((function() {
            s.takeRecords().map(o), s.disconnect()
        }), !0), ol((function() {
            i = rl("FID"), n = sl(e, i, t), window.webVitals.resetFirstInputPolyfill(), window.webVitals.firstInputPolyfill(o)
        }))
    },
    ml = {},
    _l = function(e, t) {
        var n, r = ul(),
            i = rl("LCP"),
            o = function(e) {
                var t = e.startTime;
                t < r.firstHiddenTime && (i.value = t, i.entries.push(e), n())
            },
            s = "largest-contentful-paint";
        n = sl(e, i, t);
        var a = function() {
            ml[i.id] || (s.takeRecords().map(o), s.disconnect(), ml[i.id] = !0, n(!0))
        };
        ["keydown", "click"].forEach((function(e) {
            addEventListener(e, a, {
                once: !0,
                capture: !0
            })
        })), il(a, !0), ol((function(r) {
            i = rl("LCP"), n = sl(e, i, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    i.value = performance.now() - r.timeStamp, ml[i.id] = !0, n(!0)
                }))
            }))
        }))
    },
    vl = function(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }),
    gl = /[&<>"']/g,
    yl = RegExp(gl.source);

function bl(e) {
    return (e = Mo(e)) && yl.test(e) ? e.replace(gl, vl) : e
}
var El, Sl, Tl, wl, Al, Il, kl, Rl = {},
    Pl = [],
    Dl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function Ol(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Cl(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function xl(e, t, n) {
    var r, i, o, s = {};
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? El.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
    return Ll(e, s, r, i, null)
}

function Ll(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++Tl : i
    };
    return null == i && null != Sl.vnode && Sl.vnode(o), o
}

function Ml(e) {
    return e.children
}

function Nl(e, t) {
    this.props = e, this.context = t
}

function Fl(e, t) {
    if (null == t) return e.__ ? Fl(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? Fl(e) : null
}

function Ul(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return Ul(e)
    }
}

function Bl(e) {
    (!e.__d && (e.__d = !0) && wl.push(e) && !jl.__r++ || Il !== Sl.debounceRendering) && ((Il = Sl.debounceRendering) || Al)(jl)
}

function jl() {
    for (var e; jl.__r = wl.length;) e = wl.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
    })), wl = [], e.some((function(e) {
        var t, n, r, i, o, s;
        e.__d && (o = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = Ol({}, i)).__v = i.__v + 1, $l(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [o] : null, n, null == o ? Fl(i) : o, i.__h), Kl(n, i), i.__e != o && Ul(i)))
    }))
}

function Vl(e, t, n, r, i, o, s, a, c, u) {
    var l, d, h, f, p, m, _, v = r && r.__k || Pl,
        g = v.length;
    for (n.__k = [], l = 0; l < t.length; l++)
        if (null != (f = n.__k[l] = null == (f = t[l]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? Ll(null, f, null, null, f) : Array.isArray(f) ? Ll(Ml, {
                children: f
            }, null, null, null) : f.__b > 0 ? Ll(f.type, f.props, f.key, null, f.__v) : f)) {
            if (f.__ = n, f.__b = n.__b + 1, null === (h = v[l]) || h && f.key == h.key && f.type === h.type) v[l] = void 0;
            else
                for (d = 0; d < g; d++) {
                    if ((h = v[d]) && f.key == h.key && f.type === h.type) {
                        v[d] = void 0;
                        break
                    }
                    h = null
                }
            $l(e, f, h = h || Rl, i, o, s, a, c, u), p = f.__e, (d = f.ref) && h.ref != d && (_ || (_ = []), h.ref && _.push(h.ref, null, f), _.push(d, f.__c || p, f)), null != p ? (null == m && (m = p), "function" == typeof f.type && f.__k === h.__k ? f.__d = c = Hl(f, c, e) : c = ql(e, f, h, v, p, c), "function" == typeof n.type && (n.__d = c)) : c && h.__e == c && c.parentNode != e && (c = Fl(h))
        }
    for (n.__e = m, l = g; l--;) null != v[l] && ("function" == typeof n.type && null != v[l].__e && v[l].__e == n.__d && (n.__d = Fl(r, l + 1)), Zl(v[l], v[l]));
    if (_)
        for (l = 0; l < _.length; l++) Jl(_[l], _[++l], _[++l])
}

function Hl(e, t, n) {
    for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = "function" == typeof r.type ? Hl(r, t, n) : ql(n, r, r, i, r.__e, t));
    return t
}

function Xl(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        Xl(e, t)
    })) : t.push(e)), t
}

function ql(e, t, n, r, i, o) {
    var s, a, c;
    if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
    else if (null == n || i != o || null == i.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(i), s = null;
        else {
            for (a = o, c = 0;
                (a = a.nextSibling) && c < r.length; c += 2)
                if (a == i) break e;
            e.insertBefore(i, o), s = o
        }
    return void 0 !== s ? s : i.nextSibling
}

function Gl(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || Dl.test(t) ? n : n + "px"
}

function zl(e, t, n, r, i) {
    var o;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || Gl(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || Gl(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? Yl : Wl, o) : e.removeEventListener(t, o ? Yl : Wl, o);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}

function Wl(e) {
    this.l[e.type + !1](Sl.event ? Sl.event(e) : e)
}

function Yl(e) {
    this.l[e.type + !0](Sl.event ? Sl.event(e) : e)
}

function $l(e, t, n, r, i, o, s, a, c) {
    var u, l, d, h, f, p, m, _, v, g, y, b = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (c = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (u = Sl.__b) && u(t);
    try {
        e: if ("function" == typeof b) {
            if (_ = t.props, v = (u = b.contextType) && r[u.__c], g = u ? v ? v.props.value : u.__ : r, n.__c ? m = (l = t.__c = n.__c).__ = l.__E : ("prototype" in b && b.prototype.render ? t.__c = l = new b(_, g) : (t.__c = l = new Nl(_, g), l.constructor = b, l.render = ed), v && v.sub(l), l.props = _, l.state || (l.state = {}), l.context = g, l.__n = r, d = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != b.getDerivedStateFromProps && (l.__s == l.state && (l.__s = Ol({}, l.__s)), Ol(l.__s, b.getDerivedStateFromProps(_, l.__s))), h = l.props, f = l.state, d) null == b.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (null == b.getDerivedStateFromProps && _ !== h && null != l.componentWillReceiveProps && l.componentWillReceiveProps(_, g), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(_, l.__s, g) || t.__v === n.__v) {
                    l.props = _, l.state = l.__s, t.__v !== n.__v && (l.__d = !1), l.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    })), l.__h.length && s.push(l);
                    break e
                }
                null != l.componentWillUpdate && l.componentWillUpdate(_, l.__s, g), null != l.componentDidUpdate && l.__h.push((function() {
                    l.componentDidUpdate(h, f, p)
                }))
            }
            l.context = g, l.props = _, l.state = l.__s, (u = Sl.__r) && u(t), l.__d = !1, l.__v = t, l.__P = e, u = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (r = Ol(Ol({}, r), l.getChildContext())), d || null == l.getSnapshotBeforeUpdate || (p = l.getSnapshotBeforeUpdate(h, f)), y = null != u && u.type === Ml && null == u.key ? u.props.children : u, Vl(e, Array.isArray(y) ? y : [y], t, n, r, i, o, s, a, c), l.base = t.__e, t.__h = null, l.__h.length && s.push(l), m && (l.__E = l.__ = null), l.__e = !1
        } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ql(n.__e, t, n, r, i, o, s, c);
        (u = Sl.diffed) && u(t)
    }
    catch (e) {
        t.__v = null, (c || null != o) && (t.__e = a, t.__h = !!c, o[o.indexOf(a)] = null), Sl.__e(e, t, n)
    }
}

function Kl(e, t) {
    Sl.__c && Sl.__c(t, e), e.some((function(t) {
        try {
            e = t.__h, t.__h = [], e.some((function(e) {
                e.call(t)
            }))
        } catch (e) {
            Sl.__e(e, t.__v)
        }
    }))
}

function Ql(e, t, n, r, i, o, s, a) {
    var c, u, l, d = n.props,
        h = t.props,
        f = t.type,
        p = 0;
    if ("svg" === f && (i = !0), null != o)
        for (; p < o.length; p++)
            if ((c = o[p]) && "setAttribute" in c == !!f && (f ? c.localName === f : 3 === c.nodeType)) {
                e = c, o[p] = null;
                break
            }
    if (null == e) {
        if (null === f) return document.createTextNode(h);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), o = null, a = !1
    }
    if (null === f) d === h || a && e.data === h || (e.data = h);
    else {
        if (o = o && El.call(e.childNodes), u = (d = n.props || Rl).dangerouslySetInnerHTML, l = h.dangerouslySetInnerHTML, !a) {
            if (null != o)
                for (d = {}, p = 0; p < e.attributes.length; p++) d[e.attributes[p].name] = e.attributes[p].value;
            (l || u) && (l && (u && l.__html == u.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""))
        }
        if (function(e, t, n, r, i) {
                var o;
                for (o in n) "children" === o || "key" === o || o in t || zl(e, o, null, n[o], r);
                for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || zl(e, o, t[o], n[o], r)
            }(e, h, d, i, a), l) t.__k = [];
        else if (p = t.props.children, Vl(e, Array.isArray(p) ? p : [p], t, n, r, i && "foreignObject" !== f, o, s, o ? o[0] : n.__k && Fl(n, 0), a), null != o)
            for (p = o.length; p--;) null != o[p] && Cl(o[p]);
        a || ("value" in h && void 0 !== (p = h.value) && (p !== e.value || "progress" === f && !p || "option" === f && p !== d.value) && zl(e, "value", p, d.value, !1), "checked" in h && void 0 !== (p = h.checked) && p !== e.checked && zl(e, "checked", p, d.checked, !1))
    }
    return e
}

function Jl(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
        Sl.__e(e, n)
    }
}

function Zl(e, t, n) {
    var r, i;
    if (Sl.unmount && Sl.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Jl(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (e) {
            Sl.__e(e, t)
        }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && Zl(r[i], t, "function" != typeof e.type);
    n || null == e.__e || Cl(e.__e), e.__e = e.__d = void 0
}

function ed(e, t, n) {
    return this.constructor(e, n)
}

function td(e, t, n) {
    var r, i, o;
    Sl.__ && Sl.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], $l(t, e = (!r && n || t).__k = xl(Ml, null, [e]), i || Rl, Rl, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? El.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), Kl(o, e)
}

function nd(e, t, n) {
    var r, i, o, s = Ol({}, e.props);
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? El.call(arguments, 2) : n), Ll(e.type, s, r || e.key, i || e.ref, null)
}

function rd(e, t) {
    var n = {
        __c: t = "__cC" + kl++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some(Bl)
            }, this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1), t && t.call(e)
                }
            }), e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
El = Pl.slice, Sl = {
    __e: function(e, t) {
        for (var n, r, i; t = t.__;)
            if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
            } catch (t) {
                e = t
            }
        throw e
    }
}, Tl = 0, Nl.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Ol({}, this.state), "function" == typeof e && (e = e(Ol({}, n), this.props)), e && Ol(n, e), null != e && this.__v && (t && this.__h.push(t), Bl(this))
}, Nl.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Bl(this))
}, Nl.prototype.render = Ml, wl = [], Al = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, jl.__r = 0, kl = 0;
var id, od, sd, ad = 0,
    cd = [],
    ud = Sl.__b,
    ld = Sl.__r,
    dd = Sl.diffed,
    hd = Sl.__c,
    fd = Sl.unmount;

function pd(e, t) {
    Sl.__h && Sl.__h(od, e, ad || t), ad = 0;
    var n = od.__H || (od.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function md(e) {
    return ad = 1, _d(Pd, e)
}

function _d(e, t, n) {
    var r = pd(id++, 2);
    return r.t = e, r.__c || (r.__ = [n ? n(t) : Pd(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
    }], r.__c = od), r.__
}

function vd(e, t) {
    var n = pd(id++, 3);
    !Sl.__s && Rd(n.__H, t) && (n.__ = e, n.__H = t, od.__H.__h.push(n))
}

function gd(e, t) {
    var n = pd(id++, 4);
    !Sl.__s && Rd(n.__H, t) && (n.__ = e, n.__H = t, od.__h.push(n))
}

function yd(e) {
    return ad = 5, bd((function() {
        return {
            current: e
        }
    }), [])
}

function bd(e, t) {
    var n = pd(id++, 7);
    return Rd(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function Ed(e, t) {
    return ad = 8, bd((function() {
        return e
    }), t)
}

function Sd(e) {
    var t = od.context[e.__c],
        n = pd(id++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(od)), t.props.value) : e.__
}

function Td(e) {
    var t = pd(id++, 10),
        n = md();
    return t.__ = e, od.componentDidCatch || (od.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e)
    }), [n[0], function() {
        n[1](void 0)
    }]
}

function wd() {
    for (var e; e = cd.shift();)
        if (e.__P) try {
            e.__H.__h.forEach(Id), e.__H.__h.forEach(kd), e.__H.__h = []
        } catch (ul) {
            e.__H.__h = [], Sl.__e(ul, e.__v)
        }
}
Sl.__b = function(e) {
    od = null, ud && ud(e)
}, Sl.__r = function(e) {
    ld && ld(e), id = 0;
    var t = (od = e.__c).__H;
    t && (t.__h.forEach(Id), t.__h.forEach(kd), t.__h = [])
}, Sl.diffed = function(e) {
    dd && dd(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== cd.push(t) && sd === Sl.requestAnimationFrame || ((sd = Sl.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), Ad && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        Ad && (t = requestAnimationFrame(n))
    })(wd)), od = null
}, Sl.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(Id), e.__h = e.__h.filter((function(e) {
                return !e.__ || kd(e)
            }))
        } catch (sl) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            })), t = [], Sl.__e(sl, e.__v)
        }
    })), hd && hd(e, t)
}, Sl.unmount = function(e) {
    fd && fd(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            Id(e)
        } catch (e) {
            t = e
        }
    })), t && Sl.__e(t, n.__v))
};
var Ad = "function" == typeof requestAnimationFrame;

function Id(e) {
    var t = od,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), od = t
}

function kd(e) {
    var t = od;
    e.__c = e.__(), od = t
}

function Rd(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }))
}

function Pd(e, t) {
    return "function" == typeof t ? t(e) : t
}

function Dd(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Od(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
}

function Cd(e) {
    this.props = e
}(Cd.prototype = new Nl).isPureReactComponent = !0, Cd.prototype.shouldComponentUpdate = function(e, t) {
    return Od(this.props, e) || Od(this.state, t)
};
var xd = Sl.__b;
Sl.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), xd && xd(e)
};
var Ld = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Md(e) {
    function t(t, n) {
        var r = Dd({}, t);
        return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
    }
    return t.$$typeof = Ld, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Nd = Sl.__e;
Sl.__e = function(e, t, n) {
    if (e.then)
        for (var r, i = t; i = i.__;)
            if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
    Nd(e, t, n)
};
var Fd = Sl.unmount;

function Ud() {
    this.__u = 0, this.t = null, this.__b = null
}

function Bd(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function jd() {
    this.u = null, this.o = null
}
Sl.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Fd && Fd(e)
}, (Ud.prototype = new Nl).__c = function(e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = Bd(r.__v),
        o = !1,
        s = function() {
            o || (o = !0, n.__R = null, i ? i(a) : a())
        };
    n.__R = s;
    var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) t.forceUpdate()
            }
        },
        c = !0 === t.__h;
    r.__u++ || c || r.setState({
        __e: r.__b = r.__v.__k[0]
    }), e.then(s, s)
}, Ud.prototype.componentWillUnmount = function() {
    this.t = []
}, Ud.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), t.__c.__H = null), null != (t = Dd({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }))), t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var i = t.__e && xl(Ml, null, e.fallback);
    return i && (i.__h = null), [xl(Ml, null, t.__e ? null : e.children), i]
};
var Vd = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function Hd(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function Xd(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        td(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
        }
    }), td(xl(Hd, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function qd(e, t) {
    return xl(Xd, {
        __v: e,
        i: t
    })
}(jd.prototype = new Nl).__e = function(e) {
    var t = this,
        n = Bd(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function(i) {
            var o = function() {
                t.props.revealOrder ? (r.push(i), Vd(t, e, r)) : i()
            };
            n ? n(o) : o()
        }
}, jd.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = Xl(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, jd.prototype.componentDidUpdate = jd.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        Vd(e, n, t)
    }))
};
var Gd = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    zd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Wd = "undefined" != typeof document,
    Yd = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
Nl.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(Nl.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}));
var $d = Sl.event;

function Kd() {}

function Qd() {
    return this.cancelBubble
}

function Jd() {
    return this.defaultPrevented
}
Sl.event = function(e) {
    return $d && (e = $d(e)), e.persist = Kd, e.isPropagationStopped = Qd, e.isDefaultPrevented = Jd, e.nativeEvent = e
};
var Zd = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    eh = Sl.vnode;
Sl.vnode = function(e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var i = -1 === t.indexOf("-");
        for (var o in r = {}, n) {
            var s = n[o];
            Wd && "children" === o && "noscript" === t || "value" === o && "defaultValue" in n && null == s || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === s ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Yd(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && zd.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === s && (s = void 0), r[o] = s)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = Xl(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }))), "select" == t && null != r.defaultValue && (r.value = Xl(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }))), e.props = r, n.class != n.className && (Zd.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", Zd))
    }
    e.$$typeof = Gd, eh && eh(e)
};
var th = Sl.__r;
Sl.__r = function(e) {
    th && th(e), e.__c
};
var nh = xl,
    rh = rd,
    ih = Md;
const oh = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? vd : gd;

function sh(e) {
    const t = "function" == typeof e ? function(e) {
            let t;
            const n = new Set,
                r = (e, r) => {
                    const i = "function" == typeof e ? e(t) : e;
                    if (i !== t) {
                        const e = t;
                        t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                    }
                },
                i = () => t,
                o = {
                    setState: r,
                    getState: i,
                    subscribe: (e, r, o) => r || o ? ((e, r = i, o = Object.is) => {
                        let s = r(t);

                        function a() {
                            const n = r(t);
                            if (!o(s, n)) {
                                const t = s;
                                e(s = n, t)
                            }
                        }
                        return n.add(a), () => n.delete(a)
                    })(e, r, o) : (n.add(e), () => n.delete(e)),
                    destroy: () => n.clear()
                };
            return t = e(r, i, o), o
        }(e) : e,
        n = (e = t.getState, n = Object.is) => {
            const [, r] = _d(e => e + 1, 0), i = t.getState(), o = yd(i), s = yd(e), a = yd(n), c = yd(!1), u = yd();
            let l;
            void 0 === u.current && (u.current = e(i));
            let d = !1;
            (o.current !== i || s.current !== e || a.current !== n || c.current) && (l = e(i), d = !n(u.current, l)), oh(() => {
                d && (u.current = l), o.current = i, s.current = e, a.current = n, c.current = !1
            });
            const h = yd(i);
            oh(() => {
                const e = () => {
                        try {
                            const e = t.getState(),
                                n = s.current(e);
                            a.current(u.current, n) || (o.current = e, u.current = n, r())
                        } catch (e) {
                            c.current = !0, r()
                        }
                    },
                    n = t.subscribe(e);
                return t.getState() !== h.current && e(), n
            }, []);
            const f = d ? l : u.current;
            return function(e, t) {
                Sl.useDebugValue && Sl.useDebugValue(t ? t(e) : e)
            }(f), f
        };
    return Object.assign(n, t), n[Symbol.iterator] = function() {
        const e = [n, t];
        return {
            next() {
                const t = e.length <= 0;
                return {
                    value: e.shift(),
                    done: t
                }
            }
        }
    }, n
}

function ah() {
    const e = rd(void 0);
    return {
        Provider: ({
            initialStore: t,
            createStore: n,
            children: r
        }) => {
            const i = yd();
            return i.current || (t && (n || (n = () => t)), i.current = n()), xl(e.Provider, {
                value: i.current
            }, r)
        },
        useStore: (t, n = Object.is) => {
            const r = Sd(e);
            if (!r) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return r(t, n)
        },
        useStoreApi: () => {
            const t = Sd(e);
            if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return bd(() => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy
            }), [t])
        }
    }
}
const ch = e => (t, n, r) => {
    const i = r.subscribe;
    return r.subscribe = (e, t, n) => {
        let o = e;
        if (t) {
            const i = (null == n ? void 0 : n.equalityFn) || Object.is;
            let s = e(r.getState());
            o = n => {
                const r = e(n);
                if (!i(s, r)) {
                    const e = s;
                    t(s = r, e)
                }
            }, (null == n ? void 0 : n.fireImmediately) && t(s, s)
        }
        return i(o)
    }, e(t, n, r)
};
var uh;
! function(e) {
    e[e.APPEAR = 0] = "APPEAR", e[e.APPEARING = 1] = "APPEARING", e[e.APPEARED = 2] = "APPEARED", e[e.ENTER = 3] = "ENTER", e[e.ENTERING = 4] = "ENTERING", e[e.ENTERED = 5] = "ENTERED", e[e.EXIT = 6] = "EXIT", e[e.EXITING = 7] = "EXITING", e[e.EXITED = 8] = "EXITED"
}(uh || (uh = {}));
var lh, dh = function() {},
    hh = setTimeout(dh),
    fh = function(e) {
        var t = e.children,
            n = e.in,
            r = void 0 !== n && n,
            i = e.appear,
            o = void 0 !== i && i,
            s = e.enter,
            a = void 0 === s || s,
            c = e.exit,
            u = void 0 === c || c,
            l = e.duration,
            d = void 0 === l ? 500 : l,
            h = e.alwaysMounted,
            f = void 0 !== h && h,
            p = e.onEnter,
            m = void 0 === p ? dh : p,
            _ = e.onEntering,
            v = void 0 === _ ? dh : _,
            g = e.onEntered,
            y = void 0 === g ? dh : g,
            b = e.onExit,
            E = void 0 === b ? dh : b,
            S = e.onExiting,
            T = void 0 === S ? dh : S,
            w = e.onExited,
            A = void 0 === w ? dh : w,
            I = yd(hh),
            k = !1,
            R = md((function() {
                return k = !0, r ? o ? uh.APPEAR : uh.APPEARED : uh.EXITED
            })),
            P = R[0],
            D = R[1];
        vd((function() {
            switch (P) {
                case uh.APPEAR:
                    m(), D(uh.APPEARING);
                    break;
                case uh.APPEARING:
                    v(), I.current = setTimeout((function() {
                        D(uh.APPEARED)
                    }), d);
                    break;
                case uh.APPEARED:
                    y();
                    break;
                case uh.ENTER:
                    m(), D(uh.ENTERING);
                    break;
                case uh.ENTERING:
                    v(), I.current = setTimeout((function() {
                        D(uh.ENTERED)
                    }), d);
                    break;
                case uh.ENTERED:
                    y();
                    break;
                case uh.EXIT:
                    E(), D(uh.EXITING);
                    break;
                case uh.EXITING:
                    T(), I.current = setTimeout((function() {
                        D(uh.EXITED)
                    }), d);
                    break;
                case uh.EXITED:
                    A()
            }
            return function() {
                clearTimeout(I.current)
            }
        }), [P]), gd((function() {
            if (!k) switch (!0) {
                case !(!r || !a):
                    D(uh.ENTER);
                    break;
                case !(!r || a):
                    D(uh.ENTERED);
                    break;
                case !(r || !u):
                    D(uh.EXIT);
                    break;
                case !(r || u):
                    D(uh.EXITED)
            }
        }), [r]);
        var O = bd((function() {
            return {
                appear: P === uh.APPEAR,
                appearActive: P === uh.APPEARING,
                appearDone: P === uh.APPEARED,
                enter: P === uh.ENTER,
                enterActive: P === uh.ENTERING,
                enterDone: P === uh.ENTERED,
                exit: P === uh.EXIT,
                exitActive: P === uh.EXITING,
                exitDone: P === uh.EXITED
            }
        }), [P]);
        return (f || P !== uh.EXITED) && t(O)
    };

function ph() {
    return (ph = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}! function(e) {
    e.APPEAR = "-appear", e.APPEAR_ACTIVE = "-appear-active", e.APPEAR_DONE = "-appear-done", e.ENTER = "-enter", e.ENTER_ACTIVE = "-enter-active", e.ENTER_DONE = "-enter-done", e.EXIT = "-exit", e.EXIT_ACTIVE = "-exit-active", e.EXIT_DONE = "-exit-done"
}(lh || (lh = {}));
var mh = ["children", "styles"],
    _h = function(e) {
        var t = e.children,
            n = e.styles,
            r = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (i[n] = e[n]);
                return i
            }(e, mh);
        return xl(fh, r, (function(e) {
            var r = t.props.style,
                i = bd((function() {
                    return ph({}, function(e, t) {
                        switch (!0) {
                            case e.appear:
                                return t.appear;
                            case e.appearActive:
                                return ph({}, t.appear, t.appearActive);
                            case e.appearDone:
                                return t.appearDone;
                            case e.enter:
                                return t.enter;
                            case e.enterActive:
                                return ph({}, t.enter, t.enterActive);
                            case e.enterDone:
                                return t.enterDone;
                            case e.exit:
                                return t.exit;
                            case e.exitActive:
                                return ph({}, t.exit, t.exitActive);
                            case e.exitDone:
                                return t.exitDone;
                            default:
                                return {}
                        }
                    }(e, n), r)
                }), [r, n, e]);
            return nd(t, {
                style: i
            })
        }))
    },
    vh = 0;

function gh(e, t, n, r, i) {
    var o, s, a = {};
    for (s in t) "ref" == s ? o = t[s] : a[s] = t[s];
    var c = {
        type: e,
        props: a,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --vh,
        __source: r,
        __self: i
    };
    if ("function" == typeof e && (o = e.defaultProps))
        for (s in o) void 0 === a[s] && (a[s] = o[s]);
    return Sl.vnode && Sl.vnode(c), c
}
var yh = function() {
    return (yh = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e
    }).apply(this, arguments)
};

function bh(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
    }
    return n
}

function Eh(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r, i, o = n.call(e),
        s = [];
    try {
        for (;
            (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
    } catch (a) {
        i = {
            error: a
        }
    } finally {
        try {
            r && !r.done && (n = o.return) && n.call(o)
        } finally {
            if (i) throw i.error
        }
    }
    return s
}

function Sh(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t, e
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Th = "function" == typeof Symbol && Symbol.for,
    wh = Th ? Symbol.for("react.element") : 60103,
    Ah = Th ? Symbol.for("react.portal") : 60106,
    Ih = Th ? Symbol.for("react.fragment") : 60107,
    kh = Th ? Symbol.for("react.strict_mode") : 60108,
    Rh = Th ? Symbol.for("react.profiler") : 60114,
    Ph = Th ? Symbol.for("react.provider") : 60109,
    Dh = Th ? Symbol.for("react.context") : 60110,
    Oh = Th ? Symbol.for("react.async_mode") : 60111,
    Ch = Th ? Symbol.for("react.concurrent_mode") : 60111,
    xh = Th ? Symbol.for("react.forward_ref") : 60112,
    Lh = Th ? Symbol.for("react.suspense") : 60113,
    Mh = Th ? Symbol.for("react.suspense_list") : 60120,
    Nh = Th ? Symbol.for("react.memo") : 60115,
    Fh = Th ? Symbol.for("react.lazy") : 60116,
    Uh = Th ? Symbol.for("react.block") : 60121,
    Bh = Th ? Symbol.for("react.fundamental") : 60117,
    jh = Th ? Symbol.for("react.responder") : 60118,
    Vh = Th ? Symbol.for("react.scope") : 60119;

function Hh(e) {
    if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
            case wh:
                switch (e = e.type) {
                    case Oh:
                    case Ch:
                    case Ih:
                    case Rh:
                    case kh:
                    case Lh:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                            case Dh:
                            case xh:
                            case Fh:
                            case Nh:
                            case Ph:
                                return e;
                            default:
                                return t
                        }
                }
            case Ah:
                return t
        }
    }
}

function Xh(e) {
    return Hh(e) === Ch
}
var qh = {
        AsyncMode: Oh,
        ConcurrentMode: Ch,
        ContextConsumer: Dh,
        ContextProvider: Ph,
        Element: wh,
        ForwardRef: xh,
        Fragment: Ih,
        Lazy: Fh,
        Memo: Nh,
        Portal: Ah,
        Profiler: Rh,
        StrictMode: kh,
        Suspense: Lh,
        isAsyncMode: function(e) {
            return Xh(e) || Hh(e) === Oh
        },
        isConcurrentMode: Xh,
        isContextConsumer: function(e) {
            return Hh(e) === Dh
        },
        isContextProvider: function(e) {
            return Hh(e) === Ph
        },
        isElement: function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === wh
        },
        isForwardRef: function(e) {
            return Hh(e) === xh
        },
        isFragment: function(e) {
            return Hh(e) === Ih
        },
        isLazy: function(e) {
            return Hh(e) === Fh
        },
        isMemo: function(e) {
            return Hh(e) === Nh
        },
        isPortal: function(e) {
            return Hh(e) === Ah
        },
        isProfiler: function(e) {
            return Hh(e) === Rh
        },
        isStrictMode: function(e) {
            return Hh(e) === kh
        },
        isSuspense: function(e) {
            return Hh(e) === Lh
        },
        isValidElementType: function(e) {
            return "string" == typeof e || "function" == typeof e || e === Ih || e === Ch || e === Rh || e === kh || e === Lh || e === Mh || "object" == typeof e && null !== e && (e.$$typeof === Fh || e.$$typeof === Nh || e.$$typeof === Ph || e.$$typeof === Dh || e.$$typeof === xh || e.$$typeof === Bh || e.$$typeof === jh || e.$$typeof === Vh || e.$$typeof === Uh)
        },
        typeOf: Hh
    },
    Gh = ht((function(e) {
        e.exports = qh
    }));

function zh(e) {
    function t(e, t, r) {
        var i = t.trim().split(p);
        t = i;
        var o = i.length,
            s = e.length;
        switch (s) {
            case 0:
            case 1:
                var a = 0;
                for (e = 0 === s ? "" : e[0] + " "; a < o; ++a) t[a] = n(e, t[a], r).trim();
                break;
            default:
                var c = a = 0;
                for (t = []; a < o; ++a)
                    for (var u = 0; u < s; ++u) t[c++] = n(e[u] + " ", i[a], r).trim()
        }
        return t
    }

    function n(e, t, n) {
        var r = t.charCodeAt(0);
        switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
            case 38:
                return t.replace(m, "$1" + e.trim());
            case 58:
                return e.trim() + t.replace(m, "$1" + e.trim());
            default:
                if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(m, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
        }
        return e + t
    }

    function r(e, t, n, o) {
        var s = e + ";",
            a = 2 * t + 3 * n + 4 * o;
        if (944 === a) {
            e = s.indexOf(":", 9) + 1;
            var c = s.substring(e, s.length - 1).trim();
            return c = s.substring(0, e).trim() + c + ";", 1 === P || 2 === P && i(c, 1) ? "-webkit-" + c + c : c
        }
        if (0 === P || 2 === P && !i(s, 1)) return s;
        switch (a) {
            case 1015:
                return 97 === s.charCodeAt(10) ? "-webkit-" + s + s : s;
            case 951:
                return 116 === s.charCodeAt(3) ? "-webkit-" + s + s : s;
            case 963:
                return 110 === s.charCodeAt(5) ? "-webkit-" + s + s : s;
            case 1009:
                if (100 !== s.charCodeAt(4)) break;
            case 969:
            case 942:
                return "-webkit-" + s + s;
            case 978:
                return "-webkit-" + s + "-moz-" + s + s;
            case 1019:
            case 983:
                return "-webkit-" + s + "-moz-" + s + "-ms-" + s + s;
            case 883:
                if (45 === s.charCodeAt(8)) return "-webkit-" + s + s;
                if (0 < s.indexOf("image-set(", 11)) return s.replace(A, "$1-webkit-$2") + s;
                break;
            case 932:
                if (45 === s.charCodeAt(4)) switch (s.charCodeAt(5)) {
                    case 103:
                        return "-webkit-box-" + s.replace("-grow", "") + "-webkit-" + s + "-ms-" + s.replace("grow", "positive") + s;
                    case 115:
                        return "-webkit-" + s + "-ms-" + s.replace("shrink", "negative") + s;
                    case 98:
                        return "-webkit-" + s + "-ms-" + s.replace("basis", "preferred-size") + s
                }
                return "-webkit-" + s + "-ms-" + s + s;
            case 964:
                return "-webkit-" + s + "-ms-flex-" + s + s;
            case 1023:
                if (99 !== s.charCodeAt(8)) break;
                return "-webkit-box-pack" + (c = s.substring(s.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + s + "-ms-flex-pack" + c + s;
            case 1005:
                return h.test(s) ? s.replace(d, ":-webkit-") + s.replace(d, ":-moz-") + s : s;
            case 1e3:
                switch (t = (c = s.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(t)) {
                    case 226:
                        c = s.replace(y, "tb");
                        break;
                    case 232:
                        c = s.replace(y, "tb-rl");
                        break;
                    case 220:
                        c = s.replace(y, "lr");
                        break;
                    default:
                        return s
                }
                return "-webkit-" + s + "-ms-" + c + s;
            case 1017:
                if (-1 === s.indexOf("sticky", 9)) break;
            case 975:
                switch (t = (s = e).length - 10, a = (c = (33 === s.charCodeAt(t) ? s.substring(0, t) : s).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                    case 203:
                        if (111 > c.charCodeAt(8)) break;
                    case 115:
                        s = s.replace(c, "-webkit-" + c) + ";" + s;
                        break;
                    case 207:
                    case 102:
                        s = s.replace(c, "-webkit-" + (102 < a ? "inline-" : "") + "box") + ";" + s.replace(c, "-webkit-" + c) + ";" + s.replace(c, "-ms-" + c + "box") + ";" + s
                }
                return s + ";";
            case 938:
                if (45 === s.charCodeAt(5)) switch (s.charCodeAt(6)) {
                    case 105:
                        return c = s.replace("-items", ""), "-webkit-" + s + "-webkit-box-" + c + "-ms-flex-" + c + s;
                    case 115:
                        return "-webkit-" + s + "-ms-flex-item-" + s.replace(S, "") + s;
                    default:
                        return "-webkit-" + s + "-ms-flex-line-pack" + s.replace("align-content", "").replace(S, "") + s
                }
                break;
            case 973:
            case 989:
                if (45 !== s.charCodeAt(3) || 122 === s.charCodeAt(4)) break;
            case 931:
            case 953:
                if (!0 === w.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? r(e.replace("stretch", "fill-available"), t, n, o).replace(":fill-available", ":stretch") : s.replace(c, "-webkit-" + c) + s.replace(c, "-moz-" + c.replace("fill-", "")) + s;
                break;
            case 962:
                if (s = "-webkit-" + s + (102 === s.charCodeAt(5) ? "-ms-" + s : "") + s, 211 === n + o && 105 === s.charCodeAt(13) && 0 < s.indexOf("transform", 10)) return s.substring(0, s.indexOf(";", 27) + 1).replace(f, "$1-webkit-$2") + s
        }
        return s
    }

    function i(e, t) {
        var n = e.indexOf(1 === t ? ":" : "{"),
            r = e.substring(0, 3 !== t ? n : 10);
        return n = e.substring(n + 1, e.length - 1), x(2 !== t ? r : r.replace(T, "$1"), n, t)
    }

    function o(e, t) {
        var n = r(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
        return n !== t + ";" ? n.replace(E, " or ($1)").substring(4) : "(" + t + ")"
    }

    function s(e, t, n, r, i, o, s, a, u, l) {
        for (var d, h = 0, f = t; h < C; ++h) switch (d = O[h].call(c, e, f, n, r, i, o, s, a, u, l)) {
            case void 0:
            case !1:
            case !0:
            case null:
                break;
            default:
                f = d
        }
        if (f !== t) return f
    }

    function a(e) {
        return void 0 !== (e = e.prefix) && (x = null, e ? "function" != typeof e ? P = 1 : (P = 2, x = e) : P = 0), a
    }

    function c(e, n) {
        var a = e;
        if (33 > a.charCodeAt(0) && (a = a.trim()), a = [a], 0 < C) {
            var c = s(-1, n, a, a, k, I, 0, 0, 0, 0);
            void 0 !== c && "string" == typeof c && (n = c)
        }
        var d = function e(n, a, c, d, h) {
            for (var f, p, m, y, E, S = 0, T = 0, w = 0, A = 0, O = 0, x = 0, M = m = f = 0, N = 0, F = 0, U = 0, B = 0, j = c.length, V = j - 1, H = "", X = "", q = "", G = ""; N < j;) {
                if (p = c.charCodeAt(N), N === V && 0 !== T + A + w + S && (0 !== T && (p = 47 === T ? 10 : 47), A = w = S = 0, j++, V++), 0 === T + A + w + S) {
                    if (N === V && (0 < F && (H = H.replace(l, "")), 0 < H.trim().length)) {
                        switch (p) {
                            case 32:
                            case 9:
                            case 59:
                            case 13:
                            case 10:
                                break;
                            default:
                                H += c.charAt(N)
                        }
                        p = 59
                    }
                    switch (p) {
                        case 123:
                            for (f = (H = H.trim()).charCodeAt(0), m = 1, B = ++N; N < j;) {
                                switch (p = c.charCodeAt(N)) {
                                    case 123:
                                        m++;
                                        break;
                                    case 125:
                                        m--;
                                        break;
                                    case 47:
                                        switch (p = c.charCodeAt(N + 1)) {
                                            case 42:
                                            case 47:
                                                e: {
                                                    for (M = N + 1; M < V; ++M) switch (c.charCodeAt(M)) {
                                                        case 47:
                                                            if (42 === p && 42 === c.charCodeAt(M - 1) && N + 2 !== M) {
                                                                N = M + 1;
                                                                break e
                                                            }
                                                            break;
                                                        case 10:
                                                            if (47 === p) {
                                                                N = M + 1;
                                                                break e
                                                            }
                                                    }
                                                    N = M
                                                }
                                        }
                                        break;
                                    case 91:
                                        p++;
                                    case 40:
                                        p++;
                                    case 34:
                                    case 39:
                                        for (; N++ < V && c.charCodeAt(N) !== p;);
                                }
                                if (0 === m) break;
                                N++
                            }
                            switch (m = c.substring(B, N), 0 === f && (f = (H = H.replace(u, "").trim()).charCodeAt(0)), f) {
                                case 64:
                                    switch (0 < F && (H = H.replace(l, "")), p = H.charCodeAt(1)) {
                                        case 100:
                                        case 109:
                                        case 115:
                                        case 45:
                                            F = a;
                                            break;
                                        default:
                                            F = D
                                    }
                                    if (B = (m = e(a, F, m, p, h + 1)).length, 0 < C && (E = s(3, m, F = t(D, H, U), a, k, I, B, p, h, d), H = F.join(""), void 0 !== E && 0 === (B = (m = E.trim()).length) && (p = 0, m = "")), 0 < B) switch (p) {
                                        case 115:
                                            H = H.replace(b, o);
                                        case 100:
                                        case 109:
                                        case 45:
                                            m = H + "{" + m + "}";
                                            break;
                                        case 107:
                                            m = (H = H.replace(_, "$1 $2")) + "{" + m + "}", m = 1 === P || 2 === P && i("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                            break;
                                        default:
                                            m = H + m, 112 === d && (X += m, m = "")
                                    } else m = "";
                                    break;
                                default:
                                    m = e(a, t(a, H, U), m, d, h + 1)
                            }
                            q += m, m = U = F = M = f = 0, H = "", p = c.charCodeAt(++N);
                            break;
                        case 125:
                        case 59:
                            if (1 < (B = (H = (0 < F ? H.replace(l, "") : H).trim()).length)) switch (0 === M && (f = H.charCodeAt(0), 45 === f || 96 < f && 123 > f) && (B = (H = H.replace(" ", ":")).length), 0 < C && void 0 !== (E = s(1, H, a, n, k, I, X.length, d, h, d)) && 0 === (B = (H = E.trim()).length) && (H = "\0\0"), f = H.charCodeAt(0), p = H.charCodeAt(1), f) {
                                case 0:
                                    break;
                                case 64:
                                    if (105 === p || 99 === p) {
                                        G += H + c.charAt(N);
                                        break
                                    }
                                default:
                                    58 !== H.charCodeAt(B - 1) && (X += r(H, f, p, H.charCodeAt(2)))
                            }
                            U = F = M = f = 0, H = "", p = c.charCodeAt(++N)
                    }
                }
                switch (p) {
                    case 13:
                    case 10:
                        47 === T ? T = 0 : 0 === 1 + f && 107 !== d && 0 < H.length && (F = 1, H += "\0"), 0 < C * L && s(0, H, a, n, k, I, X.length, d, h, d), I = 1, k++;
                        break;
                    case 59:
                    case 125:
                        if (0 === T + A + w + S) {
                            I++;
                            break
                        }
                    default:
                        switch (I++, y = c.charAt(N), p) {
                            case 9:
                            case 32:
                                if (0 === A + S + T) switch (O) {
                                    case 44:
                                    case 58:
                                    case 9:
                                    case 32:
                                        y = "";
                                        break;
                                    default:
                                        32 !== p && (y = " ")
                                }
                                break;
                            case 0:
                                y = "\\0";
                                break;
                            case 12:
                                y = "\\f";
                                break;
                            case 11:
                                y = "\\v";
                                break;
                            case 38:
                                0 === A + T + S && (F = U = 1, y = "\f" + y);
                                break;
                            case 108:
                                if (0 === A + T + S + R && 0 < M) switch (N - M) {
                                    case 2:
                                        112 === O && 58 === c.charCodeAt(N - 3) && (R = O);
                                    case 8:
                                        111 === x && (R = x)
                                }
                                break;
                            case 58:
                                0 === A + T + S && (M = N);
                                break;
                            case 44:
                                0 === T + w + A + S && (F = 1, y += "\r");
                                break;
                            case 34:
                            case 39:
                                0 === T && (A = A === p ? 0 : 0 === A ? p : A);
                                break;
                            case 91:
                                0 === A + T + w && S++;
                                break;
                            case 93:
                                0 === A + T + w && S--;
                                break;
                            case 41:
                                0 === A + T + S && w--;
                                break;
                            case 40:
                                if (0 === A + T + S) {
                                    if (0 === f) switch (2 * O + 3 * x) {
                                        case 533:
                                            break;
                                        default:
                                            f = 1
                                    }
                                    w++
                                }
                                break;
                            case 64:
                                0 === T + w + A + S + M + m && (m = 1);
                                break;
                            case 42:
                            case 47:
                                if (!(0 < A + S + w)) switch (T) {
                                    case 0:
                                        switch (2 * p + 3 * c.charCodeAt(N + 1)) {
                                            case 235:
                                                T = 47;
                                                break;
                                            case 220:
                                                B = N, T = 42
                                        }
                                        break;
                                    case 42:
                                        47 === p && 42 === O && B + 2 !== N && (33 === c.charCodeAt(B + 2) && (X += c.substring(B, N + 1)), y = "", T = 0)
                                }
                        }
                        0 === T && (H += y)
                }
                x = O, O = p, N++
            }
            if (0 < (B = X.length)) {
                if (F = a, 0 < C && void 0 !== (E = s(2, X, F, n, k, I, B, d, h, d)) && 0 === (X = E).length) return G + X + q;
                if (X = F.join(",") + "{" + X + "}", 0 != P * R) {
                    switch (2 !== P || i(X, 2) || (R = 0), R) {
                        case 111:
                            X = X.replace(g, ":-moz-$1") + X;
                            break;
                        case 112:
                            X = X.replace(v, "::-webkit-input-$1") + X.replace(v, "::-moz-$1") + X.replace(v, ":-ms-input-$1") + X
                    }
                    R = 0
                }
            }
            return G + X + q
        }(D, a, n, 0, 0);
        return 0 < C && void 0 !== (c = s(-2, d, a, a, k, I, d.length, 0, 0, 0)) && (d = c), R = 0, I = k = 1, d
    }
    var u = /^\0+/g,
        l = /[\0\r\f]/g,
        d = /: */g,
        h = /zoo|gra/,
        f = /([,: ])(transform)/g,
        p = /,\r+?/g,
        m = /([\t\r\n ])*\f?&/g,
        _ = /@(k\w+)\s*(\S*)\s*/,
        v = /::(place)/g,
        g = /:(read-only)/g,
        y = /[svh]\w+-[tblr]{2}/,
        b = /\(\s*(.*)\s*\)/g,
        E = /([\s\S]*?);/g,
        S = /-self|flex-/g,
        T = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
        w = /stretch|:\s*\w+\-(?:conte|avail)/,
        A = /([^-])(image-set\()/,
        I = 1,
        k = 1,
        R = 0,
        P = 1,
        D = [],
        O = [],
        C = 0,
        x = null,
        L = 0;
    return c.use = function e(t) {
        switch (t) {
            case void 0:
            case null:
                C = O.length = 0;
                break;
            default:
                if ("function" == typeof t) O[C++] = t;
                else if ("object" == typeof t)
                    for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                else L = 0 | !!t
        }
        return e
    }, c.set = a, void 0 !== e && a(e), c
}
var Wh = {
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
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    Yh = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    $h = function(e) {
        var t = {};
        return function(e) {
            return void 0 === t[e] && (t[e] = function(e) {
                return Yh.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
            }(e)), t[e]
        }
    }(),
    Kh = {
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
    },
    Qh = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    Jh = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    Zh = {};

function ef(e) {
    return Gh.isMemo(e) ? Jh : Zh[e.$$typeof] || Kh
}
Zh[Gh.ForwardRef] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, Zh[Gh.Memo] = Jh;
var tf = Object.defineProperty,
    nf = Object.getOwnPropertyNames,
    rf = Object.getOwnPropertySymbols,
    of = Object.getOwnPropertyDescriptor,
    sf = Object.getPrototypeOf,
    af = Object.prototype;

function cf() {
    return (cf = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var uf = function(e, t) {
        for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
        return n
    },
    lf = function(e) {
        return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !Gh.typeOf(e)
    },
    df = Object.freeze([]),
    hf = Object.freeze({});

function ff(e) {
    return "function" == typeof e
}

function pf(e) {
    return e.displayName || e.name || "Component"
}

function mf(e) {
    return e && "string" == typeof e.styledComponentId
}
var _f = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
    vf = "undefined" != typeof window && "HTMLElement" in window,
    gf = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.SC_DISABLE_SPEEDY && "" !== process.env.SC_DISABLE_SPEEDY && "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY);

function yf(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
}
var bf = function() {
        function e(e) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
        }
        var t = e.prototype;
        return t.indexOfGroup = function(e) {
            for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
            return t
        }, t.insertRules = function(e, t) {
            if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, i = r; e >= i;)(i <<= 1) < 0 && yf(16, "" + e);
                this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
                for (var o = r; o < i; o++) this.groupSizes[o] = 0
            }
            for (var s = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++)
        }, t.clearGroup = function(e) {
            if (e < this.length) {
                var t = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    r = n + t;
                this.groupSizes[e] = 0;
                for (var i = n; i < r; i++) this.tag.deleteRule(n)
            }
        }, t.getGroup = function(e) {
            var t = "";
            if (e >= this.length || 0 === this.groupSizes[e]) return t;
            for (var n = this.groupSizes[e], r = this.indexOfGroup(e), i = r + n, o = r; o < i; o++) t += this.tag.getRule(o) + "/*!sc*/\n";
            return t
        }, e
    }(),
    Ef = new Map,
    Sf = new Map,
    Tf = 1,
    wf = function(e) {
        if (Ef.has(e)) return Ef.get(e);
        for (; Sf.has(Tf);) Tf++;
        var t = Tf++;
        return Ef.set(e, t), Sf.set(t, e), t
    },
    Af = function(e) {
        return Sf.get(e)
    },
    If = function(e, t) {
        t >= Tf && (Tf = t + 1), Ef.set(e, t), Sf.set(t, e)
    },
    kf = "style[" + _f + '][data-styled-version="5.3.3"]',
    Rf = new RegExp("^" + _f + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    Pf = function(e, t, n) {
        for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)(r = i[o]) && e.registerName(t, r)
    },
    Df = function(e, t) {
        for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], i = 0, o = n.length; i < o; i++) {
            var s = n[i].trim();
            if (s) {
                var a = s.match(Rf);
                if (a) {
                    var c = 0 | parseInt(a[1], 10),
                        u = a[2];
                    0 !== c && (If(u, c), Pf(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0
                } else r.push(s)
            }
        }
    },
    Of = function(e) {
        var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            i = function(e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                    var r = t[n];
                    if (r && 1 === r.nodeType && r.hasAttribute(_f)) return r
                }
            }(n),
            o = void 0 !== i ? i.nextSibling : null;
        r.setAttribute(_f, "active"), r.setAttribute("data-styled-version", "5.3.3");
        var s = "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null;
        return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r
    },
    Cf = function() {
        function e(e) {
            var t = this.element = Of(e);
            t.appendChild(document.createTextNode("")), this.sheet = function(e) {
                if (e.sheet) return e.sheet;
                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    if (i.ownerNode === e) return i
                }
                yf(17)
            }(t), this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(e, t) {
            try {
                return this.sheet.insertRule(t, e), this.length++, !0
            } catch (e) {
                return !1
            }
        }, t.deleteRule = function(e) {
            this.sheet.deleteRule(e), this.length--
        }, t.getRule = function(e) {
            var t = this.sheet.cssRules[e];
            return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
        }, e
    }(),
    xf = function() {
        function e(e) {
            var t = this.element = Of(e);
            this.nodes = t.childNodes, this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(e, t) {
            if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t),
                    r = this.nodes[e];
                return this.element.insertBefore(n, r || null), this.length++, !0
            }
            return !1
        }, t.deleteRule = function(e) {
            this.element.removeChild(this.nodes[e]), this.length--
        }, t.getRule = function(e) {
            return e < this.length ? this.nodes[e].textContent : ""
        }, e
    }(),
    Lf = function() {
        function e(e) {
            this.rules = [], this.length = 0
        }
        var t = e.prototype;
        return t.insertRule = function(e, t) {
            return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
        }, t.deleteRule = function(e) {
            this.rules.splice(e, 1), this.length--
        }, t.getRule = function(e) {
            return e < this.length ? this.rules[e] : ""
        }, e
    }(),
    Mf = vf,
    Nf = {
        isServer: !vf,
        useCSSOMInjection: !gf
    },
    Ff = function() {
        function e(e, t, n) {
            void 0 === e && (e = hf), void 0 === t && (t = {}), this.options = cf({}, Nf, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && vf && Mf && (Mf = !1, function(e) {
                for (var t = document.querySelectorAll(kf), n = 0, r = t.length; n < r; n++) {
                    var i = t[n];
                    i && "active" !== i.getAttribute(_f) && (Df(e, i), i.parentNode && i.parentNode.removeChild(i))
                }
            }(this))
        }
        e.registerId = function(e) {
            return wf(e)
        };
        var t = e.prototype;
        return t.reconstructWithOptions = function(t, n) {
            return void 0 === n && (n = !0), new e(cf({}, this.options, {}, t), this.gs, n && this.names || void 0)
        }, t.allocateGSInstance = function(e) {
            return this.gs[e] = (this.gs[e] || 0) + 1
        }, t.getTag = function() {
            return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, i = t.target, e = n ? new Lf(i) : r ? new Cf(i) : new xf(i), new bf(e)));
            var e, t, n, r, i
        }, t.hasNameForId = function(e, t) {
            return this.names.has(e) && this.names.get(e).has(t)
        }, t.registerName = function(e, t) {
            if (wf(e), this.names.has(e)) this.names.get(e).add(t);
            else {
                var n = new Set;
                n.add(t), this.names.set(e, n)
            }
        }, t.insertRules = function(e, t, n) {
            this.registerName(e, t), this.getTag().insertRules(wf(e), n)
        }, t.clearNames = function(e) {
            this.names.has(e) && this.names.get(e).clear()
        }, t.clearRules = function(e) {
            this.getTag().clearGroup(wf(e)), this.clearNames(e)
        }, t.clearTag = function() {
            this.tag = void 0
        }, t.toString = function() {
            return function(e) {
                for (var t = e.getTag(), n = t.length, r = "", i = 0; i < n; i++) {
                    var o = Af(i);
                    if (void 0 !== o) {
                        var s = e.names.get(o),
                            a = t.getGroup(i);
                        if (s && a && s.size) {
                            var c = _f + ".g" + i + '[id="' + o + '"]',
                                u = "";
                            void 0 !== s && s.forEach((function(e) {
                                e.length > 0 && (u += e + ",")
                            })), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n'
                        }
                    }
                }
                return r
            }(this)
        }, e
    }(),
    Uf = /(a)(d)/gi,
    Bf = function(e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97))
    };

function jf(e) {
    var t, n = "";
    for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Bf(t % 52) + n;
    return (Bf(t % 52) + n).replace(Uf, "$1-$2")
}
var Vf = function(e, t) {
        for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
        return e
    },
    Hf = function(e) {
        return Vf(5381, e)
    };

function Xf(e) {
    for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (ff(n) && !mf(n)) return !1
    }
    return !0
}
var qf = Hf("5.3.3"),
    Gf = function() {
        function e(e, t, n) {
            this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && Xf(e), this.componentId = t, this.baseHash = Vf(qf, t), this.baseStyle = n, Ff.registerId(t)
        }
        return e.prototype.generateAndInjectStyles = function(e, t, n) {
            var r = this.componentId,
                i = [];
            if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash)
                if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) i.push(this.staticRulesId);
                else {
                    var o = ap(this.rules, e, t, n).join(""),
                        s = jf(Vf(this.baseHash, o) >>> 0);
                    if (!t.hasNameForId(r, s)) {
                        var a = n(o, "." + s, void 0, r);
                        t.insertRules(r, s, a)
                    }
                    i.push(s), this.staticRulesId = s
                }
            else {
                for (var c = this.rules.length, u = Vf(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
                    var h = this.rules[d];
                    if ("string" == typeof h) l += h;
                    else if (h) {
                        var f = ap(h, e, t, n),
                            p = Array.isArray(f) ? f.join("") : f;
                        u = Vf(u, p + d), l += p
                    }
                }
                if (l) {
                    var m = jf(u >>> 0);
                    if (!t.hasNameForId(r, m)) {
                        var _ = n(l, "." + m, void 0, r);
                        t.insertRules(r, m, _)
                    }
                    i.push(m)
                }
            }
            return i.join(" ")
        }, e
    }(),
    zf = /^\s*\/\/.*$/gm,
    Wf = [":", "[", ".", "#"],
    Yf = rh(),
    $f = (Yf.Consumer, rh()),
    Kf = ($f.Consumer, new Ff),
    Qf = function(e) {
        var t, n, r, i, o = hf,
            s = o.options,
            a = void 0 === s ? hf : s,
            c = o.plugins,
            u = void 0 === c ? df : c,
            l = new zh(a),
            d = [],
            h = function(e) {
                function t(t) {
                    if (t) try {
                        e(t + "}")
                    } catch (e) {}
                }
                return function(n, r, i, o, s, a, c, u, l, d) {
                    switch (n) {
                        case 1:
                            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                            break;
                        case 2:
                            if (0 === u) return r + "/*|*/";
                            break;
                        case 3:
                            switch (u) {
                                case 102:
                                case 112:
                                    return e(i[0] + r), "";
                                default:
                                    return r + (0 === d ? "/*|*/" : "")
                            }
                        case -2:
                            r.split("/*|*/}").forEach(t)
                    }
                }
            }((function(e) {
                d.push(e)
            })),
            f = function(e, r, o) {
                return 0 === r && -1 !== Wf.indexOf(o[n.length]) || o.match(i) ? e : "." + t
            };

        function p(e, o, s, a) {
            void 0 === a && (a = "&");
            var c = e.replace(zf, ""),
                u = o && s ? s + " " + o + " { " + c + " }" : c;
            return t = a, n = o, r = new RegExp("\\" + n + "\\b", "g"), i = new RegExp("(\\" + n + "\\b){2,}"), l(s || !o ? "" : o, u)
        }
        return l.use([].concat(u, [function(e, t, i) {
            2 === e && i.length && i[0].lastIndexOf(n) > 0 && (i[0] = i[0].replace(r, f))
        }, h, function(e) {
            if (-2 === e) {
                var t = d;
                return d = [], t
            }
        }])), p.hash = u.length ? u.reduce((function(e, t) {
            return t.name || yf(15), Vf(e, t.name)
        }), 5381).toString() : "", p
    }();

function Jf() {
    return Sd(Yf) || Kf
}

function Zf() {
    return Sd($f) || Qf
}
var ep = function() {
        function e(e, t) {
            var n = this;
            this.inject = function(e, t) {
                void 0 === t && (t = Qf);
                var r = n.name + t.hash;
                e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
            }, this.toString = function() {
                return yf(12, String(n.name))
            }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
        }
        return e.prototype.getName = function(e) {
            return void 0 === e && (e = Qf), this.name + e.hash
        }, e
    }(),
    tp = /([A-Z])/,
    np = /([A-Z])/g,
    rp = /^ms-/,
    ip = function(e) {
        return "-" + e.toLowerCase()
    };

function op(e) {
    return tp.test(e) ? e.replace(np, ip).replace(rp, "-ms-") : e
}
var sp = function(e) {
    return null == e || !1 === e || "" === e
};

function ap(e, t, n, r) {
    if (Array.isArray(e)) {
        for (var i, o = [], s = 0, a = e.length; s < a; s += 1) "" !== (i = ap(e[s], t, n, r)) && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
        return o
    }
    return sp(e) ? "" : mf(e) ? "." + e.styledComponentId : ff(e) ? "function" != typeof(c = e) || c.prototype && c.prototype.isReactComponent || !t ? e : ap(e(t), t, n, r) : e instanceof ep ? n ? (e.inject(n, r), e.getName(r)) : e : lf(e) ? function e(t, n) {
        var r, i, o = [];
        for (var s in t) t.hasOwnProperty(s) && !sp(t[s]) && (Array.isArray(t[s]) && t[s].isCss || ff(t[s]) ? o.push(op(s) + ":", t[s], ";") : lf(t[s]) ? o.push.apply(o, e(t[s], s)) : o.push(op(s) + ": " + (r = s, null == (i = t[s]) || "boolean" == typeof i || "" === i ? "" : "number" != typeof i || 0 === i || r in Wh ? String(i).trim() : i + "px") + ";"));
        return n ? [n + " {"].concat(o, ["}"]) : o
    }(e) : e.toString();
    var c
}
var cp = function(e) {
    return Array.isArray(e) && (e.isCss = !0), e
};

function up(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return ff(e) || lf(e) ? cp(ap(uf(df, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : cp(ap(uf(e, n)))
}
var lp = function(e, t, n) {
        return void 0 === n && (n = hf), e.theme !== n.theme && e.theme || t || n.theme
    },
    dp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    hp = /(^-|-$)/g;

function fp(e) {
    return e.replace(dp, "-").replace(hp, "")
}
var pp = function(e) {
    return jf(Hf(e) >>> 0)
};

function mp(e) {
    return "string" == typeof e && !0
}
var _p = function(e) {
        return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
    },
    vp = function(e) {
        return "__proto__" !== e && "constructor" !== e && "prototype" !== e
    };

function gp(e, t, n) {
    var r = e[n];
    _p(t) && _p(r) ? yp(r, t) : e[n] = t
}

function yp(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    for (var i = 0, o = n; i < o.length; i++) {
        var s = o[i];
        if (_p(s))
            for (var a in s) vp(a) && gp(e, s[a], a)
    }
    return e
}
var bp = rh();

function Ep(e) {
    var t = Sd(bp),
        n = bd((function() {
            return function(e, t) {
                return e ? ff(e) ? e(t) : Array.isArray(e) || "object" != typeof e ? yf(8) : t ? cf({}, t, {}, e) : e : yf(14)
            }(e.theme, t)
        }), [e.theme, t]);
    return e.children ? nh(bp.Provider, {
        value: n
    }, e.children) : null
}
bp.Consumer;
var Sp = {};

function Tp(e, t, n) {
    var r = mf(e),
        i = !mp(e),
        o = t.attrs,
        s = void 0 === o ? df : o,
        a = t.componentId,
        c = void 0 === a ? function(e, t) {
            var n = "string" != typeof e ? "sc" : fp(e);
            Sp[n] = (Sp[n] || 0) + 1;
            var r = n + "-" + pp("5.3.3" + n + Sp[n]);
            return t ? t + "-" + r : r
        }(t.displayName, t.parentComponentId) : a,
        u = t.displayName,
        l = void 0 === u ? function(e) {
            return mp(e) ? "styled." + e : "Styled(" + pf(e) + ")"
        }(e) : u,
        d = t.displayName && t.componentId ? fp(t.displayName) + "-" + t.componentId : t.componentId || c,
        h = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s,
        f = t.shouldForwardProp;
    r && e.shouldForwardProp && (f = t.shouldForwardProp ? function(n, r, i) {
        return e.shouldForwardProp(n, r, i) && t.shouldForwardProp(n, r, i)
    } : e.shouldForwardProp);
    var p, m = new Gf(n, d, r ? e.componentStyle : void 0),
        _ = m.isStatic && 0 === s.length,
        v = function(e, t) {
            return function(e, t, n, r) {
                var i = e.attrs,
                    o = e.componentStyle,
                    s = e.defaultProps,
                    a = e.foldedComponentIds,
                    c = e.shouldForwardProp,
                    u = e.styledComponentId,
                    l = e.target,
                    d = function(e, t, n) {
                        void 0 === e && (e = hf);
                        var r = cf({}, t, {
                                theme: e
                            }),
                            i = {};
                        return n.forEach((function(e) {
                            var t, n, o, s = e;
                            for (t in ff(s) && (s = s(r)), s) r[t] = i[t] = "className" === t ? (n = i[t], o = s[t], n && o ? n + " " + o : n || o) : s[t]
                        })), [r, i]
                    }(lp(t, Sd(bp), s) || hf, t, i),
                    h = d[0],
                    f = d[1],
                    p = function(e, t, n, r) {
                        var i = Jf(),
                            o = Zf();
                        return t ? e.generateAndInjectStyles(hf, i, o) : e.generateAndInjectStyles(n, i, o)
                    }(o, r, h),
                    m = n,
                    _ = f.$as || t.$as || f.as || t.as || l,
                    v = mp(_),
                    g = f !== t ? cf({}, t, {}, f) : t,
                    y = {};
                for (var b in g) "$" !== b[0] && "as" !== b && ("forwardedAs" === b ? y.as = g[b] : (c ? c(b, $h, _) : !v || $h(b)) && (y[b] = g[b]));
                return t.style && f.style !== t.style && (y.style = cf({}, t.style, {}, f.style)), y.className = Array.prototype.concat(a, u, p !== u ? p : null, t.className, f.className).filter(Boolean).join(" "), y.ref = m, xl(_, y)
            }(p, e, t, _)
        };
    return v.displayName = l, (p = ih(v)).attrs = h, p.componentStyle = m, p.displayName = l, p.shouldForwardProp = f, p.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : df, p.styledComponentId = d, p.target = r ? e.target : e, p.withComponent = function(e) {
        var r = t.componentId,
            i = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(t, ["componentId"]),
            o = r && r + "-" + (mp(e) ? e : fp(pf(e)));
        return Tp(e, cf({}, i, {
            attrs: h,
            componentId: o
        }), n)
    }, Object.defineProperty(p, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function(t) {
            this._foldedDefaultProps = r ? yp({}, e.defaultProps, t) : t
        }
    }), p.toString = function() {
        return "." + p.styledComponentId
    }, i && function t(n, r, i) {
        if ("string" != typeof r) {
            if (af) {
                var o = sf(r);
                o && o !== af && t(n, o, i)
            }
            var s = nf(r);
            rf && (s = s.concat(rf(r)));
            for (var a = ef(n), c = ef(r), u = 0; u < s.length; ++u) {
                var l = s[u];
                if (!(Qh[l] || i && i[l] || c && c[l] || a && a[l])) {
                    var d = of (r, l);
                    try {
                        tf(n, l, d)
                    } catch (e) {}
                }
            }
        }
        return n
    }(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), p
}
var wp = function(e) {
    return function e(t, n, r) {
        if (void 0 === r && (r = hf), !Gh.isValidElementType(n)) return yf(1, String(n));
        var i = function() {
            return t(n, r, up.apply(void 0, arguments))
        };
        return i.withConfig = function(i) {
            return e(t, n, cf({}, r, {}, i))
        }, i.attrs = function(i) {
            return e(t, n, cf({}, r, {
                attrs: Array.prototype.concat(r.attrs, i).filter(Boolean)
            }))
        }, i
    }(Tp, e)
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
    wp[e] = wp(e)
}));
var Ap = function() {
    function e(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = Xf(e), Ff.registerId(this.componentId + 1)
    }
    var t = e.prototype;
    return t.createStyles = function(e, t, n, r) {
        var i = r(ap(this.rules, t, n, r).join(""), ""),
            o = this.componentId + e;
        n.insertRules(o, o, i)
    }, t.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e)
    }, t.renderStyles = function(e, t, n, r) {
        e > 2 && Ff.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r)
    }, e
}();

function Ip() {
    return (Ip = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function kp(e, t) {
    return (kp = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function Rp(e) {
    return (Rp = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function Pp() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
    } catch (rl) {
        return !1
    }
}

function Dp(e, t, n) {
    return (Dp = Pp() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && kp(i, n.prototype), i
    }).apply(null, arguments)
}

function Op(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (Op = function(e) {
        if (null === e || ! function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return Dp(e, arguments, Rp(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), kp(n, e)
    })(e)
}
var Cp = function(e) {
    function t(t) {
        return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this)
    }
    return function(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, kp(e, t)
    }(t, e), t
}(Op(Error));

function xp(e, t) {
    return e.substr(-t.length) === t
}
var Lp = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;

function Mp(e) {
    return "string" != typeof e ? e : e.match(Lp) ? parseFloat(e) : e
}
var Np = function(e) {
        return function(t, n) {
            void 0 === n && (n = "16px");
            var r = t,
                i = n;
            if ("string" == typeof t) {
                if (!xp(t, "px")) throw new Cp(69, e, t);
                r = Mp(t)
            }
            if ("string" == typeof n) {
                if (!xp(n, "px")) throw new Cp(70, e, n);
                i = Mp(n)
            }
            if ("string" == typeof r) throw new Cp(71, t, e);
            if ("string" == typeof i) throw new Cp(72, n, e);
            return "" + r / i + e
        }
    },
    Fp = Np("em"),
    Up = Np("rem");

function Bp(e) {
    return Math.round(255 * e)
}

function jp(e, t, n) {
    return Bp(e) + "," + Bp(t) + "," + Bp(n)
}

function Vp(e, t, n, r) {
    if (void 0 === r && (r = jp), 0 === t) return r(n, n, n);
    var i = (e % 360 + 360) % 360 / 60,
        o = (1 - Math.abs(2 * n - 1)) * t,
        s = o * (1 - Math.abs(i % 2 - 1)),
        a = 0,
        c = 0,
        u = 0;
    i >= 0 && i < 1 ? (a = o, c = s) : i >= 1 && i < 2 ? (a = s, c = o) : i >= 2 && i < 3 ? (c = o, u = s) : i >= 3 && i < 4 ? (c = s, u = o) : i >= 4 && i < 5 ? (a = s, u = o) : i >= 5 && i < 6 && (a = o, u = s);
    var l = n - o / 2;
    return r(a + l, c + l, u + l)
}
var Hp = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "639",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    },
    Xp = /^#[a-fA-F0-9]{6}$/,
    qp = /^#[a-fA-F0-9]{8}$/,
    Gp = /^#[a-fA-F0-9]{3}$/,
    zp = /^#[a-fA-F0-9]{4}$/,
    Wp = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
    Yp = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,
    $p = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    Kp = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;

function Qp(e) {
    if ("string" != typeof e) throw new Cp(3);
    var t = function(e) {
        if ("string" != typeof e) return e;
        var t = e.toLowerCase();
        return Hp[t] ? "#" + Hp[t] : e
    }(e);
    if (t.match(Xp)) return {
        red: parseInt("" + t[1] + t[2], 16),
        green: parseInt("" + t[3] + t[4], 16),
        blue: parseInt("" + t[5] + t[6], 16)
    };
    if (t.match(qp)) {
        var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[2], 16),
            green: parseInt("" + t[3] + t[4], 16),
            blue: parseInt("" + t[5] + t[6], 16),
            alpha: n
        }
    }
    if (t.match(Gp)) return {
        red: parseInt("" + t[1] + t[1], 16),
        green: parseInt("" + t[2] + t[2], 16),
        blue: parseInt("" + t[3] + t[3], 16)
    };
    if (t.match(zp)) {
        var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
            red: parseInt("" + t[1] + t[1], 16),
            green: parseInt("" + t[2] + t[2], 16),
            blue: parseInt("" + t[3] + t[3], 16),
            alpha: r
        }
    }
    var i = Wp.exec(t);
    if (i) return {
        red: parseInt("" + i[1], 10),
        green: parseInt("" + i[2], 10),
        blue: parseInt("" + i[3], 10)
    };
    var o = Yp.exec(t.substring(0, 50));
    if (o) return {
        red: parseInt("" + o[1], 10),
        green: parseInt("" + o[2], 10),
        blue: parseInt("" + o[3], 10),
        alpha: parseFloat("" + o[4])
    };
    var s = $p.exec(t);
    if (s) {
        var a = "rgb(" + Vp(parseInt("" + s[1], 10), parseInt("" + s[2], 10) / 100, parseInt("" + s[3], 10) / 100) + ")",
            c = Wp.exec(a);
        if (!c) throw new Cp(4, t, a);
        return {
            red: parseInt("" + c[1], 10),
            green: parseInt("" + c[2], 10),
            blue: parseInt("" + c[3], 10)
        }
    }
    var u = Kp.exec(t.substring(0, 50));
    if (u) {
        var l = "rgb(" + Vp(parseInt("" + u[1], 10), parseInt("" + u[2], 10) / 100, parseInt("" + u[3], 10) / 100) + ")",
            d = Wp.exec(l);
        if (!d) throw new Cp(4, t, l);
        return {
            red: parseInt("" + d[1], 10),
            green: parseInt("" + d[2], 10),
            blue: parseInt("" + d[3], 10),
            alpha: parseFloat("" + u[4])
        }
    }
    throw new Cp(5)
}

function Jp(e) {
    return function(e) {
        var t, n = e.red / 255,
            r = e.green / 255,
            i = e.blue / 255,
            o = Math.max(n, r, i),
            s = Math.min(n, r, i),
            a = (o + s) / 2;
        if (o === s) return void 0 !== e.alpha ? {
            hue: 0,
            saturation: 0,
            lightness: a,
            alpha: e.alpha
        } : {
            hue: 0,
            saturation: 0,
            lightness: a
        };
        var c = o - s,
            u = a > .5 ? c / (2 - o - s) : c / (o + s);
        switch (o) {
            case n:
                t = (r - i) / c + (r < i ? 6 : 0);
                break;
            case r:
                t = (i - n) / c + 2;
                break;
            default:
                t = (n - r) / c + 4
        }
        return t *= 60, void 0 !== e.alpha ? {
            hue: t,
            saturation: u,
            lightness: a,
            alpha: e.alpha
        } : {
            hue: t,
            saturation: u,
            lightness: a
        }
    }(Qp(e))
}
var Zp = function(e) {
    return 7 === e.length && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e
};

function em(e) {
    var t = e.toString(16);
    return 1 === t.length ? "0" + t : t
}

function tm(e) {
    return em(Math.round(255 * e))
}

function nm(e, t, n) {
    return Zp("#" + tm(e) + tm(t) + tm(n))
}

function rm(e, t, n) {
    return Vp(e, t, n, nm)
}

function im(e, t, n) {
    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) return Zp("#" + em(e) + em(t) + em(n));
    if ("object" == typeof e && void 0 === t && void 0 === n) return Zp("#" + em(e.red) + em(e.green) + em(e.blue));
    throw new Cp(6)
}

function om(e, t, n, r) {
    if ("string" == typeof e && "number" == typeof t) {
        var i = Qp(e);
        return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")"
    }
    if ("number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof r) return r >= 1 ? im(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
    if ("object" == typeof e && void 0 === t && void 0 === n && void 0 === r) return e.alpha >= 1 ? im(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
    throw new Cp(7)
}

function sm(e) {
    if ("object" != typeof e) throw new Cp(8);
    if (function(e) {
            return "number" == typeof e.red && "number" == typeof e.green && "number" == typeof e.blue && "number" == typeof e.alpha
        }(e)) return om(e);
    if (function(e) {
            return "number" == typeof e.red && "number" == typeof e.green && "number" == typeof e.blue && ("number" != typeof e.alpha || void 0 === e.alpha)
        }(e)) return im(e);
    if (function(e) {
            return "number" == typeof e.hue && "number" == typeof e.saturation && "number" == typeof e.lightness && "number" == typeof e.alpha
        }(e)) return function(e, t, n, r) {
        if ("object" == typeof e) return e.alpha >= 1 ? rm(e.hue, e.saturation, e.lightness) : "rgba(" + Vp(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
        throw new Cp(2)
    }(e);
    if (function(e) {
            return "number" == typeof e.hue && "number" == typeof e.saturation && "number" == typeof e.lightness && ("number" != typeof e.alpha || void 0 === e.alpha)
        }(e)) return function(e, t, n) {
        if ("object" == typeof e) return rm(e.hue, e.saturation, e.lightness);
        throw new Cp(1)
    }(e);
    throw new Cp(8)
}

function am(e) {
    return function e(t, n, r) {
        return function() {
            var i = r.concat(Array.prototype.slice.call(arguments));
            return i.length >= n ? t.apply(this, i) : e(t, n, i)
        }
    }(e, e.length, [])
}

function cm(e, t) {
    if ("transparent" === t) return t;
    var n = Jp(t);
    return sm(Ip({}, n, {
        hue: n.hue + parseFloat(e)
    }))
}
var um = am(cm);

function lm(e, t, n) {
    return Math.max(e, Math.min(t, n))
}

function dm(e, t) {
    if ("transparent" === t) return t;
    var n = Jp(t);
    return sm(Ip({}, n, {
        lightness: lm(0, 1, n.lightness - parseFloat(e))
    }))
}
var hm = am(dm);

function fm(e) {
    if ("transparent" === e) return 0;
    var t = Qp(e),
        n = Object.keys(t).map((function(e) {
            var n = t[e] / 255;
            return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
        })),
        r = n[0],
        i = n[1],
        o = n[2];
    return parseFloat((.2126 * r + .7152 * i + .0722 * o).toFixed(3))
}

function pm(e, t) {
    if ("transparent" === t) return t;
    var n = Jp(t);
    return sm(Ip({}, n, {
        lightness: lm(0, 1, n.lightness + parseFloat(e))
    }))
}
var mm = am(pm);

function _m(e, t, n) {
    if ("transparent" === t) return n;
    if ("transparent" === n) return t;
    if (0 === e) return n;
    var r = Qp(t),
        i = Ip({}, r, {
            alpha: "number" == typeof r.alpha ? r.alpha : 1
        }),
        o = Qp(n),
        s = Ip({}, o, {
            alpha: "number" == typeof o.alpha ? o.alpha : 1
        }),
        a = i.alpha - s.alpha,
        c = 2 * parseFloat(e) - 1,
        u = ((c * a == -1 ? c : c + a) / (1 + c * a) + 1) / 2,
        l = 1 - u;
    return om({
        red: Math.floor(i.red * u + s.red * l),
        green: Math.floor(i.green * u + s.green * l),
        blue: Math.floor(i.blue * u + s.blue * l),
        alpha: i.alpha * parseFloat(e) + s.alpha * (1 - parseFloat(e))
    })
}
var vm = am(_m);

function gm(e, t, n, r) {
    void 0 === t && (t = "#000"), void 0 === n && (n = "#fff"), void 0 === r && (r = !0);
    var i = fm(e) > .179,
        o = i ? t : n;
    return !r || function(e, t) {
        var n = fm(e),
            r = fm(t);
        return parseFloat((n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)).toFixed(2))
    }(e, o) >= 4.5 ? o : i ? "#000" : "#fff"
}

function ym(e, t) {
    if ("transparent" === t) return t;
    var n = Jp(t);
    return sm(Ip({}, n, {
        saturation: lm(0, 1, n.saturation + parseFloat(e))
    }))
}
var bm = am(ym);

function Em(e, t) {
    return "transparent" === t ? t : vm(parseFloat(e), "rgb(0, 0, 0)", t)
}
var Sm = am(Em);

function Tm(e, t) {
    return "transparent" === t ? t : vm(parseFloat(e), "rgb(255, 255, 255)", t)
}
var wm, Am, Im = am(Tm),
    km = function(e) {
        return "dark" === e.theme.name && up(wm || (wm = Sh(["\n    font-smoothing: antialiased;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizelegibility;\n  "], ["\n    font-smoothing: antialiased;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizelegibility;\n  "])))
    },
    Rm = {
        COLOR: "light",
        SIZE: "desktop"
    };

function Pm(e, t) {
    if (void 0 === t && (t = 500), "SIZE" === e.type) {
        var n = e.modes.desktop;
        if ("string" == typeof n) return n;
        if ("function" == typeof n) return n(t)
    }
    if ("COLOR" === e.type) return function(n) {
        var r, i = n.theme;
        "string" == typeof i && (r = i), "string" == typeof(null == i ? void 0 : i.name) && (r = i.name);
        var o = function(e, t) {
            var n = e.modes[t];
            return "function" != typeof n && "string" != typeof n && (e.default && (t = e.default), e.default || (t = Rm[e.type]), n = e.modes[t]), n
        }(e, r);
        return "string" == typeof o ? o : "function" == typeof o ? o(t) : void 0
    }
}! function(e) {
    e.Red = "#E22B12", e.Blue = "#00adef", e.Green = "#28A878", e.Yellow = "#ffb21e", e.Slate = "#657987", e.Grayscale = "#666666", e.black = "#000000", e.white = "#FFFFFF", e.Fuschia = "#ED72C2", e.Cerise = "#FF6678", e.Vermilion = "#E75A32", e.Peridot = "#9DB753", e.Cerulean = "#008285", e.Lapis = "#4B7AC2", e.Amethyst = "#8697FB", e.Taupe = "#BBA69C"
}(Am || (Am = {}));
var Dm = "#000000",
    Om = "#FFFFFF",
    Cm = {
        50: "#fee7e5",
        100: "#fdd1cb",
        200: "#faa599",
        300: "#f77866",
        350: "#f5624e",
        400: "#f34c35",
        500: "#E22B12",
        525: "#e21f05",
        600: "#c01902",
        700: "#911100",
        800: "#610c00",
        850: "#480800",
        900: "#300600",
        950: "#170300"
    },
    xm = function(e) {
        return Cm[e] || r_(Am.Red, e)
    },
    Lm = {
        50: "#fff7e8",
        100: "#ffefd2",
        200: "#ffe0a5",
        300: "#ffd078",
        350: "#ffc961",
        400: "#ffc14b",
        500: "#ffb21e",
        525: "#ffad0f",
        600: "#da920a",
        700: "#a56e06",
        800: "#6f4a03",
        850: "#533702",
        900: "#372500",
        950: "#1b1200"
    },
    Mm = function(e) {
        return Lm[e] || r_(Am.Yellow, e)
    },
    Nm = {
        50: "#e8f7f1",
        100: "#d3eee3",
        200: "#a7dec7",
        300: "#7cccab",
        350: "#66c49d",
        400: "#52ba90",
        500: "#28A878",
        525: "#269f6e",
        600: "#1e885c",
        700: "#166646",
        800: "#0e452f",
        850: "#0a3424",
        900: "#052316",
        950: "#02110b"
    },
    Fm = function(e) {
        return Nm[e] || r_(Am.Green, e)
    },
    Um = {
        50: "#e5f5fd",
        100: "#c8edff",
        200: "#99d9f8",
        300: "#5cc9ff",
        350: "#4cbdf3",
        400: "#33b3f2",
        500: "#00adef",
        525: "#0099e3",
        600: "#0080bf",
        700: "#00608f",
        800: "#00405f",
        850: "#002f47",
        900: "#00202f",
        950: "#001017"
    },
    Bm = function(e) {
        return Um[e] || r_(Am.Blue, e)
    },
    jm = {
        50: "#eef1f4",
        100: "#dee4e9",
        200: "#bdcad3",
        300: "#9caebd",
        350: "#8da1b1",
        400: "#7c93a6",
        500: "#657987",
        525: "#597286",
        600: "#496073",
        700: "#364857",
        800: "#23313b",
        850: "#1a252c",
        900: "#11191d",
        950: "#080d0f"
    },
    Vm = function(e) {
        return jm[e] || r_(Am.Slate, e)
    },
    Hm = {
        50: "#efefef",
        100: "#e0e0e0",
        200: "#c1c1c1",
        300: "#a3a3a3",
        350: "#939393",
        400: "#848484",
        500: "#666666",
        525: "#606060",
        600: "#515151",
        700: "#3d3d3d",
        800: "#282828",
        850: "#1e1e1e",
        900: "#141414",
        950: "#0a0a0a"
    },
    Xm = function(e) {
        return Hm[e] || r_(Am.Grayscale, e, !0)
    },
    qm = {
        50: "#ffeef8",
        100: "#ffdef3",
        200: "#febfe8",
        300: "#ff9fdd",
        350: "#fe90d8",
        400: "#fd81d2",
        500: "#ED72C2",
        525: "#f35abd",
        600: "#d642a3",
        700: "#a72b7b",
        800: "#701b53",
        850: "#55143e",
        900: "#390c29",
        950: "#1c0615"
    },
    Gm = {
        50: "#ffefe7",
        100: "#ffe0d1",
        200: "#ffc2a3",
        300: "#ffa575",
        350: "#fe965f",
        400: "#fc894a",
        500: "#E75A32",
        525: "#dc512e",
        600: "#ba3826",
        700: "#8d1d1b",
        800: "#5f1117",
        850: "#480c14",
        900: "#30070e",
        950: "#180308"
    },
    zm = function(e) {
        return Gm[e] || r_(Am.Vermilion, e)
    },
    Wm = {
        50: "#fbf8e9",
        100: "#f7f4d5",
        200: "#edecaf",
        300: "#dde189",
        350: "#d1da78",
        400: "#c4d367",
        500: "#9DB753",
        525: "#91bb40",
        600: "#6da232",
        700: "#437d21",
        800: "#1f5713",
        850: "#14410d",
        900: "#092c08",
        950: "#041605"
    },
    Ym = function(e) {
        return Wm[e] || r_(Am.Peridot, e)
    },
    $m = {
        50: "#e1f6ec",
        100: "#c6ecdc",
        200: "#8ed9c2",
        300: "#5ac1aa",
        350: "#40b5a3",
        400: "#2ba597",
        500: "#008285",
        525: "#006d7e",
        600: "#00586a",
        700: "#003e4f",
        800: "#002735",
        850: "#001c27",
        900: "#00111a",
        950: "#00080d"
    },
    Km = function(e) {
        return $m[e] || r_(Am.Cerulean, e)
    },
    Qm = {
        50: "#e9f0fc",
        100: "#d3e2fa",
        200: "#acc7f1",
        300: "#88afe5",
        350: "#77a1de",
        400: "#6895d5",
        500: "#4B7AC2",
        525: "#3672c9",
        600: "#2460b3",
        700: "#12478f",
        800: "#052e66",
        850: "#01234f",
        900: "#001934",
        950: "#000c1a"
    },
    Jm = function(e) {
        return Qm[e] || r_(Am.Lapis, e)
    },
    Zm = {
        50: "#f5f1ff",
        100: "#ebe5ff",
        200: "#d3ccff",
        300: "#b7b3ff",
        350: "#a7a7ff",
        400: "#9b9ffe",
        500: "#8697FB",
        525: "#7e8bef",
        600: "#6468cf",
        700: "#4540a6",
        800: "#312574",
        850: "#271a59",
        900: "#190f3d",
        950: "#0e071f"
    },
    e_ = function(e) {
        return Zm[e] || r_(Am.Amethyst, e)
    },
    t_ = {
        50: "#fbf8f2",
        100: "#f6f0e6",
        200: "#ebdfcf",
        300: "#deccbb",
        350: "#d6c3b2",
        400: "#cdb8aa",
        500: "#BBA69C",
        525: "#b09e95",
        600: "#918680",
        700: "#6a6663",
        800: "#444",
        850: "#333",
        900: "#222",
        950: "#101010"
    },
    n_ = function(e) {
        return t_[e] || r_(Am.Taupe, e)
    },
    r_ = function(e, t, n) {
        var r;
        return void 0 === n && (n = !1), 500 === t ? r = e : t > 500 ? r = function(e) {
            var t = e.color,
                n = e.grade,
                r = e.grayscale,
                i = void 0 !== r && r;
            n = n / 100 - 5;
            var o = i ? 0 : n / 50 + s_(t, n, "darken"),
                s = i ? 0 : o_(t, n, "darken"),
                a = n / 5;
            return i_(t).shade(a).saturate(o).adjustHue(s).end()
        }({
            color: e,
            grade: t,
            grayscale: n
        }) : t < 500 && (r = function(e) {
            var t = e.color,
                n = e.grade,
                r = e.grayscale,
                i = void 0 !== r && r,
                o = (n = n / 100 * -1 + 5) / 5,
                s = i ? 0 : o_(t, n, "lighten"),
                a = i ? 0 : n / 100 + s_(t, n, "lighten");
            return i_(t).tint(o).saturate(a).adjustHue(s).end()
        }({
            color: e,
            grade: t,
            grayscale: n
        })), r
    };

function i_(e) {
    return {
        tint: function(t) {
            return i_(Im(t, e))
        },
        shade: function(t) {
            return i_(Sm(t, e))
        },
        saturate: function(t) {
            return i_(bm(t, e))
        },
        adjustHue: function(t) {
            return i_(um(t, e))
        },
        end: function() {
            return e
        }
    }
}

function o_(e, t, n) {
    switch (void 0 === t && (t = 0), void 0 === n && (n = "darken"), e) {
        case Bm(500):
            return 3;
        case Fm(500):
            return -2;
        case Vm(500):
            return 1;
        case zm(500):
            return "lighten" === n ? 8 + -.25 * t : -6 * t;
        case Ym(500):
            return "lighten" === n ? -5 * t - 2 : 3 + 10 * t;
        case Km(500):
            return "lighten" === n ? -6 * t - 2 : 6 + 3 * t;
        case Jm(500):
            return "lighten" === n ? t / 2 - 2 : -.5 * t - 1;
        case e_(500):
            return 6 * t;
        case n_(500):
            return 5 * t;
        default:
            return 0
    }
}

function s_(e, t, n) {
    switch (void 0 === t && (t = 0), void 0 === n && (n = "darken"), e) {
        case Xm(500):
        case Fm(500):
            return 0;
        case Vm(500):
            return .05;
        case Fm(500):
            return 0;
        case qm[500] || r_(Am.Fuschia, 500):
            return .2;
        case zm(500):
            return "lighten" === n ? .15 + t / 40 : 0;
        case Ym(500):
            return .1 + t / 30;
        case Km(500):
            return .05 + t / 50;
        case Jm(500):
            return "lighten" === n ? t / 15 : .1 + t / 10;
        case e_(500):
            return t / 20;
        case n_(500):
            return "lighten" === n ? t / 15 : t / -20;
        default:
            return .1
    }
}

function a_(e, t) {
    var n = void 0 === t ? {
            min: 0,
            max: 1e3
        } : t,
        r = n.min,
        i = void 0 === r ? 0 : r,
        o = n.max,
        s = void 0 === o ? 1e3 : o;
    return Math.min(Math.max(e, i), s)
}
var c_ = function(e) {
        return Pm(u_, e)
    },
    u_ = {
        default: "light",
        type: "COLOR",
        modes: {
            dark: function(e) {
                return Xm(a_(900 + e / 10))
            },
            light: function(e) {
                return Vm(a_((e + 200) / 4 - 175))
            }
        }
    };
c_.primary = c_(500), c_.secondary = c_(1e3);
var l_ = {
        primary: Pm({
            default: "light",
            type: "COLOR",
            modes: {
                dark: Bm(500),
                light: Bm(500)
            }
        }),
        secondary: Pm({
            default: "light",
            type: "COLOR",
            modes: {
                dark: Xm(50),
                light: Xm(700)
            }
        }),
        tertiary: Pm({
            default: "light",
            type: "COLOR",
            modes: {
                dark: Vm(700),
                light: Vm(700)
            }
        })
    },
    d_ = {
        conic: {
            sm: Pm({
                default: "light",
                type: "COLOR",
                modes: {
                    dark: "conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)",
                    light: "conic-gradient(#e65050,#764cb4,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050)"
                }
            }),
            xl: Pm({
                default: "light",
                type: "COLOR",
                modes: {
                    dark: "conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)",
                    light: "conic-gradient(#fa4343,#503873,#73d2f6,#10b5fc,#8bcf0d,#ffc34e,#fb8920,#fa4343)"
                }
            })
        },
        linear: {
            sm: Pm({
                default: "light",
                type: "COLOR",
                modes: {
                    dark: "linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)",
                    light: "linear-gradient(to right,#42cbff,#7fd02d,#cddb2f,#e8d633,#fdad4f,#e65050,#764cb4)"
                }
            }),
            xl: Pm({
                default: "light",
                type: "COLOR",
                modes: {
                    dark: "linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)",
                    light: "linear-gradient(to right,#73D2F6,#10B5FC,#8BCF0D,#FFC34E,#FB8920,#FA4343,#9F3D5C,#503873)"
                }
            })
        }
    },
    h_ = Pm({
        default: "light",
        type: "COLOR",
        modes: {
            dark: "#FF4D4D",
            light: "#FF4D4D"
        }
    }),
    f_ = {
        caution: Pm({
            default: "light",
            type: "COLOR",
            modes: {
                dark: Mm(500),
                light: Mm(500)
            }
        }),
        negative: Pm({
            default: "light",
            type: "COLOR",
            modes: {
                dark: xm(500),
                light: xm(500)
            }
        }),
        positive: Pm({
            default: "light",
            type: "COLOR",
            modes: {
                dark: Fm(500),
                light: Fm(500)
            }
        })
    },
    p_ = Pm({
        default: "light",
        type: "COLOR",
        modes: {
            dark: Xm(680),
            light: Vm(100)
        }
    }),
    m_ = function(e) {
        return Pm(__, e)
    },
    __ = {
        default: "light",
        type: "COLOR",
        modes: {
            dark: function(e) {
                return Xm(a_(-1 * (e / 5 - 1e3)))
            },
            light: function(e) {
                return e >= 300 ? Om : Vm(a_(-1 * (e / 2 - 150)))
            }
        }
    };
m_.primary = m_(400), m_.secondary = m_(600), m_.tertiary = m_(800);
var v_ = function(e) {
        return Pm(g_, e)
    },
    g_ = {
        default: "light",
        type: "COLOR",
        modes: {
            dark: function(e) {
                return Xm(a_(e / 2.5))
            },
            light: function(e) {
                return Vm(a_(function(e, t) {
                    if (void 0 === t && (t = 2), 0 === t) return Math.round(e);
                    var n = Math.pow(10, t);
                    return Math.round(e * n) / n
                }(e / -1.667 + 900, 0)))
            }
        }
    };
v_.primary = v_(0), v_.secondary = v_(600);
var y_, b_, E_ = Pm({
        default: "light",
        type: "COLOR",
        modes: {
            dark: "linear-gradient(to right,#00AA59,#00B191,#0098C8)",
            light: "linear-gradient(to right,#00BE4C,#00B285,#0095D5)"
        }
    }),
    S_ = Pm({
        default: "light",
        type: "COLOR",
        modes: {
            dark: "linear-gradient(to right,#00AA59,#00B191,#0098C8)",
            light: "linear-gradient(to right,#00B655,#00B285,#00A9D5)"
        }
    }),
    T_ = {
        default: "light",
        type: "COLOR",
        modes: {
            dark: function(e) {
                var t = .15 + e / 7500,
                    n = .75 + e / 1e3;
                return up(y_ || (y_ = Sh(["\n    border: ", "px solid rgba(255, 255, 255, ", ");\n    box-shadow: ", ", ", ";\n  "], ["\n    border: ", "px solid rgba(255, 255, 255, ", ");\n    box-shadow: ", ", ", ";\n  "])), n, t, A_(e), w_(e))
            },
            light: function(e) {
                var t = 1 + e / 2e3;
                return up(b_ || (b_ = Sh(["\n    border: ", "px solid ", ";\n    box-shadow: ", ", ", ";\n  "], ["\n    border: ", "px solid ", ";\n    box-shadow: ", ", ", ";\n  "])), t, om(Dm, .025), A_(e), w_(e))
            }
        }
    };

function w_(e) {
    return I_({
        blur: 10 + e / 500,
        spread: .5 + e / 2e3,
        opacity: e / 1e5 + e / 7500
    })
}

function A_(e) {
    return I_({
        offsetY: 10,
        blur: 6 + e / 500,
        spread: e / 2e3 - 5,
        opacity: e / 2e4 + e / 9e3
    })
}

function I_(e) {
    var t = e.offsetX,
        n = void 0 === t ? 0 : t,
        r = e.offsetY,
        i = void 0 === r ? 0 : r,
        o = e.blur,
        s = void 0 === o ? 3 : o,
        a = e.spread,
        c = void 0 === a ? 1 : a,
        u = e.color,
        l = void 0 === u ? Dm : u,
        d = e.opacity,
        h = void 0 === d ? .2 : d;
    return "\n  ".concat(n, "px\n  ").concat(i, "px\n  ").concat(s, "px\n  ").concat(c, "px\n  ").concat(om(l, h), "\n")
}
var k_, R_, P_ = {
        default: "desktop",
        type: "SIZE",
        modes: {
            desktop: function(e) {
                e += 100;
                var t = 8.5 + 3 * Math.pow(1.4, e / 100) / 1.618,
                    n = Math.round(1 * t) / 1;
                return Math.max(n, 10)
            }
        }
    },
    D_ = {
        color: {
            background: c_,
            format: l_,
            rainbow: d_,
            livestream: h_,
            status: f_,
            stroke: p_,
            surface: m_,
            text: v_,
            upsell: {
                sm: E_,
                xl: S_
            }
        },
        edge: function(e) {
            return Pm(T_, e)
        },
        space: function(e) {
            return function(e) {
                return "".concat(.25 * e / 50, "rem")
            }(e)
        },
        typography: {
            size: function(e) {
                return Pm(P_, e)
            }
        }
    },
    O_ = wp.span(k_ || (k_ = Sh(["\n  display: inline;\n  font-size: ", ";\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  border: 0;\n  color: ", ";\n  ", ";\n"], ["\n  display: inline;\n  font-size: ", ";\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  border: 0;\n  color: ", ";\n  ", ";\n"])), (function(e) {
        return Up(D_.typography.size(e.size))
    }), x_, km),
    C_ = wp.input(R_ || (R_ = Sh(["\n  background: transparent;\n  display: inline;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n  border: 0;\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  background: transparent;\n  display: inline;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n  border: 0;\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), (function(e) {
        return Up(D_.typography.size(e.size))
    }), x_, km);

function x_(e) {
    var t = e.format,
        n = e.status;
    return e.theme.formats[n || t]
}

function L_(e) {
    return void 0 === e && (e = null), e ? [M_({
        style: e,
        layout: !0
    }), M_({
        style: e,
        display: !0
    })] : [null]
}

function M_(e) {
    var t = e.style,
        n = e.layout,
        r = void 0 !== n && n,
        i = e.display,
        o = void 0 !== i && i,
        s = {},
        a = {};
    return Object.keys(t).map((function(e) {
        return V_.includes(e) ? s[e] = t[e] : a[e] = t[e]
    })), r ? yh({}, s) : o ? yh({}, a) : void 0
}
var N_, F_, U_, B_, j_, V_ = ["alignSelf", "bottom", "display", "flex", "flexBasis", "float", "height", "left", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "maxHeight", "maxWidth", "minHeight", "minWidth", "position", "right", "top", "width", "flexGrow", "flexShrink", "gridArea", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "justifySelf", "placeSelf"],
    H_ = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    X_ = wp.div(B_ || (B_ = Sh(["\n  ", "\n"], ["\n  ", "\n"])), (function(e) {
        var t = e.parent,
            n = e.focused,
            r = e.variant,
            i = e.radius,
            o = void 0 === i ? 6 : i,
            s = e.distance,
            a = void 0 === s ? 4 : s,
            c = "underline" === r ? om(Bm(300), .9) : Bm(500),
            u = "underline" === r ? "scale(0.975);" : "scale(1);",
            l = "underline" === r && up(N_ || (N_ = Sh(["\n        border-radius: 0;\n        border-top-color: rgba(0, 0, 0, 0) !important;\n        border-left-color: rgba(0, 0, 0, 0) !important;\n        border-right-color: rgba(0, 0, 0, 0) !important;\n        border-bottom-width: ", ";\n      "], ["\n        border-radius: 0;\n        border-top-color: rgba(0, 0, 0, 0) !important;\n        border-left-color: rgba(0, 0, 0, 0) !important;\n        border-right-color: rgba(0, 0, 0, 0) !important;\n        border-bottom-width: ", ";\n      "])), Up(6));
        return up(U_ || (U_ = Sh(["\n      z-index: 1;\n      top: ", ";\n      left: ", ";\n      position: absolute;\n      width: calc(100% + ", ");\n      height: calc(100% + ", ");\n      pointer-events: none;\n      transform: scale(0.94);\n      border-radius: ", ";\n      border: ", " solid ", ";\n      transition: 150ms ease-in-out;\n\n      ", ":focus > &,\n      ", ":focus ~ &,\n      ", ":focus ~ div > & {\n        transform: ", ";\n        border: ", " solid ", ";\n      }\n\n      ", "\n\n      ", ";\n    "], ["\n      z-index: 1;\n      top: ", ";\n      left: ", ";\n      position: absolute;\n      width: calc(100% + ", ");\n      height: calc(100% + ", ");\n      pointer-events: none;\n      transform: scale(0.94);\n      border-radius: ", ";\n      border: ", " solid ", ";\n      transition: 150ms ease-in-out;\n\n      ", ":focus > &,\n      ", ":focus ~ &,\n      ", ":focus ~ div > & {\n        transform: ", ";\n        border: ", " solid ", ";\n      }\n\n      ", "\n\n      ", ";\n    "])), Up(-1 * a), Up(-1 * a), Up(2 * a), Up(2 * a), Up(o), Up(1), om(c, 0), t, t, t, u, Up(2), c, n && up(F_ || (F_ = Sh(["\n        transform: ", ";\n        border: ", " solid ", ";\n      "], ["\n        transform: ", ";\n        border: ", " solid ", ";\n      "])), u, Up(2), c), l)
    })),
    q_ = "'Helvetica Neue', Helvetica, Arial, sans-serif;";

function G_(e) {
    var t = e.children,
        n = e.className,
        r = e.element,
        i = void 0 === r ? "span" : r,
        o = e.format,
        s = void 0 === o ? "soft" : o,
        a = e.onBlur,
        c = e.onChange,
        u = e.onFocus,
        l = e.onKeyUp,
        d = e.placeholder,
        h = e.size,
        f = e.style,
        p = bh(e, ["children", "className", "element", "format", "onBlur", "onChange", "onFocus", "onKeyUp", "placeholder", "size", "style"]),
        m = Eh(_d(z_, {
            text: t,
            width: 0,
            focus: !1
        }), 2),
        _ = m[0],
        v = m[1],
        g = _.text,
        y = _.width,
        b = _.focus,
        E = yd(null),
        S = yd(null),
        T = Eh(L_(f), 2),
        w = T[0],
        A = T[1];

    function I(e) {
        var t;
        u && u(e), v(["focusSet", !0]), null === (t = null == S ? void 0 : S.current) || void 0 === t || t.focus()
    }
    return vd((function() {
        var e = function(e) {
            return null == e ? void 0 : e.getBoundingClientRect()
        }(E.current).width;
        y !== e && v(["widthSet", e])
    }), [g, y]), nh("div", {
        style: yh({
            position: "relative",
            display: "inline-block"
        }, w),
        className: n
    }, nh(O_, yh({
        as: i,
        children: g.length > 0 ? g : d,
        className: n,
        format: s,
        onClick: I,
        ref: E,
        size: h
    }, p, {
        style: yh(yh({}, A), {
            opacity: b ? 0 : 1,
            margin: 0
        })
    })), nh(C_, yh({
        className: n,
        defaultValue: g,
        format: s,
        onBlur: function(e) {
            var t;
            a && a(e), v(["focusSet", !1]), null === (t = null == S ? void 0 : S.current) || void 0 === t || t.blur()
        },
        onChange: function(e) {
            c && c(e), v(["textSet", e.target.value])
        },
        onFocus: I,
        onKeyUp: function(e) {
            var t;
            l && l(e), "Enter" === e.key && (null === (t = null == S ? void 0 : S.current) || void 0 === t || t.blur())
        },
        ref: S,
        size: h,
        type: "text"
    }, p, {
        style: yh(yh({}, A), {
            width: y,
            opacity: b ? 1 : 0,
            margin: 0
        })
    })), nh(X_, {
        parent: C_
    }))
}

function z_(e, t) {
    var n = Eh(t, 2),
        r = n[0],
        i = n[1];
    switch (r) {
        case "textSet":
            return yh(yh({}, e), {
                text: W_(i)
            });
        case "widthSet":
            return yh(yh({}, e), {
                width: i
            });
        case "focusSet":
            return yh(yh({}, e), {
                focus: i
            })
    }
}! function(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    var i = up.apply(void 0, [e].concat(n)),
        o = "sc-global-" + pp(JSON.stringify(i));
    new Ap(i, o)
}(j_ || (j_ = Sh(["\n  html {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n    font-family: ", ";\n    min-height: 100%;\n    color: ", ";\n    background: ", ";\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    min-height: 100%;\n    overflow-x: hidden;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit\n  }\n\n  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {\n    margin: 0;\n    padding: 0;\n  }\n\n  input {\n    font-family: ", ";\n  }\n\n  button {\n    background: transparent;\n    border-color: transparent;\n    padding: 0;\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"], ["\n  html {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n    font-family: ", ";\n    min-height: 100%;\n    color: ", ";\n    background: ", ";\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n    min-height: 100%;\n    overflow-x: hidden;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit\n  }\n\n  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {\n    margin: 0;\n    padding: 0;\n  }\n\n  input {\n    font-family: ", ";\n  }\n\n  button {\n    background: transparent;\n    border-color: transparent;\n    padding: 0;\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"])), q_, (function(e) {
    return e.theme.content.color2
}), (function(e) {
    return e.theme.content.background
}), q_);
var W_ = function(e) {
    return e.replace(/ /g, " ")
};

function Y_(e, t, n, r) {
    var i = e.name;
    return null == i || i.replace("Component", ""), Md((function(t, n) {
        return function(t) {
            var n = t.theme,
                r = bh(t, ["theme"]),
                i = Sd(bp);
            return e(yh({
                theme: n = n || i
            }, r))
        }(yh({
            forwardRef: n
        }, t))
    }))
}
var $_, K_, Q_, J_, Z_, ev, tv, nv, rv, iv = Y_((function(e) {
        var t = e.contentEditable,
            n = e.element,
            r = void 0 === n ? "span" : n,
            i = e.format,
            o = void 0 === i ? "soft" : i,
            s = e.size,
            a = void 0 === s ? 300 : s,
            c = bh(e, ["contentEditable", "element", "format", "size"]);
        return t ? nh(G_, yh({
            format: o,
            size: a
        }, c)) : nh(O_, yh({
            as: r,
            format: o,
            size: a
        }, c))
    })),
    ov = wp(iv)($_ || ($_ = Sh(["\n  display: block;\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n  ", ";\n"], ["\n  display: block;\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n  ", ";\n"])), (function(e) {
        return e.theme.formats[e.format]
    }), (function(e) {
        return "thin" === e.variant ? 400 : 700
    }), (function(e) {
        var t = 8 - e.size / 100,
            n = function(e) {
                return Math.round(100 * (e / 50 + 1.14)) / 100
            }(t),
            r = function(e) {
                return Math.min(Math.round(100 * (-1.2 - -.2 * (e - 1))) / 100, 0)
            }(t),
            i = function(e) {
                return Math.max(.5, Math.round(100 * (1.45 - (e - 1) / 5)) / 100)
            }(t);
        return up(Q_ || (Q_ = Sh(["\n    line-height: ", ";\n    letter-spacing: ", "px;\n    margin-bottom: ", "rem;\n  "], ["\n    line-height: ", ";\n    letter-spacing: ", "px;\n    margin-bottom: ", "rem;\n  "])), n, r, i)
    }), km),
    sv = wp(iv)(K_ || (K_ = Sh(["\n  display: block;\n  color: ", ";\n  font-size: calc(2.25rem + 3.5vw);\n  line-height: calc(2.0625rem + 3.5125vw);\n  letter-spacing: calc(-0.125rem - 0.0025vw);\n  font-weight: 800;\n  max-width: calc(96vw - 2rem);\n  margin-bottom: calc(1.5rem + 0.875vw);\n"], ["\n  display: block;\n  color: ", ";\n  font-size: calc(2.25rem + 3.5vw);\n  line-height: calc(2.0625rem + 3.5125vw);\n  letter-spacing: calc(-0.125rem - 0.0025vw);\n  font-weight: 800;\n  max-width: calc(96vw - 2rem);\n  margin-bottom: calc(1.5rem + 0.875vw);\n"])), (function(e) {
        return e.theme.formats[e.format]
    })),
    av = Y_((function(e) {
        var t = e.element,
            n = e.format,
            r = void 0 === n ? "basic" : n,
            i = e.forwardRef,
            o = e.size,
            s = void 0 === o ? "1" : o,
            a = e.variant,
            c = void 0 === a ? "normal" : a,
            u = bh(e, ["element", "format", "forwardRef", "size", "variant"]),
            l = 800 - 100 * parseInt(s),
            d = function(e) {
                return e < 7 ? "h" + e : "plusUltra" === e ? "h1" : "span"
            }(s);
        return "plusUltra" === s ? nh(sv, yh({
            element: "h1",
            format: r,
            ref: i
        }, u)) : nh(ov, yh({
            element: t || d,
            format: r,
            ref: i,
            size: l,
            variant: c
        }, u))
    })),
    cv = wp.span(ev || (ev = Sh(["\n  ", "\n"], ["\n  ", "\n"])), (function(e) {
        var t = e.variant,
            n = e.theme,
            r = e.format;
        r && n.formats[r] || (r = "primary");
        var i = n.formats[r],
            o = Im(.15, i);
        return up(Z_ || (Z_ = Sh(["\n      color: ", ";\n      display: inline;\n      position: relative;\n      padding: 0;\n      font-size: inherit;\n      line-height: inherit;\n      text-decoration: none;\n      border: 0;\n      background-color: transparent;\n      transition: all 0.1s ease-in-out;\n      appearance: none;\n      cursor: pointer;\n\n      &:hover {\n        color: ", ";\n      }\n\n      &::-moz-focus-inner {\n        margin: 0;\n        padding: 0;\n        border: 0;\n      }\n\n      &:active {\n        cursor: wait;\n      }\n\n      ", "\n    "], ["\n      color: ", ";\n      display: inline;\n      position: relative;\n      padding: 0;\n      font-size: inherit;\n      line-height: inherit;\n      text-decoration: none;\n      border: 0;\n      background-color: transparent;\n      transition: all 0.1s ease-in-out;\n      appearance: none;\n      cursor: pointer;\n\n      &:hover {\n        color: ", ";\n      }\n\n      &::-moz-focus-inner {\n        margin: 0;\n        padding: 0;\n        border: 0;\n      }\n\n      &:active {\n        cursor: wait;\n      }\n\n      ", "\n    "])), i, o, "minimal" !== t && up(J_ || (J_ = Sh(["\n        &::after {\n          display: block;\n          position: absolute;\n          bottom: ", ";\n          left: 0;\n          width: 100%;\n          height: 1em;\n          margin-top: ", ";\n          border-bottom: ", " solid currentColor;\n          content: '';\n        }\n      "], ["\n        &::after {\n          display: block;\n          position: absolute;\n          bottom: ", ";\n          left: 0;\n          width: 100%;\n          height: 1em;\n          margin-top: ", ";\n          border-bottom: ", " solid currentColor;\n          content: '';\n        }\n      "])), Up(-2), Up(10), Up(1)))
    })),
    uv = Y_((function(e) {
        var t = e.children,
            n = e.variant,
            r = e.element,
            i = void 0 === r ? "a" : r,
            o = e.format,
            s = void 0 === o ? "primary" : o,
            a = e.href,
            c = bh(e, ["children", "variant", "element", "format", "href"]);
        return (nh(cv, yh({
            as: i,
            href: a,
            variant: n,
            format: s
        }, c), t))
    })),
    lv = wp(iv)(tv || (tv = Sh(["\n  font-weight: 400;\n  letter-spacing: 0.01rem;\n  ", ";\n"], ["\n  font-weight: 400;\n  letter-spacing: 0.01rem;\n  ", ";\n"])), (function(e) {
        var t = 4 - e.size / 100,
            n = function(e) {
                return Math.round(100 * (e / 25 + 1.46)) / 100
            }(t),
            r = function(e) {
                return Math.round(100 * (1.5 - .25 * e)) / 100
            }(t);
        return up(nv || (nv = Sh(["\n    font-weight: 400;\n    line-height: ", ";\n    margin-bottom: ", "rem;\n  "], ["\n    font-weight: 400;\n    line-height: ", ";\n    margin-bottom: ", "rem;\n  "])), n, r)
    })),
    dv = Y_((function(e) {
        var t = e.element,
            n = void 0 === t ? "p" : t,
            r = e.forwardRef,
            i = e.size,
            o = void 0 === i ? "4" : i,
            s = e.format,
            a = void 0 === s ? "basic" : s,
            c = bh(e, ["element", "forwardRef", "size", "format"]),
            u = "number" == typeof o ? o : parseInt(o);
        return nh(lv, yh({
            element: n,
            format: a,
            ref: r,
            size: 400 - 100 * u
        }, c))
    })),
    hv = {
        xs: 4,
        sm: 6,
        md: 8,
        lg: 10,
        xl: 12
    },
    fv = wp.div(rv || (rv = Sh(["\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  height: calc(100% + 2px);\n  background: ", ";\n  border-right: ", ";\n  border-radius: ", ";\n"], ["\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  height: calc(100% + 2px);\n  background: ", ";\n  border-right: ", ";\n  border-radius: ", ";\n"])), (function(e) {
        return om(e.theme.content.color, .2)
    }), (function(e) {
        return om(e.theme.content.color, .5)
    }), (function(e) {
        return "".concat(Up(hv[e.size]), " 0 0 ").concat(Up(hv[e.size]))
    })),
    pv = {
        textMultiplier: 1,
        contrast: !1,
        motion: !1
    },
    mv = {
        light: {
            name: "light",
            a11y: pv,
            content: {
                background: Om,
                color: Dm,
                color2: Vm(800),
                disabled: Xm(50),
                focus: Bm(500)
            },
            item: {
                bg: Om,
                bg2: Vm(50),
                locked: Xm(50)
            },
            formats: {
                primary: Bm(500),
                secondary: Xm(50),
                alternative: "#3a5161",
                soft: Vm(800),
                basic: Dm,
                positive: Fm(500),
                negative: xm(500)
            },
            inputs: {
                primary: Bm(500),
                small: xm(400)
            },
            shadows: {
                small: "box-shadow: 0 0 0.334rem -0.05rem ".concat(om(Dm, .15), ";"),
                0: "box-shadow: 0 0 0.334rem -0.05rem ".concat(om(Dm, .1), ";"),
                200: "box-shadow: 0 0 0.445rem -0.0475rem ".concat(om(Dm, .15), ";"),
                400: "box-shadow: 0 0 0.556rem -0.045rem ".concat(om(Dm, .2), ";"),
                600: "box-shadow: 0 0 0.667rem -0.0425rem ".concat(om(Dm, .25), ";"),
                800: "box-shadow: 0 0 0.778rem -0.04rem ".concat(om(Dm, .3), ";"),
                1e3: "box-shadow: 0 0 0.889rem -0.0375rem ".concat(om(Dm, .35), ";")
            }
        },
        dark: {
            name: "dark",
            a11y: pv,
            content: {
                background: Xm(910),
                color: Om,
                color2: Xm(50),
                disabled: Xm(850),
                focus: Bm(400)
            },
            item: {
                bg: Xm(850),
                bg2: Vm(800),
                locked: Xm(800)
            },
            formats: {
                primary: Bm(500),
                secondary: Xm(700),
                alternative: Vm(700),
                soft: Vm(100),
                basic: Om,
                positive: Fm(500),
                negative: xm(500)
            },
            inputs: {
                primary: Bm(400),
                small: xm(400)
            },
            shadows: {
                small: "box-shadow: 0 0 0.334rem -0.05rem ".concat(om(Dm, .15), ";"),
                0: "box-shadow: 0 0 0.334rem -0.05rem ".concat(om(Dm, .1), ";"),
                200: "box-shadow: 0 0 0.445rem -0.0475rem ".concat(om(Dm, .15), ";"),
                400: "box-shadow: 0 0 0.556rem -0.045rem ".concat(om(Dm, .2), ";"),
                600: "box-shadow: 0 0 0.667rem -0.0425rem ".concat(om(Dm, .25), ";"),
                800: "box-shadow: 0 0 0.778rem -0.04rem ".concat(om(Dm, .3), ";"),
                1e3: "box-shadow: 0 0 0.889rem -0.0375rem ".concat(om(Dm, .35), ";")
            }
        }
    };

function _v(e) {
    return function(t) {
        return t.theme.a11y.contrast ? gm(mm(.1, e)) : gm(hm(.3, e))
    }
}
var vv, gv, yv, bv, Ev, Sv, Tv, wv, Av, Iv, kv, Rv, Pv, Dv, Ov, Cv, xv, Lv, Mv, Nv, Fv, Uv, Bv, jv, Vv = up(vv || (vv = Sh(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  border: none;\n  text-decoration: none;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizelegibility;\n\n  > span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  border: none;\n  text-decoration: none;\n  font-weight: 600;\n  white-space: nowrap;\n  cursor: pointer;\n  font-family: inherit;\n  font-smoothing: antialiased;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizelegibility;\n\n  > span {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"]))),
    Hv = wp.span(yv || (yv = Sh(["\n  ", "\n"], ["\n  ", "\n"])), (function(e) {
        return ("xxl" === e.size || "xl" === e.size) && up(gv || (gv = Sh(["\n      transform: translateY(-1px);\n    "], ["\n      transform: translateY(-1px);\n    "])))
    })),
    Xv = wp.button(bv || (bv = Sh(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n"])), Vv, (function(e) {
        var t = e.size,
            n = e.iconOnly,
            r = e.iconPosition,
            i = qv[t],
            o = {
                left: "auto ".concat((i + .75) / 2, "rem auto 0"),
                right: "auto 0 auto ".concat((i + .75) / 2, "rem"),
                featured: "auto 0.75rem"
            };
        return n ? up(Ev || (Ev = Sh(["\n        svg {\n          width: ", "rem;\n          height: ", "rem;\n          display: inline-flex;\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "], ["\n        svg {\n          width: ", "rem;\n          height: ", "rem;\n          display: inline-flex;\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "])), i / 1.25 + .75, i / 1.25 + .75) : up(Sv || (Sv = Sh(["\n        position: relative;\n\n        svg {\n          width: ", "rem;\n          min-width: ", "rem;\n          height: 100%;\n          min-height: 100%;\n          display: inline-flex;\n          margin: ", ";\n          position: ", ";\n          right: ", ";\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "], ["\n        position: relative;\n\n        svg {\n          width: ", "rem;\n          min-width: ", "rem;\n          height: 100%;\n          min-height: 100%;\n          display: inline-flex;\n          margin: ", ";\n          position: ", ";\n          right: ", ";\n          overflow: visible;\n\n          > * {\n            fill: currentColor;\n          }\n        }\n      "])), i / 1.25 + .75, i / 1.25 + .75, o[r], "action" === r && "absolute", "action" === r && "0.5rem")
    }), (function(e) {
        switch (e.size) {
            case "xxl":
                return {
                    fontSize: Up(20),
                    lineHeight: Up(70),
                    height: Up(72),
                    minWidth: Up(72)
                };
            case "xl":
                return {
                    fontSize: Up(18),
                    lineHeight: Up(54),
                    height: Up(56),
                    minWidth: Up(56)
                };
            case "lg":
                return {
                    fontSize: Up(16),
                    lineHeight: Up(46),
                    height: Up(48),
                    minWidth: Up(48)
                };
            case "md":
                return {
                    fontSize: Up(14),
                    lineHeight: Up(38),
                    height: Up(40),
                    minWidth: Up(40)
                };
            case "sm":
                return {
                    fontSize: Up(14),
                    lineHeight: Up(30),
                    height: Up(32),
                    minWidth: Up(32)
                };
            case "xs":
                return {
                    fontSize: Up(12),
                    lineHeight: Up(22),
                    height: Up(24),
                    minWidth: Up(24)
                };
            case "xxs":
                return {
                    fontSize: Up(10),
                    lineHeight: Up(18),
                    height: Up(20),
                    minWidth: Up(20)
                }
        }
    }), (function(e) {
        var t = e.fluid;
        return t && function(e) {
            return Gv(!0 === e ? {} : e)
        }(t)
    }), (function(e) {
        var t = e.icon,
            n = e.iconOnly,
            r = e.iconPosition,
            i = e.size;
        return !n && function(e, t, n) {
            var r = Up(3),
                i = "".concat(4 * n + 2, "rem");
            switch (e && t) {
                case "left":
                case "right":
                    return {
                        padding: "0 " + n + "rem",
                        minHeight: r,
                        minWidth: i
                    };
                case "featured":
                    return {
                        padding: "0 ".concat(n, "rem 0 ").concat(n + 2.5, "rem"),
                        minHeight: r,
                        minWidth: "".concat(12 * n, "rem")
                    };
                case "action":
                    return {
                        padding: "0 2.5rem 0 0.5rem",
                        minHeight: r,
                        minWidth: i
                    };
                default:
                    return {
                        padding: "0 ".concat(n, "rem"),
                        minHeight: r,
                        minWidth: i
                    }
            }
        }(t, r, qv[i])
    }), (function(e) {
        var t = e.size,
            n = e.pill;
        return e.circular && (n = !0), {
            borderRadius: n ? "2rem" : Up(hv[t])
        }
    }), (function(e) {
        var t = e.floating;
        return (void 0 === t ? null : t) && up(wv || (wv = Sh(["\n      box-shadow: 0 ", " ", " 0 ", ";\n\n      &:active {\n        transform: translateY(0) scale(0.98);\n      }\n\n      &:hover:not(:active) {\n        transform: translateY(-1px) scale(1.01);\n        box-shadow: 0 ", " ", " 0 ", ";\n      }\n    "], ["\n      box-shadow: 0 ", " ", " 0 ", ";\n\n      &:active {\n        transform: translateY(0) scale(0.98);\n      }\n\n      &:hover:not(:active) {\n        transform: translateY(-1px) scale(1.01);\n        box-shadow: 0 ", " ", " 0 ", ";\n      }\n    "])), Up(3), Up(6), om(Dm, .125), Up(5), Up(7), om(Dm, .175))
    }), (function(e) {
        return {
            transition: e.theme.a11y.motion ? "none" : "all 170ms ease-in-out, font-size 50ms ease-in-out, width 0ms linear, padding 130ms ease-in-out"
        }
    }), (function(e) {
        return e.$loading && up(Tv || (Tv = Sh(["\n      cursor: wait !important;\n\n      svg,\n      ", ", ", " {\n        opacity: 0;\n      }\n    "], ["\n      cursor: wait !important;\n\n      svg,\n      ", ", ", " {\n        opacity: 0;\n      }\n    "])), fv, Hv)
    }), (function(e) {
        var t = e.color,
            n = e.format,
            r = e.theme,
            i = e.variant;
        if ("upsell" !== n) {
            var o = function(e, t, n) {
                    var r, i, o;
                    return e ? "string" == typeof e ? (i = Im(.15, r = e), o = Sm(.15, r)) : e.color && (r = e.color, i = e.hover ? e.hover : Im(.15, r), o = e.active ? e.active : Sm(.15, r)) : (r = n.formats[t], i = Im(.15, r), o = Sm(.15, r)), {
                        color: r,
                        hoverColor: i,
                        activeColor: o
                    }
                }(t, n, r),
                s = o.color,
                a = o.hoverColor,
                c = o.activeColor,
                u = s,
                l = _v(s),
                d = _v(a),
                h = _v(c);
            switch (i) {
                case "outline":
                    return up(Av || (Av = Sh(["\n        border: ", " solid ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "], ["\n        border: ", " solid ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "])), "1px", u, s, "light" === r.name ? Sm(.1, s) : Im(.5, s), "light" === r.name ? om(c, .2) : om(Im(.3, c), .3));
                case "dashed":
                    return up(Iv || (Iv = Sh(["\n        border: ", " dashed ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "], ["\n        border: ", " dashed ", ";\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "])), "1px", u, s, Sm(.2, s), om(c, .2));
                case "minimal":
                    return up(kv || (kv = Sh(["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n\n        &:active {\n          color: ", ";\n        }\n      "], ["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n\n        &:active {\n          color: ", ";\n        }\n      "])), "1px", s, d, s, h);
                case "hyperminimal":
                    return up(Rv || (Rv = Sh(["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          /* color: hoverColorDark */\n          color: ", ";\n        }\n      "], ["\n        border: ", " solid transparent;\n        background: transparent;\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          /* color: hoverColorDark */\n          color: ", ";\n        }\n      "])), "1px", s, "1px", a);
                case "minimalTransparent":
                    return up(Pv || (Pv = Sh(["\n        border: ", " solid transparent;\n        background: transparent;\n        backdrop-filter: blur(0px);\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          background: ", ";\n          backdrop-filter: blur(1.5px);\n          /* color: hoverColorDark */\n          color: ", ";\n        }\n      "], ["\n        border: ", " solid transparent;\n        background: transparent;\n        backdrop-filter: blur(0px);\n        color: ", ";\n\n        &:hover {\n          border: ", " solid transparent;\n          background: ", ";\n          backdrop-filter: blur(1.5px);\n          /* color: hoverColorDark */\n          color: ", ";\n        }\n      "])), "1px", s, "1px", om(s, .1), a);
                case "transparent":
                    return up(Dv || (Dv = Sh(["\n        background: ", ";\n        backdrop-filter: blur(4px);\n        color: ", ";\n\n        &:active {\n          background: ", ";\n          backdrop-filter: blur(4px);\n          transform: scale(0.98);\n        }\n\n        &:hover:not(:active) {\n          background: ", ";\n          backdrop-filter: blur(4px);\n          /* if: grow */\n          /* transform: scale(1.01); */\n          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */\n        }\n      "], ["\n        background: ", ";\n        backdrop-filter: blur(4px);\n        color: ", ";\n\n        &:active {\n          background: ", ";\n          backdrop-filter: blur(4px);\n          transform: scale(0.98);\n        }\n\n        &:hover:not(:active) {\n          background: ", ";\n          backdrop-filter: blur(4px);\n          /* if: grow */\n          /* transform: scale(1.01); */\n          /* box-shadow: 0 0 0 0 rgba(black, 0.1); */\n        }\n      "])), om(s, .6), Om, om(Sm(.2, c), .75), om(s, .675));
                default:
                    return up(Ov || (Ov = Sh(["\n        border: ", " solid ", ";\n        background: ", ";\n        color: ", ";\n\n        &:active {\n          background: ", ";\n          transform: scale(0.98);\n          color: ", ";\n        }\n\n        &:hover:not(:active) {\n          background: ", ";\n          border: ", " solid ", ";\n          color: ", ";\n          /* if: grow */\n          /* transform: scale(1.01); */\n          /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1),\n        0 8px 8px -6px rgba(0, 0, 0, 0.25); */\n        }\n      "], ["\n        border: ", " solid ", ";\n        background: ", ";\n        color: ", ";\n\n        &:active {\n          background: ", ";\n          transform: scale(0.98);\n          color: ", ";\n        }\n\n        &:hover:not(:active) {\n          background: ", ";\n          border: ", " solid ", ";\n          color: ", ";\n          /* if: grow */\n          /* transform: scale(1.01); */\n          /* box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1),\n        0 8px 8px -6px rgba(0, 0, 0, 0.25); */\n        }\n      "])), "1px", u, s, l, c, h, a, "1px", a, d)
            }
        }
    }), (function(e) {
        var t = e.disabled;
        return up(xv || (xv = Sh(["\n    &:disabled {\n      ", "\n    }\n    ", "\n  "], ["\n    &:disabled {\n      ", "\n    }\n    ", "\n  "])), zv, t && zv)
    }), (function(e) {
        var t = e.variant,
            n = e.textShift,
            r = e.iconPosition;
        if (t.includes("minimal")) {
            var i = "padding-" + ("right" === r ? "left" : "right");
            return n && up(Mv || (Mv = Sh(["\n      &:not(:hover):not(:focus):not(:focus-within) {\n        ", ": 0;\n      }\n    "], ["\n      &:not(:hover):not(:focus):not(:focus-within) {\n        ", ": 0;\n      }\n    "])), i)
        }
    }), (function(e) {
        var t = e.format,
            n = e.theme;
        if ("upsell" === t) {
            var r = D_.color.upsell.sm,
                i = "dark" === n.name ? "linear-gradient(to right,#00cc6b,#00cca7,#00b0e7)" : "linear-gradient(to right,#00de59,#00d39e,#00aaf3)",
                o = "dark" === n.name ? "linear-gradient(to right,#009c52,#00a385,#008cb8)" : "linear-gradient(to right,#00af46,#00a47a,#0089c4)";
            return up(Nv || (Nv = Sh(["\n    border: 1px solid transparent;\n    background: ", " padding-box, ", " border-box;\n    color: #fff;\n\n    &:active {\n      background: ", " padding-box, ", " border-box;\n      transform: scale(0.98);\n      color: #fff;\n    }\n\n    &:hover:not(:active) {\n      background: ", " padding-box, ", " border-box;\n      border: 1px solid transparent;\n      color: #fff;\n    }\n  "], ["\n    border: 1px solid transparent;\n    background: ", " padding-box, ", " border-box;\n    color: #fff;\n\n    &:active {\n      background: ", " padding-box, ", " border-box;\n      transform: scale(0.98);\n      color: #fff;\n    }\n\n    &:hover:not(:active) {\n      background: ", " padding-box, ", " border-box;\n      border: 1px solid transparent;\n      color: #fff;\n    }\n  "])), r, r, r, o, i, i)
        }
    })),
    qv = {
        xxs: .125,
        xs: .25,
        sm: .5,
        md: .75,
        lg: 1,
        xl: 1.25,
        xxl: 1.5
    },
    Gv = function(e) {
        var t = e.min,
            n = void 0 === t ? 0 : t,
            r = e.max;
        return up(Cv || (Cv = Sh(["\n  ", " {\n    width: 100%;\n  }\n"], ["\n  ", " {\n    width: 100%;\n  }\n"])), function(e) {
            var t = e.min,
                n = void 0 === t ? 0 : t,
                r = e.max,
                i = e.type,
                o = void 0 === i ? "only screen" : i;
            return r && n !== r ? "@media ".concat(o, " and (min-width: ").concat(Fp(n), ") and (max-width: ").concat(Fp(r), ")") : "@media ".concat(o, " and (min-width: ").concat(Fp(n), ")")
        }({
            min: n,
            max: r
        }))
    },
    zv = up(Lv || (Lv = Sh(["\n  opacity: 0.5;\n  pointer-events: none;\n  user-select: none;\n"], ["\n  opacity: 0.5;\n  pointer-events: none;\n  user-select: none;\n"]))),
    Wv = {
        xl: Up(40),
        lg: Up(26),
        md: Up(24),
        sm: Up(16),
        xs: Up(12)
    },
    Yv = function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        var i = up.apply(void 0, [e].concat(n)).join(""),
            o = pp(i);
        return new ep(o, i)
    }(Fv || (Fv = Sh(["\n  from { transform: rotate(0deg) }\n  to   { transform: rotate(360deg) }\n"], ["\n  from { transform: rotate(0deg) }\n  to   { transform: rotate(360deg) }\n"]))),
    $v = wp.div(Bv || (Bv = Sh(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), (function(e) {
        var t, n, r = e.theme,
            i = (null === (n = null === (t = null == r ? void 0 : r.motion) || void 0 === t ? void 0 : t.loaderCircular) || void 0 === n ? void 0 : n.speed) || 800;
        return up(Uv || (Uv = Sh(["\n    animation: ", " ", "ms linear infinite;\n  "], ["\n    animation: ", " ", "ms linear infinite;\n  "])), Yv, i)
    }), (function(e) {
        var t, n, r = e.theme,
            i = e.format,
            o = r.formats[i],
            s = "adapative" === i ? "currentColor" : o;
        return (null === (n = null === (t = null == r ? void 0 : r.motion) || void 0 === t ? void 0 : t.loaderCircular) || void 0 === n ? void 0 : n.shape) || up(jv || (jv = Sh(["\n      border-width: ", ";\n      border-style: solid;\n      border-color: ", ";\n      border-bottom-color: transparent !important;\n      ", ";\n    "], ["\n      border-width: ", ";\n      border-style: solid;\n      border-color: ", ";\n      border-bottom-color: transparent !important;\n      ", ";\n    "])), Up(2), s, Kv)
    }));

function Kv(e) {
    var t = e.size,
        n = Wv[t];
    return {
        width: n,
        height: n,
        borderRadius: n
    }
}
var Qv, Jv, Zv, eg, tg, ng, rg, ig, og, sg, ag, cg, ug, lg, dg, hg, fg, pg, mg, _g, vg, gg, yg, bg, Eg, Sg, Tg, wg, Ag, Ig = Y_((function(e) {
        var t = e.format,
            n = void 0 === t ? "primary" : t,
            r = e.size,
            i = void 0 === r ? "md" : r,
            o = e.forwardRef,
            s = bh(e, ["format", "size", "forwardRef"]);
        return (nh("div", yh({}, s), nh($v, {
            ref: o,
            format: n,
            size: i
        })))
    })),
    kg = Y_((function(e) {
        var t = e.element,
            n = void 0 === t ? "button" : t,
            r = e.children,
            i = e.color,
            o = e.fluid,
            s = e.format,
            a = void 0 === s ? "primary" : s,
            c = e.forwardRef,
            u = e.icon,
            l = e.iconPosition,
            d = void 0 === l ? "left" : l,
            h = e.loading,
            f = e.pill,
            p = void 0 !== f && f,
            m = e.size,
            _ = void 0 === m ? "md" : m,
            v = e.status,
            g = e.textShift,
            y = void 0 !== g && g,
            b = e.theme,
            E = e.type,
            S = e.variant,
            T = void 0 === S ? "solid" : S,
            w = bh(e, ["element", "children", "color", "fluid", "format", "forwardRef", "icon", "iconPosition", "loading", "pill", "size", "status", "textShift", "theme", "type", "variant"]),
            A = "left" === d && u,
            I = "right" === d && u,
            k = "featured" === d && u,
            R = "action" === d && u,
            P = p ? 50 : hv[_] + 2,
            D = a;
        return v && "neutral" !== v && (D = v), nh(Xv, yh({
            as: n,
            color: i,
            fluid: o,
            format: D,
            icon: !!u,
            iconOnly: void 0 === r && u,
            iconPosition: d,
            $loading: h,
            pill: p,
            ref: c,
            size: _,
            textShift: y,
            theme: b,
            type: E,
            variant: T
        }, w), k && nh(fv, {
            size: _
        }, u), A, r && nh(Hv, {
            size: _
        }, r), I, R, h && nh(Ig, {
            size: _,
            format: "adaptive",
            style: H_
        }), nh(X_, {
            parent: Xv,
            radius: P
        }))
    })),
    Rg = wp.div(Qv || (Qv = Sh(["\n  position: relative;\n"], ["\n  position: relative;\n"]))),
    Pg = wp.span(Jv || (Jv = Sh(["\n  display: block;\n  outline: none;\n  border-radius: ", ";\n  letter-spacing: 0.02rem;\n  color: inherit;\n  text-shadow: none;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: 90ms ease-in-out;\n\n  ", ";\n  ", ";\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n"], ["\n  display: block;\n  outline: none;\n  border-radius: ", ";\n  letter-spacing: 0.02rem;\n  color: inherit;\n  text-shadow: none;\n  text-align: center;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: 90ms ease-in-out;\n\n  ", ";\n  ", ";\n\n  &::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n"])), Up(2), (function(e) {
        var t = e.$format,
            n = e.href,
            r = void 0 === n ? null : n;
        switch (t) {
            case "alum":
                return up(ng || (ng = Sh(["\n        color: #503873;\n        background-color: ", ";\n\n        &:hover {\n          background-color: ", ";\n        }\n      "], ["\n        color: #503873;\n        background-color: ", ";\n\n        &:hover {\n          background-color: ", ";\n        }\n      "])), om("#503873", .25), om("#503873", .3));
            case "beta":
                return up(rg || (rg = Sh(["\n        color: #ff8a00;\n      "], ["\n        color: #ff8a00;\n      "])));
            case "business":
                return Dg(Fm(500));
            case "curation":
                return up(ig || (ig = Sh(["\n        color: #ff8a00;\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "], ["\n        color: #ff8a00;\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "])), om("#FFB21E", .15), hm(.1, "#FF8A00"), om("#FFB21E", .25));
            case "staff":
                return up(og || (og = Sh(["\n        color: #ff8a00;\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "], ["\n        color: #ff8a00;\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "])), om("#FFB21E", .15), hm(.1, "#FF8A00"), om("#FFB21E", .25));
            case "support":
                return up(sg || (sg = Sh(["\n        color: #ff8a00;\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "], ["\n        color: #ff8a00;\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "])), om("#FFB21E", .15), hm(.1, "#FF8A00"), om("#FFB21E", .25));
            case "explicit":
                return up(cg || (cg = Sh(["\n        color: ", ";\n        border: 1px solid ", ";\n        background-color: transparent;\n\n        ", "\n      "], ["\n        color: ", ";\n        border: 1px solid ", ";\n        background-color: transparent;\n\n        ", "\n      "])), xm(600), xm(600), r && up(ag || (ag = Sh(["\n          &:focus,\n          &:active,\n          &:hover {\n            color: ", ";\n            background-color: ", ";\n          }\n        "], ["\n          &:focus,\n          &:active,\n          &:hover {\n            color: ", ";\n            background-color: ", ";\n          }\n        "])), xm(600), xm(50)));
            case "featured":
                return up(ug || (ug = Sh(["\n        color: #ff9d9d;\n      "], ["\n        color: #ff9d9d;\n      "])));
            case "hd":
                return up(lg || (lg = Sh(["\n        font-style: italic;\n        color: #cceffc;\n      "], ["\n        font-style: italic;\n        color: #cceffc;\n      "])));
            case "help":
                return up(dg || (dg = Sh(["\n        cursor: help;\n\n        &:hover,\n        &:focus {\n          color: ", ";\n          background-color: #3a5161;\n        }\n      "], ["\n        cursor: help;\n\n        &:hover,\n        &:focus {\n          color: ", ";\n          background-color: #3a5161;\n        }\n      "])), Om);
            case "info":
                return up(hg || (hg = Sh(["\n        color: #d0d8db;\n        cursor: help;\n\n        &:hover,\n        &:focus {\n          color: ", " !important;\n          background: ", ";\n        }\n      "], ["\n        color: #d0d8db;\n        cursor: help;\n\n        &:hover,\n        &:focus {\n          color: ", " !important;\n          background: ", ";\n        }\n      "])), Om, Vm(500));
            case "live":
                return up(fg || (fg = Sh(["\n        color: ", ";\n        background: #ff4d4d;\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "], ["\n        color: ", ";\n        background: #ff4d4d;\n\n        &:hover {\n          color: ", ";\n          background: ", ";\n        }\n      "])), Om, Om, xm(600));
            case "live-archive":
                return up(pg || (pg = Sh(["\n        color: #8699a6;\n        border: 1px solid #8699a6;\n\n        &:hover {\n          color: ", ";\n          border-color: ", ";\n        }\n      "], ["\n        color: #8699a6;\n        border: 1px solid #8699a6;\n\n        &:hover {\n          color: ", ";\n          border-color: ", ";\n        }\n      "])), Vm(800), Vm(800));
            case "mature":
                var i = D_.color.status.negative;
                return up(mg || (mg = Sh(["\n        color: ", ";\n        border: 1px solid ", ";\n      "], ["\n        color: ", ";\n        border: 1px solid ", ";\n      "])), i, i);
            case "new":
                return up(_g || (_g = Sh(["\n        color: ", ";\n        vertical-align: top;\n      "], ["\n        color: ", ";\n        vertical-align: top;\n      "])), xm(500));
            case "not-yet-rated":
                return i = D_.color.text(900), up(vg || (vg = Sh(["\n        color: ", ";\n        border: 1px solid ", ";\n      "], ["\n        color: ", ";\n        border: 1px solid ", ";\n      "])), i, i);
            case "sponsor":
                return Dg(Fm(500));
            case "partner":
                return up(gg || (gg = Sh(["\n        ", ";\n        color: #a2afb8;\n        background-color: ", ";\n      "], ["\n        ", ";\n        color: #a2afb8;\n        background-color: ", ";\n      "])), Dg(Vm(800)), Vm(100));
            case "pro":
                return Dg(Vm(800));
            case "plus":
                return up(yg || (yg = Sh(["\n        ", ";\n        border: none;\n      "], ["\n        ", ";\n        border: none;\n      "])), Dg(Bm(500)));
            case "producer":
                return up(bg || (bg = Sh(["\n        ", ";\n        border: none;\n      "], ["\n        ", ";\n        border: none;\n      "])), Dg("#503873"));
            case "spatial":
                return up(Eg || (Eg = Sh(["\n        color: ", ";\n        border: 1px solid #d0d8db;\n        background-color: transparent;\n\n        &:focus,\n        &:active,\n        &:hover {\n          background-color: ", ";\n        }\n      "], ["\n        color: ", ";\n        border: 1px solid #d0d8db;\n        background-color: transparent;\n\n        &:focus,\n        &:active,\n        &:hover {\n          background-color: ", ";\n        }\n      "])), Vm(500), Xm(100));
            case "upgrade":
                return up(Sg || (Sg = Sh(["\n        color: ", ";\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "], ["\n        color: ", ";\n        background-color: ", ";\n\n        &:hover {\n          color: ", ";\n          background-color: ", ";\n        }\n      "])), Om, Bm(500), Om, Bm(600));
            case "vod":
                return up(Tg || (Tg = Sh(["\n        color: rgba(247, 180, 44, 0.2);\n        background: transparent;\n        border: 1px dotted rgba(247, 180, 44, 0.5);\n      "], ["\n        color: rgba(247, 180, 44, 0.2);\n        background: transparent;\n        border: 1px dotted rgba(247, 180, 44, 0.5);\n      "])));
            default:
                return ""
        }
    }), (function(e) {
        switch (e.size) {
            case "sm":
                return up(Zv || (Zv = Sh(["\n        padding: 0.1875rem 0.25rem;\n        font-size: 0.5625rem;\n        font-weight: 500;\n        line-height: 1.2;\n      "], ["\n        padding: 0.1875rem 0.25rem;\n        font-size: 0.5625rem;\n        font-weight: 500;\n        line-height: 1.2;\n      "])));
            case "lg":
                return up(eg || (eg = Sh(["\n        padding: 0.3125rem;\n        font-size: 1rem;\n        font-weight: 500;\n        line-height: 0.8;\n      "], ["\n        padding: 0.3125rem;\n        font-size: 1rem;\n        font-weight: 500;\n        line-height: 0.8;\n      "])));
            case "xl":
                return up(tg || (tg = Sh(["\n        border-width: 2px;\n        border-radius: 0.25rem;\n        padding: 0.5rem 0.75rem;\n        font-weight: 600;\n        line-height: 0.8;\n        font-size: 1.125rem;\n      "], ["\n        border-width: 2px;\n        border-radius: 0.25rem;\n        padding: 0.5rem 0.75rem;\n        font-weight: 600;\n        line-height: 0.8;\n        font-size: 1.125rem;\n      "])))
        }
    }));

function Dg(e, t) {
    return void 0 === t && (t = !0), up(Ag || (Ag = Sh(["\n    color: ", ";\n    background-color: ", ";\n\n    ", ";\n  "], ["\n    color: ", ";\n    background-color: ", ";\n\n    ", ";\n  "])), e, om(e, .15), t && up(wg || (wg = Sh(["\n      &:hover {\n        color: ", ";\n        background-color: ", ";\n      }\n    "], ["\n      &:hover {\n        color: ", ";\n        background-color: ", ";\n      }\n    "])), hm(.1, e), om(e, .2)))
}
var Og, Cg, xg, Lg, Mg = Y_((function(e) {
        var t = e.children,
            n = void 0 === t ? null : t,
            r = e.className,
            i = e.href,
            o = e.forwardRef,
            s = e.format,
            a = void 0 === s ? "default" : s,
            c = e.size,
            u = void 0 === c ? "sm" : c,
            l = e.style,
            d = bh(e, ["children", "className", "href", "forwardRef", "format", "size", "style"]),
            h = Eh(L_(l), 2),
            f = h[0],
            p = h[1];
        return n || (n = a.replaceAll("-", " ")), i ? nh(Rg, {
            className: r,
            style: f
        }, nh(Pg, yh({
            as: "a",
            children: n,
            $format: a,
            href: i,
            size: u,
            style: p
        }, d))) : nh(Pg, yh({
            as: "span",
            children: n,
            className: r,
            $format: a,
            ref: o,
            size: u,
            style: l
        }, d))
    })),
    Ng = wp.div(Og || (Og = Sh(["\n  position: relative;\n  border-radius: ", ";\n  width: 100%;\n  transform: scale(1) translate3d(0, 0, 0);\n  transition: border 170ms ease-in-out;\n\n  ", ";\n  ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: ", ";\n    transition: box-shadow 120ms ease-in-out,\n      transform 120ms ease-in-out, opacity 120ms ease-in-out;\n    pointer-events: none;\n\n    ", ";\n  }\n"], ["\n  position: relative;\n  border-radius: ", ";\n  width: 100%;\n  transform: scale(1) translate3d(0, 0, 0);\n  transition: border 170ms ease-in-out;\n\n  ", ";\n  ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: ", ";\n    transition: box-shadow 120ms ease-in-out,\n      transform 120ms ease-in-out, opacity 120ms ease-in-out;\n    pointer-events: none;\n\n    ", ";\n  }\n"])), Up(3), (function(e) {
        var t = e.theme,
            n = t.formats,
            r = t.item,
            i = t.content,
            o = e.$loading,
            s = e.selected,
            a = o ? r.locked : r.bg,
            c = s ? n.primary : n.secondary;
        return up(Cg || (Cg = Sh(["\n    color: ", ";\n    background: ", ";\n    border: 1px solid ", ";\n  "], ["\n    color: ", ";\n    background: ", ";\n    border: 1px solid ", ";\n  "])), i.color, a, c)
    }), (function(e) {
        var t = e.theme.content,
            n = e.$loading,
            r = e.selected,
            i = om(t.color, .334);
        return !n && !r && up(Lg || (Lg = Sh(["\n      &:hover {\n        border: ", " solid ", ";\n\n        box-shadow: rgba(0, 0, 0, 0.16667) 0 0.5rem 1rem -0.5rem,\n          rgba(0, 0, 0, 0.3334) 0 0 0.25rem -0.0625rem;\n      }\n    "], ["\n      &:hover {\n        border: ", " solid ", ";\n\n        box-shadow: rgba(0, 0, 0, 0.16667) 0 0.5rem 1rem -0.5rem,\n          rgba(0, 0, 0, 0.3334) 0 0 0.25rem -0.0625rem;\n      }\n    "])), Up(1), i)
    }), Up(3), (function(e) {
        var t = e.theme.formats,
            n = e.$loading,
            r = e.selected ? Up(3) + " " + t.primary : Up(8) + " 0 rgba(0, 0, 0, 0.1)";
        return !n && up(xg || (xg = Sh(["\n      box-shadow: 0 0 0 ", ";\n    "], ["\n      box-shadow: 0 0 0 ", ";\n    "])), r)
    })),
    Fg = Y_((function(e) {
        var t = e.forwardRef,
            n = e.loading,
            r = bh(e, ["forwardRef", "loading"]);
        return (nh(Ng, yh({
            ref: t,
            $loading: n
        }, r)))
    })),
    Ug = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 24 24",
            ref: t
        }, e), nh("path", {
            d: "M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",
            fill: "#1a2e3b"
        }))
    })),
    Bg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 24 24",
            ref: t
        }, e), nh("path", {
            d: "M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",
            fill: "#1a2e3b"
        }))
    })),
    jg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 20 20",
            ref: t
        }, e), nh("path", {
            d: "M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",
            fill: "#1A2E3B",
            fillRule: "evenodd"
        }))
    })),
    Vg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 20 20",
            ref: t
        }, e), nh("path", {
            d: "M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"
        }))
    })),
    Hg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 20 20",
            ref: t
        }, e), nh("path", {
            d: "M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",
            fill: "#1a2e3b"
        }))
    })),
    Xg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 20 20",
            ref: t
        }, e), nh("path", {
            d: "M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",
            fill: "#1a2e3b"
        }))
    })),
    qg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 20 20",
            ref: t
        }, e), nh("path", {
            d: "M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",
            fill: "#1a2e3b"
        }))
    })),
    Gg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 20 20",
            ref: t
        }, e), nh("path", {
            d: "M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",
            fill: "#1a2e3b"
        }))
    })),
    zg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 18.1 20.95",
            ref: t
        }, e), nh("path", {
            d: "M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",
            fill: "#1a2e3b"
        }))
    })),
    Wg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 20 20",
            ref: t
        }, e), nh("path", {
            d: "M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",
            fill: "#1a2e3b"
        }), nh("path", {
            d: "M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",
            fill: "#1a2e3b"
        }))
    })),
    Yg = Md((function(e, t) {
        return nh("svg", yh({
            viewBox: "0 0 24 24",
            ref: t
        }, e), nh("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"
        }))
    }));
Yg.tags = ["audio", "control", "editor", "media", "mute", "off", "player", "sound", "volume"];
var $g = Md((function(e, t) {
    return nh("svg", yh({
        viewBox: "0 0 24 24",
        ref: t
    }, e), nh("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"
    }))
}));
$g.tags = ["audio", "control", "editor", "media", "mute", "on", "player", "sound", "volume"];
var Kg = ht((function(e, t) {
    /*! For license information please see hls-parser.min.js.LICENSE.txt */
    self,
    e.exports = function() {
        return e = {
                851: (e, t, n) => {
                    var r = n(771),
                        i = r.getOptions,
                        o = r.setOptions,
                        s = n(463),
                        a = n(367),
                        c = n(890);
                    e.exports = {
                        parse: s,
                        stringify: a,
                        types: c,
                        getOptions: i,
                        setOptions: o
                    }
                },
                463: (e, t, n) => {
                    function r(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                c = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (c) throw s
                                }
                            }
                        }
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || o(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                        }
                    }

                    function s(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var a = n(771),
                        c = n(890),
                        u = c.Rendition,
                        l = c.Variant,
                        d = c.SessionData,
                        h = c.Key,
                        f = c.MediaInitializationSection,
                        p = c.DateRange,
                        m = c.SpliceInfo,
                        _ = c.MasterPlaylist,
                        v = c.MediaPlaylist,
                        g = c.Segment,
                        y = c.PartialSegment,
                        b = c.RenditionReport;

                    function E(e) {
                        return a.trim(e, '"')
                    }

                    function S(e) {
                        var t = a.splitAt(e, ",");
                        return {
                            duration: a.toNumber(t[0]),
                            title: decodeURIComponent(escape(t[1]))
                        }
                    }

                    function T(e) {
                        var t = a.splitAt(e, "@");
                        return {
                            length: a.toNumber(t[0]),
                            offset: t[1] ? a.toNumber(t[1]) : -1
                        }
                    }

                    function w(e, t) {
                        t.IV && e.compatibleVersion < 2 && (e.compatibleVersion = 2), (t.KEYFORMAT || t.KEYFORMATVERSIONS) && e.compatibleVersion < 5 && (e.compatibleVersion = 5)
                    }

                    function A(e) {
                        var t = a.splitByCommaWithPreservingQuotes(e),
                            n = {};
                        return t.forEach((function(e) {
                            var t, r, o = i(a.splitAt(e, "="), 2),
                                s = o[0],
                                c = o[1],
                                u = E(c);
                            switch (s) {
                                case "URI":
                                    n[s] = u;
                                    break;
                                case "START-DATE":
                                case "END-DATE":
                                    n[s] = new Date(u);
                                    break;
                                case "IV":
                                    n[s] = (t = u, 16 !== (r = a.hexToByteSequence(t)).length && a.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r);
                                    break;
                                case "BYTERANGE":
                                    n[s] = T(u);
                                    break;
                                case "RESOLUTION":
                                    n[s] = function(e) {
                                        var t = a.splitAt(e, "x");
                                        return {
                                            width: a.toNumber(t[0]),
                                            height: a.toNumber(t[1])
                                        }
                                    }(u);
                                    break;
                                case "END-ON-NEXT":
                                case "DEFAULT":
                                case "AUTOSELECT":
                                case "FORCED":
                                case "PRECISE":
                                case "CAN-BLOCK-RELOAD":
                                case "INDEPENDENT":
                                case "GAP":
                                    n[s] = "YES" === u;
                                    break;
                                case "DURATION":
                                case "PLANNED-DURATION":
                                case "BANDWIDTH":
                                case "AVERAGE-BANDWIDTH":
                                case "FRAME-RATE":
                                case "TIME-OFFSET":
                                case "CAN-SKIP-UNTIL":
                                case "HOLD-BACK":
                                case "PART-HOLD-BACK":
                                case "PART-TARGET":
                                case "BYTERANGE-START":
                                case "BYTERANGE-LENGTH":
                                case "LAST-MSN":
                                case "LAST-PART":
                                case "SKIPPED-SEGMENTS":
                                    n[s] = a.toNumber(u);
                                    break;
                                default:
                                    s.startsWith("SCTE35-") ? n[s] = a.hexToByteSequence(u) : s.startsWith("X-") ? n[s] = function(e) {
                                        return e.startsWith('"') ? E(e) : e.startsWith("0x") || e.startsWith("0X") ? a.hexToByteSequence(e) : a.toNumber(e)
                                    }(c) : n[s] = u
                            }
                        })), n
                    }

                    function I() {
                        a.INVALIDPLAYLIST("The file contains both media and master playlist tags.")
                    }

                    function k(e, t, n) {
                        var i, o = (i = t.attributes, new u({
                                type: i.TYPE,
                                uri: i.URI,
                                groupId: i["GROUP-ID"],
                                language: i.LANGUAGE,
                                assocLanguage: i["ASSOC-LANGUAGE"],
                                name: i.NAME,
                                isDefault: i.DEFAULT,
                                autoselect: i.AUTOSELECT,
                                forced: i.FORCED,
                                instreamId: i["INSTREAM-ID"],
                                characteristics: i.CHARACTERISTICS,
                                channels: i.CHANNELS
                            })),
                            s = e[a.camelify(n)],
                            c = function(e, t) {
                                var n, i = !1,
                                    o = r(e);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var s = n.value;
                                        if (s.name === t.name) return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
                                        s.isDefault && (i = !0)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                                return i && t.isDefault ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES." : ""
                            }(s, o);
                        c && a.INVALIDPLAYLIST(c), s.push(o), o.isDefault && (e.currentRenditions[a.camelify(n)] = s.length - 1)
                    }

                    function R(e, t, n, i, o) {
                        var s, c = new l({
                                uri: n,
                                bandwidth: t.BANDWIDTH,
                                averageBandwidth: t["AVERAGE-BANDWIDTH"],
                                codecs: t.CODECS,
                                resolution: t.RESOLUTION,
                                frameRate: t["FRAME-RATE"],
                                hdcpLevel: t["HDCP-LEVEL"]
                            }),
                            u = r(e);
                        try {
                            for (u.s(); !(s = u.n()).done;) {
                                var d = s.value;
                                if ("EXT-X-MEDIA" === d.name) {
                                    var h = d.attributes,
                                        f = h.TYPE;
                                    if (f && h["GROUP-ID"] || a.INVALIDPLAYLIST("EXT-X-MEDIA TYPE attribute is REQUIRED."), t[f] === h["GROUP-ID"] && (k(c, d, f), "CLOSED-CAPTIONS" === f)) {
                                        var p, m = r(c.closedCaptions);
                                        try {
                                            for (m.s(); !(p = m.n()).done;) {
                                                var _ = p.value.instreamId;
                                                if (_ && _.startsWith("SERVICE") && o.compatibleVersion < 7) {
                                                    o.compatibleVersion = 7;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            m.e(e)
                                        } finally {
                                            m.f()
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                        return function(e, t, n) {
                            ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(r) {
                                "CLOSED-CAPTIONS" === r && "NONE" === e[r] ? (n.isClosedCaptionsNone = !0, t.closedCaptions = []) : e[r] && !t[a.camelify(r)].find((function(t) {
                                    return t.groupId === e[r]
                                })) && a.INVALIDPLAYLIST("".concat(r, " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is ").concat(r, "."))
                            }))
                        }(t, c, o), c.isIFrameOnly = i, c
                    }

                    function P(e, t) {
                        if (e.method !== t.method) return !1;
                        if (e.uri !== t.uri) return !1;
                        if (e.iv) {
                            if (!t.iv) return !1;
                            if (e.iv.length !== t.iv.length) return !1;
                            for (var n = 0; n < e.iv.length; n++)
                                if (e.iv[n] !== t.iv[n]) return !1
                        } else if (t.iv) return !1;
                        return e.format === t.format && e.formatVersion === t.formatVersion
                    }

                    function D(e, t, n, r, i, o, s) {
                        for (var c = new g({
                                uri: t,
                                mediaSequenceNumber: i,
                                discontinuitySequence: o
                            }), u = !1, l = !1, d = function(t) {
                                var n = e[t],
                                    r = n.name,
                                    i = n.value,
                                    o = n.attributes;
                                if ("EXTINF" === r) !Number.isInteger(i.duration) && s.compatibleVersion < 3 && (s.compatibleVersion = 3), Math.round(i.duration) > s.targetDuration && a.INVALIDPLAYLIST("EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"), c.duration = i.duration, c.title = i.title;
                                else if ("EXT-X-BYTERANGE" === r) s.compatibleVersion < 4 && (s.compatibleVersion = 4), c.byterange = i;
                                else if ("EXT-X-DISCONTINUITY" === r) c.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."), c.discontinuity = !0;
                                else if ("EXT-X-KEY" === r) c.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."), w(s, o), c.key = new h({
                                    method: o.METHOD,
                                    uri: o.URI,
                                    iv: o.IV,
                                    format: o.KEYFORMAT,
                                    formatVersion: o.KEYFORMATVERSIONS
                                });
                                else if ("EXT-X-MAP" === r) c.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."), s.compatibleVersion < 5 && (s.compatibleVersion = 5), s.hasMap = !0, c.map = new f({
                                    uri: o.URI,
                                    byterange: o.BYTERANGE
                                });
                                else if ("EXT-X-PROGRAM-DATE-TIME" === r) c.programDateTime = i;
                                else if ("EXT-X-DATERANGE" === r) {
                                    var d = {};
                                    Object.keys(o).forEach((function(e) {
                                        (e.startsWith("SCTE35-") || e.startsWith("X-")) && (d[e] = o[e])
                                    })), c.dateRange = new p({
                                        id: o.ID,
                                        classId: o.CLASS,
                                        start: o["START-DATE"],
                                        end: o["END-DATE"],
                                        duration: o.DURATION,
                                        plannedDuration: o["PLANNED-DURATION"],
                                        endOnNext: o["END-ON-NEXT"],
                                        attributes: d
                                    })
                                } else if ("EXT-X-CUE-OUT" === r) c.markers.push(new m({
                                    type: "OUT",
                                    duration: i
                                }));
                                else if ("EXT-X-CUE-IN" === r) c.markers.push(new m({
                                    type: "IN"
                                }));
                                else if ("EXT-X-CUE-OUT-CONT" === r || "EXT-X-CUE" === r || "EXT-OATCLS-SCTE35" === r || "EXT-X-ASSET" === r || "EXT-X-SCTE35" === r) c.markers.push(new m({
                                    type: "RAW",
                                    tagName: r,
                                    value: i
                                }));
                                else if ("EXT-X-PRELOAD-HINT" !== r || o.TYPE)
                                    if ("EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE && l) a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist.");
                                    else if ("EXT-X-PART" !== r && "EXT-X-PRELOAD-HINT" !== r || o.URI) {
                                    if ("EXT-X-PRELOAD-HINT" === r && "MAP" === o.TYPE) u && a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."), u = !0, s.hasMap = !0, c.map = new f({
                                        hint: !0,
                                        uri: o.URI,
                                        byterange: {
                                            length: o["BYTERANGE-LENGTH"],
                                            offset: o["BYTERANGE-START"] || 0
                                        }
                                    });
                                    else if ("EXT-X-PART" === r || "EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE) {
                                        "EXT-X-PART" !== r || o.DURATION || a.INVALIDPLAYLIST("EXT-X-PART: DURATION attribute is mandatory"), "EXT-X-PRELOAD-HINT" === r && (l = !0);
                                        var _ = new y({
                                            hint: "EXT-X-PRELOAD-HINT" === r,
                                            uri: o.URI,
                                            byterange: "EXT-X-PART" === r ? o.BYTERANGE : {
                                                length: o["BYTERANGE-LENGTH"],
                                                offset: o["BYTERANGE-START"] || 0
                                            },
                                            duration: o.DURATION,
                                            independent: o.INDEPENDENT,
                                            gap: o.GAP
                                        });
                                        c.parts.push(_)
                                    }
                                } else a.INVALIDPLAYLIST("EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory");
                                else a.INVALIDPLAYLIST("EXT-X-PRELOAD-HINT: TYPE attribute is mandatory")
                            }, _ = n; _ <= r; _++) d(_);
                        return c
                    }

                    function O(e, t, n, r, i) {
                        var o = t.discontinuity,
                            s = t.key,
                            c = t.map,
                            u = t.byterange,
                            l = t.uri;
                        if (o && (t.discontinuitySequence = n + 1), s || (t.key = r), c || (t.map = i), u && -1 === u.offset) {
                            var d = e.segments;
                            if (d.length > 0) {
                                var h = d[d.length - 1];
                                h.byterange && h.uri === l ? u.offset = h.byterange.offset + h.byterange.length : a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource")
                            } else a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file")
                        }
                        return e.segments.push(t), [t.discontinuitySequence, t.key, t.map]
                    }

                    function C(e, t) {
                        var n = i(function(e) {
                                var t = e.indexOf(":");
                                return -1 === t ? [e.slice(1).trim(), null] : [e.slice(1, t).trim(), e.slice(t + 1).trim()]
                            }(e), 2),
                            r = n[0],
                            o = n[1],
                            s = function(e) {
                                switch (e) {
                                    case "EXTM3U":
                                    case "EXT-X-VERSION":
                                        return "Basic";
                                    case "EXTINF":
                                    case "EXT-X-BYTERANGE":
                                    case "EXT-X-DISCONTINUITY":
                                    case "EXT-X-KEY":
                                    case "EXT-X-MAP":
                                    case "EXT-X-PROGRAM-DATE-TIME":
                                    case "EXT-X-DATERANGE":
                                    case "EXT-X-CUE-OUT":
                                    case "EXT-X-CUE-IN":
                                    case "EXT-X-CUE-OUT-CONT":
                                    case "EXT-X-CUE":
                                    case "EXT-OATCLS-SCTE35":
                                    case "EXT-X-ASSET":
                                    case "EXT-X-SCTE35":
                                    case "EXT-X-PART":
                                    case "EXT-X-PRELOAD-HINT":
                                        return "Segment";
                                    case "EXT-X-TARGETDURATION":
                                    case "EXT-X-MEDIA-SEQUENCE":
                                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                                    case "EXT-X-ENDLIST":
                                    case "EXT-X-PLAYLIST-TYPE":
                                    case "EXT-X-I-FRAMES-ONLY":
                                    case "EXT-X-SERVER-CONTROL":
                                    case "EXT-X-PART-INF":
                                    case "EXT-X-RENDITION-REPORT":
                                    case "EXT-X-SKIP":
                                        return "MediaPlaylist";
                                    case "EXT-X-MEDIA":
                                    case "EXT-X-STREAM-INF":
                                    case "EXT-X-I-FRAME-STREAM-INF":
                                    case "EXT-X-SESSION-DATA":
                                    case "EXT-X-SESSION-KEY":
                                        return "MasterPlaylist";
                                    case "EXT-X-INDEPENDENT-SEGMENTS":
                                    case "EXT-X-START":
                                        return "MediaorMasterPlaylist";
                                    default:
                                        return "Unknown"
                                }
                            }(r);
                        if (function(e, t) {
                                if ("Segment" === e || "MediaPlaylist" === e) return void 0 === t.isMasterPlaylist ? void(t.isMasterPlaylist = !1) : void(t.isMasterPlaylist && I());
                                if ("MasterPlaylist" === e) {
                                    if (void 0 === t.isMasterPlaylist) return void(t.isMasterPlaylist = !0);
                                    !1 === t.isMasterPlaylist && I()
                                }
                            }(s, t), "Unknown" === s) return null;
                        "MediaPlaylist" === s && "EXT-X-RENDITION-REPORT" !== r && (t.hash[r] && a.INVALIDPLAYLIST("There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"), t.hash[r] = !0);
                        var c = i(function(e, t) {
                            switch (e) {
                                case "EXTM3U":
                                case "EXT-X-DISCONTINUITY":
                                case "EXT-X-ENDLIST":
                                case "EXT-X-I-FRAMES-ONLY":
                                case "EXT-X-INDEPENDENT-SEGMENTS":
                                case "EXT-X-CUE-IN":
                                    return [null, null];
                                case "EXT-X-VERSION":
                                case "EXT-X-TARGETDURATION":
                                case "EXT-X-MEDIA-SEQUENCE":
                                case "EXT-X-DISCONTINUITY-SEQUENCE":
                                case "EXT-X-CUE-OUT":
                                    return [a.toNumber(t), null];
                                case "EXT-X-KEY":
                                case "EXT-X-MAP":
                                case "EXT-X-DATERANGE":
                                case "EXT-X-MEDIA":
                                case "EXT-X-STREAM-INF":
                                case "EXT-X-I-FRAME-STREAM-INF":
                                case "EXT-X-SESSION-DATA":
                                case "EXT-X-SESSION-KEY":
                                case "EXT-X-START":
                                case "EXT-X-SERVER-CONTROL":
                                case "EXT-X-PART-INF":
                                case "EXT-X-PART":
                                case "EXT-X-PRELOAD-HINT":
                                case "EXT-X-RENDITION-REPORT":
                                case "EXT-X-SKIP":
                                    return [null, A(t)];
                                case "EXTINF":
                                    return [S(t), null];
                                case "EXT-X-BYTERANGE":
                                    return [T(t), null];
                                case "EXT-X-PROGRAM-DATE-TIME":
                                    return [new Date(t), null];
                                case "EXT-X-PLAYLIST-TYPE":
                                default:
                                    return [t, null]
                            }
                        }(r, o), 2);
                        return {
                            name: r,
                            category: s,
                            value: c[0],
                            attributes: c[1]
                        }
                    }
                    e.exports = function(e) {
                        var t = {
                                version: void 0,
                                isMasterPlaylist: void 0,
                                hasMap: !1,
                                targetDuration: 0,
                                compatibleVersion: 1,
                                isClosedCaptionsNone: !1,
                                hash: {}
                            },
                            n = function(e, t) {
                                var n;
                                return t.isMasterPlaylist ? n = function(e, t) {
                                    var n, o = new _,
                                        s = r(e.entries());
                                    try {
                                        for (s.s(); !(n = s.n()).done;) {
                                            var c = i(n.value, 2),
                                                u = c[0],
                                                l = c[1],
                                                f = l.name,
                                                p = l.value,
                                                m = l.attributes;
                                            if ("EXT-X-VERSION" === f) o.version = p;
                                            else if ("EXT-X-STREAM-INF" === f) {
                                                var v = e[u + 1];
                                                ("string" != typeof v || v.startsWith("#EXT")) && a.INVALIDPLAYLIST("EXT-X-STREAM-INF must be followed by a URI line");
                                                var g = R(e, m, v, !1, t);
                                                g && o.variants.push(g)
                                            } else if ("EXT-X-I-FRAME-STREAM-INF" === f) {
                                                var y = R(e, m, m.URI, !0, t);
                                                y && o.variants.push(y)
                                            } else "EXT-X-SESSION-DATA" === f ? function() {
                                                var e = new d({
                                                    id: m["DATA-ID"],
                                                    value: m.VALUE,
                                                    uri: m.URI,
                                                    language: m.LANGUAGE
                                                });
                                                o.sessionDataList.find((function(t) {
                                                    return t.id === e.id && t.language === e.language
                                                })) && a.INVALIDPLAYLIST("A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."), o.sessionDataList.push(e)
                                            }() : "EXT-X-SESSION-KEY" === f ? function() {
                                                "NONE" === m.METHOD && a.INVALIDPLAYLIST("EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE");
                                                var e = new h({
                                                    method: m.METHOD,
                                                    uri: m.URI,
                                                    iv: m.IV,
                                                    format: m.KEYFORMAT,
                                                    formatVersion: m.KEYFORMATVERSIONS
                                                });
                                                o.sessionKeyList.find((function(t) {
                                                    return P(t, e)
                                                })) && a.INVALIDPLAYLIST("A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."), w(t, m), o.sessionKeyList.push(e)
                                            }() : "EXT-X-INDEPENDENT-SEGMENTS" === f ? (o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0) : "EXT-X-START" === f && (o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof m["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                                offset: m["TIME-OFFSET"],
                                                precise: m.PRECISE || !1
                                            })
                                        }
                                    } catch (e) {
                                        s.e(e)
                                    } finally {
                                        s.f()
                                    }
                                    if (t.isClosedCaptionsNone) {
                                        var b, E = r(o.variants);
                                        try {
                                            for (E.s(); !(b = E.n()).done;) b.value.closedCaptions.length > 0 && a.INVALIDPLAYLIST("If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE")
                                        } catch (e) {
                                            E.e(e)
                                        } finally {
                                            E.f()
                                        }
                                    }
                                    return o
                                }(e, t) : !(n = function(e, t) {
                                    var n, o = new v,
                                        s = -1,
                                        c = 0,
                                        u = !1,
                                        l = 0,
                                        d = null,
                                        h = null,
                                        f = !1,
                                        p = r(e.entries());
                                    try {
                                        for (p.s(); !(n = p.n()).done;) {
                                            var m = i(n.value, 2),
                                                _ = m[0],
                                                g = m[1],
                                                y = g.name,
                                                E = g.value,
                                                S = g.attributes;
                                            if ("Segment" !== g.category) {
                                                if ("EXT-X-VERSION" === y) void 0 === o.version ? o.version = E : a.INVALIDPLAYLIST("A Playlist file MUST NOT contain more than one EXT-X-VERSION tag.");
                                                else if ("EXT-X-TARGETDURATION" === y) o.targetDuration = t.targetDuration = E;
                                                else if ("EXT-X-MEDIA-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), o.mediaSequenceBase = c = E;
                                                else if ("EXT-X-DISCONTINUITY-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), u && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."), o.discontinuitySequenceBase = l = E;
                                                else if ("EXT-X-ENDLIST" === y) o.endlist = !0;
                                                else if ("EXT-X-PLAYLIST-TYPE" === y) o.playlistType = E;
                                                else if ("EXT-X-I-FRAMES-ONLY" === y) t.compatibleVersion < 4 && (t.compatibleVersion = 4), o.isIFrame = !0;
                                                else if ("EXT-X-INDEPENDENT-SEGMENTS" === y) o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0;
                                                else if ("EXT-X-START" === y) o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof S["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                                    offset: S["TIME-OFFSET"],
                                                    precise: S.PRECISE || !1
                                                };
                                                else if ("EXT-X-SERVER-CONTROL" === y) S["CAN-BLOCK-RELOAD"] || a.INVALIDPLAYLIST("EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"), o.lowLatencyCompatibility = {
                                                    canBlockReload: S["CAN-BLOCK-RELOAD"],
                                                    canSkipUntil: S["CAN-SKIP-UNTIL"],
                                                    holdBack: S["HOLD-BACK"],
                                                    partHoldBack: S["PART-HOLD-BACK"]
                                                };
                                                else if ("EXT-X-PART-INF" === y) S["PART-TARGET"] || a.INVALIDPLAYLIST("EXT-X-PART-INF: PART-TARGET attribute is mandatory"), o.partTargetDuration = S["PART-TARGET"];
                                                else if ("EXT-X-RENDITION-REPORT" === y) S.URI || a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI attribute is mandatory"), 0 === S.URI.search(/^[a-z]+:/) && a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"), o.renditionReports.push(new b({
                                                    uri: S.URI,
                                                    lastMSN: S["LAST-MSN"],
                                                    lastPart: S["LAST-PART"]
                                                }));
                                                else if ("EXT-X-SKIP" === y) S["SKIPPED-SEGMENTS"] || a.INVALIDPLAYLIST("EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"), t.compatibleVersion < 9 && (t.compatibleVersion = 9), o.skip = S["SKIPPED-SEGMENTS"], c += o.skip;
                                                else if ("string" == typeof g) {
                                                    -1 === s && a.INVALIDPLAYLIST("A URI line is not preceded by any segment tags"), o.targetDuration || a.INVALIDPLAYLIST("The EXT-X-TARGETDURATION tag is REQUIRED");
                                                    var T = D(e, g, s, _ - 1, c++, l, t);
                                                    if (T) {
                                                        var w = i(O(o, T, l, d, h), 3);
                                                        l = w[0], d = w[1], h = w[2], !f && T.parts.length > 0 && (f = !0)
                                                    }
                                                    s = -1
                                                }
                                            } else -1 === s && (s = _), "EXT-X-DISCONTINUITY" === y && (u = !0)
                                        }
                                    } catch (e) {
                                        p.e(e)
                                    } finally {
                                        p.f()
                                    }
                                    if (-1 !== s) {
                                        var A = D(e, "", s, e.length - 1, c++, l, t);
                                        if (A) {
                                            var I = A.parts;
                                            I.length > 0 && !o.endlist && !I[I.length - 1].hint && a.INVALIDPLAYLIST("If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"), O(o, A, d, h), !f && A.parts.length > 0 && (f = !0)
                                        }
                                    }
                                    return function(e) {
                                        for (var t = new Map, n = new Map, i = !1, o = !1, s = e.length - 1; s >= 0; s--) {
                                            var c = e[s],
                                                u = c.programDateTime,
                                                l = c.dateRange;
                                            if (u && (o = !0), l && l.start) {
                                                i = !0, l.endOnNext && (l.end || l.duration) && a.INVALIDPLAYLIST("An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes.");
                                                var d = l.start.getTime(),
                                                    h = l.duration || 0;
                                                l.end && l.duration && d + 1e3 * h !== l.end.getTime() && a.INVALIDPLAYLIST("END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"), l.endOnNext && (l.end = t.get(l.classId)), t.set(l.classId, l.start);
                                                var f = l.end ? l.end.getTime() : l.start.getTime() + 1e3 * (l.duration || 0),
                                                    p = n.get(l.classId);
                                                if (p) {
                                                    var m, _ = r(p);
                                                    try {
                                                        for (_.s(); !(m = _.n()).done;) {
                                                            var v = m.value;
                                                            (v.start <= d && v.end > d || v.start >= d && v.start < f) && a.INVALIDPLAYLIST("DATERANGE tags with the same CLASS should not overlap")
                                                        }
                                                    } catch (e) {
                                                        _.e(e)
                                                    } finally {
                                                        _.f()
                                                    }
                                                    p.push({
                                                        start: d,
                                                        end: f
                                                    })
                                                } else n.set(l.classId, [{
                                                    start: d,
                                                    end: f
                                                }])
                                            }
                                        }
                                        i && !o && a.INVALIDPLAYLIST("If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag.")
                                    }(o.segments), o.lowLatencyCompatibility && function(e, t) {
                                        var n = e.lowLatencyCompatibility,
                                            o = e.targetDuration,
                                            s = e.partTargetDuration,
                                            c = e.segments,
                                            u = e.renditionReports,
                                            l = n.canSkipUntil,
                                            d = n.holdBack,
                                            h = n.partHoldBack;
                                        if (l < 6 * o && a.INVALIDPLAYLIST("The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."), d < 3 * o && a.INVALIDPLAYLIST("HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."), t) {
                                            void 0 === s && a.INVALIDPLAYLIST("EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"), void 0 === h && a.INVALIDPLAYLIST("EXT-X-PART: PART-HOLD-BACK attribute is mandatory"), h < s && a.INVALIDPLAYLIST("PART-HOLD-BACK must be at least PART-TARGET");
                                            var f, p = r(c.entries());
                                            try {
                                                for (p.s(); !(f = p.n()).done;) {
                                                    var m = i(f.value, 2),
                                                        _ = m[0],
                                                        v = m[1].parts;
                                                    v.length > 0 && _ < c.length - 3 && a.INVALIDPLAYLIST("Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist.");
                                                    var g, y = r(v.entries());
                                                    try {
                                                        for (y.s(); !(g = y.n()).done;) {
                                                            var b = i(g.value, 2),
                                                                E = b[0],
                                                                S = b[1].duration;
                                                            void 0 !== S && (S > s && a.INVALIDPLAYLIST("PART-TARGET is the maximum duration of any Partial Segment"), E < v.length - 1 && S < .85 * s && a.INVALIDPLAYLIST("All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"))
                                                        }
                                                    } catch (e) {
                                                        y.e(e)
                                                    } finally {
                                                        y.f()
                                                    }
                                                }
                                            } catch (e) {
                                                p.e(e)
                                            } finally {
                                                p.f()
                                            }
                                        }
                                        var T, w = r(u);
                                        try {
                                            for (w.s(); !(T = w.n()).done;) {
                                                var A = T.value,
                                                    I = c[c.length - 1];
                                                A.lastMSN || (A.lastMSN = I.mediaSequenceNumber), !A.lastPart && I.parts.length > 0 && (A.lastPart = I.parts.length - 1)
                                            }
                                        } catch (e) {
                                            w.e(e)
                                        } finally {
                                            w.f()
                                        }
                                    }(o, f), o
                                }(e, t)).isIFrame && t.hasMap && t.compatibleVersion < 6 && (t.compatibleVersion = 6), t.compatibleVersion > 1 && (!n.version || n.version < t.compatibleVersion) && a.INVALIDPLAYLIST("EXT-X-VERSION needs to be ".concat(t.compatibleVersion, " or higher.")), n
                            }(function(e, t) {
                                var n = [];
                                return e.split("\n").forEach((function(e) {
                                    var r = e.trim();
                                    if (r)
                                        if (r.startsWith("#")) {
                                            if (r.startsWith("#EXT")) {
                                                var i = C(r, t);
                                                return void(i && n.push(i))
                                            }
                                        } else n.push(r)
                                })), 0 !== n.length && "EXTM3U" === n[0].name || a.INVALIDPLAYLIST("The EXTM3U tag MUST be the first line."), n
                            }(e, t), t);
                        return n.source = e, n
                    }
                },
                367: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || s(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                c = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                        }
                    }

                    function s(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function c(e, t, n) {
                        return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                            var r = function(e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                                return e
                            }(e, t);
                            if (r) {
                                var i = Object.getOwnPropertyDescriptor(r, t);
                                return i.get ? i.get.call(n) : i.value
                            }
                        })(e, t, n || e)
                    }

                    function u(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function l(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return (l = function(e) {
                            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                            var n;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, r)
                            }

                            function r() {
                                return d(e, arguments, p(this).constructor)
                            }
                            return r.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), f(r, e)
                        })(e)
                    }

                    function d(e, t, n) {
                        return (d = h() ? Reflect.construct : function(e, t, n) {
                            var r = [null];
                            r.push.apply(r, t);
                            var i = new(Function.bind.apply(e, r));
                            return n && f(i, n.prototype), i
                        }).apply(null, arguments)
                    }

                    function h() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function f(e, t) {
                        return (f = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function p(e) {
                        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var m = n(771),
                        _ = ["#EXTINF", "#EXT-X-BYTERANGE", "#EXT-X-DISCONTINUITY", "#EXT-X-STREAM-INF", "#EXT-X-CUE-OUT", "#EXT-X-CUE-IN", "#EXT-X-KEY", "#EXT-X-MAP"],
                        v = ["#EXT-X-MEDIA"],
                        g = function(e) {
                            ! function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && f(e, t)
                            }(o, e);
                            var t, n, r, i = (t = o, n = h(), function() {
                                var e, r = p(t);
                                if (n) {
                                    var i = p(this).constructor;
                                    e = Reflect.construct(r, arguments, i)
                                } else e = r.apply(this, arguments);
                                return u(this, e)
                            });

                            function o(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, o), (t = i.call(this)).baseUri = e, t
                            }
                            return (r = [{
                                key: "push",
                                value: function() {
                                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    for (var i = function() {
                                            var t = a[s];
                                            if (!t.startsWith("#")) return c(p(o.prototype), "push", e).call(e, t), "continue";
                                            if (_.some((function(e) {
                                                    return t.startsWith(e)
                                                }))) return c(p(o.prototype), "push", e).call(e, t), "continue";
                                            if (e.includes(t)) {
                                                if (v.some((function(e) {
                                                        return t.startsWith(e)
                                                    }))) return "continue";
                                                m.INVALIDPLAYLIST("Redundant item (".concat(t, ")"))
                                            }
                                            c(p(o.prototype), "push", e).call(e, t)
                                        }, s = 0, a = n; s < a.length; s++) i()
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(o.prototype, r), o
                        }(l(Array));

                    function y(e, t) {
                        var n = 1e3;
                        t && (n = Math.pow(10, t));
                        var r = Math.round(e * n) / n;
                        return t ? r.toFixed(t) : r
                    }

                    function b(e) {
                        var t = e.toString(10),
                            n = t.indexOf(".");
                        return -1 === n ? 0 : t.length - n - 1
                    }

                    function E(e) {
                        var t = ['DATA-ID="'.concat(e.id, '"')];
                        return e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.value ? t.push('VALUE="'.concat(e.value, '"')) : e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-SESSION-DATA:".concat(t.join(","))
                    }

                    function S(e, t) {
                        var n = t ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY",
                            r = ["METHOD=".concat(e.method)];
                        return e.uri && r.push('URI="'.concat(e.uri, '"')), e.iv && (16 !== e.iv.length && m.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r.push("IV=".concat(m.byteSequenceToHex(e.iv)))), e.format && r.push('KEYFORMAT="'.concat(e.format, '"')), e.formatVersion && r.push('KEYFORMATVERSIONS="'.concat(e.formatVersion, '"')), "".concat(n, ":").concat(r.join(","))
                    }

                    function T(e, t) {
                        var n = t.isIFrameOnly ? "#EXT-X-I-FRAME-STREAM-INF" : "#EXT-X-STREAM-INF",
                            r = ["BANDWIDTH=".concat(t.bandwidth)];
                        if (t.averageBandwidth && r.push("AVERAGE-BANDWIDTH=".concat(t.averageBandwidth)), t.isIFrameOnly && r.push('URI="'.concat(t.uri, '"')), t.codecs && r.push('CODECS="'.concat(t.codecs, '"')), t.resolution && r.push("RESOLUTION=".concat(t.resolution.width, "x").concat(t.resolution.height)), t.frameRate && r.push("FRAME-RATE=".concat(y(t.frameRate, 3))), t.hdcpLevel && r.push("HDCP-LEVEL=".concat(t.hdcpLevel)), t.audio.length > 0) {
                            r.push('AUDIO="'.concat(t.audio[0].groupId, '"'));
                            var i, s = o(t.audio);
                            try {
                                for (s.s(); !(i = s.n()).done;) {
                                    var a = i.value;
                                    e.push(w(a))
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                        if (t.video.length > 0) {
                            r.push('VIDEO="'.concat(t.video[0].groupId, '"'));
                            var c, u = o(t.video);
                            try {
                                for (u.s(); !(c = u.n()).done;) {
                                    var l = c.value;
                                    e.push(w(l))
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        }
                        if (t.subtitles.length > 0) {
                            r.push('SUBTITLES="'.concat(t.subtitles[0].groupId, '"'));
                            var d, h = o(t.subtitles);
                            try {
                                for (h.s(); !(d = h.n()).done;) {
                                    var f = d.value;
                                    e.push(w(f))
                                }
                            } catch (e) {
                                h.e(e)
                            } finally {
                                h.f()
                            }
                        }
                        if (m.getOptions().allowClosedCaptionsNone && 0 === t.closedCaptions.length) r.push("CLOSED-CAPTIONS=NONE");
                        else if (t.closedCaptions.length > 0) {
                            r.push('CLOSED-CAPTIONS="'.concat(t.closedCaptions[0].groupId, '"'));
                            var p, _ = o(t.closedCaptions);
                            try {
                                for (_.s(); !(p = _.n()).done;) {
                                    var v = p.value;
                                    e.push(w(v))
                                }
                            } catch (e) {
                                _.e(e)
                            } finally {
                                _.f()
                            }
                        }
                        e.push("".concat(n, ":").concat(r.join(","))), t.isIFrameOnly || e.push("".concat(t.uri))
                    }

                    function w(e) {
                        var t = ["TYPE=".concat(e.type), 'GROUP-ID="'.concat(e.groupId, '"'), 'NAME="'.concat(e.name, '"')];
                        return void 0 !== e.isDefault && t.push("DEFAULT=".concat(e.isDefault ? "YES" : "NO")), void 0 !== e.autoselect && t.push("AUTOSELECT=".concat(e.autoselect ? "YES" : "NO")), void 0 !== e.forced && t.push("FORCED=".concat(e.forced ? "YES" : "NO")), e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.assocLanguage && t.push('ASSOC-LANGUAGE="'.concat(e.assocLanguage, '"')), e.instreamId && t.push('INSTREAM-ID="'.concat(e.instreamId, '"')), e.characteristics && t.push('CHARACTERISTICS="'.concat(e.characteristics, '"')), e.channels && t.push('CHANNELS="'.concat(e.channels, '"')), e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-MEDIA:".concat(t.join(","))
                    }

                    function A(e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            o = !1;
                        if (t.byterange && e.push("#EXT-X-BYTERANGE:".concat(k(t.byterange))), t.discontinuity && e.push("#EXT-X-DISCONTINUITY"), t.key) {
                            var s = S(t.key);
                            s !== n && (e.push(s), n = s)
                        }
                        if (t.map) {
                            var a = I(t.map);
                            a !== r && (e.push(a), r = a)
                        }
                        if (t.programDateTime && e.push("#EXT-X-PROGRAM-DATE-TIME:".concat(m.formatDate(t.programDateTime))), t.dateRange && e.push(R(t.dateRange)), t.markers.length > 0 && P(e, t.markers), t.parts.length > 0 && (o = D(e, t.parts)), o) return [n, r];
                        var c = i < 3 ? Math.round(t.duration) : y(t.duration, b(t.duration));
                        return e.push("#EXTINF:".concat(c, ",").concat(unescape(encodeURIComponent(t.title || "")))), Array.prototype.push.call(e, "".concat(t.uri)), [n, r]
                    }

                    function I(e) {
                        var t = ['URI="'.concat(e.uri, '"')];
                        return e.byterange && t.push('BYTERANGE="'.concat(k(e.byterange), '"')), "#EXT-X-MAP:".concat(t.join(","))
                    }

                    function k(e) {
                        var t = e.offset,
                            n = e.length;
                        return "".concat(n, "@").concat(t)
                    }

                    function R(e) {
                        var t = ['ID="'.concat(e.id, '"')];
                        return e.start && t.push('START-DATE="'.concat(m.formatDate(e.start), '"')), e.end && t.push('END-DATE="'.concat(e.end, '"')), e.duration && t.push("DURATION=".concat(e.duration)), e.plannedDuration && t.push("PLANNED-DURATION=".concat(e.plannedDuration)), e.classId && t.push('CLASS="'.concat(e.classId, '"')), e.endOnNext && t.push("END-ON-NEXT=YES"), Object.keys(e.attributes).forEach((function(n) {
                            n.startsWith("X-") ? "number" == typeof e.attributes[n] ? t.push("".concat(n, "=").concat(e.attributes[n])) : t.push("".concat(n, '="').concat(e.attributes[n], '"')) : n.startsWith("SCTE35-") && t.push("".concat(n, "=").concat(m.byteSequenceToHex(e.attributes[n])))
                        })), "#EXT-X-DATERANGE:".concat(t.join(","))
                    }

                    function P(e, t) {
                        var n, r = o(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                if ("OUT" === i.type) e.push("#EXT-X-CUE-OUT:".concat(i.duration));
                                else if ("IN" === i.type) e.push("#EXT-X-CUE-IN");
                                else if ("RAW" === i.type) {
                                    var s = i.value ? ":".concat(i.value) : "";
                                    e.push("#".concat(i.tagName).concat(s))
                                }
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }

                    function D(e, t) {
                        var n, r = !1,
                            i = o(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var s = n.value;
                                if (s.hint) {
                                    var a = [];
                                    if (a.push("TYPE=PART"), a.push('URI="'.concat(s.uri, '"')), s.byterange) {
                                        var c = s.byterange,
                                            u = c.offset,
                                            l = c.length;
                                        a.push("BYTERANGE-START=".concat(u)), l && a.push("BYTERANGE-LENGTH=".concat(l))
                                    }
                                    e.push("#EXT-X-PRELOAD-HINT:".concat(a.join(","))), r = !0
                                } else {
                                    var d = [];
                                    d.push("DURATION=".concat(s.duration)), d.push('URI="'.concat(s.uri, '"')), s.byterange && d.push("BYTERANGE=".concat(k(s.byterange))), s.independent && d.push("INDEPENDENT=YES"), s.gap && d.push("GAP=YES"), e.push("#EXT-X-PART:".concat(d.join(",")))
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return r
                    }
                    e.exports = function(e) {
                        m.PARAMCHECK(e), m.ASSERT("Not a playlist", "playlist" === e.type);
                        var t = new g(e.uri);
                        return t.push("#EXTM3U"), e.version && t.push("#EXT-X-VERSION:".concat(e.version)), e.independentSegments && t.push("#EXT-X-INDEPENDENT-SEGMENTS"), e.start && t.push("#EXT-X-START:TIME-OFFSET=".concat(y(e.start.offset)).concat(e.start.precise ? ",PRECISE=YES" : "")), e.isMasterPlaylist ? function(e, t) {
                            var n, r = o(t.sessionDataList);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var i = n.value;
                                    e.push(E(i))
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var s, a = o(t.sessionKeyList);
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var c = s.value;
                                    e.push(S(c, !0))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            var u, l = o(t.variants);
                            try {
                                for (l.s(); !(u = l.n()).done;) T(e, u.value)
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                        }(t, e) : function(e, t) {
                            var n = "",
                                r = "";
                            if (t.targetDuration && e.push("#EXT-X-TARGETDURATION:".concat(t.targetDuration)), t.lowLatencyCompatibility) {
                                var s = t.lowLatencyCompatibility,
                                    a = s.canBlockReload,
                                    c = s.canSkipUntil,
                                    u = s.holdBack,
                                    l = s.partHoldBack,
                                    d = [];
                                d.push("CAN-BLOCK-RELOAD=".concat(a ? "YES" : "NO")), void 0 !== c && d.push("CAN-SKIP-UNTIL=".concat(c)), void 0 !== u && d.push("HOLD-BACK=".concat(u)), void 0 !== l && d.push("PART-HOLD-BACK=".concat(l)), e.push("#EXT-X-SERVER-CONTROL:".concat(d.join(",")))
                            }
                            t.partTargetDuration && e.push("#EXT-X-PART-INF:PART-TARGET=".concat(t.partTargetDuration)), t.mediaSequenceBase && e.push("#EXT-X-MEDIA-SEQUENCE:".concat(t.mediaSequenceBase)), t.discontinuitySequenceBase && e.push("#EXT-X-DISCONTINUITY-SEQUENCE:".concat(t.discontinuitySequenceBase)), t.playlistType && e.push("#EXT-X-PLAYLIST-TYPE:".concat(t.playlistType)), t.isIFrame && e.push("#EXT-X-I-FRAMES-ONLY"), t.skip > 0 && e.push("#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(t.skip));
                            var h, f = o(t.segments);
                            try {
                                for (f.s(); !(h = f.n()).done;) {
                                    var p = i(A(e, h.value, n, r, t.version), 2);
                                    n = p[0], r = p[1]
                                }
                            } catch (e) {
                                f.e(e)
                            } finally {
                                f.f()
                            }
                            t.endlist && e.push("#EXT-X-ENDLIST");
                            var m, _ = o(t.renditionReports);
                            try {
                                for (_.s(); !(m = _.n()).done;) {
                                    var v = m.value,
                                        g = [];
                                    g.push('URI="'.concat(v.uri, '"')), g.push("LAST-MSN=".concat(v.lastMSN)), void 0 !== v.lastPart && g.push("LAST-PART=".concat(v.lastPart)), e.push("#EXT-X-RENDITION-REPORT:".concat(g.join(",")))
                                }
                            } catch (e) {
                                _.e(e)
                            } finally {
                                _.f()
                            }
                        }(t, e), t.join("\n")
                    }
                },
                890: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && function(e, t) {
                            (Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            })(e, t)
                        }(e, t)
                    }

                    function o(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = a(e);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return s(this, n)
                        }
                    }

                    function s(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function a(e) {
                        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function c(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var u = n(771),
                        l = function e(t) {
                            c(this, e), u.PARAMCHECK(t), this.type = t
                        },
                        d = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.isMasterPlaylist,
                                    o = e.uri,
                                    s = e.version,
                                    a = e.independentSegments,
                                    l = void 0 !== a && a,
                                    d = e.start,
                                    h = e.source;
                                return c(this, n), r = t.call(this, "playlist"), u.PARAMCHECK(i), r.isMasterPlaylist = i, r.uri = o, r.version = s, r.independentSegments = l, r.start = d, r.source = h, r
                            }
                            return n
                        }(l),
                        h = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c(this, n), r.isMasterPlaylist = !0, e = t.call(this, r);
                                var i = r.variants,
                                    o = void 0 === i ? [] : i,
                                    s = r.currentVariant,
                                    a = r.sessionDataList,
                                    u = void 0 === a ? [] : a,
                                    l = r.sessionKeyList,
                                    d = void 0 === l ? [] : l;
                                return e.variants = o, e.currentVariant = s, e.sessionDataList = u, e.sessionKeyList = d, e
                            }
                            return n
                        }(d),
                        f = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c(this, n), r.isMasterPlaylist = !1, e = t.call(this, r);
                                var i = r.targetDuration,
                                    o = r.mediaSequenceBase,
                                    s = void 0 === o ? 0 : o,
                                    a = r.discontinuitySequenceBase,
                                    u = void 0 === a ? 0 : a,
                                    l = r.endlist,
                                    d = void 0 !== l && l,
                                    h = r.playlistType,
                                    f = r.isIFrame,
                                    p = r.segments,
                                    m = void 0 === p ? [] : p,
                                    _ = r.lowLatencyCompatibility,
                                    v = r.partTargetDuration,
                                    g = r.renditionReports,
                                    y = void 0 === g ? [] : g,
                                    b = r.skip,
                                    E = void 0 === b ? 0 : b,
                                    S = r.hash;
                                return e.targetDuration = i, e.mediaSequenceBase = s, e.discontinuitySequenceBase = u, e.endlist = d, e.playlistType = h, e.isIFrame = f, e.segments = m, e.lowLatencyCompatibility = _, e.partTargetDuration = v, e.renditionReports = y, e.skip = E, e.hash = S, e
                            }
                            return n
                        }(d),
                        p = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.uri,
                                    o = e.mimeType,
                                    s = e.data,
                                    a = e.duration,
                                    u = e.title,
                                    l = e.byterange,
                                    d = e.discontinuity,
                                    h = e.mediaSequenceNumber,
                                    f = void 0 === h ? 0 : h,
                                    p = e.discontinuitySequence,
                                    m = void 0 === p ? 0 : p,
                                    _ = e.key,
                                    v = e.map,
                                    g = e.programDateTime,
                                    y = e.dateRange,
                                    b = e.markers,
                                    E = void 0 === b ? [] : b,
                                    S = e.parts,
                                    T = void 0 === S ? [] : S;
                                return c(this, n), (r = t.call(this, "segment")).uri = i, r.mimeType = o, r.data = s, r.duration = a, r.title = u, r.byterange = l, r.discontinuity = d, r.mediaSequenceNumber = f, r.discontinuitySequence = m, r.key = _, r.map = v, r.programDateTime = g, r.dateRange = y, r.markers = E, r.parts = T, r
                            }
                            return n
                        }(l),
                        m = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.hint,
                                    o = void 0 !== i && i,
                                    s = e.uri,
                                    a = e.duration,
                                    l = e.independent,
                                    d = e.byterange,
                                    h = e.gap;
                                return c(this, n), r = t.call(this, "part"), u.PARAMCHECK(s), r.hint = o, r.uri = s, r.duration = a, r.independent = l, r.duration = a, r.byterange = d, r.gap = h, r
                            }
                            return n
                        }(l);
                    e.exports = {
                        Rendition: function e(t) {
                            var n = t.type,
                                r = t.uri,
                                i = t.groupId,
                                o = t.language,
                                s = t.assocLanguage,
                                a = t.name,
                                l = t.isDefault,
                                d = t.autoselect,
                                h = t.forced,
                                f = t.instreamId,
                                p = t.characteristics,
                                m = t.channels;
                            c(this, e), u.PARAMCHECK(n, i, a), u.CONDITIONALASSERT(["SUBTITLES" === n, r], ["CLOSED-CAPTIONS" === n, f], ["CLOSED-CAPTIONS" === n, !r], [h, "SUBTITLES" === n]), this.type = n, this.uri = r, this.groupId = i, this.language = o, this.assocLanguage = s, this.name = a, this.isDefault = l, this.autoselect = d, this.forced = h, this.instreamId = f, this.characteristics = p, this.channels = m
                        },
                        Variant: function e(t) {
                            var n = t.uri,
                                r = t.isIFrameOnly,
                                i = void 0 !== r && r,
                                o = t.bandwidth,
                                s = t.averageBandwidth,
                                a = t.codecs,
                                l = t.resolution,
                                d = t.frameRate,
                                h = t.hdcpLevel,
                                f = t.audio,
                                p = void 0 === f ? [] : f,
                                m = t.video,
                                _ = void 0 === m ? [] : m,
                                v = t.subtitles,
                                g = void 0 === v ? [] : v,
                                y = t.closedCaptions,
                                b = void 0 === y ? [] : y,
                                E = t.currentRenditions,
                                S = void 0 === E ? {
                                    audio: 0,
                                    video: 0,
                                    subtitles: 0,
                                    closedCaptions: 0
                                } : E;
                            c(this, e), u.PARAMCHECK(n, o), this.uri = n, this.isIFrameOnly = i, this.bandwidth = o, this.averageBandwidth = s, this.codecs = a, this.resolution = l, this.frameRate = d, this.hdcpLevel = h, this.audio = p, this.video = _, this.subtitles = g, this.closedCaptions = b, this.currentRenditions = S
                        },
                        SessionData: function e(t) {
                            var n = t.id,
                                r = t.value,
                                i = t.uri,
                                o = t.language;
                            c(this, e), u.PARAMCHECK(n, r || i), u.ASSERT("SessionData cannot have both value and uri, shoud be either.", !(r && i)), this.id = n, this.value = r, this.uri = i, this.language = o
                        },
                        Key: function e(t) {
                            var n = t.method,
                                r = t.uri,
                                i = t.iv,
                                o = t.format,
                                s = t.formatVersion;
                            c(this, e), u.PARAMCHECK(n), u.CONDITIONALPARAMCHECK(["NONE" !== n, r]), u.CONDITIONALASSERT(["NONE" === n, !(r || i || o || s)]), this.method = n, this.uri = r, this.iv = i, this.format = o, this.formatVersion = s
                        },
                        MediaInitializationSection: function e(t) {
                            var n = t.hint,
                                r = void 0 !== n && n,
                                i = t.uri,
                                o = t.mimeType,
                                s = t.byterange;
                            c(this, e), u.PARAMCHECK(i), this.hint = r, this.uri = i, this.mimeType = o, this.byterange = s
                        },
                        DateRange: function e(t) {
                            var n = t.id,
                                r = t.classId,
                                i = t.start,
                                o = t.end,
                                s = t.duration,
                                a = t.plannedDuration,
                                l = t.endOnNext,
                                d = t.attributes,
                                h = void 0 === d ? {} : d;
                            c(this, e), u.PARAMCHECK(n), u.CONDITIONALPARAMCHECK([!0 === l, r]), u.CONDITIONALASSERT([o, i], [o, i <= o], [s, s >= 0], [a, a >= 0]), this.id = n, this.classId = r, this.start = i, this.end = o, this.duration = s, this.plannedDuration = a, this.endOnNext = l, this.attributes = h
                        },
                        SpliceInfo: function e(t) {
                            var n = t.type,
                                r = t.duration,
                                i = t.tagName,
                                o = t.value;
                            c(this, e), u.PARAMCHECK(n), u.CONDITIONALPARAMCHECK(["OUT" === n, r]), u.CONDITIONALPARAMCHECK(["RAW" === n, i]), this.type = n, this.duration = r, this.tagName = i, this.value = o
                        },
                        Playlist: d,
                        MasterPlaylist: h,
                        MediaPlaylist: f,
                        Segment: p,
                        PartialSegment: m,
                        RenditionReport: function e(t) {
                            var n = t.uri,
                                r = t.lastMSN,
                                i = t.lastPart;
                            c(this, e), u.PARAMCHECK(n), this.uri = n, this.lastMSN = r, this.lastPart = i
                        }
                    }
                },
                771: e => {
                    function t(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || r(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function n(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                c = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (c) throw s
                                }
                            }
                        }
                    }

                    function r(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                        }
                    }

                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var o = {};

                    function s(e) {
                        if (o.strictMode) throw e;
                        o.silent
                    }

                    function a(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        if ("number" == typeof e) return e;
                        var n = 10 === t ? Number.parseFloat(e, t) : Number.parseInt(e, t);
                        return Number.isNaN(n) ? 0 : n
                    }
                    e.exports = {
                        THROW: s,
                        ASSERT: function(e) {
                            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                            var a, c = n(i.entries());
                            try {
                                for (c.s(); !(a = c.n()).done;) {
                                    var u = t(a.value, 2),
                                        l = u[0],
                                        d = u[1];
                                    d || s(new Error("".concat(e, " : Failed at [").concat(l, "]")))
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        },
                        CONDITIONALASSERT: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = t(o.value, 2),
                                        u = c[0],
                                        l = t(c[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && (h || s(new Error("Conditional Assert : Failed at [".concat(u, "]"))))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        PARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = t(o.value, 2),
                                        u = c[0],
                                        l = c[1];
                                    void 0 === l && s(new Error("Param Check : Failed at [".concat(u, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        CONDITIONALPARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = t(o.value, 2),
                                        u = c[0],
                                        l = t(c[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && void 0 === h && s(new Error("Conditional Param Check : Failed at [".concat(u, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        INVALIDPLAYLIST: function(e) {
                            s(new Error("Invalid Playlist : ".concat(e)))
                        },
                        toNumber: a,
                        hexToByteSequence: function(e) {
                            (e.startsWith("0x") || e.startsWith("0X")) && (e = e.slice(2));
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(a(e.slice(n, n + 2), 16));
                            return Buffer.from(t)
                        },
                        byteSequenceToHex: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length;
                            n <= t && s(new Error("end must be larger than start : start=".concat(t, ", end=").concat(n)));
                            for (var r = [], i = t; i < n; i++) r.push("0".concat((255 & e[i]).toString(16).toUpperCase()).slice(-2));
                            return "0x".concat(r.join(""))
                        },
                        tryCatch: function(e, t) {
                            try {
                                return e()
                            } catch (e) {
                                return t(e)
                            }
                        },
                        splitAt: function(e, t) {
                            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = -1, i = 0, o = 0; i < e.length; i++)
                                if (e[i] === t) {
                                    if (o++ === n) return [e.slice(0, i), e.slice(i + 1)];
                                    r = i
                                }
                            return -1 !== r ? [e.slice(0, r), e.slice(r + 1)] : [e]
                        },
                        trim: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                            return e ? (e = e.trim(), " " === t || (e.startsWith(t) && (e = e.slice(1)), e.endsWith(t) && (e = e.slice(0, -1))), e) : e
                        },
                        splitByCommaWithPreservingQuotes: function(e) {
                            for (var t = [], n = !0, r = 0, i = [], o = 0; o < e.length; o++) {
                                var s = e[o];
                                n && "," === s ? (t.push(e.slice(r, o).trim()), r = o + 1) : '"' !== s && "'" !== s || (n ? (i.push(s), n = !1) : s === i[i.length - 1] ? (i.pop(), n = !0) : i.push(s))
                            }
                            return t.push(e.slice(r).trim()), t
                        },
                        camelify: function(e) {
                            var t, r = [],
                                i = !1,
                                o = n(e);
                            try {
                                for (o.s(); !(t = o.n()).done;) {
                                    var s = t.value;
                                    "-" !== s && "_" !== s ? i ? (r.push(s.toUpperCase()), i = !1) : r.push(s.toLowerCase()) : i = !0
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            return r.join("")
                        },
                        formatDate: function(e) {
                            var t = e.getUTCFullYear(),
                                n = ("0" + (e.getUTCMonth() + 1)).slice(-2),
                                r = ("0" + e.getUTCDate()).slice(-2),
                                i = ("0" + e.getUTCHours()).slice(-2),
                                o = ("0" + e.getUTCMinutes()).slice(-2),
                                s = ("0" + e.getUTCSeconds()).slice(-2),
                                a = ("00" + e.getUTCMilliseconds()).slice(-3);
                            return "".concat(t, "-").concat(n, "-").concat(r, "T").concat(i, ":").concat(o, ":").concat(s, ".").concat(a, "Z")
                        },
                        hasOwnProp: function(e, t) {
                            return Object.hasOwnProperty.call(e, t)
                        },
                        setOptions: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            o = Object.assign(o, e)
                        },
                        getOptions: function() {
                            return Object.assign({}, o)
                        }
                    }
                }
            }, t = {},
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {}
                };
                return e[r](i, i.exports, n), i.exports
            }(851);
        var e, t
    }()
}));
export {
    kt as $, pc as A, Rn as B, Ja as C, Er as D, Sn as E, Zo as F, mc as G, _s as H, _c as I, ht as J, Uc as K, Xa as L, kn as M, Fc as N, Bc as O, Qo as P, Jo as Q, zc as R, ns as S, wn as T, cu as U, En as V, Qt as W, Ha as X, du as Y, za as Z, gn as _, xt as a, td as a$, Va as a0, Xs as a1, Lt as a2, lu as a3, zu as a4, $u as a5, Yu as a6, nl as a7, pl as a8, fl as a9, jg as aA, iv as aB, Bg as aC, nd as aD, ah as aE, sh as aF, ch as aG, Ed as aH, Md as aI, Hg as aJ, qg as aK, Xg as aL, zg as aM, Gg as aN, Vg as aO, ii as aP, Mg as aQ, dv as aR, Wg as aS, Fg as aT, $g as aU, Yg as aV, ha as aW, Td as aX, Ep as aY, mv as aZ, qd as a_, _l as aa, Js as ab, La as ac, Fa as ad, Ma as ae, va as af, Et as ag, Gc as ah, cc as ai, bl as aj, An as ak, It as al, vd as am, gh as an, _h as ao, _n as ap, xl as aq, uv as ar, yd as as, Ml as at, rd as au, Sd as av, md as aw, kg as ax, Ug as ay, av as az, un as b, ui as b0, Kg as b1, pt as b2, mt as b3, vn as b4, Cr as b5, Nr as b6, xr as b7, Mr as b8, Lr as b9, wt as ba, mn as bb, sn as c, Ka as d, ft as e, ln as f, Rs as g, ts as h, Ua as i, es as j, rs as k, $o as l, na as m, Ko as n, cs as o, Ct as p, In as q, ei as r, Gn as s, Tr as t, Ot as u, wr as v, Sr as w, bt as x, Es as y, _ as z
};