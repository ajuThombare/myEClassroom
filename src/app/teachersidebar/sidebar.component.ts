import { Component } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { LoginService } from '../security-services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isClicked = false;
  constructor(private loacalStorage:SessionStorageService,private login: LoginService){}
  toggleClicked() {
    this.isClicked = !this.isClicked;
  }
  clearStorage(){
    this.login.logout();
  }
}
