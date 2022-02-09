import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from 'src/app/service/emplyee.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class REGISTERComponent implements OnInit {

  constructor(private empService : EmplyeeService
    )  { }

  ngOnInit(): void {
  }

  
  acounts=["facebook","twitter","google"]
 

}
