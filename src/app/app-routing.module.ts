import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "home", component: HomeComponent},
  {path: ":id", component: OverviewComponent},
  {path: "**", redirectTo:"home"},
  {
    path:"",
    component: ShowDataComponent,
},
{
    path:"**",
    component: PagenotfoundComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
