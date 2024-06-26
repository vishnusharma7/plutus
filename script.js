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
  // var tabs = document.querySelectorAll('.btn-tab');
  // tabs.forEach(function(tab) {
  //   tab.addEventListener('click', function() {
  //     var tabData = this.dataset.tab;
  //     var slideIndex = Array.from(this.parentElement.children).indexOf(this);
  //     swiper.slideTo(slideIndex);
  //     updateActive(tabData);
  //     tabs.forEach(function(tab) {
  //       tab.classList.remove('active-nav');
  //     });
    
  //     // Add 'active-nav' class to the tab corresponding to the active slide
  //     tabs[activeIndex].classList.add('active-nav');
  //   });
  // });

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

  var tabs = document.querySelectorAll('.btn-tab');
tabs.forEach(function(tab, index) {
  tab.addEventListener('click', function() {
    var tabData = this.dataset.tab;
    var slideIndex = index; // Use the index of the clicked tab
    swiper.slideTo(slideIndex);
    updateActive(tabData);
    
    // Remove 'active-nav' class from all tabs
    tabs.forEach(function(tab) {
      tab.classList.remove('active-btn-tab');
    });
    
    // Add 'active-nav' class to the clicked tab
    this.classList.add('active-btn-tab');
  });
});

swiper.on('slideChange', function () {
  var activeIndex = swiper.realIndex;
  var tabs = document.querySelectorAll('.btn-tab');
  
  // Remove 'active-nav' class from all tabs
  tabs.forEach(function(tab) {
    tab.classList.remove('active-btn-tab');
  });

  // Add 'active-nav' class to the tab corresponding to the active slide
  tabs[activeIndex].classList.add('active-btn-tab');
});


 document.addEventListener('DOMContentLoaded', function () {
      var reviewSwiper = new Swiper('.review-swiper', {
        slidesPerView: 1,
        spaceBetween: 80,
        loop: true,
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
          slideToClickedSlide: true,
          speed: 1500,
          pagination: {
            el: ".swiper-pagination",
          },
          
      });
  });


  document.addEventListener("DOMContentLoaded", function() {
    var blog = new Swiper('.blog-swiper', {
      loop: true,
      slidesPerView:'auto',
     
      // autoplay: true,
      navigation: {
        nextEl: '.arrow2-blog',
        prevEl: '.arrow1-blog',
      },
      breakpoints: {
        1500:{
          slidesPerView:3,
        },
        1200:{
          slidesPerView:4,
        },
        768: {
          slidesPerView: 2
        },
        // when window width is <= 576px (mobile)
        576: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        450: {
          slidesPerView:'auto',
          centeredSlides: true,
        }
      }
    });
});
  
