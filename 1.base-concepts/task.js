"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr = [-b / (2 * a)];
  }
  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
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
  let n = ((Number(date.getMilliseconds()) - Date.now())) / 2678400000;
  let S = amount - contribution;
  let P = percent / 12 / 100;
  let monthPayment = S * (P + (P / ((Math.pow((1 + P), n)) - 1)));

  let totalAmount = Math.floor(monthPayment * n * 100) / 100;

  return totalAmount;
}
console.log(calculateTotalMortgage(percent, contribution, amount, date))
