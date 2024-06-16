import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit click event', () => {
    component.id = 'button';
    fixture.detectChanges();

    jest.spyOn(component, 'onClick');
    const button = fixture.debugElement.query(By.css('[id="button"]'));
    button.triggerEventHandler('click', null);
    expect(component.onClick).toHaveBeenCalled();
  });
});
