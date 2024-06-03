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
var _indexCss = require("chartist/dist/index.css");
var _chartist = require("chartist");
var _data = require("../data");
var _dataDefault = parcelHelpers.interopDefault(_data);
let transformed = (0, _dataDefault.default).map((row)=>{
    return {
        x: Date.parse(row.date),
        y: row.count
    };
});
new (0, _chartist.LineChart)("#chart", {
    series: [
        {
            name: "series-1",
            data: transformed
        }
    ]
}, {
    axisX: {
        type: (0, _chartist.FixedScaleAxis),
        divisor: 5,
        labelInterpolationFnc: (value)=>new Date(value).toLocaleString(undefined, {
                month: "short",
                day: "numeric"
            })
    }
});

},{"chartist":"6jrAo","chartist/dist/index.css":"bFLa2","../data":"i07uf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6jrAo":[function(require,module,exports) {
/**
 * This object contains all namespaces used within Chartist.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AutoScaleAxis", ()=>AutoScaleAxis);
parcelHelpers.export(exports, "Axis", ()=>Axis);
parcelHelpers.export(exports, "BarChart", ()=>BarChart);
parcelHelpers.export(exports, "BaseChart", ()=>BaseChart);
parcelHelpers.export(exports, "EPSILON", ()=>EPSILON);
parcelHelpers.export(exports, "EventEmitter", ()=>EventEmitter);
parcelHelpers.export(exports, "FixedScaleAxis", ()=>FixedScaleAxis);
parcelHelpers.export(exports, "Interpolation", ()=>index);
parcelHelpers.export(exports, "LineChart", ()=>LineChart);
parcelHelpers.export(exports, "PieChart", ()=>PieChart);
parcelHelpers.export(exports, "StepAxis", ()=>StepAxis);
parcelHelpers.export(exports, "Svg", ()=>Svg);
parcelHelpers.export(exports, "SvgList", ()=>SvgList);
parcelHelpers.export(exports, "SvgPath", ()=>SvgPath);
parcelHelpers.export(exports, "alphaNumerate", ()=>alphaNumerate);
parcelHelpers.export(exports, "axisUnits", ()=>axisUnits);
parcelHelpers.export(exports, "createChartRect", ()=>createChartRect);
parcelHelpers.export(exports, "createGrid", ()=>createGrid);
parcelHelpers.export(exports, "createGridBackground", ()=>createGridBackground);
parcelHelpers.export(exports, "createLabel", ()=>createLabel);
parcelHelpers.export(exports, "createSvg", ()=>createSvg);
parcelHelpers.export(exports, "deserialize", ()=>deserialize);
parcelHelpers.export(exports, "determineAnchorPosition", ()=>determineAnchorPosition);
parcelHelpers.export(exports, "each", ()=>each);
parcelHelpers.export(exports, "easings", ()=>easings);
parcelHelpers.export(exports, "ensureUnit", ()=>ensureUnit);
parcelHelpers.export(exports, "escapingMap", ()=>escapingMap);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getBounds", ()=>getBounds);
parcelHelpers.export(exports, "getHighLow", ()=>getHighLow);
parcelHelpers.export(exports, "getMetaData", ()=>getMetaData);
parcelHelpers.export(exports, "getMultiValue", ()=>getMultiValue);
parcelHelpers.export(exports, "getNumberOrUndefined", ()=>getNumberOrUndefined);
parcelHelpers.export(exports, "getSeriesOption", ()=>getSeriesOption);
parcelHelpers.export(exports, "isArrayOfArrays", ()=>isArrayOfArrays);
parcelHelpers.export(exports, "isArrayOfSeries", ()=>isArrayOfSeries);
parcelHelpers.export(exports, "isDataHoleValue", ()=>isDataHoleValue);
parcelHelpers.export(exports, "isFalseyButZero", ()=>isFalseyButZero);
parcelHelpers.export(exports, "isMultiValue", ()=>isMultiValue);
parcelHelpers.export(exports, "isNumeric", ()=>isNumeric);
parcelHelpers.export(exports, "namespaces", ()=>namespaces);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "normalizeData", ()=>normalizeData);
parcelHelpers.export(exports, "normalizePadding", ()=>normalizePadding);
parcelHelpers.export(exports, "optionsProvider", ()=>optionsProvider);
parcelHelpers.export(exports, "orderOfMagnitude", ()=>orderOfMagnitude);
parcelHelpers.export(exports, "polarToCartesian", ()=>polarToCartesian);
parcelHelpers.export(exports, "precision", ()=>precision);
parcelHelpers.export(exports, "projectLength", ()=>projectLength);
parcelHelpers.export(exports, "quantity", ()=>quantity);
parcelHelpers.export(exports, "rho", ()=>rho);
parcelHelpers.export(exports, "roundWithPrecision", ()=>roundWithPrecision);
parcelHelpers.export(exports, "safeHasProperty", ()=>safeHasProperty);
parcelHelpers.export(exports, "serialMap", ()=>serialMap);
parcelHelpers.export(exports, "serialize", ()=>serialize);
parcelHelpers.export(exports, "splitIntoSegments", ()=>splitIntoSegments);
parcelHelpers.export(exports, "sum", ()=>sum);
parcelHelpers.export(exports, "times", ()=>times);
const namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/xmlns/",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    ct: "http://gionkunz.github.com/chartist-js/ct"
};
/**
 * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
 */ const precision = 8;
/**
 * A map with characters to escape for strings to be safely used as attribute values.
 */ const escapingMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
};
/**
 * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
 * @return Returns the passed number value with unit.
 */ function ensureUnit(value, unit) {
    if (typeof value === "number") return value + unit;
    return value;
}
/**
 * Converts a number or string to a quantity object.
 * @return Returns an object containing the value as number and the unit as string.
 */ function quantity(input) {
    if (typeof input === "string") {
        const match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
            value: match ? +match[1] : 0,
            unit: (match === null || match === void 0 ? void 0 : match[2]) || undefined
        };
    }
    return {
        value: Number(input)
    };
}
/**
 * Generates a-z from a number 0 to 26
 * @param n A number from 0 to 26 that will result in a letter a-z
 * @return A character from a-z based on the input number n
 */ function alphaNumerate(n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
}
const EPSILON = 2.221e-16;
/**
 * Calculate the order of magnitude for the chart scale
 * @param value The value Range of the chart
 * @return The order of magnitude
 */ function orderOfMagnitude(value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
}
/**
 * Project a data length into screen coordinates (pixels)
 * @param axisLength The svg element for the chart
 * @param length Single data value from a series array
 * @param bounds All the values to set the bounds of the chart
 * @return The projected data length in pixels
 */ function projectLength(axisLength, length, bounds) {
    return length / bounds.range * axisLength;
}
/**
 * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
 * @param value The value that should be rounded with precision
 * @param [digits] The number of digits after decimal used to do the rounding
 * @returns Rounded value
 */ function roundWithPrecision(value, digits) {
    const precision$1 = Math.pow(10, digits || precision);
    return Math.round(value * precision$1) / precision$1;
}
/**
 * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
 * @param num An integer number where the smallest factor should be searched for
 * @returns The smallest integer factor of the parameter num.
 */ function rho(num) {
    if (num === 1) return num;
    function gcd(p, q) {
        if (p % q === 0) return q;
        else return gcd(q, p % q);
    }
    function f(x) {
        return x * x + 1;
    }
    let x1 = 2;
    let x2 = 2;
    let divisor;
    if (num % 2 === 0) return 2;
    do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
    }while (divisor === 1);
    return divisor;
}
/**
 * Calculate cartesian coordinates of polar coordinates
 * @param centerX X-axis coordinates of center point of circle segment
 * @param centerY X-axis coordinates of center point of circle segment
 * @param radius Radius of circle segment
 * @param angleInDegrees Angle of circle segment in degrees
 * @return Coordinates of point on circumference
 */ function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}
/**
 * Calculate and retrieve all the bounds for the chart and return them in one array
 * @param axisLength The length of the Axis used for
 * @param highLow An object containing a high and low property indicating the value range of the chart.
 * @param scaleMinSpace The minimum projected length a step should result in
 * @param onlyInteger
 * @return All the values to set the bounds of the chart
 */ function getBounds(axisLength, highLow, scaleMinSpace) {
    let onlyInteger = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    const bounds = {
        high: highLow.high,
        low: highLow.low,
        valueRange: 0,
        oom: 0,
        step: 0,
        min: 0,
        max: 0,
        range: 0,
        numberOfSteps: 0,
        values: []
    };
    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);
    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    const length = projectLength(axisLength, bounds.step, bounds);
    const scaleUp = length < scaleMinSpace;
    const smallestFactor = onlyInteger ? rho(bounds.range) : 0;
    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if (onlyInteger && projectLength(axisLength, 1, bounds) >= scaleMinSpace) bounds.step = 1;
    else if (onlyInteger && smallestFactor < bounds.step && projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) // If step 1 was too small, we can try the smallest factor of range
    // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
    // is larger than the scaleMinSpace we should go for it.
    bounds.step = smallestFactor;
    else {
        // Trying to divide or multiply by 2 and find the best step value
        let optimizationCounter = 0;
        for(;;){
            if (scaleUp && projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) bounds.step *= 2;
            else if (!scaleUp && projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
                bounds.step /= 2;
                if (onlyInteger && bounds.step % 1 !== 0) {
                    bounds.step *= 2;
                    break;
                }
            } else break;
            if (optimizationCounter++ > 1000) throw new Error("Exceeded maximum number of iterations while optimizing scale step!");
        }
    }
    bounds.step = Math.max(bounds.step, EPSILON);
    function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        return value;
    }
    // Narrow min and max based on new step
    let newMin = bounds.min;
    let newMax = bounds.max;
    while(newMin + bounds.step <= bounds.low)newMin = safeIncrement(newMin, bounds.step);
    while(newMax - bounds.step >= bounds.high)newMax = safeIncrement(newMax, -bounds.step);
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;
    const values = [];
    for(let i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)){
        const value = roundWithPrecision(i);
        if (value !== values[values.length - 1]) values.push(value);
    }
    bounds.values = values;
    return bounds;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extend() {
    let target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    for(var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)sources[_key - 1] = arguments[_key];
    for(let i = 0; i < sources.length; i++){
        const source = sources[i];
        for(const prop in source){
            const sourceProp = source[prop];
            if (typeof sourceProp === "object" && sourceProp !== null && !(sourceProp instanceof Array)) target[prop] = extend(target[prop], sourceProp);
            else target[prop] = sourceProp;
        }
    }
    return target;
}
/**
 * Helps to simplify functional style code
 * @param n This exact value will be returned by the noop function
 * @return The same value that was provided to the n parameter
 */ const noop = (n)=>n;
function times(length, filler) {
    return Array.from({
        length
    }, filler ? (_, i)=>filler(i) : ()=>void 0);
}
/**
 * Sum helper to be used in reduce functions
 */ const sum = (previous, current)=>previous + (current ? current : 0);
/**
 * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
 *
 * For example:
 * @example
 * ```ts
 * const data = [[1, 2], [3], []];
 * serialMap(data, cb);
 *
 * // where cb will be called 2 times
 * // 1. call arguments: (1, 3, undefined)
 * // 2. call arguments: (2, undefined, undefined)
 * ```
 */ const serialMap = (array, callback)=>times(Math.max(...array.map((element)=>element.length)), (index)=>callback(...array.map((element)=>element[index])));
