import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Admin } from 'src/app/tsfiles/admin';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  admin: any = {};
  adminLogin: any = {};
  adminid:number=0;
constructor(private userService: UserService,
  private router:Router,
  private sessionStorage:SessionStorageService) {}

loginAdminAccount() {
  this.userService.loginAdmin(this.admin).subscribe(
    (data:any) => {
  
  if(data === null ){
    alert("Wrong Admin credentials.");
    this.admin=new Admin(0,"",""); 
  }else{
    console.log("Login success");
    alert("Login success!");
    this.sessionStorage.store('currentuser', data);
    this.router.navigate(['/adminhome']);
  }
},
(error) => {
    console.error("An error occurred during login:", error);
    alert("An error occurred. Please try again later.");  
});
//




}
}