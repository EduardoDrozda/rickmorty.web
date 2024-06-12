import { Component, OnInit, inject } from '@angular/core';
import { CharactersListLayoutComponent } from './layout/characters-list-layout';
import { CharactersService } from '@modules/characters/shared/services/providers/characters';
import { Observable } from 'rxjs';
import { ICharacterViewModel } from '@modules/characters/shared/interfaces/view-models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rickmorty-characters-list',
  standalone: true,
  imports: [CommonModule, CharactersListLayoutComponent],
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent implements OnInit {
  private readonly charactersService = inject(CharactersService);

  characters$!: Observable<ICharacterViewModel[]>;

  ngOnInit() {
    this.characters$ = this.charactersService.getCharacters();
  }
}
