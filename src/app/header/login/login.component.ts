import { HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from 'src/app/service/emplyee.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LOGINComponent implements OnInit {

  constructor(private empService : EmplyeeService) { }
userModel:User=new User("salema","salemakhaled@mm.com",5522)

submitted = false;

onSubmit() { this.submitted = true; }
  ngOnInit(): void {
  }
 
}
