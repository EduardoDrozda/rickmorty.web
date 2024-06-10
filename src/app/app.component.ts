import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontsModule } from '@shared/modules/fonts';

@Component({
  selector: 'rickmorty-root',
  standalone: true,
  imports: [RouterOutlet, FontsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
