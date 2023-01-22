import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { BikeComponent } from './components/pages/bike/bike.component';
import { CarComponent } from './components/pages/car/car.component';
import { ElectronicsComponent } from './components/pages/electronics/electronics.component';
import { GuidesComponent } from './components/pages/guides/guides.component';
import { HealthComponent } from './components/pages/health/health.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'car',component:CarComponent
  },
  {
    path:'bike',component:BikeComponent
  },
  {
    path:'health',component:HealthComponent
  },
  {
    path:'guides',component:GuidesComponent
  },
  {
    path:'electronics',component:ElectronicsComponent
  },
  {
    path:'article',component:ArticlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
