import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontComponent } from './font.component';
import { Component } from '@angular/core';

@Component({
  selector: 'rickmorty-font-mock',
  standalone: true,
  imports: [FontComponent],
  template: '<rickmorty-font id="mock-id" icon="house" color="white" />'
}) class FontMockTestComponent {}

describe('FontComponent', () => {
  let component: FontMockTestComponent;
  let fixture: ComponentFixture<FontMockTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontMockTestComponent, FontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontMockTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
