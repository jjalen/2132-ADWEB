import { Component, OnInit } from '@angular/core';
import { Observable, of, range, from, fromEvent, filter, interval, subscribeOn, Subscriber } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  constructor() { }

  //Variables Declarations
  numbers: number[]=[];
  sum: number = 0;

  //Using filter
  filteredNumbers : number[] =[];
  sumfiltered: number=0;

  //Using map
  mapsum: number=0;
  mappedNumbers : number[] = [];

  //API
  apiMessage: any;
  
  //Event
  counter: number = 0;

  ngOnInit(): void {
    const interval$ = interval(1000);
    interval$.subscribe(val => console.log('stream 1' + val));
    const click$ = fromEvent(document, 'click');
    click$.subscribe(evt => console.log('Mouse is clicked'+ evt));

    const myObservable = of(1, 2, 3);

    const myObserver = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    myObservable.subscribe(myObserver);

    const observable = new Observable(subscriber =>
      {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        setTimeout(() => {
          subscriber.next(4);
          subscriber.complete(); 
        }, 1000);
      });

      console.log('just before subscribe');
      observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) {console.error('something wrong occured: '+err); },
      complete() {console.log('done'); 
    }

    });
    console.log('just after subscribe');
    
    const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    //const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //const numbers$ = range(1, 10);

    //observer
    const observer = {
      next: (num: number) => {this.numbers.push(num); this.sum += num },
      error: (err: any) => console.log(err),
      complete: () => console.log("Observation completed!")
    };

    //subscribing
    numbers$.subscribe(observer);

    //Using filter operation
    const filterFn = filter ( (num : number) => num > 5);
    const filteredNumbers$ = filterFn(numbers$);
    
    filteredNumbers$.subscribe( (num : number) => {
      this.filteredNumbers.push(num); this.sumfiltered += num
    });

    //Using map operation
    const mapFnc = map( (num : number) => num + num );
    const mappedNumbers$ = numbers$.pipe(filterFn, mapFnc);
    mappedNumbers$.subscribe( (num : number) => {this.mappedNumbers.push(num); this.mapsum += num } );

    //Using ajax
    const api$ = ajax({
      url: 'https://httpbin.org/delay/1',
      method: 'POST',
      headers: {'Content-Type': 'application/text' },
      body: "Hello World"
    });
    api$.subscribe(res => this.apiMessage = res.request.body);

    //Event
    const clickEvent$ = fromEvent(document, 'click');
    clickEvent$.subscribe( () => this.counter++);
  };
}

