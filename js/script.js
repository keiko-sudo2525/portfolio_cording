// ハンバーガーメニュー表示
$(document).ready(function() {
  $('.sp-btn').click(function() {
    $('header').toggleClass('open');
  });
});

// トップへ戻るボタンの設定
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn();
      }else {
        $('.scroll-top').fadeOut();
      }
    });

    $(document).ready(function() {
      $('.scroll-top').click(function() {
        $('body, html').animate({scrollTop: 0}, 500);
      });
    });

// フワッと表示させる設定
$(function(){
$(window).scroll(function (){
    $('.fadein').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
    });
});
});
