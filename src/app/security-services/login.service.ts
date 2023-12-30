import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../commonurl';
import { Subject } from 'rxjs';
import { User } from '../tsfiles/user';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient,private loacalStorage:SessionStorageService,) {}

  //current user: which is loggedin
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token

  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generate-token`, loginData);//connect to the backend 
  }

  //login user: set token in localStorage
  public loginUser(token: string) {
    this.loacalStorage.store('token', token);
    return true;
  }

  //isLogin: user is logged in or not
  public isLoggedIn() {
    
    let tokenStr = this.loacalStorage.retrieve('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  // logout : remove token from local storage
  public logout() {
    // loacalStorage.clear();
    this.loacalStorage.clear('token');
    this.loacalStorage.clear('currentuser');
    return true;
  }

  //get token
  public getToken() {
    return this.loacalStorage.retrieve('token');
  }

  //set userDetail
  public setUser(user:User) {
    console.log("++++++++++++++++++++++"+user);
    this.loacalStorage.store('currentuser', user);
    // this.loacalStorage.store('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = this.loacalStorage.retrieve('currentuser');
    console.log("inside the loginservice--------------"+userStr);
    if (userStr != null) {
      return userStr;
      // return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get user role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}
