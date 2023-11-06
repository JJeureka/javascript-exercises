

const removeFromArray = function(that) {
    
    for (let i = that.length - 1, j =; i >=0, j <= arguments.length - 1; i--, j++){
        if (that[i] === arguments[j]) {
            that.splice(i,1)

        } 
        
    }
    return that
    
};

// Do not edit below this line
module.exports = removeFromArray;
