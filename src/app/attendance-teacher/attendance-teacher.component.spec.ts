import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTeacherComponent } from './attendance-teacher.component';

describe('AttendanceTeacherComponent', () => {
  let component: AttendanceTeacherComponent;
  let fixture: ComponentFixture<AttendanceTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceTeacherComponent]
    });
    fixture = TestBed.createComponent(AttendanceTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
