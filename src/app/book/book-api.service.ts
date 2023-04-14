import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  public books: Book[] =[
    {title: 'MyBook',
    author: 'Jas Kaur',
    abstract: 'Book my fav places'},
    {title: 'India',
    author: 'Braham',
    abstract: 'Explore india'},
  ]

  constructor() { }
 
  getAll(){
    return this.books;
  }
}

