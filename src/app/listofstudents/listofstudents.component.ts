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
  itemsPerPage: number = 3;
  pageNumber: number = 1;
  pageCount: number = 10;
  constructor(private route:Router,private userService:UserService)
  {    
    this.getAllStudents = this.users.filter(user => user.role === 'student');
  }

  ngOnInit(): void {
    
    this.userService.getAllStudents().subscribe(
      (data:any)=>
      {
       console.log("data retrived succesfully");
         this.users=data;
      }
     );
}
public updateUser(userid:number)
{
  this.route.navigate(['/updateuser',userid]);
}
public deleteUser(userid:number)
{
  this.userService.deleteUser(userid).subscribe(
    (data:any)=>
    {
      alert("Deleted Successfully");
     this.getAllStudents=data;
      // this.getAllStudents = this.users.filter(user => user.role === 'student');
    }
  );
}
}
