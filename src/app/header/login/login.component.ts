import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from 'src/app/service/emplyee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LOGINComponent implements OnInit {

  constructor(private empService : EmplyeeService) { }

  ngOnInit(): void {
  }

}
