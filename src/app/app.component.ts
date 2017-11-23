import { Component, OnInit } from '@angular/core';

import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project: "Car list"';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
    localStorage.selectedCars = '[]';
  }

  private getCars(): void {
    this.carService.get('data')
      .subscribe(data => {
          // save the data to local storage, for avoid request to real API
          localStorage.setItem('data', JSON.stringify(data));
        },
        error => {
          this.title = 'Error with API';
        });
  }
}
