/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["vcvWebpackJsonp4x"] = self["vcvWebpackJsonp4x"] || []).push([["element"],{

/***/ "./column/component.js":
/*!*****************************!*\
  !*** ./column/component.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ColumnElement; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools */ \"./column/tools.js\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar vcvAPI = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getService)('api');\nvar elementsSettingsStorage = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getStorage)('elementsSettings');\nvar fieldOptionsStorage = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getStorage)('fieldOptions');\nvar extendedOptionsState = elementsSettingsStorage.state('extendedOptions');\nvar documentManager = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getService)('document');\nvar elementsStorage = (0,vc_cake__WEBPACK_IMPORTED_MODULE_9__.getStorage)('elements');\n\nvar ColumnElement = /*#__PURE__*/function (_vcvAPI$elementCompon) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ColumnElement, _vcvAPI$elementCompon);\n\n  var _super = _createSuper(ColumnElement);\n\n  function ColumnElement(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, ColumnElement);\n\n    _this = _super.call(this, props);\n    _this.parentId = props.atts.parent;\n    _this.handleStorageChange = _this.handleStorageChange.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.handleElementUpdate = _this.handleElementUpdate.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.handleElementRemove = _this.handleElementRemove.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    _this.handleElementMove = _this.handleElementMove.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ColumnElement, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var currentState = extendedOptionsState.get();\n\n      if (!currentState || currentState && !currentState.elements.includes(this.props.id)) {\n        extendedOptionsState.onChange(this.handleStorageChange);\n        var options = {\n          fieldKey: false,\n          fieldType: false,\n          id: this.props.id\n        };\n        fieldOptionsStorage.trigger('fieldOptionsChange', options);\n      }\n\n      elementsStorage.on('update', this.handleElementUpdate);\n      elementsStorage.on('remove', this.handleElementRemove);\n      elementsStorage.on(\"element:move:\".concat(this.props.id), this.handleElementMove);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      elementsStorage.off('update', this.handleElementUpdate);\n      elementsStorage.off('remove', this.handleElementRemove);\n      elementsStorage.off(\"element:move:\".concat(this.props.id), this.handleElementMove);\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      this.handleStorageChange(false);\n    }\n  }, {\n    key: \"handleElementUpdate\",\n    value: function handleElementUpdate(id, element) {\n      if (id === this.props.id) {\n        (0,_tools__WEBPACK_IMPORTED_MODULE_11__.addRowColumnBackground)(id, element, element.parent, documentManager, elementsStorage);\n      }\n    }\n  }, {\n    key: \"handleElementRemove\",\n    value: function handleElementRemove(id) {\n      if (id === this.props.id) {\n        var element = documentManager.get(this.props.id);\n        (0,_tools__WEBPACK_IMPORTED_MODULE_11__.addRowColumnBackground)(id, element, this.props.atts.parent, documentManager, elementsStorage);\n      }\n    }\n  }, {\n    key: \"handleElementMove\",\n    value: function handleElementMove(element) {\n      // Update old row\n      (0,_tools__WEBPACK_IMPORTED_MODULE_11__.addRowColumnBackground)(element.id, element, element.parent, documentManager, elementsStorage); // Update new row\n\n      var newElement = documentManager.get(this.props.id);\n      (0,_tools__WEBPACK_IMPORTED_MODULE_11__.addRowColumnBackground)(newElement.id, newElement, newElement.parent, documentManager, elementsStorage);\n    }\n  }, {\n    key: \"handleStorageChange\",\n    value: function handleStorageChange(data) {\n      var _this2 = this;\n\n      var dataFromState = extendedOptionsState.get();\n\n      if (data) {\n        dataFromState = data;\n        extendedOptionsState.ignoreChange(this.handleStorageChange);\n      }\n\n      if (!dataFromState) {\n        return;\n      }\n\n      var elementData = dataFromState.elements.find(function (el) {\n        return el.id === _this2.props.id;\n      });\n\n      if (elementData) {\n        elementsSettingsStorage.state('elementOptions').set(_objectSpread({}, elementData));\n      }\n    }\n  }, {\n    key: \"getWidthClass\",\n    value: function getWidthClass(widthValue, device) {\n      var className = \"vce-col--\".concat(device, \"-\");\n\n      if (!widthValue) {\n        return className + 'auto';\n      }\n\n      if (widthValue.includes('px')) {\n        return className + widthValue.replace('px', '-px');\n      }\n\n      return className + widthValue.replace('/', '-').replace('%', 'p').replace(',', '-').replace('.', '-');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      // import variables\n      var _this$props = this.props,\n          id = _this$props.id,\n          atts = _this$props.atts,\n          editor = _this$props.editor,\n          isBackend = _this$props.isBackend;\n      var size = atts.size,\n          customClass = atts.customClass,\n          metaCustomId = atts.metaCustomId,\n          designOptionsAdvanced = atts.designOptionsAdvanced,\n          lastInRow = atts.lastInRow,\n          firstInRow = atts.firstInRow,\n          hidden = atts.hidden,\n          disableStacking = atts.disableStacking,\n          sticky = atts.sticky,\n          boxShadow = atts.boxShadow; // import template js\n\n      var customColProps = {};\n      var innerProps = {};\n      var classes = ['vce-col'];\n      classes.push(this.getBackgroundClass(designOptionsAdvanced));\n\n      if (hidden && isBackend) {\n        classes.push('vce-wpbackend-element-hidden');\n      }\n\n      if (disableStacking) {\n        classes.push(this.getWidthClass(size.all, 'xs'));\n\n        if (lastInRow.all) {\n          classes.push('vce-col--all-last');\n        }\n\n        if (firstInRow.all) {\n          classes.push('vce-col--all-first');\n        }\n      } else {\n        if (size.all) {\n          if (size.all === 'hide') {\n            classes.push('vce-col--all-hide');\n          } else {\n            classes.push(this.getWidthClass(size.all, 'md'));\n            classes.push('vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first');\n\n            if (lastInRow.all) {\n              classes.push('vce-col--md-last vce-col--lg-last vce-col--xl-last');\n            }\n\n            if (firstInRow.all) {\n              classes.push('vce-col--md-first vce-col--lg-first vce-col--xl-first');\n            }\n          }\n        } else {\n          // Custom device column size\n          Object.keys(size).forEach(function (device) {\n            var deviceSize = size[device];\n\n            if (deviceSize === '') {\n              deviceSize = 'auto';\n            }\n\n            if (device !== 'defaultSize') {\n              classes.push(_this3.getWidthClass(deviceSize, device));\n\n              if (deviceSize !== 'hide') {\n                classes.push(\"vce-col--\".concat(device, \"-visible\"));\n              }\n\n              if (lastInRow[device]) {\n                classes.push(\"vce-col--\".concat(device, \"-last\"));\n              }\n\n              if (firstInRow[device]) {\n                classes.push(\"vce-col--\".concat(device, \"-first\"));\n              }\n            }\n          });\n        }\n      }\n\n      if (typeof customClass === 'string' && customClass.length) {\n        classes.push(customClass);\n      }\n\n      var className = classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes);\n\n      if (metaCustomId) {\n        innerProps.id = metaCustomId;\n      }\n\n      var stickyAttributes = {};\n\n      if (sticky && sticky.device) {\n        stickyAttributes = this.getStickyAttributes(sticky);\n      }\n\n      var boxShadowAttributes = {};\n\n      if (boxShadow && boxShadow.device) {\n        boxShadowAttributes = this.getBoxShadowAttributes(boxShadow, id);\n      }\n\n      customColProps['data-vce-delete-attr'] = 'style';\n      innerProps['data-vce-delete-attr'] = 'style';\n      innerProps = _objectSpread(_objectSpread({}, innerProps), stickyAttributes);\n      var contentProps = {};\n      contentProps['data-vce-element-content'] = true;\n      var doPadding = this.applyDO('padding');\n      var doRest = this.applyDO('border margin background animation');\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: className\n      }, customColProps, {\n        id: 'el-' + id\n      }, editor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"vce-col-inner\"\n      }, doRest, innerProps, boxShadowAttributes), this.getBackgroundTypeContent(), this.getContainerDivider(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(\"div\", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"vce-col-content\"\n      }, contentProps, doPadding), this.props.children)));\n    }\n  }]);\n\n  return ColumnElement;\n}(vcvAPI.elementComponent);\n\n\n\n//# sourceURL=webpack:///./column/component.js?");

/***/ }),

