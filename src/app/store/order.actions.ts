import { createAction, props } from '@ngrx/store';
import { Order } from './order.model';

// Action to load orders
export const loadOrders = createAction('[Order] Load Orders');

// Action to load orders success
export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ orders: Order[] }>()
);
