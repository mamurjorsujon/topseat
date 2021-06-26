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