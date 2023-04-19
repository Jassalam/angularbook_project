import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit{

  book$!: Observable<Book>;
  isbn!: string;
  title!: string;


  constructor(private route: ActivatedRoute, 
    private bookApi: BookApiService){}

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      switchMap(params  => this.bookApi.getBookByIsbn(params?.['isbn']))
      );
  }


  onSaveChange(ev: Book) {
    console.log('saved');
    
     }

}
