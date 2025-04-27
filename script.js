window.onload = function () {
  setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
  }, 3000); 
};



var swiper = new Swiper(".mySwiper", {
  loop: true, // Enables infinite scrolling
  autoplay: {
    delay: 4000, // Auto-slide every 3 seconds
    disableOnInteraction: false,
  },
  speed: 1000, // Adjust transition speed (in ms)
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const scroll = new LocomotiveScroll({
  el: document.querySelector(".big-container"), 
  smooth: true,
});



$(document).ready(function () {
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true,
    dots: true
  });

  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});



