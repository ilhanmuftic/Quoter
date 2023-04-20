import { Component, Input } from '@angular/core';
import { QuoteService } from '../quote.service';
import { Quote } from '../quote.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent {
  @Input() chapter_id: string="-1";

  quotes: Quote[] = [];
  url: string = "/home";

  constructor(private quoteService: QuoteService, private route:ActivatedRoute){}

  ngOnInit(){
    let book_id = this.route.snapshot.url[1].path || "-1";
    this.quotes = this.quoteService.getQuotes(this.chapter_id);
    this.url = "/books/" + book_id + "/chapters/" + this.chapter_id
  }
}
