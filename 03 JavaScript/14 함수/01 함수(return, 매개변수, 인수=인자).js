// return
function thereIsReturn(){
    console.log("return 활용");
    return 10;
    return 20; // 하나의 데이터만 반환한다.
    console.log("return 활용"); // return 뒤에 있는 코드는 수행되지 않는다.
}

let a = thereIsReturn();

console.log(a); console.log("\n");

// 매개변수, 인수(인자)
function sayAnything(st, num){
    for(let i=0; i<num; i++){
        console.log(st);
    }
}
sayAnything("매개변수를 할용한 함수 연습", 3); console.log("\n");

function oddEven(num){
    if(num % 2 == 1){
        return "홀수";
    } else {
        return "짝수";
    }
}
console.log(oddEven(10));
console.log(oddEven(7)); console.log("\n");

function plussMinus(a, b){
    c = a + b;
    return c;
}
console.log(plussMinus(2, 3));

/* 

1. 
return
- 함수의 결과값을 반환하는 명령어 
- 반환값은 호출식으로 반환된다.
- return은 두 가지 기능이 있다
  하나는 데이터를 반환하는 기능(함수는 결과값을 하나만 반환한다).
  나머지 하나는 함수를 끝내는 기능(return 뒤에 있는 코드는 수행되지 않는다).

2.
function 함수명(){
    함수의 작업내용
    return 변수 or 값;
}

3.
매개변수
함수식의 괄호안에 위치하여 함수 밖에서 전달된 값이 저장되는 변수.
쉼표(,)를 이용해 매개변수를 추가할 수 있다.

인수(인자)
호출식의 괄호안에 쓰여 피호출 함수식에 전달하는 값.
쉼표(,)를 이용해 인수(인자)를 추가할 수 있다.

function 함수명(a, b){
    c = a + b;
    return c;
}
d = 함수명(값1, 값2);
함수 호출식의 괄호안에 값1과 값2를 넣으면 피호출 함수식에 매개 변수에 값이 전달된다.

4.
let 없이 변수를 사용할 수 있다 이렇게 사용할 경우 어떤 문제가 생기는지 추후 탐구 및
정리

*/

