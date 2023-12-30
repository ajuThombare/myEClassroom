import { Component } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { LoginService } from '../security-services/login.service';

@Component({
  selector: 'app-studentsidebar',
  templateUrl: './studentsidebar.component.html',
  styleUrls: ['./studentsidebar.component.css']
})
export class StudentsidebarComponent {
  isClicked = false;
constructor(private loacalStorage:SessionStorageService,private login: LoginService){}
toggleClicked() {
  this.isClicked = !this.isClicked;
}
clearStorage(){
  this.login.logout();
}
}
