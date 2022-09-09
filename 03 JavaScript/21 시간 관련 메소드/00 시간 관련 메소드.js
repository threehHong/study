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

setTimeout(실행할 함수, ms 단위의 시간) 

2.
setInterval (윈도우 객체의 메소드)
일정한 시간 간격에 따라 주어진 함수를 반복 실행 해주는 메소드

setInterval(반복 실핼할 함수, ms 단위의 시간)

3.
clearInterval (윈도우 객체의 메소드)
setInterval을 멈추게 해주는 메소드.
setInterval 메소드는 x라는 0이 아닌값을 반환한다(이 x는 setInterval 메소
드의 아이디이다)
clearInterval(x)와 같이 설정하면 setInterval 메소드가 멈춘다.

4.
콜백 함수 : 함수의 인자로 쓰인 함수.

 */

