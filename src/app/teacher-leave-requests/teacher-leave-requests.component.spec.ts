import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLeaveRequestsComponent } from './teacher-leave-requests.component';

describe('TeacherLeaveRequestsComponent', () => {
  let component: TeacherLeaveRequestsComponent;
  let fixture: ComponentFixture<TeacherLeaveRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherLeaveRequestsComponent]
    });
    fixture = TestBed.createComponent(TeacherLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
