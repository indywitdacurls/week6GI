//EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.//

const ages = [ 20, 22, 24, 26]
const average = (array) => array.reduce((a,b) => a+b) / array.length;
console.log(average([20, 22, 24, 26]))