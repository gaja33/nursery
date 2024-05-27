import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutUsComponent } from "./components/pages/about-us/about-us.component";
import { PageNotFoundComponent } from "./components/pages/page-not-found/page-not-found.component";
import { PlayZoneComponent } from "./components/pages/play-zone/play-zone.component";
import { BirthdayPartyComponent } from "./components/pages/birthday-party/birthday-party.component";
import { SchoolGroupingComponent } from "./components/pages/school-grouping/school-grouping.component";
import { VacationPackagesComponent } from "./components/pages/vacation-packages/vacation-packages.component";
import { ActivitiesComponent } from "./components/pages/activities/activities.component";
import { PlayTariffComponent } from "./components/pages/play-tariff/play-tariff.component";
import { MembershipComponent } from "./components/pages/membership/membership.component";
import { ContactUsComponent } from "./components/pages/contact-us/contact-us.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "play-zone", component: PlayZoneComponent },
  { path: "birthday-party", component: BirthdayPartyComponent },
  { path: "school-grouping", component: SchoolGroupingComponent },
  { path: "vacation-packages", component: VacationPackagesComponent },
  { path: "activities", component: ActivitiesComponent },
  { path: "play-tariff", component: PlayTariffComponent },
  { path: "membership", component: MembershipComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
