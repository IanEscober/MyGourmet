import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class RepositoryService {
    constructor(private http: HttpClient) { }

    private handleError(error: any) {
        if (error.error instanceof ErrorEvent) {
            console.error('Error from Client');
        } else {
            console.error('Error from Server');
        }

        return throwError(error.error);
    }

    get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(url, { params })
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    post<T>(url: string, data: T): Observable<T> {
        return this.http.post<T>(url, data)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    put<T>(url: string, data: T): Observable<T> {
        return this.http.put<T>(url, data)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }

    delete(url: string): Observable<{}> {
        return this.http.delete(url)
            .pipe(
                retry(3),
                catchError(this.handleError)
            );
    }
}