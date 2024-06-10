import { Component, Input } from '@angular/core';
import { IMenuDataAccess } from '../../data-access';
import { CommonModule } from '@angular/common';
import { RoutesEnum } from '@shared/enums';
import { APP_ICONS, FontsModule } from '@shared/modules';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'rickmorty-header-layout',
  standalone: true,
  imports: [CommonModule, FontsModule, RouterModule],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss',
})
export class HeaderLayoutComponent {
  @Input() favoriteCount = 0;

  menus: IMenuDataAccess[] = [
    {
      name: 'Inicio',
      path: RoutesEnum.HOME,
      icon: APP_ICONS.house,
    },
    {
      name: 'Favoritos',
      path: RoutesEnum.FAVORITES,
      icon: APP_ICONS.heart,
    },
  ];

  constructor(private readonly router: Router) {}

  navigateTo(path: RoutesEnum): void {
    this.router.navigate([path]);
  }
}
