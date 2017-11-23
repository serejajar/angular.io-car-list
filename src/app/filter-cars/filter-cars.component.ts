import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.css']
})
export class FilterCarsComponent {
  @Input() dataForView;

  filterCars(searchValue, searchProp) {
    const data = JSON.parse(localStorage.getItem('data'));
    const newCarsArr = [];

    if (searchValue.length > 0 && searchProp.length > 0) {
      const searchStr = searchValue.toLowerCase();
      let carStr;

      for (const car of data.cars) {
        carStr = car[searchProp].toLowerCase();

        if (carStr.indexOf(searchStr) !== -1) {
          newCarsArr.push(car);
        }

        this.dataForView.cars = newCarsArr;
      }
    } else if (searchValue.length === 0 && searchProp.length > 0) {
      this.dataForView.cars = data.cars;
    }
  }
}
