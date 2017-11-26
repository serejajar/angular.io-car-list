import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CarService } from '../car.service';
import { EditCarComponent } from './edit-car.component';

class CarServiceSpy {
  checkIfCarIsSelected = jasmine.createSpy('checkIfCarIsSelected').and.callFake(function(id) {
      const selectedCars = JSON.parse(localStorage.getItem('selectedCars'));
      return selectedCars.includes(id);
    }
  );
}

describe('EditCarComponent', () => {
  let component: EditCarComponent;
  let fixture: ComponentFixture<EditCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ EditCarComponent ],
      providers: [
        { provide: CarService, useClass: CarServiceSpy },
        { provide: ActivatedRoute, useValue: {params: Observable.of({id: 2})}
  }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EditCarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should enable Edit mode', () => {
    component.enableEditingCar();
    expect(component.isEditMode).toBeTruthy();
    fixture.detectChanges();
  });

  it('should edit a car', () => {
    const carName = 'test name for check editing';
    component.car.name = carName;
    // fixture.detectChanges();

    component.saveCar();
    const data = JSON.parse(localStorage.data);
    fixture.detectChanges();

    expect(data.cars[0].name).toBe(carName);
  });
});
