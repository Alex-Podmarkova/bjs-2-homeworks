"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;

  if (d < 0) {
    console.log("Дискриминант < 0, корней нет");
  }

  else if (d === 0) {
    let x = -b/(2*a);
    console.log("Дискриминант = 0, 1 корень");
    arr.push(x);
  }

  else if (d > 0) {
    let x = (-b + Math.sqrt(d))/(2*a);
    let y = (-b - Math.sqrt(d))/(2*a);
    console.log("Дискриминант > 0, 2 корня");
    arr.push(x, y)
  }

  return arr;
}

solveEquation(1,-13,36);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let c = contribution;
  let a = amount;
  let s = a - c;
  let n = countMonths;
  let monthlyPayment = s * (p + (p / (((1 + p)**n) - 1)));
  let totalPayment = (monthlyPayment * n).toFixed(2);

  console.log (totalPayment);
  
  return Number(totalPayment);
}
 
 calculateTotalMortgage(10,0,50000,12);
 calculateTotalMortgage(10,100,50000,12);
 calculateTotalMortgage(10,0,20000,24);
 calculateTotalMortgage(10,1000,20000,24);
 calculateTotalMortgage(10,20000,20000,24);
 calculateTotalMortgage(10,0,10000,36);
 calculateTotalMortgage(15,0,10000,36); 