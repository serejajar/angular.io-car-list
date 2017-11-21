import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class CarService {
  carsUrl = 'http://demo3619064.mockable.io';

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(`${this.carsUrl}/${url}`);
  }
}
