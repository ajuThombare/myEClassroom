import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../tsfiles/question';
import { isEmpty } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Quiz } from '../tsfiles/quiz';

@Component({
  selector: 'app-online-exam-component',
  templateUrl: './online-exam-component.component.html',
  styleUrls: ['./online-exam-component.component.css']
})
export class OnlineExamComponentComponent implements OnInit {
  question=new Question(0,"","","","","","","","");
  correctOption:any;
  @ViewChild('questionForm') questionForm!: NgForm;
  selectedQuizId: any;
  quizid:any;
  /*! non null oprator used here to tell we wll initialize it elsewhere.*/
quiz:any;
    constructor(private quizservice:QuizService,private router:Router,private localStorage:LocalStorageService) {
  }

  ngOnInit(): void {
    this.quiz=this.localStorage.retrieve('currentquiz');
  }
  submitQuestion() 
  {
    if (this.selectedQuizId) 
    {
      alert("Please fill in all required fields.");
      return;
    }
    console.log(this.question);
    this.quizservice.addQuestionToQuiz(this.question,this.quiz.qId).subscribe(    
        (data:any)=>
        {
           if(data ===isEmpty){
          alert("add first");
          this.question = new Question(0,"","","","","","","","");
          console.log("field cleared");
        }else{
          console.log("quiz added");
          alert("added");
        }
    });

  }
  back()
  {
    this.router.navigate(['/addquiz']);
  }
}
