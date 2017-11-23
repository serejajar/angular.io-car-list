import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCarComponent } from './add-car/add-car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'add-car', component: AddCarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EditCarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
