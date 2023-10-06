import { Component,OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addingquestioquizid',
  templateUrl: './addingquestioquizid.component.html',
  styleUrls: ['./addingquestioquizid.component.css']
})
export class AddingquestioquizidComponent implements OnInit {
  selectedQuizId: number | null = null; // Initialize with null as no quiz is selected
  quizzes: any[] = []; // Array to hold quiz data
  questions: any[] = []; // Array to hold questions data

  constructor(private quizService: QuizService,private router:Router) {}

ngOnInit() {
  this.loadQuizzes();
}

loadQuizzes() {
  this.quizService.getAllQuizzes().subscribe(
    (data: any) => {
      this.quizzes = data;
    },
    (error) => {
      console.error('Error loading quizzes:', error);
    }
  );
}

onQuizChange() {
  if (this.selectedQuizId) {
  }
}
AddQuestion()
{
this.router.navigate(['/online-exam']);
}

}