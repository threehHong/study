let btnTEXT = document.querySelector('.bbtt1');
let btnHTML = document.querySelector('.bbtt2');

let myString = "우리는 적이 아니라 <strong>친구다</strong>. 우리는 서로 적이 되어서는 안 된다. <strong>감점이 상했다고 서로 애정의 유대관계를 끊어서도 안 된다.</strong> 분명 선량한 본성이 다시 기억의 신비로운 현을 튕길 것이다."


btnTEXT.addEventListener('click', function(){
    document.querySelector('.content').innerText = myString
})
btnHTML.addEventListener('click', function(){
    document.querySelector('.content').innerHTML = myString
})

/*

1.
innerHTML 
태그의 텍스트 내용 바꾸거나 or 태그의 텍스트 내용 바꾸기+해당 태그에 다른 태그를 추가할 수 있는 메소드.

2.
innerTEXT 
태그의 텍스트 내용만 바꿀 수 있는 메소드.

*/

