import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Leave } from '../tsfiles/Leave';

@Component({
  selector: 'app-teacher-leave-requests',
  templateUrl: './teacher-leave-requests.component.html',
  styleUrls: ['./teacher-leave-requests.component.css']
})
export class TeacherLeaveRequestsComponent implements OnInit{
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;

constructor(private userService:UserService,
  private loacalStorage:SessionStorageService,
  // private dialog: MatDialog
  ){}
  leaves: Leave[] = []; 
  teacherid: number = 0;

  ngOnInit(): void {
    this.teacherid = this.loacalStorage.retrieve('currentuser').id;
    this.getMyLeaves();
  }

  getMyLeaves(){
    this.leaves=[];
    this.userService.getTeacherLeaveStatus(this.teacherid).subscribe(    
      (data:any)=>
      {
        this.leaves = data;
      }
      );
  }

}
