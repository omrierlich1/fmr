import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {switchMap, map, catchError} from 'rxjs/operators';
import { UserService } from '../services/user.service';  // The service for making API calls
import {
  loadUsers,
  loadUsersSuccess,
  addUser,
  updateUser,
  deleteUser,
  loadUserDetails,
  loadUserDetailsSuccess
} from './user.actions';
import {AppState} from './app.state';
import {User} from './user.model';
import {of} from 'rxjs';  // Import the actions

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  // Effect for loading users
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers), // Listen for the 'loadUsers' action
      switchMap(() =>
        this.userService.getUsers().pipe(  // Call the API service to get users
          map((users: User[]) => loadUsersSuccess({ users })),  // On success, dispatch the 'loadUsersSuccess' action
        )
      )
    )
  );

  // Effect for adding a user
  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser), // Listen for the 'addUser' action
      switchMap(({ user }) =>
        this.userService.addUser(user).pipe(  // Call the API service to add the user
          map(newUser => updateUser({ user: newUser })),  // On success, dispatch 'updateUser' with the new user
        )
      )
    )
  );

  // Effect for deleting a user
  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),  // Listen for the 'deleteUser' action
      switchMap(({ id }) =>
        this.userService.deleteUser(id).pipe(  // Call the API service to delete the user
          map(() => loadUsers()),  // After deleting, reload the users
        )
      )
    )
  );

  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetails),  // Listen for the loadUserDetails action
      switchMap((action) =>
        this.userService.getUserDetails(action.userId!).pipe( // Call your API
          switchMap((userDetails) => {
            // Dispatch success action with the fetched user details
            return of(loadUserDetailsSuccess({ userDetails }));
          })
        )
      )
    )
  );
}




