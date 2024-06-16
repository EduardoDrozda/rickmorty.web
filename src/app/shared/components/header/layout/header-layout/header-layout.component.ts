import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { IMenu } from '../../interfaces';
import { FontComponent } from '@shared/components/font';

@Component({
  selector: 'rickmorty-header-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, FontComponent],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss',
})
export class HeaderLayoutComponent {
  @Input() favoriteCount = 0;
  @Input() currentRoute = '';
  @Input() menus: IMenu[] = [];
}
