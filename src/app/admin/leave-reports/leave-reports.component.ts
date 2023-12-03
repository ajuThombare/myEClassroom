import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Leave } from 'src/app/tsfiles/Leave';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-leave-reports',
  templateUrl: './leave-reports.component.html',
  styleUrls: ['./leave-reports.component.css']
})
export class LeaveReportsComponent implements OnInit{
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;

constructor(private userService:UserService,
  private loacalStorage:SessionStorageService,
  // private dialog: MatDialog
  ){}
  leaves: Leave[] = []; 

  ngOnInit(): void {
    this.getMyLeaves();
  }

  getMyLeaves(){
    this.leaves=[];
    this.userService.getAllLeaves().subscribe(    
      (data:any)=>
      {
        this.leaves = data;
      }
      );
  }

}
