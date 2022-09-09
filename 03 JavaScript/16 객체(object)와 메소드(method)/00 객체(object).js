// 배열(array)
let studentK = [90, 70, 80, 60];
for(let i=0; i<4; i++){
    console.log(studentK[i]);
} console.log("\n");

// 객체(object)
let studentL = {
    koreaScore:90, englishScore:70,
    mathScore:80, scienceScore:60
};

console.log(studentL["koreaScore"]);
console.log(studentL.koreaScore);

/* 

1.
객체(object)
이름 하나로 여러 개의 데이터를 저장하고 관리할 수 있는 것(배열과 C언어의 구조체와 유사한 개념)
키와 식별자를 통해 데이터를 저장한다.

2.
객체 정의 방법
let 변수명 = {키 값 : 키에 저장되는 값};

키 값 : 키에 저장되는 값 = 속성(property)
키(key) : 식별자

3.
객체에 정의된 데이터에 접근하는 방법
변수명["키 값"] - 대괄호를 통해 데이터에 접근하는 방법.
변수명.키 값 - 마침표(점)을 통해 데이터에 접근하는 방법.

4.
객체의 장점(특징)
키와 식별자를 통해 데이터에 대한 정보를 빠르게 파악할 수 있다(위에 배열 예시와 객체 예시 참고).

*/

