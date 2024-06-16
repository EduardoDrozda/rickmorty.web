import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCardComponent } from './characters-card.component';
import { Component, SimpleChange, ViewChild } from '@angular/core';
import { ICharacterViewModel } from '@core/view-models';
import { CHARACTERS_MOCK_VIEW_MODEL } from '@shared/mocks/characters';

@Component({
  selector: 'rickmorty-character-card',
  standalone: true,
  imports: [CharactersCardComponent],
  template: `
    <rickmorty-characters-card
      [character]="character"
      index="1"
      (favoriteEvent)="onFavorite()"
    />
  `,
})
class MockCharacterCardComponent {
  character: ICharacterViewModel = {
    ...CHARACTERS_MOCK_VIEW_MODEL[0],
    isFavorite: false,
  };

  @ViewChild(CharactersCardComponent) child!: CharactersCardComponent;

  onFavorite(): void {
    this.character.isFavorite = !this.character.isFavorite;
  }
}

describe('CharactersCardComponent', () => {
  let component: MockCharacterCardComponent;
  let fixture: ComponentFixture<MockCharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockCharacterCardComponent, CharactersCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MockCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit favorite event', () => {
    jest.spyOn(component, 'onFavorite');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onFavorite).toHaveBeenCalled();
  });

  it('should control favorite on ngOnChanges', () => {
    component.child.ngOnChanges({
      character: new SimpleChange(null, component.character, true),
    });

    expect(component.child.icon).toBe('heartRegular');
    expect(component.child.color).toBe('white');
  });

  it('should control favorite on ngOnChanges', () => {
    component.character.isFavorite = true;
    component.child.ngOnChanges({
      character: new SimpleChange(null, component.character, true),
    });

    expect(component.child.icon).toBe('heart');
    expect(component.child.color).toBe('black');
  });
});
