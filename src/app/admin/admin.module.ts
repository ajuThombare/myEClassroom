import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminsidebarComponent } from './adminsidebar/adminsidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PendingRequestsComponent } from './pending-requests/pending-requests.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';
import { StandardComponent } from './standard/standard.component';
import { SubjectComponent } from './subject/subject.component';
import { StandardSubjectsComponent } from './standard-subjects/standard-subjects.component';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { StudentResultsComponent } from './student-results/student-results.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { LeaveReportsComponent } from './leave-reports/leave-reports.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminHomeComponent,
    AdminsidebarComponent,
    PendingRequestsComponent,
    StandardComponent,
    SubjectComponent,
    StandardSubjectsComponent,
    ListTeachersComponent,
    UpdateTeacherComponent,
    StudentResultsComponent,
    LeaveRequestsComponent,
    LeaveReportsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,MatIconModule,MatListModule,MatCardModule,NgxPaginationModule,
    AppRoutingModule,

  ],
  exports:[
    AdminLoginComponent,
    AdminHomeComponent,
    AdminsidebarComponent,
    PendingRequestsComponent
  ]
})
export class AdminModule { }
