import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CarService } from '../car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  car: any = {};
  isEditMode = false;
  message = '';
  props: string[];
  title = '';

  private carId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService) { }

  enableEditingCar() {
    if (!this.carService.checkIfCarIsSelected(this.carId)) {
      this.isEditMode = !this.isEditMode;
    } else {
      this.message = 'You can\'t edit the car!';
    }
  }

  ngOnInit() {
    this.props = JSON.parse(
      localStorage.getItem('data')
    ).props; // get props from the local storage

    this.carId = +this.route.snapshot.paramMap.get('id');
    this.title = `Details about the car with id #${this.carId}`;
    this.getCarById(this.carId);
  }

  saveCar() {
    if (!this.carService.checkIfCarIsSelected(this.carId)) {
      const data = JSON.parse(localStorage.getItem('data'));

      for (const i in data.cars) {
        if (data.cars[i].id === this.carId) {
          data.cars[i] = this.car;
        }
      }

      localStorage.setItem('data', JSON.stringify(data));
    } else {
      this.message = 'You can\'t save the car!';
    }
  }

  private getCarById(id) {
    // replace the code bellow with the getting a car by the carService
    const data = JSON.parse(localStorage.getItem('data'));

    for (const i in data.cars) {
      if (data.cars[i].id === this.carId) {
        this.car = data.cars[i];
      }
    }
  }
}
