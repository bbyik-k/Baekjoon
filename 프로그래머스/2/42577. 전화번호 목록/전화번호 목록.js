function solution(phone_book) {
    const bookMap = new Set(phone_book);
    
    for(const numberStr of phone_book){
        for(let j=1; j<numberStr.length; j++){
            let startNum = numberStr.slice(0,j);
            if(bookMap.has(startNum)) return false;
        }
    }
    return true;
}