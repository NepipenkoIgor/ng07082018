import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {RemoveProductFromCart} from '../../store/actions/cart.action';

@Component({
  selector: 'course-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public isOpen = true;

  public products$: Observable<IProduct[]>;

  public constructor(
    private _store: Store<any>
  ) {
  }

  public ngOnInit() {
    this.products$ = this._store.select('cartProducts');
  }

  public removeProduct(product: ICartProduct) {
    this._store.dispatch(new RemoveProductFromCart(product));
  }

}
