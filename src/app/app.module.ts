import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { EnrollmentComponent } from './components/shared/enrollment/enrollment.component';
import { TestimonialComponent } from './components/shared/testimonial/testimonial.component';
import { PlayZoneComponent } from './components/pages/play-zone/play-zone.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, PageNotFoundComponent, EnrollmentComponent, TestimonialComponent, PlayZoneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
