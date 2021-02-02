import { Component, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../IProduct';
import { ISelection } from '../ISelection';
import { PRODUCTS } from '../products';
import { SORTINGYPES } from '../sortingTypes';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {

  private products: IProduct[] = PRODUCTS;

  filteringTypes: string[] = [];
  @Output() filteredOrSortedProducts: IProduct[] = [...PRODUCTS];

  sortingTypes: ISelection[] = SORTINGYPES;
  private beforeSortedProducts: IProduct[] = [];

  selectedCategory: string = "";

  constructor() { }

  ngOnInit(): void {
    this.filteringTypes = Object.keys(this.groupBy(this.products, 'category'));
    this.filteringTypes.unshift("");
  }

  filterCatalogBy(category: Event): void {

    const sortedBy = (<HTMLInputElement>document.getElementById("filterBy")).value;
    const filteredBy = (<HTMLInputElement>category.target).value;

    switch (filteredBy) {
      case "":
        if (sortedBy === "")
          this.filteredOrSortedProducts = [...PRODUCTS];
        break;
      default:
        if (sortedBy === "")
          this.beforeSortedProducts = [...this.filteredOrSortedProducts];
        else {
          this.filteredOrSortedProducts = PRODUCTS.filter(function (product) {
            return product.category === filteredBy;
          });
          this.beforeSortedProducts = [...this.filteredOrSortedProducts];
        }
        break;
    }

  }

  sortCatalogBy(event: Event) {

    const filteredBy = (<HTMLInputElement>document.getElementById("filterBy")).value;
    const sortBy = (<HTMLInputElement>event.target).value;

    if (filteredBy === "")
      this.filteredOrSortedProducts = [...this.products];

    switch (sortBy) {
      case "alphabeticallyAtoZ":
        this.filteredOrSortedProducts.sort(function (product1, product2) {
          let p1: string = product1.title.toLowerCase();
          let p2: string = product2.title.toLowerCase();
          return (p1 > p2) ? 1 : (p1 < p2) ? -1 : 0;
        });
        break;

      case "alphabeticallyZtoA":
        this.filteredOrSortedProducts.sort(function (product1, product2) {
          let p1: string = product1.title.toLowerCase();
          let p2: string = product2.title.toLowerCase();
          return (p1 < p2) ? 1 : (p1 > p2) ? -1 : 0;
        });
        break;

      case "PriceLowToHigh":
        this.filteredOrSortedProducts.sort(function (product1, product2) {
          let p1: number = product1.price;
          let p2: number = product2.price;
          return (p1 > p2) ? 1 : (p1 < p2) ? -1 : 0;
        });
        break;

      case "PriceHighToLow":
        this.filteredOrSortedProducts.sort(function (product1, product2) {
          let p1: number = product1.price;
          let p2: number = product2.price;
          return (p1 < p2) ? 1 : (p1 > p2) ? -1 : 0;
        });
        break;

      case "DateOldToNew":
        this.filteredOrSortedProducts.sort(function (product1, product2) {
          let p1: Date = new Date(product1.addedDate);
          let p2: Date = new Date(product2.addedDate);
          return (p1 > p2) ? 1 : (p1 < p2) ? -1 : 0;
        });
        break;

      case "DateNewToOld":
        this.filteredOrSortedProducts.sort(function (product1, product2) {
          let p1: Date = new Date(product1.addedDate);
          let p2: Date = new Date(product2.addedDate);
          return (p1 < p2) ? 1 : (p1 > p2) ? -1 : 0;
        });

        break;
    }

  }

  groupBy = (xs: IProduct[], key: string) => xs.reduce((rv: any, x: any) => {
    (rv[x[key]] = true || []);
    return rv;
  }, {});

}
