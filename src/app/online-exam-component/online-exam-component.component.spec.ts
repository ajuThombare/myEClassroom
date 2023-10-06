import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineExamComponentComponent } from './online-exam-component.component';

describe('OnlineExamComponentComponent', () => {
  let component: OnlineExamComponentComponent;
  let fixture: ComponentFixture<OnlineExamComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineExamComponentComponent]
    });
    fixture = TestBed.createComponent(OnlineExamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
