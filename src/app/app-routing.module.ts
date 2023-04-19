import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes= [
  {path: '', pathMatch: 'full', redirectTo: '/about'},
  {path: 'books',
    loadChildren: ()=> import('./book/book.module').then(module => module.BookModule) 
  },
  {path: 'about', component: AboutComponent},
  {path: '**', component: PagenotfoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
