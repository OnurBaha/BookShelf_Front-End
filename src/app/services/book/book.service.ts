import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IApiResponse, AllBook, Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl: string = 'https://localhost:7274/api/';

  constructor(private http: HttpClient) {}

  addNewBook(obj: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}Books`, obj);
  }

  getAllBooks(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiUrl}Books/GetList?PageIndex=0&PageSize=10`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Kitaplar yüklenirken hata:', error.message || error);
    return throwError(error);
  }
}




