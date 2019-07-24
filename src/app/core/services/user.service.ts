import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/User.model';
import { RepositoryService } from './repository.service';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  private usersUrl = 'api/users';
  private userSubject = new BehaviorSubject<IUser>({} as IUser);
  user = this.userSubject.asObservable();
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private repository: RepositoryService) { 
    this.isAuthenticatedSubject.next(false);
  }

  private getUsers(): Observable<IUser[]> {
    return this.repository.get<IUser[]>(this.usersUrl);
  }

  private findUser(to: IUser, from: IUser[]): IUser {
    return from.find(user =>
      to.username == user.username &&
      to.password == user.password
    )
  }

  private addUser(user: IUser): Observable<IUser> {
    return this.repository.post<IUser>(this.usersUrl, user);
  }

  authenticate(tryUser: IUser): Observable<boolean> {
    return this.getUsers()
      .pipe(
        map(users => {
          const user = this.findUser(tryUser, users);

          if (user === undefined) {
            this.isAuthenticatedSubject.next(false);
          } else {
            this.isAuthenticatedSubject.next(true);
            this.userSubject.next(user);
          }

          return true;
        })
      );
  }

  register(tryUser: IUser): Observable<boolean> {
    return this.getUsers()
      .pipe(
        map(users => {
          const user = this.findUser(tryUser, users);

          if (user === undefined) {
            this.addUser(tryUser)
              .subscribe(newUser => {
                this.isAuthenticatedSubject.next(true);
                this.userSubject.next(newUser);
              });
          } else {
            this.isAuthenticatedSubject.next(false);
          }
          
          return true;
        })
      );
  }

  dismiss() {
    this.isAuthenticatedSubject.next(false);
    this.userSubject.next({} as IUser);
  }
}
