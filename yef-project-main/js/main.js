$(".carousel-och").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000, // 3000ms = 3  sec
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3    ,
      nav: false,
    },
  },
});
