function solution(n) {
    let result = 0;
    
    if(n%2 !== 0){
        for(let i=1; i <= n; i += 2){
            result += i;
        }
    } else{
        for(let i=0; i <= n; i += 2){
            result += Math.pow(i,2);
        }
    }
    
    return result;
}

//거듭 제곱 구하기 Math.pow()
