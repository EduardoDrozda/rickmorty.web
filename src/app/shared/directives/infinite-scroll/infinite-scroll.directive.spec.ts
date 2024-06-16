import { Component } from '@angular/core';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div
    rickmortyInfiniteScroll
    (endElementEmitter)="onScrollEnd($event)"
    style="height: 100px; overflow: auto;"
  >
    <div style="height: 300px;"></div>
  </div>`,
})
class TestComponent {
  onScrollEnd(event: any) {
    // Handler function
  }
}

describe('InfiniteScrollDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InfiniteScrollDirective],
      declarations: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit endElementEmitter when scrolled to bottom', () => {
    const divElement = fixture.debugElement.query(
      By.directive(InfiniteScrollDirective)
    ).nativeElement;
    const spy = jest.spyOn(component, 'onScrollEnd');


    divElement.scrollTop = divElement.scrollHeight - divElement.offsetHeight;
    divElement.dispatchEvent(new Event('scroll'));

    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
