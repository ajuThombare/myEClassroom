import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Quiz } from '../tsfiles/quiz';
import { UserService } from '../user.service';
import { Result } from '../tsfiles/result';
import { Question } from '../tsfiles/question';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-allquestions',
  templateUrl: './allquestions.component.html',
  styleUrls: ['./allquestions.component.css']
})
export class AllquestionsComponent implements OnInit{
  pageNumber: number = 1;
  pageCount: number = 5;
  question=new Question(0,"","","","","","","","");
  questions: Question[] = [];
  quiz = new Quiz(0, '', '', '', '', true, [],"",'');
  constructor(private route:Router,private quizService:QuizService,
  private activatedRoute:ActivatedRoute,private loacalStorage:SessionStorageService){}
  
ngOnInit(): void {
  this.question.quesId=this.activatedRoute.snapshot.params['qid'];
  this.getAllQuestions();
  }

  
public updateData(question: Question) {
  //validatate
  this.route.navigate(['/updatequestions',question.quesId]);
  state: { question: question } 
}

delete(qid:number){
  const confirmation = window.confirm("Are you sure you want to delete this note?");
  if (confirmation) {
  this.quizService.deleteQuestion(qid).subscribe(
    (data:any)=>{
    //  console.log(qid);
    //  this.getAllQuestions=data;
    //  console.log(this.getAllQuestions);
      alert("Deleted Successfully");
      this.getAllQuestions();
    }
  );
  }
}

public getAllQuestions()
{
this.quizService.getQuestionByQuizById(this.loacalStorage.retrieve('currentquiz').qId).subscribe(
  (data:any)=>
  {
    console.log(data);
    this.questions=data;
  }
);
}

back()
{
this.route.navigate(['/quizdetails']);
}
}