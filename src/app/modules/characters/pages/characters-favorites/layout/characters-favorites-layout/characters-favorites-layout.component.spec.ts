import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFavoritesLayoutComponent } from './characters-favorites-layout.component';

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
});
