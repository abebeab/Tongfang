;
var newFooter = (function ($) {
    var footer = {};

    footer.init = function () {
        $(document).ready(function () {
            var $headQuarterDropdown = $(".footer-body .contact-group__items--dropdown-styled-select");
            var $headQuarterDropdownOptions = $(".footer-body .contact-group__items--dropdown-styled-select li");

            var selectedOption = $headQuarterDropdown.find('.selected-option').text().trim();
            var $addressWrapper = $('.contact-group__items--dropdown .address-wrapper');
            $addressWrapper.find('.address').hide();
            $addressWrapper.find(".address[data-locationName='" + selectedOption + "']").show();
            $headQuarterDropdown.find('.dropdown').hide();

            $headQuarterDropdown.on('click', function (e) {
                $(this).find('.dropdown').toggle();
                if (!$(this).find('.dropdown').is(':visible')) {
                    $headQuarterDropdown.find('.dropdown-arrow').removeClass('rotate-up');
                    $headQuarterDropdown.removeClass('bottom-rounded-border');
                } else {
                    $headQuarterDropdown.addClass('bottom-rounded-border');
                    $headQuarterDropdown.find('.dropdown-arrow').addClass('rotate-up');
                }
            });

            $headQuarterDropdownOptions.on('click', function (e) {
                var selectedOption = $(this).attr('data-locationName');
                var $addressWrapper = $('.contact-group__items--dropdown .address-wrapper')
                $headQuarterDropdown.find('.selected-option').text(selectedOption);
                $addressWrapper.find('.address').hide();
                $addressWrapper.find(".address[data-locationName='" + selectedOption + "']").show();
            });

            let num = document.body.clientWidth;
            if (num > 500) {
                $(".socail-item").hover(function () {
                    $(this).find(".socail-qr-code").css("display", "block");
                }, function () {
                    $(this).find(".socail-qr-code").css("display", "none");
                });
            } else {
                $(".socail-item").click(function () {
                    var $this = $(this);
                    var qaCode = $this.find(".socail-qr-code");
                    if (qaCode.length > 0) {
                        var popUp = $(".add-pop-up-windows");
                        popUp.css("display", "flex");
                        popUp.find(".mobile-qr-img").css("background-image", qaCode.css("background-image"))
                    }
                });
                $(".add-pop-up-windows").click(function () {
                    $(".add-pop-up-windows").css("display", "none");
                });
            }
            // 根据是否设置hilook站点显示对应的icon
            if($('body').hasClass('hilook-page')){
                $('.hilook-footer-icon').show()
            }else {
                $('.default-footer-icon').show()
            }
            $('body').on('click', function (e) {
                if ($headQuarterDropdown.has(e.target).length == 0) {
                    $headQuarterDropdown.find('.dropdown').hide();
                    $headQuarterDropdown.removeClass('bottom-rounded-border');
                    $headQuarterDropdown.find('.dropdown-arrow').removeClass('rotate-up');
                }
            });
            HiAnalyticsCn.clickDownLazy('.footer-navigation-body a',isCnAnalytics);
        });
    };

    return footer;
}($));
//contact-group__items--dropdown-styled-select
newFooter.init();

var footer = (function($) {
    var footer = {};

    footer.init = function() {
        $(document).ready(function() {
            var $headQuarterDropdown = $(".hiknow-footer .contact-group__items--dropdown-styled-select");
            var $headQuarterDropdownOptions = $(".hiknow-footer .contact-group__items--dropdown-styled-select li");
            var selectedOption = $headQuarterDropdown.find('.selected-option').text();
            var $addressWrapper = $('.contact-group__items--dropdown .address-wrapper');
             $addressWrapper.find('.address').hide();
            setTimeout(function(){
                $addressWrapper.find(".address[data-locationName='" + selectedOption + "']").show();
            }, 100)
            $headQuarterDropdown.find('.dropdown').hide();
            $headQuarterDropdown.on('click', function(e) {
                $(this).find('.dropdown').toggle();
                if (!$(this).find('.dropdown').is(':visible')) {
                    $headQuarterDropdown.find('.dropdown-arrow').removeClass('rotate-up');
                    $headQuarterDropdown.removeClass('bottom-rounded-border');
                } else {
                    $headQuarterDropdown.addClass('bottom-rounded-border');
                    $headQuarterDropdown.find('.dropdown-arrow').addClass('rotate-up');
                }
            });

            $headQuarterDropdownOptions.on('click', function(e) {
                var selectedOption = $(this).attr('data-locationName');
                var $addressWrapper = $('.contact-group__items--dropdown .address-wrapper')
                $headQuarterDropdown.find('.selected-option').text(selectedOption);
                $addressWrapper.find('.address').hide();
                $addressWrapper.find(".address[data-locationName='" + selectedOption + "']").show();
            });

            $('body').on('click', function(e) {
                if ($headQuarterDropdown.has(e.target).length == 0) {
                    $headQuarterDropdown.find('.dropdown').hide();
                    $headQuarterDropdown.removeClass('bottom-rounded-border');
                    $headQuarterDropdown.find('.dropdown-arrow').removeClass('rotate-up');
                }
            });

            $(".qrcode-out").hide();
            $(".wechat-in").hover(function() {
                $(".qrcode-out").show();
            }, function() {
                $(".qrcode-out").hide();
            });
        });
    };

    return footer;
}($));

