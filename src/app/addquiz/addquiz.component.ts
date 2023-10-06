import { Component } from '@angular/core';
import { Question } from '../tsfiles/question';
import { QuizService } from '../quiz.service';
import { Quiz } from '../tsfiles/quiz';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent {
  
  quiz = new Quiz(0, '', '', '', '', true, "");
  questionsArray: Question[] = [];
  subject:any;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  addQuiz() {
    this.quiz.subjects=this.subject;
    console.log(this.quiz.subjects);
    console.log(this.quiz);
      this.quizService.addQuiz(this.quiz).subscribe(
      (data: any) => {
        console.log('Quiz added');
        alert('Quiz added');
        this.quiz = new Quiz(0, '', '', '', '', true,"");

      },
      (error) => {
        console.log('Something went wrong while adding the quiz');
      }
    );
  }
  selectSubject(value:any)
  {
    console.log(value);
    this.subject=value;
  }
}