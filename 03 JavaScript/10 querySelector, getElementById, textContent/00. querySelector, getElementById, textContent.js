console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph")); console.log("\n");

console.log("------------------------------")

console.log(document.getElementById("text"))
console.log(document.getElementById("paragraph"))

console.log("------------------------------")

const h1 = document.querySelector("h1")
const p = document.getElementById("text"); console.log("\n");

console.log(h1.textContent)
h1.textContent = "h1 태그의 내용 변경"
console.log(h1.textContent)

p.textContent = "p 태그의 내용 변경"
console.log(p.textContent)

/*

1. 
window.document
- 현재 브라우저에 렌더링되고 있는 문서
- window.document는 DOM에 대한 진입점 역할을 하는 프로그래밍 인터페이스, 쉽게 window
  .document를 통해 DOM에 접근 할 수 있다(이를 통해 페이지의 정보를 얻거나 웹 요소를 생성 
  및 조작할 수 있다)
- document는 다양한 API(Application Programming Interface)를 제공한다

2.
document.querySelector
- document의 querySelector 메소드는 쿼리셀렉터가 입력받은 CSS 선택자를 전달받아 HTML 문서 
  내에 일치하는 태그를 반환한다(일치하는 요소가 없으면 없다를 의미하는 null 데이터를 반환
  한다).
- 인자는 문자열 타입의 CSS 선택자가 요구된다.

document.getElementById
- document의 getElementById 메소드는 이력 받은 id를 전달받아 HTML 문서 내에 일치하는 id 태그
  를 반환한다(일치하는 요소가 없으면 없다를 의미하는 null 데이터를 반환한다.)
- 인자는 문자열 타입의 id가 요구된다.

3.
textContent
태그가 포함하는 텍스트를 읽거나 변경할 수 있다(강의에서는 노드가 포함하는이라고 설명).

textContent를 사용 방법
변수 = document.querySelector("태그")와 같이 변수에 document.querySelector("태그")를 저장하고
변수.textContent로 태그에 접근하여 사용할 수 있다(8~21줄 참고).

*/

