import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chapter } from '../chapter.model';
import { Quote } from '../quote.model';
import { QuoteService } from '../quote.service';
import { Component, Input, OnInit } from '@angular/core';
import { ChapterService } from '../chapter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.scss']
})

export class NewQuoteComponent implements OnInit {
  @Input() newQuoteForm: FormGroup = new FormGroup({});
  chapter_id: string = "-1";
  book_id: string = "-1";

  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteService,
    private chapterService: ChapterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.newQuoteForm = this.fb.group({
      quote: ['', Validators.required],
      page: []
    });
    console.log('aa', this.route.snapshot)
    this.chapter_id = this.route.snapshot.url[3].path || "-1"
    console.log(this.chapter_id)
    this.book_id = this.route.snapshot.url[1].path || "-1"
  }

  onSubmit(): void {
    if(!this.newQuoteForm) return;
    const newQuote: Quote = {
      id:'-1',
      chapter_id: this.chapter_id,
      page: this.newQuoteForm.value.page,
      quote: this.newQuoteForm.value.quote
    };

    this.quoteService.createQuote(newQuote);
    let book = this.chapterService.getChapter(this.chapter_id).book_id
    this.router.navigate(['/books', book, 'chapters', this.chapter_id]);

    }
}