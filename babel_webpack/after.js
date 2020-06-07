"use strict";

var greet = function greet(name) {
  console.log("hello ".concat(name));
  var h1 = document.querySelector('h1');
  h1.innerHTML = name;
};

greet('david');
