/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/submarine-art.png */ \"./src/assets/submarine-art.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/white-circle.svg */ \"./src/assets/white-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/red-circle.svg */ \"./src/assets/red-circle.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  /* font */\n  font-family: \"Handjet\", system-ui;\n  font-optical-sizing: auto;\n  font-weight: 400;\n  font-style: normal;\n  font-variation-settings: \"ELGR\" 1, \"ELSH\" 2;\n}\nbody {\n  background: rgb(118, 122, 93);\n  background: radial-gradient(\n    circle,\n    rgba(118, 122, 93, 1) 0%,\n    rgba(47, 53, 78, 1) 69%\n  );\n  animation: gradient 8s ease-in infinite;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  min-height: 100vh;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n}\n.page-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo {\n  font-family: \"Rubik Pixels\", system-ui;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 100px;\n}\n\n/* name page */\n#main-logo {\n  font-family: \"Rubik Pixels\", system-ui;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 140px;\n  margin-bottom: 0;\n  opacity: 0; /* Initially hidden */\n  background-image: linear-gradient(\n    to right,\n    #1b1a27,\n    #000000\n  ); /* Gradient effect */\n  background-clip: text; /* Ensures the gradient affects the text */\n  -webkit-background-clip: text;\n  color: transparent; /* Hide the original text color */\n  transition: opacity 2s ease-in-out 1s;\n}\n\nbody.loaded #main-logo {\n  opacity: 1; /* Make the text visible */\n}\n\n#name-page {\n  position: relative;\n}\n\n.form-div {\n  position: absolute;\n  top: 250px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40%;\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 1000;\n  opacity: 90%;\n  border-radius: 0.75rem;\n  padding: 30px 10px 30px 10px;\n  opacity: 0;\n  transition: opacity 2s ease-in-out 4s;\n}\nbody.loaded .form-div {\n  opacity: 1; /* Make the text visible */\n}\n\n.enter-name {\n  font-size: 48px;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n#user-name {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  font-size: 30px;\n  border-radius: 0.75rem;\n  text-align: center;\n}\n\n#name-submit,\n#orientation-btn,\n#play-again {\n  background-color: #111827;\n  border: 1px solid transparent;\n  border-radius: 0.75rem;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  flex: 0 0 auto;\n  font-size: 30px;\n  font-weight: 600;\n  line-height: 1.5rem;\n  padding: 0.75rem 1.2rem;\n  text-align: center;\n  text-decoration: none #6b7280 solid;\n  text-decoration-thickness: auto;\n  transition-duration: 0.2s;\n  transition-property: background-color, border-color, color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: auto;\n}\n\n#name-submit:hover,\n#play-again:hover,\n#orientation-btn:hover {\n  background-color: #374151;\n}\n\n#name-submit:focus,\n#play-again:focus,\n#orientation-btn:focus {\n  box-shadow: none;\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n@media (min-width: 768px) {\n  #name-submit,\n  #orientation-btn,\n  #play-again {\n    padding: 0.75rem 1.5rem;\n  }\n}\n\n#orientation-btn {\n  margin-bottom: 20px;\n}\n\n.battleship-img {\n  opacity: 0;\n  position: absolute;\n  top: 2px;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  width: 900px;\n  height: 900px;\n  background-size: cover;\n  transition: opacity 2s ease-in-out 2s;\n}\nbody.loaded .battleship-img {\n  opacity: 1; /* Make the text visible */\n}\n\n/* set ship page */\n\n.instruction {\n  font-size: 40px;\n  padding-bottom: 20px;\n  font-weight: 500;\n  color: #ffffffe3;\n}\n#user-set-ship {\n  width: 600px;\n  height: 600px;\n}\n.boards {\n  margin-top: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n}\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  position: relative;\n  box-shadow: 0 -5px 3px -3px black, 0 5px 3px -3px black;\n}\n\n.cell {\n  background-color: #162c4c;\n  border: 2px solid #fff;\n  padding: 20px;\n  font-size: 30px;\n  text-align: center;\n  position: relative;\n}\n\n.cell:hover {\n  /* background-color: #2e4668; */\n  cursor: crosshair;\n  transition: all 0.3s ease 0s;\n}\n#player-two-board .cell:hover {\n  background-color: #96180a;\n}\n\n.highlight {\n  background-color: rgba(130, 221, 156, 0.928);\n}\n\n.invalid-highlight {\n  background-color: red;\n  pointer-events: none;\n}\n\n.ship-placed {\n  pointer-events: none;\n  background-color: rgb(4, 28, 60);\n}\n\n/* game play page */\n\n#game-container {\n  width: 100%;\n  height: 100%;\n}\n#game-page {\n  width: 100%;\n}\n#game-page-logo {\n  font-size: 50px;\n  margin-bottom: 20px;\n}\n.board-label {\n  font-size: 50px;\n  text-align: center;\n  margin-top: 20px;\n  background-color: #fff;\n  color: #111827;\n  font-weight: 600;\n  width: 80%;\n  border-radius: 10px;\n  box-shadow: 10px 5px 5px #376dbd;\n}\n/* Game Message animations */\n.gameMsg {\n  background-color: none;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n  font-size: 40px;\n  overflow: hidden; /* Ensures the content is not revealed until the animation */\n  white-space: nowrap; /* Keeps the content on a single line */\n  margin: 0 auto; /* Gives that scrolling effect as the typing happens */\n  letter-spacing: 0.15em; /* Adjust as needed */\n  animation: typing 2.5s steps(40, end), step-start infinite;\n}\n\n/* The typing effect */\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n/* ship svg elements and divs */\n.svg-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  position: absolute; /* Absolute positioning to overlay cells */\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; /* Make sure the SVG doesn’t interfere with mouse events */\n  z-index: 1; /* Ensure the SVG is above the cells */\n}\n\n.ship-svg {\n  width: 90%;\n  height: 90%;\n  object-fit: cover;\n}\n\n.svg-div .y {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: 100%;\n  transform: translate(-50%, -50%) rotate(90deg); /* Center and rotate */\n  transform-origin: center;\n}\n\n.cpu-hidden {\n  display: none;\n}\n\n.sunk-ship {\n  filter: grayscale(100%) brightness(0) sepia(100%) hue-rotate(180deg)\n    saturate(10000%);\n}\n\n/* cell clicking and UI handling */\n.clicked {\n  pointer-events: none;\n}\n\n.missed-cell,\n.hit-cell {\n  background-size: 30px;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.missed-cell {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n.hit-cell {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\n#player-one-board {\n  pointer-events: none;\n}\n.disabled {\n  pointer-events: none;\n}\n.user,\n.cpu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#player-one-board,\n#player-two-board {\n  width: 600px;\n  height: 600px;\n}\n\n#play-again {\n  margin: 20px;\n}\n\n/* footer */\n.footer {\n  display: flex;\n  justify-content: center;\n  background-color: rgb(4, 28, 60);\n  width: 100vw;\n  margin: 0 auto;\n  margin-top: auto;\n  margin-bottom: 0;\n  font-size: 28px;\n  color: #fff;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n    1px 1px 0 #000;\n}\na {\n  text-decoration: none;\n  color: #fff;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ \"./src/Player.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\n\n\nclass Game {\n  constructor(ships, userName) {\n    this.userName = userName;\n    this.ships = ships;\n    this.playerOneBoard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(10);\n    this.playerTwoBoard = new _Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(10);\n\n    // Create ships for player one based on imported `ships` object\n    this.playerOneShips = {};\n    for (const name in this.ships) {\n      if (this.ships.hasOwnProperty(name)) {\n        const shipData = this.ships[name];\n        this.playerOneShips[name] = new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(\n          shipData.name,\n          shipData.length,\n          shipData.orientation,\n          false,\n          shipData.start\n        );\n      }\n    }\n\n    // Create ships for player two: random for computer\n    this.playerTwoShips = {\n      carrier: new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(\"carrier\", 5),\n      battleship: new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(\"battleship\", 4),\n      destroyer: new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(\"destroyer\", 3),\n      submarine: new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(\"submarine\", 3),\n      patrolBoat: new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(\"patrolBoat\", 2),\n    };\n\n    for (const key in this.playerTwoShips) {\n      if (this.playerTwoShips.hasOwnProperty(key)) {\n        const ship = this.playerTwoShips[key];\n        const { x, y, compOrientation } =\n          this.getRandomCoordinatesAndOrientation(\n            this.playerTwoBoard.size,\n            ship.length\n          );\n        ship.orientation = compOrientation;\n        ship.sunk = false;\n        ship.start = [x, y];\n      }\n    }\n\n    // Create players\n    this.playerOne = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Player(\n      \"person\",\n      this.playerOneBoard,\n      this.playerOneShips\n    );\n    this.playerTwo = new _Player_js__WEBPACK_IMPORTED_MODULE_1__.Player(\n      \"computer\",\n      this.playerTwoBoard,\n      this.playerTwoShips\n    );\n\n    // Use the updated ship positions for player one\n    this.loadShipsForPlacement(this.playerOneBoard, this.playerOneShips);\n\n    // Randomized placement for player two\n    this.loadShipsForPlacement(this.playerTwoBoard, this.playerTwoShips);\n  }\n\n  getBoard(elemID) {\n    if (elemID === \"player-one-board\") {\n      return this.playerOneBoard;\n    } else if (elemID === \"player-two-board\") {\n      return this.playerTwoBoard;\n    }\n  }\n\n  // prepare ship for placement on board\n  loadShipsForPlacement(board, ships) {\n    for (const shipName in ships) {\n      const ship = ships[shipName];\n      if (ship && ship.start) {\n        const [x, y] = ship.start;\n        board.placeShip(ship, x, y, ship.orientation === \"Y\");\n      }\n    }\n  }\n\n  checkAllShipsSunk(player) {\n    if (!player.ships || typeof player.ships !== \"object\") {\n      console.error(\"Player's ships are not properly initialized.\");\n      return false;\n    }\n\n    const shipsArray = Object.values(player.ships);\n    return shipsArray.every((ship) => ship.isSunk());\n  }\n  getRandomCoordinatesAndOrientation(boardSize, shipLength) {\n    let isValid = false;\n    let x, y, compOrientation;\n\n    while (!isValid) {\n      const arr = [\"X\", \"Y\"];\n      const randomIndex = Math.floor(Math.random() * arr.length);\n      compOrientation = arr[randomIndex];\n\n      // Generate random coordinates within the grid\n      const maxX =\n        compOrientation === \"X\" ? boardSize - 1 : boardSize - shipLength;\n      const maxY =\n        compOrientation === \"Y\" ? boardSize - 1 : boardSize - shipLength;\n\n      x = Math.floor(Math.random() * (maxX + 1));\n      y = Math.floor(Math.random() * (maxY + 1));\n\n      // Attempt to place the ship on the board\n      const isVertical = compOrientation === \"Y\";\n      isValid = this.playerTwoBoard.checkCPUShipPlacement(\n        new _Ship_js__WEBPACK_IMPORTED_MODULE_2__.Ship(\"temp\", shipLength, compOrientation, false, [x, y], 0), // Create a temporary ship object\n        x,\n        y,\n        isVertical\n      );\n    }\n\n    return { x, y, compOrientation };\n  }\n\n  // computer attack strategy\n  // initiate attack on a random coordinate until it hits a cell with a ship\n  // need to save previous attacks\n  randomAttack() {\n    let isValid = false;\n    // pick a random coordinate\n    let randomRow, randomColumn;\n\n    while (!isValid) {\n      randomRow = Math.floor(Math.random() * this.playerOneBoard.size);\n      randomColumn = Math.floor(Math.random() * this.playerOneBoard.size);\n      // case 1: the cell is null (no attack has been made)\n      const playerOneAttacksMadeGrid = this.playerOneBoard.attacksMade;\n      isValid = playerOneAttacksMadeGrid[randomRow][randomColumn] === null;\n    }\n    return { randomRow, randomColumn };\n  }\n\n  // Static method to initialize the game\n  static initialize() {\n    return new Game();\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Game.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\nclass Gameboard {\n  constructor(size) {\n    this.size = size;\n    this.grid = Array.from({ length: size }, () => Array(size).fill(null));\n    this.attacksMade = Array.from({ length: size }, () =>\n      Array(size).fill(null)\n    );\n    this.ships = [];\n    this.tempGrid = Array.from({ length: size }, () => Array(size).fill(null));\n    this.missed = [];\n  }\n\n  placeShip(ship, x, y, isVertical) {\n    if (isVertical) {\n      if (x + ship.length > this.size) return false; // Out of bounds\n      for (let i = 0; i < ship.length; i++) {\n        if (this.grid[x + i][y] !== null) return false; // Collision with existing ship\n      }\n      for (let i = 0; i < ship.length; i++) {\n        if (ship.name !== \"temp\") {\n          this.grid[x + i][y] = ship; // Place the ship\n        }\n      }\n    } else {\n      // horizontal placement\n      if (y + ship.length > this.size) return false; // Out of bounds\n      for (let i = 0; i < ship.length; i++) {\n        if (this.grid[x][y + i] !== null) return false; // Collision with existing ship\n      }\n      for (let i = 0; i < ship.length; i++) {\n        if (ship.name !== \"temp\") {\n          this.grid[x][y + i] = ship; // Place the ship\n        }\n      }\n    }\n    return true; // Successfully placed the ship\n  }\n\n  checkCPUShipPlacement(ship, x, y, isVertical) {\n    if (isVertical) {\n      if (x + ship.length > this.size) return false; // Out of bounds\n      for (let i = 0; i < ship.length; i++) {\n        if (this.tempGrid[x + i][y] !== null) return false; // Collision with existing ship\n      }\n      for (let i = 0; i < ship.length; i++) {\n        this.tempGrid[x + i][y] = ship; // Place the ship\n      }\n    } else {\n      // horizontal placement\n      if (y + ship.length > this.size) return false; // Out of bounds\n      for (let i = 0; i < ship.length; i++) {\n        if (this.tempGrid[x][y + i] !== null) return false; // Collision with existing ship\n      }\n      for (let i = 0; i < ship.length; i++) {\n        this.tempGrid[x][y + i] = ship; // Place the ship\n      }\n    }\n    return true; // Successfully placed the ship\n  }\n\n  receiveAttack(row, column, cellParentBoard) {\n    const hitElem = this.grid[row][column];\n    if (hitElem !== null) {\n      this.attacksMade[row][column] = \"hit\";\n      hitElem.hit();\n      if (hitElem.isSunk()) {\n        const className = `${hitElem.name}-svg`;\n        const shipImage = cellParentBoard.querySelector(`img.${className}`);\n        shipImage.classList.add(\"sunk-ship\");\n        shipImage.classList.remove(\"cpu-hidden\");\n      }\n    } else {\n      this.attacksMade[row][column] = \"missed\";\n      this.storeMissed(row, column);\n    }\n  }\n\n  storeMissed(row, column) {\n    const missedCoordinate = [row, column];\n    this.missed.push(missedCoordinate);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n\nclass Player {\n  constructor(type, gameboard, ships) {\n    this.type = type;\n    this.gameboard = gameboard;\n    this.ships = ships;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(name, length, orientation, sunk = false, start, hits = 0) {\n    this.name = name;\n    this.length = length;\n    this.hits = hits;\n    this.sunk = sunk;\n    this.orientation = orientation;\n    this.start = start;\n  }\n  // 'hits' the ship\n  hit() {\n    this.hits++;\n  }\n\n  // check whether the ship sunk or not\n  isSunk() {\n    return this.length <= this.hits;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _assets_carrier_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/carrier.svg */ \"./src/assets/carrier.svg\");\n/* harmony import */ var _assets_battleship_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/battleship.svg */ \"./src/assets/battleship.svg\");\n/* harmony import */ var _assets_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/destroyer.svg */ \"./src/assets/destroyer.svg\");\n/* harmony import */ var _assets_patrol_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/patrol.svg */ \"./src/assets/patrol.svg\");\n/* harmony import */ var _assets_submarine_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/submarine.svg */ \"./src/assets/submarine.svg\");\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n// UI.js\n\n\n\n\n\n\nclass UI {\n  constructor(game) {\n    this.game = game;\n    this.userName = this.game.userName;\n    // this.setupEventListeners();\n    this.userTurn = true;\n    this.gameEnded = false;\n  }\n\n  initialize() {\n    this.setDOMElements();\n    this.updateUI();\n    this.domElements();\n    this.setupEventListeners();\n  }\n\n  setDOMElements() {\n    const container = document.querySelector(\".container\");\n    container.id = \"game-container\";\n    const pageContent = document.createElement(\"div\");\n    pageContent.className = \"page-content\";\n    pageContent.id = \"game-page\";\n\n    // game logo\n    const gameLogo = document.createElement(\"div\");\n    gameLogo.className = \"logo\";\n    gameLogo.id = \"game-page-logo\";\n    gameLogo.textContent = \"BATTLESHIP\";\n    pageContent.appendChild(gameLogo);\n    // game message\n    const gameMsg = document.createElement(\"div\");\n    gameMsg.classList.add(\"gameMsg\");\n    gameMsg.textContent = `Awaiting orders, Admiral ${this.userName}.`;\n    pageContent.appendChild(gameMsg);\n\n    // div for user & cpu board\n    const boards = document.createElement(\"div\");\n    boards.classList.add(\"boards\");\n\n    // user div\n    const userDiv = document.createElement(\"div\");\n    userDiv.classList.add(\"user\");\n    const userBoard = document.createElement(\"div\");\n    userBoard.classList.add(\"gameboard\");\n    userBoard.id = \"player-one-board\";\n    userDiv.appendChild(userBoard);\n\n    // user name label\n    const userBoardName = document.createElement(\"div\");\n    userBoardName.classList.add(\"board-label\");\n    userBoardName.textContent = `${this.userName}`;\n    userDiv.appendChild(userBoardName);\n\n    boards.appendChild(userDiv);\n    // cpu div\n    const cpuDiv = document.createElement(\"div\");\n    cpuDiv.classList.add(\"cpu\");\n    const cpuBoard = document.createElement(\"div\");\n    cpuBoard.classList.add(\"gameboard\");\n    cpuBoard.id = \"player-two-board\";\n    cpuDiv.appendChild(cpuBoard);\n\n    const cpuBoardName = document.createElement(\"div\");\n    cpuBoardName.classList.add(\"board-label\");\n    cpuBoardName.textContent = \"CPU\";\n    cpuDiv.appendChild(cpuBoardName);\n    boards.appendChild(cpuDiv);\n\n    pageContent.appendChild(boards);\n\n    container.appendChild(pageContent);\n  }\n  domElements() {\n    this.cpuBoard = document.getElementById(\"player-two-board\");\n    this.userCells = document.querySelectorAll(\"#player-one-board .cell\");\n    this.cpuCells = document.querySelectorAll(\"#player-two-board .cell\");\n    this.gameMsg = document.querySelector(\".gameMsg\");\n  }\n  setupEventListeners() {\n    if (!this.cpuCells || this.cpuCells.length === 0) {\n      console.error(\"CPU cells are not available for event listeners.\");\n      return;\n    }\n\n    this.cpuCells.forEach((cell) => {\n      cell.addEventListener(\"click\", (event) => this.handleAttack(event));\n    });\n  }\n\n  // render player's board state\n  renderBoard(board, elementId) {\n    const boardElement = document.getElementById(elementId);\n\n    boardElement.innerHTML = \"\"; // Clear existing content\n\n    // create grid cells based on board 2d array\n    for (let i = 0; i < 100; i++) {\n      const row = parseInt(i / 10);\n      const col = i % 10;\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      if (elementId === \"player-two-board\") {\n        cell.setAttribute(\"id\", \"c\" + row + \"-\" + col);\n      } else {\n        cell.setAttribute(\"id\", \"u\" + row + \"-\" + col);\n      }\n\n      boardElement.appendChild(cell);\n    }\n\n    const grid = board.grid;\n    const shipHead = [];\n    // ship placement UI: only initially display SVGs for the user, not CPU\n    for (let r = 0; r < board.size; r++) {\n      for (let c = 0; c < board.size; c++) {\n        const shipElem = grid[r][c];\n\n        if (shipElem && !shipHead.includes(shipElem.name)) {\n          shipHead.push(shipElem.name);\n\n          const shipSVG = document.createElement(\"img\");\n          const shipTypePath = this.determineShipType(shipElem);\n          const shipClassName = this.determineShipClassName(shipElem);\n          // make sure cpu elements are hidden unless ship sinks\n          if (elementId === \"player-two-board\") {\n            if (!shipSVG.classList.contains(\"sunk-ship\")) {\n              shipSVG.classList.add(\"cpu-hidden\");\n            }\n          }\n          if (shipTypePath) {\n            shipSVG.src = shipTypePath;\n            shipSVG.classList.add(\"ship-svg\", shipClassName);\n\n            const isHorizontal = shipElem.orientation === \"X\";\n\n            const svgDiv = document.createElement(\"div\");\n            svgDiv.classList.add(\"svg-div\");\n\n            if (isHorizontal) {\n              svgDiv.style.gridArea = `${r + 1} / ${c + 1} / span 1 / span ${\n                shipElem.length\n              }`;\n            } else {\n              shipSVG.classList.add(\"y\");\n              svgDiv.style.gridArea = `${r + 1} / ${c + 1} / span ${\n                shipElem.length\n              } / span 1`;\n            }\n\n            svgDiv.appendChild(shipSVG);\n            boardElement.appendChild(svgDiv);\n          }\n        }\n      }\n    }\n  }\n\n  // returns ship type name\n  determineShipType(ship) {\n    switch (ship.name) {\n      case \"carrier\":\n        return _assets_carrier_svg__WEBPACK_IMPORTED_MODULE_0__;\n      case \"battleship\":\n        return _assets_battleship_svg__WEBPACK_IMPORTED_MODULE_1__;\n      case \"destroyer\":\n        return _assets_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__;\n      case \"submarine\":\n        return _assets_submarine_svg__WEBPACK_IMPORTED_MODULE_4__;\n      case \"patrolBoat\":\n        return _assets_patrol_svg__WEBPACK_IMPORTED_MODULE_3__;\n      default:\n        console.error(\"Unknown ship type:\", ship.name);\n        return null;\n    }\n  }\n\n  cpuAttack() {\n    if (this.gameOver()) {\n      this.endGame();\n      return;\n    }\n    setTimeout(() => {\n      const randomCoordinates = this.game.randomAttack();\n      const attackedRow = randomCoordinates.randomRow;\n      const attackedColumn = randomCoordinates.randomColumn;\n\n      // Get the corresponding cell on the user's board\n      const cellId = `${attackedRow}-${attackedColumn}`;\n      const attackedCell = document.getElementById(`u${cellId}`);\n\n      // Execute the attack after another brief delay (e.g., 1 second)\n      setTimeout(() => {\n        this.handleAttack(attackedCell);\n      }, 1000); // Additional delay for attack execution\n    }, 1500); // Initial delay before showing the attack\n  }\n\n  determineShipClassName(ship) {\n    switch (ship.name) {\n      case \"carrier\":\n        return \"carrier-svg\";\n      case \"battleship\":\n        return \"battleship-svg\";\n      case \"destroyer\":\n        return \"destroyer-svg\";\n      case \"submarine\":\n        return \"submarine-svg\";\n      case \"patrolBoat\":\n        return \"patrolBoat-svg\";\n      default:\n        console.error(\"Unknown ship type:\", ship.name);\n        return null;\n    }\n  }\n\n  // Update game turn; toggle true/false\n  updateTurn() {\n    if (this.gameOver()) {\n      this.endGame();\n      return;\n    }\n\n    this.userTurn = !this.userTurn;\n    this.toggleUserTurn(this.userTurn);\n\n    if (this.userTurn) {\n      // Delay the message update for the player's turn\n      setTimeout(() => {\n        this.gameMsg.textContent = `Awaiting orders, Admiral ${this.userName}.`;\n        this.resetAnimation(this.gameMsg);\n      }, 1500);\n    } else {\n      // Delay CPU attack\n      setTimeout(() => {\n        this.cpuAttack();\n      }, 1000);\n    }\n  }\n\n  toggleUserTurn() {\n    if (this.userTurn) {\n      this.cpuBoard.classList.remove(\"disabled\");\n    } else {\n      this.cpuBoard.classList.add(\"disabled\");\n    }\n  }\n\n  // handles events after a cell is clicked for attack\n  handleAttack(cell) {\n    if (this.gameEnded) return;\n\n    let cellID, cellParentBoard;\n    if (this.userTurn) {\n      this.gameMsg.textContent = `Awaiting orders, Admiral ${this.userName}.`;\n      this.resetAnimation(this.gameMsg);\n    }\n\n    // Check if 'cell' is an Event (from an event listener) or a DOM element\n    if (cell instanceof Event) {\n      const targetCell = cell.target; // Event target\n      cellID = targetCell.id;\n      cellParentBoard = targetCell.closest(\".gameboard\");\n      targetCell.classList.add(\"clicked\"); // Add 'clicked' class to the event target\n    } else if (cell instanceof HTMLElement) {\n      cellID = cell.id; // Direct DOM element\n      cellParentBoard = cell.closest(\".gameboard\");\n      cell.classList.add(\"clicked\"); // Add 'clicked' class to the element directly\n    }\n\n    const row = cellID[1];\n    const column = cellID[3];\n    const attackedBoard = this.game.getBoard(cellParentBoard.id);\n\n    // Clear previous message and set new game message\n    if (cell instanceof Event) {\n      this.gameMsg.textContent = \"Launching attack...\";\n    } else if (cell instanceof HTMLElement) {\n      this.gameMsg.textContent = \"CPU launching attack...\";\n    }\n\n    this.resetAnimation(this.gameMsg);\n\n    // Delay for 1 second before executing the attack logic\n    setTimeout(() => {\n      attackedBoard.receiveAttack(row, column, cellParentBoard);\n      this.updateCellUI(row, column, attackedBoard, cellParentBoard.id);\n\n      // Check if the game is over after the UI is updated\n      if (this.gameOver()) {\n        this.endGame();\n      }\n\n      // Update the turn after the attack and UI update\n      this.updateTurn();\n    }, 1500);\n  }\n\n  // Update only the affected cell UI\n  updateCellUI(row, column, board, boardId) {\n    let cellDiv;\n    this.resetAnimation(this.gameMsg);\n    if (boardId === \"player-one-board\") {\n      cellDiv = document.getElementById(`u${row}-${column}`);\n    } else {\n      cellDiv = document.getElementById(`c${row}-${column}`);\n    }\n\n    const attackType = board.attacksMade[row][column];\n\n    if (attackType === \"hit\") {\n      cellDiv.classList.add(\"hit-cell\"); // Add appropriate class\n\n      this.gameMsg.textContent = \"Ship hit!\";\n      this.resetAnimation(this.gameMsg);\n    } else if (attackType === \"missed\") {\n      cellDiv.classList.add(\"missed-cell\"); // Add appropriate class\n\n      this.gameMsg.textContent = \"...and attack misses.\";\n      this.resetAnimation(this.gameMsg);\n    }\n\n    const hitElem = board.grid[row][column];\n    console.log(\"lemado\", board.grid[row][column]);\n    if (hitElem !== null) {\n      if (hitElem.isSunk()) {\n        this.gameMsg.textContent = `${hitElem.name} sunk.`;\n      }\n    }\n  }\n  resetAnimation(element) {\n    // Remove the class that triggers the animation\n    element.style.animation = \"none\";\n\n    // Force a reflow to restart the animation\n    element.offsetHeight; // This line forces reflow/repaint in the browser\n\n    // Reapply the animation class\n    element.style.animation = null;\n  }\n\n  updateUI() {\n    this.renderBoard(this.game.playerOneBoard, \"player-one-board\");\n    this.renderBoard(this.game.playerTwoBoard, \"player-two-board\");\n    this.domElements();\n    //this.setupEventListeners();\n  }\n\n  gameOver() {\n    const allPlayerOneShipsSunk = this.game.checkAllShipsSunk(\n      this.game.playerOne\n    );\n    const allPlayerTwoShipsSunk = this.game.checkAllShipsSunk(\n      this.game.playerTwo\n    );\n\n    return allPlayerOneShipsSunk || allPlayerTwoShipsSunk;\n  }\n\n  // terminate game: disable all pointer events and display button to replay the game\n  endGame() {\n    if (this.gameEnded) return; // Prevent multiple endGame executions\n\n    this.gameEnded = true; // Set flag to mark game as ended\n    this.gameMsg.textContent = \"Game Over!\";\n    const page = document.getElementById(\"game-page\");\n\n    // Check if the button already exists to avoid appending it multiple times\n    let playAgainBtn = document.getElementById(\"play-again\");\n    if (!playAgainBtn) {\n      playAgainBtn = document.createElement(\"button\");\n      playAgainBtn.id = \"play-again\";\n      playAgainBtn.textContent = \"Play Again\";\n      playAgainBtn.addEventListener(\"click\", () => {\n        window.location.reload();\n      });\n      page.appendChild(playAgainBtn);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n/* harmony import */ var _Gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard.js */ \"./src/Gameboard.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setName */ \"./src/setName.js\");\n\nfunction initialLoad() {\n  (0,_setName__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n\n//# sourceURL=webpack://battleship/./src/pageLoad.js?");

