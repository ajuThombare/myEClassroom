import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../tsfiles/result';
import { UserService } from '../user.service';
import { User } from '../tsfiles/user';
import { Quiz } from '../tsfiles/quiz';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {
  score: number = 0;
  std:string ="";
  result: Result[] = [];
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  quiz=new Quiz(0,"","","","",true,[],"","");
    
  constructor(private activatedRoute: ActivatedRoute,private userService:UserService,private storage:SessionStorageService) {}

  ngOnInit(): void {
    this.score = this.activatedRoute.snapshot.params['score'];
    this.std = this.storage.retrieve('currentuser').standards[0].name;
    this.userService.getResultsByStd(this.std).subscribe((data:any)=>{
      this.result = data;
      // console.log(data);
    });

  }
}