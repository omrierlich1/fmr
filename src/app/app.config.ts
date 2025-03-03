import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideEffects} from '@ngrx/effects';
import {UserEffects} from './store/user.effects';
import {provideStore} from '@ngrx/store';
import {userReducer} from './store/user.reducer';
import {OrderEffects} from './store/order.effects';
import {orderReducer} from './store/order.reducer';

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideEffects(UserEffects, OrderEffects),
      provideStore({
        users:userReducer,
        orders: orderReducer
      })
    ]
};
