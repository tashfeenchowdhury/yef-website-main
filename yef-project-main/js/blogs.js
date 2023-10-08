$(".carousel-och").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000, // 4000ms = 4  sec
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1    ,
      nav: false,
    },
  },
});
