"use strict";

function solveEquation(a, b, c) {
    let arr;
    let D = Math.pow(b) - 4 * a * c;
    if (D < 0) {
        arr = [];
    }
    if (D = 0) {
        let x = -b / (2 * a);
        arr = [x];
    }
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        arr = [x1, x2];
    }
    return arr;
  }