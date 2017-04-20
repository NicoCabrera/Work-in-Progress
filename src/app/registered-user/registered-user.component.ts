import { Component, OnInit } from '@angular/core';
import { User } from "../entities/user";
import { UserService } from "../user.service";
@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {
  users:User[];
  constructor(private userService:UserService) {

   }

  ngOnInit() {
    this.users = this.getUsers();
 }

   getUsers():User[]{   
     return this.userService.getUsers();
   }
}
