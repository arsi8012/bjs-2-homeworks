// Задание 1
function getArrayParams(arr) {

  let min = 100;
  let max = -100;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
    return max;
  }
}

// Задание 3
function worker2(arr) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      arr[i] = max;
    }
  }
  return Math.abs(max - min);
}