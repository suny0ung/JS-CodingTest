function solution(my_string, k) {
    let arr = [];
    for(let i =0; i < k; i++){
        arr.push(my_string)
    }
    const result = arr.join('');
    return result;
}

//다른사람의 좋은 코드 예시
// return my_string.repeat(k)
