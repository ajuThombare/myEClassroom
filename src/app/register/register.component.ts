import { Component,OnInit } from '@angular/core';
import { User } from '../tsfiles/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user=new User(0,"","","",false,"","","","","","","");
countries=[
  'India',
  'Pakistan',
  'China',
  'Nepal',
  'Bhutan',
  'Bangladesh',
  'Myanmar (Burma)',
  'Sri Lanka',
  'Maldives',
  'Afghanistan',
  'Tajikistan',
  'Kyrgyzstan',
];
state1  = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Lakshadweep',
  'Delhi (National Capital Territory of Delhi)',
  'Puducherry'
];
  ngOnInit(): void {
    
  }
  constructor(private userService:UserService,private route:Router){} 
  public userRegister(){
    this.userService.registerUser(this.user).subscribe(
      (data:any)=>{
        console.log("Registered Successfully!"+data);
        this.route.navigateByUrl('/login');
         alert("Registered");
      },
      Error=>{ console.log("somethings wrong")}
    );
  }
}
