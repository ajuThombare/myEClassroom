import { Component, OnInit } from '@angular/core';
import { User } from '../tsfiles/user';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit{
  user=new User(0,"","","",false,"","","","","","",""); 

  ngOnInit(): void {}
  
  constructor(private userServe : UserService,
    private loacalStorage:LocalStorageService,
    private route:Router,private dialog: MatDialog
    ){
    this.user = this.loacalStorage.retrieve('currentuser');
  }

  updateUser(){
    this.userServe.updateUser(this.user,this.user.id).subscribe(
      (data:any)=>{
        alert("User Details Updated");
        this.loacalStorage.store('currentuser',this.user);
        this.route.navigateByUrl('/teacherhome');
      },
      Error=>{ console.log("somethings wrong")}
    );
  }
  deleteUser() {
    const confirmation = window.confirm("Are you sure you want to delete your account?");
    if (confirmation) {
      this.userServe.deleteUser(this.user.id).subscribe(
        (data: any) => {
          this.loacalStorage.clear('currentuser');
          alert("User Account Deactivated.");
          this.route.navigateByUrl('/home');
        },
        (error: any) => {
          console.log("Something's wrong");
        }
      );
    }
  }
  // deleteUser(){

  //   this.userServe.deleteUser(this.user.id).subscribe(
  //     (data:any)=>{
  //       this.loacalStorage.clear('currentuser');
  //       alert("User Account Deactivated.");
  //       this.route.navigateByUrl('/home');
  //     },
  //     Error=>{ console.log("somethings wrong")}
  //   );

  // }
}
