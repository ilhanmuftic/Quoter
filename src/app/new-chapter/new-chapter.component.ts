import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChapterService } from '../chapter.service';
import { Chapter } from '../chapter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.scss']
})
export class NewChapterComponent implements OnInit {
  @Input() newChapterForm: FormGroup = new FormGroup({});
  book_id: string ="-1";

  constructor(
    private fb: FormBuilder,
    private chapterService: ChapterService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.newChapterForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required]
    });
    this.book_id = this.route.snapshot.paramMap.get('id')?.toString() || "-1"
  }

  onSubmit(): void {
    if(!this.newChapterForm) return;
    const newChapter: Chapter = {
      id: "-1",
      name: this.newChapterForm.value.name,
      book_id: this.book_id
    };
    this.chapterService.createChapter(newChapter);
    this.router.navigate(['/books', newChapter.book_id]);
  }
}
