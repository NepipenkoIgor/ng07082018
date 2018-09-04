import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GET_PRODUCTS_PENDING, GetProductsError, GetProductsSuccess} from '../actions/products.action';
import {BASE_URL} from '../../constants';

@Injectable()
export class ProductsEffects {
  // Listen for the 'GET_PRODUCTS_PENDING' action
  @Effect()
  products$: Observable<Action> = this.actions$.pipe(
    ofType(GET_PRODUCTS_PENDING),
    switchMap(() =>
      this._http.get(`${this._baseUrl}/products`)
        .pipe(
          map((res: { data: IProduct[] }) => new GetProductsSuccess(res.data)),
          catchError((err) => of(new GetProductsError(err)))
        )
    )
  );

  public constructor(
    private _http: HttpClient,
    private actions$: Actions,
    @Inject(BASE_URL) private _baseUrl: string
  ) {
  }
}
