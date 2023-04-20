import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
  @Input() newBookForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newBookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if(!this.newBookForm) return;
    const newBook: Book = {
      id:'-1',
      title: this.newBookForm.value.title,
      author: this.newBookForm.value.author
    };
    this.bookService.createBook(newBook);
    this.router.navigate(['/home']);
  }
}
