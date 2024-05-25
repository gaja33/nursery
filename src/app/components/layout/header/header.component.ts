import { AfterViewInit, Component, OnInit } from "@angular/core";
declare var jQuery: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    (function ($) {
      //sticky menu
      $(window).on("scroll", function () {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
          $(".header").addClass("menu_fixed animated fadeInDown");
        } else {
          $(".header").removeClass("menu_fixed animated fadeInDown");
        }
      });
    })(jQuery);
  }
}
