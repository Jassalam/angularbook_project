import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from './book';
import { BookApiService } from './book-api.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{
  title = 'First bootcamp';
  bookSearchTerm: string ='';
  private subscription = Subscription.EMPTY;

   books$!: Observable<Book[]> | null;

   constructor( private bookApiService: BookApiService, 
     private router: Router){
     
  }
  
  ngOnInit(): void {
     this.books$ = this.bookApiService.getAll(); 
  }

  

   handleEmitFromChild(evt: Book){
    console.log(evt);
   }

   updateSearchBook(input: Event){
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
   }

   goToBookDetails(book: Book) {
    this.router.navigate(['books', 'details', book.isbn]);
  }
    

   

}
