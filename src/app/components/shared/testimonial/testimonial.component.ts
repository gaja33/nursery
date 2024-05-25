import { Component, OnInit } from "@angular/core";
declare var jQuery: any;

@Component({
  selector: "app-testimonial",
  templateUrl: "./testimonial.component.html",
  styleUrls: ["./testimonial.component.scss"],
})
export class TestimonialComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    (function ($) {
      $(document).ready(function () {
        var testimonial = $(".testimonial_slider");
        if (testimonial.length) {
          testimonial.owlCarousel({
            items: 2,
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 500,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 2,
              },
            },
          });
        }
      });
    })(jQuery);
  }
}
