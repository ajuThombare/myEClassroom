import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-studentattendance',
  templateUrl: './studentattendance.component.html',
  styleUrls: ['./studentattendance.component.css']
})
export class StudentattendanceComponent implements OnInit {
  attendanceRecords: any[] = []; // Modify the type based on your data structure
  user: any;
  
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;

  status!: string | null;

  constructor(private route: ActivatedRoute, private userService: UserService, private localStorageService: SessionStorageService) {}

  ngOnInit() {
    this.user = this.localStorageService.retrieve('currentuser');

    this.userService.getAttendencebyRollno(this.user.id).subscribe((data: any) => {
      // Group attendance records by date
      this.attendanceRecords = this.groupByDate(data);
    });

    this.status = this.route.snapshot.paramMap.get('status');
  }

  // Helper function to group attendance records by date
  groupByDate(records: any[]): any[] {
    const groupedRecords: any[] = [];
    const dateMap = new Map();

    for (const record of records) {
      const date = record.date;
      const formattedDate = this.formatDate(date);

      if (!dateMap.has(formattedDate)) {
        dateMap.set(formattedDate, [record]);
      } else {
        dateMap.get(formattedDate).push(record);
      }
    }

    dateMap.forEach((value, key) => {
      groupedRecords.push({ date: key, attendanceList: value });
    });

    return groupedRecords;
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
  parseTime(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleTimeString(); // Get time in HH:MM:SS format
  }
}
