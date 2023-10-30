import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { QuizService } from '../quiz.service';
import { Question } from '../tsfiles/question';
import { Result } from '../tsfiles/result';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit{
  question=new Question(0,"","","","","","","","");
  questions: Question[] = [];
  selectedOptions: string[] = []; // Initialize it as an empty string
  itemsPerPage: number = 10;
  pageNumber: number = 1;
  pageCount: number = 10;
  currentQuestionIndex: number = 0;
  instructions:boolean=true;
  quizStarted:boolean=false;
  score: number = 0;
  result : Result = new Result(0,0,"","",0) ;
  currMarks:any = 0;
  // attemptCount: number = 0;
  quizName:string ='';
// created object here user proprties added here thtat html data it will carry and send to db
constructor(private quizService:QuizService,private router:Router,
  private activatedRoute:ActivatedRoute , private loacalStorage:SessionStorageService,
  private userService:UserService, ){}

ngOnInit(): void {

  const Marksmaximum = this.loacalStorage.retrieve('currentquiz').maxMarks;
  const NumberOfQ = this.loacalStorage.retrieve('currentquiz').numberOfQuestions;

  //This is actual logic to calculate the score
  this.currMarks = (Marksmaximum/NumberOfQ);


this.quizName = this.loacalStorage.retrieve('currentquiz').title;

this.question.quesId=this.activatedRoute.snapshot.params['qid'];
// let attempts = '';  
this.userService.checkAttemptedResult(
    this.loacalStorage.retrieve('currentuser').id,
    this.loacalStorage.retrieve('currentquiz').subjects,
    this.quizName
  ).subscribe(
    (data:any)=>{
      if(data ==='Ok'){
        this.getAllQuetionsOfQuiz();
        // console.log("ok -------"+data);
      }else{
        Swal.fire({
              icon: 'info',
              title: 'Maximum Attempts Reached',
              text: 'You have already submitted the maximum number of attempts (3).',
            }).then(()=>{
              this.router.navigateByUrl('/quizzess');
            });
        // console.log("not ok -------"+data);
      }
    }
  );
}

getAllQuetionsOfQuiz(){
    this.quizService.getQuestionByQuizById(this.loacalStorage.retrieve('currentquiz').qId).subscribe(
    (data:any)=>
    {
      this.questions=data;
      console.log(this.questions);
    });
}
calculateScore() {
  let score = 0;
  for (let i = 0; i < this.questions.length; i++) {
    if (this.selectedOptions[i] === this.questions[i].answer) {
      score++;
    }
  }
  // console.log("Total Score:", score);
  return score;
}

public submit(){
    const usernow = this.loacalStorage.retrieve('currentuser');
    const quiznow = this.loacalStorage.retrieve('currentquiz');
    this.score=this.calculateScore();
    this.result.studentId = usernow.id;
    this.result.name = usernow.firstName +" "+usernow.lastName;
    this.result.maxmarks = quiznow.maxMarks;
    this.result.subject = quiznow.subjects;
    this.result.title =  quiznow.title;

    const Marksmaximum = this.loacalStorage.retrieve('currentquiz').maxMarks;
    const NumberOfQ = this.loacalStorage.retrieve('currentquiz').numberOfQuestions;

    //This is actual logic to calculate the score
    this.result.marks = ((Marksmaximum/NumberOfQ))*this.score;

    // console.log('score is '+ this.result.marks);
    Swal.fire({
      icon: 'info',
      title: 'Exam Submitted',
      text: 'Your answers have been submitted successfully.',
    }).then(() => {
      this.quizService.markResult(this.result).subscribe(
        (data: any) => {
          this.result = data;
        });
      this.router.navigateByUrl('/myresult');
    });
  }
  

startQuiz() {
  this.quizStarted = true;
  this.instructions = false;
  if (this.questions.length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'No Questions Found for quiz- "'+this.loacalStorage.retrieve('currentquiz').title+'"',
      // text: 'There are no questions added for the selected quiz- "'+this.loacalStorage.retrieve('currentquiz').title+'"',
    });
    this.router.navigateByUrl('/quizzess');
  }
}



nextQuestion() {
  if (this.selectedOptions[this.currentQuestionIndex]) 
  {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.instructions = false;
    }
  } 
}

previousQuestion() {
  if (this.currentQuestionIndex > 0) 
  {
    this.currentQuestionIndex--;
  }
}
}
