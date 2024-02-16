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

  // Function to update active image and bottom part
  function updateActive(tabData) {
    // Update image
    var activeImage = document.querySelector('.active-image img');
    // Update bottom part
    var parts = document.querySelectorAll('.part');
    parts.forEach(function(part) {
      part.classList.remove('active');
    });
    var activePart = document.querySelector('.part[data-part="' + tabData + '"]');
    activePart.classList.add('active');
  }
  var activeTabs = document.querySelectorAll('.btn-tab');
  activeTabs.forEach(function(tab) {
    tab.classList.remove('active-btn-tab');
  });
  var activeTab = document.querySelector('.btn-tab[data-tab="' + tabData + '"]');
  activeTab.classList.add('active-btn-tab');