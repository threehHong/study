// 제이쿼리 기본 JS - main.js 
// html이 모두 로딩후 실행구역

$(()=>{

    // JS에서 제일 중요한 것은? -> 요소 선택!
    // JS에서 편리한 요소 선택법은? -> document.querySelector() or document.querySelectorAll().

    // 제이쿼리 함수호출법
    // jQuery() -> $() 오른쪽이 축약형.
    // 요소 선택법 : $(선택자)
    // $(()=>{}) : $(선택자)에서 선택자 위치에 함수를 선언하면 html이 모두 로딩된 후 위의 코드블럭이 실행된다
    // 018.제이쿼리기본.txt 파일 참고

    /******************************
      1. 대상선정 변수할당 
     ******************************/
    
    // $()로 요소 선택을 남발하여 사용하면 안된다(메모리 관리를 위해)
    // 변수 = $(선택자); 이렇게 변수에 할당해서 사용한다.
    // querySelectorAll로 선택자를 가져오는 효과(자동적으로).

    // 대상1 : 주인공 미니언즈 선택(변수 할당!).
    let mi = $('.mi');
    // 대상2 : 버튼들
    let btns = $('.btns>button');
    // 대상3 : 빌딩 각방
    let bd = $('.building li');
    // 대상4 : 메시지 박스
    let msg = $('.msg');

    // console.log(mi);

    /***********************************
      2. 초기화 셋팅하기
     ***********************************/
    
    // 2-1. 버튼 셋팅 : 모든 버튼 다 숨기고 첫번째만 보이게하기.
    btns.hide().first().show() // 자동적으로 for문 효과가 들어간다.
    // btns.hide(); -> display: none; 효과.
    // 버튼들.숨겨라().첫번째().보여라()

    // 주사기, 좀비 코드 변수에 담기
    // 주사기
    let inj = '<img src="images/inj.png" alt="주사기" class="inj">';
    // 좀비1
    let mz1 = '<img src="images/mz1.png" alt="좀비1" class="mz">';
    // 좀비2
    let mz2 = '<img src="images/mz2.png" alt="좀비2" class="mz">';
    // 좀비3
    let zom = '<img src="images/zom.png" alt="좀비3" class="mz">';

    // 2zom 빌딩 숫자 셋팅
    // -> 모든 빌딩 li를 순서대로 돌면서 순번 넣기 + 좀비 및 주사기 넣기
    // 대상 : 빌딩 li -> bd변수.
    bd.each((idx, ele)=>{
        // 1. 각 li요소에 글자순번 넣기
        $(ele).text(idx);
        // text()는 글자넣기/읽기 메서드

        // 2. 좀비 + 주사기 넣기
        // 뒤에 코드 넣기는 append() 메서드 사용!
        if(idx===2) $(ele).append(inj);
        else if(idx===9) $(ele).append(mz1);
        else if(idx===7) $(ele).append(mz2);
        else if(idx===1) $(ele).append(zom);

    }); // 각각의 li 선택
    /*****************************
     [ for문을 쓰지 않고 돌게해주는 제이쿼리 메서드 ]
     ->>>>>>>>>>>>>each(function(idx, ele){})
     ->>>>>>>>>>>>>each((idx, ele)=>{})

    - 요소를 순서대로 돌면서 구현부를 실행
    - 첫번쨰 전달 변수 idx : 순번이 전달됨(0부터)
    - 두번째 전달변수 ele : 각각의 요소가 전달됨.
    (바교) forEach((ele, dix)=>{});
    *****************************/

    // 2-3. 모든 좀비 숨기기
    $('.mz').hide();
    // 선택 요소가 여러개이면 for문을 써야하지만 제이쿼리는 자동으로 모두 셋팅해준다.

    /************************************
          미니언즈 공통기능 함수  
     ************************************/
    const miniAct = () => {
      // ele - 버튼자신, seq - 이동할 li 순번
      $(ele).slideUp(400);

        // 미니언즈가  몇 번방으로 이동하기
        // 8번방 li 위치 알아오기
        let posT = bd.eq(seq).offset().top;
        let posL = bd.eq(seq).offset().left;
        console.log("top : ", posT, '\nleft :', posL);
        // eq(순번) 해당 순번 요소 선택
        // offset() 메서드 : 요소의 크기, 위치등 정보 제공
        // offset().top -> 맨 위에서 부터 top값
        // offset().left -> 맨 왼쪽 끝에서 부터 left값
        // 

        mi.animate({
          top: posT + "px",
          left: posL + "px"
        }, 1200, "easeInOutElastic", 
        ()=>{ // 애니 후 실행 함수
          // 다음 버튼 보이기
          $(e.currentTarget).next().slideDown(400);
        })
    } //// 1번 버튼 click ////

    /**************************************
        3. 버튼별 클릭 이벤트 함수 만들기 
     **************************************/

    // 3-1. "들어가기" 버튼 클릭시 (시작)
    btns.first().click((e)=>{ // e 이벤트 전달변수

        // 클릭된 버튼 자신 사라지기
        // 원래는 this가 자기자신이지만
        // 화살표함수 내부에서는 event.currentTarget이다!
        // e는 클릭 메서드 전달변수로 이벤트를 받는다!
        $(e.currentTarget).slideUp(400);

        // 미니언즈가 8번방으로 이동하기
        // 8번방 li 위치 알아오기
        let posT = bd.eq(8).offset().top;
        let posL = bd.eq(8).offset().left;
        console.log("top : ", posT, '\nleft :', posL);
        // eq(순번) 해당 순번 요소 선택
        // offset() 메서드 : 요소의 크기, 위치등 정보 제공
        // offset().top -> 맨 위에서 부터 top값
        // offset().left -> 맨 왼쪽 끝에서 부터 left값
        // 

        mi.animate({
          top: posT + "px",
          left: posL + "px"
        }, 1200, "easeInOutElastic", 
        ()=>{ // 애니 후 실행 함수
          // 다음 버튼 보이기
          $(e.currentTarget).next().slideDown(400);
        })



    }) //// 1번 버튼 click ////

    /* 
      [ slideUp(시간, 이징, 함수) ] 
      - 높이값이 0되면서 애니메이션 
      - 마지막에 display:none 처리!
      [ slideDown(시간, 이징, 함수) ] 
      - display를 보이게 한 후 높이값이 원래 값으로 복원애니메이션.
    */

    // 3-2. "옆방으로!" 버튼 클릭시
    // next() 선택 요소의 다음 형제 요소
    // 앞의 버튼 다음 버튼임!
    .next().click(()=>{

    })

    /********************************
      [ 제이쿼리 애니메이션 메서드 ]
      animate({css 설정}, 시간, 이징, 함수)
      - CSS는 속성: 값 객체형시긍로 사용.
      - 시간은 1/1000초 단위 없이 사용.
        (시간을 아쓰면 기본시간 400=0,4초이 적용됨).
      - 이징은 가속도 (제이쿼리UI가 있어야 적용됨!) -> https://easings.net/ko 참고
      - 함수는 애니메이션 후 실행코드(콜백함수).

      [ 제이쿼리 CSS변경 메서드 ]
      $(선택자).css({
        속성1:값, 
        속성2:값, 
        속성3:값
      })

      JS와 비교
      선택자.style.속성1 = 값
      선택자.style.속성2 = 값
      선택자.style.속성3 = 값

    ********************************/

}); 



