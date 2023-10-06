import { Component, OnInit } from '@angular/core';
import { Result } from '../tsfiles/result';
import { UserService } from '../user.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit{
  result: Result[] = [];

  constructor(private userService:UserService,private loacalStorage:LocalStorageService){}

  ngOnInit(): void {
      this.userService.getResultsById(this.loacalStorage.retrieve('currentuser').id).subscribe((data:any)=>{
      this.result = data;
      });
  }

  

}
