import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HeadComponent } from './head/head.component';
import { InfoComponent } from './info/info.component';
import { AboutComponent } from './about/about.component';
import { ImagesComponent } from './images/images.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HeadComponent,
    InfoComponent,
    AboutComponent,
    ImagesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMapsModule
  ]
})
export class HomeModule { }
