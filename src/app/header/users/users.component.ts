import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from 'src/app/service/emplyee.service';
import { Iemployee2 } from 'src/app/service/Iemployee';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private empuser : EmplyeeService
  ) { }
  empdatauser:Iemployee2[]= [];
  maserrouser:any;
  ngOnInit(): void {
    
      this.empuser.getusers().subscribe(
        (datauser:any)=>{
          console.log("Data : ", datauser);
          
          this.empdatauser=datauser
        },erruser=>{
          this.maserrouser=erruser;
        }
        
      )
    
  


  }

}
