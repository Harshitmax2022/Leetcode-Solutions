/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let result = 0; 
    
    for(let char of patterns){
        if(word.includes(char)){
            result++;
           } else{
               result += 0;
           }
    }
    
    return result;
};
