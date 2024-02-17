 // Initialize Swiper

 var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    slideToClickedSlide: true,
    speed: 800,
  });

  // Handle tab click to slide
  var tabs = document.querySelectorAll('.btn-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var tabData = this.dataset.tab;
      var slideIndex = Array.from(this.parentElement.children).indexOf(this);
      swiper.slideTo(slideIndex);
      updateActive(tabData);
      tabs.forEach(function(tab) {
        tab.classList.remove('active-nav');
      });
    
      // Add 'active-nav' class to the tab corresponding to the active slide
      tabs[activeIndex].classList.add('active-nav');
    });
  });

//   Update active tab on slide change
  // swiper.on('slideChange', function () {
  //   var activeIndex = swiper.realIndex;
  //   var tabs = document.querySelectorAll('.btn-tab');
  //   var tab = tabs[activeIndex];
  //   var tabData = tab.dataset.tab;
  //   updateActive(tabData);
  //   tabs.forEach(function(tab) {
  //     tab.classList.remove('active-nav');
  //   });
  
  //   // Add 'active-nav' class to the tab corresponding to the active slide
  //   tabs[activeIndex].classList.add('active-nav');
  // });

  

 document.addEventListener('DOMContentLoaded', function () {
      var reviewSwiper = new Swiper('.review-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.arrow1',
          prevEl: '.arrow2',
        },
        pagination: {
          el: ".swiper-pagination",
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
          slideToClickedSlide: true,
          speed: 1500,
          
      });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var hero = new Swiper('.review-swipe', {
        direction: 'horizontal',
        loop: true,
        slidesPerView:'auto',
        autoplay: true,
        spaceBetween: 80,
        centeredSlides: true,
        slideToClickedSlide: true,
        speed: 800,
        autoplay: {
          delay: 5000, // Delay between slides in milliseconds (5 seconds in this case)
          disableOnInteraction: false, // Prevent autoplay from stopping when user interacts with the slider
        },
        navigation: {
          nextEl: '.arrow1',
          prevEl: '.arrow2',
        },
    });
});