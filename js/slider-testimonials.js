$(document).ready(function () {
  var $slider = $(".testimonials-block__slider");
  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
  });
});
