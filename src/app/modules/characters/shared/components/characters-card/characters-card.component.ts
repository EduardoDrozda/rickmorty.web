import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICharacterViewModel } from '../../interfaces/view-models';
import {
  APP_ICONS,
  ButtonIconComponent,
  FontComponent,
} from '@shared/components';

@Component({
  selector: 'rickmorty-characters-card',
  standalone: true,
  imports: [CommonModule, ButtonIconComponent],
  templateUrl: './characters-card.component.html',
  styleUrl: './characters-card.component.scss',
})
export class CharactersCardComponent implements OnChanges {
  @Input({ required: true }) character!: ICharacterViewModel;
  @Input({ required: true }) index!: number;
  @Output() favoriteEvent = new EventEmitter<number>();

  icon!: keyof typeof APP_ICONS;
  color: 'white' | 'black' = 'white';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['character'] && changes['character'].currentValue) {
      this.controlFavorite();
    }
  }

  private controlFavorite(): void {
    if (this.character.isFavorite) {
      this.icon = 'heart';
      this.color = 'black';
      return;
    }
    this.icon = 'heartRegular';
    this.color = 'white';
  }

  onFavorite(): void {
    this.favoriteEvent.emit(this.index);
  }
}
