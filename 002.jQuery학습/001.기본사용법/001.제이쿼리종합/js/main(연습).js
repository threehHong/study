$(() => {

    let mi = $('.mi');
    let btns = $('.btns>button');
    let bd = $('.building li');
    let msg = $('.msg');

    btns.hide().eq(0).show();

    let inj = '<img src="images/inj.png" alt="주사기" class="inj">';
    let mz1 = '<img src="images/mz1.png" alt="좀비1" class="mz"">';
    let mz2 = '<img src="images/mz2.png" alt="좀비2" class="mz"">';
    let zom = '<img src="images/zom.png" alt="좀비들" class="mz"">';

    bd.each((idx, ele) => {
 
        $(ele).text(idx);

        if (idx === 2) {
            $(ele).append(inj);
        } else if (idx === 9) {
            $(ele).append(mz1);
        } else if (idx === 7) { 
            $(ele).append(mz2);
        } else if (idx === 1) {
            $(ele).append(zom);
        }
    });

    $('.mz').hide();

    const miniAct = (ele, seq, call) => {
      
        $(ele).slideUp(400);
    
    
        msg.fadeOut(200);
    
        let posT = bd.eq(seq).offset().top;
        let posL = bd.eq(seq).offset().left;
        
        posL = posL + bd.eq(seq).width()/2 - mi.width()/2;
    
        console.log('top:', posT, '\nleft:', posL);
    
        mi.animate({
            top: posT + "px",
            left: posL + "px"
          }, 1000, "easeInOutElastic", call); 

      };

})