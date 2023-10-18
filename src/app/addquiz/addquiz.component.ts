import { Component } from '@angular/core';
import { Question } from '../tsfiles/question';
import { QuizService } from '../quiz.service';
import { Quiz } from '../tsfiles/quiz';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent {
  
  quiz = new Quiz(0, '', '', '', '', true, "");
  questionsArray: Question[] = [];
  subject:any;

  constructor(private quizService: QuizService, private loacalStorage:LocalStorageService,) {}

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
      (error) => {
        alert(this.quiz.title +' named quiz already present.');
      }
    );
   
  }

 

    
  selectSubject(value:any)
  {
    console.log(value);
    this.subject=value;
  }
}