import { mapGetters, mapActions } from 'vuex';
import VueSelect from 'vue-multiselect';

function _typeof(obj) {
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
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
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

var Library =
/*#__PURE__*/
function () {
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

var faAngleDown={prefix:'fas',iconName:'angle-down',icon:[320,512,[],"f107","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]};var faAngleRight={prefix:'fas',iconName:'angle-right',icon:[256,512,[],"f105","M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"]};var faAngleUp={prefix:'fas',iconName:'angle-up',icon:[320,512,[],"f106","M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"]};var faCalendarAlt={prefix:'fas',iconName:'calendar-alt',icon:[448,512,[],"f073","M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"]};var faCog={prefix:'fas',iconName:'cog',icon:[512,512,[],"f013","M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]};var faPencilAlt={prefix:'fas',iconName:'pencil-alt',icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]};var faSearch={prefix:'fas',iconName:'search',icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]};var faSignOutAlt={prefix:'fas',iconName:'sign-out-alt',icon:[512,512,[],"f2f5","M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"]};var faSort={prefix:'fas',iconName:'sort',icon:[320,512,[],"f0dc","M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"]};var faSortDown={prefix:'fas',iconName:'sort-down',icon:[320,512,[],"f0dd","M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"]};var faSortUp={prefix:'fas',iconName:'sort-up',icon:[320,512,[],"f0de","M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"]};var faSpinner={prefix:'fas',iconName:'spinner',icon:[512,512,[],"f110","M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"]};var faTrashAlt={prefix:'fas',iconName:'trash-alt',icon:[448,512,[],"f2ed","M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"]};

var Icons = {
  register: function register() {
    library.add(faAngleDown, faAngleRight, faAngleUp, faCalendarAlt, faCog, faPencilAlt, faSignOutAlt, faSearch, faSort, faSortDown, faSortUp, faSpinner, faTrashAlt);
  }
};

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
  var regexp = makeRegexp(pattern, options);
  var matches = regexp.test(input);
  return regexp.negated ? !matches : matches;
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

