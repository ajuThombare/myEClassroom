import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/tsfiles/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  // user=new User(0,"",'','',false,'','','','','','','');
  // pendingUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.fetchPendingUsers();
  }

  // fetchPendingUsers() {
  //   this.userService.getPendingUsers().subscribe((users) => {
  //     console.log(users);
  //     this.pendingUsers = users;
  //   });
  // }

  // approveUser(user: User) {
  //   user.enabled = true; // Set 'enabled' field to true
  //   this.userService.approveUser(user).subscribe(() => {
  //     // Handle success
  //     this.fetchPendingUsers(); // Refresh the list
  //   });
  // }
}
