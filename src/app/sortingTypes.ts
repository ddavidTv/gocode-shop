import { ISelection } from "./ISelection";

export const SORTINGYPES: ISelection[] = [
    { title: " ", value: " " },
    //{title:"Featured", value:"featured" },
    //{title:"Best Selling", value:"bestSelling" },
    { title: "Alphabetically, A-Z", value: "alphabeticallyAtoZ" },
    { title: "Alphabetically, Z-A", value: "alphabeticallyZtoA" },
    { title: "Price, low to high", value: "PriceLowToHigh" },
    { title: "Price, high to low", value: "PriceHighToLow" },
    //{title:"Date, new to old", value:"DateNewToOld" },
    //{title:"Date, old to new", value:"DateOldToNew" }
];