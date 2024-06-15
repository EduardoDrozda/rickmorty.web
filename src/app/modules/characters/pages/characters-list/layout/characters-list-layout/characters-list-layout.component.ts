import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  CharactersCardComponent,
  FeedbackInfoComponent,
} from '@modules/characters/shared/components';
import { ICharacterViewModel } from '@core/view-models';
import { LoaderComponent } from '@shared/components';
import { InfiniteScrollDirective } from '@shared/directives/infinite-scroll';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'rickmorty-characters-list-layout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeedbackInfoComponent,
    LoaderComponent,
    CharactersCardComponent,
    InfiniteScrollDirective,
  ],
  templateUrl: './characters-list-layout.component.html',
  styleUrl: './characters-list-layout.component.scss',
})
export class CharactersListLayoutComponent {
  @Input() characters: ICharacterViewModel[] | null = [];
  @Input() isLoading = false;
  @Input() isLoadingMore = true;
  @Output() searchEvent = new EventEmitter<string>();
  @Output() scrollEndEvent = new EventEmitter<string>();
  @Output() favoriteEvent = new EventEmitter<ICharacterViewModel>();

  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe(() => {
        this.emitSearchEvent();
      });
  }

  emitSearchEvent(): void {
    const search = this.searchControl.value ?? '';
    this.searchEvent.emit(search);
  }

  onScrollEnd(): void {
    const search = this.searchControl.value ?? '';
    this.scrollEndEvent.emit(search);
  }

  trackByFn(index: number): number {
    return index;
  }

  onFavorite(index: number): void {
    const character: ICharacterViewModel = this.characters![index];
    this.favoriteEvent.emit(character);
    this.characters![index] = {
      ...character,
      isFavorite: !character.isFavorite,
    };
  }
}
