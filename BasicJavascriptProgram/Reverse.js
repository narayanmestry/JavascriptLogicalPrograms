// Reverse the string 

let str = "Hellow"

console.log("Given String >",str);
let reverseStr = "";

for(let i=str.length-1;i>=0;i--){
    reverseStr = reverseStr+str[i];
}

console.log("Reverse string : ",reverseStr);
