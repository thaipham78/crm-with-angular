import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactServiceService {
  constructor(private http: HttpClient) {}

  auth_token = '5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth_token}`,
    }),
  };

  url = 'http://localhost:8000/api/contacts';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getContacts(): Observable<any> {
    return this.http.get(this.url, this.httpOptions).pipe(
      tap((_) => console.log('fetched contacts')),
      catchError(this.handleError('getContacts', []))
    );
  }

  getContact(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched contact id=${id}`)),
      catchError(this.handleError(`getContact id=${id}`))
    );
  }

  addContact(contact: any): Observable<any> {
    return this.http.post(this.url, contact, this.httpOptions).pipe(
      tap((newContact: any) =>
        console.log(`added contact w/ id=${newContact.id}`)
      ),
      catchError(this.handleError('addContact'))
    );
  }

  updateContact(contact: any, id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, contact, this.httpOptions).pipe(
      tap((_) => console.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  deleteContact(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted contact id=${id}`)),
      catchError(this.handleError('deleteContact'))
    );
  }
}
