function isPalindrome(str){
    const cleaneStr = str.replace(/[^a-zA-Z0-9]/g,'');
    console.log("Clean string >>>",cleaneStr);
    let i = 0;
    let j = cleaneStr.length - 1;

    while(i<j){
        if(cleaneStr[i]===cleaneStr[j]){
            i++;
            j--;
        }else{
            return false
        } 
    }
    return true
}

let inputString = "abaa";
console.log(">>>",isPalindrome(inputString));
