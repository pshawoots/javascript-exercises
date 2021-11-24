const reverseString = function(str) {
    let finalString = "";

    finalString = str.slice(-1,)

    for(let i = 1; i < str.length; i++) {
        let firstIndex = (i + 1) * -1
        let secondIndex = i * -1
        finalString += str.slice(firstIndex, secondIndex);
    }
    

    return finalString
};

// Do not edit below this line
module.exports = reverseString;
