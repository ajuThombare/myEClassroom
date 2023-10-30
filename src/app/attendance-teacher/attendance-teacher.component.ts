import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../tsfiles/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-attendance-teacher',
  templateUrl: './attendance-teacher.component.html',
  styleUrls: ['./attendance-teacher.component.css']
})
export class AttendanceTeacherComponent implements OnInit {
  users:any;
  status:string='';
  isButtonDisabled: { [key: number]: boolean } = {};
  // attendanceCreated: boolean;
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  attendanceStatus: { [key: string]: boolean } = {}; 
   
  constructor(private route:Router,
    private userService:UserService,
    private localStorageService:SessionStorageService)
  {
    // this.attendanceCreated = false;
    
  }
  
  ngOnInit(): void {
    this.userService.getAllStudents().subscribe(
      (data:any)=>
      {
       console.log("data retrived succesfully");
       this.users=data;
       this.loadAttendanceStatus();
      });
}

loadAttendanceStatus() {
  // Load button status from local storage for each student and date
  this.users.forEach((user: User) => {
    const studentKey = `${user.id}_${this.getCurrentDate()}`;
    this.attendanceStatus[studentKey] = this.localStorageService.retrieve(studentKey) === 'true';
  });
}

public markAttendancePresent(user: User, index: number) {
  const studentKey = `${user.id}_${this.getCurrentDate()}`;
  if (this.attendanceStatus[studentKey]) {
    alert('Attendance already marked for this student today.');
  } else {
    this.status = 'present';
    this.userService.attendance(user, this.status, user.id).subscribe(() => {
      console.log(this.status + ' marked');
      this.attendanceStatus[studentKey] = true;
      this.saveButtonStateToLocalStorage(studentKey);
    });
  }
}

public markAttendanceAbsent(user: User, index: number) {
  const studentKey = `${user.id}_${this.getCurrentDate()}`;
  if (this.attendanceStatus[studentKey]) {
    alert('Attendance already marked for this student today.');
  } else {
    this.status = 'absent';
    this.userService.attendance(user, this.status, user.id).subscribe(() => {
      console.log(this.status + ' marked');
      this.attendanceStatus[studentKey] = true;
      this.saveButtonStateToLocalStorage(studentKey);
    });
  }
}

saveButtonStateToLocalStorage(studentKey: string) {
  // Save button state for the student and date in local storage
  this.localStorageService.store(studentKey, 'true');
}

getCurrentDate(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

}