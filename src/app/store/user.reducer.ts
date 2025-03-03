import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  loadUsersSuccess,
  addUser,
  updateUser,
  setSelectedUser,
  loadUserDetailsSuccess
} from './user.actions';
import { User } from './user.model';

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
}

export const userAdapter = createEntityAdapter<User>();

export const initialState: UserState = {
  ...userAdapter.getInitialState(),
  selectedUserId: null,
};

export const userReducer = createReducer(
  initialState,

  on(loadUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, state)
  ),

  on(addUser, (state, { user }) =>
    userAdapter.addOne(user, state)
  ),

  on(updateUser, (state, { user }) =>
    userAdapter.updateOne({ id: user.id, changes: user }, state)
  ),

  on(setSelectedUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId
  })),

  on(loadUserDetailsSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails,
    error: null
  }))
);
