import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}
