import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit
 {users:any;
  constructor(private route:Router,private userService:UserService)
  {

  }
  ngOnInit(): void 
  {
    this.userService.getAllStudents().subscribe(
     (data:any)=>
     {
      console.log("data retrived succesfully");
       this.users=data;
     }
    );
    
  }
public back()
{
  this.route.navigate([ 'students' ]);
}


}