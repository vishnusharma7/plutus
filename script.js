 // Initialize Swiper

 var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    slideToClickedSlide: true
  });

  // Handle tab click to slide
  var tabs = document.querySelectorAll('.btn-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var tabData = this.dataset.tab;
      var slideIndex = Array.from(this.parentElement.children).indexOf(this);
      swiper.slideTo(slideIndex);
      updateActive(tabData);
    });
  });

//   Update active tab on slide change
  swiper.on('slideChange', function () {
    var activeIndex = swiper.realIndex;
    var tabs = document.querySelectorAll('.btn-tab');
    var tab = tabs[activeIndex];
    var tabData = tab.dataset.tab;
    updateActive(tabData);
  });

 document.addEventListener('DOMContentLoaded', function () {
      var reviewSwiper = new Swiper('.review-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.arrow1',
          prevEl: '.arrow2',
        },
      });
    });

    document.addEventListener("DOMContentLoaded", function() {
      var hero = new Swiper('.swiper-container-hero', {
          direction: 'horizontal',
          loop: true,
          slidesPerView:'auto',
          autoplay: true,
          spaceBetween: 1220,
          centeredSlides: true,
          slideToClickedSlide: true
      });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var hero = new Swiper('.review-swipe', {
        direction: 'horizontal',
        loop: true,
        slidesPerView:'auto',
        spaceBetween: 1220,
        centeredSlides: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.arrow1',
          prevEl: '.arrow2',
        },
    });
});