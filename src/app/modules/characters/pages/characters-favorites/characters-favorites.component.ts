import { Component, inject } from '@angular/core';
import { CharactersFavoritesLayoutComponent } from './layout/';
import { FavoritesService } from '@shared/services/providers';
import { Observable } from 'rxjs';
import { ICharacterViewModel } from '@core/view-models';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'rickmorty-characters-favorites',
  standalone: true,
  imports: [CommonModule, CharactersFavoritesLayoutComponent],
  templateUrl: './characters-favorites.component.html',
  styleUrl: './characters-favorites.component.scss',
})
export class CharactersFavoritesComponent {
  private readonly favoritesService = inject(FavoritesService);
  private readonly router = inject(Router);
  favorites$: Observable<ICharacterViewModel[]>;

  constructor() {
    this.favorites$ = this.favoritesService.getFavorites();
  }

  removeFavorite(index: number): void {
    const character = this.favoritesService.getFavoritesValue()[index];
    this.favoritesService.removeFavorite(character.id);
  }

  navigateToCharacters(): void {
    this.router.navigate(['characters']);
  }
}