footer.init();
/**!

 @license
 handlebars v4.1.2

Copyright (C) 2011-2017 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsRuntime = __webpack_require__(2);

	var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

	// Compiler imports

	var _handlebarsCompilerAst = __webpack_require__(35);

	var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

	var _handlebarsCompilerBase = __webpack_require__(36);

	var _handlebarsCompilerCompiler = __webpack_require__(41);

	var _handlebarsCompilerJavascriptCompiler = __webpack_require__(42);

	var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

	var _handlebarsCompilerVisitor = __webpack_require__(39);

	var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	var _create = _handlebarsRuntime2['default'].create;
	function create() {
	  var hb = _create();

	  hb.compile = function (input, options) {
	    return _handlebarsCompilerCompiler.compile(input, options, hb);
	  };
	  hb.precompile = function (input, options) {
	    return _handlebarsCompilerCompiler.precompile(input, options, hb);
	  };

	  hb.AST = _handlebarsCompilerAst2['default'];
	  hb.Compiler = _handlebarsCompilerCompiler.Compiler;
	  hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
	  hb.Parser = _handlebarsCompilerBase.parser;
	  hb.parse = _handlebarsCompilerBase.parse;

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst.Visitor = _handlebarsCompilerVisitor2['default'];

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(4);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(21);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(6);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(22);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(34);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(10);

	var _decorators = __webpack_require__(18);

	var _logger = __webpack_require__(20);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.1.2';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(7)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(9);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(11);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(12);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(13);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(14);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(15);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(16);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(17);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    if (!obj) {
	      return obj;
	    }
	    if (field === 'constructor' && !obj.propertyIsEnumerable(field)) {
	      return undefined;
	    }
	    return obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(19);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(23)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(5);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(4);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(24), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);
	module.exports = __webpack_require__(30).Object.seal;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(26);

	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(28)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(33);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(29)
	  , core      = __webpack_require__(30)
	  , ctx       = __webpack_require__(31)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(32);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var AST = {
	  // Public API used to evaluate derived attributes regarding AST nodes
	  helpers: {
	    // a mustache is definitely a helper if:
	    // * it is an eligible helper, and
	    // * it has at least one parameter or hash segment
	    helperExpression: function helperExpression(node) {
	      return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
	    },

	    scopedId: function scopedId(path) {
	      return (/^\.|this\b/.test(path.original)
	      );
	    },

	    // an ID is simple if it only has one part, and that part is not
	    // `..` or `this`.
	    simpleId: function simpleId(path) {
	      return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
	    }
	  }
	};

	// Must be exported as an object rather than the root of the module as the jison lexer
	// must modify the object to operate properly.
	exports['default'] = AST;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _interopRequireWildcard = __webpack_require__(3)['default'];

	exports.__esModule = true;
	exports.parse = parse;

	var _parser = __webpack_require__(37);

	var _parser2 = _interopRequireDefault(_parser);

	var _whitespaceControl = __webpack_require__(38);

	var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

	var _helpers = __webpack_require__(40);

	var Helpers = _interopRequireWildcard(_helpers);

	var _utils = __webpack_require__(5);

	exports.parser = _parser2['default'];

	var yy = {};
	_utils.extend(yy, Helpers);

	function parse(input, options) {
	  // Just return if an already-compiled AST was passed in.
	  if (input.type === 'Program') {
	    return input;
	  }

	  _parser2['default'].yy = yy;

	  // Altering the shared object here, but this is ok as parser is a sync operation
	  yy.locInfo = function (locInfo) {
	    return new yy.SourceLocation(options && options.srcName, locInfo);
	  };

	  var strip = new _whitespaceControl2['default'](options);
	  return strip.accept(_parser2['default'].parse(input));
	}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// File ignored in coverage tests via setting in .istanbul.yml
	/* Jison generated parser */
	"use strict";

	exports.__esModule = true;
	var handlebars = (function () {
	    var parser = { trace: function trace() {},
	        yy: {},
	        symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
	        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
	        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
	        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {

	            var $0 = $$.length - 1;
	            switch (yystate) {
	                case 1:
	                    return $$[$0 - 1];
	                    break;
	                case 2:
	                    this.$ = yy.prepareProgram($$[$0]);
	                    break;
	                case 3:
	                    this.$ = $$[$0];
	                    break;
	                case 4:
	                    this.$ = $$[$0];
	                    break;
	                case 5:
	                    this.$ = $$[$0];
	                    break;
	                case 6:
	                    this.$ = $$[$0];
	                    break;
	                case 7:
	                    this.$ = $$[$0];
	                    break;
	                case 8:
	                    this.$ = $$[$0];
	                    break;
	                case 9:
	                    this.$ = {
	                        type: 'CommentStatement',
	                        value: yy.stripComment($$[$0]),
	                        strip: yy.stripFlags($$[$0], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 10:
	                    this.$ = {
	                        type: 'ContentStatement',
	                        original: $$[$0],
	                        value: $$[$0],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 11:
	                    this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 12:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
	                    break;
	                case 13:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
	                    break;
	                case 14:
	                    this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
	                    break;
	                case 15:
	                    this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 16:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 17:
	                    this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
	                    break;
	                case 18:
	                    this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
	                    break;
	                case 19:
	                    var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
	                        program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
	                    program.chained = true;

	                    this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

	                    break;
	                case 20:
	                    this.$ = $$[$0];
	                    break;
	                case 21:
	                    this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
	                    break;
	                case 22:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 23:
	                    this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
	                    break;
	                case 24:
	                    this.$ = {
	                        type: 'PartialStatement',
	                        name: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        indent: '',
	                        strip: yy.stripFlags($$[$0 - 4], $$[$0]),
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 25:
	                    this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
	                    break;
	                case 26:
	                    this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
	                    break;
	                case 27:
	                    this.$ = $$[$0];
	                    break;
	                case 28:
	                    this.$ = $$[$0];
	                    break;
	                case 29:
	                    this.$ = {
	                        type: 'SubExpression',
	                        path: $$[$0 - 3],
	                        params: $$[$0 - 2],
	                        hash: $$[$0 - 1],
	                        loc: yy.locInfo(this._$)
	                    };

	                    break;
	                case 30:
	                    this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 31:
	                    this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 32:
	                    this.$ = yy.id($$[$0 - 1]);
	                    break;
	                case 33:
	                    this.$ = $$[$0];
	                    break;
	                case 34:
	                    this.$ = $$[$0];
	                    break;
	                case 35:
	                    this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
	                    break;
	                case 36:
	                    this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
	                    break;
	                case 37:
	                    this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
	                    break;
	                case 38:
	                    this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
	                    break;
	                case 39:
	                    this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
	                    break;
	                case 40:
	                    this.$ = $$[$0];
	                    break;
	                case 41:
	                    this.$ = $$[$0];
	                    break;
	                case 42:
	                    this.$ = yy.preparePath(true, $$[$0], this._$);
	                    break;
	                case 43:
	                    this.$ = yy.preparePath(false, $$[$0], this._$);
	                    break;
	                case 44:
	                    $$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
	                    break;
	                case 45:
	                    this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
	                    break;
	                case 46:
	                    this.$ = [];
	                    break;
	                case 47:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 48:
	                    this.$ = [$$[$0]];
	                    break;
	                case 49:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 50:
	                    this.$ = [];
	                    break;
	                case 51:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 58:
	                    this.$ = [];
	                    break;
	                case 59:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 64:
	                    this.$ = [];
	                    break;
	                case 65:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 70:
	                    this.$ = [];
	                    break;
	                case 71:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 78:
	                    this.$ = [];
	                    break;
	                case 79:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 82:
	                    this.$ = [];
	                    break;
	                case 83:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 86:
	                    this.$ = [];
	                    break;
	                case 87:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 90:
	                    this.$ = [];
	                    break;
	                case 91:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 94:
	                    this.$ = [];
	                    break;
	                case 95:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 98:
	                    this.$ = [$$[$0]];
	                    break;
	                case 99:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	                case 100:
	                    this.$ = [$$[$0]];
	                    break;
	                case 101:
	                    $$[$0 - 1].push($$[$0]);
	                    break;
	            }
	        },
	        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
	        defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
	        parseError: function parseError(str, hash) {
	            throw new Error(str);
	        },
	        parse: function parse(input) {
	            var self = this,
	                stack = [0],
	                vstack = [null],
	                lstack = [],
	                table = this.table,
	                yytext = "",
	                yylineno = 0,
	                yyleng = 0,
	                recovering = 0,
	                TERROR = 2,
	                EOF = 1;
	            this.lexer.setInput(input);
	            this.lexer.yy = this.yy;
	            this.yy.lexer = this.lexer;
	            this.yy.parser = this;
	            if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
	            var yyloc = this.lexer.yylloc;
	            lstack.push(yyloc);
	            var ranges = this.lexer.options && this.lexer.options.ranges;
	            if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
	            function popStack(n) {
	                stack.length = stack.length - 2 * n;
	                vstack.length = vstack.length - n;
	                lstack.length = lstack.length - n;
	            }
	            function lex() {
	                var token;
	                token = self.lexer.lex() || 1;
	                if (typeof token !== "number") {
	                    token = self.symbols_[token] || token;
	                }
	                return token;
	            }
	            var symbol,
	                preErrorSymbol,
	                state,
	                action,
	                a,
	                r,
	                yyval = {},
	                p,
	                len,
	                newState,
	                expected;
	            while (true) {
	                state = stack[stack.length - 1];
	                if (this.defaultActions[state]) {
	                    action = this.defaultActions[state];
	                } else {
	                    if (symbol === null || typeof symbol == "undefined") {
	                        symbol = lex();
	                    }
	                    action = table[state] && table[state][symbol];
	                }
	                if (typeof action === "undefined" || !action.length || !action[0]) {
	                    var errStr = "";
	                    if (!recovering) {
	                        expected = [];
	                        for (p in table[state]) if (this.terminals_[p] && p > 2) {
	                            expected.push("'" + this.terminals_[p] + "'");
	                        }
	                        if (this.lexer.showPosition) {
	                            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
	                        } else {
	                            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
	                        }
	                        this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
	                    }
	                }
	                if (action[0] instanceof Array && action.length > 1) {
	                    throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
	                }
	                switch (action[0]) {
	                    case 1:
	                        stack.push(symbol);
	                        vstack.push(this.lexer.yytext);
	                        lstack.push(this.lexer.yylloc);
	                        stack.push(action[1]);
	                        symbol = null;
	                        if (!preErrorSymbol) {
	                            yyleng = this.lexer.yyleng;
	                            yytext = this.lexer.yytext;
	                            yylineno = this.lexer.yylineno;
	                            yyloc = this.lexer.yylloc;
	                            if (recovering > 0) recovering--;
	                        } else {
	                            symbol = preErrorSymbol;
	                            preErrorSymbol = null;
	                        }
	                        break;
	                    case 2:
	                        len = this.productions_[action[1]][1];
	                        yyval.$ = vstack[vstack.length - len];
	                        yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
	                        if (ranges) {
	                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
	                        }
	                        r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
	                        if (typeof r !== "undefined") {
	                            return r;
	                        }
	                        if (len) {
	                            stack = stack.slice(0, -1 * len * 2);
	                            vstack = vstack.slice(0, -1 * len);
	                            lstack = lstack.slice(0, -1 * len);
	                        }
	                        stack.push(this.productions_[action[1]][0]);
	                        vstack.push(yyval.$);
	                        lstack.push(yyval._$);
	                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
	                        stack.push(newState);
	                        break;
	                    case 3:
	                        return true;
	                }
	            }
	            return true;
	        }
	    };
	    /* Jison generated lexer */
	    var lexer = (function () {
	        var lexer = { EOF: 1,
	            parseError: function parseError(str, hash) {
	                if (this.yy.parser) {
	                    this.yy.parser.parseError(str, hash);
	                } else {
	                    throw new Error(str);
	                }
	            },
	            setInput: function setInput(input) {
	                this._input = input;
	                this._more = this._less = this.done = false;
	                this.yylineno = this.yyleng = 0;
	                this.yytext = this.matched = this.match = '';
	                this.conditionStack = ['INITIAL'];
	                this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
	                if (this.options.ranges) this.yylloc.range = [0, 0];
	                this.offset = 0;
	                return this;
	            },
	            input: function input() {
	                var ch = this._input[0];
	                this.yytext += ch;
	                this.yyleng++;
	                this.offset++;
	                this.match += ch;
	                this.matched += ch;
	                var lines = ch.match(/(?:\r\n?|\n).*/g);
	                if (lines) {
	                    this.yylineno++;
	                    this.yylloc.last_line++;
	                } else {
	                    this.yylloc.last_column++;
	                }
	                if (this.options.ranges) this.yylloc.range[1]++;

	                this._input = this._input.slice(1);
	                return ch;
	            },
	            unput: function unput(ch) {
	                var len = ch.length;
	                var lines = ch.split(/(?:\r\n?|\n)/g);

	                this._input = ch + this._input;
	                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
	                //this.yyleng -= len;
	                this.offset -= len;
	                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
	                this.match = this.match.substr(0, this.match.length - 1);
	                this.matched = this.matched.substr(0, this.matched.length - 1);

	                if (lines.length - 1) this.yylineno -= lines.length - 1;
	                var r = this.yylloc.range;

	                this.yylloc = { first_line: this.yylloc.first_line,
	                    last_line: this.yylineno + 1,
	                    first_column: this.yylloc.first_column,
	                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
	                };

	                if (this.options.ranges) {
	                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
	                }
	                return this;
	            },
	            more: function more() {
	                this._more = true;
	                return this;
	            },
	            less: function less(n) {
	                this.unput(this.match.slice(n));
	            },
	            pastInput: function pastInput() {
	                var past = this.matched.substr(0, this.matched.length - this.match.length);
	                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
	            },
	            upcomingInput: function upcomingInput() {
	                var next = this.match;
	                if (next.length < 20) {
	                    next += this._input.substr(0, 20 - next.length);
	                }
	                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
	            },
	            showPosition: function showPosition() {
	                var pre = this.pastInput();
	                var c = new Array(pre.length + 1).join("-");
	                return pre + this.upcomingInput() + "\n" + c + "^";
	            },
	            next: function next() {
	                if (this.done) {
	                    return this.EOF;
	                }
	                if (!this._input) this.done = true;

	                var token, match, tempMatch, index, col, lines;
	                if (!this._more) {
	                    this.yytext = '';
	                    this.match = '';
	                }
	                var rules = this._currentRules();
	                for (var i = 0; i < rules.length; i++) {
	                    tempMatch = this._input.match(this.rules[rules[i]]);
	                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
	                        match = tempMatch;
	                        index = i;
	                        if (!this.options.flex) break;
	                    }
	                }
	                if (match) {
	                    lines = match[0].match(/(?:\r\n?|\n).*/g);
	                    if (lines) this.yylineno += lines.length;
	                    this.yylloc = { first_line: this.yylloc.last_line,
	                        last_line: this.yylineno + 1,
	                        first_column: this.yylloc.last_column,
	                        last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
	                    this.yytext += match[0];
	                    this.match += match[0];
	                    this.matches = match;
	                    this.yyleng = this.yytext.length;
	                    if (this.options.ranges) {
	                        this.yylloc.range = [this.offset, this.offset += this.yyleng];
	                    }
	                    this._more = false;
	                    this._input = this._input.slice(match[0].length);
	                    this.matched += match[0];
	                    token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
	                    if (this.done && this._input) this.done = false;
	                    if (token) return token;else return;
	                }
	                if (this._input === "") {
	                    return this.EOF;
	                } else {
	                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
	                }
	            },
	            lex: function lex() {
	                var r = this.next();
	                if (typeof r !== 'undefined') {
	                    return r;
	                } else {
	                    return this.lex();
	                }
	            },
	            begin: function begin(condition) {
	                this.conditionStack.push(condition);
	            },
	            popState: function popState() {
	                return this.conditionStack.pop();
	            },
	            _currentRules: function _currentRules() {
	                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
	            },
	            topState: function topState() {
	                return this.conditionStack[this.conditionStack.length - 2];
	            },
	            pushState: function begin(condition) {
	                this.begin(condition);
	            } };
	        lexer.options = {};
	        lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

	            function strip(start, end) {
	                return yy_.yytext = yy_.yytext.substring(start, yy_.yyleng - end + start);
	            }

	            var YYSTATE = YY_START;
	            switch ($avoiding_name_collisions) {
	                case 0:
	                    if (yy_.yytext.slice(-2) === "\\\\") {
	                        strip(0, 1);
	                        this.begin("mu");
	                    } else if (yy_.yytext.slice(-1) === "\\") {
	                        strip(0, 1);
	                        this.begin("emu");
	                    } else {
	                        this.begin("mu");
	                    }
	                    if (yy_.yytext) return 15;

	                    break;
	                case 1:
	                    return 15;
	                    break;
	                case 2:
	                    this.popState();
	                    return 15;

	                    break;
	                case 3:
	                    this.begin('raw');return 15;
	                    break;
	                case 4:
	                    this.popState();
	                    // Should be using `this.topState()` below, but it currently
	                    // returns the second top instead of the first top. Opened an
	                    // issue about it at https://github.com/zaach/jison/issues/291
	                    if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
	                        return 15;
	                    } else {
	                        strip(5, 9);
	                        return 'END_RAW_BLOCK';
	                    }

	                    break;
	                case 5:
	                    return 15;
	                    break;
	                case 6:
	                    this.popState();
	                    return 14;

	                    break;
	                case 7:
	                    return 65;
	                    break;
	                case 8:
	                    return 68;
	                    break;
	                case 9:
	                    return 19;
	                    break;
	                case 10:
	                    this.popState();
	                    this.begin('raw');
	                    return 23;

	                    break;
	                case 11:
	                    return 55;
	                    break;
	                case 12:
	                    return 60;
	                    break;
	                case 13:
	                    return 29;
	                    break;
	                case 14:
	                    return 47;
	                    break;
	                case 15:
	                    this.popState();return 44;
	                    break;
	                case 16:
	                    this.popState();return 44;
	                    break;
	                case 17:
	                    return 34;
	                    break;
	                case 18:
	                    return 39;
	                    break;
	                case 19:
	                    return 51;
	                    break;
	                case 20:
	                    return 48;
	                    break;
	                case 21:
	                    this.unput(yy_.yytext);
	                    this.popState();
	                    this.begin('com');

	                    break;
	                case 22:
	                    this.popState();
	                    return 14;

	                    break;
	                case 23:
	                    return 48;
	                    break;
	                case 24:
	                    return 73;
	                    break;
	                case 25:
	                    return 72;
	                    break;
	                case 26:
	                    return 72;
	                    break;
	                case 27:
	                    return 87;
	                    break;
	                case 28:
	                    // ignore whitespace
	                    break;
	                case 29:
	                    this.popState();return 54;
	                    break;
	                case 30:
	                    this.popState();return 33;
	                    break;
	                case 31:
	                    yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
	                    break;
	                case 32:
	                    yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
	                    break;
	                case 33:
	                    return 85;
	                    break;
	                case 34:
	                    return 82;
	                    break;
	                case 35:
	                    return 82;
	                    break;
	                case 36:
	                    return 83;
	                    break;
	                case 37:
	                    return 84;
	                    break;
	                case 38:
	                    return 81;
	                    break;
	                case 39:
	                    return 75;
	                    break;
	                case 40:
	                    return 77;
	                    break;
	                case 41:
	                    return 72;
	                    break;
	                case 42:
	                    yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
	                    break;
	                case 43:
	                    return 'INVALID';
	                    break;
	                case 44:
	                    return 5;
	                    break;
	            }
	        };
	        lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
	        lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
	        return lexer;
	    })();
	    parser.lexer = lexer;
	    function Parser() {
	        this.yy = {};
	    }Parser.prototype = parser;parser.Parser = Parser;
	    return new Parser();
	})();exports["default"] = handlebars;
	module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _visitor = __webpack_require__(39);

	var _visitor2 = _interopRequireDefault(_visitor);

	function WhitespaceControl() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  this.options = options;
	}
	WhitespaceControl.prototype = new _visitor2['default']();

	WhitespaceControl.prototype.Program = function (program) {
	  var doStandalone = !this.options.ignoreStandalone;

	  var isRoot = !this.isRootSeen;
	  this.isRootSeen = true;

	  var body = program.body;
	  for (var i = 0, l = body.length; i < l; i++) {
	    var current = body[i],
	        strip = this.accept(current);

	    if (!strip) {
	      continue;
	    }

	    var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
	        _isNextWhitespace = isNextWhitespace(body, i, isRoot),
	        openStandalone = strip.openStandalone && _isPrevWhitespace,
	        closeStandalone = strip.closeStandalone && _isNextWhitespace,
	        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

	    if (strip.close) {
	      omitRight(body, i, true);
	    }
	    if (strip.open) {
	      omitLeft(body, i, true);
	    }

	    if (doStandalone && inlineStandalone) {
	      omitRight(body, i);

	      if (omitLeft(body, i)) {
	        // If we are on a standalone node, save the indent info for partials
	        if (current.type === 'PartialStatement') {
	          // Pull out the whitespace from the final line
	          current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
	        }
	      }
	    }
	    if (doStandalone && openStandalone) {
	      omitRight((current.program || current.inverse).body);

	      // Strip out the previous content node if it's whitespace only
	      omitLeft(body, i);
	    }
	    if (doStandalone && closeStandalone) {
	      // Always strip the next node
	      omitRight(body, i);

	      omitLeft((current.inverse || current.program).body);
	    }
	  }

	  return program;
	};

	WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
	  this.accept(block.program);
	  this.accept(block.inverse);

	  // Find the inverse program that is involed with whitespace stripping.
	  var program = block.program || block.inverse,
	      inverse = block.program && block.inverse,
	      firstInverse = inverse,
	      lastInverse = inverse;

	  if (inverse && inverse.chained) {
	    firstInverse = inverse.body[0].program;

	    // Walk the inverse chain to find the last inverse that is actually in the chain.
	    while (lastInverse.chained) {
	      lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
	    }
	  }

	  var strip = {
	    open: block.openStrip.open,
	    close: block.closeStrip.close,

	    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
	    // so our parent can determine if we actually are standalone
	    openStandalone: isNextWhitespace(program.body),
	    closeStandalone: isPrevWhitespace((firstInverse || program).body)
	  };

	  if (block.openStrip.close) {
	    omitRight(program.body, null, true);
	  }

	  if (inverse) {
	    var inverseStrip = block.inverseStrip;

	    if (inverseStrip.open) {
	      omitLeft(program.body, null, true);
	    }

	    if (inverseStrip.close) {
	      omitRight(firstInverse.body, null, true);
	    }
	    if (block.closeStrip.open) {
	      omitLeft(lastInverse.body, null, true);
	    }

	    // Find standalone else statments
	    if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
	      omitLeft(program.body);
	      omitRight(firstInverse.body);
	    }
	  } else if (block.closeStrip.open) {
	    omitLeft(program.body, null, true);
	  }

	  return strip;
	};

	WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
	  return mustache.strip;
	};

	WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
	  /* istanbul ignore next */
	  var strip = node.strip || {};
	  return {
	    inlineStandalone: true,
	    open: strip.open,
	    close: strip.close
	  };
	};

	function isPrevWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = body.length;
	  }

	  // Nodes that end with newlines are considered whitespace (but are special
	  // cased for strip operations)
	  var prev = body[i - 1],
	      sibling = body[i - 2];
	  if (!prev) {
	    return isRoot;
	  }

	  if (prev.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
	  }
	}
	function isNextWhitespace(body, i, isRoot) {
	  if (i === undefined) {
	    i = -1;
	  }

	  var next = body[i + 1],
	      sibling = body[i + 2];
	  if (!next) {
	    return isRoot;
	  }

	  if (next.type === 'ContentStatement') {
	    return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
	  }
	}

	// Marks the node to the right of the position as omitted.
	// I.e. {{foo}}' ' will mark the ' ' node as omitted.
	//
	// If i is undefined, then the first child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitRight(body, i, multiple) {
	  var current = body[i == null ? 0 : i + 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
	    return;
	  }

	  var original = current.value;
	  current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
	  current.rightStripped = current.value !== original;
	}

	// Marks the node to the left of the position as omitted.
	// I.e. ' '{{foo}} will mark the ' ' node as omitted.
	//
	// If i is undefined then the last child will be marked as such.
	//
	// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
	// content is met.
	function omitLeft(body, i, multiple) {
	  var current = body[i == null ? body.length - 1 : i - 1];
	  if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
	    return;
	  }

	  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
	  var original = current.value;
	  current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
	  current.leftStripped = current.value !== original;
	  return current.leftStripped;
	}

	exports['default'] = WhitespaceControl;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function Visitor() {
	  this.parents = [];
	}

	Visitor.prototype = {
	  constructor: Visitor,
	  mutating: false,

	  // Visits a given value. If mutating, will replace the value if necessary.
	  acceptKey: function acceptKey(node, name) {
	    var value = this.accept(node[name]);
	    if (this.mutating) {
	      // Hacky sanity check: This may have a few false positives for type for the helper
	      // methods but will generally do the right thing without a lot of overhead.
	      if (value && !Visitor.prototype[value.type]) {
	        throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
	      }
	      node[name] = value;
	    }
	  },

	  // Performs an accept operation with added sanity check to ensure
	  // required keys are not removed.
	  acceptRequired: function acceptRequired(node, name) {
	    this.acceptKey(node, name);

	    if (!node[name]) {
	      throw new _exception2['default'](node.type + ' requires ' + name);
	    }
	  },

	  // Traverses a given array. If mutating, empty respnses will be removed
	  // for child elements.
	  acceptArray: function acceptArray(array) {
	    for (var i = 0, l = array.length; i < l; i++) {
	      this.acceptKey(array, i);

	      if (!array[i]) {
	        array.splice(i, 1);
	        i--;
	        l--;
	      }
	    }
	  },

	  accept: function accept(object) {
	    if (!object) {
	      return;
	    }

	    /* istanbul ignore next: Sanity code */
	    if (!this[object.type]) {
	      throw new _exception2['default']('Unknown type: ' + object.type, object);
	    }

	    if (this.current) {
	      this.parents.unshift(this.current);
	    }
	    this.current = object;

	    var ret = this[object.type](object);

	    this.current = this.parents.shift();

	    if (!this.mutating || ret) {
	      return ret;
	    } else if (ret !== false) {
	      return object;
	    }
	  },

	  Program: function Program(program) {
	    this.acceptArray(program.body);
	  },

	  MustacheStatement: visitSubExpression,
	  Decorator: visitSubExpression,

	  BlockStatement: visitBlock,
	  DecoratorBlock: visitBlock,

	  PartialStatement: visitPartial,
	  PartialBlockStatement: function PartialBlockStatement(partial) {
	    visitPartial.call(this, partial);

	    this.acceptKey(partial, 'program');
	  },

	  ContentStatement: function ContentStatement() /* content */{},
	  CommentStatement: function CommentStatement() /* comment */{},

	  SubExpression: visitSubExpression,

	  PathExpression: function PathExpression() /* path */{},

	  StringLiteral: function StringLiteral() /* string */{},
	  NumberLiteral: function NumberLiteral() /* number */{},
	  BooleanLiteral: function BooleanLiteral() /* bool */{},
	  UndefinedLiteral: function UndefinedLiteral() /* literal */{},
	  NullLiteral: function NullLiteral() /* literal */{},

	  Hash: function Hash(hash) {
	    this.acceptArray(hash.pairs);
	  },
	  HashPair: function HashPair(pair) {
	    this.acceptRequired(pair, 'value');
	  }
	};

	function visitSubExpression(mustache) {
	  this.acceptRequired(mustache, 'path');
	  this.acceptArray(mustache.params);
	  this.acceptKey(mustache, 'hash');
	}
	function visitBlock(block) {
	  visitSubExpression.call(this, block);

	  this.acceptKey(block, 'program');
	  this.acceptKey(block, 'inverse');
	}
	function visitPartial(partial) {
	  this.acceptRequired(partial, 'name');
	  this.acceptArray(partial.params);
	  this.acceptKey(partial, 'hash');
	}

	exports['default'] = Visitor;
	module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.SourceLocation = SourceLocation;
	exports.id = id;
	exports.stripFlags = stripFlags;
	exports.stripComment = stripComment;
	exports.preparePath = preparePath;
	exports.prepareMustache = prepareMustache;
	exports.prepareRawBlock = prepareRawBlock;
	exports.prepareBlock = prepareBlock;
	exports.prepareProgram = prepareProgram;
	exports.preparePartialBlock = preparePartialBlock;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	function validateClose(open, close) {
	  close = close.path ? close.path.original : close;

	  if (open.path.original !== close) {
	    var errorNode = { loc: open.path.loc };

	    throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
	  }
	}

	function SourceLocation(source, locInfo) {
	  this.source = source;
	  this.start = {
	    line: locInfo.first_line,
	    column: locInfo.first_column
	  };
	  this.end = {
	    line: locInfo.last_line,
	    column: locInfo.last_column
	  };
	}

	function id(token) {
	  if (/^\[.*\]$/.test(token)) {
	    return token.substring(1, token.length - 1);
	  } else {
	    return token;
	  }
	}

	function stripFlags(open, close) {
	  return {
	    open: open.charAt(2) === '~',
	    close: close.charAt(close.length - 3) === '~'
	  };
	}

	function stripComment(comment) {
	  return comment.replace(/^\{\{~?!-?-?/, '').replace(/-?-?~?\}\}$/, '');
	}

	function preparePath(data, parts, loc) {
	  loc = this.locInfo(loc);

	  var original = data ? '@' : '',
	      dig = [],
	      depth = 0;

	  for (var i = 0, l = parts.length; i < l; i++) {
	    var part = parts[i].part,

	    // If we have [] syntax then we do not treat path references as operators,
	    // i.e. foo.[this] resolves to approximately context.foo['this']
	    isLiteral = parts[i].original !== part;
	    original += (parts[i].separator || '') + part;

	    if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
	      if (dig.length > 0) {
	        throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
	      } else if (part === '..') {
	        depth++;
	      }
	    } else {
	      dig.push(part);
	    }
	  }

	  return {
	    type: 'PathExpression',
	    data: data,
	    depth: depth,
	    parts: dig,
	    original: original,
	    loc: loc
	  };
	}

	function prepareMustache(path, params, hash, open, strip, locInfo) {
	  // Must use charAt to support IE pre-10
	  var escapeFlag = open.charAt(3) || open.charAt(2),
	      escaped = escapeFlag !== '{' && escapeFlag !== '&';

	  var decorator = /\*/.test(open);
	  return {
	    type: decorator ? 'Decorator' : 'MustacheStatement',
	    path: path,
	    params: params,
	    hash: hash,
	    escaped: escaped,
	    strip: strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareRawBlock(openRawBlock, contents, close, locInfo) {
	  validateClose(openRawBlock, close);

	  locInfo = this.locInfo(locInfo);
	  var program = {
	    type: 'Program',
	    body: contents,
	    strip: {},
	    loc: locInfo
	  };

	  return {
	    type: 'BlockStatement',
	    path: openRawBlock.path,
	    params: openRawBlock.params,
	    hash: openRawBlock.hash,
	    program: program,
	    openStrip: {},
	    inverseStrip: {},
	    closeStrip: {},
	    loc: locInfo
	  };
	}

	function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
	  if (close && close.path) {
	    validateClose(openBlock, close);
	  }

	  var decorator = /\*/.test(openBlock.open);

	  program.blockParams = openBlock.blockParams;

	  var inverse = undefined,
	      inverseStrip = undefined;

	  if (inverseAndProgram) {
	    if (decorator) {
	      throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
	    }

	    if (inverseAndProgram.chain) {
	      inverseAndProgram.program.body[0].closeStrip = close.strip;
	    }

	    inverseStrip = inverseAndProgram.strip;
	    inverse = inverseAndProgram.program;
	  }

	  if (inverted) {
	    inverted = inverse;
	    inverse = program;
	    program = inverted;
	  }

	  return {
	    type: decorator ? 'DecoratorBlock' : 'BlockStatement',
	    path: openBlock.path,
	    params: openBlock.params,
	    hash: openBlock.hash,
	    program: program,
	    inverse: inverse,
	    openStrip: openBlock.strip,
	    inverseStrip: inverseStrip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

	function prepareProgram(statements, loc) {
	  if (!loc && statements.length) {
	    var firstLoc = statements[0].loc,
	        lastLoc = statements[statements.length - 1].loc;

	    /* istanbul ignore else */
	    if (firstLoc && lastLoc) {
	      loc = {
	        source: firstLoc.source,
	        start: {
	          line: firstLoc.start.line,
	          column: firstLoc.start.column
	        },
	        end: {
	          line: lastLoc.end.line,
	          column: lastLoc.end.column
	        }
	      };
	    }
	  }

	  return {
	    type: 'Program',
	    body: statements,
	    strip: {},
	    loc: loc
	  };
	}

	function preparePartialBlock(open, program, close, locInfo) {
	  validateClose(open, close);

	  return {
	    type: 'PartialBlockStatement',
	    name: open.path,
	    params: open.params,
	    hash: open.hash,
	    program: program,
	    openStrip: open.strip,
	    closeStrip: close && close.strip,
	    loc: this.locInfo(locInfo)
	  };
	}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/* eslint-disable new-cap */

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;
	exports.Compiler = Compiler;
	exports.precompile = precompile;
	exports.compile = compile;

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _ast = __webpack_require__(35);

	var _ast2 = _interopRequireDefault(_ast);

	var slice = [].slice;

	function Compiler() {}

	// the foundHelper register will disambiguate helper lookup from finding a
	// function in a context. This is necessary for mustache compatibility, which
	// requires that context functions in blocks are evaluated by blockHelperMissing,
	// and then proceed as if the resulting value was provided to blockHelperMissing.

	Compiler.prototype = {
	  compiler: Compiler,

	  equals: function equals(other) {
	    var len = this.opcodes.length;
	    if (other.opcodes.length !== len) {
	      return false;
	    }

	    for (var i = 0; i < len; i++) {
	      var opcode = this.opcodes[i],
	          otherOpcode = other.opcodes[i];
	      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
	        return false;
	      }
	    }

	    // We know that length is the same between the two arrays because they are directly tied
	    // to the opcode behavior above.
	    len = this.children.length;
	    for (var i = 0; i < len; i++) {
	      if (!this.children[i].equals(other.children[i])) {
	        return false;
	      }
	    }

	    return true;
	  },

	  guid: 0,

	  compile: function compile(program, options) {
	    this.sourceNode = [];
	    this.opcodes = [];
	    this.children = [];
	    this.options = options;
	    this.stringParams = options.stringParams;
	    this.trackIds = options.trackIds;

	    options.blockParams = options.blockParams || [];

	    // These changes will propagate to the other compiler components
	    var knownHelpers = options.knownHelpers;
	    options.knownHelpers = {
	      'helperMissing': true,
	      'blockHelperMissing': true,
	      'each': true,
	      'if': true,
	      'unless': true,
	      'with': true,
	      'log': true,
	      'lookup': true
	    };
	    if (knownHelpers) {
	      // the next line should use "Object.keys", but the code has been like this a long time and changing it, might
	      // cause backwards-compatibility issues... It's an old library...
	      // eslint-disable-next-line guard-for-in
	      for (var _name in knownHelpers) {
	        this.options.knownHelpers[_name] = knownHelpers[_name];
	      }
	    }

	    return this.accept(program);
	  },

	  compileProgram: function compileProgram(program) {
	    var childCompiler = new this.compiler(),
	        // eslint-disable-line new-cap
	    result = childCompiler.compile(program, this.options),
	        guid = this.guid++;

	    this.usePartial = this.usePartial || result.usePartial;

	    this.children[guid] = result;
	    this.useDepths = this.useDepths || result.useDepths;

	    return guid;
	  },

	  accept: function accept(node) {
	    /* istanbul ignore next: Sanity code */
	    if (!this[node.type]) {
	      throw new _exception2['default']('Unknown type: ' + node.type, node);
	    }

	    this.sourceNode.unshift(node);
	    var ret = this[node.type](node);
	    this.sourceNode.shift();
	    return ret;
	  },

	  Program: function Program(program) {
	    this.options.blockParams.unshift(program.blockParams);

	    var body = program.body,
	        bodyLength = body.length;
	    for (var i = 0; i < bodyLength; i++) {
	      this.accept(body[i]);
	    }

	    this.options.blockParams.shift();

	    this.isSimple = bodyLength === 1;
	    this.blockParams = program.blockParams ? program.blockParams.length : 0;

	    return this;
	  },

	  BlockStatement: function BlockStatement(block) {
	    transformLiteralToPath(block);

	    var program = block.program,
	        inverse = block.inverse;

	    program = program && this.compileProgram(program);
	    inverse = inverse && this.compileProgram(inverse);

	    var type = this.classifySexpr(block);

	    if (type === 'helper') {
	      this.helperSexpr(block, program, inverse);
	    } else if (type === 'simple') {
	      this.simpleSexpr(block);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('blockValue', block.path.original);
	    } else {
	      this.ambiguousSexpr(block, program, inverse);

	      // now that the simple mustache is resolved, we need to
	      // evaluate it by executing `blockHelperMissing`
	      this.opcode('pushProgram', program);
	      this.opcode('pushProgram', inverse);
	      this.opcode('emptyHash');
	      this.opcode('ambiguousBlockValue');
	    }

	    this.opcode('append');
	  },

	  DecoratorBlock: function DecoratorBlock(decorator) {
	    var program = decorator.program && this.compileProgram(decorator.program);
	    var params = this.setupFullMustacheParams(decorator, program, undefined),
	        path = decorator.path;

	    this.useDecorators = true;
	    this.opcode('registerDecorator', params.length, path.original);
	  },

	  PartialStatement: function PartialStatement(partial) {
	    this.usePartial = true;

	    var program = partial.program;
	    if (program) {
	      program = this.compileProgram(partial.program);
	    }

	    var params = partial.params;
	    if (params.length > 1) {
	      throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
	    } else if (!params.length) {
	      if (this.options.explicitPartialContext) {
	        this.opcode('pushLiteral', 'undefined');
	      } else {
	        params.push({ type: 'PathExpression', parts: [], depth: 0 });
	      }
	    }

	    var partialName = partial.name.original,
	        isDynamic = partial.name.type === 'SubExpression';
	    if (isDynamic) {
	      this.accept(partial.name);
	    }

	    this.setupFullMustacheParams(partial, program, undefined, true);

	    var indent = partial.indent || '';
	    if (this.options.preventIndent && indent) {
	      this.opcode('appendContent', indent);
	      indent = '';
	    }

	    this.opcode('invokePartial', isDynamic, partialName, indent);
	    this.opcode('append');
	  },
	  PartialBlockStatement: function PartialBlockStatement(partialBlock) {
	    this.PartialStatement(partialBlock);
	  },

	  MustacheStatement: function MustacheStatement(mustache) {
	    this.SubExpression(mustache);

	    if (mustache.escaped && !this.options.noEscape) {
	      this.opcode('appendEscaped');
	    } else {
	      this.opcode('append');
	    }
	  },
	  Decorator: function Decorator(decorator) {
	    this.DecoratorBlock(decorator);
	  },

	  ContentStatement: function ContentStatement(content) {
	    if (content.value) {
	      this.opcode('appendContent', content.value);
	    }
	  },

	  CommentStatement: function CommentStatement() {},

	  SubExpression: function SubExpression(sexpr) {
	    transformLiteralToPath(sexpr);
	    var type = this.classifySexpr(sexpr);

	    if (type === 'simple') {
	      this.simpleSexpr(sexpr);
	    } else if (type === 'helper') {
	      this.helperSexpr(sexpr);
	    } else {
	      this.ambiguousSexpr(sexpr);
	    }
	  },
	  ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
	    var path = sexpr.path,
	        name = path.parts[0],
	        isBlock = program != null || inverse != null;

	    this.opcode('getContext', path.depth);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    path.strict = true;
	    this.accept(path);

	    this.opcode('invokeAmbiguous', name, isBlock);
	  },

	  simpleSexpr: function simpleSexpr(sexpr) {
	    var path = sexpr.path;
	    path.strict = true;
	    this.accept(path);
	    this.opcode('resolvePossibleLambda');
	  },

	  helperSexpr: function helperSexpr(sexpr, program, inverse) {
	    var params = this.setupFullMustacheParams(sexpr, program, inverse),
	        path = sexpr.path,
	        name = path.parts[0];

	    if (this.options.knownHelpers[name]) {
	      this.opcode('invokeKnownHelper', params.length, name);
	    } else if (this.options.knownHelpersOnly) {
	      throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
	    } else {
	      path.strict = true;
	      path.falsy = true;

	      this.accept(path);
	      this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
	    }
	  },

	  PathExpression: function PathExpression(path) {
	    this.addDepth(path.depth);
	    this.opcode('getContext', path.depth);

	    var name = path.parts[0],
	        scoped = _ast2['default'].helpers.scopedId(path),
	        blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

	    if (blockParamId) {
	      this.opcode('lookupBlockParam', blockParamId, path.parts);
	    } else if (!name) {
	      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
	      this.opcode('pushContext');
	    } else if (path.data) {
	      this.options.data = true;
	      this.opcode('lookupData', path.depth, path.parts, path.strict);
	    } else {
	      this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
	    }
	  },

	  StringLiteral: function StringLiteral(string) {
	    this.opcode('pushString', string.value);
	  },

	  NumberLiteral: function NumberLiteral(number) {
	    this.opcode('pushLiteral', number.value);
	  },

	  BooleanLiteral: function BooleanLiteral(bool) {
	    this.opcode('pushLiteral', bool.value);
	  },

	  UndefinedLiteral: function UndefinedLiteral() {
	    this.opcode('pushLiteral', 'undefined');
	  },

	  NullLiteral: function NullLiteral() {
	    this.opcode('pushLiteral', 'null');
	  },

	  Hash: function Hash(hash) {
	    var pairs = hash.pairs,
	        i = 0,
	        l = pairs.length;

	    this.opcode('pushHash');

	    for (; i < l; i++) {
	      this.pushParam(pairs[i].value);
	    }
	    while (i--) {
	      this.opcode('assignToHash', pairs[i].key);
	    }
	    this.opcode('popHash');
	  },

	  // HELPERS
	  opcode: function opcode(name) {
	    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
	  },

	  addDepth: function addDepth(depth) {
	    if (!depth) {
	      return;
	    }

	    this.useDepths = true;
	  },

	  classifySexpr: function classifySexpr(sexpr) {
	    var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

	    var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

	    // a mustache is an eligible helper if:
	    // * its id is simple (a single part, not `this` or `..`)
	    var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

	    // if a mustache is an eligible helper but not a definite
	    // helper, it is ambiguous, and will be resolved in a later
	    // pass or at runtime.
	    var isEligible = !isBlockParam && (isHelper || isSimple);

	    // if ambiguous, we can possibly resolve the ambiguity now
	    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
	    if (isEligible && !isHelper) {
	      var _name2 = sexpr.path.parts[0],
	          options = this.options;

	      if (options.knownHelpers[_name2]) {
	        isHelper = true;
	      } else if (options.knownHelpersOnly) {
	        isEligible = false;
	      }
	    }

	    if (isHelper) {
	      return 'helper';
	    } else if (isEligible) {
	      return 'ambiguous';
	    } else {
	      return 'simple';
	    }
	  },

	  pushParams: function pushParams(params) {
	    for (var i = 0, l = params.length; i < l; i++) {
	      this.pushParam(params[i]);
	    }
	  },

	  pushParam: function pushParam(val) {
	    var value = val.value != null ? val.value : val.original || '';

	    if (this.stringParams) {
	      if (value.replace) {
	        value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
	      }

	      if (val.depth) {
	        this.addDepth(val.depth);
	      }
	      this.opcode('getContext', val.depth || 0);
	      this.opcode('pushStringParam', value, val.type);

	      if (val.type === 'SubExpression') {
	        // SubExpressions get evaluated and passed in
	        // in string params mode.
	        this.accept(val);
	      }
	    } else {
	      if (this.trackIds) {
	        var blockParamIndex = undefined;
	        if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
	          blockParamIndex = this.blockParamIndex(val.parts[0]);
	        }
	        if (blockParamIndex) {
	          var blockParamChild = val.parts.slice(1).join('.');
	          this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
	        } else {
	          value = val.original || value;
	          if (value.replace) {
	            value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
	          }

	          this.opcode('pushId', val.type, value);
	        }
	      }
	      this.accept(val);
	    }
	  },

	  setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
	    var params = sexpr.params;
	    this.pushParams(params);

	    this.opcode('pushProgram', program);
	    this.opcode('pushProgram', inverse);

	    if (sexpr.hash) {
	      this.accept(sexpr.hash);
	    } else {
	      this.opcode('emptyHash', omitEmpty);
	    }

	    return params;
	  },

	  blockParamIndex: function blockParamIndex(name) {
	    for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
	      var blockParams = this.options.blockParams[depth],
	          param = blockParams && _utils.indexOf(blockParams, name);
	      if (blockParams && param >= 0) {
	        return [depth, param];
	      }
	    }
	  }
	};

	function precompile(input, options, env) {
	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
	  }

	  options = options || {};
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var ast = env.parse(input, options),
	      environment = new env.Compiler().compile(ast, options);
	  return new env.JavaScriptCompiler().compile(environment, options);
	}

	function compile(input, options, env) {
	  if (options === undefined) options = {};

	  if (input == null || typeof input !== 'string' && input.type !== 'Program') {
	    throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
	  }

	  options = _utils.extend({}, options);
	  if (!('data' in options)) {
	    options.data = true;
	  }
	  if (options.compat) {
	    options.useDepths = true;
	  }

	  var compiled = undefined;

	  function compileInput() {
	    var ast = env.parse(input, options),
	        environment = new env.Compiler().compile(ast, options),
	        templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
	    return env.template(templateSpec);
	  }

	  // Template is only compiled on first use and cached after that point.
	  function ret(context, execOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled.call(this, context, execOptions);
	  }
	  ret._setup = function (setupOptions) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._setup(setupOptions);
	  };
	  ret._child = function (i, data, blockParams, depths) {
	    if (!compiled) {
	      compiled = compileInput();
	    }
	    return compiled._child(i, data, blockParams, depths);
	  };
	  return ret;
	}

	function argEquals(a, b) {
	  if (a === b) {
	    return true;
	  }

	  if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
	    for (var i = 0; i < a.length; i++) {
	      if (!argEquals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	}

	function transformLiteralToPath(sexpr) {
	  if (!sexpr.path.parts) {
	    var literal = sexpr.path;
	    // Casting to string here to make false and 0 literal values play nicely with the rest
	    // of the system.
	    sexpr.path = {
	      type: 'PathExpression',
	      data: false,
	      depth: 0,
	      parts: [literal.original + ''],
	      original: literal.original + '',
	      loc: literal.loc
	    };
	  }
	}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	exports.__esModule = true;

	var _base = __webpack_require__(4);

	var _exception = __webpack_require__(6);

	var _exception2 = _interopRequireDefault(_exception);

	var _utils = __webpack_require__(5);

	var _codeGen = __webpack_require__(43);

	var _codeGen2 = _interopRequireDefault(_codeGen);

	function Literal(value) {
	  this.value = value;
	}

	function JavaScriptCompiler() {}

	JavaScriptCompiler.prototype = {
	  // PUBLIC API: You can override these methods in a subclass to provide
	  // alternative compiled forms for name lookup and buffering semantics
	  nameLookup: function nameLookup(parent, name /* , type*/) {
	    if (name === 'constructor') {
	      return ['(', parent, '.propertyIsEnumerable(\'constructor\') ? ', parent, '.constructor : undefined', ')'];
	    }
	    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	      return [parent, '.', name];
	    } else {
	      return [parent, '[', JSON.stringify(name), ']'];
	    }
	  },
	  depthedLookup: function depthedLookup(name) {
	    return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
	  },

	  compilerInfo: function compilerInfo() {
	    var revision = _base.COMPILER_REVISION,
	        versions = _base.REVISION_CHANGES[revision];
	    return [revision, versions];
	  },

	  appendToBuffer: function appendToBuffer(source, location, explicit) {
	    // Force a source as this simplifies the merge logic.
	    if (!_utils.isArray(source)) {
	      source = [source];
	    }
	    source = this.source.wrap(source, location);

	    if (this.environment.isSimple) {
	      return ['return ', source, ';'];
	    } else if (explicit) {
	      // This is a case where the buffer operation occurs as a child of another
	      // construct, generally braces. We have to explicitly output these buffer
	      // operations to ensure that the emitted code goes in the correct location.
	      return ['buffer += ', source, ';'];
	    } else {
	      source.appendToBuffer = true;
	      return source;
	    }
	  },

	  initializeBuffer: function initializeBuffer() {
	    return this.quotedString('');
	  },
	  // END PUBLIC API

	  compile: function compile(environment, options, context, asObject) {
	    this.environment = environment;
	    this.options = options;
	    this.stringParams = this.options.stringParams;
	    this.trackIds = this.options.trackIds;
	    this.precompile = !asObject;

	    this.name = this.environment.name;
	    this.isChild = !!context;
	    this.context = context || {
	      decorators: [],
	      programs: [],
	      environments: []
	    };

	    this.preamble();

	    this.stackSlot = 0;
	    this.stackVars = [];
	    this.aliases = {};
	    this.registers = { list: [] };
	    this.hashes = [];
	    this.compileStack = [];
	    this.inlineStack = [];
	    this.blockParams = [];

	    this.compileChildren(environment, options);

	    this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
	    this.useBlockParams = this.useBlockParams || environment.useBlockParams;

	    var opcodes = environment.opcodes,
	        opcode = undefined,
	        firstLoc = undefined,
	        i = undefined,
	        l = undefined;

	    for (i = 0, l = opcodes.length; i < l; i++) {
	      opcode = opcodes[i];

	      this.source.currentLocation = opcode.loc;
	      firstLoc = firstLoc || opcode.loc;
	      this[opcode.opcode].apply(this, opcode.args);
	    }

	    // Flush any trailing content that might be pending.
	    this.source.currentLocation = firstLoc;
	    this.pushSource('');

	    /* istanbul ignore next */
	    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
	      throw new _exception2['default']('Compile completed with content left on stack');
	    }

	    if (!this.decorators.isEmpty()) {
	      this.useDecorators = true;

	      this.decorators.prepend('var decorators = container.decorators;\n');
	      this.decorators.push('return fn;');

	      if (asObject) {
	        this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
	      } else {
	        this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
	        this.decorators.push('}\n');
	        this.decorators = this.decorators.merge();
	      }
	    } else {
	      this.decorators = undefined;
	    }

	    var fn = this.createFunctionContext(asObject);
	    if (!this.isChild) {
	      var ret = {
	        compiler: this.compilerInfo(),
	        main: fn
	      };

	      if (this.decorators) {
	        ret.main_d = this.decorators; // eslint-disable-line camelcase
	        ret.useDecorators = true;
	      }

	      var _context = this.context;
	      var programs = _context.programs;
	      var decorators = _context.decorators;

	      for (i = 0, l = programs.length; i < l; i++) {
	        if (programs[i]) {
	          ret[i] = programs[i];
	          if (decorators[i]) {
	            ret[i + '_d'] = decorators[i];
	            ret.useDecorators = true;
	          }
	        }
	      }

	      if (this.environment.usePartial) {
	        ret.usePartial = true;
	      }
	      if (this.options.data) {
	        ret.useData = true;
	      }
	      if (this.useDepths) {
	        ret.useDepths = true;
	      }
	      if (this.useBlockParams) {
	        ret.useBlockParams = true;
	      }
	      if (this.options.compat) {
	        ret.compat = true;
	      }

	      if (!asObject) {
	        ret.compiler = JSON.stringify(ret.compiler);

	        this.source.currentLocation = { start: { line: 1, column: 0 } };
	        ret = this.objectLiteral(ret);

	        if (options.srcName) {
	          ret = ret.toStringWithSourceMap({ file: options.destName });
	          ret.map = ret.map && ret.map.toString();
	        } else {
	          ret = ret.toString();
	        }
	      } else {
	        ret.compilerOptions = this.options;
	      }

	      return ret;
	    } else {
	      return fn;
	    }
	  },

	  preamble: function preamble() {
	    // track the last context pushed into place to allow skipping the
	    // getContext opcode when it would be a noop
	    this.lastContext = 0;
	    this.source = new _codeGen2['default'](this.options.srcName);
	    this.decorators = new _codeGen2['default'](this.options.srcName);
	  },

	  createFunctionContext: function createFunctionContext(asObject) {
	    var varDeclarations = '';

	    var locals = this.stackVars.concat(this.registers.list);
	    if (locals.length > 0) {
	      varDeclarations += ', ' + locals.join(', ');
	    }

	    // Generate minimizer alias mappings
	    //
	    // When using true SourceNodes, this will update all references to the given alias
	    // as the source nodes are reused in situ. For the non-source node compilation mode,
	    // aliases will not be used, but this case is already being run on the client and
	    // we aren't concern about minimizing the template size.
	    var aliasCount = 0;
	    for (var alias in this.aliases) {
	      // eslint-disable-line guard-for-in
	      var node = this.aliases[alias];

	      if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
	        varDeclarations += ', alias' + ++aliasCount + '=' + alias;
	        node.children[0] = 'alias' + aliasCount;
	      }
	    }

	    var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

	    if (this.useBlockParams || this.useDepths) {
	      params.push('blockParams');
	    }
	    if (this.useDepths) {
	      params.push('depths');
	    }

	    // Perform a second pass over the output to merge content when possible
	    var source = this.mergeSource(varDeclarations);

	    if (asObject) {
	      params.push(source);

	      return Function.apply(this, params);
	    } else {
	      return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
	    }
	  },
	  mergeSource: function mergeSource(varDeclarations) {
	    var isSimple = this.environment.isSimple,
	        appendOnly = !this.forceBuffer,
	        appendFirst = undefined,
	        sourceSeen = undefined,
	        bufferStart = undefined,
	        bufferEnd = undefined;
	    this.source.each(function (line) {
	      if (line.appendToBuffer) {
	        if (bufferStart) {
	          line.prepend('  + ');
	        } else {
	          bufferStart = line;
	        }
	        bufferEnd = line;
	      } else {
	        if (bufferStart) {
	          if (!sourceSeen) {
	            appendFirst = true;
	          } else {
	            bufferStart.prepend('buffer += ');
	          }
	          bufferEnd.add(';');
	          bufferStart = bufferEnd = undefined;
	        }

	        sourceSeen = true;
	        if (!isSimple) {
	          appendOnly = false;
	        }
	      }
	    });

	    if (appendOnly) {
	      if (bufferStart) {
	        bufferStart.prepend('return ');
	        bufferEnd.add(';');
	      } else if (!sourceSeen) {
	        this.source.push('return "";');
	      }
	    } else {
	      varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

	      if (bufferStart) {
	        bufferStart.prepend('return buffer + ');
	        bufferEnd.add(';');
	      } else {
	        this.source.push('return buffer;');
	      }
	    }

	    if (varDeclarations) {
	      this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
	    }

	    return this.source.merge();
	  },

	  // [blockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // On stack, after: return value of blockHelperMissing
	  //
	  // The purpose of this opcode is to take a block of the form
	  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
	  // replace it on the stack with the result of properly
	  // invoking blockHelperMissing.
	  blockValue: function blockValue(name) {
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs(name, 0, params);

	    var blockName = this.popStack();
	    params.splice(1, 0, blockName);

	    this.push(this.source.functionCall(blockHelperMissing, 'call', params));
	  },

	  // [ambiguousBlockValue]
	  //
	  // On stack, before: hash, inverse, program, value
	  // Compiler value, before: lastHelper=value of last found helper, if any
	  // On stack, after, if no lastHelper: same as [blockValue]
	  // On stack, after, if lastHelper: value
	  ambiguousBlockValue: function ambiguousBlockValue() {
	    // We're being a bit cheeky and reusing the options value from the prior exec
	    var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
	        params = [this.contextName(0)];
	    this.setupHelperArgs('', 0, params, true);

	    this.flushInline();

	    var current = this.topStack();
	    params.splice(1, 0, current);

	    this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
	  },

	  // [appendContent]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  //
	  // Appends the string value of `content` to the current buffer
	  appendContent: function appendContent(content) {
	    if (this.pendingContent) {
	      content = this.pendingContent + content;
	    } else {
	      this.pendingLocation = this.source.currentLocation;
	    }

	    this.pendingContent = content;
	  },

	  // [append]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Coerces `value` to a String and appends it to the current buffer.
	  //
	  // If `value` is truthy, or 0, it is coerced into a string and appended
	  // Otherwise, the empty string is appended
	  append: function append() {
	    if (this.isInline()) {
	      this.replaceStack(function (current) {
	        return [' != null ? ', current, ' : ""'];
	      });

	      this.pushSource(this.appendToBuffer(this.popStack()));
	    } else {
	      var local = this.popStack();
	      this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
	      if (this.environment.isSimple) {
	        this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
	      }
	    }
	  },

	  // [appendEscaped]
	  //
	  // On stack, before: value, ...
	  // On stack, after: ...
	  //
	  // Escape `value` and append it to the buffer
	  appendEscaped: function appendEscaped() {
	    this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
	  },

	  // [getContext]
	  //
	  // On stack, before: ...
	  // On stack, after: ...
	  // Compiler value, after: lastContext=depth
	  //
	  // Set the value of the `lastContext` compiler value to the depth
	  getContext: function getContext(depth) {
	    this.lastContext = depth;
	  },

	  // [pushContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext, ...
	  //
	  // Pushes the value of the current context onto the stack.
	  pushContext: function pushContext() {
	    this.pushStackLiteral(this.contextName(this.lastContext));
	  },

	  // [lookupOnContext]
	  //
	  // On stack, before: ...
	  // On stack, after: currentContext[name], ...
	  //
	  // Looks up the value of `name` on the current context and pushes
	  // it onto the stack.
	  lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
	    var i = 0;

	    if (!scoped && this.options.compat && !this.lastContext) {
	      // The depthed query is expected to handle the undefined logic for the root level that
	      // is implemented below, so we evaluate that directly in compat mode
	      this.push(this.depthedLookup(parts[i++]));
	    } else {
	      this.pushContext();
	    }

	    this.resolvePath('context', parts, i, falsy, strict);
	  },

	  // [lookupBlockParam]
	  //
	  // On stack, before: ...
	  // On stack, after: blockParam[name], ...
	  //
	  // Looks up the value of `parts` on the given block param and pushes
	  // it onto the stack.
	  lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
	    this.useBlockParams = true;

	    this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
	    this.resolvePath('context', parts, 1);
	  },

	  // [lookupData]
	  //
	  // On stack, before: ...
	  // On stack, after: data, ...
	  //
	  // Push the data lookup operator
	  lookupData: function lookupData(depth, parts, strict) {
	    if (!depth) {
	      this.pushStackLiteral('data');
	    } else {
	      this.pushStackLiteral('container.data(data, ' + depth + ')');
	    }

	    this.resolvePath('data', parts, 0, true, strict);
	  },

	  resolvePath: function resolvePath(type, parts, i, falsy, strict) {
	    // istanbul ignore next

	    var _this = this;

	    if (this.options.strict || this.options.assumeObjects) {
	      this.push(strictLookup(this.options.strict && strict, this, parts, type));
	      return;
	    }

	    var len = parts.length;
	    for (; i < len; i++) {
	      /* eslint-disable no-loop-func */
	      this.replaceStack(function (current) {
	        var lookup = _this.nameLookup(current, parts[i], type);
	        // We want to ensure that zero and false are handled properly if the context (falsy flag)
	        // needs to have the special handling for these values.
	        if (!falsy) {
	          return [' != null ? ', lookup, ' : ', current];
	        } else {
	          // Otherwise we can use generic falsy handling
	          return [' && ', lookup];
	        }
	      });
	      /* eslint-enable no-loop-func */
	    }
	  },

	  // [resolvePossibleLambda]
	  //
	  // On stack, before: value, ...
	  // On stack, after: resolved value, ...
	  //
	  // If the `value` is a lambda, replace it on the stack by
	  // the return value of the lambda
	  resolvePossibleLambda: function resolvePossibleLambda() {
	    this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
	  },

	  // [pushStringParam]
	  //
	  // On stack, before: ...
	  // On stack, after: string, currentContext, ...
	  //
	  // This opcode is designed for use in string mode, which
	  // provides the string value of a parameter along with its
	  // depth rather than resolving it immediately.
	  pushStringParam: function pushStringParam(string, type) {
	    this.pushContext();
	    this.pushString(type);

	    // If it's a subexpression, the string result
	    // will be pushed after this opcode.
	    if (type !== 'SubExpression') {
	      if (typeof string === 'string') {
	        this.pushString(string);
	      } else {
	        this.pushStackLiteral(string);
	      }
	    }
	  },

	  emptyHash: function emptyHash(omitEmpty) {
	    if (this.trackIds) {
	      this.push('{}'); // hashIds
	    }
	    if (this.stringParams) {
	      this.push('{}'); // hashContexts
	      this.push('{}'); // hashTypes
	    }
	    this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
	  },
	  pushHash: function pushHash() {
	    if (this.hash) {
	      this.hashes.push(this.hash);
	    }
	    this.hash = { values: [], types: [], contexts: [], ids: [] };
	  },
	  popHash: function popHash() {
	    var hash = this.hash;
	    this.hash = this.hashes.pop();

	    if (this.trackIds) {
	      this.push(this.objectLiteral(hash.ids));
	    }
	    if (this.stringParams) {
	      this.push(this.objectLiteral(hash.contexts));
	      this.push(this.objectLiteral(hash.types));
	    }

	    this.push(this.objectLiteral(hash.values));
	  },

	  // [pushString]
	  //
	  // On stack, before: ...
	  // On stack, after: quotedString(string), ...
	  //
	  // Push a quoted version of `string` onto the stack
	  pushString: function pushString(string) {
	    this.pushStackLiteral(this.quotedString(string));
	  },

	  // [pushLiteral]
	  //
	  // On stack, before: ...
	  // On stack, after: value, ...
	  //
	  // Pushes a value onto the stack. This operation prevents
	  // the compiler from creating a temporary variable to hold
	  // it.
	  pushLiteral: function pushLiteral(value) {
	    this.pushStackLiteral(value);
	  },

	  // [pushProgram]
	  //
	  // On stack, before: ...
	  // On stack, after: program(guid), ...
	  //
	  // Push a program expression onto the stack. This takes
	  // a compile-time guid and converts it into a runtime-accessible
	  // expression.
	  pushProgram: function pushProgram(guid) {
	    if (guid != null) {
	      this.pushStackLiteral(this.programExpression(guid));
	    } else {
	      this.pushStackLiteral(null);
	    }
	  },

	  // [registerDecorator]
	  //
	  // On stack, before: hash, program, params..., ...
	  // On stack, after: ...
	  //
	  // Pops off the decorator's parameters, invokes the decorator,
	  // and inserts the decorator into the decorators list.
	  registerDecorator: function registerDecorator(paramSize, name) {
	    var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
	        options = this.setupHelperArgs(name, paramSize);

	    this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
	  },

	  // [invokeHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // Pops off the helper's parameters, invokes the helper,
	  // and pushes the helper's return value onto the stack.
	  //
	  // If the helper is not found, `helperMissing` is called.
	  invokeHelper: function invokeHelper(paramSize, name, isSimple) {
	    var nonHelper = this.popStack(),
	        helper = this.setupHelper(paramSize, name),
	        simple = isSimple ? [helper.name, ' || '] : '';

	    var lookup = ['('].concat(simple, nonHelper);
	    if (!this.options.strict) {
	      lookup.push(' || ', this.aliasable('helpers.helperMissing'));
	    }
	    lookup.push(')');

	    this.push(this.source.functionCall(lookup, 'call', helper.callParams));
	  },

	  // [invokeKnownHelper]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of helper invocation
	  //
	  // This operation is used when the helper is known to exist,
	  // so a `helperMissing` fallback is not required.
	  invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
	    var helper = this.setupHelper(paramSize, name);
	    this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
	  },

	  // [invokeAmbiguous]
	  //
	  // On stack, before: hash, inverse, program, params..., ...
	  // On stack, after: result of disambiguation
	  //
	  // This operation is used when an expression like `{{foo}}`
	  // is provided, but we don't know at compile-time whether it
	  // is a helper or a path.
	  //
	  // This operation emits more code than the other options,
	  // and can be avoided by passing the `knownHelpers` and
	  // `knownHelpersOnly` flags at compile-time.
	  invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
	    this.useRegister('helper');

	    var nonHelper = this.popStack();

	    this.emptyHash();
	    var helper = this.setupHelper(0, name, helperCall);

	    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

	    var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
	    if (!this.options.strict) {
	      lookup[0] = '(helper = ';
	      lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
	    }

	    this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
	  },

	  // [invokePartial]
	  //
	  // On stack, before: context, ...
	  // On stack after: result of partial invocation
	  //
	  // This operation pops off a context, invokes a partial with that context,
	  // and pushes the result of the invocation back.
	  invokePartial: function invokePartial(isDynamic, name, indent) {
	    var params = [],
	        options = this.setupParams(name, 1, params);

	    if (isDynamic) {
	      name = this.popStack();
	      delete options.name;
	    }

	    if (indent) {
	      options.indent = JSON.stringify(indent);
	    }
	    options.helpers = 'helpers';
	    options.partials = 'partials';
	    options.decorators = 'container.decorators';

	    if (!isDynamic) {
	      params.unshift(this.nameLookup('partials', name, 'partial'));
	    } else {
	      params.unshift(name);
	    }

	    if (this.options.compat) {
	      options.depths = 'depths';
	    }
	    options = this.objectLiteral(options);
	    params.push(options);

	    this.push(this.source.functionCall('container.invokePartial', '', params));
	  },

	  // [assignToHash]
	  //
	  // On stack, before: value, ..., hash, ...
	  // On stack, after: ..., hash, ...
	  //
	  // Pops a value off the stack and assigns it to the current hash
	  assignToHash: function assignToHash(key) {
	    var value = this.popStack(),
	        context = undefined,
	        type = undefined,
	        id = undefined;

	    if (this.trackIds) {
	      id = this.popStack();
	    }
	    if (this.stringParams) {
	      type = this.popStack();
	      context = this.popStack();
	    }

	    var hash = this.hash;
	    if (context) {
	      hash.contexts[key] = context;
	    }
	    if (type) {
	      hash.types[key] = type;
	    }
	    if (id) {
	      hash.ids[key] = id;
	    }
	    hash.values[key] = value;
	  },

	  pushId: function pushId(type, name, child) {
	    if (type === 'BlockParam') {
	      this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
	    } else if (type === 'PathExpression') {
	      this.pushString(name);
	    } else if (type === 'SubExpression') {
	      this.pushStackLiteral('true');
	    } else {
	      this.pushStackLiteral('null');
	    }
	  },

	  // HELPERS

	  compiler: JavaScriptCompiler,

	  compileChildren: function compileChildren(environment, options) {
	    var children = environment.children,
	        child = undefined,
	        compiler = undefined;

	    for (var i = 0, l = children.length; i < l; i++) {
	      child = children[i];
	      compiler = new this.compiler(); // eslint-disable-line new-cap

	      var existing = this.matchExistingProgram(child);

	      if (existing == null) {
	        this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
	        var index = this.context.programs.length;
	        child.index = index;
	        child.name = 'program' + index;
	        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
	        this.context.decorators[index] = compiler.decorators;
	        this.context.environments[index] = child;

	        this.useDepths = this.useDepths || compiler.useDepths;
	        this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
	        child.useDepths = this.useDepths;
	        child.useBlockParams = this.useBlockParams;
	      } else {
	        child.index = existing.index;
	        child.name = 'program' + existing.index;

	        this.useDepths = this.useDepths || existing.useDepths;
	        this.useBlockParams = this.useBlockParams || existing.useBlockParams;
	      }
	    }
	  },
	  matchExistingProgram: function matchExistingProgram(child) {
	    for (var i = 0, len = this.context.environments.length; i < len; i++) {
	      var environment = this.context.environments[i];
	      if (environment && environment.equals(child)) {
	        return environment;
	      }
	    }
	  },

	  programExpression: function programExpression(guid) {
	    var child = this.environment.children[guid],
	        programParams = [child.index, 'data', child.blockParams];

	    if (this.useBlockParams || this.useDepths) {
	      programParams.push('blockParams');
	    }
	    if (this.useDepths) {
	      programParams.push('depths');
	    }

	    return 'container.program(' + programParams.join(', ') + ')';
	  },

	  useRegister: function useRegister(name) {
	    if (!this.registers[name]) {
	      this.registers[name] = true;
	      this.registers.list.push(name);
	    }
	  },

	  push: function push(expr) {
	    if (!(expr instanceof Literal)) {
	      expr = this.source.wrap(expr);
	    }

	    this.inlineStack.push(expr);
	    return expr;
	  },

	  pushStackLiteral: function pushStackLiteral(item) {
	    this.push(new Literal(item));
	  },

	  pushSource: function pushSource(source) {
	    if (this.pendingContent) {
	      this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
	      this.pendingContent = undefined;
	    }

	    if (source) {
	      this.source.push(source);
	    }
	  },

	  replaceStack: function replaceStack(callback) {
	    var prefix = ['('],
	        stack = undefined,
	        createdStack = undefined,
	        usedLiteral = undefined;

	    /* istanbul ignore next */
	    if (!this.isInline()) {
	      throw new _exception2['default']('replaceStack on non-inline');
	    }

	    // We want to merge the inline statement into the replacement statement via ','
	    var top = this.popStack(true);

	    if (top instanceof Literal) {
	      // Literals do not need to be inlined
	      stack = [top.value];
	      prefix = ['(', stack];
	      usedLiteral = true;
	    } else {
	      // Get or create the current stack name for use by the inline
	      createdStack = true;
	      var _name = this.incrStack();

	      prefix = ['((', this.push(_name), ' = ', top, ')'];
	      stack = this.topStack();
	    }

	    var item = callback.call(this, stack);

	    if (!usedLiteral) {
	      this.popStack();
	    }
	    if (createdStack) {
	      this.stackSlot--;
	    }
	    this.push(prefix.concat(item, ')'));
	  },

	  incrStack: function incrStack() {
	    this.stackSlot++;
	    if (this.stackSlot > this.stackVars.length) {
	      this.stackVars.push('stack' + this.stackSlot);
	    }
	    return this.topStackName();
	  },
	  topStackName: function topStackName() {
	    return 'stack' + this.stackSlot;
	  },
	  flushInline: function flushInline() {
	    var inlineStack = this.inlineStack;
	    this.inlineStack = [];
	    for (var i = 0, len = inlineStack.length; i < len; i++) {
	      var entry = inlineStack[i];
	      /* istanbul ignore if */
	      if (entry instanceof Literal) {
	        this.compileStack.push(entry);
	      } else {
	        var stack = this.incrStack();
	        this.pushSource([stack, ' = ', entry, ';']);
	        this.compileStack.push(stack);
	      }
	    }
	  },
	  isInline: function isInline() {
	    return this.inlineStack.length;
	  },

	  popStack: function popStack(wrapped) {
	    var inline = this.isInline(),
	        item = (inline ? this.inlineStack : this.compileStack).pop();

	    if (!wrapped && item instanceof Literal) {
	      return item.value;
	    } else {
	      if (!inline) {
	        /* istanbul ignore next */
	        if (!this.stackSlot) {
	          throw new _exception2['default']('Invalid stack pop');
	        }
	        this.stackSlot--;
	      }
	      return item;
	    }
	  },

	  topStack: function topStack() {
	    var stack = this.isInline() ? this.inlineStack : this.compileStack,
	        item = stack[stack.length - 1];

	    /* istanbul ignore if */
	    if (item instanceof Literal) {
	      return item.value;
	    } else {
	      return item;
	    }
	  },

	  contextName: function contextName(context) {
	    if (this.useDepths && context) {
	      return 'depths[' + context + ']';
	    } else {
	      return 'depth' + context;
	    }
	  },

	  quotedString: function quotedString(str) {
	    return this.source.quotedString(str);
	  },

	  objectLiteral: function objectLiteral(obj) {
	    return this.source.objectLiteral(obj);
	  },

	  aliasable: function aliasable(name) {
	    var ret = this.aliases[name];
	    if (ret) {
	      ret.referenceCount++;
	      return ret;
	    }

	    ret = this.aliases[name] = this.source.wrap(name);
	    ret.aliasable = true;
	    ret.referenceCount = 1;

	    return ret;
	  },

	  setupHelper: function setupHelper(paramSize, name, blockHelper) {
	    var params = [],
	        paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
	    var foundHelper = this.nameLookup('helpers', name, 'helper'),
	        callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : (container.nullContext || {})');

	    return {
	      params: params,
	      paramsInit: paramsInit,
	      name: foundHelper,
	      callParams: [callContext].concat(params)
	    };
	  },

	  setupParams: function setupParams(helper, paramSize, params) {
	    var options = {},
	        contexts = [],
	        types = [],
	        ids = [],
	        objectArgs = !params,
	        param = undefined;

	    if (objectArgs) {
	      params = [];
	    }

	    options.name = this.quotedString(helper);
	    options.hash = this.popStack();

	    if (this.trackIds) {
	      options.hashIds = this.popStack();
	    }
	    if (this.stringParams) {
	      options.hashTypes = this.popStack();
	      options.hashContexts = this.popStack();
	    }

	    var inverse = this.popStack(),
	        program = this.popStack();

	    // Avoid setting fn and inverse if neither are set. This allows
	    // helpers to do a check for `if (options.fn)`
	    if (program || inverse) {
	      options.fn = program || 'container.noop';
	      options.inverse = inverse || 'container.noop';
	    }

	    // The parameters go on to the stack in order (making sure that they are evaluated in order)
	    // so we need to pop them off the stack in reverse order
	    var i = paramSize;
	    while (i--) {
	      param = this.popStack();
	      params[i] = param;

	      if (this.trackIds) {
	        ids[i] = this.popStack();
	      }
	      if (this.stringParams) {
	        types[i] = this.popStack();
	        contexts[i] = this.popStack();
	      }
	    }

	    if (objectArgs) {
	      options.args = this.source.generateArray(params);
	    }

	    if (this.trackIds) {
	      options.ids = this.source.generateArray(ids);
	    }
	    if (this.stringParams) {
	      options.types = this.source.generateArray(types);
	      options.contexts = this.source.generateArray(contexts);
	    }

	    if (this.options.data) {
	      options.data = 'data';
	    }
	    if (this.useBlockParams) {
	      options.blockParams = 'blockParams';
	    }
	    return options;
	  },

	  setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
	    var options = this.setupParams(helper, paramSize, params);
	    options = this.objectLiteral(options);
	    if (useRegister) {
	      this.useRegister('options');
	      params.push('options');
	      return ['options=', options];
	    } else if (params) {
	      params.push(options);
	      return '';
	    } else {
	      return options;
	    }
	  }
	};

	(function () {
	  var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

	  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

	  for (var i = 0, l = reservedWords.length; i < l; i++) {
	    compilerWords[reservedWords[i]] = true;
	  }
	})();

	JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
	  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
	};

	function strictLookup(requireTerminal, compiler, parts, type) {
	  var stack = compiler.popStack(),
	      i = 0,
	      len = parts.length;
	  if (requireTerminal) {
	    len--;
	  }

	  for (; i < len; i++) {
	    stack = compiler.nameLookup(stack, parts[i], type);
	  }

	  if (requireTerminal) {
	    return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
	  } else {
	    return stack;
	  }
	}

	exports['default'] = JavaScriptCompiler;
	module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/* global define */
	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(5);

	var SourceNode = undefined;

	try {
	  /* istanbul ignore next */
	  if (false) {
	    // We don't support this in AMD environments. For these environments, we asusme that
	    // they are running on the browser and thus have no need for the source-map library.
	    var SourceMap = require('source-map');
	    SourceNode = SourceMap.SourceNode;
	  }
	} catch (err) {}
	/* NOP */

	/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
	if (!SourceNode) {
	  SourceNode = function (line, column, srcFile, chunks) {
	    this.src = '';
	    if (chunks) {
	      this.add(chunks);
	    }
	  };
	  /* istanbul ignore next */
	  SourceNode.prototype = {
	    add: function add(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src += chunks;
	    },
	    prepend: function prepend(chunks) {
	      if (_utils.isArray(chunks)) {
	        chunks = chunks.join('');
	      }
	      this.src = chunks + this.src;
	    },
	    toStringWithSourceMap: function toStringWithSourceMap() {
	      return { code: this.toString() };
	    },
	    toString: function toString() {
	      return this.src;
	    }
	  };
	}

	function castChunk(chunk, codeGen, loc) {
	  if (_utils.isArray(chunk)) {
	    var ret = [];

	    for (var i = 0, len = chunk.length; i < len; i++) {
	      ret.push(codeGen.wrap(chunk[i], loc));
	    }
	    return ret;
	  } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
	    // Handle primitives that the SourceNode will throw up on
	    return chunk + '';
	  }
	  return chunk;
	}

	function CodeGen(srcFile) {
	  this.srcFile = srcFile;
	  this.source = [];
	}

	CodeGen.prototype = {
	  isEmpty: function isEmpty() {
	    return !this.source.length;
	  },
	  prepend: function prepend(source, loc) {
	    this.source.unshift(this.wrap(source, loc));
	  },
	  push: function push(source, loc) {
	    this.source.push(this.wrap(source, loc));
	  },

	  merge: function merge() {
	    var source = this.empty();
	    this.each(function (line) {
	      source.add(['  ', line, '\n']);
	    });
	    return source;
	  },

	  each: function each(iter) {
	    for (var i = 0, len = this.source.length; i < len; i++) {
	      iter(this.source[i]);
	    }
	  },

	  empty: function empty() {
	    var loc = this.currentLocation || { start: {} };
	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
	  },
	  wrap: function wrap(chunk) {
	    var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

	    if (chunk instanceof SourceNode) {
	      return chunk;
	    }

	    chunk = castChunk(chunk, this, loc);

	    return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
	  },

	  functionCall: function functionCall(fn, type, params) {
	    params = this.generateList(params);
	    return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
	  },

	  quotedString: function quotedString(str) {
	    return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
	    .replace(/\u2029/g, '\\u2029') + '"';
	  },

	  objectLiteral: function objectLiteral(obj) {
	    var pairs = [];

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        var value = castChunk(obj[key], this);
	        if (value !== 'undefined') {
	          pairs.push([this.quotedString(key), ':', value]);
	        }
	      }
	    }

	    var ret = this.generateList(pairs);
	    ret.prepend('{');
	    ret.add('}');
	    return ret;
	  },

	  generateList: function generateList(entries) {
	    var ret = this.empty();

	    for (var i = 0, len = entries.length; i < len; i++) {
	      if (i) {
	        ret.add(',');
	      }

	      ret.add(castChunk(entries[i], this));
	    }

	    return ret;
	  },

	  generateArray: function generateArray(entries) {
	    var ret = this.generateList(entries);
	    ret.prepend('[');
	    ret.add(']');

	    return ret;
	  }
	};

	exports['default'] = CodeGen;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;
