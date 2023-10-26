import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { User } from '../tsfiles/user';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit{

  user=new User(0,"","","",false,"","","","","","",""); 

  ngOnInit(): void {}
  
  constructor(private userServe : UserService,private loacalStorage:SessionStorageService,private route:Router){
    this.user = this.loacalStorage.retrieve('currentuser');
  }

  updateUser(){
    this.userServe.updateUser(this.user,this.user.id).subscribe(
      (data:any)=>{
        alert("User Details Updated");
        this.loacalStorage.store('currentuser',this.user);
        this.route.navigateByUrl('/studenthome');
      },
      Error=>{ console.log("somethings wrong")}
    );
  }
  deleteUser(){

    this.userServe.deleteUser(this.user.id).subscribe(
      (data:any)=>{
        this.loacalStorage.clear('currentuser');
        // this.loacalStorage.retrieve('currentuser');  user object
        alert("User Account Deactivated.");
        this.route.navigateByUrl('/home');
      },
      Error=>{ console.log("somethings wrong");}
    );

  }
  url = "./assets/profile.jpg"; // Set a default image URL

  // getImageFromDB(id:number){
  //   this.userServe.getUserById(id).subscribe(
  //     (data:any)=>{
  //       this.url ='data:image/jpeg;base64,/9j/4AAQSk'+ data.img;
  //       console.log(data.img);
  //     }
  //   );
  // }
  onFileSelected(event: any) {
     if (event.target.files) {
       var reader = new FileReader();
       reader.readAsDataURL(event.target.files[0]);
       reader.onload = (event: any) => {
         this.url = event.target.result;
        //  this.user.trans = event.target.result;
       }
     }
  }

}

// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
// import { LocalStorageService } from 'ngx-webstorage';
// import { Router } from '@angular/router';
// import { User } from '../tsfiles/user';

// @Component({
//   selector: 'app-studenthome',
//   templateUrl: './studenthome.component.html',
//   styleUrls: ['./studenthome.component.css']
// })
// export class StudenthomeComponent implements OnInit{

//   user=new User(0,"","","",false,"","","","","","",""); 

//   ngOnInit(): void {}
  
//   constructor(private userServe : UserService,private loacalStorage:LocalStorageService,private route:Router){
//     this.user = this.loacalStorage.retrieve('currentuser');
//   }

//   updateUser(){
//     this.userServe.updateUser(this.user,this.user.id).subscribe(
//       (data:any)=>{
//         alert("User Details Updated");
//         this.loacalStorage.store('currentuser',this.user);
//         this.route.navigateByUrl('/studenthome');
//       },
//       Error=>{ console.log("somethings wrong")}
//     );
//   }
//   deleteUser(){

//     this.userServe.deleteUser(this.user.id).subscribe(
//       (data:any)=>{
//         this.loacalStorage.clear('currentuser');
//         // this.loacalStorage.retrieve('currentuser');  user object
//         alert("User Account Deactivated.");
//         this.route.navigateByUrl('/home');
//       },
//       Error=>{ console.log("somethings wrong");}
//     );

//   }
// }
