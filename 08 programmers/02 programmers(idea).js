/********** 실수 판별 방법 1 (22.10.23) **********/
let n = 0.5;
if(n % 1 != 0){
    console.log(`n = ${n} (실수)`)
} else { 
    console.log(`n = ${n} (정수)`)
}
/* 정수 n을 1로 나누면 나머지는 0, 
   실수 n을 1로 나누면 나머지는 n. */
console.log("\n\\n");



/********** 실수 판별 방법 2 (22.11.07) **********/
/* Number.isInteger() 괄호안의 숫자가 정수일 경우 true, 정수가 아닐 경우 false 반환
   Math.sqrt() 괄호안의 숫자의 제곱근을 반환. */
let num = Number.isInteger(Math.sqrt(144));
console.log(num); console.log("\n");



/********** 난수 생성(22.11.20) **********/
/* console.log(Math.abs(-7.5)); console.log(Math.ceil(7.1)); console.log(Math.floor(7.6));
console.log(Math.round(7.6)); console.log(Math.round(7.4)); */

/* 
1. 0~4 사이에서 값이 나오게
(Math.random) * 5 - 마지막 값보다 1큰 값을 곱한다.
2. 원리
0.9블라브라에서 0.9는 0~1사이에서의 최대값중 앞자리다.
여기서 5를 곱하면 정수 부분이 최대 4까지 나온다 6을 곱하면 5가 나온다.
따라서 0~n 사이에서 값이 나오게 하려면 n+1 값을 곱해줘야 한다. */

var ranNum = Math.random();
console.log(ranNum); 

var ranNum2 = ranNum * 5;

console.log(ranNum2);
console.log(Math.floor(ranNum2));
