import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarService } from './car.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterCarsComponent } from './filter-cars/filter-cars.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterCarsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
