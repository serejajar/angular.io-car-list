import { Component, OnInit } from '@angular/core';


import { CarService } from '../car.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any = [];
  dataForView: any = [];
  theads: string[] = ['id', 'img', 'name', 'year', 'price'];
  objForSorting = {
    prop: '',
    toggle: false,
    CSSclass: ''
  };

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.get('cars')
      .subscribe(cars => {
          this.data = cars;
          this.dataForView = JSON.parse(JSON.stringify(cars)); // clone the data for able to sort/filter
          console.log('Data', this.dataForView, this.data);
        },
        error => {
          this.dataForView = false;
        });
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
}
