import { Component,OnInit } from '@angular/core';
import { User } from '../tsfiles/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
user=new User(0,"","","",false,"","","","","","",""); 
userid:number=0;
// created object here user proprties added here thtat html data it will carry and send to db
constructor(private userService:UserService,private router:Router, private loacalStorage:LocalStorageService)
// injucted userService connecting wth db and routing to linking pages 
{
}
ngOnInit(): void { }

// login form will come here
public userLogin() {
  // In userService, we provided a path to loginuser to connect the database.
  this.userService.loginUser(this.user).subscribe((data: any) => {
    if(data === null ){
      alert("Wrong credentials.Or Register first");
      this.user=new User(0,"","","",false,"","","","","","",""); 
    }else{
      console.log("Login success: " + data);
      console.log("The Role is: " + data.role);
      alert("Login success!");
      this.loacalStorage.store('currentuser', data);
      if (data.role == 'Student') {
        this.userid=data.id;
        this.router.navigate(['/studenthome',this.userid]);
      } else {
        this.router.navigate(['/teacherhome']);
      }
    }
  },
  (error) => {
    console.error("An error occurred during login:", error);
    alert("An error occurred. Please try again later.");
  });
}
}