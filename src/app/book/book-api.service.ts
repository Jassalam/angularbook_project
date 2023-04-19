import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  public books: Book[] =[];
  isbn: string='';
  private endpoint = 'http://localhost:4730';

  constructor(
    private httpClient: HttpClient,
  ) { }

  create(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(`${this.endpoint}/books/`, book);

  }
 
  getAll(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.endpoint}/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.endpoint}/books/${isbn}`);
  }

  save(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.endpoint}/books/${book.isbn}`, book);
  }
}

