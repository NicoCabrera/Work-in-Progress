import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { UserService } from "./user.service";

const routes:Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registered-user",
    component:RegisteredUserComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteredUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
