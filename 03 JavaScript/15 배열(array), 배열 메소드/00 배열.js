//1
let numArray1 = ["a", "b", "c"]
console.log(numArray1);
console.log(numArray1[1]); console.log("\n");

//2
let numArray2 =[]
numArray2[2] = "777";
console.log(numArray2[2]); console.log("\n");

//3
for(let i=0; i<3; i++){
    console.log(numArray1[i]);  
} console.log("\n");

//4
function getMembers(){
    return ["egoing", "lecture", "array"]
}
numArray2 = getMembers();
for(let i=0; i<3; i++){
    console.log(numArray2[i]);
} console.log("\n");

//5
for(let i=0; i<3; i++){
    console.log(numArray2[i].toUpperCase())
} console.log("\n");

/* 

1.
배열(array)
이름 하나로 여러 개의 데이터를 저장하고 관리할 수 있는 것.
(하나의 공간을 여러개로 나누어 여러 개의 데이터를 저장하고 관리).

배열에 저장된 각 값을 원소라고 한다.

자바스크립의 배열에는 하나의 배열에 숫자, 문자, boolean, 함수, 객체 등 다양한 
자료형을 저장할 수 있다.
 
2. 
배열의 정의 형태
let or const 변수 = ["값1", "값2", "값3"]

*/

 

