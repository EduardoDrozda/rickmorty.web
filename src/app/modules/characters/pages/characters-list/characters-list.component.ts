import { Component } from '@angular/core';
import { CharactersListLayoutComponent } from './layout/characters-list-layout';

@Component({
  selector: 'rickmorty-characters-list',
  standalone: true,
  imports: [CharactersListLayoutComponent],
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent {}