/***/ }),

/***/ "./src/setName.js":
/*!************************!*\
  !*** ./src/setName.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setShip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setShip */ \"./src/setShip.js\");\n\n\nconst setNamePage = () => {\n  const container = document.querySelector(\".container\");\n  const pageContent = document.createElement(\"div\");\n  pageContent.className = \"page-content\";\n  pageContent.id = \"name-page\";\n\n  // game logo\n  const gameLogo = document.createElement(\"div\");\n  gameLogo.className = \"logo\";\n  gameLogo.id = \"main-logo\";\n  gameLogo.textContent = \"BATTLESHIP\";\n\n  const battleshipImg = document.createElement(\"div\");\n  battleshipImg.classList.add(\"battleship-img\");\n\n  // div with name form\n  const formDiv = document.createElement(\"div\");\n  formDiv.className = \"form-div\";\n\n  const formText = document.createElement(\"p\");\n  formText.className = \"enter-name\";\n  formText.textContent = \"Enter Name for Battle\";\n\n  const nameForm = document.createElement(\"form\");\n  nameForm.id = \"name-form\";\n\n  const userName = document.createElement(\"input\");\n  userName.id = \"user-name\";\n  userName.placeholder = \"Combatant Name\";\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.id = \"name-submit\";\n  submitBtn.type = \"submit\";\n  submitBtn.textContent = \"Start Battle\";\n\n  nameForm.appendChild(userName);\n  nameForm.appendChild(submitBtn);\n\n  formDiv.appendChild(formText);\n  formDiv.appendChild(nameForm);\n\n  pageContent.appendChild(gameLogo);\n  pageContent.appendChild(formDiv);\n  pageContent.appendChild(battleshipImg);\n\n  container.appendChild(pageContent);\n  window.addEventListener(\"load\", () => {\n    document.body.classList.add(\"loaded\");\n  });\n  nameForm.addEventListener(\"submit\", (event) => {\n    clearContent();\n    (0,_setShip__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(userName.value);\n  });\n};\n\nfunction clearContent() {\n  const container = document.querySelector(\".container\");\n  const pageContent = document.querySelector(\".page-content\");\n  if (pageContent) {\n    container.removeChild(pageContent);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNamePage);\n\n\n//# sourceURL=webpack://battleship/./src/setName.js?");

