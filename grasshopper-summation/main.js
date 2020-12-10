"use strict";

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

const summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

summation(8);

//1.Create a variable to output a sum later.
//2.Create a loop that increments itself until we reached a number.
//3.Increment the sum by the variable i.
