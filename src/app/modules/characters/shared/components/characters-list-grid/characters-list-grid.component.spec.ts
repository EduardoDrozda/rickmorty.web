import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListGridComponent } from './characters-list-grid.component';

describe('CharactersListGridComponent', () => {
  let component: CharactersListGridComponent;
  let fixture: ComponentFixture<CharactersListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
