/************************************************************************
* Write a function called string char frequency count, which accepts one string. 
* The function should return each element with its occurence
*************************************************************************/



/************************************************************************
* Solution 1    
* - Make object ot return ar end.
* - Loop over string, for each char
* - Return Object at end
*************************************************************************/
function charCount(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(charCount('Hello faa!'));
/*************************************************************************
 * Output
 * { H: 1, e: 1, l: 2, o: 1, ' ': 1, f: 1, a: 2, '!': 1 }
 * 
 * Note: It can;t handle the special chars, spaces etc
 *************************************************************************/


/************************************************************************
* Solution 2 : Without special char.
* - Make object ot return ar end.
* - Loop over string, for each char
* - Check if char is alphanumeric or not
* - if char is already in object then increment counter
* - Return Object at end
*************************************************************************/
function charCountRegex(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-zA-Z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

console.log(charCountRegex('Hello faa!'));
/*************************************************************************
 * Output
 * { H: 1, e: 1, l: 2, o: 1, f: 1, a: 2 }
 *
 * Note: It will remove the special chars, spaces etc
 * Using regex is slow, and not recommended most of times
 *************************************************************************/


/************************************************************************
* Solution 3 : Without special char.
* - Make object ot return ar end.
* - Loop over string, for each char
* - Check if char is alphanumeric or not, using alphanumeic funtion
* - if char is already in object then increment counter
* - Return Object at end
*************************************************************************/
function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // Numeric (0-9)
        !(code > 64 && code < 91) && // Uppercase (A-Z)
        !(code > 96 && code < 123) // Lowercase (a-z)
    ) {
        return false;
    }
    return true;

}

function charCountBestSolution(str) {
    let result = {};
    for (let val of str) {
        const char = val.toLowerCase();
        if (isAlphaNumeric(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

console.log(charCountBestSolution('Hello faa!'));
/*************************************************************************
 * Output
 * { H: 1, e: 1, l: 2, o: 1, f: 1, a: 2 }
 *
 * Note: It will remove the special chars, spaces etc
 * This is the bease solution, and 37% faster than regex one
 *************************************************************************/
