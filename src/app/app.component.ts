
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ProuductsComponent } from './prouducts/prouducts.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'mylaby';
  massge:any;
 
  // @ViewChild (ProuductsComponent) prouducts !: ProuductsComponent;

  ngOnInit(): void {}
      
  // }
  // ngAfterViewInit(){
  //   return this.prouducts.renderValue()
  // }
}