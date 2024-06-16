import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacterViewModel } from '@core/view-models';
import {
  CharactersListGridComponent,
  FeedbackInfoComponent,
} from '@modules/characters/shared/components';

@Component({
  selector: 'rickmorty-characters-favorites-layout',
  standalone: true,
  imports: [CommonModule, CharactersListGridComponent, FeedbackInfoComponent],
  templateUrl: './characters-favorites-layout.component.html',
  styleUrl: './characters-favorites-layout.component.scss',
})
export class CharactersFavoritesLayoutComponent {
  @Input() characters: ICharacterViewModel[] = [];
  @Output() favoriteEvent = new EventEmitter<number>();
  @Output() navigateEvent = new EventEmitter<void>();

  onFavorite(index: number) {
    this.favoriteEvent.emit(index);
  }

  onNavigate() {
    this.navigateEvent.emit();
  }
}
