import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattendanceComponent } from './studentattendance.component';

describe('StudentattendanceComponent', () => {
  let component: StudentattendanceComponent;
  let fixture: ComponentFixture<StudentattendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentattendanceComponent]
    });
    fixture = TestBed.createComponent(StudentattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
