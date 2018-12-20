import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

/**
 * To be improved. This directive is not used anywhere right now. It's meant to demonstrate an
 * implementation of a custom structural directive.
 */
@Directive({
  selector: '[appNgxUnless]'
})
export class NgxUnlessDirective {

  visible = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  @Input()
  set appNgxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }

}
