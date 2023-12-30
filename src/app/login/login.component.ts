import { Component,ErrorHandler,OnInit } from '@angular/core';
import { User } from '../tsfiles/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { LoginService } from '../security-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,ErrorHandler { 
user=new User(0,"","","",false,"","","","","","",""); 
userid:number=0;
// created object here user proprties added here thtat html data it will carry and send to db
constructor(private userService:UserService,private router:Router,
    private loacalStorage:SessionStorageService,
    private loginService: LoginService){
}
  handleError(error: any): void {

  }
  ngOnInit(): void { 
  }

// login form will come here
public userLogin() {
  // In userService, we provided a path to loginuser to connect the database.
  this.loginService.generateToken(this.user).subscribe(
  (data: any) => {

      this.loginService.loginUser(data.token);

      this.loginService.getCurrentUser().subscribe(
        (user: any) => {
        this.loginService.setUser(user);
        // console.log(user);
        // console.log(this.loginService.getUserRole());

        if (this.loginService.getUserRole() == 'Admin') {
          this.loginService.loginStatusSubject.next(true);
          this.router.navigate(['/adminhome']);
          console.log("Admin is logged in.")
        } 
        else if (this.loginService.getUserRole() == 'Teacher') {
          this.router.navigate(['/teacherhome']);
          this.loginService.loginStatusSubject.next(true);
          console.log("Teacher is logged in.")

        }
        else if (this.loginService.getUserRole() == 'Student') {
          this.userid=user.id;
          this.router.navigate(['/studenthome',this.userid]);
          this.loginService.loginStatusSubject.next(true);
          console.log("Student is logged in.")

        }
      });
  },
  (error) => {
    alert(error.error.message)
  });
}

public validateFields(){
  if(this.user.username == null){
console.log("Is empty.");
  }
}
}