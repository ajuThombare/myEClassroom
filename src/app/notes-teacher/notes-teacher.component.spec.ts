import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTeacherComponent } from './notes-teacher.component';

describe('NotesTeacherComponent', () => {
  let component: NotesTeacherComponent;
  let fixture: ComponentFixture<NotesTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesTeacherComponent]
    });
    fixture = TestBed.createComponent(NotesTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
