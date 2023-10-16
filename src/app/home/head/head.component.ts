import { Component, ElementRef  } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'Información', homePath: '/', fragment: 'info', pagePath: '/info' },
    { title: '¿Quiénes somos?', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'Galería', homePath: '/', fragment: 'gallery', pagePath: '/gallery' },
    { title: 'Contacto', homePath: '/', fragment: 'contact', pagePath: '/contact' },
    //{title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' }
  ];

  name = 'Angular ';

  isCollapsed = true;

  constructor(private headerService: HeaderService) { }

}