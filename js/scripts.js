$(document).on('ready', function () {
    
      $(".slickNormalAdaptive").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      adaptiveHeight: true
       });
    
    $(".post-wrapper").slick({
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
     $(".post-wrapper2").slick({
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: $('.next2'),
        prevArrow: $('.prev2'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
      $(".post-wrapper3").slick({
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: $('.next3'),
        prevArrow: $('.prev3'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    $(".post-wrapper4").slick({
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        nextArrow: $('.next4'),
        prevArrow: $('.prev4'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    });
    
    
});