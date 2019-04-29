import { Component } from '@angular/core';
import {Quote} from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote('Mario', 'Muchui', 'we are who we are!', new Date(2001, 2, 3))
  ];
}
