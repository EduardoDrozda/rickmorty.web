import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CharactersListLayoutComponent } from './layout/characters-list-layout';
import { CharactersService } from '@modules/characters/shared/services/providers/characters';
import { Observable } from 'rxjs';
import { ICharacterViewModel } from '@modules/characters/shared/interfaces/view-models';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'rickmorty-characters-list',
  standalone: true,
  imports: [CommonModule, CharactersListLayoutComponent],
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent implements OnInit {
  private readonly charactersService = inject(CharactersService);
  private destroyRef = inject(DestroyRef);

  characters: ICharacterViewModel[] = [];
  private page = 1;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacterByName(name: string): void {
    console.log(name);
    this.page = 1;
    this.getCharacters({ name, page: this.page.toString() });
  }

  getMoreCharacters(name: string): void {
    this.page++;
    this.getCharacters({ page: this.page.toString(), name });
  }

  private getCharacters(filter?: Record<string, string>): void {
    this.charactersService
      .getCharacters(filter)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (characters) =>
          (this.characters = [...this.characters, ...characters]),
        error: (error) => console.error(error),
      });
  }
}
