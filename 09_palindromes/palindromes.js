const palindromes = function (string) {
    string = string.toUpperCase();
    let stringArray = string.split("");
    const letterOnlyArray = stringArray.filter(char => 
        (char.charCodeAt(0) >= 'A'.charCodeAt(0)) 
        && (char.charCodeAt(0) <= 'Z'.charCodeAt(0)) );
    var isPalindrome = true;
    var frontIndex = 0; 
    var lastIndex = letterOnlyArray.length - 1;

    while(isPalindrome && (frontIndex < lastIndex)) {
        // console.log(letterOnlyArray[frontIndex]);
        isPalindrome = (letterOnlyArray[frontIndex] == letterOnlyArray[lastIndex]);
        frontIndex = frontIndex + 1;
        lastIndex = lastIndex - 1;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
