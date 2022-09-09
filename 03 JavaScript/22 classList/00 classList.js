// classList
const textH1 = document.querySelector('h1')
console.log(textH1.classList);


// classList, add, remove, toggle
const textH2 = document.querySelector('h2')
const adBtn = document.querySelector('#add')
const removeBtn = document.querySelector('#remove')
const toggleBtn = document.querySelector('#toggle')

adBtn.addEventListener("click", function(){
    textH2.classList.add("text");
}) // add 버튼 클릭시 주어진 문자열 값을 class 속성의 속성값으로 추가한다
removeBtn.addEventListener("click", function(){
    textH2.classList.remove("text");
}) // remove 버튼 클릭시 주어진 문자열 값을 class 속성의 속성값에서 삭제한다
toggleBtn.addEventListener('click', function(){
    textH2.classList.toggle('text') // 
}) // toggle 버튼 클릭시 주어진 문자열 값을 class 속성의 속성값으로 추가한다.
   // toggle 버튼을 한번더 클릭시 주어진 문자열 값을 class 속성의 속성값에서 삭제한다.
   // 처음 클릭시 추가, 두번째 클릭시 삭제.

/* 

1.
target.classList
태그의 클래스 속성에 입력된 값을 반환하는 읽기 전용 속성(메소드?)
*콘솔 창에 DOMTokenList[]의 대괄호 안에 클래스 속성에 입력된 값을 반환한다.

2.
target.classList.add("class 속성에 입력될 속성값")
target 태그의 class 속성에 속성값을 추가하는 메소드.

remove
target.classList.remove("class 속성에서 삭제될 속성값")
target 태그의 class 속성에 저장된 속성값을 삭제하는 메소드

toggle (토글 스위치 생각하기)
target.classList.toggle("class 속성에 추가하거나 삭제될 속성값")
target 태그의 class 속성에 속성값을 추가하거나 삭제하는 메소드

*/  