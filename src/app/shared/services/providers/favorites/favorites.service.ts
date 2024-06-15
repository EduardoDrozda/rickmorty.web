import { Injectable } from '@angular/core';
import { ICharacterViewModel } from '@core/view-models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites = new BehaviorSubject<ICharacterViewModel[]>([]);

  getFavorites(): Observable<ICharacterViewModel[]> {
    return this.favorites.asObservable();
  }

  getFavoritesValue(): ICharacterViewModel[] {
    return this.favorites.getValue();
  }

  addRemoveFavorite(character: ICharacterViewModel): void {
    if (character.isFavorite) {
      this.removeFavorite(character);
      return;
    }

    this.addFavorite(character);
  }

  private addFavorite(character: ICharacterViewModel): void {
    const currentFavorites = this.favorites.getValue();
    this.favorites.next([...currentFavorites, character]);
  }

  removeFavorite(character: ICharacterViewModel): void {
    const currentFavorites = this.favorites
      .getValue()
      .filter((item) => item.id !== character.id);

    this.favorites.next(currentFavorites);
  }
}
