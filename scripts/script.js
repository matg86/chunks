(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('nav').addClass('nav-bar-scroll');
        }
        else{
            $('.navbar').removeClass('nav-bar-scroll');
        }
    });
})();


