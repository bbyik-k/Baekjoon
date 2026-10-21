function solution(phone_book) {
    
    const bookMap = new Map();
    
    for(let i=0; i<phone_book.length; i++){
        bookMap.set(phone_book[i], '');
    }
    
    for(let i=0; i<phone_book.length; i++){
        const number = phone_book[i];
        let startNum = '';
        for(let j=0; j<number.length-1; j++){
            startNum = `${startNum}${number[j]}`
            if(bookMap.has(startNum)){
                return false;
            }
        }
    }
    
    
    
    return true;
}