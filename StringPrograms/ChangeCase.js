// change case without any inbuild method 
/* important method 
    1. codeCharAt(index) > get ASCII from charachet
    2. 

*/

function convertUppercase(str){
    let uppercaseStr="";
    for(let i = 0;i<=str.length - 1;i++){
        ASCIINumber = str.charCodeAt(i);        
       if(ASCIINumber<=122 && ASCIINumber>=97){
            uppercaseStr += String.fromCharCode(ASCIINumber-32)
        }else{
            uppercaseStr+=str[i];
        }
    }  
    return uppercaseStr
}
function convertLowercase(str){
    let lowercaseStr="";
    for(let i = 0;i<=str.length - 1;i++){
        ASCIINumber = str.charCodeAt(i);        
        if(ASCIINumber<=90 && ASCIINumber>=65){
            lowercaseStr += String.fromCharCode(ASCIINumber+32)
        }else{
            lowercaseStr+=str[i];
        }
    }  
    return lowercaseStr
}

let str = "CHETAN"
const resultL = convertLowercase(str);
const resultU = convertUppercase(str);
console.log("result==",resultL);
console.log("result==",resultU);
