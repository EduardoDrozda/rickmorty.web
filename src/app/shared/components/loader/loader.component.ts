import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rickmorty-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
})
export class LoaderComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
