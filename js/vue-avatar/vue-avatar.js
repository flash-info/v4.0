! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Avatar = e() : t.Avatar = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "/gh-pages", e(0)
    }([function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        var o = n(18),
            i = r(o);
        t.exports = {
            Avatar: i["default"]
        }
    }, function(t, e) {
        var n = t.exports = {
            version: "1.2.6"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(3),
            i = r(o);
        e["default"] = {
            props: {
                username: {
                    type: String,
                    required: !0
                },
                initials: {
                    type: String
                },
                backgroundColor: {
                    type: String
                },
                color: {
                    type: String
                },
                size: {
                    type: Number,
                    "default": 50
                },
                src: {
                    type: String
                },
                rounded: {
                    type: Boolean,
                    "default": !0
                },
                lighten: {
                    type: Number,
                    "default": 80
                }
            },
            data: function() {
                return {
                    backgroundColors: ["#F44336", "#FF4081", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E", "#607D8B"]
                }
            },
            compiled: function() {
                this.$emit("avatar-initials", this.username, this.userInitial)
            },
            computed: {
                background: function() {
                    return this.backgroundColor || this.randomBackgroundColor(this.username.length, this.backgroundColors)
                },
                fontColor: function() {
                    return this.color || this.lightenColor(this.background, this.lighten)
                },
                isImage: function() {
                    return void 0 !== this.src
                },
                style: function s() {
                    var s = {
                            width: this.size + "px",
                            height: this.size + "px",
                            borderRadius: this.rounded ? "50%" : 0,
                            textAlign: "center",
                            verticalAlign: "middle"
                        },
                        t = {
                            background: "url(" + this.src + ") no-repeat",
                            backgroundSize: this.size + "px " + this.size + "px",
                            backgroundOrigin: "content-box"
                        },
                        e = {
                            backgroundColor: this.background,
                            font: Math.floor(this.size / 2.5) + "px/100px Helvetica, Arial, sans-serif",
                            fontWeight: "bold",
                            color: this.fontColor,
                            lineHeight: this.size + Math.floor(this.size / 20) + "px"
                        },
                        n = this.isImage ? t : e;
                    return (0, i["default"])(s, n), s
                },
                userInitial: function() {
                    var t = this.initials || this.initial(this.username);
                    return t
                }
            },
            methods: {
                initial: function(t) {
                    for (var e = t.split(/[ -]/), n = "", r = 0; r < e.length; r++) n += e[r].charAt(0);
                    return n.length > 3 && -1 !== n.search(/[A-Z]/) && (n = n.replace(/[a-z]+/g, "")), n = n.substr(0, 3).toUpperCase()
                },
                randomBackgroundColor: function(t, e) {
                    return e[t % e.length]
                },
                lightenColor: function(t, e) {
                    var n = !1;
                    "#" === t[0] && (t = t.slice(1), n = !0);
                    var r = parseInt(t, 16),
                        o = (r >> 16) + e;
                    o > 255 ? o = 255 : 0 > o && (o = 0);
                    var i = (r >> 8 & 255) + e;
                    i > 255 ? i = 255 : 0 > i && (i = 0);
                    var s = (255 & r) + e;
                    return s > 255 ? s = 255 : 0 > s && (s = 0), (n ? "#" : "") + (s | i << 8 | o << 16).toString(16)
                }
            }
        }
    }, function(t, e, n) {
        t.exports = {
            "default": n(4),
            __esModule: !0
        }
    }, function(t, e, n) {
        n(16), t.exports = n(1).Object.assign
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e, n) {
        var r = n(11),
            o = n(1),
            i = n(7),
            s = "prototype",
            u = function(t, e, n) {
                var a, c, f, l = t & u.F,
                    p = t & u.G,
                    d = t & u.S,
                    h = t & u.P,
                    g = t & u.B,
                    v = t & u.W,
                    y = p ? o : o[e] || (o[e] = {}),
                    x = p ? r : d ? r[e] : (r[e] || {})[s];
                p && (n = e);
                for (a in n) c = !l && x && a in x, c && a in y || (f = c ? x[a] : n[a], y[a] = p && "function" != typeof x[a] ? n[a] : g && c ? i(f, r) : v && x[a] == f ? function(t) {
                    var e = function(e) {
                        return this instanceof t ? new t(e) : t(e)
                    };
                    return e[s] = t[s], e
                }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((y[s] || (y[s] = {}))[a] = f))
            };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, t.exports = u
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e, n) {
        var r = n(6);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e) {
        var n = Object;
        t.exports = {
            create: n.create,
            getProto: n.getPrototypeOf,
            isEnum: {}.propertyIsEnumerable,
            getDesc: n.getOwnPropertyDescriptor,
            setDesc: n.defineProperty,
            setDescs: n.defineProperties,
            getKeys: n.keys,
            getNames: n.getOwnPropertyNames,
            getSymbols: n.getOwnPropertySymbols,
            each: [].forEach
        }
    }, function(t, e, n) {
        var r = n(13),
            o = n(15),
            i = n(12);
        t.exports = n(10)(function() {
            var t = Object.assign,
                e = {},
                n = {},
                r = Symbol(),
                o = "abcdefghijklmnopqrst";
            return e[r] = 7, o.split("").forEach(function(t) {
                n[t] = t
            }), 7 != t({}, e)[r] || Object.keys(t({}, n)).join("") != o
        }) ? function(t, e) {
            for (var n = o(t), s = arguments, u = s.length, a = 1, c = r.getKeys, f = r.getSymbols, l = r.isEnum; u > a;)
                for (var p, d = i(s[a++]), h = f ? c(d).concat(f(d)) : c(d), g = h.length, v = 0; g > v;) l.call(d, p = h[v++]) && (n[p] = d[p]);
            return n
        } : Object.assign
    }, function(t, e, n) {
        var r = n(8);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        var r = n(9);
        r(r.S + r.F, "Object", {
            assign: n(14)
        })
    }, function(t, e) {
        t.exports = "<div><div id=avatar v-bind:style=style> <span v-if=!this.src>{{ userInitial }}</span> </div></div>"
    }, function(t, e, n) {
        var r, o;
        r = n(2), o = n(17), t.exports = r || {}, t.exports.__esModule && (t.exports = t.exports["default"]), o && (("function" == typeof t.exports ? t.exports.options || (t.exports.options = {}) : t.exports).template = o)
    }])
});
//# sourceMappingURL=vue-avatar.min.js.map
