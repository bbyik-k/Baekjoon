function solution(phone_book) {
    let answer = true;
    const bookMap = new Map();
    
    for(let i=0; i<phone_book.length; i++){
        bookMap.set(phone_book[i], '');
    }
    
    for(let i=0; i<phone_book.length; i++){
        const number = phone_book[i];
        let startNum = '';
        for(let j=0; j<number.length-1; j++){
            startNum = `${startNum}${number[j]}`
            // console.log(`startNum: ${startNum}`);
            // console.log(`get: ${bookMap.get(startNum)}`);
            if(bookMap.has(startNum)){
                // console.log("!!!!");
                // answer = false;
                return false;
            }
        }
        
        
        // bookMap.set(phone_book[i], '');
    }
    
    
    
    return answer;
}