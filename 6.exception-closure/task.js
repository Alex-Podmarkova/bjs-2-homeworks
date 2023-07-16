// задача 1

function parseCount(value) {
  let parsingResult = Number.parseFloat(value)
  if(Number.isNaN(parsingResult)) {
	throw new Error ("Невалидное значение");
	}
  return parsingResult;
}

function validateCount(value){
  try {
  	return parseCount(value);
  }  catch (error) {
       return error;
  }

}

// задача 2

class Triangle {
  constructor(a, b, c) {
    if ( (a + b) < c || (b + c) < a || (a + c) < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimeter() {
    return Number(this.a + this.b + this.c);
  }
  get area() {
    let p = this.perimeter * 0.5;
    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) ).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
      return {
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
        get area() {
          return "Ошибка! Треугольник не существует";
        }
      }
  }
}