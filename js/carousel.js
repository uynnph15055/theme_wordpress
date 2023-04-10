$(document).ready(function () {

    // SLIDER DESCRIPTION
    $('.owl-carousel').owlCarousel({
        nav: false,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
            },
            749:{
                items:1,
                stagePadding: 120,
            },
            1000:{
                items:2,
                stagePadding: 120,
            },
            1470:{
                items:3,
                stagePadding: 70,
            },
            1800:{
                items:3,
                stagePadding: 100,
            }   
        }
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});