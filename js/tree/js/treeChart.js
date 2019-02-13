!function (t) {
    function e(r) {
        if (i[r])return i[r].exports;
        var a = i[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
    }

    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0)
}([function (t, e, i) {
    i(1)
}, function (t, e) {
    function i(t, e) {
        var i = function (t, e, r) {
            for (var a = r, n = e; n <= t.depth; n++)a < p.max[n] + 1 && (a = p.max[n] + 1);
            if (t.children.length > 0) {
                var o = e + 1, l = t.children, c = r;
                l.forEach(function (t) {
                    c = i(t, o, c)
                })
            } else if (p.depth < e && (p.depth = e, p.max.length < e))for (var h = e - p.max.length + 1, n = 0; n < h; n++)p.max.push(0);
            a > p.max[e] && (p.max[e] = a, p.max[e] > p.step && (p.step = p.max[e])), t.pathScale = {
                x: e - 1,
                y: a - 1
            };
            for (var f = [], n = 0; n < t.children.length; n++)f.push({
                y: t.children[n].pathScale.y,
                car: t.children[n].car,
                price: t.children[n].price,
                logistics: t.children[n].logistics
            });
            return s.push({
                type: t.type,
                name: t.name,
                logistics: t.logistics,
                car: t.car,
                price: t.price,
                upPrice: t.upPrice,
                downPrice: t.downPrice,
                pathScale: t.pathScale,
                children: f
            }), a + 1
        }, r = function (t) {
            t.append("path").attr("d", "M 0 20 A 20 20, 0, 0, 1, 20 0H 220 A 20 20, 0, 0, 1, 240 20V 90 A 20 20, 0, 0, 1, 220 110 H 20 A 20 20, 0, 0, 1, 0 90V 20").attr("fill", "#012252").attr("stroke", "#00beff"), t.append("text").attr("x", "115").attr("y", "30").attr("font-size", "14px").attr("font-family", "微软雅黑").attr("text-anchor", "middle").attr("fill", "#fff").text(function (t) {
                return t.name
            }), t.append("image").attr("width", "34").attr("height", "34").attr("x", -17).attr("y", 38).attr("xlink:href", function (t) {
                return "factory" == t.type ? "./images/factory.png" : "city" == t.type ? "./images/city.png" : "store" == t.type ? "./images/store.png" : "supermarket" == t.type ? "./images/supermarket.png" : "./images/factory.png"
            });
            l(e.downPrice), l(e.upPrice);
            t.append("image").attr("width", "18").attr("height", "14").attr("x", "30").attr("y", "45").attr("xlink:href", "./images/downArrow.png"), t.append("text").attr("x", "65").attr("y", "59").attr("font-size", "14px").attr("font-family", "微软雅黑").attr("text-anchor", "start").attr("fill", "#3ff6f2").text(function (t) {
                return l(t.downPrice)
            }), t.append("image").attr("width", "18").attr("height", "14").attr("x", "30").attr("y", "73").attr("xlink:href", "./images/upArrow.png"), t.append("text").attr("x", "65").attr("y", "87").attr("font-size", "14px").attr("font-family", "微软雅黑").attr("text-anchor", "start").attr("fill", "#ff5786").text(function (t) {
                return l(t.upPrice)
            })
        }, a = function (t, e) {
            for (var i in e)e[i] instanceof Array ? (t[i] = [], arguments.callee(t[i], e[i])) : e[i] instanceof Element ? t[i] = e[i] : null == e[i] ? t[i] = null : "object" == typeof e[i] ? (t[i] = {}, arguments.callee(t[i], e[i])) : t[i] = e[i]
        }, n = function (t, e) {
            if (t.children.length > 0) {
                var i = e, r = t.children;
                r.forEach(function (t) {
                    var r = n(t, e + 1);
                    r > i && (i = r)
                }), t.depth = i
            } else t.depth = e;
            return t.depth
        }, o = function (t) {
            if (t.children.length > 0) {
                var e = t.children;
                e.sort(function (t, e) {
                    return e.depth > t.depth
                }), e.forEach(function (t) {
                    o(t)
                })
            }
        }, l = function (t) {
            var e = String(t);
            if (e.indexOf(".") != -1) {
                var i = e.split("."), r = i[0].split("");
                r.reverse();
                for (var a = r.length - 1; a >= 1; a--)r[3 * a] && r.splice(3 * a, 0, ",");
                return r.reverse(), r.join("") + "." + i[1]
            }
            var r = e.split("");
            r.reverse();
            for (var a = r.length - 1; a >= 1; a--)r[3 * a] && r.splice(3 * a, 0, ",");
            return r.reverse(), r.join("")
        }, c = function (t, e) {
            var i = t.selectAll("g").data(e).enter().append("g").attr("opacity", 0).attr("transform", function (t) {
                return "translate(" + (t.pathScale.x * p.itemWidth + 20) + "," + (t.pathScale.y * p.itemHeight + 10) + ")"
            });
            r(i);
            var a = t.selectAll(".links").data(e).enter().append("g").filter(function (t, e, i) {
                return 0 != t.children.length
            }).attr("transform", function (t) {
                return "translate(" + (t.pathScale.x * p.itemWidth + 20) + "," + (t.pathScale.y * p.itemHeight + 10) + ")"
            });
            i.transition().duration(p.transitionTargetTime).delay(function (t, e) {
                return t.pathScale.x * p.intervalTime
            }).attr("opacity", 1);
            var n = 55, o = 240, c = 380, h = 20, s = 110, f = 85, d = 80;
            a.filter(function (t, e, i) {
                for (var r = 0; r < t.children.length; r++) {
                    var a = t.children[r].y - t.pathScale.y;
                    if (0 != r ? (d3.select(this).append("line").attr("stroke-width", 1.5).attr("stroke", "#00beff").attr({
                            x1: o + h,
                            y1: n,
                            x2: o + h,
                            y2: n
                        }).transition().duration(p.transitionTime / 2).delay(function (t, e) {
                            return t.pathScale.x * p.intervalTime + p.transitionTargetTime
                        }).attr({
                            x1: o + h,
                            y1: n,
                            x2: o + h,
                            y2: n + a * p.itemHeight
                        }), d3.select(this).append("line").attr("stroke-width", 1.5).attr("stroke", "#00beff").attr({
                            x1: o + h,
                            y1: n + a * p.itemHeight,
                            x2: o + h,
                            y2: n + a * p.itemHeight
                        }).transition().duration(p.transitionTime / 2).delay(function (t, e) {
                            return t.pathScale.x * p.intervalTime + p.transitionTargetTime + p.transitionTime / 2
                        }).attr({
                            x1: o + h,
                            y1: n + a * p.itemHeight,
                            x2: c,
                            y2: n + a * p.itemHeight
                        })) : d3.select(this).append("line").attr("stroke-width", 1.5).attr("stroke", "#00beff").attr({
                            x1: o,
                            y1: n + a * p.itemHeight,
                            x2: o,
                            y2: n + a * p.itemHeight
                        }).transition().duration(p.transitionTime).delay(function (t, e) {
                            return t.pathScale.x * p.intervalTime + p.transitionTargetTime
                        }).attr({
                            x1: o,
                            y1: n + a * p.itemHeight,
                            x2: c,
                            y2: n + a * p.itemHeight
                        }), d3.select(this).append("image").attr("width", function (t) {
                            return 9
                        }).attr("height", function (t) {
                            return 15
                        }).attr("xlink:href", function (t) {
                            return "./images/arrow.png"
                        }).attr("x", c).attr("y", n + a * p.itemHeight - 7.5).attr("opacity", 0).transition().duration(p.transitionTime).delay(function (t, e) {
                            return t.pathScale.x * p.intervalTime + p.transitionTargetTime
                        }).attr("opacity", 1), d3.select(this).append("text").attr("x", c - d).attr("y", n + a * p.itemHeight + 18).attr("font-size", "14px").attr("font-family", "微软雅黑").attr("fill", "#ffd859").text(l(t.children[r].price)).attr("opacity", 0).transition().duration(p.transitionTime).delay(function (t, e) {
                            return t.pathScale.x * p.intervalTime + p.transitionTargetTime
                        }).attr("opacity", 1), 1 == t.children[r].car && d3.select(this).append("image").attr("width", function (t) {
                            return 19
                        }).attr("height", function (t) {
                            return 14
                        }).attr("xlink:href", function (t) {
                            return "./images/car.png"
                        }).attr("x", c - s).attr("y", n + a * p.itemHeight - 20).attr("opacity", 0).transition().duration(p.transitionTime).delay(function (t, e) {
                            return t.pathScale.x * p.intervalTime + p.transitionTargetTime
                        }).attr("opacity", 1), null !== t.children[r].logistics) {
                        var u = n + a * p.itemHeight - 10, g = 1;
                        t.children[r].logistics.length > 7 && (g = Math.floor(t.children[r].logistics.length / 7), t.children[r].logistics.length % 7 > 0 && g++, u -= 12 * (g - 1));
                        var m = d3.select(this).append("text").attr("font-size", "12px").attr("font-family", "微软雅黑").attr("fill", "#FFFFFF").attr("width", function (t) {
                            return f
                        });
                        if (t.children[r].logistics.length > 7)for (var x = function (e) {
                            m.append("tspan").attr("x", c - f).attr("y", u + 2 * e).text(t.children[r].logistics.substr(e, 7))
                        }, y = 0; y < t.children[r].logistics.length; y += 7)x(y); else m.append("tspan").attr("font-size", "12px").attr("font-family", "微软雅黑").attr("fill", "#ffd859").text(t.children[r].logistics);
                        m.attr("opacity", 0).transition().duration(p.transitionTime).delay(function (t, e) {
                            return t.pathScale.x * p.intervalTime + p.transitionTargetTime
                        }).attr("opacity", 1)
                    }
                }
                return !1
            })
        }, h = {}, s = [];
        a(h, e);
        var p = {
            height: 1e3,
            width: 1e3,
            margin: 10,
            depth: 0,
            step: 0,
            max: [0],
            itemWidth: 410,
            itemHeight: 200,
            transitionTargetTime: 200,
            transitionTime: 1e3,
            intervalTime: 1200
        };
        n(h, 1), o(h), i(h, 1, 1), p.height = p.itemHeight * p.step - 50, p.width = p.itemWidth * p.depth - 100, $(t).empty();
        var f = document.createElement("DIV");
        $(f).css({
            height: p.height + "px",
            width: p.width + "px",
            margin: p.margin + "px",
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none"
        }), t.appendChild(f);
        var d = d3.select(f).append("svg").attr("width", p.width).attr("height", p.height), u = d.append("g");
        c(u, s)
    }

    window.createTreeCharts = i
}]);