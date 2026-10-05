function solution(clothes) {
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
    for(const key in clotheObj){
        
        let lenght = clotheObj[key].length + 1;
        cnt = cnt * lenght;
    }
    
    return cnt-1;
}