import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-studentsidebar',
  templateUrl: './studentsidebar.component.html',
  styleUrls: ['./studentsidebar.component.css']
})
export class StudentsidebarComponent {
  isClicked = false;
constructor(private loacalStorage:LocalStorageService){}
toggleClicked() {
  this.isClicked = !this.isClicked;
}
clearStorage(){
  this.loacalStorage.clear('currentuser');
}
}
