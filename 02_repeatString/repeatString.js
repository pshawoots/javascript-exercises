const repeatString = function(stringInput, repeatString) {
    let keepGoing = true
    if(repeatString == 0){
        keepGoing = false;
    } else if(repeatString < 0) {
        return "ERROR"
    }
    let returnString = "";
    while(keepGoing) {
        returnString += stringInput
        repeatString--;
        if(repeatString < 1) {
            keepGoing = false;
        }
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
