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
                stagePadding: 100,
            },
            1000:{
                items:2,
                stagePadding: 100,
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
});