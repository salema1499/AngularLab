import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../emplyee.service';
@Component({
  selector: 'app-empdetlise',
  templateUrl: './empdetlise.component.html',
  styleUrls: ['./empdetlise.component.scss']
})
export class EmpdetliseComponent implements OnInit {

  constructor(private emplyeeservice :EmplyeeService) { }
 emplylist:any;
  ngOnInit(): void {
    this.emplylist=this.emplyeeservice.GetAllProducts()
    this.emplylist=this.emplyeeservice.GetProductsID()
  }

}
