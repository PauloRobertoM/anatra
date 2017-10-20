(function($, window) {
	$('#owl-vitrine').owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        margin:30,
        nav: false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#owl-noticias').owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        margin:20,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#owl-convenios').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
})(jQuery, window);