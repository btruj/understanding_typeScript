"use strict";
function add(n1, n2, showResult, Phrase) {
    //   if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    //     }
    const result = n1 + n2;
    if (showResult) {
        console.log(Phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
