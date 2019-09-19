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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr) {\n    this.arr = arr;\n  }\n\n  html(string) {\n    if (!string) {\n      return this.arr[0].innerHTML;\n    } else {\n      for (let i = 0; i < this.arr.length; i++) {\n        this.arr[i].innerHTML = string;\n      }\n    }\n  }\n\n  empty() {\n    for (let i = 0; i < this.arr.length; i++) {\n      this.arr[i].innerHTML = \"\";\n    }\n    return this;\n  }\n\n  append(element) {\n    if (element instanceof DOMNodeCollection) {\n      for (let i = 0; i < element.arr.length; i++) {\n        const out = element.arr[i].outerHTML;\n        for (let j = 0; j < this.arr.length; j++) {\n          this.arr[j].innerHTML += out;\n        }\n      }\n    } else if (typeof element === \"string\") {\n      for (let k = 0; k < this.arr.length; k++) {\n        this.arr[k].innerHTML += element;\n      }\n    } else {\n      for (let l = 0; l < this.arr.length; l++) {\n        this.arr[length].innerHTML += element;\n      }\n    }\n  }\n\n  attr(attribute, value) {\n    for (let i = 0; i < this.arr.length; i++) {\n      if (!value) {\n        return this.arr[i].getAttribute(attribute);\n      } else {\n        this.arr[i].setAttribute(attribute, value);\n        return this;\n      }\n    }\n  }\n\n  addClass(name) {\n    for (let i = 0; i < this.arr.length; i++) {\n      this.arr[i].setAttribute(\"class\", name);\n    }\n  }\n\n  removeClass(name) {\n    for (let i = 0; i < this.arr.length; i++) {\n      if (this.arr[i].getAttribute(\"class\") === name) {\n        this.arr[i].removeAttribute(\"class\");\n      }\n    }\n  }\n\n  children(){\n    let kids =[];\n    this.arr.forEach(element => {\n      kids = kids.concat(Array.from(element.children));\n    });\n    return new DOMNodeCollection(kids);\n  }\n\n  parent(){\n    let adults = [];\n    this.arr.forEach(element => {\n      adults = adults.concat(Array.from(element.parent));\n    });\n    return new DOMNodeCollection(adults);\n  }\n\n  find(selector) {\n    let nodes = [];\n    // const selected = this.querySelectorAll(selector)\n    this.arr.forEach(element => {\n      const elements = Array.from(element.querySelectorAll(selector))\n        nodes = nodes.concat(elements)      \n    });\n    return new DOMNodeCollection(nodes);\n  }\n\n  remove(){\n    this.arr.forEach(element => {\n        element.remove();\n    });\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nfunction $l(selector){\n\n  if( typeof selector === 'string'){ //$(.class-name)\n    // debugger\n    let cssSelector = document.querySelectorAll(selector);\n    let selectorArr = Array.from(cssSelector);\n    return new DOMNodeCollection(selectorArr);\n  }else{\n    // debugger\n    return new DOMNodeCollection([selector]);\n  }\n\n}\n\nwindow.$l = $l;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });