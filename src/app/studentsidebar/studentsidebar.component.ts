import { Component } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-studentsidebar',
  templateUrl: './studentsidebar.component.html',
  styleUrls: ['./studentsidebar.component.css']
})
export class StudentsidebarComponent {
  isClicked = false;
constructor(private loacalStorage:SessionStorageService){}
toggleClicked() {
  this.isClicked = !this.isClicked;
}
clearStorage(){
  this.loacalStorage.clear('currentuser');
}
}
