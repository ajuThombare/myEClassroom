import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private route:Router){
    
  }
  title = 'mynewproject';
  ngOnInit(): void {
    
  }
  public login(){
    this.route.navigate(['/login']);
    }
    
    public listUsers()
    {
      this.route.navigate(['/listUser'])
    }
    public teacherAttendance()
    {
      this.route.navigate(['/teacherattendance']);
    }
    public getAllStudents()
    {
      this.route.navigate(['/Allstudents']);
    }
}
