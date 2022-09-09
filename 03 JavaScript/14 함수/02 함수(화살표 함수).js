// 함수 선언식
function sum1(num1, num2){
    return num1 + num2;
}

// 함수 표현식
let sum2 = function(num1, num2){
    return num1 + num2;
}

// 화살표 함수
let sum3 = (num1, num2) => {
    return num1 + num2;
}
console.log(sum3(30, 40));

// 화살표 함수 (대괄호 내용이 한줄만 있을 경우의 축약 형태)
let sum4 = (num1, num2) => num1 + num2;
// 화살표 함수 (매개 변수가 하나만 있을 경우의 축약 형태)
let sum5 = num1 => num1 + num2;
// 화살표 함수 (매개 변수가 하나도 없을 경우의 축약 형태)
let sum6 = () => 3.14;

