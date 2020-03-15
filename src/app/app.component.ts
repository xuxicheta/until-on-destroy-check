import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button #b (click)="b.toggle = !b.toggle">toggle</button>
    <app-child *ngIf="b.toggle"></app-child>
  `,
})
export class AppComponent {}
