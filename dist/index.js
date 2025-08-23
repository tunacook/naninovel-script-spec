/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 407:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__nccwpck_require__(153), exports);


/***/ }),

/***/ 153:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isExtNani = isExtNani;
exports.trimAuthor = trimAuthor;
exports.trimBracket = trimBracket;
exports.trimSquareBrackets = trimSquareBrackets;
exports.trimRuby = trimRuby;
exports.isSkipNaninovelSyntax = isSkipNaninovelSyntax;
const path = __nccwpck_require__(928);
const ALLOWED_EXTENSIONS = [".nani"];
// https://naninovel.com/ja/guide/naninovel-scripts
/**
 * Naninovelのラベル構文であるかどうか
 * @param line
 */
function isLabelLine(line) {
    return line.trimStart().startsWith("#");
}
/**
 * Naninovelのスクリプト構文であるかどうか
 * @param line
 */
function isCommandLine(line) {
    return line.trimStart().startsWith("@");
}
/**
 * Naninovelのコメント構文であるかどうか
 * @param line
 */
function isCommentLine(line) {
    return line.trimStart().startsWith(";");
}
function isExtNani(fullPath) {
    return ALLOWED_EXTENSIONS.includes(path.extname(fullPath).toLowerCase());
}
/**
 * セリフ構文の場合に話者IDを除外してセリフ文章だけを返す セリフ構文でない場合はなにもしない
 * @param line
 */
function trimAuthor(line) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1)
        return line;
    return line.slice(colonIndex + 1).trim();
}
function trimBracket(line) {
    return line.replace(/<[^>]*>/g, "");
}
function trimSquareBrackets(line) {
    // /\[.*?\]/g は、[ から始まり ] で終わるまでのあらゆる文字列を
    // 「非貪欲（最短マッチ）*?」で検索し、見つかった部分を一括で削除します
    return line.replace(/\[.*?\]/g, "");
}
function trimRuby(line) {
    // 正規表現で <ruby="...">...</ruby> を検出
    // キャプチャ:
    //   group1 -> ルビ ("・"など)
    //   group2 -> タグ内の文字 ("彼"など)
    const regex = /<ruby="([^"]*)">(.*?)<\/ruby>/g;
    // 置換ロジック:
    //   - group2(ベース文字) + 改行 + group1(ルビ)
    return line.replace(regex, (_match, rubyValue, baseText) => {
        // 好みに応じて結合の仕方を変えてOK
        // ここでは改行区切りにしている
        return `${baseText}${rubyValue}`;
    });
}
/**
 * Naninovelの構文であるかどうか Naninovel構文であればスキップする
 */
function isSkipNaninovelSyntax(line) {
    if (isCommandLine(line))
        return true;
    if (isCommentLine(line))
        return true;
    return isLabelLine(line);
}


/***/ }),

/***/ 928:
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(407);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;