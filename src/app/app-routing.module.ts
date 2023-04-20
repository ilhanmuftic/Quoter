import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookComponent } from './book/book.component';
import { ChapterComponent } from './chapter/chapter.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { NewChapterComponent } from './new-chapter/new-chapter.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'books/:id', component: BookComponent },
  { path: 'books/:id/chapters/:chapter_id', component: ChapterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'new-book', component: NewBookComponent },
  { path: 'books/:id/new-chapter', component: NewChapterComponent },
  { path: 'books/:id/chapters/:chapter_id/new-quote', component: NewQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
