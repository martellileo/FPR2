import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-filho',
  imports: [AsyncPipe],
  templateUrl: './filho.html',
  styleUrl: './filho.css',
})
export class Filho implements OnDestroy {

  protected values = interval(1000);
  private id = Math.floor(Math.random() * 100);

  private sub = new Subscription();

  constructor() {
    this.sub = this.values.subscribe(() => {
      console.log(`Código: ${this.id} ainda imprimindo.`);
    })
  }

  ngOnDestroy(): void {
    console.log('onDestroy')
    this.sub.unsubscribe();
  }
}