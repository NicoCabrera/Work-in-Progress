import { Component, OnInit } from '@angular/core';
import { User } from "../entities/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  user:User;
  constructor() {
    this.user = {
      name: '',
      password:''
    }
  }

  ngOnInit() {
  }

  login()
  {
    
  }

}
