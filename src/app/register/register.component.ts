import { Component,OnInit } from '@angular/core';
import { User } from '../tsfiles/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



// declare var GDSCountrySelector: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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


  constructor(private userService:UserService,private route:Router,private http: HttpClient){} 


  ngOnInit() {
    this.http.get<any[]>('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
      .subscribe((response) => {
        this.data = response;
        this.getCountries();
      }, (error) => {
        console.error(error);
      });
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


  public userRegister(){
    this.userService.registerUser(this.user).subscribe(
      (data:any)=>{
        console.log("Registered Successfully!"+data);
        this.route.navigateByUrl('/login');
         alert("Registered");
      },
      error=>{
        if(error.status == 409){
          alert(error.error);
        }else{
          alert("Something went wrong.")
        }
        // console.log();
      }
    );
  }
}

// import { Component,OnInit } from '@angular/core';
// import { User } from '../tsfiles/user';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
// user=new User(0,"","","",false,"","","","","","","");
// countries=[
//   'India',
//   'Pakistan',
//   'China',
//   'Nepal',
//   'Bhutan',
//   'Bangladesh',
//   'Myanmar (Burma)',
//   'Sri Lanka',
//   'Maldives',
//   'Afghanistan',
//   'Tajikistan',
//   'Kyrgyzstan',
// ];
// state1  = [
//   'Andhra Pradesh',
//   'Arunachal Pradesh',
//   'Assam',
//   'Bihar',
//   'Chhattisgarh',
//   'Goa',
//   'Gujarat',
//   'Haryana',
//   'Himachal Pradesh',
//   'Jharkhand',
//   'Karnataka',
//   'Kerala',
//   'Madhya Pradesh',
//   'Maharashtra',
//   'Manipur',
//   'Meghalaya',
//   'Mizoram',
//   'Nagaland',
//   'Odisha',
//   'Punjab',
//   'Rajasthan',
//   'Sikkim',
//   'Tamil Nadu',
//   'Telangana',
//   'Tripura',
//   'Uttar Pradesh',
//   'Uttarakhand',
//   'West Bengal',
//   'Andaman and Nicobar Islands',
//   'Chandigarh',
//   'Dadra and Nagar Haveli and Daman and Diu',
//   'Lakshadweep',
//   'Delhi (National Capital Territory of Delhi)',
//   'Puducherry'
// ];
//   ngOnInit(): void {
    
//   }
//   constructor(private userService:UserService,private route:Router){} 
  // public userRegister(){
  //   this.userService.registerUser(this.user).subscribe(
  //     (data:any)=>{
  //       console.log("Registered Successfully!"+data);
  //       this.route.navigateByUrl('/login');
  //        alert("Registered");
  //     },
  //     Error=>{ console.log("somethings wrong")}
  //   );
  // }
// }
