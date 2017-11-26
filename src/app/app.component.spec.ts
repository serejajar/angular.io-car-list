import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AppComponent } from './app.component';
import { CarService } from './car.service';

class CarServiceSpy {
  testData = {
    cars: [
      {
        id: 1,
        name: 'Black car',
        img: 'car.png',
        year: '2007',
        engine: 'V8',
        color: 'black',
        places: '4',
        price: '8500 $'
      },
      {
        id: 2,
        name: 'Usual car',
        img: 'car.png',
        year: '2009',
        engine: 'V8',
        color: 'white',
        places: '6',
        price: '1500 $'
      },
      {
        id: 3,
        name: 'Dream car',
        img: 'car.png',
        year: '2001',
        engine: 'V8',
        color: 'red',
        places: '4',
        price: '4500 $'
      },
      {
        id: 4,
        name: 'Not your car',
        img: 'car.png',
        year: '2003',
        engine: 'V8',
        color: 'blue',
        places: '8',
        price: '5800 $'
      }
    ],
    theads: ['id', 'img', 'name', 'year', 'price'],
    props: ['name', 'img', 'year', 'engine', 'color', 'places', 'price']
  };

  get = jasmine.createSpy('get').and.callFake(
    () => Observable.of(this.testData)
  );
}

describe('AppComponent', () => {
  const title = 'Project: "Car list"';

  let app;
  let carServiceSpy;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: CarService, useClass: CarServiceSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    carServiceSpy = fixture.debugElement.injector.get(CarService);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title ${title}`, () => {
    expect(app.title).toEqual(title);
  });

  it('should make the call for a data', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(carServiceSpy.get.calls.count()).toBe(1, 'getCars called');
    });
  }));

  it('should save the data to local storage', () => {
    expect(localStorage.data).toBeTruthy();
  });
});
