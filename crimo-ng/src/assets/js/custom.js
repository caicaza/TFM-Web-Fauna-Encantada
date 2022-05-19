(function($){
    "use strict";

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Search Popup JS
    $('.close-btn').on('click',function() {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });
    $('.search-btn').on('click',function() {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });

    // Last Word Color JS
    $(".main-banner-content h1").html(function(){
        var text= $(this).text().trim().split(" ");
        var last = text.pop();
        var last2 = text.pop();
        return text.join(" ") + (text.length > 0 ? " <span>" + last2 +" "+ last + "</span>" : last);
    });

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Progress Bar JS
    $('.circlechart').circlechart();

    // Projects Slides
    $('.projects-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        mouseDrag: false,
        navText: [
            "<i class='flaticon-arrow-pointing-to-left'></i>",
            "<i class='flaticon-arrow-pointing-to-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1400: {
                items: 4,
            }
        }
    });

    // Testimonials Slides
    $('.testimonials-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        items: 1,
        navText: [
            "<i class='flaticon-arrow-pointing-to-left'></i>",
            "<i class='flaticon-arrow-pointing-to-right'></i>"
        ],
    });

    // Projects Image Slides
    $('.projects-image-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-arrow-pointing-to-left'></i>",
            "<i class='flaticon-arrow-pointing-to-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        }
    });

    $('.accordion').find('.accordion-title').on('click', function(){
        // Adds Active Class
        $(this).toggleClass('active');
        // Expand or Collapse This Panel
        $(this).next().slideToggle('fast');
        // Hide The Other Panels
        $('.accordion-content').not($(this).next()).slideUp('fast');
        // Removes Active Class From Other Titles
        $('.accordion-title').not($(this)).removeClass('active');
    });

    // Scroll Event
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
    });
    // Click Event
    $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
    });

    $('.preloader').fadeOut();
}(jQuery));
