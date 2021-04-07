import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  constructor(element: ElementRef) {
    // let div = document.createElement('div');
    // div.style.textDecoration = '';
    element.nativeElement.style.textDecoration = 'underline';
  }

} 