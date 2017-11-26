// input value
// filter

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
    component.dataForView = JSON.parse(localStorage.getItem('data'));
    fixture.detectChanges();
  });

  it('should create FilterCarsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should check the input value', () => {
    expect(component.dataForView.cars.length).toBeTruthy();
  });

  it('should check the filter', () => {
    const oldDataLength = component.dataForView.cars.length;
    component.filterCars('Bla', 'name');
    fixture.detectChanges();
    const newDataLenght = component.dataForView.cars.length;
    expect(oldDataLength).toBeGreaterThan(newDataLenght);

    // return data to initial value
    component.filterCars('', 'name');
    fixture.detectChanges();
  });
});
