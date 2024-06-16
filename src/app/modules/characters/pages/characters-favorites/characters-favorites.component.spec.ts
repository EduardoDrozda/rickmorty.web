import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFavoritesComponent } from './characters-favorites.component';
import { Router } from '@angular/router';
import { FavoritesService } from '@shared/services/providers';
import { CHARACTERS_MOCK_VIEW_MODEL } from '@shared/mocks/characters';

describe('CharactersFavoritesComponent', () => {
  let component: CharactersFavoritesComponent;
  let fixture: ComponentFixture<CharactersFavoritesComponent>;

  let favoritesService: FavoritesService;

  const routerMock = {
    navigate: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersFavoritesComponent],
      providers: [{ provide: Router, useValue: routerMock }, FavoritesService],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersFavoritesComponent);
    favoritesService = TestBed.inject(FavoritesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize favorites$ with values from FavoritesService', (done) => {
    favoritesService.addRemoveFavorite(CHARACTERS_MOCK_VIEW_MODEL[0]);
    favoritesService.addRemoveFavorite(CHARACTERS_MOCK_VIEW_MODEL[1]);
    component.favorites$.subscribe((favorites) => {
      expect(favorites.length).toBe(2);
      expect(favorites[0].id).toEqual(CHARACTERS_MOCK_VIEW_MODEL[0].id);
      expect(favorites[1].id).toEqual(CHARACTERS_MOCK_VIEW_MODEL[1].id);
      done();
    });
  });

  it('should call removeFavorite on FavoritesService with the correct id', () => {
    favoritesService.addRemoveFavorite(CHARACTERS_MOCK_VIEW_MODEL[0]);
    favoritesService.addRemoveFavorite(CHARACTERS_MOCK_VIEW_MODEL[1]);

    component.removeFavorite(1);

    expect(favoritesService.getFavoritesValue().length).toBe(1);
  });

  it('should call router.navigate when navigateToCharacters is called', () => {
    component.navigateToCharacters();
    expect(routerMock.navigate).toHaveBeenCalledWith(['characters']);
  });
});
