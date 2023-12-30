import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { LoginService } from 'src/app/security-services/login.service';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent {
  isClicked = false;
  constructor(private loacalStorage:SessionStorageService, private route:Router,private login: LoginService){}
  toggleClicked() {
    this.isClicked = !this.isClicked;
  }
  logout(){
    this.login.logout();
  }
  navigatToHome(){
    // console.log("naved");
    this.route.navigateByUrl("/login");
  }
}
