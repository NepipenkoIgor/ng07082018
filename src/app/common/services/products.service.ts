import {Inject} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../constants';

// @Injectable()
export class ProductsService {

  public constructor(
    @Inject(HttpClient) private _http: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string
  ) {
  }

  public products$(): Observable<IProduct[]> {
    return this._http.get(`${this._baseUrl}/products`)
      .pipe(
        map((res: { data: IProduct[] }) => res.data),
        catchError((err) => of([]))
      );
  }
}
