import { Component } from '@angular/core';
import { Quiz } from '../tsfiles/quiz';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {
  quizzes:any;
  quiz = new Quiz(0,"","","","", true, "");
  quesId:number=0;
selectedQuiz: string = 'default'; // Initialize with a default value
  questions: any[] = []; 
  qId:any;
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  
  constructor(private router:Router,private quizService:QuizService,private localStorage:SessionStorageService)
  {

  }
  ngOnInit(): void {
    this.quizService.getAllQuizzes().subscribe(
      (data:any)=>
      {
      // console.log(data);
      //  console.log("data retrived succesfully");
       this.quizzes=data;
      }
     );

  }

  Attempt(quiz:Quiz)
  {
  // console.log(quiz);
  this.localStorage.store('currentquiz',quiz);
  this.router.navigate(['/quiztaker']);
  }

}