import { Injectable } from '@angular/core';

import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  constructor() { }

  getUser(userId: string): User {
    console.log('user service', JSON.stringify(this.users));
    return this.users.length > 0 ? this.users.filter(user => user.companyEmail.indexOf(userId) > -1)[0] : null;
    // return this.users.length > 0 ? this.users.filter(user => userId == user.companyEmail)[0] : null;
  }

  getNewUser(): User {
    return new User();
  }

  addUser(user: User): void {
    console.log('User Added',user);
    this.users.push(user);
  }

  authenticateUser(username: string, passwd: string): Boolean {
    //Username of the Candidate is nothing but email 
    let user:User = this.getUser(username);
    return user && user.password == passwd;
  }

}
