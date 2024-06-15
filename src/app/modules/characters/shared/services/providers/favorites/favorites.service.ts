import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICharacterViewModel } from '../../../interfaces/view-models';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites = new BehaviorSubject<ICharacterViewModel[]>([]);

  getFavorites(): Observable<ICharacterViewModel[]> {
    return this.favorites.asObservable();
  }

  addFavorite(character: ICharacterViewModel): void {
    const currentFavorites = this.favorites.getValue();
    this.favorites.next([...currentFavorites, character]);
  }

  removeFavorite(character: ICharacterViewModel): void {
    const currentFavorites = this.favorites.getValue();
    this.favorites.next(
      currentFavorites.filter((item) => item.id !== character.id)
    );
  }
}
