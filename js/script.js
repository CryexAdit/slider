$(function (){
    $('.my_slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        prevArrow: '<i class="fa-solid fa-chevron-left prev_arr"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right next_arr"></i>',
        dots: true,
        swipeToSlide: true,
        centerMode: true,
        centerPadding:"0px"
    });
})

