import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, of, subscribeOn, Subscriber} from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //first observable
    const interval$ = interval(1000);

    interval$.subscribe(val => console.log('stream 1' + val));

    const click$ = fromEvent(document, 'click');

    click$.subscribe(evt => console.log('Mouse is clicked'+ evt));

    //second observable
    const myObservable = of(1, 2, 3);

    const myObserver = {
      next: (x: number) => console.log('Observer got a next value: ' + x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    myObservable.subscribe(myObserver);

    //third observable
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
      complete() {console.log('done'); }
    });
    console.log('just after subscribe');
  }

}