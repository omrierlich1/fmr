import { createAction, props } from '@ngrx/store';
import { User } from './user.model';
import {UserDetails} from './user-detail.model';

export const loadUsers = createAction(
  '[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: User[] }>()
);

export const addUser = createAction(
  '[User] Add User',
  props<{ user: User }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);

export const setSelectedUser = createAction(
  '[User] Set Selected User',
  props<{ userId: number | null }>()
);

export const loadUserDetails = createAction(
  '[User] Load User Details',
  props<{ userId: number | null }>()
);

export const loadUserDetailsSuccess = createAction(
  '[User] Load User Details Success',
  props<{ userDetails: UserDetails }>()
);

