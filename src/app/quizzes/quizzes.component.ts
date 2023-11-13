import { Component } from '@angular/core';
import { Quiz } from '../tsfiles/quiz';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { User } from '../tsfiles/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent {
  quizzes:any;
  quiz = new Quiz(0, '', '', '', '', true, [],"",'');
  quesId:number=0;
selectedQuiz: string = 'default'; // Initialize with a default value
  questions: any[] = []; 
  qId:any;
  pageNumber: number = 1;
  itemsPerPage: number = 1;
  pageCount: number = 5;
  standard:any;
  user=new User(0,"","","",false,"","","","","",'','');
  stdid:number=0;
  constructor(private router:Router,private activateRoute:ActivatedRoute,private userService:UserService,
    private quizService:QuizService,private localStorage:SessionStorageService)
  {
  }
  ngOnInit(): void {
        this.stdid=this.activateRoute.snapshot.params['stdid'];
        this.stdid =this.localStorage.retrieve('currentuser').standards[0].name;

    this.quizService.getQuizzesByStandard(this.stdid).subscribe(
      (data: any) => {
        console.log(data);
        this.quizzes = data;
      }
    );  
  }
  Attempt(quiz:Quiz)
  {
  this.localStorage.store('currentquiz',quiz);
  this.router.navigate(['/quiztaker']);
  }
}
