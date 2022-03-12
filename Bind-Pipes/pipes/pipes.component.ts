import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  presentDate = new Date();
  price = 2000.90;
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];
  decimalNum1: number = 8.7589623; 
  decimalNum2: number = 5.43;
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  
  ngOnInit(): void {
    
  }

}