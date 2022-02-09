import { Component, OnInit, Output } from '@angular/core';
import { EmplyeeService } from '../service/emplyee.service';
import { DiscountOffers, ICategory, IProduct } from '../SharedClassesAndTypes/interfaceIProduct'; 
import { EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-prouducts',
  templateUrl: './prouducts.component.html',
  styleUrls: ['./prouducts.component.scss']
})
export class ProuductsComponent implements OnInit {
  Discount: DiscountOffers = DiscountOffers.after;
  Storname: string = ":)park";
  Storlogo: string = "ppp"
  Prodctlist: IProduct[] =[];
  CategoryList: ICategory[] = [{ ID: 555, Name: "park 1" }];
  ClientName: string = "";
  IsPurshased: boolean = false;

  constructor(
    private empService : EmplyeeService ,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.Prodctlist = this.empService.GetAllProducts();
  }


  funbutton() {
    // document.write("Thanks For Purchaing From Our Store " + data)
    this.IsPurshased = true;

  }
  @Output() childEvent=  new EventEmitter();
  
  renderValues(){
  this.childEvent.emit( this.empService.GetAllProducts())
  }
  
   //   renderValue(){
   // console.log("kjhvajkh")
  //  //   }
  //  withoutdiscount(){
  //    this.router.navigate(["/withoutdiscount"]),
  //     }
  // withdiscount(){
  // this.router.navigate(["/withdiscount"]),
  //    }
  

  withdiscount(){
    this.router.navigate(["withoutdiscount"])
  }

  withoutdiscount(){
    this.router.navigate(["withoutdiscount"])
  }
}


