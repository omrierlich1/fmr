import { Injectable } from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {User} from '../store/user.model';
import {UserDetails} from '../store/user-detail.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Brown' },
  ];

  // Simulate an API call to get users
  getUsers(): Observable<User[]> {
    return of(this.users);  // Return mock data
  }

  // Simulate an API call to add a user
  addUser(user: User): Observable<User> {
    const newUser = { ...user, id: Math.max(...this.users.map(u => u.id)) + 1 };  // Simulate generating a new user ID
    return of(newUser);
  }

  getUserDetails(id:number){
    const userDetail:UserDetails = {
      address: 'london'
    }
    return of(userDetail).pipe(delay(1000));
  }
}
