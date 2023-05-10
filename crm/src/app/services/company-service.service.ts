import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompanyServiceService {
  constructor(private http: HttpClient) {}

  auth_token = '5|1dtIswglCUHvp8emcM0R3qZy0n9xcTGOzahE5dVE';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.auth_token}`,
    }),
  };

  url = 'http://localhost:8000/api/companies';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getCompanies(): Observable<any> {
    return this.http.get(this.url, this.httpOptions).pipe(
      tap((_) => console.log('fetched companies')),
      catchError(this.handleError('getCompanies', []))
    );
  }

  getCompany(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      tap((_) => console.log(`fetched company id=${id}`)),
      catchError(this.handleError(`getCompany id=${id}`))
    );
  }

  addCompany(company: any): Observable<any> {
    return this.http.post(this.url, company, this.httpOptions).pipe(
      tap((newCompany: any) =>
        console.log(`added company w/ id=${newCompany.id}`)
      ),
      catchError(this.handleError('addCompany'))
    );
  }

  updateCompany(company: any, id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, company, this.httpOptions).pipe(
      tap((_) => console.log(`updated company id=${company.id}`)),
      catchError(this.handleError<any>('updateCompany'))
    );
  }

  deleteCompany(id: any): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError('deleteCompany'))
    );
  }
}
