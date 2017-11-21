import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCarsComponent } from './filter-cars.component';

describe('FilterCarsComponent', () => {
  let component: FilterCarsComponent;
  let fixture: ComponentFixture<FilterCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
