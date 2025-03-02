import { createAction, props } from '@ngrx/store';
import { User } from './user.model';
import {UserDetails} from './user-detail.model';  // Make sure User is imported correctly

// Action for loading users (usually triggered by an effect)
export const loadUsers = createAction(
  '[User] Load Users');

// Action for successfully loading users
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

// Action for adding a user
export const addUser = createAction(
  '[User] Add User',
  props<{ user: User }>()
);

// Action for updating a user
export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);

// Action for deleting a user
export const deleteUser = createAction(
  '[User] Delete User',
  props<{ id: number }>()
);

export const setSelectedUser = createAction(
  '[User] Set Selected User',
  props<{ userId: number | null }>()
);

// Action to load user details
export const loadUserDetails = createAction(
  '[User] Load User Details',
  props<{ userId: number | null }>()
);

// Action dispatched on successful load of user details
export const loadUserDetailsSuccess = createAction(
  '[User] Load User Details Success',
  props<{ userDetails: UserDetails }>()
);

