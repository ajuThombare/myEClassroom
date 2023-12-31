import { Component, OnInit } from '@angular/core';
import { Result } from '../tsfiles/result';
import { UserService } from '../user.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit{
  result: Result[] = [];

  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;

  constructor(private userService:UserService,private loacalStorage:SessionStorageService){}

  ngOnInit(): void {
  this.refreshTabel();
  }
  refreshTabel(){
    this.userService.getResultsById(this.loacalStorage.retrieve('currentuser').id).subscribe((data:any)=>{
      this.result = data;
      });
  }

  

}
