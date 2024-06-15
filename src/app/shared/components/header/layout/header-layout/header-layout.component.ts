import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesEnum } from '@shared/enums';

import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
