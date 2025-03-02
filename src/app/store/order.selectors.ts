import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Order} from './order.model';
import {OrderState} from './order.reducer';

export const selectOrderState =
  createFeatureSelector<OrderState>('orders');

export const selectOrdersByUser = (userId: number) =>
  createSelector(selectOrderState, (state: OrderState): Order[] => {
    // Ensure it returns an array of orders for the given userId
    console.log('selectOrdersByUser', userId, state);
    return Object.values(state.entities).filter(
      (order) => order?.userId === userId
    ) as Order[];
  });
export const selectUserOrdersSummary = (userId: number) =>
  createSelector(selectOrdersByUser(userId), (orders: Order[]) => {
    console.log('selectUserOrdersSummary', orders);
    const total = orders.reduce((sum, order) => sum + order.total, 0);
    return { total };
  });

