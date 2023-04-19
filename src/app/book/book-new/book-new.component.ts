import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnDestroy{
  
  myBook = this.buildForm();
  bookApiSubscription = new Subscription();



constructor(private fb: FormBuilder,
  private bookApi: BookApiService){}


  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
    this.myBook.controls
  }


private buildForm() {
  return this.fb.nonNullable.group({
    isbn: ['', Validators.required],
    title: ['',Validators.required],
    author: ['', Validators.required],
    abstract: [''],
    cover: ['']
    
  });
  
}
  ngOnInit(): void {
    
  }
  createBook(){
    if(this.myBook.invalid) return;

    this.bookApiSubscription.add(
      this.bookApi.create(this.myBook.getRawValue()).subscribe())
      console.log(this.myBook.value);
    
  }
}
