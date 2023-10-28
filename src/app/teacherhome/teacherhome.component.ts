import { Component, OnInit } from '@angular/core';
import { User } from '../tsfiles/user';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
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
    constructor(
      private userServe: UserService,
      private loacalStorage: SessionStorageService,
      private route: Router,
      private dialog: MatDialog  ){
    this.user = this.loacalStorage.retrieve('currentuser');
  }

  updateUser(){
    this.userServe.updateUser(this.user,this.user.id).subscribe(
      (data:any)=>{
        alert("User Details Updated");
        this.loacalStorage.store('currentuser',this.user);
        this.route.navigateByUrl('/teacherhome');
      },error=>{
        if(error.status == 409){
          alert(error.error);
        }else{
          alert("Something went wrong.")
        }
      }
    );
  }
 
  deleteUser() {
    const confirmation = window.confirm("Are you sure you want to deactivate your account?");
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
   onFileSelected(event: any) {
    const file: File = event?.target?.files?.[0];
  
     if (file) {
       // Construct a FormData object to send the file
       const formData = new FormData();
       formData.append('profilePicture', file);
  
       // Send the request to upload the file
  //      this.userServe.uploadProfilePicture(formData).subscribe(
  //       (data: any) => {
  // alert("Profile Picture Uploaded Successfully");
  //       },
  //       (error: any) => {
  //        console.error("Error uploading profile picture", error);
  //         alert("Failed to upload profile picture. Please check the file type and size.");
  //     }
  //    );
    }
  
   }
  // url = "./assets/profile.jpg"; // Set a default image URL

  // onFileSelected(event: any) {
  //   if (event.target.files) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event: any) => {
  //       this.url = event.target.result;
  //     }
  //   }
  // }
  

  }
