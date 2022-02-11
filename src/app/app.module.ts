import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProuductsComponent } from './prouducts/prouducts.component';
import { FormsModule } from '@angular/forms';
import { EmpdetliseComponent } from './service/empdetlise/empdetlise.component';
import {HttpClientModule}from '@angular/common/http'
import { PostsComponent } from './header/posts/posts.component';
import { UsersComponent } from './header/users/users.component';
import { ProuductswithoutdiscountComponent } from './prouductswithoutdiscount/prouductswithoutdiscount.component';
import { ProuductswithdiscountComponent } from './prouductswithdiscount/prouductswithdiscount.component';
import { Router } from '@angular/router';
import { LOGINComponent } from './header/login/login.component';
import { REGISTERComponent } from './header/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProuductsComponent,
    EmpdetliseComponent,
    PostsComponent,
    UsersComponent,
    ProuductswithoutdiscountComponent,
    ProuductswithdiscountComponent,
    LOGINComponent,
    REGISTERComponent,
    
  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