/***/ "./column/index.js":
/*!*************************!*\
  !*** ./column/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vc-cake */ \"./node_modules/vc-cake/index.js\");\n/* harmony import */ var vc_cake__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vc_cake__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ \"./column/component.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n\n\n/* eslint-disable import/no-webpack-loader-syntax */\n\n\n\nvar vcvAddElement = (0,vc_cake__WEBPACK_IMPORTED_MODULE_1__.getService)('cook').add;\nvcvAddElement(__webpack_require__(/*! ./settings.json */ \"./column/settings.json\"), // Component callback\nfunction (component) {\n  //\n  component.add(_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n}, // css settings // css for element\n{\n  css: __webpack_require__(/*! raw-loader!./styles.css */ \"./node_modules/raw-loader/index.js!./column/styles.css\"),\n  editorCss: __webpack_require__(/*! raw-loader!./editor.css */ \"./node_modules/raw-loader/index.js!./column/editor.css\")\n}, function (attr) {\n  // BC for devices\n  var size = attr.size,\n      lastInRow = attr.lastInRow,\n      firstInRow = attr.firstInRow,\n      designOptionsAdvanced = attr.designOptionsAdvanced;\n\n  if (size && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size) !== 'object') {\n    attr.size = {\n      all: size,\n      defaultSize: size\n    };\n  } else if (size === '') {\n    attr.size = {};\n  }\n\n  if (lastInRow && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(lastInRow) !== 'object') {\n    attr.lastInRow = {\n      all: lastInRow\n    };\n  } else if (lastInRow === '') {\n    attr.lastInRow = {};\n  }\n\n  if (firstInRow && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(firstInRow) !== 'object') {\n    attr.firstInRow = {\n      all: firstInRow\n    };\n  } else if (firstInRow === '') {\n    attr.firstInRow = {};\n  } // Move parallax settings to new attribute\n\n\n  if (designOptionsAdvanced && designOptionsAdvanced.device) {\n    var newParallaxData = {};\n    var newDesignOptionsData = {};\n    Object.keys(designOptionsAdvanced.device).forEach(function (deviceKey) {\n      var deviceData = designOptionsAdvanced.device[deviceKey];\n      var newDeviceData = Object.assign({}, deviceData);\n\n      if (deviceData.parallax) {\n        var parallaxData = {\n          parallaxEnable: true,\n          parallax: deviceData.parallax\n        };\n\n        if (Object.prototype.hasOwnProperty.call(deviceData, 'parallaxReverse')) {\n          parallaxData.parallaxReverse = deviceData.parallaxReverse;\n        }\n\n        if (Object.prototype.hasOwnProperty.call(deviceData, 'parallaxSpeed')) {\n          parallaxData.parallaxSpeed = deviceData.parallaxSpeed;\n        }\n\n        newParallaxData[deviceKey] = parallaxData;\n        delete newDeviceData.parallax;\n        delete newDeviceData.parallaxReverse;\n        delete newDeviceData.parallaxSpeed;\n        newDesignOptionsData[deviceKey] = newDeviceData;\n      }\n    });\n\n    if (!lodash__WEBPACK_IMPORTED_MODULE_3___default().isEmpty(newParallaxData)) {\n      attr.parallax = {\n        device: newParallaxData\n      };\n      var newDesignOptions = Object.assign({}, designOptionsAdvanced);\n      newDesignOptions.device = newDesignOptionsData;\n      attr.designOptionsAdvanced = newDesignOptions;\n    }\n  }\n\n  return attr;\n});\n\n//# sourceURL=webpack:///./column/index.js?");

