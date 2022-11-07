/* 실수 판별 방법 1 (22.10.23) */
let n = 0.5;
if(n % 1 != 0){
    console.log(`n = ${n} (실수)`)
} else { 
    console.log(`n = ${n} (정수)`)
}
/* 정수 n을 1로 나누면 나머지는 0, 
   실수 n을 1로 나누면 나머지는 n. */
console.log("\n");


/* 실수 판별 방법 2 (22.11.07) */
/* Number.isInteger() 괄호안의 숫자가 정수일 경우 true, 정수가 아닐 경우 false 반환
   Math.sqrt() 괄호안의 숫자의 제곱근을 반환. */
let num = Number.isInteger(Math.sqrt(144));
console.log(num);
