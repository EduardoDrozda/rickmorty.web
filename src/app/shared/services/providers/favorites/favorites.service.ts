import { Injectable } from '@angular/core';
import { ICharacterViewModel } from '@core/view-models';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites = new BehaviorSubject<ICharacterViewModel[]>([]);

  getFavorites(): Observable<ICharacterViewModel[]> {
    return this.favorites
      .asObservable()
      .pipe(map((favorites) => favorites.sort((a, b) => a.id - b.id)));
  }

  getFavoritesValue(): ICharacterViewModel[] {
    return this.favorites.getValue();
  }

  addRemoveFavorite(character: ICharacterViewModel): void {
    if (character.isFavorite) {
      this.removeFavorite(character.id);
      return;
    }

    this.addFavorite(character);
  }

  private addFavorite(character: ICharacterViewModel): void {
    const newCharacter = { ...character, isFavorite: true };
    const currentFavorites = this.favorites.getValue();
    this.favorites.next([...currentFavorites, newCharacter]);
  }

  removeFavorite(id: number): void {
    const currentFavorites = this.favorites.getValue();
    const filteredFavorites = currentFavorites.filter(
      (character) => character.id !== id
    );
    this.favorites.next(filteredFavorites);
  }
}
