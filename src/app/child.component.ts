import { Component, OnInit } from '@angular/core';
import { UntilOnDestroy } from 'ngx-until-on-destroy';
import { NEVER, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  template: `<p>child: {{id}}</p>`,
})
export class ChildComponent implements OnInit {
  id: string;

  ngOnInit() {
    this.id = Math.random().toString().slice(-3);
    this.sub1();
    this.sub2();
  }

  @UntilOnDestroy()
  sub1(): Subscription {
    console.log(this.id, 'sub1 subscribe');
    return NEVER.pipe(
      finalize(() => console.log(this.id, 'sub1 unsubscribe'))
    )
      .subscribe();
  }

  sub2(): Subscription {
    console.log(this.id, 'sub2 subscribe');
    return NEVER.pipe(
      finalize(() => console.log(this.id, 'sub2 unsubscribe'))
    )
      .subscribe();
  }
}
