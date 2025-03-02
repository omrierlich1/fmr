import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userAdapter, UserState } from './user.reducer';

export const selectUserState =
  createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  userAdapter.getSelectors().selectAll
);

export const selectSelectedUser = createSelector(
  selectUserState,
  (state) => state.selectedUserId ? state.entities[state.selectedUserId] : null
);