/***/ }),

/***/ "./column/tools.js":
/*!*************************!*\
  !*** ./column/tools.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addRowColumnBackground\": function() { return /* binding */ addRowColumnBackground; }\n/* harmony export */ });\nvar addRowColumnBackground = function addRowColumnBackground(id, colSettings, parentId, documentManager, elementsStorage) {\n  var rowSettings = documentManager.get(parentId);\n  var rowChildren = documentManager.children(parentId);\n\n  if (!rowChildren.length) {\n    return;\n  }\n\n  var columnBackgrounds = [];\n\n  var pushBackground = function pushBackground(element) {\n    var designOptions = element.designOptionsAdvanced;\n    var backgroundUsed = false;\n    var elementBackground = {};\n\n    if (designOptions && designOptions.device) {\n      var hasDeviceSettings = false;\n\n      for (var prop in designOptions.device) {\n        if (Object.prototype.hasOwnProperty.call(designOptions.device, prop)) {\n          hasDeviceSettings = true;\n        }\n      }\n\n      if (!hasDeviceSettings) {\n        return;\n      }\n\n      if (Object.prototype.hasOwnProperty.call(designOptions.device, 'all')) {\n        var allSettings = designOptions.device.all;\n\n        if (allSettings.backgroundColor || typeof allSettings.images === 'string' || allSettings.images && allSettings.images.urls && allSettings.images.urls.length) {\n          elementBackground.all = true;\n          backgroundUsed = true;\n        }\n      } else {\n        for (var device in designOptions.device) {\n          if (Object.prototype.hasOwnProperty.call(designOptions.device, device)) {\n            var deviceSettings = designOptions.device[device];\n\n            if (deviceSettings.backgroundColor || typeof deviceSettings.images === 'string' || deviceSettings.images && deviceSettings.images.urls && deviceSettings.images.urls.length) {\n              elementBackground[device] = true;\n              backgroundUsed = true;\n            }\n          }\n        }\n      }\n\n      if (backgroundUsed) {\n        columnBackgrounds.push(elementBackground);\n      }\n    }\n  };\n\n  rowChildren.forEach(function (column) {\n    if (colSettings && column.id === colSettings.id) {\n      pushBackground(colSettings);\n    } else {\n      pushBackground(column);\n    }\n  });\n  rowSettings.columnBackground = columnBackgrounds.reduce(function (result, currentObject) {\n    for (var key in currentObject) {\n      if (Object.prototype.hasOwnProperty.call(currentObject, key)) {\n        result[key] = currentObject[key];\n      }\n    }\n\n    return result;\n  }, {});\n  window.setTimeout(function () {\n    documentManager.update(rowSettings.id, rowSettings);\n    elementsStorage.trigger('update', parentId, rowSettings, '', {\n      silent: true\n    });\n  }, 0);\n};\n\n//# sourceURL=webpack:///./column/tools.js?");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./column/editor.css":
