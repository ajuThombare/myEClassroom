import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../tsfiles/user';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent  implements OnInit{
  userid:number=0;
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
constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private route:Router)
{

} 
  ngOnInit(): void {
    this.userid=this.activatedRoute.snapshot.params['userid'];
    this.userService.getUserById(this.userid).subscribe(
      (data:any)=>
      {
        this.user=data;
      }
    );
  }
  public userUpdate()
  {
    this.userService.updateUser(this.user,this.userid).subscribe(
      (data:any)=>
      {
        console.log("data updated successfully");
        alert("Updated Successfully");
        this.route.navigate(['listUser']);
      }
    );
  }
}

