'use strict';


$(document).ready(function() {
    $(window).scroll( function(){
        $('.swiper').each( function(i){
            
            var bottom_of_element = $(".swiper-slide").offset().top + $(".swiper-slide").outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1',"bottom":"0"},800);
            }
        }); 
    });
});





   var swiper = new Swiper('.swiper', {
        slidesPerView: 4,
	    breakpoints: { //반응형 조건 속성
        10: { //640 이상일 경우
          slidesPerView: 2, //레이아웃 2열
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
        direction: getDirection(),
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
//        on: {
//          resize: function () {
//            swiper.changeDirection(getDirection());
//          },
//        },
      });

      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 0 ? 'vertical' : 'horizontal';
        return direction;
      }


//css 플러그인
	$(window).scroll(function() {
		$('.content3 p').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("tracking");
			}
		});
        $('.swiper').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$(this).addClass("aaa");
			}
		});
		     $('.in_img').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("ins_on");
			}
		});
	});

/* 모달팝업1 */
		var embed = $('#player'); //동영상 코드
		var embed2 = $('#player2'); //동영상 코드
		
		function openModal(modalname) {
			document.get
			$("." + modalname).slideDown(300);
			var path = $(this).attr('href');
			$('.v_stop').append(embed);
			$('.p_stop').append(embed2);
		}

		$(".affo_close").on('click', function() {
			$(".modal_con").slideUp(300);
			$('.v_stop').empty();
			$('.p_stop').empty();
		});

