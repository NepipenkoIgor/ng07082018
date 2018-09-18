import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TooltipDirective} from './tooltip.directive';
import {By} from '@angular/platform-browser';


@Component({
  selector: 'test-component',
  template: `
    <div class="with_tooltip" [courseTooltip]="tooltipText" #t="tooltip"></div>
    <div class="tooltip_control"
         (mouseenter)="t.show()"
         (mouseleave)="t.hide()"
    ></div>
  `
})
class TestComponent {
  public tooltipText = 'text on tooltip';
}

describe('Tooltip directive', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TooltipDirective,
        TestComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component with directive should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should work', () => {
    const tooltipContainer = fixture.debugElement.query(By.css('.with_tooltip'));
    const tooltip = tooltipContainer.query(By.css('.tooltiptext'));
    expect(tooltipContainer.nativeElement.classList.contains('tooltip-container')).toBeTruthy();
    expect(tooltip.nativeElement.classList.contains('open')).toBeFalsy();
    const control = fixture.debugElement.query(By.css('.tooltip_control'));
    control.triggerEventHandler('mouseenter', null);
    expect(tooltip.nativeElement.classList.contains('open')).toBeTruthy();
    control.triggerEventHandler('mouseleave', null);
    expect(tooltip.nativeElement.classList.contains('open')).toBeFalsy();
  });

});
