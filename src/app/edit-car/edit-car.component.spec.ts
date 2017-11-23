import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditCarComponent } from './add-or-edit-car.component';

describe('AddOrEditCarComponent', () => {
  let component: AddOrEditCarComponent;
  let fixture: ComponentFixture<AddOrEditCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
