import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyServices } from 'src/app/service/data-service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() parentData?: string;
  paredntService?: string;
  constructor(private myServices: MyServices) { }

  ngOnInit(): void {
    this.paredntService = this.myServices.parentdata;
  }


}
