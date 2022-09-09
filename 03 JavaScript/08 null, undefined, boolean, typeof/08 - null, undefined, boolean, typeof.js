let num;
console.log(num); // undefined : 데이터가 정의되지 않음을 의미(콘솔창 참고).

num = "Hello";
console.log(num);

console.log(typeof num); // typeof

num = null;
console.log(num); console.log("\n");

// ------------------------------------

let data = true;
console.log(data);

data = false;
console.log(data);

console.log(typeof data); // typeof

data = True; // 대문자로 시작하는 true 이므로 오류 발생.
console.log(data);

/*

undefined : 데이터가 정의되지 않음을 의미(콘솔창 참고).

null : 데이터가 '없다'를 의미하는 데이터 

boolean : 1. 참과 거짓 여부를 나타내기 위해 사용하는 true와 false를 의미
             하는 데이터타입(ture와 false의 데이터타입은 불리언이다)
          2. true와 false는 문자가 아닌 참과 거짓을 의미하는 불리언 타입의 값이다(ture와 false는 소문자로 사용해야 한다).
          3. 불리언.

typeof : 1. 데이터의 타입을 알려주는 것
         2. typeof 변수를 입력하면 변수의 데이터 타입을 반환한다. 

*/



