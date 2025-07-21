let stringInput = "chet(2an";
let vowel = 'aeiou';
let vowelCount=0;
let consonentCount=0;
let cleanStr = stringInput.replace(/[^a-zA-Z]/g,"")


for(let i=0;i<cleanStr.length;i++){
   if(vowel.includes(cleanStr[i])){
    vowelCount++;
   }else{
    consonentCount++;
   }
}

console.log("Clean Strig",cleanStr);
console.log("Vowelcount is ",vowelCount);
console.log("consonent Count is ",consonentCount);



