import {AfterContentInit, Component, ContentChild, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterContentInit {

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

  }


  public ngOnInit(): void {
    console.log(`in ngOnInit ${this.placeholder}`);
  }

  public onSearch(value: string): void {
    this.search.emit(value);
  }

  public ngAfterContentInit(): void {
    console.log(this.myLogo);
  }

  public goToPage(): void {
    this._router.navigate(['signup']);
  }

}
