import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICharacterViewModel } from '../../interfaces/view-models';

@Component({
  selector: 'rickmorty-characters-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters-card.component.html',
  styleUrl: './characters-card.component.scss',
})
export class CharactersCardComponent {
  @Input({ required: true }) character!: ICharacterViewModel;
  @Input() isFavorite = false;
}
