(function($){
  "use strict";


  // data bg img

  $("[data-background]").each(function(){
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
  });


  // swipper js

  // testimonial slider
  let swiper = new Swiper(".tp-testimonial-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tp-swiper-test-button-next",
      prevEl: ".tp-swiper-test-button-prev",
    },
  });

  // brand slider 
  let swiper2 = new Swiper(".tp-brand-top-active", {
    slidesPerView: "auto",
    freemode:true,
    loop:true,
    spaceBetween: 80,
    centeredSlider:true,
    allowTouchMove:false,
    speed:4000,
    autoplay:{
      delay:1,
      disableOnInteraction:true,
    }

  });

  // brand slider
  let swiper3 = new Swiper(".tp-brand-top-active-2", {
    slidesPerView: "auto",
    freemode:true,
    loop:true,
    spaceBetween: 80,
    centeredSlider:true,
    allowTouchMove:false,
    speed:4000,
    autoplay:{
      delay:1,
      disableOnInteraction:true,
    }

  });

  // testimonial slider
  let swiper4 = new Swiper(".tp-team-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tp-swiper-team-button-next",
      prevEl: ".tp-swiper-team-button-prev",
    },
     // Responsive breakpoints
    breakpoints: {
      // when window width is >= 640px
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
      }
    }
  });

  // magnific popup
  $('.popup-img').magnificPopup({
    type: 'image'
    // other options
  });
  $('.popup-video').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        }
      }
    }
  });


})(jQuery);