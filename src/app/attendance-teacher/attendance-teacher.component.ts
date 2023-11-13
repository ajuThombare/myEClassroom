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
  users: User[] = [];
  status:string='';
  isButtonDisabled: { [key: number]: boolean } = {};
  // attendanceCreated: boolean;
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  attendanceStatus: { [key: string]: boolean } = {}; 
  standardName!: string;
  selectedStandard: any;
  constructor(private route:Router,
    private userService:UserService,
    private loacalStorage:SessionStorageService)
  {
    // this.attendanceCreated = false;
    
  }
  
  ngOnInit(): void {
    this.selectedStandard =
    this.loacalStorage.retrieve('currentuser').standards[0].name;; 
   
        this.loadAttendanceStatus();
        this.allStudents();
      
}
public allStudents() {
  if (this.selectedStandard) {
    this.userService.getUsersByStandard(this.selectedStandard).subscribe(
      (data: User[]) => {
        console.log("data retrieved successfully", data);

        // Filter users based on the selected standard
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
loadAttendanceStatus() {
  // Load button status from local storage for each student and date
  this.users.forEach((user: User) => {
    const studentKey = `${user.id}_${this.getCurrentDate()}`;
    this.attendanceStatus[studentKey] = this.loacalStorage.retrieve(studentKey) === 'true';
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
  this.loacalStorage.store(studentKey, 'true');
}

getCurrentDate(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

}