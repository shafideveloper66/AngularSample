import { Component, OnInit } from '@angular/core';
import { MyServices } from 'src/app/service/data-service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {


  childMessage: string = "This Message from Child...!";
  constructor(private myServices: MyServices) { }

  ngOnInit(): void {
    this.myServices.parentdata = this.childMessage;
  }

}
