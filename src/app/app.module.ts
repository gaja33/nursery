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
import { BirthdayPartyComponent } from './components/pages/birthday-party/birthday-party.component';
import { SchoolGroupingComponent } from './components/pages/school-grouping/school-grouping.component';
import { VacationPackagesComponent } from './components/pages/vacation-packages/vacation-packages.component';
import { ActivitiesComponent } from './components/pages/activities/activities.component';
import { PlayTariffComponent } from './components/pages/play-tariff/play-tariff.component';
import { MembershipComponent } from './components/pages/membership/membership.component';
import { ContactUsComponent } from './components/pages/contact-us/contact-us.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AboutUsComponent, PageNotFoundComponent, EnrollmentComponent, TestimonialComponent, PlayZoneComponent, BirthdayPartyComponent, SchoolGroupingComponent, VacationPackagesComponent, ActivitiesComponent, PlayTariffComponent, MembershipComponent, ContactUsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
