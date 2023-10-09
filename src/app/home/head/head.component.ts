import { Component, ElementRef  } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  

  constructor(private headerService: HeaderService) { }

}
