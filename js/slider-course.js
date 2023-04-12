$(document).ready(function () {
  // Check if the slider element exists on the page
  if ($(".course-development-of-websites-block__slider").length) {
    // Get a reference to the slider element
    var $slider = $(".course-development-of-websites-block__slider");

    // Function to toggle the slider based on screen size
    function toggleSlider() {
      // If the screen size is larger than 850 pixels and there are at least 4 slides, show 3 slides at a time and scroll 2 at a time
      if ($(window).width() > 850 && $slider.find(".slick-slide").length >= 4) {
        $slider.slick({
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
          cssEase: "linear",
          arrows: false,
        });
      } else {
        // If the screen size is smaller than 850 pixels or there are fewer than 4 slides, show 3 slides at a time and scroll 3 at a time, and add arrows
        if (!$slider.hasClass("slick-initialized")) {
          $slider.slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
            infinite: true,
            cssEase: "linear",
            arrows: true,
            responsive: [
              {
                // At 850 pixels and below, show 2 slides at a time and scroll 2 at a time, and hide arrows
                breakpoint: 850,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true,
                  arrows: false,
                },
              },
              {
                // At 600 pixels and below, show 1 slide at a time and scroll 1 at a time, and hide arrows
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                },
              },
            ],
          });
        }
      }
    }

    // Function to disable the slider if there are too few slides to show
    function disableSliderIfFewSlides() {
      if ($(window).width() > 850 && $slider.find(".slick-slide").length <= 3) {
        if ($slider.hasClass("slick-initialized")) {
          $slider.slick("unslick");
        }
      }
    }

    // Call the toggleSlider and disableSliderIfFewSlides functions on page load
    toggleSlider();
    disableSliderIfFewSlides();

    // Call the toggleSlider and disableSliderIfFewSlides functions on window resize
    $(window).resize(function () {
      toggleSlider();
      disableSliderIfFewSlides();
    });
  }
});
