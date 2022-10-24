let result;
result = 3 > 2 ? "true" : "false";
console.log(result); console.log("\n");

const select = document.querySelector('select')
const button = document.querySelector('button')

button.addEventListener('click', function(){
    console.log(select.value)
    result = select.value == "foot" ? 
    
    "축구를 선택했습니다" :
    "축구를 선택하지 않았습니다"
    console.log(result);
})

/* 

1.
삼항 연산식(삼항 조건 연산식)
첫 번째 항인 조건식의 결과에 따라 남은 두 항 중 하나를 반환하는 식.

ex.
3 > 2 ? "참" : "거짓"
조건식 ? "조건식이 참이면 반환할 결과" : 조건식이 거짓이면 반환할 결과

*/

