import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/tsfiles/subject';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-standard-subjects',
  templateUrl: './standard-subjects.component.html',
  styleUrls: ['./standard-subjects.component.css']
})
export class StandardSubjectsComponent implements OnInit{

  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  subjects:Subject[]=[];

  constructor(private userService:UserService) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadAllSubjects();
  }
  public loadAllSubjects() {
    this.userService.getStandardWiseSubjects().subscribe(
      (data:any ) => {
        this.subjects = data;
      }
    );
  }
}
