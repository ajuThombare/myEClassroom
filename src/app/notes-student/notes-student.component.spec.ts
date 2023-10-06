import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesStudentComponent } from './notes-student.component';

describe('NotesStudentComponent', () => {
  let component: NotesStudentComponent;
  let fixture: ComponentFixture<NotesStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesStudentComponent]
    });
    fixture = TestBed.createComponent(NotesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
