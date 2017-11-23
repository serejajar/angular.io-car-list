import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CarService {
  carsUrl = 'http://localhost:4200/assets/API/';

  constructor(private http: HttpClient) { }

  checkIfCarIsSelected(id) {
    const selectedCars = JSON.parse(localStorage.getItem('selectedCars'));
    return selectedCars.includes(id);
  }

  get(url) {
    return this.http.get(`${this.carsUrl}/${url}.json`);
  }
}
