import { Component, Input } from '@angular/core';
import { Chapter } from '../chapter.model';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.scss']
})
export class ChapterListComponent {
  @Input() book_id: string = "-1";
  chapters: Chapter[] = [];

  constructor(private chapterService:ChapterService){}

  ngOnInit(){
    this.chapters = this.chapterService.getChapters(this.book_id)
    console.log(this.chapters)
  }
}
