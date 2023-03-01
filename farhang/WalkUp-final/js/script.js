$(document).ready(function () {
  $(".slider-container").owlCarousel({
    loop: 1,
    autoplay: 0,
    dots: 0,
    margin: 10,
    responsiveClass: true,
    center: 1,
    nav: 0,
    responsive: {
      0: {
        items: 2.3,
      },
      760: {
        items: 3.3,
      },
      1000: {
        items: 4.3,
        nav: 0,
        margin: 20,
      },
    },
  });
});
$(document).ready(function () {
  $(".filterbuttons").owlCarousel({
    loop: 0,
    autoplay: 0,
    dots: 0,
    margin: 0,
    responsiveClass: true,
    center: 0,
    nav: 0,
    responsive: {
      0: {
        items: 2.3,
      },
      760: {
        items: 3.3,
      },
      1000: {
        items: 4.3,
      },
    },
  });
});
$(document).ready(function () {
  $(".image-gallery").owlCarousel({
    loop: 0,
    autoplay: 0,
    dots: 1,
    margin: 0,
    items: 1,
  });
});
