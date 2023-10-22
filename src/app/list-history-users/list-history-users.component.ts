import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { UserHistory } from '../tsfiles/UserHistory';



 @Component({
   selector: 'app-list-history-users',
   templateUrl: './list-history-users.component.html',
   styleUrls: ['./list-history-users.component.css']
 })
 export class ListHistoryUsersComponent implements OnInit {
  userHistories: UserHistory[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
   
   constructor(private route: ActivatedRoute,private userService:UserService) {}

   ngOnInit(): void {
    this.loadAllUsers();
  }

  public loadAllUsers() {
    this.userService.getAllHistoryUsers().subscribe(
      (data:any ) => {
        this.userHistories = data;
      }
    );
  }
 }