$(function(){
    $('.menu-btn').click(function(){
        $('.header').toggleClass('active');
    })

    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
         $(".tab__item").hide().eq($(this).index()).fadeIn(1000)
    }).eq(0).addClass("active");

    $(".header__menu ul, .to-top, .footer__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);

    });

    


});