var state$4 = {
  data: null,
  isLoading: false
};
var getters$4 = {
  data: function data(state) {
    return state.data;
  }
};
var mutations$4 = {
  startLoading: function startLoading(state) {
    state.isLoading = true;
  },
  stopLoading: function stopLoading(state) {
    state.isLoading = false;
  },
  set: function set(state, data) {
    state.data = data;
  },
  update: function update(state, data) {
    state.data = _objectSpread2({}, state.data, {}, data);
  }
};
var actions$4 = {
  fetch: function fetch(_ref) {
    var commit = _ref.commit,
        state = _ref.state;

    if (!state.data && !state.isLoading) {
      commit('startLoading');
      return axios.get('/admin/api/user').then(function (response) {
        commit('set', response.data.data);
        commit('stopLoading');
      });
    }
  },
  update: function update(_ref2, data) {
    var commit = _ref2.commit;
    commit('update', data);
  }
};
var userStore = {
  namespaced: true,
  state: state$4,
  getters: getters$4,
  mutations: mutations$4,
  actions: actions$4
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
var script = {
  props: {
    errors: {
      type: Object,
      default: function _default() {}
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
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
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

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
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

var Errors = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

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
var script$1 = {
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

var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
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
      change: function change($event) {
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
      }
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
      change: function change($event) {
        _vm.newValue = _vm.checkedValue;
      }
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
  }, [_vm._v(_vm._s(_vm.label))])]);
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

var Checkbox = normalizeComponent_1({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

//
//
//
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
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
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

var Input = normalizeComponent_1({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
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
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
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
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "control"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm.$slots.hasOwnProperty("help") ? _c("div", {
    staticClass: "help"
  }, [_vm._t("help")], 2) : _vm._e()]);
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

var Field = normalizeComponent_1({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

//
var script$4 = {
  mixins: [inputMixin]
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "select w-full"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.newValue,
      expression: "newValue"
    }],
    attrs: {
      id: _vm.id,
      required: _vm.required
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.newValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_vm._t("default")], 2)]);
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

var Select = normalizeComponent_1({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, undefined, undefined);

//
var script$5 = {
  components: {
    VueSelect: VueSelect
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      required: true
    },
    optionValue: {
      type: String,
      default: 'value'
    },
    optionLabel: {
      type: String,
      default: 'label'
    }
  },
  computed: {
    newValue: function newValue() {
      var _this = this;

      if (!this.options.length) {
        return [];
      }

      var optionValues = this.options.map(function (option) {
        return option[_this.optionValue];
      });
      return this.value.filter(function (value) {
        return optionValues.includes(value);
      });
    }
  },
  methods: {
    label: function label(value) {
      var _this2 = this;

      var option = this.options.find(function (option) {
        return option[_this2.optionValue] === value;
      });
      return option ? option[this.optionLabel] : false;
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
    staticClass: "select w-full multiselect"
  }, [_c("vue-select", {
    attrs: {
      value: _vm.newValue,
      options: _vm.options.map(function (option) {
        return option[_vm.optionValue];
      }),
      multiple: true,
      "custom-label": _vm.label
    },
    on: {
      input: function input(value) {
        return _vm.$emit("input", value);
      }
    }
  })], 1);
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

var MultiSelect = normalizeComponent_1({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        if (item) {
          this.form = {
            title: item.title,
            description: item.description,
            og_title: item.og_title,
            og_description: item.og_description,
            og_image_id: item.og_image ? item.og_image.id : null,
            additional_tags: item.custom_tags
          };
          this.og_image = item.og_image;
        }
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
      preview: "",
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
      input: "meta_custom_tags",
      label: "Custom Tags"
    }
  }, [_c("o-input", {
    attrs: {
      id: "meta_custom_tags",
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

var MetaFields = normalizeComponent_1({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, undefined, undefined);

/* script */

/* template */
var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("svg", {
    staticClass: "inline-flex max-w-full h-auto",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "490",
      viewBox: "0 0 490 403"
    }
  }, [_c("defs", [_c("linearGradient", {
    attrs: {
      id: "a",
      x1: ".5",
      x2: ".5",
      y2: "1",
      gradientUnits: "objectBoundingBox"
    }
  }, [_c("stop", {
    attrs: {
      offset: "0",
      "stop-color": "#9b9b9b"
    }
  }), _vm._v(" "), _c("stop", {
    attrs: {
      offset: "1",
      "stop-color": "#a9a9a9"
    }
  })], 1)], 1), _vm._v(" "), _c("path", {
    attrs: {
      d: "M266.715 401.254s-65.363-71.139 2.3-128.4c0 0 6.185-5.826 17.571-4.424s128.862 20.574 188.792-37.115c0 0 14.441-11.541 13.48-27.879s-15.413-26.223-27.694-28.3-89.028-7.765-145-57.043c0 0-1.849-1.913 0-5.392s6.2-25.024-13.343-51.3S245.659 0 169.929 0 0 53.013 0 184s99.344 178.964 104.865 182.493 77.329 45.471 161.85 34.761z",
      fill: "#393939"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M409.09 231.351h-1.18c-24.533-.107-46.56-5.258-69.879-10.713-21.512-5.034-43.756-10.236-70.449-12.244a54.225 54.225 0 0 0 13.961-17.75 53.376 53.376 0 0 0 5.574-21.511c.423-9.4-1.569-19.27-5.921-29.336-.01-.017-.967-1.743-.3-2.984a3.028 3.028 0 0 1 2.668-1.268l.48-.033c4.4-.3 7.3-.5 11.848-3.6 2.112-1.431 3.419-2.018 4.511-2.018 1.126 0 1.968.625 3.241 1.57.2.145.4.3.617.455l.067.049a340.442 340.442 0 0 0 37.617 23.345 314.334 314.334 0 0 0 36.188 16.7 212.053 212.053 0 0 0 41.758 11.588c53.815 8.648 53.5 11.373 52.348 21.514-.086.755-.175 1.534-.248 2.366-.588 6.694-5.643 12.381-14.62 16.449-10.87 4.923-27.114 7.42-48.281 7.421zm-95.391-70.557a7.535 7.535 0 0 0-5.022 2.011c-2.1 1.83-3.011 3.714-2.7 5.6.711 4.357 7.739 7.318 7.81 7.348a30.5 30.5 0 0 0 11.2 2.476 18.924 18.924 0 0 0 1.986-.1c1.53-.161 2.466-.679 2.783-1.538.813-2.207-2.747-5.992-2.783-6.03-.071-.102-6.463-9.767-13.274-9.767z",
      fill: "#8b8b8b"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M276.391 243.626c7.455 14.8 82.932 24.335 146.147 3.8 0 0 2.98-3.055 0-3.8s-23.641 3.273-67.83-7.557-63.38-12.806-76.323-13.224-9.449 5.979-1.994 20.781z",
      fill: "#7e7e7e"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M278.808 1132.409c2.07.9 81.377 43.952 81.377 43.952s51.109 29.8 95.827 16.121 69.742-30.519 69.742-30.519-8.755 13.511-23.287 21-29.945 27.821-30.668 37.619 3.208-5.007 21.176-16.709 14.31-6.888 14.239-4.821.645 19.142 6.669 26.681 3.81 6.569 1.66 8.276-30.008 23.967-35.331 59.81 9.756 65.22 9.756 65.22.534 1.5-2.028 1.277-224.925-13.457-211.84-225.076c0-.001.639-3.74 2.708-2.831z",
      transform: "translate(-257.832 -974.405)",
      fill: "url(#a)"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M152.677 368.291a250.6 250.6 0 0 1-48.99-24.393 205.914 205.914 0 0 1-23.623-17.854 184.148 184.148 0 0 1-21.455-22.271 174.636 174.636 0 0 1-18.1-27.172 181.145 181.145 0 0 1-13.545-32.558 208.462 208.462 0 0 1-7.811-38.427 263.719 263.719 0 0 1-.884-44.782c.005-.03.527-2.971 2.086-2.971a1.558 1.558 0 0 1 .622.141c1.108.484 24.64 13.206 44.195 23.794a158.613 158.613 0 0 0-.264 28.437 196.184 196.184 0 0 0 8.8 44.7 222.226 222.226 0 0 0 26.408 54.755 259.726 259.726 0 0 0 22.48 29.209 304.769 304.769 0 0 0 30.086 29.393z",
      fill: "#7e7e7e"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M272.548 166.383s-3.468-28.768-17.326-28.153-16.7 15.224-38.084 19.226-35.29-8.417-43.792-23.676-19.261-25.88-42.867-21.6 5.685-11.922 23.49-14.854 30.692-2.573 52.247 6.753 72.874 26.449 85.889 6.493-11.423-49.948-31.033-64.268-42.922-28.464-87.726-28.583-125.858 22.083-150.65 117.45c0 0 70.667 42.027 107.784 57.046s74.389 17.554 142.068-25.834z",
      fill: "#c3c3c3"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M222.796 239.903a71.817 71.817 0 0 1 25.367-18.27s1.865-.518 1.556 2.338-.625 17.685 9.792 32.4c0 0 1.576.913-.693 2.688s-11.944 9.87-17.839 17.584c0-.004-17.29-18.791-18.183-36.74z",
      fill: "#7e7e7e"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M210.479 142.511c-13.72-.181-21.934-6.95-24.462-19.317-.9-4.333 1.173-6.95 5.6-7.041 5.145-.09 7.763 2.076 8.846 7.131 1.173 5.506 3.43 10.2 9.478 11.915 5.867 1.715 10.29-.451 13.811-4.965 1.535-1.986 2.437-1.083 3.25.361 1.444 2.708.361 4.965-1.715 6.77a20.432 20.432 0 0 1-14.808 5.146z",
      fill: "#fff"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M279.139 117.233c6.048-5.416 8.214-11.915 6.5-20.129-3.7-18.053-14.081-31.593-27.892-42.786-21.394-17.511-46.487-26.989-73.208-32.676a171.027 171.027 0 0 0-21.3-3.25c48.653-3.34 89.9 11.464 121.045 50.188 7.131 8.936 12.457 19.046 13.179 30.961.722 9.117-9.839 19.407-18.324 17.692z",
      fill: "#e8e8e8"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M371.84 249.591c-9.929 2.347-20.039 1.986-29.968 1.174-9.568-.812-19.407-1.444-28.524-4.965a53.081 53.081 0 0 1-6.5-2.979c-1.535-.812-2.618-2.257-1.986-4.062.541-1.535 1.986-1.986 3.611-2.167 6.679-.722 13.179.9 19.5 2.257 14.71 3.163 29.244 7.131 43.867 10.742z",
      fill: "#8b8b8b"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M329.929 176.201a28.576 28.576 0 0 0-10.658-12.42c-5.813-3.788-9.161-3.171-13.124 2.554a8.987 8.987 0 0 1 10.658-11c5.549.969 13.829 13.021 14.269 18.747a1.8 1.8 0 0 1-1.145 2.119z",
      fill: "#7e7e7e"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M22.695 135.113l44.024 25.058s5.2-88.939 69.618-137.629c0-.001-86.884 11.128-113.642 112.571z",
      fill: "#969696"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M209.697 158.215c-6.86 2.889-13.689 1.535-20.639 0-12.818-2.888-22.024-10.922-29.787-21.032-6.048-7.943-14.109-19.169-22.775-24.856-1.839-1.039-1.7-1.222 0-1.367a35.093 35.093 0 0 1 31.8 14.037c4.423 6.228 7.582 13.088 12.547 19.046 6.86 8.214 15.209 12.3 25.228 13.566 1.084.091 3.626.606 3.626.606z",
      fill: "#969696"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M65.801 160.035s.835-46.126 27.609-87.05c0 0-14.884 64.081-7.393 97.913h-14.3z",
      fill: "#393939"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M87.811 194.64s-7.016 40.042 20.944 83.626c0 0-13.853-45.963 5.7-69.823z",
      fill: "#7e7e7e"
    }
  }), _vm._v(" "), _c("path", {
    attrs: {
      d: "M451.302 189.207s23.065 1.384 22.938 15.687-8.436 16.7-26.22 22.341c0 0 19.989-10.768 19.763-22.658s-16.481-15.37-16.481-15.37z",
      fill: "#bcbcbc"
    }
  })]);
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

var Logo = normalizeComponent_1({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, {}, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, undefined, undefined);

var script$7 = {
  computed: _objectSpread2({}, mapGetters({
    title: 'dashboard/title'
  }))
};

/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("header", {
    staticClass: "flex justify-between items-center bg-white border-b border-grey-500 px-8 h-24"
  }, [_c("div", [_vm.title ? _c("h1", {
    staticClass: "title"
  }, [_vm._v("\n            " + _vm._s(_vm.title) + "\n        ")]) : _vm._e()]), _vm._v(" "), _c("div", [_vm._t("default")], 2)]);
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

var MainHeader = normalizeComponent_1({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$7, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, undefined, undefined);

var script$8 = {
  props: {
    avatar: {
      type: String,
      default: '/back/images/avatar.png'
    }
  },
  computed: _objectSpread2({}, mapGetters({
    user: 'user/data'
  }), {
    userIsSet: function userIsSet() {
      return this.user;
    },
    imageSrc: function imageSrc() {
      return this.user && this.user.avatar ? this.user.avatar : this.avatar;
    }
  })
};

/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    staticClass: "side-header px-10 h-24"
  }, [_vm.userIsSet ? _c("div", {
    staticClass: "flex items-center"
  }, [_c("div", {
    staticClass: "flex-no-shrink mr-4"
  }, [_c("figure", {
    staticClass: "image w-12 h-12"
  }, [_c("img", {
    staticClass: "rounded-full",
    attrs: {
      src: _vm.imageSrc,
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
        name: "users.edit",
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
  }, [_vm._v("Your details")])])], 1)]) : _vm._e()]);
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

var SideHeader = normalizeComponent_1({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$8, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, undefined, undefined);

/* script */

/* template */
var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("ul", {
    staticClass: "side-nav list-reset"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$a = [];
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

var SideNav = normalizeComponent_1({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, {}, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, undefined, undefined);

var script$9 = {
  components: {
    Logo: Logo,
    MainHeader: MainHeader,
    SideHeader: SideHeader,
    SideNav: SideNav
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: undefined
    }
  },
  computed: _objectSpread2({}, mapGetters({
    sideIsVisible: 'dashboard/sideIsVisible'
  })),
  methods: _objectSpread2({}, mapActions({
    toggleSide: 'dashboard/toggleSide'
  }))
};

/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("transition-group", {
    staticClass: "min-h-screen bg-grey-200",
    attrs: {
      tag: "div",
      mode: "out-in",
      name: "dashboard"
    }
  }, [_vm.loading ? _c("div", {
    key: "loader",
    staticClass: "flex min-h-screen items-center justify-center bg-grey-200"
  }, [_c("div", {
    staticClass: "text-center pulse"
  }, [_c("logo", {
    staticClass: "w-16"
  }), _vm._v(" "), _c("div", {
    staticClass: "title text-3xl uppercase"
  }, [_c("strong", [_vm._v("Optimus")])]), _vm._v(" "), _c("div", {
    staticClass: "subtitle text-coral-500"
  }, [_c("i", [_vm._v("loading...")])])], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading,
      expression: "! loading"
    }],
    key: "dashboard",
    staticClass: "dashboard",
    class: {
      "show-side": _vm.sideIsVisible
    }
  }, [_c("transition", {
    attrs: {
      name: "side"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading,
      expression: "! loading"
    }],
    staticClass: "side bg-blue-700"
  }, [_c("a", {
    staticClass: "side-toggle bg-blue-700 lg:hidden",
    on: {
      click: _vm.toggleSide
    }
  }, [_c("span", {
    staticClass: "dots"
  }, [_c("i")])]), _vm._v(" "), _c("side-header", {
    attrs: {
      avatar: _vm.avatar
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "side-content px-10 py-8"
  }, [_c("side-nav", [_vm._t("side-nav")], 2)], 1)], 1)]), _vm._v(" "), _c("transition", {
    attrs: {
      name: "main"
    }
  }, [_c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.loading,
      expression: "! loading"
    }],
    staticClass: "main ml-5 lg:ml-0",
    attrs: {
      id: "main"
    }
  }, [_c("main-header", [_vm._t("header")], 2), _vm._v(" "), _c("router-view")], 1)])], 1)]);
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

var Dashboard = normalizeComponent_1({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$9, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      return meta.hasOwnProperty('section') ? meta.section : this.$route.matched[0].meta.section;
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
    currentSection: function currentSection(section) {
      if (section === this.section) {
        this.subNavIsVisible = true;
      } else {
        this.subNavIsVisible = false;
      }
    }
  },
  created: function created() {
    if (this.currentSection === this.section) {
      this.subNavIsVisible = true;
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

var __vue_render__$c = function __vue_render__() {
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
  }, [_c("span", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c("span", {
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
  }, [_c("span", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c("span", {
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

var SideNavItem = normalizeComponent_1({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$a, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, undefined, undefined);

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

var __vue_render__$d = function __vue_render__() {
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

var SideSubNavItem = normalizeComponent_1({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$b, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, undefined, undefined);

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
  computed: _objectSpread2({}, mapGetters({
    isOpen: 'alert/isOpen'
  })),
  methods: _objectSpread2({}, mapActions({
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

var __vue_render__$e = function __vue_render__() {
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
  }, [_vm._v(_vm._s(_vm.buttonText))])])])]);
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

var Alert = normalizeComponent_1({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$c, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, undefined, undefined);

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
  computed: _objectSpread2({}, mapGetters({
    isOpen: 'confirmation/isOpen',
    item: 'confirmation/item'
  })),
  methods: _objectSpread2({}, mapActions({
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

var __vue_render__$f = function __vue_render__() {
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
  }, [_vm._v(_vm._s(_vm.buttonText))]), _vm._v(" "), _c("a", {
    staticClass: "button",
    on: {
      click: _vm.close
    }
  }, [_vm._v(_vm._s(_vm.buttonCancelText))])])])]);
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

var Confirmation = normalizeComponent_1({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$d, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var __vue_render__$g = function __vue_render__() {
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
    staticClass: "button",
    class: _vm.buttonClass
  }, [_c("span", [_vm._v(_vm._s(_vm.buttonText))]), _vm._v(" "), _c("span", {
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
    staticClass: "dropdown-scroll"
  }, [_c("div", {
    staticClass: "dropdown-content"
  }, [_vm._t("default", [_vm.defaultOption ? _c("a", {
    staticClass: "dropdown-item",
    class: {
      active: !_vm.value
    },
    on: {
      click: function click($event) {
        _vm.newValue = null;
      }
    }
  }, [_vm._v(_vm._s(_vm.placeholder))]) : _vm._e(), _vm._v(" "), _vm._l(_vm.options, function (option) {
    return [_vm._t("option", [_c("a", {
      key: option.value,
      staticClass: "dropdown-item",
      class: {
        active: option.value == _vm.value
      },
      on: {
        click: function click($event) {
          _vm.newValue = option.value;
        }
      }
    }, [_vm._v(_vm._s(option.label))])], {
      option: option
    })];
  })])], 2)])])]);
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

var Dropdown = normalizeComponent_1({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$e, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
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
        } else {
          clearTimeout(this.timeout);
        }
      },
      immediate: true
    }
  }
};

/* script */
var __vue_script__$f = script$f;
/* template */

var __vue_render__$h = function __vue_render__() {
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
    staticClass: "flex items-center justify-center p-8"
  }, [_c("transition", {
    attrs: {
      name: "fade"
    }
  }, [_vm.showLoader ? _c("div", {
    staticClass: "icon"
  }, [_c("icon", {
    attrs: {
      icon: "spinner",
      spin: "",
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

var Loader = normalizeComponent_1({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$f, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, undefined, undefined);

//
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

var __vue_render__$i = function __vue_render__() {
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

var Modal = normalizeComponent_1({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$g, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, undefined, undefined);

//
//
//
//
//
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

var __vue_render__$j = function __vue_render__() {
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

var Notification = normalizeComponent_1({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$h, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var __vue_render__$k = function __vue_render__() {
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
  }, [_vm._v("Prev")]), _vm._v(" "), _c("a", {
    staticClass: "pagination-next",
    attrs: {
      disabled: !_vm.hasNextPage
    },
    on: {
      click: function click($event) {
        return _vm.changePage(_vm.nextPage);
      }
    }
  }, [_vm._v("Next")]), _vm._v(" "), _c("ul", {
    staticClass: "pagination-list"
  }, _vm._l(_vm.pages, function (page) {
    return _c("li", {
      key: page
    }, [page === _vm.seperator ? _c("span", {
      staticClass: "pagination-ellipsis"
    }, [_vm._v(_vm._s(_vm.seperator))]) : _c("a", {
      staticClass: "pagination-link",
      class: {
        current: page === _vm.currentPage
      },
      on: {
        click: function click($event) {
          return _vm.changePage(page + 1);
        }
      }
    }, [_vm._v(_vm._s(page + 1))])]);
  }), 0)]) : _vm._e();
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

var Pagination = normalizeComponent_1({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$i, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var __vue_render__$l = function __vue_render__() {
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
  }, [_vm._v("Search")]), _vm._v(" "), _c("div", {
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

var Search = normalizeComponent_1({
  render: __vue_render__$l,
  staticRenderFns: __vue_staticRenderFns__$l
}, __vue_inject_styles__$l, __vue_script__$j, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, undefined, undefined);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var __vue_render__$m = function __vue_render__() {
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
    }, [_vm._v(_vm._s(tab.name))])]);
  }), 0)])], null, _vm.tabs), _vm._v(" "), _vm._t("default")], 2);
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

var Tabs = normalizeComponent_1({
  render: __vue_render__$m,
  staticRenderFns: __vue_staticRenderFns__$m
}, __vue_inject_styles__$m, __vue_script__$k, __vue_scope_id__$m, __vue_is_functional_template__$m, __vue_module_identifier__$m, undefined, undefined);

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

var __vue_render__$n = function __vue_render__() {
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

var Tab = normalizeComponent_1({
  render: __vue_render__$n,
  staticRenderFns: __vue_staticRenderFns__$n
}, __vue_inject_styles__$n, __vue_script__$l, __vue_scope_id__$n, __vue_is_functional_template__$n, __vue_module_identifier__$n, undefined, undefined);

//
//
//
//
//
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

var __vue_render__$o = function __vue_render__() {
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

var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;
/* style */

var __vue_inject_styles__$o = undefined;
/* scoped */

var __vue_scope_id__$o = undefined;
/* module identifier */

var __vue_module_identifier__$o = undefined;
/* functional template */

var __vue_is_functional_template__$o = false;
/* style inject */

/* style inject SSR */

var ThSort = normalizeComponent_1({
  render: __vue_render__$o,
  staticRenderFns: __vue_staticRenderFns__$o
}, __vue_inject_styles__$o, __vue_script__$m, __vue_scope_id__$o, __vue_is_functional_template__$o, __vue_module_identifier__$o, undefined, undefined);

var form = {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      errors: {},
      scrollTop: true,
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
    getMedia: function getMedia(group) {
      return this.item && this.item[group] ? this.item[group] : [];
    },
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

        if (_this.scrollTop) {
          window.scrollTo(0, 0);
        }

        _this.onError(error);
      }).finally(function () {
        _this.isProcessing = false;

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
        if (_this.routeQuery[key]) {
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
        var query = {};
        Object.keys(filters).forEach(function (key) {
          if (filters[key]) {
            query[key] = filters[key];
          }
        });
        this.$router.push({
          query: query
        });
      },
      deep: true
    }
  },
  created: function created() {
    this.initialFilters = Object.assign({}, this.filters);
    this.setFilters(this.query);
  },
  methods: {
    setFilters: function setFilters(query) {
      var _this2 = this;

      Object.keys(this.filters).forEach(function (key) {
        if (query.hasOwnProperty(key) && query[key]) {
          _this2.filters[key] = query[key];
        } else {
          _this2.filters[key] = _this2.initialFilters[key];
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

function install(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (options.hasOwnProperty('store')) {
    options.store.registerModule('alert', alertStore);
    options.store.registerModule('confirmation', confirmationStore);
    options.store.registerModule('dashboard', dashboardStore);
    options.store.registerModule('loader', loaderStore);
    options.store.registerModule('user', userStore); // Mixins

    Vue.mixin({
      computed: _objectSpread2({}, mapGetters({
        isLoading: 'loader/isLoading'
      })),
      methods: _objectSpread2({}, mapActions({
        startLoading: 'loader/start',
        stopLoading: 'loader/stop',
        openAlert: 'alert/open',
        setTitle: 'dashboard/setTitle',
        openConfirmation: 'confirmation/open'
      }))
    });
  } // Register icons


  Icons.register(); // Register components

  Vue.component('icon', FontAwesomeIcon); // Register form components

  Vue.component('o-errors', Errors);
  Vue.component('o-checkbox', Checkbox);
  Vue.component('o-input', Input);
  Vue.component('o-form-field', Field);
  Vue.component('o-select', Select);
  Vue.component('o-multi-select', MultiSelect);
  Vue.component('o-meta-fields', MetaFields); // Register layout components

  Vue.component('o-dashboard-layout', Dashboard);
  Vue.component('o-side-nav-item', SideNavItem);
  Vue.component('o-side-sub-nav-item', SideSubNavItem); // Register UI components

  Vue.component('o-alert', Alert);
  Vue.component('o-confirmation', Confirmation);
  Vue.component('o-dropdown', Dropdown);
  Vue.component('o-loader', Loader);
  Vue.component('o-modal', Modal);
  Vue.component('o-notification', Notification);
  Vue.component('o-pagination', Pagination);
  Vue.component('o-search', Search);
  Vue.component('o-tabs', Tabs);
  Vue.component('o-tab', Tab);
  Vue.component('o-th-sort', ThSort);
}

export default install;
export { form as formMixin, listing as listingMixin, sortable as sortableMixin };
