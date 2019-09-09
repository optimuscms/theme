(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('vuex'), require('@fortawesome/vue-fontawesome')) :
  typeof define === 'function' && define.amd ? define(['exports', '@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', 'vuex', '@fortawesome/vue-fontawesome'], factory) :
  (global = global || self, factory(global.OptimuscmsTheme = {}, global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.vuex, global.vueFontawesome));
}(this, function (exports, fontawesomeSvgCore, freeSolidSvgIcons, vuex, vueFontawesome) { 'use strict';

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

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = "@tailwind base;\n@tailwind components;\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(359deg); } }\n\nhtml {\n  min-width: 300px;\n  text-size-adjust: 100%;\n  font-size: 16px;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  background-color: theme(\"colors.white\"); }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: theme(\"fontSize.sm\");\n  font-family: theme(\"fontFamily.sans\"); }\n\nbody {\n  color: theme(\"colors.grey.700\");\n  font-weight: theme(\"fontWeight.normal\");\n  line-height: theme(\"lineHeight.normal\"); }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: theme(\"fontWeight.bold\"); }\n\nh1 {\n  font-size: theme(\"fontSize.2xl\"); }\n\nh2 {\n  font-size: theme(\"fontSize.xl\"); }\n\nh3 {\n  font-size: theme(\"fontSize.lg\"); }\n\nh4 {\n  font-size: theme(\"fontSize.base\"); }\n\nh5 {\n  font-size: theme(\"fontSize.sm\"); }\n\nh6 {\n  font-size: theme(\"fontSize.xs\"); }\n\nb,\nstrong {\n  font-weight: theme(\"fontWeight.bold\"); }\n\na {\n  cursor: pointer;\n  color: theme(\"colors.blue.500\");\n  text-decoration: none; }\n  a:hover {\n    color: theme(\"colors.blue.600\"); }\n\nhr {\n  height: 1px;\n  background-color: theme(\"colors.grey.500\"); }\n\nblockquote {\n  padding: 0.75rem 1.5rem;\n  background-color: theme(\"colors.white\");\n  border-left: 5px solid theme(\"colors.grey.500\"); }\n\n[v-cloak] {\n  display: none; }\n\n.transition {\n  transition: all 180ms 0ms ease-out; }\n\n@responsive {\n  .border-box {\n    box-sizing: border-box; }\n  .content-box {\n    box-sizing: content-box; }\n  .rotate-90 {\n    transform: rotate(90deg); }\n  .rotate-180 {\n    transform: rotate(180deg); }\n  .rotate-270 {\n    transform: rotate(270deg); } }\n\n.button {\n  box-shadow: none;\n  appearance: none;\n  border-width: 1px;\n  position: relative;\n  border-style: solid;\n  vertical-align: top;\n  display: inline-flex;\n  height: 2.75rem;\n  justify-content: flex-start;\n  cursor: pointer;\n  text-align: center;\n  align-items: center;\n  white-space: nowrap;\n  color: theme(\"colors.grey.700\");\n  text-decoration: none;\n  justify-content: center;\n  padding: 0 1.5rem;\n  font-weight: theme(\"fontWeight.bold\");\n  border-width: 1px;\n  border-color: theme(\"colors.grey.400\");\n  border-radius: theme(\"borderRadius.default\");\n  background-color: theme(\"colors.white\"); }\n  .button:focus, .button:active {\n    outline: none; }\n  .button[disabled] {\n    cursor: not-allowed; }\n  .button .icon:first-child:not(:last-child) {\n    margin-right: 0.1875em;\n    margin-left: calc(-0.5em - 2px); }\n  .button .icon:last-child:not(:first-child) {\n    margin-left: 0.1875em;\n    margin-right: calc(-0.5em - 2px); }\n  .button .icon:first-child:last-child {\n    margin-left: calc(-0.5em - 2px);\n    margin-right: calc(-0.5em - 2px); }\n  .button:hover {\n    color: theme(\"colors.black\");\n    border-color: theme(\"colors.grey.500\");\n    background-color: theme(\"colors.grey.300\"); }\n  .button.static {\n    pointer-events: none;\n    color: theme(\"colors.grey.600\");\n    border-color: theme(\"colors.grey.400\");\n    background-color: theme(\"colors.grey.200\"); }\n  .button[disabled] {\n    opacity: 0.5;\n    border-color: theme(\"colors.grey.400\");\n    background-color: theme(\"colors.white\"); }\n  .button.loading {\n    color: transparent;\n    pointer-events: none; }\n    .button.loading:after {\n      content: '';\n      width: 1rem;\n      height: 1rem;\n      display: block;\n      position: absolute;\n      border-radius: 100px;\n      top: calc(50% - (1rem / 2));\n      left: calc(50% - (1rem / 2));\n      border: 2px solid transparent;\n      animation: spin 500ms infinite linear;\n      border-left-color: theme(\"colors.grey.700\");\n      border-bottom-color: theme(\"colors.grey.700\"); }\n  .button.outlined {\n    color: theme(\"colors.grey.400\");\n    background-color: transparent; }\n    .button.outlined:hover {\n      background-color: transparent; }\n    .button.outlined.loading {\n      color: transparent; }\n      .button.outlined.loading:after {\n        border-left-color: theme(\"colors.grey.400\");\n        border-bottom-color: theme(\"colors.grey.400\"); }\n\n.content {\n  overflow: auto;\n  color: theme(\"colors.grey.700\");\n  line-height: theme(\"lineHeight.loose\"); }\n  .content li + li {\n    margin-top: 0.25rem; }\n  .content p:not(:last-child),\n  .content dl:not(:last-child),\n  .content ol:not(:last-child),\n  .content ul:not(:last-child),\n  .content hr:not(:last-child),\n  .content pre:not(:last-child),\n  .content table:not(:last-child),\n  .content blockquote:not(:last-child) {\n    margin-bottom: 1.5rem; }\n  .content h2:not(:last-child),\n  .content h3:not(:last-child),\n  .content h4:not(:last-child),\n  .content h5:not(:last-child),\n  .content h6:not(:last-child) {\n    margin-bottom: 0.75rem; }\n  .content hr {\n    margin-top: 0; }\n  .content table {\n    width: 100%; }\n    .content table td,\n    .content table th {\n      vertical-align: top;\n      border-style: solid;\n      border-width: 0 0 1px;\n      padding: 0.5rem 0.75rem;\n      border-color: theme(\"colors.grey.500\");\n      font-size: theme(\"fontSize.sm\");\n      font-family: theme(\"fontFamily.sans\"); }\n    .content table thead td,\n    .content table thead th {\n      text-align: left;\n      border-width: 0 0 2px;\n      font-weight: theme(\"fontWeight.semibold\"); }\n    .content table tfoot td,\n    .content table tfoot th {\n      border-width: 2px 0 0; }\n    .content table tbody tr:last-child td,\n    .content table tbody tr:last-child th {\n      border-bottom-width: 0; }\n  .content img {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    float: none !important;\n    height: auto !important;\n    border-radius: 0; }\n\n@screen md {\n  .content img.image-left, .content img.image-right {\n    max-width: 50%;\n    margin-bottom: 1.5rem; }\n  .content img.image-left {\n    float: left !important;\n    margin-right: 1.5rem; }\n  .content img.image-right {\n    float: right !important;\n    margin-left: 1.5rem; } }\n  .content ul {\n    padding-left: 1.5rem;\n    list-style-type: disc; }\n    .content ul ul {\n      list-style-type: circle;\n      list-style-position: inside; }\n    .content ul ol {\n      list-style-type: lower-latin; }\n  .content ol {\n    padding-left: 1.5rem;\n    list-style-type: decimal; }\n    .content ol ul {\n      list-style-type: circle;\n      list-style-position: inside; }\n    .content ol ol {\n      list-style-type: lower-latin; }\n  .content:after {\n    clear: both;\n    content: '';\n    display: table; }\n\n.input,\n.textarea {\n  box-shadow: none;\n  appearance: none;\n  border-width: 1px;\n  position: relative;\n  border-style: solid;\n  vertical-align: top;\n  display: inline-flex;\n  height: 2.75rem;\n  justify-content: flex-start;\n  color: theme(\"colors.grey.700\");\n  padding: 0.5rem 0.75rem;\n  border-color: theme(\"colors.grey.400\");\n  border-radius: theme(\"borderRadius.default\");\n  background-color: theme(\"colors.white\");\n  width: 100%;\n  max-width: 100%; }\n  .input:focus, .input:active,\n  .textarea:focus,\n  .textarea:active {\n    outline: none; }\n  .input[disabled],\n  .textarea[disabled] {\n    cursor: not-allowed; }\n  .input::-moz-placeholder,\n  .textarea::-moz-placeholder {\n    color: theme(\"colors.grey.500\");\n    opacity: 1; }\n  .input::-webkit-input-placeholder,\n  .textarea::-webkit-input-placeholder {\n    color: theme(\"colors.grey.500\");\n    opacity: 1; }\n  .input:-moz-placeholder,\n  .textarea:-moz-placeholder {\n    color: theme(\"colors.grey.500\");\n    opacity: 1; }\n  .input:-ms-input-placeholder,\n  .textarea:-ms-input-placeholder {\n    color: theme(\"colors.grey.500\");\n    opacity: 1; }\n  .input:hover,\n  .textarea:hover {\n    color: theme(\"colors.grey.800\");\n    border-color: theme(\"colors.grey.500\");\n    background-color: theme(\"colors.white\"); }\n    .input:hover::-moz-placeholder,\n    .textarea:hover::-moz-placeholder {\n      color: theme(\"colors.grey.600\");\n      opacity: 1; }\n    .input:hover::-webkit-input-placeholder,\n    .textarea:hover::-webkit-input-placeholder {\n      color: theme(\"colors.grey.600\");\n      opacity: 1; }\n    .input:hover:-moz-placeholder,\n    .textarea:hover:-moz-placeholder {\n      color: theme(\"colors.grey.600\");\n      opacity: 1; }\n    .input:hover:-ms-input-placeholder,\n    .textarea:hover:-ms-input-placeholder {\n      color: theme(\"colors.grey.600\");\n      opacity: 1; }\n  .input:focus, .input:active,\n  .textarea:focus,\n  .textarea:active {\n    border-color: theme(\"colors.grey.400\"); }\n  .input[disabled],\n  .textarea[disabled] {\n    color: theme(\"colors.grey.400\");\n    border-color: theme(\"colors.grey.400\");\n    background-color: theme(\"colors.grey.300\"); }\n    .input[disabled]::-moz-placeholder,\n    .textarea[disabled]::-moz-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n    .input[disabled]::-webkit-input-placeholder,\n    .textarea[disabled]::-webkit-input-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n    .input[disabled]:-moz-placeholder,\n    .textarea[disabled]:-moz-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n    .input[disabled]:-ms-input-placeholder,\n    .textarea[disabled]:-ms-input-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n\n.textarea {\n  display: block;\n  max-width: 100%;\n  min-width: 100%;\n  resize: vertical;\n  max-height: 600px; }\n  .textarea:not([rows]) {\n    min-height: 8rem; }\n  .textarea[rows] {\n    height: initial; }\n\n.checkbox {\n  z-index: -1;\n  width: 1rem;\n  height: 1rem;\n  opacity: 0.01;\n  position: absolute;\n  margin-top: 0.25rem; }\n  .checkbox + label {\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    color: theme(\"colors.blue.500\");\n    line-height: 1.5rem;\n    display: inline-flex;\n    padding-left: 1.5rem; }\n    .checkbox + label:before {\n      left: 0;\n      content: '';\n      width: 1rem;\n      height: 1rem;\n      top: 0.25rem;\n      position: absolute;\n      border-radius: theme(\"borderRadius.default\");\n      border: solid 1px theme(\"colors.grey.400\");\n      background-color: transparent; }\n    .checkbox + label:hover:before {\n      border-color: theme(\"colors.grey.500\");\n      background-color: transparent; }\n  .checkbox[type='checkbox']:checked + label:before {\n    border-color: theme(\"colors.grey.500\");\n    background-color: transparent; }\n  .checkbox[type='checkbox']:checked + label:after {\n    content: '';\n    left: 0.5rem;\n    width: 0.3rem;\n    height: 0.6rem;\n    position: absolute;\n    background-color: transparent;\n    top: calc(0.25rem + 2px);\n    transform: translateX(-50%) rotate(45deg);\n    border-right: 2px solid theme(\"colors.coral.500\");\n    border-bottom: 2px solid theme(\"colors.coral.500\"); }\n  .checkbox[type='checkbox']:checked + label:hover:before {\n    border-color: theme(\"colors.grey.600\");\n    background-color: transparent; }\n  .checkbox[type='checkbox']:checked + label:hover:after {\n    border-right-color: theme(\"colors.coral.600\");\n    border-bottom-color: theme(\"colors.coral.600\"); }\n  .checkbox[type='checkbox']:focus + label:before {\n    border-color: theme(\"colors.grey.600\");\n    background-color: transparent; }\n  .checkbox[type='checkbox']:focus + label:after {\n    border-right-color: theme(\"colors.coral.600\");\n    border-bottom-color: theme(\"colors.coral.600\"); }\n  .checkbox[type='radio'] + label:before {\n    border-radius: 50%; }\n  .checkbox[type='radio']:checked + label:before {\n    border: solid 1px theme(\"colors.grey.400\");\n    background-color: transparent; }\n  .checkbox[type='radio']:checked + label:after {\n    content: '';\n    left: 0.2rem;\n    width: 0.6rem;\n    height: 0.6rem;\n    position: absolute;\n    border-radius: 999px;\n    top: calc(0.25rem + 0.2rem);\n    background-color: theme(\"colors.coral.500\"); }\n  .checkbox[type='radio']:checked + label:hover:after {\n    border-color: theme(\"colors.grey.500\");\n    background-color: transparent; }\n  .checkbox[type='radio']:checked + label:hover:after {\n    background-color: theme(\"colors.coral.600\"); }\n  .checkbox[type='radio']:focus + label:before {\n    border-color: theme(\"colors.grey.600\");\n    background-color: transparent; }\n  .checkbox[type='radio']:focus + label:after {\n    background-color: theme(\"colors.coral.600\"); }\n\n.select {\n  max-width: 100%;\n  position: relative;\n  vertical-align: top;\n  display: inline-block; }\n  .select:not(.multiple) {\n    height: 2.75rem; }\n  .select:not(.multiple):after {\n    top: 50%;\n    width: 0;\n    height: 0;\n    z-index: 4;\n    content: '';\n    display: block;\n    right: 1.125rem;\n    position: absolute;\n    pointer-events: none;\n    transform-origin: center;\n    transform: translateY(-0.1rem);\n    border-left: solid 5px transparent;\n    border-right: solid 5px transparent;\n    border-top: solid 5px theme(\"colors.grey.500\"); }\n  .select select {\n    box-shadow: none;\n    appearance: none;\n    border-width: 1px;\n    position: relative;\n    border-style: solid;\n    vertical-align: top;\n    display: inline-flex;\n    height: 2.75rem;\n    justify-content: flex-start;\n    color: theme(\"colors.grey.700\");\n    padding: 0.5rem 0.75rem;\n    border-color: theme(\"colors.grey.400\");\n    border-radius: theme(\"borderRadius.default\");\n    background-color: theme(\"colors.white\");\n    outline: none;\n    display: block;\n    cursor: pointer;\n    max-width: 100%; }\n    .select select:focus, .select select:active {\n      outline: none; }\n    .select select[disabled] {\n      cursor: not-allowed; }\n    .select select::-moz-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n    .select select::-webkit-input-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n    .select select:-moz-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n    .select select:-ms-input-placeholder {\n      color: theme(\"colors.grey.500\");\n      opacity: 1; }\n    .select select:hover {\n      color: theme(\"colors.grey.800\");\n      border-color: theme(\"colors.grey.500\");\n      background-color: theme(\"colors.white\"); }\n      .select select:hover::-moz-placeholder {\n        color: theme(\"colors.grey.600\");\n        opacity: 1; }\n      .select select:hover::-webkit-input-placeholder {\n        color: theme(\"colors.grey.600\");\n        opacity: 1; }\n      .select select:hover:-moz-placeholder {\n        color: theme(\"colors.grey.600\");\n        opacity: 1; }\n      .select select:hover:-ms-input-placeholder {\n        color: theme(\"colors.grey.600\");\n        opacity: 1; }\n    .select select:focus, .select select:active {\n      border-color: theme(\"colors.grey.400\"); }\n    .select select[disabled] {\n      color: theme(\"colors.grey.400\");\n      border-color: theme(\"colors.grey.400\");\n      background-color: theme(\"colors.grey.300\"); }\n      .select select[disabled]::-moz-placeholder {\n        color: theme(\"colors.grey.500\");\n        opacity: 1; }\n      .select select[disabled]::-webkit-input-placeholder {\n        color: theme(\"colors.grey.500\");\n        opacity: 1; }\n      .select select[disabled]:-moz-placeholder {\n        color: theme(\"colors.grey.500\");\n        opacity: 1; }\n      .select select[disabled]:-ms-input-placeholder {\n        color: theme(\"colors.grey.500\");\n        opacity: 1; }\n    .select select::-ms-expand {\n      display: none; }\n    .select select:not([multiple]) {\n      padding-right: 2.5rem; }\n    .select select[multiple] {\n      padding: 0;\n      height: auto; }\n      .select select[multiple] option {\n        padding: 0.5rem 1rem; }\n  .select:not(.multiple):hover:after {\n    border-top-color: theme(\"colors.grey.600\"); }\n  .select.disabled:after {\n    border-color: theme(\"colors.grey.400\"); }\n  .select.w-full select {\n    width: 100%; }\n\n.label {\n  display: block;\n  color: theme(\"colors.blue.500\");\n  font-size: theme(\"fontSize.sm\");\n  font-weight: theme(\"fontWeight.bold\"); }\n  .label:not(:last-child) {\n    margin-bottom: theme(\"margin.2\"); }\n\n.help {\n  display: block;\n  color: theme(\"colors.grey.700\");\n  font-size: theme(\"fontSize.xs\");\n  margin-top: theme(\"margin.1\"); }\n\n.field:not(:last-child) {\n  margin-bottom: theme(\"margin.8\"); }\n\n.field.required .label:first-child:after {\n  content: '*';\n  padding-left: 0.25rem;\n  color: theme(\"colors.red.500\"); }\n\n.field.addons {\n  display: flex;\n  justify-content: flex-start; }\n  .field.addons .control:not(:last-child) {\n    margin-right: -1px; }\n  .field.addons .control:not(:first-child):not(:last-child) .button,\n  .field.addons .control:not(:first-child):not(:last-child) .input,\n  .field.addons .control:not(:first-child):not(:last-child) .select select {\n    border-radius: 0; }\n  .field.addons .control:first-child .button,\n  .field.addons .control:first-child .input,\n  .field.addons .control:first-child .select select {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n  .field.addons .control:last-child .button,\n  .field.addons .control:last-child .input,\n  .field.addons .control:last-child .select select {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n  .field.addons .control .button:not([disabled]):hover,\n  .field.addons .control .input:not([disabled]):hover,\n  .field.addons .control .select select:not([disabled]):hover {\n    z-index: 2; }\n  .field.addons .control .button:not([disabled]):focus, .field.addons .control .button:not([disabled]):active,\n  .field.addons .control .input:not([disabled]):focus,\n  .field.addons .control .input:not([disabled]):active,\n  .field.addons .control .select select:not([disabled]):focus,\n  .field.addons .control .select select:not([disabled]):active {\n    z-index: 3; }\n    .field.addons .control .button:not([disabled]):focus:hover, .field.addons .control .button:not([disabled]):active:hover,\n    .field.addons .control .input:not([disabled]):focus:hover,\n    .field.addons .control .input:not([disabled]):active:hover,\n    .field.addons .control .select select:not([disabled]):focus:hover,\n    .field.addons .control .select select:not([disabled]):active:hover {\n      z-index: 4; }\n\n.g-recaptcha {\n  display: flex; }\n  @media (max-width: 370px) {\n    .g-recaptcha {\n      transform: scale(0.77);\n      justify-content: center; } }\n\n.hamburger {\n  line-height: 0;\n  cursor: pointer;\n  overflow: visible;\n  display: inline-block;\n  padding: 0.75rem; }\n  .hamburger .hamburger-holder {\n    position: relative;\n    display: inline-block;\n    width: 2rem;\n    height: 1.5rem; }\n  .hamburger .hamburger-inner {\n    top: 50%;\n    display: block;\n    margin-top: -1px; }\n    .hamburger .hamburger-inner, .hamburger .hamburger-inner:after, .hamburger .hamburger-inner:before {\n      height: 3px;\n      position: absolute;\n      border-radius: 2px;\n      width: 2rem;\n      transition-duration: 150ms;\n      transition-property: transform;\n      background-color: theme(\"colors.black\"); }\n    .hamburger .hamburger-inner:before, .hamburger .hamburger-inner:after {\n      content: '';\n      display: block; }\n    .hamburger .hamburger-inner:before {\n      top: -10px; }\n    .hamburger .hamburger-inner::after {\n      bottom: -10px; }\n  .hamburger .hamburger-inner {\n    transition-duration: 220ms;\n    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n    .hamburger .hamburger-inner:before {\n      transition: top 100ms ease-in 250ms, opacity 100ms ease-in; }\n    .hamburger .hamburger-inner:after {\n      transition: bottom 100ms ease-in 250ms, transform 220ms cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger.active .hamburger-inner {\n    transition-delay: 120ms;\n    transform: rotate(225deg);\n    background-color: theme(\"colors.black\");\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n    .hamburger.active .hamburger-inner:before {\n      top: 0;\n      opacity: 0;\n      background-color: theme(\"colors.black\");\n      transition: top 100ms ease-out, opacity 100ms ease-out 120ms; }\n    .hamburger.active .hamburger-inner:after {\n      bottom: 0;\n      transform: rotate(-90deg);\n      background-color: theme(\"colors.black\");\n      transition: bottom 100ms ease-out, transform 220ms cubic-bezier(0.215, 0.61, 0.355, 1) 120ms; }\n\n.icon {\n  align-items: center;\n  display: inline-flex;\n  width: 1.5rem;\n  height: 1.5rem;\n  justify-content: center; }\n  .icon.small {\n    width: 1rem;\n    height: 1rem; }\n  .icon.medium {\n    width: 2rem;\n    height: 2rem; }\n  .icon.large {\n    width: 3rem;\n    height: 3rem; }\n\n.image {\n  display: block;\n  position: relative; }\n  .image img {\n    width: 100%;\n    height: auto;\n    display: block; }\n  .image.ratio-1by1 {\n    padding-top: 100%; }\n  .image.ratio-1by2 {\n    padding-top: 50%; }\n  .image.ratio-1by3 {\n    padding-top: 300%; }\n  .image.ratio-2by1 {\n    padding-top: 50%; }\n  .image.ratio-2by3 {\n    padding-top: 150%; }\n  .image.ratio-3by1 {\n    padding-top: 33.3333%; }\n  .image.ratio-3by2 {\n    padding-top: 66.6666%; }\n  .image.ratio-3by4 {\n    padding-top: 133.3333%; }\n  .image.ratio-3by5 {\n    padding-top: 166.6666%; }\n  .image.ratio-4by3 {\n    padding-top: 75%; }\n  .image.ratio-4by5 {\n    padding-top: 125%; }\n  .image.ratio-5by3 {\n    padding-top: 60%; }\n  .image.ratio-5by4 {\n    padding-top: 80%; }\n  .image.ratio-9by16 {\n    padding-top: 177.7777%; }\n  .image.ratio-16by9 {\n    padding-top: 56.25%; }\n\n.image.ratio-1by1 img, .image.ratio-1by2 img, .image.ratio-1by3 img, .image.ratio-2by1 img, .image.ratio-2by3 img, .image.ratio-3by1 img, .image.ratio-3by2 img, .image.ratio-3by4 img, .image.ratio-3by5 img, .image.ratio-4by3 img, .image.ratio-4by5 img, .image.ratio-5by3 img, .image.ratio-5by4 img, .image.ratio-9by16 img, .image.ratio-16by9 img {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\ntable {\n  width: 100%;\n  border-spacing: 0; }\n\nth,\ntd {\n  text-align: left;\n  vertical-align: middle; }\n\n.table {\n  color: theme(\"colors.grey.700\");\n  white-space: nowrap;\n  background-color: theme(\"colors.white\"); }\n  .table thead tr th,\n  .table thead tr td {\n    border-bottom: 2px solid theme(\"colors.grey.400\"); }\n  .table tbody tr th,\n  .table tbody tr td {\n    border-bottom: 1px solid theme(\"colors.grey.400\"); }\n  .table tbody tr:hover th,\n  .table tbody tr:hover td {\n    background-color: theme(\"colors.grey.200\"); }\n  .table thead tr th,\n  .table tbody tr th {\n    padding: 1.25rem; }\n  .table thead tr td,\n  .table tbody tr td {\n    padding: 1rem 1.25rem; }\n  .table thead tr th:first-child,\n  .table thead tr td:first-child,\n  .table tbody tr th:first-child,\n  .table tbody tr td:first-child {\n    padding-left: 2rem; }\n  .table thead tr th:last-child,\n  .table thead tr td:last-child,\n  .table tbody tr th:last-child,\n  .table tbody tr td:last-child {\n    padding-right: 2rem; }\n  .table thead tr th.narrow,\n  .table thead tr td.narrow,\n  .table tbody tr th.narrow,\n  .table tbody tr td.narrow {\n    width: 1%;\n    text-align: center; }\n\n.title,\n.subtitle {\n  word-break: break-word; }\n\n.title {\n  color: theme(\"colors.blue.600\");\n  font-size: theme(\"fontSize.xl\");\n  font-family: theme(\"fontFamily.sans\");\n  font-weight: theme(\"fontWeight.normal\"); }\n\n.subtitle {\n  color: theme(\"colors.grey.700\");\n  font-size: theme(\"fontSize.sm\");\n  font-family: theme(\"fontFamily.serif\");\n  font-weight: theme(\"fontWeight.normal\"); }\n\n.card {\n  box-shadow: theme(\"boxShadow.lg\");\n  border-radius: theme(\"borderRadius.default\");\n  background-color: theme(\"colors.white\"); }\n\n.card-image img {\n  border-radius: theme(\"borderRadius.default\") theme(\"borderRadius.default\") 0 0; }\n\n.card-body {\n  padding: 2rem; }\n\n.dropdown {\n  position: relative;\n  vertical-align: top;\n  display: inline-flex; }\n  .dropdown.open .dropdown-menu {\n    display: block; }\n  .dropdown:not(.right) .dropdown-menu {\n    left: 0; }\n  .dropdown.right .dropdown-menu {\n    right: 0; }\n  .dropdown:not(.up) .dropdown-menu {\n    top: 100%;\n    padding-top: 0.25rem; }\n  .dropdown.up .dropdown-menu {\n    bottom: 100%;\n    padding-bottom: 0.25rem; }\n\n.dropdown-menu {\n  display: none;\n  position: absolute;\n  z-index: theme(\"zIndex.20\");\n  min-width: theme(\"width.48\"); }\n\n.dropdown-scroll {\n  overflow: auto;\n  max-height: 12rem; }\n\n.dropdown-content {\n  padding: 0.5rem 0;\n  box-shadow: theme(\"boxShadow.default\");\n  border-radius: theme(\"borderRadius.default\");\n  border: solid 1px theme(\"colors.grey.400\");\n  background-color: theme(\"colors.white\"); }\n\n.dropdown-item {\n  display: block;\n  text-align: left;\n  white-space: nowrap;\n  font-size: theme(\"fontSize.sm\");\n  padding: 0.3rem 1rem;\n  line-height: theme(\"lineHeight.normal\"); }\n  .dropdown-item:hover {\n    color: theme(\"colors.black\");\n    background-color: theme(\"colors.grey.300\"); }\n  .dropdown-item.active {\n    color: theme(\"colors.white\");\n    background-color: theme(\"colors.blue.500\"); }\n\n.dropdown-divider {\n  height: 1px;\n  margin: 0.5rem 0;\n  background-color: theme(\"colors.grey.400\"); }\n\n.modal {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  position: fixed;\n  overflow: hidden;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  z-index: 50; }\n  .modal.active {\n    display: flex; }\n\n.modal-background {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.85); }\n\n.modal-content {\n  width: 100%;\n  margin: 0 auto;\n  overflow: auto;\n  position: relative;\n  max-width: calc(100vw - 3rem * 2);\n  max-height: calc(100vh - 3rem * 2); }\n  .modal-content.h-full {\n    min-height: calc(100vh - 3rem * 2); }\n\n.pagination {\n  flex-wrap: wrap;\n  margin: -0.25rem; }\n\n.pagination,\n.pagination-list {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center; }\n\n.pagination-previous,\n.pagination-next,\n.pagination-link {\n  box-shadow: none;\n  appearance: none;\n  border-width: 1px;\n  position: relative;\n  border-style: solid;\n  vertical-align: top;\n  display: inline-flex;\n  height: 2.75rem;\n  justify-content: flex-start;\n  align-items: center;\n  color: theme(\"colors.grey.600\");\n  min-width: 2.75rem;\n  border-color: theme(\"colors.grey.400\");\n  border-radius: theme(\"borderRadius.default\"); }\n  .pagination-previous:focus, .pagination-previous:active,\n  .pagination-next:focus,\n  .pagination-next:active,\n  .pagination-link:focus,\n  .pagination-link:active {\n    outline: none; }\n  .pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled] {\n    cursor: not-allowed; }\n  .pagination-previous:hover,\n  .pagination-next:hover,\n  .pagination-link:hover {\n    color: theme(\"colors.grey.600\");\n    border-color: theme(\"colors.grey.500\"); }\n  .pagination-previous:focus,\n  .pagination-next:focus,\n  .pagination-link:focus {\n    border-color: theme(\"colors.grey.600\"); }\n  .pagination-previous[disabled],\n  .pagination-next[disabled],\n  .pagination-link[disabled] {\n    opacity: 0.5;\n    color: theme(\"colors.grey.500\");\n    border-color: theme(\"colors.grey.400\");\n    background-color: theme(\"colors.white\"); }\n\n.pagination-previous,\n.pagination-next,\n.pagination-link,\n.pagination-ellipsis {\n  user-select: none;\n  text-align: center;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  justify-content: center;\n  margin: 0.25rem; }\n\n.pagination-previous,\n.pagination-next {\n  flex-grow: 1;\n  flex-shrink: 1;\n  white-space: nowrap;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem; }\n\n.pagination-link.current {\n  color: theme(\"colors.white\");\n  border-color: theme(\"colors.grey.600\");\n  background-color: theme(\"colors.blue.500\"); }\n\n.pagination-ellipsis {\n  pointer-events: none;\n  color: theme(\"colors.grey.400\"); }\n\n.pagination-list {\n  margin: 0;\n  padding: 0;\n  flex-wrap: wrap;\n  list-style: none; }\n  .pagination-list li {\n    flex-grow: 1;\n    flex-shrink: 1; }\n\n@screen md {\n  .pagination {\n    flex-wrap: nowrap;\n    justify-content: space-between; }\n  .pagination-list {\n    order: 2;\n    flex-grow: 1;\n    flex-shrink: 1;\n    justify-content: center; }\n    .pagination-list li {\n      flex-grow: 0;\n      flex-shrink: 0; }\n  .pagination-previous,\n  .pagination-next {\n    flex-grow: 0;\n    flex-shrink: 0; }\n  .pagination-previous {\n    order: 1; }\n  .pagination-next {\n    order: 3; } }\n\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 200ms; }\n\n.fade-enter,\n.fade-leave-to {\n  opacity: 0; }\n\n.loader-enter-active {\n  transition: opacity 250ms; }\n\n.loader-enter {\n  opacity: 0; }\n\n.loader-leave-active {\n  display: none; }\n\n.flip-list-move {\n  transition: transform 250ms; }\n\n.pulse {\n  opacity: 0.6;\n  animation: pulse 3000ms ease-out infinite; }\n\n@keyframes pulse {\n  0% {\n    opacity: 0.6; }\n  50% {\n    opacity: 1.0; }\n  100% {\n    opacity: 0.6; } }\n\n.side-nav > li:not(:last-child) {\n  position: relative; }\n  .side-nav > li:not(:last-child):after {\n    left: 0;\n    right: 0;\n    height: 1px;\n    content: '';\n    position: absolute;\n    background-size: 8px 1px;\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4) 0px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 100%); }\n\n.side-nav > li > a {\n  display: flex;\n  padding: 0.5rem 0;\n  align-items: center;\n  color: theme(\"colors.white\");\n  justify-content: space-between; }\n  .side-nav > li > a > span:not(.icon) {\n    text-transform: uppercase;\n    letter-spacing: theme(\"letterSpacing.widest\"); }\n  .side-nav > li > a > span.icon {\n    margin-right: -0.5rem; }\n\n.side-nav > li:hover > a, .side-nav > li.active > a {\n  color: theme(\"colors.coral.500\"); }\n\n.side-sub-nav {\n  margin-bottom: 0.5rem; }\n  .side-sub-nav > li:not(.divide) {\n    padding-left: 0.5rem;\n    padding-bottom: 0.35rem; }\n    .side-sub-nav > li:not(.divide):not(:first-child) {\n      padding-top: 0.35rem; }\n  .side-sub-nav > li.divide {\n    height: 1px;\n    display: block;\n    margin: 0.5rem 0 0.5rem 0.5rem;\n    background-color: rgba(255, 255, 255, 0.05); }\n  .side-sub-nav > li > a {\n    display: block;\n    padding: 0.5rem 0.75rem;\n    text-transform: uppercase;\n    color: theme(\"colors.white\");\n    font-size: theme(\"fontSize.xs\");\n    border-radius: theme(\"borderRadius.sm\");\n    letter-spacing: theme(\"letterSpacing.widest\"); }\n  .side-sub-nav > li:hover > a, .side-sub-nav > li.active > a {\n    background-color: theme(\"colors.blue.900\"); }\n\n.button {\n  text-transform: uppercase; }\n  .button.blue {\n    color: theme(\"colors.white\");\n    border-color: theme(\"colors.blue.500\");\n    background-color: theme(\"colors.blue.500\"); }\n    .button.blue:hover {\n      color: theme(\"colors.white\");\n      border-color: theme(\"colors.blue.600\");\n      background-color: theme(\"colors.blue.600\"); }\n    .button.blue.loading {\n      color: transparent; }\n      .button.blue.loading:after {\n        border-left-color: theme(\"colors.white\");\n        border-bottom-color: theme(\"colors.white\"); }\n    .button.blue[disabled] {\n      opacity: 0.5;\n      background-color: theme(\"colors.blue.500\"); }\n    .button.blue.outlined {\n      background-color: transparent;\n      color: theme(\"colors.blue.500\"); }\n      .button.blue.outlined:hover {\n        color: theme(\"colors.white\");\n        border-color: theme(\"colors.blue.500\");\n        background-color: theme(\"colors.blue.500\"); }\n      .button.blue.outlined.loading:after {\n        border-left-color: theme(\"colors.blue.500\");\n        border-bottom-color: theme(\"colors.blue.500\"); }\n      .button.blue.outlined[disabled] {\n        color: transparent;\n        background-color: transparent; }\n  .button.coral {\n    color: theme(\"colors.white\");\n    border-color: theme(\"colors.coral.500\");\n    background-color: theme(\"colors.coral.500\"); }\n    .button.coral:hover {\n      color: theme(\"colors.white\");\n      border-color: theme(\"colors.coral.600\");\n      background-color: theme(\"colors.coral.600\"); }\n    .button.coral.loading {\n      color: transparent; }\n      .button.coral.loading:after {\n        border-left-color: theme(\"colors.white\");\n        border-bottom-color: theme(\"colors.white\"); }\n    .button.coral[disabled] {\n      opacity: 0.5;\n      background-color: theme(\"colors.coral.500\"); }\n    .button.coral.outlined {\n      background-color: transparent;\n      color: theme(\"colors.coral.500\"); }\n      .button.coral.outlined:hover {\n        color: theme(\"colors.white\");\n        border-color: theme(\"colors.coral.500\");\n        background-color: theme(\"colors.coral.500\"); }\n      .button.coral.outlined.loading:after {\n        border-left-color: theme(\"colors.coral.500\");\n        border-bottom-color: theme(\"colors.coral.500\"); }\n      .button.coral.outlined[disabled] {\n        color: transparent;\n        background-color: transparent; }\n  .button.green {\n    color: theme(\"colors.white\");\n    border-color: theme(\"colors.green.500\");\n    background-color: theme(\"colors.green.500\"); }\n    .button.green:hover {\n      color: theme(\"colors.white\");\n      border-color: theme(\"colors.green.600\");\n      background-color: theme(\"colors.green.600\"); }\n    .button.green.loading {\n      color: transparent; }\n      .button.green.loading:after {\n        border-left-color: theme(\"colors.white\");\n        border-bottom-color: theme(\"colors.white\"); }\n    .button.green[disabled] {\n      opacity: 0.5;\n      background-color: theme(\"colors.green.500\"); }\n    .button.green.outlined {\n      background-color: transparent;\n      color: theme(\"colors.green.500\"); }\n      .button.green.outlined:hover {\n        color: theme(\"colors.white\");\n        border-color: theme(\"colors.green.500\");\n        background-color: theme(\"colors.green.500\"); }\n      .button.green.outlined.loading:after {\n        border-left-color: theme(\"colors.green.500\");\n        border-bottom-color: theme(\"colors.green.500\"); }\n      .button.green.outlined[disabled] {\n        color: transparent;\n        background-color: transparent; }\n  .button.red {\n    color: theme(\"colors.white\");\n    border-color: theme(\"colors.red.500\");\n    background-color: theme(\"colors.red.500\"); }\n    .button.red:hover {\n      color: theme(\"colors.white\");\n      border-color: theme(\"colors.red.600\");\n      background-color: theme(\"colors.red.600\"); }\n    .button.red.loading {\n      color: transparent; }\n      .button.red.loading:after {\n        border-left-color: theme(\"colors.white\");\n        border-bottom-color: theme(\"colors.white\"); }\n    .button.red[disabled] {\n      opacity: 0.5;\n      background-color: theme(\"colors.red.500\"); }\n    .button.red.outlined {\n      background-color: transparent;\n      color: theme(\"colors.red.500\"); }\n      .button.red.outlined:hover {\n        color: theme(\"colors.white\");\n        border-color: theme(\"colors.red.500\");\n        background-color: theme(\"colors.red.500\"); }\n      .button.red.outlined.loading:after {\n        border-left-color: theme(\"colors.red.500\");\n        border-bottom-color: theme(\"colors.red.500\"); }\n      .button.red.outlined[disabled] {\n        color: transparent;\n        background-color: transparent; }\n  .button.grey {\n    color: theme(\"colors.black\");\n    border-color: theme(\"colors.grey.500\");\n    background-color: theme(\"colors.grey.500\"); }\n    .button.grey:hover {\n      color: theme(\"colors.black\");\n      border-color: theme(\"colors.grey.600\");\n      background-color: theme(\"colors.grey.600\"); }\n    .button.grey.loading {\n      color: transparent; }\n      .button.grey.loading:after {\n        border-left-color: theme(\"colors.black\");\n        border-bottom-color: theme(\"colors.black\"); }\n    .button.grey[disabled] {\n      opacity: 0.5;\n      background-color: theme(\"colors.grey.400\"); }\n    .button.grey.outlined {\n      color: theme(\"colors.black\");\n      background-color: transparent; }\n      .button.grey.outlined:hover {\n        color: theme(\"colors.black\");\n        border-color: theme(\"colors.grey.600\");\n        background-color: theme(\"colors.grey.600\"); }\n      .button.grey.outlined.loading {\n        color: transparent; }\n      .button.grey.outlined[disabled] {\n        color: transparent;\n        background-color: transparent; }\n\n.button-group {\n  display: flex; }\n  .button-group .button {\n    flex-grow: 1; }\n    .button-group .button:hover {\n      z-index: 2; }\n    .button-group .button:focus, .button-group .button:active {\n      z-index: 3; }\n      .button-group .button:focus:hover, .button-group .button:active:hover {\n        z-index: 4; }\n    .button-group .button:not(:first-child) {\n      margin-left: -1px; }\n    .button-group .button:first-child {\n      border-left: 0;\n      border-radius: 0 0 0 theme(\"borderRadius.default\"); }\n    .button-group .button:last-child {\n      border-right: 0;\n      border-radius: 0 0 theme(\"borderRadius.default\") 0; }\n\nfieldset[disabled] .multiselect {\n  pointer-events: none; }\n\n.multiselect__spinner {\n  position: absolute;\n  right: 1px;\n  top: 1px;\n  width: 48px;\n  height: 35px;\n  background: #fff;\n  display: block; }\n\n.multiselect__spinner:after, .multiselect__spinner:before {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  margin: -8px 0 0 -8px;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  border: 2px solid transparent;\n  border-top-color: #41b883;\n  box-shadow: 0 0 0 1px transparent; }\n\n.multiselect__spinner:before {\n  animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);\n  animation-iteration-count: infinite; }\n\n.multiselect__spinner:after {\n  animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);\n  animation-iteration-count: infinite; }\n\n.multiselect__loading-enter-active, .multiselect__loading-leave-active {\n  transition: opacity .4s ease-in-out;\n  opacity: 1; }\n\n.multiselect__loading-enter, .multiselect__loading-leave-active {\n  opacity: 0; }\n\n.multiselect, .multiselect__input, .multiselect__single {\n  font-family: inherit;\n  font-size: 16px;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation; }\n\n.multiselect {\n  box-sizing: content-box;\n  display: block;\n  position: relative;\n  width: 100%;\n  min-height: 40px;\n  text-align: left;\n  color: #35495e; }\n\n.multiselect * {\n  box-sizing: border-box; }\n\n.multiselect:focus {\n  outline: none; }\n\n.multiselect--disabled {\n  background: #ededed;\n  pointer-events: none;\n  opacity: .6; }\n\n.multiselect--active {\n  z-index: 50; }\n\n.multiselect--active:not(.multiselect--above) .multiselect__current, .multiselect--active:not(.multiselect--above) .multiselect__input, .multiselect--active:not(.multiselect--above) .multiselect__tags {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.multiselect--active .multiselect__select {\n  transform: rotate(180deg); }\n\n.multiselect--above.multiselect--active .multiselect__current, .multiselect--above.multiselect--active .multiselect__input, .multiselect--above.multiselect--active .multiselect__tags {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.multiselect__input, .multiselect__single {\n  position: relative;\n  display: inline-block;\n  min-height: 20px;\n  line-height: 20px;\n  border: none;\n  border-radius: 5px;\n  background: #fff;\n  padding: 0 0 0 5px;\n  width: 100%;\n  transition: border .1s ease;\n  box-sizing: border-box;\n  margin-bottom: 8px;\n  vertical-align: top; }\n\n.multiselect__input:-ms-input-placeholder {\n  color: #35495e; }\n\n.multiselect__input::placeholder {\n  color: #35495e; }\n\n.multiselect__tag ~ .multiselect__input, .multiselect__tag ~ .multiselect__single {\n  width: auto; }\n\n.multiselect__input:hover, .multiselect__single:hover {\n  border-color: #cfcfcf; }\n\n.multiselect__input:focus, .multiselect__single:focus {\n  border-color: #a8a8a8;\n  outline: none; }\n\n.multiselect__single {\n  padding-left: 5px;\n  margin-bottom: 8px; }\n\n.multiselect__tags-wrap {\n  display: inline; }\n\n.multiselect__tags {\n  min-height: 40px;\n  display: block;\n  padding: 8px 40px 0 8px;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8;\n  background: #fff;\n  font-size: 14px; }\n\n.multiselect__tag {\n  position: relative;\n  display: inline-block;\n  padding: 4px 26px 4px 10px;\n  border-radius: 5px;\n  margin-right: 10px;\n  color: #fff;\n  line-height: 1;\n  background: #41b883;\n  margin-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 100%;\n  text-overflow: ellipsis; }\n\n.multiselect__tag-icon {\n  cursor: pointer;\n  margin-left: 7px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-weight: 700;\n  font-style: normal;\n  width: 22px;\n  text-align: center;\n  line-height: 22px;\n  transition: all .2s ease;\n  border-radius: 5px; }\n\n.multiselect__tag-icon:after {\n  content: \"\\D7\";\n  color: #266d4d;\n  font-size: 14px; }\n\n.multiselect__tag-icon:focus, .multiselect__tag-icon:hover {\n  background: #369a6e; }\n\n.multiselect__tag-icon:focus:after, .multiselect__tag-icon:hover:after {\n  color: #fff; }\n\n.multiselect__current {\n  min-height: 40px;\n  overflow: hidden;\n  padding: 8px 30px 0 12px;\n  white-space: nowrap;\n  border-radius: 5px;\n  border: 1px solid #e8e8e8; }\n\n.multiselect__current, .multiselect__select {\n  line-height: 16px;\n  box-sizing: border-box;\n  display: block;\n  margin: 0;\n  text-decoration: none;\n  cursor: pointer; }\n\n.multiselect__select {\n  position: absolute;\n  width: 40px;\n  height: 38px;\n  right: 1px;\n  top: 1px;\n  padding: 4px 8px;\n  text-align: center;\n  transition: transform .2s ease; }\n\n.multiselect__select:before {\n  position: relative;\n  right: 0;\n  top: 65%;\n  color: #999;\n  margin-top: 4px;\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 0;\n  content: \"\"; }\n\n.multiselect__placeholder {\n  color: #adadad;\n  display: inline-block;\n  margin-bottom: 10px;\n  padding-top: 2px; }\n\n.multiselect--active .multiselect__placeholder {\n  display: none; }\n\n.multiselect__content-wrapper {\n  position: absolute;\n  display: block;\n  background: #fff;\n  width: 100%;\n  max-height: 240px;\n  overflow: auto;\n  border: 1px solid #e8e8e8;\n  border-top: none;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  z-index: 50;\n  -webkit-overflow-scrolling: touch; }\n\n.multiselect__content {\n  list-style: none;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  min-width: 100%;\n  vertical-align: top; }\n\n.multiselect--above .multiselect__content-wrapper {\n  bottom: 100%;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom: none;\n  border-top: 1px solid #e8e8e8; }\n\n.multiselect__content::webkit-scrollbar {\n  display: none; }\n\n.multiselect__element {\n  display: block; }\n\n.multiselect__option {\n  display: block;\n  padding: 12px;\n  min-height: 40px;\n  line-height: 16px;\n  text-decoration: none;\n  text-transform: none;\n  vertical-align: middle;\n  position: relative;\n  cursor: pointer;\n  white-space: nowrap; }\n\n.multiselect__option:after {\n  top: 0;\n  right: 0;\n  position: absolute;\n  line-height: 40px;\n  padding-right: 12px;\n  padding-left: 20px;\n  font-size: 13px; }\n\n.multiselect__option--highlight {\n  background: #41b883;\n  outline: none;\n  color: #fff; }\n\n.multiselect__option--highlight:after {\n  content: attr(data-select);\n  background: #41b883;\n  color: #fff; }\n\n.multiselect__option--selected {\n  background: #f3f3f3;\n  color: #35495e;\n  font-weight: 700; }\n\n.multiselect__option--selected:after {\n  content: attr(data-selected);\n  color: silver; }\n\n.multiselect__option--selected.multiselect__option--highlight {\n  background: #ff6a6a;\n  color: #fff; }\n\n.multiselect__option--selected.multiselect__option--highlight:after {\n  background: #ff6a6a;\n  content: attr(data-deselect);\n  color: #fff; }\n\n.multiselect--disabled .multiselect__current, .multiselect--disabled .multiselect__select {\n  background: #ededed;\n  color: #a6a6a6; }\n\n.multiselect__option--disabled {\n  background: #ededed !important;\n  color: #a6a6a6 !important;\n  cursor: text;\n  pointer-events: none; }\n\n.multiselect__option--group {\n  background: #ededed;\n  color: #35495e; }\n\n.multiselect__option--group.multiselect__option--highlight {\n  background: #35495e;\n  color: #fff; }\n\n.multiselect__option--group.multiselect__option--highlight:after {\n  background: #35495e; }\n\n.multiselect__option--disabled.multiselect__option--highlight {\n  background: #dedede; }\n\n.multiselect__option--group-selected.multiselect__option--highlight {\n  background: #ff6a6a;\n  color: #fff; }\n\n.multiselect__option--group-selected.multiselect__option--highlight:after {\n  background: #ff6a6a;\n  content: attr(data-deselect);\n  color: #fff; }\n\n.multiselect-enter-active, .multiselect-leave-active {\n  transition: all .15s ease; }\n\n.multiselect-enter, .multiselect-leave-active {\n  opacity: 0; }\n\n.multiselect__strong {\n  margin-bottom: 8px;\n  line-height: 20px;\n  display: inline-block;\n  vertical-align: top; }\n\n[dir=rtl] .multiselect {\n  text-align: right; }\n\n[dir=rtl] .multiselect__select {\n  right: auto;\n  left: 1px; }\n\n[dir=rtl] .multiselect__tags {\n  padding: 8px 8px 0 40px; }\n\n[dir=rtl] .multiselect__content {\n  text-align: right; }\n\n[dir=rtl] .multiselect__option:after {\n  right: auto;\n  left: 0; }\n\n[dir=rtl] .multiselect__clear {\n  right: auto;\n  left: 12px; }\n\n[dir=rtl] .multiselect__spinner {\n  right: auto;\n  left: 1px; }\n\n@keyframes spinning {\n  0% {\n    transform: rotate(0); }\n  to {\n    transform: rotate(2turn); } }\n\n.select.multiselect {\n  height: auto;\n  min-height: 2.75rem; }\n  .select.multiselect:after {\n    box-sizing: border-box;\n    top: 1.525rem !important; }\n\n.multiselect {\n  color: theme(\"colors.grey.700\");\n  font-size: theme(\"fontSize.sm\");\n  min-height: 2.75rem; }\n  .multiselect .multiselect__select {\n    display: none; }\n  .multiselect .multiselect__tags {\n    min-height: 2.75rem;\n    padding: 0.5rem 4rem 0 0.75rem;\n    border-color: theme(\"colors.grey.400\");\n    border-radius: theme(\"borderRadius.default\");\n    background-color: theme(\"colors.white\");\n    display: flex;\n    align-items: center; }\n    .multiselect .multiselect__tags:hover {\n      border-color: theme(\"colors.grey.500\"); }\n    .multiselect .multiselect__tags .multiselect__tags-wrap {\n      flex-wrap: wrap;\n      display: inline-flex; }\n      .multiselect .multiselect__tags .multiselect__tags-wrap .multiselect__tag {\n        margin: 0 0.5rem 0.5rem 0;\n        color: theme(\"colors.grey.700\");\n        background-color: theme(\"colors.grey.400\"); }\n        .multiselect .multiselect__tags .multiselect__tags-wrap .multiselect__tag .multiselect__tag-icon:after {\n          color: theme(\"colors.grey.700\"); }\n        .multiselect .multiselect__tags .multiselect__tags-wrap .multiselect__tag:hover .multiselect__tag-icon {\n          background-color: theme(\"colors.grey.600\"); }\n          .multiselect .multiselect__tags .multiselect__tags-wrap .multiselect__tag:hover .multiselect__tag-icon:after {\n            color: theme(\"colors.white\"); }\n    .multiselect .multiselect__tags .multiselect__input,\n    .multiselect .multiselect__tags .multiselect__single {\n      margin: 0;\n      padding: 0 0 0.5rem;\n      color: theme(\"colors.grey.700\");\n      font-size: theme(\"fontSize.sm\"); }\n  .multiselect .multiselect__content-wrapper {\n    border-color: theme(\"colors.grey.400\");\n    background-color: theme(\"colors.white\");\n    border-radius: 0 0 theme(\"borderRadius.default\") theme(\"borderRadius.default\"); }\n    .multiselect .multiselect__content-wrapper .multiselect__option:after {\n      background-color: transparent !important; }\n    .multiselect .multiselect__content-wrapper .multiselect__option.multiselect__option--highlight {\n      color: theme(\"colors.black\");\n      background-color: theme(\"colors.grey.400\"); }\n      .multiselect .multiselect__content-wrapper .multiselect__option.multiselect__option--highlight:after {\n        color: theme(\"colors.grey.700\"); }\n    .multiselect .multiselect__content-wrapper .multiselect__option.multiselect__option--selected {\n      color: theme(\"colors.grey.200\");\n      background-color: theme(\"colors.coral.500\"); }\n      .multiselect .multiselect__content-wrapper .multiselect__option.multiselect__option--selected:after {\n        color: theme(\"colors.grey.200\"); }\n      .multiselect .multiselect__content-wrapper .multiselect__option.multiselect__option--selected.multiselect__option--highlight {\n        color: theme(\"colors.white\");\n        background-color: theme(\"colors.coral.600\"); }\n        .multiselect .multiselect__content-wrapper .multiselect__option.multiselect__option--selected.multiselect__option--highlight:after {\n          color: theme(\"colors.white\"); }\n\n.table thead tr th.sort-handle,\n.table thead tr td.sort-handle,\n.table tbody tr th.sort-handle,\n.table tbody tr td.sort-handle {\n  cursor: grab;\n  text-align: center; }\n\n.table thead tr th.actions,\n.table thead tr td.actions,\n.table tbody tr th.actions,\n.table tbody tr td.actions {\n  text-align: center; }\n  .table thead tr th.actions a,\n  .table thead tr td.actions a,\n  .table tbody tr th.actions a,\n  .table tbody tr td.actions a {\n    color: theme(\"colors.grey.400\"); }\n\n.table thead tr.draft th,\n.table thead tr.draft td,\n.table tbody tr.draft th,\n.table tbody tr.draft td {\n  background-color: theme(\"colors.grey.300\"); }\n\n.table thead tr.draft:not(:hover) th,\n.table thead tr.draft:not(:hover) td,\n.table tbody tr.draft:not(:hover) th,\n.table tbody tr.draft:not(:hover) td {\n  color: theme(\"colors.grey.600\"); }\n\n.table thead tr:hover th.actions a,\n.table thead tr:hover td.actions a,\n.table tbody tr:hover th.actions a,\n.table tbody tr:hover td.actions a {\n  color: theme(\"colors.grey.700\"); }\n  .table thead tr:hover th.actions a:hover,\n  .table thead tr:hover td.actions a:hover,\n  .table tbody tr:hover th.actions a:hover,\n  .table tbody tr:hover td.actions a:hover {\n    color: theme(\"colors.coral.500\"); }\n\n.bg-gradient-login {\n  background-image: linear-gradient(to bottom, theme(\"colors.blue.600\") 0%, theme(\"colors.coral.800\") 80%, theme(\"colors.coral.700\") 100%); }\n\n.shadow-styled {\n  z-index: 1;\n  position: relative; }\n  .shadow-styled:after, .shadow-styled:before {\n    z-index: -1;\n    content: '';\n    height: 20px;\n    bottom: -15px;\n    filter: blur(2px);\n    position: absolute;\n    width: calc(50% - 7px); }\n  .shadow-styled:before {\n    left: 5px;\n    transform: skew(-25deg);\n    background: linear-gradient(-185deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 70%); }\n  .shadow-styled:after {\n    right: 5px;\n    transform: skew(25deg);\n    background: linear-gradient(185deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 70%); }\n\n.dashboard {\n  display: flex;\n  min-height: 100vh;\n  position: relative; }\n  .dashboard.show-side .side {\n    transform: translate3d(0, 0, 0); }\n\n.side {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 85%;\n  z-index: 10;\n  display: flex;\n  max-width: 22rem;\n  position: absolute;\n  flex-direction: column;\n  transition: all 180ms 0ms ease-out;\n  transform: translate3d(calc(-100% + 1.5rem), 0, 0); }\n  .side .side-header {\n    z-index: 20;\n    display: flex;\n    flex-shrink: 0;\n    position: relative;\n    align-items: center;\n    justify-content: space-between;\n    background: linear-gradient(to top, theme(\"colors.blue.800\") 0%, theme(\"colors.blue.700\") 30%, theme(\"colors.blue.700\") 100%); }\n  .side .side-content {\n    flex-grow: 1;\n    overflow: auto;\n    flex-direction: column; }\n\n@screen lg {\n  .side {\n    transform: translate3d(0, 0, 0); } }\n  .side .side-toggle {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 10;\n    width: 1.5rem;\n    position: absolute;\n    box-shadow: 6px 0 6px 3px rgba(0, 0, 0, 0.2); }\n    .side .side-toggle .dots {\n      top: 50%;\n      left: 50%;\n      position: absolute;\n      transform: translate(-50%, -50%); }\n      .side .side-toggle .dots i,\n      .side .side-toggle .dots i:before,\n      .side .side-toggle .dots i:after {\n        width: 4px;\n        height: 4px;\n        display: block;\n        border-radius: 4px;\n        background-color: theme(\"colors.blue.400\"); }\n      .side .side-toggle .dots i {\n        position: relative; }\n        .side .side-toggle .dots i:before, .side .side-toggle .dots i:after {\n          content: '';\n          position: absolute; }\n        .side .side-toggle .dots i:before {\n          transform: translateY(-10px); }\n        .side .side-toggle .dots i:after {\n          transform: translateY(10px); }\n\n.main {\n  flex-grow: 1;\n  transition: all 180ms 0ms ease-out; }\n\n@screen lg {\n  .main {\n    padding-left: 22rem; } }\n\n.dashboard-enter-active,\n.dashboard-leave-active {\n  transition: opacity 300ms; }\n\n.dashboard-enter,\n.dashboard-leave-to {\n  opacity: 0; }\n\n.side-enter-active,\n.main-enter-active {\n  transition: all 500ms 300ms ease; }\n\n.side-enter {\n  opacity: 0;\n  transform: translateX(-10%); }\n\n.main-enter {\n  opacity: 0;\n  transform: translateY(-10%); }\n\n@tailwind utilities;\n";
  styleInject(css);

  var Icons = {
    register() {
      fontawesomeSvgCore.library.add(freeSolidSvgIcons.faAngleDown, freeSolidSvgIcons.faAngleRight, freeSolidSvgIcons.faAngleUp, freeSolidSvgIcons.faCalendarAlt, freeSolidSvgIcons.faCog, freeSolidSvgIcons.faPencilAlt, freeSolidSvgIcons.faSignOutAlt, freeSolidSvgIcons.faSearch, freeSolidSvgIcons.faSort, freeSolidSvgIcons.faSortDown, freeSolidSvgIcons.faSortUp, freeSolidSvgIcons.faSpinner, freeSolidSvgIcons.faTrashAlt);
    }

  };

  var state = {
    isOpen: false
  };
  var getters = {
    isOpen: state => state.isOpen
  };
  var mutations = {
    open(state) {
      state.isOpen = true;
    },

    close(state) {
      state.isOpen = false;
    }

  };
  var actions = {
    open(_ref) {
      var {
        commit
      } = _ref;
      commit('open');
    },

    close(_ref2) {
      var {
        commit
      } = _ref2;
      commit('close');
    }

  };
  var alertStore = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  };

  var state$1 = {
    isOpen: false,
    item: {}
  };
  var getters$1 = {
    isOpen: state => state.isOpen,
    item: state => state.item
  };
  var mutations$1 = {
    setItem(state, item) {
      state.item = item;
    },

    open(state) {
      state.isOpen = true;
    },

    close(state) {
      state.isOpen = false;
    }

  };
  var actions$1 = {
    open(_ref) {
      var {
        commit
      } = _ref;
      var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      commit('setItem', item);
      commit('open');
    },

    close(_ref2) {
      var {
        commit
      } = _ref2;
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
    title: state => state.title,
    sideIsVisible: state => state.sideIsVisible
  };
  var mutations$2 = {
    setTitle(state, title) {
      state.title = title;
    },

    openSide(state) {
      state.sideIsVisible = true;
    },

    closeSide(state) {
      state.sideIsVisible = false;
    }

  };
  var actions$2 = {
    setTitle(_ref, title) {
      var {
        commit
      } = _ref;
      var appName = process.env.MIX_APP_NAME;
      commit('setTitle', title);
      document.title = "".concat(title, " | ").concat(appName ? appName + ' -' : '', " Optimus");
    },

    toggleSide(_ref2) {
      var {
        commit,
        state
      } = _ref2;

      if (state.sideIsVisible) {
        return commit('closeSide');
      }

      return commit('openSide');
    },

    closeSide(_ref3) {
      var {
        commit
      } = _ref3;
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

  const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

  var escapeStringRegexp = string => {
  	if (typeof string !== 'string') {
  		throw new TypeError('Expected a string');
  	}

  	return string.replace(matchOperatorsRegex, '\\$&');
  };

  const regexpCache = new Map();

  function makeRegexp(pattern, options) {
  	options = {
  		caseSensitive: false,
  		...options
  	};

  	const cacheKey = pattern + JSON.stringify(options);

  	if (regexpCache.has(cacheKey)) {
  		return regexpCache.get(cacheKey);
  	}

  	const negated = pattern[0] === '!';

  	if (negated) {
  		pattern = pattern.slice(1);
  	}

  	pattern = escapeStringRegexp(pattern).replace(/\\\*/g, '.*');

  	const regexp = new RegExp(`^${pattern}$`, options.caseSensitive ? '' : 'i');
  	regexp.negated = negated;
  	regexpCache.set(cacheKey, regexp);

  	return regexp;
  }

  var matcher = (inputs, patterns, options) => {
  	if (!(Array.isArray(inputs) && Array.isArray(patterns))) {
  		throw new TypeError(`Expected two arrays, got ${typeof inputs} ${typeof patterns}`);
  	}

  	if (patterns.length === 0) {
  		return inputs;
  	}

  	const firstNegated = patterns[0][0] === '!';

  	patterns = patterns.map(pattern => makeRegexp(pattern, options));

  	const result = [];

  	for (const input of inputs) {
  		// If first pattern is negated we include everything to match user expectation
  		let matches = firstNegated;

  		for (const pattern of patterns) {
  			if (pattern.test(input)) {
  				matches = !pattern.negated;
  			}
  		}

  		if (matches) {
  			result.push(input);
  		}
  	}

  	return result;
  };

  var isMatch = (input, pattern, options) => {
  	const regexp = makeRegexp(pattern, options);
  	const matches = regexp.test(input);
  	return regexp.negated ? !matches : matches;
  };
  matcher.isMatch = isMatch;

  var state$3 = {
    loading: []
  };
  var getters$3 = {
    isLoading: state => item => {
      if (typeof item === 'string') {
        if (item.match(/[*!]/)) {
          return state.loading.filter(load => {
            return matcher.isMatch(load, item);
          }).length > 0;
        }

        return state.loading.includes(item);
      }

      return state.loading.length > 0;
    }
  };
  var mutations$3 = {
    start(state, item) {
      state.loading = [...new Set([...state.loading, item])];
    },

    stop(state, item) {
      if (typeof item === 'string') {
        if (item.match(/[*!]/)) {
          state.loading = state.loading.filter(load => {
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
    start(_ref, item) {
      var {
        commit
      } = _ref;
      commit('start', item);
    },

    stop(_ref2) {
      var {
        commit
      } = _ref2;
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
    data: state => state.data
  };
  var mutations$4 = {
    startLoading(state) {
      state.isLoading = true;
    },

    stopLoading(state) {
      state.isLoading = false;
    },

    set(state, data) {
      state.data = data;
    },

    update(state, data) {
      state.data = _objectSpread2({}, state.data, {}, data);
    }

  };
  var actions$4 = {
    fetch(_ref) {
      var {
        commit,
        state
      } = _ref;

      if (!state.data && !state.isLoading) {
        commit('startLoading');
        return axios.get('/admin/api/user').then(response => {
          commit('set', response.data.data);
          commit('stopLoading');
        });
      }
    },

    update(_ref2, data) {
      var {
        commit
      } = _ref2;
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

  //
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
        default: () => {}
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
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "o-notification",
      { attrs: { "is-error": "" } },
      [
        _vm._l(_vm.errors, function(errorGroup) {
          return _vm._l(errorGroup, function(error, index) {
            return _c("p", { key: index }, [
              _vm._v("\n            " + _vm._s(error) + "\n        ")
            ])
          })
        })
      ],
      2
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Errors = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

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

    data() {
      return {
        newValue: this.value
      };
    },

    watch: {
      value(value) {
        this.newValue = value;
      },

      newValue(value) {
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

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "control" }, [
      _vm.type === "checkbox"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newValue,
                expression: "newValue"
              }
            ],
            staticClass: "checkbox",
            attrs: { id: _vm.id, name: _vm.id, type: "checkbox" },
            domProps: {
              value: _vm.checkedValue,
              checked: Array.isArray(_vm.newValue)
                ? _vm._i(_vm.newValue, _vm.checkedValue) > -1
                : _vm.newValue
            },
            on: {
              change: function($event) {
                var $$a = _vm.newValue,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false;
                if (Array.isArray($$a)) {
                  var $$v = _vm.checkedValue,
                    $$i = _vm._i($$a, $$v);
                  if ($$el.checked) {
                    $$i < 0 && (_vm.newValue = $$a.concat([$$v]));
                  } else {
                    $$i > -1 &&
                      (_vm.newValue = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)));
                  }
                } else {
                  _vm.newValue = $$c;
                }
              }
            }
          })
        : _vm.type === "radio"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newValue,
                expression: "newValue"
              }
            ],
            staticClass: "checkbox",
            attrs: { id: _vm.id, name: _vm.id, type: "radio" },
            domProps: {
              value: _vm.checkedValue,
              checked: _vm._q(_vm.newValue, _vm.checkedValue)
            },
            on: {
              change: function($event) {
                _vm.newValue = _vm.checkedValue;
              }
            }
          })
        : _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newValue,
                expression: "newValue"
              }
            ],
            staticClass: "checkbox",
            attrs: { id: _vm.id, name: _vm.id, type: _vm.type },
            domProps: { value: _vm.checkedValue, value: _vm.newValue },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.newValue = $event.target.value;
              }
            }
          }),
      _vm._v(" "),
      _c("label", { attrs: { for: _vm.id } }, [_vm._v(_vm._s(_vm.label))])
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Checkbox = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  //
  //
  //
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
        get() {
          return this.value;
        },

        set(value) {
          this.$emit('input', value);
        }

      }
    },
    watch: {
      value(value) {
        this.newValue = value;
      },

      newValue(value) {
        this.$emit('input', value);
      }

    }
  };

  /* script */
  const __vue_script__$2 = script$2;

  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(_vm.type === "textarea" ? _vm.type : "input", {
      tag: "component",
      class: _vm.type === "textarea" ? "textarea" : "input",
      attrs: { id: _vm.id, type: _vm.type, required: _vm.required },
      domProps: { value: _vm.newValue },
      on: {
        input: function($event) {
          _vm.newValue = $event.currentTarget.value;
        }
      }
    })
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = undefined;
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Input = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
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
  const __vue_script__$3 = script$3;

  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "field", class: { required: _vm.required } },
      [
        _vm.label
          ? _c("label", { staticClass: "label", attrs: { for: _vm.input } }, [
              _vm._v(_vm._s(_vm.label))
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "control" }, [_vm._t("default")], 2),
        _vm._v(" "),
        _vm.$slots.hasOwnProperty("help")
          ? _c("div", { staticClass: "help" }, [_vm._t("help")], 2)
          : _vm._e()
      ]
    )
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    const __vue_inject_styles__$3 = undefined;
    /* scoped */
    const __vue_scope_id__$3 = undefined;
    /* module identifier */
    const __vue_module_identifier__$3 = undefined;
    /* functional template */
    const __vue_is_functional_template__$3 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Field = normalizeComponent_1(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      undefined,
      undefined
    );

  //
  var script$4 = {
    mixins: [inputMixin]
  };

  /* script */
  const __vue_script__$4 = script$4;

  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "select w-full" }, [
      _c(
        "select",
        {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newValue,
              expression: "newValue"
            }
          ],
          attrs: { id: _vm.id, required: _vm.required },
          on: {
            change: function($event) {
              var $$selectedVal = Array.prototype.filter
                .call($event.target.options, function(o) {
                  return o.selected
                })
                .map(function(o) {
                  var val = "_value" in o ? o._value : o.value;
                  return val
                });
              _vm.newValue = $event.target.multiple
                ? $$selectedVal
                : $$selectedVal[0];
            }
          }
        },
        [_vm._t("default")],
        2
      )
    ])
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    const __vue_inject_styles__$4 = undefined;
    /* scoped */
    const __vue_scope_id__$4 = undefined;
    /* module identifier */
    const __vue_module_identifier__$4 = undefined;
    /* functional template */
    const __vue_is_functional_template__$4 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Select = normalizeComponent_1(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      undefined,
      undefined
    );

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var vueMultiselect_min = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i});},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=60)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(t,e,n){var i=n(49)("wks"),r=n(30),o=n(0).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i;},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t};},function(t,e,n){var i=n(0),r=n(10),o=n(8),s=n(6),u=n(11),a=function(t,e,n){var l,c,f,p,h=t&a.F,d=t&a.G,v=t&a.S,g=t&a.P,y=t&a.B,m=d?i:v?i[e]||(i[e]={}):(i[e]||{}).prototype,b=d?r:r[e]||(r[e]={}),_=b.prototype||(b.prototype={});d&&(n=e);for(l in n)c=!h&&m&&void 0!==m[l],f=(c?m:n)[l],p=y&&c?u(f,i):g&&"function"==typeof f?u(Function.call,f):f,m&&s(m,l,f,t&a.U),b[l]!=f&&o(b,l,p),g&&_[l]!=f&&(_[l]=f);};i.core=r,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a;},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},function(t,e){t.exports=function(t){return "object"==typeof t?null!==t:"function"==typeof t};},function(t,e,n){var i=n(0),r=n(8),o=n(12),s=n(30)("src"),u=Function.toString,a=(""+u).split("toString");n(10).inspectSource=function(t){return u.call(t)},(t.exports=function(t,e,n,u){var l="function"==typeof n;l&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(l&&(o(n,s)||r(n,s,t[e]?""+t[e]:a.join(String(e)))),t===i?t[e]=n:u?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)));})(Function.prototype,"toString",function(){return "function"==typeof this&&this[s]||u.call(this)});},function(t,e){t.exports=function(t){try{return !!t()}catch(t){return !0}};},function(t,e,n){var i=n(13),r=n(25);t.exports=n(4)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n);},function(t,e,n){var i=n(14);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}};},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)};},function(t,e,n){var i=n(2),r=n(41),o=n(29),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return "value"in n&&(t[e]=n.value),t};},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,e){t.exports={};},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,e,n){var i=n(7);t.exports=function(t,e){return !!t&&i(function(){e?t.call(null,function(){},1):t.call(null);})};},function(t,e,n){var i=n(23),r=n(16);t.exports=function(t){return i(r(t))};},function(t,e,n){var i=n(53),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0};},function(t,e,n){var i=n(11),r=n(23),o=n(28),s=n(19),u=n(64);t.exports=function(t,e){var n=1==t,a=2==t,l=3==t,c=4==t,f=6==t,p=5==t||f,h=e||u;return function(e,u,d){for(var v,g,y=o(e),m=r(y),b=i(u,d,3),_=s(m.length),x=0,w=n?h(e,_):a?h(e,0):void 0;_>x;x++)if((p||x in m)&&(v=m[x],g=b(v,x,y),t))if(n)w[x]=g;else if(g)switch(t){case 3:return !0;case 5:return v;case 6:return x;case 2:w.push(v);}else if(c)return !1;return f?-1:l||c?c:w}};},function(t,e,n){var i=n(5),r=n(0).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}};},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");},function(t,e,n){var i=n(9);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==i(t)?t.split(""):Object(t)};},function(t,e){t.exports=!1;},function(t,e){t.exports=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},function(t,e,n){var i=n(13).f,r=n(12),o=n(1)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e});};},function(t,e,n){var i=n(49)("keys"),r=n(30);t.exports=function(t){return i[t]||(i[t]=r(t))};},function(t,e,n){var i=n(16);t.exports=function(t){return Object(i(t))};},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")};},function(t,e){var n=0,i=Math.random();t.exports=function(t){return "Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))};},function(t,e,n){var i=n(0),r=n(12),o=n(9),s=n(67),u=n(29),a=n(7),l=n(77).f,c=n(45).f,f=n(13).f,p=n(51).trim,h=i.Number,d=h,v=h.prototype,g="Number"==o(n(44)(v)),y="trim"in String.prototype,m=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return +e}for(var s,a=e.slice(2),l=0,c=a.length;l<c;l++)if((s=a.charCodeAt(l))<48||s>r)return NaN;return parseInt(a,i)}}return +e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?a(function(){v.valueOf.call(n);}):"Number"!=o(n))?s(new d(m(e)),n,h):m(e)};for(var b,_=n(4)?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)r(d,b=_[x])&&!r(h,b)&&f(h,b,c(d,b));h.prototype=v,v.constructor=h,n(6)(i,"Number",h);}},function(t,e,n){function i(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function r(t){return function(){return !t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,i){return t.filter(function(t){return o(i(t,n),e)})}function u(t){return t.filter(function(t){return !t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,i){return i[t]&&i[t].length?(n.push({$groupLabel:i[e],$isLabel:!0}),n.concat(i[t])):n},[])}}function l(t,e,i,r,o){return function(u){return u.map(function(u){var a;if(!u[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[i],t,e,o);return l.length?(a={},n.i(d.a)(a,r,u[r]),n.i(d.a)(a,i,l),a):[]})}}var c=n(59),f=n(54),p=(n.n(f),n(95)),h=(n.n(p),n(31)),d=(n.n(h),n(58)),v=n(91),g=(n.n(v),n(98)),y=(n.n(g),n(92)),m=(n.n(y),n(88)),b=(n.n(m),n(97)),_=(n.n(b),n(89)),x=(n.n(_),n(96)),w=(n.n(x),n(93)),S=(n.n(w),n(90)),O=(n.n(S),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return {search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return []}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return i(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return []}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0]);},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(r(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return (this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null));},search:function(){this.$emit("search-change",this.search,this.id);}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return O(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return O(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t;},isExistingOption:function(t){return !!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return !!t.$isDisabled},getOptionLabel:function(t){if(i(t))return "";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return i(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.$emit("select",t,this.id),this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.clearOnSelect&&(this.search="");}this.closeOnSelect&&this.deactivate();}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n)if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var i=this.internalValue.filter(function(t){return -1===n[e.groupValues].indexOf(t)});this.$emit("input",i,this.id);}else{var r=n[this.groupValues].filter(function(t){return !(e.isOptionDisabled(t)||e.isSelected(t))});this.$emit("select",r,this.id),this.$emit("input",this.internalValue.concat(r),this.id);}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.$emit("remove",t,this.id),this.multiple){var r=this.internalValue.slice(0,i).concat(this.internalValue.slice(i+1));this.$emit("input",r,this.id);}else this.$emit("input",null,this.id);this.closeOnSelect&&e&&this.deactivate();}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1);},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return t.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id));},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id));},toggle:function(){this.isOpen?this.deactivate():this.activate();},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight));}}}};},function(t,e,n){var i=n(54),r=(n.n(i),n(31));n.n(r);e.a={data:function(){return {pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust();},isOpen:function(){this.pointerDirty=!1;}},methods:{optionHighlight:function(t,e){return {"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return ["multiselect__option--group","multiselect__option--disabled"];var i=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return i&&!this.wholeGroupDisabled(i)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(i)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset();},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0;},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0;},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0));},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward();},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0;}}};},function(t,e,n){var i=n(36),r=n(74),o=n(15),s=n(18);t.exports=n(72)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e;},function(){var t=this._t,e=this._k,n=this._i++;return !t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries");},function(t,e,n){var i=n(31),r=(n.n(i),n(32)),o=n(33);e.a={name:"vue-multiselect",mixins:[r.a,o.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return "and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{isSingleLabelVisible:function(){return (this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return !(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.searchable||this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return "above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}};},function(t,e,n){var i=n(1)("unscopables"),r=Array.prototype;void 0==r[i]&&n(8)(r,i,{}),t.exports=function(t){r[i][t]=!0;};},function(t,e,n){var i=n(18),r=n(19),o=n(85);t.exports=function(t){return function(e,n,s){var u,a=i(e),l=r(a.length),c=o(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return !0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return !t&&-1}};},function(t,e,n){var i=n(9),r=n(1)("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(u=i(e))&&"function"==typeof e.callee?"Arguments":u};},function(t,e,n){var i=n(2);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};},function(t,e,n){var i=n(0).document;t.exports=i&&i.documentElement;},function(t,e,n){t.exports=!n(4)&&!n(7)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a});},function(t,e,n){var i=n(9);t.exports=Array.isArray||function(t){return "Array"==i(t)};},function(t,e,n){function i(t){var e,n;this.promise=new t(function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i;}),this.resolve=r(e),this.reject=r(n);}var r=n(14);t.exports.f=function(t){return new i(t)};},function(t,e,n){var i=n(2),r=n(76),o=n(22),s=n(27)("IE_PROTO"),u=function(){},a=function(){var t,e=n(21)("iframe"),i=o.length;for(e.style.display="none",n(40).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;i--;)delete a.prototype[o[i]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=i(t),n=new u,u.prototype=null,n[s]=t):n=a(),void 0===e?n:r(n,e)};},function(t,e,n){var i=n(79),r=n(25),o=n(18),s=n(29),u=n(12),a=n(41),l=Object.getOwnPropertyDescriptor;e.f=n(4)?l:function(t,e){if(t=o(t),e=s(e,!0),a)try{return l(t,e)}catch(t){}if(u(t,e))return r(!i.f.call(t,e),t[e])};},function(t,e,n){var i=n(12),r=n(18),o=n(37)(!1),s=n(27)("IE_PROTO");t.exports=function(t,e){var n,u=r(t),a=0,l=[];for(n in u)n!=s&&i(u,n)&&l.push(n);for(;e.length>a;)i(u,n=e[a++])&&(~o(l,n)||l.push(n));return l};},function(t,e,n){var i=n(46),r=n(22);t.exports=Object.keys||function(t){return i(t,r)};},function(t,e,n){var i=n(2),r=n(5),o=n(43);t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t);return (0, n.resolve)(e),n.promise};},function(t,e,n){var i=n(10),r=n(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(24)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});},function(t,e,n){var i=n(2),r=n(14),o=n(1)("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)};},function(t,e,n){var i=n(3),r=n(16),o=n(7),s=n(84),u="["+s+"]",a="​",l=RegExp("^"+u+u+"*"),c=RegExp(u+u+"*$"),f=function(t,e,n){var r={},u=o(function(){return !!s[t]()||a[t]()!=a}),l=r[t]=u?e(p):s[t];n&&(r[n]=l),i(i.P+i.F*u,"String",r);},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=f;},function(t,e,n){var i,r,o,s=n(11),u=n(68),a=n(40),l=n(21),c=n(0),f=c.process,p=c.setImmediate,h=c.clearImmediate,d=c.MessageChannel,v=c.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e();}},b=function(t){m.call(t.data);};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++g]=function(){u("function"==typeof t?t:Function(t),e);},i(g),g},h=function(t){delete y[t];},"process"==n(9)(f)?i=function(t){f.nextTick(s(m,t,1));}:v&&v.now?i=function(t){v.now(s(m,t,1));}:d?(r=new d,o=r.port2,r.port1.onmessage=b,i=s(o.postMessage,o,1)):c.addEventListener&&"function"==typeof postMessage&&!c.importScripts?(i=function(t){c.postMessage(t+"","*");},c.addEventListener("message",b,!1)):i="onreadystatechange"in l("script")?function(t){a.appendChild(l("script")).onreadystatechange=function(){a.removeChild(this),m.call(t);};}:function(t){setTimeout(s(m,t,1),0);}),t.exports={set:p,clear:h};},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)};},function(t,e,n){var i=n(3),r=n(20)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1;}),i(i.P+i.F*o,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(36)("find");},function(t,e,n){var i,r,o,s,u=n(24),a=n(0),l=n(11),c=n(38),f=n(3),p=n(5),h=n(14),d=n(61),v=n(66),g=n(50),y=n(52).set,m=n(75)(),b=n(43),_=n(80),x=n(86),w=n(48),S=a.TypeError,O=a.process,L=O&&O.versions,k=L&&L.v8||"",P=a.Promise,T="process"==c(O),V=function(){},E=r=b.f,A=!!function(){try{var t=P.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(V,V);};return (T||"function"==typeof PromiseRejectionEvent)&&t.then(V)instanceof e&&0!==k.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),C=function(t){var e;return !(!p(t)||"function"!=typeof(e=t.then))&&e},D=function(t,e){if(!t._n){t._n=!0;var n=t._c;m(function(){for(var i=t._v,r=1==t._s,o=0;n.length>o;)!function(e){var n,o,s,u=r?e.ok:e.fail,a=e.resolve,l=e.reject,c=e.domain;try{u?(r||(2==t._h&&$(t),t._h=1),!0===u?n=i:(c&&c.enter(),n=u(i),c&&(c.exit(),s=!0)),n===e.promise?l(S("Promise-chain cycle")):(o=C(n))?o.call(n,a,l):a(n)):l(i);}catch(t){c&&!s&&c.exit(),l(t);}}(n[o++]);t._c=[],t._n=!1,e&&!t._h&&j(t);});}},j=function(t){y.call(a,function(){var e,n,i,r=t._v,o=N(t);if(o&&(e=_(function(){T?O.emit("unhandledRejection",r,t):(n=a.onunhandledrejection)?n({promise:t,reason:r}):(i=a.console)&&i.error&&i.error("Unhandled promise rejection",r);}),t._h=T||N(t)?2:1),t._a=void 0,o&&e.e)throw e.v});},N=function(t){return 1!==t._h&&0===(t._a||t._c).length},$=function(t){y.call(a,function(){var e;T?O.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v});});},F=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),D(e,!0));},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=C(t))?m(function(){var i={_w:n,_d:!1};try{e.call(t,l(M,i,1),l(F,i,1));}catch(t){F.call(i,t);}}):(n._v=t,n._s=1,D(n,!1));}catch(t){F.call({_w:n,_d:!1},t);}}};A||(P=function(t){d(this,P,"Promise","_h"),h(t),i.call(this);try{t(l(M,this,1),l(F,this,1));}catch(t){F.call(this,t);}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1;},i.prototype=n(81)(P.prototype,{then:function(t,e){var n=E(g(this,P));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&D(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=l(M,t,1),this.reject=l(F,t,1);},b.f=E=function(t){return t===P||t===s?new o(t):r(t)}),f(f.G+f.W+f.F*!A,{Promise:P}),n(26)(P,"Promise"),n(83)("Promise"),s=n(10).Promise,f(f.S+f.F*!A,"Promise",{reject:function(t){var e=E(this);return (0, e.reject)(t),e.promise}}),f(f.S+f.F*(u||!A),"Promise",{resolve:function(t){return w(u&&this===s?P:this,t)}}),f(f.S+f.F*!(A&&n(73)(function(t){P.all(t).catch(V);})),"Promise",{all:function(t){var e=this,n=E(e),i=n.resolve,r=n.reject,o=_(function(){var n=[],o=0,s=1;v(t,!1,function(t){var u=o++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[u]=t,--s||i(n));},r);}),--s||i(n);});return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=E(e),i=n.reject,r=_(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,i);});});return r.e&&i(r.v),n.promise}});},function(t,e,n){var i=n(3),r=n(10),o=n(0),s=n(50),u=n(48);i(i.P+i.R,"Promise",{finally:function(t){var e=s(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}});},function(t,e,n){function i(t){n(99);}var r=n(35),o=n(101),s=n(100),u=i,a=s(r.a,o.a,!1,u,null,null);e.a=a.exports;},function(t,e,n){function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=i;},function(t,e,n){function i(t){return (i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return (r="function"==typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}e.a=r;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),r=(n.n(i),n(55)),o=(n.n(r),n(56)),s=(n.n(o),n(57)),u=n(32),a=n(33);n.d(e,"Multiselect",function(){return s.a}),n.d(e,"multiselectMixin",function(){return u.a}),n.d(e,"pointerMixin",function(){return a.a}),e.default=s.a;},function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t};},function(t,e,n){var i=n(14),r=n(28),o=n(23),s=n(19);t.exports=function(t,e,n,u,a){i(e);var l=r(t),c=o(l),f=s(l.length),p=a?f-1:0,h=a?-1:1;if(n<2)for(;;){if(p in c){u=c[p],p+=h;break}if(p+=h,a?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;a?p>=0:f>p;p+=h)p in c&&(u=e(u,c[p],p,l));return u};},function(t,e,n){var i=n(5),r=n(42),o=n(1)("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e};},function(t,e,n){var i=n(63);t.exports=function(t,e){return new(i(t))(e)};},function(t,e,n){var i=n(8),r=n(6),o=n(7),s=n(16),u=n(1);t.exports=function(t,e,n){var a=u(t),l=n(s,a,""[t]),c=l[0],f=l[1];o(function(){var e={};return e[a]=function(){return 7},7!=""[t](e)})&&(r(String.prototype,t,c),i(RegExp.prototype,a,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}));};},function(t,e,n){var i=n(11),r=n(70),o=n(69),s=n(2),u=n(19),a=n(87),l={},c={},e=t.exports=function(t,e,n,f,p){var h,d,v,g,y=p?function(){return t}:a(t),m=i(n,f,e?2:1),b=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(h=u(t.length);h>b;b++)if((g=e?m(s(d=t[b])[0],d[1]):m(t[b]))===l||g===c)return g}else for(v=y.call(t);!(d=v.next()).done;)if((g=r(v,m,d.value,e))===l||g===c)return g};e.BREAK=l,e.RETURN=c;},function(t,e,n){var i=n(5),r=n(82).set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t};},function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)};},function(t,e,n){var i=n(15),r=n(1)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)};},function(t,e,n){var i=n(2);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}};},function(t,e,n){var i=n(44),r=n(25),o=n(26),s={};n(8)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator");};},function(t,e,n){var i=n(24),r=n(3),o=n(6),s=n(8),u=n(15),a=n(71),l=n(26),c=n(78),f=n(1)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,d,v,g,y){a(n,e,d);var m,b,_,x=function(t){if(!p&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",S="values"==v,O=!1,L=t.prototype,k=L[f]||L["@@iterator"]||v&&L[v],P=k||x(v),T=v?S?x("entries"):P:void 0,V="Array"==e?L.entries||k:k;if(V&&(_=c(V.call(new t)))!==Object.prototype&&_.next&&(l(_,w,!0),i||"function"==typeof _[f]||s(_,f,h)),S&&k&&"values"!==k.name&&(O=!0,P=function(){return k.call(this)}),i&&!y||!p&&!O&&L[f]||s(L,f,P),u[e]=P,u[w]=h,v)if(m={values:S?P:x("values"),keys:g?P:x("keys"),entries:T},y)for(b in m)b in L||o(L,b,m[b]);else r(r.P+r.F*(p||O),e,m);return m};},function(t,e,n){var i=n(1)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0;},Array.from(o,function(){throw 2});}catch(t){}t.exports=function(t,e){if(!e&&!r)return !1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return {done:n=!0}},o[i]=function(){return s},t(o);}catch(t){}return n};},function(t,e){t.exports=function(t,e){return {value:e,done:!!t}};},function(t,e,n){var i=n(0),r=n(52).set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,u=i.Promise,a="process"==n(9)(s);t.exports=function(){var t,e,n,l=function(){var i,r;for(a&&(i=s.domain)&&i.exit();t;){r=t.fn,t=t.next;try{r();}catch(i){throw t?n():e=void 0,i}}e=void 0,i&&i.enter();};if(a)n=function(){s.nextTick(l);};else if(!o||i.navigator&&i.navigator.standalone)if(u&&u.resolve){var c=u.resolve(void 0);n=function(){c.then(l);};}else n=function(){r.call(i,l);};else{var f=!0,p=document.createTextNode("");new o(l).observe(p,{characterData:!0}),n=function(){p.data=f=!f;};}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r;}};},function(t,e,n){var i=n(13),r=n(2),o=n(47);t.exports=n(4)?Object.defineProperties:function(t,e){r(t);for(var n,s=o(e),u=s.length,a=0;u>a;)i.f(t,n=s[a++],e[n]);return t};},function(t,e,n){var i=n(46),r=n(22).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)};},function(t,e,n){var i=n(12),r=n(28),o=n(27)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null};},function(t,e){e.f={}.propertyIsEnumerable;},function(t,e){t.exports=function(t){try{return {e:!1,v:t()}}catch(t){return {e:!0,v:t}}};},function(t,e,n){var i=n(6);t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t};},function(t,e,n){var i=n(5),r=n(2),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(11)(Function.call,n(45).f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array);}catch(t){e=!0;}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o};},function(t,e,n){var i=n(0),r=n(13),o=n(4),s=n(1)("species");t.exports=function(t){var e=i[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}});};},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";},function(t,e,n){var i=n(53),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)};},function(t,e,n){var i=n(0),r=i.navigator;t.exports=r&&r.userAgent||"";},function(t,e,n){var i=n(38),r=n(1)("iterator"),o=n(15);t.exports=n(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]};},function(t,e,n){var i=n(3),r=n(20)(2);i(i.P+i.F*!n(17)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}});},function(t,e,n){var i=n(3),r=n(37)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(s||!n(17)(o)),"Array",{indexOf:function(t){return s?o.apply(this,arguments)||0:r(this,t,arguments[1])}});},function(t,e,n){var i=n(3);i(i.S,"Array",{isArray:n(42)});},function(t,e,n){var i=n(3),r=n(20)(1);i(i.P+i.F*!n(17)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}});},function(t,e,n){var i=n(3),r=n(62);i(i.P+i.F*!n(17)([].reduce,!0),"Array",{reduce:function(t){return r(this,t,arguments.length,arguments[1],!1)}});},function(t,e,n){var i=Date.prototype,r=i.toString,o=i.getTime;new Date(NaN)+""!="Invalid Date"&&n(6)(i,"toString",function(){var t=o.call(this);return t===t?r.call(this):"Invalid Date"});},function(t,e,n){n(4)&&"g"!=/./g.flags&&n(13).f(RegExp.prototype,"flags",{configurable:!0,get:n(39)});},function(t,e,n){n(65)("search",1,function(t,e,n){return [function(n){var i=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},n]});},function(t,e,n){n(94);var i=n(2),r=n(39),o=n(4),s=/./.toString,u=function(t){n(6)(RegExp.prototype,"toString",t,!0);};n(7)(function(){return "/a/b"!=s.call({source:"a",flags:"b"})})?u(function(){var t=i(this);return "/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=s.name&&u(function(){return s.call(this)});},function(t,e,n){n(51)("trim",function(t){return function(){return t(this,3)}});},function(t,e,n){for(var i=n(34),r=n(47),o=n(6),s=n(0),u=n(8),a=n(15),l=n(1),c=l("iterator"),f=l("toStringTag"),p=a.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(h),v=0;v<d.length;v++){var g,y=d[v],m=h[y],b=s[y],_=b&&b.prototype;if(_&&(_[c]||u(_,c,p),_[f]||u(_,f,y),a[y]=p,m))for(g in i)_[g]||o(_,g,i[g],!0);}},function(t,e){},function(t,e){t.exports=function(t,e,n,i,r,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o);},l._ssrRegister=c):i&&(c=i),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c];}return {esModule:s,exports:u,options:l}};},function(t,e,n){var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove},attrs:{tabindex:t.searchable?-1:t.tabindex},on:{focus:function(e){t.activate();},blur:function(e){!t.searchable&&t.deactivate();},keydown:[function(e){return "button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerForward()):null},function(e){return "button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?e.target!==e.currentTarget?null:(e.preventDefault(),void t.pointerBackward()):null}],keypress:function(e){return "button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate();}}},[t._t("caret",[n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggle();}}})],{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,i){return [t._t("tag",[n("span",{key:i,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(n){if(!("button"in n)&&t._k(n.keyCode,"enter",13,n.key,"Enter"))return null;n.preventDefault(),t.removeElement(e);},mousedown:function(n){n.preventDefault(),t.removeElement(e);}}})])],{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",[n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})])]:t._e()],{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"nope",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex},domProps:{value:t.search},on:{input:function(e){t.updateSearch(e.target.value);},focus:function(e){e.preventDefault(),t.activate();},blur:function(e){e.preventDefault(),t.deactivate();},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key,"Escape"))return null;t.deactivate();},keydown:[function(e){if(!("button"in e)&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;e.preventDefault(),t.pointerForward();},function(e){if(!("button"in e)&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;e.preventDefault(),t.pointerBackward();},function(e){if(!("button"in e)&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"]))return null;e.stopPropagation(),t.removeLastElement();}],keypress:function(e){return "button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:void t.addPointerElement(e)):null}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("singleLabel",[[t._v(t._s(t.currentOptionLabel))]],{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("placeholder",[t._v("\n          "+t._s(t.placeholder)+"\n        ")])],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault();}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",[t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")])],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,i){return n("li",{key:i,staticClass:"multiselect__element"},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(i,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){n.stopPropagation(),t.select(e);},mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.pointerSet(i);}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(i,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(i);},mousedown:function(n){n.preventDefault(),t.selectGroup(e);}}},[t._t("option",[n("span",[t._v(t._s(t.getOptionLabel(e)))])],{option:e,search:t.search})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",[t._v("No elements found. Consider changing the search query.")],{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&0===t.options.length&&!t.search&&!t.loading,expression:"showNoOptions && (options.length === 0 && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",[t._v("List is empty.")])],2)]),t._v(" "),t._t("afterList")],2)])])],2)},r=[],o={render:i,staticRenderFns:r};e.a=o;}])});
  });

  var VueSelect = unwrapExports(vueMultiselect_min);
  var vueMultiselect_min_1 = vueMultiselect_min.VueMultiselect;

  //
  var script$5 = {
    components: {
      VueSelect
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
      newValue() {
        if (!this.options.length) {
          return [];
        }

        var optionValues = this.options.map(option => {
          return option[this.optionValue];
        });
        return this.value.filter(value => optionValues.includes(value));
      }

    },
    methods: {
      label(value) {
        var option = this.options.find(option => {
          return option[this.optionValue] === value;
        });
        return option ? option[this.optionLabel] : false;
      }

    }
  };

  /* script */
  const __vue_script__$5 = script$5;

  /* template */
  var __vue_render__$5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { staticClass: "select w-full multiselect" },
      [
        _c("vue-select", {
          attrs: {
            value: _vm.newValue,
            options: _vm.options.map(function(option) {
              return option[_vm.optionValue]
            }),
            multiple: true,
            "custom-label": _vm.label
          },
          on: {
            input: function(value) {
              return _vm.$emit("input", value)
            }
          }
        })
      ],
      1
    )
  };
  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;

    /* style */
    const __vue_inject_styles__$5 = undefined;
    /* scoped */
    const __vue_scope_id__$5 = undefined;
    /* module identifier */
    const __vue_module_identifier__$5 = undefined;
    /* functional template */
    const __vue_is_functional_template__$5 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var MultiSelect = normalizeComponent_1(
      { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
      __vue_inject_styles__$5,
      __vue_script__$5,
      __vue_scope_id__$5,
      __vue_is_functional_template__$5,
      __vue_module_identifier__$5,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

    data() {
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
      item(item) {
        this.form = {
          title: item.title,
          description: item.description,
          og_title: item.og_title,
          og_description: item.og_description,
          og_image_id: item.og_image ? item.og_image.id : null,
          additional_tags: item.custom_tags
        };
        this.og_image = item.og_image;
      },

      form: {
        handler(form) {
          this.$emit('input', form);
        },

        deep: true
      }
    }
  };

  /* script */
  const __vue_script__$6 = script$6;

  /* template */
  var __vue_render__$6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _c(
          "o-form-field",
          { attrs: { input: "meta_title", label: "Meta Title" } },
          [
            _c("o-input", {
              attrs: { id: "meta_title" },
              model: {
                value: _vm.form.title,
                callback: function($$v) {
                  _vm.$set(_vm.form, "title", $$v);
                },
                expression: "form.title"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "o-form-field",
          { attrs: { input: "meta_description", label: "Meta Description" } },
          [
            _c("o-input", {
              attrs: { id: "meta_description" },
              model: {
                value: _vm.form.description,
                callback: function($$v) {
                  _vm.$set(_vm.form, "description", $$v);
                },
                expression: "form.description"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "o-form-field",
          { attrs: { input: "meta_og_title", label: "OG Title" } },
          [
            _c("o-input", {
              attrs: { id: "meta_og_title" },
              model: {
                value: _vm.form.og_title,
                callback: function($$v) {
                  _vm.$set(_vm.form, "og_title", $$v);
                },
                expression: "form.og_title"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "o-form-field",
          { attrs: { input: "meta_og_description", label: "OG Description" } },
          [
            _c("o-input", {
              attrs: { id: "meta_og_description" },
              model: {
                value: _vm.form.og_description,
                callback: function($$v) {
                  _vm.$set(_vm.form, "og_description", $$v);
                },
                expression: "form.og_description"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "o-form-field",
          { attrs: { input: "meta_og_image", label: "OG Image" } },
          [
            _c("media-picker", {
              attrs: {
                id: "meta_og_image",
                media: _vm.og_image,
                preview: "",
                "accepted-extensions": "image"
              },
              model: {
                value: _vm.form.og_image_id,
                callback: function($$v) {
                  _vm.$set(_vm.form, "og_image_id", $$v);
                },
                expression: "form.og_image_id"
              }
            }),
            _vm._v(" "),
            _c("template", { slot: "help" }, [
              _vm._v(
                "\n            This image will be resized to 1200x630px\n        "
              )
            ])
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "o-form-field",
          { attrs: { input: "meta_custom_tags", label: "Custom Tags" } },
          [
            _c("o-input", {
              attrs: { id: "meta_custom_tags", type: "textarea" },
              model: {
                value: _vm.form.additional_tags,
                callback: function($$v) {
                  _vm.$set(_vm.form, "additional_tags", $$v);
                },
                expression: "form.additional_tags"
              }
            })
          ],
          1
        )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;

    /* style */
    const __vue_inject_styles__$6 = undefined;
    /* scoped */
    const __vue_scope_id__$6 = undefined;
    /* module identifier */
    const __vue_module_identifier__$6 = undefined;
    /* functional template */
    const __vue_is_functional_template__$6 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var MetaFields = normalizeComponent_1(
      { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
      __vue_inject_styles__$6,
      __vue_script__$6,
      __vue_scope_id__$6,
      __vue_is_functional_template__$6,
      __vue_module_identifier__$6,
      undefined,
      undefined
    );

  /* script */

  /* template */
  var __vue_render__$7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "svg",
      {
        staticClass: "inline-flex max-w-full h-auto",
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          width: "490",
          viewBox: "0 0 490 403"
        }
      },
      [
        _c(
          "defs",
          [
            _c(
              "linearGradient",
              {
                attrs: {
                  id: "a",
                  x1: ".5",
                  x2: ".5",
                  y2: "1",
                  gradientUnits: "objectBoundingBox"
                }
              },
              [
                _c("stop", { attrs: { offset: "0", "stop-color": "#9b9b9b" } }),
                _vm._v(" "),
                _c("stop", { attrs: { offset: "1", "stop-color": "#a9a9a9" } })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M266.715 401.254s-65.363-71.139 2.3-128.4c0 0 6.185-5.826 17.571-4.424s128.862 20.574 188.792-37.115c0 0 14.441-11.541 13.48-27.879s-15.413-26.223-27.694-28.3-89.028-7.765-145-57.043c0 0-1.849-1.913 0-5.392s6.2-25.024-13.343-51.3S245.659 0 169.929 0 0 53.013 0 184s99.344 178.964 104.865 182.493 77.329 45.471 161.85 34.761z",
            fill: "#393939"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M409.09 231.351h-1.18c-24.533-.107-46.56-5.258-69.879-10.713-21.512-5.034-43.756-10.236-70.449-12.244a54.225 54.225 0 0 0 13.961-17.75 53.376 53.376 0 0 0 5.574-21.511c.423-9.4-1.569-19.27-5.921-29.336-.01-.017-.967-1.743-.3-2.984a3.028 3.028 0 0 1 2.668-1.268l.48-.033c4.4-.3 7.3-.5 11.848-3.6 2.112-1.431 3.419-2.018 4.511-2.018 1.126 0 1.968.625 3.241 1.57.2.145.4.3.617.455l.067.049a340.442 340.442 0 0 0 37.617 23.345 314.334 314.334 0 0 0 36.188 16.7 212.053 212.053 0 0 0 41.758 11.588c53.815 8.648 53.5 11.373 52.348 21.514-.086.755-.175 1.534-.248 2.366-.588 6.694-5.643 12.381-14.62 16.449-10.87 4.923-27.114 7.42-48.281 7.421zm-95.391-70.557a7.535 7.535 0 0 0-5.022 2.011c-2.1 1.83-3.011 3.714-2.7 5.6.711 4.357 7.739 7.318 7.81 7.348a30.5 30.5 0 0 0 11.2 2.476 18.924 18.924 0 0 0 1.986-.1c1.53-.161 2.466-.679 2.783-1.538.813-2.207-2.747-5.992-2.783-6.03-.071-.102-6.463-9.767-13.274-9.767z",
            fill: "#8b8b8b"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M276.391 243.626c7.455 14.8 82.932 24.335 146.147 3.8 0 0 2.98-3.055 0-3.8s-23.641 3.273-67.83-7.557-63.38-12.806-76.323-13.224-9.449 5.979-1.994 20.781z",
            fill: "#7e7e7e"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M278.808 1132.409c2.07.9 81.377 43.952 81.377 43.952s51.109 29.8 95.827 16.121 69.742-30.519 69.742-30.519-8.755 13.511-23.287 21-29.945 27.821-30.668 37.619 3.208-5.007 21.176-16.709 14.31-6.888 14.239-4.821.645 19.142 6.669 26.681 3.81 6.569 1.66 8.276-30.008 23.967-35.331 59.81 9.756 65.22 9.756 65.22.534 1.5-2.028 1.277-224.925-13.457-211.84-225.076c0-.001.639-3.74 2.708-2.831z",
            transform: "translate(-257.832 -974.405)",
            fill: "url(#a)"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M152.677 368.291a250.6 250.6 0 0 1-48.99-24.393 205.914 205.914 0 0 1-23.623-17.854 184.148 184.148 0 0 1-21.455-22.271 174.636 174.636 0 0 1-18.1-27.172 181.145 181.145 0 0 1-13.545-32.558 208.462 208.462 0 0 1-7.811-38.427 263.719 263.719 0 0 1-.884-44.782c.005-.03.527-2.971 2.086-2.971a1.558 1.558 0 0 1 .622.141c1.108.484 24.64 13.206 44.195 23.794a158.613 158.613 0 0 0-.264 28.437 196.184 196.184 0 0 0 8.8 44.7 222.226 222.226 0 0 0 26.408 54.755 259.726 259.726 0 0 0 22.48 29.209 304.769 304.769 0 0 0 30.086 29.393z",
            fill: "#7e7e7e"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M272.548 166.383s-3.468-28.768-17.326-28.153-16.7 15.224-38.084 19.226-35.29-8.417-43.792-23.676-19.261-25.88-42.867-21.6 5.685-11.922 23.49-14.854 30.692-2.573 52.247 6.753 72.874 26.449 85.889 6.493-11.423-49.948-31.033-64.268-42.922-28.464-87.726-28.583-125.858 22.083-150.65 117.45c0 0 70.667 42.027 107.784 57.046s74.389 17.554 142.068-25.834z",
            fill: "#c3c3c3"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M222.796 239.903a71.817 71.817 0 0 1 25.367-18.27s1.865-.518 1.556 2.338-.625 17.685 9.792 32.4c0 0 1.576.913-.693 2.688s-11.944 9.87-17.839 17.584c0-.004-17.29-18.791-18.183-36.74z",
            fill: "#7e7e7e"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M210.479 142.511c-13.72-.181-21.934-6.95-24.462-19.317-.9-4.333 1.173-6.95 5.6-7.041 5.145-.09 7.763 2.076 8.846 7.131 1.173 5.506 3.43 10.2 9.478 11.915 5.867 1.715 10.29-.451 13.811-4.965 1.535-1.986 2.437-1.083 3.25.361 1.444 2.708.361 4.965-1.715 6.77a20.432 20.432 0 0 1-14.808 5.146z",
            fill: "#fff"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M279.139 117.233c6.048-5.416 8.214-11.915 6.5-20.129-3.7-18.053-14.081-31.593-27.892-42.786-21.394-17.511-46.487-26.989-73.208-32.676a171.027 171.027 0 0 0-21.3-3.25c48.653-3.34 89.9 11.464 121.045 50.188 7.131 8.936 12.457 19.046 13.179 30.961.722 9.117-9.839 19.407-18.324 17.692z",
            fill: "#e8e8e8"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M371.84 249.591c-9.929 2.347-20.039 1.986-29.968 1.174-9.568-.812-19.407-1.444-28.524-4.965a53.081 53.081 0 0 1-6.5-2.979c-1.535-.812-2.618-2.257-1.986-4.062.541-1.535 1.986-1.986 3.611-2.167 6.679-.722 13.179.9 19.5 2.257 14.71 3.163 29.244 7.131 43.867 10.742z",
            fill: "#8b8b8b"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M329.929 176.201a28.576 28.576 0 0 0-10.658-12.42c-5.813-3.788-9.161-3.171-13.124 2.554a8.987 8.987 0 0 1 10.658-11c5.549.969 13.829 13.021 14.269 18.747a1.8 1.8 0 0 1-1.145 2.119z",
            fill: "#7e7e7e"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M22.695 135.113l44.024 25.058s5.2-88.939 69.618-137.629c0-.001-86.884 11.128-113.642 112.571z",
            fill: "#969696"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M209.697 158.215c-6.86 2.889-13.689 1.535-20.639 0-12.818-2.888-22.024-10.922-29.787-21.032-6.048-7.943-14.109-19.169-22.775-24.856-1.839-1.039-1.7-1.222 0-1.367a35.093 35.093 0 0 1 31.8 14.037c4.423 6.228 7.582 13.088 12.547 19.046 6.86 8.214 15.209 12.3 25.228 13.566 1.084.091 3.626.606 3.626.606z",
            fill: "#969696"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M65.801 160.035s.835-46.126 27.609-87.05c0 0-14.884 64.081-7.393 97.913h-14.3z",
            fill: "#393939"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M87.811 194.64s-7.016 40.042 20.944 83.626c0 0-13.853-45.963 5.7-69.823z",
            fill: "#7e7e7e"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "M451.302 189.207s23.065 1.384 22.938 15.687-8.436 16.7-26.22 22.341c0 0 19.989-10.768 19.763-22.658s-16.481-15.37-16.481-15.37z",
            fill: "#bcbcbc"
          }
        })
      ]
    )
  };
  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;

    /* style */
    const __vue_inject_styles__$7 = undefined;
    /* scoped */
    const __vue_scope_id__$7 = undefined;
    /* module identifier */
    const __vue_module_identifier__$7 = undefined;
    /* functional template */
    const __vue_is_functional_template__$7 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Logo = normalizeComponent_1(
      { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
      __vue_inject_styles__$7,
      {},
      __vue_scope_id__$7,
      __vue_is_functional_template__$7,
      __vue_module_identifier__$7,
      undefined,
      undefined
    );

  var script$7 = {
    computed: _objectSpread2({}, vuex.mapGetters({
      title: 'dashboard/title'
    }))
  };

  /* script */
  const __vue_script__$7 = script$7;

  /* template */
  var __vue_render__$8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "header",
      {
        staticClass:
          "flex justify-between items-center bg-white border-b border-grey-500 px-8 h-24"
      },
      [
        _c("div", [
          _vm.title
            ? _c("h1", { staticClass: "title" }, [
                _vm._v("\n            " + _vm._s(_vm.title) + "\n        ")
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", [_vm._t("default")], 2)
      ]
    )
  };
  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;

    /* style */
    const __vue_inject_styles__$8 = undefined;
    /* scoped */
    const __vue_scope_id__$8 = undefined;
    /* module identifier */
    const __vue_module_identifier__$8 = undefined;
    /* functional template */
    const __vue_is_functional_template__$8 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var MainHeader = normalizeComponent_1(
      { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
      __vue_inject_styles__$8,
      __vue_script__$7,
      __vue_scope_id__$8,
      __vue_is_functional_template__$8,
      __vue_module_identifier__$8,
      undefined,
      undefined
    );

  var script$8 = {
    props: {
      avatar: {
        type: String,
        default: '/back/images/avatar.png'
      }
    },
    computed: _objectSpread2({}, vuex.mapGetters({
      user: 'user/data'
    }), {
      userIsSet() {
        return this.user;
      },

      imageSrc() {
        return this.user && this.user.avatar ? this.user.avatar : this.avatar;
      }

    })
  };

  /* script */
  const __vue_script__$8 = script$8;

  /* template */
  var __vue_render__$9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "side-header px-10 h-24" }, [
      _vm.userIsSet
        ? _c("div", { staticClass: "flex items-center" }, [
            _c("div", { staticClass: "flex-no-shrink mr-4" }, [
              _c("figure", { staticClass: "image w-12 h-12" }, [
                _c("img", {
                  staticClass: "rounded-full",
                  attrs: { src: _vm.imageSrc, alt: _vm.user.name }
                })
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex-grow" },
              [
                _c("div", { staticClass: "font-medium text-white mb-1" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.user.name) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass:
                      "flex items-center text-grey-500 hover:text-grey-400",
                    attrs: {
                      to: {
                        name: "users.edit",
                        params: { id: _vm.user.id }
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "icon small mr-1" },
                      [_c("icon", { attrs: { icon: "cog", size: "sm" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-xs" }, [
                      _vm._v("Your details")
                    ])
                  ]
                )
              ],
              1
            )
          ])
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;

    /* style */
    const __vue_inject_styles__$9 = undefined;
    /* scoped */
    const __vue_scope_id__$9 = undefined;
    /* module identifier */
    const __vue_module_identifier__$9 = undefined;
    /* functional template */
    const __vue_is_functional_template__$9 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var SideHeader = normalizeComponent_1(
      { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
      __vue_inject_styles__$9,
      __vue_script__$8,
      __vue_scope_id__$9,
      __vue_is_functional_template__$9,
      __vue_module_identifier__$9,
      undefined,
      undefined
    );

  /* script */

  /* template */
  var __vue_render__$a = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "ul",
      { staticClass: "side-nav list-reset" },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;

    /* style */
    const __vue_inject_styles__$a = undefined;
    /* scoped */
    const __vue_scope_id__$a = undefined;
    /* module identifier */
    const __vue_module_identifier__$a = undefined;
    /* functional template */
    const __vue_is_functional_template__$a = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var SideNav = normalizeComponent_1(
      { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
      __vue_inject_styles__$a,
      {},
      __vue_scope_id__$a,
      __vue_is_functional_template__$a,
      __vue_module_identifier__$a,
      undefined,
      undefined
    );

  var script$9 = {
    components: {
      Logo,
      MainHeader,
      SideHeader,
      SideNav
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
    computed: _objectSpread2({}, vuex.mapGetters({
      sideIsVisible: 'dashboard/sideIsVisible'
    })),
    methods: _objectSpread2({}, vuex.mapActions({
      toggleSide: 'dashboard/toggleSide'
    }))
  };

  /* script */
  const __vue_script__$9 = script$9;

  /* template */
  var __vue_render__$b = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "transition-group",
      {
        staticClass: "min-h-screen bg-grey-200",
        attrs: { tag: "div", mode: "out-in", name: "dashboard" }
      },
      [
        _vm.loading
          ? _c(
              "div",
              {
                key: "loader",
                staticClass:
                  "flex min-h-screen items-center justify-center bg-grey-200"
              },
              [
                _c(
                  "div",
                  { staticClass: "text-center pulse" },
                  [
                    _c("logo", { staticClass: "w-16" }),
                    _vm._v(" "),
                    _c("div", { staticClass: "title text-3xl uppercase" }, [
                      _c("strong", [_vm._v("Optimus")])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "subtitle text-coral-500" }, [
                      _c("i", [_vm._v("loading...")])
                    ])
                  ],
                  1
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.loading,
                expression: "! loading"
              }
            ],
            key: "dashboard",
            staticClass: "dashboard",
            class: { "show-side": _vm.sideIsVisible }
          },
          [
            _c("transition", { attrs: { name: "side" } }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading,
                      expression: "! loading"
                    }
                  ],
                  staticClass: "side bg-blue-700"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "side-toggle bg-blue-700 lg:hidden",
                      on: { click: _vm.toggleSide }
                    },
                    [_c("span", { staticClass: "dots" }, [_c("i")])]
                  ),
                  _vm._v(" "),
                  _c("side-header", { attrs: { avatar: _vm.avatar } }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "side-content px-10 py-8" },
                    [_c("side-nav", [_vm._t("side-nav")], 2)],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("transition", { attrs: { name: "main" } }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.loading,
                      expression: "! loading"
                    }
                  ],
                  staticClass: "main ml-5 lg:ml-0",
                  attrs: { id: "main" }
                },
                [
                  _c("main-header", [_vm._t("header")], 2),
                  _vm._v(" "),
                  _c("router-view")
                ],
                1
              )
            ])
          ],
          1
        )
      ]
    )
  };
  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;

    /* style */
    const __vue_inject_styles__$b = undefined;
    /* scoped */
    const __vue_scope_id__$b = undefined;
    /* module identifier */
    const __vue_module_identifier__$b = undefined;
    /* functional template */
    const __vue_is_functional_template__$b = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Dashboard = normalizeComponent_1(
      { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
      __vue_inject_styles__$b,
      __vue_script__$9,
      __vue_scope_id__$b,
      __vue_is_functional_template__$b,
      __vue_module_identifier__$b,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

    data() {
      return {
        subNavIsVisible: false
      };
    },

    computed: {
      currentSection() {
        var meta = this.$route.matched[this.$route.matched.length - 1].meta;
        return meta.hasOwnProperty('section') ? meta.section : this.$route.matched[0].meta.section;
      },

      sectionIsActive() {
        return this.section === this.currentSection;
      },

      isRouterLink() {
        return !!this.to;
      },

      hasSubNav() {
        return !!this.$slots.default;
      },

      icon() {
        if (this.hasSubNav) {
          return this.subNavIsVisible ? 'angle-up' : 'angle-down';
        }

        return 'angle-right';
      }

    },
    watch: {
      currentSection(section) {
        if (section === this.section) {
          this.subNavIsVisible = true;
        } else {
          this.subNavIsVisible = false;
        }
      }

    },

    created() {
      if (this.currentSection === this.section) {
        this.subNavIsVisible = true;
      }
    },

    methods: {
      toggleSubNav(e) {
        if (this.hasSubNav) {
          this.subNavIsVisible = !this.subNavIsVisible;
          e.preventDefault();
        }
      }

    }
  };

  /* script */
  const __vue_script__$a = script$a;

  /* template */
  var __vue_render__$c = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "li",
      { class: { active: _vm.sectionIsActive } },
      [
        _vm.isRouterLink
          ? _c("router-link", { attrs: { to: _vm.to } }, [
              _c("span", [_vm._v(_vm._s(_vm.label))]),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "icon large", on: { click: _vm.toggleSubNav } },
                [_c("icon", { attrs: { icon: _vm.icon, size: "sm" } })],
                1
              )
            ])
          : _c(
              "a",
              {
                on: {
                  click: function($event) {
                    return _vm.$emit("click")
                  }
                }
              },
              [
                _c("span", [_vm._v(_vm._s(_vm.label))]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "icon large" },
                  [_c("icon", { attrs: { icon: "angle-right", size: "sm" } })],
                  1
                )
              ]
            ),
        _vm._v(" "),
        _vm.hasSubNav && _vm.subNavIsVisible
          ? _c(
              "ul",
              { staticClass: "side-sub-nav list-reset" },
              [_vm._t("default")],
              2
            )
          : _vm._e()
      ],
      1
    )
  };
  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;

    /* style */
    const __vue_inject_styles__$c = undefined;
    /* scoped */
    const __vue_scope_id__$c = undefined;
    /* module identifier */
    const __vue_module_identifier__$c = undefined;
    /* functional template */
    const __vue_is_functional_template__$c = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var SideNavItem = normalizeComponent_1(
      { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
      __vue_inject_styles__$c,
      __vue_script__$a,
      __vue_scope_id__$c,
      __vue_is_functional_template__$c,
      __vue_module_identifier__$c,
      undefined,
      undefined
    );

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
        default: () => {}
      }
    },
    computed: {
      isActive() {
        var route = this.$route.matched[this.$route.matched.length - 1];
        return this.to.hasOwnProperty('name') && route.name === this.to.name;
      }

    }
  };

  /* script */
  const __vue_script__$b = script$b;

  /* template */
  var __vue_render__$d = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "router-link",
      { class: { active: _vm.isActive }, attrs: { to: _vm.to, tag: "li" } },
      [_c("a", [_vm._t("default")], 2)]
    )
  };
  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;

    /* style */
    const __vue_inject_styles__$d = undefined;
    /* scoped */
    const __vue_scope_id__$d = undefined;
    /* module identifier */
    const __vue_module_identifier__$d = undefined;
    /* functional template */
    const __vue_is_functional_template__$d = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var SideSubNavItem = normalizeComponent_1(
      { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
      __vue_inject_styles__$d,
      __vue_script__$b,
      __vue_scope_id__$d,
      __vue_is_functional_template__$d,
      __vue_module_identifier__$d,
      undefined,
      undefined
    );

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
      confirm() {
        this.$emit('close');
        this.close();
      }

    })
  };

  /* script */
  const __vue_script__$c = script$c;

  /* template */
  var __vue_render__$e = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "o-modal",
      { attrs: { active: _vm.isOpen }, on: { close: _vm.confirm } },
      [
        _c("div", { staticClass: "modal-content bg-white rounded max-w-sm" }, [
          _c(
            "div",
            { staticClass: "content px-6 pt-8 text-center" },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "p-6 text-center" }, [
            _c(
              "a",
              {
                staticClass: "button w-full sm:w-1/2",
                class: _vm.buttonClass,
                on: { click: _vm.confirm }
              },
              [_vm._v(_vm._s(_vm.buttonText))]
            )
          ])
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;

    /* style */
    const __vue_inject_styles__$e = undefined;
    /* scoped */
    const __vue_scope_id__$e = undefined;
    /* module identifier */
    const __vue_module_identifier__$e = undefined;
    /* functional template */
    const __vue_is_functional_template__$e = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Alert = normalizeComponent_1(
      { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
      __vue_inject_styles__$e,
      __vue_script__$c,
      __vue_scope_id__$e,
      __vue_is_functional_template__$e,
      __vue_module_identifier__$e,
      undefined,
      undefined
    );

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
      confirm() {
        this.$emit('confirm', this.item);
        this.close();
      }

    })
  };

  /* script */
  const __vue_script__$d = script$d;

  /* template */
  var __vue_render__$f = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "o-modal",
      {
        attrs: { active: _vm.isOpen },
        on: { close: _vm.close, escape: _vm.close }
      },
      [
        _c("div", { staticClass: "modal-content bg-white rounded max-w-sm" }, [
          _c(
            "div",
            { staticClass: "content px-6 py-8 text-center" },
            [
              _vm._t(
                "default",
                [_vm._v("\n                Are you sure?\n            ")],
                { item: _vm.item }
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("div", { staticClass: "button-group" }, [
            _c(
              "a",
              {
                staticClass: "button",
                class: _vm.buttonClass,
                on: { click: _vm.confirm }
              },
              [_vm._v(_vm._s(_vm.buttonText))]
            ),
            _vm._v(" "),
            _c("a", { staticClass: "button", on: { click: _vm.close } }, [
              _vm._v(_vm._s(_vm.buttonCancelText))
            ])
          ])
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;

    /* style */
    const __vue_inject_styles__$f = undefined;
    /* scoped */
    const __vue_scope_id__$f = undefined;
    /* module identifier */
    const __vue_module_identifier__$f = undefined;
    /* functional template */
    const __vue_is_functional_template__$f = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Confirmation = normalizeComponent_1(
      { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
      __vue_inject_styles__$f,
      __vue_script__$d,
      __vue_scope_id__$f,
      __vue_is_functional_template__$f,
      __vue_module_identifier__$f,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
        default: () => []
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

    data() {
      return {
        isOpen: false,
        newValue: this.value
      };
    },

    computed: {
      buttonText() {
        var option;

        if (this.value) {
          option = this.options.find((_ref) => {
            var {
              value
            } = _ref;
            return value === this.value;
          });
        }

        return option ? option.label : this.placeholder;
      }

    },
    watch: {
      newValue(value) {
        this.$emit('input', value);
      },

      isOpen(isOpen) {
        if (!isOpen) {
          this.$emit('close');
        }
      }

    },

    created() {
      ['click', 'touchstart'].forEach(action => {
        document.addEventListener(action, this.close);
      });
    },

    destroyed() {
      ['click', 'touchstart'].forEach(action => {
        document.removeEventListener(action, this.close);
      });
    },

    methods: {
      close(event) {
        if (this.isOpen && this.$refs.dropdown !== event.target && !this.$refs.dropdown.contains(event.target)) {
          this.isOpen = false;
        }
      }

    }
  };

  /* script */
  const __vue_script__$e = script$e;

  /* template */
  var __vue_render__$g = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      { ref: "dropdown", staticClass: "dropdown", class: { open: _vm.isOpen } },
      [
        _c(
          "div",
          {
            staticClass: "cursor-pointer",
            on: {
              click: function($event) {
                _vm.isOpen = !_vm.isOpen;
              }
            }
          },
          [
            _vm._t(
              "button",
              [
                _c("span", { staticClass: "button", class: _vm.buttonClass }, [
                  _c("span", [_vm._v(_vm._s(_vm.buttonText))]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "icon" },
                    [_c("icon", { attrs: { icon: _vm.icon } })],
                    1
                  )
                ])
              ],
              { isOpen: _vm.isOpen }
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "dropdown-menu max-w-xs",
            on: {
              click: function($event) {
                _vm.isOpen = false;
              }
            }
          },
          [
            _c("div", { staticClass: "dropdown-scroll" }, [
              _c(
                "div",
                { staticClass: "dropdown-content" },
                [
                  _vm._t("default", [
                    _vm.defaultOption
                      ? _c(
                          "a",
                          {
                            staticClass: "dropdown-item",
                            class: { active: !_vm.value },
                            on: {
                              click: function($event) {
                                _vm.newValue = null;
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.placeholder))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.options, function(option) {
                      return [
                        _vm._t(
                          "option",
                          [
                            _c(
                              "a",
                              {
                                key: option.value,
                                staticClass: "dropdown-item",
                                class: { active: option.value == _vm.value },
                                on: {
                                  click: function($event) {
                                    _vm.newValue = option.value;
                                  }
                                }
                              },
                              [_vm._v(_vm._s(option.label))]
                            )
                          ],
                          { option: option }
                        )
                      ]
                    })
                  ])
                ],
                2
              )
            ])
          ]
        )
      ]
    )
  };
  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;

    /* style */
    const __vue_inject_styles__$g = undefined;
    /* scoped */
    const __vue_scope_id__$g = undefined;
    /* module identifier */
    const __vue_module_identifier__$g = undefined;
    /* functional template */
    const __vue_is_functional_template__$g = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Dropdown = normalizeComponent_1(
      { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
      __vue_inject_styles__$g,
      __vue_script__$e,
      __vue_scope_id__$g,
      __vue_is_functional_template__$g,
      __vue_module_identifier__$g,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

    data() {
      return {
        timeout: null,
        showLoader: false
      };
    },

    watch: {
      loading: {
        handler(isLoading) {
          if (isLoading) {
            this.timeout = setTimeout(() => {
              this.showLoader = true;
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
  const __vue_script__$f = script$f;

  /* template */
  var __vue_render__$h = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "transition",
      { attrs: { name: "loader", mode: "out-in" } },
      [
        _vm.loading
          ? _c(
              "div",
              {
                key: "loader",
                staticClass: "flex items-center justify-center p-8"
              },
              [
                _c("transition", { attrs: { name: "fade" } }, [
                  _vm.showLoader
                    ? _c(
                        "div",
                        { staticClass: "icon" },
                        [
                          _c("icon", {
                            attrs: { icon: "spinner", spin: "", size: "lg" }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ],
              1
            )
          : _vm.transitionName
          ? _c(
              "transition-group",
              { attrs: { tag: _vm.tag, name: _vm.transitionName } },
              [_vm._t("default")],
              2
            )
          : _c(
              _vm.tag,
              { key: "content", tag: "component" },
              [_vm._t("default")],
              2
            )
      ],
      1
    )
  };
  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;

    /* style */
    const __vue_inject_styles__$h = undefined;
    /* scoped */
    const __vue_scope_id__$h = undefined;
    /* module identifier */
    const __vue_module_identifier__$h = undefined;
    /* functional template */
    const __vue_is_functional_template__$h = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Loader = normalizeComponent_1(
      { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
      __vue_inject_styles__$h,
      __vue_script__$f,
      __vue_scope_id__$h,
      __vue_is_functional_template__$h,
      __vue_module_identifier__$h,
      undefined,
      undefined
    );

  //
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

    created() {
      document.addEventListener('keydown', this.onEscape);
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.onEscape);
    },

    methods: {
      onEscape(event) {
        if (this.active && event.keyCode === 27) {
          this.$emit('escape');
        }
      }

    }
  };

  /* script */
  const __vue_script__$g = script$g;

  /* template */
  var __vue_render__$i = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("transition", { attrs: { name: "fade" } }, [
      _vm.active
        ? _c(
            "div",
            { staticClass: "modal active" },
            [
              _c("div", {
                staticClass: "modal-background",
                on: {
                  click: function($event) {
                    return _vm.$emit("close")
                  }
                }
              }),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;

    /* style */
    const __vue_inject_styles__$i = undefined;
    /* scoped */
    const __vue_scope_id__$i = undefined;
    /* module identifier */
    const __vue_module_identifier__$i = undefined;
    /* functional template */
    const __vue_is_functional_template__$i = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Modal = normalizeComponent_1(
      { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
      __vue_inject_styles__$i,
      __vue_script__$g,
      __vue_scope_id__$i,
      __vue_is_functional_template__$i,
      __vue_module_identifier__$i,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
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
      notificationClass() {
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
  const __vue_script__$h = script$h;

  /* template */
  var __vue_render__$j = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("transition", { attrs: { name: "notification" } }, [
      _c(
        "div",
        { staticClass: "p-6", class: _vm.notificationClass },
        [
          _vm.closeable
            ? _c("a", {
                staticClass: "delete",
                on: {
                  click: function($event) {
                    return _vm.$emit("close")
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      )
    ])
  };
  var __vue_staticRenderFns__$j = [];
  __vue_render__$j._withStripped = true;

    /* style */
    const __vue_inject_styles__$j = undefined;
    /* scoped */
    const __vue_scope_id__$j = undefined;
    /* module identifier */
    const __vue_module_identifier__$j = undefined;
    /* functional template */
    const __vue_is_functional_template__$j = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Notification = normalizeComponent_1(
      { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
      __vue_inject_styles__$j,
      __vue_script__$h,
      __vue_scope_id__$j,
      __vue_is_functional_template__$j,
      __vue_module_identifier__$j,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
      isVisible() {
        return this.options && this.options.last_page > 1;
      },

      currentPage() {
        return this.options ? this.options.current_page - 1 : 0;
      },

      previousPage() {
        return this.options.current_page - 1;
      },

      nextPage() {
        return this.options.current_page + 1;
      },

      hasPreviousPage() {
        return this.previousPage > 0;
      },

      hasNextPage() {
        return this.nextPage <= this.options.last_page;
      },

      pages() {
        var pages;

        if (this.filteredPages) {
          pages = [this.filteredPages[0] - 1 === 1 ? 1 : this.seperator, ...this.filteredPages, this.filteredPages[this.filteredPages.length - 1] + 1 === this.options.last_page - 2 ? this.options.last_page - 2 : this.seperator];
        } else {
          pages = [...Array(this.options.last_page - 2).keys()].map(page => {
            return page + 1;
          });
        }

        return [0, ...pages, this.options.last_page - 1];
      },

      filteredPages() {
        var toFilterPages = [...Array(this.options.last_page).keys()].slice(2, -2);

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

        return toFilterPages.filter(page => {
          var diffPage = this.currentPage - page;
          return diffPage < 0 ? Math.abs(diffPage) <= diff : diffPage < diff;
        });
      }

    },
    methods: {
      changePage(page) {
        if (page < 1 || page > this.options.last_page || page === this.options.current_page) {
          return;
        }

        this.options.current_page = page;
        this.$emit('change-page', page);
      }

    }
  };

  /* script */
  const __vue_script__$i = script$i;

  /* template */
  var __vue_render__$k = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.isVisible
      ? _c("nav", { staticClass: "pagination is-centered" }, [
          _c(
            "a",
            {
              staticClass: "pagination-previous",
              attrs: { disabled: !_vm.hasPreviousPage },
              on: {
                click: function($event) {
                  return _vm.changePage(_vm.previousPage)
                }
              }
            },
            [_vm._v("Prev")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "pagination-next",
              attrs: { disabled: !_vm.hasNextPage },
              on: {
                click: function($event) {
                  return _vm.changePage(_vm.nextPage)
                }
              }
            },
            [_vm._v("Next")]
          ),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "pagination-list" },
            _vm._l(_vm.pages, function(page) {
              return _c("li", { key: page }, [
                page === _vm.seperator
                  ? _c("span", { staticClass: "pagination-ellipsis" }, [
                      _vm._v(_vm._s(_vm.seperator))
                    ])
                  : _c(
                      "a",
                      {
                        staticClass: "pagination-link",
                        class: { current: page === _vm.currentPage },
                        on: {
                          click: function($event) {
                            return _vm.changePage(page + 1)
                          }
                        }
                      },
                      [_vm._v(_vm._s(page + 1))]
                    )
              ])
            }),
            0
          )
        ])
      : _vm._e()
  };
  var __vue_staticRenderFns__$k = [];
  __vue_render__$k._withStripped = true;

    /* style */
    const __vue_inject_styles__$k = undefined;
    /* scoped */
    const __vue_scope_id__$k = undefined;
    /* module identifier */
    const __vue_module_identifier__$k = undefined;
    /* functional template */
    const __vue_is_functional_template__$k = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Pagination = normalizeComponent_1(
      { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
      __vue_inject_styles__$k,
      __vue_script__$i,
      __vue_scope_id__$k,
      __vue_is_functional_template__$k,
      __vue_module_identifier__$k,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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

    data() {
      return {
        newValue: this.value
      };
    },

    methods: {
      submit() {
        this.$emit('submit', this.newValue);
      }

    }
  };

  /* script */
  const __vue_script__$j = script$j;

  /* template */
  var __vue_render__$l = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault();
            return _vm.submit($event)
          }
        }
      },
      [
        _c("label", { staticClass: "hidden", attrs: { for: "search" } }, [
          _vm._v("Search")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field addons" }, [
          _c(
            "div",
            { staticClass: "control flex-grow" },
            [
              _c("o-input", {
                attrs: {
                  id: "search",
                  type: "search",
                  placeholder: _vm.placeholder
                },
                model: {
                  value: _vm.newValue,
                  callback: function($$v) {
                    _vm.newValue = $$v;
                  },
                  expression: "newValue"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "control" }, [
            _c("button", { staticClass: "button" }, [
              _c(
                "span",
                { staticClass: "icon" },
                [_c("icon", { attrs: { icon: "search" } })],
                1
              )
            ])
          ])
        ])
      ]
    )
  };
  var __vue_staticRenderFns__$l = [];
  __vue_render__$l._withStripped = true;

    /* style */
    const __vue_inject_styles__$l = undefined;
    /* scoped */
    const __vue_scope_id__$l = undefined;
    /* module identifier */
    const __vue_module_identifier__$l = undefined;
    /* functional template */
    const __vue_is_functional_template__$l = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Search = normalizeComponent_1(
      { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
      __vue_inject_styles__$l,
      __vue_script__$j,
      __vue_scope_id__$l,
      __vue_is_functional_template__$l,
      __vue_module_identifier__$l,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
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
    data() {
      return {
        tabs: []
      };
    },

    computed: {
      firstTab() {
        return this.tabs[0];
      }

    },

    created() {
      this.tabs = this.$children;
    },

    mounted() {
      window.addEventListener('hashchange', () => this.selectTab(window.location.hash));

      if (this.findTab(window.location.hash)) {
        this.selectTab(window.location.hash);
        return;
      }

      if (this.tabs.length) {
        this.selectTab(this.firstTab.hash);
      }
    },

    methods: {
      findTab(hash) {
        return this.tabs.find(tab => tab.hash === hash);
      },

      selectTab(selectedTabHash) {
        var selectedTab = this.findTab(selectedTabHash);

        if (selectedTab) {
          this.tabs.forEach(tab => {
            tab.isActive = tab.hash === selectedTab.hash;
          });
          this.activeTabHash = selectedTab.hash;
          this.$router.push({
            hash: this.activeTabHash !== this.firstTab.hash ? this.activeTabHash : null
          });
        }
      }

    }
  };

  /* script */
  const __vue_script__$k = script$k;

  /* template */
  var __vue_render__$m = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      [
        _vm._t(
          "tabs",
          [
            _c("div", { staticClass: "flex justify-end mb-6" }, [
              _c(
                "div",
                { staticClass: "field addons" },
                _vm._l(_vm.tabs, function(tab, i) {
                  return _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: tab.isVisible,
                          expression: "tab.isVisible"
                        }
                      ],
                      key: i,
                      staticClass: "control w-1/2"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "button w-full",
                          class: { blue: tab.isActive },
                          on: {
                            click: function($event) {
                              return _vm.selectTab(tab.hash)
                            }
                          }
                        },
                        [_vm._v(_vm._s(tab.name))]
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ],
          null,
          _vm.tabs
        ),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    )
  };
  var __vue_staticRenderFns__$m = [];
  __vue_render__$m._withStripped = true;

    /* style */
    const __vue_inject_styles__$m = undefined;
    /* scoped */
    const __vue_scope_id__$m = undefined;
    /* module identifier */
    const __vue_module_identifier__$m = undefined;
    /* functional template */
    const __vue_is_functional_template__$m = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Tabs = normalizeComponent_1(
      { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
      __vue_inject_styles__$m,
      __vue_script__$k,
      __vue_scope_id__$m,
      __vue_is_functional_template__$m,
      __vue_module_identifier__$m,
      undefined,
      undefined
    );

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

    data() {
      return {
        isActive: false,
        isVisible: true
      };
    },

    computed: {
      computedId() {
        if (this.id) {
          return this.id;
        }

        return "tab-".concat(this.name.toLowerCase().replace(/ /g, '-'));
      },

      hash() {
        return '#' + this.computedId;
      }

    }
  };

  /* script */
  const __vue_script__$l = script$l;

  /* template */
  var __vue_render__$n = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "section",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isActive,
            expression: "isActive"
          }
        ],
        attrs: { id: _vm.computedId }
      },
      [_vm._t("default")],
      2
    )
  };
  var __vue_staticRenderFns__$n = [];
  __vue_render__$n._withStripped = true;

    /* style */
    const __vue_inject_styles__$n = undefined;
    /* scoped */
    const __vue_scope_id__$n = undefined;
    /* module identifier */
    const __vue_module_identifier__$n = undefined;
    /* functional template */
    const __vue_is_functional_template__$n = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Tab = normalizeComponent_1(
      { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
      __vue_inject_styles__$n,
      __vue_script__$l,
      __vue_scope_id__$n,
      __vue_is_functional_template__$n,
      __vue_module_identifier__$n,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
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

    data() {
      return {
        direction: null
      };
    },

    computed: {
      isActive() {
        var column = this.value && this.value.charAt(0) === '-' ? this.value.substr(1) : this.value;
        return column === this.column;
      },

      icon() {
        if (!this.direction) {
          return 'sort';
        }

        return this.direction === 'desc' ? 'sort-up' : 'sort-down';
      }

    },
    watch: {
      value() {
        if (!this.isActive) {
          this.direction = null;
        }
      }

    },

    created() {
      this.direction = this.getDefaultDirection();
    },

    methods: {
      getDefaultDirection() {
        if (!this.isActive) {
          return null;
        }

        return this.value.charAt(0) === '-' ? 'desc' : 'asc';
      },

      sort() {
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
  const __vue_script__$m = script$m;

  /* template */
  var __vue_render__$o = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("th", [
      _c(
        "a",
        { staticClass: "inline-flex items-center", on: { click: _vm.sort } },
        [
          _c("span", { staticClass: "select-none" }, [_vm._t("default")], 2),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "icon ml-4", class: { "opacity-50": !_vm.direction } },
            [_c("icon", { attrs: { icon: _vm.icon } })],
            1
          )
        ]
      )
    ])
  };
  var __vue_staticRenderFns__$o = [];
  __vue_render__$o._withStripped = true;

    /* style */
    const __vue_inject_styles__$o = undefined;
    /* scoped */
    const __vue_scope_id__$o = undefined;
    /* module identifier */
    const __vue_module_identifier__$o = undefined;
    /* functional template */
    const __vue_is_functional_template__$o = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var ThSort = normalizeComponent_1(
      { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
      __vue_inject_styles__$o,
      __vue_script__$m,
      __vue_scope_id__$o,
      __vue_is_functional_template__$o,
      __vue_module_identifier__$o,
      undefined,
      undefined
    );

  var form = {
    props: {
      item: {
        type: Object,
        default: null
      }
    },

    data() {
      return {
        errors: {},
        scrollTop: true,
        isProcessing: false
      };
    },

    computed: {
      anyErrors() {
        return Object.keys(this.errors).length > 0;
      },

      isEditing() {
        return !!this.item;
      }

    },
    methods: {
      getMedia(group) {
        return this.item && this.item[group] ? this.item[group] : [];
      },

      submit() {
        this.errors = {};
        this.isProcessing = true;
        this.save().then(response => {
          this.onSuccess(response);
        }).catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          } else {
            this.errors = {
              error: ['An unexpected error occured.']
            };
          }

          if (this.scrollTop) {
            window.scrollTo(0, 0);
          }

          this.onError(error);
        }).finally(() => {
          this.isProcessing = false;
          this.onFinally();
        });
      },

      onSuccess() {//
      },

      onError() {//
      },

      onFinally() {//
      }

    }
  };

  var listing = {
    filters: {
      truncate(string) {
        var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

        if (string.length > length) {
          return string.substring(0, length).replace(/[^A-Za-z0-9]+$/g, '...');
        }

        return string;
      }

    },

    data() {
      return {
        filters: {},
        initialFilters: {}
      };
    },

    computed: {
      routeQuery() {
        return this.$route.query;
      },

      query() {
        var query = {};
        Object.keys(this.filters).forEach(key => {
          if (this.routeQuery[key]) {
            query[key] = this.routeQuery[key];
          }
        });
        return query;
      }

    },
    watch: {
      query(query) {
        this.setFilters(query);
        this.onFilter(query);
      },

      filters: {
        handler(filters) {
          var query = {};
          Object.keys(filters).forEach(key => {
            if (filters[key]) {
              query[key] = filters[key];
            }
          });
          this.$router.push({
            query
          });
        },

        deep: true
      }
    },

    created() {
      this.initialFilters = Object.assign({}, this.filters);
      this.setFilters(this.query);
    },

    methods: {
      setFilters(query) {
        Object.keys(this.filters).forEach(key => {
          if (query.hasOwnProperty(key) && query[key]) {
            this.filters[key] = query[key];
          } else {
            this.filters[key] = this.initialFilters[key];
          }
        });
      },

      applyFilter(filter, value) {
        if (this.filters.hasOwnProperty('page')) {
          this.filters.page = null;
        }

        this.filters[filter] = value;
      },

      onFilter() {//
      }

    }
  };

  var sortable = {
    methods: {
      findItemIndex(items, itemId) {
        return items.findIndex((_ref) => {
          var {
            id
          } = _ref;
          return itemId === id;
        });
      },

      canMoveItemUp(items, itemId) {
        var index = this.findItemIndex(items, itemId);
        return index > 0;
      },

      canMoveItemDown(items, itemId) {
        var index = this.findItemIndex(items, itemId);
        return index + 1 < items.length;
      },

      moveItemUp(items, itemId) {
        if (this.canMoveItemUp(items, itemId)) {
          var index = this.findItemIndex(items, itemId);
          this.move(itemId, index, index - 1);
        }
      },

      moveItemDown(items, itemId) {
        if (this.canMoveItemDown(items, itemId)) {
          var index = this.findItemIndex(items, itemId);
          this.move(itemId, index, index + 1);
        }
      },

      moveItem(items, from, to) {
        var newItems = [...items];
        newItems.splice(to, 0, newItems.splice(from, 1)[0]);
        return newItems;
      },

      getMoveDirection(from, to) {
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
    } // Register icons


    Icons.register(); // Register components

    Vue.component('icon', vueFontawesome.FontAwesomeIcon); // Register form components

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

  exports.default = install;
  exports.formMixin = form;
  exports.listingMixin = listing;
  exports.sortableMixin = sortable;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
