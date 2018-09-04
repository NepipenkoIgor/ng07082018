import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {GetProductsPending} from './store/actions/products.action';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // interpolation: ['/', ']']
  // encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {
  public logo = 'assets/img/logo.png';
  public placeholder = 'Более 1000 товаров';
  public searchText;
  public products$: Observable<IProduct[]>;

  public constructor(
    private _sanitazer: DomSanitizer,
    private _store: Store<any>
  ) {
  }

  public ngOnInit(): void {
    this._store.dispatch(new GetProductsPending());
    this.products$ = this._store.select('products');
  }


}
