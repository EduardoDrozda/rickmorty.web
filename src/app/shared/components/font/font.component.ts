import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';

export const APP_ICONS = {
  house: faHouse,
  heart: faHeart,
  heartOutline: faHeart
};

@Component({
  selector: 'rickmorty-font',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './font.component.html',
  styleUrl: './font.component.scss'
})
export class FontComponent {
  @Input() id!: string;
  @Input() icon!: IconDefinition;
}
