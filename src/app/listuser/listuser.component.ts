import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SessionStorageService } from 'ngx-webstorage';
 
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: any;
  selectedStandard: string | undefined;
 
  constructor(private route: Router, private userService: UserService ,    private loacalStorage:SessionStorageService) {}
 
  ngOnInit(): void {    
    this.selectedStandard =
    this.loacalStorage.retrieve('currentuser').standards[0].name;; // Replace with your logic to get the teacher's standard
    this.getUsers();
  }
 
  getUsers(): void {
    if (this.selectedStandard) {
      this.userService.getUsersByStandard(this.selectedStandard).subscribe(
        (data: any) => {
          console.log("data retrieved successfully");
          this.users = data;
        }
      );
    } else {
      console.error("Selected standard is undefined.");
    }
  }
 
  public back() {
    this.route.navigate(['students']);
  }
}
 