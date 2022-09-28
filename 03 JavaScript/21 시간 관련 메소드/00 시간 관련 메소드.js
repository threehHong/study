const button = document.querySelector('button');

// setTimeout
setTimeout(function(){
    console.log("2초 후 출력 결과물 \n\n")
}, 2000); // 2000ms = 1s.

// setInterval
let interId;
interId = setInterval(function(){
    console.log("2초 마다 실행될 결과물")
}, 1000);

// clearInterval
button.addEventListener('click', function(){
    clearInterval(interId);
}) 
// button 태그인 STOP를 클릭했하면 함수를 실행된다.
// setInterval 반환값인 interId를 clearInterval함수에 입력되면
// setInterval 함수가 멈춘다.
 
/* 

1.
setTimeout (윈도우 객체의 메소드)
정해진 시간이 지나고 나면 주어진 함수를 실행 해주는 타이머 메소드

setTimeout(실행할 함수, ms 단위의 시간). 1000ms = 1s.

2.
setInterval (윈도우 객체의 메소드)
일정한 시간 간격에 따라 주어진 함수를 반복 실행 해주는 메소드

setInterval(반복 실핼할 함수, ms 단위의 시간). 1000ms = 1s.

3.
clearInterval (윈도우 객체의 메소드)
setInterval을 멈추게 해주는 메소드
* setInterval을 멈추기 위해서는 clearInterval의 괄호 안에 setInterval을 저장한 변수를 넣어야 한다.

ex)
let 변수A = setInterval(콜백 함수, 시간); - 반복 시작
clearInterval(변수A); - 반복 중단
변수A = setInterval(콜백 함수, 시간); - 재시작

4.
콜백 함수 : 함수의 인자로 쓰인 함수.

 */


