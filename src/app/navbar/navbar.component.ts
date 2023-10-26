import { Component,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn: boolean = false; 
  user: any = null; 

  constructor(private router: Router, private loacalStorage:SessionStorageService) {}

  public logout() {
    if (this.isLoggedIn && this.user !== null) {
      // this.loacalStorage.clear('username');
      // this.loacalStorage.clear('id');
      // this.loacalStorage.clear('role');
      this.isLoggedIn = false;
      this.user = null;
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/register']);
    }
  }

  clearStorage(){
    this.loacalStorage.clear('currentuser');
    this.loacalStorage.clear('currentquiz');
  }
}