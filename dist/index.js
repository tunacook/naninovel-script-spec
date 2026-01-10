"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  isExtNani: () => isExtNani,
  isSkipNaninovelSyntax: () => isSkipNaninovelSyntax,
  trimAuthor: () => trimAuthor,
  trimBrTag: () => trimBrTag,
  trimBracket: () => trimBracket,
  trimFgTag: () => trimFgTag,
  trimRuby: () => trimRuby,
  trimSquareBrackets: () => trimSquareBrackets
});
module.exports = __toCommonJS(index_exports);

// src/naninovel.ts
var path = __toESM(require("path"));
var ALLOWED_EXTENSIONS = [".nani"];
function isLabelLine(line) {
  return line.trimStart().startsWith("#");
}
function isCommandLine(line) {
  return line.trimStart().startsWith("@");
}
function isCommentLine(line) {
  return line.trimStart().startsWith(";");
}
function isExtNani(fullPath) {
  return ALLOWED_EXTENSIONS.includes(path.extname(fullPath).toLowerCase());
}
function trimAuthor(line) {
  const colonIndex = line.indexOf(":");
  if (colonIndex === -1) return line;
  return line.slice(colonIndex + 1).trim();
}
function trimBracket(line) {
  return line.replace(/<[^>]*>/g, "");
}
function trimSquareBrackets(line) {
  return line.replace(/\[.*?\]/g, "");
}
function trimRuby(line) {
  const regex = /<ruby="([^"]*)">(.*?)<\/ruby>/g;
  return line.replace(regex, (_match, rubyValue, baseText) => {
    return `${baseText}${rubyValue}`;
  });
}
function trimBrTag(line) {
  return line.replace(/<br\s*\/?>/gi, "");
}
function trimFgTag(line) {
  return line.replace(/<fg="[^"]*">(.*?)<\/fg>/g, "$1");
}
function isSkipNaninovelSyntax(line) {
  if (isCommandLine(line)) return true;
  if (isCommentLine(line)) return true;
  return isLabelLine(line);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isExtNani,
  isSkipNaninovelSyntax,
  trimAuthor,
  trimBrTag,
  trimBracket,
  trimFgTag,
  trimRuby,
  trimSquareBrackets
});
