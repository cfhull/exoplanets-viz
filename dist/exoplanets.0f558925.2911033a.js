// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"exoplanets.0f558925.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "Eofe": [function (require, module, exports) {}, {
    "./../webfonts/fa-brands-400.eot": [["fa-brands-400.d4e1d858.eot", "YH3g"], "YH3g"],
    "./../webfonts/fa-brands-400.woff2": [["fa-brands-400.943e29d6.woff2", "qUWF"], "qUWF"],
    "./../webfonts/fa-brands-400.woff": [["fa-brands-400.d9fb6ae7.woff", "5d16"], "5d16"],
    "./../webfonts/fa-brands-400.ttf": [["fa-brands-400.c91f9c39.ttf", "Lu1x"], "Lu1x"],
    "./../webfonts/fa-brands-400.svg": [["fa-brands-400.cdee8d6c.svg", "GRGc"], "GRGc"],
    "./../webfonts/fa-regular-400.eot": [["fa-regular-400.a77a1bd8.eot", "nv+2"], "nv+2"],
    "./../webfonts/fa-regular-400.woff2": [["fa-regular-400.b01d6f07.woff2", "M504"], "M504"],
    "./../webfonts/fa-regular-400.woff": [["fa-regular-400.676645eb.woff", "H1q6"], "H1q6"],
    "./../webfonts/fa-regular-400.ttf": [["fa-regular-400.f7b874de.ttf", "Evul"], "Evul"],
    "./../webfonts/fa-regular-400.svg": [["fa-regular-400.0891dc62.svg", "9D7r"], "9D7r"],
    "./../webfonts/fa-solid-900.eot": [["fa-solid-900.ec911a20.eot", "ISQp"], "ISQp"],
    "./../webfonts/fa-solid-900.woff2": [["fa-solid-900.d093ffc5.woff2", "PerI"], "PerI"],
    "./../webfonts/fa-solid-900.woff": [["fa-solid-900.90f262cf.woff", "nA9q"], "nA9q"],
    "./../webfonts/fa-solid-900.ttf": [["fa-solid-900.835218ca.ttf", "FJZt"], "FJZt"],
    "./../webfonts/fa-solid-900.svg": [["fa-solid-900.dd6f873b.svg", "lFqB"], "lFqB"]
  }],
  "hADF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.dependencies = exports.devDependencies = exports.scripts = exports.repository = exports.module = exports.jsdelivr = exports.unpkg = exports.main = exports.author = exports.license = exports.homepage = exports.keywords = exports.description = exports.version = exports.name = void 0;
    var e = "d3";
    exports.name = e;
    var s = "5.9.7";
    exports.version = s;
    var t = "Data-Driven Documents";
    exports.description = t;
    var d = ["dom", "visualization", "svg", "animation", "canvas"];
    exports.keywords = d;
    var r = "https://d3js.org";
    exports.homepage = r;
    var o = "BSD-3-Clause";
    exports.license = o;
    var i = {
      name: "Mike Bostock",
      url: "https://bost.ocks.org/mike"
    };
    exports.author = i;
    var p = "dist/d3.node.js";
    exports.main = p;
    var a = "dist/d3.min.js";
    exports.unpkg = a;
    var n = "dist/d3.min.js";
    exports.jsdelivr = n;
    var m = "index.js";
    exports.module = m;
    var c = {
      type: "git",
      url: "https://github.com/d3/d3.git"
    };
    exports.repository = c;
    var l = {
      pretest: "rimraf dist && mkdir dist && json2module package.json > dist/package.js && node rollup.node",
      test: "tape 'test/**/*-test.js'",
      prepublishOnly: "yarn test && rollup -c",
      postpublish: 'git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m "d3 ${npm_package_version}" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m "${npm_package_version}" && git tag -am "${npm_package_version}" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js'
    };
    exports.scripts = l;
    var u = {
      json2module: "0.0",
      rimraf: "2",
      rollup: "0.64",
      "rollup-plugin-ascii": "0.0",
      "rollup-plugin-node-resolve": "3",
      "rollup-plugin-terser": "1",
      tape: "4"
    };
    exports.devDependencies = u;
    var v = {
      "d3-array": "1",
      "d3-axis": "1",
      "d3-brush": "1",
      "d3-chord": "1",
      "d3-collection": "1",
      "d3-color": "1",
      "d3-contour": "1",
      "d3-dispatch": "1",
      "d3-drag": "1",
      "d3-dsv": "1",
      "d3-ease": "1",
      "d3-fetch": "1",
      "d3-force": "1",
      "d3-format": "1",
      "d3-geo": "1",
      "d3-hierarchy": "1",
      "d3-interpolate": "1",
      "d3-path": "1",
      "d3-polygon": "1",
      "d3-quadtree": "1",
      "d3-random": "1",
      "d3-scale": "2",
      "d3-scale-chromatic": "1",
      "d3-selection": "1",
      "d3-shape": "1",
      "d3-time": "1",
      "d3-time-format": "2",
      "d3-timer": "1",
      "d3-transition": "1",
      "d3-voronoi": "1",
      "d3-zoom": "1"
    };
    exports.dependencies = v;
  }, {}],
  "5A6F": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "raOJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = n(require("./ascending"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e) {
      return 1 === e.length && (e = r(e)), {
        left: function left(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) < 0 ? r = l + 1 : u = l;
          }

          return r;
        },
        right: function right(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) > 0 ? u = l : r = l + 1;
          }

          return r;
        }
      };
    }

    function r(n) {
      return function (t, r) {
        return (0, e.default)(n(t), r);
      };
    }
  }, {
    "./ascending": "5A6F"
  }],
  "VX/h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.bisectLeft = exports.bisectRight = void 0;
    var e = r(require("./ascending")),
        t = r(require("./bisector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = (0, t.default)(e.default),
        i = s.right;
    exports.bisectRight = i;
    var o = s.left;
    exports.bisectLeft = o;
    var u = i;
    exports.default = u;
  }, {
    "./ascending": "5A6F",
    "./bisector": "raOJ"
  }],
  "0aKl": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      null == t && (t = r);

      for (var n = 0, u = e.length - 1, o = e[0], l = new Array(u < 0 ? 0 : u); n < u;) {
        l[n] = t(o, o = e[++n]);
      }

      return l;
    }

    function r(e, r) {
      return [e, r];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.pair = r;
  }, {}],
  "9JGh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./pairs");

    function r(r, t, n) {
      var u,
          a,
          l,
          o,
          i = r.length,
          s = t.length,
          f = new Array(i * s);

      for (null == n && (n = e.pair), u = l = 0; u < i; ++u) {
        for (o = r[u], a = 0; a < s; ++a, ++l) {
          f[l] = n(o, t[a]);
        }
      }

      return f;
    }
  }, {
    "./pairs": "0aKl"
  }],
  "wjXp": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "9fz/": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return null === e ? NaN : +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "IBjk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u,
          f,
          l = r.length,
          n = 0,
          a = -1,
          i = 0,
          o = 0;
      if (null == t) for (; ++a < l;) {
        isNaN(u = (0, e.default)(r[a])) || (o += (f = u - i) * (u - (i += f / ++n)));
      } else for (; ++a < l;) {
        isNaN(u = (0, e.default)(t(r[a], a, r))) || (o += (f = u - i) * (u - (i += f / ++n)));
      }
      if (n > 1) return o / (n - 1);
    }
  }, {
    "./number": "9fz/"
  }],
  "JPBu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./variance"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u = (0, e.default)(r, t);
      return u ? Math.sqrt(u) : u;
    }
  }, {
    "./variance": "IBjk"
  }],
  "tlMU": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f,
          n = e.length,
          t = -1;

      if (null == l) {
        for (; ++t < n;) {
          if (null != (r = e[t]) && r >= r) for (u = f = r; ++t < n;) {
            null != (r = e[t]) && (u > r && (u = r), f < r && (f = r));
          }
        }
      } else for (; ++t < n;) {
        if (null != (r = l(e[t], t, e)) && r >= r) for (u = f = r; ++t < n;) {
          null != (r = l(e[t], t, e)) && (u > r && (u = r), f < r && (f = r));
        }
      }

      return [u, f];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "+OA0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.map = exports.slice = void 0;
    var e = Array.prototype,
        r = e.slice;
    exports.slice = r;
    var p = e.map;
    exports.map = p;
  }, {}],
  "5O/Y": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        return e;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "nPOL": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "M4+6": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      e = +e, t = +t, r = (n = arguments.length) < 2 ? (t = e, e = 0, 1) : n < 3 ? 1 : +r;

      for (var a = -1, n = 0 | Math.max(0, Math.ceil((t - e) / r)), o = new Array(n); ++a < n;) {
        o[a] = e + a * r;
      }

      return o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "nJNY": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.tickIncrement = o, exports.tickStep = M;
    var t = Math.sqrt(50),
        r = Math.sqrt(10),
        a = Math.sqrt(2);

    function e(t, r, a) {
      var e,
          M,
          h,
          i,
          n = -1;
      if (a = +a, (t = +t) === (r = +r) && a > 0) return [t];
      if ((e = r < t) && (M = t, t = r, r = M), 0 === (i = o(t, r, a)) || !isFinite(i)) return [];
      if (i > 0) for (t = Math.ceil(t / i), r = Math.floor(r / i), h = new Array(M = Math.ceil(r - t + 1)); ++n < M;) {
        h[n] = (t + n) * i;
      } else for (t = Math.floor(t * i), r = Math.ceil(r * i), h = new Array(M = Math.ceil(t - r + 1)); ++n < M;) {
        h[n] = (t - n) / i;
      }
      return e && h.reverse(), h;
    }

    function o(e, o, M) {
      var h = (o - e) / Math.max(0, M),
          i = Math.floor(Math.log(h) / Math.LN10),
          n = h / Math.pow(10, i);
      return i >= 0 ? (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1);
    }

    function M(e, o, M) {
      var h = Math.abs(o - e) / Math.max(0, M),
          i = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)),
          n = h / i;
      return n >= t ? i *= 10 : n >= r ? i *= 5 : n >= a && (i *= 2), o < e ? -i : i;
    }
  }, {}],
  "Pg/U": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return Math.ceil(Math.log(e.length) / Math.LN2) + 1;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "eRk3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./array"),
        r = o(require("./bisect")),
        t = o(require("./constant")),
        u = o(require("./extent")),
        n = o(require("./identity")),
        a = o(require("./range")),
        f = require("./ticks"),
        i = o(require("./threshold/sturges"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l() {
      var o = n.default,
          l = u.default,
          s = i.default;

      function c(e) {
        var t,
            u,
            n = e.length,
            i = new Array(n);

        for (t = 0; t < n; ++t) {
          i[t] = o(e[t], t, e);
        }

        var c = l(i),
            d = c[0],
            h = c[1],
            y = s(i, d, h);
        Array.isArray(y) || (y = (0, f.tickStep)(d, h, y), y = (0, a.default)(Math.ceil(d / y) * y, h, y));

        for (var p = y.length; y[0] <= d;) {
          y.shift(), --p;
        }

        for (; y[p - 1] > h;) {
          y.pop(), --p;
        }

        var q,
            v = new Array(p + 1);

        for (t = 0; t <= p; ++t) {
          (q = v[t] = []).x0 = t > 0 ? y[t - 1] : d, q.x1 = t < p ? y[t] : h;
        }

        for (t = 0; t < n; ++t) {
          d <= (u = i[t]) && u <= h && v[(0, r.default)(y, u, 0, p)].push(e[t]);
        }

        return v;
      }

      return c.value = function (e) {
        return arguments.length ? (o = "function" == typeof e ? e : (0, t.default)(e), c) : o;
      }, c.domain = function (e) {
        return arguments.length ? (l = "function" == typeof e ? e : (0, t.default)([e[0], e[1]]), c) : l;
      }, c.thresholds = function (r) {
        return arguments.length ? (s = "function" == typeof r ? r : Array.isArray(r) ? (0, t.default)(e.slice.call(r)) : (0, t.default)(r), c) : s;
      }, c;
    }
  }, {
    "./array": "+OA0",
    "./bisect": "VX/h",
    "./constant": "5O/Y",
    "./extent": "tlMU",
    "./identity": "nPOL",
    "./range": "M4+6",
    "./ticks": "nJNY",
    "./threshold/sturges": "Pg/U"
  }],
  "9qox": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t, u) {
      if (null == u && (u = e.default), n = r.length) {
        if ((t = +t) <= 0 || n < 2) return +u(r[0], 0, r);
        if (t >= 1) return +u(r[n - 1], n - 1, r);
        var n,
            f = (n - 1) * t,
            l = Math.floor(f),
            o = +u(r[l], l, r);
        return o + (+u(r[l + 1], l + 1, r) - o) * (f - l);
      }
    }
  }, {
    "./number": "9fz/"
  }],
  "a8Ry": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("../array"),
        r = a(require("../ascending")),
        t = a(require("../number")),
        u = a(require("../quantile"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(a, l, n) {
      return a = e.map.call(a, t.default).sort(r.default), Math.ceil((n - l) / (2 * ((0, u.default)(a, .75) - (0, u.default)(a, .25)) * Math.pow(a.length, -1 / 3)));
    }
  }, {
    "../array": "+OA0",
    "../ascending": "5A6F",
    "../number": "9fz/",
    "../quantile": "9qox"
  }],
  "VlA4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../deviation"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r, u) {
      return Math.ceil((u - r) / (3.5 * (0, e.default)(t) * Math.pow(t.length, -1 / 3)));
    }
  }, {
    "../deviation": "JPBu"
  }],
  "8Rao": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f = e.length,
          n = -1;

      if (null == l) {
        for (; ++n < f;) {
          if (null != (r = e[n]) && r >= r) for (u = r; ++n < f;) {
            null != (r = e[n]) && r > u && (u = r);
          }
        }
      } else for (; ++n < f;) {
        if (null != (r = l(e[n], n, e)) && r >= r) for (u = r; ++n < f;) {
          null != (r = l(e[n], n, e)) && r > u && (u = r);
        }
      }

      return u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hoEE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u,
          f = r.length,
          l = f,
          n = -1,
          a = 0;
      if (null == t) for (; ++n < f;) {
        isNaN(u = (0, e.default)(r[n])) ? --l : a += u;
      } else for (; ++n < f;) {
        isNaN(u = (0, e.default)(t(r[n], n, r))) ? --l : a += u;
      }
      if (l) return a / l;
    }
  }, {
    "./number": "9fz/"
  }],
  "FMd1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = t(require("./ascending")),
        u = t(require("./number")),
        r = t(require("./quantile"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(t, l) {
      var a,
          n = t.length,
          s = -1,
          f = [];
      if (null == l) for (; ++s < n;) {
        isNaN(a = (0, u.default)(t[s])) || f.push(a);
      } else for (; ++s < n;) {
        isNaN(a = (0, u.default)(l(t[s], s, t))) || f.push(a);
      }
      return (0, r.default)(f.sort(e.default), .5);
    }
  }, {
    "./ascending": "5A6F",
    "./number": "9fz/",
    "./quantile": "9qox"
  }],
  "0SAj": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r, t, n, o = e.length, f = -1, l = 0; ++f < o;) {
        l += e[f].length;
      }

      for (t = new Array(l); --o >= 0;) {
        for (r = (n = e[o]).length; --r >= 0;) {
          t[--l] = n[r];
        }
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "WLfU": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f = e.length,
          n = -1;

      if (null == l) {
        for (; ++n < f;) {
          if (null != (r = e[n]) && r >= r) for (u = r; ++n < f;) {
            null != (r = e[n]) && u > r && (u = r);
          }
        }
      } else for (; ++n < f;) {
        if (null != (r = l(e[n], n, e)) && r >= r) for (u = r; ++n < f;) {
          null != (r = l(e[n], n, e)) && u > r && (u = r);
        }
      }

      return u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "4V5Z": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = r.length, n = new Array(t); t--;) {
        n[t] = e[r[t]];
      }

      return n;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "/c8h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./ascending"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if (u = r.length) {
        var u,
            n,
            l = 0,
            o = 0,
            d = r[o];

        for (null == t && (t = e.default); ++l < u;) {
          (t(n = r[l], d) < 0 || 0 !== t(d, d)) && (d = n, o = l);
        }

        return 0 === t(d, d) ? o : void 0;
      }
    }
  }, {
    "./ascending": "5A6F"
  }],
  "Z0Nc": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      for (var l, n, u = (null == r ? e.length : r) - (t = null == t ? 0 : +t); u;) {
        n = Math.random() * u-- | 0, l = e[u + t], e[u + t] = e[n + t], e[n + t] = l;
      }

      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "O7Vy": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      var t,
          l = e.length,
          o = -1,
          u = 0;
      if (null == r) for (; ++o < l;) {
        (t = +e[o]) && (u += t);
      } else for (; ++o < l;) {
        (t = +r(e[o], o, e)) && (u += t);
      }
      return u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "pk0a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./min"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      if (!(o = r.length)) return [];

      for (var t = -1, u = (0, e.default)(r, n), f = new Array(u); ++t < u;) {
        for (var o, a = -1, i = f[t] = new Array(o); ++a < o;) {
          i[a] = r[a][t];
        }
      }

      return f;
    }

    function n(e) {
      return e.length;
    }
  }, {
    "./min": "WLfU"
  }],
  "oAxq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./transpose"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      return (0, e.default)(arguments);
    }
  }, {
    "./transpose": "pk0a"
  }],
  "cBuZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "bisect", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "bisectRight", {
      enumerable: !0,
      get: function get() {
        return e.bisectRight;
      }
    }), Object.defineProperty(exports, "bisectLeft", {
      enumerable: !0,
      get: function get() {
        return e.bisectLeft;
      }
    }), Object.defineProperty(exports, "ascending", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "bisector", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "cross", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "descending", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "deviation", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "extent", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "histogram", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "thresholdScott", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "thresholdSturges", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "max", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "mean", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "median", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "merge", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "min", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "pairs", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "permute", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "quantile", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "range", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "scan", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "shuffle", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "sum", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "ticks", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "tickIncrement", {
      enumerable: !0,
      get: function get() {
        return h.tickIncrement;
      }
    }), Object.defineProperty(exports, "tickStep", {
      enumerable: !0,
      get: function get() {
        return h.tickStep;
      }
    }), Object.defineProperty(exports, "transpose", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "variance", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "zip", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    });

    var e = S(require("./bisect")),
        r = D(require("./ascending")),
        t = D(require("./bisector")),
        n = D(require("./cross")),
        u = D(require("./descending")),
        i = D(require("./deviation")),
        o = D(require("./extent")),
        f = D(require("./histogram")),
        c = D(require("./threshold/freedmanDiaconis")),
        a = D(require("./threshold/scott")),
        s = D(require("./threshold/sturges")),
        d = D(require("./max")),
        p = D(require("./mean")),
        l = D(require("./median")),
        b = D(require("./merge")),
        m = D(require("./min")),
        g = D(require("./pairs")),
        O = D(require("./permute")),
        y = D(require("./quantile")),
        j = D(require("./range")),
        P = D(require("./scan")),
        x = D(require("./shuffle")),
        q = D(require("./sum")),
        h = S(require("./ticks")),
        v = D(require("./transpose")),
        k = D(require("./variance")),
        _ = D(require("./zip"));

    function D(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function S(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./bisect": "VX/h",
    "./ascending": "5A6F",
    "./bisector": "raOJ",
    "./cross": "9JGh",
    "./descending": "wjXp",
    "./deviation": "JPBu",
    "./extent": "tlMU",
    "./histogram": "eRk3",
    "./threshold/freedmanDiaconis": "a8Ry",
    "./threshold/scott": "VlA4",
    "./threshold/sturges": "Pg/U",
    "./max": "8Rao",
    "./mean": "hoEE",
    "./median": "FMd1",
    "./merge": "0SAj",
    "./min": "WLfU",
    "./pairs": "0aKl",
    "./permute": "4V5Z",
    "./quantile": "9qox",
    "./range": "M4+6",
    "./scan": "/c8h",
    "./shuffle": "Z0Nc",
    "./sum": "O7Vy",
    "./ticks": "nJNY",
    "./transpose": "pk0a",
    "./variance": "IBjk",
    "./zip": "oAxq"
  }],
  "rv5q": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.slice = void 0;
    var e = Array.prototype.slice;
    exports.slice = e;
  }, {}],
  "Qz/6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.axisTop = p, exports.axisRight = h, exports.axisBottom = x, exports.axisLeft = g;

    var t = require("./array"),
        n = r(require("./identity"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var e = 1,
        i = 2,
        a = 3,
        u = 4,
        o = 1e-6;

    function l(t) {
      return "translate(" + (t + .5) + ",0)";
    }

    function c(t) {
      return "translate(0," + (t + .5) + ")";
    }

    function s(t) {
      return function (n) {
        return +t(n);
      };
    }

    function f(t) {
      var n = Math.max(0, t.bandwidth() - 1) / 2;
      return t.round() && (n = Math.round(n)), function (r) {
        return +t(r) + n;
      };
    }

    function d() {
      return !this.__axis;
    }

    function m(r, m) {
      var p = [],
          h = null,
          x = null,
          g = 6,
          k = 6,
          y = 3,
          _ = r === e || r === u ? -1 : 1,
          M = r === u || r === i ? "x" : "y",
          v = r === e || r === a ? l : c;

      function F(t) {
        var l = null == h ? m.ticks ? m.ticks.apply(m, p) : m.domain() : h,
            c = null == x ? m.tickFormat ? m.tickFormat.apply(m, p) : n.default : x,
            F = Math.max(g, 0) + y,
            V = m.range(),
            b = +V[0] + .5,
            z = +V[V.length - 1] + .5,
            A = (m.bandwidth ? f : s)(m.copy()),
            H = t.selection ? t.selection() : t,
            C = H.selectAll(".domain").data([null]),
            S = H.selectAll(".tick").data(l, m).order(),
            q = S.exit(),
            w = S.enter().append("g").attr("class", "tick"),
            O = S.select("line"),
            P = S.select("text");
        C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), S = S.merge(w), O = O.merge(w.append("line").attr("stroke", "currentColor").attr(M + "2", _ * g)), P = P.merge(w.append("text").attr("fill", "currentColor").attr(M, _ * F).attr("dy", r === e ? "0em" : r === a ? "0.71em" : "0.32em")), t !== H && (C = C.transition(t), S = S.transition(t), O = O.transition(t), P = P.transition(t), q = q.transition(t).attr("opacity", o).attr("transform", function (t) {
          return isFinite(t = A(t)) ? v(t) : this.getAttribute("transform");
        }), w.attr("opacity", o).attr("transform", function (t) {
          var n = this.parentNode.__axis;
          return v(n && isFinite(n = n(t)) ? n : A(t));
        })), q.remove(), C.attr("d", r === u || r == i ? k ? "M" + _ * k + "," + b + "H0.5V" + z + "H" + _ * k : "M0.5," + b + "V" + z : k ? "M" + b + "," + _ * k + "V0.5H" + z + "V" + _ * k : "M" + b + ",0.5H" + z), S.attr("opacity", 1).attr("transform", function (t) {
          return v(A(t));
        }), O.attr(M + "2", _ * g), P.attr(M, _ * F).text(c), H.filter(d).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", r === i ? "start" : r === u ? "end" : "middle"), H.each(function () {
          this.__axis = A;
        });
      }

      return F.scale = function (t) {
        return arguments.length ? (m = t, F) : m;
      }, F.ticks = function () {
        return p = t.slice.call(arguments), F;
      }, F.tickArguments = function (n) {
        return arguments.length ? (p = null == n ? [] : t.slice.call(n), F) : p.slice();
      }, F.tickValues = function (n) {
        return arguments.length ? (h = null == n ? null : t.slice.call(n), F) : h && h.slice();
      }, F.tickFormat = function (t) {
        return arguments.length ? (x = t, F) : x;
      }, F.tickSize = function (t) {
        return arguments.length ? (g = k = +t, F) : g;
      }, F.tickSizeInner = function (t) {
        return arguments.length ? (g = +t, F) : g;
      }, F.tickSizeOuter = function (t) {
        return arguments.length ? (k = +t, F) : k;
      }, F.tickPadding = function (t) {
        return arguments.length ? (y = +t, F) : y;
      }, F;
    }

    function p(t) {
      return m(e, t);
    }

    function h(t) {
      return m(i, t);
    }

    function x(t) {
      return m(a, t);
    }

    function g(t) {
      return m(u, t);
    }
  }, {
    "./array": "rv5q",
    "./identity": "nPOL"
  }],
  "y9Kr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "axisTop", {
      enumerable: !0,
      get: function get() {
        return e.axisTop;
      }
    }), Object.defineProperty(exports, "axisRight", {
      enumerable: !0,
      get: function get() {
        return e.axisRight;
      }
    }), Object.defineProperty(exports, "axisBottom", {
      enumerable: !0,
      get: function get() {
        return e.axisBottom;
      }
    }), Object.defineProperty(exports, "axisLeft", {
      enumerable: !0,
      get: function get() {
        return e.axisLeft;
      }
    });

    var e = require("./axis");
  }, {
    "./axis": "Qz/6"
  }],
  "C/lH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var n = {
      value: function value() {}
    };

    function r() {
      for (var n, r = 0, t = arguments.length, o = {}; r < t; ++r) {
        if (!(n = arguments[r] + "") || n in o) throw new Error("illegal type: " + n);
        o[n] = [];
      }

      return new e(o);
    }

    function e(n) {
      this._ = n;
    }

    function t(n, r) {
      return n.trim().split(/^|\s+/).map(function (n) {
        var e = "",
            t = n.indexOf(".");
        if (t >= 0 && (e = n.slice(t + 1), n = n.slice(0, t)), n && !r.hasOwnProperty(n)) throw new Error("unknown type: " + n);
        return {
          type: n,
          name: e
        };
      });
    }

    function o(n, r) {
      for (var e, t = 0, o = n.length; t < o; ++t) {
        if ((e = n[t]).name === r) return e.value;
      }
    }

    function i(r, e, t) {
      for (var o = 0, i = r.length; o < i; ++o) {
        if (r[o].name === e) {
          r[o] = n, r = r.slice(0, o).concat(r.slice(o + 1));
          break;
        }
      }

      return null != t && r.push({
        name: e,
        value: t
      }), r;
    }

    e.prototype = r.prototype = {
      constructor: e,
      on: function on(n, r) {
        var e,
            l = this._,
            a = t(n + "", l),
            f = -1,
            u = a.length;

        if (!(arguments.length < 2)) {
          if (null != r && "function" != typeof r) throw new Error("invalid callback: " + r);

          for (; ++f < u;) {
            if (e = (n = a[f]).type) l[e] = i(l[e], n.name, r);else if (null == r) for (e in l) {
              l[e] = i(l[e], n.name, null);
            }
          }

          return this;
        }

        for (; ++f < u;) {
          if ((e = (n = a[f]).type) && (e = o(l[e], n.name))) return e;
        }
      },
      copy: function copy() {
        var n = {},
            r = this._;

        for (var t in r) {
          n[t] = r[t].slice();
        }

        return new e(n);
      },
      call: function call(n, r) {
        if ((e = arguments.length - 2) > 0) for (var e, t, o = new Array(e), i = 0; i < e; ++i) {
          o[i] = arguments[i + 2];
        }
        if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);

        for (i = 0, e = (t = this._[n]).length; i < e; ++i) {
          t[i].value.apply(r, o);
        }
      },
      apply: function apply(n, r, e) {
        if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);

        for (var t = this._[n], o = 0, i = t.length; o < i; ++o) {
          t[o].value.apply(r, e);
        }
      }
    };
    var l = r;
    exports.default = l;
  }, {}],
  "UU/c": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "dispatch", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./dispatch"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./dispatch": "C/lH"
  }],
  "UzOB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.xhtml = void 0;
    var t = "http://www.w3.org/1999/xhtml";
    exports.xhtml = t;
    var w = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: t,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
    exports.default = w;
  }, {}],
  "OLJ5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./namespaces"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r += "",
          s = t.indexOf(":");
      return s >= 0 && "xmlns" !== (t = r.slice(0, s)) && (r = r.slice(s + 1)), e.default.hasOwnProperty(t) ? {
        space: e.default[t],
        local: r
      } : r;
    }
  }, {
    "./namespaces": "UzOB"
  }],
  "EIjt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = n(require("./namespace")),
        t = require("./namespaces");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return function () {
        var n = this.ownerDocument,
            r = this.namespaceURI;
        return r === t.xhtml && n.documentElement.namespaceURI === t.xhtml ? n.createElement(e) : n.createElementNS(r, e);
      };
    }

    function u(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local);
      };
    }

    function a(t) {
      var n = (0, e.default)(t);
      return (n.local ? u : r)(n);
    }
  }, {
    "./namespace": "OLJ5",
    "./namespaces": "UzOB"
  }],
  "xs2I": [function (require, module, exports) {
    "use strict";

    function e() {}

    function t(t) {
      return null == t ? e : function () {
        return this.querySelector(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "LRy5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var e = require("./index"),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function _(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var _ = this._groups, a = _.length, n = new Array(a), u = 0; u < a; ++u) {
        for (var o, i, l = _[u], d = l.length, s = n[u] = new Array(d), f = 0; f < d; ++f) {
          (o = l[f]) && (i = r.call(o, o.__data__, f, l)) && ("__data__" in o && (i.__data__ = o.__data__), s[f] = i);
        }
      }

      return new e.Selection(n, this._parents);
    }
  }, {
    "./index": "jpDG",
    "../selector": "xs2I"
  }],
  "+mHY": [function (require, module, exports) {
    "use strict";

    function e() {
      return [];
    }

    function t(t) {
      return null == t ? e : function () {
        return this.querySelectorAll(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "ijGs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("./index"),
        t = r(require("../selectorAll"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var u = this._groups, l = u.length, n = [], o = [], s = 0; s < l; ++s) {
        for (var a, f = u[s], i = f.length, _ = 0; _ < i; ++_) {
          (a = f[_]) && (n.push(r.call(a, a.__data__, _, f)), o.push(a));
        }
      }

      return new e.Selection(n, o);
    }
  }, {
    "./index": "jpDG",
    "../selectorAll": "+mHY"
  }],
  "4PkZ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        return this.matches(e);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hrVj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var e = require("./index"),
        r = t(require("../matcher"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t) {
      "function" != typeof t && (t = (0, r.default)(t));

      for (var n = this._groups, u = n.length, a = new Array(u), o = 0; o < u; ++o) {
        for (var i, l = n[o], s = l.length, f = a[o] = [], _ = 0; _ < s; ++_) {
          (i = l[_]) && t.call(i, i.__data__, _, l) && f.push(i);
        }
      }

      return new e.Selection(a, this._parents);
    }
  }, {
    "./index": "jpDG",
    "../matcher": "4PkZ"
  }],
  "NmjR": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return new Array(e.length);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "wXei": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.EnterNode = o;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      return new t.Selection(this._enter || this._groups.map(e.default), this._parents);
    }

    function o(e, t) {
      this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
    }

    o.prototype = {
      constructor: o,
      appendChild: function appendChild(e) {
        return this._parent.insertBefore(e, this._next);
      },
      insertBefore: function insertBefore(e, t) {
        return this._parent.insertBefore(e, t);
      },
      querySelector: function querySelector(e) {
        return this._parent.querySelector(e);
      },
      querySelectorAll: function querySelectorAll(e) {
        return this._parent.querySelectorAll(e);
      }
    };
  }, {
    "./sparse": "NmjR",
    "./index": "jpDG"
  }],
  "8QmP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./index"),
        r = require("./enter"),
        n = t(require("../constant"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = "$";

    function o(e, n, t, a, o, _) {
      for (var l, i = 0, u = n.length, f = _.length; i < f; ++i) {
        (l = n[i]) ? (l.__data__ = _[i], a[i] = l) : t[i] = new r.EnterNode(e, _[i]);
      }

      for (; i < u; ++i) {
        (l = n[i]) && (o[i] = l);
      }
    }

    function _(e, n, t, o, _, l, i) {
      var u,
          f,
          c,
          s = {},
          d = n.length,
          h = l.length,
          w = new Array(d);

      for (u = 0; u < d; ++u) {
        (f = n[u]) && (w[u] = c = a + i.call(f, f.__data__, u, n), c in s ? _[u] = f : s[c] = f);
      }

      for (u = 0; u < h; ++u) {
        (f = s[c = a + i.call(e, l[u], u, l)]) ? (o[u] = f, f.__data__ = l[u], s[c] = null) : t[u] = new r.EnterNode(e, l[u]);
      }

      for (u = 0; u < d; ++u) {
        (f = n[u]) && s[w[u]] === f && (_[u] = f);
      }
    }

    function l(r, t) {
      if (!r) return v = new Array(this.size()), d = -1, this.each(function (e) {
        v[++d] = e;
      }), v;
      var a = t ? _ : o,
          l = this._parents,
          i = this._groups;
      "function" != typeof r && (r = (0, n.default)(r));

      for (var u = i.length, f = new Array(u), c = new Array(u), s = new Array(u), d = 0; d < u; ++d) {
        var h = l[d],
            w = i[d],
            y = w.length,
            v = r.call(h, h && h.__data__, d, l),
            g = v.length,
            A = c[d] = new Array(g),
            p = f[d] = new Array(g);
        a(h, w, A, p, s[d] = new Array(y), v, t);

        for (var x, q, E = 0, M = 0; E < g; ++E) {
          if (x = A[E]) {
            for (E >= M && (M = E + 1); !(q = p[M]) && ++M < g;) {
              ;
            }

            x._next = q || null;
          }
        }
      }

      return (f = new e.Selection(f, l))._enter = c, f._exit = s, f;
    }
  }, {
    "./index": "jpDG",
    "./enter": "wXei",
    "../constant": "5O/Y"
  }],
  "tchs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return new t.Selection(this._exit || this._groups.map(e.default), this._parents);
    }
  }, {
    "./sparse": "NmjR",
    "./index": "jpDG"
  }],
  "oO6z": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      var n = this.enter(),
          o = this,
          u = this.exit();
      return n = "function" == typeof e ? e(n) : n.append(e + ""), null != t && (o = t(o)), null == r ? u.remove() : r(u), n && o ? n.merge(o).order() : o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "1i+5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./index");

    function r(r) {
      for (var t = this._groups, n = r._groups, o = t.length, s = n.length, a = Math.min(o, s), i = new Array(o), u = 0; u < a; ++u) {
        for (var l, f = t[u], h = n[u], p = f.length, g = i[u] = new Array(p), _ = 0; _ < p; ++_) {
          (l = f[_] || h[_]) && (g[_] = l);
        }
      }

      for (; u < o; ++u) {
        i[u] = t[u];
      }

      return new e.Selection(i, this._parents);
    }
  }, {
    "./index": "jpDG"
  }],
  "RepQ": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this._groups, t = -1, r = e.length; ++t < r;) {
        for (var o, n = e[t], s = n.length - 1, i = n[s]; --s >= 0;) {
          (o = n[s]) && (i && 4 ^ o.compareDocumentPosition(i) && i.parentNode.insertBefore(o, i), i = o);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "D8yW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var r = require("./index");

    function e(e) {
      function n(r, t) {
        return r && t ? e(r.__data__, t.__data__) : !r - !t;
      }

      e || (e = t);

      for (var a = this._groups, o = a.length, u = new Array(o), _ = 0; _ < o; ++_) {
        for (var i, s = a[_], d = s.length, f = u[_] = new Array(d), c = 0; c < d; ++c) {
          (i = s[c]) && (f[c] = i);
        }

        f.sort(n);
      }

      return new r.Selection(u, this._parents).order();
    }

    function t(r, e) {
      return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
    }
  }, {
    "./index": "jpDG"
  }],
  "+pbQ": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = arguments[0];
      return arguments[0] = this, e.apply(null, arguments), this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "kO0T": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = new Array(this.size()),
          t = -1;
      return this.each(function () {
        e[++t] = this;
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "84xF": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this._groups, r = 0, t = e.length; r < t; ++r) {
        for (var u = e[r], n = 0, o = u.length; n < o; ++n) {
          var l = u[n];
          if (l) return l;
        }
      }

      return null;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "w9fp": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = 0;
      return this.each(function () {
        ++e;
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "UF+O": [function (require, module, exports) {
    "use strict";

    function e() {
      return !this.node();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "q4XW": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t = this._groups, r = 0, o = t.length; r < o; ++r) {
        for (var s, a = t[r], l = 0, u = a.length; l < u; ++l) {
          (s = a[l]) && e.call(s, s.__data__, l, a);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Tdf9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var t = e(require("../namespace"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      return function () {
        this.removeAttribute(t);
      };
    }

    function u(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function r(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }

    function i(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }

    function o(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }

    function c(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
      };
    }

    function l(e, l) {
      var a = (0, t.default)(e);

      if (arguments.length < 2) {
        var s = this.node();
        return a.local ? s.getAttributeNS(a.space, a.local) : s.getAttribute(a);
      }

      return this.each((null == l ? a.local ? u : n : "function" == typeof l ? a.local ? c : o : a.local ? i : r)(a, l));
    }
  }, {
    "../namespace": "OLJ5"
  }],
  "D1dR": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "3VXj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o, exports.styleValue = l;
    var e = t(require("../window"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return function () {
        this.style.removeProperty(e);
      };
    }

    function n(e, t, r) {
      return function () {
        this.style.setProperty(e, t, r);
      };
    }

    function u(e, t, r) {
      return function () {
        var n = t.apply(this, arguments);
        null == n ? this.style.removeProperty(e) : this.style.setProperty(e, n, r);
      };
    }

    function o(e, t, o) {
      return arguments.length > 1 ? this.each((null == t ? r : "function" == typeof t ? u : n)(e, t, null == o ? "" : o)) : l(this.node(), e);
    }

    function l(t, r) {
      return t.style.getPropertyValue(r) || (0, e.default)(t).getComputedStyle(t, null).getPropertyValue(r);
    }
  }, {
    "../window": "D1dR"
  }],
  "Q/OW": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return function () {
        delete this[t];
      };
    }

    function e(t, e) {
      return function () {
        this[t] = e;
      };
    }

    function n(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : this[t] = n;
      };
    }

    function u(u, i) {
      return arguments.length > 1 ? this.each((null == i ? t : "function" == typeof i ? n : e)(u, i)) : this.node()[u];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
  }, {}],
  "+rtN": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t.trim().split(/^|\s+/);
    }

    function n(t) {
      return t.classList || new e(t);
    }

    function e(n) {
      this._node = n, this._names = t(n.getAttribute("class") || "");
    }

    function i(t, e) {
      for (var i = n(t), s = -1, r = e.length; ++s < r;) {
        i.add(e[s]);
      }
    }

    function s(t, e) {
      for (var i = n(t), s = -1, r = e.length; ++s < r;) {
        i.remove(e[s]);
      }
    }

    function r(t) {
      return function () {
        i(this, t);
      };
    }

    function o(t) {
      return function () {
        s(this, t);
      };
    }

    function u(t, n) {
      return function () {
        (n.apply(this, arguments) ? i : s)(this, t);
      };
    }

    function f(e, i) {
      var s = t(e + "");

      if (arguments.length < 2) {
        for (var f = n(this.node()), c = -1, a = s.length; ++c < a;) {
          if (!f.contains(s[c])) return !1;
        }

        return !0;
      }

      return this.each(("function" == typeof i ? u : i ? r : o)(s, i));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f, e.prototype = {
      add: function add(t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function remove(t) {
        var n = this._names.indexOf(t);

        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function contains(t) {
        return this._names.indexOf(t) >= 0;
      }
    };
  }, {}],
  "hAJ3": [function (require, module, exports) {
    "use strict";

    function t() {
      this.textContent = "";
    }

    function n(t) {
      return function () {
        this.textContent = t;
      };
    }

    function e(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? "" : n;
      };
    }

    function o(o) {
      return arguments.length ? this.each(null == o ? t : ("function" == typeof o ? e : n)(o)) : this.node().textContent;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
  }, {}],
  "FiSM": [function (require, module, exports) {
    "use strict";

    function n() {
      this.innerHTML = "";
    }

    function t(n) {
      return function () {
        this.innerHTML = n;
      };
    }

    function e(n) {
      return function () {
        var t = n.apply(this, arguments);
        this.innerHTML = null == t ? "" : t;
      };
    }

    function i(i) {
      return arguments.length ? this.each(null == i ? n : ("function" == typeof i ? e : t)(i)) : this.node().innerHTML;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
  }, {}],
  "gvi7": [function (require, module, exports) {
    "use strict";

    function e() {
      this.nextSibling && this.parentNode.appendChild(this);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "gv/5": [function (require, module, exports) {
    "use strict";

    function e() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "efv1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../creator"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      var r = "function" == typeof t ? t : (0, e.default)(t);
      return this.select(function () {
        return this.appendChild(r.apply(this, arguments));
      });
    }
  }, {
    "../creator": "EIjt"
  }],
  "6ILQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = r(require("../creator")),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return null;
    }

    function n(r, n) {
      var l = "function" == typeof r ? r : (0, e.default)(r),
          o = null == n ? u : "function" == typeof n ? n : (0, t.default)(n);
      return this.select(function () {
        return this.insertBefore(l.apply(this, arguments), o.apply(this, arguments) || null);
      });
    }
  }, {
    "../creator": "EIjt",
    "../selector": "xs2I"
  }],
  "quBB": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = this.parentNode;
      e && e.removeChild(this);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "UpcG": [function (require, module, exports) {
    "use strict";

    function e() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }

    function t() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }

    function n(n) {
      return this.select(n ? t : e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "fuQ8": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return arguments.length ? this.property("__data__", e) : this.node().__data__;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "j4rF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.customEvent = p, exports.event = void 0;
    var e = {},
        t = null;

    if (exports.event = t, "undefined" != typeof document) {
      var n = document.documentElement;
      "onmouseenter" in n || (e = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      });
    }

    function r(e, t, n) {
      return e = i(e, t, n), function (t) {
        var n = t.relatedTarget;
        n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t);
      };
    }

    function i(e, n, r) {
      return function (i) {
        var o = t;
        exports.event = t = i;

        try {
          e.call(this, this.__data__, n, r);
        } finally {
          exports.event = t = o;
        }
      };
    }

    function o(e) {
      return e.trim().split(/^|\s+/).map(function (e) {
        var t = "",
            n = e.indexOf(".");
        return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
          type: e,
          name: t
        };
      });
    }

    function s(e) {
      return function () {
        var t = this.__on;

        if (t) {
          for (var n, r = 0, i = -1, o = t.length; r < o; ++r) {
            n = t[r], e.type && n.type !== e.type || n.name !== e.name ? t[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
          }

          ++i ? t.length = i : delete this.__on;
        }
      };
    }

    function u(t, n, o) {
      var s = e.hasOwnProperty(t.type) ? r : i;
      return function (e, r, i) {
        var u,
            a = this.__on,
            p = s(n, r, i);
        if (a) for (var l = 0, v = a.length; l < v; ++l) {
          if ((u = a[l]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = p, u.capture = o), void (u.value = n);
        }
        this.addEventListener(t.type, p, o), u = {
          type: t.type,
          name: t.name,
          value: n,
          listener: p,
          capture: o
        }, a ? a.push(u) : this.__on = [u];
      };
    }

    function a(e, t, n) {
      var r,
          i,
          a = o(e + ""),
          p = a.length;

      if (!(arguments.length < 2)) {
        for (l = t ? u : s, null == n && (n = !1), r = 0; r < p; ++r) {
          this.each(l(a[r], t, n));
        }

        return this;
      }

      var l = this.node().__on;

      if (l) for (var v, f = 0, c = l.length; f < c; ++f) {
        for (r = 0, v = l[f]; r < p; ++r) {
          if ((i = a[r]).type === v.type && i.name === v.name) return v.value;
        }
      }
    }

    function p(e, n, r, i) {
      var o = t;
      e.sourceEvent = t, exports.event = t = e;

      try {
        return n.apply(r, i);
      } finally {
        exports.event = t = o;
      }
    }
  }, {}],
  "enVu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var t = e(require("../window"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(e, n, u) {
      var i = (0, t.default)(e),
          r = i.CustomEvent;
      "function" == typeof r ? r = new r(n, u) : (r = i.document.createEvent("Event"), u ? (r.initEvent(n, u.bubbles, u.cancelable), r.detail = u.detail) : r.initEvent(n, !1, !1)), e.dispatchEvent(r);
    }

    function u(t, e) {
      return function () {
        return n(this, t, e);
      };
    }

    function i(t, e) {
      return function () {
        return n(this, t, e.apply(this, arguments));
      };
    }

    function r(t, e) {
      return this.each(("function" == typeof e ? i : u)(t, e));
    }
  }, {
    "../window": "D1dR"
  }],
  "jpDG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Selection = B, exports.default = exports.root = void 0;

    var e = S(require("./select")),
        r = S(require("./selectAll")),
        t = S(require("./filter")),
        u = S(require("./data")),
        l = S(require("./enter")),
        a = S(require("./exit")),
        d = S(require("./join")),
        i = S(require("./merge")),
        o = S(require("./order")),
        f = S(require("./sort")),
        s = S(require("./call")),
        n = S(require("./nodes")),
        q = S(require("./node")),
        p = S(require("./size")),
        c = S(require("./empty")),
        m = S(require("./each")),
        x = S(require("./attr")),
        y = S(require("./style")),
        h = S(require("./property")),
        v = S(require("./classed")),
        _ = S(require("./text")),
        g = S(require("./html")),
        j = S(require("./raise")),
        w = S(require("./lower")),
        z = S(require("./append")),
        A = S(require("./insert")),
        M = S(require("./remove")),
        b = S(require("./clone")),
        E = S(require("./datum")),
        O = S(require("./on")),
        P = S(require("./dispatch"));

    function S(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var k = [null];

    function B(e, r) {
      this._groups = e, this._parents = r;
    }

    function C() {
      return new B([[document.documentElement]], k);
    }

    exports.root = k, B.prototype = C.prototype = {
      constructor: B,
      select: e.default,
      selectAll: r.default,
      filter: t.default,
      data: u.default,
      enter: l.default,
      exit: a.default,
      join: d.default,
      merge: i.default,
      order: o.default,
      sort: f.default,
      call: s.default,
      nodes: n.default,
      node: q.default,
      size: p.default,
      empty: c.default,
      each: m.default,
      attr: x.default,
      style: y.default,
      property: h.default,
      classed: v.default,
      text: _.default,
      html: g.default,
      raise: j.default,
      lower: w.default,
      append: z.default,
      insert: A.default,
      remove: M.default,
      clone: b.default,
      datum: E.default,
      on: O.default,
      dispatch: P.default
    };
    var D = C;
    exports.default = D;
  }, {
    "./select": "LRy5",
    "./selectAll": "ijGs",
    "./filter": "hrVj",
    "./data": "8QmP",
    "./enter": "wXei",
    "./exit": "tchs",
    "./join": "oO6z",
    "./merge": "1i+5",
    "./order": "RepQ",
    "./sort": "D8yW",
    "./call": "+pbQ",
    "./nodes": "kO0T",
    "./node": "84xF",
    "./size": "w9fp",
    "./empty": "UF+O",
    "./each": "q4XW",
    "./attr": "Tdf9",
    "./style": "3VXj",
    "./property": "Q/OW",
    "./classed": "+rtN",
    "./text": "hAJ3",
    "./html": "FiSM",
    "./raise": "gvi7",
    "./lower": "gv/5",
    "./append": "efv1",
    "./insert": "6ILQ",
    "./remove": "quBB",
    "./clone": "UpcG",
    "./datum": "fuQ8",
    "./on": "j4rF",
    "./dispatch": "enVu"
  }],
  "i/TO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([[document.querySelector(t)]], [document.documentElement]) : new e.Selection([[t]], e.root);
    }
  }, {
    "./selection/index": "jpDG"
  }],
  "tmZ+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = r(require("./creator")),
        t = r(require("./select"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      return (0, t.default)((0, e.default)(r).call(document.documentElement));
    }
  }, {
    "./creator": "EIjt",
    "./select": "i/TO"
  }],
  "JuPP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = 0;

    function e() {
      return new r();
    }

    function r() {
      this._ = "@" + (++t).toString(36);
    }

    r.prototype = e.prototype = {
      constructor: r,
      get: function get(t) {
        for (var e = this._; !(e in t);) {
          if (!(t = t.parentNode)) return;
        }

        return t[e];
      },
      set: function set(t, e) {
        return t[this._] = e;
      },
      remove: function remove(t) {
        return this._ in t && delete t[this._];
      },
      toString: function toString() {
        return this._;
      }
    };
  }, {}],
  "mu9P": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./selection/on");

    function r() {
      for (var r, t = e.event; r = t.sourceEvent;) {
        t = r;
      }

      return t;
    }
  }, {
    "./selection/on": "j4rF"
  }],
  "9ZIl": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var n = e.ownerSVGElement || e;

      if (n.createSVGPoint) {
        var r = n.createSVGPoint();
        return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y];
      }

      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "lbxf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./sourceEvent")),
        u = r(require("./point"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = (0, e.default)();
      return t.changedTouches && (t = t.changedTouches[0]), (0, u.default)(r, t);
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "9ZIl"
  }],
  "7/to": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([document.querySelectorAll(t)], [document.documentElement]) : new e.Selection([null == t ? [] : t], e.root);
    }
  }, {
    "./selection/index": "jpDG"
  }],
  "3Mh7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u, n) {
      arguments.length < 3 && (n = u, u = (0, e.default)().changedTouches);

      for (var i, l = 0, o = u ? u.length : 0; l < o; ++l) {
        if ((i = u[l]).identifier === n) return (0, r.default)(t, i);
      }

      return null;
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "9ZIl"
  }],
  "RG1U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      null == u && (u = (0, e.default)().touches);

      for (var n = 0, o = u ? u.length : 0, l = new Array(o); n < o; ++n) {
        l[n] = (0, r.default)(t, u[n]);
      }

      return l;
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "9ZIl"
  }],
  "lm1C": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "create", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "creator", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "local", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "matcher", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "mouse", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "namespace", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "namespaces", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "clientPoint", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "select", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "selectAll", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "selection", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "selector", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "selectorAll", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "style", {
      enumerable: !0,
      get: function get() {
        return d.styleValue;
      }
    }), Object.defineProperty(exports, "touch", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "touches", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "window", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "event", {
      enumerable: !0,
      get: function get() {
        return x.event;
      }
    }), Object.defineProperty(exports, "customEvent", {
      enumerable: !0,
      get: function get() {
        return x.customEvent;
      }
    });

    var e = P(require("./create")),
        t = P(require("./creator")),
        r = P(require("./local")),
        n = P(require("./matcher")),
        u = P(require("./mouse")),
        o = P(require("./namespace")),
        c = P(require("./namespaces")),
        i = P(require("./point")),
        l = P(require("./select")),
        f = P(require("./selectAll")),
        a = P(require("./selection/index")),
        s = P(require("./selector")),
        p = P(require("./selectorAll")),
        d = require("./selection/style"),
        b = P(require("./touch")),
        m = P(require("./touches")),
        y = P(require("./window")),
        x = require("./selection/on");

    function P(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./create": "tmZ+",
    "./creator": "EIjt",
    "./local": "JuPP",
    "./matcher": "4PkZ",
    "./mouse": "lbxf",
    "./namespace": "OLJ5",
    "./namespaces": "UzOB",
    "./point": "9ZIl",
    "./select": "i/TO",
    "./selectAll": "7/to",
    "./selection/index": "jpDG",
    "./selector": "xs2I",
    "./selectorAll": "+mHY",
    "./selection/style": "3VXj",
    "./touch": "3Mh7",
    "./touches": "RG1U",
    "./window": "D1dR",
    "./selection/on": "j4rF"
  }],
  "DCEg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.nopropagation = t, exports.default = o;

    var e = require("d3-selection");

    function t() {
      e.event.stopImmediatePropagation();
    }

    function o() {
      e.event.preventDefault(), e.event.stopImmediatePropagation();
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "6rD9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l, exports.yesdrag = r;

    var e = require("d3-selection"),
        t = n(require("./noevent"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(n) {
      var l = n.document.documentElement,
          r = (0, e.select)(n).on("dragstart.drag", t.default, !0);
      "onselectstart" in l ? r.on("selectstart.drag", t.default, !0) : (l.__noselect = l.style.MozUserSelect, l.style.MozUserSelect = "none");
    }

    function r(n, l) {
      var r = n.document.documentElement,
          o = (0, e.select)(n).on("dragstart.drag", null);
      l && (o.on("click.drag", t.default, !0), setTimeout(function () {
        o.on("click.drag", null);
      }, 0)), "onselectstart" in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect);
    }
  }, {
    "d3-selection": "lm1C",
    "./noevent": "DCEg"
  }],
  "IkUE": [function (require, module, exports) {
    "use strict";

    function t(t, i, s, e, h, r, o, n, p, u) {
      this.target = t, this.type = i, this.subject = s, this.identifier = e, this.active = h, this.x = r, this.y = o, this.dx = n, this.dy = p, this._ = u;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, t.prototype.on = function () {
      var t = this._.on.apply(this._, arguments);

      return t === this._ ? this : t;
    };
  }, {}],
  "68fG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d;

    var e = require("d3-dispatch"),
        t = require("d3-selection"),
        n = a(require("./nodrag")),
        r = a(require("./noevent")),
        o = i(require("./constant")),
        u = i(require("./event"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
          r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n];
        }
      }
      return t.default = e, t;
    }

    function c() {
      return !t.event.button;
    }

    function f() {
      return this.parentNode;
    }

    function l(e) {
      return null == e ? {
        x: t.event.x,
        y: t.event.y
      } : e;
    }

    function s() {
      return "ontouchstart" in this;
    }

    function d() {
      var i,
          a,
          d,
          p,
          v = c,
          h = f,
          g = l,
          y = s,
          m = {},
          b = (0, e.dispatch)("start", "drag", "end"),
          w = 0,
          O = 0;

      function j(e) {
        e.on("mousedown.drag", q).filter(y).on("touchstart.drag", x).on("touchmove.drag", T).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }

      function q() {
        if (!p && v.apply(this, arguments)) {
          var e = k("mouse", h.apply(this, arguments), t.mouse, this, arguments);
          e && ((0, t.select)(t.event.view).on("mousemove.drag", P, !0).on("mouseup.drag", _, !0), (0, n.default)(t.event.view), (0, r.nopropagation)(), d = !1, i = t.event.clientX, a = t.event.clientY, e("start"));
        }
      }

      function P() {
        if ((0, r.default)(), !d) {
          var e = t.event.clientX - i,
              n = t.event.clientY - a;
          d = e * e + n * n > O;
        }

        m.mouse("drag");
      }

      function _() {
        (0, t.select)(t.event.view).on("mousemove.drag mouseup.drag", null), (0, n.yesdrag)(t.event.view, d), (0, r.default)(), m.mouse("end");
      }

      function x() {
        if (v.apply(this, arguments)) {
          var e,
              n,
              o = t.event.changedTouches,
              u = h.apply(this, arguments),
              i = o.length;

          for (e = 0; e < i; ++e) {
            (n = k(o[e].identifier, u, t.touch, this, arguments)) && ((0, r.nopropagation)(), n("start"));
          }
        }
      }

      function T() {
        var e,
            n,
            o = t.event.changedTouches,
            u = o.length;

        for (e = 0; e < u; ++e) {
          (n = m[o[e].identifier]) && ((0, r.default)(), n("drag"));
        }
      }

      function M() {
        var e,
            n,
            o = t.event.changedTouches,
            u = o.length;

        for (p && clearTimeout(p), p = setTimeout(function () {
          p = null;
        }, 500), e = 0; e < u; ++e) {
          (n = m[o[e].identifier]) && ((0, r.nopropagation)(), n("end"));
        }
      }

      function k(e, n, r, o, i) {
        var a,
            c,
            f,
            l = r(n, e),
            s = b.copy();
        if ((0, t.customEvent)(new u.default(j, "beforestart", a, e, w, l[0], l[1], 0, 0, s), function () {
          return null != (t.event.subject = a = g.apply(o, i)) && (c = a.x - l[0] || 0, f = a.y - l[1] || 0, !0);
        })) return function d(p) {
          var v,
              h = l;

          switch (p) {
            case "start":
              m[e] = d, v = w++;
              break;

            case "end":
              delete m[e], --w;

            case "drag":
              l = r(n, e), v = w;
          }

          (0, t.customEvent)(new u.default(j, p, a, e, v, l[0] + c, l[1] + f, l[0] - h[0], l[1] - h[1], s), s.apply, s, [p, o, i]);
        };
      }

      return j.filter = function (e) {
        return arguments.length ? (v = "function" == typeof e ? e : (0, o.default)(!!e), j) : v;
      }, j.container = function (e) {
        return arguments.length ? (h = "function" == typeof e ? e : (0, o.default)(e), j) : h;
      }, j.subject = function (e) {
        return arguments.length ? (g = "function" == typeof e ? e : (0, o.default)(e), j) : g;
      }, j.touchable = function (e) {
        return arguments.length ? (y = "function" == typeof e ? e : (0, o.default)(!!e), j) : y;
      }, j.on = function () {
        var e = b.on.apply(b, arguments);
        return e === b ? j : e;
      }, j.clickDistance = function (e) {
        return arguments.length ? (O = (e = +e) * e, j) : Math.sqrt(O);
      }, j;
    }
  }, {
    "d3-dispatch": "UU/c",
    "d3-selection": "lm1C",
    "./nodrag": "6rD9",
    "./noevent": "DCEg",
    "./constant": "5O/Y",
    "./event": "IkUE"
  }],
  "LrBi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "drag", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "dragDisable", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "dragEnable", {
      enumerable: !0,
      get: function get() {
        return r.yesdrag;
      }
    });
    var e = n(require("./drag")),
        r = t(require("./nodrag"));

    function t(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./drag": "68fG",
    "./nodrag": "6rD9"
  }],
  "CSb3": [function (require, module, exports) {
    "use strict";

    function t(t, e, r) {
      t.prototype = e.prototype = r, r.constructor = t;
    }

    function e(t, e) {
      var r = Object.create(t.prototype);

      for (var o in e) {
        r[o] = e[o];
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.extend = e;
  }, {}],
  "UAf0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Color = r, exports.default = f, exports.rgbConvert = k, exports.rgb = x, exports.Rgb = v, exports.hslConvert = q, exports.hsl = O, exports.brighter = exports.darker = void 0;
    var e = t(require("./define"));

    function t(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    function r() {}

    var n = .7;
    exports.darker = n;
    var i = 1 / n;
    exports.brighter = i;
    var a = "\\s*([+-]?\\d+)\\s*",
        o = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        l = /^#([0-9a-f]{3})$/,
        h = /^#([0-9a-f]{6})$/,
        u = new RegExp("^rgb\\(" + [a, a, a] + "\\)$"),
        g = new RegExp("^rgb\\(" + [s, s, s] + "\\)$"),
        d = new RegExp("^rgba\\(" + [a, a, a, o] + "\\)$"),
        c = new RegExp("^rgba\\(" + [s, s, s, o] + "\\)$"),
        p = new RegExp("^hsl\\(" + [o, s, s] + "\\)$"),
        b = new RegExp("^hsla\\(" + [o, s, s, o] + "\\)$"),
        y = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };

    function f(e) {
      var t;
      return e = (e + "").trim().toLowerCase(), (t = l.exec(e)) ? new v((t = parseInt(t[1], 16)) >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : (t = h.exec(e)) ? w(parseInt(t[1], 16)) : (t = u.exec(e)) ? new v(t[1], t[2], t[3], 1) : (t = g.exec(e)) ? new v(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = d.exec(e)) ? m(t[1], t[2], t[3], t[4]) : (t = c.exec(e)) ? m(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = p.exec(e)) ? M(t[1], t[2] / 100, t[3] / 100, 1) : (t = b.exec(e)) ? M(t[1], t[2] / 100, t[3] / 100, t[4]) : y.hasOwnProperty(e) ? w(y[e]) : "transparent" === e ? new v(NaN, NaN, NaN, 0) : null;
    }

    function w(e) {
      return new v(e >> 16 & 255, e >> 8 & 255, 255 & e, 1);
    }

    function m(e, t, r, n) {
      return n <= 0 && (e = t = r = NaN), new v(e, t, r, n);
    }

    function k(e) {
      return e instanceof r || (e = f(e)), e ? new v((e = e.rgb()).r, e.g, e.b, e.opacity) : new v();
    }

    function x(e, t, r, n) {
      return 1 === arguments.length ? k(e) : new v(e, t, r, null == n ? 1 : n);
    }

    function v(e, t, r, n) {
      this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
    }

    function N(e) {
      return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16);
    }

    function M(e, t, r, n) {
      return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new E(e, t, r, n);
    }

    function q(e) {
      if (e instanceof E) return new E(e.h, e.s, e.l, e.opacity);
      if (e instanceof r || (e = f(e)), !e) return new E();
      if (e instanceof E) return e;
      var t = (e = e.rgb()).r / 255,
          n = e.g / 255,
          i = e.b / 255,
          a = Math.min(t, n, i),
          o = Math.max(t, n, i),
          s = NaN,
          l = o - a,
          h = (o + a) / 2;
      return l ? (s = t === o ? (n - i) / l + 6 * (n < i) : n === o ? (i - t) / l + 2 : (t - n) / l + 4, l /= h < .5 ? o + a : 2 - o - a, s *= 60) : l = h > 0 && h < 1 ? 0 : s, new E(s, l, h, e.opacity);
    }

    function O(e, t, r, n) {
      return 1 === arguments.length ? q(e) : new E(e, t, r, null == n ? 1 : n);
    }

    function E(e, t, r, n) {
      this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
    }

    function $(e, t, r) {
      return 255 * (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t);
    }

    (0, e.default)(r, f, {
      displayable: function displayable() {
        return this.rgb().displayable();
      },
      hex: function hex() {
        return this.rgb().hex();
      },
      toString: function toString() {
        return this.rgb() + "";
      }
    }), (0, e.default)(v, x, (0, e.extend)(r, {
      brighter: function brighter(e) {
        return e = null == e ? i : Math.pow(i, e), new v(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      darker: function darker(e) {
        return e = null == e ? n : Math.pow(n, e), new v(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      rgb: function rgb() {
        return this;
      },
      displayable: function displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      },
      hex: function hex() {
        return "#" + N(this.r) + N(this.g) + N(this.b);
      },
      toString: function toString() {
        var e = this.opacity;
        return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")");
      }
    })), (0, e.default)(E, O, (0, e.extend)(r, {
      brighter: function brighter(e) {
        return e = null == e ? i : Math.pow(i, e), new E(this.h, this.s, this.l * e, this.opacity);
      },
      darker: function darker(e) {
        return e = null == e ? n : Math.pow(n, e), new E(this.h, this.s, this.l * e, this.opacity);
      },
      rgb: function rgb() {
        var e = this.h % 360 + 360 * (this.h < 0),
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            n = r + (r < .5 ? r : 1 - r) * t,
            i = 2 * r - n;
        return new v($(e >= 240 ? e - 240 : e + 120, i, n), $(e, i, n), $(e < 120 ? e + 240 : e - 120, i, n), this.opacity);
      },
      displayable: function displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }
    }));
  }, {
    "./define": "CSb3"
  }],
  "8ykI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rad2deg = exports.deg2rad = void 0;
    var e = Math.PI / 180;
    exports.deg2rad = e;
    var r = 180 / Math.PI;
    exports.rad2deg = r;
  }, {}],
  "n21X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.gray = p, exports.default = b, exports.Lab = w, exports.lch = x, exports.hcl = M, exports.Hcl = O;

    var t = e(require("./define")),
        n = require("./color"),
        r = require("./math");

    function e(t) {
      if (t && t.__esModule) return t;
      var n = {};
      if (null != t) for (var r in t) {
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          var e = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
          e.get || e.set ? Object.defineProperty(n, r, e) : n[r] = t[r];
        }
      }
      return n.default = t, n;
    }

    var i = 18,
        o = .96422,
        a = 1,
        u = .82521,
        c = 4 / 29,
        s = 6 / 29,
        h = 3 * s * s,
        l = s * s * s;

    function f(t) {
      if (t instanceof w) return new w(t.l, t.a, t.b, t.opacity);
      if (t instanceof O) return j(t);
      t instanceof n.Rgb || (t = (0, n.rgbConvert)(t));
      var r,
          e,
          i = v(t.r),
          c = v(t.g),
          s = v(t.b),
          h = y((.2225045 * i + .7168786 * c + .0606169 * s) / a);
      return i === c && c === s ? r = e = h : (r = y((.4360747 * i + .3850649 * c + .1430804 * s) / o), e = y((.0139322 * i + .0971045 * c + .7141733 * s) / u)), new w(116 * h - 16, 500 * (r - h), 200 * (h - e), t.opacity);
    }

    function p(t, n) {
      return new w(t, 0, 0, null == n ? 1 : n);
    }

    function b(t, n, r, e) {
      return 1 === arguments.length ? f(t) : new w(t, n, r, null == e ? 1 : e);
    }

    function w(t, n, r, e) {
      this.l = +t, this.a = +n, this.b = +r, this.opacity = +e;
    }

    function y(t) {
      return t > l ? Math.pow(t, 1 / 3) : t / h + c;
    }

    function d(t) {
      return t > s ? t * t * t : h * (t - c);
    }

    function g(t) {
      return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
    }

    function v(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    }

    function N(t) {
      if (t instanceof O) return new O(t.h, t.c, t.l, t.opacity);
      if (t instanceof w || (t = f(t)), 0 === t.a && 0 === t.b) return new O(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
      var n = Math.atan2(t.b, t.a) * r.rad2deg;
      return new O(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }

    function x(t, n, r, e) {
      return 1 === arguments.length ? N(t) : new O(r, n, t, null == e ? 1 : e);
    }

    function M(t, n, r, e) {
      return 1 === arguments.length ? N(t) : new O(t, n, r, null == e ? 1 : e);
    }

    function O(t, n, r, e) {
      this.h = +t, this.c = +n, this.l = +r, this.opacity = +e;
    }

    function j(t) {
      if (isNaN(t.h)) return new w(t.l, 0, 0, t.opacity);
      var n = t.h * r.deg2rad;
      return new w(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }

    (0, t.default)(w, b, (0, t.extend)(n.Color, {
      brighter: function brighter(t) {
        return new w(this.l + i * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      darker: function darker(t) {
        return new w(this.l - i * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      rgb: function rgb() {
        var t = (this.l + 16) / 116,
            r = isNaN(this.a) ? t : t + this.a / 500,
            e = isNaN(this.b) ? t : t - this.b / 200;
        return r = o * d(r), t = a * d(t), e = u * d(e), new n.Rgb(g(3.1338561 * r - 1.6168667 * t - .4906146 * e), g(-.9787684 * r + 1.9161415 * t + .033454 * e), g(.0719453 * r - .2289914 * t + 1.4052427 * e), this.opacity);
      }
    })), (0, t.default)(O, M, (0, t.extend)(n.Color, {
      brighter: function brighter(t) {
        return new O(this.h, this.c, this.l + i * (null == t ? 1 : t), this.opacity);
      },
      darker: function darker(t) {
        return new O(this.h, this.c, this.l - i * (null == t ? 1 : t), this.opacity);
      },
      rgb: function rgb() {
        return j(this).rgb();
      }
    }));
  }, {
    "./define": "CSb3",
    "./color": "UAf0",
    "./math": "8ykI"
  }],
  "aDX2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p, exports.Cubehelix = d;

    var t = i(require("./define")),
        e = require("./color"),
        r = require("./math");

    function i(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) {
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
          i.get || i.set ? Object.defineProperty(e, r, i) : e[r] = t[r];
        }
      }
      return e.default = t, e;
    }

    var n = -.14861,
        s = 1.78277,
        o = -.29227,
        a = -.90649,
        h = 1.97294,
        u = h * a,
        c = h * s,
        l = s * o - a * n;

    function f(t) {
      if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity);
      t instanceof e.Rgb || (t = (0, e.rgbConvert)(t));
      var i = t.r / 255,
          n = t.g / 255,
          s = t.b / 255,
          f = (l * s + u * i - c * n) / (l + u - c),
          p = s - f,
          b = (h * (n - f) - o * p) / a,
          g = Math.sqrt(b * b + p * p) / (h * f * (1 - f)),
          y = g ? Math.atan2(b, p) * r.rad2deg - 120 : NaN;
      return new d(y < 0 ? y + 360 : y, g, f, t.opacity);
    }

    function p(t, e, r, i) {
      return 1 === arguments.length ? f(t) : new d(t, e, r, null == i ? 1 : i);
    }

    function d(t, e, r, i) {
      this.h = +t, this.s = +e, this.l = +r, this.opacity = +i;
    }

    (0, t.default)(d, p, (0, t.extend)(e.Color, {
      brighter: function brighter(t) {
        return t = null == t ? e.brighter : Math.pow(e.brighter, t), new d(this.h, this.s, this.l * t, this.opacity);
      },
      darker: function darker(t) {
        return t = null == t ? e.darker : Math.pow(e.darker, t), new d(this.h, this.s, this.l * t, this.opacity);
      },
      rgb: function rgb() {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * r.deg2rad,
            i = +this.l,
            u = isNaN(this.s) ? 0 : this.s * i * (1 - i),
            c = Math.cos(t),
            l = Math.sin(t);
        return new e.Rgb(255 * (i + u * (n * c + s * l)), 255 * (i + u * (o * c + a * l)), 255 * (i + u * (h * c)), this.opacity);
      }
    }));
  }, {
    "./define": "CSb3",
    "./color": "UAf0",
    "./math": "8ykI"
  }],
  "4TJ2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "color", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "rgb", {
      enumerable: !0,
      get: function get() {
        return e.rgb;
      }
    }), Object.defineProperty(exports, "hsl", {
      enumerable: !0,
      get: function get() {
        return e.hsl;
      }
    }), Object.defineProperty(exports, "lab", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "hcl", {
      enumerable: !0,
      get: function get() {
        return r.hcl;
      }
    }), Object.defineProperty(exports, "lch", {
      enumerable: !0,
      get: function get() {
        return r.lch;
      }
    }), Object.defineProperty(exports, "gray", {
      enumerable: !0,
      get: function get() {
        return r.gray;
      }
    }), Object.defineProperty(exports, "cubehelix", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    });
    var e = o(require("./color")),
        r = o(require("./lab")),
        t = n(require("./cubehelix"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./color": "UAf0",
    "./lab": "n21X",
    "./cubehelix": "aDX2"
  }],
  "mIuw": [function (require, module, exports) {
    "use strict";

    function e(e, r, t, n, o) {
      var u = e * e,
          s = u * e;
      return ((1 - 3 * e + 3 * u - s) * r + (4 - 6 * u + 3 * s) * t + (1 + 3 * e + 3 * u - 3 * s) * n + s * o) / 6;
    }

    function r(r) {
      var t = r.length - 1;
      return function (n) {
        var o = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t),
            u = r[o],
            s = r[o + 1],
            a = o > 0 ? r[o - 1] : 2 * u - s,
            f = o < t - 1 ? r[o + 2] : 2 * s - u;
        return e((n - o / t) * t, a, u, s, f);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.basis = e, exports.default = r;
  }, {}],
  "t9MF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./basis");

    function r(r) {
      var t = r.length;
      return function (s) {
        var u = Math.floor(((s %= 1) < 0 ? ++s : s) * t),
            a = r[(u + t - 1) % t],
            n = r[u % t],
            o = r[(u + 1) % t],
            i = r[(u + 2) % t];
        return (0, e.basis)((s - u / t) * t, a, n, o, i);
      };
    }
  }, {
    "./basis": "mIuw"
  }],
  "OW+9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hue = u, exports.gamma = o, exports.default = a;
    var t = e(require("./constant"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t, e) {
      return function (n) {
        return t + n * e;
      };
    }

    function r(t, e, n) {
      return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
        return Math.pow(t + r * e, n);
      };
    }

    function u(e, r) {
      var u = r - e;
      return u ? n(e, u > 180 || u < -180 ? u - 360 * Math.round(u / 360) : u) : (0, t.default)(isNaN(e) ? r : e);
    }

    function o(e) {
      return 1 == (e = +e) ? a : function (n, u) {
        return u - n ? r(n, u, e) : (0, t.default)(isNaN(n) ? u : n);
      };
    }

    function a(e, r) {
      var u = r - e;
      return u ? n(e, u) : (0, t.default)(isNaN(e) ? r : e);
    }
  }, {
    "./constant": "5O/Y"
  }],
  "hw5o": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rgbBasisClosed = exports.rgbBasis = exports.default = void 0;

    var r = require("d3-color"),
        e = n(require("./basis")),
        t = n(require("./basisClosed")),
        o = a(require("./color"));

    function a(r) {
      if (r && r.__esModule) return r;
      var e = {};
      if (null != r) for (var t in r) {
        if (Object.prototype.hasOwnProperty.call(r, t)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(r, t) : {};
          o.get || o.set ? Object.defineProperty(e, t, o) : e[t] = r[t];
        }
      }
      return e.default = r, e;
    }

    function n(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var u = function e(t) {
      var a = (0, o.gamma)(t);

      function n(e, t) {
        var n = a((e = (0, r.rgb)(e)).r, (t = (0, r.rgb)(t)).r),
            u = a(e.g, t.g),
            i = a(e.b, t.b),
            s = (0, o.default)(e.opacity, t.opacity);
        return function (r) {
          return e.r = n(r), e.g = u(r), e.b = i(r), e.opacity = s(r), e + "";
        };
      }

      return n.gamma = e, n;
    }(1);

    function i(e) {
      return function (t) {
        var o,
            a,
            n = t.length,
            u = new Array(n),
            i = new Array(n),
            s = new Array(n);

        for (o = 0; o < n; ++o) {
          a = (0, r.rgb)(t[o]), u[o] = a.r || 0, i[o] = a.g || 0, s[o] = a.b || 0;
        }

        return u = e(u), i = e(i), s = e(s), a.opacity = 1, function (r) {
          return a.r = u(r), a.g = i(r), a.b = s(r), a + "";
        };
      };
    }

    exports.default = u;
    var s = i(e.default);
    exports.rgbBasis = s;
    var c = i(t.default);
    exports.rgbBasisClosed = c;
  }, {
    "d3-color": "4TJ2",
    "./basis": "mIuw",
    "./basisClosed": "t9MF",
    "./color": "OW+9"
  }],
  "j6Kl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./value"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var n,
          u = t ? t.length : 0,
          o = r ? Math.min(u, r.length) : 0,
          a = new Array(o),
          f = new Array(u);

      for (n = 0; n < o; ++n) {
        a[n] = (0, e.default)(r[n], t[n]);
      }

      for (; n < u; ++n) {
        f[n] = t[n];
      }

      return function (e) {
        for (n = 0; n < o; ++n) {
          f[n] = a[n](e);
        }

        return f;
      };
    }
  }, {
    "./value": "5ONG"
  }],
  "npIv": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = new Date();
      return t -= e = +e, function (n) {
        return r.setTime(e + t * n), r;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "eUtU": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return t -= e = +e, function (r) {
        return e + t * r;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "9Ci2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./value"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r) {
      var u,
          n = {},
          o = {};

      for (u in null !== t && "object" == _typeof(t) || (t = {}), null !== r && "object" == _typeof(r) || (r = {}), r) {
        u in t ? n[u] = (0, e.default)(t[u], r[u]) : o[u] = r[u];
      }

      return function (e) {
        for (u in n) {
          o[u] = n[u](e);
        }

        return o;
      };
    }
  }, {
    "./value": "5ONG"
  }],
  "WNxQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = n(require("./number"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        t = new RegExp(r.source, "g");

    function u(e) {
      return function () {
        return e;
      };
    }

    function i(e) {
      return function (n) {
        return e(n) + "";
      };
    }

    function l(n, l) {
      var o,
          c,
          d,
          f = r.lastIndex = t.lastIndex = 0,
          s = -1,
          x = [],
          a = [];

      for (n += "", l += ""; (o = r.exec(n)) && (c = t.exec(l));) {
        (d = c.index) > f && (d = l.slice(f, d), x[s] ? x[s] += d : x[++s] = d), (o = o[0]) === (c = c[0]) ? x[s] ? x[s] += c : x[++s] = c : (x[++s] = null, a.push({
          i: s,
          x: (0, e.default)(o, c)
        })), f = t.lastIndex;
      }

      return f < l.length && (d = l.slice(f), x[s] ? x[s] += d : x[++s] = d), x.length < 2 ? a[0] ? i(a[0].x) : u(l) : (l = a.length, function (e) {
        for (var n, r = 0; r < l; ++r) {
          x[(n = a[r]).i] = n.x(e);
        }

        return x.join("");
      });
    }
  }, {
    "./number": "eUtU"
  }],
  "5ONG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("d3-color"),
        r = i(require("./rgb")),
        t = i(require("./array")),
        u = i(require("./date")),
        a = i(require("./number")),
        o = i(require("./object")),
        n = i(require("./string")),
        f = i(require("./constant"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(i, l) {
      var d,
          c = _typeof(l);

      return null == l || "boolean" === c ? (0, f.default)(l) : ("number" === c ? a.default : "string" === c ? (d = (0, e.color)(l)) ? (l = d, r.default) : n.default : l instanceof e.color ? r.default : l instanceof Date ? u.default : Array.isArray(l) ? t.default : "function" != typeof l.valueOf && "function" != typeof l.toString || isNaN(l) ? o.default : a.default)(i, l);
    }
  }, {
    "d3-color": "4TJ2",
    "./rgb": "hw5o",
    "./array": "j6Kl",
    "./date": "npIv",
    "./number": "eUtU",
    "./object": "9Ci2",
    "./string": "WNxQ",
    "./constant": "5O/Y"
  }],
  "9iFP": [function (require, module, exports) {
    "use strict";

    function t(t) {
      var e = t.length;
      return function (r) {
        return t[Math.max(0, Math.min(e - 1, Math.floor(r * e)))];
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "/lYd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./color");

    function r(r, t) {
      var o = (0, e.hue)(+r, +t);
      return function (e) {
        var r = o(e);
        return r - 360 * Math.floor(r / 360);
      };
    }
  }, {
    "./color": "OW+9"
  }],
  "8Ehv": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return t -= e = +e, function (r) {
        return Math.round(e + t * r);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "sFbg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.identity = void 0;
    var t = 180 / Math.PI,
        e = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };

    function a(e, a, r, s, n, l) {
      var o, i, c;
      return (o = Math.sqrt(e * e + a * a)) && (e /= o, a /= o), (c = e * r + a * s) && (r -= e * c, s -= a * c), (i = Math.sqrt(r * r + s * s)) && (r /= i, s /= i, c /= i), e * s < a * r && (e = -e, a = -a, c = -c, o = -o), {
        translateX: n,
        translateY: l,
        rotate: Math.atan2(a, e) * t,
        skewX: Math.atan(c) * t,
        scaleX: o,
        scaleY: i
      };
    }

    exports.identity = e;
  }, {}],
  "igaz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.parseCss = l, exports.parseSvg = s;
    var e,
        t,
        r,
        n,
        o = i(require("./decompose"));

    function i(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    function l(n) {
      return "none" === n ? o.identity : (e || (e = document.createElement("DIV"), t = document.documentElement, r = document.defaultView), e.style.transform = n, n = r.getComputedStyle(t.appendChild(e), null).getPropertyValue("transform"), t.removeChild(e), n = n.slice(7, -1).split(","), (0, o.default)(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]));
    }

    function s(e) {
      return null == e ? o.identity : (n || (n = document.createElementNS("http://www.w3.org/2000/svg", "g")), n.setAttribute("transform", e), (e = n.transform.baseVal.consolidate()) ? (e = e.matrix, (0, o.default)(e.a, e.b, e.c, e.d, e.e, e.f)) : o.identity);
    }
  }, {
    "./decompose": "sFbg"
  }],
  "/tUK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.interpolateTransformSvg = exports.interpolateTransformCss = void 0;

    var e = r(require("../number")),
        t = require("./parse");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(t, r, s, n) {
      function a(e) {
        return e.length ? e.pop() + " " : "";
      }

      return function (u, l) {
        var o = [],
            p = [];
        return u = t(u), l = t(l), function (t, n, a, u, l, o) {
          if (t !== a || n !== u) {
            var p = l.push("translate(", null, r, null, s);
            o.push({
              i: p - 4,
              x: (0, e.default)(t, a)
            }, {
              i: p - 2,
              x: (0, e.default)(n, u)
            });
          } else (a || u) && l.push("translate(" + a + r + u + s);
        }(u.translateX, u.translateY, l.translateX, l.translateY, o, p), function (t, r, s, u) {
          t !== r ? (t - r > 180 ? r += 360 : r - t > 180 && (t += 360), u.push({
            i: s.push(a(s) + "rotate(", null, n) - 2,
            x: (0, e.default)(t, r)
          })) : r && s.push(a(s) + "rotate(" + r + n);
        }(u.rotate, l.rotate, o, p), function (t, r, s, u) {
          t !== r ? u.push({
            i: s.push(a(s) + "skewX(", null, n) - 2,
            x: (0, e.default)(t, r)
          }) : r && s.push(a(s) + "skewX(" + r + n);
        }(u.skewX, l.skewX, o, p), function (t, r, s, n, u, l) {
          if (t !== s || r !== n) {
            var o = u.push(a(u) + "scale(", null, ",", null, ")");
            l.push({
              i: o - 4,
              x: (0, e.default)(t, s)
            }, {
              i: o - 2,
              x: (0, e.default)(r, n)
            });
          } else 1 === s && 1 === n || u.push(a(u) + "scale(" + s + "," + n + ")");
        }(u.scaleX, u.scaleY, l.scaleX, l.scaleY, o, p), u = l = null, function (e) {
          for (var t, r = -1, s = p.length; ++r < s;) {
            o[(t = p[r]).i] = t.x(e);
          }

          return o.join("");
        };
      };
    }

    var n = s(t.parseCss, "px, ", "px)", "deg)");
    exports.interpolateTransformCss = n;
    var a = s(t.parseSvg, ", ", ")", ")");
    exports.interpolateTransformSvg = a;
  }, {
    "../number": "eUtU",
    "./parse": "igaz"
  }],
  "MbcF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = M;
    var t = Math.SQRT2,
        e = 2,
        r = 4,
        n = 1e-12;

    function a(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }

    function u(t) {
      return ((t = Math.exp(t)) - 1 / t) / 2;
    }

    function o(t) {
      return ((t = Math.exp(2 * t)) - 1) / (t + 1);
    }

    function M(M, h) {
      var i,
          f,
          s = M[0],
          c = M[1],
          l = M[2],
          p = h[0],
          x = h[1],
          v = h[2],
          d = p - s,
          g = x - c,
          q = d * d + g * g;
      if (q < n) f = Math.log(v / l) / t, i = function i(e) {
        return [s + e * d, c + e * g, l * Math.exp(t * e * f)];
      };else {
        var _ = Math.sqrt(q),
            b = (v * v - l * l + r * q) / (2 * l * e * _),
            j = (v * v - l * l - r * q) / (2 * v * e * _),
            y = Math.log(Math.sqrt(b * b + 1) - b),
            O = Math.log(Math.sqrt(j * j + 1) - j);

        f = (O - y) / t, i = function i(r) {
          var n = r * f,
              M = a(y),
              h = l / (e * _) * (M * o(t * n + y) - u(y));
          return [s + h * d, c + h * g, l * M / a(t * n + y)];
        };
      }
      return i.duration = 1e3 * f, i;
    }
  }, {}],
  "BrWg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hslLong = exports.default = void 0;

    var e = require("d3-color"),
        r = t(require("./color"));

    function t(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function o(t) {
      return function (o, u) {
        var l = t((o = (0, e.hsl)(o)).h, (u = (0, e.hsl)(u)).h),
            n = (0, r.default)(o.s, u.s),
            a = (0, r.default)(o.l, u.l),
            i = (0, r.default)(o.opacity, u.opacity);
        return function (e) {
          return o.h = l(e), o.s = n(e), o.l = a(e), o.opacity = i(e), o + "";
        };
      };
    }

    var u = o(r.hue);
    exports.default = u;
    var l = o(r.default);
    exports.hslLong = l;
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "5HCN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("d3-color"),
        t = r(require("./color"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r, u) {
      var a = (0, t.default)((r = (0, e.lab)(r)).l, (u = (0, e.lab)(u)).l),
          l = (0, t.default)(r.a, u.a),
          o = (0, t.default)(r.b, u.b),
          c = (0, t.default)(r.opacity, u.opacity);
      return function (e) {
        return r.l = a(e), r.a = l(e), r.b = o(e), r.opacity = c(e), r + "";
      };
    }
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "9VIl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hclLong = exports.default = void 0;

    var e = require("d3-color"),
        r = t(require("./color"));

    function t(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function o(t) {
      return function (o, c) {
        var u = t((o = (0, e.hcl)(o)).h, (c = (0, e.hcl)(c)).h),
            l = (0, r.default)(o.c, c.c),
            n = (0, r.default)(o.l, c.l),
            a = (0, r.default)(o.opacity, c.opacity);
        return function (e) {
          return o.h = u(e), o.c = l(e), o.l = n(e), o.opacity = a(e), o + "";
        };
      };
    }

    var c = o(r.hue);
    exports.default = c;
    var u = o(r.default);
    exports.hclLong = u;
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "NOHm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cubehelixLong = exports.default = void 0;

    var e = require("d3-color"),
        r = t(require("./color"));

    function t(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function o(t) {
      return function o(u) {
        function n(o, n) {
          var i = t((o = (0, e.cubehelix)(o)).h, (n = (0, e.cubehelix)(n)).h),
              c = (0, r.default)(o.s, n.s),
              a = (0, r.default)(o.l, n.l),
              l = (0, r.default)(o.opacity, n.opacity);
          return function (e) {
            return o.h = i(e), o.s = c(e), o.l = a(Math.pow(e, u)), o.opacity = l(e), o + "";
          };
        }

        return u = +u, n.gamma = o, n;
      }(1);
    }

    var u = o(r.hue);
    exports.default = u;
    var n = o(r.default);
    exports.cubehelixLong = n;
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "nlPb": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = 0, n = r.length - 1, a = r[0], o = new Array(n < 0 ? 0 : n); t < n;) {
        o[t] = e(a, a = r[++t]);
      }

      return function (e) {
        var r = Math.max(0, Math.min(n - 1, Math.floor(e *= n)));
        return o[r](e - r);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "g3ua": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = new Array(r), o = 0; o < r; ++o) {
        t[o] = e(o / (r - 1));
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "mkGF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "interpolate", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "interpolateArray", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "interpolateBasis", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interpolateBasisClosed", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "interpolateDate", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "interpolateDiscrete", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "interpolateHue", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "interpolateNumber", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "interpolateObject", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "interpolateRound", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "interpolateString", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "interpolateTransformCss", {
      enumerable: !0,
      get: function get() {
        return b.interpolateTransformCss;
      }
    }), Object.defineProperty(exports, "interpolateTransformSvg", {
      enumerable: !0,
      get: function get() {
        return b.interpolateTransformSvg;
      }
    }), Object.defineProperty(exports, "interpolateZoom", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "interpolateRgb", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "interpolateRgbBasis", {
      enumerable: !0,
      get: function get() {
        return s.rgbBasis;
      }
    }), Object.defineProperty(exports, "interpolateRgbBasisClosed", {
      enumerable: !0,
      get: function get() {
        return s.rgbBasisClosed;
      }
    }), Object.defineProperty(exports, "interpolateHsl", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "interpolateHslLong", {
      enumerable: !0,
      get: function get() {
        return d.hslLong;
      }
    }), Object.defineProperty(exports, "interpolateLab", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "interpolateHcl", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "interpolateHclLong", {
      enumerable: !0,
      get: function get() {
        return O.hclLong;
      }
    }), Object.defineProperty(exports, "interpolateCubehelix", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "interpolateCubehelixLong", {
      enumerable: !0,
      get: function get() {
        return m.cubehelixLong;
      }
    }), Object.defineProperty(exports, "piecewise", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "quantize", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    });

    var e = P(require("./value")),
        r = P(require("./array")),
        t = P(require("./basis")),
        n = P(require("./basisClosed")),
        o = P(require("./date")),
        u = P(require("./discrete")),
        i = P(require("./hue")),
        a = P(require("./number")),
        l = P(require("./object")),
        p = P(require("./round")),
        f = P(require("./string")),
        b = require("./transform/index"),
        c = P(require("./zoom")),
        s = x(require("./rgb")),
        d = x(require("./hsl")),
        g = P(require("./lab")),
        O = x(require("./hcl")),
        m = x(require("./cubehelix")),
        y = P(require("./piecewise")),
        j = P(require("./quantize"));

    function x(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function P(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./value": "5ONG",
    "./array": "j6Kl",
    "./basis": "mIuw",
    "./basisClosed": "t9MF",
    "./date": "npIv",
    "./discrete": "9iFP",
    "./hue": "/lYd",
    "./number": "eUtU",
    "./object": "9Ci2",
    "./round": "8Ehv",
    "./string": "WNxQ",
    "./transform/index": "/tUK",
    "./zoom": "MbcF",
    "./rgb": "hw5o",
    "./hsl": "BrWg",
    "./lab": "5HCN",
    "./hcl": "9VIl",
    "./cubehelix": "NOHm",
    "./piecewise": "nlPb",
    "./quantize": "g3ua"
  }],
  "9v2Y": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.now = f, exports.Timer = m, exports.timer = p, exports.timerFlush = w;
    var t,
        n,
        e = 0,
        o = 0,
        i = 0,
        r = 1e3,
        l = 0,
        c = 0,
        s = 0,
        u = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
        a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
      setTimeout(t, 17);
    };

    function f() {
      return c || (a(_), c = u.now() + s);
    }

    function _() {
      c = 0;
    }

    function m() {
      this._call = this._time = this._next = null;
    }

    function p(t, n, e) {
      var o = new m();
      return o.restart(t, n, e), o;
    }

    function w() {
      f(), ++e;

      for (var n, o = t; o;) {
        (n = c - o._time) >= 0 && o._call.call(null, n), o = o._next;
      }

      --e;
    }

    function h() {
      c = (l = u.now()) + s, e = o = 0;

      try {
        w();
      } finally {
        e = 0, y(), c = 0;
      }
    }

    function x() {
      var t = u.now(),
          n = t - l;
      n > r && (s -= n, l = t);
    }

    function y() {
      for (var e, o, i = t, r = 1 / 0; i;) {
        i._call ? (r > i._time && (r = i._time), e = i, i = i._next) : (o = i._next, i._next = null, i = e ? e._next = o : t = o);
      }

      n = e, v(r);
    }

    function v(t) {
      e || (o && (o = clearTimeout(o)), t - c > 24 ? (t < 1 / 0 && (o = setTimeout(h, t - u.now() - s)), i && (i = clearInterval(i))) : (i || (l = u.now(), i = setInterval(x, r)), e = 1, a(h)));
    }

    m.prototype = p.prototype = {
      constructor: m,
      restart: function restart(e, o, i) {
        if ("function" != typeof e) throw new TypeError("callback is not a function");
        i = (null == i ? f() : +i) + (null == o ? 0 : +o), this._next || n === this || (n ? n._next = this : t = this, n = this), this._call = e, this._time = i, v();
      },
      stop: function stop() {
        this._call && (this._call = null, this._time = 1 / 0, v());
      }
    };
  }, {}],
  "iEU7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./timer");

    function r(r, t, u) {
      var n = new e.Timer();
      return t = null == t ? 0 : +t, n.restart(function (e) {
        n.stop(), r(e + t);
      }, t, u), n;
    }
  }, {
    "./timer": "9v2Y"
  }],
  "B8zX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./timer");

    function r(r, t, n) {
      var u = new e.Timer(),
          s = t;
      return null == t ? (u.restart(r, t, n), u) : (t = +t, n = null == n ? (0, e.now)() : +n, u.restart(function e(a) {
        a += s, u.restart(e, s += t, n), r(a);
      }, t, n), u);
    }
  }, {
    "./timer": "9v2Y"
  }],
  "CBES": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "now", {
      enumerable: !0,
      get: function get() {
        return e.now;
      }
    }), Object.defineProperty(exports, "timer", {
      enumerable: !0,
      get: function get() {
        return e.timer;
      }
    }), Object.defineProperty(exports, "timerFlush", {
      enumerable: !0,
      get: function get() {
        return e.timerFlush;
      }
    }), Object.defineProperty(exports, "timeout", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interval", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });

    var e = require("./timer"),
        t = n(require("./timeout")),
        r = n(require("./interval"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./timer": "9v2Y",
    "./timeout": "iEU7",
    "./interval": "B8zX"
  }],
  "GDz/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p, exports.init = _, exports.set = c, exports.get = f, exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = void 0;

    var t = require("d3-dispatch"),
        e = require("d3-timer"),
        r = (0, t.dispatch)("start", "end", "cancel", "interrupt"),
        a = [],
        n = 0;

    exports.CREATED = n;
    var o = 1;
    exports.SCHEDULED = o;
    var i = 2;
    exports.STARTING = i;
    var s = 3;
    exports.STARTED = s;
    var l = 4;
    exports.RUNNING = l;
    var u = 5;
    exports.ENDING = u;
    var d = 6;

    function p(t, e, o, i, s, l) {
      var u = t.__transition;

      if (u) {
        if (o in u) return;
      } else t.__transition = {};

      x(t, o, {
        name: e,
        index: i,
        group: s,
        on: r,
        tween: a,
        time: l.time,
        delay: l.delay,
        duration: l.duration,
        ease: l.ease,
        timer: null,
        state: n
      });
    }

    function _(t, e) {
      var r = f(t, e);
      if (r.state > n) throw new Error("too late; already scheduled");
      return r;
    }

    function c(t, e) {
      var r = f(t, e);
      if (r.state > s) throw new Error("too late; already running");
      return r;
    }

    function f(t, e) {
      var r = t.__transition;
      if (!r || !(r = r[e])) throw new Error("transition not found");
      return r;
    }

    function x(t, r, a) {
      var n,
          p = t.__transition;

      function _(u) {
        var x, m, E, v;
        if (a.state !== o) return f();

        for (x in p) {
          if ((v = p[x]).name === a.name) {
            if (v.state === s) return (0, e.timeout)(_);
            v.state === l ? (v.state = d, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete p[x]) : +x < r && (v.state = d, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete p[x]);
          }
        }

        if ((0, e.timeout)(function () {
          a.state === s && (a.state = l, a.timer.restart(c, a.delay, a.time), c(u));
        }), a.state = i, a.on.call("start", t, t.__data__, a.index, a.group), a.state === i) {
          for (a.state = s, n = new Array(E = a.tween.length), x = 0, m = -1; x < E; ++x) {
            (v = a.tween[x].value.call(t, t.__data__, a.index, a.group)) && (n[++m] = v);
          }

          n.length = m + 1;
        }
      }

      function c(e) {
        for (var r = e < a.duration ? a.ease.call(null, e / a.duration) : (a.timer.restart(f), a.state = u, 1), o = -1, i = n.length; ++o < i;) {
          n[o].call(t, r);
        }

        a.state === u && (a.on.call("end", t, t.__data__, a.index, a.group), f());
      }

      function f() {
        for (var e in a.state = d, a.timer.stop(), delete p[r], p) {
          return;
        }

        delete t.__transition;
      }

      p[r] = a, a.timer = (0, e.timer)(function (t) {
        a.state = o, a.timer.restart(_, a.delay, a.time), a.delay <= t && _(t - a.delay);
      }, 0, a.time);
    }

    exports.ENDED = d;
  }, {
    "d3-dispatch": "UU/c",
    "d3-timer": "CBES"
  }],
  "+xAn": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./transition/schedule");

    function t(t, n) {
      var r,
          a,
          i,
          l = t.__transition,
          s = !0;

      if (l) {
        for (i in n = null == n ? null : n + "", l) {
          (r = l[i]).name === n ? (a = r.state > e.STARTING && r.state < e.ENDING, r.state = e.ENDED, r.timer.stop(), r.on.call(a ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete l[i]) : s = !1;
        }

        s && delete t.__transition;
      }
    }
  }, {
    "./transition/schedule": "GDz/"
  }],
  "JwzZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../interrupt"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return this.each(function () {
        (0, e.default)(this, t);
      });
    }
  }, {
    "../interrupt": "+xAn"
  }],
  "CgJV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r, exports.tweenValue = i;

    var e = require("./schedule");

    function t(t, n) {
      var r, i;
      return function () {
        var u = (0, e.set)(this, t),
            a = u.tween;
        if (a !== r) for (var f = 0, l = (i = r = a).length; f < l; ++f) {
          if (i[f].name === n) {
            (i = i.slice()).splice(f, 1);
            break;
          }
        }
        u.tween = i;
      };
    }

    function n(t, n, r) {
      var i, u;
      if ("function" != typeof r) throw new Error();
      return function () {
        var a = (0, e.set)(this, t),
            f = a.tween;

        if (f !== i) {
          u = (i = f).slice();

          for (var l = {
            name: n,
            value: r
          }, o = 0, s = u.length; o < s; ++o) {
            if (u[o].name === n) {
              u[o] = l;
              break;
            }
          }

          o === s && u.push(l);
        }

        a.tween = u;
      };
    }

    function r(r, i) {
      var u = this._id;

      if (r += "", arguments.length < 2) {
        for (var a, f = (0, e.get)(this.node(), u).tween, l = 0, o = f.length; l < o; ++l) {
          if ((a = f[l]).name === r) return a.value;
        }

        return null;
      }

      return this.each((null == i ? t : n)(u, r, i));
    }

    function i(t, n, r) {
      var i = t._id;
      return t.each(function () {
        var t = (0, e.set)(this, i);
        (t.value || (t.value = {}))[n] = r.apply(this, arguments);
      }), function (t) {
        return (0, e.get)(t, i).value[n];
      };
    }
  }, {
    "./schedule": "GDz/"
  }],
  "KSuB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-color"),
        r = require("d3-interpolate");

    function t(t, o) {
      var n;
      return ("number" == typeof o ? r.interpolateNumber : o instanceof e.color ? r.interpolateRgb : (n = (0, e.color)(o)) ? (o = n, r.interpolateRgb) : r.interpolateString)(t, o);
    }
  }, {
    "d3-color": "4TJ2",
    "d3-interpolate": "mkGF"
  }],
  "/e4S": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = require("d3-interpolate"),
        e = require("d3-selection"),
        r = require("./tween"),
        n = u(require("./interpolate"));

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return function () {
        this.removeAttribute(t);
      };
    }

    function l(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function o(t, e, r) {
      var n,
          u,
          i = r + "";
      return function () {
        var l = this.getAttribute(t);
        return l === i ? null : l === n ? u : u = e(n = l, r);
      };
    }

    function a(t, e, r) {
      var n,
          u,
          i = r + "";
      return function () {
        var l = this.getAttributeNS(t.space, t.local);
        return l === i ? null : l === n ? u : u = e(n = l, r);
      };
    }

    function c(t, e, r) {
      var n, u, i;
      return function () {
        var l,
            o,
            a = r(this);
        if (null != a) return (l = this.getAttribute(t)) === (o = a + "") ? null : l === n && o === u ? i : (u = o, i = e(n = l, a));
        this.removeAttribute(t);
      };
    }

    function s(t, e, r) {
      var n, u, i;
      return function () {
        var l,
            o,
            a = r(this);
        if (null != a) return (l = this.getAttributeNS(t.space, t.local)) === (o = a + "") ? null : l === n && o === u ? i : (u = o, i = e(n = l, a));
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function f(u, f) {
      var v = (0, e.namespace)(u),
          h = "transform" === v ? t.interpolateTransformSvg : n.default;
      return this.attrTween(u, "function" == typeof f ? (v.local ? s : c)(v, h, (0, r.tweenValue)(this, "attr." + u, f)) : null == f ? (v.local ? l : i)(v) : (v.local ? a : o)(v, h, f));
    }
  }, {
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "./tween": "CgJV",
    "./interpolate": "KSuB"
  }],
  "L4WC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var t = require("d3-selection");

    function e(t, e) {
      return function (n) {
        this.setAttribute(t, e(n));
      };
    }

    function n(t, e) {
      return function (n) {
        this.setAttributeNS(t.space, t.local, e(n));
      };
    }

    function r(t, e) {
      var r, u;

      function i() {
        var i = e.apply(this, arguments);
        return i !== u && (r = (u = i) && n(t, i)), r;
      }

      return i._value = e, i;
    }

    function u(t, n) {
      var r, u;

      function i() {
        var i = n.apply(this, arguments);
        return i !== u && (r = (u = i) && e(t, i)), r;
      }

      return i._value = n, i;
    }

    function i(e, n) {
      var i = "attr." + e;
      if (arguments.length < 2) return (i = this.tween(i)) && i._value;
      if (null == n) return this.tween(i, null);
      if ("function" != typeof n) throw new Error();
      var a = (0, t.namespace)(e);
      return this.tween(i, (a.local ? r : u)(a, n));
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "1K26": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var t = require("./schedule");

    function e(e, i) {
      return function () {
        (0, t.init)(this, e).delay = +i.apply(this, arguments);
      };
    }

    function i(e, i) {
      return i = +i, function () {
        (0, t.init)(this, e).delay = i;
      };
    }

    function n(n) {
      var r = this._id;
      return arguments.length ? this.each(("function" == typeof n ? e : i)(r, n)) : (0, t.get)(this.node(), r).delay;
    }
  }, {
    "./schedule": "GDz/"
  }],
  "ZZtL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var t = require("./schedule");

    function e(e, n) {
      return function () {
        (0, t.set)(this, e).duration = +n.apply(this, arguments);
      };
    }

    function n(e, n) {
      return n = +n, function () {
        (0, t.set)(this, e).duration = n;
      };
    }

    function i(i) {
      var r = this._id;
      return arguments.length ? this.each(("function" == typeof i ? e : n)(r, i)) : (0, t.get)(this.node(), r).duration;
    }
  }, {
    "./schedule": "GDz/"
  }],
  "6pgS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./schedule");

    function t(t, r) {
      if ("function" != typeof r) throw new Error();
      return function () {
        (0, e.set)(this, t).ease = r;
      };
    }

    function r(r) {
      var n = this._id;
      return arguments.length ? this.each(t(n, r)) : (0, e.get)(this.node(), n).ease;
    }
  }, {
    "./schedule": "GDz/"
  }],
  "0QDl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-selection"),
        r = require("./index");

    function t(t) {
      "function" != typeof t && (t = (0, e.matcher)(t));

      for (var n = this._groups, i = n.length, s = new Array(i), a = 0; a < i; ++a) {
        for (var o, u = n[a], _ = u.length, h = s[a] = [], l = 0; l < _; ++l) {
          (o = u[l]) && t.call(o, o.__data__, l, u) && h.push(o);
        }
      }

      return new r.Transition(s, this._parents, this._name, this._id);
    }
  }, {
    "d3-selection": "lm1C",
    "./index": "J3C7"
  }],
  "Z2Q+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var r = require("./index");

    function e(e) {
      if (e._id !== this._id) throw new Error();

      for (var t = this._groups, i = e._groups, n = t.length, s = i.length, o = Math.min(n, s), a = new Array(n), h = 0; h < o; ++h) {
        for (var u, _ = t[h], d = i[h], f = _.length, l = a[h] = new Array(f), p = 0; p < f; ++p) {
          (u = _[p] || d[p]) && (l[p] = u);
        }
      }

      for (; h < n; ++h) {
        a[h] = t[h];
      }

      return new r.Transition(a, this._parents, this._name, this._id);
    }
  }, {
    "./index": "J3C7"
  }],
  "VZes": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./schedule");

    function t(e) {
      return (e + "").trim().split(/^|\s+/).every(function (e) {
        var t = e.indexOf(".");
        return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
      });
    }

    function n(n, r, i) {
      var o,
          s,
          u = t(r) ? e.init : e.set;
      return function () {
        var e = u(this, n),
            t = e.on;
        t !== o && (s = (o = t).copy()).on(r, i), e.on = s;
      };
    }

    function r(t, r) {
      var i = this._id;
      return arguments.length < 2 ? (0, e.get)(this.node(), i).on.on(t) : this.each(n(i, t, r));
    }
  }, {
    "./schedule": "GDz/"
  }],
  "FS2t": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        var t = this.parentNode;

        for (var r in this.__transition) {
          if (+r !== e) return;
        }

        t && t.removeChild(this);
      };
    }

    function t() {
      return this.on("end.remove", e(this._id));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "Xvwr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = require("d3-selection"),
        r = require("./index"),
        t = n(require("./schedule"));

    function n(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function a(n) {
      var a = this._name,
          i = this._id;
      "function" != typeof n && (n = (0, e.selector)(n));

      for (var o = this._groups, _ = o.length, s = new Array(_), u = 0; u < _; ++u) {
        for (var c, l, d = o[u], f = d.length, p = s[u] = new Array(f), y = 0; y < f; ++y) {
          (c = d[y]) && (l = n.call(c, c.__data__, y, d)) && ("__data__" in c && (l.__data__ = c.__data__), p[y] = l, (0, t.default)(p[y], a, i, y, p, (0, t.get)(c, i)));
        }
      }

      return new r.Transition(s, this._parents, a, i);
    }
  }, {
    "d3-selection": "lm1C",
    "./index": "J3C7",
    "./schedule": "GDz/"
  }],
  "DOdJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("d3-selection"),
        r = require("./index"),
        t = n(require("./schedule"));

    function n(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function o(n) {
      var o = this._name,
          i = this._id;
      "function" != typeof n && (n = (0, e.selectorAll)(n));

      for (var u = this._groups, l = u.length, s = [], a = [], f = 0; f < l; ++f) {
        for (var c, p = u[f], d = p.length, _ = 0; _ < d; ++_) {
          if (c = p[_]) {
            for (var h, v = n.call(c, c.__data__, _, p), O = (0, t.get)(c, i), g = 0, y = v.length; g < y; ++g) {
              (h = v[g]) && (0, t.default)(h, o, i, g, v, O);
            }

            s.push(v), a.push(c);
          }
        }
      }

      return new r.Transition(s, a, o, i);
    }
  }, {
    "d3-selection": "lm1C",
    "./index": "J3C7",
    "./schedule": "GDz/"
  }],
  "bQR7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("d3-selection"),
        t = e.selection.prototype.constructor;

    function r() {
      return new t(this._groups, this._parents);
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "gXfd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var e = require("d3-interpolate"),
        t = require("d3-selection"),
        n = require("./schedule"),
        r = require("./tween"),
        u = s(require("./interpolate"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e, n) {
      var r, u, s;
      return function () {
        var l = (0, t.style)(this, e),
            i = (this.style.removeProperty(e), (0, t.style)(this, e));
        return l === i ? null : l === r && i === u ? s : s = n(r = l, u = i);
      };
    }

    function i(e) {
      return function () {
        this.style.removeProperty(e);
      };
    }

    function o(e, n, r) {
      var u,
          s,
          l = r + "";
      return function () {
        var i = (0, t.style)(this, e);
        return i === l ? null : i === u ? s : s = n(u = i, r);
      };
    }

    function a(e, n, r) {
      var u, s, l;
      return function () {
        var i = (0, t.style)(this, e),
            o = r(this),
            a = o + "";
        return null == o && (this.style.removeProperty(e), a = o = (0, t.style)(this, e)), i === a ? null : i === u && a === s ? l : (s = a, l = n(u = i, o));
      };
    }

    function y(e, t) {
      var r,
          u,
          s,
          l,
          o = "style." + t,
          a = "end." + o;
      return function () {
        var y = (0, n.set)(this, e),
            f = y.on,
            c = null == y.value[o] ? l || (l = i(t)) : void 0;
        f === r && s === c || (u = (r = f).copy()).on(a, s = c), y.on = u;
      };
    }

    function f(t, n, s) {
      var f = "transform" == (t += "") ? e.interpolateTransformCss : u.default;
      return null == n ? this.styleTween(t, l(t, f)).on("end.style." + t, i(t)) : "function" == typeof n ? this.styleTween(t, a(t, f, (0, r.tweenValue)(this, "style." + t, n))).each(y(this._id, t)) : this.styleTween(t, o(t, f, n), s).on("end.style." + t, null);
    }
  }, {
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "./schedule": "GDz/",
    "./tween": "CgJV",
    "./interpolate": "KSuB"
  }],
  "SCZW": [function (require, module, exports) {
    "use strict";

    function t(t, e, n) {
      return function (r) {
        this.style.setProperty(t, e(r), n);
      };
    }

    function e(e, n, r) {
      var u, i;

      function l() {
        var l = n.apply(this, arguments);
        return l !== i && (u = (i = l) && t(e, l, r)), u;
      }

      return l._value = n, l;
    }

    function n(t, n, r) {
      var u = "style." + (t += "");
      if (arguments.length < 2) return (u = this.tween(u)) && u._value;
      if (null == n) return this.tween(u, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(u, e(t, n, null == r ? "" : r));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "HTlb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var t = require("./tween");

    function e(t) {
      return function () {
        this.textContent = t;
      };
    }

    function n(t) {
      return function () {
        var e = t(this);
        this.textContent = null == e ? "" : e;
      };
    }

    function u(u) {
      return this.tween("text", "function" == typeof u ? n((0, t.tweenValue)(this, "text", u)) : e(null == u ? "" : u + ""));
    }
  }, {
    "./tween": "CgJV"
  }],
  "rWxz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("./index"),
        r = t(require("./schedule"));

    function t(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          i.get || i.set ? Object.defineProperty(r, t, i) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function i() {
      for (var t = this._name, i = this._id, n = (0, e.newId)(), o = this._groups, a = o.length, s = 0; s < a; ++s) {
        for (var u, d = o[s], f = d.length, l = 0; l < f; ++l) {
          if (u = d[l]) {
            var p = (0, r.get)(u, i);
            (0, r.default)(u, t, n, l, d, {
              time: p.time + p.delay + p.duration,
              delay: 0,
              duration: p.duration,
              ease: p.ease
            });
          }
        }
      }

      return new e.Transition(o, this._parents, t, n);
    }
  }, {
    "./index": "J3C7",
    "./schedule": "GDz/"
  }],
  "13+g": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./schedule");

    function t() {
      var t,
          u,
          n = this,
          r = n._id,
          s = n.size();
      return new Promise(function (i, o) {
        var c = {
          value: o
        },
            a = {
          value: function value() {
            0 == --s && i();
          }
        };
        n.each(function () {
          var n = (0, e.set)(this, r),
              s = n.on;
          s !== t && ((u = (t = s).copy())._.cancel.push(c), u._.interrupt.push(c), u._.end.push(a)), n.on = u;
        });
      });
    }
  }, {
    "./schedule": "GDz/"
  }],
  "J3C7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Transition = x, exports.default = T, exports.newId = g;

    var e = require("d3-selection"),
        t = h(require("./attr")),
        r = h(require("./attrTween")),
        u = h(require("./delay")),
        i = h(require("./duration")),
        l = h(require("./ease")),
        n = h(require("./filter")),
        a = h(require("./merge")),
        o = h(require("./on")),
        s = h(require("./remove")),
        d = h(require("./select")),
        f = h(require("./selectAll")),
        c = h(require("./selection")),
        q = h(require("./style")),
        p = h(require("./styleTween")),
        y = h(require("./text")),
        _ = h(require("./transition")),
        m = h(require("./tween")),
        w = h(require("./end"));

    function h(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var v = 0;

    function x(e, t, r, u) {
      this._groups = e, this._parents = t, this._name = r, this._id = u;
    }

    function T(t) {
      return (0, e.selection)().transition(t);
    }

    function g() {
      return ++v;
    }

    var z = e.selection.prototype;
    x.prototype = T.prototype = {
      constructor: x,
      select: d.default,
      selectAll: f.default,
      filter: n.default,
      merge: a.default,
      selection: c.default,
      transition: _.default,
      call: z.call,
      nodes: z.nodes,
      node: z.node,
      size: z.size,
      empty: z.empty,
      each: z.each,
      on: o.default,
      attr: t.default,
      attrTween: r.default,
      style: q.default,
      styleTween: p.default,
      text: y.default,
      remove: s.default,
      tween: m.default,
      delay: u.default,
      duration: i.default,
      ease: l.default,
      end: w.default
    };
  }, {
    "d3-selection": "lm1C",
    "./attr": "/e4S",
    "./attrTween": "L4WC",
    "./delay": "1K26",
    "./duration": "ZZtL",
    "./ease": "6pgS",
    "./filter": "0QDl",
    "./merge": "Z2Q+",
    "./on": "VZes",
    "./remove": "FS2t",
    "./select": "Xvwr",
    "./selectAll": "DOdJ",
    "./selection": "bQR7",
    "./style": "gXfd",
    "./styleTween": "SCZW",
    "./text": "HTlb",
    "./transition": "rWxz",
    "./tween": "CgJV",
    "./end": "13+g"
  }],
  "fXiu": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linear = e;
  }, {}],
  "GaS5": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t * t;
    }

    function e(t) {
      return t * (2 - t);
    }

    function u(t) {
      return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.quadIn = t, exports.quadOut = e, exports.quadInOut = u;
  }, {}],
  "PA7e": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t * t * t;
    }

    function e(t) {
      return --t * t * t + 1;
    }

    function u(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cubicIn = t, exports.cubicOut = e, exports.cubicInOut = u;
  }, {}],
  "ECJi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.polyInOut = exports.polyOut = exports.polyIn = void 0;

    var t = 3,
        n = function t(n) {
      function o(t) {
        return Math.pow(t, n);
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyIn = n;

    var o = function t(n) {
      function o(t) {
        return 1 - Math.pow(1 - t, n);
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyOut = o;

    var e = function t(n) {
      function o(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyInOut = e;
  }, {}],
  "sZZb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.sinIn = e, exports.sinOut = r, exports.sinInOut = s;
    var t = Math.PI,
        n = t / 2;

    function e(t) {
      return 1 - Math.cos(t * n);
    }

    function r(t) {
      return Math.sin(t * n);
    }

    function s(n) {
      return (1 - Math.cos(t * n)) / 2;
    }
  }, {}],
  "rYq8": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return Math.pow(2, 10 * t - 10);
    }

    function e(t) {
      return 1 - Math.pow(2, -10 * t);
    }

    function o(t) {
      return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.expIn = t, exports.expOut = e, exports.expInOut = o;
  }, {}],
  "1+hE": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return 1 - Math.sqrt(1 - t * t);
    }

    function r(t) {
      return Math.sqrt(1 - --t * t);
    }

    function e(t) {
      return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.circleIn = t, exports.circleOut = r, exports.circleInOut = e;
  }, {}],
  "MKsh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.bounceIn = b, exports.bounceOut = f, exports.bounceInOut = x;
    var e = 4 / 11,
        t = 6 / 11,
        n = 8 / 11,
        r = .75,
        u = 9 / 11,
        o = 10 / 11,
        c = .9375,
        s = 21 / 22,
        i = 63 / 64,
        p = 1 / e / e;

    function b(e) {
      return 1 - f(1 - e);
    }

    function f(b) {
      return (b = +b) < e ? p * b * b : b < n ? p * (b -= t) * b + r : b < o ? p * (b -= u) * b + c : p * (b -= s) * b + i;
    }

    function x(e) {
      return ((e *= 2) <= 1 ? 1 - f(1 - e) : f(e - 1) + 1) / 2;
    }
  }, {}],
  "fCsL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.backInOut = exports.backOut = exports.backIn = void 0;

    var t = 1.70158,
        r = function t(r) {
      function o(t) {
        return t * t * ((r + 1) * t - r);
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backIn = r;

    var o = function t(r) {
      function o(t) {
        return --t * t * ((r + 1) * t + r) + 1;
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backOut = o;

    var e = function t(r) {
      function o(t) {
        return ((t *= 2) < 1 ? t * t * ((r + 1) * t - r) : (t -= 2) * t * ((r + 1) * t + r) + 2) / 2;
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backInOut = e;
  }, {}],
  "xolo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.elasticInOut = exports.elasticOut = exports.elasticIn = void 0;

    var t = 2 * Math.PI,
        n = 1,
        r = .3,
        e = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return r * Math.pow(2, 10 * --t) * Math.sin((a - t) / e);
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticIn = e;

    var a = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return 1 - r * Math.pow(2, -10 * (t = +t)) * Math.sin((t + a) / e);
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticOut = a;

    var i = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return ((t = 2 * t - 1) < 0 ? r * Math.pow(2, 10 * t) * Math.sin((a - t) / e) : 2 - r * Math.pow(2, -10 * t) * Math.sin((a + t) / e)) / 2;
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticInOut = i;
  }, {}],
  "CFyW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "easeLinear", {
      enumerable: !0,
      get: function get() {
        return e.linear;
      }
    }), Object.defineProperty(exports, "easeQuad", {
      enumerable: !0,
      get: function get() {
        return t.quadInOut;
      }
    }), Object.defineProperty(exports, "easeQuadIn", {
      enumerable: !0,
      get: function get() {
        return t.quadIn;
      }
    }), Object.defineProperty(exports, "easeQuadOut", {
      enumerable: !0,
      get: function get() {
        return t.quadOut;
      }
    }), Object.defineProperty(exports, "easeQuadInOut", {
      enumerable: !0,
      get: function get() {
        return t.quadInOut;
      }
    }), Object.defineProperty(exports, "easeCubic", {
      enumerable: !0,
      get: function get() {
        return r.cubicInOut;
      }
    }), Object.defineProperty(exports, "easeCubicIn", {
      enumerable: !0,
      get: function get() {
        return r.cubicIn;
      }
    }), Object.defineProperty(exports, "easeCubicOut", {
      enumerable: !0,
      get: function get() {
        return r.cubicOut;
      }
    }), Object.defineProperty(exports, "easeCubicInOut", {
      enumerable: !0,
      get: function get() {
        return r.cubicInOut;
      }
    }), Object.defineProperty(exports, "easePoly", {
      enumerable: !0,
      get: function get() {
        return n.polyInOut;
      }
    }), Object.defineProperty(exports, "easePolyIn", {
      enumerable: !0,
      get: function get() {
        return n.polyIn;
      }
    }), Object.defineProperty(exports, "easePolyOut", {
      enumerable: !0,
      get: function get() {
        return n.polyOut;
      }
    }), Object.defineProperty(exports, "easePolyInOut", {
      enumerable: !0,
      get: function get() {
        return n.polyInOut;
      }
    }), Object.defineProperty(exports, "easeSin", {
      enumerable: !0,
      get: function get() {
        return u.sinInOut;
      }
    }), Object.defineProperty(exports, "easeSinIn", {
      enumerable: !0,
      get: function get() {
        return u.sinIn;
      }
    }), Object.defineProperty(exports, "easeSinOut", {
      enumerable: !0,
      get: function get() {
        return u.sinOut;
      }
    }), Object.defineProperty(exports, "easeSinInOut", {
      enumerable: !0,
      get: function get() {
        return u.sinInOut;
      }
    }), Object.defineProperty(exports, "easeExp", {
      enumerable: !0,
      get: function get() {
        return o.expInOut;
      }
    }), Object.defineProperty(exports, "easeExpIn", {
      enumerable: !0,
      get: function get() {
        return o.expIn;
      }
    }), Object.defineProperty(exports, "easeExpOut", {
      enumerable: !0,
      get: function get() {
        return o.expOut;
      }
    }), Object.defineProperty(exports, "easeExpInOut", {
      enumerable: !0,
      get: function get() {
        return o.expInOut;
      }
    }), Object.defineProperty(exports, "easeCircle", {
      enumerable: !0,
      get: function get() {
        return c.circleInOut;
      }
    }), Object.defineProperty(exports, "easeCircleIn", {
      enumerable: !0,
      get: function get() {
        return c.circleIn;
      }
    }), Object.defineProperty(exports, "easeCircleOut", {
      enumerable: !0,
      get: function get() {
        return c.circleOut;
      }
    }), Object.defineProperty(exports, "easeCircleInOut", {
      enumerable: !0,
      get: function get() {
        return c.circleInOut;
      }
    }), Object.defineProperty(exports, "easeBounce", {
      enumerable: !0,
      get: function get() {
        return i.bounceOut;
      }
    }), Object.defineProperty(exports, "easeBounceIn", {
      enumerable: !0,
      get: function get() {
        return i.bounceIn;
      }
    }), Object.defineProperty(exports, "easeBounceOut", {
      enumerable: !0,
      get: function get() {
        return i.bounceOut;
      }
    }), Object.defineProperty(exports, "easeBounceInOut", {
      enumerable: !0,
      get: function get() {
        return i.bounceInOut;
      }
    }), Object.defineProperty(exports, "easeBack", {
      enumerable: !0,
      get: function get() {
        return a.backInOut;
      }
    }), Object.defineProperty(exports, "easeBackIn", {
      enumerable: !0,
      get: function get() {
        return a.backIn;
      }
    }), Object.defineProperty(exports, "easeBackOut", {
      enumerable: !0,
      get: function get() {
        return a.backOut;
      }
    }), Object.defineProperty(exports, "easeBackInOut", {
      enumerable: !0,
      get: function get() {
        return a.backInOut;
      }
    }), Object.defineProperty(exports, "easeElastic", {
      enumerable: !0,
      get: function get() {
        return b.elasticOut;
      }
    }), Object.defineProperty(exports, "easeElasticIn", {
      enumerable: !0,
      get: function get() {
        return b.elasticIn;
      }
    }), Object.defineProperty(exports, "easeElasticOut", {
      enumerable: !0,
      get: function get() {
        return b.elasticOut;
      }
    }), Object.defineProperty(exports, "easeElasticInOut", {
      enumerable: !0,
      get: function get() {
        return b.elasticInOut;
      }
    });

    var e = require("./linear"),
        t = require("./quad"),
        r = require("./cubic"),
        n = require("./poly"),
        u = require("./sin"),
        o = require("./exp"),
        c = require("./circle"),
        i = require("./bounce"),
        a = require("./back"),
        b = require("./elastic");
  }, {
    "./linear": "fXiu",
    "./quad": "GaS5",
    "./cubic": "PA7e",
    "./poly": "ECJi",
    "./sin": "sZZb",
    "./exp": "rYq8",
    "./circle": "1+hE",
    "./bounce": "MKsh",
    "./back": "fCsL",
    "./elastic": "xolo"
  }],
  "CNir": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("../transition/index"),
        r = i(require("../transition/schedule")),
        n = require("d3-ease"),
        t = require("d3-timer");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = {
      time: null,
      delay: 0,
      duration: 250,
      ease: n.easeCubicInOut
    };

    function a(e, r) {
      for (var n; !(n = e.__transition) || !(n = n[r]);) {
        if (!(e = e.parentNode)) return u.time = (0, t.now)(), u;
      }

      return n;
    }

    function o(n) {
      var i, o;
      n instanceof e.Transition ? (i = n._id, n = n._name) : (i = (0, e.newId)(), (o = u).time = (0, t.now)(), n = null == n ? null : n + "");

      for (var s = this._groups, l = s.length, d = 0; d < l; ++d) {
        for (var f, _ = s[d], c = _.length, v = 0; v < c; ++v) {
          (f = _[v]) && (0, r.default)(f, n, i, v, _, o || a(f, i));
        }
      }

      return new e.Transition(s, this._parents, n, i);
    }
  }, {
    "../transition/index": "J3C7",
    "../transition/schedule": "GDz/",
    "d3-ease": "CFyW",
    "d3-timer": "CBES"
  }],
  "uhVG": [function (require, module, exports) {
    "use strict";

    var e = require("d3-selection"),
        t = i(require("./interrupt")),
        r = i(require("./transition"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.selection.prototype.interrupt = t.default, e.selection.prototype.transition = r.default;
  }, {
    "d3-selection": "lm1C",
    "./interrupt": "JwzZ",
    "./transition": "CNir"
  }],
  "zz7H": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./transition/index"),
        n = require("./transition/schedule"),
        r = [null];

    function t(t, i) {
      var u,
          l,
          s = t.__transition;
      if (s) for (l in i = null == i ? null : i + "", s) {
        if ((u = s[l]).state > n.SCHEDULED && u.name === i) return new e.Transition([[t]], r, i, +l);
      }
      return null;
    }
  }, {
    "./transition/index": "J3C7",
    "./transition/schedule": "GDz/"
  }],
  "Fcbi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "transition", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "active", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interrupt", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), require("./selection/index");
    var e = n(require("./transition/index")),
        t = n(require("./active")),
        r = n(require("./interrupt"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./selection/index": "uhVG",
    "./transition/index": "J3C7",
    "./active": "zz7H",
    "./interrupt": "+xAn"
  }],
  "iX60": [function (require, module, exports) {
    "use strict";

    function e(e, t, s) {
      this.target = e, this.type = t, this.selection = s;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "HwJw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.brushSelection = q, exports.brushX = A, exports.brushY = j, exports.default = P;

    var t = require("d3-dispatch"),
        e = require("d3-drag"),
        n = require("d3-interpolate"),
        r = require("d3-selection"),
        s = require("d3-transition"),
        a = l(require("./constant")),
        i = l(require("./event")),
        u = o(require("./noevent"));

    function o(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
          r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n];
        }
      }
      return e.default = t, e;
    }

    function l(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
      name: "drag"
    },
        h = {
      name: "space"
    },
        f = {
      name: "handle"
    },
        p = {
      name: "center"
    },
        d = {
      name: "x",
      handles: ["e", "w"].map(_),
      input: function input(t, e) {
        return t && [[t[0], e[0][1]], [t[1], e[1][1]]];
      },
      output: function output(t) {
        return t && [t[0][0], t[1][0]];
      }
    },
        v = {
      name: "y",
      handles: ["n", "s"].map(_),
      input: function input(t, e) {
        return t && [[e[0][0], t[0]], [e[1][0], t[1]]];
      },
      output: function output(t) {
        return t && [t[0][1], t[1][1]];
      }
    },
        y = {
      name: "xy",
      handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(_),
      input: function input(t) {
        return t;
      },
      output: function output(t) {
        return t;
      }
    },
        b = {
      overlay: "crosshair",
      selection: "move",
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize"
    },
        m = {
      e: "w",
      w: "e",
      nw: "ne",
      ne: "nw",
      se: "sw",
      sw: "se"
    },
        w = {
      n: "s",
      s: "n",
      nw: "sw",
      ne: "se",
      se: "ne",
      sw: "nw"
    },
        g = {
      overlay: 1,
      selection: 1,
      n: null,
      e: 1,
      s: null,
      w: -1,
      nw: -1,
      ne: 1,
      se: 1,
      sw: -1
    },
        x = {
      overlay: 1,
      selection: 1,
      n: -1,
      e: null,
      s: 1,
      w: null,
      nw: -1,
      ne: -1,
      se: 1,
      sw: 1
    };

    function _(t) {
      return {
        type: t
      };
    }

    function M() {
      return !r.event.button;
    }

    function k() {
      var t = this.ownerSVGElement || this;
      return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
    }

    function z(t) {
      for (; !t.__brush;) {
        if (!(t = t.parentNode)) return;
      }

      return t.__brush;
    }

    function O(t) {
      return t[0][0] === t[1][0] || t[0][1] === t[1][1];
    }

    function q(t) {
      var e = t.__brush;
      return e ? e.dim.output(e.selection) : null;
    }

    function A() {
      return E(d);
    }

    function j() {
      return E(v);
    }

    function P() {
      return E(y);
    }

    function E(o) {
      var l,
          y = k,
          q = M,
          A = (0, t.dispatch)(P, "start", "brush", "end"),
          j = 6;

      function P(t) {
        var e = t.property("__brush", T).selectAll(".overlay").data([_("overlay")]);
        e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", b.overlay).merge(e).each(function () {
          var t = z(this).extent;
          (0, r.select)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
        }), t.selectAll(".selection").data([_("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", b.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var n = t.selectAll(".handle").data(o.handles, function (t) {
          return t.type;
        });
        n.exit().remove(), n.enter().append("rect").attr("class", function (t) {
          return "handle handle--" + t.type;
        }).attr("cursor", function (t) {
          return b[t.type];
        }), t.each(E).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", S);
      }

      function E() {
        var t = (0, r.select)(this),
            e = z(this).selection;
        e ? (t.selectAll(".selection").style("display", null).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
          return "e" === t.type[t.type.length - 1] ? e[1][0] - j / 2 : e[0][0] - j / 2;
        }).attr("y", function (t) {
          return "s" === t.type[0] ? e[1][1] - j / 2 : e[0][1] - j / 2;
        }).attr("width", function (t) {
          return "n" === t.type || "s" === t.type ? e[1][0] - e[0][0] + j : j;
        }).attr("height", function (t) {
          return "e" === t.type || "w" === t.type ? e[1][1] - e[0][1] + j : j;
        })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
      }

      function K(t, e) {
        return t.__brush.emitter || new D(t, e);
      }

      function D(t, e) {
        this.that = t, this.args = e, this.state = t.__brush, this.active = 0;
      }

      function S() {
        if (r.event.touches) {
          if (r.event.changedTouches.length < r.event.touches.length) return (0, u.default)();
        } else if (l) return;

        if (q.apply(this, arguments)) {
          var t,
              n,
              a,
              i,
              y,
              _,
              M,
              k,
              A,
              j,
              P,
              D,
              S,
              T = this,
              V = r.event.target.__data__.type,
              C = "selection" === (r.event.metaKey ? V = "overlay" : V) ? c : r.event.altKey ? p : f,
              G = o === v ? null : g[V],
              N = o === d ? null : x[V],
              X = z(T),
              Y = X.extent,
              B = X.selection,
              F = Y[0][0],
              H = Y[0][1],
              I = Y[1][0],
              J = Y[1][1],
              L = G && N && r.event.shiftKey,
              Q = (0, r.mouse)(T),
              R = Q,
              U = K(T, arguments).beforestart();

          "overlay" === V ? X.selection = B = [[t = o === v ? F : Q[0], a = o === d ? H : Q[1]], [y = o === v ? I : t, M = o === d ? J : a]] : (t = B[0][0], a = B[0][1], y = B[1][0], M = B[1][1]), n = t, i = a, _ = y, k = M;
          var W = (0, r.select)(T).attr("pointer-events", "none"),
              Z = W.selectAll(".overlay").attr("cursor", b[V]);
          if (r.event.touches) W.on("touchmove.brush", tt, !0).on("touchend.brush touchcancel.brush", nt, !0);else {
            var $ = (0, r.select)(r.event.view).on("keydown.brush", function () {
              switch (r.event.keyCode) {
                case 16:
                  L = G && N;
                  break;

                case 18:
                  C === f && (G && (y = _ - A * G, t = n + A * G), N && (M = k - j * N, a = i + j * N), C = p, et());
                  break;

                case 32:
                  C !== f && C !== p || (G < 0 ? y = _ - A : G > 0 && (t = n - A), N < 0 ? M = k - j : N > 0 && (a = i - j), C = h, Z.attr("cursor", b.selection), et());
                  break;

                default:
                  return;
              }

              (0, u.default)();
            }, !0).on("keyup.brush", function () {
              switch (r.event.keyCode) {
                case 16:
                  L && (D = S = L = !1, et());
                  break;

                case 18:
                  C === p && (G < 0 ? y = _ : G > 0 && (t = n), N < 0 ? M = k : N > 0 && (a = i), C = f, et());
                  break;

                case 32:
                  C === h && (r.event.altKey ? (G && (y = _ - A * G, t = n + A * G), N && (M = k - j * N, a = i + j * N), C = p) : (G < 0 ? y = _ : G > 0 && (t = n), N < 0 ? M = k : N > 0 && (a = i), C = f), Z.attr("cursor", b[V]), et());
                  break;

                default:
                  return;
              }

              (0, u.default)();
            }, !0).on("mousemove.brush", tt, !0).on("mouseup.brush", nt, !0);
            (0, e.dragDisable)(r.event.view);
          }
          (0, u.nopropagation)(), (0, s.interrupt)(T), E.call(T), U.start();
        }

        function tt() {
          var t = (0, r.mouse)(T);
          !L || D || S || (Math.abs(t[0] - R[0]) > Math.abs(t[1] - R[1]) ? S = !0 : D = !0), R = t, P = !0, (0, u.default)(), et();
        }

        function et() {
          var e;

          switch (A = R[0] - Q[0], j = R[1] - Q[1], C) {
            case h:
            case c:
              G && (A = Math.max(F - t, Math.min(I - y, A)), n = t + A, _ = y + A), N && (j = Math.max(H - a, Math.min(J - M, j)), i = a + j, k = M + j);
              break;

            case f:
              G < 0 ? (A = Math.max(F - t, Math.min(I - t, A)), n = t + A, _ = y) : G > 0 && (A = Math.max(F - y, Math.min(I - y, A)), n = t, _ = y + A), N < 0 ? (j = Math.max(H - a, Math.min(J - a, j)), i = a + j, k = M) : N > 0 && (j = Math.max(H - M, Math.min(J - M, j)), i = a, k = M + j);
              break;

            case p:
              G && (n = Math.max(F, Math.min(I, t - A * G)), _ = Math.max(F, Math.min(I, y + A * G))), N && (i = Math.max(H, Math.min(J, a - j * N)), k = Math.max(H, Math.min(J, M + j * N)));
          }

          _ < n && (G *= -1, e = t, t = y, y = e, e = n, n = _, _ = e, V in m && Z.attr("cursor", b[V = m[V]])), k < i && (N *= -1, e = a, a = M, M = e, e = i, i = k, k = e, V in w && Z.attr("cursor", b[V = w[V]])), X.selection && (B = X.selection), D && (n = B[0][0], _ = B[1][0]), S && (i = B[0][1], k = B[1][1]), B[0][0] === n && B[0][1] === i && B[1][0] === _ && B[1][1] === k || (X.selection = [[n, i], [_, k]], E.call(T), U.brush());
        }

        function nt() {
          if ((0, u.nopropagation)(), r.event.touches) {
            if (r.event.touches.length) return;
            l && clearTimeout(l), l = setTimeout(function () {
              l = null;
            }, 500), W.on("touchmove.brush touchend.brush touchcancel.brush", null);
          } else (0, e.dragEnable)(r.event.view, P), $.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);

          W.attr("pointer-events", "all"), Z.attr("cursor", b.overlay), X.selection && (B = X.selection), O(B) && (X.selection = null, E.call(T)), U.end();
        }
      }

      function T() {
        var t = this.__brush || {
          selection: null
        };
        return t.extent = y.apply(this, arguments), t.dim = o, t;
      }

      return P.move = function (t, e) {
        t.selection ? t.on("start.brush", function () {
          K(this, arguments).beforestart().start();
        }).on("interrupt.brush end.brush", function () {
          K(this, arguments).end();
        }).tween("brush", function () {
          var t = this,
              r = t.__brush,
              s = K(t, arguments),
              a = r.selection,
              i = o.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
              u = (0, n.interpolate)(a, i);

          function l(e) {
            r.selection = 1 === e && O(i) ? null : u(e), E.call(t), s.brush();
          }

          return a && i ? l : l(1);
        }) : t.each(function () {
          var t = arguments,
              n = this.__brush,
              r = o.input("function" == typeof e ? e.apply(this, t) : e, n.extent),
              a = K(this, t).beforestart();
          (0, s.interrupt)(this), n.selection = null == r || O(r) ? null : r, E.call(this), a.start().brush().end();
        });
      }, D.prototype = {
        beforestart: function beforestart() {
          return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
        },
        start: function start() {
          return this.starting && (this.starting = !1, this.emit("start")), this;
        },
        brush: function brush() {
          return this.emit("brush"), this;
        },
        end: function end() {
          return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this;
        },
        emit: function emit(t) {
          (0, r.customEvent)(new i.default(P, t, o.output(this.state.selection)), A.apply, A, [t, this.that, this.args]);
        }
      }, P.extent = function (t) {
        return arguments.length ? (y = "function" == typeof t ? t : (0, a.default)([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), P) : y;
      }, P.filter = function (t) {
        return arguments.length ? (q = "function" == typeof t ? t : (0, a.default)(!!t), P) : q;
      }, P.handleSize = function (t) {
        return arguments.length ? (j = +t, P) : j;
      }, P.on = function () {
        var t = A.on.apply(A, arguments);
        return t === A ? P : t;
      }, P;
    }
  }, {
    "d3-dispatch": "UU/c",
    "d3-drag": "LrBi",
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "./constant": "5O/Y",
    "./event": "iX60",
    "./noevent": "DCEg"
  }],
  "TNt0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "brush", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "brushX", {
      enumerable: !0,
      get: function get() {
        return e.brushX;
      }
    }), Object.defineProperty(exports, "brushY", {
      enumerable: !0,
      get: function get() {
        return e.brushY;
      }
    }), Object.defineProperty(exports, "brushSelection", {
      enumerable: !0,
      get: function get() {
        return e.brushSelection;
      }
    });
    var e = r(require("./brush"));

    function r(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./brush": "HwJw"
  }],
  "z+rd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.max = exports.tau = exports.halfPi = exports.pi = exports.sin = exports.cos = void 0;
    var t = Math.cos;
    exports.cos = t;
    var r = Math.sin;
    exports.sin = r;
    var s = Math.PI;
    exports.pi = s;
    var e = s / 2;
    exports.halfPi = e;
    var o = 2 * s;
    exports.tau = o;
    var a = Math.max;
    exports.max = a;
  }, {}],
  "YLYV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var r = require("d3-array"),
        e = require("./math");

    function n(r) {
      return function (e, n) {
        return r(e.source.value + e.target.value, n.source.value + n.target.value);
      };
    }

    function u() {
      var u = 0,
          t = null,
          a = null,
          o = null;

      function l(n) {
        var l,
            s,
            f,
            c,
            g,
            i,
            v = n.length,
            d = [],
            h = (0, r.range)(v),
            p = [],
            x = [],
            A = x.groups = new Array(v),
            y = new Array(v * v);

        for (l = 0, g = -1; ++g < v;) {
          for (s = 0, i = -1; ++i < v;) {
            s += n[g][i];
          }

          d.push(s), p.push((0, r.range)(v)), l += s;
        }

        for (t && h.sort(function (r, e) {
          return t(d[r], d[e]);
        }), a && p.forEach(function (r, e) {
          r.sort(function (r, u) {
            return a(n[e][r], n[e][u]);
          });
        }), c = (l = (0, e.max)(0, e.tau - u * v) / l) ? u : e.tau / v, s = 0, g = -1; ++g < v;) {
          for (f = s, i = -1; ++i < v;) {
            var _ = h[g],
                b = p[_][i],
                m = n[_][b],
                q = s,
                w = s += m * l;
            y[b * v + _] = {
              index: _,
              subindex: b,
              startAngle: q,
              endAngle: w,
              value: m
            };
          }

          A[_] = {
            index: _,
            startAngle: f,
            endAngle: s,
            value: d[_]
          }, s += c;
        }

        for (g = -1; ++g < v;) {
          for (i = g - 1; ++i < v;) {
            var j = y[i * v + g],
                C = y[g * v + i];
            (j.value || C.value) && x.push(j.value < C.value ? {
              source: C,
              target: j
            } : {
              source: j,
              target: C
            });
          }
        }

        return o ? x.sort(o) : x;
      }

      return l.padAngle = function (r) {
        return arguments.length ? (u = (0, e.max)(0, r), l) : u;
      }, l.sortGroups = function (r) {
        return arguments.length ? (t = r, l) : t;
      }, l.sortSubgroups = function (r) {
        return arguments.length ? (a = r, l) : a;
      }, l.sortChords = function (r) {
        return arguments.length ? (null == r ? o = null : (o = n(r))._ = r, l) : o && o._;
      }, l;
    }
  }, {
    "d3-array": "cBuZ",
    "./math": "z+rd"
  }],
  "E5FC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = Math.PI,
        i = 2 * t,
        s = 1e-6,
        h = i - s;

    function _() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }

    function n() {
      return new _();
    }

    _.prototype = n.prototype = {
      constructor: _,
      moveTo: function moveTo(t, i) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i);
      },
      closePath: function closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      },
      lineTo: function lineTo(t, i) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +i);
      },
      quadraticCurveTo: function quadraticCurveTo(t, i, s, h) {
        this._ += "Q" + +t + "," + +i + "," + (this._x1 = +s) + "," + (this._y1 = +h);
      },
      bezierCurveTo: function bezierCurveTo(t, i, s, h, _, n) {
        this._ += "C" + +t + "," + +i + "," + +s + "," + +h + "," + (this._x1 = +_) + "," + (this._y1 = +n);
      },
      arcTo: function arcTo(i, h, _, n, e) {
        i = +i, h = +h, _ = +_, n = +n, e = +e;
        var r = this._x1,
            o = this._y1,
            a = _ - i,
            u = n - h,
            x = r - i,
            c = o - h,
            y = x * x + c * c;
        if (e < 0) throw new Error("negative radius: " + e);
        if (null === this._x1) this._ += "M" + (this._x1 = i) + "," + (this._y1 = h);else if (y > s) {
          if (Math.abs(c * a - u * x) > s && e) {
            var f = _ - r,
                M = n - o,
                l = a * a + u * u,
                v = f * f + M * M,
                d = Math.sqrt(l),
                p = Math.sqrt(y),
                b = e * Math.tan((t - Math.acos((l + y - v) / (2 * d * p))) / 2),
                w = b / p,
                T = b / d;
            Math.abs(w - 1) > s && (this._ += "L" + (i + w * x) + "," + (h + w * c)), this._ += "A" + e + "," + e + ",0,0," + +(c * f > x * M) + "," + (this._x1 = i + T * a) + "," + (this._y1 = h + T * u);
          } else this._ += "L" + (this._x1 = i) + "," + (this._y1 = h);
        } else ;
      },
      arc: function arc(_, n, e, r, o, a) {
        _ = +_, n = +n;
        var u = (e = +e) * Math.cos(r),
            x = e * Math.sin(r),
            c = _ + u,
            y = n + x,
            f = 1 ^ a,
            M = a ? r - o : o - r;
        if (e < 0) throw new Error("negative radius: " + e);
        null === this._x1 ? this._ += "M" + c + "," + y : (Math.abs(this._x1 - c) > s || Math.abs(this._y1 - y) > s) && (this._ += "L" + c + "," + y), e && (M < 0 && (M = M % i + i), M > h ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (_ - u) + "," + (n - x) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = y) : M > s && (this._ += "A" + e + "," + e + ",0," + +(M >= t) + "," + f + "," + (this._x1 = _ + e * Math.cos(o)) + "," + (this._y1 = n + e * Math.sin(o))));
      },
      rect: function rect(t, i, s, h) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i) + "h" + +s + "v" + +h + "h" + -s + "Z";
      },
      toString: function toString() {
        return this._;
      }
    };
    var e = n;
    exports.default = e;
  }, {}],
  "dz42": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "path", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./path"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./path": "E5FC"
  }],
  "ootM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = require("./array"),
        n = u(require("./constant")),
        e = require("./math"),
        r = require("d3-path");

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function l(t) {
      return t.source;
    }

    function i(t) {
      return t.target;
    }

    function a(t) {
      return t.radius;
    }

    function o(t) {
      return t.startAngle;
    }

    function c(t) {
      return t.endAngle;
    }

    function f() {
      var u = l,
          f = i,
          s = a,
          p = o,
          h = c,
          d = null;

      function y() {
        var n,
            l = t.slice.call(arguments),
            i = u.apply(this, l),
            a = f.apply(this, l),
            o = +s.apply(this, (l[0] = i, l)),
            c = p.apply(this, l) - e.halfPi,
            y = h.apply(this, l) - e.halfPi,
            g = o * (0, e.cos)(c),
            v = o * (0, e.sin)(c),
            q = +s.apply(this, (l[0] = a, l)),
            P = p.apply(this, l) - e.halfPi,
            A = h.apply(this, l) - e.halfPi;
        if (d || (d = n = (0, r.path)()), d.moveTo(g, v), d.arc(0, 0, o, c, y), c === P && y === A || (d.quadraticCurveTo(0, 0, q * (0, e.cos)(P), q * (0, e.sin)(P)), d.arc(0, 0, q, P, A)), d.quadraticCurveTo(0, 0, g, v), d.closePath(), n) return d = null, n + "" || null;
      }

      return y.radius = function (t) {
        return arguments.length ? (s = "function" == typeof t ? t : (0, n.default)(+t), y) : s;
      }, y.startAngle = function (t) {
        return arguments.length ? (p = "function" == typeof t ? t : (0, n.default)(+t), y) : p;
      }, y.endAngle = function (t) {
        return arguments.length ? (h = "function" == typeof t ? t : (0, n.default)(+t), y) : h;
      }, y.source = function (t) {
        return arguments.length ? (u = t, y) : u;
      }, y.target = function (t) {
        return arguments.length ? (f = t, y) : f;
      }, y.context = function (t) {
        return arguments.length ? (d = null == t ? null : t, y) : d;
      }, y;
    }
  }, {
    "./array": "rv5q",
    "./constant": "5O/Y",
    "./math": "z+rd",
    "d3-path": "dz42"
  }],
  "cf1+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "chord", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "ribbon", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });
    var e = t(require("./chord")),
        r = t(require("./ribbon"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./chord": "YLYV",
    "./ribbon": "ootM"
  }],
  "wD+C": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.prefix = void 0;
    var t = "$";

    function r() {}

    function e(t, e) {
      var i = new r();
      if (t instanceof r) t.each(function (t, r) {
        i.set(r, t);
      });else if (Array.isArray(t)) {
        var n,
            s = -1,
            o = t.length;
        if (null == e) for (; ++s < o;) {
          i.set(s, t[s]);
        } else for (; ++s < o;) {
          i.set(e(n = t[s], s, t), n);
        }
      } else if (t) for (var u in t) {
        i.set(u, t[u]);
      }
      return i;
    }

    exports.prefix = t, r.prototype = e.prototype = {
      constructor: r,
      has: function has(r) {
        return t + r in this;
      },
      get: function get(r) {
        return this[t + r];
      },
      set: function set(r, e) {
        return this[t + r] = e, this;
      },
      remove: function remove(r) {
        var e = t + r;
        return e in this && delete this[e];
      },
      clear: function clear() {
        for (var r in this) {
          r[0] === t && delete this[r];
        }
      },
      keys: function keys() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push(e.slice(1));
        }

        return r;
      },
      values: function values() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push(this[e]);
        }

        return r;
      },
      entries: function entries() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push({
            key: e.slice(1),
            value: this[e]
          });
        }

        return r;
      },
      size: function size() {
        var r = 0;

        for (var e in this) {
          e[0] === t && ++r;
        }

        return r;
      },
      empty: function empty() {
        for (var r in this) {
          if (r[0] === t) return !1;
        }

        return !0;
      },
      each: function each(r) {
        for (var e in this) {
          e[0] === t && r(this[e], e.slice(1), this);
        }
      }
    };
    var i = e;
    exports.default = i;
  }, {}],
  "6TaN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var n = t(require("./map"));

    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function e() {
      var t,
          e,
          i,
          l = [],
          c = [];

      function s(u, r, o, f) {
        if (r >= l.length) return null != t && u.sort(t), null != e ? e(u) : u;

        for (var i, c, a, h = -1, p = u.length, d = l[r++], g = (0, n.default)(), v = o(); ++h < p;) {
          (a = g.get(i = d(c = u[h]) + "")) ? a.push(c) : g.set(i, [c]);
        }

        return g.each(function (n, t) {
          f(v, t, s(n, r, o, f));
        }), v;
      }

      return i = {
        object: function object(n) {
          return s(n, 0, u, r);
        },
        map: function map(n) {
          return s(n, 0, o, f);
        },
        entries: function entries(n) {
          return function n(t, u) {
            if (++u > l.length) return t;
            var r,
                o = c[u - 1];
            return null != e && u >= l.length ? r = t.entries() : (r = [], t.each(function (t, e) {
              r.push({
                key: e,
                values: n(t, u)
              });
            })), null != o ? r.sort(function (n, t) {
              return o(n.key, t.key);
            }) : r;
          }(s(n, 0, o, f), 0);
        },
        key: function key(n) {
          return l.push(n), i;
        },
        sortKeys: function sortKeys(n) {
          return c[l.length - 1] = n, i;
        },
        sortValues: function sortValues(n) {
          return t = n, i;
        },
        rollup: function rollup(n) {
          return e = n, i;
        }
      };
    }

    function u() {
      return {};
    }

    function r(n, t, e) {
      n[t] = e;
    }

    function o() {
      return (0, n.default)();
    }

    function f(n, t, e) {
      n.set(t, e);
    }
  }, {
    "./map": "wD+C"
  }],
  "/fgw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("./map"));

    function r(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function t() {}

    var o = e.default.prototype;

    function a(e, r) {
      var o = new t();
      if (e instanceof t) e.each(function (e) {
        o.add(e);
      });else if (e) {
        var a = -1,
            n = e.length;
        if (null == r) for (; ++a < n;) {
          o.add(e[a]);
        } else for (; ++a < n;) {
          o.add(r(e[a], a, e));
        }
      }
      return o;
    }

    t.prototype = a.prototype = {
      constructor: t,
      has: o.has,
      add: function add(r) {
        return r += "", this[e.prefix + r] = r, this;
      },
      remove: o.remove,
      clear: o.clear,
      values: o.keys,
      size: o.size,
      empty: o.empty,
      each: o.each
    };
    var n = a;
    exports.default = n;
  }, {
    "./map": "wD+C"
  }],
  "S/tS": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push(t);
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "wANB": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push(e[t]);
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "u9ZW": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push({
          key: t,
          value: e[t]
        });
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "qqV1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "nest", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "set", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "map", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "keys", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "values", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "entries", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    });
    var e = o(require("./nest")),
        r = o(require("./set")),
        t = o(require("./map")),
        u = o(require("./keys")),
        n = o(require("./values")),
        i = o(require("./entries"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./nest": "6TaN",
    "./set": "/fgw",
    "./map": "wD+C",
    "./keys": "S/tS",
    "./values": "wANB",
    "./entries": "u9ZW"
  }],
  "+IBm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.slice = void 0;
    var e = Array.prototype,
        r = e.slice;
    exports.slice = r;
  }, {}],
  "8ldh": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return e - t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hcn/": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t = 0, r = e.length, o = e[r - 1][1] * e[0][0] - e[r - 1][0] * e[0][1]; ++t < r;) {
        o += e[t - 1][1] * e[t][0] - e[t - 1][0] * e[t][1];
      }

      return o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "GiY2": [function (require, module, exports) {
    "use strict";

    function r(r, e) {
      for (var n, u = -1, f = e.length; ++u < f;) {
        if (n = t(r, e[u])) return n;
      }

      return 0;
    }

    function t(r, t) {
      for (var n = t[0], u = t[1], f = -1, o = 0, i = r.length, c = i - 1; o < i; c = o++) {
        var a = r[o],
            l = a[0],
            s = a[1],
            v = r[c],
            d = v[0],
            p = v[1];
        if (e(a, v, t)) return 0;
        s > u != p > u && n < (d - l) * (u - s) / (p - s) + l && (f = -f);
      }

      return f;
    }

    function e(r, t, e) {
      var f;
      return n(r, t, e) && u(r[f = +(r[0] === t[0])], e[f], t[f]);
    }

    function n(r, t, e) {
      return (t[0] - r[0]) * (e[1] - r[1]) == (e[0] - r[0]) * (t[1] - r[1]);
    }

    function u(r, t, e) {
      return r <= t && t <= e || e <= t && t <= r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
  }, {}],
  "BhKh": [function (require, module, exports) {
    "use strict";

    function e() {}

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "oKpg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var r = require("d3-array"),
        e = require("./array"),
        t = u(require("./ascending")),
        n = u(require("./area")),
        a = u(require("./constant")),
        o = u(require("./contains")),
        i = u(require("./noop"));

    function u(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var f = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []];

    function c() {
      var u = 1,
          c = 1,
          s = r.thresholdSturges,
          l = v;

      function d(e) {
        var n = s(e);
        if (Array.isArray(n)) n = n.slice().sort(t.default);else {
          var a = (0, r.extent)(e),
              o = a[0],
              i = a[1];
          n = (0, r.tickStep)(o, i, n), n = (0, r.range)(Math.floor(o / n) * n, Math.floor(i / n) * n, n);
        }
        return n.map(function (r) {
          return h(e, r);
        });
      }

      function h(r, e) {
        var t = [],
            a = [];
        return function (r, e, t) {
          var n,
              a,
              o,
              i,
              s,
              l,
              d = new Array(),
              h = new Array();
          n = a = -1, i = r[0] >= e, f[i << 1].forEach(v);

          for (; ++n < u - 1;) {
            o = i, i = r[n + 1] >= e, f[o | i << 1].forEach(v);
          }

          f[i << 0].forEach(v);

          for (; ++a < c - 1;) {
            for (n = -1, i = r[a * u + u] >= e, s = r[a * u] >= e, f[i << 1 | s << 2].forEach(v); ++n < u - 1;) {
              o = i, i = r[a * u + u + n + 1] >= e, l = s, s = r[a * u + n + 1] >= e, f[o | i << 1 | s << 2 | l << 3].forEach(v);
            }

            f[i | s << 3].forEach(v);
          }

          n = -1, s = r[a * u] >= e, f[s << 2].forEach(v);

          for (; ++n < u - 1;) {
            l = s, s = r[a * u + n + 1] >= e, f[s << 2 | l << 3].forEach(v);
          }

          function v(r) {
            var e,
                o,
                i = [r[0][0] + n, r[0][1] + a],
                u = [r[1][0] + n, r[1][1] + a],
                f = g(i),
                c = g(u);
            (e = h[f]) ? (o = d[c]) ? (delete h[e.end], delete d[o.start], e === o ? (e.ring.push(u), t(e.ring)) : d[e.start] = h[o.end] = {
              start: e.start,
              end: o.end,
              ring: e.ring.concat(o.ring)
            }) : (delete h[e.end], e.ring.push(u), h[e.end = c] = e) : (e = d[c]) ? (o = h[f]) ? (delete d[e.start], delete h[o.end], e === o ? (e.ring.push(u), t(e.ring)) : d[o.start] = h[e.end] = {
              start: o.start,
              end: e.end,
              ring: o.ring.concat(e.ring)
            }) : (delete d[e.start], e.ring.unshift(i), d[e.start = f] = e) : d[f] = h[c] = {
              start: f,
              end: c,
              ring: [i, u]
            };
          }

          f[s << 3].forEach(v);
        }(r, e, function (o) {
          l(o, r, e), (0, n.default)(o) > 0 ? t.push([o]) : a.push(o);
        }), a.forEach(function (r) {
          for (var e, n = 0, a = t.length; n < a; ++n) {
            if (-1 !== (0, o.default)((e = t[n])[0], r)) return void e.push(r);
          }
        }), {
          type: "MultiPolygon",
          value: e,
          coordinates: t
        };
      }

      function g(r) {
        return 2 * r[0] + r[1] * (u + 1) * 4;
      }

      function v(r, e, t) {
        r.forEach(function (r) {
          var n,
              a = r[0],
              o = r[1],
              i = 0 | a,
              f = 0 | o,
              s = e[f * u + i];
          a > 0 && a < u && i === a && (n = e[f * u + i - 1], r[0] = a + (t - n) / (s - n) - .5), o > 0 && o < c && f === o && (n = e[(f - 1) * u + i], r[1] = o + (t - n) / (s - n) - .5);
        });
      }

      return d.contour = h, d.size = function (r) {
        if (!arguments.length) return [u, c];
        var e = Math.ceil(r[0]),
            t = Math.ceil(r[1]);
        if (!(e > 0 && t > 0)) throw new Error("invalid size");
        return u = e, c = t, d;
      }, d.thresholds = function (r) {
        return arguments.length ? (s = "function" == typeof r ? r : Array.isArray(r) ? (0, a.default)(e.slice.call(r)) : (0, a.default)(r), d) : s;
      }, d.smooth = function (r) {
        return arguments.length ? (l = r ? v : i.default, d) : l === v;
      }, d;
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "+IBm",
    "./ascending": "8ldh",
    "./area": "hcn/",
    "./constant": "5O/Y",
    "./contains": "GiY2",
    "./noop": "BhKh"
  }],
  "yZ0K": [function (require, module, exports) {
    "use strict";

    function t(t, a, r) {
      for (var e = t.width, o = t.height, d = 1 + (r << 1), i = 0; i < o; ++i) {
        for (var h = 0, f = 0; h < e + r; ++h) {
          h < e && (f += t.data[h + i * e]), h >= r && (h >= d && (f -= t.data[h - d + i * e]), a.data[h - r + i * e] = f / Math.min(h + 1, e - 1 + d - h, d));
        }
      }
    }

    function a(t, a, r) {
      for (var e = t.width, o = t.height, d = 1 + (r << 1), i = 0; i < e; ++i) {
        for (var h = 0, f = 0; h < o + r; ++h) {
          h < o && (f += t.data[i + h * e]), h >= r && (h >= d && (f -= t.data[i + (h - d) * e]), a.data[i + (h - r) * e] = f / Math.min(h + 1, o - 1 + d - h, d));
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.blurX = t, exports.blurY = a;
  }, {}],
  "9VOW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = require("d3-array"),
        r = require("./array"),
        e = require("./blur"),
        n = a(require("./constant")),
        i = a(require("./contours"));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t) {
      return t[0];
    }

    function u(t) {
      return t[1];
    }

    function o() {
      return 1;
    }

    function f() {
      var a = h,
          f = u,
          d = o,
          l = 960,
          c = 500,
          w = 20,
          s = 2,
          g = 3 * w,
          y = l + 2 * g >> s,
          M = c + 2 * g >> s,
          p = (0, n.default)(20);

      function v(r) {
        var n = new Float32Array(y * M),
            h = new Float32Array(y * M);
        r.forEach(function (t, r, e) {
          var i = +a(t, r, e) + g >> s,
              h = +f(t, r, e) + g >> s,
              u = +d(t, r, e);
          i >= 0 && i < y && h >= 0 && h < M && (n[i + h * y] += u);
        }), (0, e.blurX)({
          width: y,
          height: M,
          data: n
        }, {
          width: y,
          height: M,
          data: h
        }, w >> s), (0, e.blurY)({
          width: y,
          height: M,
          data: h
        }, {
          width: y,
          height: M,
          data: n
        }, w >> s), (0, e.blurX)({
          width: y,
          height: M,
          data: n
        }, {
          width: y,
          height: M,
          data: h
        }, w >> s), (0, e.blurY)({
          width: y,
          height: M,
          data: h
        }, {
          width: y,
          height: M,
          data: n
        }, w >> s), (0, e.blurX)({
          width: y,
          height: M,
          data: n
        }, {
          width: y,
          height: M,
          data: h
        }, w >> s), (0, e.blurY)({
          width: y,
          height: M,
          data: h
        }, {
          width: y,
          height: M,
          data: n
        }, w >> s);
        var u = p(n);

        if (!Array.isArray(u)) {
          var o = (0, t.max)(n);
          u = (0, t.tickStep)(0, o, u), (u = (0, t.range)(0, Math.floor(o / u) * u, u)).shift();
        }

        return (0, i.default)().thresholds(u).size([y, M])(n).map(b);
      }

      function b(t) {
        return t.value *= Math.pow(2, -2 * s), t.coordinates.forEach(q), t;
      }

      function q(t) {
        t.forEach(E);
      }

      function E(t) {
        t.forEach(A);
      }

      function A(t) {
        t[0] = t[0] * Math.pow(2, s) - g, t[1] = t[1] * Math.pow(2, s) - g;
      }

      function z() {
        return y = l + 2 * (g = 3 * w) >> s, M = c + 2 * g >> s, v;
      }

      return v.x = function (t) {
        return arguments.length ? (a = "function" == typeof t ? t : (0, n.default)(+t), v) : a;
      }, v.y = function (t) {
        return arguments.length ? (f = "function" == typeof t ? t : (0, n.default)(+t), v) : f;
      }, v.weight = function (t) {
        return arguments.length ? (d = "function" == typeof t ? t : (0, n.default)(+t), v) : d;
      }, v.size = function (t) {
        if (!arguments.length) return [l, c];
        var r = Math.ceil(t[0]),
            e = Math.ceil(t[1]);
        if (!(r >= 0 || r >= 0)) throw new Error("invalid size");
        return l = r, c = e, z();
      }, v.cellSize = function (t) {
        if (!arguments.length) return 1 << s;
        if (!((t = +t) >= 1)) throw new Error("invalid cell size");
        return s = Math.floor(Math.log(t) / Math.LN2), z();
      }, v.thresholds = function (t) {
        return arguments.length ? (p = "function" == typeof t ? t : Array.isArray(t) ? (0, n.default)(r.slice.call(t)) : (0, n.default)(t), v) : p;
      }, v.bandwidth = function (t) {
        if (!arguments.length) return Math.sqrt(w * (w + 1));
        if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
        return w = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), z();
      }, v;
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "+IBm",
    "./blur": "yZ0K",
    "./constant": "5O/Y",
    "./contours": "oKpg"
  }],
  "cfrl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "contours", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "contourDensity", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    });
    var e = r(require("./contours")),
        t = r(require("./density"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./contours": "oKpg",
    "./density": "9VOW"
  }],
  "7SC/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;
    var n = {},
        r = {},
        t = 34,
        e = 10,
        u = 13;

    function o(n) {
      return new Function("d", "return {" + n.map(function (n, r) {
        return JSON.stringify(n) + ": d[" + r + "]";
      }).join(",") + "}");
    }

    function i(n, r) {
      var t = o(n);
      return function (e, u) {
        return r(t(e), u, n);
      };
    }

    function c(n) {
      var r = Object.create(null),
          t = [];
      return n.forEach(function (n) {
        for (var e in n) {
          e in r || t.push(r[e] = e);
        }
      }), t;
    }

    function a(n, r) {
      var t = n + "",
          e = t.length;
      return e < r ? new Array(r - e + 1).join(0) + t : t;
    }

    function f(n) {
      return n < 0 ? "-" + a(-n, 6) : n > 9999 ? "+" + a(n, 6) : a(n, 4);
    }

    function l(n) {
      var r = n.getUTCHours(),
          t = n.getUTCMinutes(),
          e = n.getUTCSeconds(),
          u = n.getUTCMilliseconds();
      return isNaN(n) ? "Invalid Date" : f(n.getUTCFullYear(), 4) + "-" + a(n.getUTCMonth() + 1, 2) + "-" + a(n.getUTCDate(), 2) + (u ? "T" + a(r, 2) + ":" + a(t, 2) + ":" + a(e, 2) + "." + a(u, 3) + "Z" : e ? "T" + a(r, 2) + ":" + a(t, 2) + ":" + a(e, 2) + "Z" : t || r ? "T" + a(r, 2) + ":" + a(t, 2) + "Z" : "");
    }

    function s(a) {
      var f = new RegExp('["' + a + "\n\r]"),
          s = a.charCodeAt(0);

      function d(o, i) {
        var c,
            a = [],
            f = o.length,
            l = 0,
            d = 0,
            h = f <= 0,
            p = !1;

        function C() {
          if (h) return r;
          if (p) return p = !1, n;
          var i,
              c,
              a = l;

          if (o.charCodeAt(a) === t) {
            for (; l++ < f && o.charCodeAt(l) !== t || o.charCodeAt(++l) === t;) {
              ;
            }

            return (i = l) >= f ? h = !0 : (c = o.charCodeAt(l++)) === e ? p = !0 : c === u && (p = !0, o.charCodeAt(l) === e && ++l), o.slice(a + 1, i - 1).replace(/""/g, '"');
          }

          for (; l < f;) {
            if ((c = o.charCodeAt(i = l++)) === e) p = !0;else if (c === u) p = !0, o.charCodeAt(l) === e && ++l;else if (c !== s) continue;
            return o.slice(a, i);
          }

          return h = !0, o.slice(a, f);
        }

        for (o.charCodeAt(f - 1) === e && --f, o.charCodeAt(f - 1) === u && --f; (c = C()) !== r;) {
          for (var g = []; c !== n && c !== r;) {
            g.push(c), c = C();
          }

          i && null == (g = i(g, d++)) || a.push(g);
        }

        return a;
      }

      function h(n, r) {
        return n.map(function (n) {
          return r.map(function (r) {
            return C(n[r]);
          }).join(a);
        });
      }

      function p(n) {
        return n.map(C).join(a);
      }

      function C(n) {
        return null == n ? "" : n instanceof Date ? l(n) : f.test(n += "") ? '"' + n.replace(/"/g, '""') + '"' : n;
      }

      return {
        parse: function parse(n, r) {
          var t,
              e,
              u = d(n, function (n, u) {
            if (t) return t(n, u - 1);
            e = n, t = r ? i(n, r) : o(n);
          });
          return u.columns = e || [], u;
        },
        parseRows: d,
        format: function format(n, r) {
          return null == r && (r = c(n)), [r.map(C).join(a)].concat(h(n, r)).join("\n");
        },
        formatBody: function formatBody(n, r) {
          return null == r && (r = c(n)), h(n, r).join("\n");
        },
        formatRows: function formatRows(n) {
          return n.map(p).join("\n");
        }
      };
    }
  }, {}],
  "mU2J": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.csvFormatRows = exports.csvFormatBody = exports.csvFormat = exports.csvParseRows = exports.csvParse = void 0;
    var r = s(require("./dsv"));

    function s(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var o = (0, r.default)(","),
        e = o.parse;
    exports.csvParse = e;
    var t = o.parseRows;
    exports.csvParseRows = t;
    var a = o.format;
    exports.csvFormat = a;
    var v = o.formatBody;
    exports.csvFormatBody = v;
    var p = o.formatRows;
    exports.csvFormatRows = p;
  }, {
    "./dsv": "7SC/"
  }],
  "zpVZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.tsvFormatRows = exports.tsvFormatBody = exports.tsvFormat = exports.tsvParseRows = exports.tsvParse = void 0;
    var r = t(require("./dsv"));

    function t(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var s = (0, r.default)("\t"),
        o = s.parse;
    exports.tsvParse = o;
    var e = s.parseRows;
    exports.tsvParseRows = e;
    var a = s.format;
    exports.tsvFormat = a;
    var v = s.formatBody;
    exports.tsvFormatBody = v;
    var p = s.formatRows;
    exports.tsvFormatRows = p;
  }, {
    "./dsv": "7SC/"
  }],
  "7bjL": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t in e) {
        var d,
            i = e[t].trim();
        if (i) {
          if ("true" === i) i = !0;else if ("false" === i) i = !1;else if ("NaN" === i) i = NaN;else if (isNaN(d = +i)) {
            if (!/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/.test(i)) continue;
            i = new Date(i);
          } else i = d;
        } else i = null;
        e[t] = i;
      }

      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "mQVF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "dsvFormat", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "csvParse", {
      enumerable: !0,
      get: function get() {
        return r.csvParse;
      }
    }), Object.defineProperty(exports, "csvParseRows", {
      enumerable: !0,
      get: function get() {
        return r.csvParseRows;
      }
    }), Object.defineProperty(exports, "csvFormat", {
      enumerable: !0,
      get: function get() {
        return r.csvFormat;
      }
    }), Object.defineProperty(exports, "csvFormatBody", {
      enumerable: !0,
      get: function get() {
        return r.csvFormatBody;
      }
    }), Object.defineProperty(exports, "csvFormatRows", {
      enumerable: !0,
      get: function get() {
        return r.csvFormatRows;
      }
    }), Object.defineProperty(exports, "tsvParse", {
      enumerable: !0,
      get: function get() {
        return t.tsvParse;
      }
    }), Object.defineProperty(exports, "tsvParseRows", {
      enumerable: !0,
      get: function get() {
        return t.tsvParseRows;
      }
    }), Object.defineProperty(exports, "tsvFormat", {
      enumerable: !0,
      get: function get() {
        return t.tsvFormat;
      }
    }), Object.defineProperty(exports, "tsvFormatBody", {
      enumerable: !0,
      get: function get() {
        return t.tsvFormatBody;
      }
    }), Object.defineProperty(exports, "tsvFormatRows", {
      enumerable: !0,
      get: function get() {
        return t.tsvFormatRows;
      }
    }), Object.defineProperty(exports, "autoType", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    });

    var e = n(require("./dsv")),
        r = require("./csv"),
        t = require("./tsv"),
        o = n(require("./autoType"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./dsv": "7SC/",
    "./csv": "mU2J",
    "./tsv": "zpVZ",
    "./autoType": "7bjL"
  }],
  "NEvU": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.blob();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "W4GS": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.arrayBuffer();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "/QFe": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.text();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "fvyQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u, exports.tsv = exports.csv = void 0;

    var e = require("d3-dsv"),
        t = r(require("./text"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e) {
      return function (r, n, u) {
        return 2 === arguments.length && "function" == typeof n && (u = n, n = void 0), (0, t.default)(r, n).then(function (t) {
          return e(t, u);
        });
      };
    }

    function u(r, n, u, o) {
      3 === arguments.length && "function" == typeof u && (o = u, u = void 0);
      var s = (0, e.dsvFormat)(r);
      return (0, t.default)(n, u).then(function (e) {
        return s.parse(e, o);
      });
    }

    var o = n(e.csvParse);
    exports.csv = o;
    var s = n(e.tsvParse);
    exports.tsv = s;
  }, {
    "d3-dsv": "mQVF",
    "./text": "/QFe"
  }],
  "oqjg": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      return new Promise(function (n, o) {
        var t = new Image();

        for (var u in r) {
          t[u] = r[u];
        }

        t.onerror = o, t.onload = function () {
          n(t);
        }, t.src = e;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Lvc+": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.json();
    }

    function e(e, r) {
      return fetch(e, r).then(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "FRc5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.svg = exports.html = exports.default = void 0;
    var e = t(require("./text"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return function (r, n) {
        return (0, e.default)(r, n).then(function (e) {
          return new DOMParser().parseFromString(e, t);
        });
      };
    }

    var n = r("application/xml");
    exports.default = n;
    var o = r("text/html");
    exports.html = o;
    var u = r("image/svg+xml");
    exports.svg = u;
  }, {
    "./text": "/QFe"
  }],
  "hNko": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "blob", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "buffer", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "dsv", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "csv", {
      enumerable: !0,
      get: function get() {
        return t.csv;
      }
    }), Object.defineProperty(exports, "tsv", {
      enumerable: !0,
      get: function get() {
        return t.tsv;
      }
    }), Object.defineProperty(exports, "image", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "text", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "xml", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "html", {
      enumerable: !0,
      get: function get() {
        return f.html;
      }
    }), Object.defineProperty(exports, "svg", {
      enumerable: !0,
      get: function get() {
        return f.svg;
      }
    });
    var e = c(require("./blob")),
        r = c(require("./buffer")),
        t = i(require("./dsv")),
        n = c(require("./image")),
        u = c(require("./json")),
        o = c(require("./text")),
        f = i(require("./xml"));

    function i(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./blob": "NEvU",
    "./buffer": "W4GS",
    "./dsv": "fvyQ",
    "./image": "oqjg",
    "./json": "Lvc+",
    "./text": "/QFe",
    "./xml": "FRc5"
  }],
  "y+F4": [function (require, module, exports) {
    "use strict";

    function n(n, t) {
      var e;

      function r() {
        var r,
            u,
            i = e.length,
            l = 0,
            o = 0;

        for (r = 0; r < i; ++r) {
          l += (u = e[r]).x, o += u.y;
        }

        for (l = l / i - n, o = o / i - t, r = 0; r < i; ++r) {
          (u = e[r]).x -= l, u.y -= o;
        }
      }

      return null == n && (n = 0), null == t && (t = 0), r.initialize = function (n) {
        e = n;
      }, r.x = function (t) {
        return arguments.length ? (n = +t, r) : n;
      }, r.y = function (n) {
        return arguments.length ? (t = +n, r) : t;
      }, r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "jmDl": [function (require, module, exports) {
    "use strict";

    function e() {
      return 1e-6 * (Math.random() - .5);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "c4hk": [function (require, module, exports) {
    "use strict";

    function r(r) {
      var l = +this._x.call(null, r),
          e = +this._y.call(null, r);
      return t(this.cover(l, e), l, e, r);
    }

    function t(r, t, l, e) {
      if (isNaN(t) || isNaN(l)) return r;

      var n,
          a,
          i,
          o,
          u,
          s,
          _,
          c,
          f,
          h = r._root,
          y = {
        data: e
      },
          d = r._x0,
          x = r._y0,
          N = r._x1,
          v = r._y1;

      if (!h) return r._root = y, r;

      for (; h.length;) {
        if ((s = t >= (a = (d + N) / 2)) ? d = a : N = a, (_ = l >= (i = (x + v) / 2)) ? x = i : v = i, n = h, !(h = h[c = _ << 1 | s])) return n[c] = y, r;
      }

      if (o = +r._x.call(null, h.data), u = +r._y.call(null, h.data), t === o && l === u) return y.next = h, n ? n[c] = y : r._root = y, r;

      do {
        n = n ? n[c] = new Array(4) : r._root = new Array(4), (s = t >= (a = (d + N) / 2)) ? d = a : N = a, (_ = l >= (i = (x + v) / 2)) ? x = i : v = i;
      } while ((c = _ << 1 | s) == (f = (u >= i) << 1 | o >= a));

      return n[f] = h, n[c] = y, r;
    }

    function l(r) {
      var l,
          e,
          n,
          a,
          i = r.length,
          o = new Array(i),
          u = new Array(i),
          s = 1 / 0,
          _ = 1 / 0,
          c = -1 / 0,
          f = -1 / 0;

      for (e = 0; e < i; ++e) {
        isNaN(n = +this._x.call(null, l = r[e])) || isNaN(a = +this._y.call(null, l)) || (o[e] = n, u[e] = a, n < s && (s = n), n > c && (c = n), a < _ && (_ = a), a > f && (f = a));
      }

      if (s > c || _ > f) return this;

      for (this.cover(s, _).cover(c, f), e = 0; e < i; ++e) {
        t(this, o[e], u[e], r[e]);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r, exports.addAll = l;
  }, {}],
  "DeJI": [function (require, module, exports) {
    "use strict";

    function t(t, s) {
      if (isNaN(t = +t) || isNaN(s = +s)) return this;
      var e = this._x0,
          i = this._y0,
          r = this._x1,
          h = this._y1;
      if (isNaN(e)) r = (e = Math.floor(t)) + 1, h = (i = Math.floor(s)) + 1;else {
        for (var o, a, _ = r - e, c = this._root; e > t || t >= r || i > s || s >= h;) {
          switch (a = (s < i) << 1 | t < e, (o = new Array(4))[a] = c, c = o, _ *= 2, a) {
            case 0:
              r = e + _, h = i + _;
              break;

            case 1:
              e = r - _, h = i + _;
              break;

            case 2:
              r = e + _, i = h - _;
              break;

            case 3:
              e = r - _, i = h - _;
          }
        }

        this._root && this._root.length && (this._root = c);
      }
      return this._x0 = e, this._y0 = i, this._x1 = r, this._y1 = h, this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "7HTB": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.visit(function (t) {
        if (!t.length) do {
          e.push(t.data);
        } while (t = t.next);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "JRL4": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "BPLw": [function (require, module, exports) {
    "use strict";

    function t(t, e, s, i, o) {
      this.node = t, this.x0 = e, this.y0 = s, this.x1 = i, this.y1 = o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "2t1g": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = t(require("./quad"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(t, l, a) {
      var u,
          n,
          r,
          s,
          d,
          h,
          i,
          f = this._x0,
          o = this._y0,
          _ = this._x1,
          p = this._y1,
          x = [],
          c = this._root;

      for (c && x.push(new e.default(c, f, o, _, p)), null == a ? a = 1 / 0 : (f = t - a, o = l - a, _ = t + a, p = l + a, a *= a); h = x.pop();) {
        if (!(!(c = h.node) || (n = h.x0) > _ || (r = h.y0) > p || (s = h.x1) < f || (d = h.y1) < o)) if (c.length) {
          var v = (n + s) / 2,
              y = (r + d) / 2;
          x.push(new e.default(c[3], v, y, s, d), new e.default(c[2], n, y, v, d), new e.default(c[1], v, r, s, y), new e.default(c[0], n, r, v, y)), (i = (l >= y) << 1 | t >= v) && (h = x[x.length - 1], x[x.length - 1] = x[x.length - 1 - i], x[x.length - 1 - i] = h);
        } else {
          var g = t - +this._x.call(null, c.data),
              w = l - +this._y.call(null, c.data),
              q = g * g + w * w;

          if (q < a) {
            var M = Math.sqrt(a = q);
            f = t - M, o = l - M, _ = t + M, p = l + M, u = c.data;
          }
        }
      }

      return u;
    }
  }, {
    "./quad": "BPLw"
  }],
  "3wnj": [function (require, module, exports) {
    "use strict";

    function t(t) {
      if (isNaN(h = +this._x.call(null, t)) || isNaN(n = +this._y.call(null, t))) return this;
      var e,
          i,
          r,
          s,
          h,
          n,
          l,
          o,
          u,
          f,
          a,
          x,
          _ = this._root,
          d = this._x0,
          c = this._y0,
          v = this._x1,
          g = this._y1;
      if (!_) return this;
      if (_.length) for (;;) {
        if ((u = h >= (l = (d + v) / 2)) ? d = l : v = l, (f = n >= (o = (c + g) / 2)) ? c = o : g = o, e = _, !(_ = _[a = f << 1 | u])) return this;
        if (!_.length) break;
        (e[a + 1 & 3] || e[a + 2 & 3] || e[a + 3 & 3]) && (i = e, x = a);
      }

      for (; _.data !== t;) {
        if (r = _, !(_ = _.next)) return this;
      }

      return (s = _.next) && delete _.next, r ? (s ? r.next = s : delete r.next, this) : e ? (s ? e[a] = s : delete e[a], (_ = e[0] || e[1] || e[2] || e[3]) && _ === (e[3] || e[2] || e[1] || e[0]) && !_.length && (i ? i[x] = _ : this._root = _), this) : (this._root = s, this);
    }

    function e(t) {
      for (var e = 0, i = t.length; e < i; ++e) {
        this.remove(t[e]);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.removeAll = e;
  }, {}],
  "aU2q": [function (require, module, exports) {
    "use strict";

    function e() {
      return this._root;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "PC8q": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = 0;
      return this.visit(function (t) {
        if (!t.length) do {
          ++e;
        } while (t = t.next);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "MOvE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./quad"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t) {
      var u,
          s,
          r,
          n,
          a,
          d,
          f = [],
          h = this._root;

      for (h && f.push(new e.default(h, this._x0, this._y0, this._x1, this._y1)); u = f.pop();) {
        if (!t(h = u.node, r = u.x0, n = u.y0, a = u.x1, d = u.y1) && h.length) {
          var i = (r + a) / 2,
              o = (n + d) / 2;
          (s = h[3]) && f.push(new e.default(s, i, o, a, d)), (s = h[2]) && f.push(new e.default(s, r, o, i, d)), (s = h[1]) && f.push(new e.default(s, i, n, a, o)), (s = h[0]) && f.push(new e.default(s, r, n, i, o));
        }
      }

      return this;
    }
  }, {
    "./quad": "BPLw"
  }],
  "6Edv": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./quad"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t) {
      var u,
          r = [],
          s = [];

      for (this._root && r.push(new e.default(this._root, this._x0, this._y0, this._x1, this._y1)); u = r.pop();) {
        var o = u.node;

        if (o.length) {
          var n,
              h = u.x0,
              a = u.y0,
              d = u.x1,
              f = u.y1,
              i = (h + d) / 2,
              p = (a + f) / 2;
          (n = o[0]) && r.push(new e.default(n, h, a, i, p)), (n = o[1]) && r.push(new e.default(n, i, a, d, p)), (n = o[2]) && r.push(new e.default(n, h, p, i, f)), (n = o[3]) && r.push(new e.default(n, i, p, d, f));
        }

        s.push(u);
      }

      for (; u = s.pop();) {
        t(u.node, u.x0, u.y0, u.x1, u.y1);
      }

      return this;
    }
  }, {
    "./quad": "BPLw"
  }],
  "2+yq": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t[0];
    }

    function e(t) {
      return arguments.length ? (this._x = t, this) : this._x;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.defaultX = t, exports.default = e;
  }, {}],
  "FeNP": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t[1];
    }

    function e(t) {
      return arguments.length ? (this._y = t, this) : this._y;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.defaultY = t, exports.default = e;
  }, {}],
  "HCic": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = v;

    var e = _(require("./add")),
        t = c(require("./cover")),
        r = c(require("./data")),
        i = c(require("./extent")),
        a = c(require("./find")),
        u = _(require("./remove")),
        o = c(require("./root")),
        l = c(require("./size")),
        n = c(require("./visit")),
        d = c(require("./visitAfter")),
        f = _(require("./x")),
        s = _(require("./y"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function _(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var i = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          i.get || i.set ? Object.defineProperty(t, r, i) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    function v(e, t, r) {
      var i = new p(null == t ? f.defaultX : t, null == r ? s.defaultY : r, NaN, NaN, NaN, NaN);
      return null == e ? i : i.addAll(e);
    }

    function p(e, t, r, i, a, u) {
      this._x = e, this._y = t, this._x0 = r, this._y0 = i, this._x1 = a, this._y1 = u, this._root = void 0;
    }

    function y(e) {
      for (var t = {
        data: e.data
      }, r = t; e = e.next;) {
        r = r.next = {
          data: e.data
        };
      }

      return t;
    }

    var h = v.prototype = p.prototype;
    h.copy = function () {
      var e,
          t,
          r = new p(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          i = this._root;
      if (!i) return r;
      if (!i.length) return r._root = y(i), r;

      for (e = [{
        source: i,
        target: r._root = new Array(4)
      }]; i = e.pop();) {
        for (var a = 0; a < 4; ++a) {
          (t = i.source[a]) && (t.length ? e.push({
            source: t,
            target: i.target[a] = new Array(4)
          }) : i.target[a] = y(t));
        }
      }

      return r;
    }, h.add = e.default, h.addAll = e.addAll, h.cover = t.default, h.data = r.default, h.extent = i.default, h.find = a.default, h.remove = u.default, h.removeAll = u.removeAll, h.root = o.default, h.size = l.default, h.visit = n.default, h.visitAfter = d.default, h.x = f.default, h.y = s.default;
  }, {
    "./add": "c4hk",
    "./cover": "DeJI",
    "./data": "7HTB",
    "./extent": "JRL4",
    "./find": "2t1g",
    "./remove": "3wnj",
    "./root": "aU2q",
    "./size": "PC8q",
    "./visit": "MOvE",
    "./visitAfter": "6Edv",
    "./x": "2+yq",
    "./y": "FeNP"
  }],
  "oxc3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "quadtree", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = r(require("./quadtree"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./quadtree": "HCic"
  }],
  "ZCSV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = n(require("./constant")),
        r = n(require("./jiggle")),
        e = require("d3-quadtree");

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return t.x + t.vx;
    }

    function u(t) {
      return t.y + t.vy;
    }

    function f(n) {
      var f,
          a,
          o = 1,
          d = 1;

      function v() {
        for (var t, n, v, c, x, s, y, g = f.length, h = 0; h < d; ++h) {
          for (n = (0, e.quadtree)(f, i, u).visitAfter(l), t = 0; t < g; ++t) {
            v = f[t], s = a[v.index], y = s * s, c = v.x + v.vx, x = v.y + v.vy, n.visit(q);
          }
        }

        function q(t, e, n, i, u) {
          var f = t.data,
              a = t.r,
              d = s + a;
          if (!f) return e > c + d || i < c - d || n > x + d || u < x - d;

          if (f.index > v.index) {
            var l = c - f.x - f.vx,
                g = x - f.y - f.vy,
                h = l * l + g * g;
            h < d * d && (0 === l && (h += (l = (0, r.default)()) * l), 0 === g && (h += (g = (0, r.default)()) * g), h = (d - (h = Math.sqrt(h))) / h * o, v.vx += (l *= h) * (d = (a *= a) / (y + a)), v.vy += (g *= h) * d, f.vx -= l * (d = 1 - d), f.vy -= g * d);
          }
        }
      }

      function l(t) {
        if (t.data) return t.r = a[t.data.index];

        for (var r = t.r = 0; r < 4; ++r) {
          t[r] && t[r].r > t.r && (t.r = t[r].r);
        }
      }

      function c() {
        if (f) {
          var t,
              r,
              e = f.length;

          for (a = new Array(e), t = 0; t < e; ++t) {
            r = f[t], a[r.index] = +n(r, t, f);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(null == n ? 1 : +n)), v.initialize = function (t) {
        f = t, c();
      }, v.iterations = function (t) {
        return arguments.length ? (d = +t, v) : d;
      }, v.strength = function (t) {
        return arguments.length ? (o = +t, v) : o;
      }, v.radius = function (r) {
        return arguments.length ? (n = "function" == typeof r ? r : (0, t.default)(+r), c(), v) : n;
      }, v;
    }
  }, {
    "./constant": "5O/Y",
    "./jiggle": "jmDl",
    "d3-quadtree": "oxc3"
  }],
  "M788": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = r(require("./constant")),
        t = r(require("./jiggle")),
        n = require("d3-collection");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(e) {
      return e.index;
    }

    function u(e, t) {
      var n = e.get(t);
      if (!n) throw new Error("missing: " + t);
      return n;
    }

    function o(r) {
      var o,
          f,
          a,
          c,
          l,
          d = i,
          g = function g(e) {
        return 1 / Math.min(c[e.source.index], c[e.target.index]);
      },
          s = (0, e.default)(30),
          x = 1;

      function v(e) {
        for (var n = 0, i = r.length; n < x; ++n) {
          for (var u, a, c, d, g, s, v, y = 0; y < i; ++y) {
            a = (u = r[y]).source, d = (c = u.target).x + c.vx - a.x - a.vx || (0, t.default)(), g = c.y + c.vy - a.y - a.vy || (0, t.default)(), d *= s = ((s = Math.sqrt(d * d + g * g)) - f[y]) / s * e * o[y], g *= s, c.vx -= d * (v = l[y]), c.vy -= g * v, a.vx += d * (v = 1 - v), a.vy += g * v;
          }
        }
      }

      function y() {
        if (a) {
          var e,
              t,
              i = a.length,
              g = r.length,
              s = (0, n.map)(a, d);

          for (e = 0, c = new Array(i); e < g; ++e) {
            (t = r[e]).index = e, "object" != _typeof(t.source) && (t.source = u(s, t.source)), "object" != _typeof(t.target) && (t.target = u(s, t.target)), c[t.source.index] = (c[t.source.index] || 0) + 1, c[t.target.index] = (c[t.target.index] || 0) + 1;
          }

          for (e = 0, l = new Array(g); e < g; ++e) {
            t = r[e], l[e] = c[t.source.index] / (c[t.source.index] + c[t.target.index]);
          }

          o = new Array(g), h(), f = new Array(g), p();
        }
      }

      function h() {
        if (a) for (var e = 0, t = r.length; e < t; ++e) {
          o[e] = +g(r[e], e, r);
        }
      }

      function p() {
        if (a) for (var e = 0, t = r.length; e < t; ++e) {
          f[e] = +s(r[e], e, r);
        }
      }

      return null == r && (r = []), v.initialize = function (e) {
        a = e, y();
      }, v.links = function (e) {
        return arguments.length ? (r = e, y(), v) : r;
      }, v.id = function (e) {
        return arguments.length ? (d = e, v) : d;
      }, v.iterations = function (e) {
        return arguments.length ? (x = +e, v) : x;
      }, v.strength = function (t) {
        return arguments.length ? (g = "function" == typeof t ? t : (0, e.default)(+t), h(), v) : g;
      }, v.distance = function (t) {
        return arguments.length ? (s = "function" == typeof t ? t : (0, e.default)(+t), p(), v) : s;
      }, v;
    }
  }, {
    "./constant": "5O/Y",
    "./jiggle": "jmDl",
    "d3-collection": "qqV1"
  }],
  "lwF8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.x = r, exports.y = i, exports.default = a;

    var n = require("d3-dispatch"),
        t = require("d3-collection"),
        e = require("d3-timer");

    function r(n) {
      return n.x;
    }

    function i(n) {
      return n.y;
    }

    var u = 10,
        o = Math.PI * (3 - Math.sqrt(5));

    function a(r) {
      var i,
          a = 1,
          l = .001,
          c = 1 - Math.pow(l, 1 / 300),
          f = 0,
          h = .6,
          s = (0, t.map)(),
          x = (0, e.timer)(y),
          v = (0, n.dispatch)("tick", "end");

      function y() {
        p(), v.call("tick", i), a < l && (x.stop(), v.call("end", i));
      }

      function p(n) {
        var t,
            e,
            u = r.length;
        void 0 === n && (n = 1);

        for (var o = 0; o < n; ++o) {
          for (a += (f - a) * c, s.each(function (n) {
            n(a);
          }), t = 0; t < u; ++t) {
            null == (e = r[t]).fx ? e.x += e.vx *= h : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= h : (e.y = e.fy, e.vy = 0);
          }
        }

        return i;
      }

      function d() {
        for (var n, t = 0, e = r.length; t < e; ++t) {
          if ((n = r[t]).index = t, null != n.fx && (n.x = n.fx), null != n.fy && (n.y = n.fy), isNaN(n.x) || isNaN(n.y)) {
            var i = u * Math.sqrt(t),
                a = t * o;
            n.x = i * Math.cos(a), n.y = i * Math.sin(a);
          }

          (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
        }
      }

      function g(n) {
        return n.initialize && n.initialize(r), n;
      }

      return null == r && (r = []), d(), i = {
        tick: p,
        restart: function restart() {
          return x.restart(y), i;
        },
        stop: function stop() {
          return x.stop(), i;
        },
        nodes: function nodes(n) {
          return arguments.length ? (r = n, d(), s.each(g), i) : r;
        },
        alpha: function alpha(n) {
          return arguments.length ? (a = +n, i) : a;
        },
        alphaMin: function alphaMin(n) {
          return arguments.length ? (l = +n, i) : l;
        },
        alphaDecay: function alphaDecay(n) {
          return arguments.length ? (c = +n, i) : +c;
        },
        alphaTarget: function alphaTarget(n) {
          return arguments.length ? (f = +n, i) : f;
        },
        velocityDecay: function velocityDecay(n) {
          return arguments.length ? (h = 1 - n, i) : 1 - h;
        },
        force: function force(n, t) {
          return arguments.length > 1 ? (null == t ? s.remove(n) : s.set(n, g(t)), i) : s.get(n);
        },
        find: function find(n, t, e) {
          var i,
              u,
              o,
              a,
              l,
              c = 0,
              f = r.length;

          for (null == e ? e = 1 / 0 : e *= e, c = 0; c < f; ++c) {
            (o = (i = n - (a = r[c]).x) * i + (u = t - a.y) * u) < e && (l = a, e = o);
          }

          return l;
        },
        on: function on(n, t) {
          return arguments.length > 1 ? (v.on(n, t), i) : v.on(n);
        }
      };
    }
  }, {
    "d3-dispatch": "UU/c",
    "d3-collection": "qqV1",
    "d3-timer": "CBES"
  }],
  "cead": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var t = r(require("./constant")),
        e = r(require("./jiggle")),
        n = require("d3-quadtree"),
        a = require("./simulation");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u() {
      var r,
          u,
          i,
          f,
          l = (0, t.default)(-30),
          d = 1,
          o = 1 / 0,
          s = .81;

      function v(t) {
        var e,
            f = r.length,
            l = (0, n.quadtree)(r, a.x, a.y).visitAfter(x);

        for (i = t, e = 0; e < f; ++e) {
          u = r[e], l.visit(c);
        }
      }

      function h() {
        if (r) {
          var t,
              e,
              n = r.length;

          for (f = new Array(n), t = 0; t < n; ++t) {
            e = r[t], f[e.index] = +l(e, t, r);
          }
        }
      }

      function x(t) {
        var e,
            n,
            a,
            r,
            u,
            i = 0,
            l = 0;

        if (t.length) {
          for (a = r = u = 0; u < 4; ++u) {
            (e = t[u]) && (n = Math.abs(e.value)) && (i += e.value, l += n, a += n * e.x, r += n * e.y);
          }

          t.x = a / l, t.y = r / l;
        } else {
          (e = t).x = e.data.x, e.y = e.data.y;

          do {
            i += f[e.data.index];
          } while (e = e.next);
        }

        t.value = i;
      }

      function c(t, n, a, r) {
        if (!t.value) return !0;
        var l = t.x - u.x,
            v = t.y - u.y,
            h = r - n,
            x = l * l + v * v;
        if (h * h / s < x) return x < o && (0 === l && (x += (l = (0, e.default)()) * l), 0 === v && (x += (v = (0, e.default)()) * v), x < d && (x = Math.sqrt(d * x)), u.vx += l * t.value * i / x, u.vy += v * t.value * i / x), !0;

        if (!(t.length || x >= o)) {
          (t.data !== u || t.next) && (0 === l && (x += (l = (0, e.default)()) * l), 0 === v && (x += (v = (0, e.default)()) * v), x < d && (x = Math.sqrt(d * x)));

          do {
            t.data !== u && (h = f[t.data.index] * i / x, u.vx += l * h, u.vy += v * h);
          } while (t = t.next);
        }
      }

      return v.initialize = function (t) {
        r = t, h();
      }, v.strength = function (e) {
        return arguments.length ? (l = "function" == typeof e ? e : (0, t.default)(+e), h(), v) : l;
      }, v.distanceMin = function (t) {
        return arguments.length ? (d = t * t, v) : Math.sqrt(d);
      }, v.distanceMax = function (t) {
        return arguments.length ? (o = t * t, v) : Math.sqrt(o);
      }, v.theta = function (t) {
        return arguments.length ? (s = t * t, v) : Math.sqrt(s);
      }, v;
    }
  }, {
    "./constant": "5O/Y",
    "./jiggle": "jmDl",
    "d3-quadtree": "oxc3",
    "./simulation": "lwF8"
  }],
  "qX1S": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = n(require("./constant"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function e(n, e, r) {
      var u,
          f,
          o,
          i = (0, t.default)(.1);

      function l(t) {
        for (var n = 0, i = u.length; n < i; ++n) {
          var l = u[n],
              a = l.x - e || 1e-6,
              c = l.y - r || 1e-6,
              s = Math.sqrt(a * a + c * c),
              d = (o[n] - s) * f[n] * t / s;
          l.vx += a * d, l.vy += c * d;
        }
      }

      function a() {
        if (u) {
          var t,
              e = u.length;

          for (f = new Array(e), o = new Array(e), t = 0; t < e; ++t) {
            o[t] = +n(u[t], t, u), f[t] = isNaN(o[t]) ? 0 : +i(u[t], t, u);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(+n)), null == e && (e = 0), null == r && (r = 0), l.initialize = function (t) {
        u = t, a();
      }, l.strength = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, t.default)(+n), a(), l) : i;
      }, l.radius = function (e) {
        return arguments.length ? (n = "function" == typeof e ? e : (0, t.default)(+e), a(), l) : n;
      }, l.x = function (t) {
        return arguments.length ? (e = +t, l) : e;
      }, l.y = function (t) {
        return arguments.length ? (r = +t, l) : r;
      }, l;
    }
  }, {
    "./constant": "5O/Y"
  }],
  "AO2h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = n(require("./constant"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function e(n) {
      var e,
          r,
          u,
          f = (0, t.default)(.1);

      function o(t) {
        for (var n, f = 0, o = e.length; f < o; ++f) {
          (n = e[f]).vx += (u[f] - n.x) * r[f] * t;
        }
      }

      function i() {
        if (e) {
          var t,
              o = e.length;

          for (r = new Array(o), u = new Array(o), t = 0; t < o; ++t) {
            r[t] = isNaN(u[t] = +n(e[t], t, e)) ? 0 : +f(e[t], t, e);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(null == n ? 0 : +n)), o.initialize = function (t) {
        e = t, i();
      }, o.strength = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), i(), o) : f;
      }, o.x = function (e) {
        return arguments.length ? (n = "function" == typeof e ? e : (0, t.default)(+e), i(), o) : n;
      }, o;
    }
  }, {
    "./constant": "5O/Y"
  }],
  "9SU+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = n(require("./constant"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function e(n) {
      var e,
          r,
          u,
          f = (0, t.default)(.1);

      function o(t) {
        for (var n, f = 0, o = e.length; f < o; ++f) {
          (n = e[f]).vy += (u[f] - n.y) * r[f] * t;
        }
      }

      function i() {
        if (e) {
          var t,
              o = e.length;

          for (r = new Array(o), u = new Array(o), t = 0; t < o; ++t) {
            r[t] = isNaN(u[t] = +n(e[t], t, e)) ? 0 : +f(e[t], t, e);
          }
        }
      }

      return "function" != typeof n && (n = (0, t.default)(null == n ? 0 : +n)), o.initialize = function (t) {
        e = t, i();
      }, o.strength = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), i(), o) : f;
      }, o.y = function (e) {
        return arguments.length ? (n = "function" == typeof e ? e : (0, t.default)(+e), i(), o) : n;
      }, o;
    }
  }, {
    "./constant": "5O/Y"
  }],
  "YpA1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "forceCenter", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "forceCollide", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "forceLink", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "forceManyBody", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "forceRadial", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "forceSimulation", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "forceX", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "forceY", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    });
    var e = c(require("./center")),
        r = c(require("./collide")),
        t = c(require("./link")),
        n = c(require("./manyBody")),
        u = c(require("./radial")),
        o = c(require("./simulation")),
        i = c(require("./x")),
        f = c(require("./y"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./center": "y+F4",
    "./collide": "ZCSV",
    "./link": "M788",
    "./manyBody": "cead",
    "./radial": "qX1S",
    "./simulation": "lwF8",
    "./x": "AO2h",
    "./y": "9SU+"
  }],
  "c+Jh": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
      var n,
          l = e.slice(0, n);
      return [l.length > 1 ? l[0] + l.slice(2) : l, +e.slice(n + 1)];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "m3FQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./formatDecimal"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return (t = (0, e.default)(Math.abs(t))) ? t[1] : NaN;
    }
  }, {
    "./formatDecimal": "c+Jh"
  }],
  "e1cc": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return function (r, n) {
        for (var u = r.length, s = [], o = 0, i = e[0], a = 0; u > 0 && i > 0 && (a + i + 1 > n && (i = Math.max(1, n - a)), s.push(r.substring(u -= i, u + i)), !((a += i + 1) > n));) {
          i = e[o = (o + 1) % e.length];
        }

        return s.reverse().join(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Wswx": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function (t) {
        return t.replace(/[0-9]/g, function (t) {
          return e[+t];
        });
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "gePe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
    var t = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function i(t) {
      return new s(t);
    }

    function s(i) {
      if (!(s = t.exec(i))) throw new Error("invalid format: " + i);
      var s;
      this.fill = s[1] || " ", this.align = s[2] || ">", this.sign = s[3] || "-", this.symbol = s[4] || "", this.zero = !!s[5], this.width = s[6] && +s[6], this.comma = !!s[7], this.precision = s[8] && +s[8].slice(1), this.trim = !!s[9], this.type = s[10] || "";
    }

    i.prototype = s.prototype, s.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
    };
  }, {}],
  "dWsa": [function (require, module, exports) {
    "use strict";

    function e(e) {
      e: for (var r, t = e.length, s = 1, a = -1; s < t; ++s) {
        switch (e[s]) {
          case ".":
            a = r = s;
            break;

          case "0":
            0 === a && (a = s), r = s;
            break;

          default:
            if (a > 0) {
              if (!+e[s]) break e;
              a = 0;
            }

        }
      }

      return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "KTGF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.prefixExponent = void 0;
    var e,
        r = t(require("./formatDecimal"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t, n) {
      var o = (0, r.default)(t, n);
      if (!o) return t + "";
      var a = o[0],
          i = o[1],
          u = i - (exports.prefixExponent = e = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          f = a.length;
      return u === f ? a : u > f ? a + new Array(u - f + 1).join("0") : u > 0 ? a.slice(0, u) + "." + a.slice(u) : "0." + new Array(1 - u).join("0") + (0, r.default)(t, Math.max(0, n + u - 1))[0];
    }

    exports.prefixExponent = e;
  }, {
    "./formatDecimal": "c+Jh"
  }],
  "e8g/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./formatDecimal"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var n = (0, e.default)(r, t);
      if (!n) return r + "";
      var u = n[0],
          a = n[1];
      return a < 0 ? "0." + new Array(-a).join("0") + u : u.length > a + 1 ? u.slice(0, a + 1) + "." + u.slice(a + 1) : u + new Array(a - u.length + 2).join("0");
    }
  }, {
    "./formatDecimal": "c+Jh"
  }],
  "uFUO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = n(require("./formatPrefixAuto")),
        r = n(require("./formatRounded"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var e = {
      "%": function _(t, r) {
        return (100 * t).toFixed(r);
      },
      b: function b(t) {
        return Math.round(t).toString(2);
      },
      c: function c(t) {
        return t + "";
      },
      d: function d(t) {
        return Math.round(t).toString(10);
      },
      e: function e(t, r) {
        return t.toExponential(r);
      },
      f: function f(t, r) {
        return t.toFixed(r);
      },
      g: function g(t, r) {
        return t.toPrecision(r);
      },
      o: function o(t) {
        return Math.round(t).toString(8);
      },
      p: function p(t, n) {
        return (0, r.default)(100 * t, n);
      },
      r: r.default,
      s: t.default,
      X: function X(t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function x(t) {
        return Math.round(t).toString(16);
      }
    };
    exports.default = e;
  }, {
    "./formatPrefixAuto": "KTGF",
    "./formatRounded": "e8g/"
  }],
  "QWQX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var e = l(require("./exponent")),
        r = l(require("./formatGroup")),
        t = l(require("./formatNumerals")),
        a = l(require("./formatSpecifier")),
        n = l(require("./formatTrim")),
        u = l(require("./formatTypes")),
        i = require("./formatPrefixAuto"),
        f = l(require("./identity"));

    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var o = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function s(l) {
      var s = l.grouping && l.thousands ? (0, r.default)(l.grouping, l.thousands) : f.default,
          c = l.currency,
          m = l.decimal,
          d = l.numerals ? (0, t.default)(l.numerals) : f.default,
          h = l.percent || "%";

      function p(e) {
        var r = (e = (0, a.default)(e)).fill,
            t = e.align,
            f = e.sign,
            l = e.symbol,
            p = e.zero,
            g = e.width,
            M = e.comma,
            x = e.precision,
            v = e.trim,
            y = e.type;
        "n" === y ? (M = !0, y = "g") : u.default[y] || (null == x && (x = 12), v = !0, y = "g"), (p || "0" === r && "=" === t) && (p = !0, r = "0", t = "=");
        var b = "$" === l ? c[0] : "#" === l && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "",
            q = "$" === l ? c[1] : /[%p]/.test(y) ? h : "",
            k = u.default[y],
            w = /[defgprs%]/.test(y);

        function P(e) {
          var a,
              u,
              l,
              c = b,
              h = q;
          if ("c" === y) h = k(e) + h, e = "";else {
            var P = (e = +e) < 0;
            if (e = k(Math.abs(e), x), v && (e = (0, n.default)(e)), P && 0 == +e && (P = !1), c = (P ? "(" === f ? f : "-" : "-" === f || "(" === f ? "" : f) + c, h = ("s" === y ? o[8 + i.prefixExponent / 3] : "") + h + (P && "(" === f ? ")" : ""), w) for (a = -1, u = e.length; ++a < u;) {
              if (48 > (l = e.charCodeAt(a)) || l > 57) {
                h = (46 === l ? m + e.slice(a + 1) : e.slice(a)) + h, e = e.slice(0, a);
                break;
              }
            }
          }
          M && !p && (e = s(e, 1 / 0));

          var _ = c.length + e.length + h.length,
              A = _ < g ? new Array(g - _ + 1).join(r) : "";

          switch (M && p && (e = s(A + e, A.length ? g - h.length : 1 / 0), A = ""), t) {
            case "<":
              e = c + e + h + A;
              break;

            case "=":
              e = c + A + e + h;
              break;

            case "^":
              e = A.slice(0, _ = A.length >> 1) + c + e + h + A.slice(_);
              break;

            default:
              e = A + c + e + h;
          }

          return d(e);
        }

        return x = null == x ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x)), P.toString = function () {
          return e + "";
        }, P;
      }

      return {
        format: p,
        formatPrefix: function formatPrefix(r, t) {
          var n = p(((r = (0, a.default)(r)).type = "f", r)),
              u = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(t) / 3))),
              i = Math.pow(10, -u),
              f = o[8 + u / 3];
          return function (e) {
            return n(i * e) + f;
          };
        }
      };
    }
  }, {
    "./exponent": "m3FQ",
    "./formatGroup": "e1cc",
    "./formatNumerals": "Wswx",
    "./formatSpecifier": "gePe",
    "./formatTrim": "dWsa",
    "./formatTypes": "uFUO",
    "./formatPrefixAuto": "KTGF",
    "./identity": "nPOL"
  }],
  "y/m0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.formatPrefix = exports.format = void 0;
    var r,
        e,
        t,
        o = f(require("./locale"));

    function f(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function a(f) {
      return r = (0, o.default)(f), exports.format = e = r.format, exports.formatPrefix = t = r.formatPrefix, r;
    }

    exports.format = e, exports.formatPrefix = t, a({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });
  }, {
    "./locale": "QWQX"
  }],
  "QL8u": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./exponent"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return Math.max(0, -(0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent": "m3FQ"
  }],
  "DzQJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;
    var e = t(require("./exponent"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(t, a) {
      return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(a) / 3))) - (0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent": "m3FQ"
  }],
  "4afb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./exponent"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      return t = Math.abs(t), u = Math.abs(u) - t, Math.max(0, (0, e.default)(u) - (0, e.default)(t)) + 1;
    }
  }, {
    "./exponent": "m3FQ"
  }],
  "4gWe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "formatDefaultLocale", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "format", {
      enumerable: !0,
      get: function get() {
        return e.format;
      }
    }), Object.defineProperty(exports, "formatPrefix", {
      enumerable: !0,
      get: function get() {
        return e.formatPrefix;
      }
    }), Object.defineProperty(exports, "formatLocale", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "formatSpecifier", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "precisionFixed", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "precisionPrefix", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "precisionRound", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    });
    var e = f(require("./defaultLocale")),
        r = u(require("./locale")),
        t = u(require("./formatSpecifier")),
        n = u(require("./precisionFixed")),
        o = u(require("./precisionPrefix")),
        i = u(require("./precisionRound"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./defaultLocale": "y/m0",
    "./locale": "QWQX",
    "./formatSpecifier": "gePe",
    "./precisionFixed": "QL8u",
    "./precisionPrefix": "DzQJ",
    "./precisionRound": "4afb"
  }],
  "GlqK": [function (require, module, exports) {
    "use strict";

    function t() {
      return new s();
    }

    function s() {
      this.reset();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, s.prototype = {
      constructor: s,
      reset: function reset() {
        this.s = this.t = 0;
      },
      add: function add(t) {
        i(e, t, this.t), i(this, e.s, this.s), this.s ? this.t += e.t : this.s = e.t;
      },
      valueOf: function valueOf() {
        return this.s;
      }
    };
    var e = new s();

    function i(t, s, e) {
      var i = t.s = s + e,
          n = i - s,
          r = i - n;
      t.t = s - r + (e - n);
    }
  }, {}],
  "sEgP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.acos = b, exports.asin = w, exports.haversin = _, exports.tan = exports.sqrt = exports.sign = exports.sin = exports.pow = exports.log = exports.floor = exports.exp = exports.ceil = exports.cos = exports.atan2 = exports.atan = exports.abs = exports.radians = exports.degrees = exports.tau = exports.quarterPi = exports.halfPi = exports.pi = exports.epsilon2 = exports.epsilon = void 0;
    var r = 1e-6;
    exports.epsilon = r;
    var t = 1e-12;
    exports.epsilon2 = t;
    var e = Math.PI;
    exports.pi = e;
    var s = e / 2;
    exports.halfPi = s;
    var o = e / 4;
    exports.quarterPi = o;
    var a = 2 * e;
    exports.tau = a;
    var p = 180 / e;
    exports.degrees = p;
    var x = e / 180;
    exports.radians = x;
    var n = Math.abs;
    exports.abs = n;
    var i = Math.atan;
    exports.atan = i;
    var v = Math.atan2;
    exports.atan2 = v;
    var h = Math.cos;
    exports.cos = h;
    var l = Math.ceil;
    exports.ceil = l;
    var M = Math.exp;
    exports.exp = M;
    var u = Math.floor;
    exports.floor = u;
    var c = Math.log;
    exports.log = c;
    var f = Math.pow;
    exports.pow = f;
    var g = Math.sin;
    exports.sin = g;

    var d = Math.sign || function (r) {
      return r > 0 ? 1 : r < 0 ? -1 : 0;
    };

    exports.sign = d;
    var P = Math.sqrt;
    exports.sqrt = P;
    var q = Math.tan;

    function b(r) {
      return r > 1 ? 0 : r < -1 ? e : Math.acos(r);
    }

    function w(r) {
      return r > 1 ? s : r < -1 ? -s : Math.asin(r);
    }

    function _(r) {
      return (r = g(r / 2)) * r;
    }

    exports.tan = q;
  }, {}],
  "XBFK": [function (require, module, exports) {
    "use strict";

    function n(n, t) {
      n && o.hasOwnProperty(n.type) && o[n.type](n, t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
    var t = {
      Feature: function Feature(t, o) {
        n(t.geometry, o);
      },
      FeatureCollection: function FeatureCollection(t, o) {
        for (var e = t.features, r = -1, i = e.length; ++r < i;) {
          n(e[r].geometry, o);
        }
      }
    },
        o = {
      Sphere: function Sphere(n, t) {
        t.sphere();
      },
      Point: function Point(n, t) {
        n = n.coordinates, t.point(n[0], n[1], n[2]);
      },
      MultiPoint: function MultiPoint(n, t) {
        for (var o = n.coordinates, e = -1, r = o.length; ++e < r;) {
          n = o[e], t.point(n[0], n[1], n[2]);
        }
      },
      LineString: function LineString(n, t) {
        e(n.coordinates, t, 0);
      },
      MultiLineString: function MultiLineString(n, t) {
        for (var o = n.coordinates, r = -1, i = o.length; ++r < i;) {
          e(o[r], t, 0);
        }
      },
      Polygon: function Polygon(n, t) {
        r(n.coordinates, t);
      },
      MultiPolygon: function MultiPolygon(n, t) {
        for (var o = n.coordinates, e = -1, i = o.length; ++e < i;) {
          r(o[e], t);
        }
      },
      GeometryCollection: function GeometryCollection(t, o) {
        for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
          n(e[r], o);
        }
      }
    };

    function e(n, t, o) {
      var e,
          r = -1,
          i = n.length - o;

      for (t.lineStart(); ++r < i;) {
        e = n[r], t.point(e[0], e[1], e[2]);
      }

      t.lineEnd();
    }

    function r(n, t) {
      var o = -1,
          r = n.length;

      for (t.polygonStart(); ++o < r;) {
        e(n[o], t, 1);
      }

      t.polygonEnd();
    }

    function i(o, e) {
      o && t.hasOwnProperty(o.type) ? t[o.type](o, e) : n(o, e);
    }
  }, {}],
  "dpXv": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = q, exports.areaStream = exports.areaRingSum = void 0;

    var e = n(require("./adder")),
        t = require("./math"),
        a = n(require("./noop")),
        r = n(require("./stream"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = (0, e.default)();
    exports.areaRingSum = i;
    var u,
        o,
        d,
        s,
        l,
        f = (0, e.default)(),
        p = {
      point: a.default,
      lineStart: a.default,
      lineEnd: a.default,
      polygonStart: function polygonStart() {
        i.reset(), p.lineStart = c, p.lineEnd = S;
      },
      polygonEnd: function polygonEnd() {
        var e = +i;
        f.add(e < 0 ? t.tau + e : e), this.lineStart = this.lineEnd = this.point = a.default;
      },
      sphere: function sphere() {
        f.add(t.tau);
      }
    };

    function c() {
      p.point = v;
    }

    function S() {
      m(u, o);
    }

    function v(e, a) {
      p.point = m, u = e, o = a, e *= t.radians, a *= t.radians, d = e, s = (0, t.cos)(a = a / 2 + t.quarterPi), l = (0, t.sin)(a);
    }

    function m(e, a) {
      e *= t.radians, a = (a *= t.radians) / 2 + t.quarterPi;
      var r = e - d,
          n = r >= 0 ? 1 : -1,
          u = n * r,
          o = (0, t.cos)(a),
          f = (0, t.sin)(a),
          p = l * f,
          c = s * o + p * (0, t.cos)(u),
          S = p * n * (0, t.sin)(u);
      i.add((0, t.atan2)(S, c)), d = e, s = o, l = f;
    }

    function q(e) {
      return f.reset(), (0, r.default)(e, p), 2 * f;
    }

    exports.areaStream = p;
  }, {
    "./adder": "GlqK",
    "./math": "sEgP",
    "./noop": "BhKh",
    "./stream": "XBFK"
  }],
  "+rFM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.spherical = e, exports.cartesian = t, exports.cartesianDot = n, exports.cartesianCross = s, exports.cartesianAddInPlace = a, exports.cartesianScale = o, exports.cartesianNormalizeInPlace = c;

    var r = require("./math");

    function e(e) {
      return [(0, r.atan2)(e[1], e[0]), (0, r.asin)(e[2])];
    }

    function t(e) {
      var t = e[0],
          n = e[1],
          s = (0, r.cos)(n);
      return [s * (0, r.cos)(t), s * (0, r.sin)(t), (0, r.sin)(n)];
    }

    function n(r, e) {
      return r[0] * e[0] + r[1] * e[1] + r[2] * e[2];
    }

    function s(r, e) {
      return [r[1] * e[2] - r[2] * e[1], r[2] * e[0] - r[0] * e[2], r[0] * e[1] - r[1] * e[0]];
    }

    function a(r, e) {
      r[0] += e[0], r[1] += e[1], r[2] += e[2];
    }

    function o(r, e) {
      return [r[0] * e, r[1] * e, r[2] * e];
    }

    function c(e) {
      var t = (0, r.sqrt)(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
      e[0] /= t, e[1] /= t, e[2] /= t;
    }
  }, {
    "./math": "sEgP"
  }],
  "4wXR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = P;

    var e = i(require("./adder")),
        n = require("./area"),
        r = require("./cartesian"),
        a = require("./math"),
        t = i(require("./stream"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var o,
        u,
        s,
        l,
        f,
        c,
        d,
        p,
        S,
        g,
        m = (0, e.default)(),
        N = {
      point: h,
      lineStart: E,
      lineEnd: q,
      polygonStart: function polygonStart() {
        N.point = y, N.lineStart = b, N.lineEnd = _, m.reset(), n.areaStream.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        n.areaStream.polygonEnd(), N.point = h, N.lineStart = E, N.lineEnd = q, n.areaRingSum < 0 ? (o = -(s = 180), u = -(l = 90)) : m > a.epsilon ? l = 90 : m < -a.epsilon && (u = -90), g[0] = o, g[1] = s;
      },
      sphere: function sphere() {
        o = -(s = 180), u = -(l = 90);
      }
    };

    function h(e, n) {
      S.push(g = [o = e, s = e]), n < u && (u = n), n > l && (l = n);
    }

    function v(e, n) {
      var t = (0, r.cartesian)([e * a.radians, n * a.radians]);

      if (p) {
        var i = (0, r.cartesianCross)(p, t),
            c = [i[1], -i[0], 0],
            d = (0, r.cartesianCross)(c, i);
        (0, r.cartesianNormalizeInPlace)(d), d = (0, r.spherical)(d);
        var m,
            N = e - f,
            h = N > 0 ? 1 : -1,
            v = d[0] * a.degrees * h,
            E = (0, a.abs)(N) > 180;
        E ^ (h * f < v && v < h * e) ? (m = d[1] * a.degrees) > l && (l = m) : E ^ (h * f < (v = (v + 360) % 360 - 180) && v < h * e) ? (m = -d[1] * a.degrees) < u && (u = m) : (n < u && (u = n), n > l && (l = n)), E ? e < f ? x(o, e) > x(o, s) && (s = e) : x(e, s) > x(o, s) && (o = e) : s >= o ? (e < o && (o = e), e > s && (s = e)) : e > f ? x(o, e) > x(o, s) && (s = e) : x(e, s) > x(o, s) && (o = e);
      } else S.push(g = [o = e, s = e]);

      n < u && (u = n), n > l && (l = n), p = t, f = e;
    }

    function E() {
      N.point = v;
    }

    function q() {
      g[0] = o, g[1] = s, N.point = h, p = null;
    }

    function y(e, r) {
      if (p) {
        var t = e - f;
        m.add((0, a.abs)(t) > 180 ? t + (t > 0 ? 360 : -360) : t);
      } else c = e, d = r;

      n.areaStream.point(e, r), v(e, r);
    }

    function b() {
      n.areaStream.lineStart();
    }

    function _() {
      y(c, d), n.areaStream.lineEnd(), (0, a.abs)(m) > a.epsilon && (o = -(s = 180)), g[0] = o, g[1] = s, p = null;
    }

    function x(e, n) {
      return (n -= e) < 0 ? n + 360 : n;
    }

    function C(e, n) {
      return e[0] - n[0];
    }

    function M(e, n) {
      return e[0] <= e[1] ? e[0] <= n && n <= e[1] : n < e[0] || e[1] < n;
    }

    function P(e) {
      var n, r, a, i, f, c, d;

      if (l = s = -(o = u = 1 / 0), S = [], (0, t.default)(e, N), r = S.length) {
        for (S.sort(C), n = 1, f = [a = S[0]]; n < r; ++n) {
          M(a, (i = S[n])[0]) || M(a, i[1]) ? (x(a[0], i[1]) > x(a[0], a[1]) && (a[1] = i[1]), x(i[0], a[1]) > x(a[0], a[1]) && (a[0] = i[0])) : f.push(a = i);
        }

        for (c = -1 / 0, n = 0, a = f[r = f.length - 1]; n <= r; a = i, ++n) {
          i = f[n], (d = x(a[1], i[0])) > c && (c = d, o = i[0], s = a[1]);
        }
      }

      return S = g = null, o === 1 / 0 || u === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[o, u], [s, l]];
    }
  }, {
    "./adder": "GlqK",
    "./area": "dpXv",
    "./cartesian": "+rFM",
    "./math": "sEgP",
    "./stream": "XBFK"
  }],
  "pQGp": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = w;

    var n,
        i,
        s,
        t,
        a,
        o,
        r,
        e,
        u,
        c,
        d,
        f,
        l,
        p,
        v,
        q,
        g = require("./math"),
        E = S(require("./noop")),
        N = S(require("./stream"));

    function S(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var _ = {
      sphere: E.default,
      point: y,
      lineStart: m,
      lineEnd: b,
      polygonStart: function polygonStart() {
        _.lineStart = j, _.lineEnd = O;
      },
      polygonEnd: function polygonEnd() {
        _.lineStart = m, _.lineEnd = b;
      }
    };

    function y(n, i) {
      n *= g.radians, i *= g.radians;
      var s = (0, g.cos)(i);
      h(s * (0, g.cos)(n), s * (0, g.sin)(n), (0, g.sin)(i));
    }

    function h(i, o, r) {
      s += (i - s) / ++n, t += (o - t) / n, a += (r - a) / n;
    }

    function m() {
      _.point = x;
    }

    function x(n, i) {
      n *= g.radians, i *= g.radians;
      var s = (0, g.cos)(i);
      p = s * (0, g.cos)(n), v = s * (0, g.sin)(n), q = (0, g.sin)(i), _.point = M, h(p, v, q);
    }

    function M(n, s) {
      n *= g.radians, s *= g.radians;
      var t = (0, g.cos)(s),
          a = t * (0, g.cos)(n),
          u = t * (0, g.sin)(n),
          c = (0, g.sin)(s),
          d = (0, g.atan2)((0, g.sqrt)((d = v * c - q * u) * d + (d = q * a - p * c) * d + (d = p * u - v * a) * d), p * a + v * u + q * c);
      i += d, o += d * (p + (p = a)), r += d * (v + (v = u)), e += d * (q + (q = c)), h(p, v, q);
    }

    function b() {
      _.point = y;
    }

    function j() {
      _.point = P;
    }

    function O() {
      k(f, l), _.point = y;
    }

    function P(n, i) {
      f = n, l = i, n *= g.radians, i *= g.radians, _.point = k;
      var s = (0, g.cos)(i);
      p = s * (0, g.cos)(n), v = s * (0, g.sin)(n), q = (0, g.sin)(i), h(p, v, q);
    }

    function k(n, s) {
      n *= g.radians, s *= g.radians;

      var t = (0, g.cos)(s),
          a = t * (0, g.cos)(n),
          f = t * (0, g.sin)(n),
          l = (0, g.sin)(s),
          E = v * l - q * f,
          N = q * a - p * l,
          S = p * f - v * a,
          _ = (0, g.sqrt)(E * E + N * N + S * S),
          y = (0, g.asin)(_),
          m = _ && -y / _;

      u += m * E, c += m * N, d += m * S, i += y, o += y * (p + (p = a)), r += y * (v + (v = f)), e += y * (q + (q = l)), h(p, v, q);
    }

    function w(f) {
      n = i = s = t = a = o = r = e = u = c = d = 0, (0, N.default)(f, _);
      var l = u,
          p = c,
          v = d,
          q = l * l + p * p + v * v;
      return q < g.epsilon2 && (l = o, p = r, v = e, i < g.epsilon && (l = s, p = t, v = a), (q = l * l + p * p + v * v) < g.epsilon2) ? [NaN, NaN] : [(0, g.atan2)(p, l) * g.degrees, (0, g.asin)(v / (0, g.sqrt)(q)) * g.degrees];
    }
  }, {
    "./math": "sEgP",
    "./noop": "BhKh",
    "./stream": "XBFK"
  }],
  "hCea": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      function r(r, n) {
        return r = e(r, n), t(r[0], r[1]);
      }

      return e.invert && t.invert && (r.invert = function (r, n) {
        return (r = t.invert(r, n)) && e.invert(r[0], r[1]);
      }), r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "KwdP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rotateRadians = a, exports.default = o;

    var n = e(require("./compose")),
        r = require("./math");

    function e(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function t(n, e) {
      return [(0, r.abs)(n) > r.pi ? n + Math.round(-n / r.tau) * r.tau : n, e];
    }

    function a(e, a, i) {
      return (e %= r.tau) ? a || i ? (0, n.default)(u(e), s(a, i)) : u(e) : a || i ? s(a, i) : t;
    }

    function i(n) {
      return function (e, t) {
        return [(e += n) > r.pi ? e - r.tau : e < -r.pi ? e + r.tau : e, t];
      };
    }

    function u(n) {
      var r = i(n);
      return r.invert = i(-n), r;
    }

    function s(n, e) {
      var t = (0, r.cos)(n),
          a = (0, r.sin)(n),
          i = (0, r.cos)(e),
          u = (0, r.sin)(e);

      function s(n, e) {
        var s = (0, r.cos)(e),
            o = (0, r.cos)(n) * s,
            c = (0, r.sin)(n) * s,
            d = (0, r.sin)(e),
            f = d * t + o * a;
        return [(0, r.atan2)(c * i - f * u, o * t - d * a), (0, r.asin)(f * i + c * u)];
      }

      return s.invert = function (n, e) {
        var s = (0, r.cos)(e),
            o = (0, r.cos)(n) * s,
            c = (0, r.sin)(n) * s,
            d = (0, r.sin)(e),
            f = d * i - c * u;
        return [(0, r.atan2)(c * i + d * u, o * t + f * a), (0, r.asin)(f * t - o * a)];
      }, s;
    }

    function o(n) {
      function e(e) {
        return (e = n(e[0] * r.radians, e[1] * r.radians))[0] *= r.degrees, e[1] *= r.degrees, e;
      }

      return n = a(n[0] * r.radians, n[1] * r.radians, n.length > 2 ? n[2] * r.radians : 0), e.invert = function (e) {
        return (e = n.invert(e[0] * r.radians, e[1] * r.radians))[0] *= r.degrees, e[1] *= r.degrees, e;
      }, e;
    }

    t.invert = t;
  }, {
    "./compose": "hCea",
    "./math": "sEgP"
  }],
  "dbGM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.circleStream = i, exports.default = o;

    var e = require("./cartesian"),
        t = a(require("./constant")),
        n = require("./math"),
        r = require("./rotation");

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(t, r, a, i, o, s) {
      if (a) {
        var c = (0, n.cos)(r),
            l = (0, n.sin)(r),
            f = i * a;
        null == o ? (o = r + i * n.tau, s = r - f / 2) : (o = u(c, o), s = u(c, s), (i > 0 ? o < s : o > s) && (o += i * n.tau));

        for (var d, p = o; i > 0 ? p > s : p < s; p -= f) {
          d = (0, e.spherical)([c, -l * (0, n.cos)(p), -l * (0, n.sin)(p)]), t.point(d[0], d[1]);
        }
      }
    }

    function u(t, r) {
      (r = (0, e.cartesian)(r))[0] -= t, (0, e.cartesianNormalizeInPlace)(r);
      var a = (0, n.acos)(-r[1]);
      return ((-r[2] < 0 ? -a : a) + n.tau - n.epsilon) % n.tau;
    }

    function o() {
      var e,
          a,
          u = (0, t.default)([0, 0]),
          o = (0, t.default)(90),
          s = (0, t.default)(6),
          c = {
        point: function point(t, r) {
          e.push(t = a(t, r)), t[0] *= n.degrees, t[1] *= n.degrees;
        }
      };

      function l() {
        var t = u.apply(this, arguments),
            l = o.apply(this, arguments) * n.radians,
            f = s.apply(this, arguments) * n.radians;
        return e = [], a = (0, r.rotateRadians)(-t[0] * n.radians, -t[1] * n.radians, 0).invert, i(c, l, f, 1), t = {
          type: "Polygon",
          coordinates: [e]
        }, e = a = null, t;
      }

      return l.center = function (e) {
        return arguments.length ? (u = "function" == typeof e ? e : (0, t.default)([+e[0], +e[1]]), l) : u;
      }, l.radius = function (e) {
        return arguments.length ? (o = "function" == typeof e ? e : (0, t.default)(+e), l) : o;
      }, l.precision = function (e) {
        return arguments.length ? (s = "function" == typeof e ? e : (0, t.default)(+e), l) : s;
      }, l;
    }
  }, {
    "./cartesian": "+rFM",
    "./constant": "5O/Y",
    "./math": "sEgP",
    "./rotation": "KwdP"
  }],
  "VrlK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = n(require("../noop"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t() {
      var n,
          t = [];
      return {
        point: function point(e, t) {
          n.push([e, t]);
        },
        lineStart: function lineStart() {
          t.push(n = []);
        },
        lineEnd: e.default,
        rejoin: function rejoin() {
          t.length > 1 && t.push(t.pop().concat(t.shift()));
        },
        result: function result() {
          var e = t;
          return t = [], n = null, e;
        }
      };
    }
  }, {
    "../noop": "BhKh"
  }],
  "j4Ms": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./math");

    function r(r, t) {
      return (0, e.abs)(r[0] - t[0]) < e.epsilon && (0, e.abs)(r[1] - t[1]) < e.epsilon;
    }
  }, {
    "./math": "sEgP"
  }],
  "03nq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
    var e = n(require("../pointEqual"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e, n, t, i) {
      this.x = e, this.z = n, this.o = t, this.e = i, this.v = !1, this.n = this.p = null;
    }

    function i(n, i, o, r, f) {
      var u,
          s,
          h = [],
          p = [];

      if (n.forEach(function (n) {
        if (!((i = n.length - 1) <= 0)) {
          var i,
              l,
              o = n[0],
              r = n[i];

          if ((0, e.default)(o, r)) {
            for (f.lineStart(), u = 0; u < i; ++u) {
              f.point((o = n[u])[0], o[1]);
            }

            f.lineEnd();
          } else h.push(l = new t(o, n, null, !0)), p.push(l.o = new t(o, null, l, !1)), h.push(l = new t(r, n, null, !1)), p.push(l.o = new t(r, null, l, !0));
        }
      }), h.length) {
        for (p.sort(i), l(h), l(p), u = 0, s = p.length; u < s; ++u) {
          p[u].e = o = !o;
        }

        for (var a, v, d = h[0];;) {
          for (var c = d, x = !0; c.v;) {
            if ((c = c.n) === d) return;
          }

          a = c.z, f.lineStart();

          do {
            if (c.v = c.o.v = !0, c.e) {
              if (x) for (u = 0, s = a.length; u < s; ++u) {
                f.point((v = a[u])[0], v[1]);
              } else r(c.x, c.n.x, 1, f);
              c = c.n;
            } else {
              if (x) for (a = c.p.z, u = a.length - 1; u >= 0; --u) {
                f.point((v = a[u])[0], v[1]);
              } else r(c.x, c.p.x, -1, f);
              c = c.p;
            }

            a = (c = c.o).z, x = !x;
          } while (!c.v);

          f.lineEnd();
        }
      }
    }

    function l(e) {
      if (n = e.length) {
        for (var n, t, i = 0, l = e[0]; ++i < n;) {
          l.n = t = e[i], t.p = l, l = t;
        }

        l.n = t = e[0], t.p = l;
      }
    }
  }, {
    "../pointEqual": "j4Ms"
  }],
  "Cmis": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = i(require("./adder")),
        a = require("./cartesian"),
        r = require("./math");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = (0, e.default)();

    function n(e) {
      return (0, r.abs)(e[0]) <= r.pi ? e[0] : (0, r.sign)(e[0]) * (((0, r.abs)(e[0]) + r.pi) % r.tau - r.pi);
    }

    function t(e, i) {
      var t = n(i),
          o = i[1],
          u = (0, r.sin)(o),
          l = [(0, r.sin)(t), -(0, r.cos)(t), 0],
          c = 0,
          f = 0;
      s.reset(), 1 === u ? o = r.halfPi + r.epsilon : -1 === u && (o = -r.halfPi - r.epsilon);

      for (var p = 0, d = e.length; p < d; ++p) {
        if (P = (v = e[p]).length) for (var v, P, h = v[P - 1], q = n(h), _ = h[1] / 2 + r.quarterPi, b = (0, r.sin)(_), g = (0, r.cos)(_), m = 0; m < P; ++m, q = z, b = I, g = M, h = x) {
          var x = v[m],
              z = n(x),
              C = x[1] / 2 + r.quarterPi,
              I = (0, r.sin)(C),
              M = (0, r.cos)(C),
              N = z - q,
              j = N >= 0 ? 1 : -1,
              y = j * N,
              O = y > r.pi,
              k = b * I;

          if (s.add((0, r.atan2)(k * j * (0, r.sin)(y), g * M + k * (0, r.cos)(y))), c += O ? N + j * r.tau : N, O ^ q >= t ^ z >= t) {
            var w = (0, a.cartesianCross)((0, a.cartesian)(h), (0, a.cartesian)(x));
            (0, a.cartesianNormalizeInPlace)(w);
            var A = (0, a.cartesianCross)(l, w);
            (0, a.cartesianNormalizeInPlace)(A);
            var B = (O ^ N >= 0 ? -1 : 1) * (0, r.asin)(A[2]);
            (o > B || o === B && (w[0] || w[1])) && (f += O ^ N >= 0 ? 1 : -1);
          }
        }
      }

      return (c < -r.epsilon || c < r.epsilon && s < -r.epsilon) ^ 1 & f;
    }
  }, {
    "./adder": "GlqK",
    "./cartesian": "+rFM",
    "./math": "sEgP"
  }],
  "bbiM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = o(require("./buffer")),
        t = o(require("./rejoin")),
        e = require("../math"),
        i = o(require("../polygonContains")),
        l = require("d3-array");

    function o(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function r(e, o, r, f) {
      return function (p) {
        var c,
            d,
            s,
            h = o(p),
            g = (0, n.default)(),
            S = o(g),
            y = !1,
            E = {
          point: q,
          lineStart: P,
          lineEnd: x,
          polygonStart: function polygonStart() {
            E.point = _, E.lineStart = b, E.lineEnd = j, d = [], c = [];
          },
          polygonEnd: function polygonEnd() {
            E.point = q, E.lineStart = P, E.lineEnd = x, d = (0, l.merge)(d);
            var n = (0, i.default)(c, f);
            d.length ? (y || (p.polygonStart(), y = !0), (0, t.default)(d, a, n, r, p)) : n && (y || (p.polygonStart(), y = !0), p.lineStart(), r(null, null, 1, p), p.lineEnd()), y && (p.polygonEnd(), y = !1), d = c = null;
          },
          sphere: function sphere() {
            p.polygonStart(), p.lineStart(), r(null, null, 1, p), p.lineEnd(), p.polygonEnd();
          }
        };

        function q(n, t) {
          e(n, t) && p.point(n, t);
        }

        function v(n, t) {
          h.point(n, t);
        }

        function P() {
          E.point = v, h.lineStart();
        }

        function x() {
          E.point = q, h.lineEnd();
        }

        function _(n, t) {
          s.push([n, t]), S.point(n, t);
        }

        function b() {
          S.lineStart(), s = [];
        }

        function j() {
          _(s[0][0], s[0][1]), S.lineEnd();
          var n,
              t,
              e,
              i,
              l = S.clean(),
              o = g.result(),
              r = o.length;
          if (s.pop(), c.push(s), s = null, r) if (1 & l) {
            if ((t = (e = o[0]).length - 1) > 0) {
              for (y || (p.polygonStart(), y = !0), p.lineStart(), n = 0; n < t; ++n) {
                p.point((i = e[n])[0], i[1]);
              }

              p.lineEnd();
            }
          } else r > 1 && 2 & l && o.push(o.pop().concat(o.shift())), d.push(o.filter(u));
        }

        return E;
      };
    }

    function u(n) {
      return n.length > 1;
    }

    function a(n, t) {
      return ((n = n.x)[0] < 0 ? n[1] - e.halfPi - e.epsilon : e.halfPi - n[1]) - ((t = t.x)[0] < 0 ? t[1] - e.halfPi - e.epsilon : e.halfPi - t[1]);
    }
  }, {
    "./buffer": "VrlK",
    "./rejoin": "03nq",
    "../math": "sEgP",
    "../polygonContains": "Cmis",
    "d3-array": "cBuZ"
  }],
  "CWnN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var i = t(require("./index")),
        n = require("../math");

    function t(i) {
      return i && i.__esModule ? i : {
        default: i
      };
    }

    var e = (0, i.default)(function () {
      return !0;
    }, o, a, [-n.pi, -n.halfPi]);

    function o(i) {
      var t,
          e = NaN,
          o = NaN,
          a = NaN;
      return {
        lineStart: function lineStart() {
          i.lineStart(), t = 1;
        },
        point: function point(l, r) {
          var s = l > 0 ? n.pi : -n.pi,
              u = (0, n.abs)(l - e);
          (0, n.abs)(u - n.pi) < n.epsilon ? (i.point(e, o = (o + r) / 2 > 0 ? n.halfPi : -n.halfPi), i.point(a, o), i.lineEnd(), i.lineStart(), i.point(s, o), i.point(l, o), t = 0) : a !== s && u >= n.pi && ((0, n.abs)(e - a) < n.epsilon && (e -= a * n.epsilon), (0, n.abs)(l - s) < n.epsilon && (l -= s * n.epsilon), o = p(e, o, l, r), i.point(a, o), i.lineEnd(), i.lineStart(), i.point(s, o), t = 0), i.point(e = l, o = r), a = s;
        },
        lineEnd: function lineEnd() {
          i.lineEnd(), e = o = NaN;
        },
        clean: function clean() {
          return 2 - t;
        }
      };
    }

    function p(i, t, e, o) {
      var p,
          a,
          l = (0, n.sin)(i - e);
      return (0, n.abs)(l) > n.epsilon ? (0, n.atan)(((0, n.sin)(t) * (a = (0, n.cos)(o)) * (0, n.sin)(e) - (0, n.sin)(o) * (p = (0, n.cos)(t)) * (0, n.sin)(i)) / (p * a * l)) : (t + o) / 2;
    }

    function a(i, t, e, o) {
      var p;
      if (null == i) p = e * n.halfPi, o.point(-n.pi, p), o.point(0, p), o.point(n.pi, p), o.point(n.pi, 0), o.point(n.pi, -p), o.point(0, -p), o.point(-n.pi, -p), o.point(-n.pi, 0), o.point(-n.pi, p);else if ((0, n.abs)(i[0] - t[0]) > n.epsilon) {
        var a = i[0] < t[0] ? n.pi : -n.pi;
        p = e * a / 2, o.point(-a, p), o.point(0, p), o.point(a, p);
      } else o.point(t[0], t[1]);
    }

    exports.default = e;
  }, {
    "./index": "bbiM",
    "../math": "sEgP"
  }],
  "1uul": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var e = require("../cartesian"),
        n = require("../circle"),
        i = require("../math"),
        r = t(require("../pointEqual")),
        a = t(require("./index"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(t) {
      var c = (0, i.cos)(t),
          s = 6 * i.radians,
          l = c > 0,
          o = (0, i.abs)(c) > i.epsilon;

      function u(e, n) {
        return (0, i.cos)(e) * (0, i.cos)(n) > c;
      }

      function p(n, r, a) {
        var t = (0, e.cartesian)(n),
            s = (0, e.cartesian)(r),
            l = [1, 0, 0],
            o = (0, e.cartesianCross)(t, s),
            u = (0, e.cartesianDot)(o, o),
            p = o[0],
            f = u - p * p;
        if (!f) return !a && n;
        var d = c * u / f,
            v = -c * p / f,
            S = (0, e.cartesianCross)(l, o),
            q = (0, e.cartesianScale)(l, d),
            E = (0, e.cartesianScale)(o, v);
        (0, e.cartesianAddInPlace)(q, E);

        var b = S,
            D = (0, e.cartesianDot)(q, b),
            P = (0, e.cartesianDot)(b, b),
            _ = D * D - P * ((0, e.cartesianDot)(q, q) - 1);

        if (!(_ < 0)) {
          var h = (0, i.sqrt)(_),
              x = (0, e.cartesianScale)(b, (-D - h) / P);
          if ((0, e.cartesianAddInPlace)(x, q), x = (0, e.spherical)(x), !a) return x;
          var A,
              I = n[0],
              m = r[0],
              C = n[1],
              M = r[1];
          m < I && (A = I, I = m, m = A);
          var j = m - I,
              y = (0, i.abs)(j - i.pi) < i.epsilon;

          if (!y && M < C && (A = C, C = M, M = A), y || j < i.epsilon ? y ? C + M > 0 ^ x[1] < ((0, i.abs)(x[0] - I) < i.epsilon ? C : M) : C <= x[1] && x[1] <= M : j > i.pi ^ (I <= x[0] && x[0] <= m)) {
            var O = (0, e.cartesianScale)(b, (-D + h) / P);
            return (0, e.cartesianAddInPlace)(O, q), [x, (0, e.spherical)(O)];
          }
        }
      }

      function f(e, n) {
        var r = l ? t : i.pi - t,
            a = 0;
        return e < -r ? a |= 1 : e > r && (a |= 2), n < -r ? a |= 4 : n > r && (a |= 8), a;
      }

      return (0, a.default)(u, function (e) {
        var n, a, t, c, s;
        return {
          lineStart: function lineStart() {
            c = t = !1, s = 1;
          },
          point: function point(d, v) {
            var S,
                q = [d, v],
                E = u(d, v),
                b = l ? E ? 0 : f(d, v) : E ? f(d + (d < 0 ? i.pi : -i.pi), v) : 0;
            if (!n && (c = t = E) && e.lineStart(), E !== t && (!(S = p(n, q)) || (0, r.default)(n, S) || (0, r.default)(q, S)) && (q[0] += i.epsilon, q[1] += i.epsilon, E = u(q[0], q[1])), E !== t) s = 0, E ? (e.lineStart(), S = p(q, n), e.point(S[0], S[1])) : (S = p(n, q), e.point(S[0], S[1]), e.lineEnd()), n = S;else if (o && n && l ^ E) {
              var D;
              b & a || !(D = p(q, n, !0)) || (s = 0, l ? (e.lineStart(), e.point(D[0][0], D[0][1]), e.point(D[1][0], D[1][1]), e.lineEnd()) : (e.point(D[1][0], D[1][1]), e.lineEnd(), e.lineStart(), e.point(D[0][0], D[0][1])));
            }
            !E || n && (0, r.default)(n, q) || e.point(q[0], q[1]), n = q, t = E, a = b;
          },
          lineEnd: function lineEnd() {
            t && e.lineEnd(), n = null;
          },
          clean: function clean() {
            return s | (c && t) << 1;
          }
        };
      }, function (e, i, r, a) {
        (0, n.circleStream)(a, t, s, r, e, i);
      }, l ? [0, -t] : [-i.pi, t - i.pi]);
    }
  }, {
    "../cartesian": "+rFM",
    "../circle": "dbGM",
    "../math": "sEgP",
    "../pointEqual": "j4Ms",
    "./index": "bbiM"
  }],
  "RhqQ": [function (require, module, exports) {
    "use strict";

    function e(e, r, f, i, t, u) {
      var n,
          s = e[0],
          l = e[1],
          o = 0,
          a = 1,
          c = r[0] - s,
          d = r[1] - l;

      if (n = f - s, c || !(n > 0)) {
        if (n /= c, c < 0) {
          if (n < o) return;
          n < a && (a = n);
        } else if (c > 0) {
          if (n > a) return;
          n > o && (o = n);
        }

        if (n = t - s, c || !(n < 0)) {
          if (n /= c, c < 0) {
            if (n > a) return;
            n > o && (o = n);
          } else if (c > 0) {
            if (n < o) return;
            n < a && (a = n);
          }

          if (n = i - l, d || !(n > 0)) {
            if (n /= d, d < 0) {
              if (n < o) return;
              n < a && (a = n);
            } else if (d > 0) {
              if (n > a) return;
              n > o && (o = n);
            }

            if (n = u - l, d || !(n < 0)) {
              if (n /= d, d < 0) {
                if (n > a) return;
                n > o && (o = n);
              } else if (d > 0) {
                if (n < o) return;
                n < a && (a = n);
              }

              return o > 0 && (e[0] = s + o * c, e[1] = l + o * d), a < 1 && (r[0] = s + a * c, r[1] = l + a * d), !0;
            }
          }
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "E6SH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("../math"),
        t = o(require("./buffer")),
        e = o(require("./line")),
        r = o(require("./rejoin")),
        i = require("d3-array");

    function o(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var u = 1e9,
        a = -u;

    function l(o, l, f, p) {
      function s(n, t) {
        return o <= n && n <= f && l <= t && t <= p;
      }

      function c(n, t, e, r) {
        var i = 0,
            u = 0;
        if (null == n || (i = d(n, e)) !== (u = d(t, e)) || v(n, t) < 0 ^ e > 0) do {
          r.point(0 === i || 3 === i ? o : f, i > 1 ? p : l);
        } while ((i = (i + e + 4) % 4) !== u);else r.point(t[0], t[1]);
      }

      function d(t, e) {
        return (0, n.abs)(t[0] - o) < n.epsilon ? e > 0 ? 0 : 3 : (0, n.abs)(t[0] - f) < n.epsilon ? e > 0 ? 2 : 1 : (0, n.abs)(t[1] - l) < n.epsilon ? e > 0 ? 1 : 0 : e > 0 ? 3 : 2;
      }

      function h(n, t) {
        return v(n.x, t.x);
      }

      function v(n, t) {
        var e = d(n, 1),
            r = d(t, 1);
        return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
      }

      return function (n) {
        var d,
            v,
            m,
            M,
            g,
            x,
            S,
            y,
            E,
            b,
            q,
            _ = n,
            j = (0, t.default)(),
            N = {
          point: w,
          lineStart: function lineStart() {
            N.point = O, v && v.push(m = []);
            b = !0, E = !1, S = y = NaN;
          },
          lineEnd: function lineEnd() {
            d && (O(M, g), x && E && j.rejoin(), d.push(j.result()));
            N.point = w, E && _.lineEnd();
          },
          polygonStart: function polygonStart() {
            _ = j, d = [], v = [], q = !0;
          },
          polygonEnd: function polygonEnd() {
            var t = function () {
              for (var n = 0, t = 0, e = v.length; t < e; ++t) {
                for (var r, i, u = v[t], a = 1, l = u.length, f = u[0], s = f[0], c = f[1]; a < l; ++a) {
                  r = s, i = c, f = u[a], s = f[0], c = f[1], i <= p ? c > p && (s - r) * (p - i) > (c - i) * (o - r) && ++n : c <= p && (s - r) * (p - i) < (c - i) * (o - r) && --n;
                }
              }

              return n;
            }(),
                e = q && t,
                u = (d = (0, i.merge)(d)).length;

            (e || u) && (n.polygonStart(), e && (n.lineStart(), c(null, null, 1, n), n.lineEnd()), u && (0, r.default)(d, h, t, c, n), n.polygonEnd());
            _ = n, d = v = m = null;
          }
        };

        function w(n, t) {
          s(n, t) && _.point(n, t);
        }

        function O(n, t) {
          var r = s(n, t);
          if (v && m.push([n, t]), b) M = n, g = t, x = r, b = !1, r && (_.lineStart(), _.point(n, t));else if (r && E) _.point(n, t);else {
            var i = [S = Math.max(a, Math.min(u, S)), y = Math.max(a, Math.min(u, y))],
                c = [n = Math.max(a, Math.min(u, n)), t = Math.max(a, Math.min(u, t))];
            (0, e.default)(i, c, o, l, f, p) ? (E || (_.lineStart(), _.point(i[0], i[1])), _.point(c[0], c[1]), r || _.lineEnd(), q = !1) : r && (_.lineStart(), _.point(n, t), q = !1);
          }
          S = n, y = t, E = r;
        }

        return N;
      };
    }
  }, {
    "../math": "sEgP",
    "./buffer": "VrlK",
    "./line": "RhqQ",
    "./rejoin": "03nq",
    "d3-array": "cBuZ"
  }],
  "Pttt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./rectangle"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      var t,
          r,
          n,
          u = 0,
          l = 0,
          o = 960,
          a = 500;
      return n = {
        stream: function stream(n) {
          return t && r === n ? t : t = (0, e.default)(u, l, o, a)(r = n);
        },
        extent: function extent(e) {
          return arguments.length ? (u = +e[0][0], l = +e[0][1], o = +e[1][0], a = +e[1][1], t = r = null, n) : [[u, l], [o, a]];
        }
      };
    }
  }, {
    "./rectangle": "E6SH"
  }],
  "rgN/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = q;

    var e = r(require("./adder")),
        n = require("./math"),
        t = r(require("./noop")),
        a = r(require("./stream"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i,
        u,
        d,
        o = (0, e.default)(),
        s = {
      sphere: t.default,
      point: t.default,
      lineStart: l,
      lineEnd: t.default,
      polygonStart: t.default,
      polygonEnd: t.default
    };

    function l() {
      s.point = c, s.lineEnd = f;
    }

    function f() {
      s.point = s.lineEnd = t.default;
    }

    function c(e, t) {
      e *= n.radians, t *= n.radians, i = e, u = (0, n.sin)(t), d = (0, n.cos)(t), s.point = p;
    }

    function p(e, t) {
      e *= n.radians, t *= n.radians;
      var a = (0, n.sin)(t),
          r = (0, n.cos)(t),
          s = (0, n.abs)(e - i),
          l = (0, n.cos)(s),
          f = r * (0, n.sin)(s),
          c = d * a - u * r * l,
          p = u * a + d * r * l;
      o.add((0, n.atan2)((0, n.sqrt)(f * f + c * c), p)), i = e, u = a, d = r;
    }

    function q(e) {
      return o.reset(), (0, a.default)(e, s), +o;
    }
  }, {
    "./adder": "GlqK",
    "./math": "sEgP",
    "./noop": "BhKh",
    "./stream": "XBFK"
  }],
  "IoFW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = t(require("./length"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = [null, null],
        u = {
      type: "LineString",
      coordinates: r
    };

    function n(t, n) {
      return r[0] = t, r[1] = n, (0, e.default)(u);
    }
  }, {
    "./length": "rgN/"
  }],
  "bl0/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d;

    var r = e(require("./polygonContains")),
        n = e(require("./distance")),
        t = require("./math");

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var o = {
      Feature: function Feature(r, n) {
        return i(r.geometry, n);
      },
      FeatureCollection: function FeatureCollection(r, n) {
        for (var t = r.features, e = -1, o = t.length; ++e < o;) {
          if (i(t[e].geometry, n)) return !0;
        }

        return !1;
      }
    },
        u = {
      Sphere: function Sphere() {
        return !0;
      },
      Point: function Point(r, n) {
        return f(r.coordinates, n);
      },
      MultiPoint: function MultiPoint(r, n) {
        for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) {
          if (f(t[e], n)) return !0;
        }

        return !1;
      },
      LineString: function LineString(r, n) {
        return a(r.coordinates, n);
      },
      MultiLineString: function MultiLineString(r, n) {
        for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) {
          if (a(t[e], n)) return !0;
        }

        return !1;
      },
      Polygon: function Polygon(r, n) {
        return c(r.coordinates, n);
      },
      MultiPolygon: function MultiPolygon(r, n) {
        for (var t = r.coordinates, e = -1, o = t.length; ++e < o;) {
          if (c(t[e], n)) return !0;
        }

        return !1;
      },
      GeometryCollection: function GeometryCollection(r, n) {
        for (var t = r.geometries, e = -1, o = t.length; ++e < o;) {
          if (i(t[e], n)) return !0;
        }

        return !1;
      }
    };

    function i(r, n) {
      return !(!r || !u.hasOwnProperty(r.type)) && u[r.type](r, n);
    }

    function f(r, t) {
      return 0 === (0, n.default)(r, t);
    }

    function a(r, e) {
      for (var o, u, i, f = 0, a = r.length; f < a; f++) {
        if (0 === (u = (0, n.default)(r[f], e))) return !0;
        if (f > 0 && (i = (0, n.default)(r[f], r[f - 1])) > 0 && o <= i && u <= i && (o + u - i) * (1 - Math.pow((o - u) / i, 2)) < t.epsilon2 * i) return !0;
        o = u;
      }

      return !1;
    }

    function c(n, t) {
      return !!(0, r.default)(n.map(l), s(t));
    }

    function l(r) {
      return (r = r.map(s)).pop(), r;
    }

    function s(r) {
      return [r[0] * t.radians, r[1] * t.radians];
    }

    function d(r, n) {
      return (r && o.hasOwnProperty(r.type) ? o[r.type] : i)(r, n);
    }
  }, {
    "./polygonContains": "Cmis",
    "./distance": "IoFW",
    "./math": "sEgP"
  }],
  "+fWg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.graticule10 = o;

    var n = require("d3-array"),
        e = require("./math");

    function t(t, r, i) {
      var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
      return function (n) {
        return o.map(function (e) {
          return [n, e];
        });
      };
    }

    function r(t, r, i) {
      var o = (0, n.range)(t, r - e.epsilon, i).concat(r);
      return function (n) {
        return o.map(function (e) {
          return [e, n];
        });
      };
    }

    function i() {
      var i,
          o,
          u,
          c,
          a,
          s,
          l,
          p,
          f,
          g,
          M,
          x,
          h = 10,
          m = h,
          d = 90,
          v = 360,
          j = 2.5;

      function y() {
        return {
          type: "MultiLineString",
          coordinates: b()
        };
      }

      function b() {
        return (0, n.range)((0, e.ceil)(c / d) * d, u, d).map(M).concat((0, n.range)((0, e.ceil)(p / v) * v, l, v).map(x)).concat((0, n.range)((0, e.ceil)(o / h) * h, i, h).filter(function (n) {
          return (0, e.abs)(n % d) > e.epsilon;
        }).map(f)).concat((0, n.range)((0, e.ceil)(s / m) * m, a, m).filter(function (n) {
          return (0, e.abs)(n % v) > e.epsilon;
        }).map(g));
      }

      return y.lines = function () {
        return b().map(function (n) {
          return {
            type: "LineString",
            coordinates: n
          };
        });
      }, y.outline = function () {
        return {
          type: "Polygon",
          coordinates: [M(c).concat(x(l).slice(1), M(u).reverse().slice(1), x(p).reverse().slice(1))]
        };
      }, y.extent = function (n) {
        return arguments.length ? y.extentMajor(n).extentMinor(n) : y.extentMinor();
      }, y.extentMajor = function (n) {
        return arguments.length ? (c = +n[0][0], u = +n[1][0], p = +n[0][1], l = +n[1][1], c > u && (n = c, c = u, u = n), p > l && (n = p, p = l, l = n), y.precision(j)) : [[c, p], [u, l]];
      }, y.extentMinor = function (n) {
        return arguments.length ? (o = +n[0][0], i = +n[1][0], s = +n[0][1], a = +n[1][1], o > i && (n = o, o = i, i = n), s > a && (n = s, s = a, a = n), y.precision(j)) : [[o, s], [i, a]];
      }, y.step = function (n) {
        return arguments.length ? y.stepMajor(n).stepMinor(n) : y.stepMinor();
      }, y.stepMajor = function (n) {
        return arguments.length ? (d = +n[0], v = +n[1], y) : [d, v];
      }, y.stepMinor = function (n) {
        return arguments.length ? (h = +n[0], m = +n[1], y) : [h, m];
      }, y.precision = function (n) {
        return arguments.length ? (j = +n, f = t(s, a, 90), g = r(o, i, j), M = t(p, l, 90), x = r(c, u, j), y) : j;
      }, y.extentMajor([[-180, -90 + e.epsilon], [180, 90 - e.epsilon]]).extentMinor([[-180, -80 - e.epsilon], [180, 80 + e.epsilon]]);
    }

    function o() {
      return i()();
    }
  }, {
    "d3-array": "cBuZ",
    "./math": "sEgP"
  }],
  "PyvU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var e = require("./math");

    function s(s, r) {
      var n = s[0] * e.radians,
          a = s[1] * e.radians,
          i = r[0] * e.radians,
          t = r[1] * e.radians,
          d = (0, e.cos)(a),
          o = (0, e.sin)(a),
          u = (0, e.cos)(t),
          c = (0, e.sin)(t),
          v = d * (0, e.cos)(n),
          f = d * (0, e.sin)(n),
          g = u * (0, e.cos)(i),
          h = u * (0, e.sin)(i),
          l = 2 * (0, e.asin)((0, e.sqrt)((0, e.haversin)(t - a) + d * u * (0, e.haversin)(i - n))),
          p = (0, e.sin)(l),
          q = l ? function (s) {
        var r = (0, e.sin)(s *= l) / p,
            n = (0, e.sin)(l - s) / p,
            a = n * v + r * g,
            i = n * f + r * h,
            t = n * o + r * c;
        return [(0, e.atan2)(i, a) * e.degrees, (0, e.atan2)(t, (0, e.sqrt)(a * a + i * i)) * e.degrees];
      } : function () {
        return [n * e.degrees, a * e.degrees];
      };
      return q.distance = l, q;
    }
  }, {
    "./math": "sEgP"
  }],
  "tBtz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = r(require("../adder")),
        t = require("../math"),
        n = r(require("../noop"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u,
        o,
        i,
        a,
        d = (0, e.default)(),
        l = (0, e.default)(),
        f = {
      point: n.default,
      lineStart: n.default,
      lineEnd: n.default,
      polygonStart: function polygonStart() {
        f.lineStart = p, f.lineEnd = v;
      },
      polygonEnd: function polygonEnd() {
        f.lineStart = f.lineEnd = f.point = n.default, d.add((0, t.abs)(l)), l.reset();
      },
      result: function result() {
        var e = d / 2;
        return d.reset(), e;
      }
    };

    function p() {
      f.point = s;
    }

    function s(e, t) {
      f.point = c, u = i = e, o = a = t;
    }

    function c(e, t) {
      l.add(a * e - i * t), i = e, a = t;
    }

    function v() {
      c(u, o);
    }

    var E = f;
    exports.default = E;
  }, {
    "../adder": "GlqK",
    "../math": "sEgP",
    "../noop": "BhKh"
  }],
  "Mzp9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("../noop"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = 1 / 0,
        u = r,
        n = -r,
        o = n,
        l = {
      point: a,
      lineStart: e.default,
      lineEnd: e.default,
      polygonStart: e.default,
      polygonEnd: e.default,
      result: function result() {
        var e = [[r, u], [n, o]];
        return n = o = -(u = r = 1 / 0), e;
      }
    };

    function a(e, t) {
      e < r && (r = e), e > n && (n = e), t < u && (u = t), t > o && (o = t);
    }

    var d = l;
    exports.default = d;
  }, {
    "../noop": "BhKh"
  }],
  "HLbf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var n,
        t,
        i,
        o,
        e = require("../math"),
        r = 0,
        u = 0,
        a = 0,
        f = 0,
        c = 0,
        l = 0,
        p = 0,
        d = 0,
        s = 0,
        v = {
      point: E,
      lineStart: N,
      lineEnd: x,
      polygonStart: function polygonStart() {
        v.lineStart = y, v.lineEnd = g;
      },
      polygonEnd: function polygonEnd() {
        v.point = E, v.lineStart = N, v.lineEnd = x;
      },
      result: function result() {
        var n = s ? [p / s, d / s] : l ? [f / l, c / l] : a ? [r / a, u / a] : [NaN, NaN];
        return r = u = a = f = c = l = p = d = s = 0, n;
      }
    };

    function E(n, t) {
      r += n, u += t, ++a;
    }

    function N() {
      v.point = S;
    }

    function S(n, t) {
      v.point = q, E(i = n, o = t);
    }

    function q(n, t) {
      var r = n - i,
          u = t - o,
          a = (0, e.sqrt)(r * r + u * u);
      f += a * (i + n) / 2, c += a * (o + t) / 2, l += a, E(i = n, o = t);
    }

    function x() {
      v.point = E;
    }

    function y() {
      v.point = _;
    }

    function g() {
      b(n, t);
    }

    function _(e, r) {
      v.point = b, E(n = i = e, t = o = r);
    }

    function b(n, t) {
      var r = n - i,
          u = t - o,
          a = (0, e.sqrt)(r * r + u * u);
      f += a * (i + n) / 2, c += a * (o + t) / 2, l += a, p += (a = o * n - i * t) * (i + n), d += a * (o + t), s += 3 * a, E(i = n, o = t);
    }

    var h = v;
    exports.default = h;
  }, {
    "../math": "sEgP"
  }],
  "ndK6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var t = require("../math"),
        i = e(require("../noop"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      this._context = t;
    }

    n.prototype = {
      _radius: 4.5,
      pointRadius: function pointRadius(t) {
        return this._radius = t, this;
      },
      polygonStart: function polygonStart() {
        this._line = 0;
      },
      polygonEnd: function polygonEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        0 === this._line && this._context.closePath(), this._point = NaN;
      },
      point: function point(i, e) {
        switch (this._point) {
          case 0:
            this._context.moveTo(i, e), this._point = 1;
            break;

          case 1:
            this._context.lineTo(i, e);

            break;

          default:
            this._context.moveTo(i + this._radius, e), this._context.arc(i, e, this._radius, 0, t.tau);
        }
      },
      result: i.default
    };
  }, {
    "../math": "sEgP",
    "../noop": "BhKh"
  }],
  "CqmG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = r(require("../adder")),
        e = require("../math"),
        n = r(require("../noop"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var o,
        u,
        i,
        a,
        d,
        l = (0, t.default)(),
        f = {
      point: n.default,
      lineStart: function lineStart() {
        f.point = p;
      },
      lineEnd: function lineEnd() {
        o && c(u, i), f.point = n.default;
      },
      polygonStart: function polygonStart() {
        o = !0;
      },
      polygonEnd: function polygonEnd() {
        o = null;
      },
      result: function result() {
        var t = +l;
        return l.reset(), t;
      }
    };

    function p(t, e) {
      f.point = c, u = a = t, i = d = e;
    }

    function c(t, n) {
      a -= t, d -= n, l.add((0, e.sqrt)(a * a + d * d)), a = t, d = n;
    }

    var s = f;
    exports.default = s;
  }, {
    "../adder": "GlqK",
    "../math": "sEgP",
    "../noop": "BhKh"
  }],
  "mB17": [function (require, module, exports) {
    "use strict";

    function t() {
      this._string = [];
    }

    function i(t) {
      return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, t.prototype = {
      _radius: 4.5,
      _circle: i(4.5),
      pointRadius: function pointRadius(t) {
        return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
      },
      polygonStart: function polygonStart() {
        this._line = 0;
      },
      polygonEnd: function polygonEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        0 === this._line && this._string.push("Z"), this._point = NaN;
      },
      point: function point(t, n) {
        switch (this._point) {
          case 0:
            this._string.push("M", t, ",", n), this._point = 1;
            break;

          case 1:
            this._string.push("L", t, ",", n);

            break;

          default:
            null == this._circle && (this._circle = i(this._radius)), this._string.push("M", t, ",", n, this._circle);
        }
      },
      result: function result() {
        if (this._string.length) {
          var t = this._string.join("");

          return this._string = [], t;
        }

        return null;
      }
    };
  }, {}],
  "01A7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;
    var e = f(require("../identity")),
        t = f(require("../stream")),
        u = f(require("./area")),
        n = f(require("./bounds")),
        r = f(require("./centroid")),
        i = f(require("./context")),
        l = f(require("./measure")),
        o = f(require("./string"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(f, a) {
      var d,
          s,
          c = 4.5;

      function p(e) {
        return e && ("function" == typeof c && s.pointRadius(+c.apply(this, arguments)), (0, t.default)(e, d(s))), s.result();
      }

      return p.area = function (e) {
        return (0, t.default)(e, d(u.default)), u.default.result();
      }, p.measure = function (e) {
        return (0, t.default)(e, d(l.default)), l.default.result();
      }, p.bounds = function (e) {
        return (0, t.default)(e, d(n.default)), n.default.result();
      }, p.centroid = function (e) {
        return (0, t.default)(e, d(r.default)), r.default.result();
      }, p.projection = function (t) {
        return arguments.length ? (d = null == t ? (f = null, e.default) : (f = t).stream, p) : f;
      }, p.context = function (e) {
        return arguments.length ? (s = null == e ? (a = null, new o.default()) : new i.default(a = e), "function" != typeof c && s.pointRadius(c), p) : a;
      }, p.pointRadius = function (e) {
        return arguments.length ? (c = "function" == typeof e ? e : (s.pointRadius(+e), +e), p) : c;
      }, p.projection(f).context(a);
    }
  }, {
    "../identity": "nPOL",
    "../stream": "XBFK",
    "./area": "tBtz",
    "./bounds": "Mzp9",
    "./centroid": "HLbf",
    "./context": "ndK6",
    "./measure": "CqmG",
    "./string": "mB17"
  }],
  "ubFV": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return {
        stream: n(t)
      };
    }

    function n(t) {
      return function (n) {
        var e = new r();

        for (var o in t) {
          e[o] = t[o];
        }

        return e.stream = n, e;
      };
    }

    function r() {}

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.transformer = n, r.prototype = {
      constructor: r,
      point: function point(t, n) {
        this.stream.point(t, n);
      },
      sphere: function sphere() {
        this.stream.sphere();
      },
      lineStart: function lineStart() {
        this.stream.lineStart();
      },
      lineEnd: function lineEnd() {
        this.stream.lineEnd();
      },
      polygonStart: function polygonStart() {
        this.stream.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        this.stream.polygonEnd();
      }
    };
  }, {}],
  "Ty3O": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.fitExtent = u, exports.fitSize = a, exports.fitWidth = l, exports.fitHeight = i;
    var t = n(require("../stream")),
        e = n(require("../path/bounds"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function r(n, r, u) {
      var a = n.clipExtent && n.clipExtent();
      return n.scale(150).translate([0, 0]), null != a && n.clipExtent(null), (0, t.default)(u, n.stream(e.default)), r(e.default.result()), null != a && n.clipExtent(a), n;
    }

    function u(t, e, n) {
      return r(t, function (n) {
        var r = e[1][0] - e[0][0],
            u = e[1][1] - e[0][1],
            a = Math.min(r / (n[1][0] - n[0][0]), u / (n[1][1] - n[0][1])),
            l = +e[0][0] + (r - a * (n[1][0] + n[0][0])) / 2,
            i = +e[0][1] + (u - a * (n[1][1] + n[0][1])) / 2;
        t.scale(150 * a).translate([l, i]);
      }, n);
    }

    function a(t, e, n) {
      return u(t, [[0, 0], e], n);
    }

    function l(t, e, n) {
      return r(t, function (n) {
        var r = +e,
            u = r / (n[1][0] - n[0][0]),
            a = (r - u * (n[1][0] + n[0][0])) / 2,
            l = -u * n[0][1];
        t.scale(150 * u).translate([a, l]);
      }, n);
    }

    function i(t, e, n) {
      return r(t, function (n) {
        var r = +e,
            u = r / (n[1][1] - n[0][1]),
            a = -u * n[0][0],
            l = (r - u * (n[1][1] + n[0][1])) / 2;
        t.scale(150 * u).translate([a, l]);
      }, n);
    }
  }, {
    "../stream": "XBFK",
    "../path/bounds": "Mzp9"
  }],
  "1vIa": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var n = require("../cartesian"),
        t = require("../math"),
        i = require("../transform"),
        o = 16,
        r = (0, t.cos)(30 * t.radians);

    function e(n, t) {
      return +t ? u(n, t) : a(n);
    }

    function a(n) {
      return (0, i.transformer)({
        point: function point(t, i) {
          t = n(t, i), this.stream.point(t[0], t[1]);
        }
      });
    }

    function u(i, e) {
      function a(n, o, u, s, c, f, p, l, d, v, E, S, b, y) {
        var g = p - n,
            m = l - o,
            q = g * g + m * m;

        if (q > 4 * e && b--) {
          var h = s + v,
              x = c + E,
              N = f + S,
              _ = (0, t.sqrt)(h * h + x * x + N * N),
              j = (0, t.asin)(N /= _),
              M = (0, t.abs)((0, t.abs)(N) - 1) < t.epsilon || (0, t.abs)(u - d) < t.epsilon ? (u + d) / 2 : (0, t.atan2)(x, h),
              O = i(M, j),
              P = O[0],
              k = O[1],
              w = P - n,
              z = k - o,
              A = m * w - g * z;

          (A * A / q > e || (0, t.abs)((g * w + m * z) / q - .5) > .3 || s * v + c * E + f * S < r) && (a(n, o, u, s, c, f, P, k, M, h /= _, x /= _, N, b, y), y.point(P, k), a(P, k, M, h, x, N, p, l, d, v, E, S, b, y));
        }
      }

      return function (t) {
        var r,
            e,
            u,
            s,
            c,
            f,
            p,
            l,
            d,
            v,
            E,
            S,
            b = {
          point: y,
          lineStart: g,
          lineEnd: q,
          polygonStart: function polygonStart() {
            t.polygonStart(), b.lineStart = h;
          },
          polygonEnd: function polygonEnd() {
            t.polygonEnd(), b.lineStart = g;
          }
        };

        function y(n, o) {
          n = i(n, o), t.point(n[0], n[1]);
        }

        function g() {
          l = NaN, b.point = m, t.lineStart();
        }

        function m(r, e) {
          var u = (0, n.cartesian)([r, e]),
              s = i(r, e);
          a(l, d, p, v, E, S, l = s[0], d = s[1], p = r, v = u[0], E = u[1], S = u[2], o, t), t.point(l, d);
        }

        function q() {
          b.point = y, t.lineEnd();
        }

        function h() {
          g(), b.point = x, b.lineEnd = N;
        }

        function x(n, t) {
          m(r = n, t), e = l, u = d, s = v, c = E, f = S, b.point = m;
        }

        function N() {
          a(l, d, p, v, E, S, e, u, r, s, c, f, o, t), b.lineEnd = q, q();
        }

        return b;
      };
    }
  }, {
    "../cartesian": "+rFM",
    "../math": "sEgP",
    "../transform": "ubFV"
  }],
  "t1yD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = h, exports.projectionMutator = v;

    var n = c(require("../clip/antimeridian")),
        e = c(require("../clip/circle")),
        t = c(require("../clip/rectangle")),
        r = c(require("../compose")),
        i = c(require("../identity")),
        u = require("../math"),
        a = require("../rotation"),
        l = require("../transform"),
        o = require("./fit"),
        f = c(require("./resample"));

    function c(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var s = (0, l.transformer)({
      point: function point(n, e) {
        this.stream.point(n * u.radians, e * u.radians);
      }
    });

    function d(n) {
      return (0, l.transformer)({
        point: function point(e, t) {
          var r = n(e, t);
          return this.stream.point(r[0], r[1]);
        }
      });
    }

    function g(n, e, t) {
      function r(r, i) {
        return [e + n * r, t - n * i];
      }

      return r.invert = function (r, i) {
        return [(r - e) / n, (t - i) / n];
      }, r;
    }

    function p(n, e, t, r) {
      var i = (0, u.cos)(r),
          a = (0, u.sin)(r),
          l = i * n,
          o = a * n,
          f = i / n,
          c = a / n,
          s = (a * t - i * e) / n,
          d = (a * e + i * t) / n;

      function g(n, r) {
        return [l * n - o * r + e, t - o * n - l * r];
      }

      return g.invert = function (n, e) {
        return [f * n - c * e + s, d - c * n - f * e];
      }, g;
    }

    function h(n) {
      return v(function () {
        return n;
      })();
    }

    function v(l) {
      var c,
          h,
          v,
          q,
          m,
          x,
          y,
          _,
          E,
          M,
          j = 150,
          z = 480,
          H = 250,
          S = 0,
          W = 0,
          b = 0,
          A = 0,
          O = 0,
          P = 0,
          R = null,
          k = n.default,
          w = null,
          B = i.default,
          C = .5;

      function D(n) {
        return _(n[0] * u.radians, n[1] * u.radians);
      }

      function F(n) {
        return (n = _.invert(n[0], n[1])) && [n[0] * u.degrees, n[1] * u.degrees];
      }

      function G() {
        var n = p(j, 0, 0, P).apply(null, c(S, W)),
            e = (P ? p : g)(j, z - n[0], H - n[1], P);
        return h = (0, a.rotateRadians)(b, A, O), y = (0, r.default)(c, e), _ = (0, r.default)(h, y), x = (0, f.default)(y, C), I();
      }

      function I() {
        return E = M = null, D;
      }

      return D.stream = function (n) {
        return E && M === n ? E : E = s(d(h)(k(x(B(M = n)))));
      }, D.preclip = function (n) {
        return arguments.length ? (k = n, R = void 0, I()) : k;
      }, D.postclip = function (n) {
        return arguments.length ? (B = n, w = v = q = m = null, I()) : B;
      }, D.clipAngle = function (t) {
        return arguments.length ? (k = +t ? (0, e.default)(R = t * u.radians) : (R = null, n.default), I()) : R * u.degrees;
      }, D.clipExtent = function (n) {
        return arguments.length ? (B = null == n ? (w = v = q = m = null, i.default) : (0, t.default)(w = +n[0][0], v = +n[0][1], q = +n[1][0], m = +n[1][1]), I()) : null == w ? null : [[w, v], [q, m]];
      }, D.scale = function (n) {
        return arguments.length ? (j = +n, G()) : j;
      }, D.translate = function (n) {
        return arguments.length ? (z = +n[0], H = +n[1], G()) : [z, H];
      }, D.center = function (n) {
        return arguments.length ? (S = n[0] % 360 * u.radians, W = n[1] % 360 * u.radians, G()) : [S * u.degrees, W * u.degrees];
      }, D.rotate = function (n) {
        return arguments.length ? (b = n[0] % 360 * u.radians, A = n[1] % 360 * u.radians, O = n.length > 2 ? n[2] % 360 * u.radians : 0, G()) : [b * u.degrees, A * u.degrees, O * u.degrees];
      }, D.angle = function (n) {
        return arguments.length ? (P = n % 360 * u.radians, G()) : P * u.degrees;
      }, D.precision = function (n) {
        return arguments.length ? (x = (0, f.default)(y, C = n * n), I()) : (0, u.sqrt)(C);
      }, D.fitExtent = function (n, e) {
        return (0, o.fitExtent)(D, n, e);
      }, D.fitSize = function (n, e) {
        return (0, o.fitSize)(D, n, e);
      }, D.fitWidth = function (n, e) {
        return (0, o.fitWidth)(D, n, e);
      }, D.fitHeight = function (n, e) {
        return (0, o.fitHeight)(D, n, e);
      }, function () {
        return c = l.apply(this, arguments), D.invert = c.invert && F, G();
      };
    }
  }, {
    "../clip/antimeridian": "CWnN",
    "../clip/circle": "1uul",
    "../clip/rectangle": "E6SH",
    "../compose": "hCea",
    "../identity": "nPOL",
    "../math": "sEgP",
    "../rotation": "KwdP",
    "../transform": "ubFV",
    "./fit": "Ty3O",
    "./resample": "1vIa"
  }],
  "FzMl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicProjection = t;

    var e = require("../math"),
        r = require("./index");

    function t(t) {
      var n = 0,
          i = e.pi / 3,
          o = (0, r.projectionMutator)(t),
          a = o(n, i);
      return a.parallels = function (r) {
        return arguments.length ? o(n = r[0] * e.radians, i = r[1] * e.radians) : [n * e.degrees, i * e.degrees];
      }, a;
    }
  }, {
    "../math": "sEgP",
    "./index": "t1yD"
  }],
  "5xg5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cylindricalEqualAreaRaw = e;

    var r = require("../math");

    function e(e) {
      var n = (0, r.cos)(e);

      function t(e, t) {
        return [e * n, (0, r.sin)(t) / n];
      }

      return t.invert = function (e, t) {
        return [e / n, (0, r.asin)(t * n)];
      }, t;
    }
  }, {
    "../math": "sEgP"
  }],
  "uvEu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicEqualAreaRaw = i, exports.default = a;

    var r = require("../math"),
        e = require("./conic"),
        n = require("./cylindricalEqualArea");

    function i(e, i) {
      var a = (0, r.sin)(e),
          t = (a + (0, r.sin)(i)) / 2;
      if ((0, r.abs)(t) < r.epsilon) return (0, n.cylindricalEqualAreaRaw)(e);
      var c = 1 + a * (2 * t - a),
          s = (0, r.sqrt)(c) / t;

      function u(e, n) {
        var i = (0, r.sqrt)(c - 2 * t * (0, r.sin)(n)) / t;
        return [i * (0, r.sin)(e *= t), s - i * (0, r.cos)(e)];
      }

      return u.invert = function (e, n) {
        var i = s - n;
        return [(0, r.atan2)(e, (0, r.abs)(i)) / t * (0, r.sign)(i), (0, r.asin)((c - (e * e + i * i) * t * t) / (2 * t))];
      }, u;
    }

    function a() {
      return (0, e.conicProjection)(i).scale(155.424).center([0, 33.6442]);
    }
  }, {
    "../math": "sEgP",
    "./conic": "FzMl",
    "./cylindricalEqualArea": "5xg5"
  }],
  "HUYT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./conicEqualArea"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      return (0, e.default)().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
    }
  }, {
    "./conicEqualArea": "uvEu"
  }],
  "WyCU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var t = require("../math"),
        n = i(require("./albers")),
        e = i(require("./conicEqualArea")),
        r = require("./fit");

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function a(t) {
      var n = t.length;
      return {
        point: function point(e, r) {
          for (var i = -1; ++i < n;) {
            t[i].point(e, r);
          }
        },
        sphere: function sphere() {
          for (var e = -1; ++e < n;) {
            t[e].sphere();
          }
        },
        lineStart: function lineStart() {
          for (var e = -1; ++e < n;) {
            t[e].lineStart();
          }
        },
        lineEnd: function lineEnd() {
          for (var e = -1; ++e < n;) {
            t[e].lineEnd();
          }
        },
        polygonStart: function polygonStart() {
          for (var e = -1; ++e < n;) {
            t[e].polygonStart();
          }
        },
        polygonEnd: function polygonEnd() {
          for (var e = -1; ++e < n;) {
            t[e].polygonEnd();
          }
        }
      };
    }

    function o() {
      var i,
          o,
          l,
          u,
          s,
          c,
          f = (0, n.default)(),
          p = (0, e.default)().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
          v = (0, e.default)().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
          d = {
        point: function point(t, n) {
          c = [t, n];
        }
      };

      function h(t) {
        var n = t[0],
            e = t[1];
        return c = null, l.point(n, e), c || (u.point(n, e), c) || (s.point(n, e), c);
      }

      function g() {
        return i = o = null, h;
      }

      return h.invert = function (t) {
        var n = f.scale(),
            e = f.translate(),
            r = (t[0] - e[0]) / n,
            i = (t[1] - e[1]) / n;
        return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? p : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? v : f).invert(t);
      }, h.stream = function (t) {
        return i && o === t ? i : i = a([f.stream(o = t), p.stream(t), v.stream(t)]);
      }, h.precision = function (t) {
        return arguments.length ? (f.precision(t), p.precision(t), v.precision(t), g()) : f.precision();
      }, h.scale = function (t) {
        return arguments.length ? (f.scale(t), p.scale(.35 * t), v.scale(t), h.translate(f.translate())) : f.scale();
      }, h.translate = function (n) {
        if (!arguments.length) return f.translate();
        var e = f.scale(),
            r = +n[0],
            i = +n[1];
        return l = f.translate(n).clipExtent([[r - .455 * e, i - .238 * e], [r + .455 * e, i + .238 * e]]).stream(d), u = p.translate([r - .307 * e, i + .201 * e]).clipExtent([[r - .425 * e + t.epsilon, i + .12 * e + t.epsilon], [r - .214 * e - t.epsilon, i + .234 * e - t.epsilon]]).stream(d), s = v.translate([r - .205 * e, i + .212 * e]).clipExtent([[r - .214 * e + t.epsilon, i + .166 * e + t.epsilon], [r - .115 * e - t.epsilon, i + .234 * e - t.epsilon]]).stream(d), g();
      }, h.fitExtent = function (t, n) {
        return (0, r.fitExtent)(h, t, n);
      }, h.fitSize = function (t, n) {
        return (0, r.fitSize)(h, t, n);
      }, h.fitWidth = function (t, n) {
        return (0, r.fitWidth)(h, t, n);
      }, h.fitHeight = function (t, n) {
        return (0, r.fitHeight)(h, t, n);
      }, h.scale(1070);
    }
  }, {
    "../math": "sEgP",
    "./albers": "HUYT",
    "./conicEqualArea": "uvEu",
    "./fit": "Ty3O"
  }],
  "/4FJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.azimuthalRaw = t, exports.azimuthalInvert = n;

    var r = require("../math");

    function t(t) {
      return function (n, e) {
        var s = (0, r.cos)(n),
            u = (0, r.cos)(e),
            a = t(s * u);
        return [a * u * (0, r.sin)(n), a * (0, r.sin)(e)];
      };
    }

    function n(t) {
      return function (n, e) {
        var s = (0, r.sqrt)(n * n + e * e),
            u = t(s),
            a = (0, r.sin)(u),
            i = (0, r.cos)(u);
        return [(0, r.atan2)(n * a, s * i), (0, r.asin)(s && e * a / s)];
      };
    }
  }, {
    "../math": "sEgP"
  }],
  "c9jZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.azimuthalEqualAreaRaw = void 0;

    var e = require("../math"),
        r = require("./azimuthal"),
        t = a(require("./index"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, r.azimuthalRaw)(function (r) {
      return (0, e.sqrt)(2 / (1 + r));
    });

    function i() {
      return (0, t.default)(u).scale(124.75).clipAngle(179.999);
    }

    exports.azimuthalEqualAreaRaw = u, u.invert = (0, r.azimuthalInvert)(function (r) {
      return 2 * (0, e.asin)(r / 2);
    });
  }, {
    "../math": "sEgP",
    "./azimuthal": "/4FJ",
    "./index": "t1yD"
  }],
  "DPfU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.azimuthalEquidistantRaw = void 0;

    var e = require("../math"),
        t = require("./azimuthal"),
        r = u(require("./index"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = (0, t.azimuthalRaw)(function (t) {
      return (t = (0, e.acos)(t)) && t / (0, e.sin)(t);
    });

    function i() {
      return (0, r.default)(a).scale(79.4188).clipAngle(179.999);
    }

    exports.azimuthalEquidistantRaw = a, a.invert = (0, t.azimuthalInvert)(function (e) {
      return e;
    });
  }, {
    "../math": "sEgP",
    "./azimuthal": "/4FJ",
    "./index": "t1yD"
  }],
  "Yvwi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.mercatorRaw = u, exports.default = a, exports.mercatorProjection = l;

    var t = require("../math"),
        e = r(require("../rotation")),
        n = r(require("./index"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function u(e, n) {
      return [e, (0, t.log)((0, t.tan)((t.halfPi + n) / 2))];
    }

    function a() {
      return l(u).scale(961 / t.tau);
    }

    function l(r) {
      var a,
          l,
          i,
          o = (0, n.default)(r),
          c = o.center,
          f = o.scale,
          s = o.translate,
          h = o.clipExtent,
          x = null;

      function p() {
        var n = t.pi * f(),
            c = o((0, e.default)(o.rotate()).invert([0, 0]));
        return h(null == x ? [[c[0] - n, c[1] - n], [c[0] + n, c[1] + n]] : r === u ? [[Math.max(c[0] - n, x), a], [Math.min(c[0] + n, l), i]] : [[x, Math.max(c[1] - n, a)], [l, Math.min(c[1] + n, i)]]);
      }

      return o.scale = function (t) {
        return arguments.length ? (f(t), p()) : f();
      }, o.translate = function (t) {
        return arguments.length ? (s(t), p()) : s();
      }, o.center = function (t) {
        return arguments.length ? (c(t), p()) : c();
      }, o.clipExtent = function (t) {
        return arguments.length ? (null == t ? x = a = l = i = null : (x = +t[0][0], a = +t[0][1], l = +t[1][0], i = +t[1][1]), p()) : null == x ? null : [[x, a], [l, i]];
      }, p();
    }

    u.invert = function (e, n) {
      return [e, 2 * (0, t.atan)((0, t.exp)(n)) - t.halfPi];
    };
  }, {
    "../math": "sEgP",
    "../rotation": "KwdP",
    "./index": "t1yD"
  }],
  "QZ/H": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicConformalRaw = i, exports.default = t;

    var r = require("../math"),
        e = require("./conic"),
        n = require("./mercator");

    function o(e) {
      return (0, r.tan)((r.halfPi + e) / 2);
    }

    function i(e, i) {
      var t = (0, r.cos)(e),
          a = e === i ? (0, r.sin)(e) : (0, r.log)(t / (0, r.cos)(i)) / (0, r.log)(o(i) / o(e)),
          s = t * (0, r.pow)(o(e), a) / a;
      if (!a) return n.mercatorRaw;

      function c(e, n) {
        s > 0 ? n < -r.halfPi + r.epsilon && (n = -r.halfPi + r.epsilon) : n > r.halfPi - r.epsilon && (n = r.halfPi - r.epsilon);
        var i = s / (0, r.pow)(o(n), a);
        return [i * (0, r.sin)(a * e), s - i * (0, r.cos)(a * e)];
      }

      return c.invert = function (e, n) {
        var o = s - n,
            i = (0, r.sign)(a) * (0, r.sqrt)(e * e + o * o);
        return [(0, r.atan2)(e, (0, r.abs)(o)) / a * (0, r.sign)(o), 2 * (0, r.atan)((0, r.pow)(s / i, 1 / a)) - r.halfPi];
      }, c;
    }

    function t() {
      return (0, e.conicProjection)(i).scale(109.5).parallels([30, 30]);
    }
  }, {
    "../math": "sEgP",
    "./conic": "FzMl",
    "./mercator": "Yvwi"
  }],
  "xN4O": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.equirectangularRaw = t, exports.default = u;
    var e = r(require("./index"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e, r) {
      return [e, r];
    }

    function u() {
      return (0, e.default)(t).scale(152.63);
    }

    t.invert = t;
  }, {
    "./index": "t1yD"
  }],
  "wKng": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.conicEquidistantRaw = t, exports.default = i;

    var r = require("../math"),
        e = require("./conic"),
        n = require("./equirectangular");

    function t(e, t) {
      var i = (0, r.cos)(e),
          u = e === t ? (0, r.sin)(e) : (i - (0, r.cos)(t)) / (t - e),
          c = i / u + e;
      if ((0, r.abs)(u) < r.epsilon) return n.equirectangularRaw;

      function a(e, n) {
        var t = c - n,
            i = u * e;
        return [t * (0, r.sin)(i), c - t * (0, r.cos)(i)];
      }

      return a.invert = function (e, n) {
        var t = c - n;
        return [(0, r.atan2)(e, (0, r.abs)(t)) / u * (0, r.sign)(t), c - (0, r.sign)(u) * (0, r.sqrt)(e * e + t * t)];
      }, a;
    }

    function i() {
      return (0, e.conicProjection)(t).scale(131.154).center([0, 13.9389]);
    }
  }, {
    "../math": "sEgP",
    "./conic": "FzMl",
    "./equirectangular": "xN4O"
  }],
  "svXP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.equalEarthRaw = c, exports.default = f;

    var e = t(require("./index.js")),
        r = require("../math.js");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = 1.340264,
        s = -.081106,
        u = 893e-6,
        a = .003796,
        i = (0, r.sqrt)(3) / 2,
        o = 12;

    function c(e, t) {
      var o = (0, r.asin)(i * (0, r.sin)(t)),
          c = o * o,
          f = c * c * c;
      return [e * (0, r.cos)(o) / (i * (n + 3 * s * c + f * (7 * u + 9 * a * c))), o * (n + s * c + f * (u + a * c))];
    }

    function f() {
      return (0, e.default)(c).scale(177.158);
    }

    c.invert = function (e, t) {
      for (var c, f = t, l = f * f, d = l * l * l, v = 0; v < o && (d = (l = (f -= c = (f * (n + s * l + d * (u + a * l)) - t) / (n + 3 * s * l + d * (7 * u + 9 * a * l))) * f) * l * l, !((0, r.abs)(c) < r.epsilon2)); ++v) {
        ;
      }

      return [i * e * (n + 3 * s * l + d * (7 * u + 9 * a * l)) / (0, r.cos)(f), (0, r.asin)((0, r.sin)(f) / i)];
    };
  }, {
    "./index.js": "t1yD",
    "../math.js": "sEgP"
  }],
  "bmsS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.gnomonicRaw = u, exports.default = i;

    var e = require("../math"),
        r = require("./azimuthal"),
        t = n(require("./index"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r, t) {
      var n = (0, e.cos)(t),
          u = (0, e.cos)(r) * n;
      return [n * (0, e.sin)(r) / u, (0, e.sin)(t) / u];
    }

    function i() {
      return (0, t.default)(u).scale(144.049).clipAngle(60);
    }

    u.invert = (0, r.azimuthalInvert)(e.atan);
  }, {
    "../math": "sEgP",
    "./azimuthal": "/4FJ",
    "./index": "t1yD"
  }],
  "LapZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var t = u(require("../clip/rectangle")),
        n = u(require("../identity")),
        e = require("../transform"),
        r = require("./fit");

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t, r, u, i) {
      return 1 === t && 1 === r && 0 === u && 0 === i ? n.default : (0, e.transformer)({
        point: function point(n, e) {
          this.stream.point(n * t + u, e * r + i);
        }
      });
    }

    function l() {
      var e,
          u,
          l,
          f,
          o,
          c,
          a = 1,
          s = 0,
          d = 0,
          h = 1,
          g = 1,
          p = n.default,
          x = null,
          m = n.default;

      function q() {
        return f = o = null, c;
      }

      return c = {
        stream: function stream(t) {
          return f && o === t ? f : f = p(m(o = t));
        },
        postclip: function postclip(t) {
          return arguments.length ? (m = t, x = e = u = l = null, q()) : m;
        },
        clipExtent: function clipExtent(r) {
          return arguments.length ? (m = null == r ? (x = e = u = l = null, n.default) : (0, t.default)(x = +r[0][0], e = +r[0][1], u = +r[1][0], l = +r[1][1]), q()) : null == x ? null : [[x, e], [u, l]];
        },
        scale: function scale(t) {
          return arguments.length ? (p = i((a = +t) * h, a * g, s, d), q()) : a;
        },
        translate: function translate(t) {
          return arguments.length ? (p = i(a * h, a * g, s = +t[0], d = +t[1]), q()) : [s, d];
        },
        reflectX: function reflectX(t) {
          return arguments.length ? (p = i(a * (h = t ? -1 : 1), a * g, s, d), q()) : h < 0;
        },
        reflectY: function reflectY(t) {
          return arguments.length ? (p = i(a * h, a * (g = t ? -1 : 1), s, d), q()) : g < 0;
        },
        fitExtent: function fitExtent(t, n) {
          return (0, r.fitExtent)(c, t, n);
        },
        fitSize: function fitSize(t, n) {
          return (0, r.fitSize)(c, t, n);
        },
        fitWidth: function fitWidth(t, n) {
          return (0, r.fitWidth)(c, t, n);
        },
        fitHeight: function fitHeight(t, n) {
          return (0, r.fitHeight)(c, t, n);
        }
      };
    }
  }, {
    "../clip/rectangle": "E6SH",
    "../identity": "nPOL",
    "../transform": "ubFV",
    "./fit": "Ty3O"
  }],
  "yWpl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.naturalEarth1Raw = u, exports.default = n;

    var e = t(require("./index")),
        r = require("../math");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(e, r) {
      var t = r * r,
          u = t * t;
      return [e * (.8707 - .131979 * t + u * (u * (.003971 * t - .001529 * u) - .013791)), r * (1.007226 + t * (.015085 + u * (.028874 * t - .044475 - .005916 * u)))];
    }

    function n() {
      return (0, e.default)(u).scale(175.295);
    }

    u.invert = function (e, t) {
      var u,
          n = t,
          a = 25;

      do {
        var i = n * n,
            o = i * i;
        n -= u = (n * (1.007226 + i * (.015085 + o * (.028874 * i - .044475 - .005916 * o))) - t) / (1.007226 + i * (.045255 + o * (.259866 * i - .311325 - .005916 * 11 * o)));
      } while ((0, r.abs)(u) > r.epsilon && --a > 0);

      return [e / (.8707 + (i = n * n) * (i * (i * i * i * (.003971 - .001529 * i) - .013791) - .131979)), n];
    };
  }, {
    "./index": "t1yD",
    "../math": "sEgP"
  }],
  "H7pW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.orthographicRaw = n, exports.default = u;

    var e = require("../math"),
        r = require("./azimuthal"),
        t = i(require("./index"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(r, t) {
      return [(0, e.cos)(t) * (0, e.sin)(r), (0, e.sin)(t)];
    }

    function u() {
      return (0, t.default)(n).scale(249.5).clipAngle(90 + e.epsilon);
    }

    n.invert = (0, r.azimuthalInvert)(e.asin);
  }, {
    "../math": "sEgP",
    "./azimuthal": "/4FJ",
    "./index": "t1yD"
  }],
  "bNxf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.stereographicRaw = u, exports.default = i;

    var e = require("../math"),
        r = require("./azimuthal"),
        t = n(require("./index"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r, t) {
      var n = (0, e.cos)(t),
          u = 1 + (0, e.cos)(r) * n;
      return [n * (0, e.sin)(r) / u, (0, e.sin)(t) / u];
    }

    function i() {
      return (0, t.default)(u).scale(250).clipAngle(142);
    }

    u.invert = (0, r.azimuthalInvert)(function (r) {
      return 2 * (0, e.atan)(r);
    });
  }, {
    "../math": "sEgP",
    "./azimuthal": "/4FJ",
    "./index": "t1yD"
  }],
  "BGbj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.transverseMercatorRaw = t, exports.default = n;

    var e = require("../math"),
        r = require("./mercator");

    function t(r, t) {
      return [(0, e.log)((0, e.tan)((e.halfPi + t) / 2)), -r];
    }

    function n() {
      var e = (0, r.mercatorProjection)(t),
          n = e.center,
          a = e.rotate;
      return e.center = function (e) {
        return arguments.length ? n([-e[1], e[0]]) : [(e = n())[1], -e[0]];
      }, e.rotate = function (e) {
        return arguments.length ? a([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : [(e = a())[0], e[1], e[2] - 90];
      }, a([0, 0, 90]).scale(159.155);
    }

    t.invert = function (r, t) {
      return [-t, 2 * (0, e.atan)((0, e.exp)(r)) - e.halfPi];
    };
  }, {
    "../math": "sEgP",
    "./mercator": "Yvwi"
  }],
  "LMxt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "geoArea", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "geoBounds", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "geoCentroid", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "geoCircle", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "geoClipAntimeridian", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "geoClipCircle", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "geoClipExtent", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "geoClipRectangle", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "geoContains", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "geoDistance", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "geoGraticule", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "geoGraticule10", {
      enumerable: !0,
      get: function get() {
        return f.graticule10;
      }
    }), Object.defineProperty(exports, "geoInterpolate", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "geoLength", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "geoPath", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "geoAlbers", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "geoAlbersUsa", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEqualArea", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEqualAreaRaw", {
      enumerable: !0,
      get: function get() {
        return j.azimuthalEqualAreaRaw;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEquidistant", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "geoAzimuthalEquidistantRaw", {
      enumerable: !0,
      get: function get() {
        return m.azimuthalEquidistantRaw;
      }
    }), Object.defineProperty(exports, "geoConicConformal", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "geoConicConformalRaw", {
      enumerable: !0,
      get: function get() {
        return O.conicConformalRaw;
      }
    }), Object.defineProperty(exports, "geoConicEqualArea", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "geoConicEqualAreaRaw", {
      enumerable: !0,
      get: function get() {
        return q.conicEqualAreaRaw;
      }
    }), Object.defineProperty(exports, "geoConicEquidistant", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "geoConicEquidistantRaw", {
      enumerable: !0,
      get: function get() {
        return y.conicEquidistantRaw;
      }
    }), Object.defineProperty(exports, "geoEqualEarth", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "geoEqualEarthRaw", {
      enumerable: !0,
      get: function get() {
        return P.equalEarthRaw;
      }
    }), Object.defineProperty(exports, "geoEquirectangular", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "geoEquirectangularRaw", {
      enumerable: !0,
      get: function get() {
        return x.equirectangularRaw;
      }
    }), Object.defineProperty(exports, "geoGnomonic", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "geoGnomonicRaw", {
      enumerable: !0,
      get: function get() {
        return h.gnomonicRaw;
      }
    }), Object.defineProperty(exports, "geoIdentity", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(exports, "geoProjection", {
      enumerable: !0,
      get: function get() {
        return E.default;
      }
    }), Object.defineProperty(exports, "geoProjectionMutator", {
      enumerable: !0,
      get: function get() {
        return E.projectionMutator;
      }
    }), Object.defineProperty(exports, "geoMercator", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "geoMercatorRaw", {
      enumerable: !0,
      get: function get() {
        return R.mercatorRaw;
      }
    }), Object.defineProperty(exports, "geoNaturalEarth1", {
      enumerable: !0,
      get: function get() {
        return C.default;
      }
    }), Object.defineProperty(exports, "geoNaturalEarth1Raw", {
      enumerable: !0,
      get: function get() {
        return C.naturalEarth1Raw;
      }
    }), Object.defineProperty(exports, "geoOrthographic", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "geoOrthographicRaw", {
      enumerable: !0,
      get: function get() {
        return A.orthographicRaw;
      }
    }), Object.defineProperty(exports, "geoStereographic", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "geoStereographicRaw", {
      enumerable: !0,
      get: function get() {
        return M.stereographicRaw;
      }
    }), Object.defineProperty(exports, "geoTransverseMercator", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "geoTransverseMercatorRaw", {
      enumerable: !0,
      get: function get() {
        return v.transverseMercatorRaw;
      }
    }), Object.defineProperty(exports, "geoRotation", {
      enumerable: !0,
      get: function get() {
        return z.default;
      }
    }), Object.defineProperty(exports, "geoStream", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "geoTransform", {
      enumerable: !0,
      get: function get() {
        return G.default;
      }
    });

    var e = S(require("./area")),
        r = S(require("./bounds")),
        t = S(require("./centroid")),
        n = S(require("./circle")),
        o = S(require("./clip/antimeridian")),
        u = S(require("./clip/circle")),
        i = S(require("./clip/extent")),
        a = S(require("./clip/rectangle")),
        c = S(require("./contains")),
        l = S(require("./distance")),
        f = D(require("./graticule")),
        p = S(require("./interpolate")),
        g = S(require("./length")),
        d = S(require("./path/index")),
        b = S(require("./projection/albers")),
        s = S(require("./projection/albersUsa")),
        j = D(require("./projection/azimuthalEqualArea")),
        m = D(require("./projection/azimuthalEquidistant")),
        O = D(require("./projection/conicConformal")),
        q = D(require("./projection/conicEqualArea")),
        y = D(require("./projection/conicEquidistant")),
        P = D(require("./projection/equalEarth")),
        x = D(require("./projection/equirectangular")),
        h = D(require("./projection/gnomonic")),
        w = S(require("./projection/identity")),
        E = D(require("./projection/index")),
        R = D(require("./projection/mercator")),
        C = D(require("./projection/naturalEarth1")),
        A = D(require("./projection/orthographic")),
        M = D(require("./projection/stereographic")),
        v = D(require("./projection/transverseMercator")),
        z = S(require("./rotation")),
        _ = S(require("./stream")),
        G = S(require("./transform"));

    function D(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function S(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./area": "dpXv",
    "./bounds": "4wXR",
    "./centroid": "pQGp",
    "./circle": "dbGM",
    "./clip/antimeridian": "CWnN",
    "./clip/circle": "1uul",
    "./clip/extent": "Pttt",
    "./clip/rectangle": "E6SH",
    "./contains": "bl0/",
    "./distance": "IoFW",
    "./graticule": "+fWg",
    "./interpolate": "PyvU",
    "./length": "rgN/",
    "./path/index": "01A7",
    "./projection/albers": "HUYT",
    "./projection/albersUsa": "WyCU",
    "./projection/azimuthalEqualArea": "c9jZ",
    "./projection/azimuthalEquidistant": "DPfU",
    "./projection/conicConformal": "QZ/H",
    "./projection/conicEqualArea": "uvEu",
    "./projection/conicEquidistant": "wKng",
    "./projection/equalEarth": "svXP",
    "./projection/equirectangular": "xN4O",
    "./projection/gnomonic": "bmsS",
    "./projection/identity": "LapZ",
    "./projection/index": "t1yD",
    "./projection/mercator": "Yvwi",
    "./projection/naturalEarth1": "yWpl",
    "./projection/orthographic": "H7pW",
    "./projection/stereographic": "bNxf",
    "./projection/transverseMercator": "BGbj",
    "./rotation": "KwdP",
    "./stream": "XBFK",
    "./transform": "ubFV"
  }],
  "brcY": [function (require, module, exports) {
    "use strict";

    function n(n, r) {
      return n.parent === r.parent ? 1 : 2;
    }

    function r(n) {
      return n.reduce(e, 0) / n.length;
    }

    function e(n, r) {
      return n + r.x;
    }

    function t(n) {
      return 1 + n.reduce(u, 0);
    }

    function u(n, r) {
      return Math.max(n, r.y);
    }

    function c(n) {
      for (var r; r = n.children;) {
        n = r[0];
      }

      return n;
    }

    function i(n) {
      for (var r; r = n.children;) {
        n = r[r.length - 1];
      }

      return n;
    }

    function o() {
      var e = n,
          u = 1,
          o = 1,
          f = !1;

      function a(n) {
        var a,
            l = 0;
        n.eachAfter(function (n) {
          var u = n.children;
          u ? (n.x = r(u), n.y = t(u)) : (n.x = a ? l += e(n, a) : 0, n.y = 0, a = n);
        });
        var x = c(n),
            h = i(n),
            y = x.x - e(x, h) / 2,
            d = h.x + e(h, x) / 2;
        return n.eachAfter(f ? function (r) {
          r.x = (r.x - n.x) * u, r.y = (n.y - r.y) * o;
        } : function (r) {
          r.x = (r.x - y) / (d - y) * u, r.y = (1 - (n.y ? r.y / n.y : 1)) * o;
        });
      }

      return a.separation = function (n) {
        return arguments.length ? (e = n, a) : e;
      }, a.size = function (n) {
        return arguments.length ? (f = !1, u = +n[0], o = +n[1], a) : f ? null : [u, o];
      }, a.nodeSize = function (n) {
        return arguments.length ? (f = !0, u = +n[0], o = +n[1], a) : f ? [u, o] : null;
      }, a;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
  }, {}],
  "7jJj": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var t = 0,
          r = e.children,
          u = r && r.length;
      if (u) for (; --u >= 0;) {
        t += r[u].value;
      } else t = 1;
      e.value = t;
    }

    function t() {
      return this.eachAfter(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "YN75": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r,
          t,
          o,
          s,
          i = this,
          h = [i];

      do {
        for (r = h.reverse(), h = []; i = r.pop();) {
          if (e(i), t = i.children) for (o = 0, s = t.length; o < s; ++o) {
            h.push(t[o]);
          }
        }
      } while (h.length);

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "b04E": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r, o = this, s = [o]; o = s.pop();) {
        if (e(o), t = o.children) for (r = t.length - 1; r >= 0; --r) {
          s.push(t[r]);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "oHKJ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r, t, o, p = this, s = [p], u = []; p = s.pop();) {
        if (u.push(p), r = p.children) for (t = 0, o = r.length; t < o; ++t) {
          s.push(r[t]);
        }
      }

      for (; p = u.pop();) {
        e(p);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Btd4": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return this.eachAfter(function (t) {
        for (var r = +e(t.data) || 0, u = t.children, a = u && u.length; --a >= 0;) {
          r += u[a].value;
        }

        t.value = r;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "q7tv": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return this.eachBefore(function (t) {
        t.children && t.children.sort(e);
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "5x0Y": [function (require, module, exports) {
    "use strict";

    function r(r) {
      for (var t = this, o = e(t, r), p = [t]; t !== o;) {
        t = t.parent, p.push(t);
      }

      for (var n = p.length; r !== o;) {
        p.splice(n, 0, r), r = r.parent;
      }

      return p;
    }

    function e(r, e) {
      if (r === e) return r;
      var t = r.ancestors(),
          o = e.ancestors(),
          p = null;

      for (r = t.pop(), e = o.pop(); r === e;) {
        p = r, r = t.pop(), e = o.pop();
      }

      return p;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
  }, {}],
  "fOge": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this, t = [e]; e = e.parent;) {
        t.push(e);
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "chHE": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.each(function (t) {
        e.push(t);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "+Res": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.eachBefore(function (t) {
        t.children || e.push(t);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "gBUX": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = this,
          t = [];
      return e.each(function (r) {
        r !== e && t.push({
          source: r.parent,
          target: r
        });
      }), t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "LCo+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c, exports.computeHeight = v, exports.Node = g;
    var e = s(require("./count")),
        t = s(require("./each")),
        r = s(require("./eachBefore")),
        a = s(require("./eachAfter")),
        u = s(require("./sum")),
        n = s(require("./sort")),
        o = s(require("./path")),
        i = s(require("./ancestors")),
        d = s(require("./descendants")),
        l = s(require("./leaves")),
        h = s(require("./links"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e, t) {
      var r,
          a,
          u,
          n,
          o,
          i = new g(e),
          d = +e.value && (i.value = e.value),
          l = [i];

      for (null == t && (t = p); r = l.pop();) {
        if (d && (r.value = +r.data.value), (u = t(r.data)) && (o = u.length)) for (r.children = new Array(o), n = o - 1; n >= 0; --n) {
          l.push(a = r.children[n] = new g(u[n])), a.parent = r, a.depth = r.depth + 1;
        }
      }

      return i.eachBefore(v);
    }

    function f() {
      return c(this).eachBefore(q);
    }

    function p(e) {
      return e.children;
    }

    function q(e) {
      e.data = e.data.data;
    }

    function v(e) {
      var t = 0;

      do {
        e.height = t;
      } while ((e = e.parent) && e.height < ++t);
    }

    function g(e) {
      this.data = e, this.depth = this.height = 0, this.parent = null;
    }

    g.prototype = c.prototype = {
      constructor: g,
      count: e.default,
      each: t.default,
      eachAfter: a.default,
      eachBefore: r.default,
      sum: u.default,
      sort: n.default,
      path: o.default,
      ancestors: i.default,
      descendants: d.default,
      leaves: l.default,
      links: h.default,
      copy: f
    };
  }, {
    "./count": "7jJj",
    "./each": "YN75",
    "./eachBefore": "b04E",
    "./eachAfter": "oHKJ",
    "./sum": "Btd4",
    "./sort": "q7tv",
    "./path": "5x0Y",
    "./ancestors": "fOge",
    "./descendants": "chHE",
    "./leaves": "+Res",
    "./links": "gBUX"
  }],
  "Wl9w": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.shuffle = r, exports.slice = void 0;
    var e = Array.prototype.slice;

    function r(e) {
      for (var r, t, o = e.length; o;) {
        t = Math.random() * o-- | 0, r = e[o], e[o] = e[t], e[t] = r;
      }

      return e;
    }

    exports.slice = e;
  }, {}],
  "ZzhU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var r = require("../array");

    function t(t) {
      for (var n, f, a = 0, i = (t = (0, r.shuffle)(r.slice.call(t))).length, c = []; a < i;) {
        n = t[a], f && u(f, n) ? ++a : (f = o(c = e(c, n)), a = 0);
      }

      return f;
    }

    function e(r, t) {
      var e, u;
      if (f(t, r)) return [t];

      for (e = 0; e < r.length; ++e) {
        if (n(t, r[e]) && f(i(r[e], t), r)) return [r[e], t];
      }

      for (e = 0; e < r.length - 1; ++e) {
        for (u = e + 1; u < r.length; ++u) {
          if (n(i(r[e], r[u]), t) && n(i(r[e], t), r[u]) && n(i(r[u], t), r[e]) && f(c(r[e], r[u], t), r)) return [r[e], r[u], t];
        }
      }

      throw new Error();
    }

    function n(r, t) {
      var e = r.r - t.r,
          n = t.x - r.x,
          u = t.y - r.y;
      return e < 0 || e * e < n * n + u * u;
    }

    function u(r, t) {
      var e = r.r - t.r + 1e-6,
          n = t.x - r.x,
          u = t.y - r.y;
      return e > 0 && e * e > n * n + u * u;
    }

    function f(r, t) {
      for (var e = 0; e < t.length; ++e) {
        if (!u(r, t[e])) return !1;
      }

      return !0;
    }

    function o(r) {
      switch (r.length) {
        case 1:
          return a(r[0]);

        case 2:
          return i(r[0], r[1]);

        case 3:
          return c(r[0], r[1], r[2]);
      }
    }

    function a(r) {
      return {
        x: r.x,
        y: r.y,
        r: r.r
      };
    }

    function i(r, t) {
      var e = r.x,
          n = r.y,
          u = r.r,
          f = t.x,
          o = t.y,
          a = t.r,
          i = f - e,
          c = o - n,
          x = a - u,
          y = Math.sqrt(i * i + c * c);
      return {
        x: (e + f + i / y * x) / 2,
        y: (n + o + c / y * x) / 2,
        r: (y + u + a) / 2
      };
    }

    function c(r, t, e) {
      var n = r.x,
          u = r.y,
          f = r.r,
          o = t.x,
          a = t.y,
          i = t.r,
          c = e.x,
          x = e.y,
          y = e.r,
          l = n - o,
          s = n - c,
          h = u - a,
          v = u - x,
          g = i - f,
          d = y - f,
          p = n * n + u * u - f * f,
          q = p - o * o - a * a + i * i,
          w = p - c * c - x * x + y * y,
          M = s * h - l * v,
          _ = (h * w - v * q) / (2 * M) - n,
          b = (v * g - h * d) / M,
          j = (s * q - l * w) / (2 * M) - u,
          E = (l * d - s * g) / M,
          O = b * b + E * E - 1,
          P = 2 * (f + _ * b + j * E),
          k = _ * _ + j * j - f * f,
          m = -(O ? (P + Math.sqrt(P * P - 4 * O * k)) / (2 * O) : k / P);

      return {
        x: n + _ + b * m,
        y: u + j + E * m,
        r: m
      };
    }
  }, {
    "../array": "Wl9w"
  }],
  "efS5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.packEnclose = i, exports.default = o;
    var r = e(require("./enclose"));

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function t(r, e, t) {
      var n,
          u,
          x,
          i,
          o = r.x - e.x,
          s = r.y - e.y,
          f = o * o + s * s;
      f ? (u = e.r + t.r, u *= u, i = r.r + t.r, u > (i *= i) ? (n = (f + i - u) / (2 * f), x = Math.sqrt(Math.max(0, i / f - n * n)), t.x = r.x - n * o - x * s, t.y = r.y - n * s + x * o) : (n = (f + u - i) / (2 * f), x = Math.sqrt(Math.max(0, u / f - n * n)), t.x = e.x + n * o - x * s, t.y = e.y + n * s + x * o)) : (t.x = e.x + t.r, t.y = e.y);
    }

    function n(r, e) {
      var t = r.r + e.r - 1e-6,
          n = e.x - r.x,
          u = e.y - r.y;
      return t > 0 && t * t > n * n + u * u;
    }

    function u(r) {
      var e = r._,
          t = r.next._,
          n = e.r + t.r,
          u = (e.x * t.r + t.x * e.r) / n,
          x = (e.y * t.r + t.y * e.r) / n;
      return u * u + x * x;
    }

    function x(r) {
      this._ = r, this.next = null, this.previous = null;
    }

    function i(e) {
      if (!(f = e.length)) return 0;

      var i, o, s, f, _, y, a, p, v, l, c;

      if ((i = e[0]).x = 0, i.y = 0, !(f > 1)) return i.r;
      if (o = e[1], i.x = -o.r, o.x = i.r, o.y = 0, !(f > 2)) return i.r + o.r;
      t(o, i, s = e[2]), i = new x(i), o = new x(o), s = new x(s), i.next = s.previous = o, o.next = i.previous = s, s.next = o.previous = i;

      r: for (a = 3; a < f; ++a) {
        t(i._, o._, s = e[a]), s = new x(s), p = o.next, v = i.previous, l = o._.r, c = i._.r;

        do {
          if (l <= c) {
            if (n(p._, s._)) {
              o = p, i.next = o, o.previous = i, --a;
              continue r;
            }

            l += p._.r, p = p.next;
          } else {
            if (n(v._, s._)) {
              (i = v).next = o, o.previous = i, --a;
              continue r;
            }

            c += v._.r, v = v.previous;
          }
        } while (p !== v.next);

        for (s.previous = i, s.next = o, i.next = o.previous = o = s, _ = u(i); (s = s.next) !== o;) {
          (y = u(s)) < _ && (i = s, _ = y);
        }

        o = i.next;
      }

      for (i = [o._], s = o; (s = s.next) !== o;) {
        i.push(s._);
      }

      for (s = (0, r.default)(i), a = 0; a < f; ++a) {
        (i = e[a]).x -= s.x, i.y -= s.y;
      }

      return s.r;
    }

    function o(r) {
      return i(r), r;
    }
  }, {
    "./enclose": "ZzhU"
  }],
  "OleL": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return null == e ? null : r(e);
    }

    function r(e) {
      if ("function" != typeof e) throw new Error();
      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.optional = e, exports.required = r;
  }, {}],
  "k/YM": [function (require, module, exports) {
    "use strict";

    function e() {
      return 0;
    }

    function t(e) {
      return function () {
        return e;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.constantZero = e, exports.default = t;
  }, {}],
  "aVuj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var e = require("./siblings"),
        r = require("../accessors"),
        t = n(require("../constant"));

    function n(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function o(e) {
      return Math.sqrt(e.value);
    }

    function c() {
      var e = null,
          n = 1,
          c = 1,
          a = t.constantZero;

      function l(r) {
        return r.x = n / 2, r.y = c / 2, e ? r.eachBefore(i(e)).eachAfter(u(a, .5)).eachBefore(f(1)) : r.eachBefore(i(o)).eachAfter(u(t.constantZero, 1)).eachAfter(u(a, r.r / Math.min(n, c))).eachBefore(f(Math.min(n, c) / (2 * r.r))), r;
      }

      return l.radius = function (t) {
        return arguments.length ? (e = (0, r.optional)(t), l) : e;
      }, l.size = function (e) {
        return arguments.length ? (n = +e[0], c = +e[1], l) : [n, c];
      }, l.padding = function (e) {
        return arguments.length ? (a = "function" == typeof e ? e : (0, t.default)(+e), l) : a;
      }, l;
    }

    function i(e) {
      return function (r) {
        r.children || (r.r = Math.max(0, +e(r) || 0));
      };
    }

    function u(r, t) {
      return function (n) {
        if (o = n.children) {
          var o,
              c,
              i,
              u = o.length,
              f = r(n) * t || 0;
          if (f) for (c = 0; c < u; ++c) {
            o[c].r += f;
          }
          if (i = (0, e.packEnclose)(o), f) for (c = 0; c < u; ++c) {
            o[c].r -= f;
          }
          n.r = i + f;
        }
      };
    }

    function f(e) {
      return function (r) {
        var t = r.parent;
        r.r *= e, t && (r.x = t.x + e * r.x, r.y = t.y + e * r.y);
      };
    }
  }, {
    "./siblings": "efS5",
    "../accessors": "OleL",
    "../constant": "k/YM"
  }],
  "PETl": [function (require, module, exports) {
    "use strict";

    function t(t) {
      t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "L3aV": [function (require, module, exports) {
    "use strict";

    function e(e, t, l, r, u) {
      for (var a, o = e.children, n = -1, s = o.length, v = e.value && (r - t) / e.value; ++n < s;) {
        (a = o[n]).y0 = l, a.y1 = u, a.x0 = t, a.x1 = t += a.value * v;
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "h/+W": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = t(require("./treemap/round")),
        r = t(require("./treemap/dice"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      var t = 1,
          n = 1,
          u = 0,
          i = !1;

      function o(o) {
        var d = o.height + 1;
        return o.x0 = o.y0 = u, o.x1 = t, o.y1 = n / d, o.eachBefore(function (e, t) {
          return function (n) {
            n.children && (0, r.default)(n, n.x0, e * (n.depth + 1) / t, n.x1, e * (n.depth + 2) / t);
            var i = n.x0,
                o = n.y0,
                d = n.x1 - u,
                f = n.y1 - u;
            d < i && (i = d = (i + d) / 2), f < o && (o = f = (o + f) / 2), n.x0 = i, n.y0 = o, n.x1 = d, n.y1 = f;
          };
        }(n, d)), i && o.eachBefore(e.default), o;
      }

      return o.round = function (e) {
        return arguments.length ? (i = !!e, o) : i;
      }, o.size = function (e) {
        return arguments.length ? (t = +e[0], n = +e[1], o) : [t, n];
      }, o.padding = function (e) {
        return arguments.length ? (u = +e, o) : u;
      }, o;
    }
  }, {
    "./treemap/round": "PETl",
    "./treemap/dice": "L3aV"
  }],
  "bJDQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var r = require("./accessors"),
        e = require("./hierarchy/index"),
        n = "$",
        t = {
      depth: -1
    },
        o = {};

    function i(r) {
      return r.id;
    }

    function u(r) {
      return r.parentId;
    }

    function c() {
      var c = i,
          h = u;

      function f(r) {
        var i,
            u,
            f,
            l,
            d,
            a,
            p,
            s = r.length,
            w = new Array(s),
            g = {};

        for (u = 0; u < s; ++u) {
          i = r[u], d = w[u] = new e.Node(i), null != (a = c(i, u, r)) && (a += "") && (g[p = n + (d.id = a)] = p in g ? o : d);
        }

        for (u = 0; u < s; ++u) {
          if (d = w[u], null != (a = h(r[u], u, r)) && (a += "")) {
            if (!(l = g[n + a])) throw new Error("missing: " + a);
            if (l === o) throw new Error("ambiguous: " + a);
            l.children ? l.children.push(d) : l.children = [d], d.parent = l;
          } else {
            if (f) throw new Error("multiple roots");
            f = d;
          }
        }

        if (!f) throw new Error("no root");
        if (f.parent = t, f.eachBefore(function (r) {
          r.depth = r.parent.depth + 1, --s;
        }).eachBefore(e.computeHeight), f.parent = null, s > 0) throw new Error("cycle");
        return f;
      }

      return f.id = function (e) {
        return arguments.length ? (c = (0, r.required)(e), f) : c;
      }, f.parentId = function (e) {
        return arguments.length ? (h = (0, r.required)(e), f) : h;
      }, f;
    }
  }, {
    "./accessors": "OleL",
    "./hierarchy/index": "LCo+"
  }],
  "7nrL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("./hierarchy/index");

    function e(n, e) {
      return n.parent === e.parent ? 1 : 2;
    }

    function t(n) {
      var e = n.children;
      return e ? e[0] : n.t;
    }

    function r(n) {
      var e = n.children;
      return e ? e[e.length - 1] : n.t;
    }

    function i(n, e, t) {
      var r = t / (e.i - n.i);
      e.c -= r, e.s += t, n.c += r, e.z += t, e.m += t;
    }

    function u(n) {
      for (var e, t = 0, r = 0, i = n.children, u = i.length; --u >= 0;) {
        (e = i[u]).z += t, e.m += t, t += e.s + (r += e.c);
      }
    }

    function c(n, e, t) {
      return n.a.parent === e.parent ? n.a : t;
    }

    function a(n, e) {
      this._ = n, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e;
    }

    function h(n) {
      for (var e, t, r, i, u, c = new a(n, 0), h = [c]; e = h.pop();) {
        if (r = e._.children) for (e.children = new Array(u = r.length), i = u - 1; i >= 0; --i) {
          h.push(t = e.children[i] = new a(r[i], i)), t.parent = e;
        }
      }

      return (c.parent = new a(null, 0)).children = [c], c;
    }

    function l() {
      var n = e,
          a = 1,
          l = 1,
          o = null;

      function f(e) {
        var t = h(e);
        if (t.eachAfter(p), t.parent.m = -t.z, t.eachBefore(s), o) e.eachBefore(d);else {
          var r = e,
              i = e,
              u = e;
          e.eachBefore(function (n) {
            n.x < r.x && (r = n), n.x > i.x && (i = n), n.depth > u.depth && (u = n);
          });
          var c = r === i ? 1 : n(r, i) / 2,
              f = c - r.x,
              m = a / (i.x + c + f),
              z = l / (u.depth || 1);
          e.eachBefore(function (n) {
            n.x = (n.x + f) * m, n.y = n.depth * z;
          });
        }
        return e;
      }

      function p(e) {
        var a = e.children,
            h = e.parent.children,
            l = e.i ? h[e.i - 1] : null;

        if (a) {
          u(e);
          var o = (a[0].z + a[a.length - 1].z) / 2;
          l ? (e.z = l.z + n(e._, l._), e.m = e.z - o) : e.z = o;
        } else l && (e.z = l.z + n(e._, l._));

        e.parent.A = function (e, u, a) {
          if (u) {
            for (var h, l = e, o = e, f = u, p = l.parent.children[0], s = l.m, d = o.m, m = f.m, z = p.m; f = r(f), l = t(l), f && l;) {
              p = t(p), (o = r(o)).a = e, (h = f.z + m - l.z - s + n(f._, l._)) > 0 && (i(c(f, e, a), e, h), s += h, d += h), m += f.m, s += l.m, z += p.m, d += o.m;
            }

            f && !r(o) && (o.t = f, o.m += m - d), l && !t(p) && (p.t = l, p.m += s - z, a = e);
          }

          return a;
        }(e, l, e.parent.A || h[0]);
      }

      function s(n) {
        n._.x = n.z + n.parent.m, n.m += n.parent.m;
      }

      function d(n) {
        n.x *= a, n.y = n.depth * l;
      }

      return f.separation = function (e) {
        return arguments.length ? (n = e, f) : n;
      }, f.size = function (n) {
        return arguments.length ? (o = !1, a = +n[0], l = +n[1], f) : o ? null : [a, l];
      }, f.nodeSize = function (n) {
        return arguments.length ? (o = !0, a = +n[0], l = +n[1], f) : o ? [a, l] : null;
      }, f;
    }

    a.prototype = Object.create(n.Node.prototype);
  }, {
    "./hierarchy/index": "LCo+"
  }],
  "RVbL": [function (require, module, exports) {
    "use strict";

    function e(e, t, l, r, u) {
      for (var a, o = e.children, n = -1, s = o.length, v = e.value && (u - l) / e.value; ++n < s;) {
        (a = o[n]).x0 = t, a.x1 = r, a.y0 = l, a.y1 = l += a.value * v;
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "jyLZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.squarifyRatio = a, exports.default = exports.phi = void 0;
    var e = t(require("./dice")),
        r = t(require("./slice"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (1 + Math.sqrt(5)) / 2;

    function a(t, u, a, i, o, l) {
      for (var n, d, f, s, c, h, p, v, x, M, q, _ = [], m = u.children, b = 0, y = 0, g = m.length, j = u.value; b < g;) {
        f = o - a, s = l - i;

        do {
          c = m[y++].value;
        } while (!c && y < g);

        for (h = p = c, q = c * c * (M = Math.max(s / f, f / s) / (j * t)), x = Math.max(p / q, q / h); y < g; ++y) {
          if (c += d = m[y].value, d < h && (h = d), d > p && (p = d), q = c * c * M, (v = Math.max(p / q, q / h)) > x) {
            c -= d;
            break;
          }

          x = v;
        }

        _.push(n = {
          value: c,
          dice: f < s,
          children: m.slice(b, y)
        }), n.dice ? (0, e.default)(n, a, i, o, j ? i += s * c / j : l) : (0, r.default)(n, a, i, j ? a += f * c / j : o, l), j -= c, b = y;
      }

      return _;
    }

    exports.phi = u;

    var i = function e(r) {
      function t(e, t, u, i, o) {
        a(r, e, t, u, i, o);
      }

      return t.ratio = function (r) {
        return e((r = +r) > 1 ? r : 1);
      }, t;
    }(u);

    exports.default = i;
  }, {
    "./dice": "L3aV",
    "./slice": "RVbL"
  }],
  "3cC5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = u(require("./round")),
        n = u(require("./squarify")),
        t = require("../accessors"),
        r = o(require("../constant"));

    function o(e) {
      if (e && e.__esModule) return e;
      var n = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          r.get || r.set ? Object.defineProperty(n, t, r) : n[t] = e[t];
        }
      }
      return n.default = e, n;
    }

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i() {
      var o = n.default,
          u = !1,
          i = 1,
          d = 1,
          f = [0],
          a = r.constantZero,
          c = r.constantZero,
          p = r.constantZero,
          g = r.constantZero,
          l = r.constantZero;

      function s(n) {
        return n.x0 = n.y0 = 0, n.x1 = i, n.y1 = d, n.eachBefore(y), f = [0], u && n.eachBefore(e.default), n;
      }

      function y(e) {
        var n = f[e.depth],
            t = e.x0 + n,
            r = e.y0 + n,
            u = e.x1 - n,
            i = e.y1 - n;
        u < t && (t = u = (t + u) / 2), i < r && (r = i = (r + i) / 2), e.x0 = t, e.y0 = r, e.x1 = u, e.y1 = i, e.children && (n = f[e.depth + 1] = a(e) / 2, t += l(e) - n, r += c(e) - n, (u -= p(e) - n) < t && (t = u = (t + u) / 2), (i -= g(e) - n) < r && (r = i = (r + i) / 2), o(e, t, r, u, i));
      }

      return s.round = function (e) {
        return arguments.length ? (u = !!e, s) : u;
      }, s.size = function (e) {
        return arguments.length ? (i = +e[0], d = +e[1], s) : [i, d];
      }, s.tile = function (e) {
        return arguments.length ? (o = (0, t.required)(e), s) : o;
      }, s.padding = function (e) {
        return arguments.length ? s.paddingInner(e).paddingOuter(e) : s.paddingInner();
      }, s.paddingInner = function (e) {
        return arguments.length ? (a = "function" == typeof e ? e : (0, r.default)(+e), s) : a;
      }, s.paddingOuter = function (e) {
        return arguments.length ? s.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e) : s.paddingTop();
      }, s.paddingTop = function (e) {
        return arguments.length ? (c = "function" == typeof e ? e : (0, r.default)(+e), s) : c;
      }, s.paddingRight = function (e) {
        return arguments.length ? (p = "function" == typeof e ? e : (0, r.default)(+e), s) : p;
      }, s.paddingBottom = function (e) {
        return arguments.length ? (g = "function" == typeof e ? e : (0, r.default)(+e), s) : g;
      }, s.paddingLeft = function (e) {
        return arguments.length ? (l = "function" == typeof e ? e : (0, r.default)(+e), s) : l;
      }, s;
    }
  }, {
    "./round": "PETl",
    "./squarify": "jyLZ",
    "../accessors": "OleL",
    "../constant": "k/YM"
  }],
  "cDuG": [function (require, module, exports) {
    "use strict";

    function e(e, r, a, t, v) {
      var n,
          o,
          u = e.children,
          f = u.length,
          i = new Array(f + 1);

      for (i[0] = o = n = 0; n < f; ++n) {
        i[n + 1] = o += u[n].value;
      }

      !function e(r, a, t, v, n, o, f) {
        if (r >= a - 1) {
          var l = u[r];
          return l.x0 = v, l.y0 = n, l.x1 = o, void (l.y1 = f);
        }

        var s = i[r],
            c = t / 2 + s,
            d = r + 1,
            x = a - 1;

        for (; d < x;) {
          var y = d + x >>> 1;
          i[y] < c ? d = y + 1 : x = y;
        }

        c - i[d - 1] < i[d] - c && r + 1 < d && --d;
        var p = i[d] - s,
            h = t - p;

        if (o - v > f - n) {
          var _ = (v * h + o * p) / t;

          e(r, d, p, v, n, _, f), e(d, a, h, _, n, o, f);
        } else {
          var b = (n * h + f * p) / t;
          e(r, d, p, v, n, o, b), e(d, a, h, v, b, o, f);
        }
      }(0, f, e.value, r, a, t, v);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "dACy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = u(require("./dice")),
        t = u(require("./slice"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(u, r, d, i, l) {
      (1 & u.depth ? t.default : e.default)(u, r, d, i, l);
    }
  }, {
    "./dice": "L3aV",
    "./slice": "RVbL"
  }],
  "GrWc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = t(require("./dice")),
        r = t(require("./slice")),
        u = require("./squarify");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = function t(a) {
      function i(t, i, l, f, o) {
        if ((n = t._squarify) && n.ratio === a) for (var n, s, d, v, c, q = -1, _ = n.length, p = t.value; ++q < _;) {
          for (d = (s = n[q]).children, v = s.value = 0, c = d.length; v < c; ++v) {
            s.value += d[v].value;
          }

          s.dice ? (0, e.default)(s, i, l, f, l += (o - l) * s.value / p) : (0, r.default)(s, i, l, i += (f - i) * s.value / p, o), p -= s.value;
        } else t._squarify = n = (0, u.squarifyRatio)(a, t, i, l, f, o), n.ratio = a;
      }

      return i.ratio = function (e) {
        return t((e = +e) > 1 ? e : 1);
      }, i;
    }(u.phi);

    exports.default = a;
  }, {
    "./dice": "L3aV",
    "./slice": "RVbL",
    "./squarify": "jyLZ"
  }],
  "wNQE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "cluster", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "hierarchy", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "pack", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "packSiblings", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "packEnclose", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "partition", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "stratify", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "tree", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "treemap", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "treemapBinary", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "treemapDice", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "treemapSlice", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "treemapSliceDice", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "treemapSquarify", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "treemapResquarify", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    });
    var e = m(require("./cluster")),
        r = m(require("./hierarchy/index")),
        t = m(require("./pack/index")),
        n = m(require("./pack/siblings")),
        u = m(require("./pack/enclose")),
        i = m(require("./partition")),
        a = m(require("./stratify")),
        f = m(require("./tree")),
        o = m(require("./treemap/index")),
        p = m(require("./treemap/binary")),
        c = m(require("./treemap/dice")),
        l = m(require("./treemap/slice")),
        d = m(require("./treemap/sliceDice")),
        b = m(require("./treemap/squarify")),
        s = m(require("./treemap/resquarify"));

    function m(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./cluster": "brcY",
    "./hierarchy/index": "LCo+",
    "./pack/index": "aVuj",
    "./pack/siblings": "efS5",
    "./pack/enclose": "ZzhU",
    "./partition": "h/+W",
    "./stratify": "bJDQ",
    "./tree": "7nrL",
    "./treemap/index": "3cC5",
    "./treemap/binary": "cDuG",
    "./treemap/dice": "L3aV",
    "./treemap/slice": "RVbL",
    "./treemap/sliceDice": "dACy",
    "./treemap/squarify": "jyLZ",
    "./treemap/resquarify": "GrWc"
  }],
  "xGSp": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r = -1, o = e.length, u = e[o - 1], n = 0; ++r < o;) {
        t = u, u = e[r], n += t[1] * u[0] - t[0] * u[1];
      }

      return n / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "5ySB": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r, o = -1, u = e.length, n = 0, s = 0, f = e[u - 1], l = 0; ++o < u;) {
        t = f, f = e[o], l += r = t[0] * f[1] - f[0] * t[1], n += (t[0] + f[0]) * r, s += (t[1] + f[1]) * r;
      }

      return [n / (l *= 3), s / l];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "1Q4L": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      return (t[0] - e[0]) * (r[1] - e[1]) - (t[1] - e[1]) * (r[0] - e[0]);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "tgjV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var r = e(require("./cross"));

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function t(r, e) {
      return r[0] - e[0] || r[1] - e[1];
    }

    function n(e) {
      for (var t = e.length, n = [0, 1], u = 2, o = 2; o < t; ++o) {
        for (; u > 1 && (0, r.default)(e[n[u - 2]], e[n[u - 1]], e[o]) <= 0;) {
          --u;
        }

        n[u++] = o;
      }

      return n.slice(0, u);
    }

    function u(r) {
      if ((u = r.length) < 3) return null;
      var e,
          u,
          o = new Array(u),
          f = new Array(u);

      for (e = 0; e < u; ++e) {
        o[e] = [+r[e][0], +r[e][1], e];
      }

      for (o.sort(t), e = 0; e < u; ++e) {
        f[e] = [o[e][0], -o[e][1]];
      }

      var l = n(o),
          s = n(f),
          a = s[0] === l[0],
          i = s[s.length - 1] === l[l.length - 1],
          c = [];

      for (e = l.length - 1; e >= 0; --e) {
        c.push(r[o[l[e]][2]]);
      }

      for (e = +a; e < s.length - i; ++e) {
        c.push(r[o[s[e]][2]]);
      }

      return c;
    }
  }, {
    "./cross": "1Q4L"
  }],
  "pcph": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      for (var r, o, u = e.length, n = e[u - 1], s = t[0], f = t[1], l = n[0], a = n[1], c = !1, d = 0; d < u; ++d) {
        r = (n = e[d])[0], (o = n[1]) > f != a > f && s < (l - r) * (f - o) / (a - o) + r && (c = !c), l = r, a = o;
      }

      return c;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "naEA": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r, o = -1, s = e.length, u = e[s - 1], n = u[0], a = u[1], f = 0; ++o < s;) {
        t = n, r = a, t -= n = (u = e[o])[0], r -= a = u[1], f += Math.sqrt(t * t + r * r);
      }

      return f;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "QnuL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "polygonArea", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "polygonCentroid", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "polygonHull", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "polygonContains", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "polygonLength", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    });
    var e = u(require("./area")),
        r = u(require("./centroid")),
        t = u(require("./hull")),
        n = u(require("./contains")),
        o = u(require("./length"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./area": "xGSp",
    "./centroid": "5ySB",
    "./hull": "tgjV",
    "./contains": "pcph",
    "./length": "naEA"
  }],
  "uDia": [function (require, module, exports) {
    "use strict";

    function e() {
      return Math.random();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hmOZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("./defaultSource"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = function e(u) {
      function t(e, t) {
        return e = null == e ? 0 : +e, t = null == t ? 1 : +t, 1 === arguments.length ? (t = e, e = 0) : t -= e, function () {
          return u() * t + e;
        };
      }

      return t.source = e, t;
    }(e.default);

    exports.default = t;
  }, {
    "./defaultSource": "uDia"
  }],
  "pjsZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("./defaultSource"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = function e(u) {
      function r(e, r) {
        var t, l;
        return e = null == e ? 0 : +e, r = null == r ? 1 : +r, function () {
          var n;
          if (null != t) n = t, t = null;else do {
            t = 2 * u() - 1, n = 2 * u() - 1, l = t * t + n * n;
          } while (!l || l > 1);
          return e + r * n * Math.sqrt(-2 * Math.log(l) / l);
        };
      }

      return r.source = e, r;
    }(e.default);

    exports.default = r;
  }, {
    "./defaultSource": "uDia"
  }],
  "lZpB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./defaultSource")),
        r = t(require("./normal"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = function e(t) {
      function u() {
        var e = r.default.source(t).apply(this, arguments);
        return function () {
          return Math.exp(e());
        };
      }

      return u.source = e, u;
    }(e.default);

    exports.default = u;
  }, {
    "./defaultSource": "uDia",
    "./normal": "pjsZ"
  }],
  "DMHS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("./defaultSource"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = function e(r) {
      function t(e) {
        return function () {
          for (var t = 0, u = 0; u < e; ++u) {
            t += r();
          }

          return t;
        };
      }

      return t.source = e, t;
    }(e.default);

    exports.default = t;
  }, {
    "./defaultSource": "uDia"
  }],
  "g+l6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = u(require("./defaultSource")),
        r = u(require("./irwinHall"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = function e(u) {
      function t(e) {
        var t = r.default.source(u)(e);
        return function () {
          return t() / e;
        };
      }

      return t.source = e, t;
    }(e.default);

    exports.default = t;
  }, {
    "./defaultSource": "uDia",
    "./irwinHall": "DMHS"
  }],
  "gEmS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./defaultSource"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = function e(t) {
      function r(e) {
        return function () {
          return -Math.log(1 - t()) / e;
        };
      }

      return r.source = e, r;
    }(e.default);

    exports.default = r;
  }, {
    "./defaultSource": "uDia"
  }],
  "4WQ4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "randomUniform", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "randomNormal", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "randomLogNormal", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "randomBates", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "randomIrwinHall", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "randomExponential", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    });
    var e = a(require("./uniform")),
        r = a(require("./normal")),
        t = a(require("./logNormal")),
        n = a(require("./bates")),
        o = a(require("./irwinHall")),
        u = a(require("./exponential"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./uniform": "hmOZ",
    "./normal": "pjsZ",
    "./logNormal": "lZpB",
    "./bates": "g+l6",
    "./irwinHall": "DMHS",
    "./exponential": "gEmS"
  }],
  "aZlr": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      switch (arguments.length) {
        case 0:
          break;

        case 1:
          this.range(e);
          break;

        default:
          this.range(t).domain(e);
      }

      return this;
    }

    function t(e, t) {
      switch (arguments.length) {
        case 0:
          break;

        case 1:
          this.interpolator(e);
          break;

        default:
          this.interpolator(t).domain(e);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.initRange = e, exports.initInterpolator = t;
  }, {}],
  "lLkj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.slice = exports.map = void 0;
    var e = Array.prototype,
        r = e.map;
    exports.map = r;
    var p = e.slice;
    exports.slice = p;
  }, {}],
  "ELIM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.implicit = void 0;

    var e = require("d3-collection"),
        n = require("./array"),
        r = require("./init"),
        t = {
      name: "implicit"
    };

    function i() {
      var u = (0, e.map)(),
          o = [],
          l = [],
          c = t;

      function a(e) {
        var n = e + "",
            r = u.get(n);

        if (!r) {
          if (c !== t) return c;
          u.set(n, r = o.push(e));
        }

        return l[(r - 1) % l.length];
      }

      return a.domain = function (n) {
        if (!arguments.length) return o.slice();
        o = [], u = (0, e.map)();

        for (var r, t, i = -1, l = n.length; ++i < l;) {
          u.has(t = (r = n[i]) + "") || u.set(t, o.push(r));
        }

        return a;
      }, a.range = function (e) {
        return arguments.length ? (l = n.slice.call(e), a) : l.slice();
      }, a.unknown = function (e) {
        return arguments.length ? (c = e, a) : c;
      }, a.copy = function () {
        return i(o, l).unknown(c);
      }, r.initRange.apply(a, arguments), a;
    }

    exports.implicit = t;
  }, {
    "d3-collection": "qqV1",
    "./array": "lLkj",
    "./init": "aZlr"
  }],
  "rJZF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u, exports.point = a;

    var n = require("d3-array"),
        e = require("./init"),
        r = t(require("./ordinal"));

    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function u() {
      var t,
          i,
          a = (0, r.default)().unknown(void 0),
          d = a.domain,
          o = a.range,
          l = [0, 1],
          g = !1,
          c = 0,
          p = 0,
          f = .5;

      function h() {
        var e = d().length,
            r = l[1] < l[0],
            u = l[r - 0],
            a = l[1 - r];
        t = (a - u) / Math.max(1, e - c + 2 * p), g && (t = Math.floor(t)), u += (a - u - t * (e - c)) * f, i = t * (1 - c), g && (u = Math.round(u), i = Math.round(i));
        var h = (0, n.range)(e).map(function (n) {
          return u + t * n;
        });
        return o(r ? h.reverse() : h);
      }

      return delete a.unknown, a.domain = function (n) {
        return arguments.length ? (d(n), h()) : d();
      }, a.range = function (n) {
        return arguments.length ? (l = [+n[0], +n[1]], h()) : l.slice();
      }, a.rangeRound = function (n) {
        return l = [+n[0], +n[1]], g = !0, h();
      }, a.bandwidth = function () {
        return i;
      }, a.step = function () {
        return t;
      }, a.round = function (n) {
        return arguments.length ? (g = !!n, h()) : g;
      }, a.padding = function (n) {
        return arguments.length ? (c = Math.min(1, p = +n), h()) : c;
      }, a.paddingInner = function (n) {
        return arguments.length ? (c = Math.min(1, n), h()) : c;
      }, a.paddingOuter = function (n) {
        return arguments.length ? (p = +n, h()) : p;
      }, a.align = function (n) {
        return arguments.length ? (f = Math.max(0, Math.min(1, n)), h()) : f;
      }, a.copy = function () {
        return u(d(), l).round(g).paddingInner(c).paddingOuter(p).align(f);
      }, e.initRange.apply(h(), arguments);
    }

    function i(n) {
      var e = n.copy;
      return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function () {
        return i(e());
      }, n;
    }

    function a() {
      return i(u.apply(null, arguments).paddingInner(1));
    }
  }, {
    "d3-array": "cBuZ",
    "./init": "aZlr",
    "./ordinal": "ELIM"
  }],
  "zRWI": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "ZpMB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.identity = o, exports.copy = p, exports.transformer = m, exports.default = d;

    var n = require("d3-array"),
        r = require("d3-interpolate"),
        e = require("./array"),
        t = i(require("./constant")),
        u = i(require("./number"));

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var a = [0, 1];

    function o(n) {
      return n;
    }

    function l(n, r) {
      return (r -= n = +n) ? function (e) {
        return (e - n) / r;
      } : (0, t.default)(isNaN(r) ? NaN : .5);
    }

    function c(n) {
      var r,
          e = n[0],
          t = n[n.length - 1];
      return e > t && (r = e, e = t, t = r), function (n) {
        return Math.max(e, Math.min(t, n));
      };
    }

    function f(n, r, e) {
      var t = n[0],
          u = n[1],
          i = r[0],
          a = r[1];
      return u < t ? (t = l(u, t), i = e(a, i)) : (t = l(t, u), i = e(i, a)), function (n) {
        return i(t(n));
      };
    }

    function s(r, e, t) {
      var u = Math.min(r.length, e.length) - 1,
          i = new Array(u),
          a = new Array(u),
          o = -1;

      for (r[u] < r[0] && (r = r.slice().reverse(), e = e.slice().reverse()); ++o < u;) {
        i[o] = l(r[o], r[o + 1]), a[o] = t(e[o], e[o + 1]);
      }

      return function (e) {
        var t = (0, n.bisect)(r, e, 1, u) - 1;
        return a[t](i[t](e));
      };
    }

    function p(n, r) {
      return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
    }

    function m() {
      var n,
          t,
          i,
          l,
          p,
          m,
          d = a,
          g = a,
          h = r.interpolate,
          v = o;

      function y() {
        return l = Math.min(d.length, g.length) > 2 ? s : f, p = m = null, N;
      }

      function N(r) {
        return isNaN(r = +r) ? i : (p || (p = l(d.map(n), g, h)))(n(v(r)));
      }

      return N.invert = function (e) {
        return v(t((m || (m = l(g, d.map(n), r.interpolateNumber)))(e)));
      }, N.domain = function (n) {
        return arguments.length ? (d = e.map.call(n, u.default), v === o || (v = c(d)), y()) : d.slice();
      }, N.range = function (n) {
        return arguments.length ? (g = e.slice.call(n), y()) : g.slice();
      }, N.rangeRound = function (n) {
        return g = e.slice.call(n), h = r.interpolateRound, y();
      }, N.clamp = function (n) {
        return arguments.length ? (v = n ? c(d) : o, N) : v !== o;
      }, N.interpolate = function (n) {
        return arguments.length ? (h = n, y()) : h;
      }, N.unknown = function (n) {
        return arguments.length ? (i = n, N) : i;
      }, function (r, e) {
        return n = r, t = e, y();
      };
    }

    function d(n, r) {
      return m()(n, r);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-interpolate": "mkGF",
    "./array": "lLkj",
    "./constant": "5O/Y",
    "./number": "zRWI"
  }],
  "m0SA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = require("d3-array"),
        r = require("d3-format");

    function a(a, i, s, t) {
      var c,
          n = (0, e.tickStep)(a, i, s);

      switch ((t = (0, r.formatSpecifier)(null == t ? ",f" : t)).type) {
        case "s":
          var o = Math.max(Math.abs(a), Math.abs(i));
          return null != t.precision || isNaN(c = (0, r.precisionPrefix)(n, o)) || (t.precision = c), (0, r.formatPrefix)(t, o);

        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != t.precision || isNaN(c = (0, r.precisionRound)(n, Math.max(Math.abs(a), Math.abs(i)))) || (t.precision = c - ("e" === t.type));
          break;

        case "f":
        case "%":
          null != t.precision || isNaN(c = (0, r.precisionFixed)(n)) || (t.precision = c - 2 * ("%" === t.type));
      }

      return (0, r.format)(t);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-format": "4gWe"
  }],
  "VMtl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linearish = u, exports.default = c;

    var t = require("d3-array"),
        e = o(require("./continuous")),
        r = require("./init"),
        n = i(require("./tickFormat"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function o(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) {
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
          n.get || n.set ? Object.defineProperty(e, r, n) : e[r] = t[r];
        }
      }
      return e.default = t, e;
    }

    function u(e) {
      var r = e.domain;
      return e.ticks = function (e) {
        var n = r();
        return (0, t.ticks)(n[0], n[n.length - 1], null == e ? 10 : e);
      }, e.tickFormat = function (t, e) {
        var i = r();
        return (0, n.default)(i[0], i[i.length - 1], null == t ? 10 : t, e);
      }, e.nice = function (n) {
        null == n && (n = 10);
        var i,
            o = r(),
            u = 0,
            c = o.length - 1,
            a = o[u],
            l = o[c];
        return l < a && (i = a, a = l, l = i, i = u, u = c, c = i), (i = (0, t.tickIncrement)(a, l, n)) > 0 ? (a = Math.floor(a / i) * i, l = Math.ceil(l / i) * i, i = (0, t.tickIncrement)(a, l, n)) : i < 0 && (a = Math.ceil(a * i) / i, l = Math.floor(l * i) / i, i = (0, t.tickIncrement)(a, l, n)), i > 0 ? (o[u] = Math.floor(a / i) * i, o[c] = Math.ceil(l / i) * i, r(o)) : i < 0 && (o[u] = Math.ceil(a * i) / i, o[c] = Math.floor(l * i) / i, r(o)), e;
      }, e;
    }

    function c() {
      var t = (0, e.default)(e.identity, e.identity);
      return t.copy = function () {
        return (0, e.copy)(t, c());
      }, r.initRange.apply(t, arguments), u(t);
    }
  }, {
    "d3-array": "cBuZ",
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./tickFormat": "m0SA"
  }],
  "eP89": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("./array"),
        n = require("./linear"),
        r = t(require("./number"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t) {
      var a;

      function i(e) {
        return isNaN(e = +e) ? a : e;
      }

      return i.invert = i, i.domain = i.range = function (n) {
        return arguments.length ? (t = e.map.call(n, r.default), i) : t.slice();
      }, i.unknown = function (e) {
        return arguments.length ? (a = e, i) : a;
      }, i.copy = function () {
        return u(t).unknown(a);
      }, t = arguments.length ? e.map.call(t, r.default) : [0, 1], (0, n.linearish)(i);
    }
  }, {
    "./array": "lLkj",
    "./linear": "VMtl",
    "./number": "zRWI"
  }],
  "gRJQ": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r,
          l = 0,
          o = (e = e.slice()).length - 1,
          s = e[l],
          u = e[o];
      return u < s && (r = l, l = o, o = r, r = s, s = u, u = r), e[l] = t.floor(s), e[o] = t.ceil(u), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "X3YW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.loggish = p, exports.default = d;

    var n = require("d3-array"),
        t = require("d3-format"),
        r = o(require("./nice")),
        e = require("./continuous"),
        u = require("./init");

    function o(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function i(n) {
      return Math.log(n);
    }

    function a(n) {
      return Math.exp(n);
    }

    function f(n) {
      return -Math.log(-n);
    }

    function c(n) {
      return -Math.exp(-n);
    }

    function l(n) {
      return isFinite(n) ? +("1e" + n) : n < 0 ? 0 : n;
    }

    function h(n) {
      return 10 === n ? l : n === Math.E ? Math.exp : function (t) {
        return Math.pow(n, t);
      };
    }

    function s(n) {
      return n === Math.E ? Math.log : 10 === n && Math.log10 || 2 === n && Math.log2 || (n = Math.log(n), function (t) {
        return Math.log(t) / n;
      });
    }

    function M(n) {
      return function (t) {
        return -n(-t);
      };
    }

    function p(e) {
      var u,
          o,
          l = e(i, a),
          p = l.domain,
          d = 10;

      function g() {
        return u = s(d), o = h(d), p()[0] < 0 ? (u = M(u), o = M(o), e(f, c)) : e(i, a), l;
      }

      return l.base = function (n) {
        return arguments.length ? (d = +n, g()) : d;
      }, l.domain = function (n) {
        return arguments.length ? (p(n), g()) : p();
      }, l.ticks = function (t) {
        var r,
            e = p(),
            i = e[0],
            a = e[e.length - 1];
        (r = a < i) && (h = i, i = a, a = h);
        var f,
            c,
            l,
            h = u(i),
            s = u(a),
            M = null == t ? 10 : +t,
            g = [];

        if (!(d % 1) && s - h < M) {
          if (h = Math.round(h) - 1, s = Math.round(s) + 1, i > 0) {
            for (; h < s; ++h) {
              for (c = 1, f = o(h); c < d; ++c) {
                if (!((l = f * c) < i)) {
                  if (l > a) break;
                  g.push(l);
                }
              }
            }
          } else for (; h < s; ++h) {
            for (c = d - 1, f = o(h); c >= 1; --c) {
              if (!((l = f * c) < i)) {
                if (l > a) break;
                g.push(l);
              }
            }
          }
        } else g = (0, n.ticks)(h, s, Math.min(s - h, M)).map(o);

        return r ? g.reverse() : g;
      }, l.tickFormat = function (n, r) {
        if (null == r && (r = 10 === d ? ".0e" : ","), "function" != typeof r && (r = (0, t.format)(r)), n === 1 / 0) return r;
        null == n && (n = 10);
        var e = Math.max(1, d * n / l.ticks().length);
        return function (n) {
          var t = n / o(Math.round(u(n)));
          return t * d < d - .5 && (t *= d), t <= e ? r(n) : "";
        };
      }, l.nice = function () {
        return p((0, r.default)(p(), {
          floor: function floor(n) {
            return o(Math.floor(u(n)));
          },
          ceil: function ceil(n) {
            return o(Math.ceil(u(n)));
          }
        }));
      }, l;
    }

    function d() {
      var n = p((0, e.transformer)()).domain([1, 10]);
      return n.copy = function () {
        return (0, e.copy)(n, d()).base(n.base());
      }, u.initRange.apply(n, arguments), n;
    }
  }, {
    "d3-array": "cBuZ",
    "d3-format": "4gWe",
    "./nice": "gRJQ",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "Prec": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.symlogish = i, exports.default = o;

    var n = require("./linear"),
        t = require("./continuous"),
        r = require("./init");

    function e(n) {
      return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / n));
      };
    }

    function u(n) {
      return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
      };
    }

    function i(t) {
      var r = 1,
          i = t(e(r), u(r));
      return i.constant = function (n) {
        return arguments.length ? t(e(r = +n), u(r)) : r;
      }, (0, n.linearish)(i);
    }

    function o() {
      var n = i((0, t.transformer)());
      return n.copy = function () {
        return (0, t.copy)(n, o()).constant(n.constant());
      }, r.initRange.apply(n, arguments);
    }
  }, {
    "./linear": "VMtl",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "/yse": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.powish = o, exports.default = p, exports.sqrt = a;

    var t = require("./linear"),
        n = require("./continuous"),
        e = require("./init");

    function r(t) {
      return function (n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
      };
    }

    function i(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }

    function u(t) {
      return t < 0 ? -t * t : t * t;
    }

    function o(e) {
      var o = e(n.identity, n.identity),
          p = 1;
      return o.exponent = function (t) {
        return arguments.length ? 1 === (p = +t) ? e(n.identity, n.identity) : .5 === p ? e(i, u) : e(r(p), r(1 / p)) : p;
      }, (0, t.linearish)(o);
    }

    function p() {
      var t = o((0, n.transformer)());
      return t.copy = function () {
        return (0, n.copy)(t, p()).exponent(t.exponent());
      }, e.initRange.apply(t, arguments), t;
    }

    function a() {
      return p.apply(null, arguments).exponent(.5);
    }
  }, {
    "./linear": "VMtl",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "fsZk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var n = require("d3-array"),
        e = require("./array"),
        r = require("./init");

    function t() {
      var i,
          u = [],
          a = [],
          l = [];

      function o() {
        var e = 0,
            r = Math.max(1, a.length);

        for (l = new Array(r - 1); ++e < r;) {
          l[e - 1] = (0, n.quantile)(u, e / r);
        }

        return c;
      }

      function c(e) {
        return isNaN(e = +e) ? i : a[(0, n.bisect)(l, e)];
      }

      return c.invertExtent = function (n) {
        var e = a.indexOf(n);
        return e < 0 ? [NaN, NaN] : [e > 0 ? l[e - 1] : u[0], e < l.length ? l[e] : u[u.length - 1]];
      }, c.domain = function (e) {
        if (!arguments.length) return u.slice();
        u = [];

        for (var r, t = 0, i = e.length; t < i; ++t) {
          null == (r = e[t]) || isNaN(r = +r) || u.push(r);
        }

        return u.sort(n.ascending), o();
      }, c.range = function (n) {
        return arguments.length ? (a = e.slice.call(n), o()) : a.slice();
      }, c.unknown = function (n) {
        return arguments.length ? (i = n, c) : i;
      }, c.quantiles = function () {
        return l.slice();
      }, c.copy = function () {
        return t().domain(u).range(a).unknown(i);
      }, r.initRange.apply(c, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "lLkj",
    "./init": "aZlr"
  }],
  "8Z2c": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var n = require("d3-array"),
        r = require("./array"),
        e = require("./linear"),
        t = require("./init");

    function i() {
      var u,
          a = 0,
          o = 1,
          c = 1,
          l = [.5],
          f = [0, 1];

      function s(r) {
        return r <= r ? f[(0, n.bisect)(l, r, 0, c)] : u;
      }

      function d() {
        var n = -1;

        for (l = new Array(c); ++n < c;) {
          l[n] = ((n + 1) * o - (n - c) * a) / (c + 1);
        }

        return s;
      }

      return s.domain = function (n) {
        return arguments.length ? (a = +n[0], o = +n[1], d()) : [a, o];
      }, s.range = function (n) {
        return arguments.length ? (c = (f = r.slice.call(n)).length - 1, d()) : f.slice();
      }, s.invertExtent = function (n) {
        var r = f.indexOf(n);
        return r < 0 ? [NaN, NaN] : r < 1 ? [a, l[0]] : r >= c ? [l[c - 1], o] : [l[r - 1], l[r]];
      }, s.unknown = function (n) {
        return arguments.length ? (u = n, s) : s;
      }, s.thresholds = function () {
        return l.slice();
      }, s.copy = function () {
        return i().domain([a, o]).range(f).unknown(u);
      }, t.initRange.apply((0, e.linearish)(s), arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "lLkj",
    "./linear": "VMtl",
    "./init": "aZlr"
  }],
  "odYE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = require("d3-array"),
        e = require("./array"),
        t = require("./init");

    function r() {
      var i,
          u = [.5],
          a = [0, 1],
          l = 1;

      function c(e) {
        return e <= e ? a[(0, n.bisect)(u, e, 0, l)] : i;
      }

      return c.domain = function (n) {
        return arguments.length ? (u = e.slice.call(n), l = Math.min(u.length, a.length - 1), c) : u.slice();
      }, c.range = function (n) {
        return arguments.length ? (a = e.slice.call(n), l = Math.min(u.length, a.length - 1), c) : a.slice();
      }, c.invertExtent = function (n) {
        var e = a.indexOf(n);
        return [u[e - 1], u[e]];
      }, c.unknown = function (n) {
        return arguments.length ? (i = n, c) : i;
      }, c.copy = function () {
        return r().domain(u).range(a).unknown(i);
      }, t.initRange.apply(c, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./array": "lLkj",
    "./init": "aZlr"
  }],
  "gsab": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = new Date(),
        n = new Date();

    function t(r, o, u, f) {
      function i(e) {
        return r(e = new Date(+e)), e;
      }

      return i.floor = i, i.ceil = function (e) {
        return r(e = new Date(e - 1)), o(e, 1), r(e), e;
      }, i.round = function (e) {
        var n = i(e),
            t = i.ceil(e);
        return e - n < t - e ? n : t;
      }, i.offset = function (e, n) {
        return o(e = new Date(+e), null == n ? 1 : Math.floor(n)), e;
      }, i.range = function (e, n, t) {
        var u,
            f = [];
        if (e = i.ceil(e), t = null == t ? 1 : Math.floor(t), !(e < n && t > 0)) return f;

        do {
          f.push(u = new Date(+e)), o(e, t), r(e);
        } while (u < e && e < n);

        return f;
      }, i.filter = function (e) {
        return t(function (n) {
          if (n >= n) for (; r(n), !e(n);) {
            n.setTime(n - 1);
          }
        }, function (n, t) {
          if (n >= n) if (t < 0) for (; ++t <= 0;) {
            for (; o(n, -1), !e(n);) {
              ;
            }
          } else for (; --t >= 0;) {
            for (; o(n, 1), !e(n);) {
              ;
            }
          }
        });
      }, u && (i.count = function (t, o) {
        return e.setTime(+t), n.setTime(+o), r(e), r(n), Math.floor(u(e, n));
      }, i.every = function (e) {
        return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? i.filter(f ? function (n) {
          return f(n) % e == 0;
        } : function (n) {
          return i.count(0, n) % e == 0;
        }) : i : null;
      }), i;
    }
  }, {}],
  "r4Yr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.milliseconds = exports.default = void 0;
    var e = t(require("./interval"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = (0, e.default)(function () {}, function (e, t) {
      e.setTime(+e + t);
    }, function (e, t) {
      return t - e;
    });

    n.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? (0, e.default)(function (e) {
        e.setTime(Math.floor(e / t) * t);
      }, function (e, n) {
        e.setTime(+e + n * t);
      }, function (e, n) {
        return (n - e) / t;
      }) : n : null;
    };

    var r = n;
    exports.default = r;
    var i = n.range;
    exports.milliseconds = i;
  }, {
    "./interval": "gsab"
  }],
  "EMi+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.durationWeek = exports.durationDay = exports.durationHour = exports.durationMinute = exports.durationSecond = void 0;
    var e = 1e3;
    exports.durationSecond = e;
    var r = 6e4;
    exports.durationMinute = r;
    var o = 36e5;
    exports.durationHour = o;
    var t = 864e5;
    exports.durationDay = t;
    var a = 6048e5;
    exports.durationWeek = a;
  }, {}],
  "K4G6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.seconds = exports.default = void 0;

    var e = r(require("./interval")),
        t = require("./duration");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds());
    }, function (e, r) {
      e.setTime(+e + r * t.durationSecond);
    }, function (e, r) {
      return (r - e) / t.durationSecond;
    }, function (e) {
      return e.getUTCSeconds();
    }),
        o = n;
    exports.default = o;
    var u = n.range;
    exports.seconds = u;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "sObl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.minutes = exports.default = void 0;

    var e = n(require("./interval")),
        t = require("./duration");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond);
    }, function (e, n) {
      e.setTime(+e + n * t.durationMinute);
    }, function (e, n) {
      return (n - e) / t.durationMinute;
    }, function (e) {
      return e.getMinutes();
    }),
        u = r;
    exports.default = u;
    var i = r.range;
    exports.minutes = i;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "wPv4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hours = exports.default = void 0;

    var e = r(require("./interval")),
        t = require("./duration");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond - e.getMinutes() * t.durationMinute);
    }, function (e, r) {
      e.setTime(+e + r * t.durationHour);
    }, function (e, r) {
      return (r - e) / t.durationHour;
    }, function (e) {
      return e.getHours();
    }),
        o = u;
    exports.default = o;
    var n = u.range;
    exports.hours = n;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "bZ++": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.days = exports.default = void 0;

    var e = r(require("./interval")),
        t = require("./duration");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setDate(e.getDate() + t);
    }, function (e, r) {
      return (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * t.durationMinute) / t.durationDay;
    }, function (e) {
      return e.getDate() - 1;
    }),
        n = u;
    exports.default = n;
    var o = u.range;
    exports.days = o;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "6SUb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.saturdays = exports.fridays = exports.thursdays = exports.wednesdays = exports.tuesdays = exports.mondays = exports.sundays = exports.saturday = exports.friday = exports.thursday = exports.wednesday = exports.tuesday = exports.monday = exports.sunday = void 0;

    var e = t(require("./interval")),
        r = require("./duration");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(t) {
      return (0, e.default)(function (e) {
        e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setDate(e.getDate() + 7 * r);
      }, function (e, t) {
        return (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * r.durationMinute) / r.durationWeek;
      });
    }

    var a = s(0);
    exports.sunday = a;
    var o = s(1);
    exports.monday = o;
    var d = s(2);
    exports.tuesday = d;
    var n = s(3);
    exports.wednesday = n;
    var u = s(4);
    exports.thursday = u;
    var p = s(5);
    exports.friday = p;
    var y = s(6);
    exports.saturday = y;
    var x = a.range;
    exports.sundays = x;
    var i = o.range;
    exports.mondays = i;
    var v = d.range;
    exports.tuesdays = v;
    var f = n.range;
    exports.wednesdays = f;
    var g = u.range;
    exports.thursdays = g;
    var c = p.range;
    exports.fridays = c;
    var l = y.range;
    exports.saturdays = l;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "XpbA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.months = exports.default = void 0;
    var t = e(require("./interval"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = (0, t.default)(function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setMonth(t.getMonth() + e);
    }, function (t, e) {
      return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
    }, function (t) {
      return t.getMonth();
    }),
        n = r;
    exports.default = n;
    var o = r.range;
    exports.months = o;
  }, {
    "./interval": "gsab"
  }],
  "djmh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.years = exports.default = void 0;
    var e = t(require("./interval"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setFullYear(e.getFullYear() + t);
    }, function (e, t) {
      return t.getFullYear() - e.getFullYear();
    }, function (e) {
      return e.getFullYear();
    });

    r.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function (e) {
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setFullYear(e.getFullYear() + r * t);
      }) : null;
    };

    var u = r;
    exports.default = u;
    var l = r.range;
    exports.years = l;
  }, {
    "./interval": "gsab"
  }],
  "c3Ah": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcMinutes = exports.default = void 0;

    var e = u(require("./interval")),
        t = require("./duration");

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setUTCSeconds(0, 0);
    }, function (e, u) {
      e.setTime(+e + u * t.durationMinute);
    }, function (e, u) {
      return (u - e) / t.durationMinute;
    }, function (e) {
      return e.getUTCMinutes();
    }),
        n = r;
    exports.default = n;
    var i = r.range;
    exports.utcMinutes = i;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "sGav": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcHours = exports.default = void 0;

    var e = t(require("./interval")),
        r = require("./duration");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setUTCMinutes(0, 0, 0);
    }, function (e, t) {
      e.setTime(+e + t * r.durationHour);
    }, function (e, t) {
      return (t - e) / r.durationHour;
    }, function (e) {
      return e.getUTCHours();
    }),
        o = u;
    exports.default = o;
    var n = u.range;
    exports.utcHours = n;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "ns65": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcDays = exports.default = void 0;

    var e = r(require("./interval")),
        t = require("./duration");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setUTCHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setUTCDate(e.getUTCDate() + t);
    }, function (e, r) {
      return (r - e) / t.durationDay;
    }, function (e) {
      return e.getUTCDate() - 1;
    }),
        a = u;
    exports.default = a;
    var n = u.range;
    exports.utcDays = n;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "/HsO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcSaturdays = exports.utcFridays = exports.utcThursdays = exports.utcWednesdays = exports.utcTuesdays = exports.utcMondays = exports.utcSundays = exports.utcSaturday = exports.utcFriday = exports.utcThursday = exports.utcWednesday = exports.utcTuesday = exports.utcMonday = exports.utcSunday = void 0;

    var t = r(require("./interval")),
        e = require("./duration");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function a(r) {
      return (0, t.default)(function (t) {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - r) % 7), t.setUTCHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setUTCDate(t.getUTCDate() + 7 * e);
      }, function (t, r) {
        return (r - t) / e.durationWeek;
      });
    }

    var s = a(0);
    exports.utcSunday = s;
    var u = a(1);
    exports.utcMonday = u;
    var o = a(2);
    exports.utcTuesday = o;
    var d = a(3);
    exports.utcWednesday = d;
    var n = a(4);
    exports.utcThursday = n;
    var c = a(5);
    exports.utcFriday = c;
    var p = a(6);
    exports.utcSaturday = p;
    var y = s.range;
    exports.utcSundays = y;
    var x = u.range;
    exports.utcMondays = x;
    var v = o.range;
    exports.utcTuesdays = v;
    var i = d.range;
    exports.utcWednesdays = i;
    var T = n.range;
    exports.utcThursdays = T;
    var g = c.range;
    exports.utcFridays = g;
    var f = p.range;
    exports.utcSaturdays = f;
  }, {
    "./interval": "gsab",
    "./duration": "EMi+"
  }],
  "KWFc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcMonths = exports.default = void 0;
    var t = e(require("./interval"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = (0, t.default)(function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setUTCMonth(t.getUTCMonth() + e);
    }, function (t, e) {
      return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
    }, function (t) {
      return t.getUTCMonth();
    }),
        n = r;
    exports.default = n;
    var o = r.range;
    exports.utcMonths = o;
  }, {
    "./interval": "gsab"
  }],
  "LM11": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcYears = exports.default = void 0;
    var e = t(require("./interval"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setUTCFullYear(e.getUTCFullYear() + t);
    }, function (e, t) {
      return t.getUTCFullYear() - e.getUTCFullYear();
    }, function (e) {
      return e.getUTCFullYear();
    });

    r.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function (e) {
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setUTCFullYear(e.getUTCFullYear() + r * t);
      }) : null;
    };

    var u = r;
    exports.default = u;
    var l = r.range;
    exports.utcYears = l;
  }, {
    "./interval": "gsab"
  }],
  "F00f": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "timeInterval", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "timeMillisecond", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "timeMilliseconds", {
      enumerable: !0,
      get: function get() {
        return t.milliseconds;
      }
    }), Object.defineProperty(exports, "utcMillisecond", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "utcMilliseconds", {
      enumerable: !0,
      get: function get() {
        return t.milliseconds;
      }
    }), Object.defineProperty(exports, "timeSecond", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "timeSeconds", {
      enumerable: !0,
      get: function get() {
        return r.seconds;
      }
    }), Object.defineProperty(exports, "utcSecond", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "utcSeconds", {
      enumerable: !0,
      get: function get() {
        return r.seconds;
      }
    }), Object.defineProperty(exports, "timeMinute", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "timeMinutes", {
      enumerable: !0,
      get: function get() {
        return n.minutes;
      }
    }), Object.defineProperty(exports, "timeHour", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "timeHours", {
      enumerable: !0,
      get: function get() {
        return u.hours;
      }
    }), Object.defineProperty(exports, "timeDay", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "timeDays", {
      enumerable: !0,
      get: function get() {
        return o.days;
      }
    }), Object.defineProperty(exports, "timeWeek", {
      enumerable: !0,
      get: function get() {
        return i.sunday;
      }
    }), Object.defineProperty(exports, "timeWeeks", {
      enumerable: !0,
      get: function get() {
        return i.sundays;
      }
    }), Object.defineProperty(exports, "timeSunday", {
      enumerable: !0,
      get: function get() {
        return i.sunday;
      }
    }), Object.defineProperty(exports, "timeSundays", {
      enumerable: !0,
      get: function get() {
        return i.sundays;
      }
    }), Object.defineProperty(exports, "timeMonday", {
      enumerable: !0,
      get: function get() {
        return i.monday;
      }
    }), Object.defineProperty(exports, "timeMondays", {
      enumerable: !0,
      get: function get() {
        return i.mondays;
      }
    }), Object.defineProperty(exports, "timeTuesday", {
      enumerable: !0,
      get: function get() {
        return i.tuesday;
      }
    }), Object.defineProperty(exports, "timeTuesdays", {
      enumerable: !0,
      get: function get() {
        return i.tuesdays;
      }
    }), Object.defineProperty(exports, "timeWednesday", {
      enumerable: !0,
      get: function get() {
        return i.wednesday;
      }
    }), Object.defineProperty(exports, "timeWednesdays", {
      enumerable: !0,
      get: function get() {
        return i.wednesdays;
      }
    }), Object.defineProperty(exports, "timeThursday", {
      enumerable: !0,
      get: function get() {
        return i.thursday;
      }
    }), Object.defineProperty(exports, "timeThursdays", {
      enumerable: !0,
      get: function get() {
        return i.thursdays;
      }
    }), Object.defineProperty(exports, "timeFriday", {
      enumerable: !0,
      get: function get() {
        return i.friday;
      }
    }), Object.defineProperty(exports, "timeFridays", {
      enumerable: !0,
      get: function get() {
        return i.fridays;
      }
    }), Object.defineProperty(exports, "timeSaturday", {
      enumerable: !0,
      get: function get() {
        return i.saturday;
      }
    }), Object.defineProperty(exports, "timeSaturdays", {
      enumerable: !0,
      get: function get() {
        return i.saturdays;
      }
    }), Object.defineProperty(exports, "timeMonth", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "timeMonths", {
      enumerable: !0,
      get: function get() {
        return c.months;
      }
    }), Object.defineProperty(exports, "timeYear", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "timeYears", {
      enumerable: !0,
      get: function get() {
        return a.years;
      }
    }), Object.defineProperty(exports, "utcMinute", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "utcMinutes", {
      enumerable: !0,
      get: function get() {
        return s.utcMinutes;
      }
    }), Object.defineProperty(exports, "utcHour", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "utcHours", {
      enumerable: !0,
      get: function get() {
        return d.utcHours;
      }
    }), Object.defineProperty(exports, "utcDay", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "utcDays", {
      enumerable: !0,
      get: function get() {
        return f.utcDays;
      }
    }), Object.defineProperty(exports, "utcWeek", {
      enumerable: !0,
      get: function get() {
        return y.utcSunday;
      }
    }), Object.defineProperty(exports, "utcWeeks", {
      enumerable: !0,
      get: function get() {
        return y.utcSundays;
      }
    }), Object.defineProperty(exports, "utcSunday", {
      enumerable: !0,
      get: function get() {
        return y.utcSunday;
      }
    }), Object.defineProperty(exports, "utcSundays", {
      enumerable: !0,
      get: function get() {
        return y.utcSundays;
      }
    }), Object.defineProperty(exports, "utcMonday", {
      enumerable: !0,
      get: function get() {
        return y.utcMonday;
      }
    }), Object.defineProperty(exports, "utcMondays", {
      enumerable: !0,
      get: function get() {
        return y.utcMondays;
      }
    }), Object.defineProperty(exports, "utcTuesday", {
      enumerable: !0,
      get: function get() {
        return y.utcTuesday;
      }
    }), Object.defineProperty(exports, "utcTuesdays", {
      enumerable: !0,
      get: function get() {
        return y.utcTuesdays;
      }
    }), Object.defineProperty(exports, "utcWednesday", {
      enumerable: !0,
      get: function get() {
        return y.utcWednesday;
      }
    }), Object.defineProperty(exports, "utcWednesdays", {
      enumerable: !0,
      get: function get() {
        return y.utcWednesdays;
      }
    }), Object.defineProperty(exports, "utcThursday", {
      enumerable: !0,
      get: function get() {
        return y.utcThursday;
      }
    }), Object.defineProperty(exports, "utcThursdays", {
      enumerable: !0,
      get: function get() {
        return y.utcThursdays;
      }
    }), Object.defineProperty(exports, "utcFriday", {
      enumerable: !0,
      get: function get() {
        return y.utcFriday;
      }
    }), Object.defineProperty(exports, "utcFridays", {
      enumerable: !0,
      get: function get() {
        return y.utcFridays;
      }
    }), Object.defineProperty(exports, "utcSaturday", {
      enumerable: !0,
      get: function get() {
        return y.utcSaturday;
      }
    }), Object.defineProperty(exports, "utcSaturdays", {
      enumerable: !0,
      get: function get() {
        return y.utcSaturdays;
      }
    }), Object.defineProperty(exports, "utcMonth", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "utcMonths", {
      enumerable: !0,
      get: function get() {
        return p.utcMonths;
      }
    }), Object.defineProperty(exports, "utcYear", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "utcYears", {
      enumerable: !0,
      get: function get() {
        return b.utcYears;
      }
    });

    var e = m(require("./interval")),
        t = l(require("./millisecond")),
        r = l(require("./second")),
        n = l(require("./minute")),
        u = l(require("./hour")),
        o = l(require("./day")),
        i = require("./week"),
        c = l(require("./month")),
        a = l(require("./year")),
        s = l(require("./utcMinute")),
        d = l(require("./utcHour")),
        f = l(require("./utcDay")),
        y = require("./utcWeek"),
        p = l(require("./utcMonth")),
        b = l(require("./utcYear"));

    function l(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    function m(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./interval": "gsab",
    "./millisecond": "r4Yr",
    "./second": "K4G6",
    "./minute": "sObl",
    "./hour": "wPv4",
    "./day": "bZ++",
    "./week": "6SUb",
    "./month": "XpbA",
    "./year": "djmh",
    "./utcMinute": "c3Ah",
    "./utcHour": "sGav",
    "./utcDay": "ns65",
    "./utcWeek": "/HsO",
    "./utcMonth": "KWFc",
    "./utcYear": "LM11"
  }],
  "rf9h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var n = require("d3-time");

    function t(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
        return t.setFullYear(n.y), t;
      }

      return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
    }

    function e(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
        return t.setUTCFullYear(n.y), t;
      }

      return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
    }

    function r(n) {
      return {
        y: n,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      };
    }

    function u(u) {
      var i = u.dateTime,
          o = u.date,
          a = u.time,
          f = u.periods,
          l = u.days,
          vn = u.shortDays,
          mn = u.months,
          Cn = u.shortMonths,
          Dn = g(f),
          Tn = s(f),
          xn = g(l),
          Mn = s(l),
          Un = g(vn),
          wn = s(vn),
          Yn = g(mn),
          Hn = s(mn),
          pn = g(Cn),
          Sn = s(Cn),
          Ln = {
        a: function a(n) {
          return vn[n.getDay()];
        },
        A: function A(n) {
          return l[n.getDay()];
        },
        b: function b(n) {
          return Cn[n.getMonth()];
        },
        B: function B(n) {
          return mn[n.getMonth()];
        },
        c: null,
        d: F,
        e: F,
        f: X,
        H: V,
        I: W,
        j: j,
        L: Q,
        m: b,
        M: B,
        p: function p(n) {
          return f[+(n.getHours() >= 12)];
        },
        Q: yn,
        s: dn,
        S: I,
        u: _,
        U: O,
        V: P,
        w: $,
        W: q,
        x: null,
        X: null,
        y: z,
        Y: E,
        Z: R,
        "%": hn
      },
          An = {
        a: function a(n) {
          return vn[n.getUTCDay()];
        },
        A: function A(n) {
          return l[n.getUTCDay()];
        },
        b: function b(n) {
          return Cn[n.getUTCMonth()];
        },
        B: function B(n) {
          return mn[n.getUTCMonth()];
        },
        c: null,
        d: k,
        e: k,
        f: nn,
        H: G,
        I: J,
        j: K,
        L: N,
        m: tn,
        M: en,
        p: function p(n) {
          return f[+(n.getUTCHours() >= 12)];
        },
        Q: yn,
        s: dn,
        S: rn,
        u: un,
        U: cn,
        V: on,
        w: an,
        W: fn,
        x: null,
        X: null,
        y: ln,
        Y: gn,
        Z: sn,
        "%": hn
      },
          Zn = {
        a: function a(n, t, e) {
          var r = Un.exec(t.slice(e));
          return r ? (n.w = wn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        A: function A(n, t, e) {
          var r = xn.exec(t.slice(e));
          return r ? (n.w = Mn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        b: function b(n, t, e) {
          var r = pn.exec(t.slice(e));
          return r ? (n.m = Sn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        B: function B(n, t, e) {
          var r = Yn.exec(t.slice(e));
          return r ? (n.m = Hn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        c: function c(n, t, e) {
          return Wn(n, i, t, e);
        },
        d: M,
        e: M,
        f: S,
        H: w,
        I: w,
        j: U,
        L: p,
        m: x,
        M: Y,
        p: function p(n, t, e) {
          var r = Dn.exec(t.slice(e));
          return r ? (n.p = Tn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        Q: A,
        s: Z,
        S: H,
        u: y,
        U: d,
        V: v,
        w: h,
        W: m,
        x: function x(n, t, e) {
          return Wn(n, o, t, e);
        },
        X: function X(n, t, e) {
          return Wn(n, a, t, e);
        },
        y: D,
        Y: C,
        Z: T,
        "%": L
      };

      function Fn(n, t) {
        return function (e) {
          var r,
              u,
              i,
              o = [],
              a = -1,
              f = 0,
              l = n.length;

          for (e instanceof Date || (e = new Date(+e)); ++a < l;) {
            37 === n.charCodeAt(a) && (o.push(n.slice(f, a)), null != (u = c[r = n.charAt(++a)]) ? r = n.charAt(++a) : u = "e" === r ? " " : "0", (i = t[r]) && (r = i(e, u)), o.push(r), f = a + 1);
          }

          return o.push(n.slice(f, a)), o.join("");
        };
      }

      function Vn(t, u) {
        return function (c) {
          var i,
              o,
              a = r(1900);
          if (Wn(a, t, c += "", 0) != c.length) return null;
          if ("Q" in a) return new Date(a.Q);

          if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
            if (a.V < 1 || a.V > 53) return null;
            "w" in a || (a.w = 1), "Z" in a ? (o = (i = e(r(a.y))).getUTCDay(), i = o > 4 || 0 === o ? n.utcMonday.ceil(i) : (0, n.utcMonday)(i), i = n.utcDay.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (o = (i = u(r(a.y))).getDay(), i = o > 4 || 0 === o ? n.timeMonday.ceil(i) : (0, n.timeMonday)(i), i = n.timeDay.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7);
          } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), o = "Z" in a ? e(r(a.y)).getUTCDay() : u(r(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (o + 5) % 7 : a.w + 7 * a.U - (o + 6) % 7);

          return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, e(a)) : u(a);
        };
      }

      function Wn(n, t, e, r) {
        for (var u, i, o = 0, a = t.length, f = e.length; o < a;) {
          if (r >= f) return -1;

          if (37 === (u = t.charCodeAt(o++))) {
            if (u = t.charAt(o++), !(i = Zn[u in c ? t.charAt(o++) : u]) || (r = i(n, e, r)) < 0) return -1;
          } else if (u != e.charCodeAt(r++)) return -1;
        }

        return r;
      }

      return Ln.x = Fn(o, Ln), Ln.X = Fn(a, Ln), Ln.c = Fn(i, Ln), An.x = Fn(o, An), An.X = Fn(a, An), An.c = Fn(i, An), {
        format: function format(n) {
          var t = Fn(n += "", Ln);
          return t.toString = function () {
            return n;
          }, t;
        },
        parse: function parse(n) {
          var e = Vn(n += "", t);
          return e.toString = function () {
            return n;
          }, e;
        },
        utcFormat: function utcFormat(n) {
          var t = Fn(n += "", An);
          return t.toString = function () {
            return n;
          }, t;
        },
        utcParse: function utcParse(n) {
          var t = Vn(n, e);
          return t.toString = function () {
            return n;
          }, t;
        }
      };
    }

    var c = {
      "-": "",
      _: " ",
      0: "0"
    },
        i = /^\s*\d+/,
        o = /^%/,
        a = /[\\^$*+?|[\]().{}]/g;

    function f(n, t, e) {
      var r = n < 0 ? "-" : "",
          u = (r ? -n : n) + "",
          c = u.length;
      return r + (c < e ? new Array(e - c + 1).join(t) + u : u);
    }

    function l(n) {
      return n.replace(a, "\\$&");
    }

    function g(n) {
      return new RegExp("^(?:" + n.map(l).join("|") + ")", "i");
    }

    function s(n) {
      for (var t = {}, e = -1, r = n.length; ++e < r;) {
        t[n[e].toLowerCase()] = e;
      }

      return t;
    }

    function h(n, t, e) {
      var r = i.exec(t.slice(e, e + 1));
      return r ? (n.w = +r[0], e + r[0].length) : -1;
    }

    function y(n, t, e) {
      var r = i.exec(t.slice(e, e + 1));
      return r ? (n.u = +r[0], e + r[0].length) : -1;
    }

    function d(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.U = +r[0], e + r[0].length) : -1;
    }

    function v(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.V = +r[0], e + r[0].length) : -1;
    }

    function m(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.W = +r[0], e + r[0].length) : -1;
    }

    function C(n, t, e) {
      var r = i.exec(t.slice(e, e + 4));
      return r ? (n.y = +r[0], e + r[0].length) : -1;
    }

    function D(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
    }

    function T(n, t, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
      return r ? (n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
    }

    function x(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
    }

    function M(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.d = +r[0], e + r[0].length) : -1;
    }

    function U(n, t, e) {
      var r = i.exec(t.slice(e, e + 3));
      return r ? (n.m = 0, n.d = +r[0], e + r[0].length) : -1;
    }

    function w(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.H = +r[0], e + r[0].length) : -1;
    }

    function Y(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.M = +r[0], e + r[0].length) : -1;
    }

    function H(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.S = +r[0], e + r[0].length) : -1;
    }

    function p(n, t, e) {
      var r = i.exec(t.slice(e, e + 3));
      return r ? (n.L = +r[0], e + r[0].length) : -1;
    }

    function S(n, t, e) {
      var r = i.exec(t.slice(e, e + 6));
      return r ? (n.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
    }

    function L(n, t, e) {
      var r = o.exec(t.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }

    function A(n, t, e) {
      var r = i.exec(t.slice(e));
      return r ? (n.Q = +r[0], e + r[0].length) : -1;
    }

    function Z(n, t, e) {
      var r = i.exec(t.slice(e));
      return r ? (n.Q = 1e3 * +r[0], e + r[0].length) : -1;
    }

    function F(n, t) {
      return f(n.getDate(), t, 2);
    }

    function V(n, t) {
      return f(n.getHours(), t, 2);
    }

    function W(n, t) {
      return f(n.getHours() % 12 || 12, t, 2);
    }

    function j(t, e) {
      return f(1 + n.timeDay.count((0, n.timeYear)(t), t), e, 3);
    }

    function Q(n, t) {
      return f(n.getMilliseconds(), t, 3);
    }

    function X(n, t) {
      return Q(n, t) + "000";
    }

    function b(n, t) {
      return f(n.getMonth() + 1, t, 2);
    }

    function B(n, t) {
      return f(n.getMinutes(), t, 2);
    }

    function I(n, t) {
      return f(n.getSeconds(), t, 2);
    }

    function _(n) {
      var t = n.getDay();
      return 0 === t ? 7 : t;
    }

    function O(t, e) {
      return f(n.timeSunday.count((0, n.timeYear)(t), t), e, 2);
    }

    function P(t, e) {
      var r = t.getDay();
      return t = r >= 4 || 0 === r ? (0, n.timeThursday)(t) : n.timeThursday.ceil(t), f(n.timeThursday.count((0, n.timeYear)(t), t) + (4 === (0, n.timeYear)(t).getDay()), e, 2);
    }

    function $(n) {
      return n.getDay();
    }

    function q(t, e) {
      return f(n.timeMonday.count((0, n.timeYear)(t), t), e, 2);
    }

    function z(n, t) {
      return f(n.getFullYear() % 100, t, 2);
    }

    function E(n, t) {
      return f(n.getFullYear() % 1e4, t, 4);
    }

    function R(n) {
      var t = n.getTimezoneOffset();
      return (t > 0 ? "-" : (t *= -1, "+")) + f(t / 60 | 0, "0", 2) + f(t % 60, "0", 2);
    }

    function k(n, t) {
      return f(n.getUTCDate(), t, 2);
    }

    function G(n, t) {
      return f(n.getUTCHours(), t, 2);
    }

    function J(n, t) {
      return f(n.getUTCHours() % 12 || 12, t, 2);
    }

    function K(t, e) {
      return f(1 + n.utcDay.count((0, n.utcYear)(t), t), e, 3);
    }

    function N(n, t) {
      return f(n.getUTCMilliseconds(), t, 3);
    }

    function nn(n, t) {
      return N(n, t) + "000";
    }

    function tn(n, t) {
      return f(n.getUTCMonth() + 1, t, 2);
    }

    function en(n, t) {
      return f(n.getUTCMinutes(), t, 2);
    }

    function rn(n, t) {
      return f(n.getUTCSeconds(), t, 2);
    }

    function un(n) {
      var t = n.getUTCDay();
      return 0 === t ? 7 : t;
    }

    function cn(t, e) {
      return f(n.utcSunday.count((0, n.utcYear)(t), t), e, 2);
    }

    function on(t, e) {
      var r = t.getUTCDay();
      return t = r >= 4 || 0 === r ? (0, n.utcThursday)(t) : n.utcThursday.ceil(t), f(n.utcThursday.count((0, n.utcYear)(t), t) + (4 === (0, n.utcYear)(t).getUTCDay()), e, 2);
    }

    function an(n) {
      return n.getUTCDay();
    }

    function fn(t, e) {
      return f(n.utcMonday.count((0, n.utcYear)(t), t), e, 2);
    }

    function ln(n, t) {
      return f(n.getUTCFullYear() % 100, t, 2);
    }

    function gn(n, t) {
      return f(n.getUTCFullYear() % 1e4, t, 4);
    }

    function sn() {
      return "+0000";
    }

    function hn() {
      return "%";
    }

    function yn(n) {
      return +n;
    }

    function dn(n) {
      return Math.floor(+n / 1e3);
    }
  }, {
    "d3-time": "F00f"
  }],
  "LmVV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p, exports.utcParse = exports.utcFormat = exports.timeParse = exports.timeFormat = void 0;
    var e,
        t,
        r,
        a,
        o,
        s = u(require("./locale"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function p(u) {
      return e = (0, s.default)(u), exports.timeFormat = t = e.format, exports.timeParse = r = e.parse, exports.utcFormat = a = e.utcFormat, exports.utcParse = o = e.utcParse, e;
    }

    exports.timeFormat = t, exports.timeParse = r, exports.utcFormat = a, exports.utcParse = o, p({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
  }, {
    "./locale": "rf9h"
  }],
  "UFnF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.isoSpecifier = void 0;

    var e = require("./defaultLocale"),
        t = "%Y-%m-%dT%H:%M:%S.%LZ";

    function r(e) {
      return e.toISOString();
    }

    exports.isoSpecifier = t;
    var o = Date.prototype.toISOString ? r : (0, e.utcFormat)(t),
        i = o;
    exports.default = i;
  }, {
    "./defaultLocale": "LmVV"
  }],
  "hAdq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("./isoFormat"),
        r = require("./defaultLocale");

    function t(e) {
      var r = new Date(e);
      return isNaN(r) ? null : r;
    }

    var a = +new Date("2000-01-01T00:00:00.000Z") ? t : (0, r.utcParse)(e.isoSpecifier),
        u = a;
    exports.default = u;
  }, {
    "./isoFormat": "UFnF",
    "./defaultLocale": "LmVV"
  }],
  "+7zs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "timeFormatDefaultLocale", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "timeFormat", {
      enumerable: !0,
      get: function get() {
        return e.timeFormat;
      }
    }), Object.defineProperty(exports, "timeParse", {
      enumerable: !0,
      get: function get() {
        return e.timeParse;
      }
    }), Object.defineProperty(exports, "utcFormat", {
      enumerable: !0,
      get: function get() {
        return e.utcFormat;
      }
    }), Object.defineProperty(exports, "utcParse", {
      enumerable: !0,
      get: function get() {
        return e.utcParse;
      }
    }), Object.defineProperty(exports, "timeFormatLocale", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "isoFormat", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "isoParse", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    });
    var e = u(require("./defaultLocale")),
        t = n(require("./locale")),
        r = n(require("./isoFormat")),
        o = n(require("./isoParse"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          o.get || o.set ? Object.defineProperty(t, r, o) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }
  }, {
    "./defaultLocale": "LmVV",
    "./locale": "rf9h",
    "./isoFormat": "UFnF",
    "./isoParse": "hAdq"
  }],
  "QHrh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.calendar = g, exports.default = h;

    var e = require("d3-array"),
        t = require("d3-time"),
        r = require("d3-time-format"),
        n = require("./array"),
        i = c(require("./continuous")),
        u = require("./init"),
        a = o(require("./nice"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    var f = 1e3,
        l = 60 * f,
        d = 60 * l,
        p = 24 * d,
        m = 7 * p,
        s = 30 * p,
        y = 365 * p;

    function v(e) {
      return new Date(e);
    }

    function b(e) {
      return e instanceof Date ? +e : +new Date(+e);
    }

    function g(t, r, u, o, c, h, D, M, O) {
      var w = (0, i.default)(i.identity, i.identity),
          q = w.invert,
          j = w.domain,
          P = O(".%L"),
          _ = O(":%S"),
          k = O("%I:%M"),
          x = O("%I %p"),
          S = O("%a %d"),
          F = O("%b %d"),
          I = O("%B"),
          Y = O("%Y"),
          B = [[D, 1, f], [D, 5, 5 * f], [D, 15, 15 * f], [D, 30, 30 * f], [h, 1, l], [h, 5, 5 * l], [h, 15, 15 * l], [h, 30, 30 * l], [c, 1, d], [c, 3, 3 * d], [c, 6, 6 * d], [c, 12, 12 * d], [o, 1, p], [o, 2, 2 * p], [u, 1, m], [r, 1, s], [r, 3, 3 * s], [t, 1, y]];

      function H(e) {
        return (D(e) < e ? P : h(e) < e ? _ : c(e) < e ? k : o(e) < e ? x : r(e) < e ? u(e) < e ? S : F : t(e) < e ? I : Y)(e);
      }

      function L(r, n, i, u) {
        if (null == r && (r = 10), "number" == typeof r) {
          var a = Math.abs(i - n) / r,
              o = (0, e.bisector)(function (e) {
            return e[2];
          }).right(B, a);
          o === B.length ? (u = (0, e.tickStep)(n / y, i / y, r), r = t) : o ? (u = (o = B[a / B[o - 1][2] < B[o][2] / a ? o - 1 : o])[1], r = o[0]) : (u = Math.max((0, e.tickStep)(n, i, r), 1), r = M);
        }

        return null == u ? r : r.every(u);
      }

      return w.invert = function (e) {
        return new Date(q(e));
      }, w.domain = function (e) {
        return arguments.length ? j(n.map.call(e, b)) : j().map(v);
      }, w.ticks = function (e, t) {
        var r,
            n = j(),
            i = n[0],
            u = n[n.length - 1],
            a = u < i;
        return a && (r = i, i = u, u = r), r = (r = L(e, i, u, t)) ? r.range(i, u + 1) : [], a ? r.reverse() : r;
      }, w.tickFormat = function (e, t) {
        return null == t ? H : O(t);
      }, w.nice = function (e, t) {
        var r = j();
        return (e = L(e, r[0], r[r.length - 1], t)) ? j((0, a.default)(r, e)) : w;
      }, w.copy = function () {
        return (0, i.copy)(w, g(t, r, u, o, c, h, D, M, O));
      }, w;
    }

    function h() {
      return u.initRange.apply(g(t.timeYear, t.timeMonth, t.timeWeek, t.timeDay, t.timeHour, t.timeMinute, t.timeSecond, t.timeMillisecond, r.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-time": "F00f",
    "d3-time-format": "+7zs",
    "./array": "lLkj",
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./nice": "gRJQ"
  }],
  "D6Mr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("./time"),
        t = require("d3-time-format"),
        r = require("d3-time"),
        u = require("./init");

    function i() {
      return u.initRange.apply((0, e.calendar)(r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
    }
  }, {
    "./time": "QHrh",
    "d3-time-format": "+7zs",
    "d3-time": "F00f",
    "./init": "aZlr"
  }],
  "O1DZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.copy = a, exports.default = p, exports.sequentialLog = l, exports.sequentialSymlog = c, exports.sequentialPow = s, exports.sequentialSqrt = f;

    var n = require("./continuous"),
        t = require("./init"),
        r = require("./linear"),
        e = require("./log"),
        o = require("./symlog"),
        i = require("./pow");

    function u() {
      var t,
          r,
          e,
          o,
          i,
          u = 0,
          a = 1,
          p = n.identity,
          l = !1;

      function c(n) {
        return isNaN(n = +n) ? i : p(0 === e ? .5 : (n = (o(n) - t) * e, l ? Math.max(0, Math.min(1, n)) : n));
      }

      return c.domain = function (n) {
        return arguments.length ? (t = o(u = +n[0]), r = o(a = +n[1]), e = t === r ? 0 : 1 / (r - t), c) : [u, a];
      }, c.clamp = function (n) {
        return arguments.length ? (l = !!n, c) : l;
      }, c.interpolator = function (n) {
        return arguments.length ? (p = n, c) : p;
      }, c.unknown = function (n) {
        return arguments.length ? (i = n, c) : i;
      }, function (n) {
        return o = n, t = n(u), r = n(a), e = t === r ? 0 : 1 / (r - t), c;
      };
    }

    function a(n, t) {
      return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown());
    }

    function p() {
      var e = (0, r.linearish)(u()(n.identity));
      return e.copy = function () {
        return a(e, p());
      }, t.initInterpolator.apply(e, arguments);
    }

    function l() {
      var n = (0, e.loggish)(u()).domain([1, 10]);
      return n.copy = function () {
        return a(n, l()).base(n.base());
      }, t.initInterpolator.apply(n, arguments);
    }

    function c() {
      var n = (0, o.symlogish)(u());
      return n.copy = function () {
        return a(n, c()).constant(n.constant());
      }, t.initInterpolator.apply(n, arguments);
    }

    function s() {
      var n = (0, i.powish)(u());
      return n.copy = function () {
        return a(n, s()).exponent(n.exponent());
      }, t.initInterpolator.apply(n, arguments);
    }

    function f() {
      return s.apply(null, arguments).exponent(.5);
    }
  }, {
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./linear": "VMtl",
    "./log": "X3YW",
    "./symlog": "Prec",
    "./pow": "/yse"
  }],
  "Y40z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var r = require("d3-array"),
        e = require("./continuous"),
        n = require("./init");

    function t() {
      var i = [],
          u = e.identity;

      function o(e) {
        if (!isNaN(e = +e)) return u(((0, r.bisect)(i, e) - 1) / (i.length - 1));
      }

      return o.domain = function (e) {
        if (!arguments.length) return i.slice();
        i = [];

        for (var n, t = 0, u = e.length; t < u; ++t) {
          null == (n = e[t]) || isNaN(n = +n) || i.push(n);
        }

        return i.sort(r.ascending), o;
      }, o.interpolator = function (r) {
        return arguments.length ? (u = r, o) : u;
      }, o.copy = function () {
        return t(u).domain(i);
      }, n.initInterpolator.apply(o, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./continuous": "ZpMB",
    "./init": "aZlr"
  }],
  "shE4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.divergingLog = c, exports.divergingSymlog = l, exports.divergingPow = s, exports.divergingSqrt = g;

    var n = require("./continuous"),
        r = require("./init"),
        t = require("./linear"),
        e = require("./log"),
        o = require("./sequential"),
        i = require("./symlog"),
        u = require("./pow");

    function p() {
      var r,
          t,
          e,
          o,
          i,
          u,
          p,
          a = 0,
          c = .5,
          l = 1,
          s = n.identity,
          g = !1;

      function y(n) {
        return isNaN(n = +n) ? p : (n = .5 + ((n = +u(n)) - t) * (n < t ? o : i), s(g ? Math.max(0, Math.min(1, n)) : n));
      }

      return y.domain = function (n) {
        return arguments.length ? (r = u(a = +n[0]), t = u(c = +n[1]), e = u(l = +n[2]), o = r === t ? 0 : .5 / (t - r), i = t === e ? 0 : .5 / (e - t), y) : [a, c, l];
      }, y.clamp = function (n) {
        return arguments.length ? (g = !!n, y) : g;
      }, y.interpolator = function (n) {
        return arguments.length ? (s = n, y) : s;
      }, y.unknown = function (n) {
        return arguments.length ? (p = n, y) : p;
      }, function (n) {
        return u = n, r = n(a), t = n(c), e = n(l), o = r === t ? 0 : .5 / (t - r), i = t === e ? 0 : .5 / (e - t), y;
      };
    }

    function a() {
      var e = (0, t.linearish)(p()(n.identity));
      return e.copy = function () {
        return (0, o.copy)(e, a());
      }, r.initInterpolator.apply(e, arguments);
    }

    function c() {
      var n = (0, e.loggish)(p()).domain([.1, 1, 10]);
      return n.copy = function () {
        return (0, o.copy)(n, c()).base(n.base());
      }, r.initInterpolator.apply(n, arguments);
    }

    function l() {
      var n = (0, i.symlogish)(p());
      return n.copy = function () {
        return (0, o.copy)(n, l()).constant(n.constant());
      }, r.initInterpolator.apply(n, arguments);
    }

    function s() {
      var n = (0, u.powish)(p());
      return n.copy = function () {
        return (0, o.copy)(n, s()).exponent(n.exponent());
      }, r.initInterpolator.apply(n, arguments);
    }

    function g() {
      return s.apply(null, arguments).exponent(.5);
    }
  }, {
    "./continuous": "ZpMB",
    "./init": "aZlr",
    "./linear": "VMtl",
    "./log": "X3YW",
    "./sequential": "O1DZ",
    "./symlog": "Prec",
    "./pow": "/yse"
  }],
  "zt+a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "scaleBand", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "scalePoint", {
      enumerable: !0,
      get: function get() {
        return e.point;
      }
    }), Object.defineProperty(exports, "scaleIdentity", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "scaleLinear", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "scaleLog", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "scaleSymlog", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "scaleOrdinal", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "scaleImplicit", {
      enumerable: !0,
      get: function get() {
        return i.implicit;
      }
    }), Object.defineProperty(exports, "scalePow", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "scaleSqrt", {
      enumerable: !0,
      get: function get() {
        return o.sqrt;
      }
    }), Object.defineProperty(exports, "scaleQuantile", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "scaleQuantize", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "scaleThreshold", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "scaleTime", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "scaleUtc", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "scaleSequential", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "scaleSequentialLog", {
      enumerable: !0,
      get: function get() {
        return p.sequentialLog;
      }
    }), Object.defineProperty(exports, "scaleSequentialPow", {
      enumerable: !0,
      get: function get() {
        return p.sequentialPow;
      }
    }), Object.defineProperty(exports, "scaleSequentialSqrt", {
      enumerable: !0,
      get: function get() {
        return p.sequentialSqrt;
      }
    }), Object.defineProperty(exports, "scaleSequentialSymlog", {
      enumerable: !0,
      get: function get() {
        return p.sequentialSymlog;
      }
    }), Object.defineProperty(exports, "scaleSequentialQuantile", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "scaleDiverging", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "scaleDivergingLog", {
      enumerable: !0,
      get: function get() {
        return g.divergingLog;
      }
    }), Object.defineProperty(exports, "scaleDivergingPow", {
      enumerable: !0,
      get: function get() {
        return g.divergingPow;
      }
    }), Object.defineProperty(exports, "scaleDivergingSqrt", {
      enumerable: !0,
      get: function get() {
        return g.divergingSqrt;
      }
    }), Object.defineProperty(exports, "scaleDivergingSymlog", {
      enumerable: !0,
      get: function get() {
        return g.divergingSymlog;
      }
    }), Object.defineProperty(exports, "tickFormat", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    });
    var e = m(require("./band")),
        r = y(require("./identity")),
        t = y(require("./linear")),
        n = y(require("./log")),
        u = y(require("./symlog")),
        i = m(require("./ordinal")),
        o = m(require("./pow")),
        l = y(require("./quantile")),
        a = y(require("./quantize")),
        c = y(require("./threshold")),
        f = y(require("./time")),
        s = y(require("./utcTime")),
        p = m(require("./sequential")),
        d = y(require("./sequentialQuantile")),
        g = m(require("./diverging")),
        b = y(require("./tickFormat"));

    function y(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function m(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./band": "rJZF",
    "./identity": "eP89",
    "./linear": "VMtl",
    "./log": "X3YW",
    "./symlog": "Prec",
    "./ordinal": "ELIM",
    "./pow": "/yse",
    "./quantile": "fsZk",
    "./quantize": "8Z2c",
    "./threshold": "odYE",
    "./time": "QHrh",
    "./utcTime": "D6Mr",
    "./sequential": "O1DZ",
    "./sequentialQuantile": "Y40z",
    "./diverging": "shE4",
    "./tickFormat": "m0SA"
  }],
  "e9Ar": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r = e.length / 6 | 0, t = new Array(r), n = 0; n < r;) {
        t[n] = "#" + e.slice(6 * n, 6 * ++n);
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "PcKk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    exports.default = r;
  }, {
    "../colors": "e9Ar"
  }],
  "2TXT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");
    exports.default = r;
  }, {
    "../colors": "e9Ar"
  }],
  "MCH8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("../colors"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = (0, e.default)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");
    exports.default = t;
  }, {
    "../colors": "e9Ar"
  }],
  "bH6q": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = (0, e.default)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");
    exports.default = a;
  }, {
    "../colors": "e9Ar"
  }],
  "2GbC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = (0, e.default)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");
    exports.default = d;
  }, {
    "../colors": "e9Ar"
  }],
  "SQbk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = c(require("../colors"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = (0, e.default)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");
    exports.default = f;
  }, {
    "../colors": "e9Ar"
  }],
  "/J0n": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("../colors"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");
    exports.default = r;
  }, {
    "../colors": "e9Ar"
  }],
  "rdh9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("../colors"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = (0, e.default)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");
    exports.default = t;
  }, {
    "../colors": "e9Ar"
  }],
  "7/o5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = d(require("../colors"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = (0, e.default)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");
    exports.default = f;
  }, {
    "../colors": "e9Ar"
  }],
  "tFWC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-interpolate");

    function t(t) {
      return (0, e.interpolateRgbBasis)(t[t.length - 1]);
    }
  }, {
    "d3-interpolate": "mkGF"
  }],
  "kmpN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors")),
        c = f(require("../ramp"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(e.default);
    exports.scheme = a;
    var d = (0, c.default)(a);
    exports.default = d;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "Hn8a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var a = f(require("../colors")),
        e = f(require("../ramp"));

    function f(a) {
      return a && a.__esModule ? a : {
        default: a
      };
    }

    var d = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(a.default);
    exports.scheme = d;
    var b = (0, e.default)(d);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "cCiT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors")),
        d = f(require("../ramp"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(e.default);
    exports.scheme = a;
    var b = (0, d.default)(a);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "k6z3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors")),
        b = f(require("../ramp"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(e.default);
    exports.scheme = d;
    var a = (0, b.default)(d);
    exports.default = a;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "75sN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors")),
        e = d(require("../ramp"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var c = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(f.default);
    exports.scheme = c;
    var a = (0, e.default)(c);
    exports.default = a;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "mrMT": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = a(require("../colors")),
        e = a(require("../ramp"));

    function a(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var d = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(f.default);
    exports.scheme = d;
    var b = (0, e.default)(d);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "uyGf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors")),
        e = d(require("../ramp"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(f.default);
    exports.scheme = a;
    var b = (0, e.default)(a);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "Dt8k": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors")),
        e = d(require("../ramp"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(f.default);
    exports.scheme = a;
    var b = (0, e.default)(a);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "eSjI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors")),
        e = d(require("../ramp"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(f.default);
    exports.scheme = a;
    var b = (0, e.default)(a);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "L6xI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors")),
        c = f(require("../ramp"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(e.default);
    exports.scheme = a;
    var d = (0, c.default)(a);
    exports.default = d;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "JRrn": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors")),
        c = d(require("../ramp"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(e.default);
    exports.scheme = f;
    var b = (0, c.default)(f);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "j/1f": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var c = b(require("../colors")),
        e = b(require("../ramp"));

    function b(c) {
      return c && c.__esModule ? c : {
        default: c
      };
    }

    var a = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(c.default);
    exports.scheme = a;
    var d = (0, e.default)(a);
    exports.default = d;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "nT+z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors")),
        f = d(require("../ramp"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var c = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(e.default);
    exports.scheme = c;
    var r = (0, f.default)(c);
    exports.default = r;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "3B5M": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors")),
        f = d(require("../ramp"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(e.default);
    exports.scheme = a;
    var c = (0, f.default)(a);
    exports.default = c;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "NAcy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors")),
        d = f(require("../ramp"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(e.default);
    exports.scheme = a;
    var b = (0, d.default)(a);
    exports.default = b;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "DZXx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors")),
        d = f(require("../ramp"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var c = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(e.default);
    exports.scheme = c;
    var r = (0, d.default)(c);
    exports.default = r;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "aT++": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = a(require("../colors")),
        f = a(require("../ramp"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(e.default);
    exports.scheme = d;
    var c = (0, f.default)(d);
    exports.default = c;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "et2z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = e(require("../colors")),
        c = e(require("../ramp"));

    function e(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var b = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(f.default);
    exports.scheme = b;
    var d = (0, c.default)(b);
    exports.default = d;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "lF8J": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = d(require("../colors")),
        e = d(require("../ramp"));

    function d(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var a = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(f.default);
    exports.scheme = a;
    var c = (0, e.default)(a);
    exports.default = c;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "aI9y": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = c(require("../colors")),
        e = c(require("../ramp"));

    function c(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var r = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(f.default);
    exports.scheme = r;
    var d = (0, e.default)(r);
    exports.default = d;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "JWLI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = c(require("../colors")),
        e = c(require("../ramp"));

    function c(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var d = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(f.default);
    exports.scheme = d;
    var a = (0, e.default)(d);
    exports.default = a;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "b4OA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors")),
        f = d(require("../ramp"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var b = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(e.default);
    exports.scheme = b;
    var a = (0, f.default)(b);
    exports.default = a;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "NKRR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = c(require("../colors")),
        a = c(require("../ramp"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(e.default);
    exports.scheme = d;
    var r = (0, a.default)(d);
    exports.default = r;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "jAVD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var f = e(require("../colors")),
        d = e(require("../ramp"));

    function e(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    var r = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(f.default);
    exports.scheme = r;
    var c = (0, d.default)(r);
    exports.default = c;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "Emw5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = d(require("../colors")),
        a = d(require("../ramp"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(e.default);
    exports.scheme = f;
    var c = (0, a.default)(f);
    exports.default = c;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "wB2L": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = a(require("../colors")),
        f = a(require("../ramp"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(e.default);
    exports.scheme = d;
    var c = (0, f.default)(d);
    exports.default = c;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "wV9s": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.scheme = void 0;
    var e = f(require("../colors")),
        d = f(require("../ramp"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(e.default);
    exports.scheme = a;
    var r = (0, d.default)(a);
    exports.default = r;
  }, {
    "../colors": "e9Ar",
    "../ramp": "tFWC"
  }],
  "Spoc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("d3-color"),
        r = require("d3-interpolate"),
        t = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(300, .5, 0), (0, e.cubehelix)(-240, .5, 1));

    exports.default = t;
  }, {
    "d3-color": "4TJ2",
    "d3-interpolate": "mkGF"
  }],
  "pM5F": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.cool = exports.warm = void 0;

    var e = require("d3-color"),
        r = require("d3-interpolate"),
        o = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(-100, .75, .35), (0, e.cubehelix)(80, 1.5, .8));

    exports.warm = o;
    var t = (0, r.interpolateCubehelixLong)((0, e.cubehelix)(260, .75, .35), (0, e.cubehelix)(80, 1.5, .8));
    exports.cool = t;
    var l = (0, e.cubehelix)();

    function i(e) {
      (e < 0 || e > 1) && (e -= Math.floor(e));
      var r = Math.abs(e - .5);
      return l.h = 360 * e - 100, l.s = 1.5 - 1.5 * r, l.l = .8 - .9 * r, l + "";
    }
  }, {
    "d3-color": "4TJ2",
    "d3-interpolate": "mkGF"
  }],
  "dT4l": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var t = require("d3-color"),
        e = (0, t.rgb)(),
        r = Math.PI / 3,
        a = 2 * Math.PI / 3;

    function s(t) {
      var s;
      return t = (.5 - t) * Math.PI, e.r = 255 * (s = Math.sin(t)) * s, e.g = 255 * (s = Math.sin(t + r)) * s, e.b = 255 * (s = Math.sin(t + a)) * s, e + "";
    }
  }, {
    "d3-color": "4TJ2"
  }],
  "kmxq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.plasma = exports.inferno = exports.magma = exports.default = void 0;
    var f = e(require("../colors"));

    function e(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    function a(f) {
      var e = f.length;
      return function (a) {
        return f[Math.max(0, Math.min(e - 1, Math.floor(a * e)))];
      };
    }

    var d = a((0, f.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    exports.default = d;
    var c = a((0, f.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
    exports.magma = c;
    var b = a((0, f.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
    exports.inferno = b;
    var r = a((0, f.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    exports.plasma = r;
  }, {
    "../colors": "e9Ar"
  }],
  "zd6o": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "schemeCategory10", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "schemeAccent", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "schemeDark2", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "schemePaired", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "schemePastel1", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "schemePastel2", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "schemeSet1", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "schemeSet2", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "schemeSet3", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "interpolateBrBG", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "schemeBrBG", {
      enumerable: !0,
      get: function get() {
        return a.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePRGn", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "schemePRGn", {
      enumerable: !0,
      get: function get() {
        return s.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePiYG", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "schemePiYG", {
      enumerable: !0,
      get: function get() {
        return f.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuOr", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "schemePuOr", {
      enumerable: !0,
      get: function get() {
        return p.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdBu", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "schemeRdBu", {
      enumerable: !0,
      get: function get() {
        return d.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdGy", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "schemeRdGy", {
      enumerable: !0,
      get: function get() {
        return m.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdYlBu", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "schemeRdYlBu", {
      enumerable: !0,
      get: function get() {
        return b.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdYlGn", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "schemeRdYlGn", {
      enumerable: !0,
      get: function get() {
        return g.scheme;
      }
    }), Object.defineProperty(exports, "interpolateSpectral", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "schemeSpectral", {
      enumerable: !0,
      get: function get() {
        return P.scheme;
      }
    }), Object.defineProperty(exports, "interpolateBuGn", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "schemeBuGn", {
      enumerable: !0,
      get: function get() {
        return O.scheme;
      }
    }), Object.defineProperty(exports, "interpolateBuPu", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "schemeBuPu", {
      enumerable: !0,
      get: function get() {
        return y.scheme;
      }
    }), Object.defineProperty(exports, "interpolateGnBu", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "schemeGnBu", {
      enumerable: !0,
      get: function get() {
        return j.scheme;
      }
    }), Object.defineProperty(exports, "interpolateOrRd", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "schemeOrRd", {
      enumerable: !0,
      get: function get() {
        return x.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuBuGn", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "schemePuBuGn", {
      enumerable: !0,
      get: function get() {
        return h.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuBu", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "schemePuBu", {
      enumerable: !0,
      get: function get() {
        return q.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePuRd", {
      enumerable: !0,
      get: function get() {
        return B.default;
      }
    }), Object.defineProperty(exports, "schemePuRd", {
      enumerable: !0,
      get: function get() {
        return B.scheme;
      }
    }), Object.defineProperty(exports, "interpolateRdPu", {
      enumerable: !0,
      get: function get() {
        return G.default;
      }
    }), Object.defineProperty(exports, "schemeRdPu", {
      enumerable: !0,
      get: function get() {
        return G.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlGnBu", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "schemeYlGnBu", {
      enumerable: !0,
      get: function get() {
        return R.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlGn", {
      enumerable: !0,
      get: function get() {
        return Y.default;
      }
    }), Object.defineProperty(exports, "schemeYlGn", {
      enumerable: !0,
      get: function get() {
        return Y.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlOrBr", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "schemeYlOrBr", {
      enumerable: !0,
      get: function get() {
        return v.scheme;
      }
    }), Object.defineProperty(exports, "interpolateYlOrRd", {
      enumerable: !0,
      get: function get() {
        return S.default;
      }
    }), Object.defineProperty(exports, "schemeYlOrRd", {
      enumerable: !0,
      get: function get() {
        return S.scheme;
      }
    }), Object.defineProperty(exports, "interpolateBlues", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(exports, "schemeBlues", {
      enumerable: !0,
      get: function get() {
        return w.scheme;
      }
    }), Object.defineProperty(exports, "interpolateGreens", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "schemeGreens", {
      enumerable: !0,
      get: function get() {
        return _.scheme;
      }
    }), Object.defineProperty(exports, "interpolateGreys", {
      enumerable: !0,
      get: function get() {
        return D.default;
      }
    }), Object.defineProperty(exports, "schemeGreys", {
      enumerable: !0,
      get: function get() {
        return D.scheme;
      }
    }), Object.defineProperty(exports, "interpolatePurples", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "schemePurples", {
      enumerable: !0,
      get: function get() {
        return M.scheme;
      }
    }), Object.defineProperty(exports, "interpolateReds", {
      enumerable: !0,
      get: function get() {
        return C.default;
      }
    }), Object.defineProperty(exports, "schemeReds", {
      enumerable: !0,
      get: function get() {
        return C.scheme;
      }
    }), Object.defineProperty(exports, "interpolateOranges", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "schemeOranges", {
      enumerable: !0,
      get: function get() {
        return k.scheme;
      }
    }), Object.defineProperty(exports, "interpolateCubehelixDefault", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "interpolateRainbow", {
      enumerable: !0,
      get: function get() {
        return I.default;
      }
    }), Object.defineProperty(exports, "interpolateWarm", {
      enumerable: !0,
      get: function get() {
        return I.warm;
      }
    }), Object.defineProperty(exports, "interpolateCool", {
      enumerable: !0,
      get: function get() {
        return I.cool;
      }
    }), Object.defineProperty(exports, "interpolateSinebow", {
      enumerable: !0,
      get: function get() {
        return V.default;
      }
    }), Object.defineProperty(exports, "interpolateViridis", {
      enumerable: !0,
      get: function get() {
        return W.default;
      }
    }), Object.defineProperty(exports, "interpolateMagma", {
      enumerable: !0,
      get: function get() {
        return W.magma;
      }
    }), Object.defineProperty(exports, "interpolateInferno", {
      enumerable: !0,
      get: function get() {
        return W.inferno;
      }
    }), Object.defineProperty(exports, "interpolatePlasma", {
      enumerable: !0,
      get: function get() {
        return W.plasma;
      }
    });

    var e = E(require("./categorical/category10")),
        r = E(require("./categorical/Accent")),
        t = E(require("./categorical/Dark2")),
        n = E(require("./categorical/Paired")),
        u = E(require("./categorical/Pastel1")),
        i = E(require("./categorical/Pastel2")),
        o = E(require("./categorical/Set1")),
        l = E(require("./categorical/Set2")),
        c = E(require("./categorical/Set3")),
        a = z(require("./diverging/BrBG")),
        s = z(require("./diverging/PRGn")),
        f = z(require("./diverging/PiYG")),
        p = z(require("./diverging/PuOr")),
        d = z(require("./diverging/RdBu")),
        m = z(require("./diverging/RdGy")),
        b = z(require("./diverging/RdYlBu")),
        g = z(require("./diverging/RdYlGn")),
        P = z(require("./diverging/Spectral")),
        O = z(require("./sequential-multi/BuGn")),
        y = z(require("./sequential-multi/BuPu")),
        j = z(require("./sequential-multi/GnBu")),
        x = z(require("./sequential-multi/OrRd")),
        h = z(require("./sequential-multi/PuBuGn")),
        q = z(require("./sequential-multi/PuBu")),
        B = z(require("./sequential-multi/PuRd")),
        G = z(require("./sequential-multi/RdPu")),
        R = z(require("./sequential-multi/YlGnBu")),
        Y = z(require("./sequential-multi/YlGn")),
        v = z(require("./sequential-multi/YlOrBr")),
        S = z(require("./sequential-multi/YlOrRd")),
        w = z(require("./sequential-single/Blues")),
        _ = z(require("./sequential-single/Greens")),
        D = z(require("./sequential-single/Greys")),
        M = z(require("./sequential-single/Purples")),
        C = z(require("./sequential-single/Reds")),
        k = z(require("./sequential-single/Oranges")),
        A = E(require("./sequential-multi/cubehelix")),
        I = z(require("./sequential-multi/rainbow")),
        V = E(require("./sequential-multi/sinebow")),
        W = z(require("./sequential-multi/viridis"));

    function z(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function E(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./categorical/category10": "PcKk",
    "./categorical/Accent": "2TXT",
    "./categorical/Dark2": "MCH8",
    "./categorical/Paired": "bH6q",
    "./categorical/Pastel1": "2GbC",
    "./categorical/Pastel2": "SQbk",
    "./categorical/Set1": "/J0n",
    "./categorical/Set2": "rdh9",
    "./categorical/Set3": "7/o5",
    "./diverging/BrBG": "kmpN",
    "./diverging/PRGn": "Hn8a",
    "./diverging/PiYG": "cCiT",
    "./diverging/PuOr": "k6z3",
    "./diverging/RdBu": "75sN",
    "./diverging/RdGy": "mrMT",
    "./diverging/RdYlBu": "uyGf",
    "./diverging/RdYlGn": "Dt8k",
    "./diverging/Spectral": "eSjI",
    "./sequential-multi/BuGn": "L6xI",
    "./sequential-multi/BuPu": "JRrn",
    "./sequential-multi/GnBu": "j/1f",
    "./sequential-multi/OrRd": "nT+z",
    "./sequential-multi/PuBuGn": "3B5M",
    "./sequential-multi/PuBu": "NAcy",
    "./sequential-multi/PuRd": "DZXx",
    "./sequential-multi/RdPu": "aT++",
    "./sequential-multi/YlGnBu": "et2z",
    "./sequential-multi/YlGn": "lF8J",
    "./sequential-multi/YlOrBr": "aI9y",
    "./sequential-multi/YlOrRd": "JWLI",
    "./sequential-single/Blues": "b4OA",
    "./sequential-single/Greens": "NKRR",
    "./sequential-single/Greys": "jAVD",
    "./sequential-single/Purples": "Emw5",
    "./sequential-single/Reds": "wB2L",
    "./sequential-single/Oranges": "wV9s",
    "./sequential-multi/cubehelix": "Spoc",
    "./sequential-multi/rainbow": "pM5F",
    "./sequential-multi/sinebow": "dT4l",
    "./sequential-multi/viridis": "kmxq"
  }],
  "9R8v": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.acos = h, exports.asin = M, exports.tau = exports.halfPi = exports.pi = exports.epsilon = exports.sqrt = exports.sin = exports.min = exports.max = exports.cos = exports.atan2 = exports.abs = void 0;
    var t = Math.abs;
    exports.abs = t;
    var r = Math.atan2;
    exports.atan2 = r;
    var s = Math.cos;
    exports.cos = s;
    var a = Math.max;
    exports.max = a;
    var e = Math.min;
    exports.min = e;
    var o = Math.sin;
    exports.sin = o;
    var p = Math.sqrt;
    exports.sqrt = p;
    var x = 1e-12;
    exports.epsilon = x;
    var n = Math.PI;
    exports.pi = n;
    var i = n / 2;
    exports.halfPi = i;
    var v = 2 * n;

    function h(t) {
      return t > 1 ? 0 : t < -1 ? n : Math.acos(t);
    }

    function M(t) {
      return t >= 1 ? i : t <= -1 ? -i : Math.asin(t);
    }

    exports.tau = v;
  }, {}],
  "TV07": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = require("d3-path"),
        t = a(require("./constant")),
        e = require("./math");

    function a(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function i(n) {
      return n.innerRadius;
    }

    function r(n) {
      return n.outerRadius;
    }

    function o(n) {
      return n.startAngle;
    }

    function c(n) {
      return n.endAngle;
    }

    function u(n) {
      return n && n.padAngle;
    }

    function l(n, t, a, i, r, o, c, u) {
      var l = a - n,
          s = i - t,
          f = c - r,
          p = u - o,
          y = p * l - f * s;
      if (!(y * y < e.epsilon)) return [n + (y = (f * (t - o) - p * (n - r)) / y) * l, t + y * s];
    }

    function s(n, t, a, i, r, o, c) {
      var u = n - a,
          l = t - i,
          s = (c ? o : -o) / (0, e.sqrt)(u * u + l * l),
          f = s * l,
          p = -s * u,
          y = n + f,
          x = t + p,
          d = a + f,
          h = i + p,
          v = (y + d) / 2,
          g = (x + h) / 2,
          m = d - y,
          q = h - x,
          T = m * m + q * q,
          A = r - o,
          R = y * h - d * x,
          P = (q < 0 ? -1 : 1) * (0, e.sqrt)((0, e.max)(0, A * A * T - R * R)),
          _ = (R * q - m * P) / T,
          b = (-R * m - q * P) / T,
          M = (R * q + m * P) / T,
          j = (-R * m + q * P) / T,
          O = _ - v,
          k = b - g,
          w = M - v,
          z = j - g;

      return O * O + k * k > w * w + z * z && (_ = M, b = j), {
        cx: _,
        cy: b,
        x01: -f,
        y01: -p,
        x11: _ * (r / A - 1),
        y11: b * (r / A - 1)
      };
    }

    function f() {
      var a = i,
          f = r,
          p = (0, t.default)(0),
          y = null,
          x = o,
          d = c,
          h = u,
          v = null;

      function g() {
        var t,
            i,
            r = +a.apply(this, arguments),
            o = +f.apply(this, arguments),
            c = x.apply(this, arguments) - e.halfPi,
            u = d.apply(this, arguments) - e.halfPi,
            g = (0, e.abs)(u - c),
            m = u > c;
        if (v || (v = t = (0, n.path)()), o < r && (i = o, o = r, r = i), o > e.epsilon) {
          if (g > e.tau - e.epsilon) v.moveTo(o * (0, e.cos)(c), o * (0, e.sin)(c)), v.arc(0, 0, o, c, u, !m), r > e.epsilon && (v.moveTo(r * (0, e.cos)(u), r * (0, e.sin)(u)), v.arc(0, 0, r, u, c, m));else {
            var q,
                T,
                A = c,
                R = u,
                P = c,
                _ = u,
                b = g,
                M = g,
                j = h.apply(this, arguments) / 2,
                O = j > e.epsilon && (y ? +y.apply(this, arguments) : (0, e.sqrt)(r * r + o * o)),
                k = (0, e.min)((0, e.abs)(o - r) / 2, +p.apply(this, arguments)),
                w = k,
                z = k;

            if (O > e.epsilon) {
              var B = (0, e.asin)(O / r * (0, e.sin)(j)),
                  C = (0, e.asin)(O / o * (0, e.sin)(j));
              (b -= 2 * B) > e.epsilon ? (P += B *= m ? 1 : -1, _ -= B) : (b = 0, P = _ = (c + u) / 2), (M -= 2 * C) > e.epsilon ? (A += C *= m ? 1 : -1, R -= C) : (M = 0, A = R = (c + u) / 2);
            }

            var D = o * (0, e.cos)(A),
                E = o * (0, e.sin)(A),
                F = r * (0, e.cos)(_),
                G = r * (0, e.sin)(_);

            if (k > e.epsilon) {
              var H,
                  I = o * (0, e.cos)(R),
                  J = o * (0, e.sin)(R),
                  K = r * (0, e.cos)(P),
                  L = r * (0, e.sin)(P);

              if (g < e.pi && (H = l(D, E, K, L, I, J, F, G))) {
                var N = D - H[0],
                    Q = E - H[1],
                    S = I - H[0],
                    U = J - H[1],
                    V = 1 / (0, e.sin)((0, e.acos)((N * S + Q * U) / ((0, e.sqrt)(N * N + Q * Q) * (0, e.sqrt)(S * S + U * U))) / 2),
                    W = (0, e.sqrt)(H[0] * H[0] + H[1] * H[1]);
                w = (0, e.min)(k, (r - W) / (V - 1)), z = (0, e.min)(k, (o - W) / (V + 1));
              }
            }

            M > e.epsilon ? z > e.epsilon ? (q = s(K, L, D, E, o, z, m), T = s(I, J, F, G, o, z, m), v.moveTo(q.cx + q.x01, q.cy + q.y01), z < k ? v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, o, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), !m), v.arc(T.cx, T.cy, z, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : (v.moveTo(D, E), v.arc(0, 0, o, A, R, !m)) : v.moveTo(D, E), r > e.epsilon && b > e.epsilon ? w > e.epsilon ? (q = s(F, G, I, J, r, -w, m), T = s(D, E, K, L, r, -w, m), v.lineTo(q.cx + q.x01, q.cy + q.y01), w < k ? v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, r, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), m), v.arc(T.cx, T.cy, w, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : v.arc(0, 0, r, _, P, m) : v.lineTo(F, G);
          }
        } else v.moveTo(0, 0);
        if (v.closePath(), t) return v = null, t + "" || null;
      }

      return g.centroid = function () {
        var n = (+a.apply(this, arguments) + +f.apply(this, arguments)) / 2,
            t = (+x.apply(this, arguments) + +d.apply(this, arguments)) / 2 - e.pi / 2;
        return [(0, e.cos)(t) * n, (0, e.sin)(t) * n];
      }, g.innerRadius = function (n) {
        return arguments.length ? (a = "function" == typeof n ? n : (0, t.default)(+n), g) : a;
      }, g.outerRadius = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), g) : f;
      }, g.cornerRadius = function (n) {
        return arguments.length ? (p = "function" == typeof n ? n : (0, t.default)(+n), g) : p;
      }, g.padRadius = function (n) {
        return arguments.length ? (y = null == n ? null : "function" == typeof n ? n : (0, t.default)(+n), g) : y;
      }, g.startAngle = function (n) {
        return arguments.length ? (x = "function" == typeof n ? n : (0, t.default)(+n), g) : x;
      }, g.endAngle = function (n) {
        return arguments.length ? (d = "function" == typeof n ? n : (0, t.default)(+n), g) : d;
      }, g.padAngle = function (n) {
        return arguments.length ? (h = "function" == typeof n ? n : (0, t.default)(+n), g) : h;
      }, g.context = function (n) {
        return arguments.length ? (v = null == n ? null : n, g) : v;
      }, g;
    }
  }, {
    "d3-path": "dz42",
    "./constant": "5O/Y",
    "./math": "9R8v"
  }],
  "4VCF": [function (require, module, exports) {
    "use strict";

    function t(t) {
      this._context = t;
    }

    function i(i) {
      return new t(i);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, i) {
        switch (t = +t, i = +i, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
            break;

          case 1:
            this._point = 2;

          default:
            this._context.lineTo(t, i);

        }
      }
    };
  }, {}],
  "aLIe": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e[0];
    }

    function t(e) {
      return e[1];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.x = e, exports.y = t;
  }, {}],
  "Ume/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("d3-path"),
        e = r(require("./constant")),
        t = r(require("./curve/linear")),
        u = require("./point");

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function l() {
      var r = u.x,
          l = u.y,
          f = (0, e.default)(!0),
          i = null,
          o = t.default,
          c = null;

      function a(e) {
        var t,
            u,
            a,
            d = e.length,
            p = !1;

        for (null == i && (c = o(a = (0, n.path)())), t = 0; t <= d; ++t) {
          !(t < d && f(u = e[t], t, e)) === p && ((p = !p) ? c.lineStart() : c.lineEnd()), p && c.point(+r(u, t, e), +l(u, t, e));
        }

        if (a) return c = null, a + "" || null;
      }

      return a.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), a) : r;
      }, a.y = function (n) {
        return arguments.length ? (l = "function" == typeof n ? n : (0, e.default)(+n), a) : l;
      }, a.defined = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, e.default)(!!n), a) : f;
      }, a.curve = function (n) {
        return arguments.length ? (o = n, null != i && (c = o(i)), a) : o;
      }, a.context = function (n) {
        return arguments.length ? (null == n ? i = c = null : c = o(i = n), a) : i;
      }, a;
    }
  }, {
    "d3-path": "dz42",
    "./constant": "5O/Y",
    "./curve/linear": "4VCF",
    "./point": "aLIe"
  }],
  "UWil": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = require("d3-path"),
        e = r(require("./constant")),
        t = r(require("./curve/linear")),
        u = r(require("./line")),
        l = require("./point");

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function f() {
      var r = l.x,
          f = null,
          i = (0, e.default)(0),
          o = l.y,
          c = (0, e.default)(!0),
          a = null,
          d = t.default,
          y = null;

      function p(e) {
        var t,
            u,
            l,
            p,
            h,
            x = e.length,
            g = !1,
            s = new Array(x),
            v = new Array(x);

        for (null == a && (y = d(h = (0, n.path)())), t = 0; t <= x; ++t) {
          if (!(t < x && c(p = e[t], t, e)) === g) if (g = !g) u = t, y.areaStart(), y.lineStart();else {
            for (y.lineEnd(), y.lineStart(), l = t - 1; l >= u; --l) {
              y.point(s[l], v[l]);
            }

            y.lineEnd(), y.areaEnd();
          }
          g && (s[t] = +r(p, t, e), v[t] = +i(p, t, e), y.point(f ? +f(p, t, e) : s[t], o ? +o(p, t, e) : v[t]));
        }

        if (h) return y = null, h + "" || null;
      }

      function h() {
        return (0, u.default)().defined(c).curve(d).context(a);
      }

      return p.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), f = null, p) : r;
      }, p.x0 = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), p) : r;
      }, p.x1 = function (n) {
        return arguments.length ? (f = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : f;
      }, p.y = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), o = null, p) : i;
      }, p.y0 = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), p) : i;
      }, p.y1 = function (n) {
        return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : o;
      }, p.lineX0 = p.lineY0 = function () {
        return h().x(r).y(i);
      }, p.lineY1 = function () {
        return h().x(r).y(o);
      }, p.lineX1 = function () {
        return h().x(f).y(i);
      }, p.defined = function (n) {
        return arguments.length ? (c = "function" == typeof n ? n : (0, e.default)(!!n), p) : c;
      }, p.curve = function (n) {
        return arguments.length ? (d = n, null != a && (y = d(a)), p) : d;
      }, p.context = function (n) {
        return arguments.length ? (null == n ? a = y = null : y = d(a = n), p) : a;
      }, p;
    }
  }, {
    "d3-path": "dz42",
    "./constant": "5O/Y",
    "./curve/linear": "4VCF",
    "./line": "Ume/",
    "./point": "aLIe"
  }],
  "5OJY": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var t = r(require("./constant")),
        n = r(require("./descending")),
        e = r(require("./identity")),
        u = require("./math");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function l() {
      var r = e.default,
          l = n.default,
          a = null,
          f = (0, t.default)(0),
          o = (0, t.default)(u.tau),
          i = (0, t.default)(0);

      function d(t) {
        var n,
            e,
            d,
            c,
            s,
            h = t.length,
            p = 0,
            g = new Array(h),
            y = new Array(h),
            A = +f.apply(this, arguments),
            v = Math.min(u.tau, Math.max(-u.tau, o.apply(this, arguments) - A)),
            M = Math.min(Math.abs(v) / h, i.apply(this, arguments)),
            m = M * (v < 0 ? -1 : 1);

        for (n = 0; n < h; ++n) {
          (s = y[g[n] = n] = +r(t[n], n, t)) > 0 && (p += s);
        }

        for (null != l ? g.sort(function (t, n) {
          return l(y[t], y[n]);
        }) : null != a && g.sort(function (n, e) {
          return a(t[n], t[e]);
        }), n = 0, d = p ? (v - h * m) / p : 0; n < h; ++n, A = c) {
          e = g[n], c = A + ((s = y[e]) > 0 ? s * d : 0) + m, y[e] = {
            data: t[e],
            index: n,
            value: s,
            startAngle: A,
            endAngle: c,
            padAngle: M
          };
        }

        return y;
      }

      return d.value = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, t.default)(+n), d) : r;
      }, d.sortValues = function (t) {
        return arguments.length ? (l = t, a = null, d) : l;
      }, d.sort = function (t) {
        return arguments.length ? (a = t, l = null, d) : a;
      }, d.startAngle = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), d) : f;
      }, d.endAngle = function (n) {
        return arguments.length ? (o = "function" == typeof n ? n : (0, t.default)(+n), d) : o;
      }, d.padAngle = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, t.default)(+n), d) : i;
      }, d;
    }
  }, {
    "./constant": "5O/Y",
    "./descending": "wjXp",
    "./identity": "nPOL",
    "./math": "9R8v"
  }],
  "m9TD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.curveRadialLinear = void 0;
    var e = t(require("./linear"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = i(e.default);

    function n(e) {
      this._curve = e;
    }

    function i(e) {
      function t(t) {
        return new n(e(t));
      }

      return t._curve = e, t;
    }

    exports.curveRadialLinear = r, n.prototype = {
      areaStart: function areaStart() {
        this._curve.areaStart();
      },
      areaEnd: function areaEnd() {
        this._curve.areaEnd();
      },
      lineStart: function lineStart() {
        this._curve.lineStart();
      },
      lineEnd: function lineEnd() {
        this._curve.lineEnd();
      },
      point: function point(e, t) {
        this._curve.point(t * Math.sin(e), t * -Math.cos(e));
      }
    };
  }, {
    "./linear": "4VCF"
  }],
  "p8dR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.lineRadial = n, exports.default = i;
    var e = u(require("./curve/radial")),
        r = t(require("./line"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var u = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          u.get || u.set ? Object.defineProperty(r, t, u) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function n(r) {
      var t = r.curve;
      return r.angle = r.x, delete r.x, r.radius = r.y, delete r.y, r.curve = function (r) {
        return arguments.length ? t((0, e.default)(r)) : t()._curve;
      }, r;
    }

    function i() {
      return n((0, r.default)().curve(e.curveRadialLinear));
    }
  }, {
    "./curve/radial": "m9TD",
    "./line": "Ume/"
  }],
  "7HIq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = l(require("./curve/radial")),
        r = t(require("./area")),
        n = require("./lineRadial");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var n in e) {
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var t = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
          t.get || t.set ? Object.defineProperty(r, n, t) : r[n] = e[n];
        }
      }
      return r.default = e, r;
    }

    function i() {
      var t = (0, r.default)().curve(e.curveRadialLinear),
          l = t.curve,
          i = t.lineX0,
          u = t.lineX1,
          a = t.lineY0,
          d = t.lineY1;
      return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
        return (0, n.lineRadial)(i());
      }, delete t.lineX0, t.lineEndAngle = function () {
        return (0, n.lineRadial)(u());
      }, delete t.lineX1, t.lineInnerRadius = function () {
        return (0, n.lineRadial)(a());
      }, delete t.lineY0, t.lineOuterRadius = function () {
        return (0, n.lineRadial)(d());
      }, delete t.lineY1, t.curve = function (r) {
        return arguments.length ? l((0, e.default)(r)) : l()._curve;
      }, t;
    }
  }, {
    "./curve/radial": "m9TD",
    "./area": "UWil",
    "./lineRadial": "p8dR"
  }],
  "wQOf": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return [(t = +t) * Math.cos(e -= Math.PI / 2), t * Math.sin(e)];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "CMsX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linkHorizontal = s, exports.linkVertical = d, exports.linkRadial = y;

    var e = require("d3-path"),
        t = require("../array"),
        n = i(require("../constant")),
        r = require("../point"),
        u = i(require("../pointRadial"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e) {
      return e.source;
    }

    function o(e) {
      return e.target;
    }

    function a(u) {
      var i = l,
          a = o,
          f = r.x,
          c = r.y,
          p = null;

      function s() {
        var n,
            r = t.slice.call(arguments),
            l = i.apply(this, r),
            o = a.apply(this, r);
        if (p || (p = n = (0, e.path)()), u(p, +f.apply(this, (r[0] = l, r)), +c.apply(this, r), +f.apply(this, (r[0] = o, r)), +c.apply(this, r)), n) return p = null, n + "" || null;
      }

      return s.source = function (e) {
        return arguments.length ? (i = e, s) : i;
      }, s.target = function (e) {
        return arguments.length ? (a = e, s) : a;
      }, s.x = function (e) {
        return arguments.length ? (f = "function" == typeof e ? e : (0, n.default)(+e), s) : f;
      }, s.y = function (e) {
        return arguments.length ? (c = "function" == typeof e ? e : (0, n.default)(+e), s) : c;
      }, s.context = function (e) {
        return arguments.length ? (p = null == e ? null : e, s) : p;
      }, s;
    }

    function f(e, t, n, r, u) {
      e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, u, r, u);
    }

    function c(e, t, n, r, u) {
      e.moveTo(t, n), e.bezierCurveTo(t, n = (n + u) / 2, r, n, r, u);
    }

    function p(e, t, n, r, i) {
      var l = (0, u.default)(t, n),
          o = (0, u.default)(t, n = (n + i) / 2),
          a = (0, u.default)(r, n),
          f = (0, u.default)(r, i);
      e.moveTo(l[0], l[1]), e.bezierCurveTo(o[0], o[1], a[0], a[1], f[0], f[1]);
    }

    function s() {
      return a(f);
    }

    function d() {
      return a(c);
    }

    function y() {
      var e = a(p);
      return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e;
    }
  }, {
    "d3-path": "dz42",
    "../array": "rv5q",
    "../constant": "5O/Y",
    "../point": "aLIe",
    "../pointRadial": "wQOf"
  }],
  "NEs3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../math"),
        t = {
      draw: function draw(t, r) {
        var a = Math.sqrt(r / e.pi);
        t.moveTo(a, 0), t.arc(0, 0, a, 0, e.tau);
      }
    };

    exports.default = t;
  }, {
    "../math": "9R8v"
  }],
  "57OD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      draw: function draw(e, o) {
        var l = Math.sqrt(o / 5) / 2;
        e.moveTo(-3 * l, -l), e.lineTo(-l, -l), e.lineTo(-l, -3 * l), e.lineTo(l, -3 * l), e.lineTo(l, -l), e.lineTo(3 * l, -l), e.lineTo(3 * l, l), e.lineTo(l, l), e.lineTo(l, 3 * l), e.lineTo(-l, 3 * l), e.lineTo(-l, l), e.lineTo(-3 * l, l), e.closePath();
      }
    };
    exports.default = e;
  }, {}],
  "nSnU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = Math.sqrt(1 / 3),
        t = 2 * e,
        o = {
      draw: function draw(o, r) {
        var a = Math.sqrt(r / t),
            s = a * e;
        o.moveTo(0, -a), o.lineTo(s, 0), o.lineTo(0, a), o.lineTo(-s, 0), o.closePath();
      }
    };
    exports.default = o;
  }, {}],
  "3SkC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("../math"),
        a = .8908130915292852,
        e = Math.sin(t.pi / 10) / Math.sin(7 * t.pi / 10),
        o = Math.sin(t.tau / 10) * e,
        r = -Math.cos(t.tau / 10) * e,
        i = {
      draw: function draw(e, i) {
        var s = Math.sqrt(i * a),
            n = o * s,
            u = r * s;
        e.moveTo(0, -s), e.lineTo(n, u);

        for (var h = 1; h < 5; ++h) {
          var l = t.tau * h / 5,
              M = Math.cos(l),
              v = Math.sin(l);
          e.lineTo(v * s, -M * s), e.lineTo(M * n - v * u, v * n + M * u);
        }

        e.closePath();
      }
    };

    exports.default = i;
  }, {
    "../math": "9R8v"
  }],
  "lQ43": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      draw: function draw(e, t) {
        var r = Math.sqrt(t),
            a = -r / 2;
        e.rect(a, a, r, r);
      }
    };
    exports.default = e;
  }, {}],
  "Z5S+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = Math.sqrt(3),
        t = {
      draw: function draw(t, o) {
        var r = -Math.sqrt(o / (3 * e));
        t.moveTo(0, 2 * r), t.lineTo(-e * r, -r), t.lineTo(e * r, -r), t.closePath();
      }
    };
    exports.default = t;
  }, {}],
  "JWBh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = -.5,
        o = Math.sqrt(3) / 2,
        t = 1 / Math.sqrt(12),
        l = 3 * (t / 2 + 1),
        i = {
      draw: function draw(i, r) {
        var n = Math.sqrt(r / l),
            a = n / 2,
            s = n * t,
            T = a,
            d = n * t + n,
            u = -T,
            v = d;
        i.moveTo(a, s), i.lineTo(T, d), i.lineTo(u, v), i.lineTo(e * a - o * s, o * a + e * s), i.lineTo(e * T - o * d, o * T + e * d), i.lineTo(e * u - o * v, o * u + e * v), i.lineTo(e * a + o * s, e * s - o * a), i.lineTo(e * T + o * d, e * d - o * T), i.lineTo(e * u + o * v, e * v - o * u), i.closePath();
      }
    };
    exports.default = i;
  }, {}],
  "XBPQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d, exports.symbols = void 0;

    var e = require("d3-path"),
        t = s(require("./symbol/circle")),
        r = s(require("./symbol/cross")),
        u = s(require("./symbol/diamond")),
        l = s(require("./symbol/star")),
        n = s(require("./symbol/square")),
        o = s(require("./symbol/triangle")),
        a = s(require("./symbol/wye")),
        i = s(require("./constant"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = [t.default, r.default, u.default, n.default, l.default, o.default, a.default];

    function d() {
      var r = (0, i.default)(t.default),
          u = (0, i.default)(64),
          l = null;

      function n() {
        var t;
        if (l || (l = t = (0, e.path)()), r.apply(this, arguments).draw(l, +u.apply(this, arguments)), t) return l = null, t + "" || null;
      }

      return n.type = function (e) {
        return arguments.length ? (r = "function" == typeof e ? e : (0, i.default)(e), n) : r;
      }, n.size = function (e) {
        return arguments.length ? (u = "function" == typeof e ? e : (0, i.default)(+e), n) : u;
      }, n.context = function (e) {
        return arguments.length ? (l = null == e ? null : e, n) : l;
      }, n;
    }

    exports.symbols = f;
  }, {
    "d3-path": "dz42",
    "./symbol/circle": "NEs3",
    "./symbol/cross": "57OD",
    "./symbol/diamond": "nSnU",
    "./symbol/star": "3SkC",
    "./symbol/square": "lQ43",
    "./symbol/triangle": "Z5S+",
    "./symbol/wye": "JWBh",
    "./constant": "5O/Y"
  }],
  "XakR": [function (require, module, exports) {
    "use strict";

    function t(t, i, s) {
      t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + i) / 6, (t._y0 + 4 * t._y1 + s) / 6);
    }

    function i(t) {
      this._context = t;
    }

    function s(t) {
      return new i(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = t, exports.Basis = i, exports.default = s, i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 3:
            t(this, this._x1, this._y1);

          case 2:
            this._context.lineTo(this._x1, this._y1);

        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

          default:
            t(this, i, s);
        }

        this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {}],
  "WkDE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var t = s(require("../noop")),
        i = require("./basis");

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t) {
      this._context = t;
    }

    function _(t) {
      return new h(t);
    }

    h.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;

          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;

          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        }
      },
      point: function point(t, s) {
        switch (t = +t, s = +s, this._point) {
          case 0:
            this._point = 1, this._x2 = t, this._y2 = s;
            break;

          case 1:
            this._point = 2, this._x3 = t, this._y3 = s;
            break;

          case 2:
            this._point = 3, this._x4 = t, this._y4 = s, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + s) / 6);
            break;

          default:
            (0, i.point)(this, t, s);
        }

        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {
    "../noop": "BhKh",
    "./basis": "XakR"
  }],
  "+5Gg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var t = require("./basis");

    function i(t) {
      this._context = t;
    }

    function s(t) {
      return new i(t);
    }

    i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + i) / 6,
                n = (this._y0 + 4 * this._y1 + s) / 6;
            this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
            break;

          case 3:
            this._point = 4;

          default:
            (0, t.point)(this, i, s);
        }

        this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {
    "./basis": "XakR"
  }],
  "eh91": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./basis");

    function i(i, s) {
      this._basis = new t.Basis(i), this._beta = s;
    }

    i.prototype = {
      lineStart: function lineStart() {
        this._x = [], this._y = [], this._basis.lineStart();
      },
      lineEnd: function lineEnd() {
        var t = this._x,
            i = this._y,
            s = t.length - 1;
        if (s > 0) for (var e, n = t[0], a = i[0], r = t[s] - n, h = i[s] - a, u = -1; ++u <= s;) {
          e = u / s, this._basis.point(this._beta * t[u] + (1 - this._beta) * (n + e * r), this._beta * i[u] + (1 - this._beta) * (a + e * h));
        }
        this._x = this._y = null, this._basis.lineEnd();
      },
      point: function point(t, i) {
        this._x.push(+t), this._y.push(+i);
      }
    };

    var s = function s(e) {
      function n(s) {
        return 1 === e ? new t.Basis(s) : new i(s, e);
      }

      return n.beta = function (t) {
        return s(+t);
      }, n;
    }(.85);

    exports.default = s;
  }, {
    "./basis": "XakR"
  }],
  "fNTp": [function (require, module, exports) {
    "use strict";

    function t(t, i, s) {
      t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - i), t._y2 + t._k * (t._y1 - s), t._x2, t._y2);
    }

    function i(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = t, exports.Cardinal = i, exports.default = void 0, i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);

            break;

          case 3:
            t(this, this._x1, this._y1);
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
            break;

          case 1:
            this._point = 2, this._x1 = i, this._y1 = s;
            break;

          case 2:
            this._point = 3;

          default:
            t(this, i, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var s = function t(s) {
      function _(t) {
        return new i(t, s);
      }

      return _.tension = function (i) {
        return t(+i);
      }, _;
    }(0);

    exports.default = s;
  }, {}],
  "euEz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.CardinalClosed = h, exports.default = void 0;

    var t = s(require("../noop")),
        i = require("./cardinal");

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    h.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;

          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;

          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      },
      point: function point(t, s) {
        switch (t = +t, s = +s, this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = s;
            break;

          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = s);
            break;

          case 2:
            this._point = 3, this._x5 = t, this._y5 = s;
            break;

          default:
            (0, i.point)(this, t, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var e = function t(i) {
      function s(t) {
        return new h(t, i);
      }

      return s.tension = function (i) {
        return t(+i);
      }, s;
    }(0);

    exports.default = e;
  }, {
    "../noop": "BhKh",
    "./cardinal": "fNTp"
  }],
  "it46": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.CardinalOpen = i, exports.default = void 0;

    var t = require("./cardinal");

    function i(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;

          case 3:
            this._point = 4;

          default:
            (0, t.point)(this, i, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var s = function t(s) {
      function n(t) {
        return new i(t, s);
      }

      return n.tension = function (i) {
        return t(+i);
      }, n;
    }(0);

    exports.default = s;
  }, {
    "./cardinal": "fNTp"
  }],
  "oWDJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = i, exports.default = void 0;

    var _ = require("../math"),
        t = require("./cardinal");

    function i(t, i, a) {
      var s = t._x1,
          h = t._y1,
          l = t._x2,
          n = t._y2;

      if (t._l01_a > _.epsilon) {
        var e = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            o = 3 * t._l01_a * (t._l01_a + t._l12_a);
        s = (s * e - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o, h = (h * e - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o;
      }

      if (t._l23_a > _.epsilon) {
        var r = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            c = 3 * t._l23_a * (t._l23_a + t._l12_a);
        l = (l * r + t._x1 * t._l23_2a - i * t._l12_2a) / c, n = (n * r + t._y1 * t._l23_2a - a * t._l12_2a) / c;
      }

      t._context.bezierCurveTo(s, h, l, n, t._x2, t._y2);
    }

    function a(_, t) {
      this._context = _, this._alpha = t;
    }

    a.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);

            break;

          case 3:
            this.point(this._x2, this._y2);
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(_, t) {
        if (_ = +_, t = +t, this._point) {
          var a = this._x2 - _,
              s = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(a * a + s * s, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(_, t) : this._context.moveTo(_, t);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3;

          default:
            i(this, _, t);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = _, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      }
    };

    var s = function _(i) {
      function s(_) {
        return i ? new a(_, i) : new t.Cardinal(_, 0);
      }

      return s.alpha = function (t) {
        return _(+t);
      }, s;
    }(.5);

    exports.default = s;
  }, {
    "../math": "9R8v",
    "./cardinal": "fNTp"
  }],
  "41Cs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./cardinalClosed"),
        i = _(require("../noop")),
        s = require("./catmullRom");

    function _(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t, i) {
      this._context = t, this._alpha = i;
    }

    h.prototype = {
      areaStart: i.default,
      areaEnd: i.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;

          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;

          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      },
      point: function point(t, i) {
        if (t = +t, i = +i, this._point) {
          var _ = this._x2 - t,
              h = this._y2 - i;

          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(_ * _ + h * h, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = i;
            break;

          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
            break;

          case 2:
            this._point = 3, this._x5 = t, this._y5 = i;
            break;

          default:
            (0, s.point)(this, t, i);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
      }
    };

    var e = function i(s) {
      function _(i) {
        return s ? new h(i, s) : new t.CardinalClosed(i, 0);
      }

      return _.alpha = function (t) {
        return i(+t);
      }, _;
    }(.5);

    exports.default = e;
  }, {
    "./cardinalClosed": "euEz",
    "../noop": "BhKh",
    "./catmullRom": "oWDJ"
  }],
  "Vf6b": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./cardinalOpen"),
        i = require("./catmullRom");

    function _(t, i) {
      this._context = t, this._alpha = i;
    }

    _.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, _) {
        if (t = +t, _ = +_, this._point) {
          var s = this._x2 - t,
              h = this._y2 - _;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + h * h, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;

          case 3:
            this._point = 4;

          default:
            (0, i.point)(this, t, _);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = _;
      }
    };

    var s = function i(s) {
      function h(i) {
        return s ? new _(i, s) : new t.CardinalOpen(i, 0);
      }

      return h.alpha = function (t) {
        return i(+t);
      }, h;
    }(.5);

    exports.default = s;
  }, {
    "./cardinalOpen": "it46",
    "./catmullRom": "oWDJ"
  }],
  "QDqS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var t = e(require("../noop"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      this._context = t;
    }

    function o(t) {
      return new n(t);
    }

    n.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        this._point && this._context.closePath();
      },
      point: function point(t, e) {
        t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
      }
    };
  }, {
    "../noop": "BhKh"
  }],
  "7Vae": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t < 0 ? -1 : 1;
    }

    function i(i, n, e) {
      var o = i._x1 - i._x0,
          s = n - i._x1,
          h = (i._y1 - i._y0) / (o || s < 0 && -0),
          _ = (e - i._y1) / (s || o < 0 && -0),
          c = (h * s + _ * o) / (o + s);

      return (t(h) + t(_)) * Math.min(Math.abs(h), Math.abs(_), .5 * Math.abs(c)) || 0;
    }

    function n(t, i) {
      var n = t._x1 - t._x0;
      return n ? (3 * (t._y1 - t._y0) / n - i) / 2 : i;
    }

    function e(t, i, n) {
      var e = t._x0,
          o = t._y0,
          s = t._x1,
          h = t._y1,
          _ = (s - e) / 3;

      t._context.bezierCurveTo(e + _, o + _ * i, s - _, h - _ * n, s, h);
    }

    function o(t) {
      this._context = t;
    }

    function s(t) {
      this._context = new h(t);
    }

    function h(t) {
      this._context = t;
    }

    function _(t) {
      return new o(t);
    }

    function c(t) {
      return new s(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.monotoneX = _, exports.monotoneY = c, o.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);

            break;

          case 3:
            e(this, this._t0, n(this, this._t0));
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, o) {
        var s = NaN;

        if (o = +o, (t = +t) !== this._x1 || o !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, o) : this._context.moveTo(t, o);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3, e(this, n(this, s = i(this, t, o)), s);
              break;

            default:
              e(this, this._t0, s = i(this, t, o));
          }

          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = o, this._t0 = s;
        }
      }
    }, (s.prototype = Object.create(o.prototype)).point = function (t, i) {
      o.prototype.point.call(this, i, t);
    }, h.prototype = {
      moveTo: function moveTo(t, i) {
        this._context.moveTo(i, t);
      },
      closePath: function closePath() {
        this._context.closePath();
      },
      lineTo: function lineTo(t, i) {
        this._context.lineTo(i, t);
      },
      bezierCurveTo: function bezierCurveTo(t, i, n, e, o, s) {
        this._context.bezierCurveTo(i, t, e, n, s, o);
      }
    };
  }, {}],
  "0T3B": [function (require, module, exports) {
    "use strict";

    function t(t) {
      this._context = t;
    }

    function e(t) {
      var e,
          i,
          n = t.length - 1,
          o = new Array(n),
          r = new Array(n),
          s = new Array(n);

      for (o[0] = 0, r[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) {
        o[e] = 1, r[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
      }

      for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) {
        i = o[e] / r[e - 1], r[e] -= i, s[e] -= i * s[e - 1];
      }

      for (o[n - 1] = s[n - 1] / r[n - 1], e = n - 2; e >= 0; --e) {
        o[e] = (s[e] - o[e + 1]) / r[e];
      }

      for (r[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e) {
        r[e] = 2 * t[e + 1] - o[e + 1];
      }

      return [o, r];
    }

    function i(e) {
      return new t(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x = [], this._y = [];
      },
      lineEnd: function lineEnd() {
        var t = this._x,
            i = this._y,
            n = t.length;
        if (n) if (this._line ? this._context.lineTo(t[0], i[0]) : this._context.moveTo(t[0], i[0]), 2 === n) this._context.lineTo(t[1], i[1]);else for (var o = e(t), r = e(i), s = 0, h = 1; h < n; ++s, ++h) {
          this._context.bezierCurveTo(o[0][s], r[0][s], o[1][s], r[1][s], t[h], i[h]);
        }
        (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
      },
      point: function point(t, e) {
        this._x.push(+t), this._y.push(+e);
      }
    };
  }, {}],
  "UYn4": [function (require, module, exports) {
    "use strict";

    function t(t, i) {
      this._context = t, this._t = i;
    }

    function i(i) {
      return new t(i, .5);
    }

    function e(i) {
      return new t(i, 0);
    }

    function n(i) {
      return new t(i, 1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.stepBefore = e, exports.stepAfter = n, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x = this._y = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
      },
      point: function point(t, i) {
        switch (t = +t, i = +i, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
            break;

          case 1:
            this._point = 2;

          default:
            if (this._t <= 0) this._context.lineTo(this._x, i), this._context.lineTo(t, i);else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, i);
            }
        }

        this._x = t, this._y = i;
      }
    };
  }, {}],
  "x5Mk": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((f = e.length) > 1) for (var r, o, f, s = 1, i = e[t[0]], l = i.length; s < f; ++s) {
        for (o = i, i = e[t[s]], r = 0; r < l; ++r) {
          i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "0IgC": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r = e.length, t = new Array(r); --r >= 0;) {
        t[r] = r;
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "S7q8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./array"),
        t = u(require("./constant")),
        n = u(require("./offset/none")),
        r = u(require("./order/none"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f(e, t) {
      return e[t];
    }

    function l() {
      var u = (0, t.default)([]),
          l = r.default,
          o = n.default,
          a = f;

      function i(e) {
        var t,
            n,
            r = u.apply(this, arguments),
            f = e.length,
            i = r.length,
            c = new Array(i);

        for (t = 0; t < i; ++t) {
          for (var d, s = r[t], y = c[t] = new Array(f), p = 0; p < f; ++p) {
            y[p] = d = [0, +a(e[p], s, p, e)], d.data = e[p];
          }

          y.key = s;
        }

        for (t = 0, n = l(c); t < i; ++t) {
          c[n[t]].index = t;
        }

        return o(c, n), c;
      }

      return i.keys = function (n) {
        return arguments.length ? (u = "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : u;
      }, i.value = function (e) {
        return arguments.length ? (a = "function" == typeof e ? e : (0, t.default)(+e), i) : a;
      }, i.order = function (n) {
        return arguments.length ? (l = null == n ? r.default : "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : l;
      }, i.offset = function (e) {
        return arguments.length ? (o = null == e ? n.default : e, i) : o;
      }, i;
    }
  }, {
    "./array": "rv5q",
    "./constant": "5O/Y",
    "./offset/none": "x5Mk",
    "./order/none": "0IgC"
  }],
  "2jY6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((o = r.length) > 0) {
        for (var f, o, u, n = 0, l = r[0].length; n < l; ++n) {
          for (u = f = 0; f < o; ++f) {
            u += r[f][n][1] || 0;
          }

          if (u) for (f = 0; f < o; ++f) {
            r[f][n][1] /= u;
          }
        }

        (0, e.default)(r, t);
      }
    }
  }, {
    "./none": "x5Mk"
  }],
  "P+6Q": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((s = e.length) > 0) for (var r, o, f, l, n, s, u = 0, i = e[t[0]].length; u < i; ++u) {
        for (l = n = 0, r = 0; r < s; ++r) {
          (f = (o = e[t[r]][u])[1] - o[0]) >= 0 ? (o[0] = l, o[1] = l += f) : f < 0 ? (o[1] = n, o[0] = n += f) : o[0] = l;
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "sf4d": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((u = r.length) > 0) {
        for (var u, n = 0, o = r[t[0]], f = o.length; n < f; ++n) {
          for (var l = 0, a = 0; l < u; ++l) {
            a += r[l][n][1] || 0;
          }

          o[n][1] += o[n][0] = -a / 2;
        }

        (0, e.default)(r, t);
      }
    }
  }, {
    "./none": "x5Mk"
  }],
  "EH71": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((f = r.length) > 0 && (u = (o = r[t[0]]).length) > 0) {
        for (var o, u, f, n = 0, a = 1; a < u; ++a) {
          for (var l = 0, d = 0, i = 0; l < f; ++l) {
            for (var s = r[t[l]], v = s[a][1] || 0, c = (v - (s[a - 1][1] || 0)) / 2, _ = 0; _ < l; ++_) {
              var p = r[t[_]];
              c += (p[a][1] || 0) - (p[a - 1][1] || 0);
            }

            d += v, i += c * v;
          }

          o[a - 1][1] += o[a - 1][0] = n, d && (n -= i / d);
        }

        o[a - 1][1] += o[a - 1][0] = n, (0, e.default)(r, t);
      }
    }
  }, {
    "./none": "x5Mk"
  }],
  "zyBr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r.map(n);
      return (0, e.default)(r).sort(function (e, r) {
        return t[e] - t[r];
      });
    }

    function n(e) {
      for (var r, t = -1, n = 0, u = e.length, o = -1 / 0; ++t < u;) {
        (r = +e[t][1]) > o && (o = r, n = t);
      }

      return n;
    }
  }, {
    "./none": "0IgC"
  }],
  "4koe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.sum = u;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r.map(u);
      return (0, e.default)(r).sort(function (e, r) {
        return t[e] - t[r];
      });
    }

    function u(e) {
      for (var r, t = 0, u = -1, n = e.length; ++u < n;) {
        (r = +e[u][1]) && (t += r);
      }

      return t;
    }
  }, {
    "./none": "0IgC"
  }],
  "i2th": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./ascending"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      return (0, e.default)(r).reverse();
    }
  }, {
    "./ascending": "4koe"
  }],
  "msEL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = u(require("./appearance")),
        r = require("./ascending");

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(u) {
      var t,
          a,
          n = u.length,
          s = u.map(r.sum),
          o = (0, e.default)(u),
          c = 0,
          p = 0,
          d = [],
          f = [];

      for (t = 0; t < n; ++t) {
        a = o[t], c < p ? (c += s[a], d.push(a)) : (p += s[a], f.push(a));
      }

      return f.reverse().concat(d);
    }
  }, {
    "./appearance": "zyBr",
    "./ascending": "4koe"
  }],
  "w5Iz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      return (0, e.default)(r).reverse();
    }
  }, {
    "./none": "0IgC"
  }],
  "pW+U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "arc", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "area", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "line", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "pie", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "areaRadial", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "radialArea", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "lineRadial", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "radialLine", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "pointRadial", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "linkHorizontal", {
      enumerable: !0,
      get: function get() {
        return a.linkHorizontal;
      }
    }), Object.defineProperty(exports, "linkVertical", {
      enumerable: !0,
      get: function get() {
        return a.linkVertical;
      }
    }), Object.defineProperty(exports, "linkRadial", {
      enumerable: !0,
      get: function get() {
        return a.linkRadial;
      }
    }), Object.defineProperty(exports, "symbol", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "symbols", {
      enumerable: !0,
      get: function get() {
        return l.symbols;
      }
    }), Object.defineProperty(exports, "symbolCircle", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "symbolCross", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "symbolDiamond", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "symbolSquare", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "symbolStar", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "symbolTriangle", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "symbolWye", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "curveBasisClosed", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "curveBasisOpen", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "curveBasis", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "curveBundle", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "curveCardinalClosed", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "curveCardinalOpen", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "curveCardinal", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRomClosed", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRomOpen", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRom", {
      enumerable: !0,
      get: function get() {
        return C.default;
      }
    }), Object.defineProperty(exports, "curveLinearClosed", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "curveLinear", {
      enumerable: !0,
      get: function get() {
        return B.default;
      }
    }), Object.defineProperty(exports, "curveMonotoneX", {
      enumerable: !0,
      get: function get() {
        return S.monotoneX;
      }
    }), Object.defineProperty(exports, "curveMonotoneY", {
      enumerable: !0,
      get: function get() {
        return S.monotoneY;
      }
    }), Object.defineProperty(exports, "curveNatural", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "curveStep", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(exports, "curveStepAfter", {
      enumerable: !0,
      get: function get() {
        return w.stepAfter;
      }
    }), Object.defineProperty(exports, "curveStepBefore", {
      enumerable: !0,
      get: function get() {
        return w.stepBefore;
      }
    }), Object.defineProperty(exports, "stack", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "stackOffsetExpand", {
      enumerable: !0,
      get: function get() {
        return D.default;
      }
    }), Object.defineProperty(exports, "stackOffsetDiverging", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "stackOffsetNone", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "stackOffsetSilhouette", {
      enumerable: !0,
      get: function get() {
        return L.default;
      }
    }), Object.defineProperty(exports, "stackOffsetWiggle", {
      enumerable: !0,
      get: function get() {
        return N.default;
      }
    }), Object.defineProperty(exports, "stackOrderAppearance", {
      enumerable: !0,
      get: function get() {
        return z.default;
      }
    }), Object.defineProperty(exports, "stackOrderAscending", {
      enumerable: !0,
      get: function get() {
        return H.default;
      }
    }), Object.defineProperty(exports, "stackOrderDescending", {
      enumerable: !0,
      get: function get() {
        return V.default;
      }
    }), Object.defineProperty(exports, "stackOrderInsideOut", {
      enumerable: !0,
      get: function get() {
        return W.default;
      }
    }), Object.defineProperty(exports, "stackOrderNone", {
      enumerable: !0,
      get: function get() {
        return X.default;
      }
    }), Object.defineProperty(exports, "stackOrderReverse", {
      enumerable: !0,
      get: function get() {
        return Y.default;
      }
    });

    var e = I(require("./arc")),
        r = I(require("./area")),
        t = I(require("./line")),
        n = I(require("./pie")),
        u = I(require("./areaRadial")),
        o = I(require("./lineRadial")),
        i = I(require("./pointRadial")),
        a = require("./link/index"),
        l = E(require("./symbol")),
        c = I(require("./symbol/circle")),
        f = I(require("./symbol/cross")),
        d = I(require("./symbol/diamond")),
        s = I(require("./symbol/square")),
        p = I(require("./symbol/star")),
        b = I(require("./symbol/triangle")),
        m = I(require("./symbol/wye")),
        O = I(require("./curve/basisClosed")),
        y = I(require("./curve/basisOpen")),
        g = I(require("./curve/basis")),
        j = I(require("./curve/bundle")),
        P = I(require("./curve/cardinalClosed")),
        x = I(require("./curve/cardinalOpen")),
        q = I(require("./curve/cardinal")),
        v = I(require("./curve/catmullRomClosed")),
        k = I(require("./curve/catmullRomOpen")),
        C = I(require("./curve/catmullRom")),
        R = I(require("./curve/linearClosed")),
        B = I(require("./curve/linear")),
        S = require("./curve/monotone"),
        _ = I(require("./curve/natural")),
        w = E(require("./curve/step")),
        A = I(require("./stack")),
        D = I(require("./offset/expand")),
        M = I(require("./offset/diverging")),
        h = I(require("./offset/none")),
        L = I(require("./offset/silhouette")),
        N = I(require("./offset/wiggle")),
        z = I(require("./order/appearance")),
        H = I(require("./order/ascending")),
        V = I(require("./order/descending")),
        W = I(require("./order/insideOut")),
        X = I(require("./order/none")),
        Y = I(require("./order/reverse"));

    function E(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function I(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./arc": "TV07",
    "./area": "UWil",
    "./line": "Ume/",
    "./pie": "5OJY",
    "./areaRadial": "7HIq",
    "./lineRadial": "p8dR",
    "./pointRadial": "wQOf",
    "./link/index": "CMsX",
    "./symbol": "XBPQ",
    "./symbol/circle": "NEs3",
    "./symbol/cross": "57OD",
    "./symbol/diamond": "nSnU",
    "./symbol/square": "lQ43",
    "./symbol/star": "3SkC",
    "./symbol/triangle": "Z5S+",
    "./symbol/wye": "JWBh",
    "./curve/basisClosed": "WkDE",
    "./curve/basisOpen": "+5Gg",
    "./curve/basis": "XakR",
    "./curve/bundle": "eh91",
    "./curve/cardinalClosed": "euEz",
    "./curve/cardinalOpen": "it46",
    "./curve/cardinal": "fNTp",
    "./curve/catmullRomClosed": "41Cs",
    "./curve/catmullRomOpen": "Vf6b",
    "./curve/catmullRom": "oWDJ",
    "./curve/linearClosed": "QDqS",
    "./curve/linear": "4VCF",
    "./curve/monotone": "7Vae",
    "./curve/natural": "0T3B",
    "./curve/step": "UYn4",
    "./stack": "S7q8",
    "./offset/expand": "2jY6",
    "./offset/diverging": "P+6Q",
    "./offset/none": "x5Mk",
    "./offset/silhouette": "sf4d",
    "./offset/wiggle": "EH71",
    "./order/appearance": "zyBr",
    "./order/ascending": "4koe",
    "./order/descending": "i2th",
    "./order/insideOut": "msEL",
    "./order/none": "0IgC",
    "./order/reverse": "w5Iz"
  }],
  "cyhV": [function (require, module, exports) {
    "use strict";

    function C() {
      this._ = null;
    }

    function t(C) {
      C.U = C.C = C.L = C.R = C.P = C.N = null;
    }

    function i(C, t) {
      var i = t,
          L = t.R,
          e = i.U;
      e ? e.L === i ? e.L = L : e.R = L : C._ = L, L.U = e, i.U = L, i.R = L.L, i.R && (i.R.U = i), L.L = i;
    }

    function L(C, t) {
      var i = t,
          L = t.L,
          e = i.U;
      e ? e.L === i ? e.L = L : e.R = L : C._ = L, L.U = e, i.U = L, i.L = L.R, i.L && (i.L.U = i), L.R = i;
    }

    function e(C) {
      for (; C.L;) {
        C = C.L;
      }

      return C;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.RedBlackNode = t, exports.default = void 0, C.prototype = {
      constructor: C,
      insert: function insert(C, t) {
        var s, R, n;

        if (C) {
          if (t.P = C, t.N = C.N, C.N && (C.N.P = t), C.N = t, C.R) {
            for (C = C.R; C.L;) {
              C = C.L;
            }

            C.L = t;
          } else C.R = t;

          s = C;
        } else this._ ? (C = e(this._), t.P = null, t.N = C, C.P = C.L = t, s = C) : (t.P = t.N = null, this._ = t, s = null);

        for (t.L = t.R = null, t.U = s, t.C = !0, C = t; s && s.C;) {
          s === (R = s.U).L ? (n = R.R) && n.C ? (s.C = n.C = !1, R.C = !0, C = R) : (C === s.R && (i(this, s), s = (C = s).U), s.C = !1, R.C = !0, L(this, R)) : (n = R.L) && n.C ? (s.C = n.C = !1, R.C = !0, C = R) : (C === s.L && (L(this, s), s = (C = s).U), s.C = !1, R.C = !0, i(this, R)), s = C.U;
        }

        this._.C = !1;
      },
      remove: function remove(C) {
        C.N && (C.N.P = C.P), C.P && (C.P.N = C.N), C.N = C.P = null;
        var t,
            s,
            R,
            n = C.U,
            r = C.L,
            l = C.R;
        if (s = r ? l ? e(l) : r : l, n ? n.L === C ? n.L = s : n.R = s : this._ = s, r && l ? (R = s.C, s.C = C.C, s.L = r, r.U = s, s !== l ? (n = s.U, s.U = C.U, C = s.R, n.L = C, s.R = l, l.U = s) : (s.U = n, n = s, C = s.R)) : (R = C.C, C = s), C && (C.U = n), !R) if (C && C.C) C.C = !1;else {
          do {
            if (C === this._) break;

            if (C === n.L) {
              if ((t = n.R).C && (t.C = !1, n.C = !0, i(this, n), t = n.R), t.L && t.L.C || t.R && t.R.C) {
                t.R && t.R.C || (t.L.C = !1, t.C = !0, L(this, t), t = n.R), t.C = n.C, n.C = t.R.C = !1, i(this, n), C = this._;
                break;
              }
            } else if ((t = n.L).C && (t.C = !1, n.C = !0, L(this, n), t = n.L), t.L && t.L.C || t.R && t.R.C) {
              t.L && t.L.C || (t.R.C = !1, t.C = !0, i(this, t), t = n.L), t.C = n.C, n.C = t.L.C = !1, L(this, n), C = this._;
              break;
            }

            t.C = !0, C = n, n = n.U;
          } while (!C.C);

          C && (C.C = !1);
        }
      }
    };
    var s = C;
    exports.default = s;
  }, {}],
  "7Tkp": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createEdge = r, exports.createBorderEdge = i, exports.setEdgeEnd = f, exports.clipEdges = s;

    var e = require("./Diagram");

    function r(r, i, t, n) {
      var s = [null, null],
          l = e.edges.push(s) - 1;
      return s.left = r, s.right = i, t && f(s, r, i, t), n && f(s, i, r, n), e.cells[r.index].halfedges.push(l), e.cells[i.index].halfedges.push(l), s;
    }

    function i(e, r, i) {
      var f = [r, i];
      return f.left = e, f;
    }

    function f(e, r, i, f) {
      e[0] || e[1] ? e.left === i ? e[1] = f : e[0] = f : (e[0] = f, e.left = r, e.right = i);
    }

    function t(e, r, i, f, t) {
      var n,
          s = e[0],
          l = e[1],
          u = s[0],
          a = s[1],
          d = 0,
          o = 1,
          g = l[0] - u,
          c = l[1] - a;

      if (n = r - u, g || !(n > 0)) {
        if (n /= g, g < 0) {
          if (n < d) return;
          n < o && (o = n);
        } else if (g > 0) {
          if (n > o) return;
          n > d && (d = n);
        }

        if (n = f - u, g || !(n < 0)) {
          if (n /= g, g < 0) {
            if (n > o) return;
            n > d && (d = n);
          } else if (g > 0) {
            if (n < d) return;
            n < o && (o = n);
          }

          if (n = i - a, c || !(n > 0)) {
            if (n /= c, c < 0) {
              if (n < d) return;
              n < o && (o = n);
            } else if (c > 0) {
              if (n > o) return;
              n > d && (d = n);
            }

            if (n = t - a, c || !(n < 0)) {
              if (n /= c, c < 0) {
                if (n > o) return;
                n > d && (d = n);
              } else if (c > 0) {
                if (n < d) return;
                n < o && (o = n);
              }

              return !(d > 0 || o < 1) || (d > 0 && (e[0] = [u + d * g, a + d * c]), o < 1 && (e[1] = [u + o * g, a + o * c]), !0);
            }
          }
        }
      }
    }

    function n(e, r, i, f, t) {
      var n = e[1];
      if (n) return !0;
      var s,
          l,
          u = e[0],
          a = e.left,
          d = e.right,
          o = a[0],
          g = a[1],
          c = d[0],
          p = d[1],
          h = (o + c) / 2,
          v = (g + p) / 2;

      if (p === g) {
        if (h < r || h >= f) return;

        if (o > c) {
          if (u) {
            if (u[1] >= t) return;
          } else u = [h, i];

          n = [h, t];
        } else {
          if (u) {
            if (u[1] < i) return;
          } else u = [h, t];

          n = [h, i];
        }
      } else if (l = v - (s = (o - c) / (p - g)) * h, s < -1 || s > 1) {
        if (o > c) {
          if (u) {
            if (u[1] >= t) return;
          } else u = [(i - l) / s, i];

          n = [(t - l) / s, t];
        } else {
          if (u) {
            if (u[1] < i) return;
          } else u = [(t - l) / s, t];

          n = [(i - l) / s, i];
        }
      } else if (g < p) {
        if (u) {
          if (u[0] >= f) return;
        } else u = [r, s * r + l];

        n = [f, s * f + l];
      } else {
        if (u) {
          if (u[0] < r) return;
        } else u = [f, s * f + l];

        n = [r, s * r + l];
      }

      return e[0] = u, e[1] = n, !0;
    }

    function s(r, i, f, s) {
      for (var l, u = e.edges.length; u--;) {
        n(l = e.edges[u], r, i, f, s) && t(l, r, i, f, s) && (Math.abs(l[0][0] - l[1][0]) > e.epsilon || Math.abs(l[0][1] - l[1][1]) > e.epsilon) || delete e.edges[u];
      }
    }
  }, {
    "./Diagram": "Jn8D"
  }],
  "8zWB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createCell = l, exports.cellHalfedgeStart = t, exports.cellHalfedgeEnd = a, exports.sortCellHalfedges = n, exports.clipCells = o;

    var e = require("./Edge"),
        s = require("./Diagram");

    function l(e) {
      return s.cells[e.index] = {
        site: e,
        halfedges: []
      };
    }

    function r(e, s) {
      var l = e.site,
          r = s.left,
          t = s.right;
      return l === t && (t = r, r = l), t ? Math.atan2(t[1] - r[1], t[0] - r[0]) : (l === r ? (r = s[1], t = s[0]) : (r = s[0], t = s[1]), Math.atan2(r[0] - t[0], t[1] - r[1]));
    }

    function t(e, s) {
      return s[+(s.left !== e.site)];
    }

    function a(e, s) {
      return s[+(s.left === e.site)];
    }

    function n() {
      for (var e, l, t, a, n = 0, o = s.cells.length; n < o; ++n) {
        if ((e = s.cells[n]) && (a = (l = e.halfedges).length)) {
          var i = new Array(a),
              d = new Array(a);

          for (t = 0; t < a; ++t) {
            i[t] = t, d[t] = r(e, s.edges[l[t]]);
          }

          for (i.sort(function (e, s) {
            return d[s] - d[e];
          }), t = 0; t < a; ++t) {
            d[t] = l[i[t]];
          }

          for (t = 0; t < a; ++t) {
            l[t] = d[t];
          }
        }
      }
    }

    function o(l, r, n, o) {
      var i,
          d,
          f,
          g,
          h,
          p,
          c,
          u,
          M,
          b,
          v,
          x,
          E = s.cells.length,
          B = !0;

      for (i = 0; i < E; ++i) {
        if (d = s.cells[i]) {
          for (f = d.site, g = (h = d.halfedges).length; g--;) {
            s.edges[h[g]] || h.splice(g, 1);
          }

          for (g = 0, p = h.length; g < p;) {
            v = (b = a(d, s.edges[h[g]]))[0], x = b[1], u = (c = t(d, s.edges[h[++g % p]]))[0], M = c[1], (Math.abs(v - u) > s.epsilon || Math.abs(x - M) > s.epsilon) && (h.splice(g, 0, s.edges.push((0, e.createBorderEdge)(f, b, Math.abs(v - l) < s.epsilon && o - x > s.epsilon ? [l, Math.abs(u - l) < s.epsilon ? M : o] : Math.abs(x - o) < s.epsilon && n - v > s.epsilon ? [Math.abs(M - o) < s.epsilon ? u : n, o] : Math.abs(v - n) < s.epsilon && x - r > s.epsilon ? [n, Math.abs(u - n) < s.epsilon ? M : r] : Math.abs(x - r) < s.epsilon && v - l > s.epsilon ? [Math.abs(M - r) < s.epsilon ? u : l, r] : null)) - 1), ++p);
          }

          p && (B = !1);
        }
      }

      if (B) {
        var y,
            C,
            H,
            q = 1 / 0;

        for (i = 0, B = null; i < E; ++i) {
          (d = s.cells[i]) && (H = (y = (f = d.site)[0] - l) * y + (C = f[1] - r) * C) < q && (q = H, B = d);
        }

        if (B) {
          var w = [l, r],
              A = [l, o],
              _ = [n, o],
              j = [n, r];
          B.halfedges.push(s.edges.push((0, e.createBorderEdge)(f = B.site, w, A)) - 1, s.edges.push((0, e.createBorderEdge)(f, A, _)) - 1, s.edges.push((0, e.createBorderEdge)(f, _, j)) - 1, s.edges.push((0, e.createBorderEdge)(f, j, w)) - 1);
        }
      }

      for (i = 0; i < E; ++i) {
        (d = s.cells[i]) && (d.halfedges.length || delete s.cells[i]);
      }
    }
  }, {
    "./Edge": "7Tkp",
    "./Diagram": "Jn8D"
  }],
  "Hzn+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.attachCircle = c, exports.detachCircle = l, exports.firstCircle = void 0;

    var e,
        r = require("./RedBlackTree"),
        i = require("./Diagram"),
        t = [];

    function s() {
      (0, r.RedBlackNode)(this), this.x = this.y = this.arc = this.site = this.cy = null;
    }

    function c(r) {
      var c = r.P,
          l = r.N;

      if (c && l) {
        var a = c.site,
            o = r.site,
            f = l.site;

        if (a !== f) {
          var n = o[0],
              p = o[1],
              u = a[0] - n,
              x = a[1] - p,
              h = f[0] - n,
              v = f[1] - p,
              d = 2 * (u * v - x * h);

          if (!(d >= -i.epsilon2)) {
            var y = u * u + x * x,
                C = h * h + v * v,
                k = (v * y - x * C) / d,
                R = (u * C - h * y) / d,
                N = t.pop() || new s();
            N.arc = r, N.site = o, N.x = k + n, N.y = (N.cy = R + p) + Math.sqrt(k * k + R * R), r.circle = N;

            for (var P = null, b = i.circles._; b;) {
              if (N.y < b.y || N.y === b.y && N.x <= b.x) {
                if (!b.L) {
                  P = b.P;
                  break;
                }

                b = b.L;
              } else {
                if (!b.R) {
                  P = b;
                  break;
                }

                b = b.R;
              }
            }

            i.circles.insert(P, N), P || (exports.firstCircle = e = N);
          }
        }
      }
    }

    function l(s) {
      var c = s.circle;
      c && (c.P || (exports.firstCircle = e = c.N), i.circles.remove(c), t.push(c), (0, r.RedBlackNode)(c), s.circle = null);
    }

    exports.firstCircle = e;
  }, {
    "./RedBlackTree": "cyhV",
    "./Diagram": "Jn8D"
  }],
  "vrdo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.removeBeach = d, exports.addBeach = h;

    var e = require("./RedBlackTree"),
        r = require("./Cell"),
        i = require("./Circle"),
        t = require("./Edge"),
        c = require("./Diagram"),
        a = [];

    function s() {
      (0, e.RedBlackNode)(this), this.edge = this.site = this.circle = null;
    }

    function l(e) {
      var r = a.pop() || new s();
      return r.site = e, r;
    }

    function n(r) {
      (0, i.detachCircle)(r), c.beaches.remove(r), a.push(r), (0, e.RedBlackNode)(r);
    }

    function d(e) {
      var r = e.circle,
          a = r.x,
          s = r.cy,
          l = [a, s],
          d = e.P,
          h = e.N,
          u = [e];
      n(e);

      for (var o = d; o.circle && Math.abs(a - o.circle.x) < c.epsilon && Math.abs(s - o.circle.cy) < c.epsilon;) {
        d = o.P, u.unshift(o), n(o), o = d;
      }

      u.unshift(o), (0, i.detachCircle)(o);

      for (var f = h; f.circle && Math.abs(a - f.circle.x) < c.epsilon && Math.abs(s - f.circle.cy) < c.epsilon;) {
        h = f.N, u.push(f), n(f), f = h;
      }

      u.push(f), (0, i.detachCircle)(f);
      var g,
          v = u.length;

      for (g = 1; g < v; ++g) {
        f = u[g], o = u[g - 1], (0, t.setEdgeEnd)(f.edge, o.site, f.site, l);
      }

      o = u[0], (f = u[v - 1]).edge = (0, t.createEdge)(o.site, f.site, null, l), (0, i.attachCircle)(o), (0, i.attachCircle)(f);
    }

    function h(e) {
      for (var a, s, n, d, h = e[0], f = e[1], g = c.beaches._; g;) {
        if ((n = u(g, f) - h) > c.epsilon) g = g.L;else {
          if (!((d = h - o(g, f)) > c.epsilon)) {
            n > -c.epsilon ? (a = g.P, s = g) : d > -c.epsilon ? (a = g, s = g.N) : a = s = g;
            break;
          }

          if (!g.R) {
            a = g;
            break;
          }

          g = g.R;
        }
      }

      (0, r.createCell)(e);
      var v = l(e);

      if (c.beaches.insert(a, v), a || s) {
        if (a === s) return (0, i.detachCircle)(a), s = l(a.site), c.beaches.insert(v, s), v.edge = s.edge = (0, t.createEdge)(a.site, v.site), (0, i.attachCircle)(a), void (0, i.attachCircle)(s);

        if (s) {
          (0, i.detachCircle)(a), (0, i.detachCircle)(s);
          var p = a.site,
              C = p[0],
              b = p[1],
              E = e[0] - C,
              q = e[1] - b,
              x = s.site,
              M = x[0] - C,
              N = x[1] - b,
              k = 2 * (E * N - q * M),
              B = E * E + q * q,
              P = M * M + N * N,
              R = [(N * B - q * P) / k + C, (E * P - M * B) / k + b];
          (0, t.setEdgeEnd)(s.edge, p, x, R), v.edge = (0, t.createEdge)(p, e, null, R), s.edge = (0, t.createEdge)(e, x, null, R), (0, i.attachCircle)(a), (0, i.attachCircle)(s);
        } else v.edge = (0, t.createEdge)(a.site, v.site);
      }
    }

    function u(e, r) {
      var i = e.site,
          t = i[0],
          c = i[1],
          a = c - r;
      if (!a) return t;
      var s = e.P;
      if (!s) return -1 / 0;
      var l = (i = s.site)[0],
          n = i[1],
          d = n - r;
      if (!d) return l;
      var h = l - t,
          u = 1 / a - 1 / d,
          o = h / d;
      return u ? (-o + Math.sqrt(o * o - 2 * u * (h * h / (-2 * d) - n + d / 2 + c - a / 2))) / u + t : (t + l) / 2;
    }

    function o(e, r) {
      var i = e.N;
      if (i) return u(i, r);
      var t = e.site;
      return t[1] === r ? t[0] : 1 / 0;
    }
  }, {
    "./RedBlackTree": "cyhV",
    "./Cell": "8zWB",
    "./Circle": "Hzn+",
    "./Edge": "7Tkp",
    "./Diagram": "Jn8D"
  }],
  "Jn8D": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = h, exports.edges = exports.circles = exports.cells = exports.beaches = exports.epsilon2 = exports.epsilon = void 0;

    var e = require("./Beach"),
        r = require("./Cell"),
        t = require("./Circle"),
        s = require("./Edge"),
        l = i(require("./RedBlackTree"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = 1e-6;
    exports.epsilon = n;
    var o,
        a,
        c,
        u,
        f = 1e-12;

    function d(e, r, t) {
      return (e[0] - t[0]) * (r[1] - e[1]) - (e[0] - r[0]) * (t[1] - e[1]);
    }

    function p(e, r) {
      return r[1] - e[1] || r[0] - e[0];
    }

    function h(i, n) {
      var f,
          d,
          h,
          g = i.sort(p).pop();

      for (exports.edges = u = [], exports.cells = a = new Array(i.length), exports.beaches = o = new l.default(), exports.circles = c = new l.default();;) {
        if (h = t.firstCircle, g && (!h || g[1] < h.y || g[1] === h.y && g[0] < h.x)) g[0] === f && g[1] === d || ((0, e.addBeach)(g), f = g[0], d = g[1]), g = i.pop();else {
          if (!h) break;
          (0, e.removeBeach)(h.arc);
        }
      }

      if ((0, r.sortCellHalfedges)(), n) {
        var x = +n[0][0],
            v = +n[0][1],
            b = +n[1][0],
            y = +n[1][1];
        (0, s.clipEdges)(x, v, b, y), (0, r.clipCells)(x, v, b, y);
      }

      this.edges = u, this.cells = a, exports.beaches = o = exports.circles = c = exports.edges = u = exports.cells = a = null;
    }

    exports.epsilon2 = f, exports.beaches = o, exports.cells = a, exports.circles = c, exports.edges = u, h.prototype = {
      constructor: h,
      polygons: function polygons() {
        var e = this.edges;
        return this.cells.map(function (t) {
          var s = t.halfedges.map(function (s) {
            return (0, r.cellHalfedgeStart)(t, e[s]);
          });
          return s.data = t.site.data, s;
        });
      },
      triangles: function triangles() {
        var e = [],
            r = this.edges;
        return this.cells.forEach(function (t, s) {
          if (i = (l = t.halfedges).length) for (var l, i, n, o = t.site, a = -1, c = r[l[i - 1]], u = c.left === o ? c.right : c.left; ++a < i;) {
            n = u, u = (c = r[l[a]]).left === o ? c.right : c.left, n && u && s < n.index && s < u.index && d(o, n, u) < 0 && e.push([o.data, n.data, u.data]);
          }
        }), e;
      },
      links: function links() {
        return this.edges.filter(function (e) {
          return e.right;
        }).map(function (e) {
          return {
            source: e.left.data,
            target: e.right.data
          };
        });
      },
      find: function find(e, r, t) {
        for (var s, l, i = this, n = i._found || 0, o = i.cells.length; !(l = i.cells[n]);) {
          if (++n >= o) return null;
        }

        var a = e - l.site[0],
            c = r - l.site[1],
            u = a * a + c * c;

        do {
          l = i.cells[s = n], n = null, l.halfedges.forEach(function (t) {
            var s = i.edges[t],
                o = s.left;

            if (o !== l.site && o || (o = s.right)) {
              var a = e - o[0],
                  c = r - o[1],
                  f = a * a + c * c;
              f < u && (u = f, n = o.index);
            }
          });
        } while (null !== n);

        return i._found = s, null == t || u <= t * t ? l.site : null;
      }
    };
  }, {
    "./Beach": "vrdo",
    "./Cell": "8zWB",
    "./Circle": "Hzn+",
    "./Edge": "7Tkp",
    "./RedBlackTree": "cyhV"
  }],
  "rzeD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = u(require("./constant")),
        n = require("./point"),
        t = r(require("./Diagram"));

    function r(e) {
      if (e && e.__esModule) return e;
      var n = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          r.get || r.set ? Object.defineProperty(n, t, r) : n[t] = e[t];
        }
      }
      return n.default = e, n;
    }

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o() {
      var r = n.x,
          u = n.y,
          o = null;

      function i(e) {
        return new t.default(e.map(function (n, o) {
          var i = [Math.round(r(n, o, e) / t.epsilon) * t.epsilon, Math.round(u(n, o, e) / t.epsilon) * t.epsilon];
          return i.index = o, i.data = n, i;
        }), o);
      }

      return i.polygons = function (e) {
        return i(e).polygons();
      }, i.links = function (e) {
        return i(e).links();
      }, i.triangles = function (e) {
        return i(e).triangles();
      }, i.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), i) : r;
      }, i.y = function (n) {
        return arguments.length ? (u = "function" == typeof n ? n : (0, e.default)(+n), i) : u;
      }, i.extent = function (e) {
        return arguments.length ? (o = null == e ? null : [[+e[0][0], +e[0][1]], [+e[1][0], +e[1][1]]], i) : o && [[o[0][0], o[0][1]], [o[1][0], o[1][1]]];
      }, i.size = function (e) {
        return arguments.length ? (o = null == e ? null : [[0, 0], [+e[0], +e[1]]], i) : o && [o[1][0] - o[0][0], o[1][1] - o[0][1]];
      }, i;
    }
  }, {
    "./constant": "5O/Y",
    "./point": "aLIe",
    "./Diagram": "Jn8D"
  }],
  "AKDj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "voronoi", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = r(require("./voronoi"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./voronoi": "rzeD"
  }],
  "pmu8": [function (require, module, exports) {
    "use strict";

    function t(t, e, s) {
      this.target = t, this.type = e, this.transform = s;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "RGu5": [function (require, module, exports) {
    "use strict";

    function t(t, i, n) {
      this.k = t, this.x = i, this.y = n;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Transform = t, exports.default = n, exports.identity = void 0, t.prototype = {
      constructor: t,
      scale: function scale(i) {
        return 1 === i ? this : new t(this.k * i, this.x, this.y);
      },
      translate: function translate(i, n) {
        return 0 === i & 0 === n ? this : new t(this.k, this.x + this.k * i, this.y + this.k * n);
      },
      apply: function apply(t) {
        return [t[0] * this.k + this.x, t[1] * this.k + this.y];
      },
      applyX: function applyX(t) {
        return t * this.k + this.x;
      },
      applyY: function applyY(t) {
        return t * this.k + this.y;
      },
      invert: function invert(t) {
        return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
      },
      invertX: function invertX(t) {
        return (t - this.x) / this.k;
      },
      invertY: function invertY(t) {
        return (t - this.y) / this.k;
      },
      rescaleX: function rescaleX(t) {
        return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
      },
      rescaleY: function rescaleY(t) {
        return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
      },
      toString: function toString() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
      }
    };
    var i = new t(1, 0, 0);

    function n(t) {
      return t.__zoom || i;
    }

    exports.identity = i, n.prototype = t.prototype;
  }, {}],
  "T0tZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = y;

    var t = require("d3-dispatch"),
        e = require("d3-drag"),
        n = require("d3-interpolate"),
        o = require("d3-selection"),
        i = require("d3-transition"),
        r = a(require("./constant")),
        u = a(require("./event")),
        h = require("./transform"),
        s = c(require("./noevent"));

    function c(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
          o.get || o.set ? Object.defineProperty(e, n, o) : e[n] = t[n];
        }
      }
      return e.default = t, e;
    }

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function l() {
      return !o.event.button;
    }

    function f() {
      var t,
          e,
          n = this;
      return n instanceof SVGElement ? (t = (n = n.ownerSVGElement || n).width.baseVal.value, e = n.height.baseVal.value) : (t = n.clientWidth, e = n.clientHeight), [[0, 0], [t, e]];
    }

    function m() {
      return this.__zoom || h.identity;
    }

    function p() {
      return -o.event.deltaY * (o.event.deltaMode ? 120 : 1) / 500;
    }

    function d() {
      return "ontouchstart" in this;
    }

    function v(t, e, n) {
      var o = t.invertX(e[0][0]) - n[0][0],
          i = t.invertX(e[1][0]) - n[1][0],
          r = t.invertY(e[0][1]) - n[0][1],
          u = t.invertY(e[1][1]) - n[1][1];
      return t.translate(i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i), u > r ? (r + u) / 2 : Math.min(0, r) || Math.max(0, u));
    }

    function y() {
      var c,
          a,
          y = l,
          z = f,
          _ = v,
          g = p,
          w = d,
          x = [0, 1 / 0],
          b = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
          M = 250,
          T = n.interpolateZoom,
          k = [],
          q = (0, t.dispatch)("start", "zoom", "end"),
          O = 500,
          j = 150,
          E = 0;

      function P(t) {
        t.property("__zoom", m).on("wheel.zoom", S).on("mousedown.zoom", H).on("dblclick.zoom", K).filter(w).on("touchstart.zoom", W).on("touchmove.zoom", Z).on("touchend.zoom touchcancel.zoom", A).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }

      function D(t, e) {
        return (e = Math.max(x[0], Math.min(x[1], e))) === t.k ? t : new h.Transform(e, t.x, t.y);
      }

      function Y(t, e, n) {
        var o = e[0] - n[0] * t.k,
            i = e[1] - n[1] * t.k;
        return o === t.x && i === t.y ? t : new h.Transform(t.k, o, i);
      }

      function V(t) {
        return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
      }

      function X(t, e, n) {
        t.on("start.zoom", function () {
          B(this, arguments).start();
        }).on("interrupt.zoom end.zoom", function () {
          B(this, arguments).end();
        }).tween("zoom", function () {
          var t = arguments,
              o = B(this, t),
              i = z.apply(this, t),
              r = n || V(i),
              u = Math.max(i[1][0] - i[0][0], i[1][1] - i[0][1]),
              s = this.__zoom,
              c = "function" == typeof e ? e.apply(this, t) : e,
              a = T(s.invert(r).concat(u / s.k), c.invert(r).concat(u / c.k));
          return function (t) {
            if (1 === t) t = c;else {
              var e = a(t),
                  n = u / e[2];
              t = new h.Transform(n, r[0] - e[0] * n, r[1] - e[1] * n);
            }
            o.zoom(null, t);
          };
        });
      }

      function B(t, e) {
        for (var n, o = 0, i = k.length; o < i; ++o) {
          if ((n = k[o]).that === t) return n;
        }

        return new G(t, e);
      }

      function G(t, e) {
        this.that = t, this.args = e, this.index = -1, this.active = 0, this.extent = z.apply(t, e);
      }

      function S() {
        if (y.apply(this, arguments)) {
          var t = B(this, arguments),
              e = this.__zoom,
              n = Math.max(x[0], Math.min(x[1], e.k * Math.pow(2, g.apply(this, arguments)))),
              r = (0, o.mouse)(this);
          if (t.wheel) t.mouse[0][0] === r[0] && t.mouse[0][1] === r[1] || (t.mouse[1] = e.invert(t.mouse[0] = r)), clearTimeout(t.wheel);else {
            if (e.k === n) return;
            t.mouse = [r, e.invert(r)], (0, i.interrupt)(this), t.start();
          }
          (0, s.default)(), t.wheel = setTimeout(function () {
            t.wheel = null, t.end();
          }, j), t.zoom("mouse", _(Y(D(e, n), t.mouse[0], t.mouse[1]), t.extent, b));
        }
      }

      function H() {
        if (!a && y.apply(this, arguments)) {
          var t = B(this, arguments),
              n = (0, o.select)(o.event.view).on("mousemove.zoom", function () {
            if ((0, s.default)(), !t.moved) {
              var e = o.event.clientX - u,
                  n = o.event.clientY - h;
              t.moved = e * e + n * n > E;
            }

            t.zoom("mouse", _(Y(t.that.__zoom, t.mouse[0] = (0, o.mouse)(t.that), t.mouse[1]), t.extent, b));
          }, !0).on("mouseup.zoom", function () {
            n.on("mousemove.zoom mouseup.zoom", null), (0, e.dragEnable)(o.event.view, t.moved), (0, s.default)(), t.end();
          }, !0),
              r = (0, o.mouse)(this),
              u = o.event.clientX,
              h = o.event.clientY;
          (0, e.dragDisable)(o.event.view), (0, s.nopropagation)(), t.mouse = [r, this.__zoom.invert(r)], (0, i.interrupt)(this), t.start();
        }
      }

      function K() {
        if (y.apply(this, arguments)) {
          var t = this.__zoom,
              e = (0, o.mouse)(this),
              n = t.invert(e),
              i = t.k * (o.event.shiftKey ? .5 : 2),
              r = _(Y(D(t, i), e, n), z.apply(this, arguments), b);

          (0, s.default)(), M > 0 ? (0, o.select)(this).transition().duration(M).call(X, r, e) : (0, o.select)(this).call(P.transform, r);
        }
      }

      function W() {
        if (y.apply(this, arguments)) {
          var t,
              e,
              n,
              r,
              u = B(this, arguments),
              h = o.event.changedTouches,
              a = h.length;

          for ((0, s.nopropagation)(), e = 0; e < a; ++e) {
            n = h[e], r = [r = (0, o.touch)(this, h, n.identifier), this.__zoom.invert(r), n.identifier], u.touch0 ? u.touch1 || (u.touch1 = r) : (u.touch0 = r, t = !0);
          }

          if (c && (c = clearTimeout(c), !u.touch1)) return u.end(), void ((r = (0, o.select)(this).on("dblclick.zoom")) && r.apply(this, arguments));
          t && (c = setTimeout(function () {
            c = null;
          }, O), (0, i.interrupt)(this), u.start());
        }
      }

      function Z() {
        var t,
            e,
            n,
            i,
            r = B(this, arguments),
            u = o.event.changedTouches,
            h = u.length;

        for ((0, s.default)(), c && (c = clearTimeout(c)), t = 0; t < h; ++t) {
          e = u[t], n = (0, o.touch)(this, u, e.identifier), r.touch0 && r.touch0[2] === e.identifier ? r.touch0[0] = n : r.touch1 && r.touch1[2] === e.identifier && (r.touch1[0] = n);
        }

        if (e = r.that.__zoom, r.touch1) {
          var a = r.touch0[0],
              l = r.touch0[1],
              f = r.touch1[0],
              m = r.touch1[1],
              p = (p = f[0] - a[0]) * p + (p = f[1] - a[1]) * p,
              d = (d = m[0] - l[0]) * d + (d = m[1] - l[1]) * d;
          e = D(e, Math.sqrt(p / d)), n = [(a[0] + f[0]) / 2, (a[1] + f[1]) / 2], i = [(l[0] + m[0]) / 2, (l[1] + m[1]) / 2];
        } else {
          if (!r.touch0) return;
          n = r.touch0[0], i = r.touch0[1];
        }

        r.zoom("touch", _(Y(e, n, i), r.extent, b));
      }

      function A() {
        var t,
            e,
            n = B(this, arguments),
            i = o.event.changedTouches,
            r = i.length;

        for ((0, s.nopropagation)(), a && clearTimeout(a), a = setTimeout(function () {
          a = null;
        }, O), t = 0; t < r; ++t) {
          e = i[t], n.touch0 && n.touch0[2] === e.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === e.identifier && delete n.touch1;
        }

        n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0 ? n.touch0[1] = this.__zoom.invert(n.touch0[0]) : n.end();
      }

      return P.transform = function (t, e) {
        var n = t.selection ? t.selection() : t;
        n.property("__zoom", m), t !== n ? X(t, e) : n.interrupt().each(function () {
          B(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end();
        });
      }, P.scaleBy = function (t, e) {
        P.scaleTo(t, function () {
          return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
        });
      }, P.scaleTo = function (t, e) {
        P.transform(t, function () {
          var t = z.apply(this, arguments),
              n = this.__zoom,
              o = V(t),
              i = n.invert(o),
              r = "function" == typeof e ? e.apply(this, arguments) : e;
          return _(Y(D(n, r), o, i), t, b);
        });
      }, P.translateBy = function (t, e, n) {
        P.transform(t, function () {
          return _(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), z.apply(this, arguments), b);
        });
      }, P.translateTo = function (t, e, n) {
        P.transform(t, function () {
          var t = z.apply(this, arguments),
              o = this.__zoom,
              i = V(t);
          return _(h.identity.translate(i[0], i[1]).scale(o.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof n ? -n.apply(this, arguments) : -n), t, b);
        });
      }, G.prototype = {
        start: function start() {
          return 1 == ++this.active && (this.index = k.push(this) - 1, this.emit("start")), this;
        },
        zoom: function zoom(t, e) {
          return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this;
        },
        end: function end() {
          return 0 == --this.active && (k.splice(this.index, 1), this.index = -1, this.emit("end")), this;
        },
        emit: function emit(t) {
          (0, o.customEvent)(new u.default(P, t, this.that.__zoom), q.apply, q, [t, this.that, this.args]);
        }
      }, P.wheelDelta = function (t) {
        return arguments.length ? (g = "function" == typeof t ? t : (0, r.default)(+t), P) : g;
      }, P.filter = function (t) {
        return arguments.length ? (y = "function" == typeof t ? t : (0, r.default)(!!t), P) : y;
      }, P.touchable = function (t) {
        return arguments.length ? (w = "function" == typeof t ? t : (0, r.default)(!!t), P) : w;
      }, P.extent = function (t) {
        return arguments.length ? (z = "function" == typeof t ? t : (0, r.default)([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), P) : z;
      }, P.scaleExtent = function (t) {
        return arguments.length ? (x[0] = +t[0], x[1] = +t[1], P) : [x[0], x[1]];
      }, P.translateExtent = function (t) {
        return arguments.length ? (b[0][0] = +t[0][0], b[1][0] = +t[1][0], b[0][1] = +t[0][1], b[1][1] = +t[1][1], P) : [[b[0][0], b[0][1]], [b[1][0], b[1][1]]];
      }, P.constrain = function (t) {
        return arguments.length ? (_ = t, P) : _;
      }, P.duration = function (t) {
        return arguments.length ? (M = +t, P) : M;
      }, P.interpolate = function (t) {
        return arguments.length ? (T = t, P) : T;
      }, P.on = function () {
        var t = q.on.apply(q, arguments);
        return t === q ? P : t;
      }, P.clickDistance = function (t) {
        return arguments.length ? (E = (t = +t) * t, P) : Math.sqrt(E);
      }, P;
    }
  }, {
    "d3-dispatch": "UU/c",
    "d3-drag": "LrBi",
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "./constant": "5O/Y",
    "./event": "pmu8",
    "./transform": "RGu5",
    "./noevent": "DCEg"
  }],
  "uzwd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "zoom", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "zoomTransform", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "zoomIdentity", {
      enumerable: !0,
      get: function get() {
        return r.identity;
      }
    });
    var e = o(require("./zoom")),
        r = t(require("./transform"));

    function t(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          o.get || o.set ? Object.defineProperty(r, t, o) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./zoom": "T0tZ",
    "./transform": "RGu5"
  }],
  "BG5c": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var e = {
      version: !0
    };
    Object.defineProperty(exports, "version", {
      enumerable: !0,
      get: function get() {
        return r.version;
      }
    });

    var r = require("./dist/package"),
        t = require("d3-array");

    Object.keys(t).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      }));
    });

    var o = require("d3-axis");

    Object.keys(o).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return o[r];
        }
      }));
    });

    var n = require("d3-brush");

    Object.keys(n).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return n[r];
        }
      }));
    });

    var c = require("d3-chord");

    Object.keys(c).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return c[r];
        }
      }));
    });

    var u = require("d3-collection");

    Object.keys(u).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return u[r];
        }
      }));
    });

    var a = require("d3-color");

    Object.keys(a).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return a[r];
        }
      }));
    });

    var l = require("d3-contour");

    Object.keys(l).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return l[r];
        }
      }));
    });

    var p = require("d3-dispatch");

    Object.keys(p).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return p[r];
        }
      }));
    });

    var f = require("d3-drag");

    Object.keys(f).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return f[r];
        }
      }));
    });

    var i = require("d3-dsv");

    Object.keys(i).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return i[r];
        }
      }));
    });

    var s = require("d3-ease");

    Object.keys(s).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return s[r];
        }
      }));
    });

    var d = require("d3-fetch");

    Object.keys(d).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return d[r];
        }
      }));
    });

    var y = require("d3-force");

    Object.keys(y).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return y[r];
        }
      }));
    });

    var b = require("d3-format");

    Object.keys(b).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return b[r];
        }
      }));
    });

    var O = require("d3-geo");

    Object.keys(O).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return O[r];
        }
      }));
    });

    var j = require("d3-hierarchy");

    Object.keys(j).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return j[r];
        }
      }));
    });

    var h = require("d3-interpolate");

    Object.keys(h).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return h[r];
        }
      }));
    });

    var P = require("d3-path");

    Object.keys(P).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return P[r];
        }
      }));
    });

    var _ = require("d3-polygon");

    Object.keys(_).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return _[r];
        }
      }));
    });

    var m = require("d3-quadtree");

    Object.keys(m).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return m[r];
        }
      }));
    });

    var v = require("d3-random");

    Object.keys(v).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return v[r];
        }
      }));
    });

    var g = require("d3-scale");

    Object.keys(g).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return g[r];
        }
      }));
    });

    var x = require("d3-scale-chromatic");

    Object.keys(x).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return x[r];
        }
      }));
    });

    var q = require("d3-selection");

    Object.keys(q).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return q[r];
        }
      }));
    });

    var k = require("d3-shape");

    Object.keys(k).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return k[r];
        }
      }));
    });

    var M = require("d3-time");

    Object.keys(M).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return M[r];
        }
      }));
    });

    var w = require("d3-time-format");

    Object.keys(w).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return w[r];
        }
      }));
    });

    var E = require("d3-timer");

    Object.keys(E).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return E[r];
        }
      }));
    });

    var z = require("d3-transition");

    Object.keys(z).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return z[r];
        }
      }));
    });

    var A = require("d3-voronoi");

    Object.keys(A).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return A[r];
        }
      }));
    });

    var B = require("d3-zoom");

    Object.keys(B).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return B[r];
        }
      }));
    });
  }, {
    "./dist/package": "hADF",
    "d3-array": "cBuZ",
    "d3-axis": "y9Kr",
    "d3-brush": "TNt0",
    "d3-chord": "cf1+",
    "d3-collection": "qqV1",
    "d3-color": "4TJ2",
    "d3-contour": "cfrl",
    "d3-dispatch": "UU/c",
    "d3-drag": "LrBi",
    "d3-dsv": "mQVF",
    "d3-ease": "CFyW",
    "d3-fetch": "hNko",
    "d3-force": "YpA1",
    "d3-format": "4gWe",
    "d3-geo": "LMxt",
    "d3-hierarchy": "wNQE",
    "d3-interpolate": "mkGF",
    "d3-path": "dz42",
    "d3-polygon": "QnuL",
    "d3-quadtree": "oxc3",
    "d3-random": "4WQ4",
    "d3-scale": "zt+a",
    "d3-scale-chromatic": "zd6o",
    "d3-selection": "lm1C",
    "d3-shape": "pW+U",
    "d3-time": "F00f",
    "d3-time-format": "+7zs",
    "d3-timer": "CBES",
    "d3-transition": "Fcbi",
    "d3-voronoi": "AKDj",
    "d3-zoom": "uzwd"
  }],
  "Y3IL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./namespaces"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r += "",
          s = t.indexOf(":");
      return s >= 0 && "xmlns" !== (t = r.slice(0, s)) && (r = r.slice(s + 1)), e.default.hasOwnProperty(t) ? {
        space: e.default[t],
        local: r
      } : r;
    }
  }, {
    "./namespaces": "UzOB"
  }],
  "uDIf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = n(require("./namespace")),
        t = require("./namespaces");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return function () {
        var n = this.ownerDocument,
            r = this.namespaceURI;
        return r === t.xhtml && n.documentElement.namespaceURI === t.xhtml ? n.createElement(e) : n.createElementNS(r, e);
      };
    }

    function u(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local);
      };
    }

    function a(t) {
      var n = (0, e.default)(t);
      return (n.local ? u : r)(n);
    }
  }, {
    "./namespace": "Y3IL",
    "./namespaces": "UzOB"
  }],
  "scm0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = function e(_e) {
      return function () {
        return this.matches(_e);
      };
    };

    if ("undefined" != typeof document) {
      var t = document.documentElement;

      if (!t.matches) {
        var r = t.webkitMatchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector;

        e = function e(_e2) {
          return function () {
            return r.call(this, _e2);
          };
        };
      }
    }

    var c = e;
    exports.default = c;
  }, {}],
  "RRx8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./selection/on");

    function r() {
      for (var r, t = e.event; r = t.sourceEvent;) {
        t = r;
      }

      return t;
    }
  }, {
    "./selection/on": "j4rF"
  }],
  "gatq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./sourceEvent")),
        u = r(require("./point"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = (0, e.default)();
      return t.changedTouches && (t = t.changedTouches[0]), (0, u.default)(r, t);
    }
  }, {
    "./sourceEvent": "RRx8",
    "./point": "9ZIl"
  }],
  "OA2k": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var e = require("./index"),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function _(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var _ = this._groups, a = _.length, n = new Array(a), u = 0; u < a; ++u) {
        for (var o, i, l = _[u], d = l.length, s = n[u] = new Array(d), f = 0; f < d; ++f) {
          (o = l[f]) && (i = r.call(o, o.__data__, f, l)) && ("__data__" in o && (i.__data__ = o.__data__), s[f] = i);
        }
      }

      return new e.Selection(n, this._parents);
    }
  }, {
    "./index": "o90z",
    "../selector": "xs2I"
  }],
  "mJon": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("./index"),
        t = r(require("../selectorAll"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var u = this._groups, l = u.length, n = [], o = [], s = 0; s < l; ++s) {
        for (var a, f = u[s], i = f.length, _ = 0; _ < i; ++_) {
          (a = f[_]) && (n.push(r.call(a, a.__data__, _, f)), o.push(a));
        }
      }

      return new e.Selection(n, o);
    }
  }, {
    "./index": "o90z",
    "../selectorAll": "+mHY"
  }],
  "vN4q": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var e = require("./index"),
        r = t(require("../matcher"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t) {
      "function" != typeof t && (t = (0, r.default)(t));

      for (var n = this._groups, u = n.length, a = new Array(u), o = 0; o < u; ++o) {
        for (var i, l = n[o], s = l.length, f = a[o] = [], _ = 0; _ < s; ++_) {
          (i = l[_]) && t.call(i, i.__data__, _, l) && f.push(i);
        }
      }

      return new e.Selection(a, this._parents);
    }
  }, {
    "./index": "o90z",
    "../matcher": "scm0"
  }],
  "JatU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.EnterNode = o;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      return new t.Selection(this._enter || this._groups.map(e.default), this._parents);
    }

    function o(e, t) {
      this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
    }

    o.prototype = {
      constructor: o,
      appendChild: function appendChild(e) {
        return this._parent.insertBefore(e, this._next);
      },
      insertBefore: function insertBefore(e, t) {
        return this._parent.insertBefore(e, t);
      },
      querySelector: function querySelector(e) {
        return this._parent.querySelector(e);
      },
      querySelectorAll: function querySelectorAll(e) {
        return this._parent.querySelectorAll(e);
      }
    };
  }, {
    "./sparse": "NmjR",
    "./index": "o90z"
  }],
  "tWZH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./index"),
        r = require("./enter"),
        n = t(require("../constant"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = "$";

    function o(e, n, t, a, o, _) {
      for (var l, i = 0, u = n.length, f = _.length; i < f; ++i) {
        (l = n[i]) ? (l.__data__ = _[i], a[i] = l) : t[i] = new r.EnterNode(e, _[i]);
      }

      for (; i < u; ++i) {
        (l = n[i]) && (o[i] = l);
      }
    }

    function _(e, n, t, o, _, l, i) {
      var u,
          f,
          c,
          s = {},
          d = n.length,
          h = l.length,
          w = new Array(d);

      for (u = 0; u < d; ++u) {
        (f = n[u]) && (w[u] = c = a + i.call(f, f.__data__, u, n), c in s ? _[u] = f : s[c] = f);
      }

      for (u = 0; u < h; ++u) {
        (f = s[c = a + i.call(e, l[u], u, l)]) ? (o[u] = f, f.__data__ = l[u], s[c] = null) : t[u] = new r.EnterNode(e, l[u]);
      }

      for (u = 0; u < d; ++u) {
        (f = n[u]) && s[w[u]] === f && (_[u] = f);
      }
    }

    function l(r, t) {
      if (!r) return v = new Array(this.size()), d = -1, this.each(function (e) {
        v[++d] = e;
      }), v;
      var a = t ? _ : o,
          l = this._parents,
          i = this._groups;
      "function" != typeof r && (r = (0, n.default)(r));

      for (var u = i.length, f = new Array(u), c = new Array(u), s = new Array(u), d = 0; d < u; ++d) {
        var h = l[d],
            w = i[d],
            y = w.length,
            v = r.call(h, h && h.__data__, d, l),
            g = v.length,
            A = c[d] = new Array(g),
            p = f[d] = new Array(g);
        a(h, w, A, p, s[d] = new Array(y), v, t);

        for (var x, q, E = 0, M = 0; E < g; ++E) {
          if (x = A[E]) {
            for (E >= M && (M = E + 1); !(q = p[M]) && ++M < g;) {
              ;
            }

            x._next = q || null;
          }
        }
      }

      return (f = new e.Selection(f, l))._enter = c, f._exit = s, f;
    }
  }, {
    "./index": "o90z",
    "./enter": "JatU",
    "../constant": "5O/Y"
  }],
  "PGv7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return new t.Selection(this._exit || this._groups.map(e.default), this._parents);
    }
  }, {
    "./sparse": "NmjR",
    "./index": "o90z"
  }],
  "YSUc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./index");

    function r(r) {
      for (var t = this._groups, n = r._groups, o = t.length, s = n.length, a = Math.min(o, s), i = new Array(o), u = 0; u < a; ++u) {
        for (var l, f = t[u], h = n[u], p = f.length, g = i[u] = new Array(p), _ = 0; _ < p; ++_) {
          (l = f[_] || h[_]) && (g[_] = l);
        }
      }

      for (; u < o; ++u) {
        i[u] = t[u];
      }

      return new e.Selection(i, this._parents);
    }
  }, {
    "./index": "o90z"
  }],
  "x8px": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this._groups, t = -1, r = e.length; ++t < r;) {
        for (var n, o = e[t], s = o.length - 1, i = o[s]; --s >= 0;) {
          (n = o[s]) && (i && i !== n.nextSibling && i.parentNode.insertBefore(n, i), i = n);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "tH78": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var r = require("./index");

    function e(e) {
      function n(r, t) {
        return r && t ? e(r.__data__, t.__data__) : !r - !t;
      }

      e || (e = t);

      for (var a = this._groups, o = a.length, u = new Array(o), _ = 0; _ < o; ++_) {
        for (var i, s = a[_], d = s.length, f = u[_] = new Array(d), c = 0; c < d; ++c) {
          (i = s[c]) && (f[c] = i);
        }

        f.sort(n);
      }

      return new r.Selection(u, this._parents).order();
    }

    function t(r, e) {
      return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
    }
  }, {
    "./index": "o90z"
  }],
  "k/Q6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var t = e(require("../namespace"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      return function () {
        this.removeAttribute(t);
      };
    }

    function u(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function r(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }

    function i(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }

    function o(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }

    function c(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
      };
    }

    function l(e, l) {
      var a = (0, t.default)(e);

      if (arguments.length < 2) {
        var s = this.node();
        return a.local ? s.getAttributeNS(a.space, a.local) : s.getAttribute(a);
      }

      return this.each((null == l ? a.local ? u : n : "function" == typeof l ? a.local ? c : o : a.local ? i : r)(a, l));
    }
  }, {
    "../namespace": "Y3IL"
  }],
  "PJmA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var t = e(require("../window"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function r(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }

    function n(t, e, r) {
      return function () {
        this.style.setProperty(t, e, r);
      };
    }

    function u(t, e, r) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.style.removeProperty(t) : this.style.setProperty(t, n, r);
      };
    }

    function o(e, o, l) {
      var i;
      return arguments.length > 1 ? this.each((null == o ? r : "function" == typeof o ? u : n)(e, o, null == l ? "" : l)) : (0, t.default)(i = this.node()).getComputedStyle(i, null).getPropertyValue(e);
    }
  }, {
    "../window": "D1dR"
  }],
  "OaQt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../creator"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      var r = "function" == typeof t ? t : (0, e.default)(t);
      return this.select(function () {
        return this.appendChild(r.apply(this, arguments));
      });
    }
  }, {
    "../creator": "uDIf"
  }],
  "WDnL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = r(require("../creator")),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return null;
    }

    function n(r, n) {
      var l = "function" == typeof r ? r : (0, e.default)(r),
          o = null == n ? u : "function" == typeof n ? n : (0, t.default)(n);
      return this.select(function () {
        return this.insertBefore(l.apply(this, arguments), o.apply(this, arguments) || null);
      });
    }
  }, {
    "../creator": "uDIf",
    "../selector": "xs2I"
  }],
  "kKRi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var t = e(require("../window"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(e, n, u) {
      var i = (0, t.default)(e),
          r = i.CustomEvent;
      r ? r = new r(n, u) : (r = i.document.createEvent("Event"), u ? (r.initEvent(n, u.bubbles, u.cancelable), r.detail = u.detail) : r.initEvent(n, !1, !1)), e.dispatchEvent(r);
    }

    function u(t, e) {
      return function () {
        return n(this, t, e);
      };
    }

    function i(t, e) {
      return function () {
        return n(this, t, e.apply(this, arguments));
      };
    }

    function r(t, e) {
      return this.each(("function" == typeof e ? i : u)(t, e));
    }
  }, {
    "../window": "D1dR"
  }],
  "o90z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Selection = S, exports.default = exports.root = void 0;

    var e = O(require("./select")),
        r = O(require("./selectAll")),
        t = O(require("./filter")),
        u = O(require("./data")),
        l = O(require("./enter")),
        a = O(require("./exit")),
        d = O(require("./merge")),
        i = O(require("./order")),
        o = O(require("./sort")),
        f = O(require("./call")),
        s = O(require("./nodes")),
        n = O(require("./node")),
        q = O(require("./size")),
        p = O(require("./empty")),
        c = O(require("./each")),
        m = O(require("./attr")),
        x = O(require("./style")),
        y = O(require("./property")),
        h = O(require("./classed")),
        v = O(require("./text")),
        _ = O(require("./html")),
        g = O(require("./raise")),
        w = O(require("./lower")),
        z = O(require("./append")),
        A = O(require("./insert")),
        M = O(require("./remove")),
        b = O(require("./datum")),
        j = O(require("./on")),
        E = O(require("./dispatch"));

    function O(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var P = [null];

    function S(e, r) {
      this._groups = e, this._parents = r;
    }

    function k() {
      return new S([[document.documentElement]], P);
    }

    exports.root = P, S.prototype = k.prototype = {
      constructor: S,
      select: e.default,
      selectAll: r.default,
      filter: t.default,
      data: u.default,
      enter: l.default,
      exit: a.default,
      merge: d.default,
      order: i.default,
      sort: o.default,
      call: f.default,
      nodes: s.default,
      node: n.default,
      size: q.default,
      empty: p.default,
      each: c.default,
      attr: m.default,
      style: x.default,
      property: y.default,
      classed: h.default,
      text: v.default,
      html: _.default,
      raise: g.default,
      lower: w.default,
      append: z.default,
      insert: A.default,
      remove: M.default,
      datum: b.default,
      on: j.default,
      dispatch: E.default
    };
    var B = k;
    exports.default = B;
  }, {
    "./select": "OA2k",
    "./selectAll": "mJon",
    "./filter": "vN4q",
    "./data": "tWZH",
    "./enter": "JatU",
    "./exit": "PGv7",
    "./merge": "YSUc",
    "./order": "x8px",
    "./sort": "tH78",
    "./call": "+pbQ",
    "./nodes": "kO0T",
    "./node": "84xF",
    "./size": "w9fp",
    "./empty": "UF+O",
    "./each": "q4XW",
    "./attr": "k/Q6",
    "./style": "PJmA",
    "./property": "Q/OW",
    "./classed": "+rtN",
    "./text": "hAJ3",
    "./html": "FiSM",
    "./raise": "gvi7",
    "./lower": "gv/5",
    "./append": "OaQt",
    "./insert": "WDnL",
    "./remove": "quBB",
    "./datum": "fuQ8",
    "./on": "j4rF",
    "./dispatch": "kKRi"
  }],
  "pr1z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([[document.querySelector(t)]], [document.documentElement]) : new e.Selection([[t]], e.root);
    }
  }, {
    "./selection/index": "o90z"
  }],
  "J2NH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([document.querySelectorAll(t)], [document.documentElement]) : new e.Selection([null == t ? [] : t], e.root);
    }
  }, {
    "./selection/index": "o90z"
  }],
  "yTKF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u, n) {
      arguments.length < 3 && (n = u, u = (0, e.default)().changedTouches);

      for (var i, l = 0, o = u ? u.length : 0; l < o; ++l) {
        if ((i = u[l]).identifier === n) return (0, r.default)(t, i);
      }

      return null;
    }
  }, {
    "./sourceEvent": "RRx8",
    "./point": "9ZIl"
  }],
  "PtUP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      null == u && (u = (0, e.default)().touches);

      for (var n = 0, o = u ? u.length : 0, l = new Array(o); n < o; ++n) {
        l[n] = (0, r.default)(t, u[n]);
      }

      return l;
    }
  }, {
    "./sourceEvent": "RRx8",
    "./point": "9ZIl"
  }],
  "aV9X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "creator", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "local", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "matcher", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "mouse", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "namespace", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "namespaces", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "select", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "selectAll", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "selection", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "selector", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "selectorAll", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "touch", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "touches", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "window", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "event", {
      enumerable: !0,
      get: function get() {
        return b.event;
      }
    }), Object.defineProperty(exports, "customEvent", {
      enumerable: !0,
      get: function get() {
        return b.customEvent;
      }
    });

    var e = m(require("./src/creator")),
        r = m(require("./src/local")),
        t = m(require("./src/matcher")),
        n = m(require("./src/mouse")),
        u = m(require("./src/namespace")),
        c = m(require("./src/namespaces")),
        o = m(require("./src/select")),
        s = m(require("./src/selectAll")),
        l = m(require("./src/selection/index")),
        i = m(require("./src/selector")),
        f = m(require("./src/selectorAll")),
        a = m(require("./src/touch")),
        p = m(require("./src/touches")),
        d = m(require("./src/window")),
        b = require("./src/selection/on");

    function m(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./src/creator": "uDIf",
    "./src/local": "JuPP",
    "./src/matcher": "scm0",
    "./src/mouse": "gatq",
    "./src/namespace": "Y3IL",
    "./src/namespaces": "UzOB",
    "./src/select": "pr1z",
    "./src/selectAll": "J2NH",
    "./src/selection/index": "o90z",
    "./src/selector": "xs2I",
    "./src/selectorAll": "+mHY",
    "./src/touch": "yTKF",
    "./src/touches": "PtUP",
    "./src/window": "D1dR",
    "./src/selection/on": "j4rF"
  }],
  "hLim": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./formatDecimal"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return (t = (0, e.default)(Math.abs(t))) ? t[1] : NaN;
    }
  }, {
    "./formatDecimal": "c+Jh"
  }],
  "C69M": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      e: for (var t, s = (e = e.toPrecision(r)).length, a = 1, c = -1; a < s; ++a) {
        switch (e[a]) {
          case ".":
            c = t = a;
            break;

          case "0":
            0 === c && (c = a), t = a;
            break;

          case "e":
            break e;

          default:
            c > 0 && (c = 0);
        }
      }

      return c > 0 ? e.slice(0, c) + e.slice(t + 1) : e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "B8yn": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.prefixExponent = void 0;
    var e,
        r = t(require("./formatDecimal"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t, n) {
      var o = (0, r.default)(t, n);
      if (!o) return t + "";
      var a = o[0],
          i = o[1],
          u = i - (exports.prefixExponent = e = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          f = a.length;
      return u === f ? a : u > f ? a + new Array(u - f + 1).join("0") : u > 0 ? a.slice(0, u) + "." + a.slice(u) : "0." + new Array(1 - u).join("0") + (0, r.default)(t, Math.max(0, n + u - 1))[0];
    }

    exports.prefixExponent = e;
  }, {
    "./formatDecimal": "c+Jh"
  }],
  "2NeM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./formatDecimal"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var n = (0, e.default)(r, t);
      if (!n) return r + "";
      var u = n[0],
          a = n[1];
      return a < 0 ? "0." + new Array(-a).join("0") + u : u.length > a + 1 ? u.slice(0, a + 1) + "." + u.slice(a + 1) : u + new Array(a - u.length + 2).join("0");
    }
  }, {
    "./formatDecimal": "c+Jh"
  }],
  "KMhW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e(require("./formatDefault")),
        r = e(require("./formatPrefixAuto")),
        n = e(require("./formatRounded"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var u = {
      "": t.default,
      "%": function _(t, r) {
        return (100 * t).toFixed(r);
      },
      b: function b(t) {
        return Math.round(t).toString(2);
      },
      c: function c(t) {
        return t + "";
      },
      d: function d(t) {
        return Math.round(t).toString(10);
      },
      e: function e(t, r) {
        return t.toExponential(r);
      },
      f: function f(t, r) {
        return t.toFixed(r);
      },
      g: function g(t, r) {
        return t.toPrecision(r);
      },
      o: function o(t) {
        return Math.round(t).toString(8);
      },
      p: function p(t, r) {
        return (0, n.default)(100 * t, r);
      },
      r: n.default,
      s: r.default,
      X: function X(t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function x(t) {
        return Math.round(t).toString(16);
      }
    };
    exports.default = u;
  }, {
    "./formatDefault": "C69M",
    "./formatPrefixAuto": "B8yn",
    "./formatRounded": "2NeM"
  }],
  "fetO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = i(require("./formatTypes"));

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var s = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

    function e(t) {
      return new r(t);
    }

    function r(i) {
      if (!(e = s.exec(i))) throw new Error("invalid format: " + i);
      var e,
          r = e[1] || " ",
          h = e[2] || ">",
          n = e[3] || "-",
          o = e[4] || "",
          l = !!e[5],
          a = e[6] && +e[6],
          u = !!e[7],
          c = e[8] && +e[8].slice(1),
          f = e[9] || "";
      "n" === f ? (u = !0, f = "g") : t.default[f] || (f = ""), (l || "0" === r && "=" === h) && (l = !0, r = "0", h = "="), this.fill = r, this.align = h, this.sign = n, this.symbol = o, this.zero = l, this.width = a, this.comma = u, this.precision = c, this.type = f;
    }

    r.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
    };
  }, {
    "./formatTypes": "KMhW"
  }],
  "vC9z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var e = i(require("./exponent")),
        t = i(require("./formatGroup")),
        r = i(require("./formatSpecifier")),
        n = i(require("./formatTypes")),
        a = require("./formatPrefixAuto");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var o = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function u(e) {
      return e;
    }

    function f(i) {
      var f = i.grouping && i.thousands ? (0, t.default)(i.grouping, i.thousands) : u,
          l = i.currency,
          s = i.decimal;

      function c(e) {
        var t = (e = (0, r.default)(e)).fill,
            i = e.align,
            u = e.sign,
            c = e.symbol,
            h = e.zero,
            p = e.width,
            d = e.comma,
            g = e.precision,
            m = e.type,
            x = "$" === c ? l[0] : "#" === c && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
            M = "$" === c ? l[1] : /[%p]/.test(m) ? "%" : "",
            v = n.default[m],
            y = !m || /[defgprs%]/.test(m);

        function b(e) {
          var r,
              n,
              l,
              c = x,
              b = M;
          if ("c" === m) b = v(e) + b, e = "";else {
            var q = ((e = +e) < 0 || 1 / e < 0) && (e *= -1, !0);
            if (e = v(e, g), q) for (r = -1, n = e.length, q = !1; ++r < n;) {
              if (48 < (l = e.charCodeAt(r)) && l < 58 || "x" === m && 96 < l && l < 103 || "X" === m && 64 < l && l < 71) {
                q = !0;
                break;
              }
            }
            if (c = (q ? "(" === u ? u : "-" : "-" === u || "(" === u ? "" : u) + c, b = b + ("s" === m ? o[8 + a.prefixExponent / 3] : "") + (q && "(" === u ? ")" : ""), y) for (r = -1, n = e.length; ++r < n;) {
              if (48 > (l = e.charCodeAt(r)) || l > 57) {
                b = (46 === l ? s + e.slice(r + 1) : e.slice(r)) + b, e = e.slice(0, r);
                break;
              }
            }
          }
          d && !h && (e = f(e, 1 / 0));
          var w = c.length + e.length + b.length,
              A = w < p ? new Array(p - w + 1).join(t) : "";

          switch (d && h && (e = f(A + e, A.length ? p - b.length : 1 / 0), A = ""), i) {
            case "<":
              return c + e + b + A;

            case "=":
              return c + A + e + b;

            case "^":
              return A.slice(0, w = A.length >> 1) + c + e + b + A.slice(w);
          }

          return A + c + e + b;
        }

        return g = null == g ? m ? 6 : 12 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g)), b.toString = function () {
          return e + "";
        }, b;
      }

      return {
        format: c,
        formatPrefix: function formatPrefix(t, n) {
          var a = c(((t = (0, r.default)(t)).type = "f", t)),
              i = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(n) / 3))),
              u = Math.pow(10, -i),
              f = o[8 + i / 3];
          return function (e) {
            return a(u * e) + f;
          };
        }
      };
    }
  }, {
    "./exponent": "hLim",
    "./formatGroup": "e1cc",
    "./formatSpecifier": "fetO",
    "./formatTypes": "KMhW",
    "./formatPrefixAuto": "B8yn"
  }],
  "aTqo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.formatPrefix = exports.format = void 0;
    var r,
        e,
        t,
        o = f(require("./locale"));

    function f(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function a(f) {
      return r = (0, o.default)(f), exports.format = e = r.format, exports.formatPrefix = t = r.formatPrefix, r;
    }

    exports.format = e, exports.formatPrefix = t, a({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });
  }, {
    "./locale": "vC9z"
  }],
  "pZ0j": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./exponent"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return Math.max(0, -(0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent": "hLim"
  }],
  "r2RC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;
    var e = t(require("./exponent"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(t, a) {
      return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(a) / 3))) - (0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent": "hLim"
  }],
  "XNna": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./exponent"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      return t = Math.abs(t), u = Math.abs(u) - t, Math.max(0, (0, e.default)(u) - (0, e.default)(t)) + 1;
    }
  }, {
    "./exponent": "hLim"
  }],
  "Mi5+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "formatDefaultLocale", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "format", {
      enumerable: !0,
      get: function get() {
        return e.format;
      }
    }), Object.defineProperty(exports, "formatPrefix", {
      enumerable: !0,
      get: function get() {
        return e.formatPrefix;
      }
    }), Object.defineProperty(exports, "formatLocale", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "formatSpecifier", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "precisionFixed", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "precisionPrefix", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "precisionRound", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    });
    var e = f(require("./src/defaultLocale")),
        r = u(require("./src/locale")),
        t = u(require("./src/formatSpecifier")),
        n = u(require("./src/precisionFixed")),
        o = u(require("./src/precisionPrefix")),
        i = u(require("./src/precisionRound"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./src/defaultLocale": "aTqo",
    "./src/locale": "vC9z",
    "./src/formatSpecifier": "fetO",
    "./src/precisionFixed": "pZ0j",
    "./src/precisionPrefix": "r2RC",
    "./src/precisionRound": "XNna"
  }],
  "Bxmn": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "dispatch", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./src/dispatch"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./src/dispatch": "C/lH"
  }],
  "ASaO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = n(require("./ascending"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e) {
      return 1 === e.length && (e = r(e)), {
        left: function left(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) < 0 ? r = l + 1 : u = l;
          }

          return r;
        },
        right: function right(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) > 0 ? u = l : r = l + 1;
          }

          return r;
        }
      };
    }

    function r(n) {
      return function (t, r) {
        return (0, e.default)(n(t), r);
      };
    }
  }, {
    "./ascending": "5A6F"
  }],
  "frZf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.bisectLeft = exports.bisectRight = void 0;
    var e = r(require("./ascending")),
        t = r(require("./bisector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = (0, t.default)(e.default),
        i = s.right;
    exports.bisectRight = i;
    var o = s.left;
    exports.bisectLeft = o;
    var u = i;
    exports.default = u;
  }, {
    "./ascending": "5A6F",
    "./bisector": "ASaO"
  }],
  "oFw8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u,
          f,
          l = r.length,
          n = 0,
          a = 0,
          i = -1,
          o = 0;
      if (null == t) for (; ++i < l;) {
        isNaN(u = (0, e.default)(r[i])) || (a += (f = u - n) * (u - (n += f / ++o)));
      } else for (; ++i < l;) {
        isNaN(u = (0, e.default)(t(r[i], i, r))) || (a += (f = u - n) * (u - (n += f / ++o)));
      }
      if (o > 1) return a / (o - 1);
    }
  }, {
    "./number": "9fz/"
  }],
  "pFhm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./variance"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u = (0, e.default)(r, t);
      return u ? Math.sqrt(u) : u;
    }
  }, {
    "./variance": "oFw8"
  }],
  "d8Sp": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f,
          n = -1,
          t = e.length;

      if (null == l) {
        for (; ++n < t;) {
          if (null != (u = e[n]) && u >= u) {
            r = f = u;
            break;
          }
        }

        for (; ++n < t;) {
          null != (u = e[n]) && (r > u && (r = u), f < u && (f = u));
        }
      } else {
        for (; ++n < t;) {
          if (null != (u = l(e[n], n, e)) && u >= u) {
            r = f = u;
            break;
          }
        }

        for (; ++n < t;) {
          null != (u = l(e[n], n, e)) && (r > u && (r = u), f < u && (f = u));
        }
      }

      return [r, f];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "O+Km": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u, exports.tickStep = M;
    var t = e(require("./range"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = Math.sqrt(50),
        a = Math.sqrt(10),
        o = Math.sqrt(2);

    function u(e, r, a) {
      var o = M(e, r, a);
      return (0, t.default)(Math.ceil(e / o) * o, Math.floor(r / o) * o + o / 2, o);
    }

    function M(t, e, u) {
      var M = Math.abs(e - t) / Math.max(0, u),
          h = Math.pow(10, Math.floor(Math.log(M) / Math.LN10)),
          n = M / h;
      return n >= r ? h *= 10 : n >= a ? h *= 5 : n >= o && (h *= 2), e < t ? -h : h;
    }
  }, {
    "./range": "M4+6"
  }],
  "5yMO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("./array"),
        r = i(require("./bisect")),
        t = i(require("./constant")),
        u = i(require("./extent")),
        n = i(require("./identity")),
        a = i(require("./ticks")),
        f = i(require("./threshold/sturges"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o() {
      var i = n.default,
          o = u.default,
          l = f.default;

      function s(e) {
        var t,
            u,
            n = e.length,
            f = new Array(n);

        for (t = 0; t < n; ++t) {
          f[t] = i(e[t], t, e);
        }

        var s = o(f),
            d = s[0],
            c = s[1],
            y = l(f, d, c);
        Array.isArray(y) || (y = (0, a.default)(d, c, y));

        for (var h = y.length; y[0] <= d;) {
          y.shift(), --h;
        }

        for (; y[h - 1] >= c;) {
          y.pop(), --h;
        }

        var p,
            v = new Array(h + 1);

        for (t = 0; t <= h; ++t) {
          (p = v[t] = []).x0 = t > 0 ? y[t - 1] : d, p.x1 = t < h ? y[t] : c;
        }

        for (t = 0; t < n; ++t) {
          d <= (u = f[t]) && u <= c && v[(0, r.default)(y, u, 0, h)].push(e[t]);
        }

        return v;
      }

      return s.value = function (e) {
        return arguments.length ? (i = "function" == typeof e ? e : (0, t.default)(e), s) : i;
      }, s.domain = function (e) {
        return arguments.length ? (o = "function" == typeof e ? e : (0, t.default)([e[0], e[1]]), s) : o;
      }, s.thresholds = function (r) {
        return arguments.length ? (l = "function" == typeof r ? r : Array.isArray(r) ? (0, t.default)(e.slice.call(r)) : (0, t.default)(r), s) : l;
      }, s;
    }
  }, {
    "./array": "+OA0",
    "./bisect": "frZf",
    "./constant": "5O/Y",
    "./extent": "d8Sp",
    "./identity": "nPOL",
    "./ticks": "O+Km",
    "./threshold/sturges": "Pg/U"
  }],
  "QBZz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t, u) {
      if (null == u && (u = e.default), n = r.length) {
        if ((t = +t) <= 0 || n < 2) return +u(r[0], 0, r);
        if (t >= 1) return +u(r[n - 1], n - 1, r);
        var n,
            f = (n - 1) * t,
            l = Math.floor(f),
            o = +u(r[l], l, r);
        return o + (+u(r[l + 1], l + 1, r) - o) * (f - l);
      }
    }
  }, {
    "./number": "9fz/"
  }],
  "FqvO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("../array"),
        r = a(require("../ascending")),
        t = a(require("../number")),
        u = a(require("../quantile"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(a, l, n) {
      return a = e.map.call(a, t.default).sort(r.default), Math.ceil((n - l) / (2 * ((0, u.default)(a, .75) - (0, u.default)(a, .25)) * Math.pow(a.length, -1 / 3)));
    }
  }, {
    "../array": "+OA0",
    "../ascending": "5A6F",
    "../number": "9fz/",
    "../quantile": "QBZz"
  }],
  "dZLM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../deviation"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r, u) {
      return Math.ceil((u - r) / (3.5 * (0, e.default)(t) * Math.pow(t.length, -1 / 3)));
    }
  }, {
    "../deviation": "pFhm"
  }],
  "I8rL": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f = -1,
          n = e.length;

      if (null == l) {
        for (; ++f < n;) {
          if (null != (u = e[f]) && u >= u) {
            r = u;
            break;
          }
        }

        for (; ++f < n;) {
          null != (u = e[f]) && u > r && (r = u);
        }
      } else {
        for (; ++f < n;) {
          if (null != (u = l(e[f], f, e)) && u >= u) {
            r = u;
            break;
          }
        }

        for (; ++f < n;) {
          null != (u = l(e[f], f, e)) && u > r && (r = u);
        }
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "QI/U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./number"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var u,
          f = 0,
          l = r.length,
          n = -1,
          a = l;
      if (null == t) for (; ++n < l;) {
        isNaN(u = (0, e.default)(r[n])) ? --a : f += u;
      } else for (; ++n < l;) {
        isNaN(u = (0, e.default)(t(r[n], n, r))) ? --a : f += u;
      }
      if (a) return f / a;
    }
  }, {
    "./number": "9fz/"
  }],
  "vEZa": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = t(require("./ascending")),
        u = t(require("./number")),
        r = t(require("./quantile"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(t, l) {
      var a,
          n = [],
          s = t.length,
          f = -1;
      if (null == l) for (; ++f < s;) {
        isNaN(a = (0, u.default)(t[f])) || n.push(a);
      } else for (; ++f < s;) {
        isNaN(a = (0, u.default)(l(t[f], f, t))) || n.push(a);
      }
      return (0, r.default)(n.sort(e.default), .5);
    }
  }, {
    "./ascending": "5A6F",
    "./number": "9fz/",
    "./quantile": "QBZz"
  }],
  "aUu1": [function (require, module, exports) {
    "use strict";

    function e(e, l) {
      var r,
          u,
          f = -1,
          n = e.length;

      if (null == l) {
        for (; ++f < n;) {
          if (null != (u = e[f]) && u >= u) {
            r = u;
            break;
          }
        }

        for (; ++f < n;) {
          null != (u = e[f]) && r > u && (r = u);
        }
      } else {
        for (; ++f < n;) {
          if (null != (u = l(e[f], f, e)) && u >= u) {
            r = u;
            break;
          }
        }

        for (; ++f < n;) {
          null != (u = l(e[f], f, e)) && r > u && (r = u);
        }
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "KFCm": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r = 0, t = e.length - 1, n = e[0], o = new Array(t < 0 ? 0 : t); r < t;) {
        o[r] = [n, n = e[++r]];
      }

      return o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "0UkH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./ascending"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if (u = r.length) {
        var u,
            n,
            o = 0,
            d = 0,
            f = r[d];

        for (t || (t = e.default); ++o < u;) {
          (t(n = r[o], f) < 0 || 0 !== t(f, f)) && (f = n, d = o);
        }

        return 0 === t(f, f) ? d : void 0;
      }
    }
  }, {
    "./ascending": "5A6F"
  }],
  "eIcM": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      var t,
          l = 0,
          o = e.length,
          u = -1;
      if (null == r) for (; ++u < o;) {
        (t = +e[u]) && (l += t);
      } else for (; ++u < o;) {
        (t = +r(e[u], u, e)) && (l += t);
      }
      return l;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "DQLN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./min"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      if (!(o = r.length)) return [];

      for (var t = -1, u = (0, e.default)(r, n), f = new Array(u); ++t < u;) {
        for (var o, a = -1, i = f[t] = new Array(o); ++a < o;) {
          i[a] = r[a][t];
        }
      }

      return f;
    }

    function n(e) {
      return e.length;
    }
  }, {
    "./min": "aUu1"
  }],
  "Xlp+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./transpose"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      return (0, e.default)(arguments);
    }
  }, {
    "./transpose": "DQLN"
  }],
  "jHr9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "bisect", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "bisectRight", {
      enumerable: !0,
      get: function get() {
        return e.bisectRight;
      }
    }), Object.defineProperty(exports, "bisectLeft", {
      enumerable: !0,
      get: function get() {
        return e.bisectLeft;
      }
    }), Object.defineProperty(exports, "ascending", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "bisector", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "descending", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "deviation", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "extent", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "histogram", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "thresholdScott", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "thresholdSturges", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "max", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "mean", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "median", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "merge", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "min", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "pairs", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "permute", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "quantile", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "range", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "scan", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "shuffle", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "sum", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "ticks", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "tickStep", {
      enumerable: !0,
      get: function get() {
        return q.tickStep;
      }
    }), Object.defineProperty(exports, "transpose", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "variance", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "zip", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    });

    var e = D(require("./src/bisect")),
        r = k(require("./src/ascending")),
        t = k(require("./src/bisector")),
        n = k(require("./src/descending")),
        u = k(require("./src/deviation")),
        i = k(require("./src/extent")),
        o = k(require("./src/histogram")),
        c = k(require("./src/threshold/freedmanDiaconis")),
        s = k(require("./src/threshold/scott")),
        f = k(require("./src/threshold/sturges")),
        a = k(require("./src/max")),
        d = k(require("./src/mean")),
        p = k(require("./src/median")),
        l = k(require("./src/merge")),
        b = k(require("./src/min")),
        m = k(require("./src/pairs")),
        g = k(require("./src/permute")),
        O = k(require("./src/quantile")),
        y = k(require("./src/range")),
        j = k(require("./src/scan")),
        P = k(require("./src/shuffle")),
        x = k(require("./src/sum")),
        q = D(require("./src/ticks")),
        h = k(require("./src/transpose")),
        v = k(require("./src/variance")),
        _ = k(require("./src/zip"));

    function k(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function D(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./src/bisect": "frZf",
    "./src/ascending": "5A6F",
    "./src/bisector": "ASaO",
    "./src/descending": "wjXp",
    "./src/deviation": "pFhm",
    "./src/extent": "d8Sp",
    "./src/histogram": "5yMO",
    "./src/threshold/freedmanDiaconis": "FqvO",
    "./src/threshold/scott": "dZLM",
    "./src/threshold/sturges": "Pg/U",
    "./src/max": "I8rL",
    "./src/mean": "QI/U",
    "./src/median": "vEZa",
    "./src/merge": "0SAj",
    "./src/min": "aUu1",
    "./src/pairs": "KFCm",
    "./src/permute": "4V5Z",
    "./src/quantile": "QBZz",
    "./src/range": "M4+6",
    "./src/scan": "0UkH",
    "./src/shuffle": "Z0Nc",
    "./src/sum": "eIcM",
    "./src/ticks": "O+Km",
    "./src/transpose": "DQLN",
    "./src/variance": "oFw8",
    "./src/zip": "Xlp+"
  }],
  "FTWw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.implicit = void 0;

    var e = require("d3-collection"),
        n = require("./array"),
        r = {
      name: "implicit"
    };

    function t(i) {
      var u = (0, e.map)(),
          l = [],
          o = r;

      function c(e) {
        var n = e + "",
            t = u.get(n);

        if (!t) {
          if (o !== r) return o;
          u.set(n, t = l.push(e));
        }

        return i[(t - 1) % i.length];
      }

      return i = null == i ? [] : n.slice.call(i), c.domain = function (n) {
        if (!arguments.length) return l.slice();
        l = [], u = (0, e.map)();

        for (var r, t, i = -1, o = n.length; ++i < o;) {
          u.has(t = (r = n[i]) + "") || u.set(t, l.push(r));
        }

        return c;
      }, c.range = function (e) {
        return arguments.length ? (i = n.slice.call(e), c) : i.slice();
      }, c.unknown = function (e) {
        return arguments.length ? (o = e, c) : o;
      }, c.copy = function () {
        return t().domain(l).range(i).unknown(o);
      }, c;
    }

    exports.implicit = r;
  }, {
    "d3-collection": "qqV1",
    "./array": "lLkj"
  }],
  "+Dlj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.point = a;

    var n = require("d3-array"),
        t = r(require("./ordinal"));

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function e() {
      var r,
          u,
          a = (0, t.default)().unknown(void 0),
          i = a.domain,
          d = a.range,
          o = [0, 1],
          g = !1,
          c = 0,
          f = 0,
          l = .5;

      function h() {
        var t = i().length,
            e = o[1] < o[0],
            a = o[e - 0],
            h = o[1 - e];
        r = (h - a) / Math.max(1, t - c + 2 * f), g && (r = Math.floor(r)), a += (h - a - r * (t - c)) * l, u = r * (1 - c), g && (a = Math.round(a), u = Math.round(u));
        var p = (0, n.range)(t).map(function (n) {
          return a + r * n;
        });
        return d(e ? p.reverse() : p);
      }

      return delete a.unknown, a.domain = function (n) {
        return arguments.length ? (i(n), h()) : i();
      }, a.range = function (n) {
        return arguments.length ? (o = [+n[0], +n[1]], h()) : o.slice();
      }, a.rangeRound = function (n) {
        return o = [+n[0], +n[1]], g = !0, h();
      }, a.bandwidth = function () {
        return u;
      }, a.step = function () {
        return r;
      }, a.round = function (n) {
        return arguments.length ? (g = !!n, h()) : g;
      }, a.padding = function (n) {
        return arguments.length ? (c = f = Math.max(0, Math.min(1, n)), h()) : c;
      }, a.paddingInner = function (n) {
        return arguments.length ? (c = Math.max(0, Math.min(1, n)), h()) : c;
      }, a.paddingOuter = function (n) {
        return arguments.length ? (f = Math.max(0, Math.min(1, n)), h()) : f;
      }, a.align = function (n) {
        return arguments.length ? (l = Math.max(0, Math.min(1, n)), h()) : l;
      }, a.copy = function () {
        return e().domain(i()).range(o).round(g).paddingInner(c).paddingOuter(f).align(l);
      }, h();
    }

    function u(n) {
      var t = n.copy;
      return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function () {
        return u(t());
      }, n;
    }

    function a() {
      return u(e().paddingInner(1));
    }
  }, {
    "d3-array": "jHr9",
    "./ordinal": "FTWw"
  }],
  "683C": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.deinterpolateLinear = a, exports.copy = p, exports.default = d;

    var n = require("d3-array"),
        r = require("d3-interpolate"),
        e = require("./array"),
        t = i(require("./constant")),
        u = i(require("./number"));

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var o = [0, 1];

    function a(n, r) {
      return (r -= n = +n) ? function (e) {
        return (e - n) / r;
      } : (0, t.default)(r);
    }

    function c(n) {
      return function (r, e) {
        var t = n(r = +r, e = +e);
        return function (n) {
          return n <= r ? 0 : n >= e ? 1 : t(n);
        };
      };
    }

    function l(n) {
      return function (r, e) {
        var t = n(r = +r, e = +e);
        return function (n) {
          return n <= 0 ? r : n >= 1 ? e : t(n);
        };
      };
    }

    function f(n, r, e, t) {
      var u = n[0],
          i = n[1],
          o = r[0],
          a = r[1];
      return i < u ? (u = e(i, u), o = t(a, o)) : (u = e(u, i), o = t(o, a)), function (n) {
        return o(u(n));
      };
    }

    function s(r, e, t, u) {
      var i = Math.min(r.length, e.length) - 1,
          o = new Array(i),
          a = new Array(i),
          c = -1;

      for (r[i] < r[0] && (r = r.slice().reverse(), e = e.slice().reverse()); ++c < i;) {
        o[c] = t(r[c], r[c + 1]), a[c] = u(e[c], e[c + 1]);
      }

      return function (e) {
        var t = (0, n.bisect)(r, e, 1, i) - 1;
        return a[t](o[t](e));
      };
    }

    function p(n, r) {
      return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp());
    }

    function d(n, t) {
      var i,
          p,
          d,
          g = o,
          v = o,
          h = r.interpolate,
          m = !1;

      function y() {
        return i = Math.min(g.length, v.length) > 2 ? s : f, p = d = null, q;
      }

      function q(r) {
        return (p || (p = i(g, v, m ? c(n) : n, h)))(+r);
      }

      return q.invert = function (n) {
        return (d || (d = i(v, g, a, m ? l(t) : t)))(+n);
      }, q.domain = function (n) {
        return arguments.length ? (g = e.map.call(n, u.default), y()) : g.slice();
      }, q.range = function (n) {
        return arguments.length ? (v = e.slice.call(n), y()) : v.slice();
      }, q.rangeRound = function (n) {
        return v = e.slice.call(n), h = r.interpolateRound, y();
      }, q.clamp = function (n) {
        return arguments.length ? (m = !!n, y()) : m;
      }, q.interpolate = function (n) {
        return arguments.length ? (h = n, y()) : h;
      }, y();
    }
  }, {
    "d3-array": "jHr9",
    "d3-interpolate": "mkGF",
    "./array": "lLkj",
    "./constant": "5O/Y",
    "./number": "zRWI"
  }],
  "Euzu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = require("d3-array"),
        r = require("d3-format");

    function a(a, i, s) {
      var t,
          c = a[0],
          n = a[a.length - 1],
          o = (0, e.tickStep)(c, n, null == i ? 10 : i);

      switch ((s = (0, r.formatSpecifier)(null == s ? ",f" : s)).type) {
        case "s":
          var p = Math.max(Math.abs(c), Math.abs(n));
          return null != s.precision || isNaN(t = (0, r.precisionPrefix)(o, p)) || (s.precision = t), (0, r.formatPrefix)(s, p);

        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != s.precision || isNaN(t = (0, r.precisionRound)(o, Math.max(Math.abs(c), Math.abs(n)))) || (s.precision = t - ("e" === s.type));
          break;

        case "f":
        case "%":
          null != s.precision || isNaN(t = (0, r.precisionFixed)(o)) || (s.precision = t - 2 * ("%" === s.type));
      }

      return (0, r.format)(s);
    }
  }, {
    "d3-array": "jHr9",
    "d3-format": "Mi5+"
  }],
  "2CB3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linearish = u, exports.default = a;

    var e = require("d3-array"),
        t = require("d3-interpolate"),
        r = o(require("./continuous")),
        n = i(require("./tickFormat"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    function u(t) {
      var r = t.domain;
      return t.ticks = function (t) {
        var n = r();
        return (0, e.ticks)(n[0], n[n.length - 1], null == t ? 10 : t);
      }, t.tickFormat = function (e, t) {
        return (0, n.default)(r(), e, t);
      }, t.nice = function (n) {
        var i = r(),
            o = i.length - 1,
            u = null == n ? 10 : n,
            a = i[0],
            c = i[o],
            l = (0, e.tickStep)(a, c, u);
        return l && (l = (0, e.tickStep)(Math.floor(a / l) * l, Math.ceil(c / l) * l, u), i[0] = Math.floor(a / l) * l, i[o] = Math.ceil(c / l) * l, r(i)), t;
      }, t;
    }

    function a() {
      var e = (0, r.default)(r.deinterpolateLinear, t.interpolateNumber);
      return e.copy = function () {
        return (0, r.copy)(e, a());
      }, u(e);
    }
  }, {
    "d3-array": "jHr9",
    "d3-interpolate": "mkGF",
    "./continuous": "683C",
    "./tickFormat": "Euzu"
  }],
  "dT//": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("./array"),
        r = require("./linear"),
        n = t(require("./number"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      var t = [0, 1];

      function i(e) {
        return +e;
      }

      return i.invert = i, i.domain = i.range = function (r) {
        return arguments.length ? (t = e.map.call(r, n.default), i) : t.slice();
      }, i.copy = function () {
        return u().domain(t);
      }, (0, r.linearish)(i);
    }
  }, {
    "./array": "lLkj",
    "./linear": "2CB3",
    "./number": "zRWI"
  }],
  "7Ans": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p;

    var t = require("d3-array"),
        r = require("d3-format"),
        n = i(require("./constant")),
        e = i(require("./nice")),
        u = o(require("./continuous"));

    function o(t) {
      if (t && t.__esModule) return t;
      var r = {};
      if (null != t) for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          var e = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
          e.get || e.set ? Object.defineProperty(r, n, e) : r[n] = t[n];
        }
      }
      return r.default = t, r;
    }

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function a(t, r) {
      return (r = Math.log(r / t)) ? function (n) {
        return Math.log(n / t) / r;
      } : (0, n.default)(r);
    }

    function f(t, r) {
      return t < 0 ? function (n) {
        return -Math.pow(-r, n) * Math.pow(-t, 1 - n);
      } : function (n) {
        return Math.pow(r, n) * Math.pow(t, 1 - n);
      };
    }

    function c(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    }

    function l(t) {
      return 10 === t ? c : t === Math.E ? Math.exp : function (r) {
        return Math.pow(t, r);
      };
    }

    function h(t) {
      return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (r) {
        return Math.log(r) / t;
      });
    }

    function M(t) {
      return function (r) {
        return -t(-r);
      };
    }

    function p() {
      var n = (0, u.default)(a, f).domain([1, 10]),
          o = n.domain,
          i = 10,
          c = h(10),
          s = l(10);

      function d() {
        return c = h(i), s = l(i), o()[0] < 0 && (c = M(c), s = M(s)), n;
      }

      return n.base = function (t) {
        return arguments.length ? (i = +t, d()) : i;
      }, n.domain = function (t) {
        return arguments.length ? (o(t), d()) : o();
      }, n.ticks = function (r) {
        var n,
            e = o(),
            u = e[0],
            a = e[e.length - 1];
        (n = a < u) && (M = u, u = a, a = M);
        var f,
            l,
            h,
            M = c(u),
            p = c(a),
            d = null == r ? 10 : +r,
            g = [];

        if (!(i % 1) && p - M < d) {
          if (M = Math.round(M) - 1, p = Math.round(p) + 1, u > 0) {
            for (; M < p; ++M) {
              for (l = 1, f = s(M); l < i; ++l) {
                if (!((h = f * l) < u)) {
                  if (h > a) break;
                  g.push(h);
                }
              }
            }
          } else for (; M < p; ++M) {
            for (l = i - 1, f = s(M); l >= 1; --l) {
              if (!((h = f * l) < u)) {
                if (h > a) break;
                g.push(h);
              }
            }
          }
        } else g = (0, t.ticks)(M, p, Math.min(p - M, d)).map(s);

        return n ? g.reverse() : g;
      }, n.tickFormat = function (t, e) {
        if (null == e && (e = 10 === i ? ".0e" : ","), "function" != typeof e && (e = (0, r.format)(e)), t === 1 / 0) return e;
        null == t && (t = 10);
        var u = Math.max(1, i * t / n.ticks().length);
        return function (t) {
          var r = t / s(Math.round(c(t)));
          return r * i < i - .5 && (r *= i), r <= u ? e(t) : "";
        };
      }, n.nice = function () {
        return o((0, e.default)(o(), {
          floor: function floor(t) {
            return s(Math.floor(c(t)));
          },
          ceil: function ceil(t) {
            return s(Math.ceil(c(t)));
          }
        }));
      }, n.copy = function () {
        return (0, u.copy)(n, p().base(i));
      }, n;
    }
  }, {
    "d3-array": "jHr9",
    "d3-format": "Mi5+",
    "./constant": "5O/Y",
    "./nice": "gRJQ",
    "./continuous": "683C"
  }],
  "rtre": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.sqrt = c;

    var e = o(require("./constant")),
        t = require("./linear"),
        r = n(require("./continuous"));

    function n(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(e, t) {
      return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
    }

    function i() {
      var n = 1,
          o = (0, r.default)(function (t, r) {
        return (r = u(r, n) - (t = u(t, n))) ? function (e) {
          return (u(e, n) - t) / r;
        } : (0, e.default)(r);
      }, function (e, t) {
        return t = u(t, n) - (e = u(e, n)), function (r) {
          return u(e + t * r, 1 / n);
        };
      }),
          c = o.domain;
      return o.exponent = function (e) {
        return arguments.length ? (n = +e, c(c())) : n;
      }, o.copy = function () {
        return (0, r.copy)(o, i().exponent(n));
      }, (0, t.linearish)(o);
    }

    function c() {
      return i().exponent(.5);
    }
  }, {
    "./constant": "5O/Y",
    "./linear": "2CB3",
    "./continuous": "683C"
  }],
  "Da15": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = require("d3-array"),
        e = require("./array");

    function r() {
      var t = [],
          i = [],
          u = [];

      function a() {
        var e = 0,
            r = Math.max(1, i.length);

        for (u = new Array(r - 1); ++e < r;) {
          u[e - 1] = (0, n.quantile)(t, e / r);
        }

        return l;
      }

      function l(e) {
        if (!isNaN(e = +e)) return i[(0, n.bisect)(u, e)];
      }

      return l.invertExtent = function (n) {
        var e = i.indexOf(n);
        return e < 0 ? [NaN, NaN] : [e > 0 ? u[e - 1] : t[0], e < u.length ? u[e] : t[t.length - 1]];
      }, l.domain = function (e) {
        if (!arguments.length) return t.slice();
        t = [];

        for (var r, i = 0, u = e.length; i < u; ++i) {
          null == (r = e[i]) || isNaN(r = +r) || t.push(r);
        }

        return t.sort(n.ascending), a();
      }, l.range = function (n) {
        return arguments.length ? (i = e.slice.call(n), a()) : i.slice();
      }, l.quantiles = function () {
        return u.slice();
      }, l.copy = function () {
        return r().domain(t).range(i);
      }, l;
    }
  }, {
    "d3-array": "jHr9",
    "./array": "lLkj"
  }],
  "CMO3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var r = require("d3-array"),
        e = require("./array"),
        n = require("./linear");

    function t() {
      var i = 0,
          u = 1,
          a = 1,
          o = [.5],
          c = [0, 1];

      function f(e) {
        if (e <= e) return c[(0, r.bisect)(o, e, 0, a)];
      }

      function l() {
        var r = -1;

        for (o = new Array(a); ++r < a;) {
          o[r] = ((r + 1) * u - (r - a) * i) / (a + 1);
        }

        return f;
      }

      return f.domain = function (r) {
        return arguments.length ? (i = +r[0], u = +r[1], l()) : [i, u];
      }, f.range = function (r) {
        return arguments.length ? (a = (c = e.slice.call(r)).length - 1, l()) : c.slice();
      }, f.invertExtent = function (r) {
        var e = c.indexOf(r);
        return e < 0 ? [NaN, NaN] : e < 1 ? [i, o[0]] : e >= a ? [o[a - 1], u] : [o[e - 1], o[e]];
      }, f.copy = function () {
        return t().domain([i, u]).range(c);
      }, (0, n.linearish)(f);
    }
  }, {
    "d3-array": "jHr9",
    "./array": "lLkj",
    "./linear": "2CB3"
  }],
  "DWPp": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("d3-array"),
        n = require("./array");

    function r() {
      var t = [.5],
          i = [0, 1],
          u = 1;

      function a(n) {
        if (n <= n) return i[(0, e.bisect)(t, n, 0, u)];
      }

      return a.domain = function (e) {
        return arguments.length ? (t = n.slice.call(e), u = Math.min(t.length, i.length - 1), a) : t.slice();
      }, a.range = function (e) {
        return arguments.length ? (i = n.slice.call(e), u = Math.min(t.length, i.length - 1), a) : i.slice();
      }, a.invertExtent = function (e) {
        var n = i.indexOf(e);
        return [t[n - 1], t[n]];
      }, a.copy = function () {
        return r().domain(t).range(i);
      }, a;
    }
  }, {
    "d3-array": "jHr9",
    "./array": "lLkj"
  }],
  "kjHg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.calendar = g, exports.default = D;

    var e = require("d3-array"),
        t = require("d3-interpolate"),
        r = require("d3-time"),
        n = require("d3-time-format"),
        i = require("./array"),
        u = c(require("./continuous")),
        o = a(require("./nice"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var r in e) {
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, r) : {};
          n.get || n.set ? Object.defineProperty(t, r, n) : t[r] = e[r];
        }
      }
      return t.default = e, t;
    }

    var f = 1e3,
        l = 60 * f,
        d = 60 * l,
        p = 24 * d,
        m = 7 * p,
        s = 30 * p,
        v = 365 * p;

    function y(e) {
      return new Date(e);
    }

    function b(e) {
      return e instanceof Date ? +e : +new Date(+e);
    }

    function g(r, n, a, c, D, O, h, w, M) {
      var q = (0, u.default)(u.deinterpolateLinear, t.interpolateNumber),
          j = q.invert,
          P = q.domain,
          _ = M(".%L"),
          k = M(":%S"),
          S = M("%I:%M"),
          x = M("%I %p"),
          F = M("%a %d"),
          I = M("%b %d"),
          L = M("%B"),
          Y = M("%Y"),
          B = [[h, 1, f], [h, 5, 5 * f], [h, 15, 15 * f], [h, 30, 30 * f], [O, 1, l], [O, 5, 5 * l], [O, 15, 15 * l], [O, 30, 30 * l], [D, 1, d], [D, 3, 3 * d], [D, 6, 6 * d], [D, 12, 12 * d], [c, 1, p], [c, 2, 2 * p], [a, 1, m], [n, 1, s], [n, 3, 3 * s], [r, 1, v]];

      function H(e) {
        return (h(e) < e ? _ : O(e) < e ? k : D(e) < e ? S : c(e) < e ? x : n(e) < e ? a(e) < e ? F : I : r(e) < e ? L : Y)(e);
      }

      function N(t, n, i, u) {
        if (null == t && (t = 10), "number" == typeof t) {
          var o = Math.abs(i - n) / t,
              a = (0, e.bisector)(function (e) {
            return e[2];
          }).right(B, o);
          a === B.length ? (u = (0, e.tickStep)(n / v, i / v, t), t = r) : a ? (u = (a = B[o / B[a - 1][2] < B[a][2] / o ? a - 1 : a])[1], t = a[0]) : (u = (0, e.tickStep)(n, i, t), t = w);
        }

        return null == u ? t : t.every(u);
      }

      return q.invert = function (e) {
        return new Date(j(e));
      }, q.domain = function (e) {
        return arguments.length ? P(i.map.call(e, b)) : P().map(y);
      }, q.ticks = function (e, t) {
        var r,
            n = P(),
            i = n[0],
            u = n[n.length - 1],
            o = u < i;
        return o && (r = i, i = u, u = r), r = (r = N(e, i, u, t)) ? r.range(i, u + 1) : [], o ? r.reverse() : r;
      }, q.tickFormat = function (e, t) {
        return null == t ? H : M(t);
      }, q.nice = function (e, t) {
        var r = P();
        return (e = N(e, r[0], r[r.length - 1], t)) ? P((0, o.default)(r, e)) : q;
      }, q.copy = function () {
        return (0, u.copy)(q, g(r, n, a, c, D, O, h, w, M));
      }, q;
    }

    function D() {
      return g(r.timeYear, r.timeMonth, r.timeWeek, r.timeDay, r.timeHour, r.timeMinute, r.timeSecond, r.timeMillisecond, n.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
    }
  }, {
    "d3-array": "jHr9",
    "d3-interpolate": "mkGF",
    "d3-time": "F00f",
    "d3-time-format": "+7zs",
    "./array": "lLkj",
    "./continuous": "683C",
    "./nice": "gRJQ"
  }],
  "Mmh6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./time"),
        t = require("d3-time-format"),
        u = require("d3-time");

    function r() {
      return (0, e.calendar)(u.utcYear, u.utcMonth, u.utcWeek, u.utcDay, u.utcHour, u.utcMinute, u.utcSecond, u.utcMillisecond, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
    }
  }, {
    "./time": "kjHg",
    "d3-time-format": "+7zs",
    "d3-time": "F00f"
  }],
  "qR0/": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e.match(/.{6}/g).map(function (e) {
        return "#" + e;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "PSay": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("./colors"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");
    exports.default = r;
  }, {
    "./colors": "qR0/"
  }],
  "hXHv": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = d(require("./colors"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var c = (0, e.default)("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");
    exports.default = c;
  }, {
    "./colors": "qR0/"
  }],
  "Xd1j": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = d(require("./colors"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = (0, e.default)("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");
    exports.default = a;
  }, {
    "./colors": "qR0/"
  }],
  "rUSS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = f(require("./colors"));

    function f(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = (0, e.default)("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");
    exports.default = d;
  }, {
    "./colors": "qR0/"
  }],
  "8b2+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.plasma = exports.inferno = exports.magma = exports.default = void 0;
    var f = e(require("./colors"));

    function e(f) {
      return f && f.__esModule ? f : {
        default: f
      };
    }

    function a(f) {
      var e = f.length;
      return function (a) {
        return f[Math.max(0, Math.min(e - 1, Math.floor(a * e)))];
      };
    }

    var d = a((0, f.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
    exports.default = d;
    var c = a((0, f.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
    exports.magma = c;
    var b = a((0, f.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
    exports.inferno = b;
    var r = a((0, f.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
    exports.plasma = r;
  }, {
    "./colors": "qR0/"
  }],
  "B+kc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = require("./linear");

    function r(t) {
      var e = 0,
          u = 1,
          i = !1;

      function a(n) {
        var r = (n - e) / (u - e);
        return t(i ? Math.max(0, Math.min(1, r)) : r);
      }

      return a.domain = function (n) {
        return arguments.length ? (e = +n[0], u = +n[1], a) : [e, u];
      }, a.clamp = function (n) {
        return arguments.length ? (i = !!n, a) : i;
      }, a.interpolator = function (n) {
        return arguments.length ? (t = n, a) : t;
      }, a.copy = function () {
        return r(t).domain([e, u]).clamp(i);
      }, (0, n.linearish)(a);
    }
  }, {
    "./linear": "2CB3"
  }],
  "Wl3z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "scaleBand", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "scalePoint", {
      enumerable: !0,
      get: function get() {
        return e.point;
      }
    }), Object.defineProperty(exports, "scaleIdentity", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "scaleLinear", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "scaleLog", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "scaleOrdinal", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "scaleImplicit", {
      enumerable: !0,
      get: function get() {
        return u.implicit;
      }
    }), Object.defineProperty(exports, "scalePow", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "scaleSqrt", {
      enumerable: !0,
      get: function get() {
        return o.sqrt;
      }
    }), Object.defineProperty(exports, "scaleQuantile", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "scaleQuantize", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "scaleThreshold", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "scaleTime", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "scaleUtc", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "schemeCategory10", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "schemeCategory20b", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "schemeCategory20c", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "schemeCategory20", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "interpolateCubehelixDefault", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "interpolateRainbow", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "interpolateWarm", {
      enumerable: !0,
      get: function get() {
        return m.warm;
      }
    }), Object.defineProperty(exports, "interpolateCool", {
      enumerable: !0,
      get: function get() {
        return m.cool;
      }
    }), Object.defineProperty(exports, "interpolateViridis", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "interpolateMagma", {
      enumerable: !0,
      get: function get() {
        return g.magma;
      }
    }), Object.defineProperty(exports, "interpolateInferno", {
      enumerable: !0,
      get: function get() {
        return g.inferno;
      }
    }), Object.defineProperty(exports, "interpolatePlasma", {
      enumerable: !0,
      get: function get() {
        return g.plasma;
      }
    }), Object.defineProperty(exports, "scaleSequential", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    });
    var e = j(require("./src/band")),
        r = P(require("./src/identity")),
        t = P(require("./src/linear")),
        n = P(require("./src/log")),
        u = j(require("./src/ordinal")),
        o = j(require("./src/pow")),
        i = P(require("./src/quantile")),
        c = P(require("./src/quantize")),
        a = P(require("./src/threshold")),
        l = P(require("./src/time")),
        f = P(require("./src/utcTime")),
        s = P(require("./src/category10")),
        p = P(require("./src/category20b")),
        b = P(require("./src/category20c")),
        d = P(require("./src/category20")),
        y = P(require("./src/cubehelix")),
        m = j(require("./src/rainbow")),
        g = j(require("./src/viridis")),
        O = P(require("./src/sequential"));

    function P(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function j(e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e) for (var t in e) {
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
          n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t];
        }
      }
      return r.default = e, r;
    }
  }, {
    "./src/band": "+Dlj",
    "./src/identity": "dT//",
    "./src/linear": "2CB3",
    "./src/log": "7Ans",
    "./src/ordinal": "FTWw",
    "./src/pow": "rtre",
    "./src/quantile": "Da15",
    "./src/quantize": "CMO3",
    "./src/threshold": "DWPp",
    "./src/time": "kjHg",
    "./src/utcTime": "Mmh6",
    "./src/category10": "PSay",
    "./src/category20b": "hXHv",
    "./src/category20c": "Xd1j",
    "./src/category20": "rUSS",
    "./src/cubehelix": "Spoc",
    "./src/rainbow": "pM5F",
    "./src/viridis": "8b2+",
    "./src/sequential": "B+kc"
  }],
  "omQk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.legendColor = v, exports.legendSize = x, exports.legendSymbol = y, exports.default = exports.legendHelpers = void 0;

    var t = require("d3-selection"),
        e = require("d3-format"),
        n = require("d3-dispatch"),
        r = require("d3-scale"),
        l = require("d3-array"),
        a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        i = function i(t) {
      return t;
    },
        o = function o(t) {
      for (var e = [], n = 0, r = t.length; n < r; n++) {
        e[n] = t[r - n - 1];
      }

      return e;
    },
        c = function c(e, n) {
      e.each(function () {
        for (var e, r = (0, t.select)(this), l = r.text().split(/\s+/).reverse(), a = [], i = (r.attr("y"), parseFloat(r.attr("dy")) || 0), o = r.text(null).append("tspan").attr("x", 0).attr("dy", i + "em"); e = l.pop();) {
          a.push(e), o.text(a.join(" ")), o.node().getComputedTextLength() > n && a.length > 1 && (a.pop(), o.text(a.join(" ")), a = [e], o = r.append("tspan").attr("x", 0).attr("dy", 1.2 + i + "em").text(e));
        }
      });
    },
        u = function u() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          e = arguments[1],
          n = arguments[2],
          r = arguments[3],
          l = arguments[4];

      if ("object" === (void 0 === e ? "undefined" : a(e))) {
        if (0 === e.length) return t;

        for (var i = e.length; i < t.length; i++) {
          e.push(t[i]);
        }

        return e;
      }

      if ("function" == typeof e) {
        for (var o = [], c = t.length, u = 0; u < c; u++) {
          o.push(e({
            i: u,
            genLength: c,
            generatedLabels: t,
            domain: n,
            range: r,
            labelDelimiter: l
          }));
        }

        return o;
      }

      return t;
    },
        d = function d(t, e, n) {
      var r = [];
      if (e.length > 1) r = e;else for (var l = t.domain(), a = (l[l.length - 1] - l[0]) / (e - 1), i = 0; i < e; i++) {
        r.push(l[0] + i * a);
      }
      var o = r.map(n);
      return {
        data: r,
        labels: o,
        feature: function feature(e) {
          return t(e);
        }
      };
    },
        s = function s(t, e, n) {
      var r = t.range().map(function (r) {
        var l = t.invertExtent(r);
        return e(l[0]) + " " + n + " " + e(l[1]);
      });
      return {
        data: t.range(),
        labels: r,
        feature: i
      };
    },
        f = function f(t) {
      return {
        data: t.domain(),
        labels: t.domain(),
        feature: function feature(e) {
          return t(e);
        }
      };
    },
        h = function h(t, e, n) {
      t.call("cellover", n, e);
    },
        g = function g(t, e, n) {
      t.call("cellout", n, e);
    },
        p = function p(t, e, n) {
      t.call("cellclick", n, e);
    },
        m = {
      d3_drawShapes: function d3_drawShapes(t, e, n, r, l, a) {
        "rect" === t ? e.attr("height", n).attr("width", r) : "circle" === t ? e.attr("r", l) : "line" === t ? e.attr("x1", 0).attr("x2", r).attr("y1", 0).attr("y2", 0) : "path" === t && e.attr("d", a);
      },
      d3_addText: function d3_addText(t, e, n, r, l) {
        e.append("text").attr("class", r + "label");
        var a = t.selectAll("g." + r + "cell text." + r + "label").data(n).text(i);
        return l && t.selectAll("g." + r + "cell text." + r + "label").call(c, l), a;
      },
      d3_calcType: function d3_calcType(t, e, n, r, l, a) {
        var i = t.invertExtent ? s(t, l, a) : t.ticks ? d(t, n, l) : f(t),
            c = t.range && t.range() || t.domain();
        return i.labels = u(i.labels, r, t.domain(), c, a), e && (i.labels = o(i.labels), i.data = o(i.data)), i;
      },
      d3_filterCells: function d3_filterCells(t, e) {
        var n = t.data.map(function (e, n) {
          return {
            data: e,
            label: t.labels[n]
          };
        }).filter(e),
            r = n.map(function (t) {
          return t.data;
        }),
            l = n.map(function (t) {
          return t.label;
        });
        return t.data = t.data.filter(function (t) {
          return -1 !== r.indexOf(t);
        }), t.labels = t.labels.filter(function (t) {
          return -1 !== l.indexOf(t);
        }), t;
      },
      d3_placement: function d3_placement(t, e, n, r, l, a) {
        e.attr("transform", n), r.attr("transform", l), "horizontal" === t && r.style("text-anchor", a);
      },
      d3_addEvents: function d3_addEvents(t, e) {
        t.on("mouseover.legend", function (t) {
          h(e, t, this);
        }).on("mouseout.legend", function (t) {
          g(e, t, this);
        }).on("click.legend", function (t) {
          p(e, t, this);
        });
      },
      d3_title: function d3_title(t, e, n, r) {
        if ("" !== e) {
          t.selectAll("text." + n + "legendTitle").data([e]).enter().append("text").attr("class", n + "legendTitle"), t.selectAll("text." + n + "legendTitle").text(e), r && t.selectAll("text." + n + "legendTitle").call(c, r);
          var l = t.select("." + n + "legendCells"),
              a = t.select("." + n + "legendTitle").nodes().map(function (t) {
            return t.getBBox().height;
          })[0],
              i = -l.nodes().map(function (t) {
            return t.getBBox().x;
          })[0];
          l.attr("transform", "translate(" + i + "," + a + ")");
        }
      },
      d3_defaultLocale: {
        format: e.format,
        formatPrefix: e.formatPrefix
      },
      d3_defaultFormatSpecifier: ".01f",
      d3_defaultDelimiter: "to"
    };

    function v() {
      var t = (0, r.scaleLinear)(),
          a = "rect",
          i = 15,
          o = 15,
          c = 10,
          u = 2,
          d = [5],
          s = void 0,
          f = [],
          h = "",
          g = !1,
          p = "",
          v = m.d3_defaultLocale,
          x = m.d3_defaultFormatSpecifier,
          y = 10,
          b = "middle",
          _ = m.d3_defaultDelimiter,
          w = void 0,
          S = "vertical",
          L = !1,
          C = void 0,
          A = void 0,
          B = (0, n.dispatch)("cellover", "cellout", "cellclick");

      function T(e) {
        var n = m.d3_calcType(t, L, d, f, v.format(x), _);
        e.selectAll("g").data([t]).enter().append("g").attr("class", h + "legendCells"), s && m.d3_filterCells(n, s);
        var r = e.select("." + h + "legendCells").selectAll("." + h + "cell").data(n.data),
            T = r.enter().append("g").attr("class", h + "cell");
        T.append(a).attr("class", h + "swatch");
        var F = e.selectAll("g." + h + "cell " + a + "." + h + "swatch").data(n.data);
        m.d3_addEvents(T, B), r.exit().transition().style("opacity", 0).remove(), F.exit().transition().style("opacity", 0).remove(), F = F.merge(F), m.d3_drawShapes(a, F, o, i, c, C);
        var W = m.d3_addText(e, T, n.labels, h, w);
        r = T.merge(r);
        var z = W.nodes().map(function (t) {
          return t.getBBox();
        }),
            D = F.nodes().map(function (t) {
          return t.getBBox();
        });
        g ? F.attr("class", function (t) {
          return h + "swatch " + n.feature(t);
        }) : "line" == a ? F.style("stroke", n.feature) : F.style("fill", n.feature);
        var P,
            k = void 0,
            E = void 0,
            O = "start" == b ? 0 : "middle" == b ? .5 : 1;
        "vertical" === S ? (P = z.map(function (t, e) {
          return Math.max(t.height, D[e].height);
        }), k = function k(t, e) {
          return "translate(0, " + ((0, l.sum)(P.slice(0, e)) + e * u) + ")";
        }, E = function E(t, e) {
          return "translate( " + (D[e].width + D[e].x + y) + ", " + (D[e].y + D[e].height / 2 + 5) + ")";
        }) : "horizontal" === S && (k = function k(t, e) {
          return "translate(" + e * (D[e].width + u) + ",0)";
        }, E = function E(t, e) {
          return "translate(" + (D[e].width * O + D[e].x) + ",\n          " + (D[e].height + D[e].y + y + 8) + ")";
        }), m.d3_placement(S, r, k, W, E, b), m.d3_title(e, p, h, A), r.transition().style("opacity", 1);
      }

      return T.scale = function (e) {
        return arguments.length ? (t = e, T) : t;
      }, T.cells = function (t) {
        return arguments.length ? ((t.length > 1 || t >= 2) && (d = t), T) : d;
      }, T.cellFilter = function (t) {
        return arguments.length ? (s = t, T) : s;
      }, T.shape = function (t, e) {
        return arguments.length ? (("rect" == t || "circle" == t || "line" == t || "path" == t && "string" == typeof e) && (a = t, C = e), T) : a;
      }, T.shapeWidth = function (t) {
        return arguments.length ? (i = +t, T) : i;
      }, T.shapeHeight = function (t) {
        return arguments.length ? (o = +t, T) : o;
      }, T.shapeRadius = function (t) {
        return arguments.length ? (c = +t, T) : c;
      }, T.shapePadding = function (t) {
        return arguments.length ? (u = +t, T) : u;
      }, T.labels = function (t) {
        return arguments.length ? (f = t, T) : f;
      }, T.labelAlign = function (t) {
        return arguments.length ? ("start" != t && "end" != t && "middle" != t || (b = t), T) : b;
      }, T.locale = function (t) {
        return arguments.length ? (v = (0, e.formatLocale)(t), T) : v;
      }, T.labelFormat = function (t) {
        return arguments.length ? (x = (0, e.formatSpecifier)(t), T) : T.locale().format(x);
      }, T.labelOffset = function (t) {
        return arguments.length ? (y = +t, T) : y;
      }, T.labelDelimiter = function (t) {
        return arguments.length ? (_ = t, T) : _;
      }, T.labelWrap = function (t) {
        return arguments.length ? (w = t, T) : w;
      }, T.useClass = function (t) {
        return arguments.length ? (!0 !== t && !1 !== t || (g = t), T) : g;
      }, T.orient = function (t) {
        return arguments.length ? ("horizontal" != (t = t.toLowerCase()) && "vertical" != t || (S = t), T) : S;
      }, T.ascending = function (t) {
        return arguments.length ? (L = !!t, T) : L;
      }, T.classPrefix = function (t) {
        return arguments.length ? (h = t, T) : h;
      }, T.title = function (t) {
        return arguments.length ? (p = t, T) : p;
      }, T.titleWidth = function (t) {
        return arguments.length ? (A = t, T) : A;
      }, T.textWrap = function (t) {
        return arguments.length ? (textWrap = t, T) : textWrap;
      }, T.on = function () {
        var t = B.on.apply(B, arguments);
        return t === B ? T : t;
      }, T;
    }

    function x() {
      var t = (0, r.scaleLinear)(),
          a = "rect",
          i = 15,
          o = 2,
          c = [5],
          u = void 0,
          d = [],
          s = "",
          f = "",
          h = m.d3_defaultLocale,
          g = m.d3_defaultFormatSpecifier,
          p = 10,
          v = "middle",
          x = m.d3_defaultDelimiter,
          y = void 0,
          b = "vertical",
          _ = !1,
          w = void 0,
          S = void 0,
          L = (0, n.dispatch)("cellover", "cellout", "cellclick");

      function C(e) {
        var n = m.d3_calcType(t, _, c, d, h.format(g), x),
            r = e.selectAll("g").data([t]);
        u && m.d3_filterCells(n, u), r.enter().append("g").attr("class", s + "legendCells");
        var C = e.select("." + s + "legendCells").selectAll("." + s + "cell").data(n.data),
            A = C.enter().append("g").attr("class", s + "cell");
        A.append(a).attr("class", s + "swatch");
        var B = e.selectAll("g." + s + "cell " + a + "." + s + "swatch");
        m.d3_addEvents(A, L), C.exit().transition().style("opacity", 0).remove(), B.exit().transition().style("opacity", 0).remove(), B = B.merge(B), "line" === a ? (m.d3_drawShapes(a, B, 0, i), B.attr("stroke-width", n.feature)) : m.d3_drawShapes(a, B, n.feature, n.feature, n.feature, w);
        var T = m.d3_addText(e, A, n.labels, s, y);
        C = A.merge(C);
        var F,
            W,
            z = T.nodes().map(function (t) {
          return t.getBBox();
        }),
            D = B.nodes().map(function (e, r) {
          var l = e.getBBox(),
              i = t(n.data[r]);
          return "line" === a && "horizontal" === b ? l.height = l.height + i : "line" === a && "vertical" === b && (l.width = l.width), l;
        }),
            P = (0, l.max)(D, function (t) {
          return t.height + t.y;
        }),
            k = (0, l.max)(D, function (t) {
          return t.width + t.x;
        }),
            E = void 0,
            O = void 0,
            q = "start" == v ? 0 : "middle" == v ? .5 : 1;
        "vertical" === b ? (F = z.map(function (t, e) {
          return Math.max(t.height, D[e].height);
        }), W = "circle" == a || "line" == a ? D[0].height / 2 : 0, E = function E(t, e) {
          var n = (0, l.sum)(F.slice(0, e));
          return "translate(0, " + (W + n + e * o) + ")";
        }, O = function O(t, e) {
          return "translate( " + (k + p) + ",\n          " + (D[e].y + D[e].height / 2 + 5) + ")";
        }) : "horizontal" === b && function () {
          E = function E(t, e) {
            return "translate(" + ((0, l.sum)(D.slice(0, e), function (t) {
              return t.width;
            }) + e * o) + ", " + ("circle" == a || "line" == a ? P / 2 : 0) + ")";
          };

          var t = "line" == a ? P / 2 : P;

          O = function O(e, n) {
            return "translate( " + (D[n].width * q + D[n].x) + ",\n              " + (t + p) + ")";
          };
        }(), m.d3_placement(b, C, E, T, O, v), m.d3_title(e, f, s, S), C.transition().style("opacity", 1);
      }

      return C.scale = function (e) {
        return arguments.length ? (t = e, C) : t;
      }, C.cells = function (t) {
        return arguments.length ? ((t.length > 1 || t >= 2) && (c = t), C) : c;
      }, C.cellFilter = function (t) {
        return arguments.length ? (u = t, C) : u;
      }, C.shape = function (t, e) {
        return arguments.length ? ("rect" != t && "circle" != t && "line" != t || (a = t, w = e), C) : a;
      }, C.shapeWidth = function (t) {
        return arguments.length ? (i = +t, C) : i;
      }, C.shapePadding = function (t) {
        return arguments.length ? (o = +t, C) : o;
      }, C.labels = function (t) {
        return arguments.length ? (d = t, C) : d;
      }, C.labelAlign = function (t) {
        return arguments.length ? ("start" != t && "end" != t && "middle" != t || (v = t), C) : v;
      }, C.locale = function (t) {
        return arguments.length ? (h = (0, e.formatLocale)(t), C) : h;
      }, C.labelFormat = function (t) {
        return arguments.length ? (g = (0, e.formatSpecifier)(t), C) : C.locale().format(g);
      }, C.labelOffset = function (t) {
        return arguments.length ? (p = +t, C) : p;
      }, C.labelDelimiter = function (t) {
        return arguments.length ? (x = t, C) : x;
      }, C.labelWrap = function (t) {
        return arguments.length ? (y = t, C) : y;
      }, C.orient = function (t) {
        return arguments.length ? ("horizontal" != (t = t.toLowerCase()) && "vertical" != t || (b = t), C) : b;
      }, C.ascending = function (t) {
        return arguments.length ? (_ = !!t, C) : _;
      }, C.classPrefix = function (t) {
        return arguments.length ? (s = t, C) : s;
      }, C.title = function (t) {
        return arguments.length ? (f = t, C) : f;
      }, C.titleWidth = function (t) {
        return arguments.length ? (S = t, C) : S;
      }, C.on = function () {
        var t = L.on.apply(L, arguments);
        return t === L ? C : t;
      }, C;
    }

    function y() {
      var t = (0, r.scaleLinear)(),
          a = "path",
          i = 15,
          o = 15,
          c = 10,
          u = 5,
          d = [5],
          s = void 0,
          f = [],
          h = "",
          g = "",
          p = m.d3_defaultLocale,
          v = m.d3_defaultFormatSpecifier,
          x = "middle",
          y = 10,
          b = m.d3_defaultDelimiter,
          _ = void 0,
          w = "vertical",
          S = !1,
          L = void 0,
          C = (0, n.dispatch)("cellover", "cellout", "cellclick");

      function A(e) {
        var n = m.d3_calcType(t, S, d, f, p.format(v), b),
            r = e.selectAll("g").data([t]);
        s && m.d3_filterCells(n, s), r.enter().append("g").attr("class", h + "legendCells");
        var A = e.select("." + h + "legendCells").selectAll("." + h + "cell").data(n.data),
            B = A.enter().append("g").attr("class", h + "cell");
        B.append(a).attr("class", h + "swatch");
        var T = e.selectAll("g." + h + "cell " + a + "." + h + "swatch");
        m.d3_addEvents(B, C), A.exit().transition().style("opacity", 0).remove(), T.exit().transition().style("opacity", 0).remove(), T = T.merge(T), m.d3_drawShapes(a, T, o, i, c, n.feature);
        var F = m.d3_addText(e, B, n.labels, h, _);
        A = B.merge(A);
        var W,
            z = F.nodes().map(function (t) {
          return t.getBBox();
        }),
            D = T.nodes().map(function (t) {
          return t.getBBox();
        }),
            P = (0, l.max)(D, function (t) {
          return t.height;
        }),
            k = (0, l.max)(D, function (t) {
          return t.width;
        }),
            E = void 0,
            O = void 0,
            q = "start" == x ? 0 : "middle" == x ? .5 : 1;
        "vertical" === w ? (W = z.map(function (t, e) {
          return Math.max(P, t.height);
        }), E = function E(t, e) {
          return "translate(0, " + ((0, l.sum)(W.slice(0, e)) + e * u) + " )";
        }, O = function O(t, e) {
          return "translate( " + (k + y) + ",\n              " + (D[e].y + D[e].height / 2 + 5) + ")";
        }) : "horizontal" === w && (E = function E(t, e) {
          return "translate( " + e * (k + u) + ",0)";
        }, O = function O(t, e) {
          return "translate( " + (D[e].width * q + D[e].x) + ",\n              " + (P + y) + ")";
        }), m.d3_placement(w, A, E, F, O, x), m.d3_title(e, g, h, L), A.transition().style("opacity", 1);
      }

      return A.scale = function (e) {
        return arguments.length ? (t = e, A) : t;
      }, A.cells = function (t) {
        return arguments.length ? ((t.length > 1 || t >= 2) && (d = t), A) : d;
      }, A.cellFilter = function (t) {
        return arguments.length ? (s = t, A) : s;
      }, A.shapePadding = function (t) {
        return arguments.length ? (u = +t, A) : u;
      }, A.labels = function (t) {
        return arguments.length ? (f = t, A) : f;
      }, A.labelAlign = function (t) {
        return arguments.length ? ("start" != t && "end" != t && "middle" != t || (x = t), A) : x;
      }, A.locale = function (t) {
        return arguments.length ? (p = (0, e.formatLocale)(t), A) : p;
      }, A.labelFormat = function (t) {
        return arguments.length ? (v = (0, e.formatSpecifier)(t), A) : A.locale().format(v);
      }, A.labelOffset = function (t) {
        return arguments.length ? (y = +t, A) : y;
      }, A.labelDelimiter = function (t) {
        return arguments.length ? (b = t, A) : b;
      }, A.labelWrap = function (t) {
        return arguments.length ? (_ = t, A) : _;
      }, A.orient = function (t) {
        return arguments.length ? ("horizontal" != (t = t.toLowerCase()) && "vertical" != t || (w = t), A) : w;
      }, A.ascending = function (t) {
        return arguments.length ? (S = !!t, A) : S;
      }, A.classPrefix = function (t) {
        return arguments.length ? (h = t, A) : h;
      }, A.title = function (t) {
        return arguments.length ? (g = t, A) : g;
      }, A.titleWidth = function (t) {
        return arguments.length ? (L = t, A) : L;
      }, A.on = function () {
        var t = C.on.apply(C, arguments);
        return t === C ? A : t;
      }, A;
    }

    var b = function b(t) {
      var e = t.i,
          n = t.genLength,
          r = t.generatedLabels,
          l = t.labelDelimiter;
      return 0 === e ? "Less than " + r[e].split(" " + l + " ")[1] : e === n - 1 ? r[e].split(" " + l + " ")[0] + " or more" : r[e];
    },
        _ = {
      thresholdLabels: b
    };

    exports.legendHelpers = _;
    var w = {
      legendColor: v,
      legendSize: x,
      legendSymbol: y,
      legendHelpers: _
    },
        S = w;
    exports.default = S;
  }, {
    "d3-selection": "aV9X",
    "d3-format": "Mi5+",
    "d3-dispatch": "Bxmn",
    "d3-scale": "Wl3z",
    "d3-array": "jHr9"
  }],
  "TLCm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var t = require("d3-collection"),
        e = require("d3-selection");

    function n() {
      var n = function n() {
        return "n";
      },
          r = function r() {
        return [0, 0];
      },
          o = function o() {
        return " ";
      },
          l = document.body,
          i = y(),
          s = null,
          u = null,
          f = null;

      function a(t) {
        var e;
        e = t.node(), (s = e ? "svg" === e.tagName.toLowerCase() ? e : e.ownerSVGElement : null) && (u = s.createSVGPoint(), l.appendChild(i));
      }

      a.show = function () {
        var t = Array.prototype.slice.call(arguments);
        t[t.length - 1] instanceof SVGElement && (f = t.pop());
        var e,
            i = o.apply(this, t),
            s = r.apply(this, t),
            u = n.apply(this, t),
            y = h(),
            d = p.length,
            m = document.documentElement.scrollTop || l.scrollTop,
            x = document.documentElement.scrollLeft || l.scrollLeft;

        for (y.html(i).style("opacity", 1).style("pointer-events", "all"); d--;) {
          y.classed(p[d], !1);
        }

        return e = c.get(u).apply(this), y.classed(u, !0).style("top", e.top + s[0] + m + "px").style("left", e.left + s[1] + x + "px"), a;
      }, a.hide = function () {
        return h().style("opacity", 0).style("pointer-events", "none"), a;
      }, a.attr = function (t, n) {
        if (arguments.length < 2 && "string" == typeof t) return h().attr(t);
        var r = Array.prototype.slice.call(arguments);
        return e.selection.prototype.attr.apply(h(), r), a;
      }, a.style = function (t, n) {
        if (arguments.length < 2 && "string" == typeof t) return h().style(t);
        var r = Array.prototype.slice.call(arguments);
        return e.selection.prototype.style.apply(h(), r), a;
      }, a.direction = function (t) {
        return arguments.length ? (n = null == t ? t : m(t), a) : n;
      }, a.offset = function (t) {
        return arguments.length ? (r = null == t ? t : m(t), a) : r;
      }, a.html = function (t) {
        return arguments.length ? (o = null == t ? t : m(t), a) : o;
      }, a.rootElement = function (t) {
        return arguments.length ? (l = null == t ? t : m(t), a) : l;
      }, a.destroy = function () {
        return i && (h().remove(), i = null), a;
      };
      var c = (0, t.map)({
        n: function n() {
          var t = d(this);
          return {
            top: t.n.y - i.offsetHeight,
            left: t.n.x - i.offsetWidth / 2
          };
        },
        s: function s() {
          var t = d(this);
          return {
            top: t.s.y,
            left: t.s.x - i.offsetWidth / 2
          };
        },
        e: function e() {
          var t = d(this);
          return {
            top: t.e.y - i.offsetHeight / 2,
            left: t.e.x
          };
        },
        w: function w() {
          var t = d(this);
          return {
            top: t.w.y - i.offsetHeight / 2,
            left: t.w.x - i.offsetWidth
          };
        },
        nw: function nw() {
          var t = d(this);
          return {
            top: t.nw.y - i.offsetHeight,
            left: t.nw.x - i.offsetWidth
          };
        },
        ne: function ne() {
          var t = d(this);
          return {
            top: t.ne.y - i.offsetHeight,
            left: t.ne.x
          };
        },
        sw: function sw() {
          var t = d(this);
          return {
            top: t.sw.y,
            left: t.sw.x - i.offsetWidth
          };
        },
        se: function se() {
          var t = d(this);
          return {
            top: t.se.y,
            left: t.se.x
          };
        }
      }),
          p = c.keys();

      function y() {
        var t = (0, e.select)(document.createElement("div"));
        return t.style("position", "absolute").style("top", 0).style("opacity", 0).style("pointer-events", "none").style("box-sizing", "border-box"), t.node();
      }

      function h() {
        return null == i && (i = y(), l.appendChild(i)), (0, e.select)(i);
      }

      function d(t) {
        for (var e = f || t; null == e.getScreenCTM && null != e.parentNode;) {
          e = e.parentNode;
        }

        var n = {},
            r = e.getScreenCTM(),
            o = e.getBBox(),
            l = o.width,
            i = o.height,
            s = o.x,
            a = o.y;
        return u.x = s, u.y = a, n.nw = u.matrixTransform(r), u.x += l, n.ne = u.matrixTransform(r), u.y += i, n.se = u.matrixTransform(r), u.x -= l, n.sw = u.matrixTransform(r), u.y -= i / 2, n.w = u.matrixTransform(r), u.x += l, n.e = u.matrixTransform(r), u.x -= l / 2, u.y -= i / 2, n.n = u.matrixTransform(r), u.y += i, n.s = u.matrixTransform(r), n;
      }

      function m(t) {
        return "function" == typeof t ? t : function () {
          return t;
        };
      }

      return a;
    }
  }, {
    "d3-collection": "qqV1",
    "d3-selection": "lm1C"
  }],
  "ecDH": [function (require, module, exports) {}, {}],
  "bJm2": [function (require, module, exports) {
    module.exports = "starryBG.a39980ea.jpg";
  }, {}],
  "DRqh": [function (require, module, exports) {
    module.exports = "exoplanetData.6c83ee54.csv";
  }, {}],
  "dt5H": [function (require, module, exports) {
    module.exports = "mercury.ceb50bfc.png";
  }, {}],
  "Fgc0": [function (require, module, exports) {
    module.exports = "venus.13b02760.png";
  }, {}],
  "Iaml": [function (require, module, exports) {
    module.exports = "earth.80827384.png";
  }, {}],
  "Ljm0": [function (require, module, exports) {
    module.exports = "mars.ad66f346.png";
  }, {}],
  "ak3j": [function (require, module, exports) {
    module.exports = "jupiter.0429e22d.png";
  }, {}],
  "mM61": [function (require, module, exports) {
    module.exports = "saturn.88c0d9c6.png";
  }, {}],
  "9okJ": [function (require, module, exports) {
    module.exports = "uranus.e07ce1a0.png";
  }, {}],
  "P3+3": [function (require, module, exports) {
    module.exports = "neptune.34fab22e.png";
  }, {}],
  "wfnq": [function (require, module, exports) {
    module.exports = "pluto.89cfe741.png";
  }, {}],
  "sDlH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = u(require("./images/mercury.png")),
        r = u(require("./images/venus.png")),
        p = u(require("./images/earth.png")),
        l = u(require("./images/mars.png")),
        a = u(require("./images/jupiter.png")),
        t = u(require("./images/saturn.png")),
        _ = u(require("./images/uranus.png")),
        s = u(require("./images/neptune.png")),
        i = u(require("./images/pluto.png"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var m = [{
      pl_name: "Mercury",
      pl_orbper: 88,
      pl_orbsmax: .3871,
      pl_radj: .035,
      st_teff: 5778,
      pl_eqt: 440,
      pl_disc: "prehistory",
      image: e.default
    }, {
      pl_name: "Venus",
      pl_orbper: 224.7,
      pl_orbsmax: .7233,
      pl_radj: .087,
      st_teff: 5778,
      pl_eqt: 730,
      pl_disc: "prehistory",
      image: r.default
    }, {
      pl_name: "Earth",
      pl_orbper: 365.2,
      pl_orbsmax: 1,
      pl_radj: .0892,
      st_teff: 5778,
      pl_eqt: 287,
      pl_disc: "prehistory",
      image: p.default
    }, {
      pl_name: "Mars",
      pl_orbper: 687,
      pl_orbsmax: 1.5273,
      pl_radj: .048,
      st_teff: 5778,
      pl_eqt: 218,
      pl_disc: "prehistory",
      image: l.default
    }, {
      pl_name: "Jupiter",
      pl_orbper: 4331,
      pl_orbsmax: 5.2028,
      pl_radj: 1,
      st_teff: 5778,
      pl_eqt: 120,
      pl_disc: "prehistory",
      image: a.default
    }, {
      pl_name: "Saturn",
      pl_orbper: 107474,
      pl_orbsmax: 9.5388,
      pl_radj: .833,
      st_teff: 5778,
      pl_eqt: 88,
      pl_disc: "prehistory",
      image: t.default
    }, {
      pl_name: "Uranus",
      pl_orbper: 30589,
      pl_orbsmax: 19.1914,
      pl_radj: .363,
      st_teff: 5778,
      pl_eqt: 59,
      pl_disc: "prehistory",
      image: _.default
    }, {
      pl_name: "Neptune",
      pl_orbper: 59800,
      pl_orbsmax: 30.0611,
      pl_radj: .352,
      st_teff: 5778,
      pl_eqt: 48,
      pl_disc: "prehistory",
      image: s.default
    }, {
      pl_name: "Pluto",
      pl_orbper: 90560,
      pl_orbsmax: 39.5294,
      pl_radj: .017,
      st_teff: 5778,
      pl_eqt: 37,
      pl_disc: "prehistory",
      image: i.default
    }],
        o = m;
    exports.default = o;
  }, {
    "./images/mercury.png": "dt5H",
    "./images/venus.png": "Fgc0",
    "./images/earth.png": "Iaml",
    "./images/mars.png": "Ljm0",
    "./images/jupiter.png": "ak3j",
    "./images/saturn.png": "mM61",
    "./images/uranus.png": "9okJ",
    "./images/neptune.png": "P3+3",
    "./images/pluto.png": "wfnq"
  }],
  "qlrR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = ["Teegarden b", "K2-72 e", "GJ 3323 b", "TRAPPIST-1 d", "TRAPPIST-1 e", "GJ 667 C f", "Proxima Cen b", "Kepler-442 b", "GJ 273 b", "Wolf 1061 c", "GJ 667 C c", "tau Cet e", "Kepler-1229 b", "GJ 667 C e", "TRAPPIST-1 f", "Kepler-62 f", "Teegarden c", "TRAPPIST-1 g", "Kepler-186 f", "Kepler-452 b", "Kepler-62 e", "Kepler-1652 b", "Kepler-1544 b", "K2-3 d", "Kepler-296 e", "Kepler-283 c", "Kepler-1410 b", "Kepler-1638 b", "K2-296 b", "Kepler-296 f", "Kepler-705 b", "Kepler-440 b", "Kepler-1653 b", "GJ 832 c", "Kepler-1606 b", "Kepler-1090 b", "Kepler-61 b", "Kepler-443 b", "K2-18 b", "Kepler-22 b", "K2-9 b", "Kepler-26 e", "Kepler-1552 b", "Kepler-1540 b", "LHS 1140 b", "Kepler-1632 b", "HD 40307 g", "GJ 163 c", "Kepler-298 d", "K2-288 B b", "GJ 3293 d", "Kepler-174 d"],
        r = e;
    exports.default = r;
  }, {}],
  "9m91": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = i(require("d3")),
        e = require("d3-svg-legend"),
        r = o(require("d3-tip"));

    require("./Exoplanets.css");

    var a = o(require("./images/starryBG.jpg")),
        n = o(require("./exoplanetData.csv")),
        l = o(require("./solarSystemData")),
        s = o(require("./habitablePlanets"));

    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) {
        if (Object.prototype.hasOwnProperty.call(t, r)) {
          var a = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
          a.get || a.set ? Object.defineProperty(e, r, a) : e[r] = t[r];
        }
      }
      return e.default = t, e;
    }

    function d() {
      return (0, r.default)().attr("class", "d3-tip").offset(function () {
        return [-10, 0];
      }).html(function (t) {
        return t.image ? "<h1>" + t.pl_name + "</h1><dl><dt>Orbit Distance</dt><dd>" + t.pl_orbsmax + "</dd><dt>Orbital Period</dt><dd>" + t.pl_orbper + "</dd><dt>Radius</dt><dd>" + t.pl_radj + "</dd><dt>Planet Surface Temp</dt><dd>" + t.pl_eqt + "</dd><dt>Star Temp</dt><dd>" + t.st_teff + "</dd><dt>Year Discovered</dt><dd>" + t.pl_disc + "</dd></dl>" : "<h1>" + t.pl_name + "</h1><dl><dt>Orbit Distance</dt><dd>" + t.pl_orbsmax + "</dd><dt>Orbital Period</dt><dd>" + t.pl_orbper + "</dd><dt>Radius</dt><dd>" + t.pl_radj + "</dd><dt>Planet Equilibrium Temp</dt><dd>" + t.pl_eqt + "</dd><dt>Stellar Distance</dt><dd>" + t.st_dist + "</dd><dt>Star Temp</dt><dd>" + t.st_teff + "</dd><dt>Year Discovered</dt><dd>" + t.pl_disc + "</dd></dl>";
      });
    }

    var c = function c() {
      var r = {
        fullscreen: !1,
        showHabitableOnly: !1
      },
          o = T(),
          i = o.width,
          c = o.height,
          p = 50,
          u = t.select("#exoplanets-viz").append("svg").attr("width", i).attr("height", c),
          f = d();
      u.call(f);
      var m = u.append("defs").append("linearGradient").attr("id", "gradient").attr("x1", "50%").attr("y1", "100%").attr("x2", "50%").attr("y2", "0%").attr("spreadMethod", "pad");
      m.append("stop").attr("offset", "0%").attr("stop-color", "#FF0000").attr("stop-opacity", 1), m.append("stop").attr("offset", "20%").attr("stop-color", "#FFA500").attr("stop-opacity", 1), m.append("stop").attr("offset", "40%").attr("stop-color", "#FFFF00").attr("stop-opacity", 1), m.append("stop").attr("offset", "60%").attr("stop-color", "#FFFFFF").attr("stop-opacity", 1), m.append("stop").attr("offset", "80%").attr("stop-color", "#CCCCFF").attr("stop-opacity", 1), m.append("stop").attr("offset", "90%").attr("stop-color", "#6666FF").attr("stop-opacity", 1), m.append("stop").attr("offset", "100%").attr("stop-color", "#0000FF").attr("stop-opacity", 1);
      var h = u.append("g").attr("id", "container").attr("width", i).attr("transform", "translate(0, 0)"),
          g = h.append("image").attr("id", "background").attr("xlink:href", a.default).attr("height", c).attr("width", i).attr("preserveAspectRatio", "none");
      h.select(".x.axis").append("text").attr("id", "xAxisTitle").style("text-anchor", "middle").attr("x", i / 2).attr("y", 40).text("Orbit Semi-Major Axis (AU)");

      var _,
          x = h.append("g").attr("class", "data-points").attr("transform", "translate(0, " + c / 2 + ")"),
          b = t.scaleLinear(),
          F = t.axisBottom(),
          v = t.scaleLinear(),
          y = t.scaleLinear(),
          w = (0, e.legendColor)();

      function T() {
        return {
          width: r.fullscreen ? document.documentElement.clientWidth : t.select("#exoplanets-viz").node().clientWidth,
          height: r.fullscreen ? document.documentElement.clientHeight : t.select("#exoplanets-viz").node().clientHeight
        };
      }

      function j(e) {
        var a = e,
            n = T(),
            o = n.width,
            i = n.height;
        u.call(t.zoom().on("zoom", function () {
          var e = (_ = t.event.transform).rescaleX(b);

          u.select(".x.axis").call(F.scale(e)), K.attr("transform", function (t) {
            return "translate(" + e(t.pl_orbsmax) + ",0)";
          }), m.attr("transform", function (t) {
            return "translate(" + e(t.pl_orbsmax) + ",0)";
          });
        }.bind(this))), u.attr("width", o).attr("height", i), h.select("#stellerTempLegend").attr("transform", "translate(0, " + (i - 100) + ")").attr("width", o).call(w), h.select(".x.axis").attr("transform", "translate(0, " + (i - p) + ")").call(F), g.attr("height", i).attr("width", o), x.attr("transform", "translate(0, " + i / 2 + ")"), b.range([0, o]), w.labels(["M < 3,500K", "K 3,500 - 5,000K", "G 5,000 - 6,000K", "F 6,000 - 7,500K", "A 7,500 - 10,000K", "B 10,000 - 30,000K", "O 30,000 - 60,000K"]).shapeWidth(o / 7).shapePadding(0).cells([3e3, 5e3, 6e3, 7500, 1e4, 3e4, 6e4]).orient("horizontal").scale(v);
        var d = b;
        _ && (d = _.rescaleX(b), u.select(".x.axis").call(F.scale(d))), r.showHabitableOnly && (e = e.filter(function (t) {
          return s.default.includes(t.pl_name);
        }));
        var c = t.scaleLinear().domain([0, t.max(a, function (t) {
          return t.pl_radj;
        })]).range([0, 200]),
            m = x.selectAll("circle").data(e, function (t) {
          return t.pl_name;
        }).join(function (e) {
          return e.append("circle").attr("transform", function (t) {
            return "translate(" + d(t.pl_orbsmax) + ",0)";
          }).style("pointer-events", "all").style("fill", function (t) {
            return !t.image && t.pl_eqt ? y(t.pl_eqt) : t.image ? "none" : "black";
          }).style("stroke-width", 5).style("stroke", function (t) {
            return t.image ? "none" : v(t.st_teff);
          }).attr("r", 0).on("mouseenter", function (e) {
            t.select(t.event.currentTarget).style("stroke", "blue").style("stroke-width", 2), f.show(e, t.event.currentTarget);
          }).on("mouseleave", function (e) {
            t.select(t.event.currentTarget).style("stroke", function (t) {
              return t.image ? "none" : v(t.st_teff);
            }).style("stroke-width", 5), f.hide(e, t.event.currentTarget);
          }).call(function (t) {
            return t.transition().duration(500).attr("r", function (t) {
              return c(t.pl_radj);
            });
          });
        }, function (t) {
          return t.attr("transform", function (t) {
            return "translate(" + d(t.pl_orbsmax) + ",0)";
          });
        }, function (t) {
          return t.call(function (t) {
            return t.transition().attr("r", 0).remove();
          });
        }),
            K = x.selectAll("image").data(l.default).join(function (e) {
          return e.append("image").attr("xlink:href", function (t) {
            return t.image;
          }).attr("height", function (t) {
            return "Saturn" === t.pl_name ? 3.5 * c(t.pl_radj) : 2 * c(t.pl_radj);
          }).attr("width", function (t) {
            return "Saturn" === t.pl_name ? 3.5 * c(t.pl_radj) : 2 * c(t.pl_radj);
          }).attr("x", function () {
            return -t.select(this).attr("width") / 2;
          }).attr("y", function (e) {
            return "Saturn" === e.pl_name ? -t.select(this).attr("height") / 2 - 4 : -t.select(this).attr("height") / 2;
          }).on("mouseenter", function (e) {
            t.select(t.event.currentTarget).style("stroke", "blue").style("stroke-width", 2), f.show(e, t.event.currentTarget);
          }).on("mouseleave", function (e) {
            t.select(t.event.currentTarget).style("stroke", function (t) {
              return t.image ? "none" : v(t.st_teff);
            }).style("stroke-width", 5), f.hide(e, t.event.currentTarget);
          });
        });
        document.getElementsByClassName("btn-fullscreen")[0].onclick = function () {
          r.fullscreen = !r.fullscreen, document.getElementById("icon-fullscreen").classList.toggle("fa-compress-arrows-alt"), document.getElementById("icon-fullscreen").classList.toggle("fa-arrows-alt"), document.getElementById("exoplanets-viz").classList.toggle("fullscreen"), j(a);
        }, document.getElementsByClassName("cb-habitable")[0].onchange = function () {
          r.showHabitableOnly = !r.showHabitableOnly, j(a);
        };
      }

      t.csv(n.default, function (t) {
        return t.pl_orbsmax = +t.pl_orbsmax, t.pl_orbsper = +t.pl_orbsper, t.pl_radj = +t.pl_radj, t.pl_eqt = +t.pl_eqt, t.st_dist = +t.st_dist, t.st_teff = +t.st_teff, t;
      }).then(function (r) {
        r = r.filter(function (t) {
          return t.pl_orbsmax > 0;
        }).sort(function (t, e) {
          return e.pl_radj - t.pl_radj;
        }), window.addEventListener("resize", function () {
          return j(r);
        }), b.domain([0, t.max(r, function (t) {
          return t.pl_orbsmax;
        })]).range([0, i]), F.scale(b).tickFormat(function (e) {
          return e < 0 ? "" : t.format("")(e);
        }), h.append("g").attr("class", "x axis").attr("transform", "translate(0, " + (c - p) + ")");
        var a = c / 4,
            n = a / 9;
        v.domain([t.min(r, function (t) {
          return t.st_teff;
        }), 5e3, 6e3, 7500, 1e4, 3e4, 6e4]).range(["#FF0000", "#FFA500", "#FFFF00", "#FFFFFF", "#CCCCFF", "#6666FF", "#0000FF"]), y.domain([t.min(r, function (t) {
          return t.pl_eqt;
        }), 184, 294, 330, 400, t.max(r, function (t) {
          return t.pl_eqt;
        })]).range(["#78D5E3", "#00FFAA", "#00CC00", "#CCF000", "#CC6900", "#800000"]), h.append("g").attr("id", "planetTempLegend").attr("transform", "translate(0, " + (n + 32) + ")").append("rect").style("fill", "black").style("stroke", "white").attr("width", 230).attr("height", a).attr("transform", "translate(0, " + (-n - 32) + ")");
        var l = (0, e.legendColor)().labels(["0 Kelvin (K)", "294 K (Earth Temperature)", "2550 K"]).shape("circle").shapeRadius(n).shapePadding(5).cells([0, 294, 2550]).orient("vertical").scale(y);
        h.select("#planetTempLegend").append("text").attr("class", "legendTitle").attr("transform", "translate(5, " + (-n - 16) + ")").text("Exoplanet Temperature"), h.select("#planetTempLegend").call(l), h.append("g").attr("id", "stellerTempLegend").attr("transform", "translate(0, " + (c - 100) + ")"), w.labels(["M < 3,500K", "K 3,500 - 5,000K", "G 5,000 - 6,000K", "F 6,000 - 7,500K", "A 7,500 - 10,000K", "B 10,000 - 30,000K", "O 30,000 - 60,000K"]).shapeWidth(i / 7).shapePadding(0).cells([3e3, 5e3, 6e3, 7500, 1e4, 3e4, 6e4]).orient("horizontal").scale(v), h.select("#stellerTempLegend").append("text").attr("class", "legendTitle").attr("transform", "translate(5-5)").text("Host Star Spectral Classification and Temperature"), h.select("#stellerTempLegend").call(w), j(r);
      });
    },
        p = c;

    exports.default = p;
  }, {
    "d3": "BG5c",
    "d3-svg-legend": "omQk",
    "d3-tip": "TLCm",
    "./Exoplanets.css": "ecDH",
    "./images/starryBG.jpg": "bJm2",
    "./exoplanetData.csv": "DRqh",
    "./solarSystemData": "sDlH",
    "./habitablePlanets": "qlrR"
  }],
  "Focm": [function (require, module, exports) {
    "use strict";

    require("@fortawesome/fontawesome-free/css/all.css");

    var e = s(require("./exoplanets.js"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    (0, e.default)();
  }, {
    "@fortawesome/fontawesome-free/css/all.css": "Eofe",
    "./exoplanets.js": "9m91"
  }]
}, {}, ["Focm"], null);
},{}]