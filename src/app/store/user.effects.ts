import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {switchMap, map, catchError} from 'rxjs/operators';
import { UserService } from '../services/user.service';
import {
  loadUsers,
  loadUsersSuccess,
  addUser,
  updateUser,
  loadUserDetails,
  loadUserDetailsSuccess
} from './user.actions';
import {AppState} from './app.state';
import {User} from './user.model';
import {of} from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<AppState>
  ) {}


  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users: User[]) => loadUsersSuccess({ users })),
        )
      )
    )
  );


  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap(({ user }) =>
        this.userService.addUser(user).pipe(
          map(newUser => updateUser({ user: newUser })),
        )
      )
    )
  );

  loadUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserDetails),
      switchMap((action) =>
        this.userService.getUserDetails(action.userId!).pipe(
          switchMap((userDetails) => {
            return of(loadUserDetailsSuccess({ userDetails }));
          })
        )
      )
    )
  );
}