function safeHasProperty(target, property) {
    return target !== null && typeof target === "object" && Reflect.has(target, property);
}
function isNumeric(value) {
    return value !== null && isFinite(value);
}
/**
 * Returns true on all falsey values except the numeric value 0.
 */ function isFalseyButZero(value) {
    return !value && value !== 0;
}
function getNumberOrUndefined(value) {
    return isNumeric(value) ? Number(value) : undefined;
}
/**
 * Checks if value is array of arrays or not.
 */ function isArrayOfArrays(data) {
    if (!Array.isArray(data)) return false;
    return data.every(Array.isArray);
}
/**
 * Loop over array.
 */ function each(list, callback) {
    let reverse = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    let index = 0;
    list[reverse ? "reduceRight" : "reduce"]((_, item, itemIndex)=>callback(item, index++, itemIndex), void 0);
}
/**
 * Get meta data of a specific value in a series.
 */ function getMetaData(seriesData, index) {
    const value = Array.isArray(seriesData) ? seriesData[index] : safeHasProperty(seriesData, "data") ? seriesData.data[index] : null;
    return safeHasProperty(value, "meta") ? value.meta : undefined;
}
function isDataHoleValue(value) {
    return value === null || value === undefined || typeof value === "number" && isNaN(value);
}
/**
 * Checks if value is array of series objects.
 */ function isArrayOfSeries(value) {
    return Array.isArray(value) && value.every((_)=>Array.isArray(_) || safeHasProperty(_, "data"));
}
/**
 * Checks if provided value object is multi value (contains x or y properties)
 */ function isMultiValue(value) {
    return typeof value === "object" && value !== null && (Reflect.has(value, "x") || Reflect.has(value, "y"));
}
/**
 * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
 */ function getMultiValue(value) {
    let dimension = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
    if (isMultiValue(value) && safeHasProperty(value, dimension)) return getNumberOrUndefined(value[dimension]);
    else return getNumberOrUndefined(value);
}
/**
 * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
 * @param data The array that contains the data to be visualized in the chart
 * @param options The Object that contains the chart options
 * @param dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
 * @return An object that contains the highest and lowest value that will be visualized on the chart.
 */ function getHighLow(data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = {
        ...options,
        ...dimension ? dimension === "x" ? options.axisX : options.axisY : {}
    };
    const highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
    };
    const findHigh = options.high === undefined;
    const findLow = options.low === undefined;
    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(sourceData) {
        if (isDataHoleValue(sourceData)) return;
        else if (Array.isArray(sourceData)) for(let i = 0; i < sourceData.length; i++)recursiveHighLow(sourceData[i]);
        else {
            const value = Number(dimension && safeHasProperty(sourceData, dimension) ? sourceData[dimension] : sourceData);
            if (findHigh && value > highLow.high) highLow.high = value;
            if (findLow && value < highLow.low) highLow.low = value;
        }
    }
    // Start to find highest and lowest number recursively
    if (findHigh || findLow) recursiveHighLow(data);
    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
    }
    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) highLow.high = 1;
        else if (highLow.low < 0) // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
        else if (highLow.high > 0) // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
        else {
            // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
            highLow.high = 1;
            highLow.low = 0;
        }
    }
    return highLow;
}
function normalizeData(data) {
    let reverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, multi = arguments.length > 2 ? arguments[2] : void 0, distributed = arguments.length > 3 ? arguments[3] : void 0;
    let labelCount;
    const normalized = {
        labels: (data.labels || []).slice(),
        series: normalizeSeries(data.series, multi, distributed)
    };
    const inputLabelCount = normalized.labels.length;
    // If all elements of the normalized data array are arrays we're dealing with
    // multi series data and we need to find the largest series if they are un-even
    if (isArrayOfArrays(normalized.series)) {
        // Getting the series with the the most elements
        labelCount = Math.max(inputLabelCount, ...normalized.series.map((series)=>series.length));
        normalized.series.forEach((series)=>{
            series.push(...times(Math.max(0, labelCount - series.length)));
        });
    } else // We're dealing with Pie data so we just take the normalized array length
    labelCount = normalized.series.length;
    // Padding the labels to labelCount with empty strings
    normalized.labels.push(...times(Math.max(0, labelCount - inputLabelCount), ()=>""));
    if (reverse) reverseData(normalized);
    return normalized;
}
/**
 * Reverses the series, labels and series data arrays.
 */ function reverseData(data) {
    var ref;
    (ref = data.labels) === null || ref === void 0 || ref.reverse();
    data.series.reverse();
    for (const series of data.series){
        if (safeHasProperty(series, "data")) series.data.reverse();
        else if (Array.isArray(series)) series.reverse();
    }
}
function normalizeMulti(value, multi) {
    // We need to prepare multi value output (x and y data)
    let x;
    let y;
    // Single series value arrays are assumed to specify the Y-Axis value
    // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
    // If multi is a string then it's assumed that it specified which dimension should be filled as default
    if (typeof value !== "object") {
        const num = getNumberOrUndefined(value);
        if (multi === "x") x = num;
        else y = num;
    } else {
        if (safeHasProperty(value, "x")) x = getNumberOrUndefined(value.x);
        if (safeHasProperty(value, "y")) y = getNumberOrUndefined(value.y);
    }
    if (x === undefined && y === undefined) return undefined;
    return {
        x,
        y
    };
}
function normalizePrimitive(value, multi) {
    if (isDataHoleValue(value)) // We're dealing with a hole in the data and therefore need to return undefined
    // We're also returning undefined for multi value output
    return undefined;
    if (multi) return normalizeMulti(value, multi);
    return getNumberOrUndefined(value);
}
function normalizeSingleSeries(series, multi) {
    if (!Array.isArray(series)) // We are dealing with series object notation so we need to recurse on data property
    return normalizeSingleSeries(series.data, multi);
    return series.map((value)=>{
        if (safeHasProperty(value, "value")) // We are dealing with value object notation so we need to recurse on value property
        return normalizePrimitive(value.value, multi);
        return normalizePrimitive(value, multi);
    });
}
function normalizeSeries(series, multi, distributed) {
    if (isArrayOfSeries(series)) return series.map((_)=>normalizeSingleSeries(_, multi));
    const normalizedSeries = normalizeSingleSeries(series, multi);
    if (distributed) return normalizedSeries.map((value)=>[
            value
        ]);
    return normalizedSeries;
}
/**
 * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
 * valueData property describing the segment.
 *
 * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
 * points with undefined values are discarded.
 *
 * **Options**
 * The following options are used to determine how segments are formed
 * ```javascript
 * var options = {
 *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
 *   fillHoles: false,
 *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
 *   increasingX: false
 * };
 * ```
 *
 * @param pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
 * @param valueData List of associated point values in the form [v1, v2 .. vn]
 * @param options Options set by user
 * @return List of segments, each containing a pathCoordinates and valueData property.
 */ function splitIntoSegments(pathCoordinates, valueData, options) {
    const finalOptions = {
        increasingX: false,
        fillHoles: false,
        ...options
    };
    const segments = [];
    let hole = true;
    for(let i = 0; i < pathCoordinates.length; i += 2){
        // If this value is a "hole" we set the hole flag
        if (getMultiValue(valueData[i / 2].value) === undefined) // if(valueData[i / 2].value === undefined) {
        {
            if (!finalOptions.fillHoles) hole = true;
        } else {
            if (finalOptions.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) // X is not increasing, so we need to make sure we start a new segment
            hole = true;
            // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
            if (hole) {
                segments.push({
                    pathCoordinates: [],
                    valueData: []
                });
                // As we have a valid value now, we are not in a "hole" anymore
                hole = false;
            }
            // Add to the segment pathCoordinates and valueData
            segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
            segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
    }
    return segments;
}
function serialize(data) {
    let serialized = "";
    if (data === null || data === undefined) return data;
    else if (typeof data === "number") serialized = "" + data;
    else if (typeof data === "object") serialized = JSON.stringify({
        data: data
    });
    else serialized = String(data);
    return Object.keys(escapingMap).reduce((result, key)=>result.replaceAll(key, escapingMap[key]), serialized);
}
function deserialize(data) {
    if (typeof data !== "string") return data;
    if (data === "NaN") return NaN;
    data = Object.keys(escapingMap).reduce((result, key)=>result.replaceAll(escapingMap[key], key), data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let parsedData = data;
    if (typeof data === "string") try {
        parsedData = JSON.parse(data);
        parsedData = parsedData.data !== undefined ? parsedData.data : parsedData;
    } catch (e) {
    /* Ingore */ }
    return parsedData;
}
/**
 * This helper class is to wrap multiple `Svg` elements into a list where you can call the `Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Svg` on multiple elements.
 * An instance of this class is also returned by `Svg.querySelectorAll`.
 */ class SvgList {
    call(method, args) {
        this.svgElements.forEach((element)=>Reflect.apply(element[method], element, args));
        return this;
    }
    attr() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("attr", args);
    }
    elem() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("elem", args);
    }
    root() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("root", args);
    }
    getNode() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("getNode", args);
    }
    foreignObject() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("foreignObject", args);
    }
    text() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("text", args);
    }
    empty() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("empty", args);
    }
    remove() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("remove", args);
    }
    addClass() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("addClass", args);
    }
    removeClass() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("removeClass", args);
    }
    removeAllClasses() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("removeAllClasses", args);
    }
    animate() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return this.call("animate", args);
    }
    /**
   * @param nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   */ constructor(nodeList){
        this.svgElements = [];
        for(let i = 0; i < nodeList.length; i++)this.svgElements.push(new Svg(nodeList[i]));
    }
}
/**
 * This Object contains some standard easing cubic bezier curves.
 * Then can be used with their name in the `Svg.animate`.
 * You can also extend the list and use your own name in the `animate` function.
 * Click the show code button to see the available bezier functions.
 */ const easings = {
    easeInSine: [
        0.47,
        0,
        0.745,
        0.715
    ],
    easeOutSine: [
        0.39,
        0.575,
        0.565,
        1
    ],
    easeInOutSine: [
        0.445,
        0.05,
        0.55,
        0.95
    ],
    easeInQuad: [
        0.55,
        0.085,
        0.68,
        0.53
    ],
    easeOutQuad: [
        0.25,
        0.46,
        0.45,
        0.94
    ],
    easeInOutQuad: [
        0.455,
        0.03,
        0.515,
        0.955
    ],
    easeInCubic: [
        0.55,
        0.055,
        0.675,
        0.19
    ],
    easeOutCubic: [
        0.215,
        0.61,
        0.355,
        1
    ],
    easeInOutCubic: [
        0.645,
        0.045,
        0.355,
        1
    ],
    easeInQuart: [
        0.895,
        0.03,
        0.685,
        0.22
    ],
    easeOutQuart: [
        0.165,
        0.84,
        0.44,
        1
    ],
    easeInOutQuart: [
        0.77,
        0,
        0.175,
        1
    ],
    easeInQuint: [
        0.755,
        0.05,
        0.855,
        0.06
    ],
    easeOutQuint: [
        0.23,
        1,
        0.32,
        1
    ],
    easeInOutQuint: [
        0.86,
        0,
        0.07,
        1
    ],
    easeInExpo: [
        0.95,
        0.05,
        0.795,
        0.035
    ],
    easeOutExpo: [
        0.19,
        1,
        0.22,
        1
    ],
    easeInOutExpo: [
        1,
        0,
        0,
        1
    ],
    easeInCirc: [
        0.6,
        0.04,
        0.98,
        0.335
    ],
    easeOutCirc: [
        0.075,
        0.82,
        0.165,
        1
    ],
    easeInOutCirc: [
        0.785,
        0.135,
        0.15,
        0.86
    ],
    easeInBack: [
        0.6,
        -0.28,
        0.735,
        0.045
    ],
    easeOutBack: [
        0.175,
        0.885,
        0.32,
        1.275
    ],
    easeInOutBack: [
        0.68,
        -0.55,
        0.265,
        1.55
    ]
};
function createAnimation(element, attribute, animationDefinition) {
    let createGuided = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, eventEmitter = arguments.length > 4 ? arguments[4] : void 0;
    const { easing, ...def } = animationDefinition;
    const attributeProperties = {};
    let animationEasing;
    let timeout;
    // Check if an easing is specified in the definition object and delete it from the object as it will not
    // be part of the animate element attributes.
    if (easing) // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
    animationEasing = Array.isArray(easing) ? easing : easings[easing];
    // If numeric dur or begin was provided we assume milli seconds
    def.begin = ensureUnit(def.begin, "ms");
    def.dur = ensureUnit(def.dur, "ms");
    if (animationEasing) {
        def.calcMode = "spline";
        def.keySplines = animationEasing.join(" ");
        def.keyTimes = "0;1";
    }
    // Adding "fill: freeze" if we are in guided mode and set initial attribute values
    if (createGuided) {
        def.fill = "freeze";
        // Animated property on our element should already be set to the animation from value in guided mode
        attributeProperties[attribute] = def.from;
        element.attr(attributeProperties);
        // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
        // which needs to be in ms aside
        timeout = quantity(def.begin || 0).value;
        def.begin = "indefinite";
    }
    const animate = element.elem("animate", {
        attributeName: attribute,
        ...def
    });
    if (createGuided) // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
    setTimeout(()=>{
        // If beginElement fails we set the animated attribute to the end position and remove the animate element
        // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occurred in
        // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
        try {
            // @ts-expect-error Try legacy API.
            animate._node.beginElement();
        } catch (err) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = def.to;
            element.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
        }
    }, timeout);
    const animateNode = animate.getNode();
    if (eventEmitter) animateNode.addEventListener("beginEvent", ()=>eventEmitter.emit("animationBegin", {
            element: element,
            animate: animateNode,
            params: animationDefinition
        }));
    animateNode.addEventListener("endEvent", ()=>{
        if (eventEmitter) eventEmitter.emit("animationEnd", {
            element: element,
            animate: animateNode,
            params: animationDefinition
        });
        if (createGuided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = def.to;
            element.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
        }
    });
}
/**
 * Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
 */ class Svg {
    attr(attributes, ns) {
        if (typeof attributes === "string") {
            if (ns) return this._node.getAttributeNS(ns, attributes);
            else return this._node.getAttribute(attributes);
        }
        Object.keys(attributes).forEach((key)=>{
            // If the attribute value is undefined we can skip this one
            if (attributes[key] === undefined) return;
            if (key.indexOf(":") !== -1) {
                const namespacedAttribute = key.split(":");
                this._node.setAttributeNS(namespaces[namespacedAttribute[0]], key, String(attributes[key]));
            } else this._node.setAttribute(key, String(attributes[key]));
        });
        return this;
    }
    /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   * @param name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param className This class or class list will be added to the SVG element
   * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return Returns a Svg wrapper object that can be used to modify the containing SVG data
   */ elem(name, attributes, className) {
        let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        return new Svg(name, attributes, className, this, insertFirst);
    }
    /**
   * Returns the parent Chartist.SVG wrapper object
   * @return Returns a Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */ parent() {
        return this._node.parentNode instanceof SVGElement ? new Svg(this._node.parentNode) : null;
    }
    /**
   * This method returns a Svg wrapper around the root SVG element of the current tree.
   * @return The root SVG element wrapped in a Svg element
   */ root() {
        let node = this._node;
        while(node.nodeName !== "svg"){
            if (node.parentElement) node = node.parentElement;
            else break;
        }
        return new Svg(node);
    }
    /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Svg wrapper.
   * @param selector A CSS selector that is used to query for child SVG elements
   * @return The SVG wrapper for the element found or null if no element was found
   */ querySelector(selector) {
        const foundNode = this._node.querySelector(selector);
        return foundNode ? new Svg(foundNode) : null;
    }
    /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Svg.List wrapper.
   * @param selector A CSS selector that is used to query for child SVG elements
   * @return The SVG wrapper list for the element found or null if no element was found
   */ querySelectorAll(selector) {
        const foundNodes = this._node.querySelectorAll(selector);
        return new SvgList(foundNodes);
    }
    /**
   * Returns the underlying SVG node for the current element.
   */ getNode() {
        return this._node;
    }
    /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   * @param content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param attributes An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param className This class or class list will be added to the SVG element
   * @param insertFirst Specifies if the foreignObject should be inserted as first child
   * @return New wrapper object that wraps the foreignObject element
   */ foreignObject(content, attributes, className) {
        let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        let contentNode;
        // If content is string then we convert it to DOM
        // TODO: Handle case where content is not a string nor a DOM Node
        if (typeof content === "string") {
            const container = document.createElement("div");
            container.innerHTML = content;
            contentNode = container.firstChild;
        } else contentNode = content;
        if (contentNode instanceof Element) // Adding namespace to content element
        contentNode.setAttribute("xmlns", namespaces.xmlns);
        // Creating the foreignObject without required extension attribute (as described here
        // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
        const fnObj = this.elem("foreignObject", attributes, className, insertFirst);
        // Add content to foreignObjectElement
        fnObj._node.appendChild(contentNode);
        return fnObj;
    }
    /**
   * This method adds a new text element to the current Svg wrapper.
   * @param t The text that should be added to the text element that is created
   * @return The same wrapper object that was used to add the newly created element
   */ text(t) {
        this._node.appendChild(document.createTextNode(t));
        return this;
    }
    /**
   * This method will clear all child nodes of the current wrapper object.
   * @return The same wrapper object that got emptied
   */ empty() {
        while(this._node.firstChild)this._node.removeChild(this._node.firstChild);
        return this;
    }
    /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   * @return The parent wrapper object of the element that got removed
   */ remove() {
        var ref;
        (ref = this._node.parentNode) === null || ref === void 0 || ref.removeChild(this._node);
        return this.parent();
    }
    /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   * @param newElement The new Svg object that will be used to replace the current wrapper object
   * @return The wrapper of the new element
   */ replace(newElement) {
        var ref;
        (ref = this._node.parentNode) === null || ref === void 0 || ref.replaceChild(newElement._node, this._node);
        return newElement;
    }
    /**
   * This method will append an element to the current element as a child.
   * @param element The Svg element that should be added as a child
   * @param insertFirst Specifies if the element should be inserted as first child
   * @return The wrapper of the appended object
   */ append(element) {
        let insertFirst = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (insertFirst && this._node.firstChild) this._node.insertBefore(element._node, this._node.firstChild);
        else this._node.appendChild(element._node);
        return this;
    }
    /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   * @return A list of classes or an empty array if there are no classes on the current element
   */ classes() {
        const classNames = this._node.getAttribute("class");
        return classNames ? classNames.trim().split(/\s+/) : [];
    }
    /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   * @param names A white space separated list of class names
   * @return The wrapper of the current element
   */ addClass(names) {
        this._node.setAttribute("class", this.classes().concat(names.trim().split(/\s+/)).filter(function(elem, pos, self) {
            return self.indexOf(elem) === pos;
        }).join(" "));
        return this;
    }
    /**
   * Removes one or a space separated list of classes from the current element.
   * @param names A white space separated list of class names
   * @return The wrapper of the current element
   */ removeClass(names) {
        const removedClasses = names.trim().split(/\s+/);
        this._node.setAttribute("class", this.classes().filter((name)=>removedClasses.indexOf(name) === -1).join(" "));
        return this;
    }
    /**
   * Removes all classes from the current element.
   * @return The wrapper of the current element
   */ removeAllClasses() {
        this._node.setAttribute("class", "");
        return this;
    }
    /**
   * Get element height using `getBoundingClientRect`
   * @return The elements height in pixels
   */ height() {
        return this._node.getBoundingClientRect().height;
    }
    /**
   * Get element width using `getBoundingClientRect`
   * @return The elements width in pixels
   */ width() {
        return this._node.getBoundingClientRect().width;
    }
    /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   * @param animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return The current element where the animation was added
   */ animate(animations) {
        let guided = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, eventEmitter = arguments.length > 2 ? arguments[2] : void 0;
        Object.keys(animations).forEach((attribute)=>{
            const attributeAnimation = animations[attribute];
            // If current attribute is an array of definition objects we create an animate for each and disable guided mode
            if (Array.isArray(attributeAnimation)) attributeAnimation.forEach((animationDefinition)=>createAnimation(this, attribute, animationDefinition, false, eventEmitter));
            else createAnimation(this, attribute, attributeAnimation, guided, eventEmitter);
        });
        return this;
    }
    /**
   * @param name The name of the SVG element to create or an SVG dom element which should be wrapped into Svg
   * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param className This class or class list will be added to the SVG element
   * @param parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */ constructor(name, attributes, className, parent, insertFirst = false){
        // If Svg is getting called with an SVG element we just return the wrapper
        if (name instanceof Element) this._node = name;
        else {
            this._node = document.createElementNS(namespaces.svg, name);
            // If this is an SVG element created then custom namespace
            if (name === "svg") this.attr({
                "xmlns:ct": namespaces.ct
            });
        }
        if (attributes) this.attr(attributes);
        if (className) this.addClass(className);
        if (parent) {
            if (insertFirst && parent._node.firstChild) parent._node.insertBefore(this._node, parent._node.firstChild);
            else parent._node.appendChild(this._node);
        }
    }
}
/**
   * @todo Only there for chartist <1 compatibility. Remove after deprecation warining.
   * @deprecated Use the animation module export `easings` directly.
   */ Svg.Easing = easings;
