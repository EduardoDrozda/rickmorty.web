import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CharactersListLayoutComponent } from './layout/characters-list-layout';
import {
  CharactersService,
  FavoritesService,
} from '@modules/characters/shared/services/providers';
import { Observable, finalize } from 'rxjs';
import { ICharacterViewModel } from '@modules/characters/shared/interfaces/view-models';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'rickmorty-characters-list',
  standalone: true,
  imports: [CommonModule, CharactersListLayoutComponent],
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent implements OnInit {
  private readonly charactersService = inject(CharactersService);
  private readonly favoritesService = inject(FavoritesService);

  private destroyRef = inject(DestroyRef);
  private page = 1;

  isLoading = false;
  characters: ICharacterViewModel[] = [];

  ngOnInit(): void {
    this.getCharacterByName('');
  }

  getCharacterByName(name: string): void {
    this.characters = [];
    this.page = 1;
    this.isLoading = true;
    this.getCharacters({ name, page: this.page.toString() })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (characters) => (this.characters = characters),
        error: (error) => console.error(error),
      });
  }

  getMoreCharacters(name: string): void {
    this.page++;
    this.getCharacters({ page: this.page.toString(), name }).subscribe({
      next: (characters) => this.characters.push(...characters),
      error: (error) => console.error(error),
    });
  }

  private getCharacters(
    filter?: Record<string, string>
  ): Observable<ICharacterViewModel[]> {
    return this.charactersService
      .getCharacters(filter)
      .pipe(takeUntilDestroyed(this.destroyRef));
  }

  onFavorite(character: ICharacterViewModel): void {
    this.favoritesService.addRemoveFavorite(character);
  }
}
