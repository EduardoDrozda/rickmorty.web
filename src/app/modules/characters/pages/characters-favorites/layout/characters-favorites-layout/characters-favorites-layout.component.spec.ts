import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFavoritesLayoutComponent } from './characters-favorites-layout.component';
import { By } from '@angular/platform-browser';
import { CHARACTERS_MOCK_VIEW_MODEL } from '@shared/mocks/characters';
import { ICharacterViewModel } from '@core/view-models';

describe('CharactersFavoritesLayoutComponent', () => {
  let component: CharactersFavoritesLayoutComponent;
  let fixture: ComponentFixture<CharactersFavoritesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersFavoritesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersFavoritesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit favoriteEvent when onFavorite is called', () => {
    jest.spyOn(component.favoriteEvent, 'emit');
    component.onFavorite(1);
    expect(component.favoriteEvent.emit).toHaveBeenCalledWith(1);
  });

  it('should emit navigateEvent when onNavigate is called', () => {
    jest.spyOn(component.navigateEvent, 'emit');
    component.onNavigate();
    expect(component.navigateEvent.emit).toHaveBeenCalled();
  });
});
