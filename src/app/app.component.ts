import { Component } from '@angular/core';
import { PRODUCTS } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  products = PRODUCTS;
  
}
