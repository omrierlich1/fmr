import { Component } from '@angular/core';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';

@Component({
  selector: 'app-root',
  imports: [UserOrdersComponent],
  templateUrl: './app.component.html',
  standalone:true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}


