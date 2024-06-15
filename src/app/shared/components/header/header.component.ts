import { Component, inject } from '@angular/core';
import { HeaderLayoutComponent } from './layout';
import { FavoritesService } from '@shared/services/providers';

@Component({
  selector: 'rickmorty-header',
  standalone: true,
  imports: [HeaderLayoutComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly favoriteService = inject(FavoritesService);
}
