 'use strict';
 
 /* 
 17. В заданому рядку знайти слово,
 що містить найбільшу кількість повторів однієї літери.
 */

const givenString = "Мама мила раму";

function wordsWithMaxRepeatedCharacters(string, currentCharacter) {
    var maxRepeatedCharacters = [];
    var numberOfRepeatedCharacters = 0;
    var words = string.split(" ");
    for(var i = 0; i < words.length; i++){
      var word = words[i].toLowerCase().split("");
        for(var l = 0; l < word.length; l++){
            if(currentCharacter === word[l]){
                numberOfRepeatedCharacters++;
            }
        }
        maxRepeatedCharacters.push(numberOfRepeatedCharacters);
        numberOfRepeatedCharacters = 0;
    } 
    var maxNumber = Math.max.apply(null, maxRepeatedCharacters);
    var result = words[maxRepeatedCharacters.indexOf(maxNumber)]; 
    return result;
}

console.log(wordsWithMaxRepeatedCharacters(givenString, "а"));
