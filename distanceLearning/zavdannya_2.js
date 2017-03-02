'use strict';

/* 
17. Знайдіть всі паліндроми з інтервалу [10000, 1000000].
*/

function checkIsPalindrome(){

   for(var i = 10000; i < 1000000; i++){
       if(i.toString() === i.toString().split("").reverse().join("")){
           console.log(i);
       }
       
   }
   
}

const result = checkIsPalindrome();