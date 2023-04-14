import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent{
  title = 'First bootcamp';
  bookSearchTerm: string ='';

   books: Book[] = [];

   constructor( private bookApiService: BookApiService,){
    this.books = this.bookApiService.getAll(); 
  }

  

   handleEmitFromChild(evt: Book){
    console.log(evt);
   }

   updateSearchBook(input: Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
   }

}
