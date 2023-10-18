import { Component, OnInit } from '@angular/core';
import { Quiz } from '../tsfiles/quiz';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-quizdetails',
  templateUrl: './quizdetails.component.html',
  styleUrls: ['./quizdetails.component.css']
})
export class QuizdetailsComponent implements OnInit{
  quizzes:any;
  quiz = new Quiz(0,"","","","", true, "");
  teacherid :string;
  selectedQuiz: string = 'default'; // Initialize with a default value
  questions: any[] = []; 

  constructor(private router:Router,private quizService:QuizService,private localStorage:LocalStorageService){
    this.teacherid =localStorage.retrieve('currentuser').id;
  }

  ngOnInit(): void {
    this.refresher();
  }
  public refresher(){

    this.quizService.getUserQuizzes(this.teacherid).subscribe(
  // this.quizService.getAllQuizzes().subscribe(
    (data:any)=>
    {
      // console.log(data);
    //  console.log("data retrived succesfully");
     this.quizzes=data;
    }
   );
  }
  AddQuestion(qId:number)
  {
  this.quizService.getQuizById(qId).subscribe((data:any)=>
  {
    console.log(data);
    this.localStorage.store('currentquiz',data);
    this.router.navigate(['/online-exam']);
  },
  (Error)=>
  {
    alert("Something went wrong");
  }
  );
  }  

  ViewQuestions(qId:number)
  {
  this.quizService.getQuizById(qId).subscribe((data:any)=>
  {
    console.log(data);
    this.localStorage.store('currentquiz',data);
    this.router.navigate(['/viewquestions']);
  },
  (Error)=>
  {
    alert("Something went wrong");
  }
  );
  } 

  deleteQuestion(qId:number)
  {
  this.quizService.deleteQuiz(qId).subscribe((data:any)=>
  {
    console.log("quiz deleted");
    alert("Deleted Successfully");
    this.refresher();
    console.log(this.quizzes=data);

  });
  }
}