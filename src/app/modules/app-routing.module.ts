import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from '../component/car-list/car-list.component';
import { AddCarComponent } from '../component/add-car/add-car.component';
import { SalesDataComponent } from '../component/sales-data/sales-data.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
    { path: 'carList', component: CarListComponent },
    { path: 'addCar', component: AddCarComponent },
    { path: 'salesData', component: SalesDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
