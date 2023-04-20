import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    const id = this.route.snapshot.paramMap.get('id')?.toString() || "-1";
    this.book = this.bookService.getBook(id)
  }

}
