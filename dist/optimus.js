(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vuex'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vuex', 'lodash'], factory) :
  (global = global || self, factory(global.AdminTheme = {}, global.Vuex, global.lodash));
}(this, (function (exports, vuex, lodash) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var noop = function noop() {};

  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };

  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {}

  var _ref = _WINDOW.navigator || {},
      _ref$userAgent = _ref.userAgent,
      userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var DEFAULT_FAMILY_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';

  var PRODUCTION = function () {
    try {
      return process.env.NODE_ENV === 'production';
    } catch (e) {
      return false;
    }
  }();
  var DUOTONE_CLASSES = {
    GROUP: 'group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  var initial = WINDOW.FontAwesomeConfig || {};

  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');

    if (element) {
      return element.getAttribute(attr);
    }
  }

  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    // For example <script data-search-pseudo-elements src="..."></script>
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }

  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attr = _ref2[0],
          key = _ref2[1];

      var val = coerce(getAttrConfig(attr));

      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }

  var _default = {
    familyPrefix: DEFAULT_FAMILY_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    autoA11y: true,
    searchPseudoElements: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  var _config = _objectSpread({}, _default, initial);

  if (!_config.autoReplaceSvg) _config.observeMutations = false;

  var config = _objectSpread({}, _config);

  WINDOW.FontAwesomeConfig = config;
  var w = WINDOW || {};
  if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
  if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
  if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w[NAMESPACE_IDENTIFIER];
  var functions = [];

  var listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };

  var loaded = false;

  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
  }

  var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
  var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };

  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }

    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;

    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();

      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }

    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }

  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function nextUniqueId() {
    var size = 12;
    var id = '';

    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }

    return id;
  }

  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }

  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
    }, '');
  }

  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }

  function transformForSvg(_ref) {
    var transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };

  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }

    return abstract;
  }

  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }

  function makeIconMasking(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        mask = _ref.mask,
        transform = _ref.transform;
    var mainWidth = main.width,
        mainPath = main.icon;
    var maskWidth = mask.width,
        maskPath = mask.icon;
    var trans = transformForSvg({
      transform: transform,
      containerWidth: maskWidth,
      iconWidth: mainWidth
    });
    var maskRect = {
      tag: 'rect',
      attributes: _objectSpread({}, ALL_SPACE, {
        fill: 'white'
      })
    };
    var maskInnerGroupChildrenMixin = mainPath.children ? {
      children: mainPath.children.map(fillBlack)
    } : {};
    var maskInnerGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.inner),
      children: [fillBlack(_objectSpread({
        tag: mainPath.tag,
        attributes: _objectSpread({}, mainPath.attributes, trans.path)
      }, maskInnerGroupChildrenMixin))]
    };
    var maskOuterGroup = {
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [maskInnerGroup]
    };
    var maskId = "mask-".concat(nextUniqueId());
    var clipId = "clip-".concat(nextUniqueId());
    var maskTag = {
      tag: 'mask',
      attributes: _objectSpread({}, ALL_SPACE, {
        id: maskId,
        maskUnits: 'userSpaceOnUse',
        maskContentUnits: 'userSpaceOnUse'
      }),
      children: [maskRect, maskOuterGroup]
    };
    var defs = {
      tag: 'defs',
      children: [{
        tag: 'clipPath',
        attributes: {
          id: clipId
        },
        children: deGroup(maskPath)
      }, maskTag]
    };
    children.push(defs, {
      tag: 'rect',
      attributes: _objectSpread({
        fill: 'currentColor',
        'clip-path': "url(#".concat(clipId, ")"),
        mask: "url(#".concat(maskId, ")")
      }, ALL_SPACE)
    });
    return {
      children: children,
      attributes: attributes
    };
  }

  function makeIconStandard(_ref) {
    var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        transform = _ref.transform,
        styles = _ref.styles;
    var styleString = joinStyles(styles);

    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }

    if (transformIsMeaningful(transform)) {
      var trans = transformForSvg({
        transform: transform,
        containerWidth: main.width,
        iconWidth: main.width
      });
      children.push({
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread({}, trans.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread({}, main.icon.attributes, trans.path)
          }]
        }]
      });
    } else {
      children.push(main.icon);
    }

    return {
      children: children,
      attributes: attributes
    };
  }

  function asIcon(_ref) {
    var children = _ref.children,
        main = _ref.main,
        mask = _ref.mask,
        attributes = _ref.attributes,
        styles = _ref.styles,
        transform = _ref.transform;

    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
          height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread({}, styles, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }

    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol(_ref) {
    var prefix = _ref.prefix,
        iconName = _ref.iconName,
        children = _ref.children,
        attributes = _ref.attributes,
        symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread({}, attributes, {
          id: id
        }),
        children: children
      }]
    }];
  }

  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
        main = _params$icons.main,
        mask = _params$icons.mask,
        prefix = params.prefix,
        iconName = params.iconName,
        transform = params.transform,
        symbol = params.symbol,
        title = params.title,
        extra = params.extra,
        _params$watchable = params.watchable,
        watchable = _params$watchable === void 0 ? false : _params$watchable;

    var _ref = mask.found ? mask : main,
        width = _ref.width,
        height = _ref.height;

    var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
    var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread({}, extra.attributes, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'xmlns': 'http://www.w3.org/2000/svg',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };

    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }

    if (title) content.children.push({
      tag: 'title',
      attributes: {
        id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
      },
      children: [title]
    });

    var args = _objectSpread({}, content, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      transform: transform,
      symbol: symbol,
      styles: extra.styles
    });

    var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
        children = _ref2.children,
        attributes = _ref2.attributes;

    args.children = children;
    args.attributes = attributes;

    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }

  var noop$1 = function noop() {};

  var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */

  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };
  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */


  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
        length = keys.length,
        iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
        i,
        key,
        result;

    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }

    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }

    return result;
  };

  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
        skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;

      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }

      return acc;
    }, {});

    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalized);
    } else {
      namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
    }
    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll easy the upgrade process for our users by automatically defining
     * this as well.
     */


    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var styles = namespace.styles,
      shims = namespace.shims;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};

  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o, style, prefix) {
        o[prefix] = reduce(style, reducer, {});
        return o;
      }, {});
    };

    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }

      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      var ligatures = icon[2];
      acc[iconName] = iconName;
      ligatures.forEach(function (ligature) {
        acc[ligature] = iconName;
      });
      return acc;
    });
    var hasRegular = 'far' in styles;
    _byOldName = reduce(shims, function (acc, shim) {
      var oldName = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];

      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }

      acc[oldName] = {
        prefix: prefix,
        iconName: iconName
      };
      return acc;
    }, {});
  };

  build();

  var styles$1 = namespace.styles;

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
        _abstractNodes$attrib = abstractNodes.attributes,
        attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
        _abstractNodes$childr = abstractNodes.children,
        children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };

    if (!transformString) {
      return transform;
    } else {
      return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
        var parts = n.toLowerCase().split('-');
        var first = parts[0];
        var rest = parts.slice(1).join('-');

        if (first && rest === 'h') {
          acc.flipX = true;
          return acc;
        }

        if (first && rest === 'v') {
          acc.flipY = true;
          return acc;
        }

        rest = parseFloat(rest);

        if (isNaN(rest)) {
          return acc;
        }

        switch (first) {
          case 'grow':
            acc.size = acc.size + rest;
            break;

          case 'shrink':
            acc.size = acc.size - rest;
            break;

          case 'left':
            acc.x = acc.x - rest;
            break;

          case 'right':
            acc.x = acc.x + rest;
            break;

          case 'up':
            acc.y = acc.y - rest;
            break;

          case 'down':
            acc.y = acc.y + rest;
            break;

          case 'rotate':
            acc.rotate = acc.rotate + rest;
            break;
        }

        return acc;
      }, transform);
    }
  };

  function MissingIcon(error) {
    this.name = 'MissingIcon';
    this.message = error || 'Icon unavailable';
    this.stack = new Error().stack;
  }

  MissingIcon.prototype = Object.create(Error.prototype);
  MissingIcon.prototype.constructor = MissingIcon;
  var FILL = {
    fill: 'currentColor'
  };
  var ANIMATION_BASE = {
    attributeType: 'XML',
    repeatCount: 'indefinite',
    dur: '2s'
  };
  var RING = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
    })
  };

  var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
    attributeName: 'opacity'
  });

  var DOT = {
    tag: 'circle',
    attributes: _objectSpread({}, FILL, {
      cx: '256',
      cy: '364',
      r: '28'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, ANIMATION_BASE, {
        attributeName: 'r',
        values: '28;14;28;28;14;28;'
      })
    }, {
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;1;1;0;1;'
      })
    }]
  };
  var QUESTION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '1',
      d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '1;0;0;0;0;1;'
      })
    }]
  };
  var EXCLAMATION = {
    tag: 'path',
    attributes: _objectSpread({}, FILL, {
      opacity: '0',
      d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
    }),
    children: [{
      tag: 'animate',
      attributes: _objectSpread({}, OPACITY_ANIMATE, {
        values: '0;0;1;1;0;0;'
      })
    }]
  };
  var styles$2 = namespace.styles;

  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];

    var _icon$slice = icon.slice(4),
        _icon$slice2 = _slicedToArray(_icon$slice, 1),
        vectorData = _icon$slice2[0];

    var element = null;

    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }

    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }

  var styles$3 = namespace.styles;

  var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

  function css() {
    var dfp = DEFAULT_FAMILY_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.familyPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;

    if (fp !== dfp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }

    return s;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);

      this.definitions = {};
    }

    _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;

        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }

        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
          defineIcons(key, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
              prefix = _normalized$key.prefix,
              iconName = _normalized$key.iconName,
              icon = _normalized$key.icon;
          if (!additions[prefix]) additions[prefix] = {};
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);

    return Library;
  }();

  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }

  function apiObject(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function findIconDefinition(iconLookup) {
    var _iconLookup$prefix = iconLookup.prefix,
        prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
        iconName = iconLookup.iconName;
    if (!iconName) return;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }

  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;

      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }

      return next(iconDefinition, _objectSpread({}, params, {
        mask: mask
      }));
    };
  }

  var library = new Library();

  var _cssInserted = false;
  var parse = {
    transform: function transform(transformString) {
      return parseTransformString(transformString);
    }
  };
  var icon = resolveIcons(function (iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
        transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
        _params$symbol = params.symbol,
        symbol = _params$symbol === void 0 ? false : _params$symbol,
        _params$mask = params.mask,
        mask = _params$mask === void 0 ? null : _params$mask,
        _params$title = params.title,
        title = _params$title === void 0 ? null : _params$title,
        _params$classes = params.classes,
        classes = _params$classes === void 0 ? [] : _params$classes,
        _params$attributes = params.attributes,
        attributes = _params$attributes === void 0 ? {} : _params$attributes,
        _params$styles = params.styles,
        styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
        iconName = iconDefinition.iconName,
        icon = iconDefinition.icon;
    return apiObject(_objectSpread({
      type: 'icon'
    }, iconDefinition), function () {
      ensureCss();

      if (config.autoA11y) {
        if (title) {
          attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
        } else {
          attributes['aria-hidden'] = 'true';
          attributes['focusable'] = 'false';
        }
      }

      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread({}, meaninglessTransform, transform),
        symbol: symbol,
        title: title,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  });

  var faAngleDown={prefix:'fas',iconName:'angle-down',icon:[320,512,[],"f107","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]};var faAngleRight={prefix:'fas',iconName:'angle-right',icon:[256,512,[],"f105","M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"]};var faAngleUp={prefix:'fas',iconName:'angle-up',icon:[320,512,[],"f106","M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"]};var faCalendarAlt={prefix:'fas',iconName:'calendar-alt',icon:[448,512,[],"f073","M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"]};var faCog={prefix:'fas',iconName:'cog',icon:[512,512,[],"f013","M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]};var faExternalLinkAlt={prefix:'fas',iconName:'external-link-alt',icon:[512,512,[],"f35d","M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"]};var faHandPointer={prefix:'fas',iconName:'hand-pointer',icon:[448,512,[],"f25a","M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z"]};var faPencilAlt={prefix:'fas',iconName:'pencil-alt',icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]};var faSearch={prefix:'fas',iconName:'search',icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]};var faSignInAlt={prefix:'fas',iconName:'sign-in-alt',icon:[512,512,[],"f2f6","M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"]};var faSignOutAlt={prefix:'fas',iconName:'sign-out-alt',icon:[512,512,[],"f2f5","M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"]};var faSort={prefix:'fas',iconName:'sort',icon:[320,512,[],"f0dc","M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"]};var faSortDown={prefix:'fas',iconName:'sort-down',icon:[320,512,[],"f0dd","M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"]};var faSortUp={prefix:'fas',iconName:'sort-up',icon:[320,512,[],"f0de","M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"]};var faSpinner={prefix:'fas',iconName:'spinner',icon:[512,512,[],"f110","M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]};var faStop={prefix:'fas',iconName:'stop',icon:[448,512,[],"f04d","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"]};var faTimes={prefix:'fas',iconName:'times',icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]};var faTrashAlt={prefix:'fas',iconName:'trash-alt',icon:[448,512,[],"f2ed","M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"]};

  var Icons = {
    register: function register() {
      library.add(faAngleDown, faAngleRight, faAngleUp, faCalendarAlt, faCog, faExternalLinkAlt, faHandPointer, faPencilAlt, faSignInAlt, faSignOutAlt, faSearch, faSort, faSortDown, faSortUp, faSpinner, faStop, faTimes, faTrashAlt);
    }
  };

  function _defineProperty$2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty$2(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray$1(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  } //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //


  var script = {
    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      optionIdentifier: {
        type: [String, Number],
        required: true
      },
      selectedOptions: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      loadingMore: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        required: true
      },
      scrollThrottleDelay: {
        type: Number,
        required: true
      },
      loadMoreThreshold: {
        type: Number,
        required: true
      },
      noOptionsMessage: {
        type: String,
        required: true
      }
    },
    data: function data() {
      return {
        showPointer: true,
        focusedOption: null,
        lastScroll: 0,
        scrollableHeight: 0,
        throttlingScroll: false
      };
    },
    computed: {
      selectedOptionValues: function selectedOptionValues() {
        var _this = this;

        return this.selectedOptions.map(function (option) {
          return option[_this.optionIdentifier];
        });
      },
      hasOptions: function hasOptions() {
        return this.options.length !== 0;
      },
      focusableOptions: function focusableOptions() {
        return this.options.filter(function (option) {
          return !option.disabled;
        });
      },
      hasFocusableOptions: function hasFocusableOptions() {
        return this.focusableOptions.length !== 0;
      },
      focusedOptionIndex: function focusedOptionIndex() {
        var _this2 = this;

        if (!this.focusedOption) {
          return null;
        }

        return this.options.findIndex(function (option) {
          return option[_this2.optionIdentifier] === _this2.focusedOption[_this2.optionIdentifier];
        });
      },
      lastOptionIndex: function lastOptionIndex() {
        return this.options.length - 1;
      }
    },
    watch: {
      options: {
        handler: function handler() {
          this.lastScroll = 0;
          this.setScrollableHeight();
        },
        deep: true
      },
      throttlingScroll: function throttlingScroll(_throttlingScroll) {
        if (_throttlingScroll) {
          return;
        }

        this.handleScrollEvent();
      }
    },
    created: function created() {
      document.addEventListener('keydown', this.keydownListener);
      document.addEventListener('mousemove', this.mouseMove);
    },
    mounted: function mounted() {
      this.$refs.scrollContent.addEventListener('scroll', this.throttleScroll);
      this.setScrollableHeight();

      if (this.hasFocusableOptions) {
        this.setFocusedOption(this.focusableOptions[0]);
      }
    },
    beforeDestroy: function beforeDestroy() {
      document.removeEventListener('keydown', this.keydownListener);
      document.removeEventListener('mousemove', this.mouseMove);
      this.$refs.scrollContent.removeEventListener('keydown', this.throttleScroll);
    },
    methods: {
      keydownListener: function keydownListener(e) {
        if (!this.hasFocusableOptions) {
          return;
        } // Enter


        if (e.keyCode === 13) {
          e.preventDefault();

          if (this.focusableOptions.length === 1) {
            this.toggleSelectedOption(this.focusableOptions[0]);
            return;
          }

          this.toggleSelectedOption(this.options[this.focusedOptionIndex]);
        } // Arrow up


        if (e.keyCode === 38) {
          e.preventDefault();
          this.showPointer = false;
          var previousIndex = this.getPreviousFocusableIndex(this.focusedOptionIndex);
          this.setFocusedOption(this.options[previousIndex]);
          this.scrollToOption(previousIndex);
        } // Arrow down


        if (e.keyCode === 40) {
          e.preventDefault();
          this.showPointer = false;
          var nextIndex = this.getNextFocusableIndex(this.focusedOptionIndex);
          this.setFocusedOption(this.options[nextIndex]);
          this.scrollToOption(nextIndex);
        }
      },
      mouseMove: function mouseMove() {
        this.showPointer = true;
      },
      setScrollableHeight: function setScrollableHeight() {
        this.scrollableHeight = this.$refs.scrollContent.scrollHeight - this.$refs.scrollContent.clientHeight;
      },
      throttleScroll: function throttleScroll() {
        var _this3 = this;

        if (this.scrollThrottleDelay <= 0) {
          this.handleScrollEvent();
          return;
        }

        if (this.throttlingScroll) {
          return;
        }

        this.throttlingScroll = true;
        setTimeout(function () {
          _this3.throttlingScroll = false;
        }, this.scrollThrottleDelay);
      },
      handleScrollEvent: function handleScrollEvent() {
        var currentScroll = this.$refs.scrollContent.scrollTop;

        if (!this.loadingMore && currentScroll > this.lastScroll && this.scrollableHeight - currentScroll < this.loadMoreThreshold) {
          this.lastScroll = currentScroll;
          this.$emit('load-more');
        }
      },
      getPreviousFocusableIndex: function getPreviousFocusableIndex(currentIndex) {
        if (currentIndex > 0) {
          var previousIndex = currentIndex - 1;

          if (this.optionIsDisabled(this.options[previousIndex])) {
            return this.getPreviousFocusableIndex(previousIndex);
          }

          return previousIndex;
        }

        if (this.optionIsDisabled(this.options[0])) {
          return this.getNextFocusableIndex(0);
        }

        return 0;
      },
      getNextFocusableIndex: function getNextFocusableIndex(currentIndex) {
        if (currentIndex !== this.lastOptionIndex) {
          var nextIndex = currentIndex !== null ? currentIndex + 1 : 0;

          if (this.optionIsDisabled(this.options[nextIndex])) {
            return this.getNextFocusableIndex(nextIndex);
          }

          return nextIndex;
        }

        if (this.optionIsDisabled(this.options[currentIndex])) {
          return this.getPreviousFocusableIndex(currentIndex);
        }

        return currentIndex;
      },
      setFocusedOption: function setFocusedOption(option) {
        this.focusedOption = option;
      },
      optionIsFocused: function optionIsFocused(value) {
        return this.focusedOption && this.focusedOption[this.optionIdentifier] === value;
      },
      optionIsSelected: function optionIsSelected(value) {
        return this.selectedOptionValues.includes(value);
      },
      optionIsDisabled: function optionIsDisabled(option) {
        return option.disabled || false;
      },
      toggleSelectedOption: function toggleSelectedOption(option) {
        if (!option || this.optionIsDisabled(option)) {
          return;
        }

        if (this.optionIsSelected(option[this.optionIdentifier]) && this.multiple) {
          this.$emit('deselect-option', option);
          return;
        }

        this.$emit('select-option', option);
      },
      scrollToTop: function scrollToTop() {
        this.$refs.scrollContent.scrollTo(0, 0);
      },
      scrollToOption: function scrollToOption(index) {
        this.$refs["option-".concat(index)][0].scrollIntoView({
          block: 'nearest',
          inline: 'start'
        });
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }
  /* script */


  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "vs-dropdown",
      class: !_vm.showPointer ? "pointer-events-none" : ""
    }, [_c("div", {
      ref: "scrollContent",
      staticClass: "vs-dropdown-scroll"
    }, [!_vm.hasOptions ? _c("div", {
      staticClass: "vs-dropdown-no-options"
    }, [_vm._v("\n            " + _vm._s(_vm.noOptionsMessage) + "\n        ")]) : _vm._l(_vm.options, function (option, index) {
      return _c("div", {
        key: option[_vm.optionIdentifier],
        ref: "option-" + index,
        refInFor: true,
        on: {
          click: function click($event) {
            $event.stopPropagation();
            return _vm.toggleSelectedOption(option);
          },
          mouseenter: function mouseenter($event) {
            return _vm.setFocusedOption(option);
          }
        }
      }, [_vm._t("dropdown-option", null, null, {
        option: option,
        classes: {
          focused: _vm.optionIsFocused(option[_vm.optionIdentifier]),
          selected: _vm.optionIsSelected(option[_vm.optionIdentifier]),
          disabled: _vm.optionIsDisabled(option)
        }
      })], 2);
    }), _vm._v(" "), _vm.loadingMore ? _vm._t("dropdown-loader") : _vm._e()], 2)]);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  var script$1 = {
    components: {
      SelectDropdown: __vue_component__
    },
    props: {
      value: {
        type: [String, Number, Array],
        default: function _default() {
          return [];
        }
      },
      id: {
        type: String,
        default: null
      },
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      optionIdentifier: {
        type: [String, Number],
        default: 'value'
      },
      optionLabel: {
        type: String,
        default: 'label'
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingMore: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      },
      searchable: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: 'Please select...'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      openDirection: {
        type: String,
        default: 'auto',
        validator: function validator(value) {
          return ['auto', 'down', 'up'].indexOf(value) !== -1;
        }
      },
      closeOnSelect: {
        type: Boolean,
        default: null
      },
      searchDebounceDelay: {
        type: Number,
        default: 150
      },
      scrollThrottleDelay: {
        type: Number,
        default: 150
      },
      loadMoreThreshold: {
        type: Number,
        default: 60
      },
      noOptionsMessage: {
        type: String,
        default: 'No options found.'
      }
    },
    data: function data() {
      return {
        searchQuery: '',
        inputIsActive: false,
        dropdownIsVisible: false,
        dropdownOpenDirection: 'down',
        selectedOptions: [],
        searchTimeout: null
      };
    },
    computed: {
      selectClasses: function selectClasses() {
        return {
          disabled: this.disabled,
          'vs-open-up': this.dropdownOpenDirection === 'up',
          'vs-open-down': this.dropdownOpenDirection === 'down'
        };
      },
      hasValue: function hasValue() {
        return this.selectedOptions.length !== 0;
      },
      hasOptions: function hasOptions() {
        return this.options.length !== 0;
      },
      hasSearchQuery: function hasSearchQuery() {
        return this.searchQuery.length !== 0;
      },
      selectedOptionValues: function selectedOptionValues() {
        var _this = this;

        return this.selectedOptions.map(function (option) {
          return option[_this.optionIdentifier];
        });
      },
      firstSelectedOption: function firstSelectedOption() {
        if (!this.hasValue) {
          return null;
        }

        return this.selectedOptions[0];
      },
      hideDropdownOnSelect: function hideDropdownOnSelect() {
        if (this.closeOnSelect === null) {
          return !this.multiple;
        }

        return this.closeOnSelect;
      }
    },
    watch: {
      value: {
        handler: function handler(values) {
          var _this2 = this;

          if (!this.hasOptions) {
            return;
          }

          if (!this.selectedOptionValues) {
            this.setSelectedOptions(values);
            return;
          }

          if (!Array.isArray(values)) {
            values = [values];
          }

          var diff = values.filter(function (value) {
            return !_this2.selectedOptionValues.includes(value);
          }); // Don't set select options if nothing has changed...

          if (values.length === this.selectedOptionValues.length && diff.length === 0) {
            return;
          }

          this.setSelectedOptions(values);
        },
        immediate: true
      },
      options: {
        handler: function handler() {
          if (this.options.length === 0) {
            this.setSelectedOptions(this.value);
          }
        },
        deep: true
      },
      searchQuery: function searchQuery(_searchQuery) {
        if (this.disabled) {
          return;
        }

        if (this.hasSearchQuery) {
          this.showDropdown();
        }

        if (this.$refs.dropdown) {
          this.$refs.dropdown.scrollToTop();
        }

        this.emitSearchQuery(_searchQuery);
      },
      selectedOptionValues: function selectedOptionValues(values) {
        // Don't do anything if the select is disabled...
        if (this.disabled) {
          return;
        }

        if (this.multiple) {
          return this.$emit('input', values);
        } // Return null if nothing has been selected...


        if (values.length === 0) {
          return this.$emit('input', null);
        } // Return the first selected value...


        this.$emit('input', values[0]);
      }
    },
    created: function created() {
      var _this3 = this;

      ['click', 'touchstart'].forEach(function (action) {
        document.addEventListener(action, _this3.deactivateSelectOnClick);
      });
      document.addEventListener('keydown', this.keydownListener);
    },
    destroyed: function destroyed() {
      var _this4 = this;

      ['click', 'touchstart'].forEach(function (action) {
        document.removeEventListener(action, _this4.deactivateSelectOnClick);
      });
      document.removeEventListener('keydown', this.keydownListener);
    },
    methods: {
      keydownListener: function keydownListener(e) {
        if (this.disabled) {
          return;
        } // Arrow down


        if (e.keyCode === 40 && this.inputIsActive && !this.dropdownIsVisible) {
          this.dropdownIsVisible = true;
        } // Delete


        if (e.keyCode === 8 && this.inputIsActive && this.hasValue && !this.multiple) {
          this.selectedOptions = [];
        } // Tab, Escape


        if ((e.keyCode === 9 || e.keyCode === 27) && this.dropdownIsVisible) {
          this.dropdownIsVisible = false;
        }
      },
      setSelectedOptions: function setSelectedOptions(values) {
        var _this5 = this;

        if (!Array.isArray(values)) {
          values = [values];
        }

        if (values.length === 0) {
          this.selectedOptions = [];
          return;
        }

        var options = _toConsumableArray$1(this.options);

        var optionsCache = {};
        var selectedOptions = [];
        values.forEach(function (value) {
          var cachedOption = optionsCache[value];

          if (cachedOption) {
            selectedOptions.push(_this5.formatSelectedOption(cachedOption));
            return;
          }

          options.some(function (option, index) {
            optionsCache[option[_this5.optionIdentifier]] = _objectSpread2$1({}, option);

            if (option[_this5.optionIdentifier] === value) {
              selectedOptions.push(_this5.formatSelectedOption(option)); // Remove all options before current index...

              options.splice(0, index + 1);
              return true;
            }
          });
        });
        this.selectedOptions = selectedOptions;
      },
      setDropdownPosition: function setDropdownPosition() {
        if (this.openDirection === 'auto') {
          var selectRect = this.$refs.select.getBoundingClientRect();
          var dropdownRect = this.$refs.dropdown.$el.getBoundingClientRect();

          if (selectRect.y + selectRect.height + dropdownRect.height > window.innerHeight) {
            this.dropdownOpenDirection = 'up';
            return;
          }

          this.dropdownOpenDirection = 'down';
          return;
        }

        this.dropdownOpenDirection = this.openDirection;
      },
      activateSelect: function activateSelect() {
        if (this.disabled) {
          return;
        }

        this.focusInput();
        this.showDropdown();
      },
      focusInput: function focusInput() {
        this.$refs.input.focus();
        this.inputIsActive = true;
      },
      blurInput: function blurInput() {
        this.inputIsActive = false;
      },
      showDropdown: function showDropdown() {
        var _this6 = this;

        if (this.disabled || this.dropdownIsVisible) {
          return;
        }

        this.dropdownIsVisible = true;
        this.$nextTick(function () {
          _this6.setDropdownPosition();
        });
      },
      deactivateSelectOnClick: function deactivateSelectOnClick(event) {
        if (this.dropdownIsVisible && this.$refs.select !== event.target && !this.$refs.select.contains(event.target)) {
          this.searchQuery = '';
          this.inputIsActive = false;
          this.dropdownIsVisible = false;
        }
      },
      formatSelectedOption: function formatSelectedOption(option) {
        var _ref;

        return _ref = {}, _defineProperty$2(_ref, this.optionIdentifier, option[this.optionIdentifier]), _defineProperty$2(_ref, this.optionLabel, option[this.optionLabel]), _ref;
      },
      selectOption: function selectOption(option) {
        if (this.disabled) {
          return;
        }

        if (this.hideDropdownOnSelect) {
          this.focusInput();
          this.searchQuery = '';
          this.dropdownIsVisible = false;
        }

        this.$emit('change');
        this.$emit('select', option);

        if (this.multiple) {
          this.selectedOptions.push(option);
          return;
        }

        this.selectedOptions = [option];
      },
      deselectOption: function deselectOption(option) {
        var _this7 = this;

        if (this.disabled) {
          return;
        }

        if (this.hideDropdownOnSelect) {
          this.dropdownIsVisible = false;
        }

        this.$emit('change');
        this.$emit('deselect', option);
        this.selectedOptions = this.selectedOptions.filter(function (selectedOption) {
          return selectedOption[_this7.optionIdentifier] !== option[_this7.optionIdentifier];
        });
      },
      emitSearchQuery: function emitSearchQuery(searchQuery) {
        var _this8 = this;

        if (this.searchDebounceDelay <= 0) {
          this.$emit('query-change', searchQuery);
          return;
        }

        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(function () {
          _this8.$emit('query-change', searchQuery);
        }, this.searchDebounceDelay);
      }
    }
  };
  /* script */

  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "vs-reset"
    }, [_c("div", {
      ref: "select",
      staticClass: "vs-select",
      class: _vm.selectClasses,
      on: {
        click: _vm.activateSelect
      }
    }, [_c("div", {
      staticClass: "vs-select-control"
    }, [_c("div", {
      staticClass: "vs-select-container"
    }, [!_vm.hasValue && !_vm.hasSearchQuery ? _c("div", {
      staticClass: "vs-select-placeholder"
    }, [_vm._v("\n                    " + _vm._s(_vm.placeholder) + "\n                ")]) : _vm._e(), _vm._v(" "), _vm.hasValue && _vm.multiple ? _vm._l(_vm.selectedOptions, function (selectedOption, index) {
      return _c("div", {
        key: index,
        staticClass: "vs-select-multiple-value",
        on: {
          click: function click($event) {
            $event.stopPropagation();
          }
        }
      }, [_c("div", {
        staticClass: "vs-select-multiple-value-label"
      }, [_vm._v("\n                            " + _vm._s(selectedOption[_vm.optionLabel]) + "\n                        ")]), _vm._v(" "), _c("div", {
        staticClass: "vs-select-multiple-value-remove",
        on: {
          click: function click($event) {
            return _vm.deselectOption(selectedOption);
          }
        }
      })]);
    }) : _vm._e(), _vm._v(" "), !_vm.hasSearchQuery && _vm.hasValue && !_vm.multiple ? _c("div", {
      staticClass: "vs-select-single-value"
    }, [_vm._v("\n                    " + _vm._s(_vm.firstSelectedOption[_vm.optionLabel]) + "\n                ")]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "vs-select-input"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.searchQuery,
        expression: "searchQuery"
      }],
      ref: "input",
      attrs: {
        id: _vm.id,
        type: "text",
        size: _vm.disabled || !_vm.searchable ? 2 : null,
        readonly: _vm.disabled || !_vm.searchable,
        tabindex: _vm.disabled ? -1 : 0,
        autocomplete: "off"
      },
      domProps: {
        value: _vm.searchQuery
      },
      on: {
        blur: _vm.blurInput,
        focus: _vm.activateSelect,
        input: function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.searchQuery = $event.target.value;
        }
      }
    })])], 2), _vm._v(" "), _c("div", {
      staticClass: "vs-select-actions"
    }, [_vm.loading ? _c("div", {
      staticClass: "vs-select-loader"
    }, _vm._l(4, function (i) {
      return _c("div", {
        key: i
      });
    }), 0) : _c("div", {
      staticClass: "vs-select-arrow"
    })])]), _vm._v(" "), _vm.dropdownIsVisible ? _c("select-dropdown", {
      ref: "dropdown",
      attrs: {
        options: _vm.options,
        multiple: _vm.multiple,
        "loading-more": _vm.loadingMore,
        "selected-options": _vm.selectedOptions,
        "option-identifier": _vm.optionIdentifier,
        "no-options-message": _vm.noOptionsMessage,
        "scroll-throttle-delay": _vm.scrollThrottleDelay,
        "load-more-threshold": _vm.loadMoreThreshold
      },
      on: {
        "load-more": function loadMore($event) {
          return _vm.$emit("load-more");
        },
        "select-option": _vm.selectOption,
        "deselect-option": _vm.deselectOption
      },
      scopedSlots: _vm._u([{
        key: "dropdown-option",
        fn: function fn(ref) {
          var option = ref.option;
          var classes = ref.classes;
          return [_vm._t("dropdown-option", [_c("div", {
            staticClass: "vs-dropdown-option",
            class: classes
          }, [_vm._v("\n                        " + _vm._s(option[_vm.optionLabel]) + "\n                    ")])], null, {
            option: option,
            classes: classes
          })];
        }
      }, {
        key: "dropdown-loader",
        fn: function fn() {
          return [_vm._t("dropdown-loader", [_c("div", {
            staticClass: "vs-dropdown-loader"
          }, [_c("div", {
            staticClass: "vs-loader-dots"
          }, [_vm._v("\n                            Loading\n                        ")])])])];
        },
        proxy: true
      }], null, true)
    }) : _vm._e()], 1)]);
  };

  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;
  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var componentName = options.componentName || 'vue-select'; // Register components

    Vue.component(componentName, __vue_component__$1);
  }

  var state = {
    isOpen: false
  };
  var getters = {
    isOpen: function isOpen(state) {
      return state.isOpen;
    }
  };
  var mutations = {
    open: function open(state) {
      state.isOpen = true;
    },
    close: function close(state) {
      state.isOpen = false;
    }
  };
  var actions = {
    open: function open(_ref) {
      var commit = _ref.commit;
      commit('open');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('close');
    }
  };
  var alertStore = {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
  };

  var state$1 = {
    isOpen: false,
    item: {}
  };
  var getters$1 = {
    isOpen: function isOpen(state) {
      return state.isOpen;
    },
    item: function item(state) {
      return state.item;
    }
  };
  var mutations$1 = {
    setItem: function setItem(state, item) {
      state.item = item;
    },
    open: function open(state) {
      state.isOpen = true;
    },
    close: function close(state) {
      state.isOpen = false;
    }
  };
  var actions$1 = {
    open: function open(_ref) {
      var commit = _ref.commit;
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      commit('setItem', item);
      commit('open');
    },
    close: function close(_ref2) {
      var commit = _ref2.commit;
      commit('setItem', {});
      commit('close');
    }
  };
  var confirmationStore = {
    namespaced: true,
    state: state$1,
    getters: getters$1,
    mutations: mutations$1,
    actions: actions$1
  };

  var state$2 = {
    title: '',
    sideIsVisible: false
  };
  var getters$2 = {
    title: function title(state) {
      return state.title;
    },
    sideIsVisible: function sideIsVisible(state) {
      return state.sideIsVisible;
    }
  };
  var mutations$2 = {
    setTitle: function setTitle(state, title) {
      state.title = title;
    },
    openSide: function openSide(state) {
      state.sideIsVisible = true;
    },
    closeSide: function closeSide(state) {
      state.sideIsVisible = false;
    }
  };
  var actions$2 = {
    setTitle: function setTitle(_ref, title) {
      var commit = _ref.commit;
      var appName = process.env.MIX_APP_NAME;
      commit('setTitle', title);
      document.title = "".concat(title, " | ").concat(appName ? appName + ' -' : '', " Optimus");
    },
    toggleSide: function toggleSide(_ref2) {
      var commit = _ref2.commit,
          state = _ref2.state;

      if (state.sideIsVisible) {
        return commit('closeSide');
      }

      return commit('openSide');
    },
    closeSide: function closeSide(_ref3) {
      var commit = _ref3.commit;
      commit('closeSide');
    }
  };
  var dashboardStore = {
    namespaced: true,
    state: state$2,
    getters: getters$2,
    mutations: mutations$2,
    actions: actions$2
  };

  var matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

  var escapeStringRegexp = function escapeStringRegexp(string) {
    if (typeof string !== 'string') {
      throw new TypeError('Expected a string');
    }

    return string.replace(matchOperatorsRegex, '\\$&');
  };

  var regexpCache = new Map();

  function makeRegexp(pattern, options) {
    options = _objectSpread2({
      caseSensitive: false
    }, options);
    var cacheKey = pattern + JSON.stringify(options);

    if (regexpCache.has(cacheKey)) {
      return regexpCache.get(cacheKey);
    }

    var negated = pattern[0] === '!';

    if (negated) {
      pattern = pattern.slice(1);
    }

    pattern = escapeStringRegexp(pattern).replace(/\\\*/g, '.*');
    var regexp = new RegExp("^".concat(pattern, "$"), options.caseSensitive ? '' : 'i');
    regexp.negated = negated;
    regexpCache.set(cacheKey, regexp);
    return regexp;
  }

  var matcher = function matcher(inputs, patterns, options) {
    if (!(Array.isArray(inputs) && Array.isArray(patterns))) {
      throw new TypeError("Expected two arrays, got ".concat(_typeof(inputs), " ").concat(_typeof(patterns)));
    }

    if (patterns.length === 0) {
      return inputs;
    }

    var firstNegated = patterns[0][0] === '!';
    patterns = patterns.map(function (pattern) {
      return makeRegexp(pattern, options);
    });
    var result = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var input = _step.value;
        // If first pattern is negated we include everything to match user expectation
        var matches = firstNegated;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = patterns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var pattern = _step2.value;

            if (pattern.test(input)) {
              matches = !pattern.negated;
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (matches) {
          result.push(input);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return result;
  };

  var isMatch = function isMatch(input, pattern, options) {
    var inputArray = Array.isArray(input) ? input : [input];
    var patternArray = Array.isArray(pattern) ? pattern : [pattern];
    return inputArray.some(function (input) {
      return patternArray.every(function (pattern) {
        var regexp = makeRegexp(pattern, options);
        var matches = regexp.test(input);
        return regexp.negated ? !matches : matches;
      });
    });
  };
  matcher.isMatch = isMatch;

  var state$3 = {
    loading: []
  };
  var getters$3 = {
    isLoading: function isLoading(state) {
      return function (item) {
        if (typeof item === 'string') {
          if (item.match(/[*!]/)) {
            return state.loading.filter(function (load) {
              return matcher.isMatch(load, item);
            }).length > 0;
          }

          return state.loading.includes(item);
        }

        return state.loading.length > 0;
      };
    }
  };
  var mutations$3 = {
    start: function start(state, item) {
      state.loading = _toConsumableArray(new Set([].concat(_toConsumableArray(state.loading), [item])));
    },
    stop: function stop(state, item) {
      if (typeof item === 'string') {
        if (item.match(/[*!]/)) {
          state.loading = state.loading.filter(function (load) {
            return !matcher.isMatch(load, item);
          });
        } else {
          var index = state.loading.indexOf(item);

          if (index !== -1) {
            state.loading.splice(index, 1);
          }
        }
      } else {
        state.loading = [];
      }
    }
  };
  var actions$3 = {
    start: function start(_ref, item) {
      var commit = _ref.commit;
      commit('start', item);
    },
    stop: function stop(_ref2) {
      var commit = _ref2.commit;
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      commit('stop', item);
    }
  };
  var loaderStore = {
    namespaced: true,
    state: state$3,
    getters: getters$3,
    mutations: mutations$3,
    actions: actions$3
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var humps = createCommonjsModule(function (module) {
    (function (global) {
      var _processKeys = function _processKeys(convert, obj, options) {
        if (!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
          return obj;
        }

        var output,
            i = 0,
            l = 0;

        if (_isArray(obj)) {
          output = [];

          for (l = obj.length; i < l; i++) {
            output.push(_processKeys(convert, obj[i], options));
          }
        } else {
          output = {};

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              output[convert(key, options)] = _processKeys(convert, obj[key], options);
            }
          }
        }

        return output;
      }; // String conversion methods


      var separateWords = function separateWords(string, options) {
        options = options || {};
        var separator = options.separator || '_';
        var split = options.split || /(?=[A-Z])/;
        return string.split(split).join(separator);
      };

      var camelize = function camelize(string) {
        if (_isNumerical(string)) {
          return string;
        }

        string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
          return chr ? chr.toUpperCase() : '';
        }); // Ensure 1st char is always lowercase

        return string.substr(0, 1).toLowerCase() + string.substr(1);
      };

      var pascalize = function pascalize(string) {
        var camelized = camelize(string); // Ensure 1st char is always uppercase

        return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
      };

      var decamelize = function decamelize(string, options) {
        return separateWords(string, options).toLowerCase();
      }; // Utilities
      // Taken from Underscore.js


      var toString = Object.prototype.toString;

      var _isFunction = function _isFunction(obj) {
        return typeof obj === 'function';
      };

      var _isObject = function _isObject(obj) {
        return obj === Object(obj);
      };

      var _isArray = function _isArray(obj) {
        return toString.call(obj) == '[object Array]';
      };

      var _isDate = function _isDate(obj) {
        return toString.call(obj) == '[object Date]';
      };

      var _isRegExp = function _isRegExp(obj) {
        return toString.call(obj) == '[object RegExp]';
      };

      var _isBoolean = function _isBoolean(obj) {
        return toString.call(obj) == '[object Boolean]';
      }; // Performant way to determine if obj coerces to a number


      var _isNumerical = function _isNumerical(obj) {
        obj = obj - 0;
        return obj === obj;
      }; // Sets up function which handles processing keys
      // allowing the convert function to be modified by a callback


      var _processor = function _processor(convert, options) {
        var callback = options && 'process' in options ? options.process : options;

        if (typeof callback !== 'function') {
          return convert;
        }

        return function (string, options) {
          return callback(string, convert, options);
        };
      };

      var humps = {
        camelize: camelize,
        decamelize: decamelize,
        pascalize: pascalize,
        depascalize: decamelize,
        camelizeKeys: function camelizeKeys(object, options) {
          return _processKeys(_processor(camelize, options), object);
        },
        decamelizeKeys: function decamelizeKeys(object, options) {
          return _processKeys(_processor(decamelize, options), object, options);
        },
        pascalizeKeys: function pascalizeKeys(object, options) {
          return _processKeys(_processor(pascalize, options), object);
        },
        depascalizeKeys: function depascalizeKeys() {
          return this.decamelizeKeys.apply(this, arguments);
        }
      };

      if ( module.exports) {
        module.exports = humps;
      } else {
        global.humps = humps;
      }
    })(commonjsGlobal);
  });

  var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return _typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof(obj);
  };

  var defineProperty = function defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  function styleToObject(style) {
    return style.split(';').map(function (s) {
      return s.trim();
    }).filter(function (s) {
      return s;
    }).reduce(function (acc, pair) {
      var i = pair.indexOf(':');
      var prop = humps.camelize(pair.slice(0, i));
      var value = pair.slice(i + 1).trim();
      acc[prop] = value;
      return acc;
    }, {});
  }

  function classToObject(cls) {
    return cls.split(/\s+/).reduce(function (acc, c) {
      acc[c] = true;
      return acc;
    }, {});
  }

  function combineClassObjects() {
    for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    return objs.reduce(function (acc, obj) {
      if (Array.isArray(obj)) {
        acc = acc.concat(obj);
      } else {
        acc.push(obj);
      }

      return acc;
    }, []);
  }

  function convert(h, element) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var children = (element.children || []).map(convert.bind(null, h));
    var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
      var val = element.attributes[key];

      switch (key) {
        case 'class':
          acc['class'] = classToObject(val);
          break;

        case 'style':
          acc['style'] = styleToObject(val);
          break;

        default:
          acc.attrs[key] = val;
      }

      return acc;
    }, {
      'class': {},
      style: {},
      attrs: {}
    });
    var _data$class = data.class,
        dClass = _data$class === undefined ? {} : _data$class,
        _data$style = data.style,
        dStyle = _data$style === undefined ? {} : _data$style,
        _data$attrs = data.attrs,
        dAttrs = _data$attrs === undefined ? {} : _data$attrs,
        remainingData = objectWithoutProperties(data, ['class', 'style', 'attrs']);

    if (typeof element === 'string') {
      return element;
    } else {
      return h(element.tag, _extends({
        class: combineClassObjects(mixins.class, dClass),
        style: _extends({}, mixins.style, dStyle),
        attrs: _extends({}, mixins.attrs, dAttrs)
      }, remainingData, {
        props: props
      }), children);
    }
  }

  var PRODUCTION$1 = false;

  try {
    PRODUCTION$1 = process.env.NODE_ENV === 'production';
  } catch (e) {}

  function log() {
    if (!PRODUCTION$1 && console && typeof console.error === 'function') {
      var _console;

      (_console = console).error.apply(_console, arguments);
    }
  }

  function objectWithKey(key, value) {
    return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
  }

  function classList(props) {
    var _classes;

    var classes = (_classes = {
      'fa-spin': props.spin,
      'fa-pulse': props.pulse,
      'fa-fw': props.fixedWidth,
      'fa-border': props.border,
      'fa-li': props.listItem,
      'fa-inverse': props.inverse,
      'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
      'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
    }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes);
    return Object.keys(classes).map(function (key) {
      return classes[key] ? key : null;
    }).filter(function (key) {
      return key;
    });
  }

  function normalizeIconArgs(icon$$1) {
    if (icon$$1 === null) {
      return null;
    }

    if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof$1(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
      return icon$$1;
    }

    if (Array.isArray(icon$$1) && icon$$1.length === 2) {
      return {
        prefix: icon$$1[0],
        iconName: icon$$1[1]
      };
    }

    if (typeof icon$$1 === 'string') {
      return {
        prefix: 'fas',
        iconName: icon$$1
      };
    }
  }

  var FontAwesomeIcon = {
    name: 'FontAwesomeIcon',
    functional: true,
    props: {
      border: {
        type: Boolean,
        default: false
      },
      fixedWidth: {
        type: Boolean,
        default: false
      },
      flip: {
        type: String,
        default: null,
        validator: function validator(value) {
          return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
        }
      },
      icon: {
        type: [Object, Array, String],
        required: true
      },
      mask: {
        type: [Object, Array, String],
        default: null
      },
      listItem: {
        type: Boolean,
        default: false
      },
      pull: {
        type: String,
        default: null,
        validator: function validator(value) {
          return ['right', 'left'].indexOf(value) > -1;
        }
      },
      pulse: {
        type: Boolean,
        default: false
      },
      rotation: {
        type: [String, Number],
        default: null,
        validator: function validator(value) {
          return [90, 180, 270].indexOf(parseInt(value, 10)) > -1;
        }
      },
      swapOpacity: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: null,
        validator: function validator(value) {
          return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
        }
      },
      spin: {
        type: Boolean,
        default: false
      },
      transform: {
        type: [String, Object],
        default: null
      },
      symbol: {
        type: [Boolean, String],
        default: false
      },
      title: {
        type: String,
        default: null
      },
      inverse: {
        type: Boolean,
        default: false
      }
    },
    render: function render(createElement, context) {
      var props = context.props;
      var iconArgs = props.icon,
          maskArgs = props.mask,
          symbol = props.symbol,
          title = props.title;
      var icon$$1 = normalizeIconArgs(iconArgs);
      var classes = objectWithKey('classes', classList(props));
      var transform = objectWithKey('transform', typeof props.transform === 'string' ? parse.transform(props.transform) : props.transform);
      var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
      var renderedIcon = icon(icon$$1, _extends({}, classes, transform, mask, {
        symbol: symbol,
        title: title
      }));

      if (!renderedIcon) {
        return log('Could not find one or more icon(s)', icon$$1, mask);
      }

      var abstract = renderedIcon.abstract;
      var convertCurry = convert.bind(null, createElement);
      return convertCurry(abstract[0], {}, context.data);
    }
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$2 = {
    props: {
      errors: {
        type: Object,
        default: function _default() {}
      }
    }
  };

  function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("o-notification", {
      attrs: {
        "is-error": ""
      }
    }, [_vm._l(_vm.errors, function (errorGroup) {
      return _vm._l(errorGroup, function (error, index) {
        return _c("p", {
          key: index
        }, [_vm._v("\n            " + _vm._s(error) + "\n        ")]);
      });
    })], 2);
  };

  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;
  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = normalizeComponent$1({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  var inputMixin = {
    props: {
      value: {
        default: null
      },
      id: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        newValue: this.value
      };
    },
    watch: {
      value: function value(_value) {
        this.newValue = _value;
      },
      newValue: function newValue(value) {
        this.$emit('input', value);
      }
    }
  };

  //
  var script$3 = {
    mixins: [inputMixin],
    props: {
      checkedValue: {
        type: null,
        default: true
      },
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'checkbox'
      }
    }
  };

  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "control"
    }, [_vm.type === "checkbox" ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newValue,
        expression: "newValue"
      }],
      staticClass: "checkbox",
      attrs: {
        id: _vm.id,
        name: _vm.id,
        type: "checkbox"
      },
      domProps: {
        value: _vm.checkedValue,
        checked: Array.isArray(_vm.newValue) ? _vm._i(_vm.newValue, _vm.checkedValue) > -1 : _vm.newValue
      },
      on: {
        change: [function ($event) {
          var $$a = _vm.newValue,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = _vm.checkedValue,
                $$i = _vm._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && (_vm.newValue = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.newValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.newValue = $$c;
          }
        }, function ($event) {
          return _vm.$emit("change", $event);
        }]
      }
    }) : _vm.type === "radio" ? _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newValue,
        expression: "newValue"
      }],
      staticClass: "checkbox",
      attrs: {
        id: _vm.id,
        name: _vm.id,
        type: "radio"
      },
      domProps: {
        value: _vm.checkedValue,
        checked: _vm._q(_vm.newValue, _vm.checkedValue)
      },
      on: {
        change: [function ($event) {
          _vm.newValue = _vm.checkedValue;
        }, function ($event) {
          return _vm.$emit("change", $event);
        }]
      }
    }) : _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.newValue,
        expression: "newValue"
      }],
      staticClass: "checkbox",
      attrs: {
        id: _vm.id,
        name: _vm.id,
        type: _vm.type
      },
      domProps: _defineProperty({
        value: _vm.checkedValue
      }, "value", _vm.newValue),
      on: {
        change: function change($event) {
          return _vm.$emit("change", $event);
        },
        input: function input($event) {
          if ($event.target.composing) {
            return;
          }

          _vm.newValue = $event.target.value;
        }
      }
    }), _vm._v(" "), _c("label", {
      attrs: {
        for: _vm.id
      }
    }, [_vm._v("\n        " + _vm._s(_vm.label) + "\n    ")])]);
  };

  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;
  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = normalizeComponent$1({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$4 = {
    props: {
      value: {
        type: null,
        default: null
      },
      id: {
        type: String,
        required: true
      },
      required: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'text'
      }
    },
    computed: {
      newValue: {
        get: function get() {
          return this.value;
        },
        set: function set(value) {
          this.$emit('input', value);
        }
      }
    },
    watch: {
      value: function value(_value) {
        this.newValue = _value;
      },
      newValue: function newValue(value) {
        this.$emit('input', value);
      }
    }
  };

  /* script */
  var __vue_script__$4 = script$4;
  /* template */

  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.type === "textarea" ? _vm.type : "input", {
      tag: "component",
      class: _vm.type === "textarea" ? "textarea" : "input",
      attrs: {
        id: _vm.id,
        type: _vm.type,
        required: _vm.required
      },
      domProps: {
        value: _vm.newValue
      },
      on: {
        input: function input($event) {
          _vm.newValue = $event.currentTarget.value;
        }
      }
    });
  };

  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;
  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$4 = normalizeComponent$1({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
  }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$5 = {
    props: {
      label: {
        type: String,
        default: null
      },
      input: {
        type: String,
        default: null
      },
      required: {
        type: Boolean,
        default: false
      }
    }
  };

  /* script */
  var __vue_script__$5 = script$5;
  /* template */

  var __vue_render__$5 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "field",
      class: {
        required: _vm.required
      }
    }, [_vm.label ? _c("label", {
      staticClass: "label",
      attrs: {
        for: _vm.input
      }
    }, [_vm._v("\n        " + _vm._s(_vm.label) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "control"
    }, [_vm._t("default")], 2), _vm._v(" "), _vm.$slots.hasOwnProperty("help") ? _c("div", {
      staticClass: "help"
    }, [_vm._t("help")], 2) : _vm._e()]);
  };

  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;
  /* style */

  var __vue_inject_styles__$5 = undefined;
  /* scoped */

  var __vue_scope_id__$5 = undefined;
  /* module identifier */

  var __vue_module_identifier__$5 = undefined;
  /* functional template */

  var __vue_is_functional_template__$5 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$5 = normalizeComponent$1({
    render: __vue_render__$5,
    staticRenderFns: __vue_staticRenderFns__$5
  }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$6 = {
    props: {
      item: {
        type: Object,
        default: null
      }
    },
    data: function data() {
      return {
        form: {
          title: '',
          description: '',
          og_title: '',
          og_description: '',
          og_image_id: null,
          additional_tags: ''
        },
        og_image: null
      };
    },
    watch: {
      item: {
        handler: function handler(item) {
          if (!item) {
            return;
          }

          this.form = {
            title: item.title,
            description: item.description,
            og_title: item.og_title,
            og_description: item.og_description,
            og_image_id: item.og_image ? item.og_image.id : null,
            additional_tags: item.additional_tags
          };
          this.og_image = item.og_image;
        },
        immediate: true
      },
      form: {
        handler: function handler(form) {
          this.$emit('input', form);
        },
        deep: true
      }
    }
  };

  /* script */
  var __vue_script__$6 = script$6;
  /* template */

  var __vue_render__$6 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", [_c("o-form-field", {
      attrs: {
        input: "meta_title",
        label: "Meta Title"
      }
    }, [_c("o-input", {
      attrs: {
        id: "meta_title"
      },
      model: {
        value: _vm.form.title,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "title", $$v);
        },
        expression: "form.title"
      }
    })], 1), _vm._v(" "), _c("o-form-field", {
      attrs: {
        input: "meta_description",
        label: "Meta Description"
      }
    }, [_c("o-input", {
      attrs: {
        id: "meta_description"
      },
      model: {
        value: _vm.form.description,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "description", $$v);
        },
        expression: "form.description"
      }
    })], 1), _vm._v(" "), _c("o-form-field", {
      attrs: {
        input: "meta_og_title",
        label: "OG Title"
      }
    }, [_c("o-input", {
      attrs: {
        id: "meta_og_title"
      },
      model: {
        value: _vm.form.og_title,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "og_title", $$v);
        },
        expression: "form.og_title"
      }
    })], 1), _vm._v(" "), _c("o-form-field", {
      attrs: {
        input: "meta_og_description",
        label: "OG Description"
      }
    }, [_c("o-input", {
      attrs: {
        id: "meta_og_description"
      },
      model: {
        value: _vm.form.og_description,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "og_description", $$v);
        },
        expression: "form.og_description"
      }
    })], 1), _vm._v(" "), _c("o-form-field", {
      attrs: {
        input: "meta_og_image",
        label: "OG Image"
      }
    }, [_c("media-picker", {
      attrs: {
        id: "meta_og_image",
        media: _vm.og_image,
        "show-preview": "",
        "accepted-extensions": "image"
      },
      model: {
        value: _vm.form.og_image_id,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "og_image_id", $$v);
        },
        expression: "form.og_image_id"
      }
    }), _vm._v(" "), _c("template", {
      slot: "help"
    }, [_vm._v("\n            This image will be resized to 1200x630px\n        ")])], 2), _vm._v(" "), _c("o-form-field", {
      attrs: {
        input: "meta_additional_tags",
        label: "Custom Tags"
      }
    }, [_c("o-input", {
      attrs: {
        id: "meta_additional_tags",
        type: "textarea"
      },
      model: {
        value: _vm.form.additional_tags,
        callback: function callback($$v) {
          _vm.$set(_vm.form, "additional_tags", $$v);
        },
        expression: "form.additional_tags"
      }
    })], 1)], 1);
  };

  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;
  /* style */

  var __vue_inject_styles__$6 = undefined;
  /* scoped */

  var __vue_scope_id__$6 = undefined;
  /* module identifier */

  var __vue_module_identifier__$6 = undefined;
  /* functional template */

  var __vue_is_functional_template__$6 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$6 = normalizeComponent$1({
    render: __vue_render__$6,
    staticRenderFns: __vue_staticRenderFns__$6
  }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

  var script$7 = {
    computed: _objectSpread2({}, vuex.mapGetters({
      title: 'dashboard/title'
    }))
  };

  /* script */
  var __vue_script__$7 = script$7;
  /* template */

  var __vue_render__$7 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("header", {
      staticClass: "flex justify-between items-center bg-white border-b border-grey-500 px-8 h-24"
    }, [_c("div", [_vm.title ? _c("h1", {
      staticClass: "title"
    }, [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", [_vm._t("default")], 2)]);
  };

  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;
  /* style */

  var __vue_inject_styles__$7 = undefined;
  /* scoped */

  var __vue_scope_id__$7 = undefined;
  /* module identifier */

  var __vue_module_identifier__$7 = undefined;
  /* functional template */

  var __vue_is_functional_template__$7 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$7 = normalizeComponent$1({
    render: __vue_render__$7,
    staticRenderFns: __vue_staticRenderFns__$7
  }, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$8 = {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  };

  /* script */
  var __vue_script__$8 = script$8;
  /* template */

  var __vue_render__$8 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "side-header px-10 h-24"
    }, [_c("div", {
      staticClass: "flex items-center"
    }, [_c("div", {
      staticClass: "flex-no-shrink mr-4"
    }, [_c("figure", {
      staticClass: "image w-12 h-12"
    }, [_c("img", {
      staticClass: "rounded-full",
      attrs: {
        src: _vm.user.avatar,
        alt: _vm.user.name
      }
    })])]), _vm._v(" "), _c("div", {
      staticClass: "flex-grow"
    }, [_c("div", {
      staticClass: "font-medium text-white mb-1"
    }, [_vm._v("\n                " + _vm._s(_vm.user.name) + "\n            ")]), _vm._v(" "), _c("router-link", {
      staticClass: "flex items-center text-grey-500 hover:text-grey-400",
      attrs: {
        to: {
          name: "admin-users.edit",
          params: {
            id: _vm.user.id
          }
        }
      }
    }, [_c("span", {
      staticClass: "icon small mr-1"
    }, [_c("icon", {
      attrs: {
        icon: "cog",
        size: "sm"
      }
    })], 1), _vm._v(" "), _c("span", {
      staticClass: "text-xs"
    }, [_vm._v("\n                    Your details\n                ")])])], 1)])]);
  };

  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;
  /* style */

  var __vue_inject_styles__$8 = undefined;
  /* scoped */

  var __vue_scope_id__$8 = undefined;
  /* module identifier */

  var __vue_module_identifier__$8 = undefined;
  /* functional template */

  var __vue_is_functional_template__$8 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$8 = normalizeComponent$1({
    render: __vue_render__$8,
    staticRenderFns: __vue_staticRenderFns__$8
  }, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

  /* script */

  /* template */
  var __vue_render__$9 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("ul", {
      staticClass: "side-nav list-reset"
    }, [_vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;
  /* style */

  var __vue_inject_styles__$9 = undefined;
  /* scoped */

  var __vue_scope_id__$9 = undefined;
  /* module identifier */

  var __vue_module_identifier__$9 = undefined;
  /* functional template */

  var __vue_is_functional_template__$9 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$9 = normalizeComponent$1({
    render: __vue_render__$9,
    staticRenderFns: __vue_staticRenderFns__$9
  }, __vue_inject_styles__$9, {}, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

  var script$9 = {
    components: {
      MainHeader: __vue_component__$7,
      SideHeader: __vue_component__$8,
      SideNav: __vue_component__$9
    },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    computed: _objectSpread2({}, vuex.mapGetters({
      sideIsVisible: 'dashboard/sideIsVisible'
    })),
    methods: _objectSpread2({}, vuex.mapActions({
      toggleSide: 'dashboard/toggleSide'
    }))
  };

  /* script */
  var __vue_script__$9 = script$9;
  /* template */

  var __vue_render__$a = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "dashboard bg-grey-200",
      class: {
        "show-side": _vm.sideIsVisible
      }
    }, [_c("div", {
      staticClass: "side bg-blue-700"
    }, [_c("a", {
      staticClass: "side-toggle bg-blue-700 lg:hidden",
      on: {
        click: _vm.toggleSide
      }
    }, [_vm._m(0)]), _vm._v(" "), _c("side-header", {
      attrs: {
        user: _vm.user
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "side-content px-10 py-8"
    }, [_c("side-nav", [_vm._t("side-nav")], 2)], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "main ml-5 lg:ml-0",
      attrs: {
        id: "main"
      }
    }, [_c("main-header", [_vm._t("header")], 2), _vm._v(" "), _c("router-view")], 1)]);
  };

  var __vue_staticRenderFns__$a = [function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("span", {
      staticClass: "dots"
    }, [_c("i")]);
  }];
  __vue_render__$a._withStripped = true;
  /* style */

  var __vue_inject_styles__$a = undefined;
  /* scoped */

  var __vue_scope_id__$a = undefined;
  /* module identifier */

  var __vue_module_identifier__$a = undefined;
  /* functional template */

  var __vue_is_functional_template__$a = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$a = normalizeComponent$1({
    render: __vue_render__$a,
    staticRenderFns: __vue_staticRenderFns__$a
  }, __vue_inject_styles__$a, __vue_script__$9, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$a = {
    props: {
      to: {
        type: Object,
        default: null
      },
      section: {
        type: String,
        default: null
      },
      label: {
        type: String,
        required: true
      }
    },
    data: function data() {
      return {
        subNavIsVisible: false
      };
    },
    computed: {
      currentSection: function currentSection() {
        var meta = this.$route.matched[this.$route.matched.length - 1].meta;

        if (meta.hasOwnProperty('section')) {
          return meta.section;
        }

        return this.$route.matched[0].meta.section;
      },
      sectionIsActive: function sectionIsActive() {
        return this.section === this.currentSection;
      },
      isRouterLink: function isRouterLink() {
        return !!this.to;
      },
      hasSubNav: function hasSubNav() {
        return !!this.$slots.default;
      },
      icon: function icon() {
        if (this.hasSubNav) {
          return this.subNavIsVisible ? 'angle-up' : 'angle-down';
        }

        return 'angle-right';
      }
    },
    watch: {
      currentSection: {
        handler: function handler(section) {
          this.subNavIsVisible = section === this.section;
        },
        immediate: true
      }
    },
    methods: {
      toggleSubNav: function toggleSubNav(e) {
        if (this.hasSubNav) {
          this.subNavIsVisible = !this.subNavIsVisible;
          e.preventDefault();
        }
      }
    }
  };

  /* script */
  var __vue_script__$a = script$a;
  /* template */

  var __vue_render__$b = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("li", {
      class: {
        active: _vm.sectionIsActive
      }
    }, [_vm.isRouterLink ? _c("router-link", {
      attrs: {
        to: _vm.to
      }
    }, [_c("span", [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")]), _vm._v(" "), _c("span", {
      staticClass: "icon large",
      on: {
        click: _vm.toggleSubNav
      }
    }, [_c("icon", {
      attrs: {
        icon: _vm.icon,
        size: "sm"
      }
    })], 1)]) : _c("a", {
      on: {
        click: function click($event) {
          return _vm.$emit("click");
        }
      }
    }, [_c("span", [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")]), _vm._v(" "), _c("span", {
      staticClass: "icon large"
    }, [_c("icon", {
      attrs: {
        icon: "angle-right",
        size: "sm"
      }
    })], 1)]), _vm._v(" "), _vm.hasSubNav && _vm.subNavIsVisible ? _c("ul", {
      staticClass: "side-sub-nav list-reset"
    }, [_vm._t("default")], 2) : _vm._e()], 1);
  };

  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;
  /* style */

  var __vue_inject_styles__$b = undefined;
  /* scoped */

  var __vue_scope_id__$b = undefined;
  /* module identifier */

  var __vue_module_identifier__$b = undefined;
  /* functional template */

  var __vue_is_functional_template__$b = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$b = normalizeComponent$1({
    render: __vue_render__$b,
    staticRenderFns: __vue_staticRenderFns__$b
  }, __vue_inject_styles__$b, __vue_script__$a, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$b = {
    props: {
      to: {
        type: Object,
        default: function _default() {}
      }
    },
    computed: {
      isActive: function isActive() {
        var route = this.$route.matched[this.$route.matched.length - 1];
        return this.to.hasOwnProperty('name') && route.name === this.to.name;
      }
    }
  };

  /* script */
  var __vue_script__$b = script$b;
  /* template */

  var __vue_render__$c = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("router-link", {
      class: {
        active: _vm.isActive
      },
      attrs: {
        to: _vm.to,
        tag: "li"
      }
    }, [_c("a", [_vm._t("default")], 2)]);
  };

  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;
  /* style */

  var __vue_inject_styles__$c = undefined;
  /* scoped */

  var __vue_scope_id__$c = undefined;
  /* module identifier */

  var __vue_module_identifier__$c = undefined;
  /* functional template */

  var __vue_is_functional_template__$c = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$c = normalizeComponent$1({
    render: __vue_render__$c,
    staticRenderFns: __vue_staticRenderFns__$c
  }, __vue_inject_styles__$c, __vue_script__$b, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);

  var script$c = {
    props: {
      id: {
        type: String,
        default: null
      },
      buttonText: {
        type: String,
        default: 'Ok'
      },
      buttonClass: {
        type: String,
        default: 'green'
      }
    },
    computed: _objectSpread2({}, vuex.mapGetters({
      isOpen: 'alert/isOpen'
    })),
    methods: _objectSpread2({}, vuex.mapActions({
      open: 'alert/open',
      close: 'alert/close'
    }), {
      confirm: function confirm() {
        this.$emit('close');
        this.close();
      }
    })
  };

  /* script */
  var __vue_script__$c = script$c;
  /* template */

  var __vue_render__$d = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("o-modal", {
      attrs: {
        active: _vm.isOpen
      },
      on: {
        close: _vm.confirm
      }
    }, [_c("div", {
      staticClass: "modal-content bg-white rounded max-w-sm"
    }, [_c("div", {
      staticClass: "content px-6 pt-8 text-center"
    }, [_vm._t("default")], 2), _vm._v(" "), _c("div", {
      staticClass: "p-6 text-center"
    }, [_c("a", {
      staticClass: "button w-full sm:w-1/2",
      class: _vm.buttonClass,
      on: {
        click: _vm.confirm
      }
    }, [_vm._v("\n                " + _vm._s(_vm.buttonText) + "\n            ")])])])]);
  };

  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;
  /* style */

  var __vue_inject_styles__$d = undefined;
  /* scoped */

  var __vue_scope_id__$d = undefined;
  /* module identifier */

  var __vue_module_identifier__$d = undefined;
  /* functional template */

  var __vue_is_functional_template__$d = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$d = normalizeComponent$1({
    render: __vue_render__$d,
    staticRenderFns: __vue_staticRenderFns__$d
  }, __vue_inject_styles__$d, __vue_script__$c, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);

  var script$d = {
    props: {
      buttonText: {
        type: String,
        default: 'Confirm'
      },
      buttonClass: {
        type: String,
        default: 'green'
      },
      buttonCancelText: {
        type: String,
        default: 'Cancel'
      }
    },
    computed: _objectSpread2({}, vuex.mapGetters({
      isOpen: 'confirmation/isOpen',
      item: 'confirmation/item'
    })),
    methods: _objectSpread2({}, vuex.mapActions({
      close: 'confirmation/close'
    }), {
      confirm: function confirm() {
        this.$emit('confirm', this.item);
        this.close();
      }
    })
  };

  /* script */
  var __vue_script__$d = script$d;
  /* template */

  var __vue_render__$e = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("o-modal", {
      attrs: {
        active: _vm.isOpen
      },
      on: {
        close: _vm.close,
        escape: _vm.close
      }
    }, [_c("div", {
      staticClass: "modal-content bg-white rounded max-w-sm"
    }, [_c("div", {
      staticClass: "content px-6 py-8 text-center"
    }, [_vm._t("default", [_vm._v("\n                Are you sure?\n            ")], {
      item: _vm.item
    })], 2), _vm._v(" "), _c("div", {
      staticClass: "button-group"
    }, [_c("a", {
      staticClass: "button",
      class: _vm.buttonClass,
      on: {
        click: _vm.confirm
      }
    }, [_vm._v("\n                " + _vm._s(_vm.buttonText) + "\n            ")]), _vm._v(" "), _c("a", {
      staticClass: "button",
      on: {
        click: _vm.close
      }
    }, [_vm._v("\n                " + _vm._s(_vm.buttonCancelText) + "\n            ")])])])]);
  };

  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;
  /* style */

  var __vue_inject_styles__$e = undefined;
  /* scoped */

  var __vue_scope_id__$e = undefined;
  /* module identifier */

  var __vue_module_identifier__$e = undefined;
  /* functional template */

  var __vue_is_functional_template__$e = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$e = normalizeComponent$1({
    render: __vue_render__$e,
    staticRenderFns: __vue_staticRenderFns__$e
  }, __vue_inject_styles__$e, __vue_script__$d, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$e = {
    props: {
      value: {
        type: null,
        default: null
      },
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      defaultOption: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        default: 'Please select'
      },
      buttonClass: {
        type: String,
        default: ''
      },
      icon: {
        type: [String, Object],
        default: 'angle-down'
      }
    },
    data: function data() {
      return {
        isOpen: false,
        newValue: this.value
      };
    },
    computed: {
      buttonText: function buttonText() {
        var _this = this;

        var option;

        if (this.value) {
          option = this.options.find(function (_ref) {
            var value = _ref.value;
            return value === _this.value;
          });
        }

        return option ? option.label : this.placeholder;
      }
    },
    watch: {
      newValue: function newValue(value) {
        this.$emit('input', value);
      },
      isOpen: function isOpen(_isOpen) {
        if (!_isOpen) {
          this.$emit('close');
        }
      }
    },
    created: function created() {
      var _this2 = this;

      ['click', 'touchstart'].forEach(function (action) {
        document.addEventListener(action, _this2.close);
      });
    },
    destroyed: function destroyed() {
      var _this3 = this;

      ['click', 'touchstart'].forEach(function (action) {
        document.removeEventListener(action, _this3.close);
      });
    },
    methods: {
      close: function close(event) {
        if (this.isOpen && this.$refs.dropdown !== event.target && !this.$refs.dropdown.contains(event.target)) {
          this.isOpen = false;
        }
      }
    }
  };

  /* script */
  var __vue_script__$e = script$e;
  /* template */

  var __vue_render__$f = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      ref: "dropdown",
      staticClass: "dropdown",
      class: {
        open: _vm.isOpen
      }
    }, [_c("div", {
      staticClass: "cursor-pointer",
      on: {
        click: function click($event) {
          _vm.isOpen = !_vm.isOpen;
        }
      }
    }, [_vm._t("button", [_c("span", {
      staticClass: "button max-w-xs",
      class: _vm.buttonClass
    }, [_c("span", {
      staticClass: "truncate"
    }, [_vm._v("\n                    " + _vm._s(_vm.buttonText) + "\n                ")]), _vm._v(" "), _c("span", {
      staticClass: "icon"
    }, [_c("icon", {
      attrs: {
        icon: _vm.icon
      }
    })], 1)])], {
      isOpen: _vm.isOpen
    })], 2), _vm._v(" "), _c("div", {
      staticClass: "dropdown-menu max-w-xs",
      on: {
        click: function click($event) {
          _vm.isOpen = false;
        }
      }
    }, [_c("div", {
      staticClass: "dropdown-content"
    }, [_c("div", {
      staticClass: "dropdown-scroll"
    }, [_vm._t("default", [_vm.defaultOption ? _c("a", {
      staticClass: "dropdown-item",
      class: {
        active: [null, undefined].includes(_vm.value)
      },
      on: {
        click: function click($event) {
          _vm.newValue = null;
        }
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.placeholder) + "\n                    ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.options, function (option) {
      return [_vm._t("option", [_c("a", {
        key: option.value,
        staticClass: "dropdown-item",
        class: {
          active: option.value === _vm.value
        },
        on: {
          click: function click($event) {
            _vm.newValue = option.value;
          }
        }
      }, [_vm._v("\n                                " + _vm._s(option.label) + "\n                            ")])], {
        option: option
      })];
    })])], 2)])])]);
  };

  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;
  /* style */

  var __vue_inject_styles__$f = undefined;
  /* scoped */

  var __vue_scope_id__$f = undefined;
  /* module identifier */

  var __vue_module_identifier__$f = undefined;
  /* functional template */

  var __vue_is_functional_template__$f = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$f = normalizeComponent$1({
    render: __vue_render__$f,
    staticRenderFns: __vue_staticRenderFns__$f
  }, __vue_inject_styles__$f, __vue_script__$e, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$f = {
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      loading: {
        type: Boolean,
        default: false
      },
      spinnerDelay: {
        type: Number,
        default: 350
      },
      transitionName: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        timeout: null,
        showLoader: false
      };
    },
    watch: {
      loading: {
        handler: function handler(isLoading) {
          var _this = this;

          if (isLoading) {
            this.timeout = setTimeout(function () {
              _this.showLoader = true;
            }, this.spinnerDelay);
            return;
          }

          clearTimeout(this.timeout);
        },
        immediate: true
      }
    }
  };

  /* script */
  var __vue_script__$f = script$f;
  /* template */

  var __vue_render__$g = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("transition", {
      attrs: {
        name: "loader",
        mode: "out-in"
      }
    }, [_vm.loading ? _c("div", {
      key: "loader",
      staticClass: "p-8",
      class: _vm.tag === "tbody" ? "table-loader text-center" : "flex items-center justify-center"
    }, [_c("transition", {
      attrs: {
        name: "fade"
      }
    }, [_vm.showLoader ? _c("div", {
      staticClass: "icon"
    }, [_c("icon", {
      attrs: {
        spin: "",
        icon: "spinner",
        size: "lg"
      }
    })], 1) : _vm._e()])], 1) : _vm.transitionName ? _c("transition-group", {
      attrs: {
        tag: _vm.tag,
        name: _vm.transitionName
      }
    }, [_vm._t("default")], 2) : _c(_vm.tag, {
      key: "content",
      tag: "component"
    }, [_vm._t("default")], 2)], 1);
  };

  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;
  /* style */

  var __vue_inject_styles__$g = undefined;
  /* scoped */

  var __vue_scope_id__$g = undefined;
  /* module identifier */

  var __vue_module_identifier__$g = undefined;
  /* functional template */

  var __vue_is_functional_template__$g = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$g = normalizeComponent$1({
    render: __vue_render__$g,
    staticRenderFns: __vue_staticRenderFns__$g
  }, __vue_inject_styles__$g, __vue_script__$f, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$g = {
    props: {
      active: {
        type: Boolean,
        required: true
      }
    },
    created: function created() {
      document.addEventListener('keydown', this.onEscape);
    },
    beforeDestroy: function beforeDestroy() {
      document.removeEventListener('keydown', this.onEscape);
    },
    methods: {
      onEscape: function onEscape(event) {
        if (this.active && event.keyCode === 27) {
          this.$emit('escape');
        }
      }
    }
  };

  /* script */
  var __vue_script__$g = script$g;
  /* template */

  var __vue_render__$h = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("transition", {
      attrs: {
        name: "fade"
      }
    }, [_vm.active ? _c("div", {
      staticClass: "modal active"
    }, [_c("div", {
      staticClass: "modal-background",
      on: {
        click: function click($event) {
          return _vm.$emit("close");
        }
      }
    }), _vm._v(" "), _vm._t("default")], 2) : _vm._e()]);
  };

  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;
  /* style */

  var __vue_inject_styles__$h = undefined;
  /* scoped */

  var __vue_scope_id__$h = undefined;
  /* module identifier */

  var __vue_module_identifier__$h = undefined;
  /* functional template */

  var __vue_is_functional_template__$h = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$h = normalizeComponent$1({
    render: __vue_render__$h,
    staticRenderFns: __vue_staticRenderFns__$h
  }, __vue_inject_styles__$h, __vue_script__$g, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$h = {
    props: {
      closeable: {
        type: Boolean,
        default: false
      },
      isSuccess: {
        type: Boolean,
        default: false
      },
      isError: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      notificationClass: function notificationClass() {
        if (this.isSuccess) {
          return 'bg-green-500 text-white';
        }

        if (this.isError) {
          return 'bg-red-500 text-white';
        }

        return 'bg-blue-300';
      }
    }
  };

  /* script */
  var __vue_script__$h = script$h;
  /* template */

  var __vue_render__$i = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("transition", {
      attrs: {
        name: "notification"
      }
    }, [_c("div", {
      staticClass: "p-6",
      class: _vm.notificationClass
    }, [_vm.closeable ? _c("a", {
      staticClass: "delete",
      on: {
        click: function click($event) {
          return _vm.$emit("close");
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)]);
  };

  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;
  /* style */

  var __vue_inject_styles__$i = undefined;
  /* scoped */

  var __vue_scope_id__$i = undefined;
  /* module identifier */

  var __vue_module_identifier__$i = undefined;
  /* functional template */

  var __vue_is_functional_template__$i = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$i = normalizeComponent$1({
    render: __vue_render__$i,
    staticRenderFns: __vue_staticRenderFns__$i
  }, __vue_inject_styles__$i, __vue_script__$h, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$i = {
    props: {
      options: {
        type: Object,
        default: null
      },
      visiblePages: {
        type: Number,
        default: 3
      },
      seperator: {
        type: String,
        default: '...'
      }
    },
    computed: {
      isVisible: function isVisible() {
        return this.options && this.options.last_page > 1;
      },
      currentPage: function currentPage() {
        return this.options ? this.options.current_page - 1 : 0;
      },
      previousPage: function previousPage() {
        return this.options.current_page - 1;
      },
      nextPage: function nextPage() {
        return this.options.current_page + 1;
      },
      hasPreviousPage: function hasPreviousPage() {
        return this.previousPage > 0;
      },
      hasNextPage: function hasNextPage() {
        return this.nextPage <= this.options.last_page;
      },
      pages: function pages() {
        var pages;

        if (this.filteredPages) {
          pages = [this.filteredPages[0] - 1 === 1 ? 1 : this.seperator].concat(_toConsumableArray(this.filteredPages), [this.filteredPages[this.filteredPages.length - 1] + 1 === this.options.last_page - 2 ? this.options.last_page - 2 : this.seperator]);
        } else {
          pages = _toConsumableArray(Array(this.options.last_page - 2).keys()).map(function (page) {
            return page + 1;
          });
        }

        return [0].concat(_toConsumableArray(pages), [this.options.last_page - 1]);
      },
      filteredPages: function filteredPages() {
        var _this = this;

        var toFilterPages = _toConsumableArray(Array(this.options.last_page).keys()).slice(2, -2);

        if (this.visiblePages > toFilterPages.length) {
          return null;
        }

        var diff = this.visiblePages / 2;
        var diffFirst = this.currentPage - toFilterPages[0];
        var diffLast = this.currentPage - toFilterPages[toFilterPages.length - 1];

        if (diffFirst < diff) {
          return toFilterPages.slice(0, this.visiblePages);
        }

        if (diffLast >= -diff) {
          return toFilterPages.slice(-this.visiblePages);
        }

        return toFilterPages.filter(function (page) {
          var diffPage = _this.currentPage - page;
          return diffPage < 0 ? Math.abs(diffPage) <= diff : diffPage < diff;
        });
      }
    },
    methods: {
      changePage: function changePage(page) {
        if (page < 1 || page > this.options.last_page || page === this.options.current_page) {
          return;
        }

        this.options.current_page = page;
        this.$emit('change-page', page);
      }
    }
  };

  /* script */
  var __vue_script__$i = script$i;
  /* template */

  var __vue_render__$j = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.isVisible ? _c("nav", {
      staticClass: "pagination is-centered"
    }, [_c("a", {
      staticClass: "pagination-previous",
      attrs: {
        disabled: !_vm.hasPreviousPage
      },
      on: {
        click: function click($event) {
          return _vm.changePage(_vm.previousPage);
        }
      }
    }, [_vm._v("\n        Prev\n    ")]), _vm._v(" "), _c("a", {
      staticClass: "pagination-next",
      attrs: {
        disabled: !_vm.hasNextPage
      },
      on: {
        click: function click($event) {
          return _vm.changePage(_vm.nextPage);
        }
      }
    }, [_vm._v("\n        Next\n    ")]), _vm._v(" "), _c("ul", {
      staticClass: "pagination-list"
    }, _vm._l(_vm.pages, function (page) {
      return _c("li", {
        key: page
      }, [page === _vm.seperator ? _c("span", {
        staticClass: "pagination-ellipsis"
      }, [_vm._v("\n                " + _vm._s(_vm.seperator) + "\n            ")]) : _c("a", {
        staticClass: "pagination-link",
        class: {
          current: page === _vm.currentPage
        },
        on: {
          click: function click($event) {
            return _vm.changePage(page + 1);
          }
        }
      }, [_vm._v("\n                " + _vm._s(page + 1) + "\n            ")])]);
    }), 0)]) : _vm._e();
  };

  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;
  /* style */

  var __vue_inject_styles__$j = undefined;
  /* scoped */

  var __vue_scope_id__$j = undefined;
  /* module identifier */

  var __vue_module_identifier__$j = undefined;
  /* functional template */

  var __vue_is_functional_template__$j = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$j = normalizeComponent$1({
    render: __vue_render__$j,
    staticRenderFns: __vue_staticRenderFns__$j
  }, __vue_inject_styles__$j, __vue_script__$i, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$j = {
    props: {
      placeholder: {
        type: String,
        default: 'Search'
      },
      value: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        newValue: this.value
      };
    },
    methods: {
      submit: function submit() {
        this.$emit('submit', this.newValue);
      }
    }
  };

  /* script */
  var __vue_script__$j = script$j;
  /* template */

  var __vue_render__$k = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("form", {
      on: {
        submit: function submit($event) {
          $event.preventDefault();
          return _vm.submit($event);
        }
      }
    }, [_c("label", {
      staticClass: "hidden",
      attrs: {
        for: "search"
      }
    }, [_vm._v("\n        Search\n    ")]), _vm._v(" "), _c("div", {
      staticClass: "field addons"
    }, [_c("div", {
      staticClass: "control flex-grow"
    }, [_c("o-input", {
      attrs: {
        id: "search",
        type: "search",
        placeholder: _vm.placeholder
      },
      model: {
        value: _vm.newValue,
        callback: function callback($$v) {
          _vm.newValue = $$v;
        },
        expression: "newValue"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "control"
    }, [_c("button", {
      staticClass: "button"
    }, [_c("span", {
      staticClass: "icon"
    }, [_c("icon", {
      attrs: {
        icon: "search"
      }
    })], 1)])])])]);
  };

  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;
  /* style */

  var __vue_inject_styles__$k = undefined;
  /* scoped */

  var __vue_scope_id__$k = undefined;
  /* module identifier */

  var __vue_module_identifier__$k = undefined;
  /* functional template */

  var __vue_is_functional_template__$k = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$k = normalizeComponent$1({
    render: __vue_render__$k,
    staticRenderFns: __vue_staticRenderFns__$k
  }, __vue_inject_styles__$k, __vue_script__$j, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$k = {
    data: function data() {
      return {
        tabs: []
      };
    },
    computed: {
      firstTab: function firstTab() {
        return this.tabs[0];
      }
    },
    created: function created() {
      this.tabs = this.$children;
    },
    mounted: function mounted() {
      var _this = this;

      window.addEventListener('hashchange', function () {
        return _this.selectTab(window.location.hash);
      });

      if (this.findTab(window.location.hash)) {
        this.selectTab(window.location.hash);
        return;
      }

      if (this.tabs.length) {
        this.selectTab(this.firstTab.hash);
      }
    },
    methods: {
      findTab: function findTab(hash) {
        return this.tabs.find(function (tab) {
          return tab.hash === hash;
        });
      },
      selectTab: function selectTab(selectedTabHash) {
        var selectedTab = this.findTab(selectedTabHash);

        if (selectedTab) {
          this.tabs.forEach(function (tab) {
            tab.isActive = tab.hash === selectedTab.hash;
          });
          this.activeTabHash = selectedTab.hash;
          var firstTabIsActive = this.activeTabHash === this.firstTab.hash;

          if (firstTabIsActive && window.location.hash) {
            this.$router.push({
              hash: null
            });
          } else if (!firstTabIsActive && this.activeTabHash !== window.location.hash) {
            this.$router.push({
              hash: this.activeTabHash
            });
          }
        }
      }
    }
  };

  /* script */
  var __vue_script__$k = script$k;
  /* template */

  var __vue_render__$l = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", [_vm._t("tabs", [_c("div", {
      staticClass: "flex justify-end mb-6"
    }, [_c("div", {
      staticClass: "field addons"
    }, _vm._l(_vm.tabs, function (tab, i) {
      return _c("div", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: tab.isVisible,
          expression: "tab.isVisible"
        }],
        key: i,
        staticClass: "control w-1/2"
      }, [_c("a", {
        staticClass: "button w-full",
        class: {
          blue: tab.isActive
        },
        on: {
          click: function click($event) {
            return _vm.selectTab(tab.hash);
          }
        }
      }, [_vm._v("\n                        " + _vm._s(tab.name) + "\n                    ")])]);
    }), 0)])], null, _vm.tabs), _vm._v(" "), _vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$l = [];
  __vue_render__$l._withStripped = true;
  /* style */

  var __vue_inject_styles__$l = undefined;
  /* scoped */

  var __vue_scope_id__$l = undefined;
  /* module identifier */

  var __vue_module_identifier__$l = undefined;
  /* functional template */

  var __vue_is_functional_template__$l = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$l = normalizeComponent$1({
    render: __vue_render__$l,
    staticRenderFns: __vue_staticRenderFns__$l
  }, __vue_inject_styles__$l, __vue_script__$k, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  var script$l = {
    props: {
      id: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      }
    },
    data: function data() {
      return {
        isActive: false,
        isVisible: true
      };
    },
    computed: {
      computedId: function computedId() {
        if (this.id) {
          return this.id;
        }

        return "tab-".concat(this.name.toLowerCase().replace(/ /g, '-'));
      },
      hash: function hash() {
        return '#' + this.computedId;
      }
    }
  };

  /* script */
  var __vue_script__$l = script$l;
  /* template */

  var __vue_render__$m = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("section", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.isActive,
        expression: "isActive"
      }],
      attrs: {
        id: _vm.computedId
      }
    }, [_vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$m = [];
  __vue_render__$m._withStripped = true;
  /* style */

  var __vue_inject_styles__$m = undefined;
  /* scoped */

  var __vue_scope_id__$m = undefined;
  /* module identifier */

  var __vue_module_identifier__$m = undefined;
  /* functional template */

  var __vue_is_functional_template__$m = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$m = normalizeComponent$1({
    render: __vue_render__$m,
    staticRenderFns: __vue_staticRenderFns__$m
  }, __vue_inject_styles__$m, __vue_script__$l, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$m = {
    props: {
      column: {
        type: String,
        required: true
      },
      value: {
        type: String,
        default: null
      }
    },
    data: function data() {
      return {
        direction: null
      };
    },
    computed: {
      isActive: function isActive() {
        var column = this.value && this.value.charAt(0) === '-' ? this.value.substr(1) : this.value;
        return column === this.column;
      },
      icon: function icon() {
        if (!this.direction) {
          return 'sort';
        }

        return this.direction === 'desc' ? 'sort-up' : 'sort-down';
      }
    },
    watch: {
      value: function value() {
        if (!this.isActive) {
          this.direction = null;
        }
      }
    },
    created: function created() {
      this.direction = this.getDefaultDirection();
    },
    methods: {
      getDefaultDirection: function getDefaultDirection() {
        if (!this.isActive) {
          return null;
        }

        return this.value.charAt(0) === '-' ? 'desc' : 'asc';
      },
      sort: function sort() {
        var sort = null;

        if (!this.direction) {
          this.direction = 'asc';
          sort = this.column;
        } else if (this.direction == 'asc') {
          this.direction = 'desc';
          sort = '-' + this.column;
        } else if (this.direction == 'desc') {
          this.direction = null;
          sort = null;
        }

        this.$emit('input', sort);
      }
    }
  };

  /* script */
  var __vue_script__$m = script$m;
  /* template */

  var __vue_render__$n = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("th", [_c("a", {
      staticClass: "inline-flex items-center",
      on: {
        click: _vm.sort
      }
    }, [_c("span", {
      staticClass: "select-none"
    }, [_vm._t("default")], 2), _vm._v(" "), _c("span", {
      staticClass: "icon ml-4",
      class: {
        "opacity-50": !_vm.direction
      }
    }, [_c("icon", {
      attrs: {
        icon: _vm.icon
      }
    })], 1)])]);
  };

  var __vue_staticRenderFns__$n = [];
  __vue_render__$n._withStripped = true;
  /* style */

  var __vue_inject_styles__$n = undefined;
  /* scoped */

  var __vue_scope_id__$n = undefined;
  /* module identifier */

  var __vue_module_identifier__$n = undefined;
  /* functional template */

  var __vue_is_functional_template__$n = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$n = normalizeComponent$1({
    render: __vue_render__$n,
    staticRenderFns: __vue_staticRenderFns__$n
  }, __vue_inject_styles__$n, __vue_script__$m, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, false, undefined, undefined, undefined);

  var formHelpersMixin = {
    methods: {
      accessItem: function accessItem() {
        return this.item;
      },
      itemAttributeExists: function itemAttributeExists(attribute) {
        var item = this.accessItem();
        return item && item.hasOwnProperty(attribute);
      },
      getItemAttribute: function getItemAttribute(attribute) {
        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var item = this.accessItem();

        if (this.itemAttributeExists(attribute)) {
          return item[attribute];
        }

        return defaultValue;
      }
    }
  };
  var form = {
    mixins: [formHelpersMixin],
    props: {
      item: {
        type: Object,
        default: null
      }
    },
    data: function data() {
      return {
        errors: {},
        scrollToTop: true,
        isProcessing: false
      };
    },
    computed: {
      anyErrors: function anyErrors() {
        return Object.keys(this.errors).length > 0;
      },
      isEditing: function isEditing() {
        return !!this.item;
      }
    },
    methods: {
      submit: function submit() {
        var _this = this;

        this.errors = {};
        this.isProcessing = true;
        this.save().then(function (response) {
          _this.onSuccess(response);
        }).catch(function (error) {
          if (error.response.status === 422) {
            _this.errors = error.response.data.errors;
          } else {
            _this.errors = {
              error: ['An unexpected error occured.']
            };
          }

          _this.onError(error);
        }).finally(function () {
          _this.isProcessing = false;

          if (_this.scrollToTop) {
            _this.$el.scrollIntoView({
              block: 'start',
              inline: 'start',
              behavior: 'smooth'
            });
          }

          _this.onFinally();
        });
      },
      onSuccess: function onSuccess() {//
      },
      onError: function onError() {//
      },
      onFinally: function onFinally() {//
      }
    }
  };

  var listing = {
    filters: {
      truncate: function truncate(string) {
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

        if (string.length > length) {
          return string.substring(0, length).replace(/[^A-Za-z0-9]+$/g, '...');
        }

        return string;
      }
    },
    data: function data() {
      return {
        filters: {},
        initialFilters: {}
      };
    },
    computed: {
      routeQuery: function routeQuery() {
        return this.$route.query;
      },
      query: function query() {
        var _this = this;

        var query = {};
        Object.keys(this.filters).forEach(function (key) {
          if (_this.hasValue(_this.routeQuery, key)) {
            query[key] = _this.routeQuery[key];
          }
        });
        return query;
      }
    },
    watch: {
      query: function query(_query) {
        this.setFilters(_query);
        this.onFilter(_query);
      },
      filters: {
        handler: function handler(filters) {
          var _this2 = this;

          var query = {};
          Object.keys(filters).forEach(function (key) {
            if (_this2.hasValue(filters, key)) {
              query[key] = filters[key];
            }
          });

          if (!lodash.isEqual(query, this.routeQuery)) {
            this.$router.push({
              query: query
            });
          }
        },
        deep: true
      }
    },
    created: function created() {
      this.initialFilters = Object.assign({}, this.filters);
      this.setFilters(this.query);
    },
    methods: {
      hasValue: function hasValue(object, key) {
        return object[key] !== '' && object[key] !== null && object[key] !== undefined;
      },
      setFilters: function setFilters(query) {
        var _this3 = this;

        Object.keys(this.filters).forEach(function (key) {
          if (query.hasOwnProperty(key) && _this3.hasValue(query, key)) {
            _this3.filters[key] = query[key];
          } else {
            _this3.filters[key] = _this3.initialFilters[key];
          }
        });
      },
      applyFilter: function applyFilter(filter, value) {
        if (this.filters.hasOwnProperty('page')) {
          this.filters.page = null;
        }

        this.filters[filter] = value;
      },
      onFilter: function onFilter() {//
      }
    }
  };

  var sortable = {
    methods: {
      findItemIndex: function findItemIndex(items, itemId) {
        return items.findIndex(function (_ref) {
          var id = _ref.id;
          return itemId === id;
        });
      },
      canMoveItemUp: function canMoveItemUp(items, itemId) {
        var index = this.findItemIndex(items, itemId);
        return index > 0;
      },
      canMoveItemDown: function canMoveItemDown(items, itemId) {
        var index = this.findItemIndex(items, itemId);
        return index + 1 < items.length;
      },
      moveItemUp: function moveItemUp(items, itemId) {
        if (this.canMoveItemUp(items, itemId)) {
          var index = this.findItemIndex(items, itemId);
          this.move(itemId, index, index - 1);
        }
      },
      moveItemDown: function moveItemDown(items, itemId) {
        if (this.canMoveItemDown(items, itemId)) {
          var index = this.findItemIndex(items, itemId);
          this.move(itemId, index, index + 1);
        }
      },
      moveItem: function moveItem(items, from, to) {
        var newItems = _toConsumableArray(items);

        newItems.splice(to, 0, newItems.splice(from, 1)[0]);
        return newItems;
      },
      getMoveDirection: function getMoveDirection(from, to) {
        return from > to ? 'up' : 'down';
      }
    }
  };

  function install$1(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (options.hasOwnProperty('store')) {
      options.store.registerModule('alert', alertStore);
      options.store.registerModule('confirmation', confirmationStore);
      options.store.registerModule('dashboard', dashboardStore);
      options.store.registerModule('loader', loaderStore); // Mixins

      Vue.mixin({
        computed: _objectSpread2({}, vuex.mapGetters({
          isLoading: 'loader/isLoading'
        })),
        methods: _objectSpread2({}, vuex.mapActions({
          startLoading: 'loader/start',
          stopLoading: 'loader/stop',
          openAlert: 'alert/open',
          setTitle: 'dashboard/setTitle',
          openConfirmation: 'confirmation/open'
        }))
      });
    } // Register Plugins


    Vue.use(install, {
      componentName: 'o-select'
    }); // Register icons

    Icons.register(); // Register components

    Vue.component('icon', FontAwesomeIcon); // Register form components

    Vue.component('o-errors', __vue_component__$2);
    Vue.component('o-checkbox', __vue_component__$3);
    Vue.component('o-input', __vue_component__$4);
    Vue.component('o-form-field', __vue_component__$5);
    Vue.component('o-meta-fields', __vue_component__$6); // Register layout components

    Vue.component('o-dashboard-layout', __vue_component__$a);
    Vue.component('o-side-nav-item', __vue_component__$b);
    Vue.component('o-side-sub-nav-item', __vue_component__$c); // Register UI components

    Vue.component('o-alert', __vue_component__$d);
    Vue.component('o-confirmation', __vue_component__$e);
    Vue.component('o-dropdown', __vue_component__$f);
    Vue.component('o-loader', __vue_component__$g);
    Vue.component('o-modal', __vue_component__$h);
    Vue.component('o-notification', __vue_component__$i);
    Vue.component('o-pagination', __vue_component__$j);
    Vue.component('o-search', __vue_component__$k);
    Vue.component('o-tabs', __vue_component__$l);
    Vue.component('o-tab', __vue_component__$m);
    Vue.component('o-th-sort', __vue_component__$n);
  }

  exports.default = install$1;
  exports.formHelpersMixin = formHelpersMixin;
  exports.formMixin = form;
  exports.listingMixin = listing;
  exports.sortableMixin = sortable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
