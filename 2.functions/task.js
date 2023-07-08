function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number((arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2));
    if(arr.length === 0) {
    return 0;
  }
    else {
    return { min: min, max: max, avg: avg };
  }
 }

getArrayParams(-99,99,10);
getArrayParams(1,2,3,-100,10);
getArrayParams(5);

  function summElementsWorker(...arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
      if(arr.length === 0) {
      return 0;
    }
      else {
    return sum;
   }
  }


function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
    if(arr.length === 0) {
    return 0;
  }
     else {
  return difference;
 }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let dif
  
    if(arr.length === 0) {
    return 0;
  }

    else {
      for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    }
      else {
      sumOddElement += arr[i];
    }
    dif = sumEvenElement - sumOddElement;
  }
  return dif;
 }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let resultDivision

    if(arr.length === 0) {
    return 0;
  }
    else {
      for (let i = 0; i < arr.length; i ++) {
      if(arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
    }
    resultDivision = sumEvenElement / countEvenElement;
  }
  return resultDivision;
 }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result;
    for (let i = 0; i < arrOfArr.length; i++) {
      result = func(...arrOfArr[i]);
      if(result > maxWorkerResult) {
  maxWorkerResult = result;
  }
}
  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
console.log(makeWork(arr, differenceEvenOddWorker));
console.log(makeWork(arr, averageEvenElementsWorker));
