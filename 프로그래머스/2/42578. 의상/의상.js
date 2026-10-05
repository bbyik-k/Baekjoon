function solution(clothes) {
    let answer = 0;
    let clotheObj = {};
    
    for(const clothe of clothes){
        const [name, kind] = clothe;
        if(clotheObj[kind]){
            clotheObj[kind].push(name);
        }else{
            clotheObj[kind] = [name];
        }
        
    }
    
    let cnt = 1;
    console.log(clotheObj);
    for(const key in clotheObj){
        
        let lenght = clotheObj[key].length + 1;
        console.log(`--lenght: ${lenght}`);
        cnt = cnt * lenght;
    }
    
    const clothesLen = clothes.length;
    
    console.log(`clothesLen: ${clothesLen}`);
    console.log(`cnt: ${cnt}`);
    
    
//     if(Object.keys(clotheObj).length === 1){
        
//         return clothesLen;
//     }else{
//         return cnt + clothesLen;
//     }
    
    return cnt-1;
}