/***/ }),

/***/ "./src/setShip.js":
/*!************************!*\
  !*** ./src/setShip.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   ships: () => (/* binding */ ships)\n/* harmony export */ });\n/* harmony import */ var _assets_carrier_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/carrier.svg */ \"./src/assets/carrier.svg\");\n/* harmony import */ var _assets_battleship_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/battleship.svg */ \"./src/assets/battleship.svg\");\n/* harmony import */ var _assets_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/destroyer.svg */ \"./src/assets/destroyer.svg\");\n/* harmony import */ var _assets_patrol_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/patrol.svg */ \"./src/assets/patrol.svg\");\n/* harmony import */ var _assets_submarine_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/submarine.svg */ \"./src/assets/submarine.svg\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ship.js */ \"./src/Ship.js\");\n\n\n\n\n\n\n\n\n\nconst ships = {\n  carrier: {\n    length: 5,\n    placed: false,\n    start: null,\n    orientation: null,\n    name: \"carrier\",\n  },\n  battleship: {\n    length: 4,\n    placed: false,\n    start: null,\n    orientation: null,\n    name: \"battleship\",\n  },\n  destroyer: {\n    length: 3,\n    placed: false,\n    start: null,\n    orientation: null,\n    name: \"destroyer\",\n  },\n  submarine: {\n    length: 3,\n    placed: false,\n    start: null,\n    orientation: null,\n    name: \"submarine\",\n  },\n  patrolBoat: {\n    length: 2,\n    placed: false,\n    start: null,\n    orientation: null,\n    name: \"patrolBoat\",\n  },\n};\nconst setShip = (name) => {\n  const container = document.querySelector(\".container\");\n  const pageContent = document.createElement(\"div\");\n  pageContent.className = \"page-content\";\n  pageContent.id = \"ship-page\";\n\n  const gameLogo = document.createElement(\"div\");\n  gameLogo.className = \"logo\";\n  gameLogo.textContent = \"BATTLESHIP\";\n\n  const orientationBtn = document.createElement(\"button\");\n  orientationBtn.className = \"orientation-btn\";\n  orientationBtn.id = \"orientation-btn\";\n\n  let currentOrientation = \"X\";\n  orientationBtn.textContent = \"Orientation: \" + currentOrientation;\n\n  const instruction = document.createElement(\"div\");\n  instruction.className = \"instruction\";\n\n  const boardDiv = document.createElement(\"div\");\n  boardDiv.className = \"boards\";\n  const boardElement = document.createElement(\"div\");\n  boardElement.className = \"gameboard\";\n  boardElement.id = \"user-set-ship\";\n  for (let i = 0; i < 100; i++) {\n    const row = parseInt(i / 10);\n    const col = i % 10;\n    const cell = document.createElement(\"div\");\n    cell.classList.add(\"cell\");\n    cell.setAttribute(\"id\", row + \"-\" + col);\n    boardElement.appendChild(cell);\n  }\n  boardDiv.appendChild(boardElement);\n\n  let currentShip = ships.carrier;\n  instruction.textContent = `${name.toUpperCase()}, PLACE YOUR ${currentShip.name.toUpperCase()}`;\n  let lastCell = null;\n\n  function updateInstruction() {\n    const uppercasedName = currentShip.name.toUpperCase();\n    instruction.textContent = `${name.toUpperCase()}, PLACE YOUR ${uppercasedName}`;\n  }\n\n  boardElement.addEventListener(\"mouseover\", (event) => {\n    if (event.target.classList.contains(\"cell\")) {\n      lastCell = event.target;\n      highlightCells(lastCell, currentShip);\n    }\n  });\n\n  boardElement.addEventListener(\"mouseout\", (event) => {\n    if (event.target.classList.contains(\"cell\")) {\n      removeHighlight(event.target, currentShip);\n    }\n  });\n\n  boardElement.addEventListener(\"click\", (event) => {\n    if (event.target.classList.contains(\"cell\")) {\n      lastCell = event.target;\n      placeShip(lastCell, currentShip);\n      moveToNextShip();\n    }\n  });\n\n  function highlightCells(cell, ship) {\n    const [row, col] = getCellPosition(cell);\n    let isValidPlacement = true;\n\n    if (currentOrientation === \"X\") {\n      if (col + ship.length > 10) {\n        isValidPlacement = false;\n      }\n    } else if (currentOrientation === \"Y\") {\n      if (row + ship.length > 10) {\n        isValidPlacement = false;\n      }\n    }\n\n    if (isValidPlacement) {\n      for (let i = 0; i < ship.length; i++) {\n        const targetCell =\n          currentOrientation === \"X\"\n            ? getCell(row, col + i)\n            : getCell(row + i, col);\n        if (targetCell) targetCell.classList.add(\"highlight\");\n      }\n    } else {\n      for (let i = 0; i < ship.length; i++) {\n        const targetCell =\n          currentOrientation === \"X\"\n            ? getCell(row, col + i)\n            : getCell(row + i, col);\n        if (targetCell) targetCell.classList.add(\"invalid-highlight\");\n      }\n    }\n  }\n\n  function removeHighlight(cell, ship) {\n    const [row, col] = getCellPosition(cell);\n    for (let i = 0; i < ship.length; i++) {\n      const targetCell =\n        currentOrientation === \"X\"\n          ? getCell(row, col + i)\n          : getCell(row + i, col);\n      if (targetCell) {\n        targetCell.classList.remove(\"highlight\", \"invalid-highlight\");\n      }\n    }\n  }\n\n  orientationBtn.addEventListener(\"click\", () => {\n    currentOrientation = currentOrientation === \"X\" ? \"Y\" : \"X\";\n    orientationBtn.textContent = \"Orientation: \" + currentOrientation;\n\n    if (lastCell) {\n      removeHighlight(lastCell, currentShip);\n      highlightCells(lastCell, currentShip);\n    }\n  });\n\n  function placeShip(cell, ship) {\n    const shipHead = [];\n    const [row, col] = getCellPosition(cell);\n    ship.start = [row, col];\n    ship.placed = true;\n    ship.orientation = currentOrientation;\n\n    // Create the ship SVG only once per ship\n    if (!shipHead.includes(ship.name)) {\n      shipHead.push(ship.name);\n\n      const shipSVG = document.createElement(\"img\");\n      const shipTypePath = determineShipType(ship); // Function to determine the SVG source based on the ship type\n      const shipClassName = determineShipClassName(ship); // Function to determine the class name of the ship SVG\n\n      if (shipTypePath) {\n        shipSVG.src = shipTypePath; // Set the SVG path\n        shipSVG.classList.add(\"ship-svg\", shipClassName); // Add class for styling the SVG\n\n        const svgDiv = document.createElement(\"div\"); // Create a div to contain the SVG\n        svgDiv.classList.add(\"svg-div\");\n\n        // Handle orientation and grid area placement\n        if (ship.orientation === \"X\") {\n          // Horizontal placement\n          svgDiv.style.gridArea = `${row + 1} / ${col + 1} / span 1 / span ${\n            ship.length\n          }`;\n\n          // Apply the ship class to the cells (for background color or other effects)\n          for (let i = 0; i < ship.length; i++) {\n            const targetCell = getCell(row, col + i);\n            if (targetCell) {\n              targetCell.classList.add(\"ship-placed\"); // Add the class for background color\n            }\n          }\n        } else if (ship.orientation === \"Y\") {\n          // Vertical placement\n          shipSVG.classList.add(\"y\"); // Add class for vertical styling\n          svgDiv.style.gridArea = `${row + 1} / ${col + 1} / span ${\n            ship.length\n          } / span 1`;\n\n          // Apply the ship class to the cells (for background color or other effects)\n          for (let i = 0; i < ship.length; i++) {\n            const targetCell = getCell(row + i, col);\n            if (targetCell) {\n              targetCell.classList.add(\"ship-placed\"); // Add the class for background color\n            }\n          }\n        }\n\n        // Append the SVG to the board\n        svgDiv.appendChild(shipSVG);\n        const boardElement = document.querySelector(\".gameboard\"); // Assuming the gameboard class is used\n        boardElement.appendChild(svgDiv);\n      }\n    }\n  }\n\n  function moveToNextShip() {\n    if (currentShip === ships.carrier) {\n      currentShip = ships.battleship;\n    } else if (currentShip === ships.battleship) {\n      currentShip = ships.destroyer;\n    } else if (currentShip === ships.destroyer) {\n      currentShip = ships.submarine;\n    } else if (currentShip === ships.submarine) {\n      currentShip = ships.patrolBoat;\n    } else if (currentShip === ships.patrolBoat) {\n      console.log(\"All ships placed!\", ships);\n      clearContent();\n      saveBoardState();\n    }\n    updateInstruction();\n  }\n\n  function determineShipType(ship) {\n    switch (ship.name) {\n      case \"carrier\":\n        return _assets_carrier_svg__WEBPACK_IMPORTED_MODULE_0__;\n      case \"battleship\":\n        return _assets_battleship_svg__WEBPACK_IMPORTED_MODULE_1__;\n      case \"destroyer\":\n        return _assets_destroyer_svg__WEBPACK_IMPORTED_MODULE_2__;\n      case \"submarine\":\n        return _assets_submarine_svg__WEBPACK_IMPORTED_MODULE_4__;\n      case \"patrolBoat\":\n        return _assets_patrol_svg__WEBPACK_IMPORTED_MODULE_3__;\n      default:\n        console.error(\"Unknown ship type:\", ship.name);\n        return null;\n    }\n  }\n\n  function determineShipClassName(ship) {\n    switch (ship.name) {\n      case \"carrier\":\n        return \"carrier-svg\";\n      case \"battleship\":\n        return \"battleship-svg\";\n      case \"destroyer\":\n        return \"destroyer-svg\";\n      case \"submarine\":\n        return \"submarine-svg\";\n      case \"patrolBoat\":\n        return \"patrolBoat-svg\";\n      default:\n        console.error(\"Unknown ship type:\", ship.name);\n        return null;\n    }\n  }\n\n  function getCellPosition(cell) {\n    const [row, col] = cell.id.split(\"-\").map(Number);\n    return [row, col];\n  }\n\n  function getCell(row, col) {\n    return document.getElementById(`${row}-${col}`);\n  }\n\n  function saveBoardState() {\n    // Create a new Game instance with the player name and ships\n    const game = new _Game_js__WEBPACK_IMPORTED_MODULE_6__.Game(ships, name);\n\n    // Initialize the UI with the game instance\n    const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_5__.UI(game);\n\n    ui.initialize();\n    // Update the UI to show the game board\n  }\n  pageContent.appendChild(gameLogo);\n  pageContent.appendChild(instruction);\n  pageContent.appendChild(orientationBtn);\n  pageContent.appendChild(boardDiv);\n  container.appendChild(pageContent);\n};\n\nfunction clearContent() {\n  const container = document.querySelector(\".container\");\n  const pageContent = document.querySelector(\".page-content\");\n  if (pageContent) {\n    container.removeChild(pageContent);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setShip);\n\n\n//# sourceURL=webpack://battleship/./src/setShip.js?");

