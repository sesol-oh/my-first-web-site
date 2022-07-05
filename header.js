'use strict';



/* 페이지 준비중 창 띄우기 */
$('.pageAlert').click(function () {
    alert('페이지 준비중 입니다');
});


/* 모바일 메뉴 */
$(function () {
    $('.m_nav').hide();
    $('.m_subUl>li>ul').hide();

    $('.m_menu').click(function () {
        $('.m_nav').show(500);
    });
    $('.m_close').click(function () {
        $('.m_nav').hide(500);
    });


    $('.mobile1').click(function () {
        $('.m_submenu1').slideToggle();
        $('.m_submenu2').hide();
        $('.m_submenu3').hide();
        $('.m_submenu4').hide();
        $('.m_submenu5').hide();
    });
    $('.mobile2').click(function () {
        $('.m_submenu2').slideToggle();
        $('.m_submenu1').hide();
        $('.m_submenu3').hide();
        $('.m_submenu4').hide();
        $('.m_submenu5').hide();
    });
    $('.mobile3').click(function () {
        $('.m_submenu3').slideToggle();
        $('.m_submenu1').hide();
        $('.m_submenu2').hide();
        $('.m_submenu4').hide();
        $('.m_submenu5').hide();
    });
    $('.mobile4').click(function () {
        $('.m_submenu4').slideToggle();
        $('.m_submenu1').hide();
        $('.m_submenu2').hide();
        $('.m_submenu3').hide();
        $('.m_submenu5').hide();
    });
    $('.mobile5').click(function () {
        $('.m_submenu5').slideToggle();
        $('.m_submenu1').hide();
        $('.m_submenu2').hide();
        $('.m_submenu3').hide();
        $('.m_submenu4').hide();
    });


});
