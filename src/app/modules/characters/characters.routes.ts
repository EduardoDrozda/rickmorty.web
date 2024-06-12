import { Routes } from '@angular/router';
import { RoutesEnum } from '@shared/enums';

export const charactersRoutes: Routes = [
  { path: '', redirectTo: RoutesEnum.CHARACTERS, pathMatch: 'full' },
  {
    path: RoutesEnum.CHARACTERS,
    loadComponent: () =>
      import('./characters.component').then((m) => m.CharactersComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/characters-list/characters-list.component').then(
            (m) => m.CharactersListComponent
          ),
          pathMatch: 'full',
      },
      {
        path: RoutesEnum.FAVORITES,
        loadComponent: () =>
          import(
            './pages/characters-favorites/characters-favorites.component'
          ).then((m) => m.CharactersFavoritesComponent),
          pathMatch: 'full',
      },
    ],
  },
];