/***/ }),

/***/ "./src/assets/battleship.svg":
/*!***********************************!*\
  !*** ./src/assets/battleship.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"467ee273070a087189d4.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/battleship.svg?");

/***/ }),

/***/ "./src/assets/carrier.svg":
/*!********************************!*\
  !*** ./src/assets/carrier.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bd2e383a533c0edda3f.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/carrier.svg?");

/***/ }),

/***/ "./src/assets/destroyer.svg":
/*!**********************************!*\
  !*** ./src/assets/destroyer.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56a2b73fd050d6781f33.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/destroyer.svg?");

/***/ }),

/***/ "./src/assets/patrol.svg":
/*!*******************************!*\
  !*** ./src/assets/patrol.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a93276ccd5df3a7dab1.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/patrol.svg?");

/***/ }),

/***/ "./src/assets/red-circle.svg":
/*!***********************************!*\
  !*** ./src/assets/red-circle.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"800f258b5a391bef7743.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/red-circle.svg?");

/***/ }),

/***/ "./src/assets/submarine-art.png":
/*!**************************************!*\
  !*** ./src/assets/submarine-art.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b21b9fc1aae7a4a7a39.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/submarine-art.png?");

/***/ }),

/***/ "./src/assets/submarine.svg":
/*!**********************************!*\
  !*** ./src/assets/submarine.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0dae6204e583e4314d8c.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/submarine.svg?");

/***/ }),

/***/ "./src/assets/white-circle.svg":
/*!*************************************!*\
  !*** ./src/assets/white-circle.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a5cf453cf026c5ac9a48.svg\";\n\n//# sourceURL=webpack://battleship/./src/assets/white-circle.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;