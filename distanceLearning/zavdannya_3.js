'use strict';

/* 
17. Дано масив А(16). 
Знайти кількість елементів, значення яких є ступенем числа 4.
*/

const A = [1, 2, 3, 4, 10, 16, 25, 64, 78, 81, 100, 111, 200, 222, 256, 625];

function numberOfElementsWithPowFour(array){
    let counter = 0;
    var maxNumber = Math.max.apply(null, array);
    for(var i = 0; i < array.length; i++){
        for(var n = 1; n < maxNumber; n*=4){
            if(n === array[i]){
                counter++;
            }
        }

    }
    return counter;
}

console.log(numberOfElementsWithPowFour(A));
