import { Component } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isClicked = false;
  constructor(private loacalStorage:SessionStorageService){}
  toggleClicked() {
    this.isClicked = !this.isClicked;
  }
  clearStorage(){
    this.loacalStorage.clear('currentuser');
  }
}
