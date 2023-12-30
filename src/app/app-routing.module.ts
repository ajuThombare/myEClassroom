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
import { ListofstudentsComponent } from './listofstudents/listofstudents.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { NotesStudentComponent } from './notes-student/notes-student.component';
import { StudentattendanceComponent } from './studentattendance/studentattendance.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';
import { NotesTeacherComponent } from './notes-teacher/notes-teacher.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { AllquestionsComponent } from './allquestions/allquestions.component';
import { UpdateQuestionsComponent } from './update-questions/update-questions.component';
import { ListHistoryUsersComponent } from './admin/list-history-users/list-history-users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PendingRequestsComponent } from './admin/pending-requests/pending-requests.component';
import { StandardComponent } from './admin/standard/standard.component';
import { SubjectComponent } from './admin/subject/subject.component';
import { StandardSubjectsComponent } from './admin/standard-subjects/standard-subjects.component';
import { ListTeachersComponent } from './admin/list-teachers/list-teachers.component';
import { UpdateTeacherComponent } from './admin/update-teacher/update-teacher.component';
import { StudentResultsComponent } from './admin/student-results/student-results.component';
import { TeacherLeavesComponent } from './teacher-leaves/teacher-leaves.component';
import { LeaveRequestsComponent } from './admin/leave-requests/leave-requests.component';
import { TeacherLeaveRequestsComponent } from './teacher-leave-requests/teacher-leave-requests.component';
import { LeaveReportsComponent } from './admin/leave-reports/leave-reports.component';
import { AdminGuardService } from './security-services/admin-guard.service';
import { StudentGuardService } from './security-services/student-guard.service';
import { TeacherGuardService } from './security-services/teacher-guard.service';
import { LoginGuardService } from './security-services/login-guard.service';

const routes: Routes = [
//welcome and open to all paths
{ path:'',component:WelcomeComponent} ,
{ path:'welcome',component:WelcomeComponent} ,
{ path:'login',component:LoginComponent}, 
{ path:'register',component:RegisterComponent},

//Role based navigation paths
//Teacher Paths
{ path:'updateuser/:userid',component:UpdateuserComponent,canActivate:[TeacherGuardService]},
{ path:'teacherattendance',component:AttendanceTeacherComponent,canActivate:[TeacherGuardService]},
{ path:'notes', component: NotesComponent ,canActivate:[TeacherGuardService]},
{ path:'online-exam', component: OnlineExamComponentComponent ,canActivate:[TeacherGuardService]},
{ path:'result', component: ResultComponentComponent,canActivate:[TeacherGuardService]},
{ path:'students', component: ListofstudentsComponent,canActivate:[TeacherGuardService]},
{ path:'teacherhome', component:TeacherhomeComponent,canActivate:[TeacherGuardService]},
{ path:'addquiz', component:AddquizComponent,canActivate:[TeacherGuardService]},
{ path:'quizdetails', component:QuizdetailsComponent,canActivate:[TeacherGuardService]},
{ path:'teachernotes',component:NotesTeacherComponent,canActivate:[TeacherGuardService]},
{ path:'viewquestions',component:AllquestionsComponent,canActivate:[TeacherGuardService]},
{ path:'updatequestions/:qid',component:UpdateQuestionsComponent,canActivate:[TeacherGuardService]},
{ path:'teacherleaves',component:TeacherLeavesComponent,canActivate:[TeacherGuardService]},
{ path:'teacherleaverequests',component:TeacherLeaveRequestsComponent,canActivate:[TeacherGuardService]},
//Student Paths
{ path: 'studenthome/:userid', component:StudenthomeComponent,canActivate:[StudentGuardService]},
{ path:'studenthome', component:StudenthomeComponent,canActivate:[StudentGuardService]},
{ path:'studentnotes',component:NotesStudentComponent,canActivate:[StudentGuardService]},
{ path:'studentattendance', component:StudentattendanceComponent,canActivate:[StudentGuardService]},
{ path:'quiztaker', component:QuizTakerComponent,canActivate:[StudentGuardService]},
{ path:'quizzess',component:QuizzesComponent,canActivate:[StudentGuardService]},
{ path:'myresult',component:StudentResultComponent,canActivate:[StudentGuardService]},
//Admin Paths
{ path:'adminleavereport',component:LeaveReportsComponent,canActivate:[AdminGuardService]},
{ path:'leaverequests',component:LeaveRequestsComponent,canActivate:[AdminGuardService]},
{ path:'resultsadmin',component:StudentResultsComponent,canActivate:[AdminGuardService]},
{ path:'historyusers',component:ListHistoryUsersComponent,canActivate:[AdminGuardService]},
{ path:'adminhome',component:AdminHomeComponent,canActivate:[AdminGuardService]},
{ path:'pendingrequests',component:PendingRequestsComponent,canActivate:[AdminGuardService]},
{ path:'stdsubjects',component:StandardSubjectsComponent,canActivate:[AdminGuardService]},
{ path:'standard',component:StandardComponent,canActivate:[AdminGuardService]},
{ path:'subject',component:SubjectComponent,canActivate:[AdminGuardService]},
{ path:'teacherlist',component:ListTeachersComponent,canActivate:[AdminGuardService]},
{ path:'updateteacher/:userid',component:UpdateTeacherComponent,canActivate:[AdminGuardService]},
//Login check filter 
{ path:'listUser',component:ListuserComponent,canActivate:[LoginGuardService] },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
           






// { path:'listUser',component:ListuserComponent },
// { path:'updateuser/:userid',component:UpdateuserComponent},
// { path:'teacherattendance',component:AttendanceTeacherComponent},
// { path: 'dashboard', component: WelcomeComponent },
// { path: 'notes', component: NotesComponent },
// { path: 'online-exam', component: OnlineExamComponentComponent },
// { path: 'result', component: ResultComponentComponent},
// { path: 'students', component: ListofstudentsComponent},
// { path: 'home', component:HomepageComponent},
// { path: 'teacherhome', component:TeacherhomeComponent},
// { path: 'studenthome/:userid', component:StudenthomeComponent},
// { path: 'studenthome', component:StudenthomeComponent},
// { path : 'studentnotes',component:NotesStudentComponent},
// { path: 'studentattendance', component:StudentattendanceComponent},
// { path: 'quiztaker', component:QuizTakerComponent},
// { path: 'addquiz', component:AddquizComponent},
// { path: 'quizdetails', component:QuizdetailsComponent},
// { path:'teachernotes',component:NotesTeacherComponent},
// { path:'quizzess',component:QuizzesComponent},
// { path:'myresult',component:StudentResultComponent},
// { path:'viewquestions',component:AllquestionsComponent},
// { path:'updatequestions/:qid',component:UpdateQuestionsComponent},
// { path:'historyusers',component:ListHistoryUsersComponent},
// { path:'adminhome',component:AdminHomeComponent},
// { path:'pendingrequests',component:PendingRequestsComponent},
// { path:'stdsubjects',component:StandardSubjectsComponent},
// { path:'standard',component:StandardComponent},
// { path:'subject',component:SubjectComponent},
// { path:'teacherlist',component:ListTeachersComponent},
// { path:'updateteacher/:userid',component:UpdateTeacherComponent},
// { path:'resultsadmin',component:StudentResultsComponent},
// { path:'teacherleaves',component:TeacherLeavesComponent},
// { path:'leaverequests',component:LeaveRequestsComponent},
// { path:'teacherleaverequests',component:TeacherLeaveRequestsComponent},
// { path:'adminleavereport',component:LeaveReportsComponent},