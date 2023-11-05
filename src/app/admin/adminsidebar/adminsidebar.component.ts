import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent {
  isClicked = false;
  constructor(private loacalStorage:SessionStorageService, private route:Router){}
  toggleClicked() {
    this.isClicked = !this.isClicked;
  }
  clearStorage(){
    this.loacalStorage.clear('currentuser');
  }
  navigatToHome(){
    console.log("naved");
this.route.navigateByUrl("/adminhome");
  }
}
