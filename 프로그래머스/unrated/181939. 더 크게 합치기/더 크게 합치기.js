function solution(a, b) {
    const strA = String(a) + String(b);
    const strB = String(b) + String(a);
    
    return strA >= strB ? Number(strA) : Number(strB);
}

// 다른사람의 좋은 코드 예시
// return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
