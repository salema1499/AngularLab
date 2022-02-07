import { Injectable } from '@angular/core';
//import { IProduct }from "../../app/SharedClassesAndTypes/interfaceIProduct";
//import { DiscountOffers, ICategory, IProduct } from '../SharedClassesAndTypes/interfaceIProduct';
import { DiscountOffers, ICategory, IProduct } from "../SharedClassesAndTypes/interfaceIProduct"
import {HttpClient, HttpClientModule}from '@angular/common/http';
import {Iemployee,Iemployee2} from './Iemployee'

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {

 private Prodctlist: IProduct[] = [{ ID: 1, Name: "PARK 1", Quantity: 150, Price: 1000, Img: "good" }
  ,
{ ID: 2, Name: "PARK 2", Quantity: 200, Price: 1500, Img: "V-good" },

];
url:string="https://jsonplaceholder.typicode.com/posts";
url2:string="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }
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
getposts(){
  return this.http.get<Iemployee[]>(this.url)
}
getusers(){
  return this.http.get<Iemployee2[]>(this.url)
}


}
