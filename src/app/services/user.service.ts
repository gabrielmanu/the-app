import { Injectable } from '@angular/core';
import { User } from '../types/user.interface';
import { Test } from '../types/test.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected _user: User;

  get user(): User {
    return this._user;
  }

  // set user(value: User) {
  //   this._user = value;
  // }

  constructor() {
    this._user = this.getUserFromLocalStorage();
    console.log('UserService . thuis_user ', this._user);
  }

  public createUser(userName: string): void {
    this._user = {
      Name: userName,
      Id: this.uuidv4(),
      Level: 0,
      Tests: []
    };

    this.saveUserToLocalStorage();
  }

  public saveUserTest(test: Test): void {
    this._user.Tests.push(test);
    this.saveUserToLocalStorage();
  }




  protected uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  protected saveUserToLocalStorage() {
    localStorage.setItem('GymAppUser', JSON.stringify(this._user));
  }

  protected getUserFromLocalStorage() {
    return JSON.parse(localStorage.getItem('GymAppUser'));
  }




}
