import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutUsComponent } from "./components/pages/about-us/about-us.component";
import { PageNotFoundComponent } from "./components/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
