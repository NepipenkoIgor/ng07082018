import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IProduct} from '../../store/reducers/products.reducer';

@Component({
  selector: 'course-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<IProduct[]>;

  public constructor(
    private _store: Store<any>
  ) {
  }

  ngOnInit() {
    this.products$ = this._store.select('products');
  }

}
