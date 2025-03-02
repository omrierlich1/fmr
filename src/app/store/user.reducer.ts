import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  loadUsersSuccess,
  addUser,
  updateUser,
  deleteUser,
  setSelectedUser,
  loadUserDetailsSuccess
} from './user.actions';  // Import actions
import { User } from './user.model';  // Ensure User model is imported

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;  // The selected user ID, nullable
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
    userAdapter.updateOne({ id: user.id, changes: user }, state) // Updates the user data
  ),

  // Handling deleteUser action, removing a user from the state by id
  on(deleteUser, (state, { id }) =>
    userAdapter.removeOne(id, state) // Removes the user by id
  ),

  on(setSelectedUser, (state, { userId }) => ({
    ...state,
    selectedUserId: userId  // Update only the selectedUserId
  })),

  on(loadUserDetailsSuccess, (state, { userDetails }) => ({
    ...state,
    userDetails,
    error: null
  }))
);
