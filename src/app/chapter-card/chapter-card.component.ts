import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.scss']
})
export class ChapterCardComponent {
  @Input() chapter:any;
  
}
