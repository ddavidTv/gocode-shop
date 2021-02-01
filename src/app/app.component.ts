import { Component } from '@angular/core';

//Interfaces:
import { IProduct } from './IProduct';
import { ISelection } from './ISelection';

//Data:
import { PRODUCTS } from './products';
import { SORTINGYPES } from './sortingTypes';
import { FILTERINGTYPES } from './filteringTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly title: string = "GoCode Shop";

  products: IProduct[] = PRODUCTS;
  sortingTypes: ISelection[] = SORTINGYPES;
  filteringTypes: ISelection[] = FILTERINGTYPES;

  private afterFilterProducts: IProduct[] = [...PRODUCTS];
  private afterFilterProductsBackUp: IProduct[] = [];

  ngOnInit() {
    console.log(PRODUCTS);
  }

  filterCatalogBy(event: Event) {
    const sortedBy = (<HTMLInputElement>document.getElementById("sortBy"));
    const filterBy = (<HTMLInputElement>event.target).value;

    switch (filterBy) {
      case "":
        if (sortedBy.value === "")
          this.afterFilterProducts = [...PRODUCTS];
        break;
      default:
        this.afterFilterProducts = PRODUCTS.filter(function (product) {
          return product.category === filterBy;
        });
        this.afterFilterProductsBackUp = [...this.afterFilterProducts];
        break;
    }
    this.products = this.afterFilterProducts;
  }

  sortCatalogBy(event: Event) {

    const filteredBy = (<HTMLInputElement>document.getElementById("filterBy"));
    const sortBy = (<HTMLInputElement>event.target).value;
    switch (sortBy) {
      case "":
        if (filteredBy.value === "")
          this.products = [...PRODUCTS];
        else
          this.products = this.afterFilterProductsBackUp;
        break;
      case "alphabeticallyAtoZ":
        this.afterFilterProducts.sort(function (product1, product2) {
          let p1: string = product1.title.toLowerCase();
          let p2: string = product2.title.toLowerCase();
          return (p1 > p2) ? 1 : (p1 < p2) ? -1 : 0;
        });
        this.products = this.afterFilterProducts;
        break;

      case "alphabeticallyZtoA":
        this.afterFilterProducts.sort(function (product1, product2) {
          let p1: string = product1.title.toLowerCase();
          let p2: string = product2.title.toLowerCase();
          return (p1 < p2) ? 1 : (p1 > p2) ? -1 : 0;
        });
        this.products = this.afterFilterProducts;
        break;

      case "PriceLowToHigh":
        this.afterFilterProducts.sort(function (product1, product2) {
          let p1: number = product1.price;
          let p2: number = product2.price;
          return (p1 > p2) ? 1 : (p1 < p2) ? -1 : 0;
        });
        this.products = this.afterFilterProducts;
        break;

      case "PriceHighToLow":
        this.afterFilterProducts.sort(function (product1, product2) {
          let p1: number = product1.price;
          let p2: number = product2.price;
          return (p1 < p2) ? 1 : (p1 > p2) ? -1 : 0;
        });
        this.products = this.afterFilterProducts;
        break;

      case "DateOldToNew":
        this.afterFilterProducts.sort(function (product1, product2) {
          let p1: Date = new Date(product1.addedDate);
          let p2: Date = new Date(product2.addedDate);
          return (p1 > p2) ? 1 : (p1 < p2) ? -1 : 0;
        });
        this.products = this.afterFilterProducts;
        break;

      case "DateNewToOld":
        this.afterFilterProducts.sort(function (product1, product2) {
          let p1: Date = new Date(product1.addedDate);
          let p2: Date = new Date(product2.addedDate);
          return (p1 < p2) ? 1 : (p1 > p2) ? -1 : 0;
        });
        this.products = this.afterFilterProducts;
        break;
    }

  }

}