import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

  addUser(user: User) {
    let users = JSON.parse(localStorage.getItem('Users')) ?? [];
    users.push(user);
    localStorage.setItem('Users', JSON.stringify(users));
  }

}
