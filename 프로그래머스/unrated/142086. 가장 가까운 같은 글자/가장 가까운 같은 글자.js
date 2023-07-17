function solution(s) {
//문자열을 배열로 변환
//중복되는 문자가 앞에 있으면, 현제 문자열 인덱스 - 이전 문자열 인덱스
//새로운 배열로 순서대로 결과값 반환
    const arr =[];
    
    for(let i = 0; i < s.length; i++){
        let sliceArr = s.slice(0,i)
        arr.push(sliceArr.lastIndexOf(s[i])===-1? -1 : i-sliceArr.lastIndexOf(s[i]))
    }
    
    return arr;
    
}