/**
* simplePagination.js v1.6
* A simple jQuery pagination plugin.
* http://flaviusmatis.github.com/simplePagination.js/
*
* Copyright 2012, Flavius Matis
* Released under the MIT license.
* http://flaviusmatis.github.com/license.html
*/

(function($){

	var methods = {
		init: function(options) {
			var o = $.extend({
				items: 1,
				itemsOnPage: 1,
				pages: 0,
				displayedPages: 5,
				edges: 2,
				currentPage: 0,
				useAnchors: true,
				hrefTextPrefix: '#page-',
				hrefTextSuffix: '',
				prevText: 'Prev',
				nextText: 'Next',
				ellipseText: '&hellip;',
				ellipsePageSet: true,
				cssStyle: 'light-theme',
				listStyle: '',
				labelMap: [],
				selectOnClick: true,
				nextAtFront: false,
				invertPageOrder: false,
				useStartEdge : true,
				useEndEdge : true,
				onPageClick: function(pageNumber, event) {
					// Callback triggered when a page is clicked
					// Page number is given as an optional parameter
				},
				onInit: function() {
					// Callback triggered immediately after initialization
				}
			}, options || {});

			var self = this;

			o.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage) ? Math.ceil(o.items / o.itemsOnPage) : 1;
			if (o.currentPage)
				o.currentPage = o.currentPage - 1;
			else
				o.currentPage = !o.invertPageOrder ? 0 : o.pages - 1;
			o.halfDisplayed = o.displayedPages / 2;

			this.each(function() {
				self.addClass(o.cssStyle + ' simple-pagination').data('pagination', o);
				methods._draw.call(self);
			});

			o.onInit();

			return this;
		},

		selectPage: function(page) {
			methods._selectPage.call(this, page - 1);
			return this;
		},

		prevPage: function() {
			var o = this.data('pagination');
			if (!o.invertPageOrder) {
				if (o.currentPage > 0) {
					methods._selectPage.call(this, o.currentPage - 1);
				}
			} else {
				if (o.currentPage < o.pages - 1) {
					methods._selectPage.call(this, o.currentPage + 1);
				}
			}
			return this;
		},

		nextPage: function() {
			var o = this.data('pagination');
			if (!o.invertPageOrder) {
				if (o.currentPage < o.pages - 1) {
					methods._selectPage.call(this, o.currentPage + 1);
				}
			} else {
				if (o.currentPage > 0) {
					methods._selectPage.call(this, o.currentPage - 1);
				}
			}
			return this;
		},

		getPagesCount: function() {
			return this.data('pagination').pages;
		},

		setPagesCount: function(count) {
			this.data('pagination').pages = count;
		},

		getCurrentPage: function () {
			return this.data('pagination').currentPage + 1;
		},

		destroy: function(){
			this.empty();
			return this;
		},

		drawPage: function (page) {
			var o = this.data('pagination');
			o.currentPage = page - 1;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		redraw: function(){
			methods._draw.call(this);
			return this;
		},

		disable: function(){
			var o = this.data('pagination');
			o.disabled = true;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		enable: function(){
			var o = this.data('pagination');
			o.disabled = false;
			this.data('pagination', o);
			methods._draw.call(this);
			return this;
		},

		updateItems: function (newItems) {
			var o = this.data('pagination');
			o.items = newItems;
			o.pages = methods._getPages(o);
			this.data('pagination', o);
			methods._draw.call(this);
		},

		updateItemsOnPage: function (itemsOnPage) {
			var o = this.data('pagination');
			o.itemsOnPage = itemsOnPage;
			o.pages = methods._getPages(o);
			this.data('pagination', o);
			methods._selectPage.call(this, 0);
			return this;
		},

		getItemsOnPage: function() {
			return this.data('pagination').itemsOnPage;
		},

		_draw: function() {
			var	o = this.data('pagination'),
				interval = methods._getInterval(o),
				i,
				tagName;

			methods.destroy.call(this);

			tagName = (typeof this.prop === 'function') ? this.prop('tagName') : this.attr('tagName');

			var $panel = tagName === 'UL' ? this : $('<ul' + (o.listStyle ? ' class="' + o.listStyle + '"' : '') + '></ul>').appendTo(this);

			// Generate Prev link
			if (o.prevText) {
				methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, {text: o.prevText, classes: 'prev'});
			}

			// Generate Next link (if option set for at front)
			if (o.nextText && o.nextAtFront) {
				methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
			}

			// Generate start edges
			if (!o.invertPageOrder) {
				if (interval.start > 0 && o.edges > 0) {
					if(o.useStartEdge) {
						var end = Math.min(o.edges, interval.start);
						for (i = 0; i < end; i++) {
							methods._appendItem.call(this, i);
						}
					}
					if (o.edges < interval.start && (interval.start - o.edges != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (interval.start - o.edges == 1) {
						methods._appendItem.call(this, o.edges);
					}
				}
			} else {
				if (interval.end < o.pages && o.edges > 0) {
					if(o.useStartEdge) {
						var begin = Math.max(o.pages - o.edges, interval.end);
						for (i = o.pages - 1; i >= begin; i--) {
							methods._appendItem.call(this, i);
						}
					}

					if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (o.pages - o.edges - interval.end == 1) {
						methods._appendItem.call(this, interval.end);
					}
				}
			}

			// Generate interval links
			if (!o.invertPageOrder) {
				for (i = interval.start; i < interval.end; i++) {
					methods._appendItem.call(this, i);
				}
			} else {
				for (i = interval.end - 1; i >= interval.start; i--) {
					methods._appendItem.call(this, i);
				}
			}

			// Generate end edges
			if (!o.invertPageOrder) {
				if (interval.end < o.pages && o.edges > 0) {
					if (o.pages - o.edges > interval.end && (o.pages - o.edges - interval.end != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (o.pages - o.edges - interval.end == 1) {
						methods._appendItem.call(this, interval.end);
					}
					if(o.useEndEdge) {
						var begin = Math.max(o.pages - o.edges, interval.end);
						for (i = begin; i < o.pages; i++) {
							methods._appendItem.call(this, i);
						}
					}
				}
			} else {
				if (interval.start > 0 && o.edges > 0) {
					if (o.edges < interval.start && (interval.start - o.edges != 1)) {
						$panel.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + '</span></li>');
					} else if (interval.start - o.edges == 1) {
						methods._appendItem.call(this, o.edges);
					}

					if(o.useEndEdge) {
						var end = Math.min(o.edges, interval.start);
						for (i = end - 1; i >= 0; i--) {
							methods._appendItem.call(this, i);
						}
					}
				}
			}

			// Generate Next link (unless option is set for at front)
			if (o.nextText && !o.nextAtFront) {
				methods._appendItem.call(this, !o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {text: o.nextText, classes: 'next'});
			}

			if (o.ellipsePageSet && !o.disabled) {
				methods._ellipseClick.call(this, $panel);
			}

		},

		_getPages: function(o) {
			var pages = Math.ceil(o.items / o.itemsOnPage);
			return pages || 1;
		},

		_getInterval: function(o) {
			return {
				start: Math.ceil(o.currentPage > o.halfDisplayed ? Math.max(Math.min(o.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
				end: Math.ceil(o.currentPage > o.halfDisplayed ? Math.min(o.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
			};
		},

		_appendItem: function(pageIndex, opts) {
			var self = this, options, $link, o = self.data('pagination'), $linkWrapper = $('<li></li>'), $ul = self.find('ul');

			pageIndex = pageIndex < 0 ? 0 : (pageIndex < o.pages ? pageIndex : o.pages - 1);

			options = {
				text: pageIndex + 1,
				classes: ''
			};

			if (o.labelMap.length && o.labelMap[pageIndex]) {
				options.text = o.labelMap[pageIndex];
			}

			options = $.extend(options, opts || {});

			if (pageIndex == o.currentPage || o.disabled) {
				if (o.disabled || options.classes === 'prev' || options.classes === 'next') {
					$linkWrapper.addClass('disabled');
				} else {
					$linkWrapper.addClass('active');
				}
				$link = $('<span class="current">' + (options.text) + '</span>');
			} else {
				if (o.useAnchors) {
					$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + o.hrefTextSuffix + '" class="page-link">' + (options.text) + '</a>');
				} else {
					$link = $('<span >' + (options.text) + '</span>');
				}
				$link.click(function(event){
					return methods._selectPage.call(self, pageIndex, event);
				});
			}

			if (options.classes) {
				$link.addClass(options.classes);
			}

			$linkWrapper.append($link);

			if ($ul.length) {
				$ul.append($linkWrapper);
			} else {
				self.append($linkWrapper);
			}
		},

		_selectPage: function(pageIndex, event) {
			var o = this.data('pagination');
			o.currentPage = pageIndex;
			if (o.selectOnClick) {
				methods._draw.call(this);
			}
			return o.onPageClick(pageIndex + 1, event);
		},


		_ellipseClick: function($panel) {
			var self = this,
				o = this.data('pagination'),
				$ellip = $panel.find('.ellipse');
			$ellip.addClass('clickable').parent().removeClass('disabled');
			$ellip.click(function(event) {
				if (!o.disable) {
					var $this = $(this),
						val = (parseInt($this.parent().prev().text(), 10) || 0) + 1;
					$this
						.html('<input type="number" min="1" max="' + o.pages + '" step="1" value="' + val + '">')
						.find('input')
						.focus()
						.click(function(event) {
							// prevent input number arrows from bubbling a click event on $ellip
							event.stopPropagation();
						})
						.keyup(function(event) {
							var val = $(this).val();
							if (event.which === 13 && val !== '') {
								// enter to accept
								if ((val>0)&&(val<=o.pages))
								methods._selectPage.call(self, val - 1);
							} else if (event.which === 27) {
								// escape to cancel
								$ellip.empty().html(o.ellipseText);
							}
						})
						.bind('blur', function(event) {
							var val = $(this).val();
							if (val !== '') {
								methods._selectPage.call(self, val - 1);
							}
							$ellip.empty().html(o.ellipseText);
							return false;
						});
				}
				return false;
			});
		}

	};

	$.fn.pagination = function(method) {

		// Method calling logic
		if (methods[method] && method.charAt(0) != '_') {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.pagination');
		}

	};

})(jQuery);

var filterOptions = (function ($) {

    var debug_mode = false;
    var filterOptions = {};
    var currentCount = 10;
    // define modes
    var Modes = Object.freeze({ "default": 0, "product": 1, "subcategory": 2, "series": 3 });
    var filterModes = Modes.product;
    var i18n_compare_product = Granite.I18n.get("Compare");
    var i18n_details = Granite.I18n.get("Details");
    var hasUsedInitialURLFilterParams = false;
    filterOptions.init = function () {
        $(document).ready(function () {
            var search_list_selector = ".search-list";
            var $filter = $(search_list_selector);
            if (!$filter.length) {
                return;
            }
            var customProduct = $filter.find(".advanced-filter-wrapper").attr("data-custom");
            // ajax return filters
            var advancedFilters;
            // root level prop, ajax return orig products
            var _products_orig;
            // root level prop, render product to template
            var _products_filtered = [];
            // root level prop, keep track of all states of filter options
            var _filter_state = {};
            // set to category dropdown
            var categoryArray = [];
            // set to sub category dropdown
            var subcategoryArray = [];
            // set to sub category dropdown
            var subcategories = [];
            // set to series dropdown
            var series = [];
            // filterTemplate in filter state(filters.subItems.subItems)
            var filterTemplate = {};
            // product list template
            var tpl = $("#result-grid-product-template").html();
            var template = Handlebars.compile(tpl);
            var fiveYearWarrantyLink = $('.global-header .header-wrapper').attr('data-warranty-page') || '';
            $('.pagination-section').hide();
            $('.result-grid-layout4-wrapper .product-loading').show();

            // ajax url
            var url = $filter.find('.filter-container').data(url);
            if (url != null && url['url']) {
                var source = url['url'];
                $.ajax({
                    url: source + ".json",
                    dataType: 'json',
                    type: 'get',
                    contentType: 'application/json',
                    success: function (data) {
                        advancedFilters = data.filters;
                        // store original source, apply no filter at beginning
                        _products_filtered = _products_orig = data.products;
                        // Populate category dropdown
                        populateCategoryFilter(data.filters);

                        // render products
                        renderProducts(_products_filtered);
                        // render subseries
                        if (_filter_state && _filter_state.series && _filter_state.series.options) {
                            // hideSubseries(_products_filtered, _filter_state.series.options.Subseries);
                            hideOptions(_products_filtered, advancedFilters, _filter_state.series.options.Subseries);
                        }
                        initURLFilterParamToFilterPanel();

                        $('.result-grid-layout4-wrapper .product-loading').hide();
                        if(getCurrentBreakPoint() == 'DESKTOP') $('.pagination-section').css('display', 'flex');
                        
                        // ten by ten  mobile
                        viewMoreForMoblie();
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }

            // images lazyload
            var invokeLazyLoad = function () {
                $filter.find('.lazy').lazyload();
            };

            // step 1: populate filters
            var populateCategoryFilter = function (filters) {
                // pre-process to find filter mode (series mode, subcategory mode, product mode > default)
                var subItemSize = function (node) {
                    return node.filter(function (obj) {
                        return (obj.subItems != null);
                    }).length
                };
                var isDepth3Match = (filters[0] && filters[0].subItems[0] && filters[0].subItems[0].subItems) ? (subItemSize(filters[0].subItems[0].subItems) === 1) : false;
                var isDepth2Match = (filters[0] && filters[0].subItems) ? (subItemSize(filters[0].subItems) === 1) : false;
                var isDepth1Match = (filters.length === 1);

                //
                var getMode = function () {
                    if (isDepth3Match && isDepth2Match && isDepth1Match) return Modes.series;
                    if (isDepth2Match && isDepth1Match) return Modes.subcategory;
                    if (isDepth1Match) return Modes.product;
                    return Modes.default;
                };
                filterModes = getMode();
                series = [];

                switch (filterModes) {
                    // populate series filters
                    case Modes.series:
                        var seriesObj = filters[0].subItems[0].subItems.filter(
                            function (obj, i) {
                                return obj['subItems'] != null
                            }
                        )[0];

                        // find filterTemplate in depth 3 for filter options except Subseries
                        filterTemplate = filters[0].subItems[0].subItems.filter(function (obj, i) {
                            return obj.title === 'filterTemplate'
                        })[0];

                        // set selector to disabled mode
                        disableCategorySelector("series", $categorySelector, seriesObj.title);
                        
                        series.push(seriesObj);
                        selectSeriesByIndex(0);
                    // populate subcategory filters
                    case Modes.subcategory:
                        subcategories = filters[0].subItems;
                        // set selector to disabled mode
                        disableCategorySelector("subcategory", $categorySelector, filters[0].subItems[0].title);
                        selectSubCategoryByIndex(0);
                    // populate product filters
                    case Modes.product:
                        // set selector to disabled mode
                        disableCategorySelector("category", $categorySelector, filters[0].title);
                        selectCategoryByIndex(0);
                        renderCategoryListDropdown(filters);
                        break;
                    // default mode : category mode
                    // populate category filters
                    default:
                        _filter_state = {};
                        renderCategoryListDropdown(filters);
                        disableCategorySelector("subcategory");
                        disableCategorySelector("series");
                        break;
                }
            };

            // model disable set disable, page load from detail product series
            var disableCategorySelector = function (type, categorySelector, label) {
                var selector = '[data-title-type="' + type + '"]';
                $(selector).hide();
                $('[data-title-type="Subseries"] .filter-card-header').removeClass('collapsed')
                $('[data-title-type="Subseries"] .collapse').collapse('show');
            };

            // render category dropdown list
            var renderCategoryListDropdown = function (filters) {
                $.each(filters, function (i, obj) {
                    var checkboxOptions = filters[i];

                    // set filter state
                    if (_filter_state['category'] !== undefined) {
                        _filter_state['category']['value'] = checkboxOptions.title;
                    }

                    $accordion.find(".card").each(function () {
                        if ($(this).is('[data-title-type]')) {
                            if ($(this).attr('data-title-type') == 'category') {
                                // category display and value same
                                categoryArray.push(checkboxOptions.title);
                                var radio = '<li class="list-options">' +
                                                '<input title="'+ checkboxOptions.title +'" type="radio" name="category" id="category-'+i+'" value="'+ checkboxOptions.title +'" required="required">' +
                                                '<label for="category-'+ i +'">' +
                                                    '<span>'+ checkboxOptions.title +'</span>'+
                                                '</label>'+
                                            '</li>';
                                
                                $(this).find('.checkbox-left').append(radio);
                            }
                        }
                    });
                });
                // atModel.initAtAction();
            };

            var bindThreeRadioCheck = function (selector) {
                $(selector).on("change", function (e) {
                    var checked=false;
                    var $card = $(this).closest('.card');
                    $(this).closest('ul').find('input').each(function (i) {
                        if ($(this).parent().css("display") !== "none") {
                            if($(this).is(":checked")) {checked = true}
                        }
                    });

                    if (checked) {
                        $card.find(".triangle-indicator").addClass('active');
                    } else {
                        $card.find(".triangle-indicator").removeClass('active');
                    }
                });
            }

            // step 2: Populate products
            var renderProducts = function (data, search) {
                var itemsOnPageVal = parseInt($(search_list_selector).find('.pagination-section').attr('data-num'));
                // render product to template
                fetchResult(data, itemsOnPageVal, 0);
                $('.advanced-filter-submit .sum-number-of-products').html('(' + data.length + ')')
                if(!$.isEmptyObject(_filter_state) || search) {
                    $('.result-grid-layout4-wrapper .sum-of-products').addClass('active');
                    $('.result-grid-layout4-wrapper .sum-number-of-products').html(data.length);
                }
                if(!$.isEmptyObject(_filter_state)) {
                    $('.advanced-filter-search-wrapper-mobile').addClass('active');
                } 
                
                if(data.length > 0){
                    if(getCurrentBreakPoint() == 'DESKTOP') $('.pagination-section').css('display', 'flex');
                    $('.product-blank-page').removeClass('active');
                } else {
                    $('.pagination-section').hide();
                    $('.product-blank-page').addClass('active');
                }
                
                // create pagination
                createPagination(data);
                // filter dropdown options
                setupSelectedOptionTextboxFilters();
                // populate product compare check state
                productComparisonBottom.getCompareArray().forEach(function (value, index) {
                    $('input[data-product-url="' + value.productUrl + '"]').attr('checked', true);
                });
            };

            // products filter result insert into template
            var fetchResult = function (products, limit, offset) {
                var matchedProducts = [];
                var end = offset + limit < products.length ? offset + limit : products.length;
                for (var i = offset; i < end; i++) {
                    products[i].details = i18n_details;
                    products[i].compareProduct = i18n_compare_product;
                    matchedProducts.push(products[i]);
                }
                // 设置更小的图片
                $.each(matchedProducts, function (i, item) {
                    if (item.image) {
                        if (getCurrentBreakPoint() != "MOBILE") {
                            item.image1 = item.image
                        } else {
                            item.image1 = !isCN ? item.image.replace("thumb.319.319", "thumb.140.100") : item.image
                        }
                    }
                })
                currentCount = 10;
                matchedProducts.length < 10 ? $('.search-list .product-view-more').removeClass('active') :  $('.search-list .product-view-more').addClass('active');
                var items = getCurrentBreakPoint() != "MOBILE" ? matchedProducts : matchedProducts.slice(0, 10);
                $('#layout4-pagination').empty().html(template(items));
                invokeLazyLoad();
                var $layoutItems = $(".result-grid-layout4-wrapper .layout4-content-wrapper");
                $layoutItems.each(function (index, item) {
                    $(item).find('.tag-fiveYearWarranty').on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        if (fiveYearWarrantyLink && getCurrentBreakPoint() != "MOBILE") {
                           window.open(fiveYearWarrantyLink, '_blank'); 
                        }
                    });
                    $(item).find('.tag-replacementInsteadOfRepair').on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    $(item).find('.tag-amsStock').on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    $(item).find(".tag-replacementInsteadOfRepair, .tag-fiveYearWarranty, .tag-amsStock").hover(function(){
                        if(getCurrentBreakPoint() !== 'DESKTOP'){
                            return;
                        }
                        var $ele = $(this);
                        var elementOffset = $ele.offset();
                        var windowWidth = $(window).width();
                        var midDistanceFromRight = windowWidth - (elementOffset.left + $ele.outerWidth() / 2);
                        let tipName = getI18nString($(this).attr('data-tipName'));
                        $ele.find('.fiveYearWarranty_tip').append(`<span>${tipName}</span>`);
                        if (midDistanceFromRight < $ele.find('.fiveYearWarranty_tip').width() / 2) {
                            $ele.find('.fiveYearWarranty_tip').addClass('fiveYearWarranty_tip_right')
                        }
                        $ele.find('.fiveYearWarranty_tip').show();
                    }, function(){
                        if(getCurrentBreakPoint() !== 'DESKTOP'){
                            return;
                        }
                        var $ele = $(this);
                        $ele.find('.fiveYearWarranty_tip').empty();
                        $ele.find('.fiveYearWarranty_tip').hide();
                    });
                })
                // bug#2608
                for (var i = 0; i < compareTriggers.length; i++) {
                    productComparisonBottom.init(compareTriggers[i]);
                }

                // for at
                atModel.initAtNavigation(true, ".search-list #layout4-pagination .layout4-content-wrapper a.at-lazy");
            };

            var getI18nString = function(msg) {
                return typeof Granite == "undefined" ? msg : Granite.I18n.get(msg);
            }
            
            var viewMoreForMoblie = function() {
                $('.search-list .product-view-more').on('click', function(e){
                    var range = currentCount + 10;
                    var items = [];
                    if(range >= _products_filtered.length) {
                        range = _products_filtered.length;
                        $(this).removeClass('active');
                    }
                    for(var i = 0; i < range; i++) {
                        var obj =_.cloneDeep(_products_filtered[i]);
                        obj.details = i18n_details;
                        obj.compareProduct = i18n_compare_product;
                        items.push(obj);
                    }
                    $.each(items, function (i, item) {
                        if (item.image) {
                            if (getCurrentBreakPoint() != "MOBILE") {
                                item.image1 = item.image
                            } else {
                                item.image1 = !isCN ? item.image.replace("thumb.319.319", "thumb.140.100") : item.image
                            }
                        }
                    })
                    currentCount += 10;
                    $('#layout4-pagination').html(template(items));
                    invokeLazyLoad();

                    // bug#2608
                    for (var i = 0; i < compareTriggers.length; i++) {
                        productComparisonBottom.init(compareTriggers[i]);
                    }

                    // for at
                    atModel.initAtNavigation(true, ".search-list #layout4-pagination .layout4-content-wrapper a.at-lazy");
                })
            }
        
            // create pagination
            var createPagination = function (products) {
                var itemsOnPageVal = parseInt($(search_list_selector).find('.pagination-section').attr('data-num'));
                if(getCurrentBreakPoint() == 'DESKTOP') {
                    $("#layout-pagination-wrapper").pagination({
                        items: products.length,
                        itemsOnPage: itemsOnPageVal,
                        cssStyle: "light-theme",
                        currentPage: 1,
                        edges: 1,
                        useAnchors: false,
                        paginationShowPageGo:false,
                        prevText: '<',
                        nextText: '>',
                        onPageClick: function (currentPageNumber, e) {
                          atModel.doAtEvent('product_series_list::pagination::' + currentPageNumber + "::" + window.location.href, 'action', e)
                          fetchResult(products, itemsOnPageVal, (itemsOnPageVal * (currentPageNumber - 1)));
                          stickyList['sticky']();
                          $(".ellipse.clickable").on("click", function(e){
                            e.preventDefault();
                            $(this).html("...");
                            return false;
                        })
                        }
                    });
                    $(".ellipse.clickable").on("click", function(e){
                        e.preventDefault();
                        $(this).html("...");
                        return false;
                    })
                }
            };
            $(search_list_selector).find('.item-num-for-page select.number-select').selectpicker({});

            $(search_list_selector).find('.item-num-for-page select.number-select').on('loaded.bs.select', function () {
                $(this).parent().find('button').attr('title', '');
            });

            $(search_list_selector).find('.item-num-for-page select.number-select').on('changed.bs.select', function (e) {
                var numberVal = $(this).val();
                $(this).parent().find('button').attr('title', '');
                $(search_list_selector).find('.pagination-section').attr('data-num', numberVal);
                renderProducts(_products_filtered);
                atModel.doAtEvent('product_series_list::pagination_selector::' + $(this).val() + '/page::' + window.location.href, 'action', e)
            });

            // Textbox to filter dropdown options
            var setupSelectedOptionTextboxFilters = function () {
                $('.selected-option-wrapper').find(".selected-option").off("keyup");
                $('.selected-option-wrapper').find(".selected-option").on("keyup", function () {
                    if ($(this).prop("readonly")) return; // avoid readonly field to do filter
                    var value = $(this).val().toLowerCase();
                    $(this).closest('.category-dropdown-wrapper').find('.category-dropdown').find("*").filter(function () {
                        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                    });
                });
            };

            // end option collapse events

            var ignorantList = $("#ignorant-product-filters").attr("value");
            // filter wrapper
            var $accordion = $("#advanced-filter-accordion");
            // category input
            var $categorySelected = $('.category-selected-option');
            // sub category input
            var $subcategorySelected = $('.subcategory-selected-option');
            // series input
            var $seriesSelected = $('.series-selected-option');
            // todo unuse
            var $selectedCategory = [];
            // all products in list
            var $resultgridItems = $(".result-grid-layout4-wrapper .layout4-content-wrapper");
            // filter product result, try to set hide-result
            var filterResult = function () {
                $resultgridItems.each(function () {
                    var resultItemCategory = $(this).attr("data-category");
                    if (resultItemCategory !== "All Products" && $selectedCategory.length) {
                        if ($selectedCategory.indexOf(resultItemCategory) > -1) {
                            $(this).removeClass('hide-result');
                        } else {
                            $(this).removeClass('hide-result');
                            $(this).addClass('hide-result');
                        }
                    } else {
                        $(this).removeClass('hide-result');
                    }
                })
            };
            // todo unuse
            $($accordion).on('click', '.category-checkbox', function () {
                if ($(this).is(':checked')) {
                    if ($(this).attr("data-category") !== "All Products") {
                        $selectedCategory.push($(this).attr("data-category"));
                        filterResult();
                    } else {
                        $resultgridItems.each(function () {
                            $(this).removeClass('hide-result');
                        })
                    }
                } else {
                    if ($(this).attr("data-category") == "All Products") {
                        filterResult();
                    }
                    if ($selectedCategory.indexOf($(this).attr("data-category")) > -1) {
                        $selectedCategory.splice($selectedCategory.indexOf($(this).attr("data-category")), 1);
                        filterResult();
                    }
                }

            });

            function bindClickRecount() {
                $('.search-list .advanced-filter-inner .filter-container .filter-card .collapse').on('shown.bs.collapse', function () {
                    stickyList['test']();
                });
            }
            bindClickRecount();

            var $productDropdownElement = $('<div class="category-dropdown-wrapper"></div>');
            var $selectedOptionWrapperElement = $('<div class="selected-option-wrapper"></div>');
            var $categoryDropdownListElement = $('<ul class="category-dropdown"></ul>');
            var $selectedOptionElement = $('<input type="text" class="selected-option"></input>');
            var $arrowIconElement = $('<div class="arrow-icon"></div>');

            $selectedOptionElement.appendTo($selectedOptionWrapperElement);
            $arrowIconElement.appendTo($selectedOptionWrapperElement);

            // select category item, populate sub category dropdown
            // category option click
            $('.category-list-dropdown').on('click', '.list-options', function (e) {
                e.stopPropagation();
                var clickedIndex = categoryArray.indexOf($(this).text());
                var id = $(this).find('input').attr('id');

                $('.subcategory-list-dropdown').empty();
                $('[data-title-type="subcategory"] .triangle-indicator').removeClass('active');
                $('.series-list-dropdown').empty();
                $('[data-title-type="series"] .triangle-indicator').removeClass('active');
                $('.seriesFilterCont').remove();
                $subcategorySelected.val('');
                $seriesSelected.val('');
                selectCategoryByIndex(clickedIndex, this);
                
                var $category = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='category'] .card-body ul li");
                var $subCategory = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='subcategory']");
                var $subCategoryLi = $subCategory.find(".card-body ul li");
                if(!$subCategory.hasClass('only-category') && !($category.length == 1 && $subCategoryLi.length == 1)) {
                    $('[data-title-type="subcategory"]').show();
                }
                if($category.length == 1 ) {
                    $('[data-title-type="subcategory"] .filter-card-header').addClass('update-padding');
                }
                $('[data-title-type="series"]').hide();

                // change collapse icon state
                bindThreeRadioCheck('#' + id);
                // Apply product filter once category selected
                _filter_state['series'] = { "value": "", "options": {} };

                applyFilter(_products_orig, _filter_state, e, categoryArray[clickedIndex], 'Category');
            });

            // select category item, populate sub category dropdown
            var selectCategoryByIndex = function (index, that) {
                subcategoryArray = [];
                subcategories = advancedFilters[index].subItems;

                // set filter state
                _filter_state['category'] = { "index": index, "value": categoryArray[index] };
                _filter_state['subcategory'] = { "index": index, "value": "" };

                if (subcategories) {
                    $.each(subcategories, function (index, value) {
                        $accordion.find(".card").each(function () {
                            if ($(this).is('[data-title-type]')) {
                                if ($(this).attr('data-title-type') == 'subcategory') {
                                    subcategoryArray.push(value.title);
                                    var radio = '<li class="list-options">' +
                                                    '<input title="'+ value.title +'" type="radio" name="subcategory" id="subcategory-'+ index +'" value="'+ value.title +'" required="required">' +
                                                    '<label for="subcategory-'+ index +'">' +
                                                        '<span>'+ value.title +'</span>'+
                                                    '</label>'+
                                                '</li>';
                                    
                                    $(this).find('.subcategory-list-dropdown').append(radio);
                                }
                            }
                        });
                    });

                    if (that) {
                        $(that).closest('.category-dropdown').toggleClass('show remove-border');
                        $(that).closest($categorySelector).toggleClass('remove-border');
                        $(that).closest($categorySelector).find('.arrow-icon').toggleClass('arrow-up');
                    }
                }

            };

            // select sub category item, Populate Series dropdown
            // subcategory option click
            $('.subcategory-list-dropdown').on('click', '.list-options', function (e) {
                e.stopPropagation();
                var id = $(this).find('input').attr('id');
                
                bindThreeRadioCheck('#' + id);
                $('.series-list-dropdown').empty();
                $('[data-title-type="series"] .triangle-indicator').removeClass('active');
                $('.seriesFilterCont').remove();
                $seriesSelected.val('');
                var clickedSubcategoryIndex = subcategoryArray.indexOf($(this).text());
                selectSubCategoryByIndex(clickedSubcategoryIndex, this);
                var $category = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='category'] .card-body ul li");
                var $subCategory = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='subcategory'] .card-body ul li");
                var $series = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='series']");
                var $seriesLi = $series.find(".card-body ul li");

                if(!$series.hasClass('only-category') && !($category.length == 1 && $subCategory.length == 1 && $seriesLi.length == 1)) {
                    $('[data-title-type="series"]').show();
                }
                if($category.length == 1 && $subCategory.length == 1) {
                    $('[data-title-type="series"] .filter-card-header').addClass('update-padding');
                }

                // Show filter options
                var data = {
                    filterItems: filterTemplate && filterTemplate.filterItems ? filterTemplate.filterItems : []
                };
                seriesFilterOption(data);
                _filter_state['series'] = { "value": "", "options": {} };
                // Apply product filter once subcategory selected
                applyFilter(_products_orig, _filter_state, e, subcategories[clickedSubcategoryIndex].title, 'Subcategory');
            });

            // select sub category item, Populate Series dropdown
            var selectSubCategoryByIndex = function (index, that) {
                var subcategories1 = subcategories[index].subItems;
                series = [];

                // set filter state
                _filter_state['subcategory'] = { "index": index, "value": subcategories[index].title };

                if (subcategories1) {
                    $.each(subcategories1, function (index, value) {
                        if (value.title == "filterTemplate") {
                            filterTemplate = value;
                        } else {
                            $accordion.find(".card").each(function () {
                                if ($(this).is('[data-title-type]')) {
                                    if ($(this).attr('data-title-type') == 'series') {
                                        series.push(value);
                                        var radio = '<li class="list-options" style="' + (value.hideDropdown ? 'display: none;' : '') +'">' +
                                                        '<input title="'+ value.title +'" type="radio" name="series" id="series-'+ index +'" value="'+ value.title +'" required="required">' +
                                                        '<label for="series-'+ index +'">' +
                                                            '<span>'+ value.title +'</span>'+
                                                        '</label>'+
                                                    '</li>';
                                        $(this).find('.series-list-dropdown').append(radio);
                                    }
                                }
                            });
                        }
                    });

                    if (that) {
                        $(that).closest('.category-dropdown').toggleClass('show remove-border');
                        $(that).closest($categorySelector).toggleClass('remove-border');
                        $(that).closest($categorySelector).find('.arrow-icon').toggleClass('arrow-up');
                    }


                }
            };

            // select series item, Populate Series Filter dropdown
            // series option click
            $('.series-list-dropdown').on('click', '.list-options', function (e) {
                e.stopPropagation();
                $('.seriesFilterCont').remove();
                var selected = $(this).text();
                var selectedIndex = series.findIndex(function (obj) {
                    return obj.title === selected;
                });
                var id = $(this).find('input').attr('id');
                
                bindThreeRadioCheck('#' + id);
                selectSeriesByIndex(selectedIndex, this, e);

                // render subseries
                if (_filter_state && _filter_state.series && _filter_state.series.options) {
                    hideOptions(_products_filtered, advancedFilters, _filter_state.series.options.Subseries);
                }

            });

            // select series item, Populate Series Filter dropdown
            var selectSeriesByIndex = function (index, that, e) {
                if (that) {
                    $(that).closest('.category-dropdown').toggleClass('show remove-border');
                    $(that).closest($categorySelector).toggleClass('remove-border');
                    $(that).closest($categorySelector).find('.arrow-icon').toggleClass('arrow-up');
                    $('.seriesFilterCont').remove();
                }

                // add offer to the beginning of the filter array
                var filterArray = [];

                // find filter item
                $.each(series, function (i, obj) {
                    if (obj.title == series[index].title) {
                        obj.subItems && obj.subItems.length && obj.subItems[0].filterItems && obj.subItems[0].filterItems.length && filterArray.push(obj.subItems[0].filterItems[0]);
                    }
                });

                if (filterArray && filterArray.length > 0) {
                    if (filterTemplate) {
                        filterArray = filterArray.concat(filterTemplate.filterItems)
                    }

                    var data = {
                        filterItems: filterArray
                    };

                    // set filter state
                    _filter_state['series'] = { "value": series[index].title, "options": {} };

                    seriesFilterOption(data);

                    // apply filter
                    applyFilter(_products_orig, _filter_state, e, series[index].title, 'Series');

                }
                setupSelectedOptionTextboxFilters();
            };

            // select options item, Setting input box value on dropdown option selection
            // options click event
            $('.category-dropdown').on('click', '.list-options', function () {
                $(this).closest('.category-dropdown-wrapper').find(".selected-option").val($(this).text());
            });

            var $categorySelector = $('.category-dropdown-wrapper');
            var $categoryDropdown = $categorySelector.find('.category-dropdown');
            var $categorySelectedOption = $categorySelector.find('.selected-option-wrapper .selected-option');

            // dropdown show pop, hide other pop
            $categorySelector.on('click', function (e) {
                e.stopPropagation();
                $(this).find('.category-dropdown').toggleClass('show remove-border');
                $(this).closest($categorySelector).toggleClass('remove-border');
                $(this).closest($categorySelector).find('.arrow-icon').toggleClass('arrow-up');
                // hideDropDownOthers(e.currentTarget, $('.category-dropdown-wrapper.remove-border'), $categorySelector);
            });

            $('body').on('click', search_list_selector + ' .cat-drop-wrap', function (e) {
                e.stopPropagation();
                $(this).find('.category-dropdown').toggleClass('show remove-border');
                $(this).closest('.cat-drop-wrap').toggleClass('remove-border');
                $(this).closest('.cat-drop-wrap').find('.arrow-icon').toggleClass('arrow-up');
                // hideDropDownOthers(e.currentTarget, $($filter).find('.cat-drop-wrap.remove-border'), '.cat-drop-wrap');

            });

            $('body').on('click', search_list_selector + '.series-list input', function (e) {
                e.stopPropagation();
            });

            $('body').on('click', search_list_selector + ' .series-list', function (e) {
                e.stopPropagation();
                $(this).closest('.category-dropdown').toggleClass('show remove-border');
                $(this).closest('.cat-drop-wrap').toggleClass('remove-border');
                $(this).closest('.cat-drop-wrap').find('.arrow-icon').toggleClass('arrow-up');
                var clickedSeriesFilterKey = $(this).text();
                $(this).parent().siblings().find('.selected-option').val(clickedSeriesFilterKey);
            });

            // binding reset filter event
            // reset click event
            $('body').on('click', search_list_selector + ' .advanced-filter-reset', function (e) {
                $('.filter-card[data-title-type=category] .filter-card-header').removeClass('collapsed');
                $('.filter-card[data-title-type=category] .collapse').addClass('show');
                $('.search-list .product-search-container .product-search').val('');
                $('.search-list .product-search-container').attr('data-searchval', '');
                $('.result-grid-layout4-wrapper .sum-of-products').removeClass('active');
                $('.triangle-indicator').removeClass('active');
                $('.advanced-filter-search-wrapper-mobile').removeClass('active');

                currentCount = 10;
                _products_filtered = _products_orig;
                $('.category-list-dropdown').empty();
                $('.subcategory-list-dropdown').empty();
                $('.series-list-dropdown').empty();
                $('.seriesFilterCont').remove();

                populateCategoryFilter(advancedFilters);
                renderProducts(_products_orig);


                var $series = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='series'] .card-body ul li");
                var $category = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='category'] .card-body ul li");
                var $subcategory = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='subcategory'] .card-body ul li");
                var $subseriesHeader = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='Subseries'] .card-header");
                if ($series.length == 1 && $category.length == 1 && $subcategory.length == 1) {$subseriesHeader.addClass('update-padding')};
                
                // render subseries
                if (_filter_state && _filter_state.series && _filter_state.series.options) {
                    hideOptions(_products_filtered, advancedFilters, _filter_state.series.options.Subseries);
                }
                syncFilterConditionToURL();

                stickyList['sticky']();
            });
            $('body').on('click', search_list_selector + ' .advanced-filter-submit', function (e) {
                $('.search-list .close-aem_modal').click();
            });
            var bindTooltipEvent = function ($target, tipText) {
                $target.mouseover(function (e) {
                    if (!$(this).find('.tipText').length) {
                        $(this).append('<div class="tip-text">' + tipText + '</div>');

                        if ($(this).find(".tip-text").width() > 251 && $(window).width() > 450) {
                            $(this).find(".tip-text").css({ "min-width": "251px", "white-space": "normal" });
                        } else if ($(this).find(".tip-text").width() > 111 && $(window).width() <= 450) {
                            $(this).find(".tip-text").css({ "min-width": "111px", "white-space": "normal" });
                        }
                    }
                });

                $target.mouseout(function (e) {
                    $(this).find('.tip-text').remove();
                });
            }

            // *important Populate Series Filter Section selected-option
            var seriesFilterOption = function (data) {
                var seriesFilterData = data.filterItems;
                $.each(seriesFilterData, function (i, obj) {
                    if (!obj || typeof obj === "undefined" || obj === "undefined") {
                        return;
                    }

                    if (obj['title'] === 'Subseries') {
                        obj.dataType = 'combobox'
                    }
                    
                    var $series = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='series'] .card-body ul li");
                    var $category = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='category'] .card-body ul li");
                    var $subcategory = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='subcategory'] .card-body ul li");
                    var $subseriesHeader = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='Subseries'] .card-header");
                    if ($series.length == 1 && $category.length == 1 && $subcategory.length == 1) {$subseriesHeader.addClass('update-padding')};
                    var showCollapes = $series.length == 1 && $category.length == 1 && $subcategory.length == 1 && obj['title'] === 'Subseries' ? 'show' : '';
                    var collapsed = $series.length == 1 && $category.length == 1 && $subcategory.length == 1 && obj['title'] === 'Subseries' ? '' : 'collapsed';
                    $accordion.append('<div class="card filter-card seriesFilterCont" id="seriesFilterCont' + i + '" data-title-type="' + obj['title'] + '">' +
                        ' <div class="'+ collapsed +' card-header filter-card-header" data-toggle="collapse" data-target="#seriesFilter' + i + '" aria-controls="seriesFilter' + i + '">' +
                        '   <span class="card-link">' +
                        Granite.I18n.get(data.filterItems[i].title) +
                        '     <span class="triangle-indicator"></span>' +
                        '   </span>' +
                        ' </div>' +
                        ' <div class="collapse '+ showCollapes +'" id= "seriesFilter' + i + '">' +
                        '   <div class="card-body filter-body">' +
                        '     <div class="checkbox-wrapper">' +
                        '       <div class="checkbox-options">' +
                        '         <ul class="checkbox-left"></ul>' +
                        '       </div>' +
                        '     </div>' +
                        '   </div>' +
                        ' </div>' +
                        '</div>');

                    if (data.filterItems[i].dataType == 'combobox') {
                        $.each(data.filterItems[i].options, function (j) {
                            // Option display: i18n
                            var filterTitle = data.filterItems[i].options[j].title;
                            var unencodeTitle = filterTitle;
                            if (unencodeTitle) {
                                // for subseries
                                unencodeTitle = unencodeTitle.replaceAll("&", "-");
                            }
                            // Option value
                            var filterValue = encodeURI(unencodeTitle);
                            var hasTooltip = data.filterItems[i].options[j].hasTooltip;

                            $accordion.find("#seriesFilter" + i).find('ul').append('<li><input title="' + Granite.I18n.get(filterTitle) + '" type="checkbox" name="enquiryType" id="filterOption-' + i + '-' + j +
                                '" value="' + filterValue + '" required="required" /><label for="filterOption-' + i + '-' + j + '"><span>' + Granite.I18n.get(filterTitle) +
                                '</span></label></li>');

                            if (hasTooltip) {
                                var tipText = Granite.I18n.get(data.filterItems[i].options[j].tipText);
                                $accordion.find("#seriesFilter" + i + " ul li:last-child").append('<div class="filter-tip" style="background-image:url(\'/etc/clientlibs/it/resources/icons/icon-tooltip.png\')">t</div>');
                                bindTooltipEvent($accordion.find("#seriesFilter" + i + " ul li:last-child .filter-tip"), tipText);
                            }
                            // set filter state
                            bindSeriesComboboxWithFilter('#filterOption-' + i + '-' + j, obj['title'], filterTitle);
                        });
                        $accordion.find("#seriesFilter" + i).find('ul').addClass('input-type-checkbox');
                    } else {
                        // options.length <= 20, type radio
                        $.each(data.filterItems[i].options, function (j) {
                            // Option display: i18n
                            var filterTitle = data.filterItems[i].options[j].title;
                            // Option value
                            var filterValue = encodeURI(data.filterItems[i].options[j].title.replaceAll("&", "-"));

                            $accordion.find("#seriesFilter" + i).find('ul').append('<li><input title="' + Granite.I18n.get(filterTitle) + '" type="radio" name="enquiryType' + i + '" id="filterOption-' + i + '-' + j +
                                '" value="' + filterValue + '" required="required" /><label for="filterOption-' + i + '-' + j + '">' + Granite.I18n.get(filterTitle) +
                                '</label></li>');

                            // listen and update filter state

                            $('#filterOption-' + i + '-' + j).on("change", function (e) {
                                _filter_state['series']['options'][obj['title']] = filterValue;
                                applyFilter(_products_orig, _filter_state, e, filterTitle, obj['title']);
                            });

                            bindThreeRadioCheck('#filterOption-' + i + '-' + j);
                        });
                    }
                });

                bindClickRecount();

                // todo:unuse series change event
                $(document).on("change", ".series-list input", function () {
                    var id = this.id;
                    var IsChecked = $('#' + id).is(":checked");
                    var containerId = id.split('-')[1];
                    var optionId = id.split('-')[2];
                    var value = this.value;
                    var optionKey = $(this).data('option-type');
                    if (IsChecked) {
                        $('#tagContainer-' + containerId).append('<button data-value ="' + value + '" data-option-type="' + optionKey + '" class="btn-products btn">' + value
                            + '<img class="close-btn close-btn-filter" src="https://ce8375bef864f468685f027588f3cada.r2.cloudflarestorage.com/tongfang-assets/etc/clientlibs/it/resources/icons/baseline-close-24px.svg" alt="Close" id="closeFilter-'
                            + containerId + '-' + optionId + '"></button>');
                    } else {
                        $('#tagContainer-' + containerId).find(".btn[data-value='" + value + "']").remove();
                    }
                });
                // todo:unuse
                $(document).on('click', '.close-btn-filter', function (e) {
                    var containerId = this.id.split('-')[1];
                    var buttonValue = this.parentElement.attributes['data-value'].value;
                    var optionKey = this.parentElement.attributes['data-option-type'].value;
                    $('#tagContainer-' + containerId).find(".btn[data-value='" + buttonValue + "']").remove();
                    $('.series-list input[value="' + buttonValue + '"]').prop('checked', false);

                    _filter_state['series']['options'][optionKey] =
                        (_filter_state['series']['options'][optionKey]).filter(function (elm) {
                            return !(elm === buttonValue);
                        });
                    applyFilter(_products_orig, _filter_state, e, buttonValue, 'Parameters');
                });


            };
            // end of seriesFilterOption

            $('body').on('click', search_list_selector + ' .product-search-container .product-search-btn', function () {
                var searchValue = $(this).parent().find('.product-search').val();
                searchValue = searchValue.trim().toLowerCase();
                $(this).closest(search_list_selector).find('.product-search-container').attr('data-searchval', searchValue);
                $(this).closest(search_list_selector).find('.product-search').val(searchValue);
                applyFilter(_products_orig, _filter_state);
            });
            $('body').on('focus', search_list_selector + ' .product-search', function (e) {
                $(this).closest('.product-search-container').addClass('input-focus');
            });
            $('body').on('blur', search_list_selector + ' .product-search', function (e) {
                $(this).closest('.product-search-container').removeClass('input-focus');
            });

            $('body').on('input propertychange', search_list_selector + ' .product-search', function (e) {
                var atValue = "product_selector::search::" + $(this).parent().find('.product-search').val();
                $(this).closest('.search-list-comp').find('.product-search-container .product-search-btn').attr('data-at-module', atValue);
            });

            $('body').on('keydown', search_list_selector + ' .product-search', function (e) {
                if (e.keyCode == 13) {
                    $(this).parent().find('.product-search-btn').click();
                }
            });

            // *important series ui helpers
            // series click event
            // todo filterOptionValue not encode
            var bindSeriesComboboxWithFilter = function (selector, filterOptionKey, filterOptionValue, isAll) {
                // init prop
                if (_filter_state['series']['options'][filterOptionKey] === undefined) {
                    _filter_state['series']['options'][filterOptionKey] = [];
                }

                // listen and update filter state, options select
                $(selector).on("change", function (e) {
                    var $card = $(this).closest('.card');
                    var checked=false;
                    $(this).closest('ul').find('input').each(function (i) {
                        if ($(this).parent().css("display") !== "none") {
                            if($(this).is(":checked")) {checked = true}
                        }
                    });

                    if (checked) {
                        $card.find(".triangle-indicator").addClass('active');
                    } else {
                        $card.find(".triangle-indicator").removeClass('active');
                    }
                    var isAdd = $(e.target).prop("checked");

                    setOptionValue(filterOptionKey, filterOptionValue, isAdd);

                    applyFilter(_products_orig, _filter_state, e, filterOptionValue, filterOptionKey);
                });
            };
            // *important binding option value change, add filter option into _filter_state for render product list
            var setOptionValue = function (key, value, add) {
                // event from subseries and have not filter options
                var data = {};
                if (filterTemplate) {
                    data = {
                        filterItems: filterTemplate.filterItems
                    };
                }
                // check a option, add to filter state
                if (add) {
                    if (!_filter_state['series']['options'][key]) {
                        _filter_state['series']['options'][key] = [];
                    }
                    if (!(_filter_state['series']['options'][key]).includes(value)) {
                        (_filter_state['series']['options'][key]).push(value);
                    }
                } else {
                    // uncheck a option, remove to filter state
                    // if not this selection filter, first set all options to this selection
                    if (!_filter_state['series']['options'][key]) {
                        var dataOptionsItem = data.filterItems.filter(function (elm) {
                            return !(elm.title === key);
                        });
                        _filter_state['series']['options'][key] = dataOptionsItem.options;
                    }
                    _filter_state['series']['options'][key] =
                        _filter_state['series']['options'][key] ?
                            (_filter_state['series']['options'][key]).filter(function (elm) {
                                return !(elm === value);
                            }) : [];
                }
            };


            // do at event
            var doAtEvent = function (event, title, ationType, optionType) {

                // at action event
                // var category = $('.category-dropdown-wrapper .category-selected-option').val();
                // var subcategory = $('.category-dropdown-wrapper .subcategory-selected-option').val();
                // var series = $('.category-dropdown-wrapper .series-selected-option').val();

                var atTitle = '';
                if (optionType === 'Category') {
                    atTitle = 'product selector::select category' + atModel.atSpliter + title;
                } else if (optionType === 'Subcategory') {
                    atTitle = 'product selector::select sub category' + atModel.atSpliter + title;
                } else if (optionType === 'Series') {
                    atTitle = 'product selector::select series' + atModel.atSpliter + title;
                } else if (optionType === 'Subseries') {
                    atTitle = 'product selector::subsereis' + atModel.atSpliter + title;
                } else {
                    atTitle = 'product selector' + atModel.atSpliter + optionType + atModel.atSpliter + title;
                }
                if (atTitle.length === 0) {
                    atTitle = 'product selector' + atModel.atSpliter + optionType + atModel.atSpliter + title;
                }
                var url = window.location.href;
                url = url.replaceAll("%20", "_");
                atModel.doAtEvent(atTitle + atModel.atSpliter + url, ationType, event);
            };

            var isSearchedProduct = function (product, searchValue) {
                var productTitle = 'title' in product ? product['title'].toLowerCase().trim() : '';
                var productDescription = 'description' in product ? product['description'].toLowerCase().trim() : '';
                if (productTitle.indexOf(searchValue) < 0 && productDescription.indexOf(searchValue) < 0) {
                    return false;
                }
                return true;
            };

            // ------------------------------------------------------------------
            // *important product filters
            // ------------------------------------------------------------------
            var applyFilter = function (products, filter, event, title, optionType) {
                var $searchContainer = $('.search-list .product-search-container');
                var searchValue = $searchContainer.length > 0 ? $searchContainer.attr('data-searchval') : '';

                if(!searchValue) $('.result-grid-layout4-wrapper .sum-of-products').removeClass('active');
                _products_filtered = products.filter(function (product) {
                    if (!isSearchedProduct(product, searchValue)) {
                        return false;
                    }
                    // filter empty option type product
                    if ((optionType === 'Category' || optionType === 'Subcategory'  || optionType === 'Series' ) && product[optionType.toLowerCase()] === undefined) {
                        return false;
                    }
                    // check level root
                    var unmatchedProduct = Object.keys(product).filter(function (key) {
                        if ((filter[key] !== undefined)) {
                            if (filter[key]['value'] === "") return false;
                            if (product[key] !== filter[key]['value']) return true;
                        }
                        return false;
                    });
                    if (unmatchedProduct.length > 0) return false;

                    // match parameters
                    if (product['selectParameters'] !== undefined && product['selectParameters'] !== null) {
                        if (filter['series'] === undefined || filter['series']['options'] === undefined) {
                            return true;
                        }

                        var options = filter['series']['options'];
                        var params = product['selectParameters'];

                        var matched = true;

                        for (var optKey in options) {
                            // if no option, skip 
                            if (optKey === undefined)
                                continue;

                            // each selected option values 
                            var optVal = options[optKey];

                            // product param val
                            var paramVal = params[optKey];

                            // if product has no this filter -- not matched 
                            if (paramVal === undefined) {
                                // solve some glitchies related to bad data 
                                if (isArray(optVal) && optVal.length === 0) {
                                    continue;
                                }

                                matched = false;
                                break;
                            }

                            // if selected is radio btn 
                            if (!isArray(optVal)) {
                                if (isArray(paramVal)) {
                                    if (paramVal.length === 1) {
                                        if (optVal !== encodeURI(paramVal[0])) {
                                            matched = false;
                                            break;
                                        }
                                    } else {
                                        return paramVal.includes(optVal);
                                    }
                                } else {
                                    if (optVal !== encodeURI(paramVal)) {
                                        matched = false;
                                        break;
                                    }
                                }
                            } else {
                                // selected filter is combo box 

                                // if nothing selected
                                if (optVal.length === 0)
                                    continue;

                                // if some val is in product params
                                var hasValueInProd = optVal.some(function (val) {
                                    return paramVal.includes(val);
                                })

                                if (!hasValueInProd) {
                                    matched = false;
                                    break;
                                }
                            }
                        }


                        return matched;

                    } else {
                        // parameter is null , Show it per requirements..
                        return false;
                    }
                });
                // end filter
                renderProducts(_products_filtered, searchValue);

                if (typeof event !== "undefined" && event.originalEvent) {
                    doAtEvent(event, title ? title : $(event.currentTarget).text(), 'action', optionType);
                }
                var tagetID = (event && event.currentTarget && $(event.currentTarget).attr('id')) || '';
                var isDep4AboveEle = tagetID.startsWith('filterOption-') && tagetID.split('-')[1] >= 1;
                if (hasUsedInitialURLFilterParams && !isDep4AboveEle) {
                    syncFilterConditionToURL();
                }

                stickyList['sticky']()
            };

            var setUrlParam = function (name, val) {
                var url = new URL(location.href);
                val && url.searchParams.set(name, val);
                !val && url.searchParams.delete(name);
                history.replaceState(null, null, url.toString());
            }

            var getUrlParam = function (name) {
                var url = new URL(location.href);
                return url.searchParams.get(name);
            }
            // url 更新变化
            var syncFilterConditionToURL = function () {
                setTimeout(function () {
                    var category = $('div.advanced-filter-inner .category-list-dropdown input[type="radio"]:checked').val();
                    var subCategory = $('div.advanced-filter-inner .subcategory-list-dropdown input[type="radio"]:checked').val() || '';
                    var series = $('div.advanced-filter-inner .series-list-dropdown input[type="radio"]:checked').val() || '';
                    var checkedSubSeries = !series ? null : ($('div[data-title-type="Subseries"]').find('.filter-body ul li input:checked').filter(function () {
                        return $(this).parent().css("display") != 'none'
                    }).toArray().map(function (it) {
                        return $(it).val()
                    }).filter(function (it) {
                        return it.toLowerCase() != 'all'
                    }).join(';') || 'NONE');

                    setUrlParam('category', category);
                    setUrlParam('subCategory', subCategory.replaceAll("&", "-"));
                    setUrlParam('series', series.replaceAll("&", "-"));
                    setUrlParam('checkedSubSeries', decodeURI(checkedSubSeries));
                }, 300);
            }

            var initURLFilterParamToFilterPanel = function () {
                setTimeout(function () {
                    var $category = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='category'] .card-body ul li");
                    var $subCategory = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='subcategory'] .card-body ul li");
                    var $series = $("div.advanced-filter-inner .filter-container .filter-card[data-title-type='series'] .card-body ul li");

                    var category = $category.length == 1 ? $($category[0]).find('input').val() : getUrlParam('category');
                    var subCategory = $subCategory.length == 1 ? $($subCategory[0]).find('input').val() : getUrlParam('subCategory');
                    var series = $series.length == 1 ? $($series[0]).find('input').val() : getUrlParam('series');

                    var checkedSubSeriesStr = getUrlParam('checkedSubSeries');
                    var checkedSubSeries = (checkedSubSeriesStr || '').split(';');
                    hasUsedInitialURLFilterParams = true;

                    var categoryEle;
                    if (!category || !(categoryEle = $("ul.category-list-dropdown li input").filter(function (index, it) {
                        return $(it).val() == category
                    }).first()).length) {
                        return;
                    }
                    categoryEle.click().click();

                    /**
                     * subCategory  获取到的subCategory可能含有'&' 做两种匹配
                     */
                    var subCategoryEle;
                    if (!subCategory || !(subCategoryEle = $("ul.subcategory-list-dropdown li input").filter(function (index, it) {
                        return $(it).val() == subCategory || $(it).val().replaceAll("&", "-") == subCategory
                    }).first()).length) {
                        return;
                    }
                    subCategoryEle.click().click();

                    /**
                     * series  获取到的series可能含有'&' 做两种匹配
                     */
                    var seriesEle;
                    if (!series || !(seriesEle = $("ul.series-list-dropdown li input").filter(function (index, it) {
                        return $(it).val() == series || $(it).val().replaceAll("&", "-") == series
                    }).first()).length) {
                        return;
                    }
                    seriesEle.click().click();

                    checkedSubSeriesStr != null && $('div[data-title-type="Subseries"]').find('.filter-body ul li input').filter(function (index, it) {
                        return checkedSubSeries.indexOf(decodeURI($(it).val())) >= 0 && $(this).parent().css("display") != 'none';
                    }).click();
                }, 200);
            }

            // 2020/03/12 zhangjianlong6: check subseries for hide
            var hideSubseries = function (products) {
                var subseries = [];

                $('[data-title-type="Subseries"]').find('li').each(function (i, el) {
                    subseries.push(decodeURI($(el).find('input').val()));
                })

                if (subseries) {
                    var result = subseries.forEach(function (subserie) {
                        var encodeSubserie = subserie.replaceAll("&", "-");
                        var filterResult = products.find(function (product) {
                            //根据产品筛选项中数据筛选subseries
                            if(product['selectParameters']['Subseries'] && product['selectParameters']['Subseries'][0]){
                                var productSubseries = product['selectParameters']['Subseries'][0].replaceAll("&", "-");
                                return productSubseries === encodeSubserie;
                            }
                            return false;
                        });
                        if (!filterResult) {
                            $('.filter-card[data-title-type=Subseries] input[value="' + encodeURI(subserie) + '"]').parent().hide()
                            $('.filter-card[data-title-type=Subseries] input[value="' + encodeURI(subserie) + '"]').parent().addClass('hide-flag');
                        }
                    });
                } else {
                    $('.filter-card[data-title-type=Subseries]').hide();
                }
            };

            var hideSelect = function () {
                var filterContainer = $(".filter-container")
                var qwe = filterContainer.find(".checkbox-left")
                qwe.each(function (i, item) {
                    if (item.childNodes && item.childNodes.length > 0) {
                        var flag = true
                        for (let index = 0; index < item.childNodes.length; index++) {
                            const element = item.childNodes[index];
                            if ($(element).css("display") != "none") {
                                flag = false
                            }
                        }
                        if (flag) {
                            $(this).parent().parent().parent().parent().parent().hide()
                        }
                    }
                })
            };
            // 2020/04/22 zhangjianlong6: check options for hide
            var hideOptions = function (products, filters, subseries) {
                if (filters) {
                    var filterTemplates = filters[0].subItems[0].subItems.filter(function (obj, i) {
                        return obj.title === 'filterTemplate'
                    })[0];

                    if (filterTemplates) {
                        for (var option in filterTemplates.filterItems) {
                            if (filterTemplates.filterItems[option] && filterTemplates.filterItems[option].options) {
                                var result = filterTemplates.filterItems[option].options.forEach(function (key) {
                                    var filterResult = products.find(function (product) {
                                        var optionTitle = product['selectParameters'][filterTemplates.filterItems[option].title];
                                        return optionTitle && optionTitle.includes(key.value);
                                    });
                                    if (!filterResult) {
                                        var encodeValue = encodeURI(key.value.replaceAll("&", "-"));
                                        var $parent = $('.filter-card[data-title-type="' + filterTemplates.filterItems[option].title + '"] input[value="' + encodeValue + '"]').parent();
                                        $parent.hide()
                                        $parent.addClass('hide-flag');
                                    }
                                });
                            }
                        }
                    }
                }

                hideSubseries(products);
                hideSelect();

            };

            // ------------------------------------------------------------------
            // array utils
            // ------------------------------------------------------------------
            var isArray = function (data) {
                return (data instanceof Array);
            };

            // ------------------------------------------------------------------
            // RWD controls
            // ------------------------------------------------------------------
            var _rwdDesktopType = true;
            var minWidth = 992;
            var rwdInit = function () {

                // dynamic control
                window.matchMedia("(min-width: " + minWidth + "px)").addListener(rwdControl);

                $.aem_modal.defaults = {
                    closeExisting: true,
                    escapeClose: true,
                    clickClose: false,
                    showClose: true,
                    blockerClass: "search-list",
                };

                // static control once when enter
                if ($(window).width() <= minWidth) {
                    _rwdDesktopType = false;
                    $filter.find(".advanced-filter-inner").addClass("aem_modal");
                } else {
                    _rwdDesktopType = true;
                    $filter.find(".advanced-filter-inner").removeClass("aem_modal");
                }
                $filter.find(".mobile-filter").click(function (e) {
                    var _this = $(this)
                    // 处理开启弹窗后，滚动位置丢失的问题
                    function bodyScroll (ev) {
                        ev.preventDefault()
                    }
             //       document.body.addEventListener('touchmove', bodyScroll, { passive: false })
                    $(".aem_modal").aem_modal({ closeText: "" });
                    $filter.find(".advanced-filter-inner").show();
                    $filter.find(".advanced-filter-button").hide("fast");
                    $('.search-list .close-aem_modal').one('click', function () {
                   //     document.body.removeEventListener('touchmove', bodyScroll)
                        window.scrollTo({ top: _this.offset().top - 44 })
                    });
                });

                $filter.find(".advanced-filter-button").click(function (e) {
                    $(".aem_modal").aem_modal();
                    $filter.find(".advanced-filter-inner").show();
                    $filter.find(".advanced-filter-button").hide("fast");
                });

                $(".aem_modal").on('aem_modal:after-close', function (event, modal) {
                    if (!_rwdDesktopType) {
                        $filter.find(".advanced-filter-inner").hide('slidedown');
                        $filter.find(".advanced-filter-inner").addClass("aem_modal");
                        $filter.find(".advanced-filter-button").show("fast");
                    } else {
                        $(".advanced-filter-inner").show();
                        $filter.find(".advanced-filter-button").hide("fast");
                        $filter.find(".advanced-filter-button.btn1").show("fast");
                        $filter.find(".advanced-filter-inner").removeClass("aem_modal");
                    }
                    $(".advanced-filter-inner").appendTo(".advanced-filter-wrapper");
                });


            };
            var rwdControl = function (event) {
                if (event.matches) {
                    _rwdDesktopType = true;
                    if ($.aem_modal.isActive()) {
                        $.aem_modal.close();
                    }
                    $filter.find(".advanced-filter-inner").removeClass("aem_modal");
                    $filter.find(".advanced-filter-inner").show();
                    $filter.find(".advanced-filter-button").hide();
                    // TODO: remove readonly tag for input[data-rwd-type="mobile"] when switch into desktop
                } else {
                    _rwdDesktopType = false;
                    $filter.find(".advanced-filter-inner").addClass("aem_modal");
                    $filter.find(".advanced-filter-inner").hide();
                    $filter.find(".advanced-filter-button").show();
                }
            };
            rwdInit();

        });


    }; // end filterOptions init
    document.onkeypress = banBackSpace;
    document.onkeydown = banBackSpace;
    return filterOptions;

})($);

