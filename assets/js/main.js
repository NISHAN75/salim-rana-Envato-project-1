(function($){
  "use strict";

  // swipper js
  var swiper = new Swiper(".tp-testimonial-active", {
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


})(jQuery);