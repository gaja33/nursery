(function ($) {
  "use strict";

  //wow js
  var wow = new WOW({
    animateClass: "animated",
    offset: 100,
    mobile: false,
    duration: 1000,
  });
  wow.init();

  setTimeout(() => {
    //scorll animation js
    var $title_overlay_effect = $(".title_overlay_effect");
    var $window = $(window);

    function scroll_addclass() {
      var window_height = $(window).height() - 200;
      var window_top_position = $window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each($title_overlay_effect, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = element_top_position + element_height;
        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          $element.addClass("is_show");
        }
      });
    }

    $window.on("scroll resize", scroll_addclass);
    $window.trigger("scroll");
  }, 2000);
})(jQuery);
