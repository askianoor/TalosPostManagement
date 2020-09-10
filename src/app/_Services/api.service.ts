import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

    // API path
    ApiPath = environment.ApiUrl;

    constructor(
      private router: Router,
      private http: HttpClient,
    ) {}

    // Http Options
    httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json',  Accept: 'application/json, text/plain, */*'})};

    HttpUploadOptions = { headers: new HttpHeaders({ Accept: 'application/json, text/plain, */*'})};

    // Handle API errors
    handleError(error: HttpErrorResponse): any{
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        Swal.fire({
          title: 'Network Error',
          text: 'Connection has been Lost!',
          icon: 'error'});
      } else {
        // The backend returned an unsuccessful response code.
        Swal.fire({
          title: ' ${error.status} System Error',
          text: 'Please try again later!',
          icon: 'error'});
      }

      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    }

    getPosts(): Observable<any> {
      return this.http.get<any>(this.ApiPath + 'Posts', this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    }

    getPostById(id): Observable<any> {
      return this.http.get<any>(this.ApiPath + 'Posts/' + id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    }

    createPost(body): Observable<any> {
      return this.http.post<any>(this.ApiPath + 'Posts/', JSON.stringify(body), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    }

    uploadPostImage(id, body): Observable<any> {
      return this.http.put<any>(this.ApiPath + 'Posts/' + id + '/picture', body, this.HttpUploadOptions)
      .pipe(
        catchError(this.handleError)
      );
    }
}
