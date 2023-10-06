import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingquestioquizidComponent } from './addingquestioquizid.component';

describe('AddingquestioquizidComponent', () => {
  let component: AddingquestioquizidComponent;
  let fixture: ComponentFixture<AddingquestioquizidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddingquestioquizidComponent]
    });
    fixture = TestBed.createComponent(AddingquestioquizidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