/*!******************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./column/editor.css ***!
  \******************************************************************/
/***/ (function(module) {

eval("module.exports = \".vce-col {\\n  min-height: 1em;\\n}\\n\\n.vce-col-content > .vcv-row-control-container .vcv-ui-blank-row-element-control {\\n  min-height: auto;\\n}\"\n\n//# sourceURL=webpack:///./column/editor.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./column/styles.css":
/*!******************************************************************!*\
  !*** ../../node_modules/raw-loader/index.js!./column/styles.css ***!
  \******************************************************************/
/***/ (function(module) {

eval("module.exports = \"/* ----------------------------------------------\\n * Column\\n * ---------------------------------------------- */\\n.vce-col {\\n  -ms-flex: 0 0 100%;\\n      flex: 0 0 100%;\\n  max-width: 100%;\\n  box-sizing: border-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  min-width: 1em;\\n  position: relative;\\n}\\n.vce-col--auto {\\n  -ms-flex: 1;\\n      flex: 1;\\n  -ms-flex-preferred-size: auto;\\n      flex-basis: auto;\\n}\\n.vce-col-inner,\\n.vce-col-content {\\n  position: relative;\\n  overflow-wrap: break-word;\\n  transition: box-shadow .2s;\\n}\\n\\n.vce-col-inner {\\n  width: 100%;\\n}\\n.vce-col-direction--rtl {\\n  direction: rtl;\\n}\\n.vce-element--has-background > .vce-col-inner > .vce-col-content {\\n  padding-top: 30px;\\n  padding-left: 30px;\\n  padding-right: 30px;\\n}\\n.vce-col.vce-col--all-hide {\\n  display: none;\\n}\\n\\n/* styles for mobile-portrait */\\n@media (min-width: 0), print {\\n  .vce-col--xs-auto {\\n    -ms-flex: 1 1 0;\\n        flex: 1 1 0;\\n    width: auto;\\n  }\\n  .vce-col--xs-1 {\\n    -ms-flex: 0 0 100%;\\n        flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n  .vce-col.vce-col--xs-visible {\\n    display: -ms-flexbox;\\n    display: flex;\\n  }\\n  .vce-col.vce-col--xs-hide {\\n    display: none;\\n  }\\n}\\n\\n.vce-row-container > .vce-row > .vce-row-content > .vce-col > .vce-col-inner {\\n  padding: 0;\\n}\\n\\n/* styles for mobile-landscape */\\n@media (min-width: 544px), print {\\n  .vce-col--sm-auto {\\n    -ms-flex: 1 1 0;\\n        flex: 1 1 0;\\n    width: auto;\\n  }\\n  .vce-col--sm-1 {\\n    -ms-flex: 0 0 100%;\\n        flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n  .vce-col.vce-col--sm-visible {\\n    display: -ms-flexbox;\\n    display: flex;\\n  }\\n  .vce-col.vce-col--sm-hide {\\n    display: none;\\n  }\\n}\\n/* styles for mobile-landscape */\\n@media (min-width: 768px), print {\\n  .vce-col--md-auto {\\n    -ms-flex: 1 1 0;\\n        flex: 1 1 0;\\n    width: auto;\\n  }\\n  .vce-col--md-1 {\\n    -ms-flex: 0 0 100%;\\n        flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n  .vce-col.vce-col--md-visible {\\n    display: -ms-flexbox;\\n    display: flex;\\n  }\\n  .vce-col.vce-col--md-hide {\\n    display: none;\\n  }\\n}\\n/* styles for mobile-landscape */\\n@media screen and (min-width: 992px), print {\\n  .vce-col--lg-auto {\\n    -ms-flex: 1 1 0;\\n        flex: 1 1 0;\\n    width: 1px;\\n  }\\n  .vce-col--lg-1 {\\n    -ms-flex: 0 0 100%;\\n        flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n  .vce-col.vce-col--lg-visible {\\n    display: -ms-flexbox;\\n    display: flex;\\n  }\\n  .vce-col.vce-col--lg-hide {\\n    display: none;\\n  }\\n}\\n/* styles for mobile-landscape */\\n@media (min-width: 1200px), print {\\n  .vce-col--xl-auto {\\n    -ms-flex: 1 1 0;\\n        flex: 1 1 0;\\n    width: auto;\\n  }\\n  .vce-col--xl-1 {\\n    -ms-flex: 0 0 100%;\\n        flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n  .vce-col.vce-col--xl-visible {\\n    display: -ms-flexbox;\\n    display: flex;\\n  }\\n  .vce-col.vce-col--xl-hide {\\n    display: none;\\n  }\\n}\\n@media (min-width: 0) and (max-width: 543px) {\\n  .vce-element--xs--has-background > .vce-col-inner > .vce-col-content {\\n    padding-top: 30px;\\n    padding-left: 30px;\\n    padding-right: 30px;\\n  }\\n}\\n@media (min-width: 544px) and (max-width: 767px) {\\n  .vce-element--sm--has-background > .vce-col-inner > .vce-col-content {\\n    padding-top: 30px;\\n    padding-left: 30px;\\n    padding-right: 30px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 991px) {\\n  .vce-element--md--has-background > .vce-col-inner > .vce-col-content {\\n    padding-top: 30px;\\n    padding-left: 30px;\\n    padding-right: 30px;\\n  }\\n}\\n@media (min-width: 992px) and (max-width: 1199px) {\\n  .vce-element--lg--has-background > .vce-col-inner > .vce-col-content {\\n    padding-top: 30px;\\n    padding-left: 30px;\\n    padding-right: 30px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .vce-element--xl--has-background > .vce-col-inner > .vce-col-content {\\n    padding-top: 30px;\\n    padding-left: 30px;\\n    padding-right: 30px;\\n  }\\n}\\n\"\n\n//# sourceURL=webpack:///./column/styles.css?../../node_modules/raw-loader/index.js");

/***/ }),

/***/ "./column/settings.json":
/*!******************************!*\
  !*** ./column/settings.json ***!
  \******************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"size\":{\"type\":\"object\",\"access\":\"public\",\"value\":{\"all\":\"auto\",\"defaultSize\":\"auto\"}},\"disableStacking\":{\"type\":\"string\",\"access\":\"public\",\"value\":false},\"lastInRow\":{\"type\":\"object\",\"access\":\"public\",\"value\":{\"all\":false}},\"firstInRow\":{\"type\":\"object\",\"access\":\"public\",\"value\":{\"all\":false}},\"customClass\":{\"type\":\"string\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Extra class name\",\"description\":\"Add an extra class name to the element and refer to it from the custom CSS option.\"}},\"parallax\":{\"type\":\"parallax\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Parallax\",\"tooltip\":\"Enabling <a href=\\\\\"https://visualcomposer.com/help/design-options/parallax-effect/?utm_source=vcwb&utm_medium=editor&utm_campaign=info&utm_content=helper-point\\\\\" target=\\\\\"_blank\\\\\" rel=\\\\\"noopener noreferrer\\\\\">Parallax</a> creates a 3D scrolling effect on the page.\"}},\"designOptionsAdvanced\":{\"type\":\"designOptionsAdvanced\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Design Options\"}},\"sticky\":{\"type\":\"sticky\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Sticky\",\"tooltip\":\"The sticky option makes the container and its content fixed at the top of the page.\"}},\"editFormTab1\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"metaCustomId\",\"customClass\"],\"options\":{\"label\":\"General\"}},\"dividers\":{\"type\":\"divider\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Dividers\",\"tooltip\":\"Add pre-designed shapes to divide rows and columns.\"}},\"boxShadow\":{\"type\":\"boxShadow\",\"access\":\"public\",\"value\":{},\"options\":{\"label\":\"Box Shadow\",\"tooltip\":\"Add outlined shades to an element.\"}},\"metaEditFormTabs\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"editFormTab1\",\"designOptionsAdvanced\",\"parallax\",\"boxShadow\",\"dividers\",\"sticky\"]},\"containerFor\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"General\"]},\"relatedTo\":{\"type\":\"group\",\"access\":\"protected\",\"value\":[\"Column\"]},\"parentWrapper\":{\"type\":\"string\",\"access\":\"protected\",\"value\":\"row\"},\"metaCustomId\":{\"type\":\"customId\",\"access\":\"public\",\"value\":\"\",\"options\":{\"label\":\"Element ID\",\"description\":\"Apply a unique ID to the element to link it directly by using #your_id (for element ID use lowercase input only).\"}},\"tag\":{\"access\":\"protected\",\"type\":\"string\",\"value\":\"column\"},\"hidden\":{\"type\":\"string\",\"access\":\"public\",\"value\":false}}');\n\n//# sourceURL=webpack:///./column/settings.json?");

/***/ })

},[['./column/index.js']]]);