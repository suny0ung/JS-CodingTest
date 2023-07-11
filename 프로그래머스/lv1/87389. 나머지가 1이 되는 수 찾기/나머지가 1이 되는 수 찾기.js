function solution(n) {
    let num = 0;
    
    while(num < n){
        num ++;
        
        if(n%num === 1){
            return num;
        }
    }
}