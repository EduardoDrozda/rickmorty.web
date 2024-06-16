import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontComponent } from './font.component';
import { Component } from '@angular/core';

@Component({
  selector: 'rickmorty-font-mock',
  standalone: true,
  imports: [FontComponent],
  template: '<rickmorty-font id="mock-id" icon="house" color="white" />'
}) class FontComponentTest {}

describe('FontComponent', () => {
  let component: FontComponentTest;
  let fixture: ComponentFixture<FontComponentTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontComponentTest, FontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontComponentTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
