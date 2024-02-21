import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTaskHighlight]',
})
export class TaskHighlightDirective {
  @Input() appTaskHighlight: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    switch (this.appTaskHighlight) {
      case 'To Do':
        this.el.nativeElement.style.backgroundColor = 'lightblue';
        break;
      case 'In Progress':
        this.el.nativeElement.style.backgroundColor = 'aqua';
        break;
      case 'Done':
        this.el.nativeElement.style.backgroundColor = 'lightgreen';
        break;
    }
  }
}
