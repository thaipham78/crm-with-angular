import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  auth_token = '5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth_token}`,
    }),
  };
  url = 'http://localhost:8000/api/users';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getUsers(): Observable<any> {
    return this.http.get(this.url, this.httpOptions).pipe(
      tap((_) => console.log('fetched Users')),
      catchError(this.handleError('getUsers', []))
    );
  }

  getUser(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched User id=${id}`)),
      catchError(this.handleError(`getUser id=${id}`))
    );
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.url + '/create', user, this.httpOptions).pipe(
      tap((newUser: any) => console.log(`added User w/ id=${newUser.id}`)),
      catchError(this.handleError('addUser'))
    );
  }

  updateUser(user: any, id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, user, this.httpOptions).pipe(
      tap((_) => console.log(`updated User id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  deleteContact(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted user id=${id}`)),
      catchError(this.handleError('deleteuser'))
    );
  }
}
