  const btn1 = document.getElementById("one");
  const btn2 = document.getElementById("two");

  const handleClick = function(){
    console.log("click");
  }

  btn1.addEventListener('click', handleClick);
  btn1.addEventListener('click', function(){
    console.log("또 다른 이벤트 핸들러 추가 등록")
  });
  btn1.removeEventListener('click', handleClick);

  const handleClick2 = function(evnet){
    console.log(evnet)
  }
  btn2.addEventListener("click", handleClick2)

/*

1.
addEventListener 메소드를 활용한 이벤트 핸들러 등록 방법.
target.onclick = function() {} - 기존 이벤트 핸들러 등록 방법

target.addEventListener('이벤트 속성', 함수명)

2.
removeEventListener 메소드를 활용한 이벤트 핸들러 제거 방법
target.removeEventListener('이벤트 속성', 함수명);

콜백 함수 : 인자로 쓰인 함수.

3.
이벤트 객체
- 이벤트 객체 : 이벤트 발생시 추가적인 기능과 정보를 제공하기 위해 이벤트 핸들러에 
자동으로 전달되는 데이터다.

- 이벤트 발생시 이벤트 핸들러가 호출될 떄 이벤트 객체가 전달되는데, 이 떄 이벤트
핸들러 함수의 매개변수를 통해 이벤트 객체를 받을 수 있다(매개변수의 명칭은
사용자가 자유롭게 정의하면 된다).

- 이벤트 객체에는 여러가지 정보와 기능이 포함되어 있고 이벤트 객체에 접근해서 무언가
를 할 수 있다.

event.target - event 객체에 있는 target 속성에 접근
target은 이벤트가 발생한 태그를 의미. 

*/


