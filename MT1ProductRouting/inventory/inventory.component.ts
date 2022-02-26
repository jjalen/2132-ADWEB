import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  todaydate: any;
  products:any;
  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {
    this.products = this.myservice.Products();
    this.todaydate=this.myservice.showTodayDate()
  }

}