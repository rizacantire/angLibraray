import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = "https://localhost:5001/api/books/getall";
  constructor(private httpClient:HttpClient) { }

  getBooks():Observable<ListResponseModel<Book>>{
    let newPath = this.apiUrl + "books/getall"
    return this.httpClient.get<ListResponseModel<Book>>(this.apiUrl);
  }
}
