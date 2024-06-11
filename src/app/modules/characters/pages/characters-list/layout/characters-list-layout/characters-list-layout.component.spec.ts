import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListLayoutComponent } from './characters-list-layout.component';

describe('CharactersListLayoutComponent', () => {
  let component: CharactersListLayoutComponent;
  let fixture: ComponentFixture<CharactersListLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
