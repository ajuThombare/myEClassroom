import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../tsfiles/question';
import { isEmpty } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

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
existingOptions: string[] = [];// Array to hold existing options
answerOptions: string[] = []; // Array to hold answer options
    constructor(private quizservice:QuizService,private router:Router,private localStorage:LocalStorageService) {
    }

  ngOnInit(): void {
    this.quiz=this.localStorage.retrieve('currentquiz');
  }
  submitQuestion() {
    // Checking any fields are empty
    if (
      !this.question.content ||
      !this.question.option1 ||
      !this.question.option2 ||
      !this.question.option3 ||
      !this.question.option4 ||
      !this.question.answer
    ) {
      alert("Please fill all required fields.");
      return;
    }
    
    // Check if options are unique
    const options = [
      this.question.option1,
      this.question.option2,
      this.question.option3,
      this.question.option4
    ];

    if (options.some((option, index) =>
     options.indexOf(option) !== index)) 
     {
      alert("Ensure that options are unique.");
      return;
    }
    this.answerOptions.push(this.question.answer);
    this.quizservice.addQuestionToQuiz(this.question, this.quiz.qId).subscribe(
      (data: any) => {
      console.log('Question added');
      alert('Question added');
      this.question=new Question(0,"","","","","","","",""); // clearing the form
      this.existingOptions = []; // clearing the existingOptions array
    });
  }
}