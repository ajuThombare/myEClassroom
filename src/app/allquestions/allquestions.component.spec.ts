import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllquestionsComponent } from './allquestions.component';

describe('AllquestionsComponent', () => {
  let component: AllquestionsComponent;
  let fixture: ComponentFixture<AllquestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllquestionsComponent]
    });
    fixture = TestBed.createComponent(AllquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
