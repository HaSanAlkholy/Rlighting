$(window).on('load', function () {

  //preloader
  $('.pre-loader').fadeOut("500", function () {
    $('html').removeClass("overflow");
    $(this).remove();
  });

  //nava toggle
  $('#nava-icon').click(function (e) {
    $('#nava').toggleClass('nava-active');
    $('html').toggleClass('overflow');
  });

  $('#nava').click(function (e) {
    if (e.target.id == 'nava' || e.target.id == 'close-nava' || e.target.parentNode.id == "close-nava") {
      $(this).removeClass('nava-active');
      $('html').removeClass('overflow');
    }
  });

  //search toggle
  $('#search-btn').click(function (e) {
    $('#search-form').toggleClass('search-form-active');
    $('html').toggleClass('overflow');
  });

  $('#search-form').click(function (e) {
    if (e.target.id == 'search-form' || e.target.id == 'close-search' || e.target.parentNode.id == "close-search") {
      $(this).removeClass('search-form-active');
      $('html').removeClass('overflow');
    }
  });

  $(".slide").on("click", function (e) {
    if (e.target.classList.contains('drop')) {
      console.log(e.target);
      $(this).toggleClass("slide-active");
      $(this).children("ul").slideToggle();
    }
  });


  var mySwiper = new Swiper('header .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper2 = new Swiper('.s-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      // when window width is >= 480px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 250px
      150: {
        slidesPerView: 1,
      }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper3 = new Swiper('.banners-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    spaceBetween: 30,
    allowTouchMove: true,
    autoplay: {
      delay: 4000,
    },

    breakpoints: {
      // when window width is >= 576px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,

      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 1,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var mySwiper4 = new Swiper('.notes-swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    updateOnWindowResize: true,
    slidesPerView: 4,
    autoplay: false,
    allowTouchMove: false,

    breakpoints: {
      // when window width is >= 576px
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },
      576: {
        slidesPerView: 2,
        allowTouchMove: true,
        autoplay: {
          delay: 4000,
        }
      },
      // when window width is >= 250px
      0: {
        slidesPerView: 1,
        allowTouchMove: true,
        autoplay: 4000,
      }
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  if (window.innerWidth <= 1200) {
    setInterval(() => {
      mySwiper4.slideNext();
    }, 4000);
  }

    // sliders

    let sliders = document.getElementById('sliders');

    sliders.addEventListener('click', slidersChange);
  
  
    function slidersChange(e) {
      let name = e.target.dataset.name;
      if (name) {
        let sliders = document.getElementById('sliders-body').children;
        let tags = document.getElementById('sliders-head').children[0].children;
        removeActiveTag(tags);
        addActiveTag(e.target);
        removeActiveSlider(sliders);
        addActiveSlider(sliders, name);
      }
    }
  
    function removeActiveTag(list) {
      for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        if (list[i].classList.contains('active')) {
          list[i].classList.remove('active');
        }
      }
    }
  
    function addActiveTag(e) {
      e.classList.add('active');
    }
  
    function removeActiveSlider(list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains('active')) {
          list[i].classList.remove('active');
        }
      }
    }
    function addActiveSlider(list, name) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].dataset.name == name) {
          list[i].classList.add('active');
        }
      }
    }
  

  // animate on scroll

  AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    disable: function () {
      var maxWidth = 769;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });

  
  window.addEventListener("scroll", scrolled);

  function scrolled() {
    let up = document.getElementById('up');
    if (this.scrollY > 200) {
      up.classList.add('active-up');
    } else {
      up.classList.remove('active-up');
    }
  }



});
