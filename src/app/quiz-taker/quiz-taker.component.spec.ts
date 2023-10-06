import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTakerComponent } from './quiz-taker.component';

describe('QuizTakerComponent', () => {
  let component: QuizTakerComponent;
  let fixture: ComponentFixture<QuizTakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizTakerComponent]
    });
    fixture = TestBed.createComponent(QuizTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
