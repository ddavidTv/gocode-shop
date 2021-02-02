import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products?: IProduct[];

  constructor() { }

  ngOnInit(): void { }

}
