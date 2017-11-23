import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AddCarComponent } from './add-car/add-car.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarService } from './car.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { FilterCarsComponent } from './filter-cars/filter-cars.component';


@NgModule({
  declarations: [
    AddCarComponent,
    AppComponent,
    DashboardComponent,
    EditCarComponent,
    FilterCarsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