/**
 * Create or reinitialize the SVG element for the chart
 * @param container The containing DOM Node object that will be used to plant the SVG element
 * @param width Set the width of the SVG element. Default is 100%
 * @param height Set the height of the SVG element. Default is 100%
 * @param className Specify a class to be added to the SVG element
 * @return The created/reinitialized SVG element
 */ function createSvg(container) {
    let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "100%", height = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "100%", className = arguments.length > 3 ? arguments[3] : void 0;
    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.from(container.querySelectorAll("svg")).filter((svg)=>svg.getAttributeNS(namespaces.xmlns, "ct")).forEach((svg)=>container.removeChild(svg));
    // Create svg object with width and height or use 100% as default
    const svg1 = new Svg("svg").attr({
        width,
        height
    }).attr({
        // TODO: Check better solution (browser support) and remove inline styles due to CSP
        style: "width: ".concat(width, "; height: ").concat(height, ";")
    });
    if (className) svg1.addClass(className);
    // Add the DOM node to our container
    container.appendChild(svg1.getNode());
    return svg1;
}
/**
 * Converts a number into a padding object.
 * @param padding
 * @param fallback This value is used to fill missing values if a incomplete padding object was passed
 * @returns Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
 */ function normalizePadding(padding) {
    return typeof padding === "number" ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    } : padding === undefined ? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    } : {
        top: typeof padding.top === "number" ? padding.top : 0,
        right: typeof padding.right === "number" ? padding.right : 0,
        bottom: typeof padding.bottom === "number" ? padding.bottom : 0,
        left: typeof padding.left === "number" ? padding.left : 0
    };
}
/**
 * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
 * @param svg The svg element for the chart
 * @param options The Object that contains all the optional values for the chart
 * @return The chart rectangles coordinates inside the svg element plus the rectangles measurements
 */ function createChartRect(svg, options) {
    var ref, ref1, ref2, ref3;
    const hasAxis = Boolean(options.axisX || options.axisY);
    const yAxisOffset = ((ref = options.axisY) === null || ref === void 0 ? void 0 : ref.offset) || 0;
    const xAxisOffset = ((ref1 = options.axisX) === null || ref1 === void 0 ? void 0 : ref1.offset) || 0;
    const yAxisPosition = (ref2 = options.axisY) === null || ref2 === void 0 ? void 0 : ref2.position;
    const xAxisPosition = (ref3 = options.axisX) === null || ref3 === void 0 ? void 0 : ref3.position;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    let width = svg.width() || quantity(options.width).value || 0;
    let height = svg.height() || quantity(options.height).value || 0;
    const normalizedPadding = normalizePadding(options.chartPadding);
    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
    const chartRect = {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0,
        padding: normalizedPadding,
        width () {
            return this.x2 - this.x1;
        },
        height () {
            return this.y1 - this.y2;
        }
    };
    if (hasAxis) {
        if (xAxisPosition === "start") {
            chartRect.y2 = normalizedPadding.top + xAxisOffset;
            chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
            chartRect.y2 = normalizedPadding.top;
            chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }
        if (yAxisPosition === "start") {
            chartRect.x1 = normalizedPadding.left + yAxisOffset;
            chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
            chartRect.x1 = normalizedPadding.left;
            chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
    } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }
    return chartRect;
}
/**
 * Creates a grid line based on a projected value.
 */ function createGrid(position, index, axis, offset, length, group, classes, eventEmitter) {
    const positionalData = {
        ["".concat(axis.units.pos, "1")]: position,
        ["".concat(axis.units.pos, "2")]: position,
        ["".concat(axis.counterUnits.pos, "1")]: offset,
        ["".concat(axis.counterUnits.pos, "2")]: offset + length
    };
    const gridElement = group.elem("line", positionalData, classes.join(" "));
    // Event for grid draw
    eventEmitter.emit("draw", {
        type: "grid",
        axis,
        index,
        group,
        element: gridElement,
        ...positionalData
    });
}
/**
 * Creates a grid background rect and emits the draw event.
 */ function createGridBackground(gridGroup, chartRect, className, eventEmitter) {
    const gridBackground = gridGroup.elem("rect", {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
    }, className, true);
    // Event for grid background draw
    eventEmitter.emit("draw", {
        type: "gridBackground",
        group: gridGroup,
        element: gridBackground
    });
}
/**
 * Creates a label based on a projected value and an axis.
 */ function createLabel(position, length, index, label, axis, axisOffset, labelOffset, group, classes, eventEmitter) {
    const positionalData = {
        [axis.units.pos]: position + labelOffset[axis.units.pos],
        [axis.counterUnits.pos]: labelOffset[axis.counterUnits.pos],
        [axis.units.len]: length,
        [axis.counterUnits.len]: Math.max(0, axisOffset - 10)
    };
    // We need to set width and height explicitly to px as span will not expand with width and height being
    // 100% in all browsers
    const stepLength = Math.round(positionalData[axis.units.len]);
    const stepCounterLength = Math.round(positionalData[axis.counterUnits.len]);
    const content = document.createElement("span");
    content.className = classes.join(" ");
    content.style[axis.units.len] = stepLength + "px";
    content.style[axis.counterUnits.len] = stepCounterLength + "px";
    content.textContent = String(label);
    const labelElement = group.foreignObject(content, {
        style: "overflow: visible;",
        ...positionalData
    });
    eventEmitter.emit("draw", {
        type: "label",
        axis,
        index,
        group,
        element: labelElement,
        text: label,
        ...positionalData
    });
}
/**
 * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
 * @param options Options set by user
 * @param responsiveOptions Optional functions to add responsive behavior to chart
 * @param eventEmitter The event emitter that will be used to emit the options changed events
 * @return The consolidated options object from the defaults, base and matching responsive options
 */ function optionsProvider(options, responsiveOptions, eventEmitter) {
    let currentOptions;
    const mediaQueryListeners = [];
    function updateCurrentOptions(mediaEvent) {
        const previousOptions = currentOptions;
        currentOptions = extend({}, options);
        if (responsiveOptions) responsiveOptions.forEach((responsiveOption)=>{
            const mql = window.matchMedia(responsiveOption[0]);
            if (mql.matches) currentOptions = extend(currentOptions, responsiveOption[1]);
        });
        if (eventEmitter && mediaEvent) eventEmitter.emit("optionsChanged", {
            previousOptions,
            currentOptions
        });
    }
    function removeMediaQueryListeners() {
        mediaQueryListeners.forEach((mql)=>mql.removeEventListener("change", updateCurrentOptions));
    }
    if (!window.matchMedia) throw new Error("window.matchMedia not found! Make sure you're using a polyfill.");
    else if (responsiveOptions) responsiveOptions.forEach((responsiveOption)=>{
        const mql = window.matchMedia(responsiveOption[0]);
        mql.addEventListener("change", updateCurrentOptions);
        mediaQueryListeners.push(mql);
    });
    // Execute initially without an event argument so we get the correct options
    updateCurrentOptions();
    return {
        removeMediaQueryListeners,
        getCurrentOptions () {
            return currentOptions;
        }
    };
}
/**
 * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
 */ const elementDescriptions = {
    m: [
        "x",
        "y"
    ],
    l: [
        "x",
        "y"
    ],
    c: [
        "x1",
        "y1",
        "x2",
        "y2",
        "x",
        "y"
    ],
    a: [
        "rx",
        "ry",
        "xAr",
        "lAf",
        "sf",
        "x",
        "y"
    ]
};
/**
 * Default options for newly created SVG path objects.
 */ const defaultOptions$3 = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
};
function element(command, params, pathElements, pos, relative, data) {
    const pathElement = {
        command: relative ? command.toLowerCase() : command.toUpperCase(),
        ...params,
        ...data ? {
            data
        } : {}
    };
    pathElements.splice(pos, 0, pathElement);
}
function forEachParam(pathElements, cb) {
    pathElements.forEach((pathElement, pathElementIndex)=>{
        elementDescriptions[pathElement.command.toLowerCase()].forEach((paramName, paramIndex)=>{
            cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
    });
}
class SvgPath {
    /**
   * This static function on `SvgPath` is joining multiple paths together into one paths.
   * @param paths A list of paths to be joined together. The order is important.
   * @param close If the newly created path should be a closed path
   * @param options Path options for the newly created path.
   */ static join(paths) {
        let close = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, options = arguments.length > 2 ? arguments[2] : void 0;
        const joinedPath = new SvgPath(close, options);
        for(let i = 0; i < paths.length; i++){
            const path = paths[i];
            for(let j = 0; j < path.pathElements.length; j++)joinedPath.pathElements.push(path.pathElements[j]);
        }
        return joinedPath;
    }
    position(pos) {
        if (pos !== undefined) {
            this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
            return this;
        } else return this.pos;
    }
    /**
   * Removes elements from the path starting at the current position.
   * @param count Number of path elements that should be removed from the current position.
   * @return The current path object for easy call chaining.
   */ remove(count) {
        this.pathElements.splice(this.pos, count);
        return this;
    }
    /**
   * Use this function to add a new move SVG path element.
   * @param x The x coordinate for the move element.
   * @param y The y coordinate for the move element.
   * @param relative If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param data Any data that should be stored with the element object that will be accessible in pathElement
   * @return The current path object for easy call chaining.
   */ move(x, y) {
        let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, data = arguments.length > 3 ? arguments[3] : void 0;
        element("M", {
            x: +x,
            y: +y
        }, this.pathElements, this.pos++, relative, data);
        return this;
    }
    /**
   * Use this function to add a new line SVG path element.
   * @param x The x coordinate for the line element.
   * @param y The y coordinate for the line element.
   * @param relative If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param data Any data that should be stored with the element object that will be accessible in pathElement
   * @return The current path object for easy call chaining.
   */ line(x, y) {
        let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, data = arguments.length > 3 ? arguments[3] : void 0;
        element("L", {
            x: +x,
            y: +y
        }, this.pathElements, this.pos++, relative, data);
        return this;
    }
    /**
   * Use this function to add a new curve SVG path element.
   * @param x1 The x coordinate for the first control point of the bezier curve.
   * @param y1 The y coordinate for the first control point of the bezier curve.
   * @param x2 The x coordinate for the second control point of the bezier curve.
   * @param y2 The y coordinate for the second control point of the bezier curve.
   * @param x The x coordinate for the target point of the curve element.
   * @param y The y coordinate for the target point of the curve element.
   * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param data Any data that should be stored with the element object that will be accessible in pathElement
   * @return The current path object for easy call chaining.
   */ curve(x1, y1, x2, y2, x, y) {
        let relative = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, data = arguments.length > 7 ? arguments[7] : void 0;
        element("C", {
            x1: +x1,
            y1: +y1,
            x2: +x2,
            y2: +y2,
            x: +x,
            y: +y
        }, this.pathElements, this.pos++, relative, data);
        return this;
    }
    /**
   * Use this function to add a new non-bezier curve SVG path element.
   * @param rx The radius to be used for the x-axis of the arc.
   * @param ry The radius to be used for the y-axis of the arc.
   * @param xAr Defines the orientation of the arc
   * @param lAf Large arc flag
   * @param sf Sweep flag
   * @param x The x coordinate for the target point of the curve element.
   * @param y The y coordinate for the target point of the curve element.
   * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param data Any data that should be stored with the element object that will be accessible in pathElement
   * @return The current path object for easy call chaining.
   */ arc(rx, ry, xAr, lAf, sf, x, y) {
        let relative = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : false, data = arguments.length > 8 ? arguments[8] : void 0;
        element("A", {
            rx,
            ry,
            xAr,
            lAf,
            sf,
            x,
            y
        }, this.pathElements, this.pos++, relative, data);
        return this;
    }
    /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   * @param path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return The current path object for easy call chaining.
   */ parse(path) {
        // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
        const chunks = path.replace(/([A-Za-z])(-?[0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce((result, pathElement)=>{
            if (pathElement.match(/[A-Za-z]/)) result.push([]);
            result[result.length - 1].push(pathElement);
            return result;
        }, []);
        // If this is a closed path we remove the Z at the end because this is determined by the close option
        if (chunks[chunks.length - 1][0].toUpperCase() === "Z") chunks.pop();
        // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
        // For example {command: 'M', x: '10', y: '10'}
        const elements = chunks.map((chunk)=>{
            const command = chunk.shift();
            const description = elementDescriptions[command.toLowerCase()];
            return {
                command,
                ...description.reduce((result, paramName, index)=>{
                    result[paramName] = +chunk[index];
                    return result;
                }, {})
            };
        });
        // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
        this.pathElements.splice(this.pos, 0, ...elements);
        // Increase the internal position by the element count
        this.pos += elements.length;
        return this;
    }
    /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   */ stringify() {
        const accuracyMultiplier = Math.pow(10, this.options.accuracy);
        return this.pathElements.reduce((path, pathElement)=>{
            const params = elementDescriptions[pathElement.command.toLowerCase()].map((paramName)=>{
                const value = pathElement[paramName];
                return this.options.accuracy ? Math.round(value * accuracyMultiplier) / accuracyMultiplier : value;
            });
            return path + pathElement.command + params.join(",");
        }, "") + (this.close ? "Z" : "");
    }
    /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   * @param x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return The current path object for easy call chaining.
   */ scale(x, y) {
        forEachParam(this.pathElements, (pathElement, paramName)=>{
            pathElement[paramName] *= paramName[0] === "x" ? x : y;
        });
        return this;
    }
    /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   * @param x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return The current path object for easy call chaining.
   */ translate(x, y) {
        forEachParam(this.pathElements, (pathElement, paramName)=>{
            pathElement[paramName] += paramName[0] === "x" ? x : y;
        });
        return this;
    }
    /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   * @param transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return The current path object for easy call chaining.
   */ transform(transformFnc) {
        forEachParam(this.pathElements, (pathElement, paramName, pathElementIndex, paramIndex, pathElements)=>{
            const transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
            if (transformed || transformed === 0) pathElement[paramName] = transformed;
        });
        return this;
    }
    /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   * @param close Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   */ clone() {
        let close = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const clone = new SvgPath(close || this.close);
        clone.pos = this.pos;
        clone.pathElements = this.pathElements.slice().map((pathElement)=>({
                ...pathElement
            }));
        clone.options = {
            ...this.options
        };
        return clone;
    }
    /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   * @param command The command you'd like to use to split the path
   */ splitByCommand(command) {
        const split = [
            new SvgPath()
        ];
        this.pathElements.forEach((pathElement)=>{
            if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) split.push(new SvgPath());
            split[split.length - 1].pathElements.push(pathElement);
        });
        return split;
    }
    /**
   * Used to construct a new path object.
   * @param close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param options Options object that overrides the default objects. See default options for more details.
   */ constructor(close = false, options){
        this.close = close;
        this.pathElements = [];
        this.pos = 0;
        this.options = {
            ...defaultOptions$3,
            ...options
        };
    }
}
/**
 * This interpolation function does not smooth the path and the result is only containing lines and no curves.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.none({
 *     fillHoles: false
 *   })
 * });
 * ```
 */ function none(options) {
    const finalOptions = {
        fillHoles: false,
        ...options
    };
    return function noneInterpolation(pathCoordinates, valueData) {
        const path = new SvgPath();
        let hole = true;
        for(let i = 0; i < pathCoordinates.length; i += 2){
            const currX = pathCoordinates[i];
            const currY = pathCoordinates[i + 1];
            const currData = valueData[i / 2];
            if (getMultiValue(currData.value) !== undefined) {
                if (hole) path.move(currX, currY, false, currData);
                else path.line(currX, currY, false, currData);
                hole = false;
            } else if (!finalOptions.fillHoles) hole = true;
        }
        return path;
    };
}
/**
 * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
 *
 * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.simple({
 *     divisor: 2,
 *     fillHoles: false
 *   })
 * });
 * ```
 *
 * @param options The options of the simple interpolation factory function.
 */ function simple(options) {
    const finalOptions = {
        divisor: 2,
        fillHoles: false,
        ...options
    };
    const d = 1 / Math.max(1, finalOptions.divisor);
    return function simpleInterpolation(pathCoordinates, valueData) {
        const path = new SvgPath();
        let prevX = 0;
        let prevY = 0;
        let prevData;
        for(let i = 0; i < pathCoordinates.length; i += 2){
            const currX = pathCoordinates[i];
            const currY = pathCoordinates[i + 1];
            const length = (currX - prevX) * d;
            const currData = valueData[i / 2];
            if (currData.value !== undefined) {
                if (prevData === undefined) path.move(currX, currY, false, currData);
                else path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
                prevX = currX;
                prevY = currY;
                prevData = currData;
            } else if (!finalOptions.fillHoles) {
                prevX = prevY = 0;
                prevData = undefined;
            }
        }
        return path;
    };
}
/**
 * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
 *
 * @example
 * ```ts
 * const chart = new Chartist.Line('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.step({
 *     postpone: true,
 *     fillHoles: false
 *   })
 * });
 * ```
 */ function step(options) {
    const finalOptions = {
        postpone: true,
        fillHoles: false,
        ...options
    };
    return function stepInterpolation(pathCoordinates, valueData) {
        const path = new SvgPath();
        let prevX = 0;
        let prevY = 0;
        let prevData;
        for(let i = 0; i < pathCoordinates.length; i += 2){
            const currX = pathCoordinates[i];
            const currY = pathCoordinates[i + 1];
            const currData = valueData[i / 2];
            // If the current point is also not a hole we can draw the step lines
            if (currData.value !== undefined) {
                if (prevData === undefined) path.move(currX, currY, false, currData);
                else {
                    if (finalOptions.postpone) // If postponed we should draw the step line with the value of the previous value
                    path.line(currX, prevY, false, prevData);
                    else // If not postponed we should draw the step line with the value of the current value
                    path.line(prevX, currY, false, currData);
                    // Line to the actual point (this should only be a Y-Axis movement
                    path.line(currX, currY, false, currData);
                }
                prevX = currX;
                prevY = currY;
                prevData = currData;
            } else if (!finalOptions.fillHoles) {
                prevX = prevY = 0;
                prevData = undefined;
            }
        }
        return path;
    };
}
/**
 * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
 *
 * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.cardinal({
 *     tension: 1,
 *     fillHoles: false
 *   })
 * });
 * ```
 *
 * @param options The options of the cardinal factory function.
 */ function cardinal(options) {
    const finalOptions = {
        tension: 1,
        fillHoles: false,
        ...options
    };
    const t = Math.min(1, Math.max(0, finalOptions.tension));
    const c = 1 - t;
    return function cardinalInterpolation(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        const segments = splitIntoSegments(pathCoordinates, valueData, {
            fillHoles: finalOptions.fillHoles
        });
        if (!segments.length) // If there were no segments return 'none' interpolation
        return none()([], []);
        else if (segments.length > 1) // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
        // For each segment we will recurse the cardinal function
        // Join the segment path data into a single path and return
        return SvgPath.join(segments.map((segment)=>cardinalInterpolation(segment.pathCoordinates, segment.valueData)));
        else {
            // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
            // segment
            pathCoordinates = segments[0].pathCoordinates;
            valueData = segments[0].valueData;
            // If less than two points we need to fallback to no smoothing
            if (pathCoordinates.length <= 4) return none()(pathCoordinates, valueData);
            const path = new SvgPath().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]);
            const z = false;
            for(let i = 0, iLen = pathCoordinates.length; iLen - 2 * Number(!z) > i; i += 2){
                const p = [
                    {
                        x: +pathCoordinates[i - 2],
                        y: +pathCoordinates[i - 1]
                    },
                    {
                        x: +pathCoordinates[i],
                        y: +pathCoordinates[i + 1]
                    },
                    {
                        x: +pathCoordinates[i + 2],
                        y: +pathCoordinates[i + 3]
                    },
                    {
                        x: +pathCoordinates[i + 4],
                        y: +pathCoordinates[i + 5]
                    }
                ];
                if (iLen - 4 === i) p[3] = p[2];
                else if (!i) p[0] = {
                    x: +pathCoordinates[i],
                    y: +pathCoordinates[i + 1]
                };
                path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
            }
            return path;
        }
    };
}
/**
 * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
 *
 * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
 *
 * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
 *
 * All smoothing functions within Chartist are factory functions that accept an options parameter.
 *
 * @example
 * ```ts
 * const chart = new LineChart('.ct-chart', {
 *   labels: [1, 2, 3, 4, 5],
 *   series: [[1, 2, 8, 1, 7]]
 * }, {
 *   lineSmooth: Interpolation.monotoneCubic({
 *     fillHoles: false
 *   })
 * });
 * ```
 *
 * @param options The options of the monotoneCubic factory function.
 */ function monotoneCubic(options) {
    const finalOptions = {
        fillHoles: false,
        ...options
    };
    return function monotoneCubicInterpolation(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        const segments = splitIntoSegments(pathCoordinates, valueData, {
            fillHoles: finalOptions.fillHoles,
            increasingX: true
        });
        if (!segments.length) // If there were no segments return 'Chartist.Interpolation.none'
        return none()([], []);
        else if (segments.length > 1) // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
        // For each segment we will recurse the monotoneCubic fn function
        // Join the segment path data into a single path and return
        return SvgPath.join(segments.map((segment)=>monotoneCubicInterpolation(segment.pathCoordinates, segment.valueData)));
        else {
            // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
            // segment
            pathCoordinates = segments[0].pathCoordinates;
            valueData = segments[0].valueData;
            // If less than three points we need to fallback to no smoothing
            if (pathCoordinates.length <= 4) return none()(pathCoordinates, valueData);
            const xs = [];
            const ys = [];
            const n = pathCoordinates.length / 2;
            const ms = [];
            const ds = [];
            const dys = [];
            const dxs = [];
            // Populate x and y coordinates into separate arrays, for readability
            for(let i = 0; i < n; i++){
                xs[i] = pathCoordinates[i * 2];
                ys[i] = pathCoordinates[i * 2 + 1];
            }
            // Calculate deltas and derivative
            for(let i1 = 0; i1 < n - 1; i1++){
                dys[i1] = ys[i1 + 1] - ys[i1];
                dxs[i1] = xs[i1 + 1] - xs[i1];
                ds[i1] = dys[i1] / dxs[i1];
            }
            // Determine desired slope (m) at each point using Fritsch-Carlson method
            // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation
            ms[0] = ds[0];
            ms[n - 1] = ds[n - 2];
            for(let i2 = 1; i2 < n - 1; i2++)if (ds[i2] === 0 || ds[i2 - 1] === 0 || ds[i2 - 1] > 0 !== ds[i2] > 0) ms[i2] = 0;
            else {
                ms[i2] = 3 * (dxs[i2 - 1] + dxs[i2]) / ((2 * dxs[i2] + dxs[i2 - 1]) / ds[i2 - 1] + (dxs[i2] + 2 * dxs[i2 - 1]) / ds[i2]);
                if (!isFinite(ms[i2])) ms[i2] = 0;
            }
            // Now build a path from the slopes
            const path = new SvgPath().move(xs[0], ys[0], false, valueData[0]);
            for(let i3 = 0; i3 < n - 1; i3++)path.curve(xs[i3] + dxs[i3] / 3, ys[i3] + ms[i3] * dxs[i3] / 3, xs[i3 + 1] - dxs[i3] / 3, ys[i3 + 1] - ms[i3 + 1] * dxs[i3] / 3, xs[i3 + 1], ys[i3 + 1], false, valueData[i3 + 1]);
            return path;
        }
    };
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    none: none,
    simple: simple,
    step: step,
    cardinal: cardinal,
    monotoneCubic: monotoneCubic
});
class EventEmitter {
    on(event, listener) {
        const { allListeners, listeners } = this;
        if (event === "*") allListeners.add(listener);
        else {
            if (!listeners.has(event)) listeners.set(event, new Set());
            listeners.get(event).add(listener);
        }
    }
    off(event, listener) {
        const { allListeners, listeners } = this;
        if (event === "*") {
            if (listener) allListeners.delete(listener);
            else allListeners.clear();
        } else if (listeners.has(event)) {
            const eventListeners = listeners.get(event);
            if (listener) eventListeners.delete(listener);
            else eventListeners.clear();
            if (!eventListeners.size) listeners.delete(event);
        }
    }
    /**
   * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
   * @param event The event name that should be triggered
   * @param data Arbitrary data that will be passed to the event handler callback functions
   */ emit(event, data) {
        const { allListeners, listeners } = this;
        // Only do something if there are event handlers with this name existing
        if (listeners.has(event)) listeners.get(event).forEach((listener)=>listener(data));
        // Emit event to star event handlers
        allListeners.forEach((listener)=>listener(event, data));
    }
    constructor(){
        this.listeners = new Map();
        this.allListeners = new Set();
    }
}
const instances = new WeakMap();
class BaseChart {
    // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
    /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   * @param data Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param options Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param override If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   */ update(data, options) {
        let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (data) {
            this.data = data || {};
            this.data.labels = this.data.labels || [];
            this.data.series = this.data.series || [];
            // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
            this.eventEmitter.emit("data", {
                type: "update",
                data: this.data
            });
        }
        if (options) {
            this.options = extend({}, override ? this.options : this.defaultOptions, options);
            // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
            // Otherwise we re-create the optionsProvider at this point
            if (!this.initializeTimeoutId) {
                var ref;
                (ref = this.optionsProvider) === null || ref === void 0 || ref.removeMediaQueryListeners();
                this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
            }
        }
        // Only re-created the chart if it has been initialized yet
        if (!this.initializeTimeoutId && this.optionsProvider) this.createChart(this.optionsProvider.getCurrentOptions());
        // Return a reference to the chart object to chain up calls
        return this;
    }
    /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   */ detach() {
        // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
        // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
        if (!this.initializeTimeoutId) {
            var ref;
            window.removeEventListener("resize", this.resizeListener);
            (ref = this.optionsProvider) === null || ref === void 0 || ref.removeMediaQueryListeners();
        } else window.clearTimeout(this.initializeTimeoutId);
        instances.delete(this.container);
        return this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    on(event, listener) {
        this.eventEmitter.on(event, listener);
        return this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    off(event, listener) {
        this.eventEmitter.off(event, listener);
        return this;
    }
    initialize() {
        // Add window resize listener that re-creates the chart
        window.addEventListener("resize", this.resizeListener);
        // Obtain current options based on matching media queries (if responsive options are given)
        // This will also register a listener that is re-creating the chart based on media changes
        this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        // Register options change listener that will trigger a chart update
        this.eventEmitter.on("optionsChanged", ()=>this.update());
        // Before the first chart creation we need to register us with all plugins that are configured
        // Initialize all relevant plugins with our chart object and the plugin options specified in the config
        if (this.options.plugins) this.options.plugins.forEach((plugin)=>{
            if (Array.isArray(plugin)) plugin[0](this, plugin[1]);
            else plugin(this);
        });
        // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
        this.eventEmitter.emit("data", {
            type: "initial",
            data: this.data
        });
        // Create the first chart
        this.createChart(this.optionsProvider.getCurrentOptions());
        // As chart is initialized from the event loop now we can reset our timeout reference
        // This is important if the chart gets initialized on the same element twice
        this.initializeTimeoutId = null;
    }
    constructor(query, data, defaultOptions, options, responsiveOptions){
        this.data = data;
        this.defaultOptions = defaultOptions;
        this.options = options;
        this.responsiveOptions = responsiveOptions;
        this.eventEmitter = new EventEmitter();
        this.resizeListener = ()=>this.update();
        this.initializeTimeoutId = setTimeout(()=>this.initialize(), 0);
        const container = typeof query === "string" ? document.querySelector(query) : query;
        if (!container) throw new Error("Target element is not found");
        this.container = container;
        const prevInstance = instances.get(container);
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (prevInstance) prevInstance.detach();
        instances.set(container, this);
    }
}
const axisUnits = {
    x: {
        pos: "x",
        len: "width",
        dir: "horizontal",
        rectStart: "x1",
        rectEnd: "x2",
        rectOffset: "y2"
    },
    y: {
        pos: "y",
        len: "height",
        dir: "vertical",
        rectStart: "y2",
        rectEnd: "y1",
        rectOffset: "x1"
    }
};
class Axis {
    createGridAndLabels(gridGroup, labelGroup, chartOptions, eventEmitter) {
        const axisOptions = this.units.pos === "x" ? chartOptions.axisX : chartOptions.axisY;
        const projectedValues = this.ticks.map((tick, i)=>this.projectValue(tick, i));
        const labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
        projectedValues.forEach((projectedValue, index)=>{
            const labelValue = labelValues[index];
            const labelOffset = {
                x: 0,
                y: 0
            };
            // TODO: Find better solution for solving this problem
            // Calculate how much space we have available for the label
            let labelLength;
            if (projectedValues[index + 1]) // If we still have one label ahead, we can calculate the distance to the next tick / label
            labelLength = projectedValues[index + 1] - projectedValue;
            else // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
            // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
            // still be visible inside of the chart padding.
            labelLength = Math.max(this.axisLength - projectedValue, this.axisLength / this.ticks.length);
            // Skip grid lines and labels where interpolated label values are falsey (except for 0)
            if (labelValue !== "" && isFalseyButZero(labelValue)) return;
            // Transform to global coordinates using the chartRect
            // We also need to set the label offset for the createLabel function
            if (this.units.pos === "x") {
                projectedValue = this.chartRect.x1 + projectedValue;
                labelOffset.x = chartOptions.axisX.labelOffset.x;
                // If the labels should be positioned in start position (top side for vertical axis) we need to set a
                // different offset as for positioned with end (bottom)
                if (chartOptions.axisX.position === "start") labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + 5;
                else labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + 5;
            } else {
                projectedValue = this.chartRect.y1 - projectedValue;
                labelOffset.y = chartOptions.axisY.labelOffset.y - labelLength;
                // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
                // different offset as for positioned with end (right side)
                if (chartOptions.axisY.position === "start") labelOffset.x = this.chartRect.padding.left + chartOptions.axisY.labelOffset.x;
                else labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
            }
            if (axisOptions.showGrid) createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
                chartOptions.classNames.grid,
                chartOptions.classNames[this.units.dir]
            ], eventEmitter);
            if (axisOptions.showLabel) createLabel(projectedValue, labelLength, index, labelValue, this, axisOptions.offset, labelOffset, labelGroup, [
                chartOptions.classNames.label,
                chartOptions.classNames[this.units.dir],
                axisOptions.position === "start" ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames.end
            ], eventEmitter);
        });
    }
    constructor(units, chartRect, ticks){
        this.units = units;
        this.chartRect = chartRect;
        this.ticks = ticks;
        this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
        this.axisLength = chartRect[this.units.rectEnd] - chartRect[this.units.rectStart];
        this.gridOffset = chartRect[this.units.rectOffset];
    }
}
class AutoScaleAxis extends Axis {
    projectValue(value) {
        const finalValue = Number(getMultiValue(value, this.units.pos));
        return this.axisLength * (finalValue - this.bounds.min) / this.bounds.range;
    }
    constructor(axisUnit, data, chartRect, options){
        // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
        const highLow = options.highLow || getHighLow(data, options, axisUnit.pos);
        const bounds = getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
        const range = {
            min: bounds.min,
            max: bounds.max
        };
        super(axisUnit, chartRect, bounds.values);
        this.bounds = bounds;
        this.range = range;
    }
}
class FixedScaleAxis extends Axis {
    projectValue(value) {
        const finalValue = Number(getMultiValue(value, this.units.pos));
        return this.axisLength * (finalValue - this.range.min) / (this.range.max - this.range.min);
    }
    constructor(axisUnit, data, chartRect, options){
        const highLow = options.highLow || getHighLow(data, options, axisUnit.pos);
        const divisor = options.divisor || 1;
        const ticks = (options.ticks || times(divisor, (index)=>highLow.low + (highLow.high - highLow.low) / divisor * index)).sort((a, b)=>Number(a) - Number(b));
        const range = {
            min: highLow.low,
            max: highLow.high
        };
        super(axisUnit, chartRect, ticks);
        this.range = range;
    }
}
class StepAxis extends Axis {
    projectValue(_value, index) {
        return this.stepLength * index;
    }
    constructor(axisUnit, _data, chartRect, options){
        const ticks = options.ticks || [];
        super(axisUnit, chartRect, ticks);
        const calc = Math.max(1, ticks.length - (options.stretch ? 1 : 0));
        this.stepLength = this.axisLength / calc;
        this.stretch = Boolean(options.stretch);
    }
}
function getSeriesOption(series, options, key) {
    var ref;
    if (safeHasProperty(series, "name") && series.name && ((ref = options.series) === null || ref === void 0 ? void 0 : ref[series.name])) {
        const seriesOptions = options === null || options === void 0 ? void 0 : options.series[series.name];
        const value = seriesOptions[key];
        const result = value === undefined ? options[key] : value;
        return result;
    } else return options[key];
}
/**
 * Default options in line charts. Expand the code view to see a detailed list of options with comments.
 */ const defaultOptions$2 = {
    // Options for X-Axis
    axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: "end",
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
            x: 0,
            y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
    },
    // Options for Y-Axis
    axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: "start",
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
            x: 0,
            y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // If the line chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
        chart: "ct-chart-line",
        label: "ct-label",
        labelGroup: "ct-labels",
        series: "ct-series",
        line: "ct-line",
        point: "ct-point",
        area: "ct-area",
        grid: "ct-grid",
        gridGroup: "ct-grids",
        gridBackground: "ct-grid-background",
        vertical: "ct-vertical",
        horizontal: "ct-horizontal",
        start: "ct-start",
        end: "ct-end"
    }
};
class LineChart extends BaseChart {
    /**
   * Creates a new chart
   */ createChart(options) {
        const { data } = this;
        const normalizedData = normalizeData(data, options.reverseData, true);
        // Create new svg object
        const svg = createSvg(this.container, options.width, options.height, options.classNames.chart);
        this.svg = svg;
        // Create groups for labels, grid and series
        const gridGroup = svg.elem("g").addClass(options.classNames.gridGroup);
        const seriesGroup = svg.elem("g");
        const labelGroup = svg.elem("g").addClass(options.classNames.labelGroup);
        const chartRect = createChartRect(svg, options);
        let axisX;
        let axisY;
        if (options.axisX.type === undefined) axisX = new StepAxis(axisUnits.x, normalizedData.series, chartRect, {
            ...options.axisX,
            ticks: normalizedData.labels,
            stretch: options.fullWidth
        });
        else // eslint-disable-next-line new-cap
        axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, options.axisX);
        if (options.axisY.type === undefined) axisY = new AutoScaleAxis(axisUnits.y, normalizedData.series, chartRect, {
            ...options.axisY,
            high: isNumeric(options.high) ? options.high : options.axisY.high,
            low: isNumeric(options.low) ? options.low : options.axisY.low
        });
        else // eslint-disable-next-line new-cap
        axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, options.axisY);
        axisX.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
        axisY.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
        if (options.showGridBackground) createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
        // Draw the series
        each(data.series, (series, seriesIndex)=>{
            const seriesElement = seriesGroup.elem("g");
            const seriesName = safeHasProperty(series, "name") && series.name;
            const seriesClassName = safeHasProperty(series, "className") && series.className;
            const seriesMeta = safeHasProperty(series, "meta") ? series.meta : undefined;
            // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
            if (seriesName) seriesElement.attr({
                "ct:series-name": seriesName
            });
            if (seriesMeta) seriesElement.attr({
                "ct:meta": serialize(seriesMeta)
            });
            // Use series class from series data or if not set generate one
            seriesElement.addClass([
                options.classNames.series,
                seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))
            ].join(" "));
            const pathCoordinates = [];
            const pathData = [];
            normalizedData.series[seriesIndex].forEach((value, valueIndex)=>{
                const p = {
                    x: chartRect.x1 + axisX.projectValue(value, valueIndex, normalizedData.series[seriesIndex]),
                    y: chartRect.y1 - axisY.projectValue(value, valueIndex, normalizedData.series[seriesIndex])
                };
                pathCoordinates.push(p.x, p.y);
                pathData.push({
                    value,
                    valueIndex,
                    meta: getMetaData(series, valueIndex)
                });
            });
            const seriesOptions = {
                lineSmooth: getSeriesOption(series, options, "lineSmooth"),
                showPoint: getSeriesOption(series, options, "showPoint"),
                showLine: getSeriesOption(series, options, "showLine"),
                showArea: getSeriesOption(series, options, "showArea"),
                areaBase: getSeriesOption(series, options, "areaBase")
            };
            let smoothing;
            if (typeof seriesOptions.lineSmooth === "function") smoothing = seriesOptions.lineSmooth;
            else smoothing = seriesOptions.lineSmooth ? monotoneCubic() : none();
            // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
            // index, value and meta data
            const path = smoothing(pathCoordinates, pathData);
            // If we should show points we need to create them now to avoid secondary loop
            // Points are drawn from the pathElements returned by the interpolation function
            // Small offset for Firefox to render squares correctly
            if (seriesOptions.showPoint) path.pathElements.forEach((pathElement)=>{
                const { data: pathElementData } = pathElement;
                const point = seriesElement.elem("line", {
                    x1: pathElement.x,
                    y1: pathElement.y,
                    x2: pathElement.x + 0.01,
                    y2: pathElement.y
                }, options.classNames.point);
                if (pathElementData) {
                    let x;
                    let y;
                    if (safeHasProperty(pathElementData.value, "x")) x = pathElementData.value.x;
                    if (safeHasProperty(pathElementData.value, "y")) y = pathElementData.value.y;
                    point.attr({
                        "ct:value": [
                            x,
                            y
                        ].filter(isNumeric).join(","),
                        "ct:meta": serialize(pathElementData.meta)
                    });
                }
                this.eventEmitter.emit("draw", {
                    type: "point",
                    value: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.value,
                    index: (pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.valueIndex) || 0,
                    meta: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.meta,
                    series,
                    seriesIndex,
                    axisX,
                    axisY,
                    group: seriesElement,
                    element: point,
                    x: pathElement.x,
                    y: pathElement.y,
                    chartRect
                });
            });
            if (seriesOptions.showLine) {
                const line = seriesElement.elem("path", {
                    d: path.stringify()
                }, options.classNames.line, true);
                this.eventEmitter.emit("draw", {
                    type: "line",
                    values: normalizedData.series[seriesIndex],
                    path: path.clone(),
                    chartRect,
                    // TODO: Remove redundant
                    index: seriesIndex,
                    series,
                    seriesIndex,
                    meta: seriesMeta,
                    axisX,
                    axisY,
                    group: seriesElement,
                    element: line
                });
            }
            // Area currently only works with axes that support a range!
            if (seriesOptions.showArea && axisY.range) {
                // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
                // the area is not drawn outside the chart area.
                const areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);
                // We project the areaBase value into screen coordinates
                const areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);
                // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
                path.splitByCommand("M") // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
                .filter((pathSegment)=>pathSegment.pathElements.length > 1).map((solidPathSegments)=>{
                    // Receiving the filtered solid path segments we can now convert those segments into fill areas
                    const firstElement = solidPathSegments.pathElements[0];
                    const lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];
                    // Cloning the solid path segment with closing option and removing the first move command from the clone
                    // We then insert a new move that should start at the area base and draw a straight line up or down
                    // at the end of the path we add an additional straight line to the projected area base value
                    // As the closing option is set our path will be automatically closed
                    return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
                }).forEach((areaPath)=>{
                    // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
                    // and adding the created DOM elements to the correct series group
                    const area = seriesElement.elem("path", {
                        d: areaPath.stringify()
                    }, options.classNames.area, true);
                    // Emit an event for each area that was drawn
                    this.eventEmitter.emit("draw", {
                        type: "area",
                        values: normalizedData.series[seriesIndex],
                        path: areaPath.clone(),
                        series,
                        seriesIndex,
                        axisX,
                        axisY,
                        chartRect,
                        // TODO: Remove redundant
                        index: seriesIndex,
                        group: seriesElement,
                        element: area,
                        meta: seriesMeta
                    });
                });
            }
        }, options.reverseData);
        this.eventEmitter.emit("created", {
            chartRect,
            axisX,
            axisY,
            svg,
            options
        });
    }
    /**
   * This method creates a new line chart.
   * @param query A selector query string or directly a DOM element
   * @param data The data object that needs to consist of a labels and a series array
   * @param options The options object with options that override the default options. Check the examples for a detailed list.
   * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return An object which exposes the API for the created chart
   *
   * @example
   * ```ts
   * // Create a simple line chart
   * const data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * const options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new LineChart('.ct-chart', data, options);
   * ```
   *
   * @example
   * ```ts
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * const chart = new LineChart('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   * ```
   *
   * @example
   * ```ts
   * // Create a line chart with responsive options
   *
   * const data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * const responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new LineChart('.ct-chart', data, null, responsiveOptions);
   * ```
   */ constructor(query, data, options, responsiveOptions){
        super(query, data, defaultOptions$2, extend({}, defaultOptions$2, options), responsiveOptions);
        this.data = data;
    }
}
function getSerialSums(series) {
    return serialMap(series, function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return Array.from(args).reduce((prev, curr)=>{
            return {
                x: prev.x + (safeHasProperty(curr, "x") ? curr.x : 0),
                y: prev.y + (safeHasProperty(curr, "y") ? curr.y : 0)
            };
        }, {
            x: 0,
            y: 0
        });
    });
}
/**
 * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
 */ const defaultOptions$1 = {
    // Options for X-Axis
    axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: "end",
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
            x: 0,
            y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: "start",
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
            x: 0,
            y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
    referenceValue: 0,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to true this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    // If set to 'accumulate-relative' positive and negative values will be handled separately.
    stackMode: "accumulate",
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If the bar chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
        chart: "ct-chart-bar",
        horizontalBars: "ct-horizontal-bars",
        label: "ct-label",
        labelGroup: "ct-labels",
        series: "ct-series",
        bar: "ct-bar",
        grid: "ct-grid",
        gridGroup: "ct-grids",
        gridBackground: "ct-grid-background",
        vertical: "ct-vertical",
        horizontal: "ct-horizontal",
        start: "ct-start",
        end: "ct-end"
    }
};
class BarChart extends BaseChart {
    /**
   * Creates a new chart
   */ createChart(options) {
        const { data } = this;
        const normalizedData = normalizeData(data, options.reverseData, options.horizontalBars ? "x" : "y", true);
        // Create new svg element
        const svg = createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? " " + options.classNames.horizontalBars : ""));
        const highLow = options.stackBars && options.stackMode !== true && normalizedData.series.length ? getHighLow([
            getSerialSums(normalizedData.series)
        ], options, options.horizontalBars ? "x" : "y") : getHighLow(normalizedData.series, options, options.horizontalBars ? "x" : "y");
        this.svg = svg;
        // Drawing groups in correct order
        const gridGroup = svg.elem("g").addClass(options.classNames.gridGroup);
        const seriesGroup = svg.elem("g");
        const labelGroup = svg.elem("g").addClass(options.classNames.labelGroup);
        // Overrides of high / low from settings
        if (typeof options.high === "number") highLow.high = options.high;
        if (typeof options.low === "number") highLow.low = options.low;
        const chartRect = createChartRect(svg, options);
        let valueAxis;
        const labelAxisTicks = options.distributeSeries && options.stackBars ? normalizedData.labels.slice(0, 1) : // as the bars are normalized
        normalizedData.labels;
        let labelAxis;
        let axisX;
        let axisY;
        // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
        if (options.horizontalBars) {
            if (options.axisX.type === undefined) valueAxis = axisX = new AutoScaleAxis(axisUnits.x, normalizedData.series, chartRect, {
                ...options.axisX,
                highLow: highLow,
                referenceValue: 0
            });
            else // eslint-disable-next-line new-cap
            valueAxis = axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, {
                ...options.axisX,
                highLow: highLow,
                referenceValue: 0
            });
            if (options.axisY.type === undefined) labelAxis = axisY = new StepAxis(axisUnits.y, normalizedData.series, chartRect, {
                ticks: labelAxisTicks
            });
            else // eslint-disable-next-line new-cap
            labelAxis = axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, options.axisY);
        } else {
            if (options.axisX.type === undefined) labelAxis = axisX = new StepAxis(axisUnits.x, normalizedData.series, chartRect, {
                ticks: labelAxisTicks
            });
            else // eslint-disable-next-line new-cap
            labelAxis = axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, options.axisX);
            if (options.axisY.type === undefined) valueAxis = axisY = new AutoScaleAxis(axisUnits.y, normalizedData.series, chartRect, {
                ...options.axisY,
                highLow: highLow,
                referenceValue: 0
            });
            else // eslint-disable-next-line new-cap
            valueAxis = axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, {
                ...options.axisY,
                highLow: highLow,
                referenceValue: 0
            });
        }
        // Projected 0 point
        const zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0);
        const isAccumulateStackMode = options.stackMode === "accumulate";
        const isAccumulateRelativeStackMode = options.stackMode === "accumulate-relative";
        // Used to track the screen coordinates of stacked bars
        const posStackedBarValues = [];
        const negStackedBarValues = [];
        let stackedBarValues = posStackedBarValues;
        labelAxis.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
        valueAxis.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
        if (options.showGridBackground) createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
        // Draw the series
        each(data.series, (series, seriesIndex)=>{
            // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
            const biPol = seriesIndex - (data.series.length - 1) / 2;
            // Half of the period width between vertical grid lines used to position bars
            let periodHalfLength;
            // We need to set periodHalfLength based on some options combinations
            if (options.distributeSeries && !options.stackBars) // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
            // which is the series count and divide by 2
            periodHalfLength = labelAxis.axisLength / normalizedData.series.length / 2;
            else if (options.distributeSeries && options.stackBars) // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
            // length by 2
            periodHalfLength = labelAxis.axisLength / 2;
            else // On regular bar charts we should just use the series length
            periodHalfLength = labelAxis.axisLength / normalizedData.series[seriesIndex].length / 2;
            // Adding the series group to the series element
            const seriesElement = seriesGroup.elem("g");
            const seriesName = safeHasProperty(series, "name") && series.name;
            const seriesClassName = safeHasProperty(series, "className") && series.className;
            const seriesMeta = safeHasProperty(series, "meta") ? series.meta : undefined;
            // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
            if (seriesName) seriesElement.attr({
                "ct:series-name": seriesName
            });
            if (seriesMeta) seriesElement.attr({
                "ct:meta": serialize(seriesMeta)
            });
            // Use series class from series data or if not set generate one
            seriesElement.addClass([
                options.classNames.series,
                seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))
            ].join(" "));
            normalizedData.series[seriesIndex].forEach((value, valueIndex)=>{
                const valueX = safeHasProperty(value, "x") && value.x;
                const valueY = safeHasProperty(value, "y") && value.y;
                let labelAxisValueIndex;
                // We need to set labelAxisValueIndex based on some options combinations
                if (options.distributeSeries && !options.stackBars) // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
                // on the step axis for label positioning
                labelAxisValueIndex = seriesIndex;
                else if (options.distributeSeries && options.stackBars) // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
                // 0 for projection on the label step axis
                labelAxisValueIndex = 0;
                else // On regular bar charts we just use the value index to project on the label step axis
                labelAxisValueIndex = valueIndex;
                let projected;
                // We need to transform coordinates differently based on the chart layout
                if (options.horizontalBars) projected = {
                    x: chartRect.x1 + valueAxis.projectValue(valueX || 0, valueIndex, normalizedData.series[seriesIndex]),
                    y: chartRect.y1 - labelAxis.projectValue(valueY || 0, labelAxisValueIndex, normalizedData.series[seriesIndex])
                };
                else projected = {
                    x: chartRect.x1 + labelAxis.projectValue(valueX || 0, labelAxisValueIndex, normalizedData.series[seriesIndex]),
                    y: chartRect.y1 - valueAxis.projectValue(valueY || 0, valueIndex, normalizedData.series[seriesIndex])
                };
                // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
                // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
                // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
                // add any automated positioning.
                if (labelAxis instanceof StepAxis) {
                    // Offset to center bar between grid lines, but only if the step axis is not stretched
                    if (!labelAxis.stretch) projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
                    // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
                    projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
                }
                // distinguish between positive and negative values in relative stack mode
                if (isAccumulateRelativeStackMode) stackedBarValues = valueY >= 0 || valueX >= 0 ? posStackedBarValues : negStackedBarValues;
                // Enter value in stacked bar values used to remember previous screen value for stacking up bars
                const previousStack = stackedBarValues[valueIndex] || zeroPoint;
                stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);
                // Skip if value is undefined
                if (value === undefined) return;
                const positions = {
                    ["".concat(labelAxis.units.pos, "1")]: projected[labelAxis.units.pos],
                    ["".concat(labelAxis.units.pos, "2")]: projected[labelAxis.units.pos]
                };
                if (options.stackBars && (isAccumulateStackMode || isAccumulateRelativeStackMode || !options.stackMode)) {
                    // Stack mode: accumulate (default)
                    // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
                    // We want backwards compatibility, so the expected fallback without the 'stackMode' option
                    // to be the original behaviour (accumulate)
                    positions["".concat(labelAxis.counterUnits.pos, "1")] = previousStack;
                    positions["".concat(labelAxis.counterUnits.pos, "2")] = stackedBarValues[valueIndex];
                } else {
                    // Draw from the zero line normally
                    // This is also the same code for Stack mode: overlap
                    positions["".concat(labelAxis.counterUnits.pos, "1")] = zeroPoint;
                    positions["".concat(labelAxis.counterUnits.pos, "2")] = projected[labelAxis.counterUnits.pos];
                }
                // Limit x and y so that they are within the chart rect
                positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
                positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
                positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
                positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
                const metaData = getMetaData(series, valueIndex);
                // Create bar element
                const bar = seriesElement.elem("line", positions, options.classNames.bar).attr({
                    "ct:value": [
                        valueX,
                        valueY
                    ].filter(isNumeric).join(","),
                    "ct:meta": serialize(metaData)
                });
                this.eventEmitter.emit("draw", {
                    type: "bar",
                    value,
                    index: valueIndex,
                    meta: metaData,
                    series,
                    seriesIndex,
                    axisX,
                    axisY,
                    chartRect,
                    group: seriesElement,
                    element: bar,
                    ...positions
                });
            });
        }, options.reverseData);
        this.eventEmitter.emit("created", {
            chartRect,
            axisX,
            axisY,
            svg,
            options
        });
    }
    /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   * @param query A selector query string or directly a DOM element
   * @param data The data object that needs to consist of a labels and a series array
   * @param options The options object with options that override the default options. Check the examples for a detailed list.
   * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return An object which exposes the API for the created chart
   *
   * @example
   * ```ts
   * // Create a simple bar chart
   * const data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new BarChart('.ct-chart', data);
   * ```
   *
   * @example
   * ```ts
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new BarChart('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   * ```
   */ constructor(query, data, options, responsiveOptions){
        super(query, data, defaultOptions$1, extend({}, defaultOptions$1, options), responsiveOptions);
        this.data = data;
    }
}
/**
 * Default options in line charts. Expand the code view to see a detailed list of options with comments.
 */ const defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
        chartPie: "ct-chart-pie",
        chartDonut: "ct-chart-donut",
        series: "ct-series",
        slicePie: "ct-slice-pie",
        sliceDonut: "ct-slice-donut",
        label: "ct-label"
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: "inside",
    // An interpolation function for the label value
    labelInterpolationFnc: noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: "neutral",
    // If true empty values will be ignored to avoid drawing unnecessary slices and labels
    ignoreEmptyValues: false
};
/**
 * Determines SVG anchor position based on direction and center parameter
 */ function determineAnchorPosition(center, label, direction) {
    const toTheRight = label.x > center.x;
    if (toTheRight && direction === "explode" || !toTheRight && direction === "implode") return "start";
    else if (toTheRight && direction === "implode" || !toTheRight && direction === "explode") return "end";
    else return "middle";
}
class PieChart extends BaseChart {
    /**
   * Creates the pie chart
   *
   * @param options
   */ createChart(options) {
        const { data } = this;
        const normalizedData = normalizeData(data);
        const seriesGroups = [];
        let labelsGroup;
        let labelRadius;
        let startAngle = options.startAngle;
        // Create SVG.js draw
        const svg = createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
        this.svg = svg;
        // Calculate charting rect
        const chartRect = createChartRect(svg, options);
        // Get biggest circle radius possible within chartRect
        let radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
        // Calculate total of all series to get reference value or use total reference from optional options
        const totalDataSum = options.total || normalizedData.series.reduce(sum, 0);
        const donutWidth = quantity(options.donutWidth);
        if (donutWidth.unit === "%") donutWidth.value *= radius / 100;
        // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
        // Unfortunately this is not possible with the current SVG Spec
        // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
        radius -= options.donut ? donutWidth.value / 2 : 0;
        // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
        // if regular pie chart it's half of the radius
        if (options.labelPosition === "outside" || options.donut) labelRadius = radius;
        else if (options.labelPosition === "center") // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
        else // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
        // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
        if (options.labelOffset) labelRadius += options.labelOffset;
        // Calculate end angle based on total sum and current data value and offset with padding
        const center = {
            x: chartRect.x1 + chartRect.width() / 2,
            y: chartRect.y2 + chartRect.height() / 2
        };
        // Check if there is only one non-zero value in the series array.
        const hasSingleValInSeries = data.series.filter((val)=>safeHasProperty(val, "value") ? val.value !== 0 : val !== 0).length === 1;
        // Creating the series groups
        data.series.forEach((_, index)=>seriesGroups[index] = svg.elem("g"));
        // if we need to show labels we create the label group now
        if (options.showLabel) labelsGroup = svg.elem("g");
        // Draw the series
        // initialize series groups
        data.series.forEach((series, index)=>{
            var ref, ref1;
            // If current value is zero and we are ignoring empty values then skip to next value
            if (normalizedData.series[index] === 0 && options.ignoreEmptyValues) return;
            const seriesName = safeHasProperty(series, "name") && series.name;
            const seriesClassName = safeHasProperty(series, "className") && series.className;
            const seriesMeta = safeHasProperty(series, "meta") ? series.meta : undefined;
            // If the series is an object and contains a name or meta data we add a custom attribute
            if (seriesName) seriesGroups[index].attr({
                "ct:series-name": seriesName
            });
            // Use series class from series data or if not set generate one
            seriesGroups[index].addClass([
                (ref = options.classNames) === null || ref === void 0 ? void 0 : ref.series,
                seriesClassName || "".concat((ref1 = options.classNames) === null || ref1 === void 0 ? void 0 : ref1.series, "-").concat(alphaNumerate(index))
            ].join(" "));
            // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
            let endAngle = totalDataSum > 0 ? startAngle + normalizedData.series[index] / totalDataSum * 360 : 0;
            // Use slight offset so there are no transparent hairline issues
            const overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
            // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
            // with Z and use 359.99 degrees
            if (endAngle - overlappigStartAngle >= 359.99) endAngle = overlappigStartAngle + 359.99;
            const start = polarToCartesian(center.x, center.y, radius, overlappigStartAngle);
            const end = polarToCartesian(center.x, center.y, radius, endAngle);
            // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
            const path = new SvgPath(!options.donut).move(end.x, end.y).arc(radius, radius, 0, Number(endAngle - startAngle > 180), 0, start.x, start.y);
            // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
            if (!options.donut) path.line(center.x, center.y);
            // Create the SVG path
            // If this is a donut chart we add the donut class, otherwise just a regular slice
            const pathElement = seriesGroups[index].elem("path", {
                d: path.stringify()
            }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);
            // Adding the pie series value to the path
            pathElement.attr({
                "ct:value": normalizedData.series[index],
                "ct:meta": serialize(seriesMeta)
            });
            // If this is a donut, we add the stroke-width as style attribute
            if (options.donut) pathElement.attr({
                style: "stroke-width: " + donutWidth.value + "px"
            });
            // Fire off draw event
            this.eventEmitter.emit("draw", {
                type: "slice",
                value: normalizedData.series[index],
                totalDataSum: totalDataSum,
                index,
                meta: seriesMeta,
                series,
                group: seriesGroups[index],
                element: pathElement,
                path: path.clone(),
                center,
                radius,
                startAngle,
                endAngle,
                chartRect
            });
            // If we need to show labels we need to add the label for this slice now
            if (options.showLabel) {
                let labelPosition;
                if (data.series.length === 1) // If we have only 1 series, we can position the label in the center of the pie
                labelPosition = {
                    x: center.x,
                    y: center.y
                };
                else // Position at the labelRadius distance from center and between start and end angle
                labelPosition = polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
                let rawValue;
                if (normalizedData.labels && !isFalseyButZero(normalizedData.labels[index])) rawValue = normalizedData.labels[index];
                else rawValue = normalizedData.series[index];
                const interpolatedValue = options.labelInterpolationFnc(rawValue, index);
                if (interpolatedValue || interpolatedValue === 0) {
                    const labelElement = labelsGroup.elem("text", {
                        dx: labelPosition.x,
                        dy: labelPosition.y,
                        "text-anchor": determineAnchorPosition(center, labelPosition, options.labelDirection)
                    }, options.classNames.label).text(String(interpolatedValue));
                    // Fire off draw event
                    this.eventEmitter.emit("draw", {
                        type: "label",
                        index,
                        group: labelsGroup,
                        element: labelElement,
                        text: "" + interpolatedValue,
                        chartRect,
                        series,
                        meta: seriesMeta,
                        ...labelPosition
                    });
                }
            }
            // Set next startAngle to current endAngle.
            // (except for last slice)
            startAngle = endAngle;
        });
        this.eventEmitter.emit("created", {
            chartRect,
            svg: svg,
            options
        });
    }
    /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   * @param query A selector query string or directly a DOM element
   * @param data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param options The options object with options that override the default options. Check the examples for a detailed list.
   * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   *
   * @example
   * ```ts
   * // Simple pie chart example with four series
   * new PieChart('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   * ```
   *
   * @example
   * ```ts
   * // Drawing a donut chart
   * new PieChart('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   * ```
   *
   * @example
   * ```ts
   * // Using donut, startAngle and total to draw a gauge chart
   * new PieChart('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   * ```
   *
   * @example
   * ```ts
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new PieChart('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   * ```
   *
   * @example
   * ```ts
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new PieChart('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   * ```
   */ constructor(query, data, options, responsiveOptions){
        super(query, data, defaultOptions, extend({}, defaultOptions, options), responsiveOptions);
        this.data = data;
    }
}

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

},{}],"bFLa2":[function() {},{}],"i07uf":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["km5uZ","bB7Pu"], "bB7Pu", "parcelRequire3e3e")

//# sourceMappingURL=index.3d214d75.js.map
