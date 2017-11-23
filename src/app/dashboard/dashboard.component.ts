import { Component , OnInit } from '@angular/core';

import { CarService } from '../car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataForView: any = [];
  message = '';
  objForSorting = {
    prop: '',
    toggle: false,
    CSSclass: ''
  };
  props: string[];

  constructor(
    private carService: CarService) { }


  deleteCar(car) {
    if (!this.carService.checkIfCarIsSelected(car.id)) {
      // replace the block bellow with real requests:
      // The DELETE API request and reload the data with the getCars() method
      const data = JSON.parse(localStorage.getItem('data'));

      for (const i in data.cars) {
        if (data.cars[i].id === car.id) {
          data.cars.splice(i, 1);
        }
      }

      localStorage.setItem('data', JSON.stringify(data));
      this.getCars();
    } else {
      this.message = `You can\'t delete the car with id: ${car.id}!`;
    }

  }

  ngOnInit() {
    this.getCars();
  }

  selectCar(id) {
    const arr = JSON.parse(localStorage.selectedCars);
    const index = arr.indexOf(id);

    if (index === -1) {
      arr.push(id);
    } else {
      arr.splice(index, 1);
    }
    localStorage.selectedCars = JSON.stringify(arr);
  }

  sort(prop) {
    // return default values
    if (this.objForSorting.prop !== prop) {
      this.objForSorting.toggle = false;
    }

    // sort the arr to ASC/DESC and add a css class for icon
    if (this.objForSorting.toggle) {
      const obj = this.dataForView.cars.sort(compareAsc);
      this.dataForView.cars = obj;
      this.objForSorting.CSSclass = 'fa-sort-asc';
    } else {
      const obj = this.dataForView.cars.sort(compareDesc);
      this.dataForView.cars = obj;
      this.objForSorting.CSSclass = 'fa-sort-desc';
    }
    this.objForSorting.toggle = !this.objForSorting.toggle;
    this.objForSorting.prop = prop;

    function compareDesc(a, b) {
      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] > b[prop]) {
        return 1;
      }
      return 0;
    }

    function compareAsc(a, b) {
      if (a[prop] > b[prop]) {
        return -1;
      }
      if (a[prop] < b[prop]) {
        return 1;
      }
      return 0;
    }
  }

  private getCars(): void {
    this.dataForView = JSON.parse(localStorage.getItem('data'));
  }
}
