import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBurgerObservableComponent } from './add-burger-observable.component';

describe('AddBurgerObservableComponent', () => {
  let component: AddBurgerObservableComponent;
  let fixture: ComponentFixture<AddBurgerObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBurgerObservableComponent]
    });
    fixture = TestBed.createComponent(AddBurgerObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
