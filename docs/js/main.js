$(function(){
    $('.menu-btn').click(function(){
        $('.header').toggleClass('active');
    })

    $('.header__menu li a').click(function(){
      $('.header').removeClass('active');
    })

    $(".tab").click(function() {
        $(".tab").removeClass("active").eq($(this).index()).addClass("active");
         $(".tab__item").hide().eq($(this).index()).fadeIn(1000)
    }).eq(0).addClass("active");

   

    $('.back').click(function(){
        $('.succes-modal').fadeOut();
    })

    $(function($){
        $(document).mouseup(function (e){ 
          var div = $(".succes-modal .succes-modal__content"); 
          var div2 = $(".succes-modal");
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) {
            div2.fadeOut();
      
          }
        });
      });

    


});