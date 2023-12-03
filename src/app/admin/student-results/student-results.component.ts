import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Result } from 'src/app/tsfiles/result';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-student-results',
  templateUrl: './student-results.component.html',
  styleUrls: ['./student-results.component.css']
})
export class StudentResultsComponent {
  result: Result[] = [];

  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;

  constructor(private userService:UserService,private loacalStorage:SessionStorageService){}

  ngOnInit(): void {
  this.refreshTabel();
  }
  refreshTabel(){
    this.userService. getAllResults().subscribe((data: any) => {
      this.result = data;
      });
  }
  deleteResult(id:number){
    this.userService.deleteResultsById(id).subscribe(
      (resp: any)=>{
        this.refreshTabel();
        alert("Deleted");
      },
      (error)=>{
        console.log(error);
        alert("Something went wrong.");
      }
    );
  }

}
