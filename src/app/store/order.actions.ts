import { createAction, props } from '@ngrx/store';
import { Order } from './order.model';

export const loadOrders = createAction('[Order] Load Orders');

export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ orders: Order[] }>()
);
