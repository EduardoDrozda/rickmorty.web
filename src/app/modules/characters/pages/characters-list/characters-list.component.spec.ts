import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListComponent } from './characters-list.component';
import { FavoritesService } from '@shared/services/providers';
import { CharactersService } from '@modules/characters/shared/services/providers';
import { of, throwError } from 'rxjs';
import { CHARACTERS_MOCK_VIEW_MODEL } from '@shared/mocks/characters';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  const charactersService = {
    getCharacters: jest.fn().mockReturnValue(of(CHARACTERS_MOCK_VIEW_MODEL)),
  };

  let favoritesService: FavoritesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListComponent],
      providers: [
        {
          provide: CharactersService,
          useValue: charactersService,
        },
        FavoritesService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListComponent);
    favoritesService = TestBed.inject(FavoritesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get characters onInit', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(of(CHARACTERS_MOCK_VIEW_MODEL));

    component.ngOnInit();
    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: '',
      page: '1',
    });

    expect(component.characters.length).toEqual(5);
  });

  it('should get characters throw error', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(throwError(() => 'Error'));

    jest.spyOn(console, 'error').mockImplementation(() => {
      return 'Error';
    });

    component.getCharacterByName('');
    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: '',
      page: '1',
    });

    expect(console.error).toHaveBeenCalled();
  });

  it('should get characters by name', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(of(CHARACTERS_MOCK_VIEW_MODEL));

    component.getCharacterByName('Rick');
    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: 'Rick',
      page: '1',
    });

    expect(component.characters.length).toEqual(5);
  });

  it('should get characters by name with favorites', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(of(CHARACTERS_MOCK_VIEW_MODEL));

    component.onFavorite(CHARACTERS_MOCK_VIEW_MODEL[0]);
    component.onFavorite(CHARACTERS_MOCK_VIEW_MODEL[1]);
    component.getCharacterByName('Rick');
    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: 'Rick',
      page: '1',
    });

    expect(component.characters.length).toEqual(5);
    expect(component.characters[0].isFavorite).toBeTruthy();
    expect(component.characters[1].isFavorite).toBeTruthy();
  });

  it('should get more characters', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(of(CHARACTERS_MOCK_VIEW_MODEL));

    component.getMoreCharacters('');

    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: '',
      page: '2',
    });

    expect(component.characters.length).toEqual(10);
  });

  it('should get more characters by name with favorites', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(of(CHARACTERS_MOCK_VIEW_MODEL));

    component.onFavorite(CHARACTERS_MOCK_VIEW_MODEL[0]);
    component.onFavorite(CHARACTERS_MOCK_VIEW_MODEL[1]);

    component.getMoreCharacters('Rick');
    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: 'Rick',
      page: '2',
    });

    expect(component.characters.length).toEqual(10);
    expect(component.characters[5].isFavorite).toBeTruthy();
    expect(component.characters[6].isFavorite).toBeTruthy();
  });

  it('should get more characters with name', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(of(CHARACTERS_MOCK_VIEW_MODEL));

    component.getMoreCharacters('Rick');

    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: 'Rick',
      page: '2',
    });

    expect(component.characters.length).toEqual(10);
  });

  it('should get more characters throw error', () => {
    jest
      .spyOn(charactersService, 'getCharacters')
      .mockReturnValue(throwError(() => 'Error'));

    jest.spyOn(console, 'error').mockImplementation(() => {
      return 'Error'
    });

    component.getMoreCharacters('Rick');
    expect(charactersService.getCharacters).toHaveBeenCalled();
    expect(charactersService.getCharacters).toHaveBeenCalledWith({
      name: 'Rick',
      page: '2',
    });

    expect(console.error).toHaveBeenCalled();
  });

  it('should get favorites characters', () => {
    component.onFavorite(CHARACTERS_MOCK_VIEW_MODEL[0]);
    expect(favoritesService.getFavoritesValue().length).toBe(1);

    component.onFavorite(CHARACTERS_MOCK_VIEW_MODEL[1]);
    expect(favoritesService.getFavoritesValue().length).toBe(2);
  });
});
