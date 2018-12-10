import { Directive, HostBinding, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('appHighlighted')
  appHighlighted;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    // console.log('Directive created...');
  }

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.appHighlighted;
  }

  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return 'true';
  // }

  @HostListener('mouseover', ['$event'])
  mouseOver($event) {

    // console.log($event);

    this.appHighlighted = true;
    this.toggleHighlight.emit(this.appHighlighted);
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave($event) {

    // console.log($event);

    this.appHighlighted = false;
    this.toggleHighlight.emit(this.appHighlighted);
  }

  toggle() {
    this.appHighlighted = !this.appHighlighted;
    this.toggleHighlight.emit(this.appHighlighted);
  }
}
