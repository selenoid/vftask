import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private MOCK_SERVER_URL = 'https://jsonplaceholder.typicode.com/posts';
  private SERVER_URL = 'http://localhost:3000/';
  postId: any;
  errorMessage: any;
  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

   sendPostRequest(name: string, status: string): Observable<any> {
    const headers = { Authorization: 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { name: '' + name, status: '' + status };
    return this.httpClient.post<any>(this.MOCK_SERVER_URL, body, { headers });
  }

  sendDeleteItemRequest(listItemId: string): Observable<any> {
    const headers = { Authorization: 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { listItemId: '' + listItemId};
    return this.httpClient.post<any>(this.MOCK_SERVER_URL, body, { headers });
  }

  sendStatusChangedItemRequest(listItemId: string, status: string): Observable<any> {
    const headers = { Authorization: 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { listItemId: '' + listItemId, status: '' + status };
    return this.httpClient.post<any>(this.MOCK_SERVER_URL, body, { headers });
  }

  sendStatusChange(id: string, status: string) {

    const headers = { Authorization: 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { id: '' + id, status: '' + status };
    return this.httpClient.post<any>(this.MOCK_SERVER_URL, body, { headers });
  }

  public sendGetRequest() {
    return this.httpClient.get(`${this.SERVER_URL}products`).pipe(catchError(this.handleError));
  }

  public getTodos() {
    return this.httpClient.get(`${this.SERVER_URL}todos`).pipe(catchError(this.handleError));
  }
}
