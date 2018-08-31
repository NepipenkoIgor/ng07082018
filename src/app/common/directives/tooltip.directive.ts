import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[courseTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
  @HostBinding('class.tooltip-container')
  public tooltipContainer = true;

  @Input()
  public set courseTooltip(text: string) {
    if (!text) {
      return;
    }

    this._tooltipContext.textContent = text;
  }

  private _tooltipContext: HTMLSpanElement = this._renderer.createElement('span');

  @HostListener('document:keyup.escape', ['$event'])
  public windowHide(e: KeyboardEvent): void {
    // if (e.keyCode !== 27) {
    //   return;
    // }
    this.hide();
  }

  public constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
  }

  public ngOnInit(): void {
    // this._tooltipContext = this._renderer.createElement('span');
    console.log(this._elementRef.nativeElement);
    this._tooltipContext.className = 'tooltiptext';
    this._elementRef.nativeElement.appendChild(this._tooltipContext);
  }

  public hide(): void {
    this._tooltipContext.classList.remove('open');
  }

  public show(): void {
    this._tooltipContext.classList.add('open');
  }

}
