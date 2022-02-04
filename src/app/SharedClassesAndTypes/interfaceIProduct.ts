export interface IProduct {
  ID:number;
  Name:string;
  Quantity:number;
  Price:number;
  Img:string
}




export interface ICategory {
  ID:number;
  Name:string
}
export enum DiscountOffers {
  NODiscount="",
  befor="10%",
  after="15%"
}
