import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewBookComponent } from './new-book/new-book.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCardComponent } from './book-card/book-card.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterCardComponent } from './chapter-card/chapter-card.component';
import { ChapterComponent } from './chapter/chapter.component';
import { NewChapterComponent } from './new-chapter/new-chapter.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewBookComponent,
    BookComponent,
    BookListComponent,
    BookCardComponent,
    QuoteListComponent,
    QuoteComponent,
    QuoteCardComponent,
    ChapterListComponent,
    ChapterCardComponent,
    ChapterComponent,
    NewChapterComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
