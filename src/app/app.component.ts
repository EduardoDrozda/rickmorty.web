import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@shared/components';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'rickmorty-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
