import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.ngStyle.{'background-color:white'}
   }

}
