let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (n: number) => void = (n: number) => {
  console.log(n);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'bleu', 'green'];
let foundWord: boolean;

for (var i = 0, len = words.length; i < len; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (var i = 0, len = numbers.length; i < len; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
