import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { IUser } from '../models/User.model';

@Injectable()
export class UserService {
  private usersUrl = 'api/users';
  private userSubject = new BehaviorSubject<IUser>({} as IUser);
  user = this.userSubject.asObservable();
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) { }

  authenticate(tryUser: IUser) {
    this.http.get<IUser[]>(this.usersUrl)
      .subscribe(users => {
        const found = users.find(user =>
          tryUser.username == user.username &&
          tryUser.password == user.password
        );

        if (found === undefined) {
          this.isAuthenticatedSubject.next(false);
        } else {
          this.isAuthenticatedSubject.next(true);
          this.userSubject.next(found);
        }
      });
  }

}
