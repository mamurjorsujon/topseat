$(document).ready(function(){

    $("#number-of-people").owlCarousel({
      loop:true,
      margin:8,
      nav:true,
      dots: false,
      center:true,
      navText: ["<i class='fas fa-chevron-left arrow-style fa-sm position-absolute transform-50 border prev-btn'></i>", "<i class='fas fa-chevron-right arrow-style fa-sm position-absolute transform-50 border next-btn'></i>"],
      responsive:{
          0:{
              items:3,
              nav:false
          },
          600:{
              items:4,
              nav:false
          },
          1000:{
              items:5
          }
      }
    });



    $("#number-of-times").owlCarousel({
      loop:true,
      margin:8,
      nav:true,
      dots: false,
      navText: ["<i class='fas fa-chevron-left arrow-style fa-sm position-absolute transform-50 border prev-btn'></i>", "<i class='fas fa-chevron-right arrow-style fa-sm position-absolute transform-50 border next-btn'></i>"],
      responsive:{
          0:{
              items:3
          },
          600:{
              items:4
          },
          1000:{
              items:5
          }
      }
    });

    $(".single_page_carousel_inner").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".carousel-control-prev"),
        nextArrow: $(".carousel-control-next"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.image-lightshort').magnificPopup({
        type: 'image',
        verticalFit: true,
        gallery:{
            enabled:true
        },
        image: {
            titleSrc: 'title'
          }
    });


    // single page related topseat
    $(".topseat-single-related-slider").slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: $(".prev-related"),
        nextArrow: $(".next-related"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

  });

