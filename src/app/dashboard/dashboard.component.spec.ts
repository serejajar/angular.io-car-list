import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CarService } from '../car.service';
import { DashboardComponent } from './dashboard.component';

class CarServiceSpy {
  checkIfCarIsSelected = jasmine.createSpy('checkIfCarIsSelected').and.callFake(function(id) {
      const selectedCars = JSON.parse(localStorage.getItem('selectedCars'));
      return selectedCars.includes(id);
    }
  );
}

describe('DashboardComponent', () => {
  let data;
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        { provide: CarService, useClass: CarServiceSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create Component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the car list', () => {
    const de = fixture.debugElement.query(By.css('tbody tr td'));
    const el = de.nativeElement;
    data = JSON.parse(localStorage.data);

    expect(localStorage.data).toBeTruthy();
    expect(data.cars.length).toBe(4);
    expect(+el.textContent).toBe(data.cars[0].id);
  });

  it('should sort cars', () => {
    const button = fixture.debugElement.nativeElement.querySelector('thead i');
    button.click(); // the first click for sort ASC
    button.click(); // the second click for sort DESC
    fixture.detectChanges();

    const deWithId = fixture.debugElement.query(By.css('tbody tr td'));
    expect(+deWithId.nativeElement.textContent).toBe(4);
  });

  it('should select a car', () => {
    const checkbox = fixture.debugElement.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.click();
    const selectedCars = JSON.parse(localStorage.selectedCars);
    expect(selectedCars.length).toBe(1);
  });

  it('shouldn\'t delete the selected car', () => {
    const selectedCars = JSON.parse(localStorage.selectedCars);
    const idBefore = fixture.debugElement.nativeElement.querySelector('tbody tr td');
    const button = fixture.debugElement.nativeElement.querySelector('i[class="fa fa-trash-o"]');
    button.click();
    fixture.detectChanges();

    const idAfter = fixture.debugElement.nativeElement.querySelector('tbody tr td');
    const message = fixture.debugElement.nativeElement.querySelector('div[class="alert alert-warning"]');
    expect(message).toBeTruthy();
    expect(idBefore.textContent).toBe(idAfter.textContent);
  });

  it('should unselect the car', () => {
    const checkbox = fixture.debugElement.nativeElement.querySelector('input[type="checkbox"]');
    checkbox.click();
    const selectedCars = JSON.parse(localStorage.selectedCars);
    expect(selectedCars.length).toBe(0);
  });

  it('should delete the car', () => {
    const idBefore = fixture.debugElement.nativeElement.querySelector('tbody tr td');
    component.deleteCar({id: 1});
    fixture.detectChanges();

    const idAfter = fixture.debugElement.nativeElement.querySelector('tbody tr td');
    expect(idBefore.textContent).toBeLessThan(idAfter.textContent);
  });
});
