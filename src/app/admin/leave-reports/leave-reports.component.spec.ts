import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveReportsComponent } from './leave-reports.component';

describe('LeaveReportsComponent', () => {
  let component: LeaveReportsComponent;
  let fixture: ComponentFixture<LeaveReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveReportsComponent]
    });
    fixture = TestBed.createComponent(LeaveReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
