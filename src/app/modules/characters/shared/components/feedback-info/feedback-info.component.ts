import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rickmorty-feedback-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-info.component.html',
  styleUrl: './feedback-info.component.scss',
})
export class FeedbackInfoComponent {
  @Input() title = 'Nada foi encontrado';
  @Input() subtitle = 'Tente realizar uma nova busca.';
}
