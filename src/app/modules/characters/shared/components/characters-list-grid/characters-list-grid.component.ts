import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacterViewModel } from '@core/view-models';
import { CharactersCardComponent } from '../characters-card';
import { FeedbackInfoComponent } from '../feedback-info';
import { InfiniteScrollDirective } from '@shared/directives/infinite-scroll';

@Component({
  selector: 'rickmorty-characters-list-grid',
  standalone: true,
  imports: [
    CommonModule,
    CharactersCardComponent,
    FeedbackInfoComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './characters-list-grid.component.html',
  styleUrl: './characters-list-grid.component.scss',
})
export class CharactersListGridComponent {
  @Input() characters: ICharacterViewModel[] = [];
  @Input() enableInfiniteScroll = false;
  @Output() scrollEndEvent = new EventEmitter<string>();
  @Output() favoriteEvent = new EventEmitter<number>();

  trackByFn(index: number, character: ICharacterViewModel): number {
    return character.id;
  }

  onFavorite(index: number): void {
    this.favoriteEvent.emit(index);
  }

  onScrollEnd(): void {
    console.log('onScrollEnd');
    if (!this.enableInfiniteScroll) return;
    this.scrollEndEvent.emit();
  }
}
