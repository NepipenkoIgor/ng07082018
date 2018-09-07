import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../../constants';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class OneProductResolverService implements Resolve<IProduct> {

  public constructor(
    private _http: HttpClient,
    private _router: Router,
    @Inject(BASE_URL) private _baseUrl: string
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this._http.get(`${this._baseUrl}/products/${route.params.id}`)
      .pipe(
        map((res: { data: IProduct }) => res.data),
        catchError((err) => {
          this._router.navigate(['/products']);
          return of(null);
        })
      );
  }

}
