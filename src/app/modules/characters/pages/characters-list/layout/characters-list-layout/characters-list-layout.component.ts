import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FeedbackInfoComponent } from '@modules/characters/shared/components';
import { ICharacterViewModel } from '@modules/characters/shared/interfaces/view-models';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'rickmorty-characters-list-layout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FeedbackInfoComponent],
  templateUrl: './characters-list-layout.component.html',
  styleUrl: './characters-list-layout.component.scss',
})
export class CharactersListLayoutComponent {
  @Input() characters: ICharacterViewModel[] | null = [];

  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged(), takeUntilDestroyed())
      .subscribe((value) => {
        console.log(value);
      });
  }
}
