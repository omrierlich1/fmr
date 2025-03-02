import { User } from './user.model';
import {Order} from './order.model';

export interface AppState {
  users: {
    entities: { [id: number]: User };
    selectedUserId: number | null;
  };
  orders: {
    entities: { [id: number]: Order };
  };
}
