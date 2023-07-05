function solution(a, b) {
    const addNum = String(a)+String(b);
    const multiNum = 2 * a * b;
    
    return Math.max(Number(addNum), multiNum)
}

// 다른 사람의 코드예시
// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), a * b * 2)
// }


// 다른 사람의 코드 예시
// function solution(a, b) {
//     var answer = parseInt(`${a}${b}`)
//     var answer1 =2*a*b;
//     return answer > answer1 ? answer : answer1;
// }
