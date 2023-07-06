function solution(k, m, score) {
    //최대점수 k , 한상자의 최대 사과 갯수 m , 사과들의 점수 배열 score
    
    //사과배열을 내림차순
    const sortScore = score.sort((a,b) => b-a);
    
    //사과가 꽉 찬 박스의 갯수
    const boxsNum = parseInt(sortScore.length/m);
    
    //최저 사과들을 더한 값
    let sumLowScore = 0;
    
    for(let i = m-1; i < m * boxsNum; i += m){
        sumLowScore += sortScore[i];
    }
    
    //최저 사과들의 더한값 * 한상자의 사과 갯수
    return sumLowScore * m;
}