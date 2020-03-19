import { Directive, OnInit } from '@angular/core';
import { UntilOnDestroy } from 'ngx-until-on-destroy';
import { Subscription, NEVER } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective implements OnInit {

  constructor() { }

  @UntilOnDestroy()
  sub1(): Subscription {
    console.log('Directive decorated subscribe');
    return NEVER.pipe(
      finalize(() => console.log('Directive decorated unsubscribe'))
    )
      .subscribe();
  }

  ngOnInit() {
    this.sub1();
  }

}
