import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectAllUsers, selectSelectedUser} from '../../store/user.selectors';
import {AppState} from '../../store/app.state';
import {User} from '../../store/user.model';
import {updateUser, addUser, setSelectedUser, loadUsers, loadUserDetails} from '../../store/user.actions';
import {UserNameComponent} from '../user-name/user-name.component';
import {UserOrdersSummaryComponent} from '../user-orders-summary/user-orders-summary.component';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {loadOrders} from '../../store/order.actions';

@Component({
  selector: 'app-user-orders',
  standalone: true,
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
  imports: [
    UserNameComponent,
    UserOrdersSummaryComponent,
    AsyncPipe,
    FormsModule,
    NgForOf,
    NgIf
  ]
})
export class UserOrdersComponent {
  selectedUser$ = this.store.select(selectSelectedUser);
  userName: string = '';
  users$ = this.store.select(selectAllUsers);
  selectedUserId: number | null = null;

  constructor(private store: Store<AppState>) {
    store.dispatch(loadUsers());
    store.dispatch(loadOrders());
    this.users$.subscribe(()=>{
      this.selectedUserId = 1;
      this.changeUser(this.selectedUserId);
    })
  }

  changeUser(userId: number | null) {
    this.store.dispatch(loadUserDetails({ userId })); // Dispatch action to load user details
    this.store.dispatch(setSelectedUser({ userId }));
  }

  addUser() {
    if (this.userName.trim()) {
      const newUser: User = { id: Date.now(), name: this.userName };
      this.store.dispatch(addUser({ user: newUser }));
      this.userName = '';
    }
  }
}
