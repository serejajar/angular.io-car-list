import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddCarComponent } from './add-car.component';

describe('AddCarComponent', () => {
  let component: AddCarComponent;
  let fixture: ComponentFixture<AddCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AddCarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new car', () => {
    const dataOldLength = JSON.parse(localStorage.data).cars.length;
    component.carObj = {
      name: 'test name',
      img: 'img',
      year: '2017',
      engine: 'V8',
      color: 'white',
      places: 8
    };
    component.addNewCar();
    fixture.detectChanges();

    const dataNewLength = JSON.parse(localStorage.data).cars.length;
    expect(dataOldLength).toBeLessThan(dataNewLength);
  });
});
