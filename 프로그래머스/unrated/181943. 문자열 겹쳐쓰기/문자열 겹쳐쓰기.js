function solution(my_string, overwrite_string, s) {
    const stringArr = [...my_string];
    stringArr.splice(s, overwrite_string.length, overwrite_string);
    
    return stringArr.join("");
}
//답의 과정
//function solution(my_string, overwrite_string, s) {
//     const stringArr = [...my_string]
//     const result = stringArr.splice(s, overwrite_string.length, overwrite_string);
//     return result.join("");
// }