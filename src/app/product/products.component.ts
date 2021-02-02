import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FILTERINGTYPES } from '../filteringTypes';
import { IProduct } from '../IProduct';
import { ISelection } from '../ISelection';
import { PRODUCTS } from '../products';

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
