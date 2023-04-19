import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmLeaveGuard } from './confirm-leave.guard';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';


const routes: Routes =[
  {
    path: '',
    component: BookComponent
  },
  {
    path: 'details/:isbn',
    component: BookDetailComponent,
    canDeactivate: [ConfirmLeaveGuard]
  },
  {
    path: 'edit/:isbn',
    component: BookEditComponent,
  },
  {
    path: 'book-new', component: BookNewComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookRoutingModule { }
