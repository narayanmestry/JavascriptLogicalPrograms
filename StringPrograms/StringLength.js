function calculateLength(str){
    let counter = 0;
    while(str[counter]){
        counter++;
    }

    return counter;
}

let str = "chetan";
const lengthOfString = calculateLength(str);
console.log("Lenght of the string ",lengthOfString);

