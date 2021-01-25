"use strict";
//AND
function andCalc(array) {
  //confirm all are the same
  if (array.every((x) => x === true) || array.every((x) => x === false)) {
    return array[0];
  } else {
    return false;
  }
}

//OR
function orCalc(array) {
  //if prev and curr are the same, return first
  //if prev and curr are not the same, return true
  return array.reduce((x, y, z) => {
    return x === y ? x : true;
  });
}

//XOR
function xorCalc(array) {
  return array.reduce((x, y, z) => x !== y);
}

function logicalCalc(array, op) {
  if (op === "AND") {
    return andCalc(array);
  } else if (op === "OR") {
    return orCalc(array);
  } else if (op === "XOR") {
    return xorCalc(array);
  }
}
