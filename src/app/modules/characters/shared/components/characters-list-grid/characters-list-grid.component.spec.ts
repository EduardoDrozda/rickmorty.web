import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListGridComponent } from './characters-list-grid.component';
import { CHARACTERS_MOCK_VIEW_MODEL } from '@shared/mocks/characters';

describe('CharactersListGridComponent', () => {
  let component: CharactersListGridComponent;
  let fixture: ComponentFixture<CharactersListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit favorite event', () => {
    jest.spyOn(component.favoriteEvent, 'emit');
    component.onFavorite(1);
    expect(component.favoriteEvent.emit).toHaveBeenCalledWith(1);
  });

  it('should emit scroll event', () => {
    component.enableInfiniteScroll = true;
    jest.spyOn(component.scrollEndEvent, 'emit');
    component.onScrollEnd();
    expect(component.scrollEndEvent.emit).toHaveBeenCalled();
  });

  it('should not emit scroll event', () => {
    component.enableInfiniteScroll = false;
    jest.spyOn(component.scrollEndEvent, 'emit');
    component.onScrollEnd();
    expect(component.scrollEndEvent.emit).not.toHaveBeenCalled();
  });

  it('should track by id', () => {
    const character = CHARACTERS_MOCK_VIEW_MODEL[0];
    expect(component.trackByFn(1, character)).toBe(1);
  });
});
