import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/pages/home/home.component';
import { CarComponent } from './components/pages/car/car.component';
import { BikeComponent } from './components/pages/bike/bike.component';
import { HealthComponent } from './components/pages/health/health.component';
import { ElectronicsComponent } from './components/pages/electronics/electronics.component';
import { ResourcesComponent } from './components/pages/resources/resources.component';
import { GuidesComponent } from './components/pages/guides/guides.component';
import { ArticlesComponent } from './components/pages/articles/articles.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarComponent,
    BikeComponent,
    HealthComponent,
    ElectronicsComponent,
    ResourcesComponent,
    GuidesComponent,
    ArticlesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
