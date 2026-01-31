(function ($) {
    "use strict";

    // Safety function to initialize libraries after everything is loaded
    $(window).on('load', function() {
        
        // 1. Initiate WOW.js
        if (typeof WOW === 'function') {
            new WOW().init();
        }

        // 2. Initiate Facts Counter
        if ($.fn.counterUp) {
            $('[data-toggle="counter-up"]').counterUp({
                delay: 10,
                time: 2000
            });
        }

        // 3. Initiate Project Carousel (Safety Check Added)
        if ($.fn.owlCarousel && $(".project-carousel").length > 0) {
            $(".project-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                loop: true,
                center: true,
                dots: false,
                nav: true,
                navText : [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ],
                responsive: {
                    0:{ items:2 },
                    768:{ items:3 },
                    992:{ items:4 },
                    1200:{ items:5 }
                }
            });
        }

        // 4. Initiate Testimonial Carousel (Safety Check Added)
        if ($.fn.owlCarousel && $(".testimonial-carousel").length > 0) {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                dots: false,
                loop: true,
                nav : true,
                navText : [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                responsive: {
                    0:{ items:1 },
                    768:{ items:2 }
                }
            });
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);