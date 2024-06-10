import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faHeart } from '@fortawesome/free-solid-svg-icons';

export const APP_ICONS = {
  house: faHouse,
  heart: faHeart,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FontsModule {}
