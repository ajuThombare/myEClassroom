import { Component } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isClicked = false;
  constructor(private loacalStorage:LocalStorageService){}
  toggleClicked() {
    this.isClicked = !this.isClicked;
  }
  clearStorage(){
    this.loacalStorage.clear('currentuser');
  }
}
