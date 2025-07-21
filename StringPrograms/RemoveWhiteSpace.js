function removeAllSpace(str){
    let withoutSpaceString = '';
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            withoutSpaceString+=str[i];
        }
    }
    return withoutSpaceString;
}

let str = "Example in JavaScript (without any inbuilt method):"
// const noSpaces = str.replace(/\s+/g, '');
// console.log(noSpaces); // Output: "HelloWorld"


console.log("Without using inbuild method string is = ",removeAllSpace(str));


