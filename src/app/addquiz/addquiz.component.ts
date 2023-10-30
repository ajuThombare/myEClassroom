import { Component } from '@angular/core';
import { Question } from '../tsfiles/question';
import { QuizService } from '../quiz.service';
import { Quiz } from '../tsfiles/quiz';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent {
  
  quiz = new Quiz(0, '', '', '', '', true, "");
  questionsArray: Question[] = [];
  subject:any;

  constructor(private quizService: QuizService, private loacalStorage:SessionStorageService,) {}

  ngOnInit(): void {}

  addQuiz() {
    if (!this.quiz.active ||
      !this.quiz.maxMarks ||
      !this.quiz.numberOfQuestions ||
      !this.quiz.subjects ||
      !this.quiz.title) {
        alert("Please fill all required fields.");
        return;
    }

    this.quiz.subjects=this.subject;
    this.quiz.teacherId = this.loacalStorage.retrieve('currentuser').id;
    // console.log(this.quiz.subjects);
    // console.log(this.quiz);
    this.quizService.addQuiz(this.quiz).subscribe(
      (data: any) => {
        console.log('Quiz added');
        alert('Quiz added');
        this.quiz = new Quiz(0, '', '', '', '', true,"");
      },
      error=>{
        if(error.status == 409){
           alert(error.error);
         }else{
           alert("Something went wrong.")
         }
       }
     );
   
  }
    
  selectSubject(value:any)
  {
    console.log(value);
    this.subject=value;
  }
}