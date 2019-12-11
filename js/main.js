/* main.js */

// main.js
$(function() {
    // 마우스 오버시 메뉴 열림
    $('.depth1 > li').mouseover(function(){
        // class추가되면 보임
        $('.depth2').addClass('show_menu');
        $('#gnb_bg').addClass('show_menu');
    });

    // 마우스가 나가면 메뉴 닫힘
    $('.depth1 > li').mouseout(function(){
        $('.depth2').removeClass('show_menu');
        $('#gnb_bg').removeClass('show_menu');
    })
});


$(function(){
    var count = 1;  // 이미지번호

    // 인터벌함수(함수, 재생시간ms)
    setInterval(function(){
        console.log(count);
        if(count > 2) count = 0;
        // 모든 이미지 비표시
        $('.slider img').removeClass('show');
        // 현재 이미지만 표시
        $('.slider img')
            .eq(count)
            .addClass('show');
        
        // 인디게이터 이동
        $('.indicator > a').removeClass('show');
        $('.indicator > a')
        .eq(count)
        .addClass('show');

        count++;
    }, 5000);
}); 