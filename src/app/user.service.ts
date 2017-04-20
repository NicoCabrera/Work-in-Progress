import { Injectable } from '@angular/core';
import { User } from "./entities/user";
import { USERS } from "./user.mock";

@Injectable()
export class UserService {

  constructor() { }

  getUsers():User[]{
    return USERS;
  }
}
