import { AfterViewInit, Component, OnInit } from "@angular/core";
declare var jQuery: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    (function ($) {
      $(document).ready(function () {
        var bannerSlider = $(".bannerslider");
        if (bannerSlider.length) {
          bannerSlider.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: [
              "<i class='fa fa-chevron-left'></i>",
              "<i class='fa fa-chevron-right'></i>",
            ],
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            smartSpeed: 800,
            autoplayTimeout: 3000,
            responsive: {
              0: {
                nav: false,
              },
              768: {
                nav: true,
              },
            },
          });
        }
      });
    })(jQuery);
  }
}
