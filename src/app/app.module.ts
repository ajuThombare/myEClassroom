import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { AttendanceTeacherComponent } from './attendance-teacher/attendance-teacher.component';
import { NotesComponent } from './notes/notes.component';
import { OnlineExamComponentComponent } from './online-exam-component/online-exam-component.component';
import { ResultComponentComponent } from './result-component/result-component.component';
import { ListofstudentsComponent } from './listofstudents/listofstudents.component';
import { SidebarComponent } from './teachersidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NotesStudentComponent } from './notes-student/notes-student.component';
import { StudentsidebarComponent } from './studentsidebar/studentsidebar.component';
import { StudentattendanceComponent } from './studentattendance/studentattendance.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AddquizComponent } from './addquiz/addquiz.component';
import { QuizdetailsComponent } from './quizdetails/quizdetails.component';
import { AddingquestioquizidComponent } from './addingquestioquizid/addingquestioquizid.component';
import { NotesTeacherComponent } from './notes-teacher/notes-teacher.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AllquestionsComponent } from './allquestions/allquestions.component';
import { UpdateQuestionsComponent } from './update-questions/update-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    StudenthomeComponent,
    ListuserComponent,
    UpdateuserComponent,
    AttendanceTeacherComponent,
    NotesComponent,
    OnlineExamComponentComponent,
    ResultComponentComponent,
    ListofstudentsComponent,
    SidebarComponent,
    NavbarComponent,
    QuizTakerComponent,
    QuizResultsComponent,
    HomepageComponent,
    TeacherhomeComponent,
    NotesStudentComponent,
    StudentsidebarComponent,
    StudentattendanceComponent,
    AddquizComponent,
    QuizdetailsComponent,
    AddingquestioquizidComponent,
    NotesTeacherComponent,
    QuizzesComponent,
    StudentResultComponent,
    AllquestionsComponent,
    UpdateQuestionsComponent,
    // QuizzesComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgxWebstorageModule.forRoot(),
    NgxPaginationModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }