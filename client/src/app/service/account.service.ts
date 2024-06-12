import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl: string = 'https://localhost:5001/api/';

  http: HttpClient = inject(HttpClient);

  private currentUserSource = new BehaviorSubject<User | null>(null);

  public currentUser$ = this.currentUserSource.asObservable;

  constructor() {
    const localUser = window.localStorage.getItem('user');
    if (localUser) {
      const user = JSON.parse(localUser) as User;
      this.currentUserSource.next(user);
    }
  }

  login(model: {username: string, password: string}): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map( (response: User) => {
        const user = response;
        if (user) {
          window.localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      }),
    );
  }
}
