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
  });


})(jQuery);