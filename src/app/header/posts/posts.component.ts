import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from 'src/app/service/emplyee.service';
import { Iemployee } from 'src/app/service/Iemployee';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(
    private empSer : EmplyeeService
  ) { }
empdata:Iemployee[]= [];
maserro:any;
  ngOnInit(): void {
    this.empSer.getposts().subscribe(
      (data:any)=>{
        console.log("Data : ", data);
        
        this.empdata=data
      },err=>{
        this.maserro=err;
      }
      
    )
  }

}
