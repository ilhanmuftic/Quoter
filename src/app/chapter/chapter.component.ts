import { Component, Input } from '@angular/core';
import { BookService } from '../book.service';
import { ChapterService } from '../chapter.service';
import { Book } from '../book.model';
import { Chapter } from '../chapter.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent {

  book: Book = new Book();
  chapter: Chapter = new Chapter();

  constructor(private bookService: BookService, private chapterService: ChapterService, private route: ActivatedRoute){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')?.toString() || "-1"
    this.chapter = this.chapterService.getChapter(id)
    if(this.chapter.book_id) this.book = this.bookService.getBook(this.chapter.book_id)
  }

}
