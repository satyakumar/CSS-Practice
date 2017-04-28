(function($) {
    "use strict";
    $(".ion-android-menu").on("click",function() { 
        $('aside').addClass('pull-nav');     
        $('main').addClass('translate-body');  
        $('body').addClass('bg-body');
        $("aside div i").toggle();
        $("aside div h1").addClass('aside-heading');
    });
    $(".ion-close-round").on("click",function() {
        $('aside').removeClass("pull-nav"); 
        $('main').removeClass('translate-body');  
        $('body').removeClass('bg-body');
        $("aside div i").toggle();
        $("aside div h1").removeClass('aside-heading');
    });
})(jQuery);