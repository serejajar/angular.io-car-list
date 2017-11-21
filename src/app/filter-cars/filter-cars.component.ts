import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-cars',
  templateUrl: './filter-cars.component.html',
  styleUrls: ['./filter-cars.component.css']
})
export class FilterCarsComponent {
  @Input() data;
  @Input() dataForView;
  props: string[] = ['id', 'year', 'price', 'name'];

  filterCars(searchValue, searchProp) {

    if (searchValue !== '' && searchProp !== '') {
      const newCarsArr = [];
      const searchStr = searchValue.toLowerCase();
      let carStr;

      for (const car of this.data.cars) {
        carStr = car[searchProp].toLowerCase();

        if (carStr.indexOf(searchStr) !== -1) {
          newCarsArr.push(car);
        }

        this.dataForView.cars = newCarsArr;
      }
    }
  }
}
