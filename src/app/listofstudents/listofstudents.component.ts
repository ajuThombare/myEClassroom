import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../tsfiles/user';

@Component({
  selector: 'app-listofstudents',
  templateUrl: './listofstudents.component.html',
  styleUrls: ['./listofstudents.component.css']
})
export class ListofstudentsComponent implements OnInit{
  users: any[] = [];
  getAllStudents: any[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  constructor(private route:Router,private userService:UserService)
  {    
    this.getAllStudents = this.users.filter(user => user.role === 'student');
  }

  ngOnInit(): void {
    this.allStudents();
  }
public updateUser(userid:number)
{
  this.route.navigate(['/updateuser',userid]);
}
public deleteUser(userid:number){
const confirmation = window.confirm("Are you sure you want to Remove this Student from Class?");
  if (confirmation) {
      this.userService.deleteUser(userid).subscribe(
        (data:any)=>
        {
          alert("Deleted Successfully");
          this.getAllStudents=data;
          this.allStudents();
          // this.getAllStudents = this.users.filter(user => user.role === 'student');
        }
      );
    }
}

public allStudents(){
  this.userService.getAllStudents().subscribe(
    (data:any)=>
    {
     console.log("data retrived succesfully");
       this.users=data;
    }
   );
  }
}
