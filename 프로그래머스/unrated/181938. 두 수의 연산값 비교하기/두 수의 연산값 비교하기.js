function solution(a, b) {
    const addNum = String(a)+String(b);
    const multiNum = 2 * a * b;
    
    return Math.max(Number(addNum), multiNum)
}