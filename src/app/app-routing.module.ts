import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsPageComponent } from './components/units-page/units-page.component';
import { UnitDetailPageComponent } from './components/unit-detail-page/unit-detail-page.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes =[
  { path: "home", component: HomeComponent },
  { path: "units", component: UnitsPageComponent },
  { path: "units/:id", component: UnitDetailPageComponent} ,
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
