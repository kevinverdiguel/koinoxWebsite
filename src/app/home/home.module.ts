import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {Router, RouterModule} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

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
    GoogleMapsModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [HeadComponent]

})
export class HomeModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far, fas, fab);
  }

}
