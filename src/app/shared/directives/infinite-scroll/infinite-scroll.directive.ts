import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[rickmortyInfiniteScroll]',
  standalone: true,
})
export class InfiniteScrollDirective {
  @Output() endElementEmitter = new EventEmitter<void>();

  @HostListener('scroll', ['$event.target'])
  onEndDiv(event: any) {
    const isEndElement =
      event.offsetHeight + event.scrollTop >= event.scrollHeight;

    if (isEndElement) {
      this.endElementEmitter.emit();
    }
  }
}
