import { createReducer, on } from '@ngrx/store';
import { loadOrdersSuccess } from './order.actions';
import { Order } from './order.model';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {User} from './user.model';

export interface OrderState extends EntityState<Order>{}

export const orderAdapter = createEntityAdapter<Order>();

export const initialState: OrderState = orderAdapter.getInitialState();

export const orderReducer = createReducer(
  initialState,
  on(loadOrdersSuccess, (state, { orders }) => {
    return orderAdapter.setAll(orders, state);
  })
);
