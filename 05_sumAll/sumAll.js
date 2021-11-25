const sumAll = function(firstNumber, secondNumber) {
    if(typeof(firstNumber) != "number" || typeof(secondNumber) != "number" || firstNumber < 0 || secondNumber < 0) {
        return "ERROR"
    }
    else if(firstNumber > secondNumber) {
        let sum = 0;
        for(let i = secondNumber; i <= firstNumber; i++) {
            sum += i;
        }
        return sum;
    } else {
        let sum = 0;
        for(let i = firstNumber; i <= secondNumber; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
