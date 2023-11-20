
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../tsfiles/user';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-listofstudents',
  templateUrl: './listofstudents.component.html',
  styleUrls: ['./listofstudents.component.css']
})
export class ListofstudentsComponent implements OnInit {
  users: User[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  selectedStandard: string | undefined;

  constructor(private route: Router, private userService: UserService ,
    private loacalStorage:SessionStorageService) {
    
    }

  ngOnInit(): void {
    // Set the default standard for the teacher here, or fetch it from some source.
    // For example, if you are getting the teacher's standard from a service, you can call that service here.
    this.selectedStandard =
    this.loacalStorage.retrieve('currentuser').standards[0].name;; // Replace with your logic to get the teacher's standard
    this.allStudents();
  }

  public updateUser(userid: number) {
    this.route.navigate(['/updateuser', userid]);
  }

  public deleteUser(userid: number) {
    const confirmation = window.confirm("Are you sure you want to Remove this Student from Class?");
    if (confirmation) {
      this.userService.deleteUser(userid).subscribe(
        (data: any) => {
          alert("Deleted Successfully");
          this.allStudents();
        }
      );
    }
  }

 public allStudents() {
  if (this.selectedStandard) {
    this.userService.getUsersByStandard(this.selectedStandard).subscribe(
      (data: User[]) => {
        // console.log("data retrieved successfully", data);
        // Filter users based on the selected standard
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}
}