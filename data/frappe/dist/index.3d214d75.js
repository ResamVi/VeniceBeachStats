// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"km5uZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _frappeChartsMinEsm = require("frappe-charts/dist/frappe-charts.min.esm");
var _dataJs = require("../data.js");
var _dataJsDefault = parcelHelpers.interopDefault(_dataJs);
const trans = {
    labels: (0, _dataJsDefault.default).map((row)=>row.date),
    datasets: [
        {
            name: "Some Data",
            type: "bar",
            values: (0, _dataJsDefault.default).map((row)=>row.count)
        }
    ]
};
new (0, _frappeChartsMinEsm.Chart)("#chart", {
    data: trans,
    type: "line",
    height: 550,
    yMarkers: [
        {
            label: "Threshold",
            value: 230,
            options: {
                labelPos: "left"
            } // default: 'right'
        }
    ],
    yRegions: [
        {
            label: "Optimum Value",
            start: 10,
            end: 50,
            options: {
                labelPos: "right"
            }
        }
    ],
    lineOptions: {
        hideDots: 1
    },
    axisOptions: {
        xIsSeries: true // default: false
    }
});

},{"frappe-charts/dist/frappe-charts.min.esm":"aIAHP","../data.js":"i07uf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIAHP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chart", ()=>Chart);
parcelHelpers.export(exports, "PercentageChart", ()=>PercentageChart);
parcelHelpers.export(exports, "PieChart", ()=>PieChart);
parcelHelpers.export(exports, "Heatmap", ()=>Heatmap);
parcelHelpers.export(exports, "AxisChart", ()=>AxisChart);
function styleInject(t, e) {
    void 0 === e && (e = {});
    var n = e.insertAt;
    if (t && "undefined" != typeof document) {
        var i = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
        a.type = "text/css", "top" === n && i.firstChild ? i.insertBefore(a, i.firstChild) : i.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
    }
}
function $(t, e) {
    return "string" == typeof t ? (e || document).querySelector(t) : t || null;
}
function getOffset(t) {
    var e = t.getBoundingClientRect();
    return {
        top: e.top + (document.documentElement.scrollTop || document.body.scrollTop),
        left: e.left + (document.documentElement.scrollLeft || document.body.scrollLeft)
    };
}
function isHidden(t) {
    return null === t.offsetParent;
}
function isElementInViewport(t) {
    var e = t.getBoundingClientRect();
    return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function getElementContentWidth(t) {
    var e = window.getComputedStyle(t), n = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight);
    return t.clientWidth - n;
}
function fire(t, e, n) {
    var i = document.createEvent("HTMLEvents");
    i.initEvent(e, !0, !0);
    for(var a in n)i[a] = n[a];
    return t.dispatchEvent(i);
}
function getTopOffset(t) {
    return t.titleHeight + t.margins.top + t.paddings.top;
}
function getLeftOffset(t) {
    return t.margins.left + t.paddings.left;
}
function getExtraHeight(t) {
    return t.margins.top + t.margins.bottom + t.paddings.top + t.paddings.bottom + t.titleHeight + t.legendHeight;
}
function getExtraWidth(t) {
    return t.margins.left + t.margins.right + t.paddings.left + t.paddings.right;
}
function _classCallCheck$4(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function floatTwo(t) {
    return parseFloat(t.toFixed(2));
}
function fillArray(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    n || (n = i ? t[0] : t[t.length - 1]);
    var a = new Array(Math.abs(e)).fill(n);
    return t = i ? a.concat(t) : t.concat(a);
}
function getStringWidth(t, e) {
    return (t + "").length * e;
}
function getPositionByAngle(t, e) {
    return {
        x: Math.sin(t * ANGLE_RATIO) * e,
        y: Math.cos(t * ANGLE_RATIO) * e
    };
}
function isValidNumber(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return !Number.isNaN(t) && void 0 !== t && !!Number.isFinite(t) && !(e && t < 0);
}
function round(t) {
    return Number(Math.round(t + "e4") + "e-4");
}
function deepClone(t) {
    var e = void 0, n = void 0, i = void 0;
    if (t instanceof Date) return new Date(t.getTime());
    if ("object" !== (void 0 === t ? "undefined" : _typeof$2(t)) || null === t) return t;
    e = Array.isArray(t) ? [] : {};
    for(i in t)n = t[i], e[i] = deepClone(n);
    return e;
}
function getBarHeightAndYAttr(t, e) {
    var n = void 0, i = void 0;
    return t <= e ? (n = e - t, i = t) : (n = t - e, i = e), [
        n,
        i
    ];
}
function equilizeNoOfElements(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length - t.length;
    return n > 0 ? t = fillArray(t, n) : e = fillArray(e, n), [
        t,
        e
    ];
}
function truncateString(t, e) {
    if (t) return t.length > e ? t.slice(0, e - 3) + "..." : t;
}
function shortenLargeNumber(t) {
    var e = void 0;
    if ("number" == typeof t) e = t;
    else if ("string" == typeof t && (e = Number(t), Number.isNaN(e))) return t;
    var n = Math.floor(Math.log10(Math.abs(e)));
    if (n <= 2) return e;
    var i = Math.floor(n / 3), a = Math.pow(10, n - 3 * i) * +(e / Math.pow(10, n)).toFixed(1);
    return Math.round(100 * a) / 100 + " " + [
        "",
        "K",
        "M",
        "B",
        "T"
    ][i];
}
function getSplineCurvePointsStr(t, e) {
    for(var n = [], i = 0; i < t.length; i++)n.push([
        t[i],
        e[i]
    ]);
    var a = function(t, e) {
        var n = e[0] - t[0], i = e[1] - t[1];
        return {
            length: Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)),
            angle: Math.atan2(i, n)
        };
    }, r = function(t, e, n, i) {
        var r = a(e || t, n || t), o = r.angle + (i ? Math.PI : 0), s = .2 * r.length;
        return [
            t[0] + Math.cos(o) * s,
            t[1] + Math.sin(o) * s
        ];
    };
    return function(t, e) {
        return t.reduce(function(t, n, i, a) {
            return 0 === i ? n[0] + "," + n[1] : t + " " + e(n, i, a);
        }, "");
    }(n, function(t, e, n) {
        var i = r(n[e - 1], n[e - 2], t), a = r(t, n[e - 1], n[e + 1], !0);
        return "C " + i[0] + "," + i[1] + " " + a[0] + "," + a[1] + " " + t[0] + "," + t[1];
    });
}
function limitColor(t) {
    return t > 255 ? 255 : t < 0 ? 0 : t;
}
function lightenDarkenColor(t, e) {
    var n = getColor(t), i = !1;
    "#" == n[0] && (n = n.slice(1), i = !0);
    var a = parseInt(n, 16), r = limitColor((a >> 16) + e), o = limitColor((a >> 8 & 255) + e), s = limitColor((255 & a) + e);
    return (i ? "#" : "") + (s | o << 8 | r << 16).toString(16);
}
function isValidColor(t) {
    var e = /(^\s*)(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i;
    return /(^\s*)(#)((?:[A-Fa-f0-9]{3}){1,2})$/i.test(t) || e.test(t);
}
function $$1(t, e) {
    return "string" == typeof t ? (e || document).querySelector(t) : t || null;
}
function createSVG(t, e) {
    var n = document.createElementNS("http://www.w3.org/2000/svg", t);
    for(var i in e){
        var a = e[i];
        if ("inside" === i) $$1(a).appendChild(n);
        else if ("around" === i) {
            var r = $$1(a);
            r.parentNode.insertBefore(n, r), n.appendChild(r);
        } else "styles" === i ? "object" === (void 0 === a ? "undefined" : _typeof$1(a)) && Object.keys(a).map(function(t) {
            n.style[t] = a[t];
        }) : ("className" === i && (i = "class"), "innerHTML" === i ? n.textContent = a : n.setAttribute(i, a));
    }
    return n;
}
function renderVerticalGradient(t, e) {
    return createSVG("linearGradient", {
        inside: t,
        id: e,
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 1
    });
}
function setGradientStop(t, e, n, i) {
    return createSVG("stop", {
        inside: t,
        style: "stop-color: " + n,
        offset: e,
        "stop-opacity": i
    });
}
function makeSVGContainer(t, e, n, i) {
    return createSVG("svg", {
        className: e,
        inside: t,
        width: n,
        height: i
    });
}
function makeSVGDefs(t) {
    return createSVG("defs", {
        inside: t
    });
}
function makeSVGGroup(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, i = {
        className: t,
        transform: e
    };
    return n && (i.inside = n), createSVG("g", i);
}
function makePath(t) {
    return createSVG("path", {
        className: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        d: t,
        styles: {
            stroke: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
            fill: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
            "stroke-width": arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2
        }
    });
}
function makeArcPathStr(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o = n.x + t.x, s = n.y + t.y, l = n.x + e.x, u = n.y + e.y;
    return "M" + n.x + " " + n.y + "\n		L" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u + " z";
}
function makeCircleStr(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o = n.x + t.x, s = n.y + t.y, l = n.x + e.x, u = 2 * n.y, c = n.y + e.y;
    return "M" + n.x + " " + n.y + "\n		L" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u + " z\n		L" + o + " " + u + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + c + " z";
}
function makeArcStrokePathStr(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o = n.x + t.x, s = n.y + t.y, l = n.x + e.x, u = n.y + e.y;
    return "M" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u;
}
function makeStrokeCircleStr(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o = n.x + t.x, s = n.y + t.y, l = n.x + e.x, u = 2 * i + s, c = n.y + t.y;
    return "M" + o + " " + s + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + u + "\n		M" + o + " " + u + "\n		A " + i + " " + i + " 0 " + r + " " + (a ? 1 : 0) + "\n		" + l + " " + c;
}
function makeGradient(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = "path-fill-gradient-" + e + "-" + (n ? "lighter" : "default"), a = renderVerticalGradient(t, i), r = [
        1,
        .6,
        .2
    ];
    return n && (r = [
        .4,
        .2,
        0
    ]), setGradientStop(a, "0%", e, r[0]), setGradientStop(a, "50%", e, r[1]), setGradientStop(a, "100%", e, r[2]), i;
}
function percentageBar(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : PERCENTAGE_BAR_DEFAULT_DEPTH, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "none";
    return createSVG("rect", {
        className: "percentage-bar",
        x: t,
        y: e,
        width: n,
        height: i,
        fill: r,
        styles: {
            stroke: lightenDarkenColor(r, -25),
            "stroke-dasharray": "0, " + (i + n) + ", " + n + ", " + i,
            "stroke-width": a
        }
    });
}
function heatSquare(t, e, n, i, a) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "none", o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}, s = {
        className: t,
        x: e,
        y: n,
        width: i,
        height: i,
        rx: a,
        fill: r
    };
    return Object.keys(o).map(function(t) {
        s[t] = o[t];
    }), createSVG("rect", s);
}
function legendBar(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", a = arguments[4];
    a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5] ? truncateString(a, LABEL_MAX_CHARS) : a;
    var r = {
        className: "legend-bar",
        x: 0,
        y: 0,
        width: n,
        height: "2px",
        fill: i
    }, o = createSVG("text", {
        className: "legend-dataset-text",
        x: 0,
        y: 0,
        dy: 2 * FONT_SIZE + "px",
        "font-size": 1.2 * FONT_SIZE + "px",
        "text-anchor": "start",
        fill: FONT_FILL,
        innerHTML: a
    }), s = createSVG("g", {
        transform: "translate(" + t + ", " + e + ")"
    });
    return s.appendChild(createSVG("rect", r)), s.appendChild(o), s;
}
function legendDot(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none", a = arguments[4];
    a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5] ? truncateString(a, LABEL_MAX_CHARS) : a;
    var r = {
        className: "legend-dot",
        cx: 0,
        cy: 0,
        r: n,
        fill: i
    }, o = createSVG("text", {
        className: "legend-dataset-text",
        x: 0,
        y: 0,
        dx: FONT_SIZE + "px",
        dy: FONT_SIZE / 3 + "px",
        "font-size": 1.2 * FONT_SIZE + "px",
        "text-anchor": "start",
        fill: FONT_FILL,
        innerHTML: a
    }), s = createSVG("g", {
        transform: "translate(" + t + ", " + e + ")"
    });
    return s.appendChild(createSVG("circle", r)), s.appendChild(o), s;
}
function makeText(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, r = a.fontSize || FONT_SIZE;
    return createSVG("text", {
        className: t,
        x: e,
        y: n,
        dy: (void 0 !== a.dy ? a.dy : r / 2) + "px",
        "font-size": r + "px",
        fill: a.fill || FONT_FILL,
        "text-anchor": a.textAnchor || "start",
        innerHTML: i
    });
}
function makeVertLine(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    a.stroke || (a.stroke = BASE_LINE_COLOR);
    var r = createSVG("line", {
        className: "line-vertical " + a.className,
        x1: 0,
        x2: 0,
        y1: n,
        y2: i,
        styles: {
            stroke: a.stroke
        }
    }), o = createSVG("text", {
        x: 0,
        y: n > i ? n + LABEL_MARGIN : n - LABEL_MARGIN - FONT_SIZE,
        dy: FONT_SIZE + "px",
        "font-size": FONT_SIZE + "px",
        "text-anchor": "middle",
        innerHTML: e + ""
    }), s = createSVG("g", {
        transform: "translate(" + t + ", 0)"
    });
    return s.appendChild(r), s.appendChild(o), s;
}
function makeHoriLine(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    a.stroke || (a.stroke = BASE_LINE_COLOR), a.lineType || (a.lineType = ""), a.shortenNumbers && (e = shortenLargeNumber(e));
    var r = createSVG("line", {
        className: "line-horizontal " + a.className + ("dashed" === a.lineType ? "dashed" : ""),
        x1: n,
        x2: i,
        y1: 0,
        y2: 0,
        styles: {
            stroke: a.stroke
        }
    }), o = createSVG("text", {
        x: n < i ? n - LABEL_MARGIN : n + LABEL_MARGIN,
        y: 0,
        dy: FONT_SIZE / 2 - 2 + "px",
        "font-size": FONT_SIZE + "px",
        "text-anchor": n < i ? "end" : "start",
        innerHTML: e + ""
    }), s = createSVG("g", {
        transform: "translate(0, " + t + ")",
        "stroke-opacity": 1
    });
    return 0 !== o && "0" !== o || (s.style.stroke = "rgba(27, 31, 35, 0.6)"), s.appendChild(r), s.appendChild(o), s;
}
function yLine(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    isValidNumber(t) || (t = 0), i.pos || (i.pos = "left"), i.offset || (i.offset = 0), i.mode || (i.mode = "span"), i.stroke || (i.stroke = BASE_LINE_COLOR), i.className || (i.className = "");
    var a = -1 * AXIS_TICK_LENGTH, r = "span" === i.mode ? n + AXIS_TICK_LENGTH : 0;
    return "tick" === i.mode && "right" === i.pos && (a = n + AXIS_TICK_LENGTH, r = n), a += i.offset, r += i.offset, makeHoriLine(t, e, a, r, {
        stroke: i.stroke,
        className: i.className,
        lineType: i.lineType,
        shortenNumbers: i.shortenNumbers
    });
}
function xLine(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    isValidNumber(t) || (t = 0), i.pos || (i.pos = "bottom"), i.offset || (i.offset = 0), i.mode || (i.mode = "span"), i.stroke || (i.stroke = BASE_LINE_COLOR), i.className || (i.className = "");
    var a = n + AXIS_TICK_LENGTH, r = "span" === i.mode ? -1 * AXIS_TICK_LENGTH : n;
    return "tick" === i.mode && "top" === i.pos && (a = -1 * AXIS_TICK_LENGTH, r = 0), makeVertLine(t, e, a, r, {
        stroke: i.stroke,
        className: i.className,
        lineType: i.lineType
    });
}
function yMarker(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    i.labelPos || (i.labelPos = "right");
    var a = createSVG("text", {
        className: "chart-label",
        x: "left" === i.labelPos ? LABEL_MARGIN : n - getStringWidth(e, 5) - LABEL_MARGIN,
        y: 0,
        dy: FONT_SIZE / -2 + "px",
        "font-size": FONT_SIZE + "px",
        "text-anchor": "start",
        innerHTML: e + ""
    }), r = makeHoriLine(t, "", 0, n, {
        stroke: i.stroke || BASE_LINE_COLOR,
        className: i.className || "",
        lineType: i.lineType
    });
    return r.appendChild(a), r;
}
function yRegion(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, r = t - e, o = createSVG("rect", {
        className: "bar mini",
        styles: {
            fill: "rgba(228, 234, 239, 0.49)",
            stroke: BASE_LINE_COLOR,
            "stroke-dasharray": n + ", " + r
        },
        x: 0,
        y: 0,
        width: n,
        height: r
    });
    a.labelPos || (a.labelPos = "right");
    var s = createSVG("text", {
        className: "chart-label",
        x: "left" === a.labelPos ? LABEL_MARGIN : n - getStringWidth(i + "", 4.5) - LABEL_MARGIN,
        y: 0,
        dy: FONT_SIZE / -2 + "px",
        "font-size": FONT_SIZE + "px",
        "text-anchor": "start",
        innerHTML: i + ""
    }), l = createSVG("g", {
        transform: "translate(0, " + e + ")"
    });
    return l.appendChild(o), l.appendChild(s), l;
}
function datasetBar(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0, s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {}, l = getBarHeightAndYAttr(e, s.zeroLine), u = _slicedToArray(l, 2), c = u[0], h = u[1];
    h -= o, 0 === c && (c = s.minHeight, h -= s.minHeight), isValidNumber(t) || (t = 0), isValidNumber(h) || (h = 0), isValidNumber(c, !0) || (c = 0), isValidNumber(n, !0) || (n = 0);
    var d = createSVG("rect", {
        className: "bar mini",
        style: "fill: " + i,
        "data-point-index": r,
        x: t,
        y: h,
        width: n,
        height: c
    });
    if ((a += "") || a.length) {
        d.setAttribute("y", 0), d.setAttribute("x", 0);
        var f = createSVG("text", {
            className: "data-point-value",
            x: n / 2,
            y: 0,
            dy: FONT_SIZE / 2 * -1 + "px",
            "font-size": FONT_SIZE + "px",
            "text-anchor": "middle",
            innerHTML: a
        }), p = createSVG("g", {
            "data-point-index": r,
            transform: "translate(" + t + ", " + h + ")"
        });
        return p.appendChild(d), p.appendChild(f), p;
    }
    return d;
}
function datasetDot(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "", r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, o = createSVG("circle", {
        style: "fill: " + i,
        "data-point-index": r,
        cx: t,
        cy: e,
        r: n
    });
    if ((a += "") || a.length) {
        o.setAttribute("cy", 0), o.setAttribute("cx", 0);
        var s = createSVG("text", {
            className: "data-point-value",
            x: 0,
            y: 0,
            dy: FONT_SIZE / 2 * -1 - n + "px",
            "font-size": FONT_SIZE + "px",
            "text-anchor": "middle",
            innerHTML: a
        }), l = createSVG("g", {
            "data-point-index": r,
            transform: "translate(" + t + ", " + e + ")"
        });
        return l.appendChild(o), l.appendChild(s), l;
    }
    return o;
}
function getPaths(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, r = e.map(function(e, n) {
        return t[n] + "," + e;
    }).join("L");
    i.spline && (r = getSplineCurvePointsStr(t, e));
    var o = makePath("M" + r, "line-graph-path", n);
    if (i.heatline) {
        var s = makeGradient(a.svgDefs, n);
        o.style.stroke = "url(#" + s + ")";
    }
    var l = {
        path: o
    };
    if (i.regionFill) {
        var u = makeGradient(a.svgDefs, n, !0), c = "M" + t[0] + "," + a.zeroLine + "L" + r + "L" + t.slice(-1)[0] + "," + a.zeroLine;
        l.region = makePath(c, "region-fill", "none", "url(#" + u + ")");
    }
    return l;
}
function translate(t, e, n, i) {
    var a = "string" == typeof e ? e : e.join(", ");
    return [
        t,
        {
            transform: n.join(", ")
        },
        i,
        STD_EASING,
        "translate",
        {
            transform: a
        }
    ];
}
function translateVertLine(t, e, n) {
    return translate(t, [
        n,
        0
    ], [
        e,
        0
    ], MARKER_LINE_ANIM_DUR);
}
function translateHoriLine(t, e, n) {
    return translate(t, [
        0,
        n
    ], [
        0,
        e
    ], MARKER_LINE_ANIM_DUR);
}
function animateRegion(t, e, n, i) {
    var a = e - n, r = t.childNodes[0];
    return [
        [
            r,
            {
                height: a,
                "stroke-dasharray": r.getAttribute("width") + ", " + a
            },
            MARKER_LINE_ANIM_DUR,
            STD_EASING
        ],
        translate(t, [
            0,
            i
        ], [
            0,
            n
        ], MARKER_LINE_ANIM_DUR)
    ];
}
function animateBar(t, e, n, i) {
    var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r = getBarHeightAndYAttr(n, (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}).zeroLine), o = _slicedToArray$2(r, 2), s = o[0], l = o[1];
    return l -= a, "rect" !== t.nodeName ? [
        [
            t.childNodes[0],
            {
                width: i,
                height: s
            },
            UNIT_ANIM_DUR,
            STD_EASING
        ],
        translate(t, t.getAttribute("transform").split("(")[1].slice(0, -1), [
            e,
            l
        ], MARKER_LINE_ANIM_DUR)
    ] : [
        [
            t,
            {
                width: i,
                height: s,
                x: e,
                y: l
            },
            UNIT_ANIM_DUR,
            STD_EASING
        ]
    ];
}
function animateDot(t, e, n) {
    return "circle" !== t.nodeName ? [
        translate(t, t.getAttribute("transform").split("(")[1].slice(0, -1), [
            e,
            n
        ], MARKER_LINE_ANIM_DUR)
    ] : [
        [
            t,
            {
                cx: e,
                cy: n
            },
            UNIT_ANIM_DUR,
            STD_EASING
        ]
    ];
}
function animatePath(t, e, n, i, a) {
    var r = [], o = n.map(function(t, n) {
        return e[n] + "," + t;
    }).join("L");
    a && (o = getSplineCurvePointsStr(e, n));
    var s = [
        t.path,
        {
            d: "M" + o
        },
        PATH_ANIM_DUR,
        STD_EASING
    ];
    if (r.push(s), t.region) {
        var l = e[0] + "," + i + "L", u = "L" + e.slice(-1)[0] + ", " + i, c = [
            t.region,
            {
                d: "M" + l + o + u
            },
            PATH_ANIM_DUR,
            STD_EASING
        ];
        r.push(c);
    }
    return r;
}
function animatePathStr(t, e) {
    return [
        t,
        {
            d: e
        },
        UNIT_ANIM_DUR,
        STD_EASING
    ];
}
function _toConsumableArray$1(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function animateSVGElement(t, e, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear", a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, o = t.cloneNode(!0), s = t.cloneNode(!0);
    for(var l in e){
        var u = void 0;
        u = "transform" === l ? document.createElementNS("http://www.w3.org/2000/svg", "animateTransform") : document.createElementNS("http://www.w3.org/2000/svg", "animate");
        var c = r[l] || t.getAttribute(l), h = e[l], d = {
            attributeName: l,
            from: c,
            to: h,
            begin: "0s",
            dur: n / 1e3 + "s",
            values: c + ";" + h,
            keySplines: EASING[i],
            keyTimes: "0;1",
            calcMode: "spline",
            fill: "freeze"
        };
        a && (d.type = a);
        for(var f in d)u.setAttribute(f, d[f]);
        o.appendChild(u), a ? s.setAttribute(l, "translate(" + h + ")") : s.setAttribute(l, h);
    }
    return [
        o,
        s
    ];
}
function transform(t, e) {
    t.style.transform = e, t.style.webkitTransform = e, t.style.msTransform = e, t.style.mozTransform = e, t.style.oTransform = e;
}
function animateSVG(t, e) {
    var n = [], i = [];
    e.map(function(t) {
        var e = t[0], a = e.parentNode, r = void 0, o = void 0;
        t[0] = e;
        var s = animateSVGElement.apply(void 0, _toConsumableArray$1(t)), l = _slicedToArray$1(s, 2);
        r = l[0], o = l[1], n.push(o), i.push([
            r,
            a
        ]), a && a.replaceChild(r, e);
    });
    var a = t.cloneNode(!0);
    return i.map(function(t, i) {
        t[1] && (t[1].replaceChild(n[i], t[0]), e[i][0] = n[i]);
    }), a;
}
function runSMILAnimation(t, e, n) {
    if (0 !== n.length) {
        var i = animateSVG(e, n);
        e.parentNode == t && (t.removeChild(e), t.appendChild(i)), setTimeout(function() {
            i.parentNode == t && (t.removeChild(i), t.appendChild(e));
        }, REPLACE_ALL_NEW_DUR);
    }
}
function downloadFile(t, e) {
    var n = document.createElement("a");
    n.style = "display: none";
    var i = new Blob(e, {
        type: "image/svg+xml; charset=utf-8"
    }), a = window.URL.createObjectURL(i);
    n.href = a, n.download = t, document.body.appendChild(n), n.click(), setTimeout(function() {
        document.body.removeChild(n), window.URL.revokeObjectURL(a);
    }, 300);
}
function prepareForExport(t) {
    var e = t.cloneNode(!0);
    e.classList.add("chart-container"), e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    var n = $.create("style", {
        innerHTML: CSSTEXT
    });
    e.insertBefore(n, e.firstChild);
    var i = $.create("div");
    return i.appendChild(e), i.innerHTML;
}
function _classCallCheck$3(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _classCallCheck$2(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn$1(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function _inherits$1(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function treatAsUtc(t) {
    var e = new Date(t);
    return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e;
}
function getYyyyMmDd(t) {
    var e = t.getDate(), n = t.getMonth() + 1;
    return [
        t.getFullYear(),
        (n > 9 ? "" : "0") + n,
        (e > 9 ? "" : "0") + e
    ].join("-");
}
function clone(t) {
    return new Date(t.getTime());
}
function getWeeksBetween(t, e) {
    var n = setDayToSunday(t);
    return Math.ceil(getDaysBetween(n, e) / NO_OF_DAYS_IN_WEEK);
}
function getDaysBetween(t, e) {
    var n = SEC_IN_DAY * NO_OF_MILLIS;
    return (treatAsUtc(e) - treatAsUtc(t)) / n;
}
function areInSameMonth(t, e) {
    return t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
}
function getMonthName(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = MONTH_NAMES[t];
    return e ? n.slice(0, 3) : n;
}
function getLastDateInMonth(t, e) {
    return new Date(e, t + 1, 0);
}
function setDayToSunday(t) {
    var e = clone(t), n = e.getDay();
    return 0 !== n && addDays(e, -1 * n), e;
}
function addDays(t, e) {
    t.setDate(t.getDate() + e);
}
function _classCallCheck$5(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function getComponent(t, e, n) {
    var i = Object.keys(componentConfigs).filter(function(e) {
        return t.includes(e);
    }), a = componentConfigs[i[0]];
    return Object.assign(a, {
        constants: e,
        getData: n
    }), new ChartComponent(a);
}
function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function _classCallCheck$1(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function _toConsumableArray$2(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function _classCallCheck$6(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn$2(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function _inherits$2(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function _toConsumableArray$4(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function normalize(t) {
    if (0 === t) return [
        0,
        0
    ];
    if (isNaN(t)) return {
        mantissa: -6755399441055744,
        exponent: 972
    };
    var e = t > 0 ? 1 : -1;
    if (!isFinite(t)) return {
        mantissa: 4503599627370496 * e,
        exponent: 972
    };
    t = Math.abs(t);
    var n = Math.floor(Math.log10(t));
    return [
        e * (t / Math.pow(10, n)),
        n
    ];
}
function getChartRangeIntervals(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = Math.ceil(t), i = Math.floor(e), a = n - i, r = a, o = 1;
    a > 5 && (a % 2 != 0 && (a = ++n - i), r = a / 2, o = 2), a <= 2 && (o = a / (r = 4)), 0 === a && (r = 5, o = 1);
    for(var s = [], l = 0; l <= r; l++)s.push(i + o * l);
    return s;
}
function getChartIntervals(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = normalize(t), i = _slicedToArray$4(n, 2), a = i[0], r = i[1], o = e ? e / Math.pow(10, r) : 0, s = getChartRangeIntervals(a = a.toFixed(6), o);
    return s = s.map(function(t) {
        return t * Math.pow(10, r);
    });
}
function calcChartIntervals(t) {
    function e(t, e) {
        for(var n = getChartIntervals(t), i = n[1] - n[0], a = 0, r = 1; a < e; r++)a += i, n.unshift(-1 * a);
        return n;
    }
    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i = Math.max.apply(Math, _toConsumableArray$4(t)), a = Math.min.apply(Math, _toConsumableArray$4(t)), r = [];
    if (i >= 0 && a >= 0) normalize(i)[1], r = n ? getChartIntervals(i, a) : getChartIntervals(i);
    else if (i > 0 && a < 0) {
        var o = Math.abs(a);
        i >= o ? (normalize(i)[1], r = e(i, o)) : (normalize(o)[1], r = e(o, i).reverse().map(function(t) {
            return -1 * t;
        }));
    } else if (i <= 0 && a <= 0) {
        var s = Math.abs(a), l = Math.abs(i);
        normalize(s)[1], r = (r = n ? getChartIntervals(s, l) : getChartIntervals(s)).reverse().map(function(t) {
            return -1 * t;
        });
    }
    return r;
}
function getZeroIndex(t) {
    var e = getIntervalSize(t);
    return t.indexOf(0) >= 0 ? t.indexOf(0) : t[0] > 0 ? -1 * t[0] / e : -1 * t[t.length - 1] / e + (t.length - 1);
}
function getIntervalSize(t) {
    return t[1] - t[0];
}
function getValueRange(t) {
    return t[t.length - 1] - t[0];
}
function scale(t, e) {
    return floatTwo(e.zeroLine - t * e.scaleMultiplier);
}
function getClosestInArray(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = e.reduce(function(e, n) {
        return Math.abs(n - t) < Math.abs(e - t) ? n : e;
    }, []);
    return n ? e.indexOf(i) : i;
}
function calcDistribution(t, e) {
    for(var n = Math.max.apply(Math, _toConsumableArray$4(t)), i = 1 / (e - 1), a = [], r = 0; r < e; r++){
        var o = n * (i * r);
        a.push(o);
    }
    return a;
}
function getMaxCheckpoint(t, e) {
    return e.filter(function(e) {
        return e < t;
    }).length;
}
function _toConsumableArray$3(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function _classCallCheck$7(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn$3(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function _inherits$3(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function _toConsumableArray$6(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function dataPrep(t, e) {
    t.labels = t.labels || [];
    var n = t.labels.length, i = t.datasets, a = new Array(n).fill(0);
    return i || (i = [
        {
            values: a
        }
    ]), i.map(function(t) {
        if (t.values) {
            var i = t.values;
            i = (i = i.map(function(t) {
                return isNaN(t) ? 0 : t;
            })).length > n ? i.slice(0, n) : fillArray(i, n - i.length, 0), t.values = i;
        } else t.values = a;
        t.chartType || (AXIS_DATASET_CHART_TYPES.includes(e), t.chartType = e);
    }), t.yRegions && t.yRegions.map(function(t) {
        if (t.end < t.start) {
            var e = [
                t.end,
                t.start
            ];
            t.start = e[0], t.end = e[1];
        }
    }), t;
}
function zeroDataPrep(t) {
    var e = t.labels.length, n = new Array(e).fill(0), i = {
        labels: t.labels.slice(0, -1),
        datasets: t.datasets.map(function(t) {
            return {
                name: "",
                values: n.slice(0, -1),
                chartType: t.chartType
            };
        })
    };
    return t.yMarkers && (i.yMarkers = [
        {
            value: 0,
            label: ""
        }
    ]), t.yRegions && (i.yRegions = [
        {
            start: 0,
            end: 0,
            label: ""
        }
    ]), i;
}
function getShortenedLabels(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], i = t / e.length;
    i <= 0 && (i = 1);
    var a = i / DEFAULT_CHAR_WIDTH, r = void 0;
    if (n) {
        var o = Math.max.apply(Math, _toConsumableArray$6(e.map(function(t) {
            return t.length;
        })));
        r = Math.ceil(o / a);
    }
    return e.map(function(t, e) {
        return (t += "").length > a && (n ? e % r != 0 && (t = "") : t = a - 3 > 0 ? t.slice(0, a - 3) + " ..." : t.slice(0, a) + ".."), t;
    });
}
function _toConsumableArray$5(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function _classCallCheck$8(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn$4(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function _inherits$4(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function _toConsumableArray$7(t) {
    if (Array.isArray(t)) {
        for(var e = 0, n = Array(t.length); e < t.length; e++)n[e] = t[e];
        return n;
    }
    return Array.from(t);
}
function _classCallCheck$9(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn$5(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}
function _inherits$5(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function getChartByType() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "line", e = arguments[1], n = arguments[2];
    return "axis-mixed" === t ? (n.type = "line", new AxisChart(e, n)) : chartTypes[t] ? new chartTypes[t](e, n) : void console.error("Undefined chart type: " + t);
}
var css_248z = '.chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ol,.graph-svg-tip ul{padding-left:0;display:-webkit-box;display:-ms-flexbox;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}';
styleInject(css_248z);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};
$.create = function(t, e) {
    var n = document.createElement(t);
    for(var i in e){
        var a = e[i];
        if ("inside" === i) $(a).appendChild(n);
        else if ("around" === i) {
            var r = $(a);
            r.parentNode.insertBefore(n, r), n.appendChild(r);
        } else "styles" === i ? "object" === (void 0 === a ? "undefined" : _typeof(a)) && Object.keys(a).map(function(t) {
            n.style[t] = a[t];
        }) : i in n ? n[i] = a : n.setAttribute(i, a);
    }
    return n;
};
var BASE_MEASURES = {
    margins: {
        top: 10,
        bottom: 10,
        left: 20,
        right: 20
    },
    paddings: {
        top: 20,
        bottom: 40,
        left: 30,
        right: 10
    },
    baseHeight: 240,
    titleHeight: 20,
    legendHeight: 30,
    titleFontSize: 12
}, INIT_CHART_UPDATE_TIMEOUT = 700, CHART_POST_ANIMATE_TIMEOUT = 400, DEFAULT_AXIS_CHART_TYPE = "line", AXIS_DATASET_CHART_TYPES = [
    "line",
    "bar"
], AXIS_LEGEND_BAR_SIZE = 100, BAR_CHART_SPACE_RATIO = .5, MIN_BAR_PERCENT_HEIGHT = 0, LINE_CHART_DOT_SIZE = 4, DOT_OVERLAY_SIZE_INCR = 4, PERCENTAGE_BAR_DEFAULT_HEIGHT = 20, PERCENTAGE_BAR_DEFAULT_DEPTH = 2, HEATMAP_DISTRIBUTION_SIZE = 5, HEATMAP_SQUARE_SIZE = 10, HEATMAP_GUTTER_SIZE = 2, DEFAULT_CHAR_WIDTH = 7, TOOLTIP_POINTER_TRIANGLE_HEIGHT = 5, DEFAULT_CHART_COLORS = [
    "light-blue",
    "blue",
    "violet",
    "red",
    "orange",
    "yellow",
    "green",
    "light-green",
    "purple",
    "magenta",
    "light-grey",
    "dark-grey"
], HEATMAP_COLORS_GREEN = [
    "#ebedf0",
    "#c6e48b",
    "#7bc96f",
    "#239a3b",
    "#196127"
], DEFAULT_COLORS = {
    bar: DEFAULT_CHART_COLORS,
    line: DEFAULT_CHART_COLORS,
    pie: DEFAULT_CHART_COLORS,
    percentage: DEFAULT_CHART_COLORS,
    heatmap: HEATMAP_COLORS_GREEN,
    donut: DEFAULT_CHART_COLORS
}, ANGLE_RATIO = Math.PI / 180, FULL_ANGLE = 360, _createClass$3 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), SvgTip = function() {
    function t(e) {
        var n = e.parent, i = void 0 === n ? null : n, a = e.colors, r = void 0 === a ? [] : a;
        _classCallCheck$4(this, t), this.parent = i, this.colors = r, this.titleName = "", this.titleValue = "", this.listValues = [], this.titleValueFirst = 0, this.x = 0, this.y = 0, this.top = 0, this.left = 0, this.setup();
    }
    return _createClass$3(t, [
        {
            key: "setup",
            value: function() {
                this.makeTooltip();
            }
        },
        {
            key: "refresh",
            value: function() {
                this.fill(), this.calcPosition();
            }
        },
        {
            key: "makeTooltip",
            value: function() {
                var t = this;
                this.container = $.create("div", {
                    inside: this.parent,
                    className: "graph-svg-tip comparison",
                    innerHTML: '<span class="title"></span>\n				<ul class="data-point-list"></ul>\n				<div class="svg-pointer"></div>'
                }), this.hideTip(), this.title = this.container.querySelector(".title"), this.dataPointList = this.container.querySelector(".data-point-list"), this.parent.addEventListener("mouseleave", function() {
                    t.hideTip();
                });
            }
        },
        {
            key: "fill",
            value: function() {
                var t = this, e = void 0;
                this.index && this.container.setAttribute("data-point-index", this.index), e = this.titleValueFirst ? "<strong>" + this.titleValue + "</strong>" + this.titleName : this.titleName + "<strong>" + this.titleValue + "</strong>", this.title.innerHTML = e, this.dataPointList.innerHTML = "", this.listValues.map(function(e, n) {
                    var i = t.colors[n] || "black", a = 0 === e.formatted || e.formatted ? e.formatted : e.value, r = $.create("li", {
                        styles: {
                            "border-top": "3px solid " + i
                        },
                        innerHTML: '<strong style="display: block;">' + (0 === a || a ? a : "") + "</strong>\n					" + (e.title ? e.title : "")
                    });
                    t.dataPointList.appendChild(r);
                });
            }
        },
        {
            key: "calcPosition",
            value: function() {
                var t = this.container.offsetWidth;
                this.top = this.y - this.container.offsetHeight - TOOLTIP_POINTER_TRIANGLE_HEIGHT, this.left = this.x - t / 2;
                var e = this.parent.offsetWidth - t, n = this.container.querySelector(".svg-pointer");
                if (this.left < 0) n.style.left = "calc(50% - " + -1 * this.left + "px)", this.left = 0;
                else if (this.left > e) {
                    var i = "calc(50% + " + (this.left - e) + "px)";
                    n.style.left = i, this.left = e;
                } else n.style.left = "50%";
            }
        },
        {
            key: "setValues",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                this.titleName = n.name, this.titleValue = n.value, this.listValues = i, this.x = t, this.y = e, this.titleValueFirst = n.valueFirst || 0, this.index = a, this.refresh();
            }
        },
        {
            key: "hideTip",
            value: function() {
                this.container.style.top = "0px", this.container.style.left = "0px", this.container.style.opacity = "0";
            }
        },
        {
            key: "showTip",
            value: function() {
                this.container.style.top = this.top + "px", this.container.style.left = this.left + "px", this.container.style.opacity = "1";
            }
        }
    ]), t;
}(), _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, PRESET_COLOR_MAP = {
    "light-blue": "#7cd6fd",
    blue: "#5e64ff",
    violet: "#743ee2",
    red: "#ff5858",
    orange: "#ffa00a",
    yellow: "#feef72",
    green: "#28a745",
    "light-green": "#98d85b",
    purple: "#b554ff",
    magenta: "#ffa3ef",
    black: "#36114C",
    grey: "#bdd3e6",
    "light-grey": "#f0f4f7",
    "dark-grey": "#b8c2cc"
}, getColor = function(t) {
    return /rgb[a]{0,1}\([\d, ]+\)/gim.test(t) ? /\D+(\d*)\D+(\d*)\D+(\d*)/gim.exec(t).map(function(t, e) {
        return 0 !== e ? Number(t).toString(16) : "#";
    }).reduce(function(t, e) {
        return "" + t + e;
    }) : PRESET_COLOR_MAP[t] || t;
}, _slicedToArray = function() {
    function t(t, e) {
        var n = [], i = !0, a = !1, r = void 0;
        try {
            for(var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
        } catch (t) {
            a = !0, r = t;
        } finally{
            try {
                !i && s.return && s.return();
            } finally{
                if (a) throw r;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, AXIS_TICK_LENGTH = 6, LABEL_MARGIN = 4, LABEL_MAX_CHARS = 15, FONT_SIZE = 10, BASE_LINE_COLOR = "#dadada", FONT_FILL = "#555b51", makeOverlay = {
    bar: function(t) {
        var e = void 0;
        "rect" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
        var n = t.cloneNode();
        return n.style.fill = "#000000", n.style.opacity = "0.4", e && n.setAttribute("transform", e), n;
    },
    dot: function(t) {
        var e = void 0;
        "circle" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
        var n = t.cloneNode(), i = t.getAttribute("r"), a = t.getAttribute("fill");
        return n.setAttribute("r", parseInt(i) + DOT_OVERLAY_SIZE_INCR), n.setAttribute("fill", a), n.style.opacity = "0.6", e && n.setAttribute("transform", e), n;
    },
    heat_square: function(t) {
        var e = void 0;
        "circle" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
        var n = t.cloneNode(), i = t.getAttribute("r"), a = t.getAttribute("fill");
        return n.setAttribute("r", parseInt(i) + DOT_OVERLAY_SIZE_INCR), n.setAttribute("fill", a), n.style.opacity = "0.6", e && n.setAttribute("transform", e), n;
    }
}, updateOverlay = {
    bar: function(t, e) {
        var n = void 0;
        "rect" !== t.nodeName && (n = t.getAttribute("transform"), t = t.childNodes[0]);
        var i = [
            "x",
            "y",
            "width",
            "height"
        ];
        Object.values(t.attributes).filter(function(t) {
            return i.includes(t.name) && t.specified;
        }).map(function(t) {
            e.setAttribute(t.name, t.nodeValue);
        }), n && e.setAttribute("transform", n);
    },
    dot: function(t, e) {
        var n = void 0;
        "circle" !== t.nodeName && (n = t.getAttribute("transform"), t = t.childNodes[0]);
        var i = [
            "cx",
            "cy"
        ];
        Object.values(t.attributes).filter(function(t) {
            return i.includes(t.name) && t.specified;
        }).map(function(t) {
            e.setAttribute(t.name, t.nodeValue);
        }), n && e.setAttribute("transform", n);
    },
    heat_square: function(t, e) {
        var n = void 0;
        "circle" !== t.nodeName && (n = t.getAttribute("transform"), t = t.childNodes[0]);
        var i = [
            "cx",
            "cy"
        ];
        Object.values(t.attributes).filter(function(t) {
            return i.includes(t.name) && t.specified;
        }).map(function(t) {
            e.setAttribute(t.name, t.nodeValue);
        }), n && e.setAttribute("transform", n);
    }
}, _slicedToArray$2 = function() {
    function t(t, e) {
        var n = [], i = !0, a = !1, r = void 0;
        try {
            for(var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
        } catch (t) {
            a = !0, r = t;
        } finally{
            try {
                !i && s.return && s.return();
            } finally{
                if (a) throw r;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), UNIT_ANIM_DUR = 350, PATH_ANIM_DUR = 350, MARKER_LINE_ANIM_DUR = UNIT_ANIM_DUR, REPLACE_ALL_NEW_DUR = 250, STD_EASING = "easein", _slicedToArray$1 = function() {
    function t(t, e) {
        var n = [], i = !0, a = !1, r = void 0;
        try {
            for(var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
        } catch (t) {
            a = !0, r = t;
        } finally{
            try {
                !i && s.return && s.return();
            } finally{
                if (a) throw r;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), EASING = {
    ease: "0.25 0.1 0.25 1",
    linear: "0 0 1 1",
    easein: "0.1 0.8 0.2 1",
    easeout: "0 0 0.58 1",
    easeinout: "0.42 0 0.58 1"
}, CSSTEXT = ".chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ul{padding-left:0;display:flex}.graph-svg-tip ol{padding-left:0;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:' ';border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}", _createClass$2 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), BaseChart = function() {
    function t(e, n) {
        if (_classCallCheck$3(this, t), n = deepClone(n), this.parent = "string" == typeof e ? document.querySelector(e) : e, !(this.parent instanceof HTMLElement)) throw new Error("No `parent` element to render on was provided.");
        this.rawChartArgs = n, this.title = n.title || "", this.type = n.type || "", this.realData = this.prepareData(n.data), this.data = this.prepareFirstData(this.realData), this.colors = this.validateColors(n.colors, this.type), this.config = {
            showTooltip: 1,
            showLegend: 1,
            isNavigable: n.isNavigable || 0,
            animate: void 0 !== n.animate ? n.animate : 1,
            truncateLegends: n.truncateLegends || 1
        }, this.measures = JSON.parse(JSON.stringify(BASE_MEASURES));
        var i = this.measures;
        this.setMeasures(n), this.title.length || (i.titleHeight = 0), this.config.showLegend || (i.legendHeight = 0), this.argHeight = n.height || i.baseHeight, this.state = {}, this.options = {}, this.initTimeout = INIT_CHART_UPDATE_TIMEOUT, this.config.isNavigable && (this.overlays = []), this.configure(n);
    }
    return _createClass$2(t, [
        {
            key: "prepareData",
            value: function(t) {
                return t;
            }
        },
        {
            key: "prepareFirstData",
            value: function(t) {
                return t;
            }
        },
        {
            key: "validateColors",
            value: function(t, e) {
                var n = [];
                return (t = (t || []).concat(DEFAULT_COLORS[e])).forEach(function(t) {
                    var e = getColor(t);
                    isValidColor(e) ? n.push(e) : console.warn('"' + t + '" is not a valid color.');
                }), n;
            }
        },
        {
            key: "setMeasures",
            value: function() {}
        },
        {
            key: "configure",
            value: function() {
                var t = this, e = this.argHeight;
                this.baseHeight = e, this.height = e - getExtraHeight(this.measures), this.boundDrawFn = function() {
                    return t.draw(!0);
                }, ResizeObserver && (this.resizeObserver = new ResizeObserver(this.boundDrawFn), this.resizeObserver.observe(this.parent)), window.addEventListener("resize", this.boundDrawFn), window.addEventListener("orientationchange", this.boundDrawFn);
            }
        },
        {
            key: "destroy",
            value: function() {
                this.resizeObserver && this.resizeObserver.disconnect(), window.removeEventListener("resize", this.boundDrawFn), window.removeEventListener("orientationchange", this.boundDrawFn);
            }
        },
        {
            key: "setup",
            value: function() {
                this.makeContainer(), this.updateWidth(), this.makeTooltip(), this.draw(!1, !0);
            }
        },
        {
            key: "makeContainer",
            value: function() {
                this.parent.innerHTML = "";
                var t = {
                    inside: this.parent,
                    className: "chart-container"
                };
                this.independentWidth && (t.styles = {
                    width: this.independentWidth + "px"
                }), this.container = $.create("div", t);
            }
        },
        {
            key: "makeTooltip",
            value: function() {
                this.tip = new SvgTip({
                    parent: this.container,
                    colors: this.colors
                }), this.bindTooltip();
            }
        },
        {
            key: "bindTooltip",
            value: function() {}
        },
        {
            key: "draw",
            value: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                e && isHidden(this.parent) || (this.updateWidth(), this.calc(e), this.makeChartArea(), this.setupComponents(), this.components.forEach(function(e) {
                    return e.setup(t.drawArea);
                }), this.render(this.components, !1), n && (this.data = this.realData, setTimeout(function() {
                    t.update(t.data);
                }, this.initTimeout)), this.renderLegend(), this.setupNavigation(n));
            }
        },
        {
            key: "calc",
            value: function() {}
        },
        {
            key: "updateWidth",
            value: function() {
                this.baseWidth = getElementContentWidth(this.parent), this.width = this.baseWidth - getExtraWidth(this.measures);
            }
        },
        {
            key: "makeChartArea",
            value: function() {
                this.svg && this.container.removeChild(this.svg);
                var t = this.measures;
                this.svg = makeSVGContainer(this.container, "frappe-chart chart", this.baseWidth, this.baseHeight), this.svgDefs = makeSVGDefs(this.svg), this.title.length && (this.titleEL = makeText("title", t.margins.left, t.margins.top, this.title, {
                    fontSize: t.titleFontSize,
                    fill: "#666666",
                    dy: t.titleFontSize
                }));
                var e = getTopOffset(t);
                this.drawArea = makeSVGGroup(this.type + "-chart chart-draw-area", "translate(" + getLeftOffset(t) + ", " + e + ")"), this.config.showLegend && (e += this.height + t.paddings.bottom, this.legendArea = makeSVGGroup("chart-legend", "translate(" + getLeftOffset(t) + ", " + e + ")")), this.title.length && this.svg.appendChild(this.titleEL), this.svg.appendChild(this.drawArea), this.config.showLegend && this.svg.appendChild(this.legendArea), this.updateTipOffset(getLeftOffset(t), getTopOffset(t));
            }
        },
        {
            key: "updateTipOffset",
            value: function(t, e) {
                this.tip.offset = {
                    x: t,
                    y: e
                };
            }
        },
        {
            key: "setupComponents",
            value: function() {
                this.components = new Map;
            }
        },
        {
            key: "update",
            value: function(t) {
                t || console.error("No data to update."), this.data = this.prepareData(t), this.calc(), this.render(this.components, this.config.animate), this.renderLegend();
            }
        },
        {
            key: "render",
            value: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.components, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.config.isNavigable && this.overlays.map(function(t) {
                    return t.parentNode.removeChild(t);
                });
                var i = [];
                e.forEach(function(t) {
                    i = i.concat(t.update(n));
                }), i.length > 0 ? (runSMILAnimation(this.container, this.svg, i), setTimeout(function() {
                    e.forEach(function(t) {
                        return t.make();
                    }), t.updateNav();
                }, CHART_POST_ANIMATE_TIMEOUT)) : (e.forEach(function(t) {
                    return t.make();
                }), this.updateNav());
            }
        },
        {
            key: "updateNav",
            value: function() {
                this.config.isNavigable && (this.makeOverlay(), this.bindUnits());
            }
        },
        {
            key: "renderLegend",
            value: function() {}
        },
        {
            key: "setupNavigation",
            value: function() {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.config.isNavigable && e && (this.bindOverlay(), this.keyActions = {
                    13: this.onEnterKey.bind(this),
                    37: this.onLeftArrow.bind(this),
                    38: this.onUpArrow.bind(this),
                    39: this.onRightArrow.bind(this),
                    40: this.onDownArrow.bind(this)
                }, document.addEventListener("keydown", function(e) {
                    isElementInViewport(t.container) && (e = e || window.event, t.keyActions[e.keyCode] && t.keyActions[e.keyCode]());
                }));
            }
        },
        {
            key: "makeOverlay",
            value: function() {}
        },
        {
            key: "updateOverlay",
            value: function() {}
        },
        {
            key: "bindOverlay",
            value: function() {}
        },
        {
            key: "bindUnits",
            value: function() {}
        },
        {
            key: "onLeftArrow",
            value: function() {}
        },
        {
            key: "onRightArrow",
            value: function() {}
        },
        {
            key: "onUpArrow",
            value: function() {}
        },
        {
            key: "onDownArrow",
            value: function() {}
        },
        {
            key: "onEnterKey",
            value: function() {}
        },
        {
            key: "addDataPoint",
            value: function() {}
        },
        {
            key: "removeDataPoint",
            value: function() {}
        },
        {
            key: "getDataPoint",
            value: function() {}
        },
        {
            key: "setCurrentDataPoint",
            value: function() {}
        },
        {
            key: "updateDataset",
            value: function() {}
        },
        {
            key: "export",
            value: function() {
                var t = prepareForExport(this.svg);
                downloadFile(this.title || "Chart", [
                    t
                ]);
            }
        }
    ]), t;
}(), _createClass$1 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), _get$1 = function t(e, n, i) {
    null === e && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (void 0 === a) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, n, i);
    }
    if ("value" in a) return a.value;
    var o = a.get;
    if (void 0 !== o) return o.call(i);
}, AggregationChart = function(t) {
    function e(t, n) {
        return _classCallCheck$2(this, e), _possibleConstructorReturn$1(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return _inherits$1(e, t), _createClass$1(e, [
        {
            key: "configure",
            value: function(t) {
                _get$1(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t), this.config.formatTooltipY = (t.tooltipOptions || {}).formatTooltipY, this.config.maxSlices = t.maxSlices || 20, this.config.maxLegendPoints = t.maxLegendPoints || 20;
            }
        },
        {
            key: "calc",
            value: function() {
                var t = this, e = this.state, n = this.config.maxSlices;
                e.sliceTotals = [];
                var i = this.data.labels.map(function(e, n) {
                    var i = 0;
                    return t.data.datasets.map(function(t) {
                        i += t.values[n];
                    }), [
                        i,
                        e
                    ];
                }).filter(function(t) {
                    return t[0] >= 0;
                }), a = i;
                if (i.length > n) {
                    i.sort(function(t, e) {
                        return e[0] - t[0];
                    }), a = i.slice(0, n - 1);
                    var r = 0;
                    i.slice(n - 1).map(function(t) {
                        r += t[0];
                    }), a.push([
                        r,
                        "Rest"
                    ]), this.colors[n - 1] = "grey";
                }
                e.labels = [], a.map(function(t) {
                    e.sliceTotals.push(round(t[0])), e.labels.push(t[1]);
                }), e.grandTotal = e.sliceTotals.reduce(function(t, e) {
                    return t + e;
                }, 0), this.center = {
                    x: this.width / 2,
                    y: this.height / 2
                };
            }
        },
        {
            key: "renderLegend",
            value: function() {
                var t = this, e = this.state;
                this.legendArea.textContent = "", this.legendTotals = e.sliceTotals.slice(0, this.config.maxLegendPoints);
                var n = 0, i = 0;
                this.legendTotals.map(function(a, r) {
                    var o = 150, s = Math.floor((t.width - getExtraWidth(t.measures)) / o);
                    t.legendTotals.length < s && (o = t.width / t.legendTotals.length), n > s && (n = 0, i += 20);
                    var l = o * n + 5, u = t.config.truncateLegends ? truncateString(e.labels[r], o / 10) : e.labels[r], c = t.config.formatTooltipY ? t.config.formatTooltipY(a) : a, h = legendDot(l, i, 5, t.colors[r], u + ": " + c, !1);
                    t.legendArea.appendChild(h), n++;
                });
            }
        }
    ]), e;
}(BaseChart), NO_OF_YEAR_MONTHS = 12, NO_OF_DAYS_IN_WEEK = 7, NO_OF_MILLIS = 1e3, SEC_IN_DAY = 86400, MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
], DAY_NAMES_SHORT = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
], _slicedToArray$3 = function() {
    function t(t, e) {
        var n = [], i = !0, a = !1, r = void 0;
        try {
            for(var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
        } catch (t) {
            a = !0, r = t;
        } finally{
            try {
                !i && s.return && s.return();
            } finally{
                if (a) throw r;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass$4 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), ChartComponent = function() {
    function t(e) {
        var n = e.layerClass, i = void 0 === n ? "" : n, a = e.layerTransform, r = void 0 === a ? "" : a, o = e.constants, s = e.getData, l = e.makeElements, u = e.animateElements;
        _classCallCheck$5(this, t), this.layerTransform = r, this.constants = o, this.makeElements = l, this.getData = s, this.animateElements = u, this.store = [], this.labels = [], this.layerClass = i, this.layerClass = "function" == typeof this.layerClass ? this.layerClass() : this.layerClass, this.refresh();
    }
    return _createClass$4(t, [
        {
            key: "refresh",
            value: function(t) {
                this.data = t || this.getData();
            }
        },
        {
            key: "setup",
            value: function(t) {
                this.layer = makeSVGGroup(this.layerClass, this.layerTransform, t);
            }
        },
        {
            key: "make",
            value: function() {
                this.render(this.data), this.oldData = this.data;
            }
        },
        {
            key: "render",
            value: function(t) {
                var e = this;
                this.store = this.makeElements(t), this.layer.textContent = "", this.store.forEach(function(t) {
                    e.layer.appendChild(t);
                }), this.labels.forEach(function(t) {
                    e.layer.appendChild(t);
                });
            }
        },
        {
            key: "update",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.refresh();
                var e = [];
                return t && (e = this.animateElements(this.data) || []), e;
            }
        }
    ]), t;
}(), componentConfigs = {
    donutSlices: {
        layerClass: "donut-slices",
        makeElements: function(t) {
            return t.sliceStrings.map(function(e, n) {
                var i = makePath(e, "donut-path", t.colors[n], "none", t.strokeWidth);
                return i.style.transition = "transform .3s;", i;
            });
        },
        animateElements: function(t) {
            return this.store.map(function(e, n) {
                return animatePathStr(e, t.sliceStrings[n]);
            });
        }
    },
    pieSlices: {
        layerClass: "pie-slices",
        makeElements: function(t) {
            return t.sliceStrings.map(function(e, n) {
                var i = makePath(e, "pie-path", "none", t.colors[n]);
                return i.style.transition = "transform .3s;", i;
            });
        },
        animateElements: function(t) {
            return this.store.map(function(e, n) {
                return animatePathStr(e, t.sliceStrings[n]);
            });
        }
    },
    percentageBars: {
        layerClass: "percentage-bars",
        makeElements: function(t) {
            var e = this;
            return t.xPositions.map(function(n, i) {
                return percentageBar(n, 0, t.widths[i], e.constants.barHeight, e.constants.barDepth, t.colors[i]);
            });
        },
        animateElements: function(t) {
            if (t) return [];
        }
    },
    yAxis: {
        layerClass: "y axis",
        makeElements: function(t) {
            var e = this;
            return t.positions.map(function(n, i) {
                return yLine(n, t.labels[i], e.constants.width, {
                    mode: e.constants.mode,
                    pos: e.constants.pos,
                    shortenNumbers: e.constants.shortenNumbers
                });
            });
        },
        animateElements: function(t) {
            var e = t.positions, n = t.labels, i = this.oldData.positions, a = this.oldData.labels, r = equilizeNoOfElements(i, e), o = _slicedToArray$3(r, 2);
            i = o[0], e = o[1];
            var s = equilizeNoOfElements(a, n), l = _slicedToArray$3(s, 2);
            return a = l[0], n = l[1], this.render({
                positions: i,
                labels: n
            }), this.store.map(function(t, n) {
                return translateHoriLine(t, e[n], i[n]);
            });
        }
    },
    xAxis: {
        layerClass: "x axis",
        makeElements: function(t) {
            var e = this;
            return t.positions.map(function(n, i) {
                return xLine(n, t.calcLabels[i], e.constants.height, {
                    mode: e.constants.mode,
                    pos: e.constants.pos
                });
            });
        },
        animateElements: function(t) {
            var e = t.positions, n = t.calcLabels, i = this.oldData.positions, a = this.oldData.calcLabels, r = equilizeNoOfElements(i, e), o = _slicedToArray$3(r, 2);
            i = o[0], e = o[1];
            var s = equilizeNoOfElements(a, n), l = _slicedToArray$3(s, 2);
            return a = l[0], n = l[1], this.render({
                positions: i,
                calcLabels: n
            }), this.store.map(function(t, n) {
                return translateVertLine(t, e[n], i[n]);
            });
        }
    },
    yMarkers: {
        layerClass: "y-markers",
        makeElements: function(t) {
            var e = this;
            return t.map(function(t) {
                return yMarker(t.position, t.label, e.constants.width, {
                    labelPos: t.options.labelPos,
                    mode: "span",
                    lineType: "dashed"
                });
            });
        },
        animateElements: function(t) {
            var e = equilizeNoOfElements(this.oldData, t), n = _slicedToArray$3(e, 2);
            this.oldData = n[0];
            var i = (t = n[1]).map(function(t) {
                return t.position;
            }), a = t.map(function(t) {
                return t.label;
            }), r = t.map(function(t) {
                return t.options;
            }), o = this.oldData.map(function(t) {
                return t.position;
            });
            return this.render(o.map(function(t, e) {
                return {
                    position: o[e],
                    label: a[e],
                    options: r[e]
                };
            })), this.store.map(function(t, e) {
                return translateHoriLine(t, i[e], o[e]);
            });
        }
    },
    yRegions: {
        layerClass: "y-regions",
        makeElements: function(t) {
            var e = this;
            return t.map(function(t) {
                return yRegion(t.startPos, t.endPos, e.constants.width, t.label, {
                    labelPos: t.options.labelPos
                });
            });
        },
        animateElements: function(t) {
            var e = equilizeNoOfElements(this.oldData, t), n = _slicedToArray$3(e, 2);
            this.oldData = n[0];
            var i = (t = n[1]).map(function(t) {
                return t.endPos;
            }), a = t.map(function(t) {
                return t.label;
            }), r = t.map(function(t) {
                return t.startPos;
            }), o = t.map(function(t) {
                return t.options;
            }), s = this.oldData.map(function(t) {
                return t.endPos;
            }), l = this.oldData.map(function(t) {
                return t.startPos;
            });
            this.render(s.map(function(t, e) {
                return {
                    startPos: l[e],
                    endPos: s[e],
                    label: a[e],
                    options: o[e]
                };
            }));
            var u = [];
            return this.store.map(function(t, e) {
                u = u.concat(animateRegion(t, r[e], i[e], s[e]));
            }), u;
        }
    },
    heatDomain: {
        layerClass: function() {
            return "heat-domain domain-" + this.constants.index;
        },
        makeElements: function(t) {
            var e = this, n = this.constants, i = n.index, a = n.colWidth, r = n.rowHeight, o = n.squareSize, s = n.radius, l = n.xTranslate, u = 0;
            return this.serializedSubDomains = [], t.cols.map(function(t, n) {
                1 === n && e.labels.push(makeText("domain-name", l, -12, getMonthName(i, !0).toUpperCase(), {
                    fontSize: 9
                })), t.map(function(t, n) {
                    if (t.fill) {
                        var i = {
                            "data-date": t.yyyyMmDd,
                            "data-value": t.dataValue,
                            "data-day": n
                        }, a = heatSquare("day", l, u, o, s, t.fill, i);
                        e.serializedSubDomains.push(a);
                    }
                    u += r;
                }), u = 0, l += a;
            }), this.serializedSubDomains;
        },
        animateElements: function(t) {
            if (t) return [];
        }
    },
    barGraph: {
        layerClass: function() {
            return "dataset-units dataset-bars dataset-" + this.constants.index;
        },
        makeElements: function(t) {
            var e = this.constants;
            return this.unitType = "bar", this.units = t.yPositions.map(function(n, i) {
                return datasetBar(t.xPositions[i], n, t.barWidth, e.color, t.labels[i], i, t.offsets[i], {
                    zeroLine: t.zeroLine,
                    barsWidth: t.barsWidth,
                    minHeight: e.minHeight
                });
            }), this.units;
        },
        animateElements: function(t) {
            var e = t.xPositions, n = t.yPositions, i = t.offsets, a = t.labels, r = this.oldData.xPositions, o = this.oldData.yPositions, s = this.oldData.offsets, l = this.oldData.labels, u = equilizeNoOfElements(r, e), c = _slicedToArray$3(u, 2);
            r = c[0], e = c[1];
            var h = equilizeNoOfElements(o, n), d = _slicedToArray$3(h, 2);
            o = d[0], n = d[1];
            var f = equilizeNoOfElements(s, i), p = _slicedToArray$3(f, 2);
            s = p[0], i = p[1];
            var v = equilizeNoOfElements(l, a), g = _slicedToArray$3(v, 2);
            l = g[0], a = g[1], this.render({
                xPositions: r,
                yPositions: o,
                offsets: s,
                labels: a,
                zeroLine: this.oldData.zeroLine,
                barsWidth: this.oldData.barsWidth,
                barWidth: this.oldData.barWidth
            });
            var y = [];
            return this.store.map(function(a, r) {
                y = y.concat(animateBar(a, e[r], n[r], t.barWidth, i[r], {
                    zeroLine: t.zeroLine
                }));
            }), y;
        }
    },
    lineGraph: {
        layerClass: function() {
            return "dataset-units dataset-line dataset-" + this.constants.index;
        },
        makeElements: function(t) {
            var e = this.constants;
            return this.unitType = "dot", this.paths = {}, e.hideLine || (this.paths = getPaths(t.xPositions, t.yPositions, e.color, {
                heatline: e.heatline,
                regionFill: e.regionFill,
                spline: e.spline
            }, {
                svgDefs: e.svgDefs,
                zeroLine: t.zeroLine
            })), this.units = [], e.hideDots || (this.units = t.yPositions.map(function(n, i) {
                return datasetDot(t.xPositions[i], n, t.radius, e.color, e.valuesOverPoints ? t.values[i] : "", i);
            })), Object.values(this.paths).concat(this.units);
        },
        animateElements: function(t) {
            var e = t.xPositions, n = t.yPositions, i = t.values, a = this.oldData.xPositions, r = this.oldData.yPositions, o = this.oldData.values, s = equilizeNoOfElements(a, e), l = _slicedToArray$3(s, 2);
            a = l[0], e = l[1];
            var u = equilizeNoOfElements(r, n), c = _slicedToArray$3(u, 2);
            r = c[0], n = c[1];
            var h = equilizeNoOfElements(o, i), d = _slicedToArray$3(h, 2);
            o = d[0], i = d[1], this.render({
                xPositions: a,
                yPositions: r,
                values: i,
                zeroLine: this.oldData.zeroLine,
                radius: this.oldData.radius
            });
            var f = [];
            return Object.keys(this.paths).length && (f = f.concat(animatePath(this.paths, e, n, t.zeroLine, this.constants.spline))), this.units.length && this.units.map(function(t, i) {
                f = f.concat(animateDot(t, e[i], n[i]));
            }), f;
        }
    }
}, _createClass = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), _get = function t(e, n, i) {
    null === e && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (void 0 === a) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, n, i);
    }
    if ("value" in a) return a.value;
    var o = a.get;
    if (void 0 !== o) return o.call(i);
}, PercentageChart = function(t) {
    function e(t, n) {
        _classCallCheck$1(this, e);
        var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        return i.type = "percentage", i.setup(), i;
    }
    return _inherits(e, t), _createClass(e, [
        {
            key: "setMeasures",
            value: function(t) {
                var e = this.measures;
                this.barOptions = t.barOptions || {};
                var n = this.barOptions;
                n.height = n.height || PERCENTAGE_BAR_DEFAULT_HEIGHT, n.depth = n.depth || PERCENTAGE_BAR_DEFAULT_DEPTH, e.paddings.right = 30, e.legendHeight = 60, e.baseHeight = 8 * (n.height + .5 * n.depth);
            }
        },
        {
            key: "setupComponents",
            value: function() {
                var t = this.state, e = [
                    [
                        "percentageBars",
                        {
                            barHeight: this.barOptions.height,
                            barDepth: this.barOptions.depth
                        },
                        (function() {
                            return {
                                xPositions: t.xPositions,
                                widths: t.widths,
                                colors: this.colors
                            };
                        }).bind(this)
                    ]
                ];
                this.components = new Map(e.map(function(t) {
                    var e = getComponent.apply(void 0, _toConsumableArray(t));
                    return [
                        t[0],
                        e
                    ];
                }));
            }
        },
        {
            key: "calc",
            value: function() {
                var t = this;
                _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "calc", this).call(this);
                var n = this.state;
                n.xPositions = [], n.widths = [];
                var i = 0;
                n.sliceTotals.map(function(e) {
                    var a = t.width * e / n.grandTotal;
                    n.widths.push(a), n.xPositions.push(i), i += a;
                });
            }
        },
        {
            key: "makeDataByIndex",
            value: function() {}
        },
        {
            key: "bindTooltip",
            value: function() {
                var t = this, e = this.state;
                this.container.addEventListener("mousemove", function(n) {
                    var i = t.components.get("percentageBars").store, a = n.target;
                    if (i.includes(a)) {
                        var r = i.indexOf(a), o = getOffset(t.container), s = getOffset(a), l = s.left - o.left + parseInt(a.getAttribute("width")) / 2, u = s.top - o.top, c = (t.formattedLabels && t.formattedLabels.length > 0 ? t.formattedLabels[r] : t.state.labels[r]) + ": ", h = e.sliceTotals[r] / e.grandTotal;
                        t.tip.setValues(l, u, {
                            name: c,
                            value: (100 * h).toFixed(1) + "%"
                        }), t.tip.showTip();
                    }
                });
            }
        }
    ]), e;
}(AggregationChart), _createClass$5 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), _get$2 = function t(e, n, i) {
    null === e && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (void 0 === a) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, n, i);
    }
    if ("value" in a) return a.value;
    var o = a.get;
    if (void 0 !== o) return o.call(i);
}, PieChart = function(t) {
    function e(t, n) {
        _classCallCheck$6(this, e);
        var i = _possibleConstructorReturn$2(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        return i.type = "pie", i.initTimeout = 0, i.init = 1, i.setup(), i;
    }
    return _inherits$2(e, t), _createClass$5(e, [
        {
            key: "configure",
            value: function(t) {
                _get$2(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t), this.mouseMove = this.mouseMove.bind(this), this.mouseLeave = this.mouseLeave.bind(this), this.hoverRadio = t.hoverRadio || .1, this.config.startAngle = t.startAngle || 0, this.clockWise = t.clockWise || !1;
            }
        },
        {
            key: "calc",
            value: function() {
                var t = this;
                _get$2(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "calc", this).call(this);
                var n = this.state;
                this.radius = this.height > this.width ? this.center.x : this.center.y;
                var i = this.radius, a = this.clockWise, r = n.slicesProperties || [];
                n.sliceStrings = [], n.slicesProperties = [];
                var o = 180 - this.config.startAngle;
                n.sliceTotals.map(function(e, s) {
                    var l = o, u = e / n.grandTotal * FULL_ANGLE, c = u > 180 ? 1 : 0, h = a ? -u : u, d = o += h, f = getPositionByAngle(l, i), p = getPositionByAngle(d, i), v = t.init && r[s], g = void 0, y = void 0;
                    t.init ? (g = v ? v.startPosition : f, y = v ? v.endPosition : f) : (g = f, y = p);
                    var m = 360 === u ? makeCircleStr(g, y, t.center, t.radius, a, c) : makeArcPathStr(g, y, t.center, t.radius, a, c);
                    n.sliceStrings.push(m), n.slicesProperties.push({
                        startPosition: f,
                        endPosition: p,
                        value: e,
                        total: n.grandTotal,
                        startAngle: l,
                        endAngle: d,
                        angle: h
                    });
                }), this.init = 0;
            }
        },
        {
            key: "setupComponents",
            value: function() {
                var t = this.state, e = [
                    [
                        "pieSlices",
                        {},
                        (function() {
                            return {
                                sliceStrings: t.sliceStrings,
                                colors: this.colors
                            };
                        }).bind(this)
                    ]
                ];
                this.components = new Map(e.map(function(t) {
                    var e = getComponent.apply(void 0, _toConsumableArray$2(t));
                    return [
                        t[0],
                        e
                    ];
                }));
            }
        },
        {
            key: "calTranslateByAngle",
            value: function(t) {
                var e = this.radius, n = this.hoverRadio, i = getPositionByAngle(t.startAngle + t.angle / 2, e);
                return "translate3d(" + i.x * n + "px," + i.y * n + "px,0)";
            }
        },
        {
            key: "hoverSlice",
            value: function(t, e, n, i) {
                if (t) {
                    var a = this.colors[e];
                    if (n) {
                        transform(t, this.calTranslateByAngle(this.state.slicesProperties[e])), t.style.fill = lightenDarkenColor(a, 50);
                        var r = getOffset(this.svg), o = i.pageX - r.left + 10, s = i.pageY - r.top - 10, l = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[e] : this.state.labels[e]) + ": ", u = (100 * this.state.sliceTotals[e] / this.state.grandTotal).toFixed(1);
                        this.tip.setValues(o, s, {
                            name: l,
                            value: u + "%"
                        }), this.tip.showTip();
                    } else transform(t, "translate3d(0,0,0)"), this.tip.hideTip(), t.style.fill = a;
                }
            }
        },
        {
            key: "bindTooltip",
            value: function() {
                this.container.addEventListener("mousemove", this.mouseMove), this.container.addEventListener("mouseleave", this.mouseLeave);
            }
        },
        {
            key: "mouseMove",
            value: function(t) {
                var e = t.target, n = this.components.get("pieSlices").store, i = this.curActiveSliceIndex, a = this.curActiveSlice;
                if (n.includes(e)) {
                    var r = n.indexOf(e);
                    this.hoverSlice(a, i, !1), this.curActiveSlice = e, this.curActiveSliceIndex = r, this.hoverSlice(e, r, !0, t);
                } else this.mouseLeave();
            }
        },
        {
            key: "mouseLeave",
            value: function() {
                this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, !1);
            }
        }
    ]), e;
}(AggregationChart), _slicedToArray$4 = function() {
    function t(t, e) {
        var n = [], i = !0, a = !1, r = void 0;
        try {
            for(var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
        } catch (t) {
            a = !0, r = t;
        } finally{
            try {
                !i && s.return && s.return();
            } finally{
                if (a) throw r;
            }
        }
        return n;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), _createClass$6 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), COL_WIDTH = HEATMAP_SQUARE_SIZE + HEATMAP_GUTTER_SIZE, ROW_HEIGHT = COL_WIDTH, Heatmap = function(t) {
    function e(t, n) {
        _classCallCheck$7(this, e);
        var i = _possibleConstructorReturn$3(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        i.type = "heatmap", i.countLabel = n.countLabel || "";
        var a = [
            "Sunday",
            "Monday"
        ], r = a.includes(n.startSubDomain) ? n.startSubDomain : "Sunday";
        return i.startSubDomainIndex = a.indexOf(r), i.setup(), i;
    }
    return _inherits$3(e, t), _createClass$6(e, [
        {
            key: "setMeasures",
            value: function(t) {
                var e = this.measures;
                this.discreteDomains = 0 === t.discreteDomains ? 0 : 1, e.paddings.top = 3 * ROW_HEIGHT, e.paddings.bottom = 0, e.legendHeight = 2 * ROW_HEIGHT, e.baseHeight = ROW_HEIGHT * NO_OF_DAYS_IN_WEEK + getExtraHeight(e);
                var n = this.data, i = this.discreteDomains ? NO_OF_YEAR_MONTHS : 0;
                this.independentWidth = (getWeeksBetween(n.start, n.end) + i) * COL_WIDTH + getExtraWidth(e);
            }
        },
        {
            key: "updateWidth",
            value: function() {
                var t = this.discreteDomains ? NO_OF_YEAR_MONTHS : 0, e = this.state.noOfWeeks ? this.state.noOfWeeks : 52;
                this.baseWidth = (e + t) * COL_WIDTH + getExtraWidth(this.measures);
            }
        },
        {
            key: "prepareData",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data;
                if (t.start && t.end && t.start > t.end) throw new Error("Start date cannot be greater than end date.");
                if (t.start || (t.start = new Date, t.start.setFullYear(t.start.getFullYear() - 1)), t.end || (t.end = new Date), t.dataPoints = t.dataPoints || {}, parseInt(Object.keys(t.dataPoints)[0]) > 1e5) {
                    var e = {};
                    Object.keys(t.dataPoints).forEach(function(n) {
                        var i = new Date(n * NO_OF_MILLIS);
                        e[getYyyyMmDd(i)] = t.dataPoints[n];
                    }), t.dataPoints = e;
                }
                return t;
            }
        },
        {
            key: "calc",
            value: function() {
                var t = this.state;
                t.start = clone(this.data.start), t.end = clone(this.data.end), t.firstWeekStart = clone(t.start), t.noOfWeeks = getWeeksBetween(t.start, t.end), t.distribution = calcDistribution(Object.values(this.data.dataPoints), HEATMAP_DISTRIBUTION_SIZE), t.domainConfigs = this.getDomains();
            }
        },
        {
            key: "setupComponents",
            value: function() {
                var t = this, e = this.state, n = this.discreteDomains ? 0 : 1, i = e.domainConfigs.map(function(i, a) {
                    return [
                        "heatDomain",
                        {
                            index: i.index,
                            colWidth: COL_WIDTH,
                            rowHeight: ROW_HEIGHT,
                            squareSize: HEATMAP_SQUARE_SIZE,
                            radius: t.rawChartArgs.radius || 0,
                            xTranslate: e.domainConfigs.filter(function(t, e) {
                                return e < a;
                            }).map(function(t) {
                                return t.cols.length - n;
                            }).reduce(function(t, e) {
                                return t + e;
                            }, 0) * COL_WIDTH
                        },
                        (function() {
                            return e.domainConfigs[a];
                        }).bind(t)
                    ];
                });
                this.components = new Map(i.map(function(t, e) {
                    var n = getComponent.apply(void 0, _toConsumableArray$3(t));
                    return [
                        t[0] + "-" + e,
                        n
                    ];
                }));
                var a = 0;
                DAY_NAMES_SHORT.forEach(function(e, n) {
                    if ([
                        1,
                        3,
                        5
                    ].includes(n)) {
                        var i = makeText("subdomain-name", -COL_WIDTH / 2, a, e, {
                            fontSize: HEATMAP_SQUARE_SIZE,
                            dy: 8,
                            textAnchor: "end"
                        });
                        t.drawArea.appendChild(i);
                    }
                    a += ROW_HEIGHT;
                });
            }
        },
        {
            key: "update",
            value: function(t) {
                t || console.error("No data to update."), this.data = this.prepareData(t), this.draw(), this.bindTooltip();
            }
        },
        {
            key: "bindTooltip",
            value: function() {
                var t = this;
                this.container.addEventListener("mousemove", function(e) {
                    t.components.forEach(function(n) {
                        var i = n.store, a = e.target;
                        if (i.includes(a)) {
                            var r = a.getAttribute("data-value"), o = a.getAttribute("data-date").split("-"), s = getMonthName(parseInt(o[1]) - 1, !0), l = t.container.getBoundingClientRect(), u = a.getBoundingClientRect(), c = parseInt(e.target.getAttribute("width")), h = u.left - l.left + c / 2, d = u.top - l.top, f = r + " " + t.countLabel, p = " on " + s + " " + o[0] + ", " + o[2];
                            t.tip.setValues(h, d, {
                                name: p,
                                value: f,
                                valueFirst: 1
                            }, []), t.tip.showTip();
                        }
                    });
                });
            }
        },
        {
            key: "renderLegend",
            value: function() {
                var t = this;
                this.legendArea.textContent = "";
                var e = 0, n = ROW_HEIGHT, i = this.rawChartArgs.radius || 0, a = makeText("subdomain-name", e, n, "Less", {
                    fontSize: HEATMAP_SQUARE_SIZE + 1,
                    dy: 9
                });
                e = 2 * COL_WIDTH + COL_WIDTH / 2, this.legendArea.appendChild(a), this.colors.slice(0, HEATMAP_DISTRIBUTION_SIZE).map(function(a, r) {
                    var o = heatSquare("heatmap-legend-unit", e + (COL_WIDTH + 3) * r, n, HEATMAP_SQUARE_SIZE, i, a);
                    t.legendArea.appendChild(o);
                });
                var r = makeText("subdomain-name", e + HEATMAP_DISTRIBUTION_SIZE * (COL_WIDTH + 3) + COL_WIDTH / 4, n, "More", {
                    fontSize: HEATMAP_SQUARE_SIZE + 1,
                    dy: 9
                });
                this.legendArea.appendChild(r);
            }
        },
        {
            key: "getDomains",
            value: function() {
                for(var t = this.state, e = [
                    t.start.getMonth(),
                    t.start.getFullYear()
                ], n = e[0], i = e[1], a = [
                    t.end.getMonth(),
                    t.end.getFullYear()
                ], r = a[0] - n + 1 + 12 * (a[1] - i), o = [], s = clone(t.start), l = 0; l < r; l++){
                    var u = t.end;
                    if (!areInSameMonth(s, t.end)) {
                        var c = [
                            s.getMonth(),
                            s.getFullYear()
                        ];
                        u = getLastDateInMonth(c[0], c[1]);
                    }
                    o.push(this.getDomainConfig(s, u)), addDays(u, 1), s = u;
                }
                return o;
            }
        },
        {
            key: "getDomainConfig",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = [
                    t.getMonth(),
                    t.getFullYear()
                ], i = n[0], a = n[1], r = setDayToSunday(t), o = {
                    index: i,
                    cols: []
                };
                addDays(e = clone(e) || getLastDateInMonth(i, a), 1);
                for(var s = getWeeksBetween(r, e), l = [], u = void 0, c = 0; c < s; c++)u = this.getCol(r, i), l.push(u), addDays(r = new Date(u[NO_OF_DAYS_IN_WEEK - 1].yyyyMmDd), 1);
                return void 0 !== u[NO_OF_DAYS_IN_WEEK - 1].dataValue && (addDays(r, 1), l.push(this.getCol(r, i, !0))), o.cols = l, o;
            }
        },
        {
            key: "getCol",
            value: function(t, e) {
                for(var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = this.state, a = clone(t), r = [], o = 0; o < NO_OF_DAYS_IN_WEEK; o++, addDays(a, 1)){
                    var s = {}, l = a >= i.start && a <= i.end;
                    n || a.getMonth() !== e || !l ? s.yyyyMmDd = getYyyyMmDd(a) : s = this.getSubDomainConfig(a), r.push(s);
                }
                return r;
            }
        },
        {
            key: "getSubDomainConfig",
            value: function(t) {
                var e = getYyyyMmDd(t), n = this.data.dataPoints[e];
                return {
                    yyyyMmDd: e,
                    dataValue: n || 0,
                    fill: this.colors[getMaxCheckpoint(n, this.state.distribution)]
                };
            }
        }
    ]), e;
}(BaseChart), _createClass$7 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), _get$3 = function t(e, n, i) {
    null === e && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (void 0 === a) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, n, i);
    }
    if ("value" in a) return a.value;
    var o = a.get;
    if (void 0 !== o) return o.call(i);
}, AxisChart = function(t) {
    function e(t, n) {
        _classCallCheck$8(this, e);
        var i = _possibleConstructorReturn$4(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        return i.barOptions = n.barOptions || {}, i.lineOptions = n.lineOptions || {}, i.type = n.type || "line", i.init = 1, i.setup(), i;
    }
    return _inherits$4(e, t), _createClass$7(e, [
        {
            key: "setMeasures",
            value: function() {
                this.data.datasets.length <= 1 && (this.config.showLegend = 0, this.measures.paddings.bottom = 30);
            }
        },
        {
            key: "configure",
            value: function(t) {
                _get$3(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t), t.axisOptions = t.axisOptions || {}, t.tooltipOptions = t.tooltipOptions || {}, this.config.xAxisMode = t.axisOptions.xAxisMode || "span", this.config.yAxisMode = t.axisOptions.yAxisMode || "span", this.config.xIsSeries = t.axisOptions.xIsSeries || 0, this.config.shortenYAxisNumbers = t.axisOptions.shortenYAxisNumbers || 0, this.config.formatTooltipX = t.tooltipOptions.formatTooltipX, this.config.formatTooltipY = t.tooltipOptions.formatTooltipY, this.config.valuesOverPoints = t.valuesOverPoints;
            }
        },
        {
            key: "prepareData",
            value: function() {
                return dataPrep(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data, this.type);
            }
        },
        {
            key: "prepareFirstData",
            value: function() {
                return zeroDataPrep(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data);
            }
        },
        {
            key: "calc",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.calcXPositions(), t || this.calcYAxisParameters(this.getAllYValues(), "line" === this.type), this.makeDataByIndex();
            }
        },
        {
            key: "calcXPositions",
            value: function() {
                var t = this.state, e = this.data.labels;
                t.datasetLength = e.length, t.unitWidth = this.width / t.datasetLength, t.xOffset = t.unitWidth / 2, t.xAxis = {
                    labels: e,
                    positions: e.map(function(e, n) {
                        return floatTwo(t.xOffset + n * t.unitWidth);
                    })
                };
            }
        },
        {
            key: "calcYAxisParameters",
            value: function(t) {
                var e = calcChartIntervals(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "false"), n = this.height / getValueRange(e), i = getIntervalSize(e) * n, a = this.height - getZeroIndex(e) * i;
                this.state.yAxis = {
                    labels: e,
                    positions: e.map(function(t) {
                        return a - t * n;
                    }),
                    scaleMultiplier: n,
                    zeroLine: a
                }, this.calcDatasetPoints(), this.calcYExtremes(), this.calcYRegions();
            }
        },
        {
            key: "calcDatasetPoints",
            value: function() {
                var t = this.state, e = function(e) {
                    return e.map(function(e) {
                        return scale(e, t.yAxis);
                    });
                };
                t.datasets = this.data.datasets.map(function(t, n) {
                    var i = t.values, a = t.cumulativeYs || [];
                    return {
                        name: t.name && t.name.replace(/<|>|&/g, function(t) {
                            return "&" == t ? "&amp;" : "<" == t ? "&lt;" : "&gt;";
                        }),
                        index: n,
                        chartType: t.chartType,
                        values: i,
                        yPositions: e(i),
                        cumulativeYs: a,
                        cumulativeYPos: e(a)
                    };
                });
            }
        },
        {
            key: "calcYExtremes",
            value: function() {
                var t = this.state;
                if (this.barOptions.stacked) return void (t.yExtremes = t.datasets[t.datasets.length - 1].cumulativeYPos);
                t.yExtremes = new Array(t.datasetLength).fill(9999), t.datasets.map(function(e) {
                    e.yPositions.map(function(e, n) {
                        e < t.yExtremes[n] && (t.yExtremes[n] = e);
                    });
                });
            }
        },
        {
            key: "calcYRegions",
            value: function() {
                var t = this.state;
                this.data.yMarkers && (this.state.yMarkers = this.data.yMarkers.map(function(e) {
                    return e.position = scale(e.value, t.yAxis), e.options || (e.options = {}), e;
                })), this.data.yRegions && (this.state.yRegions = this.data.yRegions.map(function(e) {
                    return e.startPos = scale(e.start, t.yAxis), e.endPos = scale(e.end, t.yAxis), e.options || (e.options = {}), e;
                }));
            }
        },
        {
            key: "getAllYValues",
            value: function() {
                var t, e = this, n = "values";
                if (this.barOptions.stacked) {
                    n = "cumulativeYs";
                    var i = new Array(this.state.datasetLength).fill(0);
                    this.data.datasets.map(function(t, a) {
                        var r = e.data.datasets[a].values;
                        t[n] = i = i.map(function(t, e) {
                            return t + r[e];
                        });
                    });
                }
                var a = this.data.datasets.map(function(t) {
                    return t[n];
                });
                return this.data.yMarkers && a.push(this.data.yMarkers.map(function(t) {
                    return t.value;
                })), this.data.yRegions && this.data.yRegions.map(function(t) {
                    a.push([
                        t.end,
                        t.start
                    ]);
                }), (t = []).concat.apply(t, _toConsumableArray$5(a));
            }
        },
        {
            key: "setupComponents",
            value: function() {
                var t = this, e = [
                    [
                        "yAxis",
                        {
                            mode: this.config.yAxisMode,
                            width: this.width,
                            shortenNumbers: this.config.shortenYAxisNumbers
                        },
                        (function() {
                            return this.state.yAxis;
                        }).bind(this)
                    ],
                    [
                        "xAxis",
                        {
                            mode: this.config.xAxisMode,
                            height: this.height
                        },
                        (function() {
                            var t = this.state;
                            return t.xAxis.calcLabels = getShortenedLabels(this.width, t.xAxis.labels, this.config.xIsSeries), t.xAxis;
                        }).bind(this)
                    ],
                    [
                        "yRegions",
                        {
                            width: this.width,
                            pos: "right"
                        },
                        (function() {
                            return this.state.yRegions;
                        }).bind(this)
                    ]
                ], n = this.state.datasets.filter(function(t) {
                    return "bar" === t.chartType;
                }), i = this.state.datasets.filter(function(t) {
                    return "line" === t.chartType;
                }), a = n.map(function(e) {
                    var i = e.index;
                    return [
                        "barGraph-" + e.index,
                        {
                            index: i,
                            color: t.colors[i],
                            stacked: t.barOptions.stacked,
                            valuesOverPoints: t.config.valuesOverPoints,
                            minHeight: t.height * MIN_BAR_PERCENT_HEIGHT
                        },
                        (function() {
                            var t = this.state, e = t.datasets[i], a = this.barOptions.stacked, r = this.barOptions.spaceRatio || BAR_CHART_SPACE_RATIO, o = t.unitWidth * (1 - r), s = o / (a ? 1 : n.length), l = t.xAxis.positions.map(function(t) {
                                return t - o / 2;
                            });
                            a || (l = l.map(function(t) {
                                return t + s * i;
                            }));
                            var u = new Array(t.datasetLength).fill("");
                            this.config.valuesOverPoints && (u = a && e.index === t.datasets.length - 1 ? e.cumulativeYs : e.values);
                            var c = new Array(t.datasetLength).fill(0);
                            return a && (c = e.yPositions.map(function(t, n) {
                                return t - e.cumulativeYPos[n];
                            })), {
                                xPositions: l,
                                yPositions: e.yPositions,
                                offsets: c,
                                labels: u,
                                zeroLine: t.yAxis.zeroLine,
                                barsWidth: o,
                                barWidth: s
                            };
                        }).bind(t)
                    ];
                }), r = i.map(function(e) {
                    var n = e.index;
                    return [
                        "lineGraph-" + e.index,
                        {
                            index: n,
                            color: t.colors[n],
                            svgDefs: t.svgDefs,
                            heatline: t.lineOptions.heatline,
                            regionFill: t.lineOptions.regionFill,
                            spline: t.lineOptions.spline,
                            hideDots: t.lineOptions.hideDots,
                            hideLine: t.lineOptions.hideLine,
                            valuesOverPoints: t.config.valuesOverPoints
                        },
                        (function() {
                            var t = this.state, e = t.datasets[n], i = t.yAxis.positions[0] < t.yAxis.zeroLine ? t.yAxis.positions[0] : t.yAxis.zeroLine;
                            return {
                                xPositions: t.xAxis.positions,
                                yPositions: e.yPositions,
                                values: e.values,
                                zeroLine: i,
                                radius: this.lineOptions.dotSize || LINE_CHART_DOT_SIZE
                            };
                        }).bind(t)
                    ];
                }), o = [
                    [
                        "yMarkers",
                        {
                            width: this.width,
                            pos: "right"
                        },
                        (function() {
                            return this.state.yMarkers;
                        }).bind(this)
                    ]
                ];
                e = e.concat(a, r, o);
                var s = [
                    "yMarkers",
                    "yRegions"
                ];
                this.dataUnitComponents = [], this.components = new Map(e.filter(function(e) {
                    return !s.includes(e[0]) || t.state[e[0]];
                }).map(function(e) {
                    var n = getComponent.apply(void 0, _toConsumableArray$5(e));
                    return (e[0].includes("lineGraph") || e[0].includes("barGraph")) && t.dataUnitComponents.push(n), [
                        e[0],
                        n
                    ];
                }));
            }
        },
        {
            key: "makeDataByIndex",
            value: function() {
                var t = this;
                this.dataByIndex = {};
                var e = this.state, n = this.config.formatTooltipX, i = this.config.formatTooltipY;
                e.xAxis.labels.map(function(a, r) {
                    var o = t.state.datasets.map(function(e, n) {
                        var a = e.values[r];
                        return {
                            title: e.name,
                            value: a,
                            yPos: e.yPositions[r],
                            color: t.colors[n],
                            formatted: i ? i(a) : a
                        };
                    });
                    t.dataByIndex[r] = {
                        label: a,
                        formattedLabel: n ? n(a) : a,
                        xPos: e.xAxis.positions[r],
                        values: o,
                        yExtreme: e.yExtremes[r]
                    };
                });
            }
        },
        {
            key: "bindTooltip",
            value: function() {
                var t = this;
                this.container.addEventListener("mousemove", function(e) {
                    var n = t.measures, i = getOffset(t.container), a = e.pageX - i.left - getLeftOffset(n), r = e.pageY - i.top;
                    r < t.height + getTopOffset(n) && r > getTopOffset(n) ? t.mapTooltipXPosition(a) : t.tip.hideTip();
                });
            }
        },
        {
            key: "mapTooltipXPosition",
            value: function(t) {
                var e = this.state;
                if (e.yExtremes) {
                    var n = getClosestInArray(t, e.xAxis.positions, !0);
                    if (n >= 0) {
                        var i = this.dataByIndex[n];
                        this.tip.setValues(i.xPos + this.tip.offset.x, i.yExtreme + this.tip.offset.y, {
                            name: i.formattedLabel,
                            value: ""
                        }, i.values, n), this.tip.showTip();
                    }
                }
            }
        },
        {
            key: "renderLegend",
            value: function() {
                var t = this, e = this.data;
                e.datasets.length > 1 && (this.legendArea.textContent = "", e.datasets.map(function(e, n) {
                    var i = AXIS_LEGEND_BAR_SIZE, a = legendBar(i * n, "0", i, t.colors[n], e.name, t.config.truncateLegends);
                    t.legendArea.appendChild(a);
                }));
            }
        },
        {
            key: "makeOverlay",
            value: function() {
                var t = this;
                if (this.init) return void (this.init = 0);
                this.overlayGuides && this.overlayGuides.forEach(function(t) {
                    var e = t.overlay;
                    e.parentNode.removeChild(e);
                }), this.overlayGuides = this.dataUnitComponents.map(function(t) {
                    return {
                        type: t.unitType,
                        overlay: void 0,
                        units: t.units
                    };
                }), void 0 === this.state.currentIndex && (this.state.currentIndex = this.state.datasetLength - 1), this.overlayGuides.map(function(e) {
                    var n = e.units[t.state.currentIndex];
                    e.overlay = makeOverlay[e.type](n), t.drawArea.appendChild(e.overlay);
                });
            }
        },
        {
            key: "updateOverlayGuides",
            value: function() {
                this.overlayGuides && this.overlayGuides.forEach(function(t) {
                    var e = t.overlay;
                    e.parentNode.removeChild(e);
                });
            }
        },
        {
            key: "bindOverlay",
            value: function() {
                var t = this;
                this.parent.addEventListener("data-select", function() {
                    t.updateOverlay();
                });
            }
        },
        {
            key: "bindUnits",
            value: function() {
                var t = this;
                this.dataUnitComponents.map(function(e) {
                    e.units.map(function(e) {
                        e.addEventListener("click", function() {
                            var n = e.getAttribute("data-point-index");
                            t.setCurrentDataPoint(n);
                        });
                    });
                }), this.tip.container.addEventListener("click", function() {
                    var e = t.tip.container.getAttribute("data-point-index");
                    t.setCurrentDataPoint(e);
                });
            }
        },
        {
            key: "updateOverlay",
            value: function() {
                var t = this;
                this.overlayGuides.map(function(e) {
                    var n = e.units[t.state.currentIndex];
                    updateOverlay[e.type](n, e.overlay);
                });
            }
        },
        {
            key: "onLeftArrow",
            value: function() {
                this.setCurrentDataPoint(this.state.currentIndex - 1);
            }
        },
        {
            key: "onRightArrow",
            value: function() {
                this.setCurrentDataPoint(this.state.currentIndex + 1);
            }
        },
        {
            key: "getDataPoint",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.currentIndex, e = this.state;
                return {
                    index: t,
                    label: e.xAxis.labels[t],
                    values: e.datasets.map(function(e) {
                        return e.values[t];
                    })
                };
            }
        },
        {
            key: "setCurrentDataPoint",
            value: function(t) {
                var e = this.state;
                (t = parseInt(t)) < 0 && (t = 0), t >= e.xAxis.labels.length && (t = e.xAxis.labels.length - 1), t !== e.currentIndex && (e.currentIndex = t, fire(this.parent, "data-select", this.getDataPoint()));
            }
        },
        {
            key: "addDataPoint",
            value: function(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state.datasetLength;
                _get$3(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "addDataPoint", this).call(this, t, n, i), this.data.labels.splice(i, 0, t), this.data.datasets.map(function(t, e) {
                    t.values.splice(i, 0, n[e]);
                }), this.update(this.data);
            }
        },
        {
            key: "removeDataPoint",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.datasetLength - 1;
                this.data.labels.length <= 1 || (_get$3(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "removeDataPoint", this).call(this, t), this.data.labels.splice(t, 1), this.data.datasets.map(function(e) {
                    e.values.splice(t, 1);
                }), this.update(this.data));
            }
        },
        {
            key: "updateDataset",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.data.datasets[e].values = t, this.update(this.data);
            }
        },
        {
            key: "updateDatasets",
            value: function(t) {
                this.data.datasets.map(function(e, n) {
                    t[n] && (e.values = t[n]);
                }), this.update(this.data);
            }
        }
    ]), e;
}(BaseChart), _createClass$8 = function() {
    function t(t, e) {
        for(var n = 0; n < e.length; n++){
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), _get$4 = function t(e, n, i) {
    null === e && (e = Function.prototype);
    var a = Object.getOwnPropertyDescriptor(e, n);
    if (void 0 === a) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, n, i);
    }
    if ("value" in a) return a.value;
    var o = a.get;
    if (void 0 !== o) return o.call(i);
}, DonutChart = function(t) {
    function e(t, n) {
        _classCallCheck$9(this, e);
        var i = _possibleConstructorReturn$5(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
        return i.type = "donut", i.initTimeout = 0, i.init = 1, i.setup(), i;
    }
    return _inherits$5(e, t), _createClass$8(e, [
        {
            key: "configure",
            value: function(t) {
                _get$4(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this, t), this.mouseMove = this.mouseMove.bind(this), this.mouseLeave = this.mouseLeave.bind(this), this.hoverRadio = t.hoverRadio || .1, this.config.startAngle = t.startAngle || 0, this.clockWise = t.clockWise || !1, this.strokeWidth = t.strokeWidth || 30;
            }
        },
        {
            key: "calc",
            value: function() {
                var t = this;
                _get$4(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "calc", this).call(this);
                var n = this.state;
                this.radius = this.height > this.width ? this.center.x - this.strokeWidth / 2 : this.center.y - this.strokeWidth / 2;
                var i = this.radius, a = this.clockWise, r = n.slicesProperties || [];
                n.sliceStrings = [], n.slicesProperties = [];
                var o = 180 - this.config.startAngle;
                n.sliceTotals.map(function(e, s) {
                    var l = o, u = e / n.grandTotal * FULL_ANGLE, c = u > 180 ? 1 : 0, h = a ? -u : u, d = o += h, f = getPositionByAngle(l, i), p = getPositionByAngle(d, i), v = t.init && r[s], g = void 0, y = void 0;
                    t.init ? (g = v ? v.startPosition : f, y = v ? v.endPosition : f) : (g = f, y = p);
                    var m = 360 === u ? makeStrokeCircleStr(g, y, t.center, t.radius, t.clockWise, c) : makeArcStrokePathStr(g, y, t.center, t.radius, t.clockWise, c);
                    n.sliceStrings.push(m), n.slicesProperties.push({
                        startPosition: f,
                        endPosition: p,
                        value: e,
                        total: n.grandTotal,
                        startAngle: l,
                        endAngle: d,
                        angle: h
                    });
                }), this.init = 0;
            }
        },
        {
            key: "setupComponents",
            value: function() {
                var t = this.state, e = [
                    [
                        "donutSlices",
                        {},
                        (function() {
                            return {
                                sliceStrings: t.sliceStrings,
                                colors: this.colors,
                                strokeWidth: this.strokeWidth
                            };
                        }).bind(this)
                    ]
                ];
                this.components = new Map(e.map(function(t) {
                    var e = getComponent.apply(void 0, _toConsumableArray$7(t));
                    return [
                        t[0],
                        e
                    ];
                }));
            }
        },
        {
            key: "calTranslateByAngle",
            value: function(t) {
                var e = this.radius, n = this.hoverRadio, i = getPositionByAngle(t.startAngle + t.angle / 2, e);
                return "translate3d(" + i.x * n + "px," + i.y * n + "px,0)";
            }
        },
        {
            key: "hoverSlice",
            value: function(t, e, n, i) {
                if (t) {
                    var a = this.colors[e];
                    if (n) {
                        transform(t, this.calTranslateByAngle(this.state.slicesProperties[e])), t.style.stroke = lightenDarkenColor(a, 50);
                        var r = getOffset(this.svg), o = i.pageX - r.left + 10, s = i.pageY - r.top - 10, l = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[e] : this.state.labels[e]) + ": ", u = (100 * this.state.sliceTotals[e] / this.state.grandTotal).toFixed(1);
                        this.tip.setValues(o, s, {
                            name: l,
                            value: u + "%"
                        }), this.tip.showTip();
                    } else transform(t, "translate3d(0,0,0)"), this.tip.hideTip(), t.style.stroke = a;
                }
            }
        },
        {
            key: "bindTooltip",
            value: function() {
                this.container.addEventListener("mousemove", this.mouseMove), this.container.addEventListener("mouseleave", this.mouseLeave);
            }
        },
        {
            key: "mouseMove",
            value: function(t) {
                var e = t.target, n = this.components.get("donutSlices").store, i = this.curActiveSliceIndex, a = this.curActiveSlice;
                if (n.includes(e)) {
                    var r = n.indexOf(e);
                    this.hoverSlice(a, i, !1), this.curActiveSlice = e, this.curActiveSliceIndex = r, this.hoverSlice(e, r, !0, t);
                } else this.mouseLeave();
            }
        },
        {
            key: "mouseLeave",
            value: function() {
                this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, !1);
            }
        }
    ]), e;
}(AggregationChart), chartTypes = {
    bar: AxisChart,
    line: AxisChart,
    percentage: PercentageChart,
    heatmap: Heatmap,
    pie: PieChart,
    donut: DonutChart
}, Chart = function t(e, n) {
    return _classCallCheck(this, t), getChartByType(n.type, e, n);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"i07uf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = data = [
    {
        "date": "2024-05-25 11:00:26",
        "count": 58
    },
    {
        "date": "2024-05-25 11:05:27",
        "count": 57
    },
    {
        "date": "2024-05-25 11:10:28",
        "count": 59
    },
    {
        "date": "2024-05-25 11:15:29",
        "count": 60
    },
    {
        "date": "2024-05-25 11:20:30",
        "count": 61
    },
    {
        "date": "2024-05-25 11:25:31",
        "count": 62
    },
    {
        "date": "2024-05-25 11:30:34",
        "count": 62
    },
    {
        "date": "2024-05-25 11:35:35",
        "count": 63
    },
    {
        "date": "2024-05-25 11:40:36",
        "count": 65
    },
    {
        "date": "2024-05-25 11:45:37",
        "count": 67
    },
    {
        "date": "2024-05-25 11:50:38",
        "count": 66
    },
    {
        "date": "2024-05-25 11:55:39",
        "count": 67
    },
    {
        "date": "2024-05-25 12:00:42",
        "count": 70
    },
    {
        "date": "2024-05-25 12:05:43",
        "count": 69
    },
    {
        "date": "2024-05-25 12:10:44",
        "count": 72
    },
    {
        "date": "2024-05-25 12:15:45",
        "count": 69
    },
    {
        "date": "2024-05-25 12:20:46",
        "count": 67
    },
    {
        "date": "2024-05-25 12:25:47",
        "count": 67
    },
    {
        "date": "2024-05-25 12:30:50",
        "count": 65
    },
    {
        "date": "2024-05-25 12:35:51",
        "count": 66
    },
    {
        "date": "2024-05-25 12:40:52",
        "count": 70
    },
    {
        "date": "2024-05-25 12:45:53",
        "count": 72
    },
    {
        "date": "2024-05-25 12:50:54",
        "count": 70
    },
    {
        "date": "2024-05-25 12:55:55",
        "count": 69
    },
    {
        "date": "2024-05-25 13:00:59",
        "count": 68
    },
    {
        "date": "2024-05-25 13:06:00",
        "count": 69
    },
    {
        "date": "2024-05-25 13:11:01",
        "count": 68
    },
    {
        "date": "2024-05-25 13:16:02",
        "count": 68
    },
    {
        "date": "2024-05-25 13:21:03",
        "count": 65
    },
    {
        "date": "2024-05-25 13:26:04",
        "count": 66
    },
    {
        "date": "2024-05-25 13:31:07",
        "count": 66
    },
    {
        "date": "2024-05-25 13:36:08",
        "count": 76
    },
    {
        "date": "2024-05-25 13:41:09",
        "count": 77
    },
    {
        "date": "2024-05-25 13:46:10",
        "count": 79
    },
    {
        "date": "2024-05-25 13:51:10",
        "count": 77
    },
    {
        "date": "2024-05-25 13:56:12",
        "count": 79
    },
    {
        "date": "2024-05-25 14:01:15",
        "count": 81
    },
    {
        "date": "2024-05-25 14:06:16",
        "count": 80
    },
    {
        "date": "2024-05-25 14:11:17",
        "count": 82
    },
    {
        "date": "2024-05-25 14:16:18",
        "count": 77
    },
    {
        "date": "2024-05-25 14:21:19",
        "count": 83
    },
    {
        "date": "2024-05-25 14:26:20",
        "count": 79
    },
    {
        "date": "2024-05-25 14:31:23",
        "count": 85
    },
    {
        "date": "2024-05-25 14:36:24",
        "count": 86
    },
    {
        "date": "2024-05-25 14:41:25",
        "count": 82
    },
    {
        "date": "2024-05-25 14:46:25",
        "count": 80
    },
    {
        "date": "2024-05-25 14:51:26",
        "count": 81
    },
    {
        "date": "2024-05-25 14:56:28",
        "count": 84
    },
    {
        "date": "2024-05-25 15:01:31",
        "count": 90
    },
    {
        "date": "2024-05-25 15:06:32",
        "count": 84
    },
    {
        "date": "2024-05-25 15:11:33",
        "count": 81
    },
    {
        "date": "2024-05-25 15:16:34",
        "count": 74
    },
    {
        "date": "2024-05-25 15:21:35",
        "count": 75
    },
    {
        "date": "2024-05-25 15:26:36",
        "count": 73
    },
    {
        "date": "2024-05-25 15:31:39",
        "count": 78
    },
    {
        "date": "2024-05-25 15:36:40",
        "count": 73
    },
    {
        "date": "2024-05-25 15:41:41",
        "count": 70
    },
    {
        "date": "2024-05-25 15:46:41",
        "count": 68
    },
    {
        "date": "2024-05-25 15:51:42",
        "count": 66
    },
    {
        "date": "2024-05-25 15:56:44",
        "count": 66
    },
    {
        "date": "2024-05-25 16:01:47",
        "count": 66
    },
    {
        "date": "2024-05-25 16:06:48",
        "count": 65
    },
    {
        "date": "2024-05-25 16:11:49",
        "count": 62
    },
    {
        "date": "2024-05-25 16:16:50",
        "count": 59
    },
    {
        "date": "2024-05-25 16:21:51",
        "count": 57
    },
    {
        "date": "2024-05-25 16:26:52",
        "count": 57
    },
    {
        "date": "2024-05-25 16:31:55",
        "count": 55
    },
    {
        "date": "2024-05-25 16:36:56",
        "count": 56
    },
    {
        "date": "2024-05-25 16:41:57",
        "count": 51
    },
    {
        "date": "2024-05-25 16:46:58",
        "count": 51
    },
    {
        "date": "2024-05-25 16:51:59",
        "count": 51
    },
    {
        "date": "2024-05-25 16:57:00",
        "count": 49
    },
    {
        "date": "2024-05-25 17:02:04",
        "count": 50
    },
    {
        "date": "2024-05-25 17:07:05",
        "count": 53
    },
    {
        "date": "2024-05-25 17:12:06",
        "count": 52
    },
    {
        "date": "2024-05-25 17:17:07",
        "count": 55
    },
    {
        "date": "2024-05-25 17:22:08",
        "count": 53
    },
    {
        "date": "2024-05-25 17:27:09",
        "count": 52
    },
    {
        "date": "2024-05-25 17:32:13",
        "count": 51
    },
    {
        "date": "2024-05-25 17:37:14",
        "count": 50
    },
    {
        "date": "2024-05-25 17:42:15",
        "count": 49
    },
    {
        "date": "2024-05-25 17:47:16",
        "count": 49
    },
    {
        "date": "2024-05-25 17:52:17",
        "count": 51
    },
    {
        "date": "2024-05-25 17:57:18",
        "count": 49
    },
    {
        "date": "2024-05-25 18:02:21",
        "count": 54
    },
    {
        "date": "2024-05-25 18:07:22",
        "count": 53
    },
    {
        "date": "2024-05-25 18:12:23",
        "count": 52
    },
    {
        "date": "2024-05-25 18:17:25",
        "count": 53
    },
    {
        "date": "2024-05-25 18:22:26",
        "count": 50
    },
    {
        "date": "2024-05-25 18:27:27",
        "count": 49
    },
    {
        "date": "2024-05-25 18:32:30",
        "count": 47
    },
    {
        "date": "2024-05-25 18:37:31",
        "count": 52
    },
    {
        "date": "2024-05-25 18:42:32",
        "count": 55
    },
    {
        "date": "2024-05-25 18:47:33",
        "count": 59
    },
    {
        "date": "2024-05-25 18:52:34",
        "count": 60
    },
    {
        "date": "2024-05-25 18:57:35",
        "count": 63
    },
    {
        "date": "2024-05-25 19:02:38",
        "count": 62
    },
    {
        "date": "2024-05-25 19:07:39",
        "count": 57
    },
    {
        "date": "2024-05-25 19:12:40",
        "count": 55
    },
    {
        "date": "2024-05-25 19:17:41",
        "count": 58
    },
    {
        "date": "2024-05-25 19:22:41",
        "count": 57
    },
    {
        "date": "2024-05-25 19:27:42",
        "count": 56
    },
    {
        "date": "2024-05-25 19:32:46",
        "count": 52
    },
    {
        "date": "2024-05-25 19:37:46",
        "count": 49
    },
    {
        "date": "2024-05-25 19:42:47",
        "count": 45
    },
    {
        "date": "2024-05-25 19:47:48",
        "count": 48
    },
    {
        "date": "2024-05-25 19:52:49",
        "count": 50
    },
    {
        "date": "2024-05-25 19:57:50",
        "count": 46
    },
    {
        "date": "2024-05-25 20:02:53",
        "count": 43
    },
    {
        "date": "2024-05-25 20:07:54",
        "count": 45
    },
    {
        "date": "2024-05-25 20:12:55",
        "count": 41
    },
    {
        "date": "2024-05-25 20:17:56",
        "count": 40
    },
    {
        "date": "2024-05-25 20:22:57",
        "count": 38
    },
    {
        "date": "2024-05-25 20:27:57",
        "count": 38
    },
    {
        "date": "2024-05-25 20:33:01",
        "count": 37
    },
    {
        "date": "2024-05-25 20:38:02",
        "count": 34
    },
    {
        "date": "2024-05-25 20:43:03",
        "count": 31
    },
    {
        "date": "2024-05-25 20:48:04",
        "count": 31
    },
    {
        "date": "2024-05-25 20:53:04",
        "count": 32
    },
    {
        "date": "2024-05-25 20:58:05",
        "count": 34
    },
    {
        "date": "2024-05-25 21:03:08",
        "count": 38
    },
    {
        "date": "2024-05-25 21:08:09",
        "count": 38
    },
    {
        "date": "2024-05-25 21:13:10",
        "count": 36
    },
    {
        "date": "2024-05-25 21:18:11",
        "count": 32
    },
    {
        "date": "2024-05-25 21:23:13",
        "count": 33
    },
    {
        "date": "2024-05-25 21:28:13",
        "count": 33
    },
    {
        "date": "2024-05-25 21:33:17",
        "count": 33
    },
    {
        "date": "2024-05-25 21:38:18",
        "count": 33
    },
    {
        "date": "2024-05-25 21:43:19",
        "count": 30
    },
    {
        "date": "2024-05-25 21:48:20",
        "count": 29
    },
    {
        "date": "2024-05-25 21:53:20",
        "count": 33
    },
    {
        "date": "2024-05-25 21:58:21",
        "count": 33
    },
    {
        "date": "2024-05-25 22:03:24",
        "count": 28
    },
    {
        "date": "2024-05-25 22:08:25",
        "count": 27
    },
    {
        "date": "2024-05-25 22:13:26",
        "count": 27
    },
    {
        "date": "2024-05-25 22:18:27",
        "count": 27
    },
    {
        "date": "2024-05-25 22:23:27",
        "count": 26
    },
    {
        "date": "2024-05-25 22:28:28",
        "count": 26
    },
    {
        "date": "2024-05-25 22:33:31",
        "count": 26
    },
    {
        "date": "2024-05-25 22:38:32",
        "count": 25
    },
    {
        "date": "2024-05-25 22:43:33",
        "count": 24
    },
    {
        "date": "2024-05-25 22:48:34",
        "count": 21
    },
    {
        "date": "2024-05-25 22:53:35",
        "count": 20
    },
    {
        "date": "2024-05-25 22:58:36",
        "count": 21
    },
    {
        "date": "2024-05-25 23:03:39",
        "count": 19
    },
    {
        "date": "2024-05-25 23:08:40",
        "count": 18
    },
    {
        "date": "2024-05-25 23:13:41",
        "count": 18
    },
    {
        "date": "2024-05-25 23:18:41",
        "count": 17
    },
    {
        "date": "2024-05-25 23:23:42",
        "count": 13
    },
    {
        "date": "2024-05-25 23:28:43",
        "count": 13
    },
    {
        "date": "2024-05-25 23:33:46",
        "count": 12
    },
    {
        "date": "2024-05-25 23:38:47",
        "count": 12
    },
    {
        "date": "2024-05-25 23:43:48",
        "count": 11
    },
    {
        "date": "2024-05-25 23:48:49",
        "count": 9
    },
    {
        "date": "2024-05-25 23:53:49",
        "count": 9
    },
    {
        "date": "2024-05-25 23:58:50",
        "count": 9
    },
    {
        "date": "2024-05-26 00:03:53",
        "count": 9
    },
    {
        "date": "2024-05-26 00:08:53",
        "count": 9
    },
    {
        "date": "2024-05-26 00:13:54",
        "count": 9
    },
    {
        "date": "2024-05-26 00:18:55",
        "count": 9
    },
    {
        "date": "2024-05-26 00:23:56",
        "count": 9
    },
    {
        "date": "2024-05-26 00:28:57",
        "count": 8
    },
    {
        "date": "2024-05-26 00:34:00",
        "count": 8
    },
    {
        "date": "2024-05-26 00:39:01",
        "count": 8
    },
    {
        "date": "2024-05-26 00:44:01",
        "count": 8
    },
    {
        "date": "2024-05-26 00:49:02",
        "count": 8
    },
    {
        "date": "2024-05-26 00:54:03",
        "count": 8
    },
    {
        "date": "2024-05-26 00:59:04",
        "count": 8
    },
    {
        "date": "2024-05-26 01:04:07",
        "count": 8
    },
    {
        "date": "2024-05-26 01:09:08",
        "count": 8
    },
    {
        "date": "2024-05-26 01:14:08",
        "count": 8
    },
    {
        "date": "2024-05-26 01:19:09",
        "count": 8
    },
    {
        "date": "2024-05-26 01:24:10",
        "count": 8
    },
    {
        "date": "2024-05-26 01:29:11",
        "count": 7
    },
    {
        "date": "2024-05-26 01:34:14",
        "count": 7
    },
    {
        "date": "2024-05-26 01:39:14",
        "count": 8
    },
    {
        "date": "2024-05-26 01:44:15",
        "count": 8
    },
    {
        "date": "2024-05-26 01:49:16",
        "count": 8
    },
    {
        "date": "2024-05-26 01:54:17",
        "count": 8
    },
    {
        "date": "2024-05-26 01:59:17",
        "count": 8
    },
    {
        "date": "2024-05-26 02:04:21",
        "count": 8
    },
    {
        "date": "2024-05-26 02:09:21",
        "count": 8
    },
    {
        "date": "2024-05-26 02:14:22",
        "count": 8
    },
    {
        "date": "2024-05-26 02:19:23",
        "count": 9
    },
    {
        "date": "2024-05-26 02:24:24",
        "count": 11
    },
    {
        "date": "2024-05-26 02:29:24",
        "count": 11
    },
    {
        "date": "2024-05-26 02:34:27",
        "count": 11
    },
    {
        "date": "2024-05-26 02:39:28",
        "count": 11
    },
    {
        "date": "2024-05-26 02:44:29",
        "count": 11
    },
    {
        "date": "2024-05-26 02:49:29",
        "count": 11
    },
    {
        "date": "2024-05-26 02:54:30",
        "count": 11
    },
    {
        "date": "2024-05-26 02:59:31",
        "count": 11
    },
    {
        "date": "2024-05-26 03:04:34",
        "count": 11
    },
    {
        "date": "2024-05-26 03:09:35",
        "count": 12
    },
    {
        "date": "2024-05-26 03:14:36",
        "count": 12
    },
    {
        "date": "2024-05-26 03:19:36",
        "count": 12
    },
    {
        "date": "2024-05-26 03:24:37",
        "count": 12
    },
    {
        "date": "2024-05-26 03:29:38",
        "count": 14
    },
    {
        "date": "2024-05-26 03:34:41",
        "count": 14
    },
    {
        "date": "2024-05-26 03:39:41",
        "count": 14
    },
    {
        "date": "2024-05-26 03:44:42",
        "count": 13
    },
    {
        "date": "2024-05-26 03:49:43",
        "count": 13
    },
    {
        "date": "2024-05-26 03:54:44",
        "count": 11
    },
    {
        "date": "2024-05-26 03:59:44",
        "count": 12
    },
    {
        "date": "2024-05-26 04:04:47",
        "count": 12
    },
    {
        "date": "2024-05-26 04:09:48",
        "count": 13
    },
    {
        "date": "2024-05-26 04:14:49",
        "count": 15
    },
    {
        "date": "2024-05-26 04:19:50",
        "count": 16
    },
    {
        "date": "2024-05-26 04:24:51",
        "count": 17
    },
    {
        "date": "2024-05-26 04:29:52",
        "count": 17
    },
    {
        "date": "2024-05-26 04:34:55",
        "count": 17
    },
    {
        "date": "2024-05-26 04:39:56",
        "count": 20
    },
    {
        "date": "2024-05-26 04:44:56",
        "count": 20
    },
    {
        "date": "2024-05-26 04:49:57",
        "count": 19
    },
    {
        "date": "2024-05-26 04:54:58",
        "count": 17
    },
    {
        "date": "2024-05-26 04:59:58",
        "count": 16
    },
    {
        "date": "2024-05-26 05:05:02",
        "count": 12
    },
    {
        "date": "2024-05-26 05:10:02",
        "count": 12
    },
    {
        "date": "2024-05-26 05:15:03",
        "count": 14
    },
    {
        "date": "2024-05-26 05:20:04",
        "count": 14
    },
    {
        "date": "2024-05-26 05:25:05",
        "count": 15
    },
    {
        "date": "2024-05-26 05:30:06",
        "count": 15
    },
    {
        "date": "2024-05-26 05:35:08",
        "count": 17
    },
    {
        "date": "2024-05-26 05:40:09",
        "count": 18
    },
    {
        "date": "2024-05-26 05:45:10",
        "count": 19
    },
    {
        "date": "2024-05-26 05:50:11",
        "count": 21
    },
    {
        "date": "2024-05-26 05:55:11",
        "count": 21
    },
    {
        "date": "2024-05-26 06:00:12",
        "count": 24
    },
    {
        "date": "2024-05-26 06:05:15",
        "count": 24
    },
    {
        "date": "2024-05-26 06:10:16",
        "count": 24
    },
    {
        "date": "2024-05-26 06:15:17",
        "count": 27
    },
    {
        "date": "2024-05-26 06:20:18",
        "count": 31
    },
    {
        "date": "2024-05-26 06:25:18",
        "count": 31
    },
    {
        "date": "2024-05-26 06:30:19",
        "count": 33
    },
    {
        "date": "2024-05-26 06:35:22",
        "count": 31
    },
    {
        "date": "2024-05-26 06:40:23",
        "count": 29
    },
    {
        "date": "2024-05-26 06:45:23",
        "count": 30
    },
    {
        "date": "2024-05-26 06:50:24",
        "count": 34
    },
    {
        "date": "2024-05-26 06:55:25",
        "count": 37
    },
    {
        "date": "2024-05-26 07:00:26",
        "count": 38
    },
    {
        "date": "2024-05-26 07:05:29",
        "count": 40
    },
    {
        "date": "2024-05-26 07:10:29",
        "count": 41
    },
    {
        "date": "2024-05-26 07:15:30",
        "count": 44
    },
    {
        "date": "2024-05-26 07:20:31",
        "count": 47
    },
    {
        "date": "2024-05-26 07:25:32",
        "count": 51
    },
    {
        "date": "2024-05-26 07:30:34",
        "count": 53
    },
    {
        "date": "2024-05-26 07:35:37",
        "count": 54
    },
    {
        "date": "2024-05-26 07:40:38",
        "count": 58
    },
    {
        "date": "2024-05-26 07:45:38",
        "count": 60
    },
    {
        "date": "2024-05-26 07:50:39",
        "count": 70
    },
    {
        "date": "2024-05-26 07:55:40",
        "count": 78
    },
    {
        "date": "2024-05-26 08:00:41",
        "count": 85
    },
    {
        "date": "2024-05-26 08:05:43",
        "count": 86
    },
    {
        "date": "2024-05-26 08:10:44",
        "count": 89
    },
    {
        "date": "2024-05-26 08:15:45",
        "count": 94
    },
    {
        "date": "2024-05-26 08:20:49",
        "count": 100
    },
    {
        "date": "2024-05-26 08:25:50",
        "count": 106
    },
    {
        "date": "2024-05-26 08:30:51",
        "count": 107
    },
    {
        "date": "2024-05-26 08:35:54",
        "count": 110
    },
    {
        "date": "2024-05-26 08:40:55",
        "count": 112
    },
    {
        "date": "2024-05-26 08:45:56",
        "count": 114
    },
    {
        "date": "2024-05-26 08:50:57",
        "count": 109
    },
    {
        "date": "2024-05-26 08:55:58",
        "count": 109
    },
    {
        "date": "2024-05-26 09:00:59",
        "count": 111
    },
    {
        "date": "2024-05-26 09:06:03",
        "count": 103
    },
    {
        "date": "2024-05-26 09:11:03",
        "count": 100
    },
    {
        "date": "2024-05-26 09:16:04",
        "count": 96
    },
    {
        "date": "2024-05-26 09:21:05",
        "count": 92
    },
    {
        "date": "2024-05-26 09:26:06",
        "count": 90
    },
    {
        "date": "2024-05-26 09:31:07",
        "count": 88
    },
    {
        "date": "2024-05-26 09:36:10",
        "count": 77
    },
    {
        "date": "2024-05-26 09:41:11",
        "count": 80
    },
    {
        "date": "2024-05-26 09:46:13",
        "count": 80
    },
    {
        "date": "2024-05-26 09:51:14",
        "count": 77
    },
    {
        "date": "2024-05-26 09:56:15",
        "count": 77
    },
    {
        "date": "2024-05-26 10:01:16",
        "count": 84
    },
    {
        "date": "2024-05-26 10:06:20",
        "count": 84
    },
    {
        "date": "2024-05-26 10:11:21",
        "count": 87
    },
    {
        "date": "2024-05-26 10:16:22",
        "count": 80
    },
    {
        "date": "2024-05-26 10:21:22",
        "count": 84
    },
    {
        "date": "2024-05-26 10:26:23",
        "count": 86
    },
    {
        "date": "2024-05-26 10:31:24",
        "count": 86
    },
    {
        "date": "2024-05-26 10:36:27",
        "count": 86
    },
    {
        "date": "2024-05-26 10:41:28",
        "count": 85
    },
    {
        "date": "2024-05-26 10:46:29",
        "count": 85
    },
    {
        "date": "2024-05-26 10:51:30",
        "count": 83
    },
    {
        "date": "2024-05-26 10:56:31",
        "count": 80
    },
    {
        "date": "2024-05-26 11:01:31",
        "count": 82
    },
    {
        "date": "2024-05-26 11:06:35",
        "count": 85
    },
    {
        "date": "2024-05-26 11:11:36",
        "count": 92
    },
    {
        "date": "2024-05-26 11:16:37",
        "count": 90
    },
    {
        "date": "2024-05-26 11:21:38",
        "count": 89
    },
    {
        "date": "2024-05-26 11:26:39",
        "count": 85
    },
    {
        "date": "2024-05-26 11:31:40",
        "count": 80
    },
    {
        "date": "2024-05-26 11:36:43",
        "count": 77
    },
    {
        "date": "2024-05-26 11:41:44",
        "count": 80
    },
    {
        "date": "2024-05-26 11:46:45",
        "count": 74
    },
    {
        "date": "2024-05-26 11:51:46",
        "count": 72
    },
    {
        "date": "2024-05-26 11:56:47",
        "count": 72
    },
    {
        "date": "2024-05-26 12:01:48",
        "count": 70
    },
    {
        "date": "2024-05-26 12:06:51",
        "count": 73
    },
    {
        "date": "2024-05-26 12:11:52",
        "count": 76
    },
    {
        "date": "2024-05-26 12:16:53",
        "count": 72
    },
    {
        "date": "2024-05-26 12:21:54",
        "count": 70
    },
    {
        "date": "2024-05-26 12:26:55",
        "count": 65
    },
    {
        "date": "2024-05-26 12:31:56",
        "count": 67
    },
    {
        "date": "2024-05-26 12:36:59",
        "count": 69
    },
    {
        "date": "2024-05-26 12:42:00",
        "count": 67
    },
    {
        "date": "2024-05-26 12:47:01",
        "count": 71
    },
    {
        "date": "2024-05-26 12:52:02",
        "count": 70
    },
    {
        "date": "2024-05-26 12:57:03",
        "count": 68
    },
    {
        "date": "2024-05-26 13:02:04",
        "count": 69
    },
    {
        "date": "2024-05-26 13:07:08",
        "count": 68
    },
    {
        "date": "2024-05-26 13:12:08",
        "count": 70
    },
    {
        "date": "2024-05-26 13:17:09",
        "count": 69
    },
    {
        "date": "2024-05-26 13:22:11",
        "count": 67
    },
    {
        "date": "2024-05-26 13:27:12",
        "count": 68
    },
    {
        "date": "2024-05-26 13:32:13",
        "count": 68
    },
    {
        "date": "2024-05-26 13:37:17",
        "count": 66
    },
    {
        "date": "2024-05-26 13:42:18",
        "count": 74
    },
    {
        "date": "2024-05-26 13:47:19",
        "count": 74
    },
    {
        "date": "2024-05-26 13:52:20",
        "count": 81
    },
    {
        "date": "2024-05-26 13:57:20",
        "count": 80
    },
    {
        "date": "2024-05-26 14:02:21",
        "count": 80
    },
    {
        "date": "2024-05-26 14:07:25",
        "count": 81
    },
    {
        "date": "2024-05-26 14:12:25",
        "count": 87
    },
    {
        "date": "2024-05-26 14:17:27",
        "count": 90
    },
    {
        "date": "2024-05-26 14:22:28",
        "count": 99
    },
    {
        "date": "2024-05-26 14:27:28",
        "count": 99
    },
    {
        "date": "2024-05-26 14:32:29",
        "count": 99
    },
    {
        "date": "2024-05-26 14:37:33",
        "count": 98
    },
    {
        "date": "2024-05-26 14:42:34",
        "count": 96
    },
    {
        "date": "2024-05-26 14:47:35",
        "count": 93
    },
    {
        "date": "2024-05-26 14:52:36",
        "count": 88
    },
    {
        "date": "2024-05-26 14:57:37",
        "count": 87
    },
    {
        "date": "2024-05-26 15:02:38",
        "count": 90
    },
    {
        "date": "2024-05-26 15:07:41",
        "count": 89
    },
    {
        "date": "2024-05-26 15:12:42",
        "count": 90
    },
    {
        "date": "2024-05-26 15:17:43",
        "count": 97
    },
    {
        "date": "2024-05-26 15:22:44",
        "count": 103
    },
    {
        "date": "2024-05-26 15:27:45",
        "count": 102
    },
    {
        "date": "2024-05-26 15:32:46",
        "count": 102
    },
    {
        "date": "2024-05-26 15:37:49",
        "count": 98
    },
    {
        "date": "2024-05-26 15:42:50",
        "count": 99
    },
    {
        "date": "2024-05-26 15:47:51",
        "count": 103
    },
    {
        "date": "2024-05-26 15:52:52",
        "count": 102
    },
    {
        "date": "2024-05-26 15:57:53",
        "count": 108
    },
    {
        "date": "2024-05-26 16:02:54",
        "count": 105
    },
    {
        "date": "2024-05-26 16:07:58",
        "count": 102
    },
    {
        "date": "2024-05-26 16:12:59",
        "count": 100
    },
    {
        "date": "2024-05-26 16:18:00",
        "count": 97
    },
    {
        "date": "2024-05-26 16:23:02",
        "count": 99
    },
    {
        "date": "2024-05-26 16:28:03",
        "count": 98
    },
    {
        "date": "2024-05-26 16:33:04",
        "count": 102
    },
    {
        "date": "2024-05-26 16:38:08",
        "count": 103
    },
    {
        "date": "2024-05-26 16:43:09",
        "count": 89
    },
    {
        "date": "2024-05-26 16:48:10",
        "count": 84
    },
    {
        "date": "2024-05-26 16:53:11",
        "count": 84
    },
    {
        "date": "2024-05-26 16:58:12",
        "count": 84
    },
    {
        "date": "2024-05-26 17:03:14",
        "count": 79
    },
    {
        "date": "2024-05-26 17:08:18",
        "count": 83
    },
    {
        "date": "2024-05-26 17:13:20",
        "count": 81
    },
    {
        "date": "2024-05-26 17:18:21",
        "count": 95
    },
    {
        "date": "2024-05-26 17:23:22",
        "count": 97
    },
    {
        "date": "2024-05-26 17:28:23",
        "count": 99
    },
    {
        "date": "2024-05-26 17:33:24",
        "count": 97
    },
    {
        "date": "2024-05-26 17:38:27",
        "count": 100
    },
    {
        "date": "2024-05-26 17:43:28",
        "count": 100
    },
    {
        "date": "2024-05-26 17:48:29",
        "count": 104
    },
    {
        "date": "2024-05-26 17:53:30",
        "count": 108
    },
    {
        "date": "2024-05-26 17:58:31",
        "count": 114
    },
    {
        "date": "2024-05-26 18:03:32",
        "count": 116
    },
    {
        "date": "2024-05-26 18:08:36",
        "count": 112
    },
    {
        "date": "2024-05-26 18:13:37",
        "count": 114
    },
    {
        "date": "2024-05-26 18:18:38",
        "count": 109
    },
    {
        "date": "2024-05-26 18:23:39",
        "count": 108
    },
    {
        "date": "2024-05-26 18:28:40",
        "count": 111
    },
    {
        "date": "2024-05-26 18:33:41",
        "count": 109
    },
    {
        "date": "2024-05-26 18:38:45",
        "count": 111
    },
    {
        "date": "2024-05-26 18:43:46",
        "count": 107
    },
    {
        "date": "2024-05-26 18:48:47",
        "count": 101
    },
    {
        "date": "2024-05-26 18:53:48",
        "count": 94
    },
    {
        "date": "2024-05-26 18:58:49",
        "count": 86
    },
    {
        "date": "2024-05-26 19:03:50",
        "count": 84
    },
    {
        "date": "2024-05-26 19:08:54",
        "count": 84
    },
    {
        "date": "2024-05-26 19:13:55",
        "count": 84
    },
    {
        "date": "2024-05-26 19:18:56",
        "count": 86
    },
    {
        "date": "2024-05-26 19:23:57",
        "count": 84
    },
    {
        "date": "2024-05-26 19:28:58",
        "count": 79
    },
    {
        "date": "2024-05-26 19:34:00",
        "count": 71
    },
    {
        "date": "2024-05-26 19:39:04",
        "count": 66
    },
    {
        "date": "2024-05-26 19:44:05",
        "count": 66
    },
    {
        "date": "2024-05-26 19:49:05",
        "count": 69
    },
    {
        "date": "2024-05-26 19:54:06",
        "count": 63
    },
    {
        "date": "2024-05-26 19:59:07",
        "count": 61
    },
    {
        "date": "2024-05-26 20:04:08",
        "count": 60
    },
    {
        "date": "2024-05-26 20:09:12",
        "count": 53
    },
    {
        "date": "2024-05-26 20:14:13",
        "count": 51
    },
    {
        "date": "2024-05-26 20:19:14",
        "count": 49
    },
    {
        "date": "2024-05-26 20:24:15",
        "count": 45
    },
    {
        "date": "2024-05-26 20:29:16",
        "count": 44
    },
    {
        "date": "2024-05-26 20:34:16",
        "count": 43
    },
    {
        "date": "2024-05-26 20:39:20",
        "count": 46
    },
    {
        "date": "2024-05-26 20:44:21",
        "count": 45
    },
    {
        "date": "2024-05-26 20:49:22",
        "count": 43
    },
    {
        "date": "2024-05-26 20:54:23",
        "count": 42
    },
    {
        "date": "2024-05-26 20:59:24",
        "count": 41
    },
    {
        "date": "2024-05-26 21:04:25",
        "count": 42
    },
    {
        "date": "2024-05-26 21:09:28",
        "count": 39
    },
    {
        "date": "2024-05-26 21:14:29",
        "count": 35
    },
    {
        "date": "2024-05-26 21:19:30",
        "count": 31
    },
    {
        "date": "2024-05-26 21:24:30",
        "count": 30
    },
    {
        "date": "2024-05-26 21:29:31",
        "count": 29
    },
    {
        "date": "2024-05-26 21:34:32",
        "count": 30
    },
    {
        "date": "2024-05-26 21:39:35",
        "count": 28
    },
    {
        "date": "2024-05-26 21:44:36",
        "count": 26
    },
    {
        "date": "2024-05-26 21:49:36",
        "count": 24
    },
    {
        "date": "2024-05-26 21:54:37",
        "count": 22
    },
    {
        "date": "2024-05-26 21:59:38",
        "count": 21
    },
    {
        "date": "2024-05-26 22:04:38",
        "count": 21
    },
    {
        "date": "2024-05-26 22:09:41",
        "count": 20
    },
    {
        "date": "2024-05-26 22:14:42",
        "count": 17
    },
    {
        "date": "2024-05-26 22:19:43",
        "count": 14
    },
    {
        "date": "2024-05-26 22:24:43",
        "count": 14
    },
    {
        "date": "2024-05-26 22:29:44",
        "count": 14
    },
    {
        "date": "2024-05-26 22:34:45",
        "count": 13
    },
    {
        "date": "2024-05-26 22:39:48",
        "count": 12
    },
    {
        "date": "2024-05-26 22:44:49",
        "count": 13
    },
    {
        "date": "2024-05-26 22:49:50",
        "count": 12
    },
    {
        "date": "2024-05-26 22:54:50",
        "count": 9
    },
    {
        "date": "2024-05-26 22:59:51",
        "count": 9
    },
    {
        "date": "2024-05-26 23:04:52",
        "count": 8
    },
    {
        "date": "2024-05-26 23:09:55",
        "count": 9
    },
    {
        "date": "2024-05-26 23:14:56",
        "count": 9
    },
    {
        "date": "2024-05-26 23:19:56",
        "count": 9
    },
    {
        "date": "2024-05-26 23:24:57",
        "count": 11
    },
    {
        "date": "2024-05-26 23:29:58",
        "count": 11
    },
    {
        "date": "2024-05-26 23:34:59",
        "count": 10
    },
    {
        "date": "2024-05-26 23:40:02",
        "count": 10
    },
    {
        "date": "2024-05-26 23:45:02",
        "count": 9
    },
    {
        "date": "2024-05-26 23:50:03",
        "count": 8
    },
    {
        "date": "2024-05-26 23:55:04",
        "count": 8
    },
    {
        "date": "2024-05-27 00:00:05",
        "count": 8
    },
    {
        "date": "2024-05-27 00:05:06",
        "count": 8
    },
    {
        "date": "2024-05-27 00:10:09",
        "count": 8
    },
    {
        "date": "2024-05-27 00:15:09",
        "count": 8
    },
    {
        "date": "2024-05-27 00:20:10",
        "count": 7
    },
    {
        "date": "2024-05-27 00:25:11",
        "count": 6
    },
    {
        "date": "2024-05-27 00:30:12",
        "count": 6
    },
    {
        "date": "2024-05-27 00:35:13",
        "count": 6
    },
    {
        "date": "2024-05-27 00:40:16",
        "count": 5
    },
    {
        "date": "2024-05-27 00:45:17",
        "count": 5
    },
    {
        "date": "2024-05-27 00:50:17",
        "count": 5
    },
    {
        "date": "2024-05-27 00:55:18",
        "count": 5
    },
    {
        "date": "2024-05-27 01:00:19",
        "count": 5
    },
    {
        "date": "2024-05-27 01:05:20",
        "count": 6
    },
    {
        "date": "2024-05-27 01:10:23",
        "count": 6
    },
    {
        "date": "2024-05-27 01:15:23",
        "count": 5
    },
    {
        "date": "2024-05-27 01:20:24",
        "count": 5
    },
    {
        "date": "2024-05-27 01:25:25",
        "count": 6
    },
    {
        "date": "2024-05-27 01:30:25",
        "count": 6
    },
    {
        "date": "2024-05-27 01:35:26",
        "count": 6
    },
    {
        "date": "2024-05-27 01:40:29",
        "count": 6
    },
    {
        "date": "2024-05-27 01:45:30",
        "count": 6
    },
    {
        "date": "2024-05-27 01:50:31",
        "count": 5
    },
    {
        "date": "2024-05-27 01:55:31",
        "count": 5
    },
    {
        "date": "2024-05-27 02:00:32",
        "count": 5
    },
    {
        "date": "2024-05-27 02:05:33",
        "count": 6
    },
    {
        "date": "2024-05-27 02:10:36",
        "count": 8
    },
    {
        "date": "2024-05-27 02:15:37",
        "count": 7
    },
    {
        "date": "2024-05-27 02:20:38",
        "count": 7
    },
    {
        "date": "2024-05-27 02:25:39",
        "count": 7
    },
    {
        "date": "2024-05-27 02:30:39",
        "count": 8
    },
    {
        "date": "2024-05-27 02:35:40",
        "count": 8
    },
    {
        "date": "2024-05-27 02:40:43",
        "count": 9
    },
    {
        "date": "2024-05-27 02:45:44",
        "count": 9
    },
    {
        "date": "2024-05-27 02:50:45",
        "count": 10
    },
    {
        "date": "2024-05-27 02:55:46",
        "count": 10
    },
    {
        "date": "2024-05-27 03:00:46",
        "count": 10
    },
    {
        "date": "2024-05-27 03:05:47",
        "count": 10
    },
    {
        "date": "2024-05-27 03:10:50",
        "count": 11
    },
    {
        "date": "2024-05-27 03:15:51",
        "count": 12
    },
    {
        "date": "2024-05-27 03:20:52",
        "count": 13
    },
    {
        "date": "2024-05-27 03:25:53",
        "count": 14
    },
    {
        "date": "2024-05-27 03:30:53",
        "count": 17
    },
    {
        "date": "2024-05-27 03:35:54",
        "count": 21
    },
    {
        "date": "2024-05-27 03:40:57",
        "count": 21
    },
    {
        "date": "2024-05-27 03:45:58",
        "count": 23
    },
    {
        "date": "2024-05-27 03:50:59",
        "count": 23
    },
    {
        "date": "2024-05-27 03:55:59",
        "count": 23
    },
    {
        "date": "2024-05-27 04:01:00",
        "count": 26
    },
    {
        "date": "2024-05-27 04:06:01",
        "count": 26
    },
    {
        "date": "2024-05-27 04:11:04",
        "count": 30
    },
    {
        "date": "2024-05-27 04:16:04",
        "count": 30
    },
    {
        "date": "2024-05-27 04:21:06",
        "count": 28
    },
    {
        "date": "2024-05-27 04:26:06",
        "count": 28
    },
    {
        "date": "2024-05-27 04:31:07",
        "count": 28
    },
    {
        "date": "2024-05-27 04:36:08",
        "count": 30
    },
    {
        "date": "2024-05-27 04:41:11",
        "count": 29
    },
    {
        "date": "2024-05-27 04:46:12",
        "count": 28
    },
    {
        "date": "2024-05-27 04:51:13",
        "count": 33
    },
    {
        "date": "2024-05-27 04:56:13",
        "count": 35
    },
    {
        "date": "2024-05-27 05:01:14",
        "count": 38
    },
    {
        "date": "2024-05-27 05:06:15",
        "count": 38
    },
    {
        "date": "2024-05-27 05:11:18",
        "count": 45
    },
    {
        "date": "2024-05-27 05:16:19",
        "count": 48
    },
    {
        "date": "2024-05-27 05:21:20",
        "count": 47
    },
    {
        "date": "2024-05-27 05:26:21",
        "count": 49
    },
    {
        "date": "2024-05-27 05:31:21",
        "count": 47
    },
    {
        "date": "2024-05-27 05:36:22",
        "count": 46
    },
    {
        "date": "2024-05-27 05:41:25",
        "count": 49
    },
    {
        "date": "2024-05-27 05:46:26",
        "count": 54
    },
    {
        "date": "2024-05-27 05:51:27",
        "count": 53
    },
    {
        "date": "2024-05-27 05:56:27",
        "count": 54
    },
    {
        "date": "2024-05-27 06:01:28",
        "count": 55
    },
    {
        "date": "2024-05-27 06:06:29",
        "count": 56
    },
    {
        "date": "2024-05-27 06:11:32",
        "count": 53
    },
    {
        "date": "2024-05-27 06:16:32",
        "count": 54
    },
    {
        "date": "2024-05-27 06:21:33",
        "count": 50
    },
    {
        "date": "2024-05-27 06:26:34",
        "count": 50
    },
    {
        "date": "2024-05-27 06:31:35",
        "count": 52
    },
    {
        "date": "2024-05-27 06:36:36",
        "count": 51
    },
    {
        "date": "2024-05-27 06:41:39",
        "count": 52
    },
    {
        "date": "2024-05-27 06:46:39",
        "count": 53
    },
    {
        "date": "2024-05-27 06:51:40",
        "count": 56
    },
    {
        "date": "2024-05-27 06:56:41",
        "count": 55
    },
    {
        "date": "2024-05-27 07:01:42",
        "count": 57
    },
    {
        "date": "2024-05-27 07:06:43",
        "count": 57
    },
    {
        "date": "2024-05-27 07:11:46",
        "count": 51
    },
    {
        "date": "2024-05-27 07:16:46",
        "count": 53
    },
    {
        "date": "2024-05-27 07:21:47",
        "count": 51
    },
    {
        "date": "2024-05-27 07:26:48",
        "count": 54
    },
    {
        "date": "2024-05-27 07:31:50",
        "count": 57
    },
    {
        "date": "2024-05-27 07:36:51",
        "count": 58
    },
    {
        "date": "2024-05-27 07:41:54",
        "count": 58
    },
    {
        "date": "2024-05-27 07:46:55",
        "count": 58
    },
    {
        "date": "2024-05-27 07:51:56",
        "count": 56
    },
    {
        "date": "2024-05-27 07:56:56",
        "count": 54
    },
    {
        "date": "2024-05-27 08:01:57",
        "count": 58
    },
    {
        "date": "2024-05-27 08:06:58",
        "count": 53
    },
    {
        "date": "2024-05-27 08:12:01",
        "count": 51
    },
    {
        "date": "2024-05-27 08:17:02",
        "count": 50
    },
    {
        "date": "2024-05-27 08:22:03",
        "count": 46
    },
    {
        "date": "2024-05-27 08:27:04",
        "count": 49
    },
    {
        "date": "2024-05-27 08:32:05",
        "count": 48
    },
    {
        "date": "2024-05-27 08:37:05",
        "count": 46
    },
    {
        "date": "2024-05-27 08:42:09",
        "count": 48
    },
    {
        "date": "2024-05-27 08:47:10",
        "count": 45
    },
    {
        "date": "2024-05-27 08:52:11",
        "count": 49
    },
    {
        "date": "2024-05-27 08:57:12",
        "count": 55
    },
    {
        "date": "2024-05-27 09:02:13",
        "count": 52
    },
    {
        "date": "2024-05-27 09:07:14",
        "count": 49
    },
    {
        "date": "2024-05-27 09:12:18",
        "count": 48
    },
    {
        "date": "2024-05-27 09:17:19",
        "count": 49
    },
    {
        "date": "2024-05-27 09:22:21",
        "count": 47
    },
    {
        "date": "2024-05-27 09:27:22",
        "count": 51
    },
    {
        "date": "2024-05-27 09:32:23",
        "count": 56
    },
    {
        "date": "2024-05-27 09:37:24",
        "count": 57
    },
    {
        "date": "2024-05-27 09:42:28",
        "count": 56
    },
    {
        "date": "2024-05-27 09:47:29",
        "count": 57
    },
    {
        "date": "2024-05-27 09:52:30",
        "count": 54
    },
    {
        "date": "2024-05-27 09:57:31",
        "count": 54
    },
    {
        "date": "2024-05-27 10:02:32",
        "count": 57
    },
    {
        "date": "2024-05-27 10:07:33",
        "count": 55
    },
    {
        "date": "2024-05-27 10:12:37",
        "count": 55
    },
    {
        "date": "2024-05-27 10:17:38",
        "count": 58
    },
    {
        "date": "2024-05-27 10:22:40",
        "count": 59
    },
    {
        "date": "2024-05-27 10:27:41",
        "count": 56
    },
    {
        "date": "2024-05-27 10:32:41",
        "count": 57
    },
    {
        "date": "2024-05-27 10:37:42",
        "count": 55
    },
    {
        "date": "2024-05-27 10:42:46",
        "count": 54
    },
    {
        "date": "2024-05-27 10:47:47",
        "count": 53
    },
    {
        "date": "2024-05-27 10:52:49",
        "count": 53
    },
    {
        "date": "2024-05-27 10:57:50",
        "count": 52
    },
    {
        "date": "2024-05-27 11:02:51",
        "count": 51
    },
    {
        "date": "2024-05-27 11:07:52",
        "count": 52
    },
    {
        "date": "2024-05-27 11:12:56",
        "count": 52
    },
    {
        "date": "2024-05-27 11:17:57",
        "count": 55
    },
    {
        "date": "2024-05-27 11:22:58",
        "count": 54
    },
    {
        "date": "2024-05-27 11:27:59",
        "count": 51
    },
    {
        "date": "2024-05-27 11:33:00",
        "count": 56
    },
    {
        "date": "2024-05-27 11:38:02",
        "count": 53
    },
    {
        "date": "2024-05-27 11:43:05",
        "count": 53
    },
    {
        "date": "2024-05-27 11:48:06",
        "count": 54
    },
    {
        "date": "2024-05-27 11:53:07",
        "count": 55
    },
    {
        "date": "2024-05-27 11:58:08",
        "count": 60
    },
    {
        "date": "2024-05-27 12:03:09",
        "count": 61
    },
    {
        "date": "2024-05-27 12:08:10",
        "count": 69
    },
    {
        "date": "2024-05-27 12:13:15",
        "count": 74
    },
    {
        "date": "2024-05-27 12:18:16",
        "count": 73
    },
    {
        "date": "2024-05-27 12:23:17",
        "count": 77
    },
    {
        "date": "2024-05-27 12:28:18",
        "count": 79
    },
    {
        "date": "2024-05-27 12:33:19",
        "count": 75
    },
    {
        "date": "2024-05-27 12:38:20",
        "count": 80
    },
    {
        "date": "2024-05-27 12:43:24",
        "count": 82
    },
    {
        "date": "2024-05-27 12:48:25",
        "count": 87
    },
    {
        "date": "2024-05-27 12:53:25",
        "count": 78
    },
    {
        "date": "2024-05-27 12:58:27",
        "count": 85
    },
    {
        "date": "2024-05-27 13:03:28",
        "count": 83
    },
    {
        "date": "2024-05-27 13:08:29",
        "count": 81
    },
    {
        "date": "2024-05-27 13:13:32",
        "count": 82
    },
    {
        "date": "2024-05-27 13:18:33",
        "count": 79
    },
    {
        "date": "2024-05-27 13:23:34",
        "count": 84
    },
    {
        "date": "2024-05-27 13:28:36",
        "count": 83
    },
    {
        "date": "2024-05-27 13:33:37",
        "count": 84
    },
    {
        "date": "2024-05-27 13:38:38",
        "count": 80
    },
    {
        "date": "2024-05-27 13:43:42",
        "count": 82
    },
    {
        "date": "2024-05-27 13:48:43",
        "count": 82
    },
    {
        "date": "2024-05-27 13:53:44",
        "count": 86
    },
    {
        "date": "2024-05-27 13:58:45",
        "count": 90
    },
    {
        "date": "2024-05-27 14:03:46",
        "count": 92
    },
    {
        "date": "2024-05-27 14:08:47",
        "count": 94
    },
    {
        "date": "2024-05-27 14:13:51",
        "count": 94
    },
    {
        "date": "2024-05-27 14:18:52",
        "count": 99
    },
    {
        "date": "2024-05-27 14:23:53",
        "count": 107
    },
    {
        "date": "2024-05-27 14:28:54",
        "count": 111
    },
    {
        "date": "2024-05-27 14:33:55",
        "count": 111
    },
    {
        "date": "2024-05-27 14:38:56",
        "count": 120
    },
    {
        "date": "2024-05-27 14:43:59",
        "count": 119
    },
    {
        "date": "2024-05-27 14:49:01",
        "count": 116
    },
    {
        "date": "2024-05-27 14:54:02",
        "count": 114
    },
    {
        "date": "2024-05-27 14:59:03",
        "count": 117
    },
    {
        "date": "2024-05-27 15:04:04",
        "count": 119
    },
    {
        "date": "2024-05-27 15:09:05",
        "count": 127
    },
    {
        "date": "2024-05-27 15:14:09",
        "count": 131
    },
    {
        "date": "2024-05-27 15:19:10",
        "count": 144
    },
    {
        "date": "2024-05-27 15:24:12",
        "count": 159
    },
    {
        "date": "2024-05-27 15:29:13",
        "count": 166
    },
    {
        "date": "2024-05-27 15:34:15",
        "count": 174
    },
    {
        "date": "2024-05-27 15:39:16",
        "count": 175
    },
    {
        "date": "2024-05-27 15:44:20",
        "count": 180
    },
    {
        "date": "2024-05-27 15:49:21",
        "count": 187
    },
    {
        "date": "2024-05-27 15:54:22",
        "count": 193
    },
    {
        "date": "2024-05-27 15:59:24",
        "count": 196
    },
    {
        "date": "2024-05-27 16:04:24",
        "count": 198
    },
    {
        "date": "2024-05-27 16:09:26",
        "count": 203
    },
    {
        "date": "2024-05-27 16:14:29",
        "count": 198
    },
    {
        "date": "2024-05-27 16:19:30",
        "count": 204
    },
    {
        "date": "2024-05-27 16:24:32",
        "count": 212
    },
    {
        "date": "2024-05-27 16:29:33",
        "count": 212
    },
    {
        "date": "2024-05-27 16:34:34",
        "count": 209
    },
    {
        "date": "2024-05-27 16:39:35",
        "count": 198
    },
    {
        "date": "2024-05-27 16:44:39",
        "count": 196
    },
    {
        "date": "2024-05-27 16:49:40",
        "count": 205
    },
    {
        "date": "2024-05-27 16:54:42",
        "count": 216
    },
    {
        "date": "2024-05-27 16:59:43",
        "count": 224
    },
    {
        "date": "2024-05-27 17:04:44",
        "count": 212
    },
    {
        "date": "2024-05-27 17:09:45",
        "count": 208
    },
    {
        "date": "2024-05-27 17:14:49",
        "count": 202
    },
    {
        "date": "2024-05-27 17:19:50",
        "count": 201
    },
    {
        "date": "2024-05-27 17:24:51",
        "count": 202
    },
    {
        "date": "2024-05-27 17:29:52",
        "count": 204
    },
    {
        "date": "2024-05-27 17:34:53",
        "count": 205
    },
    {
        "date": "2024-05-27 17:39:55",
        "count": 209
    },
    {
        "date": "2024-05-27 17:44:58",
        "count": 213
    },
    {
        "date": "2024-05-27 17:50:00",
        "count": 226
    },
    {
        "date": "2024-05-27 17:55:01",
        "count": 232
    },
    {
        "date": "2024-05-27 18:00:03",
        "count": 240
    },
    {
        "date": "2024-05-27 18:05:04",
        "count": 231
    },
    {
        "date": "2024-05-27 18:10:05",
        "count": 228
    },
    {
        "date": "2024-05-27 18:15:09",
        "count": 217
    },
    {
        "date": "2024-05-27 18:20:10",
        "count": 212
    },
    {
        "date": "2024-05-27 18:25:12",
        "count": 199
    },
    {
        "date": "2024-05-27 18:30:13",
        "count": 192
    },
    {
        "date": "2024-05-27 18:35:15",
        "count": 195
    },
    {
        "date": "2024-05-27 18:40:16",
        "count": 189
    },
    {
        "date": "2024-05-27 18:45:20",
        "count": 188
    },
    {
        "date": "2024-05-27 18:50:21",
        "count": 193
    },
    {
        "date": "2024-05-27 18:55:22",
        "count": 192
    },
    {
        "date": "2024-05-27 19:00:23",
        "count": 187
    },
    {
        "date": "2024-05-27 19:05:24",
        "count": 171
    },
    {
        "date": "2024-05-27 19:10:25",
        "count": 156
    },
    {
        "date": "2024-05-27 19:15:29",
        "count": 150
    },
    {
        "date": "2024-05-27 19:20:30",
        "count": 149
    },
    {
        "date": "2024-05-27 19:25:31",
        "count": 144
    },
    {
        "date": "2024-05-27 19:30:32",
        "count": 136
    },
    {
        "date": "2024-05-27 19:35:33",
        "count": 132
    },
    {
        "date": "2024-05-27 19:40:34",
        "count": 133
    },
    {
        "date": "2024-05-27 19:45:38",
        "count": 134
    },
    {
        "date": "2024-05-27 19:50:39",
        "count": 131
    },
    {
        "date": "2024-05-27 19:55:40",
        "count": 123
    },
    {
        "date": "2024-05-27 20:00:41",
        "count": 120
    },
    {
        "date": "2024-05-27 20:05:42",
        "count": 121
    },
    {
        "date": "2024-05-27 20:10:43",
        "count": 125
    },
    {
        "date": "2024-05-27 20:15:47",
        "count": 125
    },
    {
        "date": "2024-05-27 20:20:48",
        "count": 115
    },
    {
        "date": "2024-05-27 20:25:49",
        "count": 110
    },
    {
        "date": "2024-05-27 20:30:50",
        "count": 103
    },
    {
        "date": "2024-05-27 20:35:51",
        "count": 95
    },
    {
        "date": "2024-05-27 20:40:52",
        "count": 83
    },
    {
        "date": "2024-05-27 20:45:56",
        "count": 77
    },
    {
        "date": "2024-05-27 20:50:56",
        "count": 70
    },
    {
        "date": "2024-05-27 20:55:58",
        "count": 64
    },
    {
        "date": "2024-05-27 21:00:58",
        "count": 58
    },
    {
        "date": "2024-05-27 21:05:59",
        "count": 54
    },
    {
        "date": "2024-05-27 21:11:00",
        "count": 53
    },
    {
        "date": "2024-05-27 21:16:04",
        "count": 49
    },
    {
        "date": "2024-05-27 21:21:05",
        "count": 43
    },
    {
        "date": "2024-05-27 21:26:06",
        "count": 39
    },
    {
        "date": "2024-05-27 21:31:07",
        "count": 35
    },
    {
        "date": "2024-05-27 21:36:08",
        "count": 31
    },
    {
        "date": "2024-05-27 21:41:09",
        "count": 31
    },
    {
        "date": "2024-05-27 21:46:12",
        "count": 30
    },
    {
        "date": "2024-05-27 21:51:13",
        "count": 26
    },
    {
        "date": "2024-05-27 21:56:13",
        "count": 25
    },
    {
        "date": "2024-05-27 22:01:14",
        "count": 24
    },
    {
        "date": "2024-05-27 22:06:15",
        "count": 16
    },
    {
        "date": "2024-05-27 22:11:15",
        "count": 15
    },
    {
        "date": "2024-05-27 22:16:18",
        "count": 15
    },
    {
        "date": "2024-05-27 22:21:19",
        "count": 14
    },
    {
        "date": "2024-05-27 22:26:20",
        "count": 14
    },
    {
        "date": "2024-05-27 22:31:21",
        "count": 14
    },
    {
        "date": "2024-05-27 22:36:22",
        "count": 12
    },
    {
        "date": "2024-05-27 22:41:22",
        "count": 10
    },
    {
        "date": "2024-05-27 22:46:25",
        "count": 11
    },
    {
        "date": "2024-05-27 22:51:26",
        "count": 7
    },
    {
        "date": "2024-05-27 22:56:27",
        "count": 6
    },
    {
        "date": "2024-05-27 23:01:28",
        "count": 5
    },
    {
        "date": "2024-05-27 23:06:29",
        "count": 5
    },
    {
        "date": "2024-05-27 23:11:30",
        "count": 5
    },
    {
        "date": "2024-05-27 23:16:33",
        "count": 5
    },
    {
        "date": "2024-05-27 23:21:34",
        "count": 5
    },
    {
        "date": "2024-05-27 23:26:35",
        "count": 5
    },
    {
        "date": "2024-05-27 23:31:36",
        "count": 5
    },
    {
        "date": "2024-05-27 23:36:36",
        "count": 5
    },
    {
        "date": "2024-05-27 23:41:37",
        "count": 5
    },
    {
        "date": "2024-05-27 23:46:40",
        "count": 4
    },
    {
        "date": "2024-05-27 23:51:41",
        "count": 4
    },
    {
        "date": "2024-05-27 23:56:42",
        "count": 4
    },
    {
        "date": "2024-05-28 00:01:42",
        "count": 3
    },
    {
        "date": "2024-05-28 00:06:43",
        "count": 3
    },
    {
        "date": "2024-05-28 00:11:45",
        "count": 3
    },
    {
        "date": "2024-05-28 00:16:48",
        "count": 3
    },
    {
        "date": "2024-05-28 00:21:49",
        "count": 3
    },
    {
        "date": "2024-05-28 00:26:50",
        "count": 3
    },
    {
        "date": "2024-05-28 00:31:51",
        "count": 3
    },
    {
        "date": "2024-05-28 00:36:52",
        "count": 3
    },
    {
        "date": "2024-05-28 00:41:53",
        "count": 3
    },
    {
        "date": "2024-05-28 00:46:56",
        "count": 3
    },
    {
        "date": "2024-05-28 00:51:57",
        "count": 3
    },
    {
        "date": "2024-05-28 00:56:58",
        "count": 3
    },
    {
        "date": "2024-05-28 01:01:58",
        "count": 3
    },
    {
        "date": "2024-05-28 01:06:59",
        "count": 3
    },
    {
        "date": "2024-05-28 01:12:00",
        "count": 3
    },
    {
        "date": "2024-05-28 01:17:03",
        "count": 4
    },
    {
        "date": "2024-05-28 01:22:04",
        "count": 4
    },
    {
        "date": "2024-05-28 01:27:04",
        "count": 4
    },
    {
        "date": "2024-05-28 01:32:05",
        "count": 5
    },
    {
        "date": "2024-05-28 01:37:06",
        "count": 5
    },
    {
        "date": "2024-05-28 01:42:07",
        "count": 5
    },
    {
        "date": "2024-05-28 01:47:10",
        "count": 5
    },
    {
        "date": "2024-05-28 01:52:11",
        "count": 7
    },
    {
        "date": "2024-05-28 01:57:12",
        "count": 7
    },
    {
        "date": "2024-05-28 02:02:12",
        "count": 7
    },
    {
        "date": "2024-05-28 02:07:13",
        "count": 8
    },
    {
        "date": "2024-05-28 02:12:14",
        "count": 8
    },
    {
        "date": "2024-05-28 02:17:17",
        "count": 8
    },
    {
        "date": "2024-05-28 02:22:18",
        "count": 10
    },
    {
        "date": "2024-05-28 02:27:19",
        "count": 10
    },
    {
        "date": "2024-05-28 02:32:20",
        "count": 12
    },
    {
        "date": "2024-05-28 02:37:21",
        "count": 12
    },
    {
        "date": "2024-05-28 02:42:21",
        "count": 12
    },
    {
        "date": "2024-05-28 02:47:25",
        "count": 13
    },
    {
        "date": "2024-05-28 02:52:25",
        "count": 13
    },
    {
        "date": "2024-05-28 02:57:26",
        "count": 14
    },
    {
        "date": "2024-05-28 03:02:27",
        "count": 14
    },
    {
        "date": "2024-05-28 03:07:28",
        "count": 17
    },
    {
        "date": "2024-05-28 03:12:28",
        "count": 18
    },
    {
        "date": "2024-05-28 03:17:31",
        "count": 18
    },
    {
        "date": "2024-05-28 03:22:32",
        "count": 21
    },
    {
        "date": "2024-05-28 03:27:33",
        "count": 22
    },
    {
        "date": "2024-05-28 03:32:34",
        "count": 27
    },
    {
        "date": "2024-05-28 03:37:35",
        "count": 26
    },
    {
        "date": "2024-05-28 03:42:35",
        "count": 27
    },
    {
        "date": "2024-05-28 03:47:39",
        "count": 28
    },
    {
        "date": "2024-05-28 03:52:39",
        "count": 30
    },
    {
        "date": "2024-05-28 03:57:40",
        "count": 32
    },
    {
        "date": "2024-05-28 04:02:41",
        "count": 31
    },
    {
        "date": "2024-05-28 04:07:42",
        "count": 33
    },
    {
        "date": "2024-05-28 04:12:42",
        "count": 39
    },
    {
        "date": "2024-05-28 04:17:46",
        "count": 40
    },
    {
        "date": "2024-05-28 04:22:47",
        "count": 43
    },
    {
        "date": "2024-05-28 04:27:48",
        "count": 46
    },
    {
        "date": "2024-05-28 04:32:48",
        "count": 48
    },
    {
        "date": "2024-05-28 04:37:49",
        "count": 52
    },
    {
        "date": "2024-05-28 04:42:50",
        "count": 54
    },
    {
        "date": "2024-05-28 04:47:53",
        "count": 55
    },
    {
        "date": "2024-05-28 04:52:54",
        "count": 56
    },
    {
        "date": "2024-05-28 04:57:56",
        "count": 64
    },
    {
        "date": "2024-05-28 05:02:56",
        "count": 63
    },
    {
        "date": "2024-05-28 05:07:57",
        "count": 66
    },
    {
        "date": "2024-05-28 05:12:58",
        "count": 67
    },
    {
        "date": "2024-05-28 05:18:01",
        "count": 68
    },
    {
        "date": "2024-05-28 05:23:02",
        "count": 72
    },
    {
        "date": "2024-05-28 05:28:03",
        "count": 70
    },
    {
        "date": "2024-05-28 05:33:04",
        "count": 74
    },
    {
        "date": "2024-05-28 05:38:04",
        "count": 81
    },
    {
        "date": "2024-05-28 05:43:05",
        "count": 80
    },
    {
        "date": "2024-05-28 05:48:08",
        "count": 77
    },
    {
        "date": "2024-05-28 05:53:09",
        "count": 75
    },
    {
        "date": "2024-05-28 05:58:10",
        "count": 74
    },
    {
        "date": "2024-05-28 06:03:10",
        "count": 71
    },
    {
        "date": "2024-05-28 06:08:11",
        "count": 59
    },
    {
        "date": "2024-05-28 06:13:12",
        "count": 56
    },
    {
        "date": "2024-05-28 06:18:15",
        "count": 57
    },
    {
        "date": "2024-05-28 06:23:16",
        "count": 55
    },
    {
        "date": "2024-05-28 06:28:17",
        "count": 51
    },
    {
        "date": "2024-05-28 06:33:17",
        "count": 47
    },
    {
        "date": "2024-05-28 06:38:18",
        "count": 46
    },
    {
        "date": "2024-05-28 06:43:19",
        "count": 46
    },
    {
        "date": "2024-05-28 06:48:22",
        "count": 47
    },
    {
        "date": "2024-05-28 06:53:23",
        "count": 47
    },
    {
        "date": "2024-05-28 06:58:25",
        "count": 46
    },
    {
        "date": "2024-05-28 07:03:25",
        "count": 44
    },
    {
        "date": "2024-05-28 07:08:26",
        "count": 38
    },
    {
        "date": "2024-05-28 07:13:27",
        "count": 38
    },
    {
        "date": "2024-05-28 07:18:30",
        "count": 39
    },
    {
        "date": "2024-05-28 07:23:31",
        "count": 40
    },
    {
        "date": "2024-05-28 07:28:33",
        "count": 40
    },
    {
        "date": "2024-05-28 07:33:34",
        "count": 44
    },
    {
        "date": "2024-05-28 07:38:36",
        "count": 44
    },
    {
        "date": "2024-05-28 07:43:37",
        "count": 46
    },
    {
        "date": "2024-05-28 07:48:41",
        "count": 46
    },
    {
        "date": "2024-05-28 07:53:42",
        "count": 47
    },
    {
        "date": "2024-05-28 07:58:43",
        "count": 49
    },
    {
        "date": "2024-05-28 08:03:44",
        "count": 50
    },
    {
        "date": "2024-05-28 08:08:46",
        "count": 48
    },
    {
        "date": "2024-05-28 08:13:47",
        "count": 45
    },
    {
        "date": "2024-05-28 08:18:51",
        "count": 43
    },
    {
        "date": "2024-05-28 08:23:52",
        "count": 41
    },
    {
        "date": "2024-05-28 08:28:53",
        "count": 39
    },
    {
        "date": "2024-05-28 08:33:54",
        "count": 36
    },
    {
        "date": "2024-05-28 08:38:55",
        "count": 40
    },
    {
        "date": "2024-05-28 08:43:56",
        "count": 39
    },
    {
        "date": "2024-05-28 08:49:01",
        "count": 41
    },
    {
        "date": "2024-05-28 08:54:02",
        "count": 39
    },
    {
        "date": "2024-05-28 08:59:03",
        "count": 43
    },
    {
        "date": "2024-05-28 09:04:04",
        "count": 39
    },
    {
        "date": "2024-05-28 09:09:05",
        "count": 42
    },
    {
        "date": "2024-05-28 09:14:06",
        "count": 42
    },
    {
        "date": "2024-05-28 09:19:10",
        "count": 41
    },
    {
        "date": "2024-05-28 09:24:11",
        "count": 44
    },
    {
        "date": "2024-05-28 09:29:12",
        "count": 45
    },
    {
        "date": "2024-05-28 09:34:13",
        "count": 49
    },
    {
        "date": "2024-05-28 09:39:14",
        "count": 51
    },
    {
        "date": "2024-05-28 09:44:15",
        "count": 53
    },
    {
        "date": "2024-05-28 09:49:19",
        "count": 54
    },
    {
        "date": "2024-05-28 09:54:20",
        "count": 61
    },
    {
        "date": "2024-05-28 09:59:21",
        "count": 63
    },
    {
        "date": "2024-05-28 10:04:22",
        "count": 65
    },
    {
        "date": "2024-05-28 10:09:23",
        "count": 63
    },
    {
        "date": "2024-05-28 10:14:24",
        "count": 66
    },
    {
        "date": "2024-05-28 10:19:27",
        "count": 67
    },
    {
        "date": "2024-05-28 10:24:28",
        "count": 67
    },
    {
        "date": "2024-05-28 10:29:29",
        "count": 70
    },
    {
        "date": "2024-05-28 10:34:30",
        "count": 75
    },
    {
        "date": "2024-05-28 10:39:31",
        "count": 77
    },
    {
        "date": "2024-05-28 10:44:33",
        "count": 81
    },
    {
        "date": "2024-05-28 10:49:36",
        "count": 79
    },
    {
        "date": "2024-05-28 10:54:38",
        "count": 75
    },
    {
        "date": "2024-05-28 10:59:39",
        "count": 76
    },
    {
        "date": "2024-05-28 11:04:39",
        "count": 71
    },
    {
        "date": "2024-05-28 11:09:41",
        "count": 67
    },
    {
        "date": "2024-05-28 11:14:41",
        "count": 63
    },
    {
        "date": "2024-05-28 11:19:45",
        "count": 62
    },
    {
        "date": "2024-05-28 11:24:46",
        "count": 65
    },
    {
        "date": "2024-05-28 11:29:48",
        "count": 64
    },
    {
        "date": "2024-05-28 11:34:51",
        "count": 64
    },
    {
        "date": "2024-05-28 11:39:52",
        "count": 64
    },
    {
        "date": "2024-05-28 11:44:53",
        "count": 62
    },
    {
        "date": "2024-05-28 11:49:57",
        "count": 60
    },
    {
        "date": "2024-05-28 11:54:58",
        "count": 61
    },
    {
        "date": "2024-05-28 11:59:59",
        "count": 61
    },
    {
        "date": "2024-05-28 12:05:00",
        "count": 57
    },
    {
        "date": "2024-05-28 12:10:02",
        "count": 57
    },
    {
        "date": "2024-05-28 12:15:03",
        "count": 54
    },
    {
        "date": "2024-05-28 12:20:06",
        "count": 54
    },
    {
        "date": "2024-05-28 12:25:07",
        "count": 56
    },
    {
        "date": "2024-05-28 12:30:08",
        "count": 60
    },
    {
        "date": "2024-05-28 12:35:09",
        "count": 61
    },
    {
        "date": "2024-05-28 12:40:10",
        "count": 59
    },
    {
        "date": "2024-05-28 12:45:11",
        "count": 62
    },
    {
        "date": "2024-05-28 12:50:15",
        "count": 64
    },
    {
        "date": "2024-05-28 12:55:16",
        "count": 64
    },
    {
        "date": "2024-05-28 13:00:18",
        "count": 65
    },
    {
        "date": "2024-05-28 13:05:19",
        "count": 67
    },
    {
        "date": "2024-05-28 13:10:20",
        "count": 70
    },
    {
        "date": "2024-05-28 13:15:21",
        "count": 76
    },
    {
        "date": "2024-05-28 13:20:25",
        "count": 76
    },
    {
        "date": "2024-05-28 13:25:25",
        "count": 78
    },
    {
        "date": "2024-05-28 13:30:26",
        "count": 77
    },
    {
        "date": "2024-05-28 13:35:28",
        "count": 82
    },
    {
        "date": "2024-05-28 13:40:29",
        "count": 84
    },
    {
        "date": "2024-05-28 13:45:31",
        "count": 85
    },
    {
        "date": "2024-05-28 13:50:34",
        "count": 89
    },
    {
        "date": "2024-05-28 13:55:35",
        "count": 89
    },
    {
        "date": "2024-05-28 14:00:36",
        "count": 87
    },
    {
        "date": "2024-05-28 14:05:37",
        "count": 88
    },
    {
        "date": "2024-05-28 14:10:39",
        "count": 88
    },
    {
        "date": "2024-05-28 14:15:40",
        "count": 91
    },
    {
        "date": "2024-05-28 14:20:44",
        "count": 94
    },
    {
        "date": "2024-05-28 14:25:45",
        "count": 98
    },
    {
        "date": "2024-05-28 14:30:46",
        "count": 101
    },
    {
        "date": "2024-05-28 14:35:47",
        "count": 105
    },
    {
        "date": "2024-05-28 14:40:48",
        "count": 104
    },
    {
        "date": "2024-05-28 14:45:49",
        "count": 106
    },
    {
        "date": "2024-05-28 14:50:53",
        "count": 114
    },
    {
        "date": "2024-05-28 14:55:54",
        "count": 122
    },
    {
        "date": "2024-05-28 15:00:56",
        "count": 120
    },
    {
        "date": "2024-05-28 15:05:57",
        "count": 123
    },
    {
        "date": "2024-05-28 15:10:58",
        "count": 127
    },
    {
        "date": "2024-05-28 15:15:59",
        "count": 130
    },
    {
        "date": "2024-05-28 15:21:03",
        "count": 135
    },
    {
        "date": "2024-05-28 15:26:04",
        "count": 140
    },
    {
        "date": "2024-05-28 15:31:05",
        "count": 147
    },
    {
        "date": "2024-05-28 15:36:06",
        "count": 158
    },
    {
        "date": "2024-05-28 15:41:07",
        "count": 169
    },
    {
        "date": "2024-05-28 15:46:09",
        "count": 178
    },
    {
        "date": "2024-05-28 15:51:13",
        "count": 180
    },
    {
        "date": "2024-05-28 15:56:14",
        "count": 177
    },
    {
        "date": "2024-05-28 16:01:15",
        "count": 185
    },
    {
        "date": "2024-05-28 16:06:16",
        "count": 189
    },
    {
        "date": "2024-05-28 16:11:17",
        "count": 192
    },
    {
        "date": "2024-05-28 16:16:18",
        "count": 194
    },
    {
        "date": "2024-05-28 16:21:23",
        "count": 191
    },
    {
        "date": "2024-05-28 16:26:24",
        "count": 196
    },
    {
        "date": "2024-05-28 16:31:25",
        "count": 206
    },
    {
        "date": "2024-05-28 16:36:26",
        "count": 204
    },
    {
        "date": "2024-05-28 16:41:27",
        "count": 200
    },
    {
        "date": "2024-05-28 16:46:28",
        "count": 195
    },
    {
        "date": "2024-05-28 16:51:32",
        "count": 193
    },
    {
        "date": "2024-05-28 16:56:33",
        "count": 183
    },
    {
        "date": "2024-05-28 17:01:34",
        "count": 182
    },
    {
        "date": "2024-05-28 17:06:35",
        "count": 186
    },
    {
        "date": "2024-05-28 17:11:36",
        "count": 184
    },
    {
        "date": "2024-05-28 17:16:37",
        "count": 187
    },
    {
        "date": "2024-05-28 17:21:41",
        "count": 196
    },
    {
        "date": "2024-05-28 17:26:42",
        "count": 190
    },
    {
        "date": "2024-05-28 17:31:43",
        "count": 183
    },
    {
        "date": "2024-05-28 17:36:44",
        "count": 179
    },
    {
        "date": "2024-05-28 17:41:45",
        "count": 182
    },
    {
        "date": "2024-05-28 17:46:46",
        "count": 180
    },
    {
        "date": "2024-05-28 17:51:50",
        "count": 175
    },
    {
        "date": "2024-05-28 17:56:51",
        "count": 173
    },
    {
        "date": "2024-05-28 18:01:52",
        "count": 176
    },
    {
        "date": "2024-05-28 18:06:53",
        "count": 174
    },
    {
        "date": "2024-05-28 18:11:54",
        "count": 169
    },
    {
        "date": "2024-05-28 18:16:55",
        "count": 172
    },
    {
        "date": "2024-05-28 18:21:59",
        "count": 171
    },
    {
        "date": "2024-05-28 18:27:01",
        "count": 179
    },
    {
        "date": "2024-05-28 18:32:02",
        "count": 182
    },
    {
        "date": "2024-05-28 18:37:03",
        "count": 174
    },
    {
        "date": "2024-05-28 18:42:04",
        "count": 174
    },
    {
        "date": "2024-05-28 18:47:05",
        "count": 163
    },
    {
        "date": "2024-05-28 18:52:09",
        "count": 163
    },
    {
        "date": "2024-05-28 18:57:10",
        "count": 161
    },
    {
        "date": "2024-05-28 19:02:12",
        "count": 159
    },
    {
        "date": "2024-05-28 19:07:13",
        "count": 154
    },
    {
        "date": "2024-05-28 19:12:15",
        "count": 151
    },
    {
        "date": "2024-05-28 19:17:16",
        "count": 149
    },
    {
        "date": "2024-05-28 19:22:20",
        "count": 150
    },
    {
        "date": "2024-05-28 19:27:21",
        "count": 144
    },
    {
        "date": "2024-05-28 19:32:22",
        "count": 137
    },
    {
        "date": "2024-05-28 19:37:23",
        "count": 140
    },
    {
        "date": "2024-05-28 19:42:26",
        "count": 141
    },
    {
        "date": "2024-05-28 19:47:27",
        "count": 144
    },
    {
        "date": "2024-05-28 19:52:30",
        "count": 135
    },
    {
        "date": "2024-05-28 19:57:31",
        "count": 130
    },
    {
        "date": "2024-05-28 20:02:32",
        "count": 129
    },
    {
        "date": "2024-05-28 20:07:33",
        "count": 129
    },
    {
        "date": "2024-05-28 20:12:34",
        "count": 126
    },
    {
        "date": "2024-05-28 20:17:35",
        "count": 123
    },
    {
        "date": "2024-05-28 20:22:39",
        "count": 110
    },
    {
        "date": "2024-05-28 20:27:40",
        "count": 105
    },
    {
        "date": "2024-05-28 20:32:41",
        "count": 102
    },
    {
        "date": "2024-05-28 20:37:42",
        "count": 98
    },
    {
        "date": "2024-05-28 20:42:43",
        "count": 95
    },
    {
        "date": "2024-05-28 20:47:44",
        "count": 89
    },
    {
        "date": "2024-05-28 20:52:48",
        "count": 84
    },
    {
        "date": "2024-05-28 20:57:49",
        "count": 78
    },
    {
        "date": "2024-05-28 21:02:50",
        "count": 76
    },
    {
        "date": "2024-05-28 21:07:50",
        "count": 69
    },
    {
        "date": "2024-05-28 21:12:51",
        "count": 59
    },
    {
        "date": "2024-05-28 21:17:52",
        "count": 55
    },
    {
        "date": "2024-05-28 21:22:56",
        "count": 51
    },
    {
        "date": "2024-05-28 21:27:56",
        "count": 51
    },
    {
        "date": "2024-05-28 21:32:57",
        "count": 47
    },
    {
        "date": "2024-05-28 21:37:58",
        "count": 45
    },
    {
        "date": "2024-05-28 21:42:58",
        "count": 44
    },
    {
        "date": "2024-05-28 21:47:59",
        "count": 44
    },
    {
        "date": "2024-05-28 21:53:03",
        "count": 40
    },
    {
        "date": "2024-05-28 21:58:04",
        "count": 35
    },
    {
        "date": "2024-05-28 22:03:05",
        "count": 32
    },
    {
        "date": "2024-05-28 22:08:06",
        "count": 29
    },
    {
        "date": "2024-05-28 22:13:06",
        "count": 28
    },
    {
        "date": "2024-05-28 22:18:07",
        "count": 25
    },
    {
        "date": "2024-05-28 22:23:10",
        "count": 25
    },
    {
        "date": "2024-05-28 22:28:11",
        "count": 19
    },
    {
        "date": "2024-05-28 22:33:11",
        "count": 19
    },
    {
        "date": "2024-05-28 22:38:12",
        "count": 19
    },
    {
        "date": "2024-05-28 22:43:13",
        "count": 18
    },
    {
        "date": "2024-05-28 22:48:14",
        "count": 16
    },
    {
        "date": "2024-05-28 22:53:17",
        "count": 13
    },
    {
        "date": "2024-05-28 22:58:17",
        "count": 12
    },
    {
        "date": "2024-05-28 23:03:18",
        "count": 12
    },
    {
        "date": "2024-05-28 23:08:19",
        "count": 12
    },
    {
        "date": "2024-05-28 23:13:20",
        "count": 12
    },
    {
        "date": "2024-05-28 23:18:20",
        "count": 11
    },
    {
        "date": "2024-05-28 23:23:24",
        "count": 11
    },
    {
        "date": "2024-05-28 23:28:24",
        "count": 11
    },
    {
        "date": "2024-05-28 23:33:25",
        "count": 11
    },
    {
        "date": "2024-05-28 23:38:26",
        "count": 11
    },
    {
        "date": "2024-05-28 23:43:27",
        "count": 11
    },
    {
        "date": "2024-05-28 23:48:27",
        "count": 12
    },
    {
        "date": "2024-05-28 23:53:30",
        "count": 11
    },
    {
        "date": "2024-05-28 23:58:31",
        "count": 9
    },
    {
        "date": "2024-05-29 00:03:32",
        "count": 9
    },
    {
        "date": "2024-05-29 00:08:33",
        "count": 9
    },
    {
        "date": "2024-05-29 00:13:33",
        "count": 7
    },
    {
        "date": "2024-05-29 00:18:34",
        "count": 7
    },
    {
        "date": "2024-05-29 00:23:37",
        "count": 7
    },
    {
        "date": "2024-05-29 00:28:38",
        "count": 7
    },
    {
        "date": "2024-05-29 00:33:38",
        "count": 6
    },
    {
        "date": "2024-05-29 00:38:39",
        "count": 6
    },
    {
        "date": "2024-05-29 00:43:40",
        "count": 6
    },
    {
        "date": "2024-05-29 00:48:41",
        "count": 6
    },
    {
        "date": "2024-05-29 00:53:44",
        "count": 6
    },
    {
        "date": "2024-05-29 00:58:45",
        "count": 6
    },
    {
        "date": "2024-05-29 01:03:46",
        "count": 5
    },
    {
        "date": "2024-05-29 01:08:47",
        "count": 5
    },
    {
        "date": "2024-05-29 01:13:47",
        "count": 5
    },
    {
        "date": "2024-05-29 01:18:48",
        "count": 6
    },
    {
        "date": "2024-05-29 01:23:51",
        "count": 6
    },
    {
        "date": "2024-05-29 01:28:52",
        "count": 6
    },
    {
        "date": "2024-05-29 01:33:52",
        "count": 7
    },
    {
        "date": "2024-05-29 01:38:53",
        "count": 7
    },
    {
        "date": "2024-05-29 01:43:54",
        "count": 7
    },
    {
        "date": "2024-05-29 01:48:55",
        "count": 7
    },
    {
        "date": "2024-05-29 01:53:57",
        "count": 8
    },
    {
        "date": "2024-05-29 01:58:58",
        "count": 9
    },
    {
        "date": "2024-05-29 02:03:59",
        "count": 11
    },
    {
        "date": "2024-05-29 02:08:59",
        "count": 13
    },
    {
        "date": "2024-05-29 02:14:00",
        "count": 13
    },
    {
        "date": "2024-05-29 02:19:01",
        "count": 13
    },
    {
        "date": "2024-05-29 02:24:04",
        "count": 12
    },
    {
        "date": "2024-05-29 02:29:05",
        "count": 12
    },
    {
        "date": "2024-05-29 02:34:06",
        "count": 12
    },
    {
        "date": "2024-05-29 02:39:07",
        "count": 14
    },
    {
        "date": "2024-05-29 02:44:07",
        "count": 14
    },
    {
        "date": "2024-05-29 02:49:08",
        "count": 14
    },
    {
        "date": "2024-05-29 02:54:11",
        "count": 14
    },
    {
        "date": "2024-05-29 02:59:12",
        "count": 14
    },
    {
        "date": "2024-05-29 03:04:13",
        "count": 12
    },
    {
        "date": "2024-05-29 03:09:13",
        "count": 12
    },
    {
        "date": "2024-05-29 03:14:14",
        "count": 12
    },
    {
        "date": "2024-05-29 03:19:15",
        "count": 13
    },
    {
        "date": "2024-05-29 03:24:18",
        "count": 12
    },
    {
        "date": "2024-05-29 03:29:19",
        "count": 14
    },
    {
        "date": "2024-05-29 03:34:20",
        "count": 17
    },
    {
        "date": "2024-05-29 03:39:20",
        "count": 17
    },
    {
        "date": "2024-05-29 03:44:21",
        "count": 18
    },
    {
        "date": "2024-05-29 03:49:22",
        "count": 19
    },
    {
        "date": "2024-05-29 03:54:25",
        "count": 19
    },
    {
        "date": "2024-05-29 03:59:26",
        "count": 20
    },
    {
        "date": "2024-05-29 04:04:26",
        "count": 22
    },
    {
        "date": "2024-05-29 04:09:27",
        "count": 22
    },
    {
        "date": "2024-05-29 04:14:28",
        "count": 22
    },
    {
        "date": "2024-05-29 04:19:29",
        "count": 22
    },
    {
        "date": "2024-05-29 04:24:32",
        "count": 24
    },
    {
        "date": "2024-05-29 04:29:33",
        "count": 26
    },
    {
        "date": "2024-05-29 04:34:33",
        "count": 27
    },
    {
        "date": "2024-05-29 04:39:34",
        "count": 28
    },
    {
        "date": "2024-05-29 04:44:35",
        "count": 31
    },
    {
        "date": "2024-05-29 04:49:36",
        "count": 34
    },
    {
        "date": "2024-05-29 04:54:39",
        "count": 37
    },
    {
        "date": "2024-05-29 04:59:39",
        "count": 42
    },
    {
        "date": "2024-05-29 05:04:40",
        "count": 46
    },
    {
        "date": "2024-05-29 05:09:41",
        "count": 48
    },
    {
        "date": "2024-05-29 05:14:42",
        "count": 49
    },
    {
        "date": "2024-05-29 05:19:42",
        "count": 53
    },
    {
        "date": "2024-05-29 05:24:46",
        "count": 56
    },
    {
        "date": "2024-05-29 05:29:46",
        "count": 58
    },
    {
        "date": "2024-05-29 05:34:47",
        "count": 60
    },
    {
        "date": "2024-05-29 05:39:48",
        "count": 66
    },
    {
        "date": "2024-05-29 05:44:48",
        "count": 64
    },
    {
        "date": "2024-05-29 05:49:49",
        "count": 61
    },
    {
        "date": "2024-05-29 05:54:52",
        "count": 61
    },
    {
        "date": "2024-05-29 05:59:53",
        "count": 59
    },
    {
        "date": "2024-05-29 06:04:54",
        "count": 65
    },
    {
        "date": "2024-05-29 06:09:55",
        "count": 67
    },
    {
        "date": "2024-05-29 06:14:55",
        "count": 66
    },
    {
        "date": "2024-05-29 06:19:56",
        "count": 63
    },
    {
        "date": "2024-05-29 06:24:59",
        "count": 62
    },
    {
        "date": "2024-05-29 06:30:00",
        "count": 60
    },
    {
        "date": "2024-05-29 06:35:01",
        "count": 58
    },
    {
        "date": "2024-05-29 06:40:02",
        "count": 54
    },
    {
        "date": "2024-05-29 06:45:03",
        "count": 54
    },
    {
        "date": "2024-05-29 06:50:03",
        "count": 49
    },
    {
        "date": "2024-05-29 06:55:06",
        "count": 46
    },
    {
        "date": "2024-05-29 07:00:07",
        "count": 47
    },
    {
        "date": "2024-05-29 07:05:08",
        "count": 46
    },
    {
        "date": "2024-05-29 07:10:09",
        "count": 50
    },
    {
        "date": "2024-05-29 07:15:10",
        "count": 55
    },
    {
        "date": "2024-05-29 07:20:11",
        "count": 56
    },
    {
        "date": "2024-05-29 07:25:14",
        "count": 57
    },
    {
        "date": "2024-05-29 07:30:15",
        "count": 55
    },
    {
        "date": "2024-05-29 07:35:16",
        "count": 55
    },
    {
        "date": "2024-05-29 07:40:16",
        "count": 55
    },
    {
        "date": "2024-05-29 07:45:17",
        "count": 57
    },
    {
        "date": "2024-05-29 07:50:18",
        "count": 59
    },
    {
        "date": "2024-05-29 07:55:21",
        "count": 61
    },
    {
        "date": "2024-05-29 08:00:22",
        "count": 65
    },
    {
        "date": "2024-05-29 08:05:23",
        "count": 65
    },
    {
        "date": "2024-05-29 08:10:24",
        "count": 63
    },
    {
        "date": "2024-05-29 08:15:26",
        "count": 65
    },
    {
        "date": "2024-05-29 08:20:27",
        "count": 60
    },
    {
        "date": "2024-05-29 08:25:30",
        "count": 53
    },
    {
        "date": "2024-05-29 08:30:32",
        "count": 52
    },
    {
        "date": "2024-05-29 08:35:33",
        "count": 56
    },
    {
        "date": "2024-05-29 08:40:34",
        "count": 53
    },
    {
        "date": "2024-05-29 08:45:35",
        "count": 53
    },
    {
        "date": "2024-05-29 08:50:36",
        "count": 53
    },
    {
        "date": "2024-05-29 08:55:40",
        "count": 54
    },
    {
        "date": "2024-05-29 09:00:41",
        "count": 56
    },
    {
        "date": "2024-05-29 09:05:42",
        "count": 59
    },
    {
        "date": "2024-05-29 09:10:43",
        "count": 62
    },
    {
        "date": "2024-05-29 09:15:44",
        "count": 61
    },
    {
        "date": "2024-05-29 09:20:45",
        "count": 63
    },
    {
        "date": "2024-05-29 09:25:49",
        "count": 63
    },
    {
        "date": "2024-05-29 09:30:50",
        "count": 65
    },
    {
        "date": "2024-05-29 09:35:51",
        "count": 67
    },
    {
        "date": "2024-05-29 09:40:52",
        "count": 64
    },
    {
        "date": "2024-05-29 09:45:53",
        "count": 64
    },
    {
        "date": "2024-05-29 09:50:54",
        "count": 69
    },
    {
        "date": "2024-05-29 09:55:58",
        "count": 69
    },
    {
        "date": "2024-05-29 10:00:59",
        "count": 71
    },
    {
        "date": "2024-05-29 10:06:00",
        "count": 75
    },
    {
        "date": "2024-05-29 10:11:01",
        "count": 76
    },
    {
        "date": "2024-05-29 10:16:02",
        "count": 76
    },
    {
        "date": "2024-05-29 10:21:04",
        "count": 75
    },
    {
        "date": "2024-05-29 10:26:07",
        "count": 77
    },
    {
        "date": "2024-05-29 10:31:08",
        "count": 71
    },
    {
        "date": "2024-05-29 10:36:10",
        "count": 72
    },
    {
        "date": "2024-05-29 10:41:11",
        "count": 70
    },
    {
        "date": "2024-05-29 10:46:12",
        "count": 73
    },
    {
        "date": "2024-05-29 10:51:14",
        "count": 73
    },
    {
        "date": "2024-05-29 10:56:18",
        "count": 69
    },
    {
        "date": "2024-05-29 11:01:19",
        "count": 71
    },
    {
        "date": "2024-05-29 11:06:20",
        "count": 68
    },
    {
        "date": "2024-05-29 11:11:22",
        "count": 69
    },
    {
        "date": "2024-05-29 11:16:23",
        "count": 65
    },
    {
        "date": "2024-05-29 11:21:24",
        "count": 61
    },
    {
        "date": "2024-05-29 11:26:27",
        "count": 66
    },
    {
        "date": "2024-05-29 11:31:28",
        "count": 64
    },
    {
        "date": "2024-05-29 11:36:29",
        "count": 62
    },
    {
        "date": "2024-05-29 11:41:30",
        "count": 62
    },
    {
        "date": "2024-05-29 11:46:31",
        "count": 59
    },
    {
        "date": "2024-05-29 11:51:33",
        "count": 61
    },
    {
        "date": "2024-05-29 11:56:37",
        "count": 62
    },
    {
        "date": "2024-05-29 12:01:38",
        "count": 65
    },
    {
        "date": "2024-05-29 12:06:39",
        "count": 66
    },
    {
        "date": "2024-05-29 12:11:40",
        "count": 67
    },
    {
        "date": "2024-05-29 12:16:42",
        "count": 63
    },
    {
        "date": "2024-05-29 12:21:43",
        "count": 61
    },
    {
        "date": "2024-05-29 12:26:46",
        "count": 62
    },
    {
        "date": "2024-05-29 12:31:48",
        "count": 66
    },
    {
        "date": "2024-05-29 12:36:49",
        "count": 63
    },
    {
        "date": "2024-05-29 12:41:49",
        "count": 64
    },
    {
        "date": "2024-05-29 12:46:51",
        "count": 66
    },
    {
        "date": "2024-05-29 12:51:51",
        "count": 71
    },
    {
        "date": "2024-05-29 12:56:55",
        "count": 66
    },
    {
        "date": "2024-05-29 13:01:56",
        "count": 66
    },
    {
        "date": "2024-05-29 13:06:57",
        "count": 72
    },
    {
        "date": "2024-05-29 13:11:58",
        "count": 71
    },
    {
        "date": "2024-05-29 13:16:59",
        "count": 67
    },
    {
        "date": "2024-05-29 13:22:01",
        "count": 69
    },
    {
        "date": "2024-05-29 13:27:06",
        "count": 69
    },
    {
        "date": "2024-05-29 13:32:07",
        "count": 72
    },
    {
        "date": "2024-05-29 13:37:08",
        "count": 78
    },
    {
        "date": "2024-05-29 13:42:09",
        "count": 79
    },
    {
        "date": "2024-05-29 13:47:11",
        "count": 87
    },
    {
        "date": "2024-05-29 13:52:12",
        "count": 89
    },
    {
        "date": "2024-05-29 13:57:16",
        "count": 95
    },
    {
        "date": "2024-05-29 14:02:17",
        "count": 100
    },
    {
        "date": "2024-05-29 14:07:18",
        "count": 99
    },
    {
        "date": "2024-05-29 14:12:19",
        "count": 97
    },
    {
        "date": "2024-05-29 14:17:22",
        "count": 97
    },
    {
        "date": "2024-05-29 14:22:23",
        "count": 93
    },
    {
        "date": "2024-05-29 14:27:27",
        "count": 94
    },
    {
        "date": "2024-05-29 14:32:28",
        "count": 97
    },
    {
        "date": "2024-05-29 14:37:29",
        "count": 90
    },
    {
        "date": "2024-05-29 14:42:30",
        "count": 87
    },
    {
        "date": "2024-05-29 14:47:32",
        "count": 99
    },
    {
        "date": "2024-05-29 14:52:33",
        "count": 98
    },
    {
        "date": "2024-05-29 14:57:37",
        "count": 102
    },
    {
        "date": "2024-05-29 15:02:38",
        "count": 100
    },
    {
        "date": "2024-05-29 15:07:39",
        "count": 107
    },
    {
        "date": "2024-05-29 15:12:40",
        "count": 115
    },
    {
        "date": "2024-05-29 15:17:42",
        "count": 125
    },
    {
        "date": "2024-05-29 15:22:43",
        "count": 144
    },
    {
        "date": "2024-05-29 15:27:47",
        "count": 144
    },
    {
        "date": "2024-05-29 15:32:48",
        "count": 147
    },
    {
        "date": "2024-05-29 15:37:49",
        "count": 151
    },
    {
        "date": "2024-05-29 15:42:50",
        "count": 150
    },
    {
        "date": "2024-05-29 15:47:51",
        "count": 151
    },
    {
        "date": "2024-05-29 15:52:53",
        "count": 153
    },
    {
        "date": "2024-05-29 15:57:56",
        "count": 166
    },
    {
        "date": "2024-05-29 16:02:57",
        "count": 172
    },
    {
        "date": "2024-05-29 16:07:58",
        "count": 170
    },
    {
        "date": "2024-05-29 16:12:59",
        "count": 175
    },
    {
        "date": "2024-05-29 16:18:01",
        "count": 185
    },
    {
        "date": "2024-05-29 16:23:02",
        "count": 204
    },
    {
        "date": "2024-05-29 16:28:06",
        "count": 209
    },
    {
        "date": "2024-05-29 16:33:07",
        "count": 215
    },
    {
        "date": "2024-05-29 16:38:08",
        "count": 206
    },
    {
        "date": "2024-05-29 16:43:10",
        "count": 204
    },
    {
        "date": "2024-05-29 16:48:11",
        "count": 208
    },
    {
        "date": "2024-05-29 16:53:12",
        "count": 204
    },
    {
        "date": "2024-05-29 16:58:16",
        "count": 196
    },
    {
        "date": "2024-05-29 17:03:17",
        "count": 191
    },
    {
        "date": "2024-05-29 17:08:19",
        "count": 185
    },
    {
        "date": "2024-05-29 17:13:20",
        "count": 177
    },
    {
        "date": "2024-05-29 17:18:21",
        "count": 176
    },
    {
        "date": "2024-05-29 17:23:22",
        "count": 175
    },
    {
        "date": "2024-05-29 17:28:26",
        "count": 151
    },
    {
        "date": "2024-05-29 17:33:27",
        "count": 138
    },
    {
        "date": "2024-05-29 17:38:28",
        "count": 132
    },
    {
        "date": "2024-05-29 17:43:29",
        "count": 125
    },
    {
        "date": "2024-05-29 17:48:30",
        "count": 120
    },
    {
        "date": "2024-05-29 17:53:31",
        "count": 122
    },
    {
        "date": "2024-05-29 17:58:35",
        "count": 118
    },
    {
        "date": "2024-05-29 18:03:36",
        "count": 117
    },
    {
        "date": "2024-05-29 18:08:37",
        "count": 117
    },
    {
        "date": "2024-05-29 18:13:38",
        "count": 122
    },
    {
        "date": "2024-05-29 18:18:39",
        "count": 122
    },
    {
        "date": "2024-05-29 18:23:40",
        "count": 127
    },
    {
        "date": "2024-05-29 18:28:44",
        "count": 127
    },
    {
        "date": "2024-05-29 18:33:45",
        "count": 130
    },
    {
        "date": "2024-05-29 18:38:46",
        "count": 133
    },
    {
        "date": "2024-05-29 18:43:47",
        "count": 133
    },
    {
        "date": "2024-05-29 18:48:48",
        "count": 138
    },
    {
        "date": "2024-05-29 18:53:49",
        "count": 141
    },
    {
        "date": "2024-05-29 18:58:52",
        "count": 139
    },
    {
        "date": "2024-05-29 19:03:53",
        "count": 139
    },
    {
        "date": "2024-05-29 19:08:54",
        "count": 135
    },
    {
        "date": "2024-05-29 19:13:55",
        "count": 129
    },
    {
        "date": "2024-05-29 19:18:56",
        "count": 131
    },
    {
        "date": "2024-05-29 19:23:57",
        "count": 131
    },
    {
        "date": "2024-05-29 19:29:01",
        "count": 129
    },
    {
        "date": "2024-05-29 19:34:02",
        "count": 129
    },
    {
        "date": "2024-05-29 19:39:03",
        "count": 111
    },
    {
        "date": "2024-05-29 19:44:04",
        "count": 106
    },
    {
        "date": "2024-05-29 19:49:05",
        "count": 106
    },
    {
        "date": "2024-05-29 19:54:06",
        "count": 112
    },
    {
        "date": "2024-05-29 19:59:10",
        "count": 104
    },
    {
        "date": "2024-05-29 20:04:11",
        "count": 98
    },
    {
        "date": "2024-05-29 20:09:13",
        "count": 97
    },
    {
        "date": "2024-05-29 20:14:14",
        "count": 91
    },
    {
        "date": "2024-05-29 20:19:15",
        "count": 87
    },
    {
        "date": "2024-05-29 20:24:16",
        "count": 83
    },
    {
        "date": "2024-05-29 20:29:20",
        "count": 78
    },
    {
        "date": "2024-05-29 20:34:21",
        "count": 78
    },
    {
        "date": "2024-05-29 20:39:22",
        "count": 71
    },
    {
        "date": "2024-05-29 20:44:23",
        "count": 64
    },
    {
        "date": "2024-05-29 20:49:25",
        "count": 62
    },
    {
        "date": "2024-05-29 20:54:26",
        "count": 59
    },
    {
        "date": "2024-05-29 20:59:29",
        "count": 56
    },
    {
        "date": "2024-05-29 21:04:30",
        "count": 53
    },
    {
        "date": "2024-05-29 21:09:31",
        "count": 48
    },
    {
        "date": "2024-05-29 21:14:32",
        "count": 46
    },
    {
        "date": "2024-05-29 21:19:33",
        "count": 39
    },
    {
        "date": "2024-05-29 21:24:34",
        "count": 43
    },
    {
        "date": "2024-05-29 21:29:38",
        "count": 40
    },
    {
        "date": "2024-05-29 21:34:39",
        "count": 40
    },
    {
        "date": "2024-05-29 21:39:39",
        "count": 39
    },
    {
        "date": "2024-05-29 21:44:40",
        "count": 39
    },
    {
        "date": "2024-05-29 21:49:41",
        "count": 38
    },
    {
        "date": "2024-05-29 21:54:42",
        "count": 36
    },
    {
        "date": "2024-05-29 21:59:45",
        "count": 33
    },
    {
        "date": "2024-05-29 22:04:46",
        "count": 32
    },
    {
        "date": "2024-05-29 22:09:46",
        "count": 30
    },
    {
        "date": "2024-05-29 22:14:47",
        "count": 29
    },
    {
        "date": "2024-05-29 22:19:48",
        "count": 27
    },
    {
        "date": "2024-05-29 22:24:49",
        "count": 28
    },
    {
        "date": "2024-05-29 22:29:51",
        "count": 27
    },
    {
        "date": "2024-05-29 22:34:52",
        "count": 26
    },
    {
        "date": "2024-05-29 22:39:53",
        "count": 22
    },
    {
        "date": "2024-05-29 22:44:54",
        "count": 19
    },
    {
        "date": "2024-05-29 22:49:54",
        "count": 18
    },
    {
        "date": "2024-05-29 22:54:55",
        "count": 18
    },
    {
        "date": "2024-05-29 22:59:58",
        "count": 19
    },
    {
        "date": "2024-05-29 23:04:59",
        "count": 20
    },
    {
        "date": "2024-05-29 23:10:00",
        "count": 19
    },
    {
        "date": "2024-05-29 23:15:01",
        "count": 20
    },
    {
        "date": "2024-05-29 23:20:02",
        "count": 22
    },
    {
        "date": "2024-05-29 23:25:02",
        "count": 22
    },
    {
        "date": "2024-05-29 23:30:06",
        "count": 20
    },
    {
        "date": "2024-05-29 23:35:06",
        "count": 19
    },
    {
        "date": "2024-05-29 23:40:07",
        "count": 21
    },
    {
        "date": "2024-05-29 23:45:08",
        "count": 19
    },
    {
        "date": "2024-05-29 23:50:09",
        "count": 19
    },
    {
        "date": "2024-05-29 23:55:09",
        "count": 19
    },
    {
        "date": "2024-05-30 00:00:13",
        "count": 18
    },
    {
        "date": "2024-05-30 00:05:14",
        "count": 18
    },
    {
        "date": "2024-05-30 00:10:14",
        "count": 17
    },
    {
        "date": "2024-05-30 00:15:15",
        "count": 18
    },
    {
        "date": "2024-05-30 00:20:16",
        "count": 20
    },
    {
        "date": "2024-05-30 00:25:16",
        "count": 16
    },
    {
        "date": "2024-05-30 00:30:19",
        "count": 16
    },
    {
        "date": "2024-05-30 00:35:20",
        "count": 16
    },
    {
        "date": "2024-05-30 00:40:20",
        "count": 16
    },
    {
        "date": "2024-05-30 00:45:21",
        "count": 16
    },
    {
        "date": "2024-05-30 00:50:22",
        "count": 16
    },
    {
        "date": "2024-05-30 00:55:24",
        "count": 17
    },
    {
        "date": "2024-05-30 01:00:27",
        "count": 16
    },
    {
        "date": "2024-05-30 01:05:27",
        "count": 16
    },
    {
        "date": "2024-05-30 01:10:28",
        "count": 15
    },
    {
        "date": "2024-05-30 01:15:29",
        "count": 14
    },
    {
        "date": "2024-05-30 01:20:30",
        "count": 14
    },
    {
        "date": "2024-05-30 01:25:30",
        "count": 14
    },
    {
        "date": "2024-05-30 01:30:33",
        "count": 12
    },
    {
        "date": "2024-05-30 01:35:34",
        "count": 12
    },
    {
        "date": "2024-05-30 01:40:35",
        "count": 13
    },
    {
        "date": "2024-05-30 01:45:36",
        "count": 13
    },
    {
        "date": "2024-05-30 01:50:36",
        "count": 13
    },
    {
        "date": "2024-05-30 01:55:37",
        "count": 13
    },
    {
        "date": "2024-05-30 02:00:40",
        "count": 13
    },
    {
        "date": "2024-05-30 02:05:41",
        "count": 13
    },
    {
        "date": "2024-05-30 02:10:42",
        "count": 14
    },
    {
        "date": "2024-05-30 02:15:43",
        "count": 14
    },
    {
        "date": "2024-05-30 02:20:43",
        "count": 16
    },
    {
        "date": "2024-05-30 02:25:44",
        "count": 14
    },
    {
        "date": "2024-05-30 02:30:47",
        "count": 11
    },
    {
        "date": "2024-05-30 02:35:48",
        "count": 11
    },
    {
        "date": "2024-05-30 02:40:49",
        "count": 11
    },
    {
        "date": "2024-05-30 02:45:50",
        "count": 12
    },
    {
        "date": "2024-05-30 02:50:50",
        "count": 12
    },
    {
        "date": "2024-05-30 02:55:51",
        "count": 12
    },
    {
        "date": "2024-05-30 03:00:54",
        "count": 12
    },
    {
        "date": "2024-05-30 03:05:55",
        "count": 14
    },
    {
        "date": "2024-05-30 03:10:56",
        "count": 15
    },
    {
        "date": "2024-05-30 03:15:57",
        "count": 15
    },
    {
        "date": "2024-05-30 03:20:57",
        "count": 15
    },
    {
        "date": "2024-05-30 03:25:58",
        "count": 15
    },
    {
        "date": "2024-05-30 03:31:01",
        "count": 17
    },
    {
        "date": "2024-05-30 03:36:02",
        "count": 17
    },
    {
        "date": "2024-05-30 03:41:03",
        "count": 17
    },
    {
        "date": "2024-05-30 03:46:03",
        "count": 17
    },
    {
        "date": "2024-05-30 03:51:04",
        "count": 17
    },
    {
        "date": "2024-05-30 03:56:05",
        "count": 18
    },
    {
        "date": "2024-05-30 04:01:08",
        "count": 19
    },
    {
        "date": "2024-05-30 04:06:09",
        "count": 18
    },
    {
        "date": "2024-05-30 04:11:10",
        "count": 16
    },
    {
        "date": "2024-05-30 04:16:10",
        "count": 17
    },
    {
        "date": "2024-05-30 04:21:11",
        "count": 17
    },
    {
        "date": "2024-05-30 04:26:12",
        "count": 18
    },
    {
        "date": "2024-05-30 04:31:15",
        "count": 18
    },
    {
        "date": "2024-05-30 04:36:16",
        "count": 21
    },
    {
        "date": "2024-05-30 04:41:17",
        "count": 21
    },
    {
        "date": "2024-05-30 04:46:17",
        "count": 22
    },
    {
        "date": "2024-05-30 04:51:18",
        "count": 23
    },
    {
        "date": "2024-05-30 04:56:19",
        "count": 25
    },
    {
        "date": "2024-05-30 05:01:22",
        "count": 27
    },
    {
        "date": "2024-05-30 05:06:23",
        "count": 28
    },
    {
        "date": "2024-05-30 05:11:23",
        "count": 29
    },
    {
        "date": "2024-05-30 05:16:24",
        "count": 27
    },
    {
        "date": "2024-05-30 05:21:25",
        "count": 29
    },
    {
        "date": "2024-05-30 05:26:26",
        "count": 30
    },
    {
        "date": "2024-05-30 05:31:29",
        "count": 32
    },
    {
        "date": "2024-05-30 05:36:29",
        "count": 36
    },
    {
        "date": "2024-05-30 05:41:30",
        "count": 38
    },
    {
        "date": "2024-05-30 05:46:31",
        "count": 40
    },
    {
        "date": "2024-05-30 05:51:32",
        "count": 44
    },
    {
        "date": "2024-05-30 05:56:33",
        "count": 45
    },
    {
        "date": "2024-05-30 06:01:36",
        "count": 48
    },
    {
        "date": "2024-05-30 06:06:36",
        "count": 45
    },
    {
        "date": "2024-05-30 06:11:37",
        "count": 45
    },
    {
        "date": "2024-05-30 06:16:38",
        "count": 46
    },
    {
        "date": "2024-05-30 06:21:39",
        "count": 45
    },
    {
        "date": "2024-05-30 06:26:40",
        "count": 48
    },
    {
        "date": "2024-05-30 06:31:43",
        "count": 50
    },
    {
        "date": "2024-05-30 06:36:43",
        "count": 50
    },
    {
        "date": "2024-05-30 06:41:44",
        "count": 51
    },
    {
        "date": "2024-05-30 06:46:45",
        "count": 54
    },
    {
        "date": "2024-05-30 06:51:46",
        "count": 53
    },
    {
        "date": "2024-05-30 06:56:46",
        "count": 55
    },
    {
        "date": "2024-05-30 07:01:49",
        "count": 54
    },
    {
        "date": "2024-05-30 07:06:50",
        "count": 59
    },
    {
        "date": "2024-05-30 07:11:51",
        "count": 58
    },
    {
        "date": "2024-05-30 07:16:52",
        "count": 57
    },
    {
        "date": "2024-05-30 07:21:52",
        "count": 58
    },
    {
        "date": "2024-05-30 07:26:54",
        "count": 63
    },
    {
        "date": "2024-05-30 07:31:58",
        "count": 65
    },
    {
        "date": "2024-05-30 07:36:59",
        "count": 67
    },
    {
        "date": "2024-05-30 07:41:59",
        "count": 68
    },
    {
        "date": "2024-05-30 07:47:01",
        "count": 64
    },
    {
        "date": "2024-05-30 07:52:02",
        "count": 65
    },
    {
        "date": "2024-05-30 07:57:03",
        "count": 64
    },
    {
        "date": "2024-05-30 08:02:07",
        "count": 70
    },
    {
        "date": "2024-05-30 08:07:08",
        "count": 74
    },
    {
        "date": "2024-05-30 08:12:09",
        "count": 78
    },
    {
        "date": "2024-05-30 08:17:11",
        "count": 83
    },
    {
        "date": "2024-05-30 08:22:12",
        "count": 86
    },
    {
        "date": "2024-05-30 08:27:13",
        "count": 94
    },
    {
        "date": "2024-05-30 08:32:17",
        "count": 100
    },
    {
        "date": "2024-05-30 08:37:18",
        "count": 109
    },
    {
        "date": "2024-05-30 08:42:20",
        "count": 107
    },
    {
        "date": "2024-05-30 08:47:21",
        "count": 114
    },
    {
        "date": "2024-05-30 08:52:22",
        "count": 108
    },
    {
        "date": "2024-05-30 08:57:23",
        "count": 109
    },
    {
        "date": "2024-05-30 09:02:27",
        "count": 114
    },
    {
        "date": "2024-05-30 09:07:28",
        "count": 119
    },
    {
        "date": "2024-05-30 09:12:29",
        "count": 110
    },
    {
        "date": "2024-05-30 09:17:30",
        "count": 111
    },
    {
        "date": "2024-05-30 09:22:32",
        "count": 110
    },
    {
        "date": "2024-05-30 09:27:33",
        "count": 112
    },
    {
        "date": "2024-05-30 09:32:36",
        "count": 116
    },
    {
        "date": "2024-05-30 09:37:37",
        "count": 118
    },
    {
        "date": "2024-05-30 09:42:38",
        "count": 116
    },
    {
        "date": "2024-05-30 09:47:39",
        "count": 116
    },
    {
        "date": "2024-05-30 09:52:40",
        "count": 118
    },
    {
        "date": "2024-05-30 09:57:42",
        "count": 113
    },
    {
        "date": "2024-05-30 10:02:45",
        "count": 111
    },
    {
        "date": "2024-05-30 10:07:46",
        "count": 107
    },
    {
        "date": "2024-05-30 10:12:47",
        "count": 106
    },
    {
        "date": "2024-05-30 10:17:49",
        "count": 102
    },
    {
        "date": "2024-05-30 10:22:50",
        "count": 102
    },
    {
        "date": "2024-05-30 10:27:51",
        "count": 102
    },
    {
        "date": "2024-05-30 10:32:55",
        "count": 103
    },
    {
        "date": "2024-05-30 10:37:56",
        "count": 103
    },
    {
        "date": "2024-05-30 10:42:57",
        "count": 108
    },
    {
        "date": "2024-05-30 10:47:58",
        "count": 110
    },
    {
        "date": "2024-05-30 10:52:59",
        "count": 115
    },
    {
        "date": "2024-05-30 10:58:00",
        "count": 114
    },
    {
        "date": "2024-05-30 11:03:04",
        "count": 116
    },
    {
        "date": "2024-05-30 11:08:05",
        "count": 114
    },
    {
        "date": "2024-05-30 11:13:06",
        "count": 111
    },
    {
        "date": "2024-05-30 11:18:07",
        "count": 113
    },
    {
        "date": "2024-05-30 11:23:08",
        "count": 112
    },
    {
        "date": "2024-05-30 11:28:09",
        "count": 111
    },
    {
        "date": "2024-05-30 11:33:13",
        "count": 108
    },
    {
        "date": "2024-05-30 11:38:15",
        "count": 104
    },
    {
        "date": "2024-05-30 11:43:16",
        "count": 98
    },
    {
        "date": "2024-05-30 11:48:17",
        "count": 96
    },
    {
        "date": "2024-05-30 11:53:18",
        "count": 91
    },
    {
        "date": "2024-05-30 11:58:19",
        "count": 91
    },
    {
        "date": "2024-05-30 12:03:22",
        "count": 83
    },
    {
        "date": "2024-05-30 12:08:23",
        "count": 82
    },
    {
        "date": "2024-05-30 12:13:24",
        "count": 80
    },
    {
        "date": "2024-05-30 12:18:25",
        "count": 79
    },
    {
        "date": "2024-05-30 12:23:26",
        "count": 80
    },
    {
        "date": "2024-05-30 12:28:27",
        "count": 80
    },
    {
        "date": "2024-05-30 12:33:31",
        "count": 75
    },
    {
        "date": "2024-05-30 12:38:32",
        "count": 80
    },
    {
        "date": "2024-05-30 12:43:33",
        "count": 82
    },
    {
        "date": "2024-05-30 12:48:34",
        "count": 81
    },
    {
        "date": "2024-05-30 12:53:35",
        "count": 76
    },
    {
        "date": "2024-05-30 12:58:36",
        "count": 81
    },
    {
        "date": "2024-05-30 13:03:40",
        "count": 76
    },
    {
        "date": "2024-05-30 13:08:41",
        "count": 77
    },
    {
        "date": "2024-05-30 13:13:42",
        "count": 81
    },
    {
        "date": "2024-05-30 13:18:44",
        "count": 93
    },
    {
        "date": "2024-05-30 13:23:45",
        "count": 102
    },
    {
        "date": "2024-05-30 13:28:46",
        "count": 112
    },
    {
        "date": "2024-05-30 13:33:49",
        "count": 120
    },
    {
        "date": "2024-05-30 13:38:50",
        "count": 127
    },
    {
        "date": "2024-05-30 13:43:51",
        "count": 126
    },
    {
        "date": "2024-05-30 13:48:52",
        "count": 120
    },
    {
        "date": "2024-05-30 13:53:53",
        "count": 119
    },
    {
        "date": "2024-05-30 13:58:54",
        "count": 120
    },
    {
        "date": "2024-05-30 14:03:58",
        "count": 122
    },
    {
        "date": "2024-05-30 14:08:59",
        "count": 122
    },
    {
        "date": "2024-05-30 14:14:00",
        "count": 122
    },
    {
        "date": "2024-05-30 14:19:01",
        "count": 122
    },
    {
        "date": "2024-05-30 14:24:02",
        "count": 128
    },
    {
        "date": "2024-05-30 14:29:03",
        "count": 134
    },
    {
        "date": "2024-05-30 14:34:07",
        "count": 141
    },
    {
        "date": "2024-05-30 14:39:08",
        "count": 127
    },
    {
        "date": "2024-05-30 14:44:09",
        "count": 130
    },
    {
        "date": "2024-05-30 14:49:10",
        "count": 129
    },
    {
        "date": "2024-05-30 14:54:11",
        "count": 126
    },
    {
        "date": "2024-05-30 14:59:13",
        "count": 123
    },
    {
        "date": "2024-05-30 15:04:16",
        "count": 114
    },
    {
        "date": "2024-05-30 15:09:17",
        "count": 117
    },
    {
        "date": "2024-05-30 15:14:18",
        "count": 115
    },
    {
        "date": "2024-05-30 15:19:19",
        "count": 121
    },
    {
        "date": "2024-05-30 15:24:20",
        "count": 121
    },
    {
        "date": "2024-05-30 15:29:21",
        "count": 122
    },
    {
        "date": "2024-05-30 15:34:24",
        "count": 125
    },
    {
        "date": "2024-05-30 15:39:25",
        "count": 119
    },
    {
        "date": "2024-05-30 15:44:26",
        "count": 109
    },
    {
        "date": "2024-05-30 15:49:27",
        "count": 111
    },
    {
        "date": "2024-05-30 15:54:28",
        "count": 113
    },
    {
        "date": "2024-05-30 15:59:29",
        "count": 116
    },
    {
        "date": "2024-05-30 16:04:32",
        "count": 115
    },
    {
        "date": "2024-05-30 16:09:33",
        "count": 118
    },
    {
        "date": "2024-05-30 16:14:34",
        "count": 117
    },
    {
        "date": "2024-05-30 16:19:35",
        "count": 124
    },
    {
        "date": "2024-05-30 16:24:36",
        "count": 123
    },
    {
        "date": "2024-05-30 16:29:37",
        "count": 124
    },
    {
        "date": "2024-05-30 16:34:41",
        "count": 123
    },
    {
        "date": "2024-05-30 16:39:42",
        "count": 121
    },
    {
        "date": "2024-05-30 16:44:43",
        "count": 125
    },
    {
        "date": "2024-05-30 16:49:44",
        "count": 122
    },
    {
        "date": "2024-05-30 16:54:45",
        "count": 129
    },
    {
        "date": "2024-05-30 16:59:46",
        "count": 132
    },
    {
        "date": "2024-05-30 17:04:49",
        "count": 131
    },
    {
        "date": "2024-05-30 17:09:50",
        "count": 126
    },
    {
        "date": "2024-05-30 17:14:51",
        "count": 127
    },
    {
        "date": "2024-05-30 17:19:52",
        "count": 132
    },
    {
        "date": "2024-05-30 17:24:53",
        "count": 131
    },
    {
        "date": "2024-05-30 17:29:54",
        "count": 123
    },
    {
        "date": "2024-05-30 17:34:57",
        "count": 122
    },
    {
        "date": "2024-05-30 17:39:58",
        "count": 127
    },
    {
        "date": "2024-05-30 17:44:59",
        "count": 123
    },
    {
        "date": "2024-05-30 17:50:00",
        "count": 116
    },
    {
        "date": "2024-05-30 17:55:01",
        "count": 114
    },
    {
        "date": "2024-05-30 18:00:03",
        "count": 114
    },
    {
        "date": "2024-05-30 18:05:07",
        "count": 112
    },
    {
        "date": "2024-05-30 18:10:08",
        "count": 113
    },
    {
        "date": "2024-05-30 18:15:08",
        "count": 114
    },
    {
        "date": "2024-05-30 18:20:09",
        "count": 106
    },
    {
        "date": "2024-05-30 18:25:10",
        "count": 102
    },
    {
        "date": "2024-05-30 18:30:11",
        "count": 98
    },
    {
        "date": "2024-05-30 18:35:15",
        "count": 97
    },
    {
        "date": "2024-05-30 18:40:16",
        "count": 98
    },
    {
        "date": "2024-05-30 18:45:17",
        "count": 100
    },
    {
        "date": "2024-05-30 18:50:18",
        "count": 102
    },
    {
        "date": "2024-05-30 18:55:19",
        "count": 100
    },
    {
        "date": "2024-05-30 19:00:20",
        "count": 98
    },
    {
        "date": "2024-05-30 19:05:24",
        "count": 93
    },
    {
        "date": "2024-05-30 19:10:25",
        "count": 97
    },
    {
        "date": "2024-05-30 19:15:26",
        "count": 95
    },
    {
        "date": "2024-05-30 19:20:27",
        "count": 102
    },
    {
        "date": "2024-05-30 19:25:28",
        "count": 106
    },
    {
        "date": "2024-05-30 19:30:29",
        "count": 105
    },
    {
        "date": "2024-05-30 19:35:32",
        "count": 104
    },
    {
        "date": "2024-05-30 19:40:33",
        "count": 101
    },
    {
        "date": "2024-05-30 19:45:34",
        "count": 95
    },
    {
        "date": "2024-05-30 19:50:35",
        "count": 102
    },
    {
        "date": "2024-05-30 19:55:36",
        "count": 106
    },
    {
        "date": "2024-05-30 20:00:37",
        "count": 109
    },
    {
        "date": "2024-05-30 20:05:40",
        "count": 109
    },
    {
        "date": "2024-05-30 20:10:41",
        "count": 103
    },
    {
        "date": "2024-05-30 20:15:42",
        "count": 99
    },
    {
        "date": "2024-05-30 20:20:43",
        "count": 93
    },
    {
        "date": "2024-05-30 20:25:43",
        "count": 91
    },
    {
        "date": "2024-05-30 20:30:44",
        "count": 91
    },
    {
        "date": "2024-05-30 20:35:48",
        "count": 89
    },
    {
        "date": "2024-05-30 20:40:49",
        "count": 85
    },
    {
        "date": "2024-05-30 20:45:50",
        "count": 76
    },
    {
        "date": "2024-05-30 20:50:51",
        "count": 74
    },
    {
        "date": "2024-05-30 20:55:51",
        "count": 67
    },
    {
        "date": "2024-05-30 21:00:53",
        "count": 63
    },
    {
        "date": "2024-05-30 21:05:56",
        "count": 63
    },
    {
        "date": "2024-05-30 21:10:57",
        "count": 60
    },
    {
        "date": "2024-05-30 21:15:57",
        "count": 59
    },
    {
        "date": "2024-05-30 21:20:58",
        "count": 55
    },
    {
        "date": "2024-05-30 21:25:59",
        "count": 51
    },
    {
        "date": "2024-05-30 21:31:00",
        "count": 46
    },
    {
        "date": "2024-05-30 21:36:04",
        "count": 43
    },
    {
        "date": "2024-05-30 21:41:04",
        "count": 39
    },
    {
        "date": "2024-05-30 21:46:05",
        "count": 38
    },
    {
        "date": "2024-05-30 21:51:06",
        "count": 39
    },
    {
        "date": "2024-05-30 21:56:07",
        "count": 37
    },
    {
        "date": "2024-05-30 22:01:07",
        "count": 37
    },
    {
        "date": "2024-05-30 22:06:11",
        "count": 36
    },
    {
        "date": "2024-05-30 22:11:11",
        "count": 31
    },
    {
        "date": "2024-05-30 22:16:12",
        "count": 31
    },
    {
        "date": "2024-05-30 22:21:13",
        "count": 27
    },
    {
        "date": "2024-05-30 22:26:13",
        "count": 27
    },
    {
        "date": "2024-05-30 22:31:14",
        "count": 26
    },
    {
        "date": "2024-05-30 22:36:17",
        "count": 24
    },
    {
        "date": "2024-05-30 22:41:18",
        "count": 24
    },
    {
        "date": "2024-05-30 22:46:18",
        "count": 22
    },
    {
        "date": "2024-05-30 22:51:19",
        "count": 22
    },
    {
        "date": "2024-05-30 22:56:20",
        "count": 18
    },
    {
        "date": "2024-05-30 23:01:21",
        "count": 17
    },
    {
        "date": "2024-05-30 23:06:24",
        "count": 17
    },
    {
        "date": "2024-05-30 23:11:24",
        "count": 17
    },
    {
        "date": "2024-05-30 23:16:25",
        "count": 17
    },
    {
        "date": "2024-05-30 23:21:26",
        "count": 17
    },
    {
        "date": "2024-05-30 23:26:27",
        "count": 16
    },
    {
        "date": "2024-05-30 23:31:27",
        "count": 16
    },
    {
        "date": "2024-05-30 23:36:30",
        "count": 16
    },
    {
        "date": "2024-05-30 23:41:31",
        "count": 16
    },
    {
        "date": "2024-05-30 23:46:32",
        "count": 16
    },
    {
        "date": "2024-05-30 23:51:33",
        "count": 16
    },
    {
        "date": "2024-05-30 23:56:33",
        "count": 14
    },
    {
        "date": "2024-05-31 00:01:35",
        "count": 7
    },
    {
        "date": "2024-05-31 00:06:37",
        "count": 7
    },
    {
        "date": "2024-05-31 00:11:38",
        "count": 6
    },
    {
        "date": "2024-05-31 00:16:39",
        "count": 5
    },
    {
        "date": "2024-05-31 00:21:40",
        "count": 5
    },
    {
        "date": "2024-05-31 00:26:40",
        "count": 5
    },
    {
        "date": "2024-05-31 00:31:41",
        "count": 5
    },
    {
        "date": "2024-05-31 00:36:44",
        "count": 5
    },
    {
        "date": "2024-05-31 00:41:45",
        "count": 4
    },
    {
        "date": "2024-05-31 00:46:46",
        "count": 4
    },
    {
        "date": "2024-05-31 00:51:47",
        "count": 4
    },
    {
        "date": "2024-05-31 00:56:47",
        "count": 4
    },
    {
        "date": "2024-05-31 01:01:48",
        "count": 4
    },
    {
        "date": "2024-05-31 01:06:51",
        "count": 4
    },
    {
        "date": "2024-05-31 01:11:52",
        "count": 4
    },
    {
        "date": "2024-05-31 01:16:52",
        "count": 4
    },
    {
        "date": "2024-05-31 01:21:53",
        "count": 4
    },
    {
        "date": "2024-05-31 01:26:54",
        "count": 4
    },
    {
        "date": "2024-05-31 01:31:55",
        "count": 4
    },
    {
        "date": "2024-05-31 01:36:58",
        "count": 4
    },
    {
        "date": "2024-05-31 01:41:58",
        "count": 4
    },
    {
        "date": "2024-05-31 01:46:59",
        "count": 4
    },
    {
        "date": "2024-05-31 01:52:00",
        "count": 3
    },
    {
        "date": "2024-05-31 01:57:01",
        "count": 3
    },
    {
        "date": "2024-05-31 02:02:02",
        "count": 3
    },
    {
        "date": "2024-05-31 02:07:05",
        "count": 4
    },
    {
        "date": "2024-05-31 02:12:05",
        "count": 5
    },
    {
        "date": "2024-05-31 02:17:06",
        "count": 5
    },
    {
        "date": "2024-05-31 02:22:07",
        "count": 5
    },
    {
        "date": "2024-05-31 02:27:08",
        "count": 6
    },
    {
        "date": "2024-05-31 02:32:08",
        "count": 8
    },
    {
        "date": "2024-05-31 02:37:11",
        "count": 9
    },
    {
        "date": "2024-05-31 02:42:12",
        "count": 10
    },
    {
        "date": "2024-05-31 02:47:13",
        "count": 10
    },
    {
        "date": "2024-05-31 02:52:14",
        "count": 10
    },
    {
        "date": "2024-05-31 02:57:14",
        "count": 10
    },
    {
        "date": "2024-05-31 03:02:15",
        "count": 10
    },
    {
        "date": "2024-05-31 03:07:18",
        "count": 10
    },
    {
        "date": "2024-05-31 03:12:19",
        "count": 11
    },
    {
        "date": "2024-05-31 03:17:20",
        "count": 11
    },
    {
        "date": "2024-05-31 03:22:20",
        "count": 12
    },
    {
        "date": "2024-05-31 03:27:21",
        "count": 12
    },
    {
        "date": "2024-05-31 03:32:22",
        "count": 15
    },
    {
        "date": "2024-05-31 03:37:25",
        "count": 16
    },
    {
        "date": "2024-05-31 03:42:26",
        "count": 15
    },
    {
        "date": "2024-05-31 03:47:26",
        "count": 16
    },
    {
        "date": "2024-05-31 03:52:27",
        "count": 16
    },
    {
        "date": "2024-05-31 03:57:28",
        "count": 17
    },
    {
        "date": "2024-05-31 04:02:29",
        "count": 18
    },
    {
        "date": "2024-05-31 04:07:32",
        "count": 20
    },
    {
        "date": "2024-05-31 04:12:32",
        "count": 21
    },
    {
        "date": "2024-05-31 04:17:33",
        "count": 20
    },
    {
        "date": "2024-05-31 04:22:34",
        "count": 21
    },
    {
        "date": "2024-05-31 04:27:35",
        "count": 22
    },
    {
        "date": "2024-05-31 04:32:35",
        "count": 22
    },
    {
        "date": "2024-05-31 04:37:38",
        "count": 21
    },
    {
        "date": "2024-05-31 04:42:39",
        "count": 23
    },
    {
        "date": "2024-05-31 04:47:40",
        "count": 24
    },
    {
        "date": "2024-05-31 04:52:40",
        "count": 26
    },
    {
        "date": "2024-05-31 04:57:41",
        "count": 25
    },
    {
        "date": "2024-05-31 05:02:42",
        "count": 26
    },
    {
        "date": "2024-05-31 05:07:48",
        "count": 29
    },
    {
        "date": "2024-05-31 05:12:49",
        "count": 30
    },
    {
        "date": "2024-05-31 05:17:49",
        "count": 32
    },
    {
        "date": "2024-05-31 05:22:50",
        "count": 36
    },
    {
        "date": "2024-05-31 05:27:51",
        "count": 41
    },
    {
        "date": "2024-05-31 05:32:52",
        "count": 41
    },
    {
        "date": "2024-05-31 05:37:55",
        "count": 40
    },
    {
        "date": "2024-05-31 05:42:56",
        "count": 39
    },
    {
        "date": "2024-05-31 05:47:56",
        "count": 43
    },
    {
        "date": "2024-05-31 05:52:57",
        "count": 46
    },
    {
        "date": "2024-05-31 05:57:58",
        "count": 47
    },
    {
        "date": "2024-05-31 06:02:59",
        "count": 48
    },
    {
        "date": "2024-05-31 06:08:02",
        "count": 47
    },
    {
        "date": "2024-05-31 06:13:02",
        "count": 46
    },
    {
        "date": "2024-05-31 06:18:03",
        "count": 47
    },
    {
        "date": "2024-05-31 06:23:04",
        "count": 48
    },
    {
        "date": "2024-05-31 06:28:05",
        "count": 52
    },
    {
        "date": "2024-05-31 06:33:06",
        "count": 52
    },
    {
        "date": "2024-05-31 06:38:09",
        "count": 51
    },
    {
        "date": "2024-05-31 06:43:10",
        "count": 52
    },
    {
        "date": "2024-05-31 06:48:10",
        "count": 52
    },
    {
        "date": "2024-05-31 06:53:11",
        "count": 47
    },
    {
        "date": "2024-05-31 06:58:12",
        "count": 44
    },
    {
        "date": "2024-05-31 07:03:13",
        "count": 44
    },
    {
        "date": "2024-05-31 07:08:16",
        "count": 45
    },
    {
        "date": "2024-05-31 07:13:17",
        "count": 45
    },
    {
        "date": "2024-05-31 07:18:18",
        "count": 48
    },
    {
        "date": "2024-05-31 07:23:19",
        "count": 50
    },
    {
        "date": "2024-05-31 07:28:19",
        "count": 52
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequireb103")

//# sourceMappingURL=index.3d214d75.js.map
