import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSubjectsComponent } from './standard-subjects.component';

describe('StandardSubjectsComponent', () => {
  let component: StandardSubjectsComponent;
  let fixture: ComponentFixture<StandardSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandardSubjectsComponent]
    });
    fixture = TestBed.createComponent(StandardSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
