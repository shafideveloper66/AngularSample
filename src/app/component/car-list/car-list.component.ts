import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MyServices } from 'src/app/service/data-service';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  displayedColumns: string[] = ['Name', 'nMiles_per_Galloname', 'Cylinders', 'Displacement', "Horsepower", "Weight_in_lbs",
    "Acceleration", "Year", "Origin"];
  dataSource: any;

  constructor(private myServices: MyServices) {

  }

  @ViewChild(MatSort)
  sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

 

  ngOnInit() {
    this.myServices.getData().subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


}