import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '../models/User.model';
import { RepositoryService } from './repository.service';
import { map, concatMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private usersUrl = 'api/users';
  private userSubject = new BehaviorSubject<IUser>({} as IUser);
  user = this.userSubject.asObservable();
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private repository: RepositoryService) {
    this.isAuthenticatedSubject.next(false);
  }

  private findUser(to: IUser, from: IUser[]): IUser {
    return from.find(user =>
      to.username == user.username &&
      to.password == user.password
    )
  }

  private getUsers(): Observable<IUser[]> {
    return this.repository.get<IUser[]>(this.usersUrl);
  }

  private addUser(user: IUser): Observable<IUser> {
    return this.repository.post<IUser>(this.usersUrl, user);
  }

  private updateUser(user: IUser): Observable<IUser> {
    return this.repository.put<IUser>(this.usersUrl, user);
  }

  private deleteUser(): Observable<{}> {
    const deleteUrl = `${this.usersUrl}/${this.userSubject.value.id}`;
    return this.repository.delete(deleteUrl);
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
            console.log('Successfully Login');
          }

          return true;
        })
      );
  }

  register(tryUser: IUser): Observable<boolean> {
    return this.getUsers()
      .pipe(
        concatMap(users => {
          const user = this.findUser(tryUser, users);

          if (user === undefined) {
            return this.addUser(tryUser)
              .pipe(
                map(newUser => {
                  this.isAuthenticatedSubject.next(true);
                  this.userSubject.next(newUser);
                  console.log('Successfully Registered');

                  return true;
                })
              );
          } else {
            return of(true);
          }
        })
      );
  }

  dismiss() {
    this.isAuthenticatedSubject.next(false);
    this.userSubject.next({} as IUser);
    console.log('Successfully Logout');
  }

  update(tryUser: IUser): Observable<boolean> {
    return this.updateUser(tryUser)
      .pipe(
        concatMap(_ => this.getUsers() //Gets Users again due to PUT returning null
          .pipe(
            map(users => {
              const user = this.findUser(tryUser, users);
              this.userSubject.next(user);
              console.log('Successfully Updated');

              return true;
            })
          ))
      )
  }

  delete(): Observable<boolean> {
    return this.deleteUser()
      .pipe(
        map(_ => {
          this.dismiss();
          console.log('Successfully Deleted');

          return true;
        })
      )
  }
}
