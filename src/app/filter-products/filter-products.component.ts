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
  filteredOrSortedProducts: IProduct[] = [...PRODUCTS];
  filteringTypes: string[] = [];

  sortingTypes: ISelection[] = SORTINGYPES;
  private beforeSortedProducts: IProduct[] = [];

  selectedFilterCategory: string = "";
  selectedSortCategory: string = "";

  constructor() { }

  ngOnInit(): void {

    this.filteringTypes = Object.keys(this.groupBy(this.products, 'category'));
    this.filteringTypes.unshift("");

  }

  filterCatalogBy = (category: Event): void => {

    this.selectedFilterCategory = (<HTMLInputElement>category.target).value;
    let filteredBy = this.selectedFilterCategory;

    switch (this.selectedFilterCategory) {
      case "":
        this.filteredOrSortedProducts = [...this.products];
        if (this.selectedSortCategory !== "")
          this.sortProducts(this.selectedSortCategory);
        break;
      default:
        this.filteredOrSortedProducts = PRODUCTS.filter(function (product) {
          return product.category === filteredBy;
        });
        this.beforeSortedProducts = [...this.filteredOrSortedProducts];
        break;
    }
  };

  sortCatalogBy = (event: Event): void => {
    this.selectedSortCategory = (<HTMLInputElement>event.target).value;
    this.sortProducts(this.selectedSortCategory);
  };

  sortProducts = (sortCategory: string): void => {

    switch (sortCategory) {
      case "":
        this.filteredOrSortedProducts = (this.selectedFilterCategory === "") ? [...PRODUCTS] : [...this.beforeSortedProducts];
        break;
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

  };

  groupBy = (xs: IProduct[], key: string): IProduct[] => xs.reduce((rv: any, x: any) => {
    (rv[x[key]] = rv[x[key]] || []);
    return rv;
  }, {});

}
