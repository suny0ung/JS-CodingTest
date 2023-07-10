function solution(ineq, eq, n, m) {
    let res = ineq + eq;

    if(res == '<=' && n <= m){
        return 1;
    }else if(res == '>=' && n >= m){
        return 1;
    }else if(res == '<!' && n < m){
        return 1;
    }
    else if(res == '>!' && n > m){
        return 1;
    }
    return 0;

}

//다른사람의 좋은 조건 예제
//첫번째
function solution(ineq, eq, n, m) {
    if (eq === '=' && n === m) return 1
    if (ineq === '<' && n < m) return 1
    if (ineq === '>' && n > m) return 1
    return 0
}

//두번째
const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}
