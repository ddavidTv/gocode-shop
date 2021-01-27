// Create a drop-down with data's categories. 

import { IProduct } from "./IProduct";
import { ISelection } from "./ISelection";
import { PRODUCTS } from "./products";

const products: IProduct[] = PRODUCTS;
let categories_arr: string[] = [];
let categories: ISelection[] = [];
let category: ISelection = { title: "", value: "" };

for (let product of products) {
    if (!(categories_arr.includes(product.category))) {
        category.title = product.category;
        category.value = product.category;
        categories.push(category);
        categories_arr.push(category.title);
        category = { title: "", value: "" };
    }
}

categories.unshift({ title: "", value: "" });

export const FILTERINGTYPES: ISelection[] = categories;

