import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../tsfiles/user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent  implements OnInit{
  userid:number=0;
  user=new User(0,"","","",false,"","","","","","",""); 
  role=[
    'Student',
    'Teacher',
  ];
  data: any[] = [];
  countries: string[] = [];
  states: string[] = [];
  cities: any[] = [];
    selectedCountry!: string;
    selectedState!: string;

constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private route:Router,private http: HttpClient)
{

} 
  ngOnInit(): void {
    // this.user.country = "india";
    this.http.get<any[]>('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
    .subscribe((response) => {
      this.data = response;
      this.getCountries();
    }, (error) => {
      console.error(error);
    });

    this.userid=this.activatedRoute.snapshot.params['userid'];
    this.userService.getUserById(this.userid).subscribe(
      (data:any)=>
      {
        this.user=data;
      }
    );
  }

  getCountries() {
    this.countries = [...new Set(this.data.map(item => item.country))].sort();
  }

  onCountryChange(event: any) {
    this.selectedCountry = event.target.value;
    this.user.country =this.selectedCountry; 
    // console.log(this.user.country);
    this.getStates();
  }

  getStates() {
    this.states = [...new Set(this.data.filter(item => item.country === this.selectedCountry).map(item => item.subcountry))].sort();
  }

  onStateChange(event: any) {
    this.selectedState = event.target.value;
    this.user.state = this.selectedState;
    this.getCities();
  }
  onCityChange(event: any) {
    this.user.city = event.target.value;
  }
  getCities() {
    this.cities = this.data.filter(item => item.subcountry === this.selectedState);
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
  setAddressDetails(){

  }
}

