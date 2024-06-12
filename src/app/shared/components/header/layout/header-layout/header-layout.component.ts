import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesEnum } from '@shared/enums';
import { APP_ICONS, FontsModule } from '@shared/modules';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IMenu } from '../../interfaces';

@Component({
  selector: 'rickmorty-header-layout',
  standalone: true,
  imports: [CommonModule, FontsModule, RouterModule],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss',
})
export class HeaderLayoutComponent {
  @Input() favoriteCount = 0;

  currentRoute!: string;

  menus: IMenu[] = [
    {
      name: 'Inicio',
      path: `/${RoutesEnum.CHARACTERS}`,
      icon: APP_ICONS.house,
    },
    {
      name: 'Favoritos',
      path: `/${RoutesEnum.CHARACTERS}/${RoutesEnum.FAVORITES}`,
      icon: APP_ICONS.heart,
      hasCount: true,
    },
  ];

  constructor(private readonly route: Router) {
    this.route.events
      .pipe(
        takeUntilDestroyed(),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe({
        next: () => {
          const url = this.route.url;
          this.setCurrentRoute(url);
        },
      });
  }

  setCurrentRoute(route: string): void {
    this.currentRoute = route;
  }
}
