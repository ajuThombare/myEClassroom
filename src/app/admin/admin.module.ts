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

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminHomeComponent,
    AdminsidebarComponent,
    PendingRequestsComponent,
    StandardComponent,
    SubjectComponent,
    StandardSubjectsComponent
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
