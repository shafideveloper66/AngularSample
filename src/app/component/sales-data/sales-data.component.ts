import { Component, OnInit, ViewChild } from '@angular/core';
import { MyServices } from 'src/app/service/data-service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-sales-data',
  templateUrl: './sales-data.component.html',
  styleUrls: ['./sales-data.component.scss']
})
export class SalesDataComponent implements OnInit {

 
  displayedColumns: string[] = ['Name',  'Cylinders', 'Displacement', "Year"];
  dataSource: any;

  constructor(private myServices: MyServices) {

  }

  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit() {
    this.myServices.getData().subscribe(data => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }
}
