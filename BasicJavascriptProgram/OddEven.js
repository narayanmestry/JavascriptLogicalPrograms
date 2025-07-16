function isEven(num){
    const rem = num % 2
    if(rem===0){
        return true;
    }else {
        return false;
    }
}

let digit = 15;
const result = isEven(digit);
if(result){
    console.warn('Number is Even');
}else {
    console.warn('Number is Odd');
}