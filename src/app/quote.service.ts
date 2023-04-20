import { Injectable } from '@angular/core';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quotes: Quote[] = [{id:"0", name:"Quote 1", chapter_id:"0", page: 1, quote: "Ko rano rani, ne naspava se."}];

  getQuotes(chapter_id: string): Quote[] {
    console.log('b', chapter_id)
    let cquotes: Quote[] | undefined;
    cquotes = this.quotes.filter((quote) => {
      return quote.chapter_id === chapter_id;
    })

    if(!cquotes) cquotes = [{id:"-1", chapter_id:"-1", quote: "Quote Not Found!"}]
    return cquotes;
  }

  getQuote(id: string): Quote {
    console.log('a', id)
    let quote: Quote | undefined;
    quote = this.quotes.find((quote) => {
      return quote.id === id;
    })

    if(!quote) quote = {id:"-1", quote:"Quote Not Found!", chapter_id:"-1"}
    return quote;
  }

  createQuote(quote: Quote): void {
    // Generate a new ID for the quote
    const newId = this.quotes.length.toString();
    quote.id = newId;
 
    // Add the new quote to the array of quotes
    this.quotes.push(quote);
    console.log(this.quotes)
  }
}
