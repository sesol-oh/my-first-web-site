

/*////////////////////////////////
    함수명 : moveFlavorL
    기능 : flavor 슬라이드 왼쪽으로 이동
////////////////////////////////*/
var flavorL = function(){
    
    $('.flavor_wrap').animate({
        //left: '220px'
        left: '0'
    }, 500, function(){
        $('.flavor_wrap').prepend($('.flavor:last')).css({
            //left: '0'
            left: '-220px'
        });    
    }); //animate
}


/*////////////////////////////////
    함수명 : moveFlavorR
    기능 : flavor 슬라이드 오른쪽으로 이동
////////////////////////////////*/
var flavorR = function(){
    
    $('.flavor_wrap').animate({
        //left: '-220px'
        left: '-440px'
    }, 500, function(){
        $('.flavor_wrap').append($('.flavor:first')).css({
            //left: '0'
            left: '-220px'
        });    
    }); //animate
}


$(function(){
    $('.flavor_wrap').prepend($('.flavor:last')).css({
        left: '-220px'
    });
    $('.arrow_L').click(function(e){
        e.preventDefault();
        flavorL();
    });
    $('.arrow_R').click(function(e){
        e.preventDefault();
        //alert('깜빡깜빡~~~~');
        flavorR();
    });
}); 