function banBackSpace(e) {
    var ev = e || window.event;//获取event对象
    var obj = ev.target || ev.srcElement;//获取事件源
    var t = obj.type || obj.getAttribute('type');//获取事件源类型
    //获取作为判断条件的事件类型
    var vReadOnly = obj.getAttribute('readonly');
    //处理null值情况
    vReadOnly = (vReadOnly == "") ? false : vReadOnly;
    //当敲Backspace键时，事件源类型为密码或单行、多行文本的，
    //并且readonly属性为true或enabled属性为false的，则退格键失效
    var flag1 = (ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea" || t == "search") && vReadOnly == "readonly") ? true : false;
    //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
    var flag2 = (ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea" && t != "search") ? true : false;
    //判断
    if (flag2) {
        return false;
    }
    if (flag1) {
        return false;
    }
}

filterOptions.init();
/**
 * functions related to search list stikcy
 *  
 */
var stickyList = (function ($) {
    var stickyList = {};
    $(document).ready(function () {
        var dom = {
            $selector: $('.search-list-comp'),
            $filter: $('.advanced-filter-wrapper'),
            $filterInner: $('.advanced-filter-inner'),
            $filterItems: $('.advanced-fixed-height'),
            $list: $('.result-grid-layout4-wrapper'),
            $listInner: $('.layout4-wrapper'),
        }

        $(window).scroll(checkIfSticky).resize(function () {
            checkIfSticky()
            stickyList['sticky']();
        });


        stickyList['test'] = checkIfSticky;
        
        
        function checkIfSticky() {
            if (!dom.$selector.length || !dom.$filter.length)
                return;
            if(dom.$listInner.outerHeight() < dom.$filterInner.outerHeight()) {
                stickySearchList(false);
                return;
            }


            if (getPostion(dom.$selector, 'top') < 0) {
                var listBtmTop = getPostion(dom.$list, 'top') + getPostion(dom.$list, 'height');
                var filterBtmTop = getPostion(dom.$filter, 'top') + getPostion(dom.$filter, 'height');

                // reach bottom
                if (filterBtmTop > listBtmTop) {
                    dom.$filter.css('top', listBtmTop - dom.$filter.outerHeight())
                } else {
                    if (listBtmTop - dom.$filter.outerHeight() > 0) {
                        dom.$filter.css('top', 0);
                    } else {
                        dom.$filter.css('top', listBtmTop - dom.$filter.outerHeight());
                    }
                }
                stickySearchList(true)
            } else {
                stickySearchList(false)
            }
        }

        function stickySearchList(isSticky) {
            if (isSticky) {
                dom.$selector.addClass('sticky');
                dom.$filter.css('width', (dom.$selector.outerWidth() * 0.27 - 16) + "px");
                if(!$('body').hasClass('rtl')){
                    dom.$filter.css('left', getPostion(dom.$selector, 'left') + 30 + "px");
                } else {
                    dom.$filter.css({
                      right: getPostion(dom.$selector, 'left') + 30 + "px",
                      left: 'auto'  
                    });
                }
                
            } else {
                dom.$selector.removeClass('sticky');
                dom.$filter.css('width', '');
                dom.$filter.css('left', '');
                dom.$filter.css('top', '');
            }
        }

        function getPostion($ele, pos) {
            if (!$ele || $ele.length === 0)
                return;
            return $ele[0].getBoundingClientRect()[pos];
        }

        stickyList['sticky'] = function () {
            if (!dom.$selector.length || !dom.$filter.length)
                return;

            if (dom.$selector.hasClass('sticky')) {
                stickySearchList(false);
                window.scrollTo({ top: dom.$selector.offset().top })
            }
        };


    })

    return stickyList;
})($)
$(document).ready(function() {
    $('.grid-list-wrapper a').unbind('click').click(function(){
        var target = $(this).attr('target')
        var href= $(this).attr('data-href')
        window.open(href,target)
    })
});

(function (document, $) {
    function initPaddingTop(){
        $.each($('.card-gallery'),function(){
            if($(this).prev().hasClass('card-gallery')){
             //   $(this).find('.card-gallery-wrapper').css('margin-top','0px')
            }
        })
    };
    function addClassforCn(){
        if(JudgeWebLanguage('cn')){
            $('.card-gallery').addClass('cn-card-gallery');
        }
    };
    function openLink(){
        $(".card-gallery-content .hik-video-trigger").click(function (e) {
            e.stopPropagation();
        })
        $(".card-gallery-content").click(function(e){
           if(!$(e.target).parent().attr('href') && !$(e.target).is('a')){
            if($(e.target).is('video') || $(e.target).hasClass('hik-video-trigger') || $(e.target).hasClass('hik-video-wrapper') || $(e.target).hasClass('plyr__control') || $(e.target).hasClass('plyr__controls__item') || !$(e.target).attr('class')) {
                return false;
               } else {
                if(!($(e.target).attr("data-is-jump"))){
                    $(this).parent().find(".btn-link").click()
                    var hasVideo = $(this).find(".icon-play").length > 0;
                    //有链接有视频，点击图片打开视频；有链接无视频，点击图片打开链接
                    if(!(hasVideo && (e.target == $(this).find(".icon-play")[0] || e.target == $(this).find(".content-img")[0]))){
                        var link = $(this).attr("data-href");
                        var target = $(this).attr("data-target");
                        if(link){
                            var title = atModel.getTitle(event.currentTarget);
                          //  atModel.doAtEvent(title, 'navigation', e);
                            if (target=="_blank") {
                                window.open(link);
                            } else {
                                window.location.href = link;
                            }
                        }
                    }
                }
               }
           } 
        });
        $('.card-gallery-content-desc').on('click',function(e){
            console.log('description...')
            e.stopPropagation()
            var href=$(this).parent().attr('data-href')
            var target=$(this).parent().attr('data-target')
            if(href){
                window.open(href, target)
            }
        })
    }

    $(window).resize(function () {
        $(".card-gallery").each(function(){
            $(this).find(".card-gallery-content").each(function(){
                $(this).removeAttr("style");
            });
        });
        // setCardHeight();
    });
    var pageTitle=$("#header").attr('data-page-title')
    $('.card-gallery .card-gallery-content-desc a').unbind().on('click',function(e){
            e.stopPropagation()
            e.preventDefault()
            var ahref = $(this).data('href') || $(this).attr('href')
            if(ahref && !_.startsWith(ahref ,'http') && $(this).attr('target') != '_blank'){
              setTimeout(function() {
                window.open(ahref, '_self')
              }, 500)
            } else if(ahref) {
              setTimeout(function() {
                window.open(ahref, '_blank')
              }, 500)
            }
            var analyticsData=$(this).text()+"::Card Gallery::跳转页面::[complete-link]"+$(this).attr('href')+"::"+pageTitle
            HiAnalyticsCn.clickDown( analyticsData)
    })
    $('.card-gallery .card-gallery-content').unbind('click').on('click',function(){
            var href=$(this).attr('data-href')
            var analyticsStr=$(this).attr('data-analytics')
            href ? HiAnalyticsCn.clickDown( analyticsStr) : false;
    })

    //统一每行card gallery的高度
    // function setCardHeight(){
    //     $(".card-gallery").each(function(){
    //         var height;
    //         $(this).find(".card-gallery-content").each(function(){
    //             $(this).height('auto');
    //             var h = $(this).height();
    //             if(height){
    //                 height = height > h ? height :h;

    //             }else{
    //                 height = h;
    //             }
    //         });
            
    //         $(this).find(".card-gallery-content").each(function(){
    //             $(this).height(height);
    //         });
    //     });
    // }
    
    //无链接无交互
    function initCATHover() {
        $.each($('.card-gallery-wrapper-check'),function(){
          $.each($(this).find('.card-gallery-content'), function(){
            if(!$(this).attr('data-href')){
                $(this).addClass('no-link');
                $(this).find('.card-gallery-content-img').addClass('no-link')
            } else {
                var currentHref = $(this).attr("data-href")
                if(currentHref && currentHref.indexOf("http") > -1 && currentHref.indexOf(window.location.host) < 0){
                   $(this).attr("rel", "nofollow")
                }
            }
            // 处理视频封面图
            if($(this).find(".card-gallery-content-img") && $(this).find(".card-gallery-content-img").find("a").hasClass("hik-video-trigger")){
                var $videoTrigger = $(this).find(".card-gallery-content-img").find("a")
                var $playerBtn = $videoTrigger.find('.player-btn')
                var currentHref = $playerBtn.attr("data-video-path")  // 从player-btn获取视频路径
                var isInternalVideo = $playerBtn.attr('data-internal-video') === 'true'
                var poster = $playerBtn.attr('data-poster')
                // 如果是外部视频(YouTube)且没有配置封面图
                if(!isInternalVideo && currentHref && !poster) {
                    var videoId = currentHref.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i)?.[1];
                    if(videoId) {
                        var thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                        console.log('video-thumbnailUrl', thumbnailUrl)
                        $videoTrigger.css('background-image', 'url("' + thumbnailUrl + '")');
                    }
                }
                
                if(currentHref && currentHref.indexOf("http") > -1 && currentHref.indexOf(window.location.host) < 0){
                    $videoTrigger.attr("rel", "nofollow")
                }
            }
            
            // 点击按钮弹出视频弹窗播放视频
            $('.player-btn').off().on('click', function(e){
                e.stopPropagation();
                var video = $(this).attr('data-video-path')
                var isInternalVideo = $(this).attr('data-internal-video') === 'true'
                $('html').addClass('overflow-prevent')
                initVideoModal(video, !isInternalVideo)
            })
          })
        })  
    }
    function initLazyImage(){
        $.each($(".card-gallery").find(".lazy-image-single"), function(){
           if(!$(this).closest(".content-detail-section").length){
            if($(this).is('div')){
                $(this).css('background-image', 'url("' + $(this).attr("data-original") + '")');
            } else {
                if(getCurrentBreakPoint() != "MOBILE"){
                    $(this).attr('src', $(this).attr("data-src"));
                } else {
                    var mobImage = $(this).attr("data-src") || $(this).attr("data-mob-src")
                    $(this).attr('src', mobImage);
                }
            }
           }
        })
      }
    function initMouseHideCardBorder(){
        $.each($('.card-gallery-content.hide-card-border'), function(){
            var self = this
            $(this).find('.card-gallery-content-img,.card-gallery-content-title,.card-gallery-content-desc').hover(function(){
               $(self).addClass('active_black') 
            },function(){
                $(self).removeClass('active_black') 
            })
        })
         $.each($('.card-gallery-content'), function(){
            var maxLength = 0;
            var longestLi = null;
            var textLength = $(this).text().length;

                // 比较并更新最大长度和对应li元素
                if (textLength > maxLength) {
                    maxLength = textLength;
                    longestLi = $(this);
                }
         })
    }  
    $(document).ready(function(){
        initPaddingTop();
        addClassforCn();
        // setTimeout(setCardHeight, 1000);
        // hoverLearnMore()
        openLink();
        initCATHover();
        initMouseHideCardBorder();
        initLazyImage();
        // $('.mult-tabs-container-comp').on('multi-tabs-change', function() {
        //     setCardHeight();
        // });
        $('.card-gallery-modal').on('show.bs.modal', function (e) {
            e.stopPropagation();
        })
        var userType = $(".needLogin").attr("data-userType");
        var cardGallery = $(".card-gallery-wrapper-check");
        if(cardGallery.length > 0 && $(".needLogin").length > 0 && userType != undefined){
            var runMode = getLoginCookie("wcmmode");
            if(runMode == "edit" || runMode =="preview"){
                return;
            }
            var hikId = $.cookie("HIKID");
            try {
                hikId = atob(hikId);
            } catch (error) {
                console.log("Login Error:" + error);
            }
            cardGallery.each(function(){
                var thisCardPath = $(this).attr("data-card-gallery");
                var currentPagePath = $(this).attr("data-page-path");
                var showCardGalleryUrl = thisCardPath + ".usertype.json";
                if(thisCardPath){
                    $.ajax({
                        type: "GET",
                        url: showCardGalleryUrl,
                        data: {
                            hikId: hikId,
                            currentPagePath: currentPagePath
                        },
                        success: function(data){
                            var jsonData = typeof data=="string" ? JSON.parse(data):data;
                            if(jsonData.code == 200){
                                $("[data-card-gallery='"+thisCardPath+"']").append($(unescape(jsonData.protectedComponent)));
                                openLink();
                            }
                        }
                    });
                }

            })

        }
    })
})(document, $);


$(document).ready(function() {
  // Bind tab click event
  var $tabItems = $(".side-nav .side-nav-item a");
  $tabItems.click(function() {
    $(this).tab("show");
  });

  // Activate tab by hash
  var hash = window.location.hash;
  var tabNames = $.map($tabItems, function(item) {
    return $(item).attr("href");
  });
  if (hash && tabNames.indexOf(hash) > -1) {
    $(".side-nav .side-nav-item a[href='" + hash + "']").tab("show");
  } else {
    $(".side-nav .side-nav-item:first-child a").tab("show");
  }

  var userCenter = $('.user-center-wrapper').length;
  if(userCenter > 0){
    $('.link-logout, .logout').on('click',function(){
      $('.personal-information-content').css('visibility','hidden');
    })
  }

});

$(document).ready(function() {
    setTimeout(function(){
        showLoading() 
    }, 1000)
    var userInfo = {};
    var userInfoUrl = $(".personal-information-content").attr("data-personal-information-path");
    var getHikId = function () {
        var hikId = $.cookie("HIKID");
        //ticket 有效
        try {
            hikId = atob(hikId);
        } catch (error) {
            console.log("Login Error:" + error);
        }
        return hikId;
    }
    var ssoCheckParameters = {
        "hikId": getHikId(),
        "ticket": getLoginCookie("ticket"),
        "service": getServiceUrl()
    }
    var verifyTicket = function(){
        var hikId = $.cookie("HIKID");
        //ticket 有效
        try {
          hikId = atob(hikId);
        } catch (error) {
          console.log("Login Error:" + error);
        }
        var params = $.extend({},{hikId:hikId},ssoCheckParameters);
        var getInfoPath =  window.location.pathname.replace(".html","");
        if(getInfoPath.indexOf("/content/hikvision") < 0){
            getInfoPath = "/content/hikvision" + getInfoPath;
        }
        $.ajax({
            type : "GET",
            url : getInfoPath + ".getUserInfo.json",
            data : params,
            dataType : "json",
            success : function(resp) {
                if(resp.data.code==0) {
                    userInfo = resp.data.data;
                    renderUserInfo(userInfo);
                    if(userInfo && userInfo.deleteUrl){
                        var logoutUrl = $(".link-logout").attr("href");
                        //var logoutHost = logoutUrl ? logoutUrl.split("?")[0] : "";
                        var deleteUrl = userInfo.deleteUrl + "?hikId=" + hikId + "&logoutUrl=" + encodeURI(logoutUrl);
                        $("#personal-information-delete-link").attr("href", deleteUrl)
                    }
                }
            },
            error : function() {
                console.log("get user info by hikId failed");
            }
        });
    }


    //提交用户信息修改
    $("#personal-information-form-submit").on("click", function(e) {
        e.preventDefault();
        $(".personal-information-form-submit-error").hide();
        var formVaild = $(".personal-information-form").valid();
        var selectVaild = validSelect("personal-information-form-country") & validSelect("personal-information-form-customer-type");
        if(formVaild && selectVaild){
            submitUserInfo();
        }
    });

    var submitUserInfo = function(){
        //获取用户信息
        // userInfo.userName = $('#personal-information-form-username').val();
         showLoading(true);
        userInfo.phone = $('#personal-information-form-phone').val();
        userInfo.customerType = $('#personal-information-form-customer-type').val();
        userInfo.company = $('#personal-information-form-company').val();
        userInfo.phoneAreaCode = $('#personal-information-form-phone-code').val();
        userInfo.province = $('#personal-information-form-province').val();
        userInfo.city = $('#personal-information-form-city').val();
        userInfo.postcode = $('#personal-information-form-postcode').val();
        userInfo.address = $('#personal-information-form-address').val();
        userInfo.countryCode = $('#personal-information-form-country').val();
        userInfo.country = $('#personal-information-form-country-name').val();
        // userInfo.userImage = $('#personal-information-user-image').attr("src");
        //提交表单
        var params = $.extend({},{userInfo:JSON.stringify(userInfo)},ssoCheckParameters);
        var headers = getFormHeader($(".personal-information-form"));
        $.ajax({
            type : "POST",
            url : userInfoUrl +".editUserInfo.json",
            data : params,
            beforeSend: function (request) {
                if (headers) {
                    $(headers).each(function (index, item) {
                        request.setRequestHeader(item.key, item.value);
                    });
                }
            },
            dataType : "json",
            success : function(resp) {
              //  showLoading(false)
                if(resp.data.code==0) {
                    $(".successful-tips").show()
                    setTimeout(function(){
                        $(".successful-tips").hide()
                    }, 3000)
                }else{
                    $(".personal-information-form-submit-error").show();
                }
            },
            error : function() {
               // showLoading(false)
                $(".personal-information-form-submit-error").show();
            }
        }).complete(function(XMLHttpRequest, status){
          // for at event
          var module = $("#personal-information-form-submit").data('at-module');
          module = module + atModel.atSpliter + window.location.href;
          atModel.doAtEvent(module, 'action', event);
          setTimeout(function(){
            showLoading(false);
          }, 500)
        });
    };

    var renderUserInfo = function(userInfo){
        $('#personal-information-form-email').val(userInfo.email);
        $('#personal-information-form-username').val(userInfo.userName);
        $('#personal-information-form-phone').val(userInfo.phone);
        $('#personal-information-form-company').val(userInfo.company);
        $('#personal-information-form-province').val(userInfo.province);
        $('#personal-information-form-city').val(userInfo.city);
        $('#personal-information-form-postcode').val(userInfo.postcode);
        $('#personal-information-form-address').val(userInfo.address);
//        $('#personal-information-form-phone-code').find("option[value='"+userInfo.countryCode+"']").attr("selected",true);
        $('#personal-information-form-phone-code').val(userInfo.phoneAreaCode);
        //bootstrap select 赋值
        $('#personal-information-form-customer-type').val(userInfo.customerType);
        $('#personal-information-form-customer-type').selectpicker('render');
        $('#personal-information-form-country').val(userInfo.countryCode);
        $('#personal-information-form-country').selectpicker('render');
        $('#personal-information-form-country-name').val(userInfo.country);
//        if(userInfo.userImage){
//            $('#personal-information-user-image').attr("src", userInfo.userImage);
//        }
    }
    if(userInfoUrl){
        verifyTicket();
    }
    //启用bootstrap-select插件，解决option字符过长导致下拉框宽度超过select元素
    $('.select-picker').selectpicker();
    //customer-type/country非空验证
    var validSelect = function(selectClass){
        var selectVal = $("#" + selectClass).val();
        $("#" + selectClass + "-error").remove();
        if(!selectVal){
            $("#" + selectClass).parent().after("<label id='" + selectClass + "-error' class='error'"
                + "for='"+selectClass+"'>This field is required.</label>");
            return false;
        }else{
            return true;
        }
    }
    $("#personal-information-form-country").on("change",function(){
        validSelect("personal-information-form-country");
        var countryCode = $("#personal-information-form-country").find("option:selected").text();
        $('#personal-information-form-country-name').val(countryCode);
    });
    $("#personal-information-form-customer-type").on("change",function(){
        validSelect("personal-information-form-customer-type");
    });
});
//表单限制输入部分特殊字符
var inputLimit = function(value){
    var reg = /[\@\_\!\|\~\`\%\+\=\/\$\%\^\&\*\{\}\:\;\"\<\>\?\\\(\)\（\）]/g;
    return value.replace(reg,'');
};
function showLoading(show) {
    if (show) {
        $('.personal-information-form-submit').addClass('loading')
        $('.personal-information-form-submit').attr('disabled', true)
    } else {
        $('.personal-information-form-submit').removeClass('loading')
        $('.personal-information-form-submit').removeAttr('disabled')
    }
  }
$(document).ready(function() {
    var tabID = $(".my-collection").parent().attr("id");
    var currentPath = window.location.pathname;
    currentPath = currentPath.indexOf("/content/hikvision")>-1 ?currentPath:"/content/hikvision"+currentPath;
    var requestUrl = $(".my-collection-list").attr("data-my-collection-list-path");
    var getListUrl = requestUrl + ".getMyFavoritesList.json";
    var removeProductUrl = requestUrl + ".removeProduct.json";
    var pageNum = 1,
        pageSize = 10;
    var i18n_next = Granite.I18n.get("next");
    var i18n_back = Granite.I18n.get("back");

    var getHikId = function(){
        var hikId = $.cookie("HIKID");
        //ticket 有效
        try {
            hikId = atob(hikId);
        } catch (error) {
            console.log("Login Error:" + error);
        }
        return hikId;
    }
    var ssoCheckParameters = {
        "hikId": getHikId(),
        "ticket": getLoginCookie("ticket"),
        "service": getServiceUrl()
    }

    var pagination = function(totalNum,pageNum) {
        $(".my-collection .holder").pagination({
            items: totalNum,
            itemsOnPage: pageSize,
            cssStyle: "light-theme",
            currentPage: pageNum,
            edges: 1,
            useAnchors: false,
            prevText: i18n_back,
            nextText: i18n_next,
            onPageClick: function(currentPageNumber) {
                getMyCollectionList(currentPageNumber);
            }
        })
    };
    function getLoginCookie1 (name) {
        var reg = /\s/g;
        var result = document.cookie.replace(reg, "");
        var resultArr = result.split(";");
        for (var i = 0; i < resultArr.length; i++) {
            var nameArr = resultArr[i].split("=");
            if (nameArr[0] == name) {
                return nameArr[1];
            }
        }
    }
    var isPaged = function() {
        return $("#" + tabID+" .holder").find(".jp-current").length !== 0;
    };

    var isSwitchToMyCollection = function($tabPane) {
        return $(".my-collection").length >0;
    };

    $("a.side-nav-item-inner").on("shown.bs.tab", function(e) {
        var $tab = $(e.target);
        var $tabPane = $($.find($tab.attr("href")));
        if($(".my-collection").parent().hasClass("show")){
            getMyCollectionList(pageNum);
        }
    });

    var renderMyCollectionList = function(total, source, pageNum){
        var html = $("#my-collection-template").html();
        var template = Handlebars.compile(html);
        if(total > 0){
            var content = template(source);
            $('#my-collection-list').empty().html(content);
            pagination(total,pageNum);
            deleteCollectionItem();
            globalSettings.init();
        }else{
            var emptyHtml = $('.my-collection-empty-hidden .my-collection-empty').clone();
            $('#my-collection-list').empty().html(emptyHtml);
        }
        if(total > pageSize){
            $(".holder").show();
        }else{
            $(".holder").hide();
        }

    };

    var getMyCollectionList= function(pageNum){
        var params ={
            "hikId": getHikId(),
            "site": getSiteCode(),
            "pageNum": pageNum,
            "pageSize": pageSize,
            "orderByColumn":"creationTime",
            "orderBySort": "desc"
        };
        params = $.extend({},params,ssoCheckParameters);
        //按照收藏时间倒叙排列
        var success = function(resp){
            if(resp.data.code==0 || resp.data.code==200) {
                console.log("Get My Favorites success");
                var source = resp.data.data.rows;
                $.each(source, function (n, value){
                    value.details = Granite.I18n.get("Details");
                    value.remove = Granite.I18n.get("Remove");
                });
                renderMyCollectionList(resp.data.data.total, source, pageNum);
            }else{
                console.log("Get My Favorites failed. Error message: "+ resp.data.message);
            }
        }

        var error = function(){
            console.log("Get My Favorites failed");
        }
        loginUtil.requestServerData("GET", getListUrl, params, success, error);
    };

    var deleteCollectionItem = function(){
        $(".collection-card-content-remove-btn").on("click", function() {
            removeMyFavorites($(this));
        });
    };

    var removeMyFavorites = function(removeProduct){
        var pageNum = $(".simple-pagination .active .current").html();
        var productNumber = removeProduct.attr("data-number");
        var path = removeProduct.attr("data-page");
        pageNum = $(".collection-card").length == 1 && pageNum > 1 ? pageNum-1 : pageNum;
        if(productNumber&&path){
            var product = {
                "hikId": getHikId(),
                "site": getSiteCode(),
                "productNumber": productNumber,
                "page": path
            };
            var params =$.extend({},{
                "product" : JSON.stringify(product)
            },ssoCheckParameters);
            var success = function(resp){
                if(resp.data.code==0) {
                    console.log("remove To My Favorites success");
                    getMyCollectionList(pageNum);
                }else{
                    console.log("remove To My Favorites failed. Error message: "+ resp.data.message);
                }
            }

            var error = function(){
                console.log("remove To My Favorites failed");
            }
            loginUtil.requestServerData("POST", removeProductUrl, params, success, error);
        }
    };

    var getSiteCode = function(){
        var regex = new RegExp('/hikvision/(.*?)/'),
            language = regex.exec(currentPath + '/');
        return decodeURIComponent(language[1]);
    }

    if($(".my-collection").parent().hasClass("show")){
        getMyCollectionList(pageNum);
    }

});
/* pagination -- number of items per page */
var trainingListModule = (function ($) {
    var trainingList = {};

    trainingList.init = function(){
        $(document).ready(function () {
            $(".traininglist").find('.holder').jPages({
                containerID: "training-list",
                perPage: 10,
                previous: "Back",
                next: "NEXT",
                keyBrowse: true,
                animation: "slideInRight"
            });
        });
    };
    

    return trainingList;
}($));

trainingListModule.init();
$(document).ready(function () {
  var flag = true
  function getCurrentBreakPoint() {
    var contentValue = window.getComputedStyle(
      document.querySelector('.ai-campaign-sketch-container'), '::before'
    ).getPropertyValue('content');
    return contentValue.replace(/\"/g, '');
  }


  /*
  * 下列方法的变量说明：
  * zoom : 150vh
  * container : 100vh
  * a : zoom顶部距离浏览器工作区顶端的距离
  * b : zoom底部距离浏览器工作区顶端的距离
  * c : container的高度
  * d : 工作区的一半高度
  * e : zoom的高度
  * wh : 工作区高度
  * ww : 工作区宽度
  * ih ：图片高度
  * iw : 图片宽度
  */
  function initOverlayRegion($comp) {
    var $stickyZoom = $comp.find('.sticky-zoom');
    var $overlay = $stickyZoom.find('.overlay');
    var a = $stickyZoom.offset().top - $(window).scrollTop();
    var d = $(window).height() / 2;
    var widthRate = 0.2;
    if (a <= 100) {
      $overlay.css({ "width": 0 });
    } else if (a >= d) {
      widthRate = 0.2 * 100 + "%";
      $overlay.css({ "width": widthRate });
    } else {
      widthRate = ((1 - (d - a) / d) * 0.2) * 100 + "%";
      $overlay.css({ "width": widthRate });
    }
  }

  function initContainerPosition($comp) {
    var $stickyZoom = $comp.find('.sticky-zoom');
    var $stickyContainer = $stickyZoom.find('.sticky-container');
    var a = $stickyZoom.offset().top - $(window).scrollTop();
    var b = $stickyZoom.height() + a;
    var c = $stickyContainer.height();
    if (a <= 0 && b > c) {
      $stickyContainer.addClass('sticky-state');
      $stickyContainer.removeClass('sticky-to-bottom');
    } else {
      if (b <= c) {
        $stickyContainer.addClass('sticky-to-bottom');
      } else {
        $stickyContainer.removeClass('sticky-to-bottom');
      }
      $stickyContainer.removeClass('sticky-state');
    }
  }

  function initTextState($comp) {
    var $stickyZoom = $comp.find('.sticky-zoom');
    var $textContaienr = $stickyZoom.find('.text-container');
    var a = $stickyZoom.offset().top - $(window).scrollTop();
    if (Math.abs(a) < 250) {
      $textContaienr.addClass('display-text');
    } else {
      $textContaienr.removeClass('display-text');
    }
  }

  function calcScale(rate, a, c, e) {
    return rate - Math.abs(a) / (e - c) * (rate - 1);
  }
  function calScaleRate(a, b, c, e, ih, iw) {
    var wh = $(window).height() + 150;  //+150
    var ww = $(window).width() + 150;
    var rh = wh / ih;
    var rw = ww / iw;
    if (a >= 0) {
      return Math.max(rh, rw);
    } else if (b > c) {
      return rh > rw ? calcScale(rh, a, c, e) : calcScale(rw, a, c, e);
    }
    return 1;
  }

  function initImageSize($comp) {
    var $stickyZoom = $comp.find('.sticky-zoom');
    var $imgContainer = $stickyZoom.find('.img-container');
    var $stickyContainer = $stickyZoom.find('.sticky-container');
    var a = $stickyZoom.offset().top - $(window).scrollTop();
    var b = $stickyZoom.height() + a;
    var c = $stickyContainer.height();
    var e = $stickyZoom.height();
    var ih = $imgContainer.height();
    var iw = $imgContainer.width();
    var scaleRate = calScaleRate(a, b, c, e, ih, iw);
    var scale = "scale(" + scaleRate + "," + scaleRate + ")";
    $imgContainer.css({ "transform": scale });
  }

  function initDescriptionState($comp) {
    var $desWrapper = $comp.find('.description-wrapper');
    var toTop = $desWrapper.offset().top - $(window).scrollTop();
    if (toTop < ($(window).height())) {
      $desWrapper.addClass('display-description');
    } else {
      $desWrapper.removeClass('display-description');
    }
  }
  /***** */
  function initInMobile($comp) {
    $comp.find('.img-container').css({ "transform": "scale(2.7,2.7)" });
    console.log("MOBILE")
  }
  function stop() {
    var mo = function (e) { passive: false; }
    document.body.style.overflow = "hidden"
    document.addEventListener("touchmove", mo, false) // 禁止页面滚动
  }
  function move() {
    var mo = function (e) { passive: false; }
    document.body.style.overflow = ""
    document.addEventListener("touchmove", mo, false)
  }
  var flag = true
  function initMobileContainerPosition($comp) {
    var $stickyZoom = $comp.find('.sticky-zoom');
    var $desWrapper = $comp.find('.description-wrapper');
    var a = $stickyZoom.offset().top - $(window).scrollTop();
    if (a > 0 && flag) {
      flag = false
      $desWrapper.removeClass("moble-color")
      $comp.find('.img-container').css({ "height": $(window).height() - a + "px", "backgroundSize": "cover", "padding": "0" });
      $comp.css({ "background": "none",  "height": Math.floor($(window).height()) + "px", "overflow": "none", "height": "auto", "paddingBottom": "0" })
      $comp.find('.text-container').css({ "opacity": "1", "transition": "opacity 0.2s" ,"color":"#f8f8f8"})
      $comp.find('.sticky-container').css({ "width": "90%", "transition": "width 0.3s ease" })
      $desWrapper.css({ 'opacity': '0', "transition": "opacity 0.1s ease" })
      flag = true
    } else {
      flag = false
      var compHeight = $comp.find(".sticky-zoom").height()+$comp.find(".description-wrapper.moble-color").height()
      $desWrapper.addClass("moble-color")
      $comp.find('.sticky-container').css({ "width": "90%", "transition": "width 0.3s ease" })
      $comp.find('.text-container').css({ "opacity": "0", "transition": "opacity 0.2s" })
      $comp.find('.img-container').css({ "height": "300px", "backgroundSize": "cover", "padding": "0" });
      $comp.css({ "background": "#000000", "height":Math.floor($(window).height())+a > compHeight +50 ? Math.floor($(window).height())+a :  compHeight +50 + "px", "overflowY": "none", "paddingBottom": "50px" })
      $desWrapper.css({ 'opacity': '1', "transition": "opacity 0.1s ease" })
      if($comp.find('.img-container').height() == 300){
        flag = true
      }
    }
  }

  function aiCompState($comp) {
    if (getCurrentBreakPoint() !== 'MOBILE') {
      initContainerPosition($comp);
      initOverlayRegion($comp);
      initImageSize($comp);
      initTextState($comp);
      initDescriptionState($comp);
    } else {
      // initInMobile($comp);
      initMobileContainerPosition($comp)
    }
  }


  $('.ai-campaign-sketch-container').each(function () {
    var $comp = $(this);
    aiCompState($comp);

    $(window).resize(function () {
      aiCompState($comp);
    });

    $(window).scroll(function () {
      aiCompState($comp);
    });
  });
});
$(document).ready(function () {
    $('.icon-feature-gallery-wrapper').each(function () {
        let $this = $(this)
        let $thisParent=$(this).parent('.icon-and-feature-gallery')
        let cardLength = $(this).find('.hiknow-link').length;
        let $prevButton = $(this).find('.button.btn_prev')
        let $nextButton = $(this).find('.button.btn_next')
        let $content = $(this).find('.icon-feature-gallery-content')
        let count = 0;
        let offset11 = 290;//单位偏移长度
        var mobileWidth = 992
        // 最大可偏移
        let maxOffset = cardLength * offset11 - 1310;

        initOffset();
        init()
        initHikCardEvent()
        initArrowDiaplayEvent()
        initArrowClickEvent()
        // 监听窗口大小  改变偏移量offset11
        $(window).resize(function () {
            initOffset();
        })
        function initOffset(){
            if ($(window).width() >= 1370) {
                offset11 = 290
                maxOffset = cardLength * offset11 - 1310;
                $content.animate({ left: '-' + offset11 * count + 'px' });
            }else if ($(window).width() < 1370 && $(window).width() >= 992 ){
                offset11 = 280
                maxOffset = cardLength * offset11 - ($(window).width() - 60)
                $content.animate({ left: '-' + offset11 * count + 'px' });
            }else{
                offset11 = 260
                maxOffset = cardLength * offset11 - 15 - ($(window).width() - 30)
                $content.animate({ left: '-' + offset11 * count + 'px' });
            }
        }
        function init () {
            if (cardLength === 4) {
                // 4个时单独样式
                $content.addClass('icon-feature-gallery-content-row-4')
            }
            if (cardLength < 4) {
                $content.addClass('icon-feature-gallery-content-row-center')
            }
    
            //埋点最后一个节点
            $(this).find('.hiknow-link[data-href]').each(function (index, item) {
                var href = $(this).attr('data-href')
                var preModule = $(this).attr('data-pre-module')
                // 判断url地址结尾是不是/
                var isLastUrl = href[href.length - 1] === '/'
                if (isLastUrl) {
                    href = href.slice(0, href.length - 1)
                }
                var lastHrefIndex = href.lastIndexOf('/')
                $(this).attr('data-at-module', preModule + href.slice(lastHrefIndex + 1, href.length))

            })
        }
    
        function initHikCardEvent () {
            $('.hiknow-link[data-href]').each(function () {
                var action = $(this).attr('data-href')
                var target = $(this).attr('target') || '_self'
                $(this).on('click', function () {
                    window.open(action, target);
                })
                $(this).addClass('hiknow-link-hover')
                var currentHref = $(this).attr("data-href")
                if(currentHref && currentHref.indexOf("http") > -1 && currentHref.indexOf(window.location.host) < 0){
                   $(this).attr("rel", "nofollow")
                }
            })
        }
    
        // 控制左右箭头展示
        function initArrowDiaplayEvent () {
            if($(window).width() >= mobileWidth && cardLength > 4){
                $this.on('mouseover', onMouseOver)
                $this.on('mouseleave', onMouseLeave)
            }else if($(window).width() < mobileWidth){
                initMobileButton();
            }

            function onMouseOver () {
                setTimeout(function(){
                    $prevButton.css('display', count == 0 ? "none" : "block")
                    $nextButton.css('display', count >= (cardLength - 4) ? "none" : "block")
                }, 500)
            }
            function onMouseLeave () {
                $prevButton.css('display', 'none')
                $nextButton.css('display', 'none')
            }
            function initMobileButton () {
                $prevButton.css('display', count == 0 ? "none" : "block")
                $nextButton.css('display', cardLength * 260 + 15 < $(window).width() ? "none" : "block")
                cardLength * 260 + 15 < $(window).width() ? $thisParent.addClass('side-blur') : $thisParent.removeClass('side-blur')
            }

        }
    
        // 左右箭头点击事件
        function initArrowClickEvent () {
            // 右箭头点击
            $nextButton.click(function () {
                    if($(window).width() >= mobileWidth){
                        maxOffset = ($(window).width() >= 1370 ? cardLength * offset11 - 1310 : cardLength * offset11 - ($(window).width() - 60))
                    }else{
                        maxOffset = cardLength * offset11 - ($(window).width() - 60) +($(window).width() - 260 - 60)
                    }
                    // 剩余偏移量=最大偏移-已经偏移
                    let waitOffset = maxOffset - count * offset11
                    // 如果剩余偏移量小于当前偏移量
                    if (waitOffset > offset11) {
                        count++;
                        $content.animate({ left: '-' + offset11 * count + 'px' });
                        $nextButton.css('display','block')
                        $prevButton.css('display','block')
                    } else if(waitOffset <= offset11 && waitOffset > 0 ) {
                        $content.animate({ left: '-' + maxOffset + 'px' });
                        $nextButton.css('display','none')
                        $prevButton.css('display','block')
                        $thisParent.addClass('side-blur')
                        count++;
                    }
            });
            
            // 左箭头点击
            $prevButton.click(function () {
                // 剩余偏移量=已经偏移量
                if (count >= 1) {
                    count--;
                    $content.animate({ left: '-' + offset11 * count + 'px' });
                    $prevButton.css('display',count == 0 ? 'none' : 'block')
                    $nextButton.css('display','block')
                    $thisParent.removeClass('side-blur')
                }
            });
            var startX;
            var startY;
            var moveEndX;
            var moveEndY;

            $this.on("touchstart", function (e) {
                startX = e.originalEvent.changedTouches[0].pageX,
                startY = e.originalEvent.changedTouches[0].pageY;
            });
            $this.on("touchend",function(e){
                moveEndX = e.originalEvent.changedTouches[0].pageX
                moveEndY = e.originalEvent.changedTouches[0].pageY
                var X = moveEndX - startX
                var Y = moveEndY - startY
                if (X > 50) {
                    $prevButton.click()
                }else if (X < -50) {
                    $nextButton.click()
                }
            })
        }
    })

});


