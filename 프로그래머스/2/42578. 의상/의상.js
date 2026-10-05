function solution(clothes) {
    let clotheObj = {};
    
    const countByKind = new Map();
    
    for(const [_, kink] of clothes){
     countByKind.set(kink, (countByKind.get(kink) || 0) + 1);
        
    }
    
    console.log(countByKind);
    let combinations = 1;
    for(const count of countByKind.values()){
        combinations *= count + 1;
    }
    
    return combinations-1;
}