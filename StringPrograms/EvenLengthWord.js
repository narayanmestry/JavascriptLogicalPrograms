const givenString = 'write a Javascript program to print all words with even length in the given string'

// 1. split all entire string into array of words
const words = givenString.split(' ');

for(let word of words){
    if(word.length % 2===0){
        console.log(word);
    }
}
