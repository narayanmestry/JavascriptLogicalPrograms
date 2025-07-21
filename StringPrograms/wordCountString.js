function calculateWordCount(){
    let words = str.split(' ').filter((word)=>word.replace(/[^a-zA-z0-9]/g,""))
    console.log("words --- ",words);
    return words.length;    
}

let str = "To count      the number,     77     of words          in a string ,        you can follow this simple logic";



console.log("Total number of words ",calculateWordCount(str));
