import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { CharactersListLayoutComponent } from './characters-list-layout.component';
import { ICharacterViewModel } from '@core/view-models';
import { CHARACTERS_MOCK_VIEW_MODEL } from '@shared/mocks/characters';

describe('CharactersListLayoutComponent', () => {
  let component: CharactersListLayoutComponent;
  let fixture: ComponentFixture<CharactersListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event on value change in searchControl', fakeAsync(() => {
    jest.spyOn(component.searchEvent, 'emit');
    component.searchControl.setValue('test');
    tick(500);
    expect(component.searchEvent.emit).toHaveBeenCalledWith('test');
  }));

  it('should emit scrollEndEvent when onScrollEnd is called', () => {
    jest.spyOn(component.scrollEndEvent, 'emit');
    component.searchControl.setValue('test');
    component.onScrollEnd();
    expect(component.scrollEndEvent.emit).toHaveBeenCalledWith('test');
  });

  it('should emit favoriteEvent when onFavorite is called', () => {
    const character: ICharacterViewModel = CHARACTERS_MOCK_VIEW_MODEL[0];
    component.characters = [character];
    jest.spyOn(component.favoriteEvent, 'emit');
    component.onFavorite(0);
    expect(component.favoriteEvent.emit).toHaveBeenCalledWith(character);
  });

  it('should toggle isFavorite property when onFavorite is called', () => {
    const character: ICharacterViewModel = CHARACTERS_MOCK_VIEW_MODEL[0];
    component.characters = [character];
    component.onFavorite(0);
    expect(component.characters![0].isFavorite).toBe(true);
    component.onFavorite(0);
    expect(component.characters![0].isFavorite).toBe(false);
  });

  it('should use trackByFn correctly', () => {
    const index = 1;
    expect(component.trackByFn(index)).toBe(index);
  });
});
