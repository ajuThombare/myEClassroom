import { Component } from '@angular/core';
import { Question } from '../tsfiles/question';
import { QuizService } from '../quiz.service';
import { Quiz } from '../tsfiles/quiz';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { UserService } from '../user.service';
import { Subject } from '../tsfiles/subject';
import { Standard } from '../tsfiles/standard';
import { ActivatedRoute } from '@angular/router';
import { User } from '../tsfiles/user';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent {
  user=new User(0,"","","",false,"","","","","","","");
  quiz = new Quiz(0, '', '', '', '', true, [] ,'','');
  questionsArray: Question[] = [];
  standards: Standard[] = [];
  stdid:any;
  subject: Subject[] = [];
  index:number= 0;
  stdselected:boolean=false;
  subjectselected:boolean=false;

  constructor(private quizService: QuizService,private activateRoute:ActivatedRoute,
    private userService:UserService, private loacalStorage:SessionStorageService) {}

  ngOnInit(): void {
    // this.getAllStandard();
    this.subject = this.loacalStorage.retrieve('currentuser').subjects;
    this.standards = this.loacalStorage.retrieve('currentuser').standards;
  }
  addQuiz() {
    if (!this.quiz.title || !this.quiz.maxMarks ||
       !this.quiz.numberOfQuestions || !this.quiz.subject || 
       !this.quiz.standard|| !this.quiz.active) {
      alert("Please fill all required fields.");
      return;
    }
    if(this.quiz.title.length <3){
      alert("Title should be minimum 3 characters.");
      return;
    }
    if(parseInt(this.quiz.maxMarks) <5){
      alert("Maximum Marks should be minimum 5.");
      return;
    }
    if(parseInt(this.quiz.numberOfQuestions) <5){
      alert("Number of Questions should be minimum 5.");
      return;
    }
// console.log(+);

    this.quiz.teacherId = this.loacalStorage.retrieve('currentuser').id;
      this.quizService.addQuiz(this.quiz).subscribe(
        (data: any) => {
          console.log('Quiz added');
          alert('Quiz added');
          this.quiz = new Quiz(0, '', '', '', '', true, [],"",'');
          this.stdselected=true;
          this.subjectselected=true;
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
    
  onStandardChange(event: any) {
    console.log(event.target.value);
    this.quiz.standard=event.target.value;
    this.userService.getSubjectsByStandardId(event.target.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.subject =data;
      this.quiz.subject = data[0]?.sname;//saves subject backend
      }
    );
  }

getAllStandard()  {
    this.userService.getAllStandard().subscribe(
      (data: any) => {
        this.standards = data;
        // this.quiz.standard=data[0]?.name;
      },
      error => {
        console.error("Error fetching standards:", error);
      }
    );
  }
    onStdChange(){
      this.stdselected=false;
    }
    
    onSubjectChange(){
      this.subjectselected=false;
    }
}