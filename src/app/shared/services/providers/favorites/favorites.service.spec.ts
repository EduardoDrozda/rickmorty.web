import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { CHARACTERS_MOCK_VIEW_MODEL } from '@shared/mocks/characters';
import { take } from 'rxjs';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add a favorite', () => {
    const characterMock = { ...CHARACTERS_MOCK_VIEW_MODEL[0] };
    service.addRemoveFavorite(characterMock);

    const favorites = service.getFavoritesValue();

    expect(favorites.length).toBe(1);
    expect(favorites[0].id).toBe(characterMock.id);
    expect(favorites[0].isFavorite).toBe(true);
  });

  it('should remove a favorite', () => {
    const characterMock = { ...CHARACTERS_MOCK_VIEW_MODEL[0] };
    characterMock.isFavorite = true;

    service.addRemoveFavorite(characterMock);

    const favorites = service.getFavoritesValue();

    expect(favorites.length).toBe(0);
  });

  it('should remove middle favorite on the list', () => {
    const charactersMock = [...CHARACTERS_MOCK_VIEW_MODEL];
    const result = charactersMock.map((character) => {
      service.addRemoveFavorite(character);
      character.isFavorite = true;
      return character;
    });

    service.addRemoveFavorite(result[1]);

    const favorites = service.getFavoritesValue();

    expect(favorites.length).toBe(4);
    expect(favorites[0].id).toBe(charactersMock[0].id);
    expect(favorites[1].id).toBe(charactersMock[2].id);
  });

  it('should return favorites sorted by id', () => {
    const charactersMock = [...CHARACTERS_MOCK_VIEW_MODEL];
    charactersMock.reverse();

    charactersMock.forEach((character) => {
      character.isFavorite = false;
      service.addRemoveFavorite(character);
    });

    service
      .getFavorites()
      .pipe(take(1))
      .subscribe((favorites) => {
        expect(favorites.length).toBe(5);
        expect(favorites[0].id).toBe(charactersMock[0].id);
        expect(favorites[1].id).toBe(charactersMock[1].id);
        expect(favorites[2].id).toBe(charactersMock[2].id);
        expect(favorites[3].id).toBe(charactersMock[3].id);
        expect(favorites[4].id).toBe(charactersMock[4].id);
      });
  });
});
