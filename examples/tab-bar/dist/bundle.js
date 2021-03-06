/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _bezier2 = __webpack_require__(25);

var _bezier3 = _interopRequireDefault(_bezier2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Remove Diacritics
var defaultDiacriticsRemovalap = [{ base: 'A', letters: 'A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' }, { base: 'AA', letters: '\uA732' }, { base: 'AE', letters: '\xC6\u01FC\u01E2' }, { base: 'AO', letters: '\uA734' }, { base: 'AU', letters: '\uA736' }, { base: 'AV', letters: '\uA738\uA73A' }, { base: 'AY', letters: '\uA73C' }, { base: 'B', letters: 'B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' }, { base: 'C', letters: 'C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E' }, { base: 'D', letters: 'D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779' }, { base: 'DZ', letters: '\u01F1\u01C4' }, { base: 'Dz', letters: '\u01F2\u01C5' }, { base: 'E', letters: 'E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' }, { base: 'F', letters: 'F\u24BB\uFF26\u1E1E\u0191\uA77B' }, { base: 'G', letters: 'G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' }, { base: 'H', letters: 'H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' }, { base: 'I', letters: 'I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' }, { base: 'J', letters: 'J\u24BF\uFF2A\u0134\u0248' }, { base: 'K', letters: 'K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' }, { base: 'L', letters: 'L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' }, { base: 'LJ', letters: '\u01C7' }, { base: 'Lj', letters: '\u01C8' }, { base: 'M', letters: 'M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' }, { base: 'N', letters: 'N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' }, { base: 'NJ', letters: '\u01CA' }, { base: 'Nj', letters: '\u01CB' }, { base: 'O', letters: 'O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C' }, { base: 'OI', letters: '\u01A2' }, { base: 'OO', letters: '\uA74E' }, { base: 'OU', letters: '\u0222' }, { base: 'OE', letters: '\x8C\u0152' }, { base: 'oe', letters: '\x9C\u0153' }, { base: 'P', letters: 'P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' }, { base: 'Q', letters: 'Q\u24C6\uFF31\uA756\uA758\u024A' }, { base: 'R', letters: 'R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' }, { base: 'S', letters: 'S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' }, { base: 'T', letters: 'T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' }, { base: 'TZ', letters: '\uA728' }, { base: 'U', letters: 'U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' }, { base: 'V', letters: 'V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' }, { base: 'VY', letters: '\uA760' }, { base: 'W', letters: 'W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' }, { base: 'X', letters: 'X\u24CD\uFF38\u1E8A\u1E8C' }, { base: 'Y', letters: 'Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' }, { base: 'Z', letters: 'Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' }, { base: 'a', letters: 'a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' }, { base: 'aa', letters: '\uA733' }, { base: 'ae', letters: '\xE6\u01FD\u01E3' }, { base: 'ao', letters: '\uA735' }, { base: 'au', letters: '\uA737' }, { base: 'av', letters: '\uA739\uA73B' }, { base: 'ay', letters: '\uA73D' }, { base: 'b', letters: 'b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' }, { base: 'c', letters: 'c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184' }, { base: 'd', letters: 'd\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' }, { base: 'dz', letters: '\u01F3\u01C6' }, { base: 'e', letters: 'e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' }, { base: 'f', letters: 'f\u24D5\uFF46\u1E1F\u0192\uA77C' }, { base: 'g', letters: 'g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' }, { base: 'h', letters: 'h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' }, { base: 'hv', letters: '\u0195' }, { base: 'i', letters: 'i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' }, { base: 'j', letters: 'j\u24D9\uFF4A\u0135\u01F0\u0249' }, { base: 'k', letters: 'k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' }, { base: 'l', letters: 'l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' }, { base: 'lj', letters: '\u01C9' }, { base: 'm', letters: 'm\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' }, { base: 'n', letters: 'n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' }, { base: 'nj', letters: '\u01CC' }, { base: 'o', letters: 'o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275' }, { base: 'oi', letters: '\u01A3' }, { base: 'ou', letters: '\u0223' }, { base: 'oo', letters: '\uA74F' }, { base: 'p', letters: 'p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' }, { base: 'q', letters: 'q\u24E0\uFF51\u024B\uA757\uA759' }, { base: 'r', letters: 'r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' }, { base: 's', letters: 's\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' }, { base: 't', letters: 't\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' }, { base: 'tz', letters: '\uA729' }, { base: 'u', letters: 'u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' }, { base: 'v', letters: 'v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' }, { base: 'vy', letters: '\uA761' }, { base: 'w', letters: 'w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' }, { base: 'x', letters: 'x\u24E7\uFF58\u1E8B\u1E8D' }, { base: 'y', letters: 'y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' }, { base: 'z', letters: 'z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }];

var diacriticsMap = {};
for (var i = 0; i < defaultDiacriticsRemovalap.length; i += 1) {
  var letters = defaultDiacriticsRemovalap[i].letters;
  for (var j = 0; j < letters.length; j += 1) {
    diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
  }
}

var createPromise = function createPromise(handler) {
  var resolved = false;
  var rejected = false;
  var resolveArgs = void 0;
  var rejectArgs = void 0;
  var promiseHandlers = {
    then: undefined,
    catch: undefined
  };
  var promise = {
    then: function then(thenHandler) {
      if (resolved) {
        thenHandler.apply(undefined, _toConsumableArray(resolveArgs));
      } else {
        promiseHandlers.then = thenHandler;
      }
      return promise;
    },
    catch: function _catch(catchHandler) {
      if (rejected) {
        catchHandler.apply(undefined, _toConsumableArray(rejectArgs));
      } else {
        promiseHandlers.catch = catchHandler;
      }
      return promise;
    }
  };

  function resolve() {
    resolved = true;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (promiseHandlers.then) promiseHandlers.then.apply(promiseHandlers, args);else resolveArgs = args;
  }
  function reject() {
    rejected = true;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (promiseHandlers.catch) promiseHandlers.catch.apply(promiseHandlers, args);else rejectArgs = args;
  }
  handler(resolve, reject);

  return promise;
};

var Utils = {
  mdPreloaderContent: '\n    <span class="preloader-inner">\n      <span class="preloader-inner-gap"></span>\n      <span class="preloader-inner-left">\n          <span class="preloader-inner-half-circle"></span>\n      </span>\n      <span class="preloader-inner-right">\n          <span class="preloader-inner-half-circle"></span>\n      </span>\n    </span>\n  '.trim(),
  eventNameToColonCase: function eventNameToColonCase(eventName) {
    var hasColon = void 0;
    return eventName.split('').map(function (char, index) {
      if (char.match(/[A-Z]/) && index !== 0 && !hasColon) {
        hasColon = true;
        return ':' + char.toLowerCase();
      }
      return char.toLowerCase();
    }).join('');
  },
  deleteProps: function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  bezier: function bezier() {
    return _bezier3.default.apply(undefined, arguments);
  },
  nextTick: function nextTick(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return setTimeout(callback, delay);
  },
  nextFrame: function nextFrame(callback) {
    return Utils.requestAnimationFrame(callback);
  },
  now: function now() {
    return Date.now();
  },
  promise: function promise(handler) {
    return window.Promise ? new Promise(handler) : createPromise(handler);
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
    return window.setTimeout(callback, 1000 / 60);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id) {
    if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
    return window.clearTimeout(id);
  },
  removeDiacritics: function removeDiacritics(str) {
    return str.replace(/[^\u0000-\u007E]/g, function (a) {
      return diacriticsMap[a] || a;
    });
  },
  parseUrlQuery: function parseUrlQuery(url) {
    var query = {};
    var urlToParse = url || window.location.href;
    var i = void 0;
    var params = void 0;
    var param = void 0;
    var length = void 0;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(function (paramsPart) {
        return paramsPart !== '';
      });
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  getTranslate: function getTranslate(el) {
    var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';

    var matrix = void 0;
    var curTransform = void 0;
    var transformMatrix = void 0;

    var curStyle = window.getComputedStyle(el, null);

    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
        // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  },
  serializeObject: function serializeObject(obj) {
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (typeof obj === 'string') return obj;
    var resultArray = [];
    var separator = '&';
    var newParents = void 0;
    function varName(name) {
      if (parents.length > 0) {
        var parentParts = '';
        for (var _j = 0; _j < parents.length; _j += 1) {
          if (_j === 0) parentParts += parents[_j];else parentParts += '[' + encodeURIComponent(parents[_j]) + ']';
        }
        return parentParts + '[' + encodeURIComponent(name) + ']';
      }
      return encodeURIComponent(name);
    }
    function varValue(value) {
      return encodeURIComponent(value);
    }
    Object.keys(obj).forEach(function (prop) {
      var toPush = void 0;
      if (Array.isArray(obj[prop])) {
        toPush = [];
        for (var _i = 0; _i < obj[prop].length; _i += 1) {
          if (!Array.isArray(obj[prop][_i]) && _typeof(obj[prop][_i]) === 'object') {
            newParents = parents.slice();
            newParents.push(prop);
            newParents.push(String(_i));
            toPush.push(Utils.serializeObject(obj[prop][_i], newParents));
          } else {
            toPush.push(varName(prop) + '[]=' + varValue(obj[prop][_i]));
          }
        }
        if (toPush.length > 0) resultArray.push(toPush.join(separator));
      } else if (obj[prop] === null || obj[prop] === '') {
        resultArray.push(varName(prop) + '=');
      } else if (_typeof(obj[prop]) === 'object') {
        // Object, convert to named array
        newParents = parents.slice();
        newParents.push(prop);
        toPush = Utils.serializeObject(obj[prop], newParents);
        if (toPush !== '') resultArray.push(toPush);
      } else if (typeof obj[prop] !== 'undefined' && obj[prop] !== '') {
        // Should be string or plain value
        resultArray.push(varName(prop) + '=' + varValue(obj[prop]));
      } else if (obj[prop] === '') resultArray.push(varName(prop));
    });
    return resultArray.join(separator);
  },
  isObject: function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend: function extend() {
    var deep = true;
    var to = void 0;
    var from = void 0;

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (typeof args[0] === 'boolean') {
      deep = args[0];
      to = args[1];
      args.splice(0, 2);
      from = args;
    } else {
      to = args[0];
      args.splice(0, 1);
      from = args;
    }
    for (var _i2 = 0; _i2 < from.length; _i2 += 1) {
      var nextSource = args[_i2];
      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (!deep) {
              to[nextKey] = nextSource[nextKey];
            } else if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
};
exports.default = Utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Dom7 2.0.1
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: October 2, 2017
 */
var Dom7 = function Dom7(arr) {
  _classCallCheck(this, Dom7);

  var self = this;
  // Create array-like object
  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }
  self.length = arr.length;
  // Return collection with methods
  return this;
};

function $$1(selector, context) {
  var arr = [];
  var i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els = void 0;
      var tempParent = void 0;
      var _html = selector.trim();
      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = document.createElement(toCreate);
        tempParent.innerHTML = _html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [document.getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || document).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === window || selector === document) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$$1.fn = Dom7.prototype;
$$1.Class = Dom7;
$$1.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
}

function requestAnimationFrame(callback) {
  if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
  return window.setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
  return window.clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  var el = void 0;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute('data-' + key);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      var _attr = el.attributes[i];
      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  if (typeof value === 'undefined') {
    if (this[0]) {
      if (this[0].multiple && this[0].nodeName.toLowerCase() === 'select') {
        var values = [];
        for (var i = 0; i < this[0].selectedOptions.length; i += 1) {
          values.push(this[0].selectedOptions[i].value);
        }
        return values;
      }
      return this[0].value;
    }
    return undefined;
  }

  for (var _i = 0; _i < this.length; _i += 1) {
    this[_i].value = value;
  }
  return this;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = duration + 'ms'; // eslint-disable-line
  }
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];
    eventData.unshift(e);
    if ($$1(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $$1(target).parents(); // eslint-disable-line
      for (var k = 0; k < _parents.length; k += 1) {
        if ($$1(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];
    eventData.unshift(e);
    listener.apply(this, eventData);
  }
  var events = eventType.split(' ');
  var j = void 0;
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        if (!el.dom7Listeners) el.dom7Listeners = [];
        el.dom7Listeners.push({
          type: eventType,
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(events[j], handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        if (!el.dom7LiveListeners) el.dom7LiveListeners = [];
        el.dom7LiveListeners.push({
          type: eventType,
          listener: listener,
          proxyListener: handleLiveEvent
        });
        el.addEventListener(events[j], handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  if (!capture) capture = false;

  var events = eventType.split(' ');
  for (var i = 0; i < events.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      if (!targetSelector) {
        if (el.dom7Listeners) {
          for (var k = 0; k < el.dom7Listeners.length; k += 1) {
            if (listener) {
              if (el.dom7Listeners[k].listener === listener) {
                el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
              }
            } else if (el.dom7Listeners[k].type === events[i]) {
              el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
            }
          }
        }
      } else if (el.dom7LiveListeners) {
        for (var _k = 0; _k < el.dom7LiveListeners.length; _k += 1) {
          if (listener) {
            if (el.dom7LiveListeners[_k].listener === listener) {
              el.removeEventListener(events[i], el.dom7LiveListeners[_k].proxyListener, capture);
            }
          } else if (el.dom7LiveListeners[_k].type === events[i]) {
            el.removeEventListener(events[i], el.dom7LiveListeners[_k].proxyListener, capture);
          }
        }
      }
    }
  }
  return this;
}
function once() {
  var dom = this;

  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];

    targetSelector = undefined;
  }
  function proxy(e) {
    var eventData = e.target.dom7EventData || [];
    listener.apply(this, eventData);
    dom.off(eventName, targetSelector, proxy, capture);
  }
  return dom.on(eventName, targetSelector, proxy, capture);
}
function trigger() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  var events = args[0].split(' ');
  var eventData = args[1];
  for (var i = 0; i < events.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      var evt = void 0;
      try {
        evt = new window.CustomEvent(events[i], {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
      } catch (e) {
        evt = document.createEvent('Event');
        evt.initEvent(events[i], true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      this[j].dom7EventData = args.filter(function (data, dataIndex) {
        return dataIndex > 0;
      });
      this[j].dispatchEvent(evt);
      this[j].dom7EventData = [];
      delete this[j].dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i = void 0;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  var events = ['webkitAnimationEnd', 'animationend'];
  var dom = this;
  var i = void 0;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles = this.styles();
      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var _styles2 = this.styles();
      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var _scrollTop = el === window ? window.scrollY : el.scrollTop;
    var _scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + _scrollTop - clientTop,
      left: box.left + _scrollLeft - clientLeft
    };
  }

  return null;
}
function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  var i = void 0;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  var arr = [];
  for (var i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  var matchedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  var modifiedItems = [];
  var dom = this;
  for (var i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  var el = this[0];
  var compareWith = void 0;
  var i = void 0;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $$1(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === document) return el === document;else if (selector === window) return el === window;

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  var child = this[0];
  var i = void 0;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;
  var returnIndex = void 0;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append() {
  var newChild = void 0;

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = arguments.length <= k ? undefined : arguments[k];
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
// eslint-disable-next-line
function appendTo(parent) {
  $$1(parent).append(this);
  return this;
}
function prepend(newChild) {
  var i = void 0;
  var j = void 0;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
// eslint-disable-next-line
function prependTo(parent) {
  $$1(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  var before = $$1(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  var after = $$1(selector);
  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $$1(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($$1(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);
    el = _next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0];
    if (selector) {
      if (el.previousElementSibling && $$1(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($$1(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);
    el = _prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($$1(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $$1(unique(parents));
}
function parents(selector) {
  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line
    while (_parent) {
      if (selector) {
        if ($$1(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }
      _parent = _parent.parentNode;
    }
  }
  return $$1(unique(parents));
}
function closest(selector) {
  var closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  var foundElements = [];
  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  var children = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $$1(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add() {
  var dom = this;
  var i = void 0;
  var j = void 0;

  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  for (i = 0; i < args.length; i += 1) {
    var toAdd = $$1(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];
    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

var Methods = Object.freeze({
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  prop: prop,
  data: data,
  removeData: removeData,
  dataset: dataset,
  val: val,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  once: once,
  trigger: trigger,
  transitionEnd: transitionEnd,
  animationEnd: animationEnd,
  width: width,
  outerWidth: outerWidth,
  height: height,
  outerHeight: outerHeight,
  offset: offset,
  hide: hide,
  show: show,
  styles: styles,
  css: css,
  toArray: toArray,
  each: each,
  forEach: forEach,
  filter: filter,
  map: map,
  html: html,
  text: text,
  is: is,
  indexOf: indexOf,
  index: index,
  eq: eq,
  append: append,
  appendTo: appendTo,
  prepend: prepend,
  prependTo: prependTo,
  insertBefore: insertBefore,
  insertAfter: insertAfter,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  siblings: siblings,
  parent: parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  remove: remove,
  detach: detach,
  add: add,
  empty: empty
});

function scrollTo() {
  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    var el = this;
    var currentTop = void 0;
    var currentLeft = void 0;
    var maxTop = void 0;
    var maxLeft = void 0;
    var newTop = void 0;
    var newLeft = void 0;
    var scrollTop = void 0; // eslint-disable-line
    var scrollLeft = void 0; // eslint-disable-line
    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }
      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done = void 0;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop() {
  for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft() {
  for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    args[_key8] = arguments[_key8];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }
  var dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

var Scroll = Object.freeze({
  scrollTo: scrollTo,
  scrollTop: scrollTop,
  scrollLeft: scrollLeft
});

function animate(initialProps, initialParams) {
  var els = this;
  var a = {
    props: $$1.extend({}, initialProps),
    params: $$1.extend({
      duration: 300,
      easing: 'swing' // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (index, el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      var elements = [];

      // Define & Cache Initials & Units
      a.elements.each(function (index, el) {
        var initialFullValue = void 0;
        var initialValue = void 0;
        var unit = void 0;
        var finalValue = void 0;
        var finalFullValue = void 0;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });

      var startTime = null;
      var time = void 0;
      var elementsDone = 0;
      var propsDone = 0;
      var done = void 0;
      var began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress = void 0;
        var easeProgress = void 0;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;

            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance = void 0;
  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;
  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var Animate = Object.freeze({
  animate: animate,
  stop: stop
});

var noTrigger = 'resize scroll'.split(' ');
function eventShortcut(name) {
  for (var _len9 = arguments.length, args = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
    args[_key9 - 1] = arguments[_key9];
  }

  if (typeof args[0] === 'undefined') {
    for (var i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();else {
          $$1(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on.apply(this, [name].concat(args));
}

function click() {
  for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    args[_key10] = arguments[_key10];
  }

  return eventShortcut.bind(this).apply(undefined, ['click'].concat(args));
}
function blur() {
  for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    args[_key11] = arguments[_key11];
  }

  return eventShortcut.bind(this).apply(undefined, ['blur'].concat(args));
}
function focus() {
  for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return eventShortcut.bind(this).apply(undefined, ['focus'].concat(args));
}
function focusin() {
  for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    args[_key13] = arguments[_key13];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusin'].concat(args));
}
function focusout() {
  for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    args[_key14] = arguments[_key14];
  }

  return eventShortcut.bind(this).apply(undefined, ['focusout'].concat(args));
}
function keyup() {
  for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return eventShortcut.bind(this).apply(undefined, ['keyup'].concat(args));
}
function keydown() {
  for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
    args[_key16] = arguments[_key16];
  }

  return eventShortcut.bind(this).apply(undefined, ['keydown'].concat(args));
}
function keypress() {
  for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
    args[_key17] = arguments[_key17];
  }

  return eventShortcut.bind(this).apply(undefined, ['keypress'].concat(args));
}
function submit() {
  for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
    args[_key18] = arguments[_key18];
  }

  return eventShortcut.bind(this).apply(undefined, ['submit'].concat(args));
}
function change() {
  for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
    args[_key19] = arguments[_key19];
  }

  return eventShortcut.bind(this).apply(undefined, ['change'].concat(args));
}
function mousedown() {
  for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
    args[_key20] = arguments[_key20];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousedown'].concat(args));
}
function mousemove() {
  for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
    args[_key21] = arguments[_key21];
  }

  return eventShortcut.bind(this).apply(undefined, ['mousemove'].concat(args));
}
function mouseup() {
  for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
    args[_key22] = arguments[_key22];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseup'].concat(args));
}
function mouseenter() {
  for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
    args[_key23] = arguments[_key23];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseenter'].concat(args));
}
function mouseleave() {
  for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
    args[_key24] = arguments[_key24];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseleave'].concat(args));
}
function mouseout() {
  for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
    args[_key25] = arguments[_key25];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseout'].concat(args));
}
function mouseover() {
  for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
    args[_key26] = arguments[_key26];
  }

  return eventShortcut.bind(this).apply(undefined, ['mouseover'].concat(args));
}
function touchstart() {
  for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
    args[_key27] = arguments[_key27];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchstart'].concat(args));
}
function touchend() {
  for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
    args[_key28] = arguments[_key28];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchend'].concat(args));
}
function touchmove() {
  for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
    args[_key29] = arguments[_key29];
  }

  return eventShortcut.bind(this).apply(undefined, ['touchmove'].concat(args));
}
function resize() {
  for (var _len30 = arguments.length, args = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
    args[_key30] = arguments[_key30];
  }

  return eventShortcut.bind(this).apply(undefined, ['resize'].concat(args));
}
function scroll() {
  for (var _len31 = arguments.length, args = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
    args[_key31] = arguments[_key31];
  }

  return eventShortcut.bind(this).apply(undefined, ['scroll'].concat(args));
}

var eventShortcuts = Object.freeze({
  click: click,
  blur: blur,
  focus: focus,
  focusin: focusin,
  focusout: focusout,
  keyup: keyup,
  keydown: keydown,
  keypress: keypress,
  submit: submit,
  change: change,
  mousedown: mousedown,
  mousemove: mousemove,
  mouseup: mouseup,
  mouseenter: mouseenter,
  mouseleave: mouseleave,
  mouseout: mouseout,
  mouseover: mouseover,
  touchstart: touchstart,
  touchend: touchend,
  touchmove: touchmove,
  resize: resize,
  scroll: scroll
});

[Methods, Scroll, Animate, eventShortcuts].forEach(function (group) {
  Object.keys(group).forEach(function (methodName) {
    $$1.fn[methodName] = group[methodName];
  });
});

exports.default = $$1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Support = exports.Device = exports.Utils = exports.Request = exports.Dom7 = exports.Template7 = undefined;

var _template = __webpack_require__(8);

var _template2 = _interopRequireDefault(_template);

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _coreClass = __webpack_require__(24);

var _coreClass2 = _interopRequireDefault(_coreClass);

var _request = __webpack_require__(13);

var _request2 = _interopRequireDefault(_request);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _support = __webpack_require__(6);

var _support2 = _interopRequireDefault(_support);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

var _device3 = __webpack_require__(26);

var _device4 = _interopRequireDefault(_device3);

var _support3 = __webpack_require__(27);

var _support4 = _interopRequireDefault(_support3);

var _utils3 = __webpack_require__(28);

var _utils4 = _interopRequireDefault(_utils3);

var _resize = __webpack_require__(29);

var _resize2 = _interopRequireDefault(_resize);

var _request3 = __webpack_require__(30);

var _request4 = _interopRequireDefault(_request3);

var _touch = __webpack_require__(31);

var _touch2 = _interopRequireDefault(_touch);

var _clicks = __webpack_require__(32);

var _clicks2 = _interopRequireDefault(_clicks);

var _router = __webpack_require__(15);

var _router2 = _interopRequireDefault(_router);

var _history = __webpack_require__(41);

var _history2 = _interopRequireDefault(_history);

var _storage = __webpack_require__(42);

var _storage2 = _interopRequireDefault(_storage);

var _statusbar = __webpack_require__(43);

var _statusbar2 = _interopRequireDefault(_statusbar);

var _view = __webpack_require__(44);

var _view2 = _interopRequireDefault(_view);

var _navbar = __webpack_require__(45);

var _navbar2 = _interopRequireDefault(_navbar);

var _toolbar = __webpack_require__(46);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _subnavbar = __webpack_require__(47);

var _subnavbar2 = _interopRequireDefault(_subnavbar);

var _touchRipple = __webpack_require__(48);

var _touchRipple2 = _interopRequireDefault(_touchRipple);

var _modal = __webpack_require__(50);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// F7 Class
/**
 * Framework7 2.0.7
 * Full featured mobile HTML framework for building iOS & Android apps
 * http://framework7.io/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 27, 2018
 */

if (false) {
  // Template7
  if (!window.Template7) window.Template7 = _template2.default;

  // Dom7
  if (!window.Dom7) window.Dom7 = _dom2.default;
}

// Install Core Modules & Components


// Core Components


// Core Modules


// Import Helpers
_coreClass2.default.use([_device4.default, _support4.default, _utils4.default, _resize2.default, _request4.default, _touch2.default, _clicks2.default, _router2.default, _history2.default, _storage2.default, _statusbar2.default, _view2.default, _navbar2.default, _toolbar2.default, _subnavbar2.default, _touchRipple2.default, _modal2.default]);

exports.Template7 = _template2.default;
exports.Dom7 = _dom2.default;
exports.Request = _request2.default;
exports.Utils = _utils2.default;
exports.Device = _device2.default;
exports.Support = _support2.default;
exports.default = _coreClass2.default;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindEvents", function() { return bindEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindEvents", function() { return unbindEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindRequests", function() { return bindRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbindRequests", function() { return unbindRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOption", function() { return getOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMethods", function() { return normalizeMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerMethod", function() { return triggerMethod$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDomApi", function() { return setDomApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRenderer", function() { return setRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionView", function() { return CollectionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnObject", function() { return MarionetteObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Behavior", function() { return Behavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnabled", function() { return isEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEnabled", function() { return setEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorViewEvents", function() { return monitorViewEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomApi", function() { return DomApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return version; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_backbone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_backbone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone_radio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_backbone_radio__);
/**
* @license
* MarionetteJS (Backbone.Marionette)
* ----------------------------------
* v4.0.0-alpha.1
*
* Copyright (c)2018 Derick Bailey, Muted Solutions, LLC.
* Distributed under MIT license
*
* http://marionettejs.com
*/






var version = "4.0.0-alpha.1";

//Internal utility for creating context style global utils
var proxy = function proxy(method) {
  return function (context) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return method.apply(context, args);
  };
};

// Marionette.extend
// -----------------

// Borrow the Backbone `extend` method so we can use it as needed
var extend = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Model.extend;

// Marionette.normalizeMethods
// ----------------------

// Pass in a mapping of events => functions or function names
// and return a mapping of events => functions
var normalizeMethods$1 = function normalizeMethods(hash) {
  var _this = this;

  if (!hash) {
    return;
  }

  return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(hash, function (normalizedHash, method, name) {
    if (!__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(method)) {
      method = _this[method];
    }
    if (method) {
      normalizedHash[name] = method;
    }
    return normalizedHash;
  }, {});
};

// Error
// -----

var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number', 'url'];

var MarionetteError = extend.call(Error, {
  urlRoot: 'http://marionettejs.com/docs/v' + version + '/',

  url: '',

  constructor: function constructor(options) {
    var error = Error.call(this, options.message);
    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(this, __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.pick(error, errorProps), __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.pick(options, errorProps));

    if (Error.captureStackTrace) {
      this.captureStackTrace();
    }

    this.url = this.urlRoot + this.url;
  },
  captureStackTrace: function captureStackTrace() {
    Error.captureStackTrace(this, MarionetteError);
  },
  toString: function toString() {
    return this.name + ': ' + this.message + ' See: ' + this.url;
  }
});

// Bind Entity Events & Unbind Entity Events
// -----------------------------------------
//
// These methods are used to bind/unbind a backbone "entity" (e.g. collection/model)
// to methods on a target object.
//
// The first parameter, `target`, must have the Backbone.Events module mixed in.
//
// The second parameter is the `entity` (Backbone.Model, Backbone.Collection or
// any object that has Backbone.Events mixed in) to bind the events from.
//
// The third parameter is a hash of { "event:name": "eventHandler" }
// configuration. Multiple handlers can be separated by a space. A
// function can be supplied instead of a string handler name.

function normalizeBindings(context, bindings) {
  if (!__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isObject(bindings)) {
    throw new MarionetteError({
      message: 'Bindings must be an object.',
      url: 'common.html#bindevents'
    });
  }

  return normalizeMethods$1.call(context, bindings);
}

function bindEvents$1(entity, bindings) {
  if (!entity || !bindings) {
    return this;
  }

  this.listenTo(entity, normalizeBindings(this, bindings));

  return this;
}

function unbindEvents$1(entity, bindings) {
  if (!entity) {
    return this;
  }

  if (!bindings) {
    this.stopListening(entity);
    return this;
  }

  this.stopListening(entity, normalizeBindings(this, bindings));

  return this;
}

// Bind/Unbind Radio Requests
// -----------------------------------------
//
// These methods are used to bind/unbind a backbone.radio request
// to methods on a target object.
//
// The first parameter, `target`, will set the context of the reply method
//
// The second parameter is the `Radio.channel` to bind the reply to.
//
// The third parameter is a hash of { "request:name": "replyHandler" }
// configuration. A function can be supplied instead of a string handler name.

function normalizeBindings$1(context, bindings) {
  if (!__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isObject(bindings)) {
    throw new MarionetteError({
      message: 'Bindings must be an object.',
      url: 'common.html#bindrequests'
    });
  }

  return normalizeMethods$1.call(context, bindings);
}

function bindRequests$1(channel, bindings) {
  if (!channel || !bindings) {
    return this;
  }

  channel.reply(normalizeBindings$1(this, bindings), this);

  return this;
}

function unbindRequests$1(channel, bindings) {
  if (!channel) {
    return this;
  }

  if (!bindings) {
    channel.stopReplying(null, null, this);
    return this;
  }

  channel.stopReplying(normalizeBindings$1(this, bindings));

  return this;
}

// Marionette.getOption
// --------------------

// Retrieve an object, function or other value from the
// object or its `options`, with `options` taking precedence.
var getOption$1 = function getOption(optionName) {
  if (!optionName) {
    return;
  }
  if (this.options && this.options[optionName] !== undefined) {
    return this.options[optionName];
  } else {
    return this[optionName];
  }
};

// Merge `keys` from `options` onto `this`
var mergeOptions$1 = function mergeOptions(options, keys) {
  var _this = this;

  if (!options) {
    return;
  }

  __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(keys, function (key) {
    var option = options[key];
    if (option !== undefined) {
      _this[key] = option;
    }
  });
};

// DOM Refresh
// -----------

// Trigger method on children unless a pure Backbone.View
function triggerMethodChildren(view, event, shouldTrigger) {
  if (!view._getImmediateChildren) {
    return;
  }
  __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(view._getImmediateChildren(), function (child) {
    if (!shouldTrigger(child)) {
      return;
    }
    child.triggerMethod(event, child);
  });
}

function shouldTriggerAttach(view) {
  return !view._isAttached;
}

function shouldAttach(view) {
  if (!shouldTriggerAttach(view)) {
    return false;
  }
  view._isAttached = true;
  return true;
}

function shouldTriggerDetach(view) {
  return view._isAttached;
}

function shouldDetach(view) {
  if (!shouldTriggerDetach(view)) {
    return false;
  }
  view._isAttached = false;
  return true;
}

function triggerDOMRefresh(view) {
  if (view._isAttached && view._isRendered) {
    view.triggerMethod('dom:refresh', view);
  }
}

function triggerDOMRemove(view) {
  if (view._isAttached && view._isRendered) {
    view.triggerMethod('dom:remove', view);
  }
}

function handleBeforeAttach() {
  triggerMethodChildren(this, 'before:attach', shouldTriggerAttach);
}

function handleAttach() {
  triggerMethodChildren(this, 'attach', shouldAttach);
  triggerDOMRefresh(this);
}

function handleBeforeDetach() {
  triggerMethodChildren(this, 'before:detach', shouldTriggerDetach);
  triggerDOMRemove(this);
}

function handleDetach() {
  triggerMethodChildren(this, 'detach', shouldDetach);
}

function handleBeforeRender() {
  triggerDOMRemove(this);
}

function handleRender() {
  triggerDOMRefresh(this);
}

// Monitor a view's state, propagating attach/detach events to children and firing dom:refresh
// whenever a rendered view is attached or an attached view is rendered.
function monitorViewEvents(view) {
  if (view._areViewEventsMonitored || view.monitorViewEvents === false) {
    return;
  }

  view._areViewEventsMonitored = true;

  view.on({
    'before:attach': handleBeforeAttach,
    'attach': handleAttach,
    'before:detach': handleBeforeDetach,
    'detach': handleDetach,
    'before:render': handleBeforeRender,
    'render': handleRender
  });
}

// Trigger Method
// --------------

// split the event name on the ":"
var splitter = /(^|:)(\w)/gi;

// Only calc getOnMethodName once
var methodCache = {};

// take the event section ("section1:section2:section3")
// and turn it in to uppercase name onSection1Section2Section3
function getEventName(match, prefix, eventName) {
  return eventName.toUpperCase();
}

var getOnMethodName = function getOnMethodName(event) {
  if (!methodCache[event]) {
    methodCache[event] = 'on' + event.replace(splitter, getEventName);
  }

  return methodCache[event];
};

// Trigger an event and/or a corresponding method name. Examples:
//
// `this.triggerMethod("foo")` will trigger the "foo" event and
// call the "onFoo" method.
//
// `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
// call the "onFooBar" method.
function triggerMethod$1(event) {
  // get the method name from the event name
  var methodName = getOnMethodName(event);
  var method = getOption$1.call(this, methodName);
  var result = void 0;

  // call the onMethodName if it exists
  if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(method)) {
    // pass all args, except the event name
    result = method.apply(this, __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.drop(arguments));
  }

  // trigger the event
  this.trigger.apply(this, arguments);

  return result;
}

var events = {
  triggerMethod: triggerMethod$1
};

var CommonMixin = {

  // Imports the "normalizeMethods" to transform hashes of
  // events=>function references/names to a hash of events=>function references
  normalizeMethods: normalizeMethods$1,

  _setOptions: function _setOptions(options, classOptions) {
    this.options = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({}, __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'options'), options);
    this.mergeOptions(options, classOptions);
  },


  // A handy way to merge passed-in options onto the instance
  mergeOptions: mergeOptions$1,

  // Enable getting options from this or this.options by name.
  getOption: getOption$1,

  // Enable binding view's events from another entity.
  bindEvents: bindEvents$1,

  // Enable unbinding view's events from another entity.
  unbindEvents: unbindEvents$1,

  // Enable binding view's requests.
  bindRequests: bindRequests$1,

  // Enable unbinding view's requests.
  unbindRequests: unbindRequests$1,

  triggerMethod: triggerMethod$1
};

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(CommonMixin, __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.Events);

var DestroyMixin = {
  _isDestroyed: false,

  isDestroyed: function isDestroyed() {
    return this._isDestroyed;
  },
  destroy: function destroy(options) {
    if (this._isDestroyed) {
      return this;
    }

    this.triggerMethod('before:destroy', this, options);
    this._isDestroyed = true;
    this.triggerMethod('destroy', this, options);
    this.stopListening();

    return this;
  }
};

// MixinOptions
// - channelName
// - radioEvents
// - radioRequests

var RadioMixin = {
  _initRadio: function _initRadio() {
    var channelName = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'channelName');

    if (!channelName) {
      return;
    }

    /* istanbul ignore next */
    if (!__WEBPACK_IMPORTED_MODULE_2_backbone_radio___default.a) {
      throw new MarionetteError({
        message: 'The dependency "backbone.radio" is missing.',
        url: 'backbone.radio.html#marionette-integration'
      });
    }

    var channel = this._channel = __WEBPACK_IMPORTED_MODULE_2_backbone_radio___default.a.channel(channelName);

    var radioEvents = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'radioEvents');
    this.bindEvents(channel, radioEvents);

    var radioRequests = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'radioRequests');
    this.bindRequests(channel, radioRequests);

    this.on('destroy', this._destroyRadio);
  },
  _destroyRadio: function _destroyRadio() {
    this._channel.stopReplying(null, null, this);
  },
  getChannel: function getChannel() {
    return this._channel;
  }
};

// Object
// ------

var ClassOptions = ['channelName', 'radioEvents', 'radioRequests'];

// Object borrows many conventions and utilities from Backbone.
var MarionetteObject = function MarionetteObject(options) {
  this._setOptions(options, ClassOptions);
  this.cid = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.uniqueId(this.cidPrefix);
  this._initRadio();
  this.initialize.apply(this, arguments);
};

MarionetteObject.extend = extend;

// Object Methods
// --------------

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(MarionetteObject.prototype, CommonMixin, DestroyMixin, RadioMixin, {
  cidPrefix: 'mno',

  // This is a noop method intended to be overridden
  initialize: function initialize() {}
});

// Implementation of the invoke method (http://underscorejs.org/#invoke) with support for
// lodash v3, v4, and underscore.js
var _invoke = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.invokeMap || __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.invoke;

// MixinOptions
// - behaviors

// Takes care of getting the behavior class
// given options and a key.
// If a user passes in options.behaviorClass
// default to using that.
// If a user passes in a Behavior Class directly, use that
// Otherwise an error is thrown
function getBehaviorClass(options) {
  if (options.behaviorClass) {
    return { BehaviorClass: options.behaviorClass, options: options };
  }

  //treat functions as a Behavior constructor
  if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(options)) {
    return { BehaviorClass: options, options: {} };
  }

  throw new MarionetteError({
    message: 'Unable to get behavior class. A Behavior constructor should be passed directly or as behaviorClass property of options',
    url: 'marionette.behavior.html#defining-and-attaching-behaviors'
  });
}

// Iterate over the behaviors object, for each behavior
// instantiate it and get its grouped behaviors.
// This accepts a list of behaviors in either an object or array form
function parseBehaviors(view, behaviors, allBehaviors) {
  return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(behaviors, function (reducedBehaviors, behaviorDefiniton) {
    var _getBehaviorClass = getBehaviorClass(behaviorDefiniton),
        BehaviorClass = _getBehaviorClass.BehaviorClass,
        options = _getBehaviorClass.options;

    var behavior = new BehaviorClass(options, view);
    reducedBehaviors.push(behavior);

    return parseBehaviors(view, __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(behavior, 'behaviors'), reducedBehaviors);
  }, allBehaviors);
}

var BehaviorsMixin = {
  _initBehaviors: function _initBehaviors() {
    this._behaviors = parseBehaviors(this, __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'behaviors'), []);
  },
  _getBehaviorTriggers: function _getBehaviorTriggers() {
    var triggers = _invoke(this._behaviors, '_getTriggers');
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(triggers, function (memo, _triggers) {
      return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(memo, _triggers);
    }, {});
  },
  _getBehaviorEvents: function _getBehaviorEvents() {
    var events = _invoke(this._behaviors, '_getEvents');
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(events, function (memo, _events) {
      return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(memo, _events);
    }, {});
  },


  // proxy behavior $el to the view's $el.
  _proxyBehaviorViewProperties: function _proxyBehaviorViewProperties() {
    _invoke(this._behaviors, 'proxyViewProperties');
  },


  // delegate modelEvents and collectionEvents
  _delegateBehaviorEntityEvents: function _delegateBehaviorEntityEvents() {
    _invoke(this._behaviors, 'delegateEntityEvents');
  },


  // undelegate modelEvents and collectionEvents
  _undelegateBehaviorEntityEvents: function _undelegateBehaviorEntityEvents() {
    _invoke(this._behaviors, 'undelegateEntityEvents');
  },
  _destroyBehaviors: function _destroyBehaviors(options) {
    // Call destroy on each behavior after
    // destroying the view.
    // This unbinds event listeners
    // that behaviors have registered for.
    _invoke(this._behaviors, 'destroy', options);
  },


  // Remove a behavior
  _removeBehavior: function _removeBehavior(behavior) {
    // Don't worry about the clean up if the view is destroyed
    if (this._isDestroyed) {
      return;
    }

    // Remove behavior-only triggers and events
    this.undelegate('.trig' + behavior.cid + ' .' + behavior.cid);

    this._behaviors = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.without(this._behaviors, behavior);
  },
  _bindBehaviorUIElements: function _bindBehaviorUIElements() {
    _invoke(this._behaviors, 'bindUIElements');
  },
  _unbindBehaviorUIElements: function _unbindBehaviorUIElements() {
    _invoke(this._behaviors, 'unbindUIElements');
  },
  _triggerEventOnBehaviors: function _triggerEventOnBehaviors(eventName, view, options) {
    _invoke(this._behaviors, 'triggerMethod', eventName, view, options);
  }
};

// MixinOptions
// - collectionEvents
// - modelEvents

var DelegateEntityEventsMixin = {
  // Handle `modelEvents`, and `collectionEvents` configuration
  _delegateEntityEvents: function _delegateEntityEvents(model, collection) {
    if (model) {
      this._modelEvents = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'modelEvents');
      this.bindEvents(model, this._modelEvents);
    }

    if (collection) {
      this._collectionEvents = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'collectionEvents');
      this.bindEvents(collection, this._collectionEvents);
    }
  },


  // Remove any previously delegate entity events
  _undelegateEntityEvents: function _undelegateEntityEvents(model, collection) {
    if (this._modelEvents) {
      this.unbindEvents(model, this._modelEvents);
      delete this._modelEvents;
    }

    if (this._collectionEvents) {
      this.unbindEvents(collection, this._collectionEvents);
      delete this._collectionEvents;
    }
  },


  // Remove cached event handlers
  _deleteEntityEventHandlers: function _deleteEntityEventHandlers() {
    delete this._modelEvents;
    delete this._collectionEvents;
  }
};

// MixinOptions
// - template
// - templateContext

var TemplateRenderMixin = {

  // Internal method to render the template with the serialized data
  // and template context
  _renderTemplate: function _renderTemplate(template) {
    // Add in entity data and template context
    var data = this.mixinTemplateContext(this.serializeData()) || {};

    // Render and add to el
    var html = this._renderHtml(template, data);
    if (typeof html !== 'undefined') {
      this.attachElContent(html);
    }
  },


  // Get the template for this view instance.
  // You can set a `template` attribute in the view definition
  // or pass a `template: TemplateFunction` parameter in
  // to the constructor options.
  getTemplate: function getTemplate() {
    return this.template;
  },


  // Mix in template context methods. Looks for a
  // `templateContext` attribute, which can either be an
  // object literal, or a function that returns an object
  // literal. All methods and attributes from this object
  // are copies to the object passed in.
  mixinTemplateContext: function mixinTemplateContext(serializedData) {
    var templateContext = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'templateContext');
    if (!templateContext) {
      return serializedData;
    }
    if (!serializedData) {
      return templateContext;
    }
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({}, serializedData, templateContext);
  },


  // Serialize the view's model *or* collection, if
  // it exists, for the template
  serializeData: function serializeData() {
    // If we have a model, we serialize that
    if (this.model) {
      return this.serializeModel();
    }

    // Otherwise, we serialize the collection,
    // making it available under the `items` property
    if (this.collection) {
      return {
        items: this.serializeCollection()
      };
    }
  },


  // Prepares the special `model` property of a view
  // for being displayed in the template. Override this if
  // you need a custom transformation for your view's model
  serializeModel: function serializeModel() {
    return this.model.attributes;
  },


  // Serialize a collection
  serializeCollection: function serializeCollection() {
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.map(this.collection.models, function (model) {
      return model.attributes;
    });
  },


  // Renders the data into the template
  _renderHtml: function _renderHtml(template, data) {
    return template(data);
  },


  // Attaches the content of a given view.
  // This method can be overridden to optimize rendering,
  // or to render in a non standard way.
  //
  // For example, using `innerHTML` instead of `$el.html`
  //
  // ```js
  // attachElContent(html) {
  //   this.el.innerHTML = html;
  // }
  // ```
  attachElContent: function attachElContent(html) {
    this.Dom.setContents(this.el, html, this.$el);
  }
};

// Borrow event splitter from Backbone
var delegateEventSplitter = /^(\S+)\s*(.*)$/;

// Set event name to be namespaced using a unique index
// to generate a non colliding event namespace
// http://api.jquery.com/event.namespace/
var getNamespacedEventName = function getNamespacedEventName(eventName, namespace) {
  var match = eventName.match(delegateEventSplitter);
  return match[1] + "." + namespace + " " + match[2];
};

// Add Feature flags here
// e.g. 'class' => false
var FEATURES = {
  childViewEventPrefix: false,
  triggersStopPropagation: true,
  triggersPreventDefault: true,
  DEV_MODE: false
};

function isEnabled(name) {
  return !!FEATURES[name];
}

function setEnabled(name, state) {
  return FEATURES[name] = state;
}

// Internal method to create an event handler for a given `triggerDef` like
// 'click:foo'
function buildViewTrigger(view, triggerDef) {
  if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isString(triggerDef)) {
    triggerDef = { event: triggerDef };
  }

  var eventName = triggerDef.event;

  var shouldPreventDefault = !!triggerDef.preventDefault;

  if (isEnabled('triggersPreventDefault')) {
    shouldPreventDefault = triggerDef.preventDefault !== false;
  }

  var shouldStopPropagation = !!triggerDef.stopPropagation;

  if (isEnabled('triggersStopPropagation')) {
    shouldStopPropagation = triggerDef.stopPropagation !== false;
  }

  return function (event) {
    if (shouldPreventDefault) {
      event.preventDefault();
    }

    if (shouldStopPropagation) {
      event.stopPropagation();
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    view.triggerMethod.apply(view, [eventName, view, event].concat(args));
  };
}

var TriggersMixin = {

  // Configure `triggers` to forward DOM events to view
  // events. `triggers: {"click .foo": "do:foo"}`
  _getViewTriggers: function _getViewTriggers(view, triggers) {
    var _this = this;

    // Configure the triggers, prevent default
    // action and stop propagation of DOM events
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(triggers, function (events, value, key) {
      key = getNamespacedEventName(key, 'trig' + _this.cid);
      events[key] = buildViewTrigger(view, value);
      return events;
    }, {});
  }
};

// allows for the use of the @ui. syntax within
// a given key for triggers and events
// swaps the @ui with the associated selector.
// Returns a new, non-mutated, parsed events hash.
var _normalizeUIKeys = function _normalizeUIKeys(hash, ui) {
  return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(hash, function (memo, val, key) {
    var normalizedKey = _normalizeUIString(key, ui);
    memo[normalizedKey] = val;
    return memo;
  }, {});
};

var uiRegEx = /@ui\.[a-zA-Z-_$0-9]*/g;

// utility method for parsing @ui. syntax strings
// into associated selector
var _normalizeUIString = function _normalizeUIString(uiString, ui) {
  return uiString.replace(uiRegEx, function (r) {
    return ui[r.slice(4)];
  });
};

// allows for the use of the @ui. syntax within
// a given value for regions
// swaps the @ui with the associated selector
var _normalizeUIValues = function _normalizeUIValues(hash, ui, property) {
  __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(hash, function (val, key) {
    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isString(val)) {
      hash[key] = _normalizeUIString(val, ui);
    } else if (val) {
      var propertyVal = val[property];
      if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isString(propertyVal)) {
        val[property] = _normalizeUIString(propertyVal, ui);
      }
    }
  });
  return hash;
};

var UIMixin = {

  // normalize the keys of passed hash with the views `ui` selectors.
  // `{"@ui.foo": "bar"}`
  normalizeUIKeys: function normalizeUIKeys(hash) {
    var uiBindings = this._getUIBindings();
    return _normalizeUIKeys(hash, uiBindings);
  },


  // normalize the passed string with the views `ui` selectors.
  // `"@ui.bar"`
  normalizeUIString: function normalizeUIString(uiString) {
    var uiBindings = this._getUIBindings();
    return _normalizeUIString(uiString, uiBindings);
  },


  // normalize the values of passed hash with the views `ui` selectors.
  // `{foo: "@ui.bar"}`
  normalizeUIValues: function normalizeUIValues(hash, property) {
    var uiBindings = this._getUIBindings();
    return _normalizeUIValues(hash, uiBindings, property);
  },
  _getUIBindings: function _getUIBindings() {
    var uiBindings = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, '_uiBindings');
    return uiBindings || __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'ui');
  },


  // This method binds the elements specified in the "ui" hash inside the view's code with
  // the associated jQuery selectors.
  _bindUIElements: function _bindUIElements() {
    var _this = this;

    if (!this.ui) {
      return;
    }

    // store the ui hash in _uiBindings so they can be reset later
    // and so re-rendering the view will be able to find the bindings
    if (!this._uiBindings) {
      this._uiBindings = this.ui;
    }

    // get the bindings result, as a function or otherwise
    var bindings = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, '_uiBindings');

    // empty the ui so we don't have anything to start with
    this._ui = {};

    // bind each of the selectors
    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(bindings, function (selector, key) {
      _this._ui[key] = _this.$(selector);
    });

    this.ui = this._ui;
  },
  _unbindUIElements: function _unbindUIElements() {
    var _this2 = this;

    if (!this.ui || !this._uiBindings) {
      return;
    }

    // delete all of the existing ui bindings
    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(this.ui, function ($el, name) {
      delete _this2.ui[name];
    });

    // reset the ui element to the original bindings configuration
    this.ui = this._uiBindings;
    delete this._uiBindings;
    delete this._ui;
  },
  _getUI: function _getUI(name) {
    return this._ui[name];
  }
};

// DomApi
//  ---------
// Performant method for returning the jQuery instance
function _getEl(el) {
  return el instanceof __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.$ ? el : __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.$(el);
}

// Static setter
function setDomApi$1(mixin) {
  this.prototype.Dom = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({}, this.prototype.Dom, mixin);
  return this;
}

var DomApi = {

  // Returns a new HTML DOM node instance
  createBuffer: function createBuffer() {
    return document.createDocumentFragment();
  },


  // Lookup the `selector` string
  // Selector may also be a DOM element
  // Returns an array-like object of nodes
  getEl: function getEl(selector) {
    return _getEl(selector);
  },


  // Finds the `selector` string with the el
  // Returns an array-like object of nodes
  findEl: function findEl(el, selector) {
    var _$el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getEl(el);

    return _$el.find(selector);
  },


  // Returns true if the el contains the node childEl
  hasEl: function hasEl(el, childEl) {
    return el.contains(childEl && childEl.parentNode);
  },


  // Detach `el` from the DOM without removing listeners
  detachEl: function detachEl(el) {
    var _$el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getEl(el);

    _$el.detach();
  },


  // Remove `oldEl` from the DOM and put `newEl` in its place
  replaceEl: function replaceEl(newEl, oldEl) {
    if (newEl === oldEl) {
      return;
    }

    var parent = oldEl.parentNode;

    if (!parent) {
      return;
    }

    parent.replaceChild(newEl, oldEl);
  },


  // Swaps the location of `el1` and `el2` in the DOM
  swapEl: function swapEl(el1, el2) {
    if (el1 === el2) {
      return;
    }

    var parent1 = el1.parentNode;
    var parent2 = el2.parentNode;

    if (!parent1 || !parent2) {
      return;
    }

    var next1 = el1.nextSibling;
    var next2 = el2.nextSibling;

    parent1.insertBefore(el2, next1);
    parent2.insertBefore(el1, next2);
  },


  // Replace the contents of `el` with the HTML string of `html`
  setContents: function setContents(el, html) {
    var _$el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _getEl(el);

    _$el.html(html);
  },


  // Takes the DOM node `el` and appends the DOM node `contents`
  // to the end of the element's contents.
  appendContents: function appendContents(el, contents) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$_$el = _ref._$el,
        _$el = _ref$_$el === undefined ? _getEl(el) : _ref$_$el,
        _ref$_$contents = _ref._$contents,
        _$contents = _ref$_$contents === undefined ? _getEl(contents) : _ref$_$contents;

    _$el.append(_$contents);
  },


  // Does the el have child nodes
  hasContents: function hasContents(el) {
    return !!el && el.hasChildNodes();
  },


  // Remove the inner contents of `el` from the DOM while leaving
  // `el` itself in the DOM.
  detachContents: function detachContents(el) {
    var _$el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _getEl(el);

    _$el.contents().detach();
  }
};

// ViewMixin
//  ---------

// MixinOptions
// - behaviors
// - childViewEventPrefix
// - childViewEvents
// - childViewTriggers
// - collectionEvents
// - modelEvents
// - triggers
// - ui


var ViewMixin = {
  Dom: DomApi,

  supportsRenderLifecycle: true,
  supportsDestroyLifecycle: true,

  _isDestroyed: false,

  isDestroyed: function isDestroyed() {
    return !!this._isDestroyed;
  },


  _isRendered: false,

  isRendered: function isRendered() {
    return !!this._isRendered;
  },


  _isAttached: false,

  isAttached: function isAttached() {
    return !!this._isAttached;
  },


  // Overriding Backbone.View's `delegateEvents` to handle
  // `events` and `triggers`
  delegateEvents: function delegateEvents(events) {
    this._proxyBehaviorViewProperties();
    this._buildEventProxies();

    var combinedEvents = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({}, this._getBehaviorEvents(), this._getEvents(events), this._getBehaviorTriggers(), this._getTriggers());

    __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View.prototype.delegateEvents.call(this, combinedEvents);

    return this;
  },


  // Allows Backbone.View events to utilize `@ui.` selectors
  _getEvents: function _getEvents(events) {
    if (events) {
      return this.normalizeUIKeys(events);
    }

    if (!this.events) {
      return;
    }

    return this.normalizeUIKeys(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'events'));
  },


  // Configure `triggers` to forward DOM events to view
  // events. `triggers: {"click .foo": "do:foo"}`
  _getTriggers: function _getTriggers() {
    if (!this.triggers) {
      return;
    }

    // Allow `triggers` to be configured as a function
    var triggers = this.normalizeUIKeys(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'triggers'));

    // Configure the triggers, prevent default
    // action and stop propagation of DOM events
    return this._getViewTriggers(this, triggers);
  },


  // Handle `modelEvents`, and `collectionEvents` configuration
  delegateEntityEvents: function delegateEntityEvents() {
    this._delegateEntityEvents(this.model, this.collection);

    // bind each behaviors model and collection events
    this._delegateBehaviorEntityEvents();

    return this;
  },


  // Handle unbinding `modelEvents`, and `collectionEvents` configuration
  undelegateEntityEvents: function undelegateEntityEvents() {
    this._undelegateEntityEvents(this.model, this.collection);

    // unbind each behaviors model and collection events
    this._undelegateBehaviorEntityEvents();

    return this;
  },


  // Handle destroying the view and its children.
  destroy: function destroy(options) {
    if (this._isDestroyed) {
      return this;
    }
    var shouldTriggerDetach = this._isAttached && !this._disableDetachEvents;

    this.triggerMethod('before:destroy', this, options);
    if (shouldTriggerDetach) {
      this.triggerMethod('before:detach', this);
    }

    // unbind UI elements
    this.unbindUIElements();

    // remove the view from the DOM
    this._removeElement();

    if (shouldTriggerDetach) {
      this._isAttached = false;
      this.triggerMethod('detach', this);
    }

    // remove children after the remove to prevent extra paints
    this._removeChildren();

    this._isDestroyed = true;
    this._isRendered = false;

    // Destroy behaviors after _isDestroyed flag
    this._destroyBehaviors(options);

    this._deleteEntityEventHandlers();

    this.triggerMethod('destroy', this, options);
    this._triggerEventOnBehaviors('destroy', this, options);

    this.stopListening();

    return this;
  },


  // Equates to this.$el.remove
  _removeElement: function _removeElement() {
    this.$el.off().removeData();
    this.Dom.detachEl(this.el, this.$el);
  },


  // This method binds the elements specified in the "ui" hash
  bindUIElements: function bindUIElements() {
    this._bindUIElements();
    this._bindBehaviorUIElements();

    return this;
  },


  // This method unbinds the elements specified in the "ui" hash
  unbindUIElements: function unbindUIElements() {
    this._unbindUIElements();
    this._unbindBehaviorUIElements();

    return this;
  },
  getUI: function getUI(name) {
    return this._getUI(name);
  },


  // Cache `childViewEvents` and `childViewTriggers`
  _buildEventProxies: function _buildEventProxies() {
    this._childViewEvents = this.normalizeMethods(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'childViewEvents'));
    this._childViewTriggers = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'childViewTriggers');
    this._eventPrefix = this._getEventPrefix();
  },
  _getEventPrefix: function _getEventPrefix() {
    var defaultPrefix = isEnabled('childViewEventPrefix') ? 'childview' : false;
    var prefix = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'childViewEventPrefix', defaultPrefix);

    return prefix === false ? prefix : prefix + ':';
  },
  _proxyChildViewEvents: function _proxyChildViewEvents(view) {
    if (this._childViewEvents || this._childViewTriggers || this._eventPrefix) {
      this.listenTo(view, 'all', this._childViewEventHandler);
    }
  },
  _childViewEventHandler: function _childViewEventHandler(eventName) {
    var childViewEvents = this._childViewEvents;

    // call collectionView childViewEvent if defined

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (childViewEvents && childViewEvents[eventName]) {
      childViewEvents[eventName].apply(this, args);
    }

    // use the parent view's proxyEvent handlers
    var childViewTriggers = this._childViewTriggers;

    // Call the event with the proxy name on the parent layout
    if (childViewTriggers && childViewTriggers[eventName]) {
      this.triggerMethod.apply(this, [childViewTriggers[eventName]].concat(args));
    }

    if (this._eventPrefix) {
      this.triggerMethod.apply(this, [this._eventPrefix + eventName].concat(args));
    }
  }
};

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(ViewMixin, BehaviorsMixin, CommonMixin, DelegateEntityEventsMixin, TemplateRenderMixin, TriggersMixin, UIMixin);

function renderView(view) {
  if (view._isRendered) {
    return;
  }

  if (!view.supportsRenderLifecycle) {
    view.triggerMethod('before:render', view);
  }

  view.render();
  view._isRendered = true;

  if (!view.supportsRenderLifecycle) {
    view.triggerMethod('render', view);
  }
}

function destroyView(view, disableDetachEvents) {
  if (view.destroy) {
    // Attach flag for public destroy function internal check
    view._disableDetachEvents = disableDetachEvents;
    view.destroy();
    return;
  }

  // Destroy for non-Marionette Views
  if (!view.supportsDestroyLifecycle) {
    view.triggerMethod('before:destroy', view);
  }

  var shouldTriggerDetach = view._isAttached && !disableDetachEvents;

  if (shouldTriggerDetach) {
    view.triggerMethod('before:detach', view);
  }

  view.remove();

  if (shouldTriggerDetach) {
    view._isAttached = false;
    view.triggerMethod('detach', view);
  }

  view._isDestroyed = true;

  if (!view.supportsDestroyLifecycle) {
    view.triggerMethod('destroy', view);
  }
}

// Region
// ------

var classErrorName = 'RegionError';

var ClassOptions$2 = ['allowMissingEl', 'parentEl', 'replaceElement'];

var Region = function Region(options) {
  this._setOptions(options, ClassOptions$2);

  this.cid = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.uniqueId(this.cidPrefix);

  // getOption necessary because options.el may be passed as undefined
  this._initEl = this.el = this.getOption('el');

  // Handle when this.el is passed in as a $ wrapped element.
  this.el = this.el instanceof __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.$ ? this.el[0] : this.el;

  if (!this.el) {
    throw new MarionetteError({
      name: classErrorName,
      message: 'An "el" must be specified for a region.',
      url: 'marionette.region.html#additional-options'
    });
  }

  this.$el = this.getEl(this.el);

  this.initialize.apply(this, arguments);
};

Region.extend = extend;
Region.setDomApi = setDomApi$1;

// Region Methods
// --------------

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(Region.prototype, CommonMixin, {
  Dom: DomApi,

  cidPrefix: 'mnr',
  replaceElement: false,
  _isReplaced: false,
  _isSwappingView: false,

  // This is a noop method intended to be overridden
  initialize: function initialize() {},


  // Displays a view instance inside of the region. If necessary handles calling the `render`
  // method for you. Reads content directly from the `el` attribute.
  show: function show(view, options) {
    if (!this._ensureElement(options)) {
      return;
    }

    view = this._getView(view, options);

    if (view === this.currentView) {
      return this;
    }

    this._isSwappingView = !!this.currentView;

    this.triggerMethod('before:show', this, view, options);

    // Assume an attached view is already in the region for pre-existing DOM
    if (!view._isAttached) {
      this.empty(options);
    }

    this._setupChildView(view);

    this.currentView = view;

    renderView(view);

    this._attachView(view, options);

    this.triggerMethod('show', this, view, options);

    this._isSwappingView = false;

    return this;
  },
  _setupChildView: function _setupChildView(view) {
    monitorViewEvents(view);

    this._proxyChildViewEvents(view);

    // We need to listen for if a view is destroyed in a way other than through the region.
    // If this happens we need to remove the reference to the currentView since once a view
    // has been destroyed we can not reuse it.
    view.on('destroy', this._empty, this);
  },
  _proxyChildViewEvents: function _proxyChildViewEvents(view) {
    var parentView = this._parentView;

    if (!parentView) {
      return;
    }

    parentView._proxyChildViewEvents(view);
  },


  // If the regions parent view is not monitoring its attach/detach events
  _shouldDisableMonitoring: function _shouldDisableMonitoring() {
    return this._parentView && this._parentView.monitorViewEvents === false;
  },
  _attachView: function _attachView(view) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var shouldTriggerAttach = !view._isAttached && this.Dom.hasEl(document.documentElement, this.el) && !this._shouldDisableMonitoring();
    var shouldReplaceEl = typeof options.replaceElement === 'undefined' ? !!__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'replaceElement') : !!options.replaceElement;

    if (shouldTriggerAttach) {
      view.triggerMethod('before:attach', view);
    }

    if (shouldReplaceEl) {
      this._replaceEl(view);
    } else {
      this.attachHtml(view);
    }

    if (shouldTriggerAttach) {
      view._isAttached = true;
      view.triggerMethod('attach', view);
    }
  },
  _ensureElement: function _ensureElement() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isObject(this.el)) {
      this.$el = this.getEl(this.el);
      this.el = this.$el[0];
      // Make sure the $el contains only the el
      this.$el = this.Dom.getEl(this.el);
    }

    if (!this.$el || this.$el.length === 0) {
      var allowMissingEl = typeof options.allowMissingEl === 'undefined' ? !!__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'allowMissingEl') : !!options.allowMissingEl;

      if (allowMissingEl) {
        return false;
      } else {
        throw new MarionetteError({
          name: classErrorName,
          message: 'An "el" must exist in DOM for this region ' + this.cid,
          url: 'marionette.region.html#additional-options'
        });
      }
    }
    return true;
  },
  _getView: function _getView(view) {
    if (!view) {
      throw new MarionetteError({
        name: classErrorName,
        message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.',
        url: 'marionette.region.html#showing-a-view'
      });
    }

    if (view._isDestroyed) {
      throw new MarionetteError({
        name: classErrorName,
        message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.',
        url: 'marionette.region.html#showing-a-view'
      });
    }

    if (view instanceof __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View) {
      return view;
    }

    var viewOptions = this._getViewOptions(view);

    return new View(viewOptions);
  },


  // This allows for a template or a static string to be
  // used as a template
  _getViewOptions: function _getViewOptions(viewOptions) {
    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(viewOptions)) {
      return { template: viewOptions };
    }

    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isObject(viewOptions)) {
      return viewOptions;
    }

    var template = function template() {
      return viewOptions;
    };

    return { template: template };
  },


  // Override this method to change how the region finds the DOM element that it manages. Return
  // a jQuery selector object scoped to a provided parent el or the document if none exists.
  getEl: function getEl(el) {
    var context = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'parentEl');

    if (context && __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isString(el)) {
      return this.Dom.findEl(context, el);
    }

    return this.Dom.getEl(el);
  },
  _replaceEl: function _replaceEl(view) {
    // always restore the el to ensure the regions el is present before replacing
    this._restoreEl();

    view.on('before:destroy', this._restoreEl, this);

    this.Dom.replaceEl(view.el, this.el);

    this._isReplaced = true;
  },


  // Restore the region's element in the DOM.
  _restoreEl: function _restoreEl() {
    // There is nothing to replace
    if (!this._isReplaced) {
      return;
    }

    var view = this.currentView;

    if (!view) {
      return;
    }

    this._detachView(view);

    this._isReplaced = false;
  },


  // Check to see if the region's el was replaced.
  isReplaced: function isReplaced() {
    return !!this._isReplaced;
  },


  // Check to see if a view is being swapped by another
  isSwappingView: function isSwappingView() {
    return !!this._isSwappingView;
  },


  // Override this method to change how the new view is appended to the `$el` that the
  // region is managing
  attachHtml: function attachHtml(view) {
    this.Dom.appendContents(this.el, view.el, { _$el: this.$el, _$contents: view.$el });
  },


  // Destroy the current view, if there is one. If there is no current view,
  // it will detach any html inside the region's `el`.
  empty: function empty() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { allowMissingEl: true };

    var view = this.currentView;

    // If there is no view in the region we should only detach current html
    if (!view) {
      if (this._ensureElement(options)) {
        this.detachHtml();
      }
      return this;
    }

    this._empty(view, true);
    return this;
  },
  _empty: function _empty(view, shouldDestroy) {
    view.off('destroy', this._empty, this);
    this.triggerMethod('before:empty', this, view);

    this._restoreEl();

    delete this.currentView;

    if (!view._isDestroyed) {
      if (shouldDestroy) {
        this.removeView(view);
      } else {
        this._detachView(view);
      }
      this._stopChildViewEvents(view);
    }

    this.triggerMethod('empty', this, view);
  },
  _stopChildViewEvents: function _stopChildViewEvents(view) {
    var parentView = this._parentView;

    if (!parentView) {
      return;
    }

    this._parentView.stopListening(view);
  },


  // Non-Marionette safe view.destroy
  destroyView: function destroyView$$1(view) {
    if (view._isDestroyed) {
      return view;
    }

    destroyView(view, this._shouldDisableMonitoring());
    return view;
  },


  // Override this method to determine what happens when the view
  // is removed from the region when the view is not being detached
  removeView: function removeView(view) {
    this.destroyView(view);
  },


  // Empties the Region without destroying the view
  // Returns the detached view
  detachView: function detachView() {
    var view = this.currentView;

    if (!view) {
      return;
    }

    this._empty(view);

    return view;
  },
  _detachView: function _detachView(view) {
    var shouldTriggerDetach = view._isAttached && !this._shouldDisableMonitoring();
    var shouldRestoreEl = this._isReplaced;
    if (shouldTriggerDetach) {
      view.triggerMethod('before:detach', view);
    }

    if (shouldRestoreEl) {
      this.Dom.replaceEl(this.el, view.el);
    } else {
      this.detachHtml();
    }

    if (shouldTriggerDetach) {
      view._isAttached = false;
      view.triggerMethod('detach', view);
    }
  },


  // Override this method to change how the region detaches current content
  detachHtml: function detachHtml() {
    this.Dom.detachContents(this.el, this.$el);
  },


  // Checks whether a view is currently present within the region. Returns `true` if there is
  // and `false` if no view is present.
  hasView: function hasView() {
    return !!this.currentView;
  },


  // Reset the region by destroying any existing view and clearing out the cached `$el`.
  // The next time a view is shown via this region, the region will re-query the DOM for
  // the region's `el`.
  reset: function reset(options) {
    this.empty(options);

    if (this.$el) {
      this.el = this._initEl;
    }

    delete this.$el;
    return this;
  },


  _isDestroyed: false,

  isDestroyed: function isDestroyed() {
    return this._isDestroyed;
  },


  // Destroy the region, remove any child view
  // and remove the region from any associated view
  destroy: function destroy(options) {
    if (this._isDestroyed) {
      return this;
    }

    this.triggerMethod('before:destroy', this, options);
    this._isDestroyed = true;

    this.reset(options);

    if (this._name) {
      this._parentView._removeReferences(this._name);
    }
    delete this._parentView;
    delete this._name;

    this.triggerMethod('destroy', this, options);
    this.stopListening();

    return this;
  }
});

// return the region instance from the definition
var buildRegion = function (definition, defaults) {
  if (definition instanceof Region) {
    return definition;
  }

  if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isString(definition)) {
    return buildRegionFromObject(defaults, { el: definition });
  }

  if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(definition)) {
    return buildRegionFromObject(defaults, { regionClass: definition });
  }

  if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isObject(definition)) {
    return buildRegionFromObject(defaults, definition);
  }

  throw new MarionetteError({
    message: 'Improper region configuration type.',
    url: 'marionette.region.html#defining-regions'
  });
};

function buildRegionFromObject(defaults, definition) {
  var options = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({}, defaults, definition);

  var RegionClass = options.regionClass;

  delete options.regionClass;

  return new RegionClass(options);
}

// MixinOptions
// - regions
// - regionClass

var RegionsMixin = {
  regionClass: Region,

  // Internal method to initialize the regions that have been defined in a
  // `regions` attribute on this View.
  _initRegions: function _initRegions() {

    // init regions hash
    this.regions = this.regions || {};
    this._regions = {};

    this.addRegions(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'regions'));
  },


  // Internal method to re-initialize all of the regions by updating
  // the `el` that they point to
  _reInitRegions: function _reInitRegions() {
    _invoke(this._regions, 'reset');
  },


  // Add a single region, by name, to the View
  addRegion: function addRegion(name, definition) {
    var regions = {};
    regions[name] = definition;
    return this.addRegions(regions)[name];
  },


  // Add multiple regions as a {name: definition, name2: def2} object literal
  addRegions: function addRegions(regions) {
    // If there's nothing to add, stop here.
    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isEmpty(regions)) {
      return;
    }

    // Normalize region selectors hash to allow
    // a user to use the @ui. syntax.
    regions = this.normalizeUIValues(regions, 'el');

    // Add the regions definitions to the regions property
    this.regions = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({}, this.regions, regions);

    return this._addRegions(regions);
  },


  // internal method to build and add regions
  _addRegions: function _addRegions(regionDefinitions) {
    var _this = this;

    var defaults = {
      regionClass: this.regionClass,
      parentEl: __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.partial(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result, this, 'el')
    };

    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(regionDefinitions, function (regions, definition, name) {
      regions[name] = buildRegion(definition, defaults);
      _this._addRegion(regions[name], name);
      return regions;
    }, {});
  },
  _addRegion: function _addRegion(region, name) {
    this.triggerMethod('before:add:region', this, name, region);

    region._parentView = this;
    region._name = name;

    this._regions[name] = region;

    this.triggerMethod('add:region', this, name, region);
  },


  // Remove a single region from the View, by name
  removeRegion: function removeRegion(name) {
    var region = this._regions[name];

    this._removeRegion(region, name);

    return region;
  },


  // Remove all regions from the View
  removeRegions: function removeRegions() {
    var regions = this._getRegions();

    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(this._regions, this._removeRegion.bind(this));

    return regions;
  },
  _removeRegion: function _removeRegion(region, name) {
    this.triggerMethod('before:remove:region', this, name, region);

    region.destroy();

    this.triggerMethod('remove:region', this, name, region);
  },


  // Called in a region's destroy
  _removeReferences: function _removeReferences(name) {
    delete this.regions[name];
    delete this._regions[name];
  },


  // Empty all regions in the region manager, but
  // leave them attached
  emptyRegions: function emptyRegions() {
    var regions = this.getRegions();
    _invoke(regions, 'empty');
    return regions;
  },


  // Checks to see if view contains region
  // Accepts the region name
  // hasRegion('main')
  hasRegion: function hasRegion(name) {
    return !!this.getRegion(name);
  },


  // Provides access to regions
  // Accepts the region name
  // getRegion('main')
  getRegion: function getRegion(name) {
    if (!this._isRendered) {
      this.render();
    }
    return this._regions[name];
  },
  _getRegions: function _getRegions() {
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.clone(this._regions);
  },


  // Get all regions
  getRegions: function getRegions() {
    if (!this._isRendered) {
      this.render();
    }
    return this._getRegions();
  },
  showChildView: function showChildView(name, view, options) {
    var region = this.getRegion(name);
    region.show(view, options);
    return view;
  },
  detachChildView: function detachChildView(name) {
    return this.getRegion(name).detachView();
  },
  getChildView: function getChildView(name) {
    return this.getRegion(name).currentView;
  }
};

// Static setter for the renderer
function setRenderer$1(renderer) {
  this.prototype._renderHtml = renderer;
  return this;
}

// View
// ---------

var ClassOptions$1 = ['behaviors', 'childViewEventPrefix', 'childViewEvents', 'childViewTriggers', 'collectionEvents', 'events', 'modelEvents', 'regionClass', 'regions', 'template', 'templateContext', 'triggers', 'ui'];

// Used by _getImmediateChildren
function childReducer(children, region) {
  if (region.currentView) {
    children.push(region.currentView);
  }

  return children;
}

// The standard view. Includes view events, automatic rendering
// templates, nested views, and more.
var View = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View.extend({
  constructor: function constructor(options) {
    this._setOptions(options, ClassOptions$1);

    monitorViewEvents(this);

    this._initBehaviors();
    this._initRegions();

    __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View.prototype.constructor.apply(this, arguments);

    this.delegateEntityEvents();

    this._triggerEventOnBehaviors('initialize', this, options);
  },


  // Overriding Backbone.View's `setElement` to handle
  // if an el was previously defined. If so, the view might be
  // rendered or attached on setElement.
  setElement: function setElement() {
    __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View.prototype.setElement.apply(this, arguments);

    this._isRendered = this.Dom.hasContents(this.el);
    this._isAttached = this.Dom.hasEl(document.documentElement, this.el);

    if (this._isRendered) {
      this.bindUIElements();
    }

    return this;
  },


  // If a template is available, renders it into the view's `el`
  // Re-inits regions and binds UI.
  render: function render() {
    var template = this.getTemplate();

    if (template === false || this._isDestroyed) {
      return this;
    }

    this.triggerMethod('before:render', this);

    // If this is not the first render call, then we need to
    // re-initialize the `el` for each region
    if (this._isRendered) {
      this._reInitRegions();
    }

    this._renderTemplate(template);
    this.bindUIElements();

    this._isRendered = true;
    this.triggerMethod('render', this);

    return this;
  },


  // called by ViewMixin destroy
  _removeChildren: function _removeChildren() {
    this.removeRegions();
  },
  _getImmediateChildren: function _getImmediateChildren() {
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(this._regions, childReducer, []);
  }
}, {
  setRenderer: setRenderer$1,
  setDomApi: setDomApi$1
});

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(View.prototype, ViewMixin, RegionsMixin);

// Provide a container to store, retrieve and
// shut down child views.
var Container = function Container() {
  this._init();
};

// Mix in methods from Underscore, for iteration, and other
// collection related features.
// Borrowing this code from Backbone.Collection:
// https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L962
var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 'last', 'without', 'isEmpty', 'pluck', 'reduce', 'partition'];

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(methods, function (method) {
  Container.prototype[method] = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a[method].apply(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a, [this._views].concat(args));
  };
});

function stringComparator(comparator, view) {
  return view.model && view.model.get(comparator);
}

// Container Methods
// -----------------

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(Container.prototype, {

  // Initializes an empty container
  _init: function _init() {
    this._views = [];
    this._viewsByCid = {};
    this._indexByModel = {};
    this._updateLength();
  },


  // Add a view to this container. Stores the view
  // by `cid` and makes it searchable by the model
  // cid (and model itself). Additionally it stores
  // the view by index in the _views array
  _add: function _add(view) {
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._views.length;

    this._addViewIndexes(view);

    // add to end by default
    this._views.splice(index, 0, view);

    this._updateLength();
  },
  _addViewIndexes: function _addViewIndexes(view) {
    // store the view
    this._viewsByCid[view.cid] = view;

    // index it by model
    if (view.model) {
      this._indexByModel[view.model.cid] = view;
    }
  },


  // Sort (mutate) and return the array of the child views.
  _sort: function _sort(comparator, context) {
    if (typeof comparator === 'string') {
      comparator = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.partial(stringComparator, comparator);
      return this._sortBy(comparator);
    }

    if (comparator.length === 1) {
      return this._sortBy(comparator.bind(context));
    }

    return this._views.sort(comparator.bind(context));
  },


  // Makes `_.sortBy` mutate the array to match `this._views.sort`
  _sortBy: function _sortBy(comparator) {
    var sortedViews = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.sortBy(this._views, comparator);

    this._set(sortedViews);

    return sortedViews;
  },


  // Replace array contents without overwriting the reference.
  // Should not add/remove views
  _set: function _set(views, shouldReset) {
    this._views.length = 0;

    this._views.push.apply(this._views, views.slice(0));

    if (shouldReset) {
      this._viewsByCid = {};
      this._indexByModel = {};

      __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(views, this._addViewIndexes.bind(this));

      this._updateLength();
    }
  },


  // Swap views by index
  _swap: function _swap(view1, view2) {
    var view1Index = this.findIndexByView(view1);
    var view2Index = this.findIndexByView(view2);

    if (view1Index === -1 || view2Index === -1) {
      return;
    }

    var swapView = this._views[view1Index];
    this._views[view1Index] = this._views[view2Index];
    this._views[view2Index] = swapView;
  },


  // Find a view by the model that was attached to it.
  // Uses the model's `cid` to find it.
  findByModel: function findByModel(model) {
    return this.findByModelCid(model.cid);
  },


  // Find a view by the `cid` of the model that was attached to it.
  findByModelCid: function findByModelCid(modelCid) {
    return this._indexByModel[modelCid];
  },


  // Find a view by index.
  findByIndex: function findByIndex(index) {
    return this._views[index];
  },


  // Find the index of a view instance
  findIndexByView: function findIndexByView(view) {
    return this._views.indexOf(view);
  },


  // Retrieve a view by its `cid` directly
  findByCid: function findByCid(cid) {
    return this._viewsByCid[cid];
  },
  hasView: function hasView(view) {
    return !!this.findByCid(view.cid);
  },


  // Remove a view and clean up index references.
  _remove: function _remove(view) {
    if (!this._viewsByCid[view.cid]) {
      return;
    }

    // delete model index
    if (view.model) {
      delete this._indexByModel[view.model.cid];
    }

    // remove the view from the container
    delete this._viewsByCid[view.cid];

    var index = this.findIndexByView(view);
    this._views.splice(index, 1);

    this._updateLength();
  },


  // Update the `.length` attribute on this container
  _updateLength: function _updateLength() {
    this.length = this._views.length;
  }
});

// Collection View
// ---------------

var classErrorName$1 = 'CollectionViewError';

var ClassOptions$3 = ['behaviors', 'childView', 'childViewContainer', 'childViewEventPrefix', 'childViewEvents', 'childViewOptions', 'childViewTriggers', 'collectionEvents', 'emptyView', 'emptyViewOptions', 'events', 'modelEvents', 'sortWithCollection', 'template', 'templateContext', 'triggers', 'ui', 'viewComparator', 'viewFilter'];

// A view that iterates over a Backbone.Collection
// and renders an individual child view for each model.
var CollectionView = __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View.extend({
  // flag for maintaining the sorted order of the collection
  sortWithCollection: true,

  // constructor
  constructor: function constructor(options) {
    this._setOptions(options, ClassOptions$3);

    monitorViewEvents(this);

    this._initChildViewStorage();
    this._initBehaviors();

    __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View.prototype.constructor.apply(this, arguments);

    // Init empty region
    this.getEmptyRegion();

    this.delegateEntityEvents();

    this._triggerEventOnBehaviors('initialize', this, options);
  },


  // Internal method to set up the `children` object for storing all of the child views
  // `_children` represents all child views
  // `children` represents only views filtered to be shown
  _initChildViewStorage: function _initChildViewStorage() {
    this._children = new Container();
    this.children = new Container();
  },


  // Create an region to show the emptyView
  getEmptyRegion: function getEmptyRegion() {
    if (this._emptyRegion && !this._emptyRegion.isDestroyed()) {
      return this._emptyRegion;
    }

    this._emptyRegion = new Region({ el: this.el, replaceElement: false });

    this._emptyRegion._parentView = this;

    return this._emptyRegion;
  },


  // Configured the initial events that the collection view binds to.
  _initialEvents: function _initialEvents() {
    if (this._isRendered) {
      return;
    }

    this.listenTo(this.collection, {
      'sort': this._onCollectionSort,
      'reset': this._onCollectionReset,
      'update': this._onCollectionUpdate
    });
  },


  // Internal method. This checks for any changes in the order of the collection.
  // If the index of any view doesn't match, it will re-sort.
  _onCollectionSort: function _onCollectionSort(collection, _ref) {
    var add = _ref.add,
        merge = _ref.merge,
        remove = _ref.remove;

    if (!this.sortWithCollection || this.viewComparator === false) {
      return;
    }

    // If the data is changing we will handle the sort later in `_onCollectionUpdate`
    if (add || remove || merge) {
      return;
    }

    // If the only thing happening here is sorting, sort.
    this.sort();
  },
  _onCollectionReset: function _onCollectionReset() {
    this._destroyChildren();

    this._addChildModels(this.collection.models);

    this.sort();
  },


  // Handle collection update model additions and  removals
  _onCollectionUpdate: function _onCollectionUpdate(collection, options) {
    var changes = options.changes;

    // Remove first since it'll be a shorter array lookup.
    var removedViews = changes.removed.length && this._removeChildModels(changes.removed);

    this._addedViews = changes.added.length && this._addChildModels(changes.added);

    this._detachChildren(removedViews);

    this.sort();

    // Destroy removed child views after all of the render is complete
    this._removeChildViews(removedViews);
  },
  _removeChildModels: function _removeChildModels(models) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(models, function (views, model) {
      var removeView = _this._removeChildModel(model);

      if (removeView) {
        views.push(removeView);
      }

      return views;
    }, []);
  },
  _removeChildModel: function _removeChildModel(model) {
    var view = this._children.findByModel(model);

    if (view) {
      this._removeChild(view);
    }

    return view;
  },
  _removeChild: function _removeChild(view) {
    this.triggerMethod('before:remove:child', this, view);

    this.children._remove(view);
    this._children._remove(view);

    this.triggerMethod('remove:child', this, view);
  },


  // Added views are returned for consistency with _removeChildModels
  _addChildModels: function _addChildModels(models) {
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.map(models, this._addChildModel.bind(this));
  },
  _addChildModel: function _addChildModel(model) {
    var view = this._createChildView(model);

    this._addChild(view);

    return view;
  },
  _createChildView: function _createChildView(model) {
    var ChildView = this._getChildView(model);
    var childViewOptions = this._getChildViewOptions(model);
    var view = this.buildChildView(model, ChildView, childViewOptions);

    return view;
  },
  _addChild: function _addChild(view, index) {
    this.triggerMethod('before:add:child', this, view);

    this._setupChildView(view);
    this._children._add(view, index);
    this.children._add(view, index);

    this.triggerMethod('add:child', this, view);
  },


  // Retrieve the `childView` class
  // The `childView` property can be either a view class or a function that
  // returns a view class. If it is a function, it will receive the model that
  // will be passed to the view instance (created from the returned view class)
  _getChildView: function _getChildView(child) {
    var childView = this.childView;

    if (!childView) {
      throw new MarionetteError({
        name: classErrorName$1,
        message: 'A "childView" must be specified',
        url: 'marionette.collectionview.html#collectionviews-childview'
      });
    }

    childView = this._getView(childView, child);

    if (!childView) {
      throw new MarionetteError({
        name: classErrorName$1,
        message: '"childView" must be a view class or a function that returns a view class',
        url: 'marionette.collectionview.html#collectionviews-childview'
      });
    }

    return childView;
  },


  // First check if the `view` is a view class (the common case)
  // Then check if it's a function (which we assume that returns a view class)
  _getView: function _getView(view, child) {
    if (view.prototype instanceof __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View || view === __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View) {
      return view;
    } else if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(view)) {
      return view.call(this, child);
    }
  },
  _getChildViewOptions: function _getChildViewOptions(child) {
    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(this.childViewOptions)) {
      return this.childViewOptions(child);
    }

    return this.childViewOptions;
  },


  // Build a `childView` for a model in the collection.
  // Override to customize the build
  buildChildView: function buildChildView(child, ChildViewClass, childViewOptions) {
    var options = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({ model: child }, childViewOptions);
    return new ChildViewClass(options);
  },
  _setupChildView: function _setupChildView(view) {
    monitorViewEvents(view);

    // We need to listen for if a view is destroyed in a way other
    // than through the CollectionView.
    // If this happens we need to remove the reference to the view
    // since once a view has been destroyed we can not reuse it.
    view.on('destroy', this.removeChildView, this);

    // set up the child view event forwarding
    this._proxyChildViewEvents(view);
  },


  // used by ViewMixin's `_childViewEventHandler`
  _getImmediateChildren: function _getImmediateChildren() {
    return this.children._views;
  },


  // Overriding Backbone.View's `setElement` to handle
  // if an el was previously defined. If so, the view might be
  // attached on setElement.
  setElement: function setElement() {
    __WEBPACK_IMPORTED_MODULE_0_backbone___default.a.View.prototype.setElement.apply(this, arguments);

    this._isAttached = this.Dom.hasEl(document.documentElement, this.el);

    return this;
  },


  // Render children views.
  render: function render() {
    if (this._isDestroyed) {
      return this;
    }
    this.triggerMethod('before:render', this);

    this._destroyChildren();

    if (this.collection) {
      this._addChildModels(this.collection.models);
      this._initialEvents();
    }

    var template = this.getTemplate();

    if (template) {
      this._renderTemplate(template);
      this.bindUIElements();
    }
    this._getChildViewContainer();
    this.sort();

    this._isRendered = true;

    this.triggerMethod('render', this);
    return this;
  },


  // Get a container within the template to add the children within
  _getChildViewContainer: function _getChildViewContainer() {
    var childViewContainer = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'childViewContainer');
    this.$container = childViewContainer ? this.$(childViewContainer) : this.$el;

    if (!this.$container.length) {
      throw new MarionetteError({
        name: classErrorName$1,
        message: 'The specified "childViewContainer" was not found: ' + childViewContainer,
        url: 'marionette.collectionview.html#defining-the-childviewcontainer'
      });
    }
  },


  // Sorts the children then filters and renders the results.
  sort: function sort() {
    this._sortChildren();

    this.filter();

    return this;
  },


  // Sorts views by viewComparator and sets the children to the new order
  _sortChildren: function _sortChildren() {
    if (!this._children.length) {
      return;
    }

    var viewComparator = this.getComparator();

    if (!viewComparator) {
      return;
    }

    // If children are sorted prevent added to end perf
    delete this._addedViews;

    this.triggerMethod('before:sort', this);

    this._children._sort(viewComparator, this);

    this.triggerMethod('sort', this);
  },


  // Sets the view's `viewComparator` and applies the sort if the view is ready.
  // To prevent the render pass `{ preventRender: true }` as the 2nd argument.
  setComparator: function setComparator(comparator) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        preventRender = _ref2.preventRender;

    var comparatorChanged = this.viewComparator !== comparator;
    var shouldSort = comparatorChanged && !preventRender;

    this.viewComparator = comparator;

    if (shouldSort) {
      this.sort();
    }

    return this;
  },


  // Clears the `viewComparator` and follows the same rules for rendering as `setComparator`.
  removeComparator: function removeComparator(options) {
    return this.setComparator(null, options);
  },


  // If viewComparator is overriden it will be returned here.
  // Additionally override this function to provide custom
  // viewComparator logic
  getComparator: function getComparator() {
    if (this.viewComparator) {
      return this.viewComparator;
    }

    if (!this.sortWithCollection || this.viewComparator === false || !this.collection) {
      return false;
    }

    return this._viewComparator;
  },


  // Default internal view comparator that order the views by
  // the order of the collection
  _viewComparator: function _viewComparator(view) {
    return this.collection.indexOf(view.model);
  },


  // This method filters the children views and renders the results
  filter: function filter() {
    if (this._isDestroyed) {
      return this;
    }

    this._filterChildren();

    this._renderChildren();

    return this;
  },
  _filterChildren: function _filterChildren() {
    var _this2 = this;

    if (!this._children.length) {
      return;
    }

    var viewFilter = this._getFilter();

    if (!viewFilter) {
      var shouldReset = this.children.length !== this._children.length;

      this.children._set(this._children._views, shouldReset);

      return;
    }

    // If children are filtered prevent added to end perf
    delete this._addedViews;

    this.triggerMethod('before:filter', this);

    var attachViews = [];
    var detachViews = [];

    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(this._children._views, function (view, key, children) {
      (viewFilter.call(_this2, view, key, children) ? attachViews : detachViews).push(view);
    });

    this._detachChildren(detachViews);

    // reset children
    this.children._set(attachViews, true);

    this.triggerMethod('filter', this, attachViews, detachViews);
  },


  // This method returns a function for the viewFilter
  _getFilter: function _getFilter() {
    var viewFilter = this.getFilter();

    if (!viewFilter) {
      return false;
    }

    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(viewFilter)) {
      return viewFilter;
    }

    // Support filter predicates `{ fooFlag: true }`
    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isObject(viewFilter)) {
      var matcher = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.matches(viewFilter);
      return function (view) {
        return matcher(view.model && view.model.attributes);
      };
    }

    // Filter by model attribute
    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isString(viewFilter)) {
      return function (view) {
        return view.model && view.model.get(viewFilter);
      };
    }

    throw new MarionetteError({
      name: classErrorName$1,
      message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy',
      url: 'marionette.collectionview.html#defining-the-viewfilter'
    });
  },


  // Override this function to provide custom
  // viewFilter logic
  getFilter: function getFilter() {
    return this.viewFilter;
  },


  // Sets the view's `viewFilter` and applies the filter if the view is ready.
  // To prevent the render pass `{ preventRender: true }` as the 2nd argument.
  setFilter: function setFilter(filter) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        preventRender = _ref3.preventRender;

    var filterChanged = this.viewFilter !== filter;
    var shouldRender = filterChanged && !preventRender;

    this.viewFilter = filter;

    if (shouldRender) {
      this.filter();
    }

    return this;
  },


  // Clears the `viewFilter` and follows the same rules for rendering as `setFilter`.
  removeFilter: function removeFilter(options) {
    return this.setFilter(null, options);
  },
  _detachChildren: function _detachChildren(detachingViews) {
    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(detachingViews, this._detachChildView.bind(this));
  },
  _detachChildView: function _detachChildView(view) {
    var shouldTriggerDetach = view._isAttached && this.monitorViewEvents !== false;
    if (shouldTriggerDetach) {
      view.triggerMethod('before:detach', view);
    }

    this.detachHtml(view);

    if (shouldTriggerDetach) {
      view._isAttached = false;
      view.triggerMethod('detach', view);
    }
  },


  // Override this method to change how the collectionView detaches a child view
  detachHtml: function detachHtml(view) {
    this.Dom.detachEl(view.el, view.$el);
  },
  _renderChildren: function _renderChildren() {
    var views = this._addedViews || this.children._views;

    this.triggerMethod('before:render:children', this, views);

    if (this.isEmpty()) {
      this._showEmptyView();
    } else {
      this._destroyEmptyView();

      var els = this._getBuffer(views);

      this._attachChildren(els, views);
    }

    delete this._addedViews;

    this.triggerMethod('render:children', this, views);
  },


  // Renders each view and creates a fragment buffer from them
  _getBuffer: function _getBuffer(views) {
    var _this3 = this;

    var elBuffer = this.Dom.createBuffer();

    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(views, function (view) {
      renderView(view);
      _this3.Dom.appendContents(elBuffer, view.el, { _$contents: view.$el });
    });

    return elBuffer;
  },
  _attachChildren: function _attachChildren(els, views) {
    var shouldTriggerAttach = this._isAttached && this.monitorViewEvents !== false;

    views = shouldTriggerAttach ? views : [];

    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(views, function (view) {
      if (view._isAttached) {
        return;
      }
      view.triggerMethod('before:attach', view);
    });

    this.attachHtml(els, this.$container);

    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(views, function (view) {
      if (view._isAttached) {
        return;
      }
      view._isAttached = true;
      view.triggerMethod('attach', view);
    });
  },


  // Override this method to do something other than `.append`.
  // You can attach any HTML at this point including the els.
  attachHtml: function attachHtml(els, $container) {
    this.Dom.appendContents($container[0], els, { _$el: $container });
  },
  isEmpty: function isEmpty() {
    return !this.children.length;
  },
  _showEmptyView: function _showEmptyView() {
    var EmptyView = this._getEmptyView();

    if (!EmptyView) {
      return;
    }

    var options = this._getEmptyViewOptions();

    var emptyRegion = this.getEmptyRegion();

    emptyRegion.show(new EmptyView(options));
  },


  // Retrieve the empty view class
  _getEmptyView: function _getEmptyView() {
    var emptyView = this.emptyView;

    if (!emptyView) {
      return;
    }

    return this._getView(emptyView);
  },


  // Remove the emptyView
  _destroyEmptyView: function _destroyEmptyView() {
    var emptyRegion = this.getEmptyRegion();
    // Only empty if a view is show so the region
    // doesn't detach any other unrelated HTML
    if (emptyRegion.hasView()) {
      emptyRegion.empty();
    }
  },


  //
  _getEmptyViewOptions: function _getEmptyViewOptions() {
    var emptyViewOptions = this.emptyViewOptions || this.childViewOptions;

    if (__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(emptyViewOptions)) {
      return emptyViewOptions.call(this);
    }

    return emptyViewOptions;
  },
  swapChildViews: function swapChildViews(view1, view2) {
    if (!this._children.hasView(view1) || !this._children.hasView(view2)) {
      throw new MarionetteError({
        name: classErrorName$1,
        message: 'Both views must be children of the collection view to swap.',
        url: 'marionette.collectionview.html#swapping-child-views'
      });
    }

    this._children._swap(view1, view2);
    this.Dom.swapEl(view1.el, view2.el);

    // If the views are not filtered the same, refilter
    if (this.children.hasView(view1) !== this.children.hasView(view2)) {
      this.filter();
    } else {
      this.children._swap(view1, view2);
    }

    return this;
  },


  // Render the child's view and add it to the HTML for the collection view at a given index, based on the current sort
  addChildView: function addChildView(view, index) {
    if (!view || view._isDestroyed) {
      return view;
    }

    if (!this._isRendered) {
      this.render();
    }

    var hasIndex = typeof index !== 'undefined';

    // Only cache views if added to the end
    if (!hasIndex || index >= this._children.length) {
      this._addedViews = [view];
    }
    this._addChild(view, index);

    if (hasIndex) {
      this._renderChildren();
    } else {
      this.sort();
    }

    return view;
  },


  // Detach a view from the children.  Best used when adding a
  // childView from `addChildView`
  detachChildView: function detachChildView(view) {
    this.removeChildView(view, { shouldDetach: true });

    return view;
  },


  // Remove the child view and destroy it.  Best used when adding a
  // childView from `addChildView`
  // The options argument is for internal use only
  removeChildView: function removeChildView(view, options) {
    if (!view) {
      return view;
    }

    this._removeChildView(view, options);

    this._removeChild(view);

    if (this.isEmpty()) {
      this._showEmptyView();
    }

    return view;
  },
  _removeChildViews: function _removeChildViews(views) {
    __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.each(views, this._removeChildView.bind(this));
  },
  _removeChildView: function _removeChildView(view) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        shouldDetach = _ref4.shouldDetach;

    view.off('destroy', this.removeChildView, this);

    if (shouldDetach) {
      this._detachChildView(view);
    } else {
      this._destroyChildView(view);
    }

    this.stopListening(view);
  },
  _destroyChildView: function _destroyChildView(view) {
    if (view._isDestroyed) {
      return;
    }

    var shouldDisableEvents = this.monitorViewEvents === false;
    destroyView(view, shouldDisableEvents);
  },


  // called by ViewMixin destroy
  _removeChildren: function _removeChildren() {
    this._destroyChildren();
    var emptyRegion = this.getEmptyRegion();
    emptyRegion.destroy();
    delete this._addedViews;
  },


  // Destroy the child views that this collection view is holding on to, if any
  _destroyChildren: function _destroyChildren() {
    if (!this._children.length) {
      return;
    }

    this.triggerMethod('before:destroy:children', this);
    if (this.monitorViewEvents === false) {
      this.Dom.detachContents(this.el, this.$el);
    }

    this._removeChildViews(this._children._views);

    // After all children have been destroyed re-init the container
    this._children._init();
    this.children._init();

    this.triggerMethod('destroy:children', this);
  }
}, {
  setDomApi: setDomApi$1,
  setRenderer: setRenderer$1
});

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(CollectionView.prototype, ViewMixin);

// Behavior
// --------

// A Behavior is an isolated set of DOM /
// user interactions that can be mixed into any View.
// Behaviors allow you to blackbox View specific interactions
// into portable logical chunks, keeping your views simple and your code DRY.

var ClassOptions$4 = ['collectionEvents', 'events', 'modelEvents', 'triggers', 'ui'];

var Behavior = function Behavior(options, view) {
  // Setup reference to the view.
  // this comes in handle when a behavior
  // wants to directly talk up the chain
  // to the view.
  this.view = view;

  this._setOptions(options, ClassOptions$4);
  this.cid = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.uniqueId(this.cidPrefix);

  // Construct an internal UI hash using the behaviors UI
  // hash combined and overridden by the view UI hash.
  // This allows the user to use UI hash elements defined
  // in the parent view as well as those defined in the behavior.
  // This order will help the reuse and share of a behavior
  // between multiple views, while letting a view override
  // a selector under an UI key.
  this.ui = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend({}, __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'ui'), __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(view, 'ui'));

  // Proxy view triggers
  this.listenTo(view, 'all', this.triggerMethod);

  this.initialize.apply(this, arguments);
};

Behavior.extend = extend;

// Behavior Methods
// --------------

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(Behavior.prototype, CommonMixin, DelegateEntityEventsMixin, TriggersMixin, UIMixin, {
  cidPrefix: 'mnb',

  // This is a noop method intended to be overridden
  initialize: function initialize() {},


  // proxy behavior $ method to the view
  // this is useful for doing jquery DOM lookups
  // scoped to behaviors view.
  $: function $() {
    return this.view.$.apply(this.view, arguments);
  },


  // Stops the behavior from listening to events.
  destroy: function destroy() {
    this.stopListening();

    this.view._removeBehavior(this);

    this._deleteEntityEventHandlers();

    return this;
  },
  proxyViewProperties: function proxyViewProperties() {
    this.$el = this.view.$el;
    this.el = this.view.el;

    return this;
  },
  bindUIElements: function bindUIElements() {
    this._bindUIElements();

    return this;
  },
  unbindUIElements: function unbindUIElements() {
    this._unbindUIElements();

    return this;
  },
  getUI: function getUI(name) {
    return this._getUI(name);
  },


  // Handle `modelEvents`, and `collectionEvents` configuration
  delegateEntityEvents: function delegateEntityEvents() {
    this._delegateEntityEvents(this.view.model, this.view.collection);

    return this;
  },
  undelegateEntityEvents: function undelegateEntityEvents() {
    this._undelegateEntityEvents(this.view.model, this.view.collection);

    return this;
  },
  _getEvents: function _getEvents() {
    var _this = this;

    if (!this.events) {
      return;
    }

    // Normalize behavior events hash to allow
    // a user to use the @ui. syntax.
    var behaviorEvents = this.normalizeUIKeys(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'events'));

    // binds the handler to the behavior and builds a unique eventName
    return __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.reduce(behaviorEvents, function (events, behaviorHandler, key) {
      if (!__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.isFunction(behaviorHandler)) {
        behaviorHandler = _this[behaviorHandler];
      }
      if (!behaviorHandler) {
        return events;
      }
      key = getNamespacedEventName(key, _this.cid);
      events[key] = behaviorHandler.bind(_this);
      return events;
    }, {});
  },


  // Internal method to build all trigger handlers for a given behavior
  _getTriggers: function _getTriggers() {
    if (!this.triggers) {
      return;
    }

    // Normalize behavior triggers hash to allow
    // a user to use the @ui. syntax.
    var behaviorTriggers = this.normalizeUIKeys(__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.result(this, 'triggers'));

    return this._getViewTriggers(this.view, behaviorTriggers);
  }
});

// Application
// -----------

var ClassOptions$5 = ['channelName', 'radioEvents', 'radioRequests', 'region', 'regionClass'];

var Application = function Application(options) {
  this._setOptions(options, ClassOptions$5);
  this.cid = __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.uniqueId(this.cidPrefix);
  this._initRegion();
  this._initRadio();
  this.initialize.apply(this, arguments);
};

Application.extend = extend;

// Application Methods
// --------------

__WEBPACK_IMPORTED_MODULE_1_underscore___default.a.extend(Application.prototype, CommonMixin, DestroyMixin, RadioMixin, {
  cidPrefix: 'mna',

  // This is a noop method intended to be overridden
  initialize: function initialize() {},


  // Kick off all of the application's processes.
  start: function start(options) {
    this.triggerMethod('before:start', this, options);
    this.triggerMethod('start', this, options);
    return this;
  },


  regionClass: Region,

  _initRegion: function _initRegion() {
    var region = this.region;

    if (!region) {
      return;
    }

    var defaults = {
      regionClass: this.regionClass
    };

    this._region = buildRegion(region, defaults);
  },
  getRegion: function getRegion() {
    return this._region;
  },
  showView: function showView(view) {
    var region = this.getRegion();

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    region.show.apply(region, [view].concat(args));
    return view;
  },
  getView: function getView() {
    return this.getRegion().currentView;
  }
});

// Utilities

var bindEvents = proxy(bindEvents$1);
var unbindEvents = proxy(unbindEvents$1);
var bindRequests = proxy(bindRequests$1);
var unbindRequests = proxy(unbindRequests$1);
var mergeOptions = proxy(mergeOptions$1);
var getOption = proxy(getOption$1);
var normalizeMethods = proxy(normalizeMethods$1);
var triggerMethod$$1 = proxy(triggerMethod$1);

// Configuration

var setDomApi = function setDomApi(mixin) {
  CollectionView.setDomApi(mixin);
  Region.setDomApi(mixin);
  View.setDomApi(mixin);
};
var setRenderer = function setRenderer(renderer) {
  CollectionView.setRenderer(renderer);
  View.setRenderer(renderer);
};


//# sourceMappingURL=backbone.marionette.esm.js.map


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Device = function Device() {
  var ua = window.navigator.userAgent;

  var device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    iphoneX: false,
    ipod: false,
    ipad: false,
    cordova: window.cordova || window.phonegap,
    phonegap: window.cordova || window.phonegap
  };

  var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var iphoneX = iphone && window.screen.width === 375 && window.screen.height === 812;

  // Windows
  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  }
  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
    device.iphoneX = iphoneX;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Webview
  device.webView = (iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || window.navigator.standalone);
  device.webview = device.webView;

  // Desktop
  device.desktop = !(device.os || device.android || device.webView);

  // Minimal UI
  if (device.os && device.os === 'ios') {
    var osVersionArr = device.osVersion.split('.');
    var metaViewport = document.querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  }

  // Check for status bar and fullscreen app mode
  device.needsStatusbarOverlay = function needsStatusbarOverlay() {
    if (device.webView && window.innerWidth * window.innerHeight === window.screen.width * window.screen.height) {
      if (device.iphoneX && (window.orientation === 90 || window.orientation === -90)) {
        return false;
      }
      return true;
    }
    return false;
  };
  device.statusbar = device.needsStatusbarOverlay();

  // Pixel Ratio
  device.pixelRatio = window.devicePixelRatio || 1;

  // Export object
  return device;
}();

exports.default = Device;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var History = {
  queue: [],
  clearQueue: function clearQueue() {
    if (History.queue.length === 0) return;
    var currentQueue = History.queue.shift();
    currentQueue();
  },

  routerQueue: [],
  clearRouterQueue: function clearRouterQueue() {
    if (History.routerQueue.length === 0) return;
    var currentQueue = History.routerQueue.pop();
    var router = currentQueue.router,
        stateUrl = currentQueue.stateUrl,
        action = currentQueue.action;


    var animate = router.params.animate;
    if (router.params.pushStateAnimate === false) animate = false;

    if (action === 'back') {
      router.back({ animate: animate, pushState: false });
    }
    if (action === 'load') {
      router.navigate(stateUrl, { animate: animate, pushState: false });
    }
  },
  handle: function handle(e) {
    if (History.blockPopstate) return;
    var app = this;
    // const mainView = app.views.main;
    var state = e.state;
    History.previousState = History.state;
    History.state = state;

    History.allowChange = true;
    History.clearQueue();

    state = History.state;
    if (!state) state = {};

    app.views.forEach(function (view) {
      var router = view.router;
      var viewState = state[view.id];
      if (!viewState && view.params.pushState) {
        viewState = {
          url: view.router.history[0]
        };
      }
      if (!viewState) return;
      var stateUrl = viewState.url || undefined;

      var animate = router.params.animate;
      if (router.params.pushStateAnimate === false) animate = false;

      if (stateUrl !== router.url) {
        if (router.history.indexOf(stateUrl) >= 0) {
          // Go Back
          if (router.allowPageChange) {
            router.back({ animate: animate, pushState: false });
          } else {
            History.routerQueue.push({
              action: 'back',
              router: router
            });
          }
        } else if (router.allowPageChange) {
          // Load page
          router.navigate(stateUrl, { animate: animate, pushState: false });
        } else {
          History.routerQueue.unshift({
            action: 'load',
            stateUrl: stateUrl,
            router: router
          });
        }
      }
    });
  },
  push: function push(viewId, viewState, url) {
    if (!History.allowChange) {
      History.queue.push(function () {
        History.push(viewId, viewState, url);
      });
      return;
    }
    History.previousState = History.state;
    var newState = _utils2.default.extend({}, History.previousState || {}, _defineProperty({}, viewId, viewState));
    History.state = newState;
    window.history.pushState(newState, '', url);
  },
  replace: function replace(viewId, viewState, url) {
    if (!History.allowChange) {
      History.queue.push(function () {
        History.replace(viewId, viewState, url);
      });
      return;
    }
    History.previousState = History.state;
    var newState = _utils2.default.extend({}, History.previousState || {}, _defineProperty({}, viewId, viewState));
    History.state = newState;
    window.history.replaceState(newState, '', url);
  },
  go: function go(index) {
    History.allowChange = false;
    window.history.go(index);
  },
  back: function back() {
    History.allowChange = false;
    window.history.back();
  },

  allowChange: true,
  previousState: {},
  state: window.history.state,
  blockPopstate: true,
  init: function init(app) {
    (0, _dom2.default)(window).on('load', function () {
      setTimeout(function () {
        History.blockPopstate = false;
      }, 0);
    });

    if (document.readyState && document.readyState === 'complete') {
      History.blockPopstate = false;
    }

    (0, _dom2.default)(window).on('popstate', History.handle.bind(app));
  }
};

exports.default = History;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Support = function Support() {
  var positionSticky = function supportPositionSticky() {
    var support = false;
    var div = document.createElement('div');
    'sticky -webkit-sticky -moz-sticky'.split(' ').forEach(function (prop) {
      if (support) return;
      div.style.position = prop;
      if (div.style.position === prop) {
        support = true;
      }
    });
    return support;
  }();

  return {
    positionSticky: positionSticky,
    touch: function checkTouch() {
      return !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
    }(),

    transforms3d: function checkTransforms3d() {
      var div = document.createElement('div').style;
      return 'webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div;
    }(),

    flexbox: function checkFlexbox() {
      var div = document.createElement('div').style;
      var styles = 'alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient'.split(' ');
      for (var i = 0; i < styles.length; i += 1) {
        if (styles[i] in div) return true;
      }
      return false;
    }(),

    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),

    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }(),

    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}();

exports.default = Support;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushPage", function() { return pushPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popPage", function() { return popPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPopup", function() { return showPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showView", function() { return showView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncRoute", function() { return asyncRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_framework7__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_framework7___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_framework7__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone_radio__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_backbone_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_backbone_radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__ = __webpack_require__(3);





var mnRouteMap = new WeakMap();
var viewRoutesMap = new WeakMap();
var routerChannel = __WEBPACK_IMPORTED_MODULE_2_backbone_radio___default.a.channel('router');

function RouteContext(router, route) {
  var routes = viewRoutesMap.get(router);
  var routeIndex = routes.indexOf(route);
  this.parentRoutes = routes.slice(0, routeIndex);
}

RouteContext.prototype.trigger = function () {
  var parentRoutes = this.parentRoutes;
  for (var i = parentRoutes.length - 1; i >= 0; i--) {
    var channel = parentRoutes[i]._contextChannel;
    if (channel) {
      channel.trigger.apply(channel, arguments);
    }
  }
};

RouteContext.prototype.request = function (name) {
  var parentRoutes = this.parentRoutes;
  for (var i = parentRoutes.length - 1; i >= 0; i--) {
    var channel = parentRoutes[i]._contextChannel;
    if (channel && channel._requests[name]) {
      return channel.request.apply(channel, arguments);
    }
  }
};

var Route = __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["MnObject"].extend({
  constructor: function constructor(options) {
    this.mergeOptions(options, ['viewClass', 'viewOptions']);
    __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["MnObject"].call(this, options);
    this._bindContext();
  },


  cidPrefix: 'rou',

  activate: function activate() {},
  deactivate: function deactivate() {},
  renderView: function renderView(transition) {
    if (this.view && this.updateView(transition)) return;
    var ViewClass = this.viewClass || __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["View"];
    var viewOptions = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.result(this, 'viewOptions', {});
    if (!(ViewClass.prototype instanceof __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["View"])) {
      if (__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.isFunction(ViewClass)) {
        ViewClass = ViewClass.call(this);
      }
      if (!(ViewClass.prototype instanceof __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["View"])) {
        viewOptions = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.extend({}, ViewClass, viewOptions);
        ViewClass = __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["View"];
      }
    }
    var view = new ViewClass(viewOptions);
    if (this.viewEvents) {
      Object(__WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["bindEvents"])(this, view, this.viewEvents);
    }
    this.on('destroy', function () {
      if (this.view) {
        this.view.destroy();
        this.view = void 0;
      }
    }, this);
    view.render();
    this.view = view;
    // routerChannel.trigger('route:render', this)
  },
  updateView: function updateView() {},
  getContext: function getContext() {
    // todo: cache context??
    return new RouteContext(this.$router, this);
  },
  _bindContext: function _bindContext() {
    var requests = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.result(this, 'contextRequests');
    var events = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.result(this, 'contextEvents');
    var channel = void 0;
    if (!requests && !events) {
      return;
    }

    this._contextChannel = channel = new __WEBPACK_IMPORTED_MODULE_2_backbone_radio___default.a.Channel('__routeContext_' + this.cid);

    this.bindRequests(channel, requests);
    this.bindEvents(channel, events);
  },


  $router: null
});

function createComponent(router, mnRoute, transition) {
  return {
    beforeMount: function beforeMount() {
      var view = mnRoute.view;
      if (view) view.triggerMethod('before:attach', view);
    },
    mounted: function mounted() {
      var view = mnRoute.view;
      if (view) view.triggerMethod('attach', view);
    },
    destroyed: function destroyed() {
      var view = mnRoute.view;
      if (view) view.triggerMethod('before:detach', view);
      router.once('routeChanged', function () {
        if (view) view.triggerMethod('detach', view);
        mnRoute.destroy();
      });
      var activeRoutes = viewRoutesMap.get(router);
      if (activeRoutes) {
        var routeIndex = activeRoutes.indexOf(mnRoute);
        if (routeIndex !== -1) activeRoutes.splice(routeIndex, 1);
      }
    },
    render: function render() {
      mnRoute.renderView(transition);
      return mnRoute.view.el;
    }
  };
}

function resolveComponent(router, RouteClass, routeOptions, to, from, resolve, reject) {
  var viewRoutes = void 0;
  var transition = {
    to: to,
    from: from,
    cancel: function cancel() {
      this.isCancelled = true;
    },
    redirect: function redirect() {
      this.isCancelled = true;
      reject();
      router.navigate.apply(router, arguments);
    },
    showPreloader: function showPreloader() {
      var _this = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!router.app.preloader || this.showingPreloader) return;
      this.showingPreloader = true;
      this.timeoutId = setTimeout(function () {
        _this.timeoutId = null;
        router.app.preloader.show();
      }, delay);
    },
    hidePreloader: function hidePreloader() {
      if (this.showingPreloader) {
        router.app.preloader.hide();
        if (this.timeoutId) clearTimeout(this.timeoutId);
      }
    }
  };
  var previousMnRoute = mnRouteMap.get(from);
  if (previousMnRoute) {
    routerChannel.trigger('before:deactivate', transition, previousMnRoute);
    if (!transition.isCancelled) {
      previousMnRoute.deactivate(transition);
      routerChannel.trigger('deactivate', transition, previousMnRoute);
    }
    if (transition.isCancelled) {
      transition.hidePreloader();
      reject();
      return;
    }
  }
  var mnRoute = new RouteClass(routeOptions);
  mnRoute.$router = router;
  routerChannel.trigger('before:activate', transition, mnRoute);
  if (transition.isCancelled) {
    transition.hidePreloader();
    mnRoute.destroy();
    reject();
    return;
  }
  Promise.resolve(mnRoute.activate(transition)).then(function () {
    transition.hidePreloader();
    if (transition.isCancelled) {
      mnRoute.destroy();
      reject();
    } else {
      routerChannel.trigger('activate', transition, mnRoute);
      if (transition.isCancelled) {
        mnRoute.destroy();
        reject();
        return;
      }
      mnRouteMap.set(to, mnRoute);
      viewRoutes = viewRoutesMap.get(router);
      if (!viewRoutes) {
        viewRoutes = [];
        viewRoutesMap.set(router, viewRoutes);
      }
      viewRoutes.push(mnRoute);
      resolve({ component: createComponent(router, mnRoute, transition) });
      routerChannel.trigger('transition', transition);
    }
  }).catch(function (err) {
    transition.hidePreloader();
    routerChannel.trigger('transition:error', transition, err);
    mnRoute.destroy();
    reject();
  });
}

function asyncRoute(routeConfig) {
  var RouteClass = routeConfig;
  var routeOptions = {};
  if (!routeConfig) throw new Error('Invalid config passed to asyncRoute. Expected options hash, View or Route class');
  if (!(routeConfig.prototype instanceof Route)) {
    if (routeConfig.prototype instanceof __WEBPACK_IMPORTED_MODULE_3_backbone_marionette__["View"]) {
      RouteClass = Route.extend({
        viewClass: routeConfig
      });
    } else {
      routeOptions = routeConfig;
      RouteClass = routeConfig.routeClass;
      if (!RouteClass || !(RouteClass.prototype instanceof Route)) {
        RouteClass = Route;
      }
    }
  }
  return function (to, from, resolve, reject) {
    return resolveComponent(this, RouteClass, routeOptions, to, from, resolve, reject);
  };
}

var f7ViewMap = Object.create(null);
var f7App = void 0;

function getF7ViewConfig(name) {
  if (!name) {
    name = f7App.views.current.params.name;
  }
  return f7ViewMap[name];
}

function getF7ViewPages(view) {
  return view.$el.find('.page');
}

function getMnViewFromEvent(event) {
  var f7Route = event.detail.route;
  return f7Route && f7Route.route && f7Route.route.__mn_view__;
}

function registerEvents() {
  Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(document).on('page:beforeinit', function (e) {
    var view = getMnViewFromEvent(e);
    if (view) {
      view._isAttached = true;
      view.triggerMethod('attach', view);
    }
  });

  Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(document).on('page:beforeremove', function (e) {
    var view = getMnViewFromEvent(e);
    if (view) {
      view.destroy();
    }
  });

  Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(document).on('click', '.toolbar.tabbar a', function () {
    var linkEl = this;
    var viewName = linkEl.dataset.view;
    if (viewName && !linkEl.classList.contains('tab-link-active')) {
      showView(viewName).then(function () {
        var $tabbar = Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(linkEl).closest('.tabbar');
        $tabbar.find('.tab-link.tab-link-active').removeClass('tab-link-active');
        linkEl.classList.add('tab-link-active');
      });
    }
  });
}

function createApp(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === undefined ? {} : _ref$options,
      _ref$views = _ref.views,
      views = _ref$views === undefined ? {} : _ref$views;

  var toRender = [];
  f7App = new __WEBPACK_IMPORTED_MODULE_1_framework7___default.a(__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.extend(options, { init: false }));
  if (!views.main) views.main = '.view-main';
  Object.keys(views).forEach(function (viewName) {
    var viewOptions = views[viewName];
    if (typeof viewOptions === 'string') viewOptions = { el: viewOptions };
    var f7View = f7App.views.create(viewOptions.el, {
      name: viewName,
      stackPages: true
    });
    f7ViewMap[viewName] = {
      instance: f7View,
      options: viewOptions
    };
    if (viewOptions.preRender && viewOptions.rootPage) {
      toRender.push(__WEBPACK_IMPORTED_MODULE_0_underscore___default.a.result(viewOptions, 'rootPage'));
    }
  });

  registerEvents();

  return Promise.all(toRender).then(function (views) {
    views.forEach(function (view) {
      view.render();
    });
  }).then(function () {
    // after all pre-rendering is done, init the f7 app
    f7App.init();
    return f7App;
  });
}

function destroyPages(view) {
  var $pages = Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(view.el).children('.page');
  $pages.each(function () {
    var page = this.f7Page;
    var mnView = page && page.route && page.route.route && page.route.route.__mn_view__;
    if (mnView) mnView.destroy();
  });
}

function pushPage(view, viewName) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var f7ViewConfig = getF7ViewConfig(viewName);
  var f7View = f7ViewConfig.instance;
  var loadPopup = f7ViewConfig.options.popup && !getF7ViewPages(f7View).length;
  var containerHTML = void 0;
  options = Object.assign({}, options, { route: { route: { __mn_view__: view } } });
  if (loadPopup) {
    containerHTML = f7View.el.innerHTML;
    options.animate = false;
  }
  if (!view.isRendered()) {
    view.render();
  }
  view.triggerMethod('before:attach', view);
  view.el.dataset.name = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.uniqueId('mn-page-');
  f7View.router.load({ el: view.el }, options);
  if (loadPopup) {
    var $popup = Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(f7View.el).closest('.popup');
    $popup.once('popup:closed', function () {
      destroyPages(f7View);
      // manually reset the view using brute force
      var viewName = f7View.params.name;
      f7View.el.innerHTML = containerHTML;
      f7View.destroy();
      f7ViewConfig.instance = f7App.views.create(f7ViewConfig.options.el, {
        name: viewName,
        stackPages: true
      });
    });
    f7App.popup.open($popup);
  }
}

function popPage(viewName) {
  var f7View = getF7ViewConfig(viewName).instance;
  f7View.router.back();
}

function showPopup(view) {
  if (!view.isRendered()) {
    view.render();
  }
  var $el = Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(view.el);
  $el.addClass('popup');
  $el.once('popup:closed', view.destroy.bind(view));
  f7App.popup.open(view.el, true);
}

function updateActiveView(view) {
  var $views = Object(__WEBPACK_IMPORTED_MODULE_1_framework7__["Dom7"])(view.el).parent('.views');
  if (!$views.length) return;
  $views.children('.view.tab-active').removeClass('tab-active');
  view.el.classList.add('tab-active');
}

function showView(viewName) {
  var viewConfig = getF7ViewConfig(viewName);
  var view = viewConfig.instance;
  if (viewConfig.options.rootPage && !getF7ViewPages(view).length) {
    var rootPage = __WEBPACK_IMPORTED_MODULE_0_underscore___default.a.result(viewConfig.options, 'rootPage');
    return Promise.resolve(rootPage).then(function (pageView) {
      pushPage(pageView, viewName, { animatePages: false });
      updateActiveView(view);
    });
  } else {
    updateActiveView(view);
    return Promise.resolve();
  }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Template7 1.3.5
 * Mobile-first HTML template engine
 * 
 * http://www.idangero.us/template7/
 * 
 * Copyright 2018, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: January 22, 2018
 */
var t7ctx = void 0;
if (typeof window !== 'undefined') {
  t7ctx = window;
} else if (typeof global !== 'undefined') {
  t7ctx = global;
} else {
  t7ctx = undefined;
}

var Template7Context = t7ctx;

var Template7Utils = {
  quoteSingleRexExp: new RegExp('\'', 'g'),
  quoteDoubleRexExp: new RegExp('"', 'g'),
  isFunction: function isFunction(func) {
    return typeof func === 'function';
  },
  escape: function escape(string) {
    return typeof Template7Context !== 'undefined' && Template7Context.escape ? Template7Context.escape(string) : string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },
  helperToSlices: function helperToSlices(string) {
    var quoteDoubleRexExp = Template7Utils.quoteDoubleRexExp,
        quoteSingleRexExp = Template7Utils.quoteSingleRexExp;

    var helperParts = string.replace(/[{}#}]/g, '').trim().split(' ');
    var slices = [];
    var shiftIndex = void 0;
    var i = void 0;
    var j = void 0;
    for (i = 0; i < helperParts.length; i += 1) {
      var part = helperParts[i];
      var blockQuoteRegExp = void 0;
      var openingQuote = void 0;
      if (i === 0) slices.push(part);else if (part.indexOf('"') === 0 || part.indexOf('\'') === 0) {
        blockQuoteRegExp = part.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
        openingQuote = part.indexOf('"') === 0 ? '"' : '\'';
        // Plain String
        if (part.match(blockQuoteRegExp).length === 2) {
          // One word string
          slices.push(part);
        } else {
          // Find closed Index
          shiftIndex = 0;
          for (j = i + 1; j < helperParts.length; j += 1) {
            part += ' ' + helperParts[j];
            if (helperParts[j].indexOf(openingQuote) >= 0) {
              shiftIndex = j;
              slices.push(part);
              break;
            }
          }
          if (shiftIndex) i = shiftIndex;
        }
      } else if (part.indexOf('=') > 0) {
        // Hash
        var hashParts = part.split('=');
        var hashName = hashParts[0];
        var hashContent = hashParts[1];
        if (!blockQuoteRegExp) {
          blockQuoteRegExp = hashContent.indexOf('"') === 0 ? quoteDoubleRexExp : quoteSingleRexExp;
          openingQuote = hashContent.indexOf('"') === 0 ? '"' : '\'';
        }
        if (hashContent.match(blockQuoteRegExp).length !== 2) {
          shiftIndex = 0;
          for (j = i + 1; j < helperParts.length; j += 1) {
            hashContent += ' ' + helperParts[j];
            if (helperParts[j].indexOf(openingQuote) >= 0) {
              shiftIndex = j;
              break;
            }
          }
          if (shiftIndex) i = shiftIndex;
        }
        var hash = [hashName, hashContent.replace(blockQuoteRegExp, '')];
        slices.push(hash);
      } else {
        // Plain variable
        slices.push(part);
      }
    }
    return slices;
  },
  stringToBlocks: function stringToBlocks(string) {
    var blocks = [];
    var i = void 0;
    var j = void 0;
    if (!string) return [];
    var stringBlocks = string.split(/({{[^{^}]*}})/);
    for (i = 0; i < stringBlocks.length; i += 1) {
      var block = stringBlocks[i];
      if (block === '') continue;
      if (block.indexOf('{{') < 0) {
        blocks.push({
          type: 'plain',
          content: block
        });
      } else {
        if (block.indexOf('{/') >= 0) {
          continue;
        }
        block = block.replace(/{{([#/])*([ ])*/, '{{$1').replace(/([ ])*}}/, '}}');
        if (block.indexOf('{#') < 0 && block.indexOf(' ') < 0 && block.indexOf('else') < 0) {
          // Simple variable
          blocks.push({
            type: 'variable',
            contextName: block.replace(/[{}]/g, '')
          });
          continue;
        }
        // Helpers
        var helperSlices = Template7Utils.helperToSlices(block);
        var helperName = helperSlices[0];
        var isPartial = helperName === '>';
        var helperContext = [];
        var helperHash = {};
        for (j = 1; j < helperSlices.length; j += 1) {
          var slice = helperSlices[j];
          if (Array.isArray(slice)) {
            // Hash
            helperHash[slice[0]] = slice[1] === 'false' ? false : slice[1];
          } else {
            helperContext.push(slice);
          }
        }

        if (block.indexOf('{#') >= 0) {
          // Condition/Helper
          var helperContent = '';
          var elseContent = '';
          var toSkip = 0;
          var shiftIndex = void 0;
          var foundClosed = false;
          var foundElse = false;
          var depth = 0;
          for (j = i + 1; j < stringBlocks.length; j += 1) {
            if (stringBlocks[j].indexOf('{{#') >= 0) {
              depth += 1;
            }
            if (stringBlocks[j].indexOf('{{/') >= 0) {
              depth -= 1;
            }
            if (stringBlocks[j].indexOf('{{#' + helperName) >= 0) {
              helperContent += stringBlocks[j];
              if (foundElse) elseContent += stringBlocks[j];
              toSkip += 1;
            } else if (stringBlocks[j].indexOf('{{/' + helperName) >= 0) {
              if (toSkip > 0) {
                toSkip -= 1;
                helperContent += stringBlocks[j];
                if (foundElse) elseContent += stringBlocks[j];
              } else {
                shiftIndex = j;
                foundClosed = true;
                break;
              }
            } else if (stringBlocks[j].indexOf('else') >= 0 && depth === 0) {
              foundElse = true;
            } else {
              if (!foundElse) helperContent += stringBlocks[j];
              if (foundElse) elseContent += stringBlocks[j];
            }
          }
          if (foundClosed) {
            if (shiftIndex) i = shiftIndex;
            if (helperName === 'raw') {
              blocks.push({
                type: 'plain',
                content: helperContent
              });
            } else {
              blocks.push({
                type: 'helper',
                helperName: helperName,
                contextName: helperContext,
                content: helperContent,
                inverseContent: elseContent,
                hash: helperHash
              });
            }
          }
        } else if (block.indexOf(' ') > 0) {
          if (isPartial) {
            helperName = '_partial';
            if (helperContext[0]) {
              if (helperContext[0].indexOf('[') === 0) helperContext[0] = helperContext[0].replace(/[[\]]/g, '');else helperContext[0] = '"' + helperContext[0].replace(/"|'/g, '') + '"';
            }
          }
          blocks.push({
            type: 'helper',
            helperName: helperName,
            contextName: helperContext,
            hash: helperHash
          });
        }
      }
    }
    return blocks;
  },
  parseJsVariable: function parseJsVariable(expression, replace, object) {
    return expression.split(/([+ -*/^])/g).map(function (part) {
      if (part.indexOf(replace) < 0) return part;
      if (!object) return JSON.stringify('');
      var variable = object;
      if (part.indexOf(replace + '.') >= 0) {
        part.split(replace + '.')[1].split('.').forEach(function (partName) {
          if (variable[partName]) variable = variable[partName];else variable = 'undefined';
        });
      }
      return JSON.stringify(variable);
    }).join('');
  },
  parseJsParents: function parseJsParents(expression, parents) {
    return expression.split(/([+ -*^])/g).map(function (part) {
      if (part.indexOf('../') < 0) return part;
      if (!parents || parents.length === 0) return JSON.stringify('');
      var levelsUp = part.split('../').length - 1;
      var parentData = levelsUp > parents.length ? parents[parents.length - 1] : parents[levelsUp - 1];

      var variable = parentData;
      var parentPart = part.replace(/..\//g, '');
      parentPart.split('.').forEach(function (partName) {
        if (variable[partName]) variable = variable[partName];else variable = 'undefined';
      });
      return JSON.stringify(variable);
    }).join('');
  },
  getCompileVar: function getCompileVar(name, ctx) {
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'data_1';

    var variable = ctx;
    var parts = void 0;
    var levelsUp = 0;
    var newDepth = void 0;
    if (name.indexOf('../') === 0) {
      levelsUp = name.split('../').length - 1;
      newDepth = variable.split('_')[1] - levelsUp;
      variable = 'ctx_' + (newDepth >= 1 ? newDepth : 1);
      parts = name.split('../')[levelsUp].split('.');
    } else if (name.indexOf('@global') === 0) {
      variable = 'Template7.global';
      parts = name.split('@global.')[1].split('.');
    } else if (name.indexOf('@root') === 0) {
      variable = 'root';
      parts = name.split('@root.')[1].split('.');
    } else {
      parts = name.split('.');
    }
    for (var i = 0; i < parts.length; i += 1) {
      var part = parts[i];
      if (part.indexOf('@') === 0) {
        var dataLevel = data.split('_')[1];
        if (levelsUp > 0) {
          dataLevel = newDepth;
        }
        if (i > 0) {
          variable += '[(data_' + dataLevel + ' && data_' + dataLevel + '.' + part.replace('@', '') + ')]';
        } else {
          variable = '(data_' + dataLevel + ' && data_' + dataLevel + '.' + part.replace('@', '') + ')';
        }
      } else if (Number.isFinite ? Number.isFinite(part) : Template7Context.isFinite(part)) {
        variable += '[' + part + ']';
      } else if (part === 'this' || part.indexOf('this.') >= 0 || part.indexOf('this[') >= 0 || part.indexOf('this(') >= 0) {
        variable = part.replace('this', ctx);
      } else {
        variable += '.' + part;
      }
    }
    return variable;
  },
  getCompiledArguments: function getCompiledArguments(contextArray, ctx, data) {
    var arr = [];
    for (var i = 0; i < contextArray.length; i += 1) {
      if (/^['"]/.test(contextArray[i])) arr.push(contextArray[i]);else if (/^(true|false|\d+)$/.test(contextArray[i])) arr.push(contextArray[i]);else {
        arr.push(Template7Utils.getCompileVar(contextArray[i], ctx, data));
      }
    }

    return arr.join(', ');
  }
};

/* eslint no-eval: "off" */
var Template7Helpers = {
  _partial: function _partial(partialName, options) {
    var ctx = this;
    var p = Template7Class.partials[partialName];
    if (!p || p && !p.template) return '';
    if (!p.compiled) {
      p.compiled = new Template7Class(p.template).compile();
    }
    Object.keys(options.hash).forEach(function (hashName) {
      ctx[hashName] = options.hash[hashName];
    });
    return p.compiled(ctx, options.data, options.root);
  },
  escape: function escape(context) {
    if (typeof context !== 'string') {
      throw new Error('Template7: Passed context to "escape" helper should be a string');
    }
    return Template7Utils.escape(context);
  },
  if: function _if(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) {
      ctx = ctx.call(this);
    }
    if (ctx) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
  unless: function unless(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) {
      ctx = ctx.call(this);
    }
    if (!ctx) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  },
  each: function each(context, options) {
    var ctx = context;
    var ret = '';
    var i = 0;
    if (Template7Utils.isFunction(ctx)) {
      ctx = ctx.call(this);
    }
    if (Array.isArray(ctx)) {
      if (options.hash.reverse) {
        ctx = ctx.reverse();
      }
      for (i = 0; i < ctx.length; i += 1) {
        ret += options.fn(ctx[i], { first: i === 0, last: i === ctx.length - 1, index: i });
      }
      if (options.hash.reverse) {
        ctx = ctx.reverse();
      }
    } else {
      // eslint-disable-next-line
      for (var key in ctx) {
        i += 1;
        ret += options.fn(ctx[key], { key: key });
      }
    }
    if (i > 0) return ret;
    return options.inverse(this);
  },
  with: function _with(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) {
      ctx = context.call(this);
    }
    return options.fn(ctx);
  },
  join: function join(context, options) {
    var ctx = context;
    if (Template7Utils.isFunction(ctx)) {
      ctx = ctx.call(this);
    }
    return ctx.join(options.hash.delimiter || options.hash.delimeter);
  },
  js: function js(expression, options) {
    var data = options.data;
    var func = void 0;
    var execute = expression;
    'index first last key'.split(' ').forEach(function (prop) {
      if (typeof data[prop] !== 'undefined') {
        var re1 = new RegExp('this.@' + prop, 'g');
        var re2 = new RegExp('@' + prop, 'g');
        execute = execute.replace(re1, JSON.stringify(data[prop])).replace(re2, JSON.stringify(data[prop]));
      }
    });
    if (options.root && execute.indexOf('@root') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
    }
    if (execute.indexOf('@global') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@global', Template7Context.Template7.global);
    }
    if (execute.indexOf('../') >= 0) {
      execute = Template7Utils.parseJsParents(execute, options.parents);
    }
    if (execute.indexOf('return') >= 0) {
      func = '(function(){' + execute + '})';
    } else {
      func = '(function(){return (' + execute + ')})';
    }
    return eval(func).call(this);
  },
  js_if: function js_if(expression, options) {
    var data = options.data;
    var func = void 0;
    var execute = expression;
    'index first last key'.split(' ').forEach(function (prop) {
      if (typeof data[prop] !== 'undefined') {
        var re1 = new RegExp('this.@' + prop, 'g');
        var re2 = new RegExp('@' + prop, 'g');
        execute = execute.replace(re1, JSON.stringify(data[prop])).replace(re2, JSON.stringify(data[prop]));
      }
    });
    if (options.root && execute.indexOf('@root') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@root', options.root);
    }
    if (execute.indexOf('@global') >= 0) {
      execute = Template7Utils.parseJsVariable(execute, '@global', Template7Class.global);
    }
    if (execute.indexOf('../') >= 0) {
      execute = Template7Utils.parseJsParents(execute, options.parents);
    }
    if (execute.indexOf('return') >= 0) {
      func = '(function(){' + execute + '})';
    } else {
      func = '(function(){return (' + execute + ')})';
    }
    var condition = eval(func).call(this);
    if (condition) {
      return options.fn(this, options.data);
    }

    return options.inverse(this, options.data);
  }
};
Template7Helpers.js_compare = Template7Helpers.js_if;

var Template7Options = {};
var Template7Partials = {};
var script = Template7Context.document.createElement('script');
Template7Context.document.head.appendChild(script);

var Template7Class = function () {
  function Template7Class(template) {
    _classCallCheck(this, Template7Class);

    var t = this;
    t.template = template;
  }

  _createClass(Template7Class, [{
    key: 'compile',
    value: function compile() {
      var template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.template;
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var t = this;
      if (t.compiled) return t.compiled;

      if (typeof template !== 'string') {
        throw new Error('Template7: Template must be a string');
      }
      var stringToBlocks = Template7Utils.stringToBlocks,
          getCompileVar = Template7Utils.getCompileVar,
          getCompiledArguments = Template7Utils.getCompiledArguments;


      var blocks = stringToBlocks(template);
      var ctx = 'ctx_' + depth;
      var data = 'data_' + depth;
      if (blocks.length === 0) {
        return function empty() {
          return '';
        };
      }

      function getCompileFn(block, newDepth) {
        if (block.content) return t.compile(block.content, newDepth);
        return function empty() {
          return '';
        };
      }
      function getCompileInverse(block, newDepth) {
        if (block.inverseContent) return t.compile(block.inverseContent, newDepth);
        return function empty() {
          return '';
        };
      }

      var resultString = '';
      if (depth === 1) {
        resultString += '(function (' + ctx + ', ' + data + ', root) {\n';
      } else {
        resultString += '(function (' + ctx + ', ' + data + ') {\n';
      }
      if (depth === 1) {
        resultString += 'function isArray(arr){return Array.isArray(arr);}\n';
        resultString += 'function isFunction(func){return (typeof func === \'function\');}\n';
        resultString += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n';
        resultString += 'root = root || ctx_1 || {};\n';
      }
      resultString += 'var r = \'\';\n';
      var i = void 0;
      for (i = 0; i < blocks.length; i += 1) {
        var block = blocks[i];
        // Plain block
        if (block.type === 'plain') {
          // eslint-disable-next-line
          resultString += 'r +=\'' + block.content.replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/'/g, '\\' + '\'') + '\';';
          continue;
        }
        var variable = void 0;
        var compiledArguments = void 0;
        // Variable block
        if (block.type === 'variable') {
          variable = getCompileVar(block.contextName, ctx, data);
          resultString += 'r += c(' + variable + ', ' + ctx + ');';
        }
        // Helpers block
        if (block.type === 'helper') {
          var parents = void 0;
          if (ctx !== 'ctx_1') {
            var level = ctx.split('_')[1];
            var parentsString = 'ctx_' + (level - 1);
            for (var j = level - 2; j >= 1; j -= 1) {
              parentsString += ', ctx_' + j;
            }
            parents = '[' + parentsString + ']';
          } else {
            parents = '[' + ctx + ']';
          }
          var dynamicHelper = void 0;
          if (block.helperName.indexOf('[') === 0) {
            block.helperName = getCompileVar(block.helperName.replace(/[[\]]/g, ''), ctx, data);
            dynamicHelper = true;
          }
          if (dynamicHelper || block.helperName in Template7Helpers) {
            compiledArguments = getCompiledArguments(block.contextName, ctx, data);
            resultString += 'r += (Template7Helpers' + (dynamicHelper ? '[' + block.helperName + ']' : '.' + block.helperName) + ').call(' + ctx + ', ' + (compiledArguments && compiledArguments + ', ') + '{hash:' + JSON.stringify(block.hash) + ', data: ' + data + ' || {}, fn: ' + getCompileFn(block, depth + 1) + ', inverse: ' + getCompileInverse(block, depth + 1) + ', root: root, parents: ' + parents + '});';
          } else if (block.contextName.length > 0) {
            throw new Error('Template7: Missing helper: "' + block.helperName + '"');
          } else {
            variable = getCompileVar(block.helperName, ctx, data);
            resultString += 'if (' + variable + ') {';
            resultString += 'if (isArray(' + variable + ')) {';
            resultString += 'r += (Template7Helpers.each).call(' + ctx + ', ' + variable + ', {hash:' + JSON.stringify(block.hash) + ', data: ' + data + ' || {}, fn: ' + getCompileFn(block, depth + 1) + ', inverse: ' + getCompileInverse(block, depth + 1) + ', root: root, parents: ' + parents + '});';
            resultString += '}else {';
            resultString += 'r += (Template7Helpers.with).call(' + ctx + ', ' + variable + ', {hash:' + JSON.stringify(block.hash) + ', data: ' + data + ' || {}, fn: ' + getCompileFn(block, depth + 1) + ', inverse: ' + getCompileInverse(block, depth + 1) + ', root: root, parents: ' + parents + '});';
            resultString += '}}';
          }
        }
      }
      resultString += '\nreturn r;})';

      if (depth === 1) {
        // eslint-disable-next-line
        t.compiled = eval(resultString);
        return t.compiled;
      }
      return resultString;
    }
  }], [{
    key: 'options',
    get: function get() {
      return Template7Options;
    }
  }, {
    key: 'partials',
    get: function get() {
      return Template7Partials;
    }
  }, {
    key: 'helpers',
    get: function get() {
      return Template7Helpers;
    }
  }]);

  return Template7Class;
}();

function Template7() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var template = args[0],
      data = args[1];

  if (args.length === 2) {
    var instance = new Template7Class(template);
    var rendered = instance.compile()(data);
    instance = null;
    return rendered;
  }
  return new Template7Class(template);
}
Template7.registerHelper = function registerHelper(name, fn) {
  Template7Class.helpers[name] = fn;
};
Template7.unregisterHelper = function unregisterHelper(name) {
  Template7Class.helpers[name] = undefined;
  delete Template7Class.helpers[name];
};
Template7.registerPartial = function registerPartial(name, template) {
  Template7Class.partials[name] = { template: template };
};
Template7.unregisterPartial = function unregisterPartial(name) {
  if (Template7Class.partials[name]) {
    Template7Class.partials[name] = undefined;
    delete Template7Class.partials[name];
  }
};
Template7.compile = function compile(template, options) {
  var instance = new Template7Class(template, options);
  return instance.compile();
};

Template7.options = Template7Class.options;
Template7.helpers = Template7Class.helpers;
Template7.partials = Template7Class.partials;

exports.default = Template7;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Framework7Class = function () {
  function Framework7Class() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Framework7Class);

    var self = this;
    self.params = params;

    // Events
    self.eventsParents = parents;
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach(function (eventName) {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  _createClass(Framework7Class, [{
    key: 'on',
    value: function on(events, handler) {
      var self = this;
      if (typeof handler !== 'function') return self;
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event].push(handler);
      });
      return self;
    }
  }, {
    key: 'once',
    value: function once(events, handler) {
      var self = this;
      if (typeof handler !== 'function') return self;
      function onceHandler() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
        self.off(events, onceHandler);
      }
      return self.on(events, onceHandler);
    }
  }, {
    key: 'off',
    value: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    }
  }, {
    key: 'emit',
    value: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events = void 0;
      var data = void 0;
      var context = void 0;
      var eventsParents = void 0;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
        eventsParents = self.eventsParents;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
        eventsParents = args[0].local ? [] : args[0].parents || self.eventsParents;
      }
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      var localEvents = eventsArray.map(function (eventName) {
        return eventName.replace('local::', '');
      });
      var parentEvents = eventsArray.filter(function (eventName) {
        return eventName.indexOf('local::') < 0;
      });

      localEvents.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            handlers.push(eventHandler);
          });
          handlers.forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      if (eventsParents && eventsParents.length > 0) {
        eventsParents.forEach(function (eventsParent) {
          eventsParent.emit.apply(eventsParent, [parentEvents].concat(_toConsumableArray(data)));
        });
      }
      return self;
    }
  }, {
    key: 'useModulesParams',
    value: function useModulesParams(instanceParams) {
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        // Extend params
        if (module.params) {
          _utils2.default.extend(instanceParams, module.params);
        }
      });
    }
  }, {
    key: 'useModules',
    value: function useModules() {
      var modulesParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {};
        // Extend instance methods and props
        if (module.instance) {
          Object.keys(module.instance).forEach(function (modulePropName) {
            var moduleProp = module.instance[modulePropName];
            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          });
        }
        // Add event listeners
        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        }

        // Module create callback
        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  }], [{
    key: 'installModule',
    value: function installModule(module) {
      var Class = this;
      if (!Class.prototype.modules) Class.prototype.modules = {};
      var name = module.name || Object.keys(Class.prototype.modules).length + '_' + _utils2.default.now();
      Class.prototype.modules[name] = module;
      // Prototype
      if (module.proto) {
        Object.keys(module.proto).forEach(function (key) {
          Class.prototype[key] = module.proto[key];
        });
      }
      // Class
      if (module.static) {
        Object.keys(module.static).forEach(function (key) {
          Class[key] = module.static[key];
        });
      }
      // Callback
      if (module.install) {
        for (var _len3 = arguments.length, params = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          params[_key3 - 1] = arguments[_key3];
        }

        module.install.apply(Class, params);
      }
      return Class;
    }
  }, {
    key: 'use',
    value: function use(module) {
      var Class = this;
      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Class.installModule(m);
        });
        return Class;
      }

      for (var _len4 = arguments.length, params = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        params[_key4 - 1] = arguments[_key4];
      }

      return Class.installModule.apply(Class, [module].concat(params));
    }
  }, {
    key: 'components',
    set: function set(components) {
      var Class = this;
      if (!Class.use) return;
      Class.use(components);
    }
  }]);

  return Framework7Class;
}();

exports.default = Framework7Class;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _class = __webpack_require__(9);

var _class2 = _interopRequireDefault(_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var openedModals = [];
var dialogsQueue = [];
function clearDialogsQueue() {
  if (dialogsQueue.length === 0) return;
  var dialog = dialogsQueue.shift();
  dialog.open();
}

var Modal = function (_Framework7Class) {
  _inherits(Modal, _Framework7Class);

  function Modal(app, params) {
    var _ret;

    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, params, [app]));

    var modal = _this;

    var defaults = {};

    // Extend defaults with modules params
    modal.useModulesParams(defaults);

    modal.params = _utils2.default.extend(defaults, params);

    // Install Modules
    modal.useModules();

    return _ret = _this, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'onOpen',
    value: function onOpen() {
      var modal = this;
      openedModals.push(modal);
      (0, _dom2.default)('html').addClass('with-modal-' + modal.type.toLowerCase());
      modal.$el.trigger('modal:open ' + modal.type.toLowerCase() + ':open', modal);
      modal.emit('local::open modalOpen ' + modal.type + 'Open', modal);
    }
  }, {
    key: 'onOpened',
    value: function onOpened() {
      var modal = this;
      modal.$el.trigger('modal:opened ' + modal.type.toLowerCase() + ':opened', modal);
      modal.emit('local::opened modalOpened ' + modal.type + 'Opened', modal);
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      var modal = this;
      if (!modal.type || !modal.$el) return;
      openedModals.splice(openedModals.indexOf(modal), 1);
      (0, _dom2.default)('html').removeClass('with-modal-' + modal.type.toLowerCase());
      modal.$el.trigger('modal:close ' + modal.type.toLowerCase() + ':close', modal);
      modal.emit('local::close modalClose ' + modal.type + 'Close', modal);
    }
  }, {
    key: 'onClosed',
    value: function onClosed() {
      var modal = this;
      if (!modal.type || !modal.$el) return;
      modal.$el.removeClass('modal-out');
      modal.$el.hide();
      modal.$el.trigger('modal:closed ' + modal.type.toLowerCase() + ':closed', modal);
      modal.emit('local::closed modalClosed ' + modal.type + 'Closed', modal);
    }
  }, {
    key: 'open',
    value: function open(animateModal) {
      var modal = this;
      var app = modal.app;
      var $el = modal.$el;
      var $backdropEl = modal.$backdropEl;
      var type = modal.type;
      var animate = true;
      if (typeof animateModal !== 'undefined') animate = animateModal;else if (typeof modal.params.animate !== 'undefined') {
        animate = modal.params.animate;
      }

      if (!$el || $el.hasClass('modal-in')) {
        return modal;
      }

      if (type === 'dialog' && app.params.modal.queueDialogs) {
        var pushToQueue = void 0;
        if ((0, _dom2.default)('.dialog.modal-in').length > 0) {
          pushToQueue = true;
        } else if (openedModals.length > 0) {
          openedModals.forEach(function (openedModal) {
            if (openedModal.type === 'dialog') pushToQueue = true;
          });
        }
        if (pushToQueue) {
          dialogsQueue.push(modal);
          return modal;
        }
      }

      var $modalParentEl = $el.parent();
      var wasInDom = $el.parents(document).length > 0;
      if (app.params.modal.moveToRoot && !$modalParentEl.is(app.root)) {
        app.root.append($el);
        modal.once(type + 'Closed', function () {
          if (wasInDom) {
            $modalParentEl.append($el);
          } else {
            $el.remove();
          }
        });
      }
      // Show Modal
      $el.show();

      // Set Dialog offset
      if (type === 'dialog') {
        $el.css({
          marginTop: -Math.round($el.outerHeight() / 2) + 'px'
        });
      }

      // Emit open
      /* eslint no-underscore-dangle: ["error", { "allow": ["_clientLeft"] }] */
      modal._clientLeft = $el[0].clientLeft;

      // Backdrop
      if ($backdropEl) {
        $backdropEl[animate ? 'removeClass' : 'addClass']('not-animated');
        $backdropEl.addClass('backdrop-in');
      }
      // Modal
      function transitionEnd() {
        if ($el.hasClass('modal-out')) {
          modal.onClosed();
        } else {
          modal.onOpened();
        }
      }
      if (animate) {
        $el.animationEnd(function () {
          transitionEnd();
        });
        $el.transitionEnd(function () {
          transitionEnd();
        });
        $el.removeClass('modal-out not-animated').addClass('modal-in');
        modal.onOpen();
      } else {
        $el.removeClass('modal-out').addClass('modal-in not-animated');
        modal.onOpen();
        modal.onOpened();
      }

      return modal;
    }
  }, {
    key: 'close',
    value: function close(animateModal) {
      var modal = this;
      var $el = modal.$el;
      var $backdropEl = modal.$backdropEl;

      var animate = true;
      if (typeof animateModal !== 'undefined') animate = animateModal;else if (typeof modal.params.animate !== 'undefined') {
        animate = modal.params.animate;
      }

      if (!$el || !$el.hasClass('modal-in')) {
        return modal;
      }

      // backdrop
      if ($backdropEl) {
        $backdropEl[animate ? 'removeClass' : 'addClass']('not-animated');
        $backdropEl.removeClass('backdrop-in');
      }

      // Modal
      $el[animate ? 'removeClass' : 'addClass']('not-animated');
      function transitionEnd() {
        if ($el.hasClass('modal-out')) {
          modal.onClosed();
        } else {
          modal.onOpened();
        }
      }
      if (animate) {
        $el.animationEnd(function () {
          transitionEnd();
        });
        $el.transitionEnd(function () {
          transitionEnd();
        });
        $el.removeClass('modal-in').addClass('modal-out');
        // Emit close
        modal.onClose();
      } else {
        $el.addClass('not-animated').removeClass('modal-in').addClass('modal-out');
        // Emit close
        modal.onClose();
        modal.onClosed();
      }

      if (modal.type === 'dialog') {
        clearDialogsQueue();
      }

      return modal;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var modal = this;
      if (modal.destroyed) return;
      modal.emit('local::beforeDestroy modalBeforeDestroy ' + modal.type + 'BeforeDestroy', modal);
      if (modal.$el) {
        modal.$el.trigger('modal:beforedestroy ' + modal.type.toLowerCase() + ':beforedestroy', modal);
        if (modal.$el.length && modal.$el[0].f7Modal) {
          delete modal.$el[0].f7Modal;
        }
      }
      _utils2.default.deleteProps(modal);
      modal.destroyed = true;
    }
  }]);

  return Modal;
}(_class2.default);

exports.default = Modal;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globals = {};
var jsonpRequests = 0;

function Request(requestOptions) {
  var globalsNoCallbacks = _utils2.default.extend({}, globals);
  'beforeCreate beforeOpen beforeSend error complete success statusCode'.split(' ').forEach(function (callbackName) {
    delete globalsNoCallbacks[callbackName];
  });
  var defaults = _utils2.default.extend({
    url: window.location.toString(),
    method: 'GET',
    data: false,
    async: true,
    cache: true,
    user: '',
    password: '',
    headers: {},
    xhrFields: {},
    statusCode: {},
    processData: true,
    dataType: 'text',
    contentType: 'application/x-www-form-urlencoded',
    timeout: 0
  }, globalsNoCallbacks);

  var options = _utils2.default.extend({}, defaults, requestOptions);

  // Function to run XHR callbacks and events
  function fireCallback(callbackName) {
    for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      data[_key - 1] = arguments[_key];
    }

    /*
      Callbacks:
      beforeCreate (options),
      beforeOpen (xhr, options),
      beforeSend (xhr, options),
      error (xhr, status),
      complete (xhr, stautus),
      success (response, status, xhr),
      statusCode ()
    */
    if (globals[callbackName]) globals[callbackName].apply(globals, data);
    if (options[callbackName]) options[callbackName].apply(options, data);
  }

  // Before create callback
  fireCallback('beforeCreate', options);

  // For jQuery guys
  if (options.type) options.method = options.type;

  // Parameters Prefix
  var paramsPrefix = options.url.indexOf('?') >= 0 ? '&' : '?';

  // UC method
  var method = options.method.toUpperCase();

  // Data to modify GET URL
  if ((method === 'GET' || method === 'HEAD' || method === 'OPTIONS' || method === 'DELETE') && options.data) {
    var stringData = void 0;
    if (typeof options.data === 'string') {
      // Should be key=value string
      if (options.data.indexOf('?') >= 0) stringData = options.data.split('?')[1];else stringData = options.data;
    } else {
      // Should be key=value object
      stringData = _utils2.default.serializeObject(options.data);
    }
    if (stringData.length) {
      options.url += paramsPrefix + stringData;
      if (paramsPrefix === '?') paramsPrefix = '&';
    }
  }

  // JSONP
  if (options.dataType === 'json' && options.url.indexOf('callback=') >= 0) {
    var callbackName = 'f7jsonp_' + (Date.now() + (jsonpRequests += 1));
    var abortTimeout = void 0;
    var callbackSplit = options.url.split('callback=');
    var requestUrl = callbackSplit[0] + 'callback=' + callbackName;
    if (callbackSplit[1].indexOf('&') >= 0) {
      var addVars = callbackSplit[1].split('&').filter(function (el) {
        return el.indexOf('=') > 0;
      }).join('&');
      if (addVars.length > 0) requestUrl += '&' + addVars;
    }

    // Create script
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onerror = function onerror() {
      clearTimeout(abortTimeout);
      fireCallback('error', null, 'scripterror');
      fireCallback('complete', null, 'scripterror');
    };
    script.src = requestUrl;

    // Handler
    window[callbackName] = function jsonpCallback(data) {
      clearTimeout(abortTimeout);
      fireCallback('success', data);
      script.parentNode.removeChild(script);
      script = null;
      delete window[callbackName];
    };
    document.querySelector('head').appendChild(script);

    if (options.timeout > 0) {
      abortTimeout = setTimeout(function () {
        script.parentNode.removeChild(script);
        script = null;
        fireCallback('error', null, 'timeout');
      }, options.timeout);
    }

    return undefined;
  }

  // Cache for GET/HEAD requests
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS' || method === 'DELETE') {
    if (options.cache === false) {
      options.url += paramsPrefix + '_nocache' + Date.now();
    }
  }

  // Create XHR
  var xhr = new XMLHttpRequest();

  // Save Request URL
  xhr.requestUrl = options.url;
  xhr.requestParameters = options;

  // Before open callback
  fireCallback('beforeOpen', xhr, options);

  // Open XHR
  xhr.open(method, options.url, options.async, options.user, options.password);

  // Create POST Data
  var postData = null;

  if ((method === 'POST' || method === 'PUT' || method === 'PATCH') && options.data) {
    if (options.processData) {
      var postDataInstances = [ArrayBuffer, Blob, Document, FormData];
      // Post Data
      if (postDataInstances.indexOf(options.data.constructor) >= 0) {
        postData = options.data;
      } else {
        // POST Headers
        var boundary = '---------------------------' + Date.now().toString(16);

        if (options.contentType === 'multipart/form-data') {
          xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
        } else {
          xhr.setRequestHeader('Content-Type', options.contentType);
        }
        postData = '';
        var data = _utils2.default.serializeObject(options.data);
        if (options.contentType === 'multipart/form-data') {
          data = data.split('&');
          var newData = [];
          for (var i = 0; i < data.length; i += 1) {
            newData.push('Content-Disposition: form-data; name="' + data[i].split('=')[0] + '"\r\n\r\n' + data[i].split('=')[1] + '\r\n');
          }
          postData = '--' + boundary + '\r\n' + newData.join('--' + boundary + '\r\n') + '--' + boundary + '--\r\n';
        } else {
          postData = data;
        }
      }
    } else {
      postData = options.data;
      xhr.setRequestHeader('Content-Type', options.contentType);
    }
  }

  // Additional headers
  if (options.headers) {
    Object.keys(options.headers).forEach(function (headerName) {
      xhr.setRequestHeader(headerName, options.headers[headerName]);
    });
  }

  // Check for crossDomain
  if (typeof options.crossDomain === 'undefined') {
    // eslint-disable-next-line
    options.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(options.url) && RegExp.$2 !== window.location.host;
  }

  if (!options.crossDomain) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  if (options.xhrFields) {
    _utils2.default.extend(xhr, options.xhrFields);
  }

  var xhrTimeout = void 0;

  // Handle XHR
  xhr.onload = function onload() {
    if (xhrTimeout) clearTimeout(xhrTimeout);
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
      var responseData = void 0;
      if (options.dataType === 'json') {
        try {
          responseData = JSON.parse(xhr.responseText);
          fireCallback('success', responseData, xhr.status, xhr);
        } catch (err) {
          fireCallback('error', xhr, 'parseerror');
        }
      } else {
        responseData = xhr.responseType === 'text' || xhr.responseType === '' ? xhr.responseText : xhr.response;
        fireCallback('success', responseData, xhr.status, xhr);
      }
    } else {
      fireCallback('error', xhr, xhr.status);
    }
    if (options.statusCode) {
      if (globals.statusCode && globals.statusCode[xhr.status]) globals.statusCode[xhr.status](xhr);
      if (options.statusCode[xhr.status]) options.statusCode[xhr.status](xhr);
    }
    fireCallback('complete', xhr, xhr.status);
  };

  xhr.onerror = function onerror() {
    if (xhrTimeout) clearTimeout(xhrTimeout);
    fireCallback('error', xhr, xhr.status);
    fireCallback('complete', xhr, 'error');
  };

  // Timeout
  if (options.timeout > 0) {
    xhr.onabort = function onabort() {
      if (xhrTimeout) clearTimeout(xhrTimeout);
    };
    xhrTimeout = setTimeout(function () {
      xhr.abort();
      fireCallback('error', xhr, 'timeout');
      fireCallback('complete', xhr, 'timeout');
    }, options.timeout);
  }

  // Ajax start callback
  fireCallback('beforeSend', xhr, options);

  // Send XHR
  xhr.send(postData);

  // Return XHR object
  return xhr;
}
function RequestShortcut(method) {
  var _ref = [],
      url = _ref[0],
      data = _ref[1],
      success = _ref[2],
      error = _ref[3],
      dataType = _ref[4];

  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (typeof args[1] === 'function') {
    url = args[0];
    success = args[1];
    error = args[2];
    dataType = args[3];
  } else {
    url = args[0];
    data = args[1];
    success = args[2];
    error = args[3];
    dataType = args[4];
  }
  [success, error].forEach(function (callback) {
    if (typeof callback === 'string') {
      dataType = callback;
      if (callback === success) success = undefined;else error = undefined;
    }
  });
  dataType = dataType || (method === 'json' || method === 'postJSON' ? 'json' : undefined);
  var requestOptions = {
    url: url,
    method: method === 'post' || method === 'postJSON' ? 'POST' : 'GET',
    data: data,
    success: success,
    error: error,
    dataType: dataType
  };
  if (method === 'postJSON') {
    _utils2.default.extend(requestOptions, {
      contentType: 'application/json',
      processData: false,
      crossDomain: true,
      data: typeof data === 'string' ? data : JSON.stringify(data)
    });
  }
  return Request(requestOptions);
}
Request.get = function get() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return RequestShortcut.apply(undefined, ['get'].concat(args));
};
Request.post = function post() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return RequestShortcut.apply(undefined, ['post'].concat(args));
};
Request.json = function json() {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return RequestShortcut.apply(undefined, ['json'].concat(args));
};
Request.getJSON = Request.json;
Request.postJSON = function postJSON() {
  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  return RequestShortcut.apply(undefined, ['postJSON'].concat(args));
};
Request.setup = function setup(options) {
  if (options.type && !options.method) {
    _utils2.default.extend(options, { method: options.type });
  }
  _utils2.default.extend(globals, options);
};

exports.default = Request;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _router = __webpack_require__(15);

var _router2 = _interopRequireDefault(_router);

var _class = __webpack_require__(9);

var _class2 = _interopRequireDefault(_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Framework7Class) {
  _inherits(View, _Framework7Class);

  function View(appInstance, el) {
    var _ret;

    var viewParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, viewParams, [appInstance]));

    var app = appInstance;
    var $el = (0, _dom2.default)(el);
    var view = _this;

    var defaults = {
      routes: [],
      routesAdd: []
    };

    // Default View params
    view.params = _utils2.default.extend(defaults, app.params.view, viewParams);

    // Routes
    if (view.params.routes.length > 0) {
      view.routes = view.params.routes;
    } else {
      view.routes = [].concat(app.routes, view.params.routesAdd);
    }

    // Selector
    var selector = void 0;
    if (typeof el === 'string') selector = el;else {
      // Supposed to be HTMLElement or Dom7
      selector = ($el.attr('id') ? '#' + $el.attr('id') : '') + ($el.attr('class') ? '.' + $el.attr('class').replace(/ /g, '.').replace('.active', '') : '');
    }

    // DynamicNavbar
    var $navbarEl = void 0;
    if (app.theme === 'ios' && view.params.iosDynamicNavbar && view.params.iosSeparateDynamicNavbar) {
      $navbarEl = $el.children('.navbar').eq(0);
      if ($navbarEl.length === 0) {
        $navbarEl = (0, _dom2.default)('<div class="navbar"></div>');
      }
    }

    // View Props
    _utils2.default.extend(false, view, {
      app: app,
      $el: $el,
      el: $el[0],
      name: view.params.name,
      main: view.params.main || $el.hasClass('view-main'),
      $navbarEl: $navbarEl,
      navbarEl: $navbarEl ? $navbarEl[0] : undefined,
      selector: selector,
      history: [],
      scrollHistory: {}
    });

    // Save in DOM
    $el[0].f7View = view;

    // Install Modules
    view.useModules();

    // Add to app
    app.views.push(view);
    if (view.main) {
      app.views.main = view;
    }
    if (view.name) {
      app.views[view.name] = view;
    }

    // Index
    view.index = app.views.indexOf(view);

    // View ID
    var viewId = void 0;
    if (view.name) {
      viewId = 'view_' + view.name;
    } else if (view.main) {
      viewId = 'view_main';
    } else {
      viewId = 'view_' + view.index;
    }
    view.id = viewId;

    // Init View
    if (app.initialized) {
      view.init();
    } else {
      app.on('init', function () {
        view.init();
      });
    }

    return _ret = view, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(View, [{
    key: 'destroy',
    value: function destroy() {
      var view = this;
      var app = view.app;

      view.$el.trigger('view:beforedestroy', view);
      view.emit('local::beforeDestroy viewBeforeDestroy', view);

      if (view.main) {
        app.views.main = null;
        delete app.views.main;
      } else if (view.name) {
        app.views[view.name] = null;
        delete app.views[view.name];
      }
      view.$el[0].f7View = null;
      delete view.$el[0].f7View;

      app.views.splice(app.views.indexOf(view), 1);

      // Destroy Router
      if (view.params.router && view.router) {
        view.router.destroy();
      }

      view.emit('local::destroy viewDestroy', view);

      // Delete props & methods
      Object.keys(view).forEach(function (viewProp) {
        view[viewProp] = null;
        delete view[viewProp];
      });

      view = null;
    }
  }, {
    key: 'init',
    value: function init() {
      var view = this;
      if (view.params.router) {
        view.router.init();
      }
    }
  }]);

  return View;
}(_class2.default);

// Use Router


View.use(_router2.default);

exports.default = View;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routerClass = __webpack_require__(33);

var _routerClass2 = _interopRequireDefault(_routerClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'router',
  static: {
    Router: _routerClass2.default
  },
  instance: {
    cache: {
      xhr: [],
      templates: [],
      components: []
    }
  },
  create: function create() {
    var instance = this;
    if (instance.app) {
      // View Router
      if (instance.params.router) {
        instance.router = new _routerClass2.default(instance.app, instance);
      }
    } else {
      // App Router
      instance.router = new _routerClass2.default(instance);
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (direction, route, options) {
  var router = this;
  var redirect = route.route.redirect;
  function redirectResolve(redirectUrl) {
    var redirectOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    router.allowPageChange = true;
    router[direction](redirectUrl, _utils2.default.extend({}, options, redirectOptions));
  }
  function redirectReject() {
    router.allowPageChange = true;
  }
  if (typeof redirect === 'function') {
    router.allowPageChange = false;
    var redirectUrl = redirect.call(router, route, redirectResolve, redirectReject);
    if (redirectUrl && typeof redirectUrl === 'string') {
      router.allowPageChange = true;
      return router[direction](redirectUrl, options);
    }
    return router;
  }
  return router[direction](redirect, options);
};

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// Backbone.Radio v2.0.0

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(10), __webpack_require__(18)) :
  typeof define === 'function' && define.amd ? define(['underscore', 'backbone'], factory) :
  (global.Backbone = global.Backbone || {}, global.Backbone.Radio = factory(global._,global.Backbone));
}(this, function (_,Backbone) { 'use strict';

  _ = 'default' in _ ? _['default'] : _;
  Backbone = 'default' in Backbone ? Backbone['default'] : Backbone;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  var previousRadio = Backbone.Radio;

  var Radio = Backbone.Radio = {};

  Radio.VERSION = '2.0.0';

  // This allows you to run multiple instances of Radio on the same
  // webapp. After loading the new version, call `noConflict()` to
  // get a reference to it. At the same time the old version will be
  // returned to Backbone.Radio.
  Radio.noConflict = function () {
    Backbone.Radio = previousRadio;
    return this;
  };

  // Whether or not we're in DEBUG mode or not. DEBUG mode helps you
  // get around the issues of lack of warnings when events are mis-typed.
  Radio.DEBUG = false;

  // Format debug text.
  Radio._debugText = function (warning, eventName, channelName) {
    return warning + (channelName ? ' on the ' + channelName + ' channel' : '') + ': "' + eventName + '"';
  };

  // This is the method that's called when an unregistered event was called.
  // By default, it logs warning to the console. By overriding this you could
  // make it throw an Error, for instance. This would make firing a nonexistent event
  // have the same consequence as firing a nonexistent method on an Object.
  Radio.debugLog = function (warning, eventName, channelName) {
    if (Radio.DEBUG && console && console.warn) {
      console.warn(Radio._debugText(warning, eventName, channelName));
    }
  };

  var eventSplitter = /\s+/;

  // An internal method used to handle Radio's method overloading for Requests.
  // It's borrowed from Backbone.Events. It differs from Backbone's overload
  // API (which is used in Backbone.Events) in that it doesn't support space-separated
  // event names.
  Radio._eventsApi = function (obj, action, name, rest) {
    if (!name) {
      return false;
    }

    var results = {};

    // Handle event maps.
    if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
      for (var key in name) {
        var result = obj[action].apply(obj, [key, name[key]].concat(rest));
        eventSplitter.test(key) ? _.extend(results, result) : results[key] = result;
      }
      return results;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        results[names[i]] = obj[action].apply(obj, [names[i]].concat(rest));
      }
      return results;
    }

    return false;
  };

  // An optimized way to execute callbacks.
  Radio._callHandler = function (callback, context, args) {
    var a1 = args[0],
        a2 = args[1],
        a3 = args[2];
    switch (args.length) {
      case 0:
        return callback.call(context);
      case 1:
        return callback.call(context, a1);
      case 2:
        return callback.call(context, a1, a2);
      case 3:
        return callback.call(context, a1, a2, a3);
      default:
        return callback.apply(context, args);
    }
  };

  // A helper used by `off` methods to the handler from the store
  function removeHandler(store, name, callback, context) {
    var event = store[name];
    if ((!callback || callback === event.callback || callback === event.callback._callback) && (!context || context === event.context)) {
      delete store[name];
      return true;
    }
  }

  function removeHandlers(store, name, callback, context) {
    store || (store = {});
    var names = name ? [name] : _.keys(store);
    var matched = false;

    for (var i = 0, length = names.length; i < length; i++) {
      name = names[i];

      // If there's no event by this name, log it and continue
      // with the loop
      if (!store[name]) {
        continue;
      }

      if (removeHandler(store, name, callback, context)) {
        matched = true;
      }
    }

    return matched;
  }

  /*
   * tune-in
   * -------
   * Get console logs of a channel's activity
   *
   */

  var _logs = {};

  // This is to produce an identical function in both tuneIn and tuneOut,
  // so that Backbone.Events unregisters it.
  function _partial(channelName) {
    return _logs[channelName] || (_logs[channelName] = _.bind(Radio.log, Radio, channelName));
  }

  _.extend(Radio, {

    // Log information about the channel and event
    log: function log(channelName, eventName) {
      if (typeof console === 'undefined') {
        return;
      }
      var args = _.toArray(arguments).slice(2);
      console.log('[' + channelName + '] "' + eventName + '"', args);
    },

    // Logs all events on this channel to the console. It sets an
    // internal value on the channel telling it we're listening,
    // then sets a listener on the Backbone.Events
    tuneIn: function tuneIn(channelName) {
      var channel = Radio.channel(channelName);
      channel._tunedIn = true;
      channel.on('all', _partial(channelName));
      return this;
    },

    // Stop logging all of the activities on this channel to the console
    tuneOut: function tuneOut(channelName) {
      var channel = Radio.channel(channelName);
      channel._tunedIn = false;
      channel.off('all', _partial(channelName));
      delete _logs[channelName];
      return this;
    }
  });

  /*
   * Backbone.Radio.Requests
   * -----------------------
   * A messaging system for requesting data.
   *
   */

  function makeCallback(callback) {
    return _.isFunction(callback) ? callback : function () {
      return callback;
    };
  }

  Radio.Requests = {

    // Make a request
    request: function request(name) {
      var args = _.toArray(arguments).slice(1);
      var results = Radio._eventsApi(this, 'request', name, args);
      if (results) {
        return results;
      }
      var channelName = this.channelName;
      var requests = this._requests;

      // Check if we should log the request, and if so, do it
      if (channelName && this._tunedIn) {
        Radio.log.apply(this, [channelName, name].concat(args));
      }

      // If the request isn't handled, log it in DEBUG mode and exit
      if (requests && (requests[name] || requests['default'])) {
        var handler = requests[name] || requests['default'];
        args = requests[name] ? args : arguments;
        return Radio._callHandler(handler.callback, handler.context, args);
      } else {
        Radio.debugLog('An unhandled request was fired', name, channelName);
      }
    },

    // Set up a handler for a request
    reply: function reply(name, callback, context) {
      if (Radio._eventsApi(this, 'reply', name, [callback, context])) {
        return this;
      }

      this._requests || (this._requests = {});

      if (this._requests[name]) {
        Radio.debugLog('A request was overwritten', name, this.channelName);
      }

      this._requests[name] = {
        callback: makeCallback(callback),
        context: context || this
      };

      return this;
    },

    // Set up a handler that can only be requested once
    replyOnce: function replyOnce(name, callback, context) {
      if (Radio._eventsApi(this, 'replyOnce', name, [callback, context])) {
        return this;
      }

      var self = this;

      var once = _.once(function () {
        self.stopReplying(name);
        return makeCallback(callback).apply(this, arguments);
      });

      return this.reply(name, once, context);
    },

    // Remove handler(s)
    stopReplying: function stopReplying(name, callback, context) {
      if (Radio._eventsApi(this, 'stopReplying', name)) {
        return this;
      }

      // Remove everything if there are no arguments passed
      if (!name && !callback && !context) {
        delete this._requests;
      } else if (!removeHandlers(this._requests, name, callback, context)) {
        Radio.debugLog('Attempted to remove the unregistered request', name, this.channelName);
      }

      return this;
    }
  };

  /*
   * Backbone.Radio.channel
   * ----------------------
   * Get a reference to a channel by name.
   *
   */

  Radio._channels = {};

  Radio.channel = function (channelName) {
    if (!channelName) {
      throw new Error('You must provide a name for the channel.');
    }

    if (Radio._channels[channelName]) {
      return Radio._channels[channelName];
    } else {
      return Radio._channels[channelName] = new Radio.Channel(channelName);
    }
  };

  /*
   * Backbone.Radio.Channel
   * ----------------------
   * A Channel is an object that extends from Backbone.Events,
   * and Radio.Requests.
   *
   */

  Radio.Channel = function (channelName) {
    this.channelName = channelName;
  };

  _.extend(Radio.Channel.prototype, Backbone.Events, Radio.Requests, {

    // Remove all handlers from the messaging systems of this channel
    reset: function reset() {
      this.off();
      this.stopListening();
      this.stopReplying();
      return this;
    }
  });

  /*
   * Top-level API
   * -------------
   * Supplies the 'top-level API' for working with Channels directly
   * from Backbone.Radio.
   *
   */

  var channel;
  var args;
  var systems = [Backbone.Events, Radio.Requests];
  _.each(systems, function (system) {
    _.each(system, function (method, methodName) {
      Radio[methodName] = function (channelName) {
        args = _.toArray(arguments).slice(1);
        channel = this.channel(channelName);
        return channel[methodName].apply(channel, args);
      };
    });
  });

  Radio.reset = function (channelName) {
    var channels = !channelName ? this._channels : [this._channels[channelName]];
    _.each(channels, function (channel) {
      channel.reset();
    });
  };

  return Radio;

}));
//# sourceMappingURL=./backbone.radio.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.3.3

//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self === self && self) ||
            (typeof global == 'object' && global.global === global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10), __webpack_require__(56), exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore'), $;
    try { $ = require('jquery'); } catch (e) {}
    factory(root, exports, _, $);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

})(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.3.3';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space-separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
      context: context,
      ctx: obj,
      listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo = function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off = function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
      context: context,
      listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening = function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once = function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    if (typeof name === 'string' && context == null) callback = void 0;
    return this.on(events, callback, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce = function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger = function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, callback, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    var defaults = _.result(this, 'defaults');
    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else if (!this._validate(attrs, options)) {
        return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend({}, options, {validate: true}));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1};

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    var i;
    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();
      var removed = this._removeModels(models, options);
      if (!options.silent && removed.length) {
        options.changes = {added: [], merged: [], removed: removed};
        this.trigger('update', this, options);
      }
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.extend({}, setOptions, options);
      if (options.parse && !this._isModel(models)) {
        models = this.parse(models, options) || [];
      }

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at > this.length) at = this.length;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toMerge = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && at == null && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model, i;
      for (i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            toMerge.push(existing);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
          return m !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort/update events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length || toMerge.length) {
          options.changes = {
            added: toAdd,
            removed: toRemove,
            merged: toMerge
          };
          this.trigger('update', this, options);
        }
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id, cid, model object with id or cid
    // properties, or an attributes object that is transformed through modelId.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] ||
        this._byId[this.modelId(obj.attributes || obj)] ||
        obj.cid && this._byId[obj.cid];
    },

    // Returns `true` if the model is in the collection.
    has: function(obj) {
      return this.get(obj) != null;
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return this.map(attr + '');
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(m, resp, callbackOpts) {
        if (wait) collection.add(m, callbackOpts);
        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function(attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        // Remove references before triggering 'remove' event to prevent an
        // infinite loop. #3693
        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        if (id != null) delete this._byId[id];

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function(model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if (model) {
        if ((event === 'add' || event === 'remove') && collection !== this) return;
        if (event === 'destroy') this.remove(model, options);
        if (event === 'change') {
          var prevId = this.modelId(model.previousAttributes());
          var id = this.modelId(model.attributes);
          if (prevId !== id) {
            if (prevId != null) delete this._byId[prevId];
            if (id != null) this._byId[id] = model;
          }
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch': 'PATCH',
    'delete': 'DELETE',
    'read': 'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var rootPath = path.slice(0, this.root.length - 1) + '/';
      return rootPath === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var rootPath = this.root.slice(0, -1) || '/';
          this.location.replace(rootPath + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function(eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function(eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var rootPath = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        rootPath = rootPath.slice(0, -1) || '/';
      }
      var url = rootPath + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function and add the prototype properties.
    child.prototype = _.create(parent.prototype, protoProps);
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = __webpack_require__(3);

var _marionette = __webpack_require__(7);

var _template = __webpack_require__(59);

var _template2 = _interopRequireDefault(_template);

var _view = __webpack_require__(60);

var _view2 = _interopRequireDefault(_view);

var _framework = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone.View.extend({
  template: _framework.Template7.compile(_template2.default),

  attributes: {
    id: 'single',
    class: 'page'
  },

  events: {
    'click .second-link': function clickSecondLink(e) {
      e.preventDefault();
      (0, _marionette.pushPage)(new _view2.default());
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

var _marionette = __webpack_require__(7);

var _view = __webpack_require__(57);

var _view2 = _interopRequireDefault(_view);

var _view3 = __webpack_require__(68);

var _view4 = _interopRequireDefault(_view3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _marionette.createApp)({
  options: {
    theme: 'ios'
  },

  views: {
    main: {
      el: '.view-main',
      preRender: true,
      rootPage: new _view2.default({
        el: '#home'
      })
    },
    secondtab: {
      el: '.view-tab2',
      rootPage: function rootPage() {
        return new _view4.default();
      }
    },
    login: {
      el: '.view-login',
      popup: true
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(22);

__webpack_require__(23);

var _framework = __webpack_require__(2);

var _framework2 = _interopRequireDefault(_framework);

var _popup = __webpack_require__(52);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_framework2.default.use([_popup2.default]);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _template = __webpack_require__(8);

var _template2 = _interopRequireDefault(_template);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

var _class = __webpack_require__(9);

var _class2 = _interopRequireDefault(_class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Framework7 = function (_Framework7Class) {
  _inherits(Framework7, _Framework7Class);

  function Framework7(params) {
    var _ret;

    _classCallCheck(this, Framework7);

    var _this = _possibleConstructorReturn(this, (Framework7.__proto__ || Object.getPrototypeOf(Framework7)).call(this, params));

    var passedParams = _utils2.default.extend({}, params);

    // App Instance
    var app = _this;

    // Default
    var defaults = {
      version: '1.0.0',
      id: 'io.framework7.testapp',
      root: 'body',
      theme: 'auto',
      language: window.navigator.language,
      routes: [],
      name: 'Framework7',
      initOnDeviceReady: true,
      init: true
    };

    // Extend defaults with modules params
    app.useModulesParams(defaults);

    // Extend defaults with passed params
    app.params = _utils2.default.extend(defaults, params);

    var $rootEl = (0, _dom2.default)(app.params.root);

    _utils2.default.extend(app, {
      // App Id
      id: app.params.id,
      // App Name
      name: app.params.name,
      // App version
      version: app.params.version,
      // Routes
      routes: app.params.routes,
      // Lang
      language: app.params.language,
      // Root
      root: $rootEl,
      // Local Storage
      ls: window.localStorage,
      // RTL
      rtl: $rootEl.css('direction') === 'rtl',
      // Theme
      theme: function getTheme() {
        if (app.params.theme === 'auto') {
          return _device2.default.ios ? 'ios' : 'md';
        }
        return app.params.theme;
      }(),
      // Initially passed parameters
      passedParams: passedParams
    });

    // Save Root
    app.root[0].f7 = app;

    // Install Modules
    app.useModules();

    // Init
    if (app.params.init) {
      if (_device2.default.cordova && app.params.initOnDeviceReady) {
        (0, _dom2.default)(document).on('deviceready', function () {
          app.init();
        });
      } else {
        app.init();
      }
    }

    // Return app instance
    return _ret = app, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Framework7, [{
    key: 'init',
    value: function init() {
      var app = this;
      if (app.initialized) return;

      app.root.addClass('framework7-initializing');

      // RTL attr
      if (app.rtl) {
        (0, _dom2.default)('html').attr('dir', 'rtl');
      }

      // Root class
      app.root.addClass('framework7-root');

      // Theme class
      (0, _dom2.default)('html').removeClass('ios md').addClass(app.theme);

      // Data
      app.data = {};
      if (app.params.data && typeof app.params.data === 'function') {
        _utils2.default.extend(app.data, app.params.data.bind(app)());
      } else if (app.params.data) {
        _utils2.default.extend(app.data, app.params.data);
      }
      // Methods
      app.methods = {};
      if (app.params.methods) {
        _utils2.default.extend(app.methods, app.params.methods);
      }
      // Init class
      _utils2.default.nextFrame(function () {
        app.root.removeClass('framework7-initializing');
      });
      // Emit, init other modules
      app.initialized = true;
      app.emit('init');
    }
    // eslint-disable-next-line

  }, {
    key: '$',
    get: function get() {
      return _dom2.default;
    }
    // eslint-disable-next-line

  }, {
    key: 't7',
    get: function get() {
      return _template2.default;
    }
  }], [{
    key: 'Dom7',
    get: function get() {
      return _dom2.default;
    }
  }, {
    key: '$',
    get: function get() {
      return _dom2.default;
    }
  }, {
    key: 'Template7',
    get: function get() {
      return _template2.default;
    }
  }, {
    key: 'Class',
    get: function get() {
      return _class2.default;
    }
  }]);

  return Framework7;
}(_class2.default);

exports.default = Framework7;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bezier;
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

/* eslint-disable */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}
function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}
function C(aA1) {
  return 3.0 * aA1;
}

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, aA, aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0.0) {
      return aGuessT;
    }
    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}

function bezier(mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'device',
  proto: {
    device: _device2.default
  },
  static: {
    device: _device2.default
  },
  on: {
    init: function init() {
      var classNames = [];
      var html = document.querySelector('html');
      // Pixel Ratio
      classNames.push('device-pixel-ratio-' + Math.floor(_device2.default.pixelRatio));
      if (_device2.default.pixelRatio >= 2) {
        classNames.push('device-retina');
      }
      // OS classes
      if (_device2.default.os) {
        classNames.push('device-' + _device2.default.os, 'device-' + _device2.default.os + '-' + _device2.default.osVersion.split('.')[0], 'device-' + _device2.default.os + '-' + _device2.default.osVersion.replace(/\./g, '-'));
        if (_device2.default.os === 'ios') {
          var major = parseInt(_device2.default.osVersion.split('.')[0], 10);
          for (var i = major - 1; i >= 6; i -= 1) {
            classNames.push('device-ios-gt-' + i);
          }
          if (_device2.default.iphoneX) {
            classNames.push('device-iphone-x');
          }
        }
      } else if (_device2.default.desktop) {
        classNames.push('device-desktop');
      }
      // Status bar classes
      if (_device2.default.statusbar) {
        classNames.push('with-statusbar');
      } else {
        html.classList.remove('with-statusbar');
      }

      // Add html classes
      classNames.forEach(function (className) {
        html.classList.add(className);
      });
    }
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _support = __webpack_require__(6);

var _support2 = _interopRequireDefault(_support);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'support',
  proto: {
    support: _support2.default
  },
  static: {
    support: _support2.default
  },
  on: {
    init: function init() {
      var html = document.querySelector('html');
      var classNames = [];
      if (_support2.default.positionSticky) {
        classNames.push('support-position-sticky');
      }
      // Add html classes
      classNames.forEach(function (className) {
        html.classList.add(className);
      });
    }
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'utils',
  proto: {
    utils: _utils2.default
  },
  static: {
    utils: _utils2.default
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'resize',
  instance: {
    getSize: function getSize() {
      var app = this;
      var offset = app.root.offset();
      var _ref = [app.root[0].offsetWidth, app.root[0].offsetHeight, offset.left, offset.top],
          width = _ref[0],
          height = _ref[1],
          left = _ref[2],
          top = _ref[3];

      app.width = width;
      app.height = height;
      app.left = left;
      app.top = top;
      return { width: width, height: height, left: left, top: top };
    }
  },
  on: {
    init: function init() {
      var app = this;

      // Get Size
      app.getSize();

      // Emit resize
      window.addEventListener('resize', function () {
        app.emit('resize');
      }, false);

      // Emit orientationchange
      window.addEventListener('orientationchange', function () {
        app.emit('orientationchange');
      });
    },
    orientationchange: function orientationchange() {
      var app = this;
      if (app.device && app.device.minimalUi) {
        if (window.orientation === 90 || window.orientation === -90) {
          document.body.scrollTop = 0;
        }
      }
      // Fix iPad weird body scroll
      if (app.device.ipad) {
        document.body.scrollLeft = 0;
        setTimeout(function () {
          document.body.scrollLeft = 0;
        }, 0);
      }
    },
    resize: function resize() {
      var app = this;
      app.getSize();
    }
  }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(13);

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'request',
  proto: {
    request: _request2.default
  },
  static: {
    request: _request2.default
  }
}; /* eslint no-param-reassign: "off" */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _support = __webpack_require__(6);

var _support2 = _interopRequireDefault(_support);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initTouch() {
  var app = this;
  var params = app.params.touch;
  var useRipple = app.theme === 'md' && params.materialRipple;

  if (_device2.default.ios && _device2.default.webView) {
    // Strange hack required for iOS 8 webview to work on inputs
    window.addEventListener('touchstart', function () {});
  }

  var touchStartX = void 0;
  var touchStartY = void 0;
  var touchStartTime = void 0;
  var targetElement = void 0;
  var trackClick = void 0;
  var activeSelection = void 0;
  var scrollParent = void 0;
  var lastClickTime = void 0;
  var isMoved = void 0;
  var tapHoldFired = void 0;
  var tapHoldTimeout = void 0;

  var activableElement = void 0;
  var activeTimeout = void 0;

  var needsFastClick = void 0;
  var needsFastClickTimeOut = void 0;

  var rippleWave = void 0;
  var rippleTarget = void 0;
  var rippleTimeout = void 0;

  function findActivableElement(el) {
    var target = (0, _dom2.default)(el);
    var parents = target.parents(params.activeStateElements);
    var activable = void 0;
    if (target.is(params.activeStateElements)) {
      activable = target;
    }
    if (parents.length > 0) {
      activable = activable ? activable.add(parents) : parents;
    }
    return activable || target;
  }

  function isInsideScrollableView(el) {
    var pageContent = el.parents('.page-content, .panel');

    if (pageContent.length === 0) {
      return false;
    }

    // This event handler covers the "tap to stop scrolling".
    if (pageContent.prop('scrollHandlerSet') !== 'yes') {
      pageContent.on('scroll', function () {
        clearTimeout(activeTimeout);
        clearTimeout(rippleTimeout);
      });
      pageContent.prop('scrollHandlerSet', 'yes');
    }

    return true;
  }
  function addActive() {
    if (!activableElement) return;
    activableElement.addClass('active-state');
  }
  function removeActive() {
    if (!activableElement) return;
    activableElement.removeClass('active-state');
    activableElement = null;
  }
  function isFormElement(el) {
    var nodes = 'input select textarea label'.split(' ');
    if (el.nodeName && nodes.indexOf(el.nodeName.toLowerCase()) >= 0) return true;
    return false;
  }
  function androidNeedsBlur(el) {
    var noBlur = 'button input textarea select'.split(' ');
    if (document.activeElement && el !== document.activeElement && document.activeElement !== document.body) {
      if (noBlur.indexOf(el.nodeName.toLowerCase()) >= 0) {
        return false;
      }
      return true;
    }
    return false;
  }
  function targetNeedsFastClick(el) {
    /*
    if (
      Device.ios
      &&
      (
        Device.osVersion.split('.')[0] > 9
        ||
        (Device.osVersion.split('.')[0] * 1 === 9 && Device.osVersion.split('.')[1] >= 1)
      )
    ) {
      return false;
    }
    */
    var $el = (0, _dom2.default)(el);
    if (el.nodeName.toLowerCase() === 'input' && (el.type === 'file' || el.type === 'range')) return false;
    if (el.nodeName.toLowerCase() === 'select' && _device2.default.android) return false;
    if ($el.hasClass('no-fastclick') || $el.parents('.no-fastclick').length > 0) return false;
    if (params.fastClicksExclude && $el.is(params.fastClicksExclude)) return false;
    return true;
  }
  function targetNeedsFocus(el) {
    if (document.activeElement === el) {
      return false;
    }
    var tag = el.nodeName.toLowerCase();
    var skipInputs = 'button checkbox file image radio submit'.split(' ');
    if (el.disabled || el.readOnly) return false;
    if (tag === 'textarea') return true;
    if (tag === 'select') {
      if (_device2.default.android) return false;
      return true;
    }
    if (tag === 'input' && skipInputs.indexOf(el.type) < 0) return true;
    return false;
  }
  function targetNeedsPrevent(el) {
    var $el = (0, _dom2.default)(el);
    var prevent = true;
    if ($el.is('label') || $el.parents('label').length > 0) {
      if (_device2.default.android) {
        prevent = false;
      } else if (_device2.default.ios && $el.is('input')) {
        prevent = true;
      } else prevent = false;
    }
    return prevent;
  }

  // Ripple handlers
  function findRippleElement(el) {
    var rippleElements = params.materialRippleElements;
    var $el = (0, _dom2.default)(el);
    if ($el.is(rippleElements)) {
      if ($el.hasClass('no-ripple')) {
        return false;
      }
      return $el;
    } else if ($el.parents(rippleElements).length > 0) {
      var rippleParent = $el.parents(rippleElements).eq(0);
      if (rippleParent.hasClass('no-ripple')) {
        return false;
      }
      return rippleParent;
    }
    return false;
  }
  function createRipple($el, x, y) {
    if (!$el) return;
    rippleWave = app.touchRipple.create($el, x, y);
  }

  function removeRipple() {
    if (!rippleWave) return;
    rippleWave.remove();
    rippleWave = undefined;
    rippleTarget = undefined;
  }
  function rippleTouchStart(el) {
    rippleTarget = findRippleElement(el);
    if (!rippleTarget || rippleTarget.length === 0) {
      rippleTarget = undefined;
      return;
    }
    if (!isInsideScrollableView(rippleTarget)) {
      createRipple(rippleTarget, touchStartX, touchStartY);
    } else {
      rippleTimeout = setTimeout(function () {
        createRipple(rippleTarget, touchStartX, touchStartY);
      }, 80);
    }
  }
  function rippleTouchMove() {
    clearTimeout(rippleTimeout);
    removeRipple();
  }
  function rippleTouchEnd() {
    if (rippleWave) {
      removeRipple();
    } else if (rippleTarget && !isMoved) {
      clearTimeout(rippleTimeout);
      createRipple(rippleTarget, touchStartX, touchStartY);
      setTimeout(removeRipple, 0);
    } else {
      removeRipple();
    }
  }

  // Mouse Handlers
  function handleMouseDown(e) {
    findActivableElement(e.target).addClass('active-state');
    if ('which' in e && e.which === 3) {
      setTimeout(function () {
        (0, _dom2.default)('.active-state').removeClass('active-state');
      }, 0);
    }
    if (useRipple) {
      touchStartX = e.pageX;
      touchStartY = e.pageY;
      rippleTouchStart(e.target, e.pageX, e.pageY);
    }
  }
  function handleMouseMove() {
    (0, _dom2.default)('.active-state').removeClass('active-state');
    if (useRipple) {
      rippleTouchMove();
    }
  }
  function handleMouseUp() {
    (0, _dom2.default)('.active-state').removeClass('active-state');
    if (useRipple) {
      rippleTouchEnd();
    }
  }

  // Send Click
  function sendClick(e) {
    var touch = e.changedTouches[0];
    var evt = document.createEvent('MouseEvents');
    var eventType = 'click';
    if (_device2.default.android && targetElement.nodeName.toLowerCase() === 'select') {
      eventType = 'mousedown';
    }
    evt.initMouseEvent(eventType, true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    evt.forwardedTouchEvent = true;

    if (app.device.ios && window.navigator.standalone) {
      // Fix the issue happens in iOS home screen apps where the wrong element is selected during a momentum scroll.
      // Upon tapping, we give the scrolling time to stop, then we grab the element based where the user tapped.
      setTimeout(function () {
        targetElement = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        targetElement.dispatchEvent(evt);
      }, 10);
    } else {
      targetElement.dispatchEvent(evt);
    }
  }

  // Touch Handlers
  function handleTouchStart(e) {
    var _this = this;

    isMoved = false;
    tapHoldFired = false;
    if (e.targetTouches.length > 1) {
      if (activableElement) removeActive();
      return true;
    }
    if (e.touches.length > 1 && activableElement) {
      removeActive();
    }
    if (params.tapHold) {
      if (tapHoldTimeout) clearTimeout(tapHoldTimeout);
      tapHoldTimeout = setTimeout(function () {
        if (e && e.touches && e.touches.length > 1) return;
        tapHoldFired = true;
        e.preventDefault();
        (0, _dom2.default)(e.target).trigger('taphold');
      }, params.tapHoldDelay);
    }
    if (needsFastClickTimeOut) clearTimeout(needsFastClickTimeOut);
    needsFastClick = targetNeedsFastClick(e.target);

    if (!needsFastClick) {
      trackClick = false;
      return true;
    }
    if (_device2.default.ios || _device2.default.android && 'getSelection' in window) {
      var selection = window.getSelection();
      if (selection.rangeCount && selection.focusNode !== document.body && (!selection.isCollapsed || document.activeElement === selection.focusNode)) {
        activeSelection = true;
        return true;
      }

      activeSelection = false;
    }
    if (_device2.default.android) {
      if (androidNeedsBlur(e.target)) {
        document.activeElement.blur();
      }
    }

    trackClick = true;
    targetElement = e.target;
    touchStartTime = new Date().getTime();
    touchStartX = e.targetTouches[0].pageX;
    touchStartY = e.targetTouches[0].pageY;

    // Detect scroll parent
    if (_device2.default.ios) {
      scrollParent = undefined;
      (0, _dom2.default)(targetElement).parents().each(function () {
        var parent = _this;
        if (parent.scrollHeight > parent.offsetHeight && !scrollParent) {
          scrollParent = parent;
          scrollParent.f7ScrollTop = scrollParent.scrollTop;
        }
      });
    }
    if (e.timeStamp - lastClickTime < params.fastClicksDelayBetweenClicks) {
      e.preventDefault();
    }

    if (params.activeState) {
      activableElement = findActivableElement(targetElement);
      // If it's inside a scrollable view, we don't trigger active-state yet,
      // because it can be a scroll instead. Based on the link:
      // http://labnote.beedesk.com/click-scroll-and-pseudo-active-on-mobile-webk
      if (!isInsideScrollableView(activableElement)) {
        addActive();
      } else {
        activeTimeout = setTimeout(addActive, 80);
      }
    }
    if (useRipple) {
      rippleTouchStart(targetElement, touchStartX, touchStartY);
    }
    return true;
  }
  function handleTouchMove(e) {
    if (!trackClick) return;
    var distance = params.fastClicksDistanceThreshold;
    if (distance) {
      var pageX = e.targetTouches[0].pageX;
      var pageY = e.targetTouches[0].pageY;
      if (Math.abs(pageX - touchStartX) > distance || Math.abs(pageY - touchStartY) > distance) {
        isMoved = true;
      }
    } else {
      isMoved = true;
    }
    if (isMoved) {
      trackClick = false;
      targetElement = null;
      isMoved = true;
      if (params.tapHold) {
        clearTimeout(tapHoldTimeout);
      }
      if (params.activeState) {
        clearTimeout(activeTimeout);
        removeActive();
      }
      if (useRipple) {
        rippleTouchMove();
      }
    }
  }
  function handleTouchEnd(e) {
    clearTimeout(activeTimeout);
    clearTimeout(tapHoldTimeout);

    if (!trackClick) {
      if (!activeSelection && needsFastClick) {
        if (!(_device2.default.android && !e.cancelable) && e.cancelable) {
          e.preventDefault();
        }
      }
      return true;
    }

    if (document.activeElement === e.target) {
      if (params.activeState) removeActive();
      if (useRipple) {
        rippleTouchEnd();
      }
      return true;
    }

    if (!activeSelection) {
      e.preventDefault();
    }

    if (e.timeStamp - lastClickTime < params.fastClicksDelayBetweenClicks) {
      setTimeout(removeActive, 0);
      return true;
    }

    lastClickTime = e.timeStamp;

    trackClick = false;

    if (_device2.default.ios && scrollParent) {
      if (scrollParent.scrollTop !== scrollParent.f7ScrollTop) {
        return false;
      }
    }

    // Add active-state here because, in a very fast tap, the timeout didn't
    // have the chance to execute. Removing active-state in a timeout gives
    // the chance to the animation execute.
    if (params.activeState) {
      addActive();
      setTimeout(removeActive, 0);
    }
    // Remove Ripple
    if (useRipple) {
      rippleTouchEnd();
    }

    // Trigger focus when required
    if (targetNeedsFocus(targetElement)) {
      if (_device2.default.ios && _device2.default.webView) {
        if (e.timeStamp - touchStartTime > 159) {
          targetElement = null;
          return false;
        }
        targetElement.focus();
        return false;
      }

      targetElement.focus();
    }

    // Blur active elements
    if (document.activeElement && targetElement !== document.activeElement && document.activeElement !== document.body && targetElement.nodeName.toLowerCase() !== 'label') {
      document.activeElement.blur();
    }

    // Send click
    e.preventDefault();
    sendClick(e);
    return false;
  }
  function handleTouchCancel() {
    trackClick = false;
    targetElement = null;

    // Remove Active State
    clearTimeout(activeTimeout);
    clearTimeout(tapHoldTimeout);
    if (params.activeState) {
      removeActive();
    }

    // Remove Ripple
    if (useRipple) {
      rippleTouchEnd();
    }
  }

  function handleClick(e) {
    var allowClick = false;

    if (trackClick) {
      targetElement = null;
      trackClick = false;
      return true;
    }
    if (e.target.type === 'submit' && e.detail === 0 || e.target.type === 'file') {
      return true;
    }
    if (!targetElement) {
      if (!isFormElement(e.target)) {
        allowClick = true;
      }
    }
    if (!needsFastClick) {
      allowClick = true;
    }
    if (document.activeElement === targetElement) {
      allowClick = true;
    }
    if (e.forwardedTouchEvent) {
      allowClick = true;
    }
    if (!e.cancelable) {
      allowClick = true;
    }
    if (params.tapHold && params.tapHoldPreventClicks && tapHoldFired) {
      allowClick = false;
    }
    if (!allowClick) {
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (targetElement) {
        if (targetNeedsPrevent(targetElement) || isMoved) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }
      targetElement = null;
    }
    needsFastClickTimeOut = setTimeout(function () {
      needsFastClick = false;
    }, _device2.default.ios || _device2.default.androidChrome ? 100 : 400);

    if (params.tapHold) {
      tapHoldTimeout = setTimeout(function () {
        tapHoldFired = false;
      }, _device2.default.ios || _device2.default.androidChrome ? 100 : 400);
    }

    return allowClick;
  }

  function emitAppTouchEvent(name, e) {
    app.emit({
      events: name,
      data: [e]
    });
  }
  function appClick(e) {
    emitAppTouchEvent('click', e);
  }
  function appTouchStartActive(e) {
    emitAppTouchEvent('touchstart touchstart:active', e);
  }
  function appTouchMoveActive(e) {
    emitAppTouchEvent('touchmove touchmove:active', e);
  }
  function appTouchEndActive(e) {
    emitAppTouchEvent('touchend touchend:active', e);
  }
  function appTouchStartPassive(e) {
    emitAppTouchEvent('touchstart:passive', e);
  }
  function appTouchMovePassive(e) {
    emitAppTouchEvent('touchmove:passive', e);
  }
  function appTouchEndPassive(e) {
    emitAppTouchEvent('touchend:passive', e);
  }

  var passiveListener = _support2.default.passiveListener ? { passive: true } : false;
  var activeListener = _support2.default.passiveListener ? { passive: false } : false;

  document.addEventListener('click', appClick, true);

  if (_support2.default.passiveListener) {
    document.addEventListener(app.touchEvents.start, appTouchStartActive, activeListener);
    document.addEventListener(app.touchEvents.move, appTouchMoveActive, activeListener);
    document.addEventListener(app.touchEvents.end, appTouchEndActive, activeListener);

    document.addEventListener(app.touchEvents.start, appTouchStartPassive, passiveListener);
    document.addEventListener(app.touchEvents.move, appTouchMovePassive, passiveListener);
    document.addEventListener(app.touchEvents.end, appTouchEndPassive, passiveListener);
  } else {
    document.addEventListener(app.touchEvents.start, function (e) {
      appTouchStartActive(e);
      appTouchStartPassive(e);
    }, false);
    document.addEventListener(app.touchEvents.move, function (e) {
      appTouchMoveActive(e);
      appTouchMovePassive(e);
    }, false);
    document.addEventListener(app.touchEvents.end, function (e) {
      appTouchEndActive(e);
      appTouchEndPassive(e);
    }, false);
  }

  if (_support2.default.touch) {
    app.on('click', handleClick);
    app.on('touchstart', handleTouchStart);
    app.on('touchmove', handleTouchMove);
    app.on('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchCancel, { passive: true });
  } else if (params.activeState) {
    app.on('touchstart', handleMouseDown);
    app.on('touchmove', handleMouseMove);
    app.on('touchend', handleMouseUp);
  }
  document.addEventListener('contextmenu', function (e) {
    if (params.disableContextMenu && (_device2.default.ios || _device2.default.android || _device2.default.cordova)) {
      e.preventDefault();
    }
    if (useRipple) {
      if (activableElement) removeActive();
      rippleTouchEnd();
    }
  });
}

exports.default = {
  name: 'touch',
  params: {
    touch: {
      // Fast clicks
      fastClicks: true,
      fastClicksDistanceThreshold: 10,
      fastClicksDelayBetweenClicks: 50,
      fastClicksExclude: '', // CSS selector
      // ContextMenu
      disableContextMenu: true,
      // Tap Hold
      tapHold: false,
      tapHoldDelay: 750,
      tapHoldPreventClicks: true,
      // Active State
      activeState: true,
      activeStateElements: 'a, button, label, span, .actions-button',
      materialRipple: true,
      materialRippleElements: '.ripple, .link, .item-link, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell, .notification-close-button'
    }
  },
  instance: {
    touchEvents: {
      start: _support2.default.touch ? 'touchstart' : 'mousedown',
      move: _support2.default.touch ? 'touchmove' : 'mousemove',
      end: _support2.default.touch ? 'touchend' : 'mouseup'
    }
  },
  on: {
    init: initTouch
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

var _support = __webpack_require__(6);

var _support2 = _interopRequireDefault(_support);

var _viewClass = __webpack_require__(14);

var _viewClass2 = _interopRequireDefault(_viewClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initClicks(app) {
  function handleClicks(e) {
    var clicked = (0, _dom2.default)(e.target);
    var clickedLink = clicked.closest('a');
    var isLink = clickedLink.length > 0;
    var url = isLink && clickedLink.attr('href');
    var isTabLink = isLink && clickedLink.hasClass('tab-link') && (clickedLink.attr('data-tab') || url && url.indexOf('#') === 0);

    // Check if link is external
    if (isLink) {
      // eslint-disable-next-line
      if (clickedLink.is(app.params.clicks.externalLinks) || url && url.indexOf('javascript:') >= 0) {
        var target = clickedLink.attr('target');
        if (url && (target === '_system' || target === '_blank' || target === '_browser')) {
          e.preventDefault();
          if (target !== '_browser' && window.cordova && window.cordova.InAppBrowser) {
            window.cordova.InAppBrowser.open(url, target);
          } else {
            window.open(url, target);
          }
        }
        return;
      }
    }

    // Modules Clicks
    Object.keys(app.modules).forEach(function (moduleName) {
      var moduleClicks = app.modules[moduleName].clicks;
      if (!moduleClicks) return;
      Object.keys(moduleClicks).forEach(function (clickSelector) {
        var matchingClickedElement = clicked.closest(clickSelector).eq(0);
        if (matchingClickedElement.length > 0) {
          moduleClicks[clickSelector].call(app, matchingClickedElement, matchingClickedElement.dataset());
        }
      });
    });

    // Load Page
    var clickedLinkData = {};
    if (isLink) {
      e.preventDefault();
      clickedLinkData = clickedLink.dataset();
    }
    var validUrl = url && url.length > 0 && url !== '#' && !isTabLink;
    var template = clickedLinkData.template;
    if (validUrl || clickedLink.hasClass('back') || template) {
      var view = void 0;
      if (clickedLinkData.view) {
        view = (0, _dom2.default)(clickedLinkData.view)[0].f7View;
      } else {
        view = clicked.parents('.view')[0] && clicked.parents('.view')[0].f7View;
        if (view && view.params.linksView) {
          if (typeof view.params.linksView === 'string') view = (0, _dom2.default)(view.params.linksView)[0].f7View;else if (view.params.linksView instanceof _viewClass2.default) view = view.params.linksView;
        }
      }
      if (!view) {
        if (app.views.main) view = app.views.main;
      }
      if (!view || !view.router) return;
      if (clickedLink.hasClass('back')) view.router.back(url, clickedLinkData);else view.router.navigate(url, clickedLinkData);
    }
  }

  app.on('click', handleClicks);

  // Prevent scrolling on overlays
  function preventScrolling(e) {
    e.preventDefault();
  }
  if (_support2.default.touch && !_device2.default.android) {
    var activeListener = _support2.default.passiveListener ? { passive: false, capture: false } : false;
    (0, _dom2.default)(document).on(app.params.fastClicks ? 'touchstart' : 'touchmove', '.panel-backdrop, .dialog-backdrop, .preloader-backdrop, .popup-backdrop, .searchbar-backdrop', preventScrolling, activeListener);
  }
}
exports.default = {
  name: 'clicks',
  params: {
    clicks: {
      // External Links
      externalLinks: '.external'
    }
  },
  on: {
    init: function init() {
      var app = this;
      initClicks(app);
    }
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _template = __webpack_require__(8);

var _template2 = _interopRequireDefault(_template);

var _pathToRegexp = __webpack_require__(34);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _class = __webpack_require__(9);

var _class2 = _interopRequireDefault(_class);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _component = __webpack_require__(35);

var _component2 = _interopRequireDefault(_component);

var _history = __webpack_require__(5);

var _history2 = _interopRequireDefault(_history);

var _swipeBack = __webpack_require__(36);

var _swipeBack2 = _interopRequireDefault(_swipeBack);

var _navigate = __webpack_require__(37);

var _tab = __webpack_require__(38);

var _modal = __webpack_require__(39);

var _back = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line


var Router = function (_Framework7Class) {
  _inherits(Router, _Framework7Class);

  function Router(app, view) {
    var _ret;

    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, {}, [typeof view === 'undefined' ? app : view]));

    var router = _this;

    // Is App Router
    router.isAppRouter = typeof view === 'undefined';

    if (router.isAppRouter) {
      // App Router
      _utils2.default.extend(false, router, {
        app: app,
        params: app.params.view,
        routes: app.routes || [],
        cache: app.cache
      });
    } else {
      // View Router
      _utils2.default.extend(false, router, {
        app: app,
        view: view,
        viewId: view.id,
        params: view.params,
        routes: view.routes,
        $el: view.$el,
        el: view.el,
        $navbarEl: view.$navbarEl,
        navbarEl: view.navbarEl,
        history: view.history,
        scrollHistory: view.scrollHistory,
        cache: app.cache,
        dynamicNavbar: app.theme === 'ios' && view.params.iosDynamicNavbar,
        separateNavbar: app.theme === 'ios' && view.params.iosDynamicNavbar && view.params.iosSeparateDynamicNavbar,
        initialPages: [],
        initialNavbars: []
      });
    }

    // Install Modules
    router.useModules();

    // Temporary Dom
    router.tempDom = document.createElement('div');

    // AllowPageChage
    router.allowPageChange = true;

    // Current Route
    var currentRoute = {};
    var previousRoute = {};
    Object.defineProperty(router, 'currentRoute', {
      enumerable: true,
      configurable: true,
      set: function set() {
        var newRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        previousRoute = _utils2.default.extend({}, currentRoute);
        currentRoute = newRoute;
        if (!currentRoute) return;
        router.url = currentRoute.url;
        router.emit('routeChange', newRoute, previousRoute, router);
      },
      get: function get() {
        return currentRoute;
      }
    });
    Object.defineProperty(router, 'previousRoute', {
      enumerable: true,
      configurable: true,
      get: function get() {
        return previousRoute;
      },
      set: function set(newRoute) {
        previousRoute = newRoute;
      }
    });

    _utils2.default.extend(router, {
      // Load
      forward: _navigate.forward,
      load: _navigate.load,
      navigate: _navigate.navigate,
      refreshPage: _navigate.refreshPage,
      // Tab
      tabLoad: _tab.tabLoad,
      tabRemove: _tab.tabRemove,
      // Modal
      modalLoad: _modal.modalLoad,
      modalRemove: _modal.modalRemove,
      // Back
      backward: _back.backward,
      loadBack: _back.loadBack,
      back: _back.back
    });

    return _ret = router, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Router, [{
    key: 'animatableNavElements',
    value: function animatableNavElements(newNavbarInner, oldNavbarInner) {
      var router = this;
      var dynamicNavbar = router.dynamicNavbar;
      var animateIcon = router.params.iosAnimateNavbarBackIcon;

      var newNavEls = void 0;
      var oldNavEls = void 0;
      function animatableNavEl(el, navbarInner) {
        var $el = (0, _dom2.default)(el);
        var isSliding = $el.hasClass('sliding') || navbarInner.hasClass('sliding');
        var isSubnavbar = $el.hasClass('subnavbar');
        var needsOpacityTransition = isSliding ? !isSubnavbar : true;
        var hasIcon = isSliding && animateIcon && $el.hasClass('left') && $el.find('.back .icon').length > 0;
        var $iconEl = void 0;
        if (hasIcon) $iconEl = $el.find('.back .icon');
        return {
          $el: $el,
          $iconEl: $iconEl,
          hasIcon: hasIcon,
          leftOffset: $el[0].f7NavbarLeftOffset,
          rightOffset: $el[0].f7NavbarRightOffset,
          isSliding: isSliding,
          isSubnavbar: isSubnavbar,
          needsOpacityTransition: needsOpacityTransition
        };
      }
      if (dynamicNavbar) {
        newNavEls = [];
        oldNavEls = [];
        newNavbarInner.children('.left, .right, .title, .subnavbar').each(function (index, navEl) {
          newNavEls.push(animatableNavEl(navEl, newNavbarInner));
        });
        oldNavbarInner.children('.left, .right, .title, .subnavbar').each(function (index, navEl) {
          oldNavEls.push(animatableNavEl(navEl, oldNavbarInner));
        });
        [oldNavEls, newNavEls].forEach(function (navEls) {
          navEls.forEach(function (navEl) {
            var n = navEl;
            var isSliding = navEl.isSliding,
                $el = navEl.$el;

            var otherEls = navEls === oldNavEls ? newNavEls : oldNavEls;
            if (!(isSliding && $el.hasClass('title') && otherEls)) return;
            otherEls.forEach(function (otherNavEl) {
              if (otherNavEl.$el.hasClass('left') && otherNavEl.hasIcon) {
                var iconTextEl = otherNavEl.$el.find('.back span')[0];
                n.leftOffset += iconTextEl ? iconTextEl.offsetLeft : 0;
              }
            });
          });
        });
      }

      return { newNavEls: newNavEls, oldNavEls: oldNavEls };
    }
  }, {
    key: 'animateWithCSS',
    value: function animateWithCSS(oldPage, newPage, oldNavbarInner, newNavbarInner, direction, callback) {
      var router = this;
      var dynamicNavbar = router.dynamicNavbar;
      var separateNavbar = router.separateNavbar;
      var ios = router.app.theme === 'ios';
      // Router Animation class
      var routerTransitionClass = 'router-transition-' + direction + ' router-transition-css-' + direction;

      var newNavEls = void 0;
      var oldNavEls = void 0;
      var navbarWidth = 0;

      if (ios && dynamicNavbar) {
        if (!separateNavbar) {
          navbarWidth = newNavbarInner[0].offsetWidth;
        }
        var navEls = router.animatableNavElements(newNavbarInner, oldNavbarInner);
        newNavEls = navEls.newNavEls;
        oldNavEls = navEls.oldNavEls;
      }

      function animateNavbars(progress) {
        if (ios && dynamicNavbar) {
          newNavEls.forEach(function (navEl) {
            var $el = navEl.$el;
            var offset = direction === 'forward' ? navEl.rightOffset : navEl.leftOffset;
            if (navEl.isSliding) {
              $el.transform('translate3d(' + offset * (1 - progress) + 'px,0,0)');
            }
            if (navEl.hasIcon) {
              if (direction === 'forward') {
                navEl.$iconEl.transform('translate3d(' + (-offset - navbarWidth) * (1 - progress) + 'px,0,0)');
              } else {
                navEl.$iconEl.transform('translate3d(' + (-offset + navbarWidth / 5) * (1 - progress) + 'px,0,0)');
              }
            }
          });
          oldNavEls.forEach(function (navEl) {
            var $el = navEl.$el;
            var offset = direction === 'forward' ? navEl.leftOffset : navEl.rightOffset;
            if (navEl.isSliding) {
              $el.transform('translate3d(' + offset * progress + 'px,0,0)');
            }
            if (navEl.hasIcon) {
              if (direction === 'forward') {
                navEl.$iconEl.transform('translate3d(' + (-offset + navbarWidth / 5) * progress + 'px,0,0)');
              } else {
                navEl.$iconEl.transform('translate3d(' + (-offset - navbarWidth) * progress + 'px,0,0)');
              }
            }
          });
        }
      }

      // AnimationEnd Callback
      function onDone() {
        if (router.dynamicNavbar) {
          if (newNavbarInner.hasClass('sliding')) {
            newNavbarInner.find('.title, .left, .right, .left .icon, .subnavbar').transform('');
          } else {
            newNavbarInner.find('.sliding').transform('');
          }
          if (oldNavbarInner.hasClass('sliding')) {
            oldNavbarInner.find('.title, .left, .right, .left .icon, .subnavbar').transform('');
          } else {
            oldNavbarInner.find('.sliding').transform('');
          }
        }
        router.$el.removeClass(routerTransitionClass);
        if (callback) callback();
      }

      (direction === 'forward' ? newPage : oldPage).animationEnd(function () {
        onDone();
      });

      // Animate
      if (dynamicNavbar) {
        // Prepare Navbars
        animateNavbars(0);
        _utils2.default.nextTick(function () {
          // Add class, start animation
          animateNavbars(1);
          router.$el.addClass(routerTransitionClass);
        });
      } else {
        // Add class, start animation
        router.$el.addClass(routerTransitionClass);
      }
    }
  }, {
    key: 'animateWithJS',
    value: function animateWithJS(oldPage, newPage, oldNavbarInner, newNavbarInner, direction, callback) {
      var router = this;
      var dynamicNavbar = router.dynamicNavbar;
      var separateNavbar = router.separateNavbar;
      var ios = router.app.theme === 'ios';
      var duration = ios ? 400 : 250;
      var routerTransitionClass = 'router-transition-' + direction + ' router-transition-js-' + direction;

      var startTime = null;
      var done = false;

      var newNavEls = void 0;
      var oldNavEls = void 0;
      var navbarWidth = 0;

      if (ios && dynamicNavbar) {
        if (!separateNavbar) {
          navbarWidth = newNavbarInner[0].offsetWidth;
        }
        var navEls = router.animatableNavElements(newNavbarInner, oldNavbarInner);
        newNavEls = navEls.newNavEls;
        oldNavEls = navEls.oldNavEls;
      }

      var $shadowEl = void 0;
      var $opacityEl = void 0;

      if (ios) {
        $shadowEl = (0, _dom2.default)('<div class="page-shadow-effect"></div>');
        $opacityEl = (0, _dom2.default)('<div class="page-opacity-effect"></div>');

        if (direction === 'forward') {
          newPage.append($shadowEl);
          oldPage.append($opacityEl);
        } else {
          newPage.append($opacityEl);
          oldPage.append($shadowEl);
        }
      }
      var easing = _utils2.default.bezier(0.25, 0.1, 0.25, 1);

      function onDone() {
        newPage.transform('').css('opacity', '');
        oldPage.transform('').css('opacity', '');
        if (ios) {
          $shadowEl.remove();
          $opacityEl.remove();
          if (dynamicNavbar) {
            newNavEls.forEach(function (navEl) {
              navEl.$el.transform('');
              navEl.$el.css('opacity', '');
            });
            oldNavEls.forEach(function (navEl) {
              navEl.$el.transform('');
              navEl.$el.css('opacity', '');
            });
            newNavEls = [];
            oldNavEls = [];
          }
        }

        router.$el.removeClass(routerTransitionClass);

        if (callback) callback();
      }

      function render() {
        var time = _utils2.default.now();
        if (!startTime) startTime = time;
        var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        var easeProgress = easing(progress);

        if (progress >= 1) {
          done = true;
        }
        var inverter = router.app.rtl ? -1 : 1;
        if (ios) {
          if (direction === 'forward') {
            newPage.transform('translate3d(' + (1 - easeProgress) * 100 * inverter + '%,0,0)');
            oldPage.transform('translate3d(' + -easeProgress * 20 * inverter + '%,0,0)');
            $shadowEl[0].style.opacity = easeProgress;
            $opacityEl[0].style.opacity = easeProgress;
          } else {
            newPage.transform('translate3d(' + -(1 - easeProgress) * 20 * inverter + '%,0,0)');
            oldPage.transform('translate3d(' + easeProgress * 100 * inverter + '%,0,0)');
            $shadowEl[0].style.opacity = 1 - easeProgress;
            $opacityEl[0].style.opacity = 1 - easeProgress;
          }
          if (dynamicNavbar) {
            newNavEls.forEach(function (navEl) {
              var $el = navEl.$el;
              var offset = direction === 'forward' ? navEl.rightOffset : navEl.leftOffset;
              if (navEl.needsOpacityTransition) {
                $el[0].style.opacity = easeProgress;
              }
              if (navEl.isSliding) {
                $el.transform('translate3d(' + offset * (1 - easeProgress) + 'px,0,0)');
              }
              if (navEl.hasIcon) {
                if (direction === 'forward') {
                  navEl.$iconEl.transform('translate3d(' + (-offset - navbarWidth) * (1 - easeProgress) + 'px,0,0)');
                } else {
                  navEl.$iconEl.transform('translate3d(' + (-offset + navbarWidth / 5) * (1 - easeProgress) + 'px,0,0)');
                }
              }
            });
            oldNavEls.forEach(function (navEl) {
              var $el = navEl.$el;
              var offset = direction === 'forward' ? navEl.leftOffset : navEl.rightOffset;
              if (navEl.needsOpacityTransition) {
                $el[0].style.opacity = 1 - easeProgress;
              }
              if (navEl.isSliding) {
                $el.transform('translate3d(' + offset * easeProgress + 'px,0,0)');
              }
              if (navEl.hasIcon) {
                if (direction === 'forward') {
                  navEl.$iconEl.transform('translate3d(' + (-offset + navbarWidth / 5) * easeProgress + 'px,0,0)');
                } else {
                  navEl.$iconEl.transform('translate3d(' + (-offset - navbarWidth) * easeProgress + 'px,0,0)');
                }
              }
            });
          }
        } else if (direction === 'forward') {
          newPage.transform('translate3d(0, ' + (1 - easeProgress) * 56 + 'px,0)');
          newPage.css('opacity', easeProgress);
        } else {
          oldPage.transform('translate3d(0, ' + easeProgress * 56 + 'px,0)');
          oldPage.css('opacity', 1 - easeProgress);
        }

        if (done) {
          onDone();
          return;
        }
        _utils2.default.nextFrame(render);
      }

      router.$el.addClass(routerTransitionClass);

      _utils2.default.nextFrame(render);
    }
  }, {
    key: 'animate',
    value: function animate() {
      // Args: oldPage, newPage, oldNavbarInner, newNavbarInner, direction, callback
      var router = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (router.params.animateCustom) {
        router.params.animateCustom.apply(router, args);
      } else if (router.params.animateWithJS) {
        router.animateWithJS.apply(router, args);
      } else {
        router.animateWithCSS.apply(router, args);
      }
    }
  }, {
    key: 'removeModal',
    value: function removeModal(modalEl) {
      var router = this;
      router.removeEl(modalEl);
    }
    // eslint-disable-next-line

  }, {
    key: 'removeTabContent',
    value: function removeTabContent(tabEl) {
      var $tabEl = (0, _dom2.default)(tabEl);
      $tabEl.html('');
    }
  }, {
    key: 'removeNavbar',
    value: function removeNavbar(el) {
      var router = this;
      router.removeEl(el);
    }
  }, {
    key: 'removePage',
    value: function removePage(el) {
      var router = this;
      router.removeEl(el);
    }
  }, {
    key: 'removeEl',
    value: function removeEl(el) {
      if (!el) return;
      var router = this;
      var $el = (0, _dom2.default)(el);
      if ($el.length === 0) return;
      if ($el[0].f7Component && $el[0].f7Component.$destroy) {
        $el[0].f7Component.$destroy();
      }
      if (!router.params.removeElements) {
        return;
      }
      if (router.params.removeElementsWithTimeout) {
        setTimeout(function () {
          $el.remove();
        }, router.params.removeElementsTimeout);
      } else {
        $el.remove();
      }
    }
  }, {
    key: 'getPageEl',
    value: function getPageEl(content) {
      var router = this;
      if (typeof content === 'string') {
        router.tempDom.innerHTML = content;
      } else {
        if ((0, _dom2.default)(content).hasClass('page')) {
          return content;
        }
        router.tempDom.innerHTML = '';
        (0, _dom2.default)(router.tempDom).append(content);
      }

      return router.findElement('.page', router.tempDom);
    }
  }, {
    key: 'findElement',
    value: function findElement(stringSelector, container, notStacked) {
      var router = this;
      var view = router.view;
      var app = router.app;

      // Modals Selector
      var modalsSelector = '.popup, .dialog, .popover, .actions-modal, .sheet-modal, .login-screen, .page';

      var $container = (0, _dom2.default)(container);
      var selector = stringSelector;
      if (notStacked) selector += ':not(.stacked)';

      var found = $container.find(selector).filter(function (index, el) {
        return (0, _dom2.default)(el).parents(modalsSelector).length === 0;
      });

      if (found.length > 1) {
        if (typeof view.selector === 'string') {
          // Search in related view
          found = $container.find(view.selector + ' ' + selector);
        }
        if (found.length > 1) {
          // Search in main view
          found = $container.find('.' + app.params.viewMainClass + ' ' + selector);
        }
      }
      if (found.length === 1) return found;

      // Try to find not stacked
      if (!notStacked) found = router.findElement(selector, $container, true);
      if (found && found.length === 1) return found;
      if (found && found.length > 1) return (0, _dom2.default)(found[0]);
      return undefined;
    }
  }, {
    key: 'flattenRoutes',
    value: function flattenRoutes() {
      var _this2 = this;

      var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.routes;

      var flattenedRoutes = [];
      routes.forEach(function (route) {
        if ('routes' in route) {
          var mergedPathsRoutes = route.routes.map(function (childRoute) {
            var cRoute = _utils2.default.extend({}, childRoute);
            cRoute.path = (route.path + '/' + cRoute.path).replace('///', '/').replace('//', '/');
            return cRoute;
          });
          flattenedRoutes = flattenedRoutes.concat(route, _this2.flattenRoutes(mergedPathsRoutes));
        } else if ('tabs' in route && route.tabs) {
          var _mergedPathsRoutes = route.tabs.map(function (tabRoute) {
            var tRoute = _utils2.default.extend({}, route, {
              path: (route.path + '/' + tabRoute.path).replace('///', '/').replace('//', '/'),
              parentPath: route.path,
              tab: tabRoute
            });
            delete tRoute.tabs;
            return tRoute;
          });
          flattenedRoutes = flattenedRoutes.concat(_this2.flattenRoutes(_mergedPathsRoutes));
        } else {
          flattenedRoutes.push(route);
        }
      });
      return flattenedRoutes;
    }
    // eslint-disable-next-line

  }, {
    key: 'parseRouteUrl',
    value: function parseRouteUrl(url) {
      if (!url) return {};
      var query = _utils2.default.parseUrlQuery(url);
      var hash = url.split('#')[1];
      var params = {};
      var path = url.split('#')[0].split('?')[0];
      return {
        query: query,
        hash: hash,
        params: params,
        url: url,
        path: path
      };
    }
  }, {
    key: 'findTabRoute',
    value: function findTabRoute(tabEl) {
      var router = this;
      var $tabEl = (0, _dom2.default)(tabEl);
      var parentPath = router.currentRoute.route.parentPath;
      var tabId = $tabEl.attr('id');
      var flattenedRoutes = router.flattenRoutes(router.routes);
      var foundTabRoute = void 0;
      flattenedRoutes.forEach(function (route) {
        if (route.parentPath === parentPath && route.tab && route.tab.id === tabId) {
          foundTabRoute = route;
        }
      });
      return foundTabRoute;
    }
  }, {
    key: 'findRouteByKey',
    value: function findRouteByKey(key, value) {
      var router = this;
      var routes = router.routes;
      var flattenedRoutes = router.flattenRoutes(routes);
      var matchingRoute = void 0;

      flattenedRoutes.forEach(function (route) {
        if (matchingRoute) return;
        if (route[key] === value) {
          matchingRoute = route;
        }
      });
      return matchingRoute;
    }
  }, {
    key: 'findMatchingRoute',
    value: function findMatchingRoute(url) {
      if (!url) return undefined;
      var router = this;
      var routes = router.routes;
      var flattenedRoutes = router.flattenRoutes(routes);

      var _router$parseRouteUrl = router.parseRouteUrl(url),
          path = _router$parseRouteUrl.path,
          query = _router$parseRouteUrl.query,
          hash = _router$parseRouteUrl.hash,
          params = _router$parseRouteUrl.params;

      var matchingRoute = void 0;
      flattenedRoutes.forEach(function (route) {
        if (matchingRoute) return;
        var keys = [];

        var pathsToMatch = [route.path];
        if (route.alias) {
          if (typeof route.alias === 'string') pathsToMatch.push(route.alias);else if (Array.isArray(route.alias)) {
            route.alias.forEach(function (aliasPath) {
              pathsToMatch.push(aliasPath);
            });
          }
        }

        var matched = void 0;
        pathsToMatch.forEach(function (pathToMatch) {
          if (matched) return;
          matched = (0, _pathToRegexp2.default)(pathToMatch, keys).exec(path);
        });

        if (matched) {
          keys.forEach(function (keyObj, index) {
            var paramValue = matched[index + 1];
            params[keyObj.name] = paramValue;
          });

          var parentPath = void 0;
          if (route.parentPath) {
            parentPath = path.split('/').slice(0, route.parentPath.split('/').length - 1).join('/');
          }

          matchingRoute = {
            query: query,
            hash: hash,
            params: params,
            url: url,
            path: path,
            parentPath: parentPath,
            route: route,
            name: route.name
          };
        }
      });
      return matchingRoute;
    }
  }, {
    key: 'removeFromXhrCache',
    value: function removeFromXhrCache(url) {
      var router = this;
      var xhrCache = router.cache.xhr;
      var index = false;
      for (var i = 0; i < xhrCache.length; i += 1) {
        if (xhrCache[i].url === url) index = i;
      }
      if (index !== false) xhrCache.splice(index, 1);
    }
  }, {
    key: 'xhrRequest',
    value: function xhrRequest(requestUrl, options) {
      var router = this;
      var params = router.params;
      var ignoreCache = options.ignoreCache;

      var url = requestUrl;

      var hasQuery = url.indexOf('?') >= 0;
      if (params.passRouteQueryToRequest && options && options.route && options.route.query && Object.keys(options.route.query).length) {
        url += '' + (hasQuery ? '&' : '?') + _utils2.default.serializeObject(options.route.query);
        hasQuery = true;
      }

      if (params.passRouteParamsToRequest && options && options.route && options.route.params && Object.keys(options.route.params).length) {
        url += '' + (hasQuery ? '&' : '?') + _utils2.default.serializeObject(options.route.params);
        hasQuery = true;
      }

      if (url.indexOf('{{') >= 0 && options && options.route && options.route.params && Object.keys(options.route.params).length) {
        Object.keys(options.route.params).forEach(function (paramName) {
          var regExp = new RegExp('{{' + paramName + '}}', 'g');
          url = url.replace(regExp, options.route.params[paramName] || '');
        });
      }
      // should we ignore get params or not
      if (params.xhrCacheIgnoreGetParameters && url.indexOf('?') >= 0) {
        url = url.split('?')[0];
      }
      return _utils2.default.promise(function (resolve, reject) {
        if (params.xhrCache && !ignoreCache && url.indexOf('nocache') < 0 && params.xhrCacheIgnore.indexOf(url) < 0) {
          for (var i = 0; i < router.cache.xhr.length; i += 1) {
            var cachedUrl = router.cache.xhr[i];
            if (cachedUrl.url === url) {
              // Check expiration
              if (_utils2.default.now() - cachedUrl.time < params.xhrCacheDuration) {
                // Load from cache
                resolve(cachedUrl.content);
                return;
              }
            }
          }
        }
        router.xhr = router.app.request({
          url: url,
          method: 'GET',
          beforeSend: function beforeSend(xhr) {
            router.emit('routerAjaxStart', xhr, options);
          },
          complete: function complete(xhr, status) {
            router.emit('routerAjaxComplete', xhr);
            if (status !== 'error' && status !== 'timeout' && xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
              if (params.xhrCache && xhr.responseText !== '') {
                router.removeFromXhrCache(url);
                router.cache.xhr.push({
                  url: url,
                  time: _utils2.default.now(),
                  content: xhr.responseText
                });
              }
              router.emit('routerAjaxSuccess', xhr, options);
              resolve(xhr.responseText);
            } else {
              router.emit('routerAjaxError', xhr, options);
              reject(xhr);
            }
          },
          error: function error(xhr) {
            router.emit('routerAjaxError', xhr, options);
            reject(xhr);
          }
        });
      });
    }
    // Remove theme elements

  }, {
    key: 'removeThemeElements',
    value: function removeThemeElements(el) {
      var router = this;
      var theme = router.app.theme;
      (0, _dom2.default)(el).find('.' + (theme === 'md' ? 'ios' : 'md') + '-only, .if-' + (theme === 'md' ? 'ios' : 'md')).remove();
    }
  }, {
    key: 'templateLoader',
    value: function templateLoader(template, templateUrl, options, resolve, reject) {
      var router = this;
      function compile(t) {
        var compiledHtml = void 0;
        var context = void 0;
        try {
          context = options.context || {};
          if (typeof context === 'function') context = context.call(router);else if (typeof context === 'string') {
            try {
              context = JSON.parse(context);
            } catch (err) {
              reject();
              throw err;
            }
          }
          if (typeof t === 'function') {
            compiledHtml = t(context);
          } else {
            compiledHtml = _template2.default.compile(t)(_utils2.default.extend({}, context || {}, {
              $app: router.app,
              $root: _utils2.default.extend({}, router.app.data, router.app.methods),
              $route: options.route,
              $router: router,
              $theme: {
                ios: router.app.theme === 'ios',
                md: router.app.theme === 'md'
              }
            }));
          }
        } catch (err) {
          reject();
          throw err;
        }
        resolve(compiledHtml, { context: context });
      }
      if (templateUrl) {
        // Load via XHR
        if (router.xhr) {
          router.xhr.abort();
          router.xhr = false;
        }
        router.xhrRequest(templateUrl, options).then(function (templateContent) {
          compile(templateContent);
        }).catch(function () {
          reject();
        });
      } else {
        compile(template);
      }
    }
  }, {
    key: 'modalTemplateLoader',
    value: function modalTemplateLoader(template, templateUrl, options, resolve, reject) {
      var router = this;
      return router.templateLoader(template, templateUrl, options, function (html) {
        resolve(html);
      }, reject);
    }
  }, {
    key: 'tabTemplateLoader',
    value: function tabTemplateLoader(template, templateUrl, options, resolve, reject) {
      var router = this;
      return router.templateLoader(template, templateUrl, options, function (html) {
        resolve(html);
      }, reject);
    }
  }, {
    key: 'pageTemplateLoader',
    value: function pageTemplateLoader(template, templateUrl, options, resolve, reject) {
      var router = this;
      return router.templateLoader(template, templateUrl, options, function (html) {
        var newOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        resolve(router.getPageEl(html), newOptions);
      }, reject);
    }
  }, {
    key: 'componentLoader',
    value: function componentLoader(component, componentUrl) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var resolve = arguments[3];
      var reject = arguments[4];

      var router = this;
      var url = typeof component === 'string' ? component : componentUrl;
      function compile(c) {
        var extendContext = _utils2.default.extend({}, options.context || {}, {
          $: _dom2.default,
          $$: _dom2.default,
          $app: router.app,
          $root: _utils2.default.extend({}, router.app.data, router.app.methods),
          $route: options.route,
          $router: router,
          $dom7: _dom2.default,
          $theme: {
            ios: router.app.theme === 'ios',
            md: router.app.theme === 'md'
          }
        });
        var createdComponent = _component2.default.create(c, extendContext);
        resolve(createdComponent.el);
      }
      if (url) {
        // Load via XHR
        if (router.xhr) {
          router.xhr.abort();
          router.xhr = false;
        }
        router.xhrRequest(url, options).then(function (loadedComponent) {
          compile(_component2.default.parse(loadedComponent));
        }).catch(function (err) {
          reject();
          throw err;
        });
      } else {
        compile(component);
      }
    }
  }, {
    key: 'modalComponentLoader',
    value: function modalComponentLoader(rootEl, component, componentUrl, options, resolve, reject) {
      var router = this;
      router.componentLoader(component, componentUrl, options, function (el) {
        resolve(el);
      }, reject);
    }
  }, {
    key: 'tabComponentLoader',
    value: function tabComponentLoader(tabEl, component, componentUrl, options, resolve, reject) {
      var router = this;
      router.componentLoader(component, componentUrl, options, function (el) {
        resolve(el);
      }, reject);
    }
  }, {
    key: 'pageComponentLoader',
    value: function pageComponentLoader(routerEl, component, componentUrl, options, resolve, reject) {
      var router = this;
      router.componentLoader(component, componentUrl, options, function (el) {
        var newOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        resolve(el, newOptions);
      }, reject);
    }
  }, {
    key: 'getPageData',
    value: function getPageData(pageEl, navbarEl, from, to) {
      var route = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var pageFromEl = arguments[5];

      var router = this;
      var $pageEl = (0, _dom2.default)(pageEl);
      var $navbarEl = (0, _dom2.default)(navbarEl);
      var currentPage = $pageEl[0].f7Page || {};
      var direction = void 0;
      var pageFrom = void 0;
      if (from === 'next' && to === 'current' || from === 'current' && to === 'previous') direction = 'forward';
      if (from === 'current' && to === 'next' || from === 'previous' && to === 'current') direction = 'backward';
      if (currentPage && !currentPage.fromPage) {
        var $pageFromEl = (0, _dom2.default)(pageFromEl);
        if ($pageFromEl.length) {
          pageFrom = $pageFromEl[0].f7Page;
        }
      }
      var page = {
        app: router.app,
        view: router.view,
        router: router,
        $el: $pageEl,
        el: $pageEl[0],
        $pageEl: $pageEl,
        pageEl: $pageEl[0],
        $navbarEl: $navbarEl,
        navbarEl: $navbarEl[0],
        name: $pageEl.attr('data-name'),
        position: from,
        from: from,
        to: to,
        direction: direction,
        route: currentPage.route ? currentPage.route : route,
        pageFrom: currentPage.pageFrom || pageFrom
      };

      if ($navbarEl && $navbarEl[0]) {
        $navbarEl[0].f7Page = page;
      }
      $pageEl[0].f7Page = page;
      return page;
    }
    // Callbacks

  }, {
    key: 'pageCallback',
    value: function pageCallback(callback, pageEl, navbarEl, from, to) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
      var pageFromEl = arguments[6];

      if (!pageEl) return;
      var router = this;
      var $pageEl = (0, _dom2.default)(pageEl);
      if (!$pageEl.length) return;
      var route = options.route;

      var restoreScrollTopOnBack = router.params.restoreScrollTopOnBack;

      var camelName = 'page' + (callback[0].toUpperCase() + callback.slice(1, callback.length));
      var colonName = 'page:' + callback.toLowerCase();

      var page = {};
      if (callback === 'beforeRemove' && $pageEl[0].f7Page) {
        page = _utils2.default.extend($pageEl[0].f7Page, { from: from, to: to, position: from });
      } else {
        page = router.getPageData(pageEl, navbarEl, from, to, route, pageFromEl);
      }

      var _ref = options.route ? options.route.route : {},
          _ref$on = _ref.on,
          on = _ref$on === undefined ? {} : _ref$on,
          _ref$once = _ref.once,
          once = _ref$once === undefined ? {} : _ref$once;

      if (options.on) {
        _utils2.default.extend(on, options.on);
      }
      if (options.once) {
        _utils2.default.extend(once, options.once);
      }

      function attachEvents() {
        if ($pageEl[0].f7RouteEventsAttached) return;
        $pageEl[0].f7RouteEventsAttached = true;
        if (on && Object.keys(on).length > 0) {
          $pageEl[0].f7RouteEventsOn = on;
          Object.keys(on).forEach(function (eventName) {
            on[eventName] = on[eventName].bind(router);
            $pageEl.on(_utils2.default.eventNameToColonCase(eventName), on[eventName]);
          });
        }
        if (once && Object.keys(once).length > 0) {
          $pageEl[0].f7RouteEventsOnce = once;
          Object.keys(once).forEach(function (eventName) {
            once[eventName] = once[eventName].bind(router);
            $pageEl.once(_utils2.default.eventNameToColonCase(eventName), once[eventName]);
          });
        }
      }

      function detachEvents() {
        if (!$pageEl[0].f7RouteEventsAttached) return;
        if ($pageEl[0].f7RouteEventsOn) {
          Object.keys($pageEl[0].f7RouteEventsOn).forEach(function (eventName) {
            $pageEl.off(_utils2.default.eventNameToColonCase(eventName), $pageEl[0].f7RouteEventsOn[eventName]);
          });
        }
        if ($pageEl[0].f7RouteEventsOnce) {
          Object.keys($pageEl[0].f7RouteEventsOnce).forEach(function (eventName) {
            $pageEl.off(_utils2.default.eventNameToColonCase(eventName), $pageEl[0].f7RouteEventsOnce[eventName]);
          });
        }
        $pageEl[0].f7RouteEventsAttached = null;
        $pageEl[0].f7RouteEventsOn = null;
        $pageEl[0].f7RouteEventsOnce = null;
        delete $pageEl[0].f7RouteEventsAttached;
        delete $pageEl[0].f7RouteEventsOn;
        delete $pageEl[0].f7RouteEventsOnce;
      }

      if (callback === 'mounted') {
        attachEvents();
      }
      if (callback === 'init') {
        if (restoreScrollTopOnBack && (from === 'previous' || !from) && to === 'current' && router.scrollHistory[page.route.url]) {
          $pageEl.find('.page-content').scrollTop(router.scrollHistory[page.route.url]);
        }
        attachEvents();
        if ($pageEl[0].f7PageInitialized) {
          $pageEl.trigger('page:reinit', page);
          router.emit('pageReinit', page);
          return;
        }
        $pageEl[0].f7PageInitialized = true;
      }
      if (restoreScrollTopOnBack && callback === 'beforeOut' && from === 'current' && to === 'previous') {
        // Save scroll position
        router.scrollHistory[page.route.url] = $pageEl.find('.page-content').scrollTop();
      }
      if (restoreScrollTopOnBack && callback === 'beforeOut' && from === 'current' && to === 'next') {
        // Delete scroll position
        delete router.scrollHistory[page.route.url];
      }

      $pageEl.trigger(colonName, page);
      router.emit(camelName, page);

      if (callback === 'beforeRemove') {
        detachEvents();
        $pageEl[0].f7Page = null;
      }
    }
  }, {
    key: 'saveHistory',
    value: function saveHistory() {
      var router = this;
      router.view.history = router.history;
      if (router.params.pushState) {
        window.localStorage['f7router-' + router.view.id + '-history'] = JSON.stringify(router.history);
      }
    }
  }, {
    key: 'restoreHistory',
    value: function restoreHistory() {
      var router = this;
      if (router.params.pushState && window.localStorage['f7router-' + router.view.id + '-history']) {
        router.history = JSON.parse(window.localStorage['f7router-' + router.view.id + '-history']);
        router.view.history = router.history;
      }
    }
  }, {
    key: 'clearHistory',
    value: function clearHistory() {
      var router = this;
      router.history = [];
      router.saveHistory();
    }
  }, {
    key: 'init',
    value: function init() {
      var router = this;
      var app = router.app,
          view = router.view;

      // Init Swipeback

      if (true) {
        if (view && router.params.iosSwipeBack && app.theme === 'ios') {
          (0, _swipeBack2.default)(router);
        }
      }

      // Dynamic not separated navbbar
      if (router.dynamicNavbar && !router.separateNavbar) {
        router.$el.addClass('router-dynamic-navbar-inside');
      }

      var initUrl = router.params.url;
      var documentUrl = document.location.href.split(document.location.origin)[1];
      var historyRestored = void 0;
      if (!router.params.pushState) {
        if (!initUrl) {
          initUrl = documentUrl;
        }
        if (document.location.search && initUrl.indexOf('?') < 0) {
          initUrl += document.location.search;
        }
        if (document.location.hash && initUrl.indexOf('#') < 0) {
          initUrl += document.location.hash;
        }
      } else {
        if (router.params.pushStateRoot && documentUrl.indexOf(router.params.pushStateRoot) >= 0) {
          documentUrl = documentUrl.split(router.params.pushStateRoot)[1];
          if (documentUrl === '') documentUrl = '/';
        }
        if (router.params.pushStateSeparator.length > 0 && documentUrl.indexOf(router.params.pushStateSeparator) >= 0) {
          initUrl = documentUrl.split(router.params.pushStateSeparator)[1];
        } else {
          initUrl = documentUrl;
        }
        router.restoreHistory();
        if (router.history.indexOf(initUrl) >= 0) {
          router.history = router.history.slice(0, router.history.indexOf(initUrl) + 1);
        } else if (router.params.url === initUrl) {
          router.history = [initUrl];
        } else if (_history2.default.state && _history2.default.state[view.id] && _history2.default.state[view.id].url === router.history[router.history.length - 1]) {
          initUrl = router.history[router.history.length - 1];
        } else {
          router.history = [documentUrl.split(router.params.pushStateSeparator)[0] || '/', initUrl];
        }
        if (router.history.length > 1) {
          historyRestored = true;
        } else {
          router.history = [];
        }
        router.saveHistory();
      }
      var currentRoute = void 0;
      if (router.history.length > 1) {
        // Will load page
        currentRoute = router.findMatchingRoute(router.history[0]);
        if (!currentRoute) {
          currentRoute = _utils2.default.extend(router.parseRouteUrl(router.history[0]), {
            route: {
              url: router.history[0],
              path: router.history[0].split('?')[0]
            }
          });
        }
      } else {
        // Don't load page
        currentRoute = router.findMatchingRoute(initUrl);
        if (!currentRoute) {
          currentRoute = _utils2.default.extend(router.parseRouteUrl(initUrl), {
            route: {
              url: initUrl,
              path: initUrl.split('?')[0]
            }
          });
        }
      }

      if (router.params.stackPages) {
        router.$el.children('.page').each(function (index, pageEl) {
          var $pageEl = (0, _dom2.default)(pageEl);
          router.initialPages.push($pageEl[0]);
          if (router.separateNavbar && $pageEl.children('.navbar').length > 0) {
            router.initialNavbars.push($pageEl.children('.navbar').find('.navbar-inner')[0]);
          }
        });
      }

      if (router.$el.children('.page:not(.stacked)').length === 0 && initUrl) {
        // No pages presented in DOM, reload new page
        router.navigate(initUrl, {
          reloadCurrent: true,
          pushState: false
        });
      } else {
        // Init current DOM page
        router.currentRoute = currentRoute;
        router.$el.children('.page:not(.stacked)').each(function (index, pageEl) {
          var $pageEl = (0, _dom2.default)(pageEl);
          var $navbarInnerEl = void 0;
          $pageEl.addClass('page-current');
          if (router.separateNavbar) {
            $navbarInnerEl = $pageEl.children('.navbar').children('.navbar-inner');
            if ($navbarInnerEl.length > 0) {
              if (!router.$navbarEl.parents(document).length) {
                router.$el.prepend(router.$navbarEl);
              }
              router.$navbarEl.append($navbarInnerEl);
              $pageEl.children('.navbar').remove();
            } else {
              router.$navbarEl.addClass('navbar-hidden');
            }
          }
          var initOptions = {
            route: router.currentRoute
          };
          if (router.currentRoute && router.currentRoute.route && router.currentRoute.route.options) {
            _utils2.default.extend(initOptions, router.currentRoute.route.options);
          }
          router.currentPageEl = $pageEl[0];
          if (router.dynamicNavbar && $navbarInnerEl.length) {
            router.currentNavbarEl = $navbarInnerEl[0];
          }
          router.removeThemeElements($pageEl);
          if (router.dynamicNavbar && $navbarInnerEl.length) {
            router.removeThemeElements($navbarInnerEl);
          }
          if (initOptions.route.route.tab) {
            router.tabLoad(initOptions.route.route.tab, _utils2.default.extend({}, initOptions));
          }
          router.pageCallback('init', $pageEl, $navbarInnerEl, 'current', undefined, initOptions);
        });
        if (historyRestored) {
          router.navigate(initUrl, {
            pushState: false,
            history: false,
            animate: router.params.pushStateAnimateOnLoad,
            once: {
              pageAfterIn: function pageAfterIn() {
                if (router.history.length > 2) {
                  router.back({ preload: true });
                }
              }
            }
          });
        } else {
          router.history.push(initUrl);
          router.saveHistory();
        }
      }
      router.emit('local::init routerInit', router);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var router = this;

      router.emit('local::destroy routerDestroy', router);

      // Delete props & methods
      Object.keys(router).forEach(function (routerProp) {
        router[routerProp] = null;
        delete router[routerProp];
      });

      router = null;
    }
  }]);

  return Router;
}(_class2.default);

exports.default = Router;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value))

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = ''
  var isEndDelimited = false

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var prefix = escapeString(token.prefix)
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += prefix + '(' + capture + ')?'
        } else {
          route += '(?:' + prefix + '(' + capture + '))?'
        }
      } else {
        route += prefix + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _template = __webpack_require__(8);

var _template2 = _interopRequireDefault(_template);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tempDom = document.createElement('div');

var Framework7Component = function Framework7Component(opts) {
  var extendContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _classCallCheck(this, Framework7Component);

  var context = _utils2.default.extend({}, extendContext);
  var component = _utils2.default.extend(this, context, { $options: opts });
  var options = component.$options;

  // Apply context
  'beforeCreate created beforeMount mounted beforeDestroy destroyed'.split(' ').forEach(function (cycleKey) {
    if (options[cycleKey]) options[cycleKey] = options[cycleKey].bind(component);
  });

  if (options.data) {
    options.data = options.data.bind(component);
    // Data
    _utils2.default.extend(component, options.data());
  }
  if (options.render) options.render = options.render.bind(component);
  if (options.methods) {
    Object.keys(options.methods).forEach(function (methodName) {
      component[methodName] = options.methods[methodName].bind(component);
    });
  }

  // Bind Events
  if (options.on) {
    Object.keys(options.on).forEach(function (eventName) {
      options.on[eventName] = options.on[eventName].bind(component);
    });
  }
  if (options.once) {
    Object.keys(options.once).forEach(function (eventName) {
      options.once[eventName] = options.once[eventName].bind(component);
    });
  }

  if (options.beforeCreate) options.beforeCreate();

  // Watchers
  if (options.watch) {
    Object.keys(options.watch).forEach(function (watchKey) {
      var dataKeyValue = component[watchKey];
      Object.defineProperty(component, watchKey, {
        enumerable: true,
        configurable: true,
        set: function set(newValue) {
          var previousValue = dataKeyValue;
          dataKeyValue = newValue;
          if (previousValue === newValue) return;
          options.watch[watchKey].call(component, newValue, previousValue);
        },
        get: function get() {
          return dataKeyValue;
        }
      });
    });
  }

  // Render template

  function render() {
    var html = '';
    if (options.render) {
      html = options.render();
    } else if (options.template) {
      if (typeof options.template === 'string') {
        try {
          html = _template2.default.compile(options.template)(component);
        } catch (err) {
          throw err;
        }
      } else {
        // Supposed to be function
        html = options.template(component);
      }
    }
    return html;
  }

  var html = render();

  // Make Dom
  if (html && typeof html === 'string') {
    html = html.trim();
    tempDom.innerHTML = html;
  } else if (html) {
    tempDom.innerHTML = '';
    tempDom.appendChild(html);
  }

  // Extend component with $el
  var el = tempDom.children[0];
  var $el = (0, _dom2.default)(el);
  component.$el = $el;
  component.el = el;
  component.el = el;

  // Find Events
  var events = [];
  (0, _dom2.default)(tempDom).find('*').each(function (index, element) {
    var attrs = [];
    for (var i = 0; i < element.attributes.length; i += 1) {
      var attr = element.attributes[i];
      if (attr.name.indexOf('@') === 0) {
        attrs.push({
          name: attr.name,
          value: attr.value
        });
      }
    }
    attrs.forEach(function (attr) {
      element.removeAttribute(attr.name);
      var event = attr.name.replace('@', '');
      var name = event;
      var stop = false;
      var prevent = false;
      var once = false;
      if (event.indexOf('.') >= 0) {
        event.split('.').forEach(function (eventNamePart, eventNameIndex) {
          if (eventNameIndex === 0) name = eventNamePart;else {
            if (eventNamePart === 'stop') stop = true;
            if (eventNamePart === 'prevent') prevent = true;
            if (eventNamePart === 'once') once = true;
          }
        });
      }
      var value = attr.value.toString();
      events.push({
        el: element,
        name: name,
        once: once,
        handler: function handler() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var e = args[0];
          if (stop) e.stopPropagation();
          if (prevent) e.preventDefault();
          var methodName = void 0;
          var method = void 0;
          var customArgs = [];
          if (value.indexOf('(') < 0) {
            customArgs = args;
            methodName = value;
          } else {
            methodName = value.split('(')[0];
            value.split('(')[1].split(')')[0].split(',').forEach(function (argument) {
              var arg = argument.trim();
              // eslint-disable-next-line
              if (!isNaN(arg)) arg = parseFloat(arg);else if (arg === 'true') arg = true;else if (arg === 'false') arg = false;else if (arg === 'null') arg = null;else if (arg === 'undefined') arg = undefined;else if (arg[0] === '"') arg = arg.replace(/"/g, '');else if (arg[0] === '\'') arg = arg.replace(/'/g, '');else if (arg.indexOf('.') > 0) {
                var deepArg = void 0;
                arg.split('.').forEach(function (path) {
                  if (!deepArg) deepArg = component;
                  deepArg = deepArg[path];
                });
                arg = deepArg;
              } else {
                arg = component[arg];
              }
              customArgs.push(arg);
            });
          }
          if (methodName.indexOf('.') >= 0) {
            methodName.split('.').forEach(function (path, pathIndex) {
              if (!method) method = component;
              if (method[path]) method = method[path];else {
                throw new Error('Component doesn\'t have method "' + methodName.split('.').slice(0, pathIndex + 1).join('.') + '"');
              }
            });
          } else {
            if (!component[methodName]) {
              throw new Error('Component doesn\'t have method "' + methodName + '"');
            }
            method = component[methodName];
          }
          method.apply(undefined, _toConsumableArray(customArgs));
        }
      });
    });
  });

  // Set styles scope ID
  var styleEl = void 0;
  if (options.style) {
    styleEl = document.createElement('style');
    styleEl.innerHTML = options.style;
  }
  if (options.styleScopeId) {
    el.setAttribute('data-scope', options.styleScopeId);
  }

  // Attach events
  function attachEvents() {
    if (options.on) {
      Object.keys(options.on).forEach(function (eventName) {
        $el.on(_utils2.default.eventNameToColonCase(eventName), options.on[eventName]);
      });
    }
    if (options.once) {
      Object.keys(options.once).forEach(function (eventName) {
        $el.once(_utils2.default.eventNameToColonCase(eventName), options.once[eventName]);
      });
    }
    events.forEach(function (event) {
      (0, _dom2.default)(event.el)[event.once ? 'once' : 'on'](event.name, event.handler);
    });
  }

  function detachEvents() {
    if (options.on) {
      Object.keys(options.on).forEach(function (eventName) {
        $el.off(_utils2.default.eventNameToColonCase(eventName), options.on[eventName]);
      });
    }
    if (options.once) {
      Object.keys(options.once).forEach(function (eventName) {
        $el.off(_utils2.default.eventNameToColonCase(eventName), options.once[eventName]);
      });
    }
    events.forEach(function (event) {
      (0, _dom2.default)(event.el).off(event.name, event.handler);
    });
  }

  attachEvents();

  // Created callback
  if (options.created) options.created();

  // Mount
  component.$mount = function mount(mountMethod) {
    if (options.beforeMount) options.beforeMount();
    if (styleEl) (0, _dom2.default)('head').append(styleEl);
    if (mountMethod) mountMethod(el);
    if (options.mounted) options.mounted();
  };

  // Destroy
  component.$destroy = function destroy() {
    if (options.beforeDestroy) options.beforeDestroy();
    if (styleEl) (0, _dom2.default)(styleEl).remove();
    detachEvents();
    if (options.destroyed) options.destroyed();
    // Delete component instance
    if (el && el.f7Component) {
      el.f7Component = null;
      delete el.f7Component;
    }
    _utils2.default.deleteProps(component);
    component = null;
  };

  // Store component instance
  for (var i = 0; i < tempDom.children.length; i += 1) {
    tempDom.children[i].f7Component = component;
  }

  return component;
};

var Component = {
  parse: function parse(componentString) {
    var callbackName = 'f7_component_callback_' + new Date().getTime();

    // Template
    var template = void 0;
    if (componentString.indexOf('<template>') >= 0) {
      template = componentString.split('<template>').filter(function (item, index) {
        return index > 0;
      }).join('<template>').split('</template>').filter(function (item, index, arr) {
        return index < arr.length - 1;
      }).join('</template>').replace(/{{#raw}}([ \n]*)<template/g, '{{#raw}}<template').replace(/\/template>([ \n]*){{\/raw}}/g, '/template>{{/raw}}').replace(/([ \n])<template/g, '$1{{#raw}}<template').replace(/\/template>([ \n])/g, '/template>{{/raw}}$1');
    }

    // Styles
    var style = void 0;
    var styleScopeId = _utils2.default.now();
    if (componentString.indexOf('<style>') >= 0) {
      style = componentString.split('<style>')[1].split('</style>')[0];
    } else if (componentString.indexOf('<style scoped>') >= 0) {
      style = componentString.split('<style scoped>')[1].split('</style>')[0];
      style = style.split('\n').map(function (line) {
        if (line.indexOf('{') >= 0) {
          if (line.indexOf('{{this}}') >= 0) {
            return line.replace('{{this}}', '[data-scope="' + styleScopeId + '"]');
          }
          return '[data-scope="' + styleScopeId + '"] ' + line.trim();
        }
        return line;
      }).join('\n');
    }

    var scriptContent = void 0;
    if (componentString.indexOf('<script>') >= 0) {
      var scripts = componentString.split('<script>');
      scriptContent = scripts[scripts.length - 1].split('</script>')[0].trim();
    } else {
      scriptContent = 'return {}';
    }
    scriptContent = 'window.' + callbackName + ' = function () {' + scriptContent + '}';

    // Insert Script El
    var scriptEl = document.createElement('script');
    scriptEl.innerHTML = scriptContent;
    (0, _dom2.default)('head').append(scriptEl);

    var component = window[callbackName]();

    // Remove Script El
    (0, _dom2.default)(scriptEl).remove();

    if (!component.template && !component.render) {
      component.template = template;
    }
    if (style) {
      component.style = style;
      component.styleScopeId = styleScopeId;
    }
    return component;
  },
  create: function create(c) {
    var extendContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new Framework7Component(c, extendContext);
  }
};
exports.default = Component;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _history = __webpack_require__(5);

var _history2 = _interopRequireDefault(_history);

var _support = __webpack_require__(6);

var _support2 = _interopRequireDefault(_support);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SwipeBack(r) {
  var router = r;
  var $el = router.$el,
      $navbarEl = router.$navbarEl,
      app = router.app;

  var isTouched = false;
  var isMoved = false;
  var touchesStart = {};
  var isScrolling = void 0;
  var currentPage = [];
  var previousPage = [];
  var viewContainerWidth = void 0;
  var touchesDiff = void 0;
  var allowViewTouchMove = true;
  var touchStartTime = void 0;
  var currentNavbar = [];
  var previousNavbar = [];
  var currentNavElements = void 0;
  var previousNavElements = void 0;
  var activeNavBackIcon = void 0;
  var activeNavBackIconText = void 0;
  var previousNavBackIcon = void 0;
  // let previousNavBackIconText;
  var dynamicNavbar = void 0;
  var separateNavbar = void 0;
  var pageShadow = void 0;
  var pageOpacity = void 0;
  var navbarWidth = void 0;

  function handleTouchStart(e) {
    if (!allowViewTouchMove || !router.params.iosSwipeBack || isTouched || app.swipeout && app.swipeout.el || !router.allowPageChange) return;
    if ((0, _dom2.default)(e.target).closest('.range-slider, .calendar-months').length > 0) return;
    isMoved = false;
    isTouched = true;
    isScrolling = undefined;
    touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    touchStartTime = _utils2.default.now();
    dynamicNavbar = router.dynamicNavbar;
    separateNavbar = router.separateNavbar;
  }
  function handleTouchMove(e) {
    if (!isTouched) return;
    var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
    if (typeof isScrolling === 'undefined') {
      isScrolling = !!(isScrolling || Math.abs(pageY - touchesStart.y) > Math.abs(pageX - touchesStart.x)) || pageX < touchesStart.x;
    }
    if (isScrolling || e.f7PreventSwipeBack || app.preventSwipeBack) {
      isTouched = false;
      return;
    }
    if (!isMoved) {
      // Calc values during first move fired
      var cancel = false;
      var target = (0, _dom2.default)(e.target);

      var swipeout = target.closest('.swipeout');
      if (swipeout.length > 0) {
        if (!app.rtl && swipeout.find('.swipeout-actions-left').length > 0) cancel = true;
        if (app.rtl && swipeout.find('.swipeout-actions-right').length > 0) cancel = true;
      }

      currentPage = target.closest('.page');
      if (currentPage.hasClass('no-swipeback') || target.closest('.no-swipeback').length > 0) cancel = true;
      previousPage = $el.find('.page-previous:not(.stacked)');

      var notFromBorder = touchesStart.x - $el.offset().left > router.params.iosSwipeBackActiveArea;
      viewContainerWidth = $el.width();
      if (app.rtl) {
        notFromBorder = touchesStart.x < $el.offset().left - $el[0].scrollLeft + (viewContainerWidth - router.params.iosSwipeBackActiveArea);
      } else {
        notFromBorder = touchesStart.x - $el.offset().left > router.params.iosSwipeBackActiveArea;
      }
      if (notFromBorder) cancel = true;
      if (previousPage.length === 0 || currentPage.length === 0) cancel = true;
      if (cancel) {
        isTouched = false;
        return;
      }

      if (router.params.iosSwipeBackAnimateShadow) {
        pageShadow = currentPage.find('.page-shadow-effect');
        if (pageShadow.length === 0) {
          pageShadow = (0, _dom2.default)('<div class="page-shadow-effect"></div>');
          currentPage.append(pageShadow);
        }
      }
      if (router.params.iosSwipeBackAnimateOpacity) {
        pageOpacity = previousPage.find('.page-opacity-effect');
        if (pageOpacity.length === 0) {
          pageOpacity = (0, _dom2.default)('<div class="page-opacity-effect"></div>');
          previousPage.append(pageOpacity);
        }
      }

      if (dynamicNavbar) {
        if (separateNavbar) {
          currentNavbar = $navbarEl.find('.navbar-current:not(.stacked)');
          previousNavbar = $navbarEl.find('.navbar-previous:not(.stacked)');
        } else {
          currentNavbar = currentPage.children('.navbar').children('.navbar-inner');
          previousNavbar = previousPage.children('.navbar').children('.navbar-inner');
        }
        navbarWidth = $navbarEl[0].offsetWidth;
        currentNavElements = currentNavbar.children('.left, .title, .right, .subnavbar, .fading');
        previousNavElements = previousNavbar.children('.left, .title, .right, .subnavbar, .fading');
        if (router.params.iosAnimateNavbarBackIcon) {
          if (currentNavbar.hasClass('sliding')) {
            activeNavBackIcon = currentNavbar.children('.left').find('.back .icon');
            activeNavBackIconText = currentNavbar.children('.left').find('.back span').eq(0);
          } else {
            activeNavBackIcon = currentNavbar.children('.left.sliding').find('.back .icon');
            activeNavBackIconText = currentNavbar.children('.left.sliding').find('.back span').eq(0);
          }
          if (previousNavbar.hasClass('sliding')) {
            previousNavBackIcon = previousNavbar.children('.left').find('.back .icon');
            // previousNavBackIconText = previousNavbar.children('left').find('.back span').eq(0);
          } else {
            previousNavBackIcon = previousNavbar.children('.left.sliding').find('.back .icon');
            // previousNavBackIconText = previousNavbar.children('.left.sliding').find('.back span').eq(0);
          }
        }
      }

      // Close/Hide Any Picker
      if ((0, _dom2.default)('.sheet.modal-in').length > 0 && app.sheet) {
        app.sheet.close((0, _dom2.default)('.sheet.modal-in'));
      }
    }
    e.f7PreventPanelSwipe = true;
    isMoved = true;
    app.preventSwipePanelBySwipeBack = true;
    e.preventDefault();

    // RTL inverter
    var inverter = app.rtl ? -1 : 1;

    // Touches diff
    touchesDiff = (pageX - touchesStart.x - router.params.iosSwipeBackThreshold) * inverter;
    if (touchesDiff < 0) touchesDiff = 0;
    var percentage = touchesDiff / viewContainerWidth;

    // Swipe Back Callback
    var callbackData = {
      percentage: percentage,
      currentPageEl: currentPage[0],
      previousPageEl: previousPage[0],
      currentNavbarEl: currentNavbar[0],
      previousNavbarEl: previousNavbar[0]
    };
    $el.trigger('swipeback:move', callbackData);
    router.emit('swipebackMove', callbackData);

    // Transform pages
    var currentPageTranslate = touchesDiff * inverter;
    var previousPageTranslate = (touchesDiff / 5 - viewContainerWidth / 5) * inverter;
    if (_device2.default.pixelRatio === 1) {
      currentPageTranslate = Math.round(currentPageTranslate);
      previousPageTranslate = Math.round(previousPageTranslate);
    }

    currentPage.transform('translate3d(' + currentPageTranslate + 'px,0,0)');
    if (router.params.iosSwipeBackAnimateShadow) pageShadow[0].style.opacity = 1 - 1 * percentage;

    previousPage.transform('translate3d(' + previousPageTranslate + 'px,0,0)');
    if (router.params.iosSwipeBackAnimateOpacity) pageOpacity[0].style.opacity = 1 - 1 * percentage;

    // Dynamic Navbars Animation
    if (dynamicNavbar) {
      currentNavElements.each(function (index, navEl) {
        var $navEl = (0, _dom2.default)(navEl);
        if (!$navEl.is('.subnavbar')) $navEl[0].style.opacity = 1 - Math.pow(percentage, 0.33);
        if ($navEl[0].className.indexOf('sliding') >= 0 || currentNavbar.hasClass('sliding')) {
          var activeNavTranslate = percentage * $navEl[0].f7NavbarRightOffset;
          if (_device2.default.pixelRatio === 1) activeNavTranslate = Math.round(activeNavTranslate);
          $navEl.transform('translate3d(' + activeNavTranslate + 'px,0,0)');
          if (router.params.iosAnimateNavbarBackIcon) {
            if ($navEl[0].className.indexOf('left') >= 0 && activeNavBackIcon.length > 0) {
              var iconTranslate = -activeNavTranslate;
              if (!separateNavbar) {
                iconTranslate -= navbarWidth * percentage;
              }
              activeNavBackIcon.transform('translate3d(' + iconTranslate + 'px,0,0)');
            }
          }
        }
      });
      previousNavElements.each(function (index, navEl) {
        var $navEl = (0, _dom2.default)(navEl);
        if (!$navEl.is('.subnavbar')) $navEl[0].style.opacity = Math.pow(percentage, 3);
        if ($navEl[0].className.indexOf('sliding') >= 0 || previousNavbar.hasClass('sliding')) {
          var previousNavTranslate = $navEl[0].f7NavbarLeftOffset * (1 - percentage);
          if ($navEl[0].className.indexOf('title') >= 0 && activeNavBackIcon && activeNavBackIcon.length && activeNavBackIconText.length) {
            previousNavTranslate = ($navEl[0].f7NavbarLeftOffset + activeNavBackIconText[0].offsetLeft) * (1 - percentage);
          } else {
            previousNavTranslate = $navEl[0].f7NavbarLeftOffset * (1 - percentage);
          }
          if (_device2.default.pixelRatio === 1) previousNavTranslate = Math.round(previousNavTranslate);
          $navEl.transform('translate3d(' + previousNavTranslate + 'px,0,0)');
          if (router.params.iosAnimateNavbarBackIcon) {
            if ($navEl[0].className.indexOf('left') >= 0 && previousNavBackIcon.length > 0) {
              var iconTranslate = -previousNavTranslate;
              if (!separateNavbar) {
                iconTranslate += navbarWidth / 5 * (1 - percentage);
              }
              previousNavBackIcon.transform('translate3d(' + iconTranslate + 'px,0,0)');
            }
          }
        }
      });
    }
  }
  function handleTouchEnd() {
    app.preventSwipePanelBySwipeBack = false;
    if (!isTouched || !isMoved) {
      isTouched = false;
      isMoved = false;
      return;
    }
    isTouched = false;
    isMoved = false;
    if (touchesDiff === 0) {
      (0, _dom2.default)([currentPage[0], previousPage[0]]).transform('');
      if (dynamicNavbar) {
        currentNavElements.transform('').css({ opacity: '' });
        previousNavElements.transform('').css({ opacity: '' });
        if (activeNavBackIcon && activeNavBackIcon.length > 0) activeNavBackIcon.transform('');
        if (previousNavBackIcon && activeNavBackIcon.length > 0) previousNavBackIcon.transform('');
      }
      return;
    }
    var timeDiff = _utils2.default.now() - touchStartTime;
    var pageChanged = false;
    // Swipe back to previous page
    if (timeDiff < 300 && touchesDiff > 10 || timeDiff >= 300 && touchesDiff > viewContainerWidth / 2) {
      currentPage.removeClass('page-current').addClass('page-next');
      previousPage.removeClass('page-previous').addClass('page-current');
      if (pageShadow) pageShadow[0].style.opacity = '';
      if (pageOpacity) pageOpacity[0].style.opacity = '';
      if (dynamicNavbar) {
        currentNavbar.removeClass('navbar-current').addClass('navbar-next');
        previousNavbar.removeClass('navbar-previous').addClass('navbar-current');
      }
      pageChanged = true;
    }
    // Reset custom styles
    // Add transitioning class for transition-duration
    (0, _dom2.default)([currentPage[0], previousPage[0]]).addClass('page-transitioning').transform('');
    if (dynamicNavbar) {
      currentNavElements.css({ opacity: '' }).each(function (navElIndex, navEl) {
        var translate = pageChanged ? navEl.f7NavbarRightOffset : 0;
        var sliding = (0, _dom2.default)(navEl);
        var iconTranslate = pageChanged ? -translate : 0;
        if (!separateNavbar && pageChanged) iconTranslate -= navbarWidth;
        sliding.transform('translate3d(' + translate + 'px,0,0)');
        if (router.params.iosAnimateNavbarBackIcon) {
          if (sliding.hasClass('left') && activeNavBackIcon.length > 0) {
            activeNavBackIcon.addClass('navbar-transitioning').transform('translate3d(' + iconTranslate + 'px,0,0)');
          }
        }
      }).addClass('navbar-transitioning');

      previousNavElements.transform('').css({ opacity: '' }).each(function (navElIndex, navEl) {
        var translate = pageChanged ? 0 : navEl.f7NavbarLeftOffset;
        var sliding = (0, _dom2.default)(navEl);
        var iconTranslate = pageChanged ? 0 : -translate;
        if (!separateNavbar && !pageChanged) iconTranslate += navbarWidth / 5;
        sliding.transform('translate3d(' + translate + 'px,0,0)');
        if (router.params.iosAnimateNavbarBackIcon) {
          if (sliding.hasClass('left') && previousNavBackIcon.length > 0) {
            previousNavBackIcon.addClass('navbar-transitioning').transform('translate3d(' + iconTranslate + 'px,0,0)');
          }
        }
      }).addClass('navbar-transitioning');
    }
    allowViewTouchMove = false;
    router.allowPageChange = false;

    // Swipe Back Callback
    var callbackData = {
      currentPage: currentPage[0],
      previousPage: previousPage[0],
      currentNavbar: currentNavbar[0],
      previousNavbar: previousNavbar[0]
    };

    if (pageChanged) {
      // Update Route
      router.currentRoute = previousPage[0].f7Page.route;
      router.currentPage = previousPage[0];

      // Page before animation callback
      router.pageCallback('beforeOut', currentPage, currentNavbar, 'current', 'next', { route: currentPage[0].f7Page.route });
      router.pageCallback('beforeIn', previousPage, previousNavbar, 'previous', 'current', { route: previousPage[0].f7Page.route });

      $el.trigger('swipeback:beforechange', callbackData);
      router.emit('swipebackBeforeChange', callbackData);
    } else {
      $el.trigger('swipeback:beforereset', callbackData);
      router.emit('swipebackBeforeReset', callbackData);
    }

    currentPage.transitionEnd(function () {
      (0, _dom2.default)([currentPage[0], previousPage[0]]).removeClass('page-transitioning');
      if (dynamicNavbar) {
        currentNavElements.removeClass('navbar-transitioning').css({ opacity: '' }).transform('');
        previousNavElements.removeClass('navbar-transitioning').css({ opacity: '' }).transform('');
        if (activeNavBackIcon && activeNavBackIcon.length > 0) activeNavBackIcon.removeClass('navbar-transitioning');
        if (previousNavBackIcon && previousNavBackIcon.length > 0) previousNavBackIcon.removeClass('navbar-transitioning');
      }
      allowViewTouchMove = true;
      router.allowPageChange = true;
      if (pageChanged) {
        // Update History
        if (router.history.length === 1) {
          router.history.unshift(router.url);
        }
        router.history.pop();
        router.saveHistory();

        // Update push state
        if (router.params.pushState) {
          _history2.default.back();
        }

        // Page after animation callback
        router.pageCallback('afterOut', currentPage, currentNavbar, 'current', 'next', { route: currentPage[0].f7Page.route });
        router.pageCallback('afterIn', previousPage, previousNavbar, 'previous', 'current', { route: previousPage[0].f7Page.route });

        // Remove Old Page
        if (router.params.stackPages && router.initialPages.indexOf(currentPage[0]) >= 0) {
          currentPage.addClass('stacked');
          if (separateNavbar) {
            currentNavbar.addClass('stacked');
          }
        } else {
          router.pageCallback('beforeRemove', currentPage, currentNavbar, 'next');
          router.removePage(currentPage);
          if (separateNavbar) {
            router.removeNavbar(currentNavbar);
          }
        }

        $el.trigger('swipeback:afterchange', callbackData);
        router.emit('swipebackAfterChange', callbackData);

        router.emit('routeChanged', router.currentRoute, router.previousRoute, router);

        if (router.params.preloadPreviousPage) {
          router.back(router.history[router.history.length - 2], { preload: true });
        }
      } else {
        $el.trigger('swipeback:afterreset', callbackData);
        router.emit('swipebackAfterReset', callbackData);
      }
      if (pageShadow && pageShadow.length > 0) pageShadow.remove();
      if (pageOpacity && pageOpacity.length > 0) pageOpacity.remove();
    });
  }

  function attachEvents() {
    var passiveListener = app.touchEvents.start === 'touchstart' && _support2.default.passiveListener ? { passive: true, capture: false } : false;
    $el.on(app.touchEvents.start, handleTouchStart, passiveListener);
    app.on('touchmove:active', handleTouchMove);
    app.on('touchend:passive', handleTouchEnd);
  }
  function detachEvents() {
    var passiveListener = app.touchEvents.start === 'touchstart' && _support2.default.passiveListener ? { passive: true, capture: false } : false;
    $el.off(app.touchEvents.start, handleTouchStart, passiveListener);
    app.off('touchmove:active', handleTouchMove);
    app.off('touchend:passive', handleTouchEnd);
  }

  attachEvents();

  router.on('routerDestroy', detachEvents);
}

exports.default = SwipeBack;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigate = exports.load = exports.forward = exports.refreshPage = undefined;

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _history = __webpack_require__(5);

var _history2 = _interopRequireDefault(_history);

var _redirect = __webpack_require__(16);

var _redirect2 = _interopRequireDefault(_redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function refreshPage() {
  var router = this;
  return router.navigate(router.currentRoute.url, {
    ignoreCache: true,
    reloadCurrent: true
  });
}

function forward(el) {
  var forwardOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var router = this;
  var app = router.app;
  var view = router.view;

  var options = _utils2.default.extend({
    animate: router.params.animate,
    pushState: true,
    history: true,
    reloadCurrent: router.params.reloadPages,
    reloadPrevious: false,
    reloadAll: false,
    on: {}
  }, forwardOptions);

  var dynamicNavbar = router.dynamicNavbar;
  var separateNavbar = router.separateNavbar;

  var $viewEl = router.$el;
  var $newPage = (0, _dom2.default)(el);
  var reload = options.reloadPrevious || options.reloadCurrent || options.reloadAll;
  var $oldPage = void 0;

  var $navbarEl = void 0;
  var $newNavbarInner = void 0;
  var $oldNavbarInner = void 0;

  if ($newPage.length) {
    // Remove theme elements
    router.removeThemeElements($newPage);
  }

  if (dynamicNavbar) {
    $newNavbarInner = $newPage.children('.navbar').children('.navbar-inner');
    if (separateNavbar) {
      $navbarEl = router.$navbarEl;
      if ($newNavbarInner.length > 0) {
        $newPage.children('.navbar').remove();
      }
      if ($newNavbarInner.length === 0 && $newPage[0].f7Page) {
        // Try from pageData
        $newNavbarInner = $newPage[0].f7Page.$navbarEl;
      }
    }
  }

  router.allowPageChange = false;
  if ($newPage.length === 0) {
    router.allowPageChange = true;
    return router;
  }

  // Pages In View
  var $pagesInView = $viewEl.children('.page:not(.stacked)').filter(function (index, pageInView) {
    return pageInView !== $newPage[0];
  });

  // Navbars In View
  var $navbarsInView = void 0;
  if (separateNavbar) {
    $navbarsInView = $navbarEl.children('.navbar-inner:not(.stacked)').filter(function (index, navbarInView) {
      return navbarInView !== $newNavbarInner[0];
    });
  }

  // Exit when reload previous and only 1 page in view so nothing ro reload
  if (options.reloadPrevious && $pagesInView.length < 2) {
    router.allowPageChange = true;
    return router;
  }

  // New Page
  var newPagePosition = 'next';
  if (options.reloadCurrent || options.reloadAll) {
    newPagePosition = 'current';
  } else if (options.reloadPrevious) {
    newPagePosition = 'previous';
  }
  $newPage.addClass('page-' + newPagePosition).removeClass('stacked');

  if (dynamicNavbar && $newNavbarInner.length) {
    $newNavbarInner.addClass('navbar-' + newPagePosition).removeClass('stacked');
  }

  // Find Old Page
  if (options.reloadCurrent) {
    $oldPage = $pagesInView.eq($pagesInView.length - 1);
    if (separateNavbar) {
      // $oldNavbarInner = $navbarsInView.eq($pagesInView.length - 1);
      $oldNavbarInner = (0, _dom2.default)(app.navbar.getElByPage($oldPage));
    }
  } else if (options.reloadPrevious) {
    $oldPage = $pagesInView.eq($pagesInView.length - 2);
    if (separateNavbar) {
      // $oldNavbarInner = $navbarsInView.eq($pagesInView.length - 2);
      $oldNavbarInner = (0, _dom2.default)(app.navbar.getElByPage($oldPage));
    }
  } else if (options.reloadAll) {
    $oldPage = $pagesInView.filter(function (index, pageEl) {
      return pageEl !== $newPage[0];
    });
    if (separateNavbar) {
      $oldNavbarInner = $navbarsInView.filter(function (index, navbarEl) {
        return navbarEl !== $newNavbarInner[0];
      });
    }
  } else {
    if ($pagesInView.length > 1) {
      var i = 0;
      for (i = 0; i < $pagesInView.length - 1; i += 1) {
        var oldNavbarInnerEl = app.navbar.getElByPage($pagesInView.eq(i));
        if (router.params.stackPages) {
          $pagesInView.eq(i).addClass('stacked');
          if (separateNavbar) {
            // $navbarsInView.eq(i).addClass('stacked');
            (0, _dom2.default)(oldNavbarInnerEl).addClass('stacked');
          }
        } else {
          // Page remove event
          router.pageCallback('beforeRemove', $pagesInView[i], $navbarsInView && $navbarsInView[i], 'previous', undefined, options);
          router.removePage($pagesInView[i]);
          if (separateNavbar && oldNavbarInnerEl) {
            router.removeNavbar(oldNavbarInnerEl);
          }
        }
      }
    }
    $oldPage = $viewEl.children('.page:not(.stacked)').filter(function (index, page) {
      return page !== $newPage[0];
    });
    if (separateNavbar) {
      $oldNavbarInner = $navbarEl.children('.navbar-inner:not(.stacked)').filter(function (index, navbarInner) {
        return navbarInner !== $newNavbarInner[0];
      });
    }
  }
  if (dynamicNavbar && !separateNavbar) {
    $oldNavbarInner = $oldPage.children('.navbar').children('.navbar-inner');
  }

  // Push State
  if (router.params.pushState && options.pushState && !options.reloadPrevious) {
    var pushStateRoot = router.params.pushStateRoot || '';
    _history2.default[options.reloadCurrent || options.reloadAll ? 'replace' : 'push'](view.id, {
      url: options.route.url
    }, pushStateRoot + router.params.pushStateSeparator + options.route.url);
  }

  // Current Page & Navbar
  router.currentPageEl = $newPage[0];
  if (dynamicNavbar && $newNavbarInner.length) {
    router.currentNavbarEl = $newNavbarInner[0];
  } else {
    delete router.currentNavbarEl;
  }

  // Current Route
  router.currentRoute = options.route;

  // Update router history
  var url = options.route.url;
  if (options.history) {
    if (options.reloadCurrent && router.history.length > 0) {
      router.history[router.history.length - (options.reloadPrevious ? 2 : 1)] = url;
    } else if (options.reloadAll) {
      router.history = [url];
    } else {
      router.history.push(url);
    }
  }
  router.saveHistory();

  // Insert new page and navbar
  var newPageInDom = $newPage.parents(document).length > 0;
  var f7Component = $newPage[0].f7Component;
  if (options.reloadPrevious) {
    if (f7Component && !newPageInDom) {
      f7Component.$mount(function (componentEl) {
        (0, _dom2.default)(componentEl).insertBefore($oldPage);
      });
    } else {
      $newPage.insertBefore($oldPage);
    }
    if (separateNavbar && $newNavbarInner.length) {
      if ($oldNavbarInner.length) {
        $newNavbarInner.insertBefore($oldNavbarInner);
      } else {
        if (!router.$navbarEl.parents(document).length) {
          router.$el.prepend(router.$navbarEl);
        }
        $navbarEl.append($newNavbarInner);
      }
    }
  } else {
    if ($oldPage.next('.page')[0] !== $newPage[0]) {
      if (f7Component && !newPageInDom) {
        f7Component.$mount(function (componentEl) {
          $viewEl.append(componentEl);
        });
      } else {
        $viewEl.append($newPage[0]);
      }
    }
    if (separateNavbar && $newNavbarInner.length) {
      if (!router.$navbarEl.parents(document).length) {
        router.$el.prepend(router.$navbarEl);
      }
      $navbarEl.append($newNavbarInner[0]);
    }
  }
  if (!newPageInDom) {
    router.pageCallback('mounted', $newPage, $newNavbarInner, newPagePosition, reload ? newPagePosition : 'current', options, $oldPage);
  }

  // Remove old page
  if (options.reloadCurrent && $oldPage.length > 0) {
    if (router.params.stackPages && router.initialPages.indexOf($oldPage[0]) >= 0) {
      $oldPage.addClass('stacked');
      if (separateNavbar) {
        $oldNavbarInner.addClass('stacked');
      }
    } else {
      // Page remove event
      router.pageCallback('beforeRemove', $oldPage, $oldNavbarInner, 'previous', undefined, options);
      router.removePage($oldPage);
      if (separateNavbar && $oldNavbarInner && $oldNavbarInner.length) {
        router.removeNavbar($oldNavbarInner);
      }
    }
  } else if (options.reloadAll) {
    $oldPage.each(function (index, pageEl) {
      var $oldPageEl = (0, _dom2.default)(pageEl);
      var $oldNavbarInnerEl = (0, _dom2.default)(app.navbar.getElByPage($oldPageEl));
      if (router.params.stackPages && router.initialPages.indexOf($oldPageEl[0]) >= 0) {
        $oldPageEl.addClass('stacked');
        if (separateNavbar) {
          $oldNavbarInnerEl.addClass('stacked');
        }
      } else {
        // Page remove event
        router.pageCallback('beforeRemove', $oldPageEl, $oldNavbarInner && $oldNavbarInner.eq(index), 'previous', undefined, options);
        router.removePage($oldPageEl);
        if (separateNavbar && $oldNavbarInnerEl.length) {
          router.removeNavbar($oldNavbarInnerEl);
        }
      }
    });
  }

  // Load Tab
  if (options.route.route.tab) {
    router.tabLoad(options.route.route.tab, _utils2.default.extend({}, options, {
      history: false,
      pushState: false
    }));
  }

  // Page init and before init events
  router.pageCallback('init', $newPage, $newNavbarInner, newPagePosition, reload ? newPagePosition : 'current', options, $oldPage);

  if (options.reloadCurrent || options.reloadAll) {
    router.allowPageChange = true;
    router.pageCallback('beforeIn', $newPage, $newNavbarInner, newPagePosition, 'current', options);
    router.pageCallback('afterIn', $newPage, $newNavbarInner, newPagePosition, 'current', options);
    return router;
  }

  // Before animation event
  router.pageCallback('beforeIn', $newPage, $newNavbarInner, 'next', 'current', options);
  router.pageCallback('beforeOut', $oldPage, $oldNavbarInner, 'current', 'previous', options);

  // Animation
  function afterAnimation() {
    var pageClasses = 'page-previous page-current page-next';
    var navbarClasses = 'navbar-previous navbar-current navbar-next';
    $newPage.removeClass(pageClasses).addClass('page-current').removeAttr('aria-hidden');
    $oldPage.removeClass(pageClasses).addClass('page-previous').attr('aria-hidden', 'true');
    if (dynamicNavbar) {
      $newNavbarInner.removeClass(navbarClasses).addClass('navbar-current').removeAttr('aria-hidden');
      $oldNavbarInner.removeClass(navbarClasses).addClass('navbar-previous').attr('aria-hidden', 'true');
    }
    // After animation event
    router.allowPageChange = true;
    router.pageCallback('afterIn', $newPage, $newNavbarInner, 'next', 'current', options);
    router.pageCallback('afterOut', $oldPage, $oldNavbarInner, 'current', 'previous', options);

    var keepOldPage = app.theme === 'ios' ? router.params.preloadPreviousPage || router.params.iosSwipeBack : router.params.preloadPreviousPage;
    if (!keepOldPage) {
      if ($newPage.hasClass('smart-select-page') || $newPage.hasClass('photo-browser-page') || $newPage.hasClass('autocomplete-page')) {
        keepOldPage = true;
      }
    }
    if (!keepOldPage) {
      if (router.params.stackPages) {
        $oldPage.addClass('stacked');
        if (separateNavbar) {
          $oldNavbarInner.addClass('stacked');
        }
      } else if (!($newPage.attr('data-name') && $newPage.attr('data-name') === 'smart-select-page')) {
        // Remove event
        router.pageCallback('beforeRemove', $oldPage, $oldNavbarInner, 'previous', undefined, options);
        router.removePage($oldPage);
        if (separateNavbar && $oldNavbarInner.length) {
          router.removeNavbar($oldNavbarInner);
        }
      }
    }
    router.emit('routeChanged', router.currentRoute, router.previousRoute, router);

    if (router.params.pushState) {
      _history2.default.clearRouterQueue();
    }
  }
  function setPositionClasses() {
    var pageClasses = 'page-previous page-current page-next';
    var navbarClasses = 'navbar-previous navbar-current navbar-next';
    $oldPage.removeClass(pageClasses).addClass('page-current').removeAttr('aria-hidden');
    $newPage.removeClass(pageClasses).addClass('page-next').removeAttr('aria-hidden');
    if (dynamicNavbar) {
      $oldNavbarInner.removeClass(navbarClasses).addClass('navbar-current').removeAttr('aria-hidden');
      $newNavbarInner.removeClass(navbarClasses).addClass('navbar-next').removeAttr('aria-hidden');
    }
  }
  if (options.animate) {
    var delay = router.app.theme === 'md' ? router.params.materialPageLoadDelay : router.params.iosPageLoadDelay;
    if (delay) {
      setTimeout(function () {
        setPositionClasses();
        router.animate($oldPage, $newPage, $oldNavbarInner, $newNavbarInner, 'forward', function () {
          afterAnimation();
        });
      }, delay);
    } else {
      setPositionClasses();
      router.animate($oldPage, $newPage, $oldNavbarInner, $newNavbarInner, 'forward', function () {
        afterAnimation();
      });
    }
  } else {
    afterAnimation();
  }
  return router;
}
function load() {
  var loadParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var loadOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ignorePageChange = arguments[2];

  var router = this;
  if (!router.allowPageChange && !ignorePageChange) return router;
  var params = loadParams;
  var options = loadOptions;
  var url = params.url,
      content = params.content,
      el = params.el,
      pageName = params.pageName,
      template = params.template,
      templateUrl = params.templateUrl,
      component = params.component,
      componentUrl = params.componentUrl;


  if (!options.reloadCurrent && options.route && options.route.route && options.route.route.parentPath && router.currentRoute.route && router.currentRoute.route.parentPath === options.route.route.parentPath) {
    // Do something nested
    if (options.route.url === router.url) {
      return false;
    }
    // Check for same params
    var sameParams = Object.keys(options.route.params).length === Object.keys(router.currentRoute.params).length;
    if (sameParams) {
      // Check for equal params name
      Object.keys(options.route.params).forEach(function (paramName) {
        if (!(paramName in router.currentRoute.params) || router.currentRoute.params[paramName] !== options.route.params[paramName]) {
          sameParams = false;
        }
      });
    }
    if (sameParams) {
      if (options.route.route.tab) {
        return router.tabLoad(options.route.route.tab, options);
      }
      return false;
    }
  }

  if (options.route && options.route.url && router.url === options.route.url && !(options.reloadCurrent || options.reloadPrevious) && !router.params.allowDuplicateUrls) {
    return false;
  }

  if (!options.route && url) {
    options.route = router.parseRouteUrl(url);
    _utils2.default.extend(options.route, { route: { url: url, path: url } });
  }

  // Component Callbacks
  function resolve(pageEl, newOptions) {
    return router.forward(pageEl, _utils2.default.extend(options, newOptions));
  }
  function reject() {
    router.allowPageChange = true;
    return router;
  }

  if (url || templateUrl || componentUrl) {
    router.allowPageChange = false;
  }

  // Proceed
  if (content) {
    router.forward(router.getPageEl(content), options);
  } else if (template || templateUrl) {
    // Parse template and send page element
    try {
      router.pageTemplateLoader(template, templateUrl, options, resolve, reject);
    } catch (err) {
      router.allowPageChange = true;
      throw err;
    }
  } else if (el) {
    // Load page from specified HTMLElement or by page name in pages container
    router.forward(router.getPageEl(el), options);
  } else if (pageName) {
    // Load page by page name in pages container
    router.forward(router.$el.children('.page[data-name="' + pageName + '"]').eq(0), options);
  } else if (component || componentUrl) {
    // Load from component (F7/Vue/React/...)
    try {
      router.pageComponentLoader(router.el, component, componentUrl, options, resolve, reject);
    } catch (err) {
      router.allowPageChange = true;
      throw err;
    }
  } else if (url) {
    // Load using XHR
    if (router.xhr) {
      router.xhr.abort();
      router.xhr = false;
    }
    router.xhrRequest(url, options).then(function (pageContent) {
      router.forward(router.getPageEl(pageContent), options);
    }).catch(function () {
      router.allowPageChange = true;
    });
  }
  return router;
}
function navigate(navigateParams) {
  var navigateOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var router = this;
  var url = void 0;
  var createRoute = void 0;
  if (typeof navigateParams === 'string') {
    url = navigateParams;
  } else {
    url = navigateParams.url;
    createRoute = navigateParams.route;
  }
  var app = router.app;
  if (!router.view) {
    if (app.views.main) {
      app.views.main.router.navigate(url, navigateOptions);
    }
    return router;
  }
  if (url === '#' || url === '') {
    return router;
  }

  var navigateUrl = url.replace('./', '');
  if (navigateUrl[0] !== '/' && navigateUrl.indexOf('#') !== 0) {
    var currentPath = router.currentRoute.parentPath || router.currentRoute.path;
    navigateUrl = ((currentPath ? currentPath + '/' : '/') + navigateUrl).replace('///', '/').replace('//', '/');
  }
  var route = void 0;
  if (createRoute) {
    route = _utils2.default.extend(router.parseRouteUrl(navigateUrl), {
      route: _utils2.default.extend({}, createRoute)
    });
  } else {
    route = router.findMatchingRoute(navigateUrl);
  }

  if (!route) {
    return router;
  }

  if (route.route.redirect) {
    return _redirect2.default.call(router, 'navigate', route, navigateOptions);
  }

  var options = {};
  if (route.route.options) {
    _utils2.default.extend(options, route.route.options, navigateOptions, { route: route });
  } else {
    _utils2.default.extend(options, navigateOptions, { route: route });
  }
  'popup popover sheet loginScreen actions customModal'.split(' ').forEach(function (modalLoadProp) {
    if (route.route[modalLoadProp]) {
      router.modalLoad(modalLoadProp, route, options);
    }
  });
  'url content component pageName el componentUrl template templateUrl'.split(' ').forEach(function (pageLoadProp) {
    if (route.route[pageLoadProp]) {
      router.load(_defineProperty({}, pageLoadProp, route.route[pageLoadProp]), options);
    }
  });
  // Async
  function asyncResolve(resolveParams, resolveOptions) {
    router.allowPageChange = false;
    var resolvedAsModal = false;
    'popup popover sheet loginScreen actions customModal'.split(' ').forEach(function (modalLoadProp) {
      if (resolveParams[modalLoadProp]) {
        resolvedAsModal = true;
        var modalRoute = _utils2.default.extend({}, route, { route: resolveParams });
        router.allowPageChange = true;
        router.modalLoad(modalLoadProp, modalRoute, _utils2.default.extend(options, resolveOptions));
      }
    });
    if (resolvedAsModal) return;
    router.load(resolveParams, _utils2.default.extend(options, resolveOptions), true);
  }
  function asyncReject() {
    router.allowPageChange = true;
  }
  if (route.route.async) {
    router.allowPageChange = false;

    route.route.async.call(router, route, router.currentRoute, asyncResolve, asyncReject);
  }
  // Retur Router
  return router;
}
exports.refreshPage = refreshPage;
exports.forward = forward;
exports.load = load;
exports.navigate = navigate;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabRemove = exports.tabLoad = undefined;

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _history = __webpack_require__(5);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function tabLoad(tabRoute) {
  var loadOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var router = this;
  var options = _utils2.default.extend({
    animate: router.params.animate,
    pushState: true,
    history: true,
    on: {}
  }, loadOptions);

  if (options.route) {
    // Set Route
    if (options.route !== router.currentRoute) {
      router.currentRoute = options.route;
    }

    // Update Browser History
    if (router.params.pushState && options.pushState && !options.reloadPrevious) {
      _history2.default.replace(router.view.id, {
        url: options.route.url
      }, (router.params.pushStateRoot || '') + router.params.pushStateSeparator + options.route.url);
    }

    // Update Router History
    if (options.history) {
      router.history[router.history.length - 1] = options.route.url;
      router.saveHistory();
    }
  }

  // Show Tab
  var $currentPageEl = (0, _dom2.default)(router.currentPageEl);
  var tabEl = void 0;
  if ($currentPageEl.length && $currentPageEl.find('#' + tabRoute.id).length) {
    tabEl = $currentPageEl.find('#' + tabRoute.id).eq(0);
  } else if (router.view.selector) {
    tabEl = router.view.selector + ' #' + tabRoute.id;
  } else {
    tabEl = '#' + tabRoute.id;
  }
  var tabShowResult = router.app.tab.show({
    tabEl: tabEl,
    animate: options.animate,
    tabRoute: options.route
  });

  var $newTabEl = tabShowResult.$newTabEl,
      $oldTabEl = tabShowResult.$oldTabEl,
      animated = tabShowResult.animated,
      onTabsChanged = tabShowResult.onTabsChanged;


  if ($newTabEl && $newTabEl.parents('.page').length > 0 && options.route) {
    var tabParentPageData = $newTabEl.parents('.page')[0].f7Page;
    if (tabParentPageData && options.route) {
      tabParentPageData.route = options.route;
    }
  }

  // Tab Content Loaded
  function onTabLoaded(contentEl) {
    // Remove theme elements
    router.removeThemeElements($newTabEl);

    var tabEventTarget = $newTabEl;
    if (typeof contentEl !== 'string') tabEventTarget = (0, _dom2.default)(contentEl);

    tabEventTarget.trigger('tab:init tab:mounted', tabRoute);
    router.emit('tabInit tabMounted', $newTabEl[0], tabRoute);

    if ($oldTabEl && router.params.unloadTabContent) {
      if (animated) {
        onTabsChanged(function () {
          router.tabRemove($oldTabEl, $newTabEl, tabRoute);
        });
      } else {
        router.tabRemove($oldTabEl, $newTabEl, tabRoute);
      }
    }
  }
  if (!router.params.unloadTabContent) {
    if ($newTabEl[0].f7RouterTabLoaded) return router;
  }

  // Load Tab Content
  function loadTab(loadTabParams, loadTabOptions) {
    // Load Tab Props
    var url = loadTabParams.url,
        content = loadTabParams.content,
        el = loadTabParams.el,
        template = loadTabParams.template,
        templateUrl = loadTabParams.templateUrl,
        component = loadTabParams.component,
        componentUrl = loadTabParams.componentUrl;
    // Component/Template Callbacks

    function resolve(contentEl) {
      router.allowPageChange = true;
      if (!contentEl) return;
      if (typeof contentEl === 'string') {
        $newTabEl.html(contentEl);
      } else {
        $newTabEl.html('');
        if (contentEl.f7Component) {
          contentEl.f7Component.$mount(function (componentEl) {
            $newTabEl.append(componentEl);
          });
        } else {
          $newTabEl.append(contentEl);
        }
      }
      if (!router.params.unloadTabContent) {
        $newTabEl[0].f7RouterTabLoaded = true;
      }
      onTabLoaded(contentEl);
    }
    function reject() {
      router.allowPageChange = true;
      return router;
    }

    if (content) {
      resolve(content);
    } else if (template || templateUrl) {
      try {
        router.tabTemplateLoader(template, templateUrl, loadTabOptions, resolve, reject);
      } catch (err) {
        router.allowPageChange = true;
        throw err;
      }
    } else if (el) {
      resolve(el);
    } else if (component || componentUrl) {
      // Load from component (F7/Vue/React/...)
      try {
        router.tabComponentLoader($newTabEl[0], component, componentUrl, loadTabOptions, resolve, reject);
      } catch (err) {
        router.allowPageChange = true;
        throw err;
      }
    } else if (url) {
      // Load using XHR
      if (router.xhr) {
        router.xhr.abort();
        router.xhr = false;
      }
      router.xhrRequest(url, loadTabOptions).then(function (tabContent) {
        resolve(tabContent);
      }).catch(function () {
        router.allowPageChange = true;
      });
    }
  }

  'url content component el componentUrl template templateUrl'.split(' ').forEach(function (tabLoadProp) {
    if (tabRoute[tabLoadProp]) {
      loadTab(_defineProperty({}, tabLoadProp, tabRoute[tabLoadProp]), options);
    }
  });

  // Async
  function asyncResolve(resolveParams, resolveOptions) {
    loadTab(resolveParams, _utils2.default.extend(options, resolveOptions));
  }
  function asyncReject() {
    router.allowPageChange = true;
  }
  if (tabRoute.async) {
    tabRoute.async.call(router, router.currentRoute, router.previousRoute, asyncResolve, asyncReject);
  }
  return router;
}
function tabRemove($oldTabEl, $newTabEl, tabRoute) {
  var router = this;
  $oldTabEl.trigger('tab:beforeremove', tabRoute);
  router.emit('tabBeforeRemove', $oldTabEl[0], $newTabEl[0], tabRoute);
  $oldTabEl.children().each(function (index, tabChild) {
    if (tabChild.f7Component) {
      tabChild.f7Component.$destroy();
    }
  });
  router.removeTabContent($oldTabEl[0], tabRoute);
}

exports.tabLoad = tabLoad;
exports.tabRemove = tabRemove;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalRemove = exports.modalLoad = undefined;

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _history = __webpack_require__(5);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modalLoad(modalType, route) {
  var loadOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var router = this;
  var app = router.app;
  var options = _utils2.default.extend({
    animate: router.params.animate,
    pushState: true,
    history: true,
    on: {}
  }, loadOptions);

  var modalParams = route.route[modalType];
  var modalRoute = route.route;

  function onModalLoaded() {
    // Create Modal
    var modal = app[modalType].create(modalParams);
    modalRoute.modalInstance = modal;

    function closeOnSwipeBack() {
      modal.close();
    }
    modal.on('modalOpen', function () {
      router.once('swipeBackMove', closeOnSwipeBack);
    });
    modal.on('modalClose', function () {
      router.off('swipeBackMove', closeOnSwipeBack);
      if (!modal.closeByRouter) {
        router.back();
      }
    });

    modal.on('modalClosed', function () {
      modal.$el.trigger(modalType.toLowerCase() + ':beforeremove', route, modal);
      modal.emit('modalBeforeRemove ' + modalType + 'BeforeRemove', modal.el, route, modal);
      var modalComponent = modal.el.f7Component;
      if (modalComponent) {
        modalComponent.$destroy();
      }
      _utils2.default.nextTick(function () {
        if (modalComponent) {
          router.removeModal(modal.el);
        }
        modal.destroy();
        delete modalRoute.modalInstance;
      });
    });

    if (options.route) {
      // Update Browser History
      if (router.params.pushState && options.pushState) {
        _history2.default.push(router.view.id, {
          url: options.route.url,
          modal: modalType
        }, (router.params.pushStateRoot || '') + router.params.pushStateSeparator + options.route.url);
      }

      // Set Route
      if (options.route !== router.currentRoute) {
        router.currentRoute = _utils2.default.extend(options.route, { modal: modal });
      }

      // Update Router History
      if (options.history) {
        router.history.push(options.route.url);
        router.saveHistory();
      }
    }

    // Remove theme elements
    router.removeThemeElements(modal.el);

    // Emit events
    modal.$el.trigger(modalType.toLowerCase() + ':init ' + modalType.toLowerCase() + ':mounted', route, modal);
    router.emit('modalInit ' + modalType + 'Init ' + modalType + 'Mounted', modal.el, route, modal);
    // Open
    modal.open();
  }

  // Load Modal Content
  function loadModal(loadModalParams, loadModalOptions) {
    // Load Modal Props
    var url = loadModalParams.url,
        content = loadModalParams.content,
        template = loadModalParams.template,
        templateUrl = loadModalParams.templateUrl,
        component = loadModalParams.component,
        componentUrl = loadModalParams.componentUrl;

    // Component/Template Callbacks

    function resolve(contentEl) {
      if (contentEl) {
        if (typeof contentEl === 'string') {
          modalParams.content = contentEl;
        } else if (contentEl.f7Component) {
          contentEl.f7Component.$mount(function (componentEl) {
            modalParams.el = componentEl;
            app.root.append(componentEl);
          });
        } else {
          modalParams.el = contentEl;
        }
        onModalLoaded();
      }
    }
    function reject() {
      router.allowPageChange = true;
      return router;
    }

    if (content) {
      resolve(content);
    } else if (template || templateUrl) {
      try {
        router.modalTemplateLoader(template, templateUrl, loadModalOptions, resolve, reject);
      } catch (err) {
        router.allowPageChange = true;
        throw err;
      }
    } else if (component || componentUrl) {
      // Load from component (F7/Vue/React/...)
      try {
        router.modalComponentLoader(app.root[0], component, componentUrl, loadModalOptions, resolve, reject);
      } catch (err) {
        router.allowPageChange = true;
        throw err;
      }
    } else if (url) {
      // Load using XHR
      if (router.xhr) {
        router.xhr.abort();
        router.xhr = false;
      }
      router.xhrRequest(url, loadModalOptions).then(function (modalContent) {
        modalParams.content = modalContent;
        onModalLoaded();
      }).catch(function () {
        router.allowPageChange = true;
      });
    } else {
      onModalLoaded();
    }
  }

  'url content component el componentUrl template templateUrl'.split(' ').forEach(function (modalLoadProp) {
    if (modalParams[modalLoadProp]) {
      loadModal(_defineProperty({}, modalLoadProp, modalParams[modalLoadProp]), options);
    }
  });

  // Async
  function asyncResolve(resolveParams, resolveOptions) {
    loadModal(resolveParams, _utils2.default.extend(options, resolveOptions));
  }
  function asyncReject() {
    router.allowPageChange = true;
  }
  if (modalParams.async) {
    modalParams.async.call(router, options.route, router.currentRoute, asyncResolve, asyncReject);
  }
  return router;
}
function modalRemove(modal) {
  _utils2.default.extend(modal, { closeByRouter: true });
  modal.close();
}

exports.modalLoad = modalLoad;
exports.modalRemove = modalRemove;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.back = exports.loadBack = exports.backward = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _history = __webpack_require__(5);

var _history2 = _interopRequireDefault(_history);

var _redirect = __webpack_require__(16);

var _redirect2 = _interopRequireDefault(_redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function backward(el, backwardOptions) {
  var router = this;
  var app = router.app;
  var view = router.view;

  var options = _utils2.default.extend({
    animate: router.params.animate,
    pushState: true
  }, backwardOptions);

  var dynamicNavbar = router.dynamicNavbar;
  var separateNavbar = router.separateNavbar;

  var $newPage = (0, _dom2.default)(el);
  var $oldPage = router.$el.children('.page-current');

  if ($newPage.length) {
    // Remove theme elements
    router.removeThemeElements($newPage);
  }

  var $navbarEl = void 0;
  var $newNavbarInner = void 0;
  var $oldNavbarInner = void 0;

  if (dynamicNavbar) {
    $newNavbarInner = $newPage.children('.navbar').children('.navbar-inner');
    if (separateNavbar) {
      $navbarEl = router.$navbarEl;
      if ($newNavbarInner.length > 0) {
        $newPage.children('.navbar').remove();
      }
      if ($newNavbarInner.length === 0 && $newPage[0].f7Page) {
        // Try from pageData
        $newNavbarInner = $newPage[0].f7Page.$navbarEl;
      }
      $oldNavbarInner = $navbarEl.find('.navbar-current');
    } else {
      $oldNavbarInner = $oldPage.children('.navbar').children('.navbar-inner');
    }
  }

  router.allowPageChange = false;
  if ($newPage.length === 0 || $oldPage.length === 0) {
    router.allowPageChange = true;
    return router;
  }

  // Remove theme elements
  router.removeThemeElements($newPage);

  // New Page
  $newPage.addClass('page-previous').removeClass('stacked').removeAttr('aria-hidden');

  if (dynamicNavbar && $newNavbarInner.length > 0) {
    $newNavbarInner.addClass('navbar-previous').removeClass('stacked').removeAttr('aria-hidden');
  }

  // Remove previous page in case of "forced"
  var backIndex = void 0;
  if (options.force) {
    if ($oldPage.prev('.page-previous:not(.stacked)').length > 0 || $oldPage.prev('.page-previous').length === 0) {
      if (router.history.indexOf(options.route.url) >= 0) {
        backIndex = router.history.length - router.history.indexOf(options.route.url) - 1;
        router.history = router.history.slice(0, router.history.indexOf(options.route.url) + 2);
        view.history = router.history;
      } else if (router.history[[router.history.length - 2]]) {
        router.history[router.history.length - 2] = options.route.url;
      } else {
        router.history.unshift(router.url);
      }

      if (backIndex && router.params.stackPages) {
        $oldPage.prevAll('.page-previous').each(function (index, pageToRemove) {
          var $pageToRemove = (0, _dom2.default)(pageToRemove);
          var $navbarToRemove = void 0;
          if (separateNavbar) {
            // $navbarToRemove = $oldNavbarInner.prevAll('.navbar-previous').eq(index);
            $navbarToRemove = (0, _dom2.default)(app.navbar.getElByPage($pageToRemove));
          }
          if ($pageToRemove[0] !== $newPage[0] && $pageToRemove.index() > $newPage.index()) {
            if (router.initialPages.indexOf($pageToRemove[0]) >= 0) {
              $pageToRemove.addClass('stacked');
              if (separateNavbar) {
                $navbarToRemove.addClass('stacked');
              }
            } else {
              router.pageCallback('beforeRemove', $pageToRemove, $navbarToRemove, 'previous', undefined, options);
              router.removePage($pageToRemove);
              if (separateNavbar && $navbarToRemove.length > 0) {
                router.removeNavbar($navbarToRemove);
              }
            }
          }
        });
      } else {
        var $pageToRemove = $oldPage.prev('.page-previous:not(.stacked)');
        var $navbarToRemove = void 0;
        if (separateNavbar) {
          // $navbarToRemove = $oldNavbarInner.prev('.navbar-inner:not(.stacked)');
          $navbarToRemove = (0, _dom2.default)(app.navbar.getElByPage($pageToRemove));
        }
        if (router.params.stackPages && router.initialPages.indexOf($pageToRemove[0]) >= 0) {
          $pageToRemove.addClass('stacked');
          $navbarToRemove.addClass('stacked');
        } else if ($pageToRemove.length > 0) {
          router.pageCallback('beforeRemove', $pageToRemove, $navbarToRemove, 'previous', undefined, options);
          router.removePage($pageToRemove);
          if (separateNavbar && $navbarToRemove.length) {
            router.removeNavbar($navbarToRemove);
          }
        }
      }
    }
  }

  // Insert new page
  var newPageInDom = $newPage.parents(document).length > 0;
  var f7Component = $newPage[0].f7Component;

  function insertPage() {
    if ($newPage.next($oldPage).length === 0) {
      if (!newPageInDom && f7Component) {
        f7Component.$mount(function (componentEl) {
          (0, _dom2.default)(componentEl).insertBefore($oldPage);
        });
      } else {
        $newPage.insertBefore($oldPage);
      }
    }
    if (separateNavbar && $newNavbarInner.length) {
      $newNavbarInner.insertBefore($oldNavbarInner);
      if ($oldNavbarInner.length > 0) {
        $newNavbarInner.insertBefore($oldNavbarInner);
      } else {
        if (!router.$navbarEl.parents(document).length) {
          router.$el.prepend(router.$navbarEl);
        }
        $navbarEl.append($newNavbarInner);
      }
    }
    if (!newPageInDom) {
      router.pageCallback('mounted', $newPage, $newNavbarInner, 'previous', 'current', options, $oldPage);
    }
  }

  if (options.preload) {
    // Insert Page
    insertPage();
    // Page init and before init events
    router.pageCallback('init', $newPage, $newNavbarInner, 'previous', 'current', options, $oldPage);
    if ($newPage.prevAll('.page-previous:not(.stacked)').length > 0) {
      $newPage.prevAll('.page-previous:not(.stacked)').each(function (index, pageToRemove) {
        var $pageToRemove = (0, _dom2.default)(pageToRemove);
        var $navbarToRemove = void 0;
        if (separateNavbar) {
          // $navbarToRemove = $newNavbarInner.prevAll('.navbar-previous:not(.stacked)').eq(index);
          $navbarToRemove = (0, _dom2.default)(app.navbar.getElByPage($pageToRemove));
        }
        if (router.params.stackPages && router.initialPages.indexOf(pageToRemove) >= 0) {
          $pageToRemove.addClass('stacked');
          if (separateNavbar) {
            $navbarToRemove.addClass('stacked');
          }
        } else {
          router.pageCallback('beforeRemove', $pageToRemove, $navbarToRemove, 'previous', undefined);
          router.removePage($pageToRemove);
          if (separateNavbar && $navbarToRemove.length) {
            router.removeNavbar($navbarToRemove);
          }
        }
      });
    }
    router.allowPageChange = true;
    return router;
  }

  // History State
  if (router.params.pushState && options.pushState) {
    if (backIndex) _history2.default.go(-backIndex);else _history2.default.back();
  }

  // Update History
  if (router.history.length === 1) {
    router.history.unshift(router.url);
  }
  router.history.pop();
  router.saveHistory();

  // Current Page & Navbar
  router.currentPageEl = $newPage[0];
  if (dynamicNavbar && $newNavbarInner.length) {
    router.currentNavbarEl = $newNavbarInner[0];
  } else {
    delete router.currentNavbarEl;
  }

  // Current Route
  router.currentRoute = options.route;

  // Insert Page
  insertPage();

  // Load Tab
  if (options.route.route.tab) {
    router.tabLoad(options.route.route.tab, _utils2.default.extend({}, options, {
      history: false,
      pushState: false
    }));
  }

  // Page init and before init events
  router.pageCallback('init', $newPage, $newNavbarInner, 'previous', 'current', options, $oldPage);

  // Before animation callback
  router.pageCallback('beforeIn', $newPage, $newNavbarInner, 'previous', 'current', options);
  router.pageCallback('beforeOut', $oldPage, $oldNavbarInner, 'current', 'next', options);

  // Animation
  function afterAnimation() {
    // Set classes
    var pageClasses = 'page-previous page-current page-next';
    var navbarClasses = 'navbar-previous navbar-current navbar-next';
    $newPage.removeClass(pageClasses).addClass('page-current').removeAttr('aria-hidden');
    $oldPage.removeClass(pageClasses).addClass('page-next').attr('aria-hidden', 'true');
    if (dynamicNavbar) {
      $newNavbarInner.removeClass(navbarClasses).addClass('navbar-current').removeAttr('aria-hidden');
      $oldNavbarInner.removeClass(navbarClasses).addClass('navbar-next').attr('aria-hidden', 'true');
    }

    // After animation event
    router.pageCallback('afterIn', $newPage, $newNavbarInner, 'previous', 'current', options);
    router.pageCallback('afterOut', $oldPage, $oldNavbarInner, 'current', 'next', options);

    // Remove Old Page
    if (router.params.stackPages && router.initialPages.indexOf($oldPage[0]) >= 0) {
      $oldPage.addClass('stacked');
      if (separateNavbar) {
        $oldNavbarInner.addClass('stacked');
      }
    } else {
      router.pageCallback('beforeRemove', $oldPage, $oldNavbarInner, 'next', undefined, options);
      router.removePage($oldPage);
      if (separateNavbar && $oldNavbarInner.length) {
        router.removeNavbar($oldNavbarInner);
      }
    }

    router.allowPageChange = true;
    router.emit('routeChanged', router.currentRoute, router.previousRoute, router);

    // Preload previous page
    var preloadPreviousPage = app.theme === 'ios' ? router.params.preloadPreviousPage || router.params.iosSwipeBack : router.params.preloadPreviousPage;
    if (preloadPreviousPage) {
      router.back(router.history[router.history.length - 2], { preload: true });
    }
    if (router.params.pushState) {
      _history2.default.clearRouterQueue();
    }
  }

  function setPositionClasses() {
    var pageClasses = 'page-previous page-current page-next';
    var navbarClasses = 'navbar-previous navbar-current navbar-next';
    $oldPage.removeClass(pageClasses).addClass('page-current');
    $newPage.removeClass(pageClasses).addClass('page-previous').removeAttr('aria-hidden');
    if (dynamicNavbar) {
      $oldNavbarInner.removeClass(navbarClasses).addClass('navbar-current');
      $newNavbarInner.removeClass(navbarClasses).addClass('navbar-previous').removeAttr('aria-hidden');
    }
  }

  if (options.animate) {
    setPositionClasses();
    router.animate($oldPage, $newPage, $oldNavbarInner, $newNavbarInner, 'backward', function () {
      afterAnimation();
    });
  } else {
    afterAnimation();
  }

  return router;
}
function loadBack(backParams, backOptions, ignorePageChange) {
  var router = this;

  if (!router.allowPageChange && !ignorePageChange) return router;
  var params = backParams;
  var options = backOptions;
  var url = params.url,
      content = params.content,
      el = params.el,
      pageName = params.pageName,
      template = params.template,
      templateUrl = params.templateUrl,
      component = params.component,
      componentUrl = params.componentUrl;


  if (options.route.url && router.url === options.route.url && !(options.reloadCurrent || options.reloadPrevious) && !router.params.allowDuplicateUrls) {
    return false;
  }

  if (!options.route && url) {
    options.route = router.parseRouteUrl(url);
  }

  // Component Callbacks
  function resolve(pageEl, newOptions) {
    return router.backward(pageEl, _utils2.default.extend(options, newOptions));
  }
  function reject() {
    router.allowPageChange = true;
    return router;
  }

  if (url || templateUrl || componentUrl) {
    router.allowPageChange = false;
  }

  // Proceed
  if (content) {
    router.backward(router.getPageEl(content), options);
  } else if (template || templateUrl) {
    // Parse template and send page element
    try {
      router.pageTemplateLoader(template, templateUrl, options, resolve, reject);
    } catch (err) {
      router.allowPageChange = true;
      throw err;
    }
  } else if (el) {
    // Load page from specified HTMLElement or by page name in pages container
    router.backward(router.getPageEl(el), options);
  } else if (pageName) {
    // Load page by page name in pages container
    router.backward(router.$el.children('.page[data-name="' + pageName + '"]').eq(0), options);
  } else if (component || componentUrl) {
    // Load from component (F7/Vue/React/...)
    try {
      router.pageComponentLoader(router.el, component, componentUrl, options, resolve, reject);
    } catch (err) {
      router.allowPageChange = true;
      throw err;
    }
  } else if (url) {
    // Load using XHR
    if (router.xhr) {
      router.xhr.abort();
      router.xhr = false;
    }
    router.xhrRequest(url, options).then(function (pageContent) {
      router.backward(router.getPageEl(pageContent), options);
    }).catch(function () {
      router.allowPageChange = true;
    });
  }
  return router;
}
function back() {
  var navigateUrl = void 0;
  var navigateOptions = void 0;
  if (_typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object') {
    navigateOptions = (arguments.length <= 0 ? undefined : arguments[0]) || {};
  } else {
    navigateUrl = arguments.length <= 0 ? undefined : arguments[0];
    navigateOptions = (arguments.length <= 1 ? undefined : arguments[1]) || {};
  }

  var router = this;
  var app = router.app;
  if (!router.view) {
    app.views.main.router.back(navigateUrl, navigateOptions);
    return router;
  }

  var currentRouteIsModal = router.currentRoute.modal;
  var modalType = void 0;
  if (!currentRouteIsModal) {
    'popup popover sheet loginScreen actions customModal'.split(' ').forEach(function (modalLoadProp) {
      if (router.currentRoute.route[modalLoadProp]) {
        currentRouteIsModal = true;
        modalType = modalLoadProp;
      }
    });
  }
  if (currentRouteIsModal) {
    var modalToClose = router.currentRoute.modal || router.currentRoute.route.modalInstance || app[modalType].get();
    var previousUrl = router.history[router.history.length - 2];
    var previousRoute = router.findMatchingRoute(previousUrl);
    if (!previousRoute && previousUrl) {
      previousRoute = {
        url: previousUrl,
        path: previousUrl.split('?')[0],
        query: _utils2.default.parseUrlQuery(previousUrl),
        route: {
          path: previousUrl.split('?')[0],
          url: previousUrl
        }
      };
    }
    if (!previousRoute || !modalToClose) {
      return router;
    }
    if (router.params.pushState && navigateOptions.pushState !== false) {
      _history2.default.back();
    }
    router.currentRoute = previousRoute;
    router.history.pop();
    router.saveHistory();
    router.modalRemove(modalToClose);
    return router;
  }
  var $previousPage = router.$el.children('.page-current').prevAll('.page-previous').eq(0);
  if (!navigateOptions.force && $previousPage.length > 0) {
    if (router.params.pushState && $previousPage[0].f7Page && router.history[router.history.length - 2] !== $previousPage[0].f7Page.route.url) {
      router.back(router.history[router.history.length - 2], _utils2.default.extend(navigateOptions, { force: true }));
      return router;
    }
    router.loadBack({ el: $previousPage }, _utils2.default.extend(navigateOptions, {
      route: $previousPage[0].f7Page.route
    }));
    return router;
  }

  // Navigate URL
  if (navigateUrl === '#') {
    navigateUrl = undefined;
  }
  if (navigateUrl && navigateUrl[0] !== '/' && navigateUrl.indexOf('#') !== 0) {
    navigateUrl = ((router.path || '/') + navigateUrl).replace('//', '/');
  }
  if (!navigateUrl && router.history.length > 1) {
    navigateUrl = router.history[router.history.length - 2];
  }

  // Find route to load
  var route = router.findMatchingRoute(navigateUrl);
  if (!route) {
    if (navigateUrl) {
      route = {
        url: navigateUrl,
        path: navigateUrl.split('?')[0],
        query: _utils2.default.parseUrlQuery(navigateUrl),
        route: {
          path: navigateUrl.split('?')[0],
          url: navigateUrl
        }
      };
    }
  }
  if (!route) {
    return router;
  }

  if (route.route.redirect) {
    return _redirect2.default.call(router, 'back', route, navigateOptions);
  }

  var options = {};
  if (route.route.options) {
    _utils2.default.extend(options, route.route.options, navigateOptions, { route: route });
  } else {
    _utils2.default.extend(options, navigateOptions, { route: route });
  }

  if (options.force && router.params.stackPages) {
    router.$el.children('.page-previous.stacked').each(function (index, pageEl) {
      if (pageEl.f7Page && pageEl.f7Page.route && pageEl.f7Page.route.url === route.url) {
        router.loadBack({ el: pageEl }, options);
      }
    });
  }

  'url content component pageName el componentUrl template templateUrl'.split(' ').forEach(function (pageLoadProp) {
    if (route.route[pageLoadProp]) {
      router.loadBack(_defineProperty({}, pageLoadProp, route.route[pageLoadProp]), options);
    }
  });
  // Async
  function asyncResolve(resolveParams, resolveOptions) {
    router.allowPageChange = false;
    router.loadBack(resolveParams, _utils2.default.extend(options, resolveOptions), true);
  }
  function asyncReject() {
    router.allowPageChange = true;
  }
  if (route.route.async) {
    router.allowPageChange = false;

    route.route.async.call(router, route, router.currentRoute, asyncResolve, asyncReject);
  }
  // Return Router
  return router;
}
exports.backward = backward;
exports.loadBack = loadBack;
exports.back = back;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = __webpack_require__(5);

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'history',
  static: {
    history: _history2.default
  },
  on: {
    init: function init() {
      _history2.default.init(this);
    }
  }
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyPrefix = 'f7storage-';
var Storage = {
  get: function get(key) {
    return _utils2.default.promise(function (resolve, reject) {
      try {
        var value = JSON.parse(window.localStorage.getItem('' + keyPrefix + key));
        resolve(value);
      } catch (e) {
        reject(e);
      }
    });
  },
  set: function set(key, value) {
    return _utils2.default.promise(function (resolve, reject) {
      try {
        window.localStorage.setItem('' + keyPrefix + key, JSON.stringify(value));
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  },
  remove: function remove(key) {
    return _utils2.default.promise(function (resolve, reject) {
      try {
        window.localStorage.removeItem('' + keyPrefix + key);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  },
  clear: function clear() {},
  length: function length() {},
  keys: function keys() {
    return _utils2.default.promise(function (resolve, reject) {
      try {
        var keys = Object.keys(window.localStorage).filter(function (keyName) {
          return keyName.indexOf(keyPrefix) === 0;
        }).map(function (keyName) {
          return keyName.replace(keyPrefix, '');
        });
        resolve(keys);
      } catch (e) {
        reject(e);
      }
    });
  },
  forEach: function forEach(callback) {
    return _utils2.default.promise(function (resolve, reject) {
      try {
        Object.keys(window.localStorage).filter(function (keyName) {
          return keyName.indexOf(keyPrefix) === 0;
        }).forEach(function (keyName, index) {
          var key = keyName.replace(keyPrefix, '');
          Storage.get(key).then(function (value) {
            callback(key, value, index);
          });
        });
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
};

exports.default = {
  name: 'storage',
  static: {
    Storage: Storage,
    storage: Storage
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Statusbar = {
  hide: function hide() {
    (0, _dom2.default)('html').removeClass('with-statusbar');
    if (_device2.default.cordova && window.StatusBar) {
      window.StatusBar.hide();
    }
  },
  show: function show() {
    if (_device2.default.cordova && window.StatusBar) {
      window.StatusBar.show();
      _utils2.default.nextTick(function () {
        if (_device2.default.needsStatusbarOverlay()) {
          (0, _dom2.default)('html').addClass('with-statusbar');
        }
      });
      return;
    }
    (0, _dom2.default)('html').addClass('with-statusbar');
  },
  onClick: function onClick() {
    var app = this;
    var pageContent = void 0;
    if ((0, _dom2.default)('.popup.modal-in').length > 0) {
      // Check for opened popup
      pageContent = (0, _dom2.default)('.popup.modal-in').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else if ((0, _dom2.default)('.panel.panel-active').length > 0) {
      // Check for opened panel
      pageContent = (0, _dom2.default)('.panel.panel-active').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else if ((0, _dom2.default)('.views > .view.tab-active').length > 0) {
      // View in tab bar app layout
      pageContent = (0, _dom2.default)('.views > .view.tab-active').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else if ((0, _dom2.default)('.views').length > 0) {
      pageContent = (0, _dom2.default)('.views').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    } else {
      pageContent = app.root.children('.view').find('.page:not(.page-previous):not(.page-next):not(.cached)').find('.page-content');
    }

    if (pageContent && pageContent.length > 0) {
      // Check for tab
      if (pageContent.hasClass('tab')) {
        pageContent = pageContent.parent('.tabs').children('.page-content.tab-active');
      }
      if (pageContent.length > 0) pageContent.scrollTop(0, 300);
    }
  },
  setIosTextColor: function setIosTextColor(color) {
    if (_device2.default.cordova && window.StatusBar) {
      if (color === 'white') {
        window.StatusBar.styleLightContent();
      } else {
        window.StatusBar.styleDefault();
      }
    }
  },
  setBackgroundColor: function setBackgroundColor(color) {
    (0, _dom2.default)('.statusbar').css('background-color', color);
    if (_device2.default.cordova && window.StatusBar) {
      window.StatusBar.backgroundColorByHexString(color);
    }
  },
  isVisible: function isVisible() {
    if (_device2.default.cordova && window.StatusBar) {
      return window.StatusBar.isVisible;
    }
    return false;
  },
  iosOverlaysWebView: function iosOverlaysWebView() {
    var overlays = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (!_device2.default.ios) return;
    if (_device2.default.cordova && window.StatusBar) {
      window.StatusBar.overlaysWebView(overlays);
      if (overlays) {
        (0, _dom2.default)('html').addClass('with-statusbar');
      } else {
        (0, _dom2.default)('html').removeClass('with-statusbar');
      }
    }
  },
  checkOverlay: function checkOverlay() {
    if (_device2.default.needsStatusbarOverlay()) {
      (0, _dom2.default)('html').addClass('with-statusbar');
    } else {
      (0, _dom2.default)('html').removeClass('with-statusbar');
    }
  },
  init: function init() {
    var app = this;
    var params = app.params.statusbar;
    if (!params.enabled) return;

    if (params.overlay === 'auto') {
      if (_device2.default.needsStatusbarOverlay()) {
        (0, _dom2.default)('html').addClass('with-statusbar');
      }

      if (_device2.default.ios && (_device2.default.cordova || _device2.default.webView)) {
        if (window.orientation === 0) {
          app.once('resize', function () {
            Statusbar.checkOverlay();
          });
        }

        (0, _dom2.default)(document).on('resume', function () {
          Statusbar.checkOverlay();
        }, false);

        app.on('orientationchange resize', function () {
          Statusbar.checkOverlay();
        });
      }
    } else if (params.overlay === true) {
      (0, _dom2.default)('html').addClass('with-statusbar');
    } else if (params.overlay === false) {
      (0, _dom2.default)('html').removeClass('with-statusbar');
    }

    if (_device2.default.cordova && window.StatusBar) {
      if (params.scrollTopOnClick) {
        (0, _dom2.default)(window).on('statusTap', Statusbar.onClick.bind(app));
      }
      if (params.iosOverlaysWebView) {
        window.StatusBar.overlaysWebView(true);
      } else {
        window.StatusBar.overlaysWebView(false);
      }

      if (params.iosTextColor === 'white') {
        window.StatusBar.styleLightContent();
      } else {
        window.StatusBar.styleDefault();
      }
    }
    if (params.iosBackgroundColor && app.theme === 'ios') {
      Statusbar.setBackgroundColor(params.iosBackgroundColor);
    }
    if (params.materialBackgroundColor && app.theme === 'md') {
      Statusbar.setBackgroundColor(params.materialBackgroundColor);
    }
  }
};

exports.default = {
  name: 'statusbar',
  params: {
    statusbar: {
      enabled: true,
      overlay: 'auto',
      scrollTopOnClick: true,
      iosOverlaysWebView: true,
      iosTextColor: 'black',
      iosBackgroundColor: null,
      materialBackgroundColor: null
    }
  },
  create: function create() {
    var app = this;
    _utils2.default.extend(app, {
      statusbar: {
        checkOverlay: Statusbar.checkOverlay,
        hide: Statusbar.hide,
        show: Statusbar.show,
        iosOverlaysWebView: Statusbar.iosOverlaysWebView,
        setIosTextColor: Statusbar.setIosTextColor,
        setBackgroundColor: Statusbar.setBackgroundColor,
        isVisible: Statusbar.isVisible,
        init: Statusbar.init.bind(app)
      }
    });
  },

  on: {
    init: function init() {
      var app = this;
      Statusbar.init.call(app);
    }
  },
  clicks: {
    '.statusbar': function onStatusbarClick() {
      var app = this;
      if (!app.params.statusbar.enabled) return;
      if (!app.params.statusbar.scrollTopOnClick) return;
      Statusbar.onClick.call(app);
    }
  }
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _viewClass = __webpack_require__(14);

var _viewClass2 = _interopRequireDefault(_viewClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCurrentView(app) {
  var popoverView = (0, _dom2.default)('.popover.modal-in .view');
  var popupView = (0, _dom2.default)('.popup.modal-in .view');
  var panelView = (0, _dom2.default)('.panel.panel-active .view');
  var appViews = (0, _dom2.default)('.views');
  if (appViews.length === 0) appViews = app.root;
  // Find active view as tab
  var appView = appViews.children('.view');
  // Propably in tabs or split view
  if (appView.length > 1) {
    if (appView.hasClass('tab')) {
      // Tabs
      appView = appViews.children('.view.tab-active');
    } else {
      // Split View, leave appView intact
    }
  }
  if (popoverView.length > 0 && popoverView[0].f7View) return popoverView[0].f7View;
  if (popupView.length > 0 && popupView[0].f7View) return popupView[0].f7View;
  if (panelView.length > 0 && panelView[0].f7View) return panelView[0].f7View;
  if (appView.length > 0) {
    if (appView.length === 1 && appView[0].f7View) return appView[0].f7View;
    if (appView.length > 1) {
      return app.views.main;
    }
  }
  return undefined;
}

exports.default = {
  name: 'view',
  params: {
    view: {
      name: undefined,
      main: false,
      router: true,
      linksView: null,
      stackPages: false,
      xhrCache: true,
      xhrCacheIgnore: [],
      xhrCacheIgnoreGetParameters: false,
      xhrCacheDuration: 1000 * 60 * 10, // Ten minutes
      preloadPreviousPage: true,
      uniqueHistory: false,
      uniqueHistoryIgnoreGetParameters: false,
      allowDuplicateUrls: false,
      reloadPages: false,
      removeElements: true,
      removeElementsWithTimeout: false,
      removeElementsTimeout: 0,
      restoreScrollTopOnBack: true,
      unloadTabContent: true,
      passRouteQueryToRequest: true,
      passRouteParamsToRequest: false,
      // Swipe Back
      iosSwipeBack: true,
      iosSwipeBackAnimateShadow: true,
      iosSwipeBackAnimateOpacity: true,
      iosSwipeBackActiveArea: 30,
      iosSwipeBackThreshold: 0,
      // Push State
      pushState: false,
      pushStateRoot: undefined,
      pushStateAnimate: true,
      pushStateAnimateOnLoad: false,
      pushStateSeparator: '#!',
      pushStateOnLoad: true,
      // Animate Pages
      animate: true,
      animateWithJS: false,
      // iOS Dynamic Navbar
      iosDynamicNavbar: true,
      iosSeparateDynamicNavbar: true,
      // Animate iOS Navbar Back Icon
      iosAnimateNavbarBackIcon: true,
      // Delays
      iosPageLoadDelay: 0,
      materialPageLoadDelay: 0
    }
  },
  static: {
    View: _viewClass2.default
  },
  create: function create() {
    var app = this;
    _utils2.default.extend(app, {
      views: _utils2.default.extend([], {
        create: function create(el, params) {
          return new _viewClass2.default(app, el, params);
        },
        get: function get(viewEl) {
          var $viewEl = (0, _dom2.default)(viewEl);
          if ($viewEl.length && $viewEl[0].f7View) return $viewEl[0].f7View;
          return undefined;
        }
      })
    });
    Object.defineProperty(app.views, 'current', {
      enumerable: true,
      configurable: true,
      get: function get() {
        return getCurrentView(app);
      }
    });
    // Alias
    app.view = app.views;
  },

  on: {
    init: function init() {
      var app = this;
      (0, _dom2.default)('.view-init').each(function (index, viewEl) {
        if (viewEl.f7View) return;
        var viewParams = (0, _dom2.default)(viewEl).dataset();
        app.views.create(viewEl, viewParams);
      });
    },
    modalOpen: function modalOpen(modal) {
      var app = this;
      modal.$el.find('.view-init').each(function (index, viewEl) {
        if (viewEl.f7View) return;
        var viewParams = (0, _dom2.default)(viewEl).dataset();
        app.views.create(viewEl, viewParams);
      });
    },
    modalBeforeDestroy: function modalBeforeDestroy(modal) {
      if (!modal || !modal.$el) return;
      modal.$el.find('.view-init').each(function (index, viewEl) {
        var view = viewEl.f7View;
        if (!view) return;
        view.destroy();
      });
    }
  }
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = {
  size: function size(el) {
    var app = this;
    if (app.theme !== 'ios') return;
    var $el = (0, _dom2.default)(el);
    if ($el.hasClass('navbar')) {
      $el = $el.children('.navbar-inner').each(function (index, navbarEl) {
        app.navbar.size(navbarEl);
      });
      return;
    }
    if ($el.hasClass('stacked') || $el.parents('.stacked').length > 0 || $el.parents('.tab:not(.tab-active)').length > 0 || $el.parents('.popup:not(.modal-in)').length > 0) {
      return;
    }
    var $viewEl = $el.parents('.view').eq(0);
    var left = app.rtl ? $el.children('.right') : $el.children('.left');
    var right = app.rtl ? $el.children('.left') : $el.children('.right');
    var title = $el.children('.title');
    var subnavbar = $el.children('.subnavbar');
    var noLeft = left.length === 0;
    var noRight = right.length === 0;
    var leftWidth = noLeft ? 0 : left.outerWidth(true);
    var rightWidth = noRight ? 0 : right.outerWidth(true);
    var titleWidth = title.outerWidth(true);
    var navbarStyles = $el.styles();
    var navbarWidth = $el[0].offsetWidth;
    var navbarInnerWidth = navbarWidth - parseInt(navbarStyles.paddingLeft, 10) - parseInt(navbarStyles.paddingRight, 10);
    var isPrevious = $el.hasClass('navbar-previous');
    var sliding = $el.hasClass('sliding');

    var router = void 0;
    var dynamicNavbar = void 0;
    var separateNavbar = void 0;
    var separateNavbarRightOffset = 0;
    var separateNavbarLeftOffset = 0;

    if ($viewEl.length > 0 && $viewEl[0].f7View) {
      router = $viewEl[0].f7View.router;
      dynamicNavbar = router && router.dynamicNavbar;
      separateNavbar = router && router.separateNavbar;
      if (!separateNavbar) {
        separateNavbarRightOffset = navbarWidth;
        separateNavbarLeftOffset = navbarWidth / 5;
      }
    }

    var currLeft = void 0;
    var diff = void 0;
    if (noRight) {
      currLeft = navbarInnerWidth - titleWidth;
    }
    if (noLeft) {
      currLeft = 0;
    }
    if (!noLeft && !noRight) {
      currLeft = (navbarInnerWidth - rightWidth - titleWidth + leftWidth) / 2;
    }
    var requiredLeft = (navbarInnerWidth - titleWidth) / 2;
    if (navbarInnerWidth - leftWidth - rightWidth > titleWidth) {
      if (requiredLeft < leftWidth) {
        requiredLeft = leftWidth;
      }
      if (requiredLeft + titleWidth > navbarInnerWidth - rightWidth) {
        requiredLeft = navbarInnerWidth - rightWidth - titleWidth;
      }
      diff = requiredLeft - currLeft;
    } else {
      diff = 0;
    }

    // RTL inverter
    var inverter = app.rtl ? -1 : 1;

    if (dynamicNavbar) {
      if (title.hasClass('sliding') || title.length > 0 && sliding) {
        var titleLeftOffset = -(currLeft + diff) * inverter + separateNavbarLeftOffset;
        var titleRightOffset = (navbarInnerWidth - currLeft - diff - titleWidth) * inverter - separateNavbarRightOffset;

        if (isPrevious) {
          if (router && router.params.iosAnimateNavbarBackIcon) {
            var activeNavbarBackLink = $el.parent().find('.navbar-current').children('.left.sliding').find('.back .icon ~ span');
            if (activeNavbarBackLink.length > 0) {
              titleLeftOffset += activeNavbarBackLink[0].offsetLeft;
            }
          }
        }
        title[0].f7NavbarLeftOffset = titleLeftOffset;
        title[0].f7NavbarRightOffset = titleRightOffset;
      }
      if (!noLeft && (left.hasClass('sliding') || sliding)) {
        if (app.rtl) {
          left[0].f7NavbarLeftOffset = -(navbarInnerWidth - left[0].offsetWidth) / 2 * inverter;
          left[0].f7NavbarRightOffset = leftWidth * inverter;
        } else {
          left[0].f7NavbarLeftOffset = -leftWidth + separateNavbarLeftOffset;
          left[0].f7NavbarRightOffset = (navbarInnerWidth - left[0].offsetWidth) / 2 - separateNavbarRightOffset;
          if (router && router.params.iosAnimateNavbarBackIcon && left.find('.back .icon').length > 0) {
            left[0].f7NavbarRightOffset -= left.find('.back .icon')[0].offsetWidth;
          }
        }
      }
      if (!noRight && (right.hasClass('sliding') || sliding)) {
        if (app.rtl) {
          right[0].f7NavbarLeftOffset = -rightWidth * inverter;
          right[0].f7NavbarRightOffset = (navbarInnerWidth - right[0].offsetWidth) / 2 * inverter;
        } else {
          right[0].f7NavbarLeftOffset = -(navbarInnerWidth - right[0].offsetWidth) / 2 + separateNavbarLeftOffset;
          right[0].f7NavbarRightOffset = rightWidth - separateNavbarRightOffset;
        }
      }
      if (subnavbar.length && (subnavbar.hasClass('sliding') || sliding)) {
        subnavbar[0].f7NavbarLeftOffset = app.rtl ? subnavbar[0].offsetWidth : -subnavbar[0].offsetWidth + separateNavbarLeftOffset;
        subnavbar[0].f7NavbarRightOffset = -subnavbar[0].f7NavbarLeftOffset - separateNavbarRightOffset + separateNavbarLeftOffset;
      }
    }

    // Title left
    if (app.params.navbar.iosCenterTitle) {
      var titleLeft = diff;
      if (app.rtl && noLeft && noRight && title.length > 0) titleLeft = -titleLeft;
      title.css({ left: titleLeft + 'px' });
    }
  },
  hide: function hide(el) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var $el = (0, _dom2.default)(el);
    if ($el.hasClass('navbar-inner')) $el = $el.parents('.navbar');
    if (!$el.length) return;
    if ($el.hasClass('navbar-hidden')) return;
    var className = 'navbar-hidden' + (animate ? ' navbar-transitioning' : '');
    $el.transitionEnd(function () {
      $el.removeClass('navbar-transitioning');
    });
    $el.addClass(className);
  },
  show: function show() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.navbar-hidden';
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var $el = (0, _dom2.default)(el);
    if ($el.hasClass('navbar-inner')) $el = $el.parents('.navbar');
    if (!$el.length) return;
    if (!$el.hasClass('navbar-hidden')) return;
    if (animate) {
      $el.addClass('navbar-transitioning');
      $el.transitionEnd(function () {
        $el.removeClass('navbar-transitioning');
      });
    }
    $el.removeClass('navbar-hidden');
  },
  getElByPage: function getElByPage(page) {
    var $pageEl = void 0;
    var $navbarEl = void 0;
    var pageData = void 0;
    if (page.$navbarEl || page.$el) {
      pageData = page;
      $pageEl = page.$el;
    } else {
      $pageEl = (0, _dom2.default)(page);
      if ($pageEl.length > 0) pageData = $pageEl[0].f7Page;
    }
    if (pageData && pageData.$navbarEl && pageData.$navbarEl.length > 0) {
      $navbarEl = pageData.$navbarEl;
    } else if ($pageEl) {
      $navbarEl = $pageEl.children('.navbar').children('.navbar-inner');
    }
    if (!$navbarEl || $navbarEl && $navbarEl.length === 0) return undefined;
    return $navbarEl[0];
  },
  getPageByEl: function getPageByEl(navbarInnerEl) {
    var $navbarInnerEl = (0, _dom2.default)(navbarInnerEl);
    if ($navbarInnerEl.hasClass('navbar')) {
      $navbarInnerEl = $navbarInnerEl.find('.navbar-inner');
      if ($navbarInnerEl.length > 1) return undefined;
    }
    return $navbarInnerEl[0].f7Page;
  },
  initHideNavbarOnScroll: function initHideNavbarOnScroll(pageEl, navbarInnerEl) {
    var app = this;
    var $pageEl = (0, _dom2.default)(pageEl);
    var $navbarEl = (0, _dom2.default)(navbarInnerEl || app.navbar.getElByPage(pageEl)).closest('.navbar');

    var previousScrollTop = void 0;
    var currentScrollTop = void 0;

    var scrollHeight = void 0;
    var offsetHeight = void 0;
    var reachEnd = void 0;
    var action = void 0;
    var navbarHidden = void 0;
    function handleScroll() {
      var scrollContent = this;
      if ($pageEl.hasClass('page-previous')) return;
      currentScrollTop = scrollContent.scrollTop;
      scrollHeight = scrollContent.scrollHeight;
      offsetHeight = scrollContent.offsetHeight;
      reachEnd = currentScrollTop + offsetHeight >= scrollHeight;
      navbarHidden = $navbarEl.hasClass('navbar-hidden');

      if (reachEnd) {
        if (app.params.navbar.showOnPageScrollEnd) {
          action = 'show';
        }
      } else if (previousScrollTop > currentScrollTop) {
        if (app.params.navbar.showOnPageScrollTop || currentScrollTop <= 44) {
          action = 'show';
        } else {
          action = 'hide';
        }
      } else if (currentScrollTop > 44) {
        action = 'hide';
      } else {
        action = 'show';
      }

      if (action === 'show' && navbarHidden) {
        app.navbar.show($navbarEl);
        navbarHidden = false;
      } else if (action === 'hide' && !navbarHidden) {
        app.navbar.hide($navbarEl);
        navbarHidden = true;
      }

      previousScrollTop = currentScrollTop;
    }
    $pageEl.on('scroll', '.page-content', handleScroll, true);
    $pageEl[0].f7ScrollNavbarHandler = handleScroll;
  }
};
exports.default = {
  name: 'navbar',
  create: function create() {
    var app = this;
    _utils2.default.extend(app, {
      navbar: {
        size: Navbar.size.bind(app),
        hide: Navbar.hide.bind(app),
        show: Navbar.show.bind(app),
        getElByPage: Navbar.getElByPage.bind(app),
        initHideNavbarOnScroll: Navbar.initHideNavbarOnScroll.bind(app)
      }
    });
  },

  params: {
    navbar: {
      scrollTopOnTitleClick: true,
      iosCenterTitle: true,
      hideOnPageScroll: false,
      showOnPageScrollEnd: true,
      showOnPageScrollTop: true
    }
  },
  on: {
    'panelBreakpoint resize': function onResize() {
      var app = this;
      if (app.theme !== 'ios') return;
      (0, _dom2.default)('.navbar').each(function (index, navbarEl) {
        app.navbar.size(navbarEl);
      });
    },
    pageBeforeRemove: function pageBeforeRemove(page) {
      if (page.$el[0].f7ScrollNavbarHandler) {
        page.$el.off('scroll', '.page-content', page.$el[0].f7ScrollNavbarHandler, true);
      }
    },
    pageBeforeIn: function pageBeforeIn(page) {
      var app = this;
      if (app.theme !== 'ios') return;
      var $navbarEl = void 0;
      var view = page.$el.parents('.view')[0].f7View;
      var navbarInnerEl = app.navbar.getElByPage(page);
      if (!navbarInnerEl) {
        $navbarEl = page.$el.parents('.view').children('.navbar');
      } else {
        $navbarEl = (0, _dom2.default)(navbarInnerEl).parents('.navbar');
      }
      if (page.$el.hasClass('no-navbar') || view.router.dynamicNavbar && !navbarInnerEl) {
        var animate = !!(page.pageFrom && page.router.history.length > 0);
        app.navbar.hide($navbarEl, animate);
      } else {
        app.navbar.show($navbarEl);
      }
    },
    pageReinit: function pageReinit(page) {
      var app = this;
      if (app.theme !== 'ios') return;
      var $navbarEl = (0, _dom2.default)(app.navbar.getElByPage(page));
      if (!$navbarEl || $navbarEl.length === 0) return;
      app.navbar.size($navbarEl);
    },
    pageInit: function pageInit(page) {
      var app = this;
      var $navbarEl = (0, _dom2.default)(app.navbar.getElByPage(page));
      if (!$navbarEl || $navbarEl.length === 0) return;
      if (app.theme === 'ios') {
        app.navbar.size($navbarEl);
      }
      if (app.params.navbar.hideOnPageScroll || page.$el.find('.hide-navbar-on-scroll').length || page.$el.hasClass('hide-navbar-on-scroll') || page.$el.find('.hide-bars-on-scroll').length || page.$el.hasClass('hide-bars-on-scroll')) {
        if (page.$el.find('.keep-navbar-on-scroll').length || page.$el.hasClass('keep-navbar-on-scroll') || page.$el.find('.keep-bars-on-scroll').length || page.$el.hasClass('keep-bars-on-scroll')) {
          return;
        }
        app.navbar.initHideNavbarOnScroll(page.el, $navbarEl[0]);
      }
    },
    modalOpen: function modalOpen(modal) {
      var app = this;
      if (app.theme !== 'ios') return;
      modal.$el.find('.navbar:not(.navbar-previous):not(.stacked)').each(function (index, navbarEl) {
        app.navbar.size(navbarEl);
      });
    },
    panelOpen: function panelOpen(panel) {
      var app = this;
      if (app.theme !== 'ios') return;
      panel.$el.find('.navbar:not(.navbar-previous):not(.stacked)').each(function (index, navbarEl) {
        app.navbar.size(navbarEl);
      });
    },
    panelSwipeOpen: function panelSwipeOpen(panel) {
      var app = this;
      if (app.theme !== 'ios') return;
      panel.$el.find('.navbar:not(.navbar-previous):not(.stacked)').each(function (index, navbarEl) {
        app.navbar.size(navbarEl);
      });
    },
    tabShow: function tabShow(tabEl) {
      var app = this;
      (0, _dom2.default)(tabEl).find('.navbar:not(.navbar-previous):not(.stacked)').each(function (index, navbarEl) {
        app.navbar.size(navbarEl);
      });
    }
  },
  clicks: {
    '.navbar .title': function onTitleClick($clickedEl) {
      var app = this;
      if (!app.params.navbar.scrollTopOnTitleClick) return;
      if ($clickedEl.closest('a').length > 0) {
        return;
      }
      var pageContent = void 0;
      // Find active page
      var navbar = $clickedEl.parents('.navbar');

      // Static Layout
      pageContent = navbar.parents('.page-content');

      if (pageContent.length === 0) {
        // Fixed Layout
        if (navbar.parents('.page').length > 0) {
          pageContent = navbar.parents('.page').find('.page-content');
        }
        // Through Layout
        if (pageContent.length === 0) {
          if (navbar.nextAll('.page-current:not(.stacked)').length > 0) {
            pageContent = navbar.nextAll('.page-current:not(.stacked)').find('.page-content');
          }
        }
      }
      if (pageContent && pageContent.length > 0) {
        // Check for tab
        if (pageContent.hasClass('tab')) {
          pageContent = pageContent.parent('.tabs').children('.page-content.tab-active');
        }
        if (pageContent.length > 0) pageContent.scrollTop(0, 300);
      }
    }
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = {
  setHighlight: function setHighlight(tabbarEl) {
    var app = this;
    if (app.theme !== 'md') return;

    var $tabbarEl = (0, _dom2.default)(tabbarEl);

    if ($tabbarEl.length === 0 || !($tabbarEl.hasClass('tabbar') || $tabbarEl.hasClass('tabbar-labels'))) return;

    if ($tabbarEl.find('.tab-link-highlight').length === 0) {
      $tabbarEl.children('.toolbar-inner').append('<span class="tab-link-highlight"></span>');
    }

    var $highlightEl = $tabbarEl.find('.tab-link-highlight');
    var $activeLink = $tabbarEl.find('.tab-link-active');
    var highlightWidth = void 0;
    var highlightTranslate = void 0;

    if ($tabbarEl.hasClass('tabbar-scrollable')) {
      highlightWidth = $activeLink[0].offsetWidth + 'px';
      highlightTranslate = $activeLink[0].offsetLeft + 'px';
    } else {
      var activeIndex = $activeLink.index();
      var tabLinksCount = $tabbarEl.find('.tab-link').length;
      highlightWidth = 100 / tabLinksCount + '%';
      highlightTranslate = (app.rtl ? -activeIndex : activeIndex) * 100 + '%';
    }

    $highlightEl.css('width', highlightWidth).transform('translate3d(' + highlightTranslate + ',0,0)');
  },
  init: function init(tabbarEl) {
    var app = this;
    app.toolbar.setHighlight(tabbarEl);
  },
  hide: function hide(el) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var $el = (0, _dom2.default)(el);
    if ($el.hasClass('toolbar-hidden')) return;
    var className = 'toolbar-hidden' + (animate ? ' toolbar-transitioning' : '');
    $el.transitionEnd(function () {
      $el.removeClass('toolbar-transitioning');
    });
    $el.addClass(className);
  },
  show: function show(el) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var $el = (0, _dom2.default)(el);
    if (!$el.hasClass('toolbar-hidden')) return;
    if (animate) {
      $el.addClass('toolbar-transitioning');
      $el.transitionEnd(function () {
        $el.removeClass('toolbar-transitioning');
      });
    }
    $el.removeClass('toolbar-hidden');
  },
  initHideToolbarOnScroll: function initHideToolbarOnScroll(pageEl) {
    var app = this;
    var $pageEl = (0, _dom2.default)(pageEl);
    var $toolbarEl = $pageEl.parents('.view').children('.toolbar');
    if ($toolbarEl.length === 0) {
      $toolbarEl = $pageEl.find('.toolbar');
    }
    if ($toolbarEl.length === 0) {
      $toolbarEl = $pageEl.parents('.views').children('.tabbar, .tabbar-labels');
    }
    if ($toolbarEl.length === 0) {
      return;
    }

    var previousScrollTop = void 0;
    var currentScrollTop = void 0;

    var scrollHeight = void 0;
    var offsetHeight = void 0;
    var reachEnd = void 0;
    var action = void 0;
    var toolbarHidden = void 0;
    function handleScroll() {
      var scrollContent = this;
      if ($pageEl.hasClass('page-previous')) return;
      currentScrollTop = scrollContent.scrollTop;
      scrollHeight = scrollContent.scrollHeight;
      offsetHeight = scrollContent.offsetHeight;
      reachEnd = currentScrollTop + offsetHeight >= scrollHeight;
      toolbarHidden = $toolbarEl.hasClass('toolbar-hidden');

      if (reachEnd) {
        if (app.params.toolbar.showOnPageScrollEnd) {
          action = 'show';
        }
      } else if (previousScrollTop > currentScrollTop) {
        if (app.params.toolbar.showOnPageScrollTop || currentScrollTop <= 44) {
          action = 'show';
        } else {
          action = 'hide';
        }
      } else if (currentScrollTop > 44) {
        action = 'hide';
      } else {
        action = 'show';
      }

      if (action === 'show' && toolbarHidden) {
        app.toolbar.show($toolbarEl);
        toolbarHidden = false;
      } else if (action === 'hide' && !toolbarHidden) {
        app.toolbar.hide($toolbarEl);
        toolbarHidden = true;
      }

      previousScrollTop = currentScrollTop;
    }
    $pageEl.on('scroll', '.page-content', handleScroll, true);
    $pageEl[0].f7ScrollToolbarHandler = handleScroll;
  }
};
exports.default = {
  name: 'toolbar',
  create: function create() {
    var app = this;
    _utils2.default.extend(app, {
      toolbar: {
        hide: Toolbar.hide.bind(app),
        show: Toolbar.show.bind(app),
        setHighlight: Toolbar.setHighlight.bind(app),
        initHideToolbarOnScroll: Toolbar.initHideToolbarOnScroll.bind(app),
        init: Toolbar.init.bind(app)
      }
    });
  },

  params: {
    toolbar: {
      hideOnPageScroll: false,
      showOnPageScrollEnd: true,
      showOnPageScrollTop: true
    }
  },
  on: {
    pageBeforeRemove: function pageBeforeRemove(page) {
      if (page.$el[0].f7ScrollToolbarHandler) {
        page.$el.off('scroll', '.page-content', page.$el[0].f7ScrollToolbarHandler, true);
      }
    },
    pageBeforeIn: function pageBeforeIn(page) {
      var app = this;
      if (app.theme !== 'ios') return;
      var $toolbarEl = page.$el.parents('.view').children('.toolbar');
      if ($toolbarEl.length === 0) {
        $toolbarEl = page.$el.find('.toolbar');
      }
      if ($toolbarEl.length === 0) {
        $toolbarEl = page.$el.parents('.views').children('.tabbar, .tabbar-labels');
      }
      if ($toolbarEl.length === 0) {
        return;
      }
      if (page.$el.hasClass('no-toolbar')) {
        app.toolbar.hide($toolbarEl);
      } else {
        app.toolbar.show($toolbarEl);
      }
    },
    pageInit: function pageInit(page) {
      var app = this;
      page.$el.find('.tabbar, .tabbar-labels').each(function (index, tabbarEl) {
        app.toolbar.init(tabbarEl);
      });
      if (app.params.toolbar.hideOnPageScroll || page.$el.find('.hide-toolbar-on-scroll').length || page.$el.hasClass('hide-toolbar-on-scroll') || page.$el.find('.hide-bars-on-scroll').length || page.$el.hasClass('hide-bars-on-scroll')) {
        if (page.$el.find('.keep-toolbar-on-scroll').length || page.$el.hasClass('keep-toolbar-on-scroll') || page.$el.find('.keep-bars-on-scroll').length || page.$el.hasClass('keep-bars-on-scroll')) {
          return;
        }
        app.toolbar.initHideToolbarOnScroll(page.el);
      }
    },
    init: function init() {
      var app = this;
      app.root.find('.tabbar, .tabbar-labels').each(function (index, tabbarEl) {
        app.toolbar.init(tabbarEl);
      });
    }
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'subnavbar',
  on: {
    pageInit: function pageInit(page) {
      if (page.$navbarEl && page.$navbarEl.length && page.$navbarEl.find('.subnavbar').length) {
        page.$el.addClass('page-with-subnavbar');
      }
      if (page.$el.find('.subnavbar').length) {
        page.$el.addClass('page-with-subnavbar');
      }
    }
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _touchRippleClass = __webpack_require__(49);

var _touchRippleClass2 = _interopRequireDefault(_touchRippleClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'touch-ripple',
  static: {
    TouchRipple: _touchRippleClass2.default
  },
  create: function create() {
    var app = this;
    app.touchRipple = {
      create: function create() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new (Function.prototype.bind.apply(_touchRippleClass2.default, [null].concat(args)))();
      }
    };
  }
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TouchRipple = function () {
  function TouchRipple($el, x, y) {
    _classCallCheck(this, TouchRipple);

    var ripple = this;
    if (!$el) return undefined;
    var box = $el[0].getBoundingClientRect();
    var center = {
      x: x - box.left,
      y: y - box.top
    };
    var width = box.width;
    var height = box.height;
    var diameter = Math.max(Math.pow(Math.pow(height, 2) + Math.pow(width, 2), 0.5), 48);

    ripple.$rippleWaveEl = (0, _dom2.default)('<div class="ripple-wave" style="width: ' + diameter + 'px; height: ' + diameter + 'px; margin-top:-' + diameter / 2 + 'px; margin-left:-' + diameter / 2 + 'px; left:' + center.x + 'px; top:' + center.y + 'px;"></div>');

    $el.prepend(ripple.$rippleWaveEl);

    /* eslint no-underscore-dangle: ["error", { "allow": ["_clientLeft"] }] */
    ripple._clientLeft = ripple.$rippleWaveEl[0].clientLeft;

    ripple.rippleTransform = 'translate3d(' + (-center.x + width / 2) + 'px, ' + (-center.y + height / 2) + 'px, 0) scale(1)';

    ripple.$rippleWaveEl.transform(ripple.rippleTransform);

    return ripple;
  }

  _createClass(TouchRipple, [{
    key: 'onRemove',
    value: function onRemove() {
      var ripple = this;
      ripple.$rippleWaveEl.remove();
      Object.keys(ripple).forEach(function (key) {
        ripple[key] = null;
        delete ripple[key];
      });
      ripple = null;
    }
  }, {
    key: 'remove',
    value: function remove() {
      var ripple = this;
      if (ripple.removing) return;
      var $rippleWaveEl = this.$rippleWaveEl;
      var rippleTransform = this.rippleTransform;
      var removeTimeout = _utils2.default.nextTick(function () {
        ripple.onRemove();
      }, 400);
      ripple.removing = true;
      $rippleWaveEl.addClass('ripple-wave-fill').transform(rippleTransform.replace('scale(1)', 'scale(1.01)')).transitionEnd(function () {
        clearTimeout(removeTimeout);
        _utils2.default.nextFrame(function () {
          $rippleWaveEl.addClass('ripple-wave-out').transform(rippleTransform.replace('scale(1)', 'scale(1.01)'));

          removeTimeout = _utils2.default.nextTick(function () {
            ripple.onRemove();
          }, 700);

          $rippleWaveEl.transitionEnd(function () {
            clearTimeout(removeTimeout);
            ripple.onRemove();
          });
        });
      });
    }
  }]);

  return TouchRipple;
}();

exports.default = TouchRipple;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modalClass = __webpack_require__(11);

var _modalClass2 = _interopRequireDefault(_modalClass);

var _customModalClass = __webpack_require__(51);

var _customModalClass2 = _interopRequireDefault(_customModalClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'modal',
  static: {
    Modal: _modalClass2.default,
    CustomModal: _customModalClass2.default
  },
  create: function create() {
    var app = this;
    app.customModal = {
      create: function create(params) {
        return new _customModalClass2.default(app, params);
      }
    };
  },

  params: {
    modal: {
      moveToRoot: true,
      queueDialogs: true
    }
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _modalClass = __webpack_require__(11);

var _modalClass2 = _interopRequireDefault(_modalClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomModal = function (_Modal) {
  _inherits(CustomModal, _Modal);

  function CustomModal(app, params) {
    var _ret3;

    _classCallCheck(this, CustomModal);

    var extendedParams = _utils2.default.extend({
      backdrop: true,
      closeByBackdropClick: true,
      on: {}
    }, params);

    // Extends with open/close Modal methods;

    var _this = _possibleConstructorReturn(this, (CustomModal.__proto__ || Object.getPrototypeOf(CustomModal)).call(this, app, extendedParams));

    var customModal = _this;

    customModal.params = extendedParams;

    // Find Element
    var $el = void 0;
    if (!customModal.params.el) {
      $el = (0, _dom2.default)(customModal.params.content);
    } else {
      $el = (0, _dom2.default)(customModal.params.el);
    }

    if ($el && $el.length > 0 && $el[0].f7Modal) {
      var _ret;

      return _ret = $el[0].f7Modal, _possibleConstructorReturn(_this, _ret);
    }

    if ($el.length === 0) {
      var _ret2;

      return _ret2 = customModal.destroy(), _possibleConstructorReturn(_this, _ret2);
    }
    var $backdropEl = void 0;
    if (customModal.params.backdrop) {
      $backdropEl = app.root.children('.custom-modal-backdrop');
      if ($backdropEl.length === 0) {
        $backdropEl = (0, _dom2.default)('<div class="custom-modal-backdrop"></div>');
        app.root.append($backdropEl);
      }
    }

    function handleClick(e) {
      if (!customModal || customModal.destroyed) return;
      if ($backdropEl && e.target === $backdropEl[0]) {
        customModal.close();
      }
    }

    customModal.on('customModalOpened', function () {
      if (customModal.params.closeByBackdropClick && customModal.params.backdrop) {
        app.on('click', handleClick);
      }
    });
    customModal.on('customModalClose', function () {
      if (customModal.params.closeByBackdropClick && customModal.params.backdrop) {
        app.off('click', handleClick);
      }
    });

    _utils2.default.extend(customModal, {
      app: app,
      $el: $el,
      el: $el[0],
      $backdropEl: $backdropEl,
      backdropEl: $backdropEl && $backdropEl[0],
      type: 'customModal'
    });

    $el[0].f7Modal = customModal;

    return _ret3 = customModal, _possibleConstructorReturn(_this, _ret3);
  }

  return CustomModal;
}(_modalClass2.default);

exports.default = CustomModal;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popupClass = __webpack_require__(53);

var _popupClass2 = _interopRequireDefault(_popupClass);

var _modalMethods = __webpack_require__(54);

var _modalMethods2 = _interopRequireDefault(_modalMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'popup',
  params: {
    popup: {
      backdrop: true,
      closeByBackdropClick: true
    }
  },
  static: {
    Popup: _popupClass2.default
  },
  create: function create() {
    var app = this;
    app.popup = (0, _modalMethods2.default)({
      app: app,
      constructor: _popupClass2.default,
      defaultSelector: '.popup.modal-in'
    });
  },

  clicks: {
    '.popup-open': function openPopup($clickedEl) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var app = this;
      app.popup.open(data.popup, data.animate);
    },
    '.popup-close': function closePopup($clickedEl) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var app = this;
      app.popup.close(data.popup, data.animate);
    }
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _modalClass = __webpack_require__(11);

var _modalClass2 = _interopRequireDefault(_modalClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_Modal) {
  _inherits(Popup, _Modal);

  function Popup(app, params) {
    var _ret3;

    _classCallCheck(this, Popup);

    var extendedParams = _utils2.default.extend({ on: {} }, app.params.popup, params);

    // Extends with open/close Modal methods;

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, app, extendedParams));

    var popup = _this;

    popup.params = extendedParams;

    // Find Element
    var $el = void 0;
    if (!popup.params.el) {
      $el = (0, _dom2.default)(popup.params.content);
    } else {
      $el = (0, _dom2.default)(popup.params.el);
    }

    if ($el && $el.length > 0 && $el[0].f7Modal) {
      var _ret;

      return _ret = $el[0].f7Modal, _possibleConstructorReturn(_this, _ret);
    }

    if ($el.length === 0) {
      var _ret2;

      return _ret2 = popup.destroy(), _possibleConstructorReturn(_this, _ret2);
    }

    var $backdropEl = void 0;
    if (popup.params.backdrop) {
      $backdropEl = app.root.children('.popup-backdrop');
      if ($backdropEl.length === 0) {
        $backdropEl = (0, _dom2.default)('<div class="popup-backdrop"></div>');
        app.root.append($backdropEl);
      }
    }

    _utils2.default.extend(popup, {
      app: app,
      $el: $el,
      el: $el[0],
      $backdropEl: $backdropEl,
      backdropEl: $backdropEl && $backdropEl[0],
      type: 'popup'
    });

    function handleClick(e) {
      var target = e.target;
      var $target = (0, _dom2.default)(target);
      if ($target.closest(popup.el).length === 0) {
        if (popup.params.closeByBackdropClick && popup.params.backdrop && popup.backdropEl && popup.backdropEl === target) {
          popup.close();
        }
      }
    }

    popup.on('popupOpened', function () {
      if (popup.params.closeByBackdropClick) {
        app.on('click', handleClick);
      }
    });
    popup.on('popupClose', function () {
      if (popup.params.closeByBackdropClick) {
        app.off('click', handleClick);
      }
    });

    $el[0].f7Modal = popup;

    return _ret3 = popup, _possibleConstructorReturn(_this, _ret3);
  }

  return Popup;
}(_modalClass2.default);

exports.default = Popup;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultSelector = parameters.defaultSelector,
      constructor = parameters.constructor,
      app = parameters.app;

  var methods = _utils2.default.extend((0, _constructorMethods2.default)({
    defaultSelector: defaultSelector,
    constructor: constructor,
    app: app,
    domProp: 'f7Modal'
  }), {
    open: function open(el, animate) {
      var $el = (0, _dom2.default)(el);
      var instance = $el[0].f7Modal;
      if (!instance) instance = new constructor(app, { el: $el });
      return instance.open(animate);
    },
    close: function close() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;
      var animate = arguments[1];

      var $el = (0, _dom2.default)(el);
      if ($el.length === 0) return undefined;
      var instance = $el[0].f7Modal;
      if (!instance) instance = new constructor(app, { el: $el });
      return instance.close(animate);
    }
  });
  return methods;
};

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _constructorMethods = __webpack_require__(55);

var _constructorMethods2 = _interopRequireDefault(_constructorMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultSelector = parameters.defaultSelector,
      constructor = parameters.constructor,
      domProp = parameters.domProp,
      app = parameters.app,
      addMethods = parameters.addMethods;

  var methods = {
    create: function create() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (app) return new (Function.prototype.bind.apply(constructor, [null].concat([app], args)))();
      return new (Function.prototype.bind.apply(constructor, [null].concat(args)))();
    },
    get: function get() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;

      if (el instanceof constructor) return el;
      var $el = (0, _dom2.default)(el);
      if ($el.length === 0) return undefined;
      return $el[0][domProp];
    },
    destroy: function destroy(el) {
      var instance = methods.get(el);
      if (instance && instance.destroy) return instance.destroy();
      return undefined;
    }
  };
  if (addMethods && Array.isArray(addMethods)) {
    addMethods.forEach(function (methodName) {
      methods[methodName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSelector;

        var instance = methods.get(el);
        if (instance && instance[methodName]) return instance[methodName].apply(instance, args);
        return undefined;
      };
    });
  }
  return methods;
};

var _dom = __webpack_require__(1);

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = __webpack_require__(3);

var _marionette = __webpack_require__(7);

var _template = __webpack_require__(58);

var _template2 = _interopRequireDefault(_template);

var _view = __webpack_require__(19);

var _view2 = _interopRequireDefault(_view);

var _view3 = __webpack_require__(62);

var _view4 = _interopRequireDefault(_view3);

var _view5 = __webpack_require__(64);

var _view6 = _interopRequireDefault(_view5);

var _framework = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone.View.extend({
  template: _framework.Template7.compile(_template2.default),

  events: {
    'click .popup-link': 'onPopupLinkClick',
    'click .login-link': 'onLoginLinkClick',
    'click .single-link': 'onSingleLinkClick'
  },

  onLoginLinkClick: function onLoginLinkClick(e) {
    e.preventDefault();
    (0, _marionette.pushPage)(new _view6.default(), 'login');
  },
  onSingleLinkClick: function onSingleLinkClick(e) {
    e.preventDefault();
    (0, _marionette.pushPage)(new _view2.default());
  },
  onPopupLinkClick: function onPopupLinkClick(e) {
    e.preventDefault();
    (0, _marionette.showPopup)(new _view4.default());
  }
});

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"left\"></div>\r\n    <div class=\"title sliding\">Hello</div>\r\n    <div class=\"right\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"block-title\">Welcome</div>\r\n  <div class=\"block\">\r\n    <p>Enjoy using Backbone/Marionette with the awesome Framework7!</p>\r\n  </div>\r\n\r\n  <div class=\"block-title\">Examples</div>\r\n  <div class=\"list\">\r\n    <ul>\r\n      <li class=\"item-content\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-title\">Item with no link</div>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" class=\"item-link item-content single-link\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"item-title\">Open page in this view</div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" class=\"item-link item-content popup-link\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"item-title\">Open single popup</div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\" class=\"item-link item-content login-link\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"item-title\">Open login/register popup</div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"left\">\r\n      <a class=\"link back icon-only\">\r\n        <i class=\"icon icon-back\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"title\">Single</div>\r\n  </div>\r\n</div>\r\n<div class=\"page-content\">\r\n  <div class=\"block\">\r\n    <p>This is an example of a page loaded from a main page.</p>\r\n    <div class=\"list\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"#\" class=\"item-link item-content second-link\">\r\n            <div class=\"item-inner\">\r\n              <div class=\"item-title\">Open second level page in this view</div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = __webpack_require__(3);

var _template = __webpack_require__(61);

var _template2 = _interopRequireDefault(_template);

var _framework = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone.View.extend({
  template: _framework.Template7.compile(_template2.default),

  attributes: {
    id: 'secondlevel',
    class: 'page'
  }
});

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"left\">\r\n      <a class=\"link back icon-only\">\r\n        <i class=\"icon icon-back\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"title\">Second Level</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"block\">\r\n    <p>This is an second level nested page loaded from a child page.</p>\r\n  </div>\r\n</div>";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = __webpack_require__(3);

var _template = __webpack_require__(63);

var _template2 = _interopRequireDefault(_template);

var _framework = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone.View.extend({
  template: _framework.Template7.compile(_template2.default),

  attributes: {
    id: 'popup'
  }
});

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"left\">\r\n      <a href=\"#\" class=\"link popup-close\">\r\n        <span>Close</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"title\">Popup</div>\r\n    <div class=\"right\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"block\">\r\n  <p>This is an example on a single popup opened from a view</p>\r\n</div>";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = __webpack_require__(3);

var _marionette = __webpack_require__(7);

var _template = __webpack_require__(65);

var _template2 = _interopRequireDefault(_template);

var _view = __webpack_require__(66);

var _view2 = _interopRequireDefault(_view);

var _framework = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone.View.extend({
  template: _framework.Template7.compile(_template2.default),

  attributes: {
    id: 'login',
    class: 'page'
  },

  events: {
    'click .register-link': function clickRegisterLink(e) {
      e.preventDefault();
      (0, _marionette.pushPage)(new _view2.default());
    }
  }
});

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"title\">Login</div>\r\n    <div class=\"right\">\r\n      <a href=\"#\" class=\"link popup-close\">\r\n        <span>Close</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"list with-labels\">\r\n    <ul>\r\n      <li>\r\n        <div class=\"item-content\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"item-title label\">Email</div>\r\n            <div class=\"item-input\">\r\n              <input type=\"email\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div class=\"item-content\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"item-title label\">Password</div>\r\n            <div class=\"item-input\">\r\n              <input type=\"password\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"block\">\r\n    <a href=\"#\" class=\"button button-big button-round register-link\">Signin</a>\r\n  </div>\r\n\r\n  <div class=\"block\">\r\n    <p align=\"center\"><a href=\"register\" class=\"register-link\">Signup</a></p>\r\n  </div>\r\n</div>";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = __webpack_require__(3);

var _template = __webpack_require__(67);

var _template2 = _interopRequireDefault(_template);

var _framework = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone.View.extend({
  template: _framework.Template7.compile(_template2.default),

  attributes: {
    id: 'register',
    class: 'page'
  }
});

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"left\">\r\n      <a href=\"#\" class=\"link back icon-only\">\r\n        <i class=\"icon icon-back light\"></i>\r\n      </a>\r\n    </div>\r\n    <div class=\"title\">Register</div>\r\n    <div class=\"right\">\r\n      <a href=\"#\" class=\"link popup-close\">\r\n        <span>Close</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"list with-labels\">\r\n    <ul>\r\n      <li>\r\n        <div class=\"item-content\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"item-title label\">Email</div>\r\n            <div class=\"item-input\">\r\n              <input type=\"email\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li>\r\n        <div class=\"item-content\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"item-title label\">Password</div>\r\n            <div class=\"item-input\">\r\n              <input type=\"password\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"block\">\r\n    <a href=\"#\" class=\"button button-big button-round\">Signup</a>\r\n  </div>\r\n</div>\r\n";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backbone = __webpack_require__(3);

var _marionette = __webpack_require__(7);

var _template = __webpack_require__(69);

var _template2 = _interopRequireDefault(_template);

var _view = __webpack_require__(19);

var _view2 = _interopRequireDefault(_view);

var _framework = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _backbone.View.extend({
  template: _framework.Template7.compile(_template2.default),

  attributes: {
    id: 'tab2',
    class: 'page'
  },

  events: {
    'click .single-link': 'onSingleLinkClick'
  },

  onSingleLinkClick: function onSingleLinkClick(e) {
    e.preventDefault();
    (0, _marionette.pushPage)(new _view2.default());
  }
});

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <div class=\"navbar-inner\">\r\n    <div class=\"left\"></div>\r\n    <div class=\"title sliding\">Tab 2</div>\r\n    <div class=\"right\"></div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"page-content\">\r\n  <div class=\"block\">\r\n    <p>This is another tab with his own navigation and pages.</p>\r\n    <p><a href=\"#\" class=\"single-link\">Load new page in this tab</a></p>\r\n  </div>\r\n</div>";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map