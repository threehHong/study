// 객체 내부에 함수를 정의하여 사용.
const batman = {
    name : "Bruce Wayne",
    age : 33,
    fly : function(){  // fly(){console.log("배드맨이 날아간다"}와 같이 줄여서 사용할 수 있다
        console.log("배드맨이 날아간다")
    }
}
batman.fly(); // 객체 내부에 정의한 함수를 사용할 떄는 호출식 형태로 써야 한다 즉 함수명() 형태로 써야한다.
console.log(batman.name); console.log("\n");

// 객체 내부에 정의한 함수에서 this 사용
const user = {
    name: "mike",
    sayHello: function(){
        console.log(`Hello, I'm ${this.name}`) // user.name이 아닌 this.name으로 써주는게 좋다.
    }
}
user.sayHello();
// this는 key 값을 포함하는 객체를 가리킨다.

/* 
화살표 함수와 tis
1. 참고로 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않는다
2. 화살표 삼수 내부에서 this를 사용하면 this는 외부에서 값을 가져온다(자신보다 상위 스코프를 가져온다)
   여기서 this는 전역객체를 가리킨다(브라우저 환경에서 전역객체는 window이다). 
*/


