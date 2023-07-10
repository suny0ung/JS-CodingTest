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