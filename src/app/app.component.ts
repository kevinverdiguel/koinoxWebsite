import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Koinox_Website';
  
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far, fas, fab);
  }

  ngOnInit() {
    AOS.init({
      disable: window.innerWidth < 992
    });
    window.addEventListener('load', AOS.refresh);
  }
  
  
}
