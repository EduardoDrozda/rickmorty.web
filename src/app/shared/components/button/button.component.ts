import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rickmorty-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() id!: string;
  @Input() text!: string;
  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    this.clickEvent.emit();
  }
}
