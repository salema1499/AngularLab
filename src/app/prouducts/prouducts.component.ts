import { Component, OnInit } from '@angular/core';
import { DiscountOffers, ICategory, IProduct } from '../SharedClassesAndTypes/interfaceIProduct';
@Component({
  selector: 'app-prouducts',
  templateUrl: './prouducts.component.html',
  styleUrls: ['./prouducts.component.scss']
})
export class ProuductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Discount: DiscountOffers = DiscountOffers.after;
  Storname: string = ":)park";
  Storlogo: string = "ppp"
  Prodctlist: IProduct[] = [{ ID: 1, Name: "PARK 1", Quantity: 150, Price: 1000, Img: "good" }
    ,
  { ID: 2, Name: "PARK 2", Quantity: 200, Price: 1500, Img: "V-good" },

  ];
  CategoryList: ICategory[] = [{ ID: 555, Name: "park 1" }];
  ClientName: string = "";
  IsPurshased: boolean = false;

  funbutton() {
    // document.write("Thanks For Purchaing From Our Store " + data)
    this.IsPurshased = true;


  }

}
