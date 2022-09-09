const textInput = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener("click", function(){
    console.log(textInput.value)
})
// 텍스트 입력창에 문자를 입력하고 엔터 -> PUSH 버튼 클릭 -> 콘솔 창에
// 입력한 문자 출력.
// input 태그의 value 속성에 속성값을 입력하면 텍스트창에 사용자가 입력한 것 처럼 문자가 입력된다. 

button.addEventListener("click", function(){
    textInput.value = "클릭하면 텍스트 창에 문자가 입력됨"
})
// PUSH 버튼을 클릭하면 텍스트 입력창에 textInput.value에 저장된 값이 입력
// 되고 한번 더 눌르면 콘솔창에 출력된다.

/* 

1.
value
태그의 value 속성에 입력된 값.
* form 태그로 입력 데이터를 여러개 다룰 때 사용.

2.
console.log(target.value)
대상 태그의 value 속성에 입력된 값을 콘솔창에 출력.

target.value = "변경값"
대상 태그의 value 속성에 "변경값"으로 저장.

3.
textContent 또는 innerText
태그의 텍스트에 접근할 떄 사용하는 메소드

*/

