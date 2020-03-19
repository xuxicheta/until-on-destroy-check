import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button #a (click)="a.toggle = !a.toggle">toggle a</button>
    <app-child appChild *ngIf="a.toggle"></app-child>
    <p></p>
    <button #b (click)="b.toggle = !b.toggle">toggle b</button>
    <app-child appChild *ngIf="b.toggle"></app-child>
  `,
})
export class AppComponent {}
