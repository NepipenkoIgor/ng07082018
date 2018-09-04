import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddProductToCart} from '../store/actions/cart.action';


@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public product: IProduct;

  @Input()
  public isOdd: boolean;

  public constructor(
    private _store: Store<any>
  ) {
  }

  public dolarPrice(price: number): number {
    return price * 28;
  }

  public addToCart(product: IProduct) {
    this._store.dispatch(new AddProductToCart(product));
  }

}
