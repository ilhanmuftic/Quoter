import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  books: Book[] = [{id:"0", title:"Knjiga", author:"Meho"}];

  constructor() { }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(id: string): Book {
    console.log('a', id)
    let book: Book | undefined;
    book = this.books.find((book) => {
      return book.id === id;
    })

    if(!book) book = {id:"-1", title:"Book Not Found!", author:"Server"}
    return book;
  }

  createBook(book: Book): void {
    // Generate a new ID for the book
    const newId = this.books.length.toString();
    book.id = newId;
 
    // Add the new book to the array of books
    this.books.push(book);
  }


}
