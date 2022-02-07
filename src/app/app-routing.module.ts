import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './header/pagenotfound/pagenotfound.component';
import { PostsComponent } from './header/posts/posts.component';
import {  ProuductsComponent } from './prouducts/prouducts.component';
import { UsersComponent } from './header/users/users.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:"",redirectTo:"products" , pathMatch: 'full' },
  {path:"products",component:ProuductsComponent},
  {path:"posts",component:PostsComponent},
  {path:"users",component:UsersComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
