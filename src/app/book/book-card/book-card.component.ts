import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() content!: Book;
  @Output() detailClick = new EventEmitter<Book>();

  customStyle = {
    color: 'blue'
  }
  
  handleDetailClicked(): void{
   this.detailClick.emit(this.content);
    
  }

  
}
