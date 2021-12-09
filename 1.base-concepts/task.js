"use strict";

function solveEquation(a, b, c) {
  let arr;
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    arr = [];
  } else {
    if (D === 0) {
      arr = [-b / (2 * a)];
    } else {
      if (D > 0) {
        arr = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
      }
    }
  }
  return arr;
}

// function monthDiff(date, now) {
//   let n;
//   now = new Date();
//   date = new Date();
//   n = (date.getFullYear() - now.getFullYear()) * 12;
//   n -= date.getMonth();
//   n += now.getMonth();
//   return n;
// }

function calculateTotalMortgage(percent, contribution, amount, date) {
  date = new Date();
  let n = (date.getMilliseconds() - Date.now()) / 2678400000;
  let S = amount - contribution;
  let P = percent/12/100;
  let monthPayment = S * (P + (P / ((Math.pow((1 + P), n)) - 1)));

  let totalAmount =  Math.floor(monthPayment * n * 100) / 100;

  return totalAmount;
}
console.log(calculateTotalMortgage(percent, contribution, amount, date))
