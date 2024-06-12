import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FeedbackInfoComponent } from '@modules/characters/shared/components';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'rickmorty-characters-list-layout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FeedbackInfoComponent],
  templateUrl: './characters-list-layout.component.html',
  styleUrl: './characters-list-layout.component.scss',
})
export class CharactersListLayoutComponent {
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((value) => {
        console.log(value);
      });
  }
}
