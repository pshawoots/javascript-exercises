const add = function(inputOne, inputTwo) {
	return inputOne + inputTwo;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(numbers) {
	const total = numbers.reduce(function(total, number) {
    return total += number;
  }, 0);
  
  return total;
};

const multiply = function(numbers) {
	const total = numbers.reduce(function(total, number) {
    return total *= number;
  }, 1);
  
  return total;
};

const power = function(base, power) {
	// var answer = 1;
  // for(var i = 0; i < power; i++) {
  //   answer *= base;
  // } 
  // return answer;
  const fillerArray = [...Array(power).keys()]
  return fillerArray.reduce(function(total, num) {
    return total *= base;
  }, 1);

};

const factorial = function(factorialStart) {
	const fillers = [...Array(factorialStart).keys()];
  return fillers.reduce(function(total, filler) {
    return total *= (filler + 1);
  }, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
