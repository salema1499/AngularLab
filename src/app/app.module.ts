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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProuductsComponent,
    EmpdetliseComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
