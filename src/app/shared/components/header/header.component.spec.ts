import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { ActivatedRoute, NavigationEnd, Router, provideRouter } from '@angular/router';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let router = {
    events: of(new NavigationEnd(0, '/characters', '/characters')),
    url: '/characters',
    createUrlTree: () => { },
    serializeUrl: () => { }
  }

  let activatedRoute = {
    snapshot: {
      data: {
        title: 'Characters'
      }
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{
        provide: Router,
        useValue: router
      }, {
        provide: ActivatedRoute,
        useValue: activatedRoute

      }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set current route', () => {
    expect(component.currentRoute).toBe('/characters');
  });

  it('should set menus', () => {
    expect(component.menus.length).toBe(2);
  });
});
