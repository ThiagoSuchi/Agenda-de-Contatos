/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   form: () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _services_msgErro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/msgErro */ "./src/scripts/services/msgErro.ts");
/* harmony import */ var _utils_validacoes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/validacoes */ "./src/scripts/utils/validacoes.ts");


const addBtn = document.querySelector('.btn-add');
const form = document.querySelector('.form');
addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    const nome = document.querySelector('#nome');
    inputs.forEach((inp) => {
        if (inp.id === 'nome')
            (0,_utils_validacoes__WEBPACK_IMPORTED_MODULE_1__.validNome)(nome.value);
    });
    if ((0,_utils_validacoes__WEBPACK_IMPORTED_MODULE_1__.validNome)(nome.value) === true) {
        _services_msgErro__WEBPACK_IMPORTED_MODULE_0__.span.style.display = 'none';
    }
});


/***/ }),

/***/ "./src/scripts/services/msgErro.ts":
/*!*****************************************!*\
  !*** ./src/scripts/services/msgErro.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msgErro: () => (/* binding */ msgErro),
/* harmony export */   span: () => (/* binding */ span)
/* harmony export */ });
const span = document.querySelector('.error-message');
function msgErro(msg) {
    if (span) {
        span.innerText = msg;
        span.style.display = 'block';
    }
}
// AVISO: O browser está quebrando após span receber uma msg muito grande!


/***/ }),

/***/ "./src/scripts/utils/validacoes.ts":
/*!*****************************************!*\
  !*** ./src/scripts/utils/validacoes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validNome: () => (/* binding */ validNome)
/* harmony export */ });
/* harmony import */ var _services_msgErro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/msgErro */ "./src/scripts/services/msgErro.ts");
// Validações do Form

// Validando nome
function validNome(nome) {
    const nomeRegex = /^[a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+(?: [a-zA-ZÀ-ÿÀ-ÖØ-öø-ÿ]+)*$/;
    if (nome.trim() === '') {
        (0,_services_msgErro__WEBPACK_IMPORTED_MODULE_0__.msgErro)('Porfavor, preencha o campo.');
        return false;
    }
    if (nome.length < 4) {
        (0,_services_msgErro__WEBPACK_IMPORTED_MODULE_0__.msgErro)('O nome deve possuir no mínimo 4 caracteres!');
        return false;
    }
    if (!nomeRegex.test(nome)) {
        (0,_services_msgErro__WEBPACK_IMPORTED_MODULE_0__.msgErro)('Nome inválido! Por favor, não use caracteres especiais como !, @, #, $, %, etc. Exemplos inválidos: João!, Ana$, Carlos@123.');
        return false;
    }
    return true;
}
// Validando email
// export function validEmail(email: string): string {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email)
// }
// // Validando telefone
// export function validTelefone(telefone: string): string {
//     const telRegex = /^\(?\d{2}\)?[\s-]?(9\d{4}|\d{4})[\s-]?\d{4}$/;
//     return telRegex.test(telefone)
// }


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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/app */ "./src/scripts/app.ts");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map