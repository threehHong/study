const apple = "사과"
console.log(apple);

localStorage.setItem("apple", "사과"); 
localStorage.setItem("english", "영어"); 
localStorage.setItem("math", "수학"); 
//로컬스토리지에 myName이라는 데이터 이름(kye)와 apple라는 데이터값(value) 저장.

/* 

1.
window.localStorage
- 현재 접속하고 있는 도메인의 로컬 저장소에 접근하게 해주는 속성(메소드?)
- 데이터의 이름과 데이터의 값이 저장된다(데이터 타입은 문자열만 가능하다)
- 데이터의 이름은 key, 데이터의 값은 value.
- 이름(key)이 같은 데이터를 두 개 이상 저장할 수 없다
  이름(key)이 다르면 두 개 이상 저장할 수 있다.
- 데이터는 영구 저장된다(웹 브라우저를 끄고, 키고, 새로고침해도 데이터가 사라지지 않는다)

2.
로컬스토리지로부터 데이터를 읽거나 쓸 때에 사용하는 메소드
setItem
데이터를 저장할 떄 사용하는 메소드
setItem("key", "value")

getItem
저장된 데이터를 읽어올 때 사용하는 메소드
getItem("key")

removeItem
저장된 개별 데이터를 삭제할 떄 사용하는 메소드
removeItem("key")

clear
저장된 모든 데이터를 삭제할 때 사용하는 메소드
clear()

3.
로컬 저장소에 접근하는 방법
개발자 도구 -> Application -> storage -> Local Storage.

*/

