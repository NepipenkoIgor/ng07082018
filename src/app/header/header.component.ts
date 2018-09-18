import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit,
  AfterContentChecked, AfterViewChecked {

  @Input()
  public logo: string;

  @Input()
  public placeholder: string;

  @Output()
  public search: EventEmitter<string> = new EventEmitter();

  @ContentChild('logo')
  public myLogo;


  public constructor(
    private _router: Router
  ) {
    console.log('constructor');
  }

  public ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  public ngOnInit(): void {
    // this._router.events.subscribe((e) => {
    //   console.log(e);
    // });
    console.log(`in ngOnInit ${this.placeholder}`);
  }

  public ngDoCheck() {
    console.log('ngDoCheck');
  }

  public ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  public ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  public ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  public ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  public onSearch(value: string): void {
    this.search.emit(value);
  }

  // public ngAfterContentInit(): void {
  //   console.log(this.myLogo);
  // }

  public goToPage(): void {
    this._router.navigate(['signup']);
  }

}
