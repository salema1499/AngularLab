import { Injectable } from '@angular/core';
//import { IProduct }from "../../app/SharedClassesAndTypes/interfaceIProduct";
//import { DiscountOffers, ICategory, IProduct } from '../SharedClassesAndTypes/interfaceIProduct';
import { DiscountOffers, ICategory, IProduct } from "../SharedClassesAndTypes/interfaceIProduct"
@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {

 private Prodctlist: IProduct[] = [{ ID: 1, Name: "PARK 1", Quantity: 150, Price: 1000, Img: "good" }
  ,
{ ID: 2, Name: "PARK 2", Quantity: 200, Price: 1500, Img: "V-good" },

];

  constructor() { }
  GetAllProducts(){
    // return [{"name":"salwm","age":23}]
    return this.Prodctlist

//   }
//   addProd(prod:IProduct){
// this.Prodctlist.push(prod);
//   }
}

GetProductsID(){
  // return [{"name":"salwm","age":23}]
  return this.Prodctlist
}
}
