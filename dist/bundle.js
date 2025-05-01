/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exec */ "./src/js/exec.js");


const form = document.querySelector("#form")
const input = document.querySelector("#placa")
const pRec = document.querySelector("#rec")
const dia = document.querySelector("#dia")

form.addEventListener( "submit" ,(e)=>{
    e.preventDefault()
    printInfo((0,_exec__WEBPACK_IMPORTED_MODULE_0__.validaPlaca)(input.value))
})

function printInfo(obj){
    if (obj.sucesso){
        pRec.innerHTML = 'O dia de rodízio do seu carro é na'
        dia.innerHTML = (0,_exec__WEBPACK_IMPORTED_MODULE_0__.diaSemana)(obj.valor)
        return
    }
    pRec.innerHTML = obj.valor
    return
}

/***/ }),

/***/ "./src/js/exec.js":
/*!************************!*\
  !*** ./src/js/exec.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diaSemana: () => (/* binding */ diaSemana),
/* harmony export */   validaPlaca: () => (/* binding */ validaPlaca)
/* harmony export */ });
const modelPlaca = /^[a-z]{3}\d{2}([a-z]|\d)\d$/

function validaPlaca(placa){
    if (modelPlaca.test(placa)){
        return {
            sucesso : true,
            valor: lastNumber(placa)
        }
    }
    return {
        sucesso : false, 
        valor: 'Dados inválidos! Por favor corrija as informações'
    }
}

function lastNumber(placa){
    return placa.slice(-1)
}

function diaSemana(num){
    if(num == 1 | num == 2)return "Segunda-feira"
    if(num == 3 | num == 4)return "Terça-feira"
    if(num == 5 | num == 6)return "Quarta-feira"
    if(num == 7 | num == 8)return "Quinta-feira"
    if(num == 9 | num == 0)return "Sexta-feira"
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/dom */ "./src/js/dom.js");
/* harmony import */ var _js_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/exec */ "./src/js/exec.js");



console.log("olá mundo!")
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map