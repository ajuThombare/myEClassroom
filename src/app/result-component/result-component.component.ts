import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../tsfiles/result';
import { UserService } from '../user.service';
import { User } from '../tsfiles/user';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {
  score: number = 0;
  result: Result[] = [];
  
  constructor(private activatedRoute: ActivatedRoute,private userService:UserService) {}

  ngOnInit(): void {
    this.score = this.activatedRoute.snapshot.params['score'];

    this.userService.getAllResults().subscribe((data:any)=>{
      this.result = data;
    });

  }

  getNameById(id:number){
   console.log(this.userService.getOneUserById(id));
   return "aju";
  }
}
