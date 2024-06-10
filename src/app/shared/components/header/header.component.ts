import { Component } from '@angular/core';
import { HeaderLayoutComponent } from './layout';

@Component({
  selector: 'rickmorty-header',
  standalone: true,
  imports: [HeaderLayoutComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
