import { Component,OnInit, ViewChild } from '@angular/core';
import { Question } from '../tsfiles/question';
import { QuizService } from '../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent implements OnInit {
  question=new Question(0,"","","","","","","","");
  correctOption:any;
  @ViewChild('questionForm') questionForm!: NgForm;
  selectedQuizId: any;
  qid:number=0;
  quizid:number=0;
  /*! non null oprator used here to tell we wll initialize it elsewhere.*/
quiz:any;
existingOptions: string[] = [];// Array to hold existing options
answerOptions: string[] = []; // Array to hold answer options
    constructor(private quizservice:QuizService,private router:Router,private activatedRoute:ActivatedRoute,
      private localStorage:LocalStorageService) {
  }

  ngOnInit(): void {
     this.quiz=this.localStorage.retrieve('currentquiz');
     console.log(this.question.quesId);
     this.qid=this.activatedRoute.snapshot.params['qid'];
     this.quizservice.getQuestionById(this.qid).subscribe(
       (data:any)=>
       {
         this.question=data;
       }
     );
        
  }
  updateQuestion() {
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
  
    this.quizservice.upadateQuestion(this.question, this.qid).subscribe(
      (data: any) => {
        Swal.fire('Success !!', 'Questions updated', 'success').then((e) => {
          });
      // console.log('Question updated'); 
      this.router.navigateByUrl('/viewquestions'); 
    },
    (Error) => {
      Swal.fire('Error', 'error in updating Questions', 'error');
    });
  }
}