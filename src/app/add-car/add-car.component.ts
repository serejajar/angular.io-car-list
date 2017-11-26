import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carObj: any = {
    id: 0
  };
  props: string[];

  constructor() { }

  addNewCar() {
    const data = JSON.parse(localStorage.getItem('data'));
    this.carObj.id = data.cars[data.cars.length - 1].id + 1;
    data.cars.push(this.carObj);
    localStorage.setItem('data', JSON.stringify(data));
  }

  ngOnInit() {
    this.props = JSON.parse(
      localStorage.getItem('data')
    ).props; // get props from the local storage

    // initialize obj for new car
    for (const prop of this.props) {
      this.carObj[prop] = '';
    }
  }
}
