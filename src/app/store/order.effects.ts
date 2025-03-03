import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { OrderService } from '../services/order.service';
import { loadOrders, loadOrdersSuccess } from './order.actions';
import { Order } from './order.model';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService
  ) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrders),  // Listen for the 'loadOrders' action
      switchMap(() =>
        this.orderService.getOrders().pipe(  // Get orders for the user (mocked as userId = 1)
          map((orders: Order[]) => loadOrdersSuccess({ orders })),  // Dispatch loadOrdersSuccess with the orders
        )
      )
    )
  );
}
