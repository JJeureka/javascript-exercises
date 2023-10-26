const reverseString = function(word) {
    let output = ""
    for (let i = word.length; i <= word.length; i-- ) {
    let lastCharacter = word.slice(-1)
    output += lastCharacter
    }
    return output

};

// Do not edit below this line
module.exports = reverseString;
