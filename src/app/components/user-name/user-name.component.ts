import { Component, Input } from '@angular/core';
import {User} from '../../store/user.model';

@Component({
  selector: 'app-user-name',
  standalone: true,
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css'],
})
export class UserNameComponent {
  @Input() user!: User;
}
