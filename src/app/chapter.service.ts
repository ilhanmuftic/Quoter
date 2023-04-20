import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';


@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  chapters: Chapter[] = [{id:"0", name:"Chapter 1", number: 1, book_id:"0"}];

  getChapters(book_id: string): Chapter[] {
    console.log('b', book_id)
    let bchapters: Chapter[] | undefined;
    bchapters = this.chapters.filter((chapter) => {
      return chapter.book_id === book_id;
    })

    if(!bchapters) bchapters = [{id:"-1", name:"Chapter Not Found!", book_id:"-1"}]
    return bchapters;
  }

  getChapter(id: string): Chapter {
    console.log('a', id)
    let chapter: Chapter | undefined;
    chapter = this.chapters.find((chapter) => {
      return chapter.id === id;
    })

    if(!chapter) chapter = {id:"-1", name:"Chapter Not Found!", book_id:"-1"}
    return chapter;
  }

  createChapter(chapter: Chapter): void {
    // Generate a new ID for the chapter
    const newId = this.chapters.length.toString();
    chapter.id = newId;
 
    // Add the new chapter to the array of chapters
    this.chapters.push(chapter);
  }
}
