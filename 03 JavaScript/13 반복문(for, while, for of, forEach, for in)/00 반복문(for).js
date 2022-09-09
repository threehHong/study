for(let num=1; num<=10; num++){
    console.log(num);
} console.log("\n");

for(let num=1; num<=10; num++){
    if(num % 2 == 0){
        console.log(num);
    }
} console.log("\n");

console.log(num); // for문에서 정의한 변수일 경우 for문이 끝나면 
                  // 아무값도 없는 변수가 된다.
                  // 따라서 해당 변수를 사용하기 위해서는 값을 저장해야 한다.

/*

1.
반복문(loop)
주어진 조건의 참 or 거짓에 따라 {}대괄호 안의 내용을 반복하는 구문

조건
불리언을 반환하거나 불리언으로 해석될 수 있는 식.

2.
for(초기식; 조건식; 증감식){
    조건이 true일 경우 반복될 코드
}

for문에서 정의한 변수일 경우 for문이 끝나면 아무값도 없는 변수가 된다.
따라서 해당 변수를 사용하기 위해서는 값을 저장해야 한다

*/

