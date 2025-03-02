import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Order} from '../store/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private orders: Order[] = [
    { id: 1, userId: 1, total: 100 },
    { id: 2, userId: 1, total: 200 },
    { id: 3, userId: 2, total: 150 },
    { id: 4, userId: 2, total: 250 },
    { id: 5, userId: 3, total: 300 },
    { id: 6, userId: 3, total: 50 },
  ];

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }
}
