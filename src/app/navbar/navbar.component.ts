import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { LoginService } from '../security-services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn: boolean = false; 
  user: any = null; 
  currentRole: string;
  
  constructor(private router: Router, private loacalStorage:SessionStorageService,private login:LoginService) {
    this.currentRole = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          if(loacalStorage.retrieve('currentuser')!=null){
            // console.log();
            if(loacalStorage.retrieve('currentuser').userName != undefined){
              this.currentRole ="Welcome Admin";
            }else{
              this.currentRole ="Welcome " 
              + loacalStorage.retrieve('currentuser').firstName 
              +" "+loacalStorage.retrieve('currentuser').lastName;
            }
          }else{
            this.currentRole ="";
          }
      }
  });
  }

  public logout() {
    if (this.isLoggedIn && this.user !== null) {
      this.isLoggedIn = false;
      this.user = null;
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/register']);
    }
  }

  checkAndNaigate(){
  // console.log("is loggeddd: "+this.login.isLoggedIn());
    if(this.login.isLoggedIn()){
      const confirmation = window.confirm("Are you sure you want to Logout and Go to Home.");
      if (confirmation) {
        this.login.logout();
        this.router.navigate(['/welcome']);
      }
    }
    else{
      this.router.navigate(['/welcome']);
    }
  }
}