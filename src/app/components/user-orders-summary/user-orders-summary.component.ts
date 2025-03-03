import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {Order} from '../../store/order.model';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import { selectUserOrdersSummary} from '../../store/order.selectors';
import {User} from '../../store/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-orders-summary',
  standalone: true,
  templateUrl: './user-orders-summary.component.html',
  styleUrls: ['./user-orders-summary.component.scss'],
  imports: [
    AsyncPipe,
    CurrencyPipe
  ]
})
export class UserOrdersSummaryComponent implements OnChanges {
  @Input() user!: User;
  ordersSummery$?: Observable<{ total:number }>;

  constructor(private store: Store<AppState>) {
    this.ordersSummery$?.subscribe(res => console.log(res))
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user.id) {
      console.log('this.userId', this.user.id);
      this.ordersSummery$ = this.store.select(selectUserOrdersSummary(this.user.id));
    }
  }
}
