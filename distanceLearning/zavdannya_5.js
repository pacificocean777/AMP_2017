 'use strict';
 
 /* 
 17. Дано натуральне число n>1.
 Вивести на екран всі його прості множники.
 */

const naturalNumber = 123;

function decomposingANumberIntoPrimes(number){
        if (number <= 1)
            return ;
        for (var i = 2; i <= number; i++)
        {
            if (number % i === 0)
            {
                number /= i;
                if (number > 1)
                {
                    console.log(i);
                    decomposingANumberIntoPrimes(number);
                    return;
                }
                else
                {
                    console.log(i);
                    return;
                }
            }
        }
    }
    
decomposingANumberIntoPrimes(naturalNumber);



