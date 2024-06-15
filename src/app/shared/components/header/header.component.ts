import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { HeaderLayoutComponent } from './layout';
import { FavoritesService } from '@shared/services/providers';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, filter } from 'rxjs';
import { ICharacterViewModel } from '@core/view-models';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { RoutesEnum } from '@shared/enums';
import { IMenu } from './interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rickmorty-header',
  standalone: true,
  imports: [HeaderLayoutComponent, RouterModule, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly favoriteService = inject(FavoritesService);
  private readonly destroyRef = inject(DestroyRef);

  favorites$!: Observable<ICharacterViewModel[]>;
  currentRoute = '';

  menus: IMenu[] = [
    {
      name: 'Inicio',
      path: `/${RoutesEnum.CHARACTERS}`,
      icon: 'house',
    },
    {
      name: 'Favoritos',
      path: `/${RoutesEnum.CHARACTERS}/${RoutesEnum.FAVORITES}`,
      icon: 'heart',
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

    this.favorites$ = this.favoriteService
      .getFavorites()
      .pipe(takeUntilDestroyed());
  }

  setCurrentRoute(route: string): void {
    this.currentRoute = route;
  }
}
