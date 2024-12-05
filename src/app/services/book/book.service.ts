import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, IApiResponse } from '../../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  apiUrl: string = "https://localhost:7274/api/";

  addNewBook(obj:Book): Observable<IApiResponse>{
    return this.http.post<IApiResponse>(`${this.apiUrl}Books`, obj)
  }
  
  getAllBook(): Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiUrl}Books/GetList?PageIndex=0&PageSize=100`);
  }
  

}
