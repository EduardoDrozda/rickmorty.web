import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faHeart, faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export const APP_ICONS = {
  house: faHouse,
  heart: faHeart,
  heartRegular: faHeartRegular,
};

@Component({
  selector: 'rickmorty-font',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './font.component.html',
  styleUrl: './font.component.scss',
})
export class FontComponent {
  @Input() id!: string;
  @Input() icon!: keyof typeof APP_ICONS;
  @Input() size: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' = 'lg';
  @Input() color!: string;

  get iconDefinition(): IconDefinition {
    return APP_ICONS[this.icon] as IconDefinition;
  }
}
