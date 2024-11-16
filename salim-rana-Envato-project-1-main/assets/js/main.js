(function($){
  "use strict";


    // mobile menu 
    var tpMenuWrap = $('.tp-mobile-menu-active > ul').clone();
    var tpSideMenu = $('.tp-offcanvas-menu nav');
    tpSideMenu.append(tpMenuWrap);
    if ($(tpSideMenu).find('.sub-menu, .tp-mega-menu').length != 0) {
      $(tpSideMenu).find('.sub-menu, .tp-mega-menu').parent().append('<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      console.log(e);
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .tp-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .tp-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });

  // offcanvas menu
  $(".tp-offcanvas-toogle").on("click", function() {
      $(".tp-offcanvas").addClass("tp-offcanvas-open");
      $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
  });
  $(".tp-offcanvas-close-toggle").on("click", function() {
      $(".tp-offcanvas").removeClass("tp-offcanvas-open");
      $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
  });
  $(".tp-offcanvas-overlay").on("click", function() {
      $(".tp-offcanvas").removeClass("tp-offcanvas-open");
      $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
  });
  // offcanvas menu


  // data bg img

  $("[data-background]").each(function(){
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
  });
  $("[data-bg-color]").each(function(){
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
  $("[data-color]").each(function(){
    $(this).css("color", $(this).attr("data-color"));
  });


  // swipper js

  // testimonial slider
  let testimonialSlider = new Swiper(".tp-testimonial-active", {
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
  // tp-test-active slider
  let testimonialSlider2 = new Swiper(".tp-test-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".tp-review-button-next",
      prevEl: ".tp-review-button-prev",
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


  // brand slider 
  let brandSlider = new Swiper(".tp-brand-top-active", {
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
  let brandSlider2 = new Swiper(".tp-brand-top-active-2", {
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
  let tpBrandTitle = new Swiper(".tp-brand-title-active", {
    slidesPerView: "auto",
    freemode:true,
    loop:true,
    spaceBetween: 40,
    centeredSlider:true,
    allowTouchMove:false,
    speed:4000,
    autoplay:{
      delay:1,
      disableOnInteraction:true,
    }

  });
  // testimonial slider
  let brandSlider3 = new Swiper(".tp-brand-normal-active", {
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
      576: {
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

  // testimonial slider
  let teamSlider = new Swiper(".tp-team-active", {
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


  // testimonial  with  thumb slider
  let testimonial__thumb = new Swiper(".tp-testimonial-thumb-active", {
    loop:true,
    slidesPerView: 3,
    centeredSlides: true,
    watchSlidesProgress: true,
  });
  let testimonial__content = new Swiper(".tp-testimonial-content-active", {
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: testimonial__thumb,
    },
  });

  // project slider 
  let project = new Swiper(".tp-project-active", {
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
  let blog = new Swiper(".tp-blog-active", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tp-swiper-blog-button-next",
      prevEl: ".tp-swiper-blog-button-prev",
    }
  });

  // isotope
  if($('.grid').length != 0){
    var $grid = $('.grid').imagesLoaded(function() {
      // Initialize Isotope
      $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: 1
        }
      });

    
      // Filter items on button click and manage active class
      $('.tp-portfolio-filter').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        // Filter items
        $grid.isotope({ filter: filterValue });
        $('.tp-portfolio-filter button').removeClass('active');
        $(this).addClass('active');
      });
    });
  } 




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

  // map
  const customStyle = [
    // Example JSON style
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#F2F2F2" }]
    },
    {
      "elementType": "labels.icon",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#4A4A4A" }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#F2F2F2" }]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{ "color": "#F2F2F2" }]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [{ "color": "#F2F2F2" }]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#FEFEFE" }]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#FEFEFE" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{ "color": "#FEFEFE" }]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#FEFEFE" }]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{ "color": "#F2F2F2" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#AAC4E6" }]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#AAC4E6" }]
    }
  ];

  function initMap() {
    const mapOptions = {
      center: { lat: 37.7749, lng: -122.4194 }, // San Francisco
      zoom: 10,
      styles: customStyle,
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Custom marker icon
    const customIcon = {
      url: "http://127.0.0.1:5500/assets/img/map/marker.png", // Replace with your custom marker URL
      scaledSize: new google.maps.Size(40, 50), // Adjust size
      origin: new google.maps.Point(0, 0), // Origin point
      anchor: new google.maps.Point(25, 50), // Anchor point
    };

    // Add a custom marker
    const customMarker = new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
      icon: customIcon, // Set the custom icon
      title: "Custom Marker",
    });

    // InfoWindow for the custom marker
    const infoWindow = new google.maps.InfoWindow({
      content: "<h3>San Francisco</h3><p>This is a custom marker!</p>",
    });

    customMarker.addListener("click", function () {
      infoWindow.open(map, customMarker);
    });
  }

  initMap();


})(jQuery);