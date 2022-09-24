const button = document.getElementById("push") // html 문서에서 id가 push인 태그를 반환하여 button에 저장
const div = document.getElementById("area") // html 문서에서 id가 area인 태그를 반환하여 button에 저장


button.addEventListener('click', function(){ // html 내용이 저장된 button 변수에서 클릭이 읽어났을 때 실행될 함수 정의
    console.log("div 생성중")
    const newDiv = document.createElement('div'); // div 태그를 만들어 반환하여 newDiv 변수에 저장

    newDiv.style.backgroundColor = "blue"; // div 태그에 접근해서 style 속성 변경
    newDiv.style.width = "100px"; // div 태그에 접근해서 style 속성 변경
    newDiv.style.height = "100px"; // div 태그에 접근해서 style 속성 변경

    div.appendChild(newDiv); // 생성되고 style 속성이 추가된 div 태그를 DOM 문서에 추가.
    div.append("append를 이용한 문자열 추가"); // append 메소드를 이용해서 DOM에 문자열 추가.
 })

/* 

1.
createElement() 메소드
document의 createElement 메소드는 지정된 이름의 HTML 태그를 만들어 반환 해주는 메소드이다.

기본 사용법
docunment.createElement('태그'); 

document는 웹 문서를 의미한다.

2. 
appendChild() 메소드 * append : 덧붙이다, 첨부하다.
- DOM 내 개별 태그(노드라고 함)에 자식 요소를 추가할 떄 사용하는 메소드
- createElement() 메소드로 원하는 태그를 만들어 DOM에 추가할 떄 사용하는 메소드
  
기본 사용법
추가될 자식 태그의 부모 태그 or 부도 태그가 저장된 변수.appendChild(document.createElement('태그'));

ex.
const a = documnet.createElement("p");
document.body.appendChild(a);

3.
appendChild와 append의 차이점
- appendChild의 경우 추가한 자식 노드를 반환하지만, append는 반환 데이터가 없다
- appnd를 이용하면 요소에 노드 객체 또는 문자열을 자식 요소로 추가할 수 있지만
appendChild는 노드 객체만 추가할 수 있다.

4.
정리
createElement()와 appendChild()를 통해 웹브라우저 사용자와 실시간으로 상호작용을 할 수 있다

5.
DOM(Document Object Model)은 개발자 도구의 Elements를 의미 한다
DOM에서 태그를 노드라고 말한다. 
DOM 정리한 내용 참고

*/

