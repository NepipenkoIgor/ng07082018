import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {ProductsService} from './common/services/products.service';

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
  public loading = false;
  public products$: Observable<IProduct[]>;

  public constructor(
    private _sanitazer: DomSanitizer,
    private _productsService: ProductsService,
  ) {

    setTimeout(() => {
      this.loading = true;
    }, 5000);
    // products$.subscribe((products: IProduct[]) => {
    //   this.productsData = products;
    // });
  }

  public ngOnInit(): void {
    this.products$ = this._productsService.products$();
  }


  // public span(): SafeHtml {
  //   return this._sanitazer.bypassSecurityTrustHtml(`<span style="color:red">Hi ${this.searchText || ''} </span>`);
  // }

}
