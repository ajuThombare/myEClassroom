import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoryUsersComponent } from './list-history-users.component';

describe('ListHistoryUsersComponent', () => {
  let component: ListHistoryUsersComponent;
  let fixture: ComponentFixture<ListHistoryUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHistoryUsersComponent]
    });
    fixture = TestBed.createComponent(ListHistoryUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
