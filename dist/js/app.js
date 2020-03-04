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
/******/ 	__webpack_require__.p = "../../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  * MAIN APP SCRIPTS ENTRY POINT
  */

// extract text from webpack to bundled output file
__webpack_require__(1);

__webpack_require__(2);

//import MobileMenu from './MobileMenu';
//import Modal from './Modal';

//var mobileMenu = new MobileMenu();
//var modal = new Modal();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  $(".form").submit(function (e) {
    e.preventDefault();
    var href = $(this).attr("action");
    var validForm = true; // Set initial state of valid form to true
    var inputArray = $(this).find("input.required"); // Find all required inputs and store them in array

    // Simple check for all inputs to make sure the value is not empty
    inputArray.each(function (item) {
      if ($(this).val() == "") {
        validForm = false;
        $(".mc_embed_signup .error-message").show(); // if empty, show error message
        $(".mc_embed_signup input.required").addClass("error"); // and highlight empty inputs
      }
    });

    if (validForm == true) {
      var formContainer = $(".mc_embed_signup");
      $.ajax({
        type: "POST",
        dataType: "json",
        url: href,
        data: $(this).serialize(),
        success: function success(response) {
          if (response.status == "success") {
            console.log("submitted");
            $(formContainer).hide(); // Hide the initial form
            $(".success-message").show(); // Show the checkmark
            $("svg").addClass("active"); // Start animation of checkmark
          } else {
            alert("An error occured: " + response.message);
          }
        }
      });
    }
  });
});

/***/ })
/******/ ]);