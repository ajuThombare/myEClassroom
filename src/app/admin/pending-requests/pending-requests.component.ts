import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/tsfiles/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {
  user=new User(0,"",'','',false,'','','','','','','');
  pendingUsers: User[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.fetchPendingUsers();
  }

  fetchPendingUsers() {
    this.userService.getPendingUsers().subscribe((users) => {
      // console.log(users);
      this.pendingUsers = users;
    });
  }
  public acceptUserRequest(userid:number){
    const confirmation = window.confirm("Are you sure you want to Approve this Request.");
      if (confirmation) {
        // console.log("Deleted "+ userid);
          this.userService.activateUser(userid).subscribe(
            (data:any)=>
            {
              this.fetchPendingUsers();
              alert("Account Activated Successfully");
            },
            error=>
            {
              alert("Something Went Wrong.");
            }
          );
          }
        }

public declineUserRequest(userid:number){
const confirmation = window.confirm("Are you sure you want to Remove this Request.");
  if (confirmation) {
    // console.log("Deleted "+ userid);
      this.userService.deleteUser(userid).subscribe(
        (data:any)=>
        {
          this.fetchPendingUsers();
          alert("Deleted Successfully");
        },
        error=>
        {
          alert("Something Went Wrong.");
        }
      );
      }
    }

  approveUser(user: User) {
    user.enabled = true; // Set 'enabled' field to true
    this.userService.approveUser(user).subscribe(() => {
      // Handle success
      this.fetchPendingUsers(); // Refresh the list
    });
  }
}
