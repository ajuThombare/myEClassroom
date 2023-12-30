import { Component,OnInit } from '@angular/core';
import { User } from '../tsfiles/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Standard } from '../tsfiles/standard';
import { Subject } from '../tsfiles/subject';



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
  standard:Standard[] = [];
  subject:Subject[]=[];
  isTeacher:boolean = false;  
  
  constructor(private userService:UserService,private route:Router,private http: HttpClient){} 


  ngOnInit() {
    this.http.get<any[]>('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
      .subscribe((response) => {
        this.data = response;
        this.getCountries();
      }, (error) => {
        console.error(error);
      });
      this.userService.getAllStandard().subscribe(
        (data:any)=>{
          this.standard =data;
        }
      );
  }
  onRoleChange(event: any) {
    if(event.target.value== "Teacher")
    {
      this.isTeacher = true;
    }else{
      this.isTeacher = false;
    }
    // console.log(event.target.value);
  }
  onStandardChange(event: any) {
    console.log(event.target.value);
    this.userService.getSubjectsByStandardId(event.target.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.subject =data;
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


  public userRegister(){
    console.log(this.user)
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
      }
    );
  }
}

