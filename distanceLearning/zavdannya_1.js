'use strict';

/* 
17. Задано два тризначних цілих числа, 
перевірити чи вони можуть утворювати паліндром.
*/

const a = 69;
const b = 96;

function checkPalindrom(i,j) {
    var firstNumber = '' + i;
    var secondNumber = '' + j;
    return firstNumber === secondNumber.split('').reverse().join('');
}

if(checkPalindrom(a,b)){
    console.log("Обидва числа є паліндромами.");
} else {
    console.log("Обидва числа не є паліндромами.");
}

    