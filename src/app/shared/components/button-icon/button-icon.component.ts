import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { APP_ICONS, FontComponent } from '../font';

@Component({
  selector: 'rickmorty-button-icon',
  standalone: true,
  imports: [CommonModule, FontComponent],
  templateUrl: './button-icon.component.html',
})
export class ButtonIconComponent {
  @Input() id!: string;
  @Input() icon!: keyof typeof APP_ICONS;
  @Input() color: 'white' | 'black' = 'white';
  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    this.clickEvent.emit();
  }
}
