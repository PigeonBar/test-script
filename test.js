// ==UserScript==
// @name         Flowr - Update Test
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  I am testing Tampermonkey's ability to detect updates for userscripts posted on Github.
// @author       PigeonBar
// @match        https://flowr.fun/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=flowr.fun
// @downloadURL  https://raw.githubusercontent.com/PigeonBar/test-script/refs/heads/main/test.js
// @updateURL    https://raw.githubusercontent.com/PigeonBar/test-script/refs/heads/main/test.js
// @grant        none
// ==/UserScript==

console.log("Hello, World!");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("See ya later, World!");


let squadCode = "";
for (let i = 0; i < 6; i++) {
  const roll = Math.floor(Math.random() * 16);
  if (roll < 10) {
    // Digits 0-9
    squadCode += String.fromCharCode("0".charCodeAt(0) + roll);
  } else {
    // Chars a-f
    squadCode += String.fromCharCode("a".charCodeAt(0) + roll - 10);
  }
}
console.log(squadCode);