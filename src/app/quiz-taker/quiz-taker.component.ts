import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { QuizService } from '../quiz.service';
import { Question } from '../tsfiles/question';
import { Result } from '../tsfiles/result';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit{
  question=new Question(0,"","","","","","","","");
  questions: Question[] = [];
  selectedOption='';
  itemsPerPage: number = 10;
  pageNumber: number = 1;
  pageCount: number = 10;
  currentQuestionIndex: number = 0;
  instructions:boolean=true;
  quizStarted:boolean=false;
  score: number = 0;
  result : Result = new Result(0,0,"","",0) ;

// created object here user proprties added here thtat html data it will carry and send to db
constructor(private quizService:QuizService,private router:Router,
  private activatedRoute:ActivatedRoute , private loacalStorage:LocalStorageService,
  private userService:UserService, ){}

ngOnInit(): void {
this.question.quesId=this.activatedRoute.snapshot.params['qid'];

  this.quizService.getQuestionByQuizById(this.loacalStorage.retrieve('currentquiz').qId).subscribe(
    (data:any)=>
    {
      // console.log(data);
      this.questions=data;
    }
  );
}
public submit(){
    const usernow = this.loacalStorage.retrieve('currentuser');
    const quiznow = this.loacalStorage.retrieve('currentquiz');
    this.score = this.calculateScore();

    this.result.marks = this.score;
    this.result.studentId = usernow.id;
    this.result.name = usernow.firstName +" "+usernow.lastName;
    this.result.maxmarks = quiznow.maxMarks;
    this.result.subject = quiznow.subjects

    this.userService.addQuizResult(this.result).subscribe(
      (data:any)=>{
        console.log("Quiza Result saved successfully -"+data);
      }
    );
    this.router.navigateByUrl('/myresult');
    // console.log(this.score);
}

startQuiz() {
  this.quizStarted = true;
  if(this.questions.length == 0){
    alert("There are not Questions for Selected quiz with Id: "+this.loacalStorage.retrieve('currentquiz').qId);
    this.router.navigateByUrl('/quizzess');
  }
  // Hide instructions after starting the quiz
  this.instructions = false;
}

 calculateScore() {
  let res = 0;
  let score=0;
  for (const question of this.questions) {
    if (question.givenAnswer===question.answer)
    {
      score++; 
    }
  }
  console.log(score);
  return score;
}

nextQuestion() {
  if (this.currentQuestionIndex < this.questions.length - 1)
    {
      this.currentQuestionIndex++; 
    } else {
    // Hiding  instructions after appearing 1st question
    this.instructions = false;
  }
}
previousQuestion() {
  if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
  }
}
}