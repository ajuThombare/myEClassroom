import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AttendanceTeacherComponent } from './attendance-teacher/attendance-teacher.component';
import { NotesComponent } from './notes/notes.component';
import { OnlineExamComponentComponent } from './online-exam-component/online-exam-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';
import { ListofstudentsComponent } from './listofstudents/listofstudents.component';;
import { HomepageComponent } from './homepage/homepage.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { NotesStudentComponent } from './notes-student/notes-student.component';
import { StudentattendanceComponent } from './studentattendance/studentattendance.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';
import { AddingquestioquizidComponent } from './addingquestioquizid/addingquestioquizid.component';
import { NotesTeacherComponent } from './notes-teacher/notes-teacher.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { AllquestionsComponent } from './allquestions/allquestions.component';
import { UpdateQuestionsComponent } from './update-questions/update-questions.component';
import { ListHistoryUsersComponent } from './list-history-users/list-history-users.component';

const routes: Routes = [
{path:'',component:WelcomeComponent} ,
{path:'welcome',component:WelcomeComponent} ,
//this WelcomeComponent.html
{path:'login',component:LoginComponent}, 
{path:'register',component:RegisterComponent },
//navigate will come here& it will cll RegComponent.html
{path:'listUser',component:ListuserComponent },
{path:'updateuser/:userid',component:UpdateuserComponent},
{path:'teacherattendance',component:AttendanceTeacherComponent},
{ path: 'dashboard', component: WelcomeComponent },
{ path: 'notes', component: NotesComponent },
{ path: 'online-exam', component: OnlineExamComponentComponent },
{ path: 'result', component: ResultComponentComponent},
{ path: 'students', component: ListofstudentsComponent},
{ path: 'home', component:HomepageComponent},
{ path: 'teacherhome', component:TeacherhomeComponent},
{ path: 'studenthome/:userid', component:StudenthomeComponent},
{ path: 'studenthome', component:StudenthomeComponent},
{path : 'studentnotes',component:NotesStudentComponent},
{path: 'studentattendance', component:StudentattendanceComponent},
{path: 'quiztaker', component:QuizTakerComponent},
{path: 'addquiz', component:AddquizComponent},
{path: 'quizdetails', component:QuizdetailsComponent},
{path: 'addquestionquizid', component:AddingquestioquizidComponent},
{ path:'teachernotes',component:NotesTeacherComponent},
{ path:'quizzess',component:QuizzesComponent},
{path:'myresult',component:StudentResultComponent},
{path:'viewquestions',component:AllquestionsComponent},
{path:'updatequestions/:qid',component:UpdateQuestionsComponent},
{ path:'historyusers',component:ListHistoryUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
           