import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-studentattendance',
  templateUrl: './studentattendance.component.html',
  styleUrls: ['./studentattendance.component.css']
})
export class StudentattendanceComponent implements OnInit {
  users: any[] = []; 
  user:any;
  itemsPerPage: number = 10;
  pageNumber: number = 1;
  pageCount: number = 10;
  status!:string | null;

  constructor(private route: ActivatedRoute, private userService: UserService,private localStorageService:LocalStorageService) {}

  ngOnInit() {
  this.user=this.localStorageService.retrieve('currentuser');

    this.userService.getAttendencebyRollno(this.user.id).subscribe(

      (data:any)=>
      {
      //  console.log("data retrived succesfully");
       this.users=data;
      });
      this.status = this.route.snapshot.paramMap.get('status');
  }
  parseDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const year = date.getFullYear();
    const time = date.toLocaleTimeString(); // Get time in HH:MM:SS format
    return { day, month, year, time };
  }
  formatDate(dateString: string): string {
    const dateParts = dateString.split("T")[0].split("-");
    if (dateParts.length === 3) {
        const year = dateParts[0];
        const month = dateParts[1];
        const day = dateParts[2];
        return `${day}-${month}-${year}`;
    }
    return dateString; // Return the original string if it doesn't match the expected format
}
}