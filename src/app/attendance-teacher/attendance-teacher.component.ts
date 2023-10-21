import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../tsfiles/user';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-attendance-teacher',
  templateUrl: './attendance-teacher.component.html',
  styleUrls: ['./attendance-teacher.component.css']
})
export class AttendanceTeacherComponent implements OnInit {
  users:any;
  status:string='';
  isButtonDisabled: boolean[] = [];
  attendanceCreated: boolean;
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
   
  constructor(private route:Router,private userService:UserService,private localStorageService:LocalStorageService)
  {
    this.attendanceCreated = false;
  }
  
  ngOnInit(): void {
    this.userService.getAllStudents().subscribe(
      (data:any)=>
      {
       console.log("data retrived succesfully");
       this.users=data;
      });
}

public markAttendancePresent(user:User ,index:number)
{ 
  this.userService.checkAttendence(user.id,new Date()).subscribe(
    (data)=>{
      if(data!=null)
      alert("Attendance already mark");
    else{
      this.status='present';
      this.userService.attendance(this.users,this.status,user.id).subscribe(data=>{
        alert("updated succesffully");
        console.log(this.status+"marked");
        this.isButtonDisabled[index] = true;
      });
    }
    });
}

public markAttendanceAbsent(user:User,index: number)
{ 
  this.status='absent';
  this.userService.attendance(user,this.status,user.id).subscribe(()=>{
    alert("updated succesffully");
    console.log(this.status+"marked");
    this.isButtonDisabled[index] = true;
  });
}
}
