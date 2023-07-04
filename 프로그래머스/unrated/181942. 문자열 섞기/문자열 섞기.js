function solution(str1, str2) {
    const result = [...str1].map((a, index)=> a + str2[index]).join('');
    return result;
}