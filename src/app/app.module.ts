import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { SalesDataComponent } from './component/sales-data/sales-data.component';
import { CarListComponent } from './component/car-list/car-list.component';
import { AddCarComponent } from './component/add-car/add-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMaterialModule } from './modules/material.module';
import { MyServices } from './service/data-service';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './component/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesDataComponent,
    CarListComponent,
    AddCarComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AddMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MyServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
