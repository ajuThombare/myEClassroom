import { Component, OnInit } from '@angular/core';
import { Leave } from 'src/app/tsfiles/Leave';
import { User } from 'src/app/tsfiles/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit {
  // user=new User(0,"",'','',false,'','','','','','','');
  pendingLeaveRequests: Leave[] = []; // Update the type based on your data structure
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  pendingUsers: any;


  constructor(private userService:UserService) {}

  ngOnInit() {
    this.getLeaveRequets();
  }

  getLeaveRequets() {
    this.userService.getLeaveRequest().subscribe((leaveRequests: any) => {
      this.pendingLeaveRequests = leaveRequests;
    });
  }

  acceptLeaveRequest(leaveRequestId: number) {
    const confirmation = window.confirm("Are you sure you want to Approve this Request.");
    if (confirmation) {
      this.userService.approveRequest(leaveRequestId).subscribe(
        (data: any) => {
          this.getLeaveRequets();
          alert("Leave Approved Successfully");
        },
        (error: any) => {
          alert("Something Went Wrong.");
        }
      );
    }
  }

  declineLeaveRequest(leaveRequestId: number) {
    const confirmation = window.confirm("Are you sure you want to Decline this Request.");
    if (confirmation) {
      this.userService.declineRequest(leaveRequestId).subscribe(
        (data: any) => {
          this.getLeaveRequets();
          alert("Request Declined Successfully");
        },
        (error: any) => {
          alert("Something Went Wrong.");
        }
      );
    }
  }
  removeLeaveRequest(leaveRequestId: number) {
    const confirmation = window.confirm("Are you sure you want to Remove this Request.");
    if (confirmation) {
      this.userService.removeRequest(leaveRequestId).subscribe(
        (data: any) => {
          this.getLeaveRequets();
          alert("Removed Successfully");
        },
        (error: any) => {
          alert("Something Went Wrong.");
        }
      );
    }
  }
}