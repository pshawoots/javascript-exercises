const removeFromArray = function(array, toBeRemovedOne, toBeRemovedTwo, toBeRemovedThree,  toBeRemovedFour) {
    let toBeRemovedArray = [toBeRemovedOne, toBeRemovedTwo, toBeRemovedThree, toBeRemovedFour];
    let toBeRemoved = toBeRemovedArray.entries()
    console.log("arrayBefore: " + array);
    for (let toBeRemovedEntry of toBeRemoved) {
        console.log("toBeRemovedEntry: " + toBeRemovedEntry[1]);
        if(toBeRemovedEntry[1] == null) {
            continue;
        }
        for(let i = 0; i < array.length; i++) {
            console.log("array value " + array[i])
            if(array[i] === toBeRemovedEntry[1]){
                array.splice(i, 1)
            }
        }
    }
    console.log("arrayAfter: " + array)
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
