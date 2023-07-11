function solution(n) {
    let num = 0;
    
    while(num < n){
        num ++;
        
        if(n%num === 1){
            return num;
        }
    }
}

//다른사람의 좋은 문제풀이 예시
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}

// function solution(n, x = 0) {
//     return n % x === 1 ? x : solution(n, x + 1);
// }
