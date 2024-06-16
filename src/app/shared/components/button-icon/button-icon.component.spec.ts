import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconComponent } from './button-icon.component';
import { FontComponent } from '../font';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'rickmorty-mock-buton-component',
  template:
    '<rickmorty-button-icon id="button-icon" icon="heart" (clickEvent)="onClick()" />',
})
class MockButtonComponent {
  onClick(): string {
    return 'click event'
  }
}

describe('ButtonIconComponent', () => {
  let component: MockButtonComponent;
  let fixture: ComponentFixture<MockButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonIconComponent, FontComponent],
      declarations: [MockButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MockButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click event', () => {
    jest.spyOn(component, 'onClick');
    const button = fixture.debugElement.query(By.css('[name="button-icon"]'));
    button.triggerEventHandler('click', null);
    expect(component.onClick).toHaveBeenCalled();
  });
});
