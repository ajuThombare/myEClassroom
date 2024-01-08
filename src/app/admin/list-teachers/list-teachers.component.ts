import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { User } from 'src/app/tsfiles/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css']
})
export class ListTeachersComponent implements OnInit {
  users: User[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  // selectedStandard: string | undefined;

  constructor(private route: Router, private userService: UserService ,
    private loacalStorage:SessionStorageService) {
    }

  ngOnInit(): void {
    this.allUsers();
  }

  public updateUser(userid: number) {
    this.route.navigate(['/updateteacher', userid]);
  }

  public deleteUser(userid: number) {
    const confirmation = window.confirm("Are you sure you want to Remove this Teacher from System?");
    if (confirmation) {
      this.userService.deleteUser(userid).subscribe(
        (data: any) => {
          alert("Deleted Successfully");
          this.allUsers();
        }
      );
    }
  }
 public allUsers() {
    this.userService.getActiveUsers().subscribe(
      (data: any) => {
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